import { EducationalContent } from '../../types';

export const woundCarePostProcedureContent: EducationalContent = {
  id: 'wound-care-post-procedure',
  type: 'topic',
  name: 'Wound Care After Procedures',
  alternateNames: ['Incision Care', 'Wound Healing', 'Post-Procedure Wound Care'],
  levels: {
    1: {
      level: 1,
      summary: 'Proper wound care helps your incision heal correctly and prevents infection. Your healthcare team will teach you how to care for your specific wound before you go home.',
      explanation: `## Understanding Wound Care

Proper wound care helps your incision heal correctly and prevents infection. Your healthcare team will teach you how to care for your specific wound before you go home.

### Key Points

- Keep wounds clean and protected
- Follow your specific care instructions
- Watch for signs of infection
- Call your doctor with concerns

### Important Terms

- **Incision**: Surgical cut made during procedure
- **Suture**: Stitch holding wound edges together
- **Dressing**: Covering placed over a wound`,
      keyTerms: [
        { term: 'Incision', definition: 'Surgical cut made during procedure' },
        { term: 'Suture', definition: 'Stitch holding wound edges together' },
        { term: 'Dressing', definition: 'Covering placed over a wound' }
      ],
      patientCounselingPoints: [
        'Each type of closure requires different care - follow your specific instructions',
        'Keep your wound care instructions visible for easy reference',
        'Someone can help you with wound care if needed'
      ]
    },
    2: {
      level: 2,
      summary: 'Different types of wound closures and dressings require different care. Understanding what you have helps you care for it properly - sutures, staples, Steri-Strips, tissue glue, and various dressings.',
      explanation: `## Types of Closures and Dressings

Different types of wound closures and dressings require different care. Understanding what you have helps you care for it properly.

### Key Points

- Sutures (stitches) or staples may be used
- Steri-Strips are adhesive tape strips
- Glue closures should not be picked at
- Dressings may be waterproof or not

### Closure Types

**Sutures**
Thread used to close wounds. Can be absorbable (dissolve on their own) or non-absorbable (need removal). Keep clean and dry. Don't pull on them.

**Staples**
Metal clips holding wound edges together. Used for some incisions. Don't remove them yourself - your doctor will take them out.

**Steri-Strips**
Adhesive strips placed over closed incisions. They usually fall off on their own in 1-2 weeks. Don't pull them off prematurely.

**Tissue Glue**
Medical glue sealing the skin. Don't apply ointments or pick at it. It will naturally peel off as the wound heals.

**Dressings**
May be gauze and tape, adhesive strips, or waterproof coverings. Change according to instructions. Some are left in place until follow-up.`,
      keyTerms: [
        { term: 'Absorbable sutures', definition: 'Stitches that dissolve' },
        { term: 'Non-absorbable', definition: 'Stitches needing removal' },
        { term: 'Adhesive', definition: 'Sticky material' },
        { term: 'Waterproof', definition: 'Doesn\'t allow water through' }
      ],
      patientCounselingPoints: [
        'Your doctor will tell you what type of closure you have and how to care for it',
        'Steri-Strips usually fall off on their own - don\'t pull them',
        'If you\'re unsure about your wound care, call your doctor\'s office'
      ]
    },
    3: {
      level: 3,
      summary: 'Daily care of your incision helps it heal properly and prevents complications. This includes hand washing before touching your wound, gently cleaning as directed, applying fresh dressings if needed, and inspecting the wound daily.',
      explanation: `## Daily Wound Care

Daily care of your incision helps it heal properly and prevents complications.

### Key Points

- Wash hands before touching your wound
- Gently clean as directed
- Apply fresh dressings if needed
- Inspect the wound daily

### Daily Care Steps

**Hand Washing**
Always wash hands thoroughly with soap and water for 20 seconds before touching your incision or changing dressings. Use hand sanitizer if soap isn't available.

**Cleaning**
Use mild soap and water for most wounds. Gently pat dry with clean towel - don't rub. Don't scrub the incision. Some wounds should not get wet initially.

**Dressing Changes**
Change dressings according to your instructions. If dressing becomes wet or soiled, change it sooner. Apply new dressing gently. Don't pull on tapes.

**Daily Inspection**
Look at your wound daily. Check the edges are closed. Note any changes in appearance. Watch for drainage on dressings. Take photos if helpful to track changes.`,
      keyTerms: [
        { term: 'Pat dry', definition: 'Gently blotting with towel' },
        { term: 'Scrubbing', definition: 'Rubbing firmly (avoid on incisions)' },
        { term: 'Drainage', definition: 'Fluid coming from wound' },
        { term: 'Edges', definition: 'Borders of the incision' }
      ],
      examples: [
        'A patient sets a daily alarm to remind them to check their incision',
        'Someone takes a photo of their wound every day to track healing progress'
      ]
    },
    4: {
      level: 4,
      summary: 'Certain activities and products can harm your healing wound. Knowing what to avoid is as important as knowing what to do - don\'t submerge incision until cleared, avoid picking or scratching, don\'t apply products unless directed, and limit sun exposure on scars.',
      explanation: `## What to Avoid

Certain activities and products can harm your healing wound. Knowing what to avoid is as important as knowing what to do.

### Key Points

- Don't submerge incision until cleared
- Avoid picking or scratching
- Don't apply products unless directed
- Limit sun exposure on scars

### Things to Avoid

**Water Exposure**
No baths, swimming pools, hot tubs, or soaking until cleared (usually 2-4 weeks). Showers are usually okay after 24-48 hours. Don't let water hit incision directly at first.

**Touching and Picking**
Don't pick at scabs, Steri-Strips, or glue. Don't pull on sutures or staples. Don't scratch healing wounds. Keep pets away from incision area.

**Products to Avoid**
Don't apply hydrogen peroxide, alcohol, or iodine to healing wounds unless instructed. Don't use lotions, creams, or ointments without approval. Skip essential oils and home remedies.

**Activities to Limit**
Avoid stretching the incision area. Don't wear tight clothing over wounds. Limit sun exposure on new scars for a year (use sunscreen).`,
      keyTerms: [
        { term: 'Submerge', definition: 'Completely cover with water' },
        { term: 'Scab', definition: 'Dried blood/tissue on healing wound' },
        { term: 'Scar', definition: 'Mark left after wound heals' },
        { term: 'Incisional stretching', definition: 'Pulling on healing wound' }
      ],
      clinicalNotes: 'Hydrogen peroxide and cytotoxic agents can damage fibroblasts and delay healing. Moist wound healing environment promotes faster re-epithelialization.'
    },
    5: {
      level: 5,
      summary: 'Recognizing problems early ensures prompt treatment. Proper scar care helps achieve the best cosmetic result. Know infection signs, other concerns like wound opening, normal healing stages, and scar care techniques.',
      explanation: `## Signs of Problems and Scar Care

Recognizing problems early ensures prompt treatment. Proper scar care helps achieve the best cosmetic result.

### Key Points

- Redness may spread with infection
- Normal healing has stages
- Scar massage can improve appearance
- Sun protection prevents dark scars

### Problem Recognition and Scar Care

**Infection Signs**
Spreading redness (erythema) around wound. Increasing pain after initial improvement. Pus or yellow/green drainage. Fever over 101°F. Warmth around the site. Foul odor.

**Other Concerns**
Edges opening (dehiscence). Increasing bruising or swelling. Numbness around wound (can be normal). Excessive bleeding that doesn't stop with pressure.

**Normal Healing Stages**
Inflammation (redness, swelling): first few days. Proliferation (new tissue): weeks 1-4. Maturation (strengthening): months to a year. Scars may look worse before looking better.

**Scar Care**
Once fully healed (usually after 2-3 weeks), gentle massage with moisturizer can help. Silicone sheets or gels may flatten scars. Sunscreen (SPF 30+) for a year prevents darkening. Vitamin E may help (evidence mixed).

**When Sutures/Staples Are Removed**
Removed in 5-14 days depending on location. You may feel tugging but it shouldn't hurt. Steri-Strips may be placed after removal. Keep area protected for a few more days.`,
      keyTerms: [
        { term: 'Dehiscence', definition: 'Wound edges separating' },
        { term: 'Proliferation', definition: 'Growth phase of healing' },
        { term: 'Maturation', definition: 'Final strengthening of scar' },
        { term: 'Hypertrophic scar', definition: 'Raised but contained scar' },
        { term: 'Keloid', definition: 'Overgrown scar beyond wound edges' }
      ],
      clinicalNotes: 'Dehiscence risk factors include obesity, diabetes, smoking, and emergency surgery. Keloids more common in patients with darker skin types.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['wound care', 'post-procedure care', 'incision care'],
    keywords: ['wound care', 'incision', 'sutures', 'scar', 'healing']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
