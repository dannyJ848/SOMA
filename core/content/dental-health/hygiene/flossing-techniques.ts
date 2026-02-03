/**
 * Flossing Techniques - Comprehensive Educational Content
 *
 * Covers proper interdental cleaning methods, floss types,
 * and evidence-based recommendations for interproximal hygiene.
 */

import { EducationalContent } from '../../types';

export const flossingTechniques: EducationalContent = {
  id: 'topic-flossing-techniques',
  type: 'topic',
  name: 'Flossing Techniques',
  alternateNames: [
    'Interdental Cleaning',
    'Dental Floss Use',
    'Interproximal Hygiene',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Flossing cleans the spaces between your teeth where your toothbrush cannot reach. Doing this once a day helps prevent cavities and gum disease between teeth.',
      explanation: `**Why Is Flossing Important?**

Your toothbrush cleans the front, back, and top of your teeth, but it cannot get into the tight spaces between them. That is where floss comes in!

**Without Flossing:**
- Food and plaque build up between teeth
- Cavities can form on the sides of teeth
- Gums can become red, puffy, and bleed
- Bad breath can develop

**How to Floss Properly:**

**Step 1: Get the Right Amount**
- Pull out about 18 inches (45 cm) of floss
- That is about the length from your fingertip to your elbow

**Step 2: Wrap and Grip**
- Wind most of the floss around your middle fingers
- Leave about 2 inches (5 cm) to work with
- Hold it tight between your thumbs and pointer fingers

**Step 3: Slide Between Teeth**
- Gently guide the floss between your teeth
- Do not snap or force it - that can hurt your gums
- Use a gentle back-and-forth motion

**Step 4: Make a "C" Shape**
- Curve the floss around one tooth like the letter "C"
- Slide it up and down against the side of the tooth
- Go slightly under the gum line

**Step 5: Repeat**
- Move to a clean section of floss for each tooth
- Do not forget the back of your last teeth!

**When to Floss:**
- Once a day
- Any time that works for you (morning, evening, after lunch)
- Best to do it at the same time each day so you remember

**What If Your Gums Bleed?**
- A little bleeding is normal when you first start flossing
- Keep flossing gently - the bleeding should stop in 1-2 weeks
- If bleeding continues, tell your dentist`,
      keyTerms: [
        { term: 'floss', definition: 'A thin string used to clean between your teeth' },
        { term: 'interdental', definition: 'Between the teeth; the spaces where food gets stuck' },
        { term: 'gum line', definition: 'Where your gums meet your teeth' },
        { term: 'plaque', definition: 'A sticky layer of germs that forms on teeth and between them' },
      ],
      analogies: [
        'Flossing is like using a string to clean between fence posts - a broom cannot reach those spots, but a string can slide right through.',
        'Making a "C" shape with floss is like hugging the tooth so you clean its whole side.',
        'Think of floss as a tiny cleaning cloth for the sides of your teeth.',
      ],
      examples: [
        'If you eat popcorn and feel something stuck between your teeth, floss can get it out.',
        'The bleeding you might see when you first start flossing is your gums telling you they need more attention.',
      ],
    },
    2: {
      level: 2,
      summary: 'Interdental cleaning removes plaque and debris from interproximal surfaces inaccessible to toothbrushes. Proper technique, appropriate device selection, and daily use are essential for preventing interproximal caries and periodontal disease.',
      explanation: `## Why Interdental Cleaning Matters

**Plaque Accumulation:**
- Interproximal areas harbor 30-40% of tooth surfaces
- Toothbrush bristles cannot access contact areas
- Mature plaque develops within 24-72 hours
- Interproximal surfaces are common caries sites

**Clinical Consequences:**
- Interproximal caries (cavities between teeth)
- Papillary gingivitis (inflamed gum between teeth)
- Periodontal pockets forming between teeth
- Halitosis from bacterial metabolism

## Flossing Technique

**Proper Method:**

1. **Preparation**
   - Use 45 cm (18 inches) of floss
   - Wind around middle fingers
   - Grasp with thumb and index finger
   - Control 2-3 cm working segment

2. **Insertion**
   - Gentle sawing motion through contact
   - Avoid snapping into gum tissue
   - Control is key to preventing trauma

3. **Cleaning Motion**
   - Wrap around tooth in "C" shape
   - Slide up and down against tooth surface
   - Go 1-2 mm below gum margin
   - Repeat on adjacent tooth

4. **Progression**
   - Use fresh floss section for each space
   - Systematic approach (e.g., upper right to left, then lower)
   - Include distal of last molars

## Types of Floss

| Type | Characteristics | Best For |
|------|----------------|----------|
| Waxed | Slides easily | Tight contacts, beginners |
| Unwaxed | Thinner, squeaks when clean | Normal contacts |
| PTFE (Teflon) | Shred-resistant | Very tight contacts |
| Tape | Wider, flat | Wide spaces, bridges |
| Super floss | Stiff end, spongy middle | Braces, bridges, implants |

## Alternative Interdental Devices

**Interdental Brushes:**
- Small brushes that go between teeth
- Various sizes (0.4-1.5 mm diameter)
- Better plaque removal than floss when spaces permit
- Recommended when papilla does not fill space

**Water Flossers:**
- Pulsating water stream
- Good for braces, implants, dexterity issues
- Removes loose debris well
- May not remove attached plaque as well as floss

**Soft Picks/Rubber Interdental Cleaners:**
- Flexible rubber bristles
- Easy to use, portable
- Good for stimulating gums
- Less effective for tight contacts

**Floss Picks/Holders:**
- Pre-threaded floss on handle
- Easier one-handed use
- May not achieve proper "C" shape
- Better than no flossing

## Special Situations

**Orthodontic Appliances:**
- Use floss threaders or super floss
- Pass floss under archwire
- Orthodontic flossers available
- May need more time

**Dental Work:**
- Bridges: Thread floss under pontic
- Implants: Gentle technique, possibly unwaxed or tape
- Crown margins: Extra attention needed

**Bleeding Gums:**
- Initial bleeding common with new flossing
- Should resolve in 1-2 weeks
- Persistent bleeding warrants dental evaluation
- Do not stop flossing - continue gently

## Frequency and Timing

**Recommendations:**
- Once daily minimum
- Time of day less important than consistency
- Before or after brushing: Either works
- May floss more often with food impaction`,
      keyTerms: [
        { term: 'interproximal', definition: 'The surfaces between adjacent teeth; where teeth contact each other' },
        { term: 'papilla', definition: 'The triangular gum tissue that fills the space between teeth' },
        { term: 'contact area', definition: 'Where two adjacent teeth touch each other' },
        { term: 'interdental brush', definition: 'Small brush designed to clean between teeth; various diameter sizes available' },
        { term: 'floss threader', definition: 'Flexible loop for guiding floss under dental work like bridges or braces' },
        { term: 'water flosser', definition: 'Device that uses pulsating water stream to clean between teeth and along gum line' },
      ],
      analogies: [
        'An interdental brush is like a tiny bottle brush that scrubs the walls between your teeth.',
        'A water flosser is like a tiny pressure washer for your mouth - it blasts away loose debris.',
        'The interdental papilla is like a little tent of gum tissue - when it is healthy, it fills the space between teeth.',
      ],
    },
    3: {
      level: 3,
      summary: 'Interdental cleaning efficacy depends on device selection matching interproximal anatomy, proper technique, and patient compliance. Evidence synthesis guides clinical recommendations, with interdental brushes showing superior plaque removal in larger embrasures.',
      explanation: `## Evidence Base for Interdental Cleaning

**Systematic Review Findings:**

*Cochrane Review (Floss for Caries Prevention):*
- Limited evidence for caries reduction
- Studies methodologically weak
- Does not mean flossing is ineffective
- Reflects difficulty conducting long-term controlled trials

*Gingivitis Reduction:*
- Moderate evidence for floss reducing gingivitis
- More consistent evidence for interdental brushes
- Professional flossing shows benefit; self-performed less clear

**Comparative Effectiveness:**

| Device | Plaque Removal | Gingivitis Reduction | Evidence Quality |
|--------|---------------|---------------------|-----------------|
| Floss | Moderate | Moderate | Low-moderate |
| Interdental brush | Superior | Superior | Moderate |
| Water flosser | Moderate | Moderate | Low-moderate |
| Rubber picks | Lower | Lower | Low |

*Key Finding:*
Interdental brushes remove more plaque than floss when the embrasure space allows their use.

## Anatomy and Device Selection

**Interproximal Anatomy:**

*Components:*
- Contact area: Where teeth touch
- Embrasure: Triangle-shaped space
- Gingival embrasure: Below contact, above papilla
- Papilla: Interdental gingiva

*Clinical Assessment:*
- Healthy papilla: Fills embrasure completely
- Papillary recession: Open embrasure (black triangle)
- Embrasure classification (Nordland-Tarnow):
  - Class I: Papilla fills to contact
  - Class II: Papilla at CEJ level
  - Class III: Papilla at root level

**Device Selection by Anatomy:**

| Papilla Status | Recommended Device |
|----------------|-------------------|
| Healthy (fills space) | Floss or tape |
| Slight recession | Smallest interdental brush |
| Moderate recession | Interdental brush (sized) |
| Significant recession | Larger interdental brush |
| Very large space | Interdental brush + rinse |

## Interdental Brush Sizing

**Proper Fit:**
- Should enter space with slight resistance
- Wire should not contact teeth
- Bristles should contact both tooth surfaces
- May need different sizes in different areas

**ISO Sizes:**
| ISO Size | Wire Diameter | Approximate Use |
|----------|--------------|-----------------|
| 0 (Pink) | 0.4 mm | Very tight |
| 1 (Orange) | 0.45 mm | Tight |
| 2 (Red) | 0.5 mm | Small |
| 3 (Blue) | 0.6 mm | Medium-small |
| 4 (Yellow) | 0.7 mm | Medium |
| 5 (Green) | 0.8 mm | Medium-large |
| 6+ | >0.8 mm | Large |

**Technique:**
- Insert at gum level, not from chewing surface
- Gentle in-and-out motion
- Single pass usually sufficient
- Do not force if does not fit

## Flossing Biomechanics

**Plaque Removal Mechanism:**
- Shear force against tooth surface
- Abrasion from floss fibers
- Mechanical disruption of biofilm
- Subgingival extension for sulcular cleaning

**Optimal Technique Factors:**
- "C" wrap maximizes contact area
- Vertical motion more effective than horizontal
- Tension provides adequate force
- Sulcular insertion (1-2 mm) cleans below gum

**Common Errors:**

| Error | Problem | Correction |
|-------|---------|------------|
| Snapping floss | Gingival trauma | Gentle sawing motion |
| Horizontal only | Misses tooth surface | Vertical scraping motion |
| No "C" wrap | Reduced contact | Wrap around each tooth |
| Skipping teeth | Incomplete cleaning | Systematic approach |
| Same floss section | Cross-contamination | Advance to clean section |

## Special Clinical Situations

**Periodontal Patients:**
- Interdental brushes strongly recommended
- Access root concavities and furcations
- May need multiple sizes
- Single-tufted brushes for specific areas

**Implant Maintenance:**
- Soft implant-specific floss or tape
- Avoid metal interdental brush wires on titanium
- Plastic-coated or rubber-tipped brushes
- Water flosser helpful adjunct

**Fixed Orthodontics:**
- Floss threaders or super floss essential
- Interdental brushes between brackets
- Increased time requirement
- Power water flossers may help compliance

**Dexterity Limitations:**
- Floss holders/picks
- Electric water flossers
- Interdental brushes (easier grip)
- Caregiver assistance

## Clinical Recommendations

**Healthy Periodontium:**
- Floss or interdental brush daily
- Choose based on anatomy and preference
- Proper technique instruction essential

**Gingivitis:**
- Emphasize daily interdental cleaning
- May see improvement in 2 weeks
- Monitor and reinforce technique

**Periodontitis:**
- Interdental brushes preferred
- Size to anatomy after treatment
- Part of comprehensive maintenance
- Reassess with changing architecture`,
      keyTerms: [
        { term: 'embrasure', definition: 'V-shaped space between teeth below contact area; cervical, middle, and incisal/occlusal components' },
        { term: 'Nordland-Tarnow classification', definition: 'Classification of papillary recession based on relationship to contact point and CEJ' },
        { term: 'CEJ', definition: 'Cementoenamel junction; anatomic boundary between crown and root' },
        { term: 'black triangle', definition: 'Open embrasure where papilla has receded; aesthetic and food trapping concern' },
        { term: 'furcation', definition: 'Area between roots of multi-rooted teeth; challenging to clean' },
        { term: 'single-tufted brush', definition: 'Small brush with single bundle of bristles for precise cleaning of specific areas' },
      ],
      clinicalNotes: 'Match interdental device to anatomy - interdental brushes are more effective than floss where space permits. For healthy papillae, floss remains appropriate. The key clinical message is daily interdental cleaning with proper technique, regardless of device. Address papillary bleeding as sign of inflammation requiring attention, not reason to stop cleaning.',
    },
    4: {
      level: 4,
      summary: 'Advanced interdental care integrates biofilm ecology of interproximal surfaces, mechanical principles of device action, evidence synthesis for guideline development, and behavior change strategies to improve interdental cleaning compliance.',
      explanation: `## Interproximal Biofilm Characteristics

**Unique Ecological Niche:**

*Environmental Conditions:*
- Protected from mechanical disruption
- Reduced oxygen tension (more anaerobic)
- Substrate availability from food impaction
- Gingival crevicular fluid nutrients

*Microbial Composition:*
- Distinct from buccal/lingual surfaces
- Higher proportion of anaerobes
- Earlier colonization by periodontopathic species
- Greater biofilm thickness if undisturbed

**Disease Initiation Sites:**

*Interproximal Caries:*
- Contact area most protected from saliva
- Demineralization-remineralization balance disrupted
- Often detected late (hidden on radiograph)
- Common site for adult caries

*Periodontal Disease:*
- Papillary inflammation often first sign
- Bone loss frequently begins interproximally
- Furcation involvement starts here
- Critical to monitor and clean

## Mechanical Principles of Interdental Devices

**Floss Mechanics:**

*Force Application:*
- Tension provides normal force against tooth
- Sawing motion generates shear
- Fiber abrasiveness varies by type
- "C" wrap increases contact area

*Subgingival Penetration:*
- Thin profile allows sulcular access
- Typically 1-2 mm in health
- May reach 2-3 mm with careful technique
- Limited by attachment

**Interdental Brush Mechanics:**

*Bristle Action:*
- Radial bristles contact multiple surfaces simultaneously
- Wire core provides stiffness for insertion
- Bristle density affects cleaning efficiency
- Tapered vs. cylindrical designs

*Advantages:*
- Three-dimensional cleaning action
- Contacts more surface area
- Easier for many patients
- Reaches root concavities

**Water Flosser Mechanics:**

*Hydrodynamic Principles:*
- Pulsating flow disrupts biofilm
- Shear stress at fluid-tooth interface
- Turbulence enhances removal
- Limited for attached biofilm

*Pulsation Parameters:*
- Frequency: 1200-1400 pulses/min typical
- Pressure: 10-90 psi adjustable
- Flow rate affects efficiency
- Trace irrigation in subgingival space

## Evidence Synthesis and Guidelines

**Grade of Evidence:**

| Recommendation | Evidence Level | Guideline Source |
|----------------|---------------|------------------|
| Daily interdental cleaning | Strong | ADA, EFP |
| Interdental brushes when space permits | Strong | EFP |
| Floss for tight contacts | Moderate | ADA |
| Water flosser as adjunct | Moderate | ADA |
| Individualized device selection | Expert consensus | Multiple |

**Controversies:**

*"Floss Has No Evidence" Narrative:*
- 2016 media reports questioned flossing
- Based on weak RCT evidence for caries prevention
- Does not mean flossing is ineffective
- Absence of evidence ≠ evidence of absence
- Difficult to conduct ideal study (long-term, controlled)

*Clinical Reality:*
- Interproximal surfaces develop disease
- Something must clean them
- Mechanistic plausibility for benefit
- Professional experience supports use
- Recommendation: Continue advising interdental cleaning

## Compliance and Behavior Change

**Barriers to Interdental Cleaning:**

*Patient-Reported:*
- Time consuming
- Difficult technique
- Forget to do it
- Discomfort or bleeding
- Not perceived as important

*Objective Observations:*
- Self-reported > actual frequency
- Technique often inadequate
- Inconsistent daily practice
- Abandonment common

**Behavior Change Strategies:**

*Evidence-Based Approaches:*
| Strategy | Evidence | Application |
|----------|----------|-------------|
| Demonstration + practice | Strong | Chair-side instruction |
| Tailored feedback | Moderate | Disclosing + coaching |
| Habit linking | Moderate | Connect to existing routine |
| Simplified devices | Moderate | Interdental brush or picks |
| Regular reinforcement | Moderate | Follow-up appointments |

*Implementation:*
- Make it easy: Provide samples, recommend simplest effective device
- Make it obvious: Cue placement near toothbrush
- Make it attractive: Frame benefits positively
- Make it satisfying: Immediate feedback (cleaner feeling)

## Advanced Clinical Applications

**Periodontal Therapy Adjunct:**

*Maintenance Phase:*
- Interdental brushes standard recommendation
- Size to post-treatment anatomy
- May need multiple sizes per mouth
- Single-tufted for furcations

*Active Therapy:*
- Antimicrobial gel on interdental brush
- Chlorhexidine delivery to pockets
- Subgingival irrigation with water flosser

**Implant Maintenance:**

*Considerations:*
- Soft tissue architecture often differs
- Larger embrasures common
- Must protect titanium surface
- Avoid metal-wire interdental brushes

*Recommendations:*
- Plastic-coated or rubber-tipped interdental brushes
- Soft implant floss or tape
- Water flosser helpful
- Antimicrobial rinses

**Special Anatomy:**

*Root Concavities:*
- Mesial surface of maxillary first premolar
- Common on root surfaces post-recession
- Interdental brush superior to floss
- May need curved or angled approach

*Furcations:*
- Multi-rooted teeth after bone loss
- Require specialized cleaning
- Single-tufted brushes
- May not be cleansable - affects prognosis`,
      keyTerms: [
        { term: 'interproximal caries', definition: 'Cavity forming between teeth at or near contact area; often detected by bitewing radiograph' },
        { term: 'hydrodynamic', definition: 'Related to fluid flow dynamics; describes action of water flossers' },
        { term: 'shear stress', definition: 'Force per unit area acting parallel to surface; mechanism of biofilm removal' },
        { term: 'EFP', definition: 'European Federation of Periodontology; issues evidence-based clinical guidelines' },
        { term: 'trace irrigation', definition: 'Fluid penetration into periodontal pocket via pulsating action' },
        { term: 'habit linking', definition: 'Behavior change strategy connecting new behavior to established routine' },
      ],
      clinicalNotes: 'The key clinical principle is matching device to anatomy and patient capability. Interdental brushes are more effective when they fit, but forcing too large a brush or using in tight healthy papillae is inappropriate. Address the "flossing has no evidence" narrative by explaining study limitations and mechanistic rationale. Focus behavior change efforts on making interdental cleaning easy and routine.',
    },
    5: {
      level: 5,
      summary: 'Contemporary interdental care research encompasses biofilm mechanical properties informing device development, precision approaches to interproximal disease risk, advanced delivery systems for therapeutic agents, and integration of interdental health into systemic disease prevention.',
      explanation: `## Biofilm Mechanics and Device Optimization

**Interproximal Biofilm Rheology:**

*Mechanical Properties:*
- Viscoelastic behavior under stress
- Strain-rate dependent response
- Yield stress varies with maturity
- Adhesive strength increases with time

*Implications for Removal:*
| Property | Device Design Implication |
|----------|---------------------------|
| Yield stress | Minimum force required |
| Adhesive strength | Shear force to detach |
| Viscoelasticity | Rate of force application |
| Thickness | Bristle length/penetration |

**Computational Modeling:**

*Fluid-Structure Interaction:*
- CFD modeling of water flosser jets
- Biofilm deformation simulation
- Optimization of pulse parameters
- Nozzle design enhancement

*Finite Element Analysis:*
- Interdental brush bristle mechanics
- Stress distribution on tooth surface
- Tissue deformation prediction
- Device optimization

**Advanced Device Engineering:**

*Smart Interdental Devices:*
- Sensors detecting pressure, motion
- Connectivity for tracking compliance
- Feedback for technique improvement
- Data integration with dental records

*Material Innovations:*
- Antimicrobial bristles (silver, chitosan)
- Drug-eluting fibers
- Bioactive coatings
- Sustainable materials development

## Precision Interproximal Care

**Risk Assessment:**

*Site-Specific Factors:*
- Contact tightness
- Embrasure morphology
- Root anatomy (concavities)
- History of interproximal disease
- Restoration margins

*Patient Factors:*
- Caries activity markers
- Periodontal risk profile
- Dexterity and compliance
- Medical conditions affecting oral health
- Medication effects (xerostomia)

**Personalized Protocols:**

| Risk Profile | Assessment Interval | Device Recommendation | Adjuncts |
|--------------|--------------------|-----------------------|----------|
| Low risk | 12 months | Patient preference | None |
| Moderate risk | 6 months | Interdental brush | Fluoride |
| High caries risk | 3-4 months | IDB + prescribed F | CHX, xylitol |
| Periodontal risk | 3-4 months | IDB + antimicrobial | Subgingival irrigation |

**Biomarker Integration:**

*Emerging Diagnostics:*
- GCF biomarkers for periodontal risk
- Salivary S. mutans levels
- Volatile sulfur compounds (halitosis)
- Chairside bacterial detection

## Therapeutic Delivery Systems

**Antimicrobial Delivery:**

*Via Interdental Devices:*
- Chlorhexidine gel on interdental brush
- Povidone-iodine irrigation
- Essential oil rinse via water flosser
- Probiotics on floss/brush (experimental)

*Sustained Release:*
- Antimicrobial-impregnated floss
- Drug-releasing interdental devices
- Localized antibiotic delivery
- Subgingival controlled release

**Remineralization Strategies:**

*Fluoride Delivery:*
- Fluoride-releasing floss
- High-fluoride gel application
- CPP-ACP on interdental brush
- Targeted to white spot lesions

**Biofilm Disruption Agents:**

*Novel Approaches:*
- Enzyme-based matrix degradation
- Quorum sensing inhibitors
- Bacteriophage delivery
- Arginine metabolism promotion

## Oral-Systemic Integration

**Cardiovascular Disease:**

*Evidence:*
- Periodontal disease associated with CVD
- Interproximal sites key for periodontal pathogens
- Intervention studies ongoing
- Mechanism: Bacteremia, inflammation

*Clinical Implication:*
- Interdental cleaning as CVD prevention strategy
- Patient education opportunity
- Collaboration with primary care

**Diabetes:**

*Bidirectional Relationship:*
- Poor glycemic control → periodontal disease
- Periodontal disease → glycemic difficulty
- Interproximal cleaning part of diabetes management

*Evidence:*
- Periodontal treatment reduces HbA1c ~0.4%
- Cost-effective intervention
- ADA recommends periodontal evaluation

**Respiratory Infections:**

*Hospital-Acquired Pneumonia:*
- Oral bacteria aspiration
- ICU oral care protocols
- Interdental cleaning when possible
- Reduces VAP incidence

**Pregnancy Outcomes:**

*Association:*
- Periodontitis linked to preterm birth
- Interproximal disease common contributor
- Safe to treat during pregnancy
- Prevention focus

## Research Frontiers

**Microbiome Modulation:**

*Targeted Approaches:*
- Selective elimination of pathogens
- Preservation of beneficial species
- Prebiotic supplementation
- Probiotic colonization

*Interproximal Focus:*
- Unique niche microbiome
- Site-specific intervention
- Ecological balance restoration

**Regenerative Approaches:**

*Papillary Regeneration:*
- Hyaluronic acid injection
- PRF/PRP applications
- Microsurgical techniques
- Addresses "black triangle" aesthetic concern

**Digital Integration:**

*Connected Devices:*
- IoT interdental devices
- Real-time feedback systems
- AI coaching for technique
- Population health data collection

*Telehealth Applications:*
- Remote monitoring of compliance
- Video instruction and coaching
- Risk-stratified follow-up
- Access improvement

## Clinical Practice Evolution

**Paradigm Shifts:**

*From:* Universal flossing recommendation
*To:* Anatomy-based device selection

*From:* Emphasis on technique alone
*To:* Behavior change integration

*From:* Isolated oral health
*To:* Systemic health integration

**Quality Metrics:**

*Process Measures:*
- Interdental cleaning counseling rate
- Device prescription appropriateness
- Follow-up compliance assessment

*Outcome Measures:*
- Interproximal plaque reduction
- Bleeding on probing improvement
- Interproximal caries incidence
- Patient-reported outcomes`,
      keyTerms: [
        { term: 'rheology', definition: 'Study of flow and deformation of matter; applied to biofilm mechanical behavior' },
        { term: 'CFD', definition: 'Computational Fluid Dynamics; modeling fluid flow for device optimization' },
        { term: 'GCF', definition: 'Gingival Crevicular Fluid; contains biomarkers of periodontal status' },
        { term: 'VAP', definition: 'Ventilator-Associated Pneumonia; reduced by oral hygiene interventions in ICU' },
        { term: 'PRF/PRP', definition: 'Platelet-Rich Fibrin/Plasma; autologous preparations for tissue regeneration' },
        { term: 'IoT', definition: 'Internet of Things; connected devices enabling data tracking and feedback' },
      ],
      clinicalNotes: `Translation to practice:
1. Match interdental device to anatomy - interdental brushes where they fit, floss for tight healthy contacts
2. Integrate interdental cleaning into chronic disease management discussions (diabetes, CVD)
3. Use behavior change principles: make it easy, obvious, attractive, satisfying
4. Consider therapeutic delivery via interdental devices for high-risk patients
5. Monitor emerging smart device technology for compliance improvement
6. Frame interdental cleaning as systemic health investment, not just dental care
7. Address "black triangle" concerns - impacts compliance if patients dislike appearance
8. Stay current on antimicrobial stewardship - use adjuncts judiciously`,
    },
  },

  media: [
    {
      id: 'flossing-technique',
      type: 'diagram',
      filename: 'proper-flossing-technique.svg',
      title: 'Proper Flossing Technique',
      description: 'Step-by-step illustration of the C-shape flossing method',
    },
    {
      id: 'interdental-devices',
      type: 'diagram',
      filename: 'interdental-device-comparison.svg',
      title: 'Interdental Cleaning Devices',
      description: 'Comparison of floss, interdental brushes, and water flossers',
    },
  ],

  citations: [
    {
      id: 'slot-interdental',
      type: 'article',
      title: 'The efficacy of interdental brushes on plaque and parameters of periodontal inflammation',
      source: 'International Journal of Dental Hygiene',
    },
    {
      id: 'ccochrane-flossing',
      type: 'article',
      title: 'Flossing for the management of periodontal diseases and dental caries in adults',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-hygiene-basics', targetType: 'topic', relationship: 'parent', label: 'Dental Hygiene Basics' },
    { targetId: 'topic-brushing-techniques', targetType: 'topic', relationship: 'sibling', label: 'Brushing Techniques' },
    { targetId: 'condition-gingivitis', targetType: 'condition', relationship: 'related', label: 'Gingivitis' },
    { targetId: 'condition-periodontitis', targetType: 'condition', relationship: 'related', label: 'Periodontitis' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['teeth', 'gums', 'interdental papilla'],
    topics: ['prevention', 'hygiene', 'technique'],
    keywords: ['flossing', 'interdental cleaning', 'interdental brush', 'water flosser', 'plaque removal'],
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

export default flossingTechniques;
