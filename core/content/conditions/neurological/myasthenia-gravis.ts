/**
 * Myasthenia Gravis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const myastheniaGravis: EducationalContent = {
  id: 'condition-myasthenia-gravis',
  type: 'condition',
  name: 'Myasthenia Gravis',
  alternateNames: ['MG', 'Erb-Goldflam Disease'],
  hpoId: 'HP:0003233',

  levels: {
    1: {
      level: 1,
      summary: 'Myasthenia gravis is a condition that causes muscle weakness that gets worse with activity and better with rest.',
      explanation: `Myasthenia gravis (MG) is an autoimmune disease where the body's immune system attacks the connections between nerves and muscles. This makes muscles get tired and weak.

**Key feature:** Muscle weakness that improves with rest and gets worse with activity

**Common symptoms:**
- Drooping eyelids (ptosis)
- Double vision (diplopia)
- Weakness in arms, legs, or face
- Trouble chewing or swallowing
- Slurred speech
- Difficulty breathing (in severe cases)

**Pattern:**
- Symptoms come and go (relapsing-remitting)
- Worse at the end of the day
- Worse after exercise
- Better after resting or sleeping

**Who gets MG:**
- Can occur at any age
- More common in young women (under 40)
- Also common in older men (over 60)
- Not directly inherited

**Treatments:**
- Medications to improve nerve-muscle communication
- Drugs that calm the immune system
- Sometimes surgery to remove thymus gland
- For severe cases: treatments to clean antibodies from blood

**Important:** MG is serious but treatable. Most people with MG can lead normal lives with proper treatment.`,
      keyTerms: [
        { term: 'myasthenia gravis', definition: 'An autoimmune disease causing muscle weakness' },
        { term: 'ptosis', definition: 'Drooping of the upper eyelid' },
        { term: 'diplopia', definition: 'Double vision' },
      ],
      analogies: ['Myasthenia gravis is like a car running out of gas—the muscles work when rested but quickly fatigue with use because the connection between nerves and muscles is not working properly.'],
      examples: ['A woman notices her eyelids drooping and seeing double, especially after reading for a while. She also feels weak when climbing stairs but improves after resting.'],
    },
    2: {
      level: 2,
      summary: 'Myasthenia gravis is an autoimmune disorder caused by antibodies against acetylcholine receptors at the neuromuscular junction, causing fatigable weakness that improves with rest.',
      explanation: `## Pathophysiology

**Autoimmune attack on NMJ:**
- Antibodies against acetylcholine receptors (AChR) in 85%
- Antibodies against MuSK in 5-10%
- Antibody-negative (seronegative) in 5-10%

**Result:**
- Reduced number of ACh receptors
- Impaired neuromuscular transmission
- Muscle weakness with use (fatigable)

**Thymus involvement:**
- Thymic hyperplasia in 65%
- Thymoma in 10-15% (must rule out)

## Clinical Features

**Ocular symptoms (most common initial):**
- Ptosis (often bilateral but asymmetric)
- Diplopia
- Extraocular muscle weakness

**Bulbar symptoms:**
- Dysarthria (nasal speech)
- Dysphagia (choking, nasal regurgitation)
- Difficulty chewing
- Facial weakness

**Generalized symptoms:**
- Proximal limb weakness (shoulders, hips)
- Neck weakness (head drop)
- Respiratory muscles (life-threatening)

**Key characteristic:**
- Fatigable weakness: worse with use, better with rest
- Variability: symptoms fluctuate
- No sensory loss
- Reflexes usually preserved

**Myasthenic crisis:**
- Severe respiratory weakness requiring ventilation
- Precipitated by infection, surgery, medication changes

## Antibody Types

**AChR antibodies (85%):**
- Binding, blocking, modulating types
- Associated with thymic disease

**MuSK antibodies (5-10%):**
- MuSK = Muscle-specific tyrosine kinase
- More bulbar and facial involvement
- Less thymic disease
- Women predominantly`,
      keyTerms: [
        { term: 'acetylcholine receptor', definition: 'Protein on muscle surface that receives signals from nerves' },
        { term: 'MuSK', definition: 'Muscle-specific kinase; protein at neuromuscular junction' },
        { term: 'neuromuscular junction', definition: 'Connection point between nerve and muscle' },
      ],
    },
    3: {
      level: 3,
      summary: 'MG diagnosis involves antibody testing, electrodiagnostic studies, and response to acetylcholinesterase inhibitors. Treatment includes pyridostigmine, corticosteroids, steroid-sparing immunosuppressants, and thymectomy.',
      explanation: `## Diagnostic Evaluation

**Antibody testing:**
- **AChR binding antibodies:** Most sensitive (85%)
- **AChR modulating antibodies:** If binding negative but clinical suspicion high
- **MuSK antibodies:** If AChR negative, especially with prominent bulbar symptoms
- **LRP4, agrin antibodies:** If AChR/MuSK negative (seronegative MG)

**Electrodiagnostic studies:**
- **Repetitive nerve stimulation (RNS):**
  - Decremental response (>10% decrease)
  - More sensitive in proximal muscles
  - Abnormal in 50-75% of generalized MG
- **Single-fiber EMG:** More sensitive (95%), technically difficult

**Pharmacologic testing:**
- **Edrophonium (Tensilon) test:** Historical, rarely used now
- Ice pack test: For ptosis (cold improves neuromuscular transmission)

**CT chest:**
- Evaluate for thymoma (must rule out)

## Treatment

**Symptomatic:**
- **Pyridostigmine (Mestinon):** Acetylcholinesterase inhibitor
  - Increases ACh at NMJ
  - Dose: 30-60 mg every 4-6 hours
  - Side effects: Diarrhea, cramps, sweating, salivation

**Immunosuppression:**

**Corticosteroids:**
- Prednisone 20-60 mg daily
- May worsen initially (watch for crisis)
- Taper to lowest effective dose

**Steroid-sparing agents:**
- **Azathioprine:** First-line, 2-3 months for effect
- **Mycophenolate mofetil:** Alternative
- **Tacrolimus, cyclosporine:** Calcineurin inhibitors
- **Rituximab:** For refractory MG, especially MuSK+
- **Eculizumab:** Complement inhibitor for refractory AChR+ MG

**Acute exacerbation:**
- IVIG (2 g/kg over 2-5 days)
- Plasma exchange (PLEX): Faster but more invasive

**Thymectomy:**
- Indicated for thymoma
- Considered for generalized AChR+ MG <50 years old
- MGTX trial showed benefit for non-thymomatous AChR+ MG`,
      keyTerms: [
        { term: 'decremental response', definition: 'Decreasing muscle response with repeated nerve stimulation' },
        { term: 'AChE inhibitor', definition: 'Drug that prevents breakdown of acetylcholine' },
        { term: 'thymectomy', definition: 'Surgical removal of thymus gland' },
      ],
      clinicalNotes: 'Prednisone can cause paradoxical worsening in first 1-2 weeks—may need hospitalization. Pyridostigmine dose should be reduced before starting steroids to avoid cholinergic crisis.',
    },
    4: {
      level: 4,
      summary: 'Complex MG management addresses myasthenic versus cholinergic crisis, thymoma classification, pregnancy considerations, comorbidities, and refractory disease requiring combination immunosuppression.',
      explanation: `## Myasthenic Crisis vs Cholinergic Crisis

**Myasthenic crisis (under-treatment):**
- Worsening weakness
- No response to pyridostigmine
- May need edrophonium challenge (rare)
- Treatment: IVIG, PLEX, increase immunosuppression

**Cholinergic crisis (over-treatment):**
- Worsening weakness
- SLUDGE syndrome:
  - **S**alivation
  - **L**acrimation
  - **U**rination
  - **D**efecation
  - **G**I cramps
  - **E**mesis
- Muscle fasciculations
- Pinpoint pupils
- Treatment: Stop pyridostigmine, atropine if severe

**Clinical pearl:** If uncertain, stop pyridostigmine, give atropine if needed, and treat as myasthenic crisis (IVIG/PLEX).

## Thymoma Classification (Masaoka-Koga)
- **Stage I:** Completely encapsulated
- **Stage II:** Microscopic invasion beyond capsule
- **Stage III:** Macroscopic invasion of surrounding organs
- **Stage IV:** Metastasis

All thymomas require surgical resection.

## Special Populations

**Pregnancy:**
- Symptoms: 1/3 improve, 1/3 worsen, 1/3 unchanged
- Pyridostigmine safe
- Prednisone preferred (crosses placenta less than other steroids)
- Azathioprine considered relatively safe
- Avoid mycophenolate, methotrexate
- Vaginal delivery preferred over C-section
- Monitor neonate for transient MG (maternal antibodies cross)

**Elderly onset (>60):**
- More men affected
- Often seronegative or low titer AChR
- Associated thymoma risk higher
- Comorbidities affect treatment choices

**MuSK+ MG:**
- More prominent facial, bulbar, neck weakness
- Less ocular involvement
- Poor response to pyridostigmine
- May require more aggressive immunosuppression
- Rituximab often effective

## Ocular MG
- Limited to extraocular muscles, eyelids
- 15-20% remain ocular only
- AChR antibodies often low titer
- Treatment: Pyridostigmine, consider steroids
- General immunosuppression if disabling

## Refractory MG
- Failure of adequate trial of ≥2 immunosuppressants
- Options:
  - Rituximab (anti-CD20)
  - Eculizumab (C5 inhibitor)
  - Ravulizumab (longer-acting C5 inhibitor)
  - Efgartigimod (FcRn blocker)
  - Combination immunosuppression`,
      keyTerms: [
        { term: 'SLUDGE syndrome', definition: 'Signs of cholinergic excess from acetylcholinesterase inhibitor toxicity' },
        { term: 'FcRn blocker', definition: 'Novel therapy that increases antibody catabolism' },
      ],
      clinicalNotes: 'In pregnancy, IVIG is safest immunosuppressive for crisis. MuSK+ patients often need earlier aggressive immunosuppression—respond poorly to thymectomy.',
    },
    5: {
      level: 5,
      summary: 'Advanced MG therapeutics include complement inhibition, neonatal Fc receptor blockade, subcutaneous immunoglobulin, long-acting acetylcholinesterase inhibitors, and precision approaches based on antibody phenotype.',
      explanation: `## Complement Inhibition

**Mechanism:**
- Complement activation at NMJ causes membrane attack complex formation
- Blocking complement prevents destruction of postsynaptic membrane

**Agents:**
- **Eculizumab (Soliris):** C5 inhibitor
  - Approved for refractory AChR+ MG
  - Requires meningococcal vaccination
  - High cost, monitoring for hemolysis
- **Ravulizumab (Ultomiris):** Long-acting C5 inhibitor
  - Every 8 weeks dosing
  - Same indication as eculizumab
- **Zilucoplan:** Subcutaneous C5 inhibitor in development
- **ANX005:** C1q inhibitor (earlier complement) in trials

## FcRn Blockade

**Mechanism:**
- FcRn recycles IgG, prolonging half-life
- Blocking FcRn increases IgG catabolism
- Reduces all antibody classes (including pathogenic)

**Agents:**
- **Efgartigimod (Vyvgart):** Approved 2021
  - IV or subcutaneous
  - Rapid reduction in IgG levels
  - Good safety profile
- **Rozanolixizumab:** Subcutaneous FcRn blocker (approved)
- **Batoclimab, nipocalimab:** In development

**Advantages:**
- Selective IgG reduction (preserves other immunoglobulins)
- Faster onset than traditional immunosuppressants
- No broad immunosuppression

## Novel Subcutaneous Therapies

**Human regular IVIG (IGSC):**
- Subcutaneous IgG administration
- Home administration
- Steady IgG levels

**C1 esterase inhibitor:**
- Inhibits complement at C1 level
- Early trials in AChR+ MG

## Emerging Targets

**B-cell directed therapies:**
- **Inebilizumab:** Anti-CD19 (broader than rituximab)
- **Obinutuzumab:** Anti-CD20, different epitope

**Plasma cell targeting:**
- **Bortezomib:** Proteasome inhibitor
- **Belimumab:** BAFF inhibitor

**Complement receptor blockade:**
- Avacopan: C5aR inhibitor

**Antigen-specific tolerance:**
- Peptide-based therapies
- Tolerogenic dendritic cells
- Experimental approaches

## Biomarker Development

**Complement biomarkers:**
- C5b-9 (MAC) levels predict response to complement inhibition
- May guide patient selection

**Antibody profiling:**
- Subclass-specific responses
- Titer monitoring for treatment guidance

**Pharmacodynamic markers:**
- IgG levels for FcRn blockers
- Complement activity for eculizumab

## Precision Medicine

**Antibody-specific treatment:**
- AChR+: Complement inhibitors, standard approaches
- MuSK+: Earlier rituximab, poor pyridostigmine response
- LRP4+: Variable response, less data
- Seronegative: Consider agrin, LRP4 testing

**Clinical phenotype guidance:**
- Ocular-only: Conservative treatment
- Bulbar-predominant: Aggressive early treatment
- Thymoma-associated: Thymectomy required
- Late-onset: Consider comorbidities`,
      keyTerms: [
        { term: 'membrane attack complex', definition: 'Terminal complement complex causing cell membrane damage' },
        { term: 'FcRn', definition: 'Neonatal Fc receptor; recycles IgG to prolong half-life' },
        { term: 'BAFF inhibitor', definition: 'B-cell activating factor inhibitor; targets B-cell survival' },
      ],
      clinicalNotes: 'Efgartigimod offers rapid, selective IgG reduction with favorable safety—emerging as preferred option for many refractory patients. Complement inhibitors require meningococcal vaccination due to infection risk. Antibody phenotype should guide therapy selection.',
    },
  },

  media: [],
  citations: [
    { id: 'mg-2016', type: 'article', title: 'International Consensus Guidance for Management of Myasthenia Gravis', source: 'Neurology' },
    { id: 'mg-2020', type: 'article', title: 'AAN Guidelines for Treatment of Myasthenia Gravis', source: 'Neurology' },
    { id: 'mgtx-2016', type: 'article', title: 'Thymectomy in Non-Thymomatous Myasthenia Gravis (MGTX Trial)', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'condition-lambert-eaton', targetType: 'condition', relationship: 'related', label: 'Lambert-Eaton Myasthenic Syndrome' },
    { targetId: 'condition-botulism', targetType: 'condition', relationship: 'related', label: 'Botulism' },
  ],
  tags: {
    systems: ['neurological', 'immune'],
    topics: ['neurology', 'neuromuscular', 'autoimmune'],
    keywords: ['myasthenia gravis', 'MG', 'AChR', 'MuSK', 'pyridostigmine', 'thymectomy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default myastheniaGravis;
