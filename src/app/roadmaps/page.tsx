import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, FileText, Layers } from "lucide-react";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRoadmap, roadmapStats } from "@/lib/roadmaps";
import { getCourse } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Roadmaps",
  description:
    "Structured, ordered learning paths for DSA, System Design, and coding patterns — know exactly what to learn next.",
};

const ROADMAP_SLUGS: { slug: string; title: string; blurb: string; icon: string }[] = [
  {
    slug: "dsa",
    title: "DSA Roadmap",
    blurb:
      "From arrays and hashing to graphs and dynamic programming — the complete path to interview-ready data structures & algorithms.",
    icon: "Binary",
  },
  {
    slug: "system-design",
    title: "System Design Roadmap",
    blurb:
      "Scalability foundations, building blocks, databases, and real-world case studies like YouTube and Uber.",
    icon: "Network",
  },
  {
    slug: "dsa-patterns",
    title: "DSA Patterns Roadmap",
    blurb:
      "Master the recurring patterns behind thousands of problems: two pointers, sliding window, backtracking, and more.",
    icon: "Shapes",
  },
];

export default function RoadmapsPage() {
  const roadmaps = ROADMAP_SLUGS.map((r) => {
    const rm = getRoadmap(r.slug);
    const course = getCourse(r.slug);
    return { ...r, rm, stats: rm ? roadmapStats(rm) : null, course };
  }).filter((r) => r.rm);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Roadmaps</h1>
        <p className="mt-3 text-muted-foreground">
          A clear, ordered path from fundamentals to advanced topics. No more
          guessing what to learn next — just follow the roadmap, watch it animate,
          then practice.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {roadmaps.map((r) => (
          <Card key={r.slug} className="overflow-hidden p-0">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Icon name={r.icon} className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {r.title}
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                    {r.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      {r.stats!.sections} sections
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-primary" />
                      {r.stats!.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      {r.stats!.articles} articles
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Code2 className="h-3.5 w-3.5 text-primary" />
                      {r.stats!.problems} problems
                    </span>
                  </div>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href={`/learn/${r.slug}/course-roadmap`}>
                  View roadmap <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Looking for more tracks?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Browse all 17+ courses across Interview Prep, AI / ML, Languages, and
          Dev Tools.
        </p>
        <Button variant="outline" asChild className="mt-6">
          <Link href="/courses">
            Explore all courses <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
