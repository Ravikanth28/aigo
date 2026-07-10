"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CHANNELS = [
  {
    icon: Mail,
    title: "Email us",
    desc: "For support, partnerships, or press.",
    value: "hello@codepath.dev",
  },
  {
    icon: MessageSquare,
    title: "Community",
    desc: "Ask questions and share progress with other learners.",
    value: "Join the Discord",
  },
  {
    icon: MapPin,
    title: "Where we are",
    desc: "A fully remote team across 6 time zones.",
    value: "Remote · Worldwide",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Questions, feedback, or ideas? We read everything and usually reply
          within a couple of days.
        </p>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((c) => (
          <Card key={c.title} className="p-5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
              <c.icon className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            <p className="mt-2 text-sm font-medium text-primary">{c.value}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Send a message</h2>
        {submitted ? (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm">
              <p className="font-medium">Thanks for reaching out!</p>
              <p className="mt-1 text-muted-foreground">
                This is a demo — the form isn&apos;t wired up to a backend, so
                nothing was actually sent.
              </p>
            </div>
          </div>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" required placeholder="Ada Lovelace" className="mt-1.5" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" required placeholder="How can we help?" className="mt-1.5" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us what's on your mind…"
                className="mt-1.5 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit">
              Send message <Send className="h-4 w-4" />
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
