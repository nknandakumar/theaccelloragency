export type Project = {
  slug: string;
  name: string;
  industry: string;
  result: string;
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  teaser?: {
    label: string;
    description: string;
    badgeBg: string;
    badgeIcon: string;
    image: string;
  };
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
    slug: "usms",
    name: "USMS",
    industry: "Education",
    result: "Faster launch with clear online presence",
    overview:
      "Designed and developed a clean, modern website to establish USMS’s online presence quickly.",
    problem:
      "No structured website to clearly present information and build credibility online.",
    approach:
      "Rapid design-to-development workflow using Framer, focusing on clarity, responsiveness, and performance.",
    outcome:
      "A professional website launched within a week, helping the SAAS communicate clearly and look credible online.",
    teaser: {
      label: "01",
      description:
        "A fast-built educational website focused on clarity, trust, and modern presentation.",
      badgeBg: "bg-[#FF4A03]",
      badgeIcon: "✴",
      image:
        "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767178532/samples/agency/2bfb5419-db07-4594-adcd-e0dccf74ba46.png",
    },
    cover: "/images/work/usms.svg",
    tags: ["Education", "Framer", "Responsive"],
    year: "2025",
    timeline: "1 Week",
    services: ["Website Development"],
    liveUrl: "https://usms.framer.website/",
    gallery: [
      "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767178532/samples/agency/2bfb5419-db07-4594-adcd-e0dccf74ba46.png",
      "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767177979/samples/agency/6b8bbb18-c926-459d-bd4a-7fd7fe8976ca.png",
      "https://res.cloudinary.com/dp9xxz6ww/image/upload/c_crop,ar_4:3/v1767177245/samples/agency/unnamed_zhypnr.jpg",
    ],
    metrics: [
      { value: "7 Days", label: "Launch time" },
      { value: "100%", label: "Responsive layout" },
      { value: "Fast", label: "Page performance" },
    ],
    testimonial: {
      quote:
        "The website was delivered quickly and looks clean, modern, and professional. Exactly what we needed to get online.",
      name: "USMS Team",
      role: "Administration",
    },
  },
   {
    slug: "taif",
    name: "TAIF",
    industry: "Technology / AI",
    result: "Clear positioning and focused conversions",
    overview:
      "We created a high-impact landing page to clearly communicate the product value and drive user interest.",
    problem:
      "The product needed a single, focused page to explain its purpose quickly and convert visitors.",
    approach:
      "Concise messaging, strong visual hierarchy, and conversion-focused sections built for clarity and speed.",
    outcome:
      "A focused landing experience that communicates value instantly and supports lead generation.",
    teaser: {
      label: "02",
      description:
        "A conversion-focused landing page built to explain value fast and guide users to action.",
      badgeBg: "bg-[#2563eb]",
      badgeIcon: "◉",
      image: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767181872/samples/agency/5c47f0c2-70a2-41d8-a70e-9c9d0744f38e_jhzjyi.png",
    },
    cover: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767181872/samples/agency/5c47f0c2-70a2-41d8-a70e-9c9d0744f38e_jhzjyi.png",
    tags: ["Landing Page", "AI", "Conversion"],
    year: "2025",
    timeline: "3 Weeks",
    services: ["Landing Page", "UI/UX"],
    liveUrl: "https://taif.framer.ai/",
    gallery: ["https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767181872/samples/agency/5c47f0c2-70a2-41d8-a70e-9c9d0744f38e_jhzjyi.png", "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767182255/samples/agency/83441f58-f770-42f4-8cb4-aa8271281e24_h74oxi.png", "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767181891/samples/agency/Screenshot_2025-12-31_171916_f4gvsw.png"],
    metrics: [
      { value: "3 Weeks", label: "Build timeline" },
      { value: "Single Page", label: "Focused experience" },
      { value: "High", label: "Message clarity" },
    ],
    testimonial: {
      quote:
        "The landing page clearly explains what we do and feels sharp, modern, and purposeful.",
      name: "Client",
      role: "Team, TAIF",
    },
  },
  {
    slug: "realest",
    name: "Realest",
    industry: "Real Estate",
    result: "Clear brand presence for property listings",
    overview:
      "We created a modern real estate website focused on showcasing properties with clarity and trust.",
    problem:
      "The brand needed a clean online presence to present properties professionally and build credibility.",
    approach:
      "Structured layouts, strong visual hierarchy, and responsive design to highlight listings and key information.",
    outcome:
      "A polished real estate website that clearly communicates value and supports inquiries.",
    teaser: {
      label: "03",
      description:
        "A modern real estate website designed to highlight properties and build buyer confidence.",
      badgeBg: "bg-[#0f172a]",
      badgeIcon: "◆",
      image: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767179832/samples/agency/b194d448-715d-4d01-b57b-9ea31c4669ac_iedu8q.png",
    },
    cover: "",
    tags: ["Real Estate", "Listings", "Responsive"],
    year: "2025",
    timeline: "2 Weeks",
    services: ["Website Design"],
    liveUrl: "https://realest.framer.website/",
    gallery: ["https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767179832/samples/agency/b194d448-715d-4d01-b57b-9ea31c4669ac_iedu8q.png", "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767180833/samples/agency/f57fab2e-e44d-46e9-814a-5fab077193bf_dswv8i.png", "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1767181036/samples/agency/610aaa52-2586-409b-a7fe-d92a8a0ddbd4_mjgomb.png"],
    metrics: [
      { value: "2 Week", label: "Launch time" },
      { value: "100%", label: "Responsive design" },
      { value: "Clear", label: "Property presentation" },
    ],
    testimonial: {
      quote:
        "The website presents our properties clearly and professionally. It feels premium and easy to navigate.",
      name: "Client",
      role: "Real Estate Team",
    },
  },
 
 
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
