// Authored lesson content for the Go course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const GO_CONTENT: Record<string, LessonContent> = {
  "go/go-getting-started": {
    blocks: [
      { t: "h2", text: "Simplicity as a feature" },
      { t: "p", text: "Go was designed for large teams building networked services. It deliberately omits features — no inheritance, no exceptions, minimal syntax — so codebases stay readable and consistent. Fast compilation and a single static binary make deployment trivial." },
      { t: "code", lang: "go", code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, world\")\n}" },
      { t: "callout", variant: "tip", text: "`gofmt` enforces one canonical style, ending formatting debates. Run it (and `go vet`) on save." },
    ],
  },
  "go/go-types": {
    blocks: [
      { t: "h2", text: "A small, explicit type system" },
      { t: "p", text: "Go is statically typed with a compact set of built-in types and no implicit conversions — you convert numeric types explicitly. The zero value (0, \"\", nil) means every declared variable is immediately usable without initialization." },
      { t: "code", lang: "go", code: "var count int          // 0\nname := \"go\"           // short declaration, inferred\nvar ratio float64 = float64(count)" },
      { t: "callout", variant: "note", text: "There is no uninitialized state in Go. The zero value is a design principle you should make meaningful for your own types." },
    ],
  },
  "go/go-control-flow": {
    blocks: [
      { t: "h2", text: "One loop to rule them all" },
      { t: "p", text: "Go has a single loop keyword, `for`, which covers while-loops, infinite loops, and range iteration. `if` can carry an initializer, and `switch` needs no `break` and can switch on types or arbitrary conditions." },
      { t: "code", lang: "go", code: "for i, v := range items {\n    fmt.Println(i, v)\n}\n\nif err := do(); err != nil {\n    return err\n}" },
    ],
  },
  "go/go-slices-maps": {
    blocks: [
      { t: "h2", text: "The core data structures" },
      { t: "p", text: "A slice is a lightweight view over a backing array with length and capacity; `append` grows it, reallocating when capacity runs out. A map is a hash table with fast lookup. Both are reference-like — copying a slice header shares the underlying array." },
      { t: "code", lang: "go", code: "s := []int{1, 2, 3}\ns = append(s, 4)\n\nm := map[string]int{}\nm[\"a\"]++" },
      { t: "callout", variant: "warn", text: "Slices sharing a backing array can alias each other. `append` may or may not reallocate — do not rely on either." },
    ],
  },
  "go/go-pointers": {
    blocks: [
      { t: "h2", text: "Pointers without the danger" },
      { t: "p", text: "Go has pointers but no pointer arithmetic, so the memory-safety footguns of C are gone. Use a pointer to mutate a caller's value or to avoid copying a large struct. The garbage collector handles lifetime, so escaping a pointer from a function is safe." },
      { t: "code", lang: "go", code: "func inc(n *int) { *n++ }\n\nx := 5\ninc(&x)  // x is now 6" },
      { t: "callout", variant: "note", text: "The compiler decides stack vs heap via escape analysis. Returning &local is fine — Go promotes it to the heap automatically." },
    ],
  },
  "go/go-structs": {
    blocks: [
      { t: "h2", text: "Aggregating data" },
      { t: "p", text: "A struct groups fields into a value type. Structs are copied on assignment unless you use a pointer. Struct tags attach metadata used by encoders like JSON, which is how Go handles serialization without reflection-heavy frameworks." },
      { t: "code", lang: "go", code: "type User struct {\n    ID   int    `json:\"id\"`\n    Name string `json:\"name\"`\n}" },
    ],
  },
  "go/go-methods": {
    blocks: [
      { t: "h2", text: "Behavior on any type" },
      { t: "p", text: "Methods attach to a named type via a receiver. A value receiver operates on a copy; a pointer receiver can mutate the original and avoids copying. Consistency matters — use pointer receivers throughout a type if any method needs one." },
      { t: "code", lang: "go", code: "func (u *User) Rename(n string) { u.Name = n }\nfunc (u User)  Label() string    { return u.Name }" },
      { t: "callout", variant: "tip", text: "Rule of thumb: use pointer receivers for types that are mutated or large; be consistent across the type's method set." },
    ],
  },
  "go/go-interfaces": {
    blocks: [
      { t: "h2", text: "Implicit, structural contracts" },
      { t: "p", text: "A Go type satisfies an interface simply by having the required methods — no `implements` keyword. This structural typing decouples packages: consumers define the small interfaces they need, and any type that fits works." },
      { t: "code", lang: "go", code: "type Reader interface {\n    Read(p []byte) (int, error)\n}" },
      { t: "callout", variant: "tip", text: "Keep interfaces small — often one method. 'Accept interfaces, return structs' is idiomatic Go." },
    ],
  },
  "go/go-embedding": {
    blocks: [
      { t: "h2", text: "Composition over inheritance" },
      { t: "p", text: "Go has no inheritance. Instead, embedding a type into a struct promotes its fields and methods, giving reuse through composition. You can also embed interfaces to compose larger contracts from smaller ones." },
      { t: "code", lang: "go", code: "type Logger struct{ prefix string }\nfunc (l Logger) Log(m string) { /* ... */ }\n\ntype Server struct {\n    Logger   // embedded; Server now has Log\n}" },
      { t: "callout", variant: "note", text: "Embedding is not subtyping. A Server is not a Logger — it just delegates the promoted methods." },
    ],
  },
  "go/go-generics": {
    blocks: [
      { t: "h2", text: "Type parameters" },
      { t: "p", text: "Generics (added in Go 1.18) let functions and types work over a set of types constrained by an interface. They replace much of the old reflection-and-interface{} boilerplate for containers and algorithms while keeping type safety." },
      { t: "code", lang: "go", code: "func Map[T, U any](s []T, f func(T) U) []U {\n    r := make([]U, len(s))\n    for i, v := range s { r[i] = f(v) }\n    return r\n}" },
      { t: "callout", variant: "tip", text: "Use generics only where they earn their keep. Idiomatic Go still favors concrete types and small interfaces." },
    ],
  },
  "go/go-goroutines": {
    blocks: [
      { t: "h2", text: "Concurrency that scales" },
      { t: "p", text: "A goroutine is a function running concurrently, scheduled by the Go runtime onto OS threads. They start with a tiny stack and cost almost nothing, so launching thousands is normal. `go f()` is all it takes." },
      { t: "code", lang: "go", code: "go handle(conn)  // runs concurrently, returns immediately" },
      { t: "callout", variant: "warn", text: "Goroutines are not automatically waited on. If main returns, they die. Coordinate with channels or a sync.WaitGroup." },
    ],
  },
  "go/go-channels": {
    blocks: [
      { t: "h2", text: "Communicating sequential processes" },
      { t: "p", text: "Channels let goroutines communicate by passing values, embodying Go's motto: 'share memory by communicating.' An unbuffered channel synchronizes sender and receiver; a buffered channel decouples them up to its capacity." },
      { t: "code", lang: "go", code: "ch := make(chan int)\ngo func() { ch <- compute() }()\nresult := <-ch  // blocks until a value arrives" },
      { t: "callout", variant: "warn", text: "Sending on a closed channel panics; the sender should close, never the receiver. Reading a closed channel yields the zero value." },
    ],
  },
  "go/go-select": {
    blocks: [
      { t: "h2", text: "Waiting on multiple channels" },
      { t: "p", text: "`select` blocks until one of several channel operations is ready, then runs that case. It is the tool for timeouts, cancellation, and multiplexing multiple sources — the concurrency equivalent of a switch." },
      { t: "code", lang: "go", code: "select {\ncase v := <-work:\n    process(v)\ncase <-ctx.Done():\n    return ctx.Err()\ncase <-time.After(time.Second):\n    return ErrTimeout\n}" },
      { t: "callout", variant: "tip", text: "A `default` case makes select non-blocking, useful for polling without stalling." },
    ],
  },
  "go/go-sync-package": {
    blocks: [
      { t: "h2", text: "When channels are not the answer" },
      { t: "p", text: "For protecting shared state, the `sync` package offers lower-level primitives. `Mutex` guards a critical section, `WaitGroup` waits for a batch of goroutines, and `Once` runs initialization exactly once." },
      { t: "code", lang: "go", code: "var wg sync.WaitGroup\nfor _, job := range jobs {\n    wg.Add(1)\n    go func(j Job) { defer wg.Done(); run(j) }(job)\n}\nwg.Wait()" },
      { t: "callout", variant: "note", text: "Use channels to pass ownership of data; use a mutex to guard shared state. Pick the one that makes the code clearest." },
    ],
  },
  "go/go-context": {
    blocks: [
      { t: "h2", text: "Deadlines and cancellation" },
      { t: "p", text: "A `context.Context` carries cancellation signals, deadlines, and request-scoped values across API boundaries. Passing it as the first parameter lets a canceled request tear down all the goroutines and I/O it spawned." },
      { t: "code", lang: "go", code: "ctx, cancel := context.WithTimeout(parent, 2*time.Second)\ndefer cancel()\nresult, err := fetch(ctx, url)" },
      { t: "callout", variant: "warn", text: "Always call the cancel function (via defer) to release resources, even when the operation completes normally." },
    ],
  },
  "go/go-error-handling": {
    blocks: [
      { t: "h2", text: "Errors are values" },
      { t: "p", text: "Go returns errors as ordinary values instead of throwing. The explicit `if err != nil` check makes failure paths visible and forces you to handle them where they occur. Wrap errors with `%w` to preserve the chain for inspection." },
      { t: "code", lang: "go", code: "f, err := os.Open(path)\nif err != nil {\n    return fmt.Errorf(\"open config: %w\", err)\n}" },
      { t: "callout", variant: "tip", text: "Use `errors.Is` and `errors.As` to test wrapped errors rather than comparing strings." },
    ],
  },
  "go/go-defer-panic-recover": {
    blocks: [
      { t: "h2", text: "Cleanup and exceptional exits" },
      { t: "p", text: "`defer` schedules a call to run when the function returns, in LIFO order — perfect for closing files and unlocking mutexes. `panic` unwinds the stack for truly unrecoverable situations, and `recover` (inside a deferred function) can stop that unwind." },
      { t: "code", lang: "go", code: "func read() (err error) {\n    f, _ := os.Open(path)\n    defer f.Close()\n    // ...\n    return\n}" },
      { t: "callout", variant: "warn", text: "Panic is not exception handling. Use it for programmer errors, not for expected failures — return errors instead." },
    ],
  },
  "go/go-packages-modules": {
    blocks: [
      { t: "h2", text: "Organizing and versioning code" },
      { t: "p", text: "A package is a directory of Go files sharing a namespace; identifiers starting with an uppercase letter are exported. A module (defined by `go.mod`) is a versioned collection of packages and the unit of dependency management." },
      { t: "code", lang: "go", code: "// go.mod\nmodule github.com/me/app\ngo 1.22" },
      { t: "callout", variant: "note", text: "Semantic import versioning means a v2+ module's path ends in /v2, letting two major versions coexist." },
    ],
  },
  "go/go-testing": {
    blocks: [
      { t: "h2", text: "Testing built into the toolchain" },
      { t: "p", text: "Go's `testing` package needs no third-party framework. Test functions named `TestXxx` in `_test.go` files run under `go test`. Table-driven tests — a slice of cases in a loop — are the idiomatic pattern, and benchmarks and fuzzing are first-class too." },
      { t: "code", lang: "go", code: "func TestAdd(t *testing.T) {\n    cases := []struct{ a, b, want int }{{1, 2, 3}, {0, 0, 0}}\n    for _, c := range cases {\n        if got := Add(c.a, c.b); got != c.want {\n            t.Errorf(\"Add(%d,%d)=%d want %d\", c.a, c.b, got, c.want)\n        }\n    }\n}" },
      { t: "callout", variant: "tip", text: "`go test -race` catches data races, and `-cover` reports coverage — both without extra tooling." },
    ],
  },
};
