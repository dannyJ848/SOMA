/**
 * Nose and Sinus Anatomy - Comprehensive Educational Content
 *
 * Covers the anatomical structure of the nose and paranasal sinuses.
 */

import { EducationalContent } from '../../../types';

export const noseAndSinusAnatomy: EducationalContent = {
  id: 'ent-nose-sinus-anatomy',
  type: 'structure',
  name: 'Nose and Paranasal Sinus Anatomy',
  alternateNames: ['Nasal Anatomy', 'Sinus Anatomy', 'Nasal Cavity Structure'],
  fmaId: 'FMA:54378',

  levels: {
    1: {
      level: 1,
      summary: 'Your nose has two sides separated by a wall, and connects to air-filled spaces called sinuses in the bones around your eyes and forehead.',
      explanation: `Your nose does a lot more than you might think! Let's explore how it's built.

**Parts of Your Nose:**

1. **Outside Parts:**
   - The tip of your nose (made of bendy cartilage)
   - The bridge (the bony part up high)
   - Two nostrils (the holes you breathe through)

2. **Inside Your Nose:**
   - A wall down the middle called the septum divides your nose into two sides
   - Each side has bumpy shelves called turbinates that warm and clean the air
   - Tiny hairs and sticky mucus trap dust and germs

3. **Your Sinuses:**
   These are empty spaces in the bones of your face:
   - Sinuses by your cheeks (behind your cheekbones)
   - Sinuses between your eyes
   - Sinuses in your forehead
   - Sinuses way in the back behind your nose

**What Your Nose and Sinuses Do:**
- Warm up cold air before it reaches your lungs
- Add moisture to dry air
- Filter out dust, pollen, and germs
- Help you smell things
- Make your voice sound the way it does`,
      keyTerms: [
        { term: 'nostril', definition: 'The openings at the bottom of your nose where air goes in and out' },
        { term: 'septum', definition: 'The wall in the middle of your nose that separates it into two sides' },
        { term: 'sinus', definition: 'An empty air-filled space inside the bones of your face' },
        { term: 'turbinate', definition: 'Bumpy shelves inside your nose that help warm and clean the air' },
        { term: 'mucus', definition: 'The sticky, slimy stuff in your nose that traps germs and dirt' },
      ],
      analogies: [
        'Your sinuses are like empty rooms in a building - they make your head lighter and give your voice a special sound.',
        'The turbinates in your nose work like a car radiator, warming up the air before it goes to your lungs.',
        'Mucus is like flypaper that catches germs and dust before they can get into your lungs.',
      ],
      examples: [
        'When you have a cold, your sinuses fill with mucus and you feel pressure in your face.',
        'If you pinch your nose and hum, the sound changes because the sinuses normally help shape your voice.',
      ],
    },
    2: {
      level: 2,
      summary: 'The nasal cavity contains the septum, turbinates, and meatuses, connecting to four paired paranasal sinuses that drain into the nasal passages.',
      explanation: `The nose and sinuses form an interconnected system essential for respiration, filtration, and immune defense.

**External Nose:**
- **Bony portion:** Nasal bones, frontal process of maxilla
- **Cartilaginous portion:** Septal, lateral, and alar cartilages
- **Skin:** Thick at tip, thin over dorsum
- **Blood supply:** Internal and external carotid branches

**Nasal Cavity:**

*Boundaries:*
- Roof: Cribriform plate (smell nerves pass through)
- Floor: Hard palate
- Lateral: Turbinates and meatuses
- Medial: Nasal septum

*Nasal Septum:*
- Quadrangular cartilage (anterior)
- Perpendicular plate of ethmoid (superior)
- Vomer (inferior-posterior)
- Often deviated to one side

*Turbinates (Conchae):*
Three bony projections on lateral wall:
- Inferior turbinate: Largest, independent bone
- Middle turbinate: Part of ethmoid bone
- Superior turbinate: Smallest, part of ethmoid

*Meatuses:*
Spaces beneath each turbinate where sinuses drain:
- Inferior meatus: Nasolacrimal duct (tears) drains here
- Middle meatus: Most sinuses drain here
- Superior meatus: Posterior ethmoid drains here

**Paranasal Sinuses:**

| Sinus | Location | Drainage |
|-------|----------|----------|
| Maxillary | Cheekbones | Middle meatus |
| Frontal | Forehead | Middle meatus |
| Anterior Ethmoid | Between eyes | Middle meatus |
| Posterior Ethmoid | Behind eyes | Superior meatus |
| Sphenoid | Behind nose | Sphenoethmoidal recess |

**Functions:**
- Air conditioning (warming, humidifying, filtering)
- Reduce skull weight
- Provide resonance for voice
- Protect against facial trauma
- Produce nitric oxide (antimicrobial)`,
      keyTerms: [
        { term: 'cribriform plate', definition: 'Thin bone in the roof of the nasal cavity with holes for olfactory nerves', pronunciation: 'KRIB-rih-form' },
        { term: 'meatus', definition: 'A passage or opening; in the nose, the space beneath each turbinate', pronunciation: 'mee-AY-tus' },
        { term: 'paranasal sinuses', definition: 'Four pairs of air-filled cavities in the skull bones surrounding the nose' },
        { term: 'maxillary sinus', definition: 'The largest sinus, located in the cheekbones' },
        { term: 'ostiomeatal complex', definition: 'The area in the middle meatus where most sinuses drain' },
      ],
      analogies: [
        'The sinuses are like rooms in a house that all share a common hallway (the ostiomeatal complex) - if the hallway gets blocked, problems develop in all the rooms.',
        'Turbinates work like baffles in an air conditioner, creating turbulence that helps warm and humidify incoming air.',
      ],
    },
    3: {
      level: 3,
      summary: 'The sinonasal complex comprises the nasal cavity with its mucosal lining, turbinate system, and ostiomeatal complex connecting to pneumatized paranasal sinuses, supplied by branches of the internal and external carotid arteries.',
      explanation: `Detailed understanding of sinonasal anatomy is essential for managing sinus disease and performing endoscopic surgery.

**Nasal Cavity Regions:**

1. **Vestibule:**
   - Just inside nostrils
   - Stratified squamous epithelium
   - Vibrissae (nasal hairs)

2. **Respiratory Region:**
   - Pseudostratified ciliated columnar epithelium
   - Goblet cells produce mucus
   - Covers most of nasal cavity
   - Mucociliary clearance toward nasopharynx

3. **Olfactory Region:**
   - Superior aspect of cavity
   - Specialized olfactory epithelium
   - Olfactory receptors (CN I)
   - ~10 cm² surface area

**Lateral Nasal Wall (Key Surgical Anatomy):**

*Turbinates:*
- Inferior: Largest, highly vascular, erectile tissue
- Middle: Contains concha bullosa (pneumatized) in 30-50%
- Superior: May have supreme turbinate above

*Middle Meatus Structures:*
- Uncinate process: Sickle-shaped bone
- Hiatus semilunaris: Gap between uncinate and ethmoid bulla
- Ethmoid bulla: Largest anterior ethmoid cell
- Frontal recess: Pathway to frontal sinus

*Ostiomeatal Complex (OMC):*
- Functional unit for anterior sinus drainage
- Includes: Middle meatus, uncinate process, ethmoid infundibulum, hiatus semilunaris, maxillary ostium, frontal recess, anterior ethmoid cells
- Obstruction leads to sinusitis

**Paranasal Sinus Anatomy:**

*Maxillary Sinus:*
- Largest sinus (~15 mL volume)
- Present at birth (small)
- Ostium located superiorly (poor gravity drainage)
- Roof = orbit floor
- Floor = alveolar process (tooth roots may project)

*Frontal Sinus:*
- Absent at birth; develops by age 6-8
- Highly variable anatomy
- Drains via frontal recess → middle meatus
- Agger nasi cell may obstruct drainage

*Ethmoid Sinuses:*
- 3-18 cells per side
- Anterior cells drain to middle meatus
- Posterior cells drain to superior meatus
- Lamina papyracea = paper-thin lateral wall (orbit)
- Fovea ethmoidalis = roof (skull base)

*Sphenoid Sinus:*
- Variable pneumatization
- Critical relationships: Optic nerve, carotid artery, pituitary
- Drains to sphenoethmoidal recess

**Blood Supply:**

*Internal Carotid (Ophthalmic Artery):*
- Anterior ethmoidal artery
- Posterior ethmoidal artery

*External Carotid:*
- Sphenopalatine artery (main supply)
- Greater palatine artery
- Superior labial artery

**Kiesselbach's Plexus (Little's Area):**
- Anterior septum anastomosis
- Most common site of epistaxis

**Innervation:**
- Olfaction: CN I
- General sensation: V1 (ophthalmic), V2 (maxillary)
- Parasympathetic: Greater petrosal nerve → sphenopalatine ganglion`,
      keyTerms: [
        { term: 'ostiomeatal complex', definition: 'Functional unit of the anterior paranasal sinuses and their drainage pathways in the middle meatus' },
        { term: 'uncinate process', definition: 'Sickle-shaped bony projection that forms the medial wall of the ethmoid infundibulum' },
        { term: 'lamina papyracea', definition: 'Paper-thin lateral wall of the ethmoid sinus separating it from the orbit' },
        { term: 'Kiesselbach plexus', definition: 'Vascular anastomosis on the anterior nasal septum, most common site of anterior epistaxis' },
        { term: 'sphenopalatine artery', definition: 'Terminal branch of internal maxillary artery; main blood supply to nasal cavity' },
        { term: 'fovea ethmoidalis', definition: 'Roof of the ethmoid sinuses; part of the anterior skull base' },
      ],
      clinicalNotes: 'The lamina papyracea is the thinnest bone separating the sinuses from the orbit; ethmoid sinusitis can spread to cause orbital cellulitis or abscess. The cribriform plate is at risk during endoscopic surgery - CSF leak and meningitis are potential complications.',
    },
    4: {
      level: 4,
      summary: 'Sinonasal anatomy demonstrates significant individual variation in pneumatization patterns, cell configurations, and arterial relationships, with critical surgical landmarks including the fovea ethmoidalis, lamina papyracea, and sphenoid neurovascular structures.',
      explanation: `Advanced sinonasal anatomy integrates embryology, anatomical variants, and surgical considerations.

**Embryological Development:**

*Nasal Cavity:*
- Nasal placodes appear week 4
- Frontonasal and maxillary processes fuse
- Choanae form from bucconasal membrane breakdown
- Turbinates from ethmoturbinals (week 8-16)

*Paranasal Sinuses:*
- Develop as outpouchings of nasal mucosa
- Maxillary: Present at birth, reaches adult size by age 12
- Ethmoid: Present at birth, fully pneumatized by age 12
- Frontal: Appears age 1-2, continues developing through adolescence
- Sphenoid: Pneumatization begins age 3, complete by adulthood

**Anatomical Variants:**

*Ethmoid Variants:*
| Variant | Description | Clinical Significance |
|---------|-------------|----------------------|
| Agger nasi cell | Anteriormost ethmoid cell | Frontal recess obstruction |
| Concha bullosa | Pneumatized middle turbinate | OMC obstruction |
| Paradoxical turbinate | Laterally curved middle turbinate | Lateralized uncinate |
| Haller cell | Infraorbital ethmoid cell | Maxillary ostium obstruction |
| Onodi cell | Posterior ethmoid lateral to sphenoid | Optic nerve at risk |
| Supraorbital cell | Extends over orbit | Frontal sinus approach complication |

*Septal Variants:*
- Septal deviation: 80% of population
- Septal spur: Bony projection
- Septal perforation: May be iatrogenic

*Frontal Recess Variants (IFAC Classification):*
- Frontal cells (1-4): Cells within frontal recess
- Supraorbital cells: Pneumatize over orbit
- Frontal septal cells: Inter-sinus septal cells

**Skull Base Anatomy:**

*Keros Classification (Olfactory Fossa Depth):*
- Type I: 1-3 mm (low risk)
- Type II: 4-7 mm (moderate risk)
- Type III: 8-16 mm (high risk of iatrogenic CSF leak)

*Anterior Ethmoidal Artery:*
- Courses through skull base
- May be dehiscent into ethmoid cavity
- Landmark: Posterior to frontal recess

*Posterior Ethmoidal Artery:*
- Smaller, may be absent
- Adjacent to sphenoid face

**Sphenoid Sinus Relationships:**

*Degree of Pneumatization:*
- Conchal: Minimal pneumatization
- Pre-sellar: To sella face
- Sellar: Includes sellar floor
- Post-sellar: Beyond sella

*Critical Structures:*
- Optic nerve: May dehisce into sinus (25%)
- Internal carotid artery: Dehiscent in 10-20%
- Vidian nerve: Floor landmark
- Maxillary nerve (V2): Lateral wall

**Endoscopic Surgical Landmarks:**

*Axilla of Middle Turbinate:*
- Junction of middle turbinate and lateral wall
- Start point for uncinectomy

*Maxillary Line:*
- Attachment of uncinate to lateral wall
- Identifies plane of lamina papyracea

*Basal Lamella:*
- Ground lamella of middle turbinate
- Separates anterior and posterior ethmoid
- Attaches to lamina papyracea, skull base, and septum

*Sphenopalatine Foramen:*
- Behind posterior attachment of middle turbinate
- Entry of sphenopalatine artery
- Target for posterior epistaxis ligation

**Nasal Valve Anatomy:**

*External Valve:*
- Nostril aperture
- Formed by caudal septum, columella, alar rim

*Internal Valve:*
- 10-15 degree angle
- Between septum and upper lateral cartilage
- Narrowest part of nasal airway
- Collapse causes obstruction`,
      keyTerms: [
        { term: 'Keros classification', definition: 'Classification of olfactory fossa depth (1-3 mm, 4-7 mm, 8-16 mm) indicating skull base injury risk' },
        { term: 'Onodi cell', definition: 'Posterior ethmoid cell extending lateral and superior to sphenoid, putting optic nerve at risk' },
        { term: 'basal lamella', definition: 'Ground lamella of middle turbinate dividing anterior from posterior ethmoid cells' },
        { term: 'Haller cell', definition: 'Infraorbital ethmoid air cell along the maxillary sinus roof that may narrow the ostiomeatal complex' },
        { term: 'internal nasal valve', definition: 'Narrowest portion of nasal airway formed by angle between upper lateral cartilage and septum' },
        { term: 'concha bullosa', definition: 'Pneumatization of the middle turbinate, a common anatomical variant' },
      ],
      clinicalNotes: 'Pre-operative CT review must identify Onodi cells (optic nerve risk), asymmetric skull base height, and ICA dehiscence. The Keros type III olfactory fossa has significantly higher risk of CSF leak during FESS. Image guidance is recommended for revision surgery and complex anatomy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sinonasal surgery requires integration of advanced imaging including cone-beam CT and MRI, navigation systems, understanding of mucosal immunology, and endoscopic extended approaches to the skull base and orbit.',
      explanation: `Expert-level sinonasal anatomy incorporates surgical innovation, imaging advances, and functional considerations.

**Advanced Imaging Interpretation:**

*Multiplanar CT Analysis:*
- Coronal: OMC, skull base, orbits
- Axial: Sphenoid relationships, posterior ethmoid
- Sagittal: Frontal recess, nasofrontal pathway

*Frontal Recess Assessment:*
- IFAC (International Frontal Sinus Anatomy Classification)
- 3D reconstruction for surgical planning
- Identify all frontal recess cells

*MRI for Sinonasal Tumors:*
- T1/T2: Tumor vs. retained secretions
- Gadolinium: Enhancement pattern
- Diffusion: Inverted papilloma vs. SCC
- Perineural spread evaluation

**Extended Endoscopic Approaches:**

*Endoscopic Endonasal Skull Base Surgery:*
| Approach | Target |
|----------|--------|
| Transsphenoidal | Sella, pituitary |
| Transplanum | Planum sphenoidale, suprasellar |
| Transcribriform | Olfactory groove, anterior fossa floor |
| Transclival | Clivus, ventral brainstem |
| Transpterygoidal | Meckel's cave, petrous apex |
| Transorbital | Medial orbit, frontal |

*Anatomical Landmarks for Extended Approaches:*
- Opticocarotid recess: Between optic nerve and carotid
- Medial opticocarotid recess: Tuberculum sellae
- Lateral opticocarotid recess: Carotid cave
- Clival recess: Below sella

**Vascular Anatomy for Epistaxis:**

*Anterior Epistaxis:*
- Kiesselbach's plexus
- Superior labial artery (external carotid)
- Anterior ethmoidal artery (internal carotid)
- Treatment: Cautery, packing

*Posterior Epistaxis:*
- Sphenopalatine artery branches
- Treatment: Endoscopic SPA ligation or embolization

*Surgical Ligation Approaches:*
- SPA at sphenopalatine foramen
- Anterior ethmoidal artery via Lynch incision or endoscopic
- External carotid ligation (last resort)

**Sinonasal Mucosal Immunology:**

*Mucosal Defense:*
- Mucociliary clearance: 1 cm/min velocity
- Ciliary beat frequency: 10-15 Hz
- Antimicrobial proteins: Lysozyme, lactoferrin, defensins
- Secretory IgA

*Inflammatory Pathways:*
- Type 2 inflammation: Eosinophilic, IL-4/IL-5/IL-13
- Non-type 2: Neutrophilic, Th1/Th17
- Implications for biologics (dupilumab, omalizumab)

**Frontal Sinus Surgery Classifications:**

*Draf Classification:*
| Type | Description |
|------|-------------|
| Draf I | Anterior ethmoidectomy, open frontal recess |
| Draf IIa | Remove floor between lamina and middle turbinate |
| Draf IIb | Remove floor to nasal septum |
| Draf III (Lothrop) | Bilateral IIb with intersinus septum removal |

**Maxillary Sinus Access:**

*Middle Meatal Antrostomy:*
- Standard FESS approach
- Extend to natural ostium
- Avoid injury to nasolacrimal duct (anterior)

*Inferior Meatal Antrostomy:*
- Rarely used; gravity dependent
- May close with mucosal healing

*Canine Fossa Approach:*
- Sublabial incision
- Access for Caldwell-Luc
- Denervation of teeth possible

**Olfactory Preservation:**

*Anatomy:*
- Olfactory neuroepithelium: Superior septum, cribriform region, superior turbinate
- ~6 million olfactory receptors
- ~400 OR genes expressed

*Surgical Considerations:*
- Avoid trauma to superior septum
- Preserve superior turbinate
- Corticosteroids for post-operative olfaction
- Olfactory training may improve recovery`,
      keyTerms: [
        { term: 'Draf III procedure', definition: 'Extended frontal sinusotomy removing bilateral frontal sinus floors and intersinus septum (modified Lothrop)' },
        { term: 'sphenopalatine artery ligation', definition: 'Endoscopic procedure to control posterior epistaxis by clipping or cauterizing the SPA' },
        { term: 'opticocarotid recess', definition: 'Anatomical landmark between optic nerve and carotid artery in sphenoid sinus' },
        { term: 'IFAC classification', definition: 'International Frontal Sinus Anatomy Classification for frontal recess cells and pathways' },
        { term: 'mucociliary clearance', definition: 'Coordinated ciliary beating moving mucus blanket toward nasopharynx at ~1 cm/min' },
        { term: 'type 2 inflammation', definition: 'Eosinophil-driven inflammatory pattern in CRSwNP, target for biologic therapies' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Image guidance recommended: Revision FESS, frontal sinus surgery, skull base lesions, extensive polyposis distorting anatomy
2. Keros III skull base: Higher risk of iatrogenic CSF leak; consider image guidance
3. Onodi cell identification mandatory: Optic nerve injury risk during posterior ethmoidectomy
4. Dehiscent carotid: Stop before entering sphenoid if CT shows dehiscence; consider angiography
5. Post-FESS olfaction: Correlates with degree of olfactory cleft disease and mucosal stripping
6. Draf III patency: Maintain with stenting, debridement, and topical steroids post-operatively
7. Biologics (dupilumab): Transforming CRSwNP management; consider before revision surgery`,
    },
  },

  media: [
    {
      id: 'nasal-cavity-coronal',
      type: 'diagram',
      filename: 'nasal-cavity-coronal.svg',
      title: 'Nasal Cavity Coronal Section',
      description: 'Cross-sectional view showing turbinates, septum, and sinuses',
    },
    {
      id: 'paranasal-sinuses',
      type: 'diagram',
      filename: 'paranasal-sinuses.svg',
      title: 'Paranasal Sinuses',
      description: 'Anterior and lateral views of the paranasal sinuses',
    },
    {
      id: 'omc-anatomy',
      type: 'diagram',
      filename: 'ostiomeatal-complex.svg',
      title: 'Ostiomeatal Complex',
      description: 'Detailed view of the ostiomeatal complex and drainage pathways',
    },
  ],

  citations: [
    {
      id: 'cummings-sinonasal',
      type: 'textbook',
      title: 'Sinonasal Anatomy and Physiology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section II - Rhinology',
    },
    {
      id: 'stammberger-fess',
      type: 'textbook',
      title: 'Functional Endoscopic Sinus Surgery',
      authors: ['Stammberger H'],
      source: 'BC Decker',
    },
  ],

  crossReferences: [
    { targetId: 'ent-sinusitis', targetType: 'condition', relationship: 'related', label: 'Sinusitis' },
    { targetId: 'ent-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
  ],

  tags: {
    systems: ['respiratory', 'sinonasal'],
    structures: ['FMA:54378', 'FMA:59679'],
    topics: ['anatomy', 'rhinology', 'endoscopic surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default noseAndSinusAnatomy;
