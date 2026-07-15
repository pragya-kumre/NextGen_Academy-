import { COURSES } from "./institute-data";
import type { LeadDraft } from "./leads";

// Rule-based demo responses for the Student Support Assistant.
// Kept modular so a real n8n webhook can drop in later:
// swap `getDemoReply` for `fetch(VITE_N8N_WEBHOOK_URL, ...)`.

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
}

export const SUGGESTED_QUESTIONS = [
  "What are the course fees?",
  "Which course is best for beginners?",
  "Do you provide placement support?",
  "When does the next batch start?",
  "Which course should I choose for placements?",
  "Do you offer DSA training?",
];

const INTENT_KEYWORDS = [
  "join",
  "enroll",
  "enrol",
  "register",
  "admission",
  "sign me up",
  "sign up",
  "contact me",
  "call me",
  "reach out",
  "interested in joining",
  "want to take",
  "next batch",
];

export function detectAdmissionIntent(text: string): boolean {
  const t = text.toLowerCase();
  return INTENT_KEYWORDS.some((k) => t.includes(k));
}

export function detectCourse(text: string): string | undefined {
  const t = text.toLowerCase();
  const found = COURSES.find(
    (c) => t.includes(c.name.toLowerCase()) || t.includes(c.slug),
  );
  if (found) return found.name;
  if (t.includes("python")) return "Python Programming";
  if (t.includes("web")) return "Web Development";
  if (t.includes("aptitude") || t.includes("reasoning")) return "Aptitude & Reasoning";
  if (t.includes("dsa") || t.includes("data structure") || t.includes("algorithm")) return "Data Structures & Algorithms (DSA)";
  if (t.includes("excel") || t.includes("data analytic") || t.includes("analytics")) return "Data Analytics with Excel";
  if (t.includes("interview")) return "Interview Preparation";
  return undefined;
}

export function extractEmail(text: string): string | undefined {
  const m = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
  return m?.[0];
}

export function extractPhone(text: string): string | undefined {
  const m = text.match(/(\+?\d[\d\s-]{6,}\d)/);
  return m?.[0].replace(/\s|-/g, "");
}

/** Very small rule-based reply generator for the demo. */
export function getDemoReply(userText: string, draft: LeadDraft): string {
  const t = userText.toLowerCase();

  // Course fees
  if (t.includes("fee") || t.includes("price") || t.includes("cost") || t.includes("charge")) {
    const course = detectCourse(userText);
    if (course) {
      const c = COURSES.find((x) => x.name === course);
      if (c) return `**${c.name}** is **${c.price}** for a ${c.duration} program (${c.level}). Would you like to enroll or hear about batch timings?`;
    }
    return [
      "Here's a quick fee overview:",
      "",
      ...COURSES.map((c) => `- **${c.name}** — ${c.price} · ${c.duration}`),
      "",
      "Which one would you like to know more about?",
    ].join("\n");
  }

  // Timings
  if (t.includes("timing") || t.includes("schedule") || t.includes("batch")) {
    return [
      "We run three flexible batches:",
      "- **Morning** — 8:00 AM to 10:00 AM",
      "- **Evening** — 6:00 PM to 8:00 PM",
      "- **Weekend** — Sat & Sun, 10:00 AM to 2:00 PM",
      "",
      "Which one works best for you?",
    ].join("\n");
  }

  // Placement
  if (t.includes("placement") || t.includes("job") || t.includes("hire")) {
    return "We offer **90% placement assistance** with 20+ hiring partners, weekly mock interviews, resume reviews, and referrals. Would you like an admission counselor to walk you through the placement process?";
  }

  // Location
  if (t.includes("where") || t.includes("location") || t.includes("address")) {
    return "We're located in **Indore, Madhya Pradesh**. Classes are available on-campus and online across all batches.";
  }

  // Mode
  if (t.includes("online") || t.includes("offline") || t.includes("mode")) {
    return "Every course is available in **Online, Offline, and Hybrid** modes. You can switch modes between modules if your schedule changes.";
  }

  // Certificate
  if (t.includes("certificate")) {
    return "Yes — you receive an industry-recognized completion certificate along with project certificates for every hands-on project you ship.";
  }

  // Eligibility
  if (t.includes("eligibility") || t.includes("who can join") || t.includes("prerequisite")) {
    return "Anyone from a college student to a working professional or career switcher can join. Most courses are beginner-friendly — no prior coding experience needed for our foundational tracks.";
  }

  // Course list
  if (t.includes("course") || t.includes("what do you") || t.includes("offer")) {
    return [
      "We offer six placement-focused programs:",
      ...COURSES.map((c) => `- **${c.name}** — ${c.short}`),
      "",
      "Which one interests you most?",
    ].join("\n");
  }

  // Enrollment intent — guide toward missing info
  if (detectAdmissionIntent(userText)) {
    if (!draft.name) return "Wonderful! I can help you with admission. May I know your **full name**?";
    if (!draft.course) return `Thanks ${draft.name.split(" ")[0]}! Which **course** are you interested in?`;
    if (!draft.phone && !draft.email) return "Almost done — could you share your **phone number** or **email** so our admission counselor can reach out?";
    return "Great, I have everything I need. Submitting your enquiry now…";
  }

  // Greetings
  if (t.match(/\b(hi|hello|hey|namaste)\b/)) {
    return "Hi there! I'm the NextGen Academy Student Support Assistant. Ask me about courses, fees, batches, or placement — or say *'I want to join'* to start your admission.";
  }

  // Fallback
  return "Happy to help! You can ask about **courses**, **fees**, **batch timings**, **placement support**, or say *'I want to enroll in [course]'* to speak with an admission counselor.";
}

/** Update the running lead draft from a user message. */
export function updateDraftFromMessage(draft: LeadDraft, userText: string): LeadDraft {
  const next: LeadDraft = { ...draft };
  const email = extractEmail(userText);
  const phone = extractPhone(userText);
  const course = detectCourse(userText);
  if (email && !next.email) next.email = email;
  if (phone && !next.phone) next.phone = phone;
  if (course && !next.course) next.course = course;

  // Naive name capture: if AI just asked for the name and message is short & no digits/@.
  const looksLikeName =
    !next.name &&
    userText.trim().split(/\s+/).length <= 4 &&
    !/[@\d]/.test(userText) &&
    !/\?/.test(userText) &&
    userText.trim().length >= 2;
  if (looksLikeName) {
    // strip common prefixes
    const cleaned = userText.replace(/^(i am|i'm|my name is|this is)\s+/i, "").trim();
    if (cleaned.split(/\s+/).length <= 4) next.name = cleaned.replace(/[.!?]$/, "");
  }
  return next;
}