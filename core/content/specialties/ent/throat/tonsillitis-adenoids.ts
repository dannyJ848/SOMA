/**
 * Tonsillitis and Adenoid Disorders - Comprehensive Educational Content
 *
 * Covers tonsillitis, adenoid hypertrophy, and surgical management.
 */

import { EducationalContent } from '../../../types';

export const tonsillitisAdenoids: EducationalContent = {
  id: 'ent-tonsillitis-adenoids',
  type: 'condition',
  name: 'Tonsillitis and Adenoid Disorders',
  alternateNames: ['Tonsillopharyngitis', 'Adenotonsillar Disease', 'Pharyngotonsillitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Tonsillitis is when your tonsils get infected and swollen, causing sore throat and difficulty swallowing. Adenoids are similar tissue behind your nose that can also get enlarged.',
      explanation: `Your tonsils are two round lumps at the back of your throat that help fight germs. Sometimes they get infected themselves!

**What Happens in Tonsillitis:**
- Your tonsils get red and swollen
- It hurts to swallow
- You might have a fever
- White spots may appear on your tonsils
- Your neck glands might be swollen

**What Are Adenoids?**
Adenoids are like tonsils but located behind your nose. You cannot see them by looking in a mirror. When they get too big, they can:
- Block your nose and make you breathe through your mouth
- Cause snoring
- Give you a stuffy, nasal voice
- Lead to ear problems

**Common Causes:**
- Viruses (most common) - like a cold
- Bacteria (like strep throat) - needs antibiotics

**Getting Better:**
- Rest and drink plenty of fluids
- Pain medicine for sore throat
- Antibiotics if it is bacterial (strep)
- Gargling with warm salt water

**When Tonsils Need to Come Out:**
Sometimes tonsils get infected so often that doctors recommend removing them (tonsillectomy). This is a surgery that helps children (and adults) stop getting so many throat infections.`,
      keyTerms: [
        { term: 'tonsils', definition: 'Two round lumps at the back of your throat that help fight germs' },
        { term: 'tonsillitis', definition: 'When your tonsils get infected and swollen' },
        { term: 'adenoids', definition: 'Tissue behind your nose, similar to tonsils, that can get enlarged' },
        { term: 'strep throat', definition: 'A bacterial infection that needs antibiotics to get better' },
        { term: 'tonsillectomy', definition: 'Surgery to remove the tonsils' },
      ],
      analogies: [
        'Your tonsils are like guards at a castle gate, stopping germs from entering your body. Sometimes the guards get overwhelmed and need help (medicine).',
        'Enlarged adenoids are like a blocked drain - air and mucus cannot flow properly.',
      ],
      examples: [
        'When you have strep throat, you might see white patches on your tonsils and have a very sore throat.',
        'A child who snores loudly and always breathes through their mouth might have enlarged adenoids.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tonsillitis is inflammation of the palatine tonsils, commonly caused by viral or bacterial (Group A Streptococcus) infection, while adenoid hypertrophy causes nasal obstruction and may contribute to otitis media and sleep-disordered breathing.',
      explanation: `Adenotonsillar disease is one of the most common reasons for ENT and pediatric visits.

**Anatomy:**
- **Palatine tonsils:** Visible in oropharynx, part of Waldeyer's ring
- **Adenoids (pharyngeal tonsil):** Located in nasopharynx, visible by endoscopy

**Tonsillitis Classification:**
- **Acute:** Single episode of inflammation
- **Recurrent:** Multiple episodes per year
- **Chronic:** Persistent symptoms >3 months

**Causes of Acute Tonsillitis:**
*Viral (most common):*
- Rhinovirus, adenovirus, coronavirus
- Epstein-Barr virus (infectious mononucleosis)
- Influenza, parainfluenza

*Bacterial:*
- Group A Streptococcus (GAS) - 15-30% of pediatric cases
- Other bacteria: Groups C/G strep, Fusobacterium

**Symptoms:**
- Sore throat, odynophagia (painful swallowing)
- Fever
- Tonsillar erythema and exudates
- Cervical lymphadenopathy
- Headache, malaise

**Diagnosing Strep Throat:**
- Rapid antigen detection test (RADT)
- Throat culture (gold standard)
- Centor/McIsaac criteria for clinical probability

**Centor Criteria (1 point each):**
1. Fever history
2. Tonsillar exudates
3. Tender anterior cervical nodes
4. Absence of cough

*Score 0-1:* No testing, no antibiotics
*Score 2-3:* Test before treating
*Score 4:* Treat empirically

**Treatment:**
*Viral:* Supportive care (fluids, rest, analgesics)
*Strep:* Penicillin or amoxicillin (prevents rheumatic fever)

**Adenoid Hypertrophy:**
*Causes:*
- Chronic infection/inflammation
- Normal in children (atrophies by adolescence)
- Rarely: Tumor or HIV

*Consequences:*
- Nasal obstruction, mouth breathing
- Hyponasal speech
- Obstructive sleep apnea
- Eustachian tube dysfunction → recurrent otitis media

**Surgical Indications:**
*Tonsillectomy:*
- Recurrent infections (Paradise criteria)
- Sleep-disordered breathing
- Peritonsillar abscess

*Adenoidectomy:*
- Nasal obstruction
- Recurrent/chronic otitis media
- Often combined with tonsillectomy`,
      keyTerms: [
        { term: 'Group A Streptococcus', definition: 'The bacterium (Streptococcus pyogenes) causing strep throat and rheumatic fever', pronunciation: 'strep-toe-KOK-us' },
        { term: 'Centor criteria', definition: 'Clinical scoring system to assess probability of strep throat' },
        { term: 'peritonsillar abscess', definition: 'Collection of pus next to the tonsil requiring drainage, also called quinsy' },
        { term: 'Waldeyer ring', definition: 'Ring of lymphoid tissue in the pharynx including tonsils, adenoids, and lingual tonsils' },
        { term: 'Paradise criteria', definition: 'Evidence-based criteria for tonsillectomy based on frequency and severity of infections' },
      ],
      analogies: [
        'Centor criteria work like a checklist - the more boxes you check, the more likely it is strep throat.',
        'Adenoids are like the tonsils\' hidden cousin - same job (fighting germs) but located where you cannot see them.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adenotonsillar disease encompasses infectious and obstructive pathology requiring differentiation between viral and bacterial etiologies, assessment of airway compromise, and application of evidence-based surgical criteria.',
      explanation: `Comprehensive management of adenotonsillar disease requires integration of infection management and surgical decision-making.

**Infectious Mononucleosis:**
- Epstein-Barr virus (EBV) primary infection
- Classically: Teens/young adults, but occurs in children
- Features:
  - Severe tonsillar enlargement (may touch at midline)
  - Exudative tonsillitis
  - Generalized lymphadenopathy
  - Hepatosplenomegaly (avoid contact sports)
  - Atypical lymphocytosis
  - Heterophile antibodies (Monospot test)
- Amoxicillin causes maculopapular rash (90%)
- Treatment: Supportive; steroids if airway compromise

**Peritonsillar Abscess (PTA/Quinsy):**
*Pathophysiology:*
- Spread from tonsillitis to peritonsillar space
- Polymicrobial: Strep, anaerobes (Fusobacterium)

*Presentation:*
- Severe unilateral throat pain
- Trismus (difficulty opening mouth)
- "Hot potato" muffled voice
- Uvular deviation away from affected side
- Drooling

*Management:*
- Needle aspiration or incision and drainage
- Antibiotics: Ampicillin-sulbactam or clindamycin
- Interval tonsillectomy or quinsy tonsillectomy

**Obstructive Sleep Apnea (OSA) in Children:**
*Adenotonsillar hypertrophy is the leading cause*

*Clinical Features:*
- Snoring with witnessed apneas
- Mouth breathing, restless sleep
- Daytime somnolence or behavioral problems
- Enuresis, poor school performance
- Failure to thrive (severe cases)

*Evaluation:*
- Polysomnography (gold standard)
- Flexible nasopharyngoscopy (adenoid size)
- Lateral neck X-ray (adenoid-to-nasopharynx ratio)

*Management:*
- Adenotonsillectomy: First-line treatment
- CPAP: If surgery contraindicated or OSA persists

**Evidence-Based Surgical Indications:**

*Paradise Criteria for Recurrent Tonsillitis:*
- 7+ infections in 1 year, OR
- 5+ infections per year for 2 years, OR
- 3+ infections per year for 3 years
- Each infection with: Fever >38.3°C, cervical adenopathy, tonsillar exudate, or positive GAS culture

*Tonsillectomy for OSA:*
- AHI (apnea-hypopnea index) ≥1 considered abnormal in children
- Moderate-severe: AHI ≥5
- Surgery effective in 75-80%

**Surgical Techniques:**

*Tonsillectomy Methods:*
- Cold dissection (traditional)
- Electrocautery
- Coblation (radiofrequency)
- Microdebrider (intracapsular/partial)

*Adenoidectomy:*
- Curettage
- Suction cautery
- Microdebrider
- Coblation

**Complications:**

*Post-Tonsillectomy Hemorrhage:*
- Primary (<24 hours): 0.5-2%
- Secondary (5-10 days): 2-4%
- Management: Control with pressure, cautery, or return to OR

*Other:*
- Pain (7-14 days typical)
- Dehydration
- Velopharyngeal insufficiency (rare)
- Atlantoaxial subluxation (Grisel syndrome, rare)`,
      keyTerms: [
        { term: 'peritonsillar abscess', definition: 'Pus collection in the peritonsillar space causing trismus and uvular deviation' },
        { term: 'trismus', definition: 'Inability to fully open the mouth due to muscle spasm or inflammation' },
        { term: 'polysomnography', definition: 'Overnight sleep study measuring breathing, oxygen levels, and sleep stages' },
        { term: 'apnea-hypopnea index', definition: 'Number of apneas and hypopneas per hour of sleep; measure of OSA severity' },
        { term: 'Grisel syndrome', definition: 'Atlantoaxial subluxation following adenotonsillar surgery or upper respiratory infection' },
      ],
      clinicalNotes: 'Mononucleosis: Do not give amoxicillin (rash); restrict contact sports for 4 weeks (splenic rupture risk). Peritonsillar abscess: Aspiration is diagnostic and therapeutic; consider CT if extension to parapharyngeal space suspected.',
    },
    4: {
      level: 4,
      summary: 'Advanced adenotonsillar management integrates infectious disease principles, pediatric sleep medicine, and surgical outcomes data, with consideration of post-tonsillectomy respiratory compromise in high-risk populations.',
      explanation: `Complex adenotonsillar disease requires multidisciplinary approach and understanding of special populations.

**Microbiology of Recurrent Tonsillitis:**

*Biofilm Concept:*
- Bacteria in tonsillar crypts form biofilms
- Protected from antibiotics and host immunity
- Explains recurrence despite treatment
- May justify tonsillectomy in recurrent cases

*Intracellular Pathogens:*
- GAS can invade tonsillar epithelium
- Evades antibiotic penetration
- Contributes to carrier state

*Fusobacterium necrophorum:*
- Underrecognized cause of pharyngitis
- Can cause Lemierre syndrome
- Septic jugular thrombophlebitis
- Consider in severe pharyngitis with neck mass/sepsis

**Deep Neck Space Infections:**

*Parapharyngeal Abscess:*
- Lateral to superior constrictor
- May arise from PTA extension
- CT with contrast for diagnosis
- Surgical drainage required

*Retropharyngeal Abscess:*
- Common in children <5 years
- From suppurative retropharyngeal nodes
- Neck stiffness, drooling, stridor
- Risk of airway compromise and mediastinitis

**Pediatric Sleep Medicine:**

*OSA Pathophysiology in Children:*
- Adenotonsillar hypertrophy (primary cause)
- Neuromuscular factors
- Craniofacial anatomy
- Obesity (increasing role)

*OSA Consequences:*
- Cardiovascular: Pulmonary hypertension, cor pulmonale
- Neurocognitive: Attention, memory, behavior
- Growth: Growth hormone release affected
- Quality of life impact

*High-Risk Populations for Post-Tonsillectomy Respiratory Compromise:*
- Age <3 years
- Severe OSA (AHI >10, SpO2 nadir <80%)
- Obesity
- Craniofacial anomalies
- Neuromuscular disease
- Down syndrome

*Management of High-Risk Patients:*
- Inpatient observation post-operatively
- Consider staged adenoidectomy first
- CPAP titration if surgery not curative

**Tonsillectomy Outcomes Research:**

*Paradise Study (1984):*
- Randomized controlled trial
- Tonsillectomy reduces throat infections
- Benefit most clear in severely affected
- Moderate benefit in mildly affected

*Post-Tonsillectomy OSA Outcomes:*
- 75-80% cure rate (AHI normalized)
- Obese children have lower success
- Residual OSA may require CPAP
- Repeat PSG if persistent symptoms

**Intracapsular Tonsillectomy (Tonsillotomy):**

*Technique:*
- Removes bulk of tonsil, preserves capsule
- Less pain, faster recovery
- Microdebrider or coblation

*Indications:*
- Primarily for OSA (obstructive indication)
- Not recommended for infectious indication

*Outcomes:*
- Reduced pain and hemorrhage
- Possible regrowth (10-16%)
- Recurrence of obstruction rare if sufficient tissue removed

**Special Populations:**

*Down Syndrome:*
- Increased OSA prevalence
- Multiple levels of obstruction
- Atlantoaxial instability consideration
- Higher rate of post-op complications

*Bleeding Disorders:*
- Von Willebrand disease most common
- Pre-op screening controversial
- May require factor replacement
- Hematology consultation

*Immunodeficiency:*
- IgA deficiency: Consider before adenoidectomy
- HIV: Adenotonsillar hypertrophy common
- Consider biopsy if atypical features`,
      keyTerms: [
        { term: 'Lemierre syndrome', definition: 'Septic thrombophlebitis of internal jugular vein from Fusobacterium, following pharyngitis' },
        { term: 'intracapsular tonsillectomy', definition: 'Partial tonsillectomy preserving tonsillar capsule, with reduced pain but possible regrowth' },
        { term: 'biofilm', definition: 'Bacterial community protected by extracellular matrix, resistant to antibiotics' },
        { term: 'retropharyngeal abscess', definition: 'Deep neck infection posterior to pharynx, common in young children, airway emergency' },
        { term: 'Down syndrome', definition: 'Trisomy 21 with increased OSA risk, multilevel obstruction, and surgical considerations' },
      ],
      clinicalNotes: 'Lemierre syndrome: Suspect in severe pharyngitis with neck pain, high fever, and pulmonary infiltrates; requires prolonged antibiotics. Post-tonsillectomy: High-risk patients need overnight observation with continuous oximetry.',
    },
    5: {
      level: 5,
      summary: 'Contemporary adenotonsillar surgery incorporates drug-induced sleep endoscopy for multilevel obstruction, emerging immunomodulatory approaches, enhanced recovery protocols, and precision medicine in perioperative care.',
      explanation: `State-of-the-art adenotonsillar management integrates advanced diagnostics, surgical innovation, and systems-based care.

**Advanced Diagnostics:**

*Drug-Induced Sleep Endoscopy (DISE):*
- Flexible scope during propofol sedation
- Mimics sleep state
- Identifies obstruction levels:
  - Velum (palate)
  - Oropharynx (tonsils)
  - Tongue base
  - Epiglottis
- Useful when adenotonsillectomy fails or atypical anatomy

*Cine MRI Sleep Studies:*
- Research tool
- Dynamic imaging during natural sleep
- Non-invasive assessment of airway collapse

*Biomarkers:*
- Urinary proteins for OSA severity
- Systemic inflammation markers
- Research applications

**Surgical Innovation:**

*Robot-Assisted Adenoidectomy:*
- Improved visualization
- Precision in deep nasopharynx
- Research stage

*Plasma Ablation Technology:*
- Lower temperature than electrocautery
- Theoretical tissue preservation
- Variable evidence for outcomes advantage

*Postoperative Hemorrhage Prevention:*
- Tranexamic acid: Some evidence for reduction
- Fibrin sealants: Inconsistent results
- Suturing techniques: Surgeon preference

**Enhanced Recovery After Surgery (ERAS):**

*Preoperative:*
- Patient/family education
- Reduce fasting times (clear liquids 2 hours)
- Multimodal analgesia planning

*Intraoperative:*
- Dexamethasone (reduces PONV, pain, improves intake)
- Local anesthesia infiltration
- Avoid excessive opioids

*Postoperative:*
- Scheduled acetaminophen and ibuprofen
- Minimize opioids (FDA black box in children <12)
- Early oral intake
- Clear discharge criteria

**Opioid-Sparing Analgesia:**

*FDA Warning (2017):*
- Codeine contraindicated in children <12 years
- Ultra-rapid metabolizers at risk for fatal respiratory depression
- Applies post-tonsillectomy

*Current Practice:*
- Acetaminophen + ibuprofen as backbone
- Ibuprofen: Not shown to increase bleeding risk
- Low-dose opioids only if needed
- Avoid in high-risk OSA

**Immunology of Adenotonsillar Tissue:**

*Normal Function:*
- B-cell maturation
- IgA production
- Antigen sampling at aerodigestive entrance
- Peak size ages 2-6, then involution

*Post-Adenotonsillectomy:*
- No significant long-term immunodeficiency
- Compensatory function by remaining lymphoid tissue
- Slightly increased risk of respiratory infections (controversial)

*Emerging Research:*
- Microbiome of healthy vs. diseased tonsils
- Tonsil organoids for research
- Immunomodulatory therapies as alternative to surgery

**Special Surgical Scenarios:**

*Velopharyngeal Insufficiency (VPI) Risk:*
- Submucous cleft palate
- Velocardiofacial syndrome (22q11 deletion)
- Preoperative palate assessment essential
- Consider partial adenoidectomy

*Craniofacial Syndromes:*
- Pierre Robin sequence
- Treacher Collins
- Multilevel obstruction
- May require mandibular distraction

*Persistent OSA After Surgery:*
- Repeat polysomnography in 6-8 weeks
- Evaluate for residual adenoid, lingual tonsil hypertrophy
- Consider CPAP, weight loss, orthodontic expansion
- Hypoglossal nerve stimulation (emerging in adolescents)

**Quality Metrics:**

*Surgical Outcomes:*
- Post-tonsillectomy hemorrhage rate (<3% target)
- ED visits within 14 days
- Readmission rate
- Patient-reported pain scores

*System-Level:*
- Same-day surgery rates
- Appropriate use of PSG before surgery
- Adherence to Paradise criteria
- Avoidance of unnecessary antibiotics for viral pharyngitis`,
      keyTerms: [
        { term: 'drug-induced sleep endoscopy', definition: 'Flexible endoscopy during propofol sedation to identify levels of airway obstruction' },
        { term: 'ERAS protocol', definition: 'Enhanced Recovery After Surgery; multimodal approach to optimize perioperative care' },
        { term: 'velopharyngeal insufficiency', definition: 'Incomplete closure of soft palate causing hypernasality, risk after adenoidectomy' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implanted device stimulating tongue protrusor muscles for OSA treatment' },
        { term: 'submucous cleft palate', definition: 'Occult palatal cleft with VPI risk; contraindication to standard adenoidectomy' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Codeine is contraindicated post-tonsillectomy in children - use acetaminophen and ibuprofen
2. Ibuprofen does NOT increase post-tonsillectomy bleeding - safe and effective
3. Check palate for submucous cleft (bifid uvula, zona pellucida) before adenoidectomy
4. Severe OSA (AHI >10, O2 nadir <80%): Observe overnight post-operatively
5. DISE: Consider when adenotonsillectomy fails or in children with complex anatomy
6. Post-tonsillectomy bleeding: Most common days 5-7; educate families about return precautions
7. Down syndrome: Higher complication rate; often residual OSA after surgery`,
    },
  },

  media: [
    {
      id: 'tonsillar-anatomy',
      type: 'diagram',
      filename: 'tonsillar-anatomy.svg',
      title: 'Tonsillar Anatomy',
      description: 'Oropharyngeal view showing palatine tonsils and related structures',
    },
    {
      id: 'adenoid-size',
      type: 'diagram',
      filename: 'adenoid-hypertrophy-xray.svg',
      title: 'Adenoid Hypertrophy',
      description: 'Lateral neck X-ray showing adenoid enlargement',
    },
    {
      id: 'peritonsillar-abscess',
      type: 'diagram',
      filename: 'peritonsillar-abscess.svg',
      title: 'Peritonsillar Abscess',
      description: 'Examination findings in peritonsillar abscess',
    },
  ],

  citations: [
    {
      id: 'paradise-study',
      type: 'article',
      title: 'Efficacy of Tonsillectomy for Recurrent Throat Infection in Severely Affected Children',
      authors: ['Paradise JL', 'Bluestone CD', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'aap-osa-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline: Diagnosis and Management of Childhood Obstructive Sleep Apnea',
      source: 'Pediatrics',
    },
  ],

  crossReferences: [
    { targetId: 'ent-throat-anatomy', targetType: 'structure', relationship: 'related', label: 'Throat Anatomy' },
    { targetId: 'ent-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Sleep Apnea' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],

  tags: {
    systems: ['immune', 'respiratory'],
    topics: ['otolaryngology', 'pediatrics', 'infectious-disease', 'sleep-medicine'],
    keywords: ['tonsillitis', 'adenoids', 'strep throat', 'sleep apnea', 'tonsillectomy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'pediatrics', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tonsillitisAdenoids;
