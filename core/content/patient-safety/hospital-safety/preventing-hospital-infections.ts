/**
 * Preventing Hospital Infections
 *
 * Essential knowledge for protecting yourself from healthcare-associated infections.
 */

import { EducationalContent } from '../../types';

export const preventingHospitalInfections: EducationalContent = {
  id: 'concept-preventing-hospital-infections',
  type: 'concept',
  name: 'Preventing Hospital Infections',
  alternateNames: ['Healthcare-Associated Infections', 'HAI Prevention', 'Nosocomial Infection Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Hospitals can have germs that make you sick. Simple steps like handwashing help keep you safe.',
      explanation: `**What Are Hospital Germs?**
Hospitals help sick people get better, but they also have germs that can cause infections. These are called "hospital infections."

**Why Hospitals Have More Germs:**
- Many sick people are close together
- Some germs are very strong and hard to kill
- Medical equipment can carry germs

**How to Protect Yourself:**

*Ask Everyone to Wash Hands:*
- It's okay to ask doctors and nurses: "Did you wash your hands?"
- Watch for them to use soap or hand sanitizer
- You can wash your hands too!

*Keep Things Clean:*
- Don't touch your face with unwashed hands
- Use tissues when you sneeze or cough
- Keep your bed area clean

*Speak Up:*
- Tell a nurse if your bandage looks dirty or wet
- Say something if tubes or IVs look wrong
- Ask questions about your care

**Good Things to Say:**
- "Can you please wash your hands before touching me?"
- "My bandage feels wet - can you check it?"
- "Is it okay for visitors to touch my IV?"

**Remember:**
Asking about handwashing is not rude - it keeps everyone safe!`,
      keyTerms: [
        { term: 'germs', definition: 'Tiny living things that can make you sick' },
        { term: 'infection', definition: 'When germs get inside your body and make you sick' },
        { term: 'hand sanitizer', definition: 'A gel or liquid that kills germs on your hands' },
      ],
      analogies: [
        'Germs are like invisible bugs that can hop from person to person - washing hands washes them away.',
        'Asking someone to wash their hands is like asking them to wipe their feet before coming inside.',
      ],
      examples: [
        'A patient asks their nurse to use hand sanitizer before changing their bandage.',
        'A family member washes their hands every time they enter the hospital room.',
      ],
    },
    2: {
      level: 2,
      summary: 'Healthcare-associated infections (HAIs) are preventable. Patients can actively participate in infection prevention through hand hygiene awareness and speaking up about concerns.',
      explanation: `**Understanding Healthcare-Associated Infections:**

HAIs are infections that patients get while receiving medical treatment. They're a significant concern but largely preventable.

**Common Types of Hospital Infections:**
- Urinary tract infections (from catheters)
- Surgical site infections
- Bloodstream infections (from IV lines)
- Pneumonia (especially in patients on ventilators)

**How Infections Spread:**
| Route | Example |
|-------|---------|
| Contact | Touching contaminated surfaces |
| Droplet | Coughing or sneezing |
| Airborne | Germs floating in the air |
| Equipment | Contaminated medical devices |

**Your Role in Prevention:**

*Hand Hygiene Advocacy:*
- Healthcare workers should clean hands before and after patient contact
- You can politely ask: "I didn't see you wash your hands - would you mind?"
- Use hand sanitizer yourself regularly

*Monitoring Your Care:*
- Watch for signs of infection: redness, swelling, warmth, drainage
- Keep track of when IVs and catheters were placed
- Ask about the necessity of invasive devices

*Visitor Guidelines:*
- Ask visitors to wash hands upon entering
- Limit visitors when you're most vulnerable
- Keep visitors away if they're sick

**Questions to Ask:**
- "Do I still need this catheter/IV?"
- "When was my wound dressing last changed?"
- "What are the signs of infection I should watch for?"

**Warning Signs to Report:**
- Fever or chills
- Redness or swelling around wounds or IV sites
- Cloudy or foul-smelling urine (if you have a catheter)
- Increasing pain at a surgical site`,
      keyTerms: [
        { term: 'healthcare-associated infection (HAI)', definition: 'An infection acquired during the course of receiving healthcare treatment' },
        { term: 'catheter', definition: 'A tube inserted into the body to drain fluids or deliver treatments' },
        { term: 'hand hygiene', definition: 'Cleaning hands with soap and water or alcohol-based sanitizer to remove germs' },
        { term: 'surgical site infection', definition: 'An infection that occurs at or near a surgical incision' },
      ],
      analogies: [
        'Hand hygiene is like a force field against germs - it needs to be activated every time someone enters your space.',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare-associated infections represent a significant source of morbidity and mortality. Patient engagement in infection prevention bundles and hand hygiene compliance improves outcomes.',
      explanation: `## Healthcare-Associated Infections: Scope and Prevention

**Epidemiology:**
- Approximately 1 in 31 hospital patients has at least one HAI
- HAIs contribute to approximately 99,000 deaths annually in the US
- Most HAIs are preventable with proper protocols

**Major HAI Categories:**

| Type | Risk Factors | Prevention |
|------|--------------|------------|
| CAUTI | Urinary catheter duration | Early removal, alternatives |
| CLABSI | Central line presence | Bundles, daily review |
| SSI | Surgery type, patient factors | Prophylaxis, sterile technique |
| VAP | Mechanical ventilation | Elevation, oral care |
| C. diff | Antibiotic use | Stewardship, isolation |

**Infection Prevention Bundles:**

*Central Line Bundle:*
1. Hand hygiene
2. Maximal barrier precautions
3. Chlorhexidine skin prep
4. Optimal site selection
5. Daily necessity review

*Catheter Bundle:*
1. Insert only when necessary
2. Use aseptic technique
3. Secure catheter properly
4. Maintain closed system
5. Remove promptly

**Patient Empowerment Strategies:**

*Knowledge-Based:*
- Understand your invasive devices and their purposes
- Know expected duration of catheters/lines
- Recognize infection signs and symptoms
- Understand isolation precautions if applicable

*Action-Based:*
- Speak up about hand hygiene
- Participate in daily discussions about device necessity
- Report concerning symptoms promptly
- Follow preparation instructions (e.g., pre-surgical bathing)

**Hand Hygiene Compliance:**
- WHO's "5 Moments for Hand Hygiene" framework
- Before touching patient
- Before clean/aseptic procedures
- After body fluid exposure
- After touching patient
- After touching patient surroundings

**Antibiotic Stewardship:**
- Understand appropriate antibiotic use
- Ask about necessity and duration
- Don't request antibiotics for viral infections
- Complete prescribed courses

**Multidrug-Resistant Organisms (MDROs):**
- MRSA, VRE, CRE are increasingly common
- May require contact precautions
- Hand hygiene is critical for preventing spread`,
      keyTerms: [
        { term: 'CAUTI', definition: 'Catheter-Associated Urinary Tract Infection' },
        { term: 'CLABSI', definition: 'Central Line-Associated Bloodstream Infection' },
        { term: 'SSI', definition: 'Surgical Site Infection' },
        { term: 'VAP', definition: 'Ventilator-Associated Pneumonia' },
        { term: 'bundle', definition: 'A set of evidence-based practices that, when performed together, improve patient outcomes' },
        { term: 'MDRO', definition: 'Multidrug-Resistant Organism - bacteria resistant to multiple antibiotics' },
      ],
      clinicalNotes: 'Patient engagement in infection prevention has been shown to improve hand hygiene compliance and reduce HAI rates. Empowered patients who feel comfortable speaking up create a safety culture.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based infection prevention requires systematic implementation of bundles, antimicrobial stewardship, environmental controls, and patient engagement to reduce healthcare-associated infections.',
      explanation: `## Comprehensive HAI Prevention Framework

**Burden of HAIs:**
- Cost $28-45 billion annually in the US
- Extend hospital stays by 7-10 days on average
- Contribute to antimicrobial resistance
- Quality metrics tied to reimbursement

**Risk Stratification:**
| Patient Factor | Increased Risk |
|----------------|----------------|
| Immunocompromise | All HAIs |
| Prolonged hospitalization | All HAIs |
| ICU admission | VAP, CLABSI |
| Diabetes | SSI, CAUTI |
| Obesity | SSI |
| Malnutrition | All HAIs |

**Device-Related Infections:**

*CLABSI Prevention:*
- Insertion bundles reduce rates by 50%+
- Chlorhexidine-impregnated dressings
- Daily chlorhexidine bathing in ICU
- Needleless connector disinfection
- Hub and access port scrubbing

*CAUTI Prevention:*
- Nurse-driven removal protocols
- Alternatives: condom catheters, intermittent catheterization
- Aseptic insertion technique
- Closed drainage systems
- Removal within 24-48 hours post-surgery

**Surgical Site Infection Prevention:**

*Preoperative:*
- Chlorhexidine bathing
- MRSA decolonization for carriers
- Optimal glucose control
- Appropriate prophylactic antibiotics

*Intraoperative:*
- Sterile technique maintenance
- Normothermia
- Tissue oxygenation
- Glycemic control

*Postoperative:*
- Wound monitoring
- Patient education on wound care
- Recognition of infection signs

**Environmental Considerations:**
- Terminal cleaning protocols
- UV disinfection adjuncts
- Copper-impregnated surfaces
- HEPA filtration for high-risk patients
- Water system management

**Antimicrobial Stewardship Patient Role:**
- Understand indication and expected duration
- Ask about culture results and targeted therapy
- Know about de-escalation opportunities
- Report adverse effects
- Understand probiotic role in preventing C. diff

**Isolation Precautions:**
| Type | Indication | PPE Required |
|------|------------|--------------|
| Contact | MRSA, VRE, C. diff | Gown, gloves |
| Droplet | Flu, meningitis | Mask |
| Airborne | TB, measles | N95 respirator |

**Quality Metrics and Reporting:**
- National Healthcare Safety Network (NHSN) reporting
- Standardized Infection Ratios (SIRs)
- Hospital Compare public reporting
- Value-based purchasing implications`,
      keyTerms: [
        { term: 'antimicrobial stewardship', definition: 'Coordinated interventions to improve and measure appropriate use of antimicrobials' },
        { term: 'standardized infection ratio (SIR)', definition: 'Ratio of observed HAIs to predicted HAIs based on risk factors' },
        { term: 'contact precautions', definition: 'Infection control measures using gown and gloves for direct patient contact' },
        { term: 'decolonization', definition: 'Reducing or eliminating colonization with potential pathogens' },
        { term: 'chlorhexidine', definition: 'Antiseptic agent used for skin preparation and bathing' },
      ],
      clinicalNotes: 'Patient involvement in safety initiatives, including infection prevention, correlates with improved outcomes. Shared decision-making about device necessity and duration should involve patients.',
    },
    5: {
      level: 5,
      summary: 'Optimal HAI prevention integrates evidence-based bundles, environmental controls, antimicrobial stewardship, surveillance systems, and patient safety culture to achieve zero preventable infections.',
      explanation: `## Advanced HAI Prevention and Patient Safety

**Current Evidence and Guidelines:**
- CDC/HICPAC guidelines form the foundation
- Cochrane reviews support bundle approaches
- AHRQ CUSP program demonstrates culture change impact
- Zero harm is achievable for many HAI types

**Systems Approach to Prevention:**

\`\`\`
Organizational Culture
         ↓
Evidence-Based Bundles
         ↓
Environmental Controls ← Antimicrobial Stewardship
         ↓                      ↓
    Surveillance    →    Quality Improvement
         ↓
  Patient Engagement
         ↓
   Outcome: Zero Harm
\`\`\`

**High-Reliability Infection Prevention:**
- Leadership commitment
- Multidisciplinary teams
- Real-time surveillance
- Rapid response to clusters
- Just culture for reporting

**Advanced Interventions:**

*Technology-Enabled Prevention:*
- Electronic hand hygiene monitoring
- Automated device removal reminders
- Predictive analytics for infection risk
- Real-time location systems for compliance
- UV-C room disinfection

*Novel Approaches:*
- Fecal microbiota transplant for recurrent C. diff
- Bacteriophage therapy research
- Microbiome preservation strategies
- Rapid molecular diagnostics
- Whole genome sequencing for outbreak investigation

**Patient Engagement Science:**

*Evidence for Patient Involvement:*
- Patients asking about hand hygiene increases compliance
- Engaged patients have better outcomes across metrics
- Family presence during rounds improves safety
- Patient-reported outcomes predict complications

*Implementation Strategies:*
- Patient and family advisory councils
- Co-design of safety interventions
- Plain language materials
- Cultural competency in safety communication
- Health literacy-appropriate tools

**Emerging Challenges:**

*Antimicrobial Resistance:*
- CRE, CRAB, Candida auris
- Limited treatment options
- Need for novel antimicrobials
- Enhanced infection prevention critical

*Healthcare Delivery Changes:*
- Ambulatory surgery infection prevention
- Home infusion therapy safety
- Telehealth monitoring for infections
- Post-acute care transitions

**Research Frontiers:**
- Decolonization strategies effectiveness
- Optimal duration of prophylaxis
- Environmental reservoir management
- Role of hospital microbiome
- Implementation science for bundles

**Quality and Safety Integration:**
- HAIs as never events for some categories
- Public reporting and transparency
- Pay-for-performance implications
- Patient Safety Organizations role
- Sentinel event review processes`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'Organization that operates under complex conditions with few failures due to systematic safety practices' },
        { term: 'just culture', definition: 'Safety culture that balances accountability with learning from errors' },
        { term: 'CUSP', definition: 'Comprehensive Unit-based Safety Program - AHRQ initiative for culture improvement' },
        { term: 'sentinel event', definition: 'Unexpected occurrence involving death or serious harm requiring immediate investigation' },
        { term: 'Candida auris', definition: 'Emerging multidrug-resistant fungus with high mortality and transmission potential' },
      ],
      clinicalNotes: 'HAI prevention represents a model for patient safety improvement. Success requires integration of evidence-based practices, safety culture, and patient engagement. Zero preventable HAIs should be the goal for all healthcare organizations.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cdc-hai-guidelines',
      type: 'website',
      title: 'Healthcare-Associated Infections Prevention Guidelines',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/hai/prevent/prevention.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-speaking-up-about-concerns', targetType: 'concept', relationship: 'related', label: 'Speaking Up About Concerns' },
    { targetId: 'concept-hospital-fall-prevention', targetType: 'concept', relationship: 'related', label: 'Fall Prevention' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['infection-prevention', 'hospital-safety', 'patient-advocacy'],
    clinicalRelevance: 'critical',
    keywords: ['HAI', 'hospital infection', 'hand hygiene', 'infection control'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default preventingHospitalInfections;
