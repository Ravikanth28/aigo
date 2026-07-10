import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2 } from "lucide-react";
import { ProblemTable } from "@/components/problem-table";
import { COMPANIES, getCompany, problemsByCompany } from "@/lib/practice";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ company: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> {
  const { company } = await params;
  const c = getCompany(company);
  if (!c) return { title: "Company" };
  return {
    title: `${c.name} Interview Problems`,
    description: `Coding problems frequently asked at ${c.name}.`,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const c = getCompany(company);
  if (!c) notFound();

  const problems = problemsByCompany(c.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/practice/company"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All companies
      </Link>

      <header className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent">
          <Building2 className="h-5 w-5 text-primary" />
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {c.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            {problems.length} frequently asked problems
          </p>
        </div>
      </header>

      <div className="mt-8">
        <ProblemTable problems={problems} />
      </div>
    </div>
  );
}
