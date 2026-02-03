import { EducationalContent } from '../../types';

export const environmentalAllergiesContent: EducationalContent = {
  id: 'allergy-immunology-environmental-allergies',
  type: 'condition',
  name: 'Environmental Allergies',
  alternateNames: ['Allergic Rhinitis', 'Hay Fever', 'Allergic Conjunctivitis', 'Aeroallergen Sensitivity'],

  levels: {
    1: {
      level: 1,
      summary: 'Environmental allergies occur when your immune system overreacts to normally harmless substances like pollen, dust mites, mold, or pet dander, causing sneezing, runny nose, and itchy eyes.',
      explanation: `Environmental allergies, commonly called hay fever, happen when your immune system mistakes harmless airborne particles for dangerous invaders.

**Common Allergens:**
1. **Pollen** - From trees, grasses, and weeds
2. **Dust mites** - Tiny bugs living in bedding and carpets
3. **Mold** - Grows in damp areas
4. **Pet dander** - Skin flakes from cats, dogs, and other animals
5. **Cockroach particles** - Common in urban areas

**Seasonal vs Year-Round:**
- **Seasonal**: Tree pollen (spring), grass pollen (summer), weed pollen (fall)
- **Year-round (Perennial)**: Dust mites, mold, pet dander

**Common Symptoms:**
- Sneezing
- Runny or stuffy nose
- Itchy, watery eyes
- Itchy throat or ears
- Postnasal drip
- Fatigue

**Treatment Options:**
- **Avoidance**: Stay inside when pollen is high, use air filters
- **Medications**: Antihistamines, nasal sprays
- **Allergy shots**: Help build tolerance over time

**Tips for Managing Allergies:**
- Check pollen counts before going outside
- Keep windows closed during high pollen seasons
- Use dust mite covers on bedding
- Wash bedding weekly in hot water
- Consider HEPA air purifiers`,
      keyTerms: [
        { term: 'allergen', definition: 'A substance that triggers an allergic reaction' },
        { term: 'pollen', definition: 'Fine powder from plants that causes seasonal allergies' },
        { term: 'dust mites', definition: 'Tiny creatures in house dust that cause year-round allergies' },
        { term: 'antihistamine', definition: 'Medicine that blocks histamine to reduce allergy symptoms' },
      ],
      analogies: [
        'Your immune system is like an overly sensitive smoke detector that goes off for harmless steam from a shower.',
        'Pollen is like glitter - once it\'s in the air, it gets everywhere and is hard to avoid.',
      ],
      examples: [
        'Every spring, a child starts sneezing and has itchy eyes when trees release their pollen.',
        'Someone with a cat allergy develops a stuffy nose within minutes of entering a home with cats.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic rhinitis and conjunctivitis result from IgE-mediated responses to aeroallergens, presenting with nasal and ocular symptoms that significantly impact quality of life and may coexist with asthma as part of the unified airway concept.',
      explanation: `Environmental allergies represent IgE-mediated inflammation of nasal and ocular mucosa in response to aeroallergens, affecting up to 30% of the population.

**Classification:**

**By Temporal Pattern:**
- Seasonal allergic rhinitis (SAR): Tree, grass, weed pollen
- Perennial allergic rhinitis (PAR): Dust mite, mold, pet, cockroach
- Episodic: Sporadic exposure (e.g., visiting home with pets)

**By Severity (ARIA Classification):**
- Intermittent: <4 days/week or <4 consecutive weeks
- Persistent: >4 days/week and >4 consecutive weeks
- Mild: No sleep disturbance, normal activities
- Moderate-Severe: Sleep disturbance or impaired function

**Common Aeroallergens:**

| Allergen | Season | Peak |
|----------|--------|------|
| Tree pollen | Spring | March-May |
| Grass pollen | Late spring/summer | May-July |
| Weed pollen | Fall | August-October |
| Dust mites | Year-round | Humidity-dependent |
| Mold (outdoor) | Summer/fall | After rain |
| Pet dander | Year-round | Continuous exposure |

**Pathophysiology:**

*Early Phase (minutes):*
- Allergen binds IgE on mast cells
- Degranulation releases histamine, tryptase
- Symptoms: Sneezing, rhinorrhea, itching

*Late Phase (4-8 hours):*
- Eosinophil, basophil recruitment
- Continued inflammation
- Symptoms: Nasal congestion, postnasal drip

**Clinical Features:**

**Allergic Rhinitis:**
- Sneezing (paroxysmal)
- Rhinorrhea (clear, watery)
- Nasal congestion
- Nasal/palatal itching
- "Allergic salute" (upward nose rubbing)
- "Allergic shiners" (infraorbital darkening)
- Pale, boggy nasal turbinates

**Allergic Conjunctivitis:**
- Bilateral itching (hallmark)
- Tearing
- Conjunctival injection
- Chemosis (conjunctival swelling)

**Unified Airway Concept:**
- Rhinitis and asthma often coexist
- 80% of asthmatics have rhinitis
- 40% of rhinitis patients have asthma
- Treating rhinitis may improve asthma control

**Diagnosis:**
- Clinical history (symptoms, timing, triggers)
- Skin prick testing
- Serum-specific IgE
- Nasal examination

**Treatment Approach:**
1. Allergen avoidance
2. Pharmacotherapy
3. Immunotherapy (for refractory cases)`,
      keyTerms: [
        { term: 'ARIA', definition: 'Allergic Rhinitis and its Impact on Asthma; classification system based on duration and severity' },
        { term: 'early phase reaction', definition: 'Immediate mast cell-mediated response occurring within minutes of allergen exposure' },
        { term: 'late phase reaction', definition: 'Delayed inflammatory response occurring 4-8 hours after exposure, mediated by eosinophils' },
        { term: 'unified airway', definition: 'Concept that upper and lower respiratory allergic diseases are manifestations of one condition' },
        { term: 'allergic salute', definition: 'Habitual upward rubbing of the nose seen in children with allergic rhinitis' },
      ],
      analogies: [
        'The early and late phase reactions are like a fire alarm (immediate response) followed by the fire department arriving hours later (prolonged cleanup).',
        'The unified airway is like one highway system - problems at the nose end affect traffic all the way to the lungs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergic rhinoconjunctivitis involves IgE sensitization to specific aeroallergen proteins, with diagnosis confirmed by clinical correlation with sensitization testing and management following a stepwise approach from environmental control through pharmacotherapy to allergen immunotherapy.',
      explanation: `Environmental allergies result from sensitization to specific allergenic proteins in aeroallergens, requiring systematic diagnosis and evidence-based management.

**Major Aeroallergen Groups:**

**Tree Pollens:**
- Group 1 allergens (cross-reactive)
- Betulaceae (birch, alder): Bet v 1 (PR-10 protein)
- Cupressaceae (cedar, juniper, cypress)
- Platanaceae (sycamore)

**Grass Pollens:**
- High cross-reactivity within grasses
- Group 1 and Group 5 major allergens
- Timothy (Phleum pratense): Phl p 1, Phl p 5

**Weed Pollens:**
- Ragweed (Ambrosia): Amb a 1
- Mugwort (Artemisia): Art v 1
- Less cross-reactivity than grasses

**Dust Mites:**
- Dermatophagoides pteronyssinus (Der p)
- Dermatophagoides farinae (Der f)
- Group 1 (Der p 1): Cysteine protease, feces
- Group 2 (Der p 2): MD-2 homolog
- Optimal: Humidity >50%, temperature 20-25°C

**Animal Allergens:**
- Cat: Fel d 1 (lipocalin), found in saliva, sebaceous glands
- Dog: Can f 1, Can f 2 (multiple allergens)
- Fel d 1 remains airborne for hours
- Found in homes without cats (transported on clothing)

**Molds:**
- Alternaria alternata: Alt a 1 (outdoor)
- Aspergillus: Asp f allergens
- Cladosporium
- Penicillium (indoor)

**Diagnostic Approach:**

**Skin Prick Testing:**
- Panel based on regional aeroallergens
- Positive: Wheal ≥3mm greater than negative control
- Sensitive, specific, immediate results
- Avoid antihistamines for 3-7 days prior

**Serum Specific IgE:**
- When skin testing not possible
- Unaffected by medications
- Quantitative results (kU/L)
- ImmunoCAP, ISAC multiplex

**Component-Resolved Diagnostics:**
- Identify specific allergenic proteins
- Distinguish primary vs cross-reactive sensitization
- Guide immunotherapy decisions
- Example: Bet v 1 (birch) cross-reacts with Mal d 1 (apple)

**Nasal Provocation Testing:**
- Confirms clinical relevance
- Allergen applied to nasal mucosa
- Measures symptoms and nasal patency

**Pharmacotherapy (Step-Wise):**

**Step 1: Mild Intermittent**
- Oral or intranasal antihistamines
- As-needed use

**Step 2: Mild Persistent or Moderate**
- Intranasal corticosteroids (first-line for moderate-severe)
- Regular antihistamine
- Combination therapy if needed

**Step 3: Moderate-Severe**
- High-dose intranasal corticosteroid
- Consider adding intranasal antihistamine (azelastine)
- Leukotriene receptor antagonist
- Consider oral corticosteroid burst for severe exacerbations

**Medication Classes:**

**Intranasal Corticosteroids:**
- Fluticasone, mometasone, budesonide
- Most effective for all symptoms
- 1-2 weeks for full effect
- Safe for long-term use

**H1 Antihistamines:**
- Second-generation (preferred): Cetirizine, loratadine, fexofenadine
- Best for sneezing, rhinorrhea, itching
- Less effective for congestion

**Intranasal Anticholinergics:**
- Ipratropium
- Targets rhinorrhea specifically

**Decongestants:**
- Pseudoephedrine (oral), oxymetazoline (topical)
- Limit topical to 3-5 days (rhinitis medicamentosa)

**Allergen Immunotherapy:**
- Indications: Moderate-severe, poor medication response, desire to reduce medications
- Subcutaneous (SCIT): Traditional, office-based
- Sublingual (SLIT): Home administration, tablets or drops
- Duration: 3-5 years for sustained benefit`,
      keyTerms: [
        { term: 'Bet v 1', definition: 'Major birch pollen allergen; cross-reacts with fruits (apple, cherry) causing oral allergy syndrome' },
        { term: 'Der p 1', definition: 'Major dust mite allergen; cysteine protease found in mite feces' },
        { term: 'Fel d 1', definition: 'Major cat allergen; lipocalin produced in sebaceous glands and saliva' },
        { term: 'component-resolved diagnostics', definition: 'Testing for IgE to individual allergen protein components' },
        { term: 'rhinitis medicamentosa', definition: 'Rebound nasal congestion from overuse of topical decongestants' },
        { term: 'SLIT', definition: 'Sublingual immunotherapy; allergen tablets or drops placed under the tongue' },
      ],
      clinicalNotes: 'Intranasal corticosteroids are first-line for moderate-severe allergic rhinitis. Component testing helps identify primary sensitizers for immunotherapy. SLIT is FDA-approved for grass, ragweed, and dust mite. Sensitization to Alternaria is a risk factor for severe asthma.',
    },
    4: {
      level: 4,
      summary: 'Allergic rhinoconjunctivitis pathogenesis involves epithelial barrier disruption, innate immune activation via alarmins, and adaptive Th2 responses generating IgE against specific allergen components, with precision diagnosis through molecular allergen testing guiding targeted immunotherapy for disease modification.',
      explanation: `Environmental allergies represent complex type 2 immune responses influenced by genetic predisposition, environmental exposures, and epithelial barrier function.

**Immunopathogenesis:**

**Epithelial-Immune Crosstalk:**

*Barrier Dysfunction:*
- Protease allergens (Der p 1, pollen proteases) disrupt tight junctions
- Increased allergen penetration
- Damage to epithelial cells

*Alarmin Release:*
- TSLP: Activates dendritic cells, promotes Th2
- IL-25: Activates ILC2s
- IL-33: Promotes Th2 and ILC2 responses, enhances mast cell function

**Innate Immune Activation:**

*Pattern Recognition:*
- Allergens often have intrinsic PAMPs
- Chitin (dust mite): Recognized by macrophage receptors
- Beta-glucans (mold): Dectin-1 signaling

*Innate Lymphoid Cells (ILC2s):*
- Tissue-resident, no antigen-specific receptors
- Respond to IL-25, IL-33
- Produce IL-5, IL-13
- Early source of type 2 cytokines
- Contribute to eosinophilia and mucus

**Adaptive Immunity:**

*Th2 Differentiation:*
- Dendritic cells migrate to lymph nodes
- Present allergen peptides on MHC II
- IL-4 from basophils, ILC2s primes Th2
- GATA3 transcription factor

*IgE Production:*
- Tfh cells help B cells
- Class switch recombination to IgE
- IL-4, IL-13 signals
- Allergen-specific IgE binds FcεRI on mast cells/basophils

**Effector Phase:**

*Mast Cell Activation:*
- Allergen crosslinks surface IgE
- Degranulation within seconds
- Preformed mediators: Histamine, tryptase, chymase
- Newly synthesized: PGD2, LTC4/D4/E4

*Eosinophilic Inflammation:*
- IL-5 promotes eosinophil maturation and survival
- Eotaxins (CCL11, CCL24) recruit eosinophils
- Major basic protein, eosinophil peroxidase
- Tissue damage and remodeling

**Allergic Sensitization Determinants:**

**Genetics:**
- Heritability ~50-60%
- HLA associations
- IL-4, IL-13, IL-4RA polymorphisms
- Filaggrin mutations (barrier)

**Environmental:**
- Early life exposures (hygiene hypothesis)
- Microbiome composition
- Pollution (adjuvant effect)
- Climate change affecting pollen

**Molecular Diagnostics:**

**Component-Resolved Diagnostics (CRD):**

*Major vs Minor Allergens:*
- Major: >50% of patients sensitized
- Minor: <50% sensitized
- Genuine vs cross-reactive components

*Cross-Reactivity Patterns:*

| Protein Family | Examples | Clinical Relevance |
|---------------|----------|-------------------|
| PR-10 | Bet v 1, Mal d 1 | Birch-fruit cross-reactivity |
| Profilins | Bet v 2, Phl p 12 | Pan-allergen, usually mild |
| LTPs | Pru p 3 | Severe reactions |
| Storage proteins | Ara h 1, 2, 3 | Peanut/tree nut allergy |
| Tropomyosins | Pen a 1 | Shellfish/dust mite cross-reactivity |

*Guiding Immunotherapy:*
- Genuine markers: Good AIT candidates
- Cross-reactive only: May not benefit from AIT

**Advanced Therapeutics:**

**Allergen Immunotherapy Mechanisms:**

*Immune Deviation:*
- Shift from Th2 to Th1/Treg
- Increased IFN-γ, IL-10, TGF-β

*Antibody Changes:*
- Initial IgE rise, then decline
- IgG4 blocking antibodies
- IgG4 competes with IgE for allergen binding

*Effector Cell Tolerance:*
- Reduced mast cell/basophil reactivity
- Decreased eosinophil activation

**SCIT vs SLIT:**

| Feature | SCIT | SLIT |
|---------|------|------|
| Efficacy | High | Moderate-high |
| Safety | Risk of systemic reactions | Local reactions common |
| Convenience | Office visits | Home administration |
| Adherence | Monitored | Patient-dependent |
| Duration | 3-5 years | 3-5 years |

**Biologics in Allergic Rhinitis:**

*Omalizumab (Anti-IgE):*
- Approved for allergic asthma
- Used off-label for severe rhinitis
- Reduces free IgE
- May enhance immunotherapy safety

*Dupilumab (Anti-IL-4Rα):*
- Approved for CRSwNP
- Blocks IL-4 and IL-13
- Reduces type 2 inflammation
- Potential for severe allergic rhinitis`,
      keyTerms: [
        { term: 'alarmins', definition: 'Epithelial-derived cytokines (TSLP, IL-25, IL-33) that initiate type 2 immune responses' },
        { term: 'ILC2', definition: 'Group 2 innate lymphoid cells; tissue-resident cells producing IL-5 and IL-13 without antigen specificity' },
        { term: 'IgG4 blocking antibody', definition: 'Antibody induced by immunotherapy that competes with IgE for allergen binding' },
        { term: 'LTP', definition: 'Lipid transfer protein; heat-stable allergen associated with severe food reactions' },
        { term: 'profilin', definition: 'Pan-allergen with widespread cross-reactivity; typically causes mild symptoms' },
        { term: 'CRSwNP', definition: 'Chronic rhinosinusitis with nasal polyps; type 2 inflammatory condition' },
      ],
      clinicalNotes: 'ILC2s and epithelial alarmins are therapeutic targets in allergic disease. Component testing: Genuine markers (e.g., Phl p 1, 5 for grass) predict AIT response; profilin-only sensitization suggests low clinical relevance. SLIT tablets available for timothy grass, ragweed, and dust mite. Local reactions to SLIT are common; systemic reactions rare.',
    },
    5: {
      level: 5,
      summary: 'Environmental allergies represent complex type 2 immunopathology driven by epithelial barrier dysfunction, alarmin signaling, and ILC2/Th2-mediated inflammation, with precision medicine approaches using molecular diagnostics to stratify patients for targeted immunotherapy and emerging biologics addressing upstream inflammatory pathways.',
      explanation: `Comprehensive management of environmental allergies integrates molecular pathophysiology, precision diagnostics, and evidence-based interventions to achieve optimal disease control and potential disease modification.

**Systems-Level Pathophysiology:**

**The Allergic Cascade:**

*Level 1: Barrier and Innate Sensing*
- Epithelial exposure to allergen
- Protease activity disrupts junctions
- Alarmin (TSLP, IL-25, IL-33) release
- ILC2 activation

*Level 2: Adaptive Immunity*
- DC migration and allergen presentation
- Th2 differentiation (GATA3)
- B cell class switching to IgE
- Memory T and B cell generation

*Level 3: Effector Phase*
- IgE-mediated mast cell activation
- Early phase: Histamine, tryptase
- Late phase: Eosinophilic inflammation

*Level 4: Tissue Remodeling*
- Chronic inflammation
- Basement membrane thickening
- Subepithelial fibrosis
- Neural hypersensitivity

**Precision Medicine Approach:**

**Molecular Phenotyping:**

*Pollen Allergies:*

| Source | Genuine Marker | Cross-Reactive |
|--------|---------------|----------------|
| Birch | Bet v 1 | Bet v 2 (profilin) |
| Grass | Phl p 1, 5 | Phl p 7, 12 |
| Ragweed | Amb a 1 | Amb a 8 (profilin) |
| Mugwort | Art v 1 | Art v 3 (LTP) |

*Perennial Allergens:*

| Source | Major Components | Notes |
|--------|-----------------|-------|
| Dust mite | Der p 1, 2 | Der p 10 (tropomyosin) cross-reacts with shellfish |
| Cat | Fel d 1, 4 | Fel d 2 (serum albumin) cross-reacts with pork |
| Dog | Can f 1, 2, 5 | Can f 6 cross-reacts with other animals |
| Alternaria | Alt a 1 | Asthma risk marker |

**Clinical Application of CRD:**

*Case: Positive grass SPT, considering SLIT*
- Phl p 1 and/or Phl p 5 positive: Good AIT candidate
- Phl p 12 only (profilin): Unlikely to benefit from grass AIT

*Case: Polysensitized patient*
- CRD can identify primary sensitizers
- Guide selection of AIT extracts
- Avoid treating cross-reactive sensitization

**Immunotherapy - Evidence and Practice:**

**SCIT Evidence:**
- Reduces symptoms and medication use
- Prevents new sensitizations
- May prevent asthma development in children with rhinitis
- 3-5 years for sustained disease modification

**SLIT Evidence:**
- FDA-approved tablets: Grastek (timothy), Ragwitek (ragweed), Odactra (dust mite)
- Similar efficacy to SCIT in some studies
- Better safety profile
- Adherence is key

**Emerging Approaches:**

*Intralymphatic Immunotherapy (ILIT):*
- Direct injection into lymph nodes
- Faster onset (3 injections)
- Enhanced DC uptake
- Investigational

*Epicutaneous Immunotherapy (EPIT):*
- Allergen delivery via skin patch
- Targets Langerhans cells
- Under investigation for aeroallergens

*Recombinant/Modified Allergens:*
- Defined composition
- Reduced IgE binding (hypoallergens)
- Maintained T cell epitopes
- Better safety and efficacy

**Biologics for Allergic Rhinitis:**

**Current and Emerging:**

| Biologic | Target | Status for AR |
|----------|--------|---------------|
| Omalizumab | IgE | Off-label for severe |
| Dupilumab | IL-4Rα | Approved for CRSwNP |
| Mepolizumab | IL-5 | For eosinophilic disease |
| Benralizumab | IL-5Rα | For eosinophilic disease |
| Tezepelumab | TSLP | Approved for asthma |

*Rationale for Upstream Targeting:*
- TSLP inhibition prevents initial alarmin signal
- May address multiple downstream pathways
- Potential for broader efficacy

**Special Populations:**

**Pediatric Considerations:**
- AIT may prevent asthma onset
- SLIT approved for ages 5+
- Early intervention may be disease-modifying

**Pregnancy:**
- Continue AIT if established before pregnancy
- Do not initiate AIT during pregnancy
- Second-generation antihistamines (cetirizine, loratadine) preferred
- Intranasal corticosteroids safe

**Occupational Allergies:**
- Bakers (flour): Wheat, amylase
- Laboratory workers: Animal allergens
- Healthcare: Latex (declining)
- Identification and exposure reduction critical

**Quality of Life and Comorbidities:**

**Impact of Allergic Rhinitis:**
- Sleep disturbance
- Cognitive impairment
- Work/school productivity
- Fatigue
- QoL may be worse than mild asthma

**Associated Conditions:**
- Asthma (unified airway)
- Atopic dermatitis
- Food allergies
- Eosinophilic esophagitis
- Sinusitis
- Otitis media with effusion

**Treatment of One Affects Others:**
- Treating rhinitis may improve asthma
- Biologics targeting shared pathways (type 2)
- Comprehensive atopic disease management

**Algorithmic Management:**

**Step 1: Diagnosis**
- Clinical history, symptom pattern
- Sensitization testing (SPT or sIgE)
- Consider CRD for polysensitization

**Step 2: Environmental Control**
- Evidence-based measures
- Dust mite encasings, HEPA filters
- Pet removal if sensitized (challenging)

**Step 3: Pharmacotherapy**
- Mild: Antihistamine PRN
- Moderate: Intranasal corticosteroid
- Moderate-Severe: Combination therapy

**Step 4: Immunotherapy**
- Consider when: Moderate-severe, specific IgE-mediated, poor response to medications
- SCIT or SLIT based on patient factors
- 3-5 year commitment

**Step 5: Refractory Disease**
- Reassess diagnosis
- Consider biologics (off-label for most)
- Specialty referral`,
      keyTerms: [
        { term: 'ILIT', definition: 'Intralymphatic immunotherapy; direct injection into lymph nodes for rapid tolerance' },
        { term: 'genuine marker', definition: 'Species-specific allergen component indicating true sensitization vs cross-reactivity' },
        { term: 'Odactra', definition: 'FDA-approved house dust mite SLIT tablet' },
        { term: 'Cat-pork syndrome', definition: 'Cross-reactivity between cat serum albumin (Fel d 2) and pork' },
        { term: 'polysensitization', definition: 'IgE sensitization to multiple unrelated allergen sources' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Intranasal corticosteroids: Most effective for nasal symptoms, first-line for moderate-severe
- Second-gen antihistamines preferred (less sedation, no anticholinergic effects)
- SLIT tablets approved: Grass (Grastek), ragweed (Ragwitek), dust mite (Odactra)
- AIT duration: 3-5 years for sustained disease modification
- AIT may prevent new sensitizations and asthma development
- CRD: Genuine markers (Bet v 1, Phl p 1/5, Amb a 1) guide AIT decisions
- Profilin (Bet v 2, Phl p 12) = pan-allergen, usually mild, not AIT target
- Unified airway: Treat rhinitis to help control asthma
- Alternaria sensitization = severe asthma risk factor`,
    },
  },

  media: [
    {
      id: 'aeroallergen-seasons',
      type: 'diagram',
      filename: 'pollen-calendar.svg',
      title: 'Seasonal Pollen Calendar',
      description: 'Common aeroallergens by season and region',
    },
    {
      id: 'rhinitis-treatment-algorithm',
      type: 'diagram',
      filename: 'rhinitis-treatment.svg',
      title: 'Allergic Rhinitis Treatment Algorithm',
      description: 'Step-wise approach to allergic rhinitis management',
    },
  ],
  citations: [
    {
      id: 'aria-guidelines',
      type: 'article',
      title: 'Allergic Rhinitis and its Impact on Asthma (ARIA) guidelines',
      authors: ['Bousquet J', 'Khaltaev N', 'Cruz AA'],
      source: 'Allergy',
    },
    {
      id: 'immunotherapy-guidelines',
      type: 'article',
      title: 'Allergen immunotherapy: A practice parameter',
      authors: ['Cox L', 'Nelson H', 'Lockey R'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-allergic-asthma', targetType: 'condition', relationship: 'see-also', label: 'Allergic Asthma' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'see-also', label: 'Allergy Testing' },
    { targetId: 'allergy-immunology-immunotherapy', targetType: 'concept', relationship: 'see-also', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['immune', 'respiratory'],
    topics: ['immunology', 'allergy', 'ENT', 'pulmonology'],
    keywords: ['allergic rhinitis', 'hay fever', 'pollen', 'dust mite', 'immunotherapy', 'antihistamine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default environmentalAllergiesContent;
