"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { LessonTypeIcon, PremiumLock } from "@/components/lesson-meta";
import { useProgress } from "@/lib/progress-store";
import type { Roadmap } from "@/lib/roadmaps";
import { cn } from "@/lib/utils";

export function LessonSidebar({
  roadmap,
  currentSlug,
}: {
  roadmap: Roadmap;
  currentSlug: string;
}) {
  const completed = useProgress((s) => s.completed);

  return (
    <nav className="space-y-6">
      {roadmap.sections.map((section) => (
        <div key={section.slug}>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.lessons.map((lesson) => {
              const active = lesson.slug === currentSlug;
              const done = !!completed[`${roadmap.course}/${lesson.slug}`];
              return (
                <li key={lesson.slug}>
                  <Link
                    href={`/learn/${roadmap.course}/${lesson.slug}`}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-accent font-medium text-foreground"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    )}
                  >
                    {done ? (
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                    ) : (
                      <LessonTypeIcon
                        type={lesson.type}
                        className="h-4 w-4 shrink-0 opacity-70"
                      />
                    )}
                    <span className="flex-1 truncate">{lesson.title}</span>
                    {lesson.premium && <PremiumLock />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
