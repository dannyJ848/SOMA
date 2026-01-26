/**
 * GERD (Gastroesophageal Reflux Disease) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const gerd: EducationalContent = {
  id: 'condition-gerd',
  type: 'condition',
  name: 'Gastroesophageal Reflux Disease',
  alternateNames: ['GERD', 'Acid Reflux', 'Heartburn Disease'],
  hpoId: 'HP:0002020',

  levels: {
    1: {
      level: 1,
      summary: 'GERD is when stomach acid frequently flows back into your esophagus, causing heartburn and other symptoms.',
      explanation: `GERD happens when the valve between your stomach and esophagus does not close properly, allowing acid to flow backward.

**Common symptoms:**
- Heartburn (burning in chest)
- Regurgitation (food coming back up)
- Difficulty swallowing
- Chronic cough
- Sore throat

**Lifestyle changes:**
- Avoid trigger foods (spicy, fatty, acidic)
- Do not eat before lying down
- Raise the head of your bed
- Lose weight if overweight
- Quit smoking

**Treatment:** Antacids, acid-reducing medications (PPIs, H2 blockers)`,
      keyTerms: [
        { term: 'heartburn', definition: 'Burning sensation in the chest caused by stomach acid' },
        { term: 'esophagus', definition: 'The tube that carries food from your mouth to your stomach' },
      ],
      analogies: ['Your esophagus has a one-way door that is supposed to stay closed, but in GERD it leaks.'],
      examples: ['Someone with GERD might get heartburn after eating pizza or lying down after dinner.'],
    },
    2: {
      level: 2,
      summary: 'GERD involves pathological reflux of gastric contents causing esophageal symptoms and/or injury, managed with lifestyle modifications and acid suppression therapy.',
      explanation: `## Diagnosis

**Clinical:** Typical symptoms (heartburn, regurgitation) respond to PPI trial
**Endoscopy:** For alarm symptoms, refractory cases, Barrett's screening
**pH monitoring:** 24-hour pH study for unclear diagnosis

## Complications
- Erosive esophagitis
- Stricture
- Barrett's esophagus (premalignant)
- Esophageal adenocarcinoma

## Treatment
**Lifestyle:** Weight loss, dietary modification, head of bed elevation
**Medications:** PPIs (omeprazole, pantoprazole) first-line; H2 blockers as step-down
**Surgery:** Fundoplication for refractory cases`,
      keyTerms: [
        { term: 'PPI', definition: 'Proton pump inhibitor; medication that strongly reduces stomach acid' },
        { term: 'Barrett\'s esophagus', definition: 'Change in esophageal lining that increases cancer risk' },
        { term: 'fundoplication', definition: 'Surgical procedure wrapping stomach around lower esophagus to prevent reflux' },
      ],
    },
    3: {
      level: 3,
      summary: 'GERD pathophysiology involves transient LES relaxations, hiatal hernia, and impaired esophageal clearance, with management stratified by symptom response, erosive disease, and Barrett\'s esophagus surveillance.',
      explanation: `## Pathophysiology
- Transient lower esophageal sphincter relaxations (primary mechanism)
- Hiatal hernia (reduces LES competence)
- Impaired esophageal motility and clearance
- Acid pocket above gastric contents

## Classification (Los Angeles)
- Grade A: Mucosal breaks <5mm
- Grade B: Mucosal breaks >5mm, non-confluent
- Grade C: Confluent erosions <75% circumference
- Grade D: >75% circumference

## Barrett's Esophagus
- Intestinal metaplasia replacing squamous epithelium
- Risk of adenocarcinoma (~0.5%/year with dysplasia)
- Surveillance endoscopy every 3-5 years (non-dysplastic)`,
      keyTerms: [
        { term: 'LES', definition: 'Lower esophageal sphincter; valve preventing reflux' },
        { term: 'intestinal metaplasia', definition: 'Replacement of esophageal cells with intestinal-type cells' },
        { term: 'hiatal hernia', definition: 'Stomach protrusion through diaphragm opening' },
      ],
      clinicalNotes: 'Los Angeles Grade C/D erosive esophagitis requires long-term PPI. Barrett\'s with high-grade dysplasia needs endoscopic eradication or surgery.',
    },
    4: {
      level: 4,
      summary: 'Refractory GERD evaluation requires pH-impedance testing, assessment of functional heartburn versus true reflux, and consideration of surgical or endoscopic interventions with attention to PPI long-term safety.',
      explanation: `## Refractory GERD Workup
1. Confirm PPI adherence (30-60 min before meals)
2. Upper endoscopy
3. pH-impedance monitoring (off PPI if diagnosis unclear, on PPI if confirmed GERD)
4. Consider esophageal manometry

## Differential
- Functional heartburn
- Eosinophilic esophagitis
- Achalasia
- Pill esophagitis

## Surgical/Endoscopic Options
- Nissen/Toupet fundoplication
- LINX magnetic sphincter augmentation
- Transoral incisionless fundoplication (TIF)
- Radiofrequency ablation for Barrett's

## PPI Safety
- Generally safe for long-term use
- Associations (weak): C. diff, pneumonia, hypomagnesemia, bone fractures
- Do not discontinue for theoretical risks in patients who need them`,
      keyTerms: [
        { term: 'pH-impedance', definition: 'Testing measuring both acid and non-acid reflux episodes' },
        { term: 'functional heartburn', definition: 'Heartburn symptoms without pathological reflux; does not respond to PPIs' },
        { term: 'LINX', definition: 'Magnetic sphincter augmentation device placed around LES' },
      ],
      clinicalNotes: 'Functional heartburn and hypersensitive esophagus are managed with neuromodulators (TCAs, SSRIs), not more acid suppression.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GERD management addresses reflux phenotypes (acid vs non-acid, erosive vs non-erosive), emerging endoscopic therapies, Barrett\'s management advancements, and the role of esophageal microbiome in disease pathogenesis.',
      explanation: `## Reflux Phenotypes
- Erosive reflux disease (ERD)
- Non-erosive reflux disease (NERD)
- Reflux hypersensitivity
- Functional heartburn

## Emerging Therapies
**Endoscopic:**
- Anti-reflux mucosectomy (ARMS)
- Full-thickness endoscopic plication

**Pharmacologic:**
- Potassium-competitive acid blockers (vonoprazan)
- Bile acid sequestrants for bile reflux

## Barrett's Esophagus Management
- Radiofrequency ablation (RFA) for dysplasia
- Endoscopic mucosal resection for visible lesions
- Cryotherapy as alternative ablation
- Chemoprevention role of PPIs

## Microbiome
- Altered esophageal microbiome in GERD
- Potential role in Barrett's progression
- Therapeutic implications under investigation`,
      keyTerms: [
        { term: 'vonoprazan', definition: 'Potassium-competitive acid blocker with faster, more potent acid suppression than PPIs' },
        { term: 'reflux hypersensitivity', definition: 'Enhanced perception of normal reflux events' },
        { term: 'RFA', definition: 'Radiofrequency ablation; endoscopic treatment for Barrett\'s dysplasia' },
      ],
      clinicalNotes: 'Vonoprazan may be more effective for severe esophagitis healing. GERD phenotyping guides therapy—true refluxers need acid suppression, hypersensitive esophagus needs neuromodulation.',
    },
  },

  media: [],
  citations: [{ id: 'acg-gerd-2022', type: 'article', title: 'ACG Clinical Guideline: Diagnosis and Management of GERD', source: 'American Journal of Gastroenterology' }],
  crossReferences: [{ targetId: 'condition-barrett-esophagus', targetType: 'condition', relationship: 'related', label: 'Barrett\'s Esophagus' }],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology'], keywords: ['GERD', 'heartburn', 'reflux', 'PPI'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gerd;
