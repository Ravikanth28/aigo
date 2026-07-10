import { FileText, Code2, PlayCircle, HelpCircle, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Difficulty, LessonType } from "@/lib/roadmaps";

const TYPE_ICON: Record<LessonType, typeof FileText> = {
  article: FileText,
  problem: Code2,
  video: PlayCircle,
  quiz: HelpCircle,
};

export function LessonTypeIcon({
  type,
  className,
}: {
  type: LessonType;
  className?: string;
}) {
  const I = TYPE_ICON[type];
  return <I className={className ?? "h-4 w-4"} />;
}

const DIFF_VARIANT: Record<Difficulty, "easy" | "medium" | "hard"> = {
  Easy: "easy",
  Medium: "medium",
  Hard: "hard",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <Badge variant={DIFF_VARIANT[difficulty]}>{difficulty}</Badge>;
}

export function PremiumLock() {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs text-amber-400"
      title="Premium lesson"
    >
      <Lock className="h-3 w-3" />
    </span>
  );
}
