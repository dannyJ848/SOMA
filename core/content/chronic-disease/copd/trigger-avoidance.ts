/**
 * Trigger Avoidance - COPD Management
 */

import { EducationalContent } from '../../types';

export const TRIGGER_AVOIDANCE: EducationalContent = {
  id: 'copd-trigger-avoidance',
  type: 'concept',
  name: 'COPD Trigger Avoidance',
  alternateNames: ['Environmental triggers', 'COPD triggers', 'Avoiding flare-ups'],

  levels: {
    1: {
      level: 1,
      summary: 'Avoiding things that irritate your lungs can help prevent COPD flare-ups and keep you breathing better.',
      explanation: `**Common COPD Triggers:**

*Tobacco Smoke:*
- If you smoke, quitting is the most important thing
- Avoid secondhand smoke too
- Stay away from smoking areas

*Air Quality:*
- Check air quality forecasts
- Stay indoors on high pollution days
- Avoid dusty or smoky areas

*Weather:*
- Cold air can trigger symptoms
- Cover mouth/nose with scarf in cold
- Very hot, humid days can be hard too

*Infections:*
- Wash hands often
- Avoid sick people
- Get flu and pneumonia vaccines

*Household Irritants:*
- Strong cleaning products
- Aerosol sprays
- Perfumes and air fresheners
- Paint fumes

**Tips to Avoid Triggers:**
1. Keep windows closed on poor air quality days
2. Use exhaust fans when cooking
3. Choose unscented products
4. Run air conditioner or air purifier
5. Avoid outdoor exercise when air quality is poor`,
      keyTerms: [
        { term: 'trigger', definition: 'Something that makes COPD symptoms worse' },
        { term: 'flare-up', definition: 'When COPD symptoms suddenly get worse' },
        { term: 'air quality index', definition: 'A number that tells you how clean or polluted the air is' },
      ],
      analogies: ['Your lungs are like sensitive sponges - they absorb irritants from the air, so keeping the air clean helps them work better.'],
      examples: ['Maria checks the air quality app every morning. On bad air days, she stays inside and runs her air purifier.'],
    },
    2: {
      level: 2,
      summary: 'Environmental trigger avoidance reduces COPD exacerbations by minimizing exposure to respiratory irritants including tobacco smoke, air pollution, infections, and occupational hazards.',
      explanation: `**Categories of Triggers:**

| Category | Examples | Risk |
|----------|----------|------|
| Tobacco | Active/passive smoking | Highest |
| Air pollution | Particulates, ozone | High |
| Infections | Viral, bacterial | High |
| Weather | Cold, humidity | Moderate |
| Indoor | Dust, mold, chemicals | Moderate |
| Occupational | Fumes, dust | Variable |

**Smoking Cessation:**
- Single most important intervention
- Slows FEV1 decline
- Pharmacotherapy + counseling most effective
- Secondhand smoke exposure also harmful

**Air Quality Management:**
- Monitor AQI daily
- Limit outdoor activity when AQI >100
- Use HEPA air purifiers
- Proper home ventilation

**Infection Prevention:**
- Annual influenza vaccine
- Pneumococcal vaccines (PCV13, PPSV23)
- COVID-19 vaccination
- Hand hygiene
- Avoid crowded spaces during respiratory illness season

**Indoor Environment:**
- Remove carpeting if possible
- Control humidity (30-50%)
- Avoid aerosol products
- Use exhaust ventilation`,
      keyTerms: [
        { term: 'exacerbation', definition: 'Acute worsening of COPD symptoms requiring treatment change' },
        { term: 'AQI', definition: 'Air Quality Index; scale measuring air pollution levels' },
        { term: 'HEPA', definition: 'High-efficiency particulate air filter removing 99.97% of particles' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive trigger management integrates evidence-based smoking cessation, environmental control measures, infection prevention, and occupational health strategies to reduce COPD exacerbations.',
      explanation: `**Evidence for Trigger Avoidance:**

*Smoking Cessation:*
- Only intervention proven to modify disease progression
- Reduces exacerbation rate by 25-40%
- Improves symptoms regardless of disease severity
- Combination therapy (varenicline + NRT + counseling) most effective

*Air Pollution:*
| Pollutant | Effect | Intervention |
|-----------|--------|--------------|
| PM2.5 | Systemic inflammation | Indoor filtration, activity modification |
| Ozone | Airway inflammation | AQI monitoring |
| NO2 | Oxidative stress | Traffic avoidance |

*Vaccination:*
| Vaccine | Indication | Benefit |
|---------|------------|---------|
| Influenza | Annual, all COPD | Reduces exacerbations, hospitalization |
| PPSV23 | Age ≥65 or comorbidities | Reduces pneumonia |
| PCV13/PCV15/PCV20 | Per guidelines | Reduces invasive disease |
| COVID-19 | All COPD | Reduces severe illness |

**Occupational Considerations:**
- Assess occupational exposures
- Respiratory protection programs
- Job modification if needed
- Workers' compensation considerations`,
      keyTerms: [
        { term: 'PM2.5', definition: 'Particulate matter <2.5 microns; penetrates deep into lungs' },
        { term: 'occupational COPD', definition: 'COPD caused or worsened by workplace exposures' },
      ],
      clinicalNotes: 'Smoking cessation is paramount - address at every visit. Vaccinations significantly reduce exacerbation risk. Indoor air quality interventions have limited but positive evidence. Consider occupational exposure in all patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced trigger management integrates environmental epidemiology, precision exposure assessment, and behavioral science to optimize personalized risk reduction strategies.',
      explanation: `**Exposure-Response Relationships:**

*Air Pollution:*
PM2.5 Exposure
     ↓
Airway Epithelial Injury
     ↓
Inflammatory Response (IL-6, IL-8)
     ↓
Oxidative Stress
     ↓
Exacerbation Risk ↑10-20% per 10 μg/m³ increase

*Temperature Effects:*
- Cold air: Bronchospasm, increased mucus viscosity
- Heat: Increased ozone, dehydration
- Optimal: Moderate temperature, low humidity

**Precision Exposure Assessment:**

*Personal Monitoring:*
- Wearable air quality sensors
- GPS-linked exposure mapping
- Activity-based exposure estimation

*Biomarkers:*
- Exhaled breath condensate
- Urinary metabolites
- Blood inflammatory markers

**Behavioral Interventions:**

*Smoking Cessation Optimization:*
| Intervention | NNT | Effect Size |
|--------------|-----|-------------|
| Brief advice | 40 | Small |
| NRT | 15 | Moderate |
| Varenicline | 8 | Large |
| Combined pharmacotherapy + counseling | 5 | Largest |

*Adherence to Avoidance:*
- Motivational interviewing
- Environmental modification support
- Technology-enabled reminders
- Social support`,
      keyTerms: [
        { term: 'NNT', definition: 'Number needed to treat; number of patients treated for one to benefit' },
        { term: 'personal exposure monitoring', definition: 'Individual-level measurement of environmental exposures' },
      ],
      clinicalNotes: 'Combined pharmacotherapy with behavioral support has highest smoking cessation success. Personal air quality monitoring may improve adherence to avoidance behaviors. Consider socioeconomic barriers to environmental modification.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art trigger management leverages exposome science, precision environmental health, and digital interventions for personalized COPD risk reduction.',
      explanation: `**Exposome Approach:**

*Multi-Level Exposure Assessment:*
External General Environment
- Air quality
- Climate
- Built environment
         ↓
External Specific Exposures
- Occupation
- Diet
- Medications
- Infections
         ↓
Internal Environment
- Metabolites
- Proteins
- Epigenetic changes
         ↓
Individual COPD Phenotype

**Digital Environmental Health:**

*Smart Monitoring Systems:*
- IoT air quality sensors
- Predictive AQI modeling
- Personalized alert systems
- Integration with health platforms

*AI Applications:*
- Exposure pattern recognition
- Risk prediction models
- Personalized recommendations
- Behavioral intervention optimization

**Precision Prevention:**

*Genetic Susceptibility:*
- Air pollution-gene interactions
- Pharmacogenomics of smoking cessation
- Personalized risk communication

*Future Directions:*
- Real-time exposure feedback
- Adaptive behavioral interventions
- Environmental justice integration
- Climate change adaptation`,
      keyTerms: [
        { term: 'exposome', definition: 'Totality of environmental exposures from conception onwards' },
        { term: 'environmental justice', definition: 'Fair distribution of environmental benefits and burdens' },
      ],
      clinicalNotes: 'Exposome science reveals complexity of environmental influences on COPD. Climate change will alter trigger patterns. Digital health enables personalized exposure management. Address environmental justice disparities in pollution exposure.',
    },
  },

  media: [],
  citations: [{ id: 'gold-copd', type: 'article', title: 'GOLD COPD Report', source: 'GOLD' }],
  crossReferences: [{ targetId: 'copd-action-plans', targetType: 'topic', relationship: 'related', label: 'Action Plans' }],
  tags: { systems: ['respiratory'], topics: ['COPD', 'prevention'], keywords: ['COPD triggers', 'smoking cessation', 'air quality'], clinicalRelevance: 'high' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
