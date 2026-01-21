# Phase 3: Comprehensive Physiology Learning System

## Overview
Build a complete, multi-layered 3D anatomical model with RAG-powered educational content, linking user health data (symptoms, biomarkers) to relevant anatomy, physiology, and pathology.

**Scope:** 53 user stories (US-020 to US-072) - the largest phase by far.

---

## 5-Tier Complexity Levels

All educational content is provided at 5 distinct complexity levels:

### Level 1: 8th Grade
- Simple analogies and everyday language
- "Your heart is like a pump that pushes blood through tubes"
- No medical terminology
- Focus on basic concepts

### Level 2: High School Graduate
- Basic anatomy/physiology terminology
- "The heart contracts to pump blood through arteries and veins"
- Simple cause-and-effect explanations
- Labeled diagrams

### Level 3: College Graduate
- Full anatomical terminology
- "The left ventricle contracts during systole, ejecting blood into the aorta"
- Mechanism descriptions
- Physiological pathways

### Level 4: Graduate/PhD Student
- Detailed molecular mechanisms
- "Cardiac contraction occurs via calcium-induced calcium release from the sarcoplasmic reticulum"
- Research-level detail
- Pathway interactions

### Level 5: Medical Professional
- Clinical correlations and diagnostic reasoning
- "Left ventricular systolic dysfunction presents with reduced ejection fraction, elevated BNP, and S3 gallop"
- Differential diagnosis
- Treatment mechanisms
- Board-relevant content

## Open-Source Resources to Integrate

### 3D Anatomical Models
- **Z-Anatomy** - Complete open-source 3D anatomy (CC-BY-SA)
- **BodyParts3D** (DBCLS Japan) - Detailed organ models (CC-BY-SA)
- **Visible Human Project** (NIH) - Cross-sectional imagery (public domain)
- **Open Anatomy Project** - Collaborative anatomical atlases

### Medical Literature & Knowledge Bases
- **OpenStax Anatomy & Physiology** - Full free textbook
- **StatPearls** - 9000+ peer-reviewed medical articles (CC-BY)
- **PubMed Central Open Access** - Research articles
- **MedlinePlus** (NIH) - Consumer health information
- **Radiopaedia** - Radiology reference (CC-BY-NC-SA)
- **Wikipedia Medical** - Surprisingly comprehensive, well-cited

### Ontologies & Terminologies
- **SNOMED CT** - Clinical terminology
- **ICD-11** - Disease classification
- **Human Phenotype Ontology (HPO)** - Symptom/phenotype terms
- **Foundational Model of Anatomy (FMA)** - Anatomical ontology
- **Gene Ontology** - Molecular functions
- **Reactome** - Biological pathways (open)
- **LOINC** - Lab test codes

### Drug & Biomarker Databases
- **RxNorm** - Drug nomenclature
- **DrugBank Open** - Drug mechanisms
- **HMDB** (Human Metabolome Database) - Biomarkers
- **DisGeNET** - Gene-disease associations

---

## Sub-Phases

### Phase 3A: 3D Foundation (US-020 to US-027)
Three.js scene, camera controls, model loading, Z-Anatomy integration, Visible Human Project cadaver cross-sections, layer system, selection/highlighting, clipping planes.

### Phase 3B: Content System (US-028 to US-029)
5-tier complexity level system, multi-level content data model.

### Phase 3C: Knowledge Infrastructure (US-030 to US-041)
ChromaDB vector DB, local embedding model, OpenStax A&P ingestion, StatPearls ingestion, histology database, histology viewer, FMA/HPO ontology integration, RAG pipeline, AI citations, content viewer, structure info panels.

### Phase 3D: Anatomical Systems (US-042 to US-053)
All 11 body systems with 5-level educational content:
- Skeletal (206 bones)
- Muscular (~650 muscles)
- Cardiovascular (heart, vessels)
- Respiratory (airways, lungs)
- Digestive (GI tract, liver, pancreas)
- Nervous (CNS, PNS, autonomic)
- Endocrine (glands, hormones)
- Urinary (kidneys, nephrons)
- Reproductive (male/female)
- Lymphatic/Immune (lymph, spleen, thymus)
- Integumentary (skin, appendages)
- System interconnections

### Phase 3E: Biomarker-Anatomy Integration (US-054 to US-059)
Lab-to-organ mapping, biomarker pathway visualization, lipid metabolism, glucose metabolism, electrolyte balance, one-click lab exploration.

### Phase 3F: Symptom-Anatomy Integration (US-060 to US-065)
Symptom-to-anatomy mapping, differential diagnosis explorer, pain referral patterns, symptom clusters, symptom-triggered learning, region-based chief complaints.

### Phase 3G: Personalized Learning & AI Cueing (US-066 to US-072)
Personalized health context, learning progress tracking, bookmarks/notes, quiz mode, clinical pearls, AI learning recommendations, precise AI cueing system.

---

## User Stories

### Phase 3A: 3D Foundation

#### US-020: Three.js Scene Setup
**Description:** Initialize Three.js renderer with WebGL, set up scene graph, lighting, and camera for anatomical visualization.

**Acceptance Criteria:**
- Three.js scene renders in dedicated view
- Ambient + directional lighting for anatomical clarity
- Perspective camera with reasonable FOV
- Responsive canvas sizing
- Performance target: 60fps on modern hardware
- Typecheck passes

**Priority:** 1

---

#### US-021: Camera Controls
**Description:** Implement orbit controls for rotating, zooming, and panning the 3D model. Add preset view buttons (anterior, posterior, lateral, superior, inferior).

**Acceptance Criteria:**
- Mouse drag to rotate
- Scroll wheel to zoom
- Right-drag or two-finger to pan
- Preset view buttons with smooth transitions
- Reset view button
- Touch support for mobile
- Typecheck passes

**Priority:** 2

---

#### US-022: Base Anatomical Model Loading
**Description:** Load Z-Anatomy or BodyParts3D base model (full body). Implement GLTF/GLB loader with loading progress indicator.

**Acceptance Criteria:**
- Load complete body model from local assets
- Loading progress bar
- Model centered and scaled appropriately
- Handle loading errors gracefully
- Lazy load high-detail models
- Typecheck passes

**Notes:** Start with Z-Anatomy GLTF exports. Models should be pre-processed and stored in assets/models/

**Priority:** 3

---

#### US-023: Anatomical Layer System
**Description:** Implement layer visibility toggles for major body systems: skeletal, muscular, organs, cardiovascular, nervous, lymphatic, integumentary.

**Acceptance Criteria:**
- Layer toggle panel with checkboxes
- Smooth fade in/out transitions
- Multiple layers can be visible simultaneously
- Layer ordering (e.g., skin over muscles over skeleton)
- "Solo" mode to show only one layer
- Preset combinations (e.g., "Cardiovascular focus")
- Typecheck passes

**Priority:** 4

---

#### US-024: Structure Selection & Highlighting
**Description:** Click on anatomical structures to select them. Highlight selected structure with outline or glow effect. Show structure name tooltip on hover.

**Acceptance Criteria:**
- Raycasting for click detection
- Hover highlight effect
- Selection highlight (different from hover)
- Tooltip showing structure name (FMA term)
- Multi-select with shift-click
- Clear selection button
- Typecheck passes

**Priority:** 5

---

#### US-025: Cross-Section Slicing
**Description:** Implement clipping planes to create cross-sectional views (axial, sagittal, coronal). Slider to move slice position.

**Acceptance Criteria:**
- Three orthogonal clipping planes
- Slider controls for each plane position
- Toggle planes on/off
- Smooth slice animation
- Optional: Show 2D cross-section image alongside
- Typecheck passes

**Priority:** 6

---

### Phase 3B: Knowledge Infrastructure

#### US-026: Local Vector Database Setup
**Description:** Set up ChromaDB (or similar) for local vector storage. Create schema for medical content embeddings.

**Acceptance Criteria:**
- ChromaDB running locally (embedded mode)
- Collections for: anatomy, physiology, pathology, pharmacology
- Metadata schema (source, chapter, system, structure_id)
- CRUD operations for embeddings
- Persistence across app restarts
- Typecheck passes

**Notes:** Use sentence-transformers for embeddings, run locally for privacy.

**Priority:** 7

---

#### US-027: OpenStax A&P Ingestion
**Description:** Parse and ingest OpenStax Anatomy & Physiology textbook. Chunk by section, generate embeddings, store with metadata.

**Acceptance Criteria:**
- Download/parse OpenStax A&P (HTML or EPUB)
- Chunk into ~500 token segments with overlap
- Preserve chapter/section hierarchy in metadata
- Generate embeddings using local model
- Store in vector DB with source attribution
- Progress indicator during ingestion
- Typecheck passes

**Notes:** OpenStax A&P is ~1200 pages. Pre-process once, store embeddings.

**Priority:** 8

---

#### US-028: StatPearls Ingestion
**Description:** Ingest StatPearls open-access medical articles. Focus on anatomy, physiology, and pathology articles.

**Acceptance Criteria:**
- Fetch StatPearls articles via their API or bulk download
- Filter to relevant categories
- Parse article structure (sections, key points)
- Generate embeddings per section
- Store with article metadata (authors, date, topic)
- ~5000+ articles indexed
- Typecheck passes

**Priority:** 9

---

#### US-029: Ontology Integration
**Description:** Load FMA (Foundational Model of Anatomy) and HPO (Human Phenotype Ontology) for structured anatomical and symptom relationships.

**Acceptance Criteria:**
- Parse FMA OWL file for anatomical hierarchy
- Parse HPO for symptom/phenotype relationships
- Build graph structure for traversal
- Link anatomical terms to 3D model structures
- Link symptoms to anatomical regions
- Query functions: parents, children, related terms
- Typecheck passes

**Priority:** 10

---

#### US-030: RAG Query System
**Description:** Implement retrieval-augmented generation pipeline. Query vector DB, retrieve relevant chunks, inject into LLM prompt.

**Acceptance Criteria:**
- Semantic search across all collections
- Configurable top-k retrieval (default 5)
- Re-ranking for relevance
- Context window management (fit within model limits)
- Source citations in responses
- Fallback when no relevant content found
- Typecheck passes

**Priority:** 11

---

#### US-031: Literature-Grounded AI Responses
**Description:** Enhance AI chat to use RAG for physiology/anatomy questions. Show source citations with responses.

**Acceptance Criteria:**
- Detect anatomy/physiology questions
- Retrieve relevant content from vector DB
- Include sources in system prompt
- AI response includes inline citations
- "Sources" section lists referenced materials
- Link citations to original content viewer
- Typecheck passes

**Priority:** 12

---

#### US-032: Content Viewer
**Description:** Full-text viewer for retrieved content. Display original textbook sections, articles with proper formatting.

**Acceptance Criteria:**
- Modal or side panel for content viewing
- Render formatted text (headers, lists, emphasis)
- Display images/diagrams from source
- Highlight the specific passage that was cited
- Navigation within source document
- Link to external source URL
- Typecheck passes

**Priority:** 13

---

### Phase 3C: Anatomical Systems

#### US-033: Skeletal System Module
**Description:** Complete skeletal system with all 206 bones. Educational content for each bone: name, location, articulations, clinical relevance.

**Acceptance Criteria:**
- All bones individually selectable
- Bone info panel: name, type, location, articulations
- Related muscles (attachments)
- Common fracture types
- Clinical correlations (osteoporosis, etc.)
- Age-related changes
- RAG-enhanced explanations
- Typecheck passes

**Priority:** 14

---

#### US-034: Muscular System Module
**Description:** Complete muscular system with major muscle groups. Origin, insertion, action, innervation for each muscle.

**Acceptance Criteria:**
- Major muscles individually selectable (~600)
- Muscle info: origin, insertion, action, innervation
- Antagonist/synergist relationships
- Blood supply
- Common injuries/pathologies
- Exercise/movement correlations
- Typecheck passes

**Priority:** 15

---

#### US-035: Cardiovascular System Module
**Description:** Heart, arteries, veins, capillary beds. Cardiac anatomy, conduction system, major vessels with territories.

**Acceptance Criteria:**
- 4-chamber heart model with valves
- Conduction system visualization
- Coronary arteries with territories
- Major arteries and veins
- Vessel info: supplies/drains which organs
- Blood flow animation option
- ECG correlation points
- Cardiac cycle explanation
- Typecheck passes

**Priority:** 16

---

#### US-036: Respiratory System Module
**Description:** Airways, lungs, lobes, bronchial tree, alveoli. Gas exchange physiology, ventilation mechanics.

**Acceptance Criteria:**
- Upper and lower respiratory tract
- Lung lobes and segments
- Bronchial tree to terminal bronchioles
- Alveolar structure (microscopic view)
- Diaphragm and respiratory muscles
- Ventilation mechanics animation
- Gas exchange explanation
- Spirometry correlation
- Typecheck passes

**Priority:** 17

---

#### US-037: Digestive System Module
**Description:** Complete GI tract from mouth to anus. Accessory organs (liver, pancreas, gallbladder). Digestion and absorption physiology.

**Acceptance Criteria:**
- GI tract segments individually selectable
- Accessory organs with ducts
- Histology views (villi, crypts)
- Digestive enzyme locations
- Absorption sites for nutrients
- Gut motility explanation
- Microbiome overview
- Common pathologies per region
- Typecheck passes

**Priority:** 18

---

#### US-038: Nervous System Module
**Description:** Brain, spinal cord, peripheral nerves, autonomic system. Functional areas, pathways, dermatomes.

**Acceptance Criteria:**
- Brain with lobes, gyri, functional areas
- Brainstem nuclei
- Spinal cord segments
- Major peripheral nerves
- Dermatome map
- Cranial nerves with functions
- Autonomic nervous system
- Major pathways (corticospinal, sensory)
- Reflex arcs
- Typecheck passes

**Priority:** 19

---

#### US-039: Endocrine System Module
**Description:** All endocrine glands and hormones. Feedback loops, target organs, hormone actions.

**Acceptance Criteria:**
- All endocrine glands selectable
- Hormones produced by each gland
- Target organs for each hormone
- Feedback loop visualizations
- Hypothalamic-pituitary axes
- Hormone cascade explanations
- Lab test correlations (TSH, cortisol, etc.)
- Typecheck passes

**Priority:** 20

---

#### US-040: Urinary System Module
**Description:** Kidneys, ureters, bladder, urethra. Nephron structure, filtration, reabsorption, secretion.

**Acceptance Criteria:**
- Kidney cross-section (cortex, medulla)
- Nephron detailed view
- Glomerular filtration explanation
- Tubular reabsorption sites
- Juxtaglomerular apparatus
- Bladder and voiding mechanism
- Electrolyte handling
- GFR and kidney function labs
- Typecheck passes

**Priority:** 21

---

#### US-041: Reproductive System Module
**Description:** Male and female reproductive anatomy. Gametogenesis, hormonal cycles, pregnancy basics.

**Acceptance Criteria:**
- Male reproductive organs
- Female reproductive organs
- Menstrual cycle visualization
- Spermatogenesis/oogenesis
- Hormonal regulation
- Pregnancy overview
- Common pathologies
- Relevant lab correlations
- Typecheck passes

**Priority:** 22

---

#### US-042: Lymphatic & Immune System Module
**Description:** Lymph nodes, vessels, spleen, thymus. Immune cell types, immune response basics.

**Acceptance Criteria:**
- Lymphatic vessel network
- Major lymph node groups
- Spleen and thymus anatomy
- Lymph node internal structure
- Immune cell types and functions
- Innate vs adaptive immunity
- Inflammatory response
- Immunodeficiency correlations
- Typecheck passes

**Priority:** 23

---

#### US-043: Integumentary System Module
**Description:** Skin layers, appendages (hair, nails, glands). Wound healing, thermoregulation.

**Acceptance Criteria:**
- Skin layer cross-section
- Epidermis sublayers
- Dermis structures
- Hair follicle anatomy
- Sweat and sebaceous glands
- Nail anatomy
- Wound healing phases
- Skin lesion types
- Typecheck passes

**Priority:** 24

---

#### US-044: System Interconnections
**Description:** Visualize how systems interact. Show multi-system pathways (e.g., renin-angiotensin across kidney/heart/adrenal).

**Acceptance Criteria:**
- Cross-system pathway visualizations
- Highlight involved structures across systems
- Example pathways: RAAS, HPT axis, enterohepatic circulation
- Interactive pathway exploration
- Pathophysiology when pathway disrupted
- Typecheck passes

**Priority:** 25

---

### Phase 3D: Biomarker-Anatomy Integration

#### US-045: Lab-to-Organ Mapping Database
**Description:** Create comprehensive mapping of lab tests to relevant organs, systems, and pathways.

**Acceptance Criteria:**
- Map each common lab test to:
  - Primary organ(s) involved
  - Affected body systems
  - Metabolic pathways
- Cover: CBC, CMP, lipid panel, thyroid, liver, kidney panels
- Extensible for additional tests
- Typecheck passes

**Priority:** 26

---

#### US-046: Biomarker Pathway Visualization
**Description:** When viewing a lab result, show the metabolic/physiological pathway involved with anatomical context.

**Acceptance Criteria:**
- Click lab result → show pathway diagram
- Highlight involved organs in 3D model
- Pathway steps with enzyme/transport details
- Normal vs abnormal pathway states
- Clinical significance of abnormalities
- Typecheck passes

**Priority:** 27

---

#### US-047: Cholesterol & Lipid Pathways
**Description:** Deep dive on lipid metabolism. Liver production, intestinal absorption, LDL/HDL transport, atherosclerosis.

**Acceptance Criteria:**
- Lipid absorption in intestine
- Liver lipid metabolism
- Lipoprotein transport visualization
- Atherosclerosis plaque formation
- Statin mechanism of action
- Link to user's lipid panel results
- Typecheck passes

**Priority:** 28

---

#### US-048: Glucose & Metabolic Pathways
**Description:** Glucose metabolism, insulin signaling, diabetes pathophysiology.

**Acceptance Criteria:**
- Glucose absorption and transport
- Insulin secretion (pancreas)
- Insulin receptor signaling
- Glycolysis, gluconeogenesis, glycogenesis
- Diabetes Type 1 vs Type 2 pathophysiology
- Link to user's glucose/HbA1c results
- Typecheck passes

**Priority:** 29

---

#### US-049: Electrolyte & Fluid Balance
**Description:** Sodium, potassium, calcium regulation. Kidney and hormonal control mechanisms.

**Acceptance Criteria:**
- Electrolyte handling in nephron
- Aldosterone and ADH mechanisms
- Calcium/PTH/Vitamin D axis
- Acid-base balance basics
- Clinical correlations (hypo/hypernatremia, etc.)
- Link to user's electrolyte results
- Typecheck passes

**Priority:** 30

---

#### US-050: Complete Lab-Anatomy Linkage
**Description:** For any lab result in user's data, one-click access to anatomical and pathway context.

**Acceptance Criteria:**
- Lab result card has "Learn More" button
- Opens 3D view focused on relevant anatomy
- Shows pathway diagram
- Explains what result means physiologically
- Suggests related structures to explore
- Typecheck passes

**Priority:** 31

---

### Phase 3E: Symptom-Anatomy Integration

#### US-051: Symptom-to-Region Mapping
**Description:** Map symptoms to anatomical regions and structures. Support differential diagnosis exploration.

**Acceptance Criteria:**
- Symptom → possible anatomical sources
- Weight by likelihood/commonality
- Consider referred pain patterns
- Link to user's logged symptoms
- Typecheck passes

**Priority:** 32

---

#### US-052: Differential Diagnosis Explorer
**Description:** For a given symptom, show possible diagnoses with anatomical visualization of each.

**Acceptance Criteria:**
- Symptom input or select from user's logs
- List differential diagnoses ranked by likelihood
- Click diagnosis → highlight affected anatomy
- Show pathophysiology for each differential
- Red flags / alarm symptoms highlighted
- Typecheck passes

**Priority:** 33

---

#### US-053: Pain Referral Patterns
**Description:** Visualize referred pain patterns. Show how visceral pain projects to somatic regions.

**Acceptance Criteria:**
- Cardiac referred pain pattern
- Gallbladder referred pain
- Appendix referred pain
- Kidney/ureter pain patterns
- Explanation of viscerosomatic convergence
- Interactive: click organ → show referral zone
- Typecheck passes

**Priority:** 34

---

#### US-054: Symptom Clusters & Syndromes
**Description:** Recognize symptom patterns that suggest specific syndromes or conditions.

**Acceptance Criteria:**
- Define common symptom clusters
- Match user's symptoms to clusters
- Suggest possible syndromes
- Anatomical/physiological explanation
- When to seek medical attention
- Typecheck passes

**Priority:** 35

---

#### US-055: Symptom-Triggered Learning
**Description:** When user logs a symptom, automatically offer relevant educational content.

**Acceptance Criteria:**
- Symptom entry triggers "Learn About This" prompt
- One-click access to:
  - Relevant anatomy in 3D
  - Pathophysiology explanation
  - Related conditions
  - When to see a doctor
- Non-intrusive suggestion (can dismiss)
- Typecheck passes

**Priority:** 36

---

#### US-056: Body Region Chief Complaints
**Description:** For each body region, show common chief complaints and their anatomical basis.

**Acceptance Criteria:**
- Select region → see common symptoms
- Each symptom links to underlying anatomy
- Historical context (user's past symptoms in region)
- Educational content for region-specific issues
- Typecheck passes

**Priority:** 37

---

### Phase 3F: Personalized Learning

#### US-057: Health Data Context Integration
**Description:** AI and educational content personalized based on user's conditions, medications, and history.

**Acceptance Criteria:**
- Educational content references user's specific conditions
- Medication mechanisms explained in user's context
- Lab trends interpreted personally
- "Relevant to you" badges on content
- Privacy-preserving (all local)
- Typecheck passes

**Priority:** 38

---

#### US-058: Learning Progress Tracking
**Description:** Track what educational content user has viewed. Show progress through body systems.

**Acceptance Criteria:**
- Mark structures/topics as "viewed"
- Progress indicators per body system
- "Continue learning" suggestions
- Spaced repetition reminders
- Learning streak tracking (optional)
- Typecheck passes

**Priority:** 39

---

#### US-059: Bookmarks & Notes
**Description:** Allow users to bookmark structures and add personal notes for studying.

**Acceptance Criteria:**
- Bookmark any structure or content
- Add personal notes to bookmarks
- Bookmarks list with search
- Notes sync with structure selection
- Export notes as markdown/PDF
- Typecheck passes

**Priority:** 40

---

#### US-060: Quiz Mode
**Description:** Self-assessment quizzes on anatomy and physiology. Generate questions from content.

**Acceptance Criteria:**
- Structure identification quizzes
- Function/relationship questions
- AI-generated questions from RAG content
- Score tracking
- Review incorrect answers with explanations
- Focus on user's weak areas
- Typecheck passes

**Priority:** 41

---

#### US-061: Clinical Correlation Highlights
**Description:** For medical students, highlight clinically relevant anatomy ("high-yield" content).

**Acceptance Criteria:**
- "Clinical Pearl" badges on structures
- Common exam topics flagged
- Surgical landmarks highlighted
- Physical exam correlations
- Board-relevant content tags
- Typecheck passes

**Priority:** 42

---

#### US-062: Learning Recommendations Engine
**Description:** AI-powered suggestions for what to learn next based on health data and learning history.

**Acceptance Criteria:**
- Analyze user's conditions/symptoms
- Identify knowledge gaps
- Suggest relevant topics to explore
- "Because you have X, you might want to learn about Y"
- Weekly learning digest
- Typecheck passes

**Priority:** 43

---

## Technical Architecture

### Frontend
- Three.js / @react-three/fiber for 3D rendering
- @react-three/drei for helpers (OrbitControls, etc.)
- OpenSeadragon for histology deep zoom
- React components for UI panels
- Web Workers for model parsing and embedding

### Backend (Local)
- ChromaDB for vector storage (embedded mode)
- @xenova/transformers for local embeddings (all-MiniLM-L6-v2)
- Existing Ollama integration for LLM
- SQLite for structured content storage

### Data Pipeline
- Pre-process Z-Anatomy models to optimized GLTF with Draco compression
- Chunk and embed OpenStax/StatPearls at build time
- Generate 5-tier content using AI transformation
- Ontology graphs (FMA, HPO) in indexed format

### Storage (Full Detail from Start)
- 3D models (Z-Anatomy): ~1.5-2GB compressed GLTF
- Visible Human Project cadaver images: ~5-10GB (downsampled)
- Histology images: ~500MB-1GB
- Vector DB (all content embedded): ~3-5GB
- Ontologies (FMA, HPO): ~200MB
- **Total estimate: ~10-18GB**

---

## Estimated Scope
- **53 user stories** (US-020 to US-072)
- **7 sub-phases** (3A-3G)
- **5 complexity levels** for all educational content
- Significantly larger than Phase 1 + Phase 2 combined
- This is the largest and most comprehensive phase

---

## Decisions Made
1. **Full detail from start** - No progressive loading; include everything immediately
2. **Include cadaver cross-sections** - Visible Human Project integration confirmed
3. **Include histology** - Complete tissue type coverage with annotations
4. **5 complexity levels** - 8th grade → high school → college → graduate → MD
5. **Extensive linking** - Symptoms ↔ biomarkers ↔ anatomy ↔ pathways
6. **Precise AI cueing** - Proactive, context-aware educational prompts
