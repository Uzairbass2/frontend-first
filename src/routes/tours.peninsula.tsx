import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, Minus, Users } from "lucide-react";
import img from "@/assets/peninsula.jpg";
import { GoldButton, PageHero } from "@/components/site/SiteChrome";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TOURS } from "@/lib/site";
import { TourCardView } from "@/components/site/TourCardView";

export const Route = createFileRoute("/tours/peninsula")({
  head: () => ({
    meta: [
      { title: "Private Cape Peninsula Tour — RA2 Travel and Tours" },
      { name: "description", content: "A private day along Chapman's Peak to Cape Point and Boulders Beach penguins, with your own guide." },
      { property: "og:title", content: "Private Cape Peninsula Tour" },
      { property: "og:description", content: "Chapman's Peak, Cape Point and Boulders Beach with a private guide." },
    ],
  }),
  component: Peninsula,
});

const NAME = "Private Cape Peninsula Tour";

const STOPS = [
  { time: "Morning", title: "Pickup in Cape Town", text: "Collection from your accommodation in the City Bowl, Atlantic Seaboard or V&A Waterfront." },
  { time: "~45 min", title: "Chapman's Peak Drive", text: "One of the world's great coastal roads. Subject to weather and road status; an alternate route is used if closed." },
  { time: "~2 hrs", title: "Cape Point & Cape of Good Hope", text: "Lighthouse walk or funicular, viewpoints and the famous sign. Park entrance fees are not included." },
  { time: "~1 hr", title: "Boulders Beach", text: "The African penguin colony near Simon's Town. Entrance fee not included." },
  { time: "Optional", title: "Kalk Bay or Muizenberg", text: "Coffee, lunch or a stroll on the way home, if time allows." },
];

const FAQ = [
  ["How long is the tour?", "Approximately 8–9 hours depending on pickup point, traffic and how long you spend at each stop."],
  ["Can the itinerary be customised?", "Yes. Stops and their order can be adjusted when you request your quote."],
  ["Is this a private tour?", "Yes — only your party travels in the vehicle with your guide."],
  ["What should I bring?", "Comfortable shoes, a warm layer and windbreaker, sunscreen and a camera. Cape Point can be windy."],
];

function Peninsula() {
  const related = TOURS.filter((t) => t.slug !== "peninsula").slice(0, 3);
  return (
    <>
      <PageHero eyebrow="Private Tours · Coast" title={NAME} intro="A full day along the Peninsula's most dramatic coastline, at your own pace." image={img}>
        <span className="flex items-center gap-2 text-sm"><Clock className="size-4 text-gold" /> Approx. 8–9 hours</span>
        <span className="flex items-center gap-2 text-sm"><MapPin className="size-4 text-gold" /> Cape Town pickup</span>
        <span className="flex items-center gap-2 text-sm"><Users className="size-4 text-gold" /> Private</span>
      </PageHero>

      <section className="py-20">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-16">
            <div>
              <p className="eyebrow mb-3">Itinerary</p>
              <h2 className="mb-8 text-4xl">Your day, stop by stop.</h2>
              <ol className="relative space-y-8 border-l border-gold/50 pl-8">
                {STOPS.map((s) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full bg-gold ring-4 ring-background" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.time}</p>
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-1 text-muted-foreground">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-md bg-card p-7 ring-1 ring-border">
                <h3 className="mb-4 text-2xl">What's included</h3>
                <ul className="space-y-2">
                  {["Private vehicle and professional guide", "Flexible pickup and drop-off", "Bottled water"].map((x) => (
                    <li key={x} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" />{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md bg-card p-7 ring-1 ring-border">
                <h3 className="mb-4 text-2xl">Not included</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {["Meals and drinks", "Optional activities", "Entrance fees unless specified in your route", "Personal expenses"].map((x) => (
                    <li key={x} className="flex gap-3"><Minus className="mt-1 size-4 shrink-0" />{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-md bg-secondary p-7">
              <h3 className="mb-2 text-2xl">Good to know</h3>
              <p className="text-muted-foreground">Suits couples, families and small groups. Some viewpoints involve stairs or uneven paths; tell us about mobility needs and we'll suggest suitable stops. Vehicle options are confirmed with your quote. Pricing is quote-based.</p>
            </div>

            <div id="faq">
              <h2 className="mb-6 text-4xl">Frequently asked questions</h2>
              <Accordion type="single" collapsible>
                {FAQ.map(([q, a]) => (
                  <AccordionItem key={q} value={q}>
                    <AccordionTrigger className="text-base">{q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md bg-forest p-7 text-ivory">
              <p className="eyebrow mb-2">Quote-based pricing</p>
              <h3 className="text-3xl">Request a Quote</h3>
              <p className="mt-2 text-sm text-ivory/80">Tell us your date and group size — we'll confirm availability and a personalised price.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/plan-my-trip" search={{ experience: NAME }} className="rounded-sm bg-gold px-6 py-3 text-center text-sm font-semibold text-forest-deep hover:bg-ivory">Request a Quote</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <h2 className="mb-10 text-4xl">Related tours</h2>
          <div className="grid gap-6 md:grid-cols-3">{related.map((t) => <TourCardView key={t.slug} tour={t} />)}</div>
          <div className="mt-10"><GoldButton to="/tours" variant="dark">All private tours</GoldButton></div>
        </div>
      </section>
    </>
  );
}
