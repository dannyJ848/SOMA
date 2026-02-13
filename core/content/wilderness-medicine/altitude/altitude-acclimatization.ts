/**
 * Altitude Acclimatization - Comprehensive Educational Content
 *
 * The physiological process of adapting to high altitude environments.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Proper acclimatization is essential for safe
 * high-altitude travel.
 */

import { EducationalContent } from '../../types';

export const altitudeAcclimatization: EducationalContent = {
  id: 'wilderness-acclimatization',
  type: 'concept',
  name: 'Altitude Acclimatization',
  alternateNames: ['High Altitude Adaptation', 'Acclimatization', 'Altitude Adjustment'],

  levels: {
    1: {
      level: 1,
      summary: 'Acclimatization is how your body gets used to high altitudes where there is less oxygen. By going up slowly and giving your body time to adjust, you can climb high mountains safely.',
      explanation: `## What Is Acclimatization?

When you go up a mountain, the air gets thinner. This means there is less oxygen in each breath you take. Your body needs time to adjust to having less oxygen - this adjustment is called acclimatization.

## Why Is It Important?

If you go up too fast, you can get altitude sickness. Your body cannot get enough oxygen, and you might get headaches, feel sick to your stomach, or worse.

By going up slowly, your body has time to make changes that help you breathe and work better at high altitude.

## The Golden Rule: Climb High, Sleep Low

This is the most important rule for climbing mountains:
- During the day, you can climb higher
- At night, come back down to sleep at a lower elevation
- This helps your body adjust faster

## Simple Tips for Going High

**Go Slowly:**
- Above 10,000 feet, do not go up more than 1,000 feet per day
- Take a rest day every 3,000 feet you climb

**Drink Water:**
- Your body needs lots of water at altitude
- Drink even when you are not thirsty

**Listen to Your Body:**
- If you get a headache or feel sick, stop climbing
- If symptoms get worse, go back down

**Eat Well:**
- Your body needs fuel to adjust
- Carbohydrates are especially good at altitude

## Signs Your Body Is Adjusting

- You need to pee more (this is normal!)
- Breathing gets easier over days
- You sleep better after a few nights
- You have more energy`,
      keyTerms: [
        { term: 'acclimatization', definition: 'The process of your body adjusting to high altitude and less oxygen', pronunciation: 'uh-KLY-muh-tih-ZAY-shun' },
        { term: 'altitude', definition: 'How high you are above sea level' },
        { term: 'oxygen', definition: 'An invisible gas in the air that your body needs to live' },
        { term: 'elevation', definition: 'Another word for altitude - how high up you are' },
      ],
      analogies: [
        'Acclimatization is like adjusting to a new time zone - your body needs a few days to get used to the change.',
        'Going up too fast is like jumping into cold water - a shock! Going slowly is like easing in gradually.',
        'Your body making more red blood cells is like a factory adding more trucks to deliver oxygen.',
      ],
      examples: [
        'Mountain climbers spend weeks at base camp before climbing Mount Everest.',
        'A family visiting Denver from Florida feels tired the first day but better after three days.',
        'Hikers who climb slowly up a 14,000-foot peak feel fine, while those who rush get sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acclimatization involves respiratory, cardiovascular, and hematological adaptations to maintain oxygen delivery at altitude. Key strategies include graded ascent (300-500m/day above 3000m), rest days, and the climb high-sleep low principle. Understanding the timeline and markers of successful acclimatization prevents altitude illness.',
      explanation: `## The Physiology of Acclimatization

### Why We Need to Acclimatize

At sea level, atmospheric pressure pushes oxygen into our lungs efficiently. At altitude:
- Atmospheric pressure decreases
- Less oxygen is pushed into our bloodstream
- Our body must adapt to maintain oxygen delivery

### Key Adaptations

**Immediate (Hours to Days):**
- Increased breathing rate and depth
- Faster heart rate
- Increased urination (diuresis)

**Short-term (Days to Weeks):**
- More red blood cells begin forming
- Blood becomes more efficient at carrying oxygen
- Muscles adapt to use oxygen more efficiently

**Long-term (Weeks to Months):**
- Increased red blood cell mass
- More capillaries in muscles
- Improved cellular oxygen utilization

## Ascent Guidelines

### The Key Numbers

| Altitude Zone | Sleeping Altitude Increase | Rest Days |
|--------------|---------------------------|-----------|
| Below 3000m (10,000 ft) | Minimal restrictions | As needed |
| 3000-5000m | ≤500m (1,600 ft) per day | Every 1000m (3,300 ft) |
| Above 5000m | ≤300m (1,000 ft) per day | Every 600m (2,000 ft) |

### Climb High, Sleep Low

This principle is fundamental:
- Climb higher during the day for acclimatization stimulus
- Descend to sleep at lower altitude
- Sleeping altitude determines stress on body

**Example Schedule:**
- Day 1: Sleep at 3000m base camp
- Day 2: Climb to 3800m, descend to sleep at 3200m
- Day 3: Rest day at 3200m
- Day 4: Climb to 4200m, descend to sleep at 3600m

## Signs of Successful Acclimatization

**Positive Signs:**
- Increased urination in first 24-48 hours
- Breathing rate normalizes over days
- Heart rate decreases from initial elevation
- Sleep quality improves
- Energy levels stabilize

**Concerning Signs:**
- Persistent headache
- Nausea or vomiting
- Extreme fatigue
- Poor sleep worsening
- Decreased appetite

## Practical Strategies

### Hydration
- Drink 3-4 liters per day at altitude
- Urine should be light colored
- Avoid alcohol first 48 hours (dehydrating)
- Caffeine okay in moderation if habitual user

### Nutrition
- Favor carbohydrates (more efficient fuel)
- Eat even if appetite reduced
- Small frequent meals often tolerated better
- Consider iron supplementation if previously deficient

### Activity
- Light activity better than bed rest
- Avoid strenuous exertion first 24-48 hours
- Walking helps with acclimatization
- Heavy packs delay adjustment

### Sleep
- Expect some sleep disturbance initially
- Periodic breathing (Cheyne-Stokes) is common
- Sleeping pills can worsen breathing
- Elevate head of bed slightly

## Medications for Acclimatization

### Acetazolamide (Diamox)
- Carbonic anhydrase inhibitor
- Speeds acclimatization process
- Dose: 125-250mg twice daily
- Start 24 hours before ascent
- Common side effects: Tingling, frequent urination

### When Medications Help
- Unavoidable rapid ascent
- Previous altitude illness
- Limited time for natural acclimatization
- Not a substitute for proper ascent

## Pre-Acclimatization

### Training at Altitude
- Living or training at moderate altitude before trip
- Altitude tent sleeping (simulated altitude)
- Limited evidence for intermittent hypoxic training

### Practical Options
- Spend extra days at intermediate altitudes
- Consider staging at mid-altitude before high peaks
- Avoid flying directly to high altitude when possible`,
      keyTerms: [
        { term: 'diuresis', definition: 'Increased urination - a normal early sign of acclimatization', pronunciation: 'die-yoo-REE-sis' },
        { term: 'Cheyne-Stokes breathing', definition: 'Pattern of deep breaths alternating with periods of no breathing, common during sleep at altitude', pronunciation: 'chain-stokes' },
        { term: 'acclimatization stimulus', definition: 'The exposure to altitude that triggers the body to adapt' },
        { term: 'acetazolamide', definition: 'Medication that speeds up acclimatization by changing blood chemistry', pronunciation: 'uh-set-uh-ZOLE-uh-mide' },
      ],
      analogies: [
        'Acclimatization is like training for a marathon - you cannot run 26 miles on day one, but you can build up to it over weeks.',
        'Red blood cell production is like a factory ramping up production - it takes time to increase output.',
        'Climbing high and sleeping low is like stretching a rubber band - you stress it then let it recover.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acclimatization encompasses integrated physiological responses including hypoxic ventilatory response, cardiovascular adjustments, erythropoietin-mediated polycythemia, and cellular metabolic adaptations. Evidence-based ascent protocols minimize altitude illness risk while optimizing adaptation. Pharmacological adjuncts accelerate the process when natural timelines are insufficient.',
      explanation: `## Physiological Mechanisms

### Respiratory Adaptations

**Hypoxic Ventilatory Response (HVR):**
- Peripheral chemoreceptors (carotid bodies) sense hypoxemia
- Immediate increase in minute ventilation
- Individual variability affects AMS susceptibility
- Blunted HVR increases altitude illness risk

**Ventilatory Acclimatization:**
- Initial hyperventilation causes respiratory alkalosis
- Renal compensation: HCO3- excretion over 24-48 hours
- Allows further hyperventilation without alkalosis
- Process takes 2-4 days to complete

**Hypoxic Ventilatory Decline:**
- After 20-30 minutes of hypoxia, ventilation decreases
- Central mechanisms partially counteract peripheral drive
- Resolves with sustained exposure

### Cardiovascular Responses

**Immediate:**
- Increased heart rate (sympathetic activation)
- Increased cardiac output
- Systemic vasodilation
- Pulmonary vasoconstriction

**Acclimatization:**
- Heart rate normalizes over days
- Cardiac output returns toward baseline
- Blood pressure may increase modestly
- Pulmonary artery pressure remains elevated

### Hematological Adaptations

**Erythropoietin Response:**
\`\`\`
Timeline:
Hours 2-4: EPO gene transcription begins
Hours 6-12: EPO release peaks
Days 3-5: Reticulocyte count rises
Weeks 2-4: RBC mass significantly increased
\`\`\`

**Hemoglobin-Oxygen Affinity:**
- Initial: 2,3-DPG increases, rightward shift
- Improved tissue oxygen delivery
- Hyperventilation causes leftward shift (competing effect)
- Net effect varies with altitude and duration

### Cellular Adaptations

**Muscle:**
- Increased capillary density
- Increased myoglobin
- Mitochondrial efficiency changes
- Shift toward oxidative metabolism

**Brain:**
- Increased cerebral blood flow (initially)
- Vasogenic edema risk (AMS/HACE)
- Adaptation of cerebral autoregulation

## Evidence-Based Ascent Protocols

### Wilderness Medical Society Guidelines

**Above 3000m (10,000 ft):**
- Increase sleeping altitude ≤500m/day
- Rest day every 3-4 days
- Total ascent flexibility with proper staging

**Above 5000m (16,400 ft):**
- Increase sleeping altitude ≤300m/day
- Rest day every 2-3 days
- More conservative approach

### Graded Ascent Evidence

**Key Studies:**
- Hackett et al: Slower ascent reduces AMS from 67% to 29%
- Schneider et al: 400m/day vs 600m/day shows clear benefit
- Meta-analyses confirm dose-response relationship

### Climb High, Sleep Low

**Physiological Rationale:**
- Daytime altitude provides acclimatization stimulus
- Nighttime at lower altitude allows recovery
- Reduces nocturnal hypoxemia
- Particularly helpful for periodic breathing

## Pharmacological Acclimatization

### Acetazolamide

**Mechanism:**
- Carbonic anhydrase inhibitor
- Causes metabolic acidosis (bicarbonaturia)
- Acidosis stimulates ventilation
- Mimics renal compensation for respiratory alkalosis

**Dosing:**
- Prophylaxis: 125-250mg PO BID
- Start 24 hours before ascent
- Continue until stable at target altitude
- Can also treat AMS: 250mg BID

**Evidence:**
- Multiple RCTs confirm efficacy
- NNT ~4-6 for AMS prevention
- Meta-analysis: RR 0.47 for AMS

**Side Effects:**
- Paresthesias (common, benign)
- Polyuria
- Dysgeusia (altered taste)
- Contraindicated with sulfa allergy

### Dexamethasone

**Role:**
- Alternative when acetazolamide contraindicated
- Does not actually speed acclimatization
- Masks symptoms without addressing physiology
- Risk of rebound at discontinuation

### Other Agents

**Ginkgo Biloba:**
- Mixed evidence
- Some studies show benefit, others not
- Mechanism unclear
- Not routinely recommended

**Coca Leaves:**
- Traditional use in Andes
- Contains cocaine precursors
- No evidence for acclimatization benefit
- May mask symptoms

## Pre-Acclimatization Strategies

### Intermittent Hypoxic Exposure

**Methods:**
- Altitude tents (simulated altitude sleeping)
- Hypoxic chambers
- Intermittent hypoxic training

**Evidence:**
- Pre-acclimatization can improve performance
- EPO response begins without prolonged exposure
- Practical limitations (access, cost, time)

### Staging

**Approach:**
- Spend days at intermediate altitude before high peaks
- Natural pre-acclimatization
- Particularly useful for direct flights to altitude

## Monitoring Acclimatization

### Objective Markers

**Lake Louise Score:**
- Self-reported symptom questionnaire
- Score ≥3 with headache = AMS
- Daily monitoring recommended

**Pulse Oximetry:**
- Baseline varies with altitude
- Trend more important than absolute value
- Low SpO2 with symptoms concerning

### Expected Timeline

| Day at Altitude | Expected Adaptation |
|-----------------|---------------------|
| 1-2 | Increased ventilation, HR |
| 2-3 | Diuresis, renal HCO3 excretion |
| 3-5 | Ventilation stabilizes |
| 5-7 | Sleep improves |
| 7-14 | Significant RBC increase |`,
      keyTerms: [
        { term: 'hypoxic ventilatory response', definition: 'The increase in breathing triggered by low oxygen, varies between individuals' },
        { term: 'respiratory alkalosis', definition: 'Blood becoming too alkaline from hyperventilation at altitude' },
        { term: 'erythropoietin', definition: 'Hormone from kidneys that stimulates red blood cell production', pronunciation: 'eh-RITH-roh-POY-eh-tin' },
        { term: '2,3-DPG', definition: 'Molecule in red blood cells that helps release oxygen to tissues' },
        { term: 'bicarbonaturia', definition: 'Excretion of bicarbonate in urine, caused by acetazolamide' },
      ],
      clinicalNotes: 'HVR variability is a key determinant of individual susceptibility to AMS. Acetazolamide should be avoided if sulfa allergy is present. The 2,3-DPG rightward shift is partially counteracted by hyperventilation-induced leftward shift. Complete hematological acclimatization takes weeks, but adequate short-term adaptation occurs in days.',
    },
    4: {
      level: 4,
      summary: 'Acclimatization integrates HIF-mediated cellular responses, ventilatory chemoreceptor adaptation, erythropoietic stimulation, and cardiovascular remodeling. Individual variability in hypoxic ventilatory response and HIF pathway genetics influences susceptibility. Evidence-based protocols combine graded ascent, pharmacological facilitation, and monitoring to optimize adaptation while minimizing morbidity.',
      explanation: `## Molecular Mechanisms of Acclimatization

### HIF Pathway

**Oxygen Sensing:**
\`\`\`
Normoxia:
PHD hydroxylates HIF-alpha -> VHL recognition -> proteasomal degradation

Hypoxia:
PHD inhibited (O2-dependent enzyme) -> HIF-alpha stabilized
HIF-alpha + HIF-beta -> nuclear translocation
HIF complex binds HRE -> gene transcription
\`\`\`

**Key HIF Target Genes:**
| Gene | Product | Function |
|------|---------|----------|
| EPO | Erythropoietin | RBC production |
| VEGF | Vascular growth factor | Angiogenesis |
| GLUT1 | Glucose transporter | Enhanced glycolysis |
| PDK1 | Pyruvate dehydrogenase kinase | Metabolic shift |
| NOS | Nitric oxide synthase | Vasodilation |

### Ventilatory Adaptation

**Carotid Body Remodeling:**
- Chronic hypoxia induces glomus cell hypertrophy
- Increased dopaminergic activity
- Enhanced peripheral chemosensitivity
- Takes days to weeks

**Central Chemoreceptor Adjustment:**
- Initially resistant to hypocapnia-induced alkalosis
- Gradual resetting of CO2 sensitivity
- CSF pH normalization via choroid plexus
- Allows sustained hyperventilation

**Ventilatory Acclimatization Kinetics:**
\`\`\`
Phase 1 (minutes): Acute HVR
Phase 2 (hours): Hypoxic ventilatory decline
Phase 3 (days 1-3): Respiratory alkalosis limits ventilation
Phase 4 (days 3-7): Renal compensation allows progressive increase
Phase 5 (weeks): Full ventilatory acclimatization achieved
\`\`\`

### Erythropoietic Response

**EPO Kinetics:**
- HIF-2alpha primary driver in kidney interstitial cells
- EPO mRNA increases within hours
- Serum EPO peaks at 24-48 hours
- Sustained elevation at altitude

**Reticulocyte Response:**
- Lag time 3-5 days post-EPO
- Peak reticulocyte count 7-10 days
- RBC mass increase ~1% per week initially
- Plateau at 4-6 weeks

**Optimal Hemoglobin:**
- Excessive polycythemia counterproductive
- Increased viscosity impairs flow
- Tibetan adaptation: Moderate Hgb with high flow
- Andean adaptation: Higher Hgb levels

### Cardiovascular Remodeling

**Pulmonary Circulation:**
- Sustained hypoxic pulmonary vasoconstriction (HPV)
- Pulmonary artery pressure elevated
- Right ventricular adaptation
- Pulmonary vascular remodeling (weeks-months)

**Systemic Circulation:**
- Increased resting heart rate normalizes
- Blood pressure may increase modestly
- Microvascular density increases
- Myocardial oxygen extraction increases

## Genetic Determinants

### High-Altitude Population Adaptations

**Tibetan Adaptations:**
- EPAS1 (HIF-2alpha): Blunted EPO response
- Result: Lower Hgb, higher blood flow
- EGLN1 (PHD2): Enhanced HIF regulation
- Gene flow from Denisovans (EPAS1)

**Andean Adaptations:**
- Different genetic architecture
- Higher hemoglobin levels
- Larger chest and lung volumes
- Maintained O2 saturation better

**Ethiopian Adaptations:**
- Third independent adaptation
- Unique polymorphisms in HIF pathway
- Maintained SpO2 at altitude

### Individual Susceptibility

**HVR Variability:**
- Primarily genetic determined
- Low HVR = increased AMS risk
- May predict HAPE susceptibility
- No practical screening test

## Advanced Pharmacology

### Acetazolamide Mechanism

**Carbonic Anhydrase Inhibition:**
\`\`\`
H2O + CO2 <-> H2CO3 <-> H+ + HCO3-

Acetazolamide blocks this reaction in:
- Kidney: HCO3- excretion, metabolic acidosis
- Brain: May improve central chemosensitivity
- RBC: Minor effect on O2 transport
- Eye: Reduced aqueous humor (unrelated)
\`\`\`

**Net Effect:**
- Metabolic acidosis stimulates ventilation
- Mimics/accelerates renal compensation
- Reduces CSF pH (may reduce cerebral edema)
- Mild diuretic (reduces fluid retention)

### Comparative Prophylaxis

| Agent | Mechanism | AMS Prevention | HAPE Prevention |
|-------|-----------|----------------|-----------------|
| Acetazolamide | CA inhibition | +++ | + |
| Dexamethasone | Anti-inflammatory | ++ | + |
| Nifedipine | CCB | - | +++ |
| Tadalafil | PDE-5I | - | +++ |
| Ibuprofen | COX inhibition | + | - |

## Acclimatization Strategies

### Pre-Acclimatization Protocols

**Altitude Tent (IHE):**
\`\`\`
Protocol example:
Weeks 1-2: Sleep at simulated 2500m, 8 hours/night
Weeks 3-4: Increase to 3500m
Week 5+: 4000-4500m
\`\`\`

**Evidence:**
- Increases EPO and reticulocytes
- May reduce AMS incidence
- Practical barriers significant
- Best for elite altitude athletes

### Staging Strategies

**For Direct Flights to Altitude:**
- Cusco (3400m): Spend 2-3 days before higher treks
- La Paz (3600m): Similar staging benefit
- Lhasa (3650m): Minimum 2 days before further ascent

### Expedition Acclimatization

**Himalayan Approach:**
\`\`\`
Week 1: Base camp establishment (5300m)
Week 2: Rotation to Camp 1 (6100m) and back
Week 3: Rotation to Camp 2 (6400m) and back
Week 4: Rest/recovery at base camp
Week 5+: Summit attempts
\`\`\`

## Monitoring and Assessment

### Physiological Monitoring

**Pulse Oximetry:**
- Expected values by altitude:
  - 3000m: 90-94%
  - 4000m: 85-90%
  - 5000m: 80-85%
- Individual variation significant
- Trend matters more than absolute

**Heart Rate:**
- Elevated on arrival
- Progressive normalization indicates acclimatization
- Failure to decrease may indicate illness

### Lake Louise Score Monitoring

**Daily Assessment:**
- Headache (0-3)
- GI symptoms (0-3)
- Fatigue (0-3)
- Dizziness (0-3)
- Sleep quality (0-3)
- AMS: Headache + total ≥3`,
      keyTerms: [
        { term: 'HIF', definition: 'Hypoxia-Inducible Factor - master regulator of cellular hypoxic responses' },
        { term: 'PHD', definition: 'Prolyl hydroxylase domain enzymes - oxygen sensors regulating HIF' },
        { term: 'HRE', definition: 'Hypoxia Response Element - DNA sequence where HIF binds' },
        { term: 'glomus cells', definition: 'Oxygen-sensing cells in carotid body that mediate ventilatory response' },
        { term: 'EPAS1', definition: 'Gene encoding HIF-2alpha, with variants in Tibetan populations' },
      ],
      clinicalNotes: 'Tibetan EPAS1 variants originated from Denisovan introgression and represent one of the strongest known examples of natural selection in humans. Acetazolamide should be started 24h before ascent for maximal effect. EPO peaks at 24-48h but RBC mass increase takes weeks. Staging for 2-3 days at intermediate altitude significantly reduces AMS risk.',
    },
    5: {
      level: 5,
      summary: 'Acclimatization represents a coordinated adaptive response orchestrated by HIF-mediated transcriptional programs, chemoreceptor plasticity, and cardiovascular remodeling. Genetic polymorphisms in oxygen-sensing pathways underlie both high-altitude population adaptations and individual susceptibility. Contemporary understanding informs personalized acclimatization protocols integrating graded exposure, pharmacological facilitation, and biomarker monitoring.',
      explanation: `## Molecular Integration

### HIF System Complexity

**HIF Isoforms:**
\`\`\`
HIF-1alpha: Ubiquitous expression
           - Acute hypoxia response
           - Glycolytic pathway genes
           - VEGF, GLUT1, PDK1

HIF-2alpha: Tissue-specific (kidney, lung, endothelium)
           - EPO production (dominant driver)
           - Pulmonary vascular responses
           - Iron metabolism genes

HIF-3alpha: Negative regulator
           - Alternative splicing variants
           - Modulates HIF-1/2 activity
\`\`\`

**Oxygen Sensing Cascade:**
\`\`\`
Low O2 -> PHD inactive (Fe2+/O2-dependent)
       -> HIF-alpha not hydroxylated
       -> VHL cannot bind
       -> HIF-alpha stabilizes
       -> Dimerizes with HIF-beta
       -> Binds HRE with p300/CBP
       -> Target gene transcription
\`\`\`

### Ventilatory Plasticity

**Carotid Body Adaptation:**

*Acute Response:*
- O2-sensitive K+ channels in glomus cells
- Depolarization with hypoxia
- Ca2+ influx, neurotransmitter release
- Afferent signal via glossopharyngeal nerve

*Chronic Adaptation:*
- Glomus cell hyperplasia/hypertrophy
- Enhanced O2 sensitivity
- Dopaminergic system remodeling
- Increased vascularization

**Central Integration:**
\`\`\`
Carotid body -> NTS -> Central pattern generators
               |
               v
            Retrotrapezoid nucleus (CO2 sensing)
               |
               v
            Ventral respiratory group
               |
               v
            Phrenic motor neurons
\`\`\`

### Erythropoietic Regulation

**Renal EPO Production:**
- Interstitial fibroblasts (Type I cells)
- HIF-2alpha is dominant driver
- PHD2 is primary oxygen sensor
- Negative feedback via Gata factors

**EPO Target Cells:**
\`\`\`
EPO binds EPOR on erythroid progenitors
  -> JAK2 activation
  -> STAT5 phosphorylation
  -> Bcl-xL induction (anti-apoptotic)
  -> Proliferation and differentiation
\`\`\`

**Regulatory Feedback:**
- Iron status affects HIF stability
- Hepcidin-ferroportin axis
- Iron restriction limits erythropoiesis
- Inflammation elevates hepcidin

## Population Genetics of Altitude Adaptation

### Tibetan Genome

**EPAS1:**
- Denisovan introgression (~30-40,000 years ago)
- Strongest signal of positive selection in humans
- Multiple functional variants
- Blunts EPO response to hypoxia
- Lower hemoglobin phenotype

**EGLN1 (PHD2):**
- Multiple adaptive variants
- Enhanced HIF regulation
- May contribute to lower Hgb
- Different haplotype from Andean

**Other Genes:**
- PPARA: Metabolic adaptation
- HBB: Hemoglobin variants
- NOS: Vascular regulation

### Andean Adaptation

**Distinct Architecture:**
- Higher hemoglobin levels
- Larger vital capacity
- Different HIF pathway variants
- SENP1, ANP32D genes implicated

**Chronic Mountain Sickness:**
- Excessive polycythemia
- Monge's disease
- More common in Andeans
- Genetic susceptibility factors

### Ethiopian Highlands

**Third Independent Adaptation:**
- BHLHE41 (circadian regulation)
- CBARA1 (calcium signaling)
- Maintained SpO2 at altitude
- Distinct from Tibetan/Andean

## Personalized Acclimatization

### Genetic Risk Assessment

**Potential Biomarkers:**
- HVR phenotyping
- EPAS1/EGLN1 genotyping
- Vascular reactivity testing
- Exhaled NO measurement

**Current Limitations:**
- No validated genetic tests for AMS risk
- HVR testing not practical
- Research applications only

### Individualized Protocols

**High-Risk Features:**
- Previous altitude illness
- Low HVR (if measured)
- Rapid ascent requirement
- Limited acclimatization time
- Medical comorbidities

**Aggressive Prevention:**
- Acetazolamide 250mg BID (higher dose)
- Staged ascent with extra rest days
- Nifedipine if HAPE risk
- Low threshold for descent

### Biomarker Monitoring

**Emerging Tools:**
- Continuous SpO2 monitoring
- Heart rate variability analysis
- Sleep quality tracking
- Exhaled CO2/O2 analysis

## Pharmacological Optimization

### Acetazolamide Pharmacology

**Pharmacokinetics:**
\`\`\`
Absorption: Rapid, high bioavailability
Protein binding: ~95%
Half-life: 4-9 hours
Elimination: Renal (unchanged)
Onset: 2-4 hours
Peak effect: 8-12 hours
\`\`\`

**Optimal Dosing:**
- Evidence supports 125mg BID = 250mg BID efficacy
- Higher doses increase side effects
- Start 24h before, continue 48-72h at altitude
- Can reinitiate for further ascent

### Novel Pharmacological Targets

**Potential Agents:**
- PHD inhibitors: Enhance HIF signaling
- Iron supplementation: Optimize erythropoiesis
- HIF stabilizers: Direct HIF activation
- Mitochondrial modifiers: Cellular efficiency

**Research Status:**
- PHD inhibitors: Approved for renal anemia
- Altitude applications in development
- Roxadustat, vadadustat being studied

## Acclimatization in Extreme Environments

### High Himalayan Peaks

**>8000m Challenges:**
- Summit day SpO2 <50%
- Complete acclimatization impossible
- "Death zone" metabolic limits
- Bottled oxygen necessity

**Acclimatization Ceiling:**
- Maximal adaptation ~5500-6000m
- Above: Progressive deterioration
- No sustained living possible >6000m
- Cognitive function decline

### Commercial Altitude Tourism

**Rapid Ascent Protocols:**
- Kilimanjaro 5-6 day treks
- Mount Rainier 2-day climbs
- High AMS rates (50-75%)
- Acetazolamide strongly recommended

### Aviation and Pressure

**Flight Considerations:**
- Commercial cabin: 6000-8000 ft equivalent
- Post-HAPE: Higher cabin altitude risk
- Pressurized vs unpressurized flight
- Supplemental O2 for at-risk passengers`,
      keyTerms: [
        { term: 'NTS', definition: 'Nucleus tractus solitarius - brainstem integration center for ventilatory control' },
        { term: 'Denisovan introgression', definition: 'Genetic material from ancient Denisovan hominins incorporated into modern human genomes' },
        { term: 'EPOR', definition: 'Erythropoietin receptor on red blood cell progenitors' },
        { term: 'PHD inhibitors', definition: 'Drugs that block prolyl hydroxylases, stabilizing HIF and promoting erythropoiesis' },
        { term: 'death zone', definition: 'Altitude above ~8000m where oxygen is insufficient for human survival beyond hours-days' },
      ],
      clinicalNotes: `Clinical Pearls for Acclimatization:
1. HVR is the strongest predictor of AMS susceptibility but impractical to measure
2. Tibetan EPAS1 variant provides model for optimal high-altitude phenotype
3. Acetazolamide 125mg BID is as effective as 250mg BID with fewer side effects
4. EPO peaks at 24-48h but meaningful RBC increase takes 2-4 weeks
5. Pre-acclimatization with altitude tents requires weeks of consistent use
6. Complete acclimatization above 5500m is physiologically impossible
7. Staging at intermediate altitudes (2-3 days) significantly reduces AMS
8. Heart rate normalization is useful marker of successful acclimatization
9. Iron status should be optimized before high-altitude travel
10. Genetic testing for altitude susceptibility remains research only`,
    },
  },

  media: [
    {
      id: 'acclimatization-timeline',
      type: 'diagram',
      filename: 'acclimatization-timeline.svg',
      title: 'Acclimatization Timeline',
      description: 'Timeline showing physiological adaptations over hours, days, and weeks',
    },
    {
      id: 'hif-pathway-diagram',
      type: 'diagram',
      filename: 'hif-oxygen-sensing.svg',
      title: 'HIF Oxygen Sensing Pathway',
      description: 'Molecular diagram of HIF stabilization and target gene activation',
    },
  ],

  citations: [
    {
      id: 'wms-altitude-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Prevention and Treatment of Acute Altitude Illness',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'semenza-hif-review',
      type: 'article',
      title: 'Hypoxia-Inducible Factors in Physiology and Medicine',
      authors: ['Semenza, G.L.'],
      source: 'Cell',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'related', label: 'Altitude Sickness Overview' },
    { targetId: 'wilderness-hape', targetType: 'condition', relationship: 'see-also', label: 'High Altitude Pulmonary Edema' },
    { targetId: 'wilderness-hace', targetType: 'condition', relationship: 'see-also', label: 'High Altitude Cerebral Edema' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'hematologic'],
    topics: ['altitude', 'wilderness-medicine', 'prevention', 'physiology'],
    keywords: ['acclimatization', 'altitude', 'hypoxia', 'HIF', 'erythropoietin', 'ventilation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['physiology', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default altitudeAcclimatization;
