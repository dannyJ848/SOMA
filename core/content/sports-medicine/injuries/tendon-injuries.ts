/**
 * Tendon Injuries in Sports - Educational Content
 *
 * Covers tendinopathy, tendonitis, and tendon ruptures in
 * athletic populations with comprehensive management strategies.
 */

import { EducationalContent } from '../../types';

export const tendonInjuriesContent: EducationalContent = {
  id: 'sports-med-tendon-injuries',
  type: 'condition',
  name: 'Tendon Injuries in Sports',
  alternateNames: ['Tendinopathy', 'Tendonitis', 'Tendon Rupture'],

  levels: {
    1: {
      level: 1,
      summary: 'Tendons connect muscles to bones and can be injured in sports through overuse or sudden force.',
      explanation: `## What is a Tendon?

Tendons are the tough bands of tissue that connect muscles to bones. They're essential for movement.

**Common Tendon Injuries:**

**Tendonitis (Tendinitis):**
- Inflammation of a tendon
- Usually from overuse or sudden increase in activity
- Common in: Achilles, patellar, rotator cuff, elbow

**Tendinopathy:**
- Chronic tendon problem
- May involve degeneration rather than pure inflammation
- Develops over time from repetitive stress

**Tendon Rupture:**
- Complete tear of the tendon
- Sudden, often painful injury
- Most common: Achilles, rotator cuff, biceps

## Common Sports-Related Tendon Injuries

**Achilles Tendon:**
- Back of the ankle/heel
- Running, jumping sports
- "Tennis leg"

**Patellar Tendon (Jumper's Knee):**
- Below the kneecap
- Basketball, volleyball
- Pain with jumping

**Rotator Cuff:**
- Shoulder tendons
- Throwing, swimming, tennis

**Tennis Elbow (Lateral Epicondylitis):**
- Outside of elbow
- Racquet sports, golf
- Pain with gripping

## Signs of Tendon Problems

- Pain near a joint
- Stiffness, especially in morning
- Tenderness to touch
- Weakness
- Swelling or thickening

## What to Do

- Rest from aggravating activities
- Ice the area
- Don't ignore persistent pain
- See a doctor if pain limits activities
- Early treatment helps prevent chronic problems`,
      keyTerms: [
        { term: 'tendon', definition: 'Fibrous connective tissue connecting muscle to bone' },
        { term: 'tendonitis', definition: 'Inflammation of a tendon, usually from overuse' },
        { term: 'rupture', definition: 'Complete tear or separation of a tendon' },
      ],
      analogies: [
        'Tendons are like strong ropes that transmit force from muscle to bone.',
      ],
      examples: [
        'A runner develops Achilles pain from increasing mileage too fast.',
        'A tennis player has elbow pain from gripping the racquet too tightly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tendon injuries include tendonitis (inflammatory), tendinosis (degenerative), and rupture, with diagnosis requiring physical examination and imaging.',
      explanation: `## Tendon Injury Spectrum

**Tendinopathy (Preferred Terminology):**
- Encompasses both tendonitis and tendinosis
- Histology shows degeneration rather than inflammation
- Chronic condition from overuse
- Poor response to anti-inflammatory treatment

**Tendinosis:**
- Chronic degenerative changes
- No significant inflammation
- Disorganized collagen structure
- Weak, painful tendon

**Tendon Rupture:**
- Complete tear of tendon fibers
- Usually acute traumatic event
- Can be partial or complete
- Often requires surgical intervention

## Common Sports Tendon Injuries

**Achilles Tendinopathy:**
- Location: 2-6 cm above heel insertion
- Most common in runners 30-50 years old
- Pain with running, jumping
- Morning stiffness common

**Patellar Tendinopathy (Jumper's Knee):**
- Involves inferior pole of patella
- Common in jumping sports
- Pain with loading activities

**Rotator Cuff Tendinopathy:**
- Supraspinatus most commonly affected
- Pain with overhead activities
- Night pain common
- Weakness with elevation

**Extensor Carpi Radialis Brevis (Tennis Elbow):**
- Lateral epicondylitis
- Pain with gripping, wrist extension
- Both sport and occupational causes

## Diagnostic Assessment

**Physical Examination:**
- Tenderness at specific tendon locations
- Pain with resisted muscle contraction
- Range of motion assessment
- Strength testing

**Imaging:**
- Ultrasound: Dynamic assessment possible
- MRI: Best for complete evaluation
- X-rays: Usually normal in tendinopathy`,
      keyTerms: [
        { term: 'tendinosis', definition: 'Chronic tendon degeneration without inflammation' },
        { term: 'neovascularization', definition: 'Formation of new blood vessels; seen in chronic tendinopathy' },
        { term: 'supraspinatus', definition: 'One of four rotator cuff muscles; most commonly involved in tendonitis' },
      ],
      analogies: [
        'Tendinosis is like a frayed rope that needs repair.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tendinopathy management involves load management, eccentric exercise programs, isometric training, and progressive rehabilitation, with surgery reserved for failed conservative management.',
      explanation: `## Conservative Treatment Options

**Load Management (Most Important):**
- Relative rest from aggravating activities
- Activity modification
- Pain monitoring during exercises
- Gradual return to loading

**Eccentric Exercise Programs:**
- Alfredson protocol for Achilles
- Heavy slow resistance training
- 12-week programs typical
- Pain acceptable up to 5/10 during exercise

**Isometric Training:**
- Immediate pain relief effect
- Good for early management
- 45-second holds, 5 reps
- Improves tendon capacity

**Manual Therapy:**
- Soft tissue mobilization
- Friction massage
- Joint mobilizations
- Dry needling

## Adjunctive Treatments

**NSAIDs:**
- Limited evidence for tendinopathy
- May help pain but don't address underlying issue
- Consider short-term use

**Corticosteroid Injections:**
- Short-term pain relief
- Potential detrimental effects on tendon
- Limit number of injections

**Other Injections:**
- PRP (Platelet-Rich Plasma): Mixed evidence
- Prolotherapy: Limited evidence
- Consider after failed conservative management

## Rehabilitation Progression

**Phase 1: Reduce Load and Pain (Weeks 0-2)**
- Isometric exercises for pain relief
- Load modification
- Address contributing factors

**Phase 2: Restore Capacity (Weeks 2-6)**
- Progressive eccentric loading
- Heavy slow resistance
- Gradual increase in load

**Phase 3: Strengthening (Weeks 6-12)**
- High-load strengthening
- Sport-specific movements
- Power development

**Phase 4: Return to Sport (Weeks 12+)**
- Gradual sport reintegration
- Maintenance exercises
- Monitor for symptom recurrence`,
      keyTerms: [
        { term: 'eccentric', definition: 'Muscle contraction while lengthening; key in tendon rehab' },
        { term: 'isometric', definition: 'Static muscle contraction without movement; provides pain relief' },
        { term: 'Alfredson protocol', definition: 'High-volume eccentric exercise program for Achilles tendinopathy' },
      ],
      clinicalNotes: 'Load management and exercise are first-line treatments. Eccentric exercise programs have strong evidence for effectiveness. NSAIDs and injections provide limited benefit and may impair healing. Surgery is reserved for failed conservative management.',
    },
    4: {
      level: 4,
      summary: 'Tendon pathology involves collagen degeneration, neovascularization, and failed healing response requiring mechanotransduction-based rehabilitation.',
      explanation: `## Normal Tendon Structure

**Hierarchical Organization:**
- Collagen molecules → fibrils → fibers → fascicles → tendon
- Type I collagen (90-95%)
- Elastin, proteoglycans, water
- Hierarchical sliding mechanism enables stretch

**Tendinopathy Pathology:**

**Histological Findings:**
- Disorganized collagen (Type III instead of Type I)
- Neovascularization (new blood vessel formation)
- Nerve ingrowth (pain source)
- Mucoid degeneration
- Loss of normal tendon architecture

**The "Tendinosis" Reality:**
- Not primarily inflammatory
- Failed healing response
- Degenerative condition
- Load-induced pathology
- Explains poor response to anti-inflammatories

## Biomechanics and Loading

**Tendon Mechanical Properties:**
- Stress-strain curve characteristics
- Optimal loading for adaptation
- Underloading: no adaptation
- Overloading: further damage

**Load and Tendon Adaptation:**
- Mechanotransduction: cells respond to mechanical stress
- Loading stimulates collagen synthesis
- Optimal load range: therapeutic window

## Imaging Findings and Clinical Correlation

**Asymptomatic Imaging Abnormalities:**
- Many normal athletes have tendon changes
- Incidental findings common
- Don't treat the image, treat the patient

**Ultrasound Assessment:**
- Tendon thickness
- Hypoechoic areas (degeneration)
- Neovascularization (power Doppler)
- Cost-effective alternative to MRI

**MRI Assessment:**
- Signal intensity changes
- Tendon thickening
- Partial tears
- Differential diagnosis`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Cellular response to mechanical stimulation; critical for tendon adaptation' },
        { term: 'neovascularization', definition: 'Pathological formation of new blood vessels; associated with pain in tendinopathy' },
        { term: 'mucoid degeneration', definition: 'Gelatinous degeneration of tendon tissue' },
      ],
      clinicalNotes: 'Loading through mechanotransduction stimulates tendon adaptation. Imaging abnormalities often exist in asymptomatic athletes. Ultrasound and MRI are primary imaging modalities. Complete ruptures usually require surgical repair for optimal function.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tendon management integrates evolving understanding from inflammatory to degenerative model, advanced loading protocols, and biological augmentation strategies.',
      explanation: `## Evolving Understanding

**From Tendonitis to Tendinopathy:**
- Historical emphasis on inflammation
- Modern understanding: degenerative process
- Shift from anti-inflammatory to load-based treatment

## Emerging Treatments

**Biological Augmentation:**
- Stem cell therapies
- Gene therapy approaches
- Scaffold technologies
- Most remain investigational

**Advanced Loading Protocols:**
- Heavy slow resistance (HSR) vs. eccentric
- Isometric loading variations
- Timing of loading (morning vs. evening)
- Individualized protocols based on response

## Controversies in Management

**Injection Therapy Debate:**
- Corticosteroids: short-term gain, long-term pain?
- PRP: which protocol, which patients?
- High-volume injections: mechanical effect?

**Surgical Timing:**
- Early intervention for partial tears?
- Failed conservative duration?
- Athlete-specific considerations

**Return to Sport Criteria:**
- Symptom-free vs. functional capacity?
- Imaging resolution required?
- Psychological readiness assessment

## Special Populations

**Adolescent Athletes:**
- Apophyseal injuries vs. tendinopathy
- Open growth plates vulnerable
- Different management approach

**Masters Athletes:**
- Age-related tendon changes
- Comorbidities impact
- Recovery time extended

**Overhead Athletes:**
- Unique biomechanical demands
- Glenohumeral internal rotation deficit (GIRD)
- Scapular dyskinesis
- Kinetic chain contributions`,
      keyTerms: [
        { term: 'GIRD', definition: 'Glenohumeral Internal Rotation Deficit; loss of internal rotation in throwing shoulder' },
        { term: 'scapular dyskinesis', definition: 'Abnormal scapular movement contributing to shoulder dysfunction' },
        { term: 'kinesiophobia', definition: 'Fear of movement or re-injury; significant predictor of return-to-sport outcomes' },
      ],
      clinicalNotes: 'Loading protocols continue to be refined based on emerging evidence. Return to sport decisions require comprehensive, individualized assessment. Movement quality may be more important than isolated strength testing. Prevention remains the best approach.',
    },
  },

  media: [
    {
      id: 'tendon-anatomy',
      type: 'diagram',
      filename: 'tendon-anatomy.svg',
      title: 'Common Tendon Injury Sites',
      description: 'Location of common tendon injuries in sports',
    },
  ],

  citations: [
    {
      id: 'tendinopathy-management',
      type: 'article',
      title: 'Management of Tendinopathy',
      source: 'British Journal of Sports Medicine',
    },
    {
      id: 'eccentric-research',
      type: 'article',
      title: 'Eccentric Exercise for Tendinopathy',
      source: 'American Journal of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries', targetType: 'topic', relationship: 'related', label: 'Overuse Injuries' },
    { targetId: 'sports-med-rotator-cuff', targetType: 'topic', relationship: 'related', label: 'Rotator Cuff' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['tendinopathy', 'tendonitis', 'sports-medicine', 'orthopedics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'sports-medicine', 'physical-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tendonInjuriesContent;
