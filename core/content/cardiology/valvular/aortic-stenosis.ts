import { EducationalContent } from '../../types';

/**
 * Aortic Stenosis
 *
 * Comprehensive educational content on aortic stenosis including
 * etiology, pathophysiology, diagnosis, grading, and management
 * from medical therapy to surgical and transcatheter intervention.
 */
export const aorticStenosis: EducationalContent = {
  id: 'aortic-stenosis',
  type: 'condition',
  name: 'Aortic Stenosis',
  nameEs: 'Estenosis Aortica',
  alternateNames: ['AS', 'Aortic Valve Stenosis', 'Calcific Aortic Stenosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Aortic stenosis is a condition where the main valve that lets blood flow from the heart to the body becomes stiff and narrow, making the heart work harder to pump blood.',
      explanation:
        'The aortic valve is the door between the main pumping chamber of the heart (left ventricle) and the large blood vessel (aorta) ' +
        'that carries blood to the rest of the body. Normally, this valve opens wide to let blood flow through easily.\n\n' +
        'In aortic stenosis, the valve becomes stiff, thickened, and narrow over time — usually from calcium buildup, similar to how ' +
        'hard water leaves mineral deposits on a faucet. This means the heart has to squeeze much harder to push blood through the smaller opening.\n\n' +
        '**Symptoms (the classic triad):**\n' +
        '- Shortness of breath, especially with activity\n' +
        '- Chest pain (angina) during exercise\n' +
        '- Fainting or feeling lightheaded (syncope)\n\n' +
        'In the early stages, there may be no symptoms at all. The condition is usually found when a doctor hears a heart murmur ' +
        '(an extra sound) through a stethoscope during a check-up.\n\n' +
        'Treatment depends on how severe the narrowing is. Mild cases may only need monitoring. Severe cases, especially with symptoms, ' +
        'usually need valve replacement — either through open-heart surgery or a newer, less invasive procedure called TAVR where a new valve ' +
        'is placed through a tube inserted in the leg.',
      keyTerms: [
        { term: 'Aortic stenosis', definition: 'Narrowing of the aortic valve that restricts blood flow from the heart to the body', pronunciation: 'ay-OR-tik steh-NO-sis' },
        { term: 'Aortic valve', definition: 'The valve between the left ventricle (main pumping chamber) and the aorta (main artery)', pronunciation: 'ay-OR-tik valv' },
        { term: 'Heart murmur', definition: 'An extra heart sound caused by turbulent blood flow, often heard with a stethoscope' },
      ],
      analogies: [
        'Think of the aortic valve like a door that gets rusty and hard to open. The heart has to push harder and harder to get blood through.',
        'Aortic stenosis is like trying to water your garden through a partially blocked hose — less water gets through despite the same pressure.',
      ],
      patientCounselingPoints: [
        'Aortic stenosis usually develops slowly over years. Regular check-ups with echocardiograms are important.',
        'Report any new symptoms like dizziness, chest pain, or shortness of breath to your doctor promptly.',
        'Once symptoms develop, treatment with valve replacement is usually recommended.',
      ],
    },

    2: {
      level: 2,
      summary: 'Aortic stenosis is most commonly caused by age-related calcific degeneration, diagnosed by echocardiography, and graded by valve area, mean gradient, and peak velocity to determine timing of intervention.',
      explanation:
        '**Etiology:**\n' +
        '- **Calcific/degenerative** (most common in >70 yo): Progressive calcification of normal trileaflet valve\n' +
        '- **Bicuspid aortic valve** (most common in <70 yo): Congenital two-leaflet valve that calcifies earlier\n' +
        '- **Rheumatic heart disease**: Commissural fusion from prior rheumatic fever; now rare in developed countries\n\n' +
        '**Pathophysiology:**\n' +
        'As the valve narrows, the left ventricle must generate higher pressures to maintain cardiac output. This causes:\n' +
        '- Concentric LV hypertrophy (thickened walls to generate more pressure)\n' +
        '- Eventually, diastolic dysfunction (stiff ventricle does not relax well)\n' +
        '- Late stage: systolic dysfunction (EF drops) and heart failure\n\n' +
        '**Grading by Echocardiography:**\n' +
        '| Parameter | Mild | Moderate | Severe |\n' +
        '|-----------|------|----------|--------|\n' +
        '| Aortic valve area | > 1.5 cm2 | 1.0-1.5 cm2 | < 1.0 cm2 |\n' +
        '| Mean gradient | < 20 mmHg | 20-40 mmHg | > 40 mmHg |\n' +
        '| Peak velocity | < 3.0 m/s | 3.0-4.0 m/s | > 4.0 m/s |\n\n' +
        '**Classic Symptom Triad and Prognosis (once symptoms appear):**\n' +
        '- Angina: ~5-year survival without intervention\n' +
        '- Syncope: ~3-year survival\n' +
        '- Heart failure: ~2-year survival\n\n' +
        '**Physical Examination:**\n' +
        '- Crescendo-decrescendo (systolic ejection) murmur at right upper sternal border radiating to carotids\n' +
        '- Late-peaking murmur = more severe stenosis\n' +
        '- Pulsus parvus et tardus: Weak and delayed carotid pulse\n' +
        '- Diminished or absent A2 (aortic closure sound)',
      keyTerms: [
        { term: 'Bicuspid aortic valve', definition: 'A congenital abnormality where the aortic valve has two leaflets instead of three, predisposing to early calcification' },
        { term: 'Concentric LV hypertrophy', definition: 'Thickening of the ventricular wall in response to chronic pressure overload, maintaining normal chamber size' },
        { term: 'Aortic valve area (AVA)', definition: 'The cross-sectional area of the aortic valve opening; severe stenosis is defined as AVA < 1.0 cm2' },
        { term: 'Mean gradient', definition: 'The average pressure difference across the aortic valve during systole, measured by Doppler echocardiography' },
        { term: 'Pulsus parvus et tardus', definition: 'Weak (parvus) and delayed (tardus) carotid pulse characteristic of severe aortic stenosis' },
      ],
      examples: [
        'A 78-year-old with exertional dyspnea, a harsh systolic murmur at the right upper sternal border, and echo showing AVA 0.8 cm2 and mean gradient 48 mmHg has severe aortic stenosis.',
        'A 55-year-old found to have a bicuspid aortic valve with AVA 1.3 cm2 — moderate AS requiring serial echocardiographic surveillance.',
      ],
    },

    3: {
      level: 3,
      summary: 'AS management requires integration of symptom assessment, echocardiographic severity grading, consideration of low-flow states, and understanding of SAVR vs. TAVR indications based on age, surgical risk, and anatomy.',
      explanation:
        '**Discordant Grading — Low-Flow, Low-Gradient AS:**\n' +
        'When AVA < 1.0 cm2 but mean gradient < 40 mmHg, consider:\n' +
        '- **Classic low-flow, low-gradient (LVEF < 50%)**: Reduced EF may not generate enough flow to open the valve fully. ' +
        'Dobutamine stress echo differentiates true severe AS (AVA remains < 1.0 with increased flow) from pseudo-severe (AVA increases > 1.0).\n' +
        '- **Paradoxical low-flow, low-gradient (LVEF >= 50%)**: Small LV cavity with low stroke volume index (<35 mL/m2) despite preserved EF. ' +
        'Common in elderly hypertensive women. Calcium scoring by CT can confirm severity (Agatston >= 2000 men, >= 1200 women).\n\n' +
        '**Indications for Intervention (2020 ACC/AHA Guidelines):**\n' +
        '- **Class I**: Symptomatic severe AS\n' +
        '- **Class I**: Asymptomatic severe AS with LVEF < 50%\n' +
        '- **Class IIa**: Asymptomatic very severe AS (Vmax >= 5 m/s or mean gradient >= 60 mmHg) if surgical risk is low\n' +
        '- **Class IIa**: Asymptomatic severe AS with exercise-induced symptoms or fall in BP\n' +
        '- **Class IIa**: Asymptomatic severe AS when undergoing other cardiac surgery\n\n' +
        '**SAVR vs. TAVR:**\n' +
        '- **SAVR (Surgical Aortic Valve Replacement)**: Open-heart surgery; gold standard for younger/low-risk patients and those with concomitant disease requiring surgery (CABG, aortic repair)\n' +
        '- **TAVR (Transcatheter Aortic Valve Replacement)**:\n' +
        '  - Proven non-inferior or superior to SAVR across risk categories\n' +
        '  - **High/prohibitive risk**: PARTNER 1, CoreValve Extreme Risk — TAVR clearly superior\n' +
        '  - **Intermediate risk**: PARTNER 2, SURTAVI — TAVR non-inferior\n' +
        '  - **Low risk**: PARTNER 3, Evolut Low Risk — TAVR non-inferior at 1-2 years\n' +
        '  - Concerns: Permanent pacemaker rates (especially self-expanding valves ~15-20%), valve durability beyond 10 years, paravalvular leak, stroke\n' +
        '  - Preferred access: Transfemoral; alternative routes: transapical, transaortic, subclavian\n\n' +
        '**Valve Selection Considerations:**\n' +
        '- **Mechanical valve**: Lifelong durability but requires lifelong anticoagulation (warfarin, target INR 2.0-3.0). Consider for younger patients (<50-60).\n' +
        '- **Bioprosthetic valve**: Limited durability (10-20 years) but no long-term anticoagulation needed. Preferred for older patients and those who cannot take warfarin.\n' +
        '- Shared decision-making considering patient age, lifestyle, bleeding risk, and compliance with anticoagulation.\n\n' +
        '**Post-Procedure Surveillance:**\n' +
        '- Baseline TTE within 30 days after valve intervention\n' +
        '- Annual TTE for bioprosthetic valves\n' +
        '- Monitor for structural valve degeneration, paravalvular leak, patient-prosthesis mismatch',
      keyTerms: [
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement — minimally invasive valve replacement via catheter, now used across all surgical risk categories' },
        { term: 'SAVR', definition: 'Surgical aortic valve replacement — open-heart surgery to replace the aortic valve, gold standard for younger patients' },
        { term: 'Low-flow, low-gradient AS', definition: 'Discordant grading with small valve area but low gradient, requiring dobutamine echo or CT calcium scoring to confirm severity' },
        { term: 'Dobutamine stress echocardiography', definition: 'Echo performed during dobutamine infusion to differentiate true severe AS from pseudo-severe AS in low-flow states' },
        { term: 'Patient-prosthesis mismatch', definition: 'Effective orifice area of the prosthetic valve is too small relative to body size, creating persistent elevated gradients' },
        { term: 'CT calcium scoring', definition: 'Non-contrast CT quantifying aortic valve calcification (Agatston score) to confirm AS severity when echo grading is discordant' },
      ],
      clinicalNotes: 'TAVR has expanded rapidly to lower-risk populations, but long-term valve durability data (>10 years) remains limited. The Heart Team approach — cardiologist and cardiac surgeon jointly evaluating each patient — is standard of care for valve intervention decisions.',
    },

    4: {
      level: 4,
      summary: 'Advanced AS management includes TAVR procedural planning with cardiac CT, management of TAVR complications, bicuspid valve considerations, concomitant procedures, and valve-in-valve strategies for degenerated bioprostheses.',
      explanation:
        '**Pre-TAVR CT Planning:**\n' +
        'Multi-detector CT (MDCT) is mandatory for TAVR planning:\n' +
        '- **Annular sizing**: Mean annular diameter and perimeter-derived diameter determine prosthesis size. Undersizing causes paravalvular leak; oversizing risks annular rupture.\n' +
        '- **Coronary height assessment**: Left main < 12 mm or RCA < 10 mm from annulus increases risk of coronary obstruction\n' +
        '- **Iliofemoral access**: Minimum vessel diameter typically >= 5.0-5.5 mm for transfemoral approach\n' +
        '- **Calcium distribution**: Heavy, asymmetric calcification predicts paravalvular leak and conduction disturbance\n' +
        '- **LVOT calcification**: Subannular calcium increases risk of annular rupture and conduction abnormalities\n\n' +
        '**TAVR Complications Management:**\n' +
        '- **Paravalvular leak**: Post-dilation, snaring/repositioning (repositionable valves), or valve-in-valve. Moderate or greater PVL associated with increased mortality.\n' +
        '- **Conduction disturbance**: New LBBB in ~10-30%; permanent pacemaker in ~5-25% depending on valve type. Higher with self-expanding valves and implantation depth.\n' +
        '- **Coronary obstruction**: Rare (<1%) but catastrophic. Risk factors: low coronary height, shallow sinuses, valve-in-valve procedures. Managed by stenting or BASILICA technique.\n' +
        '- **Stroke**: ~2-3% at 30 days. Cerebral embolic protection devices (Sentinel) reduce embolic burden but randomized data on clinical stroke reduction is mixed.\n' +
        '- **Annular rupture**: Rare; associated with aggressive oversizing and heavy LVOT calcification. Often fatal.\n\n' +
        '**Bicuspid Aortic Valve and TAVR:**\n' +
        'Initially excluded from trials; now increasingly treated with TAVR using newer-generation devices. Challenges: asymmetric calcification, ' +
        'elliptical annulus, risk of incomplete expansion. Early data show acceptable outcomes with careful case selection and CT planning.\n\n' +
        '**Valve-in-Valve TAVR:**\n' +
        'For degenerated surgical bioprostheses — avoiding redo open-heart surgery. Key considerations:\n' +
        '- Small surgical valves (< 21 mm) at risk for patient-prosthesis mismatch\n' +
        '- Bioprosthetic valve fracture (BVF) with high-pressure balloon to increase effective orifice area of small valves\n' +
        '- Coronary obstruction risk is higher in valve-in-valve than native valve TAVR\n\n' +
        '**Concomitant Procedures:**\n' +
        '- TAVR + PCI: Staged approach preferred (PCI first if needed for acute coronary syndrome)\n' +
        '- TAVR + MitraClip: Emerging for mixed AS + MR; limited data\n' +
        '- TAVR + left atrial appendage closure: Combined in single procedure for AF patients\n\n' +
        '**Emerging Technologies:**\n' +
        '- Leaflet splitting/BASILICA to prevent coronary obstruction\n' +
        '- Cerebral embolic protection devices\n' +
        '- Next-generation valves with improved sealing and lower pacemaker rates\n' +
        '- Transseptal TAVR access for patients without femoral or alternative arterial access',
      keyTerms: [
        { term: 'Annular sizing', definition: 'CT-based measurement of the aortic valve annulus for prosthesis selection; perimeter-derived diameter is most reproducible' },
        { term: 'BASILICA', definition: 'Bioprosthetic or native Aortic Scallop Intentional Laceration to prevent Iatrogenic Coronary Artery obstruction during TAVR' },
        { term: 'Valve-in-valve TAVR', definition: 'Transcatheter valve implantation within a previously implanted degenerated surgical bioprosthesis' },
        { term: 'Bioprosthetic valve fracture', definition: 'Intentional high-pressure balloon fracture of a small surgical valve ring to accommodate a larger TAVR prosthesis' },
        { term: 'Cerebral embolic protection device', definition: 'Filter system deployed in aortic arch vessels during TAVR to capture embolic debris and reduce stroke risk' },
      ],
      clinicalNotes: 'TAVR planning requires a multidisciplinary Heart Team with dedicated cardiac CT expertise. Implantation depth is the most modifiable risk factor for post-TAVR conduction disturbance. The BASILICA technique has expanded TAVR applicability to patients previously considered high-risk for coronary obstruction.',
    },

    5: {
      level: 5,
      summary: 'Expert AS management encompasses molecular mechanisms of calcific AS, early disease intervention strategies, next-generation valve technologies, computational procedural planning, and the evolving TAVR-vs-SAVR landscape.',
      explanation:
        '**Molecular Pathophysiology of Calcific AS:**\n' +
        'Calcific AS is not passive "wear and tear" but an active process sharing features with atherosclerosis:\n' +
        '- **Lipid infiltration**: LDL and Lp(a) infiltrate valve leaflets; oxidized lipids activate inflammatory cascades\n' +
        '- **Lp(a) and OxPL**: Lipoprotein(a) carries oxidized phospholipids that promote valve calcification through autotaxin-lysophosphatidic acid pathway\n' +
        '- **Osteogenic differentiation**: Valve interstitial cells (VICs) undergo osteoblastic transformation via BMP2, Runx2, and Wnt/beta-catenin signaling\n' +
        '- **NOTCH1 mutations**: Associated with bicuspid valve and accelerated calcification; haploinsufficiency leads to de-repression of osteogenic genes\n\n' +
        '**Medical Therapy for Early AS — The Unmet Need:**\n' +
        'No medical therapy has been proven to slow AS progression:\n' +
        '- Statins: Three RCTs (SALTIRE, SEAS, ASTRONOMER) showed no benefit in slowing progression despite rationale\n' +
        '- **Lp(a) lowering**: Mendelian randomization studies strongly support causal role. Pelacarsen (ASO targeting Lp(a)) and olpasiran/lepodisiran (siRNA) trials ongoing.\n' +
        '- PCSK9 inhibitors: May lower Lp(a) modestly; dedicated AS prevention trials not yet conducted\n' +
        '- Anti-calcification agents: Denosumab (RANKL inhibitor), bisphosphonates — observational signal but no RCT confirmation\n\n' +
        '**Computational Planning:**\n' +
        '- Patient-specific finite element modeling predicts post-TAVR leaflet stress, paravalvular leak, and conduction disturbance risk\n' +
        '- Virtual TAVR simulation using CT data to optimize valve selection and implantation depth\n' +
        '- Machine learning predicting paravalvular leak, pacemaker requirement, and 1-year mortality from pre-procedural CT\n\n' +
        '**Valve Durability and Lifetime Management:**\n' +
        '- Structural valve degeneration (SVD) of TAVR prostheses: ~2-5% at 5 years by echocardiographic criteria; long-term data sparse\n' +
        '- Subclinical leaflet thrombosis (HALT): Detected on CT in 10-15% of TAVR and surgical bioprostheses. Clinical significance debated. ' +
        'Anticoagulation resolves thrombosis but routine use not recommended.\n' +
        '- Lifetime valve management strategy: Young patients may need staged approach — first bioprosthetic SAVR, then valve-in-valve TAVR when bioprosthesis degenerates. ' +
        'This "planned obsolescence" strategy requires careful initial surgical valve selection to accommodate future TAVR.\n\n' +
        '**Expanding TAVR Indications:**\n' +
        '- Moderate AS progression intervention: TAVR at moderate-severe stage before symptom onset being explored (PROGRESS trial)\n' +
        '- Pure aortic regurgitation: Early TAVR devices (JenaValve, J-Valve) with dedicated anchoring mechanisms\n' +
        '- Younger patients: 10-year PARTNER 2 data show emerging concerns about valve durability and pacemaker burden in <65 age group\n\n' +
        '**Novel Valve Technologies:**\n' +
        '- Polymer leaflet valves: Potential for superior durability over tissue valves\n' +
        '- Tissue-engineered living valves: Decellularized xenograft or bioprinted scaffolds seeded with autologous cells for growth and self-repair potential\n' +
        '- Sutureless surgical valves (Perceval, INTUITY): Bridge between SAVR and TAVR offering faster surgical implant times',
      keyTerms: [
        { term: 'Lipoprotein(a)', definition: 'Genetically determined lipoprotein causally linked to calcific AS through oxidized phospholipid-mediated valve inflammation and calcification' },
        { term: 'Valve interstitial cells (VICs)', definition: 'The predominant cell type in valve leaflets that undergo osteoblastic transformation in calcific AS through BMP2/Runx2 signaling' },
        { term: 'Subclinical leaflet thrombosis (HALT)', definition: 'Hypoattenuated leaflet thickening detected on CT, representing valve thrombosis; found in 10-15% of bioprosthetic valves' },
        { term: 'Finite element modeling', definition: 'Computational simulation of mechanical stress and deformation for predicting TAVR outcomes from patient-specific anatomy' },
        { term: 'Pelacarsen', definition: 'Antisense oligonucleotide targeting Lp(a) mRNA, under investigation for cardiovascular risk reduction including potential AS prevention' },
      ],
      clinicalNotes: 'Lp(a)-lowering therapies represent the most promising avenue for medical prevention of AS progression. The optimal timing of TAVR in the disease trajectory is shifting earlier with mounting evidence of safety. Lifetime management planning is essential for younger patients — the initial valve choice has implications for future reintervention options. The 10-year PARTNER data underscore the importance of long-term surveillance.',
    },
  },

  media: [
    { id: 'as-grading-table', type: 'diagram', filename: 'as-severity-grading.svg', title: 'Aortic Stenosis Severity Grading', description: 'Table comparing mild, moderate, and severe AS by echo parameters' },
    { id: 'tavr-procedure', type: 'diagram', filename: 'tavr-procedure-overview.svg', title: 'TAVR Procedure Overview', description: 'Step-by-step illustration of transcatheter aortic valve replacement' },
  ],
  citations: [
    { id: 'otto-2021-vhd', type: 'article', title: '2020 ACC/AHA Guideline for Management of Valvular Heart Disease', authors: ['Otto, C.M.', 'Nishimura, R.A.'], source: 'Circulation' },
    { id: 'leon-partner3', type: 'article', title: 'PARTNER 3: TAVR in Low-Risk Patients', authors: ['Mack, M.J.', 'Leon, M.B.'], source: 'NEJM' },
  ],
  crossReferences: [
    { targetId: 'mitral-regurgitation', targetType: 'condition', relationship: 'sibling', label: 'Mitral Regurgitation' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'related', label: 'Echocardiography' },
    { targetId: 'coronary-stenting', targetType: 'concept', relationship: 'see-also', label: 'Coronary Stenting' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['valvular-disease', 'interventional-cardiology', 'cardiology'],
    keywords: ['aortic stenosis', 'TAVR', 'SAVR', 'valve replacement', 'calcific', 'bicuspid aortic valve'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
