/**
 * Body Temperature - Vital Signs
 *
 * Comprehensive content on body temperature measurement, normal ranges,
 * abnormalities, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const bodyTemperature: EducationalContent = {
  id: 'physical-exam-vital-signs-temperature',
  type: 'concept',
  name: 'Body Temperature',
  alternateNames: ['Core Temperature', 'Vital Sign - Temperature'],

  levels: {
    1: {
      level: 1,
      summary: 'Body temperature tells us if you have a fever or if your body is too cold.',
      explanation: `Your body works best at a certain temperature - around 98.6 degrees Fahrenheit (37 degrees Celsius). This is like a thermostat in your house keeping things just right.

**Normal Temperature:**
- Around 98.6°F (37°C) - this is what most people have
- It's normal for your temperature to go up and down a little during the day
- It's usually lowest in the morning and highest in the late afternoon

**Fever:**
When your temperature is too high (over 100.4°F or 38°C), you have a fever. This usually means your body is fighting germs like:
- A cold or flu
- An ear infection
- Strep throat

**Too Cold:**
When your body gets too cold (below 95°F or 35°C), it's called hypothermia. This can happen if you're outside in very cold weather for too long.

**Where to Take Temperature:**
- Under the tongue (mouth)
- Under the arm
- In the ear
- On the forehead`,
      keyTerms: [
        { term: 'fever', definition: 'When your body temperature is higher than normal, usually meaning you are sick' },
        { term: 'thermometer', definition: 'A tool that measures how hot or cold something is' },
        { term: 'hypothermia', definition: 'When your body gets dangerously cold' },
      ],
      analogies: [
        'Your body is like a house with a thermostat - it tries to keep the inside at just the right temperature.',
        'A fever is like your body turning up the heat to kill germs, like cooking them out.',
      ],
      examples: [
        'When you have the flu, your body raises its temperature to help fight the virus.',
        'Athletes can have slightly higher temperatures right after exercise.',
      ],
    },
    2: {
      level: 2,
      summary: 'Body temperature reflects the balance between heat production and heat loss, with fever indicating an elevated set point due to infection or inflammation.',
      explanation: `## Normal Body Temperature

The normal body temperature range is 97.8-99.1°F (36.5-37.3°C) when measured orally. Temperature varies based on:

**Daily Variation (Circadian Rhythm):**
- Lowest: 4-6 AM (can be 97°F/36.1°C)
- Highest: 4-8 PM (can be 99°F/37.2°C)

**Measurement Sites and Normal Ranges:**
| Site | Normal Range | Notes |
|------|-------------|-------|
| Oral | 97.8-99.1°F (36.5-37.3°C) | Most common, wait 15 min after eating/drinking |
| Rectal | 0.5-1°F higher than oral | Most accurate core temperature |
| Axillary (armpit) | 0.5-1°F lower than oral | Least accurate |
| Tympanic (ear) | Similar to oral | Quick but technique-dependent |
| Temporal (forehead) | Similar to oral | Convenient but variable |

## Fever (Pyrexia)

**Definition:** Temperature ≥100.4°F (38°C) or ≥101°F (38.3°C) orally

**Common Causes:**
- Infections (bacterial, viral, fungal)
- Inflammatory conditions
- Medications (drug fever)
- Heat stroke
- Hyperthyroidism

**Fever Patterns:**
- **Continuous:** Stays elevated with minimal variation
- **Intermittent:** Spikes then returns to normal
- **Remittent:** Fluctuates but never returns to normal

## Hypothermia

**Definition:** Core temperature <95°F (35°C)

**Stages:**
- Mild: 90-95°F (32-35°C) - shivering, confusion
- Moderate: 82-90°F (28-32°C) - shivering stops, drowsiness
- Severe: <82°F (<28°C) - unconscious, risk of cardiac arrest

**Causes:**
- Cold exposure
- Alcohol intoxication
- Hypothyroidism
- Sepsis (paradoxically)`,
      keyTerms: [
        { term: 'pyrexia', definition: 'Medical term for fever', pronunciation: 'py-REK-see-ah' },
        { term: 'circadian rhythm', definition: 'The natural 24-hour cycle of body functions including temperature' },
        { term: 'tympanic', definition: 'Relating to the ear drum; ear temperature measurement', pronunciation: 'tim-PAN-ik' },
        { term: 'hypothermia', definition: 'Dangerously low body temperature below 95°F (35°C)' },
      ],
      analogies: [
        'Fever is like your body\'s thermostat being turned up intentionally to make the environment less friendly for germs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Body temperature regulation involves the hypothalamic thermoregulatory center, with fever resulting from pyrogen-induced prostaglandin E2 synthesis resetting the hypothalamic set point.',
      explanation: `## Thermoregulation Physiology

**Hypothalamic Control:**
The preoptic area of the anterior hypothalamus serves as the body's thermostat:
- Receives input from peripheral and central thermoreceptors
- Warm-sensitive neurons predominate
- Set point normally maintained at ~37°C

**Heat Production Mechanisms:**
- Basal metabolic rate (BMR)
- Muscular activity (including shivering thermogenesis)
- Thyroid hormone effects
- Sympathetic activation (catecholamines)
- Brown adipose tissue (non-shivering thermogenesis)

**Heat Dissipation Mechanisms:**
- Radiation (primary mechanism)
- Convection
- Conduction
- Evaporation (sweating)
- Behavioral modifications

## Fever Pathophysiology

**Pyrogen-Induced Fever:**
1. Exogenous pyrogens (bacterial LPS, viral components) → activate monocytes/macrophages
2. Release of endogenous pyrogens (IL-1, IL-6, TNF-α, IFN-γ)
3. Circulating pyrogens act on circumventricular organs (OVLT)
4. Induction of COX-2 → Prostaglandin E2 (PGE2) synthesis
5. PGE2 elevates hypothalamic set point
6. Body initiates heat-generating responses (vasoconstriction, shivering)

**Beneficial Effects of Fever:**
- Enhanced immune function (increased neutrophil and T-cell activity)
- Inhibition of pathogen replication
- Increased interferon production

## Fever Patterns and Clinical Correlations

| Pattern | Description | Associated Conditions |
|---------|-------------|----------------------|
| Continuous | Variation <1°C, remains elevated | Typhoid fever, gram-negative pneumonia |
| Remittent | Variation >1°C, never normal | Infective endocarditis, viral infections |
| Intermittent | Normal periods between spikes | Malaria, pyogenic abscess |
| Hectic (septic) | Wide swings, rigors | Bacteremia, sepsis |
| Pel-Ebstein | Cyclic 1-2 week pattern | Hodgkin lymphoma |
| Drug fever | Persistent despite antibiotics | Medication reaction |

## Hyperthermia vs. Fever

| Feature | Fever | Hyperthermia |
|---------|-------|--------------|
| Set point | Elevated | Normal |
| Mechanism | Pyrogen-mediated | Heat gain > loss |
| Response to antipyretics | Yes | No |
| Examples | Infection | Heat stroke, malignant hyperthermia |

## Clinical Measurements

**Core Temperature Estimation:**
- Pulmonary artery catheter (gold standard)
- Esophageal probe
- Rectal temperature (practical gold standard)
- Bladder temperature

**Accuracy Hierarchy:**
Rectal > Oral > Tympanic > Temporal > Axillary`,
      keyTerms: [
        { term: 'pyrogen', definition: 'Substance that induces fever; can be exogenous (microbial) or endogenous (cytokines)', pronunciation: 'PY-roh-jen' },
        { term: 'prostaglandin E2', definition: 'Lipid mediator synthesized by COX-2 that elevates hypothalamic temperature set point' },
        { term: 'OVLT', definition: 'Organum vasculosum of the lamina terminalis; circumventricular organ where circulating pyrogens access the hypothalamus' },
        { term: 'rigors', definition: 'Severe shivering with teeth chattering, often accompanying high fever spikes' },
        { term: 'Pel-Ebstein fever', definition: 'Cyclic fever pattern with 1-2 weeks of fever alternating with afebrile periods; classically associated with Hodgkin lymphoma' },
      ],
      clinicalNotes: 'Antipyretics (acetaminophen, NSAIDs) work by inhibiting COX-2 and reducing PGE2 synthesis. They are ineffective in hyperthermia because the set point is not elevated.',
    },
    4: {
      level: 4,
      summary: 'Temperature dysregulation encompasses complex neuroimmune interactions, with clinical manifestations reflecting underlying etiology and requiring systematic differential diagnosis.',
      explanation: `## Molecular Mechanisms of Thermoregulation

**Thermoreceptor Signaling:**
- Warm-sensitive neurons: TRPV1, TRPV3, TRPV4 channels
- Cold-sensitive neurons: TRPM8, TRPA1 channels
- Integration in preoptic area via glutamatergic/GABAergic circuits

**Fever Molecular Pathway:**
\`\`\`
PAMPs/DAMPs → TLR/NLR activation → NF-κB signaling
                        ↓
              IL-1β, IL-6, TNF-α release
                        ↓
              OVLT endothelial COX-2 induction
                        ↓
                   PGE2 synthesis
                        ↓
              EP3 receptor on POA neurons
                        ↓
           Decreased warm-sensitive neuron firing
                        ↓
              Elevated thermoregulatory set point
\`\`\`

## Clinical Fever Syndromes

**Fever of Unknown Origin (FUO):**
Classic criteria (Petersdorf & Beeson):
- Fever >38.3°C on multiple occasions
- Duration >3 weeks
- Uncertain diagnosis after 1 week of intelligent investigation

**FUO Differential (by category):**
| Category | Examples | Approximate % |
|----------|----------|---------------|
| Infections | Endocarditis, TB, abscess, osteomyelitis | 20-30% |
| Malignancy | Lymphoma, leukemia, RCC, hepatoma | 20-30% |
| Connective tissue | Adult Still's disease, SLE, vasculitis | 15-25% |
| Miscellaneous | Drug fever, factitious, DVT/PE | 15-20% |
| Undiagnosed | | 10-20% |

**Neutropenic Fever:**
- Definition: ANC <500/μL + temperature ≥38.3°C once or ≥38°C for 1 hour
- Medical emergency requiring immediate blood cultures and empiric broad-spectrum antibiotics
- Common pathogens: Gram-negative bacilli, S. aureus, viridans streptococci

## Hyperthermia Syndromes

**Malignant Hyperthermia:**
- Genetic: RYR1 or CACNA1S mutations (AD inheritance)
- Trigger: Volatile anesthetics, succinylcholine
- Mechanism: Uncontrolled calcium release from SR → sustained muscle contraction → heat production
- Treatment: Dantrolene (RYR1 antagonist), cooling, supportive care
- Mortality: ~5% with treatment, >80% untreated

**Neuroleptic Malignant Syndrome (NMS):**
- Cause: Dopamine antagonist exposure (antipsychotics)
- Features: Hyperthermia, rigidity, altered mental status, autonomic instability
- Labs: Elevated CK, leukocytosis
- Treatment: D/C offending agent, dantrolene, bromocriptine

**Serotonin Syndrome:**
- Cause: Excess serotonergic activity (SSRIs, MAOIs, tramadol)
- Features: Hyperthermia, agitation, tremor, hyperreflexia, clonus, diaphoresis
- Treatment: D/C serotonergic agents, benzodiazepines, cyproheptadine

## Hypothermia Management

**Rewarming Strategies:**
| Severity | Core Temp | Approach |
|----------|-----------|----------|
| Mild | 32-35°C | Passive external (blankets, warm environment) |
| Moderate | 28-32°C | Active external (forced-air warming, warm blankets) |
| Severe | <28°C | Active internal (warmed IV fluids, bladder/gastric lavage, ECMO) |

**Rewarming Considerations:**
- Afterdrop: Core temperature may initially decrease during rewarming
- Rewarming arrhythmias: Ventricular fibrillation risk during rewarming
- Acid-base management: Consider temperature-corrected blood gases

**Induced Hypothermia:**
- Targeted temperature management (32-36°C) post-cardiac arrest
- Neuroprotective mechanism: Decreased metabolic demand, reduced excitotoxicity`,
      keyTerms: [
        { term: 'FUO', definition: 'Fever of Unknown Origin; persistent fever without identified cause despite systematic investigation' },
        { term: 'malignant hyperthermia', definition: 'Pharmacogenetic syndrome of uncontrolled muscle hypermetabolism triggered by anesthetics' },
        { term: 'NMS', definition: 'Neuroleptic Malignant Syndrome; drug-induced hyperthermia from dopamine antagonists' },
        { term: 'serotonin syndrome', definition: 'Hyperthermia with neuromuscular excitability from serotonergic drug excess' },
        { term: 'afterdrop', definition: 'Paradoxical decrease in core temperature during early rewarming as cold peripheral blood returns to circulation' },
        { term: 'dantrolene', definition: 'Ryanodine receptor antagonist; first-line treatment for malignant hyperthermia' },
      ],
      clinicalNotes: 'In hyperthermia syndromes, distinguish NMS (rigidity) from serotonin syndrome (hyperreflexia, clonus). Both require immediate discontinuation of causative agents.',
    },
    5: {
      level: 5,
      summary: 'Expert-level understanding integrates thermoregulatory pathophysiology with critical care management, recognizing prognostic implications and guiding evidence-based therapeutic decisions.',
      explanation: `## Advanced Thermoregulatory Concepts

### Cellular Stress Response to Hyperthermia

**Heat Shock Response:**
- Heat shock transcription factor 1 (HSF1) activation at >41°C
- Induction of heat shock proteins (HSP70, HSP90)
- Protein chaperone function prevents denaturation
- Cellular protective response (thermotolerance)

**Thermal Damage Threshold:**
- Cell injury begins at sustained temperatures >40°C
- Protein denaturation, membrane instability
- At >42°C: Coagulative necrosis, multi-organ failure

### Fever in Critical Illness

**Infectious vs. Non-Infectious Fever in ICU:**
| Feature | Infectious | Non-Infectious |
|---------|-----------|----------------|
| Onset | Often abrupt | Variable |
| Height | Often >38.9°C | Usually <38.9°C |
| Rigors | Common | Uncommon |
| Procalcitonin | Elevated | Usually normal |
| CRP | Elevated | May be elevated |

**Non-Infectious Fever Causes in ICU:**
- Drug fever (antibiotics, phenytoin, allopurinol)
- Transfusion reactions
- VTE/PE
- Adrenal insufficiency
- Posterior fossa stroke
- Alcohol withdrawal
- Pancreatitis
- Acalculous cholecystitis

### Fever and Neurological Injury

**Relationship:**
- Fever worsens neurological outcomes (stroke, TBI, SAH)
- Each 1°C increase above 37°C: ~10% worse outcome
- Mechanism: Increased metabolic demand, excitotoxicity, BBB disruption

**Targeted Temperature Management (TTM):**
- Post-cardiac arrest: 32-36°C for ≥24 hours (TTM2 trial suggests 37.5°C target)
- Refractory ICP: Consider 32-35°C
- Avoid hyperthermia in neurological injury (maintain ≤37.5°C)

### Drug-Induced Temperature Dysregulation

**Comparison of Syndromes:**
| Feature | NMS | Serotonin Syndrome | Malignant Hyperthermia | Anticholinergic |
|---------|-----|-------------------|----------------------|-----------------|
| Onset | Days to weeks | Hours | Minutes | Hours |
| Rigidity | Lead-pipe | Increased tone | Extreme | None |
| Reflexes | Decreased | Increased + clonus | Increased | Normal |
| Pupils | Normal | Dilated | Dilated | Dilated |
| Bowel sounds | Decreased | Increased | Decreased | Decreased |
| Diaphoresis | Yes | Yes | Yes | No (dry) |
| Key feature | Bradykinesia | Hyperreflexia, clonus | Masseter spasm | Dry/flushed |

### Precision Temperature Monitoring

**Core Temperature Devices:**
| Device | Accuracy | Indication |
|--------|----------|------------|
| Pulmonary artery catheter | Gold standard | Cardiac surgery, complex ICU |
| Esophageal probe | Excellent | OR, controlled settings |
| Bladder catheter | Good (with urine flow) | ICU monitoring |
| Rectal probe | Good | General ICU, ED |
| Zero-heat-flux (3M SpotOn) | Good | Non-invasive continuous |

### Evidence-Based Fever Management

**When to Treat Fever:**
- Patient discomfort (use clinical judgment)
- Hyperthermia syndromes (always)
- Neurological injury (maintain normothermia)
- Hemodynamically unstable (reduce metabolic demand)
- Hematologic malignancy (may mask infection source)

**When to Avoid Treating Fever:**
- Standard infection without distress (fever may enhance immunity)
- Diagnostic utility (fever pattern may guide diagnosis)
- Neutropenic fever workup (observe pattern)

**Antipyretic Choice:**
| Agent | Mechanism | Considerations |
|-------|-----------|----------------|
| Acetaminophen | Central COX inhibition | Hepatotoxicity risk; avoid in liver failure |
| NSAIDs | COX-1/COX-2 inhibition | GI bleeding, renal effects, platelet dysfunction |
| External cooling | Physical heat removal | For hyperthermia, or adjunct to antipyretics |

### Perioperative Temperature Management

**Intraoperative Hypothermia Prevention:**
- Forced-air warming devices
- Warmed IV fluids and irrigation
- Increased ambient temperature
- Risk of hypothermia: Coagulopathy, infection, cardiac events

**Targeted Hypothermia Protocols:**
- Deep hypothermic circulatory arrest: 18-25°C
- Moderate hypothermia for neuroprotection: 32-34°C
- Rewarming rate: 0.25-0.5°C/hour (slow to avoid neurological injury)`,
      keyTerms: [
        { term: 'heat shock proteins', definition: 'Molecular chaperones (HSP70, HSP90) induced by thermal stress that prevent protein denaturation' },
        { term: 'TTM', definition: 'Targeted Temperature Management; controlled temperature therapy for neuroprotection post-cardiac arrest' },
        { term: 'zero-heat-flux', definition: 'Non-invasive temperature monitoring technology estimating core temperature from skin surface' },
        { term: 'thermotolerance', definition: 'Cellular adaptation providing temporary resistance to thermal injury following heat shock response' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infection; aids differentiation of infectious from non-infectious fever' },
      ],
      clinicalNotes: `Clinical Pearls:
1. In drug-induced hyperthermia, clonus suggests serotonin syndrome while rigidity suggests NMS
2. Post-cardiac arrest: Current evidence (TTM2) suggests normothermia (≤37.5°C) may be equivalent to hypothermia
3. Fever in neutropenic patients requires emergent evaluation and empiric antibiotics within 1 hour
4. Avoid antipyretics before blood cultures when possible (may mask infection source)
5. Therapeutic hypothermia: Slow rewarming critical to avoid rebound cerebral edema`,
    },
  },

  media: [
    {
      id: 'temperature-measurement-sites',
      type: 'diagram',
      filename: 'temperature-measurement-sites.svg',
      title: 'Temperature Measurement Sites',
      description: 'Comparison of oral, rectal, axillary, tympanic, and temporal measurement sites',
    },
    {
      id: 'fever-pathophysiology',
      type: 'diagram',
      filename: 'fever-pathophysiology.svg',
      title: 'Fever Pathophysiology',
      description: 'Pathway from pyrogen exposure to hypothalamic set point elevation',
    },
  ],

  citations: [
    {
      id: 'bates-vital-signs',
      type: 'textbook',
      title: 'Beginning the Physical Examination: General Survey, Vital Signs',
      authors: ['Bickley, L.S.'],
      source: 'Bates\' Guide to Physical Examination and History Taking',
      chapter: '4',
    },
    {
      id: 'harrisons-fever',
      type: 'textbook',
      title: 'Fever',
      source: 'Harrison\'s Principles of Internal Medicine',
      chapter: '14',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'parent', label: 'Vital Signs' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'condition-hyperthermia', targetType: 'condition', relationship: 'related', label: 'Hyperthermia Syndromes' },
  ],

  tags: {
    systems: ['thermoregulatory', 'immune'],
    topics: ['physical-examination', 'vital-signs', 'clinical-skills'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bodyTemperature;
