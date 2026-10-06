export interface Certification {
  // Key into messages `credentials.items`
  id: "mos" | "lppi";
  date: string;
}

export const educationData = {
  start: "2020-09",
  end: "2024-08",
};

export const certificationData: Certification[] = [
  { id: "lppi", date: "2025-11-05" },
  { id: "mos", date: "2024-09-06" },
];
