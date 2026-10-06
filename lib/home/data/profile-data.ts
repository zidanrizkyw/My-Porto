export type SocialKey = "github" | "linkedin" | "instagram" | "email";

export interface Social {
  key: SocialKey;
  href: string;
}

export const profileData = {
  name: "Zidan Rizky Wijaya",
  resumeUrl: "/docs/Zidan_Rizky_Wijaya-CV-Update.pdf",
  // Background removed; transparent WebP cropped to the subject
  photo: { src: "/profile/zidan-cutout.webp", width: 239, height: 360 },
  socials: [
    { key: "github", href: "https://github.com/zidanrizkyw" },
    { key: "linkedin", href: "https://www.linkedin.com/in/zidanrizkywijaya" },
    { key: "instagram", href: "https://www.instagram.com/zidanrzkyy" },
    { key: "email", href: "mailto:zidane.indo1235@gmail.com" },
  ] satisfies Social[],
};
