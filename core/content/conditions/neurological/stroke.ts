/**
 * Stroke - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const stroke: EducationalContent = {
  id: 'condition-stroke',
  type: 'condition',
  name: 'Stroke',
  alternateNames: ['Cerebrovascular Accident', 'CVA', 'Brain Attack'],
  hpoId: 'HP:0001297',

  levels: {
    1: {
      level: 1,
      summary: 'A stroke happens when blood flow to part of your brain is blocked or a blood vessel bursts, causing brain cells to die.',
      explanation: `A stroke is a brain emergency. Without blood, brain cells start dying within minutes. Quick treatment is critical.

**Warning signs (FAST):**
- **F**ace drooping
- **A**rm weakness
- **S**peech difficulty
- **T**ime to call 911

**Types:**
- Ischemic (blocked vessel) - most common
- Hemorrhagic (bleeding in brain)

**Risk factors:** High blood pressure, smoking, diabetes, heart disease, high cholesterol

**Prevention:** Control blood pressure, exercise, healthy diet, don't smoke`,
      keyTerms: [
        { term: 'stroke', definition: 'Brain damage from blocked or burst blood vessel' },
        { term: 'ischemic', definition: 'Caused by blocked blood flow' },
        { term: 'hemorrhagic', definition: 'Caused by bleeding' },
      ],
      analogies: ['A stroke is like a plumbing emergency in your brain—either a clogged pipe or a burst pipe.'],
      examples: ['A person suddenly cannot move their right arm and has trouble speaking—this is a stroke emergency.'],
    },
    2: {
      level: 2,
      summary: 'Stroke is acute neurological deficit from vascular etiology, classified as ischemic (87%) or hemorrhagic (13%), requiring emergent evaluation and time-sensitive treatment.',
      explanation: `## Types
**Ischemic Stroke (87%):**
- Large vessel atherosclerosis
- Cardioembolism (AFib, valve disease)
- Small vessel disease (lacunar)
- Other determined causes
- Cryptogenic (unknown)

**Hemorrhagic Stroke (13%):**
- Intracerebral hemorrhage (ICH)
- Subarachnoid hemorrhage (SAH)

## Acute Treatment
**Ischemic:**
- IV tPA (alteplase) within 4.5 hours
- Mechanical thrombectomy within 24 hours (large vessel)
- Aspirin within 24-48 hours

**Hemorrhagic:**
- Blood pressure control
- Reverse anticoagulation
- Surgical evacuation if indicated

## Secondary Prevention
- Antiplatelets or anticoagulants
- Statins
- Blood pressure control
- Lifestyle modification`,
      keyTerms: [
        { term: 'tPA', definition: 'Tissue plasminogen activator; clot-dissolving medication for ischemic stroke' },
        { term: 'thrombectomy', definition: 'Mechanical removal of blood clot from brain artery' },
        { term: 'lacunar stroke', definition: 'Small deep brain stroke from small vessel disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'Ischemic stroke management follows time-based algorithms for reperfusion therapy, with TOAST classification guiding secondary prevention and advanced imaging extending treatment windows.',
      explanation: `## Imaging
- **CT head (non-contrast):** Rule out hemorrhage, identify early ischemic changes
- **CT angiography:** Large vessel occlusion (LVO) detection
- **CT perfusion:** Core vs penumbra (mismatch imaging)
- **MRI:** Diffusion-weighted imaging most sensitive

## Reperfusion Therapy

**IV Alteplase:**
- Within 4.5 hours of symptom onset
- Exclusion: Recent surgery, bleeding, severe HTN, anticoagulation

**Mechanical Thrombectomy:**
- Large vessel occlusion (ICA, M1, basilar)
- Within 24 hours with favorable imaging (mismatch)
- NIHSS usually ≥6

## TOAST Classification
1. Large artery atherosclerosis
2. Cardioembolism
3. Small vessel occlusion
4. Other determined etiology
5. Cryptogenic

## Secondary Prevention by Mechanism
- **AFib:** Anticoagulation (DOACs preferred)
- **Atherosclerosis:** Dual antiplatelet 21-90 days, then single agent
- **Lacunar:** Single antiplatelet, aggressive BP control`,
      keyTerms: [
        { term: 'NIHSS', definition: 'NIH Stroke Scale; standardized stroke severity assessment' },
        { term: 'penumbra', definition: 'At-risk brain tissue surrounding infarct core; potentially salvageable' },
        { term: 'TOAST', definition: 'Classification system for ischemic stroke etiology' },
      ],
      clinicalNotes: 'DAWN and DEFUSE-3 trials extended thrombectomy window to 24 hours using perfusion imaging. Tenecteplase is emerging as alternative to alteplase with simpler dosing.',
    },
    4: {
      level: 4,
      summary: 'Contemporary stroke care integrates extended window therapies, precision secondary prevention based on mechanism, and attention to cryptogenic stroke workup including PFO and atrial cardiopathy.',
      explanation: `## Extended Window Therapies
**DAWN/DEFUSE-3 Criteria:**
- LVO within 6-24 hours
- Clinical-imaging mismatch (small core, large deficit)
- Core <70mL, mismatch ratio ≥1.8

## Cryptogenic Stroke Workup
- Extended cardiac monitoring (insertable loop recorder)
- Bubble echocardiography for PFO
- Atrial cardiopathy markers (LA size, P-wave terminal force)
- Hypercoagulable workup in young patients

## PFO Closure
- Consider in age <60 with cryptogenic stroke
- High-risk PFO features (large shunt, atrial septal aneurysm)
- RoPE score for likelihood of PFO-related stroke

## Hemorrhagic Stroke
**ICH:**
- Aggressive BP lowering (target <140 SBP)
- Reversal of anticoagulation (4F-PCC, idarucizumab, andexanet)
- Surgical evacuation for cerebellar hemorrhage with deterioration

**SAH:**
- Aneurysm securing (clipping vs coiling)
- Nimodipine for vasospasm prevention
- Triple-H therapy (historical)`,
      keyTerms: [
        { term: 'PFO', definition: 'Patent foramen ovale; potential source of paradoxical embolism' },
        { term: 'RoPE score', definition: 'Risk of Paradoxical Embolism; predicts PFO-attributable stroke likelihood' },
        { term: 'andexanet alfa', definition: 'Reversal agent for factor Xa inhibitors' },
      ],
      clinicalNotes: 'Insertable loop recorders detect more AFib than short-term monitoring in cryptogenic stroke. Consider PFO closure in appropriate candidates rather than long-term aspirin alone.',
    },
    5: {
      level: 5,
      summary: 'Precision stroke medicine encompasses mobile stroke units, neuroprotection trials, regenerative approaches, and individualized prevention based on imaging biomarkers and genetic risk.',
      explanation: `## Prehospital Stroke Care
- Mobile stroke units with CT scanner
- Prehospital tPA administration
- Reduced door-to-needle times
- LVO prediction scales for direct-to-thrombectomy

## Emerging Therapies
**Neuroprotection:**
- Nerinetide (PSD-95 inhibitor): Negative in ESCAPE-NA1
- Hypothermia, xenon, other agents under study

**Regenerative:**
- Stem cell therapies in clinical trials
- Growth factor administration
- Neurorehabilitation enhancement

## Precision Prevention
- Genetic risk scores for stroke
- Imaging biomarkers (white matter lesions, microbleeds)
- AI-based risk prediction
- Personalized anticoagulation dosing

## Novel Antithrombotics
- Factor XI inhibitors (asundexian, milvexian)
- Potential for safer anticoagulation
- Phase 3 trials ongoing`,
      keyTerms: [
        { term: 'mobile stroke unit', definition: 'Ambulance equipped with CT scanner for prehospital stroke diagnosis and treatment' },
        { term: 'factor XI inhibitor', definition: 'Novel anticoagulant class potentially offering stroke prevention with less bleeding' },
        { term: 'PSD-95', definition: 'Postsynaptic density protein; target for neuroprotection' },
      ],
      clinicalNotes: 'Factor XI inhibitors show promise for stroke prevention with potentially lower bleeding risk than current anticoagulants. Neuroprotection remains an unmet need despite many failed trials.',
    },
  },

  media: [],
  citations: [{ id: 'aha-stroke-2019', type: 'article', title: 'Guidelines for Early Management of Acute Ischemic Stroke', source: 'Stroke' }],
  crossReferences: [{ targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' }],
  tags: { systems: ['neurological', 'cardiovascular'], topics: ['neurology', 'emergency medicine'], keywords: ['stroke', 'CVA', 'tPA', 'thrombectomy'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'neurology'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default stroke;
