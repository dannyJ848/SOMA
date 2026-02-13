/**
 * Safety Considerations for Caregivers - Educational Content
 *
 * Comprehensive guidance on maintaining safety for care recipients in the home
 * environment, including fall prevention, medication safety, and emergency
 * preparedness.
 */

import { EducationalContent } from '../types';

export const safetyConsiderations: EducationalContent = {
  id: 'caregiver-safety-considerations',
  type: 'concept',
  name: 'Safety Considerations for Caregivers',
  alternateNames: ['Home Safety', 'Caregiver Safety', 'Patient Safety at Home'],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping the person you care for safe is one of your most important jobs. This means preventing falls, managing medicines safely, and being ready for emergencies.',
      explanation: `**Why Safety Matters**

When someone is sick, weak, or having trouble moving, they can get hurt more easily. Falls are very common and can cause serious injuries. Taking steps to prevent accidents keeps your loved one safer.

**Preventing Falls**

Falls are a major cause of injury, especially for older adults.

**Make the Home Safer**

*Remove Tripping Hazards*
- Pick up things on the floor (rugs, cords, clutter)
- Secure loose carpets or remove them
- Keep pathways clear for walking

*Improve Lighting*
- Use nightlights in hallways and bathroom
- Keep flashlights handy
- Make sure light switches are easy to reach

*Make Daily Activities Safer*
- Use non-slip mats in the bathtub and shower
- Install grab bars near the toilet and shower
- Keep often-used items within easy reach
- Make sure chairs and beds are the right height

**Medication Safety**

*Give Medicines Safely*
- Follow the doctor's instructions exactly
- Keep a list of all medicines
- Use a pill box to organize daily doses
- Don't skip doses or double up

*Store Medicines Properly*
- Keep medicines in a safe, dry place
- Store them where they can be seen but not reached by children
- Check expiration dates regularly

**Being Ready for Emergencies**

*Have Important Information Ready*
- List of all medicines and doses
- Doctor's phone number
- Emergency phone numbers (911, poison control)
- Allergies and medical conditions

*Know What to Do*
- Know the signs of emergency (can't breathe, chest pain, bad fall)
- Practice what you would do in different situations
- Keep a phone nearby at all times

**Remember:** Taking time to make things safe can prevent serious problems later.`,
      keyTerms: [
        { term: 'fall', definition: 'Accidentally dropping down to the ground or floor' },
        { term: 'hazard', definition: 'Something that could cause harm or danger' },
        { term: 'medication', definition: 'Medicine or drugs given to treat an illness or health problem' },
        { term: 'emergency', definition: 'A serious, unexpected situation that needs immediate action' },
      ],
      analogies: [
        'Fall prevention is like putting on a seatbelt - you do it before you need it, and it can protect you from serious harm.',
      ],
      examples: [
        'Maria removes the loose rug from her father\'s hallway and puts a nightlight in the bathroom.',
        'Carlos keeps a list of his mother\'s medicines on the refrigerator with emergency phone numbers.',
        'Linda installs grab bars in her husband\'s shower after he has trouble getting in and out safely.',
      ],
      patientCounselingPoints: [
        'Look at your home through "safety eyes" - what could cause someone to trip or fall?',
        'Keep emergency numbers by every phone and saved in your cellphone',
        'Check your smoke detectors twice a year',
      ],
    },
    2: {
      level: 2,
      summary: 'Home safety requires systematic assessment and modifications to prevent falls, manage medications safely, respond to emergencies, and create a secure environment for someone with health limitations or mobility challenges.',
      explanation: `## Fall Prevention

**Understanding Fall Risk**

Falls are caused by multiple factors:
- Muscle weakness and balance problems
- Medication side effects (dizziness, drowsiness)
- Vision problems
- Home hazards
- Chronic conditions (arthritis, neuropathy, stroke)
- Cognitive impairment

**Comprehensive Home Safety Assessment**

*Entryways and Stairs*
- Secure handrails on both sides of stairs
- Remove clutter and tripping hazards
- Improve lighting at top and bottom
- Consider ramps instead of stairs
- Secure loose carpet edges

*Living Areas*
- Arrange furniture for clear pathways
- Remove throw rugs or secure with non-slip backing
- Secure electrical cords against walls
- Ensure adequate lighting
- Keep frequently used items within reach

*Kitchen*
- Store heavy items at waist level
- Use a sturdy step stool (not chairs)
- Clean spills immediately
- Ensure good lighting
- Keep floors clean and dry

*Bathroom*
- Install grab bars near toilet and in shower
- Use non-slip mats in shower/tub
- Consider a shower chair or bench
- Raised toilet seat if needed
- Nightlight for nighttime bathroom visits

*Bedroom*
- Bed at appropriate height (knees at 90° when seated)
- Nightstand within reach
- Bedside lamp or nightlight
- Phone within reach
- Clear pathways to bathroom

**Mobility and Transfer Safety**

*Safe Transfers*
- Allow time for the person to adjust
- Use proper body mechanics to protect your back
- Encourage use of assistive devices
- Never leave someone unsteady alone

*Walking Aids*
- Ensure proper fit and use of canes, walkers
- Check rubber tips for wear
- Keep devices within reach
- Maintain devices in good repair

## Medication Safety

**Medication Management**

*Keep Track of Medications*
- Maintain current medication list (including OTC and supplements)
- Note purpose of each medication
- Track doses and timing
- Record side effects
- Update list after any changes

*Safe Administration*
- Wash hands before and after
- Check: right person, right medication, right dose, right time, right route
- Use pill organizers to prevent errors
- Note any difficulties swallowing
- Document when given

*Storage and Disposal*
- Store in cool, dry place (not bathroom)
- Keep original containers when possible
- Lock up controlled substances
- Dispose of expired medications properly
- Keep away from children and pets

**Avoiding Medication Errors**

*Common Errors:*
- Skipping doses or double dosing
- Confusing similar-looking pills
- Taking with food when should be empty stomach (or vice versa)
- Stopping medications abruptly
- Drug interactions

*Prevention Strategies:*
- Use a medication schedule or alarm
- Keep a current medication list everywhere
- Ask pharmacist about interactions
- Review medications regularly with doctor
- Use one pharmacy for all prescriptions

## Emergency Preparedness

**Emergency Planning**

*Essential Documents to Keep Accessible*
- List of all medications and doses
- Medical history and conditions
- Allergies (especially to medications)
- Advance directives
- Insurance information
- Contact information for doctors

*Emergency Contact List*
- Primary care physician
- Specialists
- Emergency services (911)
- Poison control (1-800-222-1222)
- Family members or emergency contacts

**Recognizing Emergencies**

Call 911 for:
- Difficulty breathing or shortness of breath
- Chest pain or pressure
- Sudden severe headache
- Sudden weakness or numbness (stroke signs)
- Loss of consciousness
- Severe bleeding
- Seizures
- Falls with significant injury
- Sudden confusion

**First Aid Basics**

*Keep a Well-Stocked First Aid Kit*
- Bandages and gauze
- Antiseptic wipes
- Thermometer
- Tweezers
- Scissors
- Pain reliever
- Emergency blanket
- Emergency contact numbers

## Fire and Electrical Safety

*Smoke and Carbon Monoxide Detectors*
- Install on every level of home
- Test monthly
- Change batteries yearly
- Replace units every 10 years

*Electrical Safety*
- Cover unused outlets
- Check cords for damage
- Don't overload outlets
- Use appliances properly

## Personal Safety for the Caregiver

**Protecting Your Health**
- Learn proper lifting and transfer techniques
- Use assistive equipment when available
- Don't lift more than you can handle
- Get help when needed
- Take care of your own health`,
      keyTerms: [
        { term: 'fall risk factors', definition: 'Conditions or situations that increase the likelihood of falling, such as poor balance, weak muscles, or medications' },
        { term: 'medication reconciliation', definition: 'Creating and maintaining an accurate list of all medications to prevent errors' },
        { term: 'advance directives', definition: 'Legal documents that specify your wishes for medical care if you cannot speak for yourself' },
        { term: 'assistive devices', definition: 'Tools that help people with disabilities, such as walkers, canes, or grab bars' },
        { term: 'body mechanics', definition: 'Proper way of using your body to lift and move things without getting hurt' },
      ],
      analogies: [
        'A medication list is like a map - it helps doctors see the whole picture and avoid dangerous intersections.',
      ],
      examples: [
        'After her mother fell getting out of bed, Maria installs bed rails and keeps a nightlight on all night.',
        'Carlos uses a weekly pill organizer to make sure his father takes the right medicines at the right times.',
        'Linda keeps a "go bag" packed with her husband\'s medications and important documents in case of emergency.',
      ],
      patientCounselingPoints: [
        'Do a home safety walk-through each season - things change',
        'Keep the medication list updated and share it with all doctors',
        'Practice getting help: Can you easily call 911 from every room?',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive home safety requires systematic assessment, environmental modifications, and safety protocols. Evidence-based fall prevention strategies reduce fall risk by 30-40%. Medication safety systems prevent adverse drug events, and emergency preparedness improves outcomes during crises.',
      explanation: `## The Impact of Safety Risks

**Epidemiology of Home Safety Issues**

*Falls:*
- 1 in 4 adults over 65 falls each year
- Falling once doubles the chance of falling again
- Falls are the leading cause of fatal and non-fatal injuries in older adults
- 3 million older adults treated for falls annually
- \$50 billion in annual medical costs related to falls

*Adverse Drug Events:*
- 1.5 million adverse drug events annually
- 350,000 nursing home visits
- \$3.5 billion in additional medical costs
- 40% related to medication errors at home

*Home Emergencies:*
- Unintentional injury is 5th leading cause of death in older adults
- Most emergencies occur in the home
- Preparedness significantly improves outcomes

## Evidence-Based Fall Prevention

**Multifactorial Fall Prevention**

Research shows multifactorial interventions reduce falls by 30-40%:
- Exercise programs (balance, strength)
- Home safety modifications
- Medication review and adjustment
- Vision correction
- Education about risk factors

**Comprehensive Home Assessment**

*Entrance and Exterior*
- Lighting: adequate illumination, motion-sensor lights
- Pathways: even surfaces, handrails on steps
- Access: keyless entry option, wheelchair accessibility if needed

*General Home Safety*
- Flooring: secure carpets, smooth transitions between surfaces
- Clutter: clear walking paths throughout home
- Lighting: bright, non-glare lighting with switches at entrances
- Climate control: safe temperature, adequate ventilation

*Kitchen Safety*
- Work surfaces: appropriate height for user
- Storage: frequently used items at waist level
- Appliances: automatic shut-off, easy to reach
- Flooring: non-slip, easy to clean

*Bathroom Modifications*
- Grab bars: properly anchored into wall studs
- Shower/tub: non-slip surfaces, tub bench or shower chair
- Toilet: raised seat with grab bars
- Lighting: bright, nightlight for safety
- Flooring: non-slip, water drains properly

*Bedroom Safety*
- Bed height: allows feet to touch floor comfortably
- Bed rails: if needed to prevent falls from bed
- Lighting: bedside lamp, nightlight for bathroom path
- Storage: frequently used items within easy reach
- Floor: clear path to bed and bathroom

## Medication Safety Systems

**Medication Reconciliation Process**

1. *Gather*: Collect all current medications
2. *Verify*: Confirm with prescribing providers
3. *Reconcile*: Check for duplicates, interactions, appropriateness
4. *Communicate*: Share updated list with all providers
5. *Maintain*: Keep list current

**High-Risk Medications in Older Adults**

*Beers Criteria for Potentially Inappropriate Medication:*
- Anticholinergics (confusion, falls)
- Benzodiazepines (sedation, falls)
- Antipsychotics (stroke risk, sedation)
- Opioids (sedation, constipation, falls)
- Certain antihistamines, muscle relaxants

*Strategies:*
- Regular medication review with prescriber
- Consider deprescribing when appropriate
- Use lowest effective dose
- Monitor for side effects
- Consider non-pharmacologic alternatives

**Medication Administration Safety**

*The "Five Rights" of Medication Administration:*
1. Right patient
2. Right medication
3. Right dose
4. Right route
5. Right time

*Additional Safety Measures:*
- Right documentation
- Right reason
- Right response (monitoring for effects)

**Technology for Medication Safety**

- Automated pill dispensers with alarms
- Medication reminder apps
- Pharmacy blister packs
- Smart pill bottles
- Telehealth monitoring

## Emergency Preparedness and Response

**Emergency Action Plan**

*Assessment:*
- Identify likely emergencies based on condition
- Know warning signs requiring immediate action
- Understand when to call 911 vs. doctor

*Planning:*
- Develop written emergency plan
- Share plan with family and neighbors
- Practice plan periodically
- Review plan after any emergency

*Resources:*
- Emergency contact list (by every phone)
- Medical information wallet card
- Advance directive copies
- Insurance information
- Medical equipment back-up plans

**Recognizing Deterioration**

*Warning signs of emergency:*
- Sudden change in consciousness or confusion
- Difficulty breathing or choking
- Chest pain or pressure
- Sudden, severe pain
- Uncontrolled bleeding
- Seizure activity
- Sudden inability to move or speak

*When in doubt, call 911*
- It's better to be evaluated and sent home than to delay care
- Emergency services can begin treatment immediately
- They can provide guidance while en route

**First Aid and Emergency Equipment**

*Essential Equipment:*
- First aid kit (regularly checked and restocked)
- Blood pressure monitor
- Thermometer
- Pulse oximeter (if respiratory issues)
- Emergency medications (if prescribed)
- Backup medical equipment

*Training for Caregivers:*
- CPR certification
- First aid training
- Use of emergency equipment
- Heimlich maneuver
- Seizure response

## Adaptive Equipment and Technology

**Mobility Aids**
- Canes: proper fit and use
- Walkers: appropriate type for user's needs
- Wheelchairs: proper fit and maintenance
- Transfer aids: gait belts, transfer boards, mechanical lifts

**Safety Technology**
- Medical alert systems (wearable buttons)
- Fall detection devices
- Video monitoring systems
- GPS tracking for wandering
- Smart home sensors (motion, door, bed)
- Automated medication dispensers

**Environmental Modifications**
- Ramps for wheelchair access
- Stairlifts or chair lifts
- Bathroom modifications
- Kitchen adaptations
- Door widening
- Threshold ramps`,
      keyTerms: [
        { term: 'multifactorial fall prevention', definition: 'Comprehensive approach addressing multiple risk factors simultaneously, proven most effective in reducing falls' },
        { term: 'Beers Criteria', definition: 'List of medications that should generally be avoided in older adults due to risks outweighing benefits' },
        { term: 'medication reconciliation', definition: 'Systematic process of creating and maintaining accurate medication lists across care settings' },
        { term: 'deprescribing', definition: 'Planned process of reducing or stopping medications that are no longer beneficial or may be causing harm' },
        { term: 'activities of daily living (ADLs)', definition: 'Basic self-care tasks: bathing, dressing, eating, toileting, transferring, continence' },
      ],
      clinicalNotes: 'Fall prevention is one of the most cost-effective interventions for older adults. Every dollar spent on fall prevention saves \$10-15 in medical costs. Healthcare providers should assess fall risk at every visit, review medications for fall risk, and refer to physical therapy and occupational therapy for safety assessment.',
      patientCounselingPoints: [
        'Ask your doctor or pharmacist to review all medications annually',
        'Consider a home safety assessment by an occupational therapist',
        'Enroll in a fall prevention exercise program (Tai Chi is evidence-based)',
      ],
    },
    4: {
      level: 4,
      summary: 'Evidence-based safety interventions demonstrate significant reductions in adverse events. Multifactorial fall prevention programs reduce falls by 30-40%. Systematic medication safety approaches prevent adverse drug events. Comprehensive emergency preparedness improves outcomes.',
      explanation: `## Evidence-Based Safety Interventions

**Fall Prevention Research**

*Meta-analyses of fall prevention:*
- Exercise alone: 23% reduction
- Home modification alone: 20-30% reduction
- Multifactorial intervention: 30-40% reduction
- Cost-effectiveness: \$10-15 saved per \$1 invested

*Effective Exercise Components:*
- Balance training: 20% reduction in falls
- Resistance training: muscle strength, power
- Functional training: task-specific practice
- Walking: gait, endurance
- Flexibility: range of motion

*Evidence-Based Programs:*
- Otago Exercise Programme: 35% reduction
- Tai Chi: 30-40% reduction
- Stepping On: 31% reduction
- Matter of Balance: Fear reduction, improved confidence

**Medication Safety Evidence**

*Adverse Drug Event Prevention:*
- Medication reconciliation reduces errors by 50-70%
- Clinical pharmacy services reduce ADEs by 30-50%
- Computerized physician order entry reduces errors by 55%
- Barcode scanning reduces administration errors by 80%

*High-Risk Medication Management:*
- Beers Criteria application reduces inappropriate prescribing
- Deprescribing interventions successful in 50-80% of attempts
- pharmacist-led medication review reduces ED visits by 20-30%

**Home Safety Evidence**

*Environmental Interventions:*
- Professional home assessment reduces falls by 20%
- Bathroom modifications reduce injury falls by 40%
- Improved lighting reduces falls by 15-20%
- Remove throw rugs: 30% reduction in fall risk

## Comprehensive Safety Assessment

**Multidimensional Assessment Tools**

*Timed Up and Go (TUG):*
- Measures: mobility, balance, gait
- <12 seconds: normal
- 12-20 seconds: moderate impairment
- >20 seconds: significant impairment, high fall risk

*Berg Balance Scale:*
- 14-item balance assessment
- <45: high fall risk
- 45-55: moderate fall risk
- >55: low fall risk

*HOME-R (Home Falls and Accidents Screening Tool):*
- Systematic room-by-room assessment
- Identifies specific hazards
- Guides intervention planning

**Medication Risk Assessment**

*Beers Criteria Screening:*
- Identifies PIMs (potentially inappropriate medications)
- Identifies drug-disease interactions
- Guides deprescribing decisions

*START/STOPP Criteria:*
- Screening Tool of Older Person's Prescriptions
- Screening Tool to Alert to Right Treatment
- European alternative to Beers Criteria
- More comprehensive drug-drug interaction assessment

## Advanced Safety Technologies

**Fall Detection and Prevention**

*Wearable Technology:*
- Accelerometer-based fall detection
- Automatic alert systems
- GPS tracking for wandering
- Compliance monitoring

*Home-Based Sensors:*
- Motion detectors
- Bed alarms
- Chair alarms
- Door alarms
- Floor pressure sensors

*Smart Home Integration:*
- Voice-activated assistance
- Automated lighting
- Environmental monitoring
- Activity pattern analysis

**Medication Safety Technology**

*Automated Dispensing:*
- Time-specific medication release
- Adherence monitoring
- Caregiver alerts
- Integration with pharmacy

*Digital Health Tools:*
- Medication reminder apps
- Drug interaction checkers
- Telepharmacy services
- Electronic prescribing

## Special Populations and Considerations

**Dementia and Safety**

*Wandering prevention:*
- Door alarms and locks
- GPS tracking devices
- Safe return programs
- Environmental modifications

*Behavior-related risks:*
- Medication safety (cannot self-administer)
- Eating safety (choking risk)
- Fall risk (poor judgment, impulsivity)
- Home safety (cannot recognize hazards)

**End of Life Safety**

*Pain Management Safety:*
- High-dose opioid safety
- Constipation prevention
- Respiratory depression monitoring
- Safe storage and disposal

*Comfort-focused safety:*
- Preventing pressure injuries
- Maintaining dignity
- Reducing unnecessary interventions
- Family education on what to expect

## Implementation Science for Safety

**Barriers to Safety Implementation**

*System-level barriers:*
- Fragmented healthcare communication
- Limited reimbursement for preventive services
- Lack of standardized protocols
- Time constraints in clinical settings

*Caregiver-level barriers:*
- Underestimation of risk
- Competing priorities
- Cost of modifications
- Resistance to change
- Care recipient resistance

*Care recipient barriers:*
- Denial of risk
- Resistance to aids/equipment
- Fear of losing independence
- Privacy concerns
- Cognitive impairment

**Effective Implementation Strategies**

*Education:*
- Hands-on training with equipment
- Written safety protocols
- Regular safety reviews
- Family meetings for shared responsibility

*Motivational approaches:*
- Emphasize independence maintenance
- Focus on what they can gain (not what they lose)
- Address fears directly
- Share success stories

*Environmental facilitation:*
- Professional home assessment
- Assistance with modifications
- Equipment trials before purchase
- Follow-up for problem-solving`,
      keyTerms: [
        { term: 'TUG test', definition: 'Timed Up and Go test - quick assessment of mobility, balance, and fall risk' },
        { term: 'Berg Balance Scale', definition: '14-item standardized test of static and dynamic balance abilities' },
        { term: 'deprescribing', definition: 'Systematic process of tapering or stopping inappropriate medications under medical supervision' },
        { term: 'adherence monitoring', definition: 'Tracking whether medications are taken as prescribed to identify gaps and potential problems' },
        { term: 'HOME-R', definition: 'Home Falls and Accidents Screening Tool - standardized home safety assessment' },
      ],
      clinicalNotes: `Evidence-based safety protocols:
1. Universal fall risk assessment using TUG or Berg Balance Scale
2. Annual medication review focused on fall risk and Beers Criteria
3. Home safety referral for anyone with fall history or high-risk medications
4. Educate on emergency response and provide written emergency plan
5. Consider technology solutions for high-risk situations`,
    },
    5: {
      level: 5,
      summary: 'Advanced safety research demonstrates effectiveness of multifactorial interventions, with implementation science addressing translation of evidence into practice. Emerging technologies offer new approaches to safety monitoring while ethical considerations and health equity require attention.',
      explanation: `## Advanced Safety Research

**Fall Prevention Evidence Synthesis**

*Cochrane Reviews and Meta-Analyses:*
- Multifactorial interventions: 31% reduction in rate of falls
- Exercise programs: 23% reduction in fall rate
- Home safety assessment: 20-30% reduction
- Cost-effectiveness ratios favor preventive investment

*Precision Fall Prevention:*
- Phenotyping fallers by mechanism and risk factors
- Tailored interventions based on fall mechanism
- Genetic risk factors (APOE, COMT, BDNF)
- Biomarker-guided interventions (vitamin D, inflammation)

**Medication Safety Research**

*Pharmacogenomics in Older Adults:*
- CYP450 polymorphisms affecting drug metabolism
- Warfarin sensitivity (VKORC1, CYP2C9)
- Statin intolerance (SLCO1B1)
- Opioid sensitivity (OPRM1)
- Implications for personalized prescribing

*Deprescribing Research:*
- Systematic approaches to medication reduction
- Electronic health record decision support
- Pharmacist-led deprescribing clinics
- Successful deprescribing of PIMs in 50-80% of attempts

**Implementation Science in Safety**

*RE-AIM Framework Application:*
- Reach: Who receives the safety intervention?
- Efficacy: Does it work under ideal conditions?
- Adoption: Who will implement it in practice?
- Implementation: How consistently is it delivered?
- Maintenance: Can it be sustained long-term?

*Translational Gaps:*
- Only 20% of evidence-based interventions reach practice
- Research-to-practice timeline: 17 years average
- Implementation barriers at multiple system levels

## Technology and Innovation

**Artificial Intelligence in Safety**

*Predictive Analytics:*
- Fall risk prediction using routine data
- Early warning systems for deterioration
- Medication risk stratification
- Readmission risk prediction

*Computer Vision Applications:*
- Automatic fall detection
- Gait analysis
- Wandering detection
- Safety hazard identification

*Natural Language Processing:*
- Medication reconciliation automation
- Emergency call analysis
- Documentation support
- Safety alert prioritization

**Wearable Technology**

*Continuous Monitoring:*
- Heart rate and rhythm monitoring
- Activity levels and patterns
- Sleep quality assessment
- Physiological stress markers
- Fall detection and response

*Challenges:*
- Data interpretation
- False alarms (alarm fatigue)
- Privacy concerns
- Cost and accessibility
- Data integration

## Health Equity in Safety

**Disparities in Safety Risks**

*Socioeconomic factors:*
- Lower-income homes: More environmental hazards
- Housing quality affects safety
- Limited resources for modifications
- Less access to preventive services

*Racial and ethnic disparities:*
- Higher fall rates in some minority populations
- Medication safety literacy differences
- Language barriers affecting understanding
- Cultural factors in accepting interventions

*Rural considerations:*
- Longer emergency response times
- Limited access to safety professionals
- Home modification contractor availability
- Technology connectivity issues

**Culturally Adapted Safety Interventions**

*Principles:*
- Understand cultural values and beliefs
- Adapt communication approaches
- Consider family structure differences
- Respect traditional healing practices
- Involve community leaders

*Examples:*
- Bilingual emergency information
- Culturally relevant diet modifications for medication safety
- Family-centered approaches in collectivist cultures
- Religious considerations for equipment use

## Ethical Considerations

**Autonomy vs. Safety**

*Balancing competing values:*
- Right to take risks vs. preventing harm
- Driving cessation controversies
- Home safety modifications as "controlling"
- Technology as surveillance vs. protection

*Approaches:*
- Shared decision-making about safety measures
- Emphasize maintenance of independence
- Gradual implementation of safety measures
- Respect for dignity and privacy

**Technology Ethics**

*Privacy concerns:*
- Surveillance in the name of safety
- Data ownership and use
- Family monitoring vs. individual autonomy
- Informed consent for monitoring

*Algorithmic bias:*
- Training data representation
- Differential accuracy across populations
- Access to advanced technologies
- Cost and insurance coverage

## Policy and Systems

**Regulatory Considerations**

*Home safety standards:*
- Building codes and accessibility
- Rental property requirements
- Assisted living regulations
- Nursing home safety standards

*Medication safety regulations:*
- Pharmacy dispensing requirements
- Medication error reporting
- Adverse event reporting systems
- Over-the-counter safety regulations

**Reimbursement and Access**

*Medicare coverage:*
- Fall risk assessments (Annual Wellness Visit)
- Physical therapy for fall prevention
- Some home modifications (with prescription)
- Durable medical equipment

*Medicaid coverage:*
- Home and Community-Based Services (HCBS)
- Assistive technology
- Environmental accessibility modifications

*Private insurance:*
- Variable coverage for preventive services
- Durable medical equipment
- Home safety assessments

## Clinical Practice Guidelines

**Comprehensive Safety Protocol**

1. *Universal screening* for safety risks
   - Fall risk at every visit for older adults
   - Medication safety review annually
   - Home safety assessment for high-risk

2. *Risk stratification* for intervention intensity
   - Low: Education and monitoring
   - Moderate: Specific interventions
   - High: Multicomponent program

3. *Evidence-based interventions*
   - Exercise: Balance and strength training
   - Home safety: Professional assessment
   - Medication: Review and deprescribe
   - Education: Emergency preparedness

4. *Technology consideration*
   - Assess needs and preferences
   - Discuss options and costs
   - Provide training and support
   - Monitor effectiveness

5. *Follow-up and monitoring*
   - Reassess fall risk periodically
   - Review medications regularly
   - Adjust to changing needs
   - Monitor intervention effectiveness

6. *Caregiver support*
   - Training on safety procedures
   - Respite to prevent fatigue-related errors
   - Emotional support for safety-related stress
   - Recognition of caregiver burden`,
      keyTerms: [
        { term: 'precision fall prevention', definition: 'Tailoring interventions based on individual risk factors, genetics, and biomarkers' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response, enabling personalized medication selection' },
        { term: 'alarm fatigue', definition: 'Desensitization and delayed response to alarms due to frequent false or insignificant alerts' },
        { term: 'HCBS', definition: 'Home and Community-Based Services - Medicaid programs providing services in home rather than institutional settings' },
      ],
      clinicalNotes: `Systems-level recommendations:
1. Implement fall risk screening in all primary care and specialty settings
2. Develop standardized referral pathways for home safety assessments
3. Integrate medication safety into EHR with decision support
4. Advocate for insurance coverage of preventive safety measures
5. Address health equity in safety intervention delivery
6. Support research on implementation of evidence-based safety practices`,
    },
  },

  media: [
    {
      id: 'home-safety-checklist',
      type: 'diagram',
      filename: 'home-safety-checklist.svg',
      title: 'Home Safety Assessment Checklist',
      description: 'Room-by-room safety assessment guide for caregivers',
    },
  ],

  citations: [
    {
      id: 'fall-prevention-meta-analysis',
      type: 'article',
      title: 'Interventions for Preventing Falls in Older People Living in the Community',
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'beers-criteria',
      type: 'article',
      title: 'American Geriatrics Society Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
      source: 'Journal of the American Geriatrics Society',
    },
    {
      id: 'CDC-falls-prevention',
      type: 'website',
      title: 'Falls Prevention - Older Adult Fall Prevention',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/falls',
    },
  ],

  crossReferences: [
    { targetId: 'caregiver-basics', targetType: 'concept', relationship: 'related', label: 'Caregiver Basics' },
    { targetId: 'caregiver-self-care', targetType: 'concept', relationship: 'related', label: 'Caregiver Self-Care' },
    { targetId: 'medication-management', targetType: 'concept', relationship: 'related', label: 'Medication Management' },
    { targetId: 'safety-at-home', targetType: 'concept', relationship: 'related', label: 'Safety at Home' },
  ],

  tags: {
    systems: ['caregiver-support'],
    topics: ['safety', 'fall prevention', 'medication safety', 'emergency preparedness', 'home safety'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default safetyConsiderations;
