/**
 * Irritable Bowel Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ibs: EducationalContent = {
  id: 'condition-ibs',
  type: 'condition',
  name: 'Irritable Bowel Syndrome',
  alternateNames: ['IBS', 'Spastic Colon', 'Nervous Bowel'],
  hpoId: 'HP:0002027',

  levels: {
    1: {
      level: 1,
      summary: 'IBS is a common condition causing stomach pain, bloating, and changes in bowel habits without any visible damage to the digestive tract.',
      explanation: `IBS affects how your gut works, causing uncomfortable symptoms but without damage that shows on tests.

**Symptoms:**
- Abdominal pain related to bowel movements
- Bloating and gas
- Diarrhea, constipation, or both
- Mucus in stool

**Triggers:** Stress, certain foods, hormonal changes

**Treatment:** Diet changes, stress management, medications for symptoms`,
      keyTerms: [
        { term: 'IBS', definition: 'A disorder affecting the large intestine causing pain and altered bowel habits' },
        { term: 'bloating', definition: 'Feeling of fullness or swelling in the abdomen' },
      ],
      analogies: ['Your gut has a sensitive alarm system that goes off too easily.'],
      examples: ['A college student getting stomach cramps and diarrhea before exams might have IBS.'],
    },
    2: {
      level: 2,
      summary: 'IBS is a functional GI disorder diagnosed by Rome IV criteria, subtyped by predominant stool pattern, and managed with dietary modification, gut-directed therapies, and symptom-targeted medications.',
      explanation: `## Diagnosis (Rome IV)
Recurrent abdominal pain ≥1 day/week (last 3 months) with ≥2 of:
- Related to defecation
- Associated with change in stool frequency
- Associated with change in stool form

## Subtypes
- IBS-D (diarrhea predominant)
- IBS-C (constipation predominant)
- IBS-M (mixed)

## Treatment
**Diet:** Low FODMAP diet, fiber modification
**Medications:**
- IBS-D: Loperamide, rifaximin, eluxadoline
- IBS-C: Fiber, PEG, linaclotide, lubiprostone
- Pain: Antispasmodics, TCAs, SSRIs`,
      keyTerms: [
        { term: 'Rome IV criteria', definition: 'Diagnostic criteria for functional GI disorders including IBS' },
        { term: 'FODMAP', definition: 'Fermentable carbohydrates that can trigger IBS symptoms' },
        { term: 'linaclotide', definition: 'Guanylate cyclase-C agonist for IBS-C' },
      ],
    },
    3: {
      level: 3,
      summary: 'IBS pathophysiology involves visceral hypersensitivity, gut-brain axis dysfunction, altered motility, and intestinal dysbiosis, with treatment targeting multiple mechanisms.',
      explanation: `## Pathophysiology
- **Visceral hypersensitivity:** Heightened perception of gut stimuli
- **Gut-brain axis dysfunction:** Bidirectional signaling abnormalities
- **Altered motility:** Fast (IBS-D) or slow (IBS-C) transit
- **Microbiome changes:** Dysbiosis, SIBO association
- **Intestinal permeability:** "Leaky gut"
- **Post-infectious:** 10-15% develop IBS after GI infection

## Red Flags (Exclude organic disease)
- Age >50 with new symptoms
- Rectal bleeding
- Weight loss
- Anemia
- Family history of IBD, celiac, colon cancer

## Advanced Therapies
- Gut-directed hypnotherapy
- CBT for IBS
- Peppermint oil
- Probiotics (specific strains)`,
      keyTerms: [
        { term: 'visceral hypersensitivity', definition: 'Heightened pain perception from internal organs' },
        { term: 'gut-brain axis', definition: 'Bidirectional communication between GI tract and central nervous system' },
        { term: 'SIBO', definition: 'Small intestinal bacterial overgrowth; may overlap with IBS' },
      ],
      clinicalNotes: 'Low FODMAP diet should be supervised by dietitian and is not meant for long-term use—reintroduction phase is essential. Rifaximin has FDA approval for IBS-D; can be repeated.',
    },
    4: {
      level: 4,
      summary: 'IBS management addresses neuroimmune mechanisms, microbiome-targeted therapies, and central nervous system amplification, with recognition of overlap syndromes and psychological comorbidities.',
      explanation: `## Neuroimmune Mechanisms
- Mast cell activation
- Low-grade inflammation
- Immune activation post-infection
- Neuroendocrine signaling (serotonin, CRF)

## Microbiome Therapies
- Rifaximin for IBS-D (non-absorbable antibiotic)
- Probiotics (VSL#3, Bifidobacterium infantis)
- Fecal microbiota transplant (investigational)

## Central Sensitization
- Overlap with fibromyalgia, chronic fatigue
- Central pain amplification
- Role of neuromodulators (TCAs, SNRIs, gabapentinoids)

## Psychological Therapies
- CBT most evidence-based
- Gut-directed hypnotherapy
- Mindfulness-based approaches`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Enhanced CNS pain processing seen in IBS and other chronic pain conditions' },
        { term: 'rifaximin', definition: 'Non-absorbable antibiotic for IBS-D targeting gut bacteria' },
        { term: 'mast cell activation', definition: 'Immune cell involvement in visceral hypersensitivity' },
      ],
      clinicalNotes: 'Consider IBS as part of central sensitivity syndromes. Neuromodulators (TCAs at low dose) can help pain independent of mood effects.',
    },
    5: {
      level: 5,
      summary: 'Precision IBS care integrates biomarker-based subtyping, microbiome profiling, personalized dietary interventions, and novel therapeutics targeting peripheral and central mechanisms.',
      explanation: `## Emerging Biomarkers
- Serum antibodies (CdtB, vinculin) for post-infectious IBS
- Microbiome signatures
- Fecal proteases
- Volatile organic compounds

## Novel Therapeutics
- 5-HT4 agonists (prucalopride for IBS-C)
- IBD-targeted agents in development
- Mast cell stabilizers
- TRPV1 antagonists for visceral pain

## Personalized Approaches
- Microbiome-based dietary recommendations
- Genetic predictors of treatment response
- Digital therapeutics (app-based CBT)

## Future Directions
- Biomarker-guided treatment selection
- Combination therapies (diet + neuromodulator + behavioral)
- Understanding IBS heterogeneity at molecular level`,
      keyTerms: [
        { term: 'CdtB antibodies', definition: 'Biomarker for post-infectious IBS from prior bacterial infection' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; pain receptor target' },
        { term: 'digital therapeutics', definition: 'App-based treatments for behavioral intervention' },
      ],
      clinicalNotes: 'IBS biomarkers are emerging but not yet standard of care. Management remains clinical diagnosis with symptom-guided treatment.',
    },
  },

  media: [],
  citations: [{ id: 'acg-ibs-2021', type: 'article', title: 'ACG Clinical Guideline: Management of IBS', source: 'American Journal of Gastroenterology' }],
  crossReferences: [{ targetId: 'condition-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' }],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology'], keywords: ['IBS', 'functional GI', 'FODMAP', 'gut-brain'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ibs;
