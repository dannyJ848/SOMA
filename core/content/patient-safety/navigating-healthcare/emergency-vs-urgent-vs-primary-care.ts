/**
 * Emergency vs Urgent vs Primary Care
 *
 * Understanding when to use different levels of healthcare services.
 */

import { EducationalContent } from '../../types';

export const emergencyVsUrgentVsPrimaryCare: EducationalContent = {
  id: 'concept-emergency-vs-urgent-vs-primary-care',
  type: 'concept',
  name: 'Emergency vs Urgent vs Primary Care',
  alternateNames: ['When to Go to the ER', 'Choosing the Right Care', 'Healthcare Settings'],

  levels: {
    1: {
      level: 1,
      summary: 'Different health problems need different types of care. Knowing where to go helps you get the right help at the right time.',
      explanation: `**Three Types of Care:**

*Emergency Room (ER):*
For very serious problems that could be life-threatening.

*Urgent Care:*
For problems that need attention today but are not emergencies.

*Primary Care (Your Regular Doctor):*
For ongoing health needs and problems that can wait a day or two.

**When to Go to the Emergency Room:**
Go to the ER if someone:
- Cannot breathe
- Has chest pain
- Cannot stop bleeding
- Had a bad accident
- Cannot wake up
- Is having a stroke (face drooping, arm weakness, speech problems)
- Might be having a heart attack

**When to Go to Urgent Care:**
Go to urgent care for:
- High fever
- Bad sore throat
- Ear pain
- Small cuts needing stitches
- Sprains
- Mild asthma problems
- UTI symptoms

**When to See Your Regular Doctor:**
See your regular doctor for:
- Check-ups
- Refilling medicines
- Ongoing health problems
- Questions about your health
- Shots and vaccines
- Problems that can wait a few days

**Quick Guide:**

| Problem | Where to Go |
|---------|-------------|
| Chest pain | Emergency Room |
| Sore throat | Urgent Care or Primary |
| Annual check-up | Primary Care |
| Cannot breathe | Emergency Room |
| Bad cut | Urgent Care |
| Cold symptoms | Primary Care |

**Remember:**
If you are not sure, call your doctor's office or a nurse hotline. They can help you decide. When in doubt about a serious emergency, call 911!`,
      keyTerms: [
        { term: 'emergency room', definition: 'Hospital department for very serious health problems' },
        { term: 'urgent care', definition: 'Clinic for problems that need quick attention but are not emergencies' },
        { term: 'primary care', definition: 'Your regular doctor who takes care of your everyday health needs' },
      ],
      analogies: [
        'Think of it like fires: A big fire needs the fire department (ER), a small fire needs a fire extinguisher (urgent care), and preventing fires is like regular check-ups (primary care).',
        'The ER is like 911 for health - for true emergencies. Urgent care is like calling a neighbor for help. Primary care is like taking care of your house regularly.',
      ],
      examples: [
        'Someone with a bad stomachache but no fever goes to urgent care instead of the ER.',
        'A person with crushing chest pain calls 911 and goes to the emergency room.',
      ],
    },
    2: {
      level: 2,
      summary: 'Choosing the right level of care improves outcomes and reduces unnecessary costs. Understanding symptoms that require emergency care versus urgent or routine care helps you navigate the healthcare system.',
      explanation: `**Understanding Care Levels:**

*Emergency Department:*
- Life-threatening conditions
- 24/7 availability
- Full diagnostic capabilities
- Highest cost
- Longest waits for non-emergencies

*Urgent Care:*
- Non-life-threatening urgent needs
- Extended hours, often weekends
- Limited diagnostics (basic X-ray, labs)
- Moderate cost
- Shorter waits

*Primary Care:*
- Preventive care and wellness
- Chronic disease management
- Coordination of care
- Lowest cost for routine care
- Requires appointment

**Emergency Symptoms (Call 911 or Go to ER):**

| System | Emergency Signs |
|--------|-----------------|
| Cardiac | Chest pain, pressure, shortness of breath |
| Neurological | Sudden weakness, confusion, severe headache |
| Respiratory | Cannot breathe, turning blue |
| Trauma | Major injuries, severe bleeding |
| Other | Poisoning, severe allergic reaction, suicidal thoughts |

**Urgent Care Appropriate:**

| Category | Examples |
|----------|----------|
| Infections | UTI, ear infections, sore throat |
| Minor injuries | Sprains, small cuts, minor burns |
| Symptoms | Fever, vomiting, rashes |
| Other | Eye infections, minor asthma flare |

**Primary Care Appropriate:**

| Category | Examples |
|----------|----------|
| Preventive | Annual exams, screenings, vaccines |
| Chronic care | Diabetes management, blood pressure |
| Routine | Prescription refills, referrals |
| New symptoms | Non-urgent complaints |

**Decision Framework:**

*Ask Yourself:*
1. Is this life-threatening? (If yes → ER)
2. Does this need attention today? (If yes → Urgent Care or ER)
3. Can this wait for my doctor? (If yes → Primary Care)

**Cost Considerations:**

| Setting | Typical Cost Range |
|---------|-------------------|
| ER | $500-$3000+ |
| Urgent Care | $100-$300 |
| Primary Care | $100-$200 |

*Note: Costs vary by insurance and location*

**When Unsure:**
- Call your doctor's office nurse line
- Use insurance nurse hotline (24/7)
- Call 911 if truly uncertain about emergency`,
      keyTerms: [
        { term: 'triage', definition: 'Process of determining the urgency of medical conditions' },
        { term: 'EMTALA', definition: 'Law requiring emergency departments to evaluate everyone regardless of ability to pay' },
        { term: 'nurse hotline', definition: 'Phone service providing medical guidance and triage' },
        { term: 'chief complaint', definition: 'Main reason for seeking medical care' },
      ],
      analogies: [
        'Healthcare settings are like stores: The ER is the 24-hour emergency store with everything but high prices, urgent care is like a convenience store for common needs, and your doctor is like your regular grocery store where you go most often.',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare utilization optimization requires understanding clinical acuity, available resources, and system design to match patient needs with appropriate care settings.',
      explanation: `## Healthcare Setting Selection

**Clinical Acuity Assessment:**

*Emergency Severity Index (ESI):*
| Level | Description | Setting |
|-------|-------------|---------|
| 1 | Resuscitation | ED immediately |
| 2 | Emergent | ED |
| 3 | Urgent | ED or Urgent Care |
| 4 | Less urgent | Urgent Care |
| 5 | Non-urgent | Primary Care |

**Red Flag Symptoms:**

*Immediate Emergency:*
\`\`\`
CARDIAC: Chest pain, pressure, radiating arm pain
NEURO: Sudden weakness, facial droop, slurred speech
RESP: Severe dyspnea, cyanosis, stridor
TRAUMA: Major injury, uncontrolled bleeding
OTHER: Anaphylaxis, altered consciousness, suicidal ideation
\`\`\`

*Time-Sensitive Conditions:*
| Condition | Time Window |
|-----------|-------------|
| Stroke | 3-4.5 hours (tPA) |
| MI | 90 minutes (PCI) |
| Sepsis | 1 hour (antibiotics) |
| Trauma | Golden hour |

**Urgent Care Capabilities:**

*Typically Available:*
- Physical exam
- Basic labs (rapid strep, urinalysis)
- Plain X-rays
- Simple wound care
- Splinting
- IV fluids (some)

*Not Typically Available:*
- CT/MRI
- Advanced labs
- Continuous monitoring
- Specialist consultation
- Surgery

**Primary Care Role:**

*Comprehensive Services:*
- Health maintenance
- Chronic disease management
- Care coordination
- Prevention and wellness
- Longitudinal relationship

*Same-Day Access:*
- Many practices offer urgent slots
- Telehealth expansion
- Nurse triage protocols
- After-hours coverage

**System Considerations:**

*Appropriate Utilization:*
| Driver | Impact |
|--------|--------|
| Insurance coverage | Access to alternatives |
| Primary care access | Reduces ER use |
| Health literacy | Appropriate decisions |
| Social factors | Transportation, childcare |

*Healthcare Costs:*
- ED overuse increases costs
- Uncompensated care impact
- System efficiency
- Quality implications

**Patient Education:**

*Key Messages:*
1. Know true emergency signs
2. Establish primary care relationship
3. Use nurse hotlines when unsure
4. Urgent care for appropriate conditions
5. Cost implications of choices`,
      keyTerms: [
        { term: 'ESI', definition: 'Emergency Severity Index - triage acuity scale used in emergency departments' },
        { term: 'tPA', definition: 'Tissue plasminogen activator - clot-dissolving medication for stroke' },
        { term: 'PCI', definition: 'Percutaneous coronary intervention - heart catheterization procedure' },
        { term: 'golden hour', definition: 'Critical time period after major trauma when treatment most effective' },
      ],
      clinicalNotes: 'Patient education about appropriate care settings reduces unnecessary ED visits. Primary care access is a key determinant of healthcare utilization patterns.',
    },
    4: {
      level: 4,
      summary: 'Optimal healthcare utilization requires understanding care delivery models, access factors, quality considerations, and cost implications across settings.',
      explanation: `## Healthcare Delivery Systems

**Care Setting Comparison:**

*Capability Framework:*
| Capability | ED | Urgent Care | Primary |
|------------|----|----|---------|
| 24/7 access | Yes | Limited | No |
| Diagnostics | Full | Basic | Basic |
| Specialists | On-call | No | Referral |
| Procedures | Full | Limited | Basic |
| Cost | Highest | Moderate | Lowest |

**Access Models:**

*Primary Care Access:*
- Same-day appointments
- Walk-in clinics
- Extended hours
- Telehealth
- Patient portals

*Urgent Care Evolution:*
- Retail clinics
- Free-standing EDs
- Virtual urgent care
- Employer clinics

**Quality Considerations:**

*By Setting:*
| Setting | Quality Factors |
|---------|-----------------|
| ED | Acuity-appropriate, overtriage safer |
| Urgent Care | Variable quality, limited follow-up |
| Primary | Continuity, comprehensive, preventive |

*Continuity Value:*
- Better outcomes
- Lower costs
- Higher satisfaction
- Improved prevention

**Utilization Management:**

*Strategies:*
\`\`\`
Patient Education
       ↓
Nurse Triage Lines
       ↓
Primary Care Access → Appropriate Utilization
       ↓
Care Coordination
\`\`\`

*Barriers to Appropriate Use:*
| Barrier | Mitigation |
|---------|------------|
| Access | Extended hours, telehealth |
| Health literacy | Education, navigation |
| Social factors | Support services |
| Trust | Relationship building |

**Economic Analysis:**

*Cost Drivers:*
- ED visit cost $1000-3000+ average
- Urgent care $150-300 average
- Primary care $100-200 average
- Non-urgent ED visits costly to system

*Value-Based Implications:*
- ED avoidance incentives
- Primary care investment
- Care coordination ROI
- Quality linkages

**Special Populations:**

*High Utilizers:*
- Complex needs
- Social factors
- Mental health
- Substance use
- Care coordination crucial

*Pediatric Considerations:*
- Higher anxiety about emergencies
- Limited urgent care pediatric expertise
- Primary care relationship important
- Telehealth particularly useful

**System Design:**

*Optimal Model:*
\`\`\`
Robust Primary Care Access
           ↓
Effective Triage Support
           ↓
Appropriate Urgent Care Options
           ↓
ED for True Emergencies
           ↓
Care Coordination Throughout
\`\`\``,
      keyTerms: [
        { term: 'free-standing ED', definition: 'Emergency department not attached to a hospital' },
        { term: 'retail clinic', definition: 'Healthcare clinic located in retail settings' },
        { term: 'high utilizer', definition: 'Patient with frequent healthcare visits, often ED' },
        { term: 'care coordination', definition: 'Organized management of patient care activities' },
      ],
      clinicalNotes: 'System design significantly impacts utilization patterns. Investment in primary care access and care coordination yields better outcomes and lower costs than ED-centric models.',
    },
    5: {
      level: 5,
      summary: 'Expert healthcare navigation integrates understanding of delivery systems, access optimization, value-based care principles, and population health strategies.',
      explanation: `## Healthcare Utilization: Systems Perspective

**Delivery System Evolution:**

*Historical:*
\`\`\`
Hospital-Centric Care
         ↓
Primary Care Emergence
         ↓
Urgent Care Growth
         ↓
Virtual Care Expansion
         ↓
Integrated Models
\`\`\`

**Current Landscape:**

*Setting Proliferation:*
| Setting | Characteristics |
|---------|-----------------|
| Traditional ED | Hospital-based, full service |
| Free-standing ED | Community-based, ED capability |
| Urgent care | Walk-in, limited hours |
| Retail clinic | NP/PA staffed, basic services |
| Virtual urgent care | Telehealth-based |
| Primary care | Longitudinal relationship |

*Quality Variation:*
- Standardization challenges
- Oversight differences
- Continuity gaps
- Information silos

**Policy Framework:**

*Regulatory Considerations:*
| Issue | Status |
|-------|--------|
| EMTALA | ED screening requirements |
| Facility licensing | State-specific |
| Scope of practice | Provider type limits |
| Price transparency | Emerging requirements |

*Payment Impact:*
- Fee-for-service incentives
- Value-based shift
- Site-of-service differentials
- ED avoidance programs

**Population Health:**

*Utilization Patterns:*
\`\`\`
Population Need
       ↓
Access Factors → Utilization Choice
       ↓
Setting Match (or mismatch)
       ↓
Outcomes and Cost
\`\`\`

*Improvement Strategies:*
| Strategy | Impact |
|----------|--------|
| Primary care access | Reduces ED use |
| Care management | High utilizer targeting |
| Health literacy | Appropriate decisions |
| Social support | Address root causes |

**Health Equity:**

*Disparities:*
- ED reliance in underserved areas
- Primary care access gaps
- Insurance coverage effects
- Transportation barriers

*Equity Interventions:*
- Community health centers
- Mobile health units
- Telehealth expansion
- Navigator programs

**Future Directions:**

*Technology Impact:*
- AI triage assistance
- Remote monitoring
- Virtual first models
- Integrated platforms

*Model Evolution:*
| Model | Features |
|-------|----------|
| Virtual-first | Telehealth as entry point |
| Hospital-at-home | ED alternative |
| Integrated systems | Coordinated settings |
| Community-based | Accessible, local |

**Research Priorities:**

*Current Questions:*
- Optimal triage methods
- Quality standardization
- Cost-effectiveness
- Equity interventions

*Knowledge Translation:*
- Patient education effectiveness
- Provider behavior change
- System design optimization
- Policy impact

**Patient Empowerment:**

*Key Competencies:*
\`\`\`
Symptom Recognition
        ↓
Setting Knowledge
        ↓
Resource Access (hotlines, telehealth)
        ↓
Informed Decision
        ↓
Appropriate Care
\`\`\`

*System Support:*
- Clear guidance
- Accessible options
- Support resources
- Follow-up coordination`,
      keyTerms: [
        { term: 'virtual-first', definition: 'Healthcare model using telehealth as primary point of access' },
        { term: 'hospital-at-home', definition: 'Program providing hospital-level care in patient home' },
        { term: 'site-of-service differential', definition: 'Payment variation based on where services delivered' },
        { term: 'population health', definition: 'Health outcomes of groups and their distribution' },
      ],
      clinicalNotes: 'Healthcare delivery continues to evolve with technology and payment model changes. The goal is matching patient needs with appropriate settings through effective triage, access, and coordination.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acep-when-to-go',
      type: 'website',
      title: 'Know When to Go',
      source: 'American College of Emergency Physicians',
      url: 'https://www.emergencyphysicians.org/article/know-when-to-go',
    },
  ],

  crossReferences: [
    { targetId: 'concept-understanding-health-insurance', targetType: 'concept', relationship: 'related', label: 'Understanding Health Insurance' },
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['healthcare-navigation', 'emergency-care', 'primary-care'],
    clinicalRelevance: 'critical',
    keywords: ['emergency room', 'urgent care', 'primary care', 'when to go to ER'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default emergencyVsUrgentVsPrimaryCare;
