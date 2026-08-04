import { Sparkles, Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#ai-counselor" },
];

const COURSE_LINKS = [
  { label: "Aptitude & Reasoning", href: "#courses" },
  { label: "Python Programming", href: "#courses" },
  { label: "Web Development", href: "#courses" },
  { label: "Data Structures & Algorithms", href: "#courses" },
  { label: "Data Analytics with Excel", href: "#courses" },
  { label: "Interview Preparation", href: "#courses" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-elegant">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-lg">NextGen<span className="text-gradient-brand">Academy</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Placement & skill development institute helping students crack interviews,
            build real projects, and start careers with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-soft"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" links={QUICK_LINKS} />
        <FooterCol title="Courses" links={COURSE_LINKS} />

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground/70">Demo details</p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:admissions@nextgenacademy.in" className="flex items-start gap-2 transition-colors hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                admissions@nextgenacademy.in
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-start gap-2 transition-colors hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Indore, Madhya Pradesh · Mon – Sat, 9 AM – 8 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} NextGen Academy. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}