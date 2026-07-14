import { Badge } from "@/components/ui/badge";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { MessageSquare, Zap, ShieldCheck, Clock3 } from "lucide-react";

const FEATURES = [
  { icon: MessageSquare, title: "Conversational", desc: "Ask anything in natural language." },
  { icon: Zap, title: "Instant answers", desc: "Fees, batches & placement info in seconds." },
  { icon: ShieldCheck, title: "No pushy sales", desc: "You start the enquiry — only when ready." },
  { icon: Clock3, title: "24/7 available", desc: "Ask questions any time, from any device." },
];

export function AiCounselorSection() {
  return (
    <section id="ai-counselor" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-24">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">AI Counselor</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Talk to our AI counselor — get answers, then get placed.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Ask about courses, fees, batches, or placement support. When you're
            ready to enroll, share your details and our team will take it from there.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold">{f.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <ChatPanel />
        </div>
      </div>
    </section>
  );
}