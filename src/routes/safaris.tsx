import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/safari.jpg";
import { CtaBand, PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/safaris")({
  head: () => ({
    meta: [
      { title: "Safaris: Aquila, Kruger & Sabi Sands — RA2 Travel and Tours" },
      { name: "description", content: "Compare Aquila day safaris with Kruger and Sabi Sands stays, and how RA2 arranges travel." },
      { property: "og:title", content: "Safaris with RA2" },
      { property: "og:description", content: "Aquila, Kruger and Sabi Sands, clearly explained." },
    ],
  }),
  component: Page,
});

const S = [
  { name: "Aquila", where: "Touws River, Western Cape · approx. 2 hrs from Cape Town", stay: "Day trip or overnight", drives: "Game drives run by the reserve", transport: "RA2 private road transfer from Cape Town" },
  { name: "Kruger", where: "Mpumalanga & Limpopo", stay: "Multi-night stay", drives: "Operated by your lodge or SANParks", transport: "Flight from Cape Town; RA2 arranges connections" },
  { name: "Sabi Sands", where: "Private reserve bordering Kruger", stay: "Multi-night lodge stay", drives: "Operated by your lodge's rangers", transport: "Flight plus lodge transfer; RA2 coordinates" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Safaris" title="Three very different safaris." intro="Each option has its own location, travel and stay. Here's how they compare." image={hero} />
      <section className="py-20">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {S.map((s) => (
            <article key={s.name} className="rounded-md bg-card p-8 ring-1 ring-border">
              <h2 className="text-4xl">{s.name}</h2>
              <dl className="mt-6 space-y-4 text-sm">
                {[["Where", s.where], ["Stay", s.stay], ["Game drives", s.drives], ["Transport", s.transport]].map(([k, v]) => (
                  <div key={k}><dt className="eyebrow">{k}</dt><dd className="mt-1 text-base">{v}</dd></div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="container-site mt-8 text-sm text-muted-foreground">Wildlife sightings cannot be guaranteed. Lodges, prices and availability are confirmed with your quote.</p>
      </section>
      <CtaBand />
    </>
  );
}
