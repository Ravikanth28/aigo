// Course catalog. Original data modeled after common interview-prep curricula.
// Content (chapters) is authored by us — this is structure/metadata only.

export type CourseGroup =
  | "Interview Prep"
  | "AI / ML"
  | "Languages"
  | "Dev Tools";

export interface CourseMeta {
  slug: string;
  title: string;
  group: CourseGroup;
  blurb: string;
  chapters: number;
  icon: string; // lucide icon name
  accent: string; // tailwind text color class
  premium?: boolean;
  featured?: boolean;
}

export const COURSES: CourseMeta[] = [
  // Interview Prep
  {
    slug: "dsa",
    title: "DSA for Interviews",
    group: "Interview Prep",
    blurb: "Master data structures & algorithms with a structured roadmap, patterns and 600+ problems.",
    chapters: 128,
    icon: "Binary",
    accent: "text-emerald-400",
    featured: true,
  },
  {
    slug: "system-design",
    title: "System Design Interviews",
    group: "Interview Prep",
    blurb: "Design scalable systems: caching, sharding, queues, consistency, and real case studies.",
    chapters: 113,
    icon: "Network",
    accent: "text-sky-400",
    featured: true,
  },
  {
    slug: "low-level-design",
    title: "Low Level Design",
    group: "Interview Prep",
    blurb: "OOP, SOLID, design patterns, and machine-coding round problems with clean solutions.",
    chapters: 74,
    icon: "Boxes",
    accent: "text-violet-400",
    featured: true,
  },
  {
    slug: "behavioral",
    title: "Behavioral Interviews",
    group: "Interview Prep",
    blurb: "STAR stories, leadership principles, and frameworks to nail the behavioral round.",
    chapters: 32,
    icon: "MessagesSquare",
    accent: "text-amber-400",
  },
  {
    slug: "dsa-patterns",
    title: "20 Coding Patterns",
    group: "Interview Prep",
    blurb: "The essential patterns—two pointers, sliding window, BFS/DFS—that unlock most problems.",
    chapters: 20,
    icon: "Shapes",
    accent: "text-rose-400",
    featured: true,
  },
  {
    slug: "sql",
    title: "SQL for Interviews",
    group: "Interview Prep",
    blurb: "Joins, window functions, and query optimization with hands-on interview questions.",
    chapters: 46,
    icon: "Database",
    accent: "text-orange-400",
  },
  {
    slug: "concurrency",
    title: "Concurrency & Multithreading",
    group: "Interview Prep",
    blurb: "Threads, locks, deadlocks, and lock-free structures explained with visualizers.",
    chapters: 37,
    icon: "GitFork",
    accent: "text-teal-400",
  },
  {
    slug: "oop",
    title: "Object Oriented Programming",
    group: "Interview Prep",
    blurb: "Encapsulation, inheritance, polymorphism, and abstraction the interview way.",
    chapters: 28,
    icon: "Component",
    accent: "text-indigo-400",
  },
  {
    slug: "cs-fundamentals",
    title: "CS Fundamentals",
    group: "Interview Prep",
    blurb: "Operating systems, networks, and DBMS essentials condensed for interviews.",
    chapters: 58,
    icon: "Cpu",
    accent: "text-cyan-400",
  },
  // AI / ML
  {
    slug: "machine-learning",
    title: "Machine Learning",
    group: "AI / ML",
    blurb: "From regression to ensembles—models, evaluation, and the full ML workflow.",
    chapters: 95,
    icon: "BrainCircuit",
    accent: "text-fuchsia-400",
    featured: true,
  },
  {
    slug: "deep-learning",
    title: "Deep Learning",
    group: "AI / ML",
    blurb: "Neural networks, CNNs, RNNs, and transformers with animated intuition.",
    chapters: 64,
    icon: "Waypoints",
    accent: "text-pink-400",
  },
  // Languages
  {
    slug: "python",
    title: "Python",
    group: "Languages",
    blurb: "Idiomatic Python for interviews: data model, stdlib, and gotchas.",
    chapters: 52,
    icon: "FileCode2",
    accent: "text-yellow-400",
  },
  {
    slug: "java",
    title: "Java",
    group: "Languages",
    blurb: "Collections, generics, JVM internals, and interview-grade Java.",
    chapters: 60,
    icon: "Coffee",
    accent: "text-red-400",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    group: "Languages",
    blurb: "Closures, event loop, async, and the tricky parts frequently asked.",
    chapters: 48,
    icon: "Braces",
    accent: "text-amber-300",
  },
  {
    slug: "cpp",
    title: "C++",
    group: "Languages",
    blurb: "STL, memory model, and performance-oriented C++ for competitive coding.",
    chapters: 44,
    icon: "Terminal",
    accent: "text-blue-400",
  },
  {
    slug: "go",
    title: "Go",
    group: "Languages",
    blurb: "Goroutines, channels, and idiomatic Go for backend interviews.",
    chapters: 36,
    icon: "Rabbit",
    accent: "text-teal-300",
  },
  // Dev Tools
  {
    slug: "git",
    title: "Git & GitHub",
    group: "Dev Tools",
    blurb: "Branching, rebasing, and collaboration workflows every engineer needs.",
    chapters: 24,
    icon: "GitBranch",
    accent: "text-orange-300",
  },
];

export const COURSE_GROUPS: CourseGroup[] = [
  "Interview Prep",
  "AI / ML",
  "Languages",
  "Dev Tools",
];

export function getCourse(slug: string): CourseMeta | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function coursesByGroup(group: CourseGroup): CourseMeta[] {
  return COURSES.filter((c) => c.group === group);
}

export function featuredCourses(): CourseMeta[] {
  return COURSES.filter((c) => c.featured);
}
