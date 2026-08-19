# DECISIONS.md — Study Solutions Landing Page

---

## 1. Why Component-Local State Over a Shared Store

**Decision:** All session state — `isMicOn` in `LiveDemoCard` and `menuOpen` in `Navbar` — is kept local to each component with `useState`.

**Why this, not that:**
The obvious alternative is lifting state into a shared React Context or a library like Zustand. That makes sense when multiple unrelated components need the same data. Here, mic state only affects the controls inside `LiveDemoCard`, and menu state only affects `Navbar`'s dropdown. Pulling either into a global store would add a provider wrapper in `App.jsx` and a layer of indirection for data that never leaves a single component tree.

Local state also makes the components self-contained and droppable anywhere — no provider dependency to satisfy. Collocating state with the component that owns it is the right default until a cross-component need actually appears.

**Rejected because:** A store is overhead without benefit when state doesn't cross component boundaries.

---

## 2. Trade-off Made Under the Time Limit

**What I kept simple:** The `LiveDemoCard` shows a static AI tutor quote rather than a live-streamed transcript. The quote (`"Let's break down the Schrödinger equation..."`) is hardcoded text rendered in a styled box, not a character-by-character stream from a backend.

**Why:** Setting up a real WebSocket or SSE feed requires a running AI backend, auth, and latency handling — none of which exist in this landing page context. The static quote communicates the UI pattern (transcript area, tutor identity, live badge) clearly without that infrastructure.

**With a real week:** I'd connect the transcript box to an actual streaming response from the AI model. The UI structure is already in place — the quote `<p>` becomes a controlled string updated by `onmessage` events. The LIVE badge, mic toggle, and End Session controls stay exactly as-is. No structural change needed, just swapping the data source.

---

## 3. Where I Used AI Tools

I used AI assistance in one specific area: **learning and applying Framer Motion animation patterns**.

Framer Motion's `motion.span` with keyframe arrays (`animate={{ height: [...] }}`) and the `repeat: Infinity` + `repeatType: 'reverse'` transition config was new to me. I used AI to understand the API, then built the `SoundWave` component myself — five bars each with distinct height sequences and staggered durations to produce a realistic, organic-looking audio visualiser. Each bar's timing (`1.5s`, `1.85s`, `1.25s`, etc.) was tuned manually until it looked natural.

The pulsing dot on the LIVE badge in `LiveDemoCard` (`animate={{ scale: [1, 2, 1] }}`) came from the same learning. Everything else in the project — component structure, Tailwind layout, mic toggle logic, Navbar hamburger menu, font scaling in `global.css`, and the `bg-zinc-950/80 backdrop-blur-md` glassmorphism on the Navbar — was written directly.

---

## 4. On Systems Thinking — Scope Clarification

This deliverable is a **landing page**, not a data ingestion pipeline. The rubric axis about "surviving a source blocking mid-run" applies to a backend data system. That system is the **live production app** at `studysolution.pankajkumar.app`, not this repo.

Here's where the systems thinking actually lives in the production stack, and the decisions made there:

**Voice stream resilience (Vapi Web SDK + WebRTC)**
The real-time audio pipeline uses Vapi's Web SDK, which manages WebRTC under the hood. The specific decision: use Vapi as an orchestration layer rather than connecting directly to Deepgram + ElevenLabs separately. The reason — Vapi handles ICE candidate negotiation, reconnects on network blips, and switches between Deepgram STT and ElevenLabs TTS within a single session contract. Building that coordination layer from scratch would mean owning reconnect logic, jitter buffers, and cross-service auth — undifferentiated plumbing. Vapi absorbs it.

**The ingestion this landing page doesn't have**
There is no scraping, polling, or ETL in this repo. The landing page is intentionally infrastructure-free — its job is to communicate the product, not run it.
