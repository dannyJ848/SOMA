/**
 * Care Coordination - Organizing Patient Care Across Providers and Settings
 */

import { EducationalContent } from '../../types';

export const careCoordination: EducationalContent = {
  id: 'interprofessional-care-coordination',
  type: 'concept',
  name: 'Care Coordination',
  alternateNames: ['Care Management', 'Care Integration'],

  levels: {
    1: {
      level: 1,
      summary: 'Care coordination means making sure all your doctors and healthcare providers work together and share information about your care.',
      explanation: `**What is Care Coordination?**

When you see multiple doctors or have ongoing health needs, care coordination helps make sure everyone is on the same page.

**What Care Coordinators Help With:**

- Making sure all your doctors have your information
- Scheduling appointments
- Following up after hospital stays
- Connecting you with community resources
- Answering questions between visits

**Why It Matters:**

Without coordination, you might:
- Have to repeat your story many times
- Get tests done twice
- Have medicines that don't work well together
- Miss important follow-up care

**How You Can Help:**

- Keep a list of all your doctors
- Bring your medication list to every visit
- Ask questions when you don't understand
- Tell one doctor what another doctor said`,
      keyTerms: [
        { term: 'care coordination', definition: 'Organizing patient care activities between different providers' },
        { term: 'care coordinator', definition: 'A person who helps organize and manage your healthcare' },
        { term: 'follow-up', definition: 'Additional care or appointments after an initial visit or hospital stay' },
      ],
      analogies: ['A care coordinator is like a project manager for your health - they make sure everyone works together'],
      examples: ['After Marias heart surgery, her care coordinator schedules cardiac rehab and checks that she filled her prescriptions'],
      patientCounselingPoints: ['Ask if you have a care coordinator', 'Keep all your healthcare providers informed'],
    },
    2: {
      level: 2,
      summary: 'Care coordination organizes patient care activities and shares information among participants to achieve safer, more effective care.',
      explanation: `## Core Activities

**Information Transfer:**
- Medical records sharing
- Test results communication
- Medication reconciliation
- Referral management

**Care Transitions:**
- Hospital discharge planning
- Post-acute care coordination
- Emergency department follow-up
- Specialty care integration

**Patient Support:**
- Self-management education
- Resource connection
- Appointment scheduling
- Care plan adherence

## Care Coordination Roles

**Care Managers:**
- RN or social work trained
- Complex patient focus
- Chronic disease management
- Telephonic and in-person

**Patient Navigators:**
- Help overcome barriers
- System navigation
- Community resources
- Cultural bridging

**Transition Coordinators:**
- Focus on care transitions
- Discharge planning
- Post-hospital follow-up
- Readmission prevention`,
      keyTerms: [
        { term: 'care transitions', definition: 'Movement between healthcare settings or providers' },
        { term: 'medication reconciliation', definition: 'Comparing medication lists across settings to prevent errors' },
        { term: 'care manager', definition: 'Professional who coordinates care for patients with complex needs' },
      ],
      patientCounselingPoints: ['Use patient portals to see your records', 'Make sure medications are reviewed at each transition'],
    },
    3: {
      level: 3,
      summary: 'Care coordination is a core function of primary care and an essential component of value-based healthcare delivery.',
      explanation: `## AHRQ Care Coordination Framework

**Components:**
1. Establishing accountability
2. Communicating with patients
3. Communicating between providers
4. Managing transitions
5. Assessing patient needs
6. Supporting self-management
7. Creating proactive care plan
8. Monitoring and follow-up
9. Linking to community resources

## Evidence Base

**Effective Interventions:**
- Transitional care programs
- Chronic care management
- Patient-centered medical home
- Health coaching

**Outcomes:**
- Reduced hospitalizations
- Improved quality metrics
- Better patient experience
- Cost savings in some models

## Implementation Models

**Patient-Centered Medical Home:**
- Team-based primary care
- Care coordination as core function
- Expanded access
- Quality improvement

**Accountable Care Organizations:**
- Shared savings incentives
- Population health focus
- Care management infrastructure
- Quality measurement`,
      keyTerms: [
        { term: 'PCMH', definition: 'Patient-Centered Medical Home - team-based primary care model' },
        { term: 'ACO', definition: 'Accountable Care Organization - provider group with shared quality/cost accountability' },
        { term: 'transitional care', definition: 'Care bridging hospital and home to prevent readmissions' },
      ],
      clinicalNotes: 'Build care coordination into practice workflows. Focus on high-risk patients. Measure outcomes.',
    },
    4: {
      level: 4,
      summary: 'Care coordination requires systematic approaches integrating technology, teams, and patient engagement.',
      explanation: `## System Design

**Health IT Infrastructure:**
- Interoperable EHRs
- Health information exchange
- Care management platforms
- Patient engagement tools

**Team Configuration:**
- Role clarity
- Care coordinator integration
- Communication protocols
- Supervision structure

**Risk Stratification:**
- Predictive modeling
- Claims-based algorithms
- Clinical judgment
- Patient-reported data

## Quality Measurement

**Process Measures:**
- Transition records received
- Medication reconciliation completion
- Follow-up appointment rates
- Care plan documentation

**Outcome Measures:**
- Emergency department visits
- Hospital readmissions
- Patient experience (CAHPS)
- Clinical quality metrics

## Financial Considerations

**Investment:**
- Care coordinator salaries
- Technology infrastructure
- Training and development

**Return on Investment:**
- Avoided hospitalizations
- Shared savings
- Risk adjustment accuracy
- Quality bonuses`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Identifying patients most likely to benefit from intensive care management' },
        { term: 'health information exchange', definition: 'Electronic sharing of health information between organizations' },
        { term: 'shared savings', definition: 'Payment model where providers share in cost savings' },
      ],
      clinicalNotes: 'Implement risk stratification. Invest in IT infrastructure. Track ROI of care coordination.',
    },
    5: {
      level: 5,
      summary: 'Care coordination is essential infrastructure for population health and value-based care transformation.',
      explanation: `## Policy Framework

**Federal Initiatives:**
- Medicare chronic care management
- Transitional care management
- ACO programs
- CMMI demonstrations

**Payment Reform:**
- Fee-for-service add-ons (CCM, TCM)
- Capitation and global budgets
- Shared savings models
- Episode-based payments

## Population Health Integration

**Panel Management:**
- Proactive outreach
- Gap closure
- Registry-based care
- Quality improvement

**Social Determinants:**
- Screening integration
- Community resource connection
- Cross-sector partnerships
- Health equity focus

## Technology Evolution

**Emerging Capabilities:**
- AI-assisted risk prediction
- Automated care gap identification
- Natural language processing
- Remote patient monitoring

## Health Equity Considerations

**Disparities in Coordination:**
- Insurance coverage differences
- Language and cultural barriers
- Transportation and access
- Digital divide

**Equity-Focused Approaches:**
- Community health workers
- Cultural navigation
- Language services
- Social needs addressing`,
      keyTerms: [
        { term: 'CCM', definition: 'Chronic Care Management - Medicare billing code for care coordination' },
        { term: 'panel management', definition: 'Proactive care for defined patient population' },
        { term: 'community health worker', definition: 'Frontline worker bridging community and health system' },
      ],
      clinicalNotes: 'Leverage payment codes for coordination. Address SDOH. Focus on health equity.',
    },
  },

  media: [],
  citations: [{ id: 'ahrq-coordination', type: 'website', title: 'Care Coordination', source: 'AHRQ' }],
  crossReferences: [{ targetId: 'interprofessional-collaborative-practice', targetType: 'concept', relationship: 'sibling', label: 'Collaborative Practice' }],
  tags: { systems: ['team-based-care'], topics: ['care coordination', 'care management'], keywords: ['coordination', 'transitions', 'care manager'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default careCoordination;
