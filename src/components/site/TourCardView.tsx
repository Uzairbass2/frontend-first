import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import type { TourCard } from "@/lib/site";

export function TourCardView({ tour }: { tour: TourCard }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={tour.image} alt={tour.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow mb-2">{tour.status}</p>
        <h3 className="text-2xl">{tour.name}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{tour.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="size-4 text-gold" />{tour.location}</span>
          <span className="flex items-center gap-1.5"><Clock className="size-4 text-gold" />{tour.duration}</span>
        </div>
        {tour.href ? (
          <Link to={tour.href} className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline">View Tour →</Link>
        ) : (
          <Link to="/plan-my-trip" search={{ experience: tour.name }} className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline">Request details →</Link>
        )}
      </div>
    </article>
  );
}
