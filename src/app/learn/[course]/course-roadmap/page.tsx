import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Code2, Layers } from "lucide-react";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { RoadmapView } from "@/components/roadmap-view";
import { COURSES, getCourse } from "@/lib/courses";
import { getRoadmap, roadmapStats } from "@/lib/roadmaps";

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const meta = getCourse(course);
  if (!meta) return { title: "Course" };
  return {
    title: `${meta.title} — Roadmap`,
    description: meta.blurb,
  };
}

export default async function CourseRoadmapPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const meta = getCourse(course);
  if (!meta) notFound();

  const roadmap = getRoadmap(course);
  const stats = roadmap ? roadmapStats(roadmap) : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All courses
      </Link>

      <header className="mt-6 flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent">
          <Icon name={meta.icon} className={`h-7 w-7 ${meta.accent}`} />
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {meta.title}
            </h1>
            {meta.premium && <Badge variant="medium">Premium</Badge>}
          </div>
          <p className="mt-2 max-w-2xl text-muted-foreground">{meta.blurb}</p>
          {stats && (
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Layers className="h-4 w-4" /> {stats.sections} sections
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" /> {stats.articles} lessons
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 className="h-4 w-4" /> {stats.problems} problems
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="mt-10">
        {roadmap ? (
          <RoadmapView roadmap={roadmap} />
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-card/40 p-10 text-center">
            <p className="font-semibold">Roadmap coming soon</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;re authoring the {meta.title} roadmap. Check back shortly.
            </p>
            <Link
              href="/learn/dsa/course-roadmap"
              className="mt-4 inline-block text-sm text-primary hover:underline"
            >
              Explore the DSA roadmap →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
