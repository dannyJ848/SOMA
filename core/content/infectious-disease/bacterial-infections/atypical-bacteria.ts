import { EducationalContent } from '../../types';

export const atypicalBacteria: EducationalContent = {
  id: 'infectious-disease-atypical-bacteria',
  type: 'concept',
  name: 'Atypical Bacterial Infections',
  alternateNames: ['Atypical Pathogens', 'Atypical Pneumonia', 'Walking Pneumonia'],

  levels: {
    1: {
      level: 1,
      summary: 'Atypical bacteria are germs that cause pneumonia and other illnesses but do not show up on regular bacteria tests and need different antibiotics.',
      explanation: `Atypical bacteria are a group of germs that cause respiratory infections but are different from typical bacteria like strep. They are harder to detect with standard tests and need different treatments.

**Common Atypical Bacteria:**

1. **Mycoplasma pneumoniae**
   - Causes "walking pneumonia"
   - Common in children and young adults
   - Spreads in schools and military barracks

2. **Chlamydia pneumoniae**
   - Causes respiratory infections
   - Can cause persistent cough
   - More common in older adults

3. **Legionella pneumophila**
   - Causes Legionnaires disease
   - Lives in water systems
   - Can be very serious

4. **Chlamydia psittaci**
   - From birds (parrots, pigeons)
   - Causes psittacosis

**Why They Are "Atypical":**
- Do not show up on regular Gram stain tests
- Do not grow on standard bacteria culture plates
- Resistant to penicillin-type antibiotics
- Cause different symptoms than typical pneumonia

**Common Symptoms:**
- Dry cough (not producing much phlegm)
- Low-grade fever
- Headache and body aches
- Sore throat
- Fatigue
- Symptoms develop gradually over days

**Treatment:**
- Macrolides (azithromycin, clarithromycin)
- Tetracyclines (doxycycline)
- Fluoroquinolones (for severe cases)
- NOT treated with penicillin or amoxicillin`,
      keyTerms: [
        { term: 'atypical', definition: 'Different from the usual or normal type' },
        { term: 'walking pneumonia', definition: 'Mild pneumonia where person can still walk around' },
        { term: 'macrolide', definition: 'Type of antibiotic that works for atypical bacteria' },
        { term: 'Legionnaires disease', definition: 'Serious lung infection from contaminated water' },
      ],
      analogies: [
        'Atypical bacteria are like stealthy invaders - they do not show up on standard radar (tests) and need special weapons (antibiotics) to defeat them.',
        'Think of typical vs atypical bacteria like cats vs dogs - they are both pets but need completely different care and food.',
      ],
      examples: [
        'A college student has a persistent dry cough and low fever for two weeks.',
        'A hotel guest develops severe pneumonia after staying in a room with contaminated air conditioning.',
        'A bird owner develops fever and cough after cleaning a parrot cage.',
      ],
    },
    2: {
      level: 2,
      summary: 'Atypical pathogens are bacteria that lack cell walls, resist Gram staining, do not culture on standard media, and cause respiratory infections requiring macrolide, tetracycline, or fluoroquinolone therapy.',
      explanation: `Atypical bacterial pathogens represent a diverse group of microorganisms united by their inability to be visualized with Gram stain, failure to grow on standard bacteriologic media, and resistance to beta-lactam antibiotics due to lack of cell walls or intracellular location.

**Major Atypical Pathogens:**

*Mycoplasma pneumoniae:*
- Smallest free-living organisms
- Lack cell wall (pleomorphic)
- Transmitted person-to-person
- 2-3 week incubation period
- Epidemics every 3-7 years
- Most common in ages 5-20

*Chlamydia pneumoniae:*
- Obligate intracellular pathogen
- Biphasic life cycle: elementary body (infectious) and reticulate body (replicative)
- Person-to-person transmission
- Seroprevalence increases with age (70% by age 60)
- Associated with asthma exacerbations

*Legionella pneumophila:*
- Aerobic gram-negative rod (stains poorly)
- Aquatic environment organism
- Intracellular in amoebae and macrophages
- Requires buffered charcoal yeast extract (BCYE) agar
- Serogroup 1 causes most disease

*Chlamydia psittaci:*
- Zoonotic (bird) pathogen
- Inhaled from dried bird droppings
- Can cause severe pneumonia
- Associated with parrots, pigeons, poultry

*Coxiella burnetii (Q fever):*
- Obligate intracellular
- Spore-forming
- Zoonotic (cattle, sheep, goats)
- Acute and chronic forms

**Clinical Presentation:**

*Atypical Pneumonia Syndrome:*
- Gradual onset over days
- Dry, nonproductive cough
- Low-grade fever
- Prominent extrapulmonary symptoms:
  * Headache, myalgias
  * Sore throat
  * Ear pain (Mycoplasma)
  * Gastrointestinal symptoms
- Physical exam milder than radiographic findings
- "Walking pneumonia" - patients ambulatory despite infiltrates

**Diagnosis:**
- PCR of respiratory specimens (most sensitive)
- Serology (IgM, paired IgG)
- Culture (Legionella on BCYE, slow)
- Urinary antigen (Legionella serogroup 1)
- Clinical diagnosis often made empirically`,
      keyTerms: [
        { term: 'obligate intracellular', definition: 'Can only survive and reproduce inside host cells' },
        { term: 'elementary body', definition: 'Infectious form of Chlamydia' },
        { term: 'BCYE agar', definition: 'Buffered charcoal yeast extract - special media for Legionella' },
        { term: 'zoonotic', definition: 'Disease transmitted from animals to humans' },
        { term: 'serogroup', definition: 'Classification based on surface antigens' },
      ],
      analogies: [
        'Atypical bacteria lacking cell walls are like jellyfish without shells - they have a different structure that makes them resistant to antibiotics that target cell walls.',
      ],
      examples: [
        'An outbreak of Mycoplasma pneumonia at a summer camp.',
        'Legionella outbreak traced to a hotel whirlpool spa.',
        'Q fever infection in a veterinarian after assisting with cattle births.',
      ],
    },
    3: {
      level: 3,
      summary: 'Atypical pathogens cause community-acquired pneumonia with distinct pathogenic mechanisms, epidemiologic patterns, and extrapulmonary manifestations, diagnosed primarily by molecular methods and treated with protein synthesis inhibitors.',
      explanation: `Atypical pathogens are significant causes of community-acquired pneumonia, particularly in specific populations, and cause disease through unique pathogenic mechanisms requiring targeted therapeutic approaches.

**Pathogenesis:**

*Mycoplasma pneumoniae:*
- Attaches to respiratory epithelium via P1 adhesin
- Produces hydrogen peroxide and superoxide radicals
- Ciliostasis and epithelial damage
- Immune-mediated extrapulmonary manifestations
- No cell wall - pleomorphic, filtrable

*Chlamydia pneumoniae:*
- Elementary bodies enter via endocytosis
- Prevent phagolysosome fusion
- Replicate in inclusion bodies
- Persistent infection possible
- Trigger for asthma and atherosclerosis?

*Legionella pneumophila:*
- Inhaled into alveoli
- Phagocytosed by macrophages
- Prevent phagosome-lysosome fusion
- Multiply intracellularly
- Produce exotoxins and proteases
- Exit via cell lysis or exocytosis

**Extrapulmonary Manifestations:**

*Mycoplasma:*
- Hemolytic anemia (cold agglutinins)
- Erythema multiforme/Stevens-Johnson
- Neurologic: Encephalitis, Guillain-Barre, transverse myelitis
- Cardiac: Myocarditis, pericarditis
- Dermatologic: Mucocutaneous rash

*Legionella:*
- Gastrointestinal: Diarrhea common
- Neurologic: Encephalopathy, cerebellar dysfunction
- Renal: Acute kidney injury
- Hepatic: Elevated transaminases
- Hyponatremia (SIADH)
- Relative bradycardia

*Chlamydia psittaci:*
- Severe headache common
- Hepatosplenomegaly
- Horder spots (pink blanching rash)
- Endocarditis (rare)

**Epidemiology:**

*Risk Factors for Legionella:*
- Age >50, male sex, smoking
- Immunosuppression
- Chronic lung disease
- Travel (hotels, cruise ships)
- Exposure to water aerosols
- Recent plumbing work

*Mycoplasma Outbreaks:*
- Schools, military barracks, colleges
- Family clusters
- 3-7 year epidemic cycles

**Diagnostic Approach:**

*Molecular Testing:*
- Multiplex PCR panels (FilmArray, BioFire)
- Single-pathogen PCR
- Rapid, sensitive

*Serology:*
- Mycoplasma: Cold agglutinins (non-specific), specific IgM
- Legionella: Urinary antigen (serogroup 1 only), antibody testing
- Chlamydia: Microimmunofluorescence

*Culture:*
- Legionella: BCYE agar, 3-5 days
- Mycoplasma: Special media, slow
- Chlamydia: Cell culture (rarely done)`,
      keyTerms: [
        { term: 'cold agglutinins', definition: 'Antibodies that cause RBC clumping at cold temperatures' },
        { term: 'phagolysosome', definition: 'Cellular compartment where pathogens are destroyed' },
        { term: 'SIADH', definition: 'Syndrome of inappropriate antidiuretic hormone secretion' },
        { term: 'relative bradycardia', definition: 'Heart rate lower than expected for degree of fever' },
        { term: 'Horder spots', definition: 'Pink blanching rash seen in psittacosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Management of atypical pneumonia requires appropriate antibiotic selection, recognition of severe Legionella infection, monitoring for extrapulmonary complications, and epidemiologic investigation of Legionella outbreaks.',
      explanation: `Clinical management of atypical pathogens requires understanding treatment options, severity assessment, complication monitoring, and public health considerations for outbreak investigation.

**Antibiotic Therapy:**

*First-Line Agents:*

*Macrolides:*
- Azithromycin: 500 mg day 1, then 250 mg daily
- Clarithromycin: 500 mg twice daily
- Erythromycin: Limited by GI side effects
- Mycoplasma and Chlamydia highly susceptible
- Legionella effective but fluoroquinolones preferred for severe

*Tetracyclines:*
- Doxycycline: 100 mg twice daily
- Effective for all atypical pathogens
- Preferred in some guidelines
- Phototoxicity, esophageal irritation

*Fluoroquinolones:*
- Levofloxacin: 750 mg daily
- Moxifloxacin: 400 mg daily
- Preferred for severe Legionella
- Risk of resistance promotion
- Reserve for severe or macrolide failure

*Treatment Duration:*
- Mycoplasma: 5-10 days (azithromycin shorter)
- Chlamydia: 10-14 days
- Legionella: 7-14 days (longer for immunocompromised)
- Q fever: 14-21 days acute, 18+ months chronic

**Legionella-Specific Considerations:**

*Severe Disease Features:*
- Respiratory failure requiring ventilation
- Multi-organ dysfunction
- ICU admission
- High mortality if untreated

*Optimal Therapy:*
- Fluoroquinolones preferred for severe
- Azithromycin alternative
- Rifampin combination occasionally used
- No beta-lactams (intracellular pathogen)

*Prevention:*
- Environmental water system maintenance
- Temperature >60C or <20C
- Copper-silver ionization
- Chlorination
- Monochloramine treatment

**Extrapulmonary Management:**

*Neurologic Complications:*
- Encephalitis from Mycoplasma: IVIG, steroids sometimes used
- Guillain-Barre: Supportive, plasmapheresis if severe
- Usually self-limited

*Dermatologic:*
- Stevens-Johnson syndrome: Supportive care, discontinue offending agent
- May require burn unit care

*Hemolytic Anemia:*
- Cold agglutinin hemolysis
- Usually self-limited
- Steroids rarely needed
- Warm patient, avoid cold exposure

**Differential Diagnosis:**
- Viral pneumonia (influenza, RSV, COVID-19)
- Other atypicals
- Tuberculosis
- Fungal pneumonia (immunocompromised)
- Non-infectious causes

**Testing Strategy:**
- PCR preferred for diagnosis
- Urinary antigen for Legionella if severe
- Serology for epidemiology
- Outbreak investigation if clusters identified`,
      keyTerms: [
        { term: 'ICU', definition: 'Intensive care unit' },
        { term: 'plasmapheresis', definition: 'Removal and treatment of blood plasma' },
        { term: 'Stevens-Johnson syndrome', definition: 'Severe mucocutaneous reaction' },
        { term: 'outbreak investigation', definition: 'Public health process to identify source of infections' },
      ],
      clinicalNotes: 'Always consider Legionella in severe community-acquired pneumonia, especially with GI symptoms, hyponatremia, or recent travel. Macrolide-resistant Mycoplasma is increasing in some regions (especially Asia) - consider doxycycline or fluoroquinolones if treatment failure. Test for atypical pathogens in CAP requiring hospitalization.',
    },
    5: {
      level: 5,
      summary: 'Expert management of atypical infections encompasses recognition of macrolide-resistant Mycoplasma, chronic Chlamydia infection, Q fever endocarditis, and the role of atypical pathogens in chronic disease pathogenesis.',
      explanation: `Advanced understanding of atypical pathogens includes emerging resistance patterns, chronic infection manifestations, and potential roles in chronic diseases beyond acute respiratory infection.

**Macrolide Resistance in Mycoplasma:**

*Epidemiology:*
- 80-90% resistance in Japan and China
- Increasing in Europe and US
- Driven by azithromycin overuse

*Mechanisms:*
- Mutations in 23S rRNA (peptidyl transferase)
- Point mutations at positions 2063, 2064
- Cross-resistance to all macrolides

*Clinical Impact:*
- Treatment failure
- Prolonged illness
- Shift to tetracyclines or fluoroquinolones

**Chronic Chlamydia Infection:**

*Pathophysiology:*
- Persistent metabolically inactive state
- Antibiotic tolerance (not resistance)
- Immune evasion

*Disease Associations:*
- Atherosclerosis: Serologic association, pathogen detected in plaques
- Asthma: Trigger for exacerbations, chronic colonization
- Reactive arthritis: HLA-B27 association
- Chronic obstructive pulmonary disease
- Multiple sclerosis (controversial)

*Treatment Challenges:*
- Difficult to eradicate
- Prolonged courses sometimes used
- Anti-inflammatory therapy may be needed

**Q Fever (Coxiella burnetii):**

*Acute Infection:*
- Self-limited febrile illness
- Atypical pneumonia
- Hepatitis
- Do veryxycycline 14-21 days

*Chronic Q Fever:*
- Endocarditis (most common)
- Vascular graft infections
- Chronic hepatitis
- Treatment: Doxycycline + hydroxychloroquine 18+ months
- Serology monitoring for cure

**Diagnostic Advances:**

*Metagenomic Sequencing:*
- Unbiased pathogen detection
- Identifies novel atypicals
- Research application currently

*T-Cell Assays:*
- Interferon-gamma release assays
- May differentiate acute from past infection
- Limited availability

**Special Populations:**

*Immunocompromised:*
- More severe disease
- Higher bacterial loads
- Prolonged treatment needed
- Consider prophylaxis if recurrent

*Pregnancy:*
- Avoid tetracyclines and fluoroquinolones
- Macrolides preferred
- Q fever can cause abortion

**Future Directions:**
- Vaccine development challenging (intracellular pathogens)
- New antibiotics with activity against atypicals
- Understanding chronic disease associations
- Improved diagnostics for mixed infections`,
      keyTerms: [
        { term: '23S rRNA', definition: 'Ribosomal RNA target of macrolide antibiotics' },
        { term: 'peptidyl transferase', definition: 'Enzyme activity inhibited by macrolides' },
        { term: 'persistent infection', definition: 'Long-term infection with altered bacterial state' },
        { term: 'metagenomic sequencing', definition: 'Sequencing all genetic material in a sample' },
      ],
      clinicalNotes: 'Macrolide-resistant Mycoplasma should be suspected in treatment failure, particularly in travelers from Asia. Chronic Q fever endocarditis requires prolonged doxycycline-hydroxychloroquine combination and surgical evaluation. The role of Chlamydia in chronic diseases remains controversial and area of active research.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'respiratory'],
    topics: ['bacterial-infections', 'pneumonia'],
    keywords: ['Mycoplasma', 'Chlamydia', 'Legionella', 'walking pneumonia', 'atypical pneumonia'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default atypicalBacteria;
