import { EducationalContent } from '../../types';

export const lisinoprilGuideContent: EducationalContent = {
  id: 'topic-medication-lisinopril',
  type: 'topic',
  name: 'Lisinopril Guide',
  nameEs: 'Guia de Lisinopril',
  levels: {
    level1: {
      title: 'Lisinopril: Helping Lower Your Blood Pressure',
      titleEs: 'Lisinopril: Ayudando a Bajar Su Presion Arterial',
      content: `
Lisinopril is a medicine that helps lower high blood pressure. High blood pressure means your heart
has to work too hard to push blood through your body. Over time, this can damage your heart, kidneys,
and other organs. Lisinopril helps relax your blood vessels so blood flows more easily.

**How to Take Lisinopril**
- Take one tablet by mouth every day, usually in the morning.
- You can take it with or without food.
- Take it at the same time every day to help you remember.
- If you miss a dose, take it as soon as you remember. If it is close to your next dose, skip the missed one.
- Do not stop taking lisinopril without talking to your doctor first. Stopping suddenly can cause
  your blood pressure to spike.

**What Lisinopril Does**
- It relaxes your blood vessels, making it easier for blood to flow.
- It lowers the pressure inside your blood vessels.
- It helps protect your heart and kidneys from damage caused by high blood pressure.

**Common Side Effects**
- A dry, tickly cough — this is the most common side effect. It is not dangerous but can be annoying.
- Dizziness, especially when you stand up quickly. Get up slowly from sitting or lying down.
- Headache.
- Feeling tired.

**Important Warnings**
- Tell your doctor right away if your face, lips, tongue, or throat swell up. This is a rare but
  serious allergic reaction called angioedema. Go to the emergency room immediately.
- Do not take lisinopril if you are pregnant or planning to become pregnant. It can harm your baby.
- Avoid using salt substitutes that contain potassium, as lisinopril can raise your potassium levels.
- Drink plenty of water, especially in hot weather, to avoid dehydration and dizziness.

**Tips for Success**
- Check your blood pressure at home if you can. Write down the numbers to share with your doctor.
- Cut back on salt in your food. This helps the medicine work better.
- Stay active and eat fruits and vegetables.
- Take your medicine even on days when you feel fine. High blood pressure usually has no symptoms.
      `,
      patientCounselingPoints: [
        'Take lisinopril at the same time each day, even if you feel fine — high blood pressure usually has no symptoms.',
        'A dry cough is the most common side effect. Tell your doctor if it becomes bothersome; they may switch your medication.',
        'Stand up slowly to avoid dizziness, especially when you first start the medicine.',
        'Seek emergency help immediately if you experience swelling of the face, lips, tongue, or throat.',
        'Do not use this medicine if you are pregnant or could become pregnant.',
        'Avoid salt substitutes containing potassium unless your doctor says it is okay.'
      ],
      keyTerms: [
        { term: 'Blood Pressure', definition: 'The force of blood pushing against the walls of your blood vessels. High blood pressure means this force is too strong.' },
        { term: 'ACE Inhibitor', definition: 'The type of medicine lisinopril is. ACE stands for Angiotensin-Converting Enzyme. It helps relax blood vessels.' },
        { term: 'Angioedema', definition: 'A rare but serious allergic reaction causing swelling of the face, lips, tongue, or throat. Call 911 right away.' },
        { term: 'Potassium', definition: 'A mineral in your blood. Lisinopril can cause your potassium to go too high, so avoid extra potassium unless told otherwise.' },
        { term: 'Dehydration', definition: 'When your body does not have enough water. This can make the dizziness from lisinopril worse.' }
      ]
    },
    level2: {
      title: 'Understanding Lisinopril for Blood Pressure Control',
      titleEs: 'Entendiendo el Lisinopril para el Control de la Presion Arterial',
      content: `
Lisinopril is one of the most commonly prescribed medications for high blood pressure (hypertension).
It belongs to a class of drugs called ACE inhibitors. These medicines work by blocking a chemical
process in your body that narrows blood vessels.

**How Lisinopril Works**
Your body has a system called the renin-angiotensin-aldosterone system (RAAS) that helps regulate
blood pressure:
1. Your kidneys release an enzyme called renin.
2. Renin converts angiotensinogen into angiotensin I.
3. ACE converts angiotensin I into angiotensin II.
4. Angiotensin II narrows blood vessels and raises blood pressure.

Lisinopril blocks step 3 — it prevents ACE from making angiotensin II. With less angiotensin II,
your blood vessels relax and widen, and your blood pressure drops. It also reduces aldosterone,
a hormone that causes your body to retain salt and water.

**Dosing Information**
- Starting dose for hypertension: usually 10 mg once daily.
- Your doctor may adjust the dose up to 40 mg daily based on your response.
- For heart failure: starting dose is typically 2.5-5 mg daily.
- Dose adjustments needed if you have kidney problems.
- It takes 2-4 weeks to see the full blood pressure-lowering effect.

**The Cough Issue**
The dry cough associated with ACE inhibitors affects approximately 10-15% of patients. It occurs
because ACE also breaks down bradykinin. When ACE is blocked, bradykinin accumulates in the lungs,
causing irritation and coughing. The cough:
- Is typically dry and persistent.
- May start weeks to months after beginning the medication.
- Resolves within 1-4 weeks of stopping the medication.
- Is more common in women and people of African or Asian descent.
- If intolerable, your doctor may switch you to an ARB (angiotensin receptor blocker).

**Angioedema Risk**
Angioedema is a rare (0.1-0.7%) but potentially life-threatening side effect:
- Swelling of the face, lips, tongue, or throat can occur at any time during treatment.
- It is more common in Black patients (up to 4-5 times more frequent).
- Stop the medicine and go to the emergency room immediately if swelling occurs.
- You should never take an ACE inhibitor again after experiencing angioedema.

**Kidney Protection**
Lisinopril has an important role in protecting the kidneys, particularly in patients with diabetes:
- It reduces pressure inside the kidney's filtering units (glomeruli).
- It can slow the progression of diabetic kidney disease.
- Your doctor will monitor your kidney function and potassium levels with blood tests.

**Important Drug Interactions**
- NSAIDs (ibuprofen, naproxen): Can reduce lisinopril effectiveness and harm kidneys.
- Potassium supplements or potassium-sparing diuretics: Risk of dangerously high potassium.
- Lithium: Lisinopril can increase lithium levels in the blood.
- Other blood pressure medications: Combined use requires careful monitoring.
      `,
      patientCounselingPoints: [
        'ACE inhibitor cough affects about 10-15% of patients. If bothersome, your doctor can switch you to an ARB medication.',
        'Blood pressure reduction takes 2-4 weeks to reach full effect — do not get discouraged by initial readings.',
        'Never stop lisinopril abruptly, as this can cause rebound hypertension.',
        'Avoid NSAIDs like ibuprofen while taking lisinopril — they can reduce its effectiveness and harm your kidneys.',
        'Report any facial or throat swelling immediately — angioedema can occur even after years of use.',
        'Your doctor will order blood tests to monitor potassium and kidney function, especially early in treatment.'
      ],
      keyTerms: [
        { term: 'Renin-Angiotensin-Aldosterone System (RAAS)', definition: 'A hormone system that regulates blood pressure and fluid balance. Lisinopril works by interrupting this system.' },
        { term: 'Angiotensin II', definition: 'A powerful blood vessel-constricting hormone. Lisinopril prevents its formation, allowing vessels to relax.' },
        { term: 'Bradykinin', definition: 'A peptide that accumulates when ACE is blocked, causing vessel dilation but also triggering the ACE inhibitor cough.' },
        { term: 'ARB (Angiotensin Receptor Blocker)', definition: 'An alternative medication class that blocks angiotensin II effects without increasing bradykinin. Used when ACE inhibitors cause cough.' },
        { term: 'Hyperkalemia', definition: 'Dangerously high potassium levels. ACE inhibitors can raise potassium, requiring regular monitoring.' },
        { term: 'Glomeruli', definition: 'The tiny filtering units in the kidneys. Lisinopril reduces pressure inside these structures, protecting kidney function.' }
      ]
    },
    level3: {
      title: 'Lisinopril Pharmacology and Hypertension Management',
      titleEs: 'Farmacologia del Lisinopril y Manejo de la Hipertension',
      content: `
Lisinopril is a lysine analog of enalaprilat. Unlike most ACE inhibitors, lisinopril is not a prodrug
and does not require hepatic activation. This pharmacokinetic characteristic makes it suitable for
patients with hepatic impairment and provides predictable bioavailability.

**Mechanism of Action — Detailed**
Lisinopril competitively inhibits angiotensin-converting enzyme (ACE, also known as kininase II),
a zinc metallopeptidase:
1. **RAAS suppression**: Prevents conversion of angiotensin I to angiotensin II, reducing
   vasoconstriction, aldosterone secretion, sympathetic activation, and cardiac remodeling.
2. **Bradykinin potentiation**: ACE normally degrades bradykinin. Inhibition leads to increased
   bradykinin levels promoting vasodilation via nitric oxide and prostacyclin.
3. **Natriuretic peptide effects**: ACE also degrades natriuretic peptides; inhibition contributes
   to natriuresis and vasodilation.

**Pharmacokinetics**
- **Absorption**: Oral bioavailability approximately 25% (range 6-60%), not affected by food.
- **Onset**: 1 hour; peak effect at 6-8 hours.
- **Duration**: 24 hours, allowing once-daily dosing.
- **Distribution**: Does not bind to plasma proteins. Does not significantly cross the BBB.
- **Metabolism**: Not metabolized — unique among ACE inhibitors.
- **Elimination**: Excreted entirely unchanged in urine. Half-life approximately 12 hours.

**Clinical Evidence**
1. **Hypertension**: ACC/AHA guidelines support ACE inhibitors as first-line therapy, particularly
   in patients with diabetes, CKD, or heart failure.
2. **Heart Failure (HFrEF)**: The ATLAS trial showed high-dose lisinopril (32.5-35 mg) reduced
   hospitalizations by 12% compared to low-dose (2.5-5 mg).
3. **Post-MI**: The GISSI-3 trial showed reduced mortality when lisinopril was started within
   24 hours of acute MI.
4. **Diabetic Nephropathy**: ACE inhibitors reduce proteinuria and slow GFR decline independent
   of blood pressure effects.

**ACE Inhibitor Cough — Pathophysiology**
- Bradykinin accumulation in pulmonary tissue activates C-fiber afferents.
- Substance P accumulation sensitizes the cough reflex.
- Prostaglandin and thromboxane release in the airways.
- Genetic factors: ACE gene I/D polymorphism and bradykinin B2 receptor variants influence susceptibility.
- Incidence: 5-35% across populations, with higher rates in women, Asian, and Black patients.

**Hyperkalemia Management**
ACE inhibitors reduce aldosterone-mediated potassium excretion:
- Baseline potassium and renal function should be assessed before starting.
- Recheck within 1-2 weeks of initiation or dose increase.
- Risk factors: CKD, diabetes, concurrent potassium-sparing diuretics, NSAIDs, trimethoprim.
- Mild hyperkalemia (5.0-5.5 mEq/L): Dietary counseling, consider dose reduction.
- Moderate (5.5-6.0 mEq/L): Dose reduction or discontinuation, consider potassium binders.
- Severe (> 6.0 mEq/L): Discontinue; treat urgently.

**Racial and Ethnic Considerations**
- ACE inhibitors as monotherapy are less effective in Black patients due to lower circulating renin.
- Guidelines recommend CCBs or thiazide diuretics as preferred initial therapy in Black patients
  without CKD or diabetes.
- When ACE inhibitors are indicated (diabetes, CKD, HF), they should be used regardless of race,
  often in combination with a diuretic or CCB.
      `,
      keyTerms: [
        { term: 'Kininase II', definition: 'Another name for ACE. Highlights its dual role in angiotensin II production and bradykinin degradation.' },
        { term: 'Enalaprilat', definition: 'The active metabolite of enalapril and structural parent of lisinopril. Unlike enalapril, lisinopril does not require hepatic activation.' },
        { term: 'ATLAS Trial', definition: 'Assessment of Treatment with Lisinopril And Survival — demonstrated benefits of high-dose versus low-dose lisinopril in heart failure.' },
        { term: 'ACE I/D Polymorphism', definition: 'A genetic variant in the ACE gene (insertion/deletion) that influences ACE levels, drug response, and susceptibility to cough.' },
        { term: 'Patiromer', definition: 'A potassium binder used to manage hyperkalemia, allowing continued ACE inhibitor therapy in patients with elevated potassium.' },
        { term: 'GISSI-3', definition: 'Landmark trial demonstrating mortality benefit of early lisinopril after acute myocardial infarction.' }
      ]
    },
    level4: {
      title: 'Advanced Lisinopril Therapeutics and Clinical Optimization',
      titleEs: 'Terapeutica Avanzada de Lisinopril y Optimizacion Clinica',
      content: `
Lisinopril, as a non-prodrug ACE inhibitor with renal-exclusive elimination, occupies a unique
niche within the ACE inhibitor class. This section addresses advanced clinical decision-making,
complex patient scenarios, and evidence-based optimization strategies.

**Heart Failure Optimization**
In HFrEF management, ACE inhibitor dose titration is critical:
- Target dose: 20-40 mg daily (ATLAS trial used 32.5-35 mg).
- Many patients remain on subtherapeutic doses due to hypotension, renal decline, or hyperkalemia.
- Titration strategy: Increase by 5-10 mg every 2 weeks with monitoring.
- If target dose is not achievable, the highest tolerated dose still provides benefit.
- Transition to sacubitril/valsartan: For symptomatic HFrEF despite optimized ACE inhibitor.
  Requires 36-hour washout to prevent angioedema risk.

**Cardiorenal Syndrome Management**
- Accept creatinine rise up to 30% from baseline; if > 30%, reduce dose.
- Monitor potassium closely (weekly initially, then monthly).
- Triple RAAS blockade (ACE + ARB + aldosterone antagonist) significantly increases hyperkalemia
  and renal failure risk. Avoid ACE + ARB (ONTARGET showed no benefit with increased harm).

**Combination Therapy Considerations**
- ACE inhibitor + CCB (amlodipine): ACCOMPLISH trial showed superiority over ACE + HCTZ.
- ACE inhibitor + thiazide: Effective, but less cardiovascular protection than ACE + CCB.
- ACE inhibitor + aldosterone antagonist: Acceptable in HFrEF with careful monitoring.

**Perioperative Considerations**
- Withholding on morning of surgery is debated. Current consensus: consider holding for procedures
  with anticipated hemodynamic instability.
- Resume postoperatively when hemodynamically stable.

**Pregnancy and Reproductive Considerations**
- Absolutely contraindicated in pregnancy (2nd/3rd trimester teratogenicity: fetal renal toxicity,
  oligohydramnios, pulmonary hypoplasia, skull defects).
- Women of childbearing age should use effective contraception.
- Preferred alternatives in pregnancy: labetalol, nifedipine, methyldopa.

**Dual RAAS Blockade — Lessons Learned**
- ONTARGET: No additional CV benefit with ACE + ARB, more adverse events.
- VA NEPHRON-D: Terminated early for safety concerns.
- Current guidelines: Dual RAAS blockade not recommended.

**Special Population Prescribing**
- **Elderly**: Start low (2.5-5 mg), monitor renal function and orthostatic hypotension.
- **Black patients**: Less effective as monotherapy; combine with CCB or diuretic when indicated.
- **CKD**: Renoprotective benefit justifies use; adjust dose for eGFR < 30.
- **Post-transplant**: Monitor closely for interaction with immunosuppressants.
      `,
      clinicalNotes: [
        'Accept up to 30% creatinine rise from baseline after ACE inhibitor initiation — this reflects renoprotective reduction in intraglomerular pressure.',
        'The ONTARGET trial showed that dual RAAS blockade (ACE + ARB) increases harm without cardiovascular benefit.',
        'Target ACE inhibitor doses in heart failure are often not achieved in practice; systematic titration protocols improve outcomes.',
        'Sacubitril/valsartan transition requires strict 36-hour ACE inhibitor washout to prevent angioedema.',
        'Perioperative ACE inhibitor management should be individualized based on surgery type and hemodynamic risk.',
        'For women of reproductive age with hypertension, proactively discuss pregnancy planning and ACE inhibitor risks.'
      ],
      keyTerms: [
        { term: 'ONTARGET Trial', definition: 'Demonstrated that dual RAAS blockade (ACE + ARB) increases adverse events without additional cardiovascular benefit.' },
        { term: 'Sacubitril/Valsartan', definition: 'A neprilysin inhibitor/ARB combination for HFrEF requiring 36-hour washout from ACE inhibitors to prevent angioedema.' },
        { term: 'Cardiorenal Syndrome', definition: 'The bidirectional relationship where heart and kidney dysfunction each accelerate the other.' },
        { term: 'ACCOMPLISH Trial', definition: 'Demonstrated superiority of amlodipine/benazepril over benazepril/HCTZ for cardiovascular outcomes.' },
        { term: 'VA NEPHRON-D', definition: 'Trial terminated early for safety concerns with dual RAAS blockade in diabetic nephropathy.' },
        { term: 'Aldosterone Antagonist', definition: 'Spironolactone or eplerenone — acceptable combination with ACE inhibitors in heart failure with careful monitoring.' }
      ]
    },
    level5: {
      title: 'Lisinopril: Expert-Level Pharmacotherapeutic Analysis',
      titleEs: 'Lisinopril: Analisis Farmacoterapeutico de Nivel Experto',
      content: `
This expert review examines the molecular pharmacology, pharmacogenomics, and evolving evidence
base for lisinopril and ACE inhibition in contemporary cardiovascular medicine.

**Molecular Pharmacology of ACE Inhibition**
ACE (EC 3.4.15.1) is a zinc-dependent dipeptidyl carboxypeptidase with two catalytic domains:
- **C-domain**: Primarily responsible for angiotensin I to angiotensin II conversion. Lisinopril
  binds the C-domain with approximately 3-fold greater affinity than the N-domain.
- **N-domain**: Primarily responsible for bradykinin degradation and Ac-SDKP cleavage.
- Differential domain inhibition explains varying propensities for cough versus BP reduction.
- Tissue ACE (vascular endothelium, heart, kidneys, brain) is the primary therapeutic target.

**Pharmacogenomic Considerations**
1. **ACE I/D polymorphism**: The insertion allele is associated with lower ACE levels and
   potentially greater response. The deletion allele correlates with higher ACE levels and
   increased cardiovascular risk.
2. **AGTR1 (AT1 receptor)**: The 1166A>C polymorphism may modify cardiovascular outcomes.
3. **Bradykinin B2 receptor (BDKRB2)**: The -58T/C promoter polymorphism influences receptor
   density and may predict cough susceptibility.
4. **CYP considerations**: Unlike most ACE inhibitors, lisinopril is not a prodrug and does not
   involve CYP-mediated bioactivation, eliminating this pharmacogenomic variability.

**Tissue RAAS and Beyond**
Local tissue RAAS has transformed understanding of ACE inhibitor pharmacology:
- **Cardiac tissue ACE**: Involved in fibrosis, hypertrophy, and remodeling. ACE inhibition
  attenuates adverse post-MI remodeling.
- **Renal tissue ACE**: Intrarenal RAAS activation drives glomerular hypertension independently
  of systemic RAAS.
- **Adipose tissue ACE**: Contributes to insulin resistance and metabolic syndrome.
- **Brain ACE**: Central RAAS modulation affects sympathetic outflow. Lipophilic ACE inhibitors
  (ramipril, perindopril) cross the BBB more effectively than hydrophilic lisinopril.

**Advanced Heart Failure Considerations**
- **ACE escape**: Chronic ACE inhibition leads to incomplete angiotensin II suppression due to
  alternative pathways (chymase, cathepsin G). This provides rationale for sacubitril/valsartan.
- **Neurohormonal modulation**: ACE inhibitors reduce norepinephrine, endothelin-1, and
  vasopressin levels beyond hemodynamic effects.
- **Reverse remodeling**: Long-term ACE inhibition promotes favorable ventricular geometry changes.

**Emerging Research**
1. **COVID-19 and ACE2**: BRACE-CORONA and REPLACE COVID demonstrated no harm from continuing
   ACE inhibitors in COVID-19 patients.
2. **Domain-selective ACE inhibitors**: N-domain selective inhibitors may provide antifibrotic
   benefits without bradykinin-mediated side effects.
3. **ACE inhibitors and dementia**: Brain-penetrant ACE inhibitors may reduce dementia risk.
4. **Fetal programming**: Maternal ACE inhibitor exposure disrupts nephrogenesis during
   gestational weeks 20-36.

**Health Disparities and Access**
- Generic lisinopril ($4/month) is critical for addressing hypertension disparities.
- Despite lower monotherapy efficacy in Black patients, ACE inhibitors remain essential for
  specific indications (diabetic nephropathy, HFrEF).
- Combination therapy achieves equivalent BP reduction across racial groups.
      `,
      clinicalNotes: [
        'Differential ACE domain inhibition (N vs C-domain) explains varying side effect profiles and guides future drug development.',
        'ACE escape provides pharmacological rationale for transitioning HF patients to sacubitril/valsartan despite optimized ACE inhibitor therapy.',
        'The ACE I/D polymorphism influences drug response but routine pharmacogenomic testing is not yet standard of care.',
        'BRACE-CORONA and REPLACE COVID confirmed safety of continuing ACE inhibitors during COVID-19.',
        'Domain-selective ACE inhibitors represent a promising frontier that may dissociate benefits from bradykinin-mediated adverse events.',
        'Lisinopril low cost and once-daily dosing make it foundational for addressing hypertension disparities.'
      ],
      keyTerms: [
        { term: 'ACE N-domain/C-domain', definition: 'The two catalytic domains of ACE with differential substrate specificity for angiotensin I and bradykinin.' },
        { term: 'ACE Escape', definition: 'Incomplete angiotensin II suppression during chronic ACE inhibitor therapy due to alternative pathways (chymase, cathepsin G).' },
        { term: 'Ac-SDKP', definition: 'An antifibrotic peptide normally degraded by the N-domain of ACE, whose accumulation during ACE inhibition may contribute to cardioprotection.' },
        { term: 'BRACE-CORONA', definition: 'Randomized trial demonstrating no benefit from discontinuing ACE inhibitors/ARBs in hospitalized COVID-19 patients.' },
        { term: 'Chymase', definition: 'A serine protease converting angiotensin I to angiotensin II independently of ACE, contributing to ACE escape.' },
        { term: 'Domain-Selective ACE Inhibitor', definition: 'Next-generation ACE inhibitors targeting specific domains, potentially offering improved side effect profiles.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Lisinopril',
      url: 'https://medlineplus.gov/druginfo/meds/a692051.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Lisinopril Drug Label',
      url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/019777s064lbl.pdf',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'American Heart Association',
      title: 'High Blood Pressure Medications',
      url: 'https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/types-of-blood-pressure-medications',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-amlodipine', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-hypertension', type: 'topic', relationship: 'parent' }
  ],
  tags: ['lisinopril', 'ace-inhibitor', 'hypertension', 'blood-pressure', 'heart-failure', 'kidney-protection', 'raas'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
