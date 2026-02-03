/**
 * Poison Control Guide - Comprehensive Educational Content
 *
 * Essential information about when and how to contact poison control,
 * what information to provide, and what to expect.
 *
 * IMPORTANT: In any poisoning emergency, call Poison Control at 1-800-222-1222
 * or 911 for life-threatening situations.
 */

import { EducationalContent } from '../types';
import { POISON_CONTROL_NUMBER } from './types';

export const poisonControlGuide: EducationalContent = {
  id: 'toxicology-poison-control-guide',
  type: 'concept',
  name: 'Poison Control Guide',
  alternateNames: ['When to Call Poison Control', 'Poison Hotline', 'Poisoning Emergency Response'],

  levels: {
    1: {
      level: 1,
      summary: `If you think someone swallowed, breathed in, or touched something poisonous, call Poison Control right away at ${POISON_CONTROL_NUMBER}. It's free, available 24/7, and experts will help you.`,
      explanation: `## What Is Poison Control?

Poison Control is a free hotline you can call anytime, day or night, if you think someone might have been poisoned. Real experts answer the phone and tell you exactly what to do.

**The number is: ${POISON_CONTROL_NUMBER}**

## When Should You Call?

Call Poison Control if someone:
- Swallowed something they shouldn't have (like medicine, cleaning products, or plants)
- Breathed in something that made them feel sick (like fumes or smoke)
- Got something in their eyes that burns or hurts
- Touched something that made their skin burn or itch

## When to Call 911 Instead

Call 911 (not Poison Control) if the person:
- Is not breathing or breathing very strangely
- Won't wake up or is very confused
- Is having a seizure (shaking all over)
- Collapsed or can't stand up
- Has severe chest pain

## What Happens When You Call?

1. An expert will answer the phone
2. They will ask you questions about what happened
3. They will tell you exactly what to do
4. They might call you back to check on the person

## What Should You Know Before Calling?

Try to have this information ready:
- The person's age and weight
- What they were exposed to (have the container if possible)
- How much they might have taken
- When it happened
- How they're feeling right now

## Important Things to Remember

- The call is FREE
- They speak many languages
- You can call for pets too (they'll give you another number)
- You won't get in trouble for calling
- It's better to call than to wait and see`,
      keyTerms: [
        { term: 'poison', definition: 'Something that can make you sick or hurt you if you swallow, breathe, or touch it' },
        { term: 'Poison Control', definition: 'A free phone service with experts who help with poisoning emergencies' },
        { term: 'emergency', definition: 'A serious situation where someone needs help right away' },
        { term: 'antidote', definition: 'A medicine that can stop or reverse the effects of a poison' },
      ],
      analogies: [
        'Poison Control is like having a doctor on the phone who specializes in poisoning - they can give you expert advice right away.',
        'Calling Poison Control is like calling a coach during a game - they guide you through exactly what plays to make.',
      ],
      examples: [
        'A toddler got into grandma\'s pill bottle and might have eaten some pills - call Poison Control.',
        'You mixed two cleaning products and the fumes made you dizzy - call Poison Control.',
        'A child ate some berries from a plant in the yard - call Poison Control to find out if they\'re safe.',
      ],
    },
    2: {
      level: 2,
      summary: `The Poison Control Center (${POISON_CONTROL_NUMBER}) provides 24/7 free expert guidance for poisoning exposures. Specialists assess situations, recommend treatment, and can prevent unnecessary emergency room visits.`,
      explanation: `## Understanding Poison Control Centers

The United States Poison Control System consists of 55 regional poison centers staffed by specialists in poison information (SPIs) - typically nurses or pharmacists with specialized toxicology training. They handle approximately 2.5 million calls annually.

**National Number: ${POISON_CONTROL_NUMBER}**

This single number routes to your regional poison center based on your area code.

## When to Contact Poison Control

**Definitely Call For:**
- Any suspected poisoning exposure, even if no symptoms yet
- Medication errors (wrong dose, wrong medication, double dose)
- Ingestion of unknown substances
- Chemical splashes to eyes or skin
- Inhaled toxic fumes or gases
- Bites from venomous animals or insects
- Mushroom or plant ingestions
- Questions about drug interactions

**Call 911 Instead If:**
- Person is unconscious or unresponsive
- Difficulty breathing or no breathing
- Seizures occurring
- Severe allergic reaction (anaphylaxis)
- Intentional overdose with altered mental status

## Information to Provide

1. **About the person:**
   - Age and estimated weight
   - Medical conditions
   - Current medications
   - Pregnancy status (if applicable)

2. **About the exposure:**
   - Product name (have the container ready)
   - Active ingredients if known
   - Amount ingested/exposed
   - Route (swallowed, inhaled, skin, eyes)
   - Time of exposure

3. **Current symptoms:**
   - What the person is experiencing now
   - Any changes since exposure

## What to Expect

- Average call lasts 10-15 minutes
- Specialist assesses severity
- Specific treatment recommendations given
- Follow-up call may be scheduled
- Documentation is confidential
- They may recommend home treatment, urgent care, or ER

## Common Misconceptions

| Myth | Reality |
|------|---------|
| You should make someone vomit | Almost never recommended - can cause more harm |
| Milk neutralizes poison | Rarely helpful, sometimes harmful |
| Only call for serious cases | Call for ANY suspected exposure |
| They'll send an ambulance | They provide advice, you call 911 if needed |
| It's only for children | Adults can and should call too |`,
      keyTerms: [
        { term: 'Specialist in Poison Information (SPI)', definition: 'Trained healthcare professional who answers Poison Control calls and provides guidance', pronunciation: 'spesh-uh-list' },
        { term: 'exposure', definition: 'Contact with a potentially harmful substance through ingestion, inhalation, skin contact, or eye contact' },
        { term: 'toxicology', definition: 'The study of poisons and their effects on the body', pronunciation: 'tok-sih-KOL-oh-jee' },
        { term: 'decontamination', definition: 'Removing or neutralizing a toxic substance from the body' },
      ],
      analogies: [
        'Poison Control is like a triage nurse for poisonings - they assess severity and direct you to the right level of care.',
        'The specialists are like medical detectives who piece together clues to determine the best course of action.',
      ],
    },
    3: {
      level: 3,
      summary: 'Poison Control Centers operate as part of the American Association of Poison Control Centers (AAPCC) network, providing real-time medical toxicology consultation. They utilize standardized protocols, toxicological databases, and can facilitate direct communication with treating physicians.',
      explanation: `## Poison Control Center Infrastructure

### National Poison Data System (NPDS)
- Real-time database capturing all U.S. poison center cases
- Enables surveillance of poisoning trends
- Identifies emerging toxic threats
- Generates annual reports on poisoning statistics

### Staffing Structure
- **Specialists in Poison Information (SPIs):** Certified nurses, pharmacists
- **Medical Toxicologists:** Board-certified physicians (on-call 24/7)
- **Requires certified poison center status from AAPCC**

### Call Triage Protocol

**Severity Classification:**
| Code | Definition | Action |
|------|------------|--------|
| No effect | No toxicity expected | Home observation |
| Minor | Minimal effects, transient | Home with follow-up |
| Moderate | More pronounced effects | May require treatment |
| Major | Life-threatening | Emergency care required |
| Death | Fatal outcome | - |

## Detailed Assessment Criteria

### When Home Management is Appropriate
- Exposure to non-toxic substance in any amount
- Exposure to minimally toxic substance in small amount
- Asymptomatic patient with low-risk exposure
- Reliable observer available for monitoring
- Access to transportation if symptoms develop

### When to Recommend Emergency Care
- Any symptomatic patient beyond minor symptoms
- Ingestion exceeding toxic threshold
- Delayed-toxicity agents (acetaminophen, sustained-release)
- Need for antidote therapy
- Unable to adequately assess patient remotely
- Intentional overdose (psychiatric evaluation needed)

## Toxicology Consultation Services

### For Healthcare Providers
- Direct physician-to-physician consultation
- Real-time treatment guidance
- Antidote dosing recommendations
- Interpretation of drug levels
- Assistance with enhanced elimination decisions

### Specialty Resources
- Regional toxicology expertise
- Antivenom assistance
- Exotic envenomation consultation
- Chemical exposure guidance
- Drug identification services

## Evidence-Based Recommendations

### Gastrointestinal Decontamination Evolution
Modern poison centers rarely recommend:
- Ipecac-induced emesis (removed from guidelines)
- Routine gastric lavage

Current evidence-based approaches:
- **Activated charcoal:** Selected cases, within 1-2 hours
- **Whole bowel irrigation:** Sustained-release, enteric-coated, drug packets
- **Antidote administration:** When indicated

## Economic Impact
- Cost savings: ~$1.8 billion annually in avoided ER visits
- Average cost per case managed: $39 (vs. $1,500+ ER visit)
- Reduce healthcare utilization while maintaining safety`,
      keyTerms: [
        { term: 'AAPCC', definition: 'American Association of Poison Control Centers - national organization certifying and coordinating poison centers' },
        { term: 'NPDS', definition: 'National Poison Data System - real-time database of all poison center cases for surveillance' },
        { term: 'medical toxicologist', definition: 'Physician with subspecialty training in toxicology, board-certified in medical toxicology' },
        { term: 'activated charcoal', definition: 'Highly porous carbon that adsorbs many toxins in the GI tract, preventing absorption' },
        { term: 'enhanced elimination', definition: 'Techniques to increase removal of absorbed toxins (dialysis, urinary alkalinization, etc.)' },
      ],
      clinicalNotes: 'Poison centers can provide toxidrome-based assessment, nomogram interpretation (acetaminophen, salicylate), and coordinate antivenom distribution from regional stockpiles. Healthcare providers should document poison center consultation in medical records.',
    },
    4: {
      level: 4,
      summary: 'Poison Control Centers integrate clinical toxicology expertise with public health surveillance, utilizing evidence-based treatment algorithms, quantitative risk assessment, and real-time pharmacokinetic modeling to optimize patient outcomes while efficiently allocating healthcare resources.',
      explanation: `## Advanced Toxicological Assessment

### Risk Assessment Framework

**Quantitative Risk Assessment Components:**
1. **Dose estimation:**
   - Maximum potential dose (worst-case scenario)
   - Probable ingested dose
   - Comparison to toxic thresholds (mg/kg for weight-based)

2. **Bioavailability considerations:**
   - Formulation (immediate vs. sustained release)
   - Coingestants affecting absorption
   - GI decontamination timing effect

3. **Patient-specific factors:**
   - Age and developmental stage
   - Hepatic/renal function
   - Enzyme polymorphisms (CYP450)
   - Tolerance (chronic exposure)

### Toxicokinetic Modeling

**Time-Dependent Assessment:**
\`\`\`
Peak effect timing varies by:
- Absorption rate (Tmax)
- Distribution (Vd)
- Metabolism (t1/2)
- Formulation characteristics
\`\`\`

**Clinical Implications:**
- Delayed-toxicity agents require extended observation
- Sustained-release formulations: may need repeat charcoal
- Drug-drug interactions affecting metabolism

## Specific Consultation Scenarios

### Acetaminophen Ingestion
**Risk Stratification Protocol:**
1. Estimate maximum possible dose
2. Time since ingestion
3. Single acute vs. repeated supratherapeutic
4. Apply Rumack-Matthew nomogram (4-24h post-ingestion)
5. Extended nomogram considerations for massive ingestions

**N-Acetylcysteine (NAC) Decision:**
- Level above treatment line: NAC indicated
- Unknown time: NAC until level returns
- Massive ingestion (>32g): Modified protocol consideration

### Toxic Alcohol Assessment
**Osmol and Anion Gap Analysis:**
- Calculate osmol gap: Measured - Calculated osmolality
- Expected contributions: Ethanol, methanol, ethylene glycol
- Anion gap metabolic acidosis development timing

**Fomepizole vs. Ethanol:**
- Mechanism: ADH inhibition preventing toxic metabolite formation
- Fomepizole advantages: Predictable kinetics, no CNS depression
- Dialysis indications: Metabolic acidosis, renal failure, visual symptoms

### Medication Error Assessment
**Therapeutic Index Analysis:**
- Narrow therapeutic index drugs: Higher risk
- Pharmacogenomic considerations
- Drug interaction potentiation

## Enhanced Elimination Guidance

**Dialysis Considerations (EXTRIP Criteria):**
| Factor | Favors Dialysis |
|--------|-----------------|
| Molecular weight | <500 Da |
| Protein binding | <80% |
| Volume of distribution | <1 L/kg |
| Endogenous clearance | Low |
| Clinical severity | Significant toxicity |

**Specific Indications:**
- Lithium: Level >4 mEq/L with toxicity
- Salicylates: Level >100 mg/dL, AMS, pulmonary edema
- Methanol/Ethylene glycol: Metabolic acidosis, renal failure
- Metformin: Lactic acidosis with level >5 mg/L

## Public Health Integration

### Surveillance Functions
- Cluster detection algorithms
- Emerging drug trends (novel psychoactive substances)
- Mass casualty toxicological events
- Post-market drug safety signals

### Outbreak Response
- Natural disasters (carbon monoxide after storms)
- Contaminated products (mass recalls)
- Novel synthetic drugs
- Bioterrorism preparedness`,
      keyTerms: [
        { term: 'Rumack-Matthew nomogram', definition: 'Graph plotting acetaminophen level vs. time post-ingestion to guide N-acetylcysteine treatment decisions' },
        { term: 'osmol gap', definition: 'Difference between measured and calculated serum osmolality; elevated with toxic alcohols' },
        { term: 'EXTRIP', definition: 'Extracorporeal Treatments in Poisoning workgroup - provides evidence-based dialysis recommendations' },
        { term: 'therapeutic index', definition: 'Ratio of toxic dose to therapeutic dose; narrow index drugs have higher overdose risk' },
        { term: 'pharmacogenomics', definition: 'Study of genetic variations affecting drug metabolism and response' },
      ],
      clinicalNotes: 'For complex poisonings, poison centers can arrange direct consultation with medical toxicologists. Real-time guidance on antidote protocols, drug level interpretation, and disposition planning optimizes patient care while reducing unnecessary intensive care admissions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary poison center operations integrate advanced clinical toxicology, pharmacokinetic modeling, population health analytics, and healthcare systems optimization. Medical toxicology consultation extends to complex polypharmacy, novel psychoactive substances, medication safety, and occupational/environmental exposures.',
      explanation: `## Medical Toxicology Consultation Framework

### Systematic Approach to Toxicology Consultation

**ACMT Consultation Model:**
1. **Identify the toxin(s):** Confirm agent, formulation, quantity
2. **Assess severity:** Current and anticipated based on kinetics
3. **Determine trajectory:** Improving, stable, deteriorating
4. **Optimize management:** Evidence-based interventions
5. **Anticipate complications:** Organ-specific monitoring
6. **Disposition planning:** Appropriate level of care

### Complex Case Management

**Polypharmacy Overdose:**
\`\`\`
Considerations:
- Synergistic toxicities (serotonin syndrome + anticholinergic)
- Competing kinetics (absorption, metabolism)
- Prioritized antidote administration
- Enhanced elimination for multiple agents
\`\`\`

**Novel Psychoactive Substances (NPS):**
- Synthetic cathinones: Sympathomimetic toxicity
- Synthetic cannabinoids: Paradoxical effects, severe toxicity
- Novel benzodiazepines: Variable flumazenil response
- Limited detection on standard immunoassays

### Advanced Pharmacokinetic Applications

**Toxicokinetic Modeling in Practice:**

| Parameter | Clinical Application |
|-----------|---------------------|
| First-order kinetics | Most drugs; predictable decline |
| Zero-order kinetics | Saturation (aspirin, phenytoin, ethanol) |
| Michaelis-Menten | Transition between kinetic orders |
| Multi-compartment | Distribution effects on elimination |

**Extracorporeal Treatment Decision-Making:**
- EXTRIP guidelines for specific poisonings
- Cost-benefit analysis of dialysis
- Continuous vs. intermittent modalities
- Duration of treatment endpoints

### Antidote Stewardship

**Critical Antidote Management:**

| Antidote | Indication | Availability Challenge |
|----------|------------|----------------------|
| Digoxin Fab | Digoxin toxicity | Cost (~$5,000/vial) |
| Fomepizole | Toxic alcohols | ~$1,000/vial |
| Crotalidae polyvalent | Pit viper envenomation | 4-6 vials often needed |
| Prussian blue | Thallium, radioactive cesium | Regional stockpile |
| Hydroxocobalamin | Cyanide | $600-800/kit |

**Antivenom Consultation Services:**
- Species identification assistance
- Dosing algorithms (ISS, NAST)
- Allergic reaction management
- Non-native species exposure protocols

### Quality Metrics and Outcomes

**Poison Center Performance Measures:**
- Median time to answer: <30 seconds
- Case closure rate within 24 hours
- Accuracy of severity coding
- Healthcare utilization appropriateness
- Patient outcome tracking

**Research Integration:**
- Prospective case series for emerging agents
- Treatment algorithm validation
- Drug safety signal detection
- Post-market surveillance contributions

### Integration with Healthcare Systems

**Medication Safety Initiatives:**
- Medication error pattern recognition
- Look-alike/sound-alike drug identification
- High-alert medication management
- Transitions of care vulnerabilities

**Electronic Health Record Integration:**
- Poison center documentation in EHR
- Drug level result routing
- Clinical decision support triggers
- Population health analytics

### Occupational and Environmental Toxicology

**Workplace Exposure Assessment:**
- OSHA exposure limit interpretation
- Biological monitoring guidance
- Chelation therapy decisions
- Return-to-work recommendations

**Environmental Exposure Consultation:**
- Lead level management protocols
- Mercury exposure assessment
- Pesticide poisoning (organophosphates, pyrethroids)
- Chemical spill/release response

### Future Directions

**Emerging Technologies:**
- AI-assisted triage algorithms
- Predictive modeling for outcomes
- Telemedicine integration
- Mobile application development
- Real-time biosurveillance

**Precision Toxicology:**
- Pharmacogenomic-guided management
- Point-of-care testing integration
- Personalized antidote dosing
- Biomarker development`,
      keyTerms: [
        { term: 'ACMT', definition: 'American College of Medical Toxicology - professional society of medical toxicologists' },
        { term: 'novel psychoactive substances', definition: 'Synthetic compounds designed to mimic effects of controlled substances, often with unpredictable toxicity' },
        { term: 'EXTRIP', definition: 'Extracorporeal Treatments in Poisoning workgroup providing evidence-based recommendations for dialysis in poisoning' },
        { term: 'Digoxin Fab', definition: 'Digoxin immune Fab - antigen-binding fragments that neutralize digoxin' },
        { term: 'ISS', definition: 'Integrated Severity Score - clinical scoring system for envenomation severity' },
        { term: 'antidote stewardship', definition: 'Systematic approach to appropriate antidote selection, dosing, and inventory management' },
      ],
      clinicalNotes: `Clinical Pearls for Toxicology Consultation:
1. Always obtain serial drug levels for agents with delayed peaks or toxicity
2. Calculate medication errors in mg/kg for pediatric patients
3. Sustained-release formulations may require extended observation beyond typical timeframes
4. Coingestants can dramatically alter expected kinetics and toxicity profiles
5. Poison center consultation should be documented including specialist name and recommendations
6. For massive ingestions, standard treatment algorithms may need modification (e.g., high-dose NAC protocols)
7. Antivenom should be administered within hours of envenomation for optimal efficacy
8. Consider social work/psychiatry consultation for intentional overdoses even if medically stable`,
    },
  },

  media: [
    {
      id: 'poison-control-flowchart',
      type: 'diagram',
      filename: 'poison-control-decision-flowchart.svg',
      title: 'When to Call Poison Control vs. 911',
      description: 'Decision flowchart for poisoning emergencies',
    },
  ],

  citations: [
    {
      id: 'aapcc-annual-report',
      type: 'article',
      title: 'Annual Report of the American Association of Poison Control Centers',
      authors: ['Gummin, D.D.', 'et al.'],
      source: 'Clinical Toxicology',
      url: 'https://www.aapcc.org/annual-reports',
      license: 'Open Access',
    },
    {
      id: 'goldfrank-toxicology',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      source: 'McGraw-Hill',
      chapter: 'Principles of Managing the Poisoned Patient',
    },
  ],

  crossReferences: [
    { targetId: 'toxicology-household-poisonings', targetType: 'topic', relationship: 'related', label: 'Household Poisonings' },
    { targetId: 'toxicology-drug-overdoses', targetType: 'topic', relationship: 'related', label: 'Drug Overdoses' },
    { targetId: 'toxicology-antidotes', targetType: 'topic', relationship: 'related', label: 'Antidotes and Treatments' },
  ],

  tags: {
    systems: ['emergency-medicine', 'toxicology'],
    topics: ['poison-control', 'emergency-response', 'patient-education'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default poisonControlGuide;
