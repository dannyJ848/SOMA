/**
 * Treatment Escalation - COPD Management
 */

import { EducationalContent } from '../../types';

export const TREATMENT_ESCALATION: EducationalContent = {
  id: 'copd-treatment-escalation',
  type: 'concept',
  name: 'COPD Treatment Escalation',
  alternateNames: ['Stepped therapy', 'COPD treatment ladder', 'Therapy intensification'],

  levels: {
    1: {
      level: 1,
      summary: 'When COPD symptoms are not controlled, your doctor may add or change medications to help you breathe better.',
      explanation: `**Why Treatments Change**
COPD can change over time. If your current medications are not working well enough, your doctor may:
- Add new medications
- Change to stronger medications
- Try different combinations

**Signs Your Treatment May Need to Change:**
- More shortness of breath
- More flare-ups (exacerbations)
- Using rescue inhaler more often
- Cannot do activities you used to do

**Treatment Steps:**

*Step 1 - Starting Treatment:*
- Rescue inhaler for quick relief
- Long-acting bronchodilator

*Step 2 - Adding More:*
- May add second long-acting bronchodilator
- Different types that work together

*Step 3 - If Still Not Controlled:*
- May add inhaled steroid
- Usually for people with frequent flare-ups

**Tell Your Doctor:**
- How often you use your rescue inhaler
- If you have had flare-ups
- Activities that are harder to do
- Side effects from medications`,
      keyTerms: [
        { term: 'bronchodilator', definition: 'Medicine that opens up your airways' },
        { term: 'inhaled steroid', definition: 'Medicine that reduces inflammation in your airways' },
        { term: 'rescue inhaler', definition: 'Fast-acting inhaler for quick relief' },
      ],
      analogies: ['Treatment escalation is like climbing stairs - if one step is not high enough to help you breathe well, you move up to the next step.'],
      examples: ['Tom was using one bronchodilator but still felt short of breath. His doctor added a second bronchodilator of a different type, and his breathing improved.'],
    },
    2: {
      level: 2,
      summary: 'COPD treatment escalation follows guideline-based algorithms, adding bronchodilators and inhaled corticosteroids based on symptom burden and exacerbation risk.',
      explanation: `**GOLD Treatment Algorithm:**

*Initial Assessment:*
| Factor | Low Risk | High Risk |
|--------|----------|-----------|
| mMRC/CAT | mMRC 0-1 / CAT <10 | mMRC ≥2 / CAT ≥10 |
| Exacerbations | 0-1 (no hospitalization) | ≥2 or ≥1 hospitalization |

**Treatment Groups:**

| Group | Characteristics | Initial Therapy |
|-------|-----------------|-----------------|
| A | Low symptoms, low risk | Bronchodilator |
| B | More symptoms, low risk | LABA or LAMA |
| E | Any symptoms, high risk | LABA + LAMA (consider ICS if eos ≥300) |

**Escalation Pathway:**

*If Still Symptomatic:*
- Single bronchodilator → Dual bronchodilator (LABA + LAMA)
- Dual bronchodilator → Triple therapy (LABA + LAMA + ICS)

*ICS Considerations:*
- Beneficial if blood eosinophils ≥300
- Consider if ≥100 with exacerbations
- Caution: pneumonia risk

**Non-Pharmacological:**
- Pulmonary rehabilitation
- Smoking cessation
- Vaccinations
- Oxygen if indicated`,
      keyTerms: [
        { term: 'LABA', definition: 'Long-acting beta-agonist bronchodilator' },
        { term: 'LAMA', definition: 'Long-acting muscarinic antagonist bronchodilator' },
        { term: 'ICS', definition: 'Inhaled corticosteroid' },
        { term: 'triple therapy', definition: 'Combination of LABA + LAMA + ICS' },
        { term: 'eosinophils', definition: 'Blood cell count that helps predict ICS response' },
      ],
    },
    3: {
      level: 3,
      summary: 'COPD treatment escalation integrates symptom assessment, exacerbation risk stratification, and biomarker-guided therapy selection following GOLD guideline algorithms.',
      explanation: `**GOLD 2024 Approach:**

*Assessment:*
Symptoms: mMRC ≥2 or CAT ≥10 → More symptomatic
Exacerbations: ≥2 moderate or ≥1 hospitalization → High risk

Groups:
A (low sx, low risk)
B (high sx, low risk)
E (exacerbator - any sx, high risk)

**Pharmacotherapy Escalation:**

*Step 1 - Bronchodilator Monotherapy:*
- LAMA preferred for exacerbation prevention
- LABA alternative

*Step 2 - Dual Bronchodilation:*
- LABA + LAMA
- Superior to monotherapy for symptoms and exacerbations

*Step 3 - Triple Therapy:*
- LABA + LAMA + ICS
- Indicated if exacerbations despite dual bronchodilation
- Blood eosinophils guide ICS addition

**Eosinophil-Guided Therapy:**

| Eosinophil Level | ICS Recommendation |
|------------------|-------------------|
| <100 cells/μL | ICS unlikely to benefit |
| 100-300 cells/μL | Consider if exacerbations |
| ≥300 cells/μL | ICS likely beneficial |

**De-escalation:**
- Consider ICS withdrawal if:
  - No exacerbations on triple therapy
  - Eosinophils <300
  - Pneumonia concerns
  - Requires careful monitoring`,
      keyTerms: [
        { term: 'mMRC', definition: 'Modified Medical Research Council dyspnea scale' },
        { term: 'CAT', definition: 'COPD Assessment Test; symptom questionnaire' },
        { term: 'biomarker-guided therapy', definition: 'Using measurable indicators to guide treatment decisions' },
      ],
      clinicalNotes: 'Blood eosinophils guide ICS decisions - not a mandate. Dual bronchodilation is foundation of pharmacotherapy. Triple therapy reduces exacerbations vs. dual in high-eosinophil patients. Consider de-escalation in stable patients on triple therapy with low eosinophils.',
    },
    4: {
      level: 4,
      summary: 'Advanced COPD management integrates treatable traits, precision phenotyping, and biologic therapies for optimization of individualized treatment escalation.',
      explanation: `**Treatable Traits Approach:**

*Identify and Treat:*
Pulmonary:
- Airflow limitation → Bronchodilators
- Type 2 inflammation → ICS, biologics
- Mucus hypersecretion → Mucolytics
- Infection → Azithromycin, vaccination

Extrapulmonary:
- Skeletal muscle dysfunction → Rehabilitation
- Cardiovascular disease → Appropriate therapy
- Anxiety/depression → Mental health support
- Malnutrition → Nutritional support

**Biologic Therapies:**

*Emerging Options for COPD:*
| Target | Agent | Evidence |
|--------|-------|----------|
| IL-5 | Mepolizumab | Reduces exacerbations in eos-high |
| IL-4/13 | Dupilumab | Phase 3 trials ongoing |
| TSLP | Tezepelumab | Research phase |

*Current Indication:*
- Type 2 high phenotype
- High eosinophils despite triple therapy
- Frequent exacerbations

**Advanced Non-Pharmacological:**

*Interventional:*
- Bronchoscopic lung volume reduction
- Lung volume reduction surgery (selected patients)
- Lung transplant evaluation

*Pulmonary Rehabilitation:*
- Cornerstone of management
- Reduces symptoms and exacerbations
- Improves quality of life`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Identifiable patient characteristics amenable to specific interventions' },
        { term: 'type 2 inflammation', definition: 'Eosinophil-mediated inflammation responsive to specific therapies' },
        { term: 'biologic therapy', definition: 'Targeted treatment using antibodies against specific inflammatory pathways' },
      ],
      clinicalNotes: 'Treatable traits approach personalizes therapy beyond airflow limitation. Biologics emerging for type 2 high COPD with persistent exacerbations. Lung volume reduction options for selected hyperinflated patients. Comprehensive management includes non-pharmacological interventions.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art COPD management leverages multi-omics phenotyping, precision biologics, and integrated care pathways for personalized treatment optimization.',
      explanation: `**Precision COPD Medicine:**

*Multi-Dimensional Phenotyping:*
Clinical: Symptoms, exacerbations, comorbidities
Physiologic: Spirometry, DLCO, volumes
Imaging: CT phenotypes, quantitative analysis
Biomarkers: Eosinophils, periostin, FeNO
Genomics: Susceptibility variants
Microbiome: Airway bacteria/fungi
         ↓
Integrated COPD Phenotype
         ↓
Precision Therapy Selection

**Emerging Therapies:**

*Novel Targets:*
| Target | Mechanism | Status |
|--------|-----------|--------|
| PDE4 | Anti-inflammatory | Available (roflumilast) |
| IL-33/ST2 | Alarmin pathway | Phase 3 |
| CXCR2 | Neutrophil inflammation | Research |
| Epithelial repair | Regeneration | Early research |

**Disease Modification:**

*Concept:*
- Beyond symptom control
- Alter disease trajectory
- Preserve lung function
- Prevent progression

*Potential Approaches:*
- Anti-fibrotic agents
- Stem cell therapies
- Gene therapy
- Regenerative medicine

**Learning Health System:**

*Continuous Optimization:*
- Real-world outcome tracking
- Algorithm refinement
- Personalized prediction
- Best practice integration`,
      keyTerms: [
        { term: 'multi-omics', definition: 'Integration of genomics, proteomics, metabolomics data' },
        { term: 'disease modification', definition: 'Treatment altering natural disease progression' },
        { term: 'alarmin', definition: 'Epithelial-derived cytokine initiating inflammation' },
      ],
      clinicalNotes: 'Multi-omics approaches are research tools evolving toward clinical application. Disease-modifying therapies remain aspirational for most patients. Focus on optimizing currently available evidence-based treatments. Learning health systems enable continuous care improvement.',
    },
  },

  media: [],
  citations: [{ id: 'gold-2024', type: 'article', title: 'GOLD COPD Report 2024', source: 'GOLD' }],
  crossReferences: [{ targetId: 'copd-inhaler-technique', targetType: 'topic', relationship: 'related', label: 'Inhaler Technique' }],
  tags: { systems: ['respiratory'], topics: ['COPD', 'treatment'], keywords: ['COPD treatment', 'escalation', 'GOLD guidelines'], clinicalRelevance: 'critical' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
