// Authored lesson content for the Low Level Design course. All prose is original
// and written for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const LLD_CONTENT: Record<string, LessonContent> = {
  "low-level-design/what-is-lld": {
    blocks: [
      { t: "h2", text: "What Is Low Level Design?" },
      { t: "p", text: "Low Level Design (LLD) is the step where you turn a feature into concrete classes, interfaces, and relationships. Where high level design answers *how services talk to each other*, LLD answers *how the code inside one service is organized* so it stays readable, testable, and easy to extend." },
      { t: "ul", items: [
        "**Inputs**: a problem statement and its requirements.",
        "**Outputs**: classes, their responsibilities, method signatures, and how objects collaborate.",
        "**Goal**: a design that is easy to change when requirements shift.",
      ] },
      { t: "callout", variant: "note", text: "LLD is judged less on getting a single 'right' answer and more on clear responsibilities, sensible abstractions, and code that survives new requirements." },
    ],
  },
  "low-level-design/lld-interview-approach": {
    blocks: [
      { t: "h2", text: "How to Approach an LLD Interview" },
      { t: "p", text: "Treat the interview as a conversation, not a race to code. A repeatable process keeps you calm and shows the interviewer how you think." },
      { t: "ol", items: [
        "**Clarify requirements** — list the core use cases and explicitly note what is out of scope.",
        "**Identify entities** — nouns in the problem often become classes; verbs often become methods.",
        "**Define relationships** — decide what *has-a*, *is-a*, or *uses-a* what.",
        "**Sketch the API** — write key method signatures before implementing them.",
        "**Apply patterns where they fit** — never force a pattern; use it to solve a real variation point.",
        "**Walk a use case end to end** — trace one flow through your objects to validate the design.",
      ] },
      { t: "callout", variant: "tip", text: "Say your assumptions out loud. 'I'll assume one payment method per order for now' turns ambiguity into a decision the interviewer can correct." },
    ],
  },
  "low-level-design/uml-basics": {
    blocks: [
      { t: "h2", text: "UML Class & Sequence Diagrams" },
      { t: "p", text: "UML gives you a shared vocabulary for sketching designs. You only need a small subset to be effective in interviews." },
      { t: "table", head: ["Relationship", "Meaning", "Notation"], rows: [
        ["Association", "one class uses another", "plain arrow"],
        ["Aggregation", "has-a, shared lifetime", "hollow diamond"],
        ["Composition", "has-a, owned lifetime", "filled diamond"],
        ["Inheritance", "is-a", "hollow triangle"],
      ] },
      { t: "p", text: "A **class diagram** shows structure — classes and how they relate. A **sequence diagram** shows behavior — the order of messages between objects over time." },
      { t: "callout", variant: "tip", text: "Draw only enough UML to communicate. Interviewers care about correct relationships, not perfect notation." },
    ],
  },
  "low-level-design/encapsulation": {
    blocks: [
      { t: "h2", text: "Encapsulation" },
      { t: "p", text: "Encapsulation bundles data with the methods that operate on it and hides internal state behind a controlled interface. Callers change state only through methods that can enforce rules." },
      { t: "code", lang: "java", code: "class BankAccount {\n  private long balanceCents; // hidden\n\n  public void deposit(long cents) {\n    if (cents <= 0) throw new IllegalArgumentException();\n    balanceCents += cents;\n  }\n\n  public long getBalanceCents() { return balanceCents; }\n}" },
      { t: "p", text: "Because `balanceCents` is private, no caller can set a negative balance directly. The invariant lives in one place." },
      { t: "callout", variant: "note", text: "Encapsulation is about protecting invariants, not just adding getters and setters to every field." },
    ],
  },
  "low-level-design/abstraction": {
    blocks: [
      { t: "h2", text: "Abstraction" },
      { t: "p", text: "Abstraction exposes *what* an object does while hiding *how* it does it. Callers depend on a simple contract and stay insulated from implementation details." },
      { t: "code", lang: "java", code: "interface PaymentGateway {\n  PaymentResult charge(Money amount, Card card);\n}\n\n// Callers never see HTTP calls, retries, or SDK details.\nclass StripeGateway implements PaymentGateway { /* ... */ }" },
      { t: "ul", items: [
        "Abstraction is the *interface*; encapsulation is *hiding the data behind it*.",
        "Good abstractions are small, stable, and named after the domain — not the technology.",
      ] },
    ],
  },
  "low-level-design/inheritance": {
    blocks: [
      { t: "h2", text: "Inheritance" },
      { t: "p", text: "Inheritance lets a subclass reuse and specialize a parent's behavior. It models an *is-a* relationship: a `SavingsAccount` **is a** `BankAccount`." },
      { t: "code", lang: "java", code: "abstract class Account {\n  abstract double interestRate();\n}\nclass SavingsAccount extends Account {\n  double interestRate() { return 0.04; }\n}" },
      { t: "callout", variant: "warn", text: "Deep inheritance trees are fragile. If you only want to reuse code (not model is-a), prefer composition." },
    ],
  },
  "low-level-design/polymorphism": {
    blocks: [
      { t: "h2", text: "Polymorphism" },
      { t: "p", text: "Polymorphism lets one interface stand for many concrete types. The caller invokes a method and the correct implementation runs based on the actual object." },
      { t: "code", lang: "java", code: "List<Shape> shapes = List.of(new Circle(), new Square());\nfor (Shape s : shapes) {\n  System.out.println(s.area()); // dispatches to Circle or Square\n}" },
      { t: "ul", items: [
        "**Runtime (subtype) polymorphism** — method overriding via interfaces or base classes.",
        "**Compile-time polymorphism** — method overloading and generics.",
      ] },
      { t: "callout", variant: "tip", text: "Polymorphism is what lets you add a new `Shape` without touching the loop that draws shapes — the heart of the Open/Closed Principle." },
    ],
  },
  "low-level-design/composition-over-inheritance": {
    blocks: [
      { t: "h2", text: "Composition over Inheritance" },
      { t: "p", text: "Composition builds behavior by combining objects rather than inheriting from a base class. It avoids the rigidity of deep hierarchies and lets you swap parts at runtime." },
      { t: "code", lang: "java", code: "// Instead of RoadCar extends Car extends Vehicle...\nclass Car {\n  private final Engine engine;   // has-a\n  private final Transmission gearbox;\n  Car(Engine e, Transmission t) { engine = e; gearbox = t; }\n}" },
      { t: "table", head: ["", "Inheritance", "Composition"], rows: [
        ["Coupling", "tight to parent", "loose, via interface"],
        ["Change at runtime", "no", "yes"],
        ["Reuse", "single parent", "mix many parts"],
      ] },
      { t: "callout", variant: "tip", text: "Rule of thumb: use inheritance for a true is-a relationship; use composition for has-a or 'behaves-like' reuse." },
    ],
  },
  "low-level-design/single-responsibility": {
    blocks: [
      { t: "h2", text: "Single Responsibility Principle" },
      { t: "p", text: "A class should have one reason to change. When a class mixes unrelated responsibilities, a change to one forces recompilation and retesting of the others." },
      { t: "code", lang: "java", code: "// Bad: one class formats AND persists AND emails\nclass Report { format(); saveToDb(); email(); }\n\n// Good: split responsibilities\nclass ReportFormatter { format(); }\nclass ReportRepository { save(); }\nclass ReportMailer { send(); }" },
      { t: "callout", variant: "note", text: "'Reason to change' is defined by the actors who request changes — reporting, storage, and messaging are usually different actors." },
    ],
  },
  "low-level-design/open-closed": {
    blocks: [
      { t: "h2", text: "Open/Closed Principle" },
      { t: "p", text: "Software entities should be open for extension but closed for modification. You add new behavior by adding new code, not by editing tested code." },
      { t: "code", lang: "java", code: "interface Discount { Money apply(Money price); }\nclass NoDiscount implements Discount { /* ... */ }\nclass PercentDiscount implements Discount { /* ... */ }\n// New discount = new class. Checkout code never changes." },
      { t: "callout", variant: "tip", text: "A long if/else or switch on a type is a smell that often points to a missing polymorphic abstraction." },
    ],
  },
  "low-level-design/liskov-substitution": {
    blocks: [
      { t: "h2", text: "Liskov Substitution Principle" },
      { t: "p", text: "Subtypes must be usable anywhere their base type is expected, without surprising the caller. If a subclass breaks the parent's contract, inheritance is being misused." },
      { t: "code", lang: "text", code: "Classic violation:\n  Square extends Rectangle\n  setWidth(5); setHeight(4);\n  A Rectangle expects area == 20.\n  A Square forces width == height, so area == 16. Broken." },
      { t: "callout", variant: "warn", text: "If a subclass throws 'not supported' for an inherited method, it is probably not a true subtype." },
    ],
  },
  "low-level-design/interface-segregation": {
    blocks: [
      { t: "h2", text: "Interface Segregation Principle" },
      { t: "p", text: "Clients should not be forced to depend on methods they do not use. Prefer several small, focused interfaces over one large 'fat' interface." },
      { t: "code", lang: "java", code: "// Bad\ninterface Worker { work(); eat(); }\n// A robot must implement eat() it never needs.\n\n// Good\ninterface Workable { work(); }\ninterface Feedable { eat(); }" },
      { t: "callout", variant: "note", text: "Small interfaces make mocking in tests trivial and keep implementations honest." },
    ],
  },
  "low-level-design/dependency-inversion": {
    blocks: [
      { t: "h2", text: "Dependency Inversion Principle" },
      { t: "p", text: "High-level modules should depend on abstractions, not on concrete low-level modules. Details depend on policy, not the other way around." },
      { t: "code", lang: "java", code: "class OrderService {\n  private final PaymentGateway gateway; // abstraction\n  OrderService(PaymentGateway g) { gateway = g; } // injected\n}\n// Swap StripeGateway for a FakeGateway in tests without edits." },
      { t: "callout", variant: "tip", text: "Dependency injection is the practical technique that makes dependency inversion easy to apply." },
    ],
  },
  "low-level-design/singleton-pattern": {
    blocks: [
      { t: "h2", text: "Singleton" },
      { t: "p", text: "The Singleton pattern ensures a class has exactly one instance and gives a global access point to it. Useful for shared resources like a configuration or connection pool." },
      { t: "code", lang: "java", code: "enum ConfigManager {\n  INSTANCE;\n  private final Map<String,String> values = load();\n  public String get(String key) { return values.get(key); }\n}" },
      { t: "callout", variant: "warn", text: "Singletons are effectively global state and can hurt testability. Prefer dependency injection of a single shared instance where possible." },
    ],
  },
  "low-level-design/factory-pattern": {
    blocks: [
      { t: "h2", text: "Factory Method" },
      { t: "p", text: "A factory method centralizes object creation so callers ask for *what* they want without knowing *which concrete class* to instantiate." },
      { t: "code", lang: "java", code: "class NotificationFactory {\n  static Notification create(Channel c) {\n    return switch (c) {\n      case SMS -> new SmsNotification();\n      case EMAIL -> new EmailNotification();\n    };\n  }\n}" },
      { t: "callout", variant: "note", text: "The factory isolates the switch on type to one place, keeping the rest of the code free of construction logic." },
    ],
  },
  "low-level-design/abstract-factory-pattern": {
    blocks: [
      { t: "h2", text: "Abstract Factory" },
      { t: "p", text: "An abstract factory produces *families* of related objects that are meant to be used together, without binding callers to concrete classes." },
      { t: "code", lang: "java", code: "interface UIFactory { Button button(); Checkbox checkbox(); }\nclass DarkFactory implements UIFactory { /* dark widgets */ }\nclass LightFactory implements UIFactory { /* light widgets */ }" },
      { t: "p", text: "Switching the factory swaps the whole family at once, guaranteeing a consistent theme." },
    ],
  },
  "low-level-design/builder-pattern": {
    blocks: [
      { t: "h2", text: "Builder" },
      { t: "p", text: "The Builder pattern constructs complex objects step by step, which is far cleaner than a constructor with many optional parameters." },
      { t: "code", lang: "java", code: "Pizza p = new Pizza.Builder()\n    .size(\"large\")\n    .addTopping(\"mushroom\")\n    .addTopping(\"olive\")\n    .build();" },
      { t: "callout", variant: "tip", text: "Builders shine when many fields are optional and you want the result to be immutable once built." },
    ],
  },
  "low-level-design/prototype-pattern": {
    blocks: [
      { t: "h2", text: "Prototype" },
      { t: "p", text: "The Prototype pattern creates new objects by cloning an existing instance, which is handy when construction is expensive or when you want a copy of a configured object." },
      { t: "code", lang: "java", code: "interface Prototype { Prototype clone(); }\nclass Document implements Prototype {\n  public Document clone() { return new Document(this); }\n}" },
      { t: "callout", variant: "note", text: "Decide between shallow and deep copies deliberately — a shallow clone shares nested mutable objects." },
    ],
  },
  "low-level-design/adapter-pattern": {
    blocks: [
      { t: "h2", text: "Adapter" },
      { t: "p", text: "An adapter wraps an incompatible interface so it looks like the interface your code expects. It is the classic way to integrate a third-party library without leaking its API everywhere." },
      { t: "code", lang: "java", code: "class LegacyLogger { void writeLine(String s) {} }\nclass LoggerAdapter implements Logger {\n  private final LegacyLogger legacy;\n  public void log(String msg) { legacy.writeLine(msg); }\n}" },
    ],
  },
  "low-level-design/decorator-pattern": {
    blocks: [
      { t: "h2", text: "Decorator" },
      { t: "p", text: "A decorator adds responsibilities to an object dynamically by wrapping it in another object with the same interface. It is a flexible alternative to subclassing for extending behavior." },
      { t: "code", lang: "java", code: "Coffee c = new MilkDecorator(new SugarDecorator(new Espresso()));\nc.cost(); // base + sugar + milk" },
      { t: "callout", variant: "tip", text: "Because decorators share the component interface, you can stack them in any order and combination." },
    ],
  },
  "low-level-design/facade-pattern": {
    blocks: [
      { t: "h2", text: "Facade" },
      { t: "p", text: "A facade provides a simple, unified entry point to a complex subsystem. Callers use the facade instead of coordinating many low-level classes themselves." },
      { t: "code", lang: "java", code: "class VideoConverter {\n  String convert(String file, String format) {\n    // hides codecs, buffers, muxers behind one call\n  }\n}" },
      { t: "callout", variant: "note", text: "A facade does not hide the subsystem — advanced callers can still reach the classes directly when needed." },
    ],
  },
  "low-level-design/proxy-pattern": {
    blocks: [
      { t: "h2", text: "Proxy" },
      { t: "p", text: "A proxy stands in for another object to control access to it. Common variants include lazy-loading (virtual), access control (protection), and remote proxies." },
      { t: "code", lang: "java", code: "class ImageProxy implements Image {\n  private RealImage real;\n  public void render() {\n    if (real == null) real = new RealImage(path); // lazy load\n    real.render();\n  }\n}" },
    ],
  },
  "low-level-design/composite-pattern": {
    blocks: [
      { t: "h2", text: "Composite" },
      { t: "p", text: "The Composite pattern lets you treat individual objects and groups of objects uniformly through a shared interface — perfect for tree structures like file systems or UI layouts." },
      { t: "code", lang: "java", code: "interface Node { long size(); }\nclass File implements Node { /* leaf */ }\nclass Folder implements Node {\n  List<Node> children;\n  public long size() { return children.stream().mapToLong(Node::size).sum(); }\n}" },
    ],
  },
  "low-level-design/bridge-pattern": {
    blocks: [
      { t: "h2", text: "Bridge" },
      { t: "p", text: "The Bridge pattern splits an abstraction from its implementation so the two can vary independently. It prevents a combinatorial explosion of subclasses." },
      { t: "code", lang: "text", code: "Without bridge: RedCircle, BlueCircle, RedSquare, BlueSquare...\nWith bridge:\n  Shape (abstraction) --has-a--> Color (implementation)\n  Add a color OR a shape without multiplying classes." },
    ],
  },
  "low-level-design/strategy-pattern": {
    blocks: [
      { t: "h2", text: "Strategy" },
      { t: "p", text: "The Strategy pattern defines a family of interchangeable algorithms and lets the client choose one at runtime. It replaces conditional logic with pluggable objects." },
      { t: "code", lang: "java", code: "interface SortStrategy { void sort(int[] a); }\nclass Sorter {\n  private SortStrategy strategy;\n  void setStrategy(SortStrategy s) { strategy = s; }\n  void run(int[] a) { strategy.sort(a); }\n}" },
      { t: "callout", variant: "tip", text: "Strategy is Open/Closed in action: add a new algorithm as a new class, no edits to the caller." },
    ],
  },
  "low-level-design/observer-pattern": {
    blocks: [
      { t: "h2", text: "Observer" },
      { t: "p", text: "The Observer pattern lets many subscribers react to changes in a subject without the subject knowing their concrete types. It underpins event systems and UI data binding." },
      { t: "code", lang: "java", code: "interface Observer { void update(Event e); }\nclass Subject {\n  private List<Observer> observers = new ArrayList<>();\n  void subscribe(Observer o) { observers.add(o); }\n  void notifyAll(Event e) { observers.forEach(o -> o.update(e)); }\n}" },
      { t: "callout", variant: "warn", text: "Remember to unsubscribe observers, or you risk memory leaks and stale updates." },
    ],
  },
  "low-level-design/state-pattern": {
    blocks: [
      { t: "h2", text: "State" },
      { t: "p", text: "The State pattern lets an object change its behavior when its internal state changes, as if it changed its class. Each state is its own object with its own transitions." },
      { t: "code", lang: "text", code: "VendingMachine states:\n  Idle --insertCoin--> HasMoney\n  HasMoney --selectItem--> Dispensing\n  Dispensing --done--> Idle\nEach state handles events differently." },
      { t: "callout", variant: "note", text: "State replaces sprawling if/else on a status field with clear, self-contained transition logic." },
    ],
  },
  "low-level-design/command-pattern": {
    blocks: [
      { t: "h2", text: "Command" },
      { t: "p", text: "The Command pattern turns a request into an object, letting you parameterize, queue, log, and undo operations." },
      { t: "code", lang: "java", code: "interface Command { void execute(); void undo(); }\nclass PasteCommand implements Command { /* ... */ }\n// Editor keeps a stack of Commands to support undo/redo." },
    ],
  },
  "low-level-design/template-method-pattern": {
    blocks: [
      { t: "h2", text: "Template Method" },
      { t: "p", text: "The Template Method defines the skeleton of an algorithm in a base class and lets subclasses fill in specific steps without changing the overall structure." },
      { t: "code", lang: "java", code: "abstract class DataImporter {\n  final void run() { open(); parse(); save(); close(); } // fixed order\n  abstract void parse(); // subclass-specific step\n}" },
      { t: "callout", variant: "tip", text: "The template method is usually marked final so subclasses cannot reorder the steps." },
    ],
  },
  "low-level-design/chain-of-responsibility": {
    blocks: [
      { t: "h2", text: "Chain of Responsibility" },
      { t: "p", text: "This pattern passes a request along a chain of handlers until one handles it. It decouples the sender from the specific receiver and makes the pipeline easy to reorder." },
      { t: "code", lang: "text", code: "Request -> AuthHandler -> RateLimitHandler -> LoggingHandler -> Controller\nEach handler either processes or forwards to the next." },
      { t: "callout", variant: "note", text: "Middleware stacks in web frameworks are a real-world chain of responsibility." },
    ],
  },
  "low-level-design/iterator-pattern": {
    blocks: [
      { t: "h2", text: "Iterator" },
      { t: "p", text: "The Iterator pattern provides a standard way to traverse a collection without exposing its internal representation." },
      { t: "code", lang: "java", code: "interface Iterator<T> { boolean hasNext(); T next(); }\n// Clients loop the same way over arrays, trees, or graphs." },
    ],
  },
  "low-level-design/design-parking-lot": {
    blocks: [
      { t: "h2", text: "Design a Parking Lot" },
      { t: "p", text: "A parking lot system assigns incoming vehicles to compatible spots, tracks occupancy, and computes fees on exit. It is a favorite because it exercises inheritance, enums, and clean responsibilities." },
      { t: "ul", items: [
        "**Entities**: `ParkingLot`, `Level`, `ParkingSpot`, `Vehicle`, `Ticket`.",
        "**Vehicle types**: motorcycle, car, truck — map to spot sizes.",
        "**Strategy**: pluggable `SpotAssignmentStrategy` (nearest, by size).",
        "**Fee**: `FeeStrategy` computes cost from entry/exit time.",
      ] },
      { t: "code", lang: "java", code: "class ParkingLot {\n  Ticket park(Vehicle v) {\n    ParkingSpot spot = assignment.find(v);\n    spot.occupy(v);\n    return new Ticket(v, spot, now());\n  }\n  Money unpark(Ticket t) { t.spot().free(); return fee.compute(t); }\n}" },
      { t: "callout", variant: "tip", text: "Keep fee calculation behind a strategy so weekend, hourly, and flat-rate pricing are drop-in swaps." },
    ],
  },
  "low-level-design/design-elevator-system": {
    blocks: [
      { t: "h2", text: "Design an Elevator System" },
      { t: "p", text: "An elevator system schedules cars to serve pickup and drop requests efficiently. The core challenge is the scheduling strategy and modeling each car's state." },
      { t: "ul", items: [
        "**Entities**: `ElevatorSystem`, `ElevatorCar`, `Request`, `Direction`, `DoorState`.",
        "**State**: each car is `Idle`, `MovingUp`, `MovingDown`, or `DoorsOpen`.",
        "**Strategy**: `SchedulingStrategy` (nearest-car, SCAN/elevator algorithm).",
      ] },
      { t: "code", lang: "text", code: "SCAN idea: keep moving in one direction serving all requests,\nthen reverse. Minimizes direction changes and starvation." },
      { t: "callout", variant: "note", text: "Separate the dispatcher (which car serves a request) from the car's motion logic (how it moves)." },
    ],
  },
  "low-level-design/design-vending-machine": {
    blocks: [
      { t: "h2", text: "Design a Vending Machine" },
      { t: "p", text: "A vending machine is the textbook use case for the State pattern: its response to 'insert coin' or 'select item' depends entirely on its current state." },
      { t: "code", lang: "text", code: "States: Idle -> HasMoney -> Dispensing -> Idle\nEvents: insertCoin, selectItem, dispense, refund" },
      { t: "ul", items: [
        "**Entities**: `VendingMachine`, `State`, `Inventory`, `Product`, `Coin`.",
        "Each `State` implements the same interface but reacts differently to events.",
        "`Inventory` tracks stock and rejects sold-out selections.",
      ] },
    ],
  },
  "low-level-design/design-tic-tac-toe": {
    blocks: [
      { t: "h2", text: "Design Tic-Tac-Toe" },
      { t: "p", text: "Tic-Tac-Toe is small enough to design fully yet rich enough to show clean modeling of a `Board`, `Player`, and win-detection logic." },
      { t: "code", lang: "java", code: "class Game {\n  boolean move(Player p, int r, int c) {\n    board.set(r, c, p.mark());\n    return board.hasWinningLine(p.mark());\n  }\n}" },
      { t: "callout", variant: "tip", text: "Check only the row, column, and diagonals through the last move — no need to scan the whole board." },
    ],
  },
  "low-level-design/design-snake-and-ladder": {
    blocks: [
      { t: "h2", text: "Design Snake & Ladder" },
      { t: "p", text: "This board game models players moving across numbered cells, with snakes and ladders as jumps. It highlights clean turn management and a simple board abstraction." },
      { t: "ul", items: [
        "**Entities**: `Game`, `Board`, `Cell`, `Jump` (snake or ladder), `Player`, `Dice`.",
        "A `Jump` maps a start cell to an end cell — one type covers both snakes and ladders.",
        "The `Game` loops turns, rolls the dice, and applies any jump on landing.",
      ] },
    ],
  },
  "low-level-design/design-splitwise": {
    blocks: [
      { t: "h2", text: "Design Splitwise" },
      { t: "p", text: "Splitwise tracks shared expenses within groups and computes who owes whom. The heart of the design is the split strategy and a running balance ledger." },
      { t: "ul", items: [
        "**Entities**: `User`, `Group`, `Expense`, `Split`, `BalanceSheet`.",
        "**Split types**: equal, exact, and percentage — model with a `SplitStrategy`.",
        "**Balances**: store net balance per pair of users and update on each expense.",
      ] },
      { t: "callout", variant: "note", text: "A simplify-debts step can reduce the number of transactions needed to settle a group." },
    ],
  },
  "low-level-design/design-rate-limiter-lld": {
    blocks: [
      { t: "h2", text: "Design a Rate Limiter" },
      { t: "p", text: "At the code level, a rate limiter decides whether a request is allowed based on a per-key policy. The design centers on a pluggable algorithm behind a single `allow(key)` method." },
      { t: "code", lang: "java", code: "interface RateLimiter { boolean allow(String key); }\nclass TokenBucketLimiter implements RateLimiter { /* refill + consume */ }" },
      { t: "ul", items: [
        "**Algorithms**: token bucket, leaky bucket, fixed window, sliding window.",
        "State per key must be thread-safe — guard buckets with locks or atomics.",
      ] },
    ],
  },
  "low-level-design/design-logging-framework": {
    blocks: [
      { t: "h2", text: "Design a Logging Framework" },
      { t: "p", text: "A logging framework accepts messages at various levels and routes them to one or more destinations. It combines the Chain of Responsibility and Strategy patterns cleanly." },
      { t: "ul", items: [
        "**Levels**: DEBUG < INFO < WARN < ERROR; drop messages below the configured threshold.",
        "**Appenders**: console, file, network — a `LogAppender` interface (Strategy).",
        "**Formatter**: turns a log record into a line; swappable per appender.",
      ] },
      { t: "code", lang: "text", code: "Logger -> level filter -> [ConsoleAppender, FileAppender]\nEach appender formats and writes independently." },
    ],
  },
};
