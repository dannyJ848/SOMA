import { EducationalContentObjectLevels } from '../types';

export const smokingCessationContent: EducationalContentObjectLevels = {
  id: 'smoking-cessation',
  type: 'topic',
  name: 'Smoking Cessation',
  alternateNames: ['Quitting Smoking', 'Tobacco Cessation', 'Nicotine Withdrawal Management'],
  levels: {
    1: {
      level: 1,
      summary: 'Quitting smoking is one of the most important things you can do for your health. Benefits begin within 20 minutes and continue for years. Preparation, support, and evidence-based treatments double success rates.',
      explanation: `Quitting smoking is a journey that requires preparation, support, and persistence. The benefits start immediately and continue for years.

**Why Quit?**

Immediate benefits:
- Save money
- Better breathing
- Improved smell and taste
- Better physical fitness
- Cleaner home and car

Long-term benefits:
- Live longer
- Reduce risk of heart disease, cancer, stroke
- Better overall health
- Protect family from secondhand smoke

**Understanding the Challenge**

Quitting is hard because:
- Nicotine is addictive
- Smoking becomes a habit
- Emotional connections to smoking
- Social situations involve smoking
- Withdrawal is uncomfortable

But it's possible:
- More than half of smokers have quit
- Former smokers now outnumber current smokers
- Treatment doubles success rates
- Each attempt brings you closer to success

**Steps to Prepare**

1. Make a firm decision - Set a quit date within 2 weeks
2. Understand your smoking - Track your smoking for 1 week
3. Identify your triggers - When do you smoke?
4. Plan your strategies - What will you do instead?
5. Choose your approach - Medication, counseling, or both
6. Gather your resources - Have tools ready
7. Prepare your environment - Remove all cigarettes
8. Enlist support - Tell friends and family
9. Plan for challenges - Withdrawal is temporary
10. Set your quit date - Mark it on calendar

**Common Triggers**
- After meals
- With coffee or alcohol
- When stressed
- When driving
- On work breaks
- With certain friends
- When bored`,
      keyTerms: [
        { term: 'nicotine', definition: 'Addictive substance in tobacco that causes dependence' },
        { term: 'withdrawal', definition: 'Physical and mental symptoms when stopping nicotine use' },
        { term: 'cravings', definition: 'Strong urges to smoke, typically last only a few minutes' },
        { term: 'triggers', definition: 'Situations, emotions, or activities that make you want to smoke' },
        { term: 'NRT', definition: 'Nicotine Replacement Therapy - provides nicotine without tobacco' }
      ],
      analogies: [
        'Quitting smoking is like driving up a mountain - it gets harder before it gets easier, but the view from the top is worth it.',
        'Nicotine addiction is like a parasite that controls your behavior - treatment helps you break free.',
        'Each smoke-free day is like putting money in a health bank account.'
      ],
      examples: [
        'A person who has smoked for 30 years can still benefit greatly from quitting - health risks start dropping immediately.',
        'Using nicotine gum along with the patch doubles success rates compared to using either alone.'
      ],
      patientCounselingPoints: [
        'Quitting smoking at any age reduces your risk of death and disease.',
        'Combination of medication and counseling works best for most people.',
        'Most smokers make several attempts before quitting for good - each attempt is practice.',
        'Withdrawal symptoms peak in the first week and gradually improve.',
        'Even a slip-up does not mean failure - get back on track immediately.'
      ]
    },
    2: {
      level: 2,
      summary: 'Evidence-based smoking cessation includes seven FDA-approved medications (5 NRT products, varenicline, and bupropion) and behavioral support. Combination NRT (patch plus gum/lozenge) is the most effective NRT approach.',
      explanation: `Evidence-based smoking cessation combines medications and behavioral support for the best outcomes.

**FDA-Approved Medications**

All first-line medications approximately double quit rates compared to placebo.

**Nicotine Replacement Therapy (NRT)**

Provides nicotine without tobacco, reducing withdrawal and cravings.

Nicotine Patch:
- Steady nicotine level
- Apply to clean, dry skin daily
- 21mg if smoke >10 cigarettes/day
- 14mg if smoke <=10 cigarettes/day
- 8-week course with step-down

Nicotine Gum:
- Chew until peppery taste, then "park" in cheek
- 2mg if smoke <=25 cigarettes/day
- 4mg if smoke >25 cigarettes/day
- Use every 1-2 hours initially

Nicotine Lozenge:
- Dissolve completely in mouth
- Same dosing as gum
- Good alternative for those who can't use gum

Nicotine Nasal Spray:
- Most rapid NRT delivery
- One spray in each nostril
- Can use every 30-60 minutes

Nicotine Inhaler:
- Hand-to-mouth ritual similar to smoking
- Puff on inhaler when craving
- 6-16 cartridges daily

Combination NRT (Most Effective):
- Patch for steady state
- Gum or lozenge for breakthrough cravings

**Non-Nicotine Medications**

Varenicline (Chantix):
- Partial agonist at nicotine receptors
- Reduces cravings and blocks pleasure from smoking
- 2-3x quit rates
- Start 1 week before quit date
- Possible side effects: nausea, vivid dreams

Bupropion (Zyban):
- Antidepressant that increases dopamine and norepinephrine
- Reduces withdrawal and weight gain
- Similar efficacy to NRT
- Start 1-2 weeks before quit date
- Do not use if seizure disorder

**Behavioral Support**

Brief interventions (5 A's):
1. Ask about smoking
2. Advise to quit
3. Assess willingness
4. Assist with plan
5. Arrange follow-up

Individual and group counseling improve outcomes.

Telephone quit lines (1-800-QUIT-NOW) are free and effective.`,
      keyTerms: [
        { term: 'combination NRT', definition: 'Using nicotine patch plus as-needed NRT (gum or lozenge)' },
        { term: 'varenicline', definition: 'Prescription medication that blocks nicotine receptors and reduces cravings' },
        { term: 'bupropion', definition: 'Antidepressant medication also used for smoking cessation' },
        { term: 'partial agonist', definition: 'Drug that both stimulates and blocks receptors' }
      ],
      analogies: [
        'Combination NRT is like having a baseline defense (patch) with relief pitchers ready (gum/lozenge) when cravings spike.',
        'Varenicline works like a key that fits in the nicotine lock but doesn\'t fully turn it, reducing cravings while blocking smoking pleasure.'
      ],
      examples: [
        'A smoker using combination NRT is twice as likely to quit successfully as someone using patch alone.',
        'Varenicline can triple quit rates compared to placebo, making it the most effective single medication.'
      ],
      patientCounselingPoints: [
        'Seven FDA-approved medications are available - ask your doctor which is right for you.',
        'Combination NRT (patch + gum/lozenge) is the most effective over-the-counter option.',
        'Medication works best when combined with counseling or support.',
        'Start medication 1-2 weeks before your quit date for best results.',
        'Use medications for the full recommended course, even if you feel successful.'
      ]
    },
    3: {
      level: 3,
      summary: 'Withdrawal symptoms peak in first 3-5 days and gradually improve. Cravings typically last 3-5 minutes. Relapse is a process with identifiable warning signs. Slips are common and don\'t have to lead to full relapse.',
      explanation: `Understanding withdrawal, cravings, and relapse prevention is key to successful cessation.

**Withdrawal Symptoms**

Mood symptoms:
- Irritability and anger
- Anxiety and nervousness
- Depression or sadness
- Mood swings

Physical symptoms:
- Increased appetite and weight gain (5-10 lbs average)
- Insomnia or sleep changes
- Fatigue and tiredness
- Headache
- Cough (as lungs clear)

Cognitive symptoms:
- Difficulty concentrating
- Memory problems

**Withdrawal Timeline**

30 min - 4 hours: First cravings, irritability begins
Day 1: Mood changes, difficulty sleeping
Days 2-3: Peak withdrawal symptoms
Days 3-5: Physical symptoms at worst
Week 1: Symptoms begin improving
Weeks 2-4: Gradual improvement
4+ weeks: Most symptoms resolved

**Managing Cravings**

Cravings:
- Intense urges to smoke
- Triggered by reminders
- Peak in first few days
- Gradually decrease over time
- Usually last only 3-5 minutes

The 4 D's:
1. Delay - Wait 3-5 minutes
2. Distract - Do something else
3. Drink water - Sip slowly
4. Deep breathe - Relax and breathe deeply

**Relapse Prevention**

Relapse is a process, not an event:

Emotional Relapse:
- Not taking care of yourself
- Isolating
- Bottling emotions

Mental Relapse:
- Thinking about smoking
- Romanticizing smoking
- Planning how to smoke

Physical Relapse:
- Actually smoking

Key: Intervene early in emotional or mental phase.

**Slips vs. Relapse**

A slip (lapse):
- One or a few cigarettes
- Recognize what happened
- Learn from it
- Get back on track immediately
- Does not have to become relapse`,
      keyTerms: [
        { term: 'withdrawal timeline', definition: 'Pattern of symptom intensity after quitting - peaks days 2-3, improves over weeks' },
        { term: 'urge surfing', definition: 'Mindfulness technique of riding out cravings without acting on them' },
        { term: 'slip vs. relapse', definition: 'Slip is temporary setback; relapse is return to regular smoking' },
        { term: 'emotional relapse', definition: 'Early stage of relapse involving self-neglect and isolation' }
      ],
      analogies: [
        'Cravings are like waves - they rise, peak, and pass. You can surf through them without drowning.',
        'Relapse is like walking down a slope - you can turn back at any point if you recognize where you are.'
      ],
      examples: [
        'Using deep breathing when a craving hits can help you ride out the 3-5 minute urge.',
        'A person who slips and has one cigarette can still quit successfully if they get back on track immediately.'
      ],
      patientCounselingPoints: [
        'Withdrawal is hardest in the first week, but symptoms will improve gradually.',
        'Cravings typically last only 3-5 minutes - use the 4 D\'s to get through them.',
        'A slip does not equal failure - it\'s a learning opportunity.',
        'Having a relapse plan before you quit can help you handle challenges.',
        'Call the quit line (1-800-QUIT-NOW) if you need support.'
      ]
    },
    4: {
      level: 4,
      summary: 'Special populations require tailored approaches. Pregnant women should use behavioral interventions first, NRT if needed. People with mental illness need integrated treatment. All cessation medications can be used in most comorbid conditions.',
      explanation: `Smoking cessation approaches must be tailored to special populations.

**Pregnant and Breastfeeding Women**

Risks of smoking during pregnancy:
- Miscarriage and stillbirth
- Preterm birth
- Low birth weight
- Placental problems
- SIDS

Treatment approach:
- Behavioral interventions first-line
- NRT if benefit outweighs risk
- Prefer intermittent over continuous NRT
- Avoid varenicline and bupropion (insufficient data)

**Adolescents and Young Adults**

Special considerations:
- Brain still developing until ~25
- More susceptible to nicotine addiction
- Peer influence powerful
- May not identify as "smokers"

Treatment approach:
- Motivational interviewing
- Cognitive-behavioral approaches
- Peer support programs
- Consider NRT for heavy smokers
- Not FDA-approved for under 18

**Older Adults**

Special considerations:
- Longer smoking history
- Higher nicotine dependence
- More medical comorbidities
- May believe "too late to quit"

Benefits of quitting:
- Still significant health benefits
- Improved quality of life
- Extended lifespan
- Better management of chronic diseases

**People with Mental Illness**

Challenges:
- Much higher smoking rates (2-3x general population)
- May smoke to self-medicate
- More severe withdrawal
- More relapse

Treatment approach:
- Integrated treatment
- Continue psychiatric medications
- Monitor symptoms closely
- All cessation medications can be used
- Bupropion may help depression

**Cardiovascular Disease**

Benefits of quitting:
- Immediate improvement in cardiovascular health
- Reduced risk of heart attack and stroke
- Better blood pressure control

Treatment considerations:
- NRT safe for most cardiac patients
- Avoid in unstable angina, recent MI
- Discuss with cardiologist

**Respiratory Disease**

Asthma and COPD:
- Slows disease progression
- Improves symptoms
- Reduces exacerbations
- NRT safe and effective

**Diabetes**

Benefits:
- Better blood glucose control
- Reduced complications
- Improved insulin sensitivity

Treatment considerations:
- Monitor blood glucose closely
- May need medication adjustment
- Weight gain concern`,
      keyTerms: [
        { term: 'integrated treatment', definition: 'Addressing multiple conditions (mental health and substance use) simultaneously' },
        { term: 'motivational interviewing', definition: 'Counseling approach that resolves ambivalence and strengthens motivation' },
        { term: 'Pregnancy Category D', definition: 'Medication with positive evidence of human fetal risk but benefits may outweigh risks' }
      ],
      analogies: [
        'Treating mental illness without addressing smoking is like fixing a car engine while ignoring the fuel leak.',
        'Pregnant smokers need to quit for two - the immediate benefit to the baby is motivation.'
      ],
      examples: [
        'A person with depression who quits smoking may need closer monitoring of mood symptoms.',
        'Pregnant women who quit before 15 weeks gestation can eliminate the excess risk of low birth weight.'
      ],
      patientCounselingPoints: [
        'People with mental health conditions can successfully quit with proper support.',
        'Pregnant women should talk to their doctor about cessation options.',
        'Older adults benefit significantly from quitting - it\'s never too late.',
        'Having another medical condition doesn\'t mean you can\'t use cessation medications.',
        'Your healthcare provider can help tailor treatment to your specific situation.'
      ]
    },
    5: {
      level: 5,
      summary: 'Pharmacogenomics may guide personalized treatment in the future. E-cigarettes for cessation remains controversial. Policy approaches are effective at population level. Technology and personalized medicine are future directions.',
      explanation: `Advanced topics in smoking cessation include emerging science and future directions.

**Pharmacogenomics**

Personalized treatment based on genetics:

Nicotine Metabolism:
- Slow metabolizers: CYP2A6 gene variants
  - Metabolize nicotine slowly
  - May respond better to NRT patch
  - Need lower varenicline doses

- Fast metabolizers:
  - Normal CYP2A6 activity
  - Metabolize nicotine quickly
  - May need higher or more frequent NRT
  - Better response to varenicline

Clinical application:
- Not yet routine clinical practice
- Testing available but not standard
- May guide medication selection in future

**E-Cigarettes for Cessation**

Controversial topic:

Potential benefits:
- May help some people quit
- Deliver nicotine without combustion
- Similar ritual to smoking

Concerns:
- Not FDA-approved for cessation
- Long-term health effects unknown
- Dual use common
- Youth vaping epidemic
- Addiction potential

Evidence:
- Mixed results
- Some studies show effectiveness
- Others show no benefit or harm
- Not recommended as first-line
- If used, should be temporary

**Harm Reduction Approaches**

For those not able or willing to quit:
- Reduce smoking if not quitting
- Use NRT long-term instead
- Switch to less harmful products (controversial)

Evidence:
- Complete cessation is always best
- Reduction may lead to cessation
- Individualized approach

**Policy and Public Health**

Effective policies:
- Taxation (single most effective)
- Smoke-free laws
- Marketing restrictions
- Graphic health warnings
- Tobacco 21 (raise minimum age)
- Mass media campaigns

**Future Directions**

Personalized medicine:
- Nicotine metabolism testing
- Genetic variant testing
- Tailored treatment selection

Technology integration:
- AI-powered interventions
- Sensor-based monitoring
- Just-in-time interventions
- Personalized feedback

Combination therapies:
- Medication combinations
- Medication plus behavioral
- Multiple behavioral approaches
- Technology-enhanced treatment`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response' },
        { term: 'nicotine metabolism', definition: 'How the body processes nicotine, varies by genetics' },
        { term: 'harm reduction', definition: 'Approach reducing health harms without complete abstinence' },
        { term: 'CYP2A6', definition: 'Gene that encodes enzyme responsible for nicotine metabolism' }
      ],
      analogies: [
        'Fast nicotine metabolizers are like people with fast metabolism - they burn through nicotine quickly and need more frequent dosing.',
        'Harm reduction is like wearing a seatbelt - it doesn\'t prevent crashes but makes them less deadly.'
      ],
      examples: [
        'Genetic testing for CYP2A6 variants can identify fast vs. slow nicotine metabolizers.',
        'Taxes on cigarettes are the single most effective policy intervention for reducing smoking.'
      ],
      patientCounselingPoints: [
        'Future cessation treatments may be personalized based on your genetics.',
        'E-cigarettes are not FDA-approved for cessation and carry unknown long-term risks.',
        'Policy changes like smoke-free laws help more people quit successfully.',
        'Digital tools and apps can provide additional support between healthcare visits.'
      ]
    }
  }
};

export default smokingCessationContent;
