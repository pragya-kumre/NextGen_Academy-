import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-elegant">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-lg">NextGen<span className="text-gradient-brand">Academy</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Placement & skill development institute helping students crack interviews and build careers.
          </p>
        </div>

        <FooterCol title="Courses" links={["Aptitude & Reasoning", "Python Programming", "Web Development", "Interview Preparation"]} />
        <FooterCol title="Company" links={["About", "AI Counselor", "Testimonials", "Contact"]} />
        <FooterCol title="Location" links={["Indore, Madhya Pradesh", "Mon – Sat · 9 AM – 8 PM", "admissions@nextgenacademy.in"]} />
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NextGen Academy. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l} className="text-sm text-muted-foreground">{l}</li>
        ))}
      </ul>
    </div>
  );
}