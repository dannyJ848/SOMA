import { EducationalContent } from '../../types';

export const typeIHypersensitivityContent: EducationalContent = {
  id: 'allergy-immunology-type-i-hypersensitivity',
  type: 'concept',
  name: 'Type I Hypersensitivity (Immediate Hypersensitivity)',
  alternateNames: ['IgE-Mediated Hypersensitivity', 'Immediate Allergic Reaction', 'Atopic Reaction'],

  levels: {
    1: {
      level: 1,
      summary: 'Type I hypersensitivity is when your body quickly overreacts to something harmless like pollen or peanuts, causing allergic symptoms within minutes.',
      explanation: `Type I hypersensitivity is the most common type of allergic reaction. It happens when your immune system mistakes a harmless substance (like pollen, pet dander, or certain foods) for a dangerous invader.

**How It Works:**

1. **First Encounter (Sensitization)**
   - Your immune system meets the allergen for the first time
   - It mistakenly decides this is dangerous
   - Your body makes special proteins called IgE antibodies
   - These antibodies attach to mast cells (special cells in your tissues)

2. **Second Encounter (Reaction)**
   - When you're exposed again, the allergen sticks to the IgE antibodies
   - This triggers mast cells to release chemicals like histamine
   - These chemicals cause allergy symptoms

**Common Symptoms:**
- Sneezing, runny nose
- Itchy, watery eyes
- Skin rashes or hives
- Swelling
- In severe cases: difficulty breathing (anaphylaxis)

**Common Triggers:**
- Pollen from trees, grass, and weeds
- Dust mites
- Pet dander
- Certain foods (peanuts, shellfish, milk)
- Insect stings (bees, wasps)
- Some medications

**Why It Happens So Fast:**
These reactions happen within minutes because the mast cells are already "loaded" with IgE antibodies and ready to release their chemicals immediately.`,
      keyTerms: [
        { term: 'allergen', definition: 'A harmless substance that triggers an allergic reaction' },
        { term: 'histamine', definition: 'A chemical released during allergic reactions that causes symptoms like itching and swelling' },
        { term: 'mast cell', definition: 'A cell in your tissues that releases chemicals during allergic reactions' },
        { term: 'IgE', definition: 'A type of antibody that causes allergic reactions' },
      ],
      analogies: [
        'Think of mast cells as tiny grenades loaded with histamine. IgE antibodies are like pins. When an allergen pulls the pin, the grenade explodes and releases chemicals.',
        'Your immune system is like an overly protective guard dog that barks at harmless visitors (pollen, peanuts) as if they were burglars.',
      ],
      examples: [
        'Seasonal allergies (hay fever) happen when pollen triggers this reaction in your nose and eyes.',
        'A bee sting allergy occurs when your immune system overreacts to proteins in bee venom.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type I hypersensitivity is an IgE-mediated immune reaction where allergen exposure triggers mast cell degranulation, releasing histamine and other mediators that cause rapid allergic symptoms.',
      explanation: `Type I hypersensitivity (immediate hypersensitivity) is an allergic reaction mediated by IgE antibodies. It's the most common form of allergy and underlies conditions like hay fever, food allergies, and anaphylaxis.

**Two-Phase Process:**

**Phase 1: Sensitization (First Exposure)**
- Antigen-presenting cells (APCs) capture the allergen
- APCs present allergen to T helper cells (Th2 type)
- Th2 cells release cytokines (IL-4, IL-13)
- These cytokines stimulate B cells to produce IgE antibodies
- IgE antibodies bind to mast cells and basophils via FcεRI receptors
- The person is now "sensitized" but has no symptoms yet

**Phase 2: Effector Phase (Re-exposure)**
- Allergen cross-links IgE antibodies on mast cell surface
- This triggers mast cell degranulation
- Release of preformed mediators (histamine, tryptase)
- Synthesis of new mediators (leukotrienes, prostaglandins)

**Mediators and Their Effects:**

| Mediator | Effects |
|----------|---------|
| Histamine | Vasodilation, increased permeability, itching, bronchospasm |
| Leukotrienes | Prolonged bronchospasm, mucus secretion |
| Prostaglandins | Vasodilation, bronchoconstriction |
| Tryptase | Tissue damage, activates complement |

**Clinical Manifestations by Location:**

- **Skin**: Urticaria (hives), angioedema, eczema flares
- **Respiratory**: Allergic rhinitis, asthma, laryngeal edema
- **Gastrointestinal**: Nausea, vomiting, diarrhea, abdominal cramps
- **Cardiovascular**: Hypotension, tachycardia (in anaphylaxis)
- **Systemic**: Anaphylaxis (life-threatening)

**Timing of Reactions:**
- Immediate phase: 5-30 minutes after exposure
- Late phase: 4-8 hours later (cytokine-mediated inflammation)`,
      keyTerms: [
        { term: 'degranulation', definition: 'The release of chemical-containing granules from mast cells or basophils', pronunciation: 'dee-gran-yoo-LAY-shun' },
        { term: 'IgE antibody', definition: 'Immunoglobulin E; the antibody type responsible for allergic reactions', pronunciation: 'I-G-E' },
        { term: 'sensitization', definition: 'The process by which the immune system first develops IgE antibodies to an allergen' },
        { term: 'urticaria', definition: 'Hives; itchy, raised welts on the skin caused by histamine release', pronunciation: 'ur-tih-KAIR-ee-uh' },
        { term: 'angioedema', definition: 'Deep swelling beneath the skin, often affecting face, lips, or throat', pronunciation: 'an-jee-oh-eh-DEE-mah' },
      ],
      analogies: [
        'Sensitization is like setting a mousetrap. Re-exposure is when the mouse (allergen) triggers the trap (mast cell), releasing the chemicals.',
        'Mast cells are like water balloons filled with histamine. IgE antibodies are the "pins" on the surface. When an allergen touches enough pins, the balloon bursts.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type I hypersensitivity involves IgE-mediated activation of mast cells and basophils through FcεRI receptor cross-linking, triggering immediate release of preformed mediators and subsequent synthesis of lipid mediators and cytokines.',
      explanation: `Type I hypersensitivity represents the classic allergic response, characterized by IgE antibody production and mast cell/basophil activation upon allergen re-exposure.

**Molecular Mechanisms of Sensitization:**

**Epithelial Alarm Signals:**
- Epithelial cell damage releases alarmins: TSLP, IL-25, IL-33
- These cytokines promote Th2 differentiation
- TSLP activates dendritic cells to prime Th2 responses

**T Helper 2 (Th2) Differentiation:**
- IL-4 from basophils/ILC2s initiates Th2 skewing
- GATA3 transcription factor drives Th2 program
- Th2 cells produce IL-4, IL-5, IL-13

**IgE Class Switching:**
- IL-4 and IL-13 induce germline ε transcription
- AID-mediated class switch recombination to IgE
- CD40-CD40L interaction required for B cell survival

**Mast Cell Sensitization:**
- IgE binds to high-affinity FcεRI receptors
- FcεRI is a tetrameric receptor (αβγ2)
- Receptor-bound IgE has half-life of weeks
- Mast cells remain sensitized long-term

**Effector Phase Molecular Events:**

**Signal Transduction:**
1. Allergen cross-links ≥2 IgE-FcεRI complexes
2. Lyn kinase phosphorylates ITAMs on β and γ chains
3. Syk kinase recruitment and activation
4. Downstream signaling: PLCγ, PI3K, MAPK pathways
5. Ca²⁺ flux triggers degranulation

**Preformed Mediators (Immediate Release):**
- Histamine: H1 receptors → vasodilation, pruritus, bronchoconstriction
- Tryptase: Protease activity, complement activation
- Chymase: Angiotensin II generation
- Heparin: Anticoagulant
- TNF-α: Stored in granules

**Newly Synthesized Lipid Mediators:**
- Arachidonic acid release via PLA2
- Cyclooxygenase pathway: PGD2 (vasodilation, bronchoconstriction)
- Lipoxygenase pathway: LTC4, LTD4, LTE4 (slow-reacting substance of anaphylaxis)

**Late-Phase Reaction (4-8 hours):**
- Cytokine production: IL-4, IL-5, IL-13, TNF-α
- Eosinophil recruitment (via IL-5, eotaxins)
- Sustained inflammation and tissue damage
- Clinical: Prolonged symptoms, nasal congestion in allergic rhinitis

**Genetic and Environmental Factors:**

**Atopy:**
- Genetic predisposition to produce IgE against common allergens
- Associated genes: IL-4, IL-13, IL-4Rα, FcεRI-β, STAT6
- Strong hereditary component

**Hygiene Hypothesis:**
- Reduced microbial exposure in early life → decreased Th1/Treg development
- Favors Th2 responses and allergic sensitization
- Supported by epidemiological data on farming, siblings, day care`,
      keyTerms: [
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells and basophils', pronunciation: 'F-C-epsilon-R-one' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial cytokine promoting type 2 immunity', pronunciation: 'T-S-L-P' },
        { term: 'leukotrienes', definition: 'Lipid mediators derived from arachidonic acid that cause prolonged bronchoconstriction', pronunciation: 'loo-koh-TRY-eens' },
        { term: 'atopy', definition: 'Genetic tendency to develop IgE-mediated allergic diseases', pronunciation: 'AT-oh-pee' },
        { term: 'ITAM', definition: 'Immunoreceptor tyrosine-based activation motif; signaling domain in FcεRI' },
        { term: 'class switch recombination', definition: 'Process by which B cells change antibody isotype from IgM to IgE (or other isotypes)' },
      ],
      clinicalNotes: 'Understanding FcεRI signaling is key to therapeutic targets. Omalizumab (anti-IgE) reduces free IgE and downregulates FcεRI expression. Late-phase reactions explain why single-dose antihistamines may be insufficient for persistent allergic symptoms.',
    },
    4: {
      level: 4,
      summary: 'Type I hypersensitivity is orchestrated by Th2-polarized immunity driving IgE class switching, with allergen-induced FcεRI cross-linking activating downstream kinase cascades that trigger mast cell degranulation and lipid mediator synthesis, resulting in immediate and late-phase inflammatory responses.',
      explanation: `Type I hypersensitivity represents a Th2-dominated immune response with IgE-mediated mast cell and basophil activation. Understanding the detailed molecular pathways is essential for targeted therapeutic intervention.

**Initiation: Barrier Dysfunction and Alarmin Release**

**Epithelial Sensing:**
- Pattern recognition: TLR4 (LPS), protease-activated receptors (allergen proteases)
- Der p 1 (dust mite): Cleaves tight junctions, activates PAR-2
- Epithelial damage → release of alarmins

**Alarmin Cytokines:**
- **TSLP**: Activates DCs, promotes OX40L expression → Th2 differentiation
- **IL-25**: Activates ILC2s, promotes Th2 cytokine production
- **IL-33**: IL-1 family cytokine, activates ILC2s and mast cells via ST2 receptor

**Type 2 Innate Lymphoid Cells (ILC2s):**
- Lack antigen receptors
- Respond to alarmins (IL-25, IL-33)
- Produce IL-5, IL-13 → amplify Th2 response
- Important in allergen-naive individuals

**Detailed FcεRI Signaling Cascade:**

**Receptor Structure:**
- α chain: IgE binding (extracellular)
- β chain: Signal amplification (ITAM)
- γ chain dimer: Primary signaling (ITAMs)

**Proximal Signaling:**
1. Cross-linking → Lyn kinase activation (constitutively associated with β)
2. Lyn phosphorylates ITAMs on β and γ chains
3. Syk kinase recruited to γ ITAMs
4. Syk activates adaptor proteins: LAT, SLP-76

**Downstream Pathways:**

*Degranulation Pathway:*
- PLCγ activation → IP3 + DAG
- IP3 → Ca²⁺ release from ER
- Ca²⁺ + DAG → PKC activation
- SNARE-mediated granule fusion
- Regulated exocytosis of preformed mediators

*Lipid Mediator Synthesis:*
- PI3K activation → membrane phospholipid remodeling
- cPLA2 activation → arachidonic acid release
- COX-1/2: PGD2 production
- 5-LOX: LTA4 → LTC4 → LTD4 → LTE4

*Cytokine Gene Transcription:*
- MAPK pathway: ERK, JNK, p38
- NF-κB activation
- NFAT nuclear translocation
- Transcription of IL-4, IL-5, IL-13, TNF-α, GM-CSF

**Mediator Functions - Detailed:**

| Mediator | Receptor | Key Effects |
|----------|----------|-------------|
| Histamine | H1R | Vasodilation, vascular permeability, pruritus, bronchoconstriction |
| Histamine | H2R | Gastric acid secretion, cardiac effects |
| PGD2 | DP1, DP2 (CRTH2) | Vasodilation, Th2 chemotaxis |
| LTC4/D4/E4 | CysLT1R | Bronchoconstriction (1000x histamine), mucus secretion |
| PAF | PAFR | Platelet aggregation, bronchospasm, hypotension |
| Tryptase | PAR-2 | Fibroblast activation, bronchial hyperresponsiveness |

**Regulatory Mechanisms:**

**Negative Regulators of FcεRI Signaling:**
- SHP-1/SHP-2 phosphatases
- SHIP (5' inositol phosphatase)
- Cbl ubiquitin ligases
- FcγRIIb co-ligation inhibits mast cell activation

**Mast Cell Heterogeneity:**
- Mucosal mast cells (MCT): Tryptase+, gut/lung
- Connective tissue mast cells (MCTC): Tryptase+/chymase+, skin
- Different mediator profiles and functions`,
      keyTerms: [
        { term: 'ILC2', definition: 'Type 2 innate lymphoid cell; produces Th2 cytokines in response to epithelial alarmins without requiring antigen-specific receptors' },
        { term: 'alarmin', definition: 'Endogenous danger signal released from damaged epithelial cells that initiates type 2 immunity' },
        { term: 'CRTH2', definition: 'Chemoattractant receptor-homologous molecule on Th2 cells; receptor for PGD2' },
        { term: 'cysteinyl leukotrienes', definition: 'LTC4, LTD4, LTE4; potent bronchoconstrictors formerly called slow-reacting substance of anaphylaxis' },
        { term: 'PAF', definition: 'Platelet-activating factor; phospholipid mediator causing platelet aggregation and severe hypotension in anaphylaxis' },
        { term: 'LAT', definition: 'Linker for activation of T cells; adaptor protein in FcεRI signaling' },
      ],
      clinicalNotes: 'CysLT receptor antagonists (montelukast) block LTD4 effects in asthma. CRTH2 antagonists in development. Tryptase levels used diagnostically in anaphylaxis. Mast cell heterogeneity explains different manifestations in skin vs respiratory allergies. Understanding negative regulators explains why allergies are "all or nothing" responses.',
    },
    5: {
      level: 5,
      summary: 'Type I hypersensitivity integrates epithelial barrier sensing, alarmin-mediated ILC2 activation, Th2 polarization, and IgE class switching to establish allergic sensitization, with re-exposure triggering FcεRI-mediated mast cell activation through precisely regulated signaling cascades, releasing preformed and newly synthesized mediators responsible for immediate and late-phase clinical manifestations.',
      explanation: `A comprehensive understanding of Type I hypersensitivity requires integration of molecular mechanisms with clinical presentations, diagnostic approaches, and therapeutic strategies.

**Evolution and Purpose of Type 2 Immunity:**

**Evolutionary Context:**
- Originally evolved for parasite defense (helminths)
- IgE/mast cell/eosinophil axis effective against large parasites
- "Allergic" response is misdirected anti-parasite immunity
- Explains why allergies increase as parasitic infections decrease (hygiene hypothesis)

**Barrier Immunity Paradigm:**
- Type 2 immunity promotes epithelial repair
- Mucus production aids parasite expulsion
- IL-13 stimulates goblet cell hyperplasia
- Smooth muscle contraction expels parasites
- Same mechanisms cause pathological symptoms in allergy

**Advanced Molecular Pathophysiology:**

**Transcriptional Control of IgE Switching:**

*Germline ε Transcription:*
- STAT6 activated by IL-4/IL-13 signaling
- STAT6 binds Iε promoter
- Germline transcription opens chromatin
- AID targets switch regions for recombination

*Epigenetic Regulation:*
- Th2 cytokine gene locus (IL-4, IL-5, IL-13) on chromosome 5q31
- LCR (locus control region) coordinates expression
- GATA3 binds conserved sequences
- Histone acetylation at Th2 loci in atopic individuals

**FcεRI Signal Amplification and Termination:**

*Lipid Raft Dynamics:*
- Cross-linked FcεRI moves into lipid rafts
- Concentrates signaling molecules
- Lyn kinase enriched in rafts
- Fyn kinase provides positive feedback

*Negative Regulation:*
- SHIP dephosphorylates PIP3 → terminates PI3K signaling
- SHP-1 recruited by inhibitory receptors (FcγRIIb, CD300a)
- Protein phosphatases (PP2A) limit MAPK activation
- Cbl ubiquitin ligases target Syk for degradation

*Mast Cell Anergy:*
- Chronic low-level FcεRI signaling induces hyporesponsiveness
- May explain tolerance in non-allergic individuals
- Therapeutic potential for desensitization

**Late-Phase Reaction Mechanisms:**

**Cellular Infiltrate:**
- Eosinophils: Major effector cells (IL-5 dependent recruitment)
- Basophils: Additional IgE+ cells, IL-4 producers
- Th2 cells: Sustain cytokine environment
- Neutrophils: In some late-phase reactions

**Eosinophil Effector Functions:**
- Major basic protein (MBP): Epithelial damage
- Eosinophil cationic protein (ECP): Neurotoxic
- Eosinophil peroxidase (EPO): Oxidative damage
- Leukotrienes: Continued bronchoconstriction

**Tissue Remodeling:**
- Chronic type 2 inflammation → structural changes
- Subepithelial fibrosis
- Smooth muscle hypertrophy
- Goblet cell metaplasia
- Angiogenesis

**Clinical Correlations and Phenotypes:**

**Atopic March:**
- Sequential development of allergic diseases
- Atopic dermatitis (infancy) → Food allergy → Allergic rhinitis → Asthma
- Epicutaneous sensitization through damaged skin barrier
- TSLP overexpression in atopic skin drives systemic Th2 responses

**Local vs Systemic IgE:**
- Local allergic rhinitis: nasal IgE without systemic sensitization
- Entopy: Gut-specific IgE
- Challenges traditional diagnostic paradigms

**Severe Asthma Phenotypes:**
- T2-high: Elevated eosinophils, responds to biologics
- T2-low: Neutrophilic or paucigranulocytic, different pathophysiology
- Biomarkers: FeNO, blood eosinophils, periostin

**Therapeutic Targets - Mechanism-Based:**

| Target | Drug | Mechanism |
|--------|------|-----------|
| IgE | Omalizumab | Binds Cε3 domain, prevents FcεRI binding, downregulates FcεRI |
| IL-4Rα | Dupilumab | Blocks IL-4 and IL-13 signaling |
| IL-5 | Mepolizumab | Depletes eosinophils |
| IL-5Rα | Benralizumab | Depletes eosinophils (ADCC) |
| TSLP | Tezepelumab | Blocks upstream alarmin |
| IL-13 | Lebrikizumab | Blocks IL-13 specifically |
| CRTH2 | Fevipiprant | Blocks PGD2 signaling to Th2/ILC2 |

**Diagnostic Approach:**

*In Vivo:*
- Skin prick test: Wheal-flare response (mast cell degranulation)
- Intradermal testing: More sensitive, higher false positives
- Allergen challenge: Gold standard but time-consuming

*In Vitro:*
- Specific IgE (ImmunoCAP): Quantitative, no drug interference
- Component-resolved diagnostics: Specific molecular allergens
- Basophil activation test: Functional assay

*Biomarkers:*
- Total IgE: Low specificity, useful in ABPA
- Serum tryptase: Elevated in anaphylaxis, mastocytosis
- FeNO: Reflects IL-13-driven inflammation in airways`,
      keyTerms: [
        { term: 'atopic march', definition: 'Sequential development of allergic diseases from atopic dermatitis to food allergy, rhinitis, and asthma in childhood' },
        { term: 'component-resolved diagnostics', definition: 'Testing for IgE against specific allergen molecules rather than whole extracts, improving diagnostic precision' },
        { term: 'basophil activation test', definition: 'Flow cytometry-based functional assay measuring CD63/CD203c expression on basophils after allergen stimulation' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of eosinophilic airway inflammation' },
        { term: 'AID', definition: 'Activation-induced cytidine deaminase; enzyme essential for IgE class switch recombination' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Type I hypersensitivity = IgE-mediated = immediate hypersensitivity
- Sensitization requires prior exposure (no symptoms on first contact)
- Timing: Immediate phase (minutes), late phase (4-8 hours)
- Tryptase peaks 1-2 hours after anaphylaxis, remains elevated 3-6 hours
- Omalizumab: Binds IgE Cε3, cannot bind already FcεRI-bound IgE
- CysLT1R antagonists for aspirin-exacerbated respiratory disease
- Component diagnostics: Ara h 2 (peanut) predicts clinical reactivity better than whole extract
- "Local allergic rhinitis" can have negative skin/serum tests but positive nasal provocation`,
    },
  },

  media: [
    {
      id: 'type-i-mechanism-diagram',
      type: 'diagram',
      filename: 'type-i-hypersensitivity-mechanism.svg',
      title: 'Type I Hypersensitivity Mechanism',
      description: 'Diagram showing sensitization and effector phases of IgE-mediated allergy',
    },
    {
      id: 'mast-cell-degranulation',
      type: 'diagram',
      filename: 'mast-cell-degranulation.svg',
      title: 'Mast Cell Activation and Degranulation',
      description: 'FcεRI signaling cascade leading to mediator release',
    },
  ],
  citations: [
    {
      id: 'galli-mast-cells',
      type: 'article',
      title: 'Mast cells as sensors of the environment',
      authors: ['Galli SJ', 'Tsai M'],
      source: 'Nature Immunology',
    },
    {
      id: 'abbas-type-i',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: '19',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'condition', relationship: 'see-also', label: 'Anaphylaxis' },
    { targetId: 'allergy-immunology-food-allergies', targetType: 'condition', relationship: 'see-also', label: 'Food Allergies' },
    { targetId: 'allergy-immunology-allergic-asthma', targetType: 'condition', relationship: 'see-also', label: 'Allergic Asthma' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'allergy', 'hypersensitivity'],
    keywords: ['IgE', 'mast cells', 'histamine', 'immediate hypersensitivity', 'allergic reaction', 'type I'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default typeIHypersensitivityContent;
