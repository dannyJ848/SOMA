import { EducationalContent } from '../../types';

export const wellChildVisits: EducationalContent = {
  id: 'pediatrics-well-child-visits',
  type: 'concept',
  name: 'Well-Child Visits Schedule',
  alternateNames: ['Well-Baby Checkups', 'Pediatric Health Maintenance', 'Well-Child Exams'],

  levels: {
    1: {
      level: 1,
      summary: 'Well-child visits are regular checkups with the doctor to make sure your child is growing, developing, and staying healthy.',
      explanation: `Well-child visits (also called checkups or well-baby visits) are appointments to make sure your child is healthy, even when they\'re not sick. These visits are super important!

**What Happens at a Well-Child Visit:**

1. **Growth Measurements**
   - Height (or length for babies)
   - Weight
   - Head circumference (for babies)
   - These are plotted on growth charts to track healthy growth

2. **Physical Exam**
   - Doctor checks heart, lungs, ears, eyes, tummy, and more
   - Looking for anything that needs attention

3. **Development Check**
   - Can your child do things expected for their age?
   - Sitting, walking, talking, social skills

4. **Vaccinations**
   - Shots that protect against serious diseases
   - Given at specific ages

5. **Questions and Guidance**
   - Parents can ask questions
   - Doctor gives advice on feeding, sleep, safety, behavior

**When Are Well-Child Visits?**

*First Year (lots of growth happens!):*
- 2-3 days after birth (newborn check)
- 2 weeks
- 1 month
- 2 months
- 4 months
- 6 months
- 9 months
- 12 months

*After First Year:*
- 15 months
- 18 months
- 24 months (2 years)
- 30 months (2.5 years)
- 3 years
- Then once a year until adulthood

**Why Are They Important?**
- Catch problems early when they're easier to treat
- Make sure your child is growing and developing well
- Keep vaccinations up to date
- Get answers to your parenting questions`,
      keyTerms: [
        { term: 'well-child visit', definition: 'A checkup for a healthy child to make sure they\'re growing and developing normally' },
        { term: 'growth chart', definition: 'A graph that shows how a child\'s size compares to other children the same age' },
        { term: 'vaccination', definition: 'A shot that protects against diseases by training your immune system' },
        { term: 'percentile', definition: 'Where your child falls compared to 100 other children (50th percentile = average)' },
      ],
      analogies: [
        'Well-child visits are like taking your car for regular oil changes - you don\'t wait until it breaks down to check on it!',
        'Growth charts are like following a recipe - there\'s a range of normal, not just one "right" way.',
      ],
      examples: [
        'At a 6-month checkup, the doctor will check that baby can sit with support and is starting solid foods.',
        'At a 4-year visit, the doctor checks that the child can draw a circle and speak in sentences.',
      ],
    },
    2: {
      level: 2,
      summary: 'Well-child visits follow the AAP Bright Futures schedule, incorporating age-specific screenings, immunizations, developmental surveillance, and anticipatory guidance to optimize health outcomes.',
      explanation: `Well-child visits provide comprehensive preventive care following standardized guidelines.

**AAP/Bright Futures Visit Schedule:**

*Infancy (0-12 months) - 7 visits:*
- Newborn (3-5 days)
- 1 month
- 2 months
- 4 months
- 6 months
- 9 months
- 12 months

*Early Childhood (1-4 years) - 6 visits:*
- 15 months
- 18 months
- 24 months
- 30 months
- 3 years
- 4 years

*Middle Childhood (5-10 years) - Annual visits*

*Adolescence (11-21 years) - Annual visits*

**Components of Each Visit:**

**1. Growth Assessment**
- Weight, length/height, head circumference (until 2 years)
- BMI (starting at age 2)
- Plotted on WHO (0-2 years) or CDC (2+ years) growth charts
- Concerning patterns: crossing percentile lines, BMI >85th or <5th

**2. Physical Examination**
- Complete head-to-toe exam
- Age-specific focus areas:
  * Newborn: Fontanelles, hip clicks (dysplasia), red reflex
  * Infant: Heart murmurs, cryptorchidism
  * Toddler: Dental health, gait
  * School-age: Scoliosis, vision, blood pressure
  * Adolescent: Pubertal development (Tanner staging)

**3. Developmental/Behavioral Assessment**
- Developmental surveillance at every visit
- Formal screening at 9, 18, 30 months
- Autism screening at 18 and 24 months

**4. Age-Specific Screenings**

| Age | Screening |
|-----|-----------|
| Newborn | Hearing, metabolic screen, bilirubin, CCHD |
| 9-12 mo | Lead (if risk factors), anemia |
| 12-24 mo | Lead (if risk factors) |
| 3-5 years | Vision, hearing, blood pressure |
| 9-11 years | Lipid panel (once) |
| Adolescence | Depression (PHQ-A), STI risk, substance use |

**5. Immunizations**
- Follow CDC/ACIP schedule
- Combination vaccines minimize visits

**6. Anticipatory Guidance Topics**
- Nutrition and feeding
- Sleep
- Safety (car seats, water safety, poison prevention)
- Oral health
- Development and behavior
- Family relationships`,
      keyTerms: [
        { term: 'Bright Futures', definition: 'AAP-published guidelines for pediatric preventive care visits' },
        { term: 'anticipatory guidance', definition: 'Counseling about what to expect and how to prevent problems in upcoming developmental stages' },
        { term: 'developmental surveillance', definition: 'Ongoing monitoring of child development at each visit' },
        { term: 'Tanner staging', definition: 'System for rating pubertal development on a scale of 1-5' },
      ],
      analogies: [
        'Well-child visits are like preventive maintenance for a child\'s health - scheduled checkpoints to ensure everything is on track.',
        'Growth curves are like a road map - the path matters more than any single point.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive well-child care integrates evidence-based screening protocols, risk stratification, and culturally sensitive anticipatory guidance while addressing social determinants of health and utilizing validated assessment tools.',
      explanation: `Well-child care encompasses systematic surveillance and screening integrated with family-centered guidance.

**Evidence-Based Screening Recommendations:**

**Universal Screenings by Age:**

*Newborn Period:*
- Newborn metabolic screen (state-specific panels, ~30-50 conditions)
- Universal hearing screen (OAE or ABR)
- Critical congenital heart disease screen (pulse oximetry)
- Bilirubin (transcutaneous or serum)

*Infancy/Toddler:*
- Lead screening: Universal at 12 and 24 months (or risk-based per state)
- Anemia: Screen at 12 months (hemoglobin or hematocrit)
- Developmental screening: Validated tool at 9, 18, 30 months
- Autism screening: M-CHAT-R/F at 18 and 24 months

*Early Childhood:*
- Vision: Instrument-based screening starting at 12 months, visual acuity at 4-5 years
- Blood pressure: Annual starting at age 3

*School-Age:*
- Dyslipidemia: Universal once between 9-11 years
- Vision: Periodically
- Scoliosis: Visual inspection at 8 years, forward bend test at 10-12

*Adolescence:*
- Depression: PHQ-A or similar at 12+ years annually
- Dyslipidemia: Once between 17-21 years
- HIV: At least once, more if risk factors
- STI screening: Based on sexual activity
- Cervical cancer: HPV co-testing starting at 21 (updated guidelines)

**Social Determinants of Health Screening:**

*Food Insecurity:*
- Hunger Vital Sign: 2-question screen
- "In the past 12 months, were you worried food would run out?"

*Housing Instability:*
- Assess stability, safety, environmental hazards

*Adverse Childhood Experiences (ACEs):*
- Parental mental health, substance abuse, domestic violence
- Consider validated screening tools

**Anticipatory Guidance by Stage:**

*Newborn/Early Infancy:*
- Breastfeeding support, safe sleep (ABCs: Alone, Back, Crib)
- Fever action plan, when to seek care
- Car seat safety (rear-facing)
- Shaken baby prevention

*Later Infancy:*
- Introduction of complementary foods (4-6 months)
- Choking prevention, babyproofing
- Dental care (first tooth = first visit)
- Limit screen time

*Toddler/Preschool:*
- Limit juice, healthy eating habits
- Toilet training readiness
- Discipline strategies (positive reinforcement)
- Preschool readiness

*School-Age:*
- Physical activity (60 min/day)
- Homework and screen time limits
- Bullying prevention
- Body safety education

*Adolescence:*
- Confidentiality discussion (SSHADESS assessment)
- Substance use prevention
- Healthy relationships, consent
- Career/education planning`,
      keyTerms: [
        { term: 'SSHADESS', definition: 'Adolescent psychosocial screening: Strengths, School, Home, Activities, Drugs/substance use, Emotions/depression, Sexuality, Safety' },
        { term: 'ACEs', definition: 'Adverse Childhood Experiences; toxic stress exposures associated with poor health outcomes' },
        { term: 'M-CHAT-R/F', definition: 'Modified Checklist for Autism in Toddlers, Revised with Follow-Up; validated autism screening tool' },
        { term: 'OAE', definition: 'Otoacoustic emissions; newborn hearing screening method' },
        { term: 'pulse oximetry screening', definition: 'Measurement of oxygen saturation to detect critical congenital heart defects in newborns' },
      ],
      clinicalNotes: 'Documentation should include growth parameters, developmental status, screening results, vaccines given, and anticipatory guidance provided. Address all components even when time-limited - prioritize based on child\'s age and family concerns.',
    },
    4: {
      level: 4,
      summary: 'Advanced well-child care incorporates precision medicine approaches, risk prediction models, and shared decision-making while navigating complex medical, developmental, and psychosocial presentations in diverse populations.',
      explanation: `Comprehensive well-child care requires nuanced clinical judgment and integration of multiple data streams.

**Complex Growth Assessment:**

*Growth Pattern Interpretation:*
- Linear growth reflects chronic health status
- Weight reflects acute nutritional status
- Head circumference reflects brain growth (microcephaly/macrocephaly thresholds: <-2 or >+2 SD)

*Concerning Patterns:*
- Falling off growth curve: Organic vs. non-organic failure to thrive
- FTT workup: CBC, CMP, TFTs, celiac panel, consider genetic/metabolic
- Crossing upward percentiles: Constitutional vs. pathological
- Obesity: Screen for comorbidities at BMI >85th (lipids, glucose, ALT)

*Special Populations:*
- Premature infants: Use corrected age until 24-36 months
- Down syndrome, Turner syndrome: Use syndrome-specific growth charts
- Genetic short stature vs. pathological: Bone age, growth velocity

**Risk Stratification Approaches:**

*Cardiovascular Risk:*
- Family history of premature CVD or hyperlipidemia
- Obesity, diabetes, hypertension, smoking
- Consider pediatric metabolic syndrome criteria

*Lead Toxicity Risk:*
- Housing age (pre-1978), renovation
- Imported goods, traditional medicines
- Occupational exposure (parental)

*Tuberculosis Risk:*
- Birth in endemic country
- Travel to endemic areas
- Known contacts

**Complex Developmental Assessment:**

*Red Flags Requiring Expedited Evaluation:*
- Regression of any skill at any age
- No babbling or gesturing by 12 months
- No single words by 16 months
- No 2-word phrases by 24 months
- Any loss of language or social skills

*Differentiating Speech-Language Presentations:*
- Language disorder: Isolated language delay, normal cognition/social
- Autism spectrum: Language delay + social/behavioral features
- Intellectual disability: Global delays including language
- Hearing impairment: Language delay, intact social skills

**Special Populations Care:**

*Medical Complexity:*
- Children with special healthcare needs (CSHCN)
- Care coordination essential
- Medical home model
- Transition planning to adult care

*Foster Care:*
- Higher rates of developmental delays, mental health needs
- Initial comprehensive evaluation within 30 days
- Trauma-informed care approach

*Immigrant/Refugee Children:*
- Catch-up immunizations (assess records, check titers)
- Screen for TB, parasites, lead, hepatitis B
- Mental health screening for trauma

**Shared Decision-Making:**

*Vaccine Hesitancy:*
- Motivational interviewing approach
- Address specific concerns
- Provide evidence-based information
- Document discussions
- Consider alternative schedules if needed to maintain relationship

*Controversial Topics:*
- Circumcision: Present benefits and risks, respect cultural factors
- Sleep training: Multiple acceptable approaches
- Complementary/alternative medicine: Assess safety`,
      keyTerms: [
        { term: 'failure to thrive (FTT)', definition: 'Poor weight gain or weight loss; weight <5th percentile or crossing 2+ major percentiles downward' },
        { term: 'medical home', definition: 'Model of comprehensive, coordinated primary care accessible and family-centered' },
        { term: 'bone age', definition: 'Skeletal maturation assessment using hand/wrist X-ray; helps differentiate causes of short stature' },
        { term: 'motivational interviewing', definition: 'Patient-centered counseling approach to elicit behavior change through exploring ambivalence' },
        { term: 'CSHCN', definition: 'Children with Special Health Care Needs; children with chronic conditions requiring more services than typical' },
      ],
      clinicalNotes: 'For vaccine-hesitant families, maintaining relationship is crucial - a delayed schedule is better than no vaccines. Document detailed discussions and revisit at each visit. For complex patients, consider longer visit times and care coordination.',
    },
    5: {
      level: 5,
      summary: 'Contemporary well-child care integrates digital health tools, precision prevention strategies, population health approaches, and value-based care models while addressing health equity and leveraging emerging technologies for developmental surveillance and family engagement.',
      explanation: `State-of-the-art pediatric preventive care reflects evolving evidence, technology, and healthcare delivery models.

**Precision Prevention:**

*Genetic Risk Stratification:*
- Familial hypercholesterolemia: Early identification and treatment
- Pharmacogenomics: CYP2D6 testing for codeine (avoid in PM metabolizers)
- Family history tools: Systematic three-generation pedigree

*Biomarker-Guided Screening:*
- Expanded newborn screening via tandem mass spectrometry
- Emerging: Whole genome sequencing for newborn screening
- Cardiovascular risk: hs-CRP, Lp(a) in high-risk youth

**Digital Health Integration:**

*Remote Monitoring:*
- Growth and development tracking apps
- Digital developmental screening tools
- Patient portals for asynchronous communication

*Telehealth in Well-Child Care:*
- Hybrid models: In-person for physical exam, vaccines
- Telehealth for some anticipatory guidance visits
- Increased access for rural populations

*AI and Decision Support:*
- Automated growth chart interpretation
- Risk prediction algorithms for developmental delays
- Natural language processing for chart review

**Population Health Approaches:**

*Quality Metrics:*
- HEDIS measures for well-child visits
- Immunization rates
- Lead screening rates
- Developmental screening completion

*Health Equity Considerations:*
- Disparities in well-child visit completion
- Language-concordant care
- Implicit bias training
- Community health worker integration

*Community-Based Interventions:*
- Home visiting programs (Nurse-Family Partnership)
- WIC program integration
- Reach Out and Read
- Medical-legal partnerships

**Emerging Screening Paradigms:**

*Mental Health Integration:*
- SAMHSA Integration models
- Collaborative care in primary care
- Zero to Three DC:0-5 diagnostic framework for infant mental health

*Social Determinants:*
- Universal screening protocols (PRAPARE, AHC)
- Referral networks to community resources
- Addressing upstream factors

*Toxicant Exposures:*
- Environmental history taking
- PFAS, phthalates, pesticides - emerging concerns
- Climate change health impacts

**Value-Based Care:**

*Payment Models:*
- Capitated payments incentivizing prevention
- Quality bonuses for screening completion
- Alternative payment models for CSHCN

*Efficiency Innovations:*
- Pre-visit planning and questionnaires
- Team-based care (MA-driven protocols)
- Group well-child visits

*Outcomes Focus:*
- School readiness as health outcome
- Kindergarten health metrics
- Long-term developmental outcomes

**Research Frontiers:**

*Developmental Surveillance:*
- Eye-tracking technology for autism screening
- Wearable sensors for motor development
- Voice analysis for language development

*Microbiome and Development:*
- Gut-brain axis in early development
- Microbiome-targeted interventions

*Implementation Science:*
- Optimizing guideline adherence
- Dissemination of best practices
- Deimplementation of low-value care

**Future Directions:**
- Genomic newborn screening
- Continuous developmental monitoring
- Precision anticipatory guidance based on individual risk
- Integration of social and biological determinants`,
      keyTerms: [
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set; quality measures including well-child visit rates' },
        { term: 'PRAPARE', definition: 'Protocol for Responding to and Assessing Patients\' Assets, Risks, and Experiences; social determinants screening tool' },
        { term: 'pharmacogenomics', definition: 'Using genetic information to guide medication selection and dosing' },
        { term: 'value-based care', definition: 'Healthcare delivery model rewarding quality and outcomes rather than volume' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
      ],
      clinicalNotes: `**Current Best Practices:**
- Universal developmental screening with validated tools at 9, 18, and 30 months
- Autism-specific screening at 18 and 24 months for all children
- Address social determinants through systematic screening and referral
- Maintain complete vaccine series using catch-up schedules when needed
- Document all anticipatory guidance for quality measurement and legal protection
- Consider telehealth for appropriate components to improve access`,
    },
  },

  media: [
    {
      id: 'well-child-visit-schedule',
      type: 'diagram',
      filename: 'well-child-schedule.svg',
      title: 'Well-Child Visit Schedule',
      description: 'Timeline of recommended well-child visits from birth to 21 years',
    },
    {
      id: 'growth-chart-example',
      type: 'diagram',
      filename: 'growth-chart-example.svg',
      title: 'Growth Chart Interpretation',
      description: 'Example of WHO/CDC growth charts with interpretation guidelines',
    },
  ],
  citations: [
    {
      id: 'bright-futures-4th',
      type: 'textbook',
      title: 'Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents, 4th Edition',
      authors: ['Hagan JF', 'Shaw JS', 'Duncan PM'],
      source: 'American Academy of Pediatrics',
    },
    {
      id: 'aap-periodicity',
      type: 'article',
      title: 'Recommendations for Preventive Pediatric Health Care (Periodicity Schedule)',
      source: 'Pediatrics',
      url: 'https://www.aap.org/periodicityschedule',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-developmental-milestones', targetType: 'topic', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'pediatrics-vaccination-schedule', targetType: 'topic', relationship: 'child', label: 'Vaccination Schedule' },
    { targetId: 'pediatrics-growth-nutrition', targetType: 'topic', relationship: 'related', label: 'Growth and Nutrition' },
  ],
  tags: {
    systems: [],
    topics: ['pediatrics', 'preventive-medicine', 'well-child-care', 'health-maintenance'],
    keywords: ['well-child', 'checkup', 'screening', 'anticipatory guidance', 'immunizations', 'growth', 'development'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default wellChildVisits;
