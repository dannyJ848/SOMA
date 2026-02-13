import { EducationalContent } from '../../types';

export const strepInfections: EducationalContent = {
  id: 'infectious-disease-strep-infections',
  type: 'condition',
  name: 'Streptococcal Infections',
  alternateNames: ['Strep Infections', 'Streptococcus', 'Strep Throat', 'Group A Strep'],

  levels: {
    1: {
      level: 1,
      summary: 'Strep infections are caused by bacteria called Streptococcus that can cause illnesses from sore throats to serious skin infections.',
      explanation: `Streptococcus is a type of bacteria that comes in different groups, each causing different illnesses. The most common is Group A Streptococcus (strep throat), but other groups cause various infections.

**Common Strep Infections:**

1. **Strep Throat (Pharyngitis)**
   - Sore, red throat with white patches
   - Fever and swollen neck glands
   - Needs antibiotics to prevent complications
   - Different from viral sore throats

2. **Skin Infections**
   - Cellulitis: Red, swollen skin
   - Impetigo: Honey-colored crusts
   - Erysipelas: Bright red, raised rash

3. **Serious Complications**
   - Scarlet fever: Rash with strep throat
   - Rheumatic fever: Heart and joint problems
   - Kidney disease (post-streptococcal glomerulonephritis)

**How Strep Spreads:**
- Respiratory droplets (coughing, sneezing)
- Direct contact with infected wounds
- Sharing food, drinks, or utensils
- Touching contaminated surfaces

**Treatment:**
- Penicillin or amoxicillin are most common
- Must complete full course to prevent complications
- Symptoms improve within 24-48 hours of antibiotics

**Prevention:**
- Wash hands frequently
- Cover coughs and sneezes
- Do not share personal items
- Stay home when sick`,
      keyTerms: [
        { term: 'Streptococcus', definition: 'A type of bacteria shaped like chains of balls' },
        { term: 'pharyngitis', definition: 'Medical term for sore throat' },
        { term: 'rheumatic fever', definition: 'Serious complication that can damage the heart' },
        { term: 'scarlet fever', definition: 'Strep throat with a red rash' },
      ],
      analogies: [
        'Strep bacteria are like unwanted houseguests - they invade, multiply, and cause problems until you kick them out with antibiotics.',
        'Think of rheumatic fever as friendly fire - your immune system attacks the bacteria but accidentally damages your own heart in the process.',
      ],
      examples: [
        'A child has a sore throat, fever, and swollen tonsils with white spots.',
        'A patient develops a bright red rash after having strep throat (scarlet fever).',
        'A young adult has a painful, swollen knee after recovering from strep throat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Streptococci are gram-positive cocci arranged in chains that colonize human mucosal surfaces and skin, causing diverse clinical syndromes through local invasion and toxin-mediated effects.',
      explanation: `Streptococci are spherical, gram-positive bacteria that form chains when viewed under the microscope. They are classified by hemolytic patterns and Lancefield groups, with Group A (Streptococcus pyogenes) and Group B (Streptococcus agalactiae) being clinically most significant.

**Classification:**

*By Hemolysis:*
- Beta-hemolytic: Complete hemolysis (clear zone)
  * Group A (S. pyogenes): Strep throat, skin infections
  * Group B (S. agalactiae): Neonatal sepsis
  * Groups C, G: Pharyngitis, skin infections
- Alpha-hemolytic: Partial hemolysis (green zone)
  * S. pneumoniae: Pneumonia, meningitis
  * Viridans streptococci: Dental infections, endocarditis
- Gamma-hemolytic: No hemolysis
  * Enterococci (formerly Group D)

*By Lancefield Grouping:*
- Based on cell wall carbohydrate antigens
- Group A: Most common human pathogen
- Group B: Neonatal infections, UTIs in pregnancy

**Group A Streptococcus (S. pyogenes):**

*Virulence Factors:*
- M protein: Anti-phagocytic, type-specific
- Hyaluronic acid capsule
- Streptolysins O and S: Hemolysins
- Pyrogenic exotoxins (A, B, C): Superantigens
- Streptokinase: Dissolves clots
- Hyaluronidase: Spreads infection

*Clinical Syndromes:*

1. **Pharyngitis**
   - Sudden onset sore throat, fever
   - Tonsillar exudates, tender anterior cervical nodes
   - Headache, abdominal pain (children)
   - Palatal petechiae

2. **Skin Infections**
   - Impetigo: Superficial honey-colored crusts
   - Cellulitis: Deep skin infection
   - Erysipelas: Superficial with distinct borders
   - Necrotizing fasciitis (flesh-eating disease)

3. **Toxin-Mediated Disease**
   - Scarlet fever: Erythrogenic toxin rash
   - Streptococcal toxic shock syndrome

4. **Post-Infectious Complications**
   - Acute rheumatic fever
   - Post-streptococcal glomerulonephritis`,
      keyTerms: [
        { term: 'hemolysis', definition: 'Breakdown of red blood cells' },
        { term: 'Lancefield grouping', definition: 'Classification based on cell wall carbohydrates' },
        { term: 'M protein', definition: 'Major virulence factor of Group A strep' },
        { term: 'superantigen', definition: 'Toxin causing massive immune activation' },
        { term: 'exudate', definition: 'Fluid containing pus and cellular debris' },
      ],
      analogies: [
        'The M protein is like a disguise that helps strep bacteria hide from your immune system, like a spy wearing a fake uniform.',
      ],
      examples: [
        'A teenager with severe sore throat, fever of 102F, and swollen tonsils with white exudates.',
        'A diabetic patient develops rapidly spreading skin redness with severe pain.',
        'A newborn develops sepsis from Group B strep passed from mother during delivery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Streptococcal pathogenesis involves adherence factors, immune evasion mechanisms, and toxin production, with Group A strep causing post-infectious immune-mediated diseases through molecular mimicry.',
      explanation: `Streptococci have evolved sophisticated mechanisms to colonize human hosts, evade immune responses, and trigger both direct tissue damage and immune-mediated pathology.

**Group A Streptococcus Pathogenesis:**

*Colonization and Adhesion:*
- Lipoteichoic acid binds fibronectin
- Protein F binds epithelial cells
- M protein inhibits phagocytosis
- Pili (FCT region) facilitate attachment

*Invasion and Spread:*
- Hyaluronidase degrades connective tissue
- Streptokinase activates plasminogen (dissolves clots)
- DNases degrade neutrophil extracellular traps
- C5a peptidase inhibits complement chemotaxis

*Toxin-Mediated Pathology:*

*Pyrogenic Exotoxins (Spe A, B, C):*
- Superantigens activate T-cells non-specifically
- Massive cytokine release (TSS)
- Cause scarlet fever rash
- Associated with invasive disease

*Streptolysins:*
- Streptolysin O: Oxygen-labile, immunogenic (ASO titers)
- Streptolysin S: Oxygen-stable
- Both lyse RBCs, WBCs, and damage tissue

**Post-Streptococcal Sequelae:**

*Acute Rheumatic Fever (ARF):*
- Occurs 2-4 weeks after pharyngitis (not skin infections)
- Molecular mimicry between M protein and cardiac tissue
- Jones Criteria for diagnosis:
  * Major: Carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules
  * Minor: Fever, arthralgia, elevated ESR/CRP, prolonged PR interval
- Streptococcal antibody evidence required
- Prevention: Treat strep throat within 9 days

*Post-Streptococcal Glomerulonephritis:*
- Immune complex deposition in glomeruli
- Can follow pharyngitis or skin infection
- Nephritic syndrome: Hematuria, edema, hypertension
- Self-limited in children
- Supportive treatment

**Group B Streptococcus (S. agalactiae):**

*Epidemiology:*
- Colonizes GI and GU tracts (10-30% of women)
- Risk to neonates during delivery
- Leading cause of neonatal sepsis and meningitis

*Clinical Presentations:*
- Early-onset (<7 days): Sepsis, pneumonia, meningitis
- Late-onset (7 days-3 months): Meningitis
- Adult disease: Diabetes, pregnancy, elderly

*Prevention:*
- Universal screening at 35-37 weeks gestation
- Intrapartum antibiotic prophylaxis if positive`,
      keyTerms: [
        { term: 'molecular mimicry', definition: 'Immune cross-reactivity between pathogen and host antigens' },
        { term: 'Jones Criteria', definition: 'Diagnostic criteria for acute rheumatic fever' },
        { term: 'ASO titer', definition: 'Anti-streptolysin O antibody level' },
        { term: 'nephritic syndrome', definition: 'Glomerular inflammation causing hematuria and renal dysfunction' },
        { term: 'intrapartum', definition: 'During labor and delivery' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of streptococcal infections requires accurate diagnosis, appropriate antibiotic selection, recognition of invasive disease, and prevention of immune-mediated complications through timely treatment.',
      explanation: `Optimal management of streptococcal infections integrates diagnostic testing, therapeutic decision-making, and public health considerations to minimize both acute morbidity and long-term complications.

**Diagnostic Approach:**

*Pharyngitis Testing:*
- Rapid antigen detection test (RADT): 70-90% sensitive
- Throat culture: Gold standard, 90-95% sensitive
- Backup culture if RADT negative in children/adolescents
- Not routinely needed in adults (low rheumatic fever risk)

*Serologic Testing:*
- ASO (anti-streptolysin O): Peaks 3-5 weeks after infection
- Anti-DNase B: Better for skin infections
- Used for diagnosing post-streptococcal sequelae

**Treatment Principles:**

*Group A Pharyngitis:*
- Goals: Shorten illness, prevent transmission, prevent ARF
- First-line: Penicillin V or amoxicillin
- Alternatives: Cephalosporins, macrolides (if penicillin allergic)
- Duration: 10 days (complete course to prevent ARF)
- Clinical response within 24-48 hours

*Recurrent Pharyngitis:*
- Check compliance with antibiotics
- Consider strep carrier state
- Household transmission evaluation
- Tonsillectomy rarely indicated solely for strep

*Invasive Infections:*
- Cellulitis/erysipelas: Penicillin or cephalexin
- Necrotizing fasciitis: Urgent surgery + broad antibiotics
- Bacteremia: Penicillin G or ceftriaxone
- Toxic shock: Clindamycin (toxin suppression) + IVIG

**Necrotizing Fasciitis:**

*Clinical Clues:*
- Severe pain out of proportion to exam
- Rapid spread despite antibiotics
- Skin changes: erythema -> purple -> bullae -> necrosis
- Crepitus (gas in soft tissues)
- Systemic toxicity

*Management:*
- Emergency surgical debridement
- Empiric broad-spectrum antibiotics
- Vancomycin/linezolid + piperacillin-tazobactam + clindamycin
- ICU care, often hyperbaric oxygen
- Repeated debridement as needed

**Prevention Strategies:**

*ARF Prophylaxis:*
- After first ARF episode: Continuous antibiotic prophylaxis
- Duration: At least 10 years or until age 21 (whichever longer)
- Longer if carditis: Until age 40 or lifelong
- Options: Monthly penicillin G benzathine or daily oral penicillin/macrolide

*Secondary Prevention:*
- Prompt treatment of strep pharyngitis
- Education about importance of completing antibiotics
- Screening household contacts if recurrent infections`,
      keyTerms: [
        { term: 'RADT', definition: 'Rapid antigen detection test for Group A strep' },
        { term: 'streptococcal carrier', definition: 'Person with persistent strep colonization without symptoms' },
        { term: 'crepitus', definition: 'Crackling sensation from gas in tissues' },
        { term: 'hyperbaric oxygen', definition: 'Treatment with high-pressure oxygen chambers' },
        { term: 'secondary prophylaxis', definition: 'Preventive treatment after initial disease episode' },
      ],
      clinicalNotes: 'Strep pharyngitis in children should always be confirmed by testing before treating. Treating viral pharyngitis with antibiotics contributes to resistance and side effects without benefit. The 10-day course of penicillin is specifically to prevent rheumatic fever - shorter courses, while effective for symptom resolution, do not reliably prevent this complication.',
    },
    5: {
      level: 5,
      summary: 'Expert management of streptococcal infections encompasses molecular epidemiology of invasive strains, emerging resistance patterns, novel therapeutic approaches, and global health initiatives for rheumatic heart disease prevention.',
      explanation: `Advanced understanding of streptococcal disease includes recognition of strain-specific virulence, global epidemiology, and implementation of comprehensive prevention programs.

**Molecular Epidemiology:**

*emm Typing:*
- Based on M protein gene (emm) sequence
- Over 200 emm types identified
- Some types associated with specific diseases:
  * emm1, emm3, emm12: Pharyngitis, invasive disease
  * emm49, emm55, emm57: Skin infections
- Vaccine development targets conserved regions

*Invasive GAS Strains:*
- Increased incidence since 1980s
- M1 and M3 most common invasive types
- Associated with SpeA production
- No antibiotic resistance concerns (still penicillin-sensitive)

**Emerging Resistance:**

*Macrolide Resistance:*
- mef(A) gene: Efflux pump (low-level resistance)
- erm genes: Ribosomal methylation (high-level resistance)
- Regional variation: High in some European/Asian countries
- Consider in treatment failure

*Tetracycline and Fluoroquinolone Resistance:*
- Increasing in some regions
- Not first-line for strep anyway

*Persistent Penicillin Susceptibility:*
- No penicillin-resistant GAS documented
- Mechanism unclear - may involve multiple targets
- Remains drug of choice

**Vaccine Development:**

*Challenges:*
- Many M types (serotypes)
- M protein variable region immunodominant
- Risk of cross-reactivity with cardiac tissue

*Approaches:*
- Conserved region vaccines (J8, p*145)
- Multivalent M protein vaccines (26-30 types)
- Non-M protein antigens (C5a peptidase, streptolysin O)
- Currently in clinical trials

**Global Health - Rheumatic Heart Disease (RHD):**

*Epidemiology:*
- 40+ million people affected worldwide
- 300,000+ deaths annually
- Highest burden in low-resource settings
- Leading cause of acquired heart disease in children globally

*Prevention Programs:*
- Primordial: Poverty reduction, housing improvement
- Primary: Treatment of strep pharyngitis
- Secondary: ARF prophylaxis
- Tertiary: RHD management, surgery

*ECHO Screening:*
- Handheld echocardiography for schoolchildren
- Detects subclinical RHD
- Allows early intervention

**Special Considerations:**

*Streptococcus gallolyticus (S. bovis):*
- Associated with colorectal cancer
- Bacteremia warrants GI evaluation
- Endocarditis common presentation

*Nutritionally Variant Streptococci:*
- Abiotrophia and Granulicatella
- Require pyridoxal for growth
- Cause endocarditis, harder to treat
- Require combination therapy

*Group C and G Streptococci:*
- Increasingly recognized pathogens
- Similar diseases to Group A
- Sometimes more invasive
- Same antibiotic susceptibilities`,
      keyTerms: [
        { term: 'emm typing', definition: 'Molecular typing based on M protein gene sequence' },
        { term: 'primordial prevention', definition: 'Prevention of disease risk factors in population' },
        { term: 'subclinical RHD', definition: 'Rheumatic heart disease without symptoms' },
        { term: 'nutritionally variant', definition: 'Bacteria requiring specific growth factors' },
      ],
      clinicalNotes: 'The global burden of rheumatic heart disease remains enormous despite being preventable. Investment in primary healthcare infrastructure to diagnose and treat strep pharyngitis would dramatically reduce RHD incidence. In travelers returning from endemic regions, consider RHD in new murmur presentations.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'respiratory', 'integumentary'],
    topics: ['bacterial-infections', 'pediatrics'],
    keywords: ['strep', 'Group A strep', 'strep throat', 'rheumatic fever', 'pharyngitis'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default strepInfections;
