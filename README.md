# The Biological Self

**Understand your body like a physician understands their patients.**

An open-source, privacy-preserving app that empowers patients to build a comprehensive model of their health and receive personalized physiological education—at whatever depth they choose—without their data ever leaving their device.

---

## The Problem

The healthcare system teaches physicians to understand patients. It never teaches patients to understand themselves.

Patients make decisions about their bodies every day—what treatments to accept, what lifestyle changes to make, when to seek care—without understanding the underlying physiology. They get 15-minute appointments and pamphlets while physicians get 4 years of training.

Meanwhile, every health app wants your data: to sell to advertisers, insurance companies, or train AI models. There's no option that's truly *yours*.

## The Solution

**The Biological Self** lets you:

1. **Build your biological self** — Input your health history, labs, medications, and conditions into a comprehensive model that lives entirely on your device.

2. **Ask questions, get explanations** — Not generic health information, but personalized physiological explanations tied to *your* specific history and data.

3. **Choose your depth** — From 8th-grade simple ("your body is like...") to physician-level clinical reasoning. Meet yourself where you are.

4. **Own your data completely** — Everything runs locally. No cloud. No telemetry. No data ever leaves your device. Period.

---

## Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Privacy is Sacred** | All data stays on your device. No cloud, no analytics, no exceptions. |
| **Education, Not Diagnosis** | We explain physiology. We don't diagnose or prescribe. |
| **Open Source** | All code is AGPL-3.0. All models run locally. Verify, don't trust. |
| **Accessible** | Free forever. Multiple languages. Adjustable complexity. |
| **Mission Over Money** | Patient education is the goal, not profit extraction. |

---

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR DEVICE (100% Local)                 │
│                                                             │
│   Your Health Data ──► Biological Self Model                │
│                              │                              │
│   Your Question ─────────────┼──────────────────────┐       │
│                              │                      │       │
│                              ▼                      ▼       │
│                    ┌─────────────────┐    ┌──────────────┐  │
│                    │  Your Context   │    │   Medical    │  │
│                    │  (from model)   │    │  Knowledge   │  │
│                    └────────┬────────┘    └──────┬───────┘  │
│                             │                    │          │
│                             ▼                    ▼          │
│                    ┌─────────────────────────────────────┐  │
│                    │       Local AI (Llama/Qwen)         │  │
│                    │       Runs entirely on device       │  │
│                    └──────────────────┬──────────────────┘  │
│                                       │                     │
│                                       ▼                     │
│                          Personalized Explanation           │
│                          (at your chosen depth)             │
│                                                             │
│                      ─── NO NETWORK CALLS ───               │
└─────────────────────────────────────────────────────────────┘
```

---

## Adaptive Depth

The same question answered at different levels:

**Question:** "Why do I feel tired all the time?"

**Level 1 (8th Grade):**
> "Your body is like a car that needs fuel. Your lab tests show your iron is low—iron helps carry oxygen in your blood, and oxygen is what your cells need to make energy."

**Level 4 (College):**
> "Your ferritin of 33 ng/mL indicates depleted iron stores, impairing hemoglobin synthesis and oxygen-carrying capacity. Iron is also a cofactor for mitochondrial electron transport chain complexes."

**Level 6 (Physician):**
> "Given your surgical history with documented malabsorption, your iron deficiency is likely multifactorial: reduced duodenal absorptive surface, potential bacterial overgrowth, and chronic inflammation upregulating hepcidin..."

You choose. You can start simple and go deeper as you learn.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| AI Model | Llama 3.1 / Qwen 2.5 / Medical fine-tunes (local via Ollama) |
| Knowledge Base | RAG over open medical literature (local ChromaDB) |
| Embeddings | BGE / Nomic (local) |
| Data Storage | Encrypted SQLite (AES-256) |
| App Framework | Tauri (cross-platform desktop) |
| License | AGPL-3.0 |

**Minimum Requirements:** 16GB RAM, Apple M1 / modern Windows laptop

---

## Project Status

**Current Phase:** PRD Complete, Development Starting

See [PRD.md](./PRD.md) for the full Product Requirements Document.

### MVP Scope (v0.1)
- [ ] Biological Self constructor (manual entry)
- [ ] Explanation engine with RAG
- [ ] 3 explanation levels (Simple, Standard, Clinical)
- [ ] Local LLM integration (Ollama)
- [ ] macOS desktop app
- [ ] Zero network calls

---

## Why This Exists

This project was born from lived experience:

- A nine-year-old in a freezing ICU whose doctors talked over his bed in words his Spanish-speaking mother couldn't understand
- A medical student pushed through the psychiatric pipeline with ever-increasing amphetamines until he became unrecognizable—because no one connected the pharmacogenomic data that could have predicted it
- A patient who discovered his "treatment-resistant ADHD" was actually severe cholinergic deficiency—something no physician ever caught—because he finally had tools to understand his own body

**The healthcare system failed to explain. This project exists so others can understand.**

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) (coming soon).

### Ways to Help
- **Developers:** Core app, RAG pipeline, local AI integration
- **Medical professionals:** Content review, accuracy validation
- **Translators:** Multilingual support
- **Patients:** Feedback, testing, real-world use cases
- **Designers:** UI/UX for complex health information

---

## License

**AGPL-3.0** — Free forever. Forks must also be open source.

This ensures the project can never be captured, privatized, or turned against its mission.

---

## Contact

[Contact information to be added]

---

<p align="center">
  <i>"To heal the body, one needs to acknowledge that it is connected to a conscious spirit or mind."</i>
</p>
