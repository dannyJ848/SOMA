import { EducationalContent } from '../types';

export const deepVeinThrombosis: EducationalContent = {
  id: 'hematology-deep-vein-thrombosis',
  type: 'condition',
  name: 'Deep Vein Thrombosis',
  alternateNames: ['DVT', 'Deep Venous Thrombosis', 'Leg Clot', 'Blood Clot in Leg'],
  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the leg, which can be dangerous if it travels to the lungs.',
      explanation: `Deep vein thrombosis, or DVT, happens when a blood clot forms in a deep vein, most often in your leg. These deep veins are located in your muscles, not the veins you can see near the skin surface.

**Why does DVT happen?**
Blood clots can form when:
- You sit or lie still for a long time (like during a long flight or hospital stay)
- You have surgery, especially on your legs or hips
- You have an injury to a vein
- Certain conditions make your blood clot more easily

**What are the warning signs?**
- Swelling in one leg (not both)
- Pain or tenderness in the leg, often in the calf
- Warmth in the affected area
- Red or discolored skin
- Some people have no symptoms at all

**Why is DVT dangerous?**
The biggest danger is that part of the clot can break off and travel through your bloodstream to your lungs. This is called a pulmonary embolism (PE) and is a medical emergency that can be life-threatening.

**How is DVT treated?**
- Blood thinners (anticoagulants) are the main treatment
- These medicines help prevent the clot from growing and new clots from forming
- Your body gradually breaks down the existing clot over time

**How can you prevent DVT?**
- Move around regularly, especially during long trips
- Do leg exercises when you cannot walk
- Wear compression stockings if recommended
- Stay hydrated
- Take prescribed blood thinners after surgery if instructed`,
      keyTerms: [
        { term: 'Deep vein', definition: 'Veins located deep in the body, within the muscles, that carry blood back to the heart' },
        { term: 'Blood clot', definition: 'A clump of blood that has changed from liquid to a gel-like state' },
        { term: 'Pulmonary embolism', definition: 'A blood clot that travels to the lungs, a medical emergency' },
        { term: 'Anticoagulant', definition: 'A medicine that helps prevent blood clots from forming or growing' },
        { term: 'Compression stockings', definition: 'Special tight socks that help blood flow in your legs' },
      ],
      analogies: [
        'A DVT is like a traffic jam in your leg - blood cannot flow properly past the clot',
        'Think of your veins like highways; a clot is like a major accident blocking lanes',
        'Blood thinners work like traffic police, helping keep blood flowing smoothly',
      ],
      examples: [
        'A traveler develops leg swelling and pain after a 12-hour flight',
        'A patient recovering from hip surgery notices one calf is much larger than the other',
        'An office worker who sits all day develops DVT in their leg',
      ],
    },
    2: {
      level: 2,
      summary: 'DVT is caused by Virchow\'s triad of venous stasis, endothelial injury, and hypercoagulability, presenting with unilateral leg swelling and pain, diagnosed by compression ultrasound, and treated with anticoagulation.',
      explanation: `**Pathophysiology - Virchow's Triad:**

1. **Venous Stasis** (slow blood flow):
   - Prolonged immobility (bed rest, long travel)
   - Heart failure
   - Obesity
   - Varicose veins

2. **Endothelial Injury** (vein wall damage):
   - Surgery (especially orthopedic)
   - Trauma
   - Central venous catheters
   - Previous DVT

3. **Hypercoagulability** (blood clots too easily):
   - Inherited: Factor V Leiden, prothrombin mutation
   - Acquired: Cancer, pregnancy, oral contraceptives, antiphospholipid syndrome

**Clinical Presentation:**
- Unilateral leg swelling (most reliable sign)
- Pain or tenderness, often in calf
- Warmth, erythema
- Palpable cord (thrombosed vein)
- Positive Homans sign (calf pain with dorsiflexion) - not reliable
- Up to 50% may be asymptomatic

**Anatomic Classification:**
- Proximal DVT: Popliteal vein and above (higher PE risk)
- Distal DVT: Below the knee (calf veins)
- Iliofemoral DVT: Iliac and femoral veins (highest risk)

**Diagnosis:**

*Clinical Prediction Rules:*
- Wells Score for DVT estimates pretest probability
- Determines need for D-dimer vs. direct imaging

*D-dimer:*
- Highly sensitive but not specific
- Useful for ruling out DVT when negative in low-probability patients
- Elevated in many conditions (infection, inflammation, pregnancy, cancer)

*Compression Ultrasound:*
- First-line imaging test
- Non-compressibility of vein is diagnostic
- Can visualize thrombus directly
- Sensitivity >95% for proximal DVT

**Treatment:**
- Anticoagulation is the cornerstone
- Duration depends on provoking factors
- Provoked (transient risk factor): 3 months
- Unprovoked or persistent risk: Consider extended therapy
- Compression stockings may help prevent post-thrombotic syndrome`,
      keyTerms: [
        { term: 'Virchow\'s triad', definition: 'Three factors that contribute to blood clot formation: stasis, injury, and hypercoagulability' },
        { term: 'Proximal DVT', definition: 'Blood clot in the popliteal vein or higher, carries greater risk of pulmonary embolism' },
        { term: 'D-dimer', definition: 'A blood test that detects clot breakdown products; used to rule out DVT' },
        { term: 'Compression ultrasound', definition: 'Imaging test where inability to compress the vein indicates a clot' },
        { term: 'Wells Score', definition: 'Clinical prediction tool that estimates the probability of having DVT' },
        { term: 'Provoked DVT', definition: 'DVT caused by an identifiable temporary risk factor like surgery' },
      ],
      analogies: [
        'Virchow\'s triad is like the perfect storm - three conditions that together make clots likely',
        'D-dimer is like finding debris after a building collapse - it proves something was destroyed but not exactly what',
        'Compression ultrasound is like squeezing a garden hose - if it does not flatten, something is blocking it',
      ],
      examples: [
        'A patient 5 days after knee replacement surgery develops painful calf swelling - proximal DVT',
        'A young woman on birth control pills with a Factor V Leiden mutation gets an unprovoked DVT',
        'A cancer patient with limited mobility develops iliofemoral DVT',
      ],
    },
    3: {
      level: 3,
      summary: 'DVT management involves risk stratification using clinical prediction rules, selection of appropriate anticoagulation therapy, determination of treatment duration, and prevention of complications including post-thrombotic syndrome.',
      explanation: `**Diagnostic Algorithm:**

1. Calculate Wells Score for DVT:
   - Active cancer (+1)
   - Paralysis/immobilization of leg (+1)
   - Bedridden >3 days or major surgery within 12 weeks (+1)
   - Localized tenderness along deep veins (+1)
   - Entire leg swollen (+1)
   - Calf swelling >3 cm vs. other leg (+1)
   - Pitting edema in symptomatic leg (+1)
   - Collateral superficial veins (+1)
   - Previously documented DVT (+1)
   - Alternative diagnosis as likely (-2)

2. Interpret Score:
   - Low probability (<2): D-dimer; if negative, DVT excluded
   - Moderate/High probability (>=2): Proceed directly to ultrasound

3. Imaging:
   - Compression ultrasound: First-line
   - Whole-leg vs. proximal-only protocols vary by institution
   - If initial ultrasound negative but clinical suspicion high, repeat in 5-7 days
   - CT venography, MR venography for pelvic/abdominal veins

**Anticoagulation Options:**

*Direct Oral Anticoagulants (DOACs):*
- Apixaban: 10 mg BID x 7 days, then 5 mg BID
- Rivaroxaban: 15 mg BID x 21 days, then 20 mg daily
- Edoxaban: After 5-10 days of parenteral anticoagulation, then 60 mg daily
- Dabigatran: After 5-10 days of parenteral anticoagulation, then 150 mg BID

*Advantages of DOACs:*
- No monitoring required
- Fixed dosing
- Fewer drug-food interactions than warfarin
- Rapid onset of action

*Warfarin:*
- Requires bridging with parenteral anticoagulation
- Target INR 2.0-3.0
- Requires regular monitoring
- Many drug and food interactions

*Parenteral Options:*
- Enoxaparin (LMWH): 1 mg/kg BID or 1.5 mg/kg daily
- Fondaparinux: Weight-based daily dosing
- Unfractionated heparin: For severe renal impairment or need for rapid reversal

**Treatment Duration:**
- Provoked by transient risk factor (surgery, travel): 3 months
- Provoked by persistent risk factor (cancer): At least 6 months or while risk persists
- Unprovoked first DVT: 3 months minimum, then reassess for extended therapy
- Recurrent unprovoked: Extended/indefinite therapy

**Post-Thrombotic Syndrome (PTS):**
- Chronic complication occurring in 20-50% of DVT patients
- Symptoms: Pain, swelling, skin changes, ulceration
- Prevention: Adequate anticoagulation, elastic compression stockings
- Risk factors: Proximal DVT, recurrent ipsilateral DVT, obesity, older age`,
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant; includes apixaban, rivaroxaban, edoxaban, and dabigatran' },
        { term: 'LMWH', definition: 'Low molecular weight heparin (e.g., enoxaparin); injectable anticoagulant' },
        { term: 'INR', definition: 'International Normalized Ratio; test used to monitor warfarin therapy' },
        { term: 'Post-thrombotic syndrome', definition: 'Chronic complications after DVT including pain, swelling, and skin changes' },
        { term: 'Unprovoked DVT', definition: 'DVT occurring without identifiable temporary risk factor' },
        { term: 'Extended anticoagulation', definition: 'Anticoagulation continued beyond the initial treatment period to prevent recurrence' },
      ],
      clinicalNotes: 'Do not delay anticoagulation for imaging if clinical suspicion is high and bleeding risk is low. DOACs are preferred for most patients with DVT. LMWH is preferred in cancer-associated thrombosis (though recent data supports DOACs in some cancer patients). Avoid DOACs in severe renal impairment, antiphospholipid syndrome, and during pregnancy. Extended anticoagulation decisions should balance recurrence risk against bleeding risk using shared decision-making.',
    },
    4: {
      level: 4,
      summary: 'Contemporary DVT management requires individualized anticoagulation selection, understanding of special populations, appropriate use of interventional therapies, and strategies to prevent post-thrombotic syndrome and recurrence.',
      explanation: `**Individualized Anticoagulant Selection:**

*Patient Factors Affecting Choice:*
| Factor | Preferred Agent |
|--------|-----------------|
| Renal impairment (CrCl <30) | Warfarin or apixaban (reduced dose) |
| Active cancer | LMWH or DOAC (edoxaban, rivaroxaban) |
| GI malignancy | LMWH (lower GI bleeding risk than DOACs) |
| Pregnancy | LMWH exclusively |
| Mechanical heart valve | Warfarin only |
| Antiphospholipid syndrome | Warfarin (DOACs inferior) |
| Need for rapid reversal | UFH or agents with specific reversal |
| Poor adherence | Consider agents with forgiveness |

*Drug Interactions:*
- DOACs: P-glycoprotein and CYP3A4 interactions
- Avoid with strong inhibitors/inducers (azoles, rifampin, anticonvulsants)
- Warfarin: Extensive interactions with foods and medications

**Interventional Therapies:**

*Catheter-Directed Thrombolysis (CDT):*
- Consider for extensive iliofemoral DVT with significant symptoms
- May reduce post-thrombotic syndrome
- ATTRACT trial: Did not reduce PTS but improved early symptom relief
- CAVENT trial: Some PTS reduction at 2 years

*Pharmacomechanical Thrombectomy:*
- Combines mechanical clot disruption with thrombolysis
- Shorter infusion times
- AngioJet, EKOS systems

*IVC Filters:*
- Indication: Acute VTE with absolute contraindication to anticoagulation
- Retrievable filters preferred
- Must plan for retrieval or eventual anticoagulation
- Complications: Filter migration, IVC thrombosis, recurrent DVT

**Special Scenarios:**

*Isolated Distal DVT:*
- Lower PE risk than proximal
- Options: Anticoagulate or serial imaging
- Anticoagulate if: Symptomatic, high-risk features (close to popliteal, large, multiple, no reversible risk factor, cancer, hospitalized)
- Serial imaging: Repeat ultrasound in 1 week; treat if extension

*Superficial Vein Thrombosis:*
- If >5 cm and within 3 cm of saphenofemoral junction: Anticoagulate
- Prophylactic-dose anticoagulation for 45 days reduces progression
- NSAIDs and compression for symptomatic relief

*Upper Extremity DVT:*
- Often catheter-related
- Primary (Paget-Schroetter syndrome): Thoracic outlet obstruction in young, active patients
- Treatment: Anticoagulation similar to lower extremity
- Consider thrombolysis for Paget-Schroetter with first rib resection

**Recurrence Risk Assessment:**

*Factors Favoring Extended Therapy:*
- Unprovoked/idiopathic DVT
- Male sex
- Persistently elevated D-dimer after stopping anticoagulation
- Residual vein thrombosis on ultrasound
- Post-thrombotic syndrome
- Recurrent VTE

*Validated Scores:*
- HERDOO2: For women, identifies low recurrence risk
- Vienna prediction model: Includes D-dimer
- DASH score: Predicts recurrence after unprovoked VTE`,
      keyTerms: [
        { term: 'Catheter-directed thrombolysis', definition: 'Delivering clot-dissolving drugs directly to the clot via catheter' },
        { term: 'IVC filter', definition: 'Device placed in the inferior vena cava to catch clots before they reach the lungs' },
        { term: 'Paget-Schroetter syndrome', definition: 'Effort-related upper extremity DVT due to thoracic outlet compression' },
        { term: 'Residual vein thrombosis', definition: 'Persistent vein obstruction seen on ultrasound after treatment' },
        { term: 'HERDOO2', definition: 'Clinical score identifying women at low risk of VTE recurrence' },
      ],
      clinicalNotes: 'IVC filters have limited indications - only for absolute anticoagulation contraindication. Routine filter placement is not recommended. Catheter-directed therapy should be considered for iliofemoral DVT in good surgical candidates with low bleeding risk. Extended anticoagulation with reduced-dose DOACs (apixaban 2.5 mg BID, rivaroxaban 10 mg daily) after initial treatment period reduces recurrence with acceptable bleeding risk. Always assess both recurrence and bleeding risk when making duration decisions.',
    },
    5: {
      level: 5,
      summary: 'Expert DVT management encompasses complex clinical scenarios, advanced interventional approaches, precision medicine strategies, and longitudinal care to minimize recurrence and post-thrombotic morbidity.',
      explanation: `**Complex Clinical Scenarios:**

*Cancer-Associated Thrombosis:*
- Initial trials (CLOT, CATCH): LMWH superior to warfarin
- Recent trials (SELECT-D, Hokusai-Cancer, CARAVAGGIO):
  - DOACs non-inferior to LMWH
  - Higher GI/GU bleeding with DOACs (especially luminal GI cancers)
- Current approach:
  - Non-GI cancers: DOAC reasonable first-line
  - GI/GU cancers: LMWH preferred
  - Brain metastases without recent hemorrhage: DOACs appear safe

*Pregnancy and Postpartum:*
- LMWH throughout pregnancy (warfarin teratogenic)
- Dose adjustment for weight changes
- Anti-Xa monitoring in extremes of weight or renal function
- Peripartum management:
  - Stop LMWH 24 hours before planned delivery/induction
  - UFH if neuraxial anesthesia planned
  - Resume 6-12 hours after vaginal delivery, 12-24 after cesarean
- Postpartum: Continue anticoagulation minimum 6 weeks (total 3 months minimum)

*Antiphospholipid Syndrome:*
- DOACs inferior to warfarin (TRAPS, ASTRO-APS trials)
- Warfarin with INR 2.0-3.0 for venous; 3.0-4.0 for arterial/recurrent
- Triple-positive APS (LA + aCL + anti-beta2GPI): Highest risk

**Advanced Interventional Management:**

*Patient Selection for CDT/Pharmacomechanical Therapy:*
- Acute iliofemoral DVT (<14 days symptom onset)
- Severe symptoms (phlegmasia cerulea dolens, functional impairment)
- Good functional status and life expectancy
- Low bleeding risk
- Access to experienced interventional team

*Technique:*
- Access: Popliteal (antegrade) or jugular (if iliocaval)
- EKOS: Ultrasound-assisted delivery enhances penetration
- Aspiration thrombectomy: AngioVac, ClotTriever, Indigo
- Adjunctive venoplasty/stenting for May-Thurner syndrome

*May-Thurner Syndrome (Iliac Vein Compression):*
- Left common iliac vein compressed by right common iliac artery
- Predisposes to left iliofemoral DVT
- Consider in young patients with left leg DVT
- Intravascular ultrasound (IVUS) for diagnosis
- Venous stenting after clot clearance

**Precision Medicine Approaches:**

*Thrombophilia Testing:*
- Not routinely recommended after first provoked VTE
- Consider for: Unprovoked VTE at young age (<50), strong family history, unusual sites, recurrence
- Timing: Defer until off anticoagulation 2-4 weeks (or use tests unaffected by treatment)
- Tests: Factor V Leiden, prothrombin G20210A, antithrombin, protein C/S, antiphospholipid antibodies

*Pharmacogenomics:*
- CYP2C9 and VKORC1 polymorphisms affect warfarin dosing
- Clinical dosing algorithms incorporating genetics available
- Limited role given shift to DOACs

**Longitudinal Management:**

*Post-Thrombotic Syndrome Prevention and Treatment:*
- Adequate anticoagulation duration
- Elastic compression stockings: Controversial (SOX trial negative, but methodologic concerns)
- Consider compression in symptomatic patients
- Treatment of established PTS: Compression, exercise, venoactive drugs, interventional options for obstruction

*Surveillance:*
- D-dimer 1 month after stopping anticoagulation: If elevated, consider continuing
- Repeat ultrasound not routinely needed unless symptoms recur
- Document baseline residual disease for comparison

*Transition of Care:*
- Clear anticoagulation plan documented
- Duration and potential for extension discussed
- Bleeding precautions reviewed
- Follow-up arranged with hematology or primary care`,
      keyTerms: [
        { term: 'Phlegmasia cerulea dolens', definition: 'Severe DVT with massive swelling, cyanosis, and impending venous gangrene' },
        { term: 'May-Thurner syndrome', definition: 'Left iliac vein compression by right iliac artery predisposing to DVT' },
        { term: 'IVUS', definition: 'Intravascular ultrasound; catheter-based imaging for venous assessment' },
        { term: 'Triple-positive APS', definition: 'Antiphospholipid syndrome with all three antibody types positive; highest thrombotic risk' },
        { term: 'Venoactive drugs', definition: 'Medications that improve venous tone and reduce symptoms of venous insufficiency' },
      ],
      clinicalNotes: `**Emergency Considerations:**
- Phlegmasia: Urgent anticoagulation, leg elevation, consider emergent intervention
- Massive DVT with impending gangrene: Surgical thrombectomy may be needed

**Treatment Duration Decisions:**
- Use validated tools (HERDOO2, Vienna, DASH) combined with clinical judgment
- D-dimer after stopping: 2-fold increased recurrence if elevated
- Shared decision-making essential - balance recurrence (~5%/year unprovoked) vs. bleeding (~2%/year on anticoagulation)

**Reduced-Dose Extended Therapy:**
- AMPLIFY-EXT: Apixaban 2.5 mg BID effective with lower bleeding
- EINSTEIN-CHOICE: Rivaroxaban 10 mg daily effective
- Consider after completing initial full-dose treatment

**Quality Metrics:**
- Anticoagulation initiated within 24 hours of diagnosis
- Appropriate duration based on clinical factors
- Patient education on signs of recurrence and bleeding
- Follow-up arranged before discharge`,
    },
  },
  media: [
    {
      id: 'dvt-anatomy-diagram',
      type: 'diagram',
      filename: 'leg-venous-anatomy.svg',
      title: 'Lower Extremity Venous Anatomy',
      description: 'Diagram showing superficial and deep venous systems of the leg',
    },
    {
      id: 'dvt-diagnostic-algorithm',
      type: 'diagram',
      filename: 'dvt-diagnostic-algorithm.svg',
      title: 'DVT Diagnostic Algorithm',
      description: 'Step-by-step approach using Wells Score and D-dimer',
    },
  ],
  citations: [
    'Stevens SM, Woller SC, Kreuziger LB, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.',
    'Kearon C, Akl EA, Ornelas J, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report. Chest. 2016;149(2):315-352.',
    'Vedantham S, Goldhaber SZ, Julian JA, et al. Pharmacomechanical Catheter-Directed Thrombolysis for Deep-Vein Thrombosis. N Engl J Med. 2017;377(23):2240-2252.',
    'Carrier M, Abou-Nassar K, Mallick R, et al. Apixaban to Prevent Venous Thromboembolism in Patients with Cancer. N Engl J Med. 2019;380(8):711-719.',
  ],
  crossReferences: [
    'hematology-pulmonary-embolism',
    'hematology-thrombophilia',
    'hematology-anticoagulation',
    'hematology-coagulation-studies',
  ],
  tags: {
    systems: ['hematology', 'vascular'],
    topics: ['thrombosis', 'DVT', 'anticoagulation', 'venous disease'],
    keywords: ['DVT', 'deep vein thrombosis', 'blood clot', 'anticoagulation', 'DOAC', 'Virchow triad'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default deepVeinThrombosis;
