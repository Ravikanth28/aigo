// Authored lesson content for the System Design Fundamentals course. All prose is
// original and written for this project. Keyed by `${course}/${lessonSlug}` and
// merged into LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const SD_FUNDAMENTALS_CONTENT: Record<string, LessonContent> = {
  "system-design-fundamentals/intro-to-system-design": {
    blocks: [
      { t: "h2", text: "What system design really is" },
      { t: "p", text: "System design is the practice of deciding how the pieces of a software system fit together so that it meets its requirements at the scale it needs to operate. Where coding answers *how do I implement this function*, system design answers *how do requests flow through my services, where does data live, and what happens when a machine dies*." },
      { t: "p", text: "A good design is not the most clever one — it is the one whose **trade-offs match the problem**. Almost every decision costs you something: more consistency usually costs availability, more caching costs freshness, more services cost operational complexity." },
      { t: "ul", items: [
        "**Functional requirements** describe what the system does (post a tweet, search products).",
        "**Non-functional requirements** describe how well it does it (handle 10k requests/second with p99 latency under 200ms).",
        "**Constraints** are the fixed realities you design around: budget, team size, existing infrastructure.",
      ] },
      { t: "callout", variant: "tip", text: "In an interview, the biggest early mistake is jumping to a database schema before you understand the requirements. Spend the first few minutes clarifying scope." },
    ],
  },
  "system-design-fundamentals/how-to-approach-sd": {
    blocks: [
      { t: "h2", text: "A repeatable framework" },
      { t: "p", text: "Whether in an interview or at work, a predictable process keeps you from freezing. The steps below move from *what* to *how* to *what breaks*." },
      { t: "ol", items: [
        "**Clarify requirements.** List the core features, then the scale (users, reads/writes, data size). Ask what is in and out of scope.",
        "**Estimate.** Do rough back-of-the-envelope math for traffic, storage, and bandwidth so your design is grounded in numbers.",
        "**Define the API.** Sketch the main endpoints or operations — this forces clarity about inputs and outputs.",
        "**Design the data model.** Choose entities and how they relate; this drives your storage choice.",
        "**Draw the high-level architecture.** Clients, load balancer, services, databases, caches, queues.",
        "**Deep-dive.** Pick the one or two hardest parts (hot partitions, consistency, the read path) and go deep.",
        "**Address bottlenecks.** Talk about failure, scaling, and monitoring.",
      ] },
      { t: "callout", variant: "note", text: "Narrate your reasoning out loud. Interviewers score how you think far more than whether you land on one 'correct' diagram." },
    ],
  },
  "system-design-fundamentals/back-of-envelope": {
    blocks: [
      { t: "h2", text: "Estimation you can do in your head" },
      { t: "p", text: "Back-of-the-envelope estimation turns vague requirements into concrete numbers so you can size servers, storage, and caches. You only need a few reference points and rounded arithmetic." },
      { t: "table", head: ["Quantity", "Rough value"], rows: [
        ["Seconds in a day", "~86,400 (≈10^5)"],
        ["1 million writes/day", "~12 writes/second"],
        ["Char / short string", "~1–2 bytes"],
        ["Typical read:write ratio (social)", "100:1 or higher"],
      ] },
      { t: "p", text: "**Worked example.** A service with 100M daily active users, each making 10 reads/day, sees 1B reads/day ≈ 11,600 reads/second on average. Peak is often 2–3x average, so plan for ~30k reads/second." },
      { t: "code", lang: "text", code: "storage = items_per_day * bytes_per_item * retention_days\n= 1,000,000 * 1,000 bytes * 365\n= ~365 GB/year" },
      { t: "callout", variant: "tip", text: "Round aggressively to powers of ten. The goal is the right order of magnitude, not a precise figure." },
    ],
  },
  "system-design-fundamentals/non-functional-requirements": {
    blocks: [
      { t: "h2", text: "Functional vs non-functional requirements" },
      { t: "p", text: "**Functional requirements (FRs)** are the features: a user can upload a photo, follow another user, or search. **Non-functional requirements (NFRs)** are the qualities the system must have while doing those things." },
      { t: "ul", items: [
        "**Scalability** — can it grow with load?",
        "**Availability** — what fraction of the time is it up?",
        "**Latency** — how fast does a single request return?",
        "**Consistency** — do all readers see the same data?",
        "**Durability** — once written, does data survive failures?",
        "**Security & privacy** — who can access what?",
      ] },
      { t: "p", text: "NFRs drive most architectural decisions. 'Must never lose a payment' pushes you toward durable, transactional storage; 'must feel instant globally' pushes you toward CDNs and edge caching." },
      { t: "callout", variant: "warn", text: "You can rarely maximize every NFR at once. Name the two or three that matter most for this system and design for them explicitly." },
    ],
  },
  "system-design-fundamentals/client-server-model": {
    blocks: [
      { t: "h2", text: "The client-server model" },
      { t: "p", text: "Almost every web system is built on the **client-server model**: a client (browser, mobile app, another service) sends a request, and a server processes it and sends back a response. The client initiates; the server responds." },
      { t: "p", text: "Servers are typically **stateless** for scalability — any server can handle any request because per-user state lives in a shared store, not in the server's memory. This lets you add servers behind a load balancer freely." },
      { t: "ul", items: [
        "**Client** — renders UI, collects input, handles some logic locally.",
        "**Server** — enforces business rules, talks to databases, returns data.",
        "**Protocol** — the agreed language between them, usually HTTP.",
      ] },
      { t: "callout", variant: "note", text: "The line between client and server blurs in distributed systems: one service is a server to its callers and a client to the databases and services it depends on." },
    ],
  },
  "system-design-fundamentals/dns": {
    blocks: [
      { t: "h2", text: "How DNS works" },
      { t: "p", text: "The **Domain Name System (DNS)** translates human-friendly names like `example.com` into the IP addresses machines use to route traffic. It is a distributed, hierarchical, heavily cached lookup system." },
      { t: "ol", items: [
        "Your machine checks its local cache, then asks a **resolver** (usually your ISP's).",
        "The resolver queries a **root** server, which points to the **top-level domain** server (.com).",
        "The TLD server points to the domain's **authoritative** name server.",
        "The authoritative server returns the IP, which is cached along the way for the record's TTL.",
      ] },
      { t: "p", text: "DNS also enables load distribution: multiple A records, geo-based routing, and weighted responses let you steer users toward the nearest or healthiest data center." },
      { t: "callout", variant: "tip", text: "TTL is a trade-off: long TTLs reduce lookups but slow down failover; short TTLs react quickly but increase DNS traffic." },
    ],
  },
  "system-design-fundamentals/http-https": {
    blocks: [
      { t: "h2", text: "HTTP and HTTPS" },
      { t: "p", text: "**HTTP** is the request/response protocol of the web. A request has a method (GET, POST, PUT, DELETE), a path, headers, and an optional body; a response has a status code, headers, and a body." },
      { t: "table", head: ["Status class", "Meaning"], rows: [
        ["2xx", "Success (200 OK, 201 Created)"],
        ["3xx", "Redirection (301, 304 Not Modified)"],
        ["4xx", "Client error (400, 401, 404, 429)"],
        ["5xx", "Server error (500, 502, 503)"],
      ] },
      { t: "p", text: "**HTTPS** is HTTP over TLS. It encrypts traffic, verifies the server's identity with a certificate, and protects against tampering. It is the default for all production traffic today." },
      { t: "callout", variant: "note", text: "HTTP methods have semantics: GET should be safe (no side effects) and idempotent; PUT and DELETE should be idempotent; POST generally is not." },
    ],
  },
  "system-design-fundamentals/tcp-vs-udp": {
    blocks: [
      { t: "h2", text: "TCP vs UDP" },
      { t: "p", text: "Both are transport-layer protocols, but they make opposite trade-offs. **TCP** guarantees ordered, reliable delivery; **UDP** is a fire-and-forget datagram protocol with no delivery guarantees." },
      { t: "table", head: ["Property", "TCP", "UDP"], rows: [
        ["Connection", "Yes (handshake)", "No"],
        ["Ordering", "Guaranteed", "None"],
        ["Reliability", "Retransmits lost data", "May drop packets"],
        ["Overhead", "Higher", "Lower"],
        ["Use case", "Web, APIs, databases", "Video, gaming, DNS"],
      ] },
      { t: "p", text: "Choose TCP when correctness matters more than speed (loading a page, a bank transfer). Choose UDP when timeliness beats completeness (a live video frame that arrives late is useless)." },
      { t: "callout", variant: "tip", text: "Modern protocols like QUIC (used by HTTP/3) build reliability on top of UDP to get TCP-like guarantees with lower latency." },
    ],
  },
  "system-design-fundamentals/websockets": {
    blocks: [
      { t: "h2", text: "Real-time communication" },
      { t: "p", text: "Plain HTTP is request/response — the server cannot push data unless the client asks. For real-time features (chat, live scores, notifications) you need a way for the server to send data proactively." },
      { t: "ul", items: [
        "**Short polling** — the client repeatedly asks 'any updates?'. Simple but wasteful.",
        "**Long polling** — the server holds the request open until it has data, then the client immediately re-requests. Better, still request-based.",
        "**WebSockets** — a single long-lived, bidirectional connection. The server can push anytime.",
        "**Server-Sent Events (SSE)** — one-way server-to-client streaming over HTTP; simpler than WebSockets when you only push.",
      ] },
      { t: "callout", variant: "note", text: "WebSockets are powerful but stateful: each open connection ties a client to a server, which complicates load balancing and scaling. Sticky sessions or a pub/sub backplane help." },
    ],
  },
  "system-design-fundamentals/api-design-rest": {
    blocks: [
      { t: "h2", text: "Designing REST APIs" },
      { t: "p", text: "**REST** models your system as resources addressed by URLs and manipulated with standard HTTP methods. Good REST design is predictable: a developer can guess the endpoints." },
      { t: "code", lang: "text", code: "GET    /users          list users\nPOST   /users          create a user\nGET    /users/42       fetch user 42\nPUT    /users/42       replace user 42\nDELETE /users/42       delete user 42\nGET    /users/42/posts list a user's posts" },
      { t: "ul", items: [
        "Use **nouns**, not verbs, in paths; the method is the verb.",
        "Return correct status codes and consistent error bodies.",
        "**Paginate** list endpoints (cursor-based scales better than offset).",
        "**Version** your API (`/v1/...`) so you can evolve without breaking clients.",
      ] },
      { t: "callout", variant: "tip", text: "For write endpoints, support idempotency keys so a client that retries after a timeout does not create duplicates." },
    ],
  },
  "system-design-fundamentals/vertical-horizontal-scaling": {
    blocks: [
      { t: "h2", text: "Scaling up vs scaling out" },
      { t: "p", text: "**Vertical scaling** means making one machine bigger — more CPU, RAM, or faster disks. **Horizontal scaling** means adding more machines and spreading load across them." },
      { t: "table", head: ["", "Vertical", "Horizontal"], rows: [
        ["How", "Bigger box", "More boxes"],
        ["Ceiling", "Hardware limits", "Effectively unlimited"],
        ["Complexity", "Low", "Higher (coordination)"],
        ["Fault tolerance", "Single point of failure", "Survives node loss"],
      ] },
      { t: "p", text: "Vertical scaling is the quick win and often the right first move. Horizontal scaling is what lets you grow beyond one machine and survive failures, but it forces you to make services stateless and handle distribution." },
      { t: "callout", variant: "note", text: "Real systems do both: scale up the database until it hurts, scale out the stateless app tier freely." },
    ],
  },
  "system-design-fundamentals/load-balancers": {
    blocks: [
      { t: "h2", text: "Load balancers" },
      { t: "p", text: "A **load balancer** sits in front of a pool of servers and distributes incoming requests across them. It is the key enabler of horizontal scaling and a core reliability component." },
      { t: "ul", items: [
        "**Distributes load** so no single server is overwhelmed.",
        "**Health checks** remove unhealthy servers from rotation automatically.",
        "**Terminates TLS** centrally, offloading encryption from app servers.",
        "**Enables zero-downtime deploys** by draining connections from servers being updated.",
      ] },
      { t: "p", text: "Layer 4 load balancers route on IP/port (fast, protocol-agnostic). Layer 7 load balancers understand HTTP, so they can route by path or header and do smarter distribution." },
      { t: "callout", variant: "tip", text: "The load balancer itself must not be a single point of failure — run it redundantly, often with a floating IP or DNS failover." },
    ],
  },
  "system-design-fundamentals/load-balancing-algorithms": {
    blocks: [
      { t: "h2", text: "How a load balancer chooses a server" },
      { t: "ul", items: [
        "**Round robin** — cycle through servers in order. Simple; ignores load.",
        "**Weighted round robin** — give bigger servers more requests.",
        "**Least connections** — send to the server with the fewest active connections. Good for long-lived requests.",
        "**Least response time** — factor in latency, not just connection count.",
        "**IP hash / consistent hashing** — map a client consistently to the same server (useful for sticky sessions and caches).",
      ] },
      { t: "p", text: "Round robin works well when requests are uniform and servers are identical. Least-connections is safer when request duration varies widely, because it reacts to actual load rather than assuming every request is equal." },
      { t: "callout", variant: "note", text: "Sticky sessions (pinning a user to one server) simplify in-memory state but undermine even load distribution and complicate failover. Prefer shared session storage where possible." },
    ],
  },
  "system-design-fundamentals/stateless-services": {
    blocks: [
      { t: "h2", text: "Stateless vs stateful services" },
      { t: "p", text: "A **stateless** service keeps no per-client data between requests — everything it needs comes in the request or from shared storage. A **stateful** service remembers something about the client across requests." },
      { t: "p", text: "Statelessness is the foundation of horizontal scaling: if any server can handle any request, you can add and remove servers freely and survive failures without losing user context." },
      { t: "ul", items: [
        "Move session data to a shared store (Redis, a database) instead of local memory.",
        "Store uploaded files in object storage, not the local disk.",
        "Make sure two requests from the same user can safely hit different servers.",
      ] },
      { t: "callout", variant: "warn", text: "Some things are inherently stateful — databases, caches, WebSocket connections. Isolate that state into dedicated, carefully managed tiers rather than spreading it through the app layer." },
    ],
  },
  "system-design-fundamentals/scaling-databases": {
    blocks: [
      { t: "h2", text: "Scaling the database tier" },
      { t: "p", text: "The database is usually the hardest thing to scale because it holds state and must stay consistent. There is a standard progression as load grows." },
      { t: "ol", items: [
        "**Optimize first** — add indexes, fix slow queries, tune connection pools.",
        "**Add caching** — absorb repeated reads before they hit the database.",
        "**Read replicas** — copy writes to replicas and serve reads from them.",
        "**Vertical scale** — bigger database instance.",
        "**Partition / shard** — split data across multiple databases by key.",
      ] },
      { t: "p", text: "Read replicas are the most common next step because most systems are read-heavy. Sharding is powerful but expensive: cross-shard queries and transactions become hard, so delay it until you truly need it." },
      { t: "callout", variant: "tip", text: "Replication lag means replicas can be slightly stale. Read your own writes from the primary when a user needs to see their just-submitted change." },
    ],
  },
  "system-design-fundamentals/why-caching": {
    blocks: [
      { t: "h2", text: "Why we cache" },
      { t: "p", text: "A **cache** stores the result of expensive work close to where it is needed so future requests are fast. Caching is often the single highest-leverage performance improvement in a system." },
      { t: "ul", items: [
        "**Lower latency** — memory reads are orders of magnitude faster than disk or network calls.",
        "**Reduced load** — fewer requests reach the database or downstream services.",
        "**Lower cost** — you serve more traffic with the same backend.",
      ] },
      { t: "p", text: "Caches appear at every layer: the browser, a CDN, an in-process cache, a shared cache like Redis, and inside the database itself. Each layer catches what the layer above missed." },
      { t: "callout", variant: "warn", text: "Caching adds a hard problem: keeping cached data consistent with the source of truth. Every cache decision is really a decision about how much staleness you can tolerate." },
    ],
  },
  "system-design-fundamentals/cache-strategies": {
    blocks: [
      { t: "h2", text: "Write and eviction strategies" },
      { t: "p", text: "**Read patterns** decide how data enters the cache; **write patterns** decide how updates propagate; **eviction** decides what to drop when the cache is full." },
      { t: "ul", items: [
        "**Cache-aside (lazy loading)** — app checks cache, on a miss reads the DB and populates the cache. Most common.",
        "**Read-through** — the cache itself loads from the DB on a miss.",
        "**Write-through** — write to cache and DB together; consistent but slower writes.",
        "**Write-back** — write to cache, flush to DB later; fast but risks data loss.",
      ] },
      { t: "p", text: "Common **eviction policies** are LRU (drop least recently used), LFU (least frequently used), and TTL (expire after a fixed time). LRU is the default choice for most workloads." },
      { t: "callout", variant: "tip", text: "Set a TTL even on cache-aside entries so stale data eventually self-corrects even if you forget to invalidate it." },
    ],
  },
  "system-design-fundamentals/cache-invalidation": {
    blocks: [
      { t: "h2", text: "Cache invalidation" },
      { t: "p", text: "Invalidation is the act of removing or updating a cached value when the underlying data changes. It is famously hard because the cache and the source of truth can drift out of sync." },
      { t: "ul", items: [
        "**TTL expiry** — simplest; accept staleness up to the TTL.",
        "**Write-time invalidation** — delete or update the cache key when you write to the DB.",
        "**Event-driven** — publish change events that cache consumers react to.",
      ] },
      { t: "p", text: "A subtle failure is the **thundering herd**: a popular key expires and thousands of requests all miss and hit the database at once. Mitigate with request coalescing, staggered TTLs, or serving stale data while one request refreshes." },
      { t: "callout", variant: "warn", text: "Deleting the key on write is usually safer than updating it — an update can race with a concurrent read and cache a stale value." },
    ],
  },
  "system-design-fundamentals/distributed-cache": {
    blocks: [
      { t: "h2", text: "Distributed caching with Redis" },
      { t: "p", text: "An in-process cache lives in one server's memory and is not shared. A **distributed cache** like Redis or Memcached is a separate tier that all app servers share, giving every server the same cached view." },
      { t: "ul", items: [
        "**Shared** — a cache populated by one server benefits all servers.",
        "**Scalable** — shard keys across nodes to grow capacity.",
        "**Feature-rich (Redis)** — data structures, pub/sub, atomic operations, TTLs.",
      ] },
      { t: "p", text: "Distributed caches are partitioned with **consistent hashing** so adding or removing a node only remaps a small fraction of keys, and replicated so a node failure does not lose the whole cache." },
      { t: "callout", variant: "note", text: "Redis is single-threaded per node for command execution, which makes its operations atomic but means one very expensive command can block others. Avoid `KEYS *` in production." },
    ],
  },
  "system-design-fundamentals/cdn-fundamentals": {
    blocks: [
      { t: "h2", text: "CDNs and edge caching" },
      { t: "p", text: "A **Content Delivery Network** is a globally distributed set of servers that cache content close to users. When a user in Tokyo requests an image, they get it from a nearby edge server rather than crossing an ocean to your origin." },
      { t: "ul", items: [
        "**Lower latency** — content is served from a nearby point of presence.",
        "**Offloads origin** — most requests never reach your servers.",
        "**Absorbs spikes** — the CDN soaks up traffic surges and some attacks.",
      ] },
      { t: "p", text: "CDNs excel at **static assets** (images, CSS, JS, video) but can also cache API responses and even do edge computing. Content is cached by URL with a TTL, and you can purge or version assets to force refreshes." },
      { t: "callout", variant: "tip", text: "Use content-hashed filenames (`app.9f2a.js`) so you can cache assets forever and change the URL to deploy a new version." },
    ],
  },
  "system-design-fundamentals/relational-databases": {
    blocks: [
      { t: "h2", text: "Relational databases" },
      { t: "p", text: "**Relational databases** (PostgreSQL, MySQL) store data in tables of rows and columns with a fixed schema, and relate tables through keys. They are the default choice for most applications for good reason." },
      { t: "ul", items: [
        "**ACID transactions** guarantee correctness across multi-step updates.",
        "**SQL** is a powerful, declarative query language with joins and aggregations.",
        "**Strong consistency** — a read after a write sees the write.",
        "**Mature tooling** — decades of operational knowledge and ecosystem.",
      ] },
      { t: "p", text: "They shine when data is structured and relationships matter — orders and line items, users and accounts, anything where integrity constraints prevent bad data." },
      { t: "callout", variant: "note", text: "The classic limitation is scaling writes horizontally. A single primary handles all writes until you shard, which is why write-heavy systems sometimes reach for NoSQL." },
    ],
  },
  "system-design-fundamentals/nosql-databases": {
    blocks: [
      { t: "h2", text: "NoSQL databases" },
      { t: "p", text: "**NoSQL** is an umbrella for non-relational stores that trade some of the relational model's guarantees for flexibility and horizontal scale. There are four broad families." },
      { t: "table", head: ["Type", "Example", "Good for"], rows: [
        ["Key-value", "Redis, DynamoDB", "Caches, sessions, simple lookups"],
        ["Document", "MongoDB", "Flexible, nested JSON-like records"],
        ["Wide-column", "Cassandra", "Huge write volume, time series"],
        ["Graph", "Neo4j", "Highly connected data, relationships"],
      ] },
      { t: "p", text: "NoSQL databases often scale out easily and tolerate flexible or evolving schemas, but many offer only eventual consistency and lack rich joins, pushing that work into the application." },
      { t: "callout", variant: "warn", text: "'NoSQL scales, SQL doesn't' is a myth. Choose based on your data shape and access patterns, not hype. Many large systems run on sharded relational databases." },
    ],
  },
  "system-design-fundamentals/db-indexing": {
    blocks: [
      { t: "h2", text: "Indexing deep dive" },
      { t: "p", text: "An **index** is an auxiliary data structure that lets the database find rows without scanning the whole table. It is the difference between a query taking milliseconds and taking seconds." },
      { t: "p", text: "Most databases use a **B-tree** index: a balanced tree that keeps keys sorted, giving logarithmic lookups, range scans, and ordered results. Hash indexes give O(1) equality lookups but no range queries." },
      { t: "ul", items: [
        "Index columns you filter, join, or sort on frequently.",
        "**Composite indexes** cover multi-column queries; column order matters.",
        "Indexes speed reads but slow writes and use storage — every write must update every index.",
      ] },
      { t: "callout", variant: "tip", text: "Use `EXPLAIN` to see whether a query uses an index or does a full table scan. A missing index is the most common cause of a slow query." },
    ],
  },
  "system-design-fundamentals/db-replication": {
    blocks: [
      { t: "h2", text: "Replication" },
      { t: "p", text: "**Replication** keeps copies of your data on multiple machines. It improves read throughput, provides redundancy, and enables failover if the primary dies." },
      { t: "ul", items: [
        "**Single-leader** — one primary takes writes, replicas copy them and serve reads. Simple and common.",
        "**Multi-leader** — several nodes accept writes; good across regions but risks write conflicts.",
        "**Leaderless** — any node accepts writes, quorums resolve reads (Dynamo-style).",
      ] },
      { t: "p", text: "Replication can be **synchronous** (the write waits for replicas — safe but slower) or **asynchronous** (the write returns immediately — fast but replicas lag and can lose recent writes on failover)." },
      { t: "callout", variant: "note", text: "Replication lag is the source of many 'I saved it but it's gone' bugs. Route reads that must be fresh to the primary." },
    ],
  },
  "system-design-fundamentals/db-partitioning": {
    blocks: [
      { t: "h2", text: "Partitioning and sharding" },
      { t: "p", text: "**Partitioning** splits a large dataset into smaller pieces. **Sharding** is horizontal partitioning across separate database servers so each holds a subset of the data, letting you scale writes and storage beyond one machine." },
      { t: "ul", items: [
        "**Hash sharding** — hash the key to pick a shard. Even distribution, but range queries hit every shard.",
        "**Range sharding** — contiguous key ranges per shard. Great for range scans, risks hot shards.",
        "**Directory / lookup** — a service maps keys to shards, allowing flexible rebalancing.",
      ] },
      { t: "p", text: "The hard part is choosing a **shard key** that spreads load evenly and keeps related data together. A bad key creates hot shards that bottleneck the whole system." },
      { t: "callout", variant: "warn", text: "Cross-shard joins and transactions are expensive or impossible. Design your schema so the common queries stay within a single shard." },
    ],
  },
  "system-design-fundamentals/acid-base": {
    blocks: [
      { t: "h2", text: "ACID vs BASE" },
      { t: "p", text: "**ACID** and **BASE** describe two philosophies of data guarantees. ACID favors correctness; BASE favors availability and scale." },
      { t: "ul", items: [
        "**A**tomicity — a transaction all-or-nothing.",
        "**C**onsistency — transactions move the DB between valid states.",
        "**I**solation — concurrent transactions don't interfere.",
        "**D**urability — committed data survives crashes.",
      ] },
      { t: "p", text: "**BASE** stands for **B**asically **A**vailable, **S**oft state, **E**ventually consistent. Instead of strict transactions, the system stays available and lets replicas converge over time." },
      { t: "callout", variant: "note", text: "This is not all-or-nothing. Many modern databases offer tunable consistency, letting you pick ACID for money and BASE for likes within the same system." },
    ],
  },
  "system-design-fundamentals/blob-object-storage": {
    blocks: [
      { t: "h2", text: "Blob and object storage" },
      { t: "p", text: "**Object storage** (Amazon S3, Google Cloud Storage) is built for large, unstructured files — images, video, backups, logs. You store objects with a key and metadata, and retrieve them by key over HTTP." },
      { t: "ul", items: [
        "**Virtually unlimited** capacity and high durability (many 9s).",
        "**Cheap** compared to database or block storage.",
        "**Flat namespace** — a key maps to an object; no real folders.",
        "Not for transactional data or partial updates — you replace whole objects.",
      ] },
      { t: "p", text: "The standard pattern is to store the file in object storage and keep only a URL or key in your database. Serve the files through a CDN for speed." },
      { t: "callout", variant: "tip", text: "Use pre-signed URLs so clients upload and download directly to object storage without routing large files through your servers." },
    ],
  },
  "system-design-fundamentals/message-queues-fundamentals": {
    blocks: [
      { t: "h2", text: "Message queues" },
      { t: "p", text: "A **message queue** decouples producers from consumers. Instead of calling a service directly and waiting, a producer puts a message on a queue and moves on; a consumer processes it when ready." },
      { t: "ul", items: [
        "**Decoupling** — producer and consumer scale and fail independently.",
        "**Buffering** — the queue absorbs spikes so consumers aren't overwhelmed.",
        "**Reliability** — messages persist until acknowledged, surviving consumer crashes.",
        "**Async work** — offload slow tasks (email, image processing) from the request path.",
      ] },
      { t: "p", text: "Delivery guarantees matter: **at-most-once** may lose messages, **at-least-once** may deliver duplicates (so consumers must be idempotent), **exactly-once** is hardest and often approximated." },
      { t: "callout", variant: "note", text: "A dead-letter queue catches messages that repeatedly fail to process so they don't block the queue or vanish silently." },
    ],
  },
  "system-design-fundamentals/pub-sub": {
    blocks: [
      { t: "h2", text: "Publish-subscribe" },
      { t: "p", text: "In **pub/sub**, publishers send messages to a topic without knowing who receives them, and any number of subscribers to that topic get a copy. It is one-to-many, versus a queue's typical one-to-one." },
      { t: "p", text: "This is the backbone of event-driven architectures: an `OrderPlaced` event can independently trigger inventory, billing, and notification services, each subscribing without the publisher needing to know." },
      { t: "ul", items: [
        "**Fan-out** — one event reaches many consumers.",
        "**Loose coupling** — add new subscribers without touching the publisher.",
        "**Independent scaling** — each subscriber processes at its own pace.",
      ] },
      { t: "callout", variant: "tip", text: "Queue vs pub/sub: use a queue when exactly one worker should handle each message; use pub/sub when several independent systems each need to react to the same event." },
    ],
  },
  "system-design-fundamentals/kafka-basics": {
    blocks: [
      { t: "h2", text: "Event streaming with Kafka" },
      { t: "p", text: "**Kafka** is a distributed, durable log. Producers append events to **topics**, which are split into **partitions** for parallelism, and consumers read at their own offset. Unlike a traditional queue, Kafka retains events even after they're read." },
      { t: "ul", items: [
        "**Partitions** provide ordering within a partition and horizontal scale across partitions.",
        "**Consumer groups** let a set of consumers share the partitions of a topic.",
        "**Retention** lets you replay history — reprocess events or bootstrap a new consumer.",
        "**High throughput** — sequential disk writes make it extremely fast.",
      ] },
      { t: "callout", variant: "note", text: "Ordering is only guaranteed within a partition. Choose a partition key (e.g. user ID) so all events that must stay ordered land on the same partition." },
    ],
  },
  "system-design-fundamentals/async-workers": {
    blocks: [
      { t: "h2", text: "Background jobs and workers" },
      { t: "p", text: "Not everything should happen inside a request. **Background workers** pull tasks off a queue and process them asynchronously, keeping user-facing requests fast and resilient." },
      { t: "ul", items: [
        "**Send email / push notifications** after an action, not during it.",
        "**Process uploads** — resize images, transcode video.",
        "**Scheduled jobs** — nightly reports, cleanup, billing runs.",
        "**Retries** — a failed job can be retried without the user waiting.",
      ] },
      { t: "p", text: "The pattern: the web request validates input, enqueues a job, and returns immediately; a pool of workers scales independently to drain the queue." },
      { t: "callout", variant: "warn", text: "Make jobs idempotent. At-least-once delivery means a worker may run the same job twice, so 'charge the card' must not double-charge on a retry." },
    ],
  },
  "system-design-fundamentals/availability-slas": {
    blocks: [
      { t: "h2", text: "Availability, SLAs and SLOs" },
      { t: "p", text: "**Availability** is the fraction of time a system is operational, usually expressed in 'nines'. Each extra nine is dramatically harder and more expensive." },
      { t: "table", head: ["Availability", "Downtime per year"], rows: [
        ["99% (two nines)", "~3.65 days"],
        ["99.9% (three nines)", "~8.8 hours"],
        ["99.99% (four nines)", "~52 minutes"],
        ["99.999% (five nines)", "~5 minutes"],
      ] },
      { t: "ul", items: [
        "**SLA** — a contractual promise to customers, with penalties if missed.",
        "**SLO** — an internal target you design and operate against.",
        "**SLI** — the actual measured metric (e.g. successful request rate).",
      ] },
      { t: "callout", variant: "tip", text: "An error budget turns reliability into a number: if your SLO is 99.9%, you can be down ~43 minutes a month. Spend that budget on shipping features, not perfection." },
    ],
  },
  "system-design-fundamentals/redundancy-failover": {
    blocks: [
      { t: "h2", text: "Redundancy and failover" },
      { t: "p", text: "**Redundancy** means having spare capacity so the loss of a component doesn't take down the system. **Failover** is the process of switching to that spare when a failure occurs." },
      { t: "ul", items: [
        "**Active-passive** — a standby takes over when the primary fails. Simple; the standby is idle.",
        "**Active-active** — all nodes serve traffic; losing one just reduces capacity.",
        "Spread redundancy across **failure domains** — separate machines, racks, availability zones, regions.",
      ] },
      { t: "p", text: "Failover must be automatic and fast, and detecting failure reliably is the tricky part — you must avoid false positives that failover unnecessarily and split-brain where two nodes both think they're primary." },
      { t: "callout", variant: "warn", text: "Untested failover is not failover. Regularly exercise it (game days, chaos testing) or you'll discover it's broken during a real outage." },
    ],
  },
  "system-design-fundamentals/rate-limiting-fundamentals": {
    blocks: [
      { t: "h2", text: "Rate limiting" },
      { t: "p", text: "**Rate limiting** caps how many requests a client can make in a time window. It protects your system from abuse, runaway clients, and traffic spikes, and enforces fair usage." },
      { t: "ul", items: [
        "**Token bucket** — tokens refill at a fixed rate; each request spends one. Allows bursts.",
        "**Leaky bucket** — requests drain at a constant rate; smooths bursts.",
        "**Fixed window** — count per clock window; simple but bursty at edges.",
        "**Sliding window** — smooths the fixed-window edge problem.",
      ] },
      { t: "p", text: "In a distributed system the counters must be shared, so limits are usually tracked in a central store like Redis, keyed by user or IP." },
      { t: "callout", variant: "tip", text: "Return HTTP 429 with a `Retry-After` header so well-behaved clients know exactly when to try again." },
    ],
  },
  "system-design-fundamentals/idempotency": {
    blocks: [
      { t: "h2", text: "Idempotency" },
      { t: "p", text: "An operation is **idempotent** if doing it multiple times has the same effect as doing it once. This property is essential in distributed systems where retries are unavoidable." },
      { t: "p", text: "When a client's request times out, it doesn't know whether the server processed it. If it retries, a non-idempotent operation (like 'add $100') would run twice. Idempotency makes retries safe." },
      { t: "ul", items: [
        "GET, PUT, and DELETE are naturally idempotent; POST usually is not.",
        "Use an **idempotency key** — the client sends a unique ID; the server records it and ignores duplicates.",
        "Design writes as 'set state to X' rather than 'change state by X' where possible.",
      ] },
      { t: "callout", variant: "note", text: "Payment APIs like Stripe require an idempotency key on charges precisely because a duplicate charge is unacceptable." },
    ],
  },
  "system-design-fundamentals/consistent-hashing-fundamentals": {
    blocks: [
      { t: "h2", text: "Consistent hashing" },
      { t: "p", text: "When you distribute keys across N servers with `hash(key) % N`, changing N remaps almost every key — catastrophic for a cache or shard cluster. **Consistent hashing** solves this." },
      { t: "p", text: "Servers and keys are placed on a conceptual ring by their hash. A key belongs to the next server clockwise. Adding or removing a server only reassigns the keys between it and its neighbor — about 1/N of the keys." },
      { t: "ul", items: [
        "Minimal remapping when nodes join or leave.",
        "**Virtual nodes** — each server appears many times on the ring for even distribution.",
        "Used by distributed caches, Cassandra, DynamoDB, and CDN routing.",
      ] },
      { t: "callout", variant: "tip", text: "Without virtual nodes, a few servers can end up owning large arcs of the ring and become hot. Virtual nodes smooth this out." },
    ],
  },
  "system-design-fundamentals/logging": {
    blocks: [
      { t: "h2", text: "Logging" },
      { t: "p", text: "**Logs** are timestamped records of discrete events. They are your primary tool for understanding what happened after the fact — debugging errors, auditing actions, and reconstructing incidents." },
      { t: "ul", items: [
        "Use **structured logging** (JSON) so logs are machine-queryable, not just human-readable.",
        "Include a **correlation ID** so you can trace one request across many services.",
        "Log at appropriate levels (DEBUG, INFO, WARN, ERROR) and control verbosity per environment.",
        "**Centralize** logs (ELK, Loki, cloud logging) — grepping individual servers doesn't scale.",
      ] },
      { t: "callout", variant: "warn", text: "Never log secrets or PII — passwords, tokens, full card numbers. Logs are widely accessible and long-lived, making them a common source of data leaks." },
    ],
  },
  "system-design-fundamentals/metrics-monitoring": {
    blocks: [
      { t: "h2", text: "Metrics and monitoring" },
      { t: "p", text: "**Metrics** are numeric measurements sampled over time — request rate, error rate, latency, CPU, queue depth. Where logs tell you about individual events, metrics tell you about trends and aggregates." },
      { t: "p", text: "A widely used starting point is the **four golden signals**: latency, traffic, errors, and saturation. Track these for every service and you'll catch most problems." },
      { t: "ul", items: [
        "Watch **percentiles** (p95, p99), not just averages — averages hide the slow tail users feel.",
        "**Alert** on symptoms users care about (error rate, latency), not every internal metric.",
        "Build **dashboards** that answer 'is the system healthy right now?' at a glance.",
      ] },
      { t: "callout", variant: "tip", text: "Alert fatigue is real. An alert should be actionable and urgent; if nobody needs to wake up for it, make it a dashboard, not a page." },
    ],
  },
  "system-design-fundamentals/distributed-tracing": {
    blocks: [
      { t: "h2", text: "Distributed tracing" },
      { t: "p", text: "In a microservices system, a single user request may touch a dozen services. **Distributed tracing** follows that request end to end, recording how long each hop took and where it failed." },
      { t: "ul", items: [
        "A **trace** represents one request's full journey; it's made of **spans**, one per operation.",
        "A **trace ID** is propagated in headers across every service call.",
        "Traces reveal the critical path and pinpoint which service caused a slowdown.",
      ] },
      { t: "p", text: "Tracing complements logs and metrics: metrics tell you *something is slow*, traces tell you *which hop*, and logs tell you *why*. Together they form the three pillars of observability." },
      { t: "callout", variant: "note", text: "Tracing every request is expensive, so systems sample — capturing a percentage of traces, often biased toward errors and slow requests." },
    ],
  },
  "system-design-fundamentals/capacity-planning": {
    blocks: [
      { t: "h2", text: "Capacity planning" },
      { t: "p", text: "**Capacity planning** is estimating the resources your system needs to meet demand — now and as it grows — without over-provisioning and wasting money." },
      { t: "ol", items: [
        "Measure current usage and per-request cost (CPU, memory, I/O).",
        "Forecast growth from trends and known events (launches, seasonal peaks).",
        "Add **headroom** for spikes and failures — never run at 100%.",
        "Decide between provisioning ahead vs autoscaling on demand.",
      ] },
      { t: "p", text: "Autoscaling handles variable load automatically, but it isn't instant — cold starts and warm-up time mean you still need baseline capacity and buffer for sudden surges." },
      { t: "callout", variant: "tip", text: "Load test to find where the system breaks *before* production does. Knowing your ceiling is the whole point of capacity planning." },
    ],
  },
};
