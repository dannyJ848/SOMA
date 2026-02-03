/**
 * Ear Examination and Otoscopy - Physical Examination
 */

import { EducationalContent } from '../../types';

export const earExamOtoscopy: EducationalContent = {
  id: 'heent-ear-exam-otoscopy',
  type: 'process',
  name: 'Ear Examination and Otoscopy',
  alternateNames: ['Otoscopy', 'Ear Canal Exam', 'Tympanic Membrane Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'An ear examination uses a special light called an otoscope to look inside the ear canal and check the eardrum for infection or other problems.',
      explanation: `## Looking Inside the Ear

An ear exam is when a doctor looks inside your ear using a special tool called an otoscope. This lets them see your ear canal and eardrum.

### What Is an Otoscope?

An otoscope is a handheld device with:
- A light to see inside
- A magnifying lens
- A cone-shaped tip (speculum) that goes in the ear
- Sometimes an air puff attachment

### What Doctors Look For

**The Ear Canal:**
- Should be pinkish and clear
- No swelling or redness
- No foreign objects
- Normal amount of earwax

**The Eardrum (Tympanic Membrane):**
- Should be pearly gray and shiny
- Cone-shaped, pointing inward
- Light reflects off it normally
- Should move when air is puffed

### Common Problems Found

**Ear Infections:**
- Red, bulging eardrum
- Fluid behind the eardrum
- May be cloudy or dull

**Earwax Buildup:**
- Brown or yellow wax blocking view
- Can cause hearing problems
- Can be removed safely

**Foreign Objects:**
- Beads, cotton, or insects in ear
- More common in children
- Need careful removal

**Perforated Eardrum:**
- Hole or tear in eardrum
- May follow infection or injury
- Usually heals on its own

### Why This Exam Is Done

- Ear pain or discomfort
- Hearing problems
- Ear discharge
- Check after infection
- Routine checkups in children

### Is It Uncomfortable?

The exam is usually painless:
- The speculum tip may feel slightly cold
- Moving the ear to straighten the canal is normal
- Children may need to be held still
- The light is bright but not harmful`,

      keyTerms: [
        { term: 'otoscope', definition: 'Medical instrument used to examine the ear' },
        { term: 'tympanic membrane', definition: 'The eardrum - thin tissue that separates outer and middle ear' },
        { term: 'ear canal', definition: 'The tube leading from outside to the eardrum' },
        { term: 'earwax', definition: 'Natural substance that protects and cleans the ear canal' },
        { term: 'perforation', definition: 'A hole or tear in the eardrum' },
      ],

      analogies: [
        'The ear canal is like a tunnel - the otoscope lets the doctor see to the end.',
        'The eardrum is like a drum skin - it vibrates when sound hits it.',
        'Earwax is like a protective shield - it keeps dirt and germs out.',
      ],

      examples: [
        'A red, bulging eardrum usually means an ear infection.',
        'Fluid behind the eardrum suggests otitis media with effusion.',
        'A hole in the eardrum might follow a severe infection or trauma.',
      ],

      patientCounselingPoints: [
        'Never put cotton swabs deep in the ear - they can push wax deeper or injure the eardrum.',
        'Ear pain with cold symptoms often means an ear infection.',
        'Hearing loss with earwax can be fixed by removing the wax.',
        'Most eardrum holes heal on their own within a few weeks.',
      ],
    },

    2: {
      level: 2,
      summary: 'Otoscopic examination systematically evaluates the external ear, ear canal, and tympanic membrane using proper technique to diagnose common ear conditions.',
      explanation: `## Otoscopic Technique

### Patient Positioning
- Adult: Sit upright, tilt head slightly toward opposite shoulder
- Infant/toddler: Supine, head turned to side
- Stabilize head with non-examining hand

### Ear Manipulation
**Adult/Child (>3 years):**
- Pull pinna UP and BACK to straighten canal

**Infant (<3 years):**
- Pull pinna DOWN and BACK (different ear anatomy)

### Examination Steps

1. **Inspect external ear:**
   - Pinna position and shape
   - Skin changes, lesions
   - Tenderness to movement

2. **Examine ear canal:**
   - Insert speculum slowly
   - Look for cerumen, foreign bodies
   - Check for erythema, discharge
   - Note edema or stenosis

3. **Visualize tympanic membrane:**
   - Identify landmarks
   - Assess color and translucency
   - Check for mobility (pneumatic otoscopy)
   - Note perforations or retractions

### Tympanic Membrane Anatomy

**Normal TM:**
- Color: Pearly gray, semi-transparent
- Shape: Cone-shaped, concave
- Landmarks: Pars tensa, pars flaccida, malleus handle, umbo, light reflex

**Quadrants:**
- Anterior-superior
- Anterior-inferior
- Posterior-superior
- Posterior-inferior

### Common Findings

| Finding | Description | Significance |
|---------|-------------|--------------|
| Erythema | Redness | Infection, inflammation |
| Bulging | Convex outward | Acute otitis media |
| Retraction | Concave, deep | Negative pressure, ETD |
| Air-fluid level | Bubble or line | OME |
| Opacification | Cloudy, dull | Fluid, scarring |
| Perforation | Hole in TM | Infection, trauma |
| Light reflex | Cone of light | Normal finding |

### Pneumatic Otoscopy
- Attach bulb to otoscope
- Gently seal canal with speculum
- Squeeze bulb to create pressure
- Normal TM moves inward and outward
- Immobile TM suggests fluid or perforation`,

      keyTerms: [
        { term: 'pars tensa', definition: 'Main part of tympanic membrane' },
        { term: 'pars flaccida', definition: 'Small superior portion of TM' },
        { term: 'umbo', definition: 'Center of TM where malleus attaches' },
        { term: 'otitis externa', definition: 'Infection of outer ear canal' },
        { term: 'otitis media', definition: 'Infection of middle ear' },
        { term: 'OME', definition: 'Otitis media with effusion - fluid without infection' },
      ],

      analogies: [
        'Straightening the ear canal is like straightening a bent straw to see through it.',
        'Pneumatic otoscopy is like pressing on a balloon - a healthy eardrum moves.',
      ],

      examples: [
        'Immobility on pneumatic otoscopy strongly suggests middle ear fluid.',
        'Amber-colored fluid behind TM suggests long-standing OME.',
        'Severe tenderness on tragal pressure suggests otitis externa.',
      ],

      clinicalNotes: 'Pneumatic otoscopy is the best method to detect middle ear effusion. Cerumen impaction is the most common cause of inability to visualize TM.',
    },

    3: {
      level: 3,
      summary: 'Advanced otoscopic evaluation identifies acute and chronic ear disease, complications, and guides treatment decisions.',
      explanation: `## Otitis Media Diagnosis

**Acute Otitis Media (AOM):**
- Bulging TM or
- New otorrhea not from otitis externa or
- Mild bulging with intense erythema
- Plus: otalgia, fever, irritability

**Otitis Media with Effusion (OME):**
- Fluid in middle ear without acute symptoms
- Air-fluid level or bubbles
- TM retraction or mild bulging
- May have conductive hearing loss

**Chronic Otitis Media:**
- Persistent perforation (>3 months)
- Otorrhea
- May have cholesteatoma
- Conductive hearing loss

### Complications and Associated Findings

**Mastoiditis:**
- Post-auricular erythema, swelling
- Protrusion of pinna
- Tenderness over mastoid
- Emergency

**Cholesteatoma:**
- White keratinous mass
- Usually in pars flaccida
- Destructive lesion
- Requires surgery

**Tympanosclerosis:**
- White calcified plaques on TM
- Post-inflammatory scarring
- May affect hearing

**Retraction Pockets:**
- TM sucked inward
- Can lead to cholesteatoma
- May require ventilation tubes

### Hearing Assessment

**Weber Test:**
- 512 Hz tuning fork on forehead
- Lateralization to one ear suggests conductive loss (that ear) or sensorineural loss (opposite ear)

**Rinne Test:**
- Compare air conduction to bone conduction
- Normal: AC > BC (positive Rinne)
- Conductive loss: BC > AC (negative Rinne)

### Tympanometry
- Measures TM mobility and middle ear pressure
- Type A: Normal
- Type B: Flat (fluid, perforation)
- Type C: Negative pressure (ETD)

### Treatment Considerations

**AOM in Children:**
- Observation if 6-23 months with unilateral, mild
- Antibiotics if bilateral, severe symptoms, or <6 months
- Amoxicillin first-line

**OME:**
- Observation (90% resolve in 3 months)
- Hearing testing if persistent
- Tubes if >3 months with hearing loss

**Cerumen Impaction:**
- Softening agents (carbamide peroxide)
- Irrigation (if no perforation, tubes)
- Manual removal under direct visualization`,

      keyTerms: [
        { term: 'cholesteatoma', definition: 'Destructive skin growth in middle ear' },
        { term: 'tympanosclerosis', definition: 'Calcification of tympanic membrane' },
        { term: 'ETD', definition: 'Eustachian tube dysfunction' },
        { term: 'Rinne test', definition: 'Tuning fork test comparing air and bone conduction' },
        { term: 'Weber test', definition: 'Tuning fork test for lateralization' },
      ],

      analogies: [
        'The eustachian tube is like a pressure equalization valve for the middle ear.',
        'Cholesteatoma is like a tumor of skin that can erode bone.',
      ],

      examples: [
        'AOM with severe bulging and fever requires antibiotic treatment.',
        'Type B tympanogram confirms middle ear effusion.',
        'Cholesteatoma requires surgical removal to prevent complications.',
      ],

      clinicalNotes: 'Most AOM resolves without antibiotics. Mastoiditis is rare but serious complication requiring IV antibiotics and possible surgery.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of otoscopic findings with management of complex ear disease and hearing impairment.',
      explanation: `## Complex Ear Disease

**Chronic Suppurative Otitis Media:**
- Persistent perforation with drainage
- Conductive hearing loss
- Polyp formation possible
- Treatment: Topical quinolone antibiotics, avoidance of water
- Surgery if fails medical therapy

**Adhesive Otitis Media:**
- TM retracted onto ossicles
- Middle ear atelectasis
- Risk of ossicular erosion
- Hearing loss
- Consider tubes or reconstruction

**Barotrauma:**
- TM hemorrhage or perforation
- History of flying or diving
- Usually heals spontaneously
- Prophylactic decongestants for flying

**Traumatic Perforation:**
- History of Q-tip use, slap, blast
- Usually central perforation
- Keep ear dry
- Most heal in 4-6 weeks

### Special Populations

**Children:**
- Recurrent AOM (>3 in 6 months)
- Consider tubes
- Adenoid hypertrophy factor
- Daycare exposure increases risk

**Adults with Unilateral Chronic Otitis:**
- Rule out nasopharyngeal carcinoma
- Check for unilateral middle ear fluid
- Nasopharyngoscopy indicated
- Especially if Asian descent

**Immunocompromised:**
- Higher risk of malignant otitis externa
- Pseudomonas infection of temporal bone
- Emergency - can cause cranial nerve palsies
- Requires prolonged IV antibiotics

### Surgical Considerations

**Tympanostomy Tubes:**
- Indications: Recurrent AOM, chronic OME with hearing loss
- Usually extrude in 6-12 months
- Keep ears dry while in place

**Tympanoplasty:**
- Repair of TM perforation
- Success rate 80-90%
- May improve hearing

**Mastoidectomy:**
- For cholesteatoma or mastoiditis
- Removes mastoid air cells
- May be combined with tympanoplasty

### Hearing Rehabilitation

**Conductive Hearing Loss:**
- Often surgically correctable
- Hearing aids effective
- Bone-anchored hearing aids if atresia

**Sensorineural Hearing Loss:**
- Not correctable with surgery
- Hearing aids or cochlear implants
- Sudden SNHL is emergency`,

      keyTerms: [
        { term: 'malignant otitis externa', definition: 'Invasive external ear infection in diabetics' },
        { term: 'tympanoplasty', definition: 'Surgical repair of tympanic membrane' },
        { term: 'mastoidectomy', definition: 'Surgical removal of mastoid air cells' },
        { term: 'atelectasis', definition: 'Collapse of middle ear space' },
      ],

      clinicalNotes: 'Adults with unilateral serous otitis media require nasopharyngeal examination to rule out malignancy.',
    },

    5: {
      level: 5,
      summary: 'Expert otologic examination for rare conditions, temporal bone anatomy, and advanced diagnostic techniques.',
      explanation: `## Advanced Diagnostic Techniques

**Otoendoscopy:**
- Rigid or flexible endoscopes
- Wide field of view
- Examine hidden areas
- Microsurgical precision

**CT Temporal Bone:**
- Evaluate ossicles, mastoid
- Detect cholesteatoma extent
- Pre-operative planning
- Assess for complications

**MRI:**
- Soft tissue detail
- Cerebellopontine angle tumors
- Dural involvement
- Post-operative evaluation

## Rare Conditions

**Otosclerosis:**
- Stapes fixation
- Conductive hearing loss
- Schwartze sign (pink hue behind TM)
- Stapedectomy treatment

**Glomus Tumors:**
- Paragangliomas of middle ear
- Pulsatile tinnitus
- Red mass behind TM
- Requires specialized surgery

**Langerhans Cell Histiocytosis:**
- Ear canal involvement
- Draining ear unresponsive to antibiotics
- Mastoid and temporal bone lesions
- Biopsy diagnosis

**Temporal Bone Fractures:**
- Longitudinal vs transverse
- Facial nerve injury
- CSF otorrhea
- Hearing loss patterns

## Ototoxicity Monitoring

**Drugs to Monitor:**
- Aminoglycosides
- Cisplatin
- Loop diuretics
- Salicylates

**Monitoring:**
- Baseline and serial audiograms
- High-frequency hearing loss first
- Often irreversible

## Congenital Anomalies

**Microtia/Atresia:**
- External ear malformation
- Often with canal atresia
- Hearing rehabilitation priority
- Reconstruction timing important

**Branchial Cleft Anomalies:**
- Cysts, sinuses, fistulas
- First cleft: pre-auricular
- Second cleft: along sternocleidomastoid`,

      keyTerms: [
        { term: 'Schwartze sign', definition: 'Pink discoloration behind TM in otosclerosis' },
        { term: 'paraganglioma', definition: 'Vascular tumor from neural crest cells' },
        { term: 'CSF otorrhea', definition: 'Cerebrospinal fluid leaking from ear' },
        { term: 'microtia', definition: 'Underdeveloped external ear' },
      ],

      clinicalNotes: 'Malignant otitis externa requires urgent IV antibiotics - pseudomonas osteomyelitis of temporal bone with high mortality if untreated.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aap-otom',
      type: 'article',
      title: 'Clinical Practice Guideline: Otitis Media with Effusion',
      source: 'American Academy of Pediatrics',
    },
  ],

  crossReferences: [
    { targetId: 'heent-fundoscopic-exam', targetType: 'process', relationship: 'sibling', label: 'Fundoscopic Exam' },
    { targetId: 'ent-otitis-media', targetType: 'condition', relationship: 'related', label: 'Otitis Media' },
  ],

  tags: {
    systems: ['ent'],
    topics: ['physical-examination'],
    keywords: ['otoscopy', 'ear', 'tympanic membrane', 'otitis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earExamOtoscopy;
