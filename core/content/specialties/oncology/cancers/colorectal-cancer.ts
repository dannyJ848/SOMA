/**
 * Colorectal Cancer Educational Content
 *
 * Comprehensive coverage of colorectal cancer including:
 * - Screening and prevention
 * - Molecular pathways (MSI, CMS subtypes)
 * - Staging and surgical management
 * - Systemic therapy approaches
 */

import { EducationalContent } from '../../../types';

export const colorectalCancerContent: EducationalContent = {
  id: 'oncology-colorectal-cancer',
  type: 'condition',
  name: 'Colorectal Cancer',
  alternateNames: ['Colon cancer', 'Rectal cancer', 'Bowel cancer', 'CRC'],

  levels: {
    1: {
      level: 1,
      summary: 'Colorectal cancer starts in the colon or rectum and is one of the most preventable cancers through screening.',
      explanation: `The colon (large intestine) and rectum are the last parts of your digestive system. Colorectal cancer usually starts as small growths called polyps that can turn into cancer over many years.

**Key Facts:**
- Third most common cancer
- Very preventable through screening
- Usually starts from polyps that can be removed before becoming cancer
- Highly treatable when found early

**Risk Factors:**
- Age over 45
- Family history of colorectal cancer or polyps
- Inflammatory bowel disease (Crohn's, ulcerative colitis)
- Diet high in red/processed meat
- Obesity and inactivity
- Smoking and heavy alcohol use

**Warning Signs:**
- Blood in stool (red or dark)
- Change in bowel habits lasting more than a few days
- Feeling like bowels don't empty completely
- Unexplained weight loss
- Constant tiredness
- Cramping or belly pain
- Many early cancers have NO symptoms

**Screening (Saves Lives!):**
- **Colonoscopy**: Camera looks at entire colon (every 10 years)
- **Stool tests**: Check for hidden blood or cancer DNA
- Start at age 45 for average risk
- Earlier if family history or other risk factors

**Treatment:**
- **Surgery**: Remove the cancer and nearby lymph nodes
- **Chemotherapy**: Kill cancer cells with medicine
- **Radiation**: For rectal cancer
- **Targeted therapy**: For advanced disease

**Prevention:**
- Get screened on schedule
- Eat more fiber, fruits, vegetables
- Limit red and processed meat
- Stay active and maintain healthy weight
- Don't smoke`,
      keyTerms: [
        { term: 'polyp', definition: 'A growth on the lining of the colon that can become cancer' },
        { term: 'colonoscopy', definition: 'A test using a camera to look inside the entire colon' },
        { term: 'stool test', definition: 'A test checking for blood or cancer cells in bowel movements' },
        { term: 'colon', definition: 'The large intestine; last part of the digestive system' },
      ],
      analogies: [
        'Polyps are like weeds in a garden - remove them early before they cause problems.',
        'A colonoscopy is like a plumber using a camera to inspect pipes for problems.',
      ],
      examples: [
        'A 50-year-old woman has her first colonoscopy. The doctor finds and removes two polyps before they can become cancer.',
        'A man notices blood in his stool and sees his doctor right away. An early-stage cancer is found and cured with surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Colorectal cancer develops through the adenoma-carcinoma sequence, with treatment depending on stage and increasingly on molecular features.',
      explanation: `**Anatomy and Pathology:**

*The Colon:*
- Right (ascending) colon: Absorbs water and nutrients
- Transverse colon: Crosses the abdomen
- Left (descending) colon: Stores stool
- Sigmoid and rectum: Final passage

*How Cancer Develops:*
- Normal → Polyp → Dysplasia → Cancer (10-15 years typically)
- Most cancers arise from adenomatous polyps
- Not all polyps become cancer (adenomas > hyperplastic)

**Molecular Subtypes:**

*Two Main Pathways:*
- **Chromosomal instability (CIN)**: ~85% of cases
  - APC → KRAS → TP53 mutations
  - Most sporadic cancers
- **Microsatellite instability (MSI)**: ~15% of cases
  - Defective DNA mismatch repair
  - Lynch syndrome (hereditary) or sporadic (MLH1 methylation)
  - Better prognosis, responds to immunotherapy

**Staging (TNM):**

*T (Tumor):*
- T1: Into submucosa
- T2: Into muscle layer
- T3: Through muscle into surrounding tissue
- T4: Into other organs or peritoneum

*N (Nodes):*
- N0: No lymph node spread
- N1: 1-3 nodes
- N2: 4+ nodes

*Stage Groups:*
- Stage I: T1-2, N0 (90%+ survival)
- Stage II: T3-4, N0
- Stage III: Any T, N1-2 (lymph node positive)
- Stage IV: Distant metastases (liver, lung common)

**Treatment by Stage:**

*Stage I:*
- Surgery alone (polypectomy may be sufficient for T1)
- Excellent prognosis

*Stage II:*
- Surgery (colectomy)
- Chemotherapy controversial, consider for high-risk features
- MSI-high has good prognosis, may not need chemo

*Stage III:*
- Surgery + adjuvant chemotherapy (FOLFOX or CAPEOX)
- 3-6 months of treatment

*Rectal Cancer:*
- May need radiation (with chemo) before or after surgery
- Total neoadjuvant therapy increasingly used
- Surgery (low anterior resection or APR)

*Stage IV (Metastatic):*
- Chemotherapy backbone (FOLFOX, FOLFIRI)
- Targeted therapy:
  - Anti-VEGF (bevacizumab)
  - Anti-EGFR (cetuximab, panitumumab) - only if RAS wild-type
- Immunotherapy for MSI-high
- Liver/lung metastases may be resectable for cure

**Surveillance After Treatment:**
- Regular CEA blood tests
- CT scans
- Colonoscopy
- Detect recurrence early`,
      keyTerms: [
        { term: 'adenoma', definition: 'A polyp that can become cancer (precancerous)' },
        { term: 'MSI-high', definition: 'Microsatellite instability-high; cancer with DNA repair defects, responds to immunotherapy' },
        { term: 'KRAS mutation', definition: 'Gene change that predicts anti-EGFR therapy will NOT work' },
        { term: 'CEA', definition: 'Carcinoembryonic antigen; blood marker used to monitor colorectal cancer' },
        { term: 'colectomy', definition: 'Surgery to remove part or all of the colon' },
      ],
      analogies: [
        'KRAS mutation is like a locked door - anti-EGFR drugs work by knocking on the door, but if it is locked (mutated), no response.',
        'MSI-high tumors are like cars with broken spell-checkers - they make many mistakes the immune system can recognize.',
      ],
    },
    3: {
      level: 3,
      summary: 'Colorectal cancer management requires molecular profiling for treatment selection, with distinct approaches for colon versus rectal tumors and increasing use of organ preservation strategies.',
      explanation: `**Molecular Characterization:**

*Essential Biomarkers:*
- KRAS/NRAS testing: Required before anti-EGFR therapy
- BRAF V600E: Aggressive biology, specific targeted combinations
- MSI/dMMR: Immunotherapy eligibility, Lynch screening
- HER2: Rare but targetable (~3%)

*Consensus Molecular Subtypes (CMS):*
- CMS1 (MSI-immune): MSI-high, immune activation
- CMS2 (Canonical): WNT/MYC activation, epithelial
- CMS3 (Metabolic): KRAS mutations, metabolic dysregulation
- CMS4 (Mesenchymal): TGF-beta, stromal infiltration, poor prognosis

*Lynch Syndrome Screening:*
- Universal tumor testing for dMMR/MSI
- Germline testing if positive
- MLH1, MSH2, MSH6, PMS2 mutations
- Implications for patient and family

**Colon Cancer Treatment:**

*Localized Disease:*
- Surgical resection with adequate margins
- Minimum 12 lymph nodes for staging
- CME (complete mesocolic excision) technique

*Adjuvant Therapy (Stage III):*
- FOLFOX (5-FU, leucovorin, oxaliplatin) x 6 months
- CAPEOX (capecitabine, oxaliplatin) x 3 months
- IDEA: 3 months may suffice for low-risk stage III
- 6 months for high-risk (T4, N2)

*Stage II Considerations:*
- High-risk features: T4, lymphovascular invasion, inadequate nodes, poorly differentiated, obstruction/perforation
- dMMR/MSI-H: Generally omit chemotherapy (good prognosis)
- Oncotype DX Colon: May guide decisions

**Rectal Cancer (Distinct Management):**

*Total Neoadjuvant Therapy (TNT):*
- Chemotherapy (FOLFOX) then chemoradiation OR
- Chemoradiation then chemotherapy
- Increasingly standard for locally advanced

*Short-Course Radiation:*
- 25 Gy in 5 fractions
- Followed by chemotherapy
- Equivalent to long-course chemoRT

*Watch-and-Wait (Organ Preservation):*
- For clinical complete response after neoadjuvant
- Intensive surveillance
- 20-30% regrowth, salvageable
- Selected patients, shared decision-making

*Surgery:*
- Total mesorectal excision (TME) crucial
- Low anterior resection (LAR) vs abdominoperineal resection (APR)
- Sphincter preservation when possible

**Metastatic Disease:**

*Molecular-Driven Treatment:*
- RAS/RAF wild-type, left-sided: FOLFOX/FOLFIRI + anti-EGFR (cetuximab/panitumumab)
- RAS mutant or right-sided: FOLFOX/FOLFIRI + bevacizumab
- BRAF V600E mutant: Encorafenib + cetuximab (later lines)
- MSI-high: First-line pembrolizumab (KEYNOTE-177)
- HER2-amplified: Trastuzumab combinations

*Oligometastatic Disease:*
- Liver-limited: Hepatic resection or ablation (curative intent)
- Lung metastases: Resection if limited
- Perioperative chemotherapy
- 5-year survival 30-50% with resection

*Later Lines:*
- Regorafenib (multi-kinase inhibitor)
- TAS-102 (trifluridine/tipiracil)
- Fruquintinib (VEGFR inhibitor)`,
      keyTerms: [
        { term: 'CMS subtypes', definition: 'Consensus molecular subtypes classifying colorectal cancer biology' },
        { term: 'TNT', definition: 'Total neoadjuvant therapy; all systemic treatment before rectal cancer surgery' },
        { term: 'watch-and-wait', definition: 'Omitting surgery after complete response to neoadjuvant therapy' },
        { term: 'TME', definition: 'Total mesorectal excision; standardized surgical technique for rectal cancer' },
        { term: 'sidedness', definition: 'Left vs right colon location; affects prognosis and treatment response' },
      ],
      clinicalNotes: 'Left-sided RAS wild-type tumors benefit more from anti-EGFR therapy. All stage II-III patients should have MSI testing. BRAF V600E testing required for prognosis and treatment planning.',
    },
    4: {
      level: 4,
      summary: 'Advanced colorectal cancer management requires integration of molecular profiling, circulating tumor DNA monitoring, and increasingly refined treatment sequencing including immunotherapy and targeted combinations.',
      explanation: `**Precision Medicine Evolution:**

*Comprehensive Genomic Profiling:*
- NGS panels for expanded biomarker assessment
- Beyond KRAS/BRAF: NTRK fusions, RET, HER2
- Tumor mutational burden (less predictive than MSI)
- ctDNA for MRD detection

*ctDNA Applications:*
- Post-operative MRD detection
- Risk stratification for adjuvant therapy
- Treatment response monitoring
- CIRCULATE, DYNAMIC trials shaping practice

*Sidedness Biology:*
- Right-sided: CMS1 (MSI), CMS3 (KRAS), more mucinous
- Left-sided: CMS2 (canonical), better prognosis
- Impacts anti-EGFR benefit more than sidedness alone

**Treatment Intensification/De-escalation:**

*Adjuvant Therapy Refinement:*
- IDEA: 3 months for low-risk stage III
- 6 months for T4 or N2 disease
- ctDNA-guided: DYNAMIC, CIRCULATE-Japan
  - MRD-positive: Treat
  - MRD-negative: Consider observation

*Neoadjuvant for Colon Cancer:*
- FOxTROT trial: Neoadjuvant chemotherapy benefit
- Emerging for locally advanced colon cancer
- Pathologic response assessment

**Metastatic Treatment Sequencing:**

*First-Line by Molecular Subtype:*

*MSI-H/dMMR:*
- Pembrolizumab (KEYNOTE-177)
- Significant PFS benefit over chemotherapy
- Durability of responses
- Checkpoint inhibitor first, chemotherapy reserved

*BRAF V600E Mutant:*
- Poor prognosis with standard chemotherapy
- FOLFOXIRI + bevacizumab (if fit)
- Targeted: Encorafenib + cetuximab +/- binimetinib
- BREAKWATER: Encorafenib + cetuximab first-line

*RAS Wild-Type, Left-Sided:*
- Anti-EGFR-based: FOLFOX/FOLFIRI + cetuximab/panitumumab
- Superior OS compared to bevacizumab
- Rechallenge strategy in later lines (if RAS WT maintained)

*RAS Mutant or Right-Sided:*
- Bevacizumab-based regimens
- FOLFOX or FOLFIRI backbone
- Consider FOLFOXIRI in fit patients

*HER2-Amplified:*
- 3-5% of mCRC
- Trastuzumab + pertuzumab (HERACLES)
- Trastuzumab + lapatinib
- Trastuzumab deruxtecan under investigation
- RAS wild-type: Anti-HER2 + anti-EGFR combinations

**Oligometastatic Management:**

*Liver Metastases:*
- Resection remains gold standard for cure
- Portal vein embolization for borderline resectable
- Two-stage hepatectomy for bilobar
- Ablation for unresectable but limited disease
- Hepatic arterial infusion (HAI) chemotherapy in select centers

*Lung Metastases:*
- Resection if liver controlled
- SBRT alternative
- Sequential resections acceptable

*Perioperative Strategy:*
- Systemic therapy before/after resection
- Optimal duration debated
- ctDNA monitoring emerging

**Novel Therapeutic Approaches:**

*Immunotherapy Combinations:*
- Dual checkpoint inhibition for MSI-H
- Combination with chemotherapy in MSS (ongoing trials)
- Tumor vaccines

*ADCs:*
- HER2-directed: T-DXd (investigational in CRC)
- CEACAM5-directed (investigational)

*Bispecific Antibodies:*
- Multiple targets under investigation
- T-cell engagers

**Emerging Biomarkers:**

*Acquired Resistance:*
- RAS mutations emerging on anti-EGFR
- Liquid biopsy monitoring
- Treatment holidays for rechallenge

*Predictive Signatures:*
- Gene expression profiling
- Tumor microenvironment characterization
- Response prediction models`,
      keyTerms: [
        { term: 'FOLFOXIRI', definition: 'Intensive chemotherapy combining 5-FU, leucovorin, oxaliplatin, and irinotecan' },
        { term: 'rechallenge', definition: 'Re-treating with anti-EGFR after treatment break and confirmation of RAS wild-type' },
        { term: 'HAI', definition: 'Hepatic arterial infusion; delivering chemotherapy directly to liver' },
        { term: 'encorafenib', definition: 'BRAF inhibitor used with cetuximab for BRAF V600E mutant CRC' },
        { term: 'MRD', definition: 'Minimal residual disease; detectable ctDNA after curative treatment' },
      ],
      clinicalNotes: 'MSI testing must be done on all mCRC for treatment selection. ctDNA monitoring increasingly integrated into clinical practice. BRAF-mutant CRC requires early consideration of targeted therapy. Multidisciplinary tumor board essential for oligometastatic disease.',
    },
    5: {
      level: 5,
      summary: 'Colorectal cancer treatment is evolving with ctDNA-guided adjuvant decisions, novel immunotherapy approaches for MSS tumors, and increasingly refined molecular stratification across disease stages.',
      explanation: `**MRD-Guided Treatment:**

*ctDNA in Localized Disease:*
- DYNAMIC: ctDNA-guided adjuvant therapy
  - ctDNA-positive: Chemotherapy benefit
  - ctDNA-negative: Can safely observe many patients
- CIRCULATE trials (international)
- Potential to reduce overtreatment in stage II
- Intensify treatment for high-risk MRD-positive

*Technology Considerations:*
- Tumor-informed vs tumor-agnostic assays
- Sensitivity and specificity tradeoffs
- Timing of testing (post-op, during surveillance)
- Integration with imaging

*Clinical Implementation:*
- Not yet standard of care but rapidly evolving
- Select centers offering in practice
- Cost-effectiveness analyses ongoing

**Overcoming Immunotherapy Resistance in MSS:**

*The MSS Challenge:*
- ~85% of CRC is microsatellite stable
- Poor response to single-agent checkpoint inhibitors
- "Immune cold" microenvironment

*Combination Strategies:*
- Chemotherapy + immunotherapy trials
- Radiotherapy + immunotherapy (abscopal effect)
- VEGF inhibition + checkpoint blockade
- Multi-kinase inhibitors + immunotherapy
  - Lenvatinib + pembrolizumab
  - Regorafenib + nivolumab

*Novel Approaches:*
- Oncolytic viruses
- BiTE antibodies (CEA x CD3)
- CAR-T cells targeting CRC antigens
- Vaccines (personalized neoantigen, viral vector)
- TIM-3, LAG-3 inhibitors

*POLE/POLD1 Mutations:*
- Ultra-hypermutated phenotype
- Immunotherapy responsive despite MSS
- Rare (~1%) but important to identify

**Rectal Cancer Paradigm Shift:**

*Organ Preservation Expansion:*
- OPRA trial: Watch-and-wait approach validated
- cCR rates improving with intensified neoadjuvant
- Quality of life benefits
- Careful patient selection essential

*Non-Operative Management:*
- Response assessment: MRI, endoscopy, biopsy
- Surveillance protocols intensive
- Salvage surgery for regrowth
- Long-term outcomes data maturing

*Immunotherapy in Rectal Cancer:*
- NICHE-2: dMMR rectal cancer
- Dostarlimab: Near 100% cCR in dMMR
- Paradigm-shifting for select patients
- MSS rectal cancer combinations ongoing

**Emerging Therapeutic Targets:**

*Actionable Alterations:*
- NTRK fusions: Larotrectinib, entrectinib
- RET fusions: Selpercatinib, pralsetinib
- ALK fusions: Rare, ALK inhibitors
- FGFR alterations: FGFR inhibitors

*ADC Development:*
- Sacituzumab govitecan (TROP2) - trials
- T-DXd (HER2) - expanding indications
- Novel targets in development

*KRAS G12C:*
- Sotorasib + panitumumab (CodeBreaK 101)
- Adagrasib combinations
- Resistance mechanisms emerging
- Pan-KRAS approaches in development

**Peritoneal Metastases:**

*Management Evolution:*
- CRS/HIPEC in selected patients
- Systemic therapy advances
- Pressurized intraperitoneal chemotherapy (PIPAC)
- Patient selection crucial (PCI scoring)

**Clinical Trial Innovation:**

*Adaptive Designs:*
- Umbrella/basket trials
- Biomarker-driven enrollment
- Real-world evidence integration

*Key Ongoing Studies:*
- ctDNA-guided adjuvant (multiple)
- MSS immunotherapy combinations
- Novel targeted agents
- Neoadjuvant intensification

**Survivorship and Quality of Life:**

*Long-term Effects:*
- Oxaliplatin neuropathy management
- Bowel function optimization
- Ostomy care and reversal
- Sexual and urinary function (rectal)

*Surveillance Optimization:*
- Risk-stratified follow-up
- ctDNA vs imaging
- Reducing unnecessary testing
- Detecting curable recurrence

*Genetic Counseling:*
- Lynch syndrome identification
- Family cascade testing
- Cancer prevention in mutation carriers
- Immunotherapy implications`,
      keyTerms: [
        { term: 'tumor-informed assay', definition: 'ctDNA test using patient-specific tumor mutations for detection' },
        { term: 'dostarlimab', definition: 'PD-1 inhibitor showing dramatic response in dMMR rectal cancer' },
        { term: 'CRS/HIPEC', definition: 'Cytoreductive surgery with hyperthermic intraperitoneal chemotherapy for peritoneal disease' },
        { term: 'POLE mutation', definition: 'Polymerase epsilon mutation causing hypermutation, immunotherapy responsive' },
        { term: 'abscopal effect', definition: 'Systemic immune response triggered by local radiation therapy' },
      ],
      clinicalNotes: 'ctDNA-guided treatment is transforming adjuvant decision-making. Dostarlimab results in dMMR rectal cancer represent a paradigm shift. Comprehensive molecular testing should include rare but actionable alterations (NTRK, RET, HER2). Multidisciplinary care and clinical trial enrollment remain essential.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['gastrointestinal', 'digestive'],
    topics: ['oncology', 'colorectal cancer', 'screening', 'immunotherapy'],
    keywords: ['MSI', 'Lynch syndrome', 'KRAS', 'BRAF', 'colonoscopy', 'polyp'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
