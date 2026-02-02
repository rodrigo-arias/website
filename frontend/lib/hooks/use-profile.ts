"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/lib/graphql/client";
import { GET_PROFILE } from "@/lib/graphql/queries";
import type { Profile } from "@/lib/graphql/types";
import { mockProfile } from "@/lib/mock/data";

interface ProfileResponse {
  globalSet: {
    name: string;
    tagline: string;
    about: string;
    skills: Array<{ name: string; icon: string; color: string }>;
    interests: string[];
    social_links: Array<{ platform: string; url: string }>;
  };
}

function transformProfileResponse(data: ProfileResponse): Profile {
  const { globalSet } = data;
  return {
    name: globalSet.name,
    tagline: globalSet.tagline,
    about: globalSet.about,
    skills: globalSet.skills,
    interests: globalSet.interests,
    socialLinks: globalSet.social_links.map((link) => ({
      platform: link.platform as Profile["socialLinks"][number]["platform"],
      url: link.url,
    })),
  };
}

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      // Use mock data for now - replace with API call when backend is ready
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        return mockProfile;
      }
      const data = await graphqlClient.request<ProfileResponse>(GET_PROFILE);
      return transformProfileResponse(data);
    },
    staleTime: Infinity,
  });
}
