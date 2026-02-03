/**
 * Deep Vein Thrombosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const dvt: EducationalContent = {
  id: 'condition-deep-vein-thrombosis',
  type: 'condition',
  name: 'Deep Vein Thrombosis',
  alternateNames: ['DVT', 'Blood Clot in Leg', 'Venous Thromboembolism'],
  hpoId: 'HP:0002625',

  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis is a blood clot that forms in a deep vein, usually in the leg, which can be dangerous if it travels to the lungs.',
      explanation: `A DVT is a blood clot in the deep veins of your leg. The danger is that the clot can break loose and travel to your lungs (pulmonary embolism), which can be life-threatening.

**Symptoms:**
- Swelling in one leg
- Pain or tenderness in the calf
- Warmth and redness
- Sometimes no symptoms at all

**Risk factors:**
- Long periods of sitting (travel, bed rest)
- Recent surgery
- Cancer
- Pregnancy
- Birth control pills
- Smoking

**Treatment:** Blood thinners to prevent clot growth and new clots`,
      keyTerms: [
        { term: 'DVT', definition: 'Blood clot in a deep vein, usually in the leg' },
        { term: 'pulmonary embolism', definition: 'Blood clot that travels to the lungs' },
        { term: 'blood thinners', definition: 'Medications that prevent blood clots' },
      ],
      analogies: ['A DVT is like a dam forming in a river—it blocks flow and pieces can break off and float downstream.'],
      examples: ['Someone who develops a swollen, painful calf after a long flight may have a DVT.'],
    },
    2: {
      level: 2,
      summary: 'DVT is diagnosed clinically and with ultrasound, treated with anticoagulation (DOACs preferred), with duration depending on provoked vs unprovoked status and bleeding risk.',
      explanation: `## Diagnosis
**Clinical:** Wells Score for DVT probability
**Imaging:**
- D-dimer (to rule out if low probability)
- Compression ultrasound (first-line confirmatory)

## Wells Score Criteria
- Active cancer, paralysis, recent immobilization, bedridden >3 days
- Tenderness along deep veins, entire leg swelling
- Calf swelling >3cm compared to other leg
- Pitting edema, collateral superficial veins
- Alternative diagnosis as likely: -2 points

**Score ≥2:** DVT likely, ultrasound first
**Score <2:** D-dimer first

## Treatment
**Anticoagulation:**
- DOACs preferred (rivaroxaban, apixaban)
- Duration:
  - Provoked (surgery, travel): 3 months
  - Unprovoked: ≥3 months, consider indefinite
  - Cancer: LMWH or DOAC, often indefinite

## Prevention (Hospitalized patients)
- Pharmacologic prophylaxis (heparin, enoxaparin)
- Mechanical (compression devices)
- Early mobilization`,
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant (rivaroxaban, apixaban, etc.)' },
        { term: 'D-dimer', definition: 'Blood test; if negative, helps rule out DVT' },
        { term: 'provoked DVT', definition: 'DVT with identifiable transient risk factor (surgery, immobilization)' },
      ],
    },
    3: {
      level: 3,
      summary: 'VTE pathophysiology involves Virchow\'s triad, with treatment selection based on clot extent, bleeding risk, and special populations, including catheter-directed therapy for massive iliofemoral DVT.',
      explanation: `## Pathophysiology (Virchow's Triad)
1. **Stasis:** Immobility, venous obstruction
2. **Endothelial injury:** Surgery, trauma, catheter
3. **Hypercoagulability:** Cancer, inherited thrombophilia, pregnancy

## Classification
**Proximal DVT:** Popliteal vein and above (higher PE risk)
**Distal DVT:** Below popliteal (lower risk, may observe)
**Iliofemoral DVT:** Iliac veins (highest severity)

## Anticoagulation Options
| Agent | Advantages | Disadvantages |
|-------|------------|---------------|
| Rivaroxaban/Apixaban | Oral, no monitoring, single drug | Renal dosing, no antidote for all |
| Warfarin | Cheap, reversible | Bridging, INR monitoring, interactions |
| LMWH | Injectable, predictable | Injections, renal adjustment |
| UFH | IV, fully reversible | Requires monitoring, HIT risk |

## Catheter-Directed Thrombolysis
**Indications:**
- Massive iliofemoral DVT
- Severe symptoms, phlegmasia
- Young, low bleeding risk
- Symptom duration <14 days

## Post-Thrombotic Syndrome (PTS)
- Chronic venous insufficiency after DVT
- Pain, swelling, skin changes
- Compression stockings (controversial for prevention)`,
      keyTerms: [
        { term: 'Virchow\'s triad', definition: 'Three factors contributing to thrombosis: stasis, endothelial injury, hypercoagulability' },
        { term: 'phlegmasia cerulea dolens', definition: 'Massive DVT with limb-threatening ischemia' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic leg symptoms after DVT from venous damage' },
      ],
      clinicalNotes: 'DOACs are contraindicated with antiphospholipid syndrome (triple positive) and severe renal impairment. Consider catheter-directed therapy for symptomatic iliofemoral DVT in good surgical candidates.',
    },
    4: {
      level: 4,
      summary: 'Advanced VTE management addresses extended anticoagulation decisions, thrombophilia testing, cancer-associated thrombosis, and special scenarios including pregnancy and antiphospholipid syndrome.',
      explanation: `## Extended Anticoagulation
**Risk-Benefit Assessment:**
- Recurrence risk: Unprovoked > provoked, male > female
- Bleeding risk: Age, renal function, prior bleed

**Tools:**
- DASH score, Vienna prediction model
- D-dimer after stopping (elevated = higher recurrence)

**Reduced-Dose Options:**
- Apixaban 2.5mg BID after 6 months
- Rivaroxaban 10mg daily after 6 months

## Thrombophilia Testing
**When:**
- Unprovoked VTE in young patient
- Strong family history
- Recurrent VTE
- Unusual site (splanchnic, cerebral)

**What:**
- Factor V Leiden, prothrombin mutation
- Antithrombin, protein C/S deficiency
- Antiphospholipid antibodies

## Cancer-Associated VTE
- High recurrence risk
- LMWH traditionally preferred
- DOACs (edoxaban, rivaroxaban) now options
- Caution with GI/GU cancers (bleeding)

## Antiphospholipid Syndrome
- Triple positive (LA, aCL, anti-β2GPI)
- Warfarin preferred (DOACs inferior)
- High target INR (2.5-3.5) for arterial events`,
      keyTerms: [
        { term: 'extended anticoagulation', definition: 'Anticoagulation beyond standard treatment period for long-term prevention' },
        { term: 'antiphospholipid syndrome', definition: 'Autoimmune disorder with high thrombosis risk requiring warfarin' },
        { term: 'reduced-dose DOAC', definition: 'Lower DOAC doses for extended secondary prevention' },
      ],
      clinicalNotes: 'D-dimer measured 1 month after stopping anticoagulation helps predict recurrence. DOACs are inferior to warfarin in antiphospholipid syndrome—use warfarin.',
    },
    5: {
      level: 5,
      summary: 'Precision VTE medicine integrates polygenic risk scores, novel anticoagulants targeting factor XI, understanding residual vein thrombosis, and personalized duration strategies.',
      explanation: `## Novel Anticoagulants
**Factor XI Inhibitors:**
- Theoretical: Thrombosis protection without bleeding
- Abelacimab, asundexian, milvexian
- Phase 3 trials ongoing
- May be "safe" long-term anticoagulation

**Factor XII Inhibitors:**
- Even further upstream
- Earlier development stage

## Biomarkers
**D-dimer:**
- Post-treatment elevation predicts recurrence
- May guide duration

**Residual Vein Thrombosis:**
- Persistent thrombus on ultrasound
- Controversial as predictor

**Thrombin Generation Assays:**
- Functional hypercoagulability testing

## Precision Approaches
- Polygenic risk scores for recurrence
- Pharmacogenomics (warfarin sensitivity)
- Machine learning for risk prediction

## Prevention Innovation
- Extended thromboprophylaxis post-surgery (rivaroxaban, betrixaban)
- Risk-adapted prophylaxis
- Wearable compression devices`,
      keyTerms: [
        { term: 'factor XI inhibitor', definition: 'Novel anticoagulant class potentially offering antithrombotic effect with reduced bleeding' },
        { term: 'residual vein thrombosis', definition: 'Persistent thrombus on ultrasound after treatment completion' },
        { term: 'thrombin generation assay', definition: 'Functional test measuring overall coagulation potential' },
      ],
      clinicalNotes: 'Factor XI inhibitors represent the most exciting development in anticoagulation—may allow long-term thrombosis prevention without significant bleeding risk. Phase 3 trials will define clinical role.',
    },
  },

  media: [],
  citations: [{ id: 'ash-vte-2020', type: 'article', title: 'ASH Guidelines on VTE Treatment', source: 'Blood Advances' }],
  crossReferences: [{ targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' }],
  tags: { systems: ['hematologic', 'cardiovascular'], topics: ['hematology', 'vascular'], keywords: ['DVT', 'blood clot', 'anticoagulation', 'DOAC', 'VTE'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dvt;
