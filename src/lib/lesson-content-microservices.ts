// Authored lesson content for the Microservices course. All prose is original and
// written for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const MICROSERVICES_CONTENT: Record<string, LessonContent> = {
  "microservices/monolith-vs-microservices": {
    blocks: [
      { t: "h2", text: "Monolith vs Microservices" },
      { t: "p", text: "A monolith deploys as a single unit; microservices split the system into small, independently deployable services. Neither is universally better — the right choice depends on team size, scaling needs, and operational maturity." },
      { t: "table", head: ["", "Monolith", "Microservices"], rows: [
        ["Deployment", "one artifact", "many services"],
        ["Scaling", "whole app", "per service"],
        ["Team autonomy", "low", "high"],
        ["Operational cost", "low", "high"],
      ] },
      { t: "callout", variant: "tip", text: "Start with a well-structured monolith. Extract services only when you feel real pain around scaling or team coordination." },
    ],
  },
  "microservices/when-to-use-microservices": {
    blocks: [
      { t: "h2", text: "When to Use Microservices" },
      { t: "p", text: "Microservices pay off when independent scaling, independent deployment, and team autonomy outweigh the added operational complexity." },
      { t: "ul", items: [
        "**Good fit**: large orgs, clearly separable domains, differing scaling profiles.",
        "**Poor fit**: small teams, unclear domain boundaries, early-stage products.",
        "The cost is real: distributed debugging, network failures, and data consistency.",
      ] },
      { t: "callout", variant: "warn", text: "Splitting too early locks in boundaries before you understand the domain — the most expensive kind of mistake to reverse." },
    ],
  },
  "microservices/bounded-contexts": {
    blocks: [
      { t: "h2", text: "Bounded Contexts & DDD" },
      { t: "p", text: "A bounded context (from Domain-Driven Design) is a boundary within which a model and its terms have one consistent meaning. Services drawn along bounded contexts stay cohesive and loosely coupled." },
      { t: "p", text: "The word 'Customer' may mean different things to Billing and to Support. Each context owns its own model rather than sharing one bloated definition." },
      { t: "callout", variant: "note", text: "Good service boundaries usually follow bounded contexts, not technical layers." },
    ],
  },
  "microservices/service-decomposition": {
    blocks: [
      { t: "h2", text: "Decomposing a Monolith" },
      { t: "p", text: "Breaking a monolith is best done incrementally using the strangler fig pattern: route new functionality to services while the old code keeps running, then peel off pieces over time." },
      { t: "ol", items: [
        "Identify a bounded context with a clear seam.",
        "Route its traffic through a facade or gateway.",
        "Build the new service and migrate data.",
        "Cut over, then delete the old module.",
      ] },
    ],
  },
  "microservices/sync-vs-async-comm": {
    blocks: [
      { t: "h2", text: "Synchronous vs Asynchronous" },
      { t: "p", text: "Synchronous calls (HTTP/gRPC) block until a response arrives; asynchronous messaging lets services communicate through events without waiting. The choice shapes coupling and resilience." },
      { t: "table", head: ["", "Sync", "Async"], rows: [
        ["Coupling", "temporal (both up)", "decoupled"],
        ["Latency", "immediate result", "eventual"],
        ["Failure impact", "cascades", "absorbed by queue"],
      ] },
      { t: "callout", variant: "tip", text: "Use sync for queries needing an immediate answer; use async for commands and events that tolerate eventual processing." },
    ],
  },
  "microservices/rest-grpc": {
    blocks: [
      { t: "h2", text: "REST vs gRPC" },
      { t: "p", text: "REST over JSON is simple, human-readable, and universal. gRPC uses HTTP/2 and Protocol Buffers for compact, strongly-typed, low-latency calls, plus streaming." },
      { t: "ul", items: [
        "**REST**: great for public APIs and browser clients.",
        "**gRPC**: great for internal service-to-service calls and streaming.",
        "gRPC contracts (`.proto`) generate typed clients in many languages.",
      ] },
    ],
  },
  "microservices/api-gateway": {
    blocks: [
      { t: "h2", text: "API Gateway" },
      { t: "p", text: "An API gateway is a single entry point that routes requests to backend services and centralizes cross-cutting concerns like authentication, rate limiting, and TLS termination." },
      { t: "code", lang: "text", code: "Client -> API Gateway -> [Auth, Orders, Catalog, Payments]\nOne public endpoint; many private services behind it." },
      { t: "callout", variant: "warn", text: "Keep business logic out of the gateway — it should route and enforce policy, not become a new monolith." },
    ],
  },
  "microservices/service-discovery": {
    blocks: [
      { t: "h2", text: "Service Discovery" },
      { t: "p", text: "In a dynamic environment, service instances come and go, so their addresses cannot be hard-coded. Service discovery lets a client find a healthy instance at call time." },
      { t: "ul", items: [
        "**Client-side discovery** — the client queries a registry and picks an instance.",
        "**Server-side discovery** — a load balancer resolves the instance for the client.",
        "A registry (Consul, etcd) tracks live instances via health checks.",
      ] },
    ],
  },
  "microservices/event-driven-architecture": {
    blocks: [
      { t: "h2", text: "Event-Driven Architecture" },
      { t: "p", text: "In event-driven architecture, services emit events when something happens and other services react. Producers and consumers never call each other directly, which yields loose coupling and easy extensibility." },
      { t: "code", lang: "text", code: "OrderService --OrderPlaced--> [Inventory, Email, Analytics]\nAdd a new consumer without touching the producer." },
      { t: "callout", variant: "note", text: "Trade-off: flows become harder to trace. Invest in correlation IDs and distributed tracing early." },
    ],
  },
  "microservices/database-per-service": {
    blocks: [
      { t: "h2", text: "Database per Service" },
      { t: "p", text: "Each service owns its database and no other service touches it directly. This preserves loose coupling and lets each service pick the store that fits its data." },
      { t: "callout", variant: "warn", text: "The cost is that cross-service queries and transactions become distributed problems solved with sagas, events, or read models." },
    ],
  },
  "microservices/saga-pattern": {
    blocks: [
      { t: "h2", text: "The Saga Pattern" },
      { t: "p", text: "A saga implements a business transaction spanning services as a sequence of local transactions, each with a compensating action to undo it if a later step fails." },
      { t: "ul", items: [
        "**Choreography** — services react to each other's events; no central coordinator.",
        "**Orchestration** — a coordinator tells each service what to do next.",
        "Failures trigger compensating transactions rather than a rollback.",
      ] },
      { t: "callout", variant: "note", text: "Sagas give you eventual consistency, not the atomic all-or-nothing of a single database transaction." },
    ],
  },
  "microservices/cqrs": {
    blocks: [
      { t: "h2", text: "CQRS" },
      { t: "p", text: "Command Query Responsibility Segregation splits the write model from the read model. Writes go through commands; reads use denormalized views optimized for querying." },
      { t: "code", lang: "text", code: "Command side -> validates + writes -> emits events\nQuery side  -> subscribes -> builds fast read models" },
      { t: "callout", variant: "tip", text: "CQRS shines when read and write workloads differ greatly, but it adds complexity — don't apply it everywhere." },
    ],
  },
  "microservices/event-sourcing": {
    blocks: [
      { t: "h2", text: "Event Sourcing" },
      { t: "p", text: "Instead of storing current state, event sourcing stores the full sequence of events that led to it. Current state is derived by replaying events, giving you a complete audit log for free." },
      { t: "callout", variant: "warn", text: "Events are immutable history — schema evolution and replay performance need deliberate design (snapshots help)." },
    ],
  },
  "microservices/distributed-transactions": {
    blocks: [
      { t: "h2", text: "Distributed Transactions" },
      { t: "p", text: "A distributed transaction spans multiple services or databases. Because two-phase commit is slow and fragile at scale, most systems favor eventual consistency via sagas." },
      { t: "table", head: ["Approach", "Consistency", "Availability"], rows: [
        ["Two-phase commit", "strong", "lower (blocking)"],
        ["Saga", "eventual", "higher"],
      ] },
    ],
  },
  "microservices/circuit-breaker": {
    blocks: [
      { t: "h2", text: "Circuit Breaker" },
      { t: "p", text: "A circuit breaker stops calling a failing dependency after errors cross a threshold, giving it time to recover and preventing cascading failure." },
      { t: "code", lang: "text", code: "CLOSED (normal) -> too many failures -> OPEN (fail fast)\nOPEN -> after cooldown -> HALF_OPEN (test) -> CLOSED or OPEN" },
      { t: "callout", variant: "tip", text: "Pair a circuit breaker with a fallback so callers degrade gracefully instead of erroring outright." },
    ],
  },
  "microservices/retries-backoff": {
    blocks: [
      { t: "h2", text: "Retries & Exponential Backoff" },
      { t: "p", text: "Retries recover from transient failures, but naive retries can overwhelm a struggling service. Exponential backoff with jitter spreads retries out and avoids synchronized retry storms." },
      { t: "code", lang: "text", code: "delay = min(cap, base * 2^attempt) + random_jitter" },
      { t: "callout", variant: "warn", text: "Only retry idempotent operations, or you risk duplicate side effects like double charges." },
    ],
  },
  "microservices/bulkhead-pattern": {
    blocks: [
      { t: "h2", text: "Bulkhead Pattern" },
      { t: "p", text: "Like watertight compartments in a ship, the bulkhead pattern isolates resources (thread pools, connection pools) per dependency so one failing dependency cannot sink the whole service." },
      { t: "callout", variant: "note", text: "Without bulkheads, one slow dependency can exhaust a shared thread pool and stall unrelated requests." },
    ],
  },
  "microservices/timeouts-fallbacks": {
    blocks: [
      { t: "h2", text: "Timeouts & Fallbacks" },
      { t: "p", text: "Every remote call needs a timeout; without one, a hung dependency ties up resources indefinitely. A fallback provides a degraded-but-useful response when the call fails or times out." },
      { t: "ul", items: [
        "Set timeouts shorter than the caller's own deadline.",
        "Fallbacks: cached data, a default value, or a friendly error.",
      ] },
    ],
  },
  "microservices/containers-docker": {
    blocks: [
      { t: "h2", text: "Containers & Docker" },
      { t: "p", text: "A container packages a service with its dependencies into a portable, isolated image that runs the same everywhere. Docker is the most common tool for building and running them." },
      { t: "code", lang: "text", code: "FROM eclipse-temurin:21-jre\nCOPY app.jar /app.jar\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]" },
      { t: "callout", variant: "tip", text: "Containers are lighter than VMs because they share the host kernel instead of booting a full OS." },
    ],
  },
  "microservices/orchestration-kubernetes": {
    blocks: [
      { t: "h2", text: "Orchestration with Kubernetes" },
      { t: "p", text: "Kubernetes schedules containers across a cluster and keeps them running, handling scaling, self-healing, rolling updates, and service networking declaratively." },
      { t: "ul", items: [
        "**Pod** — the smallest deployable unit; one or more containers.",
        "**Deployment** — declares desired replicas and update strategy.",
        "**Service** — a stable virtual address load-balancing across pods.",
      ] },
    ],
  },
  "microservices/service-mesh": {
    blocks: [
      { t: "h2", text: "Service Mesh" },
      { t: "p", text: "A service mesh moves cross-cutting network concerns — mTLS, retries, timeouts, traffic shifting, telemetry — out of application code into sidecar proxies alongside each service." },
      { t: "callout", variant: "note", text: "The mesh gives uniform, language-agnostic networking policy, at the cost of extra proxies and operational overhead." },
    ],
  },
  "microservices/observability-microservices": {
    blocks: [
      { t: "h2", text: "Observability" },
      { t: "p", text: "With requests fanning out across many services, you need the three pillars of observability to understand behavior: logs, metrics, and traces." },
      { t: "ul", items: [
        "**Logs** — discrete events, best with structured fields and correlation IDs.",
        "**Metrics** — aggregated numbers (latency, error rate) for dashboards and alerts.",
        "**Traces** — the path of one request across services.",
      ] },
    ],
  },
  "microservices/ci-cd": {
    blocks: [
      { t: "h2", text: "CI/CD Pipelines" },
      { t: "p", text: "Continuous Integration builds and tests every change; Continuous Delivery/Deployment automates releasing it. With many services, automated pipelines are essential to ship safely." },
      { t: "code", lang: "text", code: "commit -> build -> unit tests -> image -> integration tests -> deploy (canary) -> promote" },
      { t: "callout", variant: "tip", text: "Canary or blue-green deployments let you release to a small slice first and roll back fast if metrics degrade." },
    ],
  },
};
