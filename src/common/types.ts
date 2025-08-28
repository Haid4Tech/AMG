export interface IMenuItems {
  title: string;
  url: string;
}

export interface IIcons {
  label: string;
  Icon: React.ElementType;
  url: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  uid: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // not complete
}

export interface Author {
  id?: string;
  name: string;
  role?: string; // e.g. "Research Lead"
  email?: string;
  twitter?: string;
  linkedin?: string;
  avatar?: string;
  bio?: string;
}

export type ContentBlockType =
  | "heading"
  | "paragraph"
  | "image"
  | "quote"
  | "embed" // e.g. video or iframe
  | "list"
  | "html"; // raw trusted-ish HTML (use carefully)

export interface ContentBlockBase {
  id?: number | string;
  type: ContentBlockType;
  order?: number;
}

export interface HeadingBlock extends ContentBlockBase {
  type: "heading";
  level: 1 | 2 | 3 | 4;
  text: string;
}

export interface ParagraphBlock extends ContentBlockBase {
  type: "paragraph";
  text: string;
}

export interface ImageBlock extends ContentBlockBase {
  type: "image";
  image: string;
  caption?: string;
  captionPosition?: "overlay" | "below";
}

export interface QuoteBlock extends ContentBlockBase {
  type: "quote";
  text: string;
  cite?: string;
}

export interface EmbedBlock extends ContentBlockBase {
  type: "embed";
  provider: string; // e.g. "youtube", "vimeo"
  src: string; // embed URL or iframe src
  title?: string;
}

export interface ListBlock extends ContentBlockBase {
  type: "list";
  ordered?: boolean;
  items: string[];
}

export interface HtmlBlock extends ContentBlockBase {
  type: "html";
  html: string; // be careful with sanitization
}

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | QuoteBlock
  | EmbedBlock
  | ListBlock
  | HtmlBlock;

export interface News {
  id: number | string;
  title: string;
  slug: string; // e.g. "solar-microgrid-launch-2025"
  summary?: string; // short excerpt for cards
  heroImage?: string;
  authors?: Author[]; // supports multi-author
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  tags?: string[]; // e.g. ["solar", "policy", "africa"]
  categories?: string[]; // e.g. ["Press Release", "Research"]
  location?: string; // city / country relevant to the article
  readTimeMinutes?: number;
  content: ContentBlock[]; // ordered content blocks
  related?: (number | string)[]; // related article ids
  isFeatured?: boolean;
  externalLinks?: { label: string; url: string }[];
}
