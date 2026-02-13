/**
 * Testicular Conditions - Educational Content
 */

import { EducationalContent } from '../../types';

export const testicularConditions: EducationalContent = {
  id: 'topic-testicular-conditions',
  type: 'topic',
  name: 'Testicular Conditions',
  alternateNames: ['Scrotal Conditions', 'Testicular Problems', 'Scrotal Pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'The testicles can be affected by swelling, pain, twisting, or lumps that require medical attention.',
      explanation: `The testicles (testes) are the two egg-shaped organs in the scrotum that make sperm and testosterone.

**Common Conditions:**

**Hydrocele:**
- Fluid around the testicle
- Usually painless swelling
- Often needs no treatment

**Varicocele:**
- Enlarged veins like varicose veins
- May affect fertility
- Usually on left side

**Epididymitis:**
- Infection of the tube behind testicle
- Causes pain and swelling
- Treated with antibiotics

**Testicular Torsion:**
- Testicle twists on its cord
- EMERGENCY - severe sudden pain
- Needs surgery within hours

**When to Seek Help Immediately:**
- Sudden severe testicular pain
- Testicle feels higher than usual
- Nausea with testicular pain

**Regular Self-Exams:**
- Check for lumps monthly
- Best done after warm shower
- Any hard lump needs doctor visit`,
      keyTerms: [
        { term: 'testicle', definition: 'Male organ that makes sperm and testosterone' },
        { term: 'scrotum', definition: 'Skin pouch holding the testicles' },
        { term: 'torsion', definition: 'Twisting of the testicle cutting off blood supply' },
      ],
      analogies: [
        'Testicular torsion is like a garden hose getting kinked - blood flow stops.',
        'A hydrocele is like the testicle sitting in a water balloon.',
      ],
      examples: [
        'Sudden severe testicular pain should always be treated as an emergency until proven otherwise.',
      ],
    },
    2: {
      level: 2,
      summary: 'Testicular and scrotal conditions include torsion (emergency), epididymitis, hydrocele, varicocele, and masses requiring differentiation between benign and malignant causes.',
      explanation: `## Testicular Torsion

**Presentation:**
- Sudden severe pain
- Nausea/vomiting
- Absent cremasteric reflex
- High-riding testicle

**Time Critical:**
- 4-6 hours: 90% salvage
- 12 hours: 20% salvage
- >24 hours: Near 0%

**Management:**
- Immediate surgical exploration
- Manual detorsion may buy time
- Bilateral orchiopexy

## Epididymitis/Orchitis

**Age <35:**
- STI (Chlamydia, Gonorrhea)
- Evaluate and treat partner
- Doxycycline + Ceftriaxone

**Age >35:**
- E. coli, gram negatives
- Associated with UTI/BPH
- Fluoroquinolones

**Differentiate from Torsion:**
- Gradual onset
- Positive cremasteric reflex
- Prehn's sign may help
- Ultrasound if uncertain

## Hydrocele

**Types:**
- Communicating (pediatric)
- Non-communicating (adult)

**Evaluation:**
- Transilluminates
- Ultrasound if mass concern

**Treatment:**
- Observation if asymptomatic
- Hydrocelectomy if symptomatic

## Varicocele

**Epidemiology:**
- 15% of all males
- 40% of infertile men

**Features:**
- "Bag of worms" feel
- Left > Right (85%)
- Worse standing

**Treatment Indications:**
- Infertility
- Pain
- Testicular atrophy in adolescents`,
      keyTerms: [
        { term: 'cremasteric reflex', definition: 'Testicular elevation with inner thigh stroke - absent in torsion' },
        { term: 'orchiopexy', definition: 'Surgical fixation of testicle to prevent torsion' },
        { term: 'transillumination', definition: 'Light passing through fluid-filled mass (hydrocele)' },
      ],
      analogies: [
        'Varicocele feels like a bag of worms above the testicle due to dilated veins.',
      ],
    },
    3: {
      level: 3,
      summary: 'Scrotal pathology evaluation requires clinical assessment, ultrasound imaging, and understanding of embryology to differentiate conditions and guide management.',
      explanation: `## Scrotal Ultrasound

**Indications:**
- Scrotal mass
- Acute pain (rule out torsion)
- Trauma
- Infertility evaluation

**Key Findings:**

**Torsion:**
- Absent or reduced blood flow
- Whirlpool sign
- Reactive hydrocele

**Epididymitis:**
- Enlarged, hyperemic epididymis
- Increased blood flow
- +/- Reactive hydrocele

**Tumor:**
- Hypoechoic intratesticular mass
- Usually heterogeneous
- Microcalcifications may be present

## Testicular Masses

**Intratesticular (Assume Malignant):**
- Germ cell tumors (95%)
- Lymphoma (older men)
- Leydig cell tumors

**Extratesticular (Usually Benign):**
- Epididymal cyst
- Spermatocele
- Lipoma

## Fournier's Gangrene

**Definition:**
- Necrotizing fasciitis of perineum/genitalia
- Polymicrobial infection
- Surgical emergency

**Risk Factors:**
- Diabetes
- Immunosuppression
- Perianal disease

**Management:**
- Aggressive debridement
- Broad-spectrum antibiotics
- ICU care
- Staged reconstruction

## Bell Clapper Deformity

**Anatomy:**
- Tunica vaginalis attaches high
- Testicle hangs freely
- Predisposes to torsion
- Bilateral in 80%

**Implications:**
- Fix both sides at surgery
- Prophylactic orchiopexy if found`,
      keyTerms: [
        { term: 'Fournier\'s gangrene', definition: 'Necrotizing fasciitis of the perineum and genitalia - surgical emergency' },
        { term: 'Bell clapper deformity', definition: 'Abnormal testicular attachment predisposing to torsion' },
        { term: 'spermatocele', definition: 'Cyst of the epididymis containing sperm' },
      ],
      clinicalNotes: 'Any intratesticular mass should be considered cancer until proven otherwise. Radical inguinal orchiectomy is indicated - never biopsy through scrotum.',
    },
    4: {
      level: 4,
      summary: 'Advanced scrotal surgery includes microsurgical techniques, testicular prostheses, and management of complex reconstructive cases.',
      explanation: `## Microsurgical Varicocelectomy

**Approach:**
- Subinguinal or inguinal
- Operating microscope
- Identify and ligate internal spermatic veins
- Preserve artery and lymphatics

**Outcomes:**
- 70% improvement in parameters
- 40% natural pregnancy
- <1% hydrocele rate

## Orchiopexy Techniques

**Standard (Dartos Pouch):**
- Inguinal approach
- Create subdartos pouch
- Suture tunica to dartos

**Fowler-Stephens:**
- For high undescended testis
- Divide testicular vessels
- Rely on vasal and cremasteric collaterals
- One or two stage

**Laparoscopic:**
- For nonpalpable testis
- Diagnostic and therapeutic
- May use Fowler-Stephens principle

## Testicular Prosthesis

**Indications:**
- Post-orchiectomy
- Congenital absence
- Atrophic testis

**Considerations:**
- Silicone implant
- Size matching
- Placement timing
- Infection risk

## Complex Cases

**Testicular Rupture:**
- Trauma mechanism
- Ultrasound for diagnosis
- Surgical exploration
- Debridement and repair

**Torsion of Appendix Testis:**
- Mimics torsion
- Blue dot sign
- Conservative management
- Surgery if unclear diagnosis

**Chronic Orchialgia:**
- Multiple etiologies
- Workup for reversible causes
- Conservative first
- Denervation surgery last resort`,
      keyTerms: [
        { term: 'Fowler-Stephens orchiopexy', definition: 'Two-stage procedure for high undescended testis dividing testicular vessels' },
        { term: 'blue dot sign', definition: 'Visible blue appendix testis through scrotal skin in torsion of appendage' },
        { term: 'microsurgical denervation', definition: 'Nerve-cutting procedure for chronic testicular pain' },
      ],
      clinicalNotes: 'Microsurgical varicocelectomy has lowest recurrence and complication rates. Operating microscope allows preservation of testicular artery and lymphatics.',
    },
    5: {
      level: 5,
      summary: 'Expert testicular care encompasses fertility preservation, advanced reconstruction, and management of rare conditions.',
      explanation: `## Fertility Preservation

**Oncofertility:**
- Sperm banking pre-treatment
- Emergency retrieval if needed
- Testicular tissue cryopreservation (experimental)

**Prepubertal Patients:**
- No sperm to bank
- Testicular tissue banking
- Spermatogonial stem cell research

## Testicular Sparing Surgery

**Indications:**
- Benign tumors (Leydig, Sertoli)
- Small lesions on imaging
- Solitary testis

**Technique:**
- Inguinal approach
- Frozen section
- Partial orchiectomy if benign
- Complete if malignant

**Outcomes:**
- May preserve fertility
- Requires close surveillance
- Low local recurrence for benign

## Rare Conditions

**Polyorchidism:**
- Supernumerary testis
- Usually 3 (triorchidism)
- May be functional
- Remove if atypical features

**Testicular Microlithiasis:**
- Multiple calcifications on ultrasound
- Associated with infertility
- Controversial cancer risk
- Annual ultrasound if high risk

**Splenogonadal Fusion:**
- Ectopic splenic tissue
- May mimic tumor
- Avoid unnecessary orchiectomy

## Advanced Reconstruction

**Scrotal Reconstruction:**
- Post-Fournier's
- Post-trauma
- Skin grafts or flaps
- Staged procedures

**Testis Autotransplantation:**
- Rare indication
- Microvascular anastomosis
- Trauma or tumor

## Quality and Outcomes

**Torsion Salvage Rates:**
- Track time to surgery
- Document viability
- Long-term follow-up

**Varicocele Outcomes:**
- Semen parameter improvement
- Pregnancy rates
- Recurrence monitoring

**Registry Data:**
- Testicular cancer outcomes
- Treatment protocols
- Survivorship`,
      keyTerms: [
        { term: 'polyorchidism', definition: 'Rare condition of having more than two testicles' },
        { term: 'testicular sparing surgery', definition: 'Partial orchiectomy preserving normal testicular tissue' },
        { term: 'splenogonadal fusion', definition: 'Ectopic splenic tissue fused with gonad - may mimic tumor' },
      ],
      clinicalNotes: 'Testicular microlithiasis alone is not an indication for orchiectomy. Annual surveillance ultrasound is reasonable in men with additional risk factors.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-testicular',
      type: 'article',
      title: 'Evaluation of the Acute Scrotum',
      source: 'AUA Core Curriculum',
    },
  ],
  crossReferences: [
    { targetId: 'structure-male-reproductive-anatomy', targetType: 'structure', relationship: 'related', label: 'Male Anatomy' },
    { targetId: 'cancer-testicular-cancer', targetType: 'topic', relationship: 'related', label: 'Testicular Cancer' },
  ],
  tags: {
    systems: ['male reproductive'],
    topics: ['testicular', 'scrotal'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default testicularConditions;
