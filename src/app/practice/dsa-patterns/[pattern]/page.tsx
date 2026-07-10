import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Icon } from "@/components/icon";
import { ProblemTable } from "@/components/problem-table";
import { PATTERNS, getPattern, problemsByPattern } from "@/lib/practice";

export function generateStaticParams() {
  return PATTERNS.map((p) => ({ pattern: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pattern: string }>;
}): Promise<Metadata> {
  const { pattern } = await params;
  const p = getPattern(pattern);
  if (!p) return { title: "Pattern" };
  return { title: `${p.title} Problems`, description: p.blurb };
}

export default async function PatternPage({
  params,
}: {
  params: Promise<{ pattern: string }>;
}) {
  const { pattern } = await params;
  const p = getPattern(pattern);
  if (!p) notFound();

  const problems = problemsByPattern(p.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/practice/dsa-patterns"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All patterns
      </Link>

      <header className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent">
          <Icon name={p.icon} className="h-5 w-5 text-primary" />
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {p.title}
          </h1>
          <p className="text-sm text-muted-foreground">{p.blurb}</p>
        </div>
      </header>

      <div className="mt-8">
        <ProblemTable problems={problems} />
      </div>
    </div>
  );
}
