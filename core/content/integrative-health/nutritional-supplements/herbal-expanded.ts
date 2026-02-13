import { EducationalContent } from '../../types';

export const herbalExpanded: EducationalContent = {
  id: 'herbal-expanded',
  type: 'topic',
  name: 'Herbal Medicine Guide',
  alternateNames: ['Herbal Medicine', 'Botanical Medicine', 'Phytotherapy'],
  levels: {
    1: {
      level: 1,
      summary: 'Herbal medicine uses plants or plant extracts to treat illness and enhance health. It\'s the oldest form of healthcare known to humanity and forms the basis for many modern pharmaceuticals like aspirin from willow bark.',
      explanation: `What is Herbal Medicine:
Herbal medicine uses plants or plant extracts to treat illness and enhance health. It's the oldest form of healthcare known to humanity and forms the basis for many modern pharmaceuticals.
Plants contain complex mixtures of active compounds
Traditional use spans all cultures and thousands of years
Many drugs originated from plant compounds (aspirin from willow bark)
Whole herbs may have advantages over isolated compounds

Herbal Preparations:
Different ways herbs are prepared for use.
Teas/infusions: dried herbs steeped in hot water
Tinctures: alcohol or glycerin extracts
Capsules/tablets: powdered herb or extract
Topical: creams, salves, oils
Essential oils: highly concentrated plant extracts

Herb Quality and Sourcing:
Not all herbal products are created equal.
Growing conditions affect medicinal compound content
Proper harvesting and processing preserves potency
Contamination with heavy metals or adulterants occurs
Standardization ensures consistent dosing

Safety Considerations:
Herbs can have side effects and interactions.
"Natural" doesn't automatically mean safe
Herbs can interact with medications
Some herbs are toxic in high doses
Allergic reactions possible, especially to related plants`,
      keyTerms: [
        { term: 'phytotherapy', definition: 'The use of plants or plant extracts for medicinal purposes' },
        { term: 'tincture', definition: 'An extract of a plant made by soaking it in alcohol or glycerin' },
        { term: 'standardization', definition: 'Process ensuring consistent levels of active compounds in herbal products' },
      ],
      analogies: [
        'Herbal medicine is like food for your body\'s healing systems.',
      ],
      examples: [
        'Drinking chamomile tea for relaxation and sleep',
        'Using ginger tea for nausea',
        'Applying aloe vera gel to minor burns',
      ],
      patientCounselingPoints: [
        'Consult healthcare provider before starting herbal remedies',
        'Research potential interactions with medications',
        'Choose quality products from reputable sources',
        'Start with one herb at a time',
        'Be aware of personal plant allergies',
      ],
    },
    2: {
      level: 2,
      summary: 'Adaptogenic herbs help the body adapt to stress. Major adaptogens include Ashwagandha (cortisol reduction), Rhodiola Rosea (fatigue), Holy Basil/Tulsi (stress balance), Panax Ginseng (energy), and Cordyceps (athletic performance).',
      explanation: `Ashwagandha:
Ancient Ayurvedic herb for stress and vitality.
Reduces cortisol levels and perceived stress
Improves sleep quality and energy levels
May enhance strength and muscle recovery
Traditional use for over 3,000 years

Rhodiola Rosea:
Arctic adaptogen for fatigue and mental performance.
Improves mental performance under stress
Reduces fatigue and exhaustion
May improve exercise performance
Traditional use in Scandinavia and Russia

Holy Basil (Tulsi):
Sacred plant with multiple health benefits.
Balances cortisol and stress response
Supports healthy blood sugar levels
Antioxidant and anti-inflammatory properties
Considered sacred in Hindu tradition

Panax Ginseng:
Traditional energy and vitality herb.
Improves fatigue and physical performance
May enhance cognitive function
Immune system support
Different types (Asian, American) have different properties

Cordyceps:
Medicinal mushroom for energy and performance.
Enhances ATP production for cellular energy
Improves oxygen utilization and VO2 max
Traditional use for fatigue and weakness
Research for athletic performance`,
      keyTerms: [
        { term: 'adaptogen', definition: 'Natural substance that helps the body adapt to stress and normalize bodily functions' },
        { term: 'cortisol', definition: 'Stress hormone that adaptogens like ashwagandha can help reduce' },
        { term: 'ATP', definition: 'Adenosine triphosphate - the energy currency of cells that cordyceps enhances' },
      ],
      analogies: [
        'Adaptogens are like a thermostat for your stress response.',
      ],
      examples: [
        '300-600mg of ashwagandha root extract daily',
        '200-400mg Rhodiola standardized to 3% rosavins',
        'Tea form of Holy Basil for daily use',
      ],
      patientCounselingPoints: [
        '300-600mg of ashwagandha root extract daily',
        'KSM-66 and Sensoril are well-researched extracts',
        'Can be taken morning or evening',
        'Avoid in pregnancy unless supervised',
        '200-400mg standardized to 3% rosavins',
        'Take earlier in day as may be energizing',
        'Cycling recommended (6 weeks on, 1-2 weeks off)',
      ],
    },
    3: {
      level: 3,
      summary: 'Herbs for specific systems include Sleep/Relaxation (Valerian, Chamomile, Passionflower), Digestive Health (Ginger, Peppermint, Fennel), Immune Support (Echinacea, Elderberry, Astragalus), Joint/Muscle Support (Turmeric, Boswellia), and Cognitive Function (Ginkgo, Bacopa).',
      explanation: `Sleep and Relaxation:
Calming herbs for rest and restoration.
Valerian root improves sleep quality
Chamomile gentle for anxiety and sleep
Passionflower effective for anxiety
Lemon balm calming for nervous stomach

Digestive Health:
Herbs supporting digestion and gut health.
Ginger prevents nausea and stimulates digestion
Peppermint relieves IBS symptoms
Fennel seed reduces gas and bloating
Dandelion root supports liver and digestion

Immune Support:
Herbs for immune function and resistance.
Echinacea reduces cold duration and severity
Elderberry shortens flu duration
Astragalus for immune enhancement
Garlic broad antimicrobial effects

Joint and Muscle Support:
Anti-inflammatory herbs for pain relief.
Turmeric (curcumin) powerful anti-inflammatory
Boswellia reduces joint inflammation
Devil's claw for back and joint pain
White willow bark natural pain reliever

Cognitive Function:
Herbs supporting brain health and memory.
Ginkgo biloba improves circulation and memory
Bacopa enhances cognitive performance
Lion's mane supports nerve growth
Gotu kola traditional brain tonic`,
      keyTerms: [
        { term: 'valerian', definition: 'Herb used for sleep disorders and anxiety' },
        { term: 'peppermint oil', definition: 'Essential oil used for IBS and digestive issues' },
        { term: 'curcumin', definition: 'Active anti-inflammatory compound in turmeric' },
      ],
      analogies: [
        'Herbs work like nature\'s pharmacy, targeting specific body systems.',
      ],
      examples: [
        'Valerian: 300-600mg 30-60 minutes before bed',
        'Chamomile tea 1-3 cups daily',
        'Ginger: 1-2g daily or tea',
        'Turmeric with piperine for absorption',
      ],
      patientCounselingPoints: [
        'Valerian: 300-600mg 30-60 minutes before bed',
        'Chamomile tea 1-3 cups daily',
        'Passionflower extract 300-400mg',
        'Combine herbs for synergistic effects',
        'Ginger: 1-2g daily or tea',
        'Peppermint oil capsules for IBS',
        'Echinacea at first sign of cold',
        'Elderberry syrup during illness',
        'Turmeric with piperine for absorption',
        'Boswellia standardized to boswellic acids',
      ],
    },
    4: {
      level: 4,
      summary: 'Herbal traditions include Ayurvedic Herbs (individualized by dosha), Traditional Chinese Medicine (herbal formulas), Western Herbalism (evidence-based), and Native American traditions (sacred plant relationship).',
      explanation: `Ayurvedic Herbs:
Traditional Indian herbal medicine.
Individualized based on dosha (constitution)
Ashwagandha, brahmi, triphala common herbs
Herbs often combined in formulas
Emphasis on digestive fire (agni)

Traditional Chinese Medicine (TCM):
Complex system of herbal combinations.
Herbs rarely used singly
Formulas address patterns of disharmony
Consideration of hot/cold, damp/dry qualities
Traditional preparation as decoctions

Western Herbalism:
European and North American herbal traditions.
Combines folk tradition with modern research
Focus on single herbs and simple combinations
Scientific validation increasingly important
Emphasis on whole plant extracts

Native American Traditions:
Indigenous healing plant knowledge.
Sacred relationship with plant medicines
Echinacea, black cohosh, cayenne examples
Spiritual aspects of healing central
Sustainable harvesting and respect essential`,
      keyTerms: [
        { term: 'dosha', definition: 'Ayurvedic constitutional type: vata, pitta, or kapha' },
        { term: 'decoction', definition: 'Concentrated herbal preparation made by boiling herbs in water' },
        { term: 'agni', definition: 'Digestive fire in Ayurvedic medicine - essential for health' },
      ],
      analogies: [
        'Different herbal traditions are like different languages for communicating with plants.',
      ],
      examples: [
        'Work with Ayurvedic practitioner for assessment',
        'Herbs typically prescribed in combinations',
        'Consider your constitution when choosing herbs',
      ],
      patientCounselingPoints: [
        'Work with Ayurvedic practitioner for assessment',
        'Herbs typically prescribed in combinations',
        'Consider your constitution when choosing herbs',
        'Seek qualified TCM practitioner for formulas',
        'Patent formulas available over-the-counter',
        'Custom formulas more precisely targeted',
        'Evidence-based Western herbalism growing',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced applications include Herb-Drug Interactions (St. John\'s Wort), Formulating Herbal Combinations, Seasonal Herbal Use, Growing and Wildcrafting, Herbal Safety and Contraindications, and developing a lifelong relationship with herbs.',
      explanation: `Herb-Drug Interactions:
Critical knowledge for safe herbal use.
St. John's Wort interacts with many medications
Ginkgo, garlic, ginseng may affect bleeding risk
Herbs can affect drug metabolism enzymes
Some herbs potentiate, others reduce drug effects

Formulating Herbal Combinations:
Creating synergistic herbal blends.
Herbs work together synergistically
Traditional formulas provide templates
Consider taste, energetics, and function
Formula may be more effective than single herbs

Seasonal Herbal Use:
Aligning herbal use with natural rhythms.
Spring: detoxification and allergies
Summer: cooling herbs and heat relief
Fall: immune preparation for cold season
Winter: warming, immune-supportive herbs

Growing and Wildcrafting:
Sourcing and preparing your own herbs.
Home cultivation ensures quality and connection
Wildcrafting requires knowledge and ethics
Proper identification absolutely critical
Sustainable harvesting preserves plant populations

Herbal Safety and Contraindications:
Comprehensive safety knowledge.
Certain herbs inappropriate for pregnancy/breastfeeding
Autoimmune conditions require specific caution
Pre-surgery considerations important
Pediatric dosing differs from adult

Lifelong Relationship with Herbs:
Integrating herbs into sustainable lifestyle.
Herbs as food, medicine, and connection to nature
Learning is lifelong process
Relationship with plants deepens with time
Seasonal and life stage changes alter needs`,
      keyTerms: [
        { term: 'wildcrafting', definition: 'Harvesting plants from their natural habitat for food or medicine' },
        { term: 'synergy', definition: 'Combined effect of herbs that is greater than the sum of individual effects' },
        { term: 'cytochrome P450', definition: 'Enzyme system that metabolizes drugs and can be affected by herbs' },
      ],
      analogies: [
        'Herbal combinations are like a symphony - each herb contributes to the whole.',
      ],
      examples: [
        'Inform all healthcare providers about herb use',
        'Research interactions before starting combinations',
        'Be particularly cautious with anticoagulants',
      ],
      patientCounselingPoints: [
        'Inform all healthcare providers about herb use',
        'Research interactions before starting combinations',
        'Be particularly cautious with anticoagulants, anti-epileptics, immunosuppressants',
        'Space herbs and medications by 2+ hours when possible',
        'Study traditional formulas before creating your own',
        'Consider primary herbs and supporting herbs',
        'Usually 3-5 herbs sufficient for most formulas',
        'Adjust herbal protocols with seasons',
        'Start with easy garden herbs (chamomile, peppermint, lemon balm)',
        'Learn from experienced wildcrafters before foraging',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: [],
    topics: ['herbal-medicine', 'botanical-medicine', 'adaptogens', 'supplements'],
    keywords: ['herbal', 'botanical', 'adaptogen', 'ashwagandha', 'turmeric', 'ginger'],
    clinicalRelevance: 'low',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default herbalExpanded;
