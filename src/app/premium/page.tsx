import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Premium",
  description:
    "Unlock every course, premium problems, and priority features. Simple pricing, cancel anytime.",
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Everything you need to start learning.",
    cta: "Get started",
    href: "/signup",
    highlighted: false,
    features: [
      { text: "Core DSA & System Design roadmaps", included: true },
      { text: "1,100+ animated visualizers", included: true },
      { text: "Community problem sets", included: true },
      { text: "Premium case studies", included: false },
      { text: "Company-wise problem sets", included: false },
      { text: "Progress tracking & notes", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    blurb: "For serious interview preparation.",
    cta: "Go Pro",
    href: "/signup",
    highlighted: true,
    features: [
      { text: "Everything in Free", included: true },
      { text: "All 17+ premium courses", included: true },
      { text: "Premium problems & case studies", included: true },
      { text: "Company-wise problem sets", included: true },
      { text: "Progress tracking & bookmarks", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    name: "Teams",
    price: "$9",
    period: "per seat / month",
    blurb: "For bootcamps and engineering teams.",
    cta: "Contact sales",
    href: "/contact",
    highlighted: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Centralized billing", included: true },
      { text: "Team progress dashboard", included: true },
      { text: "Assignment & cohort tools", included: true },
      { text: "SSO (SAML / OIDC)", included: true },
      { text: "Dedicated success manager", included: true },
    ],
  },
];

const FAQ = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pro is billed monthly and you can cancel with one click — you keep access until the end of your billing period.",
  },
  {
    q: "Is there a student discount?",
    a: "We offer 40% off Pro for verified students. Reach out via the contact page with your student email.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not satisfied within the first 7 days, contact us for a full, no-questions-asked refund.",
  },
];

export default function PremiumPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" /> Premium
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Invest in your next offer
        </h1>
        <p className="mt-3 text-muted-foreground">
          Simple, transparent pricing. Start free, upgrade when you&apos;re
          ready. Cancel anytime.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={
              "relative flex flex-col p-6 " +
              (plan.highlighted
                ? "border-primary/50 shadow-lg ring-1 ring-primary/20"
                : "")
            }
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">
                /{plan.period}
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2.5">
                  {f.included ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <span
                    className={
                      f.included
                        ? ""
                        : "text-muted-foreground/60 line-through"
                    }
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={plan.highlighted ? "default" : "outline"}
              className="mt-8 w-full"
            >
              <Link href={plan.href}>{plan.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {FAQ.map((item) => (
            <Card key={item.q} className="p-5">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
