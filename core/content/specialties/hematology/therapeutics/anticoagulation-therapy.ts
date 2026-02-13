/**
 * Anticoagulation Therapy - Comprehensive Educational Content
 *
 * The clinical use of anticoagulants for prevention and treatment
 * of thrombotic disorders.
 */

import { EducationalContent } from '../../../types';

export const anticoagulationTherapy: EducationalContent = {
  id: 'topic-anticoagulation-therapy',
  type: 'topic',
  name: 'Anticoagulation Therapy',
  alternateNames: ['Blood thinners', 'Anticoagulant therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Anticoagulation therapy uses medicines to prevent blood clots from forming or growing, helping to prevent heart attacks, strokes, and other clotting problems.',
      explanation: `Anticoagulants (blood thinners) are medicines that help prevent harmful blood clots.

**Why They Are Used:**
- Prevent blood clots in the legs and lungs
- Prevent stroke in people with irregular heartbeat (atrial fibrillation)
- Protect people with artificial heart valves
- Treat existing blood clots

**Types of Blood Thinners:**
- Warfarin (Coumadin) - older pill, needs blood monitoring
- Newer pills (Eliquis, Xarelto) - easier to take
- Heparin - given through IV or injection

**Important Points:**
- Increases risk of bleeding
- Need to be careful with injuries
- Some require regular blood tests
- Some have dietary restrictions (vitamin K with warfarin)

**When to Seek Help:**
- Unusual bruising or bleeding
- Blood in urine or stool
- Severe headache
- Heavy menstrual bleeding`,
      keyTerms: [
        { term: 'anticoagulant', definition: 'A medicine that prevents blood clots from forming' },
        { term: 'blood clot', definition: 'A clump of blood that becomes solid inside blood vessels' },
        { term: 'INR', definition: 'A blood test that measures how well warfarin is working' },
      ],
      analogies: [
        'Anticoagulants are like adding oil to a machine to keep parts from sticking together. Too little and things stick (clots form), too much and things slide too easily (bleeding).',
      ],
      examples: [
        'A patient with atrial fibrillation takes a blood thinner to prevent clots from forming in the heart that could travel to the brain and cause a stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anticoagulation involves parenteral (heparins) and oral (warfarin, DOACs) agents with different mechanisms, monitoring requirements, and reversal strategies.',
      explanation: `Anticoagulation therapy encompasses multiple drug classes targeting different parts of the coagulation cascade.

**Anticoagulant Classes:**

| Class | Examples | Target | Monitoring |
|-------|----------|--------|------------|
| UFH | Heparin | AT-mediated Xa/IIa | aPTT, anti-Xa |
| LMWH | Enoxaparin, dalteparin | AT-mediated Xa>IIa | Anti-Xa (sometimes) |
| Fondaparinux | Arixtra | Selective Xa | None routine |
| Warfarin | Coumadin | Vitamin K factors | INR |
| Factor Xa inhibitors | Rivaroxaban, apixaban | Direct Xa | None routine |
| Direct thrombin inhibitor | Dabigatran | Direct IIa | None routine |

**Indications:**
- VTE treatment and prevention
- Atrial fibrillation stroke prevention
- Mechanical heart valve
- Acute coronary syndrome
- Peripheral artery disease

**DOAC Advantages:**
- Fixed dosing, no monitoring
- Rapid onset
- Fewer drug interactions
- Predictable effect

**DOAC Disadvantages:**
- Renal dosing adjustments
- No routine monitoring if adherence questioned
- Cost (though decreasing)
- Drug interactions still exist

**Reversal:**
- UFH: Protamine
- Warfarin: Vitamin K, PCC, FFP
- Dabigatran: Idarucizumab
- Factor Xa inhibitors: Andexanet alfa
- All: Stop drug, supportive care`,
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer agents directly inhibiting Xa or thrombin' },
        { term: 'INR', definition: 'International normalized ratio; standardized PT for warfarin monitoring' },
        { term: 'anti-Xa level', definition: 'Assay measuring heparin/LMWH effect; used for monitoring in special populations' },
        { term: 'PCC', definition: 'Prothrombin complex concentrate; factors II, VII, IX, X for warfarin reversal' },
      ],
      analogies: [
        'Warfarin is like turning down the factory production of clotting factors, while DOACs are like directly blocking the workers (enzymes) already made.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anticoagulation selection requires matching agent pharmacology to indication, patient factors, and risk-benefit assessment with attention to special populations.',
      explanation: `## Heparin and Derivatives

**Unfractionated Heparin:**
- Binds antithrombin, inhibits Xa and IIa
- IV: Immediate onset, short half-life
- Monitoring: aPTT or anti-Xa (preferred)
- Weight-based protocols
- Complications: HIT, osteoporosis

**LMWH:**
- Preferential Xa inhibition
- Longer half-life, predictable dosing
- SQ once or twice daily
- Anti-Xa monitoring: Obesity, renal impairment, pregnancy
- Same HIT risk as UFH (controversial)

**Fondaparinux:**
- Selective factor Xa inhibition
- SQ daily
- No HIT cross-reactivity
- Contraindicated CrCl <30

## Warfarin

**Mechanism:**
- Inhibits vitamin K epoxide reductase
- Reduces functional factors II, VII, IX, X
- Also reduces protein C and S

**Initiation:**
- Start with expected maintenance dose (5mg typical)
- Overlap with heparin ≥5 days AND INR ≥2 for 24h
- Higher starting doses NOT recommended

**Monitoring:**
- INR target 2-3 (most indications)
- INR target 2.5-3.5 (mechanical mitral valve)
- Check INR frequently until stable

**Drug Interactions:**
- CYP2C9 and VKORC1 polymorphisms
- Hundreds of interactions (amiodarone, fluconazole, metronidazole)
- Dietary vitamin K (consistency, not avoidance)

## Direct Oral Anticoagulants

**Dosing:**
| Agent | VTE Treatment | NVAF | Renal Adjustment |
|-------|---------------|------|------------------|
| Rivaroxaban | 15mg BID x 21d → 20mg daily | 20mg with food | CrCl <50: Avoid |
| Apixaban | 10mg BID x 7d → 5mg BID | 5mg BID | 2.5mg if 2 of: age≥80, ≤60kg, Cr≥1.5 |
| Edoxaban | After 5d parenteral: 60mg | 60mg daily | 30mg if CrCl 15-50 |
| Dabigatran | After 5d parenteral: 150mg BID | 150mg BID | 110mg BID if CrCl 30-50 |

**When to Avoid DOACs:**
- Mechanical heart valves
- Severe renal impairment (varies by agent)
- Antiphospholipid syndrome (triple positive)
- Pregnancy

## Indication-Based Selection

**VTE:**
- DOACs preferred for most
- LMWH: Cancer, pregnancy
- Warfarin: Renal failure, cost

**Atrial Fibrillation:**
- DOACs preferred (mortality benefit vs warfarin)
- Warfarin: Mechanical valve, moderate-severe MS

**Mechanical Valve:**
- Warfarin only (DOACs contraindicated)
- INR 2.5-3.5 for mitral
- INR 2-3 for aortic (low risk)`,
      keyTerms: [
        { term: 'HIT', definition: 'Heparin-induced thrombocytopenia; immune-mediated prothrombotic complication' },
        { term: 'NVAF', definition: 'Non-valvular atrial fibrillation; AF without mechanical valve or moderate-severe MS' },
        { term: 'VKORC1', definition: 'Vitamin K epoxide reductase complex 1; warfarin target, polymorphisms affect dosing' },
        { term: 'CYP2C9', definition: 'Cytochrome enzyme metabolizing warfarin; polymorphisms affect dosing' },
      ],
      clinicalNotes: 'DOACs show net clinical benefit over warfarin in NVAF due to lower intracranial hemorrhage risk. However, ensure proper renal dosing - underdosing is common and associated with worse outcomes.',
    },
    4: {
      level: 4,
      summary: 'Anticoagulation management requires understanding pharmacokinetics, perioperative strategies, reversal approaches, and management of complications including bleeding.',
      explanation: `## Pharmacokinetics

**DOAC Comparison:**
| Property | Rivaroxaban | Apixaban | Edoxaban | Dabigatran |
|----------|-------------|----------|----------|------------|
| Target | Xa | Xa | Xa | IIa |
| Prodrug | No | No | No | Yes |
| Renal excretion | 35% | 27% | 50% | 80% |
| Half-life | 7-11h | 12h | 10-14h | 12-17h |
| Reversal | Andexanet | Andexanet | Andexanet | Idarucizumab |

**Drug Interactions:**
- P-gp inhibitors: Increase levels (amiodarone, dronedarone, verapamil)
- P-gp inducers: Decrease levels (rifampin, phenytoin)
- CYP3A4 relevant for rivaroxaban and apixaban

## Perioperative Management

**DOAC Interruption:**
| Bleeding Risk | Normal Renal | CrCl 30-50 |
|---------------|--------------|------------|
| Low | 24h before | 36-48h |
| High | 48h before | 72h+ |

*High bleeding risk: Neuraxial, major surgery, high bleeding procedures*

**Bridging:**
- DOACs: Generally no bridging needed
- Warfarin: Bridge high-risk (mechanical valve, recent VTE)
- Use LMWH or UFH

**Resumption:**
- Low bleed risk: 24 hours post-procedure
- High bleed risk: 48-72 hours

## Reversal Strategies

**Warfarin Reversal:**
| Scenario | Approach |
|----------|----------|
| INR elevated, no bleeding | Hold or low-dose vitamin K PO |
| Minor bleeding | Vitamin K 2.5-5mg PO/IV |
| Major bleeding | 4-factor PCC + vitamin K 10mg IV |
| Life-threatening | 4-factor PCC + vitamin K + ?FFP |

**DOAC Reversal:**
- Dabigatran: Idarucizumab 5g IV (immediate)
- Xa inhibitors: Andexanet alfa (bolus + infusion)
- If unavailable: 4-factor PCC (50 units/kg)
- Supportive: Stop drug, time, activated charcoal if recent ingestion

## Special Populations

**Renal Impairment:**
- Dose adjust by CrCl
- Dabigatran contraindicated CrCl <30
- Warfarin does not require renal adjustment

**Obesity:**
- DOACs: Avoid if >120kg or BMI >40 (limited data)
- Use warfarin or LMWH with anti-Xa monitoring

**Cancer:**
- LMWH or DOAC (edoxaban, rivaroxaban)
- Avoid DOACs with GI/GU malignancy and high bleeding risk
- Duration: While cancer active, minimum 6 months

**Pregnancy:**
- UFH or LMWH only
- Warfarin teratogenic (weeks 6-12)
- DOACs contraindicated

## Complications

**Bleeding Management:**
- Assess severity and site
- Hold anticoagulation
- Reversal based on severity
- Local measures
- Transfuse as needed
- Restart when hemostasis achieved

**HIT Management:**
- Stop all heparin
- Alternative anticoagulation (argatroban, fondaparinux)
- Do NOT give warfarin until platelets recover
- Test: Platelet count fall, 4T score, HIT antibody`,
      keyTerms: [
        { term: 'idarucizumab', definition: 'Dabigatran-specific reversal agent; monoclonal antibody fragment' },
        { term: 'andexanet alfa', definition: 'Factor Xa inhibitor reversal agent; recombinant modified factor Xa' },
        { term: '4-factor PCC', definition: 'Prothrombin complex concentrate with factors II, VII, IX, X' },
        { term: 'P-glycoprotein', definition: 'Drug efflux transporter affecting DOAC absorption/excretion' },
      ],
      clinicalNotes: 'For perioperative DOAC management, CrCl is crucial. Dabigatran is 80% renally cleared - even mild renal impairment prolongs effect significantly.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anticoagulation integrates pharmacogenomics, decision support tools, novel agents, and quality metrics for optimized outcomes across diverse clinical scenarios.',
      explanation: `## Precision Anticoagulation

**Pharmacogenomics:**
- VKORC1: Warfarin sensitivity
- CYP2C9: Warfarin metabolism
- CYP4F2: Minor contribution
- Algorithms incorporating genetics
- CPIC guidelines available

**Clinical Decision Support:**
- Dosing calculators
- Drug interaction alerts
- INR management protocols
- Anticoagulation stewardship

## Extended/Reduced Intensity Therapy

**Extended VTE Prevention:**
- Rivaroxaban 10mg daily (EINSTEIN-Choice)
- Apixaban 2.5mg BID (AMPLIFY-EXT)
- Reduced bleeding, maintained efficacy

**Low-Dose Plus Antiplatelet:**
- COMPASS: Rivaroxaban 2.5mg BID + ASA
- Stable CAD/PAD
- Reduced MACE, increased bleeding

## Novel and Emerging Agents

**Factor XI Inhibitors:**
- Asundexian, milvexian, abelacimab
- Intrinsic pathway targeting
- May reduce bleeding vs Xa inhibitors
- Phase 3 trials ongoing

**Factor XII Inhibitors:**
- Very early development
- Contact pathway targeting

**Modified Heparins:**
- Semuloparin (discontinued)
- Next-gen synthetic pentasaccharides

## Quality Metrics

**Anticoagulation Clinics:**
- Time in therapeutic range (TTR) for warfarin
- Target: >70% TTR
- Improved outcomes with dedicated management

**DOAC Stewardship:**
- Appropriate indication
- Correct dosing (avoid underdosing)
- Renal function monitoring
- Drug interaction review

**Performance Measures:**
- Prescription at discharge for VTE
- Stroke prevention in AF (CHA2DS2-VASc ≥2)
- Reversal agent availability

## Complex Scenarios

**Triple Therapy (AF + PCI):**
- DOAC + P2Y12 inhibitor (clopidogrel preferred)
- Minimize duration of triple therapy
- Consider dual therapy early (DOAC + clopidogrel)
- Augustus, RE-DUAL PCI, ENTRUST trials

**Antiphospholipid Syndrome:**
- Warfarin preferred (TRAPS trial)
- DOACs associated with more events
- Exception: Low-risk APS, consider case-by-case

**Extremes of Weight:**
- >120kg or BMI >40: Prefer warfarin or monitored LMWH
- <50-60kg: Check appropriate dosing

**ESRD/Dialysis:**
- Apixaban approved (though studied mainly in AF)
- Warfarin remains common
- DOACs not removed by dialysis

## Reversal Updates

**Andexanet Alfa:**
- Recombinant modified factor Xa
- Bolus + 2-hour infusion
- Effective for rivaroxaban and apixaban
- Thrombotic events reported
- Very expensive

**4-Factor PCC:**
- Off-label but commonly used
- 50 units/kg for life-threatening bleeding
- Does not directly reverse but provides substrate

**Hemodialysis:**
- Effective for dabigatran removal
- Not effective for Xa inhibitors (protein bound)

## Future Directions

**Factor XI Targeting:**
- Antisense oligonucleotides
- Monoclonal antibodies
- Small molecules

**AI-Guided Dosing:**
- Warfarin dose prediction
- Bleeding risk assessment
- Personalized therapy

**Point-of-Care Testing:**
- DOAC level testing becoming available
- May guide emergency decisions
- Not routine use yet`,
      keyTerms: [
        { term: 'factor XI inhibitors', definition: 'Emerging anticoagulant class targeting intrinsic pathway with potentially lower bleeding risk' },
        { term: 'TTR', definition: 'Time in therapeutic range; quality metric for warfarin management' },
        { term: 'COMPASS', definition: 'Trial showing vascular protection benefit of low-dose rivaroxaban + aspirin' },
        { term: 'TRAPS', definition: 'Trial showing warfarin superiority over rivaroxaban in APS' },
      ],
      clinicalNotes: `**Board Pearls:**
- DOACs preferred over warfarin for NVAF and VTE
- Mechanical valves require warfarin (DOACs contraindicated)
- Dabigatran: Highest renal clearance, use idarucizumab to reverse
- Xa inhibitors: Use andexanet alfa or PCC for reversal
- Warfarin: Bridge with heparin, overlap ≥5 days and INR therapeutic x 2 days
- LMWH or DOAC for cancer-associated VTE
- Triple-positive APS: Warfarin preferred (TRAPS trial)
- Perioperative: CrCl determines DOAC hold duration
- Obesity >120kg: Consider warfarin or monitored LMWH
- Factor XI inhibitors may reduce bleeding - promising pipeline`,
    },
  },

  media: [
    {
      id: 'anticoag-cascade',
      type: 'diagram',
      filename: 'anticoagulant-targets.svg',
      title: 'Anticoagulant Targets in Coagulation Cascade',
      description: 'Sites of action for different anticoagulant classes',
    },
  ],

  citations: [
    {
      id: 'january-2019',
      type: 'article',
      title: '2019 AHA/ACC/HRS Focused Update on Atrial Fibrillation',
      authors: ['January CT', 'Wann LS', 'Calkins H', 'et al'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000665',
    },
  ],

  crossReferences: [
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'DVT' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
  ],

  tags: {
    systems: ['hematologic', 'cardiovascular'],
    topics: ['anticoagulation', 'therapeutics', 'hematology'],
    keywords: ['anticoagulation', 'warfarin', 'DOAC', 'heparin', 'reversal'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default anticoagulationTherapy;
