import { z } from "zod";

export const skillSchema = z.object({
  name: z.string(),
  icon: z.string(),
  color: z.string(),
});

export const socialLinkSchema = z.object({
  platform: z.enum(["github", "linkedin", "bluesky", "email"]),
  url: z.string().url(),
});

export const profileSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  about: z.string(),
  skills: z.array(skillSchema),
  interests: z.array(z.string()),
  socialLinks: z.array(socialLinkSchema),
});

export const stackCategorySchema = z.enum([
  "hardware",
  "software",
  "development",
  "design",
  "productivity",
  "essentials",
  "archived",
]);

export const stackItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  categories: z.array(stackCategorySchema),
  iconSlug: z.string().optional(),
  iconImage: z.string().optional(),
  url: z.string().url(),
});

export const bookmarkCategorySchema = z.enum([
  "learning",
  "articles",
  "tools",
]);

export const bookmarkSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  description: z.string().optional(),
  category: bookmarkCategorySchema,
});

export type SkillInput = z.infer<typeof skillSchema>;
export type SocialLinkInput = z.infer<typeof socialLinkSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type StackItemInput = z.infer<typeof stackItemSchema>;
export type BookmarkInput = z.infer<typeof bookmarkSchema>;
