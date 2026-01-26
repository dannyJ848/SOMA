/**
 * Swallowing Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const swallowingDisorders: EducationalContent = {
  id: 'rehab-swallowing-disorders',
  type: 'concept',
  name: 'Swallowing Disorders',
  alternateNames: ['Dysphagia', 'Swallowing Therapy', 'Deglutition Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Swallowing disorders (dysphagia) cause difficulty swallowing food and drinks safely, and can be treated with exercises and diet changes.',
      explanation: `Dysphagia is when you have trouble swallowing food or drinks. This can be dangerous because food might go into your lungs instead of your stomach.

**Signs of swallowing problems:**
- Coughing or choking while eating or drinking
- Feeling like food is stuck in your throat
- Pain when swallowing
- Taking a long time to eat meals
- Losing weight without trying
- Getting pneumonia often

**What causes swallowing problems?**
- Stroke
- Brain injury
- Parkinson's disease
- Cancer in the throat or neck
- Aging

**How is it treated?**
1. **Special exercises**: Strengthen the muscles used for swallowing
2. **Diet changes**: Eating softer foods or thicker drinks that are easier to swallow
3. **Position changes**: Sitting up straight or tucking your chin while eating
4. **Safe eating tips**: Taking small bites, eating slowly

**Why treatment is important:**
- Prevents choking
- Prevents food from going into lungs (aspiration)
- Prevents pneumonia
- Helps maintain nutrition
- Makes eating safer and more enjoyable

A speech therapist can test your swallowing and create a treatment plan to help you eat and drink more safely.`,
      keyTerms: [
        { term: 'dysphagia', definition: 'Difficulty swallowing food or drinks' },
        { term: 'aspiration', definition: 'When food or liquid goes into the airway or lungs instead of the stomach' },
        { term: 'swallowing therapist', definition: 'A speech-language pathologist trained to help with swallowing problems' },
        { term: 'modified diet', definition: 'Foods and drinks with changed textures to make swallowing safer' },
      ],
      analogies: [
        'Swallowing is like a carefully choreographed dance - many muscles must work together at the right time. Dysphagia is when some dancers miss their cues.',
        'A modified diet is like training wheels - it provides extra safety while you work on improving your swallowing.',
      ],
      examples: [
        'After a stroke, someone learns to tuck their chin while drinking to prevent choking.',
        'A person with swallowing problems drinks thickened liquids that are easier to control.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dysphagia management involves assessment of swallowing function, diet modification according to standardized frameworks, compensatory strategies, and rehabilitation exercises to protect the airway and maintain nutrition.',
      explanation: `Dysphagia is a disorder of swallowing that can affect any phase of the swallow and lead to aspiration, malnutrition, and reduced quality of life. Speech-language pathologists evaluate and treat dysphagia in various settings.

**Phases of Swallowing:**

| Phase | Location | Function |
|-------|----------|----------|
| Oral Preparatory | Mouth | Chewing, forming food into a ball (bolus) |
| Oral Transit | Mouth | Moving bolus to back of mouth |
| Pharyngeal | Throat | Protecting airway, moving bolus to esophagus |
| Esophageal | Esophagus | Moving bolus to stomach |

**Assessment Methods:**
- Clinical/bedside swallow evaluation
- Videofluoroscopic Swallow Study (VFSS/modified barium swallow)
- Fiberoptic Endoscopic Evaluation of Swallowing (FEES)
- Questionnaires about symptoms and quality of life

**IDDSI Framework (International Dysphagia Diet Standardisation Initiative):**
- Levels 0-4: Drink thickness (thin to extremely thick)
- Levels 3-7: Food texture (liquidized to regular)
- Standardized worldwide

**Compensatory Strategies:**
- Postural adjustments (chin tuck, head turn)
- Sensory enhancement (temperature, taste, texture)
- Swallow maneuvers (effortful swallow, supraglottic swallow)
- Taking smaller bites and slower pace

**Rehabilitation Exercises:**
- Tongue strengthening
- Shaker/head lift exercise
- Mendelsohn maneuver
- Effortful swallow
- Expiratory muscle strength training

**When NPO (Nothing by Mouth):**
- Severe aspiration risk
- Alternative nutrition needed (tube feeding)
- Regular reassessment for improvement`,
      keyTerms: [
        { term: 'bolus', definition: 'A ball of chewed food ready to be swallowed' },
        { term: 'VFSS', definition: 'Videofluoroscopic Swallow Study - X-ray video of swallowing' },
        { term: 'FEES', definition: 'Fiberoptic Endoscopic Evaluation of Swallowing - viewing swallowing with a camera through the nose' },
        { term: 'IDDSI', definition: 'International framework standardizing food and drink textures for dysphagia' },
        { term: 'chin tuck', definition: 'Lowering the chin during swallowing to help protect the airway' },
        { term: 'NPO', definition: 'Nothing by mouth - when a person cannot safely eat or drink' },
      ],
      analogies: [
        'The phases of swallowing are like an assembly line - if one station has problems, the whole process is affected.',
        'IDDSI levels are like a universal language for food texture - the same numbers mean the same thing anywhere in the world.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dysphagia management integrates neurophysiological understanding, instrumental assessment, evidence-based rehabilitation protocols, and diet standardization to optimize swallowing safety and efficiency.',
      explanation: `## Neurophysiology of Swallowing

**Central Pattern Generator:**
- Brainstem swallowing center (NTS, nucleus ambiguus)
- Sequential motor pattern coordination
- Sensory triggers for swallow initiation

**Cranial Nerve Involvement:**
| Nerve | Function |
|-------|----------|
| V (Trigeminal) | Chewing, sensation |
| VII (Facial) | Lip closure, taste |
| IX (Glossopharyngeal) | Pharyngeal sensation, taste |
| X (Vagus) | Laryngeal closure, pharyngeal movement |
| XII (Hypoglossal) | Tongue movement |

**Cortical Modulation:**
- Bilateral representation
- Volitional control
- Motor planning
- Sensory processing

## Instrumental Assessment

**Videofluoroscopic Swallow Study (VFSS):**
- Gold standard for aspiration assessment
- Real-time visualization
- Multiple consistencies tested
- Therapeutic trials possible
- Radiation exposure consideration

**FEES:**
- Portable, repeatable
- Direct visualization
- Secretion management assessment
- Biofeedback potential
- White-out during swallow

**Assessment Scales:**
| Scale | Purpose |
|-------|---------|
| Penetration-Aspiration Scale (PAS) | Severity of airway invasion |
| Dysphagia Outcome and Severity Scale (DOSS) | Functional severity |
| Functional Oral Intake Scale (FOIS) | Diet level |
| SWAL-QOL | Quality of life |

## Evidence-Based Rehabilitation

**Exercise Principles:**
- Overload for strengthening
- Specificity of training
- Skill-based practice
- Intensity considerations

**Strengthening Exercises:**
*Shaker/Head Lift:*
- Targets UES opening
- Isometric and isotonic components
- Strong evidence for specific populations

*Tongue Strengthening:*
- Iowa Oral Performance Instrument (IOPI)
- Lingual resistance training
- Dosage parameters emerging

*Expiratory Muscle Strength Training (EMST):*
- Targets submental musculature
- Resistance device training
- Evidence for multiple populations

**Skill-Based Training:**
*McNeill Dysphagia Therapy Program:*
- Real food/liquid practice
- Systematic progression
- Challenging safe swallowing

**Maneuvers:**
| Maneuver | Target |
|----------|--------|
| Mendelsohn | Prolonged laryngeal elevation |
| Effortful swallow | Increased pressure |
| Supraglottic swallow | Airway protection |
| Super-supraglottic | Enhanced airway closure |

## Diet Modification

**IDDSI Framework:**
- Testing methods standardized
- Levels 0-4: Drinks
- Levels 3-7: Foods
- Universal terminology

**Progression:**
- Start at safest level
- Advance as function improves
- Regular reassessment
- Patient preference consideration`,
      keyTerms: [
        { term: 'central pattern generator', definition: 'Neural network in brainstem coordinating rhythmic swallowing movements' },
        { term: 'penetration', definition: 'Material entering the larynx but remaining above the vocal folds' },
        { term: 'PAS', definition: 'Penetration-Aspiration Scale - 8-point scale rating severity of airway invasion' },
        { term: 'EMST', definition: 'Expiratory Muscle Strength Training - resistance training for expiratory muscles' },
        { term: 'Mendelsohn maneuver', definition: 'Voluntarily prolonging laryngeal elevation during swallow' },
        { term: 'UES', definition: 'Upper Esophageal Sphincter - muscular valve at top of esophagus' },
      ],
      clinicalNotes: 'Silent aspiration (no cough) requires instrumental assessment. Shaker exercise has specific contraindications (cervical spine issues). Diet recommendations should balance safety with quality of life. IDDSI testing methods should be used to verify texture preparation.',
    },
    4: {
      level: 4,
      summary: 'Advanced dysphagia management integrates biomechanical analysis, disease-specific protocols, pharyngeal pressure measurement, and interprofessional care to optimize swallowing outcomes across clinical populations.',
      explanation: `## Advanced Assessment

**Biomechanical Analysis:**
- Hyoid bone movement measurement
- UES opening diameter
- Pharyngeal constriction ratio
- Timing parameters (latency, duration)
- Bolus transit measures

**Pharyngeal Pressure Measurement:**
- High-resolution manometry
- Impedance-manometry
- Pressure topography
- Combined with VFSS (manofluoroscopy)

**Sensory Testing:**
- FEESST (air pulse threshold)
- Taste and temperature
- Oral stereognosis
- Triggering thresholds

## Disease-Specific Management

**Stroke:**
- Acute screening essential
- Recovery trajectory variable
- Hemispheric differences in presentation
- Intensive treatment when appropriate

**Parkinson's Disease:**
*Expiratory Muscle Strength Training:*
- Strong evidence base
- Targets cough and swallow
- Progressive resistance protocol

*Video-Assisted Swallowing Therapy:*
- Biofeedback approach
- Visual feedback during FEES

**Head and Neck Cancer:**
- Pre-treatment baseline
- Prophylactic exercises
- Post-treatment rehabilitation
- Prosthetic management options

**Critically Ill/ICU:**
- Post-extubation dysphagia
- Tracheostomy considerations
- Speaking valve assessment
- Multifactorial causes

## Advanced Treatment Approaches

**Neuromuscular Electrical Stimulation (NMES):**
- Surface electrode application
- Multiple device options
- Combined with exercise
- Mixed evidence base
- Patient selection important

**sEMG Biofeedback:**
- Real-time feedback
- Motor learning enhancement
- Combined with exercises
- Research support growing

**Thermal-Tactile Application:**
- Sensory stimulation
- Cold + touch + pressure
- Trigger enhancement
- Acute stroke application

## Tracheostomy and Ventilator Management

**Factors Affecting Swallowing:**
- Reduced subglottic pressure
- Laryngeal desensitization
- Tethering of larynx
- Cuff status

**Assessment Approach:**
- Cuff deflation trials
- Blue dye test limitations
- FEES preferred
- Speaking valve trials

**Intervention:**
- Cuff deflation during meals
- Speaking valve use
- Weaning coordination
- Team communication

## Aspiration Pneumonia Prevention

**Risk Factors:**
- Dysphagia severity
- Dependent for feeding
- Poor oral hygiene
- Multiple medical comorbidities
- Immunocompromised status

**Prevention Strategies:**
- Oral care protocols
- Appropriate diet modifications
- Upright positioning
- Aspiration precautions
- Staff/caregiver training

## Outcome Measurement

**Functional Outcomes:**
- Diet level progression
- Aspiration incidence
- Pneumonia rates
- Tube feeding dependence

**Quality of Life:**
- SWAL-QOL
- DHI (Dysphagia Handicap Index)
- Eating Assessment Tool (EAT-10)

**Nutritional Outcomes:**
- Weight maintenance
- Albumin levels
- Hydration status`,
      keyTerms: [
        { term: 'high-resolution manometry', definition: 'Multiple sensor measurement of pressures along pharynx and esophagus' },
        { term: 'FEESST', definition: 'Fiberoptic Endoscopic Evaluation with Sensory Testing - adding air pulse stimulation to FEES' },
        { term: 'NMES', definition: 'Neuromuscular Electrical Stimulation - electrical current to activate muscles' },
        { term: 'sEMG', definition: 'Surface Electromyography - measuring muscle electrical activity through skin' },
        { term: 'prophylactic exercise', definition: 'Preventive exercises before treatment to maintain function' },
        { term: 'aspiration pneumonia', definition: 'Lung infection caused by inhaling food, liquid, or secretions' },
      ],
      clinicalNotes: 'NMES has mixed evidence; best outcomes with appropriate patient selection and combined with traditional therapy. Blue dye test has poor sensitivity for aspiration. Oral care is as important as diet modification for pneumonia prevention. Tracheostomy assessment requires team approach.',
    },
    5: {
      level: 5,
      summary: 'Contemporary dysphagia management integrates precision diagnostics, emerging rehabilitation technologies, predictive analytics, and implementation science within healthcare systems to optimize swallowing outcomes and quality of life.',
      explanation: `## Precision Dysphagia Assessment

**Advanced Imaging:**
- Real-time MRI swallowing
- CT for structural assessment
- 3D reconstruction for planning
- Artificial intelligence analysis

**Computational Biomechanics:**
- Finite element modeling
- Pressure-flow relationships
- Patient-specific simulation
- Treatment planning applications

**Biomarkers:**
- Inflammatory markers and aspiration risk
- Nutritional indicators
- Sarcopenia assessment
- Prognostic modeling

## Emerging Technologies

**Robotics:**
- Tongue assist devices
- Swallowing robots for research
- Automated feeding systems
- Rehabilitation robotics

**Pharyngeal Electrical Stimulation:**
- Centrally-acting stimulation
- Nasogastric catheter delivery
- Cortical reorganization target
- Post-stroke application

**Transcranial Stimulation:**
- tDCS over motor cortex
- TMS for swallowing networks
- Combined with behavioral therapy
- Research evidence growing

**Game-Based Rehabilitation:**
- Biofeedback gaming
- Engagement enhancement
- Dose increase potential
- Home program applications

## Artificial Intelligence Applications

**Automated Assessment:**
- Image analysis of VFSS
- Automated PAS scoring
- Machine learning diagnosis
- Outcome prediction

**Clinical Decision Support:**
- Diet recommendation algorithms
- Risk stratification
- Treatment matching
- Monitoring systems

## Implementation Science

**Evidence-Practice Gaps:**
- Screening protocol variability
- Diet modification inconsistency
- Exercise underutilization
- Oral care protocols

**Improvement Strategies:**
- Standardized care bundles
- Clinical pathways
- Staff education
- Outcome monitoring

**Quality Metrics:**
- Aspiration pneumonia rates
- NPO days
- Tube feeding duration
- Patient satisfaction

## Palliative Considerations

**End-of-Life Dysphagia:**
- Comfort feeding approach
- Risk-aware eating decisions
- Patient autonomy respect
- Family support

**Shared Decision-Making:**
- Risk communication
- Value clarification
- Preference documentation
- Goals of care integration

## Population Health

**Screening Programs:**
- Hospital-wide protocols
- Long-term care implementation
- Community awareness
- Early identification

**Health Disparities:**
- Access to instrumental assessment
- Specialist availability
- Insurance coverage
- Cultural considerations

## Research Frontiers

**Mechanism Studies:**
- Neural substrates of recovery
- Exercise mechanisms
- Stimulation effects
- Plasticity windows

**Comparative Effectiveness:**
- Treatment comparisons
- Real-world outcomes
- Cost-effectiveness
- Long-term follow-up

**Personalized Approaches:**
- Phenotype-based treatment
- Biomarker guidance
- Optimal dosing
- Adaptive protocols

## Future Directions

**Technology Integration:**
- Wearable monitoring
- Smart utensils
- Remote assessment
- Telehealth delivery

**Healthcare Evolution:**
- Value-based care models
- Bundled payments
- Quality incentives
- Prevention emphasis`,
      keyTerms: [
        { term: 'pharyngeal electrical stimulation', definition: 'Stimulation via nasogastric catheter to enhance swallowing neural control' },
        { term: 'computational biomechanics', definition: 'Computer modeling of mechanical forces during swallowing' },
        { term: 'comfort feeding', definition: 'Palliative approach prioritizing eating pleasure over aspiration prevention' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass affecting swallowing muscles' },
        { term: 'implementation science', definition: 'Study of methods to integrate evidence into clinical practice' },
        { term: 'shared decision-making', definition: 'Collaborative process incorporating patient preferences in treatment decisions' },
      ],
      clinicalNotes: `Key trends in dysphagia management:
1. Precision assessment enabling individualized treatment
2. Technology expanding rehabilitation options
3. AI showing promise for automated assessment
4. Implementation science addressing practice gaps
5. Palliative approaches respecting patient autonomy
6. Population health focus on screening and prevention
7. Value-based care emphasizing outcomes`,
    },
  },

  media: [
    {
      id: 'swallowing-phases-diagram',
      type: 'diagram',
      filename: 'swallowing-phases-diagram.svg',
      title: 'Phases of Swallowing',
      description: 'Illustration of oral, pharyngeal, and esophageal swallowing phases',
    },
  ],

  citations: [
    {
      id: 'logemann-swallowing',
      type: 'textbook',
      title: 'Evaluation and Treatment of Swallowing Disorders',
      authors: ['Logemann, J.A.'],
      source: 'Pro-Ed',
    },
    {
      id: 'iddsi-framework',
      type: 'website',
      title: 'IDDSI Framework',
      authors: ['IDDSI Board'],
      source: 'IDDSI',
      url: 'https://iddsi.org/framework/',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-speech-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'Speech Therapy Principles' },
    { targetId: 'rehab-stroke-rehabilitation-overview', targetType: 'topic', relationship: 'related', label: 'Stroke Rehabilitation' },
  ],

  tags: {
    systems: ['neurological', 'gastrointestinal'],
    topics: ['rehabilitation', 'dysphagia', 'swallowing', 'speech therapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default swallowingDisorders;
