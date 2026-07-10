// Authored lesson content for the Behavioral Interview course. All prose is
// original and written for this project. Keyed by `${course}/${lessonSlug}` and
// merged into LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const BEHAVIORAL_CONTENT: Record<string, LessonContent> = {
  "behavioral/why-behavioral-matters": {
    blocks: [
      { t: "h2", text: "It is not a formality" },
      { t: "p", text: "Candidates often treat the behavioral round as a soft checkbox after the 'real' coding and design interviews. That is a mistake. At most companies the behavioral score carries the same weight as a technical score, and a weak behavioral signal can sink an otherwise strong loop." },
      { t: "p", text: "The round exists because engineering is a team sport. Strong problem-solving does not matter if you cannot collaborate, take feedback, or navigate disagreement. Interviewers are trying to predict what it will actually be like to work next to you." },
      { t: "callout", variant: "note", text: "For senior and staff roles the behavioral round is frequently the deciding factor, because scope, influence, and judgment are hard to test with a whiteboard problem." },
    ],
  },
  "behavioral/what-interviewers-look-for": {
    blocks: [
      { t: "h2", text: "The signals behind the questions" },
      { t: "p", text: "Every behavioral question is a proxy for a trait the company cares about. Learning to hear the underlying signal lets you answer the real question instead of the literal one." },
      { t: "table", head: ["Question theme", "Signal being measured"], rows: [["Conflict / disagreement", "Can you disagree respectfully and still ship?"], ["Failure / mistakes", "Do you own outcomes and learn?"], ["Ambiguity", "Can you make progress without perfect information?"], ["Impact / ownership", "Do you drive results beyond your assigned task?"]] },
      { t: "ul", items: ["**Ownership** — you treat problems as yours even when they are not strictly assigned.", "**Collaboration** — you make the people around you more effective.", "**Growth** — you reflect honestly and change your behavior.", "**Communication** — you can explain complex situations clearly and concisely."] },
    ],
  },
  "behavioral/star-method": {
    blocks: [
      { t: "h2", text: "Structure beats improvisation" },
      { t: "p", text: "STAR is a framework for telling a story that lands. Without structure, answers ramble, bury the point, or drift into team accomplishments instead of your own. STAR keeps you focused and lets the interviewer follow along." },
      { t: "ul", items: ["**Situation** — one or two sentences of context. Where, when, what team.", "**Task** — the specific problem or goal you owned.", "**Action** — what *you* did, step by step. This is the bulk of the answer.", "**Result** — the outcome, quantified where possible, plus what you learned."] },
      { t: "callout", variant: "tip", text: "Spend the most time on Action and use 'I' not 'we'. Interviewers score you, not your team. If you say 'we' the whole time they cannot tell what you actually did." },
      { t: "p", text: "A common failure is spending 90 seconds on Situation and 10 on Action. Flip that. Context should be just enough to make your actions make sense." },
    ],
  },
  "behavioral/building-your-stories": {
    blocks: [
      { t: "h2", text: "Prepare a story bank" },
      { t: "p", text: "You cannot invent good stories under pressure. Build a bank of 8 to 12 concrete stories from your experience ahead of time, each with a clear STAR structure. Most behavioral questions are variations that map onto stories you already have." },
      { t: "ol", items: ["List your most significant projects, conflicts, failures, and wins from the last few years.", "Write each as a tight STAR narrative with real numbers.", "Tag each story with the themes it covers (leadership, conflict, ambiguity, failure).", "Practice out loud until each fits in 2 to 3 minutes."] },
      { t: "callout", variant: "tip", text: "One strong story can answer several questions. A project rescue might cover ownership, dealing with ambiguity, and influencing without authority all at once." },
    ],
  },
  "behavioral/ownership": {
    blocks: [
      { t: "h2", text: "Acting like an owner" },
      { t: "p", text: "Ownership means treating the outcome as yours even when the task, the code, or the failure was not originally your responsibility. Interviewers want evidence that you step in rather than stepping around." },
      { t: "ul", items: ["You noticed a problem nobody assigned to you and fixed it.", "You followed a project through to real impact, not just to 'done'.", "You took responsibility for a failure instead of pointing at circumstances."] },
      { t: "callout", variant: "warn", text: "Avoid stories where 'ownership' meant doing everything yourself and burning out the team. True ownership includes bringing others along." },
    ],
  },
  "behavioral/bias-for-action": {
    blocks: [
      { t: "h2", text: "Speed with judgment" },
      { t: "p", text: "Many decisions are reversible, and waiting for perfect information costs more than a wrong-but-recoverable choice. Bias for action is about making the reversible calls quickly while still being careful with the one-way doors." },
      { t: "p", text: "The strongest stories show you moved fast *and* were thoughtful about risk — you shipped a scrappy version to learn, then hardened it once the direction was validated." },
      { t: "callout", variant: "note", text: "Distinguish reversible from irreversible decisions in your answer. That distinction is exactly the judgment interviewers are listening for." },
    ],
  },
  "behavioral/dealing-with-ambiguity": {
    blocks: [
      { t: "h2", text: "Progress without a spec" },
      { t: "p", text: "Real work rarely comes with clear requirements. Ambiguity questions probe whether you freeze or whether you create structure — breaking a vague goal into concrete next steps, making assumptions explicit, and validating early." },
      { t: "ol", items: ["Clarify what you can, then state your assumptions out loud.", "Break the fuzzy problem into smaller, answerable pieces.", "Pick the highest-leverage piece and make visible progress.", "Reassess as new information arrives."] },
    ],
  },
  "behavioral/customer-obsession": {
    blocks: [
      { t: "h2", text: "Working backwards from the user" },
      { t: "p", text: "Customer obsession means grounding technical decisions in real user impact rather than internal convenience or resume-driven tech choices. Strong answers connect a concrete engineering decision to a measurable improvement for the people using the product." },
      { t: "ul", items: ["You pushed back on a feature that looked good internally but hurt users.", "You dug into support tickets or metrics to find the real pain.", "You chose the boring, reliable solution because it served users better."] },
    ],
  },
  "behavioral/tell-me-about-yourself": {
    blocks: [
      { t: "h2", text: "Your 90-second pitch" },
      { t: "p", text: "This is almost always the opener, and it sets the tone. It is not an invitation to recite your resume chronologically. It is a chance to frame a narrative: where you are, how you got here, and why this role is the logical next step." },
      { t: "ol", items: ["**Present** — your current role and what you focus on.", "**Path** — a sentence or two on the experience that shaped you.", "**Future** — why this specific role and team excites you now."] },
      { t: "callout", variant: "tip", text: "Keep it under 90 seconds and end by pointing toward the role. That gives the interviewer a natural thread to pull on next." },
    ],
  },
  "behavioral/biggest-challenge": {
    blocks: [
      { t: "h2", text: "Choosing the right challenge" },
      { t: "p", text: "Pick a challenge that was genuinely hard *and* where your actions clearly drove the resolution. Technical difficulty alone is not compelling — the interviewer wants to see how you think, prioritize, and persevere." },
      { t: "callout", variant: "warn", text: "Do not pick a challenge that was resolved mostly by someone else or by luck. The Action section must be dominated by things you did." },
    ],
  },
  "behavioral/conflict-with-teammate": {
    blocks: [
      { t: "h2", text: "Disagreement without drama" },
      { t: "p", text: "Conflict questions are not about whether you were right. They test whether you can separate the person from the problem, seek to understand, and reach an outcome the team can commit to." },
      { t: "ul", items: ["Show you listened to understand the other view, not just to rebut it.", "Ground the resolution in shared goals or data, not in who has more authority.", "End with a healthy working relationship, not a grudge."] },
      { t: "callout", variant: "note", text: "'I was right and they eventually agreed' is a weak ending. 'We found a better option than either of us started with' is a strong one." },
    ],
  },
  "behavioral/a-time-you-failed": {
    blocks: [
      { t: "h2", text: "Owning a real failure" },
      { t: "p", text: "The trap is picking a fake failure ('I work too hard'). Interviewers see through that instantly. Pick a real failure with real consequences — and spend most of the answer on what you learned and how you changed." },
      { t: "ol", items: ["State the failure plainly and take responsibility.", "Explain the root cause honestly.", "Describe the concrete change you made afterward.", "Show evidence the change stuck — a later situation you handled better."] },
    ],
  },
  "behavioral/disagreed-with-manager": {
    blocks: [
      { t: "h2", text: "Disagree and commit" },
      { t: "p", text: "This question checks whether you can push back respectfully on someone with authority, and then fully commit once a decision is made. Both halves matter." },
      { t: "callout", variant: "tip", text: "The ideal arc: you raised your concern with data, your manager decided, and you committed wholeheartedly — even if the outcome later proved you right. Committing after losing the argument is the hard part they want to see." },
    ],
  },
  "behavioral/proudest-project": {
    blocks: [
      { t: "h2", text: "Pride grounded in impact" },
      { t: "p", text: "Choose a project where you can articulate both the technical substance and the impact it had. Pride should come from outcomes and craft, not just effort. Be ready for deep follow-ups on the decisions you made." },
      { t: "ul", items: ["What was the impact, in numbers or user outcomes?", "What was the hardest decision and how did you make it?", "What would you do differently now?"] },
    ],
  },
  "behavioral/leadership-scope-questions": {
    blocks: [
      { t: "h2", text: "Demonstrating scope and impact" },
      { t: "p", text: "For senior roles, interviewers probe the blast radius of your work: how many people, teams, or systems your decisions affected. Scope is not seniority of title — it is the reach of your influence and judgment." },
      { t: "ul", items: ["Influencing decisions beyond your immediate team.", "Setting technical direction others followed.", "Mentoring that measurably leveled up teammates."] },
      { t: "callout", variant: "note", text: "Match your stories to the level you are targeting. A staff-level loop wants org-wide impact; a mid-level loop wants solid project ownership." },
    ],
  },
  "behavioral/questions-to-ask": {
    blocks: [
      { t: "h2", text: "Your questions are also evaluated" },
      { t: "p", text: "The questions you ask signal how you think and what you value. Thoughtful questions leave a strong final impression; generic ones waste the opportunity." },
      { t: "ul", items: ["How does the team decide what to work on?", "What does success look like in this role in the first six months?", "What is the biggest technical challenge the team faces right now?", "How does the team handle disagreement on technical direction?"] },
      { t: "callout", variant: "warn", text: "Avoid questions easily answered by the company website. Ask things only an insider could answer." },
    ],
  },
  "behavioral/handling-tricky-questions": {
    blocks: [
      { t: "h2", text: "When the question is a trap" },
      { t: "p", text: "Some questions are designed to see how you handle pressure: gaps in your resume, why you are leaving, a weakness. Answer honestly and briefly, then pivot to the positive without sounding evasive." },
      { t: "table", head: ["Tricky question", "Approach"], rows: [["Why are you leaving?", "Focus on what you are moving toward, not away from."], ["Biggest weakness?", "A real one, plus how you actively manage it."], ["Gap in resume?", "State it plainly and move on; do not over-explain."]] },
    ],
  },
  "behavioral/remote-interview-tips": {
    blocks: [
      { t: "h2", text: "Nailing the virtual round" },
      { t: "p", text: "Video interviews add friction that can undercut a strong candidate. Small logistics failures read as lack of preparation, so control what you can." },
      { t: "ul", items: ["Test your camera, mic, and connection beforehand.", "Look at the camera, not the screen, to simulate eye contact.", "Have your story-bank notes nearby but do not read from them.", "Keep the background clean and the lighting on your face."] },
    ],
  },
};
