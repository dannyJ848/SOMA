/**
 * Medication Adjustments - Drug Dosing in Chronic Kidney Disease
 */

import { EducationalContent } from '../../types';

export const MEDICATION_ADJUSTMENTS: EducationalContent = {
  id: 'chronic-kidney-medication-adjustments',
  type: 'concept',
  name: 'Medication Adjustments in Kidney Disease',
  nameEs: 'Ajustes de Medicamentos en la Enfermedad Renal',
  alternateNames: ['Drug Dosing in CKD', 'Renal Dosing', 'Kidney-Safe Medications', 'Medication Management in CKD'],

  levels: {
    1: {
      level: 1,
      summary: 'Many medications need dose changes or should be avoided when you have kidney disease. Your kidneys help remove drugs from your body, so when they do not work well, medicines can build up and cause harm.',
      explanation: `**Why Kidneys Matter for Medications**

Your kidneys filter waste from your blood. They also help remove many medications. When kidneys do not work well:
- Medicines may build up in your body
- You may have more side effects
- Some drugs can damage kidneys further

**Medicines That Can Harm Kidneys:**

Always tell your doctor you have kidney disease before taking:

---
NSAIDs (pain relievers):
- Ibuprofen (Advil, Motrin)
- Naproxen (Aleve)
- Can reduce blood flow to kidneys

Contrast Dye:
- Used for some imaging tests
- Can cause kidney damage
- Tell doctors about your kidney disease

Certain Antibiotics:
- Some need dose adjustment
- Others should be avoided
---

**Medicines That Often Need Dose Changes:**

Many common medications need lower doses in kidney disease:
- Diabetes medications
- Blood pressure medications
- Heart medications
- Some antibiotics
- Pain medications

**Important Safety Tips:**

1. **Tell all doctors** about your kidney disease
2. **Bring a medication list** to every appointment
3. **Ask before taking new medicines** - including over-the-counter
4. **Do not stop prescribed medications** without talking to your doctor
5. **Check with your pharmacist** - they can spot problems
6. **Read warning labels** - look for kidney warnings

**Over-the-Counter Medicine Safety:**

---
Generally Safe (with doctor approval):
- Acetaminophen (Tylenol) for pain
- Most antacids
- Some allergy medications

Use With Caution or Avoid:
- Ibuprofen, naproxen (NSAIDs)
- Certain laxatives
- Some herbal supplements
- Salt substitutes (often high potassium)
---

**Questions to Ask Your Doctor:**

- Is this medication safe for my kidneys?
- Do I need a lower dose?
- Should my kidney function be checked while I take this?
- Are there kidney-safe alternatives?
- What side effects should I watch for?

**Herbal Supplements and Vitamins:**

Not all "natural" products are safe:
- Some can harm kidneys
- Some interact with medications
- Quality varies widely
- Always check with your doctor first

**When to Call Your Doctor:**

Call if you notice:
- New or worsening side effects
- Changes in urine output
- Swelling
- Unusual fatigue
- Before starting any new medication

Remember: You are part of your healthcare team. Speak up about your kidney disease to stay safe.`,
      keyTerms: [
        { term: 'renal dosing', definition: 'Adjusting medication doses based on kidney function' },
        { term: 'NSAIDs', definition: 'Non-steroidal anti-inflammatory drugs; pain relievers that can harm kidneys' },
        { term: 'contrast dye', definition: 'Special fluid used for imaging tests that can damage kidneys' },
        { term: 'nephrotoxic', definition: 'Harmful to kidneys' },
        { term: 'medication clearance', definition: 'How well the body removes a medication' },
      ],
      analogies: [
        'Think of your kidneys as the trash removal system for medications. When the trash service slows down, you need to create less trash (lower doses) or the house fills up with garbage (medication buildup).',
        'Medications in kidney disease are like cars on a highway with construction. With fewer lanes working (reduced kidney function), traffic backs up unless you reduce the number of cars (lower dose).',
      ],
      examples: [
        'Maria was prescribed a standard dose of an antibiotic for a urinary tract infection. Because she has Stage 4 CKD, her pharmacist caught that she needed a lower dose to prevent the medication from building up to dangerous levels.',
        'John did not tell his dentist about his kidney disease and was given ibuprofen after a procedure. His kidney function worsened, requiring hospitalization. Now he always informs providers about his CKD.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug dosing in CKD requires understanding renal elimination, nephrotoxicity risk, and individualized dose adjustment based on kidney function and pharmacokinetic principles.',
      explanation: `**Pharmacokinetics in Kidney Disease**

*How Kidneys Handle Medications:*
---
Filtration:
- Glomerular filtration of water-soluble drugs
- Reduced GFR = reduced clearance

Secretion:
- Tubular transport systems
- Competitive inhibition possible

Reabsorption:
- Some drugs returned to circulation
- pH-dependent for weak acids/bases
---

*Impact of Reduced GFR:*
- Decreased elimination of renally-cleared drugs
- Prolonged half-life
- Increased risk of accumulation
- Enhanced toxicity potential

**Drugs Requiring Dose Adjustment:**

*Major Categories:*
---
Antibiotics:
- Penicillins, cephalosporins
- Aminoglycosides
- Vancomycin
- Fluoroquinolones

Antivirals:
- Acyclovir, ganciclovir
- Antiretrovirals

Cardiovascular:
- Digoxin
- Sotalol
- Enoxaparin

Diabetes:
- Metformin (contraindicated if eGFR less than 30)
- Sulfonylureas
- Insulin (reduced requirements)

Other:
- Gabapentin, pregabalin
- Low molecular weight heparins
- Colchicine
- Allopurinol
---

**Nephrotoxic Medications:**

*Drugs That Can Damage Kidneys:*

| Drug Class          | Examples               | Mechanism                  |
|---------------------|------------------------|----------------------------|
| NSAIDs              | Ibuprofen, naproxen    | Reduced renal blood flow   |
| Aminoglycosides     | Gentamicin, tobramycin | Direct tubular toxicity    |
| Amphotericin B      | Conventional, lipid    | Tubular damage             |
| Cisplatin           | Chemotherapy           | Tubular toxicity           |
| Contrast media      | Iodinated contrast     | Vasoconstriction, toxicity |
| Calcineurin inhibitors| Cyclosporine, tacrolimus| Afferent vasoconstriction |

*Prevention Strategies:*
- Avoid when possible
- Use lowest effective dose
- Ensure adequate hydration
- Monitor kidney function
- Consider alternatives

**Contrast-Induced Nephropathy Prevention:**

*Risk Factors:*
- Baseline CKD (especially eGFR less than 60)
- Diabetes
- Dehydration
- High contrast volume
- Heart failure

*Prevention:*
- IV isotonic saline before and after
- Minimize contrast volume
- Hold metformin 48 hours
- Consider alternative imaging
- N-acetylcysteine (limited evidence)

**Dosing Adjustment Principles:**

*Methods:*
1. **Dose reduction** - Give same frequency, lower amount
2. **Interval extension** - Same dose, less frequent
3. **Combination approach**

*Factors to Consider:*
- Percentage renal elimination
- Therapeutic index
- Pharmacodynamics
- Patient-specific factors
- Dialysis clearance

**Important Drug-Specific Considerations:**

*Metformin:*
- eGFR 30-45: Use with caution, monitor closely
- eGFR less than 30: Contraindicated (lactic acidosis risk)
- Hold before contrast studies

*ACE inhibitors/ARBs:*
- Can increase creatinine initially (expected)
- Contraindicated in bilateral renal artery stenosis
- Generally protective long-term

*NSAIDs:*
- Generally avoid in CKD
- Cause hemodynamically-mediated AKI
- Sodium retention, hyperkalemia
- Reduce effectiveness of ACEi/ARB/diuretics

*Opioids:*
- Active metabolites accumulate
- Enhanced sedation, respiratory depression
- Lower initial doses
- Longer dosing intervals

**Monitoring on Nephrotoxic Drugs:**

*Parameters:*
- Serum creatinine
- Urine output
- Electrolytes
- Drug levels (when available)
- Clinical status

*Frequency:*
- Baseline before starting
- Serial monitoring during therapy
- Post-therapy follow-up`,
      keyTerms: [
        { term: 'pharmacokinetics', definition: 'How the body processes medications (absorption, distribution, metabolism, elimination)' },
        { term: 'therapeutic index', definition: 'Ratio of toxic dose to therapeutic dose; narrow index means higher risk' },
        { term: 'contrast-induced nephropathy', definition: 'Acute kidney injury following contrast media administration' },
        { term: 'drug clearance', definition: 'Volume of blood cleared of drug per unit time' },
        { term: 'active metabolite', definition: 'Product of drug metabolism that has pharmacologic activity' },
      ],
      analogies: [
        'Drug clearance is like a conveyor belt moving boxes out of a warehouse. If the belt slows down (reduced kidney function), boxes pile up unless you reduce how many come in (lower dose) or slow the input rate (extend interval).',
        'Nephrotoxic drugs are like harsh cleaning chemicals. In a healthy system, they clean without damage. But in a compromised system (damaged kidneys), the chemicals can damage the pipes themselves.',
      ],
      examples: [
        'A patient with eGFR 30 mL/min was prescribed gabapentin 300 mg three times daily. The standard dose for this indication is 300 mg on day 1, 600 day 2, 900 day 3. For this patient, the maximum dose should be 300 mg twice daily.',
        'A diabetic with eGFR 25 was continued on metformin by a provider unfamiliar with renal dosing guidelines. The patient developed severe lactic acidosis requiring ICU admission. Metformin is contraindicated at this GFR.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based renal dosing requires knowledge of pharmacokinetic principles, understanding of dialysis effects on drug clearance, and systematic approaches to dose individualization in CKD.',
      explanation: `**Pharmacokinetic Principles in Renal Impairment**

*Key Parameters:*
---
Clearance (CL):
- CL_total = CL_renal + CL_nonrenal
- As GFR decreases, CL_renal decreases
- Dose adjustment needed when CL_renal > 30% of total

Volume of Distribution (Vd):
- May increase with fluid overload
- May decrease with dehydration
- Affects loading dose

Half-life (t1/2):
- t1/2 = 0.693 × Vd / CL
- Prolongs as clearance decreases
- Determines dosing interval

Bioavailability:
- Generally unchanged in CKD
- GI absorption may be altered
---

**Dosing Equations and Methods:**

*Cockcroft-Gault for Drug Dosing:*
- Still used for most renal dosing references
- May underestimate clearance in obesity
- Use actual body weight unless significantly overweight

*CKD-EPI in Drug Dosing:*
- Increasingly used
- Race-free equation preferred
- Some dosing guides transitioning

*Dose Adjustment Formulas:*
---
For drugs with linear kinetics:
Adjusted Dose = Normal Dose × (Patient CL / Normal CL)

Or adjust interval:
Adjusted Interval = Normal Interval × (Normal CL / Patient CL)
---

**Drugs Requiring Major Adjustments:**

*Antimicrobials:*
---
Aminoglycosides:
- Traditional: 1 mg/kg q8h (normal renal function)
- Extended interval: 5-7 mg/kg q24-48h (CKD)
- Therapeutic drug monitoring essential

Vancomycin:
- Target AUC/MIC 400-600
- Extended infusion (over 2 hours)
- Trough or AUC monitoring
- Dose by actual body weight

Beta-lactams:
- High-dose, extended infusion strategies
- May need 2-3x normal dose in critically ill
- Adjust for residual renal function
---

*Anticoagulants:*
---
Enoxaparin:
- CrCl less than 30: 1 mg/kg once daily (vs q12h)
- Anti-Xa monitoring in some cases

Direct Oral Anticoagulants (DOACs):
| Drug      | Dose Adjustment            | Contraindication |
|-----------|----------------------------|------------------|
| Apixaban  | 2.5 mg BID if 2 criteria*  | Dialysis         |
| Rivaroxaban| 15 mg daily if CrCl 15-50 | CrCl less than 15|
| Dabigatran| 75 mg BID if CrCl 15-30   | CrCl less than 15|
*Age greater than 80, weight less than 60 kg, creatinine greater than 1.5

Warfarin:
- No renal adjustment needed
- Preferred in ESRD for long-term
- Can be used with DOACs in dialysis with caution
---

**Dialysis and Drug Clearance:**

*Factors Affecting Dialytic Clearance:*
- Molecular weight (less than 500 Da readily cleared)
- Protein binding (high binding = less clearance)
- Volume of distribution (high Vd = less clearance)
- Dialysis modality and settings

*Dosing Approaches:*

| Timing          | When to Use                      |
|-----------------|----------------------------------|
| Post-dialysis   | Most drugs, give after HD        |
| Supplemental    | Redose after HD if significant clearance |
| During dialysis | Continuous infusion, some antibiotics |

*Specific Considerations:*

Hemodialysis:
- Vancomycin: Give post-HD, monitor levels
- Aminoglycosides: Give post-HD, redose based on levels
- Most antibiotics: Post-HD dosing

Peritoneal Dialysis:
- Consider intraperitoneal administration
- Some drugs cleared well (aminoglycosides)
- Others not (vancomycin)

CRRT:
- Higher clearance than IHD
- Often requires higher doses
- Consult pharmacy for dosing

**Metformin and Lactic Acidosis:**

*Risk Factors:*
- eGFR less than 30 (contraindication)
- Dehydration
- Contrast exposure
- Heart failure
- Liver disease
- Alcohol use

*FDA Guidance:*
- eGFR greater than 45: No restriction
- eGFR 30-45: Do not initiate, reassess if on therapy
- eGFR less than 30: Contraindicated
- Hold before and 48 hours after contrast

**Drug-Induced Hyperkalemia:**

*Common Culprits:*
- ACE inhibitors, ARBs
- Potassium-sparing diuretics
- NSAIDs
- Beta-blockers
- Heparin
- Trimethoprim
- Pentamidine

*Prevention:*
- Monitor potassium
- Avoid combinations
- Dietary counseling
- Sodium polystyrene if needed

**Pharmacist Involvement:**

*Essential Roles:*
- Renal dose verification
- Drug interaction screening
- Therapeutic drug monitoring
- Patient education
- Adherence counseling

*Resources:*
- Renal dosing handbooks
- Micromedex, Lexicomp
- Sanford Guide
- Primary literature`,
      keyTerms: [
        { term: 'AUC', definition: 'Area Under the Curve; measure of drug exposure over time' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to guide dosing' },
        { term: 'extended infusion', definition: 'Prolonged antibiotic administration to optimize pharmacodynamics' },
        { term: 'anti-Xa', definition: 'Assay measuring anti-factor Xa activity for heparin monitoring' },
        { term: 'DOAC', definition: 'Direct Oral Anticoagulant; newer oral blood thinners' },
        { term: 'CRRT', definition: 'Continuous Renal Replacement Therapy; slow continuous dialysis' },
      ],
      clinicalNotes: 'Always check renal function before prescribing. Cockcroft-Gault is still widely used for drug dosing but CKD-EPI is gaining acceptance. For dialysis patients, know whether drugs are dialyzable. Therapeutic drug monitoring is essential for aminoglycosides and vancomycin. When in doubt, consult pharmacy.',
    },
    4: {
      level: 4,
      summary: 'Advanced medication management in CKD integrates pharmacogenomics, precision dosing strategies, and comprehensive medication safety programs to optimize outcomes and minimize toxicity.',
      explanation: `**Advanced Pharmacokinetic Considerations**

*Non-Linear Pharmacokinetics:*
---
Drugs with capacity-limited metabolism:
- Phenytoin
- Theophylline
- Ethanol

In CKD:
- Altered protein binding affects free fraction
- Active metabolites accumulate
- Non-renal clearance may be reduced
- Dosing based on total drug may underestimate effect
---

*Protein Binding Changes:*
- Hypoalbuminemia increases free fraction
- Uremic toxins displace drugs
- Affects highly protein-bound drugs (greater than 90%)
- Examples: Phenytoin, warfarin, valproic acid

*Adjusting for Hypoalbuminemia:*
---
Corrected Phenytoin Level:
Corrected = Measured / (0.25 × Albumin + 0.1)

Or use free phenytoin levels directly
---

**Pharmacodynamic Changes in CKD:**

*Increased Sensitivity:*
- Opioids (active metabolites)
- Sedatives (enhanced CNS penetration)
- Insulin (reduced renal degradation)
- Heparin (uremic platelet dysfunction)

*Decreased Sensitivity:*
- Erythropoietin (uremic resistance)
- Diuretics (reduced secretion)
- Some beta-blockers

**Antibiotic Dosing in Critical Illness:**

*Augmented Renal Clearance:*
- Common in sepsis, burns, trauma
- Creatinine may underestimate true GFR
- May need higher than standard doses
- Therapeutic drug monitoring essential

*Extended Infusion Strategies:*
---
Rationale:
- Maximize time above MIC (fT greater than MIC)
- Continuous or prolonged infusion
- Improved outcomes in severe sepsis

Drugs commonly given this way:
- Piperacillin-tazobactam
- Cefepime
- Meropenem
- Vancomycin (over 2 hours)
---

**Immunosuppression in Transplant:**

*Calcineurin Inhibitors:*
- Nephrotoxic (dose-dependent)
- Narrow therapeutic index
- Drug interactions (CYP3A4)
- Trough level monitoring

*Target Levels (varies by center/time):*
---
Tacrolimus:
- Early post-transplant: 8-12 ng/mL
- Maintenance: 4-8 ng/mL

Cyclosporine:
- C2 monitoring increasingly used
- Target 800-1200 ng/mL (C2)
---

*Mycophenolate:*
- Active metabolite accumulates in CKD
- GI toxicity common
- MPA level monitoring sometimes used

**Pain Management in CKD:**

*Opioid Considerations:*
---
Morphine:
- Active metabolite M6G accumulates
- Neurotoxicity risk
- Avoid or use very low doses

Codeine:
- Prodrug requiring CYP2D6
- Variable response
- Risk of toxicity or inefficacy
- Contraindicated in dialysis

Oxycodone:
- Safer than morphine
- Still reduce dose, extend interval
- Active metabolites less problematic

Fentanyl:
- Preferred in dialysis
- No active metabolites
- Hepatic clearance
- Patch form convenient

Hydromorphone:
- H3G metabolite accumulates
- Neurotoxicity with high doses
- Use lower doses

Methadone:
- Long half-life
- QT prolongation risk
- Expert management needed
---

*Non-Opioid Options:*
- Acetaminophen (safest, no adjustment)
- Gabapentin/pregabalin (require major adjustment)
- Topical agents (lidocaine, capsaicin)
- Regional techniques

**Medication Safety Programs:**

*Computerized Decision Support:*
- Renal dosing alerts
- Drug interaction checking
- Allergy cross-reactivity
- Contraindication warnings

*Pharmacist-Led Dosing:*
- Aminoglycoside dosing protocols
- Vancomycin dosing
- Anticoagulation management
- Renal dosing verification

*Medication Reconciliation:*
- At every transition of care
- Identify nephrotoxins
- Verify appropriate renal dosing
- Check for drug-disease interactions

**Special Populations:**

*Elderly with CKD:*
- Polypharmacy common
- Cognitive impairment affects adherence
- Fall risk with sedatives
- Reduced muscle mass affects creatinine

*Pregnancy with CKD:*
- ACEi/ARB absolutely contraindicated
- Many drugs contraindicated
- Specialized care required

*Pediatric CKD:*
- Dosing by body surface area
- Developmental changes in pharmacokinetics
- Limited data for many drugs

**Adherence Strategies:**

*Simplification:*
- Once-daily regimens when possible
- Combination pills
- Adherence packaging

*Education:*
- Teach-back method
- Written instructions
- Address health literacy

*Monitoring:*
- Pill counts
- Refill records
- Drug levels when available`,
      keyTerms: [
        { term: 'pharmacodynamics', definition: 'Study of drug effects on the body and mechanism of action' },
        { term: 'augmented renal clearance', definition: 'Higher than expected drug elimination, common in critical illness' },
        { term: 'fT greater than MIC', definition: 'Fraction of time drug concentration exceeds minimum inhibitory concentration' },
        { term: 'CYP3A4', definition: 'Cytochrome P450 enzyme involved in metabolism of many drugs' },
        { term: 'M6G', definition: 'Morphine-6-glucuronide; active metabolite of morphine that accumulates in CKD' },
        { term: 'medication reconciliation', definition: 'Process of comparing patient medication orders to current medications' },
      ],
      clinicalNotes: 'Pharmacogenomics (CYP2D6 for codeine, CYP2C9/VKORC1 for warfarin) increasingly relevant. Therapeutic drug monitoring essential for narrow index drugs. Pain management requires careful opioid selection in CKD. Fentanyl and methadone preferred for severe pain in dialysis. Computerized alerts help but clinical judgment remains essential.',
    },
    5: {
      level: 5,
      summary: 'Precision pharmacotherapy in CKD incorporates pharmacogenomics, physiologically-based pharmacokinetic modeling, artificial intelligence, and systems pharmacology to individualize drug therapy.',
      explanation: `**Precision Dosing in Nephrology**

*Physiologically-Based Pharmacokinetic (PBPK) Modeling:*
---
Model Components:
- Organ blood flows
- Tissue volumes
- Enzyme/transporter expression
- Disease-specific alterations

CKD Adaptations:
- Reduced GFR component
- Altered protein binding
- Uremic toxin effects
- Dialysis clearance modules

Applications:
- Drug-drug interaction prediction
- Special population dosing
- Bioequivalence assessment
- Regulatory submissions
---

**Pharmacogenomics in CKD:**

*Relevant Polymorphisms:*

| Gene      | Drug Impact                | Clinical Application       |
|-----------|----------------------------|----------------------------|
| CYP2D6    | Codeine, tramadol, opioids | Avoid codeine in poor metabolizers |
| CYP2C9    | Warfarin, NSAIDs           | Lower warfarin doses       |
| VKORC1    | Warfarin                   | Dose adjustment            |
| SLCO1B1   | Statins                    | Myopathy risk stratification|
| CYP3A5    | Tacrolimus                 | Dose requirements vary     |
| TPMT      | Azathioprine               | Avoid or reduce dose       |

*Implementation:*
- Preemptive genotyping
- Clinical decision support integration
- Cost-effectiveness analyses
- Point-of-care testing

**Artificial Intelligence in Drug Dosing:**

*Machine Learning Applications:*

| Application           | Approach                   | Benefits                  |
|-----------------------|----------------------------|---------------------------|
| Vancomycin dosing     | Neural networks            | Improved target attainment|
| Aminoglycoside TDM    | Bayesian forecasting       | Reduced toxicity          |
| AKI prediction        | Ensemble methods           | Early intervention        |
| Drug interaction      | NLP + ML                   | Comprehensive screening   |
| Adherence prediction  | Pattern recognition        | Targeted interventions    |

*Bayesian Dosing Software:*
- Individualized pharmacokinetic parameter estimation
- Real-time dose optimization
- Uncertainty quantification
- Increasingly integrated into EHRs

**Therapeutic Drug Monitoring Advances:**

*AUC-Guided Vancomycin:*
- Target AUC/MIC 400-600
- Bayesian estimation from single levels
- Outperforms trough-only monitoring
- Reduces nephrotoxicity
- Now standard of care

*Liquid Chromatography-Mass Spectrometry:*
- Multi-drug quantification
- Low volume requirements
- Rapid turnaround
- Expanded TDM capabilities

*Point-of-Care Testing:*
- Tacrolimus whole blood testing
- Future: Multiple immunosuppressants
- Immediate dose adjustment
- Improved outcomes potential

**Systems Pharmacology:**

*Multi-Scale Modeling:*
---
Molecular Level:
- Drug-target interactions
- Signal transduction
- Gene expression changes

Cellular Level:
- Intracellular concentrations
- Organelle effects
- Toxicity mechanisms

Organ Level:
- Organ-specific pharmacokinetics
- Disease pathophysiology
- Organ interactions

Organism Level:
- Whole-body disposition
- Clinical outcomes
- Population variability
---

*Applications in CKD:*
- Drug-induced kidney injury prediction
- Nephrotoxicity mechanism understanding
- Renal protective strategies

**Drug Development in CKD:**

*Regulatory Considerations:*
- FDA guidance on renal impairment studies
- EMA recommendations
- Pharmacokinetic study requirements
- Dose adjustment justification

*Challenges:*
- Heterogeneous CKD population
- Dialysis variable effects
- Pediatric considerations
- Rare disease drug development

*Opportunities:*
- Organs-on-chips for nephrotoxicity
- Biomarker-qualified endpoints
- Adaptive trial designs
- Real-world evidence

**Pharmacovigilance:**

*Post-Marketing Surveillance:*
- Signal detection algorithms
- CKD-specific adverse events
- Drug-induced kidney injury
- Registry data analysis

*Real-World Evidence:*
- EHR-based studies
- Claims data analysis
- Patient registries
- Social media monitoring

**Future Directions:**

*Emerging Technologies:*
- Wearable drug monitors
- Continuous drug sensors
- 3D-printed personalized dosing
- Microphysiological systems

*Research Priorities:*
- Validated AI dosing tools
- Widespread pharmacogenomics
- Novel biomarkers for TDM
- Patient-centered outcomes`,
      keyTerms: [
        { term: 'PBPK modeling', definition: 'Computer modeling of drug disposition based on physiology' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response' },
        { term: 'Bayesian dosing', definition: 'Statistical approach incorporating prior knowledge with patient data' },
        { term: 'AUC/MIC', definition: 'Pharmacodynamic parameter for antibiotic efficacy' },
        { term: 'systems pharmacology', definition: 'Integration of pharmacology with systems biology' },
        { term: 'microphysiological system', definition: 'Organ-on-chip technology for drug testing' },
      ],
      clinicalNotes: 'Precision pharmacotherapy is the future of renal dosing. PBPK models increasingly inform drug development and dosing. AUC-guided vancomycin dosing is now standard. Pharmacogenomics should be considered for warfarin, codeine, and immunosuppressants. AI tools will increasingly support clinical decision-making but require validation.',
    },
  },

  media: [
    {
      id: 'renal-dosing-chart',
      type: 'diagram',
      filename: 'renal-dosing-reference.svg',
      title: 'Common Medications Requiring Renal Dose Adjustment',
      description: 'Quick reference chart for commonly used drugs in CKD',
    },
    {
      id: 'nephrotoxic-medications',
      type: 'diagram',
      filename: 'nephrotoxic-drugs-poster.svg',
      title: 'Nephrotoxic Medications to Avoid',
      description: 'Visual guide to medications that can harm kidneys',
    },
  ],

  citations: [
    {
      id: 'renal-drug-handbook',
      type: 'textbook',
      title: 'The Renal Drug Database',
      source: 'Radcliffe Medical Press',
    },
    {
      id: 'kdigo-drug-dosing',
      type: 'article',
      title: 'Drug Dosing in Kidney Disease: A Clinical Approach',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-kidney-ckd-stages', targetType: 'concept', relationship: 'related', label: 'CKD Stages' },
    { targetId: 'chronic-kidney-renal-diet', targetType: 'concept', relationship: 'related', label: 'Renal Diet' },
    { targetId: 'chronic-kidney-dialysis-preparation', targetType: 'concept', relationship: 'related', label: 'Dialysis Preparation' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['chronic-disease', 'ckd', 'pharmacology', 'medication-safety'],
    keywords: ['renal dosing', 'nephrotoxic', 'medication adjustments', 'drug clearance', 'dialysis dosing'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology', 'pharmacology'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
