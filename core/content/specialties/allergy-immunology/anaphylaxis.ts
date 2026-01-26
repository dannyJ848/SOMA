import { EducationalContent } from '../../types';

export const anaphylaxisContent: EducationalContent = {
  id: 'allergy-immunology-anaphylaxis',
  type: 'condition',
  name: 'Anaphylaxis',
  alternateNames: ['Anaphylactic Shock', 'Severe Allergic Reaction', 'Systemic Anaphylaxis'],

  levels: {
    1: {
      level: 1,
      summary: 'Anaphylaxis is a severe, life-threatening allergic reaction that affects the whole body and requires immediate emergency treatment with epinephrine.',
      explanation: `Anaphylaxis is the most serious type of allergic reaction. It happens fast, affects your whole body, and can be deadly without quick treatment. The good news is that it can be treated effectively with a medicine called epinephrine (EpiPen).

**What Happens During Anaphylaxis:**

1. **Quick Onset**: Symptoms usually start within minutes of exposure
2. **Multiple Body Systems Affected**:
   - Skin: Hives, itching, flushing, swelling
   - Breathing: Throat swelling, wheezing, trouble breathing
   - Heart/Blood pressure: Dizziness, fainting, fast heartbeat
   - Stomach: Nausea, vomiting, cramps, diarrhea

**Common Triggers:**
- **Foods**: Peanuts, tree nuts, shellfish, fish, milk, eggs
- **Insect stings**: Bees, wasps, hornets, fire ants
- **Medications**: Antibiotics (penicillin), NSAIDs, anesthesia drugs
- **Latex**: Rubber gloves, balloons, medical equipment
- **Exercise**: Sometimes combined with food (food-dependent exercise-induced)

**Warning Signs - ACT FAST if you see:**
- Difficulty breathing or swallowing
- Swelling of lips, tongue, or throat
- Feeling faint or dizzy
- Widespread hives with other symptoms
- Sense of doom or panic

**What To Do:**
1. **Give Epinephrine (EpiPen) IMMEDIATELY** - This is the most important step!
2. Call 911
3. Lie down with legs raised (unless having trouble breathing)
4. Give a second epinephrine dose after 5-15 minutes if no improvement
5. Go to the emergency room - symptoms can return (biphasic reaction)

**Prevention:**
- Carry epinephrine auto-injectors at all times
- Wear a medical alert bracelet
- Avoid known triggers
- Have an anaphylaxis action plan`,
      keyTerms: [
        { term: 'anaphylaxis', definition: 'A severe, whole-body allergic reaction that can be life-threatening', pronunciation: 'an-uh-fih-LAK-sis' },
        { term: 'epinephrine', definition: 'Life-saving medicine (also called adrenaline) that reverses anaphylaxis', pronunciation: 'ep-ih-NEF-rin' },
        { term: 'EpiPen', definition: 'A device that automatically injects epinephrine into your thigh' },
        { term: 'biphasic reaction', definition: 'When anaphylaxis symptoms return hours later after initial improvement' },
      ],
      analogies: [
        'Anaphylaxis is like your immune system hitting a fire alarm for a false alarm - it overreacts so severely that the response itself becomes dangerous.',
        'Epinephrine is like hitting the emergency brake on anaphylaxis - it quickly stops the dangerous reaction.',
      ],
      examples: [
        'A child eats a peanut butter cookie at a birthday party and within 5 minutes has hives, trouble breathing, and feels faint - this is anaphylaxis requiring immediate epinephrine.',
        'Someone gets stung by a bee and their throat starts swelling shut while they feel dizzy - they need their EpiPen right away.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anaphylaxis is a severe, rapid-onset, IgE-mediated systemic hypersensitivity reaction involving multiple organ systems that requires immediate epinephrine administration and emergency medical care.',
      explanation: `Anaphylaxis is a medical emergency characterized by rapid onset of life-threatening airway, breathing, and/or circulatory problems, usually accompanied by skin and mucosal changes.

**Diagnostic Criteria (Any ONE of the following):**

**Criterion 1:**
Acute onset (minutes to hours) with skin/mucosal involvement (hives, flushing, lip/tongue swelling) PLUS at least one of:
- Respiratory compromise (dyspnea, wheezing, stridor, hypoxemia)
- Reduced blood pressure or symptoms of end-organ dysfunction

**Criterion 2:**
Two or more of the following rapidly after exposure to likely allergen:
- Skin/mucosal involvement
- Respiratory compromise
- Reduced blood pressure or associated symptoms
- Persistent GI symptoms (crampy abdominal pain, vomiting)

**Criterion 3:**
Reduced blood pressure after exposure to known allergen for that patient

**Pathophysiology:**
1. Allergen crosslinks IgE on mast cells and basophils
2. Massive mediator release (histamine, tryptase, leukotrienes, PAF)
3. Systemic effects:
   - Vasodilation → hypotension
   - Increased vascular permeability → edema, hives
   - Bronchoconstriction → wheezing
   - Smooth muscle contraction → GI symptoms

**Organ System Manifestations:**

| System | Symptoms |
|--------|----------|
| Skin (90%) | Urticaria, angioedema, flushing, pruritus |
| Respiratory (70%) | Dyspnea, wheezing, stridor, cough, nasal congestion |
| Cardiovascular (45%) | Hypotension, tachycardia, dizziness, syncope |
| GI (45%) | Nausea, vomiting, diarrhea, cramping |
| Neurologic | Anxiety, confusion, sense of impending doom |

**Treatment Algorithm:**

**FIRST LINE - Epinephrine IM:**
- Adults: 0.3-0.5 mg (1:1000 concentration) IM in anterolateral thigh
- Pediatric: 0.01 mg/kg (max 0.3 mg)
- Repeat every 5-15 minutes as needed
- NEVER delay epinephrine for other treatments

**Adjunctive Therapies:**
- Position: Supine with legs elevated (if hypotensive), sitting up (if dyspneic)
- Oxygen: High flow
- IV fluids: Normal saline bolus for hypotension
- Albuterol: For bronchospasm not responding to epinephrine
- H1 antihistamine: Diphenhydramine 25-50 mg IV/IM
- H2 antihistamine: Famotidine 20 mg IV
- Corticosteroids: Methylprednisolone 125 mg IV (may prevent biphasic reaction)

**Observation:**
- Minimum 4-6 hours after symptom resolution
- Longer if severe, biphasic history, or difficult access to care
- Discharge with epinephrine prescription and action plan

**Biphasic Reaction:**
- Occurs in 1-20% of cases
- Typically 1-72 hours after initial reaction
- More common with severe initial reactions
- Corticosteroids may help prevent (evidence limited)`,
      keyTerms: [
        { term: 'anaphylaxis', definition: 'Severe, rapid-onset allergic reaction affecting multiple organ systems', pronunciation: 'an-uh-fih-LAK-sis' },
        { term: 'epinephrine', definition: 'First-line treatment for anaphylaxis; alpha and beta adrenergic agonist', pronunciation: 'ep-ih-NEF-rin' },
        { term: 'angioedema', definition: 'Deep tissue swelling, often affecting face, lips, and airway', pronunciation: 'an-jee-oh-eh-DEE-mah' },
        { term: 'stridor', definition: 'High-pitched breathing sound indicating upper airway obstruction' },
        { term: 'biphasic anaphylaxis', definition: 'Return of anaphylaxis symptoms hours after initial resolution' },
      ],
      analogies: [
        'Epinephrine works like a master switch that reverses all the effects of anaphylaxis at once - it constricts blood vessels (raises BP), relaxes airways (stops wheezing), and reduces swelling.',
        'The biphasic reaction is like the fire reigniting after you thought it was put out - that is why observation is essential.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anaphylaxis results from IgE-mediated mast cell and basophil degranulation causing systemic release of histamine, tryptase, leukotrienes, and PAF, leading to vasodilation, increased permeability, and bronchospasm that requires immediate intramuscular epinephrine as first-line treatment.',
      explanation: `Anaphylaxis represents the most severe manifestation of Type I hypersensitivity, requiring immediate recognition and treatment to prevent cardiovascular collapse and death.

**Molecular Pathophysiology:**

**Triggering Mechanisms:**

*IgE-Mediated (Immunologic):*
- Allergen crosslinks IgE on mast cell FcεRI receptors
- Triggers signaling cascade → degranulation
- Classic pathway for foods, venoms, drugs, latex

*Non-IgE Immunologic:*
- IgG-mediated (rare, animal models)
- Complement activation (C3a, C5a anaphylatoxins)
- Direct mast cell activation by drugs

*Non-Immunologic (Anaphylactoid):*
- Direct mast cell degranulation without IgE
- Radiocontrast media, opioids, vancomycin
- Physically indistinguishable from IgE-mediated

**Key Mediators and Their Effects:**

| Mediator | Source | Effects |
|----------|--------|---------|
| Histamine | Mast cells, basophils | Vasodilation, permeability, bronchospasm, pruritus |
| Tryptase | Mast cells | Diagnostic marker, activates complement |
| Leukotrienes (C4, D4, E4) | Mast cells, basophils | Prolonged bronchospasm, mucus secretion |
| PAF | Mast cells, basophils, eosinophils | Severe hypotension, platelet aggregation |
| Prostaglandin D2 | Mast cells | Bronchospasm, vasodilation |
| TNF-α | Mast cells | Systemic inflammation, shock |

**Cardiovascular Pathophysiology:**
- Vasodilation → distributive shock
- Increased vascular permeability → intravascular volume loss (up to 35% in 10 min)
- Direct cardiac effects: Coronary vasospasm, arrhythmias
- Kounis syndrome: Allergic acute coronary syndrome

**Epinephrine Pharmacology:**

*Mechanism:*
- α1-adrenergic: Vasoconstriction → reverses hypotension and mucosal edema
- β1-adrenergic: Positive inotropic/chronotropic → supports cardiac output
- β2-adrenergic: Bronchodilation, inhibits mediator release from mast cells

*Dosing:*
- IM administration preferred (faster absorption than SC)
- Anterolateral thigh optimal site
- 0.3-0.5 mg (0.3-0.5 mL of 1:1000) for adults
- Repeat every 5-15 minutes
- No absolute contraindications in anaphylaxis

*IV Epinephrine:*
- Reserved for refractory hypotension or cardiac arrest
- 0.1 mg doses (1 mL of 1:10,000) or infusion 1-10 µg/min
- Requires cardiac monitoring

**Refractory Anaphylaxis:**

*Risk Factors:*
- Beta-blocker use (blocks epinephrine effects)
- ACE inhibitor use (impairs bradykinin degradation)
- Severe initial reaction
- Delayed epinephrine administration

*Management:*
- Repeated epinephrine doses
- Large-volume IV fluids (may need 5-10 L)
- Vasopressors: Norepinephrine, vasopressin
- Glucagon: Bypasses beta-blockade (1-5 mg IV)
- Consider methylene blue for refractory vasodilation

**Differential Diagnosis:**
- Vasovagal reaction (bradycardia, pallor, no urticaria)
- Asthma exacerbation (no systemic symptoms)
- Panic attack (no objective findings)
- Hereditary angioedema (no urticaria, family history)
- Systemic mastocytosis (baseline elevated tryptase)
- Scombroid poisoning (histamine in spoiled fish)

**Diagnostic Testing:**

*Serum Tryptase:*
- Peaks 1-2 hours post-reaction
- Draw at presentation and 24 hours later (baseline)
- Elevated >11.4 ng/mL or >2 + 1.2× baseline
- More reliable for venom/drug than food anaphylaxis`,
      keyTerms: [
        { term: 'PAF', definition: 'Platelet-activating factor; lipid mediator causing severe hypotension and platelet aggregation in anaphylaxis' },
        { term: 'Kounis syndrome', definition: 'Allergic acute coronary syndrome; mast cell-mediated coronary vasospasm during anaphylaxis' },
        { term: 'tryptase', definition: 'Mast cell-specific protease; elevated serum levels confirm mast cell degranulation' },
        { term: 'anaphylactoid', definition: 'Non-IgE-mediated reaction clinically identical to anaphylaxis', pronunciation: 'an-uh-fih-LAK-toyd' },
        { term: 'glucagon', definition: 'Hormone that bypasses beta-receptor blockade; used in beta-blocker-refractory anaphylaxis' },
      ],
      clinicalNotes: 'Never delay epinephrine for other treatments. IM better than SC. Tryptase supports diagnosis but may be normal in food anaphylaxis. Beta-blocker patients: Consider glucagon. ACE inhibitor patients: May have more severe angioedema. Always prescribe epinephrine auto-injectors and refer to allergy for testing.',
    },
    4: {
      level: 4,
      summary: 'Anaphylaxis is a systemic immediate hypersensitivity reaction mediated primarily by mast cell and basophil degranulation releasing histamine, proteases, lipid mediators, and cytokines, causing cardiovascular collapse through vasodilation and capillary leak, requiring immediate intramuscular epinephrine targeting alpha and beta adrenergic receptors to reverse pathophysiologic changes.',
      explanation: `Anaphylaxis represents the extreme end of Type I hypersensitivity with unique pathophysiologic features and management considerations that distinguish it from localized allergic reactions.

**Advanced Pathophysiology:**

**Cardiovascular Collapse Mechanisms:**

*Distributive Shock:*
- Histamine H1/H2 receptor activation → arterial vasodilation
- PAF: Most potent hypotensive mediator in human anaphylaxis
- NO synthesis upregulation → sustained vasodilation
- Venodilation → decreased preload

*Hypovolemic Component:*
- Increased vascular permeability → plasma extravasation
- Up to 35% intravascular volume loss in 10 minutes
- Hemoconcentration despite apparent bleeding
- Third-spacing of fluid

*Cardiogenic Component:*
- Direct myocardial depression (histamine, PAF)
- Takotsubo cardiomyopathy (stress cardiomyopathy)
- Kounis syndrome: Mast cells in coronary plaques
- Arrhythmias from hypoxia and epinephrine

**Airway Pathophysiology:**

*Upper Airway:*
- Angioedema: Tongue, lips, uvula, larynx
- Mechanisms: Increased permeability, local mast cell release
- Life-threatening laryngeal edema

*Lower Airway:*
- Bronchospasm: Histamine, LTC4/D4/E4
- Mucus hypersecretion
- May persist after initial treatment

**Mediator Kinetics:**

| Mediator | Release Timing | Duration |
|----------|---------------|----------|
| Histamine | Immediate | Minutes (rapid metabolism) |
| Tryptase | Immediate | Hours (diagnostic window) |
| Leukotrienes | 5-30 minutes | Hours |
| PAF | Immediate | Minutes (rapid degradation by PAF-AH) |
| Prostaglandins | Minutes | Hours |

*PAF and PAF-AH:*
- PAF: Potent mediator, correlates with severity
- PAF-AH (acetylhydrolase): Degrades PAF
- Low PAF-AH levels → more severe anaphylaxis
- Genetic variations in PAF-AH affect severity

**Special Clinical Scenarios:**

**Perioperative Anaphylaxis:**
- Incidence: 1:10,000 to 1:20,000 anesthetics
- Common triggers: Neuromuscular blocking agents (rocuronium), antibiotics, latex
- Diagnosis difficult during anesthesia (hemodynamic instability, skin covered)
- Tryptase essential for confirmation

**Exercise-Induced Anaphylaxis (EIA):**
- Occurs during or after exercise
- Food-dependent EIA: Requires food ingestion + exercise
- Common foods: Wheat (ω-5 gliadin), shellfish, celery
- Mechanism: Exercise increases GI permeability, lowers allergen threshold

**Idiopathic Anaphylaxis:**
- No identifiable trigger despite evaluation
- Diagnosis of exclusion
- Evaluate for mastocytosis (baseline tryptase, REMA score)
- May respond to prophylactic antihistamines, steroids, omalizumab

**Venom Anaphylaxis:**
- Hymenoptera (bees, wasps, hornets, fire ants)
- Venom immunotherapy highly effective (>95% protection)
- Can reduce risk of severe reactions

**Drug Allergy Evaluation After Anaphylaxis:**

*Timing:*
- Wait 4-6 weeks after reaction (allow IgE replenishment)
- Skin testing for drugs with validated protocols
- Specific IgE for select drugs (penicillin, insulin)
- Drug provocation when appropriate

*Penicillin Allergy:*
- 90% of "penicillin allergic" patients tolerate penicillin
- Skin testing identifies those truly at risk
- Delabeling improves outcomes and reduces costs

**Epinephrine Auto-Injector Considerations:**

*Prescription:*
- Two devices (for biphasic or failed first dose)
- Proper technique training essential
- Check expiration dates
- EpiPen, Auvi-Q, generic options

*Barriers to Use:*
- Fear of needles/injection
- Uncertainty about severity
- Device not available
- Cost/access issues

**Management Algorithm - Refractory Anaphylaxis:**

1. Repeated IM epinephrine (every 5-15 min)
2. IV epinephrine infusion (1-10 µg/min)
3. Aggressive fluid resuscitation (NS boluses)
4. Vasopressors: Norepinephrine, vasopressin, phenylephrine
5. Glucagon: 1-5 mg IV (for beta-blocker patients)
6. Methylene blue: 1-2 mg/kg (for NO-mediated refractory vasodilation)
7. ECMO: For cardiac arrest/refractory shock`,
      keyTerms: [
        { term: 'PAF-AH', definition: 'Platelet-activating factor acetylhydrolase; enzyme that degrades PAF, with genetic variations affecting anaphylaxis severity' },
        { term: 'food-dependent exercise-induced anaphylaxis', definition: 'Anaphylaxis requiring both food ingestion and exercise, neither alone being sufficient' },
        { term: 'omega-5 gliadin', definition: 'Wheat protein component commonly associated with wheat-dependent exercise-induced anaphylaxis' },
        { term: 'Kounis syndrome', definition: 'Acute coronary syndrome triggered by mast cell mediators during allergic reactions' },
        { term: 'REMA score', definition: 'Score predicting clonal mast cell disease in patients with anaphylaxis' },
        { term: 'venom immunotherapy', definition: 'Desensitization treatment for Hymenoptera venom allergy, highly effective at preventing anaphylaxis' },
      ],
      clinicalNotes: 'Perioperative: Rocuronium most common cause in some countries. EIA: Test for specific food + exercise, not food alone. Idiopathic: Check baseline tryptase for mastocytosis. Beta-blocker patients: Glucagon bypasses beta-blockade. Methylene blue: Rescue therapy for refractory vasodilatory shock. All patients need allergy referral and action plan.',
    },
    5: {
      level: 5,
      summary: 'Anaphylaxis results from systemic mast cell and basophil activation releasing preformed mediators (histamine, tryptase) and newly synthesized lipid mediators (PAF, leukotrienes) causing cardiovascular collapse through vasodilation, increased permeability, and cardiogenic effects, requiring immediate epinephrine administration targeting adrenergic receptors to reverse pathophysiology, with subsequent evaluation including tryptase confirmation and allergen identification for long-term prevention through avoidance and potentially immunotherapy.',
      explanation: `Comprehensive understanding of anaphylaxis integrates molecular mechanisms, clinical presentation phenotypes, and evidence-based management to optimize outcomes in this life-threatening condition.

**Systems Biology of Anaphylaxis:**

**Mast Cell Heterogeneity in Anaphylaxis:**

*Tissue Distribution:*
- Mucosal mast cells (MCT): Gut, lung
- Connective tissue mast cells (MCTC): Skin, around vessels
- Different mediator content and FcεRI density
- Explains variable clinical presentations

*Mast Cell Activation Threshold:*
- Not binary on/off
- IgE density, allergen valency, FcεRI expression affect threshold
- Cofactors lower threshold: Infection, exercise, alcohol, NSAIDs, stress
- Explains inconsistent reactions to same allergen

**The "Atopic March" and Anaphylaxis Risk:**

*Progression:*
- Atopic dermatitis → food sensitization through damaged skin
- Food allergy → anaphylaxis risk
- Early peanut introduction prevents sensitization (LEAP study)

*Epicutaneous Sensitization:*
- TSLP from damaged skin drives Th2 responses
- Oral tolerance mechanisms bypassed
- Higher risk of anaphylactic (vs non-anaphylactic) food allergy

**Genetic Susceptibility:**

*PAF-AH Variants:*
- Ala379Val variant: Reduced activity
- Associated with more severe anaphylaxis
- Variable frequency across populations

*Other Genetic Factors:*
- ACE polymorphisms: Affect bradykinin metabolism
- Carboxypeptidase A3: Mast cell protease variant
- HLA associations for drug-induced anaphylaxis
- α-gal syndrome: Association with B-negative blood type

**Alpha-Gal Syndrome (AGS):**

*Unique Features:*
- IgE to galactose-α-1,3-galactose (mammalian carbohydrate)
- Tick bite (Lone Star) sensitizes humans
- Delayed anaphylaxis (3-6 hours after red meat)
- Also triggered by some medications (cetuximab)

*Diagnosis:*
- α-gal IgE testing
- History of tick bites
- Delayed reaction to red meat

**Biomarkers Beyond Tryptase:**

*Baseline Tryptase:*
- >11.4 ng/mL suggests mastocytosis/clonal mast cell disease
- REMA score: Tryptase + symptoms predicts KIT mutation

*Acute Markers:*
- Histamine: Rapid degradation, difficult to measure
- Chymase: Mast cell-specific
- PAF: Correlates with severity but difficult to measure
- 9α,11β-PGF2: Mast cell PGD2 metabolite

*Carboxypeptidase A3:*
- Mast cell-specific protease
- May be elevated when tryptase is not

**Evidence-Based Management Updates:**

**World Allergy Organization Guidelines:**

*Epinephrine Dosing:*
- IM preferred over SC
- Anterolateral thigh optimal absorption
- Can repeat every 5-15 minutes
- No absolute contraindications

*Adjunctive Therapies:*
- H1 antihistamines: Relieve skin symptoms, do not treat hypotension/airway
- H2 antihistamines: Added benefit uncertain
- Corticosteroids: May prevent biphasic reaction (evidence weak)
- Beta-agonists: For persistent bronchospasm

**Observation Duration:**

*Factors for Longer Observation:*
- Severe initial reaction
- History of biphasic reactions
- Delayed or no epinephrine given
- Comorbidities (asthma, cardiovascular disease)
- Poor access to emergency care

*Minimum 4 hours; consider 8-24 hours for high-risk*

**Discharge Requirements:**
- Epinephrine auto-injector prescription
- Written anaphylaxis action plan
- Allergen avoidance education
- Allergy referral
- Medical alert identification

**Special Populations:**

**Pregnancy:**
- Epinephrine IS indicated (Class C but necessary)
- Untreated anaphylaxis more dangerous than epinephrine
- Left lateral positioning to avoid vena cava compression
- Fetal monitoring indicated

**Cardiovascular Disease/Beta-Blockers:**
- Higher mortality risk
- May be refractory to epinephrine
- Glucagon: 1-5 mg IV
- May need vasopressin, ECMO

**Mastocytosis:**
- Higher anaphylaxis risk (Hymenoptera venom especially)
- Baseline tryptase elevation
- Consider venom immunotherapy
- Perioperative precautions essential

**Long-Term Management:**

**Allergen Immunotherapy:**

*Venom Immunotherapy:*
- 95-98% efficacy in preventing sting anaphylaxis
- 3-5 years typical duration
- Consider lifelong in mastocytosis

*Oral Immunotherapy (OIT) for Foods:*
- Peanut OIT (Palforzia) FDA-approved
- Increases threshold for reaction
- Does not "cure" allergy
- Risk of reactions during treatment

*Anti-IgE (Omalizumab):*
- Reduces risk of severe reactions
- Adjunct to OIT (improves safety)
- Approved for food allergy
- Consider in idiopathic anaphylaxis

**Quality Metrics:**
- Epinephrine administration rate in ED
- Time to epinephrine
- Discharge with auto-injector prescription
- Allergy referral completion
- Action plan provision`,
      keyTerms: [
        { term: 'alpha-gal syndrome', definition: 'IgE-mediated allergy to mammalian carbohydrate galactose-α-1,3-galactose, causing delayed anaphylaxis to red meat, often following tick bites' },
        { term: 'LEAP study', definition: 'Learning Early About Peanut allergy; landmark trial showing early peanut introduction prevents peanut allergy' },
        { term: 'oral immunotherapy', definition: 'Treatment involving gradual increasing doses of allergen by mouth to raise tolerance threshold' },
        { term: 'cofactors', definition: 'Factors that lower mast cell activation threshold, making anaphylaxis more likely (exercise, alcohol, NSAIDs, infection)' },
        { term: 'Palforzia', definition: 'FDA-approved peanut oral immunotherapy product for desensitization' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Anaphylaxis criteria: Rapid onset + multisystem (skin + respiratory OR cardiovascular)
- FIRST LINE: Epinephrine IM (0.3-0.5 mg adult, anterolateral thigh)
- Tryptase: Peaks 1-2 hours, compare to baseline 24 hours later
- Biphasic reactions: 1-20%, observe minimum 4-6 hours
- Beta-blockers: Glucagon 1-5 mg IV for refractory cases
- Venom immunotherapy: 95-98% effective, consider lifelong in mastocytosis
- α-gal syndrome: Delayed (3-6 hours) meat reaction, tick bite history
- Food-dependent EIA: Common with wheat (ω-5 gliadin), requires exercise + food
- Idiopathic anaphylaxis: Check baseline tryptase, consider mastocytosis
- All patients: EpiPen prescription, action plan, allergy referral, MedicAlert`,
    },
  },

  media: [
    {
      id: 'anaphylaxis-algorithm',
      type: 'diagram',
      filename: 'anaphylaxis-treatment-algorithm.svg',
      title: 'Anaphylaxis Treatment Algorithm',
      description: 'Step-by-step emergency management of anaphylaxis',
    },
    {
      id: 'epinephrine-injection-technique',
      type: 'image',
      filename: 'epipen-technique.jpg',
      title: 'Epinephrine Auto-Injector Technique',
      description: 'Proper technique for administering intramuscular epinephrine',
    },
  ],
  citations: [
    {
      id: 'wao-anaphylaxis-guidelines',
      type: 'article',
      title: 'World Allergy Organization Anaphylaxis Guidance 2020',
      authors: ['Cardona V', 'Ansotegui IJ', 'Ebisawa M'],
      source: 'World Allergy Organization Journal',
    },
    {
      id: 'sampson-anaphylaxis',
      type: 'article',
      title: 'Anaphylaxis: A systematic review',
      authors: ['Simons FER', 'Ardusso LRF', 'Bilo MB'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-food-allergies', targetType: 'condition', relationship: 'see-also', label: 'Food Allergies' },
    { targetId: 'allergy-immunology-drug-allergies', targetType: 'condition', relationship: 'see-also', label: 'Drug Allergies' },
    { targetId: 'allergy-immunology-immunotherapy', targetType: 'concept', relationship: 'see-also', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['immune', 'cardiovascular', 'respiratory'],
    topics: ['immunology', 'allergy', 'emergency medicine'],
    keywords: ['anaphylaxis', 'epinephrine', 'severe allergic reaction', 'food allergy', 'venom allergy', 'drug allergy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anaphylaxisContent;
