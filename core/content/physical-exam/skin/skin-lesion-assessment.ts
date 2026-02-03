/**
 * Skin Lesion Assessment - Physical Examination
 */

import { EducationalContent } from '../../types';

export const skinLesionAssessment: EducationalContent = {
  id: 'skin-lesion-assessment',
  type: 'process',
  name: 'Skin Lesion Assessment',
  alternateNames: ['Dermatological Exam', 'Skin Cancer Screening', 'Lesion Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Skin lesion assessment examines spots, moles, and growths on your skin to check for skin cancer or other problems.',
      explanation: '## Checking Your Skin\n\nDoctors examine your skin to check moles, spots, and growths. This helps find skin cancer early when it is easier to treat.\n\n### The ABCDE Rule for Moles\n\n**A - Asymmetry:**\n- One half does not match the other\n- Normal moles are usually round\n\n**B - Border:**\n- Ragged, notched, or blurred edges\n- Normal moles have smooth edges\n\n**C - Color:**\n- Different colors or uneven color\n- Normal moles are one color\n\n**D - Diameter:**\n- Larger than 6mm (pencil eraser)\n- Some melanomas are smaller\n\n**E - Evolving:**\n- Changing in size, shape, or color\n- New symptoms like bleeding\n\n### Other Warning Signs\n\n- A sore that does not heal\n- Redness or swelling beyond border\n- Itching or tenderness\n- Oozing or bleeding\n\n### Why Check Skin?\n\nSkin cancer is common but very treatable when found early. Regular checks help catch problems early.',

      keyTerms: [
        { term: 'lesion', definition: 'Any abnormal area of tissue' },
        { term: 'melanoma', definition: 'Serious type of skin cancer' },
        { term: 'asymmetry', definition: 'Two halves do not match' },
        { term: 'nevus', definition: 'Medical term for mole' },
      ],

      analogies: [
        'The ABCDE rule is like a checklist for spotting trouble on your skin.',
      ],

      examples: [
        'A changing mole needs evaluation for melanoma.',
        'A pearly bump with visible blood vessels might be basal cell carcinoma.',
      ],

      patientCounselingPoints: [
        'Check your skin monthly for new or changing spots.',
        'See a doctor if you notice any ABCDE changes.',
        'Use sunscreen to protect your skin.',
        'Fair-skinned people need more frequent checks.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic skin examination uses morphology and pattern recognition to identify benign and malignant lesions.',
      explanation: '## Primary Lesion Types\n\n**Macule:** Flat, <1cm, color change\n**Patch:** Flat, >1cm\n**Papule:** Raised, <1cm, solid\n**Plaque:** Raised, >1cm, flat top\n**Nodule:** Raised, deeper, solid\n**Tumor:** Large nodule\n**Vesicle:** Fluid-filled, <1cm\n**Bulla:** Fluid-filled, >1cm\n**Pustule:** Pus-filled\n**Wheal:** Transient edema\n\n## Secondary Changes\n- Scale\n- Crust\n- Erosion\n- Ulcer\n- Scar\n- Atrophy\n\n## Skin Cancer Types\n\n**Basal Cell Carcinoma:**\n- Most common\n- Pearly papule\n- Telangiectasias\n- Rolled border\n- Central ulceration\n\n**Squamous Cell Carcinoma:**\n- Scaly, red patch\n- May crust or bleed\n- Faster growing\n\n**Melanoma:**\n- ABCDE criteria\n- Ugly duckling sign\n- Can arise in existing nevi',

      keyTerms: [
        { term: 'morphology', definition: 'Study of form and structure' },
        { term: 'telangiectasia', definition: 'Visible small blood vessels' },
        { term: 'ugly duckling sign', definition: 'Mole that looks different from others' },
      ],

      examples: [
        'Basal cell: pearly papule with rolled border.',
        'Squamous cell: scaly erythematous patch.',
        'Melanoma: asymmetric, multicolored, evolving.',
      ],

      clinicalNotes: 'Document size in mm, color, border, and any changes over time.',
    },

    3: {
      level: 3,
      summary: 'Advanced skin assessment uses dermoscopy and diagnostic criteria to differentiate benign from malignant lesions.',
      explanation: '## Dermoscopy\n\n**Non-polarized:**\n- Contact with gel\n- Surface visualization\n\n**Polarized:**\n- No contact needed\n- Deeper structures visible\n\n### Melanoma Patterns\n- Atypical pigment network\n- Blue-white veil\n- Irregular dots/globules\n- Regression structures\n- Irregular streaks\n- Atypical vessels\n\n### Benign Patterns\n- Symmetric network\n- Regular dots/globules\n- Homogeneous pattern\n- Typical vessels\n\n### Diagnostic Algorithms\n\n**ABCDE (clinical)**\n**7-point checklist (dermoscopy)**\n**Menzies method**\n**Pattern analysis**\n\n### Risk Assessment\n- Family history\n- Personal history\n- Number of nevi\n- Atypical nevi\n- Sun exposure\n- Skin type',

      keyTerms: [
        { term: 'dermoscopy', definition: 'Magnified skin examination' },
        { term: 'pigment network', definition: 'Pattern of melanin in epidermis' },
        { term: 'blue-white veil', definition: 'Melanoma dermoscopic feature' },
      ],

      examples: [
        'Blue-white veil strongly suggests melanoma.',
        'Regular network suggests benign nevus.',
      ],

      clinicalNotes: 'Dermoscopy improves diagnostic accuracy for pigmented lesions.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of skin examination with biopsy techniques and management of suspicious lesions.',
      explanation: '## Biopsy Techniques\n\n**Shave:**\n- Superficial lesions\n- Quick, simple\n\n**Punch:**\n- Full thickness\n- 2-8mm\n- Good for diagnosis\n\n**Excisional:**\n- Complete removal\n- Lesion <1cm\n- Definitive treatment\n\n**Incisional:**\n- Large lesions\n- Representative sample\n\n### When to Biopsy\n- ABCDE features\n- New lesion after age 40\n- Changing lesion\n- Non-healing sore\n\n### Staging\n- Breslow thickness\n- Ulceration\n- Mitotic rate\n- Lymph node status\n- Metastasis\n\n### Follow-up\n- Regular skin checks\n- Photography for comparison\n- Patient self-examination\n- Sun protection education',

      keyTerms: [
        { term: 'Breslow thickness', definition: 'Depth of melanoma invasion' },
        { term: 'mitotic rate', definition: 'Cell division activity' },
        { term: 'sentinel node', definition: 'First lymph node draining area' },
      ],

      clinicalNotes: 'Excisional biopsy preferred for suspected melanoma to measure Breslow thickness.',
    },

    5: {
      level: 5,
      summary: 'Expert skin assessment including total body photography, advanced imaging, and complex lesion management.',
      explanation: '## Advanced Techniques\n\n**Total Body Photography:**\n- Baseline documentation\n- Serial comparison\n- High-risk patients\n- Mole mapping\n\n**Reflectance Confocal Microscopy:**\n- In vivo cellular imaging\n- Non-invasive\n- Reduce unnecessary biopsies\n\n**Optical Coherence Tomography:**\n- Cross-sectional imaging\n- Non-melanoma skin cancer\n\n**Artificial Intelligence:**\n- Image analysis\n- Decision support\n- Telemedicine applications\n\n### Complex Cases\n- Dysplastic nevus syndrome\n- Transplant patients\n- Immunosuppression\n- Genetic syndromes\n\n### Multidisciplinary Care\n- Dermatology\n- Surgical oncology\n- Medical oncology\n- Radiation oncology',

      keyTerms: [
        { term: 'RCM', definition: 'Reflectance confocal microscopy' },
        { term: 'OCT', definition: 'Optical coherence tomography' },
        { term: 'dysplastic nevus', definition: 'Atypical mole with abnormal features' },
      ],

      clinicalNotes: 'AI dermoscopy systems show promise but should augment not replace clinical judgment.',
    },
  },

  media: [],

  citations: [
    {
      id: 'derm-atlas',
      type: 'textbook',
      title: 'Dermoscopy: The Essentials',
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'skin-rash-identification', targetType: 'process', relationship: 'sibling', label: 'Rash Identification' },
    { targetId: 'dermatology-melanoma', targetType: 'topic', relationship: 'related', label: 'Melanoma' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['physical-examination', 'dermatology'],
    keywords: ['skin', 'melanoma', 'lesion', 'dermoscopy'],
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

export default skinLesionAssessment;
