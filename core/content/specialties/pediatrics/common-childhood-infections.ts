import { EducationalContent } from '../../types';

export const commonChildhoodInfections: EducationalContent = {
  id: 'pediatrics-common-childhood-infections',
  type: 'concept',
  name: 'Common Childhood Infections',
  alternateNames: ['Pediatric Infections', 'Childhood Illnesses', 'Common Pediatric Diseases'],

  levels: {
    1: {
      level: 1,
      summary: 'Children often get infections like colds, ear infections, and stomach bugs because their immune systems are still learning to fight germs.',
      explanation: `It's normal for children to get sick! Most kids get 6-8 colds per year, plus other infections. This is actually their immune system "going to school" - learning to fight germs.

**Common Infections and What to Look For:**

**1. Common Cold (Upper Respiratory Infection)**
- Runny or stuffy nose, sneezing
- Mild cough, low fever
- Usually lasts 7-10 days
- *What helps:* Rest, fluids, honey for cough (over age 1)

**2. Ear Infections (Otitis Media)**
- Ear pain (tugging at ear in babies)
- Fever, fussiness
- Trouble sleeping
- *Treatment:* May need antibiotics, but some get better on their own

**3. Strep Throat**
- Very sore throat, hurts to swallow
- Fever, headache
- No cough (unlike a cold)
- Red throat with white patches
- *Treatment:* Needs antibiotics to prevent complications

**4. Stomach Flu (Gastroenteritis)**
- Vomiting and/or diarrhea
- Stomach cramps
- Low fever
- *Most important:* Keep drinking fluids to prevent dehydration

**5. Pink Eye (Conjunctivitis)**
- Red, itchy eyes
- Discharge (crusty in morning)
- *Treatment:* Depends on cause (viral, bacterial, or allergic)

**6. Hand, Foot, and Mouth Disease**
- Sores in mouth and rash on hands/feet
- Fever, not wanting to eat
- Very contagious but usually mild

**When to Call the Doctor:**
- Fever in baby under 3 months
- High fever (over 104°F/40°C)
- Not drinking fluids
- Breathing problems
- Child seems very sick or getting worse
- Symptoms lasting longer than expected`,
      keyTerms: [
        { term: 'infection', definition: 'When germs (like viruses or bacteria) get into your body and make you sick' },
        { term: 'virus', definition: 'A tiny germ that causes illnesses like colds and flu; antibiotics don\'t work against viruses' },
        { term: 'bacteria', definition: 'A type of germ that can cause infections like strep throat; antibiotics do work against bacteria' },
        { term: 'dehydration', definition: 'When the body loses too much water; dangerous especially with vomiting/diarrhea' },
      ],
      analogies: [
        'Your immune system is like a security guard that gets better at its job with practice. Each infection teaches it to recognize a new "bad guy."',
        'Antibiotics are like weed killer - they work great on bacteria (weeds) but can\'t do anything against viruses (rocks).',
      ],
      examples: [
        'A child with a runny nose and mild cough probably has a cold and will get better without antibiotics.',
        'A child with high fever and ear pain may have an ear infection that needs the doctor\'s help.',
      ],
    },
    2: {
      level: 2,
      summary: 'Childhood infections are primarily viral (URI, gastroenteritis, viral exanthems) or bacterial (otitis media, strep pharyngitis, UTI), with clinical presentation guiding the need for antibiotic therapy.',
      explanation: `Understanding common pediatric infections helps differentiate self-limited viral illnesses from those requiring treatment.

**Upper Respiratory Infections (URIs):**

*Common Cold:*
- Etiology: Rhinovirus (most common), coronavirus, RSV, parainfluenza
- Symptoms: Rhinorrhea, congestion, cough, low-grade fever
- Duration: 7-10 days; cough may persist 2-3 weeks
- Treatment: Supportive care only; avoid OTC cold medicines in <4 years

*Croup (Laryngotracheobronchitis):*
- Cause: Parainfluenza virus (types 1-3)
- Presentation: Barking "seal-like" cough, inspiratory stridor
- Age: 6 months to 3 years peak
- Treatment: Single dose dexamethasone; nebulized epinephrine if severe

*Bronchiolitis:*
- Cause: RSV (most common), rhinovirus
- Age: <2 years (peak 2-6 months)
- Presentation: Wheezing, respiratory distress, poor feeding
- Treatment: Supportive; oxygen if needed

**Ear and Throat Infections:**

*Acute Otitis Media (AOM):*
- Pathogens: S. pneumoniae, H. influenzae, M. catarrhalis
- Diagnosis: Bulging tympanic membrane with middle ear effusion
- Treatment:
  - <2 years or severe: Amoxicillin first-line
  - >2 years, mild: May observe 48-72 hours

*Streptococcal Pharyngitis:*
- Centor criteria help differentiate from viral pharyngitis
- Diagnosis: Rapid strep test or throat culture
- Treatment: Penicillin or amoxicillin (10 days)
- Why treat: Prevent rheumatic fever

**Gastrointestinal Infections:**

*Viral Gastroenteritis:*
- Causes: Rotavirus, norovirus, adenovirus
- Symptoms: Vomiting, watery diarrhea, fever
- Main concern: Dehydration
- Treatment: Oral rehydration therapy (ORT)

**Viral Exanthems (Rash Illnesses):**

| Disease | Cause | Key Features |
|---------|-------|--------------|
| Roseola | HHV-6 | High fever then rash appears |
| Fifth disease | Parvovirus B19 | "Slapped cheek" rash |
| Hand-foot-mouth | Coxsackie A16 | Oral ulcers, vesicular rash |
| Chickenpox | VZV | Vesicles, different stages |

**Urinary Tract Infections:**
- More common in girls after infancy
- Symptoms: Fever, dysuria, urgency, frequency
- Infants: May present only with fever
- Treatment: Antibiotics; imaging if young or recurrent`,
      keyTerms: [
        { term: 'otitis media', definition: 'Middle ear infection causing ear pain and fever; may be viral or bacterial' },
        { term: 'stridor', definition: 'High-pitched sound on breathing in, suggesting upper airway narrowing' },
        { term: 'Centor criteria', definition: 'Clinical scoring system (fever, tonsillar exudates, tender nodes, no cough) to assess strep pharyngitis probability' },
        { term: 'oral rehydration therapy', definition: 'Replacing lost fluids with balanced electrolyte solutions; cornerstone of gastroenteritis treatment' },
        { term: 'exanthem', definition: 'A widespread rash, often associated with viral infections in childhood' },
      ],
      analogies: [
        'Centor criteria work like a checklist - more checkmarks mean higher chance of strep and greater benefit from antibiotics.',
        'ORT is like refilling a gas tank - you need the right mixture (water, salt, sugar) not just plain water.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatric infectious disease management requires understanding pathogen-specific presentations, appropriate use of diagnostic testing, evidence-based antibiotic selection, and recognition of complications requiring escalation of care.',
      explanation: `Systematic approach to pediatric infections balances diagnostic accuracy with antibiotic stewardship principles.

**Respiratory Infections - Detailed Management:**

**Acute Otitis Media (AOM):**

*Diagnostic Criteria (AAP 2013):*
- Moderate to severe bulging of tympanic membrane, OR
- New otorrhea not from otitis externa, OR
- Mild bulging + recent ear pain or intense TM erythema

*Treatment Guidelines:*
| Age | Severe or Bilateral | Mild, Unilateral |
|-----|---------------------|------------------|
| <6 months | Antibiotics | Antibiotics |
| 6-23 months | Antibiotics | Antibiotics or observe |
| ≥2 years | Antibiotics | Observe option |

*Antibiotic Selection:*
- First-line: High-dose amoxicillin (80-90 mg/kg/day)
- Amoxicillin-clavulanate if: Recent amoxicillin, concurrent conjunctivitis, treatment failure
- Penicillin allergy: Cephalosporin (if no anaphylaxis), azithromycin

**Streptococcal Pharyngitis:**

*Testing Approach:*
- Children 3-15 years: Test if symptoms suggest strep
- <3 years: Strep rare; don't test unless risk factors
- Rapid antigen detection test (RADT): If negative, backup culture in children

*Treatment:*
- Penicillin V: 250 mg BID-TID (weight <27 kg) or 500 mg BID (≥27 kg) x 10 days
- Amoxicillin: 50 mg/kg once daily (max 1000 mg) x 10 days
- Single IM penicillin G benzathine if adherence concern

*Complications to Prevent:*
- Suppurative: Peritonsillar abscess, retropharyngeal abscess
- Non-suppurative: Acute rheumatic fever, post-streptococcal glomerulonephritis

**Bronchiolitis Management:**

*AAP Guidelines:*
- Supportive care is mainstay
- Suctioning only as needed for feeding/distress
- Bronchodilators: NOT routinely recommended
- Corticosteroids: NOT recommended
- Antibiotics: NOT indicated unless bacterial superinfection

*Admission Criteria:*
- O2 saturation <90% consistently
- Poor feeding/dehydration
- Significant respiratory distress
- High-risk patient (prematurity, CHD, immunodeficiency)

**Gastroenteritis - Evidence-Based Management:**

*Oral Rehydration:*
- WHO-ORS or commercial solutions (Pedialyte)
- Small frequent volumes (5-10 mL every 1-2 minutes)
- Ondansetron may facilitate oral rehydration

*Diet:*
- Continue breastfeeding
- Regular diet as tolerated (no need for BRAT diet)
- Avoid high-sugar drinks

*When NOT to Use Antibiotics:*
- Most viral gastroenteritis
- Typical childhood diarrhea

*When Antibiotics ARE Indicated:*
- Bloody diarrhea + fever (bacterial dysentery - culture first)
- Suspected Shigella, Salmonella with risk factors, C. diff

**Serious Bacterial Infections (SBI) in Febrile Infants:**

*Risk Stratification (<60 days old):*
- Lab criteria: WBC 5,000-15,000, band:neutrophil <0.2
- Well-appearing with low-risk labs: May consider outpatient management
- Ill-appearing or high-risk: Full sepsis workup, empiric antibiotics

*Rochester Criteria, Step-by-Step Approach, or similar risk-stratification protocols guide management*`,
      keyTerms: [
        { term: 'antibiotic stewardship', definition: 'Coordinated approach to optimize antibiotic use, improving outcomes while reducing resistance and adverse effects' },
        { term: 'peritonsillar abscess', definition: 'Collection of pus beside the tonsil; complication of pharyngitis requiring drainage' },
        { term: 'serious bacterial infection', definition: 'Includes bacteremia, UTI, meningitis, pneumonia; requires prompt recognition in febrile infants' },
        { term: 'Rochester criteria', definition: 'Clinical and laboratory criteria to identify low-risk febrile infants who may not require full sepsis workup' },
      ],
      clinicalNotes: 'Watch for "red flag" symptoms: toxic appearance, persistent high fever despite antipyretics, petechial rash, decreased responsiveness, signs of dehydration, respiratory distress. These warrant immediate evaluation regardless of presumed diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced pediatric infectious disease practice integrates understanding of host-pathogen interactions, evolving antimicrobial resistance patterns, immunocompromised host considerations, and recognition of emerging infections and unusual presentations.',
      explanation: `Complex pediatric infectious presentations require nuanced clinical reasoning and awareness of atypical scenarios.

**Fever Without Source (FWS) in Infants:**

**Updated Approach (<60 days):**

*Risk Stratification Tools:*
- Rochester Criteria (classic)
- Step-by-Step approach (incorporates procalcitonin)
- Pediatric Emergency Care Applied Research Network (PECARN) rule

*Procalcitonin Integration:*
- PCT <0.5 ng/mL: Low risk for invasive bacterial infection
- Combined with clinical appearance and urinalysis improves prediction
- May reduce unnecessary antibiotic use and lumbar punctures

*HSV Considerations in Neonates:*
- High-risk period: First 4-6 weeks
- Clues: Maternal history, vesicles, seizures, liver dysfunction
- CSF: May show pleocytosis or be normal early
- Management: Acyclovir 60 mg/kg/day IV if any concern; don't wait for PCR

**Complicated Respiratory Infections:**

*Parapneumonic Effusion/Empyema:*
- Etiology: S. pneumoniae (most common), S. aureus, S. pyogenes
- Evaluation: Ultrasound for size and characteristics
- Management:
  - Small, uncomplicated: Antibiotics alone
  - Moderate-large or complicated: Chest tube + fibrinolytics or VATS

*Staphylococcal Pneumonia:*
- Consider MRSA if: Severe/necrotizing, empyema, concurrent skin infection
- Treatment: Vancomycin or clindamycin (if susceptible)

**CNS Infections:**

*Bacterial Meningitis:*
- Age-based pathogens:
  - <1 month: GBS, E. coli, Listeria
  - 1-3 months: Above + S. pneumoniae
  - >3 months: S. pneumoniae, N. meningitidis

*Empiric Therapy:*
| Age | Empiric Antibiotics |
|-----|---------------------|
| <1 month | Ampicillin + gentamicin (or cefotaxime) |
| 1-3 months | Ampicillin + ceftriaxone + vancomycin |
| >3 months | Ceftriaxone + vancomycin |

*Dexamethasone:*
- Consider in H. influenzae and S. pneumoniae meningitis
- Give before or with first antibiotic dose

**Emerging Resistance Patterns:**

*Resistant Organisms:*
- Penicillin-resistant S. pneumoniae: Use high-dose amoxicillin
- MRSA: Community-acquired increasingly common
- ESBL-producing Enterobacteriaceae: Rising in UTIs

*Antibiotic Stewardship Principles:*
- Narrow spectrum when culture results available
- Appropriate duration (often shorter than historical practice)
- De-escalation based on clinical response

**Special Populations:**

*Immunocompromised Hosts:*
- Broader differential: Include opportunistic infections
- Empiric coverage: Broader spectrum, earlier intervention
- Consider: PJP, fungal, CMV, other herpesviruses

*Children with Indwelling Devices:*
- Central lines: Consider line-associated bacteremia
- VP shunts: Shunt infection with CNS involvement
- May need device removal for cure

**Kawasaki Disease - Infection Mimic:**

*Diagnostic Criteria:*
Fever ≥5 days + 4 of 5:
1. Bilateral conjunctival injection (non-exudative)
2. Oral changes (strawberry tongue, cracked lips)
3. Cervical lymphadenopathy (>1.5 cm, usually unilateral)
4. Polymorphous rash
5. Extremity changes (edema, erythema, peeling)

*Incomplete Kawasaki:* Fever + 2-3 criteria + lab/echo support

*Treatment:* IVIG 2 g/kg + high-dose aspirin (reduces coronary aneurysm risk)

*Why It Matters:* Can be mistaken for infection; untreated causes coronary artery aneurysms`,
      keyTerms: [
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infections; helps risk-stratify febrile infants and guide antibiotic decisions' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme conferring resistance to most penicillins and cephalosporins' },
        { term: 'Kawasaki disease', definition: 'Acute febrile vasculitis of childhood; can mimic infection but requires IVIG to prevent coronary complications' },
        { term: 'VATS', definition: 'Video-assisted thoracoscopic surgery; minimally invasive approach for empyema drainage' },
      ],
      clinicalNotes: 'HSV should be considered in any ill-appearing neonate with fever, seizures, vesicles, or elevated transaminases. Empiric acyclovir while awaiting PCR is standard practice - mortality without treatment exceeds 50%. Don\'t forget to examine for vesicles in multiple locations including scalp.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pediatric infectious disease integrates molecular diagnostics, pharmacokinetic-pharmacodynamic optimization, microbiome science, and understanding of immune ontogeny while addressing challenges of antimicrobial resistance, emerging pathogens, and precision medicine approaches.',
      explanation: `State-of-the-art pediatric infectious disease practice reflects advances in diagnostics, therapeutics, and pathogen biology.

**Molecular Diagnostics Revolution:**

*Multiplex PCR Panels:*
- Respiratory panels: 15-20+ pathogens in hours
- GI panels: Bacterial, viral, parasitic detection
- Meningitis/encephalitis panels: Rapid pathogen identification

*Clinical Implications:*
- Faster diagnosis enabling targeted therapy
- Detection of co-infections
- Challenges: Colonization vs. infection, cost considerations
- Antibiotic stewardship: De-escalation based on negative results

*Next-Generation Sequencing (NGS):*
- Metagenomic sequencing for unknown pathogens
- Whole genome sequencing for outbreak investigation
- Emerging: Direct-from-sample antimicrobial resistance prediction

**Pharmacokinetic-Pharmacodynamic (PK-PD) Optimization:**

*Beta-Lactam Optimization:*
- Time-dependent killing: T>MIC critical parameter
- Continuous or extended infusions improve outcomes in severe infections
- Population PK models inform dosing in children

*Aminoglycoside Dosing:*
- Extended-interval dosing (5-7 mg/kg once daily)
- Achieves higher peaks, lower troughs
- Reduced nephrotoxicity with equivalent efficacy

*Vancomycin Optimization:*
- Target AUC/MIC 400-600 (updated guidance)
- AUC-based dosing replacing trough-only monitoring
- Bayesian software increasingly used

**Antimicrobial Resistance - Current Landscape:**

*Mechanisms and Implications:*
- Carbapenem-resistant Enterobacteriaceae (CRE): Limited options
- VRE: Increasing in healthcare settings
- Drug-resistant TB: Molecular testing guides therapy

*Novel Therapeutics:*
- Beta-lactam/beta-lactamase inhibitor combinations
- Newer fluoroquinolones (not approved in children for most indications)
- Phage therapy: Investigational for MDR infections

**Immune Ontogeny and Infection Susceptibility:**

*Age-Dependent Immune Features:*
- Neonatal: Decreased neutrophil reserves, impaired complement
- Infancy: Transition from maternal to infant immunity
- T-cell responses: TH2-skewed in early life
- B-cell memory: Limited in first 2 years (affects polysaccharide response)

*Clinical Relevance:*
- GBS and Listeria susceptibility in neonates
- Encapsulated organism risk in young children
- Rationale for conjugate vaccines

**Microbiome and Infectious Disease:**

*Microbiome Development:*
- Vertical transmission at birth (mode of delivery matters)
- Breastfeeding shapes early microbiome
- Antibiotic disruption: Lasting effects on diversity

*Clinical Implications:*
- C. difficile infection: Microbiome disruption central
- Recurrent infections may relate to microbiome dysfunction
- Emerging: Microbiome-based therapeutics, live biotherapeutics

**Emerging Infectious Diseases:**

*Pandemic Preparedness:*
- Respiratory pathogen emergence (coronaviruses, influenza)
- Rapid diagnostic development
- Vaccine platform technologies

*Climate Change Effects:*
- Vector-borne disease expansion (dengue, Zika, chikungunya)
- Geographic shifts in endemic infections
- Extreme weather and waterborne diseases

**Precision Medicine Approaches:**

*Host-Directed Therapies:*
- Adjunctive immunomodulation in sepsis
- Cytokine-directed therapy in hyperinflammation (MIS-C)
- Genetic susceptibility identification

*Pharmacogenomics:*
- HLA-B*5701 screening before abacavir
- CYP2C19 and voriconazole dosing
- Future: Broader implementation

**Multisystem Inflammatory Syndrome in Children (MIS-C):**

*Pathophysiology:*
- Post-infectious inflammatory syndrome (2-6 weeks after COVID-19)
- Overlaps with Kawasaki disease and toxic shock syndrome
- Cytokine storm with multi-organ involvement

*Management:*
- IVIG, corticosteroids, aspirin
- Biologics (IL-1, IL-6 inhibitors) for refractory cases
- Cardiac monitoring essential

**Research Frontiers:**

*Vaccine Development:*
- Universal influenza vaccines
- RSV vaccines and monoclonal antibodies (nirsevimab)
- Maternal immunization strategies

*Therapeutics:*
- Monoclonal antibodies for viral infections
- Bacteriophage therapy
- Antimicrobial peptides

*Diagnostics:*
- Point-of-care molecular testing
- Host response signatures to differentiate viral vs. bacterial
- AI-assisted clinical decision support`,
      keyTerms: [
        { term: 'metagenomic sequencing', definition: 'Unbiased sequencing of all genetic material in a sample; can identify unexpected or novel pathogens' },
        { term: 'AUC/MIC', definition: 'Area under the concentration-time curve divided by minimum inhibitory concentration; PK-PD parameter predicting antibiotic efficacy' },
        { term: 'immune ontogeny', definition: 'Developmental maturation of the immune system from fetal life through childhood' },
        { term: 'MIS-C', definition: 'Multisystem Inflammatory Syndrome in Children; post-COVID-19 hyperinflammatory condition' },
        { term: 'live biotherapeutic', definition: 'Products containing living microorganisms designed to treat or prevent disease; emerging approach to microbiome modulation' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- Procalcitonin-guided algorithms reduce antibiotic use in lower respiratory infections
- Rapid molecular panels enable earlier targeted therapy but require clinical correlation
- Extended-interval aminoglycoside dosing is standard in pediatrics
- MIS-C should be considered in any child with fever and multi-organ dysfunction post-COVID exposure
- Nirsevimab now recommended for RSV prevention in infants during first RSV season`,
    },
  },

  media: [
    {
      id: 'childhood-infections-overview',
      type: 'diagram',
      filename: 'childhood-infections-overview.svg',
      title: 'Common Childhood Infections Overview',
      description: 'Visual guide to common pediatric infections by system and presentation',
    },
    {
      id: 'febrile-infant-algorithm',
      type: 'diagram',
      filename: 'febrile-infant-algorithm.svg',
      title: 'Febrile Infant Evaluation Algorithm',
      description: 'Step-by-step approach to fever in infants under 60 days',
    },
  ],
  citations: [
    {
      id: 'aap-otitis-media',
      type: 'article',
      title: 'The Diagnosis and Management of Acute Otitis Media',
      authors: ['Lieberthal AS', 'Carroll AE', 'Chonmaitree T'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2012-3488',
    },
    {
      id: 'red-book-2024',
      type: 'textbook',
      title: 'Red Book: Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'American Academy of Pediatrics',
    },
    {
      id: 'nelson-infectious-disease',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Infectious Diseases',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-vaccination-schedule', targetType: 'topic', relationship: 'related', label: 'Vaccination Schedule' },
    { targetId: 'pediatrics-fever-approach', targetType: 'topic', relationship: 'related', label: 'Pediatric Fever Approach' },
    { targetId: 'immune-system', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune', 'respiratory', 'gastrointestinal'],
    topics: ['pediatrics', 'infectious-disease', 'antibiotics'],
    keywords: ['infection', 'fever', 'otitis media', 'pharyngitis', 'gastroenteritis', 'bronchiolitis', 'meningitis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default commonChildhoodInfections;
