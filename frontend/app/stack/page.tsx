import { CategoryFilter } from "@/components/stack/category-filter";
import { StackGrid } from "@/components/stack/stack-grid";
import { mockStackItems, mockPageMeta } from "@/lib/mock/data";
import { PageHeader } from "@/components/layout/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: mockPageMeta.stack.title,
  description: mockPageMeta.stack.description,
};

export default function StackPage() {
  const items = mockStackItems;

  return (
    <div className="page-grid">
      <PageHeader />

      {/* Stack Section - Full Width */}
      <div className="col-span-full pt-section min-[1550px]:-translate-x-content-offset min-[1550px]:w-[calc(100%+var(--spacing-content-offset))]">
        <div className="mb-6">
          <h2 className="text-label">Stack</h2>
          <p className="text-small text-muted-foreground">
            apps, tools, and gear I use daily
          </p>
        </div>
        <CategoryFilter />
        <StackGrid items={items} />
      </div>
    </div>
  );
}
