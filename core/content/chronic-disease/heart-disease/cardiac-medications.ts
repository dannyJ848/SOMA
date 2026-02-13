/**
 * Cardiac Medications - Heart Disease Management
 *
 * Teaching patients about medications for heart disease
 * including purpose, proper use, and side effects.
 */

import { EducationalContent } from '../../types';

export const CARDIAC_MEDICATIONS: EducationalContent = {
  id: 'heart-disease-cardiac-medications',
  type: 'concept',
  name: 'Cardiac Medications',
  alternateNames: ['Heart medications', 'Cardiovascular drugs', 'Heart disease treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart medications help your heart work better, control blood pressure, prevent blood clots, and lower cholesterol. Taking them correctly is very important.',
      explanation: `**Why Heart Medications Matter**
Heart medications help:
- Make your heart pump better
- Keep blood pressure normal
- Prevent blood clots
- Lower cholesterol
- Reduce strain on your heart

**Common Types of Heart Medications:**

*Blood Pressure Pills:*
- ACE inhibitors (lisinopril, enalapril) - Relax blood vessels
- Beta-blockers (metoprolol, carvedilol) - Slow heart rate
- Calcium channel blockers (amlodipine) - Relax blood vessels

*Water Pills (Diuretics):*
- Help remove extra fluid
- Reduce swelling
- Examples: furosemide (Lasix), hydrochlorothiazide

*Blood Thinners:*
- Prevent blood clots
- Aspirin, warfarin (Coumadin), newer options (Eliquis, Xarelto)

*Cholesterol Medications:*
- Statins (atorvastatin, rosuvastatin) lower bad cholesterol
- Help prevent heart attacks and strokes

**Tips for Taking Your Medications:**

| Do | Don't |
|----|----|
| Take at the same time each day | Stop taking without asking your doctor |
| Use a pill box | Double up if you miss a dose |
| Keep a list of all medications | Take someone else's medication |
| Refill before running out | Crush pills unless told it's OK |

**Side Effects to Watch For:**
- Dizziness when standing up
- Unusual tiredness
- Swelling in ankles
- Unusual bleeding or bruising
- Rash or itching

**Call your doctor if you have side effects - don't just stop taking your medicine!**

**Questions to Ask Your Doctor:**
- What does this medicine do?
- When should I take it?
- Should I take it with food?
- What side effects should I watch for?
- Can I take it with my other medicines?`,
      keyTerms: [
        { term: 'blood thinner', definition: 'Medicine that helps prevent blood clots' },
        { term: 'diuretic', definition: 'Water pill that helps your body get rid of extra fluid' },
        { term: 'statin', definition: 'Medicine that lowers cholesterol' },
        { term: 'side effect', definition: 'Unwanted effect of a medicine' },
      ],
      analogies: [
        'Heart medications are like a team working together - each one has a different job, but they all help keep your heart healthy.',
        'Taking your medications every day is like watering a plant daily - you need to do it regularly for the best results.',
      ],
      examples: [
        'Tom takes his blood pressure medicine every morning with breakfast. He uses a weekly pill box to remember if he took it.',
        'Maria was feeling dizzy from her new medicine. She called her doctor instead of stopping it, and they adjusted her dose.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac medications include multiple drug classes that reduce symptoms, prevent complications, and improve survival in heart disease. Understanding their purposes and proper use is essential for optimal outcomes.',
      explanation: `**Categories of Cardiac Medications:**

*1. Blood Pressure Medications:*

| Drug Class | Examples | How They Work |
|------------|----------|---------------|
| ACE Inhibitors | Lisinopril, enalapril | Block angiotensin, relax vessels |
| ARBs | Losartan, valsartan | Block angiotensin receptor |
| Beta-blockers | Metoprolol, carvedilol | Slow heart, reduce workload |
| Calcium Channel Blockers | Amlodipine, diltiazem | Relax blood vessels |
| Diuretics | Furosemide, HCTZ | Remove excess fluid |

*2. Heart Failure Medications:*
- ACE inhibitors/ARBs - Improve survival
- Beta-blockers - Improve survival
- Aldosterone antagonists (spironolactone) - Reduce hospitalizations
- SGLT2 inhibitors (dapagliflozin) - Reduce hospitalizations and death
- Diuretics - Relieve symptoms

*3. Anticoagulants (Blood Thinners):*

| Type | Examples | Uses |
|------|----------|------|
| Antiplatelet | Aspirin, clopidogrel | After heart attack, stents |
| Warfarin | Coumadin | Atrial fibrillation, valve disease |
| DOACs | Apixaban, rivaroxaban | Atrial fibrillation, blood clots |

*4. Cholesterol Medications:*
- Statins (first-line): atorvastatin, rosuvastatin
- Ezetimibe: Add-on therapy
- PCSK9 inhibitors: For high-risk patients

*5. Other Important Medications:*
- Nitrates: Relieve chest pain (angina)
- Digoxin: Heart failure, rate control
- Antiarrhythmics: Control irregular heartbeats

**Medication Adherence:**

*Why It Matters:*
- Medications only work if taken regularly
- Stopping suddenly can be dangerous
- Many heart medications prevent problems you can't feel

*Strategies for Success:*
| Strategy | How It Helps |
|----------|--------------|
| Pill organizers | Visual reminder if taken |
| Smartphone alarms | Time-based reminders |
| Linking to routine | Builds habit |
| Refill reminders | Prevents running out |
| Understanding purpose | Increases motivation |

**Common Side Effects by Class:**

| Drug Class | Watch For |
|------------|-----------|
| ACE inhibitors | Dry cough, high potassium |
| Beta-blockers | Fatigue, slow heart rate, cold hands |
| Diuretics | Frequent urination, low potassium |
| Statins | Muscle aches |
| Blood thinners | Bleeding, bruising |

**Drug Interactions:**
- Always tell doctors about all medications
- Watch for interactions with over-the-counter drugs
- Some foods interact (grapefruit with statins, vitamin K with warfarin)
- Herbal supplements can interact

**When to Contact Healthcare Provider:**
- New or worsening symptoms
- Suspected side effects
- Questions about taking medications
- Before starting any new medications
- Difficulty affording medications`,
      keyTerms: [
        { term: 'ACE inhibitor', definition: 'Blood pressure medication that blocks angiotensin-converting enzyme, relaxing blood vessels' },
        { term: 'beta-blocker', definition: 'Medication that slows heart rate and reduces blood pressure by blocking adrenaline effects' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer blood thinner that doesn\'t require regular blood tests' },
        { term: 'adherence', definition: 'Taking medications correctly as prescribed' },
      ],
      analogies: [
        'Heart medications are like a maintenance crew for your cardiovascular system - each worker (medication) has a specific job that keeps everything running smoothly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Guideline-directed medical therapy for cardiovascular disease encompasses evidence-based medication regimens that improve survival, reduce hospitalizations, and enhance quality of life in conditions such as heart failure, coronary artery disease, and atrial fibrillation.',
      explanation: `**Guideline-Directed Medical Therapy (GDMT):**

Evidence-based medication regimens are cornerstone of cardiovascular disease management.

**Heart Failure with Reduced Ejection Fraction (HFrEF):**

*Foundational Therapy (All Patients):*
| Drug Class | Target Dose Example | Mortality Benefit |
|------------|---------------------|-------------------|
| ACEi/ARB/ARNI | Sacubitril/valsartan 97/103 mg BID | Yes |
| Beta-blocker | Carvedilol 25mg BID | Yes |
| MRA | Spironolactone 25-50mg daily | Yes |
| SGLT2 inhibitor | Dapagliflozin 10mg daily | Yes |

*Additional Therapies:*
- Diuretics for congestion (symptom relief)
- Hydralazine/nitrate in African Americans
- Digoxin for symptom control
- Ivabradine if heart rate >70 despite beta-blocker

**Coronary Artery Disease:**

*Secondary Prevention:*
| Therapy | Purpose | Target |
|---------|---------|--------|
| Aspirin | Antiplatelet | 81mg daily |
| Statin | LDL lowering | LDL <70 mg/dL (high risk <55) |
| ACE inhibitor | CV protection | As tolerated |
| Beta-blocker | Post-MI, angina | Heart rate 50-60 |

*Post-ACS/PCI:*
- Dual antiplatelet therapy (DAPT)
- Duration based on risk/benefit (typically 12 months post-ACS)

**Atrial Fibrillation:**

*Stroke Prevention:*
- CHA₂DS₂-VASc score guides anticoagulation
- DOACs preferred over warfarin in most patients
- Aspirin alone inadequate for stroke prevention

*Rate vs. Rhythm Control:*
- Rate control: Beta-blockers, calcium channel blockers, digoxin
- Rhythm control: Antiarrhythmics, ablation

**Hypertension:**

*Initial Therapy:*
| Compelling Indication | Preferred Class |
|----------------------|-----------------|
| Heart failure | ACEi/ARB, beta-blocker, MRA |
| Post-MI | ACEi, beta-blocker |
| Diabetes | ACEi/ARB |
| CKD with proteinuria | ACEi/ARB |

**Pharmacokinetics and Titration:**

*General Principles:*
- Start low, go slow (especially in elderly, renal impairment)
- Titrate to target doses when tolerated
- Monitor for side effects and lab abnormalities
- Allow 2-4 weeks between dose adjustments

*Monitoring Requirements:*
| Medication | Monitoring |
|------------|------------|
| ACEi/ARB | Creatinine, potassium (1-2 weeks after start/change) |
| MRA | Potassium (weekly initially) |
| Warfarin | INR (weekly then monthly) |
| Statins | LFTs, CK if symptoms |
| Digoxin | Level, renal function |

**Medication Optimization Challenges:**

*Barriers to GDMT:*
- Hypotension
- Bradycardia
- Renal dysfunction
- Hyperkalemia
- Side effect intolerance
- Polypharmacy
- Cost/access

*Strategies:*
- Sequential titration
- Address barriers systematically
- Consider specialist referral for complex patients
- Utilize pharmacist support`,
      keyTerms: [
        { term: 'guideline-directed medical therapy (GDMT)', definition: 'Evidence-based medication regimens recommended by clinical practice guidelines' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan' },
        { term: 'MRA', definition: 'Mineralocorticoid receptor antagonist; e.g., spironolactone, eplerenone' },
        { term: 'dual antiplatelet therapy (DAPT)', definition: 'Aspirin plus P2Y12 inhibitor (clopidogrel, ticagrelor)' },
        { term: 'CHA₂DS₂-VASc', definition: 'Stroke risk score in atrial fibrillation guiding anticoagulation decisions' },
      ],
      clinicalNotes: 'GDMT for HFrEF now includes four foundational pillars (ARNI/ACEi/ARB, beta-blocker, MRA, SGLT2i). Titrate to target doses as tolerated - benefits are dose-dependent. DOACs are preferred over warfarin for most atrial fibrillation patients. Address barriers to GDMT systematically.',
    },
    4: {
      level: 4,
      summary: 'Cardiovascular pharmacotherapy integrates mechanistic understanding, pharmacokinetic principles, guideline recommendations, and individualized assessment to optimize medication regimens across the spectrum of heart disease.',
      explanation: `**Pharmacological Mechanisms:**

*Neurohormonal Modulation:*
\`\`\`
Heart Failure Neurohormonal Cascade:
Reduced CO → Neurohormonal Activation

RAAS Activation:
- Angiotensin II → Vasoconstriction, sodium retention
- Aldosterone → Fibrosis, potassium wasting
- Targets: ACEi, ARB, ARNI, MRA

Sympathetic Activation:
- Catecholamines → Tachycardia, arrhythmias
- Targets: Beta-blockers

Natriuretic Peptide System:
- ANP, BNP → Vasodilation, natriuresis
- Target: ARNI (enhances NP action)
\`\`\`

*SGLT2 Inhibitor Mechanisms:*
- Glucose excretion (diabetes)
- Natriuresis/volume reduction
- Reduced preload and afterload
- Metabolic effects (ketones as cardiac fuel)
- Anti-inflammatory effects
- Benefits independent of diabetes status

**Evidence-Based Target Doses:**

*HFrEF Foundational Therapies:*
| Drug | Starting Dose | Target Dose | Trial Basis |
|------|--------------|-------------|-------------|
| Sacubitril/valsartan | 24/26 mg BID | 97/103 mg BID | PARADIGM-HF |
| Carvedilol | 3.125 mg BID | 25 mg BID (50 if >85kg) | COPERNICUS |
| Metoprolol succinate | 12.5-25 mg daily | 200 mg daily | MERIT-HF |
| Spironolactone | 12.5-25 mg daily | 25-50 mg daily | RALES |
| Eplerenone | 25 mg daily | 50 mg daily | EMPHASIS-HF |
| Dapagliflozin | 10 mg daily | 10 mg daily | DAPA-HF |
| Empagliflozin | 10 mg daily | 10 mg daily | EMPEROR-Reduced |

**Pharmacogenomics:**

*Clinically Relevant Variants:*
| Gene | Drug | Clinical Impact |
|------|------|-----------------|
| CYP2C19 | Clopidogrel | Poor metabolizers - reduced efficacy |
| SLCO1B1 | Statins | Myopathy risk |
| CYP2D6 | Metoprolol | Variable metabolism |
| VKORC1, CYP2C9 | Warfarin | Dose requirements |

*CPIC Guidelines:*
- Clopidogrel: Consider alternative in CYP2C19 poor metabolizers
- Warfarin: Pharmacogenomic dosing algorithms available

**Drug-Drug and Drug-Disease Interactions:**

*Critical Interactions:*
| Combination | Risk | Management |
|-------------|------|------------|
| ACEi + ARB | Hyperkalemia, renal failure | Avoid combination |
| ACEi/ARB + K-sparing diuretic | Hyperkalemia | Monitor potassium |
| Beta-blocker + verapamil/diltiazem | Bradycardia, heart block | Use cautiously |
| Warfarin + amiodarone | INR elevation | Reduce warfarin dose |
| DOAC + strong CYP3A4/P-gp inhibitors | Bleeding risk | Dose adjustment or avoid |

**Individualized Therapy Approach:**

*Patient Factors:*
\`\`\`
Assessment:
- Hemodynamic status (BP, HR)
- Renal function
- Electrolytes
- Comorbidities
- Medication tolerance
- Cost/access

Titration Strategy:
1. Prioritize mortality-reducing agents
2. Address barriers systematically
3. Reassess after each change
4. Document reasons for suboptimal doses
\`\`\`

**Special Populations:**

*Chronic Kidney Disease:*
- ACEi/ARB: Continue if creatinine rise <30%
- MRA: Caution if GFR <30
- SGLT2i: Benefit demonstrated even in advanced CKD
- DOAC: Dose adjustment required

*Elderly/Frail:*
- Start lower doses
- Slower titration
- Monitor for orthostatic hypotension
- Consider polypharmacy/deprescribing

**Quality Metrics and Implementation:**

*GDMT Quality Measures:*
- Percentage on ARNI/ACEi/ARB
- Percentage on beta-blocker
- Percentage on SGLT2i
- Achievement of target doses

*Barriers and Solutions:*
| Barrier | Intervention |
|---------|--------------|
| Hypotension | Time doses, reduce diuretics |
| Bradycardia | Prioritize agents, reduce dose |
| Hyperkalemia | K binders, dietary counseling |
| Renal dysfunction | Accept modest rise, monitor |`,
      keyTerms: [
        { term: 'neurohormonal modulation', definition: 'Targeting activated hormonal systems (RAAS, sympathetic) that drive heart failure progression' },
        { term: 'pharmacogenomics', definition: 'Using genetic information to guide drug selection and dosing' },
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium; provides gene-drug guidelines' },
        { term: 'target dose', definition: 'Medication dose shown in clinical trials to provide optimal benefit' },
        { term: 'therapeutic inertia', definition: 'Failure to initiate or intensify therapy when indicated' },
      ],
      clinicalNotes: 'Target doses in trials provide greater benefit than lower doses - titrate as tolerated. Pharmacogenomics most actionable for clopidogrel and warfarin. Accept modest creatinine and potassium changes rather than withholding beneficial therapy. SGLT2 inhibitors provide benefit across the CKD spectrum.',
    },
    5: {
      level: 5,
      summary: 'Precision cardiovascular pharmacotherapy integrates multi-omics profiling, advanced pharmacogenomics, digital therapeutics, and artificial intelligence to enable personalized medication selection, dosing, and monitoring.',
      explanation: `**Precision Pharmacotherapy Framework:**

*Multi-Level Personalization:*
\`\`\`
Level 1: Disease Phenotype
- HFrEF vs HFpEF
- Ischemic vs non-ischemic
- Comorbidity profile

Level 2: Clinical Parameters
- Hemodynamics
- Renal function
- Biomarkers

Level 3: Pharmacogenomics
- Metabolism variants
- Transporter variants
- Receptor polymorphisms

Level 4: Multi-omics
- Transcriptomics
- Proteomics
- Metabolomics

Integration → Personalized Regimen
\`\`\`

**Advanced Pharmacogenomics:**

*Beyond CYP2C19:*
| Gene | Drug Class | Clinical Application |
|------|------------|---------------------|
| ADRB1 | Beta-blockers | Response prediction |
| ACE | ACE inhibitors | Efficacy variation |
| AGTR1 | ARBs | Response heterogeneity |
| SLC6A4 | Antiarrhythmics | Proarrhythmia risk |
| CETP | Statins/CETP inhibitors | LDL response |

*Polygenic Risk Scores:*
- Aggregate multiple variants
- Predict drug response probability
- Guide medication selection
- Research to clinical translation ongoing

**Drug Response Biomarkers:**

*Therapeutic Monitoring Beyond Traditional:*
| Biomarker | Application |
|-----------|-------------|
| NT-proBNP trajectory | HF therapy response |
| Troponin changes | Cardioprotection assessment |
| Inflammatory markers | Anti-inflammatory effect |
| Metabolomics panels | Metabolic drug effects |

*Liquid Biopsy Approaches:*
- Circulating miRNA
- Cell-free DNA
- Exosomes
- Early response/toxicity signals

**Digital Therapeutics Integration:**

*Medication Management Apps:*
\`\`\`
Functions:
- Reminder systems
- Side effect tracking
- Vital sign integration
- Adherence measurement
- Refill coordination

AI Enhancement:
- Personalized reminders
- Pattern recognition
- Risk prediction
- Intervention triggers
\`\`\`

*Smart Packaging:*
- Tracked pill dispensing
- Real-time adherence data
- Integration with EHR
- Feedback loops

**AI in Pharmacotherapy:**

*Treatment Optimization:*
| Application | Approach |
|-------------|----------|
| Dose prediction | ML from pharmacokinetic data |
| Drug selection | Pattern matching outcomes |
| Interaction detection | NLP of medication lists |
| Adherence prediction | Behavioral modeling |

*Clinical Decision Support:*
\`\`\`
Patient Data Input
      ↓
Algorithm Processing
- Guideline recommendations
- Pharmacogenomics
- Drug interactions
- Contraindications
      ↓
Ranked Treatment Options
      ↓
Clinician Review/Override
      ↓
Implementation
\`\`\`

**Novel Therapeutic Targets:**

*Emerging Drug Classes:*
| Target | Drug/Class | Status |
|--------|------------|--------|
| Myosin | Omecamtiv mecarbil | Approved (HFrEF) |
| NLRP3 inflammasome | Colchicine | Approved (CVD) |
| IL-1β | Canakinumab | Proven benefit, not approved |
| Lp(a) | Antisense oligonucleotides | Phase 3 |
| GLP-1 | Semaglutide | Approved (obesity, CV benefit) |

**Implementation Science:**

*GDMT Optimization Programs:*
- Structured titration protocols
- Pharmacist-led management
- Remote monitoring integration
- Quality dashboards
- Feedback loops

*Health System Approaches:*
\`\`\`
EHR Integration:
- CDS alerts for GDMT gaps
- Order sets
- Documentation templates
- Population health tools

Care Redesign:
- Clinic protocols
- Team-based care
- Transition management
- Patient engagement
\`\`\`

**Future Directions:**

*Research Priorities:*
- Phenotype-guided therapy trials
- Pharmacogenomic implementation
- AI algorithm validation
- N-of-1 dose optimization
- Health equity in precision care

*Emerging Paradigms:*
- Adaptive trial designs
- Real-world evidence integration
- Continuous learning health systems
- Patient-reported outcome integration`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate of multiple genetic variants to predict disease or treatment response' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions driven by software' },
        { term: 'omecamtiv mecarbil', definition: 'Cardiac myosin activator improving contractility without increasing oxygen demand' },
        { term: 'clinical decision support', definition: 'Computer-based tools providing patient-specific recommendations to clinicians' },
        { term: 'liquid biopsy', definition: 'Analysis of circulating biomarkers as non-invasive diagnostic or monitoring tool' },
        { term: 'N-of-1 trial', definition: 'Randomized trial within individual patient to determine optimal personal treatment' },
      ],
      clinicalNotes: 'Pharmacogenomic testing is increasingly available but clinical implementation varies. AI-based decision support should augment, not replace, clinical judgment. SGLT2 inhibitors and GLP-1 agonists have expanded indications beyond diabetes. Focus on GDMT optimization remains the highest-yield intervention for most patients.',
    },
  },

  media: [
    {
      id: 'medication-guide',
      type: 'diagram',
      filename: 'cardiac-medication-guide.svg',
      title: 'Common Cardiac Medications Guide',
      description: 'Visual overview of major cardiac medication classes',
    },
    {
      id: 'medication-tracker',
      type: 'diagram',
      filename: 'medication-tracker.pdf',
      title: 'Medication Tracker Template',
      description: 'Printable medication tracking tool',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hf',
      type: 'article',
      title: 'ACC/AHA/HFSA Guideline for the Management of Heart Failure',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'esc-hf',
      type: 'article',
      title: 'ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure',
      source: 'European Heart Journal',
    },
  ],

  crossReferences: [
    { targetId: 'heart-disease-blood-pressure-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Pressure Monitoring' },
    { targetId: 'chronic-disease-medication-adherence', targetType: 'topic', relationship: 'related', label: 'Medication Adherence' },
    { targetId: 'heart-disease-cardiac-warning-signs', targetType: 'topic', relationship: 'related', label: 'Cardiac Warning Signs' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['heart disease', 'medications', 'pharmacotherapy'],
    keywords: ['cardiac medications', 'heart failure drugs', 'blood pressure medications', 'GDMT'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
