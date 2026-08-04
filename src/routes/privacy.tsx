import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | NextGen Academy Indore" },
      {
        name: "description",
        content:
          "How NextGen Academy collects, uses, and protects student enquiry data submitted through our website and Student Support Assistant.",
      },
      { property: "og:title", content: "Privacy Policy | NextGen Academy" },
      {
        property: "og:description",
        content: "How NextGen Academy handles student enquiry data and personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sample policy shown for demonstration purposes.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold">Information we collect</h2>
            <p className="mt-2 text-muted-foreground">
              We collect the name, email address, phone number, and course interest you
              share through our enquiry form or the Student Support Assistant chat.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">How we use it</h2>
            <p className="mt-2 text-muted-foreground">
              Your details are used only to respond to your enquiry, share batch and fee
              information, and provide admission or career guidance.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Sharing</h2>
            <p className="mt-2 text-muted-foreground">
              We do not sell your data. Information may be processed by trusted service
              providers that help us operate our website and communication tools.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Your choices</h2>
            <p className="mt-2 text-muted-foreground">
              You can request access to, correction of, or deletion of your details at any
              time by writing to admissions@nextgenacademy.in.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}