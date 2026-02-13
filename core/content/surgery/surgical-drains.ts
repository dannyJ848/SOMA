/**
 * Surgical Drains
 *
 * Comprehensive content covering types of surgical drains, indications,
 * management, and evidence-based practices for drain use.
 */

import { EducationalContent } from '../types';

export const surgicalDrains: EducationalContent = {
  id: 'surgery-surgical-drains',
  type: 'concept',
  name: 'Surgical Drains',
  alternateNames: ['Wound Drains', 'Post-Operative Drains', 'Drainage Systems'],

  levels: {
    1: {
      level: 1,
      summary: 'Surgical drains are tubes placed during surgery to remove fluid or air from your body and help healing.',
      explanation: `After some surgeries, your doctor may put in a drain. A drain is a soft tube that removes extra fluid or air from inside your body. This helps you heal better and more comfortably.

**Why Do I Need a Drain?**

During and after surgery, your body may produce extra fluid as part of healing. If this fluid builds up, it can:
- Cause pain and swelling
- Slow down healing
- Increase the risk of infection

A drain helps prevent these problems by removing the fluid.

**Types of Drains:**

1. **Bulb Drains (Jackson-Pratt or "JP")**
   - Small tube connected to a squeezable bulb
   - The bulb creates gentle suction
   - You squeeze the bulb to empty it
   - Most common type for surgery patients

2. **Flat Drains (Blake)**
   - Similar to JP drains
   - Flat design instead of round

3. **Gravity Drains (Penrose)**
   - Simple rubber tube
   - Fluid drains into a bandage
   - No suction

**Taking Care of Your Drain:**

1. **Keep it secure**
   - Pin or tape the drain to your clothes
   - Don't pull on it

2. **Empty regularly**
   - Your nurse will show you how
   - Record how much fluid comes out
   - Note the color

3. **Keep it clean**
   - Wash hands before touching
   - Clean around the tube daily

**When to Call Your Doctor:**

- Sudden increase in drainage
- Drainage becomes cloudy or smells bad
- Fever
- Redness or swelling around the drain site
- Drain falls out

**When Can the Drain Come Out?**

Your doctor will remove the drain when:
- Drainage decreases (usually less than 30 mL per day)
- The fluid looks clear (not bloody)
- Usually 1-2 weeks after surgery

Removing a drain is quick and usually doesn't hurt much.`,
      keyTerms: [
        { term: 'drain', definition: 'A tube placed during surgery to remove fluid from your body' },
        { term: 'JP drain', definition: 'Jackson-Pratt drain; a common type of drain with a squeezable bulb', pronunciation: 'jay-pee' },
        { term: 'drainage', definition: 'The fluid that comes out through the drain' },
        { term: 'suction', definition: 'Gentle pulling force that helps fluid flow out' },
      ],
      analogies: [
        'A surgical drain is like a small vacuum cleaner - it gently sucks up extra fluid from inside your body.',
        'Emptying a JP drain is like squeezing air out of a stress ball - you squeeze it flat to create the suction.',
        'A Penrose drain is like a tiny gutter - it just lets fluid flow out by gravity.',
      ],
      examples: [
        'After breast cancer surgery, a JP drain under your arm removes fluid for about 1-2 weeks.',
        'After gallbladder surgery, you might have a drain near your belly for a few days.',
        'After brain surgery, a drain may remove extra fluid from around the brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Surgical drains are classified by mechanism (active vs. passive) and are placed to evacuate fluid collections, prevent complications, and monitor for post-operative bleeding.',
      explanation: `## Classification of Surgical Drains

### By Mechanism

**Active (Closed Suction) Drains:**
- Create negative pressure to draw fluid out
- Closed system reduces infection risk
- Examples: Jackson-Pratt, Blake, Hemovac

**Passive (Gravity) Drains:**
- Rely on gravity and capillary action
- Open or semi-open systems
- Examples: Penrose, corrugated

### By Design

| Type | Design | Mechanism | Common Uses |
|------|--------|-----------|-------------|
| Jackson-Pratt (JP) | Round perforated tube + bulb | Closed suction | General surgery, breast, neck |
| Blake | Flat channeled tube + reservoir | Closed suction | Abdominal, thoracic |
| Hemovac | Large diameter + accordion | High-volume suction | Orthopedic, large cavities |
| Penrose | Flat rubber tube | Passive gravity | Superficial infections |
| Pigtail | Coiled tip | Passive/active | Fluid collections, abscess |

### Specialized Drains

**Chest Tubes (Thoracostomy):**
- Remove air (pneumothorax) or fluid (hemothorax, effusion)
- Connected to water seal or suction
- Require specific management protocols

**T-Tubes (Biliary):**
- Placed in common bile duct
- Allow bile drainage after surgery
- Can be used for imaging (cholangiography)

**Nasogastric (NG) Tubes:**
- Decompression of stomach
- Prevent aspiration, nausea
- Remove after bowel function returns

## Indications for Drain Placement

### General Principles
1. **Evacuate existing collections** - blood, pus, bile
2. **Prevent accumulation** - seroma, hematoma
3. **Monitor for complications** - bleeding, anastomotic leak
4. **Provide access** - future intervention or imaging

### Procedure-Specific Uses

| Surgery | Drain Purpose |
|---------|---------------|
| Mastectomy | Prevent seroma |
| Thyroidectomy | Monitor for hematoma |
| Cholecystectomy | Bile leak detection |
| Bowel resection | Anastomotic leak detection |
| Joint replacement | Hemarthrosis prevention |

## Drain Management

### Output Monitoring

**What to Record:**
- Volume (mL per shift or 24 hours)
- Color (serous, serosanguinous, bloody, purulent)
- Consistency (thin, thick)
- Odor (foul smell suggests infection)

**Typical Progression:**
Day 1-2: Bloody (sanguinous)
Day 3-5: Pink (serosanguinous)
Day 5+: Yellow/straw-colored (serous)

### Drain Care

**Site Care:**
- Clean with saline or per protocol
- Keep dressing dry and intact
- Observe for signs of infection

**Maintaining Suction:**
- JP: Squeeze bulb flat, plug, creates negative pressure
- Hemovac: Compress accordion, close valve

### Removal Criteria

**General Guidelines:**
- Output < 30 mL/24 hours (varies by procedure)
- Serous or serosanguinous color
- No signs of infection or ongoing bleeding
- Clinical judgment based on procedure

**Removal Technique:**
1. Remove sutures/anchors
2. Steady, gentle pull
3. Apply pressure dressing
4. Document removal and patient response

## Complications of Surgical Drains

### Drain-Related Complications

| Complication | Prevention/Management |
|--------------|----------------------|
| Infection | Sterile technique, early removal |
| Pain | Adequate analgesia, proper positioning |
| Premature dislodgement | Secure anchoring, patient education |
| Occlusion/clogging | Regular milking, flushing if needed |
| Tissue damage | Soft drains, careful placement |
| Retained drain | Careful tracking, imaging if needed |

### Inadequate Drainage

**Causes:**
- Kinked or occluded tubing
- Loss of suction
- Incorrect positioning
- Compartmentalized fluid

**Management:**
- Check system integrity
- Reposition if needed
- Consider imaging
- May need additional drain`,
      keyTerms: [
        { term: 'closed suction', definition: 'Drain system that uses negative pressure and is sealed from outside air' },
        { term: 'passive drain', definition: 'Drain that relies on gravity rather than suction to remove fluid' },
        { term: 'serous', definition: 'Clear, straw-colored fluid typical of healing wounds' },
        { term: 'serosanguinous', definition: 'Pink-tinged fluid mix of serum and blood' },
        { term: 'seroma', definition: 'Collection of serous fluid in a surgical site' },
      ],
      analogies: [
        'A closed suction drain is like a vacuum-sealed bag - it pulls fluid out by negative pressure and keeps bacteria out.',
        'Checking drain output is like checking oil in a car - it tells you what\'s happening inside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based drain management requires understanding physiological principles, procedure-specific indications, and quality metrics to optimize patient outcomes while minimizing drain-related morbidity.',
      explanation: `## Physiology of Fluid Accumulation

### Post-Surgical Fluid Production

**Inflammatory Exudate:**
- Capillary permeability increases
- Protein-rich fluid leaks into tissues
- Peak at 24-72 hours post-op
- Resolves as inflammation subsides

**Lymphatic Disruption:**
- Axillary, groin, neck dissections
- Lymphatic channels transected
- May persist weeks to months
- Seroma formation risk

**Dead Space:**
- Tissue planes separated
- Potential space for fluid collection
- Closure techniques influence accumulation

### Consequences of Fluid Collections

**Hematoma:**
- Risk of compression (airway, vessels)
- Wound dehiscence
- Infection substrate
- Delays healing

**Seroma:**
- Patient discomfort
- Repeat aspiration burden
- Potential infection
- Capsule formation (chronic)

**Infected Collection:**
- Abscess formation
- Sepsis risk
- May require reoperation
- Prolonged hospitalization

## Evidence-Based Indications

### Cochrane Reviews and Meta-Analyses

**Thyroidectomy:**
- Routine drainage NOT recommended
- No reduction in hematoma rate
- Increases hospital stay
- Consider for extensive dissection only

**Cholecystectomy (Open):**
- Routine drainage NOT recommended
- No benefit for uncomplicated cases
- May be beneficial if bile leak suspected

**Axillary Lymph Node Dissection:**
- Drains traditionally used
- Duration based on output (30 mL/day threshold)
- Earlier removal being studied
- Quilting sutures may reduce need

**Colorectal Surgery:**
- Routine pelvic drains NOT recommended for anterior resection
- Consider for: low anastomosis, incomplete donut, difficult dissection
- No proven benefit for preventing anastomotic leak

**Breast Surgery:**
- Mastectomy with axillary dissection: Drains standard
- Breast-conserving: Usually no drain needed
- Progressive tension sutures may reduce drain duration

### When to Use Drains

**Strong Indications:**
- Known ongoing bleeding (monitoring)
- Established abscess or infected collection
- High-risk anastomosis (monitoring)
- Severe contamination requiring washout

**Weak/No Indications:**
- Routine use in clean surgery
- Prevention of seroma (better closure techniques)
- Prophylaxis without specific risk factors

## Drain Management Protocols

### Output Thresholds for Removal

| Procedure | Removal Threshold | Evidence Quality |
|-----------|-------------------|------------------|
| Mastectomy + ALND | <30 mL/24h | Moderate |
| Thyroidectomy | <30 mL/24h | Low |
| Colorectal | <100 mL/24h | Variable |
| Hepatic resection | <50 mL/24h (bile-free) | Moderate |
| Pancreatic surgery | Amylase normal | Moderate |

### Duration Considerations

**Early Removal Benefits:**
- Reduced infection risk
- Improved mobility
- Earlier discharge
- Better patient comfort

**Risks of Premature Removal:**
- Fluid reaccumulation
- Need for reintervention
- Missed complications

### Drain Output Analysis

**Concerning Patterns:**

| Finding | Consider |
|---------|----------|
| Sudden increase in output | Bleeding, new collection |
| Bilious drainage | Bile leak |
| Enteric contents | Anastomotic leak |
| Feculent/cloudy | Infection, enteric communication |
| Chylous (milky) | Lymphatic injury |
| Amylase-rich | Pancreatic leak |

## Special Drain Systems

### Negative Pressure Wound Therapy (NPWT)

**Indications:**
- Open wounds (post-debridement)
- Skin graft bolstering
- Closed incision management (ciNPWT)

**Mechanism:**
- Continuous or intermittent negative pressure
- Removes exudate
- Promotes granulation
- Reduces edema

### Pigtail/Percutaneous Drains

**Placement:**
- Image-guided (CT, US, fluoroscopy)
- Interventional radiology procedure
- Avoids operative intervention

**Indications:**
- Intra-abdominal abscess
- Pleural effusion/empyema
- Pancreatic pseudocyst
- Perirenal/hepatic collections

**Management:**
- Larger bore for thick fluid
- May need flushing
- Imaging to confirm resolution
- Output-based removal

### Biliary Drains

**T-Tube:**
- Placed in CBD after exploration
- Allows external drainage
- Facilitates cholangiography
- Remove after tract matures (4-6 weeks)

**Percutaneous Biliary Drainage:**
- PTBD for biliary obstruction
- External vs. internal-external
- Bridge to definitive treatment

## Quality Metrics

### Drain-Related Outcomes

**Process Measures:**
- Drain site infection rate
- Average duration of drainage
- Compliance with removal criteria
- Documentation completeness

**Outcome Measures:**
- Drain-related complications
- Reintervention for fluid collection
- Hospital length of stay
- Readmission for drain-related issues

### Enhanced Recovery Integration

**ERAS Drain Recommendations:**
- Avoid routine drainage
- Remove drains early when used
- Patient education for home drain care
- Outpatient drain removal when appropriate`,
      keyTerms: [
        { term: 'dead space', definition: 'Potential space created by tissue separation where fluid can accumulate' },
        { term: 'quilting suture', definition: 'Technique fixing skin flap to underlying tissue to eliminate dead space' },
        { term: 'PTBD', definition: 'Percutaneous Transhepatic Biliary Drainage - interventional drainage of bile ducts' },
        { term: 'chylous', definition: 'Milky appearance of lymphatic fluid due to fat content' },
        { term: 'ciNPWT', definition: 'Closed Incision Negative Pressure Wound Therapy - preventive use on high-risk closures' },
      ],
      clinicalNotes: 'Evidence increasingly supports selective rather than routine drain use. Early removal protocols (30 mL/24h threshold) reduce length of stay without increasing complications. Document drain output characteristics to guide clinical decisions.',
    },
    4: {
      level: 4,
      summary: 'Advanced drain management integrates procedure-specific evidence, physiological monitoring, and quality improvement frameworks to minimize drain-related morbidity while maintaining diagnostic and therapeutic benefits.',
      explanation: `## Physiological Monitoring via Drains

### Biomarker Analysis of Drain Fluid

**Anastomotic Leak Detection:**

| Biomarker | Test | Threshold | Sensitivity |
|-----------|------|-----------|-------------|
| CRP in drainage | ELISA | >110 mg/L (POD 3) | 80-90% |
| Procalcitonin | Immunoassay | >2 ng/mL | 70-80% |
| Amylase (GI) | Enzymatic | >3x serum | Variable |
| IL-6 | Immunoassay | Elevated | Experimental |

**Pancreatic Surgery Monitoring:**

| Fluid Type | Appearance | Amylase | Management |
|------------|------------|---------|------------|
| Normal serous | Clear, yellow | <300 U/L | Remove when low output |
| Biochemical leak | Clear | >300 U/L, day 3+ | Continue drain, NPO, TPN |
| Clinical fistula | Purulent/enteric | Elevated | Interventional drainage |

### Drain Amylase Protocols (ISGPF Definitions)

**Post-Operative Pancreatic Fistula Grades:**

| Grade | Definition | Management |
|-------|------------|------------|
| Biochemical leak | Drain amylase >3x serum, no clinical impact | Extended drain |
| Grade B | Requires intervention change | NPO, TPN, antibiotics |
| Grade C | Reoperation or organ failure | Surgical intervention |

### Biliary Leak Monitoring

**Classification (ISGLS):**

| Grade | Output | Bilirubin | Management |
|-------|--------|-----------|------------|
| A | <300 mL/day | <3x serum | Keep drain, observe |
| B | >300 mL/day or prolonged | >3x serum | ERCP + stent |
| C | Relaparotomy required | Any | Surgical revision |

## Advanced Drainage Systems

### Active Suction Dynamics

**Physics of Negative Pressure:**
- Driving force: Pressure differential (atmospheric - reservoir)
- JP drain: ~100 mmHg negative pressure when compressed
- Hemovac: Higher initial suction, decays over time
- Blake: Consistent low suction via reservoir

**Suction Requirements by Application:**

| Application | Optimal Pressure | Rationale |
|-------------|-----------------|-----------|
| Wound drainage | -75 to -125 mmHg | Promotes healing |
| Chest tube (air) | -20 cm H2O | Lung re-expansion |
| Chest tube (fluid) | -10 to -20 cm H2O | Pleural drainage |
| Abdominal drain | Low continuous | Comfort + efficacy |

### Chest Tube Management

**Water Seal Systems:**

**Components:**
1. Collection chamber - fluid accumulation
2. Water seal chamber - one-way valve effect
3. Suction control - regulates negative pressure

**Troubleshooting:**
| Finding | Interpretation | Action |
|---------|---------------|--------|
| Continuous bubbling | Air leak (lung/connection) | Check system, may need operation |
| Tidaling stops | Resolution or obstruction | Check tube, imaging |
| Sudden increase | Recurrent pneumothorax, bleeding | Urgent imaging |

**Removal Criteria:**
- No air leak for 24 hours
- Output <200 mL/24h (varies by center)
- Lung expanded on imaging
- Water seal trial often performed

### Mediastinal Drains

**Post-Cardiac Surgery:**
- Blake or chest tubes
- Monitor for tamponade
- Output triggers for reoperation (>400 mL in first hour, >200 mL/hr for 2-4 hours)
- Early removal when criteria met

### Continuous vs. Intermittent Suction

**Evidence:**
- Wound drainage: No clear difference
- Chest tubes for pneumothorax: Suction may accelerate resolution
- NPWT: Continuous preferred, intermittent has theoretical benefits

## Evidence Synthesis

### ERAS Society Recommendations

**General Surgery:**
- Avoid routine drains for uncomplicated procedures
- Remove within 24-48 hours if used
- Output-based removal preferred to arbitrary timing

**Colorectal Surgery:**
- Routine pelvic drains not recommended
- Selective use for: very low anastomosis, positive air-leak test
- Early removal (1-2 days) if no concerning output

**Hepatobiliary Surgery:**
- Drain after major hepatectomy (bile leak risk)
- Remove when output clear and <50 mL/day
- Biliary drains: cholangiogram before removal

### Network Meta-Analyses

**Breast Surgery:**
- Drains reduce seroma requiring aspiration
- Quilting sutures equivalent to drains in some studies
- Combination may be optimal for high-risk patients

**Thyroidectomy:**
- Drains do not reduce hematoma or reoperation
- Increase hospital stay
- Reserve for: extensive dissection, bilateral, substernal

## Quality Improvement

### Drain Stewardship

**Principles:**
1. Clear indication for placement
2. Daily assessment for removal
3. Standardized output thresholds
4. Documentation of rationale

**Checklist Approach:**
□ Indication documented
□ Type and location recorded
□ Daily output reviewed
□ Removal criteria applied
□ Patient education provided

### Reduction Strategies

**Surgical Technique:**
- Meticulous hemostasis
- Dead space closure
- Quilting/progressive tension sutures
- Tissue sealants (fibrin glue)

**Protocol Implementation:**
- Procedure-specific guidelines
- Nursing education
- Real-time feedback
- Audit and feedback cycles

### Patient-Centered Outcomes

**Drain Impact:**
- Pain and discomfort
- Mobility limitation
- Self-care burden
- Body image concerns
- Anxiety about drain care

**Mitigation:**
- Thorough education
- Written instructions
- Clear follow-up plan
- Support resources
- Early removal when safe`,
      keyTerms: [
        { term: 'ISGPF', definition: 'International Study Group on Pancreatic Fistula - standardized definitions for post-operative pancreatic fistula' },
        { term: 'ISGLS', definition: 'International Study Group on Liver Surgery - classification for post-hepatectomy biliary leakage' },
        { term: 'water seal', definition: 'One-way valve mechanism in chest drainage preventing air re-entry into pleural space' },
        { term: 'tidaling', definition: 'Fluctuation of water level in chest tube with respiration; indicates patent tube' },
        { term: 'drain stewardship', definition: 'Systematic approach to appropriate drain use and timely removal' },
      ],
      clinicalNotes: 'Drain output analysis (amylase, bilirubin, culture) provides valuable diagnostic information. ERAS protocols consistently recommend minimizing routine drain use. When drains are indicated, establish clear removal criteria at time of placement.',
    },
    5: {
      level: 5,
      summary: 'Contemporary drain management applies precision medicine principles, leveraging biomarker-guided protocols and quality metrics within enhanced recovery frameworks to individualize drainage strategies and optimize patient-centered outcomes.',
      explanation: `## Precision Drain Management

### Biomarker-Guided Protocols

**Multi-analyte Drain Fluid Analysis:**

| Analyte | Clinical Utility | Evidence Level |
|---------|-----------------|----------------|
| Amylase | Pancreatic/enteric leak | High |
| Bilirubin | Biliary leak | High |
| Creatinine | Urinary leak | High |
| Triglycerides | Chyle leak | High |
| CRP/IL-6 | Inflammation/infection | Emerging |
| Lactate | Ischemia | Research |
| Microbiome | Infection prediction | Research |

**Point-of-Care Testing:**
- Rapid amylase assays
- pH measurement (chyle is alkaline)
- Glucose (low in empyema)
- Developing: Biosensor technologies

### Machine Learning Applications

**Predictive Models:**
- Anastomotic leak prediction from drain characteristics
- Optimal removal timing algorithms
- Complication early warning systems
- Integration with EHR data

**Image-Based Analysis:**
- Drain output color quantification
- Consistency characterization
- Trend analysis automation

### Microbiome of Drain Fluid

**Research Findings:**
- Drain fluid colonization correlates with complications
- Early microbial shifts may predict infection
- Biofilm formation on drain surfaces
- Potential for targeted interventions

**Clinical Translation:**
- Research stage
- May inform antibiotic selection
- Potential for prophylactic strategies

## Advanced Drainage Technologies

### Smart Drain Systems

**Features in Development:**
- Continuous output measurement
- Temperature monitoring
- pH and biomarker sensors
- Wireless data transmission
- Alert systems for concerning changes

**Potential Benefits:**
- Early complication detection
- Reduced manual monitoring burden
- Objective removal criteria
- Remote patient monitoring

### Antimicrobial Drains

**Coated Drain Technology:**
- Silver-impregnated
- Antibiotic-impregnated
- Antiseptic coatings

**Evidence:**
- Limited high-quality data
- Theoretical benefit for prolonged drainage
- Cost considerations
- Resistance concerns with antibiotic coatings

### Bioabsorbable Drains

**Concept:**
- Drain material degrades over time
- Eliminates removal procedure
- Gradual transition from active to passive drainage

**Challenges:**
- Degradation timing control
- Inflammatory response
- Efficacy maintenance
- Currently research stage

## Quality Frameworks

### NSQIP and Drain-Related Outcomes

**Tracked Complications:**
- Superficial SSI (drain site)
- Deep SSI
- Organ/space SSI
- Unplanned return to OR
- Readmission

**Risk Adjustment:**
- Procedure-specific expected rates
- Patient risk factors
- Standardized comparison

### ERAS Compliance Metrics

**Drain-Related Elements:**
- Avoidance of routine drains (procedure-specific)
- POD 1 removal if used
- Output threshold documentation
- Patient education on home drain care

**Compliance Association:**
- Higher ERAS compliance = better outcomes
- Drain elements often have lower compliance
- Focus for quality improvement

### Value-Based Care Considerations

**Drain Costs:**
- Device cost
- Nursing time for care
- Extended length of stay
- Outpatient management resources
- Complication treatment

**Cost-Effectiveness:**
- Selective drainage more cost-effective
- Early removal protocols save resources
- Home drain programs for appropriate patients

## Special Populations

### Pediatric Considerations

**Anatomical Differences:**
- Smaller caliber drains
- Shorter distances
- Higher surface area to volume ratio

**Practical Issues:**
- Drain security crucial
- Family education essential
- Pain management priorities
- Earlier removal often possible

### Geriatric Considerations

**Challenges:**
- Cognitive impairment (drain care)
- Skin fragility (securement)
- Comorbidities affecting healing
- Polypharmacy considerations

**Approach:**
- Simplified care instructions
- Caregiver involvement
- Lower threshold for assistance
- Careful risk-benefit assessment

### Oncologic Surgery

**Unique Considerations:**
- Prior radiation (impaired healing)
- Lymphadenectomy (seroma, lymphocele)
- Nutritional status
- Immunocompromise

**Management:**
- May require longer drainage
- Higher vigilance for complications
- Multidisciplinary coordination
- Survivorship considerations

## Future Directions

### Drain Avoidance Strategies

**Surgical Techniques:**
- Energy devices for sealing
- Tissue sealants (fibrin, synthetic)
- Quilting and progressive tension sutures
- Injection sclerotherapy (lymphocele)

**Pharmacologic:**
- Tranexamic acid (bleeding reduction)
- Octreotide (pancreatic fistula prevention - variable evidence)
- Anti-inflammatory approaches

### Telehealth Integration

**Remote Drain Monitoring:**
- Patient-reported output
- Photograph analysis (AI-assisted)
- Video assessment
- Electronic symptom reporting

**Benefits:**
- Reduced clinic visits
- Earlier problem identification
- Patient convenience
- Resource optimization

### Research Priorities

**Key Questions:**
1. Optimal biomarkers for leak prediction
2. Smart drain clinical validation
3. Drain vs. no-drain in specific contexts
4. Individualized removal timing
5. Cost-effectiveness across settings

**Trial Design:**
- Pragmatic randomized trials
- Adaptive designs
- Patient-centered outcomes
- Implementation science focus

## Synthesis: Decision Framework

### Placement Decision

**Consider Drainage When:**
- Known ongoing source (bleeding, bile, pancreatic)
- High risk for fluid collection with clinical impact
- Monitoring value exceeds morbidity
- Patient factors preclude observation

**Avoid Drainage When:**
- Routine use without specific indication
- Clean surgery with good hemostasis
- Evidence supports no benefit
- Patient preference (shared decision)

### Removal Decision

**Ready for Removal:**
- Output below procedure-specific threshold
- Quality of output appropriate (serous)
- Clinical course unremarkable
- No biomarker abnormalities

**Continue Drainage:**
- Output remains elevated
- Concerning output characteristics
- Biomarker abnormalities
- Clinical concern for complication

### Quality Checklist

**Documentation Required:**
□ Indication for placement
□ Drain type and location
□ Daily output (volume, character)
□ Removal criteria applied
□ Patient education documented
□ Follow-up plan if discharged with drain`,
      keyTerms: [
        { term: 'smart drain', definition: 'Drain systems with integrated sensors for continuous monitoring and data transmission' },
        { term: 'bioabsorbable drain', definition: 'Drain made of materials that degrade over time, eliminating need for removal' },
        { term: 'progressive tension sutures', definition: 'Technique progressively tacking tissue layers to eliminate dead space' },
        { term: 'lymphocele', definition: 'Collection of lymphatic fluid after surgery, particularly lymphadenectomy' },
        { term: 'ERAS compliance', definition: 'Adherence to Enhanced Recovery After Surgery protocol elements' },
      ],
      clinicalNotes: `Key Practice Points:
1. Evidence increasingly supports selective over routine drainage
2. Establish removal criteria at time of placement
3. Daily reassessment for removal readiness is essential
4. Drain fluid biomarker analysis provides diagnostic value
5. Patient education enables safe early discharge with drains
6. Quality metrics should track drain-related outcomes
7. Emerging technologies may transform drain management
8. Always balance monitoring benefit against drain-related morbidity`,
    },
  },

  media: [
    {
      id: 'drain-types',
      type: 'diagram',
      filename: 'surgical-drain-types.svg',
      title: 'Types of Surgical Drains',
      description: 'Visual comparison of JP, Blake, Hemovac, and Penrose drains',
    },
    {
      id: 'jp-drain-care',
      type: 'diagram',
      filename: 'jp-drain-care.svg',
      title: 'JP Drain Care Instructions',
      description: 'Patient education diagram for emptying and maintaining JP drains',
    },
  ],

  citations: [
    {
      id: 'cochrane-drains',
      type: 'article',
      title: 'Wound drainage for abdominal surgery',
      source: 'Cochrane Database of Systematic Reviews',
      authors: ['Gurusamy, K.S.', 'Samraj, K.'],
    },
    {
      id: 'eras-society',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
    {
      id: 'schwartz-drains',
      type: 'textbook',
      title: 'Surgical Drains',
      source: 'Schwartz\'s Principles of Surgery',
      chapter: 'Various',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-wound-healing', targetType: 'topic', relationship: 'related', label: 'Wound Healing' },
    { targetId: 'surgery-post-operative-care', targetType: 'topic', relationship: 'related', label: 'Post-Operative Care' },
    { targetId: 'surgery-surgical-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
  ],

  tags: {
    systems: ['surgical'],
    topics: ['drains', 'post-operative care', 'wound management', 'surgical equipment'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgicalDrains;
