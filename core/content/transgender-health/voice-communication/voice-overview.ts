import { EducationalContent } from '../../types';

export const voiceOverviewContent: EducationalContent = {
  id: 'topic-voice-overview',
  type: 'topic',
  name: 'Voice and Communication Overview',
  alternateNames: ['Trans Voice', 'Voice Feminization/Masculinization'],

  levels: {
    1: {
      level: 1,
      summary: 'Many transgender people want their voice to match their gender, and there are ways to change how your voice sounds.',
      explanation: `Your voice is an important part of how you express yourself. For transgender people, having a voice that matches their gender can be very meaningful.

**Options for Changing Voice:**
- Voice training with a speech therapist
- Practice exercises on your own
- Surgery (for raising pitch)

**What Can Change:**
- Pitch (how high or low)
- Speech patterns
- Word choice
- Body language while speaking

Voice training takes practice but many people see great results.`,
      keyTerms: [
        { term: 'voice training', definition: 'Working with a therapist to change how your voice sounds' },
        { term: 'pitch', definition: 'How high or low your voice sounds' },
        { term: 'speech therapist', definition: 'A professional who helps with voice and communication' },
      ],
      analogies: [
        'Voice training is like learning an instrument - with practice, you get better over time.',
      ],
      examples: [
        'A transgender woman might work with a speech therapist to raise her pitch and change her speech patterns.',
      ],
    },
    2: {
      level: 2,
      summary: 'Voice and communication training helps transgender individuals achieve a voice that aligns with their gender identity through pitch, resonance, and other vocal modifications.',
      explanation: `Voice is often an important aspect of gender expression. Both training and surgery are options for transgender individuals.

**For Transfeminine Individuals:**

*Voice Feminization:*
- Hormones do NOT change voice after puberty
- Training can significantly feminize voice
- Targets: Higher pitch, lighter resonance, feminine speech patterns
- Surgery is an option for some

**For Transmasculine Individuals:**

*Voice Masculinization:*
- Testosterone DOES lower voice (usually within 1 year)
- Some may want additional training
- Targets: Masculine speech patterns, confidence

**Components of Gendered Voice:**
- Pitch (fundamental frequency)
- Resonance (where voice resonates)
- Intonation (melody of speech)
- Word choice and phrases
- Non-verbal communication

**Training Options:**
- Speech-language pathologist (SLP)
- Online resources and apps
- Group classes
- Self-guided practice

Consistent practice is key to lasting change.`,
      keyTerms: [
        { term: 'resonance', definition: 'Where the voice vibrates in the body (chest vs. head)' },
        { term: 'intonation', definition: 'The rise and fall of pitch when speaking' },
        { term: 'SLP', definition: 'Speech-language pathologist; professional voice therapist' },
        { term: 'fundamental frequency', definition: 'The base pitch of the voice' },
      ],
    },
    3: {
      level: 3,
      summary: 'Voice modification for transgender individuals involves pitch, resonance, and prosody changes through training with speech-language pathologists and/or surgical intervention, with distinct considerations for feminization versus masculinization.',
      explanation: `Gender-affirming voice work addresses multiple vocal parameters to achieve congruence between voice and gender identity.

**Voice Feminization:**

*Why Training is Needed:*
- Vocal folds elongate during male puberty
- Estrogen does not reverse this
- Training modifies usage patterns

*Parameters:*
- Pitch: Raise fundamental frequency (F0) to ~180-220 Hz range
- Resonance: Shift from chest to head resonance
- Intonation: More varied, expressive patterns
- Articulation: Lighter, more precise
- Non-verbal: Gesture, posture, expression

*Methods:*
- Speech therapy (gold standard)
- Online programs (Christella VoiceUp, etc.)
- Apps and self-study
- Group training

*Surgical Options:*
- Glottoplasty (Wendler technique)
- Cricothyroid approximation
- Raises pitch, may affect range

**Voice Masculinization:**

*Testosterone Effects:*
- Vocal fold thickening
- F0 drops to male range (~100-150 Hz)
- Changes typically occur within 3-12 months
- Irreversible

*Additional Training:*
- May help with resonance, patterns
- Confidence building
- Less commonly sought

**Speech-Language Pathology:**
- Evaluation of current voice
- Goal-setting with patient
- Exercises and techniques
- Progress monitoring
- May require multiple sessions over months`,
      keyTerms: [
        { term: 'F0', definition: 'Fundamental frequency; the base pitch of the voice in Hz' },
        { term: 'glottoplasty', definition: 'Surgery to shorten vocal folds and raise pitch' },
        { term: 'prosody', definition: 'Rhythm, stress, and intonation of speech' },
        { term: 'cricothyroid approximation', definition: 'Voice surgery increasing vocal fold tension' },
      ],
      clinicalNotes: 'Estrogen does not change voice. Refer transfeminine patients to SLP early. Testosterone effects on voice are significant and typically irreversible.',
    },
    4: {
      level: 4,
      summary: 'Voice modification encompasses pitch, resonance, and prosodic changes achieved through speech therapy and/or surgery, with understanding of voice physiology, surgical techniques, and therapy protocols.',
      explanation: `Comprehensive voice care requires understanding of physiology, therapy approaches, and surgical options.

**Voice Physiology:**

*Pitch Determination:*
- Fundamental frequency (F0)
- Determined by vocal fold length, mass, tension
- Female average: 180-230 Hz
- Male average: 100-150 Hz
- Testosterone increases mass/length (lowers pitch)
- Estrogen does NOT reverse

*Resonance:*
- Vocal tract shape affects timbre
- Can be modified by tongue, larynx position
- Chest vs. head resonance distinction

**Therapy Approach:**

*Evaluation:*
- Acoustic analysis (spectrogram, F0)
- Perceptual assessment
- Patient goals
- Functional voice use

*Feminization Techniques:*
- Pitch raising exercises
- Resonance shifting (forward, bright)
- Intonation practice
- Volume and breathiness
- Articulation refinement
- Pragmatic aspects

*Masculinization (if desired):*
- Usually testosterone suffices
- Resonance deepening
- Pattern modification
- Confidence building

**Surgical Options:**

*Glottoplasty (Wendler):*
- Anterior web creation
- Shortens vibrating portion
- Raises F0 50-100 Hz typically
- Variable outcomes
- Voice therapy pre/post important

*CTA (Cricothyroid Approximation):*
- External approach
- Increases vocal fold tension
- Variable, less predictable

*Considerations:*
- Surgery alone may not feminize fully
- Therapy often still needed
- Complications: Voice quality changes
- Revision may be needed

**Outcomes:**
- Most achieve perceptible change with therapy
- Patient satisfaction generally high
- Maintenance practice needed
- Integration into daily life takes time`,
      keyTerms: [
        { term: 'acoustic analysis', definition: 'Objective measurement of voice parameters' },
        { term: 'spectrogram', definition: 'Visual representation of voice frequencies over time' },
        { term: 'anterior web', definition: 'Surgically created connection at front of vocal folds' },
        { term: 'pragmatics', definition: 'How language is used in social contexts' },
      ],
      clinicalNotes: 'Refer early for voice therapy. Voice surgery outcomes variable - therapy pre and post is important. Most patients can achieve significant change with therapy alone.',
    },
    5: {
      level: 5,
      summary: 'Voice modification requires integrated understanding of voice physiology, acoustic parameters, evidence-based therapy protocols, surgical techniques and outcomes, and patient-centered goal setting.',
      explanation: `Expert voice care integrates science, therapy, and surgery for optimal outcomes.

**Voice Science:**

*Pitch Physiology:*
- F0 = rate of vocal fold vibration
- Determined by: Length, mass, tension
- Testosterone: Increases mass/length (F0 decreases 30-50%)
- Estrogen: No effect on post-pubertal vocal folds

*Resonance/Formants:*
- F1, F2 (formant frequencies) affected by vocal tract shape
- Can be modified through articulator positioning
- Key to feminization beyond pitch

*Perception:*
- Gender perception is multifactorial
- Pitch important but not sufficient
- Resonance, intonation, patterns all contribute
- Listeners adapt to speaker

**Therapy Protocols:**

*Evidence-Based Approaches:*
- Relatively limited high-quality research
- Studies support efficacy of therapy
- Group and individual formats effective
- Telehealth shows promise

*Comprehensive Feminization:*
1. Pitch modification: Targeting 180+ Hz
2. Resonance: Forward, bright placement
3. Intonation: More varied patterns
4. Articulation: Precise consonants
5. Volume: Often slightly reduced
6. Rate: Variable effects
7. Language: Vocabulary, tag questions
8. Non-verbal: Gesture, expression

*Masculinization Training:*
- Less commonly needed (T effects strong)
- Targets: Resonance, patterns
- May help with confidence
- Can address any remaining concerns

**Surgical Outcomes:**

*Glottoplasty:*
- Mean F0 increase: Variable (50-100 Hz often cited)
- Studies show improvement in most
- Satisfaction: Generally high when combined with therapy
- Revision rate: 10-20%
- Complications: Voice quality changes, reversal possible

*Long-Term:*
- Maintenance needed
- Voice may fatigue
- Ongoing therapy may help

**Special Considerations:**

*Voice Professionals:*
- Singers, actors, teachers
- Careful planning needed
- May affect range, quality
- Discuss goals thoroughly

*Aging Voice:*
- Changes with age for all
- Consider in long-term planning

*Insurance:*
- Variable coverage for therapy
- Surgery often covered`,
      keyTerms: [
        { term: 'formant frequencies', definition: 'Resonant frequencies of vocal tract; F1, F2 key to vowel perception' },
        { term: 'telehealth voice therapy', definition: 'Voice therapy delivered remotely; evidence supports efficacy' },
        { term: 'vocal fatigue', definition: 'Tiredness of voice with use; may occur with modified voice' },
        { term: 'tag questions', definition: 'Questions added to statements ("right?"); gendered speech pattern' },
      ],
      clinicalNotes: `**Voice Care Pearls:**
- Estrogen does not change post-pubertal voice
- Testosterone reliably lowers pitch
- Voice therapy is first-line for feminization
- Pitch is important but resonance may be more so
- Surgery is an option but therapy still needed
- Refer to experienced voice SLPs
- Most patients can achieve significant, satisfying change
- Maintenance practice needed long-term
- Consider voice professionals' special needs`,
    },
  },

  media: [],
  citations: [
    {
      id: 'voice-therapy',
      type: 'article',
      title: 'Voice and Communication Change for Gender Diverse Individuals',
      source: 'Voice and Speech Review',
      license: 'Copyright',
    },
  ],
  crossReferences: [
    { targetId: 'topic-voice-training', targetType: 'topic', relationship: 'related', label: 'Voice Training' },
  ],
  tags: {
    topics: ['voice', 'communication', 'transgender health'],
    keywords: ['voice therapy', 'voice feminization', 'voice masculinization', 'pitch'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default voiceOverviewContent;
