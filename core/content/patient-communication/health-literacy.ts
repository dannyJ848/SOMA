/**
 * Health Literacy
 *
 * Understanding medical jargon, reading lab results, understanding prescriptions,
 * health literacy levels, asking effective questions, understanding consent forms,
 * and navigating health insurance terms.
 */

import { EducationalContent } from '../types';

export const healthLiteracy: EducationalContent = {
  id: 'concept-health-literacy',
  type: 'concept',
  name: 'Health Literacy',
  alternateNames: ['Medical Literacy', 'Healthcare Information Competency'],

  levels: {
    1: {
      level: 1,
      summary: 'Health literacy means you can understand what your doctor tells you, read medicine labels, and make good choices about your health.',
      explanation: `Health literacy is knowing how to understand health information so you can take care of yourself.

**Understanding What the Doctor Says**
Doctors sometimes use big words. It is okay to ask them to explain.
- "Hypertension" means high blood pressure
- "Diagnosis" means what the doctor thinks is wrong
- "Chronic" means something that lasts a long time

**Reading Medicine Labels**
Every medicine bottle has important information:
- **Name** of the medicine
- **Dose**: how much to take
- **Frequency**: how often (like "twice a day")
- **Warnings**: things to watch out for

**Understanding Lab Results**
- Results come with a "normal range"
- If your number is inside the range, that is usually good
- Ask: "Is this normal for me?"

**Asking Good Questions**
Try asking: What is wrong? What do I need to do? Why is this important?

**Understanding Forms You Sign**
Consent forms tell you what will happen and list possible risks. You can ask questions before signing.

**Health Insurance Words**
- **Premium**: monthly payment for your plan
- **Copay**: amount you pay at each visit
- **Deductible**: amount you pay before insurance helps`,
      keyTerms: [
        { term: 'health literacy', definition: 'Being able to understand and use health information to make good choices' },
        { term: 'diagnosis', definition: 'What the doctor thinks is wrong with you' },
        { term: 'prescription', definition: 'A note from the doctor that says what medicine you need' },
        { term: 'consent form', definition: 'A paper you sign that says you agree to a treatment after learning about it' },
      ],
      analogies: [
        'Health literacy is like learning to read a food label — once you know what to look for, you can make better choices.',
        'Lab results are like a report card — each number tells you how a part of your body is doing.',
      ],
      examples: [
        'Reading a prescription bottle to learn you should take one pill every morning with food.',
        'Seeing that your blood sugar is 95 mg/dL and knowing the normal range is 70–100.',
      ],
      patientCounselingPoints: [
        'Always ask the doctor to explain words you do not understand.',
        'Bring a family member or friend to help you remember what the doctor says.',
        'Write down your questions before the visit.',
      ],
    },

    2: {
      level: 2,
      summary: 'Health literacy involves understanding medical terminology, interpreting lab work, managing prescriptions, and navigating insurance and consent processes.',
      explanation: `Health literacy is your ability to find, understand, and act on health information.

**Medical Jargon Decoded**
| Term | Meaning |
|---|---|
| Benign | Not cancer |
| Malignant | Cancer |
| Acute | Short-term, sudden |
| Chronic | Long-lasting |
| Edema | Swelling |
| Idiopathic | Cause unknown |

**Reading Lab Results**
- **Test name**: what was measured
- **Your value**: the number from your sample
- **Reference range**: what is considered normal
- **Flag**: H (high), L (low), or blank (normal)

*Common Panels:* CBC (blood cells), BMP (electrolytes, kidney), Lipid Panel (cholesterol)

**Prescription Abbreviations**
PO (by mouth), BID (twice daily), TID (three times daily), QD (once daily), PRN (as needed), AC (before meals), HS (at bedtime)

**Asking Effective Questions — Ask Me 3**
1. What is my main problem?
2. What do I need to do?
3. Why is it important for me to do this?

**Consent Forms** should include: procedure description, benefits, risks, alternatives, and what happens if you decline.

**Insurance Basics**
| Term | Meaning |
|---|---|
| Premium | Monthly plan cost |
| Deductible | Amount before insurance kicks in |
| Copay | Fixed amount per visit |
| Coinsurance | Percentage you pay after deductible |
| Formulary | Medicines your plan covers |`,
      keyTerms: [
        { term: 'reference range', definition: 'The span of values considered normal for a lab test' },
        { term: 'CBC', definition: 'Complete Blood Count — measures red cells, white cells, and platelets' },
        { term: 'formulary', definition: 'A list of prescription drugs covered by a health insurance plan' },
        { term: 'coinsurance', definition: 'The percentage of costs you share with insurance after meeting the deductible' },
      ],
      analogies: [
        'Reference ranges are like speed limits — staying within is safe, going outside signals a problem.',
        'A formulary is like a restaurant menu — insurance only covers items on the list.',
      ],
      examples: [
        'Your lipid panel shows LDL at 145 mg/dL with reference < 100, flagged H for high.',
        'A prescription reads "Lisinopril 10 mg PO QD" — 10 milligrams by mouth once daily.',
      ],
    },

    3: {
      level: 3,
      summary: 'Health literacy encompasses functional, interactive, and critical dimensions enabling patients to decode terminology, interpret labs, manage medications, evaluate consent, and navigate insurance.',
      explanation: `## Comprehensive Health Literacy

### Medical Terminology Roots
| Prefix | Meaning | Example |
|---|---|---|
| Hyper-/Hypo- | Above/Below | Hyperglycemia / Hypotension |
| Tachy-/Brady- | Fast/Slow | Tachycardia / Bradycardia |
| Dys- | Abnormal | Dyspnea |

| Suffix | Meaning | Example |
|---|---|---|
| -itis | Inflammation | Appendicitis |
| -ectomy | Surgical removal | Appendectomy |
| -emia | Blood condition | Anemia |
| -pathy | Disease | Neuropathy |

### Lab Interpretation
- **Sensitivity vs. Specificity**: Sensitive tests catch most cases; specific tests rule in disease
- **Critical values**: Results so abnormal the lab calls immediately (e.g., potassium > 6.5)
- **Trends** are more informative than isolated values
- **Patient factors** (age, sex, medications) affect interpretation

### Prescription Literacy
**Five Rights:** Right patient, drug, dose, route, time. Key concepts: generic vs. brand names, drug-drug and drug-food interactions, black box warnings (FDA's strongest safety alert).

### Health Literacy Assessment
The NVS (Newest Vital Sign) and REALM are validated screening tools guiding providers on how to tailor communication.

### Questioning Strategies
- **BRAN**: Benefits, Risks, Alternatives, Nothing?
- **Chunk and check**: Small pieces, verify understanding
- **Teach-back**: Repeat in your own words

### Consent Elements
Disclosure of diagnosis, proposed treatment, material risks/benefits, alternatives including no treatment, opportunity to ask questions, voluntary agreement.

### Insurance Navigation
**Plan types:** HMO (referrals required, lower cost), PPO (broader network, higher cost), EPO (in-network only), HDHP (HSA-eligible). **Prior authorization** can be appealed internally then externally. **EOB** is a summary, not a bill.`,
      keyTerms: [
        { term: 'sensitivity', definition: 'A test\'s ability to correctly identify those with a condition (true positive rate)' },
        { term: 'specificity', definition: 'A test\'s ability to correctly identify those without a condition (true negative rate)' },
        { term: 'black box warning', definition: 'The FDA\'s most serious medication warning label' },
        { term: 'prior authorization', definition: 'Insurer approval required before delivering a specific service or medication' },
        { term: 'REALM', definition: 'Rapid Estimate of Adult Literacy in Medicine — a validated health literacy screening tool' },
      ],
      clinicalNotes: 'Approximately 36% of US adults have basic or below-basic health literacy, correlating with higher hospitalization, lower medication adherence, and higher mortality.',
    },

    4: {
      level: 4,
      summary: 'Advanced health literacy integrates critical appraisal of diagnostic data, pharmacovigilance, medicolegal consent frameworks, and structural payer system navigation.',
      explanation: `## Advanced Health Literacy

### Terminology — Systematic Deconstruction
Organ roots: Cardi/o (heart), Hepat/o (liver), Nephr/o (kidney), Neur/o (nerve), Pulmon/o (lung). Procedural suffixes: -scopy (examination), -graphy (imaging), -plasty (repair), -stomy (opening), -tomy (incision).

### Lab Medicine — Advanced Interpretation
Reference ranges represent the central 95% of a healthy population. **Clinical decision limits** (e.g., HbA1c >= 6.5% for diabetes) are outcome-based, distinct from reference ranges. Pre-analytical variables (fasting, hemolysis, diurnal variation) affect accuracy. **Bayesian reasoning**: pre-test probability determines the predictive value of any result.

### Pharmacovigilance
Pharmacokinetics: bioavailability, half-life, steady state, first-pass metabolism. Narrow therapeutic index drugs (warfarin, lithium, digoxin) require close monitoring. Adverse events reported via MedWatch/FAERS.

### Informed Consent — Legal Framework
- **Reasonable physician standard**: what a competent physician would disclose
- **Reasonable patient standard**: what a reasonable patient would want to know
- **Subjective patient standard**: what this specific patient needs

**Exceptions**: emergency, therapeutic privilege, patient waiver, incapacity. **Capacity** (clinical) differs from **competency** (legal/court-determined).

### Insurance — Advanced Navigation
**Appeals**: internal appeal, external review, state commissioner complaint, litigation. **Utilization review**: prospective, concurrent, retrospective. **No Surprises Act** protects against balance billing for emergency services. **Organizational health literacy** is recognized alongside individual health literacy by the National Academy of Medicine.`,
      keyTerms: [
        { term: 'positive predictive value', definition: 'Probability that a positive test result indicates true disease; varies with prevalence' },
        { term: 'narrow therapeutic index', definition: 'Drug where small dose changes can cause toxicity or therapeutic failure' },
        { term: 'therapeutic privilege', definition: 'Rare exception allowing providers to withhold information if disclosure would harm the patient' },
        { term: 'organizational health literacy', definition: 'The degree to which organizations enable individuals to find and use health information' },
        { term: 'FAERS', definition: 'FDA Adverse Event Reporting System — post-market safety surveillance database' },
      ],
      clinicalNotes: 'Healthy People 2030 redefined health literacy to include organizational health literacy. Universal precautions: assume all patients may have difficulty and design communication accordingly.',
    },

    5: {
      level: 5,
      summary: 'Expert health literacy encompasses evidence appraisal, pharmacogenomics, medicolegal consent doctrine, payer policy expertise, and systems-level health literacy interventions.',
      explanation: `## Expert Health Literacy

### Terminology — Clinical Application
Expert-level usage includes eponyms (Virchow triad, Cushing syndrome), evolving nomenclature shifts from eponymous to descriptive naming, and systematic combining forms for rapid differential construction.

### Lab Medicine — Expert Interpretation
**Pattern recognition**: AST/ALT > 2:1 with elevated GGT suggests alcoholic liver disease; low MCV + high RDW + low ferritin confirms iron deficiency anemia; elevated anion gap with low bicarb localizes metabolic acidosis.

**Assay awareness**: immunoassay cross-reactivity (biotin-troponin interference), mass spec vs. immunoassay concordance, reference change value (RCV) for distinguishing true clinical change from analytical variation.

**Emerging**: liquid biopsy, pharmacogenomic panels, cell-free fetal DNA, multi-cancer early detection.

### Expert Pharmacology
**Pharmacogenomics**: CYP2D6 poor metabolizers (codeine, tamoxifen), CYP2C19 (clopidogrel, PPIs), HLA-B*5701 (abacavir screening), DPYD (fluoropyrimidine toxicity).

**Deprescribing (CEASE)**: Current meds, Essential ones, Adverse effects, Simplify, Educate.

### Consent Doctrine
Canterbury v. Spence (1972) established the reasonable patient standard. Montgomery v. Lanarkshire (2015) refined it further. Special populations: mature minor doctrine, IRB oversight for research, advance psychiatric directives, supported decision-making vs. substituted judgment.

### Payer Systems — Expert
Value-based models: ACOs, bundled payments, capitation, HCC risk adjustment. Regulatory: ERISA preemption, Mental Health Parity Act, ACA Essential Health Benefits. **Financial toxicity** is a recognized treatment side effect in oncology.

### Systems-Level Interventions
Plain language mandates (6th-grade level), universal teach-back, WCAG 2.1 AA digital accessibility, patient advisory councils. Validated instruments: HLQ (9 domains), HLS-EU. WHO Shanghai Declaration (2016) designates health literacy as a critical health determinant.`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response, guiding individualized prescribing', relatedTerms: ['CYP450', 'precision medicine'] },
        { term: 'reference change value', definition: 'Minimum difference between sequential results representing true clinical change beyond variation', relatedTerms: ['RCV'] },
        { term: 'financial toxicity', definition: 'Negative impact of treatment costs on patient well-being, recognized as a treatment side effect' },
        { term: 'mature minor doctrine', definition: 'Legal principle allowing sufficiently mature minors to consent to treatment independently' },
        { term: 'deprescribing', definition: 'Planned, supervised process of reducing or stopping medications no longer beneficial or causing harm' },
      ],
      clinicalNotes: `Expert competencies: universal health literacy precautions, organizational literacy assessment (AHRQ toolkit), pharmacogenomic integration, medicolegal consent nuances, financial toxicity screening, systems-level interventions, validated instrument use (NVS, REALM, HLQ).`,
    },
  },

  media: [],

  citations: [
    {
      id: 'nih-health-literacy-2024',
      type: 'website',
      title: 'Health Literacy',
      source: 'National Institutes of Health',
      url: 'https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/clear-communication/health-literacy',
    },
    {
      id: 'ahrq-health-literacy-toolkit',
      type: 'website',
      title: 'AHRQ Health Literacy Universal Precautions Toolkit',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions/index.html',
    },
    {
      id: 'kutner-2006-naal',
      type: 'article',
      title: 'The Health Literacy of America\'s Adults: Results from the 2003 National Assessment of Adult Literacy',
      authors: ['Kutner M', 'Greenberg E', 'Jin Y', 'Paulsen C'],
      source: 'National Center for Education Statistics',
      url: 'https://nces.ed.gov/pubs2006/2006483.pdf',
    },
    {
      id: 'no-surprises-act-cms',
      type: 'website',
      title: 'No Surprises Act',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/nosurprises',
    },
  ],

  crossReferences: [
    { targetId: 'concept-health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
    { targetId: 'concept-understanding-medical-jargon', targetType: 'concept', relationship: 'related', label: 'Understanding Medical Jargon' },
    { targetId: 'concept-doctor-patient-communication', targetType: 'concept', relationship: 'sibling', label: 'Doctor-Patient Communication' },
    { targetId: 'concept-asking-questions-effectively', targetType: 'concept', relationship: 'related', label: 'Asking Questions Effectively' },
  ],

  tags: {
    systems: ['patient-communication'],
    topics: ['health-literacy', 'patient-education', 'medical-terminology', 'lab-results', 'prescriptions', 'informed-consent', 'health-insurance'],
    clinicalRelevance: 'critical',
    keywords: ['health literacy', 'medical jargon', 'lab results', 'prescription reading', 'consent forms', 'health insurance', 'Ask Me 3', 'pharmacogenomics'],
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default healthLiteracy;
