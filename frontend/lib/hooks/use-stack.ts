"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/lib/graphql/client";
import { GET_STACK } from "@/lib/graphql/queries";
import type { StackItem } from "@/lib/graphql/types";
import { mockStackItems } from "@/lib/mock/data";

interface StackResponse {
  entries: {
    data: Array<{
      title: string;
      description: string;
      categories: string[];
      icon_slug?: string;
      icon_image?: { url: string };
      url: string;
    }>;
  };
}

function transformStackResponse(data: StackResponse): StackItem[] {
  return data.entries.data.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    categories: item.categories as StackItem["categories"],
    iconSlug: item.icon_slug,
    iconImage: item.icon_image?.url,
    url: item.url,
  }));
}

export function useStack() {
  return useQuery({
    queryKey: ["stack"],
    queryFn: async () => {
      // Use mock data for now - replace with API call when backend is ready
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        return mockStackItems;
      }
      const data = await graphqlClient.request<StackResponse>(GET_STACK);
      return transformStackResponse(data);
    },
    staleTime: Infinity,
  });
}
