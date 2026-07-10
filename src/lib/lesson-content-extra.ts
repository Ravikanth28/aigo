// Authored System Design + Coding Patterns lesson content. All prose is original
// and written for this project. Keyed by `${course}/${lessonSlug}`.

import type { LessonContent } from "@/lib/lesson-content";

// ---------------------------------------------------------------------------
// System Design — Fundamentals
// ---------------------------------------------------------------------------

const systemDesignFundamentals: Record<string, LessonContent> = {
  "system-design/what-is-system-design": {
    blocks: [
      { t: "h2", text: "What system design really asks" },
      {
        t: "p",
        text: "System design is the practice of turning a fuzzy product requirement — 'build a link shortener', 'build a chat app' — into a concrete architecture of components, data stores, and network calls that can serve real traffic. Unlike a coding problem, there is rarely a single correct answer. The goal is to reason about **trade-offs** out loud.",
      },
      {
        t: "p",
        text: "In an interview you are graded less on the final diagram and more on how you get there: how you gather requirements, estimate scale, pick data models, and defend your choices when the interviewer pushes on a weak point.",
      },
      { t: "h2", text: "A repeatable framework" },
      {
        t: "ol",
        items: [
          "**Clarify requirements** — functional (what it does) and non-functional (how fast, how available, how consistent).",
          "**Estimate scale** — users, requests per second, storage per year, read/write ratio.",
          "**Define the API** — the handful of endpoints the system exposes.",
          "**Sketch the high-level design** — clients, load balancer, services, databases, caches.",
          "**Drill into components** — pick the one the interviewer cares about and go deep.",
          "**Address bottlenecks** — what breaks first at 10x traffic, and how you'd fix it.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Spend the first few minutes clarifying scope. Narrowing 'design Twitter' down to 'design the read path for the home timeline' is what separates a focused answer from a rambling one.",
      },
      { t: "h2", text: "Functional vs non-functional requirements" },
      {
        t: "table",
        head: ["Type", "Examples"],
        rows: [
          ["Functional", "Post a tweet, follow a user, fetch a timeline"],
          ["Non-functional", "99.9% availability, <200ms p99 latency, eventual consistency"],
        ],
      },
      {
        t: "p",
        text: "Non-functional requirements drive most architectural decisions. 'Must be highly available' pushes you toward replication; 'must be strongly consistent' pushes you toward a single leader or consensus.",
      },
    ],
  },

  "system-design/scalability": {
    blocks: [
      { t: "h2", text: "Scaling up vs scaling out" },
      {
        t: "p",
        text: "**Vertical scaling** (scaling up) means adding more CPU, RAM, or disk to a single machine. It is simple but has a hard ceiling and a single point of failure. **Horizontal scaling** (scaling out) means adding more machines behind a load balancer. It scales further and improves fault tolerance, but forces you to handle distributed state.",
      },
      {
        t: "table",
        head: ["Dimension", "Vertical", "Horizontal"],
        rows: [
          ["Simplicity", "High — no code changes", "Lower — needs stateless services"],
          ["Ceiling", "Limited by hardware", "Effectively unlimited"],
          ["Fault tolerance", "Single point of failure", "Survives node loss"],
          ["Cost curve", "Expensive at the top end", "Linear commodity hardware"],
        ],
      },
      { t: "h2", text: "The stateless principle" },
      {
        t: "p",
        text: "Horizontal scaling only works cleanly when your application servers are **stateless** — any request can go to any server. Push session state into a shared store (Redis) or a signed token (JWT) so no request is pinned to one machine.",
      },
      { t: "h2", text: "Where state lives" },
      {
        t: "ul",
        items: [
          "**Stateless app tier** — scale by adding identical replicas.",
          "**Shared cache** — Redis/Memcached for sessions and hot data.",
          "**Database tier** — the hardest to scale; use replication and sharding.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "The database is almost always the first bottleneck. Most of system design is really about keeping load off the primary database.",
      },
    ],
  },

  "system-design/latency-throughput": {
    blocks: [
      { t: "h2", text: "Two different questions" },
      {
        t: "p",
        text: "**Latency** is how long one request takes end to end. **Throughput** is how many requests the system finishes per unit of time. They are related but not the same: a system can have high throughput and still feel slow to an individual user if requests are batched or queued.",
      },
      { t: "h2", text: "Latency numbers worth memorizing" },
      {
        t: "table",
        head: ["Operation", "Approx. latency"],
        rows: [
          ["L1 cache reference", "~1 ns"],
          ["Main memory reference", "~100 ns"],
          ["SSD random read", "~100 µs"],
          ["Round trip within a datacenter", "~500 µs"],
          ["Disk seek (HDD)", "~10 ms"],
          ["Round trip across continents", "~150 ms"],
        ],
      },
      {
        t: "p",
        text: "The point is orders of magnitude: memory is roughly a thousand times faster than SSD, and a cross-continent network hop dwarfs almost everything. This is why caching and colocating data matter so much.",
      },
      { t: "h2", text: "Tail latency" },
      {
        t: "p",
        text: "Averages lie. Report **percentiles** — p50, p95, p99. If your p99 is 2 seconds, one in a hundred requests is painfully slow, and a page that fans out to 100 backend calls will hit that slow path almost every time.",
      },
      {
        t: "callout",
        variant: "note",
        text: "As fan-out grows, tail latency becomes the median experience. Cutting p99 is often more valuable than cutting the average.",
      },
    ],
  },

  "system-design/cap-theorem": {
    blocks: [
      { t: "h2", text: "The theorem" },
      {
        t: "p",
        text: "The CAP theorem states that a distributed data store can guarantee at most two of three properties at once: **Consistency** (every read sees the latest write), **Availability** (every request gets a non-error response), and **Partition tolerance** (the system keeps working despite dropped messages between nodes).",
      },
      {
        t: "p",
        text: "Because network partitions are a fact of life, P is not optional. The real choice under a partition is between **C** and **A**.",
      },
      { t: "h2", text: "CP vs AP in practice" },
      {
        t: "table",
        head: ["Choice", "Behavior under partition", "Example stores"],
        rows: [
          ["CP", "Reject requests to stay consistent", "HBase, etcd, ZooKeeper"],
          ["AP", "Keep serving, reconcile later", "Cassandra, DynamoDB, Riak"],
        ],
      },
      { t: "h2", text: "Consistency is a spectrum" },
      {
        t: "ul",
        items: [
          "**Strong consistency** — reads always reflect the latest write.",
          "**Eventual consistency** — replicas converge over time; reads may be stale briefly.",
          "**Read-your-writes** — a user always sees their own updates, even if others lag.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "State which side you'd pick and why. A banking ledger leans CP; a social feed's like-count happily leans AP.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// System Design — Building Blocks
// ---------------------------------------------------------------------------

const systemDesignBlocks: Record<string, LessonContent> = {
  "system-design/load-balancing": {
    blocks: [
      { t: "h2", text: "Why load balancers exist" },
      {
        t: "p",
        text: "A load balancer sits in front of a pool of servers and spreads incoming requests across them. It gives you one stable entry point, hides individual server failures, and lets you add or remove capacity without clients noticing.",
      },
      { t: "h2", text: "Common algorithms" },
      {
        t: "ul",
        items: [
          "**Round robin** — rotate through servers in order; simplest, ignores load.",
          "**Least connections** — send to the server with the fewest active requests.",
          "**Weighted** — bias toward beefier machines.",
          "**Consistent hashing** — map a key (user id) to a server so the same key sticks even as the pool changes.",
        ],
      },
      { t: "h2", text: "L4 vs L7" },
      {
        t: "table",
        head: ["Layer", "Operates on", "Can it read the request?"],
        rows: [
          ["L4 (transport)", "IP + port", "No — just forwards TCP/UDP"],
          ["L7 (application)", "HTTP headers, paths", "Yes — can route by URL, do TLS termination"],
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Health checks are what make a load balancer useful: it stops routing to a node the moment that node fails its probe.",
      },
    ],
  },

  "system-design/caching": {
    blocks: [
      { t: "h2", text: "Why cache" },
      {
        t: "p",
        text: "A cache stores the result of an expensive operation close to where it is needed so repeat requests are cheap. Caches trade a little staleness and memory for large drops in latency and database load.",
      },
      { t: "h2", text: "Where caches live" },
      {
        t: "ul",
        items: [
          "**Client / browser** — avoids the network entirely.",
          "**CDN** — caches static assets at the edge.",
          "**Application cache** — Redis/Memcached for query results and sessions.",
          "**Database cache** — buffer pool holding hot pages in memory.",
        ],
      },
      { t: "h2", text: "Write strategies" },
      {
        t: "table",
        head: ["Strategy", "How it works", "Trade-off"],
        rows: [
          ["Cache-aside", "App reads cache, falls back to DB, then fills cache", "Simple; first read is a miss"],
          ["Write-through", "Write to cache and DB together", "Consistent; slower writes"],
          ["Write-back", "Write to cache, flush to DB later", "Fast writes; risk of data loss"],
        ],
      },
      { t: "h2", text: "Eviction and staleness" },
      {
        t: "p",
        text: "When a cache fills up it must evict entries — **LRU** (least recently used) is the common default. Set a **TTL** so data expires even if it is popular, bounding how stale a read can be.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Beware cache stampede: when a hot key expires, thousands of requests hit the DB at once. Mitigate with request coalescing or staggered TTLs.",
      },
    ],
  },

  "system-design/cdn": {
    blocks: [
      { t: "h2", text: "The edge network" },
      {
        t: "p",
        text: "A Content Delivery Network is a globally distributed set of caching servers. It stores copies of your static content — images, video, CSS, JS — in **edge locations** near users, so a request from Tokyo is served from Tokyo rather than crossing an ocean to your origin.",
      },
      { t: "h2", text: "Push vs pull" },
      {
        t: "table",
        head: ["Model", "How content arrives", "Best for"],
        rows: [
          ["Pull", "CDN fetches from origin on first miss, then caches", "Large catalogs, infrequently changing"],
          ["Push", "You upload content to the CDN ahead of time", "Predictable, high-traffic assets"],
        ],
      },
      { t: "h2", text: "What a CDN buys you" },
      {
        t: "ul",
        items: [
          "**Lower latency** — content served from a nearby edge.",
          "**Origin offload** — most requests never reach your servers.",
          "**Resilience** — absorbs traffic spikes and some DDoS load.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Cache invalidation is the hard part. Version your asset URLs (style.a1b2c3.css) so a new deploy is a new URL and old caches simply age out.",
      },
    ],
  },

  "system-design/message-queues": {
    blocks: [
      { t: "h2", text: "Decoupling with queues" },
      {
        t: "p",
        text: "A message queue lets a producer hand off work without waiting for a consumer to finish it. The producer enqueues a message and moves on; consumers pull messages at their own pace. This decouples services in time and smooths out traffic spikes.",
      },
      { t: "h2", text: "What queues give you" },
      {
        t: "ul",
        items: [
          "**Asynchrony** — the user gets a fast response; heavy work happens later.",
          "**Buffering** — a burst of 10k events drains at whatever rate consumers can handle.",
          "**Fault isolation** — if the consumer is down, messages wait instead of being lost.",
        ],
      },
      { t: "h2", text: "Delivery guarantees" },
      {
        t: "table",
        head: ["Guarantee", "Meaning"],
        rows: [
          ["At-most-once", "May drop messages, never duplicates"],
          ["At-least-once", "Never drops, may duplicate — consumers must be idempotent"],
          ["Exactly-once", "Ideal but expensive; usually approximated"],
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Queues (RabbitMQ, SQS) hand each message to one consumer. Log-based streams (Kafka) keep an ordered, replayable log many consumers can read independently.",
      },
    ],
  },

  "system-design/rate-limiting": {
    blocks: [
      { t: "h2", text: "Protecting the system" },
      {
        t: "p",
        text: "Rate limiting caps how many requests a client can make in a window. It defends against abuse, prevents one noisy client from starving others, and keeps costs predictable.",
      },
      { t: "h2", text: "Common algorithms" },
      {
        t: "ul",
        items: [
          "**Fixed window** — count requests per calendar minute. Simple, but bursts at the window edge.",
          "**Sliding window** — smooth the count over a rolling interval.",
          "**Token bucket** — refill tokens at a steady rate; each request spends one. Allows short bursts.",
          "**Leaky bucket** — process at a fixed drain rate; excess overflows.",
        ],
      },
      { t: "h2", text: "Token bucket sketch" },
      {
        t: "code",
        lang: "python",
        code: `class TokenBucket:
    def __init__(self, capacity, refill_per_sec):
        self.capacity = capacity
        self.tokens = capacity
        self.rate = refill_per_sec
        self.last = time.time()

    def allow(self):
        now = time.time()
        self.tokens = min(self.capacity,
                          self.tokens + (now - self.last) * self.rate)
        self.last = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "In a distributed system, keep counters in a shared store like Redis so limits hold across all app servers, not per-instance.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// System Design — Databases
// ---------------------------------------------------------------------------

const systemDesignDatabases: Record<string, LessonContent> = {
  "system-design/sql-vs-nosql": {
    blocks: [
      { t: "h2", text: "Two families" },
      {
        t: "p",
        text: "**SQL** (relational) databases store data in tables with a fixed schema and support joins and ACID transactions. **NoSQL** is an umbrella for document, key-value, wide-column, and graph stores that relax schema or consistency to scale horizontally.",
      },
      {
        t: "table",
        head: ["Aspect", "SQL", "NoSQL"],
        rows: [
          ["Schema", "Fixed, enforced", "Flexible / schemaless"],
          ["Transactions", "Strong ACID", "Often limited or eventual"],
          ["Scaling", "Vertical, harder to shard", "Built for horizontal scale"],
          ["Joins", "First-class", "Usually denormalize instead"],
          ["Best fit", "Relationships, integrity", "High write volume, flexible data"],
        ],
      },
      { t: "h2", text: "How to choose" },
      {
        t: "ul",
        items: [
          "Pick **SQL** when relationships and correctness matter — orders, payments, inventory.",
          "Pick **NoSQL** when you need massive scale, flexible documents, or simple key lookups — event logs, catalogs, session stores.",
          "Real systems often use **both**: Postgres for the source of truth, Redis for caching, Elasticsearch for search.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Modern SQL engines scale far further than people assume, and many NoSQL stores now offer transactions. Choose on access patterns, not hype.",
      },
    ],
  },

  "system-design/indexing": {
    blocks: [
      { t: "h2", text: "Why indexes matter" },
      {
        t: "p",
        text: "An index is a secondary data structure that lets the database find rows without scanning the whole table. Without one, a lookup is **O(n)**; with a B-tree index it is roughly **O(log n)**. The cost is extra storage and slower writes, since every insert must also update the index.",
      },
      { t: "h2", text: "Common index types" },
      {
        t: "table",
        head: ["Type", "Good for"],
        rows: [
          ["B-tree", "Range queries, ordering, equality — the default"],
          ["Hash", "Exact-match lookups only"],
          ["Composite", "Queries filtering on multiple columns together"],
          ["Full-text / inverted", "Searching words inside text"],
        ],
      },
      { t: "h2", text: "Practical rules" },
      {
        t: "ul",
        items: [
          "Index the columns you filter, join, or sort on — not every column.",
          "Column **order** in a composite index matters: put the most selective, most-often-filtered column first.",
          "Too many indexes slow writes and waste space; measure with the query planner.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "An index on a low-cardinality column (like a boolean) rarely helps — the planner may just scan the table anyway.",
      },
    ],
  },

  "system-design/sharding": {
    blocks: [
      { t: "h2", text: "Splitting the data" },
      {
        t: "p",
        text: "Sharding (horizontal partitioning) splits one logical dataset across many database instances, each holding a subset of the rows. It is how you scale writes past what a single machine can handle.",
      },
      { t: "h2", text: "Choosing a shard key" },
      {
        t: "ul",
        items: [
          "**Hash-based** — hash the key to pick a shard. Even distribution, but range scans hit every shard.",
          "**Range-based** — shard by key ranges (A–M, N–Z). Great for ranges, prone to hotspots.",
          "**Directory-based** — a lookup service maps keys to shards. Flexible, adds a dependency.",
        ],
      },
      { t: "h2", text: "The costs" },
      {
        t: "table",
        head: ["Problem", "Why it hurts"],
        rows: [
          ["Cross-shard joins", "Data on different nodes can't join cheaply"],
          ["Hotspots", "A popular key overloads one shard"],
          ["Rebalancing", "Adding a shard may reshuffle huge amounts of data"],
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Consistent hashing minimizes the data that must move when you add or remove a shard — only the neighbors' keys shift.",
      },
    ],
  },

  "system-design/replication": {
    blocks: [
      { t: "h2", text: "Copies for safety and speed" },
      {
        t: "p",
        text: "Replication keeps multiple copies of the data on different nodes. It improves durability (a copy survives a crash), read scalability (reads spread across replicas), and availability (a replica can take over).",
      },
      { t: "h2", text: "Topologies" },
      {
        t: "table",
        head: ["Model", "Writes", "Trade-off"],
        rows: [
          ["Single-leader", "One primary accepts writes", "Simple, consistent; leader is a bottleneck"],
          ["Multi-leader", "Several nodes accept writes", "Write-available; conflict resolution needed"],
          ["Leaderless", "Any node, quorum reads/writes", "Highly available; tunable consistency"],
        ],
      },
      { t: "h2", text: "Sync vs async" },
      {
        t: "ul",
        items: [
          "**Synchronous** — the write waits for replicas to confirm. Safe, slower, and stalls if a replica is down.",
          "**Asynchronous** — the leader acks immediately and streams to replicas after. Fast, but a leader crash can lose the last writes.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Reading from an async replica can return stale data. If a user must see their own write, route their reads to the leader.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// System Design — Case Studies
// ---------------------------------------------------------------------------

const systemDesignCases: Record<string, LessonContent> = {
  "system-design/design-url-shortener": {
    blocks: [
      { t: "h2", text: "Requirements" },
      {
        t: "ul",
        items: [
          "**Functional** — shorten a long URL to a short code; redirect the code to the original.",
          "**Non-functional** — very high read:write ratio, low-latency redirects, effectively permanent links.",
        ],
      },
      { t: "h2", text: "Generating the short code" },
      {
        t: "p",
        text: "Take a unique 64-bit id from a counter or ID generator and **base-62 encode** it (0-9, a-z, A-Z). Seven base-62 characters cover ~3.5 trillion URLs. Base-62 avoids the collisions you'd get from hashing and truncating.",
      },
      {
        t: "code",
        lang: "python",
        code: `ALPHABET = string.digits + string.ascii_letters  # 62 chars

def encode(n):
    s = []
    while n:
        n, r = divmod(n, 62)
        s.append(ALPHABET[r])
    return "".join(reversed(s)) or "0"`,
      },
      { t: "h2", text: "Read path" },
      {
        t: "p",
        text: "The redirect is the hot path. Store `code -> longUrl` in a key-value store and front it with a cache; on a hit, return an HTTP 301/302. Because codes are immutable, cache hit rates are extremely high.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Use 302 (temporary) if you want to keep counting clicks; 301 (permanent) lets browsers skip your server entirely on repeat visits.",
      },
    ],
  },

  "system-design/design-twitter-feed": {
    blocks: [
      { t: "h2", text: "The core tension" },
      {
        t: "p",
        text: "A news feed must merge posts from everyone a user follows, ordered by time or relevance. The design question is **when** to do that merge: at write time (fan-out on write) or read time (fan-out on read).",
      },
      { t: "h2", text: "Fan-out on write vs read" },
      {
        t: "table",
        head: ["Approach", "On post", "On read", "Weak spot"],
        rows: [
          ["Fan-out on write", "Push post into each follower's feed", "Just read your prebuilt feed", "Celebrities with millions of followers"],
          ["Fan-out on read", "Store post once", "Merge followees' posts at query time", "Expensive reads for active users"],
        ],
      },
      { t: "h2", text: "The hybrid answer" },
      {
        t: "ul",
        items: [
          "Fan-out on write for normal users — cheap and gives instant reads.",
          "Fan-out on read for a handful of celebrity accounts — avoid writing to tens of millions of feeds.",
          "Merge the two at read time so every timeline includes both.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Precompute feeds in a fast store (Redis lists). The feed only needs post ids; hydrate full post content from cache on read.",
      },
    ],
  },

  "system-design/design-chat-system": {
    blocks: [
      { t: "h2", text: "Requirements" },
      {
        t: "ul",
        items: [
          "1:1 and group messaging, delivered in near real time.",
          "Delivery + read receipts and online presence.",
          "Message history that survives across devices.",
        ],
      },
      { t: "h2", text: "Real-time transport" },
      {
        t: "p",
        text: "Polling is too slow and wasteful. Use a persistent **WebSocket** connection so the server can push messages the instant they arrive. A connection layer holds these sockets and maps each user to the server they're connected to.",
      },
      { t: "h2", text: "Delivery flow" },
      {
        t: "ol",
        items: [
          "Sender's socket delivers the message to a chat service.",
          "The service persists it and looks up the recipient's connection.",
          "If the recipient is online, push over their WebSocket; if offline, store and send a push notification.",
          "The recipient's client acks, and the sender sees a delivery receipt.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Store messages in a wide-column store like Cassandra keyed by conversation id + timestamp — writes are heavy and mostly append-only.",
      },
    ],
  },

  "system-design/design-youtube": {
    blocks: [
      { t: "h2", text: "Requirements" },
      {
        t: "ul",
        items: [
          "Upload, store, and stream video at massive scale.",
          "Smooth playback across devices and network speeds.",
          "Read-heavy: far more views than uploads.",
        ],
      },
      { t: "h2", text: "The upload and transcode pipeline" },
      {
        t: "ol",
        items: [
          "Client uploads the raw file to blob storage (S3-style).",
          "A message queue kicks off a **transcoding** job.",
          "Workers produce multiple resolutions (240p–4K) and segment them for adaptive streaming.",
          "Segments are pushed to a CDN; metadata is written to the database.",
        ],
      },
      { t: "h2", text: "Playback" },
      {
        t: "p",
        text: "Use **adaptive bitrate streaming** (HLS/DASH): the player picks the highest resolution the current bandwidth supports and switches on the fly. All video bytes are served from the CDN edge, never the origin.",
      },
      {
        t: "callout",
        variant: "note",
        text: "Video is stored once but delivered billions of times, so nearly the entire architecture is about the read/streaming path and CDN offload.",
      },
    ],
  },

  "system-design/design-uber": {
    blocks: [
      { t: "h2", text: "Requirements" },
      {
        t: "ul",
        items: [
          "Match a rider to a nearby available driver quickly.",
          "Track driver locations updating every few seconds.",
          "Handle surges in dense areas without melting the database.",
        ],
      },
      { t: "h2", text: "Geospatial indexing" },
      {
        t: "p",
        text: "To find nearby drivers you need a spatial index. Divide the map into cells with a scheme like **geohashing** or **QuadTree/H3**. Drivers report location into their cell; a rider's request queries their cell plus neighbors, turning 'nearest driver' into a bounded lookup instead of a full scan.",
      },
      { t: "h2", text: "The matching flow" },
      {
        t: "ol",
        items: [
          "Drivers stream location updates to a location service (kept in memory/Redis).",
          "A rider requests a trip; the service finds candidate drivers in nearby cells.",
          "A dispatch service ranks by distance/ETA and offers the trip.",
          "On acceptance, both clients get live updates over a persistent connection.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Location writes are enormous and disposable — keep the live index in memory and only persist trip history to the durable store.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Coding Patterns
// ---------------------------------------------------------------------------

const patternContent: Record<string, LessonContent> = {
  "dsa-patterns/two-pointers": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Two pointers walk through a sequence with two indices instead of one, usually collapsing an **O(n²)** nested loop into a single **O(n)** pass. The two classic shapes are pointers converging from both ends, and one slow pointer trailing a fast one.",
      },
      { t: "h2", text: "When to reach for it" },
      {
        t: "ul",
        items: [
          "The array is **sorted** (or can be sorted) and you need a pair/triple meeting a condition.",
          "You're removing duplicates or partitioning in place.",
          "You compare elements from opposite ends (palindrome, container with most water).",
        ],
      },
      { t: "h2", text: "Converging template" },
      {
        t: "code",
        lang: "python",
        code: `def two_sum_sorted(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target:
            return [lo, hi]
        if s < target:
            lo += 1      # need a bigger sum
        else:
            hi -= 1      # need a smaller sum
    return []`,
      },
      {
        t: "callout",
        variant: "note",
        text: "The pattern works because sorting gives monotonic movement: moving a pointer changes the sum in a known direction.",
      },
    ],
  },

  "dsa-patterns/sliding-window": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "A sliding window maintains a contiguous range `[left, right]` and slides it across the array, expanding the right edge to include elements and shrinking the left edge to restore a constraint. It answers 'best/longest/shortest subarray or substring' questions in **O(n)**.",
      },
      { t: "h2", text: "Fixed vs dynamic windows" },
      {
        t: "ul",
        items: [
          "**Fixed size** — window of length k; slide one step, add the new element, drop the old.",
          "**Dynamic** — grow the right edge greedily, shrink the left edge whenever the window becomes invalid.",
        ],
      },
      { t: "h2", text: "Dynamic template" },
      {
        t: "code",
        lang: "python",
        code: `def longest_valid(s):
    seen = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1     # shrink past the duplicate
        seen[ch] = right
        best = max(best, right - left + 1)
    return best`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "Each index enters and leaves the window at most once, so even with a nested-looking shrink step the total work is linear.",
      },
    ],
  },

  "dsa-patterns/fast-slow-pointers": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Also called **Floyd's tortoise and hare**, this pattern runs two pointers at different speeds through a linked structure. If there is a cycle, the fast pointer eventually laps the slow one and they meet — detecting loops in **O(n)** time and **O(1)** space.",
      },
      { t: "h2", text: "Cycle detection" },
      {
        t: "code",
        lang: "python",
        code: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,
      },
      { t: "h2", text: "What else it solves" },
      {
        t: "ul",
        items: [
          "Find the **middle** of a list — when fast hits the end, slow is at the midpoint.",
          "Find the **cycle start** — reset one pointer to the head after they meet.",
          "Detect **happy numbers** — the same trick on a numeric sequence.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "The math: if the fast pointer moves twice as fast, the gap shrinks by one each step, guaranteeing a meeting inside any cycle.",
      },
    ],
  },

  "dsa-patterns/merge-intervals": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Interval problems deal with ranges `[start, end]` that may overlap. The universal first move is to **sort by start**; overlapping intervals then sit next to each other, so a single pass can merge, insert, or count them.",
      },
      { t: "h2", text: "Merge template" },
      {
        t: "code",
        lang: "python",
        code: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    out = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= out[-1][1]:          # overlaps previous
            out[-1][1] = max(out[-1][1], e)
        else:
            out.append([s, e])
    return out`,
      },
      { t: "h2", text: "The overlap test" },
      {
        t: "p",
        text: "Two intervals `[a, b]` and `[c, d]` overlap when `a <= d and c <= b`. After sorting by start, you only need to compare each interval with the last one you kept.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Sorting dominates the runtime at O(n log n); the merge pass itself is linear.",
      },
    ],
  },

  "dsa-patterns/cyclic-sort": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Cyclic sort applies when an array holds numbers in a known range like **1..n**. Because the value tells you the correct index, you can place each number in its slot with swaps — sorting in **O(n)** time and **O(1)** space, no comparison sort needed.",
      },
      { t: "h2", text: "Template" },
      {
        t: "code",
        lang: "python",
        code: `def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        correct = nums[i] - 1        # value v belongs at index v-1
        if nums[i] != nums[correct]:
            nums[i], nums[correct] = nums[correct], nums[i]
        else:
            i += 1
    return nums`,
      },
      { t: "h2", text: "What it unlocks" },
      {
        t: "ul",
        items: [
          "Find the **missing number** in 1..n.",
          "Find **duplicates** — the value that can't reach its slot.",
          "Find the **first missing positive** integer.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Each swap puts at least one number home permanently, so the loop does at most n swaps despite the while structure.",
      },
    ],
  },

  "dsa-patterns/tree-bfs": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Tree BFS (breadth-first search) visits nodes **level by level** using a queue. It's the go-to pattern whenever a problem mentions levels, depth ordering, or the shortest path in an unweighted tree.",
      },
      { t: "h2", text: "Level-order template" },
      {
        t: "code",
        lang: "python",
        code: `from collections import deque

def level_order(root):
    if not root:
        return []
    out, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):     # process one full level
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        out.append(level)
    return out`,
      },
      { t: "h2", text: "Signals to use it" },
      {
        t: "ul",
        items: [
          "'Level order', 'zigzag', or 'right side view'.",
          "'Minimum depth' or shortest number of edges.",
          "Anything comparing nodes at the same depth.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "The `for _ in range(len(q))` line is the trick that lets you handle each level as its own batch.",
      },
    ],
  },

  "dsa-patterns/tree-dfs": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Tree DFS (depth-first search) dives to the bottom of one branch before backtracking, usually via recursion (an implicit stack). It fits problems about **paths**, **subtree** properties, and any computation that combines results from children.",
      },
      { t: "h2", text: "Traversal orders" },
      {
        t: "table",
        head: ["Order", "Visit sequence", "Typical use"],
        rows: [
          ["Pre-order", "node, left, right", "Copy/serialize a tree"],
          ["In-order", "left, node, right", "Sorted output of a BST"],
          ["Post-order", "left, right, node", "Compute from children up (height, deletion)"],
        ],
      },
      { t: "h2", text: "Recursive template" },
      {
        t: "code",
        lang: "python",
        code: `def max_depth(node):
    if not node:
        return 0
    return 1 + max(max_depth(node.left),
                   max_depth(node.right))`,
      },
      {
        t: "callout",
        variant: "note",
        text: "Post-order is the workhorse: solve each subtree, then combine. Many 'path sum' and 'diameter' problems are post-order in disguise.",
      },
    ],
  },

  "dsa-patterns/topological-sort": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Topological sort orders the vertices of a **directed acyclic graph** so every edge points forward. It answers 'in what order can I do these tasks given their dependencies?' — build systems, course prerequisites, task scheduling.",
      },
      { t: "h2", text: "Kahn's algorithm (BFS)" },
      {
        t: "code",
        lang: "python",
        code: `from collections import deque, defaultdict

def topo_sort(n, edges):
    graph = defaultdict(list)
    indeg = [0] * n
    for u, v in edges:          # u must come before v
        graph[u].append(v)
        indeg[v] += 1
    q = deque(i for i in range(n) if indeg[i] == 0)
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else []  # [] means a cycle`,
      },
      { t: "h2", text: "Key facts" },
      {
        t: "ul",
        items: [
          "Start from nodes with **in-degree 0** — nothing depends on them.",
          "If you can't place all nodes, the graph has a **cycle** (no valid order).",
          "Runs in **O(V + E)**.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Course Schedule and its variants are topological sort problems — spotting the dependency graph is the whole trick.",
      },
    ],
  },

  "dsa-patterns/union-find": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Union-Find (Disjoint Set Union) tracks a partition of elements into groups and answers 'are these two in the same group?' plus 'merge these two groups.' With path compression and union by rank, both operations run in nearly **O(1)** amortized.",
      },
      { t: "h2", text: "Implementation" },
      {
        t: "code",
        lang: "python",
        code: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # compress
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False
        if self.rank[ra] < self.rank[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        if self.rank[ra] == self.rank[rb]:
            self.rank[ra] += 1
        return True`,
      },
      { t: "h2", text: "Where it shines" },
      {
        t: "ul",
        items: [
          "Counting **connected components** in a graph.",
          "Detecting a **cycle** in an undirected graph (union returns False).",
          "Kruskal's minimum spanning tree.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "Path compression flattens the tree during find, so repeated queries get progressively cheaper.",
      },
    ],
  },

  "dsa-patterns/two-heaps": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "The two-heaps pattern keeps a **max-heap** for the smaller half of the data and a **min-heap** for the larger half. Balancing their sizes lets you read the **median** in O(1) and insert in O(log n) — ideal for a running median over a stream.",
      },
      { t: "h2", text: "How the halves work" },
      {
        t: "ul",
        items: [
          "Max-heap holds the lower half; its top is the largest of the small numbers.",
          "Min-heap holds the upper half; its top is the smallest of the large numbers.",
          "Keep sizes equal (or the max-heap one bigger); the median is a heap top or the average of the two tops.",
        ],
      },
      { t: "h2", text: "Insert sketch" },
      {
        t: "code",
        lang: "python",
        code: `# lo is a max-heap (negated), hi is a min-heap
def add(num, lo, hi):
    heapq.heappush(lo, -num)
    heapq.heappush(hi, -heapq.heappop(lo))   # move largest of lo to hi
    if len(hi) > len(lo):                    # rebalance
        heapq.heappush(lo, -heapq.heappop(hi))`,
      },
      {
        t: "callout",
        variant: "tip",
        text: "Beyond medians, two heaps solve 'maximize capital' and sliding-window-median problems where you need both extremes cheaply.",
      },
    ],
  },

  "dsa-patterns/subsets": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "The subsets pattern generates all combinations, subsets, or permutations by making a yes/no (or which-element) choice at each step and exploring every branch. It underlies most 'find all possible...' problems and runs in exponential time because the output itself is exponential.",
      },
      { t: "h2", text: "Backtracking template" },
      {
        t: "code",
        lang: "python",
        code: `def subsets(nums):
    res = []
    def backtrack(start, path):
        res.append(path[:])          # every prefix is a valid subset
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)   # advance to avoid reuse
            path.pop()               # undo the choice
    backtrack(0, [])
    return res`,
      },
      { t: "h2", text: "The two building moves" },
      {
        t: "ul",
        items: [
          "**Choose** an element and recurse deeper.",
          "**Un-choose** it (pop) before trying the next option — that's the backtrack.",
        ],
      },
      {
        t: "callout",
        variant: "note",
        text: "An iterative alternative builds subsets by taking each existing subset and appending the new element to a copy.",
      },
    ],
  },

  "dsa-patterns/modified-binary-search": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Binary search isn't only for finding a value in a sorted array. Whenever the answer space is **monotonic** — a predicate that flips from false to true exactly once — you can binary search over it in **O(log n)**.",
      },
      { t: "h2", text: "Search-on-answer template" },
      {
        t: "code",
        lang: "python",
        code: `def min_feasible(lo, hi, feasible):
    while lo < hi:
        mid = (lo + hi) // 2
        if feasible(mid):
            hi = mid          # mid works, try smaller
        else:
            lo = mid + 1      # mid too small, go higher
    return lo`,
      },
      { t: "h2", text: "Where the twist appears" },
      {
        t: "ul",
        items: [
          "**Rotated sorted array** — decide which half is sorted, then search it.",
          "**Find min / peak** — compare mid to a neighbor to pick a direction.",
          "**Koko eating bananas / capacity problems** — binary search the *answer* and test feasibility.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Ask: 'if a candidate works, does every larger candidate also work?' If yes, you can binary search the answer.",
      },
    ],
  },

  "dsa-patterns/backtracking": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Backtracking builds a solution incrementally and abandons a partial candidate the moment it can't lead to a valid full solution. It's a depth-first exploration of the decision tree with **pruning**, which is what keeps an exponential search tractable in practice.",
      },
      { t: "h2", text: "The general shape" },
      {
        t: "code",
        lang: "python",
        code: `def solve(candidate):
    if is_complete(candidate):
        record(candidate)
        return
    for choice in options(candidate):
        if not valid(choice, candidate):
            continue            # prune early
        candidate.add(choice)
        solve(candidate)
        candidate.remove(choice)  # backtrack`,
      },
      { t: "h2", text: "Classic problems" },
      {
        t: "ul",
        items: [
          "**N-Queens** — place queens row by row, prune attacked squares.",
          "**Permutations / combinations** — choose remaining elements.",
          "**Word search / Sudoku** — fill a grid, backtrack on conflict.",
        ],
      },
      {
        t: "callout",
        variant: "warn",
        text: "Pruning is everything. A good validity check that rejects bad branches early can turn an impossible search into an instant one.",
      },
    ],
  },

  "dsa-patterns/dynamic-programming": {
    blocks: [
      { t: "h2", text: "The idea" },
      {
        t: "p",
        text: "Dynamic programming solves a problem by breaking it into overlapping subproblems and reusing their answers instead of recomputing them. Two ingredients are required: **optimal substructure** (the best answer is built from best sub-answers) and **overlapping subproblems** (the same sub-answer is needed many times).",
      },
      { t: "h2", text: "Top-down vs bottom-up" },
      {
        t: "table",
        head: ["Style", "How", "Trade-off"],
        rows: [
          ["Memoization (top-down)", "Recurse, cache each result", "Natural, only computes needed states"],
          ["Tabulation (bottom-up)", "Fill a table iteratively", "No recursion overhead, easy to optimize space"],
        ],
      },
      { t: "h2", text: "A recipe" },
      {
        t: "ol",
        items: [
          "Define the **state** — what parameters identify a subproblem.",
          "Write the **recurrence** relating a state to smaller states.",
          "Set the **base cases**.",
          "Choose an **order** so dependencies are computed first, then optimize space if only recent states matter.",
        ],
      },
      {
        t: "callout",
        variant: "tip",
        text: "Start by writing the plain recursion. If you see the same arguments recur, add a cache — that's DP.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Merged export
// ---------------------------------------------------------------------------

export const EXTRA_CONTENT: Record<string, LessonContent> = {
  ...systemDesignFundamentals,
  ...systemDesignBlocks,
  ...systemDesignDatabases,
  ...systemDesignCases,
  ...patternContent,
};
