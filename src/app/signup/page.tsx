"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Code2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PERKS = [
  "Access core roadmaps & 1,100+ animations",
  "Track progress and bookmark problems",
  "Join thousands of engineers preparing smarter",
];

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            C
          </span>
          CodePath
        </Link>
        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          Create your free account
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Start learning in less than a minute.
        </p>
      </div>

      <Card className="p-6">
        <ul className="mb-5 space-y-2">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {perk}
            </li>
          ))}
        </ul>

        <div className="grid gap-2">
          <Button variant="outline" className="w-full" type="button">
            <Code2 className="h-4 w-4" /> Sign up with GitHub
          </Button>
          <Button variant="outline" className="w-full" type="button">
            <Mail className="h-4 w-4" /> Sign up with Google
          </Button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" placeholder="Ada Lovelace" required />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" type="password" placeholder="At least 8 characters" required />
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
          {submitted && (
            <p className="rounded-md bg-secondary px-3 py-2 text-center text-xs text-muted-foreground">
              This is a demo — account creation is not wired up.
            </p>
          )}
        </form>
      </Card>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Log in
        </Link>
      </p>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        By signing up you agree to our{" "}
        <Link href="/terms" className="hover:underline">Terms</Link> and{" "}
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
