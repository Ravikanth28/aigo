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

const ROADMAPS: Record<string, Roadmap> = {
  dsa: DSA,
  "system-design": SYSTEM_DESIGN,
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
