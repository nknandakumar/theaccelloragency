export type Project = {
  slug: string;
  name: string;
  industry: string;
  result: string;
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  cover?: string;
  tags?: string[];
  year?: string;
  timeline?: string;
  services?: string[];
  liveUrl?: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
    avatar?: string;
  };
  metrics?: Array<{ value: string; label: string }>;
};

export const projects: Project[] = [
  {
    slug: "acme-plumbing",
    name: "Acme Plumbing",
    industry: "Home Services",
    result: "200% increase in inquiries",
    overview: "Rebuilt their outdated brochure site into a conversion-focused funnel.",
    problem: "Low trust and unclear services; no mobile optimization.",
    approach: "Clear information architecture, strong CTAs, fast performance.",
    outcome: "Higher conversion, more calls, better search visibility.",
    cover: "/images/work/signalwire.svg",
    tags: ["Home Services", "Local SEO", "Lead Gen"],
    year: "2024",
    timeline: "3 Months",
    services: ["Website", "Branding"],
    liveUrl: "/work/acme-plumbing",
    gallery: ["/images/work/signalwire.svg", "/images/work/midnight.svg", "/images/work/midnight.svg"],
    metrics: [
      { value: "200%", label: "Increase in inquiries" },
      { value: "2.4s", label: "Faster load" },
      { value: "3x", label: "More calls" },
    ],
    testimonial: {
      quote:
        "Working with TheAccellor felt personal. The process was smooth, the design was stunning, and everything had meaning.",
      name: "Client",
      role: "Owner, Acme Plumbing",
    },
  },
  {
    slug: "bright-finance",
    name: "Bright Finance",
    industry: "Financial Services",
    result: "Bounce rate down 35%",
    overview: "Structured complex info into digestible sections.",
    problem: "Confusing layout and slow performance.",
    approach: "Simplified content, improved speed, clarified messaging.",
    outcome: "More demo requests and longer session durations.",
    cover: "/images/work/midnight.svg",
    tags: ["Fintech", "Performance", "UX"],
    year: "2024",
    timeline: "6 Weeks",
    services: ["Website"],
    liveUrl: "/work/bright-finance",
    gallery: ["/images/work/midnight.svg", "/images/work/midnight.svg", "/images/work/signalwire.svg"],
    metrics: [
      { value: "35%", label: "Lower bounce" },
      { value: "1.8x", label: "More demo requests" },
      { value: "99", label: "Performance score" },
    ],
  },
  {
    slug: "orbital-fitness",
    name: "Orbital Fitness",
    industry: "Fitness",
    result: "Lead volume up 3x",
    overview: "Positioned brand for local discovery and bookings.",
    problem: "No Google presence and weak calls-to-action.",
    approach: "SEO basics, clear CTAs, performance enhancements.",
    outcome: "More signups and inquiries from local search.",
    cover: "/images/work/midnight.svg",
    tags: ["Local", "Brand", "Bookings"],
    year: "2024",
    timeline: "4 Weeks",
    services: ["Website"],
    liveUrl: "/work/orbital-fitness",
    gallery: ["/images/work/midnight.svg", "/images/work/signalwire.svg", "/images/work/midnight.svg"],
    metrics: [
      { value: "3x", label: "Lead growth" },
      { value: "2.1x", label: "More signups" },
      { value: "5x", label: "Search visibility" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
