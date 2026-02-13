/**
 * Surgical Principles
 *
 * Comprehensive content covering foundational surgical principles including
 * wound healing phases, fluid and electrolyte management, surgical nutrition,
 * perioperative care, enhanced recovery, and surgical site infection prevention.
 */

import { EducationalContent } from '../types';

export const surgicalPrinciples: EducationalContent = {
  id: 'surgery-surgical-principles',
  type: 'topic',
  name: 'Surgical Principles',
  nameEs: 'Principios Quirúrgicos',
  alternateNames: ['Perioperative Principles', 'Fundamentals of Surgery', 'Surgical Fundamentals'],

  levels: {
    1: {
      level: 1,
      summary:
        'Surgical principles are the basic rules doctors follow to keep patients safe before, during, and after surgery, including how wounds heal, how to give the body the right fluids and food, and how to prevent infections.',
      explanation: `When you have surgery, your medical team follows important rules (called principles) to keep you safe and help you heal well. Here are the main ideas:

**How Wounds Heal:**
Your body is amazing at fixing itself after surgery. Healing happens in stages:
1. **Stopping the bleeding** — Your blood clots to seal the wound (minutes to hours)
2. **Cleaning up** — Your body sends special cells to fight germs and clean the wound (days 1-4)
3. **Rebuilding** — New tissue grows to fill in the wound (days 4 to about 3 weeks)
4. **Getting stronger** — The scar slowly gets stronger over months

**Keeping Your Body Balanced with Fluids:**
- During and after surgery, you get fluids through an IV (a thin tube in your vein)
- This keeps your body hydrated because you cannot drink during and right after surgery
- The doctors carefully measure how much fluid to give you — not too much, not too little
- Important minerals like sodium and potassium are added to the fluids to keep your body working properly

**Eating Well to Heal:**
- Good nutrition helps your body heal faster
- Protein is especially important — it is the building block your body uses to repair tissue
- Vitamins C and A help with healing too
- Your doctors will let you know when you can start eating again after surgery

**Preventing Infections:**
- The surgery area is cleaned very carefully before the operation
- Everyone in the operating room wears sterile gowns, gloves, and masks
- You may receive antibiotics before surgery starts to prevent infections
- After surgery, keeping the wound clean and dry helps prevent infection

**Before Surgery (Pre-operative):**
- Your doctors check your overall health to make sure you are ready for surgery
- You may need blood tests, heart tests, or other checks
- You are told when to stop eating and drinking before surgery
- Some medications may need to be stopped or adjusted

**After Surgery (Post-operative):**
- Your team watches you closely for any problems
- They manage your pain so you are comfortable
- Getting up and moving as soon as safely possible helps you heal faster
- You are taught how to take care of yourself at home`,
      keyTerms: [
        { term: 'pre-operative', definition: 'The time before surgery when your body is checked and prepared' },
        { term: 'post-operative', definition: 'The time after surgery when you are recovering' },
        { term: 'IV fluids', definition: 'Liquids given through a thin tube placed in a vein to keep your body hydrated and balanced' },
        { term: 'sterile', definition: 'Completely clean and free of germs — the standard for everything that touches you during surgery' },
        { term: 'antibiotic', definition: 'A medicine that kills or stops the growth of germs (bacteria) to prevent or treat infection' },
      ],
      analogies: [
        'Wound healing is like rebuilding a road — first you block traffic (stop bleeding), then clear the rubble (clean the wound), lay new pavement (grow new tissue), and finally the road gets stronger with use over time.',
        'IV fluids are like watering a garden — your body needs the right amount of water and nutrients to grow and heal, not too much and not too little.',
        'Sterile technique in surgery is like working in a clean room at a computer chip factory — even one tiny speck of contamination can cause a big problem.',
      ],
      examples: [
        'Before surgery, you might be asked not to eat or drink after midnight so your stomach is empty and safe for anesthesia.',
        'After surgery, nurses check your blood pressure, heart rate, and temperature regularly to make sure everything is normal.',
      ],
      patientCounselingPoints: [
        'Follow all instructions about when to stop eating and drinking before surgery — this is very important for your safety.',
        'Tell your surgical team about ALL medications you take, including vitamins, herbs, and supplements.',
        'After surgery, try to get up and walk as soon as your doctors say it is okay — this helps prevent blood clots and speeds healing.',
        'Eat protein-rich foods (meat, eggs, beans, dairy) during recovery to help your body rebuild tissue.',
        'Do not smoke before or after surgery — smoking significantly slows healing and increases infection risk.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Surgical principles encompass wound healing biology, fluid and electrolyte balance, nutritional support, perioperative assessment, and infection prevention — the foundational knowledge for safe surgical care.',
      explanation: `## Core Surgical Principles

### Wound Healing: Four Phases

**Phase 1 — Hemostasis (Seconds to Minutes):**
- Vasoconstriction reduces blood flow to the wound
- Platelet aggregation and clot formation (fibrin mesh)
- Clot serves as temporary scaffold for healing

**Phase 2 — Inflammation (Days 1-4):**
- Vasodilation and increased permeability (redness, warmth, swelling)
- Neutrophils arrive first (hours) — bacterial killing and debris removal
- Macrophages arrive next (48-72 hours) — coordinate the healing response
- Macrophages are the most important cell in wound healing — they recruit fibroblasts and promote angiogenesis

**Phase 3 — Proliferation (Days 4-21):**
- Fibroblasts produce collagen (Type III initially)
- Angiogenesis: new blood vessel formation (granulation tissue is red and beefy because of new vessels)
- Epithelialization: skin cells migrate from wound edges
- Wound contraction: myofibroblasts pull wound edges together

**Phase 4 — Remodeling (3 Weeks to 1 Year+):**
- Type III collagen is replaced by Type I collagen (stronger)
- Maximum wound strength: ~80% of original by 8-12 weeks
- Wounds NEVER regain 100% of original tissue strength
- Scar maturation: red → pink → white; raised → flat

### Wound Healing Types
- **Primary intention:** Wound edges approximated (surgical incision closed with sutures)
- **Secondary intention:** Wound left open to heal from the bottom up (infected wounds, some abscesses)
- **Tertiary intention (delayed primary):** Wound left open initially, then closed days later once clean

### Fluid and Electrolyte Management

**Daily Fluid Requirements (4-2-1 Rule for Maintenance):**
- First 10 kg body weight: 4 mL/kg/hr
- Next 10 kg: 2 mL/kg/hr
- Each additional kg: 1 mL/kg/hr
- Example: 70 kg patient = 40 + 20 + 50 = 110 mL/hr

**Common IV Fluids:**
| Fluid | Na (mEq/L) | Cl (mEq/L) | Use |
|-------|-----------|-----------|-----|
| Normal Saline (0.9% NaCl) | 154 | 154 | Volume resuscitation |
| Lactated Ringer's | 130 | 109 | Preferred for resuscitation (more physiologic) |
| D5W | 0 | 0 | Free water replacement |
| D5 1/2 NS | 77 | 77 | Maintenance with glucose |

**Key Electrolyte Disturbances in Surgical Patients:**
- **Hyponatremia:** Excess free water; symptoms: confusion, seizures
- **Hyperkalemia:** Common in renal failure, tissue damage, blood transfusions; risk of cardiac arrhythmia
- **Hypokalemia:** From NG suction, diuretics, vomiting; causes ileus, weakness, arrhythmia
- **Hypocalcemia:** After thyroid/parathyroid surgery; watch for Chvostek sign (facial twitching) and Trousseau sign (carpopedal spasm)

### Surgical Nutrition

**Why Nutrition Matters:**
- Malnutrition increases surgical complications 2-3 fold
- Serum albumin <3.0 g/dL predicts increased surgical morbidity and mortality
- Prealbumin (half-life 2-3 days) is a better marker of acute nutritional status than albumin (half-life 20 days)

**Nutritional Support:**
- **Enteral (through the GI tract):** Always preferred — "if the gut works, use it"
  - Maintains gut mucosal integrity and immune function
  - Reduces bacterial translocation
  - Cheaper and fewer complications than parenteral
- **Parenteral (IV nutrition — TPN):** Only when GI tract cannot be used
  - Central line required (high osmolarity)
  - Complications: line infection, liver dysfunction, hyperglycemia, refeeding syndrome

### Perioperative Care Basics

**Pre-operative Assessment:**
- ASA Physical Status Classification (I through V):
  - ASA I: Healthy patient
  - ASA II: Mild systemic disease
  - ASA III: Severe systemic disease
  - ASA IV: Life-threatening systemic disease
  - ASA V: Moribund patient not expected to survive without surgery
- Cardiac risk assessment (functional capacity in METs)
- Pulmonary risk assessment (especially for upper abdominal and thoracic surgery)
- Medication management: which drugs to continue vs. hold

**Surgical Site Infection (SSI) Prevention:**
- Pre-operative antibiotics within 60 minutes of incision (cefazolin most common)
- Skin antisepsis: chlorhexidine-alcohol preferred over povidone-iodine
- Maintain normothermia (>36°C) — hypothermia impairs immune function
- Glucose control (<200 mg/dL perioperatively)
- Hair removal: clipping, NOT shaving (shaving causes microabrasions that harbor bacteria)`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The first phase of wound healing where bleeding is stopped through vasoconstriction and clot formation' },
        { term: 'granulation tissue', definition: 'New tissue that fills in a wound during healing — it is red, moist, and beefy due to new blood vessel formation (angiogenesis)' },
        { term: 'primary intention', definition: 'Wound healing where the edges are brought together and closed (like a sutured surgical incision), resulting in minimal scarring' },
        { term: 'secondary intention', definition: 'Wound healing where the wound is left open and fills in from the bottom up — used for contaminated or infected wounds' },
        { term: 'enteral nutrition', definition: 'Nutritional support delivered through the gastrointestinal tract (mouth or feeding tube) — always preferred over IV nutrition when possible' },
        { term: 'TPN', definition: 'Total Parenteral Nutrition — complete IV nutrition delivered through a central line when the GI tract cannot be used' },
        { term: 'ASA classification', definition: 'American Society of Anesthesiologists Physical Status classification (I through V) used to assess a patient\'s fitness for anesthesia and surgery' },
        { term: 'SSI', definition: 'Surgical Site Infection — infection at or near the surgical incision within 30 days of surgery (or 90 days if an implant is placed)' },
      ],
      analogies: [
        'Wound healing phases overlap like relay runners — each one starts before the previous one finishes, smoothly passing the baton from hemostasis to inflammation to proliferation to remodeling.',
        'Enteral nutrition is like filling your car at a gas station (the normal way) while TPN is like injecting fuel directly into the engine (works, but riskier and less efficient).',
        'IV fluids are like adjusting the water flow in a plumbing system — too little and the pipes run dry, too much and things flood.',
      ],
      examples: [
        'A 70 kg patient needs about 110 mL/hr of maintenance IV fluids (calculated with the 4-2-1 rule).',
        'After thyroid surgery, the nurse checks for Chvostek sign by tapping the facial nerve — twitching suggests low calcium from accidental parathyroid removal.',
        'Cefazolin is given within 60 minutes of the first incision for most clean surgical procedures to prevent SSI.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Surgical principles require understanding of molecular wound healing, acid-base physiology, nutritional assessment tools, perioperative risk stratification, and evidence-based SSI prevention bundles.',
      explanation: `## Surgical Principles: Detailed Pathophysiology

### Wound Healing: Molecular Mechanisms

**Growth Factors in Wound Healing:**
| Growth Factor | Source | Function |
|--------------|--------|----------|
| PDGF (Platelet-Derived) | Platelets, macrophages | Fibroblast and smooth muscle cell recruitment; earliest growth factor released |
| TGF-β | Platelets, macrophages | Fibroblast proliferation, collagen synthesis, immunomodulation |
| FGF (Fibroblast Growth Factor) | Macrophages, endothelial cells | Angiogenesis, fibroblast proliferation |
| VEGF (Vascular Endothelial GF) | Macrophages, keratinocytes | Angiogenesis — the primary driver of new blood vessel formation |
| EGF (Epidermal Growth Factor) | Platelets, macrophages | Epithelial cell proliferation and migration |

**Collagen Biology:**
- Type III collagen (weak) produced first → gradually replaced by Type I collagen (strong)
- Cross-linking of collagen fibers increases wound tensile strength
- By 1 week: wound has ~3% of original strength
- By 3 weeks: ~20% — removal of skin sutures is typically safe
- By 3 months: ~80% — maximum strength achieved
- Wounds NEVER reach 100% of original tissue strength

**Factors Impairing Wound Healing:**
- Infection: bacterial count >10⁵ organisms per gram of tissue
- Diabetes: impaired neutrophil function, microangiopathy
- Steroids: inhibit inflammatory phase and collagen synthesis
- Malnutrition: especially protein, vitamin C (cofactor for prolyl hydroxylase → collagen synthesis), zinc
- Radiation: damages microvasculature permanently
- Smoking: nicotine causes vasoconstriction and carbon monoxide reduces oxygen-carrying capacity
- Hypoxia: oxygen is essential for collagen hydroxylation and neutrophil killing

**Abnormal Wound Healing:**
- **Keloid:** Excessive collagen deposition extending BEYOND wound margins; more common in darker skin, earlobes, deltoid, sternum; high recurrence rate
- **Hypertrophic scar:** Excessive collagen WITHIN wound margins; may improve with time, pressure garments, silicone sheets
- **Chronic wound:** Failure to progress through healing phases; "stuck" in inflammation; wound bed assessment (TIME: Tissue, Infection, Moisture, Edge)

### Fluid and Electrolyte Physiology

**Body Fluid Compartments:**
- Total body water (TBW): ~60% of body weight in males, ~50% in females
- Intracellular fluid (ICF): 2/3 of TBW (~40% body weight)
- Extracellular fluid (ECF): 1/3 of TBW (~20% body weight)
  - Interstitial: 3/4 of ECF (15% body weight)
  - Intravascular (plasma): 1/4 of ECF (5% body weight)

**Fluid Distribution of IV Fluids:**
- Normal saline/LR: remains in ECF (distributes across intravascular + interstitial)
- D5W: distributes across TBW (only 1/12 stays intravascular) — poor for resuscitation
- Albumin/blood products: remain intravascular

**Acid-Base Disturbances in Surgical Patients:**
- **Metabolic acidosis** (low pH, low HCO₃):
  - Anion gap: lactic acidosis (shock, ischemia), DKA, renal failure
  - Non-anion gap: saline-induced hyperchloremic acidosis (excess NS infusion), diarrhea, RTA
  - Treatment: address underlying cause; balanced crystalloids (LR) preferred over NS to avoid hyperchloremic acidosis
- **Metabolic alkalosis** (high pH, high HCO₃):
  - Common cause in surgical patients: NG suction (loss of HCl), vomiting, diuretics
  - Contraction alkalosis: volume depletion concentrates bicarbonate
  - Treatment: volume resuscitation with NS (chloride-responsive), replace potassium
- **Respiratory acidosis/alkalosis:** Hypoventilation vs. hyperventilation; commonly anesthesia-related

**Electrolyte Emergencies:**
- **Hyperkalemia (K⁺ >6.0 mEq/L):**
  - ECG changes: peaked T waves → widened QRS → sine wave → arrest
  - Acute treatment: calcium gluconate (membrane stabilization), insulin + glucose, sodium bicarbonate, kayexalate, dialysis
- **Severe hyponatremia (Na⁺ <120 mEq/L):**
  - Symptoms: seizures, cerebral edema
  - Correct slowly: maximum 8-10 mEq/L per 24 hours to avoid osmotic demyelination (central pontine myelinolysis)
- **Hypocalcemia (post-thyroidectomy):**
  - Mechanism: inadvertent parathyroidectomy or devascularization
  - Chvostek sign: facial nerve tapping → ipsilateral facial twitch (sensitivity ~70%)
  - Trousseau sign: carpal spasm with BP cuff inflation >3 minutes (more specific)
  - Treatment: IV calcium gluconate for symptomatic hypocalcemia, oral calcium + vitamin D for chronic management

### Nutritional Assessment in Surgical Patients

**Screening Tools:**
- Nutritional Risk Screening (NRS-2002): recommended by ESPEN for surgical patients
- Subjective Global Assessment (SGA): combines history + physical exam
- Key parameters: unintentional weight loss >10% in 6 months, BMI <18.5, low oral intake for >5 days

**Biochemical Markers:**
| Marker | Half-life | Use |
|--------|-----------|-----|
| Albumin | 20 days | Chronic nutritional status; better as prognostic surgical marker |
| Prealbumin (transthyretin) | 2-3 days | Acute changes in nutritional status |
| Transferrin | 8-10 days | Intermediate marker |
| Retinol-binding protein | 12 hours | Most sensitive to acute changes |

**Refeeding Syndrome:**
- Life-threatening complication of re-introducing nutrition to severely malnourished patients
- Mechanism: insulin surge with refeeding drives phosphate, magnesium, and potassium intracellularly → severe hypophosphatemia
- Complications: cardiac arrhythmias, respiratory failure, seizures, death
- Prevention: start low (10-15 kcal/kg/day), supplement phosphate/Mg/K proactively, monitor electrolytes daily for first week

**Caloric and Protein Requirements:**
- Basal: 25-30 kcal/kg/day
- Stressed/surgical: 30-35 kcal/kg/day
- Protein: 1.5-2.0 g/kg/day for surgical patients (higher for burns, open abdomen)
- Arginine and glutamine: conditionally essential amino acids in critical illness (immune function, gut integrity)

### Perioperative Risk Assessment

**Revised Cardiac Risk Index (RCRI / Lee Index):**
| Risk Factor | Points |
|------------|--------|
| High-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular) | 1 |
| History of ischemic heart disease | 1 |
| History of heart failure | 1 |
| History of cerebrovascular disease | 1 |
| Insulin-dependent diabetes | 1 |
| Serum creatinine >2.0 mg/dL | 1 |

- 0 points: ~3.9% risk of major cardiac event
- 1 point: ~6.0%
- 2 points: ~10.1%
- ≥3 points: ~15%+

**Functional Capacity (METs):**
- <4 METs (cannot climb a flight of stairs): poor functional capacity → further cardiac testing may be needed
- ≥4 METs: adequate for most surgeries

**ACS NSQIP Surgical Risk Calculator:**
- Uses 21 patient-specific variables to predict 30-day morbidity and mortality
- Procedure-specific risk estimation — most comprehensive tool available
- Web-based, publicly accessible

### Surgical Site Infection Prevention Bundle

**Evidence-Based Interventions (CMS/SCIP Measures):**
1. Appropriate antibiotic selection (cefazolin for most; add metronidazole for colorectal)
2. Antibiotic timing: within 60 minutes of incision (120 for vancomycin/fluoroquinolones)
3. Antibiotic re-dosing: every 2 half-lives intraoperatively (cefazolin: re-dose at 4 hours)
4. Discontinue prophylactic antibiotics within 24 hours post-operatively
5. Chlorhexidine-alcohol skin preparation (superior to povidone-iodine)
6. Normothermia maintenance (core temp >36°C)
7. Glucose control (target <200 mg/dL, ideally <180 mg/dL)
8. Appropriate hair removal (clipping, not shaving)
9. Supplemental oxygen in the immediate postoperative period

**Wound Classification and SSI Risk:**
| Class | Definition | SSI Risk |
|-------|-----------|----------|
| I — Clean | No entry into GI/GU/respiratory tract | 1-3% |
| II — Clean-contaminated | Controlled entry into GI/GU/respiratory tract | 5-8% |
| III — Contaminated | Open trauma, gross spillage from GI tract | 10-15% |
| IV — Dirty/Infected | Pre-existing infection, perforated viscus | >25% |`,
      keyTerms: [
        { term: 'PDGF', definition: 'Platelet-Derived Growth Factor — the earliest growth factor released in wound healing, recruiting fibroblasts and smooth muscle cells to the wound site' },
        { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor — the primary driver of angiogenesis (new blood vessel formation) during the proliferative phase of wound healing' },
        { term: 'prolyl hydroxylase', definition: 'The enzyme that hydroxylates proline residues in collagen, requiring vitamin C and oxygen as cofactors — deficiency (scurvy) impairs collagen synthesis and wound healing' },
        { term: 'refeeding syndrome', definition: 'Life-threatening metabolic complication of re-introducing nutrition to malnourished patients, characterized by severe hypophosphatemia, hypokalemia, and hypomagnesemia causing cardiac and respiratory failure' },
        { term: 'RCRI', definition: 'Revised Cardiac Risk Index (Lee Index) — a 6-factor scoring system predicting major cardiac events after non-cardiac surgery, used to guide perioperative cardiac evaluation' },
        { term: 'NRS-2002', definition: 'Nutritional Risk Screening tool recommended by ESPEN for identifying surgical patients at nutritional risk who would benefit from preoperative optimization' },
        { term: 'keloid', definition: 'Abnormal wound healing with excessive collagen deposition extending beyond the original wound margins, distinct from hypertrophic scars which remain within wound borders' },
        { term: 'contraction alkalosis', definition: 'Metabolic alkalosis resulting from extracellular volume depletion that concentrates bicarbonate, commonly seen with NG suction or vomiting in surgical patients' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Macrophages are the single most important cell in wound healing — they orchestrate the transition from inflammation to proliferation by releasing growth factors (PDGF, TGF-beta, VEGF).
- Wounds NEVER regain 100% of original tensile strength — maximum is approximately 80% at 3 months, which is why incisional hernias can develop even years after surgery.
- Lactated Ringer's is preferred over Normal Saline for resuscitation: NS causes hyperchloremic metabolic acidosis, which can compound existing acidosis in surgical patients.
- Refeeding syndrome kills: always start nutrition slowly (10-15 kcal/kg/day) in malnourished patients and monitor phosphate, magnesium, and potassium daily.
- The ACS NSQIP Risk Calculator is the most validated tool for predicting 30-day surgical outcomes — use it in preoperative counseling.`,
    },

    4: {
      level: 4,
      summary:
        'Advanced surgical principles encompass enhanced recovery protocols, goal-directed hemodynamic therapy, complex fluid physiology, advanced nutritional support strategies, and evidence-based perioperative optimization algorithms.',
      explanation: `## Advanced Surgical Principles

### Enhanced Recovery After Surgery (ERAS) — Comprehensive Protocol

**ERAS Core Elements by Phase:**

**Preoperative:**
- Patient education and counseling (set expectations, reduce anxiety)
- Medical optimization (prehabilitation: exercise, nutrition, smoking cessation 4+ weeks before)
- Carbohydrate loading: 400 mL clear carbohydrate drink 2-3 hours before surgery (reduces insulin resistance, catabolism)
- Minimize fasting: clear liquids until 2 hours before anesthesia (not traditional midnight NPO)
- Avoid mechanical bowel preparation for most colorectal surgery (ERAS Society recommendation)
- VTE prophylaxis risk assessment and plan
- No routine premedication with long-acting sedatives

**Intraoperative:**
- Multimodal opioid-sparing analgesia:
  - Regional anesthesia (epidural for open abdominal, TAP blocks for laparoscopic)
  - IV acetaminophen, NSAIDs/COX-2 inhibitors, ketamine, lidocaine infusion, dexamethasone
  - Avoid routine long-acting opioids
- Goal-directed fluid therapy (GDFT): titrate fluids to stroke volume optimization using esophageal Doppler, arterial waveform analysis, or pulse pressure variation
- Restrictive vs. liberal fluids: avoid both extremes — individualize to maintain euvolemia
- Maintain normothermia (forced-air warming blankets, warm IV fluids)
- Minimize drains and nasogastric tubes (remove in OR if placed)
- Laparoscopic/minimally invasive approach when appropriate

**Postoperative:**
- Early oral intake: clear liquids day of surgery, regular diet POD 1
- Early mobilization: out of bed evening of surgery, walking POD 1
- Multimodal analgesia continued (scheduled acetaminophen + NSAIDs; opioids only PRN for breakthrough)
- Early urinary catheter removal (POD 1-2 for most surgeries)
- Chewing gum to reduce ileus (stimulates vagal cephalic-GI reflex)
- Audit compliance and outcomes

**ERAS Outcomes Evidence:**
- Reduces length of stay by 30-50% for colorectal surgery
- Reduces complications by 40%
- Reduces readmissions
- Does NOT increase mortality — in fact may reduce 30-day mortality
- Cost savings: $2,000-$5,000 per patient

### Goal-Directed Fluid Therapy (GDFT)

**Rationale:** Both hypovolemia and fluid overload harm surgical patients:
- Hypovolemia → tissue hypoperfusion → organ dysfunction, anastomotic leak
- Fluid overload → tissue edema → impaired healing, pulmonary complications, ileus

**Monitoring Modalities:**
- **Esophageal Doppler:** Measures aortic flow velocity; guides stroke volume optimization with fluid boluses
- **Pulse Pressure Variation (PPV):** In mechanically ventilated patients; PPV >13% suggests fluid responsiveness
- **Stroke Volume Variation (SVV):** Similar to PPV; SVV >10-12% suggests fluid responsiveness
- **FloTrac/Vigileo:** Arterial waveform-based cardiac output monitoring

**Protocol:**
1. Baseline stroke volume measurement
2. 250 mL crystalloid bolus
3. If stroke volume increases >10% → patient is fluid-responsive → give another bolus
4. If stroke volume does not increase → stop (patient is on the flat part of the Starling curve)
5. Repeat as needed throughout surgery

### Advanced Nutritional Support

**Immunonutrition:**
- Arginine: substrate for nitric oxide synthesis (vasodilation, immune cell function); enhances T-cell function
- Glutamine: primary fuel for enterocytes and immune cells; conditionally essential in critical illness
- Omega-3 fatty acids (EPA, DHA): anti-inflammatory, modulate immune response
- Nucleotides: support rapid cell division (immune cells, enterocytes)
- Perioperative immunonutrition (e.g., Impact, Oral Impact) given 5-7 days before major surgery reduces infectious complications by ~30% (meta-analysis evidence)

**Parenteral Nutrition Complications:**
- Central line-associated bloodstream infection (CLABSI): most dangerous complication
- Hepatic steatosis and cholestasis (from excess glucose and lipid infusion)
- Hyperglycemia: insulin drip often needed
- Electrolyte disturbances: monitor phosphate, magnesium, potassium daily
- Essential fatty acid deficiency: if lipid-free TPN >2 weeks
- Manganese and copper toxicity in hepatic failure
- Refeeding syndrome (see Level 3)

**When to Start Nutritional Support:**
- ESPEN guidelines: if oral intake will be inadequate for >7 days perioperatively, start supplemental nutrition
- If oral/enteral not possible: delay TPN for 7 days in well-nourished patients (early TPN increases infections — EPaNIC trial)
- In severely malnourished patients: start TPN early if enteral is not feasible
- Early enteral nutrition (within 24 hours) after GI surgery is safe and beneficial — reduces infections and LOS

### Perioperative Risk: Beyond Basic Assessment

**Frailty Assessment:**
- Frailty is a stronger predictor of surgical outcomes than age alone
- Modified Frailty Index (mFI): validated in NSQIP data
- Components: functional dependence, COPD, CHF, diabetes, hypertension, impaired sensorium, TIA/CVA history, peripheral vascular disease
- Frail patients have 2-5x higher morbidity and mortality regardless of procedure

**Prehabilitation:**
- Structured exercise program (aerobic + resistance) for 4-6 weeks before major surgery
- Combined with nutritional optimization and psychological support
- Evidence: improves functional capacity, reduces complications, accelerates recovery (strongest evidence in colorectal and cardiac surgery)
- Trimodal prehabilitation (exercise + nutrition + anxiety management) has the most robust evidence

**Perioperative Medication Management:**
| Medication | Recommendation |
|-----------|---------------|
| Beta-blockers | Continue if currently taking; do NOT start de novo (POISE trial) |
| Statins | Continue perioperatively |
| ACE inhibitors/ARBs | Hold morning of surgery (risk of intraoperative hypotension) |
| Anticoagulants (warfarin) | Stop 5 days before; bridge with LMWH if high thromboembolic risk |
| DOACs | Stop 2-3 days before (renal function dependent) |
| Aspirin | Continue for cardiac patients; hold for 7 days if low cardiac risk |
| Metformin | Hold day of surgery (lactic acidosis risk); resume when eating |
| Insulin | Reduce long-acting by 50-80% night before; hold short-acting morning of surgery |

### Surgical Site Infection: Advanced Prevention

**Decolonization Protocols:**
- Nasal mupirocin + chlorhexidine body wash for 5 days preoperatively
- Targets MRSA and MSSA colonization (reduces SSI by 40-50% in carriers)
- Universal decolonization increasingly adopted over targeted screening

**Wound Irrigation:**
- Intraoperative wound irrigation with dilute betadine (0.5-1% povidone-iodine) or antibiotic irrigation
- WATER trial and LILY trial: antibiotic or antiseptic irrigation reduces SSI in contaminated/dirty wounds
- Normal saline irrigation is adequate for clean wounds

**Negative Pressure Wound Therapy (NPWT) Over Closed Incisions:**
- Applies suction to a sealed dressing over a closed surgical incision
- Reduces SSI in high-risk wounds (obese patients, contaminated fields, re-operations)
- Mechanism: reduces dead space, removes exudate, increases perfusion
- Cost must be weighed against benefit — most evidence in high-risk populations

**Glycemic Control:**
- Target: blood glucose <180 mg/dL perioperatively
- Insulin infusion for diabetic patients undergoing major surgery
- HbA1c >8% associated with significantly higher SSI rates — optimize preoperatively
- Both hyperglycemia AND hypoglycemia increase morbidity — avoid tight glucose control (<110) in non-cardiac surgery (NICE-SUGAR trial)`,
      keyTerms: [
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery — a multimodal, evidence-based perioperative care pathway that reduces length of stay by 30-50% and complications by 40% through interventions including carbohydrate loading, multimodal analgesia, early feeding, and early mobilization' },
        { term: 'goal-directed fluid therapy', definition: 'Individualized intraoperative fluid management using hemodynamic monitoring (esophageal Doppler, SVV, PPV) to optimize stroke volume, avoiding both hypovolemia and fluid overload' },
        { term: 'immunonutrition', definition: 'Perioperative nutritional supplementation with arginine, glutamine, omega-3 fatty acids, and nucleotides given 5-7 days before major surgery, shown to reduce infectious complications by approximately 30%' },
        { term: 'prehabilitation', definition: 'Structured preoperative optimization program combining exercise training, nutritional support, and psychological preparation for 4-6 weeks before major surgery to improve functional capacity and reduce complications' },
        { term: 'frailty index', definition: 'A validated measure of physiologic vulnerability that predicts surgical outcomes better than age alone, incorporating functional status, comorbidities, and cognitive function' },
        { term: 'EPaNIC trial', definition: 'Landmark trial demonstrating that early parenteral nutrition (within 48 hours of ICU admission) increases infections compared to delayed initiation (day 8) in well-nourished critically ill patients' },
        { term: 'POISE trial', definition: 'Large RCT showing that starting beta-blockers de novo before surgery (metoprolol) reduced MI but increased stroke and overall mortality — beta-blockers should be continued in patients already taking them but not started perioperatively' },
        { term: 'NPWT', definition: 'Negative Pressure Wound Therapy — application of sub-atmospheric pressure to a wound (open or closed incision) to remove fluid, reduce edema, and promote healing' },
      ],
      clinicalNotes: `**Decision-Making Pearls:**
- ERAS is not a single intervention but a bundle — compliance >70% of elements is needed to see full benefit. Partial adoption yields partial results.
- Goal-directed fluid therapy reduces complications by preventing both under- and over-resuscitation. The traditional "10 mL/kg/hr for open abdominal surgery" approach leads to fluid overload.
- Immunonutrition (Impact) for 5-7 days preoperatively is Level 1 evidence for major GI surgery — it is underutilized in practice.
- Frailty assessment should be part of every preoperative evaluation for major surgery — a frail 65-year-old has worse outcomes than a fit 80-year-old.
- Do NOT start beta-blockers de novo before surgery (POISE trial); DO continue them if the patient is already taking them.
- Nasal mupirocin + CHG bathing (decolonization) is one of the most effective SSI prevention strategies — consider universal decolonization for high-risk procedures (cardiac, orthopedic implant, vascular).`,
    },

    5: {
      level: 5,
      summary:
        'Current frontiers in surgical principles include precision perioperative medicine, AI-driven risk prediction, microbiome-informed surgical care, advanced wound healing therapeutics, and individualized fluid/nutrition algorithms based on real-time monitoring.',
      explanation: `## Frontiers in Surgical Principles

### Precision Perioperative Medicine

**Genomic Perioperative Risk:**
- Pharmacogenomic testing for perioperative medications:
  - CYP2D6 polymorphisms: affect codeine/tramadol metabolism (ultra-rapid metabolizers at risk of toxicity; poor metabolizers get no analgesia)
  - CYP2C19: affects clopidogrel activation (relevant for timing of surgery after cardiac stenting)
  - VKORC1/CYP2C9: warfarin sensitivity (guides perioperative anticoagulation dosing)
- Genome-wide association studies identifying variants associated with surgical complications (wound healing, adhesion formation, VTE susceptibility)

**Wearable Technology for Perioperative Monitoring:**
- Continuous vital sign monitoring (heart rate, SpO2, activity, temperature) from wearable patches
- Early detection of postoperative deterioration: retrospective studies show 6-8 hour lead time before clinical recognition of sepsis or respiratory failure
- FDA-approved surgical recovery monitoring platforms (e.g., BioSticker, VitalConnect)
- Integration with EHR for automated early warning scores

### AI and Machine Learning in Perioperative Care

**Predictive Models:**
- POTTER (Predictive OpTimal Trees in Emergency Surgery Risk): ML model outperforming ASA class and POSSUM in predicting emergency surgery outcomes
- MySurgeryRisk: deep learning model using EHR data to predict patient-specific postoperative complications (AKI, sepsis, mortality) with AUC >0.85
- AI-enhanced NSQIP: incorporating continuous monitoring data and imaging to refine risk predictions beyond static preoperative variables

**Intraoperative Decision Support:**
- Hypotension prediction algorithms: identify impending hypotension 5-15 minutes before it occurs (Acumen Hypotension Prediction Index)
- Automated anesthesia titration: closed-loop systems adjusting propofol and remifentanil based on EEG and hemodynamic targets
- Smart IV pump algorithms integrating real-time hemodynamic monitoring with fluid administration protocols

**Postoperative Surveillance:**
- Natural language processing of nursing notes to detect early SSI, delirium, and falls
- Automated sepsis screening using ML on continuous vital signs + lab data
- Predictive models for readmission risk guiding discharge planning

### The Surgical Microbiome

**Gut Microbiome and Surgical Outcomes:**
- The gut microbiome plays a critical role in surgical complications:
  - Anastomotic leak: Certain pathogenic bacteria (Enterococcus faecalis, Pseudomonas aeruginosa) produce collagenase that degrades anastomotic tissue
  - Surgical site infection: gut bacterial translocation contributes to postoperative infectious complications
  - Postoperative ileus: gut microbiome disruption from antibiotics contributes to prolonged ileus

**Microbiome-Informed Interventions:**
- Selective digestive decontamination (SDD): targeted gut decontamination reducing SSI in specific populations (established in ICU settings, emerging in elective surgery)
- Perioperative probiotics: Lactobacillus and Bifidobacterium supplementation reduces infectious complications in colorectal surgery (meta-analysis of 20+ RCTs)
- Fecal microbiota transplantation: for recurrent C. difficile after surgical antibiotic exposure
- Future: preoperative microbiome profiling to predict anastomotic leak risk and guide targeted interventions

### Advanced Wound Healing Therapeutics

**Biologic and Regenerative Approaches:**
- Platelet-rich plasma (PRP): concentrated autologous growth factors applied to chronic wounds; evidence strongest for diabetic foot ulcers
- Stem cell therapy: mesenchymal stem cells (MSCs) applied to chronic wounds enhance angiogenesis and collagen deposition — Phase II/III trials ongoing
- Extracellular vesicles (exosomes): cell-free therapy delivering growth factors and microRNAs to wound beds — preclinical promise
- Bioengineered skin substitutes (Integra, Apligraf): dermal matrices and living skin equivalents for complex wound coverage

**Negative Pressure Wound Therapy (NPWT) Evolution:**
- Instillation NPWT (NPWTi-d): combines negative pressure with automated delivery of antiseptic or antibiotic solution to the wound bed
- Ultraportable NPWT (PICO): single-use, battery-powered devices enabling outpatient management
- Smart NPWT: devices with sensors monitoring wound fluid composition to guide therapy duration

**Hyperbaric Oxygen Therapy (HBO):**
- Increases dissolved oxygen in plasma, supporting wound healing in hypoxic tissues
- Evidence-based indications: chronic diabetic foot ulcers, radiation-damaged tissue (osteoradionecrosis), compromised flaps/grafts
- Mechanism: enhances neutrophil killing, promotes angiogenesis, supports collagen synthesis
- 20-40 sessions at 2.0-2.4 ATA typically required

### Individualized Fluid and Hemodynamic Management

**Closed-Loop Fluid Administration:**
- Automated systems (e.g., LIR algorithm) that continuously measure cardiac output and autonomously administer fluid boluses to maintain target stroke volume
- Pilot RCTs show improved hemodynamic stability and reduced hypotension episodes
- Not yet standard of care — requires further validation

**Balanced Crystalloids vs. Normal Saline — Definitive Evidence:**
- SMART trial (2018): balanced crystalloids (LR) reduce major adverse kidney events (MAKE30) compared to NS in critically ill patients
- SALT-ED trial (2018): balanced crystalloids reduce MAKE30 in non-critically ill patients
- Mechanism: NS delivers supraphysiologic chloride → renal vasoconstriction → decreased GFR → AKI
- Current recommendation: balanced crystalloids (LR or Plasmalyte) as default resuscitation fluid; NS reserved for specific indications (hyponatremia, TBI)

**Colloid Controversy:**
- Albumin: safe for resuscitation in sepsis (SAFE trial) but no survival benefit over crystalloid; avoid in TBI (worse outcomes)
- Hydroxyethyl starch (HES): REMOVED from practice — increases AKI and mortality in critically ill patients (6S trial, CHEST trial)
- Blood products: restrictive transfusion (Hb >7 g/dL) equivalent or superior to liberal (>10 g/dL) for most patients (TRICC trial, FOCUS trial)

### Antibiotic Stewardship in Surgical Prophylaxis

**Duration Evidence:**
- Single pre-incision dose is sufficient for most clean and clean-contaminated cases — no benefit to postoperative doses (meta-analysis evidence)
- Exception: cardiac surgery (24 hours), some orthopedic implants (24 hours)
- STOP-IT trial (see Acute Abdomen Level 5): 3-5 days after source control for intra-abdominal infection
- Extended prophylaxis (>24 hours) increases C. difficile and antimicrobial resistance without reducing SSI

**Emerging Approaches:**
- Rapid molecular diagnostics: PCR-based pathogen identification for targeted therapy within hours (vs. days for culture)
- Antibiotic-impregnated materials: sutures (Triclosan-coated Vicryl Plus), mesh, wound matrices
- Bacteriophage therapy: for multidrug-resistant surgical infections — compassionate use expanding, RCTs in progress

### ERAS 2.0: Next-Generation Recovery Protocols

**Personalized ERAS:**
- AI algorithms adjusting ERAS pathway elements based on real-time patient data (glucose, lactate, activity levels, pain scores)
- Wearable-guided mobilization targets (step counts, activity goals) with real-time feedback
- Telemedicine-integrated post-discharge monitoring with automated escalation for concerning trends

**Prehabilitation Integration:**
- Combining structured prehabilitation (4-6 weeks) with ERAS creates a comprehensive perioperative optimization pathway
- Greatest benefit in high-risk patients: frail, sarcopenic, malnourished, poor functional capacity
- Multimodal prehabilitation (exercise + nutrition + psychological) has stronger evidence than unimodal approaches
- Economic analysis: prehabilitation is cost-effective despite upfront investment through reduced complications and LOS`,
      keyTerms: [
        { term: 'SMART trial', definition: 'Landmark 2018 trial demonstrating that balanced crystalloids (LR/Plasmalyte) reduce major adverse kidney events compared to normal saline in critically ill patients, establishing balanced crystalloids as the preferred resuscitation fluid' },
        { term: 'MySurgeryRisk', definition: 'Deep learning predictive model using electronic health record data to generate patient-specific probabilities of postoperative complications with AUC exceeding 0.85' },
        { term: 'pharmacogenomics', definition: 'The study of how genetic variation affects drug metabolism and response, applied perioperatively to optimize analgesic selection (CYP2D6), anticoagulation (VKORC1/CYP2C9), and antiplatelet therapy (CYP2C19)' },
        { term: 'anastomotic leak microbiome', definition: 'Emerging understanding that specific pathogenic bacteria (Enterococcus faecalis, Pseudomonas) at the anastomotic site produce collagenase and proteases that degrade healing tissue, contributing to anastomotic leak pathogenesis' },
        { term: 'Hypotension Prediction Index', definition: 'Machine learning algorithm that analyzes arterial waveform characteristics to predict impending intraoperative hypotension 5-15 minutes before it occurs, enabling proactive hemodynamic management' },
        { term: 'closed-loop fluid administration', definition: 'Automated IV fluid delivery systems that continuously monitor cardiac output and autonomously titrate fluid boluses to maintain target stroke volume, reducing human variability in fluid management' },
        { term: 'NPWTi-d', definition: 'Negative Pressure Wound Therapy with instillation and dwell time — advanced wound management combining vacuum pressure with automated delivery of antiseptic solution to the wound bed at programmed intervals' },
      ],
      clinicalNotes: `**Evidence-Based Practice Points:**
- SMART and SALT-ED trials: balanced crystalloids (LR) should be the default IV fluid for surgical patients. Normal saline causes hyperchloremic acidosis and AKI — reserve it for specific indications.
- Hydroxyethyl starch is contraindicated in critically ill patients (6S, CHEST trials) — this includes surgical patients with sepsis, major hemorrhage, or organ dysfunction.
- The surgical microbiome is an emerging frontier: perioperative probiotics have meta-analytic support for reducing infections in colorectal surgery, but optimal strains and dosing are still being refined.
- AI-driven perioperative prediction models (MySurgeryRisk, POTTER) are approaching clinical utility but require prospective validation and attention to algorithmic bias across diverse populations.
- Single-dose antibiotic prophylaxis is sufficient for most clean and clean-contaminated surgeries — extended prophylaxis increases C. difficile without reducing SSI. Champion antibiotic stewardship in your practice.
- Prehabilitation + ERAS is the most evidence-based framework for perioperative optimization — implementation science (behavior change, protocol adherence) is now the limiting factor, not the evidence.`,
    },
  },

  media: [
    {
      id: 'wound-healing-phases-diagram',
      type: 'diagram',
      filename: 'wound-healing-phases-molecular.svg',
      title: 'Molecular Phases of Wound Healing',
      description: 'Diagram showing the four overlapping phases of wound healing with key growth factors, cells, and collagen types at each stage.',
    },
    {
      id: 'fluid-compartments-diagram',
      type: 'diagram',
      filename: 'body-fluid-compartments.svg',
      title: 'Body Fluid Compartments and IV Fluid Distribution',
      description: 'Diagram showing TBW distribution (ICF, ECF, intravascular, interstitial) and how different IV fluids distribute across compartments.',
    },
    {
      id: 'eras-protocol-overview',
      type: 'diagram',
      filename: 'eras-protocol-phases.svg',
      title: 'ERAS Protocol Overview',
      description: 'Comprehensive flowchart showing preoperative, intraoperative, and postoperative ERAS elements with evidence grades.',
    },
  ],

  citations: [
    {
      id: 'smart-trial-2018',
      type: 'article',
      title: 'Balanced Crystalloids versus Saline in Critically Ill Adults (SMART)',
      authors: ['Semler MW', 'Self WH', 'Wanderer JP', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '378(9):829-839',
      url: 'https://doi.org/10.1056/NEJMoa1711584',
    },
    {
      id: 'eras-colorectal-guidelines',
      type: 'article',
      title: 'Guidelines for Perioperative Care in Elective Colorectal Surgery: ERAS Society Recommendations',
      authors: ['Gustafsson UO', 'Scott MJ', 'Hubner M', 'et al.'],
      source: 'World Journal of Surgery',
      chapter: '43(3):659-695',
    },
    {
      id: 'epanic-trial',
      type: 'article',
      title: 'Early versus Late Parenteral Nutrition in Critically Ill Adults (EPaNIC)',
      authors: ['Casaer MP', 'Mesotten D', 'Hermans G', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '365(6):506-517',
    },
    {
      id: 'poise-trial',
      type: 'article',
      title: 'Effects of extended-release metoprolol succinate in patients undergoing non-cardiac surgery (POISE)',
      authors: ['POISE Study Group'],
      source: 'The Lancet',
      chapter: '371(9627):1839-1847',
    },
    {
      id: 'schwartz-surgical-principles',
      type: 'textbook',
      title: "Schwartz's Principles of Surgery — Basic Principles",
      authors: ['Brunicardi FC', 'et al.'],
      source: 'McGraw-Hill, 11th Edition',
      license: 'Commercial',
    },
    {
      id: 'sabiston-textbook',
      type: 'textbook',
      title: 'Sabiston Textbook of Surgery: The Biological Basis of Modern Surgical Practice',
      authors: ['Townsend CM', 'Beauchamp RD', 'Evers BM', 'Mattox KL'],
      source: 'Elsevier, 21st Edition',
      license: 'Commercial',
    },
  ],

  crossReferences: [
    {
      targetId: 'surgery-wound-healing',
      targetType: 'process',
      relationship: 'related',
      label: 'Wound Healing (Patient-Focused)',
    },
    {
      targetId: 'surgery-surgical-complications',
      targetType: 'topic',
      relationship: 'related',
      label: 'Surgical Complications',
    },
    {
      targetId: 'surgery-acute-abdomen',
      targetType: 'condition',
      relationship: 'related',
      label: 'Acute Abdomen',
    },
    {
      targetId: 'surgery-hernias',
      targetType: 'condition',
      relationship: 'related',
      label: 'Hernias',
    },
    {
      targetId: 'surgery-pre-operative-evaluation',
      targetType: 'topic',
      relationship: 'related',
      label: 'Pre-Operative Evaluation',
    },
    {
      targetId: 'surgery-post-operative-care',
      targetType: 'topic',
      relationship: 'related',
      label: 'Post-Operative Care',
    },
  ],

  tags: {
    systems: ['gastrointestinal', 'integumentary', 'renal', 'cardiovascular'],
    topics: ['surgery', 'general surgery', 'perioperative care', 'wound healing', 'fluid management', 'nutrition', 'ERAS', 'infection prevention'],
    keywords: [
      'wound healing', 'fluid management', 'electrolytes', 'ERAS', 'surgical nutrition',
      'SSI prevention', 'perioperative care', 'risk assessment', 'RCRI', 'prehabilitation',
      'goal-directed fluid therapy', 'immunonutrition', 'refeeding syndrome',
      'damage control', 'SMART trial', 'antibiotic stewardship',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-30T00:00:00Z',
  updatedAt: '2025-01-30T00:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
