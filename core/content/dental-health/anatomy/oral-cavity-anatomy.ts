/**
 * Oral Cavity Anatomy - Comprehensive Educational Content
 *
 * Covers oral cavity structures, salivary glands, and clinical
 * correlations for dental and medical professionals.
 */

import { EducationalContent } from '../../types';

export const oralCavityAnatomy: EducationalContent = {
  id: 'structure-oral-cavity-anatomy',
  type: 'structure',
  name: 'Oral Cavity Anatomy',
  alternateNames: [
    'Mouth Anatomy',
    'Oral Structures',
    'Buccal Cavity',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The oral cavity is your mouth - the space that includes your teeth, tongue, gums, and the openings for saliva. It is where digestion begins and is important for eating, speaking, and breathing.',
      explanation: `**What is the oral cavity?**

The oral cavity is just a fancy name for your mouth! It's the first part of your digestive system, where food enters and gets broken down.

**Parts of your mouth:**

1. **Lips**: The soft, pink tissue at the opening of your mouth
2. **Teeth**: Hard structures for biting and chewing (see tooth anatomy)
3. **Gums**: Pink tissue that holds your teeth in place
4. **Tongue**: Muscular organ for tasting and moving food
5. **Palate** (roof of mouth):
   - Hard palate: The bony front part
   - Soft palate: The squishy back part
6. **Cheeks**: Form the sides of your mouth
7. **Uvula**: That dangly thing at the back of your throat
8. **Floor of mouth**: Under your tongue

**What does saliva do?**
- Keeps your mouth moist
- Starts digesting food
- Helps you taste
- Protects your teeth
- Fights germs

**Salivary glands make saliva:**
- Glands near your ears (parotid)
- Glands under your jaw (submandibular)
- Glands under your tongue (sublingual)

**Why is your mouth important?**
- Eating and drinking
- Speaking and communicating
- Breathing (when nose is blocked)
- Showing emotions (smiling!)`,
      keyTerms: [
        { term: 'oral cavity', definition: 'The medical term for your mouth' },
        { term: 'palate', definition: 'The roof of your mouth - hard in front, soft in back' },
        { term: 'saliva', definition: 'The watery liquid in your mouth that helps digest food' },
        { term: 'uvula', definition: 'The small, soft tissue hanging at the back of your mouth' },
      ],
      analogies: [
        'Your mouth is like the front door of a house - it\'s where everything enters your body.',
        'Saliva is like dish soap - it helps break down and clean up food.',
        'The hard palate is like a roof that helps you push food around with your tongue.',
      ],
      examples: [
        'When you bite into a sandwich, your lips seal around it, your teeth cut it, and your tongue moves it around.',
        'When your mouth is dry, food tastes less flavorful because saliva helps carry taste to your taste buds.',
      ],
    },
    2: {
      level: 2,
      summary: 'The oral cavity extends from the lips to the oropharynx, divided into vestibule and oral cavity proper. Major structures include the hard and soft palate, tongue, floor of mouth, and major and minor salivary glands producing 1-1.5 L of saliva daily.',
      explanation: `## Oral Cavity Divisions

**1. Oral Vestibule:**
- Space between lips/cheeks and teeth/gums
- Contains parotid duct opening (opposite upper 2nd molar)

**2. Oral Cavity Proper:**
- Bounded by dental arches
- Contains the tongue
- Roof: Hard and soft palate
- Floor: Mylohyoid muscle, sublingual space

## Key Structures

**Hard Palate:**
- Anterior 2/3 of roof
- Bony: Palatine processes of maxilla + horizontal plates of palatine bones
- Covered by keratinized mucosa
- Rugae (ridges) anteriorly

**Soft Palate:**
- Posterior 1/3 of roof
- Muscular, no bone
- Uvula at center
- Moves during swallowing and speech

**Muscles of Soft Palate:**
| Muscle | Action | Innervation |
|--------|--------|-------------|
| Tensor veli palatini | Tenses palate, opens Eustachian tube | V3 |
| Levator veli palatini | Elevates palate | Pharyngeal plexus |
| Palatoglossus | Elevates tongue | Pharyngeal plexus |
| Palatopharyngeus | Elevates pharynx | Pharyngeal plexus |
| Musculus uvulae | Shortens uvula | Pharyngeal plexus |

**Floor of Mouth:**
- Mylohyoid muscle forms diaphragm
- Sublingual caruncles: Openings of submandibular ducts
- Sublingual folds: Openings of sublingual glands
- Contains lingual nerve, Wharton's duct

## Salivary Glands

**Major Salivary Glands:**

| Gland | Type | Duct | Opening | % Saliva |
|-------|------|------|---------|----------|
| Parotid | Serous | Stensen's | Opposite upper 2nd molar | 25% |
| Submandibular | Mixed (serous > mucous) | Wharton's | Sublingual caruncle | 70% |
| Sublingual | Mixed (mucous > serous) | Multiple (Rivinus) | Sublingual fold | 5% |

**Minor Salivary Glands:**
- 600-1000 glands scattered throughout oral mucosa
- Labial, buccal, palatine, lingual
- Produce 10% of saliva

**Saliva Composition:**
- 99.5% water
- Electrolytes: Sodium, potassium, chloride, bicarbonate
- Enzymes: Amylase (starch digestion), lysozyme, lipase
- Proteins: Mucins, immunoglobulins (sIgA), lactoferrin
- pH: 6.2-7.6

**Saliva Functions:**
- Lubrication and protection
- Starch digestion (amylase)
- Antimicrobial (lysozyme, lactoferrin, sIgA)
- Buffering (bicarbonate)
- Taste facilitation
- Enamel remineralization`,
      keyTerms: [
        { term: 'oral vestibule', definition: 'Space between lips/cheeks and teeth/alveolar ridges' },
        { term: 'hard palate', definition: 'Bony anterior 2/3 of palate formed by maxilla and palatine bones' },
        { term: 'soft palate', definition: 'Muscular posterior 1/3 of palate ending in uvula' },
        { term: 'parotid gland', definition: 'Largest salivary gland; purely serous; Stensen\'s duct opens opposite upper 2nd molar' },
        { term: 'submandibular gland', definition: 'Mixed salivary gland producing 70% of saliva; Wharton\'s duct' },
        { term: 'sublingual caruncle', definition: 'Papilla at floor of mouth where submandibular duct opens' },
      ],
      analogies: [
        'The oral vestibule is like a hallway between the front door (lips) and the main room (oral cavity proper).',
        'Salivary glands are like sprinkler systems constantly keeping your mouth moist.',
      ],
    },
    3: {
      level: 3,
      summary: 'Oral cavity histology reveals regional variation in mucosal keratinization. Salivary gland acini (serous vs. mucous) drain via striated and excretory ducts with ionic modification. The oral cavity hosts a complex polymicrobial biofilm community.',
      explanation: `## Oral Mucosa Histology

**Oral Epithelium Types:**

| Region | Type | Keratinization | Function |
|--------|------|----------------|----------|
| Gingiva, hard palate | Masticatory | Keratinized | Withstand friction |
| Lips, cheeks, soft palate | Lining | Non-keratinized | Flexibility |
| Tongue dorsum | Specialized | Variably keratinized | Taste, mechanical |

**Lamina Propria:**
- Dense connective tissue in masticatory mucosa
- Loose connective tissue in lining mucosa
- Rich in blood vessels, nerves, minor salivary glands

**Submucosa:**
- Present in lining mucosa
- Contains minor salivary glands, vessels, nerves
- Absent in attached gingiva and hard palate (mucosa bound to periosteum)

## Salivary Gland Histology

**Acinar Cells:**

*Serous Acini:*
- Pyramidal cells, round basal nuclei
- Prominent zymogen granules (amylase-rich)
- Small lumen
- TEM: Abundant RER, Golgi

*Mucous Acini:*
- Columnar cells, flat basal nuclei
- Pale, foamy cytoplasm (mucin droplets)
- Larger lumen
- Serous demilunes may cap mucous acini

**Duct System:**

| Duct | Epithelium | Function |
|------|------------|----------|
| Intercalated | Cuboidal | Bicarbonate secretion |
| Striated | Columnar (mitochondria-rich) | Na⁺ reabsorption, K⁺ secretion |
| Excretory | Stratified/pseudostratified | Conduit |

**Saliva Modification:**
- Primary secretion: Isotonic, plasma-like
- Ductal modification: Hypotonic final saliva
- Na⁺/K⁺ exchange via basolateral Na⁺/K⁺-ATPase
- Cl⁻/HCO₃⁻ exchange (bicarbonate secretion)

## Salivary Gland Physiology

**Regulation:**
- Parasympathetic (CN VII, IX): Watery, high-flow secretion
- Sympathetic: Viscous, protein-rich secretion

**Parasympathetic Pathway:**
- Facial nerve (CN VII) → submandibular ganglion → submandibular, sublingual
- Glossopharyngeal (CN IX) → otic ganglion → parotid

**Reflex Stimulation:**
- Taste (especially sour, bitter)
- Mastication
- Olfaction
- Conditioned responses (Pavlov)

**Flow Rate:**
- Unstimulated: 0.3-0.4 mL/min
- Stimulated: 1-2 mL/min (up to 7 mL/min maximum)
- Daily production: 0.5-1.5 L

## Oral Microbiome

**Characteristics:**
- >700 species identified
- Site-specific communities
- Biofilm organization

**Key Colonizers:**

| Site | Dominant Species |
|------|------------------|
| Tooth surface | S. mutans, S. sanguinis, Actinomyces |
| Tongue dorsum | Veillonella, Prevotella, S. salivarius |
| Gingival sulcus | Porphyromonas, Fusobacterium |

**Dental Plaque (Biofilm):**
- Initial colonizers: Streptococci, Actinomyces
- Secondary colonizers: Fusobacterium (bridging organism)
- Late colonizers: Gram-negatives, anaerobes
- Maturation: 2-3 weeks for complex community

**Cariogenic Organisms:**
- S. mutans: Acid production, aciduric
- Lactobacillus: Caries progression
- Bifidobacterium: Deep caries

**Periodontal Pathogens (Red Complex):**
- Porphyromonas gingivalis
- Tannerella forsythia
- Treponema denticola`,
      keyTerms: [
        { term: 'masticatory mucosa', definition: 'Keratinized oral mucosa of gingiva and hard palate resistant to mechanical forces' },
        { term: 'serous acini', definition: 'Salivary gland secretory units producing watery, enzyme-rich (amylase) secretion' },
        { term: 'mucous acini', definition: 'Salivary gland secretory units producing viscous, mucin-rich secretion' },
        { term: 'striated duct', definition: 'Salivary duct segment with basal striations; modifies electrolyte composition' },
        { term: 'oral biofilm', definition: 'Structured microbial community adherent to oral surfaces; dental plaque' },
        { term: 'serous demilune', definition: 'Crescent-shaped cap of serous cells over mucous acini' },
      ],
      clinicalNotes: 'Reduced salivary flow (xerostomia) increases caries risk dramatically - check medication list. Striated duct cells are target of Sjogren\'s autoimmune attack. Understanding plaque ecology informs prevention strategies.',
    },
    4: {
      level: 4,
      summary: 'Advanced oral cavity biology encompasses the salivary secretory unit functional anatomy, molecular mechanisms of salivation and xerostomia, oral mucosal immunology, and the integration of oral health with systemic disease risk assessment.',
      explanation: `## Salivary Gland Molecular Physiology

**Salivary Secretory Unit:**
- Acinus + myoepithelial cells + duct system
- Fluid secretion: Chloride-driven
- Protein secretion: Regulated exocytosis

**Acinar Fluid Secretion Mechanism:**

1. Basolateral Na⁺/K⁺/2Cl⁻ cotransporter (NKCC1) - Cl⁻ uptake
2. Basolateral K⁺ channels - K⁺ recycling
3. Apical Cl⁻ channels (ANO1/TMEM16A) - Cl⁻ secretion
4. Paracellular Na⁺ and H₂O movement
5. Aquaporin-5 (apical) - H₂O transport

**Muscarinic Signaling:**
- ACh → M3 receptor → Gq → PLC → IP3 + DAG
- IP3 → Ca²⁺ release from ER
- Ca²⁺ → ANO1 activation → Cl⁻ secretion

**Protein Secretion:**
- Sympathetic β-adrenergic → cAMP → exocytosis
- Amylase, mucins, proline-rich proteins, statherins

## Xerostomia - Molecular Mechanisms

**Drug-Induced (Most Common):**
- Anticholinergics: Direct M3 blockade
- Antidepressants (TCAs, SSRIs): Anticholinergic effects
- Antihistamines: H1 and muscarinic blockade
- Diuretics: Volume depletion
- Antihypertensives

**Sjogren's Syndrome:**
- Autoimmune destruction of exocrine glands
- CD4+ T cell infiltration of salivary tissue
- Anti-Ro (SS-A) and Anti-La (SS-B) antibodies
- Aquaporin-5 redistribution from apical membrane

**Radiation-Induced:**
- Serous acini radiosensitive (early loss)
- Mucous acini more resistant
- Fibrosis and atrophy
- IMRT spares contralateral gland

**Management:**
| Intervention | Mechanism |
|-------------|-----------|
| Pilocarpine | Muscarinic agonist |
| Cevimeline | M1/M3 selective agonist |
| Artificial saliva | Symptom relief |
| Sugar-free gum | Stimulates remaining function |

## Oral Mucosal Immunology

**MALT/NALT Components:**
- Waldeyer's ring: Palatine, lingual, pharyngeal, tubal tonsils
- Minor lymphoid aggregates in oral mucosa

**First Line Defense:**
- Epithelial barrier
- Saliva: sIgA, lysozyme, lactoferrin, histatins, defensins
- Antimicrobial peptides from epithelial cells

**Immune Cell Populations:**
- Langerhans cells (intraepithelial APCs)
- Dendritic cells (lamina propria)
- T cells: CD4+, CD8+, γδ T cells
- Plasma cells: IgA production

**Tolerance vs. Inflammation:**
- Oral tolerance: Default tolerogenic environment
- Constant antigen exposure
- Regulatory T cells
- Breakdown → oral inflammatory diseases

## Oral-Systemic Integration

**Oral Health in Cardiovascular Risk:**
- Periodontitis: Independent CVD risk factor
- Severe periodontitis: 25% higher risk of CVD events
- Mechanisms: Bacteremia, systemic inflammation, molecular mimicry

**Oral Health in Diabetes:**
- Bidirectional relationship
- A1C improvement with periodontal treatment (0.4% reduction)
- Diabetes impairs neutrophil function, increases AGEs

**Oral Health in Pregnancy:**
- Periodontitis associated with preterm birth (OR ~1.6)
- Inflammatory mediators cross placenta
- Safe to treat during pregnancy

**Oral Manifestations of Systemic Disease:**

| Disease | Oral Manifestation |
|---------|-------------------|
| HIV/AIDS | Candidiasis, hairy leukoplakia, Kaposi's sarcoma |
| Diabetes | Candidiasis, periodontitis, xerostomia |
| Crohn's disease | Cobblestone mucosa, aphthous ulcers |
| Sjogren's syndrome | Xerostomia, parotid enlargement |
| Sarcoidosis | Parotid enlargement, gingival nodules |
| Addison's disease | Mucosal hyperpigmentation |
| Kawasaki disease | Strawberry tongue, lip fissuring |

## Clinical Assessment

**Salivary Flow Testing:**
- Unstimulated: <0.1 mL/min = hyposalivation
- Stimulated (chewing): <0.7 mL/min = hyposalivation
- Sialometry for objective measurement

**Oral Cancer Risk Assessment:**
- Visual examination under adequate light
- Palpation of tongue, floor of mouth
- High-risk: Lateral/ventral tongue, floor of mouth
- Any non-healing lesion >2 weeks → biopsy`,
      keyTerms: [
        { term: 'ANO1/TMEM16A', definition: 'Calcium-activated chloride channel on acinar apical membrane; key to fluid secretion' },
        { term: 'aquaporin-5', definition: 'Water channel on salivary acinar apical membrane; redistributed in Sjogren\'s' },
        { term: 'xerostomia', definition: 'Subjective sensation of dry mouth; often due to medications or Sjogren\'s syndrome' },
        { term: 'Waldeyer\'s ring', definition: 'Ring of lymphoid tissue guarding pharynx: palatine, lingual, pharyngeal tonsils' },
        { term: 'oral tolerance', definition: 'Immunological hyporesponsiveness to antigens encountered via oral route' },
        { term: 'secretory IgA', definition: 'Dimeric IgA with secretory component; primary antibody in saliva for mucosal defense' },
      ],
      clinicalNotes: 'Always check medication list for xerostomia - often polypharmacy effect. Pilocarpine requires residual gland function. Anti-Ro and Anti-La antibodies confirm Sjogren\'s but are present in only 60-70% of cases. Oral findings may be first sign of HIV, diabetes, or GI disease.',
    },
    5: {
      level: 5,
      summary: 'Contemporary oral medicine integrates the oral cavity as a diagnostic window for systemic disease, salivary diagnostics for disease biomarkers, precision oral microbiome manipulation, and evidence-based oral-systemic health management protocols.',
      explanation: `## Salivary Diagnostics: The Oral Fluid Biopsy

**Current Clinical Applications:**

| Test | Biomarker | Use |
|------|-----------|-----|
| HIV rapid test | Anti-HIV antibodies | Point-of-care screening |
| Drug testing | Parent drugs, metabolites | Employment, forensic |
| Cortisol | Free cortisol | Stress, Cushing's screening |
| C-reactive protein | CRP | Cardiovascular risk |
| Tumor markers | Pilot studies | Cancer screening research |

**Emerging Applications:**

*Cancer Detection:*
- Oral cancer: Salivary transcriptomics (mRNA markers)
- Breast cancer: Protein biomarkers under investigation
- Pancreatic cancer: Microbiome signatures (preliminary)
- Lung cancer: Volatile organic compounds

*Infectious Disease:*
- SARS-CoV-2: Validated saliva PCR and antigen tests
- HCV antibody detection
- H. pylori: Salivary antibodies

*Metabolic Disease:*
- Glucose monitoring (correlation with blood glucose)
- HbA1c correlation (under development)

**Technical Considerations:**
- Collection method standardization critical
- Stimulated vs. unstimulated saliva
- Circadian variation
- Oral contamination (blood, food)

## Precision Oral Microbiome Management

**Current Understanding:**
- Oral microbiome: Gateway to gut microbiome (1.5 billion bacteria swallowed daily)
- Site-specific communities maintain health
- Dysbiosis underlies caries and periodontal disease

**Therapeutic Approaches:**

*Targeted Antimicrobials:*
- STAMP peptides: Specifically targeted antimicrobial peptides
- Kill S. mutans while sparing commensals
- Phase I/II trials completed

*Probiotic Replacement:*
- S. salivarius K12/M18: Colonize and compete
- L. reuteri: Reduces S. mutans
- Evidence: Moderate for caries reduction

*Prebiotic Modulation:*
- Arginine supplementation: Raises plaque pH
- Nitrate (via oral nitrate-reducing bacteria): Possible BP lowering

*Bacteriophage Therapy:*
- Phages targeting cariogenic bacteria
- Research stage

**Personalized Caries Prevention:**
- Caries risk assessment models
- Microbiome profiling
- Salivary biomarkers (S. mutans count, lactobacilli)
- Tailored fluoride, antimicrobial protocols

## Oral-Systemic Health: Evidence and Guidelines

**Cardiovascular Disease:**

*Evidence Summary:*
- Meta-analyses: OR 1.5-2.0 for CVD with periodontitis
- Interventional studies: Periodontal treatment improves FMD
- Hard endpoint trials ongoing

*Guidelines:*
- AHA: Periodontal disease independent CVD risk marker
- Recommend periodontal evaluation in CVD patients
- No current recommendation for periodontal treatment to prevent CVD

**Diabetes:**

*Evidence Summary:*
- Cochrane review: Periodontal treatment reduces HbA1c 0.4% (3-4 months)
- Similar magnitude to adding second diabetes medication
- Long-term benefits unclear

*Guidelines:*
- ADA: Annual periodontal exam for all diabetics
- AAP/EFP: Inform diabetic patients of oral-systemic connection
- Joint diabetes-periodontal management recommended

**Pregnancy:**

*Evidence Summary:*
- Observational: OR 1.6 for preterm birth with periodontitis
- Interventional: Treatment safe but RCTs show no PTB prevention
- Possible window: Preconception treatment

*Guidelines:*
- ACOG: Oral health assessment at first prenatal visit
- ADA: Dental care safe and recommended during pregnancy
- Periodontal treatment can be performed in pregnancy

**Pneumonia:**

*Evidence Summary:*
- Strong evidence for aspiration of oral bacteria causing pneumonia
- Oral care reduces VAP in ICU (NNT ~15)
- Reduces nursing home-acquired pneumonia

*Guidelines:*
- CDC: Oral hygiene in VAP prevention bundles
- Cochrane: Chlorhexidine reduces VAP (moderate certainty)

## Oral Health Screening in Primary Care

**Recommended Assessments:**
1. Visual examination of oral cavity
2. Screening questions for symptoms
3. Risk factor identification
4. Referral criteria

**High-Risk Populations:**
- Diabetics
- Cardiovascular disease
- Pregnant women
- Immunocompromised
- Elderly
- Smokers

**Red Flags Requiring Referral:**
- Non-healing ulcer >2 weeks
- Unexplained tooth mobility
- Persistent bad breath
- Bleeding gums
- Loose dentures
- Difficulty swallowing

## Future Directions

**Salivary Exosome Analysis:**
- Exosomal miRNA for cancer detection
- Neurodegenerative disease biomarkers
- Liquid biopsy concept

**Oral Microbiome Transplantation:**
- Conceptual: Replace dysbiotic community
- Technical challenges: Establishing colonization
- Ethical/regulatory considerations

**AI in Oral Diagnosis:**
- Image analysis for oral cancer screening
- Caries detection algorithms
- Periodontal risk prediction

**Regenerative Approaches:**
- Salivary gland regeneration for xerostomia
- Tissue engineering of oral mucosa
- Stem cell therapies for periodontium`,
      keyTerms: [
        { term: 'salivary diagnostics', definition: 'Use of saliva as diagnostic fluid for biomarkers; non-invasive, point-of-care potential' },
        { term: 'STAMP peptides', definition: 'Specifically targeted antimicrobial peptides designed to selectively kill pathogens like S. mutans' },
        { term: 'oral-systemic medicine', definition: 'Field recognizing bidirectional relationships between oral and systemic health' },
        { term: 'ventilator-associated pneumonia (VAP)', definition: 'Hospital-acquired pneumonia in mechanically ventilated patients; reduced by oral care' },
        { term: 'salivary exosomes', definition: 'Extracellular vesicles in saliva containing proteins and RNA; emerging biomarker source' },
        { term: 'caries risk assessment', definition: 'Systematic evaluation of biological, behavioral, and clinical factors predicting caries development' },
      ],
      clinicalNotes: `Key clinical integration points:
1. Consider oral exam as part of comprehensive medical evaluation - mouth reflects systemic health
2. All diabetic patients need annual periodontal referral - treatment may improve glycemic control
3. Oral care protocols reduce VAP in ICU - implement comprehensive oral hygiene
4. Pregnant patients: Dental care is safe and recommended - address early
5. Non-healing oral ulcers >2 weeks need biopsy - don't miss oral cancer
6. Salivary HIV testing is validated - acceptable alternative to serum
7. COVID saliva testing is validated when properly performed
8. Medications are #1 cause of xerostomia - review and minimize anticholinergic burden
9. For CVD patients, periodontal disease is emerging independent risk marker
10. Interdisciplinary collaboration between medicine and dentistry improves outcomes`,
    },
  },

  media: [
    {
      id: 'oral-cavity-overview',
      type: 'diagram',
      filename: 'oral-cavity-anatomy.svg',
      title: 'Oral Cavity Anatomy',
      description: 'Overview of oral cavity structures and landmarks',
    },
    {
      id: 'salivary-glands',
      type: 'diagram',
      filename: 'salivary-glands-diagram.svg',
      title: 'Major Salivary Glands',
      description: 'Location and drainage of parotid, submandibular, and sublingual glands',
    },
  ],

  citations: [
    {
      id: 'gray-anatomy-oral',
      type: 'textbook',
      title: 'Gray\'s Anatomy',
      chapter: 'Oral Cavity',
      source: 'Elsevier',
    },
    {
      id: 'oral-systemic-review',
      type: 'article',
      title: 'Oral-Systemic Health: Recent Advances',
      source: 'Journal of Dental Research',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'child', label: 'Tooth Anatomy' },
    { targetId: 'structure-tongue-anatomy', targetType: 'structure', relationship: 'child', label: 'Tongue Anatomy' },
    { targetId: 'structure-gum-anatomy', targetType: 'structure', relationship: 'child', label: 'Gum Anatomy' },
    { targetId: 'condition-oral-systemic-health', targetType: 'condition', relationship: 'related', label: 'Oral-Systemic Health' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['oral cavity', 'salivary glands', 'palate'],
    topics: ['anatomy', 'physiology', 'microbiology'],
    keywords: ['oral cavity', 'mouth', 'salivary glands', 'saliva', 'oral microbiome'],
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

export default oralCavityAnatomy;
