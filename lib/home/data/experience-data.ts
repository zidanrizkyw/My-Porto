export interface Experience {
  // Key into messages `experience.items`
  id: "beyondtech" | "humic" | "mandiri";
  company: string;
  url?: string;
  // ISO year-month; `end: null` means the role is ongoing
  start: string;
  end: string | null;
  stack: string[];
}

export const experienceData: Experience[] = [
  {
    id: "beyondtech",
    company: "Beyondtech",
    url: "https://beyondtech.co.id/id",
    start: "2024-11",
    end: null,
    stack: ["Next.js", "SvelteKit", "TypeScript", "Tailwind CSS", "MobX"],
  },
  {
    id: "humic",
    company: "HUMIC Engineering Research Center",
    start: "2023-07",
    end: "2023-10",
    stack: ["React.js", "JavaScript", "REST API"],
  },
  {
    id: "mandiri",
    company: "PT Bank Mandiri (Persero) Tbk.",
    start: "2023-04",
    end: "2023-06",
    stack: ["Kopra Cash Management", "Microsoft Excel"],
  },
];
