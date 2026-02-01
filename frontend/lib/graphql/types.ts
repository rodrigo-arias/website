export interface SiteSettings {
  title: string;
  description: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "bluesky" | "email";
  url: string;
}

export interface Profile {
  name: string;
  tagline: string;
  about: string;
  skills: Skill[];
  interests: string[];
  socialLinks: SocialLink[];
}

export interface StackItem {
  id: string;
  title: string;
  description: string;
  categories: StackCategory[];
  iconSlug?: string;
  iconImage?: string;
  url: string;
}

export type StackCategory =
  | "hardware"
  | "software"
  | "development"
  | "productivity"
  | "essentials"
  | "archived";

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  description?: string;
  category: BookmarkCategory;
}

export type BookmarkCategory =
  | "learning"
  | "articles"
  | "tools";

export const STACK_CATEGORY_LABELS: Record<StackCategory, string> = {
  hardware: "Hardware",
  software: "Software",
  development: "Development Tools",
  productivity: "Productivity",
  essentials: "Essentials",
  archived: "Archived",
};

export const BOOKMARK_CATEGORY_LABELS: Record<BookmarkCategory, string> = {
  learning: "Learning Resources",
  articles: "Articles",
  tools: "Tools",
};
