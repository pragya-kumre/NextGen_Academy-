import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Globe,
  MessageSquare,
  FileText,
  Linkedin,
  Sunrise,
  Sunset,
  CalendarDays,
  GraduationCap,
  Users,
  Sparkles,
  Target,
  Briefcase,
  BookOpen,
  Award,
  Clock,
  Bot,
} from "lucide-react";

export interface Course {
  slug: string;
  name: string;
  short: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  icon: LucideIcon;
}

export const COURSES: Course[] = [
  {
    slug: "aptitude",
    name: "Aptitude & Reasoning",
    short: "Crack every placement test.",
    description:
      "Quantitative, logical, and verbal reasoning with company-wise question patterns.",
    duration: "6 weeks",
    level: "Beginner",
    price: "₹2,999",
    icon: Brain,
  },
  {
    slug: "python",
    name: "Python Programming",
    short: "Zero to job-ready developer.",
    description:
      "Core Python, DSA, OOP, and real projects — from syntax to interview problems.",
    duration: "10 weeks",
    level: "Beginner → Intermediate",
    price: "₹4,999",
    icon: Code2,
  },
  {
    slug: "webdev",
    name: "Web Development",
    short: "Full-stack, modern & practical.",
    description:
      "HTML, CSS, JavaScript, React, and backend basics. Ship real projects to your portfolio.",
    duration: "12 weeks",
    level: "Beginner → Advanced",
    price: "₹5,999",
    icon: Globe,
  },
  {
    slug: "interview",
    name: "Interview Preparation",
    short: "Own the room, every time.",
    description:
      "Mock interviews, HR rounds, technical grilling, and personalized feedback.",
    duration: "4 weeks",
    level: "All levels",
    price: "₹2,499",
    icon: MessageSquare,
  },
  {
    slug: "resume",
    name: "Resume Building",
    short: "Recruiter-ready in one week.",
    description:
      "ATS-optimized resumes with quantified impact — reviewed by industry mentors.",
    duration: "2 weeks",
    level: "All levels",
    price: "₹1,999",
    icon: FileText,
  },
  {
    slug: "linkedin",
    name: "LinkedIn Optimization",
    short: "Get discovered by recruiters.",
    description:
      "Headline, banner, keywords, and outreach strategy that gets responses.",
    duration: "1 week",
    level: "All levels",
    price: "Bundled",
    icon: Linkedin,
  },
];

export const BATCHES = [
  {
    icon: Sunrise,
    name: "Morning Batch",
    time: "8:00 AM – 10:00 AM",
    desc: "For students with afternoon college classes.",
  },
  {
    icon: Sunset,
    name: "Evening Batch",
    time: "6:00 PM – 8:00 PM",
    desc: "For college students and working professionals.",
  },
  {
    icon: CalendarDays,
    name: "Weekend Batch",
    time: "Sat & Sun · 10 AM – 2 PM",
    desc: "For students unavailable during weekdays.",
  },
];

export const WHY_US = [
  { icon: GraduationCap, title: "Expert Trainers", desc: "Industry mentors from top product companies." },
  { icon: Target, title: "Practical Learning", desc: "Hands-on projects over passive lectures." },
  { icon: BookOpen, title: "Industry Curriculum", desc: "Updated for what recruiters ask today." },
  { icon: Briefcase, title: "Live Projects", desc: "Real problems, real portfolios, real impact." },
  { icon: MessageSquare, title: "Mock Interviews", desc: "Weekly practice with detailed feedback." },
  { icon: FileText, title: "Resume Reviews", desc: "1:1 sessions with ATS-focused edits." },
  { icon: Award, title: "Placement Guidance", desc: "Referrals, drives, and 20+ hiring partners." },
  { icon: Users, title: "Career Mentorship", desc: "Long-term guidance beyond the classroom." },
  { icon: Clock, title: "Flexible Learning", desc: "Morning, evening & weekend batches." },
  { icon: Bot, title: "AI Career Support", desc: "24/7 AI counselor to answer your questions." },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 90, suffix: "%", label: "Placement Assistance" },
  { value: 20, suffix: "+", label: "Hiring Partners" },
  { value: 4.8, suffix: "★", label: "Student Rating", decimals: 1 },
];

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    course: "Python Programming",
    initial: "AS",
    rating: 5,
    quote:
      "The mock interviews were exactly like the real ones. I cleared 3 offers in a month.",
  },
  {
    name: "Rahul Verma",
    course: "Web Development",
    initial: "RV",
    rating: 5,
    quote:
      "Built 4 real projects during the course. My portfolio finally stood out to recruiters.",
  },
  {
    name: "Priya Nair",
    course: "Interview Preparation",
    initial: "PN",
    rating: 5,
    quote:
      "Personalized feedback after every mock changed how I approach HR and technical rounds.",
  },
];

export { Sparkles };