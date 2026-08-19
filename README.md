# Study Solutions — Landing Page

Marketing and product landing page for **Study Solutions**, an AI-powered voice tutoring platform. Built as a standalone frontend to communicate the product's value before a user enters the live app.

**Live link:** [study-soln-home.vercel.app](https://study-soln-home.vercel.app/)

**Actual app:** [studysolution.pankajkumar.app](https://studysolution.pankajkumar.app)

---

## What's in this repo

A React + Vite landing page, no backend. The page demonstrates the UI shell of the product — how a live voice session looks, feels, and responds — without requiring a running AI backend.

### Sections

| Component | Purpose |
|---|---|
| `Navbar` | Glassmorphism nav with hamburger on mobile. Links to the live app. |
| `Hero` | Animated text flip headline (`LayoutTextFlip`) cycling through product verbs |
| `LiveDemoCard` | Simulated voice session UI — mic toggle, LIVE badge, static tutor transcript |
| `BentoGrid` | Latency comparison bars + AI persona selector |
| `Architecture` | Deepgram / Supabase / GPT-4 stack cards |
| `InstantFeedback` | Feature callouts with a voice waveform screenshot |
| `Workflow` | Vapi SDK + ElevenLabs + Next.js stack overview |
| `Footer` | — |

### UI Components

| Component | What it does |
|---|---|
| `SoundWave` | 5-bar Framer Motion visualiser with staggered organic timing |
| `DottedGlow` | Canvas-based ambient background — dots shimmer via triangle-wave alpha |
| `Text-Flip` | `layoutId`-animated word swap with blur/slide transition |

---

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (utility classes, `18px` base font)
- **Framer Motion 13** (soundwave bars, text flip, LIVE badge pulse)
- **react-icons** (mic, call-end, settings, nav icons)

---

## Running locally

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173` by default.

---

## Design decisions

See [`DECISIONS.md`](./DECISIONS.md) for a full writeup of:
1. Why component-local state over a global store
2. Trade-offs made under the time limit (static transcript vs. live stream)
3. Where Framer Motion API reference was used
4. Systems thinking — how the live app's Vapi/WebRTC layer handles resilience

---

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── styles/
│   └── global.css
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── LiveDemoCard.jsx
│   │   ├── BentoGrid.jsx
│   │   ├── Architecture.jsx
│   │   ├── InstantFeedback.jsx
│   │   └── Workflow.jsx
│   └── ui/
│       ├── SoundWave.jsx
│       ├── DottedGlow.jsx
│       ├── Text-Flip.jsx
│       └── StativWave.jsx
└── lib/
    └── utils.js
```
