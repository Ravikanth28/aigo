// Authored DSA concept/article lesson content. All prose is original and written
// for this project (no text copied from any external source). Keyed by
// `${course}/${lessonSlug}` and merged into LESSON_CONTENT in lesson-content.ts.

import type { LessonContent } from "@/lib/lesson-content";

export const DSA_ARTICLES: Record<string, LessonContent> = {
  // -------------------------------------------------------------------------
  // Welcome
  // -------------------------------------------------------------------------
  "dsa/how-to-study-dsa": {
    blocks: [
      { t: "h2", text: "Study for retrieval, not recognition" },
      {
        t: "p",
        text: "Most people study data structures and algorithms by re-reading solutions until they *look* familiar. Recognition is a trap: a solution you can follow line by line is not one you can reproduce under pressure. The goal is **retrieval** — being able to reconstruct the idea from a blank page. Everything below is designed to build that.",
      },
      { t: "h2", text: "A weekly loop that works" },
      {
        t: "ol",
        items: [
          "**Learn the pattern first.** Read the concept lesson before touching problems. Know what the pattern is *for* and what its invariant is.",
          "**Solve 3-5 problems in that pattern back to back.** Repetition within a pattern is where the wiring happens.",
          "**Re-derive, don't re-read.** A day later, close the solution and rebuild it from memory. If you get stuck, note exactly where.",
          "**Space it out.** Revisit each pattern after 1 day, then 3 days, then a week. Spaced repetition beats cramming for long-term recall.",
        ],
      },
      { t: "h2", text: "How long to struggle before looking" },
      {
        t: "p",
        text: "Give yourself a fixed budget — 20 to 40 minutes — of genuine effort per new problem. Productive struggle is where learning happens, but grinding for hours past the point of progress just teaches frustration. When the timer runs out, read the solution, understand *why* it works, then close it and re-implement from scratch.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Keep a one-line log per problem: the pattern, the key insight, and the mistake you made. Reviewing that log is the single highest-leverage thing you can do before an interview.",
      },
      { t: "h2", text: "Depth over breadth" },
      {
        t: "p",
        text: "Grinding 500 random problems builds far less skill than deeply understanding 150 that cover every core pattern. This roadmap is ordered so each section reinforces the last. Follow the order, and resist the urge to skip ahead to flashy topics before the fundamentals are automatic.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Coding Interview Strategy
  // -------------------------------------------------------------------------
  "dsa/anatomy-of-a-coding-interview": {
    blocks: [
      { t: "h2", text: "What actually happens in the room" },
      {
        t: "p",
        text: "A typical coding interview is 45 minutes. Only a fraction of that is spent typing. The interviewer is evaluating four things at once: whether you understand the problem, whether you can design a correct approach, whether you can implement it cleanly, and whether you are someone they'd want to work with. Strong candidates manage all four deliberately.",
      },
      { t: "h2", text: "A rough time budget" },
      {
        t: "table",
        head: ["Phase", "Minutes", "What you're doing"],
        rows: [
          ["Understand", "5-8", "Clarify requirements, constraints, examples"],
          ["Design", "8-12", "Discuss approaches, pick one, state complexity"],
          ["Implement", "15-20", "Write clean, working code while narrating"],
          ["Verify", "5-8", "Trace an example, handle edge cases"],
        ],
      },
      {
        t: "p",
        text: "The single most common mistake is jumping straight to code. Interviewers consistently rank candidates who spend the first ten minutes understanding and designing above those who start typing immediately and get stuck.",
      },
      { t: "h2", text: "Signals that move the needle" },
      {
        t: "ul",
        items: [
          "**Structured thinking** — you break the problem down instead of pattern-matching randomly.",
          "**Communication** — the interviewer never has to guess what you're doing.",
          "**Correctness under scrutiny** — you test your own code before they ask.",
          "**Composure** — when you hit a bug, you debug calmly rather than freezing.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "You do not need the optimal solution to pass. A clearly-communicated working solution with honest complexity analysis beats a half-finished 'clever' one almost every time.",
      },
    ],
  },
  "dsa/clarifying-questions": {
    blocks: [
      { t: "h2", text: "Why questions come first" },
      {
        t: "p",
        text: "Interview prompts are deliberately underspecified. The interviewer wants to see whether you'll surface the ambiguity or charge ahead on assumptions. Asking the right clarifying questions is not stalling — it's the first thing a good engineer does, and it directly shapes your solution.",
      },
      { t: "h2", text: "A checklist you can reuse" },
      {
        t: "ul",
        items: [
          "**Input shape & size** — how large can the input get? This decides whether O(n^2) is acceptable.",
          "**Value ranges** — can numbers be negative? Zero? Are strings ASCII or Unicode?",
          "**Duplicates** — can the input contain repeats, and does that change the answer?",
          "**Empty & edge inputs** — what should an empty array or null input return?",
          "**Output format** — return a value, modify in place, or print? Any specific ordering?",
          "**Guarantees** — is the input sorted? Is a valid answer guaranteed to exist?",
        ],
      },
      { t: "h2", text: "Turn answers into constraints" },
      {
        t: "p",
        text: "Every answer should tighten your plan. If the interviewer says the array has up to a million elements, you've just ruled out anything quadratic. If they say values fit in a byte, counting sort is suddenly on the table. Say this out loud: it shows you connect constraints to design.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Write the confirmed constraints in a corner of the editor. They anchor your design and give you a checklist to test against later.",
      },
    ],
  },
  "dsa/communicating-your-thought-process": {
    blocks: [
      { t: "h2", text: "Think out loud, on purpose" },
      {
        t: "p",
        text: "The interviewer can only score what they can hear. Silent brilliance reads as being stuck. Narrating your reasoning turns your thinking into evidence — and often the act of explaining surfaces the bug or the better approach yourself.",
      },
      { t: "h2", text: "A narration script" },
      {
        t: "ol",
        items: [
          "**Restate the problem** in your own words to confirm understanding.",
          "**Name the brute force** first: 'The naive approach is X, which is O(n^2) because...'",
          "**Propose the optimization**: 'I can do better with a hash map because lookups become O(1).'",
          "**Announce your plan** before coding: 'I'll iterate once, storing seen values, and check complements.'",
          "**Flag decisions** as you type: 'I'm using a dummy head here to simplify the edge case.'",
        ],
      },
      { t: "h2", text: "When you get stuck" },
      {
        t: "p",
        text: "Being stuck is normal and interviewers expect it. Narrate the stuck-ness productively: 'I'm not seeing how to avoid the nested loop — let me think about what work I'm repeating.' That invites a hint and shows resilience. Freezing silently invites neither.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Don't narrate every keystroke ('now I type a for loop'). Narrate decisions and reasoning, not syntax. Aim for the level of a code review, not a screen reader.",
      },
    ],
  },
  "dsa/testing-and-edge-cases": {
    blocks: [
      { t: "h2", text: "Test before they ask" },
      {
        t: "p",
        text: "Finishing the code is not finishing the problem. Proactively tracing an example and checking edge cases is one of the clearest positive signals you can send. It says you'd catch your own bugs in production, not ship them.",
      },
      { t: "h2", text: "The edge cases that matter" },
      {
        t: "ul",
        items: [
          "**Empty input** — [] or \"\" or a null pointer.",
          "**Single element** — many pointer and window bugs only appear at size 1.",
          "**All-same or all-distinct** values.",
          "**Minimum and maximum** values — integer overflow, boundary indices.",
          "**Already-sorted and reverse-sorted** for anything order-sensitive.",
          "**The target not existing** — searches and lookups that fail.",
        ],
      },
      { t: "h2", text: "Trace, don't hope" },
      {
        t: "p",
        text: "Pick a small concrete example and walk your code line by line, tracking variables in a table on the board. This is far more convincing than saying 'I think this works.' If you spot a bug mid-trace, fixing it calmly is a strong signal in itself.",
      },
      {
        t: "code",
        lang: "python",
        code: "# Trace two_sum([2, 7, 11], target=9)\n# i=0 x=2  need 7  seen={}      -> store 2:0\n# i=1 x=7  need 2  seen={2:0}   -> found! return [0, 1]\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "If time is short, say: 'Given more time I'd add tests for empty input and duplicates.' Naming the cases still earns credit even if you can't run them.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Programming Fundamentals
  // -------------------------------------------------------------------------
  "dsa/variables-and-data-types": {
    blocks: [
      { t: "h2", text: "Variables are named boxes" },
      {
        t: "p",
        text: "A variable binds a name to a value stored somewhere in memory. The **type** of that value determines how many bytes it occupies, what operations are legal, and how it behaves when copied. Getting comfortable with types is the foundation for reasoning about correctness and complexity.",
      },
      { t: "h2", text: "The core primitive types" },
      {
        t: "table",
        head: ["Type", "Holds", "Typical size"],
        rows: [
          ["Integer", "Whole numbers", "32 or 64 bits"],
          ["Float/Double", "Real numbers (approx.)", "32 or 64 bits"],
          ["Boolean", "true / false", "1 bit logically"],
          ["Character", "A single symbol", "1-4 bytes"],
        ],
      },
      { t: "h2", text: "Static vs dynamic typing" },
      {
        t: "p",
        text: "In statically-typed languages (Java, C++, Go) a variable's type is fixed at compile time. In dynamically-typed languages (Python, JavaScript) a name can be rebound to any type at runtime. Dynamic typing is convenient but shifts type errors from compile time to runtime, so tests matter more.",
      },
      {
        t: "code",
        lang: "python",
        code: "x = 42        # int\nx = \"hello\"   # now a str — legal in Python, illegal in Java\n\n# Watch for overflow in fixed-width languages:\n# a 32-bit int maxes out at 2,147,483,647\n",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Floating-point numbers are approximate. 0.1 + 0.2 does not equal 0.3 exactly. Never compare floats with ==; compare within a small tolerance.",
      },
    ],
  },
  "dsa/operators-and-expressions": {
    blocks: [
      { t: "h2", text: "Expressions produce values" },
      {
        t: "p",
        text: "An expression is any combination of values and operators that evaluates to a single result. Understanding operator categories and their precedence prevents a whole class of subtle bugs.",
      },
      { t: "h2", text: "Operator categories" },
      {
        t: "ul",
        items: [
          "**Arithmetic**: + - * / % (modulo) and often ** or pow for exponentiation.",
          "**Comparison**: == != < <= > >= — produce booleans.",
          "**Logical**: && || ! (and/or/not) — combine booleans, usually short-circuit.",
          "**Bitwise**: & | ^ ~ << >> — operate on the binary representation.",
        ],
      },
      { t: "h2", text: "Precedence and short-circuiting" },
      {
        t: "p",
        text: "Operators bind with different strengths: multiplication before addition, comparison before logical AND. When in doubt, add parentheses — clarity beats cleverness. Logical operators **short-circuit**: in `a && b`, if `a` is false, `b` is never evaluated. This is both a performance tool and a safety guard.",
      },
      {
        t: "code",
        lang: "python",
        code: "# Short-circuit guards against errors:\nif node is not None and node.value == target:\n    ...\n# If node is None, the second check is skipped — no crash.\n\n# Integer vs float division differ across languages:\n7 // 2   # 3  (floor division in Python)\n7 / 2    # 3.5\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "Modulo with negative operands differs by language: Python returns a result with the divisor's sign, C and Java with the dividend's. This bites people in hashing and cyclic-index problems.",
      },
    ],
  },
  "dsa/conditionals": {
    blocks: [
      { t: "h2", text: "Branching on truth" },
      {
        t: "p",
        text: "Conditionals let a program choose different paths based on a boolean test. Clean branching is mostly about ordering your checks well and keeping each branch's job obvious.",
      },
      {
        t: "code",
        lang: "python",
        code: "if score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n",
      },
      { t: "h2", text: "Guard clauses beat deep nesting" },
      {
        t: "p",
        text: "Handling invalid or trivial cases early — and returning — keeps the main logic flat and readable. Deeply nested if/else pyramids are hard to follow and easy to break.",
      },
      {
        t: "code",
        lang: "python",
        code: "# Guard clauses: handle edge cases up front\ndef process(items):\n    if not items:\n        return 0            # early exit\n    if len(items) == 1:\n        return items[0]\n    # main logic runs on the clean, general case\n    return sum(items)\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "In interviews, write your edge-case guards first. It reassures the interviewer you've thought about empty and single-element inputs before the happy path.",
      },
    ],
  },
  "dsa/loops": {
    blocks: [
      { t: "h2", text: "Repetition, controlled" },
      {
        t: "p",
        text: "Loops repeat work until a condition is met. Because most algorithmic cost lives inside loops, how you write them directly determines time complexity. A `for` loop is best when the number of iterations is known; a `while` loop when you repeat until some condition flips.",
      },
      {
        t: "code",
        lang: "python",
        code: "# for: known range\nfor i in range(n):\n    ...\n\n# while: condition-driven (e.g., two pointers)\nlo, hi = 0, n - 1\nwhile lo < hi:\n    lo += 1\n    hi -= 1\n",
      },
      { t: "h2", text: "Nested loops multiply cost" },
      {
        t: "p",
        text: "A loop inside a loop usually means O(n^2). That is fine for small inputs but a red flag when n is large. Much of algorithm design is about replacing a nested loop with a hash map, sorting step, or two-pointer scan to drop back to O(n) or O(n log n).",
      },
      { t: "h2", text: "Break, continue, and off-by-one" },
      {
        t: "ul",
        items: [
          "**break** exits the loop entirely — useful once you've found what you need.",
          "**continue** skips to the next iteration.",
          "**Off-by-one errors** cluster around loop bounds: is it `< n` or `<= n`? Trace the first and last iteration to be sure.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Never modify a collection's size while iterating over it — you'll skip elements or crash. Iterate over a copy, or build a new collection instead.",
      },
    ],
  },
  "dsa/functions": {
    blocks: [
      { t: "h2", text: "Functions package logic" },
      {
        t: "p",
        text: "A function takes inputs (parameters), does work, and returns an output. Good functions do one thing, have a descriptive name, and are easy to test in isolation. In interviews, factoring a helper out of a messy block often reveals the structure of the solution.",
      },
      { t: "h2", text: "Scope: where names live" },
      {
        t: "p",
        text: "**Scope** is the region of code where a name is visible. Variables defined inside a function are local — they vanish when the function returns. This isolation is what lets recursion work: each call gets its own copy of the locals.",
      },
      {
        t: "code",
        lang: "python",
        code: "def outer():\n    x = 1            # local to outer\n    def inner():\n        return x + 1  # inner can read outer's x (closure)\n    return inner()\n\n# x is not visible out here — that's scope doing its job.\n",
      },
      { t: "h2", text: "The call stack" },
      {
        t: "p",
        text: "Every function call pushes a frame onto the **call stack** holding its parameters and locals; returning pops it. This is why deep recursion can overflow the stack, and why recursive space complexity is proportional to recursion depth.",
      },
      {
        t: "callout",
        variant: "note",
        text: "Pure functions — output depends only on inputs, no side effects — are the easiest to reason about and test. Prefer them when you can.",
      },
    ],
  },
  "dsa/references-vs-values": {
    blocks: [
      { t: "h2", text: "The bug behind a thousand bugs" },
      {
        t: "p",
        text: "When you assign or pass a variable, does the receiver get a **copy** of the value or a **reference** to the same object? This one distinction explains an enormous share of confusing bugs — mutations that 'leak' into places you didn't expect.",
      },
      { t: "h2", text: "Value vs reference semantics" },
      {
        t: "p",
        text: "Primitives (numbers, booleans) are typically copied by value: changing one copy doesn't touch the other. Objects, arrays, and lists are usually handled by reference: two names can point at the *same* underlying data, so a change through one is visible through the other.",
      },
      {
        t: "code",
        lang: "python",
        code: "a = [1, 2, 3]\nb = a          # b references the SAME list\nb.append(4)\nprint(a)       # [1, 2, 3, 4]  — surprised?\n\nc = a[:]       # shallow copy — a new list\nc.append(5)\nprint(a)       # unchanged\n",
      },
      { t: "h2", text: "Shallow vs deep copies" },
      {
        t: "p",
        text: "A **shallow** copy duplicates the outer container but shares the inner objects. A **deep** copy duplicates everything recursively. When you have a list of lists (like a grid), a shallow copy of the outer list still shares the rows — a classic source of matrix-mutation bugs.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Initializing a grid with [[0] * n] * m creates m references to ONE row. Writing grid[0][0] changes every row. Build rows in a loop instead.",
      },
    ],
  },
  "dsa/input-output-basics": {
    blocks: [
      { t: "h2", text: "Getting data in and out" },
      {
        t: "p",
        text: "On coding platforms and in some interviews you'll read input from standard input and print results to standard output. The parsing itself is trivial once you've seen it, but silly I/O bugs waste real time, so it's worth having the patterns memorized.",
      },
      {
        t: "code",
        lang: "python",
        code: "import sys\n\n# Read all lines at once (fast for large inputs)\ndata = sys.stdin.read().split()\nn = int(data[0])\nnums = list(map(int, data[1:1 + n]))\n\nprint(sum(nums))   # write the answer\n",
      },
      { t: "h2", text: "Parse defensively" },
      {
        t: "ul",
        items: [
          "**Strip whitespace** — trailing newlines and spaces break naive parses.",
          "**Split on the right delimiter** — commas, spaces, or tabs.",
          "**Convert types explicitly** — input arrives as strings; cast to int/float when needed.",
        ],
      },
      { t: "h2", text: "Buffered reading for speed" },
      {
        t: "p",
        text: "For very large inputs, reading line by line with slow input calls can dominate your runtime. Reading the whole stream once and splitting is dramatically faster — a common reason an otherwise-correct solution times out.",
      },
      {
        t: "callout",
        variant: "note",
        text: "In most on-site interviews you won't parse stdin at all — you implement a function against given arguments. Know both, but confirm the format with your interviewer.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Big O Notation
  // -------------------------------------------------------------------------
  "dsa/common-complexity-classes": {
    blocks: [
      { t: "h2", text: "A vocabulary for growth" },
      {
        t: "p",
        text: "Big O describes how an algorithm's cost grows as the input grows. It ignores constants and low-order terms because, for large inputs, the dominant term is all that matters. Knowing the handful of common classes by heart lets you judge a solution's viability in seconds.",
      },
      { t: "h2", text: "The classes you'll meet daily" },
      {
        t: "table",
        head: ["Class", "Name", "Example"],
        rows: [
          ["O(1)", "Constant", "Hash-map lookup, array index"],
          ["O(log n)", "Logarithmic", "Binary search"],
          ["O(n)", "Linear", "Single pass over an array"],
          ["O(n log n)", "Linearithmic", "Efficient sorting"],
          ["O(n^2)", "Quadratic", "Nested loops over the input"],
          ["O(2^n)", "Exponential", "Naive subset enumeration"],
          ["O(n!)", "Factorial", "Generating all permutations"],
        ],
      },
      { t: "h2", text: "Build intuition for scale" },
      {
        t: "p",
        text: "At n = 1,000,000, an O(n) algorithm does a million steps — instant. O(n log n) does about 20 million — still fine. O(n^2) does a trillion — hopeless. This is why clarifying the input size early tells you exactly which complexity class you must hit.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "A rough rule of thumb: roughly 10^8 simple operations run in about a second. Compare your algorithm's operation count to that to predict whether it will pass.",
      },
    ],
  },
  "dsa/analyzing-loops": {
    blocks: [
      { t: "h2", text: "Count the work, not the lines" },
      {
        t: "p",
        text: "To find an algorithm's complexity, count how many times the innermost work runs as a function of n. Sequential blocks add; nested loops multiply. Constants and lower-order terms drop out at the end.",
      },
      { t: "h2", text: "Worked patterns" },
      {
        t: "code",
        lang: "python",
        code: "# O(n): runs n times\nfor i in range(n):\n    work()\n\n# O(n^2): n * n\nfor i in range(n):\n    for j in range(n):\n        work()\n\n# O(n log n): outer n, inner halves each time\nfor i in range(n):\n    j = n\n    while j > 1:\n        j //= 2\n",
      },
      { t: "h2", text: "The dependent-inner-loop trap" },
      {
        t: "p",
        text: "When the inner loop's bound depends on the outer index, don't assume O(n^2). A loop where the inner runs i times sums 1 + 2 + ... + n = n(n+1)/2, which is still O(n^2). But a loop that halves the remaining range each step is O(log n). Sum the series to be sure rather than eyeballing the nesting.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "A hidden cost inside the loop counts too. Calling a String concatenation or an O(n) 'in' check inside an O(n) loop quietly makes the whole thing O(n^2).",
      },
    ],
  },
  "dsa/amortized-analysis": {
    blocks: [
      { t: "h2", text: "Averaging cost over a sequence" },
      {
        t: "p",
        text: "Some operations are usually cheap but occasionally expensive. Amortized analysis asks: across a long run of operations, what is the average cost per operation? It's the honest way to describe structures like dynamic arrays whose worst single step is misleading.",
      },
      { t: "h2", text: "The dynamic-array example" },
      {
        t: "p",
        text: "Appending to a dynamic array is O(1) — until it fills up and must resize, copying every element, an O(n) step. But resizes double the capacity, so they happen rarely. Spread across n appends, the total copying work is at most 2n, giving an **amortized O(1)** per append.",
      },
      {
        t: "code",
        lang: "text",
        code: "Appends:  1 2 3 4 5 6 7 8 9 ...\nResize?   -   x   -   x   -   -   -   x  (at powers of 2)\nCopy cost 0 1 0 2 0 0 0 4 ...   total < 2n over n appends\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "Amortized O(1) is not the same as worst-case O(1). A single append can still be O(n). If your problem needs a hard per-operation bound (e.g. real-time systems), amortized guarantees may not be enough.",
      },
    ],
  },
  "dsa/best-worst-average-case": {
    blocks: [
      { t: "h2", text: "One algorithm, three stories" },
      {
        t: "p",
        text: "An algorithm's running time can depend on the specific input, not just its size. We describe this with three cases: the best case (luckiest input), the worst case (unluckiest), and the average case (expected over typical inputs).",
      },
      { t: "h2", text: "Quicksort as the classic example" },
      {
        t: "table",
        head: ["Case", "Quicksort", "When it happens"],
        rows: [
          ["Best", "O(n log n)", "Pivot splits evenly every time"],
          ["Average", "O(n log n)", "Random pivots, typical data"],
          ["Worst", "O(n^2)", "Pivot is always the min or max"],
        ],
      },
      { t: "h2", text: "Which one should you quote?" },
      {
        t: "p",
        text: "In interviews, state the worst case by default — it's the guarantee. Mention the average case when it differs and matters in practice (as with quicksort or hash tables). Best case is rarely useful except to show you understand the spread.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Hash-table lookups are average O(1) but worst-case O(n) under pathological collisions. Naming both signals depth without over-explaining.",
      },
    ],
  },
  "dsa/recursion-complexity": {
    blocks: [
      { t: "h2", text: "Complexity of things that call themselves" },
      {
        t: "p",
        text: "For recursive algorithms, cost is captured by a recurrence relation: the work at this level plus the cost of the recursive calls. Solving the recurrence — or recognizing it — gives the Big O.",
      },
      { t: "h2", text: "Two mental tools" },
      {
        t: "ul",
        items: [
          "**Recursion tree** — draw the calls as a tree; sum the work per level, then multiply by the number of levels.",
          "**Master theorem** — for divide-and-conquer of the form T(n) = a·T(n/b) + f(n), it gives the answer directly.",
        ],
      },
      {
        t: "code",
        lang: "text",
        code: "Merge sort:  T(n) = 2 T(n/2) + O(n)\n  levels: log n     work per level: O(n)\n  total:  O(n log n)\n\nNaive Fibonacci: T(n) = T(n-1) + T(n-2) + O(1)\n  branching tree of depth n  ->  O(2^n)\n",
      },
      { t: "h2", text: "Don't forget the stack" },
      {
        t: "p",
        text: "Recursive space complexity is the maximum depth of the call stack, since each pending call holds a frame. A linear recursion n deep uses O(n) space even if it does O(1) work per call — a detail interviewers love to probe.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Naive recursion often repeats identical subproblems (Fibonacci recomputes the same values exponentially). Memoization collapses that to O(n) — the doorway to dynamic programming.",
      },
    ],
  },
  "dsa/complexity-cheat-sheet": {
    blocks: [
      { t: "h2", text: "The numbers worth memorizing" },
      {
        t: "p",
        text: "This reference collects the complexities you'll cite most often. Commit the common-operations table to memory — being able to state these instantly is a real interview advantage.",
      },
      { t: "h2", text: "Data-structure operations (average case)" },
      {
        t: "table",
        head: ["Structure", "Access", "Search", "Insert", "Delete"],
        rows: [
          ["Array", "O(1)", "O(n)", "O(n)", "O(n)"],
          ["Hash table", "-", "O(1)", "O(1)", "O(1)"],
          ["Balanced BST", "O(log n)", "O(log n)", "O(log n)", "O(log n)"],
          ["Heap", "O(1) peek", "O(n)", "O(log n)", "O(log n)"],
          ["Stack / Queue", "-", "-", "O(1)", "O(1)"],
        ],
      },
      { t: "h2", text: "Sorting algorithms" },
      {
        t: "table",
        head: ["Algorithm", "Average", "Worst", "Space", "Stable"],
        rows: [
          ["Merge sort", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
          ["Quick sort", "O(n log n)", "O(n^2)", "O(log n)", "No"],
          ["Heap sort", "O(n log n)", "O(n log n)", "O(1)", "No"],
          ["Insertion sort", "O(n^2)", "O(n^2)", "O(1)", "Yes"],
          ["Counting sort", "O(n + k)", "O(n + k)", "O(k)", "Yes"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "When you cite a complexity, name the operation and the case: 'search is average O(1), worst O(n) for a hash table.' Precision reads as expertise.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Math Fundamentals
  // -------------------------------------------------------------------------
  "dsa/modular-arithmetic": {
    blocks: [
      { t: "h2", text: "Arithmetic that wraps around" },
      {
        t: "p",
        text: "Modular arithmetic works with remainders: a mod m is what's left after dividing a by m. Think of a clock — 15:00 wraps to 3 on a 12-hour face. It appears everywhere in algorithms: hashing, cyclic indexing, and avoiding overflow in large computations.",
      },
      { t: "h2", text: "The distribution rules" },
      {
        t: "p",
        text: "Modulo distributes over addition and multiplication, which lets you keep numbers small throughout a long computation instead of overflowing and then reducing at the end.",
      },
      {
        t: "code",
        lang: "text",
        code: "(a + b) mod m = ((a mod m) + (b mod m)) mod m\n(a * b) mod m = ((a mod m) * (b mod m)) mod m\n\n# Common in problems: answer modulo 1_000_000_007\nresult = (result * k) % 1_000_000_007\n",
      },
      { t: "h2", text: "Cyclic indexing" },
      {
        t: "p",
        text: "To move around a circular array of size n, use (i + 1) % n to advance and (i - 1 + n) % n to go back. The + n guards against negative results in languages where modulo can return a negative value.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "In C, C++, and Java, -7 % 3 is -1, not 2. Add the modulus before taking the remainder when you need a non-negative result.",
      },
    ],
  },
  "dsa/prime-numbers": {
    blocks: [
      { t: "h2", text: "The atoms of the integers" },
      {
        t: "p",
        text: "A prime has exactly two divisors: 1 and itself. Primes underpin number-theory problems, hashing, and cryptography. Two skills matter for interviews: testing whether one number is prime, and generating all primes up to a limit.",
      },
      { t: "h2", text: "Testing a single number" },
      {
        t: "p",
        text: "You only need to check divisors up to the square root of n: if n = a·b, at least one factor is at most sqrt(n). That turns an O(n) test into O(sqrt n).",
      },
      {
        t: "code",
        lang: "python",
        code: "def is_prime(n):\n    if n < 2:\n        return False\n    i = 2\n    while i * i <= n:      # i up to sqrt(n)\n        if n % i == 0:\n            return False\n        i += 1\n    return True\n",
      },
      { t: "h2", text: "The Sieve of Eratosthenes" },
      {
        t: "p",
        text: "To find every prime up to N, mark multiples of each prime as composite. It runs in about O(N log log N) — effectively linear — and is the go-to when a problem needs many primality checks.",
      },
      {
        t: "code",
        lang: "python",
        code: "def sieve(n):\n    is_p = [True] * (n + 1)\n    is_p[0] = is_p[1] = False\n    for i in range(2, int(n ** 0.5) + 1):\n        if is_p[i]:\n            for j in range(i * i, n + 1, i):\n                is_p[j] = False\n    return [i for i, p in enumerate(is_p) if p]\n",
      },
    ],
  },
  "dsa/gcd-lcm": {
    blocks: [
      { t: "h2", text: "Greatest common divisor" },
      {
        t: "p",
        text: "The GCD of two numbers is the largest integer dividing both. Euclid's algorithm computes it in O(log min(a, b)) using one elegant fact: gcd(a, b) = gcd(b, a mod b), shrinking the numbers until one hits zero.",
      },
      {
        t: "code",
        lang: "python",
        code: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\n# gcd(48, 18) -> gcd(18, 12) -> gcd(12, 6) -> gcd(6, 0) = 6\n",
      },
      { t: "h2", text: "Least common multiple" },
      {
        t: "p",
        text: "The LCM is the smallest number both divide. It relates to the GCD by a·b = gcd(a, b)·lcm(a, b), so you compute LCM from GCD — dividing before multiplying to avoid overflow.",
      },
      {
        t: "code",
        lang: "python",
        code: "def lcm(a, b):\n    return a // gcd(a, b) * b   # divide first to stay small\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "GCD generalizes to arrays: fold gcd across all elements. Reducing a fraction, syncing periodic events, and tiling problems all reduce to GCD/LCM.",
      },
    ],
  },
  "dsa/fast-exponentiation": {
    blocks: [
      { t: "h2", text: "Powers in logarithmic time" },
      {
        t: "p",
        text: "Computing a^n by multiplying n times is O(n). Exponentiation by squaring does it in O(log n) by using the identity a^n = (a^(n/2))^2, halving the exponent at each step.",
      },
      { t: "h2", text: "The squaring trick" },
      {
        t: "p",
        text: "If the exponent is even, square the base and halve the exponent. If it's odd, peel off one factor of the base, then continue. Each step at least halves the exponent, so there are only log n steps.",
      },
      {
        t: "code",
        lang: "python",
        code: "def power(base, exp, mod=None):\n    result = 1\n    while exp > 0:\n        if exp & 1:            # odd exponent\n            result *= base\n            if mod: result %= mod\n        base *= base           # square\n        if mod: base %= mod\n        exp >>= 1              # halve\n    return result\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "Combined with a modulus, this is modular exponentiation — the workhorse of cryptography and any problem asking for a huge power 'modulo 1e9+7'. The same halving idea powers fast matrix exponentiation.",
      },
    ],
  },
  "dsa/combinatorics-basics": {
    blocks: [
      { t: "h2", text: "Counting without listing" },
      {
        t: "p",
        text: "Combinatorics is the art of counting arrangements without enumerating them. Two operations dominate: permutations (order matters) and combinations (order doesn't). Recognizing which you need is half the battle.",
      },
      { t: "h2", text: "Permutations vs combinations" },
      {
        t: "table",
        head: ["Concept", "Formula", "Question it answers"],
        rows: [
          ["Permutations", "n! / (n-r)!", "How many ordered arrangements of r from n?"],
          ["Combinations", "n! / (r!(n-r)!)", "How many unordered choices of r from n?"],
        ],
      },
      { t: "h2", text: "The building blocks" },
      {
        t: "ul",
        items: [
          "**Rule of product** — if one choice has a ways and the next has b, together they have a·b.",
          "**Rule of sum** — mutually exclusive options add: a + b.",
          "**Factorial n!** — the number of ways to order n distinct items.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "For large n modulo a prime, precompute factorials and modular inverses so each combination query is O(1). Pascal's triangle also builds C(n, r) with pure addition — no division needed.",
      },
    ],
  },
  "dsa/probability-basics": {
    blocks: [
      { t: "h2", text: "Reasoning about chance" },
      {
        t: "p",
        text: "Probability shows up in randomized algorithms, expected-runtime analysis, and the occasional interview brain-teaser. The essentials are a small set of rules you can apply mechanically.",
      },
      { t: "h2", text: "Core rules" },
      {
        t: "ul",
        items: [
          "A probability is a number in [0, 1]; all outcomes sum to 1.",
          "**Independent events**: P(A and B) = P(A)·P(B).",
          "**Mutually exclusive events**: P(A or B) = P(A) + P(B).",
          "**Complement**: P(not A) = 1 - P(A) — often the easy way in.",
        ],
      },
      { t: "h2", text: "Expected value" },
      {
        t: "p",
        text: "The expected value is the long-run average: sum each outcome times its probability. It's how we say a randomized quicksort is 'expected O(n log n)' — averaged over random pivot choices, not guaranteed on every run.",
      },
      {
        t: "code",
        lang: "text",
        code: "Fair die expected value:\nE = 1*(1/6) + 2*(1/6) + ... + 6*(1/6) = 3.5\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "The complement trick — 'at least one' problems are usually easier as 1 minus P(none). Reach for it whenever you see 'at least'.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Sorting Algorithms
  // -------------------------------------------------------------------------
  "dsa/bubble-sort": {
    blocks: [
      { t: "h2", text: "The simplest sort" },
      {
        t: "p",
        text: "Bubble sort repeatedly walks the list, swapping adjacent elements that are out of order. After each full pass the largest unsorted element 'bubbles' to its final place at the end. It's rarely used in practice but is the clearest introduction to how sorting works.",
      },
      {
        t: "code",
        lang: "python",
        code: "def bubble_sort(a):\n    n = len(a)\n    for i in range(n):\n        swapped = False\n        for j in range(n - 1 - i):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n                swapped = True\n        if not swapped:      # already sorted -> stop early\n            break\n    return a\n",
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "Worst and average case are O(n^2). With the early-exit flag, a nearly-sorted array runs in O(n) best case. It sorts in place (O(1) extra space) and is stable.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Never reach for bubble sort on real data — it's an educational tool. But the adjacent-swap idea reappears in problems like counting inversions.",
      },
    ],
  },
  "dsa/selection-sort": {
    blocks: [
      { t: "h2", text: "Select the minimum, repeat" },
      {
        t: "p",
        text: "Selection sort finds the smallest remaining element and swaps it into the next position. It divides the array into a sorted prefix and an unsorted suffix, growing the prefix by one each pass.",
      },
      {
        t: "code",
        lang: "python",
        code: "def selection_sort(a):\n    n = len(a)\n    for i in range(n):\n        m = i\n        for j in range(i + 1, n):\n            if a[j] < a[m]:\n                m = j\n        a[i], a[m] = a[m], a[i]\n    return a\n",
      },
      { t: "h2", text: "Trade-offs" },
      {
        t: "p",
        text: "Always O(n^2) comparisons — even on sorted input — but it makes at most n swaps, the fewest of the simple sorts. That makes it attractive only when writes are far more expensive than reads. It is not stable in its basic form.",
      },
      {
        t: "callout",
        variant: "note",
        text: "Selection sort's 'find the minimum' step is exactly what a heap does faster. Replacing the linear scan with a heap turns it into heap sort — O(n log n).",
      },
    ],
  },
  "dsa/insertion-sort": {
    blocks: [
      { t: "h2", text: "Sort like a hand of cards" },
      {
        t: "p",
        text: "Insertion sort builds the sorted array one element at a time, inserting each new element into its correct spot among the already-sorted ones — exactly how most people sort a hand of playing cards.",
      },
      {
        t: "code",
        lang: "python",
        code: "def insertion_sort(a):\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]     # shift right\n            j -= 1\n        a[j + 1] = key          # drop into place\n    return a\n",
      },
      { t: "h2", text: "Why it's genuinely useful" },
      {
        t: "p",
        text: "It's O(n^2) worst case but O(n) on nearly-sorted data, stable, in place, and has tiny constants. Real-world sorts (like Timsort) use insertion sort for small subarrays because it beats fancier algorithms below a threshold.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "When a problem says the input is 'almost sorted' or 'k elements out of place', insertion sort's adaptive O(n·k) behavior is often the intended, elegant answer.",
      },
    ],
  },
  "dsa/merge-sort": {
    blocks: [
      { t: "h2", text: "Divide, sort, merge" },
      {
        t: "p",
        text: "Merge sort splits the array in half, recursively sorts each half, then merges the two sorted halves into one. The merge step is the heart of the algorithm: walking two sorted lists with two pointers, always taking the smaller front element.",
      },
      {
        t: "code",
        lang: "python",
        code: "def merge_sort(a):\n    if len(a) <= 1:\n        return a\n    mid = len(a) // 2\n    left = merge_sort(a[:mid])\n    right = merge_sort(a[mid:])\n    return merge(left, right)\n\ndef merge(l, r):\n    out, i, j = [], 0, 0\n    while i < len(l) and j < len(r):\n        if l[i] <= r[j]:\n            out.append(l[i]); i += 1\n        else:\n            out.append(r[j]); j += 1\n    out.extend(l[i:]); out.extend(r[j:])\n    return out\n",
      },
      { t: "h2", text: "Guarantees" },
      {
        t: "p",
        text: "Merge sort is O(n log n) in every case — best, average, and worst — and it is stable. Its cost is O(n) extra space for the merge buffers. That predictability makes it the default for sorting linked lists and for external sorting of data too large for memory.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "The merge routine is a reusable pattern: it also counts inversions and merges k sorted lists. Master it once and reuse it everywhere.",
      },
    ],
  },
  "dsa/quick-sort": {
    blocks: [
      { t: "h2", text: "Partition around a pivot" },
      {
        t: "p",
        text: "Quicksort picks a pivot, partitions the array so smaller elements go left and larger go right, then recursively sorts each side. Unlike merge sort, all the work happens before the recursion, and it sorts in place.",
      },
      {
        t: "code",
        lang: "python",
        code: "def quick_sort(a, lo=0, hi=None):\n    if hi is None: hi = len(a) - 1\n    if lo >= hi: return a\n    p = partition(a, lo, hi)\n    quick_sort(a, lo, p - 1)\n    quick_sort(a, p + 1, hi)\n    return a\n\ndef partition(a, lo, hi):\n    pivot = a[hi]\n    i = lo\n    for j in range(lo, hi):\n        if a[j] < pivot:\n            a[i], a[j] = a[j], a[i]; i += 1\n    a[i], a[hi] = a[hi], a[i]\n    return i\n",
      },
      { t: "h2", text: "The pivot problem" },
      {
        t: "p",
        text: "Average case is O(n log n) with small constants — often the fastest in practice. But a bad pivot (always the min or max) degrades to O(n^2). Choosing a random or median-of-three pivot makes that worst case astronomically unlikely.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Quicksort is not stable and its worst case is quadratic. When you need guaranteed O(n log n) or stability, reach for merge sort instead.",
      },
    ],
  },
  "dsa/heap-sort": {
    blocks: [
      { t: "h2", text: "Sorting with a heap" },
      {
        t: "p",
        text: "Heap sort builds a max-heap from the array, then repeatedly extracts the maximum and places it at the end. It combines selection sort's idea with a heap's fast maximum-finding to reach O(n log n).",
      },
      { t: "h2", text: "The two phases" },
      {
        t: "ol",
        items: [
          "**Build a max-heap** from the array in O(n) using bottom-up heapify.",
          "**Extract repeatedly**: swap the root (max) with the last element, shrink the heap, and sift the new root down. Each extraction is O(log n).",
        ],
      },
      { t: "h2", text: "Trade-offs" },
      {
        t: "p",
        text: "Heap sort is O(n log n) in all cases and sorts in place with O(1) extra space — its standout feature. The downside: it's not stable and has poor cache locality, so in practice it's often slower than quicksort despite matching complexity.",
      },
      {
        t: "callout",
        variant: "note",
        text: "The heap itself is the more valuable takeaway. A heap (priority queue) solves top-k, running-median, and scheduling problems where you never fully sort.",
      },
    ],
  },
  "dsa/counting-sort": {
    blocks: [
      { t: "h2", text: "Sorting without comparisons" },
      {
        t: "p",
        text: "Counting sort skips comparisons entirely. When keys are integers in a small known range, it counts how many times each value occurs, then reconstructs the sorted output from those counts. This breaks the O(n log n) comparison-sort barrier.",
      },
      {
        t: "code",
        lang: "python",
        code: "def counting_sort(a, k):      # values in [0, k]\n    count = [0] * (k + 1)\n    for x in a:\n        count[x] += 1\n    out = []\n    for value, c in enumerate(count):\n        out.extend([value] * c)\n    return out\n",
      },
      { t: "h2", text: "Complexity and limits" },
      {
        t: "p",
        text: "It runs in O(n + k) time and O(k) space, where k is the range of values. That's linear when k is comparable to n — but if values range up to a billion, k dwarfs n and the approach falls apart. Use it only for dense, bounded integer keys.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "A stable version that uses prefix sums of the counts is the building block of radix sort. It's also the fastest way to sort ages, grades, or byte values.",
      },
    ],
  },
  "dsa/radix-sort": {
    blocks: [
      { t: "h2", text: "Sort digit by digit" },
      {
        t: "p",
        text: "Radix sort sorts numbers one digit at a time, from least significant to most, using a stable sub-sort (usually counting sort) at each digit. After processing every digit, the array is fully sorted — no comparisons of whole numbers required.",
      },
      { t: "h2", text: "Why stability is essential" },
      {
        t: "p",
        text: "Each pass must preserve the relative order established by previous, less-significant digits. That's why the per-digit sort must be stable — otherwise earlier work is scrambled. This is the most important detail to state in an interview.",
      },
      {
        t: "code",
        lang: "text",
        code: "Sort [170, 45, 75, 90, 2, 802] by digit:\nones:  [170, 90, 2, 802, 45, 75]\ntens:  [2, 802, 45, 75, 170, 90]\nhundreds: [2, 45, 75, 90, 170, 802]   sorted\n",
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "For n numbers of d digits in base b, radix sort is O(d·(n + b)). When d is small and fixed (e.g. 32-bit integers), that's effectively O(n) — faster than comparison sorts for large sets of bounded-width integers.",
      },
    ],
  },
  "dsa/bucket-sort": {
    blocks: [
      { t: "h2", text: "Distribute, sort, concatenate" },
      {
        t: "p",
        text: "Bucket sort scatters elements into a number of buckets by range, sorts each bucket (often with insertion sort), then concatenates them. It shines when the input is roughly uniformly distributed over a known range.",
      },
      { t: "h2", text: "The algorithm" },
      {
        t: "ol",
        items: [
          "Create k empty buckets covering the value range.",
          "Place each element into the bucket for its range.",
          "Sort every bucket individually.",
          "Concatenate the buckets in order.",
        ],
      },
      { t: "h2", text: "When it's fast — and when it isn't" },
      {
        t: "p",
        text: "With uniform data spread evenly across buckets, the average case is O(n + k). But if every element lands in one bucket, it degrades to the sub-sort's O(n^2). The distribution assumption is everything.",
      },
      {
        t: "callout",
        variant: "note",
        text: "Bucket sort is the natural choice for sorting floating-point numbers uniformly distributed in [0, 1) — map each value to bucket floor(n·value).",
      },
    ],
  },
  "dsa/stability-in-sorting": {
    blocks: [
      { t: "h2", text: "What stability means" },
      {
        t: "p",
        text: "A sort is **stable** if elements with equal keys keep their original relative order. It sounds academic until you sort records by multiple fields — then stability is the difference between correct and scrambled output.",
      },
      { t: "h2", text: "Why it matters: multi-key sorting" },
      {
        t: "p",
        text: "To sort people by last name, then by first name within ties, sort by first name first, then stably by last name. The stable second sort preserves the first-name order among people who share a last name. Without stability, that tie-break is lost.",
      },
      {
        t: "table",
        head: ["Stable", "Not stable"],
        rows: [
          ["Merge sort", "Quick sort"],
          ["Insertion sort", "Heap sort"],
          ["Counting / Radix", "Selection sort"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Most language standard libraries guarantee a stable sort (Python's sorted, Java's Collections.sort). Know your language's guarantee — interviewers ask.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Arrays
  // -------------------------------------------------------------------------
  "dsa/in-place-operations": {
    blocks: [
      { t: "h2", text: "Modify without a copy" },
      {
        t: "p",
        text: "An in-place operation transforms the input using O(1) extra space instead of allocating a new array. Interviewers love asking for it because it forces you to think about index management and to reuse the space you already have.",
      },
      { t: "h2", text: "The overwrite pointer pattern" },
      {
        t: "p",
        text: "Many in-place problems use a slow write pointer and a fast read pointer. The reader scans every element; the writer only advances when it keeps one. This compacts an array — removing duplicates or unwanted values — in a single pass.",
      },
      {
        t: "code",
        lang: "python",
        code: "def remove_val(nums, val):\n    w = 0                       # write index\n    for r in range(len(nums)):  # read index\n        if nums[r] != val:\n            nums[w] = nums[r]\n            w += 1\n    return w                    # new logical length\n",
      },
      { t: "h2", text: "Reversal as a primitive" },
      {
        t: "p",
        text: "In-place reversal with two pointers swapping inward is a building block. Rotating an array by k, for instance, is three reversals — reverse all, reverse the first k, reverse the rest — all in O(1) space.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Returning the 'new length' is a convention: the elements past that index are leftover garbage and should be ignored, not trusted.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Strings
  // -------------------------------------------------------------------------
  "dsa/strings-fundamentals": {
    blocks: [
      { t: "h2", text: "Strings are sequences of characters" },
      {
        t: "p",
        text: "A string is an ordered sequence of characters, and nearly every array technique applies to it — indexing, two pointers, sliding windows. The twist is encoding: a 'character' may be one byte (ASCII) or several (Unicode/UTF-8), which affects length and indexing.",
      },
      { t: "h2", text: "Operations and their costs" },
      {
        t: "table",
        head: ["Operation", "Typical cost"],
        rows: [
          ["Index a character", "O(1)"],
          ["Length", "O(1)"],
          ["Concatenate (immutable)", "O(n + m)"],
          ["Substring", "O(k)"],
          ["Search for a substring", "O(n·m) naive, O(n+m) with KMP"],
        ],
      },
      { t: "h2", text: "The character-frequency toolkit" },
      {
        t: "p",
        text: "A huge fraction of string problems reduce to counting characters. A fixed-size array of 26 (lowercase letters) or 128 (ASCII) is faster than a hash map and signals you know the alphabet is bounded.",
      },
      {
        t: "code",
        lang: "python",
        code: "def char_counts(s):\n    freq = [0] * 26\n    for ch in s:\n        freq[ord(ch) - ord('a')] += 1\n    return freq\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Anagram, palindrome, and 'permutation of' problems almost always come down to comparing character frequencies. Reach for the count array first.",
      },
    ],
  },
  "dsa/string-immutability": {
    blocks: [
      { t: "h2", text: "Why you can't just edit a string" },
      {
        t: "p",
        text: "In many languages — Java, Python, JavaScript, C# — strings are **immutable**: once created, their contents never change. Any 'modification' actually builds a brand-new string. Not knowing this turns an intended O(n) loop into an accidental O(n^2) one.",
      },
      { t: "h2", text: "The concatenation trap" },
      {
        t: "p",
        text: "Building a string by repeated concatenation in a loop copies the entire accumulated string each iteration. Over n characters that's 1 + 2 + ... + n = O(n^2) work — a silent performance killer.",
      },
      {
        t: "code",
        lang: "python",
        code: "# BAD: O(n^2) — each += copies the whole string\ns = \"\"\nfor ch in chars:\n    s += ch\n\n# GOOD: O(n) — collect, then join once\nparts = []\nfor ch in chars:\n    parts.append(ch)\ns = \"\".join(parts)\n",
      },
      { t: "h2", text: "Use a mutable builder" },
      {
        t: "p",
        text: "When you need to build or edit a string incrementally, use a mutable structure: a list of characters in Python, StringBuilder in Java, or a byte/char array. Convert to a string once at the end.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "To edit characters by index (e.g. reversing in place), first convert the string to a character array. You cannot assign to s[i] on an immutable string.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Bit Manipulation
  // -------------------------------------------------------------------------
  "dsa/bitwise-operators": {
    blocks: [
      { t: "h2", text: "Operating on raw bits" },
      {
        t: "p",
        text: "Bitwise operators act on the individual bits of an integer's binary representation. They're fast, constant-time, and unlock elegant solutions to problems about sets, flags, and parity.",
      },
      { t: "h2", text: "The six operators" },
      {
        t: "table",
        head: ["Operator", "Name", "Effect"],
        rows: [
          ["&", "AND", "1 only where both bits are 1"],
          ["|", "OR", "1 where either bit is 1"],
          ["^", "XOR", "1 where bits differ"],
          ["~", "NOT", "Flips every bit"],
          ["<<", "Left shift", "Multiply by 2 per shift"],
          [">>", "Right shift", "Divide by 2 per shift"],
        ],
      },
      { t: "h2", text: "Reading binary" },
      {
        t: "p",
        text: "Each bit position is a power of two. The number 13 is 1101 in binary = 8 + 4 + 1. Shifting left by one appends a zero (doubling); shifting right drops the last bit (halving, floored).",
      },
      {
        t: "code",
        lang: "python",
        code: "5 & 3   # 101 & 011 = 001 = 1\n5 | 3   # 101 | 011 = 111 = 7\n5 ^ 3   # 101 ^ 011 = 110 = 6\n1 << 4  # 10000 = 16\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "XOR is the star of interviews: x ^ x = 0 and x ^ 0 = x. That's why XOR-ing every element finds the one unpaired number in O(n) time and O(1) space.",
      },
    ],
  },
  "dsa/common-bit-tricks": {
    blocks: [
      { t: "h2", text: "A toolkit of one-liners" },
      {
        t: "p",
        text: "A small set of bit tricks recurs constantly. Memorizing them lets you manipulate individual bits and whole sets in O(1), and recognize when a problem is secretly about bits.",
      },
      { t: "h2", text: "Single-bit operations" },
      {
        t: "code",
        lang: "text",
        code: "Check bit i:   (x >> i) & 1\nSet bit i:     x | (1 << i)\nClear bit i:   x & ~(1 << i)\nToggle bit i:  x ^ (1 << i)\n",
      },
      { t: "h2", text: "Whole-number tricks" },
      {
        t: "ul",
        items: [
          "**Is a power of two?** x > 0 and (x & (x - 1)) == 0 — a power of two has exactly one set bit.",
          "**Lowest set bit**: x & (-x) isolates it.",
          "**Clear lowest set bit**: x & (x - 1) — repeat to count set bits (Brian Kernighan's method).",
          "**Even/odd**: x & 1 is 1 for odd numbers.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: "def count_set_bits(x):\n    count = 0\n    while x:\n        x &= x - 1     # clear lowest set bit\n        count += 1\n    return count\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "A subset of n items maps to an n-bit integer. Looping from 0 to 2^n - 1 enumerates every subset — the foundation of bitmask DP.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Hash Tables
  // -------------------------------------------------------------------------
  "dsa/designing-good-hash-functions": {
    blocks: [
      { t: "h2", text: "What makes a hash function good" },
      {
        t: "p",
        text: "A hash function maps a key to a bucket index. A good one spreads keys uniformly across buckets so that collisions are rare and operations stay close to O(1). A bad one clusters keys, degrading the table toward O(n).",
      },
      { t: "h2", text: "The three properties to aim for" },
      {
        t: "ul",
        items: [
          "**Deterministic** — the same key always hashes to the same value.",
          "**Uniform** — outputs spread evenly, so no bucket is overloaded.",
          "**Fast** — computing the hash must be cheap, or you lose the O(1) advantage.",
        ],
      },
      { t: "h2", text: "Hashing strings: polynomial rolling" },
      {
        t: "p",
        text: "A common string hash treats characters as digits in a large base and reduces modulo a prime. Using a prime modulus and a base larger than the alphabet spreads values well and reduces clustering.",
      },
      {
        t: "code",
        lang: "python",
        code: "def hash_string(s, mod=1_000_000_007, base=131):\n    h = 0\n    for ch in s:\n        h = (h * base + ord(ch)) % mod\n    return h\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "The load factor (entries / buckets) drives performance. Libraries resize and rehash when it crosses a threshold (~0.75) to keep collisions low — that resize is where a rare O(n) insert comes from.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Two Pointers
  // -------------------------------------------------------------------------
  "dsa/opposite-vs-same-direction": {
    blocks: [
      { t: "h2", text: "Two flavors of two pointers" },
      {
        t: "p",
        text: "The two-pointer technique comes in two shapes. In the **opposite-direction** variant, pointers start at the ends and move toward each other. In the **same-direction** variant, both start at the front and one chases the other. Knowing which to reach for is the whole skill.",
      },
      { t: "h2", text: "Opposite direction (converging)" },
      {
        t: "p",
        text: "Use it on **sorted** arrays or for palindrome checks. Two pointers close in from the ends; comparing their values tells you which to move. This solves 'find a pair summing to target' in O(n) after sorting, with no extra space.",
      },
      {
        t: "code",
        lang: "python",
        code: "def pair_sum(sorted_nums, target):\n    lo, hi = 0, len(sorted_nums) - 1\n    while lo < hi:\n        s = sorted_nums[lo] + sorted_nums[hi]\n        if s == target: return (lo, hi)\n        if s < target: lo += 1     # need bigger\n        else:          hi -= 1     # need smaller\n    return None\n",
      },
      { t: "h2", text: "Same direction (fast/slow)" },
      {
        t: "p",
        text: "Use it to compact arrays, detect cycles (Floyd's tortoise and hare), or maintain a window. A slow pointer marks a boundary while a fast pointer explores ahead. The two are the backbone of in-place filtering and linked-list cycle detection.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Opposite-direction almost always requires sorted input. If the array isn't sorted and sorting is allowed, sorting first to enable two pointers is a classic O(n log n) trick.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Sliding Window
  // -------------------------------------------------------------------------
  "dsa/fixed-vs-variable-window": {
    blocks: [
      { t: "h2", text: "Windows that slide over a sequence" },
      {
        t: "p",
        text: "A sliding window maintains a contiguous range over an array or string, updating an answer as the range moves — avoiding the O(n^2) cost of re-examining every subarray. Windows come in two kinds: fixed size and variable size.",
      },
      { t: "h2", text: "Fixed window" },
      {
        t: "p",
        text: "When the problem specifies a length k (e.g. 'max sum of any k consecutive elements'), slide a window of exactly k: add the entering element, remove the leaving one. Each step is O(1), so the whole scan is O(n).",
      },
      {
        t: "code",
        lang: "python",
        code: "def max_sum_k(nums, k):\n    window = sum(nums[:k])\n    best = window\n    for i in range(k, len(nums)):\n        window += nums[i] - nums[i - k]   # slide\n        best = max(best, window)\n    return best\n",
      },
      { t: "h2", text: "Variable window" },
      {
        t: "p",
        text: "When the window's size depends on a condition ('longest substring without repeats'), grow the right edge to include elements, and shrink the left edge whenever the window violates the constraint. Each element enters and leaves at most once, keeping it O(n).",
      },
      {
        t: "callout",
        variant: "tip",
        text: "The tell for a variable window: the problem asks for the longest or shortest subarray/substring satisfying some property. Expand to satisfy, contract to optimize.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Prefix Sum
  // -------------------------------------------------------------------------
  "dsa/prefix-sum-pattern": {
    blocks: [
      { t: "h2", text: "Precompute to answer range queries fast" },
      {
        t: "p",
        text: "A prefix-sum array stores the running total up to each index. Once built, the sum of any subarray is a single subtraction — turning repeated range-sum queries from O(n) each into O(1) each.",
      },
      { t: "h2", text: "Build once, query many" },
      {
        t: "code",
        lang: "python",
        code: "def build_prefix(nums):\n    prefix = [0] * (len(nums) + 1)\n    for i, x in enumerate(nums):\n        prefix[i + 1] = prefix[i] + x\n    return prefix\n\n# Sum of nums[l..r] inclusive:\n# prefix[r + 1] - prefix[l]\n",
      },
      { t: "h2", text: "The prefix + hash map combo" },
      {
        t: "p",
        text: "The real power appears in 'count subarrays summing to k'. As you scan, store how many times each prefix sum has occurred in a hash map. If the current prefix minus k has been seen, those earlier positions each start a valid subarray — solving it in a single O(n) pass.",
      },
      {
        t: "callout",
        variant: "note",
        text: "Use a size n+1 prefix array with prefix[0] = 0. That extra leading zero removes an annoying edge case when the subarray starts at index 0.",
      },
    ],
  },
  "dsa/2d-prefix-sum": {
    blocks: [
      { t: "h2", text: "Range sums over a grid" },
      {
        t: "p",
        text: "The prefix-sum idea extends to two dimensions. A 2D prefix array lets you compute the sum of any rectangular submatrix in O(1) after an O(m·n) preprocessing step — invaluable when many rectangle queries hit the same grid.",
      },
      { t: "h2", text: "Inclusion-exclusion" },
      {
        t: "p",
        text: "Each cell of the prefix grid holds the sum of everything above and to the left. Building it and querying it both rely on inclusion-exclusion: add the two overlapping regions, subtract the part you double-counted.",
      },
      {
        t: "code",
        lang: "text",
        code: "Build:  P[i][j] = grid[i][j]\n              + P[i-1][j] + P[i][j-1] - P[i-1][j-1]\n\nQuery sum of rectangle (r1,c1)..(r2,c2):\n  P[r2][c2] - P[r1-1][c2] - P[r2][c1-1] + P[r1-1][c1-1]\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Pad the prefix grid with a zero row and column so the r1-1 and c1-1 terms never go out of bounds. The same trick keeps the 1D version clean.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Kadane's Algorithm
  // -------------------------------------------------------------------------
  "dsa/kadanes-algorithm": {
    blocks: [
      { t: "h2", text: "Maximum subarray in one pass" },
      {
        t: "p",
        text: "Kadane's algorithm finds the contiguous subarray with the largest sum in O(n) time and O(1) space. It's a gem of dynamic programming disguised as a simple loop, and a frequent interview question.",
      },
      { t: "h2", text: "The key decision at each element" },
      {
        t: "p",
        text: "At every position ask one question: is it better to extend the best subarray ending at the previous element, or to start fresh here? If the running sum has gone negative, it can only hurt what follows, so you drop it and restart.",
      },
      {
        t: "code",
        lang: "python",
        code: "def max_subarray(nums):\n    best = cur = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)   # extend or restart\n        best = max(best, cur)\n    return best\n",
      },
      { t: "h2", text: "Why it works" },
      {
        t: "p",
        text: "cur holds the max sum of a subarray ending exactly at the current index. That local optimum is easy to update, and the global answer is just the largest local optimum seen. This 'best ending here' framing is a reusable DP idea.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Initialize with the first element, not zero. If every number is negative, a zero start wrongly returns 0 instead of the least-negative element.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Binary Search (advanced articles)
  // -------------------------------------------------------------------------
  "dsa/binary-search-on-answer": {
    blocks: [
      { t: "h2", text: "Searching a space of answers" },
      {
        t: "p",
        text: "Binary search isn't just for finding a value in a sorted array. When the answer is a number in a known range, and you can efficiently check 'is this candidate feasible?', you can binary-search the answer itself — even with no array in sight.",
      },
      { t: "h2", text: "The monotonic-predicate insight" },
      {
        t: "p",
        text: "The trick works when feasibility is **monotonic**: if a candidate value works, everything larger (or smaller) also works. That creates a hidden sorted boundary of false-false-...-true-true, and binary search finds the boundary in O(log range · cost of one check).",
      },
      {
        t: "code",
        lang: "python",
        code: "def min_feasible(lo, hi, feasible):\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if feasible(mid):\n            hi = mid          # mid works; try smaller\n        else:\n            lo = mid + 1      # mid fails; go bigger\n    return lo\n",
      },
      { t: "h2", text: "Recognizing the pattern" },
      {
        t: "p",
        text: "Problems like 'minimum capacity to ship packages in D days' or 'smallest divisor within a threshold' fit this mold. The phrasing 'minimize the maximum' or 'maximize the minimum' is a strong signal to binary-search the answer.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Write the feasibility check first as a clean helper. Once it's correct and monotonic, the binary-search wrapper is boilerplate.",
      },
    ],
  },
  "dsa/lower-upper-bound": {
    blocks: [
      { t: "h2", text: "Finding boundaries, not just presence" },
      {
        t: "p",
        text: "Plain binary search answers 'is x present?'. Lower and upper bound answer 'where does x belong?' — essential when there are duplicates or you need the first/last occurrence, or an insertion point.",
      },
      { t: "h2", text: "The two bounds" },
      {
        t: "ul",
        items: [
          "**Lower bound**: the first index whose value is >= target (where target would be inserted to stay sorted, before equal elements).",
          "**Upper bound**: the first index whose value is > target (after all elements equal to target).",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: "def lower_bound(a, target):\n    lo, hi = 0, len(a)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if a[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
      },
      { t: "h2", text: "Count occurrences for free" },
      {
        t: "p",
        text: "The number of elements equal to target is upper_bound(target) - lower_bound(target). The count of values in a range, the first/last index, and insertion position all fall out of these two helpers.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Note the half-open range: hi starts at len(a), not len(a) - 1, and the loop is lo < hi. Mixing this up with the classic inclusive template causes off-by-one bugs.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Matrix
  // -------------------------------------------------------------------------
  "dsa/matrix-traversal": {
    blocks: [
      { t: "h2", text: "Grids are 2D arrays" },
      {
        t: "p",
        text: "A matrix is an array of rows. Most grid problems are about visiting cells in some order and moving to neighbors. Getting the indexing and boundary checks right up front prevents a cascade of bugs.",
      },
      { t: "h2", text: "The direction-vector idiom" },
      {
        t: "p",
        text: "Instead of writing four separate neighbor checks, store the moves as offset pairs and loop over them. It keeps grid BFS/DFS compact and makes diagonal moves a one-line change.",
      },
      {
        t: "code",
        lang: "python",
        code: "DIRS = [(-1, 0), (1, 0), (0, -1), (0, 1)]   # up down left right\n\nfor dr, dc in DIRS:\n    nr, nc = r + dr, c + dc\n    if 0 <= nr < rows and 0 <= nc < cols:\n        visit(nr, nc)\n",
      },
      { t: "h2", text: "Common traversal orders" },
      {
        t: "ul",
        items: [
          "**Row-major** — the default nested loop, row by row.",
          "**Spiral** — peel the outer ring, shrink the boundaries, repeat.",
          "**Diagonal** — cells share a constant r + c (or r - c) value.",
          "**Transpose / rotate** — swap across the diagonal, then reverse rows for a 90-degree turn.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Always validate row and column bounds before indexing. An out-of-range access on the grid edge is the most common matrix bug in interviews.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Linked List
  // -------------------------------------------------------------------------
  "dsa/doubly-linked-lists": {
    blocks: [
      { t: "h2", text: "Links in both directions" },
      {
        t: "p",
        text: "A doubly linked list gives each node a pointer to both its next and its previous node. That extra back-pointer costs memory but makes deletion and backward traversal O(1) given a node reference — the reason it underlies LRU caches and text editors.",
      },
      { t: "h2", text: "Node shape" },
      {
        t: "code",
        lang: "python",
        code: "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.prev = None\n        self.next = None\n",
      },
      { t: "h2", text: "O(1) removal — the payoff" },
      {
        t: "p",
        text: "In a singly linked list, deleting a node requires the previous node, forcing an O(n) search. With a prev pointer you rewire both neighbors directly, no traversal needed.",
      },
      {
        t: "code",
        lang: "python",
        code: "def remove(node):\n    node.prev.next = node.next\n    node.next.prev = node.prev\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Pair a doubly linked list with a hash map (key -> node) and you get O(1) lookup plus O(1) reordering. That combination is exactly how an LRU cache is built.",
      },
    ],
  },
  "dsa/dummy-node-technique": {
    blocks: [
      { t: "h2", text: "A sentinel that kills edge cases" },
      {
        t: "p",
        text: "A dummy (or sentinel) node is a placeholder placed before the real head of a linked list. It gives you a stable node to point at, so operations on the head stop being a special case — one of the highest-value tricks in list problems.",
      },
      { t: "h2", text: "Why the head is annoying" },
      {
        t: "p",
        text: "Without a dummy, inserting or deleting at the front requires separate code because there's no 'previous' node. A dummy provides that previous node for free, so every position — including the first — is handled by the same loop.",
      },
      {
        t: "code",
        lang: "python",
        code: "def merge(l1, l2):\n    dummy = Node(0)          # sentinel\n    tail = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            tail.next, l1 = l1, l1.next\n        else:\n            tail.next, l2 = l2, l2.next\n        tail = tail.next\n    tail.next = l1 or l2\n    return dummy.next        # real head\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "Return dummy.next, never dummy itself. The sentinel is scaffolding — the true list begins one node later.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Stacks
  // -------------------------------------------------------------------------
  "dsa/monotonic-stack": {
    blocks: [
      { t: "h2", text: "A stack that stays sorted" },
      {
        t: "p",
        text: "A monotonic stack keeps its elements in strictly increasing or decreasing order. Before pushing, you pop everything that would break the order. This simple discipline solves 'next greater element' and 'span' problems in O(n) instead of O(n^2).",
      },
      { t: "h2", text: "Next greater element" },
      {
        t: "p",
        text: "Scan right to left, maintaining a decreasing stack of candidates. For each element, pop everything smaller (they can't be anyone's 'next greater'), and the top that remains is the answer.",
      },
      {
        t: "code",
        lang: "python",
        code: "def next_greater(nums):\n    res = [-1] * len(nums)\n    stack = []                     # holds indices, decreasing values\n    for i in range(len(nums) - 1, -1, -1):\n        while stack and nums[stack[-1]] <= nums[i]:\n            stack.pop()            # too small to matter\n        if stack:\n            res[i] = nums[stack[-1]]\n        stack.append(i)\n    return res\n",
      },
      { t: "h2", text: "Why it's O(n)" },
      {
        t: "p",
        text: "Each element is pushed once and popped at most once, so the total work across the whole scan is linear — even though there's a nested while loop. This amortized argument is worth stating explicitly in an interview.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "The tells for a monotonic stack: 'next/previous greater or smaller', 'largest rectangle in histogram', 'stock span', 'daily temperatures'. Store indices, not values, when you need distances.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Queues
  // -------------------------------------------------------------------------
  "dsa/queue-fundamentals": {
    blocks: [
      { t: "h2", text: "First in, first out" },
      {
        t: "p",
        text: "A queue processes elements in the order they arrive — FIFO. You enqueue at the back and dequeue from the front. It models any 'waiting line' and is the engine of breadth-first search.",
      },
      { t: "h2", text: "The core operations" },
      {
        t: "table",
        head: ["Operation", "Meaning", "Cost"],
        rows: [
          ["enqueue", "Add to the back", "O(1)"],
          ["dequeue", "Remove from the front", "O(1)"],
          ["peek/front", "Look at the front", "O(1)"],
          ["isEmpty", "Any elements?", "O(1)"],
        ],
      },
      { t: "h2", text: "Implement it right" },
      {
        t: "p",
        text: "Never use a plain array and pop from the front — that shifts every element, making dequeue O(n). Use a linked list, a circular buffer, or a purpose-built deque (Python's collections.deque, Java's ArrayDeque) for true O(1) ends.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "list.pop(0) in Python and removing index 0 from an ArrayList are both O(n). This quietly turns an O(V+E) BFS into O(V^2). Always reach for deque.",
      },
    ],
  },
  "dsa/deque-and-circular-queue": {
    blocks: [
      { t: "h2", text: "Two ends, or a ring" },
      {
        t: "p",
        text: "A deque (double-ended queue) allows O(1) insertion and removal at both ends. A circular queue reuses a fixed array by wrapping indices around, giving a bounded queue with no shifting. Both are practical upgrades over the basic queue.",
      },
      { t: "h2", text: "Deque: the Swiss-army queue" },
      {
        t: "p",
        text: "Because you can push and pop from either side, a deque can act as a stack, a queue, or both. It's the natural structure for sliding-window-maximum and any problem needing access to both recent and oldest elements.",
      },
      { t: "h2", text: "Circular queue: bounded and shift-free" },
      {
        t: "p",
        text: "A circular buffer keeps front and rear indices and advances them modulo the capacity. When rear wraps past the end, it reuses the freed slots at the start — ideal for fixed-size buffers like streaming data or ring caches.",
      },
      {
        t: "code",
        lang: "text",
        code: "capacity = 5\nenqueue: rear = (rear + 1) % capacity\ndequeue: front = (front + 1) % capacity\nfull when (rear + 1) % capacity == front\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "The classic full-vs-empty ambiguity (both look like front == rear) is solved by tracking a size counter or leaving one slot always empty.",
      },
    ],
  },
  "dsa/monotonic-queue": {
    blocks: [
      { t: "h2", text: "A deque that tracks extremes" },
      {
        t: "p",
        text: "A monotonic queue is a deque kept in increasing or decreasing order. It answers 'what is the max/min in the current window?' in amortized O(1), which is exactly what sliding-window-maximum needs.",
      },
      { t: "h2", text: "Sliding window maximum" },
      {
        t: "p",
        text: "Keep a deque of indices whose values are decreasing. Before adding a new element, pop smaller values from the back (they can never be the max while the newcomer is around). The front always holds the window's maximum; drop it when it slides out of range.",
      },
      {
        t: "code",
        lang: "python",
        code: "from collections import deque\n\ndef max_window(nums, k):\n    dq, res = deque(), []\n    for i, x in enumerate(nums):\n        while dq and nums[dq[-1]] <= x:\n            dq.pop()               # back: too small\n        dq.append(i)\n        if dq[0] <= i - k:\n            dq.popleft()           # front: out of window\n        if i >= k - 1:\n            res.append(nums[dq[0]])\n    return res\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Monotonic stack vs queue: use a stack when you scan once and care about the nearest greater/smaller; use a queue when you need the extreme over a moving window.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Recursion & Backtracking
  // -------------------------------------------------------------------------
  "dsa/recursion-fundamentals": {
    blocks: [
      { t: "h2", text: "A function that calls itself" },
      {
        t: "p",
        text: "Recursion solves a problem by reducing it to smaller instances of the same problem. Every correct recursion has two parts: a base case that stops the recursion, and a recursive case that makes progress toward it.",
      },
      { t: "h2", text: "The two mandatory parts" },
      {
        t: "ul",
        items: [
          "**Base case** — the smallest input you can answer directly, with no further calls. Miss it and you get infinite recursion.",
          "**Recursive case** — reduce the problem and call yourself on the smaller version, then combine the result.",
        ],
      },
      {
        t: "code",
        lang: "python",
        code: "def factorial(n):\n    if n <= 1:          # base case\n        return 1\n    return n * factorial(n - 1)   # recursive case\n",
      },
      { t: "h2", text: "Trust the recursion" },
      {
        t: "p",
        text: "The mental leap is the 'recursive leap of faith': assume the recursive call correctly solves the smaller problem, then focus only on combining that result with the current step. Trying to trace every level in your head is what makes recursion feel hard.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Each pending call uses a stack frame. Deep recursion (n in the hundreds of thousands) can overflow the stack — convert to iteration or increase the limit when depth is large.",
      },
    ],
  },
  "dsa/subsets-vs-permutations": {
    blocks: [
      { t: "h2", text: "Two shapes of exhaustive search" },
      {
        t: "p",
        text: "Backtracking generates all candidates by building them incrementally and abandoning dead ends. The two archetypes are subsets (choose which elements to include) and permutations (choose an ordering). Their recursion trees differ in one crucial way.",
      },
      { t: "h2", text: "Subsets: include or skip" },
      {
        t: "p",
        text: "For each element you make a binary choice — take it or leave it — and never revisit earlier elements. Passing a start index forward prevents duplicates. There are 2^n subsets.",
      },
      {
        t: "code",
        lang: "python",
        code: "def subsets(nums):\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)   # move forward only\n            path.pop()               # undo\n    backtrack(0, [])\n    return res\n",
      },
      { t: "h2", text: "Permutations: order matters" },
      {
        t: "p",
        text: "For permutations, every unused element can go in the next slot, so you loop from the start each time and track which elements are used. There are n! permutations. The used-set (or in-place swapping) is what distinguishes it from subsets.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "The universal backtracking template is: choose, recurse, un-choose. The un-choose step (pop / mark unused) is what lets one path's state not leak into the next.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Binary Tree
  // -------------------------------------------------------------------------
  "dsa/dfs-vs-bfs-trees": {
    blocks: [
      { t: "h2", text: "Two ways to explore a tree" },
      {
        t: "p",
        text: "Depth-first search plunges down one branch before backtracking; breadth-first search sweeps level by level. Choosing the right one is usually dictated by what the problem asks about.",
      },
      { t: "h2", text: "When to use which" },
      {
        t: "table",
        head: ["Use DFS when...", "Use BFS when..."],
        rows: [
          ["You need path or subtree info", "You need level-order output"],
          ["Checking existence deep down", "Finding the shortest path / min depth"],
          ["Recursion keeps code short", "Answer depends on distance from root"],
        ],
      },
      { t: "h2", text: "The implementations" },
      {
        t: "code",
        lang: "python",
        code: "# DFS — recursion (implicit stack)\ndef dfs(node):\n    if not node: return\n    visit(node)\n    dfs(node.left); dfs(node.right)\n\n# BFS — explicit queue, level by level\nfrom collections import deque\ndef bfs(root):\n    q = deque([root])\n    while q:\n        node = q.popleft()\n        visit(node)\n        if node.left:  q.append(node.left)\n        if node.right: q.append(node.right)\n",
      },
      {
        t: "callout",
        variant: "note",
        text: "DFS uses O(h) space (tree height) via the call stack; BFS uses O(w) space (widest level). On a balanced tree the widest level dominates, so BFS can use more memory.",
      },
    ],
  },
  "dsa/recursive-vs-iterative-traversal": {
    blocks: [
      { t: "h2", text: "The three DFS orders" },
      {
        t: "p",
        text: "Depth-first tree traversal comes in three flavors defined by when you visit the node relative to its children: preorder (node first), inorder (node between children), postorder (node last). Recursively, they differ by a single line's position.",
      },
      {
        t: "code",
        lang: "python",
        code: "def inorder(node):\n    if not node: return\n    inorder(node.left)\n    visit(node)            # move this line to change the order\n    inorder(node.right)\n",
      },
      { t: "h2", text: "Going iterative with an explicit stack" },
      {
        t: "p",
        text: "Recursion uses the call stack implicitly. To iterate, you manage that stack yourself. This avoids stack-overflow on very deep trees and is sometimes required by interviewers to prove you understand what recursion hides.",
      },
      {
        t: "code",
        lang: "python",
        code: "def inorder_iter(root):\n    stack, node, out = [], root, []\n    while stack or node:\n        while node:\n            stack.append(node)\n            node = node.left\n        node = stack.pop()\n        out.append(node.val)\n        node = node.right\n    return out\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Inorder traversal of a binary search tree yields values in sorted order. That single fact solves a surprising number of BST problems.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Binary Search Tree
  // -------------------------------------------------------------------------
  "dsa/bst-operations": {
    blocks: [
      { t: "h2", text: "The ordering invariant" },
      {
        t: "p",
        text: "A binary search tree keeps a strict rule at every node: all keys in the left subtree are smaller, all keys in the right subtree are larger. That invariant is what makes search, insert, and delete O(h), where h is the height.",
      },
      { t: "h2", text: "Search and insert" },
      {
        t: "p",
        text: "Both start at the root and compare: go left if the target is smaller, right if larger. Search stops when it matches or hits null; insert places the new node exactly where the failed search ended.",
      },
      {
        t: "code",
        lang: "python",
        code: "def search(node, key):\n    while node and node.val != key:\n        node = node.left if key < node.val else node.right\n    return node\n",
      },
      { t: "h2", text: "Deletion: three cases" },
      {
        t: "ul",
        items: [
          "**Leaf** — just remove it.",
          "**One child** — splice the child into the node's place.",
          "**Two children** — replace the node with its inorder successor (smallest in the right subtree), then delete that successor.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "A BST built from sorted input degenerates into a linked list — O(n) operations. Self-balancing trees (AVL, red-black) keep height at O(log n) to prevent this.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Heaps
  // -------------------------------------------------------------------------
  "dsa/heapify-and-build-heap": {
    blocks: [
      { t: "h2", text: "A tree flattened into an array" },
      {
        t: "p",
        text: "A binary heap is a complete binary tree stored in an array. For the node at index i, its children sit at 2i+1 and 2i+2, and its parent at (i-1)/2. No pointers needed — arithmetic does the navigation.",
      },
      { t: "h2", text: "Sift up and sift down" },
      {
        t: "p",
        text: "Insertion adds at the end and sifts up while it's out of order. Extraction swaps the root with the last element, removes it, and sifts the new root down. Each is O(log n) because it travels one root-to-leaf path.",
      },
      { t: "h2", text: "Build-heap in O(n), not O(n log n)" },
      {
        t: "p",
        text: "Building a heap from an array by inserting one at a time is O(n log n). But sifting down from the last internal node up to the root is only O(n) — a classic result, because most nodes are near the bottom and sift down very little.",
      },
      {
        t: "code",
        lang: "python",
        code: "def build_heap(a):\n    n = len(a)\n    for i in range(n // 2 - 1, -1, -1):  # last parent -> root\n        sift_down(a, i, n)\n",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Most languages ship a heap (Python's heapq, Java's PriorityQueue). Know the array-index formulas anyway — interviewers ask you to implement one.",
      },
    ],
  },
  "dsa/top-k-pattern": {
    blocks: [
      { t: "h2", text: "Find k best without full sorting" },
      {
        t: "p",
        text: "'Top k largest', 'k closest', 'k most frequent' — all share one efficient answer: maintain a heap of size k. You avoid sorting the entire input, dropping the cost from O(n log n) to O(n log k).",
      },
      { t: "h2", text: "The counterintuitive heap choice" },
      {
        t: "p",
        text: "To find the k **largest** elements, use a **min**-heap of size k. The smallest of your current top-k sits at the root; when a bigger element arrives, pop that smallest and push the newcomer. The heap always holds the k best seen so far.",
      },
      {
        t: "code",
        lang: "python",
        code: "import heapq\n\ndef k_largest(nums, k):\n    heap = []\n    for x in nums:\n        heapq.heappush(heap, x)\n        if len(heap) > k:\n            heapq.heappop(heap)   # drop the smallest\n    return heap                    # the k largest\n",
      },
      { t: "h2", text: "When k is close to n" },
      {
        t: "p",
        text: "If k approaches n, the heap advantage shrinks and a full sort or Quickselect (average O(n)) may be simpler. Quickselect is the go-to when you need the k-th element itself rather than a maintained stream.",
      },
      {
        t: "callout",
        variant: "note",
        text: "For 'k most frequent', count with a hash map first, then run the size-k heap on the (frequency, item) pairs.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Intervals
  // -------------------------------------------------------------------------
  "dsa/interval-patterns": {
    blocks: [
      { t: "h2", text: "Problems about ranges" },
      {
        t: "p",
        text: "Interval problems deal with ranges that have a start and end — meetings, bookings, segments on a line. The unlocking move is almost always the same: sort the intervals first, usually by start time.",
      },
      { t: "h2", text: "Merging overlaps" },
      {
        t: "p",
        text: "After sorting by start, walk through and merge each interval into the last if they overlap (current start <= last end); otherwise append it as new. This turns a tangle of ranges into clean, disjoint ones in O(n log n).",
      },
      {
        t: "code",
        lang: "python",
        code: "def merge(intervals):\n    intervals.sort(key=lambda x: x[0])\n    out = [intervals[0]]\n    for s, e in intervals[1:]:\n        if s <= out[-1][1]:            # overlap\n            out[-1][1] = max(out[-1][1], e)\n        else:\n            out.append([s, e])\n    return out\n",
      },
      { t: "h2", text: "The overlap test and other variants" },
      {
        t: "ul",
        items: [
          "**Two intervals overlap** when a.start <= b.end and b.start <= a.end.",
          "**Insert interval** — merge the new one into a sorted list.",
          "**Meeting rooms** — the max number of concurrent intervals equals the fewest rooms needed; a min-heap of end times tracks it.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Decide the sort key by the question: sort by start to merge, by end to schedule the most non-overlapping intervals (greedy).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Tries
  // -------------------------------------------------------------------------
  "dsa/trie-fundamentals": {
    blocks: [
      { t: "h2", text: "A tree of prefixes" },
      {
        t: "p",
        text: "A trie (prefix tree) stores strings by sharing common prefixes along tree edges. Each node represents a prefix; walking down spells out a word. It makes prefix queries — autocomplete, spell-check, IP routing — extremely fast.",
      },
      { t: "h2", text: "The node and insertion" },
      {
        t: "code",
        lang: "python",
        code: "class TrieNode:\n    def __init__(self):\n        self.children = {}      # char -> TrieNode\n        self.is_word = False\n\ndef insert(root, word):\n    node = root\n    for ch in word:\n        node = node.children.setdefault(ch, TrieNode())\n    node.is_word = True         # mark the end of a word\n",
      },
      { t: "h2", text: "Why it wins" },
      {
        t: "p",
        text: "Search and insert are O(L) in the word's length L — independent of how many words the trie holds. Checking whether any stored word starts with a prefix is the trie's superpower, something a hash set of whole words cannot do efficiently.",
      },
      {
        t: "callout",
        variant: "note",
        text: "The is_word flag is essential: it distinguishes a complete word ('car') from a mere prefix of others ('ca' inside 'card'). Forgetting it is the most common trie bug.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Data Structure Design
  // -------------------------------------------------------------------------
  "dsa/design-patterns-for-ds": {
    blocks: [
      { t: "h2", text: "Designing structures to hit a spec" },
      {
        t: "p",
        text: "Design problems ('build an LRU cache', 'design a min-stack') ask you to combine primitive structures so that every required operation hits a target complexity — usually O(1). The skill is picking the right combination.",
      },
      { t: "h2", text: "The recurring combinations" },
      {
        t: "table",
        head: ["Goal", "Combine", "Result"],
        rows: [
          ["O(1) lookup + O(1) reorder", "Hash map + doubly linked list", "LRU cache"],
          ["O(1) min with the stack", "Stack + auxiliary min-stack", "Min-stack"],
          ["O(1) insert/delete/random", "Hash map + dynamic array", "Randomized set"],
          ["Prefix queries", "Trie", "Autocomplete"],
        ],
      },
      { t: "h2", text: "The design method" },
      {
        t: "ol",
        items: [
          "**List every operation** and its required complexity.",
          "**Ask what each op needs**: fast lookup? ordering? min/max?",
          "**Map needs to structures**: hash map for lookup, heap for extremes, linked list for reordering.",
          "**Combine them** so each op uses whichever structure serves it best, keeping the two in sync.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "The auxiliary-structure idea recurs everywhere: a second stack to track the running minimum, a hash map beside a list for O(1) index lookup. When one structure can't do it all, add a helper.",
      },
    ],
  },

  // ---------- Greedy ----------
  "dsa/greedy-fundamentals": {
    blocks: [
      { t: "h2", text: "What makes an algorithm greedy" },
      { t: "p", text: "A **greedy algorithm** builds a solution one step at a time, always taking the choice that looks best right now, and never reconsidering. It never backtracks. The bet is that a sequence of locally optimal choices adds up to a globally optimal answer." },
      { t: "p", text: "That bet does not always pay off. Greedy is fast and simple when it works, but proving it works is the hard part. The two properties below are what you must justify." },
      { t: "h2", text: "The two properties greedy needs" },
      {
        t: "ul",
        items: [
          "**Greedy choice property**: a globally optimal solution can be reached by making the locally optimal choice at each step.",
          "**Optimal substructure**: an optimal solution to the problem contains optimal solutions to its subproblems.",
        ],
      },
      { t: "h2", text: "A worked example: interval scheduling" },
      { t: "p", text: "Given intervals, select the maximum number that don't overlap. The greedy rule is: **always pick the interval that finishes earliest**. Finishing early leaves the most room for the rest." },
      {
        t: "code",
        lang: "text",
        code: "sort intervals by end time\nlast_end = -infinity\ncount = 0\nfor each interval [s, e]:\n    if s >= last_end:\n        count += 1\n        last_end = e\nreturn count",
      },
      { t: "h2", text: "When greedy fails" },
      { t: "p", text: "Coin change with denominations {1, 3, 4} and target 6: greedy takes 4 then 1 then 1 (three coins), but the optimum is 3 + 3 (two coins). Here local optimality misleads, so you need dynamic programming instead." },
      {
        t: "callout",
        variant: "warn",
        text: "Never assume a greedy rule is correct because it passes a few examples. Either prove the greedy-choice property or switch to DP. On denominations you don't control, greedy coin change is wrong.",
      },
    ],
  },
  "dsa/exchange-argument": {
    blocks: [
      { t: "h2", text: "Proving a greedy choice is safe" },
      { t: "p", text: "The **exchange argument** is the standard technique for proving a greedy algorithm optimal. You show that any optimal solution can be transformed into the greedy one by swapping elements, without making it worse. If that transformation always exists, the greedy solution is at least as good as any optimal solution — so it is optimal too." },
      { t: "h2", text: "The proof skeleton" },
      {
        t: "ol",
        items: [
          "Assume an optimal solution **O** differs from the greedy solution **G**.",
          "Find the first place they differ.",
          "**Exchange** the element O chose there for the one G chose.",
          "Show the exchange keeps O valid and no worse.",
          "Repeat until O equals G, proving G is optimal.",
        ],
      },
      { t: "h2", text: "Applied to scheduling" },
      { t: "p", text: "For 'maximize non-overlapping intervals', suppose the optimal solution's first chosen interval finishes later than greedy's first pick. Swap it for greedy's earliest-finishing interval: the swap can't cause a new overlap (greedy's finishes no later), and the count is unchanged. Repeating this makes the optimal look exactly like greedy." },
      {
        t: "table",
        head: ["Problem", "Greedy sort key", "Exchange intuition"],
        rows: [
          ["Interval scheduling", "Earliest end time", "Earlier finish never hurts later picks"],
          ["Minimize lateness", "Earliest deadline", "Swapping an inversion never increases lateness"],
          ["Huffman coding", "Two smallest frequencies", "Merging rarest symbols first minimizes total bits"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "In interviews you rarely need a full formal proof. State the exchange argument in one or two sentences — 'swapping any inversion doesn't increase the cost' — to show you know why the greedy rule is safe.",
      },
    ],
  },

  // ---------- Graphs ----------
  "dsa/topological-sort": {
    blocks: [
      { t: "h2", text: "Ordering a dependency graph" },
      { t: "p", text: "A **topological sort** orders the vertices of a **directed acyclic graph (DAG)** so that every edge u → v places u before v. It answers questions like 'in what order can I take these courses given prerequisites?' or 'how do I schedule tasks that depend on one another?'" },
      { t: "p", text: "A topological order exists **if and only if** the graph has no cycle. A cycle means mutual dependency, which can't be linearized." },
      { t: "h2", text: "Kahn's algorithm (BFS style)" },
      {
        t: "ol",
        items: [
          "Compute the **in-degree** (number of incoming edges) of every node.",
          "Push all nodes with in-degree 0 into a queue.",
          "Pop a node, append it to the order, and decrement the in-degree of each neighbor.",
          "When a neighbor's in-degree hits 0, push it.",
          "If the final order has fewer nodes than the graph, a cycle exists.",
        ],
      },
      {
        t: "code",
        lang: "text",
        code: "compute indegree[] for all nodes\nqueue = all nodes with indegree 0\norder = []\nwhile queue not empty:\n    u = queue.pop()\n    order.append(u)\n    for v in adj[u]:\n        indegree[v] -= 1\n        if indegree[v] == 0:\n            queue.push(v)\nif len(order) < n: cycle detected",
      },
      { t: "h2", text: "The DFS alternative" },
      { t: "p", text: "Run DFS and push each node onto a stack **after** exploring all its descendants. Reversing the stack gives a valid topological order. Both approaches are O(V + E)." },
      {
        t: "callout",
        variant: "note",
        text: "Topological order is not unique. Any ordering that respects all edges is valid; Kahn's algorithm with a min-heap instead of a queue produces the lexicographically smallest one.",
      },
    ],
  },
  "dsa/union-find": {
    blocks: [
      { t: "h2", text: "Tracking connectivity efficiently" },
      { t: "p", text: "**Union-Find** (also called a **disjoint set union**, or DSU) maintains a collection of disjoint sets and answers two questions almost instantly: 'are these two elements in the same set?' and 'merge these two sets.' It's the backbone of cycle detection in undirected graphs and of Kruskal's minimum-spanning-tree algorithm." },
      { t: "h2", text: "The two core operations" },
      {
        t: "ul",
        items: [
          "**find(x)**: return a representative (root) of the set containing x.",
          "**union(a, b)**: merge the sets containing a and b.",
        ],
      },
      { t: "h2", text: "Two optimizations make it fast" },
      {
        t: "ul",
        items: [
          "**Path compression**: during find, point every node directly at the root, flattening the tree.",
          "**Union by rank/size**: always attach the smaller tree under the larger one to keep trees shallow.",
        ],
      },
      { t: "p", text: "Together these give near-constant amortized time per operation — O(α(n)), where α is the inverse Ackermann function, effectively ≤ 4 for any practical n." },
      {
        t: "code",
        lang: "text",
        code: "parent[i] = i for all i   # each node its own set\n\nfind(x):\n    if parent[x] != x:\n        parent[x] = find(parent[x])   # path compression\n    return parent[x]\n\nunion(a, b):\n    ra, rb = find(a), find(b)\n    if ra == rb: return\n    if size[ra] < size[rb]: swap(ra, rb)\n    parent[rb] = ra\n    size[ra] += size[rb]",
      },
      {
        t: "callout",
        variant: "tip",
        text: "If you ever process edges and ask 'does adding this edge form a cycle?', Union-Find is the answer: an edge (a, b) creates a cycle exactly when find(a) == find(b) already.",
      },
    ],
  },
  "dsa/dijkstra": {
    blocks: [
      { t: "h2", text: "Shortest paths with non-negative weights" },
      { t: "p", text: "**Dijkstra's algorithm** finds the shortest path from a single source to every other node in a graph with **non-negative** edge weights. It generalizes BFS: instead of expanding by hop count, it always expands the unvisited node with the smallest known distance." },
      { t: "h2", text: "How it works" },
      {
        t: "ol",
        items: [
          "Set the source distance to 0 and all others to infinity.",
          "Put the source in a min-priority-queue keyed by distance.",
          "Pop the closest node u. For each neighbor v, **relax** the edge: if dist[u] + w(u,v) < dist[v], update dist[v] and push v.",
          "Once a node is popped, its distance is final.",
          "Repeat until the queue is empty.",
        ],
      },
      {
        t: "code",
        lang: "text",
        code: "dist[source] = 0, others = infinity\npq = min-heap of (0, source)\nwhile pq not empty:\n    d, u = pq.pop()\n    if d > dist[u]: continue      # stale entry\n    for (v, w) in adj[u]:\n        if dist[u] + w < dist[v]:\n            dist[v] = dist[u] + w\n            pq.push((dist[v], v))",
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "With a binary heap, Dijkstra runs in **O((V + E) log V)**. The 'stale entry' check lets you skip a node you've already finalized instead of using a decrease-key operation." },
      {
        t: "callout",
        variant: "warn",
        text: "Dijkstra breaks on negative edges — once a node is finalized it's never revisited, so a later negative edge that would shorten its path is missed. Use Bellman-Ford when negatives are possible.",
      },
    ],
  },
  "dsa/bellman-ford": {
    blocks: [
      { t: "h2", text: "Shortest paths that tolerate negative edges" },
      { t: "p", text: "**Bellman-Ford** computes shortest paths from a single source even when some edges are negative. It's slower than Dijkstra but strictly more general, and it can **detect negative cycles** — cycles whose total weight is negative, which make 'shortest path' undefined." },
      { t: "h2", text: "The relaxation loop" },
      { t: "p", text: "The key insight: a shortest path in a graph of V nodes uses at most V − 1 edges. So if you relax **every** edge V − 1 times, all shortest distances converge." },
      {
        t: "code",
        lang: "text",
        code: "dist[source] = 0, others = infinity\nrepeat V - 1 times:\n    for each edge (u, v, w):\n        if dist[u] + w < dist[v]:\n            dist[v] = dist[u] + w\n\n# negative-cycle check\nfor each edge (u, v, w):\n    if dist[u] + w < dist[v]:\n        report negative cycle",
      },
      { t: "h2", text: "Dijkstra vs Bellman-Ford" },
      {
        t: "table",
        head: ["Aspect", "Dijkstra", "Bellman-Ford"],
        rows: [
          ["Negative edges", "Not allowed", "Allowed"],
          ["Negative-cycle detection", "No", "Yes"],
          ["Time complexity", "O((V+E) log V)", "O(V · E)"],
          ["Approach", "Greedy + heap", "Repeated relaxation"],
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "If an extra relaxation pass after V − 1 rounds still improves a distance, a negative cycle is reachable. That extra pass is the whole trick behind negative-cycle detection.",
      },
    ],
  },

  // ---------- Dynamic Programming ----------
  "dsa/memoization-vs-tabulation": {
    blocks: [
      { t: "h2", text: "Two ways to implement DP" },
      { t: "p", text: "Dynamic programming caches the answers to overlapping subproblems so each is solved once. There are two implementation styles: **memoization** (top-down) and **tabulation** (bottom-up). They compute the same answers; they differ in direction and mechanics." },
      { t: "h2", text: "Memoization: top-down" },
      { t: "p", text: "Write the natural recursion, then store each result in a cache the first time you compute it. On later calls with the same arguments, return the cached value instead of recursing." },
      {
        t: "code",
        lang: "text",
        code: "memo = {}\nfib(n):\n    if n <= 1: return n\n    if n in memo: return memo[n]\n    memo[n] = fib(n-1) + fib(n-2)\n    return memo[n]",
      },
      { t: "h2", text: "Tabulation: bottom-up" },
      { t: "p", text: "Fill a table starting from the base cases and building up to the target, replacing recursion with iteration." },
      {
        t: "code",
        lang: "text",
        code: "fib(n):\n    dp = [0, 1]\n    for i in 2..n:\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]",
      },
      { t: "h2", text: "Choosing between them" },
      {
        t: "table",
        head: ["Aspect", "Memoization", "Tabulation"],
        rows: [
          ["Direction", "Top-down (recursive)", "Bottom-up (iterative)"],
          ["Computes", "Only needed subproblems", "All subproblems"],
          ["Overhead", "Recursion stack", "No call stack"],
          ["Space savings", "Harder", "Easy to roll to O(1) rows"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Start with memoization to get a correct recurrence quickly, then convert to tabulation if you hit recursion-depth limits or want to shrink space by keeping only the last row or two.",
      },
    ],
  },
  "dsa/2d-dp": {
    blocks: [
      { t: "h2", text: "When the state needs two dimensions" },
      { t: "p", text: "Many DP problems have a state described by **two** indices rather than one: a position in string A and a position in string B, a row and a column in a grid, or an item index and a remaining capacity. The DP table becomes a 2D grid, and each cell depends on a few neighbors." },
      { t: "h2", text: "The recipe" },
      {
        t: "ol",
        items: [
          "Define **dp[i][j]** precisely — say exactly what the value at cell (i, j) means.",
          "Write the **transition**: which earlier cells does dp[i][j] depend on?",
          "Set **base cases** on the first row and first column.",
          "Choose a **fill order** so dependencies are ready when you reach a cell.",
        ],
      },
      { t: "h2", text: "Example: edit distance" },
      { t: "p", text: "dp[i][j] = the minimum edits to turn the first i characters of A into the first j characters of B. If the characters match, carry dp[i-1][j-1]; otherwise take 1 + the minimum of insert, delete, or replace." },
      {
        t: "code",
        lang: "text",
        code: "if A[i-1] == B[j-1]:\n    dp[i][j] = dp[i-1][j-1]\nelse:\n    dp[i][j] = 1 + min(\n        dp[i-1][j],    # delete\n        dp[i][j-1],    # insert\n        dp[i-1][j-1])  # replace",
      },
      { t: "h2", text: "Shrinking the space" },
      { t: "p", text: "When dp[i][j] only depends on the current and previous row, you can keep just two 1D arrays (or even one, updated carefully) and drop memory from O(m·n) to O(n)." },
      {
        t: "callout",
        variant: "note",
        text: "Grid-path problems (count paths, min path sum) are the friendliest 2D DP: each cell usually depends only on the cell above and the cell to the left.",
      },
    ],
  },
  "dsa/knapsack-patterns": {
    blocks: [
      { t: "h2", text: "The knapsack family" },
      { t: "p", text: "The **knapsack** problem — choose items to maximize value within a weight limit — is the template for a huge class of DP problems. Recognizing a problem as knapsack tells you the state and transition immediately." },
      { t: "h2", text: "0/1 knapsack" },
      { t: "p", text: "Each item is taken **at most once**. State: dp[i][w] = best value using the first i items with capacity w. For each item you either skip it or take it." },
      {
        t: "code",
        lang: "text",
        code: "for i in 1..n:\n    for w in 0..W:\n        dp[i][w] = dp[i-1][w]                      # skip\n        if weight[i] <= w:\n            dp[i][w] = max(dp[i][w],\n                value[i] + dp[i-1][w - weight[i]]) # take",
      },
      { t: "p", text: "Rolling to 1D: iterate w **downward** so each item is used once." },
      { t: "h2", text: "Unbounded knapsack" },
      { t: "p", text: "Each item can be taken **any number of times**. Same table, but iterate w **upward** so an item can be reused within the same pass. Coin change (min coins / count ways) is unbounded knapsack in disguise." },
      { t: "h2", text: "Recognizing the pattern" },
      {
        t: "table",
        head: ["Problem", "Knapsack type", "'Weight' / 'Value'"],
        rows: [
          ["Subset sum", "0/1", "number / boolean reachable"],
          ["Partition equal subset", "0/1", "number / half the total"],
          ["Coin change (min)", "Unbounded", "coin / count"],
          ["Rod cutting", "Unbounded", "length / price"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "The direction of the inner loop is the whole difference: descending capacity = each item once (0/1); ascending capacity = unlimited reuse (unbounded).",
      },
    ],
  },

  // ---------- Advanced Topics ----------
  "dsa/segment-trees": {
    blocks: [
      { t: "h2", text: "Range queries with updates" },
      { t: "p", text: "A **segment tree** answers range queries — sum, minimum, maximum, gcd over a subarray — in **O(log n)**, and it also supports **point updates** in O(log n). Prefix sums give O(1) range sums but can't handle updates cheaply; a segment tree trades a little query speed for update flexibility." },
      { t: "h2", text: "The structure" },
      { t: "p", text: "Each node represents a segment of the array. The root covers the whole array; each internal node splits its range in half between two children; leaves are single elements. A node stores the aggregate (e.g. sum) of its range." },
      {
        t: "code",
        lang: "text",
        code: "range [0..7] covers whole array\n  [0..3]\n    [0..1] -> [0], [1]\n    [2..3] -> [2], [3]\n  [4..7]\n    [4..5] -> [4], [5]\n    [6..7] -> [6], [7]",
      },
      { t: "h2", text: "Query and update" },
      {
        t: "ul",
        items: [
          "**Query [l, r]**: descend from the root, combining nodes whose ranges lie fully inside [l, r] and recursing into partially overlapping ones.",
          "**Update index i**: change the leaf, then walk back up recomputing each parent's aggregate.",
        ],
      },
      { t: "h2", text: "Lazy propagation" },
      { t: "p", text: "For **range** updates (add x to every element in [l, r]), storing a pending 'lazy' value at each node and pushing it down only when needed keeps range updates at O(log n) too." },
      {
        t: "callout",
        variant: "note",
        text: "A segment tree over n elements uses about 4n array slots when stored flat. Allocate 4n to be safe.",
      },
    ],
  },
  "dsa/fenwick-tree": {
    blocks: [
      { t: "h2", text: "A lean prefix-sum structure" },
      { t: "p", text: "A **Fenwick tree**, or **binary indexed tree (BIT)**, supports prefix-sum queries and point updates in **O(log n)** using a single array and only a few lines of code. It does less than a segment tree — primarily prefix sums — but it's smaller, faster in practice, and much simpler to write." },
      { t: "h2", text: "The core trick: lowest set bit" },
      { t: "p", text: "Each index i is responsible for a range of length equal to its **lowest set bit**, computed as i & (-i). Moving to i + (i & -i) walks up when updating; moving to i − (i & -i) walks down when querying a prefix." },
      {
        t: "code",
        lang: "text",
        code: "update(i, delta):        # add delta at index i\n    while i <= n:\n        tree[i] += delta\n        i += i & (-i)\n\nquery(i):                # prefix sum of [1..i]\n    sum = 0\n    while i > 0:\n        sum += tree[i]\n        i -= i & (-i)\n    return sum",
      },
      { t: "p", text: "A range sum [l, r] is simply query(r) − query(l − 1)." },
      { t: "h2", text: "Fenwick vs segment tree" },
      {
        t: "table",
        head: ["Aspect", "Fenwick tree", "Segment tree"],
        rows: [
          ["Code size", "~10 lines", "~40 lines"],
          ["Memory", "n", "~4n"],
          ["Operations", "Prefix sums, point update", "Any associative range op + range update"],
          ["Constant factor", "Very small", "Larger"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Reach for a Fenwick tree when all you need is prefix sums with updates — counting inversions, for instance. Use a segment tree only when you need range min/max or range updates it can't do.",
      },
    ],
  },
  "dsa/kmp-algorithm": {
    blocks: [
      { t: "h2", text: "Linear-time string matching" },
      { t: "p", text: "The **Knuth-Morris-Pratt (KMP)** algorithm finds all occurrences of a pattern inside a text in **O(n + m)** time, where n and m are the lengths of the text and pattern. Naive matching can degrade to O(n·m) because it re-checks characters after a mismatch; KMP never moves backward in the text." },
      { t: "h2", text: "The failure function" },
      { t: "p", text: "KMP precomputes an array over the pattern called the **prefix function** (or failure function). For each position it stores the length of the longest proper prefix of the pattern that is also a suffix ending there. On a mismatch, this tells you how far you can shift the pattern without missing a match." },
      {
        t: "code",
        lang: "text",
        code: "pattern = a b a b c\nlps     = 0 0 1 2 0\n# lps[i] = longest prefix that is also a suffix\n# in pattern[0..i]",
      },
      { t: "h2", text: "The match loop" },
      { t: "p", text: "Slide through the text with a single pointer. On a mismatch at pattern position j, jump j back to lps[j − 1] instead of restarting at 0 — the text pointer never retreats." },
      {
        t: "code",
        lang: "text",
        code: "j = 0\nfor i in 0..n-1:\n    while j > 0 and text[i] != pattern[j]:\n        j = lps[j-1]\n    if text[i] == pattern[j]:\n        j += 1\n    if j == m:\n        report match at i - m + 1\n        j = lps[j-1]",
      },
      {
        t: "callout",
        variant: "note",
        text: "Building the lps array is itself a self-matching of the pattern against itself, and it also runs in O(m). Understanding lps is the whole battle — the search loop follows directly.",
      },
    ],
  },
  "dsa/rabin-karp": {
    blocks: [
      { t: "h2", text: "String matching with hashing" },
      { t: "p", text: "**Rabin-Karp** searches for a pattern by comparing **hash values** instead of characters. It hashes the pattern once, then slides a window across the text and compares the window's hash to the pattern's. Only when the hashes match does it verify character by character." },
      { t: "h2", text: "The rolling hash" },
      { t: "p", text: "The key to efficiency is the **rolling hash**: when the window slides one position, you don't rehash from scratch. You remove the contribution of the outgoing character and add the incoming one in O(1)." },
      {
        t: "code",
        lang: "text",
        code: "new_hash = (old_hash - out * base^(m-1)) * base + in\n# treat the window as a base-B number,\n# updated in O(1) as it slides",
      },
      { t: "h2", text: "Why verify after a hash match" },
      { t: "p", text: "Two different strings can share a hash — a **collision**. A hash match is only a candidate; you confirm it with a direct comparison. With a good modulus, collisions are rare, so the expected running time is O(n + m)." },
      { t: "h2", text: "Where it shines" },
      {
        t: "ul",
        items: [
          "**Multiple-pattern search**: hash all patterns, compare each window against the set.",
          "**Detecting duplicate substrings** of a fixed length across a large text.",
          "**2D pattern matching**, by rolling hashes over rows and columns.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Worst case is O(n·m) if hashes collide constantly (adversarial input or a poor modulus). Use a large prime modulus, and consider double hashing when correctness under adversarial data matters.",
      },
    ],
  },
  "dsa/minimum-spanning-tree": {
    blocks: [
      { t: "h2", text: "Connecting everything for the least cost" },
      { t: "p", text: "A **minimum spanning tree (MST)** of a weighted, connected, undirected graph is a subset of edges that connects all vertices with the **minimum possible total weight** and no cycles. With V vertices, an MST always has exactly V − 1 edges. Think laying cable to connect all towns as cheaply as possible." },
      { t: "h2", text: "Kruskal's algorithm" },
      {
        t: "ol",
        items: [
          "Sort all edges by weight, ascending.",
          "Walk through them, adding an edge if it connects two **different** components.",
          "Use **Union-Find** to test whether an edge would form a cycle.",
          "Stop once V − 1 edges are chosen.",
        ],
      },
      { t: "p", text: "Kruskal's runs in O(E log E), dominated by the sort." },
      { t: "h2", text: "Prim's algorithm" },
      { t: "p", text: "Grow the tree from a starting vertex. Repeatedly add the **cheapest edge** that connects a vertex inside the tree to one outside, using a min-priority-queue. With a binary heap this is O(E log V)." },
      {
        t: "table",
        head: ["Aspect", "Kruskal", "Prim"],
        rows: [
          ["Strategy", "Sort edges, union components", "Grow one tree from a seed"],
          ["Core structure", "Union-Find", "Priority queue"],
          ["Best for", "Sparse graphs", "Dense graphs"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Both rely on the cut property: for any partition of the vertices, the lightest edge crossing the cut is safe to include in some MST. That single fact justifies both greedy algorithms.",
      },
    ],
  },
  "dsa/bitmask-dp": {
    blocks: [
      { t: "h2", text: "When the state is a set" },
      { t: "p", text: "**Bitmask DP** encodes a subset of items as the bits of an integer and uses that integer as a DP state. If item i is in the subset, bit i is 1. It's the go-to technique for problems over small sets (typically n ≤ 20) where you must track exactly which elements have been used." },
      { t: "h2", text: "Representing subsets as integers" },
      {
        t: "table",
        head: ["Operation", "Bit expression", "Meaning"],
        rows: [
          ["Is i in the set?", "mask & (1 << i)", "Non-zero if present"],
          ["Add i", "mask | (1 << i)", "Set bit i"],
          ["Remove i", "mask & ~(1 << i)", "Clear bit i"],
          ["Full set of n", "(1 << n) - 1", "All bits 1"],
        ],
      },
      { t: "h2", text: "Example: traveling salesman" },
      { t: "p", text: "dp[mask][i] = the minimum cost to have visited exactly the set of cities in mask, currently standing at city i. Transition to an unvisited city j by turning on its bit." },
      {
        t: "code",
        lang: "text",
        code: "dp[mask][i] = min cost, visited = mask, now at i\n\nfor each mask, each i in mask:\n    for each j not in mask:\n        next = mask | (1 << j)\n        dp[next][j] = min(dp[next][j],\n                          dp[mask][i] + dist[i][j])",
      },
      { t: "h2", text: "The cost of bitmask DP" },
      { t: "p", text: "There are 2^n subsets, so the state space is exponential — O(2^n · n) states for TSP-style problems. That's why bitmask DP is limited to small n, but within that range it turns brute-force factorial searches into something tractable." },
      {
        t: "callout",
        variant: "note",
        text: "Iterate masks in increasing numeric order when transitions only add bits — a superset mask is always a larger integer than its subsets, so dependencies are ready in time.",
      },
    ],
  },
};
