import { EducationalContent } from '../../types';

export const massageExpanded: EducationalContent = {
  id: 'massage-expanded',
  type: 'topic',
  name: 'Therapeutic Massage',
  alternateNames: ['Massage Therapy', 'Bodywork', 'Swedish Massage'],
  levels: {
    1: {
      level: 1,
      summary: 'Massage therapy involves manual manipulation of soft tissues including muscles, connective tissue, tendons, ligaments, and skin for health and wellness purposes. It reduces cortisol by up to 50%, increases serotonin and dopamine, lowers blood pressure, and enhances immune function.',
      explanation: `What is Massage Therapy:
Massage therapy involves manual manipulation of soft tissues including muscles, connective tissue, tendons, ligaments, and skin for health and wellness purposes.
One of the oldest healthcare practices known to humanity
Integrates physical, mental, and emotional benefits
Over 80 recognized massage modalities
Licensed professionals complete 500-1000+ hours of training

The Science of Massage:
Research demonstrates massage's profound effects.
Reduces cortisol (stress hormone) by up to 50%
Increases serotonin and dopamine (mood-elevating hormones)
Lowers blood pressure and heart rate
Enhances immune function by increasing natural killer cells

Types of Massage:
Different modalities for different needs.
Swedish: gentle relaxation and circulation
Deep tissue: chronic muscle tension and injury
Sports: athletic performance and recovery
Trigger point: specific pain patterns
Myofascial release: connective tissue restrictions

What to Expect:
Preparing for your massage session.
Intake form discusses health history and concerns
Privacy and draping ensure comfort
Pressure should be "hurts good", not painful
Communication essential for optimal experience`,
      keyTerms: [
        { term: 'cortisol', definition: 'Stress hormone that massage therapy can significantly reduce' },
        { term: 'soft tissue', definition: 'Muscles, tendons, ligaments, fascia, and other connective structures' },
        { term: 'draping', definition: 'Technique using sheets or towels to cover/undrape areas being massaged, ensuring privacy' },
      ],
      analogies: [
        'Massage is like hitting the reset button for your nervous system.',
        'Think of your muscles like knotted rope - massage helps work out the tangles.',
      ],
      examples: [
        'A person with chronic back pain may find relief through regular massage therapy.',
        'Office workers with neck tension from computer use benefit from targeted massage.',
      ],
      patientCounselingPoints: [
        'Communicate your preferences and needs to your massage therapist',
        'Drink water after massage to help flush toxins',
        'Schedule regular sessions for cumulative benefits',
        'Arrive a few minutes early for intake',
        'Speak up about pressure or discomfort',
      ],
    },
    2: {
      level: 2,
      summary: 'Common massage modalities include Swedish (long gliding strokes), Deep Tissue (deeper pressure for chronic tension), Sports Massage (athletic performance), Trigger Point Therapy (releasing muscle knots), Myofascial Release (connective tissue), and Hot Stone Massage (heated stones).',
      explanation: `Swedish Massage:
The foundation of Western massage therapy.
Uses long gliding strokes (effleurage)
Kneading (petrissage) to work muscles deeply
Friction to break up adhesions
Tapotement (rhythmic tapping) for stimulation
Promotes relaxation and circulation

Deep Tissue Massage:
Addressing chronic muscle tension.
Targets deeper layers of muscle and fascia
Uses slower strokes and deeper pressure
Addresses adhesions and chronic patterns
May cause soreness lasting 1-2 days
Not necessarily "more pressure is better"

Sports Massage:
Optimizing athletic performance and recovery.
Pre-event: stimulates and prepares muscles
Post-event: aids recovery and reduces soreness
Maintenance: addresses sports-related issues
Rehabilitation: supports injury healing
Uses techniques similar to Swedish and deep tissue

Trigger Point Therapy:
Releasing localized muscle knots.
Trigger points cause referred pain patterns
Direct pressure releases these hyperirritable spots
Often addresses the cause of pain, not just symptoms
Can be integrated into other massage types
May be uncomfortable during treatment

Myofascial Release:
Working with the body's connective tissue.
Fascia surrounds and connects all body structures
Restrictions in fascia cause pain and limited mobility
Slow, sustained pressure releases fascial restrictions
Can affect areas distant from treatment site
Gentle but powerful approach

Hot Stone Massage:
Heated stones for deep relaxation.
Smooth, heated stones placed on or used to massage
Heat penetrates deeply into muscles
Combines thermotherapy with massage benefits
Particularly relaxing for stressed clients
Not appropriate for certain conditions`,
      keyTerms: [
        { term: 'effleurage', definition: 'Long, gliding strokes used in Swedish massage' },
        { term: 'petrissage', definition: 'Kneading technique used in massage to work muscles deeply' },
        { term: 'tapotement', definition: 'Rhythmic tapping or percussive movements in massage' },
        { term: 'trigger point', definition: 'Hyperirritable spot in skeletal muscle associated with a palpable nodule' },
      ],
      analogies: [
        'Different massage techniques are like different tools in a toolbox.',
      ],
      examples: [
        'Swedish massage is excellent for first-time massage recipients',
        'Deep tissue can help office workers with chronic back tension',
        'Sports massage helps runners recover faster from long distances',
      ],
      patientCounselingPoints: [
        'Choose modality based on your goals',
        'Don\'t hesitate to try different types',
        'Discuss options with your therapist',
        'Communicate clearly about comfort level',
        'Deep tissue shouldn\'t cause sharp pain',
        'Drink extra water afterward',
      ],
    },
    3: {
      level: 3,
      summary: 'Specialized applications include Prenatal Massage (pregnancy support), Geriatric Massage (adapted for older adults), Oncology Massage (cancer care), Massage for Headaches & Migraines, Massage for Fibromyalgia, and Massage for TMJ Dysfunction.',
      explanation: `Prenatal Massage:
Supporting pregnancy and postpartum recovery.
Reduces common pregnancy discomforts
Improves sleep and reduces stress
Special positioning for safety and comfort
Requires specific training and certification
Contraindications exist for high-risk pregnancies

Geriatric Massage:
Adapted techniques for older adults.
Addresses age-related changes in tissues
Gentler pressure and shorter sessions often appropriate
Improves circulation, joint mobility, and mood
Can help with loneliness and touch deprivation
Modifications for medical conditions and devices

Oncology Massage:
Safe massage during cancer treatment.
Requires specialized training and knowledge
Adaptations for surgery, radiation, chemotherapy
Provides comfort and reduces treatment side effects
Contraindications and precautions carefully considered
Proven to reduce anxiety and pain in cancer patients

Massage for Headaches & Migraines:
Addressing head and neck tension.
Tension headaches respond well to massage
Focus on neck, shoulders, and head
Trigger points in neck and shoulders often involved
Can reduce frequency and severity
Self-massage techniques helpful between sessions

Massage for Fibromyalgia:
Managing widespread pain and fatigue.
Gentle massage often more effective than deep
Reduces pain, anxiety, and depression symptoms
May improve sleep quality
Sessions should be shorter initially
Consistency important for benefit

Massage for TMJ Dysfunction:
Treating jaw pain and dysfunction.
Intra-oral (inside mouth) techniques commonly used
Addresses muscles of mastication
Can reduce jaw clicking and pain
Often combined with dental treatment
Self-care techniques essential between sessions`,
      keyTerms: [
        { term: 'intra-oral massage', definition: 'Massage technique performed inside the mouth for TMJ issues' },
        { term: 'fibromyalgia', definition: 'Chronic condition characterized by widespread pain and fatigue' },
        { term: 'TMJ', definition: 'Temporomandibular joint - the jaw joint' },
      ],
      analogies: [
        'Prenatal massage supports both mother and baby through the journey.',
      ],
      examples: [
        'Pregnant women often find relief from back pain with prenatal massage',
        'Oncology massage helps reduce chemotherapy side effects',
        'Headache massage can provide drug-free pain relief',
      ],
      patientCounselingPoints: [
        'Seek certified prenatal massage therapist',
        'Second trimester often optimal time to start',
        'Side-lying positioning standard',
        'Discuss any pregnancy complications with therapist',
        'Ensure therapist has geriatric experience',
        'Choose therapist with oncology certification',
        'Communicate full treatment history',
        'Keep headache diary to track triggers',
      ],
    },
    4: {
      level: 4,
      summary: 'Eastern and specialty modalities include Thai Massage (compression, stretching, energy work on floor mat), Shiatsu (Japanese finger pressure on acupuncture points), Reflexology (foot/hand pressure points), Lymphatic Drainage (gentle lymph support), Craniosacral Therapy (cranial rhythms), and Rolfing/Structural Integration.',
      explanation: `Thai Massage:
Traditional Thai bodywork.
Combines compression, stretching, and energy work
Performed on floor mat through clothing
Recipient actively participates
Follows energy lines (sen)
Increases flexibility and energy flow

Shiatsu:
Japanese finger pressure therapy.
Uses finger and palm pressure on acupuncture points
Based on Traditional Chinese Medicine theory
Balances energy flow (qi) through meridians
Usually performed through clothing on floor mat
Addresses both physical and energetic aspects

Reflexology:
Foot and hand pressure point therapy.
Maps of entire body on feet and hands
Pressure on reflex points affects corresponding organs
Particularly relaxing and grounding
Can be done with clothes on
Often used for stress and specific health concerns

Lymphatic Drainage:
Gentle technique for lymph system support.
Very light, rhythmic strokes
Follows lymphatic pathways
Reduces edema and swelling
Supports immune function
Post-surgical and detoxification applications

Craniosacral Therapy:
Gentle work with cranial and spinal rhythms.
Extremely light touch approach
Addresses restrictions in craniosacral system
Particularly helpful for headaches, TMJ, and trauma
Promotes deep relaxation and self-correction
Subtle but powerful effects

Rolfing/Structural Integration:
Deep tissue work for postural realignment.
10-session series designed systematically
Reorganizes fascia and posture
Addresses long-standing patterns
Can be intense during treatment
Results often permanent`,
      keyTerms: [
        { term: 'shiatsu', definition: 'Japanese therapy using finger pressure on acupuncture points' },
        { term: 'reflexology', definition: 'Therapy based on the theory that reflex areas on feet and hands correspond to body organs' },
        { term: 'lymphatic drainage', definition: 'Gentle massage technique encouraging lymph flow and detoxification' },
        { term: 'craniosacral therapy', definition: 'Gentle manipulation of the skull and spine to relieve tension' },
        { term: 'rolfing', definition: 'Form of bodywork that manipulates fascia to promote structural alignment' },
      ],
      analogies: [
        'Thai massage is like partner yoga with compression.',
        'Reflexology is like playing the piano on your feet to create harmony in your body.',
      ],
      examples: [
        'Thai massage improves flexibility for athletes',
        'Reflexology helps with stress and insomnia',
        'Lymphatic drainage reduces post-surgical swelling',
      ],
      patientCounselingPoints: [
        'Wear loose, comfortable clothing for Thai massage',
        'No oils used in Thai or Shiatsu',
        'Reflexology very relaxing; excellent for stress reduction',
        'Much lighter pressure than typical massage for lymphatic drainage',
        'Very gentle craniosacral; may feel like nothing is happening',
        'Commitment to full Rolfing series recommended',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced practice includes Clinical Massage (treatment-oriented with documentation), Self-Massage Techniques (foam rolling, balls), Massage for Emotional Release, integrating massage into healthcare, and developing a lifelong relationship with bodywork.',
      explanation: `Clinical Massage:
Treatment-oriented approach.
Treatment plan for specific conditions
Documentation of progress
Collaboration with healthcare providers
Outcome-based approach
Insurance billing sometimes possible

Self-Massage Techniques:
Maintaining benefits between sessions.
Foam rolling for large muscle groups
Tennis or lacrosse balls for trigger points
Hand tools for self-applied pressure
Extends benefits of professional sessions
Particularly helpful for chronic issues

Massage for Emotional Release:
Addressing stored emotions in tissues.
Emotions can be stored in physical tissues
Massage may trigger emotional release
Trained therapists provide safe space
Integration with psychotherapy valuable
Normal and healthy aspect of bodywork

Integrating Massage into Healthcare:
Massage within comprehensive health strategy.
Integrative medicine recognizes massage value
Often prescribed for pain, anxiety, rehabilitation
Reduces reliance on medications for some
Hospitals and clinics increasingly offering massage
Cost-effective for many conditions

Lifelong Relationship with Bodywork:
Massage as ongoing wellness practice.
Needs change with life stages and activities
Preventive regular sessions optimal
Self-awareness develops through bodywork
Connection to body deepens
Investment in long-term health and well-being

Receiving Massage Effectively:
Optimizing your massage experience.
Clear communication about preferences
Arriving hydrated and not rushed
Breathing deeply during session
Processing sessions with rest and water
Giving feedback helps therapist help you`,
      keyTerms: [
        { term: 'clinical massage', definition: 'Treatment-oriented massage with documented outcomes for specific conditions' },
        { term: 'foam rolling', definition: 'Self-myofascial release technique using a foam cylinder' },
      ],
      analogies: [
        'Self-massage is like flossing - daily maintenance between professional cleanings.',
        'Your body is like a garden - massage helps remove the weeds of tension.',
      ],
      examples: [
        'Clinical massage may be covered by insurance with prescription',
        'Foam rolling before workouts prevents injury',
        'Emotional release during massage is normal and healthy',
      ],
      patientCounselingPoints: [
        'Look for therapists with clinical training',
        'May require prescription for insurance coverage',
        'Active participation includes home exercises',
        'Learn proper technique to avoid injury',
        'Consistency more important than intensity',
        'Allow emotions to arise if they do',
        'Trust your body\'s process',
        'Inform all healthcare providers about massage therapy',
        'Schedule regular sessions even when pain-free',
        'Develop relationship with trusted therapist',
        'Body awareness enhances all aspects of life',
        'Speak up about pressure, temperature, music',
        'Don\'t eat immediately before session',
        'Arrive early to settle in',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['massage', 'bodywork', 'swedish-massage', 'deep-tissue', 'sports-massage'],
    keywords: ['massage', 'bodywork', 'trigger-point', 'myofascial-release', 'lymphatic-drainage'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default massageExpanded;
