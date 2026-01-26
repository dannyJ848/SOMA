/**
 * Sinusitis - Comprehensive Educational Content
 *
 * Covers sinusitis pathophysiology, classification, and management.
 */

import { EducationalContent } from '../../../types';

export const sinusitis: EducationalContent = {
  id: 'ent-sinusitis',
  type: 'condition',
  name: 'Sinusitis',
  alternateNames: ['Rhinosinusitis', 'Sinus Infection', 'Sinus Inflammation'],

  levels: {
    1: {
      level: 1,
      summary: 'Sinusitis is when the sinuses in your face get swollen and blocked, causing pain, stuffiness, and sometimes thick mucus.',
      explanation: `Your sinuses are empty spaces in the bones around your nose, behind your cheeks, between your eyes, and in your forehead. When they get infected or irritated, it is called sinusitis.

**What Happens in Sinusitis:**
- The lining of your sinuses gets swollen
- Mucus cannot drain properly
- Pressure builds up and causes pain
- Sometimes bacteria grow in the trapped mucus

**Common Symptoms:**
- Stuffy nose
- Pain or pressure in your face (cheeks, forehead, between eyes)
- Thick, colored mucus from your nose or down your throat
- Headache
- Feeling tired
- Sometimes fever

**What Causes Sinusitis:**
- Colds and viruses (most common)
- Allergies
- Bacteria (sometimes)
- Irritants like smoke or pollution

**Getting Better:**
Most sinus infections go away on their own in 1-2 weeks. You can feel better by:
- Drinking lots of fluids
- Breathing in steam
- Using a humidifier
- Taking pain relievers
- Sometimes antibiotics are needed (but not usually)`,
      keyTerms: [
        { term: 'sinusitis', definition: 'When your sinuses get swollen and blocked, causing pain and stuffiness' },
        { term: 'mucus', definition: 'The thick, sticky fluid that your sinuses and nose make' },
        { term: 'congestion', definition: 'When your nose feels blocked and stuffy' },
        { term: 'pressure', definition: 'A pushing feeling in your face from swollen sinuses' },
      ],
      analogies: [
        'Your sinuses are like rooms with one small door - when the door gets blocked, everything backs up inside.',
        'Sinusitis is like a clogged drain. The mucus cannot get out, so it builds up and causes problems.',
      ],
      examples: [
        'When you have a cold and your face hurts around your cheeks and forehead, that is often sinusitis.',
        'If you bend forward and feel more pressure in your face, that is a sign your sinuses are congested.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rhinosinusitis involves inflammation of the nasal passages and paranasal sinuses, classified by duration as acute (<4 weeks), subacute (4-12 weeks), or chronic (>12 weeks), with most cases being viral.',
      explanation: `Sinusitis, more accurately called rhinosinusitis (since it always involves the nose), is one of the most common conditions treated in primary care.

**Classification by Duration:**
- **Acute:** Less than 4 weeks
- **Subacute:** 4-12 weeks
- **Chronic:** More than 12 weeks
- **Recurrent Acute:** 4+ episodes per year with complete resolution between

**Causes:**

*Acute Rhinosinusitis:*
- Viral (98%): Common cold viruses (rhinovirus, influenza)
- Bacterial (2%): Usually secondary to viral infection
  - Streptococcus pneumoniae
  - Haemophilus influenzae
  - Moraxella catarrhalis

*Chronic Rhinosinusitis:*
- Mucosal inflammation (not just infection)
- Often associated with allergies or asthma
- May have nasal polyps

**Symptoms:**
- Nasal congestion or obstruction
- Nasal discharge (anterior or posterior)
- Facial pain or pressure
- Reduced sense of smell

**Diagnosis:**
- Clinical: Based on symptoms and duration
- Imaging rarely needed for acute cases
- CT scan for chronic or complicated cases

**When to Suspect Bacterial:**
- Symptoms >10 days without improvement
- Severe symptoms (high fever >39C, severe pain)
- Double-sickening (improving then worsening)

**Treatment:**

*Supportive Care (first-line for most):*
- Nasal saline irrigation
- Intranasal steroids
- Decongestants (short-term)
- Pain relievers

*Antibiotics (only when indicated):*
- Amoxicillin or amoxicillin-clavulanate
- 5-10 day course
- Reserved for likely bacterial cases`,
      keyTerms: [
        { term: 'rhinosinusitis', definition: 'Inflammation of the nasal cavity and paranasal sinuses, the preferred medical term for sinusitis', pronunciation: 'RYE-no-sigh-nuh-SIGH-tis' },
        { term: 'acute sinusitis', definition: 'Sinus inflammation lasting less than 4 weeks' },
        { term: 'chronic sinusitis', definition: 'Sinus inflammation lasting more than 12 weeks despite treatment' },
        { term: 'nasal polyps', definition: 'Soft, painless growths in the nasal passages often associated with chronic sinusitis' },
        { term: 'double-sickening', definition: 'Pattern of initial improvement from viral illness followed by worsening, suggesting bacterial infection' },
      ],
      analogies: [
        'Acute sinusitis is like a traffic jam that clears up after a while; chronic sinusitis is like road construction that stays blocked for months.',
        'Antibiotics for viral sinusitis are like using a hammer on a screw - the wrong tool for the job.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rhinosinusitis pathophysiology involves ostiomeatal complex obstruction leading to mucosal inflammation, impaired mucociliary clearance, and potential secondary bacterial infection, with chronic forms showing distinct inflammatory phenotypes.',
      explanation: `Understanding rhinosinusitis pathophysiology guides appropriate management and referral.

**Pathophysiology:**

*Acute Rhinosinusitis:*
1. Viral infection causes mucosal edema
2. Ostiomeatal complex obstruction
3. Impaired sinus ventilation and drainage
4. Mucus stasis creates environment for bacterial growth
5. Secondary bacterial infection (2-5% of cases)

*Chronic Rhinosinusitis:*
- Persistent mucosal inflammation
- Not primarily infectious
- Mucociliary dysfunction
- May be eosinophilic (with polyps) or neutrophilic (without)

**Classification (EPOS 2020):**

*Chronic Rhinosinusitis Without Nasal Polyps (CRSsNP):*
- Predominantly neutrophilic
- Th1/Th17 inflammation
- Associated with anatomic factors
- Better surgical outcomes

*Chronic Rhinosinusitis With Nasal Polyps (CRSwNP):*
- Predominantly eosinophilic
- Th2 inflammation (IL-4, IL-5, IL-13)
- Associated with asthma, AERD
- Higher recurrence after surgery

**Diagnostic Criteria (EPOS):**

*Acute Rhinosinusitis:*
- Sudden onset of 2+ symptoms:
  - Nasal blockage/obstruction/congestion
  - Nasal discharge (anterior/posterior)
  - Facial pain/pressure
  - Reduction/loss of smell
- Duration <12 weeks
- Symptom-free intervals in recurrent ARS

*Chronic Rhinosinusitis:*
- Same symptom criteria
- Duration ≥12 weeks
- Objective evidence (endoscopy or CT)

**Complications (require urgent evaluation):**

*Orbital:*
- Preseptal cellulitis (anterior to orbital septum)
- Orbital cellulitis (posterior to septum)
- Subperiosteal abscess
- Orbital abscess
- Cavernous sinus thrombosis

*Intracranial:*
- Meningitis
- Epidural/subdural abscess
- Brain abscess
- Frontal bone osteomyelitis (Pott's puffy tumor)

**Medical Management:**

*Acute Bacterial RS (ABRS):*
- First-line: Amoxicillin-clavulanate 875/125 mg BID x 5-10 days
- Penicillin allergy: Doxycycline or respiratory fluoroquinolone
- Adjunctive: Intranasal steroids, saline irrigation

*Chronic RS:*
- Intranasal corticosteroids (first-line)
- Saline irrigation (high-volume)
- Short-course oral steroids for CRSwNP
- Prolonged low-dose macrolides (CRSsNP, controversial)
- Surgery for refractory cases`,
      keyTerms: [
        { term: 'ostiomeatal complex obstruction', definition: 'Blockage of the common drainage pathway for anterior sinuses, initiating sinusitis pathophysiology' },
        { term: 'CRSwNP', definition: 'Chronic rhinosinusitis with nasal polyps, typically eosinophilic and Th2-mediated' },
        { term: 'CRSsNP', definition: 'Chronic rhinosinusitis without nasal polyps, typically neutrophilic' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease (Samter triad): asthma, nasal polyps, NSAID sensitivity' },
        { term: 'Pott puffy tumor', definition: 'Subperiosteal abscess of the frontal bone with forehead swelling from frontal sinusitis complication' },
      ],
      clinicalNotes: 'Orbital complications of sinusitis follow the Chandler classification (preseptal < orbital cellulitis < subperiosteal abscess < orbital abscess < cavernous sinus thrombosis). Any eye signs (proptosis, ophthalmoplegia, vision change) require urgent CT and ENT/ophthalmology consultation.',
    },
    4: {
      level: 4,
      summary: 'Rhinosinusitis encompasses diverse inflammatory endotypes with distinct cytokine profiles, therapeutic implications, and surgical prognostic factors, requiring endotype-driven management and consideration of biomarkers and biologics for refractory disease.',
      explanation: `Contemporary rhinosinusitis management integrates inflammatory endotyping with precision medicine approaches.

**Inflammatory Endotypes:**

*Type 2 Inflammation (Th2):*
- Cytokines: IL-4, IL-5, IL-13
- Effector cells: Eosinophils, mast cells, ILC2
- Biomarkers: Elevated serum eosinophils, IgE, nasal IL-5
- Associated conditions: Asthma, AERD, allergic fungal rhinosinusitis
- Clinical phenotype: CRSwNP, recurrent polyps

*Non-Type 2 Inflammation:*
- Th1: IFN-γ driven
- Th17: IL-17, neutrophilic
- Biomarkers: Normal eosinophils, elevated IL-8
- Clinical phenotype: CRSsNP

**Aspirin-Exacerbated Respiratory Disease (AERD):**
- Triad: CRSwNP + asthma + NSAID sensitivity
- Prevalence: 10-15% of CRSwNP
- Pathophysiology: COX-1 inhibition → arachidonic acid shunting to leukotrienes
- Management:
  - Aspirin desensitization
  - Leukotriene modifiers
  - Surgery has high recurrence
  - Biologics (dupilumab) increasingly used

**Allergic Fungal Rhinosinusitis (AFRS):**

*Bent and Kuhn Criteria:*
1. Type I hypersensitivity (skin test/IgE to fungi)
2. Nasal polyposis
3. Characteristic CT findings (heterogeneous sinus opacification)
4. Eosinophilic mucin
5. Positive fungal stain or culture (without tissue invasion)

*Management:*
- Surgery: Complete removal of allergic mucin
- Post-op steroids (systemic, then topical)
- Antifungal therapy controversial
- High recurrence without aggressive follow-up

**Biomarkers and Biologics:**

*Predictive Biomarkers:*
- Serum eosinophils ≥300/μL
- Serum total IgE elevated
- Tissue eosinophils
- Blood/tissue periostin

*FDA-Approved Biologics for CRSwNP:*
| Drug | Target | Mechanism |
|------|--------|-----------|
| Dupilumab | IL-4Rα | Blocks IL-4 and IL-13 |
| Omalizumab | IgE | Binds free IgE |
| Mepolizumab | IL-5 | Reduces eosinophil survival |

*Indications for Biologics:*
- Type 2 CRSwNP
- Failed medical and surgical therapy
- Comorbid asthma (may treat both)
- AERD

**Surgical Decision-Making:**

*Indications for FESS:*
- Failed maximal medical therapy (>8-12 weeks)
- Complications (orbital, intracranial)
- Anatomic obstruction
- Tumor/mucocele
- Fungal ball removal

*Extent of Surgery:*
- Targeted: Uncinectomy, maxillary antrostomy
- Complete: Total ethmoidectomy, sphenoidotomy
- Extended: Draf procedures for frontal sinus
- Radical: For tumors, inverted papilloma

*Prognostic Factors for Recurrence:*
- CRSwNP vs. CRSsNP
- Eosinophilic tissue
- Comorbid asthma
- AERD
- Previous revisions
- Incomplete surgery

**Post-Operative Care:**
- Saline irrigations (high-volume)
- Topical steroids
- Debridement (first 2-4 weeks)
- Systemic steroids for CRSwNP
- Consider biologics for high-risk recurrence`,
      keyTerms: [
        { term: 'inflammatory endotype', definition: 'Distinct inflammatory pattern (Type 2 vs. non-Type 2) driving disease pathophysiology' },
        { term: 'dupilumab', definition: 'IL-4Rα antagonist blocking Type 2 cytokines, approved for CRSwNP' },
        { term: 'allergic fungal rhinosinusitis', definition: 'Eosinophilic fungal sinusitis with allergic mucin and Type I hypersensitivity' },
        { term: 'allergic mucin', definition: 'Thick, eosinophil-rich mucus with Charcot-Leyden crystals characteristic of AFRS' },
        { term: 'Charcot-Leyden crystals', definition: 'Needle-shaped crystals from eosinophil breakdown, seen in allergic mucin' },
      ],
      clinicalNotes: 'Biologics are transforming CRSwNP management. Consider before revision surgery in Type 2 CRSwNP patients with comorbid asthma. Insurance often requires failure of surgery plus steroids. Monitor for parasitic infection risk with eosinophil-depleting agents.',
    },
    5: {
      level: 5,
      summary: 'Advanced rhinosinusitis management integrates molecular endotyping, extended endoscopic approaches for complications and skull base lesions, emerging therapeutics targeting specific inflammatory pathways, and precision medicine strategies for recalcitrant disease.',
      explanation: `Expert rhinosinusitis management requires integration of translational research with complex clinical scenarios.

**Molecular Endotyping:**

*Tissue Biomarkers:*
- Eosinophil cationic protein (ECP)
- Major basic protein (MBP)
- ILC2 quantification
- Tissue periostin
- P-glycoprotein (steroid resistance)

*Epithelial Barrier Dysfunction:*
- Decreased tight junction proteins
- Enhanced Staphylococcus aureus colonization
- S. aureus enterotoxins act as superantigens
- Local IgE production against S. aureus

*Microbiome Alterations:*
- Decreased diversity in CRS
- S. aureus, Corynebacterium dominance
- Protective species depleted
- Potential for microbiome-directed therapy

**Complex Clinical Scenarios:**

*Odontogenic Sinusitis:*
- 10-40% of maxillary sinusitis
- Dental source: Periapical abscess, oroantral fistula, root fragments
- Microbiology: Polymicrobial, anaerobes
- Management: Dental treatment + ESS
- CT with dental views essential

*Fungal Ball (Mycetoma):*
- Non-invasive fungal accumulation
- Unilateral maxillary most common
- CT: Heterogeneous opacity with calcifications
- Treatment: Surgical removal, no antifungals needed

*Invasive Fungal Sinusitis:*
- Acute: Immunocompromised, mucormycosis/aspergillosis, emergent debridement
- Chronic invasive: Immunocompetent, slow progression
- Granulomatous: India/Sudan, Aspergillus flavus

**Extended Surgical Techniques:**

*Frontal Sinus Approaches:*
- Draf I-III (see nose-sinus anatomy)
- Frontal sinus rescue (failed Draf III)
- Osteoplastic flap with obliteration

*Maxillary Sinus:*
- Modified medial maxillectomy
- Prelacrimal approach (full access, NLD preserved)
- Sublabial/Caldwell-Luc (declining use)

*Mucocele Management:*
- Frontal most common
- CT: Expansion, bony erosion
- Treatment: Marsupialization (not excision)

**Skull Base Complications:**

*Pott's Puffy Tumor:*
- Frontal sinusitis → frontal bone osteomyelitis
- Subperiosteal abscess → forehead swelling
- Treatment: IV antibiotics + surgical drainage + ESS

*Intracranial Extension:*
- Epidural/subdural empyema
- Brain abscess
- Management: Neurosurgery + ENT + prolonged antibiotics
- Image-guided ESS for source control

**Post-ESS Outcomes Research:**

*SNOT-22:*
- 22-item Sino-Nasal Outcome Test
- MCID: 8.9 points improvement
- Baseline >50 predicts greater improvement

*Predictors of Success:*
- Lower baseline SNOT-22
- CRSsNP better than CRSwNP
- Absence of depression
- Smoking cessation
- Adherence to post-op regimen

*Revision Surgery:*
- 15-20% require revision at 5 years
- Higher in CRSwNP, AERD
- Biologics may reduce revision rate

**Future Directions:**

*Topical Therapies:*
- Exosome delivery of anti-inflammatory cargo
- Biofilm-disrupting agents
- Topical biologics

*Drug Delivery:*
- Steroid-eluting stents (Propel)
- Bioabsorbable implants
- Nanoparticle delivery

*Precision Medicine:*
- Algorithm-based endotyping
- Biomarker-guided biologic selection
- Pharmacogenomics for steroid response
- Machine learning for outcome prediction`,
      keyTerms: [
        { term: 'odontogenic sinusitis', definition: 'Maxillary sinusitis originating from dental pathology, often polymicrobial with anaerobes' },
        { term: 'SNOT-22', definition: 'Sino-Nasal Outcome Test, validated 22-item patient-reported outcome measure for CRS' },
        { term: 'mucormycosis', definition: 'Rapidly progressive angioinvasive fungal infection in immunocompromised, requiring emergent debridement' },
        { term: 'mucocele', definition: 'Mucus-filled, expansile mass from obstructed sinus drainage, treated by marsupialization' },
        { term: 'steroid-eluting stent', definition: 'Bioabsorbable implant releasing corticosteroid to maintain sinus patency post-ESS' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Unilateral symptoms: Rule out dental source, fungal ball, tumor, mucocele
2. Invasive fungal sinusitis: Black eschar, immunocompromised, emergent CT and biopsy, surgical debridement + amphotericin
3. Odontogenic sinusitis: CT with dental reformats; treat dental source first
4. Frontal sinus mucocele: Do not excise; marsupialization maintains frontal outflow
5. Biologics for CRSwNP: 50-70% reduction in nasal polyp score; consider as alternative to repeat surgery
6. AERD: Aspirin desensitization maintains post-surgical benefit; daily aspirin 650mg BID after desensitization
7. Post-op steroids in CRSwNP: Short course oral + long-term topical; debridement critical in first weeks`,
    },
  },

  media: [
    {
      id: 'sinusitis-anatomy',
      type: 'diagram',
      filename: 'sinusitis-pathophysiology.svg',
      title: 'Sinusitis Pathophysiology',
      description: 'Diagram showing ostiomeatal complex obstruction and sinus inflammation',
    },
    {
      id: 'orbital-complications',
      type: 'diagram',
      filename: 'orbital-complications.svg',
      title: 'Orbital Complications of Sinusitis',
      description: 'Chandler classification of orbital complications',
    },
  ],

  citations: [
    {
      id: 'epos-2020',
      type: 'article',
      title: 'European Position Paper on Rhinosinusitis and Nasal Polyps 2020',
      authors: ['Fokkens WJ', 'Lund VJ', 'Hopkins C', 'et al.'],
      source: 'Rhinology',
    },
    {
      id: 'rosenfeld-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline: Adult Sinusitis',
      authors: ['Rosenfeld RM', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'ent-nose-sinus-anatomy', targetType: 'structure', relationship: 'related', label: 'Nose and Sinus Anatomy' },
    { targetId: 'ent-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
  ],

  tags: {
    systems: ['respiratory', 'sinonasal'],
    topics: ['rhinology', 'infectious disease', 'allergy-immunology'],
    keywords: ['sinusitis', 'rhinosinusitis', 'polyps', 'FESS', 'endoscopy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sinusitis;
