"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Zap, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const PERKS = [
  {
    icon: Zap,
    title: "New animations first",
    desc: "Be the first to see freshly published algorithm visualizers.",
  },
  {
    icon: BookOpen,
    title: "Deep-dive articles",
    desc: "One carefully written breakdown of a pattern or system design topic.",
  },
  {
    icon: Calendar,
    title: "Weekly, never spammy",
    desc: "A single email every Sunday. Unsubscribe anytime, one click.",
  },
];

const PAST_ISSUES = [
  { n: 42, title: "Why binary search is harder than it looks" },
  { n: 41, title: "A visual guide to the sliding window pattern" },
  { n: 40, title: "Designing a URL shortener from scratch" },
  { n: 39, title: "Heaps: the data structure interviewers love" },
];

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 mx-auto">
          <Mail className="h-7 w-7 text-primary" />
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          The CodePath newsletter
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Level up every week with one hand-picked lesson, a new animation, and
          an interview tip — read by 20,000+ engineers.
        </p>
      </header>

      <Card className="mx-auto mt-10 max-w-xl p-6 sm:p-8">
        {subscribed ? (
          <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm">
              <p className="font-medium">You&apos;re on the list!</p>
              <p className="mt-1 text-muted-foreground">
                This is a demo — no email was stored and nothing will be sent.
              </p>
            </div>
          </div>
        ) : (
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <Input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        )}
        <p className="mt-3 text-center text-xs text-muted-foreground">
          No spam. Unsubscribe with one click.
        </p>
      </Card>

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">
          What you&apos;ll get
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PERKS.map((p) => (
            <Card key={p.title} className="p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Recent issues</h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border">
          {PAST_ISSUES.map((issue) => (
            <div
              key={issue.n}
              className="flex items-center gap-4 px-5 py-4 text-sm"
            >
              <span className="tabular-nums text-muted-foreground">
                #{issue.n}
              </span>
              <span className="font-medium">{issue.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
