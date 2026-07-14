import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { COURSES } from "@/lib/institute-data";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.course || (!form.phone && !form.email)) {
      toast.error("Please share your name, course, and a phone or email so we can reach you.");
      return;
    }
    setLoading(true);
    const res = await submitLead(form, "contact");
    setLoading(false);
    if (res.ok) {
      toast.success("Enquiry received! Our counselor will reach out soon.");
      setForm({ name: "", phone: "", email: "", course: "", message: "" });
    } else {
      toast.error(res.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question about a course, batch, or fees? Send us a message and
            our admission counselor will get back within one business day.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Visit us</p>
                <p className="text-sm text-muted-foreground">Indore, Madhya Pradesh, India</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Call an admission counselor</p>
                <p className="text-sm text-muted-foreground">Mon – Sat, 9 AM to 8 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">admissions@nextgenacademy.in</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="c-name">Full name</Label>
              <Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-phone">Phone</Label>
              <Input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98xxxxxxx" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="c-course">Interested course</Label>
              <select
                id="c-course"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">Select a course</option>
                {COURSES.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="c-msg">Message (optional)</Label>
              <Textarea id="c-msg" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you'd like to know…" />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="mt-6 w-full bg-gradient-brand shadow-elegant hover:opacity-95">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : "Send enquiry"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            By submitting, you agree to be contacted by NextGen Academy about admissions.
          </p>
        </form>
      </div>
    </section>
  );
}