// Authored lesson content for the C++ course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const CPP_CONTENT: Record<string, LessonContent> = {
  "cpp/cpp-getting-started": {
    blocks: [
      { t: "h2", text: "Power with responsibility" },
      { t: "p", text: "C++ gives you direct control over memory and machine resources while still offering high-level abstractions. That control is why it powers game engines, browsers, and trading systems — and why mistakes here cause crashes rather than exceptions." },
      { t: "code", lang: "cpp", code: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, world\\n\";\n    return 0;\n}" },
      { t: "callout", variant: "tip", text: "Compile with warnings on: `-Wall -Wextra`. Modern C++ (C++17/20) removes most of the sharp edges of older styles." },
    ],
  },
  "cpp/cpp-types": {
    blocks: [
      { t: "h2", text: "A static, value-based type system" },
      { t: "p", text: "C++ is statically typed and value-oriented: variables hold actual objects, not references, unless you say otherwise. Fixed-width integer types and `auto` type deduction keep code both precise and concise." },
      { t: "ul", items: ["`int`, `long`, `size_t` — sizes are platform-dependent; use `<cstdint>` for fixed widths.", "`auto` deduces the type from the initializer.", "`const` and `constexpr` express immutability and compile-time constants."] },
      { t: "callout", variant: "warn", text: "Signed/unsigned mismatches and integer overflow are silent. Prefer `size_t` for sizes and enable `-Wconversion`." },
    ],
  },
  "cpp/cpp-control-flow": {
    blocks: [
      { t: "h2", text: "Branching, loops, and range-for" },
      { t: "p", text: "Beyond the classic C constructs, modern C++ offers the range-based for loop, which iterates any container without manual indices, and `switch` with `[[fallthrough]]` to make intent explicit." },
      { t: "code", lang: "cpp", code: "for (const auto& x : vec) {\n    std::cout << x << ' ';\n}\n\nif (auto it = m.find(key); it != m.end()) {\n    use(it->second);\n}" },
      { t: "callout", variant: "tip", text: "Iterate by `const auto&` to avoid copying each element; use `auto&` when you need to modify in place." },
    ],
  },
  "cpp/cpp-references-pointers": {
    blocks: [
      { t: "h2", text: "References vs pointers" },
      { t: "p", text: "A reference is an alias that must bind on creation and can never be reseated or null. A pointer is a variable holding an address; it can be null, reassigned, and arithmetic'd. Prefer references for parameters and pointers only when null or rebinding is meaningful." },
      { t: "table", head: ["", "Reference", "Pointer"], rows: [["Can be null", "No", "Yes"], ["Reassignable", "No", "Yes"], ["Needs deref syntax", "No", "Yes (*/->)"]] },
      { t: "callout", variant: "warn", text: "Never return a reference or pointer to a local variable — it dangles the moment the function returns." },
    ],
  },
  "cpp/cpp-stack-heap": {
    blocks: [
      { t: "h2", text: "Automatic vs dynamic storage" },
      { t: "p", text: "Stack objects have automatic lifetime — created on declaration, destroyed at scope exit — and are extremely fast. Heap objects live until you free them and are needed when size or lifetime is dynamic. Favor the stack; reach for the heap only when necessary." },
      { t: "code", lang: "cpp", code: "int x = 5;                 // stack, freed automatically\nauto p = std::make_unique<int>(5);  // heap, freed when p dies" },
      { t: "callout", variant: "note", text: "Stack space is limited (often a few MB). Deep recursion or huge local arrays cause stack overflow." },
    ],
  },
  "cpp/cpp-new-delete": {
    blocks: [
      { t: "h2", text: "Manual memory and its dangers" },
      { t: "p", text: "`new` allocates on the heap and `delete` frees it. Every `new` needs exactly one matching `delete`; miss it and you leak, double it and you corrupt the heap. This manual pairing is the single largest source of C++ bugs." },
      { t: "ul", items: ["Leak — forgot to `delete`.", "Double free — deleted the same pointer twice.", "Use-after-free — accessed memory after `delete`.", "Array mismatch — `new[]` must pair with `delete[]`."] },
      { t: "callout", variant: "warn", text: "In modern C++ you should almost never write raw `new`/`delete`. Use smart pointers and containers instead." },
    ],
  },
  "cpp/cpp-smart-pointers": {
    blocks: [
      { t: "h2", text: "Ownership made automatic" },
      { t: "p", text: "Smart pointers encode ownership in the type system and free memory automatically. `unique_ptr` is a single owner with zero overhead; `shared_ptr` reference-counts for shared ownership; `weak_ptr` breaks reference cycles." },
      { t: "code", lang: "cpp", code: "auto a = std::make_unique<Widget>();   // sole owner\nauto b = std::make_shared<Widget>();   // shared, ref-counted" },
      { t: "callout", variant: "tip", text: "Default to `unique_ptr`. Only upgrade to `shared_ptr` when ownership is genuinely shared — ref counting is not free." },
    ],
  },
  "cpp/cpp-raii": {
    blocks: [
      { t: "h2", text: "Resource Acquisition Is Initialization" },
      { t: "p", text: "RAII ties a resource's lifetime to an object's scope: acquire in the constructor, release in the destructor. Because destructors run deterministically at scope exit — even during exceptions — resources are never leaked. This is the central idiom of C++." },
      { t: "code", lang: "cpp", code: "{\n    std::lock_guard<std::mutex> lock(m);  // acquires\n    critical_section();\n}  // destructor releases the lock automatically" },
      { t: "callout", variant: "note", text: "Files, locks, sockets, and memory all follow RAII. If you find yourself writing manual cleanup, wrap it in an RAII type." },
    ],
  },
  "cpp/cpp-move-semantics": {
    blocks: [
      { t: "h2", text: "Transferring instead of copying" },
      { t: "p", text: "Move semantics let an object steal another's resources rather than copying them, which is huge for large containers. `std::move` casts to an rvalue reference, signaling that the source may be left empty. Move constructors and move assignment implement the transfer." },
      { t: "code", lang: "cpp", code: "std::vector<int> a = build();\nstd::vector<int> b = std::move(a);  // b takes a's buffer, no copy" },
      { t: "callout", variant: "warn", text: "After a move, the source is valid but unspecified. Only assign to it or destroy it — do not read its value." },
    ],
  },
  "cpp/cpp-classes": {
    blocks: [
      { t: "h2", text: "Encapsulation and lifetime" },
      { t: "p", text: "A C++ class controls access with `public`/`private`, initializes members in constructors (ideally via the initializer list), and cleans up in the destructor. Combined with RAII, classes make resource management automatic." },
      { t: "code", lang: "cpp", code: "class Account {\npublic:\n    explicit Account(double b) : balance_(b) {}\nprivate:\n    double balance_;\n};" },
      { t: "callout", variant: "tip", text: "Mark single-argument constructors `explicit` to prevent surprising implicit conversions." },
    ],
  },
  "cpp/cpp-inheritance": {
    blocks: [
      { t: "h2", text: "Virtual functions and polymorphism" },
      { t: "p", text: "Inheritance models 'is-a' relationships. Marking a method `virtual` enables runtime dispatch through a base pointer or reference. A base class with virtuals must declare a `virtual` destructor, or deleting through a base pointer is undefined." },
      { t: "code", lang: "cpp", code: "struct Shape {\n    virtual double area() const = 0;  // pure virtual\n    virtual ~Shape() = default;\n};" },
      { t: "callout", variant: "warn", text: "Forgetting a virtual destructor on a polymorphic base class leaks the derived part on delete." },
    ],
  },
  "cpp/cpp-operator-overloading": {
    blocks: [
      { t: "h2", text: "Natural syntax for your types" },
      { t: "p", text: "Operator overloading lets your types use `+`, `==`, `<<`, and more, so numeric and value types read naturally. Overload only where the meaning is obvious; surprising operators hurt readability more than they help." },
      { t: "code", lang: "cpp", code: "struct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};" },
      { t: "callout", variant: "note", text: "C++20's spaceship operator `<=>` generates all comparison operators from one definition." },
    ],
  },
  "cpp/cpp-rule-of-five": {
    blocks: [
      { t: "h2", text: "Managing special member functions" },
      { t: "p", text: "If a class manages a resource, the compiler-generated copy/move/destructor may be wrong. The Rule of Five says: if you define any of destructor, copy constructor, copy assignment, move constructor, or move assignment, you likely need all five." },
      { t: "callout", variant: "tip", text: "Better still, follow the Rule of Zero — let members (smart pointers, containers) manage resources so you write none of the five." },
    ],
  },
  "cpp/cpp-vector": {
    blocks: [
      { t: "h2", text: "The default container" },
      { t: "p", text: "`std::vector` is a growable contiguous array. Contiguity means cache-friendly iteration and O(1) random access; growth is amortized O(1) via geometric reallocation. It should be your default sequence container." },
      { t: "code", lang: "cpp", code: "std::vector<int> v;\nv.reserve(1000);      // avoid repeated reallocation\nv.push_back(42);" },
      { t: "callout", variant: "warn", text: "Any reallocation (push_back past capacity) invalidates all iterators and pointers into the vector." },
    ],
  },
  "cpp/cpp-map-set": {
    blocks: [
      { t: "h2", text: "Ordered associative containers" },
      { t: "p", text: "`std::map` and `std::set` are balanced binary search trees, giving O(log n) operations and sorted iteration. Use them when you need keys kept in order or range queries; otherwise the unordered variants are faster." },
      { t: "table", head: ["Container", "Backing", "Complexity"], rows: [["map / set", "Red-black tree", "O(log n), ordered"], ["unordered_map / set", "Hash table", "O(1) avg, unordered"]] },
    ],
  },
  "cpp/cpp-unordered": {
    blocks: [
      { t: "h2", text: "Hash-based containers" },
      { t: "p", text: "`std::unordered_map` and `std::unordered_set` use hash tables for average O(1) lookup, insert, and erase. They trade ordering for speed and require a hash function for custom key types." },
      { t: "code", lang: "cpp", code: "std::unordered_map<std::string, int> counts;\nfor (const auto& w : words) ++counts[w];" },
      { t: "callout", variant: "note", text: "Worst case is O(n) under adversarial collisions. For custom keys, provide a good `std::hash` specialization." },
    ],
  },
  "cpp/cpp-algorithms": {
    blocks: [
      { t: "h2", text: "The <algorithm> toolbox" },
      { t: "p", text: "The standard algorithms operate on iterator ranges, decoupling logic from container type. Preferring `std::sort`, `find_if`, `accumulate`, and friends over hand-written loops yields shorter, correct, well-optimized code." },
      { t: "code", lang: "cpp", code: "std::sort(v.begin(), v.end());\nauto it = std::lower_bound(v.begin(), v.end(), target);" },
      { t: "callout", variant: "tip", text: "C++20 ranges let you write `std::ranges::sort(v)` and chain views without explicit iterators." },
    ],
  },
  "cpp/cpp-iterators": {
    blocks: [
      { t: "h2", text: "The glue between containers and algorithms" },
      { t: "p", text: "Iterators generalize pointers into a uniform interface for traversing containers. Their categories — input, forward, bidirectional, random-access — determine which algorithms apply and at what cost." },
      { t: "callout", variant: "warn", text: "Iterator invalidation rules differ per container. Mutating a container mid-iteration is the classic source of crashes; know each container's rules." },
    ],
  },
  "cpp/cpp-templates": {
    blocks: [
      { t: "h2", text: "Compile-time generic code" },
      { t: "p", text: "Templates generate type-specialized code at compile time, giving generics with zero runtime overhead. The entire STL is built on them. C++20 concepts constrain template parameters so errors are readable instead of pages of instantiation noise." },
      { t: "code", lang: "cpp", code: "template <typename T>\nT max_of(T a, T b) { return a > b ? a : b; }" },
      { t: "callout", variant: "note", text: "Templates are compiled per instantiation, so definitions live in headers. This grows compile times and binary size." },
    ],
  },
  "cpp/cpp-lambdas": {
    blocks: [
      { t: "h2", text: "Inline function objects" },
      { t: "p", text: "Lambdas create anonymous function objects inline, with an explicit capture list controlling what surrounding state they use. They pair perfectly with the standard algorithms as predicates and comparators." },
      { t: "code", lang: "cpp", code: "int threshold = 10;\nauto big = [threshold](int x) { return x > threshold; };\nauto n = std::count_if(v.begin(), v.end(), big);" },
      { t: "callout", variant: "warn", text: "Capturing by reference (`[&]`) and storing the lambda beyond the captured variable's lifetime creates a dangling reference." },
    ],
  },
  "cpp/cpp-concurrency": {
    blocks: [
      { t: "h2", text: "Threads and synchronization" },
      { t: "p", text: "The `<thread>` and `<mutex>` headers provide portable concurrency. Protect shared mutable state with a mutex (via `lock_guard`), use `std::atomic` for lock-free counters, and prefer higher-level tools like `std::async` and futures where possible." },
      { t: "code", lang: "cpp", code: "std::mutex m;\nstd::thread t([&]{\n    std::lock_guard<std::mutex> lk(m);\n    shared_data.push_back(1);\n});" },
      { t: "callout", variant: "warn", text: "A data race — two threads touching the same memory with at least one write and no synchronization — is undefined behavior, not merely a wrong answer." },
    ],
  },
  "cpp/cpp-undefined-behavior": {
    blocks: [
      { t: "h2", text: "The compiler assumes it never happens" },
      { t: "p", text: "Undefined behavior (UB) means the standard imposes no requirements — the compiler may do anything, including 'work' until it silently breaks after an optimization or a compiler upgrade. Understanding UB is essential to writing correct C++." },
      { t: "ul", items: ["Dereferencing null or dangling pointers.", "Reading uninitialized variables.", "Signed integer overflow.", "Out-of-bounds array access.", "Data races on shared memory."] },
      { t: "callout", variant: "tip", text: "Run builds under sanitizers (`-fsanitize=address,undefined`) to catch UB that testing alone will miss." },
    ],
  },
};
