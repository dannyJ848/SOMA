/**
 * Marfan Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const marfan: EducationalContent = {
  id: 'condition-marfan-syndrome',
  type: 'condition',
  name: 'Marfan Syndrome',
  nameEs: 'Síndrome de Marfan',
  alternateNames: ['MFS', 'Marfan\'s Syndrome'],
  hpoId: 'HP:0001465',

  levels: {
    1: {
      level: 1,
      summary: 'Marfan syndrome is an inherited disorder that affects connective tissue, causing tall stature, long fingers, curved spine, and heart problems, especially with the aorta.',
      explanation: `Marfan syndrome is a genetic condition that affects the body is connective tissue—the strong fibers that support and anchor organs and other structures in the body.

**What causes Marfan syndrome:**
- Caused by a change in a gene (FBN1)
- Affects connective tissue throughout the body
- Inherited from a parent in 75% of cases
- Happens by chance in 25% of cases
- About 1 in 5,000 people have it

**Physical features:**
- Very tall and thin
- Long arms, legs, and fingers
- Curved spine (scoliosis)
- Sunken or protruding chest
- Flexible joints
- Flat feet
- Crowded teeth
- Stretch marks not from weight gain

**Eye problems:**
- Near-sightedness (myopia)
- Dislocated lens
- Glaucoma
- Cataracts
- Retinal detachment

**Heart problems (most serious):**
- Weak aorta (main blood vessel)
- Aortic aneurysm
- Leaky heart valves
- Abnormal heart rhythm

**Treatment:**
- Regular heart checkups
- Blood pressure medicine
- Surgery to repair aorta if needed
- Glasses or contact lenses
- Bracing or surgery for scoliosis

**Life with Marfan:**
- Need lifelong medical care
- Avoid competitive sports
- Can lead full, productive lives
- Early diagnosis and treatment help

**Activity restrictions:**
- Avoid heavy lifting
- Avoid contact sports
- Avoid activities that strain the aorta
- Low-intensity exercise encouraged`,
      keyTerms: [
        { term: 'connective tissue', definition: 'Tissue that supports and connects body parts; like the "glue" that holds the body together' },
        { term: 'aorta', definition: 'Main artery carrying blood from the heart to the rest of the body' },
        { term: 'aneurysm', definition: 'Bulging, weak area in an artery that can burst and cause dangerous bleeding' },
        { term: 'scoliosis', definition: 'Abnormal sideways curvature of the spine' },
      ],
      analogies: [
        'Connective tissue in Marfan syndrome is like the framework of a building made with weak materials—the structure is there, but it is not as strong as it should be.',
        'Think of the aorta like a garden hose. In Marfan syndrome, the hose is thinner and weaker, so it can bulge or burst under pressure.',
      ],
      examples: [
        'A tall basketball player collapses during a game and is found to have an aortic dissection. Genetic testing confirms Marfan syndrome.',
        'A teenager is diagnosed after an eye doctor notices dislocated lenses during a routine exam.',
      ],
      patientCounselingPoints: [
        'Take beta-blockers or other prescribed medications exactly as directed.',
        'Avoid contact sports, heavy lifting, and intense exercise.',
        'Low-intensity exercise like walking, swimming, and biking is encouraged.',
        'See a heart doctor regularly for imaging of the aorta.',
        'Wear a medical alert bracelet indicating Marfan syndrome.',
        'Tell emergency room doctors about Marfan syndrome if you need emergency care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Marfan syndrome is an autosomal dominant disorder of connective tissue caused by FBN1 mutations, causing aortic root dilation, dissection, lens dislocation, skeletal abnormalities, and mitral valve prolapse.',
      explanation: `## Genetics

**FBN1 Gene:**
- Encodes fibrillin-1
- Chromosome 15q21.1
- Autosomal dominant inheritance
- 50% transmission risk
- Variable expression

**Mutation Types:**
- Missense mutations most common
- Nonsense, frameshift, splice site
- Genotype-phenotype correlations limited
- De novo mutations: 25%

**Pathophysiology:**
- Fibrillin-1 deficiency
- Weak connective tissue
- TGF-beta signaling dysregulation
- Aortic wall weakness

## Clinical Features (Ghent Criteria)

**Skeletal System (Major):**
- Pectus excavatum (requiring surgery)
- Wrist and thumb sign (Walker-Murdoch)
- Pectus carinatum
- Scoliosis >20 degrees or spondylolisthesis
- Reduced elbow extension (<170 degrees)
- Pes planus (flat feet)
- Protrusio acetabuli
- Arm span-to-height ratio >1.05

**Ocular (Major):**
- Ectopia lentis (lens dislocation)
- Usually upward and outward
- Myopia common
- Retinal detachment risk

**Cardiovascular (Major):**
- Aortic root dilation (Z-score ≥2)
- Aortic dissection
- Mitral valve prolapse
- Mitral regurgitation
- Tricuspid valve prolapse

**Pulmonary:**
- Spontaneous pneumothorax
- Apical blebs
- Restrictive lung disease
- Sleep apnea

**Skin:**
- Striae atrophicae (stretch marks)
- Not associated with weight change
- Abdominal, shoulders, buttocks
- Recurrent incisional hernias

**Dural:**
- Dural ectasia
- Lumbosacral meningocele
- Back pain, headaches
- Bowel/bladder dysfunction

## Diagnosis (Ghent 2 Criteria)

**Without Family History:**
- Aortic root Z-score ≥2 AND ectopia lentis
- OR
- Aortic root Z-score ≥2 AND FBN1 mutation
- OR
- Aortic root Z-score ≥2 AND systemic score ≥7
- OR
- Ectopia lentis AND FBN1 mutation with aortic involvement

**With Family History:**
- Ectopia lentis
- OR
- Systemic score ≥7
- OR
- Aortic root Z-score ≥2 (age >20)

**Systemic Score Components:**
- Wrist sign: 3 points
- Thumb sign: 2 points
- Pectus excavatum/carinatum: 2 points
- Scoliosis: 1 point
- Reduced elbow extension: 1 point
- etc.

## Differential Diagnosis

- Loeys-Dietz syndrome
- Ehlers-Danlos syndrome (vascular type)
- Familial thoracic aortic aneurysm
- MASS phenotype
- Homocystinuria`,
      keyTerms: [
        { term: 'fibrillin-1', definition: 'Protein component of connective tissue; defective in Marfan syndrome' },
        { term: 'ectopia lentis', definition: 'Dislocation of the lens of the eye; characteristic of Marfan syndrome' },
        { term: 'dural ectasia', definition: 'Weakening and ballooning of the dural sac around spinal cord' },
        { term: 'Z-score', definition: 'Measurement in standard deviations from normal; used to assess aortic dimensions' },
      ],
      analogies: [
        'The wrist and thumb signs in Marfan are like being able to wrap your hand completely around your opposite wrist—the long, thin bones make this possible.',
      ],
      clinicalNotes: 'Aortic root dissection is the leading cause of death in Marfan syndrome. Beta-blockers or ARBs are used to slow aortic dilation. Competitive and contact sports are contraindicated. Annual echocardiography to monitor aortic dimensions.',
    },
    3: {
      level: 3,
      summary: 'Marfan syndrome management includes beta-blocker or ARB therapy to reduce aortic stress, surgical intervention for aortic diameter >5.0 cm, orthopedic management of scoliosis, ophthalmologic care for lens dislocation, and genetic counseling.',
      explanation: `## Cardiovascular Management

**Medical Therapy:**
- Beta-blockers: First-line (atenolol, propranolol)
- ARB: Losartan (alternative or adjunct)
- Goal: Reduce hemodynamic stress on aorta
- Start at diagnosis

**Monitoring:**
- Echocardiogram annually
- CT or MRI if echo inadequate
- Measure aortic root at sinuses of Valsalva
- Absolute size and Z-score

**Aortic Surgery Indications:**
- Aortic diameter ≥5.0 cm
- Rapid growth (>0.5 cm/year)
- Family history of dissection at smaller size
- Severe aortic regurgitation
- Pregnancy planning: Consider at 4.5 cm

**Surgical Options:**
- Aortic root replacement (valve-sparing preferred)
- Composite graft with mechanical valve
- Bentall procedure
- Reoperation risk over lifetime

**Valve Disease:**
- Mitral valve prolapse common
- Mitral regurgitation: Repair preferred
- Tricuspid valve prolapse
- Monitor with echocardiogram

## Pregnancy Considerations

**Risks:**
- Aortic dissection: 1% risk
- Higher if aorta >4.0 cm
- High-risk obstetrics needed
- Preconception counseling essential

**Management:**
- Preconception aortic imaging
- Aortic <4.0 cm: Generally safe
- Aortic >4.5 cm: Repair before pregnancy
- Beta-blockers continued
- Close monitoring throughout

**Delivery:**
- Vaginal delivery often acceptable
- Cesarean if aorta large or dissection history
- Epidural caution (dural ectasia)
- Cardiovascular monitoring

## Ocular Management

**Lens Dislocation:**
- Observation if stable
- Glasses or contact lenses
- Surgical correction if severe
- Aphakic glasses after lens removal

**Regular Screening:**
- Annual ophthalmology exam
- Monitor for retinal detachment
- Check intraocular pressure (glaucoma)
- Cataract screening

**Retinal Detachment:**
- Emergency if symptoms
- Laser or cryotherapy prophylaxis
- Surgical repair if detached
- High risk in Marfan

## Orthopedic Management

**Scoliosis:**
- Bracing for curves 20-40 degrees
- Surgical fusion for curves >40-50 degrees
- Postoperative aortic monitoring
- Worsens with pregnancy

**Pectus Excavatum:**
- Severe cases: Surgical repair (Ravitch, Nuss)
- Consider cardiac compression
- Often cosmetic concern
- Repair may improve lung function

**Pectus Carinatum:**
- Bracing effective in adolescents
- Surgical correction if severe
- Timing before or after cardiac surgery

**Joint Issues:**
- Pes planus: Orthotics
- Hip dysplasia: Monitor
- Shoulder instability: Physical therapy
- Recurrent dislocations: Consider stabilization

## Dural Ectasia

**Symptoms:**
- Low back pain
- Headaches
- Bowel/bladder dysfunction
- Leg weakness

**Diagnosis:**
- CT or MRI of lumbosacral spine
- Dural sac diameter
- Erosion of vertebral bodies

**Treatment:**
- Symptomatic management
- Pain control
- Physical therapy
- Surgical repair (rare, high risk)

## Genetic Counseling

**Inheritance:**
- 50% risk to offspring
- Variable expression
- Prenatal testing available
- Preimplantation genetic diagnosis

**Testing:**
- FBN1 sequencing
- Deletions/duplications
- May not find mutation (30%)
- Diagnosis still possible clinically

**Family Screening:**
- First-degree relatives: Clinical exam and echo
- Cascade testing if mutation found
- Monitor affected family members

## Activity Guidelines

**Recommended:**
- Walking
- Swimming
- Non-competitive bicycling
- Golf
- Bowling

**Avoid:**
- Competitive sports
- Contact sports (football, hockey, wrestling)
- Isometric exercise (weight lifting)
- Valsalva maneuver
- High-intensity exertion

**Moderate:**
- Jogging (discuss with cardiologist)
- Tennis (doubles OK)
- Basketball (shooting around only)`,
      keyTerms: [
        { term: 'Bentall procedure', definition: 'Aortic root and valve replacement with composite graft' },
        { term: 'valve-sparing', definition: 'Aortic root replacement preserving native aortic valve' },
        { term: 'aphakic', definition: 'Without lens; after lens removal surgery' },
      ],
      clinicalNotes: 'Beta-blockers (atenolol or propranolol) are first-line to reduce aortic stress. Losartan is an alternative. Aortic surgery when diameter reaches ≥5.0 cm. Pregnancy is high-risk if aorta >4.0 cm. Annual echocardiography essential.',
    },
    4: {
      level: 4,
      summary: 'Advanced Marfan care includes management of aortic dissection, redo aortic surgery, lung complications (pneumothorax), sleep apnea, surgical management of severe pectus deformities, and long-term outcomes following aortic root replacement.',
      explanation: `## Aortic Dissection Management

**Acute Dissection:**
- Surgical emergency
- Type A (ascending): Emergency surgery
- Type B (descending): Medical usually
- High mortality if untreated

**Surgical Repair:**
- Aortic root replacement
- Valve-sparing when possible
- David reimplantation or Yac remodeling
- Mechanical valve if valve not salvageable
- Arch replacement if needed

**Chronic Dissection:**
- Medical management with beta-blockers
- Aggressive blood pressure control
- Surveillance for expansion
- Surgery if aneurysmal degeneration

## Redo Aortic Surgery

**Indications:**
- Pseudoaneurysm
- Graft infection
- Distal aortic progression
- Valve dysfunction

**Complexity:**
- Increased operative risk
- Adhesions from prior surgery
- May need elephant trunk
- Hybrid approaches possible

## Pulmonary Complications

**Spontaneous Pneumothorax:**
- Recurrence common
- Treat with chest tube
- Consider pleurodesis after first recurrence
- VATS pleurodesis or abrasion

**Restrictive Lung Disease:**
- Pectus deformity
- Scoliosis
- Reduced exercise capacity
- Pulmonary function testing

**Sleep Apnea:**
- Obstructive and central
- Craniofacial abnormalities
- Laryngomalacia
- Polysomnography if symptoms

## Prosthetic Valve Considerations

**Mechanical Valve:**
- Lifelong anticoagulation
- Warfarin therapy
- INR monitoring
- Pregnancy complications

**Bioprosthetic Valve:**
- No anticoagulation needed
- Limited durability
- Redo surgery likely
- Pregnancy friendly

**Tissue Valve in Marfan:**
- May deteriorate faster
- Not routinely recommended
- Individual decision

## Long-Term Outcomes

**Life Expectancy:**
- Improved dramatically with modern care
- Near-normal with proper treatment
- Mainly cardiovascular mortality

**Quality of Life:**
- Activity restrictions important
- Psychological adaptation
- Body image issues
- Genetic testing implications

**Pregnancy Outcomes:**
- Generally good with careful management
- Aortic dimensions critical factor
- Preconception planning essential
- Postpartum aortic monitoring

## Emerging Therapies

**TGF-beta Modulation:**
- Losartan: ARB with TGF-beta effect
- Clinical trials ongoing
- May modify disease progression
- Adjunct to beta-blockers

**Gene Therapy:**
- FBN1 replacement strategies
- RNA interference
- Highly experimental
- Future possibility

## Multidisciplinary Care

**Essential Specialists:**
- Cardiologist
- Cardiothoracic surgeon
- Medical geneticist
- Ophthalmologist
- Orthopedist
- Physical therapist
- Genetic counselor

**Transition of Care:**
- Pediatric to adult services
- Continuity important
- Lifelong surveillance
- Patient education`,
      keyTerms: [
        { term: 'elephant trunk', definition: 'Surgical technique for staged aortic replacement using graft extension' },
        { term: 'VATS', definition: 'Video-assisted thoracoscopic surgery; minimally invasive chest surgery' },
        { term: 'pleurodesis', definition: 'Procedure to adhere lung to chest wall to prevent pneumothorax recurrence' },
      ],
      clinicalNotes: 'Aortic dissection is a surgical emergency. Type A dissections require immediate operation. Survivors need lifelong surveillance. Losartan has TGF-beta modulating effects and may provide additional benefit beyond beta-blockers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Marfan care incorporates genotype-phenotype correlations, advanced imaging techniques, refined surgical approaches including valve-sparing procedures, novel pharmacologic therapies, and personalized risk assessment for aortic events.',
      explanation: `## Precision Medicine in Marfan

**Genotype-Phenotype Correlations:**
- FBN1 mutation location matters
- Cysteine substitutions: Severe
- Premature termination: Variable
- Neonatal Marfan: Specific mutations
- Intrafamilial variability common

**Biomarker Development:**
- TGF-beta levels
- Matrix metalloproteinases
- Fibrillin fragments
- MicroRNA profiles
- Predict dissection risk?

## Advanced Imaging

**4D Flow MRI:**
- Aortic wall shear stress
- Dissection risk stratification
- Flow pattern analysis
- Beyond diameter assessment

**Echocardiographic Strain:**
- Myocardial deformation
- Early dysfunction detection
- Prognostic value
- Subclinical disease

**CT Angiography:**
- Entire aorta visualization
- Endoleak detection post-surgery
- Coronary artery assessment
- Radiation dose reduction

## Surgical Evolution

**Valve-Sparing Aortic Root Replacement:**
- David I: Reimplantation
- David II: Remodeling
- Long-term durability good
- Avoids anticoagulation
- Reproducible results

** valve Selection:**
- Mechanical vs bioprosthetic
- Patient age and preferences
- Pregnancy plans
- Compliance with anticoagulation

**Hybrid Procedures:**
- Frozen elephant trunk
- Branched grafts
- Endovascular adjuncts
- Less invasive options

## Pharmacologic Advances

**ARB Beyond Losartan:**
- Olmesartan
- Candesartan
- Valsartan
- Head-to-head studies needed

**Combination Therapy:**
- Beta-blocker + ARB
- Synergistic effect?
- Greater aortic protection?
- Ongoing trials

**Novel Agents:**
- TGF-beta neutralizing antibodies
- Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan)
- Doxycycline (MMP inhibition)
- Experimental

## Risk Prediction Models

**Aortic Event Prediction:**
- Size is primary factor
- Growth rate matters
- Family history important
- Genetic modifiers?
- Comprehensive risk models

**Pregnancy Risk Stratification:**
- Aortic diameter thresholds
- Rate of change
- Genetic factors?
- Individualized counseling

## Natural History Studies

- International registry data
- Long-term outcomes
- Treatment era comparisons
- Unraveling genotype impact

## Psychosocial Research

- Living with activity restrictions
- Body image and self-esteem
- Genetic testing experiences
- Family communication
- Reproductive decision-making

## Pediatric Considerations

- Early diagnosis benefits
- Growth considerations
- School accommodations
- Sports participation decisions
- Transition planning

## Future Directions

- Gene editing (CRISPR)
- RNA therapeutics
- Improved prosthetics
- Enhanced imaging
- Personalized medicine`,
      keyTerms: [
        { term: '4D Flow MRI', definition: 'Advanced MRI technique visualizing blood flow dynamics in three dimensions over time' },
        { term: 'wall shear stress', definition: 'Frictional force from blood flow on vessel wall; contributes to aneurysm formation' },
        { term: 'neonatal Marfan', definition: 'Severe form presenting in infancy with severe cardiac and pulmonary complications' },
      ],
      clinicalNotes: 'Valve-sparing aortic root replacement has become the preferred operation for many Marfan patients, avoiding lifelong anticoagulation. Losartan has TGF-beta modulating effects and may provide additional aortic protection. Genotype-phenotype correlations are improving but remain imperfect.',
    },
  },

  media: [],
  citations: [
    { id: 'aorta-guidelines', type: 'article', title: 'AHA/ACC Guidelines for Thoracic Aortic Disease', source: 'Circulation' },
    { id: 'ghent-criteria', type: 'article', title: 'The Ghent Criteria for Marfan Syndrome', source: 'Journal of Medical Genetics' },
  ],
  crossReferences: [
    { targetId: 'condition-aortic-aneurysm', targetType: 'condition', relationship: 'related', label: 'Aortic Aneurysm' },
    { targetId: 'condition-scoliosis', targetType: 'condition', relationship: 'related', label: 'Scoliosis' },
  ],
  tags: {
    systems: ['cardiovascular', 'musculoskeletal', 'genetic'],
    topics: ['genetics', 'cardiology', 'orthopedics'],
    keywords: ['Marfan syndrome', 'FBN1', 'aortic dissection', 'ectopia lentis', 'scoliosis', 'beta-blocker', 'losartan'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics', 'genetics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default marfan;
