// Roadmap content model. Each course maps to an ordered set of sections,
// and each section holds ordered lessons. Content authored by us.
// The DSA roadmap mirrors the section organization of a standard, widely-used
// interview curriculum (concept lessons interleaved with practice problems).

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
// DSA roadmap — the flagship. 31 sections spanning fundamentals, every core
// data structure, and the algorithmic patterns that recur in interviews.
// ---------------------------------------------------------------------------
const DSA: Roadmap = {
  course: "dsa",
  sections: [
    {
      slug: "welcome",
      title: "Welcome",
      summary: "How the roadmap is organized and how to get the most from it.",
      lessons: [
        a("how-to-use-this-roadmap", "How to Use This Roadmap", 5),
        a("how-to-study-dsa", "How to Study Data Structures & Algorithms", 7),
      ],
    },
    {
      slug: "coding-interview-strategy",
      title: "Coding Interview Strategy",
      summary: "A repeatable framework for approaching any interview problem.",
      lessons: [
        a("anatomy-of-a-coding-interview", "Anatomy of a Coding Interview", 8),
        a("how-to-approach-a-problem", "A Framework for Solving Any Problem", 10),
        a("clarifying-questions", "Asking the Right Clarifying Questions", 6),
        a("communicating-your-thought-process", "Communicating Your Thought Process", 7),
        a("testing-and-edge-cases", "Testing Your Solution & Edge Cases", 8),
      ],
    },
    {
      slug: "programming-fundamentals",
      title: "Programming Fundamentals",
      summary: "The building blocks every algorithm is written on top of.",
      lessons: [
        a("variables-and-data-types", "Variables & Data Types", 7),
        a("operators-and-expressions", "Operators & Expressions", 6),
        a("conditionals", "Conditionals & Control Flow", 6),
        a("loops", "Loops & Iteration", 7),
        a("functions", "Functions & Scope", 8),
        a("references-vs-values", "References vs Values", 9),
        a("input-output-basics", "Reading Input & Formatting Output", 6),
      ],
    },
    {
      slug: "dsa-warmup",
      title: "DSA Warmup",
      summary: "Short, confidence-building problems to get you moving.",
      lessons: [
        p("fizzbuzz", "FizzBuzz", "Easy"),
        p("sum-of-digits", "Sum of Digits", "Easy"),
        p("reverse-an-integer", "Reverse an Integer", "Easy"),
        p("count-vowels", "Count the Vowels", "Easy"),
        p("factorial", "Factorial of a Number", "Easy"),
        p("power-of-two", "Power of Two", "Easy"),
        p("fibonacci-number", "Fibonacci Number", "Easy"),
        p("gcd-of-two-numbers", "GCD of Two Numbers", "Easy"),
        p("check-prime", "Check if a Number Is Prime", "Easy"),
        p("palindrome-number", "Palindrome Number", "Easy"),
        p("max-of-array", "Maximum Element in an Array", "Easy"),
        p("min-of-array", "Minimum Element in an Array", "Easy"),
        p("sum-of-array", "Sum of an Array", "Easy"),
        p("average-of-array", "Average of an Array", "Easy"),
        p("count-even-odd", "Count Even and Odd Numbers", "Easy"),
        p("swap-two-numbers", "Swap Two Numbers", "Easy"),
        p("celsius-to-fahrenheit", "Celsius to Fahrenheit", "Easy"),
        p("leap-year", "Leap Year", "Easy"),
        p("armstrong-number", "Armstrong Number", "Easy"),
        p("count-digits", "Count the Digits", "Easy"),
      ],
    },
    {
      slug: "big-o-notation",
      title: "Big O Notation",
      summary: "Measure how time and space scale with input size.",
      lessons: [
        a("big-o-notation", "Big-O Notation & Time Complexity", 12),
        a("space-complexity", "Space Complexity", 8),
        a("common-complexity-classes", "Common Complexity Classes", 9),
        a("analyzing-loops", "Analyzing Loops & Nested Loops", 8),
        a("amortized-analysis", "Amortized Analysis", 9),
        a("best-worst-average-case", "Best, Worst & Average Case", 7),
        a("recursion-complexity", "Complexity of Recursive Algorithms", 10),
        a("complexity-cheat-sheet", "The Complexity Cheat Sheet", 6),
      ],
    },
    {
      slug: "math-fundamentals",
      title: "Math Fundamentals",
      summary: "Number theory and math tricks that show up in problems.",
      lessons: [
        a("modular-arithmetic", "Modular Arithmetic", 9),
        a("prime-numbers", "Prime Numbers & Sieve of Eratosthenes", 10),
        a("gcd-lcm", "GCD, LCM & the Euclidean Algorithm", 9),
        a("fast-exponentiation", "Fast Exponentiation", 8),
        a("combinatorics-basics", "Combinatorics Basics", 10),
        a("probability-basics", "Probability Basics", 8),
        p("count-primes", "Count Primes", "Medium"),
        p("pow-x-n", "Pow(x, n)", "Medium"),
        p("sqrt-x", "Sqrt(x)", "Easy"),
        p("happy-number", "Happy Number", "Easy"),
        p("excel-sheet-column-number", "Excel Sheet Column Number", "Easy"),
        p("roman-to-integer", "Roman to Integer", "Easy"),
        p("integer-to-roman", "Integer to Roman", "Medium"),
        p("add-digits", "Add Digits", "Easy"),
        p("ugly-number", "Ugly Number", "Easy"),
        p("perfect-squares", "Perfect Squares", "Medium"),
      ],
    },
    {
      slug: "sorting-algorithms",
      title: "Sorting Algorithms",
      summary: "How the classic sorts work and when to reach for each.",
      lessons: [
        a("bubble-sort", "Bubble Sort", 8),
        a("selection-sort", "Selection Sort", 8),
        a("insertion-sort", "Insertion Sort", 8),
        a("merge-sort", "Merge Sort", 12),
        a("quick-sort", "Quick Sort", 12),
        a("heap-sort", "Heap Sort", 10),
        a("counting-sort", "Counting Sort", 9),
        a("radix-sort", "Radix Sort", 9),
        a("bucket-sort", "Bucket Sort", 8),
        a("stability-in-sorting", "Stability in Sorting", 6),
        p("sort-colors", "Sort Colors", "Medium"),
        p("merge-sorted-array", "Merge Sorted Array", "Easy"),
        p("sort-an-array", "Sort an Array", "Medium"),
        p("largest-number", "Largest Number", "Medium"),
        p("sort-list", "Sort List", "Medium"),
        p("relative-sort-array", "Relative Sort Array", "Easy"),
        p("h-index", "H-Index", "Medium"),
        p("wiggle-sort", "Wiggle Sort", "Medium", true),
      ],
    },
    {
      slug: "arrays",
      title: "Arrays",
      summary: "The most common interview building block.",
      lessons: [
        a("arrays-fundamentals", "Arrays Fundamentals", 10),
        a("dynamic-arrays", "Dynamic Arrays", 8),
        a("in-place-operations", "In-Place Array Operations", 8),
        p("two-sum", "Two Sum", "Easy"),
        p("best-time-to-buy-sell-stock", "Best Time to Buy and Sell Stock", "Easy"),
        p("remove-duplicates-sorted-array", "Remove Duplicates from Sorted Array", "Easy"),
        p("remove-element", "Remove Element", "Easy"),
        p("move-zeroes", "Move Zeroes", "Easy"),
        p("rotate-array", "Rotate Array", "Medium"),
        p("majority-element", "Majority Element", "Easy"),
        p("product-of-array-except-self", "Product of Array Except Self", "Medium"),
        p("maximum-subarray", "Maximum Subarray", "Medium"),
        p("merge-intervals-array", "Merge Intervals", "Medium"),
        p("insert-interval", "Insert Interval", "Medium"),
        p("next-permutation", "Next Permutation", "Medium"),
        p("first-missing-positive", "First Missing Positive", "Hard", true),
      ],
    },
    {
      slug: "strings",
      title: "Strings",
      summary: "String manipulation, parsing, and pattern matching.",
      lessons: [
        a("strings-fundamentals", "Strings & String Builders", 9),
        a("string-immutability", "String Immutability & Performance", 7),
        p("valid-anagram", "Valid Anagram", "Easy"),
        p("valid-palindrome", "Valid Palindrome", "Easy"),
        p("reverse-string", "Reverse String", "Easy"),
        p("longest-common-prefix", "Longest Common Prefix", "Easy"),
        p("group-anagrams", "Group Anagrams", "Medium"),
        p("longest-palindromic-substring", "Longest Palindromic Substring", "Medium"),
        p("string-to-integer-atoi", "String to Integer (atoi)", "Medium"),
        p("count-and-say", "Count and Say", "Medium"),
        p("zigzag-conversion", "Zigzag Conversion", "Medium"),
        p("encode-and-decode-strings", "Encode and Decode Strings", "Medium", true),
        p("integer-to-english-words", "Integer to English Words", "Hard", true),
      ],
    },
    {
      slug: "bit-manipulation",
      title: "Bit Manipulation",
      summary: "Think in bits to unlock elegant, fast solutions.",
      lessons: [
        a("bitwise-operators", "Bitwise Operators", 9),
        a("common-bit-tricks", "Common Bit Manipulation Tricks", 10),
        p("single-number", "Single Number", "Easy"),
        p("number-of-1-bits", "Number of 1 Bits", "Easy"),
        p("counting-bits", "Counting Bits", "Easy"),
        p("reverse-bits", "Reverse Bits", "Easy"),
        p("missing-number", "Missing Number", "Easy"),
        p("sum-of-two-integers", "Sum of Two Integers", "Medium"),
        p("bitwise-and-of-range", "Bitwise AND of Numbers Range", "Medium"),
        p("single-number-ii", "Single Number II", "Medium", true),
      ],
    },
    {
      slug: "hash-tables",
      title: "Hash Tables",
      summary: "Hash maps and sets for O(1) lookups.",
      lessons: [
        a("hash-tables", "How Hash Tables Work", 12),
        a("collision-resolution", "Collision Resolution", 9),
        a("designing-good-hash-functions", "Designing Good Hash Functions", 8),
        p("contains-duplicate", "Contains Duplicate", "Easy"),
        p("contains-duplicate-ii", "Contains Duplicate II", "Easy"),
        p("intersection-of-two-arrays", "Intersection of Two Arrays", "Easy"),
        p("two-sum-hashmap", "Two Sum (Hash Map)", "Easy"),
        p("first-unique-character", "First Unique Character in a String", "Easy"),
        p("longest-consecutive-sequence", "Longest Consecutive Sequence", "Medium"),
        p("subarray-sum-equals-k", "Subarray Sum Equals K", "Medium"),
        p("top-k-frequent-elements-hash", "Top K Frequent Elements", "Medium"),
        p("four-sum-ii", "4Sum II", "Medium", true),
      ],
    },
    {
      slug: "two-pointers",
      title: "Two Pointers",
      summary: "Coordinate two indices to shrink a linear scan.",
      lessons: [
        a("two-pointers-pattern", "The Two Pointers Pattern", 10),
        a("opposite-vs-same-direction", "Opposite vs Same-Direction Pointers", 7),
        p("two-sum-ii", "Two Sum II (Sorted)", "Medium"),
        p("three-sum", "3Sum", "Medium"),
        p("three-sum-closest", "3Sum Closest", "Medium"),
        p("container-with-most-water", "Container With Most Water", "Medium"),
        p("valid-palindrome-ii", "Valid Palindrome II", "Easy"),
        p("sort-colors-two-pointer", "Sort Colors (Dutch Flag)", "Medium"),
        p("remove-nth-node-from-end", "Remove Nth Node From End of List", "Medium"),
        p("trapping-rain-water", "Trapping Rain Water", "Hard", true),
      ],
    },
    {
      slug: "sliding-window",
      title: "Sliding Window",
      summary: "Maintain a moving range to avoid recomputation.",
      lessons: [
        a("sliding-window-pattern", "The Sliding Window Pattern", 11),
        a("fixed-vs-variable-window", "Fixed vs Variable Windows", 8),
        p("maximum-average-subarray", "Maximum Average Subarray I", "Easy"),
        p("longest-substring-without-repeat", "Longest Substring Without Repeating Characters", "Medium"),
        p("longest-repeating-char-replacement", "Longest Repeating Character Replacement", "Medium"),
        p("permutation-in-string", "Permutation in String", "Medium"),
        p("find-all-anagrams", "Find All Anagrams in a String", "Medium"),
        p("fruit-into-baskets", "Fruit Into Baskets", "Medium"),
        p("minimum-size-subarray-sum", "Minimum Size Subarray Sum", "Medium"),
        p("sliding-window-maximum", "Sliding Window Maximum", "Hard", true),
        p("minimum-window-substring", "Minimum Window Substring", "Hard", true),
      ],
    },
    {
      slug: "prefix-sum",
      title: "Prefix Sum",
      summary: "Precompute cumulative sums for range queries.",
      lessons: [
        a("prefix-sum-pattern", "The Prefix Sum Pattern", 10),
        a("2d-prefix-sum", "2D Prefix Sums", 9),
        p("running-sum-of-1d-array", "Running Sum of 1d Array", "Easy"),
        p("find-pivot-index", "Find Pivot Index", "Easy"),
        p("range-sum-query-immutable", "Range Sum Query - Immutable", "Easy"),
        p("subarray-sum-equals-k-prefix", "Subarray Sum Equals K (Prefix)", "Medium"),
        p("contiguous-array", "Contiguous Array", "Medium"),
        p("range-sum-query-2d", "Range Sum Query 2D - Immutable", "Medium"),
        p("product-of-array-prefix", "Product of Array Except Self (Prefix)", "Medium"),
        p("subarrays-divisible-by-k", "Subarray Sums Divisible by K", "Medium", true),
      ],
    },
    {
      slug: "kadane",
      title: "Kadane's Algorithm",
      summary: "Maximum-subarray thinking and its variations.",
      lessons: [
        a("kadanes-algorithm", "Kadane's Algorithm Explained", 10),
        p("maximum-subarray-kadane", "Maximum Subarray", "Medium"),
        p("maximum-product-subarray", "Maximum Product Subarray", "Medium"),
        p("maximum-circular-subarray", "Maximum Sum Circular Subarray", "Medium"),
        p("best-time-buy-sell-ii", "Best Time to Buy and Sell Stock II", "Medium"),
        p("longest-turbulent-subarray", "Longest Turbulent Subarray", "Medium", true),
      ],
    },
    {
      slug: "binary-search",
      title: "Binary Search",
      summary: "Halve the search space on any monotonic condition.",
      lessons: [
        a("binary-search-explained", "Binary Search Explained", 12),
        a("binary-search-on-answer", "Binary Search on the Answer", 11),
        a("lower-upper-bound", "Lower Bound & Upper Bound", 8),
        p("binary-search", "Binary Search", "Easy"),
        p("search-insert-position", "Search Insert Position", "Easy"),
        p("first-bad-version", "First Bad Version", "Easy"),
        p("search-2d-matrix", "Search a 2D Matrix", "Medium"),
        p("find-peak-element", "Find Peak Element", "Medium"),
        p("search-rotated-sorted-array", "Search in Rotated Sorted Array", "Medium"),
        p("find-min-rotated-sorted", "Find Minimum in Rotated Sorted Array", "Medium"),
        p("koko-eating-bananas", "Koko Eating Bananas", "Medium"),
        p("find-first-last-position", "Find First and Last Position", "Medium"),
        p("median-two-sorted-arrays", "Median of Two Sorted Arrays", "Hard", true),
      ],
    },
    {
      slug: "matrix",
      title: "Matrix",
      summary: "Grid traversal and in-place transformations.",
      lessons: [
        a("matrix-traversal", "Matrix Traversal Techniques", 9),
        p("spiral-matrix", "Spiral Matrix", "Medium"),
        p("rotate-image", "Rotate Image", "Medium"),
        p("set-matrix-zeroes", "Set Matrix Zeroes", "Medium"),
        p("transpose-matrix", "Transpose Matrix", "Easy"),
        p("diagonal-traverse", "Diagonal Traverse", "Medium"),
        p("game-of-life", "Game of Life", "Medium", true),
      ],
    },
    {
      slug: "linked-list",
      title: "Linked List",
      summary: "Pointer manipulation, cycles, and reversals.",
      lessons: [
        a("linked-list-fundamentals", "Linked List Fundamentals", 10),
        a("doubly-linked-lists", "Doubly Linked Lists", 8),
        a("dummy-node-technique", "The Dummy Node Technique", 7),
        p("reverse-linked-list", "Reverse Linked List", "Easy"),
        p("merge-two-sorted-lists", "Merge Two Sorted Lists", "Easy"),
        p("linked-list-cycle", "Linked List Cycle", "Easy"),
        p("middle-of-linked-list", "Middle of the Linked List", "Easy"),
        p("palindrome-linked-list", "Palindrome Linked List", "Easy"),
        p("remove-linked-list-elements", "Remove Linked List Elements", "Easy"),
        p("reorder-list", "Reorder List", "Medium"),
        p("add-two-numbers", "Add Two Numbers", "Medium"),
        p("copy-list-with-random-pointer", "Copy List with Random Pointer", "Medium"),
        p("reverse-linked-list-ii", "Reverse Linked List II", "Medium"),
        p("rotate-list", "Rotate List", "Medium"),
        p("swap-nodes-in-pairs", "Swap Nodes in Pairs", "Medium"),
        p("lru-cache", "LRU Cache", "Medium", true),
        p("merge-k-sorted-lists", "Merge k Sorted Lists", "Hard", true),
        p("reverse-nodes-in-k-group", "Reverse Nodes in k-Group", "Hard", true),
      ],
    },
    {
      slug: "stacks",
      title: "Stacks",
      summary: "LIFO structures, monotonic stacks, and expression parsing.",
      lessons: [
        a("stack-fundamentals", "Stack Fundamentals", 8),
        a("monotonic-stack", "The Monotonic Stack Pattern", 11),
        p("valid-parentheses", "Valid Parentheses", "Easy"),
        p("min-stack", "Min Stack", "Medium"),
        p("evaluate-reverse-polish-notation", "Evaluate Reverse Polish Notation", "Medium"),
        p("daily-temperatures", "Daily Temperatures", "Medium"),
        p("next-greater-element-i", "Next Greater Element I", "Easy"),
        p("next-greater-element-ii", "Next Greater Element II", "Medium"),
        p("asteroid-collision", "Asteroid Collision", "Medium"),
        p("decode-string", "Decode String", "Medium"),
        p("remove-duplicate-letters", "Remove Duplicate Letters", "Medium", true),
        p("basic-calculator", "Basic Calculator", "Hard", true),
        p("largest-rectangle-histogram", "Largest Rectangle in Histogram", "Hard", true),
      ],
    },
    {
      slug: "queues",
      title: "Queues",
      summary: "FIFO structures, deques, and monotonic queues.",
      lessons: [
        a("queue-fundamentals", "Queue Fundamentals", 8),
        a("deque-and-circular-queue", "Deques & Circular Queues", 9),
        a("monotonic-queue", "The Monotonic Queue Pattern", 10),
        p("implement-queue-using-stacks", "Implement Queue using Stacks", "Easy"),
        p("implement-stack-using-queues", "Implement Stack using Queues", "Easy"),
        p("design-circular-queue", "Design Circular Queue", "Medium"),
        p("number-of-recent-calls", "Number of Recent Calls", "Easy"),
        p("moving-average-from-stream", "Moving Average from Data Stream", "Easy", true),
      ],
    },
    {
      slug: "recursion-backtracking",
      title: "Recursion & Backtracking",
      summary: "Break problems into subproblems and explore choices.",
      lessons: [
        a("recursion-fundamentals", "Recursion Fundamentals", 11),
        a("backtracking-pattern", "The Backtracking Pattern", 13),
        a("subsets-vs-permutations", "Subsets vs Permutations vs Combinations", 9),
        p("subsets", "Subsets", "Medium"),
        p("subsets-ii", "Subsets II", "Medium"),
        p("combinations", "Combinations", "Medium"),
        p("combination-sum", "Combination Sum", "Medium"),
        p("combination-sum-ii", "Combination Sum II", "Medium"),
        p("permutations", "Permutations", "Medium"),
        p("permutations-ii", "Permutations II", "Medium"),
        p("generate-parentheses", "Generate Parentheses", "Medium"),
        p("letter-combinations-phone", "Letter Combinations of a Phone Number", "Medium"),
        p("word-search", "Word Search", "Medium"),
        p("palindrome-partitioning", "Palindrome Partitioning", "Medium"),
        p("n-queens", "N-Queens", "Hard", true),
        p("sudoku-solver", "Sudoku Solver", "Hard", true),
      ],
    },
    {
      slug: "binary-tree",
      title: "Binary Tree",
      summary: "Traversals, depth, path, and construction problems.",
      lessons: [
        a("binary-trees", "Binary Trees & Traversals", 14),
        a("dfs-vs-bfs-trees", "DFS vs BFS on Trees", 9),
        a("recursive-vs-iterative-traversal", "Recursive vs Iterative Traversal", 8),
        p("maximum-depth-binary-tree", "Maximum Depth of Binary Tree", "Easy"),
        p("invert-binary-tree", "Invert Binary Tree", "Easy"),
        p("same-tree", "Same Tree", "Easy"),
        p("symmetric-tree", "Symmetric Tree", "Easy"),
        p("path-sum", "Path Sum", "Easy"),
        p("diameter-of-binary-tree", "Diameter of Binary Tree", "Easy"),
        p("balanced-binary-tree", "Balanced Binary Tree", "Easy"),
        p("binary-tree-level-order", "Binary Tree Level Order Traversal", "Medium"),
        p("binary-tree-zigzag-traversal", "Binary Tree Zigzag Level Order Traversal", "Medium"),
        p("right-side-view", "Binary Tree Right Side View", "Medium"),
        p("count-good-nodes", "Count Good Nodes in Binary Tree", "Medium"),
        p("lowest-common-ancestor-bt", "Lowest Common Ancestor of a Binary Tree", "Medium"),
        p("construct-tree-preorder-inorder", "Construct Binary Tree from Preorder and Inorder", "Medium"),
        p("flatten-binary-tree", "Flatten Binary Tree to Linked List", "Medium"),
        p("path-sum-ii", "Path Sum II", "Medium"),
        p("binary-tree-max-path-sum", "Binary Tree Maximum Path Sum", "Hard", true),
        p("serialize-deserialize-tree", "Serialize and Deserialize Binary Tree", "Hard", true),
      ],
    },
    {
      slug: "bst",
      title: "Binary Search Tree",
      summary: "Ordered trees and the invariants that make them fast.",
      lessons: [
        a("binary-search-trees", "Binary Search Trees", 11),
        a("bst-operations", "BST Insert, Delete & Search", 10),
        p("search-in-a-bst", "Search in a Binary Search Tree", "Easy"),
        p("insert-into-a-bst", "Insert into a Binary Search Tree", "Medium"),
        p("delete-node-in-a-bst", "Delete Node in a BST", "Medium"),
        p("validate-bst", "Validate Binary Search Tree", "Medium"),
        p("kth-smallest-in-bst", "Kth Smallest Element in a BST", "Medium"),
        p("lowest-common-ancestor-bst", "Lowest Common Ancestor of a BST", "Medium"),
        p("convert-sorted-array-to-bst", "Convert Sorted Array to BST", "Easy"),
        p("range-sum-of-bst", "Range Sum of BST", "Easy"),
        p("minimum-distance-bst", "Minimum Distance Between BST Nodes", "Easy", true),
      ],
    },
    {
      slug: "heaps",
      title: "Heaps & Priority Queues",
      summary: "Keep the top element reachable in log time.",
      lessons: [
        a("heaps-explained", "Heaps & Priority Queues", 12),
        a("heapify-and-build-heap", "Heapify & Building a Heap", 9),
        a("top-k-pattern", "The Top-K Pattern", 8),
        p("kth-largest-element", "Kth Largest Element in an Array", "Medium"),
        p("top-k-frequent-heap", "Top K Frequent Elements", "Medium"),
        p("k-closest-points-to-origin", "K Closest Points to Origin", "Medium"),
        p("last-stone-weight", "Last Stone Weight", "Easy"),
        p("task-scheduler", "Task Scheduler", "Medium"),
        p("kth-largest-in-stream", "Kth Largest Element in a Stream", "Easy"),
        p("find-median-data-stream", "Find Median from Data Stream", "Hard", true),
      ],
    },
    {
      slug: "intervals",
      title: "Intervals",
      summary: "Sort, merge, and reason about overlapping ranges.",
      lessons: [
        a("interval-patterns", "Interval Patterns", 10),
        p("merge-intervals", "Merge Intervals", "Medium"),
        p("insert-interval-2", "Insert Interval", "Medium"),
        p("non-overlapping-intervals", "Non-overlapping Intervals", "Medium"),
        p("meeting-rooms", "Meeting Rooms", "Easy"),
        p("meeting-rooms-ii", "Meeting Rooms II", "Medium"),
        p("interval-list-intersections", "Interval List Intersections", "Medium"),
        p("minimum-arrows-balloons", "Minimum Arrows to Burst Balloons", "Medium"),
        p("employee-free-time", "Employee Free Time", "Hard", true),
      ],
    },
    {
      slug: "tries",
      title: "Tries",
      summary: "Prefix trees for fast word lookups and autocompletion.",
      lessons: [
        a("trie-fundamentals", "Trie Fundamentals", 11),
        p("implement-trie", "Implement Trie (Prefix Tree)", "Medium"),
        p("design-add-search-words", "Design Add and Search Words Data Structure", "Medium"),
        p("word-search-ii", "Word Search II", "Hard"),
        p("replace-words", "Replace Words", "Medium"),
        p("longest-word-in-dictionary", "Longest Word in Dictionary", "Medium"),
        p("map-sum-pairs", "Map Sum Pairs", "Medium", true),
      ],
    },
    {
      slug: "data-structure-design",
      title: "Data Structure Design",
      summary: "Combine primitives to hit tight time complexities.",
      lessons: [
        a("design-patterns-for-ds", "How to Design a Data Structure", 10),
        p("design-hashmap", "Design HashMap", "Easy"),
        p("design-hashset", "Design HashSet", "Easy"),
        p("design-linked-list", "Design Linked List", "Medium"),
        p("design-browser-history", "Design Browser History", "Medium"),
        p("design-underground-system", "Design Underground System", "Medium"),
        p("insert-delete-getrandom", "Insert Delete GetRandom O(1)", "Medium"),
        p("lfu-cache", "LFU Cache", "Hard", true),
        p("all-oone-data-structure", "All O`one Data Structure", "Hard", true),
      ],
    },
    {
      slug: "greedy",
      title: "Greedy",
      summary: "Make the locally optimal choice and prove it's global.",
      lessons: [
        a("greedy-fundamentals", "Greedy Algorithms Explained", 11),
        a("exchange-argument", "Proving Greedy: The Exchange Argument", 9),
        p("jump-game", "Jump Game", "Medium"),
        p("jump-game-ii", "Jump Game II", "Medium"),
        p("gas-station", "Gas Station", "Medium"),
        p("assign-cookies", "Assign Cookies", "Easy"),
        p("partition-labels", "Partition Labels", "Medium"),
        p("hand-of-straights", "Hand of Straights", "Medium"),
        p("merge-triplets-to-target", "Merge Triplets to Form Target", "Medium"),
        p("candy", "Candy", "Hard", true),
      ],
    },
    {
      slug: "graphs",
      title: "Graphs",
      summary: "BFS, DFS, topological sort, union-find, and shortest paths.",
      lessons: [
        a("graph-representations", "Graph Representations", 12),
        a("bfs-dfs", "BFS & DFS", 14),
        a("topological-sort", "Topological Sort", 11),
        a("union-find", "Union-Find (Disjoint Set)", 12),
        a("dijkstra", "Dijkstra's Shortest Path", 13),
        a("bellman-ford", "Bellman-Ford & Negative Edges", 10),
        p("number-of-islands", "Number of Islands", "Medium"),
        p("max-area-of-island", "Max Area of Island", "Medium"),
        p("clone-graph", "Clone Graph", "Medium"),
        p("rotting-oranges", "Rotting Oranges", "Medium"),
        p("pacific-atlantic-water-flow", "Pacific Atlantic Water Flow", "Medium"),
        p("surrounded-regions", "Surrounded Regions", "Medium"),
        p("course-schedule", "Course Schedule", "Medium"),
        p("course-schedule-ii", "Course Schedule II", "Medium"),
        p("number-of-connected-components", "Number of Connected Components", "Medium"),
        p("graph-valid-tree", "Graph Valid Tree", "Medium"),
        p("redundant-connection", "Redundant Connection", "Medium"),
        p("network-delay-time", "Network Delay Time", "Medium"),
        p("cheapest-flights-k-stops", "Cheapest Flights Within K Stops", "Medium"),
        p("word-ladder", "Word Ladder", "Hard", true),
        p("alien-dictionary", "Alien Dictionary", "Hard", true),
      ],
    },
    {
      slug: "dynamic-programming",
      title: "Dynamic Programming",
      summary: "Memoization, tabulation, and the classic DP families.",
      lessons: [
        a("intro-to-dp", "Introduction to Dynamic Programming", 15),
        a("memoization-vs-tabulation", "Memoization vs Tabulation", 10),
        a("1d-dp", "1D DP Patterns", 12),
        a("2d-dp", "2D DP Patterns", 12),
        a("knapsack-patterns", "0/1 Knapsack & Its Variants", 13),
        p("climbing-stairs", "Climbing Stairs", "Easy"),
        p("min-cost-climbing-stairs", "Min Cost Climbing Stairs", "Easy"),
        p("house-robber", "House Robber", "Medium"),
        p("house-robber-ii", "House Robber II", "Medium"),
        p("coin-change", "Coin Change", "Medium"),
        p("coin-change-ii", "Coin Change II", "Medium"),
        p("longest-increasing-subsequence", "Longest Increasing Subsequence", "Medium"),
        p("longest-common-subsequence", "Longest Common Subsequence", "Medium"),
        p("word-break", "Word Break", "Medium"),
        p("partition-equal-subset-sum", "Partition Equal Subset Sum", "Medium"),
        p("unique-paths", "Unique Paths", "Medium"),
        p("decode-ways", "Decode Ways", "Medium"),
        p("maximum-product-subarray-dp", "Maximum Product Subarray", "Medium"),
        p("edit-distance", "Edit Distance", "Hard", true),
        p("regular-expression-matching", "Regular Expression Matching", "Hard", true),
        p("burst-balloons", "Burst Balloons", "Hard", true),
      ],
    },
    {
      slug: "advanced-topics",
      title: "Advanced Topics",
      summary: "Beyond the core: segment trees, strings, and more.",
      lessons: [
        a("segment-trees", "Segment Trees", 13),
        a("fenwick-tree", "Fenwick Tree (Binary Indexed Tree)", 11),
        a("kmp-algorithm", "The KMP String-Matching Algorithm", 12),
        a("rabin-karp", "Rabin-Karp & Rolling Hashes", 10),
        a("minimum-spanning-tree", "Minimum Spanning Trees (Kruskal & Prim)", 12),
        a("bitmask-dp", "Bitmask Dynamic Programming", 12),
        p("range-sum-query-mutable", "Range Sum Query - Mutable", "Medium", true),
        p("count-of-smaller-numbers", "Count of Smaller Numbers After Self", "Hard", true),
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
// System Design Fundamentals — the building blocks of scalable systems.
// ---------------------------------------------------------------------------
const SYSTEM_DESIGN_FUNDAMENTALS: Roadmap = {
  course: "system-design-fundamentals",
  sections: [
    {
      slug: "getting-started",
      title: "Getting Started",
      summary: "Why system design matters and how to reason about scale.",
      lessons: [
        a("intro-to-system-design", "Introduction to System Design", 8),
        a("how-to-approach-sd", "How to Approach a Design Problem", 10),
        a("back-of-envelope", "Back-of-the-Envelope Estimation", 12),
        a("non-functional-requirements", "Functional vs Non-Functional Requirements", 8),
      ],
    },
    {
      slug: "networking-basics",
      title: "Networking Basics",
      lessons: [
        a("client-server-model", "The Client-Server Model", 7),
        a("dns", "How DNS Works", 9),
        a("http-https", "HTTP & HTTPS", 10),
        a("tcp-vs-udp", "TCP vs UDP", 8),
        a("websockets", "WebSockets & Long Polling", 9),
        a("api-design-rest", "Designing REST APIs", 11),
      ],
    },
    {
      slug: "scaling",
      title: "Scaling a System",
      lessons: [
        a("vertical-horizontal-scaling", "Vertical vs Horizontal Scaling", 9),
        a("load-balancers", "Load Balancers", 12),
        a("load-balancing-algorithms", "Load Balancing Algorithms", 10),
        a("stateless-services", "Stateless vs Stateful Services", 8),
        a("scaling-databases", "Scaling the Database Tier", 12),
      ],
    },
    {
      slug: "caching-layer",
      title: "Caching",
      lessons: [
        a("why-caching", "Why We Cache", 7),
        a("cache-strategies", "Cache Write & Eviction Strategies", 12),
        a("cache-invalidation", "Cache Invalidation", 10),
        a("distributed-cache", "Distributed Caching with Redis", 11),
        a("cdn-fundamentals", "CDNs & Edge Caching", 9),
      ],
    },
    {
      slug: "storage-fundamentals",
      title: "Databases & Storage",
      lessons: [
        a("relational-databases", "Relational Databases", 10),
        a("nosql-databases", "NoSQL Databases", 11),
        a("db-indexing", "Indexing Deep Dive", 12),
        a("db-replication", "Replication", 11),
        a("db-partitioning", "Partitioning & Sharding", 13),
        a("acid-base", "ACID vs BASE", 9),
        a("blob-object-storage", "Blob & Object Storage", 8),
      ],
    },
    {
      slug: "messaging-async",
      title: "Messaging & Async Processing",
      lessons: [
        a("message-queues-fundamentals", "Message Queues", 11),
        a("pub-sub", "Publish-Subscribe", 10),
        a("kafka-basics", "Event Streaming with Kafka", 12),
        a("async-workers", "Background Jobs & Workers", 9),
      ],
    },
    {
      slug: "reliability",
      title: "Reliability & Resilience",
      lessons: [
        a("availability-slas", "Availability, SLAs & SLOs", 9),
        a("redundancy-failover", "Redundancy & Failover", 10),
        a("rate-limiting-fundamentals", "Rate Limiting", 10),
        a("idempotency", "Idempotency", 8),
        a("consistent-hashing-fundamentals", "Consistent Hashing", 12),
      ],
    },
    {
      slug: "observability",
      title: "Observability & Operations",
      lessons: [
        a("logging", "Logging", 7),
        a("metrics-monitoring", "Metrics & Monitoring", 9),
        a("distributed-tracing", "Distributed Tracing", 9),
        a("capacity-planning", "Capacity Planning", 8),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Low Level Design — OOP, SOLID, design patterns, and machine-coding rounds.
// ---------------------------------------------------------------------------
const LOW_LEVEL_DESIGN: Roadmap = {
  course: "low-level-design",
  sections: [
    {
      slug: "lld-foundations",
      title: "Foundations",
      lessons: [
        a("what-is-lld", "What Is Low Level Design?", 7),
        a("lld-interview-approach", "How to Approach an LLD Interview", 10),
        a("uml-basics", "UML Class & Sequence Diagrams", 11),
      ],
    },
    {
      slug: "oop-principles",
      title: "Object-Oriented Programming",
      lessons: [
        a("encapsulation", "Encapsulation", 7),
        a("abstraction", "Abstraction", 7),
        a("inheritance", "Inheritance", 8),
        a("polymorphism", "Polymorphism", 8),
        a("composition-over-inheritance", "Composition over Inheritance", 9),
      ],
    },
    {
      slug: "solid-principles",
      title: "SOLID Principles",
      lessons: [
        a("single-responsibility", "Single Responsibility Principle", 8),
        a("open-closed", "Open/Closed Principle", 8),
        a("liskov-substitution", "Liskov Substitution Principle", 9),
        a("interface-segregation", "Interface Segregation Principle", 8),
        a("dependency-inversion", "Dependency Inversion Principle", 9),
      ],
    },
    {
      slug: "creational-patterns",
      title: "Creational Design Patterns",
      lessons: [
        a("singleton-pattern", "Singleton", 8),
        a("factory-pattern", "Factory Method", 9),
        a("abstract-factory-pattern", "Abstract Factory", 9),
        a("builder-pattern", "Builder", 9),
        a("prototype-pattern", "Prototype", 7),
      ],
    },
    {
      slug: "structural-patterns",
      title: "Structural Design Patterns",
      lessons: [
        a("adapter-pattern", "Adapter", 8),
        a("decorator-pattern", "Decorator", 9),
        a("facade-pattern", "Facade", 7),
        a("proxy-pattern", "Proxy", 8),
        a("composite-pattern", "Composite", 8),
        a("bridge-pattern", "Bridge", 8),
      ],
    },
    {
      slug: "behavioral-patterns",
      title: "Behavioral Design Patterns",
      lessons: [
        a("strategy-pattern", "Strategy", 8),
        a("observer-pattern", "Observer", 9),
        a("state-pattern", "State", 9),
        a("command-pattern", "Command", 8),
        a("template-method-pattern", "Template Method", 8),
        a("chain-of-responsibility", "Chain of Responsibility", 9),
        a("iterator-pattern", "Iterator", 7),
      ],
    },
    {
      slug: "machine-coding",
      title: "Machine Coding Problems",
      summary: "Full design problems commonly asked in LLD rounds.",
      lessons: [
        a("design-parking-lot", "Design a Parking Lot", 16),
        a("design-elevator-system", "Design an Elevator System", 16),
        a("design-vending-machine", "Design a Vending Machine", 14),
        a("design-tic-tac-toe", "Design Tic-Tac-Toe", 12),
        a("design-snake-and-ladder", "Design Snake & Ladder", 12),
        { slug: "design-splitwise", title: "Design Splitwise", type: "article", minutes: 18, premium: true },
        { slug: "design-rate-limiter-lld", title: "Design a Rate Limiter", type: "article", minutes: 16, premium: true },
        { slug: "design-logging-framework", title: "Design a Logging Framework", type: "article", minutes: 14, premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Concurrency — threads, synchronization, and classic concurrency problems.
// ---------------------------------------------------------------------------
const CONCURRENCY: Roadmap = {
  course: "concurrency",
  sections: [
    {
      slug: "concurrency-basics",
      title: "Concurrency Basics",
      lessons: [
        a("processes-vs-threads", "Processes vs Threads", 8),
        a("concurrency-vs-parallelism", "Concurrency vs Parallelism", 8),
        a("thread-lifecycle", "The Thread Lifecycle", 9),
        a("context-switching", "Context Switching", 7),
      ],
    },
    {
      slug: "synchronization",
      title: "Synchronization",
      lessons: [
        a("race-conditions", "Race Conditions", 9),
        a("locks-mutexes", "Locks & Mutexes", 10),
        a("semaphores", "Semaphores", 9),
        a("monitors-condition-vars", "Monitors & Condition Variables", 10),
        a("read-write-locks", "Read-Write Locks", 9),
        a("atomic-operations", "Atomic Operations", 8),
      ],
    },
    {
      slug: "concurrency-hazards",
      title: "Concurrency Hazards",
      lessons: [
        a("deadlock", "Deadlocks", 10),
        a("livelock-starvation", "Livelock & Starvation", 8),
        a("deadlock-prevention", "Deadlock Prevention & Avoidance", 11),
        a("memory-model", "Memory Models & Visibility", 10),
      ],
    },
    {
      slug: "concurrency-tools",
      title: "High-Level Concurrency Tools",
      lessons: [
        a("thread-pools", "Thread Pools & Executors", 10),
        a("futures-promises", "Futures & Promises", 9),
        a("producer-consumer-queues", "Blocking Queues", 9),
        a("concurrent-data-structures", "Concurrent Data Structures", 11),
      ],
    },
    {
      slug: "concurrency-problems",
      title: "Classic Concurrency Problems",
      lessons: [
        p("producer-consumer", "Producer-Consumer", "Medium"),
        p("dining-philosophers", "Dining Philosophers", "Hard"),
        p("readers-writers", "Readers-Writers", "Medium"),
        p("print-in-order", "Print in Order", "Easy"),
        p("print-foobar-alternately", "Print FooBar Alternately", "Medium"),
        p("building-h2o", "Building H2O", "Medium"),
        { slug: "the-barber-shop", title: "The Sleeping Barber", type: "problem", difficulty: "Hard", premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Microservices — boundaries, communication, resilience, and deployment.
// ---------------------------------------------------------------------------
const MICROSERVICES: Roadmap = {
  course: "microservices",
  sections: [
    {
      slug: "microservices-intro",
      title: "Introduction",
      lessons: [
        a("monolith-vs-microservices", "Monolith vs Microservices", 10),
        a("when-to-use-microservices", "When to Use Microservices", 8),
        a("bounded-contexts", "Bounded Contexts & DDD", 11),
        a("service-decomposition", "Decomposing a Monolith", 12),
      ],
    },
    {
      slug: "microservices-communication",
      title: "Communication",
      lessons: [
        a("sync-vs-async-comm", "Synchronous vs Asynchronous", 9),
        a("rest-grpc", "REST vs gRPC", 10),
        a("api-gateway", "API Gateway", 10),
        a("service-discovery", "Service Discovery", 9),
        a("event-driven-architecture", "Event-Driven Architecture", 12),
      ],
    },
    {
      slug: "microservices-data",
      title: "Data Management",
      lessons: [
        a("database-per-service", "Database per Service", 10),
        a("saga-pattern", "The Saga Pattern", 12),
        a("cqrs", "CQRS", 11),
        a("event-sourcing", "Event Sourcing", 11),
        a("distributed-transactions", "Distributed Transactions", 12),
      ],
    },
    {
      slug: "microservices-resilience",
      title: "Resilience",
      lessons: [
        a("circuit-breaker", "Circuit Breaker", 10),
        a("retries-backoff", "Retries & Exponential Backoff", 9),
        a("bulkhead-pattern", "Bulkhead Pattern", 8),
        a("timeouts-fallbacks", "Timeouts & Fallbacks", 8),
      ],
    },
    {
      slug: "microservices-ops",
      title: "Deployment & Operations",
      lessons: [
        a("containers-docker", "Containers & Docker", 10),
        a("orchestration-kubernetes", "Orchestration with Kubernetes", 12),
        a("service-mesh", "Service Mesh", 10),
        a("observability-microservices", "Observability", 9),
        a("ci-cd", "CI/CD Pipelines", 9),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SQL — querying, joins, window functions, optimization, and problems.
// ---------------------------------------------------------------------------
const SQL: Roadmap = {
  course: "sql",
  sections: [
    {
      slug: "sql-basics",
      title: "SQL Basics",
      lessons: [
        a("relational-model", "The Relational Model", 8),
        a("select-where", "SELECT & WHERE", 9),
        a("ordering-limiting", "ORDER BY & LIMIT", 7),
        a("insert-update-delete", "INSERT, UPDATE, DELETE", 8),
        a("data-types-sql", "Data Types & Constraints", 8),
      ],
    },
    {
      slug: "sql-joins",
      title: "Joins & Relationships",
      lessons: [
        a("inner-join", "INNER JOIN", 9),
        a("outer-joins", "LEFT, RIGHT & FULL JOIN", 10),
        a("self-join", "Self Joins", 9),
        a("cross-join", "CROSS JOIN", 7),
        a("set-operations", "UNION, INTERSECT & EXCEPT", 8),
      ],
    },
    {
      slug: "sql-aggregation",
      title: "Aggregation & Grouping",
      lessons: [
        a("group-by", "GROUP BY", 9),
        a("having", "HAVING", 7),
        a("aggregate-functions", "Aggregate Functions", 8),
        a("subqueries", "Subqueries", 10),
        a("ctes", "Common Table Expressions", 10),
      ],
    },
    {
      slug: "sql-window-functions",
      title: "Window Functions",
      lessons: [
        a("intro-window-functions", "Introduction to Window Functions", 10),
        a("ranking-functions", "ROW_NUMBER, RANK & DENSE_RANK", 11),
        a("running-totals", "Running Totals & Moving Averages", 10),
        a("lag-lead", "LAG & LEAD", 9),
      ],
    },
    {
      slug: "sql-performance",
      title: "Performance & Design",
      lessons: [
        a("sql-indexing", "Indexes & Query Plans", 12),
        a("query-optimization", "Query Optimization", 11),
        a("normalization", "Normalization", 10),
        a("transactions-isolation", "Transactions & Isolation Levels", 11),
      ],
    },
    {
      slug: "sql-problems",
      title: "Interview Problems",
      lessons: [
        p("second-highest-salary", "Second Highest Salary", "Medium"),
        p("nth-highest-salary", "Nth Highest Salary", "Medium"),
        p("duplicate-emails", "Duplicate Emails", "Easy"),
        p("department-top-earners", "Department Top Three Salaries", "Hard"),
        p("consecutive-numbers", "Consecutive Numbers", "Medium"),
        p("rank-scores", "Rank Scores", "Medium"),
        { slug: "trips-and-users", title: "Trips and Users", type: "problem", difficulty: "Hard", premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Behavioral Interviews — frameworks, stories, and common questions.
// ---------------------------------------------------------------------------
const BEHAVIORAL: Roadmap = {
  course: "behavioral",
  sections: [
    {
      slug: "behavioral-foundations",
      title: "Foundations",
      lessons: [
        a("why-behavioral-matters", "Why the Behavioral Round Matters", 7),
        a("what-interviewers-look-for", "What Interviewers Are Evaluating", 8),
        a("star-method", "The STAR Method", 10),
        a("building-your-stories", "Building Your Story Bank", 10),
      ],
    },
    {
      slug: "leadership-principles",
      title: "Leadership & Values",
      lessons: [
        a("ownership", "Demonstrating Ownership", 8),
        a("bias-for-action", "Bias for Action", 7),
        a("dealing-with-ambiguity", "Dealing with Ambiguity", 8),
        a("customer-obsession", "Customer Obsession", 7),
      ],
    },
    {
      slug: "common-questions",
      title: "Common Questions",
      lessons: [
        a("tell-me-about-yourself", "Tell Me About Yourself", 9),
        a("biggest-challenge", "Your Biggest Challenge", 8),
        a("conflict-with-teammate", "Conflict with a Teammate", 9),
        a("a-time-you-failed", "A Time You Failed", 8),
        a("disagreed-with-manager", "When You Disagreed with Your Manager", 8),
        a("proudest-project", "Your Proudest Project", 7),
      ],
    },
    {
      slug: "advanced-behavioral",
      title: "Advanced & Closing",
      lessons: [
        a("leadership-scope-questions", "Questions on Scope & Impact", 9),
        a("questions-to-ask", "Questions to Ask Your Interviewer", 7),
        a("handling-tricky-questions", "Handling Tricky Questions", 8),
        a("remote-interview-tips", "Virtual Interview Tips", 6),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Job Search — resume, networking, applications, and negotiation.
// ---------------------------------------------------------------------------
const JOB_SEARCH: Roadmap = {
  course: "job-search",
  sections: [
    {
      slug: "job-search-strategy",
      title: "Strategy",
      lessons: [
        a("planning-your-search", "Planning Your Job Search", 8),
        a("timeline-and-pipeline", "Building an Application Pipeline", 8),
        a("target-companies", "Choosing Target Companies", 7),
      ],
    },
    {
      slug: "resume-portfolio",
      title: "Resume & Portfolio",
      lessons: [
        a("resume-fundamentals", "Resume Fundamentals", 10),
        a("quantifying-impact", "Quantifying Your Impact", 9),
        a("ats-optimization", "Beating the ATS", 8),
        a("github-portfolio", "Your GitHub & Portfolio", 8),
        a("linkedin-profile", "Optimizing LinkedIn", 8),
      ],
    },
    {
      slug: "networking-referrals",
      title: "Networking & Referrals",
      lessons: [
        a("why-referrals-work", "Why Referrals Work", 7),
        a("cold-outreach", "Effective Cold Outreach", 9),
        a("informational-interviews", "Informational Interviews", 8),
      ],
    },
    {
      slug: "applying-interviewing",
      title: "Applying & Interviewing",
      lessons: [
        a("cover-letters", "Cover Letters That Work", 7),
        a("recruiter-screens", "The Recruiter Screen", 8),
        a("managing-the-process", "Managing Multiple Processes", 8),
      ],
    },
    {
      slug: "offers-negotiation",
      title: "Offers & Negotiation",
      lessons: [
        a("understanding-comp", "Understanding Total Compensation", 10),
        a("negotiation-fundamentals", "Negotiation Fundamentals", 11),
        a("competing-offers", "Leveraging Competing Offers", 9),
        a("evaluating-an-offer", "Evaluating an Offer", 8),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// AI Engineering — building applications with LLMs.
// ---------------------------------------------------------------------------
const AI_ENGINEERING: Roadmap = {
  course: "ai-engineering",
  sections: [
    {
      slug: "ai-foundations",
      title: "Foundations",
      lessons: [
        a("what-is-ai-engineering", "What Is AI Engineering?", 8),
        a("how-llms-work", "How LLMs Work", 12),
        a("tokens-and-context", "Tokens, Context Windows & Cost", 9),
        a("temperature-sampling", "Temperature & Sampling", 8),
        a("capabilities-limitations", "Capabilities & Limitations", 8),
      ],
    },
    {
      slug: "prompt-engineering",
      title: "Prompt Engineering",
      lessons: [
        a("prompting-basics", "Prompting Basics", 9),
        a("few-shot-prompting", "Few-Shot Prompting", 9),
        a("chain-of-thought", "Chain-of-Thought Prompting", 10),
        a("structured-outputs", "Structured Outputs & JSON Mode", 9),
        a("system-prompts", "System Prompts & Roles", 8),
        a("prompt-security", "Prompt Injection & Safety", 10),
      ],
    },
    {
      slug: "embeddings-rag",
      title: "Embeddings & RAG",
      lessons: [
        a("embeddings-explained", "Embeddings Explained", 10),
        a("vector-databases", "Vector Databases", 11),
        a("chunking-strategies", "Chunking Strategies", 9),
        a("retrieval-augmented-generation", "Retrieval-Augmented Generation", 12),
        a("hybrid-search", "Hybrid & Reranked Search", 10),
        a("rag-evaluation", "Evaluating RAG Systems", 10),
      ],
    },
    {
      slug: "tool-use-agents",
      title: "Tool Use & Agents",
      lessons: [
        a("function-calling", "Function Calling & Tools", 11),
        a("agent-fundamentals", "Agent Fundamentals", 11),
        a("planning-and-memory", "Planning & Memory", 10),
        a("multi-agent-systems", "Multi-Agent Systems", 10),
        a("mcp-overview", "The Model Context Protocol", 9),
      ],
    },
    {
      slug: "fine-tuning",
      title: "Fine-Tuning & Adaptation",
      lessons: [
        a("when-to-fine-tune", "When to Fine-Tune", 9),
        a("supervised-fine-tuning", "Supervised Fine-Tuning", 11),
        a("lora-peft", "LoRA & Parameter-Efficient Tuning", 11),
        a("rlhf-overview", "RLHF & Preference Tuning", 10),
      ],
    },
    {
      slug: "eval-and-production",
      title: "Evaluation & Production",
      lessons: [
        a("evaluating-llm-apps", "Evaluating LLM Applications", 11),
        a("llm-as-judge", "LLM-as-a-Judge", 9),
        a("guardrails", "Guardrails & Content Moderation", 9),
        a("caching-cost-optimization", "Caching & Cost Optimization", 9),
        a("latency-streaming", "Latency & Streaming", 8),
        a("observability-llm", "Observability & Tracing", 9),
        { slug: "deploying-llm-apps", title: "Deploying LLM Applications", type: "article", minutes: 12, premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// ML System Design — end-to-end machine learning systems.
// ---------------------------------------------------------------------------
const ML_SYSTEM_DESIGN: Roadmap = {
  course: "ml-system-design",
  sections: [
    {
      slug: "ml-sd-foundations",
      title: "Foundations",
      lessons: [
        a("ml-sd-framework", "A Framework for ML System Design", 11),
        a("framing-ml-problems", "Framing the ML Problem", 10),
        a("choosing-metrics", "Choosing Offline & Online Metrics", 10),
        a("baselines", "Baselines & Heuristics", 8),
      ],
    },
    {
      slug: "data-pipeline",
      title: "Data",
      lessons: [
        a("data-collection", "Data Collection & Labeling", 10),
        a("data-pipelines", "Data Pipelines", 11),
        a("handling-imbalance", "Handling Class Imbalance", 9),
        a("train-test-splits", "Train/Validation/Test Splits", 8),
        a("data-leakage", "Avoiding Data Leakage", 9),
      ],
    },
    {
      slug: "feature-engineering",
      title: "Features",
      lessons: [
        a("feature-engineering-basics", "Feature Engineering", 11),
        a("feature-stores", "Feature Stores", 10),
        a("embeddings-features", "Embeddings as Features", 9),
        a("feature-selection", "Feature Selection", 8),
      ],
    },
    {
      slug: "modeling",
      title: "Modeling & Training",
      lessons: [
        a("model-selection", "Model Selection", 10),
        a("training-at-scale", "Training at Scale", 11),
        a("hyperparameter-tuning", "Hyperparameter Tuning", 9),
        a("evaluation-offline", "Offline Evaluation", 10),
        a("bias-fairness", "Bias & Fairness", 9),
      ],
    },
    {
      slug: "serving",
      title: "Serving & Deployment",
      lessons: [
        a("batch-vs-online-inference", "Batch vs Online Inference", 10),
        a("model-serving", "Model Serving Infrastructure", 11),
        a("ab-testing-ml", "A/B Testing & Rollouts", 10),
        a("model-compression", "Model Compression & Distillation", 9),
      ],
    },
    {
      slug: "monitoring-ml",
      title: "Monitoring & Iteration",
      lessons: [
        a("model-monitoring", "Model Monitoring", 10),
        a("data-model-drift", "Data & Model Drift", 10),
        a("retraining-pipelines", "Retraining Pipelines", 9),
      ],
    },
    {
      slug: "ml-sd-case-studies",
      title: "Case Studies",
      summary: "End-to-end designs of common ML systems.",
      lessons: [
        a("design-recommendation-system", "Design a Recommendation System", 18),
        a("design-feed-ranking", "Design Feed Ranking", 16),
        a("design-search-ranking", "Design Search Ranking", 16),
        { slug: "design-fraud-detection", title: "Design Fraud Detection", type: "article", minutes: 16, premium: true },
        { slug: "design-ad-click-prediction", title: "Design Ad Click Prediction", type: "article", minutes: 16, premium: true },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Java — from basics to interview-grade internals.
// ---------------------------------------------------------------------------
const JAVA: Roadmap = {
  course: "java",
  sections: [
    {
      slug: "java-basics",
      title: "Java Basics",
      lessons: [
        a("java-getting-started", "Getting Started with Java", 8),
        a("java-primitives", "Primitives & Variables", 8),
        a("java-operators-control", "Operators & Control Flow", 8),
        a("java-strings", "Strings & StringBuilder", 9),
        a("java-arrays", "Arrays", 8),
      ],
    },
    {
      slug: "java-oop",
      title: "Object-Oriented Java",
      lessons: [
        a("java-classes-objects", "Classes & Objects", 9),
        a("java-inheritance", "Inheritance & super", 9),
        a("java-interfaces", "Interfaces & Abstract Classes", 10),
        a("java-polymorphism", "Polymorphism", 9),
        a("java-enums-records", "Enums & Records", 8),
        a("java-equals-hashcode", "equals() & hashCode()", 9),
      ],
    },
    {
      slug: "java-collections",
      title: "Collections Framework",
      lessons: [
        a("java-list", "List: ArrayList & LinkedList", 10),
        a("java-map", "Map: HashMap & TreeMap", 11),
        a("java-set", "Set: HashSet & TreeSet", 9),
        a("java-queue-deque", "Queue & Deque", 9),
        a("java-comparators", "Comparable & Comparator", 8),
        a("java-collections-internals", "HashMap Internals", 12),
      ],
    },
    {
      slug: "java-generics-functional",
      title: "Generics & Functional",
      lessons: [
        a("java-generics", "Generics", 11),
        a("java-lambdas", "Lambdas & Functional Interfaces", 10),
        a("java-streams", "The Stream API", 12),
        a("java-optional", "Optional", 8),
      ],
    },
    {
      slug: "java-concurrency",
      title: "Concurrency",
      lessons: [
        a("java-threads", "Threads & Runnable", 10),
        a("java-synchronized", "synchronized & volatile", 10),
        a("java-executors", "Executors & Thread Pools", 10),
        a("java-concurrent-collections", "Concurrent Collections", 10),
        a("java-completable-future", "CompletableFuture", 9),
      ],
    },
    {
      slug: "java-jvm",
      title: "JVM Internals",
      lessons: [
        a("java-memory-model", "JVM Memory Model", 11),
        a("java-garbage-collection", "Garbage Collection", 12),
        a("java-classloading", "Class Loading", 9),
        a("java-exceptions", "Exception Handling", 8),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Python — idiomatic Python and the interview gotchas.
// ---------------------------------------------------------------------------
const PYTHON: Roadmap = {
  course: "python",
  sections: [
    {
      slug: "python-basics",
      title: "Python Basics",
      lessons: [
        a("python-getting-started", "Getting Started with Python", 8),
        a("python-numbers-strings", "Numbers & Strings", 8),
        a("python-lists-tuples", "Lists & Tuples", 9),
        a("python-dicts-sets", "Dicts & Sets", 9),
        a("python-control-flow", "Control Flow", 7),
      ],
    },
    {
      slug: "python-functions",
      title: "Functions & Scope",
      lessons: [
        a("python-functions-args", "Functions & Arguments", 9),
        a("python-closures", "Closures & Scope", 9),
        a("python-decorators", "Decorators", 10),
        a("python-generators", "Generators & Iterators", 10),
        a("python-comprehensions", "Comprehensions", 8),
      ],
    },
    {
      slug: "python-data-model",
      title: "The Data Model",
      lessons: [
        a("python-objects", "Everything Is an Object", 9),
        a("python-dunder-methods", "Dunder Methods", 11),
        a("python-classes", "Classes & Inheritance", 10),
        a("python-dataclasses", "Dataclasses", 8),
        a("python-mutability", "Mutability & Identity", 9),
      ],
    },
    {
      slug: "python-stdlib",
      title: "Standard Library",
      lessons: [
        a("python-collections-module", "collections", 10),
        a("python-itertools", "itertools", 9),
        a("python-functools", "functools", 9),
        a("python-heapq-bisect", "heapq & bisect", 10),
      ],
    },
    {
      slug: "python-advanced",
      title: "Advanced Python",
      lessons: [
        a("python-context-managers", "Context Managers", 9),
        a("python-typing", "Type Hints", 9),
        a("python-gil", "The GIL & Concurrency", 11),
        a("python-async", "async / await", 11),
        a("python-gotchas", "Common Gotchas", 9),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// C++ — STL, memory model, and performance.
// ---------------------------------------------------------------------------
const CPP: Roadmap = {
  course: "cpp",
  sections: [
    {
      slug: "cpp-basics",
      title: "C++ Basics",
      lessons: [
        a("cpp-getting-started", "Getting Started with C++", 8),
        a("cpp-types", "Types & Variables", 8),
        a("cpp-control-flow", "Control Flow & Functions", 8),
        a("cpp-references-pointers", "References & Pointers", 10),
      ],
    },
    {
      slug: "cpp-memory",
      title: "Memory Management",
      lessons: [
        a("cpp-stack-heap", "Stack vs Heap", 9),
        a("cpp-new-delete", "new & delete", 9),
        a("cpp-smart-pointers", "Smart Pointers", 11),
        a("cpp-raii", "RAII", 9),
        a("cpp-move-semantics", "Move Semantics", 11),
      ],
    },
    {
      slug: "cpp-oop",
      title: "Object-Oriented C++",
      lessons: [
        a("cpp-classes", "Classes & Constructors", 9),
        a("cpp-inheritance", "Inheritance & Virtual Functions", 10),
        a("cpp-operator-overloading", "Operator Overloading", 9),
        a("cpp-rule-of-five", "The Rule of Five", 10),
      ],
    },
    {
      slug: "cpp-stl",
      title: "The STL",
      lessons: [
        a("cpp-vector", "vector", 9),
        a("cpp-map-set", "map & set", 10),
        a("cpp-unordered", "unordered_map & unordered_set", 10),
        a("cpp-algorithms", "The <algorithm> Header", 11),
        a("cpp-iterators", "Iterators", 9),
      ],
    },
    {
      slug: "cpp-advanced",
      title: "Advanced C++",
      lessons: [
        a("cpp-templates", "Templates", 11),
        a("cpp-lambdas", "Lambdas", 9),
        a("cpp-concurrency", "Threads & Atomics", 11),
        a("cpp-undefined-behavior", "Undefined Behavior", 9),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// C# — modern C# and .NET fundamentals.
// ---------------------------------------------------------------------------
const CSHARP: Roadmap = {
  course: "csharp",
  sections: [
    {
      slug: "csharp-basics",
      title: "C# Basics",
      lessons: [
        a("csharp-getting-started", "Getting Started with C#", 8),
        a("csharp-types", "Value & Reference Types", 9),
        a("csharp-control-flow", "Control Flow & Methods", 8),
        a("csharp-strings", "Strings & Interpolation", 8),
      ],
    },
    {
      slug: "csharp-oop",
      title: "Object-Oriented C#",
      lessons: [
        a("csharp-classes", "Classes & Structs", 9),
        a("csharp-inheritance", "Inheritance & Interfaces", 10),
        a("csharp-properties", "Properties & Indexers", 8),
        a("csharp-records", "Records", 8),
        a("csharp-generics", "Generics", 10),
      ],
    },
    {
      slug: "csharp-linq",
      title: "LINQ & Collections",
      lessons: [
        a("csharp-collections", "Collections", 9),
        a("csharp-linq-basics", "LINQ Basics", 11),
        a("csharp-linq-advanced", "Advanced LINQ", 10),
        a("csharp-delegates-events", "Delegates & Events", 10),
      ],
    },
    {
      slug: "csharp-async",
      title: "Async & Concurrency",
      lessons: [
        a("csharp-tasks", "Tasks", 10),
        a("csharp-async-await", "async / await", 11),
        a("csharp-cancellation", "Cancellation Tokens", 8),
        a("csharp-parallel", "Parallel & PLINQ", 9),
      ],
    },
    {
      slug: "csharp-dotnet",
      title: ".NET Fundamentals",
      lessons: [
        a("csharp-clr", "The CLR & Memory", 10),
        a("csharp-garbage-collection", "Garbage Collection", 10),
        a("csharp-dependency-injection", "Dependency Injection", 9),
        a("csharp-exceptions", "Exception Handling", 8),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Go — goroutines, channels, and idiomatic Go.
// ---------------------------------------------------------------------------
const GO: Roadmap = {
  course: "go",
  sections: [
    {
      slug: "go-basics",
      title: "Go Basics",
      lessons: [
        a("go-getting-started", "Getting Started with Go", 8),
        a("go-types", "Types & Variables", 8),
        a("go-control-flow", "Control Flow & Functions", 8),
        a("go-slices-maps", "Slices & Maps", 10),
        a("go-pointers", "Pointers", 8),
      ],
    },
    {
      slug: "go-types-methods",
      title: "Types & Methods",
      lessons: [
        a("go-structs", "Structs", 9),
        a("go-methods", "Methods & Receivers", 9),
        a("go-interfaces", "Interfaces", 11),
        a("go-embedding", "Embedding & Composition", 9),
        a("go-generics", "Generics", 10),
      ],
    },
    {
      slug: "go-concurrency",
      title: "Concurrency",
      lessons: [
        a("go-goroutines", "Goroutines", 10),
        a("go-channels", "Channels", 11),
        a("go-select", "select", 9),
        a("go-sync-package", "The sync Package", 10),
        a("go-context", "Context", 9),
      ],
    },
    {
      slug: "go-idioms",
      title: "Idiomatic Go",
      lessons: [
        a("go-error-handling", "Error Handling", 10),
        a("go-defer-panic-recover", "defer, panic & recover", 9),
        a("go-packages-modules", "Packages & Modules", 8),
        a("go-testing", "Testing", 9),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Git — branching, rebasing, and collaboration.
// ---------------------------------------------------------------------------
const GIT: Roadmap = {
  course: "git",
  sections: [
    {
      slug: "git-basics",
      title: "Git Basics",
      lessons: [
        a("git-what-is-git", "What Is Git?", 7),
        a("git-init-clone", "init, clone & config", 8),
        a("git-staging-commits", "Staging & Commits", 9),
        a("git-history", "Viewing History", 8),
        a("git-ignore", "gitignore", 6),
      ],
    },
    {
      slug: "git-branching",
      title: "Branching & Merging",
      lessons: [
        a("git-branches", "Branches", 9),
        a("git-merging", "Merging", 10),
        a("git-merge-conflicts", "Resolving Merge Conflicts", 10),
        a("git-rebase", "Rebasing", 11),
        a("git-cherry-pick", "Cherry-Pick", 8),
      ],
    },
    {
      slug: "git-remotes",
      title: "Working with Remotes",
      lessons: [
        a("git-remotes-basics", "Remotes", 9),
        a("git-fetch-pull-push", "fetch, pull & push", 9),
        a("git-pull-requests", "Pull Requests & Code Review", 9),
        a("git-forking-workflow", "Forking Workflow", 8),
      ],
    },
    {
      slug: "git-advanced",
      title: "Advanced Git",
      lessons: [
        a("git-stash", "Stashing", 7),
        a("git-reset-revert", "reset vs revert", 10),
        a("git-reflog", "reflog & Recovery", 9),
        a("git-interactive-rebase", "Interactive Rebase", 10),
        a("git-workflows", "Branching Workflows", 9),
      ],
    },
  ],
};

const ROADMAPS: Record<string, Roadmap> = {
  dsa: DSA,
  "system-design": SYSTEM_DESIGN,
  "system-design-fundamentals": SYSTEM_DESIGN_FUNDAMENTALS,
  "low-level-design": LOW_LEVEL_DESIGN,
  concurrency: CONCURRENCY,
  microservices: MICROSERVICES,
  sql: SQL,
  behavioral: BEHAVIORAL,
  "job-search": JOB_SEARCH,
  "ai-engineering": AI_ENGINEERING,
  "ml-system-design": ML_SYSTEM_DESIGN,
  java: JAVA,
  python: PYTHON,
  cpp: CPP,
  csharp: CSHARP,
  go: GO,
  git: GIT,
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
