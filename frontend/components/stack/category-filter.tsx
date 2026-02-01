"use client";

import { useFilterStore } from "@/lib/stores/filter-store";
import { STACK_CATEGORY_LABELS, type StackCategory } from "@/lib/graphql/types";
import { cn } from "@/lib/utils";

const categories = Object.keys(STACK_CATEGORY_LABELS) as StackCategory[];

export function CategoryFilter() {
  const { selectedCategories, toggleCategory, clearFilters } = useFilterStore();

  return (
    <div className="flex flex-wrap gap-2 mb-[27px]">
      <button
        onClick={clearFilters}
        className={cn(
          "bg-border px-[13px] py-[10px] text-small uppercase transition-colors cursor-pointer",
          selectedCategories.length === 0
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        All
      </button>
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={cn(
              "bg-border px-[13px] py-[10px] text-small uppercase transition-colors cursor-pointer",
              isSelected
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {STACK_CATEGORY_LABELS[category]}
          </button>
        );
      })}
    </div>
  );
}
