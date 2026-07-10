import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "CodePath helps engineers master DSA, System Design, and interviews with structured roadmaps and animated visualizers.",
};

const VALUES = [
  {
    icon: Target,
    title: "Structure over chaos",
    desc: "We turn scattered resources into a single, ordered path so you always know what to learn next.",
  },
  {
    icon: Sparkles,
    title: "Intuition first",
    desc: "Animated visualizers make abstract algorithms and systems click before you memorize anything.",
  },
  {
    icon: Users,
    title: "Built for everyone",
    desc: "From first-time job seekers to senior engineers switching domains — the roadmap scales with you.",
  },
  {
    icon: Heart,
    title: "Original content",
    desc: "Every chapter, animation, and problem walkthrough is written and designed by our team.",
  },
];

const STATS = [
  { value: "17+", label: "Courses" },
  { value: "770+", label: "Chapters" },
  { value: "1,100+", label: "Animations" },
  { value: "600+", label: "Problems" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Learning that actually sticks
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          CodePath started with a simple frustration: interview prep is a maze of
          disconnected videos, blog posts, and problem lists. We built the
          structured, visual system we wish we&apos;d had.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/40 px-6 py-8 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">What we believe</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <Card key={v.title} className="p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                <v.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Join the journey</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Start with a free account and follow your first roadmap today.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/signup">
              Create free account <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
