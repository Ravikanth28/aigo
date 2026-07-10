// Course catalog. Structure/metadata mirrors a common interview-prep curriculum.
// All lesson content is authored by us — this file is structure/metadata only.

export type CourseGroup =
  | "Interview Preparation"
  | "AI/ML"
  | "Programming Languages"
  | "Developer Tools";

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
  // Interview Preparation
  {
    slug: "dsa",
    title: "Data Structures and Algorithms",
    group: "Interview Preparation",
    blurb: "A structured roadmap through data structures, algorithms, and coding patterns for interviews.",
    chapters: 128,
    icon: "Binary",
    accent: "text-emerald-400",
    featured: true,
  },
  {
    slug: "system-design-fundamentals",
    title: "System Design Fundamentals",
    group: "Interview Preparation",
    blurb: "Core building blocks of scalable systems — caching, load balancing, databases, and messaging.",
    chapters: 42,
    icon: "Layers",
    accent: "text-cyan-400",
  },
  {
    slug: "system-design",
    title: "System Design Interviews",
    group: "Interview Preparation",
    blurb: "Design large-scale systems step by step with real case studies and interview frameworks.",
    chapters: 113,
    icon: "Network",
    accent: "text-sky-400",
    featured: true,
  },
  {
    slug: "low-level-design",
    title: "Low Level Design",
    group: "Interview Preparation",
    blurb: "Object-oriented design, SOLID principles, and machine-coding round problems with clean solutions.",
    chapters: 74,
    icon: "Boxes",
    accent: "text-violet-400",
    featured: true,
  },
  {
    slug: "concurrency",
    title: "Concurrency Interview",
    group: "Interview Preparation",
    blurb: "Threads, locks, deadlocks, and lock-free structures explained with visualizers.",
    chapters: 37,
    icon: "GitFork",
    accent: "text-teal-400",
  },
  {
    slug: "microservices",
    title: "Microservices Interview",
    group: "Interview Preparation",
    blurb: "Service boundaries, communication, resilience, and deployment patterns for distributed systems.",
    chapters: 38,
    icon: "Blocks",
    accent: "text-indigo-400",
  },
  {
    slug: "sql",
    title: "SQL Interview",
    group: "Interview Preparation",
    blurb: "Joins, window functions, and query optimization with hands-on interview questions.",
    chapters: 46,
    icon: "Database",
    accent: "text-orange-400",
  },
  {
    slug: "behavioral",
    title: "Behavioral Interviews",
    group: "Interview Preparation",
    blurb: "STAR stories, leadership principles, and frameworks to nail the behavioral round.",
    chapters: 32,
    icon: "MessagesSquare",
    accent: "text-amber-400",
  },
  {
    slug: "job-search",
    title: "Job Search",
    group: "Interview Preparation",
    blurb: "Resumes, referrals, networking, and negotiation — a practical guide to landing the offer.",
    chapters: 26,
    icon: "Briefcase",
    accent: "text-lime-400",
  },
  // AI/ML
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    group: "AI/ML",
    blurb: "Build applications with LLMs — prompting, RAG, embeddings, agents, and evaluation.",
    chapters: 58,
    icon: "BrainCircuit",
    accent: "text-fuchsia-400",
    featured: true,
  },
  {
    slug: "ml-system-design",
    title: "ML System Design",
    group: "AI/ML",
    blurb: "Design end-to-end ML systems: data pipelines, feature stores, training, serving, and monitoring.",
    chapters: 48,
    icon: "Waypoints",
    accent: "text-pink-400",
  },
  // Programming Languages
  {
    slug: "java",
    title: "Java",
    group: "Programming Languages",
    blurb: "Collections, generics, JVM internals, and interview-grade Java from basics to advanced.",
    chapters: 60,
    icon: "Coffee",
    accent: "text-red-400",
  },
  {
    slug: "python",
    title: "Python",
    group: "Programming Languages",
    blurb: "Idiomatic Python: the data model, standard library, and the gotchas interviewers love.",
    chapters: 52,
    icon: "FileCode2",
    accent: "text-yellow-400",
  },
  {
    slug: "cpp",
    title: "C++",
    group: "Programming Languages",
    blurb: "STL, memory model, and performance-oriented C++ for competitive coding and interviews.",
    chapters: 44,
    icon: "Terminal",
    accent: "text-blue-400",
  },
  {
    slug: "csharp",
    title: "C#",
    group: "Programming Languages",
    blurb: "Modern C# — LINQ, async/await, the type system, and .NET fundamentals.",
    chapters: 40,
    icon: "Hash",
    accent: "text-purple-400",
  },
  {
    slug: "go",
    title: "Go",
    group: "Programming Languages",
    blurb: "Goroutines, channels, and idiomatic Go for backend and systems interviews.",
    chapters: 36,
    icon: "Rabbit",
    accent: "text-teal-300",
  },
  // Developer Tools
  {
    slug: "git",
    title: "Git",
    group: "Developer Tools",
    blurb: "Branching, rebasing, and collaboration workflows every engineer needs to know.",
    chapters: 24,
    icon: "GitBranch",
    accent: "text-orange-300",
  },
];

export const COURSE_GROUPS: CourseGroup[] = [
  "Interview Preparation",
  "AI/ML",
  "Programming Languages",
  "Developer Tools",
];

export const GROUP_SUBTITLES: Record<CourseGroup, string> = {
  "Interview Preparation": "Prepare for technical interviews at top tech companies.",
  "AI/ML": "Build and deploy intelligent systems using modern AI and machine learning techniques.",
  "Programming Languages": "Master popular programming languages from basics to advanced.",
  "Developer Tools": "Essential tools every developer should know.",
};

export function getCourse(slug: string): CourseMeta | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function coursesByGroup(group: CourseGroup): CourseMeta[] {
  return COURSES.filter((c) => c.group === group);
}

export function featuredCourses(): CourseMeta[] {
  return COURSES.filter((c) => c.featured);
}
