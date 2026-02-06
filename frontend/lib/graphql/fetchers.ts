import { cache } from "react";
import { graphqlFetch } from "./client";
import {
  GET_PROFILE,
  GET_SITE_SETTINGS,
  GET_STACK,
  GET_BOOKMARKS,
} from "./queries";
import type { Profile, SiteSettings, StackItem, Bookmark } from "./types";

// -- Statamic response types (snake_case / LabeledValue) --

interface StatamicSkill {
  name: string;
  icon: string;
  color: string;
}

interface StatamicSocialLink {
  platform: { value: string };
  url: string;
}

interface StatamicProfileResponse {
  globalSet: {
    name: string;
    tagline: string;
    about: string;
    interests: string[];
    skills: StatamicSkill[];
    social_links: StatamicSocialLink[];
  };
}

interface StatamicSiteSettingsResponse {
  globalSet: {
    title: string;
    description: string;
    url: string;
  };
}

interface StatamicStackEntry {
  id: string;
  title: string;
  description: string;
  categories: { value: string }[];
  icon_slug: string | null;
  icon_image: { url: string }[] | null;
  link_url: string;
}

interface StatamicStackResponse {
  entries: {
    data: StatamicStackEntry[];
  };
}

interface StatamicBookmarkEntry {
  id: string;
  title: string;
  link_url: string;
  description: string | null;
  category: { value: string };
}

interface StatamicBookmarkResponse {
  entries: {
    data: StatamicBookmarkEntry[];
  };
}

// -- Fetchers --

export const getProfile = cache(async (): Promise<Profile> => {
  const data = await graphqlFetch<StatamicProfileResponse>(GET_PROFILE);
  const gs = data.globalSet;

  return {
    name: gs.name,
    tagline: gs.tagline,
    about: gs.about,
    interests: gs.interests ?? [],
    skills: gs.skills.map((s) => ({
      name: s.name,
      icon: s.icon,
      color: s.color,
    })),
    socialLinks: gs.social_links.map((l) => ({
      platform: l.platform.value as Profile["socialLinks"][number]["platform"],
      url: l.url,
    })),
  };
});

export async function getSiteSettings(): Promise<SiteSettings> {
  const data =
    await graphqlFetch<StatamicSiteSettingsResponse>(GET_SITE_SETTINGS);
  const gs = data.globalSet;

  return {
    title: gs.title,
    description: gs.description,
    url: gs.url,
  };
}

export async function getStackItems(): Promise<StackItem[]> {
  const data = await graphqlFetch<StatamicStackResponse>(GET_STACK);

  return data.entries.data.map((entry) => ({
    id: entry.id,
    title: entry.title,
    description: entry.description,
    categories: entry.categories.map((c) => c.value) as StackItem["categories"],
    iconSlug: entry.icon_slug ?? undefined,
    iconImage: entry.icon_image?.[0]?.url ?? undefined,
    url: entry.link_url,
  }));
}

export async function getBookmarks(): Promise<Bookmark[]> {
  const data = await graphqlFetch<StatamicBookmarkResponse>(GET_BOOKMARKS);

  return data.entries.data.map((entry) => ({
    id: entry.id,
    title: entry.title,
    url: entry.link_url,
    description: entry.description ?? undefined,
    category: entry.category.value as Bookmark["category"],
  }));
}
