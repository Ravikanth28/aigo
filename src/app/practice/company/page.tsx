import type { Metadata } from "next";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { COMPANIES, problemsByCompany } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Company-wise Practice",
  description: "Coding problems asked at top tech companies.",
};

export default function CompanyIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Company-wise Practice
        </h1>
        <p className="mt-3 text-muted-foreground">
          Focus your prep on the problems most frequently asked at the companies
          you are targeting.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPANIES.map((company) => {
          const count = problemsByCompany(company.slug).length;
          return (
            <Link
              key={company.slug}
              href={`/practice/company/${company.slug}`}
              className="group"
            >
              <Card className="flex h-full items-center gap-3 p-5 transition-all hover:border-primary/50 hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                  <Building2 className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h2 className="font-semibold group-hover:text-primary">
                    {company.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {count} problems
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
