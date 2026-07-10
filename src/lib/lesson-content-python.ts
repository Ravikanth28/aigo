// Authored lesson content for the Python course. All prose is original and
// written for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const PYTHON_CONTENT: Record<string, LessonContent> = {
  "python/python-getting-started": {
    blocks: [
      { t: "h2", text: "Why Python reads like pseudocode" },
      { t: "p", text: "Python's design goal is readability. Significant indentation forces consistent structure, and the standard library ships with batteries for almost every common task. That combination makes it the default choice for scripting, data work, and interview prototyping." },
      { t: "code", lang: "python", code: "def greet(name: str) -> str:\n    return f\"Hello, {name}\"\n\nprint(greet(\"world\"))" },
      { t: "callout", variant: "tip", text: "Indentation is syntax, not style. Mixing tabs and spaces is a runtime error waiting to happen — configure your editor to insert 4 spaces." },
    ],
  },
  "python/python-numbers-strings": {
    blocks: [
      { t: "h2", text: "Numbers and immutable text" },
      { t: "p", text: "Integers in Python have arbitrary precision — they never overflow. Floats are standard IEEE-754 doubles with the usual rounding surprises. Strings are immutable sequences of Unicode code points, so every 'modification' actually produces a new string." },
      { t: "ul", items: ["`//` is floor division; `/` always returns a float.", "Use `decimal.Decimal` for money, never binary floats.", "f-strings (`f\"{x:.2f}\"`) are the modern way to format."] },
      { t: "callout", variant: "warn", text: "Because strings are immutable, building one with `+=` in a loop is O(n^2). Collect pieces in a list and `\"\".join(parts)` instead." },
    ],
  },
  "python/python-lists-tuples": {
    blocks: [
      { t: "h2", text: "Mutable lists, immutable tuples" },
      { t: "p", text: "A list is a dynamic array: fast indexing and append, slow insert/delete at the front. A tuple is a fixed, immutable sequence, which makes it hashable and usable as a dict key. Reach for a tuple when the collection should not change." },
      { t: "table", head: ["Operation", "list", "tuple"], rows: [["Index access", "O(1)", "O(1)"], ["Append", "Amortized O(1)", "N/A (immutable)"], ["Hashable", "No", "Yes (if elements are)"]] },
      { t: "code", lang: "python", code: "point = (3, 4)      # tuple, can be a dict key\nrow = [1, 2, 3]     # list, mutable\nrow.append(4)" },
    ],
  },
  "python/python-dicts-sets": {
    blocks: [
      { t: "h2", text: "Hash tables in disguise" },
      { t: "p", text: "Dicts and sets are both backed by hash tables, giving average O(1) lookup, insert, and delete. Since Python 3.7 dicts preserve insertion order. Sets are dicts without values — perfect for membership tests and deduplication." },
      { t: "code", lang: "python", code: "counts = {}\nfor word in text.split():\n    counts[word] = counts.get(word, 0) + 1\n\nunique = set(text.split())" },
      { t: "callout", variant: "tip", text: "`collections.Counter` and `dict.setdefault` remove most manual counting boilerplate." },
    ],
  },
  "python/python-control-flow": {
    blocks: [
      { t: "h2", text: "Branching and looping" },
      { t: "p", text: "Python has the usual `if/elif/else`, `while`, and `for` — but `for` iterates over any iterable, not an index range. The `else` clause on loops runs only if the loop finished without `break`, which is useful for search patterns." },
      { t: "code", lang: "python", code: "for x in items:\n    if x == target:\n        break\nelse:\n    print(\"not found\")  # runs only if no break" },
      { t: "callout", variant: "note", text: "`match/case` (Python 3.10+) adds structural pattern matching, far more powerful than a C-style switch." },
    ],
  },
  "python/python-functions-args": {
    blocks: [
      { t: "h2", text: "Flexible argument passing" },
      { t: "p", text: "Python functions support positional, keyword, default, and variadic arguments. `*args` captures extra positionals as a tuple; `**kwargs` captures extra keywords as a dict. This flexibility is what makes decorators and wrappers possible." },
      { t: "code", lang: "python", code: "def f(a, b=2, *args, **kwargs):\n    ...\n\nf(1, 3, 4, 5, mode=\"fast\")  # a=1 b=3 args=(4,5) kwargs={'mode':'fast'}" },
      { t: "callout", variant: "warn", text: "Never use a mutable default like `def f(x=[])`. The list is created once and shared across calls. Use `None` and build inside." },
    ],
  },
  "python/python-closures": {
    blocks: [
      { t: "h2", text: "Functions that remember" },
      { t: "p", text: "A closure is a nested function that captures variables from its enclosing scope. The inner function keeps those variables alive even after the outer function returns. Closures are the foundation of decorators and callback state." },
      { t: "code", lang: "python", code: "def counter():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 1\n        return n\n    return inc" },
      { t: "callout", variant: "note", text: "Use `nonlocal` to rebind an enclosing variable; without it, assignment creates a new local instead." },
    ],
  },
  "python/python-decorators": {
    blocks: [
      { t: "h2", text: "Wrapping behavior" },
      { t: "p", text: "A decorator is a function that takes a function and returns a replacement, letting you add behavior — logging, caching, timing, access control — without editing the original. The `@` syntax is just sugar for `f = decorator(f)`." },
      { t: "code", lang: "python", code: "import functools\n\ndef timed(fn):\n    @functools.wraps(fn)\n    def wrapper(*args, **kwargs):\n        return fn(*args, **kwargs)\n    return wrapper" },
      { t: "callout", variant: "tip", text: "Always apply `functools.wraps` so the wrapper keeps the original name, docstring, and signature for debugging." },
    ],
  },
  "python/python-generators": {
    blocks: [
      { t: "h2", text: "Lazy sequences with yield" },
      { t: "p", text: "A generator produces values one at a time using `yield`, computing each only when requested. This lets you process streams larger than memory and build pipelines that never materialize the whole sequence." },
      { t: "code", lang: "python", code: "def read_lines(path):\n    with open(path) as f:\n        for line in f:\n            yield line.rstrip()" },
      { t: "callout", variant: "note", text: "Generators are single-pass. Once exhausted, iterate again by creating a fresh generator." },
    ],
  },
  "python/python-comprehensions": {
    blocks: [
      { t: "h2", text: "Declarative collection building" },
      { t: "p", text: "Comprehensions build lists, sets, and dicts in a single expression that reads close to the math it expresses. They are usually faster than the equivalent loop and signal intent clearly — but nesting them too deeply hurts readability." },
      { t: "code", lang: "python", code: "squares = [x*x for x in range(10)]\nevens = {x for x in nums if x % 2 == 0}\nindex = {name: i for i, name in enumerate(names)}" },
      { t: "callout", variant: "warn", text: "If a comprehension needs more than one condition and a nested loop, a plain `for` loop is probably clearer." },
    ],
  },
  "python/python-objects": {
    blocks: [
      { t: "h2", text: "Everything is an object" },
      { t: "p", text: "In Python, functions, classes, modules, and even types are objects with attributes. Variables are names bound to objects, not boxes holding values. Assignment binds a name; it never copies the object." },
      { t: "code", lang: "python", code: "a = [1, 2, 3]\nb = a          # same object\nb.append(4)    # a is now [1,2,3,4]\nprint(a is b)  # True" },
      { t: "callout", variant: "note", text: "`is` compares identity (same object); `==` compares value. Confusing them is a common bug." },
    ],
  },
  "python/python-dunder-methods": {
    blocks: [
      { t: "h2", text: "Hooking into Python syntax" },
      { t: "p", text: "Dunder (double-underscore) methods let your objects participate in language operations. Define `__len__` for `len()`, `__eq__` for `==`, `__iter__` for `for` loops, `__repr__` for debugging output. This is how Python achieves consistent, duck-typed behavior." },
      { t: "code", lang: "python", code: "class Vec:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, o):\n        return Vec(self.x + o.x, self.y + o.y)\n    def __repr__(self):\n        return f\"Vec({self.x}, {self.y})\"" },
    ],
  },
  "python/python-classes": {
    blocks: [
      { t: "h2", text: "Classes and instances" },
      { t: "p", text: "A class bundles data and behavior. `__init__` initializes instance state; `self` is the explicit reference to the instance. Class attributes are shared across instances, while instance attributes belong to each object." },
      { t: "ul", items: ["Instance methods take `self`.", "`@classmethod` takes `cls` and often builds alternative constructors.", "`@staticmethod` takes neither — it is just a namespaced function."] },
      { t: "callout", variant: "warn", text: "A mutable class attribute is shared by all instances. Initialize per-instance state inside `__init__`." },
    ],
  },
  "python/python-dataclasses": {
    blocks: [
      { t: "h2", text: "Less boilerplate for data holders" },
      { t: "p", text: "The `@dataclass` decorator generates `__init__`, `__repr__`, and `__eq__` from type-annotated fields. It turns a dozen lines of boilerplate into a clean declaration, which is ideal for value objects and DTOs." },
      { t: "code", lang: "python", code: "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int" },
      { t: "callout", variant: "tip", text: "`frozen=True` makes instances immutable and hashable — safe to use as dict keys or set members." },
    ],
  },
  "python/python-mutability": {
    blocks: [
      { t: "h2", text: "Mutable vs immutable" },
      { t: "p", text: "Immutable types (int, str, tuple, frozenset) cannot change after creation; mutable types (list, dict, set) can. This distinction drives subtle bugs around shared references, default arguments, and using objects as dict keys." },
      { t: "table", head: ["Immutable", "Mutable"], rows: [["int, float, bool", "list"], ["str, bytes", "dict"], ["tuple, frozenset", "set"]] },
      { t: "callout", variant: "note", text: "Passing a list to a function and mutating it changes the caller's list. If you need a copy, make one explicitly." },
    ],
  },
  "python/python-collections-module": {
    blocks: [
      { t: "h2", text: "Specialized containers" },
      { t: "p", text: "The `collections` module provides high-value data structures beyond the built-ins. They remove common boilerplate and are frequently the cleanest answer in interviews." },
      { t: "table", head: ["Type", "Use for"], rows: [["Counter", "Frequency counting"], ["defaultdict", "Grouping without key checks"], ["deque", "O(1) append/pop at both ends"], ["OrderedDict", "Order-sensitive dict operations"]] },
      { t: "code", lang: "python", code: "from collections import defaultdict\ngroups = defaultdict(list)\nfor word in words:\n    groups[len(word)].append(word)" },
    ],
  },
  "python/python-itertools": {
    blocks: [
      { t: "h2", text: "Iterator building blocks" },
      { t: "p", text: "`itertools` offers memory-efficient tools for combining and slicing iterables lazily. Because they return iterators, they compose into pipelines without building intermediate lists." },
      { t: "ul", items: ["`chain` concatenates iterables.", "`groupby` groups consecutive equal keys.", "`combinations` / `permutations` for enumeration.", "`islice` slices without indexing."] },
      { t: "callout", variant: "warn", text: "`groupby` only groups adjacent items — sort first if you want global grouping." },
    ],
  },
  "python/python-functools": {
    blocks: [
      { t: "h2", text: "Tools for functions" },
      { t: "p", text: "`functools` provides higher-order utilities. `lru_cache` memoizes pure functions with one decorator; `partial` pre-binds arguments; `reduce` folds a sequence into a single value." },
      { t: "code", lang: "python", code: "from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)" },
      { t: "callout", variant: "tip", text: "`lru_cache` turns exponential recursion into linear time — a one-line fix for many DP-style problems." },
    ],
  },
  "python/python-heapq-bisect": {
    blocks: [
      { t: "h2", text: "Heaps and sorted insertion" },
      { t: "p", text: "`heapq` implements a binary min-heap on a plain list, giving O(log n) push and pop of the smallest item. `bisect` maintains a sorted list with binary-search insertion. Both are staples for top-k, scheduling, and range problems." },
      { t: "code", lang: "python", code: "import heapq\nh = []\nheapq.heappush(h, 3)\nheapq.heappush(h, 1)\nsmallest = heapq.heappop(h)  # 1" },
      { t: "callout", variant: "note", text: "For a max-heap, push negated values, or store `(-priority, item)` tuples." },
    ],
  },
  "python/python-context-managers": {
    blocks: [
      { t: "h2", text: "Guaranteed cleanup with with" },
      { t: "p", text: "A context manager guarantees setup and teardown around a block, even if an exception fires. Files, locks, and connections all use this pattern. You implement it via `__enter__`/`__exit__` or the `@contextmanager` decorator." },
      { t: "code", lang: "python", code: "from contextlib import contextmanager\n\n@contextmanager\ndef timer():\n    start = now()\n    try:\n        yield\n    finally:\n        print(now() - start)" },
    ],
  },
  "python/python-typing": {
    blocks: [
      { t: "h2", text: "Optional static types" },
      { t: "p", text: "Type hints document intent and enable tools like mypy to catch bugs before runtime. They are not enforced by the interpreter — Python stays dynamically typed — but they dramatically improve editor support and large-codebase maintainability." },
      { t: "code", lang: "python", code: "from typing import Optional\n\ndef find(items: list[int], target: int) -> Optional[int]:\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return None" },
      { t: "callout", variant: "tip", text: "Run mypy or pyright in CI so hints stay honest as the code evolves." },
    ],
  },
  "python/python-gil": {
    blocks: [
      { t: "h2", text: "The Global Interpreter Lock" },
      { t: "p", text: "CPython's GIL allows only one thread to execute Python bytecode at a time. Threads still help with I/O-bound work (the lock is released during blocking calls) but cannot parallelize CPU-bound Python code. For true CPU parallelism, use processes." },
      { t: "table", head: ["Workload", "Best tool"], rows: [["I/O-bound", "threads or asyncio"], ["CPU-bound", "multiprocessing"], ["Numeric arrays", "NumPy (releases the GIL)"]] },
      { t: "callout", variant: "note", text: "Free-threaded builds (PEP 703) are experimental steps toward removing the GIL, but the constraint above still holds in mainstream CPython." },
    ],
  },
  "python/python-async": {
    blocks: [
      { t: "h2", text: "Cooperative concurrency" },
      { t: "p", text: "`asyncio` runs many I/O-bound tasks on a single thread using an event loop. `await` yields control while waiting, letting other coroutines run. It scales to thousands of concurrent connections without the overhead of threads." },
      { t: "code", lang: "python", code: "import asyncio\n\nasync def fetch(url):\n    ...  # await network I/O\n\nasync def main():\n    await asyncio.gather(fetch(a), fetch(b))" },
      { t: "callout", variant: "warn", text: "One blocking call (a CPU loop or a synchronous library) stalls the entire event loop. Keep coroutines non-blocking." },
    ],
  },
  "python/python-gotchas": {
    blocks: [
      { t: "h2", text: "Traps that bite everyone" },
      { t: "p", text: "A handful of Python behaviors surprise even experienced developers. Knowing them prevents real production bugs." },
      { t: "ul", items: ["Mutable default arguments are shared across calls.", "Late binding in closures captures the variable, not its value at definition time.", "`is` vs `==` — small ints and short strings are cached, masking the difference.", "Modifying a list while iterating over it skips elements."] },
      { t: "callout", variant: "warn", text: "In loops that build closures, bind the loop variable as a default argument to capture its current value." },
    ],
  },
};
