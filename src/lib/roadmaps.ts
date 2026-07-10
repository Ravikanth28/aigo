// Roadmap content model. Each course maps to an ordered set of sections,
// and each section holds ordered lessons. Content authored by us.

export type LessonType = "article" | "problem" | "video" | "quiz";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Lesson {
  slug: string;
  title: string;
  type: LessonType;
  difficulty?: Difficulty;
  premium?: boolean;
  minutes?: number;
}

export interface RoadmapSection {
  slug: string;
  title: string;
  summary?: string;
  lessons: Lesson[];
}

export interface Roadmap {
  course: string; // course slug
  sections: RoadmapSection[];
}

function a(slug: string, title: string, minutes = 8): Lesson {
  return { slug, title, type: "article", minutes };
}
function p(slug: string, title: string, difficulty: Difficulty, premium = false): Lesson {
  return { slug, title, type: "problem", difficulty, premium };
}

// ---------------------------------------------------------------------------
// DSA roadmap — the flagship. Modeled on a standard interview curriculum.
// ---------------------------------------------------------------------------
const DSA: Roadmap = {
  course: "dsa",
  sections: [
    {
      slug: "getting-started",
      title: "Getting Started",
      summary: "How to use this roadmap, complexity analysis, and a study plan.",
      lessons: [
        a("how-to-use-this-roadmap", "How to Use This Roadmap", 5),
        a("big-o-notation", "Big-O Notation & Time Complexity", 12),
        a("space-complexity", "Space Complexity", 8),
        a("how-to-approach-a-problem", "How to Approach a Coding Problem", 10),
      ],
    },
    {
      slug: "arrays-strings",
      title: "Arrays & Strings",
      summary: "The most common interview building blocks.",
      lessons: [
        a("arrays-fundamentals", "Arrays Fundamentals", 10),
        a("dynamic-arrays", "Dynamic Arrays", 8),
        a("strings", "Strings & String Builders", 9),
        p("two-sum", "Two Sum", "Easy"),
        p("best-time-to-buy-sell-stock", "Best Time to Buy and Sell Stock", "Easy"),
        p("group-anagrams", "Group Anagrams", "Medium"),
        p("product-of-array-except-self", "Product of Array Except Self", "Medium"),
      ],
    },
    {
      slug: "hashing",
      title: "Hashing",
      summary: "Hash maps and sets for O(1) lookups.",
      lessons: [
        a("hash-tables", "How Hash Tables Work", 12),
        a("collision-resolution", "Collision Resolution", 9),
        p("contains-duplicate", "Contains Duplicate", "Easy"),
        p("valid-anagram", "Valid Anagram", "Easy"),
        p("longest-consecutive-sequence", "Longest Consecutive Sequence", "Medium"),
      ],
    },
    {
      slug: "two-pointers",
      title: "Two Pointers",
      lessons: [
        a("two-pointers-pattern", "The Two Pointers Pattern", 10),
        p("valid-palindrome", "Valid Palindrome", "Easy"),
        p("two-sum-ii", "Two Sum II (Sorted)", "Medium"),
        p("3sum", "3Sum", "Medium"),
        p("container-with-most-water", "Container With Most Water", "Medium"),
        p("trapping-rain-water", "Trapping Rain Water", "Hard", true),
      ],
    },
    {
      slug: "sliding-window",
      title: "Sliding Window",
      lessons: [
        a("sliding-window-pattern", "The Sliding Window Pattern", 11),
        p("best-time-buy-sell-ii", "Best Time to Buy and Sell II", "Medium"),
        p("longest-substring-without-repeat", "Longest Substring Without Repeating Characters", "Medium"),
        p("longest-repeating-char-replacement", "Longest Repeating Character Replacement", "Medium"),
        p("minimum-window-substring", "Minimum Window Substring", "Hard", true),
      ],
    },
    {
      slug: "stack",
      title: "Stack",
      lessons: [
        a("stack-fundamentals", "Stack Fundamentals", 8),
        p("valid-parentheses", "Valid Parentheses", "Easy"),
        p("min-stack", "Min Stack", "Medium"),
        p("daily-temperatures", "Daily Temperatures", "Medium"),
        p("largest-rectangle-histogram", "Largest Rectangle in Histogram", "Hard", true),
      ],
    },
    {
      slug: "binary-search",
      title: "Binary Search",
      lessons: [
        a("binary-search-explained", "Binary Search Explained", 12),
        p("binary-search", "Binary Search", "Easy"),
        p("search-2d-matrix", "Search a 2D Matrix", "Medium"),
        p("koko-eating-bananas", "Koko Eating Bananas", "Medium"),
        p("find-min-rotated-sorted", "Find Minimum in Rotated Sorted Array", "Medium"),
        p("median-two-sorted-arrays", "Median of Two Sorted Arrays", "Hard", true),
      ],
    },
    {
      slug: "linked-lists",
      title: "Linked Lists",
      lessons: [
        a("linked-list-fundamentals", "Linked List Fundamentals", 10),
        p("reverse-linked-list", "Reverse Linked List", "Easy"),
        p("merge-two-sorted-lists", "Merge Two Sorted Lists", "Easy"),
        p("linked-list-cycle", "Linked List Cycle", "Easy"),
        p("reorder-list", "Reorder List", "Medium"),
        p("lru-cache", "LRU Cache", "Medium", true),
      ],
    },
    {
      slug: "trees",
      title: "Trees",
      summary: "Binary trees, BSTs, and traversals.",
      lessons: [
        a("binary-trees", "Binary Trees & Traversals", 14),
        a("binary-search-trees", "Binary Search Trees", 11),
        p("invert-binary-tree", "Invert Binary Tree", "Easy"),
        p("max-depth-binary-tree", "Maximum Depth of Binary Tree", "Easy"),
        p("validate-bst", "Validate Binary Search Tree", "Medium"),
        p("lowest-common-ancestor", "Lowest Common Ancestor", "Medium"),
        p("serialize-deserialize-tree", "Serialize and Deserialize Binary Tree", "Hard", true),
      ],
    },
    {
      slug: "heaps",
      title: "Heaps & Priority Queues",
      lessons: [
        a("heaps-explained", "Heaps & Priority Queues", 12),
        p("kth-largest-element", "Kth Largest Element in an Array", "Medium"),
        p("top-k-frequent", "Top K Frequent Elements", "Medium"),
        p("find-median-data-stream", "Find Median from Data Stream", "Hard", true),
      ],
    },
    {
      slug: "backtracking",
      title: "Backtracking",
      lessons: [
        a("backtracking-pattern", "The Backtracking Pattern", 13),
        p("subsets", "Subsets", "Medium"),
        p("combination-sum", "Combination Sum", "Medium"),
        p("permutations", "Permutations", "Medium"),
        p("word-search", "Word Search", "Medium"),
        p("n-queens", "N-Queens", "Hard", true),
      ],
    },
    {
      slug: "graphs",
      title: "Graphs",
      summary: "BFS, DFS, topological sort, and union-find.",
      lessons: [
        a("graph-representations", "Graph Representations", 12),
        a("bfs-dfs", "BFS & DFS", 14),
        p("number-of-islands", "Number of Islands", "Medium"),
        p("clone-graph", "Clone Graph", "Medium"),
        p("course-schedule", "Course Schedule (Topo Sort)", "Medium"),
        p("word-ladder", "Word Ladder", "Hard", true),
      ],
    },
    {
      slug: "dynamic-programming",
      title: "Dynamic Programming",
      summary: "Memoization, tabulation, and classic DP patterns.",
      lessons: [
        a("intro-to-dp", "Introduction to Dynamic Programming", 15),
        a("1d-dp", "1D DP Patterns", 12),
        p("climbing-stairs", "Climbing Stairs", "Easy"),
        p("house-robber", "House Robber", "Medium"),
        p("coin-change", "Coin Change", "Medium"),
        p("longest-increasing-subsequence", "Longest Increasing Subsequence", "Medium"),
        p("edit-distance", "Edit Distance", "Hard", true),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// System Design roadmap.
// ---------------------------------------------------------------------------
const SYSTEM_DESIGN: Roadmap = {
  course: "system-design",
  sections: [
    {
      slug: "foundations",
      title: "Foundations",
      lessons: [
        a("what-is-system-design", "What Is System Design?", 8),
        a("scalability", "Scalability Basics", 12),
        a("latency-throughput", "Latency vs Throughput", 7),
        a("cap-theorem", "The CAP Theorem", 10),
      ],
    },
    {
      slug: "building-blocks",
      title: "Building Blocks",
      lessons: [
        a("load-balancing", "Load Balancing", 11),
        a("caching", "Caching Strategies", 13),
        a("cdn", "Content Delivery Networks", 8),
        a("message-queues", "Message Queues", 12),
        a("rate-limiting", "Rate Limiting", 9),
      ],
    },
    {
      slug: "databases",
      title: "Databases & Storage",
      lessons: [
        a("sql-vs-nosql", "SQL vs NoSQL", 10),
        a("indexing", "Database Indexing", 11),
        a("sharding", "Sharding & Partitioning", 13),
        a("replication", "Replication & Consistency", 12),
      ],
    },
    {
      slug: "case-studies",
      title: "Case Studies",
      summary: "End-to-end designs of well-known systems.",
      lessons: [
        a("design-url-shortener", "Design a URL Shortener", 16),
        a("design-twitter-feed", "Design a News Feed", 18),
        a("design-chat-system", "Design a Chat System", 18),
        { slug: "design-youtube", title: "Design YouTube", type: "article", minutes: 20, premium: true },
        { slug: "design-uber", title: "Design Uber", type: "article", minutes: 20, premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Coding patterns roadmap.
// ---------------------------------------------------------------------------
const PATTERNS: Roadmap = {
  course: "dsa-patterns",
  sections: [
    {
      slug: "core-patterns",
      title: "Core Patterns",
      lessons: [
        a("two-pointers", "Two Pointers", 10),
        a("sliding-window", "Sliding Window", 11),
        a("fast-slow-pointers", "Fast & Slow Pointers", 9),
        a("merge-intervals", "Merge Intervals", 10),
        a("cyclic-sort", "Cyclic Sort", 8),
      ],
    },
    {
      slug: "tree-graph-patterns",
      title: "Tree & Graph Patterns",
      lessons: [
        a("tree-bfs", "Tree BFS", 10),
        a("tree-dfs", "Tree DFS", 10),
        a("topological-sort", "Topological Sort", 12),
        a("union-find", "Union Find", 11),
      ],
    },
    {
      slug: "advanced-patterns",
      title: "Advanced Patterns",
      lessons: [
        a("two-heaps", "Two Heaps", 10),
        a("subsets", "Subsets", 9),
        a("modified-binary-search", "Modified Binary Search", 12),
        a("backtracking", "Backtracking", 13),
        a("dynamic-programming", "Dynamic Programming", 15),
      ],
    },
  ],
};

const ROADMAPS: Record<string, Roadmap> = {
  dsa: DSA,
  "system-design": SYSTEM_DESIGN,
  "dsa-patterns": PATTERNS,
};

export function getRoadmap(courseSlug: string): Roadmap | undefined {
  return ROADMAPS[courseSlug];
}

export function getLesson(
  courseSlug: string,
  lessonSlug: string
): { section: RoadmapSection; lesson: Lesson } | undefined {
  const rm = getRoadmap(courseSlug);
  if (!rm) return undefined;
  for (const section of rm.sections) {
    const lesson = section.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { section, lesson };
  }
  return undefined;
}

export function flattenLessons(rm: Roadmap): Lesson[] {
  return rm.sections.flatMap((s) => s.lessons);
}

export function roadmapStats(rm: Roadmap) {
  const lessons = flattenLessons(rm);
  return {
    sections: rm.sections.length,
    lessons: lessons.length,
    problems: lessons.filter((l) => l.type === "problem").length,
    articles: lessons.filter((l) => l.type === "article").length,
  };
}
