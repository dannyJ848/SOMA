/**
 * Deep Vein Thrombosis - Comprehensive Educational Content
 *
 * Comprehensive coverage of DVT including risk factors, diagnosis,
 * treatment, and prevention strategies.
 */

import { EducationalContent } from '../../../types';

export const deepVeinThrombosis: EducationalContent = {
  id: 'condition-deep-vein-thrombosis',
  type: 'condition',
  name: 'Deep Vein Thrombosis',
  alternateNames: ['DVT', 'Venous Thrombosis', 'Blood Clot in Leg', 'VTE'],
  hpoId: 'HP:0001907',

  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the leg. It can be dangerous if the clot travels to the lungs.',
      explanation: `A DVT is a blood clot that forms inside a deep vein, most often in the calf or thigh.

**What Happens:**
- Blood pools and clots in a deep vein
- The clot can block blood flow
- Part of the clot can break off and travel to the lungs (pulmonary embolism)

**Warning Signs:**
- Swelling in one leg
- Pain or tenderness in the leg
- Warmth over the area
- Red or discolored skin
- Leg pain that worsens when walking

**Risk Factors:**
- Being immobile (bed rest, long plane rides)
- Recent surgery
- Cancer
- Pregnancy
- Birth control pills or hormone therapy
- Being overweight
- Family history of blood clots
- Smoking

**Serious Warning Signs (Pulmonary Embolism):**
- Sudden shortness of breath
- Chest pain
- Coughing up blood
- Fast heartbeat

**Treatment:**
- Blood thinning medicine (anticoagulants)
- Sometimes medicine to dissolve the clot
- Special stockings to prevent swelling`,
      keyTerms: [
        { term: 'pulmonary embolism', definition: 'When a blood clot travels to the lungs' },
        { term: 'anticoagulant', definition: 'Medicine that prevents blood clots from forming or growing' },
        { term: 'vein', definition: 'Blood vessel that carries blood back to the heart' },
      ],
      analogies: [
        'Think of a vein like a river. If the water slows down and debris collects, it can form a dam. A DVT is like that dam blocking blood flow.',
      ],
      examples: [
        'After a long airplane flight, someone notices their calf is swollen and painful.',
        'A person recovering from hip surgery develops sudden shortness of breath.',
      ],
    },
    2: {
      level: 2,
      summary: 'DVT is part of venous thromboembolism (VTE); risk stratification using Well\'s criteria guides diagnostic approach; treatment is anticoagulation for at least 3 months.',
      explanation: `Deep vein thrombosis is a common and potentially life-threatening condition.

**Virchow's Triad (Causes of Thrombosis):**
1. Stasis: Immobility, heart failure, varicose veins
2. Hypercoagulability: Cancer, pregnancy, inherited thrombophilia
3. Endothelial injury: Surgery, trauma, IV catheters

**Wells Clinical Prediction Score for DVT:**
- Active cancer (+1)
- Paralysis/paresis (+1)
- Bedridden >3 days or major surgery <12 weeks (+1)
- Localized tenderness (+1)
- Entire leg swollen (+1)
- Calf swelling >3 cm vs. asymptomatic side (+1)
- Pitting edema (+1)
- Collateral superficial veins (+1)
- History of DVT (+1)
- Alternative diagnosis more likely (-2)
- Score ≥2: DVT likely; <2: DVT unlikely

**Diagnosis:**
- D-dimer: High sensitivity, low specificity (rules out if negative with low probability)
- Compression ultrasound: Gold standard for proximal DVT
- CT venography: If ultrasound negative but high suspicion

**Treatment:**
- Anticoagulation for minimum 3 months
- DOACs preferred: Rivaroxaban, apixaban, dabigatran, edoxaban
- LMWH/warfarin: For specific patients (cancer, severe renal impairment)
- Duration based on provocation and recurrence risk`,
      keyTerms: [
        { term: 'Virchow triad', definition: 'Three factors contributing to thrombosis: stasis, hypercoagulability, endothelial injury' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer blood thinners like rivaroxaban and apixaban' },
        { term: 'D-dimer', definition: 'Breakdown product of fibrin; elevated in DVT/PE' },
      ],
    },
    3: {
      level: 3,
      summary: 'DVT diagnosis uses Wells score to guide testing; proximal DVT requires anticoagulation for 3+ months; distal DVT may be observed in select patients.',
      explanation: `Evidence-based DVT management incorporates risk stratification and anticoagulation selection.

**Diagnostic Algorithm:**
- Wells score <2 (DVT unlikely): D-dimer
  - Negative D-dimer: DVT excluded
  - Positive D-dimer: Ultrasound
- Wells score ≥2 (DVT likely): Ultrasound
  - Positive: Treat
  - Negative: D-dimer; if positive, repeat US in 1 week

**Anticoagulant Selection:**
- DOACs (first-line for most):
  - Rivaroxaban: 15 mg BID x 21 days, then 20 mg daily
  - Apixaban: 10 mg BID x 7 days, then 5 mg BID
  - Dabigatran: 5 days parenteral lead-in, then 150 mg BID
  - Edoxaban: 5 days parenteral lead-in, then 60 mg daily
- LMWH + warfarin (overlapping until INR 2-3)
- Cancer-associated: LMWH preferred, though DOACs increasingly used

**Duration of Therapy:**
- Provoked (transient risk factor): 3 months
- Unprovoked: At least 3 months; consider indefinite if low bleeding risk
- Cancer: While cancer active or on treatment
- Recurrent unprovoked: Indefinite
- Thrombophilia: Based on type and clinical context

**Distal (Calf) DVT:**
- Lower PE risk than proximal
- May observe with serial ultrasound if asymptomatic
- Anticoagulate if: Symptomatic, risk factors for extension, D-dimer positive`,
      keyTerms: [
        { term: 'proximal DVT', definition: 'Clot in popliteal, femoral, or iliac veins; higher PE risk' },
        { term: 'distal DVT', definition: 'Clot in calf veins; lower PE risk' },
        { term: 'provoked VTE', definition: 'VTE with transient risk factor (surgery, immobility, etc.)' },
      ],
    },
    4: {
      level: 4,
      summary: 'DVT management includes risk-appropriate anticoagulant selection, duration based on provocation and recurrence risk, and inferior vena cava filters only when anticoagulation is contraindicated.',
      explanation: `Advanced DVT management addresses complex clinical scenarios and treatment decisions.

**DOAC Considerations:**
- Renal impairment:
  - Apixaban: No adjustment for CrCl >25; caution <25
  - Rivaroxaban: Avoid if CrCl <15; reduce to 15 mg if CrCl 15-50
  - Dabigatran: Contraindicated if CrCl <30
  - Edoxaban: Avoid if CrCl >95 (increased stroke risk in AF; OK for VTE)
- Drug interactions: CYP3A4/P-gp inhibitors/inducers
- Obesity: Limited data >120 kg; consider anti-Xa levels

**Cancer-Associated Thrombosis (CAT):**
- LMWH (dalteparin) was standard for years
- SELECT-D, Hokusai VTE Cancer: DOACs non-inferior
- Current options:
  - LMWH: Still preferred for GI/GU cancers (lower GI bleeding)
  - Rivaroxaban, apixaban, edoxaban: Options for other cancers
  - Consider bleeding risk vs convenience

**IVC Filters:**
- Indication: Contraindication to anticoagulation with acute proximal DVT
- Retrieve when anticoagulation can resume
- Complications: Migration, fracture, IVC thrombosis
- Not recommended for prophylaxis alone

**Post-Thrombotic Syndrome (PTS):**
- Occurs in 20-50% after proximal DVT
- Chronic pain, swelling, ulcers
- Compression stockings: Limited evidence for prevention
- Early thrombolysis: May reduce PTS but increases bleeding

**Provoked vs. Unprovoked Decision:**
- Provoked: Surgery, trauma, immobilization, estrogen, pregnancy
- Unprovoked: No obvious trigger
- Weak provocation (long flight, minor injury): May warrant extended therapy
- Workup for occult cancer: Age-appropriate screening`,
      keyTerms: [
        { term: 'CAT', definition: 'Cancer-associated thrombosis; requires special anticoagulation considerations' },
        { term: 'PTS', definition: 'Post-thrombotic syndrome; chronic complication of DVT' },
        { term: 'IVC filter', definition: 'Device to prevent PE when anticoagulation contraindicated' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert DVT management integrates risk stratification, DOAC selection for most patients, LMWH for cancer-associated thrombosis, and individualized duration based on recurrence vs. bleeding risk.',
      explanation: `Comprehensive VTE management addresses complex patients and emerging evidence.

**Risk Assessment for Treatment Duration:**
- Recurrence risk factors:
  - Unprovoked VTE, male sex, elevated D-dimer after stopping
  - Thrombophilia (especially antiphospholipid syndrome)
  - Persistent risk factors (active cancer, ongoing immobility)
- Bleeding risk factors:
  - Age >65, prior bleeding, renal/liver disease, thrombocytopenia
  - Antiplatelet use, uncontrolled hypertension
  - HAS-BLED can be applied
- Decision aids available (DASH, Vienna prediction model)

**Special Populations:**

*Renal Impairment:*
- Apixaban preferred for moderate-severe CKD
- LMWH accumulates in severe CKD (reduce enoxaparin dose)
- Warfarin if CrCl <15 with caution

*Obesity:*
- Standard DOAC doses likely adequate for BMI 30-40
- Limited data >150 kg; check drug levels if concern
- LMWH requires weight-based dosing with cap

*Pregnancy:*
- LMWH throughout pregnancy and 6 weeks postpartum
- Warfarin contraindicated (teratogenic weeks 6-12)
- DOACs not approved; limited safety data

*Elderly:*
- Higher bleeding risk
- Apixaban lower bleeding than warfarin in this group
- Consider reduced dose apixaban if criteria met

**Emerging Therapeutics:**
- Factor XI inhibitors: In trials, may reduce bleeding
- Direct oral factor V inhibitors
- Better risk stratification tools

**Thrombophilia Testing:**
- Not routine after first VTE
- Consider if: Young (<50), unprovoked, recurrent, family history, unusual site
- Test off anticoagulation or after 2-4 weeks of warfarin cessation
- Antiphospholipid syndrome affects management`,
      keyTerms: [
        { term: 'Vienna prediction model', definition: 'Predicts recurrent VTE risk to guide treatment duration' },
        { term: 'factor XI inhibitors', definition: 'Novel anticoagulants in development; may reduce bleeding' },
        { term: 'antiphospholipid syndrome', definition: 'Autoimmune thrombophilia requiring indefinite anticoagulation' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular', 'hematologic'],
    topics: ['thrombosis', 'DVT', 'anticoagulation'],
    keywords: ['DVT', 'deep vein thrombosis', 'VTE', 'anticoagulation', 'blood clot'],
    clinicalRelevance: 'critical',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default deepVeinThrombosis;
