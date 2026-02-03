/**
 * Fever Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating fever, identifying serious
 * infections and other causes while guiding appropriate workup and treatment.
 */

import { DiagnosticAlgorithm } from '../types';

export const FEVER_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-fever',
  name: 'Fever Diagnostic Algorithm',
  alternateNames: ['Pyrexia Evaluation', 'Febrile Illness Workup'],
  presentation: 'Fever',
  icdCodes: ['R50.9', 'R50.81', 'R50.82', 'R50.83', 'R50.84'],

  levels: {
    1: {
      level: 1,
      summary: 'Fever means your body temperature is higher than normal. It usually means your body is fighting an infection.',
      explanation: `Fever is when your body gets hotter than usual. Normal body temperature is about 98.6F (37C). A fever is usually 100.4F (38C) or higher.

**Why Fever Happens:**
Fever is your body's way of fighting off germs like bacteria and viruses. When your immune system detects an invader, it raises your body temperature to help fight it off.

**Common Causes of Fever:**
1. **Colds and flu** - The most common cause
2. **Ear infections** - Common in children
3. **Sore throat/Strep throat**
4. **Urinary tract infections** - Burning with urination
5. **Stomach bugs** - With vomiting or diarrhea
6. **More serious infections** - Pneumonia, meningitis

**What Doctors Look For:**
1. **How high is the fever?** Very high fevers (over 103F) need more attention
2. **How long has it lasted?** Fevers lasting more than a few days need investigation
3. **What other symptoms?** Cough? Pain somewhere? Rash?
4. **How sick do you look?** Are you alert and active, or very weak and sick-looking?

**When to Get Help Right Away:**
- Fever in a baby under 3 months old (ALWAYS see a doctor)
- Very high fever (over 104F)
- Fever with stiff neck and bad headache
- Fever with rash that does not fade when pressed
- Fever with confusion or unusual behavior
- Fever lasting more than 3 days without improvement
- Fever with severe pain anywhere`,
      keyTerms: [
        { term: 'fever', definition: 'Body temperature higher than normal, usually over 100.4F (38C)' },
        { term: 'infection', definition: 'When germs like bacteria or viruses get into your body and make you sick' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights off germs' },
      ],
      analogies: [
        'Fever is like your body turning up the heat to make it uncomfortable for germs - like turning up the thermostat to chase away unwanted guests.',
        'Your immune system is like an army defending your body. Fever is one of its weapons.',
      ],
      examples: [
        'A child with a runny nose, cough, and fever of 101F probably has a common cold virus.',
        'An elderly person with fever, confusion, and burning with urination may have a urinary tract infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fever evaluation involves identifying the source of infection while recognizing patients who need immediate intervention for serious conditions like sepsis or meningitis.',
      explanation: `Fever is defined as a core body temperature of 38C (100.4F) or higher. It is a common symptom that can indicate anything from a minor viral illness to a life-threatening infection.

**Temperature Measurement:**
- Rectal: Most accurate
- Oral: Reliable in cooperative patients
- Axillary: Less accurate, typically 0.5-1F lower
- Tympanic/Temporal: Convenient but variable accuracy

**Categories of Fever:**
- Low-grade: 100.4-102.2F (38-39C)
- Moderate: 102.2-104F (39-40C)
- High: 104-106F (40-41C)
- Hyperpyrexia: >106F (>41.1C) - Medical emergency

**Systematic Approach - Finding the Source:**

1. **Respiratory System:**
   - Upper respiratory infection (most common): Runny nose, sore throat, cough
   - Pneumonia: Cough, shortness of breath, focal lung findings
   - Sinusitis: Facial pain, nasal congestion

2. **Urinary System:**
   - UTI/Pyelonephritis: Dysuria, frequency, flank pain
   - Very common in elderly (may present with confusion only)

3. **Gastrointestinal:**
   - Gastroenteritis: Nausea, vomiting, diarrhea
   - Appendicitis: RLQ pain
   - Cholecystitis: RUQ pain

4. **Skin/Soft Tissue:**
   - Cellulitis: Red, warm, swollen area
   - Abscess: Localized collection of pus
   - Wound infection: Recent surgery or injury

5. **Central Nervous System:**
   - Meningitis: Headache, stiff neck, photophobia
   - Encephalitis: Altered mental status, seizures

6. **Other:**
   - Endocarditis: Heart murmur, risk factors (IV drug use, valve disease)
   - Osteomyelitis: Bone pain
   - Septic arthritis: Joint swelling and pain

**Red Flags Requiring Immediate Attention:**
- Hemodynamic instability (sepsis)
- Altered mental status
- Petechial or purpuric rash (meningococcemia)
- Severe headache with nuchal rigidity (meningitis)
- Immunocompromised patient
- Fever in infant <3 months

**Basic Workup:**
- CBC: Elevated WBC suggests bacterial infection
- Urinalysis: Check for UTI
- Blood cultures: If sepsis suspected
- Chest X-ray: If respiratory symptoms present
- Lumbar puncture: If meningitis suspected`,
      keyTerms: [
        { term: 'sepsis', definition: 'A dangerous condition where infection spreads through the bloodstream, causing organ damage', pronunciation: 'SEP-sis' },
        { term: 'nuchal rigidity', definition: 'Stiff neck that resists bending - a sign of meningitis', pronunciation: 'NOO-kal rih-JID-ih-tee' },
        { term: 'petechiae', definition: 'Tiny red/purple spots on skin that do not fade with pressure - can indicate serious infection', pronunciation: 'peh-TEE-kee-eye' },
        { term: 'bacteremia', definition: 'Bacteria present in the bloodstream', pronunciation: 'bak-teer-EE-mee-ah' },
      ],
      analogies: [
        'Looking for the source of fever is like being a detective - you check different areas of the body for clues.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fever evaluation integrates systematic source identification, risk stratification for serious bacterial infection, and targeted diagnostic testing guided by clinical probability and patient factors.',
      explanation: `## Systematic Approach to Fever

### Initial Assessment
- Vital signs: Temperature, HR, BP, RR, SpO2
- Assess for sepsis (qSOFA, SIRS criteria)
- Determine acuity and need for immediate intervention

### Pathophysiology of Fever

**Fever Generation:**
- Exogenous pyrogens (microbial products) trigger endogenous pyrogen release (IL-1, IL-6, TNF-alpha)
- These act on hypothalamic thermoregulatory center
- Reset point elevated → heat conservation and production
- PGE2 is the final mediator (hence antipyretic effect of NSAIDs)

**Fever Patterns (limited diagnostic utility):**
- Continuous: Sustained elevation (typhoid, lobar pneumonia)
- Remittent: Daily fluctuation but never normal (most infections)
- Intermittent: Periods of normal temperature (abscess, malaria)
- Relapsing: Fever-free periods of days (Borrelia, lymphoma)

### Sepsis Recognition

**qSOFA (Quick SOFA) - any 2 of:**
- Respiratory rate ≥22
- Altered mental status
- Systolic BP ≤100 mmHg

**SIRS Criteria (2 or more):**
- Temperature >38C or <36C
- Heart rate >90
- Respiratory rate >20 or PaCO2 <32
- WBC >12,000 or <4,000 or >10% bands

**Sepsis-3 Definition:**
- Suspected infection + SOFA score increase ≥2
- Septic shock: Sepsis + vasopressors needed + lactate >2 despite adequate fluid resuscitation

### Source-Directed Workup

**Respiratory:**
- CXR for pneumonia if: Abnormal lung exam, hypoxia, respiratory symptoms
- Consider CT if CXR negative but high suspicion
- Respiratory viral panel (influenza, RSV, COVID-19)

**Urinary:**
- UA + culture: Essential in elderly, women, catheterized patients
- CT if pyelonephritis suspected or not improving

**CNS:**
- LP indications: Headache + fever + altered mental status, nuchal rigidity
- CT before LP if: Immunocompromised, CNS disease history, new seizure, papilledema, focal deficits
- CSF: Cell count, protein, glucose, Gram stain, culture, consider viral PCR

**Cardiovascular:**
- Blood cultures x2 (from different sites) before antibiotics
- Echo if endocarditis suspected (murmur + fever, bacteremia without source)

**Abdominal:**
- CT abdomen/pelvis for suspected intra-abdominal source
- Hepatobiliary ultrasound for RUQ pain

**Skin/Soft Tissue:**
- Clinical diagnosis usually sufficient
- Imaging (CT, MRI) for necrotizing fasciitis concern
- Surgical consultation if necrotizing infection suspected

### Special Populations

**Neutropenic Fever:**
- Definition: ANC <500/mm3 (or expected to decline) + T ≥38.3C once or ≥38C for 1 hour
- Emergency: Blood cultures, broad-spectrum antibiotics immediately
- Often no identifiable source
- Anti-pseudomonal beta-lactam as empiric therapy

**HIV/AIDS:**
- Consider opportunistic infections based on CD4 count
- CD4 <200: PCP, toxoplasmosis, cryptococcus, MAC
- Atypical presentations common

**Post-operative Fever:**
- 5 W's: Wind (atelectasis/pneumonia), Water (UTI), Wound (surgical site infection), Walking (DVT), Wonder drugs (drug fever)
- POD 1-2: Usually atelectasis
- POD 3-5: UTI, pneumonia
- POD 5-7: Wound infection
- POD 7+: DVT/PE, abscess

**Fever of Unknown Origin (FUO):**
- Classic definition: T >38.3C on several occasions, >3 weeks duration, no diagnosis after 1 week of inpatient evaluation
- Categories: Infectious (25-50%), Malignancy (20-30%), Autoimmune (10-20%), Miscellaneous (10-15%), Undiagnosed (20%)

### Diagnostic Testing Strategy

| Clinical Situation | First-Line Tests |
|-------------------|------------------|
| Undifferentiated fever | CBC, BMP, UA, blood cultures, CXR |
| Sepsis suspected | Above + lactate, procalcitonin |
| Meningitis concern | LP (CT first if indicated) |
| Respiratory symptoms | CXR, respiratory viral panel |
| Abdominal symptoms | CT abdomen/pelvis |
| Skin/soft tissue | Clinical exam, consider imaging for deep infection |
| Neutropenic | Cultures, CXR, empiric antibiotics |`,
      keyTerms: [
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment - bedside screening tool for sepsis' },
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment - scores 6 organ systems to quantify organ dysfunction' },
        { term: 'procalcitonin', definition: 'Biomarker that rises in bacterial infection; can help distinguish bacterial from viral', pronunciation: 'proh-kal-sih-TOH-nin' },
        { term: 'FUO', definition: 'Fever of Unknown Origin - prolonged fever without diagnosis despite initial workup' },
      ],
      clinicalNotes: 'In elderly patients, fever may be blunted or absent despite serious infection. Baseline temperatures tend to be lower, so a temperature of 99F may represent significant fever in an older patient. Maintain high suspicion even with normal/near-normal temperatures.',
    },
    4: {
      level: 4,
      summary: 'Advanced fever evaluation integrates biomarker interpretation, risk stratification algorithms, and understanding of pathogen-specific presentations to guide empiric therapy and optimize diagnostic yield.',
      explanation: `## Advanced Diagnostic Framework

### Biomarker Interpretation

**Procalcitonin (PCT):**
- Normal: <0.1 ng/mL
- Bacterial infection likely: >0.5 ng/mL
- Severe sepsis/shock: >2-10 ng/mL
- Advantages: Rises rapidly (4-6 hours), helps guide antibiotic duration
- Limitations: False positives (surgery, trauma, burns, cardiogenic shock), false negatives (localized infections, intracellular bacteria)

**C-Reactive Protein (CRP):**
- Rises within 6 hours, peaks at 48 hours
- Less specific than PCT for bacterial infection
- Useful for monitoring response to therapy
- Very high levels (>15-20 mg/dL) suggest bacterial infection

**Lactate:**
- Normal: <2 mmol/L
- Elevated in sepsis due to tissue hypoperfusion
- Lactate >4 associated with high mortality
- Serial measurements guide resuscitation

**White Blood Cell Count:**
- Leukocytosis: Bacterial infection, stress response
- Leukopenia: Severe sepsis (poor prognosis), viral infection, marrow suppression
- Left shift (bandemia): Suggests acute bacterial infection
- Leukemoid reaction (>50,000): Consider C. difficile, malignancy

### Sepsis Management (Surviving Sepsis Campaign)

**Hour-1 Bundle:**
1. Measure lactate (remeasure if >2)
2. Obtain blood cultures before antibiotics
3. Administer broad-spectrum antibiotics
4. Begin rapid fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate ≥4)
5. Apply vasopressors if hypotensive during or after fluid resuscitation (target MAP ≥65)

**Empiric Antibiotic Selection Principles:**
- Cover all likely pathogens
- Consider local resistance patterns
- Adjust based on culture results
- De-escalate when possible

**Source Control:**
- Essential component of sepsis management
- Drainage of abscesses
- Removal of infected devices
- Debridement of necrotic tissue

### Specific Pathogen Considerations

**Gram-Positive Coverage:**
- MSSA: Nafcillin, cefazolin
- MRSA: Vancomycin, daptomycin, linezolid
- Enterococcus: Ampicillin (if susceptible), vancomycin

**Gram-Negative Coverage:**
- Community-acquired: Ceftriaxone, fluoroquinolones
- Pseudomonas: Piperacillin-tazobactam, cefepime, carbapenems
- ESBL producers: Carbapenems
- CRE: Ceftazidime-avibactam, polymyxins

**Atypical Pathogens:**
- Legionella: Fluoroquinolone or azithromycin
- Mycoplasma: Azithromycin, doxycycline

### Risk Stratification in Specific Scenarios

**Pediatric Fever (Rochester/Boston/Philadelphia Criteria for infants):**
- Low risk for serious bacterial infection (SBI):
  - Previously healthy
  - Non-toxic appearing
  - No focal bacterial infection on exam
  - WBC 5,000-15,000
  - Normal UA
  - (Criteria vary by age group)

**Returning Traveler with Fever:**
- Consider by incubation period and geography
- Short incubation (<10 days): Dengue, chikungunya, rickettsial diseases, acute HIV
- Medium incubation (10-21 days): Malaria, typhoid, leptospirosis
- Long incubation (>21 days): Tuberculosis, hepatitis, malaria (P. vivax, P. ovale)
- Thick/thin smear for malaria is urgent if suspected

**Drug Fever:**
- Timing: Usually 7-10 days after starting drug (but can be earlier with re-exposure)
- Features: Often well-appearing despite high fever, relative bradycardia, eosinophilia (sometimes)
- Common causes: Beta-lactams, sulfonamides, anticonvulsants
- Diagnosis: Resolution 48-72 hours after stopping offending agent

### Advanced Diagnostic Modalities

**Metagenomic Next-Generation Sequencing:**
- Identifies pathogens by sequencing all nucleic acids in sample
- Useful for culture-negative infections
- CSF, blood, tissue applications
- Detects bacteria, viruses, fungi, parasites simultaneously

**18F-FDG PET/CT:**
- Localizes sites of inflammation/infection
- Useful in FUO, bacteremia without source, suspected endovascular infection
- High sensitivity for detecting occult infection

**Indium-111 or Tc-99m WBC Scan:**
- Localizes infection by labeled white blood cells
- Alternative to PET/CT
- Lower sensitivity than PET/CT for some indications`,
      keyTerms: [
        { term: 'Surviving Sepsis Campaign', definition: 'International collaboration providing evidence-based guidelines for sepsis management' },
        { term: 'ESBL', definition: 'Extended-Spectrum Beta-Lactamase - enzyme making bacteria resistant to many antibiotics' },
        { term: 'CRE', definition: 'Carbapenem-Resistant Enterobacteriaceae - highly resistant gram-negative bacteria' },
        { term: 'metagenomic sequencing', definition: 'Technique to identify any pathogen by sequencing all genetic material in a sample' },
      ],
      clinicalNotes: 'The Hour-1 bundle for sepsis emphasizes that early antibiotics and fluid resuscitation save lives. Every hour of delay in antibiotics is associated with increased mortality. Do not wait for cultures if sepsis is suspected.',
    },
    5: {
      level: 5,
      summary: 'Expert fever management requires integration of host factors, pathogen characteristics, antimicrobial stewardship principles, and recognition of emerging infectious threats while navigating diagnostic uncertainty in complex presentations.',
      explanation: `## Expert-Level Diagnostic Considerations

### Complex Fever Syndromes

**Fever of Unknown Origin - Modern Approach:**

*Updated diagnostic criteria:*
- Outpatient-based definition now preferred
- Fever >38.3C on multiple occasions
- Duration varies by setting (3 weeks traditional, shorter for neutropenic FUO)
- Basic workup negative

*Systematic evaluation:*
1. **Detailed history:** Travel, exposures, occupational, sexual, medications, family history (FMF, other autoinflammatory)
2. **Physical exam:** Lymph nodes, skin, mucous membranes, spleen, joints, teeth
3. **First-tier tests:** CBC with differential, CMP, LFTs, ESR, CRP, ferritin, LDH, ANA, RF, blood cultures x3, UA/culture, HIV, CXR
4. **Second-tier based on clues:** CT chest/abdomen/pelvis, echocardiogram, PET/CT
5. **Invasive testing:** Bone marrow biopsy, lymph node biopsy, temporal artery biopsy

*Diagnostic clues in FUO:*
| Finding | Consider |
|---------|----------|
| Relative bradycardia | Drug fever, typhoid, Legionella, factitious |
| Very high ferritin (>10,000) | HLH, Adult-onset Still disease |
| Lymphadenopathy | Lymphoma, TB, cat scratch, HIV |
| Hepatomegaly | Abscess, malignancy, viral hepatitis |
| Splenomegaly | Endocarditis, EBV, lymphoma, malaria |
| Heart murmur | Endocarditis |

**Hemophagocytic Lymphohistiocytosis (HLH):**
- Triggered by infections (EBV, CMV), malignancy, autoimmune (MAS)
- Features: Persistent fever, cytopenias, hepatosplenomegaly
- Labs: Hyperferritinemia (>500, often >10,000), elevated triglycerides, low fibrinogen, elevated soluble IL-2 receptor
- Bone marrow: Hemophagocytosis (not always present)
- HLH-2004 criteria for diagnosis
- Treatment: Treat underlying cause, immunosuppression (often etoposide, dexamethasone)

**Adult-Onset Still Disease:**
- Classic triad: Quotidian (daily) fever, salmon-colored rash, arthritis
- Markedly elevated ferritin (often >10,000), high WBC, normal RF and ANA
- Diagnosis of exclusion

### Antimicrobial Stewardship Considerations

**Principles:**
- Right drug, right dose, right duration, right route
- De-escalation when possible
- Duration optimization (shorter courses often sufficient)
- Avoid unnecessary antibiotics

**Duration Evidence:**
| Condition | Evidence-Based Duration |
|-----------|------------------------|
| CAP | 5 days if clinically stable |
| Uncomplicated UTI | 3-5 days |
| Pyelonephritis | 7 days (oral) |
| Uncomplicated cellulitis | 5-6 days |
| Bacteremia (GNR, uncomplicated) | 7 days |
| Intra-abdominal infection | 4 days if source controlled |

**Procalcitonin-Guided Therapy:**
- Can safely reduce antibiotic duration
- Stop antibiotics when PCT <0.25 or >80% decrease from peak
- Reduces antibiotic exposure without increasing mortality

### Emerging and Re-emerging Infections

**Considerations:**
- COVID-19: Still circulating, variants emerge
- Influenza: Seasonal and pandemic potential
- Monkeypox/Mpox: Endemic in some regions, outbreaks elsewhere
- Candida auris: Multidrug-resistant, healthcare-associated
- Antimicrobial resistance: Growing threat across pathogens

**Outbreak Investigation Triggers:**
- Unusual clustering of cases
- Unexpected pathogen or resistance pattern
- Healthcare-associated infection increase
- Travel-associated illness

### Immunocompromised Host

**Timeline of Infections Post-Transplant:**
- Month 1: Surgical site, catheter-related, donor-derived
- Months 1-6: CMV, EBV, PCP, Aspergillus
- >6 months: Community-acquired, VZV, late CMV

**Based on Immune Defect:**
| Defect | Pathogens |
|--------|-----------|
| Neutropenia | Gram-negative bacteria, Aspergillus, Candida |
| Cell-mediated (T-cell) | PCP, Toxoplasma, CMV, Cryptococcus, Nocardia |
| Humoral (B-cell) | Encapsulated bacteria (Strep pneumo, H. flu, Neisseria) |
| Complement | Neisseria |
| Splenectomy | Encapsulated bacteria |

### Diagnostic Pearls and Pitfalls

**Pearls:**
1. Relative bradycardia (pulse-temperature dissociation) suggests intracellular pathogens, drug fever, or factitious fever
2. Ferritin >10,000 should prompt evaluation for HLH or Still disease
3. Culture-negative endocarditis: Consider HACEK, Bartonella, Coxiella, fungi
4. Travel history is essential - ask about all travel in past year
5. Temporal artery biopsy should not delay steroids if GCA suspected

**Pitfalls:**
1. Attributing fever to drug without full evaluation
2. Missing deep-seated infections (abscess, endocarditis) in bacteremia
3. Inadequate duration of blood culture incubation (fastidious organisms)
4. Anchoring on one diagnosis when response is inadequate
5. Over-reliance on procalcitonin in conditions where it may be unreliable

### Emerging Diagnostic Technologies

**Syndromic Panels:**
- Multiplex PCR panels for respiratory, GI, meningitis/encephalitis, blood
- Rapid results (1-2 hours)
- Detect common pathogens
- Limitations: May miss uncommon pathogens, resistance genes

**T2 Magnetic Resonance:**
- Detects Candida species directly from blood
- Faster than culture
- Useful in high-risk populations

**Rapid AST (Antimicrobial Susceptibility Testing):**
- Results in hours rather than days
- Can guide earlier targeted therapy
- Technology improving rapidly`,
      keyTerms: [
        { term: 'HLH', definition: 'Hemophagocytic Lymphohistiocytosis - syndrome of excessive immune activation with cytopenias and hyperferritinemia' },
        { term: 'MAS', definition: 'Macrophage Activation Syndrome - HLH in context of rheumatologic disease' },
        { term: 'HACEK', definition: 'Group of gram-negative bacteria causing culture-negative endocarditis: Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella' },
        { term: 'quotidian fever', definition: 'Fever that spikes daily and returns to normal or below normal' },
      ],
      clinicalNotes: `Key clinical pearls:
1. If the clinical picture does not fit the diagnosis, the diagnosis is wrong - reassess
2. In FUO, pattern of fever rarely diagnostic - do not over-interpret
3. Source control is as important as antibiotics in sepsis
4. Antibiotic de-escalation is safe and reduces resistance pressure
5. Every fever does not need antibiotics - viral infections remain common even in hospitalized patients`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'First, check how sick the person looks and get their temperature and other vital signs.',
        2: 'Initial assessment: Vital signs, general appearance (well vs. toxic), quick search for obvious source of infection.',
        3: 'Assess stability: Vital signs, mental status, perfusion. Apply qSOFA/SIRS criteria. Identify need for immediate intervention.',
        4: 'Systematic initial assessment: Hemodynamic stability, organ perfusion (mental status, urine output, lactate), identification of sepsis or severe presentation requiring urgent management.',
        5: 'Expert triage: Recognize subtle signs of serious infection. Identify immunocompromised host. Assess for septic shock criteria. Prioritize source identification while initiating resuscitation.',
      },
      nextSteps: [
        { condition: 'Sepsis or unstable', targetStepId: 'sepsis-pathway' },
        { condition: 'Stable for evaluation', targetStepId: 'source-identification' },
        { condition: 'Special population', targetStepId: 'special-population' },
      ],
    },
    {
      id: 'sepsis-pathway',
      type: 'warning',
      content: {
        1: 'EMERGENCY: This person is very sick with infection spreading through their body. They need immediate treatment!',
        2: 'CRITICAL: Sepsis suspected. Start IV fluids, get blood cultures, give antibiotics immediately. Monitor closely in intensive care setting.',
        3: 'Sepsis management: Hour-1 bundle - measure lactate, blood cultures, broad-spectrum antibiotics, 30 mL/kg crystalloid for hypotension or lactate ≥4, vasopressors if needed for MAP ≥65.',
        4: 'Implement Surviving Sepsis guidelines. Source control essential. Monitor lactate clearance. Broad-spectrum antibiotics covering likely pathogens based on suspected source and local resistance.',
        5: 'Expert sepsis management: Balance early broad antibiotics with stewardship. Consider source (community vs. healthcare-associated, recent antibiotics). Plan for de-escalation. Address source control urgently.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'Source identified', targetStepId: 'source-specific-treatment' },
        { condition: 'Source unclear', targetStepId: 'empiric-management' },
      ],
    },
    {
      id: 'source-identification',
      type: 'question',
      content: {
        1: 'Let us figure out where the infection is coming from. Do you have any pain? Cough? Burning with urination?',
        2: 'Systematic symptom review: Respiratory (cough, sputum, shortness of breath), urinary (dysuria, frequency), GI (diarrhea, vomiting, abdominal pain), skin (redness, swelling), CNS (headache, stiff neck).',
        3: 'System-by-system evaluation: Head/neck (sinusitis, pharyngitis, dental), lungs (pneumonia), abdomen (intra-abdominal infection), urinary (UTI/pyelonephritis), skin/soft tissue, joints, CNS, cardiovascular (endocarditis).',
        4: 'Detailed source investigation: Consider common and uncommon sources. Review risk factors (recent surgery, devices, travel, exposures). Targeted physical exam for each system.',
        5: 'Expert source identification: Consider occult sources (abscess, endocarditis, osteomyelitis). Risk factor-directed evaluation. Consider PET/CT if bacteremia without source.',
      },
      nextSteps: [
        { condition: 'Respiratory source', targetStepId: 'respiratory-infection' },
        { condition: 'Urinary source', targetStepId: 'urinary-infection' },
        { condition: 'Abdominal source', targetStepId: 'abdominal-infection' },
        { condition: 'Skin/soft tissue', targetStepId: 'skin-infection' },
        { condition: 'Meningitis concern', targetStepId: 'meningitis-evaluation' },
        { condition: 'No clear source', targetStepId: 'undifferentiated-fever' },
      ],
    },
    {
      id: 'special-population',
      type: 'decision',
      content: {
        1: 'Some people need extra careful evaluation when they have a fever, like babies or people with weak immune systems.',
        2: 'Special populations require modified approach: Infants <3 months always need full workup. Immunocompromised need broad coverage. Returning travelers need malaria consideration.',
        3: 'Special population management: Neutropenic fever requires immediate broad-spectrum antibiotics. Infant fever requires full sepsis workup. Post-operative fever follows the 5 W\'s. Traveler needs geography-specific evaluation.',
        4: 'Risk-stratified approach: Apply appropriate criteria (Rochester/Philadelphia for infants). Neutropenic fever is emergency. Consider opportunistic infections in HIV/transplant. Pregnant patients have unique considerations.',
        5: 'Expert special population management: Understand nuances of immunocompromise type. Apply MASCC risk index for neutropenic fever. Consider latent TB reactivation, viral reactivation syndromes.',
      },
      nextSteps: [
        { condition: 'Infant fever', targetStepId: 'infant-fever' },
        { condition: 'Neutropenic fever', targetStepId: 'neutropenic-fever' },
        { condition: 'Returning traveler', targetStepId: 'travel-fever' },
      ],
    },
    {
      id: 'respiratory-infection',
      type: 'decision',
      content: {
        1: 'Your fever seems to be from an infection in your lungs or breathing passages.',
        2: 'Respiratory source identified. Differentiate upper respiratory infection (viral) from pneumonia (may need antibiotics). Chest X-ray if pneumonia suspected.',
        3: 'Respiratory infection evaluation: CXR for pneumonia assessment. Respiratory viral panel. Consider atypical pathogens (Legionella, Mycoplasma). Sputum culture if productive cough.',
        4: 'Severity assessment for pneumonia: CURB-65 or PSI for disposition. Consider respiratory failure indicators. Differentiate CAP from HAP/VAP (different pathogens). Procalcitonin may guide antibiotic decision.',
        5: 'Expert respiratory evaluation: Consider complications (empyema, abscess). HAP/VAP coverage for resistant organisms. Severe pneumonia may need bronchoscopy. Immunocompromised needs PCP, fungal, viral consideration.',
      },
      nextSteps: [
        { condition: 'Viral URI', targetStepId: 'supportive-care' },
        { condition: 'Bacterial pneumonia', targetStepId: 'pneumonia-treatment' },
      ],
    },
    {
      id: 'urinary-infection',
      type: 'decision',
      content: {
        1: 'Your fever may be from a urinary tract infection.',
        2: 'Urinary source likely. Obtain urinalysis and culture. Differentiate simple UTI from pyelonephritis (kidney infection) based on fever, flank pain.',
        3: 'UTI evaluation: UA with culture. Simple cystitis vs. pyelonephritis distinction crucial for treatment duration. CT if complicated (abscess, obstruction) suspected.',
        4: 'Stratified UTI management: Uncomplicated cystitis in women: 3-5 days antibiotics. Pyelonephritis: 7-14 days, consider IV if septic or unable to tolerate oral. Complicated UTI (male, structural, catheter) needs longer treatment.',
        5: 'Expert UTI management: Consider resistant organisms (ESBL) based on recent antibiotics, healthcare exposure. Prostatitis in men. Candiduria significance (usually colonization, treat if symptomatic or high-risk).',
      },
      nextSteps: [
        { condition: 'Simple UTI', targetStepId: 'uti-treatment' },
        { condition: 'Pyelonephritis', targetStepId: 'pyelonephritis-treatment' },
        { condition: 'Complicated UTI', targetStepId: 'complicated-uti' },
      ],
    },
    {
      id: 'meningitis-evaluation',
      type: 'warning',
      content: {
        1: 'EMERGENCY: Fever with severe headache and stiff neck could be meningitis. This needs immediate treatment!',
        2: 'CRITICAL: Meningitis suspected. Start empiric antibiotics immediately. Lumbar puncture for diagnosis (CT first if indicated). This is a medical emergency.',
        3: 'Meningitis management: Empiric antibiotics (ceftriaxone + vancomycin + dexamethasone in adults) BEFORE LP. CT before LP only if: Immunocompromised, CNS disease, new seizure, papilledema, focal deficits, GCS <10.',
        4: 'CSF interpretation: Bacterial (high WBC/PMN, low glucose, high protein), viral (lymphocytes, normal glucose), HSV (send PCR). Add ampicillin for Listeria coverage if >50 or immunocompromised.',
        5: 'Expert meningitis management: Consider acyclovir empirically if encephalitis possible. Specific CSF findings guide therapy. Duration: Pneumococcus 10-14d, Meningococcus 7d, GNR 21d. Chemoprophylaxis for close contacts of meningococcus.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
    },
    {
      id: 'undifferentiated-fever',
      type: 'action',
      content: {
        1: 'We are not sure yet where the infection is coming from. More tests are needed.',
        2: 'No clear source identified. Basic workup: CBC, metabolic panel, urinalysis, blood cultures, chest X-ray. Further testing based on results.',
        3: 'Undifferentiated fever workup: Comprehensive labs, cultures (blood, urine), CXR. Consider CT imaging if high suspicion for occult source. Biomarkers (procalcitonin, CRP) may help guide.',
        4: 'Systematic evaluation: If initial workup negative, expand to CT abdomen/pelvis, echocardiogram (if bacteremia or murmur). Consider FUO workup criteria if prolonged.',
        5: 'Expert approach to undifferentiated fever: Consider non-infectious causes (malignancy, autoimmune, drug fever). PET/CT for occult infection. Metagenomic testing if cultures negative but infection suspected.',
      },
      nextSteps: [
        { condition: 'Source identified', targetStepId: 'source-specific-treatment' },
        { condition: 'Prolonged fever', targetStepId: 'fuo-workup' },
      ],
    },
    {
      id: 'neutropenic-fever',
      type: 'endpoint',
      content: {
        1: 'EMERGENCY: Fever with very low white blood cells is dangerous. You need antibiotics right away.',
        2: 'Neutropenic fever is an emergency. Blood cultures and broad-spectrum IV antibiotics immediately. Do not wait for culture results.',
        3: 'Neutropenic fever management: Blood cultures from all lumens if central line. Anti-pseudomonal beta-lactam (cefepime, pip-tazo, meropenem) immediately. Add vancomycin if catheter infection, skin/soft tissue, hemodynamic instability.',
        4: 'Risk stratification: MASCC score identifies low-risk patients who may be candidates for oral therapy or early discharge. High-risk patients require hospitalization. Add antifungal if fever persists >4-7 days.',
        5: 'Expert neutropenic fever management: Consider antifungal prophylaxis failure. Mold-active coverage if prolonged neutropenia. G-CSF support decision. Infectious disease and oncology collaboration.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
    },
    {
      id: 'supportive-care',
      type: 'endpoint',
      content: {
        1: 'Your fever is likely from a virus. Rest, drink fluids, and take medicine to lower the fever if it makes you uncomfortable.',
        2: 'Viral illness does not need antibiotics. Supportive care: Rest, fluids, acetaminophen or ibuprofen for fever and comfort. Return if worsening or new concerning symptoms.',
        3: 'Viral syndrome management: Supportive care only. Set expectations (may last 7-10 days). Clear return precautions. Consider influenza testing and treatment if within 48 hours of symptom onset.',
        4: 'Evidence-based supportive care: Fever does not need to be treated unless causing discomfort. Avoid antibiotics for viral illness. Consider specific antiviral therapy if influenza confirmed early.',
        5: 'Expert viral illness management: Consider antiviral therapy for high-risk patients. Recognize post-viral syndromes. Monitor for secondary bacterial infection. Counsel on transmission prevention.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Viral Upper Respiratory Infection',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Rhinorrhea', 'Cough', 'Sore throat', 'Low-grade fever', 'Gradual onset', 'Self-limited'],
    },
    {
      diagnosis: 'Community-Acquired Pneumonia',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Cough', 'Fever', 'Dyspnea', 'Focal lung findings', 'CXR infiltrate', 'Elevated WBC'],
    },
    {
      diagnosis: 'Urinary Tract Infection/Pyelonephritis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Dysuria', 'Frequency', 'Flank pain (pyelonephritis)', 'Pyuria', 'Positive urine culture'],
    },
    {
      diagnosis: 'Bacterial Meningitis',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Fever', 'Severe headache', 'Nuchal rigidity', 'Altered mental status', 'Photophobia', 'Petechial rash (meningococcal)'],
    },
    {
      diagnosis: 'Sepsis',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Fever or hypothermia', 'Tachycardia', 'Tachypnea', 'Hypotension', 'Altered mental status', 'Elevated lactate'],
    },
    {
      diagnosis: 'Cellulitis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Localized erythema', 'Warmth', 'Swelling', 'Tenderness', 'Fever', 'Clear margins'],
    },
    {
      diagnosis: 'Endocarditis',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Fever', 'New or changing murmur', 'Bacteremia', 'IV drug use', 'Prosthetic valve', 'Embolic phenomena'],
    },
    {
      diagnosis: 'Intra-abdominal Infection',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Fever', 'Abdominal pain', 'Localized tenderness', 'Elevated WBC', 'CT findings of abscess, appendicitis, diverticulitis'],
    },
    {
      diagnosis: 'Drug Fever',
      prevalence: 'uncommon',
      urgency: 'routine',
      keyFeatures: ['Fever 7-10 days after starting medication', 'Otherwise well-appearing', 'Relative bradycardia', 'Eosinophilia', 'Resolution 48-72h after stopping drug'],
    },
    {
      diagnosis: 'Fever of Unknown Origin',
      prevalence: 'uncommon',
      urgency: 'routine',
      keyFeatures: ['Fever >38.3C on multiple occasions', '>3 weeks duration', 'No diagnosis after initial workup', 'Categories: Infection, malignancy, autoimmune'],
    },
  ],

  redFlags: [
    {
      finding: 'Fever in infant <3 months',
      implication: 'High risk for serious bacterial infection',
      action: 'Full sepsis workup, empiric antibiotics, hospital admission',
    },
    {
      finding: 'Hypotension with fever (septic shock)',
      implication: 'Life-threatening sepsis with organ hypoperfusion',
      action: 'Immediate fluid resuscitation, antibiotics, vasopressors, ICU admission',
    },
    {
      finding: 'Fever with petechial/purpuric rash',
      implication: 'Meningococcemia or other serious infection with DIC',
      action: 'Immediate antibiotics (ceftriaxone), ICU level care',
    },
    {
      finding: 'Fever with nuchal rigidity',
      implication: 'Meningitis',
      action: 'Immediate antibiotics, lumbar puncture (CT first if indicated)',
    },
    {
      finding: 'Neutropenic fever (ANC <500)',
      implication: 'High risk for rapid progression of infection',
      action: 'Immediate blood cultures and broad-spectrum antibiotics',
    },
    {
      finding: 'Fever with severe headache and altered mental status',
      implication: 'CNS infection (meningitis, encephalitis)',
      action: 'Empiric antibiotics and acyclovir, urgent neuroimaging and LP',
    },
    {
      finding: 'High fever (>106F/41C)',
      implication: 'Hyperpyrexia - risk of end-organ damage',
      action: 'Aggressive cooling measures, evaluate for heat stroke, infection',
    },
    {
      finding: 'Fever with rigors and hypotension in patient with central line',
      implication: 'Line infection with sepsis',
      action: 'Blood cultures from line and peripheral, consider line removal, broad-spectrum antibiotics',
    },
  ],

  media: [
    {
      id: 'fever-algorithm-flowchart',
      type: 'diagram',
      filename: 'fever-algorithm.svg',
      title: 'Fever Evaluation Algorithm',
      description: 'Flowchart for systematic fever evaluation',
    },
    {
      id: 'sepsis-bundles',
      type: 'diagram',
      filename: 'sepsis-bundles.svg',
      title: 'Surviving Sepsis Campaign Bundles',
      description: 'Visual guide to sepsis management bundles',
    },
  ],

  citations: [
    {
      id: 'surviving-sepsis-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans L', 'et al.'],
      source: 'Intensive Care Medicine',
      url: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines',
    },
    {
      id: 'idsa-neutropenic-fever',
      type: 'article',
      title: 'Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer',
      authors: ['Freifeld AG', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'fuo-review',
      type: 'article',
      title: 'Fever of Unknown Origin: A Clinical Approach',
      source: 'American Family Physician',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-dyspnea', targetType: 'pathway', relationship: 'related', label: 'Dyspnea Algorithm' },
    { targetId: 'algorithm-abdominal-pain', targetType: 'pathway', relationship: 'related', label: 'Abdominal Pain Algorithm' },
    { targetId: 'red-flags-infectious', targetType: 'topic', relationship: 'related', label: 'Infectious Red Flags' },
  ],

  tags: {
    systems: ['infectious', 'immunologic'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'infectious-disease', 'critical-care'],
    keywords: ['fever', 'sepsis', 'infection', 'meningitis', 'pneumonia', 'UTI', 'neutropenic fever'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const feverDiagnosticAlgorithm = FEVER_ALGORITHM;
export default FEVER_ALGORITHM;
