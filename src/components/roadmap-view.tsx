"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Check, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  DifficultyBadge,
  LessonTypeIcon,
  PremiumLock,
} from "@/components/lesson-meta";
import { useProgress } from "@/lib/progress-store";
import { flattenLessons, type Roadmap } from "@/lib/roadmaps";
import { cn } from "@/lib/utils";

export function RoadmapView({ roadmap }: { roadmap: Roadmap }) {
  const completed = useProgress((s) => s.completed);
  const toggle = useProgress((s) => s.toggle);
  const reset = useProgress((s) => s.reset);

  const all = useMemo(() => flattenLessons(roadmap), [roadmap]);
  const doneCount = all.filter(
    (l) => completed[`${roadmap.course}/${l.slug}`]
  ).length;
  const pct = all.length ? Math.round((doneCount / all.length) * 100) : 0;

  const defaultOpen = roadmap.sections.slice(0, 2).map((s) => s.slug);

  return (
    <div>
      <div className="mb-8 rounded-lg border border-border bg-card/40 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Your progress</p>
            <p className="text-xs text-muted-foreground">
              {doneCount} of {all.length} lessons completed
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tabular-nums text-primary">
              {pct}%
            </span>
            {doneCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => reset(roadmap.course)}
              >
                Reset
              </Button>
            )}
          </div>
        </div>
        <Progress value={pct} className="mt-4" />
      </div>

      <Accordion
        type="multiple"
        defaultValue={defaultOpen}
        className="space-y-3"
      >
        {roadmap.sections.map((section, i) => {
          const secDone = section.lessons.filter(
            (l) => completed[`${roadmap.course}/${l.slug}`]
          ).length;
          return (
            <AccordionItem
              key={section.slug}
              value={section.slug}
              className="rounded-lg border border-border bg-card/40 px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-1 items-center gap-3 pr-3 text-left">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent text-xs font-semibold">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold">{section.title}</p>
                    {section.summary && (
                      <p className="text-xs font-normal text-muted-foreground">
                        {section.summary}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                    {secDone}/{section.lessons.length}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 pb-2">
                  {section.lessons.map((lesson) => {
                    const done =
                      !!completed[`${roadmap.course}/${lesson.slug}`];
                    return (
                      <li
                        key={lesson.slug}
                        className="group flex items-center gap-3 rounded-md px-2 py-2 hover:bg-accent/60"
                      >
                        <button
                          type="button"
                          aria-label={done ? "Mark incomplete" : "Mark complete"}
                          onClick={() => toggle(roadmap.course, lesson.slug)}
                          className={cn(
                            "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                            done
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-muted-foreground/40 hover:border-primary"
                          )}
                        >
                          {done && <Check className="h-3 w-3" />}
                        </button>
                        <Link
                          href={`/learn/${roadmap.course}/${lesson.slug}`}
                          className="flex flex-1 items-center gap-2 min-w-0"
                        >
                          <LessonTypeIcon
                            type={lesson.type}
                            className="h-4 w-4 shrink-0 text-muted-foreground"
                          />
                          <span
                            className={cn(
                              "truncate text-sm group-hover:text-foreground",
                              done && "text-muted-foreground line-through"
                            )}
                          >
                            {lesson.title}
                          </span>
                          {lesson.premium && <PremiumLock />}
                        </Link>
                        {lesson.difficulty && (
                          <DifficultyBadge difficulty={lesson.difficulty} />
                        )}
                        {lesson.minutes && (
                          <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
                            <Clock className="h-3 w-3" />
                            {lesson.minutes}m
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
