/**
 * Throat Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const throatExam: EducationalContent = {
  id: 'heent-throat-exam',
  type: 'process',
  name: 'Throat Examination',
  alternateNames: ['Oropharyngeal Exam', 'Pharyngeal Exam', 'Mouth and Throat Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'A throat examination lets doctors look at the back of your mouth and throat to check for infections, swelling, or other problems.',
      explanation: `## Checking Your Throat

A throat exam is when a doctor looks inside your mouth and throat using a light and sometimes a tongue depressor. This helps them see your tonsils, throat, and surrounding areas.

### What Doctors Look For

**The Tonsils:**
- Two oval-shaped tissues on each side of the throat
- Help fight infections
- Can get swollen and red when infected
- May have white spots with strep throat

**The Throat (Pharynx):**
- Should be pink and moist
- Redness can mean irritation or infection
- Swelling can make swallowing difficult

**The Soft Palate:**
- The back part of the roof of your mouth
- Should move when you say "ah"
- Should be symmetric

**The Uvula:**
- The small piece of tissue that hangs down
- Should be in the center
- Should move when you say "ah"

### Common Problems Found

**Strep Throat:**
- Very red throat
- Swollen tonsils with white patches
- Tender lymph nodes in neck
- Often no cough

**Viral Sore Throat:**
- Red, irritated throat
- May have cough, runny nose
- Usually gets better on its own

**Tonsillitis:**
- Swollen, painful tonsils
- May have trouble swallowing
- Bad breath

**Mononucleosis:**
- Very swollen tonsils
- May have white coating
- Swollen glands
- Extreme tiredness

### How the Exam Is Done

1. **Open wide** - Doctor asks you to open your mouth
2. **Say "ah"** - This lifts the soft palate
3. **Light examination** - Doctor uses light to see clearly
4. **Tongue depressor** - May gently press down tongue
5. **Feel neck** - Doctor may check neck lymph nodes

### Why This Exam Is Done

- Sore throat
- Difficulty swallowing
- Voice changes
- Bad breath
- Check for strep throat
- Routine physical exams`,

      keyTerms: [
        { term: 'pharynx', definition: 'The medical term for the throat' },
        { term: 'tonsils', definition: 'Lymph tissue on each side of the throat that helps fight infection' },
        { term: 'uvula', definition: 'The small tissue that hangs down at the back of the throat' },
        { term: 'soft palate', definition: 'The back part of the roof of the mouth' },
        { term: 'tongue depressor', definition: 'Flat stick used to press down the tongue during exam' },
      ],

      analogies: [
        'The tonsils are like security guards - they help catch germs that enter through your mouth.',
        'Saying "ah" during the exam is like opening a curtain - it lets the doctor see the whole stage.',
        'The uvula is like a swinging door - it should move when you make sounds.',
      ],

      examples: [
        'White patches on tonsils with fever and no cough suggests strep throat.',
        'Red throat with cough and runny nose is usually viral.',
        'Very swollen tonsils with fatigue suggests mono.',
      ],

      patientCounselingPoints: [
        'Most sore throats are caused by viruses and get better on their own.',
        'Strep throat needs antibiotics to prevent complications.',
        'Gargling with warm salt water can soothe a sore throat.',
        'Drinking fluids helps keep the throat moist.',
      ],
    },

    2: {
      level: 2,
      summary: 'Throat examination systematically evaluates the oropharynx, tonsils, and surrounding structures to diagnose infections, inflammation, and masses.',
      explanation: `## Examination Technique

### Equipment Needed
- Good light source (penlight or headlamp)
- Tongue depressor
- Gloves
- Gauze (if need to grasp tongue)

### Patient Positioning
- Sitting upright
- Face at examiner's eye level
- Good lighting

### Systematic Examination

**1. Lips and Oral Cavity:**
- Color and moisture
- Lesions, ulcers, cracking
- Angular cheilitis

**2. Teeth and Gums:**
- Dental hygiene
- Caries
- Gingival inflammation

**3. Buccal Mucosa:**
- Color (should be pink)
- Patches or lesions
- Parotid duct openings (opposite upper molars)

**4. Tongue:**
- Color and texture
- Coating
- Ulcers or masses
- Mobility

**5. Hard and Soft Palate:**
- Color
- Integrity
- Clefts or masses

**6. Oropharynx:**
- Say "ah" or use tongue depressor
- Assess:
  - Tonsil size
  - Pharyngeal erythema
  - Exudates
  - Postnasal drip
  - Palatal movement

**7. Uvula:**
- Midline position
- Movement with phonation

**8. Neck Examination:**
- Palpate lymph nodes
- Assess thyroid (if indicated)
- Check for masses

### Tonsil Grading Scale

| Grade | Description |
|-------|-------------|
| 0 | Tonsils in fossa, barely visible |
| 1+ | Visible, occupy <25% of oropharyngeal width |
| 2+ | Occupy 25-50% of width |
| 3+ | Occupy 50-75% of width |
| 4+ | Occupy >75%, touching midline (kissing tonsils) |

### Common Findings

| Finding | Description | Significance |
|---------|-------------|--------------|
| Erythema | Redness | Infection, inflammation |
| Exudates | White/yellow patches | Bacterial infection |
| Petechiae | Small red spots | Strep, mono, trauma |
| Cobblestoning | Lumpy lymphoid tissue | Chronic irritation |
| Postnasal drip | Mucus draining down | Allergies, sinusitis |
| Tonsillar asymmetry | One larger than other | Possible mass |
| Peritonsillar swelling | Bulging soft palate | Peritonsillar abscess |`,

      keyTerms: [
        { term: 'oropharynx', definition: 'Middle part of the throat behind the mouth' },
        { term: 'exudate', definition: 'Fluid or pus on surface' },
        { term: 'petechiae', definition: 'Small pinpoint hemorrhages' },
        { term: 'cobblestoning', definition: 'Lumpy appearance of posterior pharynx' },
        { term: 'angular cheilitis', definition: 'Inflammation at corners of mouth' },
      ],

      analogies: [
        'The tonsils are like two guards standing at the entrance to the throat.',
        'Cobblestoning looks like a cobblestone street - bumpy and irregular.',
      ],

      examples: [
        'Palatal petechiae strongly suggest streptococcal pharyngitis.',
        'Unilateral tonsillar enlargement in adult requires biopsy to rule out lymphoma.',
        'Uvular deviation suggests peritonsillar abscess.',
      ],

      clinicalNotes: 'Asymmetric tonsillar enlargement, especially in adults, requires further evaluation to exclude malignancy.',
    },

    3: {
      level: 3,
      summary: 'Advanced throat examination includes diagnostic testing for pharyngitis, identification of complications, and differential diagnosis.',
      explanation: `## Pharyngitis Differential Diagnosis

**Group A Strep (GAS):**
- Sudden onset sore throat
- Fever, headache, stomach pain
- Tonsillar exudates
- Tender anterior cervical nodes
- Absence of cough
- Use Centor or McIsaac criteria

**Infectious Mononucleosis:**
- Severe pharyngitis
- Marked tonsillar hypertrophy
- Exudates
- Generalized lymphadenopathy
- Splenomegaly
- Fatigue

**Viral Pharyngitis:**
- Rhinovirus, adenovirus, EBV, CMV
- Cough, coryza common
- Conjunctivitis (adenovirus)
- Gradual onset

**Gonococcal Pharyngitis:**
- Sexually active individuals
- Often asymptomatic
- Disseminated infection possible

**Diphtheria:**
- Gray pseudomembrane
- Toxin-mediated
- Vaccine-preventable
- Rare in developed countries

### Diagnostic Testing

**Rapid Strep Test:**
- 80-90% sensitivity
- 95% specificity
- Results in minutes
- Negative test: send culture if high suspicion

**Throat Culture:**
- Gold standard
- 48-72 hour results
- Use if rapid test negative and high suspicion

**Monospot (Heterophile):**
- 85% sensitivity in week 1
- 95% by week 3
- False negatives early in illness

**EBV Serologies:**
- VCA IgM (acute)
- VCA IgG (past infection)
- EBNA (past infection, not acute)

### Complications

**Peritonsillar Abscess:**
- Unilateral severe pain
- Dysphagia, drooling
- "Hot potato" voice
- Uvular deviation
- Trismus (difficulty opening mouth)
- Requires drainage

**Retropharyngeal Abscess:**
- Children more common
- Neck pain, stiffness
- Dysphagia
- Stridor (in infants)
- CT diagnosis

**Lemierre Syndrome:**
- Septic thrombophlebitis of internal jugular
- Fusobacterium
- Metastatic abscesses to lungs
- Serious, often ICU admission

**Post-Streptococcal:**
- Rheumatic fever
- Glomerulonephritis
- Prevented by timely antibiotics

### Treatment

**Strep Throat:**
- Penicillin or amoxicillin
- Duration: 10 days
- Alternative: cephalosporins, macrolides
- Return to school after 24 hours of antibiotics

**Mononucleosis:**
- Supportive care
- Rest
- Avoid contact sports (splenic rupture risk)
- Corticosteroids if airway obstruction`,

      keyTerms: [
        { term: 'Centor criteria', definition: 'Clinical criteria for strep throat likelihood' },
        { term: 'trismus', definition: 'Inability to open mouth fully' },
        { term: 'dysphagia', definition: 'Difficulty swallowing' },
        { term: 'retropharyngeal space', definition: 'Space behind the pharynx' },
        { term: 'heterophile antibody', definition: 'Antibody in mono that reacts with animal RBCs' },
      ],

      analogies: [
        'A peritonsillar abscess is like a pimple that needs to be drained.',
        'Post-strep complications are like echoes - they come after the original infection.',
      ],

      examples: [
        'Centor score 4-5: high probability of strep, treat empirically.',
        'Hot potato voice and uvular deviation = peritonsillar abscess until proven otherwise.',
        'Splenic rupture in mono typically occurs in weeks 2-3.',
      ],

      clinicalNotes: 'Lemierre syndrome is rare but serious - internal jugular thrombophlebitis with septic emboli to lungs. High mortality without treatment.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of throat examination with head and neck pathology, cancer screening, and specialized diagnostic procedures.',
      explanation: `## Head and Neck Cancer Screening

**Risk Factors:**
- Tobacco use
- Alcohol consumption
- HPV infection (oropharyngeal)
- Betel nut chewing
- Prior radiation
- Immunosuppression

**Warning Signs:**
- Persistent sore throat (>3 weeks)
- Unilateral tonsillar enlargement
- Neck mass
- Otalgia (referred pain)
- Dysphagia or odynophagia
- Voice changes
- Weight loss

**High-Risk Areas:**
- Tonsil
- Base of tongue
- Soft palate
- Posterior pharyngeal wall

**HPV-Related Oropharyngeal Cancer:**
- Increasing incidence
- Younger patients
- Base of tongue/tonsils
- Better prognosis than tobacco-related

### Specialized Examinations

**Flexible Nasopharyngoscopy:**
- Office-based procedure
- Evaluate nasopharynx, larynx
- Biopsy suspicious lesions
- Assess vocal cord movement

**Indirect Laryngoscopy:**
- Mirror examination
- View larynx and vocal cords
- No equipment needed
- Patient says "eeee"

**Direct Laryngoscopy:**
- Operating room procedure
- Detailed examination
- Biopsy under anesthesia
- Panendoscopy for cancer workup

### Oral Pathology

**Oral Leukoplakia:**
- White patch, cannot be scraped off
- Premalignant lesion
- Biopsy if persistent
- Tobacco-related

**Oral Erythroplakia:**
- Red patch
- Higher malignant potential than leukoplakia
- Always biopsy

**Oral Lichen Planus:**
- White lacy pattern
- May be erosive
- Monitor for malignant transformation

**Oral Candidiasis:**
- White plaques, can be scraped
- Immunosuppression, antibiotics, dentures
- Treat with antifungals

### Sleep Apnea Assessment

**Oropharyngeal Exam in OSA:**
- Tonsil size (Friedman grading)
- Mallampati classification
- Tongue size
- Palate position
- Retrognathia

**Mallampati Classification:**
- Class I: Full tonsils, pillars, soft palate visible
- Class II: Hard/soft palate, upper pillars visible
- Class III: Soft and hard palate visible
- Class IV: Hard palate only visible
- Higher class = more difficult intubation, OSA risk`,

      keyTerms: [
        { term: 'odynophagia', definition: 'Painful swallowing' },
        { term: 'otagia', definition: 'Ear pain' },
        { term: 'leukoplakia', definition: 'White patch that cannot be scraped off' },
        { term: 'erythroplakia', definition: 'Red patch with malignant potential' },
        { term: 'Mallampati', definition: 'Classification of oropharyngeal view' },
      ],

      clinicalNotes: 'Any oral lesion persisting >3 weeks requires biopsy to rule out malignancy.',
    },

    5: {
      level: 5,
      summary: 'Expert oropharyngeal examination for complex pathology, surgical planning, and multidisciplinary care coordination.',
      explanation: `## Advanced Diagnostic Procedures

**Panendoscopy:**
- Examination under anesthesia
- Laryngoscopy, esophagoscopy, bronchoscopy
- "Second primary" search in head/neck cancer
- Biopsy suspicious lesions
- Tumor mapping

**Fine Needle Aspiration (FNA):**
- Neck mass evaluation
- Ultrasound guidance
- Cytology diagnosis
- Avoid open biopsy in suspected cancer

**HPV Testing:**
- p16 immunohistochemistry
- HPV DNA testing
- Prognostic marker for oropharyngeal cancer
- Guides treatment decisions

**Imaging:**
- CT neck with contrast
- MRI for soft tissue detail
- PET-CT for staging
- Evaluate nodal disease

## Surgical Considerations

**Tonsillectomy Indications:**
- Recurrent infections (7 in 1 year, 5/year x 2 years, 3/year x 3 years)
- Obstructive sleep apnea
- Peritonsillar abscess
- Suspicion for malignancy
- Unilateral tonsillar hypertrophy

**Complications:**
- Hemorrhage (primary <24h, secondary 5-10 days)
- Dehydration
- Velopharyngeal insufficiency
- Nasal regurgitation (usually temporary)

**Base of Tongue Procedures:**
- Robotic surgery
- Transoral approaches
- Reconstruction considerations
- Swallowing rehabilitation

### Multidisciplinary Care

**Tumor Board:**
- Head and neck surgery
- Radiation oncology
- Medical oncology
- Radiology
- Pathology
- Speech/swallowing therapy
- Nutrition

**Treatment Modalities:**
- Surgery
- Radiation therapy
- Chemotherapy
- Immunotherapy
- Targeted therapy
- Combination approaches

**Rehabilitation:**
- Speech therapy
- Swallowing evaluation
- Nutritional support
- Pain management
- Psychosocial support`,

      keyTerms: [
        { term: 'panendoscopy', definition: 'Complete examination of upper aerodigestive tract' },
        { term: 'p16', definition: 'Surrogate marker for HPV-related cancer' },
        { term: 'velopharyngeal insufficiency', definition: 'Failure of soft palate to close nasopharynx' },
      ],

      clinicalNotes: 'HPV-positive oropharyngeal cancer has better prognosis than HPV-negative; treatment may be de-escalated in clinical trials.',
    },
  },

  media: [],

  citations: [
    {
      id: 'idsa-pharyngitis',
      type: 'article',
      title: 'Clinical Practice Guideline for Diagnosis and Management of Group A Streptococcal Pharyngitis',
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'heent-fundoscopic-exam', targetType: 'process', relationship: 'sibling', label: 'Fundoscopic Exam' },
    { targetId: 'heent-ear-exam', targetType: 'process', relationship: 'sibling', label: 'Ear Examination' },
    { targetId: 'ent-pharyngitis', targetType: 'condition', relationship: 'related', label: 'Pharyngitis' },
  ],

  tags: {
    systems: ['ent'],
    topics: ['physical-examination'],
    keywords: ['throat', 'pharynx', 'tonsils', 'pharyngitis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default throatExam;
