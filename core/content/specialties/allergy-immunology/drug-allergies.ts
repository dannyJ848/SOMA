import { EducationalContent } from '../../types';

export const drugAllergiesContent: EducationalContent = {
  id: 'allergy-immunology-drug-allergies',
  type: 'condition',
  name: 'Drug Allergies',
  alternateNames: ['Drug Hypersensitivity', 'Medication Allergy', 'Adverse Drug Reaction'],

  levels: {
    1: {
      level: 1,
      summary: 'Drug allergies occur when your immune system reacts to a medication, causing symptoms ranging from mild rashes to life-threatening anaphylaxis.',
      explanation: `A drug allergy is when your immune system mistakenly identifies a medication as harmful and attacks it. This is different from a drug side effect, which happens without immune system involvement.

**Common Medications That Cause Allergies:**
1. **Antibiotics** - Especially penicillin and related drugs
2. **Pain relievers** - Aspirin, ibuprofen (NSAIDs)
3. **Chemotherapy drugs**
4. **Anticonvulsants** - Seizure medications
5. **Contrast dyes** - Used for medical imaging

**What Happens During a Reaction:**
1. First exposure: Your body makes antibodies against the drug
2. Second exposure: These antibodies trigger an allergic response
3. Symptoms can appear within minutes to hours

**Types of Reactions:**
- **Immediate** (within 1 hour): Hives, swelling, trouble breathing, anaphylaxis
- **Delayed** (hours to days): Rash, fever, joint pain

**Common Symptoms:**
- Skin rash or hives
- Itching
- Facial swelling
- Wheezing or shortness of breath
- Fever
- In severe cases: anaphylaxis

**What To Do:**
- Stop the medication immediately
- Seek medical help if you have severe symptoms
- Always tell your healthcare providers about drug allergies
- Wear a medical alert bracelet`,
      keyTerms: [
        { term: 'drug allergy', definition: 'An immune system reaction to a medication' },
        { term: 'side effect', definition: 'An unwanted effect of a drug that is not caused by the immune system' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction' },
        { term: 'cross-reactivity', definition: 'When allergy to one drug causes reaction to a related drug' },
      ],
      analogies: [
        'Your immune system is like a security guard that mistakes a helpful delivery person (the medication) for an intruder.',
        'Cross-reactivity is like mistaking someone for their twin - similar drugs can trigger the same allergic response.',
      ],
      examples: [
        'A patient develops hives and facial swelling 30 minutes after taking penicillin for a throat infection.',
        'Someone allergic to penicillin may also react to amoxicillin because they are chemically similar.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug hypersensitivity reactions encompass immunologic (IgE-mediated and T cell-mediated) and non-immunologic mechanisms, presenting with varied clinical manifestations from urticaria to severe cutaneous adverse reactions.',
      explanation: `Drug hypersensitivity reactions represent a spectrum of immune-mediated responses to medications, classified by timing, mechanism, and clinical presentation.

**Classification of Drug Reactions:**

**Immunologic (Allergic):**
- Type I (IgE-mediated): Immediate, within 1 hour
- Type II (Cytotoxic): Drug-induced cytopenias
- Type III (Immune complex): Serum sickness
- Type IV (T cell-mediated): Delayed, 24-72 hours or longer

**Non-Immunologic:**
- Pseudoallergic: Direct mast cell activation (no IgE)
- Intolerance: Low threshold for side effects
- Idiosyncratic: Unpredictable, mechanism unknown

**Common Drug Allergy Patterns:**

| Drug Class | Typical Reaction | Mechanism |
|------------|-----------------|-----------|
| Penicillins | Urticaria, anaphylaxis | IgE-mediated |
| Sulfonamides | Delayed rash, SJS/TEN | T cell-mediated |
| NSAIDs | Urticaria, angioedema | Pseudoallergic (COX-1) |
| Contrast media | Anaphylactoid | Direct mast cell |
| Vancomycin | Red man syndrome | Histamine release |

**Clinical Presentations:**

**Immediate Reactions (Type I):**
- Urticaria, angioedema
- Bronchospasm
- Hypotension
- Anaphylaxis

**Delayed Reactions (Type IV):**
- Maculopapular exanthem (most common drug rash)
- Fixed drug eruption
- Drug reaction with eosinophilia and systemic symptoms (DRESS)
- Stevens-Johnson syndrome (SJS)
- Toxic epidermal necrolysis (TEN)

**Penicillin Allergy - The Most Common:**
- 10% of patients report penicillin allergy
- Only 10% of these are truly allergic when tested
- Allergy can wane over time (~80% lose sensitivity after 10 years)

**Diagnosis:**
- Detailed drug history and timing
- Skin testing (for immediate reactions)
- Drug provocation testing (gold standard)
- Patch testing (for delayed reactions)`,
      keyTerms: [
        { term: 'pseudoallergic reaction', definition: 'Drug reaction resembling allergy but not involving IgE antibodies' },
        { term: 'DRESS syndrome', definition: 'Drug reaction with eosinophilia and systemic symptoms; severe delayed hypersensitivity' },
        { term: 'SJS/TEN', definition: 'Stevens-Johnson syndrome/toxic epidermal necrolysis; severe blistering skin reactions' },
        { term: 'red man syndrome', definition: 'Flushing and rash from rapid vancomycin infusion due to direct histamine release' },
        { term: 'desensitization', definition: 'Process of temporarily reducing allergic sensitivity to allow drug administration' },
      ],
      analogies: [
        'IgE-mediated reactions are like a hair-trigger alarm that goes off immediately, while T cell reactions are like a slow-burning fuse that takes days to ignite.',
        'Pseudoallergic reactions skip the security check (IgE) and directly hit the alarm button (mast cells).',
      ],
    },
    3: {
      level: 3,
      summary: 'Drug hypersensitivity involves complex immunopathogenic mechanisms including hapten formation, pharmacological interaction with immune receptors, and danger signal generation, requiring systematic evaluation with skin testing, in vitro assays, and drug provocation for accurate diagnosis.',
      explanation: `Drug allergy pathogenesis requires understanding how small drug molecules become immunogenic and the diverse mechanisms leading to clinical manifestations.

**Mechanisms of Drug Immunogenicity:**

**Hapten/Prohapten Concept:**
- Most drugs are too small (<1000 Da) to be immunogenic
- Drugs or metabolites bind covalently to proteins
- Drug-protein conjugate becomes immunogenic
- Example: Penicilloyl-protein conjugates

**Pharmacological Interaction (p-i) Concept:**
- Drug binds non-covalently to MHC or TCR
- Directly stimulates T cells
- No metabolism required
- Example: Sulfamethoxazole, carbamazepine

**Altered Peptide Repertoire:**
- Drug binds in MHC groove
- Alters peptide binding or presentation
- New self-peptides become immunogenic
- Example: Abacavir-HLA-B*57:01

**HLA Associations:**

| Drug | HLA Allele | Reaction | Population |
|------|-----------|----------|------------|
| Abacavir | HLA-B*57:01 | HSR | All |
| Carbamazepine | HLA-B*15:02 | SJS/TEN | Asian |
| Carbamazepine | HLA-A*31:01 | DRESS, MPE | European, Asian |
| Allopurinol | HLA-B*58:01 | SJS/TEN, DRESS | Asian |
| Phenytoin | HLA-B*15:02 | SJS/TEN | Asian |

**Severe Cutaneous Adverse Reactions (SCARs):**

**Stevens-Johnson Syndrome (SJS):**
- <10% body surface area detachment
- Mucosal involvement (oral, ocular, genital)
- Prodrome: Fever, malaise
- Mortality: 1-5%

**Toxic Epidermal Necrolysis (TEN):**
- >30% body surface area detachment
- Full-thickness epidermal necrosis
- Mortality: 25-35%
- SCORTEN prognostic score

**DRESS Syndrome:**
- Onset 2-8 weeks after drug initiation
- Fever, rash, facial edema
- Eosinophilia (or atypical lymphocytes)
- Internal organ involvement (liver, kidney, lung)
- HHV-6 reactivation common
- Mortality: 10%

**Diagnostic Approach:**

**Immediate Reactions:**
- Skin prick testing (SPT)
- Intradermal testing
- Serum-specific IgE (limited drugs)
- Basophil activation test (BAT)

**Delayed Reactions:**
- Patch testing
- Delayed intradermal reading
- Lymphocyte transformation test (LTT)
- HLA typing before high-risk drugs

**Drug Provocation Test (DPT):**
- Gold standard
- Graded drug administration
- Performed when pre-test probability is low
- Contraindicated in SCARs`,
      keyTerms: [
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to a carrier protein' },
        { term: 'p-i concept', definition: 'Pharmacological interaction; direct drug binding to MHC/TCR without metabolism' },
        { term: 'SCORTEN', definition: 'Severity-of-illness score predicting mortality in SJS/TEN' },
        { term: 'basophil activation test', definition: 'In vitro test measuring CD63/CD203c expression on basophils after drug exposure' },
        { term: 'lymphocyte transformation test', definition: 'In vitro test measuring T cell proliferation in response to drug' },
        { term: 'HLA', definition: 'Human leukocyte antigen; genetic markers associated with drug hypersensitivity risk' },
      ],
      clinicalNotes: 'Screen for HLA-B*57:01 before abacavir. Consider HLA-B*15:02 screening in Asian patients before carbamazepine/phenytoin. DRESS requires prolonged monitoring for autoimmune sequelae. In SJS/TEN, early ophthalmology consultation is critical.',
    },
    4: {
      level: 4,
      summary: 'Drug hypersensitivity pathogenesis involves diverse immunological pathways from IgE-mediated degranulation to complex T cell responses, with genetic predisposition (HLA associations), drug metabolism variations, and immune dysregulation contributing to phenotypic expression of reactions ranging from benign exanthems to life-threatening SCARs.',
      explanation: `Advanced understanding of drug hypersensitivity integrates molecular immunology, pharmacogenomics, and clinical phenotyping to enable risk prediction, accurate diagnosis, and personalized management.

**Molecular Immunopathogenesis:**

**IgE-Mediated Reactions (Type I):**

*Sensitization Phase:*
- Drug-hapten presented to T cells
- Th2 response generates IL-4
- B cell class switching to IgE
- IgE binds FcεRI on mast cells/basophils

*Effector Phase:*
- Re-exposure causes IgE crosslinking
- Degranulation: Histamine, tryptase, PGD2, LTC4
- Clinical: Urticaria, angioedema, bronchospasm, anaphylaxis

**T Cell-Mediated Reactions (Type IV):**

*Type IVa (Th1):*
- IFN-γ, macrophage activation
- Example: Contact dermatitis

*Type IVb (Th2):*
- IL-4, IL-5, eosinophilic inflammation
- Example: DRESS, maculopapular exanthem

*Type IVc (CTL):*
- Perforin, granzyme B, FasL
- Keratinocyte apoptosis
- Example: SJS/TEN

*Type IVd (Neutrophilic):*
- IL-8, GM-CSF
- Neutrophilic infiltration
- Example: AGEP (acute generalized exanthematous pustulosis)

**Pharmacogenomics of Drug Allergy:**

**HLA-Mediated Reactions:**

*Altered Peptide Repertoire Model (Abacavir):*
- Abacavir binds non-covalently in HLA-B*57:01 groove
- Changes peptide-binding repertoire
- Neo-self peptides presented
- Polyclonal T cell activation
- 100% NPV with HLA screening

*p-i/HLA Model:*
- Drug binds in MHC groove + TCR
- Creates immunological synapse
- Direct T cell activation
- Example: Carbamazepine-HLA-B*15:02

**Drug Metabolism:**

*Reactive Metabolites:*
- Sulfamethoxazole → nitroso metabolite
- Haptenation of cellular proteins
- Danger signal generation
- Immunogenic in susceptible hosts

*NAT2 Polymorphisms:*
- Slow acetylators: Higher risk for sulfonamide reactions
- Drug accumulation → more metabolite formation

**SCAR Pathophysiology:**

**SJS/TEN:**

*Immunopathogenesis:*
- CD8+ cytotoxic T cells in epidermis
- Drug-specific, HLA-restricted
- FasL-Fas interaction
- Granulysin: Key mediator of keratinocyte death
- Annexin A1 may be protective

*Clinical Phases:*
1. Prodrome (1-3 days): Fever, malaise, URI symptoms
2. Acute (days to weeks): Skin detachment, mucosal erosions
3. Chronic sequelae: Ocular (symblepharon), genital, pigmentary

*Management Principles:*
- Immediate drug withdrawal
- Supportive care (burn unit if severe)
- Fluid, electrolyte, nutrition management
- Wound care: Avoid debridement
- Controversial: Cyclosporine, IVIG, etanercept

**DRESS Syndrome:**

*Characteristic Features:*
- Long latency (2-8 weeks)
- Persistence after drug withdrawal
- HHV-6 (and other herpesvirus) reactivation
- Autoimmune sequelae (thyroiditis, type 1 diabetes)

*Proposed Mechanism:*
- Drug causes immune dysregulation
- Herpesvirus reactivation
- Bystander damage from antiviral response
- Ongoing inflammation

**Diagnostic Advances:**

**In Vitro Testing:**

*Basophil Activation Test (BAT):*
- Flow cytometry: CD63, CD203c
- Best for beta-lactams, NSAIDs, NMBAs
- Sensitivity ~50%, specificity >90%

*Lymphocyte Transformation Test (LTT):*
- 3H-thymidine incorporation
- Best performed 4-8 weeks after reaction
- Better for delayed reactions
- Sensitivity/specificity variable

*ELISpot:*
- Detects drug-specific cytokine-secreting T cells
- IFN-γ, IL-5, granulysin
- Research application

**Management Approaches:**

**Desensitization:**
- Temporary tolerance induction
- Indicated when drug is essential, no alternative
- Start with minute doses, escalate
- Mechanism: Mast cell/basophil hyporesponsiveness
- Must maintain continuous drug exposure

**Drug Allergy Delabeling:**
- Penicillin allergy testing
- 90% of labeled patients tolerate
- Improves antibiotic stewardship
- Reduces costs, C. difficile risk`,
      keyTerms: [
        { term: 'granulysin', definition: 'Cytotoxic protein released by NK and T cells; key mediator of keratinocyte death in SJS/TEN' },
        { term: 'altered peptide repertoire', definition: 'Mechanism where drug binding changes MHC peptide presentation, creating neo-antigens' },
        { term: 'drug allergy delabeling', definition: 'Process of evaluating and removing inaccurate drug allergy labels through testing' },
        { term: 'AGEP', definition: 'Acute generalized exanthematous pustulosis; neutrophilic drug eruption' },
        { term: 'cross-reactivity', definition: 'Allergic response to structurally related drugs due to shared epitopes' },
        { term: 'negative predictive value', definition: 'Probability that a negative test correctly identifies non-allergic patients' },
      ],
      clinicalNotes: 'Penicillin skin testing has >95% NPV for IgE-mediated reactions. Granulysin levels correlate with SJS/TEN severity. DRESS patients need long-term monitoring for autoimmune sequelae. Drug desensitization is contraindicated in SCARs. Consider genetic testing costs vs reaction severity when deciding on HLA screening.',
    },
    5: {
      level: 5,
      summary: 'Drug hypersensitivity represents a complex interplay of pharmacology, immunology, and genetics, with reaction phenotypes determined by drug structure, metabolism, HLA type, T cell repertoire, and immune regulatory mechanisms, requiring integrated diagnostic algorithms and individualized management including delabeling, desensitization, and pharmacogenomic screening.',
      explanation: `Comprehensive drug allergy management requires synthesis of molecular mechanisms, diagnostic test interpretation, and evidence-based interventions to optimize patient outcomes while ensuring medication access.

**Integrated Pathophysiology:**

**The Drug Allergy "Perfect Storm":**

*Drug Factors:*
- Chemical structure and haptenation potential
- Reactive metabolite formation
- Dose and duration of exposure
- Route of administration

*Host Factors:*
- HLA genotype
- Drug-metabolizing enzyme polymorphisms
- Immune regulatory capacity
- Concurrent infections (viral reactivation)
- Prior sensitization

*Environmental Factors:*
- Concurrent medications
- Inflammatory state
- Epithelial barrier function

**Mechanistic Classification Integration:**

**Immediate Reactions (Minutes to 1 Hour):**

*IgE-Mediated:*
- Prior sensitization required
- Skin testing predictive
- Desensitization possible

*Non-IgE-Mediated (Pseudoallergic):*
- Direct mast cell activation
- NSAIDs (COX-1), opioids, contrast, vancomycin
- No prior exposure needed
- Premedication may help (contrast)

**Delayed Reactions (Hours to Weeks):**

*Benign Exanthems:*
- Most common drug reaction
- Self-limited
- May continue drug (with monitoring) if mild

*Severe Reactions (SCARs):*
- SJS/TEN: CTL-mediated keratinocyte destruction
- DRESS: Th2/Th1 with viral reactivation
- AGEP: Neutrophilic (IL-8)
- Immediate drug cessation required

**Precision Medicine Approach:**

**Pre-Treatment Genetic Screening:**

| Drug | HLA Allele | Reaction | Recommendation |
|------|-----------|----------|----------------|
| Abacavir | B*57:01 | HSR | Mandatory screening (all) |
| Carbamazepine | B*15:02 | SJS/TEN | Screen in Asians |
| Carbamazepine | A*31:01 | DRESS/MPE | Consider screening |
| Allopurinol | B*58:01 | SJS/TEN/DRESS | Screen high-risk (Asian, renal) |
| Flucloxacillin | B*57:01 | DILI | Research |

**Cost-Effectiveness:**
- Abacavir screening: Cost-saving
- Carbamazepine (B*15:02): Cost-effective in high-prevalence populations
- Population-specific approaches needed

**Diagnostic Algorithm:**

**Step 1: Reaction Characterization**
- Timeline (immediate vs delayed)
- Clinical phenotype
- Severity assessment
- Probability of drug causality (Naranjo score)

**Step 2: Risk Stratification**
- High-risk: Anaphylaxis, SCARs
- Low-risk: Mild urticaria, benign exanthem
- Determines diagnostic approach

**Step 3: In Vivo Testing (when appropriate)**
- Skin testing (SPT, IDT): Immediate reactions
- Patch testing: Delayed reactions
- Drug provocation test: Gold standard

**Step 4: In Vitro Testing (adjunct)**
- Specific IgE: Limited drugs
- BAT: Good for selected immediate reactions
- LTT: Delayed reactions, timing-dependent

**NSAID Hypersensitivity - Special Considerations:**

**Classification (EAACI/ENDA):**

*Cross-Reactive (COX-1 inhibition):*
1. NSAID-exacerbated respiratory disease (NERD)
   - Aspirin-exacerbated respiratory disease (AERD)
   - Nasal polyps, asthma, aspirin sensitivity
2. NSAID-exacerbated cutaneous disease (NECD)
   - Urticaria/angioedema in chronic urticaria patients
3. NSAID-induced urticaria/angioedema (NIUA)
   - Otherwise healthy patients

*Selective (Single NSAID):*
1. Single NSAID-induced urticaria/angioedema/anaphylaxis (SNIUAA)
   - Likely IgE-mediated
2. Single NSAID-induced delayed reactions (SNIDR)
   - T cell-mediated

*Management by Phenotype:*
- Cross-reactive: Avoid all COX-1 inhibitors, COX-2 selective tolerated
- Single NSAID: Avoid culprit, other NSAIDs usually tolerated

**Beta-Lactam Allergy Management:**

**Penicillin Allergy Evaluation:**

*Pre-Test Probability Assessment:*
- High probability: Recent reaction, compatible symptoms
- Low probability: Remote, vague history, family history only, isolated GI symptoms

*Testing Protocol:*
1. Skin prick test: Major determinant (PPL), minor determinant mix, penicillin G, amoxicillin
2. Intradermal test: If SPT negative
3. Oral challenge: If skin tests negative

*Cross-Reactivity:*
- Penicillin → cephalosporin: ~2% (similar side chain)
- Penicillin → carbapenem: <1%
- Based on shared R1 side chain, not beta-lactam ring

**Delabeling Programs:**

*Implementation:*
- Direct skin testing in allergy clinic
- Pharmacist-driven protocols
- Electronic decision support
- Primary care pathways

*Outcomes:*
- 90-95% of "penicillin-allergic" patients tolerate
- Reduced broad-spectrum antibiotic use
- Decreased C. difficile infections
- Cost savings

**Drug Desensitization:**

**Mechanism:**
- Gradual dose escalation induces mast cell/basophil hyporesponsiveness
- Inhibitory receptors upregulated
- IgE internalization
- Tolerance is temporary, requires continuous exposure

**Indications:**
- No suitable alternative drug
- IgE-mediated immediate reaction
- Contraindicated in SCARs, serum sickness, DRESS

**Protocols:**
- Standard: 12-step, doubling doses, 4-8 hours
- Rapid: Same day
- Slow: Multi-day for highly sensitive patients

**Applications:**
- Penicillin in syphilis during pregnancy
- Aspirin for cardiac disease
- Chemotherapy hypersensitivity (taxanes, platins)
- Monoclonal antibody reactions`,
      keyTerms: [
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; triad of asthma, nasal polyps, and aspirin/NSAID sensitivity' },
        { term: 'COX-1 inhibition', definition: 'Mechanism of cross-reactive NSAID reactions through prostaglandin pathway alteration' },
        { term: 'R1 side chain', definition: 'Chemical structure determining penicillin-cephalosporin cross-reactivity' },
        { term: 'Naranjo score', definition: 'Probability scale for assessing drug causality in adverse reactions' },
        { term: 'PPL', definition: 'Penicilloyl-polylysine; major determinant for penicillin skin testing' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Only 10% of penicillin-allergic labeled patients are truly allergic
- HLA-B*57:01 screening before abacavir is mandatory (100% NPV)
- SJS = <10% BSA; TEN = >30% BSA; overlap = 10-30%
- DRESS has 2-8 week latency; SJS/TEN typically 1-3 weeks
- Granulysin is key cytotoxic mediator in SJS/TEN
- NSAID cross-reactivity = COX-1 mediated; single NSAID = likely IgE
- Desensitization contraindicated in SCARs
- DRESS patients: Monitor for autoimmune thyroiditis, type 1 DM for years
- SCORTEN score predicts SJS/TEN mortality`,
    },
  },

  media: [
    {
      id: 'drug-allergy-algorithm',
      type: 'diagram',
      filename: 'drug-allergy-diagnosis.svg',
      title: 'Drug Allergy Diagnosis Algorithm',
      description: 'Flowchart for evaluating suspected drug allergy',
    },
    {
      id: 'scar-spectrum',
      type: 'diagram',
      filename: 'scar-spectrum.svg',
      title: 'Severe Cutaneous Adverse Reactions Spectrum',
      description: 'Clinical features distinguishing SJS, TEN, and DRESS',
    },
  ],
  citations: [
    {
      id: 'drug-allergy-practice-parameter',
      type: 'article',
      title: 'Drug allergy: an updated practice parameter',
      authors: ['Joint Task Force on Practice Parameters'],
      source: 'Annals of Allergy, Asthma & Immunology',
    },
    {
      id: 'penicillin-allergy-delabeling',
      type: 'article',
      title: 'Penicillin Allergy Testing Should Be Performed Routinely',
      authors: ['Shenoy ES', 'Macy E', 'Rowe T', 'Blumenthal KG'],
      source: 'JAMA',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-type-iv-hypersensitivity', targetType: 'concept', relationship: 'related', label: 'Type IV Hypersensitivity' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'condition', relationship: 'see-also', label: 'Anaphylaxis' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'see-also', label: 'Allergy Testing' },
  ],
  tags: {
    systems: ['immune', 'integumentary'],
    topics: ['immunology', 'allergy', 'pharmacology', 'dermatology'],
    keywords: ['drug allergy', 'penicillin allergy', 'SJS', 'TEN', 'DRESS', 'desensitization', 'HLA'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'dermatology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default drugAllergiesContent;
