/**
 * Exercise Recommendations
 *
 * Comprehensive education on physical activity guidelines for health.
 */

import { EducationalContent } from '../../types';

export const EXERCISE_RECOMMENDATIONS: EducationalContent = {
  id: 'concept-exercise-recommendations',
  type: 'concept',
  name: 'Exercise Recommendations',
  alternateNames: ['Physical activity guidelines', 'Fitness recommendations', 'Exercise prescription'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular physical activity is one of the best things you can do for your health, helping prevent heart disease, diabetes, and many other conditions.',
      explanation: `Exercise provides tremendous health benefits at any age.

**How Much Exercise:**
- 150 minutes per week of moderate activity (brisk walking)
- OR 75 minutes per week of vigorous activity (running)
- PLUS strength training 2+ days per week

**Benefits:**
- Reduces heart disease and stroke risk
- Helps prevent diabetes
- Strengthens bones and muscles
- Improves mood and mental health
- Helps maintain healthy weight
- Reduces some cancer risks

**Types of Exercise:**
- Aerobic (walking, swimming, cycling)
- Strength training (weights, resistance bands)
- Flexibility (stretching, yoga)
- Balance (especially important for older adults)`,
      keyTerms: [
        { term: 'aerobic exercise', definition: 'Activities that increase your heart rate and breathing' },
        { term: 'strength training', definition: 'Exercises using resistance to build muscle' },
        { term: 'moderate intensity', definition: 'Activity level where you can talk but not sing' },
      ],
      analogies: ['Exercise is like medicine, but with no prescription needed and amazing side effects.'],
      examples: ['Walking 30 minutes five days a week meets the guidelines for moderate exercise.'],
    },
    2: {
      level: 2,
      summary: 'Physical activity guidelines recommend 150-300 minutes of moderate or 75-150 minutes of vigorous aerobic activity weekly, plus muscle-strengthening activities, with demonstrated benefits for cardiovascular, metabolic, and mental health.',
      explanation: `**Physical Activity Guidelines (US 2018):**

*Adults:*
- 150-300 min/week moderate intensity, OR
- 75-150 min/week vigorous intensity, OR
- Equivalent combination
- Muscle-strengthening ≥2 days/week
- More activity provides additional benefits

*Older Adults:*
- Same as adults
- Add balance training
- Multicomponent physical activity

**Intensity Definitions:**
- Light: <3 METs (walking slowly)
- Moderate: 3-6 METs (brisk walking)
- Vigorous: >6 METs (running, swimming laps)

**Health Benefits by Outcome:**
- All-cause mortality: 30-40% reduction
- CVD: 20-30% risk reduction
- Type 2 diabetes: 30-40% risk reduction
- Depression: Comparable to medication
- Some cancers: 10-20% risk reduction`,
      keyTerms: [
        { term: 'METs', definition: 'Metabolic equivalents; measure of exercise intensity' },
        { term: 'vigorous intensity', definition: 'Activity where you cannot say more than a few words without pausing for breath' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Exercise prescription integrates frequency, intensity, time, and type (FITT) principles, with dose-response relationships demonstrating benefits begin with any activity above sedentary behavior.',
      explanation: `**Exercise Prescription (FITT):**

*Frequency:* Most days, or daily
*Intensity:* Moderate to vigorous
*Time:* 30-60 minutes (can accumulate)
*Type:* Aerobic + resistance

**Dose-Response:**
- Linear relationship with mortality reduction
- Greatest benefit: Inactive to some activity
- Additional benefit with more activity
- No upper limit where benefit stops

**Special Populations:**

*Cardiovascular Disease:*
- Cardiac rehabilitation
- Supervised initially
- Gradual progression

*Diabetes:*
- Combined aerobic + resistance optimal
- Improves insulin sensitivity
- Blood glucose management

*Older Adults:*
- Balance and fall prevention
- Maintain muscle mass (sarcopenia prevention)
- Functional independence

*Pregnancy:*
- Moderate activity safe and beneficial
- Avoid contact sports, supine after first trimester`,
      keyTerms: [
        { term: 'FITT', definition: 'Exercise prescription framework: Frequency, Intensity, Time, Type' },
        { term: 'cardiac rehabilitation', definition: 'Supervised exercise program for heart disease patients' },
        { term: 'sarcopenia', definition: 'Age-related muscle loss' },
      ],
      analogies: [],
      clinicalNotes: 'Any activity better than none. Prescribe exercise like medication. Consider cardiac rehab referral. Address barriers individually.',
    },
    4: {
      level: 4,
      summary: 'Optimizing physical activity promotion requires addressing behavioral determinants, leveraging technology, and understanding molecular mechanisms underlying exercise benefits.',
      explanation: `**Behavioral Strategies:**
- Motivational interviewing
- Goal setting
- Self-monitoring
- Social support
- Environmental modification

**Technology Integration:**
- Wearable activity trackers
- Smartphone apps
- Telehealth exercise programs
- Virtual reality exercise

**Molecular Mechanisms:**
- AMPK activation
- PGC-1alpha and mitochondrial biogenesis
- Myokine release (IL-6, irisin)
- Anti-inflammatory effects
- Epigenetic modifications

**Sedentary Behavior:**
- Distinct from lack of exercise
- Prolonged sitting harmful independent of exercise
- Break up prolonged sitting
- Standing desks, walking meetings`,
      keyTerms: [
        { term: 'myokines', definition: 'Signaling molecules released by muscle during exercise with systemic effects' },
        { term: 'sedentary behavior', definition: 'Prolonged sitting or low energy expenditure activities' },
        { term: 'PGC-1alpha', definition: 'Master regulator of mitochondrial biogenesis induced by exercise' },
      ],
      analogies: [],
      clinicalNotes: 'Address sedentary behavior separately from exercise. Use wearables to enhance engagement. Understand mechanisms to explain benefits. Apply behavioral science.',
    },
    5: {
      level: 5,
      summary: 'Precision exercise medicine integrates genetic and molecular responses, develops personalized recommendations, and addresses global physical inactivity through policy and environmental interventions.',
      explanation: `**Precision Approaches:**
- Exercise genomics
- Individual response variability
- Personalized intensity zones
- Recovery optimization

**Research Frontiers:**
- HERITAGE Family Study: Genetic response variability
- Molecular transducers of physical activity
- Exercise mimetics
- High-intensity interval training (HIIT) mechanisms

**Global Inactivity Pandemic:**
- 1 in 4 adults insufficiently active
- Increasing sedentary occupations
- Built environment factors
- Global Action Plan on Physical Activity

**Policy Interventions:**
- Urban design for walkability
- Active transport infrastructure
- School physical education
- Workplace wellness programs`,
      keyTerms: [
        { term: 'HERITAGE study', definition: 'Study demonstrating genetic variation in exercise response' },
        { term: 'exercise mimetics', definition: 'Compounds that reproduce some effects of exercise without physical activity' },
        { term: 'HIIT', definition: 'High-intensity interval training; alternating intense and recovery periods' },
      ],
      analogies: [],
      clinicalNotes: 'Individual response variation is real. Advocate for built environment changes. HIIT time-efficient option. Precision approaches emerging.',
    },
  },

  media: [],
  citations: [
    {
      id: 'pa-guidelines',
      type: 'website',
      title: 'Physical Activity Guidelines for Americans',
      source: 'US Department of Health and Human Services',
      url: 'https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular', 'musculoskeletal'],
    topics: ['preventive medicine', 'lifestyle medicine', 'exercise'],
    keywords: ['exercise', 'physical activity', 'fitness', 'aerobic', 'strength training'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
