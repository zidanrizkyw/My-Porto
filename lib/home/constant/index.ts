export const sectionIds = ["about", "experience", "projects", "credentials"] as const;

export type SectionId = (typeof sectionIds)[number];
