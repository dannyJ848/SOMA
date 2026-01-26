/**
 * Bladder Cancer - Educational Content
 */

import { EducationalContent } from '../../types';

export const bladderCancer: EducationalContent = {
  id: 'cancer-bladder-cancer',
  type: 'condition',
  name: 'Bladder Cancer',
  alternateNames: ['Urothelial Carcinoma', 'Transitional Cell Carcinoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Bladder cancer occurs when cells in the bladder grow abnormally, most commonly causing blood in the urine.',
      explanation: `Bladder cancer is one of the most common cancers, especially in older adults who smoke.

**Warning Signs:**
- Blood in urine (may be pink, red, or cola-colored)
- Frequent urination
- Pain during urination
- Back or pelvic pain

**Risk Factors:**
- Smoking (biggest risk)
- Age over 55
- Being male
- Chemical exposure at work
- Previous cancer treatment

**Good News:**
- Most bladder cancers are found early
- Early-stage is very treatable
- Regular monitoring works well

**Treatment Depends on Stage:**
- Early: Removal through cystoscope + medicine in bladder
- More advanced: May need bladder removal surgery
- Regular follow-up is essential`,
      keyTerms: [
        { term: 'bladder cancer', definition: 'Cancer starting in the cells lining the bladder' },
        { term: 'hematuria', definition: 'Blood in the urine - main warning sign' },
        { term: 'cystoscopy', definition: 'Looking inside the bladder with a camera' },
      ],
      analogies: [
        'The bladder lining is like wallpaper - cancer starts in this inner layer and can grow deeper.',
      ],
      examples: [
        'Seeing blood in urine even once should prompt a visit to the doctor for evaluation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bladder cancer is primarily urothelial carcinoma, staged by muscle invasion (NMIBC vs MIBC), with treatment ranging from TURBT with intravesical therapy to radical cystectomy.',
      explanation: `## Epidemiology

- 4th most common cancer in men
- Median age 73 at diagnosis
- 3:1 male to female ratio
- Strong association with smoking

## Types

**Urothelial Carcinoma (90%):**
- Arises from transitional epithelium
- Papillary or sessile/flat

**Squamous Cell (3-5%):**
- Associated with chronic irritation
- Schistosomiasis in endemic areas

**Adenocarcinoma (1-2%):**
- Urachal origin
- Bladder exstrophy

## Staging (Simplified)

**Non-Muscle Invasive (NMIBC):**
- Ta: Papillary, mucosa only
- T1: Into lamina propria
- CIS: Flat, high-grade, in situ

**Muscle Invasive (MIBC):**
- T2: Into muscle
- T3: Through muscle
- T4: Into adjacent organs

## Workup

**Initial:**
- Cystoscopy with biopsy/TURBT
- CT urography
- Urine cytology

**If Muscle Invasive:**
- Chest CT
- Bone scan if symptoms
- Consider PET-CT

## Treatment Overview

**NMIBC:**
- TURBT (transurethral resection)
- Intravesical therapy (BCG or chemo)
- Surveillance cystoscopy

**MIBC:**
- Neoadjuvant chemotherapy
- Radical cystectomy with diversion
- Or bladder-sparing (trimodal therapy)`,
      keyTerms: [
        { term: 'NMIBC', definition: 'Non-muscle invasive bladder cancer - has not grown into muscle layer' },
        { term: 'MIBC', definition: 'Muscle-invasive bladder cancer - requires more aggressive treatment' },
        { term: 'BCG', definition: 'Bacillus Calmette-Guerin - immunotherapy instilled in bladder' },
      ],
      analogies: [
        'Staging bladder cancer is like checking how deep a hole goes - the deeper, the more serious.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bladder cancer management requires accurate staging, risk stratification for NMIBC, and multimodal therapy for MIBC.',
      explanation: `## Risk Stratification (NMIBC)

**Low Risk:**
- Low-grade Ta, solitary, <3cm
- Treatment: TURBT alone
- Surveillance: Cystoscopy at 3 months, then annually

**Intermediate Risk:**
- Recurrent low-grade Ta
- Multiple tumors
- Treatment: TURBT + intravesical chemo

**High Risk:**
- T1 high-grade
- CIS
- Large/multiple high-grade Ta
- Treatment: TURBT + BCG induction + maintenance

## BCG Therapy

**Mechanism:**
- Mycobacterium tuberculosis (attenuated)
- Immune activation
- Reduces recurrence and progression

**Protocol:**
- Induction: Weekly x 6 weeks
- Maintenance: 3 weeks at 3, 6, 12, 18, 24, 30, 36 months

**Side Effects:**
- Cystitis (common)
- Systemic BCG-osis (rare, serious)
- Contraindicated if immunocompromised

## MIBC Treatment

**Neoadjuvant Chemotherapy:**
- Cisplatin-based (MVAC or GC)
- 3-4 cycles before cystectomy
- Improves survival

**Radical Cystectomy:**
- Bladder removal
- Lymph node dissection
- Men: Prostate included
- Women: Anterior exenteration

**Urinary Diversion:**
- Ileal conduit (most common)
- Neobladder (continent)
- Continent cutaneous

## Bladder Preservation

**Trimodal Therapy:**
- Maximal TURBT
- Concurrent chemo/radiation
- Salvage cystectomy if incomplete response
- Select patients only`,
      keyTerms: [
        { term: 'BCG induction', definition: 'Initial 6-week course of BCG immunotherapy' },
        { term: 'neoadjuvant chemotherapy', definition: 'Chemotherapy before surgery to shrink tumor' },
        { term: 'trimodal therapy', definition: 'Bladder-preserving approach with TURBT, chemo, and radiation' },
      ],
      clinicalNotes: 'Re-staging TURBT at 2-6 weeks is mandatory for T1 high-grade to rule out understaging. Residual/upstaged disease changes management.',
    },
    4: {
      level: 4,
      summary: 'Advanced bladder cancer care includes immunotherapy, molecular profiling, and complex surgical reconstruction.',
      explanation: `## Immunotherapy

**Pembrolizumab/Atezolizumab:**
- PD-1/PD-L1 checkpoint inhibitors
- BCG-unresponsive NMIBC
- Metastatic disease

**Nivolumab:**
- Adjuvant after cystectomy
- High-risk pathology

**Erdafitinib:**
- FGFR inhibitor
- For FGFR-altered tumors
- Second-line metastatic

## Molecular Profiling

**Luminal vs Basal Subtypes:**
- Prognostic implications
- May predict chemo response

**FGFR Alterations:**
- 15-20% of bladder cancers
- Targetable with erdafitinib

**DNA Repair Mutations:**
- ATM, BRCA1/2
- May predict platinum sensitivity

## Surgical Considerations

**Extended Lymph Node Dissection:**
- Superior to limited
- Template: Common iliac, external iliac, obturator, internal iliac

**Robotic Cystectomy:**
- Equivalent oncologic outcomes
- Reduced blood loss
- Learning curve considerations

**Neobladder Selection:**
- Adequate kidney function
- Motivation for self-care
- No urethral tumor
- No stress incontinence

## Variant Histology

**Micropapillary:**
- Aggressive behavior
- Early cystectomy considered

**Plasmacytoid:**
- Diffuse pattern
- Difficult to detect margins

**Small Cell:**
- Neuroendocrine
- Treat like small cell lung cancer

## BCG Alternatives

**For BCG Shortage/Failure:**
- Valrubicin
- Gemcitabine + docetaxel
- Pembrolizumab
- Early cystectomy consideration`,
      keyTerms: [
        { term: 'checkpoint inhibitor', definition: 'Immunotherapy releasing brakes on immune system' },
        { term: 'FGFR', definition: 'Fibroblast growth factor receptor - molecular target in bladder cancer' },
        { term: 'neobladder', definition: 'Bladder substitute created from intestine' },
      ],
      clinicalNotes: 'BCG-unresponsive NMIBC (failure after adequate BCG) should be discussed in multidisciplinary conference. Options include cystectomy, pembrolizumab, or clinical trials.',
    },
    5: {
      level: 5,
      summary: 'Expert bladder cancer management encompasses ctDNA monitoring, novel therapeutics, and quality of life optimization after treatment.',
      explanation: `## Circulating Tumor DNA

**Applications:**
- Minimal residual disease detection
- Recurrence monitoring
- Treatment response assessment

**Studies:**
- ctDNA predicts recurrence before imaging
- May guide adjuvant therapy decisions

## Emerging Therapies

**Antibody-Drug Conjugates:**
- Enfortumab vedotin (Nectin-4)
- Sacituzumab govitecan (Trop-2)
- Transforming metastatic treatment

**Novel Combinations:**
- EV + pembrolizumab
- FGFR + IO combinations

**Gene Therapy:**
- Nadofaragene firadenovec (Adstiladrin)
- For BCG-unresponsive NMIBC
- Gene-mediated cytotoxic therapy

## Quality of Life

**Continent Diversion:**
- Neobladder function optimization
- Pelvic floor therapy
- Hypercontinence management

**Ileal Conduit:**
- Stoma care education
- Appliance selection
- Support groups

**Sexual Function:**
- Nerve-sparing techniques
- Rehabilitation
- Counseling

## Survivorship

**Surveillance Protocols:**
- Cross-sectional imaging schedule
- Cystoscopy (if bladder preserved)
- Metabolic monitoring

**Late Effects:**
- Vitamin B12 deficiency
- Metabolic acidosis
- Stomal complications
- Second malignancies

## Research Frontiers

**Liquid Biopsy:**
- ctDNA, methylation markers
- Treatment selection
- MRD detection

**Organoids:**
- Drug sensitivity testing
- Personalized treatment

**Immunotherapy Combinations:**
- Optimal sequencing
- Biomarker development

## Multidisciplinary Care

**Tumor Board:**
- Urology, medical oncology, radiation oncology
- Pathology review
- Complex decision making

**Supportive Care:**
- Nutrition
- Psychosocial support
- Palliative care integration`,
      keyTerms: [
        { term: 'enfortumab vedotin', definition: 'Antibody-drug conjugate targeting Nectin-4 for advanced bladder cancer' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA - blood-based cancer detection' },
        { term: 'nadofaragene firadenovec', definition: 'Gene therapy for BCG-unresponsive NMIBC' },
      ],
      clinicalNotes: 'Enfortumab vedotin plus pembrolizumab has become first-line for metastatic bladder cancer in platinum-ineligible patients. The landscape is rapidly evolving.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-nmibc',
      type: 'article',
      title: 'Non-Muscle Invasive Bladder Cancer',
      source: 'AUA/SUO Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'procedure-cystoscopy', targetType: 'topic', relationship: 'related', label: 'Cystoscopy' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['cancer', 'oncology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bladderCancer;
