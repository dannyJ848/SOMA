import { EducationalContent } from '../../types';

/**
 * Heart Failure Management
 *
 * Evidence-based management of heart failure including guideline-directed
 * medical therapy (GDMT), device therapy, advanced therapies, and
 * emerging treatment strategies.
 */
export const heartFailureManagement: EducationalContent = {
  id: 'heart-failure-management',
  type: 'concept',
  name: 'Heart Failure Management',
  nameEs: 'Tratamiento de la Insuficiencia Cardiaca',
  alternateNames: ['HF Treatment', 'Heart Failure Therapy', 'GDMT for Heart Failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure is treated with medications that help the heart pump better and remove extra fluid, along with lifestyle changes like eating less salt and staying active.',
      explanation:
        'Heart failure cannot be cured, but it can be managed so you feel better and live longer. Treatment involves:\n\n' +
        '**Medications:**\n' +
        '- **Water pills (diuretics)**: Help your body get rid of extra fluid that causes swelling and shortness of breath\n' +
        '- **ACE inhibitors or ARBs**: Help blood vessels relax so the heart does not have to work as hard\n' +
        '- **Beta-blockers**: Slow the heart rate and help the heart pump more efficiently\n' +
        '- **Other medications**: Your doctor may prescribe additional medicines based on your specific type of heart failure\n\n' +
        '**Lifestyle Changes:**\n' +
        '- Limit salt to less than 2 grams per day to reduce fluid buildup\n' +
        '- Weigh yourself every morning — call your doctor if you gain more than 2-3 pounds overnight or 5 pounds in a week\n' +
        '- Stay physically active as recommended by your doctor\n' +
        '- Limit alcohol and quit smoking\n' +
        '- Take all medications as prescribed — do not stop without talking to your doctor\n\n' +
        '**Devices:**\n' +
        'Some patients need special devices like pacemakers or defibrillators implanted under the skin to help the heart ' +
        'beat properly or to protect against dangerous heart rhythms.',
      keyTerms: [
        { term: 'Diuretic', definition: 'A medication that helps the body remove extra fluid through urination', pronunciation: 'dye-yoo-RET-ik' },
        { term: 'ACE inhibitor', definition: 'A medication that relaxes blood vessels and reduces the workload on the heart' },
        { term: 'Beta-blocker', definition: 'A medication that slows the heart rate and helps it pump more efficiently' },
      ],
      analogies: [
        'Diuretics are like opening a drain — they help remove the extra water that backs up when the pump (heart) is weak.',
        'ACE inhibitors are like widening the roads so traffic (blood) flows more easily, reducing pressure on the pump.',
      ],
      patientCounselingPoints: [
        'Take all your medications every day, even when you feel well.',
        'Weigh yourself each morning before eating and record it. Report sudden weight gain to your doctor.',
        'Limit salt and fluid intake as your doctor recommends.',
        'Stay active — even light exercise like walking helps strengthen the heart.',
      ],
    },

    2: {
      level: 2,
      summary: 'HFrEF management centers on four pillars of guideline-directed medical therapy (GDMT): ACEi/ARB/ARNI, beta-blockers, MRAs, and SGLT2 inhibitors, combined with diuretics for symptom relief.',
      explanation:
        '**Four Pillars of GDMT for HFrEF (EF <= 40%):**\n\n' +
        '1. **ACEi/ARB/ARNI**:\n' +
        '   - ACE inhibitors (e.g., lisinopril, enalapril): Block angiotensin-converting enzyme, reducing vasoconstriction and fluid retention\n' +
        '   - ARBs (e.g., losartan, valsartan): Used if ACEi not tolerated (cough)\n' +
        '   - ARNI (sacubitril/valsartan): Combines neprilysin inhibitor with ARB. Superior to enalapril in PARADIGM-HF trial. Now preferred first-line\n\n' +
        '2. **Beta-blockers**: Only three have proven mortality benefit in HFrEF:\n' +
        '   - Carvedilol, bisoprolol, or sustained-release metoprolol succinate\n' +
        '   - Start low and titrate up slowly\n' +
        '   - Do NOT start during acute decompensation\n\n' +
        '3. **Mineralocorticoid receptor antagonists (MRAs)**:\n' +
        '   - Spironolactone or eplerenone\n' +
        '   - RALES trial: spironolactone reduced mortality by 30% in severe HF\n' +
        '   - Monitor potassium and kidney function\n\n' +
        '4. **SGLT2 inhibitors**:\n' +
        '   - Dapagliflozin (DAPA-HF) and empagliflozin (EMPEROR-Reduced)\n' +
        '   - Benefit regardless of diabetes status\n' +
        '   - Newest addition to GDMT, recommended for all HFrEF patients\n\n' +
        '**Diuretics for Symptom Relief:**\n' +
        '- Loop diuretics (furosemide, bumetanide, torsemide) for fluid overload\n' +
        '- Adjust dose based on daily weight and symptoms\n' +
        '- Not proven to improve survival but essential for symptom management\n\n' +
        '**Additional Therapies:**\n' +
        '- Hydralazine/isosorbide dinitrate: Proven mortality benefit in Black patients (A-HeFT trial)\n' +
        '- Ivabradine: For HR >= 70 bpm despite maximized beta-blocker (SHIFT trial)\n' +
        '- Digoxin: Reduces hospitalizations but does not improve mortality\n\n' +
        '**HFpEF Management:**\n' +
        'Historically limited to symptom management and treating comorbidities. SGLT2 inhibitors (empagliflozin in EMPEROR-Preserved) are the first class to show benefit in HFpEF.',
      keyTerms: [
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan) — first-line therapy for HFrEF, superior to ACE inhibitors' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter 2 inhibitor — originally a diabetes drug, now proven to reduce HF hospitalizations and death in HFrEF and HFpEF' },
        { term: 'MRA', definition: 'Mineralocorticoid receptor antagonist (spironolactone/eplerenone) — blocks aldosterone to reduce fibrosis, fluid retention, and mortality' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy — the combination of evidence-based medications proven to improve outcomes in heart failure' },
        { term: 'Loop diuretic', definition: 'Medications (furosemide, bumetanide) that act on the loop of Henle in the kidney to remove excess fluid' },
      ],
      examples: [
        'A newly diagnosed HFrEF patient should ideally be started on all four pillars simultaneously or in rapid sequence, titrated to target doses.',
        'A patient on enalapril who is stable should be switched to sacubitril/valsartan (ARNI) for superior outcomes — allow 36-hour washout period.',
      ],
    },

    3: {
      level: 3,
      summary: 'Comprehensive HF management requires rapid GDMT optimization, device therapy (ICD/CRT), management of acute decompensation with IV diuretics and vasoactive agents, and referral criteria for advanced therapies.',
      explanation:
        '**GDMT Optimization Strategy:**\n' +
        'Current guidelines recommend initiating all four pillars simultaneously or in rapid sequence rather than sequential titration. ' +
        'Target doses have proven mortality benefit; underdosing is common and should be actively addressed.\n\n' +
        '**Target Doses:**\n' +
        '- Sacubitril/valsartan: 97/103 mg BID\n' +
        '- Carvedilol: 25 mg BID (50 mg BID if >85 kg)\n' +
        '- Spironolactone: 25-50 mg daily\n' +
        '- Dapagliflozin/empagliflozin: 10 mg daily (single dose, no titration)\n\n' +
        '**Device Therapy:**\n' +
        '- **ICD**: Primary prevention if LVEF <= 35% despite >= 3 months of optimal GDMT. Must be > 40 days post-MI or > 90 days post-revascularization\n' +
        '- **CRT**: LVEF <= 35%, LBBB with QRS >= 150 ms, NYHA II-IV on GDMT. CRT-D preferred. Non-LBBB with QRS >= 150 ms: weaker recommendation\n\n' +
        '**Acute Decompensated Heart Failure (ADHF):**\n' +
        '- **IV diuretics**: IV furosemide 1-2.5x home oral dose. Continuous infusion vs. bolus (DOSE trial: no difference in efficacy, higher dose strategy superior). ' +
        'Add metolazone or chlorothiazide for diuretic resistance (sequential nephron blockade).\n' +
        '- **Vasodilators**: IV nitroglycerin or nitroprusside for elevated afterload with adequate BP\n' +
        '- **Inotropes**: Dobutamine (beta-1 agonist) or milrinone (PDE3 inhibitor) for cardiogenic shock. Associated with arrhythmias; use as bridge to recovery/decision/device\n\n' +
        '**Special Populations:**\n' +
        '- Iron deficiency (ferritin < 100 or 100-299 with TSAT < 20%): IV iron (ferric carboxymaltose) improves functional capacity and reduces HF hospitalizations (AFFIRM-AHF)\n' +
        '- Hyperkalemia management: Patiromer or sodium zirconium cyclosilicate enable continuation of RAASi and MRA\n' +
        '- Cardiac rehabilitation: Proven benefit in HF (HF-ACTION trial); underutilized\n\n' +
        '**Referral to Advanced HF Center:**\n' +
        '- >= 2 HF hospitalizations in past year\n' +
        '- Need for continuous inotropes\n' +
        '- Refractory symptoms despite optimal GDMT\n' +
        '- Consideration for LVAD or heart transplant\n' +
        '- INTERMACS profiles 1-4',
      keyTerms: [
        { term: 'Sequential nephron blockade', definition: 'Combining diuretics acting at different nephron segments (loop + thiazide) to overcome diuretic resistance' },
        { term: 'Cardiac resynchronization therapy (CRT)', definition: 'Biventricular pacing to coordinate ventricular contraction in patients with LBBB and reduced EF' },
        { term: 'Inotrope', definition: 'Medication that increases cardiac contractility (dobutamine, milrinone); used as bridge therapy in cardiogenic shock' },
        { term: 'Diuretic resistance', definition: 'Failure to achieve adequate decongestion despite escalating diuretic doses, often requiring combination diuretic strategies' },
        { term: 'IV iron', definition: 'Intravenous iron replacement (ferric carboxymaltose) for iron-deficient HF patients, improving symptoms and reducing hospitalizations' },
        { term: 'LVAD', definition: 'Left ventricular assist device — a mechanical pump implanted to support the failing left ventricle as bridge to transplant or destination therapy' },
      ],
      examples: [
        'A patient admitted for ADHF on furosemide 40 mg PO at home should receive IV furosemide 40-80 mg. If urine output < 100 mL/hr after 2 hours, double the dose.',
        'A 55-year-old with LVEF 25%, LBBB QRS 160 ms on maximal GDMT for 3 months should receive CRT-D implantation.',
      ],
      clinicalNotes: 'The STRONG-HF trial demonstrated that rapid uptitration of GDMT during and immediately after hospitalization (within 2 weeks) with close follow-up significantly reduced 180-day mortality and HF rehospitalization compared to usual care.',
    },

    4: {
      level: 4,
      summary: 'Advanced HF management encompasses mechanical circulatory support (LVAD), heart transplantation, palliative care, and management of cardiogenic shock with temporary MCS devices.',
      explanation:
        '**Left Ventricular Assist Devices (LVADs):**\n' +
        '- **Current generation**: Continuous-flow centrifugal pumps (HeartMate 3). Fully magnetically levitated rotor reduces thrombosis and bleeding.\n' +
        '- **Indications**: Bridge to transplant (BTT), bridge to candidacy (BTC), or destination therapy (DT)\n' +
        '- **MOMENTUM 3 trial**: HeartMate 3 superior to HeartMate II (axial flow) with 2-year survival ~79% and lower pump thrombosis\n' +
        '- **Complications**: Driveline infection (~15-20%), GI bleeding (angiodysplasia from loss of pulsatility and acquired vWF deficiency), ' +
        'right heart failure (PAPi < 1.85 and CVP/PCWP > 0.63 predict risk), stroke (~10% at 2 years), device malfunction\n' +
        '- **LVAD speed optimization**: Echocardiographic ramp study — assess interventricular septum position, aortic valve opening, and RV function\n\n' +
        '**Heart Transplantation:**\n' +
        '- Median survival: ~12-14 years\n' +
        '- **Indications**: End-stage HF refractory to medical and device therapy, INTERMACS profiles 1-4\n' +
        '- **Contraindications**: Irreversible pulmonary hypertension (PVR > 5 Wood units not responsive to vasodilators), active malignancy, ' +
        'active infection, severe peripheral vascular disease, psychosocial barriers\n' +
        '- **Allocation**: United Network for Organ Sharing (UNOS) system using 6 status tiers based on medical urgency and MCS status\n' +
        '- **Immunosuppression**: Triple therapy — calcineurin inhibitor (tacrolimus), antimetabolite (mycophenolate), and corticosteroids (tapered)\n' +
        '- **Rejection surveillance**: Endomyocardial biopsy (gold standard) and cell-free donor-derived DNA (dd-cfDNA, AlloSure) for non-invasive monitoring\n\n' +
        '**Temporary Mechanical Circulatory Support (MCS):**\n' +
        '- **IABP**: Counterpulsation augments diastolic coronary perfusion and reduces afterload. Modest hemodynamic support (~0.5 L/min)\n' +
        '- **Impella**: Axial flow pump across aortic valve. CP provides ~3.5 L/min, 5.0/5.5 provides ~5 L/min. Placed percutaneously or surgically\n' +
        '- **TandemHeart**: Percutaneous LA-to-femoral artery bypass; up to 5 L/min. Requires transseptal puncture\n' +
        '- **VA-ECMO**: Full cardiopulmonary bypass; up to 7 L/min. Increases LV afterload — may require LV venting (Impella + ECMO = "ECPella")\n' +
        '- **Device selection**: Based on hemodynamic goals, anatomy, expected duration, and team expertise\n\n' +
        '**Palliative Care in HF:**\n' +
        '- Should be integrated early, not reserved for end-of-life\n' +
        '- ICD deactivation discussions for patients approaching end of life\n' +
        '- Hospice criteria: NYHA IV, recurrent hospitalizations, declining function on maximal therapy\n' +
        '- Symptom management: Low-dose opioids for refractory dyspnea are appropriate and do not hasten death at low doses',
      keyTerms: [
        { term: 'HeartMate 3', definition: 'Current generation fully magnetically levitated centrifugal-flow LVAD with reduced thrombosis and improved survival compared to prior designs' },
        { term: 'Destination therapy', definition: 'Permanent LVAD implantation for patients who are not transplant candidates, as long-term treatment rather than a bridge' },
        { term: 'VA-ECMO', definition: 'Veno-arterial extracorporeal membrane oxygenation providing full cardiopulmonary support in refractory cardiogenic shock' },
        { term: 'Impella', definition: 'Catheter-based axial flow pump placed across the aortic valve providing up to 5.5 L/min of cardiac output' },
        { term: 'Cell-free donor-derived DNA (dd-cfDNA)', definition: 'Non-invasive blood test measuring donor DNA fragments for transplant rejection monitoring' },
      ],
      clinicalNotes: 'The DanGer Shock trial (2024) was the first randomized trial showing mortality benefit with Impella CP in AMI cardiogenic shock when used in high-volume experienced centers. VA-ECMO without LV venting increases LV afterload and wall stress — ECPella configuration (Impella + ECMO) addresses this. Early palliative care integration improves quality of life and may reduce unnecessary interventions.',
    },

    5: {
      level: 5,
      summary: 'Cutting-edge HF management research includes gene therapy, xenotransplantation, bioengineered hearts, novel pharmacotherapies targeting myocardial energetics and fibrosis, and AI-optimized precision treatment.',
      explanation:
        '**Gene Therapy for HF:**\n' +
        '- **SERCA2a gene transfer**: AAV1/SERCA2a (CUPID 2) failed to meet endpoints; ongoing optimization of vector design and dosing\n' +
        '- **S100A1 gene therapy**: Calcium-binding protein enhancing excitation-contraction coupling; promising preclinical results\n' +
        '- **Adenylyl cyclase 6 (AC6)**: Enhances cAMP signaling in cardiomyocytes; phase 2 trial showed improved EF\n' +
        '- **CRISPR-based approaches**: Correction of specific cardiomyopathy-causing mutations (PLN R14del, LMNA) in iPSC-derived cardiomyocytes\n\n' +
        '**Xenotransplantation:**\n' +
        '- Genetically modified pig hearts (10-gene edits: knockout of pig antigens + insertion of human transgenes) transplanted into humans.\n' +
        '- First human cases (2022-2023) demonstrated organ function for weeks to months before immune-mediated failure.\n' +
        '- Key challenges: porcine cytomegalovirus screening, hyperacute/acute rejection, long-term xenograft vasculopathy\n\n' +
        '**Bioengineered Hearts:**\n' +
        '- Decellularized scaffolds recellularized with patient-derived iPSC cardiomyocytes — demonstrated contractile function in vitro\n' +
        '- 3D bioprinting of cardiac patches with vascularization for myocardial repair post-MI\n' +
        '- Organoid and heart-on-chip platforms for drug screening and personalized therapy testing\n\n' +
        '**Novel Pharmacotherapy:**\n' +
        '- **Cardiac myosin activators**: Omecamtiv mecarbil increases systolic ejection time without increasing intracellular calcium. ' +
        'GALACTIC-HF showed modest reduction in HF events (HR 0.92). May benefit patients with more severe systolic dysfunction.\n' +
        '- **Soluble guanylate cyclase (sGC) stimulators**: Vericiguat stimulates cGMP pathway independent of NO. VICTORIA trial showed modest benefit in recently decompensated HFrEF.\n' +
        '- **Anti-fibrotic agents**: Pirfenidone and nintedanib being explored for cardiac fibrosis. Anti-galectin-3 antibodies in development.\n' +
        '- **Mitochondrial-targeted therapies**: Elamipretide (Bendavia) targets cardiolipin in inner mitochondrial membrane to improve energetics; mixed trial results.\n' +
        '- **GLP-1 receptor agonists**: STEP-HFpEF demonstrated semaglutide improved symptoms, physical function, and body weight in obese HFpEF patients.\n\n' +
        '**AI-Optimized Treatment:**\n' +
        '- Reinforcement learning algorithms for individualized GDMT optimization based on patient-specific response patterns\n' +
        '- Digital twin simulation of hemodynamic response to therapy changes before implementation\n' +
        '- NLP-based extraction of social determinants of health from EHR notes for comprehensive risk assessment\n' +
        '- Remote monitoring with AI-powered alert systems (HeartLogic, CardioMEMS) for early decompensation detection\n\n' +
        '**Regenerative Medicine:**\n' +
        '- Stem cell therapy: Meta-analyses show modest EF improvement (~3-5%) with bone marrow or cardiac progenitor cells; durability debated\n' +
        '- Exosome/extracellular vesicle therapy: Paracrine factors from mesenchymal stem cells without risks of cell transplantation\n' +
        '- Direct cardiac reprogramming: Conversion of fibroblasts to cardiomyocytes using transcription factors (GMT cocktail) — demonstrated in animal models',
      keyTerms: [
        { term: 'Omecamtiv mecarbil', definition: 'Cardiac myosin activator that increases contractility by prolonging systolic ejection time without raising intracellular calcium' },
        { term: 'Vericiguat', definition: 'Soluble guanylate cyclase stimulator enhancing the NO-sGC-cGMP pathway for recently decompensated HFrEF' },
        { term: 'Xenotransplantation', definition: 'Transplantation of genetically modified pig organs into humans, an emerging strategy to address organ shortage' },
        { term: 'Direct cardiac reprogramming', definition: 'Conversion of cardiac fibroblasts to functional cardiomyocytes using transcription factors (Gata4, Mef2c, Tbx5)' },
        { term: 'CardioMEMS', definition: 'Implantable wireless pulmonary artery pressure sensor enabling remote hemodynamic monitoring and proactive HF management' },
      ],
      clinicalNotes: 'STEP-HFpEF has opened a new therapeutic paradigm linking obesity treatment to HFpEF management. Xenotransplantation remains experimental but advances rapidly — regulatory frameworks are being developed. AI-driven GDMT optimization could address the persistent underuse and underdosing of evidence-based therapies. The convergence of gene therapy, bioengineering, and precision pharmacology promises to transform HF from a progressively terminal disease to a treatable condition.',
    },
  },

  media: [
    { id: 'gdmt-pillars', type: 'diagram', filename: 'gdmt-four-pillars.svg', title: 'Four Pillars of GDMT', description: 'Visual summary of guideline-directed medical therapy for HFrEF' },
    { id: 'adhf-algorithm', type: 'diagram', filename: 'adhf-management-algorithm.svg', title: 'Acute Decompensated HF Management', description: 'Algorithm for IV diuretic therapy and escalation in ADHF' },
  ],
  citations: [
    { id: 'heidenreich-2022-mgmt', type: 'article', title: '2022 AHA/ACC/HFSA Guideline for HF Management', authors: ['Heidenreich, P.A.'], source: 'Circulation' },
    { id: 'mcmurray-paradigm', type: 'article', title: 'PARADIGM-HF: Sacubitril/Valsartan in HFrEF', authors: ['McMurray, J.J.V.'], source: 'NEJM' },
  ],
  crossReferences: [
    { targetId: 'heart-failure-classification', targetType: 'concept', relationship: 'related', label: 'Heart Failure Classification' },
    { targetId: 'cardiac-arrhythmias', targetType: 'concept', relationship: 'related', label: 'Cardiac Arrhythmias' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'see-also', label: 'Echocardiography' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['heart-failure', 'pharmacology', 'cardiology', 'therapeutics'],
    keywords: ['GDMT', 'ARNI', 'SGLT2 inhibitor', 'LVAD', 'heart transplant', 'diuretics', 'cardiogenic shock'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
