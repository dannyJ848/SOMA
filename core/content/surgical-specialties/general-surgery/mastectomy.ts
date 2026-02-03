/**
 * Mastectomy
 *
 * Surgical removal of breast tissue, typically for breast cancer treatment.
 */

import { EducationalContent } from '../../types';

export const mastectomyContent: EducationalContent = {
  id: 'surgical-mastectomy',
  type: 'topic',
  name: 'Mastectomy',
  alternateNames: ['Breast Removal Surgery', 'Simple Mastectomy', 'Modified Radical Mastectomy'],

  levels: {
    1: {
      level: 1,
      summary: "Mastectomy is surgery to remove all or part of the breast. It's most commonly done to treat or prevent breast cancer.",
      explanation: `## What Is a Mastectomy?

A mastectomy is surgery to remove breast tissue. It can remove part of the breast (lumpectomy) or the entire breast.

## Why Is It Done?

**Breast Cancer Treatment:**
- Remove cancerous tumor
- Remove surrounding tissue
- Check lymph nodes for cancer spread

**Cancer Prevention:**
- High genetic risk (BRCA mutation)
- Strong family history
- Previous cancer in other breast

## Types of Mastectomy

**Partial Mastectomy (Lumpectomy):**
- Remove tumor + small margin
- Keep most of the breast
- Often followed by radiation

**Simple Mastectomy:**
- Remove all breast tissue
- Keep lymph nodes and muscle

**Modified Radical Mastectomy:**
- Remove breast tissue
- Remove lymph nodes under arm
- Keep chest muscle

**Radical Mastectomy (Rare Now):**
- Remove breast, lymph nodes, and chest muscle
- Only for very advanced cancer

## Recovery

- Hospital stay: 1-3 days
- Drain tubes: 1-2 weeks
- Pain medicine for 1-2 weeks
- Return to normal: 4-6 weeks
- No heavy lifting for 4-6 weeks`,

      keyTerms: [
        { term: 'Lumpectomy', definition: 'Surgery to remove only the breast tumor and some tissue around it' },
        { term: 'Lymph nodes', definition: 'Small bean-shaped glands that help fight infection and can show cancer spread' },
        { term: 'BRCA mutation', definition: 'Gene change that increases risk of breast and ovarian cancer' },
      ],
      analogies: [
        'Lumpectomy is like removing a bad apple from the basket while keeping the rest.',
        'Lymph nodes are like security checkpoints - cancer shows up there when spreading.',
      ],
      examples: [
        'Woman with breast cancer in one breast has mastectomy',
        'Someone with BRCA mutation has preventive mastectomy',
        'Patient with large tumor chooses mastectomy over lumpectomy',
      ],
    },

    2: {
      level: 2,
      summary: 'Mastectomy is indicated for breast cancer, high-risk prevention, or recurrent disease. Breast conservation therapy (lumpectomy + radiation) has equivalent survival for early-stage disease.',
      explanation: `## Indications

**Breast Cancer:**
- Tumor too large for breast conservation
- Multicentric disease (multiple tumors)
- Unable to get negative margins with lumpectomy
- Patient preference
- Prior radiation to breast (can't radiate again)

**High-Risk Prevention:**
- BRCA1/BRCA2 mutation carriers
- Strong family history
- Atypical hyperplasia
- LCIS (lobular carcinoma in situ)
- Previous chest radiation

**Contraindications to Breast Conservation:**
- Tumor >5cm relative to breast size
- Diffuse microcalcifications
- Pregnancy (radiation contraindicated)

## Surgical Approaches

**Skin-Sparing Mastectomy:**
- Remove breast tissue through small opening
- Preserve breast skin envelope
- Better reconstruction outcome
- Not for tumors involving skin

**Nipple-Sparing Mastectomy:**
- Preserve nipple and areola
- Requires negative margins beneath nipple
- Best for small, peripheral tumors
- Not for tumors near nipple

**Modified Radical Mastectomy:**
- Standard for most cancer cases
- Axillary lymph node dissection
- Level I-II nodes removed`,

      keyTerms: [
        { term: 'Margins', definition: 'Edge of removed tissue - must be cancer-free for complete removal' },
        { term: 'Multicentric', definition: 'Cancer in multiple areas of the breast, not just one spot' },
        { term: 'Microcalcifications', definition: 'Tiny calcium deposits that can be a sign of cancer' },
        { term: 'Axillary dissection', definition: 'Removal of lymph nodes from the armpit area' },
      ],
      analogies: [
        'Skin-sparing is like removing the insides of a tent while keeping the canvas intact.',
        'Negative margins are like cutting around a stain with a safety zone.',
      ],
      examples: [
        'BRCA-positive woman has bilateral preventive mastectomy',
        'Large tumor patient needs modified radical mastectomy',
        'Small peripheral tumor - nipple-sparing mastectomy possible',
      ],
      clinicalNotes: 'Sentinel lymph node biopsy is standard for clinically node-negative disease. Avoids full axillary dissection morbidity. Only about 5-10% of patients with positive sentinel nodes have additional positive nodes.',
    },

    3: {
      level: 3,
      summary: 'Mastectomy with immediate reconstruction is standard for most patients. Sentinel lymph node biopsy has replaced routine axillary dissection for node-negative disease.',
      explanation: `## Surgical Technique

**Simple Mastectomy:**
1. Incision around breast or elliptical
2. Raise skin flaps
3. Remove breast tissue from pectoralis fascia
4. Sentinel node biopsy if indicated
5. Close with drains

**Modified Radical Mastectomy:**
1. Mastectomy incision
2. Separate skin flaps
3. Remove breast tissue
4. Axillary lymph node dissection
   - Level I (lateral to pectoralis minor)
   - Level II (behind pectoralis minor)
   - Preserve Level III (medial) unless involved
5. Place drains
6. Closure

**Sentinel Node Biopsy:**
1. Inject blue dye or radioactive tracer
2. Identify first draining nodes
3. Remove 1-3 nodes
4. Send for frozen section
5. If positive, proceed to dissection

## Complications

**Early:**
- Hematoma: 2-5%
- Infection: 2-5%
- Seroma: 10-30% (very common)
- Skin flap necrosis: 5-10%
- Nerve injury: numbness in chest/arm

**Late:**
- Lymphedema: 5-15% (after dissection)
- Chronic pain
- Shoulder stiffness
- Cosmetic concerns
- Psychological impact`,

      keyTerms: [
        { term: 'Seroma', definition: 'Collection of clear fluid under the skin after surgery' },
        { term: 'Flap necrosis', definition: 'Tissue death of skin edges due to poor blood supply' },
        { term: 'Lymphedema', definition: 'Swelling from lymph fluid buildup when lymph nodes are removed' },
        { term: 'Sentinel node', definition: 'First lymph node that receives drainage from tumor' },
      ],
      analogies: [
        'Lymphedema is like a traffic jam - the fluid has nowhere to go.',
        'Seroma is like a water balloon that forms under the skin.',
      ],
      examples: [
        'Patient develops large seroma requiring multiple aspirations',
        'Sentinel node positive on frozen section - full dissection performed',
        'Skin necrosis at edges of long incision requires debridement',
      ],
      clinicalNotes: 'Immediate reconstruction should be discussed preoperatively. Tissue expander or direct-to-implant possible. Autologous flap (DIEP, TRAM) for patients needing radiation or wanting natural reconstruction.',
    },

    4: {
      level: 4,
      summary: 'Breast conservation and mastectomy have equivalent survival for early-stage disease. Choice depends on tumor characteristics, genetic risk, and patient preference.',
      explanation: `## Oncologic Outcomes

**Survival Equivalence:**
- Mastectomy = Lumpectomy + Radiation
- Same 10-year survival
- Different recurrence patterns
- Local recurrence higher with lumpectomy

**Recurrence:**
- Local recurrence after mastectomy: 3-5%
- Ipsilateral breast recurrence after lumpectomy: 10-15%
- Survival still equivalent with salvage therapy

**Risk-Reducing Mastectomy:**
- 90-95% risk reduction for BRCA carriers
- 50% risk reduction for high-risk without BRCA
- Not 100% - some tissue always remains

## Reconstruction Options

**Implant-Based:**
- Tissue expander (stage 1)
- Permanent implant (stage 2)
- Direct-to-implant (selected cases)
- Radiation complicates results

**Autologous Flaps:**
- DIEP flap (abdominal fat, spares muscle)
- TRAM flap (abdominal fat with muscle)
- Latissimus dorsi flap (back muscle)
- Natural feel, withstands radiation

**Timing:**
- Immediate: better cosmetic, single recovery
- Delayed: if radiation planned or uncertain`,

      keyTerms: [
        { term: 'Ipsilateral', definition: 'On the same side of the body' },
        { term: 'Salvage therapy', definition: 'Treatment after initial treatment fails (e.g., mastectomy after lumpectomy recurrence)' },
        { term: 'DIEP flap', definition: 'Deep Inferior Epigastric Perforator - uses abdominal fat without muscle' },
        { term: 'TRAM flap', definition: 'Transverse Rectus Abdominis Muscle - uses abdominal muscle and fat' },
      ],
      analogies: [
        'DIEP flap is like moving fat from one area to another without damaging the muscle.',
        'Salvage mastectomy is like the backup plan when the first treatment fails.',
      ],
      examples: [
        'Patient chooses mastectomy over lumpectomy for peace of mind',
        'DIEP flap reconstruction after radiation damage to implant',
        'Bilateral prophylactic mastectomy in BRCA2 carrier',
      ],
      clinicalNotes: 'Post-mastectomy radiation indicated for tumors >5cm, >4 positive nodes, or positive margins. Radiation can cause capsule contracture around implants. Autologous reconstruction preferred when radiation needed.',
    },

    5: {
      level: 5,
      summary: 'Surgical management of breast cancer continues to evolve toward less invasive approaches. Contralateral prophylactic mastectomy rates have increased despite limited survival benefit.',
      explanation: `## Controversies

**Contralateral Prophylactic Mastectomy (CPM):**
- Rates increased from 2% to 15%+ over past decade
- Only 0.5% contralateral cancer risk per year for most
- Survival benefit: minimal for average-risk women
- Significant benefit for BRCA carriers
- Driven by patient anxiety, not outcomes

**Axillary Dissection vs. Sentinel Only:**
- ACOSOG Z0011: No dissection for 1-2 positive nodes
- Dissection needed for 3+ positive nodes
- Avoid lymphedema without compromising survival
- Radiation treats remaining disease

**Reconstruction Timing:**
- Immediate vs. delayed with radiation
- Increasing preference for delayed when radiation needed
- Pre-pectoral implant placement (newer technique)
- Reduces muscle pain and animation deformity

## Future Directions

**Nipple-Sparing Mastectomy:**
- Expanding indications
- Oncologically safe for selected tumors
- Superior cosmetic outcome
- Higher complication rate ( nipple necrosis)

**Breast Conserving Therapy:**
- Oncoplastic techniques
- Volume replacement
- Better cosmetic outcomes
- Requires specialized training

**Targeted Therapy:**
- Neoadjuvant systemic therapy
- Allows breast conservation in larger tumors
- Response-guided surgery
- De-escalation of axillary surgery`,

      keyTerms: [
        { term: 'CPM', definition: 'Contralateral Prophylactic Mastectomy - removing the healthy opposite breast' },
        { term: 'Oncoplastic', definition: 'Combining cancer surgery with plastic surgery techniques for better appearance' },
        { term: 'Neoadjuvant', definition: 'Treatment given before surgery to shrink tumor' },
        { term: 'Animation deformity', definition: 'Abnormal muscle movement visible after implant under muscle' },
      ],
      analogies: [
        'CPM is like replacing both tires when only one is flat - may not be necessary.',
        'Neoadjuvant therapy is like softening the soil before planting - makes the job easier.',
      ],
      examples: [
        'Young woman with family history requests CPM despite low actual risk',
        'Patient with 2 positive sentinel nodes avoids axillary dissection per Z0011',
        'Nipple-sparing mastectomy with immediate DIEP reconstruction',
      ],
      clinicalNotes: 'The ACOSOG Z1071 trial showed axillary ultrasound after neoadjuvant chemotherapy has high false-negative rate for residual disease. Targeted axillary dissection (clip in node + sentinel) improves detection. Pregnancy-associated breast cancer often presents at advanced stage - imaging and treatment modified to protect fetus.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'breast-cancer', 'mastectomy', 'oncology', 'reconstruction'],
    systems: ['reproductive'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
