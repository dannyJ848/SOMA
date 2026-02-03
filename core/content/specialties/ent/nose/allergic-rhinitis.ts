/**
 * Allergic Rhinitis - Comprehensive Educational Content
 *
 * Covers allergic rhinitis pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const allergicRhinitis: EducationalContent = {
  id: 'ent-allergic-rhinitis',
  type: 'condition',
  name: 'Allergic Rhinitis',
  alternateNames: ['Hay Fever', 'Nasal Allergies', 'Seasonal Allergies', 'Perennial Rhinitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Allergic rhinitis is when your nose gets stuffy, runny, and itchy because your body overreacts to harmless things like pollen, dust, or pet dander.',
      explanation: `Have you ever had a runny, itchy nose and sneezed a lot during springtime? That might be allergic rhinitis, also called hay fever!

**What Happens:**
Your immune system is supposed to protect you from germs. But with allergies, it gets confused and thinks harmless things are dangerous. When you breathe in these triggers, your body overreacts.

**Common Triggers:**
- Pollen from trees, grass, and flowers (seasonal)
- Dust mites (tiny bugs that live in pillows and carpets)
- Pet dander (skin flakes from cats, dogs)
- Mold spores

**Symptoms:**
- Runny or stuffy nose
- Sneezing, often many times in a row
- Itchy nose, eyes, and throat
- Watery, red eyes
- Dark circles under your eyes (allergic shiners)

**Feeling Better:**
- Stay away from what triggers your allergies
- Keep windows closed during high pollen times
- Use special covers on pillows and mattresses
- Take allergy medicine (antihistamines)
- Use nose sprays`,
      keyTerms: [
        { term: 'allergy', definition: 'When your body overreacts to something harmless as if it were dangerous' },
        { term: 'allergen', definition: 'Something that causes an allergic reaction, like pollen or pet dander' },
        { term: 'histamine', definition: 'A chemical your body releases during an allergic reaction that causes symptoms' },
        { term: 'antihistamine', definition: 'Medicine that blocks histamine to reduce allergy symptoms' },
      ],
      analogies: [
        'Your immune system is like a security guard. With allergies, the guard thinks a harmless visitor (like pollen) is a dangerous intruder and sounds the alarm.',
        'Histamine is like a fire alarm that goes off when there is no fire - it causes a big reaction for nothing.',
      ],
      examples: [
        'In spring, when trees release pollen, many people with allergies start sneezing and get watery eyes.',
        'Some people sneeze whenever they are around cats because they are allergic to cat dander.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic rhinitis is an IgE-mediated inflammatory response to aeroallergens, causing nasal symptoms that may be seasonal or perennial, and is associated with asthma and other atopic conditions.',
      explanation: `Allergic rhinitis affects 10-30% of adults and up to 40% of children, making it one of the most common chronic conditions.

**Types:**
- **Seasonal Allergic Rhinitis:** Occurs during specific seasons
  - Spring: Tree pollen
  - Summer: Grass pollen
  - Fall: Weed pollen (ragweed)
- **Perennial Allergic Rhinitis:** Year-round symptoms
  - Dust mites
  - Pet dander
  - Mold
  - Cockroach allergens

**The Allergic Response:**
1. **Sensitization:** First exposure to allergen
   - Immune system makes IgE antibodies
   - IgE attaches to mast cells in nasal tissue
2. **Re-exposure:** Allergen binds to IgE on mast cells
3. **Immediate reaction (minutes):** Mast cells release histamine
   - Sneezing, itching, runny nose
4. **Late reaction (hours later):** Inflammation builds
   - Nasal congestion

**Symptoms:**
- Cardinal symptoms: Sneezing, itching, rhinorrhea (runny nose), congestion
- Ocular symptoms: Itchy, watery eyes
- Other: Post-nasal drip, throat clearing, fatigue

**Physical Exam Findings:**
- Allergic salute (rubbing nose upward)
- Allergic shiners (dark circles under eyes)
- Dennie-Morgan lines (creases under lower eyelids)
- Pale, boggy nasal mucosa
- Nasal crease across bridge of nose

**Associated Conditions (Atopic March):**
- Atopic dermatitis (eczema)
- Asthma
- Food allergies

**Treatment:**

*Avoidance:*
- HEPA filters
- Dust mite covers
- Pet restrictions
- Close windows during high pollen

*Medications:*
- Intranasal corticosteroids (most effective)
- Oral antihistamines (second-generation preferred)
- Intranasal antihistamines
- Leukotriene inhibitors
- Decongestants (short-term only)

*Immunotherapy:*
- Allergy shots (subcutaneous)
- Sublingual tablets (grass, ragweed, dust mite)`,
      keyTerms: [
        { term: 'IgE', definition: 'The antibody responsible for allergic reactions; binds to mast cells', pronunciation: 'eye-jee-EE' },
        { term: 'mast cell', definition: 'Immune cell that releases histamine and other chemicals during allergic reactions' },
        { term: 'seasonal allergic rhinitis', definition: 'Allergic rhinitis triggered by pollens present only during certain seasons' },
        { term: 'perennial allergic rhinitis', definition: 'Year-round allergic rhinitis, usually triggered by indoor allergens' },
        { term: 'atopy', definition: 'Genetic tendency to develop allergic conditions like rhinitis, asthma, and eczema' },
      ],
      analogies: [
        'IgE antibodies on mast cells are like motion sensors - when the allergen trips them, alarms (histamine) go off.',
        'The atopic march is like a progression of allergies, often starting with eczema in babies and moving to food allergies, then rhinitis, then asthma.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergic rhinitis involves Type I hypersensitivity with IgE-mediated mast cell degranulation and Th2 cytokine-driven inflammation, requiring allergen identification, environmental control, pharmacotherapy, and consideration of immunotherapy.',
      explanation: `Understanding the immunopathology of allergic rhinitis enables rational treatment selection.

**Immunopathophysiology:**

*Sensitization Phase:*
1. Allergen uptake by dendritic cells
2. Presentation to naive T cells
3. Th2 differentiation (IL-4 driven)
4. B cell class switch to IgE
5. IgE binds FcεRI on mast cells and basophils

*Early Phase Response (minutes):*
- Allergen cross-links IgE on mast cells
- Mast cell degranulation releases:
  - Histamine (H1 → itching, sneezing, rhinorrhea)
  - Tryptase
  - Prostaglandins, leukotrienes
- Peak: 15-30 minutes

*Late Phase Response (4-8 hours):*
- Cytokine release recruits inflammatory cells
- Eosinophils, basophils, T cells infiltrate
- IL-5, IL-4, IL-13 perpetuate inflammation
- Nasal congestion predominates
- Priming effect: Increased sensitivity to allergen

**Classification (ARIA Guidelines):**

*Temporal:*
- Intermittent: <4 days/week OR <4 weeks
- Persistent: >4 days/week AND >4 weeks

*Severity:*
- Mild: Normal sleep, daily activities, work/school
- Moderate-severe: One or more impaired

**Diagnosis:**

*Clinical:*
- History of symptoms with allergen exposure
- Personal/family history of atopy
- Physical exam findings

*Testing:*
- Skin prick testing: Gold standard
- Serum specific IgE: Alternative when skin testing not possible
- Nasal cytology: Eosinophilia suggests allergic etiology
- Total IgE: Often elevated but not specific

**Pharmacotherapy Evidence Hierarchy:**

| Treatment | Sneezing | Itching | Rhinorrhea | Congestion | Ocular |
|-----------|----------|---------|------------|------------|--------|
| Intranasal steroids | +++ | +++ | +++ | +++ | ++ |
| Oral antihistamines | +++ | +++ | ++ | + | ++ |
| Intranasal antihistamines | ++ | ++ | ++ | ++ | + |
| Decongestants | 0 | 0 | 0 | +++ | 0 |
| Leukotriene antagonists | + | + | + | + | + |

*First-Line: Intranasal Corticosteroids*
- Most effective single agent
- Reduces all nasal symptoms
- Takes days to weeks for full effect
- Examples: Fluticasone, mometasone, budesonide

*Second-Generation Antihistamines:*
- Preferred over first-generation (less sedating)
- Examples: Cetirizine, loratadine, fexofenadine
- Intranasal azelastine works faster than oral

**Immunotherapy:**

*Subcutaneous Immunotherapy (SCIT):*
- Weekly buildup, then monthly maintenance
- 3-5 year duration
- Disease-modifying: May prevent asthma development
- Risk: Anaphylaxis (administer in medical setting)

*Sublingual Immunotherapy (SLIT):*
- Daily tablet at home
- FDA-approved: Grass, ragweed, dust mite
- Lower anaphylaxis risk
- Compliance can be challenging`,
      keyTerms: [
        { term: 'Type I hypersensitivity', definition: 'Immediate allergic reaction mediated by IgE antibodies and mast cell degranulation' },
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells and basophils', pronunciation: 'F-C-epsilon-R-one' },
        { term: 'ARIA', definition: 'Allergic Rhinitis and its Impact on Asthma; international guidelines for classification and treatment' },
        { term: 'subcutaneous immunotherapy', definition: 'Allergy shots: injections of increasing allergen doses to induce tolerance' },
        { term: 'sublingual immunotherapy', definition: 'Allergy tablets dissolved under the tongue to induce tolerance to specific allergens' },
      ],
      clinicalNotes: 'Intranasal corticosteroids should be first-line for moderate-persistent allergic rhinitis. Combination intranasal steroid + antihistamine (azelastine/fluticasone) is more effective than either alone for moderate-severe disease. Avoid chronic decongestant use (rhinitis medicamentosa).',
    },
    4: {
      level: 4,
      summary: 'Allergic rhinitis pathogenesis involves complex Th2-driven inflammation with ILC2 amplification, epithelial barrier dysfunction, and neural sensitization, with management advancing toward endotype-specific therapy and immune tolerance induction.',
      explanation: `Contemporary understanding of allergic rhinitis integrates mucosal immunology, neural mechanisms, and precision medicine.

**Advanced Immunopathology:**

*Innate Lymphoid Cells Type 2 (ILC2):*
- Tissue-resident, no antigen receptor
- Activated by epithelial alarmins (IL-25, IL-33, TSLP)
- Produce large amounts of IL-5, IL-13
- Amplify Type 2 response
- May explain non-allergic eosinophilic rhinitis

*Epithelial Dysfunction:*
- Tight junction defects (claudin, occludin)
- Increased permeability to allergens
- Deficient antimicrobial peptides
- TSLP release activates dendritic cells toward Th2

*Neural Sensitization:*
- Sensory nerve hyperreactivity
- Substance P, CGRP release
- Contributes to nasal hyperreactivity
- Target for anticholinergics

**Unified Airway Concept:**

- Allergic rhinitis and asthma are manifestations of one disease
- 80% of asthmatics have rhinitis
- 20-40% of rhinitis patients have asthma
- Treating rhinitis improves asthma outcomes
- Systemic inflammation links upper and lower airway

**Local Allergic Rhinitis (LAR):**
- Localized nasal IgE production without systemic sensitization
- Negative skin test and serum IgE
- Positive nasal allergen challenge
- May represent early stage of allergic rhinitis
- Responds to immunotherapy

**Differential Diagnosis:**

| Condition | Distinguishing Features |
|-----------|------------------------|
| Allergic rhinitis | Seasonal/trigger pattern, IgE+ |
| Non-allergic rhinitis | Perennial, older onset, IgE- |
| NARES (eosinophilic) | Nasal eosinophilia, IgE- |
| Vasomotor rhinitis | Triggered by irritants, temperature |
| Rhinitis medicamentosa | Decongestant overuse |
| Hormonal rhinitis | Pregnancy, hypothyroidism |
| Atrophic rhinitis | Crusting, ozena, wide cavity |
| Gustatory rhinitis | Eating (especially spicy food) |

**Advanced Pharmacotherapy:**

*Biologics (for severe/refractory):*
- Omalizumab (anti-IgE): Used off-label, reduces IgE
- Dupilumab (anti-IL-4Rα): Approved for comorbid CRSwNP or asthma
- May be considered when standard therapy fails

*Combination Therapy:*
- Intranasal steroid + intranasal antihistamine superior to either alone
- Dymista (azelastine/fluticasone) for moderate-severe

*Anticholinergics:*
- Ipratropium: For rhinorrhea-predominant
- Does not address sneezing or congestion

**Immunotherapy Mechanisms:**

*Immune Tolerance Induction:*
1. Shift from Th2 to Th1/Treg
2. Increase in blocking IgG4 antibodies
3. Decreased IgE over time
4. Reduction of mast cell reactivity
5. Decrease in eosinophil recruitment

*Biomarkers of Response:*
- Allergen-specific IgG4 increase
- sIgE/tIgE ratio changes
- Decreased basophil activation

**Surgical Options:**

*Inferior Turbinate Reduction:*
- For concomitant turbinate hypertrophy
- Techniques: Radiofrequency, microdebrider, submucosal resection
- Addresses obstruction, not allergy

*Vidian Neurectomy:*
- Rarely performed
- Cuts parasympathetic supply
- For refractory rhinorrhea`,
      keyTerms: [
        { term: 'ILC2', definition: 'Innate lymphoid cells type 2; tissue-resident cells that amplify Type 2 inflammation' },
        { term: 'local allergic rhinitis', definition: 'Nasal allergic response with local IgE production but negative systemic testing' },
        { term: 'NARES', definition: 'Non-allergic rhinitis with eosinophilia syndrome; eosinophilic rhinitis without IgE sensitization' },
        { term: 'blocking antibodies', definition: 'IgG4 antibodies induced by immunotherapy that compete with IgE for allergen binding' },
        { term: 'unified airway', definition: 'Concept that upper and lower airway represent one integrated organ system sharing pathophysiology' },
      ],
      clinicalNotes: 'Local allergic rhinitis is increasingly recognized; consider nasal allergen challenge for rhinitis patients with negative skin/blood testing who have allergic symptom patterns. Immunotherapy may benefit these patients.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge allergic rhinitis research explores epithelial barrier restoration, microbiome-based interventions, novel biologic targets, and precision immunotherapy protocols informed by biomarker profiling and molecular endotyping.',
      explanation: `Frontier research in allergic rhinitis targets fundamental mechanisms and personalized treatment approaches.

**Epithelial Barrier Research:**

*Barrier Dysfunction Mechanisms:*
- Protease allergens (Der p 1, HDM) cleave tight junctions
- IL-4/IL-13 downregulate tight junction proteins
- Bacterial toxins (S. aureus) disrupt barrier
- Air pollutants damage epithelium

*Therapeutic Targets:*
- Tight junction protein upregulation
- Protease inhibitors
- Epithelial repair factors
- TSLP neutralization (tezepelumab)

**Microbiome in Allergic Disease:**

*Nasal Microbiome Alterations:*
- Reduced diversity in allergic rhinitis
- Staphylococcus aureus overrepresentation
- Dolosigranulum and Corynebacterium protective?
- Early-life exposures shape development

*Therapeutic Implications:*
- Probiotic nasal sprays (investigational)
- Microbiome transfer
- Early-life interventions for prevention

**Novel Therapeutic Targets:**

| Target | Mechanism | Stage |
|--------|-----------|-------|
| TSLP | Epithelial alarmin | Approved (tezepelumab) |
| IL-33 | Epithelial alarmin | Phase III |
| IL-25 | Epithelial alarmin | Preclinical |
| CRTH2 | PGD2 receptor on Th2/ILC2 | Phase II |
| JAK inhibitors | Cytokine signaling | Preclinical |
| Bruton tyrosine kinase | B cell/mast cell signaling | Phase II |

**Precision Immunotherapy:**

*Biomarker-Guided Selection:*
- Component-resolved diagnostics (CRD)
- Molecular allergen profiling
- Identify primary vs. cross-reactive sensitization
- Optimize allergen selection for immunotherapy

*Component-Resolved Diagnostics:*
- Example: Grass allergy
  - Phl p 1, Phl p 5: Primary grass markers
  - Phl p 7, Phl p 12: Cross-reactive (profilin, polcalcin)
- Primary sensitization predicts immunotherapy response

*Novel Immunotherapy Approaches:*
- Peptide immunotherapy (T-cell epitopes)
- Recombinant hypoallergenic molecules
- Adjuvanted formulations
- Intralymphatic injection (faster, fewer doses)
- Epicutaneous immunotherapy

**Allergic Rhinitis Prevention:**

*Hygiene Hypothesis/Microbiome:*
- Farm exposure protective
- Pet exposure in infancy may protect
- Antibiotics increase allergy risk
- C-section increases atopy risk

*Prevention Strategies Under Investigation:*
- Early oral tolerance (food allergens)
- Probiotic supplementation
- Vitamin D optimization
- Helminth-derived products

**Outcome Measures in Clinical Trials:**

*Patient-Reported Outcomes:*
- RQLQ (Rhinoconjunctivitis Quality of Life Questionnaire)
- TNSS (Total Nasal Symptom Score)
- VAS (Visual Analog Scales)

*Objective Measures:*
- Peak nasal inspiratory flow (PNIF)
- Acoustic rhinometry
- Nasal allergen challenge
- Environmental exposure chambers

**Precision Medicine Framework:**

1. **Endotype Identification:**
   - Type 2 high vs. low
   - Eosinophilic vs. neutrophilic
   - IgE vs. IgE-independent

2. **Biomarker Assessment:**
   - Serum eosinophils
   - Total and specific IgE
   - Nasal eosinophilia
   - FeNO (if asthma present)

3. **Treatment Selection:**
   - Type 2 high: Biologics, immunotherapy
   - Local AR: Nasal challenge confirmation, immunotherapy
   - Non-allergic: Anticholinergics, capsaicin`,
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'Molecular allergy testing identifying specific allergen proteins to guide immunotherapy selection' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin; epithelial alarmin that initiates Type 2 inflammation' },
        { term: 'intralymphatic immunotherapy', definition: 'Direct injection of allergen into lymph nodes for accelerated tolerance induction' },
        { term: 'environmental exposure chamber', definition: 'Controlled facility for standardized allergen exposure in clinical trials' },
        { term: 'epithelial barrier dysfunction', definition: 'Impaired tight junctions and antimicrobial defense allowing allergen penetration' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Component-resolved diagnostics can distinguish primary from cross-reactive sensitization - important for immunotherapy selection
2. Local allergic rhinitis: Normal skin/blood tests but positive nasal challenge; responds to immunotherapy
3. Unified airway: Always assess for asthma in allergic rhinitis patients; treating rhinitis improves asthma control
4. Combination intranasal steroid + antihistamine (Dymista) is most effective single medication for moderate-severe AR
5. Sublingual immunotherapy: Consider for patients who cannot commit to injection immunotherapy; FDA-approved options limited
6. Biologics: Consider omalizumab or dupilumab for severe refractory disease, especially with comorbid asthma/CRSwNP
7. Prevention: Early pet and farm exposure may be protective; avoid unnecessary early antibiotics`,
    },
  },

  media: [
    {
      id: 'allergic-response',
      type: 'diagram',
      filename: 'allergic-response-mechanism.svg',
      title: 'Allergic Response Mechanism',
      description: 'IgE-mediated mast cell activation and inflammatory cascade',
    },
    {
      id: 'treatment-algorithm',
      type: 'diagram',
      filename: 'allergic-rhinitis-treatment.svg',
      title: 'Treatment Algorithm',
      description: 'Stepwise approach to allergic rhinitis management',
    },
  ],

  citations: [
    {
      id: 'aria-guidelines',
      type: 'article',
      title: 'ARIA Guidelines 2023 Update',
      source: 'Allergy',
      authors: ['Bousquet J', 'et al.'],
    },
    {
      id: 'middleton-allergy',
      type: 'textbook',
      title: 'Middleton\'s Allergy: Principles and Practice',
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'ent-nose-sinus-anatomy', targetType: 'structure', relationship: 'related', label: 'Nose and Sinus Anatomy' },
    { targetId: 'ent-sinusitis', targetType: 'condition', relationship: 'related', label: 'Sinusitis' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],

  tags: {
    systems: ['immune', 'respiratory'],
    topics: ['allergy', 'immunology', 'rhinology'],
    keywords: ['allergic rhinitis', 'hay fever', 'antihistamine', 'immunotherapy', 'IgE'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default allergicRhinitis;
