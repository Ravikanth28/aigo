import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { PATTERNS, patternCounts } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Practice by Pattern",
  description: "Coding problems grouped by the core patterns behind them.",
};

export default function DsaPatternsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Practice by Pattern
        </h1>
        <p className="mt-3 text-muted-foreground">
          Learn the pattern once, then recognize it everywhere. Each set groups
          problems that share the same underlying technique.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PATTERNS.map((pattern) => {
          const c = patternCounts(pattern.slug);
          return (
            <Link
              key={pattern.slug}
              href={`/practice/dsa-patterns/${pattern.slug}`}
              className="group"
            >
              <Card className="h-full p-5 transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
                    <Icon name={pattern.icon} className="h-4.5 w-4.5 text-primary" />
                  </span>
                  <h2 className="font-semibold group-hover:text-primary">
                    {pattern.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {pattern.blurb}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{c.total} problems</span>
                  <span className="text-easy">{c.easy} easy</span>
                  <span className="text-medium">{c.medium} med</span>
                  <span className="text-hard">{c.hard} hard</span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
