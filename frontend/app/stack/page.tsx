import { CategoryFilter } from "@/components/stack/category-filter";
import { StackGrid } from "@/components/stack/stack-grid";
import { getStackItems } from "@/lib/graphql/fetchers";
import { PageHeader } from "@/components/layout/page-header";
import { mockPageMeta } from "@/lib/mock/data";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: mockPageMeta.stack.title,
  description: mockPageMeta.stack.description,
};

export default async function StackPage() {
  const stackItems = await getStackItems();
  const items = [...stackItems].sort((a, b) => a.title.localeCompare(b.title));

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
