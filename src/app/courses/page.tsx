import type { Metadata } from "next";
import { COURSE_GROUPS, coursesByGroup, GROUP_SUBTITLES } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse structured courses on DSA, System Design, ML, and more — each with roadmaps, animated visualizers, and curated practice.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All Courses
        </h1>
        <p className="mt-3 text-muted-foreground">
          Structured, roadmap-driven courses built for interview prep and deep
          understanding. Follow a path, watch it animate, then practice.
        </p>
      </header>

      <div className="mt-12 space-y-14">
        {COURSE_GROUPS.map((group) => {
          const courses = coursesByGroup(group);
          if (courses.length === 0) return null;
          return (
            <section key={group}>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{group}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {GROUP_SUBTITLES[group]}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {courses.length} course{courses.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
