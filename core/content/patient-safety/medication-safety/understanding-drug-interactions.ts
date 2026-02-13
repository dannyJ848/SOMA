/**
 * Understanding Drug Interactions
 *
 * How medications can interact with each other, food, and supplements.
 */

import { EducationalContent } from '../../types';

export const understandingDrugInteractions: EducationalContent = {
  id: 'concept-understanding-drug-interactions',
  type: 'concept',
  name: 'Understanding Drug Interactions',
  alternateNames: ['Drug-Drug Interactions', 'Medication Interactions', 'Drug-Food Interactions'],

  levels: {
    1: {
      level: 1,
      summary: 'Some medicines don\'t mix well together, and some foods can change how medicine works in your body.',
      explanation: `Sometimes when you take two different medicines together, they can affect each other. This is called a drug interaction.

**Why Does This Matter?**
- One medicine might make another work too well
- One medicine might stop another from working
- Mixing certain medicines can make you feel sick

**What Can Interact?**
- Medicines with other medicines
- Medicines with food
- Medicines with drinks (like grapefruit juice)
- Medicines with vitamins or supplements

**How to Stay Safe:**
- Tell your doctor ALL the medicines you take
- Include vitamins and supplements
- Ask if any foods affect your medicine
- Use one pharmacy so they can check for interactions

**Questions to Ask:**
- "Can I take this with my other medicines?"
- "Are there any foods I should avoid?"
- "Should I take this with food or on an empty stomach?"

**Remember:**
Always tell your doctor and pharmacist about everything you take - even if you think it's not important!`,
      keyTerms: [
        { term: 'drug interaction', definition: 'When one medicine affects how another medicine works' },
        { term: 'supplement', definition: 'Vitamins, minerals, or herbs you take for health' },
        { term: 'side effect', definition: 'An unwanted effect from medicine' },
      ],
      analogies: [
        'Drug interactions are like mixing the wrong ingredients in a recipe - the result might not turn out right.',
      ],
      examples: [
        'Drinking grapefruit juice can make some medicines too strong.',
        'Some antacids can stop other medicines from being absorbed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug interactions occur when substances affect how medications work, potentially reducing effectiveness or causing harmful effects.',
      explanation: `Drug interactions can affect medication safety and effectiveness. Understanding them helps you protect yourself.

**Types of Drug Interactions:**

**1. Drug-Drug Interactions**
When one medication affects another:
- May increase or decrease effects
- May create new side effects
- Can be dangerous or beneficial

**2. Drug-Food Interactions**
When food affects medication:
- Grapefruit with certain medications
- Dairy with some antibiotics
- Vitamin K foods with blood thinners
- Alcohol with many medications

**3. Drug-Supplement Interactions**
When supplements affect medication:
- St. John's Wort with antidepressants
- Garlic supplements with blood thinners
- Calcium with thyroid medication

**4. Drug-Condition Interactions**
When a medication affects another health condition:
- Decongestants raising blood pressure
- NSAIDs affecting kidney function

**Common Problematic Interactions:**
| Drug | Interacts With | Effect |
|------|---------------|--------|
| Blood thinners | NSAIDs | Increased bleeding |
| Blood pressure meds | NSAIDs | Reduced effectiveness |
| Antidepressants | Certain cold medicines | Dangerous reactions |
| Thyroid medication | Calcium, iron | Reduced absorption |

**Protecting Yourself:**
1. Keep a complete medication list
2. Use one pharmacy when possible
3. Ask about new prescriptions
4. Read medication guides
5. Report new symptoms promptly

**Questions for Healthcare Providers:**
- Does this interact with anything I'm taking?
- When should I take this relative to other meds?
- Are there any foods or drinks to avoid?
- What symptoms should I watch for?`,
      keyTerms: [
        { term: 'drug-drug interaction', definition: 'When one medication affects the action of another medication' },
        { term: 'contraindication', definition: 'A reason why a medication should not be used' },
        { term: 'absorption', definition: 'How medicine gets from your stomach into your bloodstream' },
        { term: 'metabolism', definition: 'How your body breaks down and processes medication' },
      ],
      analogies: [
        'Drug interactions are like traffic - too many things happening at once can cause problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Drug interactions involve pharmacokinetic and pharmacodynamic mechanisms that can alter medication absorption, distribution, metabolism, or elimination, requiring systematic evaluation.',
      explanation: `## Drug Interaction Mechanisms

### Pharmacokinetic Interactions (What the Body Does to the Drug)

**Absorption:**
| Mechanism | Example |
|-----------|---------|
| Chelation | Tetracycline + calcium = reduced antibiotic absorption |
| pH changes | Antacids reduce absorption of some medications |
| Motility changes | Opioids slow absorption of other drugs |
| Transporter effects | P-glycoprotein inhibitors increase drug absorption |

**Distribution:**
- Protein binding competition
- Displacement from binding sites
- Example: Warfarin displaced by aspirin, increasing bleeding risk

**Metabolism:**
| Enzyme System | Effect |
|---------------|--------|
| CYP450 inducers | Decrease drug levels (e.g., rifampin) |
| CYP450 inhibitors | Increase drug levels (e.g., grapefruit) |
| Genetic variations | Variable drug metabolism between individuals |

**Elimination:**
- Renal excretion changes
- Competition for tubular secretion
- Example: Probenecid increases penicillin levels

### Pharmacodynamic Interactions (What the Drug Does to the Body)

**Additive Effects:**
- Same direction effects compound
- Example: Sedatives + opioids = excessive sedation

**Synergistic Effects:**
- Combined effect greater than sum
- Example: Sulfamethoxazole + trimethoprim = enhanced antibiotic effect

**Antagonistic Effects:**
- Opposing effects cancel out
- Example: Beta-agonist + beta-blocker = reduced bronchodilation

### High-Risk Interaction Categories

**Anticoagulants/Antiplatelets:**
- NSAIDs increase bleeding risk
- Vitamin K foods reduce warfarin effectiveness
- Many drugs affect warfarin metabolism

**Drugs with Narrow Therapeutic Index:**
- Digoxin
- Lithium
- Phenytoin
- Warfarin
- Aminoglycosides

**QT-Prolonging Drugs:**
- Multiple QT-prolonging drugs increase arrhythmia risk
- Many drug classes can prolong QT

### Evaluating Interaction Significance

**Clinical Significance Factors:**
| Factor | Consideration |
|--------|---------------|
| Severity | Minor, moderate, or major |
| Probability | How likely to occur |
| Documentation | Quality of evidence |
| Patient factors | Age, organ function, genetics |

**When to Be Concerned:**
- Narrow therapeutic index drugs involved
- Major severity rating
- Well-documented interaction
- Patient has risk factors

### Monitoring for Interactions

**Signs of Potential Interaction:**
- New symptoms after adding medication
- Loss of therapeutic effect
- Signs of toxicity
- Unusual lab results

**Actions to Take:**
1. Report symptoms to provider
2. Don't stop medications without guidance
3. Document what you observed
4. Bring all medications to appointments`,
      keyTerms: [
        { term: 'pharmacokinetics', definition: 'How the body processes drugs: absorption, distribution, metabolism, elimination' },
        { term: 'pharmacodynamics', definition: 'How drugs affect the body at their sites of action' },
        { term: 'CYP450', definition: 'Cytochrome P450 enzyme system responsible for metabolizing many drugs' },
        { term: 'narrow therapeutic index', definition: 'Drugs where small dose changes significantly affect effectiveness or cause toxicity' },
        { term: 'QT prolongation', definition: 'Heart rhythm change that can lead to dangerous arrhythmias' },
      ],
      clinicalNotes: 'The most clinically significant interactions involve anticoagulants, drugs with narrow therapeutic indices, and combinations causing excessive sedation or QT prolongation.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of drug interactions requires knowledge of enzymatic pathways, transporter systems, pharmacogenomics, and systematic approaches to evaluating and managing complex medication regimens.',
      explanation: `## Advanced Drug Interaction Science

### CYP450 Enzyme System Deep Dive

**Major CYP Enzymes and Substrates:**
| Enzyme | Common Substrates | Inhibitors | Inducers |
|--------|------------------|------------|----------|
| CYP3A4 | Atorvastatin, cyclosporine | Ketoconazole, grapefruit | Rifampin, St. John's Wort |
| CYP2D6 | Codeine, metoprolol | Fluoxetine, paroxetine | (Not significantly induced) |
| CYP2C9 | Warfarin, phenytoin | Fluconazole | Rifampin |
| CYP2C19 | Omeprazole, clopidogrel | Omeprazole | Rifampin |
| CYP1A2 | Theophylline, caffeine | Fluvoxamine | Smoking |

**Time Course of Interactions:**
- Inhibition: Usually immediate
- Induction: Takes days to weeks to develop
- After discontinuation: Effects persist until new enzyme synthesis

### Drug Transporters

**P-glycoprotein (P-gp):**
- Efflux pump in gut, liver, kidney, brain
- Inhibitors increase absorption/tissue levels
- Inducers decrease drug exposure
- Example: Ritonavir inhibits P-gp, increasing digoxin levels

**OATP Transporters:**
- Hepatic uptake transporters
- Inhibition can dramatically increase statin levels
- Example: Cyclosporine + atorvastatin = myopathy risk

### Pharmacogenomic Considerations

**Genetic Variations Affecting Interactions:**
| Gene | Effect | Clinical Impact |
|------|--------|-----------------|
| CYP2D6 poor metabolizer | Codeine ineffective | Alternative analgesics needed |
| CYP2C19 poor metabolizer | Increased omeprazole effect | Potential for clopidogrel interaction change |
| UGT1A1*28 | Reduced glucuronidation | Irinotecan toxicity risk |

**When Pharmacogenomics Matters:**
- High-risk medications
- Multiple interacting drugs
- Unexpected responses
- Narrow therapeutic index

### Polypharmacy Management

**Systematic Evaluation:**
1. Complete medication history (including OTC, supplements)
2. Interaction database screening
3. Clinical significance assessment
4. Risk vs. benefit evaluation
5. Monitoring plan development
6. Patient education

**Managing Unavoidable Interactions:**
- Dose adjustment
- Timing separation
- Enhanced monitoring
- Alternative medications
- Patient education on warning signs

### Complex Interaction Scenarios

**Multi-Drug Interactions:**
- Three or more drugs with interconnected effects
- May compound or cancel individual interactions
- Require careful analysis

**Example Scenario:**
Patient on warfarin starts fluconazole (CYP2C9 inhibitor) + acetaminophen (INR effect):
- Both increase bleeding risk
- Enhanced monitoring required
- Consider alternative antifungal

### Resources for Interaction Checking

**Evidence-Based Databases:**
- Lexicomp
- Micromedex
- Clinical Pharmacology
- UpToDate drug interactions

**Free Patient Resources:**
- Drugs.com interaction checker
- Medscape drug interaction checker

**Limitations of Automated Checkers:**
- Alert fatigue from excessive warnings
- May miss complex interactions
- Don't account for patient-specific factors
- Require clinical interpretation`,
      keyTerms: [
        { term: 'CYP3A4', definition: 'Most abundant CYP enzyme, metabolizes approximately 50% of drugs' },
        { term: 'P-glycoprotein', definition: 'Efflux transporter that pumps drugs out of cells, affecting absorption and distribution' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variations affect drug response' },
        { term: 'polypharmacy', definition: 'Use of multiple medications, typically five or more, increasing interaction risk' },
        { term: 'enzyme induction', definition: 'Increased enzyme production leading to faster drug metabolism over time' },
      ],
      clinicalNotes: 'CYP3A4 is responsible for metabolizing approximately 50% of medications. Inhibitors like ketoconazole and grapefruit juice can dramatically increase levels of substrates, while inducers like rifampin can render medications ineffective.',
    },
    5: {
      level: 5,
      summary: 'Expert understanding of drug interactions integrates molecular pharmacology, systems pharmacology approaches, clinical decision support optimization, and patient advocacy within complex therapeutic scenarios.',
      explanation: `## Expert-Level Drug Interaction Management

### Molecular Basis of Interactions

**Receptor-Level Interactions:**
- Competitive antagonism kinetics
- Allosteric modulation effects
- Receptor up/down-regulation implications
- Signal transduction pathway crosstalk

**Protein Binding Dynamics:**
- Concentration-dependent displacement
- Free drug fraction changes
- Clinical significance thresholds
- Impact on volume of distribution

### Systems Pharmacology Approaches

**Network Pharmacology:**
- Drug-target-disease networks
- Polypharmacology considerations
- Off-target effect predictions
- Systems-level interaction modeling

**Quantitative Prediction:**
- Physiologically-based pharmacokinetic (PBPK) modeling
- Drug interaction prediction
- Individual patient simulation
- Clinical trial extrapolation

### Clinical Decision Support Optimization

**Managing Alert Systems:**
| Alert Level | Response |
|-------------|----------|
| Contraindicated | Avoid combination; requires alternative |
| Major | Verify benefit outweighs risk; monitor closely |
| Moderate | Consider monitoring; patient education |
| Minor | Minimal clinical action usually needed |

**Alert Fatigue Mitigation:**
- Tiered alert systems
- Patient-specific filtering
- Context-aware alerting
- Clinical significance weighting

### Complex Clinical Scenarios

**Transplant Medicine:**
- Immunosuppressant interactions critical
- CYP3A4 and P-gp central
- Narrow therapeutic windows
- Organ function changes affect interactions

**Oncology:**
- Targeted therapy interactions
- Supportive care drug considerations
- Drug-disease interactions
- Pharmacogenomic implications

**HIV/AIDS:**
- Protease inhibitor CYP3A4 effects
- Complex regimen interactions
- Opportunistic infection treatment
- Aging population considerations

### Regulatory and Safety Framework

**FDA Drug Interaction Guidance:**
- In vitro evaluation requirements
- Clinical study recommendations
- Labeling requirements
- Post-market surveillance

**Pharmacovigilance:**
- Signal detection for interactions
- Case reports and registries
- Risk evaluation and mitigation strategies (REMS)
- Drug safety communications

### Patient Advocacy in Complex Therapy

**Advocating for Interaction Review:**
- Request comprehensive medication review
- Seek clinical pharmacist consultation
- Ask about interaction monitoring plans
- Understand risk communication

**When to Escalate Concerns:**
- Multiple providers prescribing
- Complex regimens without coordination
- New symptoms potentially interaction-related
- Inadequate monitoring ordered

### Emerging Interaction Science

**Pharmacomicrobiomics:**
- Gut microbiome drug metabolism
- Antibiotic effects on other drug metabolism
- Individual microbiome variation

**Real-World Data:**
- Electronic health record mining
- Claims data analysis
- Registry-based interaction discovery
- Machine learning prediction

**Personalized Interaction Assessment:**
- Genetic testing integration
- Individual pharmacokinetic modeling
- Biomarker-guided therapy
- Therapeutic drug monitoring optimization`,
      keyTerms: [
        { term: 'PBPK modeling', definition: 'Physiologically-based pharmacokinetic modeling - mathematical simulation of drug disposition in the body' },
        { term: 'systems pharmacology', definition: 'Approach integrating drug action across biological networks' },
        { term: 'pharmacomicrobiomics', definition: 'Study of how gut microbiome affects drug metabolism and response' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA-required safety programs for certain drugs' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels in blood to optimize dosing and detect interactions' },
      ],
      clinicalNotes: `Expert drug interaction competencies:
1. Understanding molecular basis of interactions
2. Systems pharmacology approaches to complex therapy
3. Clinical decision support optimization
4. Management of complex clinical scenarios
5. Regulatory framework knowledge
6. Effective patient advocacy
7. Emerging interaction science awareness
8. Personalized interaction assessment strategies`,
    },
  },

  media: [],

  citations: [
    {
      id: 'fda-interactions',
      type: 'website',
      title: 'Drug Interactions: What You Should Know',
      source: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/drugs/drug-interactions-labeling/drug-interactions-what-you-should-know',
    },
  ],

  crossReferences: [
    { targetId: 'concept-checking-prescriptions', targetType: 'concept', relationship: 'related', label: 'Checking Prescriptions' },
    { targetId: 'concept-medication-reconciliation', targetType: 'concept', relationship: 'related', label: 'Medication Reconciliation' },
    { targetId: 'concept-avoiding-medication-errors', targetType: 'concept', relationship: 'related', label: 'Avoiding Medication Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medication-safety', 'drug-interactions', 'pharmacology'],
    clinicalRelevance: 'critical',
    keywords: ['drug interactions', 'medication interactions', 'drug-food interactions', 'CYP450'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default understandingDrugInteractions;
