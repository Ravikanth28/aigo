// Authored lesson content for the C# course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const CSHARP_CONTENT: Record<string, LessonContent> = {
  "csharp/csharp-getting-started": {
    blocks: [
      { t: "h2", text: "A modern managed language" },
      { t: "p", text: "C# runs on .NET, a managed runtime with a garbage collector and a huge standard library. It blends the safety of managed memory with the performance of a compiled, statically typed language, and powers web, desktop, game, and cloud workloads." },
      { t: "code", lang: "csharp", code: "Console.WriteLine(\"Hello, world\");" },
      { t: "callout", variant: "tip", text: "Top-level statements and the modern SDK let a program be a single file. C# and .NET evolve yearly — target a current LTS release." },
    ],
  },
  "csharp/csharp-types": {
    blocks: [
      { t: "h2", text: "Value types vs reference types" },
      { t: "p", text: "This is the most important distinction in C#. Value types (`int`, `struct`, `enum`) are copied on assignment and usually live on the stack. Reference types (`class`, arrays, strings) are copied by reference — the variable holds a pointer to a heap object." },
      { t: "table", head: ["", "Value type", "Reference type"], rows: [["Examples", "int, struct, enum", "class, array, string"], ["Assignment", "Copies the value", "Copies the reference"], ["Default", "Zeroed", "null"]] },
      { t: "callout", variant: "note", text: "Nullable reference types (`string?`) let the compiler warn about potential null dereferences — enable them in new projects." },
    ],
  },
  "csharp/csharp-control-flow": {
    blocks: [
      { t: "h2", text: "Branching with pattern matching" },
      { t: "p", text: "Alongside classic `if`, `for`, and `foreach`, modern C# has powerful pattern matching in `switch` expressions, which return a value and check types, ranges, and properties concisely." },
      { t: "code", lang: "csharp", code: "string label = shape switch {\n    Circle c when c.R > 10 => \"big circle\",\n    Circle => \"circle\",\n    _ => \"other\"\n};" },
      { t: "callout", variant: "tip", text: "Switch expressions must be exhaustive; the `_` discard pattern handles the fallthrough case." },
    ],
  },
  "csharp/csharp-strings": {
    blocks: [
      { t: "h2", text: "Immutable text" },
      { t: "p", text: "C# strings are immutable reference types. Interpolation (`$\"...\"`) is the readable way to build them, but repeated concatenation in a loop creates garbage. Use `StringBuilder` when assembling text incrementally." },
      { t: "code", lang: "csharp", code: "var name = \"Ada\";\nvar msg = $\"Hello, {name}!\";\n\nvar sb = new StringBuilder();\nforeach (var w in words) sb.Append(w);" },
      { t: "callout", variant: "warn", text: "String `==` compares value, unlike most reference types. Spans (`ReadOnlySpan<char>`) avoid allocations for parsing hot paths." },
    ],
  },
  "csharp/csharp-classes": {
    blocks: [
      { t: "h2", text: "The unit of encapsulation" },
      { t: "p", text: "Classes bundle state and behavior with access modifiers (`public`, `private`, `internal`, `protected`). Constructors initialize instances, and members can be static (shared) or instance-level." },
      { t: "code", lang: "csharp", code: "public class Account {\n    private decimal _balance;\n    public Account(decimal opening) => _balance = opening;\n    public void Deposit(decimal amt) => _balance += amt;\n}" },
    ],
  },
  "csharp/csharp-inheritance": {
    blocks: [
      { t: "h2", text: "Virtual dispatch and interfaces" },
      { t: "p", text: "C# has single class inheritance but multiple interface implementation. Methods must be explicitly marked `virtual` to be overridable and `override` to override, which makes the intent unambiguous compared to languages where everything is virtual by default." },
      { t: "code", lang: "csharp", code: "public abstract class Shape {\n    public abstract double Area();\n}\npublic class Circle : Shape {\n    public override double Area() => Math.PI * R * R;\n}" },
      { t: "callout", variant: "note", text: "Favor interfaces and composition over deep inheritance hierarchies; they are easier to test and evolve." },
    ],
  },
  "csharp/csharp-properties": {
    blocks: [
      { t: "h2", text: "Fields with behavior" },
      { t: "p", text: "Properties expose data through get/set accessors, letting you add validation or computation without changing the calling syntax. Auto-properties generate the backing field for you; `init` accessors allow object-initializer-only assignment for immutability." },
      { t: "code", lang: "csharp", code: "public string Name { get; init; }\npublic int Age { get; private set; }" },
      { t: "callout", variant: "tip", text: "Prefer properties over public fields — you can add logic later without breaking the API." },
    ],
  },
  "csharp/csharp-records": {
    blocks: [
      { t: "h2", text: "Concise immutable data types" },
      { t: "p", text: "A `record` generates value-based equality, a readable `ToString`, and nondestructive mutation via `with`. Records are ideal for DTOs, domain values, and anything where two instances with the same data should be considered equal." },
      { t: "code", lang: "csharp", code: "public record Point(int X, int Y);\n\nvar a = new Point(1, 2);\nvar b = a with { Y = 3 };  // new record, X preserved" },
    ],
  },
  "csharp/csharp-generics": {
    blocks: [
      { t: "h2", text: "Type-safe reuse" },
      { t: "p", text: "Generics let you write classes and methods parameterized by type, giving reuse without boxing or casting. Constraints (`where T : ...`) restrict the type parameter so you can call known members on it." },
      { t: "code", lang: "csharp", code: "public T Max<T>(T a, T b) where T : IComparable<T>\n    => a.CompareTo(b) >= 0 ? a : b;" },
      { t: "callout", variant: "note", text: "Unlike C++ templates, .NET generics are one implementation shared at runtime, so they do not bloat the binary." },
    ],
  },
  "csharp/csharp-collections": {
    blocks: [
      { t: "h2", text: "The workhorse containers" },
      { t: "p", text: "`System.Collections.Generic` provides the everyday collections. `List<T>` is a dynamic array, `Dictionary<K,V>` a hash table, and `HashSet<T>` a set. Prefer the generic collections over the legacy non-generic ones." },
      { t: "table", head: ["Type", "Use for"], rows: [["List<T>", "Ordered, indexable sequence"], ["Dictionary<K,V>", "Key lookup, O(1) average"], ["HashSet<T>", "Membership and dedup"], ["Queue/Stack<T>", "FIFO / LIFO"]] },
    ],
  },
  "csharp/csharp-linq-basics": {
    blocks: [
      { t: "h2", text: "Querying in-memory data" },
      { t: "p", text: "LINQ provides SQL-like operators — `Where`, `Select`, `OrderBy`, `GroupBy` — over any `IEnumerable`. Queries are lazy: nothing executes until you enumerate the result, which enables efficient composition." },
      { t: "code", lang: "csharp", code: "var names = people\n    .Where(p => p.Age >= 18)\n    .OrderBy(p => p.Name)\n    .Select(p => p.Name);" },
      { t: "callout", variant: "warn", text: "Because queries are deferred, enumerating twice runs the query twice. Call `.ToList()` to materialize once when needed." },
    ],
  },
  "csharp/csharp-linq-advanced": {
    blocks: [
      { t: "h2", text: "Grouping, joining, and aggregation" },
      { t: "p", text: "Beyond the basics, LINQ handles `GroupBy`, `Join`, `Aggregate`, and set operations. The same operators work over in-memory objects and, via `IQueryable`, translate to SQL against a database through providers like EF Core." },
      { t: "code", lang: "csharp", code: "var byDept = employees\n    .GroupBy(e => e.Dept)\n    .Select(g => new { Dept = g.Key, Total = g.Sum(e => e.Salary) });" },
      { t: "callout", variant: "note", text: "For `IQueryable`, only expressions the provider can translate work — a stray in-memory method call throws at runtime." },
    ],
  },
  "csharp/csharp-delegates-events": {
    blocks: [
      { t: "h2", text: "First-class functions and notifications" },
      { t: "p", text: "A delegate is a type-safe function pointer; `Func<>` and `Action<>` cover most needs. Events build on delegates to provide a publish/subscribe mechanism where subscribers register handlers that fire when the publisher raises the event." },
      { t: "code", lang: "csharp", code: "public event Action<Order>? OrderPlaced;\n// raise\nOrderPlaced?.Invoke(order);" },
      { t: "callout", variant: "warn", text: "Forgetting to unsubscribe from a long-lived event source is a common managed-memory leak." },
    ],
  },
  "csharp/csharp-tasks": {
    blocks: [
      { t: "h2", text: "The unit of asynchronous work" },
      { t: "p", text: "A `Task` represents an operation that will complete in the future, possibly with a result (`Task<T>`). Tasks are the foundation of async in .NET — they can be awaited, composed, and combined with `Task.WhenAll` or `WhenAny`." },
      { t: "code", lang: "csharp", code: "Task<int> t = ComputeAsync();\nint[] all = await Task.WhenAll(a(), b(), c());" },
    ],
  },
  "csharp/csharp-async-await": {
    blocks: [
      { t: "h2", text: "Readable asynchronous code" },
      { t: "p", text: "`async`/`await` lets you write asynchronous code that reads sequentially. `await` releases the thread while waiting for I/O and resumes when the task completes, keeping apps responsive and servers scalable without manual callbacks." },
      { t: "code", lang: "csharp", code: "public async Task<string> LoadAsync(string url) {\n    using var client = new HttpClient();\n    return await client.GetStringAsync(url);\n}" },
      { t: "callout", variant: "warn", text: "Avoid `async void` (except event handlers) and never block on async code with `.Result` or `.Wait()` — it can deadlock." },
    ],
  },
  "csharp/csharp-cancellation": {
    blocks: [
      { t: "h2", text: "Cooperative cancellation" },
      { t: "p", text: ".NET uses `CancellationToken` for cooperative cancellation: a caller signals cancellation via a `CancellationTokenSource`, and well-behaved async methods observe the token and stop early. It is cooperative — the work must check the token." },
      { t: "code", lang: "csharp", code: "async Task WorkAsync(CancellationToken ct) {\n    foreach (var item in items) {\n        ct.ThrowIfCancellationRequested();\n        await ProcessAsync(item, ct);\n    }\n}" },
      { t: "callout", variant: "tip", text: "Pass the token all the way down. A token that stops at the top layer cancels nothing underneath." },
    ],
  },
  "csharp/csharp-parallel": {
    blocks: [
      { t: "h2", text: "Data and task parallelism" },
      { t: "p", text: "For CPU-bound work, the Task Parallel Library spreads work across cores. `Parallel.For`/`ForEach` parallelize loops, and PLINQ (`.AsParallel()`) parallelizes queries. This is distinct from async, which is about not blocking on I/O." },
      { t: "code", lang: "csharp", code: "Parallel.ForEach(files, file => Process(file));" },
      { t: "callout", variant: "warn", text: "Parallel loop bodies must be thread-safe. Shared mutable state without synchronization causes races." },
    ],
  },
  "csharp/csharp-clr": {
    blocks: [
      { t: "h2", text: "The Common Language Runtime" },
      { t: "p", text: "C# compiles to Intermediate Language (IL), which the CLR just-in-time compiles to native code at runtime. The CLR provides memory management, type safety, exception handling, and interop — the services that make .NET a managed platform." },
      { t: "callout", variant: "note", text: "Tiered JIT and, optionally, AOT compilation let .NET balance fast startup against peak throughput." },
    ],
  },
  "csharp/csharp-garbage-collection": {
    blocks: [
      { t: "h2", text: "Automatic memory management" },
      { t: "p", text: "The .NET GC is generational: short-lived objects (gen 0) are collected cheaply and often, while long-lived objects are promoted to older generations collected rarely. This matches the empirical fact that most objects die young." },
      { t: "ul", items: ["Gen 0/1 collections are fast and frequent.", "Gen 2 collections are expensive; minimize long-lived allocations.", "`IDisposable`/`using` releases unmanaged resources deterministically — the GC does not."] },
      { t: "callout", variant: "warn", text: "The GC frees managed memory, not files or sockets. Always dispose unmanaged resources yourself." },
    ],
  },
  "csharp/csharp-dependency-injection": {
    blocks: [
      { t: "h2", text: "Inversion of control, built in" },
      { t: "p", text: ".NET ships a DI container. You register services against interfaces with a lifetime, and the container constructs objects and injects their dependencies. This decouples classes from their collaborators and makes testing with fakes straightforward." },
      { t: "table", head: ["Lifetime", "Meaning"], rows: [["Singleton", "One instance for the app"], ["Scoped", "One per request/scope"], ["Transient", "New instance each resolve"]] },
      { t: "callout", variant: "warn", text: "Do not inject a scoped service into a singleton — the scoped instance gets captured and outlives its scope." },
    ],
  },
  "csharp/csharp-exceptions": {
    blocks: [
      { t: "h2", text: "Structured error handling" },
      { t: "p", text: "Exceptions separate error handling from the happy path. Catch only what you can handle, let unexpected exceptions propagate, and use `finally` (or `using`) for cleanup that must always run. Filters (`when`) let you catch conditionally." },
      { t: "code", lang: "csharp", code: "try {\n    Process();\n} catch (IOException ex) when (ex.HResult == 0x20) {\n    Retry();\n}" },
      { t: "callout", variant: "warn", text: "Never swallow exceptions with an empty catch, and avoid using exceptions for ordinary control flow — they are expensive." },
    ],
  },
};
