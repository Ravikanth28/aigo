// Authored lesson content for the Concurrency course. All prose is original and
// written for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const CONCURRENCY_CONTENT: Record<string, LessonContent> = {
  "concurrency/processes-vs-threads": {
    blocks: [
      { t: "h2", text: "Processes vs Threads" },
      { t: "p", text: "A **process** is an independent program with its own memory space. A **thread** is a unit of execution *inside* a process; threads of the same process share memory, which makes communication cheap but also introduces data races." },
      { t: "table", head: ["", "Process", "Thread"], rows: [
        ["Memory", "isolated", "shared within process"],
        ["Creation cost", "high", "low"],
        ["Communication", "IPC (slow)", "shared variables (fast)"],
        ["Crash blast radius", "one process", "can take down the process"],
      ] },
      { t: "callout", variant: "note", text: "Shared memory is the reason threads need synchronization while separate processes usually do not." },
    ],
  },
  "concurrency/concurrency-vs-parallelism": {
    blocks: [
      { t: "h2", text: "Concurrency vs Parallelism" },
      { t: "p", text: "**Concurrency** is dealing with many tasks at once by interleaving them; **parallelism** is literally executing many tasks at the same instant on multiple cores. A single core can be concurrent but not parallel." },
      { t: "ul", items: [
        "Concurrency is about *structure* — decomposing work into independent tasks.",
        "Parallelism is about *execution* — running those tasks simultaneously.",
        "You can have concurrency without parallelism (one core, time-sliced).",
      ] },
      { t: "callout", variant: "tip", text: "Rob Pike's summary: concurrency is about *dealing with* lots of things at once; parallelism is about *doing* lots of things at once." },
    ],
  },
  "concurrency/thread-lifecycle": {
    blocks: [
      { t: "h2", text: "The Thread Lifecycle" },
      { t: "p", text: "A thread moves through well-defined states from creation to termination. Understanding them helps you reason about why a thread is not making progress." },
      { t: "code", lang: "text", code: "NEW -> RUNNABLE -> RUNNING -> (BLOCKED / WAITING / TIMED_WAITING) -> RUNNABLE -> TERMINATED" },
      { t: "ul", items: [
        "**RUNNABLE**: ready to run, waiting for the scheduler.",
        "**BLOCKED**: waiting to acquire a lock.",
        "**WAITING**: waiting indefinitely for another thread's signal.",
        "**TERMINATED**: finished or threw an uncaught exception.",
      ] },
    ],
  },
  "concurrency/context-switching": {
    blocks: [
      { t: "h2", text: "Context Switching" },
      { t: "p", text: "A context switch saves the state of the running thread and loads another's so the CPU can multiplex many threads. It is essential for concurrency but is not free." },
      { t: "callout", variant: "warn", text: "Too many runnable threads cause thrashing — the CPU spends more time switching than doing useful work. This is why thread pools cap the number of workers." },
    ],
  },
  "concurrency/race-conditions": {
    blocks: [
      { t: "h2", text: "Race Conditions" },
      { t: "p", text: "A race condition occurs when the correctness of a program depends on the unpredictable timing of threads. The classic example is a non-atomic read-modify-write." },
      { t: "code", lang: "java", code: "counter++; // three steps: read, add, write\n// Two threads can both read 5, both write 6 -> lost update." },
      { t: "callout", variant: "note", text: "The fix is to make the critical section atomic — via a lock, an atomic type, or a compare-and-swap loop." },
    ],
  },
  "concurrency/locks-mutexes": {
    blocks: [
      { t: "h2", text: "Locks & Mutexes" },
      { t: "p", text: "A mutex (mutual exclusion lock) ensures only one thread enters a critical section at a time. Every other thread blocks until the holder releases it." },
      { t: "code", lang: "java", code: "lock.lock();\ntry {\n  balance += amount; // protected\n} finally {\n  lock.unlock(); // always release\n}" },
      { t: "callout", variant: "warn", text: "Always release in a finally block. A lock leaked on an exception path will deadlock every future caller." },
    ],
  },
  "concurrency/semaphores": {
    blocks: [
      { t: "h2", text: "Semaphores" },
      { t: "p", text: "A semaphore maintains a set of permits. Threads acquire a permit to proceed and release it when done, which lets you bound how many threads use a resource at once." },
      { t: "code", lang: "java", code: "Semaphore pool = new Semaphore(3); // at most 3 concurrent\npool.acquire();\ntry { useConnection(); } finally { pool.release(); }" },
      { t: "ul", items: [
        "A **binary semaphore** (one permit) behaves like a lock.",
        "A **counting semaphore** limits concurrent access to N.",
      ] },
    ],
  },
  "concurrency/monitors-condition-vars": {
    blocks: [
      { t: "h2", text: "Monitors & Condition Variables" },
      { t: "p", text: "A monitor combines a lock with condition variables so threads can wait for a state change and be signaled when it happens — the basis of the wait/notify idiom." },
      { t: "code", lang: "java", code: "synchronized (queue) {\n  while (queue.isEmpty()) queue.wait(); // release lock, sleep\n  return queue.poll();\n}\n// Producer calls queue.notifyAll() after adding." },
      { t: "callout", variant: "warn", text: "Always wait inside a while loop, not an if — threads can wake spuriously and the condition must be re-checked." },
    ],
  },
  "concurrency/read-write-locks": {
    blocks: [
      { t: "h2", text: "Read-Write Locks" },
      { t: "p", text: "A read-write lock allows many concurrent readers or a single writer. It boosts throughput for data that is read far more often than it is written." },
      { t: "table", head: ["Held by", "Read allowed", "Write allowed"], rows: [
        ["nothing", "yes", "yes"],
        ["readers", "yes", "no"],
        ["a writer", "no", "no"],
      ] },
      { t: "callout", variant: "note", text: "Watch for writer starvation — a steady stream of readers can block a waiting writer indefinitely unless the lock is fair." },
    ],
  },
  "concurrency/atomic-operations": {
    blocks: [
      { t: "h2", text: "Atomic Operations" },
      { t: "p", text: "Atomic operations complete as a single indivisible step, so no other thread can observe a half-finished result. They enable lock-free updates via compare-and-swap (CAS)." },
      { t: "code", lang: "java", code: "AtomicInteger counter = new AtomicInteger();\ncounter.incrementAndGet(); // atomic, no explicit lock" },
      { t: "callout", variant: "tip", text: "Atomics are faster than locks for simple counters, but CAS loops can spin under high contention." },
    ],
  },
  "concurrency/deadlock": {
    blocks: [
      { t: "h2", text: "Deadlocks" },
      { t: "p", text: "A deadlock is a standstill where each thread waits for a resource another holds, so none can proceed. It requires four conditions to hold simultaneously (Coffman conditions)." },
      { t: "ol", items: [
        "**Mutual exclusion** — resources are non-shareable.",
        "**Hold and wait** — a thread holds one resource while waiting for another.",
        "**No preemption** — resources cannot be forcibly taken.",
        "**Circular wait** — a cycle of threads each waiting on the next.",
      ] },
      { t: "callout", variant: "warn", text: "Break any one condition and deadlock becomes impossible. The easiest to break is circular wait — impose a global lock ordering." },
    ],
  },
  "concurrency/livelock-starvation": {
    blocks: [
      { t: "h2", text: "Livelock & Starvation" },
      { t: "p", text: "In **livelock**, threads keep changing state in response to each other but make no progress — like two people stepping side to side in a hallway. In **starvation**, a thread never gets the resources it needs because others keep winning." },
      { t: "callout", variant: "note", text: "Fair locks and randomized back-off help avoid both by preventing any thread from being perpetually skipped." },
    ],
  },
  "concurrency/deadlock-prevention": {
    blocks: [
      { t: "h2", text: "Deadlock Prevention & Avoidance" },
      { t: "p", text: "Prevention removes a Coffman condition up front; avoidance uses runtime checks to steer clear of unsafe states." },
      { t: "ul", items: [
        "**Lock ordering** — always acquire locks in a fixed global order (breaks circular wait).",
        "**Try-lock with timeout** — back off and retry instead of blocking forever.",
        "**Banker's algorithm** — grant a request only if the system stays in a safe state.",
      ] },
    ],
  },
  "concurrency/memory-model": {
    blocks: [
      { t: "h2", text: "Memory Models & Visibility" },
      { t: "p", text: "A memory model defines when one thread's writes become visible to another. Without synchronization, compilers and CPUs may reorder operations or cache values, so a write may never be seen by other threads." },
      { t: "code", lang: "java", code: "volatile boolean running = true; // guarantees visibility\n// A plain boolean might be cached and never re-read." },
      { t: "callout", variant: "warn", text: "'It works on my machine' concurrency bugs are often visibility bugs that appear only on certain CPUs or under load." },
    ],
  },
  "concurrency/thread-pools": {
    blocks: [
      { t: "h2", text: "Thread Pools & Executors" },
      { t: "p", text: "A thread pool reuses a fixed set of worker threads to run many tasks, avoiding the cost of creating a thread per task and bounding total concurrency." },
      { t: "code", lang: "java", code: "ExecutorService pool = Executors.newFixedThreadPool(8);\npool.submit(() -> handle(request));\npool.shutdown();" },
      { t: "callout", variant: "tip", text: "Size CPU-bound pools near the core count; size I/O-bound pools larger, since workers spend time waiting." },
    ],
  },
  "concurrency/futures-promises": {
    blocks: [
      { t: "h2", text: "Futures & Promises" },
      { t: "p", text: "A future is a handle to a result that will be available later. It lets you kick off asynchronous work and compose the result without blocking the calling thread." },
      { t: "code", lang: "java", code: "CompletableFuture<User> f = CompletableFuture\n    .supplyAsync(() -> fetchUser(id))\n    .thenApply(User::profile);" },
      { t: "callout", variant: "note", text: "Chaining with thenApply/thenCompose builds non-blocking pipelines instead of nesting callbacks." },
    ],
  },
  "concurrency/producer-consumer-queues": {
    blocks: [
      { t: "h2", text: "Blocking Queues" },
      { t: "p", text: "A blocking queue is a thread-safe buffer that blocks producers when full and consumers when empty. It is the cleanest way to implement producer-consumer without manual wait/notify." },
      { t: "code", lang: "java", code: "BlockingQueue<Task> q = new LinkedBlockingQueue<>(100);\nq.put(task);   // blocks if full\nTask t = q.take(); // blocks if empty" },
    ],
  },
  "concurrency/concurrent-data-structures": {
    blocks: [
      { t: "h2", text: "Concurrent Data Structures" },
      { t: "p", text: "Concurrent collections are designed for multi-threaded access with fine-grained or lock-free internals, offering far better throughput than wrapping a plain collection in one big lock." },
      { t: "ul", items: [
        "**ConcurrentHashMap** — lock striping / CAS for high-concurrency maps.",
        "**CopyOnWriteArrayList** — cheap reads, expensive writes; great for read-mostly lists.",
        "**ConcurrentLinkedQueue** — lock-free FIFO queue.",
      ] },
    ],
  },
  "concurrency/producer-consumer": {
    blocks: [
      { t: "h2", text: "Producer-Consumer" },
      { t: "p", text: "Producers generate items and consumers process them, coordinated through a bounded buffer. The buffer decouples their speeds and applies natural back-pressure." },
      { t: "code", lang: "java", code: "// Producer\nqueue.put(item);   // blocks when buffer is full\n// Consumer\nItem i = queue.take(); // blocks when buffer is empty" },
      { t: "callout", variant: "tip", text: "A bounded buffer is the key detail — an unbounded queue lets a fast producer exhaust memory." },
    ],
  },
  "concurrency/dining-philosophers": {
    blocks: [
      { t: "h2", text: "Dining Philosophers" },
      { t: "p", text: "Five philosophers share five forks; each needs two to eat. Naively grabbing left-then-right for all creates a circular wait and deadlocks." },
      { t: "ul", items: [
        "**Resource ordering** — number the forks; always pick up the lower-numbered one first.",
        "**Limit diners** — a semaphore allowing at most four to reach for forks breaks the cycle.",
        "**Try-both-or-none** — acquire both forks atomically or release and retry.",
      ] },
    ],
  },
  "concurrency/readers-writers": {
    blocks: [
      { t: "h2", text: "Readers-Writers" },
      { t: "p", text: "Many readers may access shared data at once, but a writer needs exclusive access. The challenge is balancing throughput against fairness so neither side starves." },
      { t: "callout", variant: "note", text: "A read-write lock solves this directly; choose a reader-preferring or writer-preferring policy based on your workload." },
    ],
  },
  "concurrency/print-in-order": {
    blocks: [
      { t: "h2", text: "Print in Order" },
      { t: "p", text: "Three threads call first(), second(), and third() in arbitrary order; you must ensure the output is always 'firstsecondthird'. It is a minimal signaling exercise." },
      { t: "code", lang: "java", code: "// Use two semaphores initialized to 0\nvoid first()  { print(\"first\");  s1.release(); }\nvoid second() { s1.acquire(); print(\"second\"); s2.release(); }\nvoid third()  { s2.acquire(); print(\"third\"); }" },
    ],
  },
  "concurrency/print-foobar-alternately": {
    blocks: [
      { t: "h2", text: "Print FooBar Alternately" },
      { t: "p", text: "Two threads must alternate printing 'foo' and 'bar' exactly n times. Two semaphores that hand control back and forth enforce the strict alternation." },
      { t: "code", lang: "java", code: "// fooReady = 1, barReady = 0\nvoid foo() { fooReady.acquire(); print(\"foo\"); barReady.release(); }\nvoid bar() { barReady.acquire(); print(\"bar\"); fooReady.release(); }" },
    ],
  },
  "concurrency/building-h2o": {
    blocks: [
      { t: "h2", text: "Building H2O" },
      { t: "p", text: "Threads represent hydrogen and oxygen atoms; they must group into sets of two H and one O before bonding. It is a barrier problem solved with semaphores plus a barrier." },
      { t: "callout", variant: "note", text: "Two hydrogen permits and one oxygen permit per molecule, released after a barrier of three, guarantee correct grouping." },
    ],
  },
  "concurrency/the-barber-shop": {
    blocks: [
      { t: "h2", text: "The Sleeping Barber" },
      { t: "p", text: "A barber sleeps until a customer arrives; customers wait if chairs are free or leave if the shop is full. It models a server with a bounded waiting room." },
      { t: "ul", items: [
        "A semaphore counts waiting customers to wake the barber.",
        "A semaphore signals when the barber is ready.",
        "A mutex guards the count of free waiting chairs.",
      ] },
    ],
  },
};
