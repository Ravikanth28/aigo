"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress-store";

export function LessonCompleteButton({
  course,
  lesson,
}: {
  course: string;
  lesson: string;
}) {
  const done = useProgress((s) => !!s.completed[`${course}/${lesson}`]);
  const toggle = useProgress((s) => s.toggle);

  return (
    <Button
      variant={done ? "secondary" : "default"}
      onClick={() => toggle(course, lesson)}
    >
      <Check className="h-4 w-4" />
      {done ? "Completed" : "Mark as complete"}
    </Button>
  );
}
