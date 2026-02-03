/**
 * Tooth Eruption - Comprehensive Educational Content
 *
 * Covers the timeline of primary and permanent tooth eruption,
   developmental milestones, eruption disturbances, and clinical
   significance of eruption timing.
 */

import { EducationalContent } from '../types';

export const toothEruption: EducationalContent = {
  id: 'topic-tooth-eruption',
  type: 'topic',
  name: 'Tooth Eruption',
  alternateNames: [
    'Dental Eruption',
    'Teeth Timeline',
    'Primary Dentition',
    'Permanent Dentition',
    'Tooth Development',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Tooth eruption is when teeth move through the gums and become visible in the mouth. Children get 20 baby teeth starting around 6 months, and adults have 32 permanent teeth that begin appearing around age 6.',
      explanation: `**Baby Teeth (Primary Teeth)**

Baby teeth are also called primary or deciduous teeth. Children get 20 baby teeth.

**When Baby Teeth Appear:**

| Age | Teeth Coming In |
|-----|----------------|
| 6-10 months | Bottom front teeth (central incisors) |
| 8-12 months | Top front teeth (central incisors) |
| 9-13 months | More front teeth (lateral incisors) |
| 13-19 months | First molars (back teeth) |
| 16-23 months | Canines (pointy teeth) |
| 23-33 months | Second molars |

By age 3, most children have all 20 baby teeth.

**When Baby Teeth Fall Out:**
- Age 6-7: Front teeth start falling out
- Age 10-12: Last baby teeth fall out
- Each tooth is replaced by a permanent tooth

**Permanent Teeth (Adult Teeth)**

Adults have up to 32 permanent teeth (including wisdom teeth).

**When Permanent Teeth Appear:**

| Age | Teeth Coming In |
|-----|----------------|
| 6-7 years | First molars (behind baby teeth) |
| 6-8 years | Front incisors (replace baby teeth) |
| 9-12 years | Canines, premolars |
| 11-13 years | Second molars |
| 17-25 years | Wisdom teeth (third molars) |

**Important Things to Know:**

1. **Every child is different** - Some teeth come in earlier or later and that's usually OK
2. **Girls often get teeth earlier than boys**
3. **Lower teeth usually come in before upper teeth**
4. **Teeth on one side come in about the same time as the same tooth on the other side**

**When to See a Dentist:**
- No teeth by age 12 months
- Baby teeth not falling out by age 7-8
- Permanent teeth coming in behind baby teeth (shark teeth)
- Pain or swelling
- Adult teeth not coming in by expected ages`,
      keyTerms: [
        { term: 'primary teeth', definition: 'Baby teeth - the first set of 20 teeth' },
        { term: 'permanent teeth', definition: 'Adult teeth - the second set of up to 32 teeth' },
        { term: 'eruption', definition: 'When teeth move through the gums and become visible' },
        { term: 'wisdom teeth', definition: 'Third molars that come in during late teen years or early 20s' },
        { term: 'incisors', definition: 'Front teeth used for cutting' },
      ],
      analogies: [
        'Tooth eruption is like a flower pushing through soil - it grows underneath and eventually breaks through the surface.',
        'Baby teeth are like placeholders - they save space for the permanent teeth that will replace them.',
      ],
      examples: [
        'If a child still has a baby tooth at age 14, the dentist should check why the permanent tooth hasn\'t pushed it out.',
        'Most people get their wisdom teeth between ages 17-25, but some people never get them at all.',
      ],
      patientCounselingPoints: [
        'Bring your child for their first dental visit by age 1 or when the first tooth appears',
        'Baby teeth are important - they hold space for permanent teeth and help with speech and eating',
        'If you notice permanent teeth coming in behind baby teeth, see the dentist - this is usually normal but should be checked',
      ],
    },
    2: {
      level: 2,
      summary: 'Tooth eruption follows predictable patterns with normal variation. The primary dentition consists of 20 teeth erupting from 6-33 months. Permanent dentition includes 32 teeth erupting from 6-25 years, including third molars. Mixed dentition spans ages 6-12.',
      explanation: `## Primary Dentition (Deciduous Teeth)

**Eruption Sequence and Ages:**

| Tooth | Eruption (months) | Exfoliation (years) | Permanent Successor |
|-------|-------------------|---------------------|---------------------|
| Maxillary central incisor | 8-12 | 7-8 | Central incisor |
| Maxillary lateral incisor | 9-13 | 8-9 | Lateral incisor |
| Maxillary canine | 16-22 | 10-12 | Canine |
| Maxillary first molar | 13-19 | 9-11 | First premolar |
| Maxillary second molar | 25-33 | 10-12 | Second premolar |
| Mandibular central incisor | 6-10 | 6-7 | Central incisor |
| Mandibular lateral incisor | 10-16 | 7-8 | Lateral incisor |
| Mandibular canine | 16-23 | 9-12 | Canine |
| Mandibular first molar | 13-19 | 9-11 | First premolar |
| Mandibular second molar | 23-31 | 10-12 | Second premolar |

**Primary Dentition Facts:**
- Total: 20 teeth (10 maxillary, 10 mandibular)
- Eruption complete by ~33 months
- No premolars in primary dentition
- No third molars in primary dentition
- Mixed dentition begins with first permanent molar eruption (~6 years)

## Permanent Dentition

**Eruption Sequence and Ages:**

| Tooth | Eruption (years) | Root Complete (years) |
|-------|------------------|----------------------|
| Maxillary central incisor | 7-8 | 10 |
| Maxillary lateral incisor | 8-9 | 11 |
| Maxillary canine | 11-12 | 13-15 |
| Maxillary first premolar | 10-11 | 12-13 |
| Maxillary second premolar | 10-12 | 12-14 |
| Maxillary first molar | 6-7 | 9-10 |
| Maxillary second molar | 12-13 | 14-16 |
| Maxillary third molar | 17-25 | 18-25 |
| Mandibular central incisor | 6-7 | 9 |
| Mandibular lateral incisor | 7-8 | 10 |
| Mandibular canine | 9-10 | 12-14 |
| Mandibular first premolar | 10-12 | 12-13 |
| Mandibular second premolar | 11-12 | 13-14 |
| Mandibular first molar | 6-7 | 9-10 |
| Mandibular second molar | 11-13 | 14-15 |
| Mandibular third molar | 17-25 | 18-25 |

**Permanent Dentition Facts:**
- Total: 32 teeth (16 maxillary, 16 mandibular)
- First permanent teeth: First molars (~6 years)
- Before exfoliation of any primary teeth
- Often mistaken for primary teeth
- Important to recognize and clean early

## Mixed Dentition

**Definition:** Period when both primary and permanent teeth are present (approximately ages 6-12)

**Characteristics:**
- Gradual replacement of primary teeth
- Space management critical
- Orthodontic problems may become apparent
- Hygiene more challenging

**Key Events:**
1. First molar eruption (age 6)
2. Incisor replacement (6-9 years)
3. First premolar eruption (10-12 years)
4. Canine eruption (9-12 years)
5. Second molar eruption (11-13 years)

## Normal Variation

**Eruption Timing:**
- ±6 months variation for primary teeth
- ±12 months variation for permanent teeth
- Girls generally earlier than boys
- Lower teeth generally before upper

**Sequence Variations:**
- Eruption sequence may vary slightly
- Sequence more important than timing
- Symmetry expected (right/left within ~6 months)

**Third Molar Variation:**
- May erupt 17-25 years
- May be partially erupted
- May be impacted (fail to erupt)
- May be congenitally missing (agenesis)
- Agenesis: ~35% of population missing at least one

**Agenesis (Missing Teeth):**
- Third molars most commonly missing
- Second premolars, lateral incisors next
- May be familial or sporadic
- Congenital: Failure to form

**Supernumerary Teeth (Extra Teeth):**
- Mesiodens: Between central incisors (most common)
- Distomolar: Fourth molar
- May cause eruption/alignment problems
- Radiographic detection needed`,
      keyTerms: [
        { term: 'mixed dentition', definition: 'Period when both primary and permanent teeth are present (ages ~6-12)' },
        { term: 'exfoliation', definition: 'Shedding of primary teeth' },
        { term: 'agenesis', definition: 'Failure of teeth to form' },
        { term: 'supernumerary', definition: 'Extra teeth beyond normal number' },
        { term: 'impaction', definition: 'Failure of tooth to erupt due to obstruction' },
        { term: 'mesiodens', definition: 'Supernumerary tooth between maxillary central incisors' },
      ],
      analogies: [
        'The mixed dentition period is like a construction zone - old structures coming down while new ones go up.',
        'First permanent molars are like the foundation - they come in before any baby teeth are lost.',
      ],
      clinicalNotes: 'First permanent molars erupt behind primary teeth and are often missed by parents. Asymmetrical eruption (>6 month difference) warrants investigation. Mesiodens can cause permanent incisor impaction - early detection important.',
      patientCounselingPoints: [
        'First permanent molars appear around age 6 behind the baby teeth - easy to miss!',
        'Your child should see an orthodontist by age 7 to evaluate eruption and alignment',
        'Wisdom teeth may need to be removed if they\'re causing problems or likely to cause problems',
      ],
    },
    3: {
      level: 3,
      summary: 'Tooth eruption is a complex developmental process involving osteoclast-mediated bone resorption, apical migration of the epithelial root sheath, and eruptive forces from the dental follicle. Variations from normal patterns may indicate local or systemic pathology.',
      explanation: `## Eruption Mechanism

**Pre-eruptive Phase:**
- Tooth formation within jaw
- Movement within crypt
- Accommodation for growing jaws
- No bone resorption

**Eruptive Phase:**
- Root formation begins (1/2 to 3/4 complete)
- Dental follicle signaling
- Osteoclast recruitment
- Bone resorption leading path
- Tooth moves occlusally

**Post-eruptive Phase:**
- Tooth reaches occlusal plane
- Continues to erupt until in contact
- Compensates for occlusal wear
- Continuous slow movement

**Molecular Mechanisms:**

*Dental Follicle Signaling:*
- RANKL: Osteoclast differentiation
- M-CSF: Macrophage colony-stimulating factor
- Osteoprotegerin (OPG): RANKL decoy
- Balanced bone resorption/apposition

*Stem Cells:*
- Dental follicle stem cells
- Differentiate into osteoclasts/osteoblasts
- Coordinate eruption pathway

**The Eruption Path:**
- Overlying bone must resorb
- Osteoclasts create channel
- Dental follicle orchestrates process
- Enamel organ appears to "push" but is passive

## Chronology of Development

**Nolla Stages of Tooth Development:**
- Stage 0: No calcification
- Stage 1: Calcification beginning (1/8 complete)
- Stage 2: 1/4 complete
- Stage 3: 1/2 complete
- Stage 4: 3/4 complete (crown complete)
- Stage 5: Root 1/4 complete
- Stage 6: Root 1/2 complete (eruption begins)
- Stage 7: Root 3/4 complete
- Stage 8: Root complete
- Stage 9: Apical closure

**Calcification Timing:**

| Tooth | Calcification Begins | Crown Complete | Root Complete |
|-------|---------------------|----------------|---------------|
| Primary central incisor | 14 weeks IU | 1.5 mo | 1.5-2 yr |
| Primary first molar | 28 weeks IU | 5-6 mo | 2-3 yr |
| Permanent first molar | At birth | 2.5-3 yr | 9-10 yr |
| Permanent central incisor | 3-4 mo | 4-5 yr | 9-10 yr |
| Permanent canine | 4-5 mo | 6-7 yr | 12-14 yr |
| Permanent third molar | 7-10 yr | 12-16 yr | 18-25 yr |

**Clinical Timing Assessment:**
- Compare erupted vs. unerupted
- Assess symmetry (right vs. left)
- Root development on radiographs
- Sequence more important than absolute timing

## Eruption Disturbances

**Delayed Eruption:**

| Etiology | Examples |
|----------|----------|
| Local | Crowding, premature primary loss, ankylosis |
| Systemic | Hypothyroidism, Down syndrome, malnutrition |
| Idiopathic | Familial patterns |

**Premature Eruption:**
- Natal teeth: Present at birth
- Neonatal teeth: Erupt within first month
- Usually mandibular incisors
- May be supernumerary or normal primary teeth early
- Consider removal if causing feeding problems or risk of aspiration

**Eruption Sequestrum:**
- Small bone fragment over erupting tooth
- Creates temporary delay
- Usually resorbs spontaneously

**Ankylosis:**
- Fusion of tooth to alveolar bone
- No eruption progression
- infraocclusion: Tooth below occlusal plane
- Primary molars most commonly affected
- "Submerged" appearance

**Impaction:**
- Failure to erupt due to obstruction
- Third molars, canines, premolars
- Etiology: Space, position, obstruction
- May require surgical exposure + orthodontics

**Dilaceration:**
- Abnormal root curvature
- During development, trauma displaces tooth germ
- Eruption may be delayed, altered path
- May cause surgical/orthodontic challenges

## Clinical Implications

**Space Maintenance:**
- Primary teeth maintain space
- Premature loss: Space loss occurs
- Drift, mesial migration
- Band-and-loop, Nance, lingual arch

**Ectopic Eruption:**
- First permanent molar: Mesially inclined under primary second molar
- Canines: Buccal or palatal eruption
- May cause primary tooth resorption
- Early intervention possible

**Primary-to-Permanent Transition:**
- Incisor liability: Arch length discrepancy
- Leeway space: Extra space in primary canine/molar region
- Ugly duckling stage: Midline diastema (normal, self-correcting)
- Canine rise: Canines distalize incisors

**Radiographic Assessment:**
- Panoramic: Overview, missing teeth, impactions
- Periapicals: Specific tooth assessment
- Bitewings: Interproximal caries, space assessment
- CBCT: Complex impactions, pathology

**Orthodontic Timing:**
- Age 7: First orthodontic evaluation
- Early treatment: Functional appliances, space maintenance
- Comprehensive treatment: Most permanent teeth erupted
- Third molar assessment: Mid-teens`,
      keyTerms: [
        { term: 'dental follicle', definition: 'Connective tissue sac surrounding developing tooth; essential for eruption' },
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; stimulates osteoclasts' },
        { term: 'ankylosis', definition: 'Fusion of tooth to bone without periodontal ligament' },
        { term: 'infraocclusion', definition: 'Tooth below the occlusal plane; often due to ankylosis' },
        { term: 'leeway space', definition: 'Space difference between primary canine/molar and permanent premolars' },
        { term: 'dilaceration', definition: 'Sharp bend or curvature in the root' },
      ],
      clinicalNotes: 'Asymmetric eruption (>6 month side-to-side difference) warrants investigation. Ectopic first molars can be disimpacted with elastic separation if caught early. Ugly duckling stage (7-11 years) is self-correcting - no treatment needed. Canine impaction is common - early radiographic detection allows interceptive treatment.',
      patientCounselingPoints: [
        'Asymmetrical eruption (one side much earlier than the other) should be evaluated',
        'Early orthodontic evaluation by age 7 can catch eruption problems early',
        'Space between front teeth (ugly duckling stage) is usually normal and closes on its own',
      ],
    },
    4: {
      level: 4,
      summary: 'Eruption is a complex developmental process involving molecular signaling pathways, stem cell populations, and coordinated tissue remodeling. Abnormal eruption patterns may reflect systemic conditions or genetic syndromes, requiring comprehensive evaluation.',
      explanation: `## Molecular Regulation of Eruption

**Key Signaling Pathways:**

*RANK-RANKL-OPG System:*
- RANKL (osteoclast differentiation)
- OPG (decoy receptor)
- M-CSF (osteoclast activation)
- Dental follicle secretes RANKL
- Balance regulates bone resorption

*Growth Factors:*
- TGF-β: Follicle development
- BMP: Bone remodeling
- FGF: Cell proliferation
- IGF: Eruption velocity
- VEGF: Vascularization

*Transcription Factors:*
- Runx2: Osteoblast differentiation
- Msx1/2: Tooth development
- Pax9: Tooth formation
- Disturbances cause eruption failure

**Stem Cell Populations:**
- Dental follicle stem cells (DFSCs)
- Can differentiate into osteoclasts/osteoblasts
- Apical papilla stem cells (SCAPs)
- Periodontal ligament stem cells (PDLSCs)
- Regenerative potential

## Systemic Conditions Affecting Eruption

**Endocrine Disorders:**

*Hypothyroidism:*
- Delayed eruption
- Delayed exfoliation of primary teeth
- Short roots
- Microdontia
- Thyroid replacement accelerates eruption

*Hyperthyroidism:*
- Possible early eruption
- Advanced bone age
- Root resorption

*Growth Hormone Deficiency:*
- Delayed eruption
- Delayed exfoliation
- Proportional dwarfism
- GH treatment normalizes timing

*Hypopituitarism:*
- Delayed eruption and exfoliation
- Multiple hormone deficiencies
- May be first sign

**Genetic Syndromes:**

| Syndrome | Eruption Features |
|----------|------------------|
| Cleidocranial dysplasia | Delayed eruption, supernumeraries, failure of exfoliation |
| Down syndrome | Delayed eruption, missing teeth, malformed teeth |
| Ectodermal dysplasia | Missing teeth, delayed eruption |
| Gardner syndrome | Supernumerary teeth, osteomas |
| Apert syndrome | Delayed eruption, crowding |

*Cleidocranial Dysplasia:*
- RUNX2 mutation
- Multiple supernumerary teeth
- Retained primary teeth
- Impacted permanent teeth
- "Double set of teeth" appearance
- Treatment: Multiple extractions, surgical exposure, orthodontics

**Nutritional Influences:**

*Vitamin D Deficiency (Rickets):*
- Delayed eruption
- Defective dentin
- Enamel hypoplasia
- Poor mineralization

*Vitamin A Excess:*
- Premature eruption?
- Craniofacial anomalies
- Studies conflicting

*Protein-Energy Malnutrition:*
- Delayed eruption
- Delayed exfoliation
- Reduced tooth size
- Enamel defects

*Calcium Deficiency:*
- Minimal effect on eruption timing
- More effect on mineralization

## Clinical Syndromes Involving Eruption

**Natal/Neonatal Teeth:**
- Incidence: 1:2000-3000
- Usually mandibular central incisors
- May be normal primary teeth (early) or supernumerary
- Complications: Feeding difficulty, Riga-Fede disease (ulceration)
- Treatment: Observation if stable, extraction if mobile, problematic

**Eruption Cyst/Dentigerous Cyst:**
- Fluid-filled over erupting tooth
- Blue-gray, swollen
- Usually erupts spontaneously
- May require unroofing if persistent

**Premature Exfoliation:**

*Local Causes:*
- Periapical infection
- Trauma
- Aggressive resorption
- Periodontal disease (rare in children)

*Systemic Causes:*
- Hyperthyroidism
- Hypophosphatasia
- Histiocytosis X
- Leukemia
- Langerhans cell disease

**Ectopic Eruption Patterns:**

*Maxillary Canines:*
- Palatal impaction: 1-2%
- Buccal eruption: Less common
- Etiology: Space, guidance, lateral incisor anomalies
- Radiographic signs by age 10-11
- Early intervention: Extraction of primary canine, exposure

*Maxillary First Molars:*
- Mesial tipping under second primary molar
- "Permanent first molar ectopic eruption"
- Resorption of primary second molar
- Treatment: Elastic separation, disimpaction
- Best results if caught early

*Mandibular Incisors:*
- Lingual eruption (followed by spontaneous correction)
- "Shark teeth": Permanent lingual to primary
- Usually self-correcting as primary exfoliates

## Diagnostic Imaging

**Eruption Assessment:**

*Panoramic Radiograph:*
- Overview of all teeth
- Missing teeth
- Impactions
- Eruption path
- Developmental stage

*Cephalometric Radiograph:*
- Skeletal relationship
- Eruption direction
- Space analysis

*Periapicals:*
- Specific tooth detail
- Root development
- Adjacent structures

*CBCT:*
- Three-dimensional visualization
- Complex impactions
- Relationship to adjacent structures
- Exact position

## Treatment Considerations

**Surgical Exposure:**
- Indicated for impacted teeth
- Canines, premolars
- Open vs. closed eruption
- Orthodontic traction

**Space Maintenance:**
- Loss of primary tooth
- Preserve space for permanent
- Multiple appliances available
- Must be maintained until permanent eruption

**Interceptive Orthodontics:**
- Early correction of eruption problems
- Crossbites
- Habits affecting eruption
- Space regaining

**Extraction Decisions:**
- Primary vs. permanent
- Supernumerary teeth
- Compromised teeth
- Orthodontic extraction`,
      keyTerms: [
        { term: 'RUNX2', definition: 'Transcription factor for bone formation; mutations cause cleidocranial dysplasia' },
        { term: 'Riga-Fede disease', definition: 'Ulceration of ventral tongue from natal teeth' },
        { term: 'dentigerous cyst', definition: 'Fluid-filled cyst around crown of unerupted tooth' },
        { term: 'disimpaction', definition: 'Freeing an impacted tooth from obstruction' },
      ],
      clinicalNotes: 'Cleidocranial dysplasia requires complex management: extract supernumeraries, expose impacted teeth, orthodontic treatment. Maxillary canine impaction should be screened by age 11. Ectopic first molars: early separation (before 8 years) most successful.',
    },
    5: {
      level: 5,
      summary: 'Current research focuses on molecular therapies to enhance or delay eruption, stem cell applications for eruption disorders, and biomimetic approaches to guide eruption. The integration of genetic testing and advanced imaging allows for personalized management of eruption disturbances.',
      explanation: `## Emerging Molecular Therapies

**Modulating Eruption:**

*RANKL Inhibition:*
- Denosumab: Osteoclast inhibition
- Delays eruption (side effect of therapy)
- Potential application: Control eruption timing
- Challenges: Systemic effects

*Growth Factor Applications:*
- BMP: Enhances bone formation
- VEGF: Promotes vascularization
- Research stage: Clinical applications limited

*Stem Cell Therapies:*
- Dental follicle stem cells
- Regeneration of eruption pathway
- Experimental: Not clinically available

**Diagnostic Advances:**

*Genetic Testing:*
- Panel testing for eruption disorders
- RUNX2, PAX9, MSX1
- Early identification of syndromes
- Personalized treatment planning

*Biomarkers:*
- Salivary biomarkers for eruption
- GDF-15, osteopontin
- Research stage

*Advanced Imaging:*
- CBCT for precise localization
- 3D modeling for surgical planning
- Navigation for impacted teeth
- Virtual surgical planning

## Future Directions

**Biomimetic Eruption Guidance:**
- Scaffold-based eruption pathways
- Controlled release of signaling molecules
- Stem cell homing
- Personalized approaches

**Tissue Engineering:**
- Regeneration of dental follicle
- Stem cell applications
- Gene therapy for genetic defects
- Clinical translation challenges

**AI-Assisted Prediction:**
- Machine learning eruption timing
- Impaction risk assessment
- Treatment outcome prediction
- Personalized protocols

**Minimally Invasive Techniques:**
- Piezoelectric surgery
- Laser-assisted exposure
- Accelerated eruption
- Reduced morbidity

## Clinical Practice Evolution

**Precision Medicine:**
- Genetic profiling for eruption disorders
- Personalized extraction timing
- Biomarker-guided intervention
- Individualized orthodontic treatment

**Team-Based Care:**
- Pediatric dentist
- Orthodontist
- Oral surgeon
- Geneticist (when indicated)
- Coordinated management

**Evidence-Based Protocols:**
- Timing of interventions
- Extraction vs. retention
- Surgical exposure timing
- Expected outcomes

## Global Health Considerations

**Access to Care:**
- Early intervention availability
- Specialist access disparities
- Cost considerations
- Tele-orthodontics potential

**Prevention:**
- Space maintenance
- Early detection
- Parent education
- Screening protocols`,
      keyTerms: [
        { term: 'denosumab', definition: 'RANKL inhibitor monoclonal antibody; osteoclast inhibition' },
        { term: 'GDF-15', definition: 'Growth differentiation factor 15; potential eruption biomarker' },
      ],
      clinicalNotes: `Future clinical practice:
1. Genetic testing will identify eruption disorder risks early
2. CBCT with AI will predict eruption paths and impaction risks
3. Stem cell therapies may enable regeneration of eruption pathways
4. Team-based coordinated care will optimize outcomes
5. Minimally invasive techniques will reduce morbidity`,
    },
  },

  media: [
    {
      id: 'eruption-timeline',
      type: 'diagram',
      filename: 'tooth-eruption-timeline.svg',
      title: 'Tooth Eruption Timeline',
      description: 'Primary and permanent tooth eruption chronology',
    },
    {
      id: 'mixed-dentition',
      type: 'diagram',
      filename: 'mixed-dentition.svg',
      title: 'Mixed Dentition',
      description: 'Mixed dentition showing primary and permanent teeth',
    },
  ],

  citations: [
    {
      id: 'ash-eruption',
      type: 'textbook',
      title: 'Wheeler\'s Dental Anatomy, Physiology and Occlusion',
      authors: ['Ash, M.M.', 'Nelson, S.J.'],
      source: 'Elsevier',
      chapter: 'Chapters 10-14',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
    { targetId: 'procedure-orthodontics-basics', targetType: 'topic', relationship: 'related', label: 'Orthodontics' },
    { targetId: 'topic-children-dental-care', targetType: 'topic', relationship: 'related', label: 'Children Dental Care' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['tooth', 'alveolar-bone', 'dental-follicle'],
    topics: ['development', 'pediatrics', 'chronology'],
    keywords: ['eruption', 'primary dentition', 'permanent dentition', 'mixed dentition', 'impaction', 'agenesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toothEruption;
