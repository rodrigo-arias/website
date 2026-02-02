"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Info, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMounted } from "@/lib/hooks/use-mounted";

export function Toolbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const pathname = usePathname();
  const isColophon = pathname === "/colophon";

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1 md:top-1/2 md:bottom-auto md:left-4 md:flex-col md:translate-x-0 md:-translate-y-1/2 z-40">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="size-8 flex items-center justify-center bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </button>
      <Link
        href={isColophon ? "/" : "/colophon"}
        className="size-8 flex items-center justify-center bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label={isColophon ? "Home" : "Site info"}
      >
        {isColophon ? (
          <Home className="size-4" />
        ) : (
          <Info className="size-4" />
        )}
      </Link>
    </div>
  );
}
