import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/peninsula.jpg";
import { CtaBand, PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RA2 — Rezah Payne & Team | RA2 Travel and Tours" },
      { name: "description", content: "Meet Rezah Payne and the team behind RA2 Travel and Tours in Cape Town." },
      { property: "og:title", content: "About RA2 Travel and Tours" },
      { property: "og:description", content: "The people behind your journey." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About RA2" title="The people behind your journey." intro="A personally hosted Cape Town tour company, led by Rezah Payne." image={hero} />
      <section className="py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div className="flex aspect-[4/5] items-center justify-center rounded-md bg-muted p-8 text-center text-muted-foreground ring-1 ring-border">Photograph of Rezah — to be supplied</div>
          <div className="space-y-5 text-lg">
            <h2 className="text-4xl">Hello, I'm Rezah.</h2>
            <p className="text-muted-foreground">RA2 began with a simple belief: the best way to experience South Africa is with someone who knows it and cares how your day feels.</p>
            <p className="text-muted-foreground">Our story, team and verified facts will be completed with content approved by RA2.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
