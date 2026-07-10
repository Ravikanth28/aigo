// Authored lesson content for the Java course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const JAVA_CONTENT: Record<string, LessonContent> = {
  "java/java-getting-started": {
    blocks: [
      { t: "h2", text: "Compile once, run anywhere" },
      { t: "p", text: "Java is a statically typed, object-oriented language that compiles to bytecode which runs on the Java Virtual Machine (JVM). That indirection is why the same compiled program runs unchanged across operating systems." },
      { t: "code", lang: "java", code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n    }\n}" },
      { t: "ul", items: ["`javac Main.java` compiles source to `Main.class` bytecode.", "`java Main` runs the bytecode on the JVM.", "Every application entry point is a `public static void main(String[])`."] },
    ],
  },
  "java/java-primitives": {
    blocks: [
      { t: "h2", text: "Eight primitives, everything else is an object" },
      { t: "p", text: "Java splits its type system in two: primitive types hold raw values directly, while everything else is a reference to an object on the heap. Primitives are fast and never null." },
      { t: "table", head: ["Type", "Size", "Example"], rows: [["int", "32-bit", "42"], ["long", "64-bit", "42L"], ["double", "64-bit float", "3.14"], ["boolean", "1-bit logical", "true"], ["char", "16-bit Unicode", "'A'"]] },
      { t: "callout", variant: "note", text: "Each primitive has a wrapper class (int/Integer, double/Double). Autoboxing converts between them automatically, but beware the hidden cost and possible NullPointerException when unboxing a null." },
    ],
  },
  "java/java-operators-control": {
    blocks: [
      { t: "h2", text: "Control flow" },
      { t: "p", text: "Java's operators and control structures are C-like. The modern `switch` expression is a notable improvement, returning a value and avoiding fall-through bugs." },
      { t: "code", lang: "java", code: "int day = 3;\nString name = switch (day) {\n    case 1, 7 -> \"weekend\";\n    case 2, 3, 4, 5, 6 -> \"weekday\";\n    default -> \"invalid\";\n};" },
      { t: "callout", variant: "tip", text: "Prefer the arrow-form switch expression over the classic colon form. It has no fall-through and the compiler checks exhaustiveness." },
    ],
  },
  "java/java-strings": {
    blocks: [
      { t: "h2", text: "Strings are immutable" },
      { t: "p", text: "A Java `String` cannot be changed after creation; any 'modification' produces a new object. This makes strings safe to share but means building them in a loop with `+` is quadratic. Use `StringBuilder` for repeated concatenation." },
      { t: "code", lang: "java", code: "StringBuilder sb = new StringBuilder();\nfor (String part : parts) {\n    sb.append(part);\n}\nString result = sb.toString();" },
      { t: "callout", variant: "warn", text: "Compare strings with `.equals()`, not `==`. `==` compares references and will surprise you even when the text is identical." },
    ],
  },
  "java/java-arrays": {
    blocks: [
      { t: "h2", text: "Fixed-size, zero-indexed" },
      { t: "p", text: "Arrays hold a fixed number of elements of one type, laid out contiguously. Their length is set at creation and cannot change. Accessing out of bounds throws an exception rather than reading garbage." },
      { t: "code", lang: "java", code: "int[] nums = new int[5];        // all zeros\nint[] primes = {2, 3, 5, 7, 11};\nSystem.out.println(primes.length); // 5" },
      { t: "callout", variant: "note", text: "For a resizable sequence, use `ArrayList` instead. Arrays are best when the size is known and fixed." },
    ],
  },
  "java/java-classes-objects": {
    blocks: [
      { t: "h2", text: "Blueprints and instances" },
      { t: "p", text: "A class defines fields (state) and methods (behavior); an object is a concrete instance created with `new`. Constructors initialize new objects, and `this` refers to the current instance." },
      { t: "code", lang: "java", code: "class Point {\n    private final int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n    int distanceSq() { return x*x + y*y; }\n}\nPoint p = new Point(3, 4);" },
      { t: "callout", variant: "tip", text: "Make fields `private` and expose behavior through methods. This encapsulation keeps invariants under your control." },
    ],
  },
  "java/java-inheritance": {
    blocks: [
      { t: "h2", text: "Extending behavior" },
      { t: "p", text: "A subclass `extends` a superclass, inheriting its fields and methods and optionally overriding them. `super` calls the parent's constructor or overridden method. Java supports single inheritance of classes only." },
      { t: "code", lang: "java", code: "class Animal { String sound() { return \"...\"; } }\nclass Dog extends Animal {\n    @Override String sound() { return \"woof\"; }\n}" },
      { t: "callout", variant: "note", text: "Favor composition over deep inheritance hierarchies. Inheritance couples a subclass tightly to its parent's implementation." },
    ],
  },
  "java/java-interfaces": {
    blocks: [
      { t: "h2", text: "Contracts without implementation" },
      { t: "p", text: "An interface declares methods a class promises to implement, enabling polymorphism without inheritance. A class can implement many interfaces, which is Java's answer to multiple inheritance. Abstract classes sit in between: they can hold state and partial implementation." },
      { t: "table", head: ["", "Interface", "Abstract class"], rows: [["Multiple?", "Implement many", "Extend one"], ["State", "Constants only", "Instance fields"], ["Use when", "Defining a capability", "Sharing base implementation"]] },
    ],
  },
  "java/java-polymorphism": {
    blocks: [
      { t: "h2", text: "One interface, many forms" },
      { t: "p", text: "Polymorphism lets you treat objects of different classes through a shared type, with the actual method resolved at runtime (dynamic dispatch). This is what makes code extensible without modification." },
      { t: "code", lang: "java", code: "List<Animal> zoo = List.of(new Dog(), new Cat());\nfor (Animal a : zoo) {\n    System.out.println(a.sound()); // each runs its own override\n}" },
    ],
  },
  "java/java-enums-records": {
    blocks: [
      { t: "h2", text: "Concise, safe data types" },
      { t: "p", text: "Enums define a fixed set of named constants with optional fields and methods. Records (Java 16+) are immutable data carriers that auto-generate the constructor, accessors, `equals`, `hashCode`, and `toString`." },
      { t: "code", lang: "java", code: "enum Status { ACTIVE, PAUSED, CLOSED }\nrecord Point(int x, int y) {}\nPoint p = new Point(1, 2);\np.x(); // 1" },
      { t: "callout", variant: "tip", text: "Reach for a record whenever you need a plain immutable value object — it eliminates dozens of lines of boilerplate." },
    ],
  },
  "java/java-equals-hashcode": {
    blocks: [
      { t: "h2", text: "The contract you must honor together" },
      { t: "p", text: "`equals()` defines logical equality; `hashCode()` produces a bucket for hash-based collections. They must be consistent: equal objects must return equal hash codes, or `HashMap` and `HashSet` will behave incorrectly." },
      { t: "callout", variant: "warn", text: "Override both or neither. Overriding `equals` alone breaks hashing; equal objects could land in different buckets and appear absent from a set." },
    ],
  },
  "java/java-list": {
    blocks: [
      { t: "h2", text: "ArrayList vs LinkedList" },
      { t: "p", text: "Both implement the `List` interface but differ in cost. `ArrayList` is a resizable array — fast random access, slow inserts in the middle. `LinkedList` is a doubly linked list — fast ends, slow indexing." },
      { t: "table", head: ["Operation", "ArrayList", "LinkedList"], rows: [["get(i)", "O(1)", "O(n)"], ["add at end", "amortized O(1)", "O(1)"], ["insert middle", "O(n)", "O(n) to find, O(1) to link"]] },
      { t: "callout", variant: "tip", text: "In practice `ArrayList` is the right default. `LinkedList` rarely wins because cache locality favors contiguous arrays." },
    ],
  },
  "java/java-map": {
    blocks: [
      { t: "h2", text: "HashMap vs TreeMap" },
      { t: "p", text: "A `Map` stores key/value pairs. `HashMap` gives O(1) average access with no ordering; `TreeMap` keeps keys sorted with O(log n) operations and supports range queries." },
      { t: "code", lang: "java", code: "Map<String,Integer> counts = new HashMap<>();\ncounts.merge(word, 1, Integer::sum); // increment or init to 1" },
      { t: "callout", variant: "note", text: "Use `TreeMap` when you need ordered iteration or floor/ceiling lookups; otherwise `HashMap` is faster." },
    ],
  },
  "java/java-set": {
    blocks: [
      { t: "h2", text: "Uniqueness guaranteed" },
      { t: "p", text: "A `Set` holds no duplicates. `HashSet` is unordered and O(1); `TreeSet` is sorted and O(log n); `LinkedHashSet` preserves insertion order. Membership tests are the primary use." },
      { t: "code", lang: "java", code: "Set<Integer> seen = new HashSet<>();\nif (!seen.add(x)) {\n    // add returns false if x was already present\n}" },
    ],
  },
  "java/java-queue-deque": {
    blocks: [
      { t: "h2", text: "Ends-oriented collections" },
      { t: "p", text: "`Queue` models FIFO processing; `Deque` (double-ended queue) supports adding and removing from both ends and doubles as a stack. `ArrayDeque` is the go-to implementation, and `PriorityQueue` orders by priority." },
      { t: "code", lang: "java", code: "Deque<Integer> stack = new ArrayDeque<>();\nstack.push(1); stack.push(2);\nstack.pop(); // 2" },
      { t: "callout", variant: "tip", text: "Prefer `ArrayDeque` over the legacy `Stack` class, which is synchronized and slower." },
    ],
  },
  "java/java-comparators": {
    blocks: [
      { t: "h2", text: "Defining order" },
      { t: "p", text: "`Comparable` gives a class a single natural ordering via `compareTo`. `Comparator` defines external, swappable orderings and composes cleanly for multi-key sorts." },
      { t: "code", lang: "java", code: "people.sort(\n    Comparator.comparingInt(Person::age)\n              .thenComparing(Person::name));" },
    ],
  },
  "java/java-collections-internals": {
    blocks: [
      { t: "h2", text: "How HashMap actually works" },
      { t: "p", text: "A `HashMap` is an array of buckets. A key's `hashCode` is spread and masked to pick a bucket; collisions chain in a linked list that converts to a balanced tree once it grows large, keeping worst-case lookups reasonable." },
      { t: "ul", items: ["Load factor (default 0.75) triggers resizing when the map gets too full.", "Resizing doubles the bucket array and rehashes entries.", "Since Java 8, long collision chains become red-black trees (O(log n))."] },
      { t: "callout", variant: "warn", text: "A poor `hashCode` that returns the same value for many keys collapses the map to a single bucket and O(n) lookups." },
    ],
  },
  "java/java-generics": {
    blocks: [
      { t: "h2", text: "Type safety without casts" },
      { t: "p", text: "Generics parameterize types so collections and methods work with any type while the compiler enforces safety. `List<String>` guarantees only strings go in and come out, eliminating casts and class-cast errors." },
      { t: "code", lang: "java", code: "<T extends Comparable<T>> T max(List<T> items) {\n    T best = items.get(0);\n    for (T x : items) if (x.compareTo(best) > 0) best = x;\n    return best;\n}" },
      { t: "callout", variant: "note", text: "Generics are erased at runtime (type erasure), so `List<String>` and `List<Integer>` are the same class at runtime. This is why you cannot do `new T[]` directly." },
    ],
  },
  "java/java-lambdas": {
    blocks: [
      { t: "h2", text: "Functions as values" },
      { t: "p", text: "A lambda is a concise anonymous function that implements a functional interface (one abstract method). They power the Stream API and callback-style code." },
      { t: "code", lang: "java", code: "Runnable r = () -> System.out.println(\"run\");\nFunction<Integer,Integer> sq = x -> x * x;\nBiFunction<Integer,Integer,Integer> add = Integer::sum;" },
    ],
  },
  "java/java-streams": {
    blocks: [
      { t: "h2", text: "Declarative data pipelines" },
      { t: "p", text: "Streams process collections through a pipeline of operations. Intermediate operations (filter, map) are lazy and chain together; a terminal operation (collect, reduce) triggers execution." },
      { t: "code", lang: "java", code: "List<String> names = people.stream()\n    .filter(p -> p.age() >= 18)\n    .map(Person::name)\n    .sorted()\n    .collect(Collectors.toList());" },
      { t: "callout", variant: "warn", text: "A stream is single-use. After a terminal operation it is consumed and cannot be reused." },
    ],
  },
  "java/java-optional": {
    blocks: [
      { t: "h2", text: "Making absence explicit" },
      { t: "p", text: "`Optional<T>` is a container that may or may not hold a value, signaling 'this can be missing' in the type system instead of returning null. It pushes callers to handle the empty case." },
      { t: "code", lang: "java", code: "Optional<User> found = repo.findById(id);\nString name = found.map(User::name).orElse(\"guest\");" },
      { t: "callout", variant: "tip", text: "Use Optional for return types that may be empty. Avoid it for fields and method parameters, where it adds overhead without much benefit." },
    ],
  },
  "java/java-threads": {
    blocks: [
      { t: "h2", text: "Running code concurrently" },
      { t: "p", text: "A thread is an independent path of execution. You create one by supplying a `Runnable`. Threads share memory, which is powerful but requires synchronization to stay correct." },
      { t: "code", lang: "java", code: "Thread t = new Thread(() -> doWork());\nt.start();   // runs concurrently\nt.join();    // wait for it to finish" },
      { t: "callout", variant: "note", text: "Prefer executors over creating raw threads. Manual thread management does not scale and leaks resources." },
    ],
  },
  "java/java-synchronized": {
    blocks: [
      { t: "h2", text: "Mutual exclusion and visibility" },
      { t: "p", text: "`synchronized` ensures only one thread executes a guarded block at a time and establishes a happens-before relationship so changes are visible across threads. `volatile` guarantees visibility of a single variable without mutual exclusion." },
      { t: "callout", variant: "warn", text: "`volatile` does not make compound actions atomic. `count++` on a volatile field is still a race — use `synchronized` or an atomic type." },
    ],
  },
  "java/java-executors": {
    blocks: [
      { t: "h2", text: "Managed thread pools" },
      { t: "p", text: "An `ExecutorService` decouples task submission from thread management, reusing a pool of threads instead of spawning one per task. This bounds resource use and simplifies lifecycle handling." },
      { t: "code", lang: "java", code: "ExecutorService pool = Executors.newFixedThreadPool(4);\nFuture<Integer> f = pool.submit(() -> compute());\npool.shutdown();" },
    ],
  },
  "java/java-concurrent-collections": {
    blocks: [
      { t: "h2", text: "Thread-safe by design" },
      { t: "p", text: "Collections in `java.util.concurrent` allow safe concurrent access without external locking. `ConcurrentHashMap` shards its locking for high throughput, and queues like `LinkedBlockingQueue` coordinate producers and consumers." },
      { t: "callout", variant: "tip", text: "Reach for `ConcurrentHashMap` over `Collections.synchronizedMap`. It scales far better under contention because it does not lock the whole map." },
    ],
  },
  "java/java-completable-future": {
    blocks: [
      { t: "h2", text: "Composable async results" },
      { t: "p", text: "`CompletableFuture` represents an async computation you can chain and combine without blocking. It supports transforming results, running steps in sequence, and joining independent tasks." },
      { t: "code", lang: "java", code: "CompletableFuture.supplyAsync(() -> fetch())\n    .thenApply(this::parse)\n    .thenAccept(this::save);" },
    ],
  },
  "java/java-memory-model": {
    blocks: [
      { t: "h2", text: "Where objects live" },
      { t: "p", text: "The JVM divides memory into regions. The heap holds all objects and is shared across threads; each thread has its own stack for frames and local variables. Understanding the split explains garbage collection and thread safety." },
      { t: "ul", items: ["**Heap** — objects and arrays; garbage-collected; shared.", "**Stack** — per-thread frames, locals, and references.", "**Metaspace** — class metadata."] },
    ],
  },
  "java/java-garbage-collection": {
    blocks: [
      { t: "h2", text: "Automatic memory reclamation" },
      { t: "p", text: "The garbage collector frees objects no longer reachable from live references. Modern collectors use the generational hypothesis — most objects die young — splitting the heap into young and old generations to collect efficiently." },
      { t: "ul", items: ["**Young gen** — new objects; collected frequently and cheaply (minor GC).", "**Old gen** — long-lived objects; collected rarely (major GC).", "Collectors like G1 and ZGC trade throughput for shorter pauses."] },
      { t: "callout", variant: "note", text: "You cannot force collection; `System.gc()` is only a hint. Reachability, not scope, determines when an object is eligible." },
    ],
  },
  "java/java-classloading": {
    blocks: [
      { t: "h2", text: "Loading classes on demand" },
      { t: "p", text: "The JVM loads classes lazily the first time they are referenced, using a hierarchy of class loaders that delegate to their parent first. This delegation model prevents core classes from being overridden." },
      { t: "ol", items: ["**Loading** — read the bytecode into memory.", "**Linking** — verify, prepare, and resolve references.", "**Initialization** — run static initializers."] },
    ],
  },
  "java/java-exceptions": {
    blocks: [
      { t: "h2", text: "Checked vs unchecked" },
      { t: "p", text: "Java distinguishes checked exceptions (must be declared or caught) from unchecked ones (runtime errors). Use exceptions for exceptional conditions, not ordinary control flow." },
      { t: "table", head: ["Kind", "Examples", "Handling"], rows: [["Checked", "IOException", "Compiler forces catch/declare"], ["Unchecked", "NullPointerException", "Optional to catch"], ["Error", "OutOfMemoryError", "Do not catch"]] },
      { t: "callout", variant: "tip", text: "Use try-with-resources for anything that must be closed. It closes the resource automatically even if an exception is thrown." },
    ],
  },
};
