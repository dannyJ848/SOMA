/**
 * Deep Vein Thrombosis - Comprehensive Educational Content
 *
 * Blood clot formation in the deep venous system, most commonly
 * affecting the lower extremities.
 */

import { EducationalContent } from '../../../types';

export const deepVeinThrombosis: EducationalContent = {
  id: 'condition-deep-vein-thrombosis',
  type: 'condition',
  name: 'Deep Vein Thrombosis',
  alternateNames: ['DVT', 'Deep venous thrombosis', 'Venous thromboembolism'],

  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis is a blood clot that forms in a deep vein, usually in the leg, that can be dangerous if it travels to the lungs.',
      explanation: `Deep vein thrombosis (DVT) is when a blood clot forms in a deep vein in your body.

**What Happens:**
- A blood clot blocks a vein, usually in the leg
- The leg may swell, hurt, and feel warm
- The clot can break loose and travel to the lungs (pulmonary embolism)

**Risk Factors:**
- Long periods of not moving (bed rest, long flights)
- Surgery, especially hip/knee surgery
- Cancer
- Pregnancy
- Birth control pills

**Signs:**
- Leg swelling, usually one side
- Pain or tenderness
- Warmth and redness
- Some clots have no symptoms

**Treatment:**
- Blood thinners (anticoagulants) to stop clot from growing
- Treatment usually lasts 3-6 months
- Compression stockings may help with swelling`,
      keyTerms: [
        { term: 'blood clot', definition: 'A clump of blood that becomes solid' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to the lungs' },
        { term: 'anticoagulant', definition: 'Medicine that prevents blood clots from forming or growing' },
      ],
      analogies: [
        'A DVT is like a traffic jam in your vein - blood backs up behind the blockage causing swelling, and if the jam breaks up, pieces can travel to cause problems elsewhere.',
      ],
      examples: [
        'A woman develops leg swelling and pain a week after a long international flight. An ultrasound shows a blood clot in her leg vein.',
      ],
    },
    2: {
      level: 2,
      summary: 'DVT results from Virchow triad factors (stasis, endothelial injury, hypercoagulability) and requires prompt anticoagulation to prevent PE and long-term complications.',
      explanation: `Deep vein thrombosis is a common condition with significant morbidity if not properly managed.

**Virchow Triad:**
1. **Stasis**: Immobility, paralysis, long travel
2. **Endothelial injury**: Surgery, trauma, catheters
3. **Hypercoagulability**: Cancer, pregnancy, thrombophilia

**Classification:**
- Proximal DVT: Popliteal vein and above (higher PE risk)
- Distal DVT: Below the knee (lower PE risk)
- Upper extremity DVT: Often catheter-related

**Clinical Presentation:**
- Unilateral leg swelling
- Calf pain and tenderness
- Warmth, erythema
- Homan sign (unreliable)
- May be asymptomatic

**Diagnosis:**
- Wells score for pretest probability
- D-dimer (high NPV in low-probability)
- Compression ultrasound (gold standard)
- CT venography if needed

**Treatment:**
- Anticoagulation: DOACs preferred for most
- Duration: 3 months minimum
- Extended/indefinite for unprovoked or recurrent
- IVC filter if anticoagulation contraindicated

**Complications:**
- Pulmonary embolism (most serious acute)
- Post-thrombotic syndrome (chronic)
- Recurrence`,
      keyTerms: [
        { term: 'Virchow triad', definition: 'Three factors predisposing to thrombosis: stasis, injury, hypercoagulability' },
        { term: 'proximal DVT', definition: 'DVT at or above the popliteal vein; higher PE risk' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic leg swelling and pain after DVT from venous damage' },
        { term: 'Wells score', definition: 'Clinical prediction rule estimating DVT probability' },
      ],
      analogies: [
        'The venous system is like a highway. DVT is a pileup that blocks traffic flow, and the backed-up blood causes congestion (swelling) below the blockage.',
      ],
    },
    3: {
      level: 3,
      summary: 'DVT management requires risk stratification for diagnosis, evidence-based anticoagulation selection, and attention to duration decisions and complication prevention.',
      explanation: `## Overview

DVT affects ~1-2/1000 adults annually, with lifetime risk of 2-5%.

## Risk Factors

**Strong (OR >10):**
- Fracture (hip, leg)
- Hip/knee replacement
- Major surgery
- Major trauma
- Spinal cord injury

**Moderate (OR 2-9):**
- Cancer
- Central venous catheter
- CHF, respiratory failure
- Pregnancy/postpartum
- Estrogen therapy
- Prior VTE

**Weak (OR <2):**
- Age
- Obesity
- Immobility
- Varicose veins

## Diagnosis

**Wells Score for DVT:**
| Criterion | Points |
|-----------|--------|
| Active cancer | +1 |
| Paralysis/immobilization | +1 |
| Bedridden >3 days or surgery <4 weeks | +1 |
| Tenderness along deep venous system | +1 |
| Entire leg swollen | +1 |
| Calf swelling >3 cm vs other side | +1 |
| Pitting edema (greater in symptomatic leg) | +1 |
| Collateral superficial veins | +1 |
| Alternative diagnosis as likely | -2 |

**Interpretation:**
- Low probability (≤0): D-dimer, if negative = rule out
- Moderate (1-2): D-dimer, if positive = ultrasound
- High (≥3): Ultrasound directly

**D-dimer:**
- High NPV in low/moderate pretest probability
- Age-adjusted cutoff: Age x 10 (>50 years)
- False positives: Pregnancy, cancer, infection, recent surgery

## Treatment

**Anticoagulation Options:**
| Agent | Route | Monitoring | Reversal |
|-------|-------|------------|----------|
| Rivaroxaban | PO | None | Andexanet |
| Apixaban | PO | None | Andexanet |
| Edoxaban | PO | None | Andexanet |
| Dabigatran | PO | None | Idarucizumab |
| Warfarin | PO | INR | Vitamin K, PCC |
| LMWH | SQ | None/anti-Xa | Protamine (partial) |

**Choice Considerations:**
- DOACs: First line for most
- LMWH: Cancer (or DOAC), pregnancy
- Warfarin: Mechanical valves, APS, renal failure

**Duration:**
- Provoked (surgery, trauma): 3 months
- Unprovoked: Consider extended (individualized)
- Cancer-associated: While cancer active, minimum 6 months
- Recurrent: Indefinite

## Complications

**Post-Thrombotic Syndrome:**
- 20-50% develop within 2 years
- Chronic leg swelling, pain, skin changes
- Villalta score for severity
- Prevention: Early mobilization, compression unclear
- Treatment: Compression, elevation

**IVC Filters:**
- Indication: Contraindication to anticoagulation
- Retrievable filters preferred
- Complications: Insertion site, filter thrombosis, migration`,
      keyTerms: [
        { term: 'age-adjusted D-dimer', definition: 'Using age x 10 as cutoff in patients >50 years to improve specificity' },
        { term: 'Villalta score', definition: 'Scoring system for post-thrombotic syndrome severity' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant (rivaroxaban, apixaban, edoxaban, dabigatran)' },
        { term: 'retrievable IVC filter', definition: 'Filter that can be removed once anticoagulation is possible' },
      ],
      clinicalNotes: 'Isolated distal DVT: Can observe with serial ultrasound or treat for 3 months. Treat if symptomatic, proximal extension risk, or unable to follow closely.',
    },
    4: {
      level: 4,
      summary: 'DVT management integrates pretest probability assessment, imaging strategies, evidence-based anticoagulation, and individualized duration decisions.',
      explanation: `## Pathophysiology

**Thrombus Formation:**
- Venous valves are common initiation sites
- Stasis activates endothelium
- Tissue factor exposure
- Propagation cephalad and peripheral

**Natural History:**
- Acute phase: Risk of embolization
- Organization: Fibrosis begins ~7-14 days
- Recanalization: Partial, often with valve damage
- Collateralization: Alternate flow pathways

## Diagnostic Strategy

**Low Pretest Probability:**
- D-dimer first
- If negative: DVT ruled out (NPV ~99%)
- If positive: Ultrasound

**Moderate/High Pretest Probability:**
- Ultrasound first
- If negative but high suspicion: Repeat in 7 days or whole-leg US

**D-dimer Considerations:**
- Age-adjusted (age x 10) improves specificity
- Clinical gestalt can trump scores
- Limited utility in hospitalized/cancer patients

## Anticoagulation Details

**DOAC Regimens:**
- Rivaroxaban: 15mg BID x 21 days → 20mg daily
- Apixaban: 10mg BID x 7 days → 5mg BID
- Edoxaban: LMWH lead-in → 60mg daily
- Dabigatran: LMWH lead-in → 150mg BID

**Advantages of DOACs:**
- No monitoring
- Fewer drug interactions (vs warfarin)
- Fixed dosing
- Rapid onset (no bridging for most)

**When to Avoid DOACs:**
- Severe renal impairment (varies by agent)
- Triple-positive APS
- Mechanical heart valves
- Severe liver disease
- GI absorption concerns

## Special Situations

**Cancer-Associated DVT:**
- SELECT-D, Hokusai-Cancer: DOACs non-inferior to LMWH
- Edoxaban, rivaroxaban approved
- Caution: GI/GU cancers have increased bleeding with DOACs
- Duration: Minimum 6 months, often extended

**Upper Extremity DVT:**
- Usually catheter-related or effort-related (Paget-Schroetter)
- Remove catheter if possible
- Anticoagulation similar duration principles
- Paget-Schroetter: Consider thrombolysis, thoracic outlet evaluation

**Pregnancy:**
- LMWH only (DOACs contraindicated)
- Weight-based dosing, monitor anti-Xa
- Continue 6 weeks postpartum (minimum 3 months total)

**Perioperative:**
- Stop DOACs 2-4 days before procedure (varies by agent, renal function)
- Bridging: High-risk patients, mechanical valves
- Resume 24-72 hours after (bleeding risk dependent)

## Thrombolysis Consideration

**Catheter-Directed Thrombolysis:**
- Selected iliofemoral DVT
- Young patients, low bleeding risk
- May reduce PTS (ATTRACT trial: modest benefit)
- Not routine`,
      keyTerms: [
        { term: 'Paget-Schroetter syndrome', definition: 'Effort thrombosis of axillary-subclavian vein from thoracic outlet compression' },
        { term: 'ATTRACT trial', definition: 'Trial showing modest PTS benefit with catheter-directed thrombolysis in proximal DVT' },
        { term: 'SELECT-D', definition: 'Trial supporting rivaroxaban in cancer-associated VTE' },
        { term: 'bridging anticoagulation', definition: 'Using parenteral anticoagulant while oral agent is held perioperatively' },
      ],
      clinicalNotes: 'For cancer patients with GI/GU malignancy, the DOAC GI bleeding excess may outweigh convenience benefit - consider LMWH. Always assess GI tumor burden.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DVT management optimizes outcomes through evidence-based diagnosis, individualized anticoagulation, duration decisions based on recurrence risk, and PTS prevention strategies.',
      explanation: `## Precision Diagnosis

**Integrated Diagnostic Pathways:**
- YEARS algorithm: Simplified approach
  - 3 items: Clinical signs DVT, hemoptysis, PE most likely
  - 0 items + D-dimer <1000: Rule out
  - ≥1 items: D-dimer <500 rule out
  - Otherwise: Imaging

**Novel Biomarkers:**
- Residual vein occlusion: Predicts recurrence
- D-dimer after stopping anticoagulation: Guides extended therapy
- Thrombin generation: Research

## Duration Decision Framework

**Extended Treatment Benefit:**
- Reduces recurrence by 80-90%
- Increases major bleeding 2-3x
- No mortality benefit in trials

**Risk Assessment:**
| Factor | Recurrence Risk |
|--------|-----------------|
| Provoked (major surgery) | 1%/year |
| Minor provoking factor | 5%/year |
| Unprovoked | 7-10%/year |
| Cancer | 15%/year |

**Prediction Scores:**
- HERDOO2 (women): Safe to stop if low-risk
- Vienna model: D-dimer-based prediction
- Men have higher baseline recurrence risk

**Low-Intensity Extended Therapy:**
- Rivaroxaban 10mg daily (EINSTEIN-Choice)
- Apixaban 2.5mg BID (AMPLIFY-EXT)
- 80% reduction in recurrence, bleeding similar to placebo

## Post-Thrombotic Syndrome Prevention

**Evidence:**
- Compression stockings: SOX trial negative, but heterogeneous
- Early mobilization: Safe, may help
- Thrombolysis: ATTRACT - modest benefit in iliofemoral

**Risk Factors for PTS:**
- Proximal DVT
- Recurrent ipsilateral DVT
- Obesity
- Residual venous obstruction
- Inadequate anticoagulation

**Management:**
- Graduated compression
- Exercise/physical therapy
- Skin care
- Venous ulcer management if severe

## Emerging Approaches

**Factor XI Inhibitors:**
- Target intrinsic pathway
- May reduce bleeding vs Xa inhibitors
- Phase 3 trials ongoing (PACIFIC)
- Milvexian, asundexian

**Biomarker-Guided Duration:**
- D-dimer testing after stopping
- Elevated D-dimer: Consider resuming therapy
- PROLONG, DULCIS trials support approach

**Artificial Intelligence:**
- Risk prediction models
- Image interpretation assistance
- Duration decision tools

## Quality Metrics

**Performance Indicators:**
- Appropriate diagnostic pathway use
- Anticoagulation within 24 hours
- DOAC prescribing (when appropriate)
- Duration decisions documented
- Follow-up within 1 month

**Patient Education:**
- Bleeding precautions
- Drug interactions
- Signs of recurrence/PE
- Adherence importance`,
      keyTerms: [
        { term: 'YEARS algorithm', definition: 'Simplified diagnostic pathway for PE/DVT reducing imaging' },
        { term: 'EINSTEIN-Choice', definition: 'Trial showing reduced-dose rivaroxaban effective for extended treatment' },
        { term: 'SOX trial', definition: 'Trial finding compression stockings did not prevent PTS' },
        { term: 'factor XI inhibitors', definition: 'Novel anticoagulants targeting intrinsic pathway with potential bleeding advantage' },
      ],
      clinicalNotes: `**Board Pearls:**
- Wells score + D-dimer = efficient DVT diagnosis
- Age-adjusted D-dimer (age x 10) in patients >50
- DOACs first line for most DVT (except cancer GI/GU, APS, renal failure)
- Duration: 3 months provoked, consider extended for unprovoked
- Cancer-associated: Minimum 6 months, often indefinite
- Post-thrombotic syndrome: 20-50%, prevention uncertain
- Low-dose extended DOAC: Rivaroxaban 10mg or apixaban 2.5mg BID
- Isolated distal DVT: Can observe with serial US if low risk`,
    },
  },

  media: [
    {
      id: 'dvt-ultrasound',
      type: 'image',
      filename: 'dvt-compression-ultrasound.jpg',
      title: 'DVT on Compression Ultrasound',
      description: 'Non-compressible vein with intraluminal echoes',
    },
  ],

  citations: [
    {
      id: 'kearon-2016',
      type: 'article',
      title: 'Antithrombotic Therapy for VTE Disease: CHEST Guideline',
      authors: ['Kearon C', 'Akl EA', 'Ornelas J', 'et al'],
      source: 'Chest',
      url: 'https://doi.org/10.1016/j.chest.2015.11.026',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
    { targetId: 'condition-thrombophilia', targetType: 'condition', relationship: 'related', label: 'Thrombophilia' },
  ],

  tags: {
    systems: ['hematologic', 'cardiovascular'],
    topics: ['thrombosis', 'anticoagulation', 'hematology'],
    keywords: ['DVT', 'blood clot', 'anticoagulation', 'DOAC', 'venous thromboembolism'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default deepVeinThrombosis;
