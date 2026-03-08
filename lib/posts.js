// lib/posts.js
// Central data store for all blog content and taxonomy

export const PILLARS = {
  judgment: {
    slug: 'judgment',
    label: 'Judgment',
    color: '#e87722',
    description: 'Knowing when — and when not — to use AI.',
  },
  execution: {
    slug: 'execution',
    label: 'Execution',
    color: '#2a7fca',
    description: 'Briefing, prompting, iterating, and extracting.',
  },
  trust: {
    slug: 'trust',
    label: 'Trust',
    color: '#22a86e',
    description: 'Verifying output to protect your professional credibility.',
  },
  application: {
    slug: 'application',
    label: 'Application',
    color: '#9b59b6',
    description: 'AI competence applied to your specific role and function.',
  },
  landscape: {
    slug: 'landscape',
    label: 'The Landscape',
    color: '#c0392b',
    description: "What's changing, what it means, and what to do about it.",
  },
}

export const POSTS = [
  {
    slug: 'five-questions-before-using-ai',
    title: 'The 5 Questions to Ask Before Using AI on Any Work Task',
    pillar: 'judgment',
    excerpt:
      'Before you open a chat window, there is a professional question worth asking. Most people skip it. Here is how to build the habit that separates effective AI users from reckless ones.',
    readTime: '7 min read',
    date: 'March 4, 2026',
    featured: true,
    content: `
Effective AI use begins before you type a single word into a prompt window. It begins with a professional judgment call that most people never make consciously — and that omission is exactly why so much AI-assisted work falls short of professional standards.

The five questions below are not a checklist to follow mechanically. They are the mental habit of a competent AI professional. Run through them quickly at first. Over time they become second nature.

## 1. What is the actual output I need?

This sounds obvious. It is not. Most people open an AI tool with a vague sense of what they want — "help me write this email" or "summarize this report" — without specifying what a successful result actually looks like.

Before you prompt, define the output with professional precision. What format? What length? What audience? What tone? What level of technical detail? The clarity you bring to this question directly determines the quality of what you get back.

A project manager asking for "a summary" will get something generic. A project manager asking for "a 5-bullet executive summary of this document, written for a CFO who has not read the background materials, focused on cost implications and timeline risks" will get something useful.

## 2. How much does it matter if this is wrong?

This is the risk assessment question, and it is the most important one on the list. The answer shapes everything that follows — how much scrutiny you apply, whether you need human review, and whether AI is the right tool at all.

Low-stakes tasks — an internal draft, a brainstorm list, a first-pass outline — can tolerate more error. The consequences of a mistake are low, and the efficiency gains are high. Use AI aggressively here.

High-stakes tasks — a client-facing analysis, a compliance document, a performance review, any communication that carries your professional signature — demand a different standard. AI can still help, but the verification discipline required is proportionally higher.

## 3. Do I have the expertise to evaluate the output?

This question is the one professionals most frequently skip, and it is the one that produces the most embarrassing failures. AI output can be fluent, confident, and completely wrong. If you cannot evaluate the output, you cannot use it responsibly.

A marketing professional who asks AI to draft campaign copy can evaluate it — they know what good looks like. The same professional asking AI to analyze statistical significance in A/B test results may not be able to spot an error in the reasoning.

Know the boundary of your own expertise. When you are operating near that boundary, increase your verification effort accordingly. When you are clearly beyond it, get a qualified human review.

## 4. What context does AI need that it does not have?

AI operates only on what you give it. It does not know your organization's tone of voice, your manager's preferences, the political sensitivity of a situation, or the history behind a project. The gap between what AI knows and what the task actually requires is where most AI output fails to meet professional standards.

Before prompting, inventory the context gap. What does this task require that AI cannot infer from a generic prompt? Then provide it. This is not extra work — it is the difference between output you can use and output you have to rewrite from scratch.

## 5. Is AI actually the right tool for this?

Sometimes the answer is no. Not because AI is incapable, but because the task requires something AI cannot provide: your specific institutional knowledge, your relationship with the reader, your professional judgment about a nuanced situation, or simply the credibility that comes from your name on something you wrote yourself.

The professional who uses AI for everything is not more efficient. They are outsourcing their judgment. The professional who knows when to reach for AI and when to do the work themselves — that is the person who builds a durable reputation in an AI-enabled world.

---

These five questions take less than a minute once they are internalized. The investment in building this habit will pay dividends across every AI-assisted task you ever take on.
    `,
  },
  {
    slug: 'brief-before-prompt',
    title: 'The Brief Before the Prompt: Why Context Is Your Most Valuable Input',
    pillar: 'execution',
    excerpt:
      'The most common reason AI output disappoints has nothing to do with the model. It has to do with the inputs. Here is how professionals brief AI the way they would brief a talented colleague.',
    readTime: '8 min read',
    date: 'March 1, 2026',
    featured: true,
    content: `
There is a professional skill that predates AI by decades. It is the ability to brief a colleague — to give someone everything they need to do excellent work on your behalf, without requiring constant hand-holding or producing output you have to tear apart and rebuild.

That skill is now the most important skill in practical AI competence. And most people using AI professionally have never developed it.

## The Briefing Mental Model

When you hire a talented consultant, you do not walk into the room and say "write me a strategy." You give them context. You explain the business situation, the audience, the constraints, the history, what has already been tried, what success looks like, what failure looks like, and what matters most.

AI deserves the same treatment — not because it has feelings about being under-briefed, but because the quality of its output is directly proportional to the quality of the context you provide.

Most AI users treat prompts as commands. Professional AI users treat them as briefs.

## The Six Elements of a Strong Brief

**1. Role and context**
Tell AI who it is working for and in what context. "You are helping a senior HR director at a mid-sized manufacturing company draft a communication to frontline managers about a new performance review process." This single sentence transforms generic output into something contextually appropriate.

**2. The specific deliverable**
Define the output with precision. Format, length, structure, and any specific sections or elements that must be included. Do not assume AI will infer these from context — it will default to its own judgment, which may not match yours.

**3. The audience**
Who will read this? What do they already know? What do they care about? What concerns might they bring to this? The more specifically you define the audience, the more appropriately AI will calibrate its tone, vocabulary, and emphasis.

**4. Constraints and requirements**
What must be included? What must be avoided? Are there regulatory constraints, brand guidelines, sensitivities, or non-negotiables? State them explicitly. AI will not know to ask.

**5. Tone and register**
Formal or conversational? Authoritative or collaborative? Empathetic or direct? Reference examples if you have them — "similar in tone to the Q3 update I sent last month" or "less formal than a press release, more formal than a Slack message."

**6. The goal behind the deliverable**
What is this piece of work actually trying to accomplish? A memo is not just a memo — it is an attempt to get a specific group of people to understand something, believe something, or do something. When AI understands the goal behind the deliverable, it makes better choices about how to construct the output.

## What This Looks Like in Practice

Here is the difference between a typical prompt and a professional brief for the same task.

**Typical prompt:** "Write an email to my team about the new AI policy."

**Professional brief:** "Write an email from me (a department head) to my team of 12 analysts, announcing that we are introducing a new internal AI use policy effective next month. The tone should be reassuring but clear — people are anxious about what this means for their jobs, and I want to address that directly. The email should: (1) acknowledge that this is a significant change, (2) explain the three key things the policy does and does not permit, (3) emphasize that this is about using AI well, not restricting it, and (4) invite questions. Keep it under 300 words. Avoid corporate jargon."

The second prompt will produce something you can actually send with minimal editing. The first will produce something generic that you will spend more time revising than if you had written it yourself.

## The Return on Briefing Investment

The time spent on a strong brief is not wasted time. It is redirected time. You are doing the thinking upfront rather than doing it reactively after you have received unusable output.

For routine tasks you do repeatedly, invest once in building a reusable brief template. The first time takes ten minutes. Every subsequent use takes thirty seconds and produces consistently strong output.

This is what professional AI execution actually looks like: not prompt tricks, not jailbreaks, not clever hacks — just the disciplined application of professional communication skills to a new kind of collaborator.
    `,
  },
  {
    slug: 'ai-hallucinations-what-professionals-need-to-know',
    title: 'AI Hallucinations at Work: What They Are and What They Cost',
    pillar: 'trust',
    excerpt:
      'AI does not know when it does not know. That is not a technical quirk — it is a professional risk that requires a specific kind of discipline to manage. Here is what you need to understand.',
    readTime: '6 min read',
    date: 'February 26, 2026',
    featured: true,
    content: `
In 2023, a New York attorney submitted a legal brief containing citations to six court cases that did not exist. The cases had been generated by ChatGPT. The attorney had not verified them. The consequences — sanctions, public embarrassment, disciplinary proceedings — were severe and entirely preventable.

That story circulated widely. Most professionals read it, nodded, and moved on. What they did not do was change their behavior, because they assumed the lesson was "do not use AI for legal citations." The actual lesson is broader and more important than that.

## The Nature of the Problem

AI language models do not retrieve facts from a database. They generate text that is statistically likely to be correct based on their training data. This means they can produce output that is fluent, confident, structurally plausible, and completely fabricated — and they will do so without any signal that something is wrong.

This is what professionals call a hallucination: output that is presented with full confidence and is factually incorrect. The term is imprecise but the phenomenon is real and consequential.

The professional risk is not that AI will obviously fail. It is that AI will fail in ways that are difficult to detect without domain expertise and careful verification.

## Where Hallucinations Are Most Likely

Not all AI tasks carry equal hallucination risk. Understanding the risk distribution helps you allocate your verification effort appropriately.

**High risk:** Specific facts, statistics, dates, names, citations, legal or regulatory references, technical specifications, medical information, financial data. Any claim that depends on a specific piece of information being accurate.

**Moderate risk:** Summaries of documents you have provided (AI can misread or misrepresent), analysis that requires accurate data as inputs, historical context, claims about how specific organizations or policies work.

**Lower risk:** Structural tasks (organizing information you have provided), stylistic tasks (rewriting for tone), brainstorming (where accuracy is not the point), tasks where you can evaluate the output from your own expertise.

Notice that lower risk does not mean no risk. It means the risk is more manageable with normal professional review.

## The Three Categories of Consequential Error

**Fabricated specifics.** Made-up statistics, citations, studies, names, or data points that sound legitimate. These are the classic hallucinations and the easiest to miss because they are indistinguishable from real ones in the output.

**Plausible distortions.** Real information that has been slightly altered — a real statistic with the wrong year, a real policy with a key detail changed, a real person's position described inaccurately. These are harder to catch than pure fabrications because part of the information is correct.

**Confident extrapolations.** AI filling in gaps with what seems likely, presented as fact rather than inference. This is particularly common when you ask AI to analyze or explain something it has incomplete information about.

## A Practical Verification Standard

The goal is not to verify everything — that would eliminate most of the efficiency benefit. The goal is to verify claims that would cause professional damage if wrong.

Before any AI-assisted work leaves your desk, ask: which specific claims in this output, if wrong, would embarrass me, harm someone else, or create legal or professional liability? Those claims require independent verification. Everything else can be reviewed at your normal professional standard.

This is not a new skill. It is the same judgment you apply when reviewing any work product. AI simply adds a new category of risk that requires explicit attention: the possibility that something sounds completely authoritative and is completely invented.

The attorney in 2023 had the skills to verify citations. What he lacked was the discipline to apply them to AI-generated output. That discipline is the professional standard the current moment demands.
    `,
  },
  {
    slug: 'ai-for-managers-practical-guide',
    title: 'AI for Managers: Where It Genuinely Helps and Where It Gets You in Trouble',
    pillar: 'application',
    excerpt:
      'Management work is relationship-dense, judgment-intensive, and high-stakes. That makes AI both highly useful and genuinely risky. Here is an honest map of where it adds value and where it does not.',
    readTime: '9 min read',
    date: 'February 22, 2026',
    featured: true,
    content: `
Management is one of the most AI-resistant professional roles — and one of the most AI-enhanced ones. Understanding which is which is the entire challenge.

The work of managing people involves two fundamentally different categories of activity. The first is cognitive and informational: drafting communications, structuring plans, synthesizing information, preparing for conversations, documenting decisions. The second is relational and judgmental: reading a person's actual state in a 1:1, deciding how to handle a sensitive situation, building trust over time, making calls about people's potential.

AI is genuinely useful for the first category. It cannot help with the second — and attempting to use it there creates problems that are worse than the inefficiency you are trying to solve.

## Where AI Adds Real Value for Managers

**Drafting and communication.**
The volume of writing that management requires — performance feedback, project updates, policy communications, meeting agendas, difficult conversation follow-ups — is one of the highest-leverage places AI can help. A strong brief produces a first draft that you edit and personalize, rather than a blank page you fill from scratch.

The key is that you do the personalizing. AI gives you the structure and the language. You give it the specific knowledge of this person, this situation, and this relationship. Never send AI-drafted performance feedback without substantial personalization. Your people will feel the absence of your voice.

**Preparation for difficult conversations.**
Ask AI to help you think through a challenging conversation before you have it. Give it the situation, what you want to accomplish, what you are worried about, and how the other person is likely to respond. Ask it to play devil's advocate. Ask it what you might be missing. Use it as a thinking partner, not an answer machine.

**Synthesizing complex information.**
When you need to understand a large document, a long email thread, a set of project reports, or the background on an unfamiliar topic before a meeting, AI is an excellent first-pass synthesizer. Treat it as a starting point for your own review, not a replacement for it.

**Creating structure.**
Org design frameworks, meeting structures, feedback templates, project planning approaches — AI can give you a solid starting structure that you then adapt to your specific context. Structural thinking is one of AI's genuine strengths.

## Where AI Gets Managers in Trouble

**Performance evaluations and ratings.**
The fact that AI can produce a performance review that sounds specific and professional does not mean that performance review is appropriate to send. Performance feedback that matters is built on direct observation over time. AI cannot observe. It can only generate plausible-sounding text based on what you tell it. If you brief AI with "high performer, strong on delivery, needs to develop stakeholder communication skills," it will produce a review that sounds detailed — but it will be a generic template dressed up as personalized feedback. Your people deserve better, and your professional credibility depends on giving it to them.

**Disciplinary and sensitive HR situations.**
Do not use AI to draft PIPs, termination communications, or sensitive HR documentation without substantial legal and HR review, and do not rely on AI for advice on how to handle complex people situations. The stakes are too high, the context-dependence is too great, and the consequences of getting it wrong are too serious.

**Reading the room.**
No amount of AI assistance will tell you that someone's engagement has dropped, that a team member is heading toward burnout, or that the dynamic in a meeting shifted when you made a particular decision. These signals require presence and attention. Managers who are overreliant on AI-assisted efficiency may find they have traded away the attentiveness their role requires.

**Anything that requires your authentic judgment.**
Your organization is not paying you to optimize prompts. It is paying you for your specific professional judgment about complex situations. The most important thing AI can do for your management practice is free up time and cognitive energy so you can exercise that judgment more deliberately — not replace it.
    `,
  },
  {
    slug: 'what-ai-competence-actually-means',
    title: 'What AI Competence Actually Means — and Why Most Definitions Miss the Point',
    pillar: 'landscape',
    excerpt:
      'The conversation about AI skills has been dominated by the wrong questions. Competence is not about knowing which tools to use. It is about something harder and more durable than that.',
    readTime: '5 min read',
    date: 'February 18, 2026',
    featured: false,
    content: `
Ask ten professionals what AI competence means and you will get ten answers that center on tools. Which models to use, which prompts work best, which integrations to set up. These are not wrong answers. They are just answers to the wrong question.

Tool knowledge is perishable. The model that was state-of-the-art when you learned it will be superseded in six months. The integration that seemed important will be replaced by something that works differently. Building your professional AI identity around tool fluency is building on sand.

Real AI competence is the set of professional skills that allow you to work effectively with AI regardless of which specific tools are current. It is transferable, durable, and genuinely valuable. It is also harder to develop than memorizing a list of prompt templates.

## The Three Dimensions That Actually Matter

**Judgment** is the ability to read a professional situation and determine where AI adds value versus where it introduces risk. This requires understanding the task, the stakes, the audience, and your own expertise well enough to make a calibrated decision. It also requires intellectual honesty about the limitations of AI output — not reflexive skepticism, but appropriate scrutiny.

**Execution** is the ability to get consistently useful output from AI through clear briefing, precise prompting, intelligent iteration, and understanding how different types of tasks require different approaches. This is a learnable skill, but it requires deliberate practice, not just repeated use. Many people use AI daily and execute poorly, because use without reflection does not produce improvement.

**Trust** — and here the word is used precisely — is the professional discipline of verification. It is the habit of asking, before anything leaves your desk, which specific claims in this output require independent confirmation. It is the internalized standard that your name on something means you stand behind it, regardless of how it was produced.

These three dimensions are not equally developed in most AI users. Most people have some execution capability and almost no judgment or trust discipline. That gap is where professional risk lives.

## Why This Framing Matters

Organizations are now making decisions about which professionals they trust with AI-assisted work, which teams get access to enterprise tools, and which individuals are positioned as AI leaders internally. Those decisions are not being made based on who knows the most prompts. They are being made based on who demonstrates sound judgment, produces reliable output, and has not yet created a visible embarrassment.

The professionals who will build durable reputations in AI-enabled organizations are not the ones who adopted earliest. They are the ones who adopted most thoughtfully.

That distinction — between early adoption and thoughtful adoption — is what the J.E.T. Model is designed to support. Not a shortcut to AI fluency, but a framework for developing the professional skills that make AI use genuinely valuable rather than just frequent.
    `,
  },
  {
    slug: 'prompt-engineering-for-professionals',
    title: 'Prompt Engineering Is a Misleading Term. Here Is What Professionals Actually Need.',
    pillar: 'execution',
    excerpt:
      'The term "prompt engineering" has convinced many professionals that getting good AI output is a technical skill. It is not. It is a communication skill — and you already have the foundations.',
    readTime: '7 min read',
    date: 'February 14, 2026',
    featured: false,
    content: `
The framing of "prompt engineering" has done professionals a disservice. The word engineering implies something technical, systematic, and specialized — a domain for people who are comfortable with code and comfortable with complexity. It has made many capable professionals assume that getting good AI output requires skills they do not have.

It does not. Getting good AI output requires communication skills, professional judgment, and domain expertise — all things that experienced professionals already possess. The challenge is applying those existing skills in a new context.

## What Prompting Actually Is

A prompt is a brief. It is the set of instructions, context, constraints, and objectives you give to a capable but uninformed collaborator. Every experienced professional knows how to do this, because every experienced professional has at some point needed to delegate work to someone who did not already understand the full context.

The reason so many professionals get poor AI output is not that they lack technical skill. It is that they delegate to AI the way they would delegate to someone they expect to already know everything relevant — with minimal context, vague objectives, and no quality specifications.

## The Communication Framework That Transfers Directly

Strong professional communication has always required clarity about four things: who you are talking to, what you want them to do, what they need to know to do it well, and what a good result looks like. These same four elements structure effective AI prompting.

**Who AI is in this context.** Establishing a role for AI is not a magic trick. It is context-setting. "You are helping a communications director at a nonprofit draft a donor report" gives AI meaningful information about the appropriate register, assumed knowledge, and professional standards for the output.

**What you want it to produce.** Specific, not general. "A 400-word executive summary" rather than "a summary." "Three alternative subject lines" rather than "some options." Precision in specifying the deliverable directly improves the quality of what you receive.

**What it needs to know.** This is the brief. Background, constraints, audience, tone, what has already been decided, what is still open, what is sensitive, what is non-negotiable. The more relevant context you provide, the less AI has to infer — and inference is where quality degrades.

**What good looks like.** Standards, examples, reference points. "Similar in length and tone to the attached document." "At a reading level appropriate for frontline managers, not executives." "No jargon, no corporate clichés, no passive voice." Explicit quality standards produce output closer to your actual standard.

## The One Habit That Improves Output More Than Any Other

Stop accepting first drafts as final drafts. The most powerful prompting technique is iteration: reviewing what AI produced, identifying specifically what is not working, and giving precise instructions for improvement.

"Make the opening more direct — it buries the key point in the third sentence."

"The tone is too formal for this audience. Rewrite in a warmer register."

"The second section is too long relative to its importance. Cut it by half."

This is editorial direction. Every professional who has worked with writers, designers, or analysts knows how to give it. Apply the same muscle to AI and your output quality will improve substantially within a single session.

The professionals who get consistently excellent AI output are not the ones who have memorized complex prompt formulas. They are the ones who treat AI like a capable collaborator that needs clear direction — and who have the professional confidence to give it.
    `,
  },
]

export function getAllPosts() {
  return POSTS.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getFeaturedPosts() {
  return POSTS.filter((p) => p.featured).slice(0, 4)
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null
}

export function getPostsByPillar(pillar) {
  return POSTS.filter((p) => p.pillar === pillar)
}

export function getRelatedPosts(currentSlug, pillar, limit = 3) {
  return POSTS.filter(
    (p) => p.slug !== currentSlug && p.pillar === pillar
  ).slice(0, limit)
}
