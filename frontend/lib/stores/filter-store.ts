import { create } from "zustand";
import type { StackCategory } from "@/lib/graphql/types";

interface FilterState {
  selectedCategories: StackCategory[];
  toggleCategory: (category: StackCategory) => void;
  clearFilters: () => void;
  setCategories: (categories: StackCategory[]) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategories: ["software"],
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? []
        : [category],
    })),
  clearFilters: () => set({ selectedCategories: [] }),
  setCategories: (categories) => set({ selectedCategories: categories }),
}));
