import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Globe,
  MessageSquare,
  FileText,
  BarChart3,
  Network,
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
      "Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Placement Practice Tests.",
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
      "Python Fundamentals, Problem Solving, OOP Concepts, and Practical Projects.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    price: "₹4,999",
    icon: Code2,
  },
  {
    slug: "webdev",
    name: "Web Development",
    short: "Full-stack, modern & practical.",
    description:
      "HTML, CSS, JavaScript, Responsive Design, and Frontend Projects.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    price: "₹5,999",
    icon: Globe,
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms (DSA)",
    short: "Ace coding rounds with confidence.",
    description:
      "Arrays, Strings, Linked Lists, Trees, Graphs, and Placement Coding Questions.",
    duration: "12 weeks",
    level: "Intermediate",
    price: "₹6,999",
    icon: Network,
  },
  {
    slug: "excel",
    name: "Data Analytics with Excel",
    short: "Turn data into decisions.",
    description:
      "Excel Functions, Pivot Tables, Dashboards, Reports, and Data Visualization.",
    duration: "6 weeks",
    level: "Beginner",
    price: "₹3,499",
    icon: BarChart3,
  },
  {
    slug: "interview",
    name: "Interview Preparation",
    short: "Own the room, every time.",
    description:
      "HR Interviews, Technical Interviews, Mock Interviews, Communication Skills, and Resume Guidance.",
    duration: "4 weeks",
    level: "All Levels",
    price: "₹1,999",
    icon: MessageSquare,
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
  { icon: Bot, title: "Student Support Assistant", desc: "24/7 assistant to answer your questions." },
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