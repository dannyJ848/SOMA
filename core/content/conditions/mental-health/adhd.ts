/**
 * Attention-Deficit/Hyperactivity Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const adhd: EducationalContent = {
  id: 'condition-adhd',
  type: 'condition',
  name: 'Attention-Deficit/Hyperactivity Disorder',
  nameEs: 'Trastorno por Déficit de Atención e Hiperactividad',
  alternateNames: ['ADHD', 'ADD', 'Attention Deficit Disorder', 'Hyperkinetic Disorder'],
  hpoId: 'HP:0000718',

  levels: {
    1: {
      level: 1,
      summary: 'ADHD is a common condition that makes it hard to pay attention, sit still, and control impulses, affecting both children and adults.',
      explanation: `ADHD is a brain condition that affects how well someone can sit still, focus, and pay attention. It is not caused by bad parenting or laziness.

**Types of ADHD:**

**Inattentive Type (formerly called ADD):**
- Trouble paying attention to details
- Makes careless mistakes
- Difficulty staying focused on tasks
- Doesn't seem to listen when spoken to
- Trouble organizing tasks
- Loses things often
- Easily distracted
- Forgetful in daily activities

**Hyperactive-Impulsive Type:**
- Fidgets or squirms constantly
- Can't stay seated
- Runs or climbs when inappropriate (or feels restless in adults)
- Can't play quietly
- Always "on the go"
- Talks excessively
- Blurts out answers
- Trouble waiting turn
- Interrupts others

**Combined Type:**
- Shows both inattentive and hyperactive symptoms

**Treatment helps:**
- Medications (stimulants and non-stimulants)
- Behavioral therapy
- School/workplace accommodations
- Structure and routines
- Parent training for children

**Important:**
- ADHD often runs in families
- Many successful people have ADHD
- With proper treatment, people with ADHD can thrive`,
      keyTerms: [
        { term: 'inattention', definition: 'Difficulty focusing and staying on task' },
        { term: 'hyperactivity', definition: 'Excessive movement and inability to sit still' },
        { term: 'impulsivity', definition: 'Acting without thinking first' },
        { term: 'stimulant', definition: 'Medication that increases focus and attention' },
      ],
      analogies: [
        "ADHD is like having a brain with a \"dimmer switch\" for attention that is either too bright (distracted by everything) or too dim (can't focus on anything).",
        'A person with ADHD might have a brain like a television that keeps changing channels—hard to stay on one program.',
      ],
      examples: [
        "A child who can't sit through a full lesson, forgets to bring homework home, and blurts out answers before the teacher finishes asking.",
        "An adult who starts many projects but doesn't finish them, is frequently late, and has trouble following conversations.",
      ],
      patientCounselingPoints: [
        "ADHD is a real medical condition, not a character flaw",
        'Medication helps but works best combined with strategies',
        'Structure and routines are important for managing symptoms',
        'Many people with ADHD are creative and successful',
      ],
    },
    2: {
      level: 2,
      summary: 'ADHD is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity beginning in childhood, with symptoms persisting into adulthood for many.',
      explanation: `## Diagnostic Criteria (DSM-5)

**Must have:**
- Several symptoms present before age 12
- Symptoms present for ≥6 months
- Inappropriate for developmental level
- Clear evidence of interference with functioning
- Symptoms present in 2+ settings (home, school, work)

**Inattention (6+ symptoms for children, 5+ for adults 17+):**
- Often fails to give close attention to details
- Often has trouble holding attention
- Often does not seem to listen when spoken to directly
- Often does not follow through on instructions
- Often has difficulty organizing tasks and activities
- Often avoids, dislikes, or is reluctant to do tasks requiring sustained mental effort
- Often loses things necessary for tasks and activities
- Is often easily distracted
- Is often forgetful in daily activities

**Hyperactivity-Impulsivity (6+ symptoms for children, 5+ for adults 17+):**
- Often fidgets with or taps hands or feet, or squirms in seat
- Often leaves seat in situations when remaining seated is expected
- Often runs about or climbs in situations where it is not appropriate
- Often unable to play or take part in leisure activities quietly
- Is often "on the go"
- Often talks excessively
- Often blurts out an answer before a question is completed
- Often has trouble waiting their turn
- Often interrupts or intrudes on others

## Presentations
- **Combined Presentation:** Both inattentive and hyperactive-impulsive symptoms
- **Predominantly Inattentive Presentation:** Mostly inattention symptoms
- **Predominantly Hyperactive-Impulsive Presentation:** Mostly hyperactivity-impulsivity

## Prevalence
- Children: 5-10%
- Adults: 2-5%
- Male:Female ratio ~3:1 in children, more equal in adults

## Treatment

**Stimulant Medications (First-Line):**
- **Methylphenidate:** Ritalin, Concerta, Daytrana
- **Amphetamines:** Adderall, Vyvanse, Dexedrine
- 70-80% response rate

**Non-Stimulant Medications:**
- **Atomoxetine:** Strattera (SNRI)
- **Guanfacine:** Intuniv (alpha-2 agonist)
- **Clonidine:** Kapvay (alpha-2 agonist)

**Behavioral Therapy:**
- Parent training
- Behavioral classroom management
- Organizational skills training
- Cognitive behavioral therapy (adults)`,
      keyTerms: [
        { term: 'methylphenidate', definition: 'Stimulant medication for ADHD; blocks dopamine and norepinephrine reuptake' },
        { term: 'amphetamine', definition: 'Stimulant medication class for ADHD; increases dopamine and norepinephrine release' },
        { term: 'atomoxetine', definition: 'Non-stimulant ADHD medication; selective norepinephrine reuptake inhibitor' },
      ],
      patientCounselingPoints: [
        'Stimulant medications are safe when prescribed appropriately',
        'Appetite and sleep may be affected—dose timing can help',
        'Regular follow-up with your doctor is important',
      ],
    },
    3: {
      level: 3,
      summary: 'ADHD involves prefrontal cortex dysfunction, dopamine and norepinephrine dysregulation, and genetic predisposition, requiring multimodal treatment with stimulants as first-line pharmacotherapy.',
      explanation: `## Pathophysiology

**Neuroanatomy:**
- **Prefrontal cortex:** Executive function deficits
- **Basal ganglia:** Motor control and reward processing
- **Cerebellum:** Motor coordination and cognitive functions
- **Corpus callosum:** Interhemispheric communication

**Neurotransmitters:**
- **Dopamine:** Reduced availability in prefrontal cortex
- **Norepinephrine:** Dysregulated arousal and attention
- **Stimulants:** Increase dopamine and norepinephrine in synapse

**Genetics:**
- Heritability: 70-80%
- Multiple genes of small effect
- DAT1 (dopamine transporter)
- DRD4 (dopamine receptor)
- Family history is strong risk factor

**Neurodevelopmental:**
- Brain maturation delay (2-3 years)
- Normal structure but delayed development
- Some regions catch up, others may not

## Stimulant Medications

| Medication | Class | Duration | Dosing |
|------------|-------|----------|---------|
| **Methylphenidate immediate** | MPH | 3-4 hours | 2-3x daily |
| Methylphenidate ER (Concerta) | MPH | 10-12 hours | Once daily |
| Methylphenidate transdermal | MPH | 2 hours/patch | Replace daily |
| **Amphetamine mixed salts** | AMPH | 4-6 hours | 2-3x daily |
| **Lisdexamfetamine** | AMPH prodrug | 10-14 hours | Once daily |
| Dextroamphetamine | AMPH | 4-6 hours | 2-3x daily |

**Mechanism:**
- **Methylphenidate:** Blocks dopamine and norepinephrine reuptake
- **Amphetamines:** Blocks reuptake AND increases release

**Side Effects:**
- Decreased appetite (especially lunch)
- Sleep onset delay
- Headache, stomachache
- Rebound irritability
- Cardiovascular: increased HR, BP (usually mild)
- Rare: psychotic symptoms, growth delay

**Contraindications/Cautions:**
- Structural heart defects
- Uncontrolled hypertension
- Glaucoma
- Hyperthyroidism
- Substance use disorder (caution)

## Non-Stimulant Options

**Atomoxetine (Strattera):**
- Selective norepinephrine reuptake inhibitor
- Once daily dosing
- Full effect in 4-6 weeks
- No abuse potential
- Side effects: Nausea, sedation, sexual dysfunction
- FDA warning: Suicidality monitoring

**Alpha-2 Agonists:**
- **Guanfacine ER:** Once daily, less sedation
- **Clonidine ER:** More sedating, helpful for sleep
- Mechanism: Prefrontal cortex alpha-2A receptors
- Particularly helpful with:
  - Tics
  - Emotional dysregulation
  - Impulsivity
  - Sleep problems

**Bupropion (Wellbutrin):**
- Off-label for ADHD
- Dopamine/norepinephrine effects
- Alternative if stimulants not tolerated

## Comorbidities

**Learning Disorders (30-40%):**
- Reading, math, writing disorders
- Educational evaluation needed
- IEP/504 plan accommodations

**Anxiety/Depression (30-50%):**
- Treat ADHD first if mild
- May need combined treatment if moderate-severe
- SSRIs for anxiety/depression
- Atomoxetine may help both

**Autism Spectrum (15-20%):**
- Lower stimulant response rate
- More side effects
- Start low, go slow
- Alpha-2 agonists often helpful

**Disruptive Behavior Disorders:**
- Oppositional defiant disorder (ODD)
- Conduct disorder
- Behavioral interventions essential
- May require mood stabilizer or atypical antipsychotic`,
      keyTerms: [
        { term: 'executive function', definition: 'Cognitive processes for planning, organizing, and completing tasks; impaired in ADHD' },
        { term: 'lisdexamfetamine', definition: 'Prodrug of dextroamphetamine; activated by enzymes, longer duration' },
        { term: 'DAT1', definition: 'Dopamine transporter gene; variants associated with ADHD risk' },
        { term: 'IEP', definition: 'Individualized Education Program; special education accommodations' },
      ],
      clinicalNotes: 'Stimulants are first-line with robust evidence. Start low, titrate to effect. Monitor growth, cardiovascular symptoms, and for tics. Rebound irritability common as medication wears off.',
      patientCounselingPoints: [
        'Take medication consistently for best results',
        'Report any mood changes, especially sadness or increased irritability',
        'Appetite suppression usually improves with time—consider evening dose for dinner',
      ],
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant ADHD requires multimodal optimization, addressing executive function deficits, and managing comorbidities while considering long-term outcomes and adult presentations.',
      explanation: `## Treatment Optimization

**Suboptimal Response Strategy:**
1. Confirm diagnosis and adherence
2. Optimize stimulant (max tolerated dose)
3. Switch stimulant class (MPH → AMPH or vice versa)
4. Add or switch to non-stimulant
5. Consider augmentation (alpha-2 agonist + stimulant)
6. Comprehensive reassessment

**Augmentation Strategies:**
- **Stimulant + alpha-2 agonist:** Synergistic effects
- **Stimulant + atomoxetine:** May help refractory cases
- **Stimulant + antidepressant:** For comorbid depression/anxiety

## Executive Function Deficits

**Components:**
- **Working memory:** Holding information in mind
- **Inhibition:** Resisting distractions and impulses
- **Cognitive flexibility:** Shifting between tasks
- **Planning/organization:** Breaking down tasks
- **Time management:** Estimating and managing time
- **Emotional regulation:** Managing frustration

**Interventions:**
- **Coaching:** External structure and accountability
- **Cognitive behavioral therapy (CBT):** Skills-based approach
- **Organizational tools:** Planners, apps, reminders
- **Environmental modifications:** Minimizing distractions
- **Body doubling:** Working alongside others

## Adult ADHD

**Developmental Course:**
- 50-60% of childhood cases persist into adulthood
- Symptoms change over time
- Hyperactivity → inner restlessness
- Inattention remains prominent
- Impulsivity affects relationships and finances

**Adult Presentation:**
- Difficulty sustaining attention in work/meetings
- Procrastination, missed deadlines
- Disorganization, messy spaces
- Impulsive decision-making
- Relationship difficulties
- Financial problems
- Risk-taking behaviors
- Comorbid substance use

**Diagnostic Challenges:**
- Need childhood symptom evidence
- Self-report issues (lack of insight)
- Overlapping with other disorders
- Collateral information helpful

**Treatment Considerations:**
- Same medications effective for adults
- Dosing by weight not required
- Cardiovascular screening more important
- Diversion risk (stimulants)
- Workplace accommodations (ADA)

## Long-Term Outcomes

**Risks of Untreated ADHD:**
- Academic underachievement
- Occupational difficulties
- Relationship problems
- Substance use disorders
- Motor vehicle accidents
- Criminal justice involvement
- Financial problems

**Benefits of Treatment:**
- Improved academic/work performance
- Reduced accident risk
- Better self-esteem
- Improved relationships
- Reduced substance use risk

**Growth Effects:**
- Stimulants may cause temporary growth delay
- Usually 1-2 cm in height
- Catch-up growth occurs
- Monitor height/weight regularly
- Drug holidays possible (summer)

## Special Populations

**Preschool (under 6):**
- First-line: Parent training
- Consider methylphenidate if severe
- Start very low dose (2.5 mg)
- Monitor closely

**Adolescents:**
- Risk for diversion and misuse
- Abuse potential concerns
- Counseling about medication
- Consider long-acting formulations
- Driving safety discussions

**Pregnancy:**
- Stimulants: Category C (limited data)
- Risks: Preterm birth, growth restriction
- Benefits: Improved maternal functioning
- Shared decision-making essential
- Atomoxetine may be alternative

**Cardiovascular Disease:**
- Structural heart disease: Avoid stimulants
- Hypertension: Treat first, may use stimulants if controlled
- Arrhythmias: Cardiology consultation
- Consider non-stimulant alternatives

## Substance Use Disorders

**Relationship:**
- ADHD increases SUD risk 2-3x
- Self-medication hypothesis
- Stimulant misuse concerns

**Treatment Approach:**
- Treat both disorders simultaneously
- Stimulants can be used if SUD in remission
- Atomoxetine may be preferred in active SUD
- Longer-acting formulations preferred
- Monitoring and controls essential`,
      keyTerms: [
        { term: 'body doubling', definition: 'ADHD strategy of working alongside others for external structure and focus' },
        { term: 'diversion', definition: 'Giving or selling prescription medications to others; risk with stimulants' },
        { term: 'drug holiday', definition: 'Planned break from medication (often during summer) to assess continued need and reduce side effects' },
      ],
      clinicalNotes: 'Adult ADHD often goes undiagnosed. Screen adults with chronic inattention, disorganization, or impulsivity. Treatment improves outcomes. Screen for cardiovascular disease before starting stimulants.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ADHD management incorporates neuroimaging advances, personalized treatment approaches, novel non-stimulant therapeutics, and understanding ADHD as a lifespan disorder.',
      explanation: `## Neuroimaging Advances

**Structural Findings:**
- Reduced total brain volume (~5% smaller)
- Caudate, putamen, globus pallidus volume reductions
- Prefrontal cortex thinning
- Delayed cortical maturation pattern
- White matter integrity differences

**Functional Imaging:**
- Default mode network dysregulation
- Reduced prefrontal activation during tasks
- Impaired functional connectivity
- Task-positive network intrusion

**Clinical Utility:**
- Currently research tools only
- Future biomarker potential
- Not diagnostic at present

## Personalized Medicine

**Pharmacogenomics:**
- **CYP2D6:** Amphetamine metabolism
- **CES1:** Methylphenidate metabolism
- **ADRA2A:** Guanfacine response
- **DAT1 (SLC6A3):** Methylphenidate response

**Current Status:**
- Not yet clinically actionable
- May inform medication choice in future
- GeneSight, Genelex tests commercially available
- Insurance coverage variable

## Novel Therapeutics

**Non-Stimulant Pipeline:**
- **Viloxazine:** Serotonin-norepinephrine modulator (FDA approved 2021)
- **Solriamfetol:** Wake-promoting agent (studied for ADHD)
- **Modafinil/armodafinil:** Off-label, limited evidence

**Stimulant Formulations:**
- **Extended-release options:** Multiple delivery systems
- **Liquid/sprinkle formulations:** Pediatric options
- **Multilayer release:** Immediate + extended components

**Neuromodulation:**
- **Trigeminal nerve stimulation:** FDA cleared for pediatric ADHD
- **TMS:** Investigational for ADHD
- **Neurofeedback:** Limited evidence, not standard

## Digital Therapeutics

**FDA-Cleared:**
- **EndeavorRx:** Video game for pediatric ADHD
- Requires prescription
- Improves attention scores
- Adjunctive, not replacement

**Digital Interventions:**
- Smartphone apps for organization and reminders
- Wearable devices for attention monitoring
- Gamified cognitive training
- Digital biomarkers (passive monitoring)

**Cognitive Training:**
- Working memory training
- Mixed evidence for transfer to daily functioning
- Commercial programs: Cogmed, Lumosity

## Controversies and Debates

**Overdiagnosis:**
- Diagnosis rates increased significantly
- Regional variation suggests overdiagnosis in some areas
- Medication shortages reflect high demand
- Diagnostic threshold concerns

**Underdiagnosis:**
- Girls/minorities often missed
- Inattentive type overlooked
- Socioeconomic barriers to care
- Adult ADHD under-recognized

**Stimulant Safety:**
- **Cardiovascular:** Sudden death risk extremely low
- **Growth:** Temporary, non-significant long-term
- **Psychosis:** Rare, usually dose-related
- **Misuse:** Real concern, diversion monitoring needed
- **Seizure threshold:** Lowered, caution in epilepsy

**Age of Onset:**
- DSM-5: Symptoms before age 12
- DSM-IV: Symptoms before age 7
- Some adult-onset presentations recognized
- May reflect late recognition vs. true late onset

## Lifespan Perspective

**Preschool:**
- Parent training first-line
- Diagnosis challenging (normal behavior spectrum)
- Severe cases: methylphenidate may be considered

**School Age:**
- Academic accommodations (IEP/504)
- Behavioral classroom management
- Medication optimization
- Comorbidity screening

**Adolescence:**
- Driving safety (crash risk 2-3x higher)
- Transition to adult care
- Substance use counseling
- Diversion prevention

**Adulthood:**
- Workplace accommodations
- Relationship/family counseling
- Financial management strategies
- Parenting support

**Older Adults:**
- Limited research
- Cardiovascular concerns
- Polypharmacy considerations
- Stigma barriers

## Future Directions

**Biomarkers:**
- EEG theta/beta ratio
- Genetic risk scores
- Neuroimaging signatures
- Digital phenotyping

**Prevention:**
- Early identification
- Environmental modifications
- Parent training programs
- Prenatal exposures

**Treatment Innovation:**
- Novel receptor targets
- Personalized dosing algorithms
- Combination protocols
- Digital-therapeutic integration`,
      keyTerms: [
        { term: 'digital phenotyping', definition: 'Using smartphone and sensor data to characterize psychiatric symptoms' },
        { term: 'theta/beta ratio', definition: 'EEG measure; elevated in ADHD, potential biomarker' },
        { term: 'trigeminal nerve stimulation', definition: 'External neuromodulation device; FDA-cleared for pediatric ADHD' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Diagnosis requires impairment:** ADHD symptoms alone don't equal ADHD. Must cause significant impairment in functioning.

2. **Stimulants are first-line:** 70-80% respond. Robust evidence, good safety profile. Don't avoid due to stigma.

3. **Start low, go slow:** Reduces side effects, improves adherence. Titrate to effect or intolerance.

4. **Comorbidity is the rule:** Screen for learning disorders, anxiety, depression, autism. Treat accordingly.

5. **Adult ADHD is real:** Not just "growing out of it." Symptoms change, impairments persist. Treatment effective.

6. **Cardiovascular screening:** H&P before stimulants. Avoid in structural heart disease. Monitor BP/HR.

7. **Growth monitoring:** Plot height/weight regularly. Drug holidays can be considered but not required.

8. **Diversion risk:** Discuss with patients/families. Secure storage, careful prescribing. Consider long-acting formulations.

9. **Multimodal is best:** Medication + behavioral + school/workplace accommodations. Medication alone is insufficient.

10. **Reassess periodically:** ADHD diagnosis may change. Ongoing treatment should be re-evaluated. Consider drug holidays to assess continued need.`,
    },
  },

  media: [],
  citations: [
    { id: 'aap-adhd-2019', type: 'article', title: 'AAP Clinical Practice Guideline for Diagnosis and Treatment of ADHD', source: 'Pediatrics' },
    { id: 'nice-adhd-2018', type: 'article', title: 'NICE Guidelines on ADHD', source: 'National Institute for Health and Care Excellence' },
    { id: 'canmat-adhd-2020', type: 'article', title: 'Canadian ADHD Practice Guidelines', source: 'Canadian ADHD Resource Alliance' },
  ],
  crossReferences: [
    { targetId: 'condition-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['psychiatry', 'mental health', 'neurodevelopmental'],
    keywords: ['ADHD', 'ADD', 'stimulant', 'methylphenidate', 'amphetamine', 'inattention', 'hyperactivity'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adhd;
