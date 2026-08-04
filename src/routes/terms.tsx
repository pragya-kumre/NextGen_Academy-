import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | NextGen Academy Indore" },
      {
        name: "description",
        content:
          "Terms governing enrolment, fees, batch schedules, and use of the NextGen Academy website and Student Support Assistant.",
      },
      { property: "og:title", content: "Terms & Conditions | NextGen Academy" },
      {
        property: "og:description",
        content: "Enrolment, fees, and website usage terms for NextGen Academy students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sample terms shown for demonstration purposes.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold">Enrolment</h2>
            <p className="mt-2 text-muted-foreground">
              A seat is confirmed once the course fee is paid and admission details are
              verified. Batch allocation depends on availability.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Fees and refunds</h2>
            <p className="mt-2 text-muted-foreground">
              Fees listed on the website are indicative and may change. Refund requests
              raised within the first week of a batch are reviewed case by case.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Placement assistance</h2>
            <p className="mt-2 text-muted-foreground">
              We provide preparation, referrals, and drive access. We do not guarantee a
              job offer, as hiring decisions rest with the recruiting company.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Course material</h2>
            <p className="mt-2 text-muted-foreground">
              All content, recordings, and project material remain the property of
              NextGen Academy and may not be redistributed.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}