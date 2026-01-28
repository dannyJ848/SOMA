/**
 * Wound Evaluation - Physical Examination
 */

import { EducationalContent } from '../../types';

export const woundEvaluation: EducationalContent = {
  id: 'skin-wound-evaluation',
  type: 'process',
  name: 'Wound Evaluation',
  alternateNames: ['Wound Assessment', 'Wound Care Exam', 'Skin Wound Inspection'],

  levels: {
    1: {
      level: 1,
      summary: 'Wound evaluation checks injuries to the skin to promote healing and prevent infection.',
      explanation: '## Checking Wounds\n\nA wound is a break in the skin. Proper evaluation helps wounds heal well.\n\n### What Is Checked\n\n**Size:**\n- How long, wide, and deep\n- Measured with ruler\n\n**Location:**\n- Where on the body\n- Over bone or joint?\n\n**Type:**\n- Cut, scrape, puncture, or sore\n\n**Appearance:**\n- Clean or dirty\n- Signs of infection\n- Healing tissue\n\n### Signs of Healing\n\n**Good signs:**\n- Pink, moist tissue\n- Decreasing size\n- Less drainage\n\n**Warning signs:**\n- Increasing redness\n- Swelling or warmth\n- Bad odor\n- More pain\n\n### Common Wound Types\n\n**Cuts (lacerations):**\n- From sharp objects\n- May need stitches\n\n**Scrapes (abrasions):**\n- Surface damage\n- Usually heal on own\n\n**Pressure sores:**\n- From pressure on skin\n- Common over bony areas\n\n**Diabetic ulcers:**\n- On feet\n- Need special care',

      keyTerms: [
        { term: 'wound', definition: 'Break in skin integrity' },
        { term: 'laceration', definition: 'Cut or tear in skin' },
        { term: 'abrasion', definition: 'Scrape of skin surface' },
        { term: 'ulcer', definition: 'Open sore that does not heal' },
        { term: 'granulation', definition: 'Pink healing tissue' },
      ],

      analogies: [
        'Wound healing is like road repair - debris removed, then new surface built.',
      ],

      examples: [
        'Red streaks from wound suggest lymphangitis.',
        'Black tissue in wound is necrotic and needs removal.',
      ],

      patientCounselingPoints: [
        'Keep wounds clean and dry.',
        'Watch for signs of infection.',
        'Elevate wounds when possible.',
        'Good nutrition helps healing.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic wound assessment documents size, depth, tissue types, and complications to guide treatment.',
      explanation: '## Wound Assessment\n\n**Location:**\n- Anatomical site\n- Over bony prominence\n- Vascular supply\n\n**Measurement:**\n- Length x width x depth\n- Undermining (cm at clock positions)\n- Track tunneling\n\n**Tissue Types:**\n- Epithelial (pink, migrating)\n- Granulation (beefy red)\n- Slough (yellow, non-viable)\n- Eschar (black, necrotic)\n\n**Exudate:**\n- Amount: none, scant, moderate, heavy\n- Type: serous, sanguineous, serosanguineous, purulent\n\n**Periwound:**\n- Color, warmth, edema\n- Induration\n- Erythema\n- Maceration\n\n**Pain:**\n- 0-10 scale\n- Type\n- With dressing change\n\n### Wound Classification\n\n**Partial thickness:**\n- Epidermis and/or dermis\n\n**Full thickness:**\n- Through dermis\n- Into subcutaneous tissue',

      keyTerms: [
        { term: 'undermining', definition: 'Tissue destruction under wound edge' },
        { term: 'tunneling', definition: 'Passage through tissue' },
        { term: 'slough', definition: 'Yellow non-viable tissue' },
        { term: 'eschar', definition: 'Black necrotic tissue' },
        { term: 'maceration', definition: 'Softening from moisture' },
      ],

      examples: [
        'Heavy exudate requires absorbent dressing.',
        'Black eschar should not be removed from heel without perfusion.',
      ],

      clinicalNotes: 'Always measure undermining in clock-face positions.',
    },

    3: {
      level: 3,
      summary: 'Advanced wound evaluation identifies infection, ischemia, and underlying pathology affecting healing.',
      explanation: '## Infection Assessment\n\n**Local Signs:**\n- Increasing erythema\n- Warmth\n- Edema\n- Purulent drainage\n- Malodor\n- Delayed healing\n\n**Systemic Signs:**\n- Fever\n- Leukocytosis\n- Increased pain\n\n**Laboratory:**\n- Wound culture\n- Blood cultures if systemic\n\n## Ischemia Assessment\n\n**Signs:**\n- Pale or dusky wound bed\n- Minimal exudate\n- Pain at rest\n- Decreased pulses\n\n**Testing:**\n- ABI\n- Toe pressures\n- Transcutaneous oxygen\n- Arterial Doppler\n\n## Pressure Injury Staging\n\n**Stage 1:**\n- Non-blanchable erythema\n\n**Stage 2:**\n- Partial thickness\n\n**Stage 3:**\n- Full thickness, no bone/tendon\n\n**Stage 4:**\n- Full thickness with bone/tendon\n\n**Unstageable:**\n- Slough/eschar covers\n\n**Deep tissue:**\n- Purple/maroon intact skin',

      keyTerms: [
        { term: 'ABI', definition: 'Ankle-brachial index' },
        { term: 'pressure injury', definition: 'Pressure ulcer/pressure sore' },
        { term: 'non-blanchable', definition: 'Redness that does not fade with pressure' },
      ],

      examples: [
        'Deep tissue injury may evolve over days to visible wound.',
        'ABI less than 0.5 suggests poor wound healing potential.',
      ],

      clinicalNotes: 'Never stage eschar-covered wounds - debride to determine true depth.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of wound assessment with treatment planning and healing optimization.',
      explanation: '## Wound Bed Preparation\n\n**TIME Principles:**\n- T: Tissue (remove non-viable)\n- I: Infection/inflammation\n- M: Moisture balance\n- E: Edge (non-advancing)\n\n## Debridement Types\n\n**Autolytic:**\n- Dressings support natural process\n\n**Enzymatic:**\n- Topical enzymes\n\n**Mechanical:**\n- Wet-to-dry, irrigation\n\n**Sharp:**\n- Scalpel, scissors\n\n**Surgical:**\n- OR debridement\n\n## Dressing Selection\n\n**Hydrogel:**\n- Moisture to dry wounds\n\n**Hydrocolloid:**\n- Light exudate\n\n**Foam:**\n- Moderate exudate\n\n**Alginate:**\n- Heavy exudate\n\n**Silver:**\n- Antimicrobial\n\n**Collagenase:**\n- Enzymatic debridement',

      keyTerms: [
        { term: 'debridement', definition: 'Removal of non-viable tissue' },
        { term: 'exudate', definition: 'Fluid from wound' },
        { term: 'TIME', definition: 'Wound bed preparation framework' },
      ],

      examples: [
        'Moisture balance is key - too dry or too wet impairs healing.',
      ],

      clinicalNotes: 'Wounds heal from edges inward and from bottom upward.',
    },

    5: {
      level: 5,
      summary: 'Expert wound management including advanced therapies and complex non-healing wounds.',
      explanation: '## Advanced Therapies\n\n**Negative Pressure Wound Therapy:**\n- Promotes granulation\n- Reduces edema\n- Contraindications\n\n**Hyperbaric Oxygen:**\n- Poor perfusion\n- Osteomyelitis\n- Diabetic ulcers\n\n**Skin Substitutes:**\n- Apligraf\n- Oasis\n- Integra\n\n**Growth Factors:**\n- PDGF (becaplermin)\n\n**Cellular/Tissue Products:**\n- Amniotic membranes\n- PRP\n\n## Complex Wounds\n\n**Diabetic Foot Ulcers:**\n- Offloading essential\n- Vascular assessment\n- Infection control\n\n**Venous Leg Ulcers:**\n- Compression therapy\n- Elevation\n\n**Arterial Ulcers:**\n- Revascularization\n- Protection\n\n**Osteomyelitis:**\n- MRI diagnosis\n- Long-term antibiotics\n- Surgical debridement',

      keyTerms: [
        { term: 'NPWT', definition: 'Negative pressure wound therapy' },
        { term: 'offloading', definition: 'Relieving pressure from wound' },
        { term: 'ostemyelitis', definition: 'Bone infection' },
      ],

      clinicalNotes: 'Offloading is the single most important intervention for diabetic foot ulcers.',
    },
  },

  media: [],

  citations: [
    {
      id: 'wound-care',
      type: 'textbook',
      title: 'Wound Care Essentials',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'skin-lesion-assessment', targetType: 'process', relationship: 'sibling', label: 'Lesion Assessment' },
    { targetId: 'wound-care', targetType: 'topic', relationship: 'related', label: 'Wound Care' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['physical-examination', 'wound-care'],
    keywords: ['wound', 'ulcer', 'healing', 'dressing'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundEvaluation;
