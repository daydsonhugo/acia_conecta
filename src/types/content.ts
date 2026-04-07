export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: "handshake" | "graduation" | "store";
};

export type BoardMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type LinkType =
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "website"
  | "email"
  | "phone";

export type ShowcaseLink = {
  type: LinkType;
  label: string;
  url: string;
};

export type ShowcaseMember = {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  links: ShowcaseLink[];
};
