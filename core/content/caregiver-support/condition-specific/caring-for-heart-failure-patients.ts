/**
 * Caring for Heart Failure Patients - Educational Content
 *
 * Guidance for caregivers on supporting someone with heart failure,
 * managing symptoms, monitoring for worsening, and lifestyle modifications.
 */

import { EducationalContent } from "../../types";

export const caringForHeartFailurePatients: EducationalContent = {
  id: "caregiver-caring-for-heart-failure-patients",
  type: "concept",
  name: "Caring for Heart Failure Patients",
  alternateNames: [
    "Heart Failure Caregiving",
    "CHF Care Support",
    "Cardiac Caregiving",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Caring for someone with heart failure means helping them manage their condition by watching for warning signs, helping with medications, and supporting a heart-healthy lifestyle.",
      explanation: `Heart failure means the heart is not pumping as well as it should. This makes fluid build up in the body and causes tiredness and shortness of breath.

**Warning Signs to Watch For**
- Sudden weight gain (more than 2-3 pounds in a day)
- Swelling in feet, ankles, or legs
- Shortness of breath, especially lying down
- Feeling very tired
- Coughing more, especially at night
- Feeling full or bloated

**How You Can Help**

**Daily Monitoring**
- Help them weigh themselves every morning
- Keep a record of daily weights
- Watch for swelling
- Notice changes in breathing

**Medication Help**
- Make sure medicines are taken on time
- Keep a list of all medicines
- Refill prescriptions before they run out
- Never skip doses without asking the doctor

**Diet Support**
- Help them eat less salt (sodium)
- Read food labels for sodium content
- Cook heart-healthy meals
- Limit fluids if doctor says to

**Activity Support**
- Encourage gentle activity as tolerated
- Help them rest when tired
- Go on short walks together
- Do not overdo it

**When to Call the Doctor**
- Weight gain of 3 or more pounds in a day
- New or worsening shortness of breath
- Cannot sleep lying flat
- Confusion or trouble thinking
- Swelling that is getting worse`,
      keyTerms: [
        {
          term: "heart failure",
          definition:
            "A condition where the heart cannot pump blood as well as it should",
        },
        {
          term: "fluid retention",
          definition:
            "When extra fluid builds up in the body, causing swelling and weight gain",
        },
        {
          term: "sodium",
          definition:
            "Salt, which can make the body hold onto fluid and make heart failure worse",
        },
      ],
      analogies: [
        "The heart is like a pump - in heart failure, the pump is weak and cannot move fluid around the body well.",
        "Monitoring weight is like checking a gauge - sudden increases warn you that fluid is building up.",
      ],
      examples: [
        "Every morning, Maria helps her husband step on the scale and writes his weight in a notebook by the bed.",
        "Tom learned to cook with herbs and spices instead of salt to help his dad follow his low-sodium diet.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Heart failure caregiving involves daily symptom monitoring, medication management, dietary modifications, activity support, and recognizing decompensation requiring medical attention.",
      explanation: `**Understanding Heart Failure**

Heart failure is a chronic condition where the heart cannot pump enough blood to meet the body"s needs. It can be:
- **HFrEF**: Reduced ejection fraction (weak pump)
- **HFpEF**: Preserved ejection fraction (stiff heart)

**Causes of Heart Failure**
- Heart attack damage
- High blood pressure
- Valve problems
- Cardiomyopathy
- Diabetes
- Other heart conditions

**Daily Monitoring Tasks**

**Weight Monitoring**
- Same time each day (morning is best)
- After using bathroom, before eating
- Same type of clothing
- Same scale
- Record in log

**Symptom Assessment**
| Symptom | What to Look For |
|---------|------------------|
| Breathing | Worse with activity? Need extra pillows? |
| Swelling | Ankles, legs, abdomen |
| Fatigue | Worse than usual? |
| Appetite | Feeling full? Nausea? |
| Cough | New or worse? Especially at night? |

**Medication Management**

**Common Heart Failure Medications**
- ACE inhibitors or ARBs (protect heart)
- Beta blockers (slow heart rate)
- Diuretics (water pills)
- Aldosterone antagonists
- ARNI (combination medication)

**Key Points**
- Never stop medications without asking doctor
- Take at the same times each day
- Know what each medication does
- Report side effects (dizziness, cough)

**Dietary Management**

**Sodium Restriction**
- Usually 1,500-2,000 mg/day
- Read nutrition labels
- Avoid processed and canned foods
- Cook fresh when possible
- Ask about salt substitutes (may contain potassium)

**Fluid Restriction**
- May be needed if severe heart failure
- Usually 1.5-2 liters/day if restricted
- Count all liquids including soup, ice cream
- Manage thirst (ice chips, hard candy)

**Recognizing Decompensation**

**Warning Zone**
- Weight up 2-3 lbs overnight
- Increased swelling
- More shortness of breath
- Decreased urine output
- Contact healthcare team

**Emergency Zone**
- Weight up 5+ lbs in a week
- Cannot breathe comfortably
- Severe chest pain
- Fainting
- Call 911`,
      keyTerms: [
        {
          term: "ejection fraction",
          definition:
            "The percentage of blood pumped out of the heart with each beat; lower means weaker heart",
        },
        {
          term: "decompensation",
          definition:
            "When heart failure symptoms worsen, often requiring hospitalization",
        },
        {
          term: "diuretic",
          definition:
            "A medication that helps the body get rid of extra fluid through urination",
        },
        {
          term: "edema",
          definition:
            "Swelling caused by fluid buildup, often in the legs and ankles",
        },
      ],
      analogies: [
        "Heart failure medications work together like a team - each one has a different job to help the heart work better.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Heart failure care requires understanding disease pathophysiology, evidence-based self-care support, medication adherence promotion, recognition of decompensation patterns, and coordination with the heart failure care team.",
      explanation: `## Heart Failure Pathophysiology

**Systolic vs. Diastolic Dysfunction**
- HFrEF (EF <40%): impaired contractility
- HFmrEF (EF 40-49%): midrange
- HFpEF (EF ≥50%): impaired relaxation/filling

**Neurohormonal Activation**
- RAAS activation
- Sympathetic activation
- Natriuretic peptides
- Basis for medication therapies

**Congestion vs. Perfusion**
- Wet vs. dry (congestion)
- Warm vs. cold (perfusion)
- Guides treatment approach

## Self-Care Support

**Heart Failure Self-Care Model**
- Maintenance: daily monitoring, adherence
- Management: recognizing and responding to symptoms
- Confidence: belief in ability to manage

**Caregiver Role in Self-Care**
- Supporting daily monitoring routines
- Medication management assistance
- Dietary support and meal preparation
- Activity and rest balance
- Symptom recognition

**Daily Weight Protocol**
1. Same time each morning
2. After voiding, before breakfast
3. Minimal clothing
4. Document and compare
5. Action plan for changes

## Medication Adherence

**Guideline-Directed Medical Therapy**
| Class | Examples | Purpose |
|-------|----------|---------|
| ACEi/ARB/ARNI | Lisinopril, losartan, sacubitril-valsartan | Reduce remodeling |
| Beta blocker | Carvedilol, metoprolol succinate | Reduce workload |
| MRA | Spironolactone, eplerenone | Reduce fluid, protect heart |
| SGLT2i | Dapagliflozin, empagliflozin | Reduce hospitalizations |
| Diuretics | Furosemide, bumetanide | Manage fluid |

**Adherence Challenges**
- Complex regimens
- Side effects
- Cost
- Cognitive impairment
- Depression

**Caregiver Strategies**
- Pill organizers
- Automated reminders
- Medication reconciliation
- Communication with pharmacist
- Reporting side effects

## Dietary Management

**Sodium Targets**
- AHA: <1,500 mg/day recommended
- Practical target: <2,000 mg/day
- Label reading essential
- Cooking modifications

**High-Sodium Foods to Avoid**
- Processed meats
- Canned soups/vegetables
- Restaurant food
- Cheese
- Condiments

**Fluid Management**
- Restriction if indicated (usually advanced HF)
- Typically 1.5-2 L/day
- Include all oral liquids
- Managing thirst

## Device Management

**Implantable Devices**
- ICD: sudden death prevention
- CRT: resynchronization therapy
- Remote monitoring participation
- Recognizing alerts

**Home Monitoring Programs**
- Telemonitoring participation
- Blood pressure monitors
- Pulse oximetry
- Communication with care team`,
      keyTerms: [
        {
          term: "guideline-directed medical therapy",
          definition:
            "Evidence-based medication regimen shown to improve heart failure outcomes (GDMT)",
        },
        {
          term: "ARNI",
          definition:
            "Angiotensin receptor-neprilysin inhibitor (sacubitril-valsartan), cornerstone HF therapy",
        },
        {
          term: "SGLT2 inhibitor",
          definition:
            "Sodium-glucose cotransporter-2 inhibitor, newer HF therapy reducing hospitalizations",
        },
        {
          term: "CRT",
          definition:
            "Cardiac resynchronization therapy, device coordinating heart chamber contractions",
        },
      ],
      clinicalNotes:
        "Ensure caregivers understand weight monitoring protocol and action plan. Verify understanding of medication purposes. Provide specific sodium restriction guidance. Review signs of decompensation and when to call. Connect with heart failure disease management programs.",
    },
    4: {
      level: 4,
      summary:
        "Evidence-based heart failure caregiving integrates self-care support interventions, validated monitoring technologies, medication optimization protocols, and disease management models with demonstrated outcomes.",
      explanation: `## Self-Care Intervention Evidence

**Self-Care Interventions**
- Heart failure self-care behavior improvement
- Education plus behavioral strategies most effective
- Caregiver-inclusive interventions emerging
- Technology-enhanced approaches

**Caregiver-Focused Research**
- Limited but growing evidence base
- Dyadic interventions showing promise
- Burden and quality of life outcomes
- Need for more RCTs

**Education Effectiveness**
- Teach-back method improves retention
- Written materials supplement verbal
- Individualized content more effective
- Ongoing reinforcement needed

## Remote Monitoring Evidence

**Telemonitoring Trials**
- Mixed results in large trials (TEN-HMS, TELE-HF)
- Structured telephone support may reduce mortality
- Integration with clinical response critical
- Emerging digital health approaches

**Weight Monitoring**
- Daily weights recommended
- Weight-based diuretic protocols
- Patient/caregiver engagement essential
- Alert thresholds vary

**Implantable Monitoring**
- CardioMEMS pulmonary artery sensor
- Reduced HF hospitalizations (CHAMPION trial)
- Requires integrated clinical response
- Cost-effectiveness considerations

## Medication Optimization

**GDMT Optimization**
- Quadruple therapy for HFrEF
- Dose titration to target
- Side effect management
- Monitoring requirements

**Clinical Trials Evidence**
- PARADIGM-HF: ARNI benefit
- DAPA-HF, EMPEROR-Reduced: SGLT2i benefit
- EMPHASIS-HF: MRA benefit
- Foundation for recommendations

**Adherence Interventions**
- Multifaceted approaches most effective
- Pharmacist involvement helpful
- Technology (apps, reminders)
- Addressing cost barriers

## Disease Management Models

**Heart Failure Programs**
- Nurse-led disease management
- Multidisciplinary teams
- Transitional care interventions
- Reduced readmissions

**Transitional Care**
- Coleman Care Transitions Intervention
- BOOST (Better Outcomes by Optimizing Safe Transitions)
- Bridge programs
- Caregiver inclusion

**Palliative Care Integration**
- Parallel with disease management
- Symptom-focused care
- Goals of care discussions
- Improved quality of life

## Quality Metrics

**Patient Outcomes**
- Hospital readmission rates
- Quality of life (KCCQ)
- Functional status
- Mortality

**Process Measures**
- GDMT prescription rates
- Patient education completion
- Follow-up within 7 days
- Device optimization

**Caregiver Outcomes**
- Burden measures
- Quality of life
- Self-care knowledge
- Preparedness`,
      keyTerms: [
        {
          term: "KCCQ",
          definition:
            "Kansas City Cardiomyopathy Questionnaire, validated heart failure quality of life measure",
        },
        {
          term: "CardioMEMS",
          definition:
            "Implantable pulmonary artery pressure sensor for remote heart failure monitoring",
        },
        {
          term: "transitional care",
          definition:
            "Coordinated care during movement between healthcare settings, reducing readmissions",
        },
        {
          term: "quadruple therapy",
          definition:
            "Four medication classes for HFrEF: ACEi/ARB/ARNI, beta blocker, MRA, SGLT2i",
        },
        {
          term: "CHAMPION trial",
          definition:
            "Study demonstrating CardioMEMS reduced heart failure hospitalizations",
        },
      ],
      clinicalNotes:
        "Optimize GDMT to target doses. Enroll in disease management programs. Use validated tools for quality of life assessment. Consider remote monitoring technologies. Integrate palliative care for symptom management. Include caregivers in all education.",
    },
    5: {
      level: 5,
      summary:
        "Heart failure caregiving research encompasses advanced therapeutics implications, implementation science for self-care programs, value-based care models, and policy frameworks while addressing disparities and the growing burden of heart failure.",
      explanation: `## Advanced Therapeutics

**Device Therapies**
- LVAD as destination therapy
- Caregiver implications profound
- Training and support needs
- Quality of life considerations

**Heart Transplantation**
- Caregiver support essential
- Post-transplant care demands
- Immunosuppression management
- Long-term outcomes

**Emerging Therapies**
- Gene therapy approaches
- Cell-based therapies
- Novel devices
- Implications for caregiving

## Implementation Science

**Self-Care Program Translation**
- Evidence-based program dissemination
- Implementation barriers identified
- Cultural adaptation needs
- Scalability considerations

**Technology Implementation**
- Remote monitoring adoption
- Digital health platforms
- EHR integration
- Alert fatigue management

**Health System Integration**
- Heart failure clinics
- Disease management programs
- Care coordination models
- Value-based arrangements

## Value-Based Care

**Payment Models**
- Bundled payments
- ACOs and heart failure
- Quality metrics tied to payment
- Readmission penalties

**Cost-Effectiveness**
- Disease management programs
- Remote monitoring technologies
- Advanced therapies
- Caregiver support programs

**Quality Improvement**
- Get With The Guidelines-HF
- Performance measures
- Benchmarking
- Continuous improvement

## Health Equity

**Disparities**
- Access to specialty care
- GDMT prescription rates by race
- Device therapy disparities
- Outcomes differences

**Social Determinants**
- Food security and sodium restriction
- Medication affordability
- Transportation to care
- Health literacy

**Interventions**
- Community health workers
- Patient navigation
- Culturally tailored education
- Policy advocacy

## Caregiver Research

**Burden and Outcomes**
- High caregiver burden documented
- Depression common
- Physical health impacts
- Positive aspects identified

**Intervention Development**
- Dyadic interventions
- Respite programs
- Technology supports
- Support groups

**Research Gaps**
- Limited RCTs for caregivers
- Long-term outcomes
- LVAD caregiver experience
- End-of-life caregiving

## Future Directions

**Research Priorities**
- Caregiver-inclusive trial designs
- Implementation effectiveness
- Technology optimization
- Health equity interventions

**Emerging Approaches**
- AI-powered monitoring
- Precision medicine applications
- Integrated care models
- Home-based programs

**Policy Needs**
- Caregiver recognition
- Leave policies
- Support service coverage
- Research funding`,
      keyTerms: [
        {
          term: "LVAD",
          definition:
            "Left ventricular assist device, mechanical pump for advanced heart failure requiring extensive caregiver involvement",
        },
        {
          term: "destination therapy",
          definition:
            "LVAD implantation as permanent treatment rather than bridge to transplant",
        },
        {
          term: "Get With The Guidelines-HF",
          definition:
            "AHA quality improvement program for heart failure care",
        },
        {
          term: "ACO",
          definition:
            "Accountable Care Organization, value-based care model with implications for heart failure management",
        },
        {
          term: "heart failure readmission",
          definition:
            "Return to hospital within 30 days, quality metric with financial penalties",
        },
      ],
      clinicalNotes: `Systems implementation:
1. Implement evidence-based disease management programs
2. Optimize GDMT using clinical decision support
3. Consider remote monitoring technologies
4. Address health equity in care access
5. Research caregiver interventions
6. Integrate palliative care across continuum`,
    },
  },

  media: [
    {
      id: "heart-failure-monitoring",
      type: "diagram",
      filename: "heart-failure-daily-monitoring.svg",
      title: "Heart Failure Daily Monitoring Guide",
      description: "Visual guide to daily weight and symptom monitoring",
    },
  ],

  citations: [
    {
      id: "aha-hf-guidelines",
      type: "article",
      title: "AHA/ACC/HFSA Heart Failure Guidelines",
      source: "Circulation",
    },
    {
      id: "hfsa-resources",
      type: "website",
      title: "Patient and Caregiver Resources",
      source: "Heart Failure Society of America",
      url: "https://hfsa.org/",
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
      targetId: "caregiver-nutrition-support",
      targetType: "concept",
      relationship: "related",
      label: "Nutrition Support",
    },
  ],

  tags: {
    systems: ["caregiver-support"],
    topics: [
      "heart failure",
      "cardiac",
      "self-care",
      "monitoring",
      "sodium restriction",
    ],
    clinicalRelevance: "critical",
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default caringForHeartFailurePatients;
