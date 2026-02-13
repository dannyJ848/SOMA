/**
 * Injections - Therapeutic Procedures
 *
 * Comprehensive content on injection techniques, types, indications,
 * and safety considerations across medical practice.
 */

import { EducationalContent } from '../../types';

export const injections: EducationalContent = {
  id: 'procedures-injections',
  type: 'concept',
  name: 'Injections',
  alternateNames: ['Parenteral Administration', 'Injectable Medications', 'Shots'],

  levels: {
    1: {
      level: 1,
      summary: 'Injections are a way to put medicine directly into your body using a needle and syringe.',
      explanation: `Injections, sometimes called "shots," deliver medicine directly into your body using a needle. This is faster than taking pills because the medicine does not have to go through your stomach first.

**Why Are Injections Used?**
- Some medicines do not work if you swallow them
- Medicine works faster when injected
- The exact amount of medicine can be given
- Some vaccines can only be given as shots

**Types of Injections:**
- **Under the skin (subcutaneous):** Just below the skin surface - used for insulin and some vaccines
- **Into the muscle (intramuscular):** Deeper into muscle tissue - used for many vaccines and some medicines
- **Into a vein (intravenous):** Directly into the bloodstream - used in hospitals for fast-acting medicines

**Common Injections You Might Get:**
- Vaccines (like flu shots)
- Allergy shots
- Insulin for diabetes
- Local anesthesia at the dentist

**What to Expect:**
- A small pinch or sting that lasts only a second
- A small bandage might be placed over the spot
- The area might feel sore for a day or two
- Tell the person giving the shot if you are scared - they can help!

**After Your Injection:**
- Keep the bandage on for a few hours
- It is okay if the spot is a little red or sore
- Tell an adult if you feel dizzy, very sick, or if swelling gets worse`,
      keyTerms: [
        { term: 'injection', definition: 'Medicine put into your body through a needle' },
        { term: 'syringe', definition: 'The tube that holds the medicine before it is injected' },
        { term: 'vaccine', definition: 'A shot that helps your body fight off diseases' },
      ],
      analogies: [
        'An injection is like a shortcut for medicine - instead of traveling through your stomach, it goes right where it needs to go.',
        'Getting a shot is like a tiny pinch that only lasts a second, like a quick mosquito bite.',
      ],
      examples: [
        'When you get a flu shot at the doctor, that is an injection into your arm muscle.',
        'People with diabetes often give themselves insulin injections every day.',
        'At the dentist, an injection numbs your mouth so you do not feel the drill.',
      ],
      patientCounselingPoints: [
        'It is okay to be nervous - most people feel that way about shots.',
        'Taking deep breaths and looking away can help.',
        'The quick pinch helps you stay healthy or feel better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Injections are parenteral drug administration methods using needles to deliver medications into subcutaneous tissue, muscles, veins, or other body areas for therapeutic effect.',
      explanation: `## Understanding Injections

Injections bypass the digestive system, allowing direct delivery of medications into the body. This parenteral route offers advantages including faster onset, more predictable absorption, and ability to give drugs that would be destroyed in the stomach.

**Routes of Injection:**

**1. Subcutaneous (SC/SQ):**
- Injected into fatty tissue beneath the skin
- Common sites: Abdomen, upper arm, thigh
- Volume: Usually <2 mL
- Examples: Insulin, heparin, some vaccines

**2. Intramuscular (IM):**
- Injected into muscle tissue
- Common sites: Deltoid (upper arm), vastus lateralis (thigh), gluteal muscles
- Volume: Up to 3-5 mL depending on site
- Examples: Most vaccines, antibiotics, testosterone

**3. Intravenous (IV):**
- Injected directly into a vein
- Provides immediate effect
- Can give larger volumes
- Examples: Emergency medications, chemotherapy, fluids

**4. Intradermal (ID):**
- Just beneath the outer skin layer
- Very small volume (<0.5 mL)
- Examples: TB skin test, allergy testing

**Injection Equipment:**
| Component | Function |
|-----------|----------|
| Syringe | Holds and measures medication |
| Needle | Penetrates tissue to deliver medication |
| Alcohol swab | Cleans injection site |
| Cotton ball/bandage | Covers site after injection |

**Needle Selection:**
| Route | Gauge (thickness) | Length |
|-------|------------------|--------|
| Intradermal | 25-27 (thin) | 3/8 to 5/8 inch |
| Subcutaneous | 25-27 | 1/2 to 5/8 inch |
| Intramuscular | 20-25 | 1 to 1.5 inch |

**Safety Considerations:**
- Never reuse needles
- Dispose of needles in proper sharps containers
- Check medication expiration dates
- Verify correct drug, dose, and patient
- Watch for allergic reactions

**Common Side Effects:**
- Pain at injection site
- Redness and swelling
- Bruising
- Temporary soreness

**When to Seek Help:**
- Signs of infection (increasing redness, pus, fever)
- Severe allergic reaction (hives, difficulty breathing)
- Numbness or unusual symptoms`,
      keyTerms: [
        { term: 'parenteral', definition: 'Administration route that bypasses the digestive system; typically refers to injections' },
        { term: 'subcutaneous', definition: 'Under the skin; injection into the fatty tissue layer', pronunciation: 'sub-kyoo-TAY-nee-us' },
        { term: 'intramuscular', definition: 'Into the muscle; injection that reaches muscle tissue', pronunciation: 'in-tra-MUS-kyoo-lar' },
        { term: 'intravenous', definition: 'Into a vein; injection or infusion directly into the bloodstream', pronunciation: 'in-tra-VEE-nus' },
        { term: 'gauge', definition: 'Measurement of needle thickness; higher gauge means thinner needle' },
      ],
      analogies: [
        'Needle gauge is like wire thickness - a higher number means thinner, just like higher gauge wire is thinner.',
        'Subcutaneous is like planting seeds just under the surface soil, while intramuscular is like planting them deeper.',
      ],
    },
    3: {
      level: 3,
      summary: 'Injectable medication administration requires understanding of pharmacokinetics, proper technique for each route, anatomical landmarks, and recognition of complications including infections, nerve injury, and adverse reactions.',
      explanation: `## Pharmacokinetics of Injectable Medications

**Absorption by Route:**
| Route | Onset | Duration | Bioavailability |
|-------|-------|----------|-----------------|
| IV | Immediate | Variable | 100% |
| IM | 10-30 min | Hours | 75-100% |
| SC | 15-60 min | Hours | 75-100% |
| ID | Slow (local) | Variable | Local effect |

**Factors Affecting Absorption:**
- Blood flow to injection site
- Lipophilicity of medication
- Injection volume
- Formulation (aqueous vs. oil-based)
- Patient factors (body composition, circulation)

## Injection Technique by Route

**Subcutaneous Injection:**
1. Clean site with alcohol, allow to dry
2. Pinch skin to create fold
3. Insert needle at 45-90° angle (depending on tissue depth)
4. Release pinch, inject slowly
5. Withdraw needle, apply gentle pressure
6. Do not massage (may affect absorption)

**Intramuscular Injection:**

*Deltoid Muscle:*
- 2-3 finger widths below acromion
- Maximum volume: 1-2 mL
- Used for most adult vaccines

*Vastus Lateralis:*
- Outer middle third of thigh
- Preferred site for infants
- Maximum volume: 1-4 mL (age-dependent)

*Ventrogluteal:*
- Place palm over greater trochanter
- Index finger on ASIS, middle finger toward iliac crest
- Inject into V formed by fingers
- Preferred for larger volumes (up to 3-5 mL)
- Lower risk of sciatic nerve injury

*Dorsogluteal (less commonly used):*
- Upper outer quadrant of buttock
- Higher risk of sciatic nerve injury
- Not recommended for vaccines

**Z-Track Technique:**
- Displaces skin/subcutaneous tissue laterally
- Inject, wait 10 seconds, withdraw
- Prevents medication leaking back through tract
- Used for medications that irritate tissue (iron, certain antipsychotics)

## Complications and Prevention

**Immediate Complications:**
| Complication | Cause | Prevention |
|--------------|-------|------------|
| Pain | Tissue trauma, medication | Proper technique, appropriate gauge |
| Bleeding | Vessel puncture | Apply pressure, avoid anticoagulation sites |
| Nerve injury | Incorrect site | Use anatomical landmarks |
| Extravasation | IV infiltration | Check IV patency |

**Delayed Complications:**
| Complication | Cause | Prevention |
|--------------|-------|------------|
| Infection | Poor asepsis | Sterile technique |
| Abscess | Contamination, tissue necrosis | Proper technique, appropriate medication |
| Granuloma | Foreign body reaction | Appropriate formulation |
| Lipodystrophy | Repeated SC injections | Rotate sites |

**Allergic Reactions:**
- Local: Erythema, swelling, pruritus
- Systemic: Urticaria, angioedema, anaphylaxis
- Management: Antihistamines, epinephrine for severe reactions

## Special Considerations

**Immunocompromised Patients:**
- May have reduced vaccine response
- Avoid live vaccines
- Use proper aseptic technique

**Anticoagulated Patients:**
- Apply pressure longer (5 minutes)
- Use smaller gauge needles
- Avoid IM injections if possible
- Consider SC or IV alternatives

**Pediatric Considerations:**
- Use appropriate needle length for age/size
- Vastus lateralis preferred in infants
- Consider comfort measures (distraction, positioning)
- Multiple injections: Use different sites

**Self-Injection Education:**
- Proper storage of medications
- Site rotation plans
- Needle disposal
- Recognition of complications
- When to seek medical attention`,
      keyTerms: [
        { term: 'Z-track technique', definition: 'Injection method displacing skin before injection to prevent medication leakage through needle tract' },
        { term: 'lipodystrophy', definition: 'Abnormal fat distribution at injection sites; can be atrophy (loss) or hypertrophy (buildup)' },
        { term: 'extravasation', definition: 'Leakage of IV medication into surrounding tissue, potentially causing damage' },
        { term: 'ventrogluteal', definition: 'IM injection site in the gluteal region with lower risk of complications; located using anatomical landmarks' },
        { term: 'bioavailability', definition: 'Proportion of administered drug that reaches systemic circulation unchanged' },
      ],
      clinicalNotes: 'The ventrogluteal site is preferred over the dorsogluteal for IM injections due to lack of major nerves and vessels, thicker muscle mass, and reliable landmarks. The deltoid is acceptable for volumes up to 1-2 mL in adults.',
    },
    4: {
      level: 4,
      summary: 'Advanced injection therapy encompasses specialized techniques including joint injections, nerve blocks, and image-guided procedures, requiring comprehensive understanding of regional anatomy, pharmacology, and complication management.',
      explanation: `## Specialized Injection Techniques

**Joint and Soft Tissue Injections:**

*Indications:*
- Inflammatory arthritis
- Osteoarthritis
- Bursitis
- Tendinitis
- Crystal arthropathies

*Corticosteroid Selection:*
| Agent | Potency | Duration | Water Solubility |
|-------|---------|----------|------------------|
| Triamcinolone acetonide | High | Long (weeks) | Low (depot) |
| Methylprednisolone acetate | High | Long | Low |
| Betamethasone acetate/phosphate | High | Intermediate | Mixed |
| Dexamethasone | High | Short | High |

*General Principles:*
- Avoid repeated injections (limit to 3-4 per year per joint)
- Wait 6 weeks between injections in same joint
- Use sterile technique
- Consider post-injection flare (24-48 hours)
- Warn about potential skin depigmentation, fat atrophy

**Knee Injection (Suprapatellar Approach):**
1. Patient supine, knee extended or slightly flexed
2. Identify suprapatellar pouch
3. Insert needle 1 cm above patella, 1 cm lateral
4. Direct posteriorly and inferiorly under patella
5. Aspirate before injection if effusion present

**Shoulder Injection (Subacromial):**
1. Identify posterolateral corner of acromion
2. Insert needle below acromion, directed anteriorly and medially
3. Inject 1-2 cm deep into subacromial space

**Trigger Finger Injection:**
1. Identify A1 pulley at MCP flexion crease
2. Insert needle at 45° angle distally
3. Inject around (not into) tendon sheath

## Nerve Blocks

**Types:**
| Block Type | Purpose | Common Applications |
|------------|---------|---------------------|
| Diagnostic | Identify pain source | Facet blocks, selective nerve root blocks |
| Therapeutic | Pain relief | Occipital nerve block, intercostal block |
| Prognostic | Predict response to ablation | Pre-RFA evaluation |
| Neurolytic | Permanent destruction | Cancer pain, severe spasticity |

**Local Anesthetic Pharmacology:**
| Agent | Onset | Duration | Maximum Dose |
|-------|-------|----------|--------------|
| Lidocaine | Fast (2-5 min) | 1-2 hours | 4.5 mg/kg (7 with epi) |
| Bupivacaine | Slow (5-15 min) | 4-8 hours | 2.5 mg/kg (3 with epi) |
| Ropivacaine | Intermediate | 4-6 hours | 3 mg/kg |

**Local Anesthetic Systemic Toxicity (LAST):**

*Risk Factors:*
- High doses, vascular injection
- Extremes of age
- Hepatic or cardiac disease
- Acidosis
- Pregnancy

*Recognition:*
- CNS: Tinnitus, metallic taste, perioral numbness, seizures
- Cardiovascular: Hypotension, arrhythmias, cardiac arrest

*Management:*
- Stop injection, call for help
- Airway management, 100% oxygen
- Seizure control (benzodiazepines, avoid propofol initially)
- **Lipid emulsion 20%:** 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion
- ACLS if indicated (avoid vasopressin, reduce epinephrine doses)

## Image-Guided Injections

**Ultrasound-Guided Advantages:**
- Real-time visualization
- No radiation
- Portable
- Improved accuracy
- Reduced complications

**Fluoroscopy-Guided Procedures:**
- Spine interventions
- Contrast confirmation of placement
- Radiation exposure considerations

**CT-Guided Procedures:**
- Deep structures
- Complex anatomy
- Precise needle placement

## Intravenous Access and Injection

**Peripheral IV Insertion:**
- Site selection: Forearm preferred over hand, avoid joints
- Gauge selection: 18-20G for blood products/fluids, 22-24G for medication
- Technique: Tourniquet, skin antisepsis, low angle insertion
- Confirmation: Blood return, flush without resistance

**IV Medication Administration:**
- Direct push: Small volumes over 1-5 minutes
- Piggyback: Secondary infusion via primary line
- Continuous infusion: Pump-controlled delivery

**Complications:**
| Complication | Signs | Management |
|--------------|-------|------------|
| Infiltration | Swelling, cool, no blood return | Remove IV, elevate, warm compress |
| Phlebitis | Pain, erythema along vein | Remove IV, warm compress, NSAIDs |
| Extravasation | Blistering, necrosis | Specific antidotes depending on agent |
| Thrombophlebitis | Cord-like vein, erythema | Remove IV, warm compress, anticoagulation if severe |`,
      keyTerms: [
        { term: 'LAST', definition: 'Local Anesthetic Systemic Toxicity; life-threatening complication from intravascular absorption of local anesthetics' },
        { term: 'lipid emulsion', definition: 'Intralipid 20%; rescue treatment for local anesthetic toxicity by lipid sink mechanism' },
        { term: 'trigger point injection', definition: 'Injection into taut band of muscle causing referred pain patterns' },
        { term: 'fluoroscopy', definition: 'Real-time X-ray imaging used to guide needle placement in spine and deep structures' },
        { term: 'neurolytic', definition: 'Agents or procedures that intentionally destroy nerve tissue for long-term pain relief' },
      ],
      clinicalNotes: 'Always have lipid emulsion immediately available when performing nerve blocks with large volumes of local anesthetic. For LAST, early administration of lipid emulsion is crucial - do not wait for cardiovascular collapse.',
    },
    5: {
      level: 5,
      summary: 'Expert injection practice integrates advanced procedural skills, evidence-based indications, ultrasound guidance optimization, and comprehensive management of complex scenarios including anticoagulation, immunocompromise, and treatment-resistant conditions.',
      explanation: `## Evidence-Based Injection Indications

**Corticosteroid Joint Injections:**

*Systematic Review Evidence:*
| Condition | Evidence Level | Effect Size | Duration |
|-----------|---------------|-------------|----------|
| Knee OA | Moderate | Small-moderate | 4-6 weeks |
| Adhesive capsulitis | Moderate | Moderate | 6-12 weeks |
| RA flare | High | Large | Variable |
| Lateral epicondylitis | Moderate | Initial improvement, worse long-term | Weeks |
| Carpal tunnel | Moderate | Moderate | Weeks-months |

*Key Studies:*
- ESCAPE trial: Triamcinolone + exercise superior to exercise alone for frozen shoulder
- McAlindon meta-analysis: IA steroids effective for knee OA, optimal dosing unclear
- Coombes et al: Steroid injections for tendinopathy may impair long-term healing

**Regenerative Medicine Injections:**

*Platelet-Rich Plasma (PRP):*
- Preparation: Autologous blood centrifugation
- Classifications: Leukocyte-rich vs. leukocyte-poor
- Evidence: Mixed; best for chronic tendinopathy, less clear for OA
- Key trials: RESTORE (patellar tendinopathy positive), PRP-AS (knee OA mixed)

*Hyaluronic Acid (Viscosupplementation):*
- Mechanism: Lubricant, anti-inflammatory, chondroprotective
- Evidence: Modest benefit for knee OA (effect size ~0.3)
- AAOS guidelines: Cannot recommend for/against
- Patient selection: May benefit mild-moderate OA patients not candidates for surgery

## Ultrasound-Guided Injection Optimization

**Technical Considerations:**

*Transducer Selection:*
| Transducer | Frequency | Application |
|------------|-----------|-------------|
| Linear high-frequency | 10-18 MHz | Superficial structures, tendons, nerves |
| Linear mid-frequency | 7-12 MHz | Deeper soft tissues |
| Curvilinear | 2-5 MHz | Deep structures, hip |

*Needle Visualization:*
- In-plane approach: Entire needle visible, more technically challenging
- Out-of-plane approach: Cross-section only, requires tissue movement confirmation
- Needle tip identification critical to avoid unintended injury
- Use echogenic needles or needle guidance systems when available

*Image Optimization:*
- Depth adjustment to center target
- Focus zone at target level
- Gain adjustment for optimal tissue contrast
- Doppler to identify vessels
- Compound imaging for improved needle visualization

## Complex Clinical Scenarios

**Anticoagulation Management:**

*Risk Stratification:*
| Procedure | Bleeding Risk | Anticoagulation Management |
|-----------|---------------|---------------------------|
| Superficial SC/IM | Low | Continue all anticoagulants |
| Joint injection | Low-Moderate | Continue warfarin (INR <3), DOACs |
| Deep injection near vessels | Moderate | Consider holding DOACs 24-48h |
| Spinal/Neuraxial | High | Follow ASRA guidelines strictly |

*ASRA Guidelines for Neuraxial Procedures:*
- Warfarin: INR ≤1.4
- DOACs: 3-5 half-lives (varies by agent and renal function)
- Clopidogrel: 5-7 days
- Ticagrelor: 5 days
- LMWH: 12 hours (prophylactic), 24 hours (therapeutic)

**Immunocompromised Patients:**
- Enhanced infection risk requires meticulous sterile technique
- Consider prophylactic antibiotics for deeper procedures
- Evaluate immunization status before live vaccines
- Corticosteroid injections may further suppress immune function

**Diabetes Considerations:**
- Local steroid injections can elevate blood glucose for 2-7 days
- Warn patients, adjust insulin/medications accordingly
- Infection risk may be elevated with poor glycemic control
- Consider lower steroid doses when possible

## Advanced Techniques

**Ultrasound-Guided Hydrodissection:**
- Technique: Fluid injection to separate structures
- Applications: Carpal tunnel, cubital tunnel, nerve entrapments
- Evidence: Emerging positive data for CTS
- Mechanism: Mechanical release, scar lysis, improved gliding

**Peripheral Nerve Blocks for Procedures:**

*Upper Extremity:*
| Block | Coverage | Procedure Application |
|-------|----------|----------------------|
| Interscalene | Shoulder, lateral arm | Shoulder surgery, reduction |
| Supraclavicular | Arm below shoulder | Arm/elbow surgery |
| Infraclavicular | Arm, forearm, hand | Below elbow procedures |
| Axillary | Forearm, hand | Hand, forearm surgery |

*Lower Extremity:*
| Block | Coverage | Procedure Application |
|-------|----------|----------------------|
| Femoral | Anterior thigh, knee | Knee surgery |
| Adductor canal | Medial knee, saphenous | Knee arthroplasty |
| Popliteal sciatic | Below knee (except medial) | Foot/ankle surgery |
| Ankle block | Specific foot distributions | Foot surgery |

**Botulinum Toxin Injections:**

*Indications:*
- Spasticity (stroke, MS, CP)
- Dystonia
- Chronic migraine
- Hyperhidrosis
- Bladder dysfunction

*Technique Considerations:*
- EMG or ultrasound guidance improves accuracy
- Dilution affects spread
- Onset: 2-7 days; Peak: 2-4 weeks; Duration: 3-4 months
- Antibody formation may reduce efficacy over time

## Quality and Outcomes

**Outcome Measures:**
- Pain scores (VAS, NRS)
- Functional assessments (WOMAC, DASH, QuickDASH)
- Patient satisfaction
- Return to activity/work
- Medication reduction
- Injection frequency

**Complications Tracking:**
| Complication | Acceptable Rate | Mitigation Strategy |
|--------------|-----------------|---------------------|
| Infection | <0.1% | Sterile technique, skin prep |
| Nerve injury | <0.5% | Image guidance, anatomical knowledge |
| Steroid flare | 2-5% | Patient education, NSAIDs |
| Skin changes | 1-2% | Avoid superficial injection |
| Systemic effects | Rare | Dose limits, patient selection |

**Documentation Standards:**
- Indication and consent
- Technique (approach, guidance, medications, volumes)
- Patient tolerance
- Immediate complications
- Post-procedure instructions
- Follow-up plan`,
      keyTerms: [
        { term: 'hydrodissection', definition: 'Ultrasound-guided injection of fluid to separate compressed nerves from surrounding tissues' },
        { term: 'PRP', definition: 'Platelet-Rich Plasma; autologous blood product concentrated in growth factors for regenerative injection' },
        { term: 'viscosupplementation', definition: 'Intra-articular hyaluronic acid injection to improve joint lubrication and reduce pain' },
        { term: 'in-plane technique', definition: 'Ultrasound-guided injection approach with needle aligned parallel to transducer for full visualization' },
        { term: 'echogenic', definition: 'Property of appearing bright on ultrasound; echogenic needles are designed for improved visibility' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Ultrasound guidance improves accuracy and safety for most joint and soft tissue injections
2. Evidence for corticosteroid injection in tendinopathy shows short-term benefit but potential long-term harm - consider alternatives
3. Platelet-rich plasma and other regenerative techniques show promise but evidence is still evolving
4. For patients on anticoagulation, most superficial injections can be performed safely without interruption
5. Post-injection glucose monitoring is essential for diabetic patients receiving corticosteroids
6. Track your outcomes systematically to identify opportunities for improvement`,
    },
  },

  media: [
    {
      id: 'injection-sites-diagram',
      type: 'diagram',
      filename: 'injection-sites-diagram.svg',
      title: 'Common Injection Sites',
      description: 'Anatomical locations for subcutaneous, intramuscular, and intradermal injections',
    },
    {
      id: 'z-track-technique',
      type: 'diagram',
      filename: 'z-track-technique.svg',
      title: 'Z-Track Injection Technique',
      description: 'Step-by-step illustration of Z-track method for IM injections',
    },
    {
      id: 'ultrasound-guided-injection',
      type: 'diagram',
      filename: 'ultrasound-guided-injection.svg',
      title: 'Ultrasound-Guided Injection',
      description: 'In-plane and out-of-plane approaches for image-guided procedures',
    },
  ],

  citations: [
    {
      id: 'cdc-injection-safety',
      type: 'website',
      title: 'Injection Safety',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/injection-safety/',
    },
    {
      id: 'asra-anticoagulation',
      type: 'article',
      title: 'Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy',
      authors: ['Horlocker TT', 'Vandermeuelen E', 'Kopp SL', 'et al.'],
      source: 'Regional Anesthesia and Pain Medicine',
      url: 'https://doi.org/10.1097/AAP.0000000000000763',
    },
  ],

  crossReferences: [
    { targetId: 'procedures-therapeutic-overview', targetType: 'concept', relationship: 'parent', label: 'Therapeutic Procedures Overview' },
    { targetId: 'medications-administration', targetType: 'concept', relationship: 'related', label: 'Medication Administration' },
    { targetId: 'pain-management-interventional', targetType: 'concept', relationship: 'related', label: 'Interventional Pain Management' },
  ],

  tags: {
    systems: ['general', 'musculoskeletal'],
    topics: ['procedures', 'clinical-skills', 'pharmacology'],
    keywords: ['injection', 'parenteral', 'intramuscular', 'subcutaneous', 'intravenous', 'joint injection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default injections;
