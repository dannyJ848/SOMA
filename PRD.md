# The Biological Self
## Product Requirements Document

**Version:** 0.1 (Draft)
**Author:** Danny Gomez
**Date:** January 20, 2026
**Status:** Initial Draft

---

## Table of Contents

1. [Origin Story](#1-origin-story)
2. [Vision & Mission](#2-vision--mission)
3. [Core Principles](#3-core-principles)
4. [Problem Statement](#4-problem-statement)
5. [Target Users](#5-target-users)
6. [Core Features](#6-core-features)
7. [Adaptive Explanation System](#7-adaptive-explanation-system)
8. [Technical Architecture](#8-technical-architecture)
9. [Privacy & Security Model](#9-privacy--security-model)
10. [Open Source Strategy](#10-open-source-strategy)
11. [v0.1 Scope (MVP)](#11-v01-scope-mvp)
12. [Future Roadmap](#12-future-roadmap)
13. [Success Metrics](#13-success-metrics)
14. [Governance & Sustainability](#14-governance--sustainability)
15. [Risks & Mitigations](#15-risks--mitigations)

---

## 1. Origin Story

### The Freezing ICU Room (1999)

At nine years old, I lay in a freezing ICU room after my appendix burst. Doctors talked over my bed in words my Spanish-speaking mother couldn't understand. I was hooked up to machines that fed me, hydrated me, and numbed me. Nurses rushed in and out on tight schedules; they looked much more tense once the doctor stepped in.

Only the cleaning staff seemed to acknowledge the pale child in the bed and the terrified mother at his side. Their sincere smiles and nods of hello warmed the freezing room.

I became a "case study" for doctors and students. My malfunctioning body was interesting to them. But no one explained to me—a scared nine-year-old—what was happening inside my own body.

### The Medical Pipeline (2018)

Twenty years later, I made it to medical school. Then a mentor noticed patterns that led to an ADHD diagnosis. I was pushed through the medical pipeline at rapid speed—ever-increasing amphetamine doses in an effort to increase productivity. By October, I had morphed into someone unrecognizable: irritable, grandiose, impulsive.

The pharmacogenomic data that could have predicted this existed. No one connected it. No one explained it to me. The system prioritized efficiency over effectiveness. I was forced to withdraw.

### The Discovery (2025)

Seven years later, facing a "therapeutic void" where no specialist would co-manage my complex conditions (treatment-resistant ADHD + catastrophic intestinal adhesions), I turned to AI as clinical decision support. Through 54 days of a neuroketogenic protocol with rigorous self-monitoring, I discovered something no physician had ever caught:

**My "treatment-resistant ADHD" was actually severe cholinergic deficiency from 25 years of post-surgical malabsorption.**

I understood my own body because I finally had the tools to learn.

### The Insight

The healthcare system teaches physicians to understand patients.

**It never teaches patients to understand themselves.**

This project exists to change that.

---

## 2. Vision & Mission

### Vision

A world where every person can understand their own body with the same depth and clarity that a physician understands their patients—regardless of language, education, or economic status.

### Mission

To build an open-source, privacy-preserving tool that empowers patients to construct a comprehensive model of their "biological self" and receive personalized physiological education at whatever depth they choose—from 8th grade to physician level—without their data ever leaving their device or being commodified.

### Core Belief

> "To heal the body, one needs to acknowledge that it is connected to a conscious spirit or mind. Until then, physicians will be nothing more than mechanics in a body shop."

This tool bridges the divide between doctors and patients by giving patients the knowledge to understand their own bodies.

---

## 3. Core Principles

### 3.1 Privacy is Sacred

- All data stays on the user's device. Always.
- No cloud storage. No telemetry. No analytics.
- No network calls after initial setup.
- Users own their biological self completely.

### 3.2 Education, Not Diagnosis

- This tool explains physiology. It does not diagnose conditions.
- This tool teaches understanding. It does not prescribe treatment.
- This tool empowers patients. It does not replace physicians.
- Clear boundaries are enforced in every interaction.

### 3.3 Transparency Through Open Source

- All code is open source (AGPL-3.0).
- All AI models are open source and run locally.
- All medical knowledge sources are cited and inspectable.
- "Don't trust us. Read the code."

### 3.4 Accessibility is Non-Negotiable

- Free for all users, forever.
- Available in multiple languages.
- Adjustable explanation depth (8th grade → physician level).
- Works on modest hardware.

### 3.5 Mission Over Monetization

- Patient education is the goal, not profit extraction.
- No advertising. No data sales. No premium tiers that gate core features.
- Sustainability through grants, donations, and institutional support—not user exploitation.

---

## 4. Problem Statement

### The Knowledge Asymmetry

Patients are expected to make decisions about their bodies—what treatments to accept, what lifestyle changes to make, when to seek care—without understanding the underlying physiology.

Physicians spend 4 years learning how the human body works. Patients get 15-minute appointments and pamphlets.

### The Trust Gap

Patients are told "trust your doctor" but given no tools to understand what their doctor is telling them. This creates:
- Anxiety and fear from not understanding
- Poor adherence from not grasping *why* treatments matter
- Inability to advocate for themselves when the system fails them
- Vulnerability to misinformation (because anything sounds plausible when you have no foundation)

### The Access Gap

- Specialists have months-long wait times
- Insurance barriers block care
- Language barriers prevent understanding
- Geographic barriers limit access
- Those who fall through the cracks have nowhere to turn

### The Data Exploitation Problem

Every existing health app wants your data:
- To sell to advertisers
- To sell to insurance companies
- To train AI models they'll monetize
- To build profiles for "personalized" marketing

Patients have no option that is truly *theirs*.

### What Patients Need

A tool that:
1. Understands their complete health history
2. Explains their physiology in terms they can understand
3. Grows with them as their understanding deepens
4. Belongs to them completely—private, local, unexploitable
5. Is always available—not gated by appointments, insurance, or geography

---

## 5. Target Users

### Primary Users

#### 5.1 Chronic Condition Self-Managers
People living with ongoing health conditions who want to understand *why* their body behaves the way it does, not just *what* to do about it.

- Autoimmune conditions
- Metabolic disorders (diabetes, thyroid)
- Neurological conditions (ADHD, epilepsy, chronic pain)
- Gastrointestinal conditions (IBD, IBS, adhesions)
- Cardiovascular conditions

#### 5.2 Health-Curious Individuals
People without specific conditions who want to understand their lab results, their genetics, their wearable data—who want to be proactive about their health.

#### 5.3 Caregivers
Family members caring for loved ones who need to understand the conditions they're helping manage.

#### 5.4 Underserved Populations
- Low health literacy individuals who've been excluded from understanding
- Non-English speakers who face language barriers
- Low-income individuals who can't afford specialists
- Rural populations with limited healthcare access

### Secondary Users

#### 5.5 Medical Students
Using their own biological self as a learning tool—connecting textbook physiology to personal experience.

#### 5.6 Clinicians
Using the tool to help explain conditions to patients, generating explanations at appropriate complexity levels.

---

## 6. Core Features

### 6.1 The Biological Self Constructor

**Purpose:** Build a comprehensive model of the user from their health history.

**Input Sources:**
- Manual entry (guided questionnaires)
- Medical records (PDF import, FHIR where available)
- Lab results (structured import, photo/OCR)
- Imaging reports (text extraction)
- Medication history (current and past)
- Genetic/pharmacogenomic data (23andMe, etc.)
- Wearable data (Apple Health, Whoop, Oura, etc.)
- Family history
- Surgical history
- Symptom journals

**Output:** A structured, queryable model of the user's complete health state—their "biological self."

**Key Principle:** Users control exactly what goes into their biological self. Nothing is required. Everything is optional.

---

### 6.2 The Explanation Engine

**Purpose:** Answer user questions with personalized physiological explanations tied to their biological self.

**How It Works:**
1. User asks a question (e.g., "Why do I feel tired after eating?")
2. System retrieves relevant context from their biological self
3. System retrieves relevant medical knowledge (textbooks, literature)
4. System generates an explanation at the user's chosen depth level
5. Explanation is tied specifically to their history, labs, conditions

**Key Differentiator:** Not generic health information. Personalized to *you*, grounded in *your* data.

---

### 6.3 Adaptive Depth System

**Purpose:** Explain concepts at whatever level the user can understand and wants to learn.

**Levels:**
| Level | Name | Reading Level | Style |
|-------|------|---------------|-------|
| 1 | Foundation | 8th grade | Simple words, analogies, "your body is like..." |
| 2 | Developing | 10th grade | Basic terms introduced with definitions |
| 3 | Standard | 12th grade | Medical terminology with context |
| 4 | Advanced | College/Pre-med | Biochemistry, pathways, mechanisms |
| 5 | Expert | Master's/PhD | Research depth, statistical nuance |
| 6 | Clinical | Physician | Full clinical reasoning, differentials |

**Features:**
- User sets default level
- Can adjust per-question
- "Explain this term" button on any medical word
- "Go deeper" / "Simplify this" buttons
- Progressive learning mode (walks up levels over time)

---

### 6.4 The Knowledge Base

**Purpose:** Ground explanations in accurate medical knowledge.

**Sources (all open or properly licensed):**
- Open-access medical textbooks
- PubMed/PMC open access literature
- Clinical guidelines (publicly available)
- Drug databases (open sources)
- Anatomy and physiology references

**Implementation:** Local RAG (Retrieval-Augmented Generation) over curated, cited sources.

**Key Principle:** Every factual claim can be traced to a source. No hallucinated medical information.

---

### 6.5 Multilingual Support

**Purpose:** Break language barriers to health understanding.

**Approach:**
- All explanations available in user's native language
- Translation runs locally (open source translation models)
- Medical terminology translated accurately (not just word-for-word)
- Culturally appropriate explanations where relevant

**Priority Languages (v1):**
- English
- Spanish
- Mandarin Chinese
- (Expand based on community contribution)

---

### 6.6 Learning Pathways (Future)

**Purpose:** Structured curricula for understanding specific conditions or body systems.

**Examples:**
- "Understanding Your Diabetes" - 10-module course personalized to your type, medications, labs
- "How Your Heart Works" - Cardiovascular physiology tied to your cardiac history
- "Your Gut-Brain Connection" - For patients with GI + mental health comorbidities

---

## 7. Adaptive Explanation System

### Example: "Why do I get bloated after eating?"

#### User Context (from Biological Self):
- History: Appendectomy age 9 with complications, 4 documented bowel obstructions
- Current: Intestinal adhesions, slow transit
- Labs: Low ferritin (33), suggests malabsorption

#### Level 1 (8th Grade):

> "Your belly has a long tube called the intestine that moves food through your body. When you were young, you had surgery that left some scar tissue inside—like when a cut on your skin heals and leaves a scar, but on the inside.
>
> This scar tissue can make the tube narrower in some places, so food moves through more slowly. When food sits in one place too long, tiny bacteria that live in your gut start eating it and making gas—just like how bread dough rises because of yeast making bubbles.
>
> That gas is what makes your belly feel bloated and uncomfortable after you eat."

#### Level 4 (College/Pre-med):

> "Your documented history of appendectomy with peritonitis at age 9, followed by multiple small bowel obstructions, indicates significant intra-abdominal adhesion formation. These adhesions create mechanical impediments to normal peristaltic flow.
>
> The delayed intestinal transit allows for bacterial overgrowth in the small intestine (SIBO), where bacteria ferment carbohydrates before complete absorption. This fermentation produces hydrogen, methane, and CO2, causing distension.
>
> Additionally, your ferritin of 33 ng/mL suggests iron malabsorption, which may indicate compromised intestinal absorptive surface area or altered gut microbiome affecting nutrient uptake. The bloating may be exacerbated by foods high in fermentable oligosaccharides (FODMAPs)."

#### Level 6 (Physician):

> "Given your surgical history—complicated appendicitis with early sepsis requiring midline laparotomy at age 9—you have documented adhesive small bowel disease with 4 CT-confirmed SBOs and 8+ conservatively managed partial obstructions.
>
> Your postprandial bloating likely reflects multifactorial pathophysiology:
>
> 1. **Mechanical:** Adhesive bands creating functional stenosis with delayed oro-cecal transit
> 2. **Dysmotility:** Potential enteric nervous system disruption from surgical trauma and chronic inflammation affecting the migrating motor complex
> 3. **SIBO:** Stasis-mediated bacterial overgrowth with carbohydrate fermentation; consider hydrogen/methane breath testing
> 4. **Visceral hypersensitivity:** Chronic adhesive disease often produces afferent sensitization, lowering perception thresholds for distension
>
> Your ferritin of 33 suggests duodenal/proximal jejunal involvement affecting iron absorption. Consider assessing B12, folate, and fat-soluble vitamins to characterize malabsorptive pattern. The combination of adhesive disease with documented malabsorption markers raises consideration of whether low-residue dietary modifications might reduce obstructive risk while a motility-focused approach (prokinetics, ENS-targeted interventions) addresses the dysmotility component."

---

## 8. Technical Architecture

### 8.1 Design Philosophy

```
LOCAL FIRST. PRIVATE ALWAYS. OPEN EVERYTHING.
```

Every architectural decision flows from this principle.

### 8.2 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    USER'S DEVICE (100% Local)               │
│                                                             │
│  ┌─────────────────┐    ┌─────────────────────────────────┐ │
│  │  Biological     │    │         Knowledge Base          │ │
│  │  Self Store     │    │  (Medical Textbooks, PubMed,    │ │
│  │  (Encrypted     │    │   Guidelines - Local Vectors)   │ │
│  │   SQLite)       │    │                                 │ │
│  └────────┬────────┘    └───────────────┬─────────────────┘ │
│           │                             │                   │
│           ▼                             ▼                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              RAG Pipeline (Local)                       ││
│  │  - Retrieves user context from Biological Self          ││
│  │  - Retrieves relevant medical knowledge                 ││
│  │  - Constructs grounded prompt                           ││
│  └─────────────────────────┬───────────────────────────────┘│
│                            │                                │
│                            ▼                                │
│  ┌─────────────────────────────────────────────────────────┐│
│  │           Local LLM (Ollama / llama.cpp)                ││
│  │  - Llama 3.1 / Qwen 2.5 / Medical Fine-tune             ││
│  │  - Runs entirely on device                              ││
│  │  - No network calls                                     ││
│  └─────────────────────────┬───────────────────────────────┘│
│                            │                                │
│                            ▼                                │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                 User Interface                          ││
│  │  - Desktop app (Electron/Tauri)                         ││
│  │  - Chat interface for questions                         ││
│  │  - Biological Self viewer/editor                        ││
│  │  - Settings (language, depth level)                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│                    ─── NO NETWORK ───                       │
└─────────────────────────────────────────────────────────────┘
```

### 8.3 Component Specifications

#### Local AI Model
| Aspect | Specification |
|--------|---------------|
| Primary Model | Llama 3.1 8B or Qwen 2.5 7B (general), OpenBioLLM (medical) |
| Deployment | Ollama (easy) or embedded llama.cpp (performance) |
| Quantization | Q4_K_M for memory efficiency on consumer hardware |
| Context Window | 8K-32K tokens depending on model |
| Hardware Target | 16GB RAM minimum, runs on M1 Mac / modern Windows |

#### Knowledge Base / RAG
| Aspect | Specification |
|--------|---------------|
| Vector Database | ChromaDB (SQLite backend, fully local) |
| Embedding Model | BGE-base-en or Nomic-embed-text (local) |
| Chunk Strategy | Hierarchical - concepts linked to sources |
| Sources | Open-access textbooks, PubMed OA, clinical guidelines |
| Citation | Every retrieved chunk includes source citation |

#### Data Storage
| Aspect | Specification |
|--------|---------------|
| Biological Self | Encrypted SQLite database |
| Encryption | AES-256, key derived from user passphrase |
| Schema | Flexible JSON documents with typed metadata |
| Backup | User-controlled export (encrypted archive) |
| Location | User's home directory, never synced to cloud |

#### Application Shell
| Aspect | Specification |
|--------|---------------|
| Framework | Tauri (preferred - smaller, more secure) or Electron |
| Platforms | macOS, Windows, Linux |
| Updates | Optional, user-initiated, signed releases |
| Offline | 100% functional without internet after setup |

### 8.4 Minimum Hardware Requirements

| Tier | Specs | Experience |
|------|-------|------------|
| Minimum | 16GB RAM, Apple M1 / Ryzen 5 | 7B model, basic speed |
| Recommended | 32GB RAM, M2 Pro / RTX 3060 | 13B model, fast |
| Optimal | 64GB+ RAM, M3 Max / RTX 4090 | 70B model, instant |

### 8.5 Data Flow (Privacy Verification)

```
User Question
     │
     ▼
[Local Processing - NO NETWORK]
     │
     ├──► Retrieve from Biological Self (local encrypted DB)
     │
     ├──► Retrieve from Knowledge Base (local vectors)
     │
     ├──► Construct Prompt (local)
     │
     ├──► LLM Inference (local model)
     │
     ▼
Response to User
```

**Network calls: ZERO after initial setup.**

---

## 9. Privacy & Security Model

### 9.1 Data Sovereignty

- Users own their data completely
- Data never leaves the device
- No backups to cloud services
- No telemetry or analytics
- No crash reports sent anywhere
- User can delete everything with one action

### 9.2 Encryption

- Biological Self database encrypted at rest (AES-256)
- User-chosen passphrase (never transmitted)
- Optional: Hardware security key support
- Memory cleared after session

### 9.3 Auditable Privacy

- Code is open source—anyone can verify no data exfiltration
- Build process is reproducible
- Checksums for all releases
- Security audits welcomed from community

### 9.4 What We Cannot See

| Data Type | Our Access |
|-----------|------------|
| User's health history | None - never leaves device |
| User's questions | None - processed locally |
| User's biological self | None - encrypted locally |
| Usage patterns | None - no telemetry |
| Crash data | None - no reporting |

### 9.5 Threat Model

| Threat | Mitigation |
|--------|------------|
| Data breach at company | No company servers hold user data |
| Subpoena for user data | We don't have it to give |
| Sale to third parties | Nothing to sell |
| Insurance company access | Data never leaves device |
| Advertising targeting | No data collection |
| Model training on user data | Local model, no upload |

---

## 10. Open Source Strategy

### 10.1 License

**AGPL-3.0** (GNU Affero General Public License)

Why AGPL:
- Requires derivative works to also be open source
- Prevents proprietary forks
- Protects the mission even if project changes hands
- Allows commercial use but prevents capture

### 10.2 Repository Structure

```
biological-self/
├── app/                    # Desktop application (Tauri/Electron)
├── core/                   # Core logic (Rust/TypeScript)
│   ├── biological-self/    # Data model and storage
│   ├── explanation-engine/ # RAG + prompt construction
│   ├── knowledge-base/     # Medical knowledge indexing
│   └── privacy/            # Encryption, security
├── models/                 # Model configs, fine-tuning scripts
├── knowledge/              # Curated medical knowledge sources
├── docs/                   # Documentation
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE                 # AGPL-3.0
└── README.md
```

### 10.3 Contribution Guidelines

#### Code Contributions
- All PRs require review
- Tests required for new features
- Security-sensitive changes require additional review

#### Medical Content Contributions
- All medical claims must include citations
- Review by medical advisory group for core content
- Community can flag inaccuracies

#### Translation Contributions
- Native speakers preferred
- Medical terminology review required
- Cultural appropriateness review

### 10.4 Governance

**Phase 1 (Launch):** BDFL model (Danny as primary maintainer)

**Phase 2 (Growth):** Core maintainer team (3-5 people)

**Phase 3 (Maturity):** Foundation model
- Nonprofit 501(c)(3) organization
- Board with medical, technical, patient representation
- Transparent decision-making

### 10.5 Medical Advisory Board

Required for credibility and accuracy:
- Physicians (multiple specialties)
- Medical educators
- Patient advocates
- Medical ethicists
- Health literacy experts

Role: Review core content, advise on edge cases, maintain accuracy standards.

---

## 11. v0.1 Scope (MVP)

### What's In

#### Core Features
- [ ] Biological Self constructor (manual entry only)
  - Basic health history questionnaire
  - Medication list
  - Condition list
  - Lab result entry (manual)
- [ ] Explanation engine
  - Question-answering about user's health
  - Tied to biological self context
  - Grounded in medical knowledge base
- [ ] Adaptive depth (3 levels for MVP)
  - Level 1: Simple (8th grade)
  - Level 3: Standard (12th grade)
  - Level 6: Clinical (Physician)
- [ ] Local LLM integration
  - Ollama backend
  - Single supported model (Llama 3.1 8B or medical fine-tune)
- [ ] Basic knowledge base
  - Core physiology textbook content
  - Common conditions
  - Basic pharmacology
- [ ] Desktop app
  - macOS first (developer platform)
  - Windows follow-on
- [ ] Privacy implementation
  - Local encrypted storage
  - Zero network calls

#### Documentation
- [ ] User guide
- [ ] Privacy whitepaper
- [ ] Contributing guidelines
- [ ] Medical content guidelines

### What's Out (Future Versions)

- Medical record import (PDF, FHIR)
- Wearable integrations
- Genetic data import
- All 6 explanation levels
- Multilingual support
- Learning pathways
- Mobile apps
- Community features

### MVP Success Criteria

1. User can input basic health history
2. User can ask questions and receive personalized explanations
3. Explanations are grounded in cited medical knowledge
4. All processing happens locally (verifiable)
5. Works offline after initial setup
6. Installable on macOS with reasonable hardware

---

## 12. Future Roadmap

### v0.2 - Enhanced Input
- PDF medical record import (OCR + extraction)
- Lab result parsing
- Medication database integration

### v0.3 - Full Depth System
- All 6 explanation levels
- Progressive learning mode
- "Explain this term" feature

### v0.4 - Multilingual
- Spanish language support
- Translation infrastructure
- Culturally adapted explanations

### v0.5 - Integrations
- Apple Health import
- Wearable data (Whoop, Oura, etc.)
- CGM data support

### v0.6 - Advanced Knowledge
- Expanded knowledge base
- Condition-specific modules
- Drug interaction explanations

### v1.0 - Mobile
- iOS app
- Android app
- Sync between user's devices (encrypted, no cloud)

### v2.0 - Learning Pathways
- Structured curricula
- Progress tracking
- Condition-specific courses

### Long-term Vision
- Genetic/pharmacogenomic integration
- Family health history mapping
- Research contribution pathway (opt-in, anonymized)
- Clinical integration tools (patient-generated summaries)

---

## 13. Success Metrics

### User Impact (Primary)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Health literacy improvement | Self-reported understanding increase | Optional user survey |
| Question diversity | Users ask increasingly sophisticated questions | Local analytics (never uploaded) |
| Session depth | Users engage beyond surface questions | Local session data |
| Retention | Users return and build their biological self | Local usage patterns |

### Mission Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Accessibility | Used by low health literacy populations | Community feedback, testimonials |
| Language reach | Active users in 10+ languages | GitHub issues, community reports |
| Privacy preservation | Zero data breaches (we have no data) | N/A - architectural guarantee |
| Open source health | Active contributor community | GitHub metrics |

### Technical Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Explanation accuracy | <5% error rate on factual claims | Medical advisory review |
| Source grounding | >95% of claims have citations | Automated checking |
| Response latency | <30s on minimum hardware | Performance testing |
| Offline functionality | 100% features work offline | Integration testing |

### What We Will NOT Track

- Individual user health data
- Personal usage patterns uploaded anywhere
- Demographic information
- Any data that could identify users

---

## 14. Governance & Sustainability

### 14.1 Funding Model

#### Phase 1: Bootstrap
- Personal investment of time
- Small grants (Mozilla, digital health foundations)
- Community donations

#### Phase 2: Foundation Grants
- NIH SBIR/STTR (yes, available for open source)
- Robert Wood Johnson Foundation
- Ford Foundation
- Patrick J. McGovern Foundation
- Mozilla Foundation

#### Phase 3: Sustainable Nonprofit
- Individual donations (Wikipedia model)
- Institutional support licenses (hospitals, clinics)
- Consulting/implementation services
- Educational partnerships

### 14.2 What We Will Never Do

- Sell user data (we don't have any)
- Display advertisements
- Create premium tiers that gate core features
- Accept funding with strings that compromise mission
- Sell to entities that would compromise privacy

### 14.3 Legal Structure (Future)

- 501(c)(3) nonprofit organization
- Public benefit corporation as alternative
- Mission lock in corporate documents

---

## 15. Risks & Mitigations

### 15.1 Medical Accuracy Risk

**Risk:** Users receive inaccurate medical information.

**Mitigations:**
- RAG ensures grounding in cited sources
- Medical advisory board reviews core content
- Clear disclaimers that this is education, not diagnosis
- Community flagging of inaccuracies
- Version control of all medical content

### 15.2 Misuse Risk

**Risk:** Users treat educational content as medical advice and harm themselves.

**Mitigations:**
- Persistent, clear disclaimers
- Role boundaries enforced in system prompts
- Escalation recommendations for concerning queries
- "Talk to a doctor" prompts for diagnostic questions
- Terms of use clearly stating educational purpose

### 15.3 Liability Risk

**Risk:** Legal liability for medical information.

**Mitigations:**
- Clear disclaimers and terms of use
- Educational framing (like medical textbooks)
- No diagnostic or treatment recommendations
- Legal review of disclaimers
- Open source reduces single-point liability

### 15.4 Sustainability Risk

**Risk:** Project becomes unmaintained.

**Mitigations:**
- Open source allows community continuation
- Documentation enables handoff
- Foundation model distributes responsibility
- Simple architecture reduces maintenance burden

### 15.5 Model Quality Risk

**Risk:** Open source models not capable enough.

**Mitigations:**
- Models improving rapidly (frontier gap shrinking)
- RAG compensates for knowledge gaps
- Fine-tuning for specific use case
- Architecture allows model upgrades
- Education task is more forgiving than diagnosis

---

## Appendix A: Name Candidates

The working title is "The Biological Self." Final name TBD.

Candidates:
- **Biological Self** - Descriptive, meaningful
- **Soma** - Greek for "body"
- **Physis** - Greek root of "physiology"
- **Corpus** - Latin for "body"
- **BodyWise** - Accessible, clear
- **SelfMed** - Self + Medical education
- **[Open for community input]**

---

## Appendix B: Why This Matters

From the personal statement that got me into medical school the second time:

> "I believe that to heal the body, one needs to acknowledge that it is connected to a conscious spirit or mind. Until then, physicians will be nothing more than mechanics in a body shop."

> "My dedication to practicing medicine is as deep and permanent as the scars on my torso."

> "I seek to bridge not only the divide between doctors and patients but also the fractured systems that govern the outcomes of those most in need."

This project is that bridge.

---

## Appendix C: Related Work

- **OpenNotes** - Patient access to clinical notes (inspiration for transparency)
- **OpenMRS** - Open source medical records (model for open health software)
- **Wikipedia** - Open knowledge, donation-funded (sustainability model)
- **Signal** - Privacy-first, open source (privacy architecture model)
- **Khan Academy** - Free education for all (accessibility model)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-01-20 | Danny Gomez | Initial draft |

---

*This document is open source under CC-BY-4.0. Contributions welcome.*
