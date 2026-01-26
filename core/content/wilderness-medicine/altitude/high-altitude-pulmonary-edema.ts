/**
 * High Altitude Pulmonary Edema (HAPE) - Comprehensive Educational Content
 *
 * Life-threatening form of altitude illness with fluid accumulation in lungs.
 *
 * IMPORTANT: This content is for educational purposes only. HAPE is a medical
 * emergency requiring immediate descent and evacuation to medical care.
 */

import { EducationalContent } from '../../types';

export const highAltitudePulmonaryEdema: EducationalContent = {
  id: 'wilderness-hape',
  type: 'condition',
  name: 'High Altitude Pulmonary Edema',
  alternateNames: ['HAPE', 'High Altitude Lung Edema', 'Altitude Pulmonary Edema'],

  levels: {
    1: {
      level: 1,
      summary: 'HAPE is when fluid fills your lungs at high altitude, making it very hard to breathe. It is a serious emergency that requires going down the mountain immediately.',
      explanation: `## What Is HAPE?

HAPE stands for High Altitude Pulmonary Edema. "Pulmonary" means lungs, and "edema" means fluid where it should not be. When you go too high too fast, fluid can leak into your lungs and make breathing very difficult.

## Why Is It Dangerous?

Your lungs are like sponges that soak up oxygen from the air. If they fill with fluid, they cannot get oxygen to your body. Without enough oxygen, you can become very sick very quickly.

## Warning Signs

**Early Signs:**
- Feeling more out of breath than normal when walking
- Dry cough
- Cannot keep up with friends
- Very tired

**Danger Signs - Get Help Now!**
- Cannot catch your breath even when resting
- Coughing up pink or frothy spit
- Gurgling sound when breathing
- Lips or fingernails turning blue
- Cannot lie down flat to sleep

## What To Do

**THE MOST IMPORTANT THING: GO DOWN!**

- Descend immediately - even 1,000 feet can help
- Do not wait until morning
- Do not wait for rescue if you can move
- The person should not carry anything
- Give oxygen if you have it

## Prevention

- Climb slowly - no more than 1,000 feet per day above 10,000 feet
- Take rest days
- Do not ignore early symptoms
- If you have had HAPE before, you are more likely to get it again`,
      keyTerms: [
        { term: 'HAPE', definition: 'High Altitude Pulmonary Edema - fluid in the lungs from high altitude', pronunciation: 'HAY-pee' },
        { term: 'pulmonary', definition: 'Having to do with the lungs' },
        { term: 'edema', definition: 'Swelling caused by fluid collecting where it should not be', pronunciation: 'ih-DEE-muh' },
        { term: 'descent', definition: 'Going down to a lower altitude' },
      ],
      analogies: [
        'HAPE is like trying to breathe through a wet sponge - the fluid blocks oxygen from getting through.',
        'Your lungs with HAPE are like a basement that is flooding - you need to get out before it fills up.',
      ],
      examples: [
        'A climber who flew to a high mountain basecamp and got sick on day 2.',
        'A hiker who pushed through feeling breathless and collapsed the next morning.',
        'Someone who descended 2,000 feet and felt much better within hours.',
      ],
    },
    2: {
      level: 2,
      summary: 'HAPE is non-cardiogenic pulmonary edema occurring at altitude due to exaggerated hypoxic pulmonary vasoconstriction. It typically develops 2-4 days after ascent above 8,000 feet and is the leading cause of altitude-related death. Immediate descent is the definitive treatment.',
      explanation: `## Understanding HAPE

### Mechanism
HAPE develops when blood vessels in the lungs constrict unevenly in response to low oxygen. This forces too much blood through some areas, causing fluid to leak from capillaries into air spaces.

### Typical Presentation

**Timeline:**
- Usually occurs 2-4 days after arriving at altitude
- Rarely occurs above 8,000 feet (2,500m)
- More common above 12,000 feet (3,600m)

**Risk Factors:**
- Rapid ascent rate
- Heavy exertion at altitude
- Previous HAPE episode (60% recurrence risk)
- Cold exposure
- Upper respiratory infection
- Sleeping at high altitude

### Early Symptoms
- Decreased exercise tolerance out of proportion to altitude
- Dry cough
- Mild dyspnea on exertion
- Fatigue greater than expected

### Progressive Symptoms
- Dyspnea at rest
- Productive cough (pink, frothy sputum)
- Orthopnea (cannot breathe lying flat)
- Audible crackles or gurgling
- Cyanosis (blue lips, fingers)
- Tachycardia
- Low-grade fever

## Severity Grading

| Grade | Symptoms | SpO2 | Action |
|-------|----------|------|--------|
| Mild | Dyspnea with exertion | 70-85% | Rest, monitor, prepare descent |
| Moderate | Dyspnea at rest | 60-70% | Descend immediately |
| Severe | Dyspnea at rest, cyanosis | <60% | Emergency descent, O2, medications |

## Treatment

### Descent
- Most important intervention
- Descend minimum 1,000-3,000 feet
- Carry patient if possible (minimize exertion)
- Do not delay for any reason

### Oxygen
- High-flow if available
- Target SpO2 >90%
- Reduces pulmonary artery pressure

### Medications
**Nifedipine (if available):**
- 30mg extended-release every 12 hours
- OR 10mg immediate-release every 4-6 hours
- Reduces pulmonary vasoconstriction

### Portable Hyperbaric Chamber
- Gamow bag simulates descent
- Temporizing measure - not replacement for descent
- Use while awaiting rescue

## Prevention

### Graded Ascent
- Above 8,000 feet: increase sleeping altitude ≤1,000 feet/day
- Rest day every 3,000 feet of gain
- "Climb high, sleep low"

### Medication Prophylaxis
For HAPE-susceptible individuals:
- Nifedipine 30mg ER every 12 hours
- OR Tadalafil 10mg every 12 hours
- Start 24 hours before ascent

### Recognition
- Know early warning signs
- Monitor teammates
- Low threshold for descent with symptoms`,
      keyTerms: [
        { term: 'hypoxic pulmonary vasoconstriction', definition: 'Narrowing of blood vessels in the lungs in response to low oxygen' },
        { term: 'non-cardiogenic', definition: 'Pulmonary edema not caused by heart failure' },
        { term: 'orthopnea', definition: 'Difficulty breathing when lying flat, relieved by sitting up', pronunciation: 'or-THOP-nee-uh' },
        { term: 'cyanosis', definition: 'Blue discoloration of skin from low oxygen', pronunciation: 'sy-uh-NOH-sis' },
        { term: 'Gamow bag', definition: 'Portable hyperbaric chamber that simulates descent' },
      ],
      analogies: [
        'Uneven vasoconstriction in HAPE is like some lanes of a highway being closed, causing a traffic jam that backs up into surrounding areas.',
        'The Gamow bag is like bringing sea-level pressure to the mountain when you cannot bring the patient to sea level.',
      ],
    },
    3: {
      level: 3,
      summary: 'HAPE results from exaggerated, uneven hypoxic pulmonary vasoconstriction causing regional over-perfusion and capillary stress failure. Classic presentation includes dyspnea at rest, productive cough, and hypoxemia. Management prioritizes descent, supplemental oxygen, and pulmonary vasodilators. Prevention focuses on graded ascent and pharmacological prophylaxis for susceptible individuals.',
      explanation: `## Pathophysiology

### Mechanism of HAPE

**Hypoxic Pulmonary Vasoconstriction (HPV):**
1. Alveolar hypoxia triggers pulmonary arteriolar constriction
2. Normal response to redirect blood from poorly ventilated areas
3. In HAPE, response is exaggerated and uneven

**Consequences of Uneven HPV:**
- Some vessels over-constrict
- Other vessels receive excess blood flow
- Capillary transmural pressure increases dramatically
- Capillary stress failure occurs

**Capillary Stress Failure:**
- Physical disruption of capillary-alveolar membrane
- Protein-rich fluid leaks into alveoli
- Initially non-inflammatory
- Secondary inflammation follows

### Contributing Factors

**Reduced Nitric Oxide:**
- HAPE-susceptible individuals have lower exhaled NO
- Reduced pulmonary vasodilation
- Elevated endothelin-1

**Sympathetic Activation:**
- Cold, hypoxia, exercise increase catecholamines
- Further elevates pulmonary pressures

## Clinical Presentation

### Diagnosis

**Clinical Criteria:**
At least two of:
- Dyspnea at rest
- Cough
- Weakness/decreased exercise tolerance
- Chest tightness

AND at least two of:
- Crackles or wheezing in one lung field
- Central cyanosis
- Tachypnea
- Tachycardia

### Differential Diagnosis
- Pneumonia (fever higher, unilateral findings)
- Pulmonary embolism (sudden onset, risk factors)
- Acute coronary syndrome (chest pain character)
- HACE (may coexist)
- Asthma/bronchospasm (history, wheezing)

### Investigations (if available)
- Pulse oximetry: SpO2 typically <85% (at altitude)
- Chest X-ray: Bilateral patchy infiltrates
- ECG: Sinus tachycardia, right heart strain pattern
- Labs: Normal WBC (unless superinfected)

## Management

### Field Management Algorithm

\`\`\`
Suspected HAPE
     |
     v
Immediate Actions:
- Minimize exertion
- Keep warm
- Supplemental O2 if available
     |
     v
Can patient descend?
  YES -> Immediate descent 1000-3000m
         Carry if possible
  NO  -> Portable hyperbaric chamber
         Medications
         Activate rescue
     |
     v
Medications:
- Nifedipine 30mg ER q12h (or 10mg IR q4-6h)
- Consider dexamethasone if HACE suspected
     |
     v
Continue descent until symptoms resolve
\`\`\`

### Medication Details

**Nifedipine:**
- Calcium channel blocker
- Reduces pulmonary artery pressure
- Does not improve oxygenation directly
- Dose: 30mg ER q12h or 10mg IR q4-6h
- Caution: Hypotension

**Phosphodiesterase-5 Inhibitors:**
- Sildenafil 50mg q8h
- Tadalafil 10mg q12h
- Increase NO signaling
- Alternative to nifedipine

**Oxygen:**
- High-flow (4-6 L/min) if available
- Target SpO2 >90%
- Reduces pulmonary vasoconstriction
- Can be used with medications

### Portable Hyperbaric Chamber

**Gamow Bag Protocol:**
- Inflate to 2 psi (simulates 1500-2000m descent)
- Maintain 1-2 hours minimum
- Pump every 1-2 minutes to clear CO2
- Patient may worsen when removed
- Not substitute for descent

## Prevention

### Ascent Guidelines

**Above 3000m (10,000 ft):**
- Sleeping altitude increase ≤500m/day
- Rest day every 1000m gain
- Avoid strenuous activity first 24-48 hours

### Pharmacological Prophylaxis

**Indications:**
- Prior HAPE episode
- Known HAPE susceptibility
- Unavoidable rapid ascent

**Options:**
- Nifedipine 30mg ER q12h
- Tadalafil 10mg daily
- Sildenafil 50mg q8h
- Salmeterol 125mcg inhaled BID (adjunct)

**Timing:**
- Start 24 hours before ascent
- Continue until descent or acclimatization complete

## Prognosis

**With Prompt Descent:**
- Complete recovery expected
- Symptoms improve within hours
- Full resolution 24-72 hours

**Without Treatment:**
- Progressive respiratory failure
- May develop HACE
- Death within 24-48 hours

**Recurrence:**
- 60% risk with re-exposure
- Preventive measures essential`,
      keyTerms: [
        { term: 'capillary stress failure', definition: 'Mechanical disruption of pulmonary capillaries due to elevated transmural pressure' },
        { term: 'transmural pressure', definition: 'Pressure difference across a vessel wall' },
        { term: 'endothelin-1', definition: 'Potent vasoconstrictor peptide elevated in HAPE', pronunciation: 'en-doh-THEE-lin' },
        { term: 'phosphodiesterase-5 inhibitor', definition: 'Drug class that enhances NO signaling, reducing pulmonary pressures' },
        { term: 'alveoli', definition: 'Air sacs in the lungs where gas exchange occurs', pronunciation: 'al-VEE-oh-lie' },
      ],
      clinicalNotes: 'HAPE can occur without preceding AMS. HAPE and HACE may coexist - treat both. Crackles may be unilateral early, becoming bilateral. Fever up to 38.5C can occur and does not indicate infection. HAPE-susceptible individuals should have prophylaxis for all high-altitude travel.',
    },
    4: {
      level: 4,
      summary: 'HAPE pathophysiology centers on heterogeneous hypoxic pulmonary vasoconstriction causing regional over-perfusion and capillary stress failure. Genetic and molecular determinants include reduced endothelial NO bioavailability, elevated endothelin, and exaggerated sympathetic responses. Management integrates descent, supplemental oxygen, and pulmonary vasodilators targeting specific pathophysiological mechanisms.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms

**Nitric Oxide Pathway Dysfunction:**
- HAPE-susceptible individuals demonstrate:
  - Lower exhaled NO at baseline
  - Reduced NOS expression
  - Elevated asymmetric dimethylarginine (ADMA)
  - Decreased NO response to hypoxia

**Endothelin System:**
- ET-1 levels elevated in HAPE
- Exaggerated ET-1 response to hypoxia
- ET-A receptor-mediated vasoconstriction
- ET-B receptor-mediated vasodilation impaired

**Sympathetic Nervous System:**
- Hypoxia activates SNS
- Catecholamines increase PA pressure
- Cold exposure amplifies response
- Beta-adrenergic effects on fluid clearance

### Hemodynamic Changes

**Pulmonary Artery Pressure:**
\`\`\`
Normal at altitude: 20-25 mmHg
HAPE: 40-60 mmHg or higher
Estimated by Doppler: TR jet velocity
\`\`\`

**Capillary Stress Failure Model:**
1. Elevated PAP + uneven vasoconstriction
2. Regional capillary pressures exceed 25-30 mmHg
3. Mechanical failure of capillary-alveolar membrane
4. Initially non-inflammatory high-protein edema
5. Secondary inflammatory cascade follows

### Genetic Susceptibility

**Identified Associations:**
- HIF pathway polymorphisms
- NOS gene variants
- ACE insertion/deletion
- ET-1 promoter variants
- Reduced HVR (hypoxic ventilatory response)

**Phenotypic Characteristics:**
- Exaggerated HPV response
- Lower baseline exhaled NO
- Higher baseline PA pressures
- Abnormal fluid handling

## Advanced Diagnostics

### Imaging

**Chest X-Ray:**
- Bilateral patchy infiltrates (classic)
- May be asymmetric
- Spares costophrenic angles initially
- Central > peripheral distribution

**CT Chest (if available):**
- Ground-glass opacities
- Interlobular septal thickening
- No cardiomegaly
- No pleural effusion typically

**Echocardiography:**
- Elevated PA systolic pressure
- Tricuspid regurgitation
- Right ventricular dilation/dysfunction
- Normal LV function

### Laboratory (if available)

**Expected Findings:**
- Normal WBC (unless superinfected)
- Normal BNP (vs cardiogenic edema)
- Elevated troponin possible (RV strain)
- Elevated lactate possible

## Treatment Evidence

### Descent

**Evidence Base:**
- Case series and observational data
- Pathophysiology supports mechanism
- Universally recommended
- No randomized trials (ethical constraints)

**Practical Considerations:**
- Any descent helpful
- Target 1000-3000m or until symptoms resolve
- Minimize patient exertion
- Continue monitoring during descent

### Oxygen

**Mechanism:**
- Reduces alveolar hypoxia
- Decreases HPV
- Lowers PA pressure
- Improves ventilation-perfusion matching

**Evidence:**
- Observational studies show benefit
- Standard of care when available
- May obviate need for descent if available in quantity (rare)

### Pharmacotherapy

**Nifedipine:**
- Mechanism: L-type calcium channel blockade
- Effect: Reduces HPV and PA pressure
- Evidence: RCTs for prophylaxis, case series for treatment
- Dose: 30mg ER q12h or 10mg IR q4-6h

**PDE-5 Inhibitors:**
- Mechanism: Increases cGMP, enhances NO effect
- Effect: Pulmonary vasodilation
- Evidence: RCTs for prophylaxis, limited treatment data
- Options: Sildenafil 50mg q8h, tadalafil 10mg q12h

**Beta-2 Agonists (Salmeterol):**
- Mechanism: Enhance alveolar fluid clearance
- Effect: May reduce incidence
- Evidence: One RCT showing 50% reduction in HAPE
- Role: Prophylaxis adjunct

**Dexamethasone:**
- Not first-line for HAPE
- Consider if HACE component suspected
- Does not reduce PA pressure

### Portable Hyperbaric Therapy

**Gamow Bag Physiology:**
- Increases ambient pressure 2 psi
- Simulates descent 1500-2000m
- Increases inspired PO2
- Reduces HPV

**Protocol:**
- Inflate to target pressure
- Maintain minimum 1 hour
- Pump q1-2 minutes for CO2 clearance
- Repeat as needed

**Limitations:**
- Temporizing only
- Symptom rebound on removal
- Cannot perform procedures inside
- Claustrophobia risk

## Prevention Protocols

### HAPE-Susceptible Individuals

**Pre-Travel Assessment:**
- History of HAPE (strongest predictor)
- Hypoxic challenge testing (research)
- Echocardiography (PA pressure response)

**Prophylaxis Protocol:**
\`\`\`
Day -1: Start nifedipine 30mg ER q12h
        OR tadalafil 10mg daily
Continue: Until descent or stable >3 days at altitude
If symptoms: Add oxygen, plan descent
\`\`\`

**Ascent Modification:**
- Slower ascent rate (500m/day max)
- Extra acclimatization days
- Avoid strenuous activity
- Low threshold for descent

### Reentry HAPE

**Unique Considerations:**
- Occurs in high-altitude natives after lowland sojourn
- Pulmonary vascular remodeling may reverse at low altitude
- Exaggerated HPV on return
- More common in children

**Prevention:**
- Graded reascent
- Consider nifedipine prophylaxis`,
      keyTerms: [
        { term: 'ADMA', definition: 'Asymmetric dimethylarginine - endogenous NOS inhibitor elevated in HAPE-susceptible individuals' },
        { term: 'HIF pathway', definition: 'Hypoxia-inducible factor signaling cascade regulating cellular hypoxia responses' },
        { term: 'HPV', definition: 'Hypoxic pulmonary vasoconstriction - constriction of pulmonary vessels in response to low oxygen' },
        { term: 'reentry HAPE', definition: 'HAPE occurring in high-altitude natives returning after time at lower elevation' },
        { term: 'cGMP', definition: 'Cyclic GMP - second messenger in NO signaling pathway' },
      ],
      clinicalNotes: 'BNP elevation suggests cardiogenic component - consider alternative diagnoses. Asymmetric findings on imaging are common and do not exclude HAPE. PDE-5 inhibitors contraindicated with nitrates. Reentry HAPE in children often misdiagnosed as pneumonia. Combination prophylaxis (nifedipine + PDE-5I) may be more effective than either alone.',
    },
    5: {
      level: 5,
      summary: 'HAPE represents a paradigm of susceptibility-dependent, hypoxia-driven vascular pathology. Contemporary understanding integrates endothelial dysfunction, genetic polymorphisms in oxygen-sensing and vasoregulatory pathways, and regional hemodynamic stress failure. Evidence-based management balances definitive descent therapy with pharmacological adjuncts targeting specific molecular mechanisms.',
      explanation: `## Molecular Pathophysiology

### Oxygen Sensing and HIF Pathway

**Cellular Hypoxia Response:**
\`\`\`
Normoxia: PHD hydroxylates HIF-alpha -> VHL recognition -> degradation
Hypoxia: PHD inhibited -> HIF-alpha stabilized -> HIF target genes
\`\`\`

**HIF Target Genes in HAPE:**
- VEGF: Increases vascular permeability
- ET-1: Vasoconstriction
- iNOS: Variable (may be protective)
- EPO: Indirect effects via polycythemia

**HAPE Susceptibility Genetics:**
- EPAS1 (HIF-2alpha) variants
- EGLN1 (PHD2) variants
- Studies in HAPE-susceptible populations ongoing

### Endothelial Dysfunction

**NO Bioavailability:**
\`\`\`
NO synthesis: L-arginine + O2 -> NO + citrulline (via NOS)
HAPE-susceptible: Reduced eNOS activity/expression
                  Elevated ADMA (NOS inhibitor)
                  Reduced NO scavenging protection
\`\`\`

**Endothelin System:**
- Pre-pro-ET-1 gene upregulation in hypoxia
- ET-1 binds ET-A receptor (vasoconstriction)
- ET-B receptor (vasodilation) response impaired
- Net effect: Marked pulmonary vasoconstriction

### Capillary Stress Failure Model

**Biomechanics:**
\`\`\`
Capillary wall stress = (Ptm × r) / t
Where: Ptm = transmural pressure
       r = capillary radius
       t = wall thickness

Failure threshold: ~40-45 mmHg transmural pressure
\`\`\`

**Uneven Vasoconstriction:**
- Some pulmonary vessels over-constrict
- Blood flow redirected to non-constricted regions
- Regional over-perfusion
- Capillary pressure exceeds failure threshold

### Inflammatory Component

**Primary vs Secondary:**
- Initial edema is non-inflammatory (mechanical)
- Protein-rich fluid activates inflammation
- Alveolar macrophage response
- Cytokine release (IL-6, IL-8)
- Neutrophil recruitment (late)

**Implications:**
- Anti-inflammatory therapy not first-line
- Steroids may help HACE component
- NSAIDs not beneficial for HAPE

## Advanced Diagnostics

### Hypoxic Challenge Testing

**Protocol:**
- Normobaric hypoxia (FiO2 ~12%)
- 90-minute exposure
- Monitor SpO2, PA pressure (echo)

**Predictive Value:**
- Exaggerated PA pressure rise predicts susceptibility
- SpO2 response less predictive
- Not widely available

### Biomarkers

**Potential Markers:**
- BNP/NT-proBNP: RV strain marker
- Troponin: Mild elevation possible
- VEGF: Elevated in some studies
- Exhaled NO: Lower in susceptible individuals

**Limitations:**
- Not validated for HAPE diagnosis
- Most useful for research
- Point-of-care not available

## Evidence-Based Management

### Systematic Review Evidence

**Descent:**
- No RCTs (ethical constraints)
- Observational data uniformly supportive
- Pathophysiology supports mechanism
- Remains cornerstone of treatment

**Nifedipine:**
- 3 RCTs for prophylaxis showing benefit
- Case series for treatment
- Reduces PA pressure by 15-30%
- NNT ~4 for prophylaxis

**PDE-5 Inhibitors:**
- 2 RCTs for prophylaxis
- Tadalafil: RR 0.24 for HAPE
- Sildenafil: Similar efficacy
- Treatment data limited

**Salmeterol:**
- 1 RCT: 50% reduction in HAPE incidence
- Mechanism: Enhanced alveolar fluid clearance
- Used as adjunct to vasodilators

### Comparative Pharmacology

| Drug | Mechanism | PA Pressure | Oxygenation | Evidence |
|------|-----------|-------------|-------------|----------|
| Nifedipine | CCB | ↓30% | Minimal | RCTs |
| Sildenafil | PDE-5I | ↓25% | Minimal | RCTs |
| Tadalafil | PDE-5I | ↓25% | Minimal | RCTs |
| Salmeterol | Beta-2 | Minimal | ↑ | 1 RCT |
| Oxygen | Direct | ↓↓ | ↑↑ | Standard |
| Descent | All | ↓↓↓ | ↑↑↑ | Observational |

## Special Populations

### Reentry HAPE

**Pathophysiology:**
- High-altitude natives develop pulmonary vascular remodeling
- Sojourn at low altitude: Remodeling partially reverses
- Return to altitude: Exaggerated HPV response

**Risk Factors:**
- Duration of lowland stay (weeks-months)
- Rapidity of reascent
- Upper respiratory infection
- Children > adults

**Prevention:**
- Graded reascent over days
- Nifedipine prophylaxis
- Education for families

### HAPE in Children

**Unique Features:**
- Often occurs with URI
- May present with abdominal pain
- Frequently misdiagnosed as pneumonia
- Good response to descent

### HAPE with Coexisting HACE

**Management:**
- Both require descent
- Add dexamethasone for HACE component
- Continue pulmonary vasodilator
- More severe prognosis

## Research Frontiers

### Pharmacological Targets

**Novel Approaches:**
- Soluble guanylate cyclase stimulators
- ET-A receptor antagonists
- HIF stabilizers (paradoxical approach)
- Inhaled NO for field use

### Genetic Testing

**Future Directions:**
- EPAS1/EGLN1 screening
- Polygenic risk scores
- Personalized prophylaxis protocols

### Monitoring Technologies

**Emerging Tools:**
- Continuous SpO2 monitoring
- Portable PA pressure estimation
- Exhaled NO analyzers (miniaturized)
- AI-assisted early warning systems`,
      keyTerms: [
        { term: 'PHD', definition: 'Prolyl hydroxylase domain enzymes - oxygen sensors that regulate HIF stability' },
        { term: 'VHL', definition: 'Von Hippel-Lindau protein - E3 ubiquitin ligase targeting hydroxylated HIF for degradation' },
        { term: 'transmural pressure', definition: 'Pressure difference between inside and outside of a vessel' },
        { term: 'EPAS1', definition: 'Endothelial PAS domain protein 1 (HIF-2alpha) - key oxygen sensor with altitude adaptation variants' },
        { term: 'normobaric hypoxia', definition: 'Low oxygen conditions at normal atmospheric pressure, used for susceptibility testing' },
      ],
      clinicalNotes: `Clinical Pearls for HAPE Management:
1. HAPE can occur without preceding AMS - maintain high index of suspicion
2. Crackles may be unilateral early; bilateral involvement suggests progression
3. Low-grade fever (up to 38.5C) is common and does not indicate infection
4. BNP elevation should prompt consideration of cardiogenic component
5. Combination prophylaxis (nifedipine + PDE-5I) may be more effective
6. Reentry HAPE in children often misdiagnosed as pneumonia
7. Any descent is beneficial - do not delay for optimal destination
8. Exertion during descent worsens outcome - carry patient if possible
9. HAPE susceptibility is reproducible - prior episode is strongest predictor
10. Post-HAPE: Allow 2-3 months before re-attempting altitude`,
    },
  },

  media: [
    {
      id: 'hape-pathophysiology',
      type: 'diagram',
      filename: 'hape-pathophysiology.svg',
      title: 'HAPE Pathophysiology',
      description: 'Diagram showing uneven vasoconstriction and capillary stress failure mechanism',
    },
    {
      id: 'hape-cxr',
      type: 'image',
      filename: 'hape-chest-xray.jpg',
      title: 'HAPE Chest X-Ray',
      description: 'Chest radiograph showing bilateral patchy infiltrates typical of HAPE',
    },
  ],

  citations: [
    {
      id: 'wms-hape-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Prevention and Treatment of Acute Altitude Illness',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'luks-hape-review',
      type: 'article',
      title: 'High Altitude Pulmonary Edema',
      authors: ['Luks, A.M.', 'Swenson, E.R.'],
      source: 'High Altitude Medicine & Biology',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'parent', label: 'Altitude Sickness Overview' },
    { targetId: 'wilderness-hace', targetType: 'condition', relationship: 'related', label: 'High Altitude Cerebral Edema' },
    { targetId: 'wilderness-acclimatization', targetType: 'concept', relationship: 'see-also', label: 'Altitude Acclimatization' },
    { targetId: 'wilderness-evacuation-decisions', targetType: 'concept', relationship: 'see-also', label: 'Evacuation Decisions' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['altitude', 'wilderness-medicine', 'emergency-medicine'],
    keywords: ['HAPE', 'pulmonary edema', 'altitude sickness', 'mountain sickness', 'hypoxia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default highAltitudePulmonaryEdema;
