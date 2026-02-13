/**
 * Interstitial Cystitis - Educational Content
 */

import { EducationalContent } from '../../types';

export const interstitialCystitis: EducationalContent = {
  id: 'condition-interstitial-cystitis',
  type: 'condition',
  name: 'Interstitial Cystitis',
  alternateNames: ['IC', 'Bladder Pain Syndrome', 'Painful Bladder Syndrome', 'IC/BPS'],

  levels: {
    1: {
      level: 1,
      summary: 'Interstitial cystitis is a chronic condition causing bladder pressure, bladder pain, and sometimes pelvic pain.',
      explanation: `Interstitial cystitis (IC) causes ongoing discomfort in your bladder area and a frequent need to urinate.

**Main Symptoms:**
- Pain or pressure in the bladder area
- Needing to urinate very often (up to 60 times a day in severe cases)
- Pain that gets worse as the bladder fills
- Pain during sex
- Symptoms may flare and then calm down

**Who Gets It:**
- More common in women
- Can occur at any age
- Often takes years to diagnose

**What Helps:**
- Avoiding trigger foods (caffeine, alcohol, spicy foods)
- Stress management
- Physical therapy
- Medications for pain and bladder symptoms
- Support groups can help emotionally`,
      keyTerms: [
        { term: 'interstitial cystitis', definition: 'A chronic bladder condition causing pain and frequent urination' },
        { term: 'flare', definition: 'A period when symptoms get worse' },
        { term: 'pelvic pain', definition: 'Pain in the lower belly area' },
      ],
      analogies: [
        'IC is like having a constant bladder infection, but without the infection.',
      ],
      examples: [
        'Many people with IC find that certain foods like coffee or tomatoes make their symptoms worse.',
      ],
    },
    2: {
      level: 2,
      summary: 'IC/BPS is a chronic condition characterized by bladder pain, pressure, or discomfort with urinary frequency, lasting more than 6 weeks without infection or other identifiable cause.',
      explanation: `## Definition (AUA)

Bladder pain syndrome (BPS)/IC is defined as:
- Unpleasant sensation perceived to be from the bladder
- Associated with LUTS (frequency, urgency)
- Duration >6 weeks
- Absence of infection or other identifiable cause

## Presentation

**Cardinal Symptoms:**
- Suprapubic pain, pressure, or discomfort
- Pain relieved by voiding (some patients)
- Urinary frequency (average 16 times/day)
- Urgency
- Nocturia

**Associated Conditions:**
- Fibromyalgia
- Irritable bowel syndrome
- Chronic fatigue syndrome
- Vulvodynia
- Endometriosis

## Diagnosis

**Exclusion Diagnosis:**
- Rule out UTI (cultures)
- Rule out bladder cancer (cystoscopy if hematuria)
- Rule out other causes

**Evaluation:**
- Detailed history
- Physical exam (pelvic in women)
- Urinalysis and culture
- Voiding diary
- Pain questionnaires (ICSI, ICPI)

**Optional Tests:**
- Cystoscopy with hydrodistention
- Potassium sensitivity test (rarely used)
- Urodynamics (if complex)

## Treatment Approach

**First-Line:**
- Education and self-care
- Dietary modification
- Stress management
- Pelvic floor physical therapy

**Second-Line:**
- Oral medications
- Intravesical therapy`,
      keyTerms: [
        { term: 'BPS', definition: 'Bladder pain syndrome - newer term often used with IC' },
        { term: 'hydrodistention', definition: 'Stretching the bladder with fluid during cystoscopy' },
        { term: 'ICSI', definition: 'Interstitial Cystitis Symptom Index - questionnaire for symptoms' },
      ],
      analogies: [
        'IC diagnosis is like being a detective - you have to rule out everything else first.',
      ],
    },
    3: {
      level: 3,
      summary: 'IC/BPS pathophysiology involves epithelial dysfunction, mast cell activation, neurogenic inflammation, and central sensitization, requiring multimodal treatment.',
      explanation: `## Pathophysiology Theories

**Epithelial Dysfunction:**
- GAG layer deficiency
- Increased permeability
- Potassium leakage into bladder wall
- Sensory nerve activation

**Mast Cell Activation:**
- Increased mast cells in bladder wall
- Histamine release
- Prostaglandins, cytokines
- Neurogenic inflammation

**Neurogenic Mechanisms:**
- Upregulation of sensory nerves
- Substance P release
- Central sensitization
- Chronic pain syndrome

**Autoimmune Component:**
- Anti-bladder antibodies (some patients)
- Associated autoimmune conditions

## Cystoscopic Findings

**Hunner Lesions:**
- Classic but only in 5-10%
- Inflammatory patches
- May have central scar
- Fulguration indicated

**Glomerulations:**
- Petechial hemorrhages after hydrodistention
- Non-specific finding
- May be normal variant

## Pharmacotherapy

**Oral Medications:**
| Drug | Mechanism | Notes |
|------|-----------|-------|
| Amitriptyline | Tricyclic antidepressant | Central pain modulation |
| Pentosan polysulfate | GAG layer repair | FDA-approved for IC |
| Hydroxyzine | Antihistamine | Mast cell stabilization |
| Cimetidine | H2 blocker | Reduces mast cell activity |

**Intravesical Therapy:**
- DMSO (dimethyl sulfoxide): Anti-inflammatory
- Heparin: GAG replacement
- Lidocaine: Pain relief
- Combinations ("cocktails")

## Interventional Options

**Hydrodistention:**
- Diagnostic and therapeutic
- Short duration of benefit
- May worsen symptoms initially

**Fulguration of Hunner Lesions:**
- Electrocautery or laser
- 70-90% improvement
- May need repeat treatment`,
      keyTerms: [
        { term: 'GAG layer', definition: 'Glycosaminoglycan layer - protective coating of bladder lining' },
        { term: 'Hunner lesions', definition: 'Inflammatory patches in bladder wall seen in some IC patients' },
        { term: 'central sensitization', definition: 'Amplified pain processing in the central nervous system' },
      ],
      clinicalNotes: 'Pentosan polysulfate (Elmiron) has been associated with a unique maculopathy. Screen patients on long-term therapy with ophthalmologic evaluation.',
    },
    4: {
      level: 4,
      summary: 'Advanced IC/BPS management addresses refractory cases, phenotyping approaches, and multidisciplinary care models.',
      explanation: `## Phenotyping (UPOINT)

**Systematic Approach:**
- U: Urinary symptoms
- P: Psychosocial factors
- O: Organ-specific (bladder-centric)
- I: Infection (history of UTI)
- N: Neurologic/systemic
- T: Tenderness (pelvic floor)

**Treatment Matching:**
- Target predominant phenotype
- Multimodal approach
- Individualized treatment plan

## Refractory Disease

**Definition:**
- Failed conservative management
- Failed oral medications
- Failed intravesical therapy

**Advanced Options:**

**Sacral Neuromodulation:**
- InterStim for IC
- 60-70% response rate
- May combine with other therapies

**Botulinum Toxin:**
- OnabotulinumtoxinA (off-label)
- 100-200 units intravesically
- Variable response

**Cyclosporine A:**
- Immunosuppression
- 75% response in some studies
- Significant side effects

## Surgical Options

**Hydrodistention Under Anesthesia:**
- Maximum distention 80-100 cm H2O
- Hold 1-2 minutes
- Repeat as needed

**Augmentation Cystoplasty:**
- End-stage disease
- Use ileum or sigmoid
- Does not guarantee pain relief

**Urinary Diversion:**
- With or without cystectomy
- Last resort
- Pain may persist (30%)

## Pelvic Floor Therapy

**Importance:**
- 85% have pelvic floor dysfunction
- First-line recommendation
- Manual therapy, biofeedback

**Techniques:**
- Myofascial release
- Trigger point therapy
- Relaxation training
- Home exercise program

## Associated Conditions

**UECC Phenotype:**
- Urological Chronic Pelvic Pain
- IC, CP/CPPS, vulvodynia
- Overlapping features
- Shared mechanisms`,
      keyTerms: [
        { term: 'UPOINT', definition: 'Phenotyping system for chronic pelvic pain classification and treatment' },
        { term: 'myofascial release', definition: 'Physical therapy technique addressing muscle and fascia tension' },
        { term: 'UECC', definition: 'Urologic epithelial and chronic pain conditions' },
      ],
      clinicalNotes: 'Pelvic floor physical therapy is first-line for IC. Most patients have pelvic floor dysfunction that amplifies bladder symptoms.',
    },
    5: {
      level: 5,
      summary: 'Expert IC/BPS care encompasses biomarker research, novel therapeutics, and future directions in understanding and treating this complex syndrome.',
      explanation: `## Biomarker Research

**Potential Markers:**
- Anti-proliferative factor (APF)
- HB-EGF (heparin-binding EGF)
- Urinary NGF
- Histamine metabolites

**Clinical Utility:**
- Diagnosis confirmation
- Treatment response
- Phenotype identification

## Novel Therapeutics

**Liposomes:**
- Liposomal delivery of drugs
- Enhanced penetration
- Reduced instillation frequency

**Hyaluronic Acid:**
- GAG replacement
- Intravesical instillation
- Protective barrier

**PDE5 Inhibitors:**
- Sildenafil studies
- Relaxation of smooth muscle
- Improved blood flow

**Cannabinoids:**
- CB1/CB2 receptors in bladder
- Anti-inflammatory effects
- Limited clinical data

## Research Directions

**MAPP Research Network:**
- NIH-funded consortium
- Trans-MAPP studies
- Multisite phenotyping
- Biorepository

**Neuroimaging:**
- fMRI studies
- Central pain processing
- Brain structure changes

**Genetics:**
- GWAS studies
- Candidate genes
- Familial clustering

## Care Models

**Multidisciplinary Clinics:**
- Urology
- Gynecology
- Physical therapy
- Pain management
- Psychology

**Patient-Centered Care:**
- Shared decision-making
- Self-management support
- Support groups (ICA)
- Online resources

## Outcomes Measurement

**PROs:**
- ICSI/ICPI
- O'Leary-Sant questionnaire
- Pelvic Pain and Urgency/Frequency
- GUPI (for both sexes)

**Global Response Assessment:**
- Patient perception of improvement
- Minimal clinically important difference
- Treatment success definition`,
      keyTerms: [
        { term: 'APF', definition: 'Anti-proliferative factor - potential biomarker found in IC urine' },
        { term: 'MAPP', definition: 'Multidisciplinary Approach to Chronic Pelvic Pain - NIH research network' },
        { term: 'PRO', definition: 'Patient-reported outcome - symptom measures completed by patients' },
      ],
      clinicalNotes: 'The MAPP research network has identified brain changes and systemic inflammation in IC patients, supporting the concept of IC as a systemic chronic pain condition.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-ic-guidelines',
      type: 'article',
      title: 'Diagnosis and Treatment of Interstitial Cystitis/Bladder Pain Syndrome',
      source: 'AUA Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'condition-overactive-bladder', targetType: 'condition', relationship: 'related', label: 'Overactive Bladder' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['bladder', 'chronic pain'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default interstitialCystitis;
