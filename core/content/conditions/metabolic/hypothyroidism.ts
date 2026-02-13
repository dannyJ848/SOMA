/**
 * Hypothyroidism - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hypothyroidism: EducationalContent = {
  id: 'condition-hypothyroidism',
  type: 'condition',
  name: 'Hypothyroidism',
  nameEs: 'Hipotiroidismo',
  alternateNames: ['Underactive Thyroid', 'Low Thyroid', 'Hashimoto\'s Thyroiditis'],
  hpoId: 'HP:0000821',

  levels: {
    1: {
      level: 1,
      summary: 'Hypothyroidism is when your thyroid gland does not make enough thyroid hormone, causing your body to slow down.',
      explanation: `Your thyroid is a small gland in your neck that controls how fast your body works. When it does not make enough hormone, everything slows down.

**Common symptoms:**
- Feeling tired and sluggish
- Feeling cold when others are comfortable
- Weight gain
- Dry skin and hair
- Constipation
- Depression
- Forgetfulness

**Causes:**
- Hashimoto's disease (immune system attacks thyroid)
- Thyroid surgery or radiation
- Some medications

**Treatment:**
- Taking a daily thyroid hormone pill (levothyroxine)
- Regular blood tests to check levels
- Most people need lifelong treatment`,
      keyTerms: [
        { term: 'thyroid', definition: 'A gland in your neck that makes hormones controlling your metabolism' },
        { term: 'metabolism', definition: 'How fast your body uses energy' },
        { term: 'levothyroxine', definition: 'A medication that replaces the thyroid hormone your body needs' },
      ],
      analogies: [
        'Your thyroid is like a thermostat. When it is broken, your body runs too cold and slow.',
      ],
      examples: [
        'A woman feeling tired, cold, and gaining weight despite diet might have an underactive thyroid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypothyroidism is thyroid hormone deficiency causing decreased metabolic rate, diagnosed by elevated TSH with low free T4, and treated with levothyroxine replacement.',
      explanation: `## Causes

**Primary Hypothyroidism (95%):**
- Hashimoto's thyroiditis (most common in developed countries)
- Iodine deficiency (most common worldwide)
- Post-thyroidectomy
- Radioactive iodine treatment
- Medications (amiodarone, lithium)

**Central Hypothyroidism (5%):**
- Pituitary or hypothalamic disease

## Diagnosis

| Test | Primary Hypothyroidism |
|------|----------------------|
| TSH | Elevated (>4.5 mIU/L) |
| Free T4 | Low |
| TPO antibodies | Often positive (Hashimoto's) |

## Treatment

**Levothyroxine:**
- Starting dose: 1.6 mcg/kg/day (lower in elderly/cardiac disease)
- Take on empty stomach, 30-60 min before food
- Avoid calcium, iron within 4 hours

**Monitoring:**
- Check TSH 6-8 weeks after dose change
- Goal TSH: 0.5-2.5 mIU/L for most adults`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid-stimulating hormone; elevated when thyroid is underactive' },
        { term: 'Hashimoto\'s thyroiditis', definition: 'Autoimmune disease causing the most common form of hypothyroidism' },
        { term: 'TPO antibodies', definition: 'Thyroid peroxidase antibodies; marker of autoimmune thyroid disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hypothyroidism involves decreased thyroid hormone synthesis or release, with primary disease showing elevated TSH and secondary/tertiary showing low TSH, requiring careful levothyroxine titration and management of subclinical states.',
      explanation: `## Pathophysiology

**Thyroid Hormone Synthesis:**
1. TSH stimulates thyroid follicular cells
2. Iodine trapping and organification
3. Thyroglobulin iodination (T3, T4 synthesis)
4. Hormone release into circulation

**In Hashimoto's:**
- Lymphocytic infiltration
- TPO and thyroglobulin antibodies
- Gradual thyroid destruction
- May have initial hyperthyroidism (hashitoxicosis)

## Special Situations

**Subclinical Hypothyroidism:**
- TSH 4.5-10, normal T4
- Treat if: TSH >10, symptoms, pregnancy planning, positive TPO Ab

**Myxedema Coma:**
- Severe hypothyroidism with altered mental status
- Hypothermia, hypoglycemia, hyponatremia
- Treat with IV levothyroxine + hydrocortisone

**Pregnancy:**
- TSH goal: <2.5 first trimester
- Increase levothyroxine dose 25-30% early
- Monitor TSH every 4-6 weeks`,
      keyTerms: [
        { term: 'subclinical hypothyroidism', definition: 'Elevated TSH with normal free T4; may or may not require treatment' },
        { term: 'myxedema coma', definition: 'Severe, life-threatening hypothyroidism with mental status changes' },
        { term: 'T3', definition: 'Triiodothyronine; active thyroid hormone at tissue level' },
      ],
      clinicalNotes: 'In elderly or patients with CAD, start levothyroxine at low dose (12.5-25 mcg) and titrate slowly to avoid precipitating angina or arrhythmia.',
    },
    4: {
      level: 4,
      summary: 'Advanced hypothyroidism management addresses T3 conversion defects, medication interactions, persistent symptoms despite normal TSH, and rare causes including consumptive hypothyroidism and central hypothyroidism evaluation.',
      explanation: `## Persistent Symptoms Despite Normal TSH

**Consider:**
- Thyroid hormone malabsorption
- Drug interactions (PPIs, iron, calcium)
- Central adrenal insufficiency
- Depression, sleep disorders (comorbidities)

**T3 Therapy Controversy:**
- Some advocate LT4/LT3 combination
- Guidelines generally do not recommend
- DIO2 polymorphisms may affect T4→T3 conversion
- Trial only in selected patients with persistent symptoms

## Drug Interactions

| Drug | Effect |
|------|--------|
| Iron, calcium | Decreased LT4 absorption |
| Estrogen | Increased TBG, may need higher LT4 dose |
| Phenytoin, carbamazepine | Increased T4 metabolism |
| Amiodarone | Can cause hypo- or hyperthyroidism |

## Central Hypothyroidism

**Causes:**
- Pituitary adenoma
- Pituitary surgery/radiation
- Sheehan syndrome
- Infiltrative diseases

**Key Differences:**
- TSH low or inappropriately normal
- Must rule out adrenal insufficiency before treating
- Monitor free T4, not TSH`,
      keyTerms: [
        { term: 'DIO2', definition: 'Type 2 deiodinase; enzyme converting T4 to T3 in peripheral tissues' },
        { term: 'TBG', definition: 'Thyroxine-binding globulin; carrier protein affecting total T4 levels' },
        { term: 'central hypothyroidism', definition: 'Hypothyroidism due to pituitary or hypothalamic dysfunction' },
      ],
      clinicalNotes: 'Before treating central hypothyroidism, always assess and treat adrenal insufficiency first—giving thyroid hormone can precipitate adrenal crisis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hypothyroidism research explores genetic determinants of thyroid hormone sensitivity, precision dosing algorithms, and novel formulations while addressing diagnostic challenges in non-thyroidal illness and thyroid hormone resistance syndromes.',
      explanation: `## Precision Medicine

**Genetic Factors:**
- DIO2 Thr92Ala polymorphism: May affect T3 levels
- MCT8 mutations: Thyroid hormone transporter defects
- THRB mutations: Thyroid hormone resistance

**Dosing Optimization:**
- Weight-based algorithms
- Age and comorbidity adjustments
- Pharmacogenomic considerations (emerging)

## Novel Therapies

**Formulations:**
- Soft gel capsules (Tirosint): Better absorption
- Liquid levothyroxine: Malabsorption situations

**Combination Therapy:**
- Sustained-release T3 in development
- May address conversion defects
- Awaiting clinical trial data

## Diagnostic Challenges

**Non-Thyroidal Illness:**
- Low T3, variable T4/TSH
- Do not treat with thyroid hormone
- Reassess after illness resolves

**Subclinical Hypothyroidism:**
- Growing evidence against routine treatment
- Individualize based on age, symptoms, antibodies

## Emerging Research

- Thyroid regeneration (stem cells)
- Targeted immunotherapy for Hashimoto's
- Biomarkers of tissue thyroid status`,
      keyTerms: [
        { term: 'thyroid hormone resistance', definition: 'Mutations in thyroid hormone receptor causing tissue insensitivity' },
        { term: 'non-thyroidal illness', definition: 'Altered thyroid tests during acute illness not indicating true thyroid dysfunction' },
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8; thyroid hormone cell membrane transporter' },
      ],
      clinicalNotes: 'DIO2 polymorphisms are common but clinical significance for treatment decisions remains uncertain. Reserve combination T4/T3 therapy for highly selected patients after excluding other causes of persistent symptoms.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ata-hypothyroid-2014',
      type: 'article',
      title: 'Guidelines for the Treatment of Hypothyroidism',
      source: 'Thyroid',
      authors: ['Jonklaas J', 'Bianco AC', 'Bauer AJ', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'primary care'],
    keywords: ['hypothyroidism', 'thyroid', 'TSH', 'levothyroxine', 'Hashimoto'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypothyroidism;
