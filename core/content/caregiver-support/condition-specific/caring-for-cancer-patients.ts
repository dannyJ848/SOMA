/**
 * Caring for Cancer Patients - Educational Content
 *
 * Guidance for caregivers on supporting someone through cancer diagnosis,
 * treatment, and survivorship or end-of-life care.
 */

import { EducationalContent } from "../../types";

export const caringForCancerPatients: EducationalContent = {
  id: "caregiver-caring-for-cancer-patients",
  type: "concept",
  name: "Caring for Cancer Patients",
  alternateNames: [
    "Cancer Caregiving",
    "Oncology Support",
    "Cancer Care Support",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Caring for someone with cancer means supporting them through diagnosis, treatment, and recovery while helping manage symptoms and providing emotional support.",
      explanation: `When someone you love has cancer, you become an important part of their care team. There are many ways you can help.

**What Cancer Treatment May Involve**
- Surgery to remove tumors
- Chemotherapy (medicines that fight cancer)
- Radiation (beams that kill cancer cells)
- Immunotherapy (helps the body fight cancer)

**How You Can Help**

**During Treatment**
- Go to doctor appointments with them
- Write down what the doctor says
- Help them remember to take medicines
- Drive them to and from treatment
- Help them rest when they are tired

**Managing Side Effects**
- Nausea: small frequent meals, bland foods
- Fatigue: help with chores, encourage rest
- Hair loss: be supportive, help find wigs or scarves
- Mouth sores: soft foods, avoid spicy foods
- Low immunity: keep things clean, avoid sick people

**Emotional Support**
- Listen when they want to talk
- Sit quietly when they do not
- Let them express feelings, even anger or fear
- Remind them they are not alone
- Keep some normal activities going

**Taking Care of Yourself**
- Cancer caregiving is stressful
- Ask others to help
- Take breaks when you can
- Talk about your own feelings
- Join a caregiver support group

**When to Call the Doctor**
- Fever over 100.4°F
- Severe pain
- Uncontrolled vomiting
- Difficulty breathing
- Signs of infection`,
      keyTerms: [
        {
          term: "chemotherapy",
          definition: "Medicines that are used to kill cancer cells",
        },
        {
          term: "radiation",
          definition: "A treatment that uses beams of energy to kill cancer cells",
        },
        {
          term: "side effects",
          definition:
            "Unwanted symptoms caused by cancer treatment, like nausea or tiredness",
        },
      ],
      analogies: [
        "Cancer treatment is like fighting a battle - your loved one is the warrior, and you are their support crew keeping them strong.",
        "Think of yourself as a teammate - you help carry the load so they can focus on healing.",
      ],
      examples: [
        "When his wife started chemotherapy, Tom created a calendar to track her medications and appointments.",
        "Lisa keeps a notebook at every appointment to write down what the doctors say so her mom can focus on listening.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Cancer caregiving involves understanding treatment regimens, managing side effects, coordinating care, providing emotional support, and navigating the healthcare system throughout the cancer journey.",
      explanation: `**Understanding the Cancer Journey**

**Phases of Cancer Care**
1. **Diagnosis**: Tests, staging, treatment planning
2. **Active treatment**: Surgery, chemotherapy, radiation, other therapies
3. **Recovery/Survivorship**: Managing long-term effects, follow-up
4. **Advanced/Metastatic**: Managing symptoms, quality of life
5. **End-of-life**: Comfort care, hospice

**Treatment Types and Side Effects**

| Treatment | Common Side Effects | How to Help |
|-----------|---------------------|-------------|
| Surgery | Pain, fatigue, wound care | Assist with recovery, wound management |
| Chemotherapy | Nausea, fatigue, low immunity, hair loss | Anti-nausea strategies, infection prevention |
| Radiation | Skin changes, fatigue, site-specific effects | Skin care, rest, nutrition |
| Immunotherapy | Fatigue, skin reactions, flu-like symptoms | Monitor for reactions, report changes |

**Managing Common Symptoms**

**Nausea and Vomiting**
- Give anti-nausea medications as prescribed
- Small, frequent meals
- Avoid strong smells
- Try ginger, peppermint, bland foods
- Stay hydrated

**Fatigue**
- Prioritize activities
- Plan rest periods
- Light exercise when possible
- Good nutrition
- Address anemia if present

**Pain Management**
- Give pain medications as scheduled
- Track pain levels
- Report uncontrolled pain
- Use non-drug methods too (positioning, relaxation)

**Infection Prevention (Low Immunity)**
- Hand washing essential
- Avoid sick people
- Monitor temperature
- No raw foods if advised
- Know when to call doctor

**Practical Support**

**Care Coordination**
- Keep track of appointments
- Maintain medication list
- Communicate with healthcare team
- Coordinate with other helpers
- Manage insurance and billing

**Daily Needs**
- Meals and nutrition
- Transportation
- Household tasks
- Childcare if needed
- Work arrangements

**Emotional Support**
- Be present and listen
- Allow expression of all feelings
- Maintain hope while being realistic
- Connect with support resources
- Watch for signs of depression`,
      keyTerms: [
        {
          term: "staging",
          definition:
            "Determining how far cancer has spread, which guides treatment decisions",
        },
        {
          term: "neutropenia",
          definition:
            "Low white blood cell count from chemotherapy, increasing infection risk",
        },
        {
          term: "palliative care",
          definition:
            "Specialized care focused on symptom relief and quality of life at any stage",
        },
        {
          term: "oncologist",
          definition: "A doctor who specializes in treating cancer",
        },
      ],
      analogies: [
        "Managing cancer care is like being a project manager - you coordinate many moving parts to support the main goal of healing.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Cancer caregiving requires understanding treatment protocols, evidence-based symptom management, psychosocial support skills, care coordination competencies, and navigation of complex healthcare systems.",
      explanation: `## Understanding Cancer Treatment

**Treatment Modalities**
- Surgery: curative, palliative, staging
- Chemotherapy: cytotoxic, targeted agents
- Radiation: external beam, brachytherapy
- Immunotherapy: checkpoint inhibitors, CAR-T
- Hormonal therapy: breast, prostate cancers
- Stem cell transplant: hematologic malignancies

**Treatment Settings**
- Inpatient: hospitalizations, transplant
- Outpatient: clinic infusions, radiation
- Home: oral medications, recovery
- Hybrid: combinations of settings

## Symptom Management Evidence

**Chemotherapy-Induced Nausea/Vomiting**
- Antiemetic regimens by emetogenicity level
- 5-HT3 antagonists, NK1 antagonists, steroids
- Breakthrough nausea management
- Non-pharmacological adjuncts

**Cancer-Related Fatigue**
- Most common and distressing symptom
- Exercise has strongest evidence
- Address contributing factors (anemia, depression)
- Energy conservation strategies

**Pain Management**
- WHO analgesic ladder
- Opioid use in cancer pain
- Adjuvant analgesics
- Non-pharmacological approaches
- Addiction vs. dependence education

**Neutropenia Management**
- Fever and neutropenia emergency
- Growth factor prophylaxis
- Infection prevention education
- When to seek care

## Psychosocial Support

**Distress Screening**
- NCCN distress thermometer
- Universal screening recommendations
- Referral pathways
- Caregiver distress assessment

**Communication Support**
- Information needs vary by patient
- Supporting decision-making
- Navigating uncertainty
- Discussing prognosis

**Family Dynamics**
- Role changes in family system
- Children of cancer patients
- Maintaining relationships
- Sexuality and intimacy changes

## Care Coordination

**Healthcare System Navigation**
- Understanding care team roles
- Insurance and financial navigation
- Clinical trial access
- Second opinion considerations

**Caregiver Tasks**
| Category | Tasks |
|----------|-------|
| Medical | Medications, symptoms, appointments |
| Physical | ADLs, mobility, wound care |
| Emotional | Support, communication, coping |
| Practical | Finances, household, transportation |
| Coordination | Team communication, scheduling |

**Documentation**
- Medication lists and schedules
- Symptom tracking logs
- Appointment records
- Communication with providers

## Transitions and Planning

**Survivorship**
- Survivorship care plans
- Late effects monitoring
- Healthy lifestyle promotion
- Psychosocial adjustment

**Advanced Disease**
- Goals of care conversations
- Palliative care integration
- Hospice timing
- Advance directive completion`,
      keyTerms: [
        {
          term: "emetogenicity",
          definition:
            "Likelihood of a chemotherapy regimen to cause nausea and vomiting",
        },
        {
          term: "NCCN guidelines",
          definition:
            "National Comprehensive Cancer Network evidence-based recommendations for cancer care",
        },
        {
          term: "distress thermometer",
          definition:
            "Brief screening tool for cancer-related psychological distress (0-10 scale)",
        },
        {
          term: "survivorship care plan",
          definition:
            "Document summarizing treatment received and follow-up recommendations for cancer survivors",
        },
      ],
      clinicalNotes:
        "Screen caregivers for distress alongside patients. Provide education on symptom management specific to treatment regimen. Ensure caregivers know emergency contact information and when to call. Connect with oncology social work and navigation services.",
    },
    4: {
      level: 4,
      summary:
        "Evidence-based cancer caregiving integrates symptom management protocols, validated caregiver assessment and intervention programs, shared care models, and quality metrics for both patient and caregiver outcomes.",
      explanation: `## Evidence-Based Symptom Management

**Antiemetic Protocols**
- MASCC/ESMO guidelines
- High, moderate, low emetogenic risk classification
- Prophylaxis regimens by risk level
- Rescue protocols for breakthrough

**Cancer Pain Management**
- WHO guidelines revision
- Opioid therapy evidence
- Adjuvant therapy selection
- Interventional approaches
- Integrative approaches

**Fatigue Interventions**
- Exercise meta-analysis evidence (strong)
- Psychoeducational interventions
- Mind-body approaches
- Pharmacological options limited

**Neutropenia Guidelines**
- ASCO, NCCN G-CSF guidelines
- Risk stratification for prophylaxis
- Febrile neutropenia management
- Ambulatory vs. inpatient protocols

## Caregiver Intervention Evidence

**FOCUS Program**
- Family-involved, Optimistic, Coping, Uncertainty, Symptom
- Couples-based intervention
- Demonstrated benefits for patients and caregivers
- Adapted for various cancer types

**COPE Intervention**
- Creativity, Optimism, Planning, Expert information
- Problem-solving approach
- Improved caregiver outcomes
- Quality of life benefits

**Cancer Support Community**
- Psychosocial support programs
- Support groups
- Educational programs
- Online resources

## Shared Care Models

**Oncology-Primary Care Integration**
- Survivorship care transitions
- Shared care plans
- Communication protocols
- Role clarity

**Palliative Care Integration**
- Early palliative care evidence (Temel et al.)
- Improved quality of life
- Improved survival in some studies
- Reduced aggressive end-of-life care

**Hospice Integration**
- Timing of referral
- Family outcomes in hospice
- Caregiver bereavement support
- Quality metrics

## Assessment Tools

**Patient Symptoms**
- PRO-CTCAE (patient-reported toxicities)
- Edmonton Symptom Assessment
- ESAS-r
- Pain assessment tools

**Caregiver Assessment**
- Caregiver Quality of Life-Cancer
- CQOL-C scale
- Caregiver Reaction Assessment
- Distress screening

**Needs Assessment**
- Supportive Care Needs Survey
- SCNS-SF34
- Unmet needs identification
- Intervention targeting

## Quality Metrics

**Patient Outcomes**
- Symptom control
- Quality of life (FACT-G, EORTC QLQ-C30)
- Treatment adherence
- Emergency visits and hospitalizations

**Caregiver Outcomes**
- Distress levels
- Quality of life
- Burden measures
- Depression and anxiety

**System Outcomes**
- Caregiver assessment rates
- Referral to support services
- Advance care planning documentation
- Hospice utilization`,
      keyTerms: [
        {
          term: "FOCUS program",
          definition:
            "Couples-based cancer intervention addressing Family, Optimism, Coping, Uncertainty, Symptoms",
        },
        {
          term: "PRO-CTCAE",
          definition:
            "Patient-Reported Outcomes version of Common Terminology Criteria for Adverse Events",
        },
        {
          term: "early palliative care",
          definition:
            "Integration of palliative care at diagnosis rather than end-of-life, improving outcomes",
        },
        {
          term: "FACT-G",
          definition:
            "Functional Assessment of Cancer Therapy-General, validated quality of life measure",
        },
        {
          term: "CQOL-C",
          definition:
            "Caregiver Quality of Life Index-Cancer, cancer-specific caregiver outcome measure",
        },
      ],
      clinicalNotes:
        "Implement systematic symptom assessment using validated tools. Screen caregivers for distress and needs. Offer evidence-based caregiver interventions. Integrate palliative care early in serious illness. Track both patient and caregiver outcomes.",
    },
    5: {
      level: 5,
      summary:
        "Cancer caregiving research examines dyadic intervention models, implementation science for supportive care, precision approaches to symptom management, and health systems frameworks while addressing disparities and the evolving landscape of cancer treatment.",
      explanation: `## Research Advances

**Dyadic Intervention Science**
- Patient-caregiver dyad as unit of care
- Interdependence in coping and outcomes
- Dyadic intervention development
- Couple-based communication interventions

**Precision Symptom Management**
- Pharmacogenomics in supportive care
- Biomarkers for symptom risk
- Personalized antiemetic selection
- Individual variation in toxicity

**Technology Integration**
- Remote symptom monitoring
- PRO integration in EHR
- Digital health interventions
- Telehealth supportive care

## Implementation Science

**Evidence-Practice Gap**
- Distress screening underimplemented
- Caregiver assessment gaps
- Palliative care timing
- Survivorship care plan delivery

**Implementation Strategies**
- ASCO distress screening quality measure
- CoC accreditation requirements
- Quality improvement programs
- EHR clinical decision support

**Scalability Research**
- Intervention adaptation
- Cost-effectiveness studies
- Workforce considerations
- Digital delivery platforms

## Health Systems Research

**Care Delivery Models**
- Oncology medical home
- Navigation programs
- Collaborative care
- Integrated palliative care

**Value-Based Care**
- OCM (Oncology Care Model)
- Quality metrics development
- Cost of care research
- Patient-centered outcomes

**Transitions of Care**
- Hospital to home
- Active treatment to survivorship
- Curative to palliative intent
- Care to bereavement

## Health Equity

**Disparities**
- Access to cancer treatment
- Supportive care access
- Clinical trial participation
- Caregiver support access

**Underserved Populations**
- Racial and ethnic minorities
- Rural populations
- Low socioeconomic status
- Uninsured/underinsured

**Interventions**
- Patient navigation
- Culturally adapted programs
- Community-based delivery
- Policy advocacy

## Caregiver Research

**Outcomes Research**
- Long-term caregiver health
- Post-caregiving adjustment
- Bereavement outcomes
- Positive caregiving aspects

**Intervention Development**
- Stepped care approaches
- Technology-delivered interventions
- Brief interventions for busy caregivers
- Workplace support programs

**Measurement Science**
- Caregiver outcome measure development
- Caregiver-reported outcomes
- Minimal clinically important differences
- Cross-cultural validation

## Future Directions

**Emerging Treatment Landscape**
- Immunotherapy caregiver implications
- Oral oncolytic caregiving
- CAR-T and novel therapies
- Survivorship in new era

**Research Priorities**
- Caregiver health outcomes
- Implementation effectiveness
- Health equity interventions
- Technology optimization

**Policy and Practice**
- Caregiver recognition
- Financial toxicity mitigation
- Leave policies
- Support service coverage`,
      keyTerms: [
        {
          term: "dyadic coping",
          definition:
            "How couples jointly manage stress, influencing both patient and caregiver outcomes",
        },
        {
          term: "Oncology Care Model",
          definition:
            "CMS value-based payment model for cancer care emphasizing quality and cost",
        },
        {
          term: "pharmacogenomics",
          definition:
            "Using genetic information to predict drug response for personalized treatment",
        },
        {
          term: "financial toxicity",
          definition:
            "Objective financial burden and subjective distress from cancer-related costs",
        },
        {
          term: "CAR-T therapy",
          definition:
            "Chimeric antigen receptor T-cell therapy, novel immunotherapy requiring specialized caregiver education",
        },
      ],
      clinicalNotes: `Systems implementation:
1. Implement universal distress and caregiver screening
2. Develop care pathways integrating palliative care early
3. Offer evidence-based caregiver interventions
4. Address health equity in supportive care access
5. Research emerging treatment caregiver implications
6. Advocate for caregiver support policies`,
    },
  },

  media: [
    {
      id: "cancer-caregiving-guide",
      type: "diagram",
      filename: "cancer-caregiving-phases.svg",
      title: "Cancer Caregiving Through Treatment Phases",
      description: "Visual guide to caregiver roles across the cancer journey",
    },
  ],

  citations: [
    {
      id: "nccn-guidelines",
      type: "website",
      title: "NCCN Guidelines for Supportive Care",
      source: "National Comprehensive Cancer Network",
      url: "https://www.nccn.org/",
    },
    {
      id: "cancer-support-community",
      type: "website",
      title: "Caregiver Support Resources",
      source: "Cancer Support Community",
      url: "https://www.cancersupportcommunity.org/",
    },
  ],

  crossReferences: [
    {
      targetId: "caregiver-medication-management",
      targetType: "concept",
      relationship: "related",
      label: "Medication Management",
    },
    {
      targetId: "caregiver-grief-and-anticipatory-grief",
      targetType: "concept",
      relationship: "related",
      label: "Grief and Anticipatory Grief",
    },
  ],

  tags: {
    systems: ["caregiver-support"],
    topics: [
      "cancer",
      "oncology",
      "chemotherapy",
      "symptom management",
      "survivorship",
    ],
    clinicalRelevance: "critical",
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default caringForCancerPatients;
