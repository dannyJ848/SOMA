/**
 * Rapid Strep Test - Laboratory Interpretation Content
 *
 * Educational content covering:
 * - Rapid antigen detection test (RADT) for Group A Streptococcus
 * - Throat culture confirmation and sensitivity
 * - Clinical scoring systems (Centor/McIsaac)
 * - Antibiotic stewardship implications
 * - Complications of untreated streptococcal pharyngitis
 */

import { EducationalContent } from '../types';

export const rapidStrepContent: EducationalContent = {
  id: 'topic-rapid-strep',
  type: 'topic',
  name: 'Rapid Strep Test',
  nameEs: 'Prueba Rapida de Estreptococo',
  alternateNames: [
    'Rapid Antigen Detection Test',
    'RADT',
    'Strep A Test',
    'Rapid Strep Screen',
    'Group A Strep Test',
    'GAS Test',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'A rapid strep test is a quick test that checks if a sore throat is caused by strep bacteria. It uses a throat swab and gives results in minutes.',
      explanation: `# Rapid Strep Test

## What Is a Rapid Strep Test?

When you have a really bad sore throat, your doctor may want to find out if it is caused by **strep bacteria** (Group A Streptococcus). A rapid strep test is a quick and simple way to check. Think of it like a **detective kit** for your throat - it looks for specific germs that cause strep throat.

## How Is the Test Done?

1. The doctor or nurse will ask you to open your mouth wide
2. They will gently rub a soft cotton swab on the back of your throat and tonsils
3. The swab picks up a sample from your throat
4. The sample is tested right there in the office
5. Results come back in about **5 to 15 minutes**

The throat swab may feel a little uncomfortable or make you gag, but it only takes a few seconds and does not hurt.

## What Do the Results Mean?

| Result | What It Means | What Happens Next |
|--------|--------------|-------------------|
| **Positive** | You have strep bacteria | Doctor prescribes antibiotics |
| **Negative** | Strep bacteria were not found | May still need a throat culture to double-check |

## Why Is This Test Important?

- **Strep throat needs antibiotics** to get better and prevent problems
- Most sore throats are caused by **viruses**, which do NOT need antibiotics
- Taking antibiotics when you do not need them can cause side effects and make antibiotics less effective over time
- This test helps your doctor decide the **right treatment** for you

## What Is Strep Throat?

Strep throat is an infection of the throat and tonsils caused by bacteria. Symptoms include:

- Very sore, red throat
- Pain when swallowing
- Fever
- Swollen lymph nodes in your neck (the lumps you can feel)
- White patches or spots on the tonsils
- Sometimes a rash or stomach ache (especially in children)

## Important Things to Know

- The rapid test is very good at finding strep when you have it, but sometimes it can miss it
- If the rapid test is negative but your doctor still suspects strep, they may send a **throat culture** (which takes 1-2 days but is more accurate)
- If you have strep, take ALL of your antibiotics even if you start feeling better
- You are usually no longer contagious after **24 hours** of antibiotic treatment
- Stay home from school or work until you have been on antibiotics for at least 24 hours and feel better

## When Should You See a Doctor?

See a doctor if you have:
- A very sore throat that lasts more than 2 days
- Fever over 101 degrees Fahrenheit (38.3 degrees Celsius)
- Trouble swallowing or breathing
- A rash along with a sore throat
- Sore throat with no cough (strep usually does NOT cause coughing)`,
      keyTerms: [
        {
          term: 'strep throat',
          definition: 'A throat infection caused by Group A Streptococcus bacteria that needs antibiotic treatment',
        },
        {
          term: 'rapid strep test',
          definition: 'A quick test using a throat swab that can detect strep bacteria in about 5 to 15 minutes',
        },
        {
          term: 'throat culture',
          definition: 'A more thorough test where throat bacteria are grown in a lab over 1 to 2 days to confirm if strep is present',
        },
        {
          term: 'antibiotics',
          definition: 'Medicines that kill bacteria; needed for strep throat but not for viral sore throats',
        },
        {
          term: 'contagious',
          definition: 'Able to spread from one person to another through close contact or shared items',
        },
      ],
      analogies: [
        'A rapid strep test is like a metal detector for germs - it scans your throat sample quickly to find strep bacteria hiding there.',
        'Taking all your antibiotics is like finishing a whole puzzle - if you stop early and leave pieces out, the picture (your health) is not complete and the bacteria can come back.',
        'Strep bacteria are like unwanted house guests - antibiotics help kick them out, but you need the full course to make sure they are truly gone.',
      ],
      examples: [
        'A child comes home from school with a very sore throat and fever. The pediatrician does a rapid strep test, which comes back positive. The child gets a prescription for amoxicillin and stays home for a day.',
        'An adult has a sore throat with a cough and runny nose. The rapid strep test is negative, suggesting a viral infection. The doctor recommends rest, fluids, and over-the-counter pain relievers instead of antibiotics.',
      ],
      patientCounselingPoints: [
        'The rapid strep test is quick and only slightly uncomfortable - results are ready in about 10 minutes.',
        'A positive result means you need antibiotics; finish the entire prescription even when you feel better.',
        'A negative rapid test may still require a follow-up throat culture, especially in children.',
        'You can return to school or work after 24 hours on antibiotics and once fever-free.',
        'Strep is spread through coughs, sneezes, and sharing cups or utensils - wash hands frequently.',
        'Not all sore throats are strep; most are caused by viruses that get better on their own.',
      ],
    },
    2: {
      level: 2,
      summary:
        'The rapid strep test (RADT) detects Group A Streptococcal antigen from a throat swab. It has high specificity (95%+) but moderate sensitivity (70-90%), often requiring confirmatory throat culture in children when negative.',
      explanation: `## Rapid Strep Test Overview

### What It Detects

The rapid antigen detection test (RADT) identifies the **Group A Streptococcus (GAS)** carbohydrate antigen from a pharyngeal swab specimen. GAS, also known as *Streptococcus pyogenes*, is the most common bacterial cause of pharyngitis.

### How It Works

1. **Specimen collection**: Vigorous swabbing of both tonsils and posterior pharynx
2. **Antigen extraction**: Chemical reagents break apart bacterial cells
3. **Detection**: Immunochromatographic or latex agglutination methods identify GAS antigen
4. **Result**: Visual indicator (color line or agglutination) within 5-15 minutes

### Test Performance

| Characteristic | Value | Meaning |
|----------------|-------|---------|
| **Sensitivity** | 70-90% | Catches 70-90% of true strep cases |
| **Specificity** | 95-99% | Very rarely gives a false positive |
| **Positive predictive value** | High | A positive result almost certainly means strep |
| **Negative predictive value** | Moderate | A negative result could still miss strep |

### When to Order

**Clinical Decision Rules - Modified Centor (McIsaac) Score:**

| Criteria | Points |
|----------|--------|
| Fever (>38 C / 100.4 F) | +1 |
| Absence of cough | +1 |
| Tender anterior cervical lymphadenopathy | +1 |
| Tonsillar swelling or exudates | +1 |
| Age 3-14 years | +1 |
| Age 15-44 years | 0 |
| Age 45+ years | -1 |

- Score 0-1: No testing or antibiotics needed
- Score 2-3: Perform rapid strep test
- Score 4-5: Empiric antibiotics may be considered; test to confirm

### Confirmatory Testing

- **Throat culture**: Gold standard for GAS detection
- Recommended in **children and adolescents** with negative RADT
- Not routinely needed in **adults** with negative RADT (lower incidence of rheumatic fever)
- Results in 24-48 hours

### Treatment After Positive Result

- **First-line**: Penicillin V or amoxicillin for 10 days
- **Penicillin allergy**: Cephalexin, azithromycin, or clindamycin
- Symptom improvement expected within 24-48 hours
- Complete full course to prevent complications

### Complications of Untreated Strep

**Suppurative (direct infection spread):**
- Peritonsillar abscess
- Retropharyngeal abscess
- Cervical lymphadenitis

**Non-suppurative (immune-mediated):**
- Acute rheumatic fever (ARF) - can damage heart valves
- Post-streptococcal glomerulonephritis - kidney inflammation
- Scarlet fever - characteristic rash with strep throat`,
      keyTerms: [
        {
          term: 'Group A Streptococcus (GAS)',
          definition: 'The bacteria (Streptococcus pyogenes) that causes strep throat; detected by the rapid test',
          pronunciation: 'strep-toh-KOK-us pie-AH-juh-neez',
        },
        {
          term: 'sensitivity',
          definition: 'The ability of a test to correctly identify people who have the disease (true positive rate)',
        },
        {
          term: 'specificity',
          definition: 'The ability of a test to correctly identify people who do NOT have the disease (true negative rate)',
        },
        {
          term: 'Centor criteria',
          definition: 'A clinical scoring system that helps predict the likelihood of strep throat based on symptoms',
        },
        {
          term: 'rheumatic fever',
          definition: 'A serious inflammatory condition that can develop after untreated strep throat; can damage the heart',
          pronunciation: 'roo-MAT-ik',
        },
      ],
      analogies: [
        'Sensitivity is like a fishing net - high sensitivity means the net catches most of the fish (sick patients). A net with gaps (lower sensitivity) lets some fish through.',
        'Specificity is like a bouncer at a club - high specificity means the bouncer correctly turns away people who should not be there (healthy people get negative results).',
      ],
      patientCounselingPoints: [
        'A positive rapid strep test is very reliable - you almost certainly have strep and need antibiotics.',
        'If the rapid test is negative but symptoms are strong, a throat culture may be sent for confirmation.',
        'Antibiotics prevent rare but serious complications like rheumatic fever that can damage the heart.',
        'You should feel better within 1-2 days on antibiotics, but complete the full 10-day course.',
        'Strep throat is very contagious; avoid close contact until you have been on antibiotics for 24 hours.',
      ],
    },
    3: {
      level: 3,
      summary:
        'RADT for GAS pharyngitis uses lateral flow immunoassay technology with high specificity (>95%) but variable sensitivity (70-90%). Negative results in pediatric patients require backup throat culture. Clinical decision rules (Centor/McIsaac) guide testing strategy and antibiotic stewardship.',
      explanation: `## Rapid Antigen Detection Testing for GAS Pharyngitis

### Test Methodology

**Immunochromatographic Assay (Lateral Flow):**
- Most common current RADT format
- Monoclonal antibodies targeted against GAS-specific carbohydrate antigen (Lancefield Group A)
- Nitric acid extraction of antigen from swab specimen
- Capillary flow across membrane with capture antibodies
- Visual result line appears if antigen present

**Optical Immunoassay (OIA):**
- Enhanced sensitivity over standard RADT
- Detects thin-film changes on silicon surface
- Sensitivity approaches 90-95% in some studies

**Molecular Rapid Tests:**
- Nucleic acid amplification-based rapid tests (e.g., molecular point-of-care platforms)
- Sensitivity 95-100%, specificity 95-99%
- Results in 8-15 minutes
- Higher cost but eliminates need for backup culture
- Increasingly adopted in clinical practice

### Specimen Collection Quality

Proper technique is critical for test accuracy:
- Swab **both tonsillar pillars and posterior pharynx**
- Avoid touching tongue, buccal mucosa, or uvula
- Collect adequate material with firm pressure
- Use appropriate swab type per manufacturer specifications
- Poor technique is the most common cause of false negatives

### Clinical Scoring and Testing Algorithm

**Modified Centor (McIsaac) Score Interpretation:**

| Score | GAS Probability | Recommended Action |
|-------|----------------|-------------------|
| 0-1 | 1-10% | No testing; symptomatic treatment |
| 2-3 | 11-35% | Perform RADT; culture if negative (children) |
| 4-5 | 25-50% | Perform RADT; consider empiric treatment |

### IDSA Guidelines for GAS Pharyngitis (Key Points)

1. **Test before treating**: Do not prescribe antibiotics for pharyngitis without microbiologic confirmation
2. **Backup culture for children**: Negative RADT in patients 3-18 years requires throat culture
3. **No backup culture in adults**: Negative RADT in adults is sufficient given low risk of rheumatic fever
4. **Do not test <3 years**: GAS pharyngitis rare in this age group; test only if risk factors present
5. **Do not test for cure**: Post-treatment testing not recommended unless symptoms recur
6. **Carrier state**: 5-20% of school-aged children are asymptomatic GAS carriers; positive test may reflect carriage, not acute infection

### Differential Diagnosis of Pharyngitis

| Pathogen/Cause | Key Distinguishing Features |
|---------------|---------------------------|
| **GAS (Group A Strep)** | Exudates, tender anterior nodes, no cough, fever |
| **Viral (EBV, adenovirus)** | Cough, rhinorrhea, conjunctivitis, diffuse adenopathy |
| **Infectious mononucleosis** | Bilateral posterior adenopathy, hepatosplenomegaly, atypical lymphocytes |
| **Group C/G Streptococcus** | Similar to GAS but not detected by RADT |
| **Fusobacterium necrophorum** | Young adults; risk of Lemierre syndrome |
| **Gonococcal pharyngitis** | Sexual history; requires NAAT or culture on Thayer-Martin media |
| **Diphtheria** | Gray pseudomembrane; travel history; rare in vaccinated populations |

### Antibiotic Stewardship Implications

- GAS pharyngitis accounts for only **20-30% of pediatric** and **5-15% of adult** pharyngitis cases
- Most pharyngitis is viral and self-limited
- Inappropriate antibiotic prescribing for pharyngitis contributes significantly to antibiotic resistance
- RADT and clinical scoring reduce unnecessary antibiotic use by 60-70%
- The primary goal of treatment is **prevention of rheumatic fever** (treatment effective if started within 9 days of symptom onset)

### Complications and Sequelae

**Suppurative Complications:**
- Peritonsillar abscess (quinsy) - most common
- Retropharyngeal/parapharyngeal abscess
- Cervical lymphadenitis, mastoiditis, sinusitis, otitis media

**Non-Suppurative Complications:**
- Acute rheumatic fever (ARF): 2-4 weeks post-infection; migratory polyarthritis, carditis, chorea, erythema marginatum, subcutaneous nodules
- Post-streptococcal glomerulonephritis (PSGN): 1-3 weeks post-infection; hematuria, proteinuria, hypertension, edema
- PANDAS: Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections (controversial)

### ASO Titer and Anti-DNase B

- Used to confirm **prior** streptococcal infection (not for acute diagnosis)
- ASO rises 1-3 weeks after infection, peaks at 3-5 weeks
- Anti-DNase B peaks later and remains elevated longer
- Useful in diagnosing rheumatic fever or post-streptococcal glomerulonephritis`,
      keyTerms: [
        {
          term: 'lateral flow immunoassay',
          definition: 'A diagnostic device where sample flows along a membrane strip with embedded antibodies that capture target antigen, producing a visible line',
        },
        {
          term: 'Lancefield Group A',
          definition: 'Classification system for streptococci based on cell wall carbohydrate antigens; Group A identifies Streptococcus pyogenes',
        },
        {
          term: 'IDSA',
          definition: 'Infectious Diseases Society of America; publishes clinical practice guidelines for GAS pharyngitis',
        },
        {
          term: 'ASO titer',
          definition: 'Anti-streptolysin O antibody; rises after GAS infection; used as evidence of recent streptococcal exposure',
          pronunciation: 'A-S-O',
        },
        {
          term: 'peritonsillar abscess',
          definition: 'Collection of pus between the tonsillar capsule and pharyngeal constrictor muscle; a suppurative complication of pharyngitis',
        },
        {
          term: 'PANDAS',
          definition: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections; characterized by abrupt OCD/tic onset after GAS infection',
        },
      ],
      clinicalNotes: 'Molecular rapid tests are approaching throat culture sensitivity and may eventually replace the current RADT-plus-backup-culture algorithm. However, they detect both viable organisms and nucleic acid from non-viable bacteria, potentially identifying GAS carriers with concurrent viral pharyngitis.',
    },
    4: {
      level: 4,
      summary:
        'RADT technology encompasses immunochromatographic, optical immunoassay, and emerging molecular platforms. Clinical application integrates pre-test probability assessment, Bayesian reasoning with test characteristics, and consideration of GAS carrier state. Antibiotic stewardship and prevention of immune-mediated sequelae guide management strategy.',
      explanation: `## Advanced Rapid Strep Test Interpretation

### Bayesian Reasoning in Strep Testing

**Pre-test probability estimation:**
- McIsaac score stratifies baseline probability
- Prevalence varies by season (peak winter/early spring), age, and setting
- Community outbreak status affects pre-test probability

**Post-test probability calculation:**
- Positive RADT with sensitivity 85%, specificity 98%:
  - In patient with McIsaac 4 (pre-test probability ~40%): PPV ~97%
  - In patient with McIsaac 1 (pre-test probability ~5%): PPV ~69%
- Demonstrates importance of appropriate test utilization

### GAS Carrier State Considerations

**Prevalence and Impact:**
- 5-20% of school-aged children are asymptomatic GAS pharyngeal carriers
- Carriers have positive throat cultures/RADT without true infection
- Carrier state has very low risk of:
  - Transmission to contacts
  - Immune-mediated complications (rheumatic fever, PSGN)
  - Personal morbidity

**Distinguishing Carrier + Viral Infection from Acute GAS:**
- Low ASO/anti-DNase B titers suggest carrier state
- Lack of serologic response between acute and convalescent samples
- Clinical judgment required; no single test distinguishes reliably
- Carriers do not benefit from antibiotic treatment

### Molecular Point-of-Care Testing

**Available Platforms:**
- Cobas Liat Strep A (Roche) - PCR-based, 8 minutes
- Solana Strep Complete (Quidel) - helicase-dependent amplification
- ID NOW Strep A (Abbott) - isothermal nucleic acid amplification, 6 minutes

**Advantages over RADT:**
- Sensitivity 95-100% vs 70-90% for immunoassay RADT
- Eliminates need for backup throat culture
- Maintains rapid turnaround (<15 minutes)
- CLIA-waived for point-of-care use

**Limitations:**
- Higher per-test cost ($15-25 vs $2-5 for RADT)
- Detects nucleic acid from non-viable organisms
- May identify carriers more readily than RADT
- Cost-effectiveness models generally favorable when accounting for eliminated cultures

### Invasive GAS Disease

Beyond pharyngitis, GAS causes serious invasive infections:
- Necrotizing fasciitis ("flesh-eating bacteria")
- Streptococcal toxic shock syndrome (STSS)
- Bacteremia, pneumonia, puerperal sepsis
- iGAS incidence: ~5 per 100,000/year in US
- Case fatality rate: 10-15%

### Scoring Systems Comparison

| System | Components | Population |
|--------|-----------|------------|
| Centor (1981) | 4 criteria, no age adjustment | Adults |
| McIsaac (1998) | Centor + age modifier | All ages |
| FeverPAIN (2013) | Fever, Purulence, Attend rapidly, Inflamed tonsils, No cough/coryza | Primary care (UK) |

### Antibiotic Selection and Resistance

**First-line therapy:**
- Penicillin V 500 mg BID or 250 mg QID x 10 days
- Amoxicillin 50 mg/kg/day (max 1000 mg) QD or BID x 10 days
- IM benzathine penicillin G for adherence concerns

**Penicillin allergy:**
- Mild allergy: Cephalexin 20 mg/kg/dose BID x 10 days
- Severe allergy: Azithromycin 12 mg/kg QD x 5 days (resistance rates 5-15%)
- Alternative: Clindamycin 7 mg/kg/dose TID x 10 days

**Resistance considerations:**
- GAS remains universally susceptible to penicillin/amoxicillin
- Macrolide resistance (erythromycin, azithromycin) varies by region (5-40%)
- Clindamycin resistance <5% in most areas
- Inducible clindamycin resistance: D-zone test if erythromycin-resistant

### Recurrent Pharyngitis

**Defined as:** 7+ episodes in 1 year, 5+/year for 2 years, or 3+/year for 3 years

**Management considerations:**
- Confirm each episode with positive GAS test
- Evaluate for carrier state with intercurrent viral pharyngitis
- Tonsillectomy consideration (Paradise criteria)
- Clindamycin or amoxicillin-clavulanate for beta-lactamase-producing co-pathogens`,
      keyTerms: [
        {
          term: 'Bayesian reasoning',
          definition: 'Integration of pre-test probability with test characteristics (sensitivity/specificity) to determine post-test probability of disease',
        },
        {
          term: 'positive predictive value (PPV)',
          definition: 'Probability that a person with a positive test truly has the disease; varies with disease prevalence',
        },
        {
          term: 'isothermal nucleic acid amplification',
          definition: 'Molecular technique amplifying DNA/RNA at constant temperature; enables rapid point-of-care molecular testing',
        },
        {
          term: 'invasive GAS (iGAS)',
          definition: 'GAS infection involving normally sterile body sites (blood, CSF, deep tissue); carries significant morbidity and mortality',
        },
        {
          term: 'Paradise criteria',
          definition: 'Evidence-based criteria for tonsillectomy in recurrent pharyngitis; frequency-based thresholds over 1-3 years',
        },
      ],
      clinicalNotes: 'In the era of molecular rapid testing, the traditional RADT-plus-backup-culture algorithm is being reevaluated. Cost-effectiveness analyses suggest that molecular POC testing without backup culture is the preferred strategy when available, due to near-perfect sensitivity and elimination of second-visit culture results. However, clinicians must be aware that molecular tests may detect carrier-state organisms.',
    },
    5: {
      level: 5,
      summary:
        'Expert interpretation of GAS diagnostics integrates molecular platforms, population-level epidemiology, emm typing, vaccine development landscape, and evolving understanding of immune-mediated sequelae. Evidence-based algorithms balance diagnostic accuracy, cost-effectiveness, and antibiotic stewardship.',
      explanation: `## Expert-Level GAS Diagnostics and Pharyngitis Management

### Molecular Epidemiology and emm Typing

**emm Typing System:**
- GAS strains classified by M protein gene sequence
- >250 emm types identified globally
- emm typing guides:
  - Outbreak investigation
  - Vaccine candidate selection
  - Virulence prediction
  - Strain-specific disease associations

**emm Type Disease Associations:**
- Pharyngitis-associated: emm1, emm3, emm12, emm28
- Skin infection-associated: emm33, emm41, emm44, emm53
- Invasive disease: emm1, emm3 (historically most common in iGAS)
- Geographic variation in prevalent emm types affects vaccine strategy

### Vaccine Development Landscape

**Current Approaches:**
1. **M protein-based vaccines:**
   - 30-valent M protein vaccine (targeting prevalent emm types) - Phase II trials
   - Conserved M protein region vaccines (J8 peptide, StreptInCor)
   - Challenge: emm type diversity limits coverage

2. **Non-M protein targets:**
   - Group A carbohydrate (GAC) conjugate vaccines
   - Conserved surface proteins (SpyCEP, streptolysin O derivatives)
   - Combination approaches

3. **Challenges:**
   - Concern for molecular mimicry with human cardiac proteins (historical barrier)
   - Modern research demonstrates safe immunogenic epitopes
   - WHO prioritization of GAS vaccine development

### Immune-Mediated Sequelae: Current Understanding

**Acute Rheumatic Fever (ARF):**
- Molecular mimicry: GAS M protein epitopes cross-react with cardiac myosin, laminin, and valvular endothelium
- Genetic susceptibility: HLA-DR7, DR4 associations
- T-cell mediated inflammation with B-cell cross-reactive antibody production
- Jones Criteria (2015 AHA revision):
  - Major: Carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules
  - Minor: Arthralgia, fever, elevated ESR/CRP, prolonged PR interval
  - Modified criteria for moderate/high-risk populations (monoarthritis, polyarthralgia accepted as major)
- Recurrence prevention: Secondary prophylaxis with benzathine penicillin G every 3-4 weeks

**Post-Streptococcal Glomerulonephritis (PSGN):**
- Immune complex deposition in glomeruli
- Nephritogenic strains: emm1, emm12, emm49, emm55, emm57
- Complement activation (low C3, normal C4 = alternative pathway)
- Self-limited in >95% of children; adults may have worse prognosis
- Antibiotic treatment of GAS infection does NOT prevent PSGN (unlike ARF)

**Post-Streptococcal Reactive Arthritis (PSRA):**
- Arthritis without meeting full Jones criteria for ARF
- Non-migratory, persistent (>2 months), poor NSAID response
- Debate: Distinct entity vs incomplete ARF
- Recommended: Echocardiogram and secondary prophylaxis consideration

### Advanced Diagnostic Algorithms

**Cost-Effectiveness Analyses:**

| Strategy | Cost per Diagnosis | Antibiotic Overuse | Missed Cases |
|----------|-------------------|-------------------|--------------|
| Treat all pharyngitis | Lowest test cost | Highest (60-80%) | None |
| Clinical score only | Low | Moderate (30-50%) | Moderate |
| RADT + backup culture | Moderate | Low (5-10%) | Very low |
| Molecular POC only | Higher per test | Low (5-10%) | Lowest |
| Score + selective RADT | Lowest overall | Low | Low |

**Optimal strategy** (current evidence): Clinical scoring to select patients for testing, followed by molecular POC or RADT + backup culture (in children).

### Antimicrobial Stewardship Data

**National prescribing patterns:**
- Estimated 12 million pharyngitis visits/year in US
- 60-70% receive antibiotics (far exceeding GAS prevalence)
- Broad-spectrum antibiotics (azithromycin, fluoroquinolones) frequently prescribed inappropriately
- RADT/molecular testing reduces antibiotic prescriptions by 25-40%

**Delayed prescribing strategy:**
- Provide prescription with instructions to fill only if not improving in 48-72 hours
- Reduces antibiotic use by 30-50% compared to immediate prescribing
- Evidence supports safety: ARF prevention effective if antibiotics started within 9 days

### Emerging Concerns

**Increase in Invasive GAS (post-COVID pandemic):**
- Multiple countries reported increases in iGAS in 2022-2023
- Possible "immunity gap" from reduced GAS circulation during pandemic
- Heightened vigilance for necrotizing fasciitis, STSS, especially in children

**Macrolide Resistance Trends:**
- Global macrolide resistance in GAS: 5-40% depending on region
- erm(B) and mef(A) genes confer resistance
- Some regions show declining resistance with decreased macrolide use
- Supports penicillin/amoxicillin as first-line (no resistance documented)

### Clinical Pearls for Complex Scenarios

1. **Peritonsillar abscess**: If suspected clinically, do NOT rely on RADT alone; CT imaging and ENT consultation indicated
2. **Lemierre syndrome**: Consider *Fusobacterium necrophorum* in young adults with pharyngitis progressing to unilateral neck swelling, rigors, and septic emboli; RADT will be negative
3. **Immunocompromised patients**: Lower threshold for empiric treatment; atypical presentations common
4. **Recurrent positive tests**: Consider GAS carrier state, non-compliance, re-exposure from household contacts, or co-pathogen beta-lactamase production`,
      keyTerms: [
        {
          term: 'emm typing',
          definition: 'Classification of GAS strains by sequencing the hypervariable region of the M protein gene; used for epidemiologic surveillance and vaccine development',
        },
        {
          term: 'molecular mimicry',
          definition: 'Immune cross-reactivity between microbial antigens and host tissue proteins; mechanism underlying rheumatic fever carditis',
        },
        {
          term: 'Jones Criteria',
          definition: 'Diagnostic framework for acute rheumatic fever using major and minor clinical manifestations plus evidence of preceding GAS infection',
        },
        {
          term: 'Lemierre syndrome',
          definition: 'Internal jugular vein thrombophlebitis with septic emboli, typically from Fusobacterium necrophorum pharyngitis; rare but life-threatening',
        },
        {
          term: 'secondary prophylaxis',
          definition: 'Continuous antibiotic therapy (usually benzathine penicillin G) to prevent recurrent GAS infection in patients with prior rheumatic fever',
        },
      ],
      clinicalNotes: 'The post-COVID era has seen a notable resurgence in invasive GAS disease globally. Clinicians should maintain a low threshold for suspicion of iGAS, particularly necrotizing soft tissue infections and STSS, in patients presenting with pharyngitis complicated by systemic toxicity disproportionate to the apparent infection.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-strep-throat',
      type: 'website',
      title: 'Strep Throat',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/streptococcalinfections.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'labtestsonline-strep',
      type: 'website',
      title: 'Group A Streptococcus (GAS)',
      source: 'Lab Tests Online, American Association for Clinical Chemistry',
      url: 'https://labtestsonline.org/tests/group-strep',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-gas-pharyngitis',
      type: 'website',
      title: 'Pharyngitis (Strep Throat): Information for Clinicians',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html',
      accessedDate: '2025-01-15',
    },
  ],
  crossReferences: [
    {
      targetId: 'topic-covid-flu-rsv',
      targetType: 'topic',
      relationship: 'related',
      label: 'COVID/Flu/RSV Testing',
    },
    {
      targetId: 'topic-common-lab-panels',
      targetType: 'topic',
      relationship: 'related',
      label: 'Common Lab Panels',
    },
  ],
  tags: {
    systems: ['laboratory-medicine'],
    topics: ['lab-tests', 'diagnostics', 'infectious-disease', 'point-of-care-testing'],
    keywords: [
      'rapid strep test',
      'RADT',
      'Group A Streptococcus',
      'pharyngitis',
      'throat culture',
      'Centor criteria',
      'McIsaac score',
      'rheumatic fever',
      'strep throat',
      'antibiotic stewardship',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
