import { EducationalContent } from '../../types';

export const amlodipineGuideContent: EducationalContent = {
  id: 'topic-medication-amlodipine',
  type: 'topic',
  name: 'Amlodipine Guide',
  nameEs: 'Guia de Amlodipino',
  levels: {
    level1: {
      title: 'Amlodipine: Helping Control Your Blood Pressure',
      titleEs: 'Amlodipino: Ayudando a Controlar Su Presion Arterial',
      content: `
Amlodipine is a medicine that helps lower high blood pressure. It works by relaxing your blood
vessels so blood can flow more easily. This reduces the strain on your heart.

**How to Take Amlodipine**
- Take one tablet by mouth every day.
- You can take it with or without food.
- Take it at the same time each day to help you remember.
- If you miss a dose, take it as soon as you remember unless it is almost time for your next dose.
- Do not stop taking amlodipine without talking to your doctor.

**What Amlodipine Does**
- It relaxes and widens your blood vessels.
- It lowers the pressure in your blood vessels.
- It can also help with chest pain (angina) by improving blood flow to your heart.

**Common Side Effects**
- Swelling in your ankles or feet — this is the most common side effect.
- Feeling dizzy or lightheaded.
- Feeling flushed or warm in your face.
- Headache.
- Feeling tired.

**Important Warnings**
- Tell your doctor if ankle swelling becomes very uncomfortable. They may adjust your dose.
- Be careful when standing up — you might feel dizzy at first.
- Avoid grapefruit and grapefruit juice, as they can affect how this medicine works.
- Tell your doctor if you are pregnant or plan to become pregnant.

**Tips for Success**
- Check your blood pressure regularly and write down the numbers.
- Eat less salt to help the medicine work better.
- Stay active — even walking 30 minutes a day helps.
- Amlodipine may take 1-2 weeks to reach its full effect.
      `,
      patientCounselingPoints: [
        'Ankle swelling is common and does not mean the medicine is harming you — it is caused by blood vessel relaxation.',
        'Avoid grapefruit and grapefruit juice while taking amlodipine.',
        'Take your medicine every day even if you feel fine — high blood pressure usually has no symptoms.',
        'Stand up slowly to avoid dizziness, especially when you first start the medicine.',
        'Tell your doctor about all other medicines you take, including supplements.',
        'It takes 1-2 weeks for amlodipine to reach full effect — be patient.'
      ],
      keyTerms: [
        { term: 'Blood Pressure', definition: 'The force of blood pushing against your blood vessel walls. High blood pressure makes your heart work harder.' },
        { term: 'Calcium Channel Blocker', definition: 'The type of medicine amlodipine is. It blocks calcium from entering blood vessel walls, helping them relax.' },
        { term: 'Angina', definition: 'Chest pain caused by reduced blood flow to the heart. Amlodipine can help treat this condition.' },
        { term: 'Edema', definition: 'Swelling caused by fluid buildup, usually in the ankles and feet. A common side effect of amlodipine.' },
        { term: 'Vasodilation', definition: 'The widening of blood vessels. Amlodipine causes this, which lowers blood pressure.' }
      ]
    },
    level2: {
      title: 'Understanding Amlodipine: A Calcium Channel Blocker',
      titleEs: 'Entendiendo el Amlodipino: Un Bloqueador de Canales de Calcio',
      content: `
Amlodipine belongs to a class of medications called calcium channel blockers (CCBs), specifically
the dihydropyridine subtype. It is one of the most commonly prescribed blood pressure medications.

**How Amlodipine Works**
Calcium plays a key role in muscle contraction. In blood vessel walls, calcium flows into muscle cells
through calcium channels. When calcium enters, the muscle contracts and the vessel narrows.

Amlodipine blocks these calcium channels. With less calcium entering the muscle cells, blood vessels
stay relaxed and open, and blood pressure decreases. It primarily affects blood vessels rather than
the heart muscle.

**Dosing Information**
- Starting dose: Usually 5 mg once daily.
- Maximum dose: 10 mg once daily.
- Elderly or liver problems: Start at 2.5 mg daily.
- Takes 7-14 days to reach maximum effect.

**Ankle Swelling (Peripheral Edema)**
The most notable side effect occurs in 2-15% of patients:
- Caused by precapillary arteriolar dilation without matching venous dilation.
- Not related to heart failure or kidney problems.
- Strategies: Elevate feet, reduce dose, add an ACE inhibitor/ARB, compression stockings.

**Advantages of Amlodipine**
- Long half-life (30-50 hours) provides consistent 24-hour blood pressure control.
- Effective across all racial and ethnic groups.
- Safe in kidney disease — no dose adjustment needed.
- Does not affect blood sugar or cholesterol levels.
- Can be combined with many other blood pressure medications.

**Drug Interactions**
- Grapefruit juice: Can increase amlodipine levels in the blood.
- Simvastatin: Should not exceed 20 mg when used with amlodipine.
- Cyclosporine: Amlodipine may increase cyclosporine levels.

**When Amlodipine Is a Good Choice**
- Black or African American patients (CCBs are particularly effective).
- Both high blood pressure and angina.
- Cannot tolerate ACE inhibitors.
- Kidney disease (no dose adjustment needed).
- Need for once-daily medication with consistent control.
      `,
      patientCounselingPoints: [
        'Ankle swelling from amlodipine is not dangerous but can be uncomfortable — elevating your feet can help.',
        'Amlodipine takes 1-2 weeks to reach full effect. Do not get discouraged by initial readings.',
        'If you take simvastatin, make sure your doctor knows — the dose may need adjustment.',
        'Grapefruit juice can increase amlodipine levels. Avoid it or discuss with your doctor.',
        'Amlodipine is effective for all racial and ethnic groups.',
        'Adding an ACE inhibitor can reduce ankle swelling while improving blood pressure control.'
      ],
      keyTerms: [
        { term: 'Dihydropyridine', definition: 'The subclass of CCBs that amlodipine belongs to. These primarily relax blood vessels rather than slowing the heart.' },
        { term: 'Calcium Channel', definition: 'An opening in muscle cells allowing calcium to flow in, causing contraction. Amlodipine blocks these channels.' },
        { term: 'Peripheral Edema', definition: 'Swelling in extremities caused by fluid leakage from blood vessels. Common with amlodipine due to arterial dilation.' },
        { term: 'Half-Life', definition: 'Time for half of the drug to leave your body. Amlodipine has a long half-life (30-50 hours) allowing once-daily dosing.' },
        { term: 'Precapillary Dilation', definition: 'Relaxation of small arteries. This is how amlodipine lowers blood pressure but also causes ankle swelling.' },
        { term: 'Angina', definition: 'Chest pain from insufficient blood flow to the heart. Amlodipine improves coronary blood flow.' }
      ]
    },
    level3: {
      title: 'Amlodipine Pharmacology and Cardiovascular Applications',
      titleEs: 'Farmacologia del Amlodipino y Aplicaciones Cardiovasculares',
      content: `
Amlodipine besylate is a third-generation dihydropyridine CCB distinguished by its prolonged
duration, high vascular selectivity, and extensive clinical evidence base.

**Mechanism of Action — Detailed**
Amlodipine selectively inhibits L-type voltage-dependent calcium channels in vascular smooth muscle:
- Binds the alpha-1 subunit in a use- and voltage-dependent manner.
- Preferentially binds to channels in the inactivated state.
- **Vascular selectivity**: 80:1 ratio of vascular to cardiac smooth muscle inhibition.
- Reduces peripheral vascular resistance by 15-25% without significant reflex tachycardia.
- Minimal effect on cardiac conduction (unlike verapamil, diltiazem).

**Pharmacokinetics**
- **Bioavailability**: 64-90%; not significantly affected by food.
- **Peak plasma**: 6-12 hours (gradual absorption contributes to smooth onset).
- **Protein binding**: 97.5%. Volume of distribution: ~21 L/kg.
- **Metabolism**: Hepatic via CYP3A4 to inactive metabolites.
- **Half-life**: 30-50 hours. Steady state in 7-8 days. Extends to 56-65 hours in elderly.

**Clinical Evidence**
1. **ALLHAT**: Amlodipine equivalent to chlorthalidone and lisinopril for coronary events
   in over 33,000 high-risk hypertensive patients.
2. **ASCOT-BPLA**: Amlodipine-based regimen superior to atenolol-based for stroke, CV events,
   and all-cause mortality.
3. **CAMELOT**: Reduced CV events and slowed coronary atherosclerosis progression.
4. **VALUE**: Similar cardiac outcomes to valsartan; superior early BP reduction.

**Peripheral Edema — Pathophysiology**
- DHP-CCBs preferentially dilate precapillary arterioles while postcapillary venules remain unchanged.
- Imbalance increases intracapillary hydrostatic pressure (Starling forces).
- Dose-dependent: ~2% at 2.5 mg, ~5% at 5 mg, ~10% at 10 mg.
- Mitigation: Adding ACE/ARB restores Starling equilibrium. ACCOMPLISH trial demonstrated
  significantly less edema with combination.

**Coronary Vasospasm**
Amlodipine is effective for Prinzmetal (variant) angina:
- Directly relaxes coronary artery smooth muscle.
- Long-acting formulation provides sustained anti-spasm protection.

**Metabolic Neutrality**
- No adverse effects on glucose or insulin sensitivity.
- Does not worsen lipid profiles.
- Does not increase diabetes risk (ASCOT showed lower new-onset diabetes vs. atenolol).
- Appropriate first-line choice in metabolic syndrome.
      `,
      keyTerms: [
        { term: 'L-type Calcium Channel', definition: 'Long-lasting voltage-dependent calcium channel in vascular smooth muscle. The primary target of amlodipine.' },
        { term: 'Vascular Selectivity', definition: 'Amlodipine 80:1 preference for vascular over cardiac smooth muscle, minimizing cardiac depression.' },
        { term: 'ALLHAT', definition: 'Largest antihypertensive trial (33,000+ patients) showing amlodipine equivalence to thiazides and ACE inhibitors.' },
        { term: 'Starling Forces', definition: 'Balance of hydrostatic and oncotic pressures across capillary walls. Amlodipine disrupts this balance, causing edema.' },
        { term: 'ASCOT-BPLA', definition: 'Trial demonstrating superiority of amlodipine-based regimen over atenolol-based for cardiovascular outcomes.' },
        { term: 'Prinzmetal Angina', definition: 'Variant angina caused by coronary artery spasm. Amlodipine is effective due to direct coronary smooth muscle relaxation.' }
      ]
    },
    level4: {
      title: 'Advanced Amlodipine Therapeutics and Combination Strategies',
      titleEs: 'Terapeutica Avanzada de Amlodipino y Estrategias de Combinacion',
      content: `
Amlodipine's unique profile — long half-life, high vascular selectivity, metabolic neutrality,
and race-independent efficacy — positions it as a cornerstone of modern hypertension management.

**Optimizing Combination Therapy**
1. **Amlodipine + ACE Inhibitor/ARB** (Recommended first-line combination):
   - ACCOMPLISH trial: Amlodipine/benazepril superior to benazepril/HCTZ (20% RRR for CV events).
   - Reduces CCB-induced edema by 50-70%.
   - Fixed-dose combinations available.
2. **Amlodipine + Thiazide**: Effective but less metabolically favorable.
3. **Triple Therapy**: Amlodipine + ACE/ARB + diuretic for resistant hypertension.

**Resistant Hypertension**
- Verify true resistance (exclude white coat effect, non-adherence).
- Optimal: CCB + RAAS inhibitor + diuretic.
- Fourth-line: Spironolactone 25-50 mg (PATHWAY-2 trial evidence).

**Aortic Stenosis Considerations**
- Historically contraindicated, but amlodipine's gradual onset and lack of negative inotropy
  provide better hemodynamic tolerance than other CCBs.
- Observational data suggest safety in mild-moderate AS.
- Avoid in severe, symptomatic AS with hemodynamic compromise.

**Renal Considerations**
- No dose adjustment for any degree of renal impairment.
- Not removed by hemodialysis (97.5% protein-bound).
- In transplant recipients: Monitor cyclosporine and tacrolimus (CYP3A4 interaction).

**Special Populations**
- **Elderly**: Start at 2.5 mg; effective and well-tolerated.
- **Black patients**: Particularly effective as monotherapy.
- **Diabetic patients**: Metabolically neutral. Safe first-line or add-on agent.
- **Chronic liver disease**: Start at 2.5 mg; half-life significantly prolonged.
- **Pregnancy**: FDA Category C; nifedipine preferred DHP-CCB in pregnancy.
      `,
      clinicalNotes: [
        'ACCOMPLISH established CCB + RAAS inhibitor as superior to RAAS inhibitor + diuretic for cardiovascular outcomes.',
        'Adding ACE inhibitor or ARB to amlodipine reduces peripheral edema by 50-70% through postcapillary venodilation.',
        'Amlodipine is safe in all degrees of renal impairment without dose adjustment.',
        'For resistant hypertension, spironolactone is the preferred fourth agent (PATHWAY-2 evidence).',
        'The long half-life (30-50 hours) provides a forgiving profile for patients with occasional missed doses.',
        'In elderly patients (>80 years), start at 2.5 mg and titrate carefully due to extended half-life.'
      ],
      keyTerms: [
        { term: 'ACCOMPLISH Trial', definition: 'Demonstrated superiority of amlodipine/benazepril over benazepril/HCTZ for cardiovascular outcomes.' },
        { term: 'PATHWAY-2', definition: 'Established spironolactone as optimal fourth-line agent for resistant hypertension.' },
        { term: 'Resistant Hypertension', definition: 'BP above target despite optimal doses of three antihypertensives including a diuretic.' },
        { term: 'Starling Equilibrium', definition: 'Balance of transcapillary fluid pressures. ACE inhibitors restore this when disrupted by CCBs.' },
        { term: 'CYP3A4', definition: 'Liver enzyme responsible for amlodipine metabolism. Inhibitors increase amlodipine levels.' },
        { term: 'Fixed-Dose Combination', definition: 'Single-pill combinations improving adherence and often reducing side effects.' }
      ]
    },
    level5: {
      title: 'Amlodipine: Expert Pharmacotherapeutic and Translational Review',
      titleEs: 'Amlodipino: Revision Farmacoterapeutica y Traslacional Experta',
      content: `
This expert analysis examines amlodipine through molecular pharmacology, comparative effectiveness
research, pharmacogenomics, and emerging therapeutic paradigms.

**Molecular Pharmacology: Channel-State Selectivity**
Amlodipine's unique profile stems from its interaction kinetics with L-type calcium channels:
- Binds the dihydropyridine receptor site on the alpha-1C subunit (Cav1.2).
- Preferential binding to the inactivated state (voltage-dependent).
- The ionized form (pKa 8.6) creates a membrane depot providing sustained drug delivery.
- This "membrane approach" theory explains gradual onset, sustained duration, and minimal
  reflex tachycardia.

**Chirality and Enantiomeric Pharmacology**
- S-amlodipine (levamlodipine): The active enantiomer, 1000-fold more potent at L-type channels.
- R-amlodipine: Essentially inactive but may contribute to edema through non-specific mechanisms.
- S-amlodipine formulations may provide equivalent efficacy with potentially reduced edema.

**Pleiotropic Effects**
1. **Anti-atherosclerotic**: CAMELOT and PREVENT trials showed reduced intima-media thickness.
   Antioxidant activity of the dihydropyridine ring structure.
2. **Anti-inflammatory**: Reduces CRP, IL-6, and MMP-9 in some studies.
3. **Nitric oxide enhancement**: Increases eNOS expression and activity.
4. **Anti-proliferative**: Inhibits vascular smooth muscle cell proliferation.

**Pharmacogenomics**
- **CYP3A4/CYP3A5**: Polymorphisms affect metabolism. CYP3A5 expressors may have lower levels.
- **CACNA1C**: L-type channel gene variants may influence drug sensitivity.
- **MDR1 (ABCB1)**: P-glycoprotein polymorphisms affect absorption and distribution.
- **GWAS**: Several loci associated with CCB response identified but with modest effect sizes.

**Network Meta-analyses**
- CCBs demonstrate superior stroke prevention compared to other antihypertensive classes.
- ALLHAT heart failure concern may reflect diuretic withdrawal bias rather than CCB harm.
- Equivalent to ACE inhibitors for coronary events; superior for stroke prevention.

**Emerging Considerations**
1. **Cancer risk**: Inconsistent observational data on CCBs and breast cancer. RCT data (ALLHAT,
   ASCOT) do not support this association.
2. **Cognitive effects**: Limited CNS penetration; SPRINT MIND did not show significant benefits.
3. **Global health**: Chemical stability in tropical climates and low cost make amlodipine a
   WHO essential medicine for global hypertension management.
      `,
      clinicalNotes: [
        'The membrane approach theory explains amlodipine unique pharmacodynamics: protonated drug creates a sustained-release depot.',
        'S-amlodipine is the active enantiomer with 1000-fold greater potency; R-amlodipine may contribute to edema without benefit.',
        'Anti-atherosclerotic effects (CAMELOT, PREVENT) are mediated through antioxidant properties and eNOS upregulation.',
        'CYP3A5 expressors may have lower amlodipine levels, though established population-level efficacy is not negated.',
        'Cancer risk signals from observational studies are not supported by randomized trial data.',
        'Amlodipine WHO essential medicine status and tropical stability make it critical for global hypertension control.'
      ],
      keyTerms: [
        { term: 'Membrane Approach Theory', definition: 'Amlodipine protonated form creates a membrane depot providing sustained drug delivery, explaining long duration of action.' },
        { term: 'S-Amlodipine (Levamlodipine)', definition: 'The active enantiomer, 1000-fold more potent at L-type calcium channels than R-amlodipine.' },
        { term: 'Cav1.2 (CACNA1C)', definition: 'Gene encoding the alpha-1C subunit of the L-type calcium channel — the molecular target of amlodipine.' },
        { term: 'eNOS Upregulation', definition: 'Amlodipine increases endothelial nitric oxide synthase expression, contributing to vasodilation beyond calcium channel blockade.' },
        { term: 'CAMELOT Trial', definition: 'Demonstrated amlodipine anti-atherosclerotic effects in coronary disease patients.' },
        { term: 'Blood Pressure Lowering Trialists Collaboration', definition: 'Meta-analysis consortium confirming CCB superior stroke prevention versus other antihypertensive classes.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Amlodipine',
      url: 'https://medlineplus.gov/druginfo/meds/a692044.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Norvasc (Amlodipine Besylate) Drug Label',
      url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-lisinopril', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-hypertension', type: 'topic', relationship: 'parent' }
  ],
  tags: ['amlodipine', 'calcium-channel-blocker', 'hypertension', 'blood-pressure', 'angina', 'dihydropyridine', 'antihypertensive'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
