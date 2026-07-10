// Authored lesson content. All prose is original and written for this project.
// Content is keyed by `${course}/${lessonSlug}`. Lessons without an entry fall
// back to the generic scaffold rendered by the lesson page.
//
// Inline markup inside `p`, `ul`/`ol` items, `callout`, and table cells supports
// **bold** and `inline code`.

import { DSA_PROBLEMS } from "@/lib/lesson-content-problems";
import { EXTRA_CONTENT } from "@/lib/lesson-content-extra";

export type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "code"; lang?: string; code: string }
  | { t: "callout"; variant: "tip" | "warn" | "note"; text: string }
  | { t: "table"; head: string[]; rows: string[][] };

export interface LessonContent {
  blocks: Block[];
}

// ---------------------------------------------------------------------------
// DSA — Getting Started
// ---------------------------------------------------------------------------

const dsaGettingStarted: Record<string, LessonContent> = {
  "dsa/how-to-use-this-roadmap": {
    blocks: [
      { t: "h2", text: "What this roadmap is" },
      {
        t: "p",
        text: "This roadmap orders the data structures and algorithms that show up most often in coding interviews. Each section introduces one idea, then reinforces it with a small, hand-picked set of problems that share the same underlying pattern. The goal is not to grind hundreds of problems, but to learn the handful of patterns that unlock most of them.",
      },
      { t: "h2", text: "How to work through it" },
      {
        t: "ol",
        items: [
          "Read the concept lesson first and build the mental model before touching a problem.",
          "Attempt each problem yourself for 20–30 minutes before reading the solution.",
          "When you look at a solution, focus on **why** the approach works, not just the code.",
          "Re-solve a problem a few days later from scratch. Spaced repetition is what makes patterns stick.",
        ],
      },
      { t: "h2", text: "A realistic study plan" },
      {
        t: "table",
        head: ["Timeline", "Focus"],
        rows: [
          ["Weeks 1–2", "Complexity analysis, arrays, strings, hashing"],
          ["Weeks 3–4", "Two pointers, sliding window, stack, binary search"],
          ["Weeks 5–6", "Linked lists, trees, heaps"],
          ["Weeks 7–8", "Backtracking, graphs, dynamic programming"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Consistency beats intensity. One focused hour a day for two months will take you further than occasional weekend marathons.",
      },
    ],
  },

  "dsa/big-o-notation": {
    blocks: [
      { t: "h2", text: "Why we measure growth" },
      {
        t: "p",
        text: "Big-O notation describes how an algorithm's running time or memory grows as the input size `n` grows. It ignores hardware speed and constant factors so we can compare algorithms on their fundamental behavior rather than on the machine that ran them.",
      },
      {
        t: "p",
        text: "We care about the **worst case** and about **large inputs**. An algorithm that is fast for 10 items but unusable for 10 million items is a problem worth spotting before you ship it.",
      },
      { t: "h2", text: "The common classes" },
      {
        t: "table",
        head: ["Notation", "Name", "Example"],
        rows: [
          ["O(1)", "Constant", "Array index lookup, hash map get"],
          ["O(log n)", "Logarithmic", "Binary search"],
          ["O(n)", "Linear", "A single pass over an array"],
          ["O(n log n)", "Linearithmic", "Efficient sorting (merge, heap)"],
          ["O(n²)", "Quadratic", "Nested loops over the same array"],
          ["O(2ⁿ)", "Exponential", "Naive recursive subsets / fibonacci"],
        ],
      },
      { t: "h2", text: "Reading complexity from code" },
      {
        t: "p",
        text: "A loop over `n` elements is O(n). A loop nested inside another loop over the same input is O(n²). Halving the search space each step is O(log n).",
      },
      {
        t: "code",
        lang: "python",
        code: `# O(n) — one pass
for x in nums:
    total += x

# O(n^2) — every pair
for i in range(n):
    for j in range(n):
        check(nums[i], nums[j])`,
      },
      { t: "h2", text: "Rules of thumb" },
      {
        t: "ul",
        items: [
          "Drop constants: O(2n) is just O(n).",
          "Drop lower-order terms: O(n² + n) is O(n²).",
          "Different inputs get different variables: O(a + b), not O(n).",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Big-O hides constants, so for small inputs a 'slower' algorithm can win. It is a tool for reasoning about scale, not a stopwatch.",
      },
    ],
  },

  "dsa/space-complexity": {
    blocks: [
      { t: "h2", text: "Counting memory, not time" },
      {
        t: "p",
        text: "Space complexity measures how much **extra** memory an algorithm needs as the input grows. We usually exclude the input itself and count only the auxiliary space: the temporary arrays, hash maps, and — importantly — the recursion call stack.",
      },
      { t: "h2", text: "Where space comes from" },
      {
        t: "ul",
        items: [
          "**Auxiliary data structures** — a hash set to track seen values is O(n).",
          "**Recursion depth** — each recursive call adds a stack frame. Depth `d` costs O(d).",
          "**Output** — sometimes counted, sometimes excluded; state your assumption.",
        ],
      },
      { t: "h2", text: "In-place vs. extra space" },
      {
        t: "p",
        text: "An in-place algorithm uses O(1) extra space by mutating its input. Reversing an array by swapping ends inward is in-place. Building a new reversed array is O(n) space.",
      },
      {
        t: "code",
        lang: "python",
        code: `# O(1) space — in place
def reverse(a):
    i, j = 0, len(a) - 1
    while i < j:
        a[i], a[j] = a[j], a[i]
        i += 1; j -= 1`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Recursion trades stack space for cleaner code. A recursive DFS on a tree of height h uses O(h) space even though it allocates no arrays.",
      },
    ],
  },

  "dsa/how-to-approach-a-problem": {
    blocks: [
      { t: "h2", text: "A repeatable framework" },
      {
        t: "p",
        text: "Interviewers care as much about your process as your final code. A calm, structured approach signals seniority and prevents you from coding yourself into a corner.",
      },
      {
        t: "ol",
        items: [
          "**Understand** — restate the problem, confirm inputs/outputs, and ask about constraints and edge cases.",
          "**Examples** — walk through one or two small examples by hand, including an edge case.",
          "**Brute force** — state the naive solution and its complexity out loud. It gives you a baseline and buys thinking time.",
          "**Optimize** — look for repeated work or a data structure that gives cheaper lookups or ordering.",
          "**Code** — write it cleanly, narrating decisions as you go.",
          "**Test** — trace your code on the examples and the edge cases you found.",
        ],
      },
      { t: "h2", text: "Questions worth asking" },
      {
        t: "ul",
        items: [
          "Can the input be empty, negative, or contain duplicates?",
          "Is the array sorted? Can I sort it?",
          "How large can `n` get? That hints at the target complexity.",
          "Should I optimize for time, space, or readability?",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "If you are stuck, say what you have tried and what you observe. Interviewers often nudge you when they can see your reasoning.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// DSA — Arrays, Strings, Hashing (articles)
// ---------------------------------------------------------------------------

const dsaFoundationsArticles: Record<string, LessonContent> = {
  "dsa/arrays-fundamentals": {
    blocks: [
      { t: "h2", text: "What an array is" },
      {
        t: "p",
        text: "An array stores elements in a single contiguous block of memory. Because every element is the same size and sits next to the previous one, the computer can jump straight to element `i` with a single multiplication: `base + i * size`. That is why array indexing is O(1).",
      },
      { t: "h2", text: "Cost of each operation" },
      {
        t: "table",
        head: ["Operation", "Time", "Why"],
        rows: [
          ["Access by index", "O(1)", "Direct address arithmetic"],
          ["Update by index", "O(1)", "Write to a known address"],
          ["Search (unsorted)", "O(n)", "Must scan every element"],
          ["Insert / delete at end", "O(1)*", "Amortized for dynamic arrays"],
          ["Insert / delete in middle", "O(n)", "Shift the trailing elements"],
        ],
      },
      { t: "h2", text: "When to reach for an array" },
      {
        t: "ul",
        items: [
          "You need fast, random access by position.",
          "The data is naturally ordered and you iterate a lot.",
          "You want cache-friendly, contiguous memory for performance.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Inserting or removing from the front of an array is O(n) because everything after it shifts. If you do that often, consider a deque or linked list.",
      },
    ],
  },

  "dsa/dynamic-arrays": {
    blocks: [
      { t: "h2", text: "Growing beyond a fixed size" },
      {
        t: "p",
        text: "A fixed array has a set capacity. A dynamic array (Python's `list`, Java's `ArrayList`, C++'s `vector`) hides a fixed array underneath and reallocates a larger one when it fills up. Typically it **doubles** capacity on each resize.",
      },
      { t: "h2", text: "Why appends are O(1) amortized" },
      {
        t: "p",
        text: "Most appends just write into spare capacity — O(1). Occasionally an append triggers a full copy into a bigger buffer — O(n). But because capacity doubles, those expensive copies become exponentially rarer. Spread across all appends, the **average** cost is constant. That is what 'amortized O(1)' means.",
      },
      {
        t: "code",
        lang: "python",
        code: `nums = []
for i in range(1000):
    nums.append(i)   # amortized O(1) each`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Doubling wastes at most half the allocated memory but keeps appends fast. It is a classic time/space trade-off you will see again in hash tables.",
      },
    ],
  },

  "dsa/strings": {
    blocks: [
      { t: "h2", text: "Strings are arrays of characters" },
      {
        t: "p",
        text: "A string behaves like an immutable array of characters in most languages. Indexing is O(1), but because strings are often **immutable**, operations that look cheap can be expensive.",
      },
      { t: "h2", text: "The concatenation trap" },
      {
        t: "p",
        text: "Building a string by repeated concatenation inside a loop is O(n²): each `+` creates a brand-new string and copies everything so far. Use a list/builder and join once at the end.",
      },
      {
        t: "code",
        lang: "python",
        code: `# Bad: O(n^2)
s = ""
for c in chars:
    s += c

# Good: O(n)
s = "".join(chars)`,
      },
      { t: "h2", text: "Common string tools" },
      {
        t: "ul",
        items: [
          "**Frequency map** — count characters with a hash map or fixed-size array.",
          "**Two pointers** — compare from both ends for palindromes.",
          "**Sliding window** — track substrings with a moving range.",
        ],
      },
    ],
  },

  "dsa/hash-tables": {
    blocks: [
      { t: "h2", text: "The idea behind O(1) lookups" },
      {
        t: "p",
        text: "A hash table stores key–value pairs in an underlying array. A **hash function** turns a key into an array index. To look up a key, you hash it, jump to that slot, and read the value — no scanning required. That is how `get` and `put` reach average-case O(1).",
      },
      { t: "h2", text: "Anatomy" },
      {
        t: "ul",
        items: [
          "**Hash function** — maps a key to an integer, ideally spreading keys evenly.",
          "**Buckets** — the array slots that hold entries.",
          "**Load factor** — entries divided by capacity; when it gets high, the table resizes and rehashes.",
        ],
      },
      { t: "h2", text: "When to use one" },
      {
        t: "table",
        head: ["Need", "Use"],
        rows: [
          ["Fast membership test", "Hash set"],
          ["Count occurrences", "Hash map: value -> count"],
          ["Group items by a key", "Hash map: key -> list"],
          ["Cache computed results", "Hash map: input -> output"],
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "O(1) is the *average* case. With many collisions or a bad hash function, lookups can degrade toward O(n). Worst-case matters when an adversary controls the keys.",
      },
    ],
  },

  "dsa/collision-resolution": {
    blocks: [
      { t: "h2", text: "When two keys hash to the same slot" },
      {
        t: "p",
        text: "A hash function maps a large key space into a small array, so collisions are inevitable. Hash tables need a strategy to store multiple entries that land on the same index.",
      },
      { t: "h2", text: "Chaining" },
      {
        t: "p",
        text: "Each bucket holds a small list (or tree) of entries. On collision, you append to that bucket's list. Lookups scan only the entries in one bucket, which stays short when the load factor is low.",
      },
      { t: "h2", text: "Open addressing" },
      {
        t: "p",
        text: "Instead of lists, every entry lives directly in the array. On collision you **probe** for the next open slot — linearly, quadratically, or via a second hash. It is cache-friendly but sensitive to a high load factor.",
      },
      {
        t: "table",
        head: ["Strategy", "Pro", "Con"],
        rows: [
          ["Chaining", "Simple, tolerates high load", "Extra pointers, cache misses"],
          ["Open addressing", "Compact, cache-friendly", "Clustering, needs low load factor"],
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Either way, resizing (rehashing into a bigger array) keeps the load factor low so operations stay near O(1).",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// DSA — Pattern articles
// ---------------------------------------------------------------------------

const dsaPatternArticles: Record<string, LessonContent> = {
  "dsa/two-pointers-pattern": {
    blocks: [
      { t: "h2", text: "The pattern" },
      {
        t: "p",
        text: "The two pointers technique uses two indices that move through a sequence, usually to replace a nested loop with a single pass. It turns many O(n²) brute-force scans into O(n).",
      },
      { t: "h2", text: "Two common shapes" },
      {
        t: "ul",
        items: [
          "**Opposite ends** — start one pointer at the left and one at the right, moving them toward each other. Great for sorted arrays and palindromes.",
          "**Same direction (slow/fast)** — both start at the left; one advances only when a condition is met. Great for in-place filtering and cycle detection.",
        ],
      },
      { t: "h2", text: "Opposite-ends template" },
      {
        t: "code",
        lang: "python",
        code: `def two_sum_sorted(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target:
            return [lo, hi]
        if s < target:
            lo += 1      # need a bigger sum
        else:
            hi -= 1      # need a smaller sum
    return []`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "The pattern usually needs a **sorted** array (or some monotonic property) so that moving a pointer predictably increases or decreases the value you track.",
      },
    ],
  },

  "dsa/sliding-window-pattern": {
    blocks: [
      { t: "h2", text: "The pattern" },
      {
        t: "p",
        text: "A sliding window maintains a contiguous range `[left, right]` over an array or string and slides it forward, expanding on the right and shrinking on the left. It answers 'best/longest/shortest contiguous subrange' questions in O(n).",
      },
      { t: "h2", text: "Fixed vs. variable windows" },
      {
        t: "ul",
        items: [
          "**Fixed size** — the window is always `k` wide; slide it one step and update the running total.",
          "**Variable size** — grow the window until it breaks a constraint, then shrink from the left until it is valid again.",
        ],
      },
      { t: "h2", text: "Variable-window template" },
      {
        t: "code",
        lang: "python",
        code: `def longest_valid(s):
    left = 0
    best = 0
    counts = {}
    for right, ch in enumerate(s):
        counts[ch] = counts.get(ch, 0) + 1
        while not is_valid(counts):   # shrink
            counts[s[left]] -= 1
            left += 1
        best = max(best, right - left + 1)
    return best`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Each element enters the window once and leaves at most once, so even with the inner while loop the total work is O(n).",
      },
    ],
  },

  "dsa/stack-fundamentals": {
    blocks: [
      { t: "h2", text: "Last in, first out" },
      {
        t: "p",
        text: "A stack is a LIFO container: the last item pushed is the first one popped. Think of a stack of plates. Both `push` and `pop` are O(1), and in most languages a dynamic array or linked list serves as the backing store.",
      },
      { t: "h2", text: "Where stacks shine" },
      {
        t: "ul",
        items: [
          "**Matching pairs** — parentheses, brackets, and tags.",
          "**Undo / history** — the most recent action reverses first.",
          "**Monotonic stack** — next-greater / next-smaller element problems.",
          "**Recursion** — the call stack is a stack; any recursion can be rewritten iteratively with one.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: `stack = []
stack.append(1)   # push
stack.append(2)
stack[-1]         # peek -> 2
stack.pop()       # -> 2`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "When a problem involves 'the most recent unmatched thing' or 'the next greater element', a stack is usually the answer.",
      },
    ],
  },

  "dsa/binary-search-explained": {
    blocks: [
      { t: "h2", text: "Halving the search space" },
      {
        t: "p",
        text: "Binary search finds a target in a **sorted** array by repeatedly checking the middle element and discarding the half that cannot contain the target. Each step halves the remaining range, giving O(log n).",
      },
      { t: "h2", text: "The canonical template" },
      {
        t: "code",
        lang: "python",
        code: `def binary_search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
      },
      { t: "h2", text: "Beyond sorted arrays" },
      {
        t: "p",
        text: "Binary search applies to any **monotonic** decision function. 'Binary search on the answer' picks a candidate value, asks a yes/no feasibility question, and narrows the range — used in problems like Koko Eating Bananas and minimum capacity questions.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Compute `mid` as `lo + (hi - lo) // 2` in languages where `lo + hi` can overflow. Off-by-one errors in the bounds are the most common bug — decide up front whether `hi` is inclusive.",
      },
    ],
  },

  "dsa/linked-list-fundamentals": {
    blocks: [
      { t: "h2", text: "Nodes connected by pointers" },
      {
        t: "p",
        text: "A linked list stores each element in a node that holds a value and a pointer to the next node. Unlike an array, the nodes are not contiguous in memory, so there is no index arithmetic — you follow pointers.",
      },
      { t: "h2", text: "Trade-offs vs. arrays" },
      {
        t: "table",
        head: ["Operation", "Array", "Linked List"],
        rows: [
          ["Access by index", "O(1)", "O(n)"],
          ["Insert / delete at head", "O(n)", "O(1)"],
          ["Insert / delete after a node", "O(n)", "O(1)"],
          ["Memory locality", "Contiguous", "Scattered"],
        ],
      },
      { t: "h2", text: "The dummy-head trick" },
      {
        t: "p",
        text: "Many list problems get simpler if you allocate a dummy node before the real head. It removes special-casing for the empty list or for deleting the first element.",
      },
      {
        t: "code",
        lang: "python",
        code: `dummy = ListNode(0, head)
prev = dummy
# ... rewire prev.next ...
return dummy.next`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "Slow/fast pointers detect cycles and find the middle node in one pass — a pattern worth memorizing.",
      },
    ],
  },

  "dsa/binary-trees": {
    blocks: [
      { t: "h2", text: "Structure" },
      {
        t: "p",
        text: "A binary tree is a set of nodes where each node has up to two children, called left and right. There are no cycles, and every node (except the root) has exactly one parent. Trees model hierarchy: file systems, org charts, expression parsing.",
      },
      { t: "h2", text: "The four traversals" },
      {
        t: "ul",
        items: [
          "**Preorder** (node, left, right) — copy or serialize a tree.",
          "**Inorder** (left, node, right) — visits a BST in sorted order.",
          "**Postorder** (left, right, node) — delete a tree or evaluate expressions.",
          "**Level order** (BFS) — process the tree layer by layer with a queue.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: `def inorder(node, out):
    if not node:
        return
    inorder(node.left, out)
    out.append(node.val)
    inorder(node.right, out)`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Depth-first traversals are naturally recursive; level-order uses an explicit queue. Recursion depth equals the tree height, so a skewed tree costs O(n) stack space.",
      },
    ],
  },

  "dsa/binary-search-trees": {
    blocks: [
      { t: "h2", text: "An ordering invariant" },
      {
        t: "p",
        text: "A binary search tree adds a rule to the binary tree: for every node, all values in its left subtree are smaller and all values in its right subtree are larger. That invariant lets you search, insert, and delete by walking down one path.",
      },
      { t: "h2", text: "Cost depends on balance" },
      {
        t: "table",
        head: ["Case", "Height", "Search"],
        rows: [
          ["Balanced", "O(log n)", "O(log n)"],
          ["Degenerate (sorted inserts)", "O(n)", "O(n)"],
        ],
      },
      {
        t: "p",
        text: "Self-balancing variants (AVL, red-black trees) rotate nodes on insertion to keep the height at O(log n), guaranteeing fast operations regardless of insertion order.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "An **inorder** traversal of a BST yields values in sorted order. Many BST problems reduce to reasoning about that sorted sequence.",
      },
    ],
  },

  "dsa/heaps-explained": {
    blocks: [
      { t: "h2", text: "A tree for the extreme element" },
      {
        t: "p",
        text: "A binary heap is a complete binary tree stored in an array, maintaining the heap property: in a **min-heap**, every parent is smaller than its children, so the smallest element is always at the root. It gives you O(1) access to the min (or max) and O(log n) insert and remove.",
      },
      { t: "h2", text: "Operations" },
      {
        t: "table",
        head: ["Operation", "Time"],
        rows: [
          ["Peek min/max", "O(1)"],
          ["Push", "O(log n)"],
          ["Pop min/max", "O(log n)"],
          ["Build heap from n items", "O(n)"],
        ],
      },
      { t: "h2", text: "When to use it" },
      {
        t: "ul",
        items: [
          "**Top-K** problems — keep a heap of size k.",
          "**Streaming medians** — two heaps balanced against each other.",
          "**Scheduling / Dijkstra** — always pull the next-best element.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: `import heapq
h = []
heapq.heappush(h, 3)
heapq.heappush(h, 1)
heapq.heappop(h)   # -> 1 (min-heap)`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Python's heapq is a min-heap. For a max-heap, push negated values or use tuples with a negated key.",
      },
    ],
  },

  "dsa/backtracking-pattern": {
    blocks: [
      { t: "h2", text: "Search with undo" },
      {
        t: "p",
        text: "Backtracking builds a solution incrementally and abandons a path (backtracks) the moment it cannot lead to a valid answer. It is a structured, depth-first exploration of the space of choices — the engine behind permutations, subsets, combinations, and constraint puzzles.",
      },
      { t: "h2", text: "The template" },
      {
        t: "code",
        lang: "python",
        code: `def backtrack(path, choices):
    if is_solution(path):
        results.append(path[:])   # copy!
        return
    for choice in choices:
        if not is_valid(choice, path):
            continue
        path.append(choice)       # choose
        backtrack(path, next_choices(choice))
        path.pop()                # un-choose`,
      },
      { t: "h2", text: "Making it fast" },
      {
        t: "ul",
        items: [
          "**Prune early** — reject invalid partial solutions before recursing.",
          "**Order choices** — try promising branches first.",
          "**Track state cheaply** — use sets or bitmasks instead of re-scanning.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Always append a **copy** of the path to your results. Appending the same mutable list means every result points at the final, emptied path.",
      },
    ],
  },

  "dsa/graph-representations": {
    blocks: [
      { t: "h2", text: "Two ways to store a graph" },
      {
        t: "p",
        text: "A graph is a set of vertices connected by edges. How you store those edges shapes which operations are cheap.",
      },
      {
        t: "table",
        head: ["Representation", "Space", "Edge lookup", "Neighbors"],
        rows: [
          ["Adjacency list", "O(V + E)", "O(degree)", "Fast to iterate"],
          ["Adjacency matrix", "O(V²)", "O(1)", "O(V) to iterate"],
        ],
      },
      {
        t: "p",
        text: "Most interview graphs are **sparse** (few edges relative to vertices), so the adjacency list is the default. Use a matrix only when the graph is dense or you need constant-time edge checks.",
      },
      {
        t: "code",
        lang: "python",
        code: `from collections import defaultdict
graph = defaultdict(list)
for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)   # omit for a directed graph`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Grids are implicit graphs: each cell is a vertex and its up/down/left/right neighbors are edges. You rarely build an explicit structure for them.",
      },
    ],
  },

  "dsa/bfs-dfs": {
    blocks: [
      { t: "h2", text: "Two ways to explore" },
      {
        t: "p",
        text: "Breadth-first search (BFS) explores level by level using a queue; depth-first search (DFS) plunges down one path as far as possible using recursion or a stack. Both visit every vertex and edge once: O(V + E).",
      },
      { t: "h2", text: "Which to choose" },
      {
        t: "ul",
        items: [
          "**BFS** — shortest path in an unweighted graph, level-order processing.",
          "**DFS** — connectivity, cycle detection, topological sort, exploring all paths.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: `from collections import deque

def bfs(graph, start):
    seen = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nxt in graph[node]:
            if nxt not in seen:
                seen.add(nxt)
                q.append(nxt)`,
      },
      {
        t: "callout",
        variant: "warn",
        text: "Mark a node as visited when you **enqueue** it, not when you dequeue it. Otherwise the same node can be added to the queue many times.",
      },
    ],
  },

  "dsa/intro-to-dp": {
    blocks: [
      { t: "h2", text: "Remember, don't recompute" },
      {
        t: "p",
        text: "Dynamic programming solves problems that break into overlapping subproblems with optimal substructure. Instead of recomputing the same subproblem repeatedly, you solve each one once and store the result.",
      },
      { t: "h2", text: "Two styles" },
      {
        t: "ul",
        items: [
          "**Top-down (memoization)** — write the natural recursion, then cache results by argument.",
          "**Bottom-up (tabulation)** — fill a table from the smallest subproblems up to the answer.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: `from functools import lru_cache

@lru_cache(None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`,
      },
      { t: "h2", text: "How to spot DP" },
      {
        t: "ol",
        items: [
          "The problem asks for a count, a max/min, or whether something is possible.",
          "A greedy choice does not obviously work.",
          "You can define the answer in terms of answers to smaller inputs.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Always write the recurrence relation before you code. Define the state, the transition, and the base cases in plain words first.",
      },
    ],
  },

  "dsa/1d-dp": {
    blocks: [
      { t: "h2", text: "One dimension of state" },
      {
        t: "p",
        text: "Many DP problems have a single varying parameter — usually an index into an array. The answer at position `i` depends on a constant number of earlier positions, so you can often reduce the table to a couple of rolling variables.",
      },
      { t: "h2", text: "House Robber in one line of state" },
      {
        t: "code",
        lang: "python",
        code: `def rob(nums):
    prev, cur = 0, 0
    for x in nums:
        prev, cur = cur, max(cur, prev + x)
    return cur`,
      },
      { t: "h2", text: "Recognizing the shape" },
      {
        t: "ul",
        items: [
          "State: `dp[i]` = best answer considering the first `i` elements.",
          "Transition: `dp[i]` from `dp[i-1]` and maybe `dp[i-2]`.",
          "Space: collapse the array to O(1) when only recent states matter.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Climbing Stairs, House Robber, and Maximum Subarray are all 1D DP in disguise — the same skeleton with different transitions.",
      },
    ],
  },
};

export const LESSON_CONTENT: Record<string, LessonContent> = {
  ...dsaGettingStarted,
  ...dsaFoundationsArticles,
  ...dsaPatternArticles,
  ...DSA_PROBLEMS,
  ...EXTRA_CONTENT,
};

export function getLessonContent(
  course: string,
  slug: string
): LessonContent | undefined {
  return LESSON_CONTENT[`${course}/${slug}`];
}
