/**
 * Food Safety - Nutrition Science
 *
 * Comprehensive content on food safety including foodborne illnesses,
 * food handling best practices, temperature danger zones,
 * cross-contamination prevention, and high-risk populations.
 *
 * ICD-11 Codes:
 * - 1A00-1A0Z: Gastroenteritis and colitis of infectious origin
 * - 1A02: Intestinal infections due to Salmonella
 * - 1A03: Intestinal infections due to Escherichia coli
 * - 1A04: Intestinal infections due to other specified bacteria (Listeria)
 * - 1A08: Norovirus enteritis
 * - 1C12: Botulism (Clostridium botulinum)
 * - 5B80: Foodborne intoxications
 *
 * Spanish Translations:
 * - Seguridad alimentaria (Food Safety)
 * - Enfermedades transmitidas por alimentos (Foodborne illnesses)
 * - Zona de peligro de temperatura (Temperature danger zone)
 * - Contaminaci\u00f3n cruzada (Cross-contamination)
 * - Poblaciones de alto riesgo (High-risk populations)
 */

import { EducationalContent } from '../types';

export const foodSafety: EducationalContent = {
  id: 'nutrition-food-safety',
  type: 'topic',
  name: 'Food Safety',
  alternateNames: ['Foodborne Illness Prevention', 'Food Hygiene', 'Seguridad Alimentaria'],

  levels: {
    1: {
      level: 1,
      summary: 'Food safety means keeping your food clean and at the right temperature so it does not make you sick. Germs like bacteria and viruses can grow in food if it is not handled properly, causing stomachaches, vomiting, and diarrhea.',
      explanation: `## What Is Food Safety?

Food safety is all about making sure the food you eat does not make you sick. Tiny living things called germs (bacteria and viruses) can get into food and multiply, causing what we call "food poisoning" or foodborne illness.

**Common Germs That Cause Food Poisoning:**
- **Salmonella** (sal-muh-NEL-uh): Found in raw chicken, eggs, and meat. Can cause fever, diarrhea, and stomach cramps
- **E. coli** (ee-KOH-lye): Found in undercooked beef and unwashed vegetables. Can cause severe stomach cramps and bloody diarrhea
- **Listeria** (lih-STEER-ee-uh): Found in deli meats, soft cheeses, and unpasteurized milk. Especially dangerous for pregnant women
- **Norovirus** (NOR-oh-VY-rus): The "stomach bug." Spreads through contaminated food, water, or surfaces. Very contagious
- **Botulism** (BOT-chuh-liz-um): Rare but very serious. Found in improperly canned foods. Can cause paralysis

## The Temperature Danger Zone

Germs love temperatures between 40\u00b0F and 140\u00b0F (4\u00b0C to 60\u00b0C). This range is called the "danger zone."

**Keep Food Safe:**
- **Cold foods** should stay below 40\u00b0F (in the refrigerator)
- **Hot foods** should stay above 140\u00b0F (keep them heated)
- **Never leave food out** for more than 2 hours (1 hour if it is hot outside)
- **When in doubt, throw it out!**

## Four Steps to Food Safety

1. **CLEAN** - Wash your hands, utensils, and surfaces often
   - Wash hands for 20 seconds with soap and water
   - Wash cutting boards after each use
   - Rinse fruits and vegetables under running water

2. **SEPARATE** - Keep raw meat away from other foods
   - Use separate cutting boards for raw meat
   - Keep raw meat on the bottom shelf of the refrigerator
   - Never put cooked food on a plate that held raw meat

3. **COOK** - Cook food to the right temperature
   - Use a food thermometer
   - Ground beef: 160\u00b0F
   - Chicken: 165\u00b0F
   - Pork: 145\u00b0F

4. **CHILL** - Refrigerate food quickly
   - Put leftovers in the fridge within 2 hours
   - Set your refrigerator to 40\u00b0F or below
   - Thaw frozen food in the refrigerator, not on the counter

## Who Gets Sicker?

Some people are more likely to get very sick from food poisoning:
- **Pregnant women** and their unborn babies
- **Young children** (under 5 years old)
- **Older adults** (65 and older)
- **People with weak immune systems** (from illness or medicine)

These people should be extra careful with food and avoid certain risky foods like raw eggs, undercooked meat, and unpasteurized dairy products.`,
      keyTerms: [
        { term: 'foodborne illness', definition: 'Sickness caused by eating food that has harmful germs or toxins in it; also called food poisoning' },
        { term: 'bacteria', definition: 'Tiny living things that can grow in food and make you sick if the food is not handled safely' },
        { term: 'temperature danger zone', definition: 'The range of temperatures (40\u00b0F\u2013140\u00b0F) where germs grow fastest in food' },
        { term: 'cross-contamination', definition: 'When germs spread from one food (like raw meat) to another food or surface' },
        { term: 'pasteurization', definition: 'Heating a liquid (like milk) to kill harmful germs and make it safe to drink' },
      ],
      analogies: [
        'The temperature danger zone is like a swimming pool for bacteria \u2013 they love to multiply when the water (temperature) is just right.',
        'Cross-contamination is like getting paint on something clean \u2013 once raw meat juice touches your salad, the germs spread.',
        'Washing your hands before cooking is like a goalie blocking a shot \u2013 it stops germs before they get into your food.',
      ],
      examples: [
        'A family gets sick after eating chicken that was pink inside because it was not cooked to 165\u00b0F',
        'A child gets a stomachache after eating a sandwich made on the same cutting board used for raw chicken',
        'Potato salad left out at a picnic for 4 hours causes food poisoning because bacteria grew in the danger zone',
        'A pregnant woman avoids soft cheeses to protect her baby from Listeria',
      ],
      patientCounselingPoints: [
        'Always wash your hands with soap and water for 20 seconds before and after handling food',
        'Use a food thermometer to check if meat is cooked enough \u2013 you cannot tell just by looking',
        'Keep raw meat separate from ready-to-eat foods at the grocery store and in the refrigerator',
        'Refrigerate leftovers within 2 hours and eat them within 3\u20134 days',
        'When in doubt about whether food is safe, throw it out',
      ],
    },
    2: {
      level: 2,
      summary: 'Foodborne illness affects approximately 48 million Americans annually. Prevention relies on four principles: cleaning, separating, cooking to proper temperatures, and chilling. Key pathogens include Salmonella, E. coli, Listeria, Norovirus, and C. botulinum, each with distinct transmission routes and clinical presentations.',
      explanation: `## Foodborne Illness Overview

Each year in the United States, an estimated 48 million people get sick, 128,000 are hospitalized, and 3,000 die from foodborne diseases (CDC estimates).

**Major Foodborne Pathogens:**

| Pathogen | Source Foods | Incubation | Key Symptoms | Duration |
|----------|-------------|------------|--------------|----------|
| Salmonella | Poultry, eggs, meat, produce | 6\u201372 hours | Diarrhea, fever, cramps | 4\u20137 days |
| E. coli O157:H7 | Ground beef, raw milk, produce | 1\u201310 days | Bloody diarrhea, severe cramps | 5\u201310 days |
| Listeria monocytogenes | Deli meats, soft cheese, sprouts | 1\u201370 days | Fever, muscle aches, nausea | Variable |
| Norovirus | Shellfish, ready-to-eat foods | 12\u201348 hours | Vomiting, diarrhea, nausea | 1\u20133 days |
| C. botulinum | Improperly canned foods, honey | 12\u201336 hours | Blurred vision, weakness, paralysis | Weeks\u2013months |

---
Salmonella (ICD-11: 1A02):
  +- Gram-negative rod, motile
  +- >2,500 serotypes
  +- Most common: S. Enteritidis, S. Typhimurium
  +- Sources: Poultry, eggs, reptiles, produce
  +- Risk: Undercooked eggs, raw poultry
  +- Complications: Bacteremia, reactive arthritis
  +- Treatment: Usually self-limited; antibiotics for severe

E. coli O157:H7 (ICD-11: 1A03):
  +- Shiga toxin-producing (STEC)
  +- Sources: Ground beef, raw milk, lettuce, sprouts
  +- Complication: Hemolytic Uremic Syndrome (HUS)
  |  +- Microangiopathic hemolytic anemia
  |  +- Thrombocytopenia
  |  +- Acute kidney injury
  |  +- Most common in children <5
  +- Treatment: Supportive; avoid antibiotics (may worsen HUS)

Listeria monocytogenes (ICD-11: 1A04):
  +- Gram-positive rod
  +- Grows at refrigerator temperatures (4\u00b0C)
  +- Sources: Deli meats, soft cheeses, smoked seafood
  +- High-risk: Pregnant women (10x higher risk)
  |  +- Can cause miscarriage, stillbirth, neonatal meningitis
  +- Treatment: Ampicillin + gentamicin

Norovirus (ICD-11: 1A08):
  +- Most common cause of foodborne illness
  +- Highly contagious (18 viral particles can cause illness)
  +- Resistant to many disinfectants
  +- Outbreaks common in enclosed settings
  +- Prevention: Handwashing (alcohol gel less effective)

C. botulinum (ICD-11: 1C12):
  +- Anaerobic, spore-forming
  +- Produces botulinum toxin (most potent known toxin)
  +- Types: Foodborne, wound, infant
  +- Infant botulism: Honey in children <1 year
  +- Treatment: Antitoxin; mechanical ventilation if needed
---

## Temperature Control

---
Temperature danger zone: 40\u00b0F\u2013140\u00b0F (4\u00b0C\u201360\u00b0C)
  +- Bacteria double every 20 minutes in this range
  +- "2-hour rule": Discard food left out >2 hours
  +- "1-hour rule": Discard if ambient temperature >90\u00b0F

Safe minimum cooking temperatures:
  +- Poultry (whole, pieces, ground): 165\u00b0F (74\u00b0C)
  +- Ground meats (beef, pork, lamb): 160\u00b0F (71\u00b0C)
  +- Beef, pork, lamb (steaks/roasts): 145\u00b0F (63\u00b0C) + 3-minute rest
  +- Fish and shellfish: 145\u00b0F (63\u00b0C)
  +- Eggs: 160\u00b0F (71\u00b0C) or until firm
  +- Leftovers and casseroles: 165\u00b0F (74\u00b0C)

Refrigerator and freezer:
  +- Refrigerator: 40\u00b0F (4\u00b0C) or below
  +- Freezer: 0\u00b0F (-18\u00b0C) or below
  +- Freezing does not kill bacteria, only stops growth
---

## Cross-Contamination Prevention

---
Sources of cross-contamination:
  +- Raw meat juices dripping onto other foods
  +- Shared cutting boards and utensils
  +- Unwashed hands between tasks
  +- Contaminated kitchen surfaces

Prevention strategies:
  +- Separate cutting boards for raw meat and produce
  +- Wash hands for 20 seconds between handling different foods
  +- Store raw meat on lowest refrigerator shelf
  +- Use separate plates for raw and cooked meat
  +- Sanitize surfaces with dilute bleach solution
  +- Replace sponges and dish towels regularly
---

## High-Risk Populations

---
Populations at increased risk:
  +- Pregnant women:
  |  +- Avoid: Deli meats, soft cheeses, raw fish, sprouts
  |  +- Listeria risk 10x general population
  |  +- Can cause miscarriage, preterm labor, neonatal infection
  +- Children under 5:
  |  +- Immature immune system
  |  +- Higher risk for HUS from E. coli
  |  +- Avoid: Raw milk, undercooked eggs/meat
  +- Adults 65 and older:
  |  +- Declining immune function
  |  +- Reduced stomach acid (less bacterial defense)
  |  +- Higher hospitalization and death rates
  +- Immunocompromised individuals:
  |  +- HIV/AIDS, cancer chemotherapy, organ transplant
  |  +- Corticosteroid therapy, diabetes
  |  +- Should follow "low-microbial" diet
  |  +- Avoid raw/undercooked foods
---`,
      keyTerms: [
        { term: 'Salmonella', definition: 'Gram-negative bacteria commonly found in poultry and eggs; causes gastroenteritis with diarrhea, fever, and cramps' },
        { term: 'E. coli O157:H7', definition: 'Shiga toxin-producing E. coli found in undercooked beef; can cause bloody diarrhea and HUS' },
        { term: 'Listeria monocytogenes', definition: 'Gram-positive bacteria that grows at refrigerator temperatures; especially dangerous for pregnant women' },
        { term: 'Norovirus', definition: 'Highly contagious virus causing acute gastroenteritis; most common cause of foodborne illness' },
        { term: 'C. botulinum', definition: 'Anaerobic, spore-forming bacterium that produces botulinum toxin; found in improperly canned foods' },
        { term: 'Hemolytic Uremic Syndrome', definition: 'Serious complication of E. coli O157:H7 involving hemolytic anemia, thrombocytopenia, and kidney failure' },
        { term: 'incubation period', definition: 'Time between exposure to a pathogen and the appearance of symptoms' },
      ],
      analogies: [
        'The temperature danger zone is like a warm nursery for bacteria \u2013 they grow and multiply rapidly in this comfortable range.',
        'Cross-contamination is like a chain reaction \u2013 one contaminated surface can spread germs to everything it touches.',
        'Listeria growing in the refrigerator is like a thief who can pick locks \u2013 cold temperatures that stop most bacteria do not stop Listeria.',
      ],
      examples: [
        'A 2018 romaine lettuce outbreak caused by E. coli O157:H7 sickened 210 people across 36 states',
        'A pregnant woman develops listeriosis after eating contaminated deli meat, leading to preterm labor',
        'A norovirus outbreak on a cruise ship spreads rapidly through close quarters and shared food',
        'Infant botulism from honey given to a 6-month-old baby',
      ],
      patientCounselingPoints: [
        'Use a food thermometer every time you cook meat \u2013 color alone is not a reliable indicator of doneness',
        'Pregnant women should heat deli meats to steaming (165\u00b0F) before eating to prevent Listeria',
        'Never give honey to infants under 1 year old due to botulism risk',
        'Wash hands with soap and water (not just hand sanitizer) to prevent norovirus spread',
        'Immunocompromised patients should avoid raw or undercooked eggs, meat, fish, and unpasteurized products',
      ],
    },
    3: {
      level: 3,
      summary: 'Food safety integrates microbiology, toxicology, and public health principles. Major foodborne pathogens have distinct pathogenic mechanisms: Salmonella invades intestinal epithelium, STEC produces Shiga toxin, Listeria crosses placental and blood-brain barriers, Norovirus infects enterocytes, and C. botulinum toxin blocks acetylcholine release at the neuromuscular junction.',
      explanation: `## Pathogen Microbiology and Pathogenesis

**Salmonella Species (ICD-11: 1A02):**

---
Microbiology:
  +- Family: Enterobacteriaceae
  +- Gram-negative, facultatively anaerobic rod
  +- Non-typhoidal (NTS): S. Enteritidis, S. Typhimurium
  +- Typhoidal: S. Typhi, S. Paratyphi

Pathogenesis of NTS gastroenteritis:
  +- Ingestion of contaminated food (infectious dose: 10\u00b3\u201310\u2076 organisms)
  +- Acid tolerance response (survives gastric acid)
  +- Invasion of M cells and enterocytes via Type III Secretion System (T3SS)
  +- SPI-1 (Salmonella Pathogenicity Island 1):
  |  +- Invasion of intestinal epithelial cells
  |  +- Membrane ruffling, macropinocytosis
  +- SPI-2:
  |  +- Intracellular survival within macrophages
  |  +- Replication in Salmonella-containing vacuole
  +- Inflammatory response:
  |  +- IL-8 secretion \u2192 neutrophil recruitment
  |  +- Prostaglandin production \u2192 fluid secretion
  |  +- Mucosal inflammation \u2192 diarrhea

Clinical presentation:
  +- Acute gastroenteritis (most common)
  +- Bacteremia (5\u201310% of NTS)
  +- Focal infections (osteomyelitis, endocarditis, meningitis)
  +- Carrier state (chronic fecal shedding)

Diagnosis:
  +- Stool culture (gold standard)
  +- Blood cultures if systemic
  +- PCR-based multiplex panels
  +- Serotyping for outbreak investigation
---

**Shiga Toxin-Producing E. coli (STEC) (ICD-11: 1A03):**

---
Microbiology:
  +- E. coli O157:H7 and non-O157 STEC
  +- Produces Shiga toxin (Stx1 and/or Stx2)
  +- Infectious dose: Very low (<100 organisms)

Pathogenesis:
  +- Attaching and effacing (A/E) lesion:
  |  +- Locus of enterocyte effacement (LEE)
  |  +- Intimin-mediated attachment
  |  +- Actin pedestal formation
  |  +- Microvilli destruction
  +- Shiga toxin:
  |  +- AB\u2085 toxin structure
  |  +- Binds globotriaosylceramide (Gb3) receptor
  |  +- Inhibits 28S rRNA \u2192 protein synthesis arrest \u2192 cell death
  |  +- Gb3 enriched on renal glomerular endothelium
  |  +- Stx2 more virulent than Stx1

Hemolytic Uremic Syndrome (HUS):
  +- Occurs in 5\u201315% of STEC infections (children)
  +- Triad: Microangiopathic hemolytic anemia, thrombocytopenia, acute kidney injury
  +- Pathogenesis:
  |  +- Shiga toxin damages glomerular endothelium
  |  +- Platelet activation and microthrombi formation
  |  +- Mechanical RBC fragmentation (schistocytes)
  |  +- Renal cortical necrosis
  +- Treatment: Supportive (IV fluids, dialysis if needed)
  +- Antibiotics contraindicated (increase toxin release \u2192 worsen HUS)
---

**Listeria monocytogenes (ICD-11: 1A04):**

---
Microbiology:
  +- Gram-positive, facultatively anaerobic rod
  +- Motile at 25\u00b0C (tumbling motility via flagella)
  +- Grows at 0\u201345\u00b0C (psychrotrophic: refrigerator temperatures)
  +- Salt and acid tolerant

Pathogenesis:
  +- Ingestion \u2192 intestinal invasion via internalin A (InlA) binding E-cadherin
  +- Escapes phagosome: Listeriolysin O (LLO) + phospholipases
  +- Intracellular replication in cytoplasm
  +- Actin-based motility (ActA): "Actin rocket" propulsion
  +- Cell-to-cell spread without extracellular exposure
  +- Crosses blood-brain barrier \u2192 meningitis
  +- Crosses placental barrier \u2192 fetal infection

Clinical syndromes:
  +- Febrile gastroenteritis (immunocompetent)
  +- Invasive listeriosis:
  |  +- Bacteremia, sepsis
  |  +- Meningitis/meningoencephalitis (predilection for brainstem)
  |  +- Rhombencephalitis
  +- Pregnancy-associated:
  |  +- Chorioamnionitis, spontaneous abortion
  |  +- Neonatal sepsis, meningitis (granulomatosis infantiseptica)
  +- Case fatality rate: 20\u201330% (invasive disease)

Treatment:
  +- Ampicillin (or penicillin G) + gentamicin
  +- TMP-SMX for penicillin allergy
  +- Cephalosporins NOT effective (intrinsic resistance)
---

**Norovirus (ICD-11: 1A08):**

---
Virology:
  +- Caliciviridae family
  +- Non-enveloped, single-stranded RNA virus
  +- Genogroups GI, GII (GII.4 most common)
  +- Extremely stable in environment

Pathogenesis:
  +- Very low infectious dose (18\u20132,800 viral particles)
  +- Infects enterocytes in small intestine
  +- Blunting of intestinal villi
  +- Malabsorption and secretory response
  +- Immune response: Short-term, strain-specific
  +- Shedding can persist weeks after resolution

Transmission:
  +- Fecal-oral route
  +- Contaminated food (shellfish, produce, ready-to-eat)
  +- Person-to-person (vomitus and fecal matter)
  +- Environmental surfaces (fomites)
  +- Aerosolized vomitus

Prevention:
  +- Handwashing with soap and water (alcohol-based sanitizers less effective)
  +- Chlorine-based disinfectants (1000\u20135000 ppm sodium hypochlorite)
  +- Thorough cooking of shellfish
  +- Exclusion of symptomatic food handlers (48+ hours after resolution)
---

**Clostridium botulinum (ICD-11: 1C12):**

---
Microbiology:
  +- Gram-positive, obligate anaerobe, spore-forming rod
  +- Produces botulinum neurotoxin (BoNT) serotypes A\u2013G
  +- Spores resistant to boiling (require 121\u00b0C for 15 min)

Pathogenesis:
  +- BoNT mechanism:
  |  +- Zinc endopeptidase
  |  +- Cleaves SNARE proteins at neuromuscular junction
  |  +- Blocks acetylcholine release from presynaptic terminal
  |  +- Results in flaccid paralysis
  +- Foodborne botulism:
  |  +- Pre-formed toxin in improperly canned/preserved foods
  |  +- Low-acid foods (pH >4.6) at risk
  |  +- Anaerobic conditions favor growth
  +- Infant botulism:
  |  +- Ingestion of spores (not pre-formed toxin)
  |  +- Spore germination in immature GI tract
  |  +- Honey is most identified source
  |  +- "Floppy baby" presentation

Clinical presentation:
  +- Descending symmetric flaccid paralysis
  +- Cranial nerve palsies first (diplopia, dysphagia, dysarthria)
  +- Respiratory failure (diaphragm paralysis)
  +- No fever, no sensory deficits
  +- Autonomic dysfunction (constipation, urinary retention)

Treatment:
  +- Antitoxin (equine or human-derived)
  +- Supportive care (mechanical ventilation)
  +- Baby BIG (human botulism immune globulin) for infant botulism
  +- Wound debridement + antibiotics for wound botulism
---

## HACCP and Regulatory Framework

---
Hazard Analysis Critical Control Points (HACCP):
  +- Seven principles:
  |  1. Conduct hazard analysis
  |  2. Determine critical control points (CCPs)
  |  3. Establish critical limits
  |  4. Establish monitoring procedures
  |  5. Establish corrective actions
  |  6. Establish verification procedures
  |  7. Establish record-keeping
  +- Required for: Meat, poultry, seafood, juice processing
  +- Preventive Controls (FSMA):
     +- Food Safety Modernization Act (2011)
     +- Shift from reactive to preventive approach
     +- Hazard analysis and preventive controls
     +- Supply chain programs
     +- Recall authority for FDA

Surveillance systems:
  +- FoodNet: Active surveillance in 10 states
  +- PulseNet: Molecular subtyping network (PFGE, WGS)
  +- Whole genome sequencing: Outbreak detection
  +- IFSAC: Interagency Food Safety Analytics Collaboration
---`,
      keyTerms: [
        { term: 'Type III Secretion System', definition: 'Needle-like bacterial apparatus that injects effector proteins directly into host cells; used by Salmonella for invasion' },
        { term: 'Shiga toxin', definition: 'AB\u2085 toxin produced by STEC that inhibits protein synthesis by cleaving 28S rRNA; damages renal glomerular endothelium' },
        { term: 'Listeriolysin O', definition: 'Pore-forming cytolysin that allows Listeria to escape from the phagosome into the host cell cytoplasm' },
        { term: 'SNARE proteins', definition: 'Proteins mediating vesicle fusion at the neuromuscular junction; cleaved by botulinum toxin to block acetylcholine release' },
        { term: 'HACCP', definition: 'Hazard Analysis Critical Control Points; systematic preventive food safety management system' },
        { term: 'actin-based motility', definition: 'Mechanism used by Listeria to propel through host cell cytoplasm and spread cell-to-cell using ActA protein' },
      ],
      analogies: [
        'Salmonella\'s T3SS is like a molecular syringe \u2013 it injects proteins into your cells to hijack them.',
        'Listeria\'s actin rocket is like riding a jet engine through cells \u2013 the bacterium polymerizes host actin to propel itself.',
        'Botulinum toxin cutting SNARE proteins is like snipping the wires that connect your brain to your muscles.',
      ],
      examples: [
        'A 3-year-old develops HUS with schistocytes on blood smear after eating undercooked hamburger contaminated with E. coli O157:H7',
        'A pregnant woman at 32 weeks presents with fever and bacteremia from Listeria after eating contaminated soft cheese',
        'PFGE and whole genome sequencing link a multistate Salmonella outbreak to contaminated peanut butter',
        'A home canner develops descending paralysis from botulism after eating improperly preserved green beans',
      ],
      clinicalNotes: 'Antibiotics are contraindicated in STEC infections as they may increase Shiga toxin release and HUS risk. Listeria meningitis requires ampicillin + gentamicin (cephalosporins are ineffective). Botulinum antitoxin should be administered early as it only neutralizes circulating toxin, not toxin already bound to nerve terminals. Norovirus outbreaks require chlorine-based disinfection as alcohol-based sanitizers are less effective against non-enveloped viruses.',
    },
    4: {
      level: 4,
      summary: 'Advanced food safety integrates molecular pathogenesis, host immune evasion mechanisms, antimicrobial resistance patterns, emerging pathogens, and risk assessment methodologies. Clinical management requires understanding toxin kinetics, immunopathology, and population-specific vulnerabilities.',
      explanation: `## Molecular Pathogenesis and Immune Evasion

**Salmonella Pathogenicity Islands and Immune Evasion:**

---
SPI-1 encoded T3SS effectors:
  +- SipA, SipC: Actin cytoskeleton rearrangement
  +- SopB: Phosphoinositide phosphatase \u2192 membrane ruffling
  +- SopE/SopE2: Rho GTPase activation \u2192 macropinocytosis
  +- SptP: Reverses actin changes (post-invasion)
  +- Net effect: Bacterial uptake by non-phagocytic cells

SPI-2 encoded T3SS effectors:
  +- SifA: Salmonella-induced filament formation
  +- SseF, SseG: Golgi positioning around SCV
  +- SpvC: Phosphothreonine lyase \u2192 suppresses MAPK signaling
  +- SpiC: Inhibits phagosome-lysosome fusion
  +- Net effect: Intracellular survival and replication

Immune evasion strategies:
  +- Vi capsule (S. Typhi): Inhibits complement activation
  +- O-antigen modification: Evades antibody recognition
  +- Biofilm formation: Environmental persistence
  +- Suppression of NF-\u03baB signaling
  +- Inhibition of antigen presentation
  +- Modulation of autophagy

Antimicrobial resistance:
  +- Increasing resistance to fluoroquinolones
  +- Extended-spectrum beta-lactamase (ESBL) producing strains
  +- MDR S. Typhimurium DT104 (ACSSuT pattern)
  +- Azithromycin resistance emerging
  +- Plasmid-mediated resistance transfer
---

**STEC Advanced Pathogenesis:**

---
Shiga toxin molecular mechanism:
  +- Stx structure: A subunit (enzymatic) + 5 B subunits (binding)
  +- B pentamer binds Gb3 (globotriaosylceramide) receptor
  +- Endocytosis and retrograde transport:
  |  +- Early endosome \u2192 trans-Golgi network \u2192 ER
  |  +- A subunit cleaved by furin
  |  +- A1 fragment: RNA N-glycosidase activity
  |  +- Depurinates A4324 in 28S rRNA
  |  +- Irreversible inhibition of protein synthesis
  +- Additional effects:
     +- Ribotoxic stress response \u2192 apoptosis
     +- Endothelial cell activation \u2192 pro-thrombotic state
     +- Complement activation on damaged endothelium
     +- Platelet activation and microthrombi formation

HUS pathophysiology (detailed):
  +- Stx2 > Stx1 for HUS risk
  +- Renal microangiopathy:
  |  +- Glomerular endothelial swelling
  |  +- Subendothelial fibrin deposition
  |  +- Arteriolar thrombotic microangiopathy
  |  +- Platelet-fibrin thrombi in glomeruli
  +- Complement dysregulation:
  |  +- Alternative pathway activation
  |  +- C3a, C5a generation
  |  +- Factor H binding impaired
  +- Prognostic factors:
  |  +- Age <5 years
  |  +- Elevated WBC at presentation
  |  +- Stx2 production
  |  +- Antibiotic use (increases toxin release)
  +- Long-term outcomes:
     +- Chronic kidney disease (25\u201330%)
     +- Hypertension (10\u201320%)
     +- Proteinuria
     +- End-stage renal disease (3\u20135%)
---

**Listeria Intracellular Life Cycle (Advanced):**

---
Entry mechanisms:
  +- InlA-E-cadherin pathway:
  |  +- Species-specific (human E-cadherin permissive)
  |  +- Important at intestinal epithelium and placenta
  +- InlB-Met (hepatocyte growth factor receptor):
  |  +- Activates PI3K, Akt signaling
  |  +- Important for hepatocyte and trophoblast invasion

Phagosomal escape:
  +- LLO (listeriolysin O):
  |  +- Cholesterol-dependent cytolysin
  |  +- pH-activated (optimal pH 5.5)
  |  +- Pore formation in phagosomal membrane
  +- PlcA (phosphatidylinositol-specific phospholipase C)
  +- PlcB (broad-range phospholipase C)
  +- Combined action enables efficient escape

Actin-based motility:
  +- ActA protein:
  |  +- Mimics WASP family proteins
  |  +- Recruits Arp2/3 complex
  |  +- Nucleates actin polymerization
  |  +- Generates "actin comet tail"
  +- Speed: 0.3\u20130.5 \u03bcm/s
  +- Pushes into adjacent cell membrane
  +- Listeria trapped in double-membrane vacuole
  +- Escapes using LLO + phospholipases
  +- Cell-to-cell spread avoids extracellular immune response

Crossing biological barriers:
  +- Blood-brain barrier:
  |  +- Transcytosis across endothelial cells
  |  +- InlB-Met interaction
  |  +- Trojan horse mechanism (within monocytes)
  +- Placental barrier:
  |  +- InlA-E-cadherin at syncytiotrophoblast
  |  +- InlB-Met at cytotrophoblast
  |  +- Results in chorioamnionitis, fetal infection
  +- Intestinal barrier:
     +- InlA at Peyer patches (M cells and goblet cells)
     +- Translocation to mesenteric lymph nodes
     +- Systemic dissemination via bloodstream
---

## Antimicrobial Resistance in Foodborne Pathogens

---
Resistance mechanisms:
  +- Beta-lactamases (ESBLs, carbapenemases)
  +- Fluoroquinolone resistance (gyrA/parC mutations, qnr genes)
  +- Aminoglycoside-modifying enzymes
  +- Efflux pumps
  +- Plasmid-mediated colistin resistance (mcr-1)
  +- Horizontal gene transfer in food chain

One Health approach:
  +- Antibiotic use in food animals drives resistance
  +- National Antimicrobial Resistance Monitoring System (NARMS)
  +- Surveillance across human, animal, retail meat
  +- WHO critically important antimicrobials list
  +- FDA Veterinary Feed Directive (2017)
  +- Medically important antibiotics restricted in food animals

Clinical implications:
  +- Empiric therapy selection based on local resistance patterns
  +- Culture and sensitivity for invasive infections
  +- Carbapenem-resistant Salmonella emerging
  +- XDR S. Typhi (Pakistan, 2016\u2013present)
  +- ESBL-producing Salmonella increasing globally
---

## Risk Assessment and Quantitative Microbiology

---
Quantitative Microbial Risk Assessment (QMRA):
  +- Hazard identification
  +- Exposure assessment:
  |  +- Dose-response modeling
  |  +- Monte Carlo simulation
  |  +- Prevalence and concentration data
  +- Dose-response assessment:
  |  +- Beta-Poisson model (Salmonella, E. coli)
  |  +- Exponential model (Listeria)
  |  +- ID\u2085\u2080 varies by pathogen and host
  +- Risk characterization:
     +- Probability of illness per serving
     +- DALYs (disability-adjusted life years)
     +- Cost-benefit analysis of interventions

Predictive microbiology:
  +- Growth models: Baranyi, Gompertz, logistic
  +- Thermal death kinetics: D-values, z-values
  +- Time-temperature integration
  +- Water activity (a_w) and pH effects
  +- Challenge studies for food safety validation
---`,
      keyTerms: [
        { term: 'Salmonella Pathogenicity Islands', definition: 'Chromosomal regions encoding virulence factors; SPI-1 for invasion, SPI-2 for intracellular survival' },
        { term: 'globotriaosylceramide (Gb3)', definition: 'Glycosphingolipid receptor for Shiga toxin; highly expressed on renal glomerular endothelium' },
        { term: 'internalin', definition: 'Surface proteins (InlA, InlB) used by Listeria for receptor-mediated invasion of host cells' },
        { term: 'ActA', definition: 'Listeria surface protein that recruits Arp2/3 complex to generate actin-based motility for cell-to-cell spread' },
        { term: 'QMRA', definition: 'Quantitative Microbial Risk Assessment; probabilistic framework for estimating foodborne illness risk' },
        { term: 'SNARE complex', definition: 'Soluble NSF attachment protein receptor; mediates synaptic vesicle fusion for neurotransmitter release; target of botulinum toxin' },
        { term: 'One Health', definition: 'Approach recognizing interconnection of human, animal, and environmental health; critical for addressing antimicrobial resistance' },
      ],
      analogies: [
        'Listeria\'s intracellular life cycle is like a prison escape artist \u2013 it breaks out of the phagosome, builds a jet pack from host actin, and tunnels into the next cell.',
        'Shiga toxin\'s retrograde transport is like a Trojan horse \u2013 it enters through the normal receptor pathway but then hijacks intracellular trafficking to reach the ribosome.',
        'QMRA is like weather forecasting for food safety \u2013 it uses models and data to predict the probability of illness.',
      ],
      examples: [
        'XDR S. Typhi outbreak in Pakistan (2016\u2013present) showed resistance to all first-line and some second-line antibiotics',
        'Listeria recall of contaminated cantaloupe (2011) caused 33 deaths, highlighting the pathogen\'s ability to grow on produce at refrigerator temperatures',
        'WGS-based outbreak detection identified a multistate Salmonella cluster linked to pet turtle exposure with only 5 cases',
        'QMRA modeling estimated the risk of listeriosis from deli meats at 1 case per 83,000 servings for the general population',
      ],
      clinicalNotes: 'Antibiotics should be avoided in STEC infections; fluoroquinolone and TMP-SMX may increase Shiga toxin production through SOS response induction. Listeria requires empiric ampicillin coverage in elderly or pregnant patients with bacterial meningitis because cephalosporins have no activity. Botulinum antitoxin efficacy decreases with time; administer before confirmatory testing if clinical suspicion is high. Monitor for antimicrobial resistance patterns through NARMS when selecting empiric therapy for invasive Salmonella infections.',
    },
    5: {
      level: 5,
      summary: 'Expert-level food safety encompasses cutting-edge genomic epidemiology, novel intervention technologies, regulatory science, and global food security challenges. Whole genome sequencing has revolutionized outbreak investigation, while emerging threats from antimicrobial resistance and climate change require integrated One Health surveillance and adaptive risk management frameworks.',
      explanation: `## Genomic Epidemiology and Surveillance

**Whole Genome Sequencing (WGS) in Food Safety:**

---
WGS applications:
  +- Outbreak detection and investigation:
  |  +- SNP-based phylogenetics (core genome MLST)
  |  +- Replaces PFGE (PulseNet transition to WGS)
  |  +- Higher resolution: Distinguishes isolates with 0\u20135 SNP differences
  |  +- Real-time cluster detection algorithms
  |  +- Source attribution modeling
  +- Virulence characterization:
  |  +- In silico serotyping (SeqSero for Salmonella)
  |  +- Stx subtype determination (stx1, stx2 variants)
  |  +- Virulence gene profiling
  |  +- Pathogenicity island mapping
  +- Antimicrobial resistance prediction:
  |  +- ResFinder, AMRFinderPlus databases
  |  +- Genotype-phenotype concordance >95%
  |  +- Plasmid characterization
  |  +- Resistance gene transfer tracking
  +- Persistent contamination:
     +- Environmental niche identification
     +- Harborage site detection in food facilities
     +- Longitudinal tracking of persistent strains
     +- Biofilm-associated genetic markers

GenomeTrakr network:
  +- FDA-coordinated global database
  +- >700,000 isolate genomes
  +- Open-access NCBI repository
  +- International collaboration
  +- Real-time data sharing
  +- Machine learning for source attribution
---

**Metagenomics and Culture-Independent Approaches:**

---
Metagenomic food safety applications:
  +- Shotgun metagenomics:
  |  +- Culture-independent pathogen detection
  |  +- Multiple pathogens simultaneously
  |  +- AMR gene profiling
  |  +- Strain-level resolution
  +- 16S rRNA amplicon sequencing:
  |  +- Microbial community profiling
  |  +- Indicator species identification
  |  +- Process hygiene assessment
  +- Viromics:
  |  +- Norovirus genotyping from food/water
  |  +- Hepatitis A detection
  |  +- Viral quasi-species analysis
  +- Limitations:
     +- Sensitivity for low-abundance pathogens
     +- Host DNA contamination
     +- Bioinformatics complexity
     +- Regulatory acceptance
---

## Emerging Threats and Climate Change

---
Climate change impacts on food safety:
  +- Rising temperatures:
  |  +- Extended growing seasons for pathogens
  |  +- Increased Vibrio risk in warming waters
  |  +- Mycotoxin production shifts
  |  +- Cold chain maintenance challenges
  +- Extreme weather events:
  |  +- Flooding \u2192 agricultural contamination
  |  +- Drought \u2192 water recycling risks
  |  +- Wildfire \u2192 food supply disruption
  +- Changing pathogen ecology:
  |  +- Vibrio parahaemolyticus expanding range
  |  +- Salmonella prevalence changes in poultry
  |  +- Parasitic infections shifting geography
  |  +- New pathogen-host interactions
  +- Food system vulnerabilities:
     +- Longer supply chains
     +- Novel food sources (insects, algae, cell-cultured)
     +- Globalized food trade
     +- Antimicrobial resistance acceleration

Emerging pathogens:
  +- Cyclospora cayetanensis: Produce-associated outbreaks increasing
  +- Cronobacter sakazakii: Powdered infant formula
  +- Hepatitis E virus: Undercooked pork, game meat
  +- Sapovirus: Shellfish-associated gastroenteritis
  +- Guillain-Barr\u00e9 associated Campylobacter
  +- ESBL/CPE Enterobacteriaceae in food chain
---

## Novel Food Safety Technologies

---
Intervention technologies:
  +- High-pressure processing (HPP):
  |  +- 400\u2013600 MPa
  |  +- Inactivates vegetative pathogens
  |  +- Preserves nutritional quality
  |  +- Cold pasteurization
  |  +- Limitations: Spores resistant, equipment cost
  +- Pulsed electric fields (PEF):
  |  +- Electroporation of cell membranes
  |  +- Liquid foods
  |  +- Low thermal impact
  +- UV-C irradiation:
  |  +- 254 nm wavelength
  |  +- Surface decontamination
  |  +- Water treatment
  |  +- FDA-approved for juice
  +- Cold plasma:
  |  +- Reactive oxygen/nitrogen species
  |  +- Surface decontamination
  |  +- Biofilm disruption
  |  +- Emerging application
  +- Bacteriophage biocontrol:
  |  +- Targeted pathogen reduction
  |  +- GRAS-approved products (ListShield, SalmoFresh)
  |  +- Pre-harvest and post-harvest applications
  |  +- No impact on beneficial microbiota
  +- CRISPR-based diagnostics:
     +- SHERLOCK/DETECTR platforms
     +- Rapid, field-deployable detection
     +- Attomolar sensitivity
     +- Multiplexed pathogen detection
     +- Point-of-need testing

Blockchain and traceability:
  +- Farm-to-fork tracking
  +- Rapid trace-back during outbreaks
  +- IBM Food Trust, other platforms
  +- FDA New Era of Smarter Food Safety
  +- Digital twin technology for supply chains
---

## Immunocompromised Host: Advanced Management

---
Neutropenic diet (low-microbial diet):
  +- Historically prescribed for BMT/chemotherapy patients
  +- Current evidence:
  |  +- Multiple RCTs show no benefit vs. standard food safety
  |  +- Cochrane review: Insufficient evidence to support
  |  +- May reduce quality of life and nutrition
  |  +- Shifting toward standard safe food handling
  +- Current recommendations:
  |  +- Follow standard food safety practices
  |  +- Avoid highest-risk items (raw meat, fish, eggs)
  |  +- Safe water sources
  |  +- Proper food handling and storage
  |  +- Individualized based on immune status

HIV/AIDS-specific considerations:
  +- CD4 <200: Highest risk
  +- Cryptosporidium: Avoid untreated water
  +- Salmonella: 20\u2013100x increased risk
  +- Listeria: 300x increased risk
  +- Campylobacter: Increased risk
  +- Prolonged/recurrent courses common
  +- Prophylaxis with TMP-SMX provides some protection

Solid organ transplant:
  +- Lifelong immunosuppression
  +- Highest risk first 6 months
  +- Toxoplasma: Avoid undercooked meat
  +- Listeria: Avoid high-risk foods
  +- Food safety counseling at discharge
  +- Annual reinforcement of guidelines
---`,
      keyTerms: [
        { term: 'core genome MLST', definition: 'Multi-locus sequence typing based on hundreds of conserved genes; provides high-resolution strain differentiation for outbreak investigation' },
        { term: 'GenomeTrakr', definition: 'FDA-coordinated global network for whole genome sequencing of foodborne pathogens; enables real-time outbreak detection' },
        { term: 'high-pressure processing', definition: 'Non-thermal food preservation using 400\u2013600 MPa to inactivate vegetative pathogens while preserving nutritional quality' },
        { term: 'bacteriophage biocontrol', definition: 'Use of viruses that specifically infect bacteria to reduce pathogen levels on food; GRAS-approved for Listeria and Salmonella' },
        { term: 'SHERLOCK/DETECTR', definition: 'CRISPR-based diagnostic platforms for rapid, ultrasensitive pathogen detection at point-of-need' },
        { term: 'neutropenic diet', definition: 'Low-microbial diet historically prescribed for immunosuppressed patients; current evidence does not support benefit over standard food safety practices' },
        { term: 'metagenomics', definition: 'Culture-independent sequencing of all genetic material in a sample; enables simultaneous detection of multiple pathogens' },
      ],
      analogies: [
        'WGS-based outbreak detection is like having DNA fingerprints for bacteria \u2013 it can link cases separated by thousands of miles with near-certainty.',
        'Blockchain food traceability is like a digital passport for every food item \u2013 tracking its entire journey from farm to table.',
        'Bacteriophage biocontrol is like sending a targeted assassin \u2013 the phage kills only the specific pathogen and leaves everything else untouched.',
        'CRISPR diagnostics are like a molecular search engine \u2013 they find a specific genetic sequence among billions of others in minutes.',
      ],
      examples: [
        'GenomeTrakr WGS identified a persistent Listeria strain in a food facility that had evaded detection by PFGE for 3 years',
        'SURMOUNT clinical application of HPP extends shelf life of deli meats while achieving 5-log Listeria reduction',
        'CRISPR-based SHERLOCK platform detected Salmonella in lettuce wash water within 1 hour vs. 48 hours for culture',
        'Climate-driven northward expansion of Vibrio parahaemolyticus caused shellfish-associated outbreaks in Alaska and Northern Europe',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **Genomic epidemiology:** WGS has replaced PFGE for outbreak investigation. A cluster of 2\u20133 isolates with \u22645 SNP differences warrants investigation. GenomeTrakr database now contains >700,000 genomes.

2. **Antimicrobial resistance:** XDR Salmonella Typhi requires azithromycin or carbapenems. Monitor NARMS data for local resistance patterns. Avoid fluoroquinolones for STEC (SOS response increases toxin).

3. **Immunocompromised patients:** Neutropenic diet has no proven benefit (Cochrane review). Focus on standard food safety practices and avoid highest-risk foods. HIV patients with CD4 <200 have 300x Listeria risk.

4. **Climate change:** Vibrio risk expanding northward. Mycotoxin patterns shifting. Supply chain vulnerabilities increasing. Integrate climate projections into food safety planning.

5. **Novel technologies:** HPP is FDA-accepted for pathogen reduction in ready-to-eat products. Bacteriophage products (ListShield) are GRAS for direct food application. CRISPR diagnostics approaching regulatory clearance for point-of-need testing.

6. **Regulatory landscape:** FDA New Era of Smarter Food Safety emphasizes tech-enabled traceability, predictive analytics, and modernized outbreak response. FSMA preventive controls require documented food safety plans.`,
    },
  },

  media: [
    {
      id: 'temperature-danger-zone',
      type: 'diagram',
      filename: 'temperature-danger-zone.svg',
      title: 'Temperature Danger Zone',
      description: 'Visual representation of safe and unsafe temperature ranges for food storage and cooking',
    },
    {
      id: 'cross-contamination-prevention',
      type: 'diagram',
      filename: 'cross-contamination-prevention.svg',
      title: 'Cross-Contamination Prevention',
      description: 'Diagram showing proper food separation and handling techniques',
    },
  ],

  citations: [
    {
      id: 'cdc-foodborne-burden',
      type: 'article',
      title: 'Foodborne Illness Acquired in the United States \u2013 Major Pathogens',
      authors: ['Scallan E', 'Hoekstra RM', 'Angulo FJ', 'et al.'],
      source: 'Emerging Infectious Diseases',
      url: 'https://doi.org/10.3201/eid1701.P11101',
    },
    {
      id: 'fda-food-code',
      type: 'website',
      title: 'FDA Food Code 2022',
      source: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/food/retail-food-protection/fda-food-code',
    },
    {
      id: 'who-foodborne-disease',
      type: 'article',
      title: 'WHO Estimates of the Global Burden of Foodborne Diseases',
      authors: ['Havelaar AH', 'Kirk MD', 'Torgerson PR', 'et al.'],
      source: 'PLOS Medicine',
      url: 'https://doi.org/10.1371/journal.pmed.1001923',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'related', label: 'Micronutrients' },
    { targetId: 'gi-infectious-diseases', targetType: 'condition', relationship: 'related', label: 'GI Infectious Diseases' },
    { targetId: 'immunology-immunocompromised', targetType: 'topic', relationship: 'related', label: 'Immunocompromised Host' },
  ],

  tags: {
    systems: ['gastrointestinal', 'immune', 'neurological'],
    topics: ['nutrition', 'food-safety', 'infectious-disease', 'public-health', 'preventive-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default foodSafety;
