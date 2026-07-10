import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Route,
  Code2,
  Building2,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { featuredCourses } from "@/lib/courses";

const FEATURES = [
  {
    icon: Route,
    title: "Structured Roadmaps",
    desc: "Follow a clear, ordered path from fundamentals to advanced topics—no more guessing what to learn next.",
  },
  {
    icon: PlayCircle,
    title: "Animated Visualizers",
    desc: "1,100+ step-by-step animations make algorithms, system design, and ML click intuitively.",
  },
  {
    icon: Code2,
    title: "Curated Practice",
    desc: "Hand-picked problem sets (75 / 150 / 300 / 600) plus pattern-based practice.",
  },
  {
    icon: Building2,
    title: "Company-wise Prep",
    desc: "Practice the exact problems asked at Google, Amazon, Meta, and 40+ companies.",
  },
];

const STATS = [
  { value: "17+", label: "Courses" },
  { value: "770+", label: "Chapters" },
  { value: "1,100+", label: "Animations" },
  { value: "600+", label: "Practice problems" },
];

export default function HomePage() {
  const featured = featuredCourses();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(600px circle at 50% -10%, hsl(142.1 70.6% 45.3% / 0.18), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center">
          <Link
            href="/animations"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <Zap className="h-3.5 w-3.5 text-primary" />
            New: AI/ML & System Design visualizers
            <ArrowRight className="h-3 w-3" />
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Master coding interviews
            <span className="block text-primary">the structured way</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Roadmaps, animated visualizers, and curated practice for Data
            Structures & Algorithms, System Design, and more. Learn faster with a
            clear path from beginner to interview-ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/learn/dsa/course-roadmap">
                Start the DSA roadmap <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/animations">
                <PlayCircle className="h-4 w-4" /> Watch animations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to get hired</h2>
          <p className="mt-3 text-muted-foreground">
            A complete system that combines theory, intuition, and practice.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured courses</h2>
            <p className="mt-3 text-muted-foreground">Start with our most popular tracks.</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/courses">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight">Ready to level up?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Join thousands of engineers preparing smarter. Track progress, bookmark
            problems, and never lose your place.
          </p>
          <ul className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Progress tracking", "Notes & bookmarks", "Company-wise sets", "Interactive visualizers"].map(
              (i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {i}
                </li>
              )
            )}
          </ul>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/signup">
              Create free account <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
