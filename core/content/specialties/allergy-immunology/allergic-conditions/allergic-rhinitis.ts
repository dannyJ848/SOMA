import { LegacyEducationalContent } from '../../../types'

export const allergicRhinitis: LegacyEducationalContent = {
  id: 'allergic-rhinitis',
  title: 'Allergic Rhinitis',
  specialty: 'allergy-immunology',
  category: 'allergic-conditions',

  levels: {
    1: {
      title: 'Introduction to Allergic Rhinitis',
      description: 'Basic understanding of hay fever and nasal allergies',
      content: `
# What is Allergic Rhinitis?

Allergic rhinitis, commonly known as hay fever, is an allergic reaction that causes sneezing, runny nose, and other similar symptoms. It occurs when your immune system overreacts to particles in the air that you breathe.

## Common Symptoms

- Sneezing
- Runny or stuffy nose
- Itchy eyes, nose, or throat
- Watery eyes
- Cough
- Fatigue

## Common Triggers

- Pollen from trees, grasses, and weeds
- Dust mites
- Pet dander
- Mold spores

## When to See a Doctor

If your symptoms persist for more than a few weeks or interfere with your daily life, consult a healthcare provider.
      `
    },

    beginner: {
      title: 'Understanding Allergic Rhinitis',
      description: 'Learn about causes, symptoms, and basic management',
      content: `
# Allergic Rhinitis: A Deeper Look

## Pathophysiology

When a person with allergic rhinitis encounters an allergen, their immune system produces IgE antibodies. These antibodies trigger the release of histamine and other inflammatory mediators from mast cells and basophils.

## Types of Allergic Rhinitis

### Seasonal (Hay Fever)
- Triggered by pollen from trees, grasses, and weeds
- Symptoms occur during specific seasons when plants pollinate
- Tree pollen: Spring
- Grass pollen: Late spring and summer
- Weed pollen: Late summer and fall

### Perennial
- Occurs year-round
- Triggers include dust mites, pet dander, mold, and cockroaches
- Indoor allergens are the primary cause

## Diagnosis

- Medical history and symptom patterns
- Physical examination
- Allergy skin testing or specific IgE blood tests
- May include nasal endoscopy or imaging in some cases

## Basic Management

1. **Avoidance**: Identify and avoid triggers when possible
2. **Over-the-counter medications**: Antihistamines, nasal corticosteroids
3. **Environmental controls**: Air purifiers, allergen-proof bedding
      `
    },

    intermediate: {
      title: 'Clinical Management of Allergic Rhinitis',
      description: 'Comprehensive approach to diagnosis and treatment',
      content: `
# Clinical Management of Allergic Rhinitis

## Diagnostic Approach

### Detailed History Taking
- Symptom pattern (seasonal vs. perennial)
- Trigger identification
- Impact on quality of life and sleep
- Comorbid conditions (asthma, sinusitis, eczema)
- Family history of atopy
- Previous treatments and response

### Physical Examination
- Nasal mucosa assessment (pale, boggy, swollen)
- Turbinate hypertrophy
- Presence of nasal polyps
- Ocular findings (allergic shiners, Dennie-Morgan lines)
- Examination for associated conditions

### Diagnostic Testing

**Skin Prick Testing**
- Most common method for IgE-mediated allergy diagnosis
- Results available in 15-20 minutes
- Positive (wheal ≥3mm) indicates sensitization

**Specific IgE (sIgE) Testing**
- Serum testing for allergen-specific antibodies
- Useful when skin testing not possible
- Quantitative results (kU/L)

**Nasal Cytology**
- Eosinophils suggest allergic inflammation
- Neutrophils suggest infection or non-allergic irritation

## Treatment Options

### Pharmacologic Management

**Intranasal Corticosteroids (First-line)**
- Fluticasone, Mometasone, Triamcinolone, Budesonide
- Most effective for nasal congestion
- Take 1-2 weeks for full effect
- Minimal systemic absorption

**Oral and Nasal Antihistamines**
- Second-generation preferred (less sedating)
- Cetirizine, Loratadine, Fexofenadine, Levocetirizine
- Azelastine (nasal) effective for congestion

**Decongestants**
- Oral: Pseudoephedrine, Phenylephrine
- Nasal: Oxymetazoline (limit to 3 days to avoid rebound)
- Avoid in hypertension, BPH

**Leukotriene Receptor Antagonists**
- Montelukast
- Alternative for patients with comorbid asthma
- Less effective than nasal steroids

**Intranasal Ipratropium**
- Helpful for rhinorrhea
- Can be combined with other therapies

### Allergen Immunotherapy

**Indications**
- Inadequate symptom control with medications
- Medication side effects
- Patient preference for disease-modifying treatment
- Duration of symptoms ≥2 years

**Routes**
- Subcutaneous (SCIT) - traditional injections
- Sublingual (SLIT) - tablets or drops

**Duration**
- Typical course: 3-5 years
- Long-term benefits may persist after discontinuation

## Comorbidities to Consider

- **Asthma**: Treat both conditions for optimal control
- **Allergic Conjunctivitis**: Often coexists
- **Chronic Rhinosinusitis**: May require additional management
- **Obstructive Sleep Apnea**: Congestion can worsen symptoms
- **Otitis Media**: Especially in children
      `
    },

    advanced: {
      title: 'Advanced Concepts in Allergic Rhinitis',
      description: 'Complex cases, special populations, and emerging therapies',
      content: `
# Advanced Concepts in Allergic Rhinitis

## Special Populations

### Pediatric Considerations
- Allergic rhinitis is the most common chronic condition in children
- Impact on cognitive function and school performance
- Growth considerations with chronic corticosteroid use
- Age-appropriate dosing for medications
- Early intervention may prevent allergic march

### Pregnancy
- Continue allergen avoidance
- Second-generation antihistamines generally safe (Loratadine, Cetirizine)
- Nasal corticosteroids preferred over systemic therapy
- Immunotherapy: continue maintenance but avoid initiation/dose escalation
- Decongestants generally avoided (vasoconstriction concerns)

### Geriatric Patients
- Increased anticholinergic effects of antihistamines
- Polypharmacy considerations
- Comorbidities may limit treatment options
- Age-related changes in immune response

## Non-Allergic Rhinitis Differential

### Types of Non-Allergic Rhinitis
- **Vasomotor rhinitis**: Triggered by temperature changes, irritants
- **Hormonal rhinitis**: Pregnancy, thyroid disorders, medications
- **Drug-induced rhinitis**: ACE inhibitors, topical decongestant overuse
- **Atrophic rhinitis**: Nasal crusting, foul odor
- **NARES (Non-allergic rhinitis with eosinophilia syndrome)**

### Diagnostic Clues
- Negative allergy testing
- Older age at onset
- Lack of seasonal pattern
- Poor response to standard allergy therapies

## Treatment-Refractory Cases

### Evaluation Steps
1. Confirm diagnosis (review testing)
2. Assess medication adherence and technique
3. Evaluate for ongoing allergen exposure
4. Screen for non-allergic components
5. Consider structural abnormalities (septal deviation, polyps)
6. Rule out systemic diseases (granulomatosis with polyangiitis)

### Advanced Therapeutic Options

**Combination Therapy**
- Nasal steroid + nasal antihistamine superior to monotherapy
- Add montelukast for patients with aspirin-exacerbated respiratory disease

**Biologics (Emerging)**
- Omalizumab (anti-IgE): Approved for chronic idiopathic urticaria, used off-label for severe allergic rhinitis
- Dupilumab (anti-IL-4/13): Being studied for allergic conditions

**Surgical Interventions**
- Septoplasty for septal deviation
- Turbinate reduction (radiofrequency, submucosal resection)
- Endoscopic sinus surgery for chronic rhinosinusitis
- Polypectomy for nasal polyposis

## Local Allergic Rhinitis (LAR)

**Definition**
- Nasal symptoms with allergen exposure
- Negative skin prick/sIgE tests
- Positive nasal allergen provocation test

**Epidemiology**
- Estimated 25-47% of previously diagnosed non-allergic rhinitis
- May progress to systemic allergic rhinitis

## Impact on Quality of Life

### Measured by Standardized Tools
- RQLQ (Rhinoconjunctivitis Quality of Life Questionnaire)
- Sleep quality impairment
- Cognitive function effects
- Productivity and work/school performance
- Social and emotional wellbeing

### Economic Burden
- Direct costs: medications, physician visits
- Indirect costs: missed work/school, reduced productivity
- Estimated billions in annual healthcare costs

## Emerging Research Areas

- **Microbiome modulation**: Nasal microbiome alterations in allergic disease
- **Probiotics**: Mixed evidence for prevention/treatment
- **Allergen-specific approaches**: Peptide immunotherapy, recombinant allergens
- **Biomarker development**: Predicting treatment response and disease progression
      `
    },

    expert: {
      title: 'Expert-Level Allergic Rhinitis Knowledge',
      description: 'Current research controversies and future directions',
      content: `
# Expert-Level Perspectives on Allergic Rhinitis

## Immunologic Mechanisms in Depth

### Early Phase Response (0-2 hours)
- Allergen cross-links IgE on mast cells
- Mast cell degranulation
- Release of preformed mediators: histamine, tryptase, chymase
- Synthesis of newly formed mediators: leukotrienes, prostaglandins, PAF
- Results in sneezing, itching, rhinorrhea

### Late Phase Response (4-8 hours)
- Recruitment of inflammatory cells (eosinophils, basophils, Th2 lymphocytes)
- Cytokine production: IL-4, IL-5, IL-13, GM-CSF
- Upregulation of adhesion molecules (ICAM-1, VCAM-1)
- Sustained inflammation and hyperresponsiveness

### Epithelial Barrier Dysfunction
- Tight junction disruption (claudin-1, occludin)
- Increased alarmin release (TSLP, IL-33, IL-25)
- Facilitates allergen sensitization
- Target for novel therapeutics

## Precision Medicine Approaches

### Endotyping Beyond Phenotypes

**Th2-High Endotype**
- High IgE levels
- Eosinophilic inflammation
- Good response to corticosteroids and biologics
- Classic allergic phenotype

**Th2-Low/Non-Allergic Endotype**
- Neutrophilic or paucigranulocytic inflammation
- Poorer response to standard therapies
- May require alternative approaches

### Biomarker-Guided Therapy

**Current Biomarkers**
- Total and specific IgE
- Blood eosinophil count
- Fractional exhaled nitric oxide (FeNO)
- Periostin
- DPP-4

**Emerging Biomarkers**
- MicroRNA signatures
- Epigenetic markers
- Metabolomic profiles
- Transcriptomic signatures

## Controversies and Debates

### Primary Prevention

**Hygiene Hypothesis Evolution**
- Not just "infections" but microbial diversity
- Role of farm exposure and endotoxin
- Birth mode and breastfeeding effects
- Antibiotic use in early life
- Current evidence for/against early allergen introduction

**Allergen Avoidance**
- Primary prevention trials have mixed results
- Single vs. multi-allergen approaches
- Timing of interventions
- Personalized vs. population-based strategies

### Immunotherapy Controversies

**SCIT vs. SLIT**
- Comparative efficacy data
- Cost-effectiveness analyses
- Patient preference and adherence
- Safety profiles

**Duration of Therapy**
- How to define "cure"
- Predictors of long-term success
- Re-treatment strategies
- Biomarkers of tolerance induction

### Treatment Ladder Sequencing

- Start with combination therapy or stepwise approach?
- Role of decongestants given safety concerns
- When to escalate to biologics
- Individualizing treatment based on phenotype

## Novel Therapeutic Targets

### Anti-Cytokine Therapies
- **Anti-TSLP**: Tezepelumab (approved for asthma)
- **Anti-IL-33**: Itepekimab, Tozorakimab
- **Anti-IL-25**: being evaluated
- **Anti-IL-4Rα**: Dupilumab (phase 3 for allergic rhinitis)

### Mast Cell Stabilizers Beyond Cromolyn
- Enhanced formulations
- Combination with antihistamines
- Novel delivery systems

### P2X3 Antagonists
- Neurogenic inflammation modulation
- Potential for refractory symptoms

### Modulation of the Nasal Microbiome
- Bacteriophage therapy
- Prebiotic and probiotic approaches
- Microbial metabolite supplementation

## Research Frontiers

### Allergen Immunotherapy Innovations

**Peptide Immunotherapy**
- Short peptide sequences (T-cell epitopes)
- Reduced IgE-mediated side effects
- Potential for shorter treatment courses

**Recombinant Allergens**
- Standardized, defined components
- Component-resolved diagnosis
- Hypoallergenic variants

**Adjuvants**
- CpG motifs
- Vitamin D3
- Monophosphoryl lipid A
- Nanoparticle delivery systems

**Routes**
- Intralymphatic
- Epicutaneous
- Oral mucosal
- Microneedle patches

### Gene-Environment Interactions

- Epigenetic modifications from environmental exposures
- Transgenerational effects of allergic disease
- Gene-by-environment interaction studies
- Pharmacogenomics of allergy medications

### Systems Biology Approaches

- Multi-omics integration (transcriptomics, proteomics, metabolomics)
- Network medicine applications
- Artificial intelligence for phenotype prediction
- Digital biomarkers and remote monitoring

### Prevention Strategies Under Investigation

- Maternal diet interventions during pregnancy
- Early-life microbial exposures
- Allergen-specific tolerance induction
- Epigenetic reprogramming approaches
      `
    }
  }
}
