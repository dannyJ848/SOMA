/**
 * Comfort Care Measures - Educational Content
 *
 * Comprehensive content on comfort-focused care approaches
 * that prioritize quality of life and dignity.
 */

import { EducationalContent } from '../../types';

export const comfortCareMeasures: EducationalContent = {
  id: 'concept-comfort-care',
  type: 'concept',
  name: 'Comfort Care Measures',
  alternateNames: ['Comfort-Focused Care', 'Supportive Care', 'Symptom-Focused Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Comfort care means focusing on helping you feel as good as possible and treating symptoms like pain, instead of trying to cure your illness.',
      explanation: `**What Is Comfort Care?**

Comfort care is a way of taking care of someone that focuses on:
- Keeping you comfortable
- Managing pain and other symptoms
- Helping you feel peaceful
- Supporting your emotional needs
- Respecting your dignity

**When Is Comfort Care Used?**

Comfort care can be used:
- Along with treatments to cure illness
- When treatments to cure are no longer working
- When someone decides they do not want more aggressive treatments
- During the last days or weeks of life

**What Does Comfort Care Include?**

**Managing Physical Symptoms**
- Medicine for pain
- Help with breathing problems
- Treatment for nausea
- Skin care to prevent sores
- Mouth care
- Help with eating and drinking

**Emotional and Spiritual Support**
- Someone to talk to about fears and worries
- Help with anxiety or sadness
- Chaplain or spiritual support if wanted
- Time with family and loved ones

**Practical Care**
- Gentle bathing and grooming
- Comfortable positioning
- Soft music or favorite sounds
- Favorite blankets or items from home

**What Comfort Care Is NOT**

Comfort care does NOT mean:
- Giving up
- Being abandoned
- No more medical care
- Speeding up death

It DOES mean:
- Focusing on what matters most to you
- Keeping you comfortable and peaceful
- Supporting your family
- Honoring your wishes

**Where Can You Get Comfort Care?**

- At home
- In a hospital
- In a nursing home
- In a hospice facility`,
      keyTerms: [
        { term: 'comfort care', definition: 'Medical care that focuses on making you comfortable rather than curing illness' },
        { term: 'symptom management', definition: 'Treating problems like pain, nausea, or trouble breathing' },
        { term: 'dignity', definition: 'Being treated with respect and honor' },
      ],
      analogies: [
        'Comfort care is like a warm blanket on a cold night - it does not change the weather, but it makes you feel much better.',
        'Think of comfort care like being in a cozy room with your favorite things - the focus is on making you as comfortable and peaceful as possible.',
      ],
      examples: [
        'Someone with advanced cancer might receive medicine for pain and nausea, along with visits from a music therapist who plays their favorite songs.',
        'A person in their final days might have their family around them, receive medicine to prevent any discomfort, and have gentle touches and soft music.',
      ],
    },
    2: {
      level: 2,
      summary: 'Comfort care encompasses comprehensive symptom management, psychosocial support, and attention to quality of life, whether as part of curative treatment or as the primary focus of care.',
      explanation: `## Understanding Comfort Care

### Definition and Philosophy

Comfort care is an approach that:
- Prioritizes relief of suffering and symptoms
- Addresses physical, emotional, social, and spiritual needs
- Focuses on quality of life
- Can be provided at any stage of illness
- May be the sole focus or combined with curative treatment

### Components of Comfort Care

**Physical Comfort**

*Pain Management*
- Regular assessment of pain
- Appropriate medications (opioids if needed)
- Non-drug approaches (heat, positioning, massage)
- Goal: Patient-defined comfort level

*Other Symptom Management*
- Dyspnea (shortness of breath)
- Nausea and vomiting
- Constipation
- Fatigue
- Skin integrity
- Dry mouth
- Secretions

**Emotional Support**
- Acknowledgment of feelings
- Treatment of anxiety and depression
- Counseling and therapy
- Presence and listening
- Creating peaceful environment

**Spiritual Care**
- Chaplaincy services
- Honoring religious practices
- Existential support
- Life review and meaning-making
- Prayer, meditation, rituals as desired

**Social Support**
- Family involvement
- Visiting hours flexibility
- Communication facilitation
- Legacy work
- Practical assistance

### Settings for Comfort Care

| Setting | Characteristics |
|---------|----------------|
| Home | Familiar environment, family caregivers, hospice support |
| Hospital | Acute management, transition planning, palliative care teams |
| Nursing Home | Long-term care, may include hospice |
| Hospice Facility | Dedicated comfort care, homelike environment |

### When to Focus on Comfort Care

**Transition Indicators**
- Disease not responding to treatment
- Patient preference for comfort over cure
- Poor prognosis
- Declining functional status
- Repeated hospitalizations

**Goals of Care Shift**
- From curative to comfort
- Discussions with patient/family
- May be gradual or sudden
- Revisited as situation changes

### Common Interventions in Comfort Care

**Medications**
- Opioids for pain and dyspnea
- Anxiolytics for anxiety
- Antiemetics for nausea
- Antipyretics for fever
- Medications for secretions

**Non-Pharmacological**
- Positioning and mobility
- Temperature regulation
- Music and art therapy
- Touch and massage
- Environmental modifications

### What Comfort Care Does NOT Mean

- Does not hasten death
- Does not mean abandonment
- Still involves active medical care
- Can include some treatments (antibiotics, transfusions)
- Focus is on benefit to patient`,
      keyTerms: [
        { term: 'symptom burden', definition: 'The total impact of symptoms on a person\'s quality of life' },
        { term: 'psychosocial support', definition: 'Addressing emotional, psychological, and social needs' },
        { term: 'holistic care', definition: 'Treating the whole person - body, mind, and spirit' },
        { term: 'hospice facility', definition: 'A specialized place dedicated to comfort care at end of life' },
      ],
      analogies: [
        'Comfort care is like adjusting all the settings in a room - temperature, lighting, sound - to create the most comfortable environment possible.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comfort care requires systematic symptom assessment, evidence-based interventions, interdisciplinary coordination, and attention to the dying process when the patient is in the final phase of life.',
      explanation: `## Comfort Care: Clinical Framework

### Systematic Approach to Comfort

**Assessment Tools**
- Edmonton Symptom Assessment System (ESAS)
- Palliative Performance Scale (PPS)
- Visual Analog Scales for pain
- Regular reassessment schedules

**Symptom Management Principles**
1. Anticipate symptoms before they occur
2. Treat prophylactically when possible
3. Use around-the-clock dosing, not just PRN
4. Have breakthrough medication available
5. Reassess and adjust regularly

### Symptom-Specific Interventions

**Pain**
- Opioids as mainstay for moderate-severe pain
- Adjuvants for neuropathic pain
- Interventional options for refractory pain
- Non-pharmacological approaches

**Dyspnea**
- Opioids are first-line
- Fan to face (airflow)
- Oxygen (if hypoxic or symptom relief)
- Positioning (upright, side-lying)
- Anxiolytics for anxiety component

**Nausea/Vomiting**
- Identify cause (constipation, medications, disease)
- Antiemetics based on mechanism
- Avoid offensive odors
- Small, frequent meals if eating

**Delirium**
- Identify and treat reversible causes
- Environmental modifications
- Reorientation
- Haloperidol or alternatives
- Benzodiazepines if agitation

**Secretions ("Death Rattle")**
- Anticholinergics (glycopyrrolate, scopolamine)
- Positioning
- Family education that patient not distressed
- Gentle suctioning only if needed

### Care in the Final Hours/Days

**Recognizing Approaching Death**
- Decreased responsiveness
- Mottling of extremities
- Changes in breathing pattern
- Decreased urine output
- Decreased oral intake

**Comfort Measures at End of Life**
- Discontinue non-comfort medications
- Continue symptom-focused medications
- Mouth care
- Eye care
- Repositioning for comfort
- Skin care
- Presence and communication

**Medication Routes**
- Oral medications may no longer be feasible
- Sublingual/buccal
- Subcutaneous
- Rectal
- IV if already in place
- Transdermal

### Interdisciplinary Comfort Care

**Team Members**
- Physician/NP/PA
- Nurses
- Social work
- Chaplaincy
- Music/art therapy
- Volunteers
- Pharmacist
- Physical/occupational therapy

**Care Coordination**
- Regular team meetings
- Care plan updates
- Family communication
- Documentation standards

### Documentation

**Essential Elements**
- Symptom assessment findings
- Interventions provided
- Response to interventions
- Goals of care status
- Family involvement
- Plan for ongoing comfort`,
      keyTerms: [
        { term: 'ESAS', definition: 'Edmonton Symptom Assessment System - validated tool for symptom measurement' },
        { term: 'death rattle', definition: 'Noisy breathing from secretions in unconscious patients near death' },
        { term: 'PRN', definition: 'Pro re nata - medication given as needed, not on schedule' },
        { term: 'breakthrough medication', definition: 'Extra dose of medication for symptoms that occur despite scheduled doses' },
      ],
      clinicalNotes: 'Anticipate symptoms and treat prophylactically. In final hours, focus on comfort - discontinue unnecessary interventions. Death rattle bothers family more than patient - educate family. Have frank discussions about what to expect. Ensure adequate medication is available at home for comfort care.',
    },
    4: {
      level: 4,
      summary: 'Advanced comfort care practice involves managing refractory symptoms, complex decision-making at end of life, ethical considerations including palliative sedation, and leading interdisciplinary teams in comfort-focused care.',
      explanation: `## Advanced Comfort Care Considerations

### Refractory Symptom Management

**Definition**
Refractory symptoms: Symptoms not adequately controlled despite aggressive, appropriate treatment

**Approach to Refractory Symptoms**
1. Verify symptom is truly refractory
2. Consult palliative medicine specialists
3. Consider interventional approaches
4. Discuss palliative sedation if appropriate

**Refractory Pain**
- Opioid rotation
- Ketamine infusion
- Intrathecal/epidural analgesia
- Nerve blocks
- Palliative radiation

**Refractory Dyspnea**
- High-dose opioids
- Benzodiazepines
- Palliative sedation in final hours

**Refractory Delirium**
- Rule out reversible causes
- Optimize environment
- Antipsychotics
- Benzodiazepines (cautiously)
- Palliative sedation if necessary

### Palliative Sedation

**Definition**
Intentional reduction of awareness for refractory symptoms

**Indications**
- Refractory symptoms at end of life
- Exhaustion of other options
- Patient (or surrogate) consent
- Imminent death expected

**Types**
- Proportional sedation: Titrated to symptom relief
- Continuous deep sedation: Unconsciousness until death

**Medications**
- Midazolam (most common)
- Propofol
- Phenobarbital
- Combination regimens

**Ethical Framework**
- Intent is symptom relief, not hastening death
- Principle of double effect applies
- Proportionality (least sedation necessary)
- Last resort after other options exhausted
- Distinct from euthanasia

### Complex Decision-Making

**Artificial Nutrition/Hydration at End of Life**
- Evidence does not support improved comfort
- May worsen edema, secretions
- Discuss with family about symbolic meaning
- Honor cultural/religious preferences
- May provide minimal hydration for mouth comfort

**Antibiotic Use in Comfort Care**
- May treat for symptom relief (UTI causing dysuria)
- Generally avoid for life-prolonging purpose
- Consider goals of care
- Time-limited trials possible

**When to Go to Hospital**
- Usually avoid if comfort-focused
- May be appropriate for symptom crisis
- Hospice GIP or crisis care
- Clear plan for what will and won't be done

### Prognostication in Comfort Care

**Indicators of Hours to Days**
- Palliative Performance Scale < 20%
- Bed-bound
- No oral intake
- Mottling, cooling
- Cheyne-Stokes breathing

**Communicating Prognosis**
- "I think we are looking at hours to days"
- Allow for uncertainty
- Support family preparation
- Facilitate presence of loved ones

### Family Support During Active Dying

**Education**
- What to expect (physical changes)
- What patient experiences
- How to provide comfort
- When death is imminent

**Presence**
- Encourage presence at bedside
- Permit physical contact
- Support talking/reading to patient
- Hearing is preserved

**After Death**
- Allow time with body
- Bereavement support
- Follow-up from palliative/hospice team

### Quality and Outcomes

**Quality Metrics**
- Symptom scores (ESAS)
- Time in severe symptoms
- Use of opioids and other symptom medications
- Family satisfaction
- Peace at death

**Audit and Improvement**
- Chart review for symptom management
- Family surveys
- Staff debriefing
- Best practice implementation`,
      keyTerms: [
        { term: 'palliative sedation', definition: 'Intentional reduction of awareness to relieve refractory symptoms at end of life' },
        { term: 'principle of double effect', definition: 'Ethical principle allowing foreseeable harm if intent is to relieve suffering' },
        { term: 'proportional sedation', definition: 'Sedation titrated to level needed for symptom relief' },
        { term: 'Cheyne-Stokes breathing', definition: 'Alternating deep breathing and apnea pattern common near death' },
      ],
      clinicalNotes: 'Palliative sedation is ethical when properly indicated and consented. Artificial hydration/nutrition at end of life generally adds burden without benefit. Family education about the dying process reduces distress. Ensure staff support - caring for dying patients is emotionally demanding.',
    },
    5: {
      level: 5,
      summary: 'Expert-level comfort care encompasses health system design for comfort-focused care, policy advocacy, ethical scholarship on dying and suffering, research contributions, and leadership in palliative care delivery models.',
      explanation: `## Expert Practice and System Leadership

### Health System Design for Comfort Care

**Program Development**
- Inpatient comfort care protocols
- Outpatient palliative care services
- Hospice partnerships
- SNF comfort care support
- Home-based palliative care

**Staffing and Workforce**
- Palliative care teams
- Hospitalist partnership
- Nursing competencies
- Chaplaincy integration
- Social work capacity

**EMR Integration**
- Comfort care order sets
- Symptom documentation
- Goals of care visibility
- Care transitions support

### Quality and Safety

**Comfort Care Quality Measures**
- Symptom assessment frequency
- Pain control (time in moderate-severe pain)
- Dyspnea management
- Psychosocial/spiritual care
- Family involvement

**Patient Safety in Comfort Care**
- Medication safety (opioids)
- Fall prevention (sedation)
- Skin integrity
- Communication at transitions

**High-Reliability Comfort Care**
- Standard protocols
- Staff competency verification
- Regular audits
- Best practice implementation

### Research and Evidence

**Key Research Areas**
- Optimal symptom management regimens
- Palliative sedation outcomes
- Family bereavement outcomes
- Quality of dying measures
- Cost-effectiveness of comfort care

**Outcome Measures**
- Quality of Dying and Death (QODD)
- FAMCARE Scale
- Bereaved Family Survey
- Good Death Inventory

### Ethical Scholarship

**Debates in Comfort Care**

*Double Effect*
- Intent vs. foreseeable consequences
- Proportionality considerations
- Application to palliative sedation

*Euthanasia Distinctions*
- Allowing natural death vs. hastening death
- Palliative sedation vs. euthanasia
- Intention and causation

*Suffering and Meaning*
- Total pain concept
- Existential suffering
- Spiritual distress
- Role of clinicians in addressing suffering

### Policy and Advocacy

**Access to Comfort Care**
- Disparities in access
- Rural and underserved populations
- Regulatory barriers (opioids)
- Payment models

**End-of-Life Policy**
- Medical aid in dying debates
- Palliative care requirements
- Hospice eligibility reform
- Quality measures and reporting

### Education and Workforce Development

**Training Programs**
- Comfort care competencies
- Communication skills
- Symptom management mastery
- Interdisciplinary teamwork

**Competency Domains**
- Clinical care of the dying
- Symptom management
- Communication
- Ethical decision-making
- Team leadership

### Emerging Approaches

**Technology in Comfort Care**
- Remote monitoring for symptom management
- Telehealth for palliative care
- AI-assisted prognostication
- Virtual reality for comfort

**Community-Based Models**
- Home-based palliative care
- Primary palliative care
- Community health worker integration
- Volunteer programs

**Specialized Populations**
- Pediatric comfort care
- Dementia end-of-life care
- Heart failure and other non-cancer
- ICU end-of-life care

### Personal and Team Sustainability

**Clinician Well-Being**
- Recognizing moral distress
- Self-care practices
- Team support structures
- Meaning and purpose

**Organizational Support**
- Debriefing after deaths
- Staff support programs
- Adequate staffing
- Culture of care for caregivers`,
      keyTerms: [
        { term: 'QODD', definition: 'Quality of Dying and Death - outcome measure for end-of-life care quality' },
        { term: 'total pain', definition: 'Concept that suffering encompasses physical, psychological, social, and spiritual dimensions' },
        { term: 'moral distress', definition: 'Distress from knowing right action but being unable to take it' },
        { term: 'primary palliative care', definition: 'Basic palliative care skills provided by all clinicians' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Design and lead comfort care programs
2. Develop quality metrics and improvement initiatives
3. Contribute to ethical scholarship on dying and suffering
4. Advocate for access to quality comfort care
5. Train next generation of clinicians
6. Address disparities in end-of-life care
7. Support clinician well-being and sustainability
8. Research to advance evidence base`,
    },
  },

  media: [
    {
      id: 'comfort-care-components',
      type: 'diagram',
      filename: 'comfort-care-components.svg',
      title: 'Components of Comfort Care',
      description: 'Visual overview of physical, emotional, spiritual, and social comfort care',
    },
  ],

  citations: [
    {
      id: 'cherny-palliative-sedation',
      type: 'article',
      title: 'ESMO Clinical Practice Guidelines for Palliative Sedation',
      authors: ['Cherny, N.I.', 'Radbruch, L.'],
      source: 'European Society for Medical Oncology',
      url: 'https://www.esmo.org/',
    },
    {
      id: 'nhpco-comfort-care',
      type: 'website',
      title: 'Comfort Care Resources',
      source: 'National Hospice and Palliative Care Organization',
      url: 'https://www.nhpco.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
    { targetId: 'symptom-pain', targetType: 'concept', relationship: 'related', label: 'Pain Management' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
    { targetId: 'concept-family-support', targetType: 'concept', relationship: 'related', label: 'Family Support and Grief' },
  ],

  tags: {
    systems: ['palliative-care'],
    topics: ['comfort care', 'symptom management', 'end-of-life', 'dying'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default comfortCareMeasures;
