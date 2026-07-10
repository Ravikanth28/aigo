"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/icon";
import { COURSE_GROUPS, coursesByGroup } from "@/lib/courses";

export function CoursesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent outline-none data-[state=open]:text-foreground">
        Courses
        <ChevronDown className="h-3.5 w-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[min(90vw,720px)] p-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {COURSE_GROUPS.map((group) => (
            <div key={group}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group}
              </p>
              <ul className="space-y-0.5">
                {coursesByGroup(group).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/learn/${c.slug}/course-roadmap`}
                      className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      <Icon name={c.icon} className={`h-4 w-4 ${c.accent}`} />
                      <span className="truncate">{c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-3">
          <Link href="/courses" className="text-sm font-medium text-primary hover:underline">
            View all courses →
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
