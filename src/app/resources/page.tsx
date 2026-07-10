import type { Metadata } from "next";
import Link from "next/link";
import {
  Map,
  Play,
  Code2,
  Building2,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free study resources: roadmaps, algorithm animations, practice problems, company question sets, and interview guides.",
};

const RESOURCES = [
  {
    icon: Map,
    title: "Roadmaps",
    desc: "Ordered learning paths for DSA, System Design, and coding patterns. Always know what to study next.",
    href: "/roadmaps",
    cta: "Browse roadmaps",
  },
  {
    icon: Play,
    title: "Algorithm animations",
    desc: "Step-through visualizers for sorting, searching, and two-pointer techniques. Watch the logic unfold.",
    href: "/animations",
    cta: "Watch animations",
  },
  {
    icon: Code2,
    title: "Practice problems",
    desc: "Curated problems grouped by pattern, from Easy warmups to Hard interview favorites.",
    href: "/practice",
    cta: "Start practicing",
  },
  {
    icon: Building2,
    title: "Company question sets",
    desc: "See the patterns and problems that top companies love to ask in their interviews.",
    href: "/practice",
    cta: "Explore by company",
  },
  {
    icon: GraduationCap,
    title: "All courses",
    desc: "Full catalog across interview prep, AI/ML, languages, and dev tools.",
    href: "/courses",
    cta: "View courses",
  },
  {
    icon: BookOpen,
    title: "Newsletter",
    desc: "One weekly email with a fresh lesson, a new animation, and an interview tip.",
    href: "/newsletter",
    cta: "Subscribe",
  },
];

const GUIDES = [
  { title: "How to approach a coding problem", href: "/learn/dsa/how-to-approach-a-problem" },
  { title: "Big-O notation & time complexity", href: "/learn/dsa/big-o-notation" },
  { title: "The two pointers pattern", href: "/learn/dsa/two-pointers-pattern" },
  { title: "The sliding window pattern", href: "/learn/dsa/sliding-window-pattern" },
  { title: "Binary search, explained", href: "/learn/dsa/binary-search-explained" },
  { title: "Introduction to dynamic programming", href: "/learn/dsa/intro-to-dp" },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Resources
        </h1>
        <p className="mt-3 text-muted-foreground">
          Everything you need to prepare — free, structured, and visual. Pick a
          starting point below.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <Link key={r.title} href={r.href} className="group">
            <Card className="flex h-full flex-col p-5 transition-all hover:border-primary/50 hover:shadow-md">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                <r.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                {r.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {r.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Popular guides</h2>
        <p className="mt-2 text-muted-foreground">
          Hand-picked articles to build the fundamentals.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href} className="group">
              <Card className="flex items-center justify-between p-4 transition-all hover:border-primary/50">
                <span className="text-sm font-medium">{g.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
