/**
 * Inflammatory Bowel Disease - Comprehensive Educational Content
 *
 * Covers Crohn's disease and ulcerative colitis: pathophysiology, clinical presentation,
 * diagnosis, treatment, and complications.
 */

import { EducationalContent } from '../../../types';

export const inflammatoryBowelDisease: EducationalContent = {
  id: 'condition-inflammatory-bowel-disease',
  type: 'condition',
  name: 'Inflammatory Bowel Disease',
  alternateNames: [
    'IBD',
    'Crohn\'s Disease',
    'Ulcerative Colitis',
    'UC',
    'CD',
    'Regional Enteritis',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'IBD is when your immune system mistakenly attacks your digestive system, causing long-lasting inflammation. The two main types are Crohn\'s disease and ulcerative colitis.',
      explanation: `**What is Inflammatory Bowel Disease?**

Your immune system is like an army that protects your body from germs. Sometimes this army gets confused and starts attacking healthy parts of your own body. In IBD, the immune system attacks the digestive system (the tubes that process food).

**The Two Main Types:**

**Crohn's Disease:**
- Can affect any part of the digestive tube from mouth to bottom
- Often affects the end of the small intestine
- The inflammation goes deep into the wall of the intestine
- Can skip areas (healthy spots between sick spots)

**Ulcerative Colitis:**
- Only affects the large intestine (colon) and rectum
- The inflammation is only on the inside lining
- Always starts at the bottom (rectum) and moves upward continuously

**What Does It Feel Like?**

Both types can cause:
- Belly pain and cramps
- Diarrhea (sometimes with blood)
- Needing to go to the bathroom urgently
- Feeling very tired
- Weight loss
- Loss of appetite

**Can It Be Treated?**

Yes! While there's no cure, medicines can help calm down the inflammation and let people live normal lives. Some medications work like a "peace treaty" that tells the immune system to stop attacking.`,
      keyTerms: [
        { term: 'inflammatory bowel disease', definition: 'A group of conditions where the immune system attacks the digestive system' },
        { term: 'Crohn\'s disease', definition: 'A type of IBD that can affect any part of the digestive system' },
        { term: 'ulcerative colitis', definition: 'A type of IBD that only affects the large intestine' },
        { term: 'inflammation', definition: 'Redness, swelling, and pain caused by the body\'s defense system' },
        { term: 'colon', definition: 'The large intestine - the last part of your digestive system before waste leaves your body' },
      ],
      analogies: [
        'Your immune system is like a security guard that gets confused and starts attacking the people it\'s supposed to protect.',
        'In Crohn\'s disease, the inflammation is like patchy spots of damage on a road, while in ulcerative colitis, it\'s like continuous damage starting from one end.',
        'The intestine wall is like a layered cake - Crohn\'s affects all layers, but ulcerative colitis only affects the frosting on top.',
      ],
      examples: [
        'Someone with Crohn\'s might have pain in their lower right belly because that\'s where the small intestine meets the large intestine.',
        'A person with ulcerative colitis might rush to the bathroom many times a day and see blood when they go.',
      ],
    },
    2: {
      level: 2,
      summary: 'IBD involves chronic intestinal inflammation from inappropriate immune responses. Crohn\'s disease causes transmural, skip lesions anywhere in the GI tract, while ulcerative colitis causes continuous superficial inflammation limited to the colon.',
      explanation: `## Understanding Inflammatory Bowel Disease

IBD represents chronic inflammatory conditions of the gastrointestinal tract caused by an abnormal immune response in genetically susceptible individuals.

### Crohn's Disease

**Location:**
- Can affect anywhere from mouth to anus
- Most commonly affects terminal ileum (end of small intestine)
- Often involves ileocecal region (where small and large intestine meet)

**Key Features:**
- **Transmural inflammation**: Goes through all layers of the intestinal wall
- **Skip lesions**: Patches of disease with normal areas in between
- **Cobblestone appearance**: Inflamed tissue alternating with deep ulcers
- Can cause fistulas (abnormal tunnels between organs)
- Can cause strictures (narrowing from scarring)

### Ulcerative Colitis

**Location:**
- Limited to colon and rectum only
- Always involves the rectum
- Extends proximally (upward) in a continuous pattern

**Key Features:**
- **Mucosal inflammation**: Only affects inner lining
- **Continuous involvement**: No skip lesions
- Pseudopolyps (islands of healing tissue)
- Crypt abscesses (microscopic feature)

### Clinical Presentation

| Feature | Crohn's Disease | Ulcerative Colitis |
|---------|-----------------|-------------------|
| Abdominal pain | Common, often RLQ | Crampy, pre-defecation |
| Diarrhea | May be non-bloody | Usually bloody |
| Rectal bleeding | Less common | Very common |
| Weight loss | Common | Less common |
| Fistulas | Yes (30%) | No |
| Perianal disease | Common | Rare |

### Extraintestinal Manifestations (affecting other body parts)

- Joints: Arthritis, sacroiliitis
- Skin: Erythema nodosum, pyoderma gangrenosum
- Eyes: Uveitis, episcleritis
- Liver: Primary sclerosing cholangitis (especially UC)

### Diagnosis

- **Colonoscopy with biopsies**: Gold standard
- **CT/MR enterography**: Evaluate small bowel in Crohn's
- **Labs**: Elevated inflammatory markers (CRP, ESR), anemia
- **Stool tests**: Rule out infections, check calprotectin

### Treatment Goals

1. Induce remission (stop active inflammation)
2. Maintain remission (prevent flares)
3. Heal the mucosa (endoscopic healing)
4. Prevent complications`,
      keyTerms: [
        { term: 'transmural', definition: 'Involving all layers of the intestinal wall (mucosa, submucosa, muscularis, serosa)', pronunciation: 'trans-MYUR-al' },
        { term: 'skip lesions', definition: 'Patches of diseased bowel separated by normal segments; characteristic of Crohn\'s disease' },
        { term: 'fistula', definition: 'Abnormal tunnel connecting two body surfaces or organs', pronunciation: 'FIS-tyoo-lah' },
        { term: 'stricture', definition: 'Narrowing of the intestine due to scarring from chronic inflammation' },
        { term: 'calprotectin', definition: 'Protein released by white blood cells; stool levels indicate intestinal inflammation' },
        { term: 'extraintestinal manifestations', definition: 'IBD-related symptoms affecting organs outside the digestive tract' },
      ],
      analogies: [
        'Skip lesions in Crohn\'s are like potholes scattered along a road, while ulcerative colitis is like continuous road damage.',
        'A fistula is like an unauthorized tunnel that someone dug between two buildings.',
        'Calprotectin in stool is like a smoke detector for intestinal inflammation.',
      ],
    },
    3: {
      level: 3,
      summary: 'IBD pathogenesis involves dysregulated mucosal immunity to gut microbiota in genetically susceptible hosts. Crohn\'s features Th1/Th17-mediated transmural granulomatous inflammation, while UC shows Th2-predominant mucosal disease with crypt architectural distortion.',
      explanation: `## IBD Pathophysiology

### Etiology: The Multi-Hit Model

1. **Genetic Susceptibility**
   - >200 IBD-associated genetic loci identified
   - NOD2/CARD15 mutations: Strongest Crohn's association
     - Defective bacterial sensing in intestinal epithelium
     - Impaired Paneth cell function
   - IL-23R variants: Protective and risk alleles for both IBD types
   - Autophagy genes: ATG16L1, IRGM (Crohn's)
   - HLA associations: HLA-DRB1 variants

2. **Environmental Triggers**
   - Smoking: Protective for UC, harmful for Crohn's (important distinction!)
   - Appendectomy: Protective for UC
   - Diet: Western diet, processed foods
   - NSAIDs: Can trigger flares
   - Infections: May initiate or exacerbate disease
   - Early-life antibiotic exposure

3. **Dysbiosis (Altered Microbiome)**
   - Reduced diversity
   - Decreased Firmicutes (especially Faecalibacterium prausnitzii)
   - Increased Proteobacteria (E. coli)
   - Mucus layer defects allowing bacterial contact

4. **Immune Dysregulation**
   - Defective mucosal barrier function
   - Loss of immune tolerance to commensal bacteria
   - Excessive inflammatory cytokine production

### Immunopathology

**Crohn's Disease:**
- Th1/Th17 predominant immune response
- Key cytokines: TNF-alpha, IFN-gamma, IL-12, IL-23, IL-17
- Granuloma formation (non-caseating) - pathognomonic but only in ~30%
- Transmural lymphoid aggregates

**Ulcerative Colitis:**
- Th2-like/atypical Th2 response
- Key cytokines: IL-13, IL-5, IL-4
- Epithelial barrier dysfunction prominent
- Crypt abscesses (neutrophils in crypt lumens)
- Crypt architectural distortion

### Histopathologic Features

| Feature | Crohn's Disease | Ulcerative Colitis |
|---------|-----------------|-------------------|
| Depth | Transmural | Mucosal/submucosal |
| Distribution | Patchy | Continuous, diffuse |
| Granulomas | Present (~30%) | Absent |
| Crypt abscesses | Less common | Characteristic |
| Crypt architecture | Preserved | Distorted/branching |
| Goblet cell depletion | Less prominent | Prominent |

### Disease Classification

**Crohn's Disease - Montreal Classification:**
- Age at diagnosis: A1 (<16), A2 (17-40), A3 (>40)
- Location: L1 (ileal), L2 (colonic), L3 (ileocolonic), L4 (upper GI)
- Behavior: B1 (inflammatory), B2 (stricturing), B3 (penetrating), p (perianal)

**Ulcerative Colitis - Extent:**
- E1: Proctitis (rectum only)
- E2: Left-sided colitis (up to splenic flexure)
- E3: Extensive/pancolitis (beyond splenic flexure)

### Disease Activity Assessment

**Crohn's Disease Activity Index (CDAI):**
- Based on symptoms, physical exam, lab values
- <150: Remission
- 150-220: Mild
- 220-450: Moderate
- >450: Severe

**UC Severity (Mayo Score, Truelove & Witts):**
- Stool frequency, blood, endoscopic findings, physician assessment
- Mild/Moderate/Severe classifications guide therapy`,
      keyTerms: [
        { term: 'NOD2/CARD15', definition: 'Gene encoding intracellular bacterial sensor; mutations strongly associated with Crohn\'s disease' },
        { term: 'non-caseating granuloma', definition: 'Collection of immune cells without central necrosis; pathognomonic for Crohn\'s when present' },
        { term: 'Paneth cells', definition: 'Epithelial cells in small intestinal crypts that secrete antimicrobial peptides (defensins)' },
        { term: 'crypt abscess', definition: 'Collection of neutrophils within intestinal crypt lumen; characteristic of UC' },
        { term: 'Montreal Classification', definition: 'Standardized system for classifying Crohn\'s disease by age, location, and behavior' },
        { term: 'dysbiosis', definition: 'Altered composition of intestinal microbiome associated with disease states' },
      ],
      clinicalNotes: 'Smoking has opposite effects: protective in UC but harmful in Crohn\'s. Always document smoking status. NOD2 mutations are present in ~30% of Crohn\'s patients of European ancestry but are rare in Asian populations, highlighting genetic heterogeneity.',
    },
    4: {
      level: 4,
      summary: 'IBD involves complex interactions between pattern recognition receptor signaling, autophagy pathways, ER stress responses, and mucosal Th17/Treg imbalance. Treatment targets specific inflammatory pathways including TNF, IL-12/23, integrins, and JAK-STAT signaling.',
      explanation: `## Advanced IBD Pathophysiology

### Molecular Mechanisms

**Pattern Recognition and Innate Immunity:**

1. **NOD2 Signaling Pathway:**
   - NOD2 detects muramyl dipeptide (MDP) from bacterial peptidoglycan
   - Activates NF-kappaB and MAPK signaling
   - Loss-of-function mutations (R702W, G908R, L1007fs):
     - Impaired antimicrobial peptide secretion
     - Defective autophagy induction
     - Paradoxically increased inflammation

2. **Autophagy Defects:**
   - ATG16L1 (T300A variant): Impaired xenophagy and Paneth cell function
   - IRGM: Defective bacterial clearance
   - LRRK2: Linked to both CD and Parkinson's disease
   - Result: Accumulation of intracellular bacteria, ER stress

3. **ER Stress and Unfolded Protein Response:**
   - XBP1 mutations: Impaired goblet cell function
   - ORMDL3: ER stress in epithelium
   - Contributes to Paneth cell dysfunction in Crohn's

**Adaptive Immunity:**

**Th17/Treg Axis in Crohn's:**
- IL-23 drives Th17 differentiation and maintenance
- Th17 cells produce IL-17A, IL-17F, IL-22
- IL-17 mediates neutrophil recruitment, tissue damage
- Defective Treg function fails to suppress inflammation
- Therapeutic target: Anti-IL-12/23 (ustekinumab), anti-IL-23 (risankizumab)

**Th2 Response in UC:**
- NKT cells produce IL-13 (cytotoxic to epithelium)
- IL-5 drives eosinophil recruitment
- Epithelial barrier defects with claudin/occludin changes
- Therapeutic target: Anti-TNF, JAK inhibitors

### Therapeutic Targets

**Anti-TNF Agents (Infliximab, Adalimumab, Golimumab, Certolizumab):**
- Mechanism: Neutralize soluble and membrane-bound TNF-alpha
- Induce T cell apoptosis
- Infliximab: Chimeric (mouse/human) mAb
- Adalimumab: Fully human mAb
- Important: Check for latent TB before initiation

**Anti-Integrin Therapy (Vedolizumab):**
- Targets alpha4beta7 integrin on gut-homing lymphocytes
- Blocks interaction with MAdCAM-1 on intestinal endothelium
- Gut-selective = less systemic immunosuppression
- No increased PML risk (unlike natalizumab which targets alpha4beta1)

**Anti-IL-12/23 (Ustekinumab):**
- Binds p40 subunit shared by IL-12 and IL-23
- Blocks both Th1 (IL-12) and Th17 (IL-23) pathways
- Weight-based IV induction, then SC maintenance

**Selective IL-23 Inhibitors (Risankizumab, Guselkumab, Mirikizumab):**
- Target p19 subunit (IL-23 specific)
- Preserve IL-12-dependent Th1 function
- Emerging as highly effective Crohn's therapy

**JAK Inhibitors (Tofacitinib, Upadacitinib, Filgotinib):**
- Small molecule inhibitors of Janus kinases
- Block signaling of multiple cytokines (IL-6, IL-12, IL-23, IFN-gamma)
- Tofacitinib: JAK1/3 inhibitor, approved for UC
- Upadacitinib: JAK1-selective, approved for UC and CD
- Rapid onset of action
- Concerns: Herpes zoster, VTE, cardiovascular events (class warning)

**S1P Receptor Modulators (Ozanimod, Etrasimod):**
- Trap lymphocytes in lymph nodes
- Prevent infiltration into intestinal tissue
- Oral administration
- Approved for UC

### Therapeutic Drug Monitoring

**Anti-TNF Agents:**
- Target trough levels:
  - Infliximab: >5 mcg/mL (some suggest >10 for mucosal healing)
  - Adalimumab: >7.5 mcg/mL
- Anti-drug antibodies predict loss of response
- Algorithm:
  - Low drug, no antibodies: Dose escalate
  - Low drug, high antibodies: Switch within class
  - Adequate drug, symptoms: Switch mechanism

### Disease Complications

**Crohn's Disease:**
- Strictures: Fibrotic (surgical) vs. inflammatory (medical)
- Fistulas: Enteroenteric, enterocutaneous, enterovesical, perianal
- Abscess formation
- Malabsorption (B12 if terminal ileum affected, bile salt diarrhea)
- Nephrolithiasis (oxalate stones)
- Osteoporosis

**Ulcerative Colitis:**
- Toxic megacolon (medical emergency)
- Colorectal cancer (increased risk, especially pancolitis >8 years)
- Primary sclerosing cholangitis (8% of UC patients)`,
      keyTerms: [
        { term: 'MAdCAM-1', definition: 'Mucosal addressin cell adhesion molecule; ligand for alpha4beta7 integrin on gut endothelium' },
        { term: 'p40 subunit', definition: 'Protein subunit shared by IL-12 and IL-23; target of ustekinumab' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels and anti-drug antibodies to optimize biologic therapy' },
        { term: 'xenophagy', definition: 'Selective autophagy of intracellular pathogens; defective in Crohn\'s with ATG16L1 variants' },
        { term: 'unfolded protein response', definition: 'Cellular stress response to ER protein misfolding; dysregulated in IBD' },
        { term: 'alpha4beta7 integrin', definition: 'Lymphocyte surface receptor that mediates gut homing; target of vedolizumab' },
      ],
      clinicalNotes: 'Therapeutic drug monitoring should guide anti-TNF optimization before switching agents. The "treat-to-target" approach aims for mucosal healing rather than symptom control alone. Vedolizumab\'s gut selectivity makes it attractive for patients with prior malignancy or infection concerns.',
    },
    5: {
      level: 5,
      summary: 'Precision medicine in IBD integrates genetic profiling, biomarker-guided therapy selection, and treat-to-target strategies. Emerging therapies exploit novel mechanisms including IL-23p19 blockade, S1P modulation, and combination approaches while considering fibrosis pathways and microbiome manipulation.',
      explanation: `## IBD: Current Frontiers and Clinical Decision-Making

### Precision Medicine Approaches

**Genetic Profiling and Pharmacogenomics:**
- TPMT/NUDT15 testing before thiopurine initiation
- HLA-DQA1*05: Associated with anti-TNF immunogenicity
- NOD2 status may predict ileal Crohn's phenotype
- Polygenic risk scores under development

**Biomarker-Guided Therapy:**

*Predictors of Response:*
- Anti-TNF: Lower baseline CRP, shorter disease duration, no prior biologics
- Vedolizumab: Colon-predominant disease, prior anti-TNF failure less predictive
- Ustekinumab: Ileal involvement may respond well

*Monitoring Targets (STRIDE-II Recommendations):*
- Clinical remission: PRO2 (stool frequency, rectal bleeding)
- Biochemical remission: CRP <5 mg/L, fecal calprotectin <150-250 mcg/g
- Endoscopic healing: SES-CD <3 (Crohn's), Mayo endoscopic score 0-1 (UC)
- Transmural healing (Crohn's): MRE normalization

### Treatment Algorithms

**Induction Phase:**

*Moderate-Severe Crohn's:*
1. First-line: Anti-TNF (infliximab/adalimumab) + immunomodulator OR ustekinumab OR vedolizumab
2. Consider early biologic for high-risk features (perianal, extensive, young age, deep ulcers)
3. Steroids for bridging only (budesonide for ileal/right colon, prednisone for extensive)

*Moderate-Severe UC:*
1. First-line: Anti-TNF, vedolizumab, ustekinumab, tofacitinib, or upadacitinib
2. Ozanimod/etrasimod for oral preference
3. Acute severe UC: IV steroids, infliximab rescue, cyclosporine, or surgery

**Maintenance Strategies:**

*Combination Therapy Considerations:*
- Infliximab + thiopurine: Superior to monotherapy (SONIC trial)
- Adalimumab + thiopurine: Less clear benefit
- Newer biologics: Generally monotherapy; immunomodulators may still reduce immunogenicity

**Treatment Failure Algorithm:**

1. Confirm active inflammation (not fibrosis, infection, or IBS overlap)
2. Optimize current therapy (dose escalation, interval shortening)
3. Measure drug levels and antibodies
4. Consider switching within class vs. mechanism switch
5. Combination biologic therapy (emerging, off-label)

### Emerging Therapies

**Next-Generation IL-23 Inhibitors:**
- Risankizumab: Highest efficacy in pivotal Crohn's trials
- Guselkumab, mirikizumab: Expanding indications
- May become first-line in Crohn's

**Combination Biologic Therapy:**
- Anti-TNF + vedolizumab: Case series showing efficacy
- Anti-TNF + ustekinumab: Used in refractory cases
- Dual biologic trials ongoing

**Novel Targets:**
- TL1A inhibitors (anti-TL1A mAbs): Target inflammation and fibrosis
- Obefazimod (ABX464): Anti-inflammatory miRNA modulator
- PDE4 inhibitors: Oral agents in development
- IL-36 pathway inhibitors

**Microbiome Therapies:**
- Fecal microbiota transplantation: Some efficacy in UC, less clear in CD
- Defined microbial consortia in development
- Diet as therapy: Specific carbohydrate diet, Mediterranean diet

### Surgical Considerations

**Crohn's Disease:**
- Bowel-sparing approaches: Strictureplasty
- Early surgery for limited ileocecal disease may be superior to biologics
- Post-operative recurrence prophylaxis: Thiopurines, anti-TNF based on risk
  - High risk: Smoker, penetrating disease, prior resection

**Ulcerative Colitis:**
- Total proctocolectomy with IPAA (J-pouch): Curative
- Indications: Refractory disease, dysplasia/cancer, acute severe UC failing medical therapy
- Pouchitis: Common complication (up to 50%), usually antibiotic-responsive

### Cancer Surveillance

**Colorectal Cancer Risk:**
- UC: Begins after 8 years of pancolitis
- Crohn's colitis: Similar risk if >1/3 colon involved
- PSC + IBD: Annual surveillance from diagnosis
- Chromoendoscopy preferred over random biopsies

**Surveillance Protocol:**
- High-risk (PSC, prior dysplasia, family hx): Annual colonoscopy
- Standard risk (extensive colitis): Every 1-3 years after 8 years
- Proctitis/left-sided: Surveillance can start later

### Quality Metrics and Practice Standards

**ECCO/AGA Quality Indicators:**
- Document disease extent and behavior
- Assess for latent TB and hepatitis B before biologics
- Bone density screening if steroid exposure
- Vaccination (influenza, pneumococcal, no live vaccines on immunosuppression)
- Colorectal cancer surveillance compliance
- Smoking cessation counseling (especially Crohn's)

**Pregnancy Considerations:**
- Most biologics safe during pregnancy (anti-TNF, vedolizumab, ustekinumab)
- Continue therapy for disease control (flares worse than drug exposure)
- Avoid methotrexate, thiopurines controversial
- Live vaccines delayed in infants exposed to biologics in utero`,
      keyTerms: [
        { term: 'STRIDE-II', definition: 'Updated treat-to-target recommendations defining clinical, biochemical, endoscopic, and transmural healing goals' },
        { term: 'TL1A', definition: 'TNF-like ligand 1A; cytokine involved in inflammation and fibrosis; emerging therapeutic target' },
        { term: 'SONIC trial', definition: 'Landmark study showing infliximab + azathioprine superiority to either monotherapy in Crohn\'s' },
        { term: 'IPAA', definition: 'Ileal pouch-anal anastomosis (J-pouch); surgical option for UC allowing intestinal continuity' },
        { term: 'chromoendoscopy', definition: 'Dye-spray colonoscopy technique improving dysplasia detection in IBD surveillance' },
        { term: 'polygenic risk score', definition: 'Cumulative genetic risk assessment from multiple IBD-associated variants' },
      ],
      clinicalNotes: `Key clinical pearls:
1. "Treat-to-target" with objective endpoints (calprotectin, endoscopy) improves long-term outcomes
2. Early biologic use in high-risk patients ("top-down" approach) may prevent disease progression
3. Drug levels matter: Sub-therapeutic levels predict loss of response; proactive TDM is emerging
4. IL-23 inhibitors (risankizumab) showing highest efficacy in Crohn's trials, reshaping treatment algorithms
5. Combination biologics used off-label for refractory cases but monitor closely for infections
6. For acute severe UC, day 3 CRP and stool frequency predict colectomy risk (Travis criteria)
7. Post-operative Crohn's: Colonoscopy at 6-12 months; modify prophylaxis based on Rutgeerts score
8. PSC-IBD is a distinct phenotype with backwash ileitis, right-sided inflammation, and high cancer risk`,
    },
  },

  media: [
    {
      id: 'ibd-comparison',
      type: 'diagram',
      filename: 'crohns-vs-uc.svg',
      title: 'Crohn\'s Disease vs Ulcerative Colitis',
      description: 'Comparison diagram showing location, depth, and pattern of inflammation',
    },
    {
      id: 'ibd-pathways',
      type: 'diagram',
      filename: 'ibd-immune-pathways.svg',
      title: 'IBD Immune Pathways',
      description: 'Th1/Th17 and Th2 pathways with therapeutic targets',
    },
  ],

  citations: [
    {
      id: 'acg-crohns-2018',
      type: 'article',
      title: 'ACG Clinical Guideline: Management of Crohn\'s Disease in Adults',
      authors: ['Lichtenstein, G.R.', 'Loftus, E.V.', 'Isaacs, K.L.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://journals.lww.com/ajg/fulltext/2018/04000/acg_clinical_guideline__management_of_crohn_s.10.aspx',
    },
    {
      id: 'acg-uc-2019',
      type: 'article',
      title: 'ACG Clinical Guideline: Ulcerative Colitis in Adults',
      authors: ['Rubin, D.T.', 'Ananthakrishnan, A.N.', 'Siegel, C.A.'],
      source: 'American Journal of Gastroenterology',
    },
    {
      id: 'stride-ii',
      type: 'article',
      title: 'STRIDE-II: Update on Therapeutic Targets for Inflammatory Bowel Diseases',
      source: 'Gastroenterology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-colon', targetType: 'structure', relationship: 'related', label: 'Colon Anatomy' },
    { targetId: 'structure-small-intestine', targetType: 'structure', relationship: 'related', label: 'Small Intestine' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'GI Cancers' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
  ],

  tags: {
    systems: ['digestive', 'immune'],
    topics: ['pathology', 'gastroenterology', 'immunology', 'pharmacology'],
    keywords: ['IBD', 'Crohn\'s', 'ulcerative colitis', 'biologics', 'anti-TNF', 'vedolizumab', 'inflammation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default inflammatoryBowelDisease;
