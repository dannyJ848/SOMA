import { EducationalContent } from '../types';

export const headNeckCancerContent: EducationalContent = {
  id: 'ent-head-neck-cancer',
  type: 'topic',
  name: 'Head and Neck Cancer',
  alternateNames: ['HNC', 'Upper Aerodigestive Tract Malignancies', 'ENT Oncology'],

  levels: {
    1: {
      level: 1,
      summary: 'Head and neck cancers are tumors that develop in the mouth, throat, voice box, nose, sinuses, or salivary glands. Most are caused by tobacco and alcohol use, but a virus called HPV is also a common cause.',
      explanation: `Head and neck cancer is not just one disease - it's a group of cancers that can start in different places in the head and neck area. These cancers often share risk factors and have similar treatments.

**Where These Cancers Start:**
- Mouth (oral cavity): Lips, tongue, gums, inside of cheeks
- Throat (pharynx): Behind the mouth and nasal cavity
- Voice box (larynx): Contains the vocal cords
- Salivary glands: Glands that make saliva
- Nasal cavity and sinuses: Behind the nose
- Neck lymph nodes: From cancer that spread

**Main Risk Factors:**
1. **Tobacco use** - Smoking cigarettes, cigars, pipes, or chewing tobacco
2. **Alcohol** - Heavy drinking, especially when combined with smoking
3. **HPV virus** - A common virus that can cause throat cancer
4. **Sun exposure** - Can cause lip cancer
5. **Age** - More common in people over 50

**Warning Signs:**
- Sore throat that doesn't go away
- Hoarse voice lasting more than 2 weeks
- Difficulty swallowing
- Lump in the neck
- White or red patches in the mouth
- Sores that don't heal
- Unexplained weight loss

**Prevention:**
- Don't smoke or use tobacco
- Limit alcohol
- Get the HPV vaccine
- Protect lips from sun
- Have regular dental checkups

**Treatment Options:**
- Surgery to remove the cancer
- Radiation therapy
- Chemotherapy
- Targeted therapy
- Rehabilitation (speech, swallowing)`,
      keyTerms: [
        { term: 'tumor', definition: 'An abnormal growth of cells that can be cancerous' },
        { term: 'biopsy', definition: 'Taking a small piece of tissue to test for cancer' },
        { term: 'HPV', definition: 'Human papillomavirus, a virus that can cause some head and neck cancers' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that help fight infection and can show cancer spread' },
        { term: 'radiation', definition: 'Using high-energy rays to kill cancer cells' },
        { term: 'chemotherapy', definition: 'Using strong medicines to kill cancer cells' },
      ],
      analogies: [
        'Think of cancer as weeds in a garden - the treatments are like tools to remove the weeds while trying to protect the plants.',
      ],
      examples: [
        'A person who has smoked for 30 years has a much higher risk of developing head and neck cancer.',
        'A persistent mouth sore that doesn\'t heal after 2 weeks should be checked by a doctor.',
      ],
      patientCounselingPoints: [
        'Quitting smoking at any time reduces your cancer risk, even after many years of smoking.',
        'The HPV vaccine can prevent many throat cancers - recommended for both boys and girls.',
        'Regular dental checkups include screening for oral cancer.',
        'Early detection greatly improves outcomes - don\'t ignore persistent symptoms.',
      ],
    },

    2: {
      level: 2,
      summary: 'Head and neck cancers typically arise from the mucosal lining of the upper aerodigestive tract. Major risk factors include tobacco, alcohol, and HPV infection. Treatment often involves multidisciplinary care with surgery, radiation, and chemotherapy.',
      explanation: `Head and neck cancers encompass a diverse group of malignancies arising in the upper aerodigestive tract. These cancers require specialized management due to their impact on critical functions like speech, swallowing, and appearance.

## Classification by Site

**Oral Cavity:**
- Lips
- Anterior two-thirds of tongue
- Floor of mouth
- Buccal mucosa (inner cheeks)
- Hard palate
- Upper and lower alveolar ridges (gums)
- Retromolar trigone

**Oropharynx:**
- Posterior one-third of tongue (base of tongue)
- Soft palate
- Tonsils (palatine and lingual)
- Pharyngeal walls

**Hypopharynx:**
- Piriform sinuses
- Postcricoid area
- Posterior pharyngeal wall

**Larynx:**
- Supraglottis (above vocal cords)
- Glottis (vocal cords)
- Subglottis (below vocal cords, to cricoid cartilage)

**Nasal Cavity and Paranasal Sinuses:**
- Maxillary sinus (most common)
- Ethmoid sinuses
- Nasal cavity
- Sphenoid and frontal sinuses (rare)

**Salivary Glands:**
- Parotid gland (80% of salivary tumors)
- Submandibular gland
- Sublingual glands
- Minor salivary glands throughout upper aerodigestive tract

**Neck:**
- Unknown primary carcinoma presenting as neck mass
- Metastatic cervical lymph nodes
- Thyroid gland

## Risk Factors

**Tobacco:**
- Dose-dependent relationship
- Synergistic effect with alcohol
- Smokeless tobacco: Oral cavity cancers
- Reversal of risk with cessation

**Alcohol:**
- Independent risk factor
- Potentiates tobacco carcinogenesis
- Beer and spirits associated with pharyngeal cancer
- Wine may have lower risk

**HPV Infection:**
- HPV 16 and 18 high-risk types
- Strongly associated with oropharyngeal cancer (tonsils, base of tongue)
- Increasing incidence, particularly in nonsmokers
- Better prognosis than HPV-negative cancers

**Other Risk Factors:**
- Betel nut and areca nut chewing (South Asia)
- Poor oral hygiene
- Dietary factors (low fruits/vegetables)
- Occupational exposures (wood dust, nickel)
- Radiation exposure
- Epstein-Barr virus (nasopharyngeal carcinoma)
- Plummer-Vinson syndrome (hypopharyngeal/ESophageal cancer)

## Clinical Presentation

**Oral Cavity:**
- Non-healing ulcer
- White or red patches (leukoplakia, erythroplakia)
- Pain or bleeding
- Loose teeth
- Ill-fitting dentures
- Trismus (difficulty opening mouth)

**Oropharynx:**
- Sore throat
- Dysphagia (difficulty swallowing)
- Odynphagia (painful swallowing)
- Ear pain (referred via vagus/glossopharyngeal)
- Neck mass
- Muffled voice (hot potato voice)

**Larynx:**
- Hoarseness (glottic tumors early sign)
- Stridor or airway obstruction
- Dysphagia
- Neck mass
- Hemoptysis

**Nasal/Sinus:**
- Nasal obstruction
- Epistaxis (nosebleeds)
- Facial pain or pressure
- Proptosis or double vision
- Loose upper teeth
- Cranial neuropathies

**Salivary Gland:**
- Painless mass
- Facial weakness or paralysis (malignancy sign)
- Pain (suggests malignancy)
- Skin fixation or ulceration

## Diagnosis

**Physical Examination:**
- Comprehensive head and neck exam
- Palpation of oral cavity
- Fiberoptic laryngoscopy/pharyngoscopy
- Neck palpation for lymphadenopathy

**Imaging:**
- CT scan with contrast: Primary and neck
- MRI: Soft tissue, perineural invasion, skull base
- PET-CT: Staging, surveillance, unknown primary
- Ultrasound: Neck nodes, guided biopsy

**Biopsy:**
- Incisional or excisional biopsy of primary
- Fine needle aspiration (FNA) of neck mass
- Endoscopic biopsy for pharyngeal/laryngeal lesions

**Staging (TNM System):**
- T: Primary tumor size and extent
- N: Regional lymph node involvement
- M: Distant metastasis

## Treatment Overview

**Surgery:**
- Goal: Complete tumor removal
- May include neck dissection for lymph nodes
- Reconstruction: Local flaps, free tissue transfer
- Functional considerations: Speech, swallowing, appearance

**Radiation Therapy:**
- Definitive: Primary treatment for some cancers
- Adjuvant: After surgery for high-risk features
- Combined with chemotherapy: Advanced disease
- Intensity-modulated radiotherapy (IMRT): Reduces toxicity

**Chemotherapy:**
- Concurrent with radiation: Advanced disease
- Induction: Before definitive treatment (controversial)
- Palliative: Metastatic disease
- Common agents: Cisplatin, carboplatin, 5-FU, taxanes

**Targeted Therapy:**
- Cetuximab (EGFR inhibitor)
- Checkpoint inhibitors: Pembrolizumab, nivolumab

**Reconstruction and Rehabilitation:**
- Speech therapy
- Swallowing therapy
- Dental rehabilitation
- Psychosocial support
- Neck and shoulder exercises after neck dissection`,
      keyTerms: [
        { term: 'aerodigestive tract', definition: 'Combined respiratory and digestive passages including mouth, throat, and esophagus' },
        { term: 'HPV-related oropharyngeal cancer', definition: 'Throat cancer caused by human papillomavirus, increasing in incidence' },
        { term: 'leukoplakia', definition: 'White patch in mouth that cannot be scraped off, potentially precancerous' },
        { term: 'erythroplakia', definition: 'Red patch in mouth with higher malignant potential than leukoplakia' },
        { term: 'TNM staging', definition: 'Tumor-Node-Metastasis system for cancer staging' },
        { term: 'neck dissection', definition: 'Surgical removal of lymph nodes from neck' },
        { term: 'FNA', definition: 'Fine needle aspiration biopsy; uses thin needle to sample cells' },
        { term: 'trimus', definition: 'Restricted mouth opening, often from tumor involvement or muscle fibrosis' },
      ],
      analogies: [
        'HPV-related throat cancer is like cervical cancer in the throat - same virus, different location.',
        'Neck dissection is like picking apples from a tree - removing the lymph nodes to catch any cancer that has spread.',
      ],
      patientCounselingPoints: [
        'Combining smoking and heavy drinking increases cancer risk by more than either alone.',
        'HPV vaccination can prevent many oropharyngeal cancers - recommended through age 26 for both men and women.',
        'Early-stage head and neck cancers have excellent cure rates - don\'t ignore persistent symptoms.',
        'Rehabilitation after treatment is important for regaining speech and swallowing function.',
      ],
    },

    3: {
      level: 3,
      summary: 'Head and neck squamous cell carcinoma (HNSCC) accounts for over 90% of cases in this region. Distinct epidemiologic patterns exist for tobacco/alcohol-related versus HPV-associated malignancies. Multidisciplinary management incorporates surgery, radiation, systemic therapy, and rehabilitation with increasing emphasis on deintensification for HPV-positive disease.',
      explanation: `## Epidemiology

**Global Burden:**
- 8th most common cancer worldwide
- >650,000 new cases annually
- Higher incidence in developing countries
- Male:Female ratio ~2:1 (4:1 for laryngeal)

**Two Distinct Etiologies:**

*Traditional (Tobacco/Alcohol):*
- Peak incidence: 6th-7th decade
- Multiple field cancerization risk
- Associated with second primary tumors
- Poorer prognosis
- Primarily oral cavity, hypopharynx, larynx

*HPV-Associated:*
- Increasing incidence, especially in developed countries
- Younger patients (50s-60s)
- Tonsil and base of tongue predominance
- Minimal tobacco exposure
- Better response to treatment
- Better prognosis

**Anatomic Distribution:**
- Oral cavity: ~30%
- Larynx: ~25%
- Oropharynx: ~20% (rising due to HPV)
- Salivary glands: ~5%
- Nasopharynx: ~5% (EBV-associated in endemic areas)
- Hypopharynx: ~5%
- Sinonasal: ~3%

## Pathology

**Squamous Cell Carcinoma (HNSCC):**
- Arises from squamous epithelium
- Grading: Well, moderately, poorly differentiated
- Desmoplastic stromal reaction common

**Precursor Lesions:**
- Oral: Leukoplakia (5-25% malignant transformation)
- Erythroplakia (up to 50% malignant transformation)
- Lichen planus (controversial risk)
- Dysplasia: Mild, moderate, severe, carcinoma in situ

**Variant Histologies:**
- Verrucous carcinoma: Well-differentiated, locally invasive
- Basaloid squamous: Aggressive, HPV association
- Spindle cell: Biphasic, sarcomatoid
- Lymphoepithelioma: EBV-associated (nasopharynx)
- Adenoid cystic: Salivary gland, perineural invasion

**Salivary Gland Tumors:**
- Benign: Pleomorphic adenoma (mixed tumor), Warthin tumor
- Malignant: Mucoepidermoid carcinoma, adenoid cystic carcinoma, salivary duct carcinoma

## Molecular Biology

**Traditional Pathway:**
- TP53 mutations: >50% of cases
- CDKN2A (p16) inactivation
- EGFR overexpression
- Genomic instability

**HPV Pathway:**
- Viral integration: E6 and E7 oncogenes
- p53 degradation (E6)
- Rb inactivation (E7)
- p16 overexpression (surrogate marker)
- Wild-type TP53 typically

**Other Alterations:**
- NOTCH1 mutations: Oral cavity
- PIK3CA mutations: HPV-positive tumors
- HRAS mutations: Thyroid
- RET rearrangements: PTC (thyroid)

## Clinical Evaluation

**Comprehensive History:**
- Risk factors: Tobacco, alcohol, sexual history (HPV)
- Symptoms duration and progression
- Weight loss, dysphagia, otalgia
- Previous head and neck cancers (field cancerization)

**Physical Examination:**
- Inspection and palpation: All mucosal surfaces
- Fiberoptic examination: Larynx, pharynx, nasopharynx
- Cranial nerve assessment: Especially for skull base tumors
- Neck examination: Level I-V lymph node stations
- Thyroid palpation

**Neck Node Levels (Robbins):**
- Level I: Submandibular and submental
- Level II: Upper jugular (including CN XI)
- Level III: Mid jugular
- Level IV: Low jugular
- Level V: Posterior triangle (spinal accessory)
- Level VI: Anterior compartment (paratracheal)
- Level VII: Superior mediastinum

## Diagnostic Workup

**Primary Site Assessment:**
- Direct visualization with biopsy confirmation
- Panendoscopy: Under anesthesia for unknown primaries
- Dental evaluation: Before radiation therapy

**Imaging Modalities:**
- CT with contrast: Bone involvement, nodal necrosis
- MRI: Soft tissue, perineural spread, marrow invasion
- PET/CT: Staging, surveillance, occult primary detection
- Ultrasound: Nodal assessment, guided FNA

**Biopsy Techniques:**
- Incisional biopsy: Preferred for definitive diagnosis
- Excisional biopsy: Small, accessible lesions
- FNA: Neck masses, distinguishes metastatic vs reactive
- Core needle: Salivary gland tumors (more tissue than FNA)

## Staging (AJCC 8th Edition)

**HPV Status Impact:**
- Separate staging for oropharyngeal cancer
- HPV-positive: Better prognosis, stage migration
- p16 immunohistochemistry: Surrogate for HPV

**T Categories (varies by site):**
- T1: Small, localized tumor
- T2: Larger, limited invasion
- T3: More extensive local invasion
- T4a: Resectable advanced local disease
- T4b: Unresectable disease (skull base, encasement)

**N Categories:**
- N0: No regional nodes
- N1: Single ipsilateral node ≤3cm
- N2: Multiple or larger nodes, contralateral
- N3: Any node >6cm

**M Categories:**
- M0: No distant metastasis
- M1: Distant metastasis present

## Treatment Principles

**Surgery:**
- Goal: Negative margins (≥5mm preferred)
- Margins: 1-2 cm clinical, pathologic assessment
- Frozen section: Intraoperative margin assessment
- Sentinel lymph node biopsy: Oral cavity (selective)
- Elective neck dissection: N0 disease with high risk of occult metastasis

**Radiation Therapy:**
- Definitive: 66-70 Gy for unresectable or organ preservation
- Adjuvant: 60-66 Gy for high-risk features
- Postoperative: Indications for concurrent chemo (positive margins, ECE, >2 nodes)
- Techniques: IMRT, VMAT, proton therapy (selected cases)
- Xerostomia: Major toxicity, reduced with IMRT

**Systemic Therapy:**
- Concurrent chemoradiation: Cisplatin 100mg/m2 q3weeks ×3 doses (standard)
- Induction chemotherapy: TPF (docetaxel, cisplatin, 5-FU) - controversial
- Targeted therapy: Cetuximab (EGFR), cetuximab + RT (alternative to cisplatin)
- Immunotherapy: PD-1 inhibitors for recurrent/metastatic disease

**Organ Preservation:**
- Larynx: Radiation ± chemo vs total laryngectomy
- Advanced oropharynx: Radiation preferred over surgery
- Response assessment: Critical after non-surgical treatment

**Reconstruction:**
- Primary closure: Small defects
- Local flaps: Facial artery musculomucosal (FAMM), buccal, platysma
- Regional flaps: Pectoralis major, deltopectoral
- Free flaps: Fibula, radial forearm, anterolateral thigh, scapula

## Special Considerations

**Unknown Primary:**
- Neck mass with no identified primary
- Workup: PET/CT, panendoscopy with directed biopsies (tonsillectomy, tongue base)
- Radiation to likely primary sites + neck

**Recurrent Disease:**
- Surgery preferred if resectable
- Re-irradiation: Selected cases, high morbidity
- Palliative chemotherapy: For unresectable

**Quality of Life:**
- Speech and swallowing: Critical functions
- Rehabilitation: Essential component of care
- Psychological impact: Significant, support needed
- Social reintegration: Challenges with facial reconstruction`,
      keyTerms: [
        { term: 'field cancerization', definition: 'Theory that entire upper aerodigestive tract is at risk due to chronic carcinogen exposure' },
        { term: 'p16', definition: 'Tumor suppressor protein overexpressed in HPV-associated cancers, used as surrogate marker' },
        { term: 'margin status', definition: 'Pathologic assessment of tissue between tumor and resection edge' },
        { term: 'extracapsular spread', definition: 'Cancer extending outside lymph node capsule, major adverse prognostic factor' },
        { term: 'organ preservation', definition: 'Treatment approach preserving organ function while achieving cancer control' },
        { term: 'xerostomia', definition: 'Dry mouth from radiation damage to salivary glands' },
        { term: 'IMRT', definition: 'Intensity-modulated radiation therapy; reduces dose to normal tissues' },
        { term: 'panendoscopy', definition: 'Comprehensive endoscopic evaluation of upper aerodigestive tract under anesthesia' },
      ],
      clinicalNotes: `HPV-associated oropharyngeal cancer has dramatically increased in incidence, particularly in developed countries. These patients tend to be younger, have minimal tobacco exposure, and have significantly better prognosis with overall survival approaching 80-90%. This has led to clinical trials exploring treatment deintensification to reduce long-term toxicity while maintaining excellent outcomes.

Positive margin status and extracapsular spread are the two strongest indications for postoperative concurrent chemoradiation, with 20-25% local control improvement compared to radiation alone.`,
      patientCounselingPoints: [
        'HPV-positive oropharyngeal cancer has excellent prognosis with modern treatments.',
        'Combining smoking cessation with treatment improves outcomes and reduces second primary risk.',
        'Long-term follow-up is critical to monitor for recurrence and second primary tumors.',
        'Support groups and rehabilitation services can significantly improve quality of life during and after treatment.',
      ],
    },

    4: {
      level: 4,
      summary: 'Head and neck oncology integrates sophisticated molecular profiling, advanced imaging, organ-preserving therapies, and complex reconstructive techniques. Understanding the distinct biologic behaviors of HPV-positive versus HPV-negative tumors, patterns of nodal metastasis, and functional outcomes guides personalized treatment decisions.',
      explanation: `## Molecular Pathogenesis

**HPV Oncogenesis:**
- Viral integration into host genome
- E6 oncoprotein: Degrades p53 via ubiquitin-proteasome pathway
- E7 oncoprotein: Inactivates retinoblastoma (Rb) protein
- p16INK4a upregulation: Compensatory feedback loop
- Epigenetic modulation: DNA methylation patterns

**Tobacco Carcinogenesis:**
- Polycyclic aromatic hydrocarbons (PAHs)
- N-nitrosamines: Tobacco-specific
- DNA adduct formation
- TP53 mutation: G to T transversions characteristic
- Field cancerization: Multifocal independent tumors

**Key Signaling Pathways:**
- EGFR pathway: Overexpression in 80-90% HNSCC
- PI3K/AKT/mTOR: Frequently activated
- NOTCH: Tumor suppressor in HNSCC (contrary to other cancers)
- Cell cycle: CDKN2A/p16 inactivation
- Angiogenesis: VEGF upregulation

**Genomic Landscape:**
- High tumor mutational burden: Tobacco-related
- Lower TMB: HPV-positive (antigen-driven)
- Actionable mutations: Relatively rare in HNSCC
- Tumor infiltrating lymphocytes: Prognostic significance

## Patterns of Spread

**Local Invasion:**
- Direct extension: Natural pathways of least resistance
- Perineural invasion: Major route for salivary, nasopharyngeal
- Bone invasion: Mandible, maxilla, skull base
- Vascular invasion: Hematogenous spread

**Lymphatic Spread:**
- Predictable patterns: Based on primary site
- Skip metastases: Rare (<5%)
- Contralateral spread: Midline, late-stage disease
- Level-specific patterns:
  - Oral cavity: I, II, III
  - Oropharynx: II, III, IV
  - Larynx/hypopharynx: II, III, IV, VI
  - Nasopharynx: II, V, retropharyngeal

**Distant Metastasis:**
- Lung: Most common site (~50%)
- Bone: ~20%
- Liver: ~15%
- Risk factors: N3 disease, low neck nodes, multiple nodes
- HPV-positive: Lower distant metastasis rate initially

## Advanced Diagnostic Techniques

**Radiomics:**
- Quantitative features from medical images
- Texture analysis, shape, intensity patterns
- Predictive of treatment response
- Detection of occult disease

**Molecular Imaging:**
- FLT-PET: Proliferation assessment
- FMISO-PET: Hypoxia imaging (radiation resistance)
- PSMA-PET: Salivary gland tumors
- Emerging: Immuno-PET

**Liquid Biopsy:**
- Circulating tumor DNA (ctDNA)
- HPV circulating tumor DNA (specific for HPV-positive)
- Monitoring treatment response
- Early detection of recurrence
- Minimal residual disease assessment

**Artificial Intelligence:**
- Detection of premalignant lesions
- Margin assessment during surgery
- Prediction of treatment outcomes
- Automated contouring for radiation planning

## Treatment Advances

**Deintensification for HPV-Positive Oropharynx:**
- Lower radiation doses: 60 Gy vs 70 Gy under investigation
- Cisplatin substitution: Cetuximab (mixed results)
- Transoral surgery: TORS,robotic, laser for small primaries
- SELECT trials: Ongoing assessment

**Immunotherapy:**
- PD-1 inhibitors: Pembrolizumab, nivolumab
- Indications: Recurrent/metastatic, PD-L1 positive
- Combination strategies: With CTLA-4, targeted therapy
- Neoadjuvant: Investigational
- Biomarkers: PD-L1 CPS, TMB

**Targeted Therapy:**
- Cetuximab: EGFR inhibitor
- Bevacizumab: VEGF inhibitor (investigational)
- Tyrosine kinase inhibitors: Limited role
- Antibody-drug conjugates: Emerging

**Proton Therapy:**
- Bragg peak: No exit dose
- Indications: Skull base, ocular, re-irradiation
- Potential benefit: Reduced toxicity
- Cost and access: Limiting factors

## Reconstructive Advances

**Free Flap Physiology:**
- Perforator flaps: Reduce donor site morbidity
- Supermicrosurgery: Smaller caliber anastomosis
- Lymphatic reconstruction: For lymphedema

**3D Printing and Planning:**
- Surgical guides: Precise resection
- Custom reconstruction: Mandibular defects
- Modeling: Preoperative planning
- Implants: Patient-specific

**Functional Outcomes:**
- Speech: Intelligibility measures
- Swallowing: FOSS scale, MD Anderson Dysphagia Inventory
- Xerostomia: Stimulated salivary flow rates
- Quality of life: FACT-H&N, UW-QOL

## Toxicity Management

**Acute Toxicities:**
- Mucositis: Oral care protocols, mucosal coating agents
- Dysgeusia: Taste alteration, zinc controversial
- Radiation dermatitis: Topical steroids, moisture
- Nausea: Antiemetics, dietary modification

**Late Toxicities:**
- Xerostomia: Pilocarpine, cevimeline, hyperbaric oxygen (investigational)
- Osteoradionecrosis: Pentoxifylline, tocopherol, hyperbaric oxygen
- Fibrosis: Physical therapy, pentoxifylline
- Dysphagia: Dilation, botulinum injection, reconstruction
- Carotid stenosis: Screening after neck radiation
- Hypothyroidism: After radiation to neck

## Special Populations

**Elderly Patients:**
- Comorbidities: Impact treatment tolerance
- Performance status: Critical factor
- Treatment modifications: Often necessary
- Goal of care: Palliative vs curative

**Pregnancy:**
- Imaging: MRI preferred over CT
- Treatment delays: When possible
- Fetal considerations: Especially in first trimester
- Multidisciplinary planning: Essential

**HIV-Positive:**
- No longer contraindication to full treatment
- Immune status: CD4 count considerations
- Drug interactions: ART with chemotherapy
- Outcomes: Similar to HIV-negative with ART

**Genetic Syndromes:**
- Li-Fraumeni: TP53 germline, radiation sensitivity concerns
- Fanconi anemia: Increased HNSCC risk, treatment intolerance
- Dyskeratosis congenita: Bone marrow failure risk`,
      keyTerms: [
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images for predictive analytics' },
        { term: 'circulating tumor DNA', definition: 'Tumor-derived DNA fragments in bloodstream, used for monitoring' },
        { term: 'Bragg peak', definition: 'Point of maximum energy deposition for proton therapy, minimal exit dose' },
        { term: 'osteoradionecrosis', definition: 'Radiation-induced bone death, mandible most commonly affected' },
        { term: 'perforator flap', definition: 'Free flap based on perforating vessels, reduces donor site morbidity' },
        { term: 'TORS', definition: 'Transoral robotic surgery; minimally invasive approach to oropharyngeal tumors' },
        { term: 'PD-L1 CPS', definition: 'Combined Positive Score measuring PD-L1 expression, immunotherapy biomarker' },
      ],
      clinicalNotes: `The distinction between HPV-positive and HPV-negative oropharyngeal cancer represents one of the most significant paradigm shifts in head and neck oncology. HPV-positive tumors have distinct molecular drivers, better treatment response, and superior survival. This has led to multiple clinical trials (ECOG 1308, NRG-HN002, PATHOS) exploring deintensification strategies including reduced radiation dose, substitution of cetuximab for cisplatin, and transoral surgery approaches.

For oral cavity cancer, the risk of occult nodal metastasis ranges from 20-30% for early tumors (T1-T2) and increases with depth of invasion (>4mm indicates >20% risk). This drives the recommendation for elective neck dissection even in clinically N0 disease.`,
    },

    5: {
      level: 5,
      summary: 'Contemporary head and neck oncology practice integrates precision medicine, minimally invasive surgery, advanced radiation techniques, immunotherapy, and comprehensive survivorship care. Multidisciplinary decision-making incorporates molecular profiling, functional outcomes assessment, and patient-reported measures to optimize both survival and quality of life.',
      explanation: `## Evidence-Based Guidelines

**NCCN Guidelines Updates (2024):**

*HPV Testing:*
- Mandatory for all oropharyngeal cancers
- p16 immunohistochemistry: Standard surrogate
- HPV ISH or PCR: When p16 equivocal

*Workup:*
- PET/CT: For stage III-IV or unknown primary
- Dental evaluation: Before radiation
- Speech and swallowing: Baseline assessment
- Psychological assessment: Distress screening

*Treatment Selection:*
- Early stage (I-II): Single-modality surgery or radiation
- Locally advanced (III-IV): Multimodal therapy
- Organ preservation: Consider functional outcomes
- Clinical trials: Encouraged when available

## Precision Medicine Approaches

**Molecular Profiling:**
- Next-generation sequencing panels
- Actionable alterations: Rare but present (PIK3CA, NOTCH1, FGFR)
- Clinical trial matching: Molecular eligibility
- Resistance mechanisms: Understanding treatment failure

**HPV-Driven Strategies:**
- Deintensification trials: Multiple ongoing
- Risk stratification: Smoking pack-years, T-stage, N-stage
- Surveillance: Less intensive for favorable-risk HPV
- Vaccination: Preventive, not therapeutic

**Biomarker-Guided Therapy:**
- PD-L1 testing: For immunotherapy
- TMB: Higher for tobacco-related
- Gene expression profiling: Prognostic signatures
- Circulating HPV DNA: MRD assessment, surveillance

## Surgical Innovations

**Transoral Robotic Surgery (TORS):**
- FDA-cleared: T1-T2 oropharyngeal
- Advantages: Avoids mandibulotomy, improved visualization
- Limitations: Cost, learning curve
- Deintensification: Potential to reduce adjuvant treatment
- ORATOR trial: TORS vs radiation (similar QOL, different toxicity profiles)

**Transoral Laser Microsurgery (TLM):**
- CO2 laser: Precise cutting
- Applications: Larynx, oropharynx, hypopharynx
- Endoscopic: External incision avoided
- Oncologic outcomes: Comparable to open approaches

**Neck Dissection Evolution:**
- Selective neck dissection: Standard of care
- Sentinel node biopsy: Oral cavity T1-T2 (selective)
- Neck observation: For HPV+ after primary treatment
- Planned vs therapeutic ND: Risk-adapted approach

**Robotic Neck Dissection:**
- Emerging technique
- Cosmetic benefit
- Longer operative time
- Limited adoption currently

## Radiation Therapy Advances

**IMRT/VMAT:**
- Standard techniques
- Sparing: Parotids, cochlea, oral cavity
- Swallowing structures: Avoid when possible
- Dose painting: HPV+ strategies under investigation

**Proton Therapy:**
- indications: Skull base, pediatric, re-irradiation
- Dosimetric advantage: Clear
- Clinical benefit: Ongoing investigation
- Cost-effectiveness: Uncertain

**Adaptive Radiotherapy:**
- Mid-treatment imaging: Modify plan based on response
- Anatomic changes: Tumor shrinkage, weight loss
- ART protocols: Automated replanning
- Benefit: Reduced toxicity, improved dosimetry

## Systemic Therapy Evolution

**Immunotherapy in R/M Setting:**
- First-line: Pembrolizumab ± chemo (KEYNOTE-048)
- Second-line: Nivolumab, pembrolizumab
- Biomarkers: PD-L1 CPS ≥1 for pembrolizumab monotherapy
- Response rates: 15-20%, durable in responders

**Combination Strategies:**
- Chemo + immunotherapy: Enhanced response rates
- Dual checkpoint: PD-1 + CTLA-4 (investigational)
- Targeted + immunotherapy: Rational combinations
- Neoadjuvant: Window-of-opportunity trials

**Deintensification Trials:**
- NRG-HN002: 60 Gy ± cetuximab for HPV+ low-risk (closed early)
- PATHOS: Transoral surgery with reduced adjuvant RT
- Quarterback: Response-adapted treatment
- MC1273: 50 Gy for selected patients

## Survivorship Care

**Surveillance Protocols:**
- Every 1-3 months: Year 1
- Every 2-6 months: Year 2
- Every 4-8 months: Years 3-5
- Annually after: Year 5
- PET/CT: At 3 months post-treatment, then as indicated

**Long-term Toxicity Management:**
- Xerostomia: Preventive strategies, sialendoscopy
- Dysphagia: Proactive swallowing therapy
- Osteonecrosis: Prevention, early intervention
- Carotid disease: Screening after neck radiation
- Hypothyroidism: Annual TSH after neck radiation
- Secondary malignancies: Screening awareness

**Quality of Life Metrics:**
- PROMs: Patient-reported outcome measures
- FACT-H&N: Functional Assessment of Cancer Therapy
- UW-QOL: University of Washington Quality of Life
- EORTC QLQ-H&N35: European Organisation
- MDADI: MD Anderson Dysphagia Inventory

**Rehabilitation:**
- Speech therapy: Critical for communication
- Swallowing therapy: Preventive and reactive
- Physical therapy: Neck and shoulder after ND
- Dental rehabilitation: Implants, prosthetics
- Psychosocial: Support groups, mental health

## Multidisciplinary Care Models

**Tumor Board:**
- Regular case conferences
- All specialties represented
- Treatment consensus
- Clinical trial screening

**Centers of Excellence:**
- High volume: Better outcomes
- Multidisciplinary team
- Clinical trial access
- Support services
- Rehabilitation expertise

**Shared Decision-Making:**
- Patient values: Central to decisions
- Treatment options: Clearly explained
- Outcome expectations: Realistic
- Toxicity profiles: Transparent discussion

## Emerging Technologies

**AI in HNC:**
- Diagnosis: Automated lesion detection
- Contouring: Radiotherapy planning efficiency
- Outcome prediction: Treatment response models
- Risk stratification: Personalized approaches
- Imaging analysis: Radiomics applications

**Liquid Biopsy:**
- ctDNA: HPV-specific monitoring
- Circulating tumor cells: Prognostic value
- Exosomes: Investigational
- Early detection: Screening potential

**Immunotherapy Advances:**
- Neoadjuvant: Response assessment
- Combination strategies: Multiple targets
- Biomarker development: Patient selection
- Toxicity management: Immune-related AEs

## Future Directions

**Prevention:**
- HPV vaccination: Oropharyngeal cancer prevention
- Tobacco control: Global efforts
- Dietary interventions: Antioxidants
- Chemoprevention: Retinoids (investigational)

**Early Detection:**
- Oral cancer screening: Visual adjuncts
- Salivary biomarkers: Molecular detection
- Imaging: Low-dose CT protocols
- Risk models: Targeted screening

**Personalized Therapy:**
- Molecular profiling: Standard of care
- Adaptive trials: Platform designs
- Deintensification: Risk-adapted
- Functional preservation: Priority goal`,
      keyTerms: [
        { term: 'deintensification', definition: 'Reducing treatment intensity while maintaining outcomes, commonly studied in HPV-positive cancer' },
        { term: 'TORS', definition: 'Transoral robotic surgery for oropharyngeal tumors accessing via mouth' },
        { term: 'adaptive radiotherapy', definition: 'Modifying radiation plan during treatment based on anatomic changes' },
        { term: 'MRD', definition: 'Minimal residual disease; microscopic disease after treatment' },
        { term: 'PROMs', definition: 'Patient-reported outcome measures; subjective assessment of function and QOL' },
        { term: 'neoadjuvant', definition: 'Treatment given before definitive local therapy' },
      ],
      clinicalNotes: `NCCN Guidelines (2024) Key Recommendations for Oropharyngeal Cancer:

1. p16 testing: Mandatory for all oropharyngeal cancers
2. Early T1-T2, N0-N1: Single modality (surgery or radiation)
3. T3-T4 or N2-N3: Multimodal therapy
4. HPV-positive: Consider clinical trial/deintensification for favorable risk
5. HPV-positive: Low risk = T1-T2, N0-N1, ≤10 pack-years smoking
6. Smoking >10 pack-years: Higher risk, consider standard therapy
7. Post-treatment PET: At 3 months for advanced disease
8. Surveillance: Every 3 months first year, then spaced out

For recurrent/metastatic disease, pembrolizumab ± chemotherapy is now first-line based on KEYNOTE-048, showing overall survival benefit compared to cetuximab + chemotherapy (EXTREME regimen) for PD-L1 positive tumors.`,
    },
  },

  media: [
    {
      id: 'head-neck-anatomy-subsites',
      type: 'diagram',
      filename: 'head-neck-anatomy-subsites.svg',
      title: 'Head and Neck Anatomic Subsites',
      description: 'Diagrams of oral cavity, oropharynx, larynx, and hypopharynx subsites',
    },
    {
      id: 'neck-node-levels',
      type: 'diagram',
      filename: 'cervical-lymph-node-levels.svg',
      title: 'Cervical Lymph Node Levels (Robbins)',
      description: 'Anatomical diagram of cervical lymph node levels I-VII',
    },
    {
      id: 'tnm-staging-table',
      type: 'diagram',
      filename: 'tnm-staging-reference-table.svg',
      title: 'TNM Staging Reference Table',
      description: 'Quick reference for T, N, M categories by site',
    },
  ],

  citations: [
    {
      id: 'nccn-head-neck-2024',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers (Version 4.2024)',
      source: 'National Comprehensive Cancer Network',
    },
    {
      id: 'ajcc-cancer-staging-8th',
      type: 'textbook',
      title: 'AJCC Cancer Staging Manual (8th Edition)',
      source: 'Springer',
    },
    {
      id: 'cummings-head-neck-oncology',
      type: 'textbook',
      title: 'Head and Neck Oncology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section VI',
    },
  ],

  crossReferences: [
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'related', label: 'Throat Disorders' },
    { targetId: 'ent-voice', targetType: 'topic', relationship: 'related', label: 'Voice and Laryngeal Disorders' },
    { targetId: 'oncology-cancer-biology', targetType: 'topic', relationship: 'related', label: 'Cancer Biology' },
    { targetId: 'radiation', targetType: 'topic', relationship: 'related', label: 'Radiation Oncology' },
  ],

  tags: {
    systems: ['upper-airway', 'digestive', 'lymphatic', 'endocrine'],
    structures: ['FMA:60155', 'FMA:54642', 'FMA:46476'],
    topics: ['oncology', 'head-neck-cancer', 'oropharyngeal-cancer', 'laryngeal-cancer', 'salivary-gland-tumors'],
    keywords: ['head and neck cancer', 'SCC', 'HPV', 'oropharyngeal', 'laryngeal', 'salivary gland', 'TNM staging', 'neck dissection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'oncology', 'ent'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default headNeckCancerContent;
