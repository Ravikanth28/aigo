import Link from "next/link";
import { Code2, Send, Rss, Globe } from "lucide-react";

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { href: "/courses", label: "All Courses" },
      { href: "/learn/dsa/course-roadmap", label: "DSA Roadmap" },
      { href: "/learn/system-design/course-roadmap", label: "System Design" },
      { href: "/roadmaps", label: "Roadmaps" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: "/practice/dsa-patterns", label: "DSA Patterns" },
      { href: "/practice/company", label: "Company-wise" },
      { href: "/animations", label: "Animations" },
      { href: "/premium", label: "Premium" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/newsletter", label: "Newsletter" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-sm">
                C
              </span>
              CodePath
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Master DSA, System Design & interviews with roadmaps, animated
              visualizers, and curated practice.
            </p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <Link href="#" aria-label="GitHub" className="hover:text-foreground"><Code2 className="h-4 w-4" /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-foreground"><Send className="h-4 w-4" /></Link>
              <Link href="#" aria-label="Blog" className="hover:text-foreground"><Rss className="h-4 w-4" /></Link>
              <Link href="#" aria-label="Website" className="hover:text-foreground"><Globe className="h-4 w-4" /></Link>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} CodePath. Built for learning. All course content is original.
        </div>
      </div>
    </footer>
  );
}
