"use client";

import { usePathname } from "next/navigation";

export function GridLines() {
  const pathname = usePathname();
  const isStackPage = pathname === "/stack";

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Horizontal line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Vertical divider line - responsive positioning like Carl's site */}
      {/* On stack page: only show on mobile, hide on desktop */}
      <div
        className={`absolute top-0 bottom-0 w-px bg-border -translate-x-px
          left-4
          min-[1150px]:left-[calc(50%-var(--spacing-content-offset))]
          min-[1550px]:left-1/2
          ${isStackPage ? "min-[1150px]:hidden" : ""}`}
      />
    </div>
  );
}
