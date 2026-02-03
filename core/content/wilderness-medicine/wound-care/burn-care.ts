/**
 * Burn Care - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const burnCare: EducationalContent = {
  id: 'wilderness-burn-care',
  type: 'condition',
  name: 'Burn Care',
  alternateNames: ['Thermal Injury', 'Burn Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Burns happen when skin is damaged by heat, chemicals, or electricity. Cool the burn with cool water, cover it, and get medical help for serious burns.',
      explanation: `## Treating Burns

Burns can be minor or very serious depending on their size and depth.

## First Steps
1. **Get away from the source** (fire, hot object)
2. **Cool the burn** with cool (not cold/ice) water for 10-20 minutes
3. **Remove jewelry** near the burn before swelling
4. **Cover loosely** with clean cloth or bandage
5. **Do NOT pop blisters**

## When to Get Help Right Away
- Burns on face, hands, feet, or joints
- Burns that go all the way around an arm or leg
- Large burns (bigger than your palm)
- Burns with white or black skin
- Electrical or chemical burns
- Breathing in smoke

## What NOT to Do
- Don't use ice (causes more damage)
- Don't use butter or oils
- Don't pop blisters
- Don't remove stuck clothing`,
      keyTerms: [
        { term: 'burn', definition: 'Damage to skin from heat, chemicals, or electricity' },
        { term: 'blister', definition: 'Bubble of fluid under the skin from a burn' },
      ],
    },
    2: {
      level: 2,
      summary: 'Burns are classified by depth (first through fourth degree) and size (percent body surface area). Cooling, wound care, and pain management are key first aid steps. Severe burns require fluid resuscitation and specialized care.',
      explanation: `## Burn Classification

### By Depth
- **First degree (Superficial)**: Red, painful, no blisters (sunburn)
- **Second degree (Partial thickness)**: Blisters, very painful, moist
- **Third degree (Full thickness)**: White/brown, leathery, less painful
- **Fourth degree**: Into muscle/bone

### By Size (Rule of Nines)
- Head: 9%
- Each arm: 9%
- Each leg: 18%
- Front trunk: 18%
- Back trunk: 18%
- Palm = 1% (patient's palm)

## First Aid

### Initial Care
1. Stop the burning process
2. Cool with running water 10-20 minutes
3. Remove non-adherent clothing/jewelry
4. Cover with clean, dry dressing
5. Elevate burned extremity

### Do NOT
- Apply ice (causes vasoconstriction, tissue damage)
- Use butter, oils, toothpaste
- Break blisters intentionally
- Remove adherent clothing

## When to Evacuate
- >10% body surface area (adult)
- >5% body surface area (child)
- Face, hands, feet, genitals, joints
- Full thickness burns
- Circumferential burns
- Inhalation injury
- Electrical or chemical burns`,
      keyTerms: [
        { term: 'Rule of Nines', definition: 'Quick method to estimate burn size as percentage of body' },
        { term: 'circumferential burn', definition: 'Burn that goes completely around a limb or trunk' },
      ],
    },
    3: {
      level: 3,
      summary: 'Burn management requires depth and TBSA assessment, initial cooling, pain control, and wound care. Partial thickness burns may be managed in wilderness settings with proper care. Full thickness and large burns require evacuation for fluid resuscitation and possible surgery.',
      explanation: `## Burn Depth Assessment

### Superficial (First Degree)
- Epidermis only
- Erythema, pain
- No blisters
- Heals 3-5 days

### Partial Thickness (Second Degree)
- Superficial partial: into papillary dermis
  - Painful, moist, blisters
  - Heals 7-21 days
- Deep partial: into reticular dermis
  - Less painful, mottled
  - May require grafting

### Full Thickness (Third Degree)
- Through entire dermis
- Painless (nerves destroyed)
- Leathery, waxy, white/brown
- Requires grafting

## Initial Management

### Cooling
- 20 minutes in cool running water
- Effective up to 3 hours post-burn
- Reduces depth of injury
- Avoid hypothermia in large burns

### Pain Management
- Cool water provides initial relief
- NSAIDs and acetaminophen
- Opioids for severe pain
- Cover wound (air exposure increases pain)

### Wound Care
- Clean gently with mild soap
- Intact blisters: leave or aspirate (controversial)
- Apply non-adherent dressing
- Antimicrobial: silver sulfadiazine or honey
- Change dressings daily

## Fluid Resuscitation (Large Burns)
- Needed if >20% TBSA (adults), >10% (children)
- Parkland formula: 4mL x kg x %TBSA in 24 hours
- Half in first 8 hours
- Oral fluids if mild and able to drink`,
      keyTerms: [
        { term: 'TBSA', definition: 'Total Body Surface Area - percentage of body burned' },
        { term: 'Parkland formula', definition: 'Calculation for IV fluid needs in severe burns' },
      ],
      clinicalNotes: 'Cooling is beneficial up to 3 hours post-burn but avoid hypothermia. Blisters larger than 2cm may be aspirated but the roof provides a natural dressing. Circumferential burns may require escharotomy.',
    },
    4: {
      level: 4,
      summary: 'Burns cause local and systemic pathophysiology requiring comprehensive management. Depth and TBSA guide treatment and disposition. Evidence supports early cooling, appropriate wound care, and fluid resuscitation for significant burns. Wilderness considerations include resource limitations and evacuation timing.',
      explanation: `## Burn Pathophysiology

### Local Response
- Coagulation zone: irreversible damage
- Stasis zone: potentially salvageable
- Hyperemia zone: usually recovers

### Systemic Response (Major Burns)
- Capillary leak
- Fluid shifts (edema)
- Hypovoleemia
- Inflammatory response
- Hypermetabolism

## Evidence-Based Cooling

### Benefits
- Reduces tissue damage
- Decreases inflammation
- Provides analgesia
- May reduce scarring

### Parameters
- Temperature: 12-18C (cool running water)
- Duration: 20 minutes optimal
- Timing: beneficial up to 3 hours
- Caution: hypothermia risk if >20% TBSA

## Wound Management Evidence

### Blister Management
| Approach | Rationale |
|----------|-----------|
| Leave intact | Natural barrier |
| Aspirate | Fluid may be inflammatory |
| Debride | Better wound assessment |
- No clear consensus; intact blisters may leave if clean

### Topical Agents
| Agent | Advantages | Disadvantages |
|-------|------------|---------------|
| Silver sulfadiazine | Broad spectrum | May delay healing |
| Mafenide acetate | Penetrates eschar | Painful, metabolic acidosis |
| Medical-grade honey | Natural, antimicrobial | Limited data |
| Hydrocolloid | Moist healing | Not for infected wounds |

## Special Situations

### Circumferential Burns
- Risk of compartment syndrome
- Monitor pulses
- May need escharotomy
- Urgent evacuation

### Inhalation Injury
- Consider if facial burns, singed hair, soot
- May have delayed respiratory failure
- Intubation may become impossible with swelling

### Electrical Burns
- Extent may be hidden
- Cardiac monitoring
- Watch for compartment syndrome
- Myoglobinuria risk`,
      keyTerms: [
        { term: 'escharotomy', definition: 'Surgical incision through burned tissue to release constriction' },
        { term: 'zone of stasis', definition: 'Potentially salvageable tissue around the burn center' },
      ],
      clinicalNotes: 'The zone of stasis can progress to full necrosis with poor early management. Early cooling may salvage this tissue. Electrical burns often have internal injury far exceeding visible damage.',
    },
    5: {
      level: 5,
      summary: 'Burn pathophysiology involves local tissue destruction and systemic inflammatory response. Evidence-based management addresses tissue salvage, fluid resuscitation, and wound care. Major burns require specialized care. Wilderness protocols balance optimal care with resource limitations.',
      explanation: `## Molecular Pathophysiology

### Local Injury Cascade
- Heat protein denaturation
- Cell membrane disruption
- Reactive oxygen species
- Inflammatory mediator release
- Thrombosis and ischemia

### Systemic Response
- Cytokine storm (IL-1, IL-6, TNF-alpha)
- Complement activation
- Capillary leak (hours)
- Hypermetabolism (days to weeks)
- Immunosuppression

## Evidence Synthesis

### Cooling
- RCTs support 20-minute cooling
- Temperature 12-18C optimal
- Later cooling (to 3 hours) still beneficial
- Reduces need for surgery in some studies

### Fluid Resuscitation
- Parkland formula: guideline, not absolute
- Titrate to urine output (0.5mL/kg/hr)
- Avoid over-resuscitation (abdominal compartment)
- Oral resuscitation effective for smaller burns

### Wound Care
- Moist wound healing principles
- Silver-containing dressings: some benefit
- Negative pressure: complex wounds
- Early excision and grafting: major burns

## Advanced Considerations

### Burn Center Criteria
- >10% TBSA partial thickness
- Burns to face, hands, feet, genitals, joints
- Full thickness burns
- Electrical, chemical burns
- Inhalation injury
- Comorbidities

### Resuscitation Endpoints
- Urine output 0.5-1 mL/kg/hr
- MAP >65
- Lactate clearance
- Base deficit improvement

### Complications
| Complication | Timeline | Management |
|--------------|----------|------------|
| Shock | Hours | Fluid resuscitation |
| Infection | Days | Antibiotics, debridement |
| Compartment syndrome | Hours-days | Fasciotomy/escharotomy |
| Scarring/contracture | Weeks-months | Rehabilitation, surgery |

## Wilderness Protocols
- Cooling with available water
- Oral rehydration if able
- Improvised dressings
- Evacuation decision making
- Extended wound care if delayed`,
      keyTerms: [
        { term: 'Parkland formula', definition: '4mL x kg x %TBSA = 24hr fluid requirement' },
        { term: 'burn center', definition: 'Specialized facility for comprehensive burn care' },
      ],
      clinicalNotes: 'Fluid resuscitation calculations are guidelines - titrate to urine output. Over-resuscitation can cause abdominal compartment syndrome and pulmonary edema. Early burn center referral improves outcomes for major burns.',
    },
  },

  media: [],
  citations: [
    {
      id: 'burn-guidelines',
      type: 'article',
      title: 'ISBI Practice Guidelines for Burn Care',
      source: 'Burns',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'parent', label: 'Wound Care' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'trauma'],
    keywords: ['burn', 'thermal injury', 'wound care', 'fluid resuscitation'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default burnCare;
