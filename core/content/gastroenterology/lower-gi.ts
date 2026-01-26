/**
 * Lower GI Disorders - IBS, IBD, Colitis
 *
 * Covers irritable bowel syndrome, inflammatory bowel disease (Crohn's, ulcerative colitis),
 * and various forms of colitis.
 */

import { EducationalContent } from '../types';

export const lowerGIContent: EducationalContent = {
  id: 'gi-lower-gi-disorders',
  type: 'condition',
  name: 'Lower GI Disorders',
  alternateNames: [
    'IBS',
    'Irritable Bowel Syndrome',
    'IBD',
    'Inflammatory Bowel Disease',
    'Crohn Disease',
    'Ulcerative Colitis',
    'Colitis',
    'Microscopic Colitis',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Lower GI problems affect the large intestine and cause belly pain, bloating, diarrhea, and constipation. Common conditions include IBS, IBD, and colitis.',
      explanation: `**What is the Lower GI Tract?**

The lower GI (gastrointestinal) tract includes your large intestine (colon) and rectum. These organs absorb water from digested food and form stool for elimination.

**Common Lower GI Problems:**

1. **Irritable Bowel Syndrome (IBS)**
   - A common problem causing belly pain, bloating, and changes in bowel habits
   - Symptoms come and go over time
   - Not caused by damage to the intestines
   - Often triggered by stress, certain foods, or hormonal changes

2. **Inflammatory Bowel Disease (IBD)**
   - Long-lasting inflammation of the digestive tract
   - Includes Crohn's disease and ulcerative colitis
   - Caused by the immune system attacking the gut
   - Can cause serious complications if not treated

3. **Ulcerative Colitis**
   - Type of IBD that affects only the colon and rectum
   - Causes ulcers (sores) and inflammation in the digestive tract lining
   - Symptoms include bloody diarrhea, belly pain, and urgency
   - Comes and goes in "flare-ups"

4. **Crohn's Disease**
   - Type of IBD that can affect any part of the digestive tract
   - Most commonly affects the end of the small intestine and beginning of colon
   - Inflammation goes deeper into the bowel wall
   - Can cause narrowing of the intestines

5. **Infectious Colitis**
   - Inflammation of the colon from infection
   - Usually caused by bacteria, viruses, or parasites
   - Often from contaminated food or water
   - Usually resolves on its own or with antibiotics

**What Helps?**
- Avoid foods that trigger symptoms
- Drink plenty of fluids
- Exercise regularly
- Manage stress
- Take prescribed medications regularly`,
      keyTerms: [
        { term: 'IBS', definition: 'Irritable Bowel Syndrome - a common problem causing belly pain and bowel changes' },
        { term: 'IBD', definition: 'Inflammatory Bowel Disease - long-lasting inflammation of the intestines' },
        { term: 'colitis', definition: 'Inflammation of the colon' },
        { term: 'colon', definition: 'The large intestine' },
        { term: 'flare-up', definition: 'When symptoms suddenly get worse' },
      ],
      analogies: [
        'IBS is like a car engine that runs roughly sometimes - the parts look fine, but it does not work smoothly.',
        'IBD is like a forest fire in your intestines - the immune system is causing inflammation and damage.',
        'The colon is like a sponge - it absorbs water from waste before it leaves the body.',
      ],
      examples: [
        'Someone with IBS might have diarrhea when they are stressed about a test.',
        'A person with ulcerative colitis might see blood in the toilet and need to run to the bathroom urgently.',
        'Crohn disease can cause sores in the mouth and problems absorbing nutrients from food.',
      ],
      patientCounselingPoints: [
        'Keep a food diary to identify your trigger foods',
        'Eat smaller, more frequent meals instead of large ones',
        'Drink 6-8 glasses of water daily, more if you have diarrhea',
        'Regular exercise can help reduce stress and improve bowel function',
        'Take your medications exactly as prescribed, even when you feel well',
      ],
    },

    2: {
      level: 2,
      summary: 'Lower GI disorders include IBS (functional disorder), IBD (immune-mediated), and infectious colitis. IBD comprises Crohn disease and ulcerative colitis, which differ in location, depth of inflammation, and complications.',
      explanation: `## Irritable Bowel Syndrome (IBS)

**What is IBS:**
A functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits without structural or biochemical abnormalities.

**Rome IV Diagnostic Criteria:**
- Recurrent abdominal pain, on average, at least 1 day/week in the last 3 months
- Associated with at least two of the following:
  - Related to defecation
  - Associated with a change in frequency of stool
  - Associated with a change in form (appearance) of stool

**IBS Subtypes:**
- **IBS-C:** Constipation-predominant (hard, lumpy stools)
- **IBS-D:** Diarrhea-predominant (loose, watery stools)
- **IBS-M:** Mixed bowel habits
- **IBS-U:** Unclassified

**Symptoms:**
- Abdominal pain or discomfort (often relieved by defecation)
- Bloating and distension
- Altered bowel habits
- Mucus in stool
- Sensation of incomplete evacuation

**Triggers:**
- Certain foods (FODMAPs, gluten, dairy)
- Stress and anxiety
- Hormonal changes (more common in women)
- Gastrointestinal infections (post-infectious IBS)

## Inflammatory Bowel Disease (IBD)

**Overview:**
Chronic, immune-mediated inflammation of the gastrointestinal tract with periods of active disease (flare) and remission.

**Types of IBD:**

| Feature | Ulcerative Colitis | Crohn Disease |
|---------|-------------------|---------------|
| Location | Colon and rectum only | Anywhere from mouth to anus |
| Distribution | Continuous inflammation | Skip lesions (normal areas between) |
| Depth | Mucosa only | Transmural (all layers) |
| Ulcers | Superficial | Deep, linear ("cobblestone") |
| Strictures | Rare (toxic megacolon) | Common (can cause obstruction) |
| Fistulas | Rare | Common |
| Surgical cure | Colectomy is curative | No surgical cure, disease recurs |

**Ulcerative Colitis:**
- Always involves the rectum
- Extends proximally to varying degrees
- Classified by extent:
  - Ulcerative proctitis (rectum only)
  - Left-sided colitis (up to splenic flexure)
  - Extensive colitis (beyond splenic flexure)
  - Pancolitis (entire colon)

**Crohn Disease:**
- Ileocolonic (most common): Terminal ileum and colon
- Colonic: Colon only
- Ileal: Small intestine only
- Upper GI: Stomach and duodenum (rare)
- Perianal disease: Fistulas, fissures, abscesses

**Symptoms:**
- Diarrhea (often bloody in UC)
- Abdominal pain and cramping
- Weight loss
- Fatigue
- Fever (during flares)
- Extra-intestinal manifestations

**Extra-intestinal Manifestations:**
- Joints: Arthritis, ankylosing spondylitis
- Skin: Erythema nodosum, pyoderma gangrenosum
- Eyes: Uveitis, episcleritis
- Liver: Primary sclerosing cholangitis (especially with UC)
- Mouth: Oral ulcers

**Complications:**
- Ulcerative Colitis: Toxic megacolon, perforation, bleeding, colon cancer risk
- Crohn Disease: Strictures, fistulas, abscesses, malnutrition, small bowel cancer risk

## Infectious Colitis

**Causes:**
- Bacterial: Salmonella, Shigella, Campylobacter, E. coli, C. difficile
- Viral: Norovirus, Rotavirus, CMV (in immunocompromised)
- Parasitic: Giardia, Entamoeba histolytica, Cryptosporidium

**Symptoms:**
- Watery or bloody diarrhea
- Abdominal cramps
- Fever
- Nausea and vomiting
- Usually self-limited (days to weeks)

**Risk Factors:**
- Recent antibiotic use (C. difficile)
- Travel to endemic areas
- Contaminated food/water
- Poor sanitation
- Immunocompromised state`,
      keyTerms: [
        { term: 'IBS', definition: 'Irritable Bowel Syndrome - functional GI disorder with pain and bowel changes' },
        { term: 'IBD', definition: 'Inflammatory Bowel Disease - chronic immune-mediated gut inflammation' },
        { term: 'Crohn disease', definition: 'Type of IBD affecting any part of GI tract, transmural inflammation' },
        { term: 'ulcerative colitis', definition: 'Type of IBD affecting only colon, mucosal inflammation' },
        { term: 'flare', definition: 'Period of active disease symptoms' },
        { term: 'remission', definition: 'Period without active symptoms' },
        { term: 'fistula', definition: 'Abnormal connection between body parts (e.g., intestine to bladder)', pronunciation: 'FIST-yoo-lah' },
        { term: 'toxic megacolon', definition: 'Life-threatening dilation of colon due to severe inflammation' },
      ],
      analogies: [
        'In IBS, the "wiring" of the gut is oversensitive, like a car alarm that goes off too easily.',
        'IBD inflammation can be patchy in Crohn disease, like islands of inflammation in a sea of normal tissue.',
      ],
      examples: [
        'A 25-year-old woman with cramping abdominal pain relieved by bowel movements and alternating constipation and diarrhea likely has IBS.',
        'A young man with bloody diarrhea, weight loss, and mouth ulcers may have Crohn disease.',
        'A patient who develops diarrhea after taking antibiotics might have C. difficile colitis.',
      ],
    },

    3: {
      level: 3,
      summary: 'IBS is a functional disorder involving visceral hypersensitivity and brain-gut axis dysfunction. IBD encompasses Crohn disease and ulcerative colitis, distinct immune-mediated conditions with different patterns of inflammation and complications.',
      explanation: `## IBS Pathophysiology

**Brain-Gut Axis Dysfunction:**
- Altered communication between central and enteric nervous systems
- Visceral hypersensitivity (lower pain thresholds)
- Altered gastrointestinal motility
- Post-infectious inflammation (4-30% develop IBS after gastroenteritis)

**Contributing Factors:**
- Genetic predisposition (familial clustering)
- Early life stress and adverse events
- Psychosocial factors (anxiety, depression, somatization)
- Gut microbiota alterations (dysbiosis)
- Low-grade immune activation (mast cells, cytokines)
- Increased intestinal permeability ("leaky gut")

**FODMAP Concept:**
Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols are poorly absorbed short-chain carbohydrates that increase luminal water content and gas production, triggering symptoms.

**Diagnostic Approach:**
- Rome IV criteria (clinical diagnosis)
- Alarm features requiring further evaluation:
  - Age >50 with new symptoms
  - Rectal bleeding
  - Unintentional weight loss
  - Nocturnal symptoms
  - Family history of IBD, celiac disease, or colorectal cancer
- Consider celiac serology (tTG IgA)
- Consider inflammatory markers (CRP, fecal calprotectin)

## IBD Pathophysiology

**Immune Dysregulation:**
- Loss of tolerance to gut microbiota in genetically susceptible host
- Dysregulated innate and adaptive immune responses
- Th1/Th17 polarization in Crohn disease
- Atypical Th2 response in ulcerative colitis

**Genetic Factors:**
- NOD2/CARD15 mutations (Crohn disease)
- ATG16L1, IL23R (autophagy, immune regulation)
- HLA associations (ulcerative colitis)

**Environmental Triggers:**
- Gut microbiota (dysbiosis with reduced diversity)
- Smoking (protective in UC, harmful in Crohn)
- NSAID use
- Antibiotic exposure
- Western diet (high fat, low fiber)
- Urban environment

**Ulcerative Colitis Pathology:**
- Diffuse mucosal inflammation starting at rectum
- Crypt abscesses (neutrophils in crypts)
- Crypt distortion and atrophy
- Ulceration
- Inflammatory infiltrate (neutrophils, lymphocytes, plasma cells)
- Villous atrophy of mucosa

**Crohn Disease Pathology:**
- Transmural inflammation (all layers)
- Skip lesions with normal intervening mucosa
- Granulomas (in 30-50%)
- Linear ulcers creating "cobblestone" appearance
- Submucosal fibrosis and strictures
- Fistula formation (communication with other structures)

**Disease Activity Assessment:**
- UC: Mayo Score, Truelove and Witts Severity Index
- Crohn: Crohn Disease Activity Index (CDAI), Harvey-Bradshaw Index

**Laboratory Markers:**
- Inflammatory: CRP, ESR
- Fecal: Calprotectin, lactoferrin (distinguish IBD from IBS)
- Serologic: ASCA, pANCA (limited clinical utility)
- Antibodies: Anti-TNF levels (for therapeutic monitoring)`,
      keyTerms: [
        { term: 'brain-gut axis', definition: 'Bidirectional communication between CNS and enteric nervous system' },
        { term: 'visceral hypersensitivity', definition: 'Enhanced perception of stimuli from internal organs' },
        { term: 'FODMAP', definition: 'Fermentable carbohydrates that trigger IBS symptoms' },
        { term: 'dysbiosis', definition: 'Alteration in gut microbiota composition and diversity' },
        { term: 'crypt abscess', definition: 'Neutrophil accumulation in intestinal crypts' },
        { term: 'granuloma', definition: 'Collection of immune cells; characteristic of Crohn disease' },
        { term: 'fecal calprotectin', definition: 'Fecal protein marker indicating intestinal inflammation' },
      ],
      clinicalNotes: 'Fecal calprotectin >150 mcg/g suggests IBD; <50 suggests IBS. Smoking cessation is crucial in Crohn disease but may paradoxically worsen ulcerative colitis.',
    },

    4: {
      level: 4,
      summary: 'IBS involves complex interactions between psychological factors, visceral hypersensitivity, and intestinal motility. IBD pathogenesis requires genetic susceptibility, environmental triggers, and immune dysregulation leading to chronic inflammation.',
      explanation: `## Advanced IBS Pathophysiology

**Visceral Hypersensitivity Mechanisms:**
- Peripheral sensitization:
  - Mast cell activation near nerve endings
  - Serotonin (5-HT) signaling alterations (5-HT3, 5-HT4 receptors)
  - TRPV1 receptor upregulation
- Central sensitization:
  - Altered central pain processing
  - Hypervigilance and catastrophizing
  - Anterior cingulate cortex hyperactivation

**Motility and Transit Abnormalities:**
- IBS-C: Delayed colonic transit, increased non-propagating contractions
- IBS-D: Accelerated transit, increased high-amplitude propagating contractions (HAPCs)
- Postprandial motility exaggerated

**Microbiome-Gut-Brain Axis:**
- Reduced microbial diversity in IBS
- Methanobrevibacter smithii (methane producer) associated with constipation
- Bile acid metabolism alterations (diarrhea)
- Short-chain fatty acid profile changes
- Tryptophan metabolism and serotonin synthesis

**Post-Infectious IBS:**
- 4-30% after bacterial gastroenteritis
- Risk factors: female sex, severity of acute illness, prolonged diarrhea, antibiotic use
- Mechanisms: persistent low-grade inflammation, altered immune activation, continued dysbiosis
- Serotonin-containing enterochromaffin cell hyperplasia

**Bile Acid Diarrhea (BAD):**
- Primary: idiopathic, FGF19 deficiency
- Secondary: ileal resection, Crohn disease, cholecystectomy
- Diagnosis: SeHCAT testing (75% retention = abnormal)
- Treatment: Bile acid sequestrants (cholestyramine)

## Advanced IBD Pathogenesis

**Genetic Landscape:**
- >200 susceptibility loci identified
- NOD2: First IBD gene identified, frameshift mutations increase Crohn risk 3-20x
- ATG16L1, IRGM: Autophagy pathway
- IL23R: Th17 immune pathway
- HLA-DRB1*01:03: Ulcerative colitis association
- TNFSF15: Encodes TL1A, promotes Th1 responses

**Epigenetic Factors:**
- DNA methylation changes
- MicroRNA dysregulation (miR-21, miR-146a)
- Histone modifications

**Microbiome in IBD:**
- Reduced diversity (dysbiosis index)
- Depletion of Firmicutes (Faecalibacterium prausnitzii)
- Expansion of Proteobacteria (Escherichia coli)
- Fungal microbiome alterations (Candida, Malassezia)
- Bacteriophage alterations
- Reduced short-chain fatty acid production (butyrate)

**Mucosal Immunology:**

*Ulcerative Colitis:*
- Atypical Th2 response (NKT cells, IL-13, IL-5)
- Epithelial cell apoptosis
- Superficial inflammation limited to mucosa
- α4β7 integrin directs lymphocytes to gut

*Crohn Disease:*
- Th1/Th17 polarization (IL-12, IL-23, IFN-γ, IL-17, TNF-α)
- Transmural inflammation with granulomas
- Paneth cell metaplasia in colon
- Innate immune defects (NOD2, autophagy)

**Fibrosis in IBD:**
- Crohn disease: Progressive stricturing from transmural inflammation
- Mediated by TGF-β, PDGF, CTGF
- Myofibroblast activation
- ECM deposition (collagen, fibronectin)
- Cross-talk between inflammation and fibrosis pathways

**Epithelial Barrier Dysfunction:**
- Tight junction protein alterations (claudins, occludin)
- Increased intestinal permeability (first event in Crohn)
- Mucus layer defects (MUC2 mutations)
- Paneth cell dysfunction (defensin deficiency)
- Goblet cell depletion (UC: mucin thinner)`,
      keyTerms: [
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; pain receptor upregulated in IBS' },
        { term: '5-HT3/5-HT4', definition: 'Serotonin receptors involved in motility and visceral sensation' },
        { term: 'HAPC', definition: 'High-amplitude propagating contraction; propulsive colonic motility pattern' },
        { term: 'FGF19', definition: 'Fibroblast growth factor 19; regulates bile acid synthesis' },
        { term: 'SeHCAT', definition: 'Selenohomocholic acid taurine test for bile acid malabsorption' },
        { term: 'TL1A', definition: 'TNF-like ligand 1A; promotes Th1 inflammation in Crohn disease' },
        { term: 'butyrate', definition: 'Short-chain fatty acid produced by gut bacteria; anti-inflammatory, epithelial fuel' },
      ],
      clinicalNotes: 'IBS-D: Consider bile acid diarrhea if response to conventional therapy inadequate. IBD: Anti-TNF levels should be checked with trough levels before changing dose or drug due to immunogenicity concerns.',
    },

    5: {
      level: 5,
      summary: 'IBS management requires a multimodal approach including dietary modification, neuromodulators, and psychological therapies. IBD treatment employs a step-up or top-down approach using immunomodulators, biologics, and small molecules targeting specific inflammatory pathways.',
      explanation: `## IBS: Evidence-Based Management

**AGA 2021 Guidelines Summary:**

*First-Line Therapies:*

1. **Dietary Modifications:**
   - Low FODMAP diet (Strong recommendation)
   - Gluten restriction (only if testing for celiac)
   - Soluble fiber supplementation (psyllium)

2. **Pharmacotherapy:**

   *IBS-D:*
   - Loperamide PRN (constipation risk)
   - Eluxadoline (mixed opioid agonist/antagonist)
   - Rifaximin 550 mg TID x 14 days (can repeat)
   - Alosetron (restricted program, ischemic colitis risk)
   - Colestyramine (if bile acid diarrhea suspected)

   *IBS-C:*
   - PEG laxatives
   - Linaclotide (guanylate cyclase-C agonist)
   - Plecanatide (guanylate cyclase-C agonist)
   - Lubiprostone (chloride channel activator)
   - Tenapanor (NHE3 inhibitor)

3. **Neuromodulators:**
   - TCAs (amitriptyline 10-50 mg) for pain
   - SSRIs/SNRIs if comorbid anxiety/depression
   - Gabapentinoids (gabapentin, pregabalin) for refractory pain

4. **Psychological Therapies:**
   - CBT (strong evidence)
   - Gut-directed hypnotherapy
   - Mindfulness-based stress reduction
   - Dynamic psychotherapy

**Diagnostic Testing:**
- CRP and/or fecal calprotectin to exclude IBD
- Consider celiac serology (tTG IgA)
- Thyroid studies if indicated
- Consider breath testing for SIBO if bloating predominant

## IBD: Therapeutic Evolution

**Treatment Goals (Treat-to-Target):**
- Clinical remission (symptom-free)
- Endoscopic healing (mucosal healing)
- Transmural healing (for Crohn, assessed by imaging)
- Histologic remission (emerging target)
- Prevention of complications

**Induction vs. Maintenance Therapy:**
- Induction: Achieve remission (corticosteroids, 5-ASAs)
- Maintenance: Sustain remission (immunomodulators, biologics)

**Ulcerative Colitis:**

*Proctitis:*
- Mesalamine suppositories 1 g daily
- Mesalamine enemas 2-4 g if extends to sigmoid
- Oral 5-ASA for more extensive disease

*Left-sided or Extensive:*
- Oral mesalamine 2.4-4.8 g daily
- Add rectal therapy for left-sided
- Corticosteroids for moderate-severe

*Severe/fulminant:*
- Hospitalization, IV steroids
- Infliximab or cyclosporine for steroid-refractory
- Colectomy for toxic megacolon or failure

**Crohn Disease:**

*Mild:*
- Budesonide (ileocecal disease)
- 5-ASA (limited evidence)

*Moderate-severe:*
- Corticosteroids for induction (not maintenance)
- Early immunomodulator/biologic ("top-down") for high-risk features

**Imunomodulators:**
- Thiopurines (azathioprine, 6-MP): Slow onset (weeks), monitoring required
- Methotrexate: Alternative for Crohn disease

**Biologics:**

*Anti-TNF agents:*
- Infliximab: IV, UC and Crohn, rapid onset
- Adalimumab: SC, UC and Crohn
- Certolizumab: SC, Crohn only
- Golimumab: SC, UC only
- Monitor for infection, TB screening before initiation
- Check drug levels and antibodies (therapeutic drug monitoring)

*Anti-integrin:*
- Vedolizumab: Gut-selective α4β7 antagonist
- Natalizumab: α4 integrin (PML risk)

*Anti-IL12/23:*
- Ustekinumab: SC/IV, Crohn and UC
- Effective in anti-TNF failures

*Anti-IL23:*
- Risankizumab: IL-23 specific
- Mirikizumab: IL-23 specific

**Small Molecule Agents:**

*JAK Inhibitors:*
- Tofacitinib: UC (pan-JAK inhibitor)
- Upadacitinib: UC and Crohn (selective JAK1)
- Risks: Infection, VTE, lipid changes

*S1P Modulators:*
- Ozanimod: UC (lymphocyte sequestration)
- Risks: Cardiac, infection, macular edema

**Therapeutic Drug Monitoring:**
- Check trough levels before scheduled dose
- Detect anti-drug antibodies (immunogenicity)
- Reactive (when loss of response) vs. proactive (routine)
- Adjust dose or switch based on levels

**Pregnancy Considerations:**
- Continue most biologics (especially anti-TNF)
- Stop thiopurines and methotrexate
- Coordinate with MFM specialist

**Perianal Crohn Disease:**
- Antibiotics (metronidazole, ciprofloxacin)
- Anti-TNF therapy (setron) - most effective
- Surgical evaluation for abscess drainage
- Seton placement for fistulas`,
      keyTerms: [
        { term: 'treat-to-target', definition: 'Strategy of aiming for objective remission endpoints (endoscopic, histologic)' },
        { term: 'therapeutic drug monitoring', definition: 'Checking drug levels and antibodies to optimize biologic therapy' },
        { term: 'mucosal healing', definition: 'Endoscopic resolution of inflammation; predicts better outcomes' },
        { term: 'top-down therapy', definition: 'Early aggressive therapy with biologics in high-risk IBD' },
        { term: 'pan-JAK inhibitor', definition: 'JAK inhibitor affecting multiple JAK isoforms (tofacitinib)' },
        { term: 'S1P modulator', definition: 'Sphingosine-1-phosphate receptor modulator; sequesters lymphocytes in lymph nodes' },
        { term: 'seton', definition: 'Non-absorbable suture placed through fistula tract for drainage' },
      ],
      clinicalNotes: `Clinical Pearls:
1. IBS: Low FODMAP diet effective in 50-80%; challenge with reintroduction to identify triggers
2. IBS-D: Always consider bile acid diarrhea; 75% SeHCAT retention diagnostic
3. UC: Mesalamine suppositories superior to oral for proctitis; use both for extensive disease
4. Crohn: Early biologic within 2 years reduces complications compared to step-up approach
5. IBD: Vaccinate BEFORE immunosuppression (flu, pneumococcal, HPV, hep A/B, shingles)
6. Anti-TNF: TB screening (quantiferon or PPD) mandatory before initiation
7. Pregnancy: Most biologics safe in pregnancy; continue anti-TNF throughout
8. Perianal Crohn: Anti-TNF most effective; surgical drainage of abscesses first
9. Thiopurines: Check TPMT and NUDT15 before starting; monitor LFTs and CBC
10. PSC-IBD: Colonoscopic surveillance annually due to high CRC risk`,
    },
  },

  media: [
    {
      id: 'ibs-vs-ibd-comparison',
      type: 'diagram',
      filename: 'ibs-vs-ibd.svg',
      title: 'IBS vs IBD Comparison',
      description: 'Comparison of IBS and IBD characteristics and management',
    },
    {
      id: 'uc-vs-crohn',
      type: 'diagram',
      filename: 'uc-vs-crohn.svg',
      title: 'Ulcerative Colitis vs Crohn Disease',
      description: 'Comparison of UC and Crohn disease features',
    },
  ],

  citations: [
    {
      id: 'aga-ibs-2021',
      type: 'article',
      title: 'AGA Clinical Guidelines for the Management of Irritable Bowel Syndrome',
      authors: ['Lacy BE', 'Chey WD'],
      source: 'Gastroenterology 2021',
    },
    {
      id: 'aga-ibd-2023',
      type: 'article',
      title: 'AGA Clinical Guideline: The Management of Moderate to Severe Ulcerative Colitis',
      authors: ['Rubin DT', 'Ananthakrishnan AN', 'Siegel CA'],
      source: 'Gastroenterology 2023',
    },
    {
      id: 'acc-ibd-2021',
      type: 'article',
      title: 'AGA Guideline: Therapeutic Drug Monitoring in IBD',
      authors: ['Feagan BG', 'Levesque BG', 'Sandborn WJ'],
      source: 'Gastroenterology 2021',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gi-infections', targetType: 'condition', relationship: 'related', label: 'GI Infections' },
    { targetId: 'condition-gi-neoplasia', targetType: 'condition', relationship: 'related', label: 'Colorectal Cancer' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'immunology', 'pathology'],
    keywords: ['IBS', 'IBD', 'Crohn', 'colitis', 'ulcerative colitis', 'diarrhea', 'constipation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
