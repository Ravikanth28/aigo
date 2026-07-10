import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ANIMATIONS } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Algorithm Animations",
  description: "Step through algorithms visually, one frame at a time.",
};

export default function AnimationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Algorithm Animations
        </h1>
        <p className="mt-3 text-muted-foreground">
          Watch how algorithms actually work. Play, pause, and step through each
          operation to build real intuition.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ANIMATIONS.map((anim) => (
          <Link key={anim.slug} href={`/animations/${anim.slug}`} className="group">
            <Card className="h-full p-5 transition-all hover:border-primary/50 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
                  <Icon name={anim.icon} className="h-4.5 w-4.5 text-primary" />
                </span>
                <Badge variant="secondary">{anim.category}</Badge>
              </div>
              <h2 className="mt-3 font-semibold group-hover:text-primary">
                {anim.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {anim.blurb}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
