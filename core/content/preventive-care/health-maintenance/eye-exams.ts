/**
 * Eye Exams
 *
 * Comprehensive education on preventive eye care and vision screening.
 */

import { EducationalContent } from '../../types';

export const EYE_EXAMS: EducationalContent = {
  id: 'concept-eye-exams',
  type: 'concept',
  name: 'Eye Exams',
  alternateNames: ['Vision screening', 'Ophthalmic examination', 'Eye health checkup'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular eye exams help detect vision problems and eye diseases early, when they can be treated most effectively.',
      explanation: `Eye exams are important even if you think your vision is fine, because many eye diseases have no early symptoms.

**What Is Checked:**
- Visual acuity (how clearly you see)
- Eye pressure (glaucoma check)
- Inside of the eye (retina, optic nerve)
- Eye muscle function
- Prescription for glasses/contacts

**Eye Diseases Found by Exams:**
- Glaucoma (pressure damages optic nerve)
- Cataracts (clouding of lens)
- Macular degeneration (affects central vision)
- Diabetic eye disease

**When to Get Exams:**
- Children: Before starting school
- Adults: Every 1-2 years
- More often with diabetes or eye disease`,
      keyTerms: [
        { term: 'glaucoma', definition: 'Eye disease where high pressure damages the optic nerve' },
        { term: 'cataract', definition: 'Clouding of the eye lens that affects vision' },
        { term: 'visual acuity', definition: 'Sharpness or clarity of vision' },
      ],
      analogies: ['An eye exam is like checking the lens and sensor of a camera to make sure everything is working properly.'],
      examples: ['During his routine eye exam, Bill was found to have high eye pressure, allowing early treatment for glaucoma.'],
    },
    2: {
      level: 2,
      summary: 'Comprehensive eye examinations screen for refractive errors, glaucoma, cataracts, age-related macular degeneration, and diabetic retinopathy, with frequency based on age and risk factors.',
      explanation: `**Components of Eye Exam:**

*Visual Acuity:*
- Snellen chart testing
- Near and distance vision
- Refraction for prescription

*Tonometry:*
- Intraocular pressure measurement
- Glaucoma screening

*Fundoscopy:*
- Examination of retina
- Optic nerve assessment
- Vessel evaluation

**Screening Recommendations:**

| Age | Frequency |
|-----|-----------|
| Children | Before school, then periodic |
| Adults 20-39 | Every 2-4 years |
| Adults 40-54 | Every 2-4 years |
| Adults 55-64 | Every 1-3 years |
| Adults 65+ | Every 1-2 years |

*More frequent if:*
- Diabetes
- Family history of glaucoma
- High myopia
- Previous eye problems`,
      keyTerms: [
        { term: 'tonometry', definition: 'Measurement of pressure inside the eye' },
        { term: 'fundoscopy', definition: 'Examination of the back of the eye' },
        { term: 'refractive error', definition: 'Need for glasses or contacts due to focusing issues' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based vision care integrates disease-specific screening (glaucoma, diabetic retinopathy, AMD), with USPSTF recommendations varying by condition and population.',
      explanation: `**USPSTF Recommendations:**

*Vision Screening (Adults):*
- Grade I: Insufficient evidence for routine screening in asymptomatic adults

*Glaucoma:*
- Grade I: Insufficient evidence for routine screening

*Diabetic Retinopathy:*
- Not a USPSTF topic, but strongly recommended by specialty societies
- Annual dilated eye exam for diabetics

**Disease-Specific Screening:**

*Glaucoma:*
- Risk: Age, family history, African American, high myopia
- Tonometry + fundoscopy
- Visual field testing if suspected

*Diabetic Retinopathy:*
- Type 1: Within 5 years of diagnosis
- Type 2: At diagnosis
- Annually thereafter

*Age-Related Macular Degeneration:*
- Risk: Age, smoking, family history
- Amsler grid for home monitoring
- Nutritional supplements for intermediate AMD`,
      keyTerms: [
        { term: 'diabetic retinopathy', definition: 'Damage to retinal blood vessels from diabetes' },
        { term: 'age-related macular degeneration', definition: 'Degeneration of central retina affecting vision in older adults' },
        { term: 'Amsler grid', definition: 'Grid used to detect early changes in central vision' },
      ],
      analogies: [],
      clinicalNotes: 'Ensure diabetic patients have annual eye exams. Risk-stratify for glaucoma screening. AMD patients should use Amsler grid. Smoking cessation important for AMD.',
    },
    4: {
      level: 4,
      summary: 'Advances in eye care include retinal imaging technology, telemedicine for diabetic retinopathy screening, and emerging treatments that emphasize the importance of early detection and intervention.',
      explanation: `**Technology Advances:**

*Optical Coherence Tomography (OCT):*
- Cross-sectional retinal imaging
- Detects early macular changes
- Monitors glaucoma progression

*Fundus Photography:*
- Document retinal findings
- Telemedicine applications
- AI-assisted interpretation

*Diabetic Retinopathy Telemedicine:*
- Retinal photos in primary care
- Remote interpretation by specialists
- Improves screening access

**Treatment Advances:**

*AMD:*
- Anti-VEGF injections (Avastin, Lucentis, Eylea)
- Transformed wet AMD treatment
- AREDS supplements for dry AMD

*Glaucoma:*
- New classes of medications
- Minimally invasive glaucoma surgery (MIGS)
- Earlier intervention

*Diabetic Retinopathy:*
- Anti-VEGF therapy
- Earlier treatment guidelines
- Systemic control critical`,
      keyTerms: [
        { term: 'OCT', definition: 'Optical coherence tomography; imaging of retinal layers' },
        { term: 'anti-VEGF', definition: 'Medications blocking blood vessel growth in wet AMD and diabetic retinopathy' },
        { term: 'AREDS', definition: 'Age-Related Eye Disease Study; defined supplement regimen for AMD' },
      ],
      analogies: [],
      clinicalNotes: 'Consider telemedicine retinal screening to improve diabetic eye exam rates. OCT becoming standard for macular and glaucoma assessment. Ensure AMD patients know about anti-VEGF options.',
    },
    5: {
      level: 5,
      summary: 'Future vision care integrates AI-assisted diagnostics, gene therapy for inherited retinal diseases, advanced imaging biomarkers, and precision medicine approaches to preserve and restore vision.',
      explanation: `**Emerging Technologies:**

*AI in Ophthalmology:*
- Automated diabetic retinopathy screening
- FDA-approved AI systems (IDx-DR)
- Glaucoma progression prediction
- AMD risk stratification

*Gene Therapy:*
- Luxturna for inherited retinal dystrophy
- RPE65 mutation treatment
- Pipeline for other conditions

*Advanced Imaging:*
- Adaptive optics for cellular imaging
- OCTA (OCT angiography)
- Multimodal imaging integration

*Regenerative Approaches:*
- Stem cell therapy for AMD
- Neuroprotection for glaucoma
- Retinal prostheses

**Population Health:**
- Addressing vision health disparities
- School-based screening programs
- Integration with primary care
- Global vision initiatives`,
      keyTerms: [
        { term: 'Luxturna', definition: 'FDA-approved gene therapy for RPE65-mediated inherited retinal dystrophy' },
        { term: 'OCTA', definition: 'OCT angiography; imaging blood vessels without dye injection' },
        { term: 'IDx-DR', definition: 'FDA-approved AI system for autonomous diabetic retinopathy detection' },
      ],
      analogies: [],
      clinicalNotes: 'AI-assisted screening may expand access. Gene therapy available for specific inherited conditions. Multimodal imaging standard for complex cases. Address barriers to eye care.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aao-eye-exams',
      type: 'website',
      title: 'Eye Exam Recommendations',
      source: 'American Academy of Ophthalmology',
      url: 'https://www.aao.org/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [
    { targetId: 'concept-diabetes-screening', targetType: 'concept', relationship: 'related', label: 'Diabetes Screening' },
  ],
  tags: {
    systems: ['nervous', 'special senses'],
    topics: ['preventive medicine', 'ophthalmology', 'vision'],
    keywords: ['eye exam', 'vision', 'glaucoma', 'diabetic retinopathy', 'AMD'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
