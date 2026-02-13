/**
 * Chemotherapy Principles Educational Content
 *
 * Comprehensive coverage of chemotherapy including:
 * - Mechanisms of action by drug class
 * - Cell cycle specificity
 * - Common toxicities and management
 * - Supportive care
 */

import { EducationalContent } from '../../../types';

export const chemotherapyContent: EducationalContent = {
  id: 'oncology-chemotherapy',
  type: 'concept',
  name: 'Chemotherapy Principles',
  alternateNames: ['Cytotoxic therapy', 'Antineoplastic agents', 'Cancer chemotherapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Chemotherapy uses medicines that kill cancer cells or stop them from growing, but it can also affect healthy cells and cause side effects.',
      explanation: `Chemotherapy is medicine that treats cancer. It works by targeting cells that divide quickly, which is what cancer cells do.

**How Chemotherapy Works:**
- Cancer cells grow and divide faster than most normal cells
- Chemotherapy drugs attack fast-growing cells
- This kills cancer cells or stops them from multiplying

**Ways Chemotherapy is Given:**
- **IV (intravenous)**: Through a needle into a vein (most common)
- **Pills**: Taken by mouth at home
- **Injection**: Shot into muscle or under skin
- **Directly into tumor area**: In some cases

**Why There Are Side Effects:**
- Chemo also affects normal cells that divide quickly:
  - Hair follicles (hair loss)
  - Bone marrow (low blood counts)
  - Mouth and digestive tract (sores, nausea)
- Side effects usually get better after treatment ends

**Common Side Effects:**
- Tiredness (fatigue)
- Nausea and vomiting
- Hair loss
- Increased risk of infection
- Easy bruising or bleeding
- Mouth sores

**The Good News:**
- Many side effects can be prevented or treated
- Anti-nausea medicines work very well now
- Hair grows back after treatment
- Blood counts recover between cycles`,
      keyTerms: [
        { term: 'chemotherapy', definition: 'Medicine that kills cancer cells or stops them from growing' },
        { term: 'side effect', definition: 'An unwanted effect of a medicine' },
        { term: 'cycle', definition: 'One round of chemotherapy treatment, usually followed by a rest period' },
        { term: 'IV', definition: 'Intravenous; medicine given through a vein' },
      ],
      analogies: [
        'Chemotherapy is like a weed killer that targets fast-growing plants. It kills the weeds (cancer) but may also harm some flowers (normal cells).',
        'A chemotherapy cycle is like intensive training followed by rest - you push hard, then recover.',
      ],
      examples: [
        'A woman with breast cancer receives chemotherapy through an IV every 3 weeks for 4 cycles.',
        'A man taking chemotherapy pills at home has anti-nausea medicine to take if he feels sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chemotherapy drugs target rapidly dividing cells through various mechanisms, with treatment planning based on cancer type, stage, and patient factors.',
      explanation: `**How Chemotherapy Drugs Work:**

Chemotherapy drugs attack cancer cells in different ways:

*DNA Damage:*
- **Alkylating agents**: Cross-link DNA strands (cyclophosphamide, cisplatin)
- **Antitumor antibiotics**: Intercalate DNA (doxorubicin, bleomycin)

*Disrupting Cell Division:*
- **Taxanes**: Stabilize microtubules, preventing cell division (paclitaxel, docetaxel)
- **Vinca alkaloids**: Destabilize microtubules (vincristine, vinblastine)

*Blocking Cell Replication:*
- **Antimetabolites**: Interfere with DNA/RNA building blocks (5-FU, methotrexate, gemcitabine)
- **Topoisomerase inhibitors**: Block DNA unwinding (irinotecan, etoposide)

**Cell Cycle Specificity:**
- **Cell cycle-specific**: Work at specific phases (S phase: antimetabolites; M phase: taxanes)
- **Cell cycle-nonspecific**: Work at any phase (alkylating agents)

**Treatment Planning:**

*Factors Considered:*
- Cancer type and stage
- Patient's overall health
- Treatment goals (cure vs control)
- Prior treatments
- Drug interactions

*Combination Therapy:*
- Multiple drugs often used together
- Different mechanisms = more effective
- Example: CHOP for lymphoma (Cyclophosphamide, Hydroxydaunorubicin, Oncovin, Prednisone)

*Treatment Settings:*
- **Neoadjuvant**: Before surgery (shrink tumor)
- **Adjuvant**: After surgery (kill remaining cells)
- **Palliative**: Control cancer, not cure
- **Maintenance**: Keep cancer controlled after initial treatment

**Managing Side Effects:**

*Nausea/Vomiting:*
- Ondansetron, dexamethasone given before chemo
- Additional medicines if needed
- Risk depends on which drugs

*Low Blood Counts:*
- Neutropenia: Risk of infection (growth factors may help)
- Anemia: Fatigue, may need transfusion
- Thrombocytopenia: Bleeding risk

*Hair Loss:*
- Depends on drugs used
- Usually reversible
- Scalp cooling can sometimes help`,
      keyTerms: [
        { term: 'alkylating agent', definition: 'Chemotherapy that works by cross-linking DNA strands' },
        { term: 'antimetabolite', definition: 'Chemotherapy that blocks building blocks needed for DNA/RNA' },
        { term: 'neoadjuvant', definition: 'Treatment given before the main treatment (usually surgery)' },
        { term: 'adjuvant', definition: 'Treatment given after the main treatment to prevent recurrence' },
        { term: 'neutropenia', definition: 'Low white blood cell count, increasing infection risk' },
      ],
      analogies: [
        'Cell cycle-specific drugs are like rush hour traffic cops - they only catch cells at certain times. Non-specific drugs are like 24/7 surveillance cameras.',
        'Combination chemotherapy is like attacking with multiple weapons - cancer has fewer ways to escape.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chemotherapy regimens are designed based on drug mechanisms, pharmacokinetics, dose-limiting toxicities, and evidence from clinical trials.',
      explanation: `**Chemotherapy Drug Classes:**

*Alkylating Agents:*
- Mechanism: Covalent DNA cross-links → replication failure
- Cell cycle non-specific
- Examples: Cyclophosphamide, ifosfamide, melphalan
- Platinum compounds: Cisplatin, carboplatin, oxaliplatin
- Toxicities: Myelosuppression, nausea, secondary malignancies

*Antimetabolites:*
- Mechanism: Structural analogs of normal metabolites
- Cell cycle specific (S phase)
- Examples:
  - Folate antagonists: Methotrexate, pemetrexed
  - Pyrimidine analogs: 5-FU, capecitabine, cytarabine, gemcitabine
  - Purine analogs: 6-MP, fludarabine
- Toxicities: Myelosuppression, mucositis, hand-foot syndrome

*Anthracyclines:*
- Mechanism: DNA intercalation, topoisomerase II inhibition, free radical formation
- Cell cycle non-specific
- Examples: Doxorubicin, daunorubicin, epirubicin, idarubicin
- Toxicities: Myelosuppression, mucositis, cardiotoxicity (cumulative dose-related)

*Taxanes:*
- Mechanism: Stabilize microtubules → mitotic arrest
- Cell cycle specific (M phase)
- Examples: Paclitaxel, docetaxel, nab-paclitaxel
- Toxicities: Myelosuppression, peripheral neuropathy, hypersensitivity

*Vinca Alkaloids:*
- Mechanism: Inhibit microtubule polymerization → mitotic arrest
- Cell cycle specific (M phase)
- Examples: Vincristine, vinblastine, vinorelbine
- Toxicities: Peripheral neuropathy (dose-limiting for vincristine), myelosuppression

*Topoisomerase Inhibitors:*
- Topo I inhibitors: Irinotecan, topotecan
- Topo II inhibitors: Etoposide
- Toxicities: Myelosuppression, diarrhea (irinotecan)

**Pharmacokinetic Principles:**

*Dose Intensity:*
- Amount of drug per unit time
- Higher dose intensity may improve outcomes
- Limited by toxicity

*Log Kill Hypothesis:*
- Each treatment kills a constant proportion of cells
- Multiple cycles needed to reduce tumor burden

*Goldie-Coldman Hypothesis:*
- Spontaneous mutation rate leads to resistance
- Early treatment and combination therapy reduce resistance

**Supportive Care:**

*Antiemetics (based on emetogenic potential):*
- High: NK1 antagonist + 5-HT3 antagonist + dexamethasone + olanzapine
- Moderate: 5-HT3 antagonist + dexamethasone
- Low: Dexamethasone or PRN antiemetic

*Growth Factors:*
- G-CSF (filgrastim, pegfilgrastim): Prevent neutropenia
- Primary prophylaxis if >20% febrile neutropenia risk

*Cytoprotective Agents:*
- Mesna: Prevents hemorrhagic cystitis with ifosfamide/high-dose cyclophosphamide
- Dexrazoxane: Cardioprotection with anthracyclines (in select cases)
- Leucovorin: Rescues from methotrexate toxicity`,
      keyTerms: [
        { term: 'dose intensity', definition: 'Amount of drug delivered per unit time; maintaining intensity improves outcomes' },
        { term: 'emetogenic potential', definition: 'How likely a drug is to cause nausea and vomiting' },
        { term: 'G-CSF', definition: 'Granulocyte colony-stimulating factor; stimulates white blood cell production' },
        { term: 'anthracycline', definition: 'Class of chemotherapy drugs including doxorubicin; causes cardiotoxicity' },
        { term: 'mucositis', definition: 'Inflammation and ulceration of the mucous membranes (mouth, gut)' },
      ],
      clinicalNotes: 'Cumulative doxorubicin dose >450-550 mg/m² significantly increases heart failure risk. Consider baseline and periodic echocardiograms. Dexrazoxane may be used if continuing anthracycline needed.',
    },
    4: {
      level: 4,
      summary: 'Optimizing chemotherapy involves understanding pharmacogenomics, resistance mechanisms, organ-specific toxicity management, and integration with other treatment modalities.',
      explanation: `**Pharmacogenomics:**

*DPD Deficiency (DPYD):*
- Dihydropyrimidine dehydrogenase metabolizes fluoropyrimidines
- Deficiency: Severe/fatal toxicity with 5-FU, capecitabine
- Testing increasingly recommended before fluoropyrimidine therapy
- Dose reduction or alternative for deficient patients

*UGT1A1 Polymorphisms:*
- UGT1A1*28: Reduced glucuronidation of SN-38 (active irinotecan metabolite)
- Increased risk of neutropenia, diarrhea
- Consider dose reduction in homozygous *28/*28

*TPMT:*
- Thiopurine methyltransferase metabolizes 6-MP
- Deficiency: Severe myelosuppression
- Testing recommended before starting thiopurines

**Resistance Mechanisms:**

*Drug Efflux:*
- P-glycoprotein (MDR1/ABCB1): Pumps drugs out of cells
- Substrates: Taxanes, vinca alkaloids, anthracyclines

*Target Alterations:*
- Mutations reducing drug binding
- Increased target expression

*Apoptosis Resistance:*
- p53 mutations
- BCL-2 overexpression

*DNA Repair Enhancement:*
- ERCC1 expression (platinum resistance)
- MGMT activity (alkylating agent resistance)

**Organ-Specific Toxicity Management:**

*Cardiotoxicity:*
- Type I (anthracyclines): Irreversible, cumulative
- Type II (trastuzumab): Usually reversible, not cumulative
- Monitoring: Echo or MUGA at baseline, periodically
- Cardio-oncology referral for symptomatic decline

*Nephrotoxicity:*
- Cisplatin: Tubular damage, Mg/K wasting
- Prevention: Aggressive hydration, avoid nephrotoxins
- Ifosfamide: Fanconi syndrome (rare)
- Methotrexate: Crystallization (high-dose); alkalinize urine

*Neurotoxicity:*
- Peripheral neuropathy: Platinum, taxanes, vinca alkaloids
- Autonomic: Vincristine (ileus, urinary retention)
- CNS: High-dose methotrexate, ifosfamide (encephalopathy)
- Limited effective treatments; dose modification often needed

*Pulmonary Toxicity:*
- Bleomycin: Pulmonary fibrosis (cumulative dose >400 units)
- PFTs recommended; avoid high FiO2

**Treatment Intensification Strategies:**

*Dose-Dense Therapy:*
- Shorten interval between cycles (e.g., q2 weeks vs q3 weeks)
- Requires G-CSF support
- Improved outcomes in breast cancer (AC-T dose-dense)

*High-Dose Chemotherapy with Stem Cell Rescue:*
- Allows supralethal doses
- Used in: Lymphoma, myeloma, some solid tumors
- Autologous vs allogeneic transplant

**Integration with Other Modalities:**

*Concurrent Chemoradiation:*
- Radiosensitization (platinum, 5-FU)
- Standard for locally advanced: Lung, H&N, cervical, esophageal, rectal

*Perioperative Chemotherapy:*
- Neoadjuvant: Response assessment, downstaging
- Adjuvant: Elimination of micrometastatic disease
- Examples: Gastric (perioperative), rectal (neoadjuvant), colon (adjuvant)`,
      keyTerms: [
        { term: 'DPD deficiency', definition: 'Lack of enzyme metabolizing fluoropyrimidines; causes severe toxicity' },
        { term: 'P-glycoprotein', definition: 'Drug efflux pump causing multidrug resistance in cancer cells' },
        { term: 'dose-dense chemotherapy', definition: 'Administering chemotherapy at shortened intervals with growth factor support' },
        { term: 'chemoradiation', definition: 'Combination of chemotherapy and radiation therapy given concurrently' },
        { term: 'radiosensitization', definition: 'Using chemotherapy to enhance the effectiveness of radiation' },
      ],
      clinicalNotes: 'DPYD testing is increasingly mandated before fluoropyrimidine therapy in some countries. Consider testing before 5-FU/capecitabine. Partial deficiency: 50% dose; complete deficiency: contraindicated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary chemotherapy practice integrates precision dosing, emerging agents, combination strategies with targeted/immune therapies, and novel supportive care approaches.',
      explanation: `**Precision Dosing:**

*Body Surface Area (BSA) Dosing Limitations:*
- Standard approach but has poor correlation with pharmacokinetics
- Alternatives under investigation:
  - Flat dosing for some agents (pembrolizumab, nivolumab)
  - Pharmacokinetically-guided dosing (5-FU, methotrexate)
  - Therapeutic drug monitoring

*Carboplatin Dosing:*
- Calvert formula: Dose = AUC x (GFR + 25)
- AUC targets based on regimen (typically 5-6)
- GFR: Measure or estimate (Cockcroft-Gault)
- Cap GFR at 125 mL/min for calculation

*Creatinine Clearance Adjustments:*
- Cisplatin: Generally avoid if CrCl <60
- Carboplatin: Adjust via Calvert formula
- High-dose methotrexate: Requires adequate renal function, leucovorin rescue

**Emerging Agents and Formulations:**

*Antibody-Drug Conjugates (ADCs):*
- Monoclonal antibody linked to cytotoxic payload
- Targeted delivery of chemotherapy
- Examples:
  - T-DXd (trastuzumab deruxtecan): HER2+ breast, gastric, NSCLC
  - Enfortumab vedotin: Urothelial
  - Sacituzumab govitecan: TNBC, bladder
- Unique toxicities: Interstitial lung disease (T-DXd)

*Liposomal Formulations:*
- Pegylated liposomal doxorubicin: Reduced cardiotoxicity
- Liposomal irinotecan: Approved for pancreatic cancer
- Altered pharmacokinetics and toxicity profile

*Oral Formulations:*
- Capecitabine (5-FU prodrug)
- Oral vinorelbine
- Oral etoposide
- Adherence and patient education critical

**Chemotherapy + Targeted Therapy:**

*Examples:*
- FOLFOX/FOLFIRI + bevacizumab (colorectal)
- Taxane + trastuzumab/pertuzumab (HER2+ breast)
- Pemetrexed + pembrolizumab + platinum (NSCLC)
- FOLFIRINOX + targeted agents (pancreatic trials)

*Sequencing Considerations:*
- Concurrent vs sequential
- Maintenance strategies
- Resistance mechanisms

**Chemotherapy + Immunotherapy:**

*Rationale:*
- Chemotherapy-induced immunogenic cell death
- Release of tumor antigens
- Modulation of tumor microenvironment

*Established Combinations:*
- Chemo + pembrolizumab (NSCLC, TNBC)
- Chemo + atezolizumab (SCLC, NSCLC)
- Platinum + checkpoint inhibitor (various)

*Toxicity Considerations:*
- Overlapping myelosuppression
- Immune-related adverse events
- Timing of growth factors with immunotherapy

**Advanced Supportive Care:**

*Antiemetic Updates:*
- Olanzapine added to guideline-based regimens
- NEPA (netupitant + palonosetron) single-day combination
- Rolapitant: Long-acting NK1 antagonist

*G-CSF:*
- Biosimilars: Filgrastim, pegfilgrastim biosimilars
- Trilaciclib: CDK4/6 inhibitor protecting bone marrow (approved for SCLC)

*Chemotherapy-Induced Peripheral Neuropathy:*
- Prevention: Cryotherapy (hands/feet) during taxanes
- Treatment: Duloxetine (best evidence)
- Limited options; dose modification primary approach

*Fertility Preservation:*
- GnRH agonists during chemo (ovarian protection)
- Sperm/oocyte banking pre-treatment
- Referral to reproductive specialist before therapy

**Quality and Safety:**

*Oral Chemotherapy:*
- Same toxicity potential as IV
- Patient education critical
- Adherence monitoring
- Safe handling, disposal

*Extravasation:*
- Vesicants: Anthracyclines, vinca alkaloids
- Immediate management: Stop infusion, aspirate, specific antidotes
- Dexrazoxane for anthracycline extravasation

*Chemotherapy Safety:*
- USP 800: Handling hazardous drugs
- Closed-system transfer devices
- Personal protective equipment
- Patient education on bodily fluid precautions`,
      keyTerms: [
        { term: 'ADC', definition: 'Antibody-drug conjugate; monoclonal antibody linked to cytotoxic payload for targeted delivery' },
        { term: 'Calvert formula', definition: 'Method for calculating carboplatin dose based on target AUC and GFR' },
        { term: 'trilaciclib', definition: 'CDK4/6 inhibitor used to protect bone marrow during chemotherapy' },
        { term: 'vesicant', definition: 'Agent causing tissue damage if it leaks outside the vein (extravasation)' },
        { term: 'USP 800', definition: 'Standards for safe handling of hazardous drugs including chemotherapy' },
      ],
      clinicalNotes: `**Key Practice Points:**
- DPYD testing before fluoropyrimidines increasingly standard
- Carboplatin: Use Calvert formula with GFR capped at 125
- ADCs: Monitor for unique toxicities (ILD with T-DXd)
- G-CSF primary prophylaxis if FN risk >20%
- Antiemetics: Match to emetogenic potential of regimen

**Board Pearls:**
- Know mechanisms of major drug classes
- Dose-limiting toxicities by class
- Cumulative anthracycline cardiotoxicity threshold
- Cell cycle specificity
- Pharmacogenomic considerations (DPD, UGT1A1, TPMT)`,
    },
  },

  media: [
    {
      id: 'chemo-mechanisms',
      type: 'diagram',
      filename: 'chemotherapy-mechanisms.svg',
      title: 'Chemotherapy Mechanisms of Action',
      description: 'Visual representation of how different chemotherapy classes work',
    },
    {
      id: 'cell-cycle-chemo',
      type: 'diagram',
      filename: 'cell-cycle-chemotherapy.svg',
      title: 'Cell Cycle and Chemotherapy',
      description: 'Where different chemotherapy drugs act in the cell cycle',
    },
  ],
  citations: [
    {
      id: 'nccn-antiemesis',
      type: 'website',
      title: 'NCCN Guidelines: Antiemesis',
      source: 'National Comprehensive Cancer Network',
    },
    {
      id: 'devita-cancer',
      type: 'textbook',
      title: 'DeVita, Hellman, and Rosenberg\'s Cancer: Principles & Practice of Oncology',
      source: 'Wolters Kluwer',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-targeted-therapy', targetType: 'topic', relationship: 'related', label: 'Targeted Therapy' },
    { targetId: 'oncology-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
    { targetId: 'oncology-oncologic-emergencies', targetType: 'topic', relationship: 'related', label: 'Oncologic Emergencies' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['chemotherapy', 'treatment', 'pharmacology'],
    keywords: ['cytotoxic', 'alkylating agents', 'antimetabolites', 'taxanes', 'anthracyclines'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pharmacology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
