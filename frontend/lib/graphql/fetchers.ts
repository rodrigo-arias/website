import { cache } from "react";
import { graphqlFetch } from "./client";
import {
  GET_PROFILE,
  GET_SITE_SETTINGS,
  GET_STACK,
  GET_BOOKMARKS,
} from "./queries";
import type { Profile, SiteSettings, StackItem, Bookmark } from "./types";
import type {
  GetProfileQuery,
  GetSiteSettingsQuery,
  GetStackQuery,
  GetBookmarksQuery,
} from "./generated/graphql";

// -- Fetchers --

export const getProfile = cache(async (): Promise<Profile> => {
  const data = await graphqlFetch<GetProfileQuery>(GET_PROFILE);
  const gs = data.globalSet as NonNullable<GetProfileQuery["globalSet"]> & {
    name: string;
    tagline: string;
    about: string;
    interests: string[];
    skills: Array<{ name: string; icon: string; color: string }>;
    social_links: Array<{ platform: { value: string }; url: string }>;
  };

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
  const data = await graphqlFetch<GetSiteSettingsQuery>(GET_SITE_SETTINGS);
  const gs = data.globalSet as { site_title: string; site_description: string; site_url: string };

  return {
    title: gs.site_title,
    description: gs.site_description,
    url: gs.site_url,
  };
}

export async function getStackItems(): Promise<StackItem[]> {
  const data = await graphqlFetch<GetStackQuery>(GET_STACK);

  return (data.entries?.data ?? []).map((entry) => {
    const e = entry as {
      id: string;
      title: string;
      description: string;
      categories: Array<{ value: string }>;
      icon_slug: string | null;
      icon_image: { url: string } | null;
      link_url: string;
    };
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      categories: e.categories.map((c) => c.value) as StackItem["categories"],
      iconSlug: e.icon_slug ?? undefined,
      iconImage: e.icon_image?.url ?? undefined,
      url: e.link_url,
    };
  });
}

export async function getBookmarks(): Promise<Bookmark[]> {
  const data = await graphqlFetch<GetBookmarksQuery>(GET_BOOKMARKS);

  return (data.entries?.data ?? []).map((entry) => {
    const e = entry as {
      id: string;
      title: string;
      link_url: string;
      description: string | null;
      category: { value: string };
    };
    return {
      id: e.id,
      title: e.title,
      url: e.link_url,
      description: e.description ?? undefined,
      category: e.category.value as Bookmark["category"],
    };
  });
}
