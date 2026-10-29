import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { CONTACT } from "@/lib/site";
import { GoldButton, PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/transfers")({
  head: () => ({
    meta: [
      { title: "Transfers & Chauffeur Service, Cape Town — RA2 Travel and Tours" },
      { name: "description", content: "Airport transfers and private chauffeur service in Cape Town, with vehicle options for every group." },
      { property: "og:title", content: "Transfers & Chauffeur — RA2" },
      { property: "og:description", content: "Transport-only enquiries, separate from guided touring." },
    ],
  }),
  component: Page,
});

const FLEET = [
  { name: "Mercedes-Benz V-Class", text: "A premium, spacious people mover for extra comfort.", pax: "Confirm configuration", luggage: "Confirmed with your quote" },
  { name: "Hyundai Staria", text: "Spacious and comfortable, ideal for families and small groups.", pax: "Confirm configuration", luggage: "Confirmed with your quote" },
  { name: "Sedan", text: "A refined option for up to 3 guests with luggage.", pax: "Up to 3", luggage: "Confirmed with your quote" },
  { name: "SUV", text: "Comfortable and versatile for a range of travel needs.", pax: "Confirm configuration", luggage: "Confirmed with your quote" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Transfers & Chauffeur" title="Arrive the way you'd like to travel." intro="Airport transfers, point-to-point trips and hourly chauffeur service — transport only, no guiding." image={hero}>
        <GoldButton to="/plan-my-trip">Request a Transfer Quote</GoldButton>
      </PageHero>
      <section id="fleet" className="scroll-mt-24 py-20">
        <div className="container-site">
          <p className="eyebrow mb-3">Our Fleet</p>
          <h2 className="mb-10 text-4xl md:text-5xl">Comfort for every journey.</h2>
          <div className="overflow-x-auto rounded-md ring-1 ring-border">
            <table className="w-full min-w-[40rem] bg-card text-left">
              <thead className="bg-forest text-ivory"><tr>{["Vehicle", "Description", "Passengers", "Luggage"].map((h) => <th key={h} className="px-5 py-4 text-sm font-semibold">{h}</th>)}</tr></thead>
              <tbody>
                {FLEET.map((f) => (
                  <tr key={f.name} className="border-t border-border">
                    <td className="px-5 py-4 font-serif text-xl">{f.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{f.text}</td>
                    <td className="px-5 py-4 text-sm">{f.pax}</td>
                    <td className="px-5 py-4 text-sm">{f.luggage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-ivory">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl">Get in touch on WhatsApp.</h2>
          <p className="mt-3 text-ivory/80">Chat with us on WhatsApp or send your enquiry and we'll get back to you.</p>
          <div className="mt-8"><GoldButton href={CONTACT.whatsapp}>WhatsApp {CONTACT.phone}</GoldButton></div>
        </div>
      </section>
    </>
  );
}
