import { EducationalContent } from '../../types';

export const insulinGuideContent: EducationalContent = {
  id: 'topic-insulin-guide',
  type: 'topic',
  name: 'Insulin Guide',
  nameEs: 'Guia de Insulina',
  alternateNames: ['Insulin Therapy', 'Injectable Insulin', 'Humalog', 'Lantus', 'Novolog', 'Levemir', 'Tresiba'],
  levels: {
    level1: {
      title: 'Insulin: Helping Control Your Blood Sugar',
      titleEs: 'Insulina: Ayudando a Controlar Su Azucar en la Sangre',
      content: `
Insulin is a medicine that helps lower your blood sugar. It is used by people with diabetes whose
bodies either do not make insulin (type 1 diabetes) or do not make enough insulin or cannot use it
well (type 2 diabetes). Insulin is a hormone your body naturally makes to move sugar from your blood
into your cells, where it is used for energy. When you have diabetes, you need insulin medicine to
do this job.

**What Insulin Is For**
- It lowers blood sugar by helping sugar move from your blood into your cells.
- People with type 1 diabetes always need insulin because their body stopped making it.
- People with type 2 diabetes may need insulin if other medicines no longer control their blood sugar.
- Some pregnant women need insulin for gestational diabetes.

**How to Take Insulin**
- Insulin is usually given as a shot (injection) under the skin using an insulin pen or syringe.
- Your doctor will tell you exactly how much to take and when.
- Inject into the fatty areas of your body: belly, thigh, upper arm, or buttock.
- Rotate your injection sites — do not inject in the same spot every time.
- Some people use an insulin pump that delivers insulin continuously throughout the day.
- Never share insulin pens or needles with another person.

**Types of Insulin**
There are different types that work at different speeds:
- **Rapid-acting**: Works within 15 minutes. Take it right before or after meals. (Examples:
  Humalog, Novolog)
- **Short-acting**: Works within 30 minutes. Take it 30 minutes before meals. (Example:
  Regular/Humulin R)
- **Long-acting**: Works slowly over 24 hours. Take it once or twice a day at the same time.
  (Examples: Lantus, Levemir, Tresiba)
- **Mixed insulin**: Combines fast and long-acting insulin in one shot.

**Common Side Effects**
- **Low blood sugar (hypoglycemia)**: The most common and most important side effect. Signs include
  shakiness, sweating, fast heartbeat, dizziness, hunger, and confusion. Always carry a fast-acting
  sugar source like glucose tablets or juice.
- Weight gain — insulin can cause your body to store more energy as fat.
- Pain, redness, or swelling at the injection site.
- Itching at the injection site.

**Important Warnings**
- Learn the signs of low blood sugar and how to treat it. This is very important.
- Always have glucose tablets, juice, or candy with you in case your blood sugar drops too low.
- If you have severe low blood sugar and cannot swallow, someone should give you a glucagon injection.
  Make sure your family and close friends know how.
- Do not skip meals when taking insulin. Eating on a regular schedule helps prevent low blood sugar.
- Store insulin properly: unopened insulin goes in the refrigerator; opened insulin can stay at room
  temperature for up to 28 days (check your specific insulin instructions).

**When to Call Your Doctor**
- Blood sugar that is very low (below 54 mg/dL) or very high (above 300 mg/dL).
- Frequent low blood sugar episodes.
- Signs of allergic reaction: rash, itching, swelling, or trouble breathing.
- If you are sick and cannot eat — you may need to adjust your dose.

**Tips for Success**
- Check your blood sugar regularly as your doctor recommends.
- Keep a log of your blood sugar readings, insulin doses, and what you eat.
- Carry a medical ID that says you have diabetes and take insulin.
- Learn how to count carbohydrates — this helps you match your insulin dose to your food.
      `,
      patientCounselingPoints: [
        'Always carry a fast-acting sugar source (glucose tablets, juice) in case of low blood sugar.',
        'Rotate injection sites to prevent skin problems — do not inject in the same spot every time.',
        'Do not skip meals when taking insulin — eating regularly helps prevent dangerously low blood sugar.',
        'Store unopened insulin in the refrigerator and opened insulin at room temperature for up to 28 days.',
        'Never share insulin pens or needles with anyone, even family members.',
        'Teach family and friends how to recognize and treat severe low blood sugar, including glucagon use.'
      ],
      keyTerms: [
        { term: 'Insulin', definition: 'A hormone that moves sugar from your blood into your cells for energy. The insulin you inject replaces what your body cannot make.' },
        { term: 'Hypoglycemia (Low Blood Sugar)', definition: 'When your blood sugar drops too low, causing shakiness, sweating, and confusion. Treat immediately with fast-acting sugar.' },
        { term: 'Glucagon', definition: 'An emergency medicine that raises blood sugar quickly. It is used when someone with diabetes has very low blood sugar and cannot eat or drink.' },
        { term: 'Injection Site Rotation', definition: 'Changing where you give your shots to prevent skin problems and help your body absorb the insulin properly.' },
        { term: 'Blood Sugar (Glucose)', definition: 'The sugar in your blood that your body uses for energy. Insulin helps keep it at a healthy level.' }
      ]
    },
    level2: {
      title: 'Understanding Insulin Therapy for Diabetes Management',
      titleEs: 'Entendiendo la Terapia con Insulina para el Manejo de la Diabetes',
      content: `
Insulin therapy is a cornerstone of diabetes management, essential for all people with type 1 diabetes
and many with type 2 diabetes. Understanding the different types of insulin, how they work, and how
to use them effectively is critical for achieving good blood sugar control and avoiding complications.

**How Insulin Works in Your Body**
Normally, your pancreas releases insulin in two patterns:
1. **Basal insulin**: A steady, low level of insulin released all day and night to keep blood sugar
   stable between meals and during sleep.
2. **Bolus insulin**: A burst of insulin released at mealtimes to handle the rise in blood sugar
   from food.

Insulin therapy tries to copy this natural pattern. This is why many people use two types of insulin:
a long-acting (basal) insulin and a rapid-acting (bolus) insulin at meals.

**Types of Insulin in Detail**
- **Rapid-acting (lispro/Humalog, aspart/Novolog, glulisine/Apidra)**:
  Onset: 10-15 minutes. Peak: 1-2 hours. Duration: 3-5 hours. Take with meals to cover the
  carbohydrates you eat.
- **Short-acting (Regular/Humulin R, Novolin R)**:
  Onset: 30 minutes. Peak: 2-3 hours. Duration: 5-8 hours. Take 30 minutes before meals.
- **Intermediate-acting (NPH/Humulin N, Novolin N)**:
  Onset: 2-4 hours. Peak: 4-12 hours. Duration: 12-18 hours. Usually taken twice daily.
- **Long-acting (glargine/Lantus/Toujeo, detemir/Levemir, degludec/Tresiba)**:
  Onset: 1-2 hours. No significant peak. Duration: 18-42 hours. Provides steady basal coverage.
- **Ultra-rapid-acting (Fiasp, Lyumjev)**:
  Onset: 2-5 minutes. Faster than standard rapid-acting. Can be taken at the start of a meal
  or within 20 minutes after.

**Insulin Dosing Basics**
- **Basal-bolus regimen**: Long-acting insulin once or twice daily plus rapid-acting insulin
  before each meal. This provides the most flexible and physiologic coverage.
- **Starting doses**: Basal insulin is typically started at 10 units or 0.1-0.2 units/kg/day.
  Bolus insulin is calculated based on carbohydrate intake and correction factors.
- **Insulin-to-carb ratio**: The number of grams of carbohydrate covered by 1 unit of rapid-acting
  insulin. Common starting ratios are 1:10 to 1:15 (1 unit per 10-15 grams of carbs).
- **Correction factor**: How much 1 unit of rapid-acting insulin lowers your blood sugar. Common
  starting point: 1 unit lowers blood sugar by 50 mg/dL (the "1800 rule" divides 1800 by total
  daily insulin dose).

**Preventing and Managing Hypoglycemia**
Hypoglycemia (blood sugar below 70 mg/dL) is the most important safety concern with insulin:
- **Mild hypoglycemia (55-70 mg/dL)**: Treat with the "Rule of 15" — consume 15 grams of fast-
  acting carbohydrate, wait 15 minutes, recheck blood sugar. Repeat if still low.
- **Severe hypoglycemia (below 54 mg/dL or unable to self-treat)**: Requires glucagon. Nasal
  glucagon (Baqsimi) or injectable glucagon should be prescribed and kept accessible.
- **Common causes**: Skipping meals, exercising more than usual, taking too much insulin, or
  drinking alcohol.
- **Prevention**: Eat meals on a regular schedule, check blood sugar before driving, adjust insulin
  for exercise, and always carry fast-acting sugar.

**Storage and Handling**
- Unopened insulin: Refrigerate at 36-46 degrees F (2-8 degrees C). Do not freeze.
- Opened insulin: Room temperature (up to 77-86 degrees F depending on product) for 28-56 days.
- Inspect insulin before use. Clear insulin should be clear; cloudy insulin (NPH) should be
  uniformly cloudy after gentle rolling.
- Do not use insulin that has changed color, has clumps, or looks unusual.

**Insulin and Weight Management**
Weight gain is common when starting insulin therapy (average 2-4 kg in the first year). Strategies
to minimize weight gain include:
- Matching insulin doses carefully to carbohydrate intake.
- Avoiding treating insulin-induced hypoglycemia with excess calories.
- Maintaining regular physical activity.
- Working with your healthcare team to optimize your regimen.
      `,
      patientCounselingPoints: [
        'The basal-bolus regimen mimics your body natural insulin pattern — long-acting for background and rapid-acting for meals.',
        'Learn the Rule of 15 for treating low blood sugar: 15 grams of carbs, wait 15 minutes, recheck.',
        'Always keep glucagon available and make sure someone you trust knows how to use it.',
        'Your insulin-to-carb ratio and correction factor will be personalized — work with your diabetes team to fine-tune them.',
        'Inspect insulin before each injection — do not use if it looks cloudy (for clear insulin), clumped, or discolored.',
        'Weight gain is common when starting insulin but can be minimized with careful carb matching and regular exercise.'
      ],
      keyTerms: [
        { term: 'Basal Insulin', definition: 'Long-acting insulin that provides a steady, low level of coverage throughout the day and night to control blood sugar between meals.' },
        { term: 'Bolus Insulin', definition: 'Rapid-acting insulin taken at mealtimes to cover the blood sugar rise from food. Dose is based on carbohydrate intake.' },
        { term: 'Insulin-to-Carb Ratio', definition: 'The number of grams of carbohydrate covered by 1 unit of rapid-acting insulin. For example, 1:10 means 1 unit covers 10 grams of carbs.' },
        { term: 'Correction Factor', definition: 'How much 1 unit of rapid-acting insulin is expected to lower your blood sugar. Used to calculate extra insulin for high readings.' },
        { term: 'Rule of 15', definition: 'The standard treatment for mild low blood sugar: eat 15 grams of fast-acting carbs, wait 15 minutes, recheck. Repeat if still below 70 mg/dL.' },
        { term: 'Glucagon', definition: 'An emergency hormone that raises blood sugar. Available as nasal spray (Baqsimi) or injection for severe hypoglycemia.' }
      ]
    },
    level3: {
      title: 'Insulin Pharmacology and Clinical Applications',
      titleEs: 'Farmacologia de la Insulina y Aplicaciones Clinicas',
      content: `
Insulin remains the most potent glucose-lowering agent available. Since its discovery by Banting and
Best in 1921, insulin therapy has evolved from crude animal-derived extracts to highly engineered
recombinant analogs with tailored pharmacokinetic profiles. This level addresses the pharmacology
of insulin analogs, physiologic insulin replacement strategies, and clinical management principles.

**Insulin Biochemistry and Receptor Signaling**
Endogenous insulin is a 51-amino acid peptide hormone (5.8 kDa) consisting of an A chain (21 amino
acids) and B chain (30 amino acids) connected by two disulfide bonds. It is synthesized in pancreatic
beta cells as preproinsulin, processed to proinsulin in the endoplasmic reticulum, and cleaved to
mature insulin plus C-peptide in secretory granules.

Insulin receptor signaling:
1. Insulin binds the insulin receptor (IR), a tyrosine kinase receptor existing as two isoforms:
   IR-A (fetal, predominantly mitogenic) and IR-B (adult, predominantly metabolic).
2. Receptor autophosphorylation activates insulin receptor substrate (IRS) proteins.
3. IRS activation triggers two major pathways: PI3K/Akt (metabolic effects: glucose uptake, glycogen
   synthesis, lipogenesis) and Ras/MAPK (mitogenic effects: cell growth and differentiation).
4. PI3K/Akt signaling promotes GLUT4 translocation to the cell surface in muscle and adipose tissue,
   facilitating glucose uptake.

**Pharmacokinetics of Insulin Analogs**
Modern insulin analogs are engineered through amino acid substitutions that alter self-association,
absorption rate, and duration of action:

*Rapid-acting analogs:*
- **Insulin lispro (Humalog)**: Reversal of Pro-B28 and Lys-B29 reduces hexamer formation, enabling
  faster dissociation to monomers and absorption. Onset 15 min, peak 1-2 hr, duration 4-5 hr.
- **Insulin aspart (Novolog)**: Substitution of Pro-B28 with Asp reduces self-association. Similar
  profile to lispro.
- **Insulin glulisine (Apidra)**: Substitution of Asn-B3 with Lys and Lys-B29 with Glu. Fastest
  absorption among standard rapid-acting analogs.

*Long-acting analogs:*
- **Insulin glargine (Lantus/Basaglar)**: Addition of two arginines to the B chain C-terminus and
  substitution of Asn-A21 with Gly shifts the isoelectric point to pH 4. Forms microprecipitates
  at physiologic pH after subcutaneous injection, providing slow, prolonged absorption. Duration
  approximately 24 hours.
- **Insulin glargine U-300 (Toujeo)**: Three-fold concentration (300 U/mL) creates a smaller
  subcutaneous depot with even slower dissolution. Duration exceeds 24 hours with flatter profile.
- **Insulin detemir (Levemir)**: Acylation of Lys-B29 with a C14 fatty acid chain enables albumin
  binding, prolonging duration. Duration 12-24 hours; often requires twice-daily dosing.
- **Insulin degludec (Tresiba)**: Acylation with a C16 fatty acid chain via a gamma-glutamic acid
  spacer. Forms multi-hexamer chains in subcutaneous tissue, providing ultra-long action (>42
  hours) and exceptionally flat pharmacokinetic profile.

**Clinical Insulin Regimens**
1. **Basal-bolus therapy**: The gold standard for type 1 diabetes and advanced type 2 diabetes.
   Provides the most physiologic replacement and greatest flexibility.
2. **Basal insulin plus GLP-1 RA**: Combines basal insulin with a glucagon-like peptide-1 receptor
   agonist for type 2 diabetes. Reduces weight gain and hypoglycemia compared to full basal-bolus.
   Fixed-ratio combinations include Xultophy (degludec/liraglutide) and Soliqua (glargine/lixisenatide).
3. **Premixed/co-formulation insulin**: Provides both basal and prandial coverage in fewer injections.
   Examples: 70/30 (NPH/regular), 75/25 (NPL/lispro), Ryzodeg (degludec/aspart).
4. **Continuous subcutaneous insulin infusion (CSII/insulin pump)**: Delivers rapid-acting insulin
   continuously with programmable basal rates and user-initiated boluses. Superior to MDI for
   reducing HbA1c and hypoglycemia in type 1 diabetes.
5. **Automated insulin delivery (AID/closed-loop systems)**: Integrates continuous glucose monitoring
   (CGM) with an insulin pump and control algorithm. Systems include Medtronic 780G, Tandem
   Control-IQ, and Omnipod 5.

**Immunogenicity and Insulin Allergy**
- Modern recombinant human insulin analogs have significantly lower immunogenicity than animal-derived
  insulins, but antibody formation still occurs.
- Anti-insulin antibodies (AIAs) can cause erratic glycemic control, insulin resistance (requiring
  >200 units/day), or local injection-site reactions.
- True IgE-mediated insulin allergy is rare (<2%) and presents as urticaria, angioedema, or
  anaphylaxis. Management includes skin testing, desensitization protocols, and switching analogs.
      `,
      keyTerms: [
        { term: 'Insulin Receptor Substrate (IRS)', definition: 'Intracellular signaling proteins phosphorylated by the activated insulin receptor, initiating PI3K/Akt (metabolic) and Ras/MAPK (mitogenic) signaling cascades.' },
        { term: 'GLUT4 Translocation', definition: 'The insulin-stimulated movement of glucose transporter type 4 from intracellular vesicles to the cell surface, enabling glucose uptake in muscle and adipose tissue.' },
        { term: 'Hexamer Dissociation', definition: 'Insulin self-associates into hexamers for storage stability. After injection, hexamers must dissociate to monomers for absorption. Analog design accelerates or slows this process.' },
        { term: 'Automated Insulin Delivery (AID)', definition: 'Closed-loop systems integrating CGM, insulin pump, and control algorithms to automatically adjust insulin delivery. Represents the current standard for type 1 diabetes management.' },
        { term: 'Insulin Degludec', definition: 'An ultra-long-acting basal analog forming multi-hexamer chains subcutaneously, providing greater than 42-hour duration and the flattest pharmacokinetic profile among available insulins.' },
        { term: 'C-Peptide', definition: 'A byproduct of endogenous insulin synthesis. Measurement distinguishes endogenous from exogenous insulin and is used to assess residual beta-cell function.' }
      ]
    },
    level4: {
      title: 'Advanced Insulin Therapeutics: Clinical Decision-Making',
      titleEs: 'Terapeutica Avanzada de Insulina: Toma de Decisiones Clinicas',
      content: `
Optimal insulin therapy requires nuanced clinical decision-making accounting for patient-specific
factors, glycemic variability, technology integration, and evolving therapeutic paradigms. This
guide addresses advanced considerations for healthcare professionals managing complex insulin-
requiring patients.

**Insulin Initiation and Intensification in Type 2 Diabetes**
The ADA/EASD consensus algorithm positions insulin as a key therapy when other agents fail:
- **When to start**: Fasting glucose consistently >250 mg/dL, HbA1c >10%, or symptomatic
  hyperglycemia (polyuria, polydipsia, weight loss) — consider insulin from the outset.
- **Basal insulin initiation**: Start at 10 units or 0.1-0.2 U/kg/day. Titrate by 2-4 units
  every 3-7 days targeting fasting glucose 80-130 mg/dL. Patient-directed titration algorithms
  (e.g., the Treat-to-Target trial protocol) are effective and empowering.
- **When to intensify beyond basal**: If HbA1c remains above target despite fasting glucose at goal
  and basal dose exceeds 0.5 U/kg/day, postprandial glucose is likely the issue. Options:
  1. Add a GLP-1 RA before adding prandial insulin (preferred for weight and hypoglycemia profile).
  2. Add prandial rapid-acting insulin at the largest meal ("basal-plus"), then expand to additional
     meals ("basal-plus-plus") as needed.
  3. Switch to premixed insulin (simpler but less flexible).

**Glycemic Variability and Time in Range**
Beyond HbA1c, glycemic variability and time in range (TIR) are emerging as critical therapeutic targets:
- **Time in Range (70-180 mg/dL)**: The international consensus recommends TIR >70% for most adults
  with diabetes, corresponding to an approximate HbA1c of <7%.
- **Time below Range (<70 mg/dL)**: Should be <4% of the day (<1% for <54 mg/dL).
- **Coefficient of variation (CV)**: A measure of glycemic variability. CV <36% indicates stable
  glucose patterns. Higher CV predicts hypoglycemia risk even with acceptable mean glucose.
- **CGM-guided insulin adjustment**: Ambulatory glucose profile (AGP) reports enable pattern-based
  adjustments to basal rates, insulin-to-carb ratios, and correction factors that are superior
  to self-monitored blood glucose (SMBG)-based titration alone.

**Insulin in Special Populations**
*Hospital/Inpatient Management:*
- Basal-bolus-correction regimen is preferred over sliding-scale-only regimens, which are associated
  with greater glycemic variability and worse outcomes.
- Target glucose: 140-180 mg/dL for most critically ill patients.
- Continuous IV insulin infusion for DKA, HHS, perioperative management, and critically ill patients.
- Transition from IV to subcutaneous: Overlap basal subcutaneous insulin by 2 hours before stopping
  IV infusion to prevent rebound hyperglycemia.

*Pregnancy:*
- Insulin is the preferred pharmacologic agent for gestational diabetes and preexisting diabetes in
  pregnancy. Human insulin (NPH + regular) has the longest safety track record, but insulin analogs
  (lispro, aspart, detemir, glargine) have demonstrated safety in pregnancy studies.
- Insulin requirements increase significantly in the second and third trimesters due to placental
  hormones (human placental lactogen, cortisol, progesterone) causing insulin resistance.
- Postpartum insulin requirements drop precipitously; doses typically return to pre-pregnancy levels
  or lower within 24-48 hours.

*Renal Impairment:*
- Insulin clearance is reduced with declining GFR. Dose reductions of 25% for eGFR 10-50 and 50%
  for eGFR <10 are commonly recommended.
- Hypoglycemia risk increases significantly in advanced CKD due to reduced gluconeogenesis,
  reduced insulin clearance, and malnutrition.

*Elderly Patients:*
- Simplified regimens (basal-only or basal-plus one injection) are preferred.
- Relaxed glycemic targets: HbA1c <8% or <8.5% depending on comorbidity burden and life expectancy.
- Prioritize avoiding hypoglycemia over tight glycemic control due to fall risk and cognitive effects.

**Insulin Therapy Technology**
- **Connected insulin pens**: Smart pens (InPen, NovoPen 6/Echo Plus) track doses, timing, and
  temperature, integrating with CGM data for dose advisory.
- **Automated insulin delivery**: Hybrid closed-loop systems have demonstrated significant
  improvements in TIR (70-80%) with reduced hypoglycemia in type 1 diabetes trials.
- **Inhaled insulin (Afrezza)**: Ultra-rapid-acting insulin delivered by inhalation. Onset 12
  minutes, peak 35-55 minutes. Contraindicated in chronic lung disease. Useful for needle-averse
  patients or those requiring ultra-rapid prandial coverage.
      `,
      clinicalNotes: [
        'Add a GLP-1 RA before prandial insulin when intensifying beyond basal insulin in type 2 diabetes — it offers similar HbA1c reduction with weight loss and less hypoglycemia.',
        'Time in Range (>70%) and coefficient of variation (<36%) provide actionable glycemic targets beyond HbA1c for CGM-equipped patients.',
        'Sliding-scale insulin alone is inadequate for inpatient management — basal-bolus-correction regimens are the standard of care.',
        'Overlap subcutaneous basal insulin with IV insulin by at least 2 hours during transition to prevent rebound hyperglycemia.',
        'Insulin requirements drop dramatically postpartum — anticipate dose reductions to pre-pregnancy levels within 24-48 hours of delivery.',
        'In elderly patients, prioritize hypoglycemia avoidance and simplified regimens over tight glycemic control.'
      ],
      keyTerms: [
        { term: 'Time in Range (TIR)', definition: 'The percentage of time glucose remains within target (70-180 mg/dL). International consensus recommends >70% for most adults, correlating with HbA1c <7%.' },
        { term: 'Ambulatory Glucose Profile (AGP)', definition: 'A standardized CGM report displaying glucose patterns, variability, and time in range. The primary tool for pattern-based insulin dose adjustment.' },
        { term: 'Basal-Plus Strategy', definition: 'Adding a single prandial insulin injection at the largest meal to basal insulin, a stepwise approach to intensification before full basal-bolus therapy.' },
        { term: 'Treat-to-Target Protocol', definition: 'A patient-directed basal insulin titration algorithm (increase 2 units every 3 days targeting fasting glucose <130 mg/dL) proven effective in clinical trials.' },
        { term: 'Inhaled Insulin (Afrezza)', definition: 'Ultra-rapid-acting insulin delivered via pulmonary inhalation, providing the fastest onset of any commercial insulin. Contraindicated in chronic lung disease.' },
        { term: 'Hybrid Closed-Loop System', definition: 'An automated insulin delivery system that uses CGM data to auto-adjust basal insulin delivery, while still requiring user-initiated meal boluses.' }
      ]
    },
    level5: {
      title: 'Insulin: Expert-Level Pharmacotherapeutic Review',
      titleEs: 'Insulina: Revision Farmacoterapeutica de Nivel Experto',
      content: `
This expert-level review addresses the molecular pharmacology, next-generation insulin development,
pharmacogenomic considerations, and evolving technological paradigms in insulin therapeutics.

**Molecular Engineering of Insulin Analogs**
The structural basis for modern insulin analog design centers on manipulating hexamer-dimer-monomer
equilibria and albumin-binding properties:

*Rapid-acting engineering principles:*
- Insulin monomers (5.8 kDa) are the biologically active form, but insulin self-associates to
  dimers and zinc-coordinated hexamers for storage stability. In subcutaneous tissue, hexamers
  must dissociate for absorption — this process takes 30-60 minutes for regular human insulin.
- Rapid-acting analogs achieve faster absorption through amino acid substitutions at the B26-B30
  region that weaken monomer-monomer interfaces: lispro (Pro-B28-Lys, Lys-B29-Pro), aspart
  (Pro-B28-Asp), glulisine (Asn-B3-Lys, Lys-B29-Glu).
- Ultra-rapid formulations (Fiasp, Lyumjev) add excipients (niacinamide for Fiasp; treprostinil
  and citrate for Lyumjev) that promote local vasodilation and faster subcutaneous absorption of
  the same insulin molecules.

*Long-acting engineering principles:*
- **Glargine**: Isoelectric point shift (pH 6.7 to pH 4.0) via Asn-A21-Gly substitution and
  B31/B32-Arg additions. Precipitates at physiologic pH, creating a slow-dissolving depot.
  Metabolized to active metabolites M1 and M2 with reduced IGF-1R binding affinity.
- **Degludec**: C16 fatty diacid acylation via gamma-glutamic acid spacer at Lys-B29 enables
  formation of soluble multi-hexamer chains upon injection. Provides the most reproducible
  absorption profile (day-to-day variability 4-fold less than glargine U-100).
- **Insulin icodec**: A novel once-weekly basal insulin analog utilizing C20 fatty diacid
  acylation, strong albumin binding (>99%), and reduced insulin receptor binding. Phase 3
  ONWARDS trials demonstrate non-inferior glycemic control to daily glargine.

**Next-Generation Insulin Technologies**
- **Glucose-responsive (smart) insulin**: Molecular systems designed to release insulin
  proportionally to ambient glucose levels. Approaches include glucose-binding molecule-insulin
  conjugates, glucose oxidase-containing nanoparticles, and phenylboronic acid-based hydrogels.
  None have reached clinical development as of current data, but preclinical results are promising.
- **Oral insulin**: Hepato-preferential insulin delivery via oral route has the potential to
  better replicate physiologic portal insulin delivery. Challenges include GI degradation and
  poor bioavailability (<2%). ORMD-0801 (Oramed) has completed Phase 3 trials with modest efficacy.
- **Hepato-preferential insulin**: Insulin analogs designed for preferential hepatic uptake to
  better mimic endogenous insulin secretion (where approximately 50% is extracted first-pass by
  the liver). May reduce peripheral hyperinsulinemia and associated weight gain.

**Immunogenicity: Molecular and Clinical Perspectives**
- All exogenous insulins elicit some degree of anti-insulin antibody (AIA) formation, though
  clinical significance varies.
- AIA titers are generally higher with human insulin than analogs, and highest with animal-derived
  insulins (historical).
- High-affinity AIAs can act as a "buffer" — binding insulin and releasing it unpredictably,
  causing both delayed hypoglycemia and post-binding hyperglycemia.
- Insulin autoimmune syndrome (Hirata disease) involves spontaneous AIA formation in insulin-naive
  individuals, causing hypoglycemia through insulin-binding-release kinetics.
- Rare cases of severe insulin allergy require desensitization using progressive subcutaneous
  insulin dilution protocols performed in a monitored setting.

**Beta-Cell Replacement and Adjunctive Therapies**
- **Islet transplantation**: The Edmonton protocol and subsequent refinements have achieved insulin
  independence in selected T1DM patients, though immunosuppression requirements and limited islet
  supply remain barriers.
- **Stem cell-derived beta cells**: VX-880 (Vertex) and related programs have demonstrated
  insulin independence in early-phase clinical trials using stem cell-derived islet cells, though
  encapsulation and immune protection strategies are still evolving.
- **Adjunctive therapies in T1DM**: SGLT2 inhibitors (sotagliflozin, dapagliflozin) as adjuncts
  to insulin reduce HbA1c and weight but carry diabetic ketoacidosis risk. Pramlintide (amylin
  analog) reduces postprandial glucose spikes and promotes weight loss but requires additional
  injections.

**Pharmacoeconomics and Access**
- Insulin pricing has been a major public health concern, with US list prices rising over 1,000%
  from 1996 to 2019 for some analogs.
- Biosimilar insulins (e.g., Semglee/glargine, Basaglar/glargine) and authorized generics offer
  cost savings but market penetration has been limited by formulary and rebate structures.
- Walmart ReliOn (OTC human insulin NPH and Regular at approximately $25/vial) provides emergency
  access but requires different dosing knowledge than analog insulins.
- The Inflation Reduction Act (2022) capped Medicare insulin copays at $35/month, with some
  manufacturers voluntarily extending similar caps to commercial plans.
      `,
      clinicalNotes: [
        'Insulin degludec multi-hexamer chain technology provides 4-fold less day-to-day absorption variability than glargine U-100, translating to reduced hypoglycemia risk.',
        'Once-weekly insulin icodec (ONWARDS trials) represents a paradigm shift in basal insulin delivery for type 2 diabetes, potentially improving adherence.',
        'Ultra-rapid formulations (Fiasp, Lyumjev) use excipient-mediated vasodilation rather than insulin molecular changes to accelerate absorption.',
        'Glucose-responsive smart insulins remain in preclinical development but represent the theoretical ideal of mimicking endogenous insulin secretion.',
        'Stem cell-derived beta-cell therapies (VX-880) have achieved proof-of-concept insulin independence, though immune protection and scalability challenges remain.',
        'Biosimilar insulin adoption has been slower than anticipated due to complex PBM rebate structures, highlighting systemic barriers to insulin affordability.'
      ],
      keyTerms: [
        { term: 'Multi-Hexamer Chain Formation', definition: 'The subcutaneous self-association mechanism of insulin degludec, where C16 fatty diacid-acylated hexamers form soluble chains providing ultra-prolonged and reproducible absorption.' },
        { term: 'Insulin Icodec', definition: 'A novel once-weekly basal insulin utilizing C20 fatty diacid acylation and strong albumin binding to achieve 7-day duration. Phase 3 ONWARDS trials demonstrate non-inferiority to daily glargine.' },
        { term: 'Glucose-Responsive Insulin', definition: 'Conceptual smart insulin systems that auto-regulate release based on ambient glucose concentration, potentially eliminating hypoglycemia risk. Currently in preclinical research.' },
        { term: 'Hirata Disease (Insulin Autoimmune Syndrome)', definition: 'Spontaneous anti-insulin antibody formation in insulin-naive individuals causing unpredictable hypoglycemia through insulin binding-release kinetics.' },
        { term: 'VX-880 (Vertex)', definition: 'A stem cell-derived islet cell therapy that has achieved insulin independence in early clinical trials for type 1 diabetes, representing a potential functional cure.' },
        { term: 'Portal-Peripheral Insulin Gradient', definition: 'The physiologic 3:1 ratio of portal to peripheral insulin concentration lost with subcutaneous delivery. Hepato-preferential insulin analogs aim to restore this gradient.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Insulin',
      url: 'https://medlineplus.gov/insulin.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Insulin Product List',
      url: 'https://www.fda.gov/diabetes/insulin',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'American Diabetes Association',
      title: 'Standards of Care in Diabetes - Pharmacologic Approaches to Glycemic Treatment',
      url: 'https://diabetesjournals.org/care/issue/46/Supplement_1',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-metformin', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-diabetes-type1', type: 'topic', relationship: 'parent' },
    { id: 'topic-condition-diabetes-type2', type: 'topic', relationship: 'parent' }
  ],
  tags: ['insulin', 'diabetes', 'type-1-diabetes', 'type-2-diabetes', 'injectable', 'blood-sugar', 'hypoglycemia', 'basal-bolus'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
