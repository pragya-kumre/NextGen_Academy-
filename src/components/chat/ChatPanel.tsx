import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Bot, Send, Sparkles, Loader2, CheckCircle2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  SUGGESTED_QUESTIONS,
  getDemoReply,
  detectAdmissionIntent,
  updateDraftFromMessage,
  type ChatMessage,
} from "@/lib/chat-demo";
import { isQualifiedLead, submitLead, type LeadDraft } from "@/lib/leads";

const INITIAL: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi! I'm the NextGen Academy Student Support Assistant. Ask me anything about courses, fees, batches, or placement — or say *'I want to enroll'* to start your admission.",
    timestamp: Date.now(),
  },
];

function renderMarkdownLite(text: string) {
  // very small markdown: **bold**, *italic*, lists, line breaks
  const escape = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);
  const lines = escape(text).split("\n");
  const out: string[] = [];
  let inList = false;
  for (const raw of lines) {
    const l = raw.trimEnd();
    if (l.startsWith("- ")) {
      if (!inList) { out.push("<ul class='mt-1 mb-1 space-y-0.5 list-disc pl-5'>"); inList = true; }
      out.push(`<li>${formatInline(l.slice(2))}</li>`);
    } else {
      if (inList) { out.push("</ul>"); inList = false; }
      if (l === "") out.push("<div class='h-2'></div>");
      else out.push(`<p>${formatInline(l)}</p>`);
    }
  }
  if (inList) out.push("</ul>");
  return out.join("");
}
function formatInline(s: string) {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export function ChatPanel({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState<LeadDraft>({});
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setInput("");

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);

    // Update lead draft in-place (functional so we can read latest below).
    let nextDraft = draft;
    setDraft((d) => {
      nextDraft = updateDraftFromMessage(d, trimmed);
      return nextDraft;
    });
    // Ensure we're using the updated draft below
    nextDraft = updateDraftFromMessage(draft, trimmed);

    setTyping(true);
    // Simulate thinking latency
    await new Promise((r) => setTimeout(r, 550 + Math.random() * 500));

    const reply = getDemoReply(trimmed, nextDraft);
    const asstMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: reply,
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, asstMsg]);
    setTyping(false);

    // If lead now qualifies AND user showed admission intent at some point, submit.
    const showedIntent =
      detectAdmissionIntent(trimmed) ||
      messages.some((m) => m.role === "user" && detectAdmissionIntent(m.content));

    if (!submitted && showedIntent && isQualifiedLead(nextDraft)) {
      const res = await submitLead(nextDraft, "chat");
      if (res.ok) {
        setSubmitted(true);
        setMessages((m) => [
          ...m,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              `✅ **Enquiry submitted!** Thanks ${nextDraft.name?.split(" ")[0] ?? "there"}. Our admission counselor will reach out about **${nextDraft.course}** shortly.`,
            timestamp: Date.now(),
          },
        ]);
        toast.success("Enquiry submitted successfully");
      } else {
        toast.error(res.error ?? "Couldn't submit enquiry. Please try again.");
      }
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  function onKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant",
        compact ? "h-[560px]" : "h-[640px]",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-background/60 px-5 py-4 backdrop-blur">
        <div className="relative">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
            <Bot className="h-5 w-5" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-emerald-500" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Student Support Assistant</p>
          <p className="text-xs text-muted-foreground">Online · Powered by NextGen Academy</p>
        </div>
        {submitted && (
          <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 sm:inline-flex">
            <CheckCircle2 className="h-3.5 w-3.5" /> Enquiry submitted
          </span>
        )}
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-[color:var(--surface)] p-5">
        {messages.map((m) => (
          <Message key={m.id} m={m} />
        ))}
        {typing && (
          <div className="flex items-end gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-background px-4 py-3 shadow-soft">
              <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
            </div>
          </div>
        )}
      </div>

      {/* Suggested */}
      {messages.length <= 2 && !typing && (
        <div className="border-t border-border bg-background/60 px-4 py-3">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Try asking
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => void send(q)}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Composer */}
      <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-border bg-background p-3">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          rows={1}
          placeholder="Ask about courses, fees, batches…"
          className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || typing}
          className="h-11 w-11 shrink-0 rounded-xl bg-gradient-brand shadow-elegant hover:opacity-95 disabled:opacity-50"
          aria-label="Send message"
        >
          {typing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}

function Message({ m }: { m: ChatMessage }) {
  const isUser = m.role === "user";
  return (
    <div className={cn("flex items-end gap-2", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "grid h-8 w-8 shrink-0 place-items-center rounded-full",
          isUser ? "bg-secondary text-foreground" : "bg-gradient-brand text-primary-foreground",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft",
          isUser
            ? "rounded-br-md bg-gradient-brand text-primary-foreground"
            : "rounded-bl-md bg-background text-foreground",
        )}
      >
        {m.role === "assistant" ? (
          <div
            className="prose prose-sm max-w-none [&_p]:m-0 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: renderMarkdownLite(m.content) }}
          />
        ) : (
          <p className="whitespace-pre-wrap">{m.content}</p>
        )}
      </div>
    </div>
  );
}

function Dot({ delay = "0ms" }: { delay?: string }) {
  return (
    <span
      className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60"
      style={{ animationDelay: delay }}
    />
  );
}