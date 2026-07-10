// Practice catalog: DSA patterns and company-wise problem sets.
import type { Difficulty } from "@/lib/roadmaps";

export interface Problem {
  slug: string;
  title: string;
  difficulty: Difficulty;
  pattern: string; // pattern slug
  companies: string[]; // company slugs
  premium?: boolean;
}

export interface Pattern {
  slug: string;
  title: string;
  blurb: string;
  icon: string;
}

export interface Company {
  slug: string;
  name: string;
}

export const PATTERNS: Pattern[] = [
  { slug: "two-pointers", title: "Two Pointers", blurb: "Converging or parallel pointers over a sequence.", icon: "MoveHorizontal" },
  { slug: "sliding-window", title: "Sliding Window", blurb: "Maintain a window to track a running property.", icon: "RectangleHorizontal" },
  { slug: "binary-search", title: "Binary Search", blurb: "Halve the search space each step.", icon: "Search" },
  { slug: "bfs", title: "Breadth-First Search", blurb: "Level-order exploration of trees and graphs.", icon: "Waypoints" },
  { slug: "dfs", title: "Depth-First Search", blurb: "Explore as deep as possible before backtracking.", icon: "GitFork" },
  { slug: "backtracking", title: "Backtracking", blurb: "Build candidates and abandon dead ends.", icon: "Undo2" },
  { slug: "dynamic-programming", title: "Dynamic Programming", blurb: "Reuse overlapping subproblem results.", icon: "Grid3x3" },
  { slug: "heap", title: "Heap / Priority Queue", blurb: "Always access the min or max efficiently.", icon: "Triangle" },
  { slug: "greedy", title: "Greedy", blurb: "Make the locally optimal choice each step.", icon: "TrendingUp" },
  { slug: "intervals", title: "Intervals", blurb: "Sort and merge or sweep over ranges.", icon: "AlignHorizontalDistributeCenter" },
];

export const COMPANIES: Company[] = [
  { slug: "google", name: "Google" },
  { slug: "amazon", name: "Amazon" },
  { slug: "meta", name: "Meta" },
  { slug: "microsoft", name: "Microsoft" },
  { slug: "apple", name: "Apple" },
  { slug: "netflix", name: "Netflix" },
  { slug: "uber", name: "Uber" },
  { slug: "airbnb", name: "Airbnb" },
  { slug: "bloomberg", name: "Bloomberg" },
  { slug: "adobe", name: "Adobe" },
  { slug: "linkedin", name: "LinkedIn" },
  { slug: "oracle", name: "Oracle" },
  { slug: "salesforce", name: "Salesforce" },
  { slug: "nvidia", name: "Nvidia" },
  { slug: "tesla", name: "Tesla" },
  { slug: "stripe", name: "Stripe" },
];

export const PROBLEMS: Problem[] = [
  { slug: "two-sum", title: "Two Sum", difficulty: "Easy", pattern: "two-pointers", companies: ["google", "amazon", "meta", "apple"] },
  { slug: "3sum", title: "3Sum", difficulty: "Medium", pattern: "two-pointers", companies: ["amazon", "meta", "adobe"] },
  { slug: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", pattern: "two-pointers", companies: ["amazon", "bloomberg"] },
  { slug: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", pattern: "two-pointers", companies: ["meta", "microsoft"] },
  { slug: "longest-substring-without-repeat", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", pattern: "sliding-window", companies: ["amazon", "google", "adobe", "bloomberg"] },
  { slug: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", pattern: "sliding-window", companies: ["meta", "uber"], premium: true },
  { slug: "max-consecutive-ones-iii", title: "Max Consecutive Ones III", difficulty: "Medium", pattern: "sliding-window", companies: ["google", "amazon"] },
  { slug: "binary-search", title: "Binary Search", difficulty: "Easy", pattern: "binary-search", companies: ["microsoft", "apple"] },
  { slug: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", pattern: "binary-search", companies: ["google", "amazon"] },
  { slug: "median-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", pattern: "binary-search", companies: ["google", "adobe"], premium: true },
  { slug: "number-of-islands", title: "Number of Islands", difficulty: "Medium", pattern: "bfs", companies: ["amazon", "google", "meta", "microsoft", "bloomberg"] },
  { slug: "word-ladder", title: "Word Ladder", difficulty: "Hard", pattern: "bfs", companies: ["amazon", "linkedin"], premium: true },
  { slug: "rotting-oranges", title: "Rotting Oranges", difficulty: "Medium", pattern: "bfs", companies: ["amazon", "microsoft"] },
  { slug: "clone-graph", title: "Clone Graph", difficulty: "Medium", pattern: "dfs", companies: ["meta", "google", "uber"] },
  { slug: "course-schedule", title: "Course Schedule", difficulty: "Medium", pattern: "dfs", companies: ["amazon", "meta", "uber"] },
  { slug: "subsets", title: "Subsets", difficulty: "Medium", pattern: "backtracking", companies: ["amazon", "meta"] },
  { slug: "combination-sum", title: "Combination Sum", difficulty: "Medium", pattern: "backtracking", companies: ["amazon", "adobe"] },
  { slug: "n-queens", title: "N-Queens", difficulty: "Hard", pattern: "backtracking", companies: ["google"], premium: true },
  { slug: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", pattern: "dynamic-programming", companies: ["amazon", "apple", "adobe"] },
  { slug: "coin-change", title: "Coin Change", difficulty: "Medium", pattern: "dynamic-programming", companies: ["amazon", "google", "uber"] },
  { slug: "edit-distance", title: "Edit Distance", difficulty: "Hard", pattern: "dynamic-programming", companies: ["google", "microsoft"], premium: true },
  { slug: "longest-increasing-subsequence", title: "Longest Increasing Subsequence", difficulty: "Medium", pattern: "dynamic-programming", companies: ["microsoft", "salesforce"] },
  { slug: "top-k-frequent", title: "Top K Frequent Elements", difficulty: "Medium", pattern: "heap", companies: ["amazon", "meta", "adobe"] },
  { slug: "find-median-data-stream", title: "Find Median from Data Stream", difficulty: "Hard", pattern: "heap", companies: ["google", "amazon"], premium: true },
  { slug: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", pattern: "intervals", companies: ["google", "meta", "bloomberg", "salesforce"] },
  { slug: "insert-interval", title: "Insert Interval", difficulty: "Medium", pattern: "intervals", companies: ["google", "linkedin"] },
  { slug: "jump-game", title: "Jump Game", difficulty: "Medium", pattern: "greedy", companies: ["amazon", "microsoft"] },
  { slug: "gas-station", title: "Gas Station", difficulty: "Medium", pattern: "greedy", companies: ["amazon", "bloomberg"] },
];

export function getPattern(slug: string) {
  return PATTERNS.find((p) => p.slug === slug);
}
export function getCompany(slug: string) {
  return COMPANIES.find((c) => c.slug === slug);
}
export function problemsByPattern(pattern: string) {
  return PROBLEMS.filter((p) => p.pattern === pattern);
}
export function problemsByCompany(company: string) {
  return PROBLEMS.filter((p) => p.companies.includes(company));
}
export function patternCounts(pattern: string) {
  const items = problemsByPattern(pattern);
  return {
    total: items.length,
    easy: items.filter((p) => p.difficulty === "Easy").length,
    medium: items.filter((p) => p.difficulty === "Medium").length,
    hard: items.filter((p) => p.difficulty === "Hard").length,
  };
}
