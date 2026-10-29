import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/winelands.jpg";
import coast from "@/assets/hero.jpg";
import safari from "@/assets/safari.jpg";
import { CtaBand, GoldButton, PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/tailor-made")({
  head: () => ({
    meta: [
      { title: "Tailor-made South African Journeys — RA2 Travel and Tours" },
      { name: "description", content: "Multi-day journeys along the Garden Route, Cape coast and safari, planned around you." },
      { property: "og:title", content: "Tailor-made Journeys — RA2" },
      { property: "og:description", content: "More time. More South Africa." },
    ],
  }),
  component: Page,
});

const J = [
  { name: "Cape Town & Coast", nights: "Example: 5–7 nights", text: "Iconic cities, coastal drives and world-class scenery.", img: coast },
  { name: "Garden Route", nights: "Example: 7–10 nights", text: "Forests, lagoons and seaside towns between Mossel Bay and Plettenberg Bay.", img: hero },
  { name: "Cape & Safari", nights: "Example: 8–12 nights", text: "Combine Cape Town with a lodge stay in a Big Five reserve.", img: safari },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Tailor-made Journeys" title={<>More time.<br />More South Africa.</>} intro="Curated journeys with seamless travel, handpicked stays and experiences shaped around you." image={hero}>
        <GoldButton to="/plan-my-trip">Request a Quote</GoldButton>
      </PageHero>
      <section className="py-20">
        <div className="container-site space-y-16">
          {J.map((j, i) => (
            <article key={j.name} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={j.img} alt={j.name} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
              <div>
                <p className="eyebrow mb-2">{j.nights}</p>
                <h2 className="text-4xl">{j.name}</h2>
                <p className="mt-3 text-muted-foreground">{j.text}</p>
                <p className="mt-3 text-sm italic text-muted-foreground">Sample itinerary — routes, stays and inclusions are confirmed in your proposal.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
