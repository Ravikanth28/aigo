// Authored lesson content for the ML System Design course. All prose is original
// and written for this project. Keyed by `${course}/${lessonSlug}` and merged
// into LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const ML_SYSTEM_DESIGN_CONTENT: Record<string, LessonContent> = {
  "ml-system-design/ml-sd-framework": {
    blocks: [
      { t: "h2", text: "A repeatable structure" },
      { t: "p", text: "ML system design interviews reward a structured approach over clever model choices. A consistent framework keeps you from jumping to the model before you understand the problem, the data, and the constraints." },
      { t: "ol", items: ["Clarify the business goal and translate it into an ML problem.", "Define offline and online success metrics.", "Design the data pipeline and features.", "Choose a model and training strategy.", "Design serving, then monitoring and iteration."] },
      { t: "callout", variant: "tip", text: "Spend the first few minutes on requirements and metrics. Interviewers care far more about your judgment there than about which architecture you name." },
    ],
  },
  "ml-system-design/framing-ml-problems": {
    blocks: [
      { t: "h2", text: "From business goal to ML task" },
      { t: "p", text: "The hardest step is often translation: a business wants 'more engagement', but ML needs a concrete prediction task with a label. Framing determines everything downstream, so get it right before touching data." },
      { t: "ul", items: ["Is it classification, regression, ranking, or generation?", "What exactly is the label, and can you actually obtain it?", "What is the prediction latency budget — real-time or batch?"] },
      { t: "callout", variant: "warn", text: "A well-defined but slightly wrong objective (optimizing clicks when you want satisfaction) can actively harm the product. Interrogate the objective." },
    ],
  },
  "ml-system-design/choosing-metrics": {
    blocks: [
      { t: "h2", text: "Offline and online must agree" },
      { t: "p", text: "You optimize offline metrics during development but ultimately care about online business metrics in production. Choosing metrics that correlate is critical; otherwise you improve the offline number while the product gets worse." },
      { t: "table", head: ["Type", "Examples"], rows: [["Offline", "AUC, precision/recall, NDCG, RMSE"], ["Online", "CTR, conversion, revenue, retention"], ["Guardrail", "Latency, error rate, fairness gaps"]] },
      { t: "callout", variant: "note", text: "Always name guardrail metrics you must not regress — a model that lifts revenue but doubles latency is not shippable." },
    ],
  },
  "ml-system-design/baselines": {
    blocks: [
      { t: "h2", text: "Start simple" },
      { t: "p", text: "Before any ML, establish a baseline: a heuristic, a popularity rule, or a simple logistic regression. The baseline sets the bar and often reveals that a simple solution is good enough — or that the problem framing is flawed." },
      { t: "callout", variant: "tip", text: "In an interview, proposing a sensible heuristic baseline before a deep model signals maturity. Real systems frequently ship the heuristic first." },
    ],
  },
  "ml-system-design/data-collection": {
    blocks: [
      { t: "h2", text: "Where labels come from" },
      { t: "p", text: "Models are only as good as their data. Decide early how you will collect examples and, crucially, how you will label them — from user interactions, explicit feedback, or human annotation, each with different cost and bias." },
      { t: "ul", items: ["**Implicit labels** — clicks, purchases, watch time (cheap but noisy/biased).", "**Explicit labels** — ratings, human annotation (accurate but costly).", "Watch for label bias: you only observe outcomes for items the system chose to show."] },
    ],
  },
  "ml-system-design/data-pipelines": {
    blocks: [
      { t: "h2", text: "Getting data to the model" },
      { t: "p", text: "A data pipeline ingests, cleans, transforms, and stores data for both training and serving. The central challenge is consistency: the features computed offline for training must match those computed online at inference." },
      { t: "callout", variant: "warn", text: "Training/serving skew — features computed differently in the two paths — is one of the most common and damaging ML bugs. A feature store exists largely to prevent it." },
    ],
  },
  "ml-system-design/handling-imbalance": {
    blocks: [
      { t: "h2", text: "When one class is rare" },
      { t: "p", text: "Fraud, ads clicks, and disease detection all have severe class imbalance — the positive class may be under 1%. Naive training and accuracy are useless here; a model predicting 'negative' always scores well and catches nothing." },
      { t: "ul", items: ["Use precision/recall, PR-AUC, or F1 — not raw accuracy.", "Resample (oversample positives / undersample negatives) or reweight the loss.", "Consider threshold tuning to hit the desired precision/recall trade-off."] },
    ],
  },
  "ml-system-design/train-test-splits": {
    blocks: [
      { t: "h2", text: "Honest evaluation" },
      { t: "p", text: "Splits must reflect how the model is used. For time-dependent data, split by time — never randomly — so evaluation mimics predicting the future from the past. Random splits on temporal data leak future information." },
      { t: "ul", items: ["**Train** — fit the model.", "**Validation** — tune hyperparameters and select models.", "**Test** — a final, untouched estimate of real performance."] },
    ],
  },
  "ml-system-design/data-leakage": {
    blocks: [
      { t: "h2", text: "The silent accuracy inflator" },
      { t: "p", text: "Data leakage happens when information unavailable at prediction time sneaks into training, producing great offline numbers that collapse in production. It is subtle and extremely common." },
      { t: "ul", items: ["A feature computed using the label or future data.", "Normalizing or imputing using statistics from the whole dataset before splitting.", "Duplicate or near-duplicate rows spanning train and test."] },
      { t: "callout", variant: "warn", text: "If offline metrics look too good to be true, suspect leakage before celebrating." },
    ],
  },
  "ml-system-design/feature-engineering-basics": {
    blocks: [
      { t: "h2", text: "Turning raw data into signal" },
      { t: "p", text: "Feature engineering transforms raw data into inputs a model can learn from. Especially for classical models, good features often matter more than the model choice. Encode domain knowledge into features the model cannot easily discover itself." },
      { t: "ul", items: ["Encode categoricals (one-hot, target, or embedding).", "Bucketize or transform skewed numerics.", "Build interaction and aggregate features (user's average, recency, counts)."] },
    ],
  },
  "ml-system-design/feature-stores": {
    blocks: [
      { t: "h2", text: "One source of feature truth" },
      { t: "p", text: "A feature store is a system that computes, stores, and serves features consistently for training and inference. It solves training/serving skew and lets teams share and reuse features instead of reinventing them." },
      { t: "ul", items: ["**Offline store** — historical features for training (batch).", "**Online store** — low-latency features for real-time inference.", "Shared definitions guarantee the same computation in both paths."] },
    ],
  },
  "ml-system-design/embeddings-features": {
    blocks: [
      { t: "h2", text: "Learned representations" },
      { t: "p", text: "Embeddings turn high-cardinality or unstructured entities — users, items, text — into dense vectors that capture similarity. They are powerful features for recommendation and search, letting the model generalize across related entities." },
      { t: "callout", variant: "note", text: "Cold-start is the catch: new entities have no learned embedding. Fall back to content features or averages until enough interactions accumulate." },
    ],
  },
  "ml-system-design/feature-selection": {
    blocks: [
      { t: "h2", text: "Fewer, better features" },
      { t: "p", text: "More features are not always better — irrelevant ones add noise, cost, and overfitting risk. Feature selection keeps the informative signals and drops the rest, improving both performance and maintainability." },
      { t: "ul", items: ["Drop features with near-zero variance or high correlation.", "Use model-based importance (e.g. tree importances, permutation importance).", "Prefer features that are cheap and reliable to compute at serving time."] },
    ],
  },
  "ml-system-design/model-selection": {
    blocks: [
      { t: "h2", text: "Match the model to the constraints" },
      { t: "p", text: "Model choice balances accuracy against latency, interpretability, data volume, and operational cost. The 'best' model on a benchmark may be the wrong one if it cannot meet a 50ms serving budget." },
      { t: "table", head: ["Situation", "Reasonable choice"], rows: [["Tabular data, tight latency", "Gradient-boosted trees"], ["Huge data, complex patterns", "Deep neural nets"], ["Interpretability required", "Linear / logistic regression"], ["Text/image understanding", "Pretrained transformers"]] },
    ],
  },
  "ml-system-design/training-at-scale": {
    blocks: [
      { t: "h2", text: "When data does not fit on one machine" },
      { t: "p", text: "Large datasets and models require distributed training. The main strategies split either the data or the model across devices, each with different communication costs and complexity." },
      { t: "ul", items: ["**Data parallelism** — replicate the model, split the batch, sync gradients.", "**Model parallelism** — split the model itself across devices for very large models.", "Use checkpointing so long runs survive failures."] },
    ],
  },
  "ml-system-design/hyperparameter-tuning": {
    blocks: [
      { t: "h2", text: "Finding good settings" },
      { t: "p", text: "Hyperparameters (learning rate, depth, regularization) strongly affect performance and are set before training. Systematic search beats manual guessing, but tune on validation data only." },
      { t: "ul", items: ["**Grid search** — exhaustive but expensive.", "**Random search** — often more efficient than grid.", "**Bayesian / early-stopping methods** — focus compute on promising regions."] },
    ],
  },
  "ml-system-design/evaluation-offline": {
    blocks: [
      { t: "h2", text: "Judging before you ship" },
      { t: "p", text: "Offline evaluation estimates quality on held-out data before risking real users. Choose metrics that match the task and slice results across important segments to catch models that are good on average but bad for a key group." },
      { t: "callout", variant: "tip", text: "Always evaluate on slices (new users, rare categories, regions), not just the aggregate. Aggregate wins can hide serious per-segment failures." },
    ],
  },
  "ml-system-design/bias-fairness": {
    blocks: [
      { t: "h2", text: "Models can encode harm" },
      { t: "p", text: "Models trained on biased data can produce unfair outcomes across protected groups. Fairness is both an ethical and, increasingly, a legal requirement. It must be measured explicitly, not assumed." },
      { t: "ul", items: ["Audit performance across demographic slices.", "Watch for proxy features that leak protected attributes.", "Define which fairness criterion matters for your context — they can conflict."] },
    ],
  },
  "ml-system-design/batch-vs-online-inference": {
    blocks: [
      { t: "h2", text: "Precompute or predict on demand" },
      { t: "p", text: "Batch inference computes predictions ahead of time and looks them up; online inference computes them per request. The choice hinges on freshness needs and latency budget." },
      { t: "table", head: ["", "Batch", "Online"], rows: [["Latency", "Instant lookup", "Compute per request"], ["Freshness", "Stale between runs", "Always current"], ["Best for", "Stable predictions (daily recs)", "Context-dependent (search, ads)"]] },
    ],
  },
  "ml-system-design/model-serving": {
    blocks: [
      { t: "h2", text: "Running models in production" },
      { t: "p", text: "Serving infrastructure exposes the model behind an API, handling scaling, batching, and hardware. The goal is to meet the latency SLA under load while controlling cost." },
      { t: "ul", items: ["Batch incoming requests to use hardware (esp. GPUs) efficiently.", "Autoscale on traffic; consider CPU vs GPU trade-offs.", "Version models so you can roll back instantly."] },
    ],
  },
  "ml-system-design/ab-testing-ml": {
    blocks: [
      { t: "h2", text: "Proving impact with real users" },
      { t: "p", text: "Offline wins do not guarantee online wins. An A/B test routes a fraction of traffic to the new model and compares business metrics against the control, providing causal evidence before a full rollout." },
      { t: "ol", items: ["Ship to a small percentage behind a flag.", "Measure the target metric and guardrails with statistical rigor.", "Ramp up only if results are significant and guardrails hold."] },
      { t: "callout", variant: "warn", text: "Run the test long enough for significance and to cover weekly cycles. Stopping early on a promising trend is a classic mistake." },
    ],
  },
  "ml-system-design/model-compression": {
    blocks: [
      { t: "h2", text: "Smaller, faster, cheaper" },
      { t: "p", text: "Large models are accurate but slow and expensive to serve. Compression shrinks them to meet latency and cost targets with minimal accuracy loss." },
      { t: "ul", items: ["**Quantization** — use lower-precision numbers (e.g. int8).", "**Pruning** — remove low-importance weights.", "**Distillation** — train a small 'student' to mimic a large 'teacher'."] },
    ],
  },
  "ml-system-design/model-monitoring": {
    blocks: [
      { t: "h2", text: "Models degrade silently" },
      { t: "p", text: "Unlike a crashing service, a stale model fails quietly — it keeps returning predictions that are increasingly wrong. Monitoring both system health and prediction quality is essential to catch this." },
      { t: "ul", items: ["**Operational** — latency, throughput, error rate.", "**Statistical** — input distribution and prediction distribution over time.", "**Quality** — accuracy where ground truth eventually arrives."] },
    ],
  },
  "ml-system-design/data-model-drift": {
    blocks: [
      { t: "h2", text: "The world changes" },
      { t: "p", text: "Drift is the gradual mismatch between the data a model was trained on and the data it now sees. Left unaddressed, it steadily erodes performance." },
      { t: "table", head: ["Type", "What shifts"], rows: [["Data (covariate) drift", "Input distribution P(X)"], ["Concept drift", "Relationship P(Y|X) between inputs and label"], ["Label drift", "Distribution of outcomes P(Y)"]] },
      { t: "callout", variant: "note", text: "Detect drift by comparing recent input distributions to a training reference, then trigger retraining when it exceeds a threshold." },
    ],
  },
  "ml-system-design/retraining-pipelines": {
    blocks: [
      { t: "h2", text: "Keeping models fresh" },
      { t: "p", text: "A retraining pipeline automates collecting new data, retraining, evaluating, and deploying — either on a schedule or triggered by drift. Automation with gates keeps the model current without manual toil or risky releases." },
      { t: "ol", items: ["Gather and validate fresh labeled data.", "Retrain and evaluate against the current production model.", "Promote only if it beats production on metrics and guardrails.", "Deploy with the ability to roll back."] },
    ],
  },
  "ml-system-design/design-recommendation-system": {
    blocks: [
      { t: "h2", text: "Two stages: retrieve then rank" },
      { t: "p", text: "Large-scale recommenders cannot score every item for every user. The standard architecture retrieves a few hundred candidates cheaply, then ranks them with a heavier model — balancing scale against precision." },
      { t: "ol", items: ["**Candidate generation** — fast retrieval (embeddings/ANN, collaborative filtering) narrows millions of items to hundreds.", "**Ranking** — a richer model scores candidates using user, item, and context features.", "**Re-ranking** — apply business rules, diversity, and freshness."] },
      { t: "callout", variant: "note", text: "Address cold-start explicitly: recommend popular or content-based items for new users and items until interaction data accumulates." },
    ],
  },
  "ml-system-design/design-feed-ranking": {
    blocks: [
      { t: "h2", text: "Ranking a social feed" },
      { t: "p", text: "Feed ranking orders posts to maximize long-term engagement, not just immediate clicks. It typically predicts several actions (like, comment, share, dwell) and combines them into a single score." },
      { t: "ul", items: ["Predict multiple engagement probabilities per candidate.", "Combine them with weights reflecting business value.", "Add guardrails for integrity, diversity, and freshness so the feed does not collapse into clickbait."] },
    ],
  },
  "ml-system-design/design-search-ranking": {
    blocks: [
      { t: "h2", text: "Relevance at scale" },
      { t: "p", text: "Search ranking returns the most relevant results for a query. Like recommendations, it retrieves candidates (lexical + semantic) then applies learning-to-rank models optimized for ranking metrics such as NDCG." },
      { t: "ul", items: ["Retrieve with keyword (BM25) and semantic (vector) search.", "Rank with features spanning query, document, and user context.", "Train on click and relevance judgments; evaluate with NDCG/MRR."] },
    ],
  },
  "ml-system-design/design-fraud-detection": {
    blocks: [
      { t: "h2", text: "Rare, adversarial, low-latency" },
      { t: "p", text: "Fraud detection classifies transactions as legitimate or fraudulent in real time. It combines extreme class imbalance, adversaries who adapt, and a hard latency budget — a demanding design." },
      { t: "ul", items: ["Optimize precision/recall trade-off; the cost of false positives and negatives differs sharply.", "Serve online with strict latency; precompute expensive features in a feature store.", "Retrain frequently because fraud patterns shift adversarially.", "Pair the model with rules for known patterns and human review for edge cases."] },
    ],
  },
  "ml-system-design/design-ad-click-prediction": {
    blocks: [
      { t: "h2", text: "Predicting click-through at massive scale" },
      { t: "p", text: "Ad click prediction estimates the probability a user clicks an ad (pCTR), which drives ranking and pricing in an auction. It handles billions of examples with extremely sparse, high-cardinality features and needs calibrated probabilities." },
      { t: "ul", items: ["Model sparse categorical features via embeddings and interactions.", "Calibration matters — the predicted probability feeds bidding, not just ranking.", "Serve with tight latency; features come from an online store.", "Watch for feedback loops: the model influences what data it later sees."] },
      { t: "callout", variant: "note", text: "Expected value in the auction is roughly pCTR times bid, so a well-calibrated probability directly affects revenue." },
    ],
  },
};
