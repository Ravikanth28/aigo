import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Shapes } from "lucide-react";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practice coding problems organized by pattern and by company to target your interview prep.",
};

const MODES = [
  {
    href: "/practice/dsa-patterns",
    icon: Shapes,
    title: "By Pattern",
    blurb:
      "Group problems by the underlying technique—two pointers, sliding window, DP and more.",
  },
  {
    href: "/practice/company",
    icon: Building2,
    title: "By Company",
    blurb:
      "Target the exact problems frequently asked at the companies you're interviewing with.",
  },
];

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Practice
        </h1>
        <p className="mt-3 text-muted-foreground">
          Deliberate practice beats random grinding. Choose how you want to
          drill—by pattern to build transferable skills, or by company to focus
          your prep.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {MODES.map((m) => (
          <Link key={m.href} href={m.href} className="group">
            <Card className="h-full p-6 transition-all hover:border-primary/50 hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent">
                <m.icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-4 text-lg font-semibold group-hover:text-primary">
                {m.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Browse <ArrowRight className="h-4 w-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
