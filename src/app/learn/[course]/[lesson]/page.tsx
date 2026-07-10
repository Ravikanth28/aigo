import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/lesson-meta";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { LessonCompleteButton } from "@/components/lesson-complete-button";
import { COURSES, getCourse } from "@/lib/courses";
import {
  flattenLessons,
  getLesson,
  getRoadmap,
  type Lesson,
} from "@/lib/roadmaps";
import { getLessonContent } from "@/lib/lesson-content";
import { LessonContentView } from "@/components/lesson-content";

export function generateStaticParams() {
  const params: { course: string; lesson: string }[] = [];
  for (const course of COURSES) {
    const rm = getRoadmap(course.slug);
    if (!rm) continue;
    for (const lesson of flattenLessons(rm)) {
      params.push({ course: course.slug, lesson: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}): Promise<Metadata> {
  const { course, lesson } = await params;
  const found = getLesson(course, lesson);
  if (!found) return { title: "Lesson" };
  return { title: found.lesson.title };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = await params;
  const meta = getCourse(course);
  const roadmap = getRoadmap(course);
  const found = getLesson(course, lesson);
  if (!meta || !roadmap || !found) notFound();

  const { section, lesson: current } = found;
  const all = flattenLessons(roadmap);
  const idx = all.findIndex((l) => l.slug === current.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 scrollbar-thin">
            <Link
              href={`/learn/${course}/course-roadmap`}
              className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {meta.title}
            </Link>
            <LessonSidebar roadmap={roadmap} currentSlug={current.slug} />
          </div>
        </aside>

        {/* Content */}
        <article className="min-w-0 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{section.title}</span>
            {current.difficulty && (
              <>
                <span>·</span>
                <DifficultyBadge difficulty={current.difficulty} />
              </>
            )}
            {current.premium && <Badge variant="medium">Premium</Badge>}
            {current.minutes && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {current.minutes} min read
              </span>
            )}
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            {current.title}
          </h1>

          <LessonBody
            course={course}
            lesson={current}
            courseTitle={meta.title}
          />

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <LessonCompleteButton course={course} lesson={current.slug} />
            <Button variant="outline" size="sm" asChild>
              <Link href="/animations">
                <PlayCircle className="h-4 w-4" />
                Watch animation
              </Link>
            </Button>
          </div>

          <nav className="mt-6 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <PrevNext course={course} lesson={prev} dir="prev" />
            ) : (
              <span />
            )}
            {next ? (
              <PrevNext course={course} lesson={next} dir="next" />
            ) : (
              <span />
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}

function PrevNext({
  course,
  lesson,
  dir,
}: {
  course: string;
  lesson: Lesson;
  dir: "prev" | "next";
}) {
  return (
    <Link
      href={`/learn/${course}/${lesson.slug}`}
      className={`flex items-center gap-3 rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-primary/50 ${
        dir === "next" ? "sm:text-right" : ""
      }`}
    >
      {dir === "prev" && (
        <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground" />
      )}
      <span className={`min-w-0 flex-1 ${dir === "next" ? "order-first" : ""}`}>
        <span className="block text-xs text-muted-foreground">
          {dir === "prev" ? "Previous" : "Next"}
        </span>
        <span className="block truncate text-sm font-medium">
          {lesson.title}
        </span>
      </span>
      {dir === "next" && (
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
      )}
    </Link>
  );
}

// Renders authored content when available, else a type-aware scaffold.
function LessonBody({
  course,
  lesson,
  courseTitle,
}: {
  course: string;
  lesson: Lesson;
  courseTitle: string;
}) {
  const content = getLessonContent(course, lesson.slug);
  if (content) {
    return <LessonContentView blocks={content.blocks} />;
  }

  if (lesson.type === "problem") {
    return (
      <div className="prose-lesson mt-6 space-y-6">
        <section>
          <h2>Problem</h2>
          <p>
            This is the <strong>{lesson.title}</strong> problem, a{" "}
            {lesson.difficulty?.toLowerCase()} exercise from the {courseTitle}{" "}
            track. Read the statement carefully and identify the inputs,
            outputs, and constraints before coding.
          </p>
        </section>
        <section>
          <h2>Intuition</h2>
          <p>
            Start with the brute-force idea, then look for redundant work you
            can eliminate. Ask which data structure gives the lookups or
            ordering you need in the fewest operations.
          </p>
        </section>
        <section>
          <h2>Approach</h2>
          <ol>
            <li>Clarify constraints and edge cases.</li>
            <li>Choose a pattern that fits the structure of the input.</li>
            <li>Write the core loop and handle boundaries.</li>
            <li>Trace a small example to verify correctness.</li>
          </ol>
        </section>
        <section>
          <h2>Complexity</h2>
          <p>
            Aim to state the time and space complexity of your final solution
            and justify why it is optimal for the given constraints.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="prose-lesson mt-6 space-y-6">
      <section>
        <h2>Overview</h2>
        <p>
          In this lesson we cover <strong>{lesson.title}</strong> as part of the{" "}
          {courseTitle} roadmap. You&apos;ll build the mental model first, then
          see how it applies to interview problems.
        </p>
      </section>
      <section>
        <h2>Key ideas</h2>
        <ul>
          <li>The core definition and when to reach for it.</li>
          <li>How it behaves as input scales.</li>
          <li>Common pitfalls and how to avoid them.</li>
        </ul>
      </section>
      <section>
        <h2>Why it matters</h2>
        <p>
          Understanding this concept unlocks a family of related problems. Pair
          this reading with the animated visualizer and the practice set that
          follows.
        </p>
      </section>
    </div>
  );
}
