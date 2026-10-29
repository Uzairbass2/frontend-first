import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";

const EXPERIENCES = [
  "Private Cape Peninsula Tour",
  "Private Cape Winelands Tour",
  "City & Table Mountain",
  "Aquila Safari Day",
  "Tailor-made Journey",
  "Safari (Kruger / Sabi Sands)",
  "Transfer / Chauffeur",
  "Not sure yet",
];

export const Route = createFileRoute("/plan-my-trip")({
  validateSearch: (s: Record<string, unknown>): { experience?: string | undefined } => ({ experience: typeof s["experience"] === "string" ? (s["experience"] as string) : undefined }),
  head: () => ({
    meta: [
      { title: "Plan My Trip — Request a Quote | RA2 Travel and Tours" },
      { name: "description", content: "Request a personalised quote for a private tour, safari, journey or transfer with RA2." },
      { property: "og:title", content: "Plan My Trip with RA2" },
      { property: "og:description", content: "One short form for a personalised quote." },
    ],
  }),
  component: Plan,
});

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-base outline-none focus:border-gold focus:ring-2 focus:ring-ring/30";
const label = "mb-1.5 block text-sm font-medium";

function Plan() {
  const { experience } = Route.useSearch();
  const [exp, setExp] = useState(experience && EXPERIENCES.includes(experience) ? experience : "");
  const [unsure, setUnsure] = useState(false);
  const [sent, setSent] = useState(false);
  const isTransfer = exp === "Transfer / Chauffeur";

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_20rem]">
        <div>
          <p className="eyebrow mb-3">Plan My Trip</p>
          <h1 className="text-5xl md:text-6xl">Request a personalised quote.</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">A few details are all we need. This is a request, not a confirmed booking — we'll reply with availability and pricing.</p>

          {sent ? (
            <div className="mt-10 rounded-md bg-forest p-10 text-ivory">
              <h2 className="text-4xl">Thank you — your request is in.</h2>
              <p className="mt-3 text-ivory/80">We've received your enquiry and will be in touch. Nothing is booked until we confirm with you.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2"><label className={label}>Name *</label><input required className={field} /></div>
              <div><label className={label}>Email</label><input type="email" className={field} /></div>
              <div><label className={label}>WhatsApp number</label><input type="tel" className={field} /></div>
              <div className="md:col-span-2">
                <label className={label}>Experience *</label>
                <select required value={exp} onChange={(e) => setExp(e.target.value)} className={field}>
                  <option value="">Select an experience</option>
                  {EXPERIENCES.map((x) => <option key={x}>{x}</option>)}
                </select>
              </div>
              <div>
                <label className={label}>Travel date</label>
                <input type="date" disabled={unsure} className={`${field} disabled:opacity-50`} />
                <label className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={unsure} onChange={(e) => setUnsure(e.target.checked)} /> Not sure yet</label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className={label}>Adults</label><input type="number" min={1} defaultValue={2} className={field} /></div>
                <div><label className={label}>Children</label><input type="number" min={0} defaultValue={0} className={field} /></div>
              </div>
              {isTransfer && (
                <div className="grid gap-6 rounded-md bg-secondary p-6 md:col-span-2 md:grid-cols-2">
                  <div><label className={label}>Pickup location</label><input className={field} /></div>
                  <div><label className={label}>Drop-off location</label><input className={field} /></div>
                  <div><label className={label}>Flight number (optional)</label><input className={field} /></div>
                  <div><label className={label}>Luggage (pieces)</label><input type="number" min={0} className={field} /></div>
                </div>
              )}
              <div className="md:col-span-2"><label className={label}>Anything else we should know?</label><textarea rows={4} className={field} /></div>
              <div className="md:col-span-2">
                <button type="submit" className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-forest-deep">Request a Quote</button>
                <p className="mt-3 text-xs text-muted-foreground">Please give an email or WhatsApp number so we can reply. No payment or passport details needed.</p>
              </div>
            </form>
          )}
        </div>
        <aside className="space-y-4 lg:pt-28">
          <h2 className="text-2xl">Prefer to talk?</h2>
          <a href={CONTACT.whatsapp} className="flex items-center gap-3 rounded-md bg-card p-4 ring-1 ring-border hover:ring-gold"><MessageCircle className="size-5 text-whatsapp" />WhatsApp {CONTACT.phone}</a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 rounded-md bg-card p-4 ring-1 ring-border hover:ring-gold"><Phone className="size-5 text-gold" />{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all rounded-md bg-card p-4 text-sm ring-1 ring-border hover:ring-gold"><Mail className="size-5 shrink-0 text-gold" />{CONTACT.email}</a>
        </aside>
      </div>
    </section>
  );
}
