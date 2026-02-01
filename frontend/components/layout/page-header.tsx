import Link from "next/link";

export function PageHeader() {
  return (
    <>
      {/* Header - First Column */}
      <header className="md:col-span-1 mb-[120px] md:mb-[160px]">
        <h1 className="font-normal">
          <Link
            href="/"
            className="block text-label hover:opacity-70 transition-opacity"
          >
            RODRIGO ARIAS
          </Link>
        </h1>
        <p className="text-small uppercase text-muted-foreground">
          Web Developer
        </p>
        <nav className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/stack"
            className="inline-block bg-border px-[13px] py-[10px] text-small uppercase hover:text-foreground transition-colors"
          >
            Stack
          </Link>
          <Link
            href="/bookmarks"
            className="inline-block bg-border px-[13px] py-[10px] text-small uppercase hover:text-foreground transition-colors"
          >
            Bookmarks
          </Link>
        </nav>
      </header>

      {/* Empty columns for first row spacing */}
      <div className="hidden md:block md:col-span-2" />
    </>
  );
}
