/**
 * Radiation Therapy Principles Educational Content
 *
 * Comprehensive coverage of radiation oncology including:
 * - Radiobiology fundamentals
 * - Treatment modalities (EBRT, brachytherapy, SBRT)
 * - Side effects and management
 * - Integration with systemic therapy
 */

import { EducationalContent } from '../../../types';

export const radiationTherapyContent: EducationalContent = {
  id: 'oncology-radiation-therapy',
  type: 'concept',
  name: 'Radiation Therapy',
  alternateNames: ['Radiotherapy', 'Radiation oncology', 'RT', 'XRT'],

  levels: {
    1: {
      level: 1,
      summary: 'Radiation therapy uses high-energy rays to kill cancer cells or stop them from growing.',
      explanation: `Radiation therapy is a common treatment for cancer. It uses high-energy rays (similar to X-rays but much stronger) to damage cancer cells so they cannot grow or divide.

**How Radiation Works:**
- High-energy beams damage the DNA inside cells
- Damaged DNA means cells cannot multiply
- Cancer cells are often more sensitive than normal cells
- Normal cells can usually repair some damage

**Types of Radiation:**
- **External beam**: Machine outside the body aims radiation at the cancer
- **Internal (brachytherapy)**: Radioactive material placed inside or near the tumor
- **Systemic**: Radioactive medicine given by mouth or injection (less common)

**What Treatment Is Like:**
- Usually given 5 days a week for several weeks
- Each session takes just a few minutes
- You do not feel the radiation during treatment
- Treatment planning (simulation) done before starting

**Common Uses:**
- Cure cancer (alone or with surgery/chemotherapy)
- Shrink tumors before surgery
- Kill remaining cells after surgery
- Relieve symptoms (pain, bleeding, blockages)

**Side Effects:**
Depend on which body part is treated:
- **Skin**: Redness, irritation (like sunburn)
- **Fatigue**: Feeling tired, especially later in treatment
- **Specific areas**: Hair loss (only where treated), mouth sores, difficulty swallowing, diarrhea

**Important Points:**
- Radiation does NOT make you radioactive (with external beam)
- Side effects usually improve after treatment ends
- Many side effects can be prevented or managed
- Very precise technology minimizes damage to normal tissue`,
      keyTerms: [
        { term: 'radiation', definition: 'High-energy rays used to kill cancer cells' },
        { term: 'external beam', definition: 'Radiation aimed at the body from a machine' },
        { term: 'brachytherapy', definition: 'Radiation placed inside the body near the tumor' },
        { term: 'simulation', definition: 'Planning session where the radiation team maps out your treatment' },
      ],
      analogies: [
        'Radiation is like a very focused sunbeam - it targets a specific spot and damages cells in that area.',
        'Treatment planning is like GPS navigation - the team maps exactly where the radiation needs to go.',
        'Multiple small treatments are like getting a deep tan gradually rather than all at once - less damage to normal skin.',
      ],
      examples: [
        'A woman with breast cancer receives radiation every day for 3 weeks after her lumpectomy to prevent the cancer from coming back.',
        'A man with prostate cancer has radioactive seeds placed directly in his prostate (brachytherapy) as his main treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Radiation therapy damages cancer cell DNA through various techniques, with treatment fractionation allowing normal tissue recovery while maximizing tumor control.',
      explanation: `**Radiobiology Basics:**

*How Radiation Kills Cells:*
- Ionizing radiation damages DNA directly or through free radicals
- Double-strand DNA breaks are hardest to repair
- Cells die when they try to divide with damaged DNA
- Cancer cells often have impaired DNA repair

*Why Fractionation Works:*
- Small daily doses given over weeks
- Normal tissues recover between treatments (repair)
- Tumor cells reoxygenate (become more sensitive)
- Cells redistribute through the cell cycle
- The "4 Rs": Repair, Reoxygenation, Redistribution, Repopulation

**Treatment Planning:**

*Simulation:*
- CT scan in treatment position
- Immobilization devices (masks, molds)
- Contrast may be used to define anatomy
- MRI or PET fusion for better tumor visualization

*Dosimetry:*
- Physician contours tumor and normal structures
- Dosimetrist creates treatment plan
- Goal: Maximum dose to tumor, minimum to normal tissues
- Dose measured in Gray (Gy)

**External Beam Techniques:**

*3D Conformal:*
- Multiple beams shaped to tumor
- Beam's-eye-view planning
- Largely replaced by more advanced techniques

*IMRT (Intensity-Modulated):*
- Varying intensity across beam
- Better sparing of normal structures
- Standard for many treatments

*VMAT (Volumetric Modulated Arc):*
- Continuous beam during rotation
- Faster treatment delivery
- Similar quality to IMRT

*SBRT/SABR:*
- Stereotactic Body Radiotherapy
- Very high dose in few treatments (1-5)
- Used for small tumors with high precision
- Lung, liver, spine, oligometastatic disease

*SRS (Stereotactic Radiosurgery):*
- Single high-dose treatment
- Typically for brain tumors/metastases
- Very precise targeting

**Brachytherapy:**

*Low-Dose Rate (LDR):*
- Seeds placed permanently
- Prostate cancer most common use
- Radioactivity decays over weeks/months

*High-Dose Rate (HDR):*
- Temporary source placement
- Treatment over minutes
- Multiple sessions possible
- Cervical, prostate, breast cancers

**Common Clinical Applications:**

*Curative:*
- Definitive: Radiation as primary treatment
- Adjuvant: After surgery to reduce recurrence
- Neoadjuvant: Before surgery to shrink tumor

*Palliative:*
- Pain relief (bone metastases)
- Bleeding control
- Spinal cord compression
- Brain metastases

**Side Effects by Site:**

*Acute (during/shortly after):*
- Skin: Erythema, dry/moist desquamation
- Mucosa: Mucositis, esophagitis
- GI: Nausea, diarrhea
- Fatigue (cumulative)

*Late (months to years):*
- Fibrosis
- Lymphedema
- Xerostomia (dry mouth)
- Secondary malignancy (rare)`,
      keyTerms: [
        { term: 'Gray (Gy)', definition: 'Unit of radiation dose; 1 Gy = absorption of 1 joule per kilogram' },
        { term: 'IMRT', definition: 'Intensity-modulated radiation therapy; varying beam intensity for better targeting' },
        { term: 'SBRT', definition: 'Stereotactic body radiation therapy; high-dose precision treatment in few sessions' },
        { term: 'fractionation', definition: 'Dividing total radiation dose into multiple smaller treatments' },
        { term: 'simulation', definition: 'Planning session with imaging to map treatment area' },
      ],
      analogies: [
        'IMRT is like adjusting the brightness of a flashlight across different parts of the beam to protect shadows while illuminating the target.',
        'Fractionation is like interval training - bursts of treatment with recovery periods give better results than one exhausting session.',
      ],
    },
    3: {
      level: 3,
      summary: 'Radiation therapy requires understanding of radiobiology principles, precise dosimetric planning, and integration of advanced technologies for optimal therapeutic ratio.',
      explanation: `**Radiobiology Principles:**

*Cellular Response:*
- Direct DNA damage (1/3 of effect)
- Indirect via free radicals (2/3 of effect, water radiolysis)
- Mitotic catastrophe: Death at attempted division
- Apoptosis: Programmed death (some tumors)
- Senescence: Permanent growth arrest

*The 5 Rs of Radiobiology:*
1. **Repair**: Sublethal damage repair (normal > tumor)
2. **Reoxygenation**: Hypoxic cells become sensitive
3. **Redistribution**: Cells cycle to sensitive phases
4. **Repopulation**: Cell division during treatment (tumor and normal)
5. **Radiosensitivity**: Intrinsic cellular sensitivity varies

*Linear-Quadratic Model:*
- Survival fraction = exp(-alpha*D - beta*D^2)
- Alpha/beta ratio:
  - High (8-10 Gy): Early-responding tissues, tumors
  - Low (2-3 Gy): Late-responding tissues
- Guides fractionation decisions
- Hypofractionation exploits different alpha/beta

*Oxygen Enhancement Ratio:*
- Hypoxic cells ~3x more resistant
- Tumor hypoxia predicts poor outcome
- Reoxygenation between fractions important
- Hypoxia-targeted agents under investigation

**Treatment Planning Optimization:**

*Imaging for Planning:*
- CT simulation (electron density for dose calculation)
- MRI fusion (soft tissue delineation)
- PET fusion (metabolic tumor definition)
- 4D-CT for respiratory motion management

*Volume Definitions (ICRU):*
- GTV (Gross Tumor Volume): Visible/palpable disease
- CTV (Clinical Target Volume): GTV + microscopic extension
- ITV (Internal Target Volume): CTV + internal motion
- PTV (Planning Target Volume): CTV/ITV + setup uncertainty

*Organs at Risk (OARs):*
- Dose constraints based on tolerance
- Serial organs: Maximum point dose critical (spinal cord)
- Parallel organs: Volume receiving dose matters (lung, liver)

**Advanced Techniques:**

*IMRT/VMAT Optimization:*
- Inverse planning: Specify desired result, computer optimizes
- Multiple objectives: Tumor coverage vs OAR sparing
- Dose gradients near critical structures

*Motion Management:*
- 4D-CT: Respiratory motion capture
- Respiratory gating: Beam on during specific breathing phase
- Breath hold: Voluntary or device-assisted (DIBH)
- Tracking: Real-time tumor following (CyberKnife)

*Image Guidance (IGRT):*
- Daily imaging before treatment
- Cone-beam CT, kV imaging, surface monitoring
- Correct for setup errors
- Adaptive radiotherapy: Replan during course

**SBRT/SRS Details:**

*Technical Requirements:*
- High precision (1-2 mm accuracy)
- Steep dose gradients
- Rigid immobilization
- Real-time imaging/tracking
- Small margins (minimal PTV expansion)

*Radiobiology of SBRT:*
- High dose per fraction → different radiobiology
- Vascular damage component
- Immune activation
- May not follow simple LQ model

*Clinical Applications:*
- Stage I NSCLC: Alternative to surgery (if inoperable)
- Liver metastases/HCC
- Spine metastases
- Oligometastatic disease (consolidation)
- Prostate cancer (ultrahypofractionation)

**Brachytherapy Physics:**

*Dosimetry:*
- Dose falls rapidly with distance (inverse square law)
- High dose near source, rapid falloff
- Ideal for localized treatment

*Clinical Applications:*
- Cervical cancer: Intracavitary + interstitial
- Prostate: LDR seeds or HDR boost
- Breast: Accelerated partial breast irradiation
- Skin: Surface applicators`,
      keyTerms: [
        { term: 'alpha/beta ratio', definition: 'Radiobiology parameter relating acute vs late tissue effects; guides fractionation' },
        { term: 'GTV/CTV/PTV', definition: 'Volume hierarchy: visible tumor → microscopic extension → planning margin' },
        { term: 'DIBH', definition: 'Deep inspiration breath hold; technique to spare heart in left breast treatment' },
        { term: 'IGRT', definition: 'Image-guided radiation therapy; imaging before each treatment for accuracy' },
        { term: 'inverse planning', definition: 'Optimization where desired outcomes are specified and beam parameters calculated' },
      ],
      clinicalNotes: 'Modern radiation therapy heavily relies on imaging and computing. SBRT has expanded indications rapidly. Treatment planning requires multidisciplinary input for optimal target delineation. Late toxicity data guides dose constraints.',
    },
    4: {
      level: 4,
      summary: 'Contemporary radiation oncology integrates advanced physics, radiobiology, and imaging with systemic therapy, requiring understanding of combined modality toxicity and emerging technologies.',
      explanation: `**Combined Modality Therapy:**

*Concurrent Chemoradiation:*
- Radiosensitization: Chemo enhances radiation effect
- Spatial cooperation: Systemic controls distant disease
- Standard for many sites: H&N, cervix, lung, esophagus, rectum

*Common Radiosensitizers:*
- Platinum compounds (cisplatin, carboplatin)
- 5-FU, capecitabine
- Temozolomide (glioblastoma)
- Taxanes

*Mechanisms of Radiosensitization:*
- Cell cycle synchronization
- DNA repair inhibition
- Hypoxic cell sensitization
- Increased apoptosis

*Immunotherapy + Radiation:*
- Abscopal effect: Immune-mediated regression of non-irradiated tumors
- Radiation as "in situ vaccine"
- Optimal timing, dose, fractionation under investigation
- Toxicity interactions (pneumonitis with chest radiation)

**Advanced Technologies:**

*Proton Therapy:*
- Bragg peak: Dose deposition at specific depth
- No exit dose beyond target
- Dosimetric advantage for many sites
- Clinical benefit still under investigation
- Cost and availability limiting factors

*Carbon Ion Therapy:*
- Higher LET (linear energy transfer)
- Greater biological effectiveness
- Resistant tumors (sarcoma, mucosal melanoma)
- Limited centers worldwide

*FLASH Radiotherapy:*
- Ultra-high dose rate (>40 Gy/sec)
- Preclinical: Normal tissue sparing with tumor control
- Mechanism unclear
- First human trials beginning

*MR-Guided Radiotherapy:*
- Real-time MRI during treatment
- Soft tissue visualization
- Adaptive planning during each fraction
- MRIdian, Unity systems

**Oligometastatic Disease:**

*Paradigm Shift:*
- Between localized and widely metastatic
- Potential for cure with local ablation
- SABR-COMET: Overall survival benefit
- Patient selection crucial

*Clinical Applications:*
- Lung metastases
- Liver metastases
- Bone metastases
- Lymph node metastases
- Integration with systemic therapy

**Toxicity and Management:**

*Acute Toxicity Mechanisms:*
- Rapidly proliferating tissues affected
- Onset during or shortly after treatment
- Usually reversible

*Late Toxicity Mechanisms:*
- Vascular damage, fibrosis
- Stem cell depletion
- Often irreversible
- May progress over time

*Organ-Specific Considerations:*

*CNS:*
- Acute: Fatigue, edema (manage with steroids)
- Late: Radionecrosis, cognitive effects, vasculopathy
- SRS vs WBRT for brain metastases

*Thorax:*
- Radiation pneumonitis (6-12 weeks post)
- Late fibrosis
- Cardiac toxicity (dose-dependent, coronary disease)
- Esophagitis (acute)

*Abdomen/Pelvis:*
- Enteritis (acute), bowel stricture (late)
- Cystitis
- Ovarian/testicular failure
- Pelvic fractures

**Quality and Safety:**

*Process:*
- Peer review of treatment plans
- Physics quality assurance
- In-vivo dosimetry
- Error reporting systems

*Contouring:*
- Standardized atlases
- Peer review
- AI-assisted contouring emerging

**Emerging Indications:**

*Reirradiation:*
- Challenging due to cumulative toxicity
- SBRT enables retreatment in some cases
- Careful dose reconstruction
- Case-by-case decision

*Intraoperative Radiation:*
- Single high dose at surgery
- Boost to high-risk margin
- Breast, sarcoma applications

*Total Body Irradiation:*
- Conditioning for stem cell transplant
- Reduced-intensity regimens
- Toxicity management critical`,
      keyTerms: [
        { term: 'Bragg peak', definition: 'Proton dose deposition at specific depth with minimal exit dose' },
        { term: 'abscopal effect', definition: 'Regression of non-irradiated tumors due to immune activation by radiation' },
        { term: 'LET', definition: 'Linear energy transfer; energy deposited per unit path length' },
        { term: 'MR-guided RT', definition: 'Radiation delivery with real-time MRI for soft tissue visualization' },
        { term: 'FLASH RT', definition: 'Ultra-high dose rate radiation with potential for reduced normal tissue toxicity' },
      ],
      clinicalNotes: 'Combined modality therapy requires coordination between radiation and medical oncology. Proton therapy indications expanding but not universally superior. Late toxicity monitoring essential for long-term survivors.',
    },
    5: {
      level: 5,
      summary: 'Radiation oncology frontiers include particle therapy optimization, FLASH radiotherapy, adaptive planning, radiomics/AI integration, and refined understanding of radiation-immune interactions.',
      explanation: `**Particle Therapy Evolution:**

*Proton Therapy Trials:*
- RTOG 1308: Protons vs IMRT for NSCLC
- RADCOMP: Breast cancer cardiac sparing
- Pediatric: Established benefit for late effects
- Brain tumors: Hippocampal sparing

*Intensity-Modulated Proton Therapy (IMPT):*
- Pencil beam scanning
- Superior conformality
- Range uncertainty management
- Robustness optimization

*Heavy Ions:*
- Carbon ions: Bone/soft tissue sarcoma, head and neck
- Biological advantages for resistant tumors
- Limited centers (Japan, Europe, China expanding)
- Cost-effectiveness analyses ongoing

*LET Optimization:*
- Concentrate high-LET in tumor
- Minimize high-LET in OARs
- Biological dose painting

**FLASH Radiotherapy:**

*Current Understanding:*
- Ultra-high dose rate (>40-100 Gy/sec)
- FLASH effect: Normal tissue sparing at iso-effective tumor doses
- Proposed mechanisms:
  - Oxygen depletion hypothesis
  - Immune sparing
  - DNA damage differences

*Clinical Development:*
- First human trial: Skin cancer (Lausanne)
- Technology challenges: Delivery, dosimetry
- Electron, proton, and photon FLASH
- Integration with existing infrastructure

*Key Questions:*
- Minimum dose rate for FLASH effect
- Volume limitations
- Tumor control with FLASH
- Combination with other modalities

**Adaptive Radiotherapy:**

*Rationale:*
- Anatomy changes during treatment
- Tumor shrinkage
- Weight loss
- Organ motion/filling

*Implementation:*
- Offline: Replan at intervals
- Online: Daily adaptation
- MR-guided real-time adaptation

*AI in Adaptive Planning:*
- Auto-contouring
- Rapid plan optimization
- Quality assurance automation
- Outcome prediction

**Radiomics and AI:**

*Radiomics:*
- High-dimensional imaging features
- Tumor characterization
- Response prediction
- Toxicity prediction

*Deep Learning Applications:*
- Auto-segmentation (organs, tumors)
- Treatment plan quality prediction
- Outcome modeling
- Image synthesis (MR to CT)

*Clinical Integration:*
- Quality assurance assistance
- Workflow efficiency
- Personalized dose prescription
- Adaptive protocols

**Radiation-Immune Interactions:**

*Immunogenic Cell Death:*
- Radiation induces danger signals
- DAMP release (calreticulin, HMGB1, ATP)
- DC activation and antigen presentation
- T cell priming

*Optimizing for Immunity:*
- Dose/fractionation: Hypofractionation may be more immunogenic
- Timing with checkpoint inhibitors
- Field size considerations
- Lymph node sparing

*Clinical Trials:*
- Sequencing radiation + immunotherapy
- Optimal dose for abscopal effect
- Combining local + systemic immune effects
- Toxicity management (pneumonitis)

**Novel Sensitizers:**

*DNA Repair Inhibitors:*
- PARP inhibitors + radiation (trials ongoing)
- ATR inhibitors
- DNA-PK inhibitors
- CHK1/2 inhibitors

*Hypoxia Targeting:*
- Hypoxia-activated prodrugs
- HIF-1 inhibitors
- Carbogen breathing
- ARCON (accelerated + carbogen + nicotinamide)

*Cell Cycle Modulation:*
- WEE1 inhibitors (adavosertib)
- CDK inhibitors
- G2/M arrest enhancement

**Precision Radiation Oncology:**

*Biomarker-Guided Therapy:*
- HPV status in oropharynx (de-escalation)
- Genomic signatures for dose selection
- Radiosensitivity indices
- Hypoxia imaging-guided boost

*De-escalation Trials:*
- HPV+ oropharynx: Lower dose, omit chemotherapy
- Breast cancer: Partial breast, omission in select elderly
- Prostate: Ultrahypofractionation, focal therapy

*Dose Escalation:*
- Dose painting based on imaging
- BTV (biological target volume)
- Heterogeneous dose distributions
- Boosting resistant subvolumes

**Future Directions:**

*Technology:*
- FLASH clinical implementation
- MR-LINAC widespread adoption
- Automated planning and QA
- Proton/heavy ion expansion

*Biology:*
- Personalized fractionation
- Radiation + immunotherapy optimization
- Resistance prediction and targeting
- Long-term survivorship

*Healthcare Delivery:*
- Hypofractionation adoption
- Cost-effectiveness
- Global access to advanced RT
- Training and workforce`,
      keyTerms: [
        { term: 'IMPT', definition: 'Intensity-modulated proton therapy; pencil beam scanning with varying intensities' },
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images for analysis' },
        { term: 'DAMP', definition: 'Damage-associated molecular patterns; signals released from dying cells that activate immunity' },
        { term: 'BTV', definition: 'Biological target volume; area for dose escalation based on imaging biomarkers' },
        { term: 'adavosertib', definition: 'WEE1 inhibitor studied as radiosensitizer' },
      ],
      clinicalNotes: 'Radiation oncology is advancing rapidly with technology and biology integration. FLASH radiotherapy holds promise but requires extensive development. AI is transforming planning and QA workflows. Radiation-immunotherapy combinations are active research area requiring careful toxicity management.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: [],
    topics: ['oncology', 'radiation therapy', 'radiobiology', 'treatment planning'],
    keywords: ['IMRT', 'SBRT', 'brachytherapy', 'proton', 'fractionation', 'radiosensitizer'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
