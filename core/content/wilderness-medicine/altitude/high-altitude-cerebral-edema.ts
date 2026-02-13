/**
 * High Altitude Cerebral Edema (HACE) - Comprehensive Educational Content
 *
 * Life-threatening altitude illness affecting the brain.
 *
 * IMPORTANT: HACE is a medical emergency. Immediate descent is required.
 */

import { EducationalContent } from '../../types';

export const highAltitudeCerebralEdema: EducationalContent = {
  id: 'wilderness-hace',
  type: 'condition',
  name: 'High Altitude Cerebral Edema',
  alternateNames: ['HACE', 'High-Altitude Brain Swelling'],

  levels: {
    1: {
      level: 1,
      summary: 'HACE is a very dangerous condition where the brain swells because of high altitude. People become confused and cannot walk straight. They must go down the mountain immediately or they could die.',
      explanation: `## What Is HACE?

HACE stands for High Altitude Cerebral Edema. "Cerebral" means brain, and "edema" means swelling. So HACE is brain swelling that happens at high altitude.

## Why Is It So Dangerous?

Your brain is inside your skull, which is like a hard box. When your brain swells, there's nowhere for it to go. This puts pressure on your brain and can cause serious damage very quickly.

## Warning Signs

**The Two Big Signs:**
1. **Confusion** - Acting strange, not making sense, very sleepy
2. **Can't walk straight** - Walking like they're drunk, stumbling, falling

## What Causes It?

- Being at very high altitude (usually above 12,000 feet)
- Going up too fast
- Not coming down when you have mountain sickness symptoms
- Ignoring warning signs

## What To Do - THIS IS AN EMERGENCY!

1. **Go down immediately!** - This is the most important thing
2. **Don't leave the person alone** - They need help
3. **Give oxygen if you have it**
4. **Keep them warm**
5. **Call for rescue if possible**

## How Far to Go Down?

Go down at least 1,000-3,000 feet (300-1,000 meters) or until the person starts getting better.

## Important Rules

- Never ignore confusion at high altitude
- Never leave someone with HACE alone
- Never wait until morning to go down
- Never go higher if someone has HACE`,
      keyTerms: [
        { term: 'cerebral', definition: 'Having to do with the brain', pronunciation: 'seh-REE-bral' },
        { term: 'edema', definition: 'Swelling caused by too much fluid in body tissues', pronunciation: 'ih-DEE-muh' },
        { term: 'HACE', definition: 'High Altitude Cerebral Edema - dangerous brain swelling at altitude', pronunciation: 'HAY-see' },
      ],
      analogies: [
        'Your skull is like a helmet that protects your brain, but when your brain swells, it\'s like trying to fit too much into the helmet.',
        'HACE confusion is like your brain\'s computer starting to crash - nothing works right.',
      ],
      examples: [
        'A climber at 14,000 feet starts acting confused, doesn\'t know where they are, and can\'t walk without stumbling. This is HACE.',
        'Someone who ignored their headache and nausea and kept climbing wakes up very confused and their friends can\'t understand what they\'re saying.',
      ],
    },
    2: {
      level: 2,
      summary: 'HACE is life-threatening brain swelling at high altitude, representing the most severe end of the AMS spectrum. Hallmark features are ataxia and altered mental status. Immediate descent is mandatory, supported by dexamethasone and oxygen when available.',
      explanation: `## Definition

HACE is the severe end of altitude illness affecting the brain. It develops from AMS when the brain swelling becomes severe enough to cause significant neurological dysfunction.

## Diagnostic Criteria

**HACE = AMS symptoms PLUS either:**
- Ataxia (inability to walk straight)
- Altered mental status (confusion, disorientation, decreased consciousness)

## Key Clinical Features

### Ataxia
- The most reliable early sign
- Test with tandem gait: heel-to-toe walking
- "Drunk walk" - staggering, imbalance
- May progress to inability to stand

### Altered Mental Status
- Confusion
- Disorientation to time, place, person
- Inappropriate behavior
- Hallucinations
- Decreasing consciousness
- Coma (late stage)

### Other Signs
- Severe headache (often unresponsive to medication)
- Vomiting
- Papilledema (if examined)
- Seizures (uncommon but possible)

## Timeline and Progression

| Stage | Features | Urgency |
|-------|----------|---------|
| Early HACE | Mild ataxia, subtle confusion | Urgent descent |
| Moderate HACE | Cannot walk unassisted, clearly confused | Emergent descent |
| Severe HACE | Unconscious, comatose | Critical - carry down immediately |

**Without descent, progression to coma and death can occur in 24-72 hours.**

## Risk Factors

- Previous HACE episode (strong predictor)
- Rapid ascent
- Continued ascent despite AMS symptoms
- Altitude above 12,000 ft (3,500m)
- Individual susceptibility

## Treatment Protocol

### Step 1: DESCEND IMMEDIATELY
- This is the definitive treatment
- Minimum descent: 1,000m (3,000 ft)
- Continue until improvement or reach low altitude
- Carry the patient if necessary
- Do not wait for morning - descend in the dark if needed

### Step 2: Dexamethasone
- 8mg IV, IM, or PO immediately
- Then 4mg every 6 hours
- Reduces brain swelling
- Buys time but does NOT replace descent

### Step 3: Supplemental Oxygen
- High flow if available (4-6 L/min)
- Improves oxygenation immediately
- Helpful but not sufficient alone

### Step 4: Gamow Bag (if descent impossible)
- Portable hyperbaric chamber
- Simulates descent of ~1,500-2,000m
- Temporizing measure only
- Must pump every 1-2 minutes

## What NOT To Do

- Do NOT give sedatives
- Do NOT leave the person alone
- Do NOT continue ascent under any circumstances
- Do NOT delay descent waiting for medications to work
- Do NOT use a Gamow bag instead of descent

## Recovery

- With prompt descent, dramatic improvement often within hours
- Full recovery typical with early treatment
- May have residual cognitive effects for days to weeks
- MRI may show white matter changes
- Prior HACE increases risk of recurrence (~60%)`,
      keyTerms: [
        { term: 'ataxia', definition: 'Loss of coordination and balance, resulting in an unsteady, staggering walk', pronunciation: 'uh-TAK-see-uh' },
        { term: 'tandem gait', definition: 'Walking heel-to-toe in a straight line, used to test for ataxia' },
        { term: 'Gamow bag', definition: 'A portable hyperbaric chamber used to simulate descent at altitude' },
        { term: 'papilledema', definition: 'Swelling of the optic disc in the eye due to increased brain pressure' },
      ],
    },
    3: {
      level: 3,
      summary: 'HACE represents vasogenic cerebral edema with blood-brain barrier disruption, occurring as the severe end of the AMS-HACE spectrum. Clinical diagnosis relies on ataxia and altered mental status in the setting of altitude. Treatment is centered on immediate descent, with dexamethasone as the primary pharmacological adjunct.',
      explanation: `## Pathophysiology

### Edema Mechanism
HACE involves predominantly vasogenic edema (extracellular fluid accumulation due to BBB breakdown):

1. **Hypoxia** → HIF activation → VEGF upregulation
2. **VEGF** → Increased vascular permeability
3. **Tight junction dysfunction** → Claudin/occludin redistribution
4. **BBB breakdown** → Protein-rich fluid enters brain parenchyma
5. **Swelling** → Elevated ICP → Neurological dysfunction

### Regional Vulnerability
- White matter more affected than gray matter
- Corpus callosum particularly vulnerable (especially splenium)
- Possible predilection based on regional BBB characteristics

### Progression from AMS
- HACE exists on a continuum with AMS
- Not all AMS progresses to HACE
- Individual factors (genetic, vascular) influence progression
- Continued ascent and exertion promote progression

## Clinical Diagnosis

### Ataxia Assessment

**Tandem Gait Test:**
1. Have patient stand with feet together
2. Walk heel-to-toe in a straight line
3. Unable to complete 10 steps = positive

**Romberg Test:**
- Stand with feet together, eyes closed
- Positive if significant sway or fall

**Grading:**
- Mild: Some difficulty, can complete with effort
- Moderate: Cannot walk unassisted, needs support
- Severe: Cannot stand

### Mental Status Assessment

**Orientation:**
- Person, place, time
- Situation awareness

**Cognitive:**
- Simple math
- Following commands
- Short-term memory

**Consciousness:**
- Alert, drowsy, obtunded, comatose

### Differential Diagnosis

| Condition | Distinguishing Features |
|-----------|------------------------|
| Severe AMS | No ataxia, mental status intact |
| Hypothermia | Low core temperature, cold exposure |
| Hypoglycemia | Low glucose, responds to sugar |
| Hyponatremia | Over-hydration history, seizures common |
| Carbon monoxide | Enclosed space, stove use, multiple affected |
| Intracranial hemorrhage | Sudden onset, focal deficits |
| Meningitis | Fever, neck stiffness |
| Cerebral venous thrombosis | Headache, may have focal signs |

## Treatment Details

### Dexamethasone Regimen

**Dosing:**
- Loading: 8mg IV/IM/PO
- Maintenance: 4mg every 6 hours
- Duration: Continue during and after descent until symptoms resolve

**Mechanism:**
- Reduces vasogenic edema
- Stabilizes BBB
- Anti-inflammatory effects
- May reduce VEGF expression

**Key Point:** Dexamethasone treats symptoms but does NOT address underlying hypoxia. It is an adjunct to descent, not a replacement.

### Oxygen Therapy

**Goals:**
- Target SpO2 > 90%
- Flow rate: 2-4 L/min initially, titrate up as needed
- High-flow if severe

**Limitations:**
- Limited supply in wilderness
- Does not reverse established edema
- Adjunct, not definitive treatment

### Portable Hyperbaric Therapy

**Gamow Bag / Certec Bag:**
- Increases ambient pressure by ~2 psi (105 mmHg)
- Simulates descent of 1,500-2,000m
- Requires continuous pumping (every 1-2 min)
- Session: 1-2 hours

**Indications:**
- Descent temporarily impossible (weather, darkness, terrain)
- Bridge therapy while awaiting evacuation
- Night stabilization before morning descent

**Rebound:**
- Symptoms often return when removed
- Plan for descent during or immediately after

### Evacuation

**Priorities:**
- Helicopter evacuation ideal if available and conditions permit
- Ground evacuation with patient being carried if necessary
- Descent takes priority over waiting for rescue

## Prognosis

### Favorable Factors
- Early recognition and prompt descent
- Short duration of symptoms
- Preserved consciousness

### Unfavorable Factors
- Delayed descent
- Comatose state
- Prolonged hypoxia

### Long-term Outcomes
- Most patients fully recover with prompt treatment
- Some have persistent cognitive deficits (weeks to months)
- MRI changes may persist after clinical recovery
- Recurrence risk with future altitude exposure (~60%)`,
      keyTerms: [
        { term: 'vasogenic edema', definition: 'Brain swelling due to increased BBB permeability and fluid extravasation into extracellular space' },
        { term: 'VEGF', definition: 'Vascular endothelial growth factor - increases vascular permeability, elevated in hypoxia' },
        { term: 'HIF', definition: 'Hypoxia-inducible factor - master regulator of hypoxic responses including VEGF expression' },
        { term: 'ICP', definition: 'Intracranial pressure - elevated in HACE due to brain swelling' },
      ],
      clinicalNotes: 'Always test tandem gait in any patient with AMS symptoms at high altitude. Ataxia is the earliest and most reliable sign of HACE. Dexamethasone should be given early but never delays descent. Consider HACE in any confused or ataxic patient at altitude until proven otherwise.',
    },
    4: {
      level: 4,
      summary: 'HACE pathophysiology involves vasogenic edema from BBB dysfunction driven by HIF-mediated VEGF expression, aquaporin dysregulation, and inflammatory cascades. MRI demonstrates characteristic white matter changes. Management integrates descent with glucocorticoid therapy, while ongoing research explores molecular mechanisms and novel therapeutic targets.',
      explanation: `## Molecular Pathophysiology

### Blood-Brain Barrier Disruption

**Tight Junction Dynamics:**
- Hypoxia alters claudin-5, occludin expression and localization
- ZO-1 (zonula occludens-1) redistribution
- MMP-2, MMP-9 activation degrades junctional proteins
- Net result: Increased paracellular permeability

**Transcellular Transport:**
- Increased caveolae-mediated transcytosis
- Aquaporin-4 (AQP4) dysregulation
- Impaired astrocyte-mediated water handling

**Cellular Players:**
1. **Endothelium:** VEGF receptors, tight junctions, increased permeability
2. **Astrocytes:** AQP4, endfeet swelling, metabolic failure
3. **Pericytes:** Detachment, loss of BBB support
4. **Microglia:** Activation, cytokine release, inflammation

### VEGF Pathway

\`\`\`
Hypoxia → HIF-1α stabilization → VEGF gene transcription
                                      ↓
VEGF protein → VEGFR-2 on endothelium → Src kinase activation
                                              ↓
                              VE-cadherin phosphorylation
                                              ↓
                              Junctional opening → Permeability
\`\`\`

### Inflammatory Component

**Cytokine Involvement:**
- IL-6, IL-1β elevated in HACE
- TNF-α may contribute
- Complement activation (C3a, C5a)

**Inflammasome Activation:**
- NLRP3 activation in hypoxia
- IL-1β maturation and release
- Amplifies inflammatory response

### Edema Types

**Vasogenic (Primary):**
- Extracellular fluid accumulation
- Protein-rich (contrast to cytotoxic)
- Increases ADC on DWI
- Responds to corticosteroids

**Cytotoxic (Secondary):**
- Intracellular swelling (cellular failure)
- ATP depletion → Na+/K+-ATPase failure
- Restricts diffusion (decreases ADC)
- Less responsive to steroids
- Worse prognosis when present

## Neuroimaging

### MRI Findings

**T2/FLAIR:**
- Hyperintensity in white matter
- Corpus callosum involvement (especially splenium)
- May extend to centrum semiovale
- Generally symmetric

**DWI/ADC:**
- Vasogenic: Increased ADC (T2 "shine-through")
- Cytotoxic: Restricted diffusion (true restriction)
- Mixed patterns in severe cases

**SWI:**
- Microhemorrhages reported in severe HACE
- May indicate worse prognosis
- Persist after clinical recovery

**Volumetrics:**
- Increased total brain volume
- White matter volume increase
- Correlates with symptom severity

### Resolution Patterns

- Clinical improvement often precedes imaging resolution
- Some changes persist weeks to months
- Microhemorrhages may be permanent
- Corpus callosum changes particularly persistent

## Pharmacological Management

### Dexamethasone: Mechanism of Action

**Genomic Effects (hours):**
- GR activation → transrepression of NF-κB
- Decreased pro-inflammatory cytokine expression
- Reduced VEGF transcription
- Increased tight junction protein expression

**Non-Genomic Effects (minutes):**
- Membrane stabilization
- Endothelial barrier enhancement
- Rapid vascular effects

**BBB Specific:**
- Stabilizes tight junctions
- Reduces transcytosis
- Decreases aquaporin expression

### Dosing Considerations

| Scenario | Dose |
|----------|------|
| Initial treatment | 8mg IV/IM/PO |
| Maintenance | 4mg q6h |
| Prophylaxis (prior HACE) | 4mg q12h |
| Taper | Not needed if < 5 days |

### Adjunctive Therapies

**Acetazolamide:**
- Less effective than dexamethasone for HACE
- May have some role if given early
- Does not cross BBB significantly

**Diuretics:**
- Mannitol (osmotic): Theoretical but unproven
- Furosemide: Not recommended (volume depletion risky)

**Hypothermia:**
- Neuroprotective in other conditions
- No data for HACE specifically
- May occur incidentally during evacuation

## Advanced Management Scenarios

### Comatose Patient at Altitude

1. Secure airway (recovery position if resources limited)
2. Dexamethasone 8mg IM
3. Supplemental O2 maximum flow
4. Gamow bag if available and descent impossible
5. Immediate evacuation by any means
6. Consider empiric glucose if available
7. Keep warm (prevent concurrent hypothermia)

### Delayed Evacuation

- Continue dexamethasone every 6 hours
- Rotate Gamow bag sessions (1-2h on, rest, repeat)
- Monitor closely for deterioration
- Evacuate at first opportunity
- Do not discontinue dexamethasone until at low altitude

### Post-Recovery Considerations

- Gradual reascent only after complete resolution
- Consider MRI to assess for residual changes
- Dexamethasone prophylaxis for any future altitude exposure
- Very gradual ascent protocol if return to altitude necessary
- Cognitive testing if any residual symptoms

## Prognostic Factors

| Factor | Better Prognosis | Worse Prognosis |
|--------|------------------|-----------------|
| Time to descent | Immediate | Delayed >12 hours |
| Consciousness | Preserved/drowsy | Comatose |
| Imaging | Vasogenic only | Cytotoxic/hemorrhagic |
| Response to steroids | Rapid improvement | No response |
| Duration of hypoxia | Brief | Prolonged |`,
      keyTerms: [
        { term: 'claudin-5', definition: 'Key tight junction protein in brain endothelium; altered in HACE' },
        { term: 'ZO-1', definition: 'Zonula occludens-1; scaffolding protein linking tight junctions to cytoskeleton' },
        { term: 'MMP-9', definition: 'Matrix metalloproteinase-9; degrades BBB matrix and tight junctions in hypoxia' },
        { term: 'cytotoxic edema', definition: 'Intracellular swelling due to energy failure; indicates worse prognosis in HACE' },
      ],
      clinicalNotes: 'Restricted diffusion on MRI (cytotoxic edema) in HACE suggests cellular energy failure and worse prognosis. Corpus callosum signal changes are characteristic but not pathognomonic. Microhemorrhages on SWI may persist after clinical recovery. The combination of HACE and HAPE carries particularly high mortality and requires aggressive management of both conditions.',
    },
    5: {
      level: 5,
      summary: 'HACE represents the severe end of the AMS-HACE continuum, driven by BBB failure through VEGF-mediated vascular permeability, tight junction disruption, and inflammatory cascades. Contemporary understanding integrates molecular insights from HIF biology, aquaporin physiology, and inflammasome activation. Research continues to elucidate genetic susceptibility factors and explore novel therapeutic targets beyond glucocorticoids.',
      explanation: `## Molecular Mechanisms: Current State of Knowledge

### Oxygen Sensing and HIF Activation

**PHD-HIF-VHL Axis:**
\`\`\`
Normoxia:
  PHD enzymes (PHD1-3) + O2 → hydroxylate HIF-α
  VHL recognizes hydroxylated HIF-α → ubiquitination → degradation

Hypoxia:
  PHD enzymes inactive (no O2 substrate)
  HIF-α stabilized → nuclear translocation
  HIF-α + HIF-β → HRE binding → target gene transcription
\`\`\`

**HACE-Relevant HIF Targets:**
- VEGF-A: Vascular permeability
- ET-1: Vasoconstriction (systemic)
- iNOS: Nitric oxide (may be neuroprotective or neurotoxic)
- EPO: Erythropoiesis (long-term)
- GLUT-1: Metabolic adaptation

### Aquaporin Pathophysiology

**AQP4 in HACE:**
- Primary water channel in astrocyte endfeet
- Normally facilitates brain water homeostasis
- Hypoxia causes:
  - AQP4 redistribution from endfeet
  - Altered expression levels
  - Impaired water clearance from parenchyma

**AQP4 Paradox:**
- Deletion studies show complex role
- May be needed for edema resolution
- Redistribution vs. total expression matters

### Glymphatic System Dysfunction

**Normal Function:**
- CSF enters brain along para-arterial spaces
- Flows through interstitium via AQP4
- Exits along para-venous spaces
- Clears metabolic waste during sleep

**At Altitude:**
- Sleep disrupted (periodic breathing)
- AQP4 dysfunction impairs flow
- Waste clearance reduced
- May contribute to morning symptom peak
- Edema fluid clearance impaired

### Inflammasome Activation

**NLRP3 Pathway:**
\`\`\`
Hypoxia + DAMPs → NLRP3 assembly
                      ↓
              Caspase-1 activation
                      ↓
              Pro-IL-1β → IL-1β (mature)
              Pro-IL-18 → IL-18 (mature)
                      ↓
              Pyroptosis / Inflammation
\`\`\`

**Contribution to HACE:**
- Amplifies inflammatory response
- Recruits immune cells
- Increases BBB permeability
- Potential therapeutic target

### Complement Cascade

- C3a, C5a elevated in severe altitude illness
- Anaphylatoxin effects on vasculature
- MAC formation potentially damaging
- May contribute to BBB disruption

## Genetic Determinants

### HIF Pathway Variants

| Gene | Variant/Effect | Evidence in HACE |
|------|----------------|------------------|
| EPAS1 (HIF-2α) | Tibetan protective variant | Lower HACE incidence in Tibetans |
| EGLN1 (PHD2) | Altered oxygen sensing | Associated with altitude adaptation |
| HIF-1α | Polymorphisms | Some associated with susceptibility |

### Other Candidate Genes

**Vascular:**
- ACE I/D: Controversial associations
- eNOS: Affects NO production
- VEGF polymorphisms: May affect permeability

**Inflammatory:**
- IL-6 polymorphisms
- TNF-α variants

**Transporter:**
- AQP4 variants (under investigation)
- ABCB1 (P-glycoprotein)

## Advanced Imaging Correlates

### Multimodal MRI Analysis

**Volumetric Changes:**
- Total brain volume: +1-3% in severe AMS/HACE
- White matter volume: Disproportionately increased
- Ventricular volume: Slightly compressed

**DTI (Diffusion Tensor Imaging):**
- Fractional anisotropy decreased in white matter
- Mean diffusivity increased
- Indicates microstructural damage
- May correlate with cognitive effects

**Perfusion Imaging:**
- Increased CBF globally
- Regional heterogeneity
- May show "luxury perfusion" pattern

### Resolution Patterns

**Acute → Subacute:**
- Clinical improvement precedes imaging
- T2/FLAIR changes slowly resolve
- Days to weeks

**Long-term:**
- Some changes may persist months
- Microhemorrhages often permanent
- Subtle white matter changes may remain
- Cognitive effects generally resolve but may persist

## Novel Therapeutic Targets

### VEGF Pathway Inhibition

**Rationale:**
- VEGF central to BBB disruption
- Anti-VEGF agents (bevacizumab) used for other vasogenic edema

**Challenges:**
- No altitude-specific trials
- Thrombotic risks at altitude
- Wound healing concerns

### Inflammasome Modulation

**Potential Approaches:**
- NLRP3 inhibitors (MCC950, OLT1177)
- IL-1 receptor antagonists (anakinra)
- Colchicine (reduces NLRP3 activation)

**Status:**
- Preclinical/theoretical
- No human altitude trials

### Aquaporin Modulators

**Theoretical:**
- Enhance AQP4 function for edema clearance
- Block AQP4 to prevent initial edema

**Challenges:**
- Dual role of AQP4 complicates targeting
- No selective agents clinically available

### Neuroprotective Strategies

- Erythropoietin: Neuroprotective beyond erythropoiesis
- Metabolic support: Glucose, ketones
- Antioxidants: Mixed evidence at altitude

## Special Populations and Scenarios

### Pediatric HACE

- Children may not articulate symptoms
- Behavioral changes may be early sign
- Higher index of suspicion needed
- Dexamethasone dosing: 0.15 mg/kg (max 8mg) then 0.075 mg/kg q6h

### HACE with Concurrent HAPE

- Combined presentation carries highest mortality
- Treat both simultaneously
- Descent remains paramount
- Add nifedipine to dexamethasone regimen
- Oxygen prioritization if limited supply

### Recurrent HACE

**Risk:** ~60% recurrence with repeat altitude exposure

**Prevention Strategy:**
- Very gradual ascent protocol
- Dexamethasone prophylaxis (4mg q12h)
- Consider acetazolamide in addition
- Low threshold for descent at any symptoms
- Consider avoiding extreme altitude

### Evacuation Decision Algorithms

\`\`\`
HACE Diagnosis Confirmed:
    │
    ├── Patient ambulatory?
    │       ├── Yes → Begin descent immediately with support
    │       └── No → Carry down or helicopter if available
    │
    ├── Descent possible now?
    │       ├── Yes → Go immediately (night, weather considered)
    │       └── No → Gamow bag + O2 + dexamethasone until feasible
    │
    └── Response to treatment?
            ├── Improving → Continue descent to low altitude
            └── Not improving → Accelerate evacuation, prepare for
                                airway management, consider
                                differential diagnoses
\`\`\`

## Future Directions

### Biomarker Development

- S100B for BBB integrity assessment
- NSE (neuron-specific enolase) for neuronal injury
- GFAP for astrocyte injury
- Circulating miRNAs

### Prediction Models

- Integrating genetic markers
- HVR testing pre-travel
- Imaging biomarkers (DTI metrics at baseline)

### Therapeutic Innovation

- Targeted drug delivery across BBB
- Small molecule NLRP3 inhibitors
- AQP4 modulators
- Neuroprotective combinations

### Field Technology

- Portable MRI concepts
- Real-time biomarker monitoring
- AI-assisted decision support
- Telemedicine integration for remote consultation`,
      keyTerms: [
        { term: 'HRE', definition: 'Hypoxia response element - DNA binding site for HIF transcription factors' },
        { term: 'pyroptosis', definition: 'Inflammatory form of programmed cell death triggered by inflammasome activation' },
        { term: 'DTI', definition: 'Diffusion tensor imaging - MRI technique assessing white matter microstructure' },
        { term: 'DAMPs', definition: 'Danger-associated molecular patterns - endogenous molecules triggering inflammation' },
      ],
      clinicalNotes: `Clinical Pearls for HACE:
1. Tandem gait testing is more sensitive than Romberg for early ataxia detection
2. The combination of HACE + HAPE has synergistic mortality risk
3. DTI may reveal microstructural changes even when conventional MRI appears normal
4. Cognitive effects may persist for weeks after clinical resolution
5. Prior HACE confers ~60% recurrence risk at repeat altitude exposure
6. Dexamethasone prophylaxis is reasonable for those with prior HACE
7. Pediatric patients may present with behavioral changes rather than classic ataxia
8. Glymphatic dysfunction from disturbed sleep may amplify edema accumulation`,
    },
  },

  media: [
    {
      id: 'hace-tandem-gait-test',
      type: 'diagram',
      filename: 'tandem-gait-test.svg',
      title: 'Tandem Gait Test for HACE Screening',
      description: 'Illustration of heel-to-toe walking test for ataxia detection',
    },
    {
      id: 'hace-mri-findings',
      type: 'image',
      filename: 'hace-mri-findings.jpg',
      title: 'MRI Findings in HACE',
      description: 'T2/FLAIR showing corpus callosum white matter changes',
    },
  ],

  citations: [
    {
      id: 'hackett-hace-pathophysiology',
      type: 'article',
      title: 'High Altitude Cerebral Edema: The Brain at Extreme Altitude',
      authors: ['Hackett, P.H.', 'Roach, R.C.'],
      source: 'High Altitude Medicine & Biology',
    },
    {
      id: 'wilson-hace-imaging',
      type: 'article',
      title: 'Neuroimaging at High Altitude',
      source: 'High Altitude Medicine & Biology',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'parent', label: 'Altitude Sickness Overview' },
    { targetId: 'wilderness-ams', targetType: 'condition', relationship: 'sibling', label: 'Acute Mountain Sickness' },
    { targetId: 'wilderness-hape', targetType: 'condition', relationship: 'sibling', label: 'High Altitude Pulmonary Edema' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['altitude', 'wilderness-medicine', 'emergency-medicine'],
    keywords: ['HACE', 'cerebral edema', 'ataxia', 'dexamethasone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default highAltitudeCerebralEdema;
