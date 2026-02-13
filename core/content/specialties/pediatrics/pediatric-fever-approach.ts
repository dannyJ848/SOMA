import { EducationalContent } from '../../types';

export const pediatricFeverApproach: EducationalContent = {
  id: 'pediatrics-fever-approach',
  type: 'concept',
  name: 'Pediatric Fever Approach',
  alternateNames: ['Childhood Fever Management', 'Fever in Children', 'Febrile Child Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Fever is when body temperature goes up, usually to fight an infection. Most fevers in children are not dangerous and go away on their own.',
      explanation: `Fever can be scary for parents, but it's actually your child's body working hard to fight off germs!

**What Counts as a Fever?**
- Normal body temperature: Around 98.6°F (37°C), but varies throughout the day
- Fever: Temperature of 100.4°F (38°C) or higher
- The exact number matters less than how your child looks and acts

**How to Take Temperature:**
- **Rectal (bottom):** Most accurate for babies under 3 months
- **Under the arm (axillary):** Add about 1°F to get closer to true temperature
- **Ear or forehead:** Quick and easy for older children
- **Oral (mouth):** Good for children over 4 who can hold thermometer properly

**Why Do Kids Get Fevers?**
- Fighting infections (viruses like colds, or bacteria)
- After vaccinations (normal and expected)
- Being overdressed or overheated
- Teething does NOT cause real fevers (maybe just slightly warm)

**When Fever Itself Is Helpful:**
- Makes it harder for germs to survive
- Helps immune system work better
- You don't always need to treat a fever with medicine

**When to Give Fever Medicine:**
- If your child is uncomfortable, not sleeping, or not drinking
- Acetaminophen (Tylenol) or ibuprofen (Advil/Motrin)
- Ibuprofen only for children 6 months and older
- Never give aspirin to children (can cause serious problems)

**Warning Signs - Call Your Doctor If:**
- Baby under 3 months with any fever (100.4°F or higher)
- Fever over 104°F (40°C) in any child
- Fever lasting more than 3-5 days
- Child won't drink fluids
- Child is very sleepy or hard to wake
- Has trouble breathing
- Has a rash that doesn't fade when pressed
- Seems very sick or you're worried

**What WON'T Help:**
- Cold baths (can cause shivering, which raises temperature)
- Alcohol rubs (dangerous!)
- Starving a fever (children need fluids and can eat if hungry)`,
      keyTerms: [
        { term: 'fever', definition: 'Body temperature of 100.4°F (38°C) or higher' },
        { term: 'rectal temperature', definition: 'Temperature taken in the bottom; most accurate for babies' },
        { term: 'antipyretic', definition: 'Medicine that lowers fever, like acetaminophen or ibuprofen' },
        { term: 'immune system', definition: 'The body\'s defense system that fights germs' },
      ],
      analogies: [
        'Fever is like turning up the thermostat to make your house uncomfortable for unwanted guests (germs) - it makes them want to leave!',
        'Your immune system uses fever like a superhero uses heat vision - it\'s a special power to fight bad guys.',
      ],
      examples: [
        'A 2-year-old with a temperature of 101°F who is playing and drinking well may not need any medicine.',
        'A 4-month-old with a temperature of 100.5°F should see a doctor, even if they seem okay.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fever evaluation in children requires age-based risk assessment, with neonates requiring more aggressive workup due to risk of serious bacterial infection, while older children can often be managed based on clinical appearance and symptoms.',
      explanation: `Approaching pediatric fever requires systematic age-based risk stratification.

**Defining Fever:**
- True fever: Rectal temperature ≥38.0°C (100.4°F)
- Oral: ≥37.8°C (100°F)
- Axillary: ≥37.2°C (99°F) - less reliable
- Bundling can raise temperature; recheck after removing excess clothing

**Age-Based Approach:**

**Neonates (0-28 days):**
- Highest risk for serious bacterial infection (SBI)
- Includes: UTI, bacteremia, meningitis, pneumonia
- All febrile neonates need evaluation:
  - Blood culture, urinalysis + culture
  - Consider lumbar puncture
  - Empiric antibiotics pending results
  - Hospital admission

**Young Infants (29-60 days):**
- Still high risk, but can stratify
- Well-appearing + low-risk labs may allow outpatient management
- Requires close follow-up within 24 hours

**Infants 61-90 days:**
- Lower but still significant SBI risk
- UTI most common SBI in this age group
- Well-appearing children may be evaluated with urinalysis and observation

**Children 3-36 months:**
- After vaccinations (especially PCV), occult bacteremia rare
- Focus on source identification
- UTI remains important consideration, especially in girls

**Children >36 months:**
- Clinical assessment guides evaluation
- Most have identifiable viral sources
- Investigation based on clinical findings

**Fever Height and Response:**

*Does fever height matter?*
- Higher fevers (>40°C/104°F) slightly increase SBI risk
- But clinical appearance matters more
- Response to antipyretics does NOT differentiate bacterial from viral

**Red Flags at Any Age:**
- Toxic appearance (lethargic, poor perfusion, weak cry)
- Petechial or purpuric rash
- Bulging fontanelle
- Respiratory distress
- Inconsolable crying
- Decreased urine output

**Fever Management:**

*Antipyretic Dosing:*
| Medication | Dose | Interval | Notes |
|------------|------|----------|-------|
| Acetaminophen | 10-15 mg/kg | Q4-6 hours | Max 75 mg/kg/day |
| Ibuprofen | 5-10 mg/kg | Q6-8 hours | Age ≥6 months; max 40 mg/kg/day |

*Alternating antipyretics:*
- May provide slightly better fever control
- Risk of dosing confusion
- Generally not necessary

**When to Refer:**
- Febrile neonate (always)
- Ill-appearing child at any age
- Fever without source >3-5 days
- Underlying immunocompromise
- Parental concern about child's status`,
      keyTerms: [
        { term: 'serious bacterial infection', definition: 'Bacterial infection requiring antibiotic treatment; includes UTI, bacteremia, meningitis, pneumonia' },
        { term: 'occult bacteremia', definition: 'Bacteria in bloodstream without obvious source; decreased significantly since pneumococcal vaccination' },
        { term: 'toxic appearance', definition: 'Clinical state suggesting serious illness: lethargy, poor perfusion, weak cry, pale/mottled color' },
        { term: 'febrile response', definition: 'Physiologic response to infection or inflammation resulting in elevated body temperature' },
      ],
      analogies: [
        'Age-based risk stratification is like security levels - younger age = higher security = more thorough evaluation.',
        'Clinical appearance is like the "check engine" light - it tells you something is wrong even if you don\'t know exactly what.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based fever evaluation utilizes validated clinical prediction rules, inflammatory markers, and understanding of pathogen epidemiology to balance identification of serious bacterial infection against unnecessary testing and antibiotic exposure.',
      explanation: `Systematic fever evaluation integrates clinical assessment with evidence-based risk stratification.

**Pathophysiology of Fever:**

*Thermoregulation:*
- Hypothalamic set point elevated by pyrogens
- Endogenous pyrogens: IL-1, IL-6, TNF-alpha
- Exogenous pyrogens: LPS, viral components
- Prostaglandin E2 (PGE2) acts on hypothalamus
- Antipyretics inhibit COX, reduce PGE2

*Fever Benefits:*
- Enhances immune function (neutrophil activity, antibody production)
- Inhibits pathogen replication
- Temperatures up to 40°C (104°F) generally well-tolerated

**Risk Stratification for Febrile Infants:**

**Rochester Criteria (29-60 days):**
*Low risk if ALL present:*
- Previously healthy, term infant
- Well-appearing
- No focal bacterial infection on exam
- WBC 5,000-15,000/μL
- Band:neutrophil ratio <0.2
- UA <10 WBC/hpf
- Stool (if diarrhea) <5 WBC/hpf

**Philadelphia Protocol (29-60 days):**
- Includes CSF criteria (WBC <8)
- More stringent, lower miss rate

**Step-by-Step Approach (≤60 days):**
1. Ill-appearing → Full workup + admission
2. Well-appearing → Risk stratify by:
   - Procalcitonin (<0.5 ng/mL = low risk)
   - Urinalysis
   - Absolute neutrophil count

**Lab Markers:**

| Marker | Low-Risk Cutoff | Characteristics |
|--------|-----------------|-----------------|
| WBC | 5,000-15,000/μL | Nonspecific |
| ANC | <10,000/μL | Better than WBC |
| Procalcitonin | <0.5 ng/mL | Best for invasive bacterial infection |
| CRP | <20-40 mg/L | Rises slower than PCT |

**Urinary Tract Infection:**

*Most common SBI across all ages*

*Urine Collection Methods:*
- Catheterized or suprapubic: Gold standard
- Bag specimen: High false-positive rate; only useful if negative
- Clean catch: Acceptable in toilet-trained children

*Interpretation:*
- Positive culture: >50,000 CFU/mL single organism
- Pyuria: >5 WBC/hpf supports diagnosis

**Fever Without Source (FWS) Management:**

*3-36 months, well-appearing:*
1. History and physical examination
2. Consider urinalysis (especially girls <2 years, uncircumcised boys <1 year)
3. If no source found and well-appearing: Symptomatic care + return precautions
4. Blood culture rarely indicated if vaccinated

*Persistent Fever (>5 days without source):*
- Consider Kawasaki disease
- CBC, CMP, CRP, ESR
- Echocardiogram if Kawasaki suspected

**Special Situations:**

*Post-Vaccination Fever:*
- Common after DTaP, PCV, MMR
- Typically 24-48 hours post-vaccination
- Usually low-grade
- Treat symptomatically; doesn't require workup unless concerning features

*Fever in Returned Traveler:*
- Consider malaria (any endemic area exposure)
- Dengue, typhoid, rickettsial diseases
- Travel history essential

*Fever in Oncology Patient:*
- Neutropenic fever is emergency
- Blood cultures, empiric broad-spectrum antibiotics immediately`,
      keyTerms: [
        { term: 'pyrogen', definition: 'Substance that causes fever; can be endogenous (IL-1, TNF) or exogenous (LPS, bacterial products)' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infections; useful for risk-stratifying febrile infants' },
        { term: 'Rochester criteria', definition: 'Clinical prediction rule identifying low-risk febrile infants 29-60 days who may not require full sepsis workup' },
        { term: 'neutropenic fever', definition: 'Fever in patient with ANC <500/μL; medical emergency requiring immediate antibiotic treatment' },
      ],
      clinicalNotes: 'Procalcitonin <0.5 ng/mL has negative predictive value >95% for invasive bacterial infection in febrile infants. Combined with well appearance and negative urinalysis, allows consideration of outpatient management with close follow-up.',
    },
    4: {
      level: 4,
      summary: 'Advanced fever evaluation integrates molecular diagnostics, novel biomarkers, and understanding of immune dysregulation syndromes to optimize identification of serious infections while minimizing unnecessary interventions in the era of antimicrobial stewardship.',
      explanation: `Contemporary fever management requires integration of traditional clinical skills with emerging diagnostic technologies.

**Advanced Pathophysiology:**

*Fever Generation Cascade:*
1. Pattern recognition receptors (TLRs, NLRs) detect PAMPs
2. NF-κB activation leads to cytokine production
3. IL-1β, IL-6, TNF-α cross blood-brain barrier
4. Hypothalamic COX-2 produces PGE2
5. EP3 receptor activation raises temperature set point

*Antipyretic Mechanisms:*
- Acetaminophen: Inhibits hypothalamic COX, possible TRPV1/cannabinoid effects
- NSAIDs: Peripheral and central COX inhibition
- Steroids: Block cytokine production (not routine antipyretics)

**Evolving Febrile Infant Guidelines:**

*AAP 2021 Clinical Practice Guideline (8-60 days):*

| Age | Inflammatory Markers | Management |
|-----|---------------------|------------|
| 8-21 days | Any | Full workup, CSF, admit, empiric abx |
| 22-28 days | Inflammatory markers elevated | Full workup, CSF, admit, empiric abx |
| 22-28 days | Normal inflammatory markers | May observe with/without LP based on clinical |
| 29-60 days | Elevated markers or UA+ | Treat, admit consideration based on clinical |
| 29-60 days | Normal markers, UA negative | May observe outpatient with follow-up |

*Key Inflammatory Markers:*
- Procalcitonin ≥0.5 ng/mL
- ANC ≥4,000/μL
- Temperature ≥38.5°C

**HSV Encephalitis Considerations:**

*When to Consider HSV in Febrile Infant:*
- Ill-appearing without other source
- Seizures
- CSF pleocytosis
- Skin vesicles (present in only 40%)
- Elevated transaminases
- Maternal history of HSV

*Management:*
- Acyclovir 20 mg/kg IV q8h empirically while awaiting PCR
- Don't delay for PCR results if concerning presentation
- PCR may be negative early; repeat if high suspicion

**Fever in Immunocompromised Hosts:**

*Neutropenic Fever (ANC <500/μL):*
- Risk of overwhelming bacterial infection
- Blood cultures (peripheral + central line if present)
- Urinalysis, chest radiograph
- Empiric anti-pseudomonal coverage within 60 minutes

*High-Risk Features:*
- Prolonged neutropenia (>7 days)
- Profound neutropenia (<100/μL)
- Hemodynamic instability
- GI symptoms suggesting mucosal breakdown

*Empiric Regimens:*
- Low risk: Cefepime or piperacillin-tazobactam monotherapy
- High risk: Add aminoglycoside or vancomycin based on risk factors

**Periodic Fever Syndromes:**

*PFAPA (Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis):*
- Most common periodic fever syndrome
- Regular episodes every 3-6 weeks
- Episodes last 3-6 days
- Responds dramatically to single corticosteroid dose
- Tonsillectomy often curative

*Hereditary Periodic Fever Syndromes:*
| Syndrome | Gene | Inheritance | Features |
|----------|------|-------------|----------|
| FMF | MEFV | AR | Mediterranean ancestry, serositis |
| TRAPS | TNFRSF1A | AD | Prolonged episodes, periorbital edema |
| HIDS | MVK | AR | GI symptoms, elevated IgD |
| CAPS | NLRP3 | AD | Urticaria-like rash, hearing loss |

**Hyperthermia vs. Fever:**

*Hyperthermia (temperature dysregulation):*
- Set point normal, temperature elevated
- Heat stroke, malignant hyperthermia, neuroleptic malignant syndrome, serotonin syndrome
- Antipyretics ineffective
- Requires active cooling

*Drug Fever:*
- Common culprits: Beta-lactams, anticonvulsants, sulfa drugs
- May have eosinophilia
- Resolves 24-72 hours after stopping agent

**Fever of Unknown Origin (FUO):**

*Definition in Children:*
- Fever >38.3°C (101°F) on multiple occasions
- Duration >8 days (some use >2 weeks)
- No diagnosis after initial evaluation

*Etiologies:*
- Infections: 30-50% (often prolonged viral, occult abscess, osteomyelitis)
- Connective tissue disease: 10-20% (JIA most common)
- Malignancy: 5-10% (leukemia, lymphoma)
- Miscellaneous: 10-15% (drug fever, factitious, periodic fever)
- Undiagnosed: 10-20%

*Approach:*
1. Detailed history and physical examination (repeated)
2. Screening labs: CBC, CMP, ESR, CRP, LDH, ferritin, UA
3. Imaging: Chest X-ray, abdominal ultrasound
4. Consider: Blood cultures, echocardiography, CT, bone scan
5. Observation if stable; diagnosis often emerges with time`,
      keyTerms: [
        { term: 'PFAPA syndrome', definition: 'Periodic fever with aphthous stomatitis, pharyngitis, and adenitis; most common periodic fever syndrome in children' },
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; microbial structures recognized by innate immune receptors' },
        { term: 'fever of unknown origin', definition: 'Prolonged fever without diagnosis despite initial evaluation; requires systematic workup' },
        { term: 'hyperthermia', definition: 'Elevated temperature due to failed thermoregulation rather than reset set point; antipyretics ineffective' },
      ],
      clinicalNotes: 'In AAP 2021 febrile infant guidelines, well-appearing infants 22-28 days with normal inflammatory markers may be managed without lumbar puncture if close follow-up assured. However, HSV risk persists - consider acyclovir if any concerning features.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art fever evaluation employs host-response transcriptomics, precision biomarker panels, and understanding of inflammasome biology to differentiate bacterial from viral infections and identify children at risk for immune dysregulation, while research advances point toward AI-assisted clinical decision support.',
      explanation: `Contemporary fever science integrates molecular diagnostics, systems immunology, and computational approaches.

**Host Response Diagnostics:**

*Transcriptomic Signatures:*
- Gene expression patterns differentiate bacterial vs. viral infections
- 2-gene or multi-gene RNA signatures under investigation
- Example: IL-1β/HK3 ratio, TRAIL-IP10-CRP combinations
- Potential to reduce unnecessary antibiotics by 30-50%

*Advantages Over Pathogen Detection:*
- Detects response regardless of pathogen identified
- May identify co-infections
- Works when pathogen testing negative
- Indicates severity of host response

*Commercial Platforms Emerging:*
- POC transcriptomic panels in development
- Integration with procalcitonin and clinical features
- Machine learning classifiers improve accuracy

**Precision Biomarker Panels:**

*Multi-Marker Approaches:*
- Procalcitonin + CRP + clinical features
- Novel markers: Presepsin, sTREM-1, pancreatic stone protein
- Decision support algorithms combining markers

*Point-of-Care Testing:*
- Rapid PCT assays available
- Multiplex inflammatory panels emerging
- Integration with electronic health records

**Inflammasome Biology and Autoinflammation:**

*NLRP3 Inflammasome:*
- Senses danger signals (PAMPs, DAMPs)
- Activates caspase-1, releasing IL-1β and IL-18
- Pyroptosis: Inflammatory cell death

*Clinical Relevance:*
- CAPS syndromes: Gain-of-function NLRP3 mutations
- IL-1 inhibitors (anakinra, canakinumab) therapeutic
- Macrophage activation syndrome: Inflammasome hyperactivation

**Macrophage Activation Syndrome (MAS):**

*Clinical Features:*
- Persistent fever unresponsive to antibiotics
- Hepatosplenomegaly
- Cytopenias, coagulopathy
- Hyperferritinemia (often >10,000 ng/mL)
- Elevated triglycerides, soluble IL-2 receptor

*Associated Conditions:*
- Systemic JIA (most common)
- Infections (EBV, CMV)
- Rheumatic diseases

*Management:*
- High-dose corticosteroids
- Cyclosporine
- IL-1 blockade (anakinra)
- Etoposide in refractory cases

**Multisystem Inflammatory Syndrome in Children (MIS-C):**

*Pathophysiology:*
- Post-infectious immune dysregulation (2-6 weeks post-COVID)
- Features of Kawasaki disease, toxic shock, MAS overlap
- Cytokine storm with cardiac predominance

*Diagnostic Criteria (CDC):*
- Age <21 years
- Fever ≥24 hours
- Laboratory inflammation (CRP, ESR, procalcitonin, etc.)
- ≥2 organ systems involved
- Evidence of COVID-19 (positive test or exposure)
- No alternative diagnosis

*Cardiac Involvement:*
- Myocarditis, coronary artery abnormalities
- Valvulitis, pericarditis
- Reduced ejection fraction common

*Management:*
- IVIG (first-line)
- Corticosteroids
- Biologics for refractory cases (infliximab, anakinra)
- Anticoagulation based on cardiac involvement

**AI-Assisted Clinical Decision Support:**

*Current Applications:*
- Risk prediction models for serious infection
- Integration of clinical features with biomarkers
- Fever pattern analysis

*Machine Learning Approaches:*
- Random forest, gradient boosting algorithms
- Deep learning on multi-dimensional data
- Natural language processing of clinical notes

*Challenges:*
- External validation across populations
- Integration into clinical workflow
- Regulatory approval pathways

**Fever in the Genomic Era:**

*Primary Immunodeficiency Screening:*
- Consider in recurrent fever with severe infections
- SCID newborn screening (TREC testing)
- Next-generation sequencing panels

*Genetic Susceptibility:*
- Single-gene defects predisposing to infection
- Mendelian susceptibility to mycobacterial disease
- Interferonopathies

**Research Frontiers:**

*Biomarker Discovery:*
- Proteomics for novel infection markers
- Metabolomics signatures
- Extracellular vesicle analysis

*Vaccine Impact:*
- Changing epidemiology of invasive bacterial disease
- Evolving risk stratification as pathogens shift

*Climate and Infectious Disease:*
- Changing geographic distribution
- Novel pathogen emergence
- Vector-borne disease expansion

*Precision Approaches:*
- Individual risk profiling
- Tailored antibiotic selection
- Host-directed therapies

**Implementation Science:**

*Translating Evidence to Practice:*
- AAP guideline implementation challenges
- EMR-integrated decision support
- Quality improvement for febrile infant management

*Antibiotic Stewardship:*
- Reducing unnecessary testing and treatment
- Balancing risk of missed infection
- Patient/family communication strategies`,
      keyTerms: [
        { term: 'transcriptomic signature', definition: 'Pattern of gene expression that can distinguish bacterial from viral infections based on host immune response' },
        { term: 'macrophage activation syndrome', definition: 'Life-threatening hyperinflammatory condition with cytopenias and hyperferritinemia; associated with systemic JIA and infections' },
        { term: 'inflammasome', definition: 'Multiprotein complex that activates inflammatory caspases and IL-1 family cytokines in response to danger signals' },
        { term: 'TREC testing', definition: 'T-cell receptor excision circle analysis; newborn screening test for SCID' },
        { term: 'host-directed therapy', definition: 'Treatment targeting the host immune response rather than the pathogen directly' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- Procalcitonin <0.5 ng/mL combined with well appearance allows outpatient management of many febrile infants 22-60 days
- Consider MIS-C in any child with prolonged fever, elevated inflammatory markers, and COVID-19 exposure in past 2-6 weeks
- Ferritin >500 ng/mL with fever warrants evaluation for MAS, especially in context of systemic JIA
- Host response transcriptomics show promise for differentiating bacterial vs. viral infection at point of care
- AI-integrated clinical decision support tools are emerging but require validation in diverse populations`,
    },
  },

  media: [
    {
      id: 'fever-evaluation-algorithm',
      type: 'diagram',
      filename: 'pediatric-fever-algorithm.svg',
      title: 'Pediatric Fever Evaluation Algorithm',
      description: 'Age-based approach to evaluating fever in children',
    },
    {
      id: 'febrile-infant-management',
      type: 'diagram',
      filename: 'febrile-infant-management.svg',
      title: 'Febrile Infant Management by Age',
      description: 'Decision tree for managing febrile infants 0-60 days',
    },
  ],
  citations: [
    {
      id: 'aap-febrile-infant-2021',
      type: 'article',
      title: 'Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old',
      authors: ['Pantell RH', 'Roberts KB', 'Adams WG'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2021-052228',
    },
    {
      id: 'nelson-fever',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Fever and Fever of Unknown Origin',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-common-childhood-infections', targetType: 'topic', relationship: 'related', label: 'Common Childhood Infections' },
    { targetId: 'pediatrics-emergencies', targetType: 'topic', relationship: 'related', label: 'Pediatric Emergencies' },
    { targetId: 'immune-system', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['pediatrics', 'infectious-disease', 'emergency-medicine'],
    keywords: ['fever', 'febrile infant', 'serious bacterial infection', 'temperature', 'procalcitonin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'emergency-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricFeverApproach;
