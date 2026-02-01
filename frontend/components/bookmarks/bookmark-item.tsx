import type { Bookmark } from "@/lib/graphql/types";
import { ExternalLink } from "lucide-react";

interface BookmarkItemProps {
  bookmark: Bookmark;
}

export function BookmarkItem({ bookmark }: BookmarkItemProps) {
  return (
    <a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-2 rounded-md p-2 -mx-2 transition-colors hover:bg-accent"
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-medium group-hover:text-foreground">
          {bookmark.title}
        </h3>
        {bookmark.description && (
          <p className="mt-0.5 text-sm text-muted-foreground">
            {bookmark.description}
          </p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mt-1" />
    </a>
  );
}
