/**
 * COPD Pathology - Respiratory Pathology
 *
 * Pathological features of chronic obstructive pulmonary disease
 * including emphysema and chronic bronchitis.
 */

import { EducationalContent } from '../../types';

export const copdPathologyContent: EducationalContent = {
  id: 'pathology-copd',
  type: 'condition',
  name: 'COPD Pathology',
  alternateNames: ['Emphysema Pathology', 'Chronic Bronchitis Pathology', 'Chronic Airflow Obstruction'],

  levels: {
    1: {
      level: 1,
      summary: 'COPD pathology shows damaged airways and air sacs in the lungs, with emphysema destroying alveoli and chronic bronchitis causing inflamed, mucus-filled airways.',
      explanation: `## What Is COPD Pathology?

COPD (Chronic Obstructive Pulmonary Disease) damages the lungs over many years. When doctors look at COPD lungs under a microscope, they see two main problems: damaged air sacs and inflamed airways.

### Two Main Types of Damage

**Emphysema:**
- The walls of air sacs (alveoli) are destroyed
- Small air sacs become big, floppy bags
- Less surface area for oxygen absorption
- Like a stretched-out balloon that cannot shrink back

**Chronic Bronchitis:**
- Airways are inflamed and swollen
- Too much mucus is produced
- Airways become narrow
- Like a clogged drain pipe

### What Causes the Damage?

**Smoking (Most Common):**
- Cigarette smoke harms lung cells
- Destroys protective mechanisms
- Causes inflammation
- Years of exposure add up

**Other Causes:**
- Air pollution
- Chemical fumes
- Dust exposure
- Rare genetic conditions

### What You See Under the Microscope

**In Emphysema:**
- Big, broken air spaces
- Missing walls between alveoli
- Less elastic tissue
- Fewer capillaries

**In Chronic Bronchitis:**
- Thickened airway walls
- More mucus glands
- Inflammatory cells
- Narrowed air passages

### The Result

**Damaged Lungs Cannot:**
- Exchange oxygen well
- Push all air out when exhaling
- Clean themselves properly
- Fight infections effectively

**This Causes:**
- Shortness of breath
- Chronic cough
- Frequent infections
- Limited activity

### Progression
- Damage builds up over years
- Cannot be reversed
- Can be slowed by stopping smoking
- Treatment helps symptoms`,
      keyTerms: [
        { term: 'emphysema', definition: 'Destruction of alveolar walls creating enlarged air spaces' },
        { term: 'chronic bronchitis', definition: 'Long-term inflammation of airways with excess mucus' },
        { term: 'alveoli', definition: 'Tiny air sacs where oxygen enters the blood' },
        { term: 'airway', definition: 'The tubes that carry air in and out of the lungs' },
        { term: 'inflammation', definition: 'Swelling and irritation of tissue' },
      ],
      analogies: [
        'Emphysema is like an old stretched-out elastic waistband - it loses its ability to snap back.',
        'Chronic bronchitis is like a constantly runny nose inside your airways - always making mucus.',
        'Healthy alveoli are like a new sponge with many small holes; emphysema turns them into a few big holes.',
      ],
      examples: [
        'Centrilobular emphysema from smoking affects the center of lung lobules while preserving the periphery.',
        'In chronic bronchitis, the Reid index (gland thickness) increases as mucous glands enlarge.',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD pathology includes emphysema characterized by permanent enlargement of airspaces distal to terminal bronchioles with alveolar wall destruction, and chronic bronchitis with mucous gland hyperplasia and airway inflammation.',
      explanation: `## Emphysema Pathology

### Definition
Permanent abnormal enlargement of airspaces distal to terminal bronchioles, accompanied by destruction of alveolar walls without obvious fibrosis.

### Types of Emphysema

**Centrilobular (Centriacinar):**
- Center of secondary lobule affected
- Respiratory bronchioles primarily involved
- Upper lobe predominance
- Associated with smoking
- Most common type (95%)

**Panlobular (Panacinar):**
- Entire secondary lobule involved
- Uniform destruction
- Lower lobe predominance
- Associated with alpha-1 antitrypsin deficiency

**Paraseptal (Distal Acinar):**
- Distal acinus affected
- Subpleural distribution
- Associated with spontaneous pneumothorax
- Bullae formation common
- May occur with centrilobular

**Irregular (Paracicatricial):**
- Irregular pattern
- Associated with scarring
- Usually asymptomatic
- Industrial dust-related

### Microscopic Features of Emphysema

**Gross Changes:**
- Hyperinflated lungs
- Bullae formation
- Loss of elasticity
- Pale appearance

**Microscopic:**
- Enlarged airspaces
- Destruction of alveolar walls
- Diminished capillary bed
- Loss of elastic fibers
- Small airway collapse

### Chronic Bronchitis Pathology

**Definition:**
Productive cough for at least 3 months per year for 2 consecutive years.

**Macroscopic:**
- Mucosal hyperemia
- Mucus hypersecretion
- Thickened bronchial walls

**Microscopic:**
- Goblet cell hyperplasia
- Mucous gland enlargement
- Reid index >0.4
- Inflammatory infiltrate
- Squamous metaplasia

### Reid Index
- Ratio of mucous gland thickness to bronchial wall thickness
- Normal: <0.4
- Increased in chronic bronchitis
- Measured in large bronchi with cartilage

### Small Airway Disease

**Pathology:**
- Bronchiolitis
- Airway wall thickening
- Peribronchiolar fibrosis
- Mucus plugging
- Smooth muscle hypertrophy

**Significance:**
- Early change in COPD
- Major contributor to airflow obstruction
- Precedes emphysema
- Measurable by CT

### Vascular Changes

**Pulmonary Hypertension:**
- Intimal thickening
- Medial hypertrophy
- Adventitial fibrosis
- Plexiform lesions (severe)
- Cor pulmonale development

### Smoking-Related Changes

**Respiratory Bronchiolitis:**
- Pigmented macrophages
- Mild bronchiolar inflammation
- Smokers without COPD
- May progress to emphysema

**Desquamative Interstitial Pneumonia (DIP):**
- Accumulation of macrophages
- Alveolar filling
- Associated with smoking
- Better prognosis than UIP

### Alpha-1 Antitrypsin Deficiency

**Pathology:**
- Panlobular emphysema
- Basilar predominance
- Early onset
- Liver disease (some)
- Less smoking-related

### Pathogenesis

**Protease-Antiprotease Imbalance:**
- Elastase from neutrophils
- Alpha-1 antitrypsin deficiency
- Matrix metalloproteinases
- Tissue destruction

**Oxidative Stress:**
- Free radicals from smoke
- Oxidant-antioxidant imbalance
- Inflammation amplification
- DNA damage`,
      keyTerms: [
        { term: 'centrilobular emphysema', definition: 'Emphysema affecting the central portion of secondary lobules' },
        { term: 'panlobular emphysema', definition: 'Emphysema affecting the entire secondary lobule uniformly' },
        { term: 'bullae', definition: 'Large air-filled spaces >1 cm from destroyed alveolar walls' },
        { term: 'Reid index', definition: 'Ratio of mucous gland thickness to bronchial wall thickness' },
        { term: 'respiratory bronchiolitis', definition: 'Inflammation of respiratory bronchioles with pigmented macrophages' },
      ],
      analogies: [
        'Centrilobular emphysema is like a donut with the center eaten out - the middle is damaged but edges remain.',
        'Panlobular emphysema is like a uniform sponge that has been evenly compressed throughout.',
        'Small airways in COPD are like a straw that gets narrower and clogged - hard to blow through.',
      ],
      examples: [
        'A patient with alpha-1 antitrypsin deficiency shows panlobular emphysema predominantly in the lower lobes on CT.',
        'Smokers typically develop centrilobular emphysema first in the upper lobes where ventilation is greatest.',
      ],
    },
    3: {
      level: 3,
      summary: 'COPD pathology involves understanding the small airway remodeling, inflammation patterns, mucus dysfunction, vascular changes, and the molecular mechanisms leading to progressive airflow limitation.',
      explanation: `## Small Airway Pathology

### Structural Changes

**Epithelial Changes:**
- Goblet cell hyperplasia
- Squamous metaplasia
- Basement membrane thickening
- Ciliary dysfunction

**Subepithelial Changes:**
- Collagen deposition
- Elastin fragmentation
- Fibroblast activation
- Myofibroblast accumulation

**Airway Smooth Muscle:**
- Hypertrophy
- Hyperplasia
- Altered contractility
- Increased tone

### Inflammation in COPD

**Inflammatory Cells:**
- Macrophages (predominant)
- Neutrophils (acute exacerbations)
- CD8+ T lymphocytes
- Eosinophils (some phenotypes)
- Dendritic cells

**Inflammatory Mediators:**
- TNF-alpha
- IL-8, IL-6
- LTB4
- MMPs (MMP-9, MMP-12)
- Elastase

**Pattern:**
- Increased in small airways
- Correlates with disease severity
- Amplified by smoking
- Persistent after cessation

### Mucus Hypersecretion

**Cellular Changes:**
- Increased goblet cells
- Enlarged submucosal glands
- MUC5AC overexpression
- Mucociliary dysfunction

**Functional Consequences:**
- Airflow obstruction
- Bacterial colonization
- Exacerbations
- Impaired gas exchange

### Emphysema Progression

**Mechanisms of Destruction:**
- Protease-antiprotease imbalance
- Oxidative stress
- Apoptosis of structural cells
- Autoimmune mechanisms
- Defective repair

**Matrix Destruction:**
- Elastin degradation
- Collagen breakdown
- Basement membrane injury
- Capillary loss

### Vascular Pathology

**Pulmonary Arteries:**
- Intimal proliferation
- Medial hypertrophy
- Adventitial thickening
- Muscularization of arterioles

**Capillaries:**
- Loss in emphysema
- Rarefaction
- Abnormal remodeling
- Reduced surface area

### Mucociliary Dysfunction

**Epithelial Injury:**
- Ciliary loss
- Abnormal beat frequency
- Syncopal (shaggy) cilia
- Goblet cell metaplasia

**Periciliary Layer:**
- Dehydration
- Reduced height
- Impaired mucus transport
- Bacterial trapping

### Systemic Features

**Skeletal Muscle:**
- Atrophy
- Oxidative stress
- Mitochondrial dysfunction
- Inflammation

**Cardiovascular:**
- Endothelial dysfunction
- Atherosclerosis
- Increased risk

**Other:**
- Osteoporosis
- Cachexia
- Depression
- Lung cancer risk

### Exacerbation Pathology

**Triggers:**
- Bacterial infection
- Viral infection
- Pollutants
- Unknown

**Pathological Changes:**
- Increased inflammation
- Edema
- Mucus plugging
- Fibrin deposition
- Air trapping

### Alpha-1 Antitrypsin Deficiency

**Pathophysiology:**
- SERPINA1 gene mutations
- Misfolded protein (Z allele)
- Polymerization in liver
- Low circulating levels
- Uninhibited elastase

**Liver Pathology:**
- Periodic acid-Schiff positive globules
- Hepatocyte injury
- Cirrhosis
- Hepatocellular carcinoma risk

### Animal Models

**Elase-Induced:**
- Rapid emphysema
- Reversible
- Research model

**Cigarette Smoke:**
- Progressive changes
- Inflammation
- Emphysema
- Most relevant

**Genetic Models:**
- MMP overexpression
- Antiprotease deficiency
- Mechanistic studies`,
      keyTerms: [
        { term: 'small airway remodeling', definition: 'Structural changes in airways <2 mm causing airflow obstruction' },
        { term: 'protease-antiprotease imbalance', definition: 'Excess enzymes destroying lung tissue relative to protective inhibitors' },
        { term: 'mucociliary dysfunction', definition: 'Impaired clearance of mucus by ciliary action' },
        { term: 'pulmonary hypertension', definition: 'Elevated pressure in pulmonary circulation secondary to lung disease' },
        { term: 'SERPINA1', definition: 'Gene encoding alpha-1 antitrypsin; mutations cause deficiency' },
      ],
      clinicalNotes: 'Small airways (<2 mm diameter) are the major site of airflow obstruction in COPD, contributing up to 80% of resistance in severe disease. These changes begin early and progress before emphysema becomes apparent on imaging.',
    },
    4: {
      level: 4,
      summary: 'Advanced COPD pathology covers the heterogeneity of disease phenotypes, overlap with asthma, carcinogenesis in damaged lungs, bullous disease, and the pathology of acute exacerbations.',
      explanation: `## COPD Phenotypes

**Chronic Bronchitis Predominant:**
- Productive cough
- Frequent exacerbations
- Lower BMI
- Higher mortality
- Mucus hypersecretion prominent

**Emphysema Predominant:**
- Dyspnea predominant
- Barrel chest
- Low DLCO
- Cachexia
- Pink puffer phenotype

**Mixed Pattern:**
- Features of both
- Most common presentation
- Variable imaging
- Combined pathophysiology

### ACOS (Asthma-COPD Overlap Syndrome)

**Features:**
- Persistent airflow limitation
- Features of both diseases
- Eosinophilic inflammation
- Reversibility present
- Atopic features

**Pathology:**
- Emphysema + airway remodeling
- Eosinophils + neutrophils
- Thickened basement membrane
- Variable inflammation

### Lung Cancer in COPD

**Risk:**
- 4-6 fold increased risk
- Independent of smoking
- Field cancerization
- Genetic susceptibility

**Pathological Types:**
- Squamous cell carcinoma (central)
- Adenocarcinoma (peripheral)
- SCLC (aggressive)
- Often multifocal

**Mechanisms:**
- Chronic inflammation
- Oxidative DNA damage
- Impaired DNA repair
- Epigenetic changes

### Bullous Disease

**Definition:**
- Air space >1 cm
- Thin wall (<1 mm)
- Destruction of parenchyma
- Can be single or multiple

**Complications:**
- Spontaneous pneumothorax
- Infection
- Hemorrhage
- Compression of normal lung
- Cor pulmonale

**Pathology:**
- Absent alveolar walls
- Fibrous wall formation
- Inflammation at margins
- Vascular disruption

### Exacerbation Pathology

**Definition:**
- Acute worsening
- Increased dyspnea
- Sputum change
- Hospitalization often needed

**Pathological Findings:**
- Airway edema
- Increased inflammation
- Mucus plugging
- Fibrin deposition
- Air trapping

**Etiological Patterns:**
- Bacterial (Haemophilus, Moraxella)
- Viral (Rhinovirus, influenza)
- Eosinophilic
- Pollutant-related
- Mixed

### Respiratory Bronchiolitis-Interstitial Lung Disease (RB-ILD)

**Features:**
- Smokers
- Ground glass opacities
- Reticulation
- Upper lobe predominance

**Pathology:**
- Pigmented macrophages
- Mild inflammation
- Focal emphysema
- Peribronchiolar

### Pulmonary Hypertension in COPD

**Mechanisms:**
- Hypoxic vasoconstriction
- Vascular remodeling
- Destruction of vessels
- Thrombosis
- In situ thrombosis

**Pathology:**
- Intimal thickening
- Medial hypertrophy
- Plexiform lesions (rare)
- Inflammatory infiltrate

**Cor Pulmonale:**
- Right ventricular hypertrophy
- Right heart failure
- Hepatic congestion
- Edema

### Histological Grading

**Emphysema Severity:**
- Mild: <25% of lung
- Moderate: 25-50%
- Severe: >50%
- Quantitative CT imaging

**Airway Changes:**
- SQAW (Standardized Quantitative Assessment)
- Wall thickness
- Lumen area
- Inflammation score

### Fixation Artifacts

**Importance:**
- Emphysema assessment
- Volume fixation needed
- Inflation methods
- Comparison between samples

**Techniques:**
- Intratracheal fixation
- Formalin steam
- Frozen section limitations
- Radiographic correlation

### Differential Diagnosis

**Asthma:**
- Eosinophils prominent
- Basement membrane thickening
- Smooth muscle hypertrophy
- Little destruction

**Bronchiectasis:**
- Dilated airways
- Suppuration
- Destruction pattern different
- May coexist

**Lymphangioleiomyomatosis:**
- Cystic spaces
- HMB-45 positive cells
- Young women
- Tuberous sclerosis association

**Pulmonary Langerhans Cell Histiocytosis:**
- Nodules and cysts
- CD1a positive cells
- Smoking-related
- Upper lobe`,
      keyTerms: [
        { term: 'ACOS', definition: 'Asthma-COPD overlap syndrome; features of both conditions' },
        { term: 'field cancerization', definition: 'Widespread molecular changes in epithelium increasing cancer risk' },
        { term: 'cor pulmonale', definition: 'Right heart failure secondary to lung disease' },
        { term: 'RB-ILD', definition: 'Respiratory bronchiolitis-associated interstitial lung disease' },
        { term: 'exacerbation', definition: 'Acute worsening of chronic disease' },
      ],
      clinicalNotes: 'The GOLD classification grades COPD severity based on FEV1, but pathological severity may not correlate well with physiology. Emphysema and airway disease contribute differently to symptoms and can coexist in varying proportions.',
    },
    5: {
      level: 5,
      summary: 'Expert COPD pathology integrates molecular mechanisms, biomarkers, advanced imaging-pathology correlations, regenerative approaches, and understanding of accelerated aging and systemic manifestations.',
      explanation: `## Molecular Pathology

**Inflammatory Signaling:**
- NF-kB activation
- STAT pathways
- MAPK signaling
- Inflammasome activation

**Protease Network:**
- MMPs (MMP-9, MMP-12)
- Neutrophil elastase
- Cathepsins
- ADAMs

**Oxidative Stress:**
- Nrf2 pathway
- HO-1 expression
- Glutathione depletion
- Mitochondrial dysfunction

**Epigenetic Changes:**
- DNA methylation
- Histone modifications
- miRNA dysregulation
- Chromatin remodeling

### Genetic Factors

**Alpha-1 Antitrypsin:**
- SERPINA1 variants
- ZZ, SZ, SS genotypes
- Null alleles
- Polymerization

**Other Genes:**
- HHIP (hedgehog)
- FAM13A
- CHRNA3/5
- TNS1
- MMP12

**GWAS Findings:**
- Multiple susceptibility loci
- Smoking interaction
- Ethnic differences
- Functional variants

### Biomarkers

**Inflammatory:**
- CRP
- Fibrinogen
- IL-6, IL-8
- TNF-alpha

**Tissue Destruction:**
- Desmosine (elastin)
- Collagen fragments
- Surfactant protein D
- CC16 (Clara cell)

**Exacerbation:**
- Procalcitonin
- Pro-adrenomedullin
- ST2
- Fibrinogen changes

### Imaging-Pathology Correlation

**CT Phenotypes:**
- Emphysema predominant
- Airway predominant
- Mixed pattern
- Normal CT (early disease)

**Quantitative CT:**
- LAA% (low attenuation area)
- MLD (mean lung density)
- Pi10 (airway wall thickness)
- Volume correction

**Parametric Response Mapping:**
- Functional small airways disease
- Emphysema vs non-emphysema
- Regional assessment
- Progression tracking

### Single-Cell Analysis

**scRNA-seq Findings:**
- Epithelial heterogeneity
- Macrophage subsets
- T cell phenotypes
- Endothelial changes

**Cell-Cell Communication:**
- Ligand-receptor pairs
- Inflammatory networks
- Repair signals
- Disease mechanisms

### Regenerative Approaches

**Stem Cell Therapy:**
- Mesenchymal stem cells
- Endothelial progenitors
- iPSC approaches
- Clinical trials ongoing

**Gene Therapy:**
- Alpha-1 antitrypsin delivery
- SERPINA1 expression
- Vector development
- Long-term expression

**Tissue Engineering:**
- Lung decellularization
- Recellularization
- Bioartificial lungs
- Scaffold development

### Accelerated Aging

**Cellular Senescence:**
- Telomere shortening
- p16 expression
- SA-beta-gal activity
- SASP factors

**Stem Cell Exhaustion:**
- Reduced regenerative capacity
- Progenitor dysfunction
- Impaired repair
- Basal cell changes

**Mitochondrial Dysfunction:**
- Biogenesis impairment
- Dynamics altered
- ROS production
- Quality control

### Systemic Pathology

**Skeletal Muscle:**
- Fiber type shift
- Mitochondrial dysfunction
- Atrophy signaling
- Inflammation

**Cardiovascular:**
- Endothelial dysfunction
- Atherosclerosis
- Arterial stiffness
- Prothrombotic state

**Bone:**
- Osteoporosis
- Vitamin D deficiency
- Inflammation-mediated
- Corticosteroid effect

### Exacerbation Mechanisms

**Bacterial:**
- Colonization to infection
- Biofilm formation
- Antibiotic resistance
- Viral-bacterial interaction

**Viral:**
- Impaired antiviral immunity
- Excessive inflammation
- Tissue damage
- Secondary bacterial

**Eosinophilic:**
- Corticosteroid responsive
- Type 2 inflammation
- Biomarker guided
- Precision therapy

### Research Frontiers

**Precision Medicine:**
- Phenotype stratification
- Endotype identification
- Biomarker-guided therapy
- Targeted treatment

**Anti-Inflammatory Therapies:**
- Monoclonal antibodies
- Kinase inhibitors
- Nrf2 activators
- PDE4 inhibitors

**Lung Repair:**
- Retinoic acid
- Thymosin beta-4
- Growth factors
- Small molecules

**Digital Pathology:**
- AI-assisted quantification
- Automated assessment
- Predictive algorithms
- Standardization

### Quality and Standards

**Tissue Biobanking:**
- Collection protocols
- Fixation standards
- Molecular preservation
- Quality control

**Quantitative Methods:**
- Stereology
- Digital image analysis
- Morphometry
- Reproducibility

**Reporting Standards:**
- Structured reports
- Quantification
- Clinical correlation
- Research integration`,
      keyTerms: [
        { term: 'senescence-associated secretory phenotype', definition: 'Inflammatory mediators released by senescent cells' },
        { term: 'parametric response mapping', definition: 'CT technique distinguishing functional small airways disease from emphysema' },
        { term: 'LAA%', definition: 'Percentage of lung voxels below threshold density; quantitative emphysema measure' },
        { term: 'SERPINA1', definition: 'Gene encoding alpha-1 antitrypsin' },
        { term: 'endotype', definition: 'Disease subtype defined by distinct molecular mechanism' },
      ],
      clinicalNotes: `Key insights in COPD pathology:

1. **Heterogeneity:** COPD is not one disease but multiple pathological processes (emphysema, airway remodeling, vascular disease) that vary between patients.

2. **Small airways:** The major site of airflow obstruction is small airways (<2 mm), where inflammation, remodeling, and mucus plugging cause chronic progressive disease.

3. **Accelerated aging:** COPD shows features of accelerated lung aging including cellular senescence, stem cell exhaustion, and impaired repair mechanisms.

4. **Systemic disease:** COPD pathology extends beyond the lungs to affect skeletal muscle, cardiovascular system, bone, and metabolism.

5. **Alpha-1 deficiency:** All COPD patients should be screened once for alpha-1 antitrypsin deficiency, as specific therapy is available and family screening is important.

6. **Biomarkers:** Emerging biomarkers may help identify exacerbation-prone phenotypes, guide corticosteroid use, and predict disease progression.

7. **Lung cancer:** COPD is an independent risk factor for lung cancer through field cancerization and chronic inflammation even after adjusting for smoking history.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'hogg-small-airways',
      type: 'article',
      title: 'The Pathology of Chronic Obstructive Pulmonary Disease',
      authors: ['Hogg JC', 'Timens W'],
      source: 'Annual Review of Pathology',
    },
    {
      id: 'gold-report',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-emphysema', targetType: 'condition', relationship: 'related', label: 'Emphysema' },
    { targetId: 'histology-bronchial-tree', targetType: 'structure', relationship: 'related', label: 'Bronchial Tree' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pathology', 'pulmonology', 'chronic-disease'],
    keywords: ['COPD', 'emphysema', 'chronic bronchitis', 'airways', 'pathology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default copdPathologyContent;
