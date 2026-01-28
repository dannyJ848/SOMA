/**
 * Antiproliferative Agents
 *
 * Coverage of antimetabolite and antiproliferative medications used in transplant,
 * including mycophenolate, azathioprine, and mTOR inhibitors (sirolimus, everolimus).
 */

import { EducationalContent } from '../../types';

export const antiproliferativeAgents: EducationalContent = {
  id: 'transplant-antiproliferative-agents',
  type: 'concept',
  name: 'Antiproliferative Agents',
  alternateNames: ['Antimetabolites', 'mTOR inhibitors', 'Mycophenolate', 'CellCept', 'Myfortic', 'Azathioprine', 'Imuran', 'Sirolimus', 'Rapamune', 'Everolimus', 'Zortress'],

  levels: {
    1: {
      level: 1,
      summary: 'Antiproliferative agents are medications that stop immune cells from multiplying and attacking transplanted organs.',
      explanation: `**What Are Antiproliferative Agents?**

These medications work by stopping immune cells from growing and dividing. When immune cells cannot multiply, they cannot form an army large enough to attack the transplanted organ.

**Main Types:**

1. **Mycophenolate (CellCept, Myfortic)**
   - Most commonly used today
   - Usually taken twice daily
   - May cause stomach upset

2. **Azathioprine (Imuran)**
   - Older medication
   - Used for many years
   - Still used in some patients

3. **mTOR Inhibitors (Sirolimus, Everolimus)**
   - Different way of working
   - Sometimes used instead of other medications
   - Taken once daily

**How They Help:**

- Prevent immune cells from multiplying
- Work together with other anti-rejection drugs
- Reduce the risk of rejection
- Help protect the new organ

**Common Side Effects:**

- Stomach problems (nausea, diarrhea)
- Low blood counts
- Increased infection risk
- Skin changes (with mTOR inhibitors)

**Taking These Medications:**

- Take at the same times each day
- Do not skip doses
- Can take with food to reduce stomach upset
- Regular blood tests needed

**Important Notes:**

- These work best when combined with other anti-rejection drugs
- Different people may need different combinations
- Your transplant team will choose the best option for you`,
      keyTerms: [
        { term: 'mycophenolate', definition: 'The most commonly used antiproliferative medication after transplants' },
        { term: 'azathioprine', definition: 'An older antiproliferative medication still used in some patients' },
        { term: 'mTOR inhibitor', definition: 'A type of medication that works by blocking cell growth signals' },
        { term: 'antimetabolite', definition: 'Medication that interferes with cell metabolism to prevent growth' },
      ],
      analogies: [
        'Antiproliferative agents are like stopping the photocopier so the immune cells cannot make copies of themselves.',
        'These medications work like traffic lights that stop immune cells from multiplying at the intersection.',
      ],
      examples: [
        'A transplant patient takes mycophenolate twice daily with breakfast and dinner to prevent rejection.',
        'A patient switched from azathioprine to mycophenolate after experiencing stomach problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antiproliferative agents inhibit lymphocyte proliferation through interference with nucleotide synthesis (antimetabolites) or cell cycle regulation (mTOR inhibitors), serving as essential components of combination immunosuppression.',
      explanation: `**Classification and Mechanisms:**

*Antimetabolites:*

1. **Mycophenolic Acid (MPA)**
   - Non-competitive inhibitor of inosine monophosphate dehydrogenase (IMPDH)
   - Blocks de novo guanine nucleotide synthesis
   - Lymphocytes uniquely dependent on this pathway
   - Two formulations: Mycophenolate Mofetil (MMF) and Enteric-coated Mycophenolate Sodium (EC-MPS)

2. **Azathioprine**
   - Purine analog converted to 6-mercaptopurine
   - Incorporated into DNA, causing chain termination
   - Inhibits de novo purine synthesis
   - Affects all rapidly dividing cells (less lymphocyte-specific)

*mTOR Inhibitors:*

3. **Sirolimus (Rapamycin) and Everolimus**
   - Bind FKBP12 (like tacrolimus)
   - Inhibit mTOR (mammalian Target of Rapamycin)
   - Block cell cycle progression from G1 to S phase
   - Inhibit IL-2 driven T-cell proliferation

**Pharmacokinetics:**

*Mycophenolate:*
- MMF rapidly hydrolyzed to MPA in GI tract
- Bioavailability: ~94% (MMF), ~72% (EC-MPS)
- Protein binding: 97% (albumin)
- Hepatic glucuronidation to inactive MPAG
- Enterohepatic recirculation (10-60% of dose)
- Half-life: 8-18 hours

*Azathioprine:*
- Oral bioavailability: ~50%
- Rapid conversion to 6-MP and active metabolites
- Metabolized by xanthine oxidase and TPMT
- Half-life: 3-5 hours (parent), longer for metabolites

*mTOR Inhibitors:*
- Sirolimus: oral bioavailability ~15%
- Everolimus: oral bioavailability ~20%
- Extensive CYP3A4 metabolism
- Long half-lives: sirolimus ~60 hours, everolimus ~30 hours

**Therapeutic Monitoring:**

*Mycophenolate:*
- MPA AUC (area under curve): target 30-60 mg*h/L
- Limited sampling strategies available
- Trough levels correlate poorly with exposure
- Pre-dose concentrations <1.5-2 mg/L associated with rejection

*mTOR Inhibitors:*
- Trough monitoring standard
- Sirolimus target: 5-15 ng/mL (depends on indication)
- Everolimus target: 3-8 ng/mL (transplant)
- 2-hour post-dose levels sometimes used

**Comparative Efficacy:**

| Agent | Rejection Prophylaxis | Renal Function | Other Benefits |
|-------|----------------------|----------------|----------------|
| Mycophenolate | Superior to azathioprine | Neutral | Cytomegalovirus prophylaxis |
| Azathioprine | Adequate with CNI + steroid | Neutral | Lower cost |
| Sirolimus | Adequate | May improve GFR | Anti-cancer properties |
| Everolimus | Adequate | May improve GFR | Can reduce CNI exposure |`,
      keyTerms: [
        { term: 'IMPDH', definition: 'Inosine monophosphate dehydrogenase, enzyme blocked by mycophenolate' },
        { term: 'mTOR', definition: 'Mammalian Target of Rapamycin, kinase regulating cell growth and proliferation' },
        { term: 'MPA AUC', definition: 'Area under the curve for mycophenolic acid, measure of drug exposure' },
        { term: 'enterohepatic recirculation', definition: 'Cycling of drug between liver, bile, and intestine' },
        { term: 'TPMT', definition: 'Thiopurine methyltransferase, enzyme metabolizing azathioprine' },
        { term: 'xanthine oxidase', definition: 'Enzyme breaking down azathioprine/6-MP metabolites' },
      ],
      analogies: [
        'Antimetabolites are like removing the bricks so immune cells cannot build new DNA to divide.',
        'mTOR is like the cell\'s accelerator pedal; mTOR inhibitors cut the cable so the cell cannot speed up and divide.',
      ],
      examples: [
        'Kidney transplant patient on tacrolimus and mycophenolate has MPA AUC measured at 3 months showing adequate exposure.',
        'Patient converted from cyclosporine to sirolimus at 6 months to improve renal function in calcineurin-inhibitor nephrotoxicity.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antiproliferative agents target specific pathways in nucleotide metabolism and cell cycle regulation. Mycophenolate selectively inhibits IMPDH in lymphocytes, while mTOR inhibitors block IL-2 signaling downstream of calcineurin, offering alternative mechanisms for immunosuppression.',
      explanation: `**Molecular Mechanisms:**

*Mycophenolate - IMPDH Inhibition:*

The de novo purine synthesis pathway:
1. 5-phosphoribosyl-1-pyrophosphate (PRPP) + ATP → IMP
2. IMPDH converts IMP → xanthosine monophosphate (XMP)
3. XMP converted to GMP, then GTP and dGTP

Lymphocytes critically dependent on this pathway because:
- T and B cells lack hypoxanthine-guanine phosphoribosyltransferase (HGPRT)
- Cannot use salvage pathway for purine synthesis
- Other cells can use hypoxanthine/guanine recycling
- Results in selective lymphocyte inhibition

Two IMPDH isoforms:
- IMPDH type I: constitutively expressed
- IMPDH type II: upregulated in activated lymphocytes
- Mycophenolate inhibits both, but type II more potently

*Azathioprine - Purine Analog:*

Metabolism pathway:
1. Azathioprine → 6-mercaptopurine (6-MP)
2. 6-MP metabolized by:
   - Hypoxanthine-guanine phosphoribosyltransferase (HGPRT) → thio-IMP (active)
   - Thio-IMP incorporated into DNA/RNA
   - Causes chain termination and cytotoxicity
   - TPMT inactivates 6-MP
   - Xanthine oxidase converts to inactive metabolites

Genetic polymorphisms in TPMT affect:
- Drug efficacy and toxicity
- 0.3% population: TPMT deficiency (severe toxicity)
- 10% population: intermediate activity (dose reduction needed)

*mTOR Inhibitors - Cell Cycle Blockade:*

mTORC1 complex functions:
- Downstream of PI3K/Akt pathway
- Regulated by growth factors, nutrients, energy status
- Phosphorylates S6 kinase (S6K) and 4E-BP1
- Promotes protein synthesis and cell growth

Sirolimus-FKBP12 complex:
- Binds mTOR, inhibits kinase activity
- Blocks IL-2 driven T-cell proliferation
- Inhibits B-cell differentiation and antibody production
- Reduces vascular endothelial growth factor (VEGF)
- Inhibits smooth muscle cell proliferation

**Formulation Differences:**

*Mycophenolate Mofetil (CellCept):*
- 2-gram daily dose typical
- Absorbed in stomach and upper intestine
- High variability in absorption
- Food decreases Cmax, delays Tmax

*Enteric-coated Mycophenolate Sodium (Myfortic):*
- 1440 mg daily (720 mg twice daily)
- Released in small intestine
- Delayed absorption
- Less GI toxicity (theoretical benefit)
- Bioequivalent efficacy

*mTOR Inhibitor Differences:*

| Feature | Sirolimus | Everolimus |
|---------|-----------|------------|
| Half-life | ~60 hours | ~30 hours |
| Dosing | Once daily | Twice daily |
| Transplant approval | Conversion/maintenance | De novo with reduced CNI |
| PCI indication | No | Yes (drug-eluting stents) |
| Trough target | 5-15 ng/mL | 3-8 ng/mL |

**Adverse Effects:**

*Mycophenolate:*
- GI toxicity (30-50%): diarrhea, nausea, vomiting
- Bone marrow suppression: leukopenia, anemia
- Increased infection risk (CMV, BK virus)
- Teratogenic (pregnancy contraindicated)
- Pure red cell aplasia (rare)

*Azathioprine:*
- Bone marrow suppression (dose-dependent)
- Hepatotoxicity
- Pancreatitis (rare)
- Increased skin cancer risk
- TPMT-deficient patients: severe toxicity

*mTOR Inhibitors:*
- Dyslipidemia (common): elevated triglycerides, cholesterol
- Mouth ulcers (sirolimus > everolimus)
- Impaired wound healing
- Proteinuria
- Pneumonitis (interstitial lung disease)
- Thrombocytopenia
- Anti-cancer effects (benefit in some settings)`,
      keyTerms: [
        { term: 'IMPDH type II', definition: 'Isoform upregulated in activated lymphocytes, primary target of mycophenolate' },
        { term: 'salvage pathway', definition: 'Alternative purine synthesis route using recycled bases, deficient in lymphocytes' },
        { term: 'HGPRT', definition: 'Hypoxanthine-guanine phosphoribosyltransferase, enzyme enabling salvage pathway' },
        { term: 'mTORC1', definition: 'mTOR complex 1, regulates cell growth in response to nutrients and growth factors' },
        { term: 'S6 kinase', definition: 'Downstream target of mTOR, promotes protein synthesis' },
        { term: '4E-BP1', definition: 'Translation repressor inhibited by mTOR' },
        { term: 'thio-IMP', definition: 'Active metabolite of azathioprine incorporated into nucleic acids' },
        { term: 'enteric-coated', definition: 'Coating that prevents drug release until reaching the intestine' },
      ],
    },
    4: {
      level: 4,
      summary: 'Antiproliferative agent selection depends on efficacy, tolerability, and patient-specific factors. Mycophenolate has largely replaced azathioprine due to superior rejection prophylaxis. mTOR inhibitors offer CNI-sparing potential and anti-cancer benefits but have distinct toxicity profiles limiting their use.',
      explanation: `**Clinical Decision-Making:**

*Mycophenolate vs Azathioprine:*

Evidence from clinical trials:
- Tricontinental study: MMF reduced biopsy-proven acute rejection vs azathioprine (19.8% vs 38%)
- Similar graft survival at 3 years
- MMF: more GI toxicity, CMV disease
- Azathioprine: more leukopenia, liver enzyme elevations
- Cost differential decreasing with generics

Current practice:
- Mycophenolate preferred for most transplants
- Azathioprine used when mycophenolate not tolerated
- Azathioprine in pregnancy planning (less teratogenic)

*mTOR Inhibitor Considerations:*

*Conversion Indications:*
- CNI nephrotoxicity with declining GFR
- De novo malignancy (especially skin cancer)
- Kaposi sarcoma (sirolimus has anti-herpesvirus effect)
- Post-transplant lymphoproliferative disorder

*De Novo Use:*
- Everolimus with reduced CNI exposure
- HARMONY study: similar efficacy, better renal function
- Higher rejection rates in some studies
- Requires careful monitoring

*Contraindications:*
- High immunologic risk patients
- Significant proteinuria
- Poor wound healing potential
- Severe hyperlipidemia
- Interstitial lung disease history

**Mycophenolate Monitoring:**

*MPA AUC Measurement:*
- Limited sampling: pre-dose, 0.5, 1, 2, 3, 4 hours
- Target AUC0-12: 30-60 mg*h/L
- Below target: increased rejection risk
- Above target: more toxicity, no clear benefit

*Practical Approach:*
- Measure AUC at 1-2 weeks, 1 month, 3 months
- Trough <1.5 mg/L predicts low exposure
- Drug interactions significant (cholestyramine, antacids)
- Albumin levels affect free MPA (active fraction)

**Managing Toxicity:**

*Mycophenolate GI Toxicity:*
- Dose splitting (three or four times daily)
- Switch to EC-MPS formulation
- Dose reduction (with rejection risk)
- Temporary hold with severe diarrhea

*mTOR Inhibitor Mouth Ulcers:*
- Swish and spit preparation
- Dose reduction
- Switch to everolimus from sirolimus
- Consider discontinuation if severe

*Wound Healing Issues:*
- Avoid mTOR inhibitors perioperatively
- Hold 2-4 weeks before major surgery
- Higher risk with sirolimus than everolimus
- Ureteral strictures after kidney transplant

**Special Populations:**

*Pregnancy:*
- Mycophenolate: Category D, teratogenic
- Must discontinue 6 weeks before conception
- Azathioprine: safer alternative (Category D but extensive data)
- mTOR inhibitors: limited data, generally avoid

*Pediatrics:*
- Mycophenolate dosing by body surface area
- Higher clearance, may need more frequent dosing
- mTOR inhibitors: less experience, careful monitoring`,
      keyTerms: [
        { term: 'MPA AUC0-12', definition: 'Area under mycophenolic acid concentration curve over 12 hours' },
        { term: 'CNI sparing', definition: 'Strategy to reduce or eliminate calcineurin inhibitor exposure' },
        { term: 'limited sampling', definition: 'Using few time points to estimate full pharmacokinetic profile' },
        { term: 'free MPA', definition: 'Unbound mycophenolic acid, pharmacologically active fraction' },
        { term: 'tricontinental study', definition: 'Landmark trial establishing mycophenolate superiority over azathioprine' },
        { term: 'ureteral stricture', definition: 'Narrowing of ureter, complication of poor wound healing' },
      ],
      clinicalNotes: `Mycophenolate has become the standard antiproliferative agent in most transplant protocols due to superior efficacy in preventing acute rejection. Therapeutic drug monitoring with MPA AUC may optimize outcomes, particularly in high-risk patients or when drug interactions are suspected. mTOR inhibitors (sirolimus, everolimus) offer unique benefits including potential CNI minimization and anti-cancer effects, but their use is limited by distinct toxicities including dyslipidemia, impaired wound healing, and pneumonitis. Azathioprine remains useful in patients who cannot tolerate mycophenolate or when planning pregnancy.`,
    },
    5: {
      level: 5,
      summary: 'Advances in antiproliferative therapy include IMPDH inhibition biomarkers, mTORC2 research, and combination strategies. Novel formulations aim to improve tolerability while maintaining efficacy. Personalized dosing based on pharmacogenomics and therapeutic drug monitoring represents the future of immunosuppression optimization.',
      explanation: `**Research Advances:**

*Mycophenolate Pharmacogenomics:*

IMPDH polymorphisms:
- IMPDH1 and IMPDH2 genetic variants affect enzyme activity
- May influence mycophenolate response
- Research ongoing to guide dosing

UGT1A9 and UGT2B7 variants:
- Affect MPA glucuronidation to MPAG
- Influence clearance and exposure
- Potential for genotype-guided dosing

SLCO1B3 transporter variants:
- Affect hepatocyte uptake
- May influence enterohepatic recirculation
- Variable impact on clinical outcomes

*mTOR Biology Advances:*

mTORC1 vs mTORC2:
- Rapamycin primarily inhibits mTORC1
- mTORC2 regulates cell survival and metabolism
- Chronic rapamycin partially inhibits mTORC2
- mTORC2 inhibition may contribute to metabolic side effects

Selective mTOR inhibitors:
- Research into mTORC1-specific agents
- Goal: maintain immunosuppression, reduce metabolic toxicity
- Not yet in clinical transplant use

**Combination Strategies:**

*CNI + mTOR Inhibitor:*
- Synergistic immunosuppression
- Allows CNI dose reduction
- Concept study: everolimus + low-dose tacrolimus
- Potential for improved renal function

*Belatacept + mTOR Inhibitor:*
- CNI-free combination
- Phase II trials ongoing
- Theoretical benefits for renal function and malignancy
- Rejection rates under investigation

*Mycophenolate + mTOR Inhibitor:*
- Alternative to CNI-based therapy
- Increased rejection risk in early post-transplant
- May be used in selected low-risk patients

**Emerging Agents:**

*IMPDH Inhibitors:*
- Mycophenolate remains standard
- No significant new IMPDH inhibitors in development
- Focus on optimizing mycophenolate use

*FTY720 (Fingolimod) analogs:*
- Sphingosine-1-phosphate receptor modulators
- Different mechanism from traditional agents
- Approved for multiple sclerosis
- Limited transplant experience

*JAK Inhibitors:*
- Tofacitinib, baricitinib
- Block cytokine signaling
- Being investigated in transplantation
- Phase II trials for kidney transplant

**Personalized Medicine Approaches:**

*Immune Monitoring:*
- ImmuKnow assay (ATP production by CD4 cells)
- Predicts infection vs rejection risk
- Limited clinical utility to date
- Donor-specific antibody monitoring

*Biomarker-Guided Therapy:*
- Gene expression profiling
- Rejection predictive signatures
- Tolerance prediction
- Not yet standard of care

**Long-Term Outcomes:**

*Malignancy Risk:*
- mTOR inhibitors: reduced de novo malignancy
- Concept, RIST, and other trials demonstrate benefit
- Conversion to sirolimus after skin cancer standard practice
- Possible anti-Kaposi sarcoma effect

*Cardiovascular Disease:*
- mTOR inhibitors: mixed effects on lipids
- CNI minimization may reduce CV risk
- Metabolic syndrome management important
- No clear superiority of one regimen

*Chronic Allograft Injury:*
- mTOR inhibitors may slow interstitial fibrosis
- Anti-fibrotic effects in animal models
- Clinical benefit uncertain
- Protocol biopsies may guide therapy`,
      keyTerms: [
        { term: 'mTORC2', definition: 'mTOR complex 2, regulates Akt and cell survival, less inhibited by rapamycin' },
        { term: 'UGT1A9', definition: 'UDP-glucuronosyltransferase enzyme metabolizing MPA' },
        { term: 'SLCO1B3', definition: 'Solute carrier organic anion transporter affecting MPA uptake' },
        { term: 'enterohepatic recirculation', definition: 'Biliary excretion and reabsorption of drug from intestine' },
        { term: 'ImmuKnow', definition: 'Commercial assay measuring CD4 T-cell ATP production' },
        { term: 'sphingosine-1-phosphate', definition: 'Signaling molecule modulating lymphocyte trafficking' },
        { term: 'protocol biopsy', definition: 'Scheduled biopsy to detect subclinical rejection or injury' },
      ],
      clinicalNotes: `The field of antiproliferative immunosuppression continues to evolve with a focus on personalization. Mycophenolate remains the cornerstone, with therapeutic drug monitoring increasingly used to optimize exposure. mTOR inhibitors have carved out important niches in CNI minimization strategies and malignancy prevention. Research into pharmacogenomic-guided dosing and immune monitoring biomarkers holds promise for tailoring therapy to individual patient risk profiles. The ideal immunosuppressive regimen balances rejection prevention with long-term complications, requiring ongoing assessment and adjustment throughout the transplant recipient\'s life.`,
    },
  },

  media: [
    {
      id: 'antiproliferative-mechanism',
      type: 'diagram',
      filename: 'antiproliferative-mechanism.png',
      title: 'Antiproliferative Agent Mechanisms',
      description: 'Comparison of IMPDH inhibition, purine analog, and mTOR blockade pathways',
    },
    {
      id: 'purine-synthesis-pathway',
      type: 'diagram',
      filename: 'purine-synthesis.png',
      title: 'Purine Synthesis Pathway',
      description: 'De novo and salvage pathways showing mycophenolate and azathioprine targets',
    },
  ],

  citations: [
    {
      id: 'tricontinental-study',
      type: 'article',
      title: 'A Blind, Randomized Clinical Trial of Mycophenolate Mofetil for the Prevention of Acute Rejection in Cadaveric Renal Transplantation',
      authors: ['Sollinger HW'],
      source: 'Tricontinental Mycophenolate Mofetil Renal Transplant Study Group',
      url: 'https://doi.org/10.1097/00007890-199507000-00003',
      accessedDate: '2026-01-28',
    },
    {
      id: 'mycophenolate-monitoring',
      type: 'article',
      title: 'Therapeutic Drug Monitoring of Mycophenolate in Transplantation',
      authors: ['van Gelder T', 'Hilbrands LB'],
      source: 'Therapeutic Drug Monitoring',
      accessedDate: '2026-01-28',
    },
    {
      id: 'mtor-inhibitors-review',
      type: 'article',
      title: 'mTOR Inhibitors in Solid Organ Transplantation',
      authors: ['Kamar N', 'Deprouw BC'],
      source: 'Current Opinion in Nephrology and Hypertension',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-immunosuppression-basics',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Immunosuppression Basics',
    },
    {
      targetId: 'transplant-calcineurin-inhibitors',
      targetType: 'concept',
      relationship: 'related',
      label: 'Calcineurin Inhibitors',
    },
    {
      targetId: 'transplant-corticosteroids',
      targetType: 'concept',
      relationship: 'related',
      label: 'Corticosteroids in Transplant',
    },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'pharmacology', 'immunosuppression'],
    keywords: ['mycophenolate', 'azathioprine', 'sirolimus', 'everolimus', 'mTOR', 'IMPDH', 'antimetabolite', 'antiproliferative'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
