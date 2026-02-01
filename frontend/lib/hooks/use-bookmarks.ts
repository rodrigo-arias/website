"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/lib/graphql/client";
import { GET_BOOKMARKS } from "@/lib/graphql/queries";
import type { Bookmark } from "@/lib/graphql/types";
import { mockBookmarks } from "@/lib/mock/data";

interface BookmarksResponse {
  entries: {
    data: Array<{
      title: string;
      url: string;
      description?: string;
      category: string;
    }>;
  };
}

function transformBookmarksResponse(data: BookmarksResponse): Bookmark[] {
  return data.entries.data.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    url: item.url,
    description: item.description,
    category: item.category as Bookmark["category"],
  }));
}

export function useBookmarks() {
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      // Use mock data for now - replace with API call when backend is ready
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        return mockBookmarks;
      }
      const data = await graphqlClient.request<BookmarksResponse>(GET_BOOKMARKS);
      return transformBookmarksResponse(data);
    },
    staleTime: Infinity,
  });
}
