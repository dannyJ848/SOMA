/**
 * Tendinopathy - Musculoskeletal Conditions
 *
 * Comprehensive content on tendon disorders including rotator cuff,
 * tennis elbow, Achilles tendinopathy, and evidence-based management.
 */

import { EducationalContent } from '../../types';

export const tendinopathy: EducationalContent = {
  id: 'conditions-tendinopathy',
  type: 'condition',
  name: 'Tendinopathy',
  alternateNames: ['Tendonitis', 'Tendinosis', 'Tendon Tear', 'Rotator Cuff Injury', 'Tennis Elbow', 'Golfer Elbow', 'Achilles Tendinitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Tendinopathy is a condition where tendons become painful and damaged from overuse, commonly affecting the shoulder, elbow, and Achilles tendon.',
      explanation: `## What Is Tendinopathy?

Tendons are the thick cords that attach muscles to bones. Tendinopathy happens when these tendons become damaged or irritated, usually from overuse or repetitive movements.

**Note:** The term "tendonitis" (inflammation) is often used, but most long-term tendon problems are actually "tendinosis" (degeneration without inflammation).

## Common Types of Tendinopathy

**Rotator Cuff Tendinopathy (Shoulder):**
- Pain when reaching overhead or behind your back
- Weakness in the arm
- Difficulty sleeping on the affected shoulder
- Clicking or popping sounds

**Tennis Elbow (Lateral Epicondylitis):**
- Pain on the outer side of the elbow
- Worse with gripping, lifting, or twisting
- Pain may spread down the forearm
- Weak grip strength

**Golfer Elbow (Medial Epicondylitis):**
- Pain on the inner side of the elbow
- Similar to tennis elbow but on the inside
- Worse with gripping or wrist flexion

**Achilles Tendinopathy:**
- Pain and stiffness in the back of the heel
- Worse first thing in the morning or after exercise
- Thickening of the tendon
- Pain during running, jumping, or climbing stairs

## What Causes Tendinopathy?

- Repetitive movements or overuse
- Sudden increase in activity level
- Poor technique in sports or work activities
- Aging (tendons become less flexible with age)
- Not enough rest between activities
- Muscle weakness or imbalance

## Treatment

**Self-Care:**
- Rest from activities that cause pain
- Ice for 15-20 minutes at a time
- Gentle stretching once acute pain subsides
- Over-the-counter pain medications

**Physical Therapy:**
- Specific exercises to strengthen the tendon
- Stretching exercises
- Correction of movement patterns
- Gradual return to activity

**Medical Treatments:**
- Physical therapy (most important)
- Corticosteroid injections (short-term relief)
- Shockwave therapy (for some types)
- Surgery (rare, for severe cases)

## Recovery Time

Tendons heal slowly because they have poor blood supply. Recovery can take:
- Mild cases: 4-6 weeks
- Moderate cases: 2-3 months
- Severe/chronic cases: 6 months or more

## Prevention

- Warm up before exercise
- Gradually increase activity levels
- Use proper technique
- Take regular breaks from repetitive tasks
- Strengthen muscles around the tendon`,
      keyTerms: [
        { term: 'tendon', definition: 'Tough tissue connecting muscle to bone' },
        { term: 'tendinopathy', definition: 'General term for tendon problems, including pain and damage' },
        { term: 'rotator cuff', definition: 'Group of muscles and tendons that stabilize the shoulder joint' },
        { term: 'Achilles tendon', definition: 'Large tendon connecting the calf muscles to the heel bone' },
      ],
      analogies: [
        'Tendons are like ropes - when they\'re frayed from overuse, they don\'t work as well and can cause pain.',
        'Think of your tendons like the cables on a bridge - with time and stress, they can weaken and need repair.',
        'Tendinopathy is like a rope that\'s been used too much - the fibers start to fray and need time to heal.',
      ],
      examples: [
        'A tennis player who feels pain on the outside of their elbow after playing has tennis elbow.',
        'A painter who develops shoulder pain from reaching overhead all day may have rotator cuff tendinopathy.',
        'A runner who develops heel pain after increasing their mileage too quickly likely has Achilles tendinopathy.',
      ],
      patientCounselingPoints: [
        'Rest is important but complete inactivity can make things worse - stay gently active within pain limits.',
        'Tendons take time to heal - don\'t expect overnight results, but consistent exercises will help.',
        'Ice can help with pain but don\'t overdo it - 15-20 minutes at a time is enough.',
        'Identify and correct what caused the problem to prevent it from coming back.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tendinopathy involves tendon degeneration (tendinosis) rather than inflammation, commonly affecting rotator cuff, elbow epicondyles, and Achilles tendon, managed with load-based rehabilitation.',
      explanation: `## Pathophysiology

**Tendinosis vs. Tendonitis:**
\`\`\`
Tendonitis (acute):
- Inflammatory response
- Short duration (days to weeks)
- Responds to anti-inflammatory treatment

Tendinosis (chronic):
- Degenerative changes
- Collagen disorganization
- Neovascularization
- Poor response to anti-inflammatories
- Most "tendonitis" is actually tendinosis
\`\`\`

**Key Pathologic Findings:**
- Collagen fiber disorganization
- Neovascularization (new blood vessels)
- Increased glycosaminoglycans
- Absence of inflammatory cells
- Failed healing response

## Common Tendinopathies

**Rotator Cuff:**
| Location | Pain Pattern | Aggravating Factors |
|----------|--------------|-------------------|
| Supraspinatus | Lateral shoulder, radiates to deltoid | Overhead reaching, reaching behind |
| Infraspinatus | Posterior shoulder | External rotation, reaching out |
| Subscapularis | Anterior shoulder, deep | Internal rotation, reaching behind back |

**Elbow:**
\`\`\`
Lateral Epicondylitis (Tennis Elbow):
- Origin: ECRB, other wrist extensors
- Pain: Lateral epicondyle, distal radiation
- Positive: Cozen test, Mill test
- Aggravated: Gripping, wrist extension

Medial Epicondylitis (Golfer Elbow):
- Origin: Wrist flexors, pronator teres
- Pain: Medial epicondyle
- Aggravated: Wrist flexion, pronation
- Less common than lateral
\`\`\`

**Achilles Tendinopathy:**
\`\`\`
Insertional (at heel):
- Pain at tendon-bone junction
- Associated with Haglund deformity
- Common in middle-aged runners

Midportion (2-6 cm above heel):
- Most common location
- Pain, swelling, nodularity
- Morning stiffness, "start-up" pain
\`\`\`

## Diagnostic Approach

**History:**
- Gradual onset (not sudden trauma)
- Activity-related pain
- Pain during activity, lessens with warm-up, returns after
- Stiffness after inactivity
- Functional limitations

**Physical Examination:**
\`\`\`
Rotator cuff tests:
- Empty can (supraspinatus)
- Lift-off (subscapularis)
- External rotation resistance (infraspinatus)
- Impingement signs (Neer, Hawkins)

Elbow tests:
- Cozen test (lateral)
- Mill test (lateral)
- Golfer elbow test (medial)

Achilles tests:
- Thompson test (rules out tear)
- Palpation for tenderness, thickening
- Arc of motion assessment
\`\`\`

**Imaging:**
- X-ray: Rule out other causes (calcifications, fractures)
- Ultrasound: Dynamic assessment, measures neovascularization
- MRI: Surgical planning, full-thickness tears
- Imaging often NOT needed for typical tendinopathy

## Treatment

**Exercise-Based Rehabilitation (Core Treatment):**

\`\`\`
Eccentric Exercise Program:
- Alfredson protocol for Achilles (180 reps/day)
- Tyler twist for tennis elbow
- Supraspinatus eccentric for rotator cuff
- Progressive loading over 12 weeks
- Pain acceptable during exercise (VAS 3-5/10)

Key principles:
- Load progression essential
- Eccentric loading most effective
- Isometric for pain relief
- Heavy slow resistance (HSR)
- Continue until full functional recovery
\`\`\`

**Adjunctive Treatments:**

| Treatment | Evidence | Indications |
|-----------|----------|-------------|
| NSAIDs | Limited benefit | Short-term pain relief |
| Ice | Low quality | Symptomatic relief |
| Corticosteroid injection | Short-term only | Severe pain, limit to 1-2 |
| Physical therapy | Strong benefit | First-line treatment |
| Shockwave therapy | Moderate | Calcific tendinopathy |
| Massage | Limited | Adjunctive |
| Acupuncture | Mixed | Consider if preferred |
| Nitroglycerin patch | Moderate | Achilles, lateral elbow |
| PRP | Limited, expensive | Consider after failed conservative |

**Corticosteroid Injection Considerations:**
- Effective short-term (2-6 weeks)
- No long-term benefit
- Multiple injections may damage tendon
- Avoid in Achilles (rupture risk)
- Use with exercise therapy, not alone`,
      keyTerms: [
        { term: 'tendinosis', definition: 'Chronic tendon degeneration with disorganized collagen and no inflammation' },
        { term: 'eccentric exercise', definition: 'Muscle lengthening while under tension; key to tendon rehabilitation' },
        { term: 'neovascularization', definition: 'Formation of new blood vessels; sign of tendon pathology' },
        { term: 'ECRB', definition: 'Extensor carpi radialis brevis; most commonly affected tendon in tennis elbow' },
        { term: 'Haglund deformity', definition: 'Bony enlargement at heel causing insertional Achilles pain' },
      ],
      analogies: [
        'Eccentric exercise is like lengthening a spring slowly while it\'s under tension - this strengthens the tendon.',
      ],
      patientCounselingPoints: [
        'Eccentric exercises are uncomfortable but necessary for healing - the discomfort gets better with time.',
        'Cortisone shots provide quick relief but don\'t fix the underlying problem - you still need to do exercises.',
        'Healing takes 3-6 months of consistent exercises - don\'t give up if you don\'t see immediate results.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tendinopathy represents a failed healing response with histologic degeneration, requiring structured load progression and evidence-based adjunctive therapies while avoiding interventions that may impair healing.',
      explanation: `## Detailed Pathophysiology

**Tendon Structure and Healing:**
\`\`\`
Normal tendon hierarchy:
- Collagen molecules → fibrils → fibers → fascicles → tendon
- Type I collagen: 95% of normal tendon (strong, organized)
- Type III collagen: Weaker, disorganized, produced in healing

Tendinopathy changes:
- Type III collagen increases
- Glycosaminoglycan accumulation
- Fatty infiltration, calcification
- Neovascularization from surrounding tissues
- Nociceptor ingrowth (pain source)

Failed healing model:
1. Initial tendon injury/overload
2. Inflammatory response (acute)
3. Incomplete resolution
4. Disorganized repair (Type III collagen)
5. Progressive degeneration
6. Clinical tendinopathy
\`\`\`

**Neovascularization and Pain:**
- New blood vessels grow from paratenon
- Accompanied by nerve ingrowth
- Source of pain in chronic tendinopathy
- Visualized on Doppler ultrasound
- May regress with successful treatment

## Specific Tendinopathies

**Rotator Cuff:**

\`\`\`
Anatomic considerations:
- Supraspinatus: Critical zone (hypovascular area)
- Impingement: Subacromial space narrowing
- Scapular dyskinesis: Altered biomechanics
- Can progress from tendinosis to partial tear to full tear

Physical examination:
- Hawkin-Kennedy: Most sensitive for impingement
- Neer: Less specific
- Empty can: Supraspinatus
- External rotation lag: Infraspinatus
- Lift-off: Subscapularis
- Bear hug: Subscapularis

Imaging:
- Ultrasound: Dynamic, accessible, operator-dependent
- MRI: Best for surgical planning, tear characterization
- X-ray: Rule out other causes, acromion morphology

Surgical indications:
- Symptomatic full-thickness tear
- Failure of 3-6 months conservative care
- Acute tear in young patient
- Significant functional limitation
\`\`\`

**Lateral Epicondylitis:**

\`\`\`
ECRB pathology:
- Microtears at origin
- Angiofibroblastic hyperplasia
- Granulation tissue
- Not true inflammation

Differential:
- Radial tunnel syndrome
- Posterior interosseous nerve syndrome
- Radiocapitellar arthritis
- Instability

Treatment progression:
1. Counter-force brace (non-steroidal)
2. Isometric and eccentric exercises
3. Manual therapy (mobilization with movement)
4. Consider PRP after 6 months failed conservative
5. Surgery for refractory cases (<5%)
\`\`\`

**Achilles Tendinopathy:**

\`\`\`
Alfredson Eccentric Protocol:
- 180 repetitions daily (3 sets × 15 reps, twice daily)
- Performed on step with straight and bent knee
- Slow eccentric (3-5 seconds), concentric with good leg
- Pain during acceptable (VAS <5)
- Duration: 12 weeks
- 80%+ good to excellent results

Midportion vs Insertional:
- Midportion: Better prognosis, responds to eccentric
- Insertional: More difficult, consider surgery if bony prominence

Complications:
- Achilles tendon rupture (warning: quinolone antibiotics, steroids)
- Progression to insertional tendinopathy
- Risk of rupture with multiple steroid injections
\`\`\`

## Evidence Review of Interventions

**Exercise Therapy:**

\`\`\`
Eccentric exercise:
- Achilles: Strong evidence, Alfredson protocol
- Patellar: Moderate evidence
- Rotator cuff: Moderate evidence
- Lateral elbow: Strong evidence (Tyler twist)
- Mechanism: Load-induced collagen remodeling

Isometric exercise:
- Immediate pain reduction (up to 45 minutes)
- Useful for pain relief while building eccentric tolerance
- Heavy load, 5 reps × 45-60 seconds

Heavy Slow Resistance (HSR):
- Alternative to pure eccentric
- May be more effective than eccentric alone
- 3 sets × 15 reps, 3×/week
- Progressive loading
\`\`\`

**Injection Therapies:**

\`\`\`
Corticosteroid injection:
- Short-term benefit (2-6 weeks)
- No long-term benefit vs placebo
- May impair tendon healing
- Limited to 1-2 injections maximum
- CONTRAINDICATED: Achilles (rupture risk)

Platelet-Rich Plasma (PRP):
- Mixed evidence in lateral elbow
- Limited benefit in rotator cuff
- Not superior to saline in Achilles
- Expensive, insurance rarely covers
- Consider for refractory cases

Autologous blood injection:
- Similar to PRP
- Lower cost
- Limited evidence

Prolotherapy:
- Injecting irritant (dextrose)
- Limited evidence
- Available for refractory cases
\`\`\`

**Shockwave Therapy (ESWT):**
\`\`\`
Radial shockwave:
- Non-invasive
- Moderate evidence for calcific tendinopathy
- 3-5 sessions
- May be alternative to surgery for calcific rotator cuff

Focused shockwave:
- More precise targeting
- Similar evidence profile
- More expensive
\`\`\`

## Red Flags and Differential

**Tendon Rupture Signs:**
- Sudden pain with "pop"
- Immediate weakness
- Visible defect/palpable gap
- Positive Thompson test (Achilles)
- Inability to actively move against gravity

**Systemic Causes:**
- Fluoroquinolone antibiotics
- Systemic corticosteroids
- Hypercholesterolemia (Achilles)
- Diabetes mellitus
- Chronic kidney disease
- Rheumatoid arthritis
- Gout`,
      keyTerms: [
        { term: 'angiofibroblastic hyperplasia', definition: 'Pathologic tissue response in tendinopathy with new vessels and disorganized fibroblasts' },
        { term: 'Thompson test', definition: 'Squeeze calf; absent foot plantar flexion indicates Achilles rupture' },
        { term: 'Hawkin-Kennedy test', definition: 'Internal rotation with forward flexion; positive if pain suggests impingement' },
        { term: 'scapular dyskinesis', definition: 'Abnormal scapular movement contributing to shoulder pathology' },
        { term: 'counter-force brace', definition: 'Brace that offloads tendon origin; symptomatic treatment for tennis elbow' },
      ],
      clinicalNotes: 'Avoid corticosteroid injections in the Achilles tendon - significant rupture risk. For rotator cuff tears, surgical outcomes better if done within 6 months of injury. Eccentric exercises take 12 weeks for full effect - patient adherence is key.',
    },
    4: {
      level: 4,
      summary: 'Chronic tendinopathy requires distinguishing from partial tears, understanding failed healing physiology, employing advanced rehabilitation protocols, and selecting appropriate interventional therapies based on evidence.',
      explanation: `## Advanced Pathophysiology

**The Failed Healing Response Model:**

\`\`\`
Normal tendon repair sequence:
1. Inflammation (days): Macrophages, growth factors
2. Proliferation (weeks): Fibroblasts, collagen synthesis
3. Remodeling (months): Collagen maturation, alignment

In tendinopathy:
- Stage 1 (reactive): Reactive tendinopathy
- Stage 2 (tendon disrepair): Disorganized healing
- Stage 3 (degenerative): Degenerative changes, cell death

Key mediators:
- MMPs (matrix metalloproteinases): Collagen degradation
- TGF-beta: Fibrotic changes
- IL-6, COX-2: Inflammatory markers (acute)
- Substance P, CGRP: Pain mediators (neovascularization)
\`\`\`

**The Continuum Model:**
- Reactive tendinopathy → reversible with load modification
- Tendon disrepair → potential for reversal with appropriate load
- Degenerative tendinopathy → irreversible, structural changes

## Diagnostic Dilemmas

**Partial-Thickness vs. Tendinopathy:**

\`\`\`
Clinical distinction:
- Partial tear: History of injury, weakness > pain
- Tendinopathy: Gradual onset, pain > weakness

Imaging findings overlap:
- Both show tendon thickening
- Both may have increased signal
- Partial tear shows discrete defect
- Dynamic ultrasound may reveal

Management implications:
- Tendinopathy: Eccentric loading (may take months)
- Partial tear: May progress, earlier surgical consideration
- <50% thickness: Trial of conservative
- >50% thickness: Consider earlier surgical repair
\`\`\`

**Calcific Tendinopathy:**

\`\`\`
Stages (calcific rotator cuff):
1. Pre-calcific: Cellular metaplasia, asymptomatic
2. Formative: Calcium deposition, may be painful
3. Resting: Stable, usually asymptomatic
4. Resorptive: Most painful, inflammatory
5. Post-calcific: Tendon healing, may leave cuff defect

Treatment by stage:
- Formative: PT, activity modification
- Resorptive: NSAIDs, subacromial injection
- Failed conservative: Needling, shockwave, or surgery
\`\`\`

**Systemic Associations:**

\`\`\`
Fluoroquinolone-associated tendinopathy:
- Risk: Achilles, rotator cuff
- Onset: Hours to 6 weeks after starting
- Mechanism: Toxic tenocyte effect, ischemia
- Bilateral in up to 1/3 of cases
- Avoid exercise while on FQs

Hypercholesterolemia:
- xanthomatous deposition in Achilles
- May mimic tendinopathy
- Consider lipid panel in Achilles cases

Diabetes:
- Increased tendinopathy risk
- Limited tendon healing capacity
- Worse outcomes with treatment
\`\`\`

## Advanced Rehabilitation

**Load Progression Framework:**

\`\`\`
Stage 1: Isometric loading
- Heavy load, 5 × 45-60 seconds
- Pain relief effect
- Prepare tendon for eccentric

Stage 2: Eccentric loading
- Classic: Alfredson (Achilles)
- Duration: 12 weeks
- Acceptable pain: 3-5/10
- Progressive overload

Stage 3: Concentric-eccentric combined
- Heavy slow resistance
- 3-4 sets × 6-15 reps
- Progressive load
- Sport-specific activities

Stage 4: Return to sport
- Plyometric training
- Sport-specific drills
- Graduated return
- Continue maintenance program
\`\`\`

**Specific Protocols:**

\`\`\`
Tyler Twist (Tennis Elbow):
- Throwing bar with rotation
- Eccentric focus
- 3 sets × 15 reps
- Progressive resistance
- Evidence: Superior to standard concentric

Silbernagel (Achilles):
- Combined concentric/eccentric
- Symptom-limited progression
- More practical than pure eccentric
- Similar outcomes to Alfredson

Rotator cuff:
- Scapular stabilization first
- Then rotator cuff strengthening
- Eccentric emphasis
- Return to overhead activities last
\`\`\`

## Interventional Therapies

**Platelet-Rich Plasma (PRP):**

\`\`\`
Mechanism:
- Concentrated autologous platelets
- Release growth factors (PDGF, TGF-beta, VEGF)
- Stimulate healing response

Preparation variations:
- Leukocyte-rich vs leukocyte-poor
- Single vs double spin
- Activation (calcium chloride) vs non-activated

Evidence summary:
- Lateral epicondylitis: Moderate benefit vs steroid
- Rotator cuff: Limited to no additional benefit
- Achilles: No benefit vs eccentric loading
- Patellar: Mixed evidence

Indications:
- Failed ≥6 months appropriate conservative
- Patient preference for biologic
- Willing to accept cost
\`\`\`

**Ultrasound-Guided Treatments:**

\`\`\`
Tenotomy (percutaneous):
- Needle fenestration of tendon
- Induces healing response
- Early results promising
- Less invasive than surgery

Tenofoam (hydrodissection):
- Inject fluid around tendon
- Releases adhesions
- May reduce neovascularization
- Limited evidence

Dry needling:
- Multiple needle passes through tendon
- Similar mechanism to tenotomy
- Office-based procedure
\`\`\`

**Emerging Interventions:**
- Stem cell therapy (MSCs): Limited evidence, expensive
- Extracorporeal shockwave: Best for calcific tendinopathy
- Nitroglycerin patch: Moderate evidence (Achilles, lateral elbow)
- Botulinum toxin: Limited investigation

## Surgical Considerations

**Rotator Cuff Repair:**
\`\`\`
Arthroscopic vs mini-open:
- Similar outcomes
- Arthroscopic: Less pain, faster recovery
- Both achieve similar healing rates

Timing:
- Better outcomes with earlier repair (<6 months)
- Muscle atrophy progresses with delay
- Fatty infiltration irreversible

Expected outcomes:
- 80-90% satisfaction
- Healing dependent on tear size, chronicity
- Massive tears: 50% failure rate
\`\`\`

**Lateral Epicondyle Surgery:**
\`\`\`
Open release:
- ECRB release, decortication
- 85-90% good-excellent results
- Return to sport: 3-6 months
- Reserved for refractory cases (>12 months)
\`\`\`

**Achilles Surgery:**
\`\`\`
Tendinopathy (not rupture):
- Debridement of degenerative tissue
- Tendon transfer (FHL) for insertional
- Reserved for refractory cases
- 6-12 month recovery
\`\`\`

`,
      keyTerms: [
        { term: 'MMPs', definition: 'Matrix metalloproteinases; enzymes that degrade collagen and extracellular matrix' },
        { term: 'continuum model', definition: 'Stages of tendinopathy from reactive to degenerative with different prognoses' },
        { term: 'xanthomatous', definition: 'Cholesterol deposition in tissue; can occur in Achilles tendon with hypercholesterolemia' },
        { term: 'FHL transfer', definition: 'Flexor hallucis longus tendon transfer for refractory Achilles tendinopathy' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Most "tendonitis" is actually tendinosis - avoid anti-inflammatory focus, prioritize loading

2. Eccentric exercises take 12 weeks to work - set patient expectations from the start

3. Corticosteroids in the Achilles are contraindicated - rupture risk is real

4. PRP has limited evidence but may be reasonable in refractory cases after shared decision-making

5. Systemic causes are common - always ask about fluoroquinolones, statins, diabetes

6. Calcific tendinopathy has stages - treatment depends on resorptive vs formative phase

7. Partial tears >50% thickness have worse outcomes with conservative care`,
    },
    5: {
      level: 5,
      summary: 'Contemporary tendinopathy management implements mechanotransduction-based loading, phenotypic classification, ultrasound-guided interventions, and emerging biologic therapies while recognizing limitations of traditional inflammatory paradigms.',
      explanation: `## Molecular Mechanisms

**Mechanotransduction in Tendons:**

\`\`\`
Cellular response to mechanical load:
Tenocyte → Mechanoreceptors → Intracellular signaling → Gene expression

Key pathways:
- TGF-beta/Smad: Collagen production
- IGF-1: Anabolic stimulus
- COX-2, PGE2: Inflammatory (acute)
- IL-6: Modulator of remodeling
- Nitric oxide: Blood flow, collagen synthesis

Therapeutic window:
- Optimal load: Collagen synthesis
- Overload: Microdamage, catabolic
- Underload: Atrophy, disuse

Clinical implication:
"Load is the most important stimulus for tendon healing"
\`\`\`

**Failed Healing and Neoinnervation:**
- Substance P, CGRP: Neovascularization, pain
- Nerve growth factor (NGF): Increased in tendinopathy
- Sensitization: Peripheral and central components
- Explains pain disproportionate to tissue damage

## Phenotype-Based Management

**Tendinopathy Phenotypes:**

\`\`\`
Reactive tendinopathy:
- Acute overload
- Reversible
- Management: Load modification, then gradual reloading

Tendon dysrepair:
- Failed healing response
- Some reversibility
- Management: Structured loading, consider adjuncts

Degenerative tendinopathy:
- Irreversible changes
- Cell death, fatty infiltration
- Management: Optimize function, surgical may be needed

Impingement-related:
- Mechanical factors predominate
- Subacromial (rotator cuff)
- Carpal tunnel (other tendons)
- Management: Address mechanical cause
\`\`\`

## Evidence Controversies

**Corticosteroid Injection Re-evaluation:**

\`\`\`
Traditional view:
- Anti-inflammatory effect
- Short-term pain relief
- Bridge to exercise

Current concerns:
- May impair collagen synthesis
- Atrophy effects on tendon
- No long-term benefit
- Multiple injections harmful

Balanced approach:
- Consider in severe pain
- Maximum 1-2 injections
- Must be combined with exercise
- Avoid in Achilles
- Avoid before surgery (tissue atrophy)
\`\`\`

**PRP Evidence Summary:**

\`\`\`
Positive studies:
- Lateral elbow: Better than steroid at 2 years
- Some benefit vs placebo in rotator cuff

Negative studies:
- Achilles: No benefit vs exercise
- Patellar: No additional benefit over exercise

Meta-analyses:
- Small effect size overall
- Publication bias likely
- Cost-effectiveness poor

Current position:
- Not first-line
- Consider for refractory cases
- Shared decision-making
- Patient preference important
\`\`\`

**Shockwave Therapy:**
- Radial: Better for calcific tendinopathy
- Focused: Similar efficacy
- Mechanism: Neovascularization, tissue regeneration
- Position: Alternative to surgery for calcific rotator cuff

## Emerging Therapies

**Biologic Interventions:**

\`\`\`
Stem cell therapy (MSCs):
- Bone marrow-derived: Limited data
- Adipose-derived: Limited data
- Mechanism: Paracrine signaling
- Evidence: Early phase, limited
- Cost: High, rarely covered

Amniotic membrane products:
- Anti-inflammatory properties
- Limited evidence
- Expensive
- Not currently recommended

Gene therapy:
- Theoretical: Enhance growth factors
- Preclinical only
- Future potential
\`\`\`

**Tenocyte Engineering:**
- In vitro tenocyte expansion
- Implantation into tendon
- Early research
- Potential for refractory cases

## Surgical Evolution

**Arthroscopic Rotator Cuff Repair:**

\`\`\`
Single-row vs double-row fixation:
- Biomechanics: Double-row stronger
- Clinical outcomes: Similar
- Healing rates: Similar
- Cost: Double-row more expensive
- Position: Single-row adequate for most

Augmentation techniques:
- Patch augmentation (dermal, synthetic)
- Bridge technique for massive tears
- Superior capsule reconstruction
- Early results promising
- Long-term data limited
\`\`\`

**Tendon Transfer:**
- Indicated for irreparable tears
- FHL transfer for Achilles
- Latissimus for massive posterosuperior cuff
- Lower trapezius for irreparable supraspinatus
- Outcomes: Reliable pain relief, limited function

## Implementation Science

**Treatment Gaps:**

\`\`\`
Common issues:
- Inappropriate NSAID focus
- Under-dosing exercise
- Premature imaging
- Excessive injections
- Inadequate duration of therapy

Quality improvement:
- Standardized exercise protocols
- Education on tendinosis vs tendonitis
- Delayed imaging guidelines
- Injection limits
- Outcome tracking
\`\`\`

**Shared Decision-Making:**

\`\`\`
Discuss with patients:
- Natural history (slow improvement)
- Exercise commitment (12+ weeks)
- Injection risks/benefits
- Surgical indications
- Return to activity expectations
- Possibility of incomplete recovery

Decision aids:
- Visual aids showing tendon structure
- Exercise progression timelines
- Risk/benefit charts
- Return to activity criteria
\`\`\``,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Conversion of mechanical stimuli into cellular signals; basis for exercise-based treatment' },
        { term: 'phenotype', definition: 'Classification of tendinopathy based on dominant pathologic process' },
        { term: 'paracrine signaling', definition: 'Cell communication via secreted factors; mechanism of stem cell therapy' },
        { term: 'superior capsule reconstruction', definition: 'Surgical patch for irreparable rotator cuff tears using graft material' },
      ],
      clinicalNotes: `Expert Practice Points:

1. Exercise is the only intervention with consistent, long-term benefit - prioritize structured loading

2. Anti-inflammatory paradigm is outdated - tendinopathy is degenerative, not inflammatory

3. Corticosteroids have a role but are overused - limit to 1-2, always combine with exercise

4. PRP is not a panacea - evidence shows small benefit in specific situations, high cost

5. Imaging should not drive treatment - many asymptomatic people have tendon changes

6. Surgery is last resort but has good outcomes for properly selected patients

7. The field is evolving - stay current on biologic therapies but maintain healthy skepticism

8. Patient expectations matter - set realistic timelines (3-6 months minimum for meaningful change)

9. Comorbidities matter - diabetes, hyperlipidemia, fluoroquinolones all affect tendon health

10. Psychosocial factors influence outcomes - fear-avoidance, catastrophizing predict poor recovery`,
    },
  },

  media: [
    {
      id: 'tendinopathy-rotator-cuff',
      type: 'diagram',
      filename: 'tendinopathy-rotator-cuff.svg',
      title: 'Rotator Cuff Anatomy and Common Pathology',
      description: 'Anatomy of rotator cuff tendons and common injury sites',
    },
    {
      id: 'tendinopathy-elbow',
      type: 'diagram',
      filename: 'tendinopathy-elbow.svg',
      title: 'Tennis Elbow and Golfer Elbow Anatomy',
      description: 'Lateral and medial epicondyle pain patterns',
    },
    {
      id: 'tendinopathy-achilles',
      type: 'diagram',
      filename: 'tendinopathy-achilles.svg',
      title: 'Achilles Tendinopathy Locations',
      description: 'Midportion vs insertional Achilles tendinopathy',
    },
  ],

  citations: [
    {
      id: 'rooij-2020',
      type: 'article',
      title: 'Exercise Therapy for Rotator Cuff Tendinopathy: A Systematic Review',
      authors: ['van Rooij W', 'van der Vis H'],
      source: 'Journal of Shoulder and Elbow Surgery',
    },
    {
      id: 'coombes-2015',
      type: 'article',
      title: 'A Systematic Review of Interventions for Lateral Elbow Tendinopathy',
      authors: ['Coombes BK', 'Bisset L', 'Vicenzino B'],
      source: 'British Journal of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'conditions-fractures', targetType: 'condition', relationship: 'related', label: 'Fractures' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['sports-medicine', 'orthopedics', 'physical-therapy', 'occupational-health'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine', 'sports-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tendinopathy;
