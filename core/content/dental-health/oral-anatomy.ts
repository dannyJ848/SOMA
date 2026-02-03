/**
 * Oral Anatomy - Comprehensive Educational Content
 *
 * Covers the structures of the oral cavity including the palate,
 * tongue, floor of mouth, buccal mucosa, and oral vestibule.
 * Provides clinical correlations for dental and medical professionals.
 */

import { EducationalContent } from '../types';

export const oralAnatomy: EducationalContent = {
  id: 'structure-oral-anatomy',
  type: 'structure',
  name: 'Oral Anatomy',
  alternateNames: [
    'Oral Cavity Anatomy',
    'Mouth Anatomy',
    'Stomatology',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The oral cavity (mouth) is the opening where digestion begins. It includes your lips, cheeks, tongue, palate (roof of mouth), and the area behind your teeth.',
      explanation: `**What is the oral cavity?**

The oral cavity, or mouth, is the beginning of your digestive system. It's where food first enters your body and starts getting broken down.

**Main parts of the oral cavity:**

**The Boundaries:**
- **Lips**: The soft, movable folds that form the entrance to your mouth
- **Cheeks**: The sides of your mouth that help you chew and speak
- **Roof of mouth (palate)**: Has two parts
  - Hard palate: The bony front part (feel it with your tongue!)
  - Soft palate: The soft back part that moves when you swallow
- **Floor of mouth**: The bottom area under your tongue

**Inside the mouth:**
- **Tongue**: A strong muscle that helps you taste, swallow, and speak
- **Teeth**: For biting and chewing food
- **Gums**: Pink tissues that hold your teeth in place
- **Salivary glands**: Make spit (saliva) to help digest food

**The two main spaces:**
1. **Vestibule**: The space between your teeth/cheeks and lips
2. **Oral cavity proper**: The main space inside the teeth where your tongue sits

**Why is oral anatomy important?**
- Understanding your mouth helps keep it healthy
- Dentists need to know all these areas to check for problems
- Many diseases show signs first in the mouth`,
      keyTerms: [
        { term: 'oral cavity', definition: 'The medical name for the mouth - the space where digestion begins' },
        { term: 'palate', definition: 'The roof of your mouth; has a hard front part and soft back part', pronunciation: 'PAL-it' },
        { term: 'vestibule', definition: 'The space in your mouth between your lips/cheeks and your teeth', pronunciation: 'VES-ti-byool' },
        { term: 'buccal', definition: 'Relating to the cheek or inside of the cheek', pronunciation: 'BUK-ul' },
        { term: 'saliva', definition: 'Spit - the liquid in your mouth that helps digest food and protect teeth' },
      ],
      analogies: [
        'The oral cavity is like the lobby of a building - it\'s where everything enters first.',
        'The palate is like the roof of a house - it has a hard part and a soft part.',
        'The vestibule is like a hallway - it\'s the space you pass through to get to the main room.',
      ],
      examples: [
        'When you rinse with mouthwash, you\'re cleaning both the vestibule and the main oral cavity.',
        'When you say "ah" at the doctor\'s office, they\'re looking at your oral cavity.',
      ],
      patientCounselingPoints: [
        'Check your mouth monthly for any unusual changes in color or texture',
        'The inside of your cheeks should be smooth and pink - report any white or red patches',
        'Your tongue should have a rough texture from taste buds - smooth patches need evaluation',
      ],
    },
    2: {
      level: 2,
      summary: 'The oral cavity is bounded by the lips anteriorly, oropharynx posteriorly, cheeks laterally, palate superiorly, and muscular floor inferiorly. It contains the teeth, tongue, and salivary glands.',
      explanation: `## Oral Cavity Boundaries

**Superior (Upper):**
- **Hard palate**: Anterior 2/3, bony (maxilla and palatine bones)
- **Soft palate**: Posterior 1/3, muscular (moves during swallowing)

**Inferior (Lower):**
- **Floor of mouth**: Formed by the mylohyoid muscle
- Contains the submandibular and sublingual salivary gland ducts

**Lateral (Sides):**
- **Buccal mucosa**: Inner lining of the cheeks
- **Buccinator muscle**: Forms the muscular wall

**Anterior (Front):**
- **Oral fissure**: Opening between the lips
- **Labial commissures**: Corners of the mouth

**Posterior (Back):**
- **Oropharyngeal isthmus**: Connection to the oropharynx
- Bounded by the soft palate, palatoglossal arches

## Divisions of the Oral Cavity

**1. Oral Vestibule:**
- Space between lips/cheeks and teeth
- Contains the maxillary and mandibular vestibules
- Opening via the oral fissure anteriorly
- Communicates with the oral cavity proper behind the teeth

**2. Oral Cavity Proper:**
- Main space behind the teeth
- Contains the tongue and teeth
- Bounded by the alveolar processes and teeth

## Major Structures

**Tongue:**
- Body: Mobile anterior portion
- Base: Attached posterior portion
- Papillae: Filiform, fungiform, circumvallate (taste buds)
- Lingual frenulum: attaches tongue to floor of mouth

**Palate:**
- Hard palate: Palatine raphe, incisive papilla
- Soft palate: Uvula, palatoglossal and palatopharyngeal arches
- Taste buds on the soft palate

**Salivary Glands:**
- Parotid: Stensen's duct opposite second maxillary molar
- Submandibular: Wharton's duct in floor of mouth
- Sublingual: Multiple ducts (Rivinus ducts)
- Minor glands: Scattered throughout mucosa

**Mucosal Surfaces:**
- Masticatory mucosa: Gingiva, hard palate (keratinized)
- Lining mucosa: Lips, cheeks, floor of mouth, ventral tongue (non-keratinized)
- Specialized mucosa: Dorsal tongue (taste buds)`,
      keyTerms: [
        { term: 'oral vestibule', definition: 'The space between the lips/cheeks externally and the teeth/gums internally' },
        { term: 'hard palate', definition: 'The bony anterior portion of the palate formed by the maxilla and palatine bones' },
        { term: 'soft palate', definition: 'The muscular posterior portion of the palate that moves during swallowing and speech' },
        { term: 'buccal mucosa', definition: 'The mucous membrane lining the inner surface of the cheeks' },
        { term: 'uvula', definition: 'The small conical projection hanging from the posterior edge of the soft palate', pronunciation: 'YOO-vyoo-luh' },
        { term: 'frenulum', definition: 'A small fold of tissue that limits the movement of an organ; e.g., lingual frenulum under the tongue', pronunciation: 'FREN-yoo-lum' },
      ],
      analogies: [
        'The oral vestibule is like the airlock between the outside world and the main chamber of the oral cavity proper.',
        'The palatoglossal arches are like curtains on either side of the stage (the tonsils).',
      ],
      patientCounselingPoints: [
        'The floor of mouth is a common site for oral cancer - dentists check this area during exams',
        'Dry mouth (xerostomia) can occur when salivary glands don\'t produce enough saliva',
      ],
    },
    3: {
      level: 3,
      summary: 'The oral cavity has complex neurovascular innervation and lymphatic drainage. Understanding the anatomy of the submucosa, minor salivary glands, and specialized mucosa is essential for dental procedures and disease recognition.',
      explanation: `## Neurovascular Supply

**Arterial Supply:**

*External Carotid Branches:*
1. **Maxillary artery** (main supply)
   - Greater palatine artery → hard palate
   - Lesser palatine artery → soft palate
   - Posterior superior alveolar → upper molars
   - Infraorbital → anterior maxilla

2. **Facial artery**
   - Superior labial → upper lip
   - Inferior labial → lower lip
   - Inferior alveolar (via mental artery) → lower lip, chin

3. **Lingual artery**
   - Deep lingual → tongue body
   - Sublingual → floor of mouth

**Venous Drainage:**
- Corresponds to arteries, drain to pterygoid venous plexus
- Facial vein → internal jugular (no valves!)
- Dangerous triangle of face: Infections can spread to cavernous sinus

**Innervation:**

*Motor:*
- Trigeminal nerve (V3 - mandibular branch): Muscles of mastication
- Facial nerve (VII): Facial expression, taste to anterior 2/3 tongue
- Hypoglossal (XII): Tongue movement

*Sensory:*
- Maxillary (V2): Upper lip, palate, maxillary teeth
- Mandibular (V3): Lower lip, floor of mouth, mandibular teeth
- Facial (VII): Small area of external ear, posterior auricular
- Glossopharyngeal (IX): Posterior 1/3 tongue, tonsils

*Taste:*
- Anterior 2/3: Chorda tympani (VII)
- Posterior 1/3: Glossopharyngeal (IX)
- Epiglottis/base: Vagus (X)

**Lymphatic Drainage:**

*First echelon nodes:*
- Anterior tongue, floor of mouth, mandibular teeth → submandibular nodes
- Posterior tongue, palate → deep cervical nodes
- Buccal mucosa, maxillary teeth → superficial cervical nodes

*Deep drainage:*
- Upper deep cervical → jugulodigastric node
- Lower deep cervical → jugulo-omohyoid node

## Histology of Oral Mucosa

**Masticatory Mucosa (Keratinized):**
- Gingiva: Ortho/parakeratinized stratified squamous
- Hard palate: Similar to gingiva
- Lamina propria attached directly to periosteum (mucoperiosteum)
- Function: Withstand mechanical forces

**Lining Mucosa (Non-keratinized):**
- Lips, cheeks, floor of mouth, ventral tongue, soft palate
- Elastic submucosa (except floor of mouth)
- Function: Flexibility, movement

**Specialized Mucosa:**
- Dorsal tongue: Filiform, fungiform, circumvallate, foliate papillae
- Taste buds: Within circumvallate and foliate papillae
- Serous glands of von Ebner: Clean taste buds

## Minor Salivary Glands

| Location | Type | % of total saliva |
|----------|------|-------------------|
| Labial | Mucous | Small |
| Buccal | Mucous | Small |
| Palatine | Mixed | Small |
| Lingual (anterior) | Mucous (Blandin-Nuhn) | Small |
| Lingual (posterior) | Serous (von Ebner) | Small |
| *Total minor glands* | - | ~10% |

## Clinical Spaces

**Submandibular Space:**
- Between mylohyoid and hyoglossus
- Contains submandibular gland, nodes, facial artery

**Sublingual Space:**
- Above mylohyoid, below floor of mouth mucosa
- Contains sublingual gland, Wharton's duct

**Buccal Space:**
- Between buccinator and skin
- Contains buccal fat pad, parotid duct

**Parapharyngeal Space:**
- Lateral to pharynx
- Important for spread of infections`,
      keyTerms: [
        { term: 'pterygoid venous plexus', definition: 'Venous network between temporalis and pterygoid muscles; communicates with cavernous sinus' },
        { term: 'danger triangle of face', definition: 'Area from bridge of nose to corners of mouth; infections may spread to cavernous sinus due to valveless facial veins' },
        { term: 'mucoperiosteum', definition: 'Mucosa firmly attached to periosteum; found in hard palate and gingiva' },
        { term: 'circumvallate papillae', definition: 'Large V-shaped taste buds on posterior tongue; contain most taste buds' },
        { term: 'Wharton\'s duct', definition: 'Duct of the submandibular salivary gland, opens at sublingual caruncle' },
        { term: 'Stensen\'s duct', definition: 'Duct of the parotid salivary gland, opens opposite second maxillary molar' },
      ],
      clinicalNotes: 'The lymphatic drainage pattern explains why oral cancers metastasize to cervical nodes. The floor of mouth and ventral tongue drain to submandibular nodes, which should be palpated during exam. Facial vein has no valves, allowing retrograde infection spread to cavernous sinus from the "danger triangle."',
      patientCounselingPoints: [
        'Swollen lymph nodes under your jaw may indicate an oral infection or other problem',
        'Numbness in the tongue or lip can indicate nerve compression or other issues requiring evaluation',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced oral anatomy encompasses embryological development of the branchial arches, congenital anomalies, microscopic anatomy of oral mucosa subtypes, and detailed functional anatomy of speech and swallowing mechanisms.',
      explanation: `## Embryology of the Oral Cavity

**Branchial Arches (5-8 weeks):**

| Arch | Nerve | Artery | Structures |
|------|-------|--------|------------|
| 1st (Mandibular) | V3 | Maxillary | Mandible, incus, malleus, muscles of mastication |
| 2nd (Hyoid) | VII | Stapedial | Stapes, styloid process, facial muscles, part of hyoid |
| 3rd | IX | Common carotid | Greater horn of hyoid, stylopharyngeus |
| 4th/6th | X | Arch of aorta (L), subclavian (R) | Thyroid, epiglottis, larynx cartilages |

**Cleft Lip/Palate Pathogenesis:**
- Failure of fusion of:
  - Medial nasal prominence → lateral nasal prominence (cleft lip)
  - Palatal shelves → primary/secondary palate (cleft palate)
- Timing: Primary palate fusion at 7 weeks, secondary at 12 weeks
- Associated with: 22q11 deletion, fetal alcohol syndrome, maternal smoking

**Tongue Development:**
- Anterior 2/3: First arch → lingual swellings + tuberculum impar
- Posterior 1/3: Second, third, fourth arches → copula + hypobranchial eminence
- Thyroid descent: Via thyroglossal duct (foramen cecum)

## Microscopic Anatomy of Oral Mucosa

**Epithelial Layers (keratinized):**
1. Stratum basale: Stem cells, mitotic activity
2. Stratum spinosum: Desmosomes, tonofilaments
3. Stratum granulosum: Keratohyaline granules (absent in non-keratinized)
4. Stratum corneum: Flattened keratinocytes

**Non-keratinized differences:**
- No granular/corneum layers
- Cells retain nuclei to surface
- More permeable to drugs

**Basement Membrane Zone:**
- Hemidesmosomes: Anchor epithelium
- Lamina lucida & densa: Electron-dense layers
- Anchoring fibrils: Type VII collagen
- Bullous diseases target this zone (pemphigus, pemphigoid)

**Lamina Propria:**
- Areolar connective tissue
- Papillary layer: Projections into epithelium
- Reticular layer: Deeper, denser
- Contains: Fibroblasts, collagen (I, III), elastic fibers, vessels, nerves

**Submucosa (when present):**
- Minor salivary glands
- Adipose tissue
- Large vessels/nerves
- Absent in gingiva and hard palate (mucoperiosteum)

## Functional Anatomy

**Swallowing (Deglutition):**

*Oral preparatory phase:*
- Mastication, mixing with saliva
- Bolus formation
- Lip seal, tongue elevation

*Oral phase (voluntary):*
- Tongue elevation against hard palate
- Propulsion of bolus posteriorly
- Trigger of pharyngeal swallow
- Duration: ~1 second

**Speech Production:**

*Articulators:*
- Fixed: Hard palate, upper teeth
- Mobile: Lower jaw, lips, tongue, soft palate

*Vowels:* Shape determined by tongue position, lip opening
*Consonants:* Manner (stop, fricative, etc.) + place of articulation

**Velopharyngeal Closure:**
- Necessary for: Plosives, swallowing, blowing
- Muscles: Levator veli palatini (primary), tensor veli palatini
- Incompetence → hypernasal speech

## Anatomic Variants

**Torus:**
- Torus palatinus: Midline hard palate (20%)
- Torus mandibularis: Lingual mandible (10%)
- Clinical: May interfere with dentures, otherwise benign

**Fissured Tongue:**
- 5% prevalence, increases with age
- Associated with: Down syndrome, Melkersson-Rosenthal
- Retained food debris → irritation

**Geographic Tongue:**
- Migratory erythematous patches
- Benign migratory glossitis
- Associated with: Psoriasis, stress, hormonal changes

**Ankyloglossia:**
- Short lingual frenulum
- May affect speech, breastfeeding
- Treatment: Frenotomy when indicated`,
      keyTerms: [
        { term: 'branchial arch', definition: 'Embryonic structures giving rise to head and neck anatomy; each arch contains nerve, artery, cartilage, muscle' },
        { term: 'foramen cecum', definition: 'Remnant of thyroglossal duct at tongue base; site of thyroid descent' },
        { term: 'velopharyngeal closure', definition: 'Sealing of nasopharynx from oropharynx by soft palate elevation during speech/swallowing' },
        { term: 'torus', definition: 'Benign bony overgrowth of jaw (palatinus) or mandible (mandibularis)' },
        { term: 'ankyloglossia', definition: 'Restricted tongue movement due to short lingual frenulum; "tongue-tie"' },
      ],
      clinicalNotes: 'Cleft lip/palate embryology explains timing of surgical intervention: Lip repair at 3-6 months, palate at 9-18 months. Tongue-tie (ankyloglossia) assessment requires functional evaluation, not just anatomic appearance. Tori rarely need treatment unless interfering with prosthetics or traumatized.',
    },
    5: {
      level: 5,
      summary: 'Current research in oral biology explores the oral microbiome\'s role in systemic health, molecular mechanisms of mucosal immunity, oral manifestations of systemic diseases, and the oral cavity as a diagnostic window for overall health.',
      explanation: `## Oral Microbiome and Systemic Health

**Microbial Ecology:**

*Composition:*
- 700+ bacterial species identified
- Core microbiome vs. variable microbiome
- Site-specific: Subgingival vs. supragingival vs. mucosal
- Dysbiosis: Shift from symbiotic to pathogenic state

*Keystone Pathogens:*
- P. gingivalis: Manipulates host response, enables dysbiosis
- S. mutans: Primary caries pathogen (acidogenic, aciduric)
- C. albicans: Fungal commensal, opportunistic pathogen

**Oral-Systemic Disease Mechanisms:**

1. **Metastatic Infection:**
   - Bacteremia from daily activities (chewing, brushing)
   - Infective endocarditis from oral streptococci
   - Brain abscesses, liver abscesses
   - Aspiration pneumonia: Oral pathogens → lower airway

2. **Metastatic Injury:**
   - Inflammatory mediators: IL-1β, IL-6, TNF-α, CRP
   - Acute phase response → hepatic synthesis
   - Endothelial dysfunction → atherosclerosis
   - Insulin resistance → diabetes exacerbation

3. **Metastatic Inflammation:**
   - Autoimmune cross-reactivity
   - P. gingivalis PPAD → citrullination → RA
   - Molecular mimicry: HSPs, bacterial antigens

4. **Hematogenous Transport:**
   - Oral pathogens detected at distant sites
   - P. gingivalis in atherosclerotic plaques
   - F. nucleatum in colon cancer

## Oral Mucosal Immunology

**Innate Immune Barriers:**

*Physical:*
- Stratified squamous epithelium
- Tight junctions
- Desquamation (removes adherent bacteria)
- Salivary flow (mechanical cleansing)

*Chemical:*
- Salivary IgA (primary antibody)
- Lysozyme, lactoferrin, peroxidases
- Histatins, defensins
- Mucins (MUC5B, MUC7)

*Cellular:*
- Intraepithelial lymphocytes (CD8+)
- Langerhans cells (antigen presentation)
- Neutrophils (via gingival crevicular fluid)

**Adaptive Immunity:**
- Secretory IgA: Immune exclusion
- Dendritic cell activation → T-cell polarization
- Th1: Cell-mediated immunity
- Th2: Humoral immunity
- Th17: Neutrophil recruitment (critical for mucosal defense)
- Treg: Immune tolerance to commensals

**Immunoregulation:**
- Commensal-mediated tolerance: Low-grade stimulation → steady-state immunity
- Dysbiosis disruption: Loss of tolerance → inflammation
- Mucosal-associated lymphoid tissue (MALT): NALT in Waldeyer's ring

## Oral Manifestations of Systemic Disease

**Gastrointestinal:**
- Crohn disease: Cobblestoning, mucosal tags, pyostomatitis vegetans
- Ulcerative colitis: Pyostomatitis vegetans
- Celiac disease: Aphthous ulcers, enamel defects
- GERD: Palatal/lingual erosion, tooth wear

**Hematologic:**
- Anemia: Pallor, atrophic glossitis, loss of papillae
- Leukemia: Gingival hypertrophy, petechiae, ulceration
- Thrombocytopenia: Spontaneous gingival bleeding
- Sickle cell: Pulp necrosis, infarction

**Dermatologic:**
- Lichen planus: Reticulate white striae (Wickham striae)
- Pemphigus vulgaris: Flaccid bullae, oral lesions first in 50%
- Pemphigoid: Tense bullae, desquamative gingivitis
- Erythema multiforme: Target lesions, lip ulceration

**Endocrine:**
- Diabetes: Xerostomia, burning mouth, candidiasis, delayed healing
- Thyroid: Macroglossia (hypothyroid), goiter
- Pregnancy: Pregnancy epulis, gingivitis, pyogenic granuloma

**Autoimmune:**
- Sjögren syndrome: Xerostomia, caries, candidiasis
- SLE: Oral ulcers, discoid lesions
- Scleroderma: Microstomia, tongue rigidity
- HIV: Candidiasis, hairy leukoplakia, Kaposi sarcoma, lymphoma

## Diagnostic Applications

**Salivary Diagnostics:**

*Biomarkers:*
- Cortisol: Stress
- α-amylase: Sympathetic activity
- IL-1β, IL-6, TNF-α: Inflammation
- MMP-8, MMP-9: Periodontal tissue destruction
- IgG against periodontal pathogens: Disease activity

*Disease Detection:*
- Oral cancer: DNA, RNA, protein biomarkers
- Sjögren syndrome: Autoantibodies
- HIV: Antibodies, RNA
- HPV: DNA (oropharyngeal cancer risk)

**Emerging Technologies:**
- Point-of-care salivary testing
- Liquid biopsy: Circulating tumor DNA
- Metabolomics: Disease signatures
- Microbiome analysis: Dysbiosis patterns

## Clinical Implications

**Oral Examination as Systemic Health Indicator:**
- Oral findings often precede systemic diagnosis
- Unexplained oral symptoms → systemic workup
- Periodontal disease: Marker for diabetes, CVD, osteoporosis
- Oral mucosal lesions: May indicate malignancy, autoimmune disease

**Therapeutic Considerations:**
- Pre-treatment dental clearance: Reduce bacteremia risk
- Medication effects on oral tissues: Xerostomia, ulceration, dysgeusia
- Bone-modifying drugs: MRONJ risk
- Radiation: Xerostomia, caries, osteoradionecrosis
- Chemotherapy: Mucositis, immunosuppression

**Evidence-Based Oral-Systemic Management:**
- Periodontal treatment → HbA1c reduction (0.4%)
- Dental clearance → prosthetic joint infection prevention
- Antimicrobial prophylaxis: High-risk cardiac conditions only (2017 AHA guideline)`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Disruption of normal microbial balance; shift from symbiotic to pathogenic community' },
        { term: 'keystone pathogen', definition: 'Low-abundance pathogen that orchestrates inflammatory response and enables dysbiosis' },
        { term: 'PPAD', definition: 'Peptidylarginine deiminase from P. gingivalis; citrullinates proteins, generating RA autoantigens' },
        { term: 'MRONJ', definition: 'Medication-related osteonecrosis of the jaw; complication of antiresorptive/antiangiogenic drugs' },
        { term: 'Wickham striae', definition: 'Characteristic white, lace-like pattern of oral lichen planus' },
        { term: 'pyostomatitis vegetans', definition: 'Rare oral manifestation of inflammatory bowel disease; pustular, vegetating lesions' },
      ],
      clinicalNotes: `Clinical pearls for oral-systemic health:
1. All patients with diabetes should have periodontal examination and treatment if indicated
2. Unexplained oral ulceration → rule out Crohn disease, celiac, Behcet
3. Persistent oral candidiasis in non-risk patients → HIV test
4. Desquamative gingivitis → biopsy for lichen planus, pemphigoid, pemphigus
5. Antiresorptive therapy (bisphosphonates, denosumab) → dental clearance before starting
6. Radiation therapy to head/neck → dental evaluation before, during, after
7. Burning mouth syndrome → rule out anemia, diabetes, deficiency, infection before primary diagnosis`,
    },
  },

  media: [
    {
      id: 'oral-cavity-diagram',
      type: 'diagram',
      filename: 'oral-cavity-anatomy.svg',
      title: 'Oral Cavity Anatomy',
      description: 'Anatomical boundaries and structures of the oral cavity',
    },
    {
      id: 'palate-anatomy',
      type: 'diagram',
      filename: 'hard-soft-palate.svg',
      title: 'Palatal Anatomy',
      description: 'Hard and soft palate structures and innervation',
    },
  ],

  citations: [
    {
      id: 'moore-head-neck',
      type: 'textbook',
      title: 'Clinically Oriented Anatomy',
      authors: ['Moore, K.L.', 'Dalley, A.F.', 'Agur, A.M.R.'],
      source: 'Lippincott Williams & Wilkins',
      chapter: 'Chapter 7: Head and Neck',
    },
    {
      id: 'nanci-oral-histology',
      type: 'textbook',
      title: 'Ten Cate\'s Oral Histology',
      authors: ['Nanci, A.'],
      source: 'Elsevier',
      chapter: 'Chapter 10: Oral Mucosa',
    },
    {
      id: 'joomla-oral-systemic',
      type: 'article',
      title: 'Oral Health and Systemic Disease',
      authors: ['Chapple, I.L.C.', 'Genco, R.'],
      source: 'Periodontology 2000',
      chapter: '2013',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Tooth Anatomy' },
    { targetId: 'structure-gum-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Gum Anatomy' },
    { targetId: 'condition-oral-cancer-screening', targetType: 'condition', relationship: 'related', label: 'Oral Cancer Screening' },
  ],

  tags: {
    systems: ['digestive', 'respiratory', 'dental'],
    structures: ['palate', 'tongue', 'buccal-mucosa', 'oral-cavity', 'salivary-glands'],
    topics: ['anatomy', 'histology', 'neuroanatomy', 'embryology'],
    keywords: ['oral cavity', 'mouth', 'palate', 'buccal', 'vestibule', 'salivary glands'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oralAnatomy;
