/**
 * Polyarteritis Nodosa (PAN)
 *
 * Medium-vessel necrotizing vasculitis causing aneurysms and organ ischemia.
 * ANCA-negative, historically associated with hepatitis B.
 */

import { EducationalContent } from '../../types';

export const panContent: EducationalContent = {
  id: 'rheumatology-pan',
  type: 'condition',
  name: 'Polyarteritis Nodosa (PAN)',
  nameEs: 'Poliarteritis Nodosa (PAN)',
  alternateNames: ['PAN', 'Periarteritis Nodosa', 'Medium-Vessel Vasculitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Polyarteritis nodosa is a disease where medium-sized blood vessels become inflamed and damaged. It can affect many organs including kidneys, nerves, gut, and skin, but it does NOT affect the lungs.',
      explanation: `## What Is Polyarteritis Nodosa?

PAN is a type of vasculitis that damages medium-sized arteries. When these arteries become inflamed, they can narrow, form small bulges (aneurysms), and cut off blood supply to organs.

## What Are the Symptoms?

**General:**
- Fever, weight loss, fatigue
- Muscle aches, joint pain
- Feeling very unwell

**Nerves:**
- Sudden weakness or numbness in hands or feet
- Foot drop (cannot lift front of foot)
- Wrist drop

**Skin:**
- Painful lumps under the skin (nodules)
- Net-like purple pattern (livedo reticularis)
- Ulcers on legs

**Gut:**
- Severe abdominal pain after eating
- Nausea, vomiting
- Blood in stool

**Kidneys:**
- High blood pressure (often severe)
- Kidney problems (but NOT the type seen in small-vessel vasculitis)

**Important:** PAN does NOT affect the lungs.

## What Causes It?

- Often unknown
- Can be triggered by hepatitis B infection
- Not an ANCA-associated vasculitis

## Treatment

- Steroids to reduce inflammation
- Stronger immune-suppressing medicines for severe disease
- Treat hepatitis B if present
- Blood pressure control`,

      keyTerms: [
        { term: 'Vasculitis', definition: 'Inflammation of blood vessels that can damage them' },
        { term: 'Aneurysm', definition: 'A weak, bulging spot in a blood vessel wall' },
        { term: 'Livedo reticularis', definition: 'A net-like purple pattern on the skin from blood vessel changes' },
        { term: 'Foot drop', definition: 'Inability to lift the front of the foot due to nerve damage' },
      ],
      analogies: [
        'Inflamed arteries in PAN are like weakened garden hoses that can bulge and leak.',
        'Foot drop from PAN is like the wire controlling your foot getting cut.',
      ],
      examples: [
        'Person with fever, weight loss, severe abdominal pain, and foot drop',
        'Someone with high blood pressure, skin nodules, and a net-like rash on legs',
        'Patient with hepatitis B who develops severe vasculitis symptoms',
      ],
      patientCounselingPoints: [
        'PAN is treatable, especially when caught early.',
        'If you have hepatitis B, treating the virus is part of treating PAN.',
        'Blood pressure control is very important to protect your kidneys.',
        'Report any new numbness, weakness, or severe belly pain immediately.',
      ],
    },

    2: {
      level: 2,
      summary: 'PAN is a necrotizing medium-vessel vasculitis that is ANCA-negative and spares the lungs and glomeruli. Mononeuritis multiplex and mesenteric ischemia are classic features. Angiography shows microaneurysms.',
      explanation: `## Key Distinguishing Features

**PAN is defined by what it IS and what it IS NOT:**
- IS: Medium-vessel necrotizing vasculitis
- IS NOT: ANCA-positive (if ANCA+, it's MPA not PAN)
- DOES NOT: Affect lungs (no pulmonary involvement)
- DOES NOT: Cause glomerulonephritis (renal artery involvement, not glomerular)

## Clinical Manifestations

**Neurologic (70-80%):**
- Mononeuritis multiplex: Classic feature
  - Asymmetric, sequential nerve involvement
  - Foot drop (peroneal nerve), wrist drop (radial nerve)
  - Painful, sudden onset
- Peripheral neuropathy (sensorimotor)
- CNS involvement rare (stroke from cerebral artery involvement)

**Renal (60-70%):**
- Renovascular hypertension (renal artery stenosis/aneurysm)
- Renal infarction (flank pain, hematuria)
- NO glomerulonephritis (unlike GPA/MPA)
- Renal angiography: Microaneurysms at branch points

**GI (30-50%):**
- Mesenteric ischemia: Postprandial abdominal pain
- GI bleeding, perforation
- Cholecystitis (acalculous)
- Appendicitis-like presentation
- May be the most life-threatening manifestation

**Skin (40-50%):**
- Livedo reticularis
- Subcutaneous nodules along arteries
- Ulcers, digital gangrene
- Purpura (non-palpable, from arterial occlusion)

**Musculoskeletal:**
- Myalgias (often severe), arthralgias
- Testicular pain (orchitis) - highly suggestive of PAN

## Diagnosis

**Angiography (Gold Standard for medium vessels):**
- Microaneurysms at branch points (renal, hepatic, mesenteric arteries)
- Irregular stenoses and occlusions
- "String of beads" or "rosary bead" appearance

**Biopsy:**
- Medium-vessel necrotizing vasculitis
- Fibrinoid necrosis of vessel wall
- All stages of inflammation (acute, healing, healed) simultaneously
- Preferably from affected tissue (sural nerve, skin, muscle)

**Labs:**
- Elevated ESR, CRP
- ANCA negative (mandatory to exclude MPA)
- Check hepatitis B surface antigen (HBV-associated PAN in 5-10%)
- Elevated creatinine (renal artery involvement)
- Anemia, leukocytosis, thrombocytosis

## Five Factor Score (FFS) - Prognosis

**Predicts mortality (1 point each):**
- Proteinuria >1g/day
- Creatinine >1.58 mg/dL
- GI involvement
- Cardiomyopathy
- CNS involvement
- FFS 0: 5-year mortality 12%
- FFS >=2: 5-year mortality 46%`,

      keyTerms: [
        { term: 'Mononeuritis multiplex', definition: 'Simultaneous or sequential damage to individual, non-contiguous nerves causing asymmetric weakness' },
        { term: 'Microaneurysm', definition: 'Tiny aneurysms of medium arteries seen on angiography, characteristic of PAN' },
        { term: 'Fibrinoid necrosis', definition: 'Destruction of vessel wall with fibrin deposition - hallmark histologic finding' },
        { term: 'Five Factor Score', definition: 'Prognostic score using 5 clinical features to predict mortality and guide treatment' },
      ],
      analogies: [
        'Mononeuritis multiplex is like a power outage affecting individual circuits randomly rather than the whole house.',
        'Microaneurysms on angiography look like beads on a necklace of blood vessels.',
      ],
      examples: [
        'Man with fever, weight loss, foot drop, testicular pain, and microaneurysms on renal angiography',
        'Patient with severe postprandial abdominal pain, weight loss, and livedo reticularis - mesenteric PAN',
        'HBsAg+ patient with necrotizing vasculitis and mononeuritis multiplex',
      ],
      clinicalNotes: 'PAN is now rare due to hepatitis B vaccination. If ANCA is positive, reclassify as MPA regardless of vessel size on biopsy. Testicular pain (orchitis) is almost pathognomonic for PAN among vasculitides. FFS guides treatment: FFS=0 may use steroids alone; FFS>=1 requires cyclophosphamide or rituximab. GI involvement is the most dangerous manifestation with risk of perforation and hemorrhage.',
    },

    3: {
      level: 3,
      summary: 'PAN treatment is guided by the Five Factor Score. FFS=0 receives steroids alone; FFS>=1 requires cyclophosphamide. HBV-associated PAN requires antiviral therapy with plasma exchange, not immunosuppression.',
      explanation: `## Treatment: Non-HBV PAN

**FFS = 0 (No Poor Prognostic Factors):**
- Glucocorticoids alone: Prednisone 1mg/kg/day taper over 12-18 months
- 50% response rate with steroids alone
- Add immunosuppressant if relapse during taper

**FFS >= 1 (Poor Prognostic Factors Present):**
- Glucocorticoids PLUS cyclophosphamide
- IV pulse cyclophosphamide: 600mg/m2 q2-4 weeks x6-12 pulses
- OR oral cyclophosphamide: 2mg/kg/day
- Followed by maintenance: Azathioprine 2mg/kg/day for 12-18 months

**Severe/Life-Threatening:**
- Pulse methylprednisolone 500-1000mg x3 days
- Then cyclophosphamide
- Plasma exchange for rapidly progressive disease (limited evidence)

**Rituximab:**
- Increasingly used for non-HBV PAN (case series, no RCT data)
- Extrapolated from AAV data
- Consider for relapsing PAN or CYC-intolerant patients

## Treatment: HBV-Associated PAN

**Distinct Approach (Do NOT Immunosuppress Long-Term):**
1. Short course steroids (2-3 weeks only) to control acute vasculitis
2. Antiviral therapy: Entecavir or tenofovir
3. Plasma exchange (3-5 sessions) to remove immune complexes
4. Rapid steroid taper once antiviral started
5. Rationale: Immune suppression promotes viral replication; clearing HBV cures PAN

**Outcomes:**
- HBV seroconversion (HBsAg- / anti-HBs+) = cure of PAN
- Long-term antiviral therapy until seroconversion
- Excellent prognosis if virus is cleared

## Monitoring and Follow-Up

**During Treatment:**
- Blood pressure (renovascular HTN)
- Renal function (creatinine, urinalysis)
- CBC (treatment toxicity)
- ESR, CRP (disease activity)
- Hepatitis B serology if HBV-associated

**Complications to Watch For:**
- GI perforation/hemorrhage (surgical emergency)
- Renal artery thrombosis
- Cardiac involvement (rare, poor prognosis)
- Treatment-related infections

## Cutaneous PAN

**A Separate Entity:**
- Limited to skin: Nodules, livedo reticularis, ulcers
- No systemic organ involvement
- Benign course, rarely progresses to systemic PAN
- Treatment: NSAIDs, colchicine, low-dose steroids
- Dapsone for recurrent disease
- Rule out systemic disease with workup`,

      keyTerms: [
        { term: 'HBV-associated PAN', definition: 'PAN caused by hepatitis B immune complexes; treated with antivirals and plasma exchange, not long-term immunosuppression' },
        { term: 'Cutaneous PAN', definition: 'Skin-limited form of PAN with benign course and no systemic organ involvement' },
        { term: 'Seroconversion', definition: 'Immune clearance of hepatitis B surface antigen, effectively curing HBV-PAN' },
        { term: 'FFS-guided therapy', definition: 'Using Five Factor Score to determine whether steroids alone vs combined immunosuppression is needed' },
      ],
      analogies: [
        'HBV-PAN treatment is counterintuitive: you fix the vasculitis by treating the virus, not by suppressing the immune system.',
        'Cutaneous PAN is like a fire contained to the fireplace - dangerous-looking but not spreading through the house.',
      ],
      examples: [
        'PAN patient with FFS=0 (skin and nerve only) treated with steroids alone',
        'PAN patient with renal involvement (FFS=1) gets cyclophosphamide + steroids',
        'HBsAg+ PAN treated with short steroids, plasma exchange, and entecavir; achieves seroconversion',
      ],
      clinicalNotes: 'HBV-associated PAN is one of the few curable vasculitides - antiviral therapy leading to HBV seroconversion can permanently eliminate PAN. Long-term immunosuppression in HBV-PAN worsens outcomes by promoting viral replication. Cutaneous PAN must be differentiated from systemic PAN with careful workup including renal angiography if suspicious. The FFS should be calculated at diagnosis to guide treatment intensity.',
    },

    4: {
      level: 4,
      summary: 'PAN pathogenesis involves immune complex deposition (HBV), direct vessel wall inflammation, and complement activation. Unlike ANCA vasculitis, PAN targets the vasa vasorum and muscular layer. Medium-vessel involvement spares glomeruli and pulmonary capillaries.',
      explanation: `## Pathogenesis

**HBV-Associated PAN:**
- Immune complex-mediated (Type III hypersensitivity)
- HBsAg-anti-HBs complexes deposit in vessel walls
- Complement activation (classical pathway)
- C3 and immunoglobulin deposition in vessel walls
- Typically occurs during early HBV infection or seroconversion phase
- NOT seen in chronic inactive HBV carriers

**Idiopathic PAN:**
- Mechanism less well understood
- NOT immune complex-mediated in most cases
- Possible cell-mediated vascular inflammation
- T cells and macrophages predominate in vessel infiltrate
- Endothelial activation and adhesion molecule upregulation
- Cytokine-driven vessel wall destruction

**Vessel Wall Pathology:**
- Segmental, necrotizing inflammation of muscular arteries
- Involvement at branch points (turbulent flow, vulnerability)
- Transmural inflammation: All layers involved
- Fibrinoid necrosis of media
- Internal elastic lamina disruption -> aneurysm formation
- Intimal proliferation -> stenosis and thrombosis
- All stages simultaneously (acute, subacute, healed): "Lesions of different ages"

**Why No Glomerular or Pulmonary Involvement:**
- PAN affects muscular arteries (medium-sized)
- Glomeruli are capillary networks (small vessel territory)
- Pulmonary arteries are elastic, not muscular
- Bronchial arteries (muscular) are spared for unclear reasons
- This distinction separates PAN from MPA definitionally

## Differential Diagnosis

**PAN vs MPA:**
- MPA: ANCA-positive, glomerulonephritis, pulmonary capillaritis
- PAN: ANCA-negative, no GN, no lung involvement
- Overlap zone: Some patients have medium-vessel involvement + ANCA
  - Classified as MPA by Chapel Hill Consensus 2012

**PAN vs Fibromuscular Dysplasia:**
- FMD: Non-inflammatory, "string of beads" on angiography
- PAN: Inflammatory, microaneurysms + stenoses
- Differentiated by clinical context and biopsy

**PAN-like Presentations:**
- DADA2 (Deficiency of Adenosine Deaminase 2): Genetic PAN mimic
  - ADA2 gene mutations (autosomal recessive)
  - Childhood-onset with livedo, strokes, hepatosplenomegaly
  - Elevated TNF levels; responds to anti-TNF therapy
  - Must screen young PAN patients for DADA2

## Imaging

**Conventional Angiography (Gold Standard):**
- Microaneurysms: 1-5mm, saccular, at branch points
- Stenoses and occlusions
- Irregularity of vessel caliber
- Renal, hepatic, mesenteric circulation

**CT Angiography:**
- Less sensitive for microaneurysms
- Useful for larger vessel involvement
- May detect renal/hepatic aneurysms

**MR Angiography:**
- Avoids radiation
- Limited resolution for smallest aneurysms
- Improving with newer techniques`,

      keyTerms: [
        { term: 'Fibrinoid necrosis', definition: 'Destruction of the vessel media with deposition of fibrin-like material; pathologic hallmark of PAN' },
        { term: 'Lesions of different ages', definition: 'Simultaneous presence of acute, healing, and healed vessel lesions characteristic of ongoing PAN' },
        { term: 'DADA2', definition: 'Deficiency of Adenosine Deaminase 2 - genetic PAN mimic in children responding to anti-TNF' },
        { term: 'Chapel Hill 2012', definition: 'Revised consensus nomenclature requiring ANCA-negative status to classify as PAN' },
      ],
      analogies: [
        'Lesions of different ages in PAN are like a war zone with fresh craters, partially rebuilt areas, and old scars all at once.',
        'DADA2 mimicking PAN is like finding a genetic software bug causing the same symptoms as an immune attack.',
      ],
      examples: [
        'Child with PAN-like vasculitis and strokes tested for DADA2 mutation - found ADA2-deficient, started anti-TNF',
        'Angiography shows microaneurysms at renal artery branch points with irregular stenoses - classic PAN',
        'ANCA-negative patient with medium-vessel biopsy showing fibrinoid necrosis and all-stage lesions',
      ],
      clinicalNotes: 'DADA2 must be considered in any childhood PAN or stroke presentation. ADA2 enzyme activity assay is the screening test. Responds dramatically to anti-TNF therapy (adalimumab, etanercept) rather than traditional PAN immunosuppression. In adults, PAN is now very rare; always verify ANCA-negative status and consider alternative diagnoses. HBV vaccination has nearly eliminated HBV-PAN in vaccinated populations.',
    },

    5: {
      level: 5,
      summary: 'PAN epidemiology has shifted dramatically with HBV vaccination. DADA2 discovery has reclassified many childhood PAN cases. No randomized trials exist for modern PAN therapy. The nosology of medium-vessel vasculitis continues to evolve with genetic discoveries.',
      explanation: `## Epidemiology Shift

**Declining Incidence:**
- HBV-PAN: Near elimination in countries with universal HBV vaccination
- Overall PAN incidence declining (0.9-3.0/million/year)
- Many historical PAN cases would now be reclassified as MPA (ANCA-positive)
- True idiopathic PAN is among the rarest vasculitides

**Reclassification Impact:**
- Chapel Hill 2012: ANCA-positive patients excluded from PAN
- DADA2 discovery (2014): Genetic cases reclassified
- Result: PAN clinical trial population dramatically reduced
- Difficult to conduct prospective trials

## DADA2 (Deficiency of Adenosine Deaminase 2)

**Genetics:**
- CECR1 (now ADA2) gene mutations
- Autosomal recessive
- Loss of ADA2 enzyme activity
- Predominantly affects children but adult-onset cases described

**Pathogenesis:**
- ADA2 converts adenosine to inosine in the extracellular space
- Deficiency leads to excess extracellular adenosine
- M1 macrophage polarization (pro-inflammatory)
- TNF-alpha overproduction
- Endothelial inflammation and neutrophil dysregulation
- NET formation

**Clinical Spectrum:**
- PAN-like vasculitis (livedo, nodules, stroke)
- Lacunar strokes (childhood stroke = always consider DADA2)
- Hepatosplenomegaly
- Hypogammaglobulinemia (variable)
- Pure red cell aplasia, bone marrow failure (expanding phenotype)
- Lymphoproliferation

**Treatment:**
- Anti-TNF therapy (etanercept, adalimumab): Dramatic response
- NOT cyclophosphamide (ineffective for genetic cause)
- HSCT for patients with bone marrow failure
- Gene therapy under investigation

## Treatment Evidence Gaps

**No RCTs Specific to PAN:**
- Historical French Vasculitis Study Group data (pre-ANCA era, included MPA)
- FFS developed from mixed PAN/MPA cohorts
- Treatment extrapolated from AAV and historical PAN data
- Rituximab use in PAN: Case series only

**Current Practice (Expert Consensus):**
- Mild (FFS=0): Glucocorticoids alone or + methotrexate
- Moderate-severe (FFS>=1): Glucocorticoids + cyclophosphamide
- Refractory: Rituximab, plasma exchange, anti-TNF
- HBV-PAN: Antivirals + short steroids + plasma exchange
- Maintenance: Azathioprine or methotrexate x12-24 months

## Medium-Vessel Vasculitis Nosology

**Evolving Concepts:**
- Genetic causes (DADA2, SAVI/STING-associated vasculopathy, haploinsufficiency of A20)
- Drug-induced PAN-like vasculitis (amphetamines, cocaine)
- Infection-associated (HBV, HCV, HIV, parvovirus B19)
- Overlap with fibromuscular dysplasia and segmental arterial mediolysis
- Some propose eliminating PAN as a separate entity once genetic causes are excluded

**Monogenic Vasculopathies Mimicking PAN:**
- DADA2: ADA2 mutations
- SAVI: STING gain-of-function (TMEM173)
- HA20: TNFAIP3 haploinsufficiency (A20)
- These genetic conditions require targeted therapy, not standard immunosuppression

## Outcomes and Prognosis

**With Treatment:**
- 5-year survival: 80-90% (improved from 13% untreated at 5 years)
- HBV-PAN with seroconversion: Near-normal survival
- Major causes of death: GI complications, cardiovascular events, infections
- Relapse rate: 20-30% over 5 years (lower than GPA)
- FFS remains the best prognostic tool

**Long-Term Damage:**
- Peripheral neuropathy: Often persistent despite treatment
- Chronic kidney disease from renal artery damage
- Renovascular hypertension requiring ongoing management
- Post-ischemic bowel complications`,

      keyTerms: [
        { term: 'CECR1/ADA2 gene', definition: 'Gene encoding adenosine deaminase 2; mutations cause DADA2, a genetic PAN mimic' },
        { term: 'SAVI', definition: 'STING-Associated Vasculopathy with onset in Infancy - monogenic vasculopathy mimicking PAN' },
        { term: 'HA20', definition: 'Haploinsufficiency of A20 (TNFAIP3) causing autoinflammatory vasculopathy' },
        { term: 'Monogenic vasculopathy', definition: 'Genetic single-gene disorder mimicking vasculitis; requires targeted therapy' },
      ],
      analogies: [
        'Discovering DADA2 within PAN is like finding that some house fires were caused by faulty wiring, not arson.',
        'The shrinking PAN diagnosis is like peeling layers off an onion as each genetic and serologic cause is identified and reclassified.',
      ],
      examples: [
        'Historical PAN cohort re-analyzed: 30% reclassified as MPA (ANCA+), 10% as DADA2',
        'Child with childhood stroke and PAN features tested for ADA2 activity - low level confirms DADA2, started on adalimumab',
        'Adult with FFS=2 idiopathic PAN treated with CYC + steroids, transitioned to AZA maintenance',
      ],
      clinicalNotes: 'PAN is undergoing a nosologic revolution. True idiopathic PAN is increasingly rare as genetic causes (DADA2, SAVI, HA20) are identified. Any childhood PAN or PAN with atypical features (strokes, bone marrow failure) should be tested for DADA2. Anti-TNF is the treatment of choice for DADA2, NOT cyclophosphamide. HBV vaccination is the most effective prevention strategy. The lack of RCTs specific to modern PAN makes management heavily reliant on expert consensus and extrapolation from AAV trials.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-dada2', type: 'article', title: 'Mutations in CECR1 (ADA2) in PAN-like vasculitis', source: 'NEJM 2014' },
    { id: 'cite-ffs', type: 'article', title: 'Five Factor Score for PAN and EGPA prognosis', source: 'Medicine 1996/2011' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-gpa', targetType: 'condition', relationship: 'sibling', label: 'GPA' },
    { targetId: 'rheumatology-autoimmune-diseases', targetType: 'topic', relationship: 'parent', label: 'Autoimmune Diseases' },
    { targetId: 'infectious-disease-hepatitis-b', targetType: 'topic', relationship: 'related', label: 'Hepatitis B' },
  ],
  tags: {
    topics: ['rheumatology', 'vasculitis', 'PAN', 'medium-vessel', 'hepatitis-B', 'DADA2'],
    systems: ['musculoskeletal', 'immune', 'renal', 'nervous'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
