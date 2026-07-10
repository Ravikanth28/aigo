// Authored lesson content for the Job Search course. All prose is original and
// written for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const JOB_SEARCH_CONTENT: Record<string, LessonContent> = {
  "job-search/planning-your-search": {
    blocks: [
      { t: "h2", text: "A search is a project" },
      { t: "p", text: "The most common job-search mistake is treating it as a series of one-off applications instead of a managed project. A search without a plan drifts: you apply randomly, lose track of conversations, and burn out. Treat it like any other project with goals, a pipeline, and metrics." },
      { t: "ul", items: ["Define what you actually want — role, level, domain, compensation floor.", "Set a weekly rhythm for applications, outreach, and prep.", "Track everything in one place so nothing slips."] },
      { t: "callout", variant: "tip", text: "Decide your non-negotiables before you start. It is far easier to filter opportunities against clear criteria than to evaluate each one from scratch under offer pressure." },
    ],
  },
  "job-search/timeline-and-pipeline": {
    blocks: [
      { t: "h2", text: "Think in stages" },
      { t: "p", text: "A job search is a funnel: applications become screens, screens become onsites, onsites become offers. Because conversion at each stage is far below 100%, you need enough volume at the top to end with real choice at the bottom." },
      { t: "table", head: ["Stage", "Typical conversion"], rows: [["Application → recruiter screen", "Low; expect many silent rejections"], ["Screen → onsite", "Moderate"], ["Onsite → offer", "Moderate"], ["Offer → acceptance", "Your choice"]] },
      { t: "callout", variant: "note", text: "Aim to have multiple processes reaching the onsite stage in the same window. Clustered offers give you negotiating leverage and reduce the pressure to accept early." },
    ],
  },
  "job-search/target-companies": {
    blocks: [
      { t: "h2", text: "Tiering your targets" },
      { t: "p", text: "Not all companies deserve equal effort. Sort your targets into tiers and invest accordingly. A useful trick is to interview at lower-priority companies first to warm up before your dream roles." },
      { t: "ul", items: ["**Reach** — dream roles; prepare heavily, interview later once you are sharp.", "**Core** — strong fits where you are competitive; the bulk of your energy.", "**Practice** — lower stakes; use these to rehearse under real conditions."] },
    ],
  },
  "job-search/resume-fundamentals": {
    blocks: [
      { t: "h2", text: "One page, scannable, impact-first" },
      { t: "p", text: "A recruiter spends seconds on the first pass. Your resume must communicate seniority and impact at a glance. Lead each bullet with the result, keep it to one page for most candidates, and cut anything that does not earn its space." },
      { t: "ul", items: ["Reverse-chronological, most recent and relevant first.", "Every bullet starts with a strong action verb and ends with an outcome.", "No dense paragraphs; no objective statement; no photo.", "Consistent formatting and zero typos."] },
      { t: "callout", variant: "warn", text: "Listing responsibilities ('Responsible for the payments service') is weak. Show what changed because you were there." },
    ],
  },
  "job-search/quantifying-impact": {
    blocks: [
      { t: "h2", text: "Numbers make claims credible" },
      { t: "p", text: "Unquantified claims read as opinion; numbers read as fact. Wherever you can, attach a metric — latency, revenue, users, cost, time saved, error rate. If you do not have exact numbers, a defensible estimate is far better than none." },
      { t: "table", head: ["Weak", "Strong"], rows: [["Improved system performance", "Cut p99 latency from 800ms to 120ms"], ["Worked on a large migration", "Migrated 40 services to the new platform with zero downtime"], ["Helped reduce costs", "Reduced infra spend by 30% ($200k/yr)"]] },
    ],
  },
  "job-search/ats-optimization": {
    blocks: [
      { t: "h2", text: "Getting past the filter" },
      { t: "p", text: "Applicant Tracking Systems parse your resume before a human sees it. A resume that confuses the parser can be silently downranked regardless of your qualifications. Keep the format machine-readable and mirror the language of the job description." },
      { t: "ul", items: ["Use a simple single-column layout; avoid tables, columns, and images for content.", "Match the exact skill keywords used in the posting where they are truthfully yours.", "Submit as PDF unless another format is requested.", "Use standard section headings the parser expects."] },
      { t: "callout", variant: "warn", text: "Never stuff invisible or irrelevant keywords. Modern systems and recruiters catch it, and it destroys credibility." },
    ],
  },
  "job-search/github-portfolio": {
    blocks: [
      { t: "h2", text: "Curate, do not dump" },
      { t: "p", text: "Reviewers who click through to your GitHub see whatever is on top. A profile full of half-finished tutorials undersells you. Pin two or three projects that show real engineering and give each a clear README." },
      { t: "ul", items: ["Pin your strongest work; hide or archive the noise.", "Each pinned repo needs a README explaining what, why, and how to run it.", "Show tests, clean commits, and documentation — signals of professionalism."] },
    ],
  },
  "job-search/linkedin-profile": {
    blocks: [
      { t: "h2", text: "The profile recruiters search" },
      { t: "p", text: "Most inbound recruiting starts on LinkedIn, and recruiters find you through keyword search. An optimized headline and a complete profile dramatically increase inbound opportunities." },
      { t: "ul", items: ["Headline that states role and specialty, not just 'Software Engineer'.", "'Open to work' toggled on when you are actively searching.", "Experience mirrors your resume's impact bullets.", "Skills section filled with the terms recruiters search for."] },
    ],
  },
  "job-search/why-referrals-work": {
    blocks: [
      { t: "h2", text: "The highest-conversion channel" },
      { t: "p", text: "A referred application is far more likely to reach a human and to convert to an interview than a cold application. Referrals work because they transfer trust — someone inside is vouching that you are worth a look." },
      { t: "callout", variant: "tip", text: "You do not need a close friend inside. A brief, specific message to a loose connection or even a stranger who shares your background often works. Most engineers are happy to refer strong candidates because referral bonuses exist." },
    ],
  },
  "job-search/cold-outreach": {
    blocks: [
      { t: "h2", text: "Messages that get replies" },
      { t: "p", text: "Cold outreach fails when it is generic and self-centered. It succeeds when it is short, specific, and makes replying easy. Respect the reader's time and give them a concrete reason to help." },
      { t: "ol", items: ["Open with a genuine, specific reason you are reaching out to *them*.", "State clearly and briefly what you are asking for.", "Make the ask small and easy to say yes to.", "Attach or link your resume so they have context."] },
      { t: "callout", variant: "warn", text: "Do not send a wall of text or ask someone to 'grab coffee' before you have any relationship. Ask for one specific, low-effort thing." },
    ],
  },
  "job-search/informational-interviews": {
    blocks: [
      { t: "h2", text: "Learning before applying" },
      { t: "p", text: "An informational interview is a short, low-pressure conversation to learn about a team or company — not a job ask. Done well, it builds a relationship that can later turn into a referral, and it gives you insider detail that sharpens your applications." },
      { t: "ul", items: ["Come with specific questions; do not wing it.", "Never open by asking for a job — build the relationship first.", "Follow up with a thank-you and stay in touch."] },
    ],
  },
  "job-search/cover-letters": {
    blocks: [
      { t: "h2", text: "When and how they matter" },
      { t: "p", text: "Most engineering roles do not require a cover letter, but a short, targeted one can help for roles where fit is not obvious from your resume — a career switch, a stretch role, or a mission-driven company." },
      { t: "callout", variant: "tip", text: "If you write one, keep it to three short paragraphs: why this company, why you are a fit, and a specific example. A generic template does more harm than no letter at all." },
    ],
  },
  "job-search/recruiter-screens": {
    blocks: [
      { t: "h2", text: "The first conversation" },
      { t: "p", text: "The recruiter screen is a gate, not a technical test. The recruiter is checking basic fit, motivation, and compensation alignment before investing the team's time. Be warm, concise, and prepared." },
      { t: "ul", items: ["Have a crisp two-minute background summary ready.", "Know why you are interested in this specific company.", "Be ready to discuss compensation expectations — or to defer politely.", "Ask about the interview process and timeline."] },
      { t: "callout", variant: "note", text: "On compensation, it is usually fine to ask for the band first. If pressed, give a range grounded in market data rather than a single number." },
    ],
  },
  "job-search/managing-the-process": {
    blocks: [
      { t: "h2", text: "Running several searches at once" },
      { t: "p", text: "Juggling multiple companies is a scheduling and information-management challenge. The goal is to bunch onsites close together so offers arrive in the same window, maximizing your leverage." },
      { t: "ul", items: ["Track every company's stage, contact, and next action in one tracker.", "Politely pace slower processes to align with faster ones.", "Keep notes on each interviewer and conversation for follow-ups."] },
    ],
  },
  "job-search/understanding-comp": {
    blocks: [
      { t: "h2", text: "Total compensation, not just salary" },
      { t: "p", text: "Tech compensation is a package, and focusing only on base salary leads to bad comparisons. Learn the components so you can evaluate offers apples-to-apples." },
      { t: "table", head: ["Component", "What to check"], rows: [["Base salary", "Fixed cash, paid regardless of performance"], ["Equity", "Grant value, vesting schedule, and whether it is RSUs or options"], ["Bonus", "Target %, and how reliably it pays out"], ["Sign-on", "One-time; often negotiable to close gaps"]] },
      { t: "callout", variant: "warn", text: "A large equity number spread over four years with a one-year cliff is not the same as cash. Understand vesting and refresh policy before comparing." },
    ],
  },
  "job-search/negotiation-fundamentals": {
    blocks: [
      { t: "h2", text: "Negotiation is expected" },
      { t: "p", text: "Recruiters expect candidates to negotiate, and the first offer is rarely the best offer. Negotiating professionally does not risk the offer; it is a normal part of the process. The key is leverage, politeness, and specificity." },
      { t: "ol", items: ["Never accept on the spot; thank them and ask for time.", "Anchor on total compensation and market data, not just base.", "Let competing offers speak for you where you have them.", "Get the final offer in writing before you accept."] },
      { t: "callout", variant: "tip", text: "Silence is a tool. After you state your ask, stop talking and let the recruiter respond." },
    ],
  },
  "job-search/competing-offers": {
    blocks: [
      { t: "h2", text: "Leverage without bluffing" },
      { t: "p", text: "Competing offers are the strongest legitimate source of negotiating power. Present them factually and let the numbers do the work. Never fabricate an offer — it is easily checked and ends the conversation." },
      { t: "callout", variant: "note", text: "Frame it collaboratively: 'I'd prefer to join your team, and here is what would make that decision easy.' That invites the recruiter to help you rather than to defend." },
    ],
  },
  "job-search/evaluating-an-offer": {
    blocks: [
      { t: "h2", text: "Beyond the number" },
      { t: "p", text: "The highest offer is not always the best choice. Weigh the factors that will actually shape your day-to-day and your growth over the next few years." },
      { t: "ul", items: ["The team, manager, and the problems you will work on.", "Growth trajectory and how the company invests in engineers.", "Work-life balance and on-call expectations.", "Company stability and the realistic value of the equity."] },
      { t: "callout", variant: "tip", text: "Optimize for the trajectory, not just the starting salary. The role that grows you fastest usually pays off most over a career." },
    ],
  },
};
