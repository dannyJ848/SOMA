/**
 * Erectile Dysfunction - Educational Content
 */

import { EducationalContent } from '../../types';

export const erectileDysfunction: EducationalContent = {
  id: 'condition-erectile-dysfunction',
  type: 'condition',
  name: 'Erectile Dysfunction',
  alternateNames: ['ED', 'Impotence', 'Erectile Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Erectile dysfunction (ED) is when a man has trouble getting or keeping an erection firm enough for sexual activity.',
      explanation: `ED is a common condition that becomes more frequent as men get older, but it is not a normal part of aging.

**Common Causes:**
- Heart disease and high blood pressure
- Diabetes
- Obesity
- Stress and anxiety
- Depression
- Some medications
- Smoking and alcohol use

**Why It Matters:**
- ED can be an early warning sign of heart disease
- It affects quality of life and relationships
- It is very treatable

**When to See a Doctor:**
- Persistent erection problems
- Problems that cause relationship stress
- Other sexual concerns

**Treatment Options:**
- Lifestyle changes (exercise, quit smoking)
- Oral medications (like Viagra)
- Other treatments if pills don't work
- Counseling for psychological causes`,
      keyTerms: [
        { term: 'erectile dysfunction', definition: 'Difficulty getting or maintaining an erection' },
        { term: 'erection', definition: 'When the penis fills with blood and becomes firm' },
      ],
      analogies: [
        'An erection works like a hydraulic system - blood flows in and is trapped to create firmness.',
      ],
      examples: [
        'A man with diabetes and ED should also be checked for heart disease.',
      ],
    },
    2: {
      level: 2,
      summary: 'ED is the persistent inability to achieve or maintain an erection sufficient for sexual performance, with organic, psychogenic, or mixed etiologies requiring systematic evaluation.',
      explanation: `## Epidemiology

- 40% of men at age 40 have some degree
- Increases with age
- Strong correlation with cardiovascular disease
- Associated with diabetes, hypertension, hyperlipidemia

## Physiology of Erection

**Mechanism:**
1. Sexual stimulation
2. Parasympathetic activation
3. NO release from nerve terminals
4. Smooth muscle relaxation
5. Blood inflow to corpora cavernosa
6. Veno-occlusive mechanism traps blood

**Key Players:**
- Nitric oxide (NO)
- cGMP (second messenger)
- PDE5 (breaks down cGMP)

## Classification

**Organic:**
- Vascular (most common)
- Neurogenic
- Hormonal
- Anatomic

**Psychogenic:**
- Performance anxiety
- Depression
- Relationship issues

**Mixed:**
- Combination common

## Evaluation

**History:**
- IIEF-5 questionnaire
- Cardiovascular risk factors
- Medications
- Psychosocial factors

**Physical Exam:**
- Blood pressure
- Genital exam
- Peripheral pulses
- Secondary sex characteristics

**Laboratory:**
- Glucose, lipids
- Testosterone (morning)
- TSH if indicated`,
      keyTerms: [
        { term: 'nitric oxide', definition: 'Chemical that relaxes smooth muscle to allow blood flow' },
        { term: 'PDE5', definition: 'Phosphodiesterase type 5 - enzyme that ends erection' },
        { term: 'IIEF', definition: 'International Index of Erectile Function - standardized questionnaire' },
      ],
      analogies: [
        'PDE5 is like a drain plug - PDE5 inhibitors block the drain so cGMP builds up.',
      ],
    },
    3: {
      level: 3,
      summary: 'ED pathophysiology involves endothelial dysfunction, autonomic neuropathy, hormonal deficiency, or psychogenic factors, with treatment stratified by severity and etiology.',
      explanation: `## Pathophysiology

**Vascular (Arteriogenic):**
- Endothelial dysfunction
- Atherosclerosis
- Reduced NO bioavailability
- Penile artery insufficiency

**Veno-occlusive (Venogenic):**
- Failure of cavernosal trapping
- Corporal fibrosis
- Tunica albuginea defects

**Neurogenic:**
- Diabetes (autonomic neuropathy)
- Spinal cord injury
- Pelvic surgery
- Multiple sclerosis

**Hormonal:**
- Hypogonadism
- Hyperprolactinemia
- Thyroid disorders

## Treatment Ladder

**First Line: PDE5 Inhibitors**
| Drug | Onset | Duration | Food Effect |
|------|-------|----------|-------------|
| Sildenafil | 30-60 min | 4-6 hrs | High fat delays |
| Tadalafil | 30-60 min | 36 hrs | None |
| Vardenafil | 30-60 min | 4-6 hrs | High fat delays |
| Avanafil | 15-30 min | 6-12 hrs | Modest |

**Contraindications:**
- Nitrate use (absolute)
- Recent MI/stroke (relative)
- Hypotension
- Certain alpha-blockers

**Second Line:**
- Intracavernosal injection (ICI)
- Vacuum erection devices
- Intraurethral suppository (MUSE)

**Third Line:**
- Penile prosthesis

## Special Considerations

**Post-Prostatectomy:**
- Nerve-sparing technique important
- Penile rehabilitation concept
- Early PDE5 or ICI use

**Diabetes:**
- Lower PDE5i response
- Often need higher doses
- Consider injection therapy`,
      keyTerms: [
        { term: 'veno-occlusive dysfunction', definition: 'Failure to trap blood in the corpora, causing venous leak' },
        { term: 'intracavernosal injection', definition: 'Injecting medication directly into the penis to cause erection' },
        { term: 'penile prosthesis', definition: 'Surgically implanted device for erections' },
      ],
      clinicalNotes: 'ED in a young man without obvious cause warrants cardiovascular evaluation. ED may precede cardiovascular events by 3-5 years.',
    },
    4: {
      level: 4,
      summary: 'Advanced ED management includes injection therapy optimization, low-intensity shockwave therapy, and surgical options for refractory cases.',
      explanation: `## Injection Therapy

**Medications:**
- Alprostadil (PGE1): Single agent
- Bi-mix: Papaverine + phentolamine
- Tri-mix: + Alprostadil
- Quad-mix: + Atropine

**Technique:**
- 27-30 gauge needle
- Lateral corpus injection
- Alternate sides
- Titrate dose in office

**Complications:**
- Priapism (seek help if >4 hours)
- Fibrosis
- Hematoma
- Pain

## Vacuum Devices

**Mechanism:**
- Negative pressure draws blood in
- Constriction ring maintains erection
- Remove ring within 30 minutes

**Best Candidates:**
- Stable relationship
- Manual dexterity
- Alternative to medications
- Post-prostatectomy

## Low-Intensity Shockwave Therapy

**Concept:**
- Acoustic waves to penis
- Proposed neovascularization
- Improved endothelial function

**Evidence:**
- Moderate quality studies
- May restore spontaneous erections
- Best for mild-moderate ED
- Not yet FDA approved for ED

## Penile Prosthesis

**Types:**
- Malleable (semi-rigid)
- Inflatable (2-piece, 3-piece)

**3-Piece IPP:**
- Cylinders in corpora
- Pump in scrotum
- Reservoir in pelvis
- 90%+ satisfaction

**Complications:**
- Infection (1-3%)
- Mechanical failure
- Erosion
- Autoinflation

## Post-Prostatectomy Rehabilitation

**Goals:**
- Preserve smooth muscle
- Prevent fibrosis
- Restore spontaneous erections

**Protocols:**
- Nightly PDE5i
- ICI if no response
- VED adjunct
- Controversial efficacy`,
      keyTerms: [
        { term: 'tri-mix', definition: 'Combination of papaverine, phentolamine, and alprostadil for injection' },
        { term: 'IPP', definition: 'Inflatable penile prosthesis - most common implant type' },
        { term: 'Li-ESWT', definition: 'Low-intensity extracorporeal shockwave therapy for ED' },
      ],
      clinicalNotes: 'Penile prosthesis has highest satisfaction rates of any ED treatment. Counsel that it destroys erectile tissue, making return to natural erections impossible.',
    },
    5: {
      level: 5,
      summary: 'Expert ED management encompasses regenerative approaches, complex reconstruction, and integration of cardiovascular risk optimization.',
      explanation: `## Regenerative Medicine

**Platelet-Rich Plasma (PRP):**
- Growth factors from patient's blood
- Intracavernosal injection
- Limited evidence
- Not FDA approved for ED

**Stem Cell Therapy:**
- Adipose or bone marrow derived
- Preclinical promise
- Human trials ongoing
- Ethical and regulatory issues

**Gene Therapy:**
- VEGF, eNOS targets
- Maxi-K channel gene
- Experimental

## Complex Reconstruction

**Peyronie's Disease + ED:**
- Tunica plication vs grafting
- IPP with plaque management
- Modeling over inflated device

**Revascularization:**
- Young men with arterial injury
- Epigastric artery to dorsal artery
- Very select patients
- Requires angiography workup

**Salvage Procedures:**
- IPP revision
- Downsizing cylinders
- Conversion malleable to inflatable

## Cardiovascular Integration

**ED as Marker:**
- Endothelial dysfunction shared mechanism
- ED precedes CVD events by 3-5 years
- Opportunity for intervention

**Risk Stratification:**
- Princeton III Consensus
- Low risk: Primary care management
- Intermediate: Cardiac workup first
- High risk: Stabilize before treatment

**Optimization:**
- Statin therapy
- Blood pressure control
- Glycemic control
- Exercise prescription
- Weight loss

## Special Populations

**Spinal Cord Injury:**
- Level determines reflex vs psychogenic
- Often need ICI
- Consider implants for complete injury

**Radical Cystectomy:**
- Worse nerve injury than prostatectomy
- Lower recovery rates
- Consider early IPP

**Transplant Recipients:**
- Drug interactions
- Cardiovascular status
- Often good candidates

## Future Directions

**Tissue Engineering:**
- Bioengineered corpora
- Collagen scaffolds
- Neurovascular integration

**Drug Development:**
- New PDE5 inhibitors
- Melanocortin agonists
- Central acting agents

**Personalized Medicine:**
- Genetic predictors of response
- Phenotype-based treatment
- Precision selection`,
      keyTerms: [
        { term: 'Princeton III Consensus', definition: 'Risk stratification guidelines for sexual activity in cardiac patients' },
        { term: 'Maxi-K channels', definition: 'Potassium channels in cavernosal smooth muscle - gene therapy target' },
        { term: 'penile revascularization', definition: 'Microvascular bypass surgery for young men with arterial injury' },
      ],
      clinicalNotes: 'Regenerative therapies for ED remain investigational. Patients seeking PRP or stem cell therapy should be counseled about limited evidence and seek treatment only in clinical trial settings.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-ed-guidelines',
      type: 'article',
      title: 'Erectile Dysfunction',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'structure-male-reproductive-anatomy', targetType: 'structure', relationship: 'related', label: 'Male Anatomy' },
  ],
  tags: {
    systems: ['male reproductive'],
    topics: ['sexual health', 'erectile dysfunction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default erectileDysfunction;
