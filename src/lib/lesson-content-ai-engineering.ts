// Authored lesson content for the AI Engineering course. All prose is original
// and written for this project. Keyed by `${course}/${lessonSlug}` and merged
// into LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const AI_ENGINEERING_CONTENT: Record<string, LessonContent> = {
  "ai-engineering/what-is-ai-engineering": {
    blocks: [
      { t: "h2", text: "Building with models, not training them" },
      { t: "p", text: "AI engineering is the discipline of building production applications on top of foundation models you did not train. It sits between traditional software engineering and machine learning: you rarely touch model weights, but you constantly shape prompts, context, tools, and evaluation." },
      { t: "ul", items: ["**ML engineering** trains and optimizes models from data.", "**AI engineering** composes pre-trained models into reliable products.", "The bottleneck shifts from training compute to context design, evaluation, and cost."] },
      { t: "callout", variant: "note", text: "Because the model is a given, your leverage is everything around it: retrieval, prompting, tool use, guardrails, and measurement." },
    ],
  },
  "ai-engineering/how-llms-work": {
    blocks: [
      { t: "h2", text: "Next-token prediction" },
      { t: "p", text: "A large language model is, at its core, a function that predicts the next token given all previous tokens. Trained on vast text, it learns statistical patterns that, at scale, produce fluent and often useful output. Everything an LLM does — answering, coding, reasoning — emerges from repeated next-token prediction." },
      { t: "ol", items: ["Input text is split into tokens and embedded into vectors.", "Transformer layers with attention mix information across positions.", "The final layer produces a probability distribution over the next token.", "One token is sampled, appended, and the process repeats."] },
      { t: "callout", variant: "warn", text: "The model has no built-in notion of truth. It predicts plausible text, which is why it can state falsehoods confidently — the origin of hallucination." },
    ],
  },
  "ai-engineering/tokens-and-context": {
    blocks: [
      { t: "h2", text: "Tokens are the unit of everything" },
      { t: "p", text: "Models do not see characters or words — they see tokens, roughly 3 to 4 characters of English each. Tokens determine what fits in the context window, how much latency you incur, and what you pay. Reasoning about tokens is reasoning about cost and capability." },
      { t: "ul", items: ["**Context window** — the max tokens (input + output) the model can attend to at once.", "**Pricing** — billed per input and output token, usually at different rates.", "**Latency** — grows with the number of tokens generated."] },
      { t: "callout", variant: "tip", text: "Output tokens are generated one at a time and usually cost more than input tokens. Trimming verbose outputs often saves more money than trimming the prompt." },
    ],
  },
  "ai-engineering/temperature-sampling": {
    blocks: [
      { t: "h2", text: "Controlling randomness" },
      { t: "p", text: "At each step the model has a probability distribution over next tokens. Sampling parameters decide how that distribution is turned into a choice, trading determinism for creativity." },
      { t: "table", head: ["Parameter", "Effect"], rows: [["Temperature", "Higher = more random/creative; lower = more focused/deterministic"], ["Top-p (nucleus)", "Sample only from the smallest set of tokens covering probability p"], ["Top-k", "Sample only from the k most likely tokens"]] },
      { t: "callout", variant: "tip", text: "For extraction, classification, or code, use a low temperature. For brainstorming or creative writing, raise it. Temperature 0 is nearly deterministic but not guaranteed identical." },
    ],
  },
  "ai-engineering/capabilities-limitations": {
    blocks: [
      { t: "h2", text: "Knowing the edges" },
      { t: "p", text: "Good AI engineering means designing around what models do poorly. Models excel at language transformation, summarization, and pattern completion. They struggle with precise arithmetic, up-to-date facts, and reliable long-horizon reasoning." },
      { t: "ul", items: ["**Strong**: rewriting, classification, extraction, drafting, code generation.", "**Weak**: exact math, current events, counting, guaranteed consistency.", "**Mitigations**: give tools for math, retrieval for facts, and structure for consistency."] },
    ],
  },
  "ai-engineering/prompting-basics": {
    blocks: [
      { t: "h2", text: "The prompt is the program" },
      { t: "p", text: "With a fixed model, the prompt is your main lever. Clear, specific instructions with explicit format and constraints outperform vague requests dramatically. Treat prompt writing like specification writing." },
      { t: "ul", items: ["Be specific about the task, audience, and desired format.", "Give the model a role when it helps frame the response.", "Show, don't just tell — a short example clarifies intent.", "State constraints explicitly (length, tone, what to avoid)."] },
      { t: "callout", variant: "tip", text: "If output is inconsistent, the fix is almost always a more specific prompt, not a bigger model." },
    ],
  },
  "ai-engineering/few-shot-prompting": {
    blocks: [
      { t: "h2", text: "Teaching by example" },
      { t: "p", text: "Few-shot prompting includes a handful of input/output examples in the prompt so the model infers the pattern you want. It is the fastest way to steer format and style without any training." },
      { t: "code", lang: "text", code: "Classify sentiment as positive, negative, or neutral.\n\nReview: \"Loved it, works perfectly.\" -> positive\nReview: \"Broke after a week.\" -> negative\nReview: \"It's fine, nothing special.\" -> neutral\nReview: \"Exceeded my expectations!\" ->" },
      { t: "callout", variant: "note", text: "Two to five well-chosen, diverse examples usually capture most of the benefit. More examples cost tokens and can even hurt if they are redundant or biased." },
    ],
  },
  "ai-engineering/chain-of-thought": {
    blocks: [
      { t: "h2", text: "Let the model reason step by step" },
      { t: "p", text: "For multi-step problems, asking the model to reason before answering markedly improves accuracy. Generating intermediate steps gives the model 'room to think' — each step conditions the next." },
      { t: "code", lang: "text", code: "Question: A shop had 23 apples, sold 15, then received 8 more.\nHow many now?\n\nThink step by step, then give the final number.\n1) Start: 23\n2) After selling 15: 23 - 15 = 8\n3) After receiving 8: 8 + 8 = 16\nAnswer: 16" },
      { t: "callout", variant: "tip", text: "When you only need the final answer, ask the model to reason internally and return just the result, or parse the last line — so users do not see the scratch work." },
    ],
  },
  "ai-engineering/structured-outputs": {
    blocks: [
      { t: "h2", text: "Making output machine-readable" },
      { t: "p", text: "Applications need reliable structure, not prose. Requesting JSON (or using a provider's structured-output/JSON mode) lets you parse results programmatically. Pair it with a schema so the shape is guaranteed." },
      { t: "code", lang: "json", code: "{\n  \"sentiment\": \"positive\",\n  \"confidence\": 0.92,\n  \"topics\": [\"shipping\", \"quality\"]\n}" },
      { t: "callout", variant: "warn", text: "Even with JSON mode, validate the output against your schema before trusting it. Never eval or execute model output directly." },
    ],
  },
  "ai-engineering/system-prompts": {
    blocks: [
      { t: "h2", text: "Setting persistent behavior" },
      { t: "p", text: "The system prompt establishes the model's role, rules, and tone for the whole conversation. Messages are typically split into system, user, and assistant roles; the system role carries instructions that should hold across turns." },
      { t: "ul", items: ["Put durable rules and persona in the system prompt.", "Put the specific request in the user message.", "Keep the system prompt focused — contradictory rules degrade behavior."] },
    ],
  },
  "ai-engineering/prompt-security": {
    blocks: [
      { t: "h2", text: "Prompt injection is the new injection" },
      { t: "p", text: "When your app feeds untrusted text (web pages, documents, user input) into a prompt, that text can contain instructions that hijack the model. This is prompt injection, and it is a serious, unsolved class of vulnerability." },
      { t: "ul", items: ["**Direct injection** — a user tells the model to ignore its instructions.", "**Indirect injection** — malicious instructions hide in retrieved content.", "**Defenses** — separate data from instructions, least-privilege tools, output validation, and human confirmation for sensitive actions."] },
      { t: "callout", variant: "warn", text: "Never give a model unchecked power to take irreversible actions based on untrusted input. Treat everything the model reads from the outside world as data, not commands." },
    ],
  },
  "ai-engineering/embeddings-explained": {
    blocks: [
      { t: "h2", text: "Meaning as vectors" },
      { t: "p", text: "An embedding maps text to a vector of numbers such that semantically similar text lands close together in that space. Embeddings are the foundation of semantic search and retrieval: instead of matching keywords, you match meaning." },
      { t: "ul", items: ["Similar meanings → nearby vectors (measured by cosine similarity).", "Enables 'find related content' without exact word overlap.", "Same model must embed both your documents and your queries."] },
      { t: "callout", variant: "note", text: "Embeddings are computed by a dedicated embedding model, separate from the chat model, and are typically hundreds to a few thousand dimensions." },
    ],
  },
  "ai-engineering/vector-databases": {
    blocks: [
      { t: "h2", text: "Storing and searching embeddings" },
      { t: "p", text: "A vector database stores embeddings and finds the nearest neighbors to a query vector quickly, even across millions of items. It uses approximate nearest-neighbor (ANN) indexes to trade a tiny bit of accuracy for large speedups." },
      { t: "table", head: ["Concept", "Meaning"], rows: [["ANN index", "Fast approximate nearest-neighbor search (e.g. HNSW)"], ["Metadata filter", "Restrict search by attributes like date or author"], ["Upsert", "Insert or update vectors with their source metadata"]] },
      { t: "callout", variant: "tip", text: "For small corpora you may not need a dedicated vector DB — a library doing brute-force cosine similarity in memory is simpler and plenty fast." },
    ],
  },
  "ai-engineering/chunking-strategies": {
    blocks: [
      { t: "h2", text: "How you split matters" },
      { t: "p", text: "Documents must be split into chunks before embedding. Chunk too large and retrieval returns noise; too small and you lose context. Good chunking respects the document's natural structure." },
      { t: "ul", items: ["Split on semantic boundaries (paragraphs, sections) not arbitrary character counts.", "Use overlap so ideas spanning a boundary are not lost.", "Attach metadata (source, heading) to each chunk for filtering and citation."] },
      { t: "callout", variant: "warn", text: "There is no universal chunk size. Tune it against your own evaluation set for your document type." },
    ],
  },
  "ai-engineering/retrieval-augmented-generation": {
    blocks: [
      { t: "h2", text: "Grounding answers in your data" },
      { t: "p", text: "Retrieval-Augmented Generation (RAG) retrieves relevant chunks from your knowledge base and inserts them into the prompt so the model answers from real, current data instead of its parametric memory. It is the standard way to give an LLM access to private or fresh information." },
      { t: "ol", items: ["Embed the user's query.", "Retrieve the top-k most similar chunks from the vector store.", "Insert those chunks into the prompt as context.", "Ask the model to answer using only the provided context, with citations."] },
      { t: "callout", variant: "tip", text: "Instruct the model to say 'I don't know' when the context lacks the answer. This dramatically reduces hallucination on out-of-scope questions." },
    ],
  },
  "ai-engineering/hybrid-search": {
    blocks: [
      { t: "h2", text: "Combining semantic and keyword search" },
      { t: "p", text: "Pure vector search can miss exact terms like product codes or names; pure keyword search misses paraphrases. Hybrid search runs both and merges the results, then a reranker reorders them for final relevance." },
      { t: "ul", items: ["**Dense (vector)** captures meaning and paraphrase.", "**Sparse (keyword/BM25)** captures exact terms and rare words.", "**Reranker** — a cross-encoder scores query/chunk pairs for a precise final order."] },
    ],
  },
  "ai-engineering/rag-evaluation": {
    blocks: [
      { t: "h2", text: "Measuring a RAG pipeline" },
      { t: "p", text: "RAG has two failure points — retrieval and generation — so you must evaluate both. A great model cannot answer from bad context, and perfect context is wasted by a sloppy prompt." },
      { t: "table", head: ["Dimension", "Question it answers"], rows: [["Retrieval recall", "Did we fetch the chunks that contain the answer?"], ["Context precision", "Are the fetched chunks actually relevant?"], ["Faithfulness", "Is the answer supported by the retrieved context?"], ["Answer relevance", "Does the answer address the question?"]] },
      { t: "callout", variant: "note", text: "Build a small labeled eval set of question/answer pairs early. Without it you are tuning blind." },
    ],
  },
  "ai-engineering/function-calling": {
    blocks: [
      { t: "h2", text: "Letting models use tools" },
      { t: "p", text: "Function (tool) calling lets a model request that your code run a function — fetch data, do math, call an API — and then use the result. You describe the available tools; the model decides when to call them and with what arguments." },
      { t: "ol", items: ["You send the user message plus tool schemas.", "The model responds with a structured tool call and arguments.", "Your code executes the tool and returns the result.", "The model incorporates the result into its final answer."] },
      { t: "callout", variant: "warn", text: "The model only proposes the call; your code executes it. Always validate arguments and enforce permissions — never blindly run what the model asks." },
    ],
  },
  "ai-engineering/agent-fundamentals": {
    blocks: [
      { t: "h2", text: "From single call to loop" },
      { t: "p", text: "An agent is an LLM in a loop with tools: it observes, decides on an action, executes a tool, observes the result, and repeats until the goal is met. This turns a one-shot responder into something that can carry out multi-step tasks." },
      { t: "code", lang: "text", code: "loop:\n  thought  = model.decide(goal, history)\n  if thought.is_final: return thought.answer\n  result   = run_tool(thought.tool, thought.args)\n  history += (thought, result)" },
      { t: "callout", variant: "warn", text: "Always cap the number of loop iterations. Without a limit, an agent can loop forever or run up unbounded cost." },
    ],
  },
  "ai-engineering/planning-and-memory": {
    blocks: [
      { t: "h2", text: "Thinking ahead and remembering" },
      { t: "p", text: "Complex tasks benefit from an explicit plan and some form of memory. Planning breaks a goal into steps before acting; memory persists relevant facts across steps or sessions when the context window cannot hold everything." },
      { t: "ul", items: ["**Planning** — decompose the goal, then execute step by step.", "**Short-term memory** — the conversation/context window.", "**Long-term memory** — external store (often a vector DB) queried as needed."] },
    ],
  },
  "ai-engineering/multi-agent-systems": {
    blocks: [
      { t: "h2", text: "Dividing the work" },
      { t: "p", text: "A multi-agent system uses several specialized agents that coordinate — for example a planner that delegates to worker agents. Specialization can improve quality on complex tasks, at the cost of more orchestration and expense." },
      { t: "callout", variant: "note", text: "Multi-agent designs add latency, cost, and failure modes. Reach for them only when a single well-prompted agent with good tools genuinely falls short." },
    ],
  },
  "ai-engineering/mcp-overview": {
    blocks: [
      { t: "h2", text: "A standard for tools and context" },
      { t: "p", text: "The Model Context Protocol (MCP) is an open standard for connecting models to external tools and data sources through a common interface. Instead of custom glue for every integration, a model host can speak MCP to any compliant server." },
      { t: "ul", items: ["**Servers** expose tools, resources, and prompts.", "**Hosts/clients** (like an assistant) call them over the protocol.", "The benefit is reuse: build an integration once, use it anywhere that speaks MCP."] },
    ],
  },
  "ai-engineering/when-to-fine-tune": {
    blocks: [
      { t: "h2", text: "The last resort, not the first" },
      { t: "p", text: "Fine-tuning adapts a model to your data, but it is expensive, slows iteration, and does not add new knowledge well. Before fine-tuning, exhaust prompting and RAG — they solve most problems faster and cheaper." },
      { t: "table", head: ["Need", "Better tool"], rows: [["Up-to-date or private facts", "RAG"], ["Consistent format or style", "Prompting / few-shot, then fine-tune if needed"], ["A specialized behavior at scale", "Fine-tuning"]] },
      { t: "callout", variant: "tip", text: "Rule of thumb: fine-tune for behavior and style, use RAG for knowledge." },
    ],
  },
  "ai-engineering/supervised-fine-tuning": {
    blocks: [
      { t: "h2", text: "Learning from examples" },
      { t: "p", text: "Supervised fine-tuning (SFT) trains the model on curated input/output pairs so it reliably produces the desired kind of response. Data quality dominates: a few thousand clean, consistent examples beat a huge noisy set." },
      { t: "ul", items: ["Collect high-quality, consistent input/output pairs.", "Hold out a validation set to detect overfitting.", "Evaluate against your task metrics, not just training loss."] },
    ],
  },
  "ai-engineering/lora-peft": {
    blocks: [
      { t: "h2", text: "Fine-tuning cheaply" },
      { t: "p", text: "Full fine-tuning updates every weight and is costly. Parameter-efficient methods like LoRA freeze the base model and train small adapter matrices, achieving most of the benefit at a fraction of the compute and storage." },
      { t: "callout", variant: "note", text: "LoRA adapters are tiny relative to the base model, so you can keep many task-specific adapters and swap them onto one shared base at serving time." },
    ],
  },
  "ai-engineering/rlhf-overview": {
    blocks: [
      { t: "h2", text: "Aligning with preferences" },
      { t: "p", text: "Reinforcement Learning from Human Feedback (RLHF) tunes a model toward outputs humans prefer. Annotators rank responses, a reward model learns those preferences, and the policy is optimized against it. Newer methods like DPO reach similar goals more directly." },
      { t: "ol", items: ["Collect human preference comparisons between responses.", "Train a reward model to predict those preferences.", "Optimize the model to maximize the reward (RLHF) or via preference loss (DPO)."] },
    ],
  },
  "ai-engineering/evaluating-llm-apps": {
    blocks: [
      { t: "h2", text: "You cannot improve what you cannot measure" },
      { t: "p", text: "LLM outputs are open-ended, so traditional unit tests do not fit. You need an evaluation harness: a dataset of representative inputs, plus scorers that judge outputs. This lets you compare prompts and models objectively instead of by vibes." },
      { t: "ul", items: ["Build a labeled eval set covering common and edge cases.", "Mix automatic scorers (exact match, regex, embeddings) with LLM-as-judge.", "Track scores across versions to catch regressions before users do."] },
      { t: "callout", variant: "tip", text: "Start with 20 to 50 hand-labeled examples. Even a small eval set turns guesswork into measurement." },
    ],
  },
  "ai-engineering/llm-as-judge": {
    blocks: [
      { t: "h2", text: "Using a model to grade" },
      { t: "p", text: "For subjective qualities like helpfulness or tone, you can ask a capable model to score outputs against a rubric. It scales far better than human grading, though it must be validated against human judgment to be trusted." },
      { t: "callout", variant: "warn", text: "Judge models have biases — they may favor longer answers or their own style. Calibrate the judge against human labels and keep the rubric explicit." },
    ],
  },
  "ai-engineering/guardrails": {
    blocks: [
      { t: "h2", text: "Keeping outputs safe and on-topic" },
      { t: "p", text: "Guardrails are checks around the model that filter unsafe, off-topic, or malformed inputs and outputs. They run before and after the model to enforce policy independent of what the model happens to generate." },
      { t: "ul", items: ["**Input guards** — block prompt injection, PII, or disallowed requests.", "**Output guards** — filter toxic content, validate format, redact secrets.", "**Topic guards** — keep the assistant within its intended domain."] },
    ],
  },
  "ai-engineering/caching-cost-optimization": {
    blocks: [
      { t: "h2", text: "Paying less for the same result" },
      { t: "p", text: "LLM calls are the dominant cost in most AI apps. Caching repeated work and choosing the right model per task cut spend without hurting quality." },
      { t: "ul", items: ["**Exact-match cache** — reuse responses for identical prompts.", "**Semantic cache** — reuse answers for near-duplicate questions.", "**Prompt caching** — reuse a large static prefix across calls where supported.", "**Model routing** — send easy requests to a cheaper, smaller model."] },
      { t: "callout", variant: "tip", text: "Route by difficulty: a small model handles the bulk of easy traffic, escalating to a large model only when needed." },
    ],
  },
  "ai-engineering/latency-streaming": {
    blocks: [
      { t: "h2", text: "Making it feel fast" },
      { t: "p", text: "Generation is inherently sequential, so total latency grows with output length. Streaming tokens as they are produced lets users start reading immediately, which improves perceived speed even when total time is unchanged." },
      { t: "ul", items: ["Stream responses so time-to-first-token is short.", "Keep prompts and outputs concise to cut generation time.", "Run independent tool calls in parallel rather than serially."] },
    ],
  },
  "ai-engineering/observability-llm": {
    blocks: [
      { t: "h2", text: "Seeing inside your pipeline" },
      { t: "p", text: "LLM apps fail in subtle ways — a bad retrieval, a drifting prompt, a spike in cost. Tracing each request end to end (prompt, retrieved context, tool calls, tokens, latency, cost) is essential for debugging and improvement." },
      { t: "ul", items: ["Log full traces: inputs, context, tool calls, and outputs.", "Track token usage, latency, and cost per request.", "Capture user feedback signals to feed your eval set."] },
    ],
  },
  "ai-engineering/deploying-llm-apps": {
    blocks: [
      { t: "h2", text: "From prototype to production" },
      { t: "p", text: "Shipping an LLM app adds concerns beyond a normal service: rate limits and quotas from the provider, graceful degradation when the model is slow or down, and cost controls that prevent runaway spend." },
      { t: "ul", items: ["Handle provider rate limits with retries and backoff.", "Have a fallback path (cheaper model, cached answer, or clear error).", "Set per-user and global budget limits.", "Roll out prompt and model changes behind flags with evals as the gate."] },
      { t: "callout", variant: "note", text: "Version your prompts like code. A prompt change is a deploy and should pass your evaluation suite before it reaches users." },
    ],
  },
};
