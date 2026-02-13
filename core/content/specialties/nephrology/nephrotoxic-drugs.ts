/**
 * Nephrotoxic Drugs - Comprehensive Educational Content
 *
 * Covers drug-induced kidney injury mechanisms, prevention strategies,
 * and management of nephrotoxicity from common medications.
 */

import { EducationalContent } from '../../types';

export const nephrotoxicDrugs: EducationalContent = {
  id: 'concept-nephrotoxic-drugs',
  type: 'concept',
  name: 'Nephrotoxic Drugs',
  alternateNames: ['Drug-Induced Nephrotoxicity', 'Medication-Related Kidney Injury', 'Nephrotoxins'],

  levels: {
    1: {
      level: 1,
      summary: 'Some medications can hurt your kidneys if not used carefully, especially when you are already at risk for kidney problems.',
      explanation: `Your kidneys filter medications out of your blood, just like they filter waste. Some medications can be hard on the kidneys, especially if:
- You already have kidney problems
- You are dehydrated
- You take too much of the medication

**Medications That Can Be Tough on Kidneys:**

**Pain Medications (NSAIDs)**
- Ibuprofen (Advil, Motrin)
- Naproxen (Aleve)
- These reduce blood flow to the kidneys
- Occasional use is usually fine; regular use can cause problems

**Some Antibiotics**
- Aminoglycosides (gentamicin, tobramycin)
- These can damage the kidney tubes
- Doctors monitor levels carefully

**Contrast Dye**
- Used for CT scans and heart catheterization
- Can temporarily hurt kidneys
- Risk is higher if you already have kidney problems

**Blood Pressure Medications**
- ACE inhibitors and ARBs
- Usually protect kidneys long-term
- Can temporarily lower kidney function in certain situations

**Some Cancer Medications**
- Cisplatin, methotrexate
- Doctors use special precautions

**How to Protect Your Kidneys:**
1. Tell your doctor about all medications you take
2. Stay well hydrated
3. Avoid taking too many pain pills
4. Ask if blood tests are needed to check your kidneys
5. Some medications may need dose adjustments if kidneys are weak

**Warning Signs Something is Wrong:**
- Making less urine than usual
- Swelling in legs or feet
- Feeling very tired
- Nausea or loss of appetite

If you have kidney disease, always ask your doctor or pharmacist if a medication is safe for your kidneys.`,
      keyTerms: [
        { term: 'nephrotoxic', definition: 'Something that can harm or damage the kidneys', pronunciation: 'nef-roh-TOK-sik' },
        { term: 'NSAIDs', definition: 'Non-steroidal anti-inflammatory drugs; common pain relievers like ibuprofen' },
        { term: 'contrast dye', definition: 'A liquid injected for certain medical scans that helps doctors see inside your body' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
      ],
      analogies: [
        'Your kidneys are like filters in a fish tank. Some medications are like putting harsh chemicals in the tank that can clog or damage the filter.',
        'Think of blood flow to your kidneys like a garden hose. NSAIDs can pinch the hose, reducing water (blood) that reaches your kidney garden.',
      ],
      examples: [
        'Someone taking ibuprofen every day for back pain might notice their kidney tests getting worse.',
        'A patient getting a CT scan with contrast dye drinks extra fluids before and after to protect their kidneys.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug-induced nephrotoxicity occurs through various mechanisms including hemodynamic changes, tubular toxicity, interstitial nephritis, and crystal deposition, requiring awareness of high-risk medications and preventive strategies.',
      explanation: `## Mechanisms of Drug-Induced Kidney Injury

### Hemodynamic (Blood Flow) Changes
**Reduced renal perfusion:**
- NSAIDs: Block prostaglandins → afferent arteriolar constriction
- ACE inhibitors/ARBs: Efferent arteriolar dilation → reduced GFR
- Cyclosporine/Tacrolimus: Afferent arteriolar constriction
- Usually reversible with drug discontinuation

### Direct Tubular Toxicity
**Drugs that damage tubular cells:**
- Aminoglycosides: Accumulate in proximal tubule cells
- Cisplatin: Proximal tubular necrosis
- Tenofovir: Proximal tubulopathy (Fanconi syndrome)
- Amphotericin B: Distal tubular damage

### Acute Interstitial Nephritis (AIN)
**Allergic/immune reaction:**
- Antibiotics: Penicillins, cephalosporins, fluoroquinolones, rifampin
- NSAIDs
- Proton pump inhibitors
- Classic triad (only ~30%): Fever, rash, eosinophilia
- Often presents as unexplained AKI

### Crystal Nephropathy
**Drug crystals precipitate in tubules:**
- Acyclovir/Valacyclovir: IV high-dose
- Sulfadiazine
- Methotrexate
- Indinavir
- Prevention: Hydration, urine alkalinization (some drugs)

### Glomerular Injury
- NSAIDs: Minimal change disease or membranous nephropathy
- Gold, penicillamine: Membranous nephropathy
- Bisphosphonates: Collapsing FSGS

## Common Nephrotoxic Medications

### NSAIDs
| Risk Factor | Explanation |
|-------------|-------------|
| Volume depletion | Prostaglandins maintain GFR when BP low |
| CKD | Already compromised renal reserve |
| Heart failure | Kidneys dependent on prostaglandins |
| Concurrent ACEi/ARB | "Triple whammy" with diuretics |
| Elderly | Reduced renal reserve |

**Prevention:**
- Use acetaminophen when possible
- Shortest course, lowest dose if needed
- Avoid in CKD, heart failure, dehydration

### Aminoglycosides
**Risk Factors:**
- Duration >5-7 days
- High trough levels
- Concurrent nephrotoxins
- Volume depletion, sepsis

**Prevention:**
- Once-daily dosing (preserves efficacy, reduces toxicity)
- Monitor trough levels
- Limit duration
- Avoid concurrent nephrotoxins

### Contrast-Induced AKI (CI-AKI)
**Risk Factors:**
- eGFR <60 (especially <30)
- Diabetes
- Heart failure
- High contrast volume
- Intra-arterial administration

**Prevention:**
- IV saline hydration (1-1.5 mL/kg/hr × 6-12 hours pre/post)
- Minimize contrast volume (contrast/eGFR ratio <3)
- Avoid concurrent nephrotoxins
- Hold metformin if high risk (restart after 48 hours if creatinine stable)

**No proven benefit:** N-acetylcysteine, sodium bicarbonate

### ACE Inhibitors/ARBs
**When they cause harm:**
- Bilateral renal artery stenosis
- Severe volume depletion
- Concurrent NSAIDs
- Very low cardiac output states

**In most cases:**
- Protect kidneys long-term (diabetic nephropathy, proteinuria)
- Accept up to 30% creatinine rise; if more, investigate

### Proton Pump Inhibitors (PPIs)
**Nephrotoxicity:**
- Acute interstitial nephritis (can be delayed onset)
- Chronic kidney disease (epidemiologic association)
- Often insidious; may lack classic AIN features

**Prevention:**
- Use only when indicated
- Periodic reassessment of need
- Consider H2 blockers for lower-risk situations

## Managing Nephrotoxicity

### Recognition
- Monitor creatinine in high-risk patients
- Urinalysis (WBCs, WBC casts → AIN; crystals → crystal nephropathy)
- Clinical context (new medication, contrast exposure)

### Treatment
1. Stop the offending agent when possible
2. Supportive care (IV fluids if appropriate)
3. Consider kidney biopsy if diagnosis uncertain
4. Steroids for AIN (controversial; usually reserved for severe or persistent cases)
5. Dialysis if severe AKI

### Drug Dosing in Kidney Disease
- Many drugs require dose adjustment
- Reduce dose or extend interval
- Monitor levels when available (vancomycin, aminoglycosides)
- Consult pharmacy/references for specific adjustments`,
      keyTerms: [
        { term: 'acute interstitial nephritis', definition: 'Allergic kidney inflammation caused by medications; presents as AKI', pronunciation: 'in-ter-STISH-ul nef-RY-tis' },
        { term: 'crystal nephropathy', definition: 'Kidney injury from drug crystals precipitating in tubules' },
        { term: 'CI-AKI', definition: 'Contrast-Induced Acute Kidney Injury; kidney damage from contrast dye' },
        { term: 'triple whammy', definition: 'Combination of NSAID + ACEi/ARB + diuretic; high risk for AKI' },
        { term: 'Fanconi syndrome', definition: 'Proximal tubule dysfunction with loss of glucose, amino acids, phosphate, bicarbonate' },
        { term: 'tubular toxicity', definition: 'Direct damage to kidney tubular cells by medications' },
      ],
      analogies: [
        'The "triple whammy" is like attacking the kidneys from three directions at once - blocking blood flow, reducing pressure, and removing fluid.',
        'Crystal nephropathy is like pipes getting clogged with ice - the medication crystals block the tubules.',
      ],
    },
    3: {
      level: 3,
      summary: 'Drug-induced nephrotoxicity involves complex pathophysiology including oxidative stress, mitochondrial injury, and immune-mediated mechanisms, requiring systematic risk assessment, monitoring protocols, and evidence-based prevention strategies.',
      explanation: `## Molecular Mechanisms of Nephrotoxicity

### Aminoglycoside Nephrotoxicity
**Cellular Uptake:**
- Bind to megalin in proximal tubule brush border
- Endocytosed and accumulate in lysosomes
- Cause lysosomal rupture and cell death

**Downstream Effects:**
- Reactive oxygen species generation
- Mitochondrial dysfunction
- Apoptosis and necrosis
- Regeneration begins ~7-10 days after stopping drug

**Clinical Features:**
- Non-oliguric AKI (tubules lose concentrating ability)
- Hypokalemia, hypomagnesemia
- Delayed onset (7-10 days into therapy)

### Cisplatin Nephrotoxicity
**Mechanism:**
- Enters proximal tubular cells via OCT2 transporter
- Forms DNA adducts, causes cell cycle arrest
- Mitochondrial injury, oxidative stress
- Dose-dependent toxicity

**Clinical Features:**
- AKI, hypomagnesemia (renal wasting)
- Salt wasting, Fanconi syndrome
- Cumulative toxicity (limit total dose)

**Prevention:**
- Aggressive IV saline hydration
- Avoid concurrent nephrotoxins
- Consider amifostine (free radical scavenger)

### Acute Interstitial Nephritis (AIN)

**Immunologic Mechanism:**
- Drug acts as hapten
- T-cell mediated hypersensitivity
- Infiltration of lymphocytes, eosinophils, monocytes

**Histopathology:**
- Interstitial edema and inflammatory infiltrate
- Tubulitis (lymphocytes invading tubules)
- Eosinophilic infiltrate (not always present)
- Granulomas (with certain drugs: NSAIDs, antibiotics)

**Common Culprits:**
| Drug Class | Examples |
|------------|----------|
| Antibiotics | Beta-lactams, fluoroquinolones, rifampin, sulfonamides |
| NSAIDs | All; also cause MCD or membranous |
| PPIs | Omeprazole, lansoprazole; often delayed |
| Diuretics | Thiazides, furosemide |
| Allopurinol | Especially in HLA-B*58:01 carriers |

**Diagnosis:**
- Urinalysis: Sterile pyuria, WBC casts, eosinophiluria (low sensitivity)
- Gallium-67 or PET scan: May show renal uptake (not specific)
- Kidney biopsy: Gold standard

**Treatment:**
- Stop offending drug (may take weeks to identify)
- Supportive care
- Corticosteroids: Controversial; consider if no improvement after drug withdrawal
  - Prednisone 1 mg/kg × 1-2 weeks, then taper
  - Earlier steroids may improve outcomes

### Contrast-Induced AKI Pathophysiology

**Mechanisms:**
1. Renal vasoconstriction (medullary hypoxia)
2. Direct tubular cytotoxicity
3. Reactive oxygen species
4. Decreased NO bioavailability

**Timeline:**
- Creatinine rises 24-48 hours post-exposure
- Peaks at 3-5 days
- Usually resolves by 7-14 days
- Persistent injury rare but associated with poor outcomes

**Risk Stratification:**
- Mehran score predicts CI-AKI risk in cardiac catheterization
- Variables: Hypotension, IABP, CHF, age, anemia, diabetes, contrast volume, eGFR

## Advanced Prevention Strategies

### Contrast Media Selection
- Iso-osmolar (iodixanol) or low-osmolar contrast
- High-osmolar contrast: Higher nephrotoxicity (avoid)
- No clear superiority of iso- vs. low-osmolar in most studies

### Alternative Imaging
- Ultrasound (no contrast)
- MRI with gadolinium (caution in very low GFR: NSF risk)
- CO2 angiography (select cases)

### Pharmacologic Prevention (Limited Evidence)
- N-acetylcysteine: Multiple trials, no consistent benefit
- Sodium bicarbonate: Early promise not confirmed
- Statins: Some evidence for periprocedural protection
- Remote ischemic preconditioning: Investigational

### Dialysis for Contrast Removal
- Does not prevent CI-AKI
- Not recommended prophylactically
- CRRT may remove contrast but outcomes not improved

## Calcineurin Inhibitor Nephrotoxicity

### Acute Toxicity
- Afferent arteriolar vasoconstriction (endothelin, TXA2)
- Decreased GFR, reversible
- Dose-dependent, often with supratherapeutic levels

### Chronic Toxicity
- Interstitial fibrosis, striped appearance
- Arteriolar hyalinosis ("oyster shell" lesions)
- Glomerulosclerosis
- Progressive, often irreversible

### Management
- Therapeutic drug monitoring (trough levels)
- Dose reduction if levels high
- Consider CNI-sparing protocols (belatacept, mTOR inhibitors)

## Vancomycin Nephrotoxicity

**Mechanism:**
- Oxidative stress in proximal tubules
- Cast formation with vancomycin + Tamm-Horsfall protein

**Risk Factors:**
- Trough >15-20 mcg/mL (especially with AUC >600)
- Concurrent nephrotoxins (piperacillin-tazobactam, aminoglycosides)
- Duration >7 days
- ICU setting, sepsis

**Prevention:**
- AUC-guided dosing (target AUC/MIC 400-600)
- Avoid excessive troughs
- Limit concomitant nephrotoxins
- Adequate hydration`,
      keyTerms: [
        { term: 'megalin', definition: 'Receptor on proximal tubule cells that mediates aminoglycoside uptake' },
        { term: 'OCT2', definition: 'Organic cation transporter-2; mediates cisplatin entry into tubular cells' },
        { term: 'hapten', definition: 'Small molecule that binds to proteins and triggers immune response' },
        { term: 'striped fibrosis', definition: 'Histologic pattern of chronic CNI toxicity with radial bands of fibrosis' },
        { term: 'Mehran score', definition: 'Risk score predicting CI-AKI after cardiac catheterization' },
        { term: 'AUC-guided dosing', definition: 'Vancomycin dosing based on area under the concentration curve rather than trough alone' },
      ],
      clinicalNotes: 'Always consider drug-induced causes in unexplained AKI. For AIN, a high index of suspicion is needed - classic triad present in only 30%. PPIs are an underrecognized cause of AIN with delayed presentation. Vancomycin + piperacillin-tazobactam combination has higher AKI risk than either alone. Consider CNI nephrotoxicity in transplant patients with slowly rising creatinine.',
    },
    4: {
      level: 4,
      summary: 'Advanced nephrotoxicity management requires integrating pharmacogenomics, biomarker-guided monitoring, multidisciplinary medication review, and institution-level prevention protocols to minimize drug-induced kidney injury across populations.',
      explanation: `## Pharmacogenomics and Nephrotoxicity

### Genetic Susceptibility

**HLA-B*58:01 and Allopurinol:**
- Strong association with severe cutaneous reactions (DRESS, SJS/TEN)
- These reactions often include AIN
- Screening recommended in high-risk populations (Han Chinese, Thai, Korean)
- Alternative: Febuxostat

**TPMT and Thiopurines:**
- Low TPMT activity: Increased toxicity from azathioprine/6-MP
- Not directly nephrotoxic but affects drug selection in transplant

**CYP3A5 and Calcineurin Inhibitors:**
- CYP3A5 expressors: Faster tacrolimus metabolism
- May need higher doses; more variability
- Genotype-guided dosing emerging

**SLCO1B1 and Nephrotoxicity:**
- Transporter affecting drug disposition
- May influence methotrexate toxicity

### Future of Precision Nephrotoxicity Prevention
- Panel-based pharmacogenomic testing
- Clinical decision support integration
- Proactive dose adjustment for high-risk genotypes

## Biomarker-Guided Nephrotoxicity Monitoring

### Emerging Biomarkers

**Tubular Injury:**
- KIM-1: Specific for proximal tubular injury
- NGAL: Early marker; rises before creatinine
- L-FABP: Proximal tubule ischemia/toxicity
- NAG: Lysosomal enzyme; elevated with aminoglycosides

**Inflammation:**
- Urinary IL-18: AIN, ATN
- MCP-1: Inflammation and fibrosis

### Clinical Applications

**Aminoglycoside Monitoring:**
- NGAL or KIM-1 may detect injury before creatinine rises
- Could guide early dose adjustment or drug discontinuation
- Not yet standard of care but promising

**Contrast-Induced AKI Prediction:**
- NephroCheck ([TIMP-2] × [IGFBP7]): Predicts AKI risk
- May identify high-risk patients for enhanced prophylaxis

**Cisplatin Nephrotoxicity:**
- Serial KIM-1 monitoring in trials
- Earlier detection allows dose modification

## Medication Reconciliation and Stewardship

### Nephrotoxin Stewardship Programs

**Components:**
- Electronic alerts for high-risk combinations
- Pharmacist review of nephrotoxic drug exposure
- Daily screening for "AKI in the making"
- Automatic vancomycin/aminoglycoside dosing services

**Triple Whammy Alerts:**
- Flag NSAID + ACEi/ARB + diuretic combinations
- Especially in elderly, CKD, heart failure
- Prompt clinical review

**Evidence:**
- Nephrotoxic medication exposure (NME) reduction programs
- Showed 24% reduction in AKI in hospitalized patients

### High-Risk Populations

**Oncology:**
- Multiple nephrotoxic agents (cisplatin, methotrexate, checkpoint inhibitors)
- Aggressive hydration protocols
- Surveillance for immune-related AIN (checkpoint inhibitors)

**Transplantation:**
- CNI nephrotoxicity monitoring
- Drug-drug interactions (azoles, macrolides)
- Belatacept as CNI-sparing option

**Critical Care:**
- Multiple concurrent nephrotoxins
- Frequent vancomycin + piperacillin-tazobactam use
- Contrast exposure in unstable patients
- Daily pharmacy review essential

## Specific Drug Class Considerations

### Immune Checkpoint Inhibitors (ICIs)

**Nephrotoxicity:**
- Acute interstitial nephritis (most common)
- Minimal change disease, FSGS
- Lupus-like nephritis
- Incidence: 2-5% with severe AKI in ~1%

**Features:**
- Often delayed (weeks to months after starting)
- May lack systemic signs (rash, fever)
- Diagnosis often requires biopsy

**Treatment:**
- Hold ICI
- Corticosteroids (if confirmed AIN)
- Some patients can resume ICI after recovery

### SGLT2 Inhibitors

**Paradox:**
- Nephroprotective long-term (slow CKD progression)
- Initial eGFR dip (hemodynamic, like ACEi)
- Euglycemic DKA risk

**Practical Points:**
- Expect 10-15% creatinine rise initially; continue therapy
- Concern if rise >30% or symptomatic
- Do not confuse physiologic dip with toxicity

### Targeted Cancer Therapies

**VEGF Inhibitors (bevacizumab, sunitinib):**
- Hypertension, proteinuria, TMA
- Glomerular injury (loss of VEGF support)

**BRAF Inhibitors:**
- Interstitial nephritis
- Electrolyte disturbances

**mTOR Inhibitors (temsirolimus, everolimus):**
- Proteinuria, AIN
- Usually mild

## Institution-Level Strategies

### Electronic Health Record Integration
- Automatic GFR calculation
- Drug-renal function alerts
- Contrast volume tracking
- Aminoglycoside/vancomycin dosing calculators

### Order Sets and Protocols
- CI-AKI prevention bundles
- Chemotherapy hydration protocols
- Standardized drug level monitoring

### Quality Metrics
- AKI rates post-contrast
- Nephrotoxic drug exposure days
- Appropriate dose adjustments in CKD

### Education
- Nursing awareness of high-risk drugs
- Prescriber education on alternatives
- Pharmacist integration in rounds`,
      keyTerms: [
        { term: 'HLA-B*58:01', definition: 'Genetic marker associated with severe allopurinol hypersensitivity; testing recommended in high-risk populations' },
        { term: 'nephrotoxin stewardship', definition: 'Systematic program to reduce inappropriate nephrotoxic drug exposure' },
        { term: 'NephroCheck', definition: 'Urinary biomarker test ([TIMP-2]×[IGFBP7]) for AKI risk prediction' },
        { term: 'checkpoint inhibitor nephrotoxicity', definition: 'Immune-related AKI (usually AIN) from cancer immunotherapy' },
        { term: 'CYP3A5', definition: 'Cytochrome P450 enzyme affecting tacrolimus metabolism; polymorphisms affect dosing' },
        { term: 'belatacept', definition: 'Co-stimulation blocker used as CNI-sparing immunosuppression in transplant' },
      ],
      clinicalNotes: 'Pharmacogenomic testing for HLA-B*58:01 before allopurinol in high-risk populations can prevent severe reactions with renal involvement. NGAL and KIM-1 may enable earlier detection of tubular toxicity - watch for clinical adoption. Nephrotoxin stewardship programs reduce AKI incidence. Checkpoint inhibitor nephritis may lack typical AIN features; biopsy often needed. Dont confuse SGLT2 inhibitor hemodynamic dip with true nephrotoxicity.',
    },
    5: {
      level: 5,
      summary: 'Expert management of drug-induced nephrotoxicity integrates molecular mechanisms, pharmacogenomic precision, novel biomarkers, systems-level prevention, and emerging therapeutic strategies to protect kidneys across diverse patient populations and clinical scenarios.',
      explanation: `## Molecular Targets and Novel Therapeutics

### Oxidative Stress Mitigation

**Aminoglycoside Nephrotoxicity:**
- N-acetylcysteine: Preclinical efficacy; clinical trials mixed
- Mitochondria-targeted antioxidants (MitoQ, SS-31): Research stage
- Iron chelators (deferoxamine): Reduce Fenton reaction

**Cisplatin Nephrotoxicity:**
- Amifostine: FDA-approved; free radical scavenger
- Organic cation transporter (OCT2) inhibitors: Block cisplatin uptake
- Cimetidine: Weak OCT2 inhibition; some evidence for protection

### Inflammatory Pathway Modulation

**AIN:**
- Corticosteroids remain mainstay
- Anti-TNF agents: Case reports
- JAK inhibitors: Theoretical; no clinical data

**Checkpoint Inhibitor Nephrotoxicity:**
- Early steroids may improve outcomes
- Anti-thymocyte globulin for severe/refractory cases
- Mycophenolate if steroid-resistant

### Targeted Delivery

**Renal-Targeted Drug Delivery:**
- Nanoparticle formulations to enhance renal targeting
- Reduce systemic toxicity of nephrotoxic agents
- Liposomal amphotericin B: Example of reduced nephrotoxicity

### Regenerative Approaches

**Mesenchymal Stem Cells:**
- Preclinical data for cisplatin AKI
- Paracrine effects (anti-inflammatory, pro-regenerative)
- Clinical trials ongoing

**Extracellular Vesicles:**
- MSC-derived EVs may mediate regeneration
- Research stage

## Advanced Biomarker Applications

### Integrated Biomarker Panels

**Multi-Marker Approach:**
- Combining injury markers (KIM-1, NGAL) with stress markers (IGFBP7, TIMP-2)
- Improved sensitivity and specificity for early AKI
- May distinguish ATN from AIN

**Metabolomics:**
- Urinary metabolite profiles in drug toxicity
- Signature patterns for specific nephrotoxins
- Discovery stage

### Point-of-Care Testing

**Rapid Biomarker Assays:**
- Bedside NGAL testing available
- NephroCheck for ICU patients
- Enable real-time decision making

**Integration with Clinical Decision Support:**
- Biomarker result triggers alert
- Automated recommendation for nephrotoxin review
- Goal: Proactive rather than reactive

## Systems-Level Optimization

### Artificial Intelligence Applications

**Predictive Models:**
- Machine learning to predict drug-induced AKI
- Integrates demographics, labs, medications, comorbidities
- Can identify high-risk patients before AKI develops

**Natural Language Processing:**
- Extract medication exposures from clinical notes
- Identify undocumented nephrotoxin use

**Real-Time Alerting:**
- AI-driven surveillance for emerging AKI
- Earlier intervention

### Clinical Decision Support 2.0

**Dynamic Dosing Recommendations:**
- Integrate real-time GFR with drug database
- Automatic dose suggestions with one-click ordering
- Pharmacogenomic data overlay when available

**Interruptive vs. Non-Interruptive Alerts:**
- Balance alert fatigue with safety
- Reserve interruptive alerts for highest-risk combinations
- Provide context-sensitive information

### Medication-Use Evaluation

**Quality Improvement Cycles:**
- Regular audits of nephrotoxic drug prescribing
- Benchmark against best practices
- Share data with prescribers for behavior change

## Special Considerations by Patient Population

### Solid Organ Transplant

**CNI-Free Protocols:**
- Belatacept-based regimens preserve GFR
- Consider in patients with CNI intolerance
- Trade-off: Higher acute rejection risk in certain populations

**Monitoring:**
- Donor-derived cell-free DNA for early rejection detection
- May reduce need for protocol biopsies and biopsy-related AKI

**Drug Interactions:**
- Antifungals (azoles) markedly increase CNI levels
- Monitor closely and proactively dose adjust

### Oncology

**Cisplatin Alternatives:**
- Carboplatin: Less nephrotoxic (though myelosuppressive)
- Oxaliplatin: Different toxicity profile (neuropathy)

**Novel Agents:**
- Antibody-drug conjugates: Variable nephrotoxicity
- CAR-T: CRS-associated AKI, tumor lysis syndrome
- Bispecific T-cell engagers: Monitor for AKI

**Supportive Care:**
- Tumor lysis syndrome prophylaxis
- Aggressive hydration protocols
- Rasburicase for hyperuricemia

### Critical Care

**Acute Kidney Injury Prevention Bundle:**
1. Avoid nephrotoxins when possible
2. If needed, monitor levels and kidney function
3. Maintain euvolemia
4. Avoid hyperglycemia
5. Hemodynamic optimization

**Drug Dosing in CRRT:**
- Many nephrotoxins cleared by CRRT
- Dosing adjustments complex
- Consult clinical pharmacist

### Pediatrics

**Unique Considerations:**
- Weight-based dosing critical
- Different drug metabolism
- Long-term kidney health implications

**Aminoglycoside Monitoring:**
- Population-specific PK models
- Extended-interval dosing when appropriate

**Chemotherapy:**
- Long-term survivors at risk for late nephrotoxicity
- Surveillance protocols

## Ethical and Global Perspectives

### Resource-Limited Settings

**Challenges:**
- Limited access to drug level monitoring
- Aminoglycosides often first-line due to cost
- Contrast procedures without adequate prophylaxis

**Strategies:**
- Clinical monitoring algorithms when labs unavailable
- Oral hydration protocols
- Training on nephrotoxin awareness

### Deprescribing

**In CKD Populations:**
- PPIs often continued without reassessment
- NSAIDs prescribed chronically despite contraindication
- Proactive review and discontinuation when possible

**Shared Decision-Making:**
- Discuss risks and benefits of nephrotoxic drugs
- Patient preferences in treatment choices

### Drug Development Considerations

**Nephrotoxicity in Drug Development:**
- Preclinical renal toxicity studies
- Biomarker qualification for clinical trials
- Post-marketing surveillance for rare nephrotoxicity`,
      keyTerms: [
        { term: 'OCT2 inhibitor', definition: 'Agent blocking organic cation transporter-2; may reduce cisplatin tubular uptake' },
        { term: 'MitoQ', definition: 'Mitochondria-targeted antioxidant; investigational for preventing drug-induced oxidative injury' },
        { term: 'metabolomics', definition: 'Study of small molecule metabolites; may reveal signatures of specific nephrotoxins' },
        { term: 'CAR-T nephrotoxicity', definition: 'Kidney injury from chimeric antigen receptor T-cell therapy; includes CRS and TLS' },
        { term: 'deprescribing', definition: 'Systematic process of tapering or stopping medications when harms outweigh benefits' },
        { term: 'liposomal amphotericin B', definition: 'Lipid formulation of amphotericin with reduced nephrotoxicity compared to conventional formulation' },
      ],
      clinicalNotes: `Key clinical pearls:
1. OCT2 inhibitors may emerge as adjuncts for cisplatin nephroprotection
2. AI-driven predictive models for drug-induced AKI are entering clinical practice
3. Multi-marker panels (injury + stress biomarkers) improve early AKI detection
4. Checkpoint inhibitor nephritis may require biopsy for diagnosis; treat with steroids
5. Deprescribe PPIs and NSAIDs proactively in CKD patients
6. Consider CNI-free protocols (belatacept) for transplant patients with CNI intolerance
7. In resource-limited settings, clinical monitoring and oral hydration can still prevent AKI`,
    },
  },

  media: [
    {
      id: 'nephrotoxicity-mechanisms',
      type: 'diagram',
      filename: 'nephrotoxicity-mechanisms.svg',
      title: 'Mechanisms of Drug-Induced Nephrotoxicity',
      description: 'Diagram showing hemodynamic, tubular, interstitial, and glomerular injury pathways',
    },
    {
      id: 'ain-histology',
      type: 'histology',
      filename: 'ain-histology.jpg',
      title: 'Acute Interstitial Nephritis Histopathology',
      description: 'Kidney biopsy showing interstitial inflammation with eosinophils and tubulitis',
    },
  ],

  citations: [
    {
      id: 'kdigo-aki-drugs',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      authors: ['KDIGO AKI Work Group'],
      source: 'Kidney International Supplements',
      chapter: 'Drug-induced AKI',
    },
    {
      id: 'perazella-nephrotoxins',
      type: 'article',
      title: 'Drug-Induced Acute Kidney Injury',
      authors: ['Perazella MA'],
      source: 'Current Opinion in Critical Care',
    },
    {
      id: 'brenner-rector-nephrotoxins',
      type: 'textbook',
      title: 'Drug-Induced Kidney Disease',
      source: "Brenner and Rector's The Kidney",
      chapter: '34',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD (dose adjustment)' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis (drug removal)' },
    { targetId: 'condition-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis (drug-induced)' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'pharmacology', 'drug safety', 'toxicology', 'critical care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pharmacology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephrotoxicDrugs;
