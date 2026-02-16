import { getBookmarks } from "@/lib/graphql/fetchers";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import {
  BOOKMARK_CATEGORY_LABELS,
  type BookmarkCategory,
} from "@/lib/graphql/types";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Curated collection of useful resources and tools.",
  alternates: {
    canonical: "/bookmarks",
  },
};

export default async function BookmarksPage() {
  const bookmarks = await getBookmarks();
  const categories = Object.keys(BOOKMARK_CATEGORY_LABELS) as BookmarkCategory[];

  const groupedBookmarks = categories.reduce(
    (acc, category) => {
      acc[category] = bookmarks.filter((b) => b.category === category);
      return acc;
    },
    {} as Record<BookmarkCategory, typeof bookmarks>
  );

  // Filter to only categories with bookmarks
  const activeCategories = categories.filter(
    (category) => groupedBookmarks[category].length > 0
  );

  return (
    <div className="page-grid">
      <PageHeader />

      {activeCategories.map((category, index) => (
        <Section
          key={category}
          label={BOOKMARK_CATEGORY_LABELS[category]}
          first={index === 0}
        >
          <div className="space-y-2">
            {groupedBookmarks[category].map((bookmark) => (
              <a
                key={bookmark.id}
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-70 transition-opacity"
              >
                <span>{bookmark.title}</span>
                {bookmark.description && (
                  <span className="text-muted-foreground"> — {bookmark.description}</span>
                )}
              </a>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
