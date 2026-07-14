import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, TrendingUp, GraduationCap } from "lucide-react";

const METRICS = [
  { v: "1000+", l: "Students Trained" },
  { v: "90%", l: "Placement Assistance" },
  { v: "20+", l: "Hiring Partners" },
  { v: "4.8★", l: "Student Rating" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            New batch starting soon — Indore
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build Skills. <br />
            Crack Interviews. <br />
            <span className="text-gradient-brand">Get Placement Ready.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            NextGen Academy prepares students and fresh graduates for successful
            careers with practical training, technical skills, interview
            preparation, and placement guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-brand shadow-elegant hover:opacity-95">
              <a href="#ai-counselor">
                <Bot className="mr-2 h-4 w-4" />
                Talk to AI Counselor
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#courses">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.l}>
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">{m.v}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {m.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-lg">
      {/* gradient blob */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-brand opacity-20 blur-3xl" />

      {/* big card — AI Counselor */}
      <div className="absolute inset-x-6 top-6 rounded-3xl border border-border bg-background/90 p-6 shadow-elegant backdrop-blur animate-float-slow">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">AI Admission Counselor</p>
            <p className="text-xs text-muted-foreground">Online · Replies instantly</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-secondary px-3 py-2 text-foreground">
            Hi! Which course are you exploring?
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-gradient-brand px-3 py-2 text-primary-foreground">
            Python Programming 🚀
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-secondary px-3 py-2 text-foreground">
            Great choice — 10 weeks, ₹4,999. Shall I share batch timings?
          </div>
        </div>
      </div>

      {/* floating stat card */}
      <div className="absolute -left-4 bottom-24 w-56 rounded-2xl border border-border bg-background p-4 shadow-elegant animate-float">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Placement rate</p>
            <p className="text-lg font-bold">90%</p>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -right-2 bottom-8 w-60 rounded-2xl border border-border bg-background p-4 shadow-elegant animate-float-slow">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Students placed</p>
            <p className="text-lg font-bold">1000+</p>
          </div>
        </div>
      </div>

      {/* sparkle chip */}
      <div className="absolute right-4 top-2 flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium shadow-soft animate-float">
        <Sparkles className="h-3 w-3 text-[color:var(--brand-accent)]" />
        AI-powered
      </div>
    </div>
  );
}