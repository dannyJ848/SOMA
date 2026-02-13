/**
 * Vulva Anatomy
 *
 * Comprehensive anatomy of the vulva including external genitalia,
 * blood supply, innervation, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const vulvaAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-vulva',
  type: 'structure',
  name: 'Vulva',
  alternateNames: ['External female genitalia', 'Pudendum'],
  fmaId: 'FMA:20462',

  levels: {
    1: {
      level: 1,
      summary: 'The vulva is the name for the external parts of a woman\'s reproductive system that you can see on the outside of the body.',
      explanation: `The vulva includes all the parts of a woman's reproductive system that are on the outside of the body, between the legs.

**Parts of the vulva:**

1. **Mons pubis:**
   - Soft, fatty area above the vaginal opening
   - Covered with hair after puberty
   - Acts like a cushion

2. **Labia majora (outer lips):**
   - Two folds of skin on the outside
   - Have hair on the outside
   - Protect the inner parts

3. **Labia minora (inner lips):**
   - Two smaller folds of skin inside the outer lips
   - No hair
   - Come in different shapes and sizes

4. **Clitoris:**
   - Small, sensitive bump at the top where the inner lips meet
   - Has many nerve endings
   - Protected by a small hood of skin

5. **Openings:**
   - Urethral opening: Where urine comes out (very small)
   - Vaginal opening: Entrance to the vagina (larger)

**Important notes:**
- Everyone's vulva looks a little different
- The vulva is different from the vagina (vagina is inside)
- Keeping the vulva clean with water is usually enough`,
      keyTerms: [
        { term: 'vulva', definition: 'The external parts of female reproductive organs' },
        { term: 'labia', definition: 'The lips or folds of skin around the vaginal opening' },
        { term: 'clitoris', definition: 'A small, sensitive part at the top of the vulva' },
      ],
      analogies: [
        'The labia majora and minora are like two sets of curtains, with the outer ones protecting the inner ones.',
        'The mons pubis is like a cushion that protects the bones underneath.',
      ],
      examples: [
        'Just like faces, vulvas come in all different shapes, sizes, and colors, and that is completely normal.',
        'The vulva is what you can see on the outside; the vagina is the passage on the inside.',
      ],
    },
    2: {
      level: 2,
      summary: 'The vulva comprises the external female genitalia including the mons pubis, labia majora and minora, clitoris, vestibule, and associated glands, with functions in protection, sexual response, and urinary/reproductive tract access.',
      explanation: `**Anatomical Components:**

**1. Mons Pubis:**
- Fatty tissue over pubic symphysis
- Covered with pubic hair after puberty
- Contains sebaceous glands

**2. Labia Majora:**
- Outer folds of skin and fat
- Hair-bearing on lateral surface
- Contain sebaceous and sweat glands
- Homologous to scrotum in males

**3. Labia Minora:**
- Inner folds of skin
- Hairless, contain sebaceous glands
- Meet anteriorly to form clitoral hood (prepuce)
- Meet posteriorly at fourchette
- Highly vascular, sensitive

**4. Clitoris:**
- Erectile organ at anterior junction of labia minora
- Components:
  - Glans: Visible, highly sensitive tip
  - Body: Contains two corpora cavernosa
  - Crura: Extensions attached to pubic bones
- ~8,000 nerve endings in glans

**5. Vestibule:**
- Area between labia minora
- Contains:
  - Urethral meatus (opening)
  - Vaginal introitus (opening)
  - Openings of Bartholin's and Skene's glands
  - Hymen remnants

**6. Glands:**
- **Bartholin's glands:** Posterior, provide lubrication
- **Skene's glands:** Periurethral, homologous to prostate

**7. Perineum:**
- Area between vaginal opening and anus
- Contains perineal body
- May tear or require episiotomy during childbirth

**Blood Supply:**
- Internal pudendal artery (main supply)
- External pudendal arteries

**Nerve Supply:**
- Pudendal nerve (S2-S4) - primary
- Ilioinguinal nerve (L1)
- Genitofemoral nerve (L1-L2)`,
      keyTerms: [
        { term: 'vestibule', definition: 'Space between the labia minora containing urethral and vaginal openings', pronunciation: 'VES-tih-byool' },
        { term: 'Bartholin glands', definition: 'Glands at vaginal opening that produce lubricating mucus', pronunciation: 'BAR-toe-linz' },
        { term: 'prepuce', definition: 'Hood of skin covering the clitoral glans', pronunciation: 'PREE-pyoos' },
        { term: 'fourchette', definition: 'Posterior junction of labia minora', pronunciation: 'for-SHET' },
      ],
      analogies: [
        'The vestibule is like a lobby or entrance area that contains the doors (openings) to the urethra and vagina.',
        'Bartholin glands are like small lubrication stations near the vaginal entrance.',
      ],
    },
    3: {
      level: 3,
      summary: 'The vulva consists of specialized skin and mucosa with distinct innervation patterns, vascular supply from internal and external pudendal systems, lymphatic drainage to inguinal nodes, and structures supporting sexual function and childbirth.',
      explanation: `**Detailed Anatomy:**

**Clitoral Complex:**
- Total length: 10-13 cm (mostly internal)
- Glans: Visible portion, 2-3 cm
- Body: 2-4 cm, beneath pubic symphysis
- Crura: 5-9 cm each, attached to ischiopubic rami
- Bulbs (vestibular bulbs): Erectile tissue flanking vestibule
- All components become engorged during arousal

**Vestibule Histology:**
- Non-keratinized stratified squamous epithelium
- Rich in nerve endings
- Contains minor vestibular glands
- Hart's line: Junction between vestibule and labia minora

**Bartholin Glands:**
- Location: 4 and 8 o'clock positions at vaginal introitus
- Size: ~0.5 cm (non-palpable when normal)
- Duct: 2.5 cm, opens into vestibule
- Function: Produce mucoid secretion during arousal
- Pathology: Cyst (duct blockage), abscess (infection)

**Skene Glands (Paraurethral):**
- Multiple small glands around urethra
- Drain into distal urethra
- May be involved in periurethral cysts
- Some consider involved in female ejaculation

**Blood Supply:**

| Artery | Source | Area Supplied |
|--------|--------|---------------|
| Internal pudendal | Internal iliac | Primary vulvar supply |
| External pudendal (superficial/deep) | Femoral | Mons, anterior labia |
| Posterior labial | Internal pudendal | Labia, clitoris |
| Deep artery of clitoris | Internal pudendal | Clitoral body |
| Dorsal artery of clitoris | Internal pudendal | Glans clitoris |

**Venous Drainage:**
- Parallels arterial supply
- Internal pudendal veins → internal iliac
- External pudendal veins → saphenous/femoral

**Lymphatic Drainage:**
- Superficial inguinal nodes (primary)
- Deep inguinal nodes
- Then to external iliac nodes
- Clinical importance for vulvar cancer staging

**Innervation:**
- Pudendal nerve (S2-4): Primary; motor and sensory
- Ilioinguinal (L1): Anterior vulva, mons
- Genitofemoral (L1-2): Genital branch to labia
- Posterior femoral cutaneous: Posterior vulva
- Clitoral innervation: Dorsal nerve of clitoris (branch of pudendal)`,
      keyTerms: [
        { term: 'vestibular bulbs', definition: 'Paired erectile tissue masses on either side of vaginal vestibule; engorge during arousal' },
        { term: 'Hart line', definition: 'Demarcation between keratinized labia minora and non-keratinized vestibular mucosa' },
        { term: 'pudendal nerve', definition: 'Primary sensory and motor nerve to vulva and perineum (S2-4)' },
        { term: 'dorsal nerve of clitoris', definition: 'Terminal branch of pudendal nerve providing clitoral sensation' },
      ],
      clinicalNotes: 'Bartholin gland cysts/abscesses are common and can be managed with Word catheter or marsupialization. Vulvar lymphatic drainage to inguinal nodes means vulvar cancer spread is detected by groin examination. Pudendal nerve block at ischial spine provides perineal anesthesia.',
    },
    4: {
      level: 4,
      summary: 'The vulva represents a complex integration of keratinized and mucosal surfaces with specialized nerve endings for sexual response, requiring understanding of dermatopathology, sexual medicine, and surgical anatomy for comprehensive clinical care.',
      explanation: `**Vulvar Physiology:**

**Sexual Response:**
- Arousal: Increased blood flow to vestibular bulbs, labia, clitoris
- Engorgement: Clitoral erection, vestibular bulb distension
- Lubrication: Bartholin gland secretion + vaginal transudation
- Orgasm: Rhythmic contractions of pelvic floor muscles
- Resolution: Gradual detumescence

**Nerve Endings:**
- Clitoral glans: Highest density (pacinian corpuscles, free nerve endings)
- Labia minora: Meissner corpuscles (fine touch)
- Vestibule: Free nerve endings, mucosal sensitivity

**Vulvar Dermatology:**

*Distinct zones:*
1. Hair-bearing keratinized skin (labia majora, mons)
2. Non-hair-bearing keratinized skin (outer labia minora)
3. Mucosal surface (vestibule)

*Common conditions:*
| Condition | Appearance | Key Features |
|-----------|------------|--------------|
| Lichen sclerosus | White, thin, wrinkled | Pruritus, figure-8 distribution |
| Lichen planus | Erosive, Wickham striae | May involve vagina, mouth |
| Lichen simplex chronicus | Thickened, lichenified | Itch-scratch cycle |
| Contact dermatitis | Erythema, edema | History of irritant/allergen |

**Vulvar Pain Syndromes:**

*Provoked vestibulodynia (PVD):*
- Pain localized to vestibule
- Triggered by touch/pressure
- Hyperinnervation of vestibular mucosa
- C-fiber proliferation, increased TRPV1 expression

*Generalized vulvodynia:*
- Diffuse vulvar burning
- Not limited to vestibule
- May have neuropathic component

**Vulvar Lesions:**

*Biopsy indications:*
- Uncertain diagnosis
- Treatment failure
- Suspicious for malignancy
- Any pigmented lesion

*VIN (vulvar intraepithelial neoplasia):*
- HPV-related (uVIN/HSIL): Younger patients, multifocal
- Differentiated VIN (dVIN): Older, associated with lichen sclerosus

**Surgical Anatomy:**

*Episiotomy:*
- Mediolateral: Preferred; avoids anal sphincter
- Midline: Higher risk of 3rd/4th degree laceration
- Structures cut: Skin, perineal muscles, bulbospongiosus

*Perineal lacerations:*
| Degree | Structures Involved |
|--------|---------------------|
| 1st | Skin, mucosa |
| 2nd | Perineal muscles |
| 3rd | Anal sphincter (a=<50%, b=>50%, c=internal) |
| 4th | Rectal mucosa |

*Vulvar surgery considerations:*
- Rich blood supply → bleeding risk
- Wound healing generally good
- Sensation critical for sexual function
- Lymphatics run to inguinal nodes`,
      keyTerms: [
        { term: 'vestibulodynia', definition: 'Pain localized to the vulvar vestibule, typically provoked by touch or pressure' },
        { term: 'lichen sclerosus', definition: 'Chronic inflammatory dermatosis causing white, atrophic vulvar skin with pruritus' },
        { term: 'VIN', definition: 'Vulvar intraepithelial neoplasia; premalignant squamous changes of vulvar skin' },
        { term: 'episiotomy', definition: 'Surgical incision of perineum during delivery to enlarge vaginal opening' },
      ],
      clinicalNotes: 'Lichen sclerosus requires long-term treatment with potent topical steroids (clobetasol) and carries ~5% lifetime risk of squamous cell carcinoma. Vestibulodynia treatment is multimodal: topical lidocaine, physical therapy, cognitive behavioral therapy, and vestibulectomy in refractory cases. Avoid routine episiotomy; restrictive use reduces perineal trauma.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive vulvar medicine integrates dermatopathology, sexual medicine, oncologic surgery with sentinel node mapping, and reconstructive techniques, with emerging understanding of vestibular innervation, vulvar dermatoses, and minimally invasive approaches for vulvar cancer.',
      explanation: `**Vulvar Oncology:**

**Vulvar Cancer:**
- 90% squamous cell carcinoma
- Pathways:
  - HPV-related: Younger, uVIN precursor
  - Non-HPV-related: Older, lichen sclerosus/dVIN precursor

**Staging (FIGO 2021):**
- I: Confined to vulva
- II: Adjacent structures (lower vagina, lower urethra, anus)
- III: Inguinofemoral lymph nodes
- IV: Upper structures or distant metastases

**Sentinel Lymph Node Mapping:**
- Indication: Unifocal tumors <4cm, clinically negative nodes
- Technique: Technetium-99m and/or ICG injection
- Bilateral groin exploration if midline tumor
- Negative SLN → no completion lymphadenectomy
- Reduces lymphedema (50% → 2-5%)

**Radical Vulvectomy:**
- Historical: En bloc radical vulvectomy with inguinofemoral lymphadenectomy
- Modern: Triple incision technique
- Wide local excision + separate groin incisions
- Margins: 1-2 cm gross, 8mm histologic

**Reconstruction:**
- Primary closure: Small defects
- V-Y advancement flaps
- Rotational flaps (lotus petal, Singapore)
- Gracilis myocutaneous flap
- Considerations: Maintain function, acceptable cosmesis

**Vestibulodynia Pathophysiology:**

*Peripheral sensitization:*
- Increased nerve fiber density in vestibule
- Mast cell infiltration
- Elevated inflammatory mediators (NGF, CGRP)
- TRPV1 upregulation

*Central sensitization:*
- Altered pain processing
- Windup phenomenon
- Central amplification of peripheral signals

*Contributing factors:*
- Hormonal (OCP use, low estrogen)
- Genetic (increased pain sensitivity genes)
- Pelvic floor dysfunction
- Psychosexual factors

**Treatment Algorithm:**

1. *Conservative:*
   - Vulvar care (avoiding irritants)
   - Topical lidocaine
   - Topical estrogen (if atrophic component)

2. *Physical therapy:*
   - Pelvic floor relaxation
   - Trigger point release
   - Biofeedback

3. *Medical:*
   - Tricyclic antidepressants (amitriptyline)
   - Gabapentin/pregabalin
   - Topical compounded medications

4. *Interventional:*
   - Botulinum toxin injection
   - Nerve blocks

5. *Surgical:*
   - Vestibulectomy (partial or complete)
   - 70-90% success in selected patients

**Vulvar Dermatopathology:**

*Lichen Sclerosus:*
- Histology: Hyperkeratosis, epithelial atrophy, dermal hyalinization
- Treatment: Ultrapotent topical steroid (clobetasol)
- Maintenance: Ongoing topical steroid, surveillance for SCC
- 5% lifetime SCC risk

*Lichen Planus:*
- Erosive form most problematic
- May cause scarring, introital stenosis
- Treatment: Ultrapotent steroids, tacrolimus, systemic immunosuppression
- Associated with oral/vaginal involvement

*High-Grade Squamous Intraepithelial Lesion (HSIL/uVIN):*
- HPV-related
- Treatment: Excision vs. imiquimod vs. laser ablation
- High recurrence rate; long-term surveillance

*Differentiated VIN (dVIN):*
- Non-HPV-related
- Associated with lichen sclerosus
- Higher progression rate to SCC
- Excision preferred

**Female Genital Cosmetic Surgery:**

*Labiaplasty:*
- Most common procedure
- Techniques: Trim, wedge, de-epithelialization
- Indications: Functional (irritation, hygiene) or cosmetic
- Complications: Pain, asymmetry, scarring, altered sensation

*Clitoral hood reduction:*
- Often combined with labiaplasty
- Avoid injury to glans

*Professional society positions:*
- ACOG cautions against procedures in absence of medical indication
- Emphasizes informed consent regarding risks and lack of outcomes data

**Vulvar Trauma:**

*Straddle injuries:*
- Often unilateral
- May cause labial hematoma
- Conservative management unless expanding

*Obstetric lacerations:*
- Recognition of anal sphincter injury critical
- 3rd/4th degree repair: Primary repair with attention to sphincter
- Endoanal ultrasound for unrecognized injuries`,
      keyTerms: [
        { term: 'sentinel lymph node', definition: 'First draining node from tumor; negative SLN in vulvar cancer avoids complete lymphadenectomy' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; pain receptor upregulated in vestibulodynia' },
        { term: 'dVIN', definition: 'Differentiated vulvar intraepithelial neoplasia; non-HPV-related, associated with lichen sclerosus' },
        { term: 'vestibulectomy', definition: 'Surgical removal of vestibular tissue for refractory vestibulodynia' },
      ],
      clinicalNotes: 'SLN mapping has revolutionized vulvar cancer surgery, reducing morbidity while maintaining oncologic safety (GROINSS-V II). For vestibulodynia, multimodal therapy addressing peripheral sensitization, central sensitization, and pelvic floor dysfunction yields best outcomes. Any persistent vulvar lesion in a patient with lichen sclerosus requires biopsy to rule out differentiated VIN or SCC.',
    },
  },

  media: [
    {
      id: 'vulva-anatomy-1',
      type: 'diagram',
      filename: 'vulva-external-anatomy.svg',
      title: 'External Vulvar Anatomy',
      description: 'Labeled diagram of vulvar structures',
    },
    {
      id: 'vulva-anatomy-2',
      type: 'diagram',
      filename: 'vulva-vascular-innervation.svg',
      title: 'Vulvar Blood Supply and Innervation',
      description: 'Arterial supply and nerve distribution',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-vulva',
      type: 'textbook',
      title: 'Vulvar Disorders',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '4',
      license: 'Copyrighted',
    },
    {
      id: 'openstax-vulva',
      type: 'textbook',
      title: 'External Female Genitalia',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '27.2',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-female-reproductive-overview', targetType: 'structure', relationship: 'parent', label: 'Female Reproductive System' },
    { targetId: 'obgyn-anatomy-vagina', targetType: 'structure', relationship: 'related', label: 'Vagina' },
    { targetId: 'obgyn-oncology-vulvar-cancer', targetType: 'condition', relationship: 'see-also', label: 'Vulvar Cancer' },
    { targetId: 'dermatology-lichen-sclerosus', targetType: 'condition', relationship: 'see-also', label: 'Lichen Sclerosus' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:20462', 'vulva'],
    topics: ['anatomy', 'gynecology', 'dermatology'],
    keywords: ['vulva', 'labia', 'clitoris', 'vestibule', 'external genitalia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
