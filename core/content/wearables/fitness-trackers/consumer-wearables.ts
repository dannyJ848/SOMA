/**
 * Consumer Wearables - Wearables/Fitness Trackers
 *
 * Popular consumer fitness and activity tracking devices
 * and their features, accuracy, and applications.
 */

import { EducationalContent } from '../../types';

export const consumerWearables: EducationalContent = {
  id: 'wearables-consumer-wearables',
  type: 'concept',
  name: 'Consumer Wearables',
  alternateNames: ['Fitness Trackers', 'Activity Trackers', 'Consumer Health Devices'],

  levels: {
    1: {
      level: 1,
      summary: 'Consumer wearables are popular electronic devices like smartwatches and fitness bands that track your activity, heart rate, sleep, and other health information throughout the day.',
      explanation: `## What Are Consumer Wearables?

Consumer wearables are electronic devices you can wear on your body that track information about your health and activity. They are like having a tiny computer with sensors that watches over you all day long!

**Popular Types of Consumer Wearables:**

1. **Smartwatches:**
   - Apple Watch, Samsung Galaxy Watch
   - Look like regular watches but do much more
   - Show time, track fitness, receive messages
   - Can make calls and run apps

2. **Fitness Bands:**
   - Fitbit, Garmin, Xiaomi bands
   - Simple bands worn on wrist
   - Mainly track steps and activity
   - Often cheaper than smartwatches

3. **Smart Rings:**
   - Oura Ring, Motiv Ring
   - Worn on finger like regular ring
   - Track sleep and activity
   - Less noticeable than watches

4. **Clip-On Trackers:**
   - Small devices that clip to clothes
   - Track steps and basic activity
   - Can be put in pocket too

**What They Track:**
- Steps taken each day
- Distance walked or run
- Calories burned
- Heart rate
- Sleep time and quality
- Floors climbed
- Active minutes

**Why People Use Them:**
- See how active they are
- Set and reach fitness goals
- Track progress over time
- Get reminders to move
- Compete with friends
- Improve sleep habits

**How They Work:**
- Have tiny sensors inside
- Connect to phone via Bluetooth
- Use apps to show information
- Charge with special cables

**Who Uses Them:**
- People trying to get healthier
- Athletes tracking training
- Older adults monitoring health
- Anyone curious about their activity

Consumer wearables make it fun and easy to learn about your body and stay healthy!`,
      keyTerms: [
        { term: 'wearable', definition: 'Electronic device you can wear on your body' },
        { term: 'smartwatch', definition: 'Watch that can connect to the internet and run apps' },
        { term: 'fitness band', definition: 'Simple wristband that tracks activity' },
        { term: 'sensor', definition: 'Part of device that detects and measures things' },
      ],
      analogies: [
        'A consumer wearable is like a personal coach on your wrist, cheering you on throughout the day.',
        'It functions as a health diary that writes itself, recording your activities automatically.',
        'Think of it as a tiny laboratory following you around, measuring your body\'s activities.',
      ],
      examples: [
        'An Apple Watch reminding someone to stand up each hour during work',
        'A Fitbit counting steps and celebrating when someone reaches 10,000 steps',
        'An Oura Ring tracking sleep stages and giving a readiness score each morning',
        'A Garmin watch tracking a runner\'s route, pace, and heart rate during a workout',
      ],
      patientCounselingPoints: [
        'Choose a device that tracks the health metrics most important to you',
        'Wear the device consistently for the most accurate trends',
        'Do not obsess over daily numbers - look for patterns over weeks',
        'Use the data to motivate positive changes, not to stress yourself',
      ],
    },
    2: {
      level: 2,
      summary: 'Consumer wearables are electronic devices worn on the body that use sensors to track activity, physiological metrics, and behaviors, with common forms including smartwatches, fitness bands, smart rings, and clip-on devices, varying in features, accuracy, and price points to serve different user needs and health goals.',
      explanation: `## Consumer Wearables

Consumer wearables represent a rapidly growing category of personal electronics designed for continuous wear and health monitoring. These devices use various sensors to collect biometric and activity data, providing users with insights into their health and fitness.

**Device Categories:**

| Category | Examples | Form Factor | Key Features |
|----------|----------|-------------|--------------|
| Smartwatches | Apple Watch, Samsung Galaxy Watch | Wrist-worn | Apps, notifications, cellular |
| Fitness Bands | Fitbit Charge, Garmin Vivosmart | Wrist-worn | Activity tracking, basic smart features |
| Smart Rings | Oura Ring, Motiv Ring | Finger-worn | Sleep tracking, discreet |
| Clip-On | Fitbit Zip, Garmin Vivofit | Clip/pocket | Basic step counting |
| Smart Clothing | Athos, Sensoria | Integrated sensors | Muscle activity, form analysis |
| Hearables | Apple AirPods Pro, Jabra Elite | Ear-worn | Heart rate, fall detection |

**Common Sensors:**

- **Accelerometer:** Measures movement and orientation
- **Gyroscope:** Detects rotation and angular velocity
- **Photoplethysmography (PPG):** Optical heart rate and SpO2
- **GPS:** Location and distance tracking
- **Barometer:** Altitude and floor counting
- **Bioimpedance:** Body composition analysis
- **Temperature:** Skin and ambient temperature

**Key Metrics Tracked:**

**Activity Metrics:**
- Steps, distance, active minutes
- Calories burned (estimated)
- Exercise recognition and logging
- Sedentary time and stand reminders

**Physiological Metrics:**
- Resting and active heart rate
- Heart rate variability (HRV)
- Blood oxygen saturation (SpO2)
- Sleep stages and duration
- Respiratory rate
- Skin temperature

**Smart Features:**
- Smartphone notifications
- Contactless payments
- Music control
- Voice assistants
- Emergency SOS
- Fall detection

**Market Segments:**

**Entry Level ($50-150):**
- Basic activity tracking
- Step counting, sleep tracking
- Simple display
- Limited smart features

**Mid-Range ($150-400):**
- Advanced health sensors
- GPS tracking
- Smartphone integration
- Music storage

**Premium ($400+):**
- Comprehensive health monitoring
- Cellular connectivity
- ECG, blood oxygen
- Premium materials and design`,
      keyTerms: [
        { term: 'PPG', definition: 'Photoplethysmography - optical sensor for heart rate and blood oxygen' },
        { term: 'HRV', definition: 'Heart Rate Variability - variation in time between heartbeats' },
        { term: 'SpO2', definition: 'Peripheral oxygen saturation - blood oxygen level' },
        { term: 'bioimpedance', definition: 'Measurement of electrical resistance through body' },
        { term: 'ECG', definition: 'Electrocardiogram - recording of heart electrical activity' },
        { term: 'form factor', definition: 'Physical design and shape of a device' },
      ],
      analogies: [
        'Consumer wearables are like having a personal biometric laboratory on your body at all times.',
        'They function as quantified self-instruments, measuring the previously unmeasured aspects of daily life.',
        'Think of them as fitness accountability partners that never sleep and always keep track.',
      ],
      examples: [
        'Apple Watch Series 8 with temperature sensing for menstrual cycle tracking',
        'Fitbit Sense with stress management tools and EDA sensor',
        'Garmin Fenix for outdoor athletes with advanced GPS and mapping',
        'Whoop 4.0 focused on recovery and strain for athletic optimization',
      ],
    },
    3: {
      level: 3,
      summary: 'Consumer wearables employ sensor arrays including accelerometers, PPG, GPS, and bioimpedance to track activity and physiological metrics with varying accuracy, available across price tiers from basic activity trackers to premium smartwatches with medical-grade features like ECG and SpO2, serving diverse use cases from general wellness to athletic performance optimization.',
      explanation: `## Consumer Wearables: Technical and Clinical Considerations

Consumer wearables utilize sophisticated sensor technology and algorithms to estimate health metrics, with significant variation in accuracy, validation, and clinical utility across device categories and manufacturers.

**Sensor Technology Deep Dive:**

**Accelerometry:**
- **3-axis MEMS accelerometers** detect motion in three dimensions
- Step counting algorithms using peak detection and pattern recognition
- Activity classification (walking, running, cycling, swimming)
- Sleep staging through movement patterns
- **Accuracy:** Generally good for steps; varies for activity classification

**Photoplethysmography (PPG):**
- **Green LED** for heart rate (optimal absorption by hemoglobin)
- **Red and infrared LEDs** for SpO2 measurement
- Optical sensors detect blood volume changes
- Signal processing algorithms filter motion artifact
- **Accuracy:** Heart rate good at rest, challenging during high-intensity exercise

**Global Positioning System (GPS):**
- Distance, pace, and route tracking
- Connection to phone GPS vs built-in GPS
- Battery impact significant with GPS use
- **Accuracy:** Generally within 1-3% for distance

**Bioimpedance:**
- Electrical resistance measurement for body composition
- Hydration and muscle quality estimation
- Requires proper skin contact and calibration
- **Accuracy:** Variable; trending more reliable than absolute values

**Accuracy and Validation:**

| Metric | Typical Accuracy | Clinical Grade? |
|--------|-----------------|-----------------|
| Steps | +/- 5-10% | Generally acceptable |
| Resting HR | +/- 5 bpm | Approaching clinical |
| Active HR | +/- 10-20 bpm | Limited |
| Sleep Duration | +/- 30-60 min | Moderate |
| Sleep Stages | 60-70% vs polysomnography | Limited |
| SpO2 | +/- 2-4% | Moderate |
| Calories | +/- 20-40% | Poor |

**Clinical Considerations:**

**FDA Clearance Status:**
- Most consumer wearables NOT FDA-cleared medical devices
- Select features have 510(k) clearance (Apple Watch irregular rhythm, ECG)
- Wellness vs medical claims distinction important
- Liability implications for clinical decision-making

**Integration with Healthcare:**
- Patient-generated health data
- Remote patient monitoring programs
- Clinical trial endpoints
- Population health surveillance

**Battery and Usability:**

**Battery Life Ranges:**
- Smartwatches: 1-2 days (Apple Watch), 3-5 days (Samsung)
- Fitness bands: 5-14 days
- Smart rings: 3-7 days
- Whoop: 5 days (with battery pack charging)

**Factors Affecting Battery:**
- GPS usage
- Always-on display
- Heart rate monitoring frequency
- Notification volume
- Temperature sensing`,
      keyTerms: [
        { term: 'MEMS', definition: 'Micro-Electro-Mechanical Systems - miniature sensors' },
        { term: 'motion artifact', definition: 'Signal noise from movement during measurement' },
        { term: 'polysomnography', definition: 'Sleep study in laboratory - gold standard for sleep measurement' },
        { term: 'patient-generated health data', definition: 'Health data created, recorded, or gathered by patients' },
        { term: '510(k)', definition: 'FDA clearance pathway for medical devices' },
        { term: 'EDA', definition: 'Electrodermal Activity - skin conductance measure of stress' },
      ],
    },
    4: {
      level: 4,
      summary: 'Consumer wearables employ sensor fusion and algorithmic processing to estimate health metrics with variable accuracy validated against clinical gold standards, with FDA-cleared features available in select devices, integration opportunities for healthcare through patient-generated health data, and important distinctions between wellness and medical claims affecting clinical utility and liability considerations.',
      explanation: `## Consumer Wearables: Clinical Integration and Evidence

Consumer wearables have transitioned from fitness accessories to potential clinical tools, with increasing evidence base, regulatory clearances, and healthcare integration opportunities, while maintaining important limitations for clinical decision-making.

**FDA Regulatory Status:**

**Cleared Features:**
- **Apple Watch:**
  * Irregular rhythm notification (510(k) K183657)
  * ECG app (De Novo DEN180044)
  * Atrial fibrillation history feature
  
- **Samsung Galaxy Watch:**
  * ECG and blood pressure (select models)
  * Irregular heart rhythm notification

- **Fitbit:**
  * AFib detection via PPG

- **Withings:**
  * ECG, blood pressure monitoring
  * Sleep apnea detection (select devices)

**Clinical Validation Studies:**

**Atrial Fibrillation Detection:**
- **Apple Heart Study (n=419,297):** 0.52% notification rate, 71% PPV for AFib
- **Fitbit Heart Study (n=455,699):** 98% positive predictive value for AFib detection
- **HUAWEI Heart Study:** AI-based AFib detection with 92% accuracy

**Activity and Health Outcomes:**
- Step count correlated with cardiovascular outcomes
- Sleep duration associations with metabolic health
- Activity tracker use associated with increased physical activity
- Limited randomized trial evidence for clinical outcomes

**Healthcare Integration Models:**

**Patient-Generated Health Data (PGHD):**
- EHR integration through FHIR APIs
- Apple Health Records integration
- Google Fit APIs for developers
- Data sharing with healthcare providers

**Remote Patient Monitoring:**
- Consumer devices in RPM programs
- Data quality and validation concerns
- Reimbursement considerations (CPT codes)
- Clinical decision support integration

**Clinical Trial Applications:**
- Digital endpoints for trials
- Continuous monitoring between visits
- Real-world evidence generation
- Patient engagement and retention

**Accuracy and Limitations:**

**Factors Affecting Accuracy:**
- Skin tone (PPG performance varies)
- Device fit and positioning
- Motion and activity level
- Environmental conditions
- Individual physiological variation

**Clinical Utility Considerations:**
- Trending vs absolute values
- Individual baseline establishment
- False positive and negative rates
- Actionability of data
- Provider burden and workflow

**Evidence Gaps:**
- Long-term health outcome data
- Cost-effectiveness studies
- Health equity implications
- Sustainability of behavior change
- Clinical workflow integration`,
      keyTerms: [
        { term: 'PGHD', definition: 'Patient-Generated Health Data - health data created by patients' },
        { term: 'PPV', definition: 'Positive Predictive Value - probability condition present given positive test' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - health data standard' },
        { term: 'digital endpoint', definition: 'Outcome measure derived from digital health technology' },
        { term: 'real-world evidence', definition: 'Clinical evidence from real-world data sources' },
        { term: 'behavior change', definition: 'Sustained modification of health-related behaviors' },
      ],
      clinicalNotes: `When considering consumer wearables for clinical purposes, distinguish between FDA-cleared features and general wellness tracking. The Apple Watch irregular rhythm notification and ECG app have clinical validation and regulatory clearance; step counts and sleep stages do not. Use consumer wearable data for trending and engagement rather than diagnostic decisions. Be aware of accuracy limitations including skin tone effects on PPG sensors and motion artifact during exercise. When patients share wearable data, interpret with appropriate clinical judgment recognizing that consumer devices are not medical-grade equipment. Consider health equity implications - not all patients can afford premium devices with advanced features. Integrating patient-generated health data into clinical workflows requires EHR compatibility and appropriate documentation protocols.`,
    },
    5: {
      level: 5,
      summary: 'Consumer wearables represent a maturing technology category with select FDA-cleared features, growing clinical evidence base particularly for cardiovascular monitoring, increasing integration with healthcare through patient-generated health data and remote monitoring programs, while facing challenges in accuracy validation, health equity, clinical workflow integration, and the need for sustainable reimbursement models as the field evolves toward medical-grade capabilities and personalized health optimization.',
      explanation: `## Consumer Wearables: Advanced Topics and Future Directions

Consumer wearables are evolving rapidly with advancing sensor technology, artificial intelligence integration, and healthcare convergence, presenting both opportunities and challenges for clinical medicine, public health, and personal wellness optimization.

**Emerging Sensor Technologies:**

**Non-Invasive Glucose Monitoring:**
- Optical glucose sensing (challenges with accuracy)
- Bioimpedance spectroscopy
- Interstitial fluid monitoring
- Regulatory pathway complex

**Continuous Blood Pressure:**
- Pulse transit time estimation
- Cuffless monitoring
- Calibration challenges
- Hypertension management potential

**Advanced Biomarkers:**
- Cortisol (stress) monitoring
- Hydration status
- Lactate monitoring
- Core body temperature

**Artificial Intelligence Integration:**

**On-Device AI:**
- Fall detection algorithms
- Atrial fibrillation detection
- Exercise form analysis
- Health anomaly detection

**Cloud-Based Analytics:**
- Population health insights
- Personalized recommendations
- Predictive health alerts
- Digital biomarker development

**Machine Learning Applications:**
- Sleep apnea screening
- Arrhythmia classification
- Activity pattern recognition
- Health risk prediction

**Clinical and Research Applications:**

**Digital Biomarkers:**
- Novel endpoints for clinical trials
- Disease progression monitoring
- Treatment response assessment
- Population health surveillance

**Precision Health:**
- Individual baseline establishment
- Personalized health recommendations
- N-of-1 trials and experimentation
- Preventive intervention targeting

**Public Health:**
- Syndromic surveillance (pandemic detection)
- Activity and mobility patterns
- Environmental exposure tracking
- Population-level sleep patterns

**Regulatory and Policy Evolution:**

**FDA Digital Health Center:**
- Pre-certification program
- Software as Medical Device (SaMD) framework
- Real-world performance monitoring
- Patient safety surveillance

**Reimbursement Development:**
- CPT codes for remote monitoring
- Digital therapeutic reimbursement
- Value-based care integration
- Health equity considerations

**International Harmonization:**
- European MDR for wearables
- Global regulatory convergence
- Privacy framework alignment
- Safety standard development

**Challenges and Considerations:**

**Health Equity:**
- Cost barriers to access
- Digital literacy requirements
- Algorithmic bias (skin tone, demographics)
- Representation in validation studies

**Data Governance:**
- Commercial use of health data
- Cross-border data flows
- Patient control and ownership
- Secondary use for research

**Clinical Integration:**
- Provider workflow burden
- Alert fatigue concerns
- Liability considerations
- Standard of care evolution

**Sustainability:**
- Device lifecycle and e-waste
- Battery technology
- Repair and longevity
- Cost-effectiveness

**Future Directions:**

- Invisible, ambient monitoring
- Implantable and ingestible sensors
- Brain-computer interfaces
- Digital twins for personalized health
- Preventive health optimization
- Aging in place support`,
      keyTerms: [
        { term: 'interstitial fluid', definition: 'Fluid between cells - contains glucose correlating with blood glucose' },
        { term: 'pulse transit time', definition: 'Time for arterial pulse to travel between two points; correlates with BP' },
        { term: 'N-of-1 trial', definition: 'Single-patient randomized controlled trial' },
        { term: 'syndromic surveillance', definition: 'Monitoring health data for early outbreak detection' },
        { term: 'digital twin', definition: 'Virtual model of individual for health simulation and prediction' },
        { term: 'MDR', definition: 'Medical Device Regulation - European framework' },
      ],
      clinicalNotes: `The future of consumer wearables lies in convergence with medical-grade monitoring while maintaining user engagement and accessibility. When advising patients, help them understand the distinction between wellness features and clinically validated functions. Monitor FDA clearances as the regulatory landscape evolves. Advocate for health equity in wearable access and algorithm validation across diverse populations. The integration of AI in wearables will increasingly support clinical decision-making but requires attention to bias, explainability, and human oversight. Consider the environmental impact of device obsolescence and advocate for sustainable design. As wearables generate richer health data, patient education on privacy and data sharing becomes increasingly important. The ultimate goal is using wearable technology to enable proactive, personalized, and preventive healthcare that extends beyond the clinic into daily life.`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['digital-health'],
    keywords: ['wearables', 'fitness-trackers', 'consumer-devices', 'activity-tracking', 'health-monitoring'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
