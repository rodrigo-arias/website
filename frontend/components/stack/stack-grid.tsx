"use client";

import type { StackItem } from "@/lib/graphql/types";
import { useFilterStore } from "@/lib/stores/filter-store";

interface StackGridProps {
  items: StackItem[];
}

export function StackGrid({ items }: StackGridProps) {
  const { selectedCategories } = useFilterStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        const isVisible =
          selectedCategories.length === 0 ||
          item.categories.some((cat) => selectedCategories.includes(cat));

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-start gap-4 p-4 bg-border/30 hover:bg-border/50 transition-all duration-300 ease-out ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none absolute"
            }`}
            style={{
              position: isVisible ? "relative" : "absolute",
              visibility: isVisible ? "visible" : "hidden",
            }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 size-10 flex items-center justify-center bg-border rounded">
              {item.iconSlug ? (
                <img
                  src={`https://cdn.simpleicons.org/${item.iconSlug}/ffffff`}
                  alt=""
                  className="size-5"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
              ) : null}
              {item.iconImage && !item.iconSlug ? (
                <img src={item.iconImage} alt="" className="size-5" />
              ) : null}
              <span
                className={`text-small font-semibold text-muted-foreground ${
                  item.iconSlug || item.iconImage ? "hidden" : ""
                }`}
              >
                {item.title.charAt(0)}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">
                {item.title}
              </h3>
              <p className="text-small text-muted-foreground line-clamp-2 mt-1">
                {item.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
