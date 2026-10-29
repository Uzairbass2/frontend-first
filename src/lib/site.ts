import peninsula from "@/assets/peninsula.jpg";
import winelands from "@/assets/winelands.jpg";
import safari from "@/assets/safari.jpg";
import hero from "@/assets/hero.jpg";

export const CONTACT = {
  email: "rezah@ra2travelandtours.co.za",
  phone: "+27 78 815 8817",
  phoneHref: "tel:+27788158817",
  whatsapp: "https://wa.me/27788158817",
  instagram: "https://www.instagram.com/ra2travelandtours1",
  instagramHandle: "@ra2travelandtours1",
};

export type Category = "Coast" | "Wine" | "Wildlife" | "City" | "Adventure";

export interface TourCard {
  slug: string;
  name: string;
  location: string;
  duration: string;
  status: string;
  blurb: string;
  categories: Category[];
  image: string;
  href?: "/tours/peninsula";
}

export const TOURS: TourCard[] = [
  { slug: "peninsula", name: "Private Cape Peninsula Tour", location: "Cape Peninsula", duration: "Approx. 8–9 hours", status: "Private", blurb: "Chapman's Peak, Cape Point and the penguins of Boulders Beach.", categories: ["Coast", "Adventure"], image: peninsula, href: "/tours/peninsula" },
  { slug: "winelands", name: "Private Cape Winelands Tour", location: "Stellenbosch & Franschhoek", duration: "Approx. 7–8 hours", status: "Private", blurb: "Historic estates, mountain valleys and tastings chosen around you.", categories: ["Wine"], image: winelands },
  { slug: "city", name: "City & Table Mountain", location: "Cape Town", duration: "Approx. 5–6 hours", status: "Private", blurb: "The Mother City's neighbourhoods, history and mountain views.", categories: ["City"], image: hero },
  { slug: "aquila", name: "Aquila Safari Day", location: "Touws River, Western Cape", duration: "Full day", status: "Private transfer", blurb: "A Big Five reserve within driving distance of Cape Town.", categories: ["Wildlife"], image: safari },
];

export const NAV = [
  { to: "/tours", label: "Private Tours" },
  { to: "/tailor-made", label: "Tailor-made Journeys" },
  { to: "/safaris", label: "Safaris" },
  { to: "/transfers", label: "Transfers & Chauffeur" },
  { to: "/about", label: "About RA2" },
] as const;
