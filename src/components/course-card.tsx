import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CourseMeta } from "@/lib/courses";

export function CourseCard({ course }: { course: CourseMeta }) {
  return (
    <Link href={`/learn/${course.slug}/course-roadmap`} className="group">
      <Card className="h-full p-5 transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-start justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
            <Icon name={course.icon} className={`h-5 w-5 ${course.accent}`} />
          </span>
          {course.premium && <Badge variant="medium">Premium</Badge>}
        </div>
        <h3 className="mt-4 font-semibold leading-tight group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{course.blurb}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {course.chapters} chapters
          </span>
          <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-primary" />
        </div>
      </Card>
    </Link>
  );
}
