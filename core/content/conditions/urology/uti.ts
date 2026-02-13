/**
 * Urinary Tract Infection - Urology Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const uti: EducationalContent = {
  id: 'condition-urinary-tract-infection',
  type: 'condition',
  name: 'Urinary Tract Infection',
  nameEs: 'Infección del Tracto Urinario',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis', 'Pyelonephritis'],
  hpoId: 'HP:0000010',

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection occurs when bacteria enter the urinary system and multiply, causing burning during urination, frequent urges to urinate, and pelvic pain.',
      explanation: `UTIs are very common, especially in women. They happen when bacteria from the skin or rectum enter the urethra and travel up into the bladder.

**Common Symptoms:**
- Burning or pain when urinating
- Strong, frequent urge to urinate
- Passing only small amounts of urine
- Cloudy or strong-smelling urine
- Pain in the lower belly or back
- Feeling tired or shaky

**More Serious Symptoms (Kidney Infection):**
- Fever and chills
- Pain in the back or side
- Nausea and vomiting

**Who Gets UTIs:**
- Women (much more common than men)
- People with diabetes
- People with kidney stones
- People with catheters

**Treatment:**
- Antibiotics prescribed by a doctor
- Drinking plenty of water
- Avoiding drinks that irritate the bladder (caffeine, alcohol)

**Prevention:**
- Drink plenty of water daily
- Urinate after sexual activity
- Wipe from front to back
- Don't hold urine too long`,
      keyTerms: [
        { term: 'UTI', definition: 'Urinary tract infection; infection in any part of the urinary system' },
        { term: 'cystitis', definition: 'Infection of the bladder; most common type of UTI' },
        { term: 'pyelonephritis', definition: 'Infection of the kidneys; more serious type of UTI' },
        { term: 'urethra', definition: 'The tube that carries urine from the bladder out of the body' },
      ],
      analogies: [
        'Bacteria entering the urethra is like uninvited guests walking through an open door into your house.',
        'Your urinary tract is like a one-way street—bacteria should flow out, not travel up.'
      ],
      examples: [
        'A 28-year-old woman with burning urination, urgency, and frequency likely has a simple bladder infection (cystitis).',
        'A woman with fever, flank pain, and burning during urination may have a kidney infection (pyelonephritis).'
      ],
      patientCounselingPoints: [
        'Complete the full course of antibiotics even if you feel better',
        'Drink 6-8 glasses of water daily to help flush out bacteria',
        'See a doctor if symptoms don\'t improve within 48 hours of starting antibiotics',
        'Seek immediate care for fever, back pain, or vomiting'
      ],
    },
    2: {
      level: 2,
      summary: 'UTIs are classified as uncomplicated (healthy non-pregnant women) or complicated (men, pregnancy, catheters, anatomic abnormalities), with treatment selection and duration based on this classification.',
      explanation: `## Classification

**Uncomplicated UTI:**
- Healthy non-pregnant women
- Normal urinary tract anatomy
- Lower tract (cystitis)
- Most common scenario

**Complicated UTI:**
- Men
- Pregnant women
- Children
- Catheter-associated
- Anatomic/functional abnormalities
- Impaired host defenses
- Upper tract (pyelonephritis)

## Common Pathogens

| Setting | Common Organisms |
|---------|------------------|
| Community women | E. coli (80%), Staph saprophyticus (10-15%), K. pneumoniae |
| Men | E. coli, Enterococcus, Pseudomonas |
| Hospital/catheter | E. coli, Enterococcus, Pseudomonas, Candida |
| Pyelonephritis | E. coli (90%), Proteus, Klebsiella |

## Diagnosis

**Urinalysis Findings:**
- **Leukocyte esterase:** Positive (indicates WBCs)
- **Nitrite:** Positive (indicates gram-negative bacteria)
- **WBCs:** >10/hpf
- **RBCs:** Often present
- **Bacteria:** Visible on microscopy

**Urine Culture:**
- **Uncomplicated:** Often not required
- **Complicated:** Always recommended
- **Definition:** ≥10^5 CFU/mL (or ≥10^3 in symptomatic)
- Guides antibiotic selection

## Treatment: Uncomplicated Cystitis

**First-line Options:**
- **Nitrofurantoin 100 mg BID x 5 days** (preferred)
- **TMP-SMX DS BID x 3 days** (if local resistance <20%)
- **Fosfomycin 3 g single dose**

**Alternatives:**
- Ciprofloxacin 250 mg BID x 3 days (reserve for resistant cases)
- Levofloxacin 250 mg daily x 3 days (reserve for resistant cases)

## Treatment: Pyelonephritis

**Outpatient (mild):**
- Ciprofloxacin 500 mg BID x 7 days
- Levofloxacin 750 mg daily x 5 days

**Inpatient (severe):**
- Ceftriaxone 1 g IV daily
- Ciprofloxacin 400 mg IV q12h
- Piperacillin-tazobactam 3.375 g IV q8h
- Duration: 10-14 days total

## Special Populations

**Pregnancy:**
- Screen and treat asymptomatic bacteriuria
- Safe agents: Nitrofurantoin, cephalosporins
- Avoid fluoroquinolones, avoid TMP-SMX near term
- 7-day treatment for cystitis

**Men:**
- Always consider complicated
- 7-day treatment minimum
- Evaluate for prostatitis, obstruction

**Catheter-Associated:**
- Remove catheter if possible
- Treat if symptomatic only
- 7-14 days depending on severity`,
      keyTerms: [
        { term: 'CFU', definition: 'Colony forming units; measure of bacteria concentration in culture' },
        { term: 'dysuria', definition: 'Painful or difficult urination' },
        { term: 'pyuria', definition: 'White blood cells in urine; indicates inflammation or infection' },
        { term: 'bacteriuria', definition: 'Bacteria in the urine' },
        { term: 'uropathogen', definition: 'Bacteria that commonly cause urinary tract infections' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without symptoms; generally not treated except in pregnancy' },
      ],
      analogies: [
        'E. coli bacteria causing UTI are like unwanted tourists—they take up residence and cause problems in a place they don\'t belong.'
      ],
      examples: [
        'A woman with classic UTI symptoms can be treated empirically without culture (uncomplicated).',
        'A man with a UTI needs culture and longer treatment (complicated).',
        'Fluoroquinolones should be avoided for simple cystitis to preserve their effectiveness for more serious infections.'
      ],
      patientCounselingPoints: [
        'UTI symptoms usually improve within 48 hours of starting antibiotics',
        'Avoid caffeine, alcohol, and spicy foods that can irritate the bladder',
        'Wear cotton underwear and loose-fitting clothing',
        'Urinate when you feel the urge—don\'t hold it'
      ],
    },
    3: {
      level: 3,
      summary: 'UTI pathogenesis involves uropathogenic E. coli virulence factors including fimbriae for adhesion, biofilm formation on catheters, and host susceptibility factors including urinary stasis and obstruction.',
      explanation: `## Pathogenesis of UTI

**Route of Infection:**
- Ascending (most common): Periurethral colonizing bacteria ascend urethra
- Hematogenous (rare): Kidney seeding from bacteremia

**UPEC (Uropathogenic E. coli) Virulence Factors:**

**Adhesins:**
- **Type 1 pili (FimH):** Bind to mannose residues on urothelium
- **P fimbriae:** Bind to glycolipids on kidney cells
- **S fimbriae:** Bind to sialic acid residues
- **Dr family:** Bind to decay-accelerating factor

**Toxins:**
- **Hemolysin:** Damages urothelium, releases iron
- **CNF1 (cytotoxic necrotizing factor):** Damages epithelial cells
- **Sat:** Secreted autotransporter toxin

**Iron Acquisition:**
- Aerobactin (siderophore)
- Yersiniabactin
- Competition with host for iron

**Biofilm Formation:**
- Polysaccharide matrix protects bacteria
- Resistance to antibiotics and host defenses
- Important for catheter-associated UTI

**Intracellular Bacterial Communities (IBCs):**
- UPEC can invade bladder epithelial cells
- Form reservoirs protected from antibiotics
- May explain recurrence

## Host Risk Factors

**Anatomic:**
- Short urethra in women
- Proximity to rectum
- Sexual activity (introduction of bacteria)
- Vesicoureteral reflux (especially children)

**Functional:**
- Urinary stasis (retention, obstruction)
- Incomplete bladder emptying
- Neuropathic bladder

**Metabolic:**
- Diabetes (glucosuria, impaired immunity)
- Pregnancy (stasis, hormonal effects)
- Immunocompromise

**Iatrogenic:**
- Catheters
- Instrumentation
- Spermicide use (disrupts normal flora)

## Diagnostic Evaluation

**Pre-Test Probability:**
- Women with dysuria + frequency without vaginal discharge: >90% probability
- Vaginal symptoms suggest alternative diagnosis

**Urinalysis Interpretation:**

| Finding | Sensitivity | Specificity |
|---------|-------------|-------------|
| Leukocyte esterase | 75-95% | 50-70% |
| Nitrite | 35-85% | 90-98% |
| WBC >10/hpf | 80-95% | 65-75% |
| Bacteria | 40-70% | 85-95% |

**Urine Culture Indications:**
- Complicated UTI (always)
- Pyelonephritis
- Pregnant women
- Recurrent UTI
- Treatment failure

**Imaging Indications:**
- Pyelonephritis not responding to treatment
- Suspected obstruction/stone
- Frequent recurrences
- Men with first UTI (rule out prostate involvement)

## Antibiotic Resistance

**Mechanisms:**
- ESBL (extended-spectrum beta-lactamase)
- Fluoroquinolone resistance (qnr genes, mutations)
- Carbapenemases (KPC, NDM)
- Aminoglycoside-modifying enzymes

**Resistance Trends:**
- E. coli TMP-SMX resistance: 20-30% (varies by region)
- E. coli fluoroquinolone resistance: Increasing
- ESBL producers: 5-15% in some areas

**Antibiogram-Guided Therapy:**
- Local resistance patterns guide empiric choices
- Adjust when culture results available

## Asymptomatic Bacteriuria

**Definition:** Significant bacteriuria without symptoms

**When to Screen/Treat:**
- **Pregnancy:** Screen all, treat if positive
- **Pre-urologic procedure:** Treat if bacteriuria present
- **Don't treat:** Catheterized patients, elderly, diabetics (unless symptomatic)

**Risks of Treatment:**
- Antibiotic side effects
- C. difficile infection
- Development of resistance

## Special Situations

**Recurrent UTI (≥2 in 6 months or ≥3 in 12 months):**

**Evaluation:**
- Urine culture for each episode
- Imaging (renal ultrasound)
- Cystoscopy (if risk factors for structural abnormality)

**Prevention Strategies:**
- Postcoital prophylaxis (single dose after intercourse)
- Continuous low-dose prophylaxis
- Patient-initiated self-start treatment
- Vaginal estrogen (postmenopausal)
- D-mannose (limited evidence)
- Cranberry products (modest effect)

**Catheter-Associated UTI (CAUTI):**
- Symptomatic only (treat asymptomatic bacteriuria only if pregnant or pre-procedure)
- Remove or replace catheter
- 7-14 day course depending on severity
- Daily meatal care with normal saline (no antiseptics)

**Urosepsis:**
- Systemic inflammatory response from UTI
- More common with obstruction
- Requires aggressive resuscitation and source control`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli; strains with specific virulence factors causing UTI' },
        { term: 'fimbriae', definition: 'Hair-like appendages on bacteria that mediate attachment to host cells' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme that confers resistance to many antibiotics' },
        { term: 'IBC', definition: 'Intracellular bacterial communities; reservoirs of bacteria inside host cells' },
        { term: 'vesicoureteral reflux', definition: 'Backflow of urine from bladder into ureters/kidneys; risk factor for pyelonephritis' },
        { term: 'uropathogen', definition: 'Bacteria with specific virulence factors adapted to cause urinary tract infections' },
      ],
      clinicalNotes: 'Nitrofurantoin is first-line for uncomplicated cystitis—has excellent efficacy in the bladder but doesn\'t achieve tissue levels for pyelonephritis. Asymptomatic bacteriuria should NOT be treated except in pregnancy or before urologic procedures—treating increases resistance without benefit.',
    },
    4: {
      level: 4,
      summary: 'Complex UTI management addresses multidrug-resistant organisms, recurrent infections, catheter strategies, and urologic evaluation for anatomic abnormalities contributing to infections.',
      explanation: `## Multidrug-Resistant Uropathogens

**ESBL-Producing Enterobacterales:**
- Most common: E. coli, Klebsiella
- Resistant to penicillins, cephalosporins, aztreonam
- Often resistant to TMP-SMX, fluoroquinolones

**Treatment Options:**
- **Nitrofurantoin:** Retains activity for lower UTI
- **Fosfomycin:** Single-dose oral for lower UTI
- **Carbapenems:** For upper tract/severe infection
  - Ertapenem (once daily, no IV needed)
  - Meropenem, imipenem (IV)
- **Ceftazidime-avibactam:** For CRE
- **Meropenem-vaborbactam:** For CRE

**Carbapenem-Resistant Enterobacterales (CRE):**
- KPC (Klebsiella pneumoniae carbapenemase)
- NDM (New Delhi metallo-beta-lactamase)
- OXA-48-like carbapenemases

**Treatment Options:**
- Ceftazidime-avibactam
- Meropenem-vaborbactam
- Plazomicin (aminoglycoside)
- Tigecycline (lower UTI only)
- Polymyxins (colistin) - toxicity concerns

## Recurrent UTI Management

**Classification:**
- **Bacterial persistence:** Same strain causing reinfection
  - Inadequate treatment duration
  - Resistance to selected antibiotic
  - Stone or other nidus of infection
- **Reinfection:** New strain causing new infection
  - More common scenario
  - Host susceptibility factors

**Evaluation Protocol:**
1. Urine cultures for each episode (confirm reinfection vs persistence)
2. Upper tract imaging (CT or ultrasound)
3. Cystoscopy if:
   - Hematuria present
   - Prior pelvic surgery/radiation
   - Suspected anatomic abnormality
   - Rapid recurrence

**Prevention Strategies:**

**Antibiotic Prophylaxis:**
- **Postcoital:** Nitrofurantoin 50-100 mg or TMP-SMX DS after intercourse
- **Continuous:** Nitrofurantoin 50-100 mg qhs, TMP-SMX DS qhs, or cephalexin 250 mg qhs
- **Self-start:** Patient-initiated 3-day course at symptom onset

**Duration Considerations:**
- 6-12 months typical
- Reassess periodically
- Rotate antibiotics to prevent resistance

**Non-Antibiotic Prevention:**
- **Methenamine hippurate:** Converts to formaldehyde in acidic urine
- **D-mannose:** Prevents E. coli adhesion (limited evidence)
- **Cranberry:** Proanthocyanidins inhibit adhesion (modest effect)
- **Vaginal estrogen:** Restores lactobacilli in postmenopausal women
- **Probiotics:** Limited evidence, may help restore normal flora

**Vaccines (Investigational):**
- Urovaxom (oral immunostimulant)
- Experimental vaccines targeting FimH adhesion
- Not yet available in US

## Catheter Strategies

**Prevention Principles:**
- Avoid unnecessary catheterization
- Use smallest appropriate French size
- Maintain closed drainage system
- Secure catheter to prevent movement
- Keep bag below bladder level

**Indications for Catheter Change with UTI:**
- Catheter in place > 2 weeks
- Obstruction from catheter
- Biofilm likely source of infection

**Alternatives to Indwelling Catheter:**
- Intermittent catheterization
- Condom catheter (men)
- External collection devices

## Complicated UTI: Special Populations

**Diabetes:**
- More frequent complications (emphysematous pyelonephritis)
- May have atypical symptoms
- Higher risk of bacteremia
- Longer treatment duration

**Renal Transplant:**
- Immunosuppression increases risk
- Pyelonephritis threatens graft function
- Donor-derived UTI possible
- Consider prophylaxis in high-risk patients

**Pregnancy-Specific Issues:**
- Asymptomatic bacteriuria → pyelonephritis in 20-40% if untreated
- Pyelonephritis associated with:
  - Preterm labor
  - Low birth weight
  - Sepsis
- Imaging concerns: Ultrasound preferred over CT
- Antibiotic safety: Avoid fluoroquinolones, TMP-SMX near term, tetracyclines

**Neurogenic Bladder:**
- High prevalence of bacteriuria
- Distinguish colonization from infection
- Clean intermittent catheterization reduces CAUTI
- Consider prophylaxis in selected patients

## Urosepsis

**Risk Factors:**
- Obstruction (stones, BPH)
- Diabetes
- Immunocompromise
- Advanced age
- Instrumentation

**Management:**
- Early goal-directed therapy
- Broad-spectrum antibiotics covering Pseudomonas, ESBL
- Source control (relieve obstruction, drain abscess)
- Consider imaging: CT to identify obstruction/abscess

## Follow-Up

**Test of Cure:**
- Generally not needed for uncomplicated cystitis
- Consider for:
  - Pregnancy
  - Relapsing symptoms
  - Pyelonephritis

**Repeat Culture:**
- 1-2 weeks after completing treatment
- Ensure eradication

**Radiologic Evaluation:**
- For recurrent UTI or treatment failure
- CT abdomen/pelvis with contrast
- Ultrasound if radiation concerns (pregnancy, pediatrics)`,
      keyTerms: [
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales; highly resistant bacteria' },
        { term: 'KPC', definition: 'Klebsiella pneumoniae carbapenemase; enzyme conferring resistance to carbapenems' },
        { term: 'NDM', definition: 'New Delhi metallo-beta-lactamase; carbapenemase enzyme first identified in India' },
        { term: 'methenamine', definition: 'Urinary antiseptic that converts to formaldehyde in acidic urine' },
        { term: 'proanthocyanidins', definition: 'Compounds in cranberry that may prevent bacterial adhesion' },
      ],
      clinicalNotes: 'ESBL E. coli infections should NOT be treated with cephalosporins or beta-lactam/beta-lactamase inhibitors—even if susceptible in vitro, they have high failure rates. Vaginal estrogen is underutilized for postmenopausal recurrent UTI prevention—strong evidence supporting its use.',
    },
    5: {
      level: 5,
      summary: 'Advances in UTI management explore rapid molecular diagnostics, microbiome-targeted therapies, antivirulence strategies, and novel approaches to preventing recurrent infection and catheter complications.',
      explanation: `## Precision Diagnostics

**Rapid Molecular Testing:**
- **PCR-based panels:** Identify pathogens and resistance genes in < 1 hour
- **MALDI-TOF:** Rapid organism identification from culture
- **Next-generation sequencing:** Comprehensive microbiome analysis
- **Phenotypic susceptibility testing:** Faster AST methods

**Biomarker Development:**
- **Procalcitonin:** Distinguish bacteremia from localized infection
- **IL-6, IL-8:** Predict upper tract involvement
- **Host-response signatures:** Distinguish infection from colonization

**Point-of-Care Innovations:**
- Smartphone-connected dipstick readers
- Microfluidic culture platforms
- Spectroscopic urine analysis
- Home testing capabilities

## Antivirulence Therapies

**FimH Antagonists:**
- Mannosides that block type 1 pili
- Prevent bacterial adhesion
- Oral bioavailability demonstrated
- Phase 2 trials ongoing
- Alternative to antibiotics

**Toxin Inhibitors:**
- Hemolysin neutralization
- CNF1 inhibitors
- Reduce tissue damage while allowing immune clearance

**Quorum Sensing Inhibitors:**
- Disrupt bacterial communication
- Reduce virulence factor production
- Biofilm disruption

**Iron Acquisition Blockade:**
- Siderophore receptor blockers
- Starve bacteria of essential iron
- Vaccination against siderophore receptors

## Microbiome-Based Approaches

**Urinary Microbiome (Urobiome):**
- 16S rRNA sequencing reveals diverse bacterial community
- Lactobacillus dominance may be protective
- Dysbiosis associated with UTI susceptibility

**Probiotic Strategies:**
- **Vaginal:** Lactobacillus crispatus, L. iners
- **Oral:** Attempt to restore urogenital flora
- **Direct instillation:** Bladder installation (investigational)

**Fecal Microbiota Transplant:**
- Case reports for recurrent UTI with C. difficile
- Potential for restoring protective flora
- Early research phase

**Bacteriophage Therapy:**
- Phages specific to uropathogens
- Phage cocktails for broad coverage
- Intravesical administration for cystitis
- Overcomes antibiotic resistance
- Regulatory challenges

## Biofilm Disruption

**Catheter Technologies:**
- **Antimicrobial-coated:** Silver alloy, nitrofurazone
- **Hydrophilic:** Reduce bacterial adhesion
- **Bacteriophage-coated:** Emerging technology
- **Anti-biofilm agents:** DNase, dispersin B

**Enzymatic Disruption:**
- DNase to degrade extracellular DNA matrix
- Dispersin B degrades PNAG polysaccharide
- Combination with antibiotics for eradication

## Novel Therapeutic Classes

**Aminoglycoside Innovations:**
- **Plazomicin:** Next-generation aminoglycoside
- Active against ESBL, some carbapenemases
- Once-daily IV dosing
- Lower nephrotoxicity than gentamicin

**Cefiderocol:**
- Siderophore cephalosporin
- Trojan horse mechanism (uses iron transporters)
- Active against carbapenem-resistant organisms
- FDA approved for complicated UTI

**Eravacycline:**
- Fluorocycline antibiotic
- Active against ESBL producers
- Limited urinary penetration (cystitis only)

**Sulbactam-durlobactam:**
- For Acinetobacter infections
- FDA approved for complicated UTI

## Vaccine Development

**Targets:**
- **FimH adhesion:** Most advanced approach
- **P fimbriae:** Prevent pyelonephritis
- **Iron receptors:** Nutrient immunity
- **Whole-cell preparations:** Killed UPEC

**Challenges:**
- Antigenic diversity of strains
- Need for mucosal immunity
- Durability of response
- Manufacturing complexity

**Clinical Status:**
- No approved UTI vaccine in US
- Urovaxom available in Europe
- Multiple candidates in phase 1-2 trials

## Host-Directed Therapies

**Immune Modulation:**
- Estrogen therapy restores protective lactobacilli
- Immunomodulators enhance neutrophil function
- Cytokine inhibitors for inflammatory symptoms

**Epithelial Defense Enhancement:**
- Promote TLR4 signaling
- Enhance antimicrobial peptide production
- Support mucosal barrier function

## Intracellular Bacterial Communities

**Understanding IBCs:**
- UPEC forms quiescent reservoirs
- Protected from antibiotics and immune system
- Source of recurrent infection
- Explain treatment failures

**Therapeutic Implications:**
- Need for intracellular-penetrating agents
- Longer treatment durations
- Target biofilm lifecycle

## Artificial Intelligence Applications

**Diagnosis:**
- Automated urinalysis interpretation
- Predictive models for resistance patterns
- Symptom checker integration

**Treatment Optimization:**
- Antibiotic selection algorithms
- Dosing optimization (pharmacokinetic modeling)
- Outcome prediction

**Epidemiology:**
- Outbreak detection
- Resistance pattern tracking
- Predictive modeling

## Quality and Safety

**Antibiotic Stewardship:**
- Avoid treating asymptomatic bacteriuria
- Use narrowest spectrum effective agent
- De-escalate based on cultures
- Limit fluoroquinolones to serious infections

**Prevention Bundles:**
- Catheter insertion bundles
- Maintenance care protocols
- Removal prompts
- Surveillance strategies

## Future Directions

**CRISPR-Based Therapies:**
- Target resistance genes
- Sensitize bacteria to antibiotics
- Early research stage

**Nanoparticle Delivery:**
- Targeted antibiotic delivery
- Enhanced penetration
- Reduced systemic toxicity

**Gene Therapy:**
- Enhance host defense mechanisms
- Restore epithelial integrity
- Conceptual stage

**Personalized Prevention:**
- Microbiome profiling
- Host genetic risk assessment
- Tailored prophylaxis strategies`,
      keyTerms: [
        { term: 'FimH', definition: 'Tip protein of type 1 pili; mediates mannose-specific adhesion to urothelium' },
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight; rapid bacterial identification technology' },
        { term: 'cefiderocol', definition: 'Siderophore cephalosporin antibiotic that uses iron transporters to enter bacteria' },
        { term: 'urobiome', definition: 'The community of microorganisms inhabiting the urinary tract' },
        { term: 'quorum sensing', definition: 'Bacterial cell-cell communication system coordinating group behaviors' },
        { term: 'PNAG', definition: 'Poly-N-acetylglucosamine; biofilm polysaccharide component' },
      ],
      clinicalNotes: 'Cefiderocol is an important addition for treating carbapenem-resistant UTIs—it uses a siderophore mechanism to enter bacteria. FimH antagonists represent a promising non-antibiotic approach to preventing UTI by blocking bacterial adhesion.',
    },
  },

  media: [],
  citations: [
    { id: 'idsa-uti-2022', type: 'article', title: 'IDSA Guidelines for Uncomplicated Cystitis and Pyelonephritis', source: 'Clinical Infectious Diseases' },
    { id: 'eau-uti-2023', type: 'article', title: 'EAU Guidelines on Urological Infections', source: 'European Association of Urology' },
    { id: 'hsiao-uti-2022', type: 'article', title: 'Management of Recurrent Urinary Tract Infections', source: 'Reviews in Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-prostatitis', targetType: 'condition', relationship: 'related', label: 'Prostatitis' },
    { targetId: 'condition-pyelonephritis', targetType: 'condition', relationship: 'related', label: 'Pyelonephritis' },
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
  ],
  tags: { systems: ['urinary', 'renal'], topics: ['urology', 'infectious disease'], keywords: ['UTI', 'cystitis', 'pyelonephritis', 'dysuria', 'urinary frequency', 'bacteriuria'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default uti;
