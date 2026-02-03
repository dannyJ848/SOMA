/**
 * Rash Identification - Physical Examination
 */

import { EducationalContent } from '../../types';

export const rashIdentification: EducationalContent = {
  id: 'skin-rash-identification',
  type: 'process',
  name: 'Rash Identification',
  alternateNames: ['Dermatological Assessment', 'Exanthem Evaluation', 'Skin Eruption Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'Rash identification looks at skin eruptions to find the cause and guide treatment.',
      explanation: '## Understanding Rashes\n\nA rash is a change in skin color or texture. Doctors examine rashes to find causes like infections, allergies, or diseases.\n\n### Questions Doctors Ask\n\n**When did it start?**\n- Sudden or gradual onset\n\n**Where is it located?**\n- One area or spread?\n- Symmetric or one-sided?\n\n**Does it itch?**\n- Itchy rashes often allergic\n- Painful rashes may be infection\n\n**Any new products?**\n- Soaps, lotions, plants\n- New medications\n\n### Common Rash Types\n\n**Red and itchy:**\n- Eczema, allergies, hives\n\n**Blisters:**\n- Chickenpox, shingles, poison ivy\n\n**Scaly:**\n- Psoriasis, ringworm\n\n**Spots:**\n- Measles, allergic reactions\n\n### When to Worry\n\n- Fever with rash\n- Rapidly spreading\n- Involves eyes or mouth\n- Shortness of breath',

      keyTerms: [
        { term: 'rash', definition: 'Change in skin appearance' },
        { term: 'exanthem', definition: 'Widespread rash' },
        { term: 'hives', definition: 'Itchy, raised welts' },
        { term: 'eczema', definition: 'Itchy, inflamed skin condition' },
      ],

      analogies: [
        'A rash is like a warning light on your car - it signals something else is going on.',
      ],

      examples: [
        'Itchy red bumps after hiking suggest poison ivy.',
        'Painful stripe of blisters suggests shingles.',
      ],

      patientCounselingPoints: [
        'Do not scratch rashes - it can cause infection.',
        'Take photos to track changes.',
        'Note any new products or foods before the rash.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic rash evaluation uses morphology, distribution, and associated symptoms to identify etiology.',
      explanation: '## Systematic Approach\n\n**History:**\n- Onset and progression\n- Associated symptoms\n- Exposures\n- Medications\n- Travel\n\n**Morphology:**\n- Macular, papular, vesicular\n- Scaling, crusting\n- Color changes\n\n**Distribution:**\n- Symmetric vs asymmetric\n- Sun-exposed vs covered\n- Dermatomal\n- Flexural vs extensor\n\n**Associated Signs:**\n- Fever\n- Mucosal involvement\n- Lymphadenopathy\n- Arthritis\n\n### Common Patterns\n\n**Morbilliform:** Measles-like, maculopapular, viral/drug\n**Urticarial:** Hives, wheals, allergic\n**Vesicular:** Blisters, viral/bullous disease\n**Pustular:** Pus-filled, bacterial\n**Petechial:** Non-blanching, serious\n**Erythema multiforme:** Target lesions',

      keyTerms: [
        { term: 'morbilliform', definition: 'Measles-like rash' },
        { term: 'urticarial', definition: 'Hives-like' },
        { term: 'dermatomal', definition: 'Following nerve distribution' },
        { term: 'petechial', definition: 'Small hemorrhagic spots' },
      ],

      examples: [
        'Dermatal blisters suggest shingles (herpes zoster).',
        'Target lesions suggest erythema multiforme.',
        'Butterfly facial rash suggests lupus.',
      ],

      clinicalNotes: 'Petechial rash with fever is emergency - consider meningococcemia.',
    },

    3: {
      level: 3,
      summary: 'Advanced rash diagnosis differentiates infectious, inflammatory, and drug-induced eruptions through pattern recognition.',
      explanation: '## Infectious Rashes\n\n**Viral:**\n- Measles: Koplik spots, cephalocaudal\n- Rubella: fine, pink, lymphadenopathy\n- Parvovirus: slapped cheek, reticular\n- HHV-6: roseola (after fever)\n\n**Bacterial:**\n- Scarlet fever: sandpaper rash\n- Toxic shock: diffuse erythema\n- Meningococcemia: petechiae\n\n**Fungal:**\n- Tinea corporis: annular, scaly\n- Tinea cruris: groin, sparing scrotum\n\n## Inflammatory\n\n**Psoriasis:**\n- Erythematous plaques\n- Silvery scale\n- Extensor surfaces\n\n**Lichen planus:**\n- Purple, polygonal, pruritic\n- Wrists, ankles\n\n**Atopic dermatitis:**\n- Flexural\n- Lichenified\n\n## Drug Eruptions\n\n**Exanthematous:**\n- Morbilliform\n- Most common\n\n**Urticarial:**\n- Immediate or delayed\n\n**SJS/TEN:**\n- Mucosal involvement\n- Emergency',

      keyTerms: [
        { term: 'Koplik spots', definition: 'Measles enanthem' },
        { term: 'SJS', definition: 'Stevens-Johnson syndrome' },
        { term: 'TEN', definition: 'Toxic epidermal necrolysis' },
        { term: 'enanthem', definition: 'Rash on mucous membranes' },
      ],

      examples: [
        'Sandpaper rash with strawberry tongue suggests scarlet fever.',
        'Dermatal vesicles suggest zoster.',
        'Purple polygonal pruritic papules suggest lichen planus.',
      ],

      clinicalNotes: 'SJS/TEN is medical emergency with high mortality - discontinue offending drug immediately.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of rash findings with laboratory testing and management of dermatologic emergencies.',
      explanation: '## Diagnostic Testing\n\n**KOH prep:** Fungal hyphae\n**Tzanck smear:** Multinucleated giant cells\n**Culture:** Bacterial, viral\n**Biopsy:** Histopathology\n**Blood tests:** Specific antibodies\n\n## Dermatologic Emergencies\n\n**SJS/TEN:**\n- Mucosal involvement\n- Skin sloughing\n- Fluid management\n- Burn unit\n\n**Toxic Shock:**\n- Diffuse erythema\n- Hypotension\n- Multi-organ\n\n**Necrotizing Fasciitis:**\n- Severe pain\n- Rapid spread\n- Surgical emergency\n\n**Meningococcemia:**\n- Petechial/purpuric\n- Septic shock\n- Immediate antibiotics',

      keyTerms: [
        { term: 'KOH', definition: 'Potassium hydroxide preparation' },
        { term: 'Tzanck', definition: 'Cytologic smear for herpes' },
        { term: 'necrotizing fasciitis', definition: 'Severe soft tissue infection' },
      ],

      clinicalNotes: 'Pain out of proportion to skin findings suggests necrotizing fasciitis.',
    },

    5: {
      level: 5,
      summary: 'Expert dermatologic assessment including advanced diagnostics and complex inflammatory skin diseases.',
      explanation: '## Advanced Diagnostics\n\n**Direct Immunofluorescence:**\n- Autoimmune bullous diseases\n- Lupus band test\n\n**PCR:**\n- Viral identification\n- Rapid, sensitive\n\n**Patch Testing:**\n- Contact dermatitis\n- Allergen identification\n\n## Complex Diseases\n\n**Autoimmune Blistering:**\n- Pemphigus vulgaris\n- Bullous pemphigoid\n- Dermatitis herpetiformis\n\n**Vasculitis:**\n- Palpable purpura\n- Henoch-Schonlein purpura\n- ANCA-associated\n\n**Cutaneous T-cell Lymphoma:**\n- Mycosis fungoides\n- Sezary syndrome\n\n### Multidisciplinary Care\n- Rheumatology\n- Hematology/oncology\n- Allergy/immunology',

      keyTerms: [
        { term: 'immunofluorescence', definition: 'Antibody staining technique' },
        { term: 'pemphigus', definition: 'Autoimmune blistering disease' },
        { term: 'mycosis fungoides', definition: 'Cutaneous T-cell lymphoma' },
      ],

      clinicalNotes: 'Direct immunofluorescence is gold standard for autoimmune blistering diseases.',
    },
  },

  media: [],

  citations: [
    {
      id: 'derm-text',
      type: 'textbook',
      title: 'Clinical Dermatology',
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'skin-lesion-assessment', targetType: 'process', relationship: 'sibling', label: 'Lesion Assessment' },
    { targetId: 'dermatology-rashes', targetType: 'topic', relationship: 'related', label: 'Dermatology' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['physical-examination', 'dermatology'],
    keywords: ['rash', 'skin', 'dermatology', 'exanthem'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rashIdentification;
