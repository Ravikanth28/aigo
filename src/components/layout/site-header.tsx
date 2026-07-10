"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { CoursesMenu } from "./courses-menu";

const NAV = [
  { href: "/courses", label: "Courses" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/practice/dsa-patterns", label: "Practice" },
  { href: "/animations", label: "Animations" },
  { href: "/premium", label: "Premium" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="w-full bg-primary/10 text-primary text-center text-xs sm:text-sm py-2 px-4 border-b border-primary/20">
        <Sparkles className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
        New: 1,100+ animated visualizers for DSA, System Design & ML.{" "}
        <Link href="/animations" className="underline font-medium hover:opacity-80">
          Explore now
        </Link>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-sm">
              C
            </span>
            <span className="hidden sm:inline">CodePath</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <CoursesMenu />
            {NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",
                  pathname.startsWith(item.href.split("/").slice(0, 2).join("/")) &&
                    "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <Button variant="ghost" size="icon" aria-label="Search" asChild>
              <Link href="/search">
                <Search className="h-4 w-4" />
              </Link>
            </Button>
            <ModeToggle />
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
