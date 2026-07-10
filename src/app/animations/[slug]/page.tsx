import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AnimationPlayer } from "@/components/animation-player";
import { Badge } from "@/components/ui/badge";
import { ANIMATIONS, getAnimation } from "@/lib/animations";

export function generateStaticParams() {
  return ANIMATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const anim = getAnimation(slug);
  if (!anim) return { title: "Animation" };
  return { title: anim.title, description: anim.blurb };
}

export default async function AnimationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const anim = getAnimation(slug);
  if (!anim) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/animations"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All animations
      </Link>

      <header className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {anim.title}
          </h1>
          <p className="mt-1 text-muted-foreground">{anim.blurb}</p>
        </div>
        <Badge variant="secondary">{anim.category}</Badge>
      </header>

      <div className="mt-8">
        <AnimationPlayer animation={anim} />
      </div>
    </div>
  );
}
