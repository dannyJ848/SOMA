import { EducationalContent } from '../../types';

export const upperRespiratoryInfections: EducationalContent = {
  id: 'infectious-disease-uri',
  type: 'condition',
  name: 'Upper Respiratory Infections',
  alternateNames: ['URI', 'Common Cold', 'Upper Respiratory Tract Infection', 'URTI'],

  levels: {
    1: {
      level: 1,
      summary: 'Upper respiratory infections are very common illnesses that affect your nose, throat, and sinuses, usually caused by viruses like the common cold.',
      explanation: `Upper respiratory infections (URIs) are the most common type of infection people get. They affect the upper parts of your breathing system - your nose, throat, and sinuses.

**What Causes URIs:**
- **Viruses** cause most URIs (over 90%)
- The "common cold" is usually caused by rhinoviruses
- Other viruses include coronavirus, RSV, and adenovirus
- Bacteria rarely cause URIs (less than 10%)

**Common Symptoms:**
- Runny or stuffy nose
- Sneezing
- Sore throat
- Cough
- Mild fever
- Feeling tired
- Headache

**How You Catch It:**
- Breathing in droplets when someone sneezes or coughs
- Touching surfaces with germs, then touching your face
- Being close to sick people

**What Helps:**
- Rest and sleep
- Drink plenty of fluids
- Honey for cough (not for babies under 1 year)
- Over-the-counter medicines for symptoms
- Saline nose spray

**Important Facts:**
- Most URIs get better on their own in 7-10 days
- **Antibiotics don't work** for viral infections!
- Cough can last 2-3 weeks even after you feel better
- See a doctor if symptoms get worse or don't improve`,
      keyTerms: [
        { term: 'virus', definition: 'A tiny germ that causes illness - much smaller than bacteria' },
        { term: 'URI', definition: 'Short for Upper Respiratory Infection - an infection of the nose, throat, or sinuses' },
        { term: 'contagious', definition: 'Able to spread from one person to another' },
      ],
      analogies: [
        'Your nose and throat are like the entrance hallway to your lungs - URIs are like unwanted visitors that camp out in the hallway.',
        'Antibiotics trying to fight viruses is like using a flyswatter to catch fish - wrong tool for the job!',
      ],
      examples: [
        'The common cold is the most frequent URI - adults get 2-3 colds per year, children get even more.',
        'Green or yellow mucus does NOT mean you need antibiotics - it just means your immune system is working.',
      ],
    },
    2: {
      level: 2,
      summary: 'Upper respiratory infections are predominantly viral illnesses affecting the nasal passages, pharynx, and sinuses, characterized by self-limited courses not requiring antibiotic treatment.',
      explanation: `Upper respiratory tract infections (URTIs) encompass infections of the nose, paranasal sinuses, pharynx, and larynx. They are among the most common reasons for medical visits and antibiotic prescriptions.

**Viral Etiology (>90% of cases):**
- **Rhinoviruses** (30-50%): >100 serotypes, peak in fall/spring
- **Coronaviruses** (10-15%): Peak in winter
- **Influenza** (5-15%): Seasonal epidemics
- **RSV** (5%): Important in young children and elderly
- **Parainfluenza** (5%): Causes croup in children
- **Adenovirus** (5%): Can persist for weeks

**Clinical Syndromes:**

1. **Common Cold (Rhinitis)**
   - Rhinorrhea, sneezing, nasal congestion
   - Mild sore throat, cough
   - Low-grade fever (more common in children)
   - Duration: 7-10 days

2. **Pharyngitis (Sore Throat)**
   - 90% viral in adults
   - Only 15-30% caused by Group A Strep (GAS)
   - Viral: gradual onset, associated cold symptoms
   - Bacterial: abrupt onset, high fever, exudates

3. **Acute Rhinosinusitis**
   - Usually viral, follows cold symptoms
   - Bacterial if: >10 days, "double worsening," severe onset
   - Facial pain/pressure, purulent drainage

4. **Laryngitis**
   - Hoarseness, voice changes
   - Usually viral, self-limited

**Why Antibiotics Are Not Helpful:**
- Viruses cannot be killed by antibiotics
- Antibiotics work only on bacteria
- Inappropriate use causes:
  - Antibiotic resistance
  - Side effects (diarrhea, allergic reactions)
  - Unnecessary cost
  - Disruption of healthy gut bacteria

**Symptomatic Treatment:**
- Analgesics: acetaminophen, ibuprofen
- Decongestants: pseudoephedrine, phenylephrine
- Antihistamines: for runny nose (first-generation)
- Cough suppressants: dextromethorphan, honey
- Nasal saline irrigation
- Adequate hydration and rest`,
      keyTerms: [
        { term: 'rhinorrhea', definition: 'Medical term for runny nose - excess nasal discharge', pronunciation: 'rye-no-REE-ah' },
        { term: 'pharyngitis', definition: 'Inflammation of the pharynx (throat), causing sore throat', pronunciation: 'fair-in-JY-tis' },
        { term: 'self-limited', definition: 'A condition that will resolve on its own without treatment' },
        { term: 'viral shedding', definition: 'Period when an infected person releases virus particles and can infect others' },
      ],
      analogies: [
        'Viruses are like unwanted house guests that your immune system eventually kicks out - antibiotics are bouncers that only work on bacteria, not viruses.',
      ],
    },
    3: {
      level: 3,
      summary: 'Upper respiratory infections represent a spectrum of viral syndromes affecting the upper airway, with bacterial superinfection occurring in <10% of cases, requiring careful clinical differentiation to avoid unnecessary antibiotic prescription.',
      explanation: `Understanding URI pathophysiology and appropriate management is essential for antimicrobial stewardship.

**Viral Pathogenesis:**

1. **Entry and Attachment**
   - Viruses enter via respiratory droplets or fomites
   - Attach to specific receptors on respiratory epithelium
   - Rhinoviruses: ICAM-1 receptors on nasal epithelium
   - Incubation: 24-72 hours

2. **Replication and Spread**
   - Viral replication in epithelial cells
   - Cell lysis releases inflammatory mediators
   - Peak viral shedding: days 2-3 of illness
   - Symptoms result from immune response, not tissue destruction

3. **Immune Response**
   - Innate: interferons, NK cells, neutrophils
   - Adaptive: antibody production (IgA, IgG)
   - Resolution: 7-10 days for most viruses
   - Post-viral cough: may persist 2-4 weeks

**Distinguishing Viral vs. Bacterial Infection:**

| Feature | Viral | Bacterial (GAS) |
|---------|-------|-----------------|
| Onset | Gradual | Abrupt |
| Cough | Present | Usually absent |
| Rhinorrhea | Present | Absent |
| Fever | Low-grade | High (>38.3C) |
| Tonsillar exudate | Variable | Common |
| Lymphadenopathy | Minimal | Tender anterior cervical |

**Centor/McIsaac Criteria for Strep Pharyngitis:**
- Tonsillar exudates (+1)
- Tender anterior cervical adenopathy (+1)
- Fever history (+1)
- Absence of cough (+1)
- Age 3-14 (+1), 15-44 (0), ≥45 (-1)
- Score 0-1: No testing needed
- Score 2-3: Rapid strep test
- Score 4-5: Empiric treatment OR test

**Acute Bacterial Rhinosinusitis (ABRS) Criteria:**
Bacterial sinusitis should be considered when:
1. Symptoms persist ≥10 days without improvement
2. "Double worsening" - improvement then worsening
3. Severe onset: high fever (≥39°C) + purulent drainage ≥3 days

**Complications of URIs:**
- Otitis media (especially children)
- Acute bacterial sinusitis
- Asthma exacerbation
- Lower respiratory tract infection progression
- Rare: peritonsillar abscess, mastoiditis

**Appropriate Antibiotic Prescribing:**
When truly indicated (GAS pharyngitis, ABRS):
- GAS pharyngitis: Penicillin VK or amoxicillin x10 days
- ABRS: Amoxicillin-clavulanate x5-7 days
- Watch for penicillin allergy: use azithromycin`,
      keyTerms: [
        { term: 'ICAM-1', definition: 'Intercellular adhesion molecule-1; receptor used by rhinoviruses to enter cells' },
        { term: 'Centor criteria', definition: 'Clinical scoring system to assess probability of streptococcal pharyngitis' },
        { term: 'fomite', definition: 'An inanimate object (doorknob, phone) that can transmit infection when contaminated' },
        { term: 'post-viral cough', definition: 'Persistent cough lasting weeks after URI resolves, due to airway hyperreactivity' },
      ],
      clinicalNotes: 'Purulent (green/yellow) nasal discharge does NOT indicate bacterial infection - color reflects neutrophil content. Duration and clinical trajectory are more important than discharge color for determining antibiotic need.',
    },
    4: {
      level: 4,
      summary: 'Upper respiratory infections demonstrate complex virus-host interactions modulated by mucosal immunity, microbiome composition, and environmental factors, with antibiotic stewardship requiring integration of clinical prediction rules and diagnostic testing.',
      explanation: `Advanced understanding of URI pathobiology informs evidence-based management strategies.

**Viral Immunology and Host Defense:**

1. **Mucosal Immunity**
   - Secretory IgA provides first-line defense
   - Mucus layer traps pathogens (mucociliary clearance)
   - Antimicrobial peptides (defensins, lactoferrin)
   - Resident immune cells in NALT (nasal-associated lymphoid tissue)

2. **Innate Immune Recognition**
   - Pattern recognition receptors (TLRs, RIG-I)
   - TLR3, TLR7/8: sense viral RNA
   - Type I/III interferon production
   - Inflammatory cytokine cascade (IL-6, TNF-α, IL-1β)

3. **Viral Evasion Mechanisms**
   - Rhinovirus: >160 serotypes, rapid antigenic variation
   - Influenza: antigenic drift and shift
   - RSV: G protein antigenic variability
   - Interferon antagonism (influenza NS1 protein)

**Clinical Decision Support:**

1. **Rapid Diagnostic Testing**
   - Rapid antigen detection tests (RADTs) for GAS
   - Sensitivity 70-90%, specificity 95%+
   - Negative RADT in children: backup throat culture
   - Negative RADT in adults: typically no culture needed

2. **Point-of-Care Molecular Testing**
   - PCR-based strep testing: sensitivity >95%
   - Respiratory viral panels (influenza, RSV, COVID-19)
   - Procalcitonin: bacterial vs. viral differentiation

3. **C-Reactive Protein Point-of-Care**
   - CRP <20 mg/L: bacterial infection unlikely
   - CRP 20-100 mg/L: possible bacterial, clinical judgment
   - CRP >100 mg/L: bacterial more likely
   - Useful in reducing antibiotic prescriptions

**Complications and High-Risk Populations:**

*Immunocompromised Patients:*
- Prolonged viral shedding
- Risk of progression to lower respiratory infection
- Consider early antiviral therapy
- Broader differential diagnosis

*Elderly:*
- Blunted febrile response
- Increased pneumonia risk
- Consider influenza testing broadly
- Lower threshold for chest imaging

*Chronic Disease:*
- Asthma/COPD: viral URI triggers exacerbations
- Diabetes: impaired immune response
- CHF: fluid shifts with infection

**Evidence-Based Symptom Management:**

1. **Medications with Evidence:**
   - Intranasal ipratropium: reduces rhinorrhea
   - First-generation antihistamines + decongestants
   - NSAIDs for pain/fever
   - Zinc lozenges within 24h (modest effect)
   - Honey for cough (children >1 year)

2. **Limited or No Evidence:**
   - Vitamin C (marginal prophylaxis, no treatment benefit)
   - Echinacea (inconsistent evidence)
   - Humidifiers (theoretical, limited data)

3. **Discouraged:**
   - Codeine cough suppressants in children
   - Over-the-counter cough/cold medicines <6 years
   - Intranasal decongestants >3 days (rebound)

**Antimicrobial Stewardship Strategies:**
- Delayed prescriptions (fill only if not improving)
- Patient education on viral illness duration
- Shared decision-making tools
- Clinical decision support in EHR
- Audit and feedback to prescribers`,
      keyTerms: [
        { term: 'NALT', definition: 'Nasal-associated lymphoid tissue; organized immune tissue in the nasal passages' },
        { term: 'antigenic drift', definition: 'Gradual mutation of viral surface proteins leading to immune evasion' },
        { term: 'delayed prescription', definition: 'Strategy providing prescription to fill only if symptoms worsen or fail to improve' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infections; can guide antibiotic decisions' },
      ],
      clinicalNotes: 'Delayed prescriptions for URIs reduce antibiotic use by 50% without increasing complications. Shared decision-making tools improve patient satisfaction even when antibiotics are not prescribed.',
    },
    5: {
      level: 5,
      summary: 'Upper respiratory infections represent dynamic host-pathogen interactions influenced by microbiome ecology, viral interference phenomena, and host genetic susceptibility, with optimal management integrating precision diagnostics, antimicrobial stewardship metrics, and emerging antiviral strategies.',
      explanation: `Contemporary URI management requires integration of molecular epidemiology, host factors, and stewardship science.

**Advanced Pathophysiology:**

1. **Microbiome Interactions**
   - Nasopharyngeal microbiome influences viral susceptibility
   - Dominant Corynebacterium/Dolosigranulum associated with fewer URIs
   - Haemophilus/Moraxella predominance increases infection risk
   - Viral infection disrupts microbiome → bacterial overgrowth opportunity
   - Antibiotic exposure further disrupts protective flora

2. **Viral Interference**
   - Rhinovirus infection induces interferon state
   - May temporarily protect against other respiratory viruses
   - "Rhinovirus block" observed epidemiologically
   - Implications for viral coinfection patterns

3. **Host Genetic Factors**
   - TLR3 polymorphisms affect viral recognition
   - IFITM3 variants influence influenza severity
   - IL-28B polymorphisms and viral clearance
   - HLA associations with specific pathogen susceptibility

**Diagnostic Advances:**

1. **Multiplex Molecular Panels**
   - BioFire FilmArray: 17+ pathogens in 45 minutes
   - Allows pathogen-directed management
   - Rapid influenza/RSV identification
   - May reduce inappropriate antibiotic use

2. **Host-Response Diagnostics**
   - Gene expression classifiers (bacterial vs. viral)
   - Sepsis biomarker panels
   - Protein biomarker combinations
   - Machine learning algorithms incorporating clinical/lab data

3. **Metagenomic Sequencing**
   - Pathogen-agnostic detection
   - Identifies novel pathogens
   - Resistance gene detection
   - Research/reference lab application currently

**Antimicrobial Stewardship Metrics:**

1. **Prescribing Quality Indicators**
   - Antibiotic prescribing rate for viral URIs
   - Proportion of acute bronchitis with antibiotic
   - First-line antibiotic selection for strep pharyngitis
   - Duration appropriateness

2. **Stewardship Interventions by Effect Size:**
   - Audit and feedback: 5-15% reduction
   - Clinical decision support: 10-20% reduction
   - Communication training: 15-25% reduction
   - Diagnostic testing access: 10-20% reduction
   - Combined interventions: 25-40% reduction

3. **Patient Communication Strategies**
   - "Why antibiotics won't help you today"
   - Positive messaging about immune system
   - Specific symptom duration expectations
   - Contingency planning ("if-then" guidance)
   - Written information sheets

**Emerging Therapeutic Approaches:**

1. **Antiviral Development**
   - Vapendavir: rhinovirus capsid binder (trials completed)
   - Pirodavir: nasal formulation for rhinovirus
   - Baloxavir: cap-dependent endonuclease inhibitor (influenza)
   - Broadly neutralizing antibodies in development

2. **Host-Directed Therapy**
   - Interferon-lambda (peginterferon lambda)
   - Zinc ionophores
   - Nitric oxide donors
   - Anti-inflammatory approaches

3. **Microbiome Modulation**
   - Probiotics for URI prevention (modest evidence)
   - Specific strain considerations
   - Nasal microbiome transplantation (investigational)

**Special Populations - Clinical Pearls:**

*Pediatric Considerations:*
- Children average 6-10 URIs annually (normal)
- Most "recurrent" URIs are sequential viral infections
- Worry if single URI prolonged or with deep-seated infection
- Rare: primary immunodeficiency workup if ≥4 bacterial infections/year

*Immunocompromised:*
- Prolonged viral shedding (weeks to months)
- RSV, parainfluenza, rhinovirus can cause pneumonia
- Consider IV antivirals for severe disease
- Infection control critical (room isolation)

**Quality Improvement in Practice:**
- Electronic health record prompts for viral illness
- Standing orders for rapid strep testing
- Antibiotic timeout at 48-72 hours
- Patient satisfaction measurement after non-prescribing
- Prescriber dashboards with peer comparison`,
      keyTerms: [
        { term: 'viral interference', definition: 'Phenomenon where infection with one virus temporarily inhibits infection by another, mediated by interferon response' },
        { term: 'IFITM3', definition: 'Interferon-induced transmembrane protein 3; restricts viral entry; polymorphisms affect influenza severity' },
        { term: 'host-response diagnostics', definition: 'Tests that measure the host immune response pattern to distinguish bacterial from viral infection' },
        { term: 'antibiotic timeout', definition: 'Systematic review at 48-72 hours to reassess antibiotic necessity and appropriateness' },
      ],
      clinicalNotes: `**High-Yield Points:**
- Average adult has 2-3 URIs/year; child 6-10 - this is NORMAL
- Post-viral cough can persist 3-4 weeks; reassure patients
- Purulent nasal discharge = neutrophils, NOT bacterial infection
- Single dose azithromycin for strep = equivalent efficacy, better compliance but resistance concerns
- Procalcitonin <0.25 ng/mL strongly suggests against bacterial infection
- Vitamin D supplementation may reduce URI frequency in deficient individuals`,
    },
  },

  media: [
    {
      id: 'uri-anatomy',
      type: 'diagram',
      filename: 'upper-respiratory-tract-anatomy.svg',
      title: 'Upper Respiratory Tract Anatomy',
      description: 'Diagram showing nasal passages, pharynx, larynx, and sinuses',
    },
    {
      id: 'uri-viral-timeline',
      type: 'diagram',
      filename: 'uri-symptom-timeline.svg',
      title: 'URI Symptom Timeline',
      description: 'Typical progression of cold symptoms over 10-14 days',
    },
  ],
  citations: [
    {
      id: 'idsa-pharyngitis',
      type: 'article',
      title: 'Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis',
      authors: ['Shulman ST', 'Bisno AL', 'Clegg HW'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/cis629',
    },
    {
      id: 'idsa-sinusitis',
      type: 'article',
      title: 'IDSA Clinical Practice Guideline for Acute Bacterial Rhinosinusitis',
      source: 'Clinical Infectious Diseases',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-influenza', targetType: 'condition', relationship: 'related', label: 'Influenza' },
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'see-also', label: 'Antibiotic Stewardship' },
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['infectious-disease', 'primary-care', 'antibiotic-stewardship'],
    keywords: ['cold', 'rhinitis', 'pharyngitis', 'sinusitis', 'viral', 'antibiotics'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics', 'family-medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default upperRespiratoryInfections;
