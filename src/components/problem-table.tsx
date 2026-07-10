import Link from "next/link";
import { DifficultyBadge, PremiumLock } from "@/components/lesson-meta";
import type { Problem } from "@/lib/practice";

export function ProblemTable({ problems }: { problems: Problem[] }) {
  if (problems.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        No problems here yet.
      </p>
    );
  }
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-card/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">Problem</th>
            <th className="px-4 py-3 font-medium">Difficulty</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {problems.map((p, i) => (
            <tr key={p.slug} className="transition-colors hover:bg-accent/40">
              <td className="px-4 py-3 tabular-nums text-muted-foreground">
                {i + 1}
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/learn/dsa/${p.slug}`}
                  className="flex items-center gap-2 font-medium hover:text-primary"
                >
                  {p.title}
                  {p.premium && <PremiumLock />}
                </Link>
              </td>
              <td className="px-4 py-3">
                <DifficultyBadge difficulty={p.difficulty} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
