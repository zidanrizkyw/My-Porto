export type ProjectId = "jajanin" | "merchant" | "internal" | "companyProfile" | "melanoma";

export interface GalleryImage {
  src: string;
  // Key into messages `projects.items.<id>.gallery`
  key: string;
}

export interface Project {
  // Key into messages `projects.items`
  id: ProjectId;
  slug: string;
  role: string;
  // ISO year-month; `end: null` means the project is ongoing
  start: string;
  end: string | null;
  // Production URL only; dev/staging hosts must never be listed here
  url?: string;
  image?: string;
  internal?: boolean;
  // Screenshots had sensitive data blurred
  blurred?: boolean;
  stack: string[];
  gallery: GalleryImage[];
}

export const projectData: Project[] = [
  {
    id: "jajanin",
    slug: "jajanin",
    role: "Frontend Developer",
    start: "2026-06",
    end: null,
    url: "https://www.jajanin.id/",
    image: "/projects/jajanin.webp",
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "RSA/HMAC"],
    gallery: [
      { src: "/projects/jajanin.webp", key: "hero" },
      { src: "/projects/jajanin-dashboard.webp", key: "dashboard" },
      { src: "/projects/jajanin-overlay.webp", key: "overlay" },
      { src: "/projects/jajanin-donation-report.webp", key: "donationReport" },
      { src: "/projects/jajanin-donate-page.webp", key: "donatePage" },
    ],
  },
  {
    id: "merchant",
    slug: "dashboard-merchant",
    role: "Frontend Developer",
    start: "2024-11",
    end: null,
    url: "https://dashboard.beyondtech.co.id/",
    image: "/projects/dashboard-merchant.webp",
    blurred: true,
    stack: ["SvelteKit", "TypeScript", "Clean Architecture"],
    gallery: [
      { src: "/projects/dashboard-merchant.webp", key: "home" },
      { src: "/projects/dashboard-merchant-transfer.webp", key: "transfer" },
      { src: "/projects/dashboard-merchant-report.webp", key: "report" },
      { src: "/projects/dashboard-merchant-statement.webp", key: "statement" },
    ],
  },
  {
    id: "internal",
    slug: "dashboard-internal",
    role: "Frontend Developer",
    start: "2024-11",
    end: null,
    image: "/projects/dashboard-internal.webp",
    internal: true,
    blurred: true,
    stack: ["SvelteKit", "TypeScript", "Clean Architecture"],
    gallery: [
      { src: "/projects/dashboard-internal.webp", key: "overview" },
      { src: "/projects/dashboard-internal-kyc.webp", key: "kyc" },
      { src: "/projects/dashboard-internal-role.webp", key: "role" },
      { src: "/projects/dashboard-internal-helpdesk.webp", key: "helpdesk" },
    ],
  },
  {
    id: "companyProfile",
    slug: "beyondtech-company-profile",
    role: "Frontend Developer",
    start: "2024-11",
    end: null,
    url: "https://beyondtech.co.id/id",
    image: "/projects/beyondtech-company-profile.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "MobX"],
    gallery: [
      { src: "/projects/beyondtech-company-profile.webp", key: "home" },
      { src: "/projects/beyondtech-about.webp", key: "about" },
      { src: "/projects/beyondtech-faq.webp", key: "faq" },
      { src: "/projects/beyondtech-news.webp", key: "news" },
    ],
  },
  {
    id: "melanoma",
    slug: "melanoma-detection",
    role: "Frontend Developer",
    start: "2023-07",
    end: "2023-10",
    stack: ["React.js", "Flask", "Machine Learning"],
    gallery: [],
  },
];
