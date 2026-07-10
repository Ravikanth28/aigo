"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { COURSES } from "@/lib/courses";
import { ANIMATIONS } from "@/lib/animations";
import { PATTERNS, COMPANIES, PROBLEMS } from "@/lib/practice";

type Result = {
  href: string;
  title: string;
  kind: string;
  icon: string;
  meta?: string;
};

const INDEX: Result[] = [
  ...COURSES.map((c) => ({
    href: `/learn/${c.slug}/course-roadmap`,
    title: c.title,
    kind: "Course",
    icon: c.icon,
    meta: c.blurb,
  })),
  ...ANIMATIONS.map((a) => ({
    href: `/animations/${a.slug}`,
    title: a.title,
    kind: "Animation",
    icon: a.icon,
    meta: a.category,
  })),
  ...PATTERNS.map((p) => ({
    href: `/practice/dsa-patterns/${p.slug}`,
    title: p.title,
    kind: "Pattern",
    icon: p.icon,
    meta: p.blurb,
  })),
  ...COMPANIES.map((c) => ({
    href: `/practice/company/${c.slug}`,
    title: c.name,
    kind: "Company",
    icon: "Building2",
    meta: "Company-wise problems",
  })),
  ...PROBLEMS.map((p) => ({
    href: `/practice/dsa-patterns/${p.pattern}`,
    title: p.title,
    kind: "Problem",
    icon: "Code2",
    meta: p.difficulty,
  })),
];

const KIND_VARIANT: Record<string, "default" | "secondary" | "outline"> = {
  Course: "default",
  Animation: "secondary",
  Pattern: "outline",
  Company: "outline",
  Problem: "secondary",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.kind.toLowerCase().includes(q) ||
        (r.meta?.toLowerCase().includes(q) ?? false)
    ).slice(0, 40);
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Search</h1>
        <p className="mt-3 text-muted-foreground">
          Find courses, animations, patterns, companies, and problems.
        </p>
      </header>

      <div className="relative mt-8">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for 'binary search', 'graphs', 'Google'..."
          className="h-11 pl-9"
        />
      </div>

      <div className="mt-8">
        {query.trim() === "" ? (
          <p className="text-sm text-muted-foreground">
            Start typing to search across {INDEX.length} items.
          </p>
        ) : results.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No results for &ldquo;{query}&rdquo;. Try a different term.
          </p>
        ) : (
          <ul className="space-y-2">
            {results.map((r) => (
              <li key={`${r.kind}-${r.href}-${r.title}`}>
                <Link
                  href={r.href}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-accent"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent">
                    <Icon name={r.icon} className="h-4 w-4 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-medium">{r.title}</span>
                      <Badge variant={KIND_VARIANT[r.kind] ?? "outline"}>
                        {r.kind}
                      </Badge>
                    </div>
                    {r.meta && (
                      <p className="truncate text-xs text-muted-foreground">
                        {r.meta}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
