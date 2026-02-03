/**
 * Inflammatory Bowel Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ibd: EducationalContent = {
  id: 'condition-ibd',
  type: 'condition',
  name: 'Inflammatory Bowel Disease',
  alternateNames: ['IBD', 'Crohn\'s Disease', 'Ulcerative Colitis'],
  hpoId: 'HP:0002020',

  levels: {
    1: {
      level: 1,
      summary: 'IBD is a chronic condition that causes inflammation and sores in the digestive tract, leading to abdominal pain, diarrhea, and other symptoms.',
      explanation: `IBD involves long-lasting inflammation in parts of the digestive system. The two main types are Crohn's disease and ulcerative colitis.

**Symptoms:**
- Diarrhea (often with blood)
- Abdominal pain and cramping
- Fatigue
- Weight loss
- Fever

**Difference between types:**
- **Ulcerative colitis:** Affects only the colon (large intestine)
- **Crohn's disease:** Can affect any part of the digestive tract

**Treatment:** Medications to reduce inflammation, dietary changes, sometimes surgery

**Complications:** Can affect other parts of the body including joints, skin, and eyes`,
      keyTerms: [
        { term: 'IBD', definition: 'Inflammatory bowel disease; chronic inflammation of the digestive tract' },
        { term: 'colon', definition: 'The large intestine; the last part of the digestive system' },
        { term: 'inflammation', definition: 'The body\'s response to injury or infection, causing redness, swelling, and pain' },
      ],
      analogies: ['Your digestive tract is like a garden that has weeds growing in it—the inflammation is like the weeds that need to be controlled.'],
      examples: ['A 25-year-old having bloody diarrhea and weight loss for months might have IBD and needs medical evaluation.'],
    },
    2: {
      level: 2,
      summary: 'IBD encompasses Crohn\'s disease and ulcerative colitis, characterized by relapsing-remitting intestinal inflammation managed with anti-inflammatory agents, immunosuppressives, and biologics.',
      explanation: `## Diagnosis
**Laboratory:**
- CBC (anemia, leukocytosis)
- CRP, ESR (inflammatory markers)
- Fecal calprotectin (intestinal inflammation)
- p-ANCA, ASCA antibodies (help differentiate UC vs Crohn)

**Endoscopic:**
- Colonoscopy with biopsy (gold standard)
- Upper endoscopy for Crohn's

**Imaging:**
- CT enterography
- MR enterography

## Ulcerative Colitis vs Crohn's

| Feature | Ulcerative Colitis | Crohn's Disease |
|---------|-------------------|-----------------|
| Location | Colon only | Anywhere (mouth to anus) |
| Pattern | Continuous inflammation | Skip lesions |
| Depth | Mucosal only | Transmural |
| Strictures | Rare | Common |
| Fistulas | No | Yes |

## Treatment Classes
- **Aminosalicylates:** Mesalamine (5-ASA)
- **Corticosteroids:** Prednisone, budesonide (acute flares)
- **Immunomodulators:** Azathioprine, 6-MP
- **Biologics:** Anti-TNF (infliximab), anti-integrin, anti-IL12/23`,
      keyTerms: [
        { term: 'fecal calprotectin', definition: 'Stool test measuring intestinal inflammation' },
        { term: 'biologics', definition: 'Medications made from living cells that target specific parts of the immune system' },
        { term: 'skip lesions', definition: 'Areas of normal tissue between inflamed areas, typical of Crohn\'s disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'IBD pathogenesis involves genetic susceptibility, environmental triggers, dysregulated immune response, and gut microbiome alterations, with treatment guided by disease location, severity, and phenotype.',
      explanation: `## Pathophysiology
- **Genetic:** NOD2 variants (Crohn's), HLA associations (UC)
- **Immune:** Th1/Th17 dysregulation (Crohn's), Th2 (UC)
- **Microbiome:** Dysbiosis, reduced diversity
- **Environmental:** Smoking (protective in UC, harmful in Crohn's), antibiotics, diet

## Disease Classification
**Crohn's Disease:**
- B1: Inflammatory (non-stricturing, non-penetrating)
- B2: Stricturing
- B3: Penetrating (fistulizing)
- Location: L1 (ileal), L2 (colonic), L3 (ileocolonic), L4 (upper GI)

**Ulcerative Colitis:**
- E1: Ulcerative proctitis
- E2: Left-sided (distal to splenic flexure)
- E3: Extensive (pancolitis)

## Treatment Approach
**Mild-moderate UC:** Mesalamine, rectal therapies
**Moderate-severe:** Corticosteroids → steroid-sparing (biologics, immunomodulators)
**Severe fulminant:** IV steroids, infliximab, cyclosporine

**Crohn's:** Biologics earlier in disease course (top-down vs step-up)`,
      keyTerms: [
        { term: 'NOD2', definition: 'Gene associated with Crohn\'s disease affecting bacterial sensing' },
        { term: 'fistula', definition: 'Abnormal connection between two body parts, common in Crohn\'s' },
        { term: 'top-down therapy', definition: 'Early aggressive treatment with biologics vs gradual step-up approach' },
      ],
      clinicalNotes: 'Smoking cessation is crucial—paradoxically worsens Crohn\'s but may improve UC. Treat-to-target approach uses biomarkers and endoscopic healing to guide therapy.',
    },
    4: {
      level: 4,
      summary: 'IBD management employs treat-to-target strategies with mucosal healing as endpoint, incorporates therapeutic drug monitoring, and addresses complications including strictures, fistulas, and dysplasia surveillance.',
      explanation: `## Treat-to-Target Approach
- **Target:** Mucosal healing (Mayo score ≤1, SES-CD <3)
- **Monitoring:** Biomarkers (CRP, fecal calprotectin), symptom scores, endoscopy
- **Adjust:** Escalate therapy if target not met

## Therapeutic Drug Monitoring
**Proactive:** Check trough levels during remission to optimize
**Reactive:** Check with loss of response

- Anti-TNF: Trough >5-10 mcg/mL (infliximab)
- Vedolizumab: Trough >20 mcg/mL
- Ustekinumab: Trough >1 mcg/mL

## Complications Management
**Strictures:**
- Medical: Anti-TNF (inflammatory)
- Endoscopic: Balloon dilation
- Surgical: Resection (stricturoplasty for recurrent)

**Fistulas:**
- Medical: Anti-TNF + antibiotics
- Surgical: Seton placement, advancement flap

**Dysplasia Surveillance:**
- UC: Colonoscopy every 1-3 years
- Crohn's colitis: Same as UC
- Random biopsies or chromoendoscopy with targeted biopsies

## Pregnancy
- Continue most medications (5-ASA, thiopurines, anti-TNF)
- Avoid methotrexate, thalidomide
- Coordinate with MFM`,
      keyTerms: [
        { term: 'mucosal healing', definition: 'Endoscopic remission; absence of visible inflammation' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels and antibodies to optimize dosing' },
        { term: 'chromoendoscopy', definition: 'Dye spraying during colonoscopy to detect dysplasia' },
      ],
      clinicalNotes: 'Loss of response to anti-TNF: check drug level and antibodies. If low level with no antibodies, increase dose. If antibodies present, switch medication.',
    },
    5: {
      level: 5,
      summary: 'Advanced IBD care integrates precision medicine with pharmacogenomics, novel small molecules, JAK inhibitors, combination therapies, and microbiome-based interventions to achieve deep remission and prevent complications.',
      explanation: `## Emerging Therapeutics
**JAK Inhibitors:**
- Tofacitinib (UC approved)
- Upadacitinib (UC and Crohn's approved)
- Filgotinib (Crohn's)

**S1P Receptor Modulators:**
- Ozanimod (UC approved)

**IL-23 Inhibitors:**
- Risankizumab (Crohn's)
- Mirikizumab (UC)
- Guselkumab

**Anti-TNF Biosimilars:** CT-P13, SB2, GP2017

## Precision Medicine Approaches
**Pharmacogenomics:**
- TPMT testing before thiopurines
- NUDT15 testing (Asian populations)
- HLA-DQA1*05 (anti-TNF immunogenicity risk)

**Serologic markers:**
- ASCA, pANCA, anti-OmpC (phenotype prediction)

**Genetic risk scores:** Predict disease course, surgery risk

## Microbiome Therapeutics
- Fecal microbiota transplant (mixed results)
- Defined microbial consortia (investigational)
- Microbiome-based diagnostics

## Combination Strategies
- Combination therapy (biologic + immunomodulator)
- Early biologic for high-risk phenotype
- Endoscopic remission as treatment target
- Histologic remission (deeper than mucosal healing)`,
      keyTerms: [
        { term: 'JAK inhibitor', definition: 'Janus kinase inhibitor; blocks inflammatory signaling pathways' },
        { term: 'S1P modulator', definition: 'Sphingosine-1-phosphate receptor modulator; sequesters lymphocytes' },
        { term: 'histologic remission', definition: 'Absence of microscopic inflammation on biopsy' },
      ],
      clinicalNotes: 'UC treatment algorithm now places JAK inhibitors and S1P modulators after anti-TNF/vedolizumab failure. Risk-benefit assessment crucial for JAK inhibitors (VTE, malignancy risk).',
    },
  },

  media: [],
  citations: [
    { id: 'acg-ibd-2023', type: 'article', title: 'ACG Clinical Guideline: Management of Crohn\'s Disease in Adults', source: 'American Journal of Gastroenterology' },
    { id: 'acg-uc-2023', type: 'article', title: 'ACG Clinical Guideline: Ulcerative Colitis in Adults', source: 'American Journal of Gastroenterology' },
  ],
  crossReferences: [
    { targetId: 'condition-ibs', targetType: 'condition', relationship: 'related', label: 'Irritable Bowel Syndrome' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology'], keywords: ['IBD', 'Crohn\'s', 'ulcerative colitis', 'biologics'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ibd;
