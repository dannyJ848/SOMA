import { EducationalContent } from '../../types';

/**
 * Mitral Regurgitation
 *
 * Educational content on mitral regurgitation covering primary (degenerative)
 * and secondary (functional) MR, diagnosis, severity grading, and
 * surgical/transcatheter management.
 */
export const mitralRegurgitation: EducationalContent = {
  id: 'mitral-regurgitation',
  type: 'condition',
  name: 'Mitral Regurgitation',
  nameEs: 'Insuficiencia Mitral',
  alternateNames: ['MR', 'Mitral Insufficiency', 'Mitral Valve Regurgitation'],

  levels: {
    1: {
      level: 1,
      summary: 'Mitral regurgitation means the valve between the upper and lower left chambers of the heart does not close tightly, allowing blood to leak backward.',
      explanation:
        'The mitral valve is like a one-way door between the left atrium (upper chamber) and left ventricle (lower chamber) of the heart. ' +
        'Normally, when the heart squeezes to pump blood out to the body, this valve closes tightly to prevent blood from going backward.\n\n' +
        'In mitral regurgitation (MR), the valve does not close completely, and some blood leaks back into the upper chamber instead of going forward. ' +
        'This means the heart has to work harder to pump enough blood to the body.\n\n' +
        '**There are two main types:**\n' +
        '- **Primary MR**: The valve itself is damaged (floppy, torn, or scarred)\n' +
        '- **Secondary MR**: The valve is normal but the heart is enlarged, pulling the valve leaflets apart\n\n' +
        '**Symptoms may include:**\n' +
        '- Shortness of breath, especially with activity or when lying flat\n' +
        '- Fatigue and weakness\n' +
        '- Swollen ankles or feet\n' +
        '- Heart palpitations (feeling the heart beat irregularly)\n\n' +
        'Mild MR is very common and often needs no treatment. More severe MR may need surgery to repair or replace the valve, ' +
        'or a newer clip procedure called MitraClip.',
      keyTerms: [
        { term: 'Mitral regurgitation', definition: 'Backward leaking of blood through the mitral valve when the heart pumps', pronunciation: 'MY-tral ree-GUR-jih-TAY-shun' },
        { term: 'Mitral valve', definition: 'The valve between the left atrium and left ventricle that prevents backward blood flow', pronunciation: 'MY-tral valv' },
        { term: 'MitraClip', definition: 'A small clip placed on the mitral valve through a catheter to reduce leaking, without open-heart surgery' },
      ],
      analogies: [
        'Think of the mitral valve as a swinging door that should close tightly. In MR, the door does not close all the way, and some water leaks back through.',
        'It is like a faulty check valve in plumbing — fluid flows backward when it should only go forward.',
      ],
      patientCounselingPoints: [
        'Mild MR is very common and usually does not require treatment.',
        'If you have moderate or severe MR, regular echocardiograms are important to monitor the valve.',
        'Report worsening shortness of breath or swelling to your doctor.',
      ],
    },

    2: {
      level: 2,
      summary: 'Mitral regurgitation is classified as primary (structural leaflet disease) or secondary (ventricular remodeling), graded by echocardiographic criteria, and managed based on severity and ventricular function.',
      explanation:
        '**Classification:**\n\n' +
        '**Primary (Degenerative) MR:** The valve leaflets themselves are abnormal.\n' +
        '- Mitral valve prolapse (MVP): Most common cause in developed countries. Myxomatous degeneration causes leaflet redundancy and prolapse.\n' +
        '- Flail leaflet: Ruptured chordae tendineae causing a leaflet to flail freely — usually acute severe MR\n' +
        '- Rheumatic disease: Fibrosis and retraction of leaflets\n' +
        '- Endocarditis: Vegetation destruction of leaflets\n\n' +
        '**Secondary (Functional) MR:** The valve is structurally normal but does not close because the ventricle is enlarged.\n' +
        '- Ischemic MR: Post-MI papillary muscle dysfunction or LV remodeling\n' +
        '- Dilated cardiomyopathy: LV dilation pulls the mitral leaflets apart (tethering)\n' +
        '- Atrial functional MR: Severe LA enlargement (often from chronic AF) causes mitral annular dilation\n\n' +
        '**Echocardiographic Severity Grading:**\n' +
        '| Parameter | Mild | Moderate | Severe |\n' +
        '|-----------|------|----------|--------|\n' +
        '| Regurgitant volume | < 30 mL | 30-59 mL | >= 60 mL |\n' +
        '| Regurgitant fraction | < 30% | 30-49% | >= 50% |\n' +
        '| EROA | < 0.20 cm2 | 0.20-0.39 cm2 | >= 0.40 cm2 |\n' +
        '| Vena contracta | < 3 mm | 3-6.9 mm | >= 7 mm |\n\n' +
        'Note: For secondary MR, different thresholds apply (EROA >= 0.20 cm2, RV >= 30 mL considered severe due to worse prognosis at lower volumes).\n\n' +
        '**Acute vs. Chronic MR:**\n' +
        '- Acute (ruptured chordae, endocarditis, papillary muscle rupture): No time for compensation — pulmonary edema, cardiogenic shock. Emergent surgery needed.\n' +
        '- Chronic: Gradual LV and LA dilation compensate for volume overload; may remain asymptomatic for years.',
      keyTerms: [
        { term: 'Primary MR', definition: 'MR caused by structural abnormality of the mitral valve leaflets or chordae tendineae' },
        { term: 'Secondary MR', definition: 'MR caused by LV remodeling/dilation that prevents normal valve closure despite structurally normal leaflets' },
        { term: 'EROA', definition: 'Effective regurgitant orifice area — the area of the leak, measured by echocardiography using the PISA method' },
        { term: 'Mitral valve prolapse', definition: 'Displacement of one or both mitral leaflets above the annular plane during systole, the most common cause of primary MR' },
        { term: 'Vena contracta', definition: 'The narrowest width of the regurgitant jet immediately distal to the regurgitant orifice; correlates with severity' },
      ],
      examples: [
        'A 60-year-old with a mid-systolic click and late systolic murmur at the apex has mitral valve prolapse.',
        'A post-MI patient with a new holosystolic murmur and flash pulmonary edema may have acute MR from papillary muscle rupture — surgical emergency.',
      ],
    },

    3: {
      level: 3,
      summary: 'MR management decisions depend on primary vs. secondary etiology, timing of intervention for asymptomatic severe primary MR, and the role of transcatheter edge-to-edge repair (TEER) for secondary MR.',
      explanation:
        '**Primary MR — Surgical Indications:**\n' +
        '- **Class I**: Symptomatic severe primary MR\n' +
        '- **Class I**: Asymptomatic severe primary MR with LV dysfunction (LVEF 30-60% or LVESD >= 40 mm)\n' +
        '- **Class IIa**: Asymptomatic severe primary MR with preserved LV function if high repair likelihood (>95%) and low mortality (<1%) at a reference center\n' +
        '- **Class IIa**: New-onset AF or pulmonary hypertension (PASP > 50 mmHg) as triggers for intervention\n\n' +
        '**Repair vs. Replacement:**\n' +
        '- **Repair strongly preferred** for primary MR — lower operative mortality, better LV function preservation, no anticoagulation needed\n' +
        '- Repair techniques: Leaflet resection, artificial chordae (ePTFE), annuloplasty ring, edge-to-edge repair\n' +
        '- Repair feasibility depends on pathology: Posterior leaflet prolapse most favorable; anterior/bileaflet disease more complex\n' +
        '- Barlow disease (bileaflet prolapse with excess tissue): Requires experienced surgeons but excellent repair results\n\n' +
        '**Secondary MR — Management:**\n' +
        '- **First**: Optimize GDMT for underlying cardiomyopathy (four pillars of HFrEF therapy)\n' +
        '- **CRT**: May reduce secondary MR by resynchronizing papillary muscle contraction\n' +
        '- **Surgery for secondary MR**: CTSN trials showed MV repair (ring annuloplasty) had high recurrence rates; no survival benefit over replacement\n' +
        '- **Transcatheter edge-to-edge repair (TEER) — MitraClip/PASCAL**:\n' +
        '  - COAPT trial: MitraClip + GDMT reduced mortality and HF hospitalizations vs. GDMT alone in severe secondary MR with proportionate criteria (EROA >= 30 mm2, LV not too dilated LVEDV < 200 mL)\n' +
        '  - MITRA-FR trial: No benefit — different patient selection (more dilated LVs, less severe MR relative to LV size)\n' +
        '  - Key concept: "Proportionate vs. disproportionate MR" — MR severity relative to LV size determines TEER benefit\n\n' +
        '**Watchful Waiting in Asymptomatic Primary MR:**\n' +
        'Serial monitoring with echo every 6-12 months. Exercise stress echo can unmask symptoms or reveal exercise-induced pulmonary hypertension. ' +
        'Trigger for intervention: LVEF drop, LV dilation (LVESD >= 40 mm), new AF, increasing PASP.\n\n' +
        '**Anticoagulation Considerations:**\n' +
        '- Mitral repair: No long-term anticoagulation needed (aspirin for 3-6 months)\n' +
        '- Bioprosthetic mitral replacement: Anticoagulation for 3-6 months then aspirin\n' +
        '- Mechanical mitral valve: Lifelong warfarin (INR 2.5-3.5, higher than aortic position)',
      keyTerms: [
        { term: 'TEER', definition: 'Transcatheter edge-to-edge repair (MitraClip/PASCAL) — percutaneous device that clips the mitral leaflets together to reduce MR' },
        { term: 'COAPT criteria', definition: 'Patient selection criteria from the COAPT trial for TEER in secondary MR: EROA >= 30 mm2, LVEDV < 200 mL, on maximized GDMT' },
        { term: 'Annuloplasty ring', definition: 'A ring sewn around the mitral valve annulus during surgical repair to restore normal annular dimensions and improve leaflet coaptation' },
        { term: 'Proportionate MR', definition: 'MR severity that is proportionate to the degree of LV dilation, where addressing MR alone may not improve outcomes (MITRA-FR population)' },
        { term: 'Disproportionate MR', definition: 'MR severity exceeding what is expected for the LV size, representing a therapeutic target for TEER (COAPT population)' },
      ],
      clinicalNotes: 'The COAPT vs. MITRA-FR discordance highlights the importance of patient selection for TEER. The concept of proportionate vs. disproportionate MR is central: patients with severe MR relative to their LV size benefit most from TEER. All secondary MR patients must have GDMT optimized before considering intervention.',
    },

    4: {
      level: 4,
      summary: 'Advanced MR management includes complex mitral repair techniques, percutaneous mitral valve replacement, annuloplasty devices, novel imaging for procedural planning, and management of specific etiologies.',
      explanation:
        '**Advanced Surgical Repair Techniques:**\n' +
        '- **Leaflet resection**: Quadrangular or triangular resection for posterior leaflet excess tissue; sliding valvuloplasty for reconstruction\n' +
        '- **Artificial chordae**: ePTFE (Gore-Tex) neochordae — "respect rather than resect" philosophy preserving leaflet tissue\n' +
        '- **Loop technique**: Pre-formed loops of ePTFE attached to papillary muscle tip for standardized chordal replacement\n' +
        '- **Robotic/minimally invasive repair**: Right mini-thoracotomy or robotic-assisted approaches offer faster recovery with equivalent repair quality\n\n' +
        '**Transcatheter Mitral Valve Technologies:**\n' +
        '- **TEER (MitraClip/PASCAL)**: Clips leaflets together creating double orifice. PASCAL has spacer element for larger coaptation gaps.\n' +
        '- **Transcatheter mitral valve replacement (TMVR)**: Multiple devices in development (Tendyne, Intrepid, HighLife, Sapien M3). ' +
        'Challenges: large annulus size, LVOT obstruction risk, paravalvular leak, device anchoring in the absence of calcification.\n' +
        '- **Transcatheter annuloplasty**: Cardioband (Edwards) — percutaneous ring annuloplasty via transseptal approach. Indirect annuloplasty via coronary sinus (Carillon).\n' +
        '- **Chordal replacement**: NeoChord and Harpoon — beating-heart transapical implantation of artificial chordae for leaflet prolapse.\n\n' +
        '**Imaging for MR Assessment:**\n' +
        '- **3D TEE**: Gold standard for surgical/interventional planning. Provides en-face view of the valve ("surgeon\'s view"), precise scallop identification, and accurate EROA measurement.\n' +
        '- **Cardiac CT**: Annular sizing for TMVR, neo-LVOT assessment, and prediction of LVOT obstruction.\n' +
        '- **Cardiac MRI**: Most accurate for regurgitant volume quantification; recommended when echo is discordant or non-diagnostic.\n' +
        '- **Strain imaging**: GLS can detect subclinical LV dysfunction before EF drops, potentially identifying earlier intervention triggers.\n\n' +
        '**Specific Etiologies — Advanced Considerations:**\n' +
        '- **Mitral annular calcification (MAC)**: Heavy calcification of the annulus complicating both repair and replacement. Caseous calcification is a distinct entity. TMVR with balloon-expandable valves (valve-in-MAC) is emerging.\n' +
        '- **Ischemic MR**: Revascularization alone often insufficient. CABG + MV repair for severe MR, but CTSN trial showed high repair recurrence.\n' +
        '- **Barlow disease**: Extensive bileaflet prolapse — requires experienced center. Anterior leaflet sliding plasty, commissuroplasty, multiple neochordae.\n' +
        '- **Radiation-induced valve disease**: Fibrotic, retracted leaflets with annular calcification. High surgical risk; percutaneous options preferred.',
      keyTerms: [
        { term: 'TMVR', definition: 'Transcatheter mitral valve replacement — catheter-based implantation of a prosthetic valve in the mitral position, still largely investigational' },
        { term: '3D TEE', definition: 'Three-dimensional transesophageal echocardiography providing en-face visualization of the mitral valve for precise anatomic assessment' },
        { term: 'Neo-LVOT', definition: 'The new left ventricular outflow tract geometry created after TMVR implantation; obstruction is a major concern' },
        { term: 'Mitral annular calcification (MAC)', definition: 'Degenerative calcification of the mitral valve annulus that complicates surgical and transcatheter interventions' },
        { term: 'NeoChord', definition: 'Transapical beating-heart device for implanting artificial chordae tendineae to treat mitral valve prolapse' },
      ],
      clinicalNotes: 'LVOT obstruction is the Achilles heel of TMVR — neo-LVOT < 170 mm2 on pre-procedural CT is associated with high risk. Anterior mitral leaflet laceration (LAMPOON technique) or alcohol septal ablation can mitigate this. Reference center MV repair rates for degenerative MR should exceed 95% with <1% mortality.',
    },

    5: {
      level: 5,
      summary: 'Expert-level MR management integrates molecular mechanisms of valve degeneration, precision imaging biomarkers, computational modeling for intervention planning, and next-generation regenerative valve therapies.',
      explanation:
        '**Molecular Biology of Mitral Valve Disease:**\n' +
        '- **Myxomatous degeneration**: Proteoglycan accumulation, collagen disorganization, and elastin fragmentation in the spongiosa layer. TGF-beta signaling upregulation ' +
        'drives extracellular matrix remodeling. Familial MVP linked to DCHS1, DZIP3, and filamin A (FLNA) mutations.\n' +
        '- **Fibroelastic deficiency (FED)**: Opposite of Barlow — deficient connective tissue with thin, translucent leaflets. Typically focal (single segment) and occurs in elderly.\n' +
        '- **Mitral valve interstitial cells (MVICs)**: Phenotypic plasticity between quiescent fibroblast-like and activated myofibroblast states governs repair vs. fibrosis.\n\n' +
        '**Advanced Imaging Biomarkers:**\n' +
        '- **CMR feature tracking**: Myocardial strain by CMR detects subclinical LV dysfunction before EF decline. GLS <= -19.9% may be a more sensitive trigger for intervention.\n' +
        '- **T1 mapping and ECV**: Quantify diffuse myocardial fibrosis; elevated T1/ECV in chronic MR predicts worse post-operative LV recovery.\n' +
        '- **4D flow MRI**: Visualizes and quantifies regurgitant jets in 3D with hemodynamic parameters not available on echo.\n' +
        '- **Machine learning on echo**: Automated MR grading, leaflet segmentation, and prediction of repair feasibility using deep learning on echo images.\n\n' +
        '**Computational Modeling:**\n' +
        '- Patient-specific FEM of mitral valve mechanics: Predicts leaflet stress distribution, repair biomechanics, and optimal neochordal length.\n' +
        '- CFD (computational fluid dynamics) modeling of mitral regurgitant flow: Quantifies effective regurgitant orifice and hemodynamic impact.\n' +
        '- Virtual surgery simulation: Allows preoperative testing of repair strategies on patient-specific anatomy.\n' +
        '- AI-guided TEER procedural planning: Optimal clip placement prediction from 3D TEE data.\n\n' +
        '**Triggers for Earlier Intervention — Evolving Evidence:**\n' +
        '- LVEF cutoff of 60% may be too low for primary MR — some data suggest intervention at LVEF < 65% improves long-term outcomes.\n' +
        '- GLS, NT-proBNP trends, and exercise testing may allow more personalized timing of surgery.\n' +
        '- EMILV-HCM trial: Exercise stress echo unmasking dynamic MR in hypertrophic cardiomyopathy.\n\n' +
        '**Regenerative and Future Therapies:**\n' +
        '- Tissue-engineered mitral valve replacements using decellularized xenograft scaffolds with recellularization\n' +
        '- Bioabsorbable annuloplasty rings that provide initial support then are replaced by native tissue\n' +
        '- In-situ valve tissue engineering: Injectable hydrogels with growth factors to promote leaflet repair\n' +
        '- Mitral valve-specific iPSC research for understanding genetic MVP and drug screening\n\n' +
        '**Controversies:**\n' +
        '- Early surgery for asymptomatic severe primary MR remains debated. Ongoing trials (MATTER trial) compare early surgery to surveillance.\n' +
        '- TEER in primary MR: Limited data (EVEREST II showed lower efficacy than surgery but acceptable for high-risk patients).\n' +
        '- Secondary MR: Optimal patient selection beyond COAPT criteria remains unclear. Role of LA functional MR (from AF) as a distinct entity.',
      keyTerms: [
        { term: 'Myxomatous degeneration', definition: 'Pathological proteoglycan accumulation and collagen/elastin disorganization in mitral valve spongiosa, the hallmark of Barlow disease and MVP' },
        { term: 'DCHS1', definition: 'Dachsous Cadherin-Related 1 gene — mutations associated with familial non-syndromic mitral valve prolapse' },
        { term: 'CMR feature tracking', definition: 'Cardiac MRI-based strain analysis that detects subclinical LV dysfunction more sensitively than ejection fraction' },
        { term: 'T1 mapping/ECV', definition: 'MRI technique quantifying tissue properties; elevated values indicate diffuse myocardial fibrosis affecting post-operative recovery in MR' },
        { term: '4D flow MRI', definition: 'Time-resolved 3D phase-contrast MRI providing comprehensive visualization and quantification of blood flow patterns and regurgitant jets' },
      ],
      clinicalNotes: 'The optimal timing for intervention in asymptomatic severe primary MR remains one of the most debated topics in valve disease. Current evidence suggests that waiting for LV dysfunction (EF < 60%) may be too late. Advanced imaging biomarkers (strain, T1/ECV, exercise hemodynamics) promise more personalized intervention timing. The TEER field is evolving rapidly with multiple competing devices and expanding indications.',
    },
  },

  media: [
    { id: 'mr-classification', type: 'diagram', filename: 'mr-primary-secondary.svg', title: 'Primary vs. Secondary MR', description: 'Diagram comparing mechanisms of primary and secondary mitral regurgitation' },
    { id: 'carpentier-classification', type: 'diagram', filename: 'carpentier-classification.svg', title: 'Carpentier Classification', description: 'Carpentier classification of mitral valve dysfunction by leaflet motion' },
  ],
  citations: [
    { id: 'otto-2021-vhd-mr', type: 'article', title: '2020 ACC/AHA Guideline for Valvular Heart Disease', authors: ['Otto, C.M.'], source: 'Circulation' },
    { id: 'stone-coapt', type: 'article', title: 'COAPT Trial: MitraClip for Secondary MR', authors: ['Stone, G.W.'], source: 'NEJM' },
  ],
  crossReferences: [
    { targetId: 'aortic-stenosis', targetType: 'condition', relationship: 'sibling', label: 'Aortic Stenosis' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'related', label: 'Echocardiography' },
    { targetId: 'heart-failure-management', targetType: 'concept', relationship: 'related', label: 'Heart Failure Management' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['valvular-disease', 'cardiology', 'cardiac-surgery'],
    keywords: ['mitral regurgitation', 'MitraClip', 'TEER', 'mitral valve prolapse', 'mitral repair', 'secondary MR'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
