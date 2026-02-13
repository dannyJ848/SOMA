/**
 * Brushing Techniques - Comprehensive Educational Content
 *
 * Covers proper toothbrushing methods, brush selection,
 * and evidence-based recommendations for effective plaque removal.
 */

import { EducationalContent } from '../../types';

export const brushingTechniques: EducationalContent = {
  id: 'topic-brushing-techniques',
  type: 'topic',
  name: 'Brushing Techniques',
  nameEs: 'Tecnicas de Cepillado',
  alternateNames: [
    'Toothbrushing Methods',
    'Proper Brushing',
    'Tooth Brushing Technique',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Brushing your teeth the right way removes the sticky germs that cause cavities and gum problems. Using proper technique for 2 minutes twice a day keeps your mouth healthy.',
      explanation: `**How to Brush Your Teeth the Right Way:**

**Step 1: Get Ready**
- Use a soft-bristled toothbrush
- Put a pea-sized amount of fluoride toothpaste on the brush
- Hold the brush at an angle, like you are scrubbing a floor

**Step 2: Brush Each Section**
- Divide your mouth into 4 parts: upper right, upper left, lower right, lower left
- Spend about 30 seconds on each part
- Total time: 2 minutes

**Step 3: The Right Motion**
- Use short, gentle back-and-forth strokes
- Brush the outer surfaces (facing your cheek)
- Brush the inner surfaces (facing your tongue)
- Brush the chewing surfaces (the flat tops)
- Do not forget the back teeth!

**Step 4: Brush Your Tongue**
- Gently brush your tongue from back to front
- This removes bacteria that cause bad breath

**Step 5: Spit, Do Not Rinse**
- Spit out the toothpaste
- Try not to rinse with water right away
- This lets the fluoride keep working

**Common Mistakes to Avoid:**
- Brushing too hard (can hurt gums and wear down teeth)
- Using a hard-bristled brush
- Rushing through brushing (less than 2 minutes)
- Only brushing teeth you can see in the mirror
- Using an old, worn-out toothbrush

**When to Replace Your Toothbrush:**
- Every 3-4 months
- When bristles look frayed or bent
- After you have been sick`,
      keyTerms: [
        { term: 'bristles', definition: 'The thin fibers on a toothbrush that clean your teeth' },
        { term: 'soft-bristled', definition: 'A toothbrush with gentle, flexible bristles that do not hurt your gums' },
        { term: 'fluoride', definition: 'A mineral in toothpaste that makes teeth stronger' },
        { term: 'plaque', definition: 'The sticky layer of germs on teeth that brushing removes' },
      ],
      analogies: [
        'Brushing your teeth is like sweeping a floor - you need to go in the right direction to get all the dirt.',
        'Your toothbrush bristles are like tiny brooms sweeping away the germs from your teeth.',
        'Think of the 2-minute rule like brushing is a song - brush until the whole song is done!',
      ],
      examples: [
        'If you only brush for 30 seconds, you miss a lot of areas and leave plaque behind.',
        'Tilting your brush at an angle helps the bristles get under the gum line where germs hide.',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective toothbrushing requires proper technique, appropriate brush selection, and adequate duration. The Modified Bass technique is most commonly recommended for adults, while various adaptations exist for different clinical situations.',
      explanation: `## Brushing Technique Methods

**Modified Bass Technique (Most Recommended):**

1. Place bristles at 45-degree angle to gum line
2. Apply light pressure so bristles slide under gum margin
3. Use short back-and-forth vibrating strokes
4. After several strokes, roll bristles toward biting surface
5. Repeat for each tooth surface

**Advantages:**
- Cleans sulcus (space between tooth and gum)
- Effective plaque removal
- Stimulates gum tissue

**Other Techniques:**

| Technique | Motion | Best For |
|-----------|--------|----------|
| Stillman | Vibratory + sweep | Gum recession |
| Charter | Bristles point toward crown | After surgery, braces |
| Circular (Fones) | Large circles | Young children |
| Horizontal scrub | Back-and-forth | Simple but less effective |

## Brush Selection

**Manual Toothbrushes:**
- Soft bristles recommended for most patients
- Small head reaches all areas
- Replace every 3-4 months or when frayed
- ADA Seal of Acceptance indicates testing

**Electric Toothbrushes:**

*Types:*
- Oscillating-rotating: Head rotates back and forth
- Sonic/vibrating: High-frequency vibrations
- Ultrasonic: Very high frequency (beyond hearing)

*Benefits:*
- Built-in timers
- Pressure sensors
- May remove more plaque than manual
- Helpful for those with limited dexterity

## Toothpaste Selection

**Key Ingredients:**
- Fluoride (1000-1500 ppm): Essential for cavity prevention
- Mild abrasives: Clean stains
- Detergents (SLS): Create foam
- Flavoring: Encourage use

**Special Formulations:**
- Sensitivity: Potassium nitrate or stannous fluoride
- Whitening: More abrasive or peroxide
- Tartar control: Pyrophosphates
- Gum health: Stannous fluoride, triclosan (less common now)

## Duration and Frequency

**Recommendations:**
- 2 minutes per session
- Twice daily (morning and night)
- 30 seconds per quadrant

**Tips for Timing:**
- Use a timer or electric brush with built-in timer
- Play a 2-minute song
- Use apps designed for brushing
- Watch the clock when starting

## Special Situations

**Orthodontic Appliances:**
- Brush around each bracket
- Use interdental brushes for wires
- Consider electric toothbrush
- Brush after every meal if possible

**After Surgery:**
- Use extra-soft brush near surgical site
- May use prescribed rinse instead of brushing
- Resume normal brushing as healing allows`,
      keyTerms: [
        { term: 'Modified Bass technique', definition: 'Brushing method with bristles at 45 degrees to gum line using vibratory motion followed by rolling sweep' },
        { term: 'oscillating-rotating', definition: 'Electric brush type where circular head rotates back and forth' },
        { term: 'gingival sulcus', definition: 'The natural space between tooth and gum tissue; should be 1-3 mm deep' },
        { term: 'ADA Seal', definition: 'American Dental Association mark indicating product has been tested for safety and effectiveness' },
        { term: 'SLS', definition: 'Sodium lauryl sulfate; detergent in toothpaste that creates foam' },
        { term: 'abrasives', definition: 'Mild gritty substances in toothpaste that help remove stains' },
      ],
      analogies: [
        'The 45-degree angle in the Bass technique is like angling a broom to sweep dust out of a corner - you get into the hard-to-reach spaces.',
        'An oscillating-rotating brush head is like a tiny floor buffer, polishing each tooth surface.',
      ],
    },
    3: {
      level: 3,
      summary: 'Toothbrushing efficacy depends on technique biomechanics, bristle characteristics, and patient factors. Understanding the evidence base for brushing recommendations enables clinicians to make individualized recommendations.',
      explanation: `## Biomechanics of Plaque Removal

**Forces and Motion:**

*Plaque Removal Requires:*
- Shear forces at biofilm-tooth interface
- Sufficient contact time
- Access to tooth surface
- Disruption of biofilm matrix

*Bristle Mechanics:*
- Softer bristles conform to tooth contours
- Penetrate sulcus without traumatizing tissue
- End-rounded bristles reduce gingival injury
- Bristle diameter affects flexibility and cleaning

**Bristle Characteristics:**

| Property | Effect | Recommendation |
|----------|--------|----------------|
| Diameter | Thinner = softer | 0.15-0.20 mm (soft) |
| Length | Longer = more flexible | 10-12 mm |
| End shape | Rounded = less trauma | End-rounded essential |
| Material | Nylon standard | Nylon or polyester |
| Pattern | Multi-level may reach better | Various designs |

## Evidence for Brushing Techniques

**Systematic Review Findings:**

*Cochrane Reviews:*
- No single technique proven superior for plaque removal
- Modified Bass and Bass most studied
- Technique matters less than thoroughness
- Supervision improves outcomes

*Powered vs. Manual:*
- Oscillating-rotating: 11% greater plaque reduction
- 6% greater gingivitis reduction
- Benefits maintained over time
- No difference in safety

**Duration Studies:**
- Plaque removal increases with time up to 2 minutes
- Diminishing returns after 2 minutes
- Average unsupervised brushing: 45-70 seconds
- Timers significantly increase duration

## Toothbrush Design Factors

**Head Design:**
- Smaller heads access posterior teeth better
- Compact head recommended for most adults
- Children: Age-appropriate sizes

**Handle Design:**
- Affects grip and control
- Angled handles may improve access
- Ergonomic for dexterity limitations

**Bristle Arrangement:**
- Flat trim: Standard
- Multi-level: May access interproximal better
- Angled bristles: Marketing claims variable evidence
- Charcoal/silicone: No proven benefit

## Clinical Application

**Patient Assessment:**
*Consider:*
- Manual dexterity
- Motivation and compliance
- Gingival health status
- Orthodontic appliances
- Previous brushing trauma

**Technique Selection:**

| Patient Situation | Recommended Technique |
|-------------------|----------------------|
| Healthy adult | Modified Bass |
| Gingival recession | Modified Stillman |
| Orthodontic treatment | Modified Bass + interproximal aids |
| Young child | Circular (Fones) or parent-assisted Bass |
| Limited dexterity | Power brush with large handle |
| Post-surgical | Charter or extra-soft brushing |

## Complications of Improper Brushing

**Toothbrush Abrasion:**
- Horizontal scrubbing with hard bristles
- Excessive force
- Cervical notches (abfraction lesions)
- Usually on canines and premolars

**Gingival Recession:**
- Aggressive brushing technique
- Hard bristles
- Exposes root surface
- Increases sensitivity risk

**Prevention:**
- Soft bristles only
- Proper technique instruction
- Electric brush pressure sensors
- Reduce force ("massage" not "scrub")

## Special Populations

**Pediatric:**
- Parent brushing until age 6-8
- Supervised brushing age 8+
- Fluoride toothpaste amount: Smear under 3, pea-size 3-6
- Fun timers and songs for engagement

**Geriatric:**
- Dexterity limitations common
- Electric brushes beneficial
- Modified handles may help
- Caregiver assistance when needed

**Medically Compromised:**
- Immunocompromised: Extra-soft brush
- Bleeding disorders: Gentle technique, soft brush
- Chemotherapy: May need ultrasoft or sponge`,
      keyTerms: [
        { term: 'bristle diameter', definition: 'Thickness of individual brush fibers; thinner = softer and more flexible' },
        { term: 'end-rounded', definition: 'Bristle tips that are polished round rather than cut sharp to prevent tissue damage' },
        { term: 'toothbrush abrasion', definition: 'Wear of tooth structure, particularly at cervical areas, from aggressive brushing' },
        { term: 'abfraction', definition: 'Cervical tooth lesion from stress concentration and/or abrasion' },
        { term: 'shear force', definition: 'Force applied parallel to surface that disrupts plaque attachment' },
        { term: 'biofilm matrix', definition: 'Extracellular polymeric substance structure holding bacteria together in plaque' },
      ],
      clinicalNotes: 'Evidence does not strongly support one brushing technique over another - the key is thoroughness and adequate time. Focus patient education on duration (2 minutes), coverage (all surfaces), and gentleness (soft bristles, light pressure). Recommend oscillating-rotating electric brushes for patients who would benefit from improved plaque control or have dexterity issues.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of brushing encompasses tribological principles of plaque removal, molecular mechanisms of toothpaste ingredients, bioengineering of brush designs, and behavior change strategies for oral hygiene improvement.',
      explanation: `## Tribology of Toothbrushing

**Mechanical Plaque Removal:**

*Contact Mechanics:*
- Bristle-tooth contact creates normal and shear forces
- Plaque removal requires exceeding adhesive forces
- Biofilm viscoelasticity affects removal efficiency
- Water acts as lubricant affecting force transmission

*Tribological Variables:*
| Variable | Effect |
|----------|--------|
| Normal force | Higher = more abrasion risk |
| Sliding velocity | Higher = more shear force |
| Contact time | Longer = more removal |
| Lubrication | Affects friction coefficient |
| Surface roughness | Affects plaque adhesion |

**Bristle Dynamics:**

*Bending Mechanics:*
- Bristle bending follows Euler beam theory
- Stiffness proportional to E × d⁴ (modulus × diameter⁴)
- Bending allows surface conformation
- Recovery (resilience) affects durability

*Fatigue and Wear:*
- Bristle splaying from repeated bending
- Loss of effective stiffness over time
- Color-changing indicators in some brushes
- 3-month recommendation based on degradation studies

## Toothpaste Active Ingredients

**Fluoride:**

*Mechanisms:*
1. Formation of fluorapatite (more acid-resistant)
2. Inhibition of enolase enzyme in bacterial glycolysis
3. Precipitation of calcium fluoride reservoirs
4. Enhanced remineralization kinetics

*Formulations:*
| Compound | Bioavailable F | Notes |
|----------|---------------|-------|
| Sodium fluoride | High | Standard; incompatible with calcium |
| Stannous fluoride | High | Also antimicrobial; may stain |
| Sodium monofluorophosphate | Moderate | Compatible with calcium abrasives |
| Amine fluoride | High | Popular in Europe |

*Concentration:*
- Standard: 1000-1500 ppm F
- High-strength: 5000 ppm (prescription)
- Pediatric: 1000 ppm (same as adult, smaller amount)

**Sensitivity Agents:**

*Potassium Nitrate:*
- Depolarizes nerve fibers
- Requires continued use for effect
- Concentration: 5%

*Stannous Fluoride:*
- Occludes dentinal tubules
- Also reduces inflammation
- Can cause staining

*Arginine-Calcium Carbonate:*
- Plugs tubules with calcium deposits
- pH-raising effect

**Abrasive Systems:**

*Relative Dentin Abrasivity (RDA):*
- Standard scale 0-250
- Low (<70): Safe for daily use, less stain removal
- Medium (70-100): Good cleaning, safe for most
- High (100-150): Whitening products
- Very high (>150): Use with caution

*Common Abrasives:*
- Hydrated silica (most common)
- Calcium carbonate
- Dicalcium phosphate
- Aluminum hydroxide

## Powered Toothbrush Technology

**Motion Types:**

*Oscillating-Rotating:*
- 7,600-8,800 oscillations/min typical
- Alternating 60° rotations
- Best evidence base (Oral-B type)

*Sonic:*
- 31,000 brush strokes/min
- Fluid dynamics may enhance cleaning
- Philips Sonicare type

*Ultrasonic:*
- >20 kHz frequency
- May disrupt biofilm structure
- Less clinical evidence

**Smart Features:**
- Pressure sensors with feedback
- Position detection (Bluetooth connectivity)
- Timer and quadrant pacers
- App integration for tracking
- AI coaching (emerging)

## Behavior Change for Oral Hygiene

**Theoretical Frameworks:**

*Health Belief Model:*
- Perceived susceptibility to disease
- Perceived severity of consequences
- Perceived benefits of action
- Perceived barriers to action

*COM-B Model:*
- Capability (physical, psychological)
- Opportunity (social, physical)
- Motivation (reflective, automatic)

**Effective Interventions:**

| Strategy | Evidence Level |
|----------|----------------|
| One-on-one instruction | Moderate-strong |
| Disclosing tablets | Moderate |
| Electric brush timers | Moderate |
| Motivational interviewing | Moderate |
| Mass media alone | Weak |
| Written instructions alone | Weak |

**Implementation Strategies:**
- Specific action planning ("I will brush for 2 minutes after breakfast")
- Habit stacking (link to existing routine)
- Environmental cues (visible toothbrush)
- Self-monitoring (apps, calendars)
- Social support (family brushing time)

## Quality Assessment

**Plaque Indices:**
- O'Leary Plaque Control Record
- Silness-Löe Plaque Index
- Turesky modification of Quigley-Hein
- Digital imaging analysis (research)

**Disclosure Methods:**
- Two-tone disclosants (new vs. old plaque)
- Fluorescent disclosants
- Chairside demonstration value
- Patient motivation tool`,
      keyTerms: [
        { term: 'tribology', definition: 'Science of friction, wear, and lubrication; applies to brush-tooth interactions' },
        { term: 'RDA', definition: 'Relative Dentin Abrasivity; standardized scale for toothpaste abrasiveness' },
        { term: 'enolase', definition: 'Glycolytic enzyme inhibited by fluoride; reduces bacterial acid production' },
        { term: 'COM-B model', definition: 'Behavior change framework: Capability, Opportunity, Motivation → Behavior' },
        { term: 'dentinal tubule occlusion', definition: 'Blocking of microscopic channels in dentin to reduce sensitivity' },
        { term: 'disclosing agent', definition: 'Dye that stains dental plaque to visualize areas missed during brushing' },
      ],
      clinicalNotes: 'When selecting toothpaste, consider both active ingredients and abrasivity. High-abrasivity whitening pastes may cause problems for patients with recession or erosion. Stannous fluoride offers combined anti-caries and anti-gingivitis benefits. For behavior change, focus on capability and opportunity barriers, not just motivation - many patients know they should brush better but face practical obstacles.',
    },
    5: {
      level: 5,
      summary: 'Contemporary toothbrushing science integrates biofilm mechanobiology, advanced materials science for brush development, precision behavioral interventions, and emerging technologies for optimized plaque control.',
      explanation: `## Biofilm Mechanobiology

**Mechanical Properties of Dental Biofilm:**

*Viscoelastic Behavior:*
- Biofilm exhibits both viscous and elastic properties
- Stress relaxation under constant strain
- Creep under constant stress
- Time-dependent response to brushing forces

*Mechanical Parameters:*
| Property | Value Range | Clinical Relevance |
|----------|-------------|-------------------|
| Elastic modulus | 1-100 kPa | Resistance to deformation |
| Yield stress | 1-10 Pa | Force to initiate flow |
| Cohesive strength | 1-100 Pa | Resistance to internal fracture |
| Adhesive strength | 0.1-10 MPa | Attachment to tooth |

**Removal Mechanisms:**

*Failure Modes:*
1. **Adhesive failure**: Biofilm detaches from tooth (preferred)
2. **Cohesive failure**: Biofilm tears internally
3. **Abrasion**: Progressive surface removal
4. **Erosion**: Fluid shear (adjunct to bristle contact)

*Optimal Removal Strategy:*
- Combine normal force (compression) with shear
- Exceed adhesive yield stress
- Avoid excessive normal force (prevent abrasion)
- Fluid dynamics enhance removal efficiency

## Advanced Brush Engineering

**Materials Science:**

*Bristle Materials:*
- Nylon 6,12: Standard, good recovery
- Polybutylene terephthalate (PBT): Higher wear resistance
- PEEK composites: Enhanced properties
- Tapered bristles: Softer tips, stiffer base

*Surface Modifications:*
- Antimicrobial coatings (silver, chitosan)
- Hydrophilic treatments for plaque release
- Textured surfaces for enhanced cleaning

**Computational Modeling:**

*Finite Element Analysis:*
- Bristle deformation prediction
- Stress distribution on tissues
- Optimization of bristle arrangement
- Virtual testing before manufacturing

*CFD (Computational Fluid Dynamics):*
- Fluid flow around bristles
- Turbulence effects on plaque removal
- Design optimization for powered brushes

**Emerging Technologies:**

*AI-Enhanced Brushing:*
- Real-time motion tracking
- Technique feedback and correction
- Personalized coaching algorithms
- Longitudinal pattern analysis

*Sensor Integration:*
- Force sensors in brush head
- Position detection (accelerometer, gyroscope)
- Biomarker detection (saliva analysis)
- Integration with health platforms

## Precision Behavioral Interventions

**Digital Health Applications:**

*Smartphone Apps:*
- Timer functions
- Technique guidance
- Habit tracking
- Gamification elements
- Reward systems

*Evidence for Digital Interventions:*
- Short-term improvement in duration: Consistent
- Long-term behavior change: Variable
- User engagement: Declines over time
- Most effective as part of comprehensive program

**Just-in-Time Adaptive Interventions (JITAIs):**
- Tailored prompts based on context
- Machine learning for optimal timing
- Personalization based on response patterns
- Integration with daily routine data

**Motivational Strategies:**

*Implementation Intentions:*
- Specific "if-then" plans
- Link to existing habits
- Environmental modification
- Social commitment

*Feedback Mechanisms:*
- Real-time (during brushing)
- Summary (post-session)
- Longitudinal (trends over time)
- Clinical (professional reinforcement)

## Research Frontiers

**Biofilm-Disrupting Technologies:**

*Microbubble Technology:*
- Acoustic cavitation effects
- Enhanced fluid dynamics
- Adjunct to mechanical brushing
- Research stage

*Electrochemical Approaches:*
- Electric field effects on biofilm
- Iontophoresis for ion delivery
- Investigational

**Regenerative Approaches:**

*Enamel Remineralization:*
- Self-assembling peptide incorporation
- Calcium phosphate nanotechnology
- Growth factor delivery
- Integration with brushing products

**Microbiome Modulation:**

*Prebiotic Toothpastes:*
- Selectively promote beneficial bacteria
- Shift ecological balance
- Research phase

*Postbiotic Products:*
- Bacterial metabolite delivery
- Antimicrobial peptide incorporation
- Enzyme-based plaque disruption

## Clinical Practice Integration

**Risk-Based Recommendations:**

| Risk Level | Brush Type | Toothpaste | Frequency | Adjuncts |
|------------|------------|------------|-----------|----------|
| Low | Manual or power | Standard fluoride | 2x/day | Floss |
| Moderate | Power preferred | Stannous fluoride | 2x/day | Interdental brush |
| High | Power with sensors | Prescription fluoride | 2-3x/day | CHX rinse |
| Special needs | Adaptive devices | Per condition | Per need | Caregiver assistance |

**Quality Improvement:**

*Metrics:*
- Plaque index improvement
- Gingivitis reduction
- Patient-reported outcomes
- Compliance tracking

*Continuous Improvement:*
- Regular technique assessment
- Technology updates
- Evidence-based protocol revision
- Patient feedback integration

**Future Directions:**

1. Personalized brush design based on oral anatomy
2. Real-time biomarker feedback
3. AI-driven technique optimization
4. Integration with systemic health monitoring
5. Sustainable materials development
6. Precision targeting of pathogenic species
7. Home-based professional-quality cleaning`,
      keyTerms: [
        { term: 'viscoelasticity', definition: 'Property of materials exhibiting both viscous (fluid-like) and elastic (solid-like) behavior under stress' },
        { term: 'adhesive failure', definition: 'Separation of biofilm from tooth surface at the interface; preferred removal mechanism' },
        { term: 'JITAI', definition: 'Just-in-Time Adaptive Intervention; context-aware digital health prompts tailored to individual and moment' },
        { term: 'finite element analysis', definition: 'Computational method for predicting mechanical behavior by dividing structure into small elements' },
        { term: 'postbiotics', definition: 'Non-viable bacterial products or metabolites with health-promoting properties' },
        { term: 'acoustic cavitation', definition: 'Formation and collapse of bubbles in liquid due to sound waves; can disrupt biofilm' },
      ],
      clinicalNotes: `Translational priorities:
1. AI-enhanced brushing systems are becoming available - early evidence suggests improved technique and compliance
2. Biofilm mechanical properties research informs optimal brushing protocols (combine compression with shear, 2-minute duration validated)
3. Digital health interventions work best as part of comprehensive care, not standalone
4. Sensor-equipped brushes provide objective compliance data for clinical decision-making
5. Stannous fluoride products offer combined benefits (anti-caries, anti-gingivitis, desensitizing)
6. Sustainability concerns are driving development of biodegradable brush materials
7. Precision recommendations based on individual risk profile optimize resource allocation`,
    },
  },

  media: [
    {
      id: 'modified-bass',
      type: 'diagram',
      filename: 'modified-bass-technique.svg',
      title: 'Modified Bass Technique',
      description: 'Step-by-step illustration of the Modified Bass brushing method',
    },
    {
      id: 'brush-angulation',
      type: 'diagram',
      filename: 'brush-angulation-45-degrees.svg',
      title: 'Proper Brush Angulation',
      description: 'Diagram showing correct 45-degree angle for sulcular brushing',
    },
  ],

  citations: [
    {
      id: 'ccochrane-powered',
      type: 'article',
      title: 'Powered versus manual toothbrushing for oral health',
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'wu-wilkerson',
      type: 'textbook',
      title: 'Clinical Practice of the Dental Hygienist',
      authors: ['Wilkins, E.M.'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-hygiene-basics', targetType: 'topic', relationship: 'parent', label: 'Dental Hygiene Basics' },
    { targetId: 'topic-flossing-techniques', targetType: 'topic', relationship: 'sibling', label: 'Flossing Techniques' },
    { targetId: 'condition-gingivitis', targetType: 'condition', relationship: 'related', label: 'Gingivitis' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['teeth', 'gums'],
    topics: ['prevention', 'hygiene', 'technique'],
    keywords: ['brushing', 'toothbrush', 'technique', 'plaque removal', 'oral hygiene'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default brushingTechniques;
