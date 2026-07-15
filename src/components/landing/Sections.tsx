import { COURSES, BATCHES, WHY_US, STATS, TESTIMONIALS } from "@/lib/institute-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function About() {
  const pillars = [
    "Industry-focused training",
    "Practical projects & live code",
    "Technical skill development",
    "Mock interviews with feedback",
    "Resume & LinkedIn preparation",
    "1:1 career mentorship",
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">About us</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A placement institute built for the way students actually get hired today.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            NextGen Academy helps students become placement-ready through hands-on
            training, real projects, and personalized career guidance — from your
            first line of code to your first job offer.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pillars.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Courses() {
  return (
    <section id="courses" className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Courses</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programs designed around real placement outcomes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six focused tracks — pick one, or combine them into a placement-ready roadmap.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.slug}
                className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.short}</p>
                <p className="mt-3 text-sm text-foreground/80">{c.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">{c.duration}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">{c.level}</span>
                </div>
                <a
                  href="#ai-counselor"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-[color:var(--brand-accent)]"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Fees() {
  return (
    <section id="fees" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Pricing</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Transparent fees. No hidden costs.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Pay per course or bundle programs together — ask our Student Support Assistant about combo offers.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c, i) => {
          const featured = i === 2;
          return (
            <div
              key={c.slug}
              className={
                "relative flex flex-col rounded-3xl border p-8 shadow-soft transition-all " +
                (featured
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-elegant"
                  : "border-border bg-card")
              }
            >
              {featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  Most popular
                </span>
              )}
              <p className={"text-sm font-semibold uppercase tracking-wide " + (featured ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {c.name}
              </p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight">{c.price}</p>
              <p className={"mt-1 text-sm " + (featured ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {c.duration} · {c.level}
              </p>
              <p className={"mt-4 text-sm " + (featured ? "text-primary-foreground/90" : "text-foreground/80")}>
                {c.description}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className={
                    featured
                      ? "w-full bg-background text-primary hover:bg-background/90"
                      : "w-full bg-gradient-brand shadow-elegant hover:opacity-95"
                  }
                >
                  <a href="#ai-counselor">Enroll now</a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Batches() {
  return (
    <section id="batches" className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Flexible schedule</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learn at your convenience</h2>
          <p className="mt-4 text-muted-foreground">
            Choose a schedule that fits your studies, work, and lifestyle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BATCHES.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{b.name}</h3>
                <p className="mt-2 text-2xl font-bold text-gradient-brand">{b.time}</p>
                <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-primary/20 bg-gradient-brand p-8 text-primary-foreground shadow-elegant">
          <p className="text-lg font-medium">
            Can't attend weekday classes? Choose evening or weekend batches and
            continue your placement preparation without compromising your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Why NextGen</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to become placement-ready
        </h2>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {WHY_US.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
            >
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold">{f.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function useCountUp(target: number, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setVal(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return { ref, value: decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString() };
}

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.value, stat.decimals ?? 0);
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-extrabold text-gradient-brand sm:text-6xl">
        {value}
        <span className="ml-1 text-3xl">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Student stories</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by students. Trusted by recruiters.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="flex gap-0.5 text-[color:var(--brand-accent)]">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                {t.initial}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.course}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}