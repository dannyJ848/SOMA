/**
 * Neurofibromatosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const neurofibromatosis: EducationalContent = {
  id: 'condition-neurofibromatosis',
  type: 'condition',
  name: 'Neurofibromatosis',
  alternateNames: ['NF', 'Von Recklinghausen Disease', 'NF1', 'NF2', 'Neurofibromatosis Type 1', 'Neurofibromatosis Type 2'],
  hpoId: 'HP:0001250',

  levels: {
    1: {
      level: 1,
      summary: 'Neurofibromatosis is a genetic condition that causes tumors to grow on nerves, creating cafe-au-lait spots on the skin and various other symptoms depending on the type.',
      explanation: `Neurofibromatosis (NF) is a group of genetic disorders that cause tumors to grow on nerves throughout the body. The tumors are usually benign (not cancer), but they can cause problems.

**Types of Neurofibromatosis:**
- NF1: Most common type
- NF2: Less common, different symptoms
- Schwannomatosis: Rarest type

**NF1 (Neurofibromatosis Type 1):**
- Light brown spots on skin (cafe-au-lait)
- Bumps on or under skin (neurofibromas)
- Freckles in armpits or groin
- Lisch nodules (spots in iris of eye)
- Bone problems
- Learning disabilities

**NF2 (Neurofibromatosis Type 2):**
- Tumors on hearing nerves
- Hearing loss, ringing in ears
- Balance problems
- Brain and spinal tumors

**What causes NF:**
- Caused by gene changes (mutations)
- NF1: NF1 gene
- NF2: NF2 gene
- Can be inherited from parent
- Can happen by chance

**Diagnosis:**
- Physical exam for spots and bumps
- Family history
- Imaging scans (MRI, CT)
- Hearing tests for NF2
- Genetic testing

**Treatments:**
- No cure, but symptoms can be managed
- Surgery to remove problematic tumors
- Medicines for pain
- Hearing aids or cochlear implants for NF2
- Physical therapy
- Educational support

**Life with NF:**
- Symptoms vary widely
- Some mildly affected, others severely
- Regular medical checkups important
- Support groups available`,
      keyTerms: [
        { term: 'neurofibroma', definition: 'Benign tumor that grows on nerves' },
        { term: 'cafe-au-lait spot', definition: 'Flat, light brown patch on skin that looks like coffee with milk' },
        { term: 'benign', definition: 'Not cancerous; does not spread to other parts of the body' },
      ],
      analogies: [
        'Nerves in NF are like wires with extra insulation growing on them—the neurofibromas wrap around the nerves like extra layers of tape.',
        'Cafe-au-lait spots are like birthmarks, but they have a specific color and size that help doctors diagnose NF.',
      ],
      examples: [
        'A child develops multiple light brown spots on their skin. The doctor counts them and suspects NF1.',
        'A teenager notices bumps growing under the skin. These are neurofibromas, a sign of NF1.',
      ],
      patientCounselingPoints: [
        'Keep track of any new or changing tumors.',
        'Report any rapid growth or pain in tumors.',
        'Regular checkups with an NF specialist are important.',
        'Wear sunscreen to protect skin.',
        'Tell teachers about any learning difficulties.',
        'Join an NF support group to connect with others.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurofibromatosis type 1 (NF1) is an autosomal dominant disorder caused by NF1 mutations, causing cafe-au-lait macules, neurofibromas, Lisch nodules, and optic pathway gliomas. NF2 is caused by NF2 mutations, causing bilateral vestibular schwannomas.',
      explanation: `## NF1 (von Recklinghausen Disease)

**Genetics:**
- Gene: NF1 on chromosome 17
- Tumor suppressor gene (neurofibromin)
- Autosomal dominant inheritance
- 50% transmission risk
- 50% de novo mutations

**NIH Diagnostic Criteria (2 or more):**
1. Six or more cafe-au-lait macules (>5mm prepubertal, >15mm postpubertal)
2. Two or more neurofibromas or one plexiform neurofibroma
3. Freckling in axillary or inguinal regions
4. Optic pathway glioma
5. Two or more Lisch nodules (iris hamartomas)
6. Distinctive osseous lesion (sphenoid dysplasia, tibial bowing)
7. First-degree relative with NF1

**Clinical Features:**

**Cutaneous:**
- Cafe-au-lait macules (present at birth, increase in childhood)
- Neurofibromas (appear in adolescence)
- Plexiform neurofibromas (congenital)
- Freckling (axillary, inguinal)

**Ophthalmologic:**
- Lisch nodules (iris hamartomas)
- Optic pathway glioma (15-20%)
- Glaucoma (rare)

**Orthopedic:**
- Sphenoid wing dysplasia
- Tibial dysplasia (bowing)
- Scoliosis
- Short stature

**Neurologic:**
- Optic gliomas
- Other brain tumors
- Seizures (5-10%)
- Learning disabilities

**Other:**
- Macrocephaly
- Short stature
- Precocious puberty
- Hypertension

## NF2

**Genetics:**
- Gene: NF2 on chromosome 22
- Tumor suppressor gene (merlin/schwannomin)
- Autosomal dominant
- 50% de novo mutations

**Diagnostic Criteria:**
- Bilateral vestibular schwannomas
- OR
- First-degree relative with NF2 plus:
  - Unilateral vestibular schwannoma OR
  - Any two of: meningioma, schwannoma, glioma, neurofibroma, posterior subcapsular lenticular opacity

**Clinical Features:**
- Bilateral vestibular schwannomas (acoustic neuromas)
- Hearing loss, tinnitus
- Balance problems
- Facial weakness
- Other cranial nerve schwannomas
- Meningiomas (multiple)
- Ependymomas (spinal)
- Cafe-au-lait spots (fewer than NF1)
- Skin tumors (fewer than NF1)

**Onset:**
- Later than NF1 (usually 20s)
- No neurofibromas usually
- No Lisch nodules

## Schwannomatosis

**Features:**
- Multiple schwannomas
- No vestibular schwannomas
- Severe pain
- Peripheral nerve tumors
- INI1/SMARCB1 mutations (some)

## Differential Diagnosis

- Legius syndrome (SPRED1 mutations)
- Noonan syndrome with multiple lentigines
- Constitutional mismatch repair deficiency
- Multiple lipomatosis`,
      keyTerms: [
        { term: 'neurofibromin', definition: 'Protein product of NF1 gene; regulates cell growth and acts as tumor suppressor' },
        { term: 'merlin', definition: 'Protein product of NF2 gene; links cytoskeleton to cell membrane' },
        { term: 'plexiform neurofibroma', definition: 'Diffuse, involving multiple nerve bundles; can become malignant' },
      ],
      analogies: [
        'Tumor suppressor genes are like brakes on a car. In NF, the brakes are broken, so cells grow uncontrollably and form tumors.',
      ],
      clinicalNotes: 'NF1 diagnosis requires 2 or more NIH criteria. Children may not meet criteria early—re-evaluate over time. Optic pathway gliomas occur in young children (median age 5). NF2 presents with hearing loss in young adults.',
    },
    3: {
      level: 3,
      summary: 'NF management includes surveillance for optic pathway gliomas (MRI in early childhood), treatment with MEK inhibitors for plexiform neurofibromas, surgical management of symptomatic tumors, monitoring for malignant peripheral nerve sheath tumors, and multidisciplinary care.',
      explanation: `## NF1 Management

**General Principles:**
- No cure; manage complications
- Regular surveillance
- Early intervention for complications
- Genetic counseling
- Psychosocial support

**Monitoring Protocol:**
- Annual physical exam
- Skin examination for neurofibromas
- Blood pressure monitoring
- Developmental and cognitive assessment
- Annual ophthalmologic exam until age 8
- Consider developmental optometry

**Optic Pathway Glioma:**
- Age 1-11 years, peak age 4-5
- Screening: MRI brain/orbits at diagnosis
- If asymptomatic: MRI every 6-12 months until age 8
- Symptomatic: Chemotherapy (carboplatin/vincristine)
- Radiation avoided in young children
- Vision preservation is goal

**Plexiform Neurofibroma:**
- Congenital, affecting ~30%
- Can cause disfigurement, pain, dysfunction
- Malignant transformation risk (8-13%)
- Imaging: MRI with contrast
- Surgical removal if symptomatic
- MEK inhibitors: Selumetinib (FDA approved)

**MEK Inhibitors (Selumetinib):**
- Indicated for symptomatic plexiform neurofibromas
- Response rate: ~70%
- Shrinkage and symptom improvement
- Side effects: rash, diarrhea, CPK elevation
- Long-term effects unknown

**Malignant Peripheral Nerve Sheath Tumor (MPNST):**
- Rapid growth, pain, neurological change
- MRI with contrast
- PET scan for metabolic activity
- Biopsy confirmation
- Treatment: Surgery + chemotherapy
- Poor prognosis

**Orthopedic Management:**
- Tibial dysplasia: Bracing or amputation
- Scoliosis: Bracing or surgery
- Sphenoid dysplasia: Surgical correction if symptomatic

**Cognitive Issues:**
- Learning disabilities (50%)
- ADHD (30-40%)
- Speech and language delays
- Educational support
- Neuropsychological testing

**Cutaneous Manifestations:**
- Discrete neurofibromas: Remove if symptomatic
- Laser treatment if desired
- Psychological impact of appearance

## NF2 Management

**Vestibular Schwannoma:**
- MRI with contrast
- Hearing tests: Audiogram annually
- Observe if small and asymptomatic
- Surgery or radiation when growing
- Hearing preservation attempts
- Balance rehabilitation

**Surgical Options:**
- Middle fossa approach (hearing preservation)
- Translabyrinthine (no hearing preservation)
- Retrosigmoid (hearing preservation possible)
- Risks: Facial nerve, hearing loss

**Radiation Therapy:**
- Stereotactic radiosurgery (Gamma Knife)
- Fractionated stereotactic radiotherapy
- Tumor control not cure
- Delayed hearing loss possible
- Risk of malignant transformation

**Hearing Rehabilitation:**
- Hearing aids
- Cochlear implants (if auditory nerve intact)
- Auditory brainstem implant (if nerve sacrificed)
- Communication strategies

**Other Tumors:**
- Meningiomas: Observe or resect
- Spinal ependymomas: Surgical
- Schwannomas of other nerves: Symptomatic treatment

**Genetic Counseling:**
- 50% risk to offspring
- Prenatal testing available
- Preimplantation genetic diagnosis`,
      keyTerms: [
        { term: 'MEK inhibitor', definition: 'Targeted therapy blocking MEK kinase; shrinks plexiform neurofibromas in NF1' },
        { term: 'MPNST', definition: 'Malignant peripheral nerve sheath tumor; aggressive cancer arising from nerve sheath' },
        { term: 'auditory brainstem implant', definition: 'Device that provides hearing sensation by stimulating brainstem directly' },
      ],
      clinicalNotes: 'Children with NF1 need regular eye exams until age 8 to screen for optic gliomas. Selumetinib is FDA-approved for symptomatic plexiform neurofibromas. Watch for rapid growth or pain in neurofibromas—could indicate malignant transformation. NF2 patients need annual MRI and hearing tests.',
    },
    4: {
      level: 4,
      summary: 'Advanced NF care includes management of malignant peripheral nerve sheath tumors, treatment of inoperable plexiform neurofibromas with MEK inhibitors, comprehensive audiologic management in NF2, surgical decision-making for vestibular schwannomas, and psychosocial support.',
      explanation: `## Malignant Peripheral Nerve Sheath Tumor (MPNST)

**Risk Factors:**
- Plexiform neurofibroma
- Previous radiation
- Large tumor burden
- NF1 diagnosis

**Detection:**
- High index of suspicion
- Rapid growth, pain
- Neurologic deficit
- Hard, fixed mass
- MRI with contrast
- FDG-PET for metabolic activity
- Biopsy for diagnosis

**Treatment:**
- Wide local excision
- Amputation may be necessary
- Chemotherapy: Doxorubicin/ifosfamide
- Radiation: Adjuvant or palliative
- Clinical trials

**Prognosis:**
- 5-year survival: 30-50%
- Worse with large size, metastasis
- Early detection critical

## Plexiform Neurofibroma Management

**Selumetinib Details:**
- Dosing: 25 mg/m2 twice daily
- Continuous dosing
- Response rate: 68-71%
- Median time to response: 8 cycles
- Durable responses
- FDA approved 2020

**Side Effects:**
- Dermatologic acneiform rash (70%)
- Diarrhea (60%)
- Fatigue
- CPK elevation (muscle toxicity)
- Cardiomyopathy (rare)

**Other MEK Inhibitors:**
- Mirdametinib (PD-0325901)
- Trametinib
- Binimetinib
- Ongoing clinical trials

**Surgical Considerations:**
- Complete resection rarely possible
- Recurrence common
- Reconstructive surgery
- Preoperative embolization

## NF2 Hearing Preservation

**Observation Strategy:**
- Tumors <1.5 cm: Watch
- Monitor with MRI
- Audiograms every 6 months
- Intervene when growth or hearing decline

**Surgical Approaches:**
- Middle fossa: Best hearing preservation
- Requires anterior location
- Small tumor size
- Experienced surgeon essential

**Radiosurgery:**
- Gamma Knife, CyberKnife
- Tumor control: 90%+
- Hearing preservation: 50-70% at 5 years
- Delayed hearing loss common
- Risk of secondary malignancy

**Auditory Rehabilitation:**
- Cochlear implant if cochlear nerve preserved
- Auditory brainstem implant if nerve sacrificed
- Hearing aids for contralateral ear
- Assistive listening devices

## Psychosocial Aspects

**Body Image:**
- Disfigurement from plexiform tumors
- Visible neurofibromas
- Surgical scars
- Psychological support

**Cognitive Challenges:**
- Executive function deficits
- Attention problems
- Learning disabilities
- Educational accommodations
- Vocational support

**Pain Management:**
- Neuropathic pain from tumors
- Medications: Gabapentin, pregabalin
- Physical therapy
- Psychological interventions
- Multidisciplinary pain clinic

## Pregnancy Considerations

**NF1:**
- Neurofibromas may enlarge during pregnancy
- New neurofibromas may appear
- Hypertension monitoring (pheochromocytoma)
- Vaginal delivery usually safe
- Cesarean if large pelvic tumors

**NF2:**
- Preconception counseling
- Tumor growth during pregnancy
- Anesthesia considerations
- Genetic counseling

## Transition to Adult Care

- Pediatric to adult services
- Reproductive counseling
- Vocational planning
- Insurance issues
- Independence support`,
      keyTerms: [
        { term: 'FDG-PET', definition: 'Positron emission tomography with FDG; detects metabolic activity in tumors' },
      ],
      clinicalNotes: 'Selumetinib has revolutionized treatment of inoperable plexiform neurofibromas. Monitor for dermatologic and GI side effects. Early detection of MPNST is critical but challenging—educate patients about warning signs. NF2 hearing preservation requires experienced surgical teams.',
    },
    5: {
      level: 5,
      summary: 'Contemporary NF management incorporates targeted therapies (MEK inhibitors, mTOR inhibitors), immunotherapy approaches, genetic testing for precision medicine, clinical trial enrollment, and comprehensive surveillance strategies.',
      explanation: `## Targeted Therapies

**MEK Inhibitors (Selumetinib):**
- FDA approved for pediatric plexiform NF
- Ongoing trials for adults
- Combination strategies
- Biomarker development

**mTOR Inhibitors:**
- Sirolimus (rapamycin)
- Everolimus
- Variable results
- Neurofibroma volume reduction
- Clinical trials ongoing

**Other Targets:**
- RAS pathway inhibitors
- Farnesyltransferase inhibitors
- Tyrosine kinase inhibitors
- HSP90 inhibitors
- PI3K/AKT/mTOR pathway

## Immunotherapy

**Immune Checkpoint Inhibitors:**
- PD-1/PD-L1 inhibitors
- MPNST treatment
- Limited data
- Clinical trials

**Vaccines:**
- Neurofibroma vaccine approaches
- Targeting tumor antigens
- Early development

**Adoptive Cell Therapy:**
- CAR-T cells
- Tumor-infiltrating lymphocytes
- Experimental

## Genetic Advances

**Genotype-Phenotype:**
- NF1 mutation type correlations
- Microdeletions: Severe phenotype
- Missense: Milder phenotype
- Mosaicism: Segmental NF
- Prenatal diagnosis available

**Mosaicism:**
- Segmental NF1
- Post-zygotic mutations
- Mild or localized disease
- May not meet diagnostic criteria
- Genetic counseling challenges

**Schwannomatosis Genetics:**
- SMARCB1/INI1 mutations (some)
- LZTR1 mutations (some)
- Third locus (22q?)
- Genetic testing available

## Clinical Trial Design

**Challenges:**
- Rare disease
- Variable expressivity
- Endpoint selection
- Placebo control ethical?
- Long-term outcomes

**Endpoints:**
- Tumor volume reduction
- Symptom improvement
- Quality of life
- Functional measures
- Biomarker validation

## Natural History Studies

- NF Natural History Consortium
- Longitudinal data
- Biomarker discovery
- Predict progression

## Precision Medicine

- Molecular profiling of tumors
- Individualized therapy selection
- Pharmacogenomics
- Risk prediction models

## Future Directions

- Gene editing (CRISPR)
- RNA therapeutics
- Improved delivery systems
- Combination therapies
- Prevention strategies

## Quality of Life Research

- Patient-reported outcomes
- Pain assessment tools
- Social participation
- Employment outcomes
- Burden of disease`,
      keyTerms: [
        { term: 'mosaicism', definition: 'Presence of cells with NF mutation in only some body regions; causes localized disease' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin; signaling pathway targeted in NF tumors' },
      ],
      clinicalNotes: 'Selumetinib is the first FDA-approved medical therapy for plexiform neurofibromas in NF1. MEK inhibitors represent a paradigm shift from surgery to targeted therapy. Research continues on mTOR inhibitors and immunotherapy. Genetic testing helps with prognosis and family planning.',
    },
  },

  media: [],
  citations: [
    { id: 'nf-consensus', type: 'article', title: 'Neurofibromatosis Consensus Statement', source: 'Neurology' },
    { id: 'nih-nf1', type: 'website', title: 'NIH Consensus Development Conference Statement on Neurofibromatosis', source: 'National Institutes of Health' },
  ],
  crossReferences: [
    { targetId: 'condition-sarcoma', targetType: 'condition', relationship: 'related', label: 'Soft Tissue Sarcoma' },
  ],
  tags: {
    systems: ['nervous', 'integumentary', 'genetic'],
    topics: ['genetics', 'neurology', 'dermatology', 'oncology'],
    keywords: ['neurofibromatosis', 'NF1', 'NF2', 'neurofibroma', 'cafe-au-lait', 'schwannoma', 'selumetinib'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'dermatology', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurofibromatosis;
