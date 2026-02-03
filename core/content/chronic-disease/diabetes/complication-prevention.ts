/**
 * Complication Prevention - Diabetes Management
 *
 * Teaching patients about preventing long-term complications
 * of diabetes including eye, kidney, nerve, and heart disease.
 */

import { EducationalContent } from '../../types';

export const COMPLICATION_PREVENTION: EducationalContent = {
  id: 'diabetes-complication-prevention',
  type: 'concept',
  name: 'Diabetes Complication Prevention',
  alternateNames: ['Preventing diabetes complications', 'Long-term diabetes care', 'Diabetes health maintenance'],

  levels: {
    1: {
      level: 1,
      summary: 'Taking good care of your diabetes every day helps prevent serious problems with your eyes, kidneys, nerves, and heart later on.',
      explanation: `**What Are Diabetes Complications?**
Over time, high blood sugar can damage different parts of your body. These problems are called complications. The good news is that most can be prevented or delayed with good diabetes care!

**Main Complications to Prevent:**

*Eye Problems (Retinopathy):*
- High blood sugar can damage blood vessels in your eyes
- Can lead to vision problems or blindness
- Prevention: Keep blood sugar controlled, get annual eye exams

*Kidney Problems (Nephropathy):*
- High blood sugar can damage the filters in your kidneys
- Can lead to kidney failure
- Prevention: Control blood sugar and blood pressure

*Nerve Problems (Neuropathy):*
- High blood sugar can damage nerves, especially in feet and hands
- Can cause numbness, tingling, or pain
- Prevention: Good blood sugar control, foot care

*Heart and Blood Vessel Problems:*
- Diabetes increases risk of heart attack and stroke
- Also affects blood flow to legs and feet
- Prevention: Control blood sugar, blood pressure, and cholesterol

**The ABCs of Diabetes Prevention:**

| Letter | Stands For | Goal |
|--------|------------|------|
| A | A1C | Usually less than 7% (ask your doctor) |
| B | Blood pressure | Usually less than 130/80 |
| C | Cholesterol | LDL usually less than 100 |
| s | Stop smoking | Quit smoking completely |

**Important Check-ups:**

*Annual:*
- Eye exam (with dilation)
- Foot exam
- Kidney function test (blood and urine)
- Flu shot

*Every Visit:*
- Blood pressure check
- Weight check
- Foot check
- Talk about any problems

**Daily Prevention Steps:**
1. Take your medicines as prescribed
2. Check your blood sugar
3. Eat healthy foods
4. Stay active
5. Don't smoke
6. Check your feet
7. Brush and floss your teeth

**Remember:** Prevention works! People who manage their diabetes well can live long, healthy lives without serious complications.`,
      keyTerms: [
        { term: 'complications', definition: 'Health problems that develop over time because of diabetes' },
        { term: 'retinopathy', definition: 'Damage to the blood vessels in the eyes from diabetes' },
        { term: 'nephropathy', definition: 'Kidney damage from diabetes' },
        { term: 'neuropathy', definition: 'Nerve damage from diabetes' },
      ],
      analogies: [
        'Think of blood sugar control like maintaining your car - regular oil changes (good control) prevent the engine (your body) from breaking down later.',
        'High blood sugar is like rust - it slowly damages things over time if you don\'t protect against it.',
      ],
      examples: [
        'Maria has had diabetes for 15 years. She keeps her A1C around 7%, gets her annual exams, and has not developed any complications.',
        'After learning about complications, Tom got more serious about his diabetes care. His eye doctor says his eyes look great.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes complications result from prolonged hyperglycemia damaging blood vessels and nerves. Prevention requires comprehensive management of glucose, blood pressure, lipids, and regular screening.',
      explanation: `**Understanding Diabetes Complications:**

Diabetes complications are categorized as:
- **Microvascular:** Damage to small blood vessels (eyes, kidneys, nerves)
- **Macrovascular:** Damage to large blood vessels (heart, brain, legs)

Both types are linked to duration of diabetes and degree of blood glucose control.

**Microvascular Complications:**

*Diabetic Retinopathy:*
| Stage | Description | Symptoms |
|-------|-------------|----------|
| Non-proliferative (early) | Microaneurysms, small bleeds | Often none |
| Proliferative | New blood vessel growth | Vision changes, floaters |
| Macular edema | Swelling at macula | Blurry central vision |

Prevention: A1C control, annual dilated eye exams, blood pressure control

*Diabetic Nephropathy:*
| Stage | Characteristics |
|-------|-----------------|
| Normal | Normal kidney function, no protein in urine |
| Early | Microalbuminuria (small amounts of protein) |
| Moderate | Macroalbuminuria, declining function |
| Advanced | Kidney failure, dialysis needed |

Prevention: A1C <7%, BP <130/80, ACE inhibitor or ARB if indicated

*Diabetic Neuropathy:*
| Type | Affects | Symptoms |
|------|---------|----------|
| Peripheral | Feet/hands | Numbness, tingling, pain |
| Autonomic | Internal organs | Digestion, heart rate, bladder issues |
| Proximal | Thighs, hips | Weakness, pain |
| Focal | Single nerves | Sudden weakness or pain |

Prevention: Good glucose control, foot care, avoiding alcohol excess

**Macrovascular Complications:**

*Cardiovascular Disease:*
People with diabetes have 2-4 times higher risk of:
- Heart attack
- Stroke
- Peripheral artery disease

Prevention: Control all risk factors (glucose, BP, lipids, weight), don't smoke

**Comprehensive Prevention Strategy:**

*Glucose Management:*
- A1C target: <7% for most (individualized)
- Monitor blood glucose regularly
- Medication adherence
- Healthy diet and exercise

*Blood Pressure Control:*
- Target: <130/80 mmHg for most
- Home monitoring recommended
- Lifestyle measures (sodium restriction, weight management)
- Medications as needed (ACE inhibitors/ARBs first-line)

*Lipid Management:*
- Statin therapy for most adults with diabetes >40 years
- LDL target based on cardiovascular risk
- Lifestyle measures support medication

*Lifestyle Factors:*
| Factor | Recommendation |
|--------|----------------|
| Smoking | Complete cessation |
| Physical activity | 150+ min/week moderate intensity |
| Diet | Mediterranean or DASH pattern beneficial |
| Alcohol | Moderate if any |
| Weight | 5-10% loss if overweight |

**Screening Schedule:**

| Complication | Screening Test | Frequency |
|--------------|----------------|-----------|
| Retinopathy | Dilated eye exam | Annual (Type 2: at diagnosis; Type 1: within 5 years) |
| Nephropathy | Urine albumin, eGFR | Annual |
| Neuropathy | Foot exam, monofilament | Annual |
| Cardiovascular | BP, lipids, history | Each visit/annual |

**Medications for Prevention:**
- **Statins:** Cardiovascular protection
- **ACE inhibitors/ARBs:** Kidney and heart protection
- **Aspirin:** For some patients with elevated CV risk (discuss with provider)
- **SGLT2 inhibitors/GLP-1 RA:** Cardiorenal benefits beyond glucose`,
      keyTerms: [
        { term: 'microvascular', definition: 'Relating to small blood vessels; diabetes affects these in eyes, kidneys, and nerves' },
        { term: 'macrovascular', definition: 'Relating to large blood vessels; diabetes increases risk of heart attack and stroke' },
        { term: 'microalbuminuria', definition: 'Small amounts of protein in urine indicating early kidney damage' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; blood test measuring kidney function' },
        { term: 'ACE inhibitor', definition: 'Blood pressure medication that also protects kidneys in diabetes' },
      ],
      analogies: [
        'Diabetes complications develop like plaque on teeth - slowly over time if you don\'t take daily preventive action. Regular check-ups catch problems early.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prevention of diabetes complications requires evidence-based management targeting glycemic control, cardiovascular risk factors, and organ-specific protection, supported by systematic screening protocols and multidisciplinary care.',
      explanation: `**Pathophysiology of Diabetes Complications:**

*Mechanisms of Hyperglycemic Damage:*
1. **Polyol pathway:** Sorbitol accumulation, osmotic stress
2. **Advanced glycation end-products (AGEs):** Protein cross-linking, inflammation
3. **Protein kinase C activation:** Vascular dysfunction
4. **Hexosamine pathway:** Altered gene expression
5. **Oxidative stress:** Free radical damage

*Vascular Pathology:*
- Endothelial dysfunction
- Basement membrane thickening
- Loss of pericytes
- Abnormal angiogenesis

**Evidence-Based Prevention:**

*Glycemic Control Evidence:*
| Trial | Population | Finding |
|-------|------------|---------|
| DCCT | Type 1 | Intensive control reduced microvascular complications ~60% |
| UKPDS | Type 2 | Each 1% A1C reduction: 37% microvascular, 14% MI reduction |
| ACCORD | Type 2, high CV risk | Intensive control (A1C 6.4%) increased mortality |
| ADVANCE | Type 2, high CV risk | Intensive control reduced nephropathy |

*Key Takeaways:*
- Lower A1C reduces microvascular complications
- Benefit extends to macrovascular disease, especially early in diabetes
- Aggressive targets may increase harm in some patients
- Individualized targets essential

**Comprehensive Risk Factor Management:**

*Blood Pressure Targets and Treatment:*
| Organization | Target | First-Line Medication |
|--------------|--------|----------------------|
| ADA | <130/80 | ACE inhibitor or ARB |
| ACC/AHA | <130/80 | ACE inhibitor or ARB |

*Rationale for ACE-I/ARB:*
- Reduce intraglomerular pressure
- Decrease albuminuria progression
- Cardiovascular protection
- Continue even if creatinine rises <30%

*Lipid Management:*
| Risk Level | Statin Intensity | LDL Target |
|------------|------------------|------------|
| Age 40-75, no ASCVD | Moderate | <100 mg/dL |
| Age 40-75 with ASCVD | High | <70 mg/dL |
| Very high risk | High + ezetimibe/PCSK9i | <55 mg/dL |

**Cardiorenal Protection:**

*SGLT2 Inhibitors:*
- Cardiovascular outcome benefit (empagliflozin, canagliflozin, dapagliflozin)
- Heart failure hospitalization reduction
- CKD progression slowing
- Independent of glucose lowering

*GLP-1 Receptor Agonists:*
- Cardiovascular outcome benefit (liraglutide, semaglutide, dulaglutide)
- Weight reduction
- Possible nephroprotection

*Prescribing Considerations:*
\`\`\`
Patient with Diabetes + ASCVD or High CV Risk
                ↓
        Consider SGLT2i or GLP-1 RA with proven CV benefit
                ↓
Patient with Diabetes + CKD or HF
                ↓
        Prefer SGLT2i with evidence in these populations
\`\`\`

**Screening and Early Detection:**

*Retinopathy Screening:*
- Dilated fundoscopic exam or retinal photography
- AI-assisted screening emerging
- Frequency based on findings and risk

*Nephropathy Screening:*
- Spot urine albumin-to-creatinine ratio (UACR)
- Serum creatinine with eGFR
- Staging guides intervention intensity

*Neuropathy Assessment:*
- Annual comprehensive foot exam
- 10-g monofilament testing
- 128-Hz tuning fork
- Ankle reflexes

**Integrated Care Model:**

*Team Components:*
- Primary care provider
- Endocrinologist
- Ophthalmologist
- Nephrologist
- Podiatrist
- Diabetes educator
- Dietitian

*Care Coordination:*
- Shared electronic records
- Regular communication
- Clear referral pathways
- Patient engagement and navigation`,
      keyTerms: [
        { term: 'advanced glycation end-products (AGEs)', definition: 'Proteins modified by glucose that accumulate and cause tissue damage in diabetes' },
        { term: 'endothelial dysfunction', definition: 'Impaired function of blood vessel lining, early step in vascular complications' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; includes coronary artery disease, stroke, peripheral arterial disease' },
        { term: 'SGLT2 inhibitor', definition: 'Diabetes medication that blocks glucose reabsorption in kidney with cardiovascular and renal benefits' },
        { term: 'GLP-1 receptor agonist', definition: 'Diabetes medication mimicking incretin hormone with cardiovascular benefits' },
      ],
      clinicalNotes: 'SGLT2 inhibitors and GLP-1 receptor agonists have transformed diabetes care with cardiovascular and renal benefits beyond glycemic control. Prescribe these agents preferentially in patients with established ASCVD, heart failure, or CKD. ACE-I/ARB remain foundational for nephroprotection.',
    },
    4: {
      level: 4,
      summary: 'Diabetes complication prevention integrates molecular pathophysiology understanding, risk stratification algorithms, precision medicine approaches, and systems-level interventions to optimize outcomes across the spectrum of diabetes-related end-organ damage.',
      explanation: `**Molecular Mechanisms of Complications:**

*Unified Theory (Brownlee Hypothesis):*
\`\`\`
Hyperglycemia
      ↓
Mitochondrial Superoxide Overproduction
      ↓
Inhibition of GAPDH
      ↓
Upstream Metabolite Accumulation
      ↓
Activation of Damaging Pathways:
- Polyol pathway
- AGE formation
- PKC activation
- Hexosamine pathway
\`\`\`

*Epigenetic Mechanisms:*
- Hyperglycemic memory
- Histone modifications
- DNA methylation changes
- Non-coding RNA alterations
- Persistent pathway activation even after normoglycemia

**Risk Stratification:**

*Retinopathy Risk Assessment:*
| Factor | Risk Increase |
|--------|---------------|
| Duration >10 years | 3-4x |
| A1C >9% | 2-3x |
| Hypertension | 2x |
| Nephropathy | 2x |
| Pregnancy | Variable |

*Nephropathy Progression Prediction:*
- Baseline eGFR trajectory
- Albuminuria degree
- Blood pressure control
- Glycemic control
- Genetic factors

*Cardiovascular Risk Calculation:*
- ASCVD Risk Calculator
- UKPDS Risk Engine
- Pooled Cohort Equations
- Integration of diabetes-specific factors

**Precision Medicine Approaches:**

*Pharmacogenomics:*
| Gene | Drug | Clinical Application |
|------|------|---------------------|
| CYP2C9 | Sulfonylureas | Dose adjustment |
| SLCO1B1 | Statins | Myopathy risk |
| HLA | Abacavir | Avoid if positive (if HIV comorbidity) |

*Biomarker-Guided Therapy:*
- BNP/NT-proBNP for heart failure risk
- Troponin for CV risk
- KIM-1, NGAL for kidney injury
- Emerging proteomics/metabolomics panels

**Advanced Therapeutic Strategies:**

*Residual Risk Reduction:*
\`\`\`
After Statin Therapy:
- Elevated TG → Consider fibrate, omega-3, or pemafibrate
- Elevated LDL → Add ezetimibe or PCSK9 inhibitor
- Elevated Lp(a) → Antisense therapy (investigational)
- Inflammation (hsCRP) → Consider low-dose colchicine
\`\`\`

*Novel Therapeutic Targets:*
| Target | Approach | Stage |
|--------|----------|-------|
| RAGE (AGE receptor) | Inhibitors | Phase 2 |
| PKC-beta | Ruboxistaurin | Phase 3 (failed) |
| Aldose reductase | Inhibitors | Mixed results |
| Oxidative stress | Antioxidants | Clinical trials |
| Inflammation | IL-1 inhibitors | Phase 3 |

**Systems-Level Interventions:**

*Population Health Approaches:*
- Registry-based outreach
- Automated screening reminders
- Care gap identification
- Quality metric tracking
- Social determinants assessment

*Value-Based Care:*
| Metric | Target |
|--------|--------|
| A1C <8% | >60-70% of patients |
| BP <140/90 | >70-80% |
| Statin use (appropriate patients) | >75% |
| Annual eye exam | >60% |
| Annual nephropathy screening | >80% |

**Complication Management Integration:**

*When Complications Develop:*
\`\`\`
Complication Identified
        ↓
Specialized Evaluation (ophthalmology, nephrology, etc.)
        ↓
Intensified Risk Factor Management
        ↓
Organ-Specific Treatment
        ↓
Ongoing Monitoring and Adjustment
        ↓
Coordination with Primary/Diabetes Care
\`\`\`

*Preventing Progression:*
- Early detection through screening
- Aggressive multifactorial intervention
- Specialist co-management
- Patient engagement and education`,
      keyTerms: [
        { term: 'hyperglycemic memory', definition: 'Persistent vascular damage from prior hyperglycemia despite subsequent improved control' },
        { term: 'RAGE', definition: 'Receptor for advanced glycation end-products; mediates inflammatory signaling' },
        { term: 'residual risk', definition: 'Cardiovascular risk remaining after standard risk factor treatment' },
        { term: 'PCSK9 inhibitor', definition: 'Powerful LDL-lowering injection therapy for high-risk patients' },
        { term: 'biomarker-guided therapy', definition: 'Using measurable indicators to individualize treatment decisions' },
      ],
      clinicalNotes: 'Hyperglycemic memory provides rationale for early intensive therapy. Residual cardiovascular risk after standard treatment drives exploration of additional therapies. Precision medicine approaches remain largely research-based in diabetes complications. Systems-level interventions are essential for population-level complication prevention.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art diabetes complication prevention leverages precision phenotyping, multi-omics profiling, artificial intelligence-driven risk prediction, regenerative medicine, and learning health system approaches to transform prevention paradigms.',
      explanation: `**Precision Phenotyping:**

*Disease Heterogeneity Recognition:*
\`\`\`
Traditional View: Type 1 vs Type 2
        ↓
Modern Phenotyping:
- Cluster analysis identifies 5+ subtypes
- Different complication trajectories
- Variable treatment responses
- Personalized risk profiles
\`\`\`

*Ahlqvist Clustering (ANDIS Study):*
| Cluster | Characteristics | Complication Profile |
|---------|-----------------|---------------------|
| SAID | Autoimmune, insulin deficient | Retinopathy, ketoacidosis |
| SIDD | Insulin deficient | Retinopathy, nephropathy |
| SIRD | Insulin resistant | Nephropathy, fatty liver |
| MOD | Obesity-related | Moderate across spectrum |
| MARD | Age-related, mild | Lower overall risk |

**Multi-Omics Integration:**

*Comprehensive Profiling:*
\`\`\`
Genomics (inherited risk variants)
         ↓
Epigenomics (gene regulation changes)
         ↓
Transcriptomics (gene expression)
         ↓
Proteomics (protein levels)
         ↓
Metabolomics (metabolite profiles)
         ↓
Integration → Individual Risk Profile
         ↓
Personalized Prevention Strategy
\`\`\`

*Emerging Biomarkers:*
| Biomarker Class | Examples | Application |
|-----------------|----------|-------------|
| Proteomics | TNF receptor, KIM-1 | CKD progression prediction |
| Metabolomics | Tryptophan metabolites | CV risk |
| Circulating miRNA | miR-126, miR-21 | Vascular disease |
| Inflammatory | GDF-15, sST2 | Multiple complications |

**Artificial Intelligence Applications:**

*Risk Prediction Models:*
- Deep learning for retinopathy screening
- Machine learning for CKD progression
- CV risk refinement algorithms
- Integrated multi-complication prediction

*Image Analysis:*
\`\`\`
Retinal Imaging AI:
- Diabetic retinopathy grading
- Referral recommendations
- CV risk assessment from retinal vessels
- Nephropathy risk prediction

Accuracy: Approaching or exceeding specialists
Deployment: FDA-approved systems available
\`\`\`

**Regenerative Medicine:**

*Current and Emerging Approaches:*
| Complication | Approach | Status |
|--------------|----------|--------|
| Retinopathy | Anti-VEGF, laser, vitrectomy | Standard of care |
| Retinopathy | Cell-based therapy | Clinical trials |
| Nephropathy | Cell therapy | Early phase trials |
| Neuropathy | Growth factors | Mixed results |
| Foot ulcers | Stem cells, bioengineered skin | Clinical trials |

*Beta Cell Replacement:*
- Islet transplantation
- Stem cell-derived beta cells
- Encapsulation technologies
- Immunomodulation approaches

**Learning Health Systems:**

*Continuous Improvement Framework:*
\`\`\`
Clinical Care Data
        ↓
Analytics Platform
        ↓
Pattern Identification
        ↓
Practice Change Implementation
        ↓
Outcome Measurement
        ↓
Cycle Refinement
\`\`\`

*Real-World Evidence:*
- EHR-based outcome research
- Registry data utilization
- Pragmatic trial integration
- Quality metric evolution

**Global Health Perspectives:**

*Burden Distribution:*
- 80% of diabetes deaths in low/middle-income countries
- Limited screening access
- Delayed diagnosis
- Inadequate treatment availability

*Scalable Interventions:*
- AI-based screening (retinal, foot)
- Telemedicine networks
- Task-shifting protocols
- Essential medicines access
- Policy and systems strengthening

**Future Directions:**

*Research Priorities:*
- Precision prevention trials
- Novel therapeutic targets
- AI clinical validation
- Implementation science
- Health equity interventions

*Paradigm Evolution:*
\`\`\`
Past: One-size-fits-all targets and screening
         ↓
Present: Risk-stratified approach
         ↓
Future: Precision prevention
- Individual risk profiles
- Personalized targets
- Tailored interventions
- Adaptive monitoring
- Predictive prevention
\`\`\``,
      keyTerms: [
        { term: 'disease clustering', definition: 'Data-driven identification of diabetes subtypes with distinct risk profiles' },
        { term: 'multi-omics', definition: 'Integration of genomics, proteomics, metabolomics, and other comprehensive biological data' },
        { term: 'learning health system', definition: 'Healthcare system embedding research into practice for continuous improvement' },
        { term: 'beta cell replacement', definition: 'Therapeutic approach to restore insulin-producing cells through transplant or regeneration' },
        { term: 'GDF-15', definition: 'Growth differentiation factor 15; emerging biomarker for multiple diabetes complications' },
        { term: 'encapsulation', definition: 'Technology protecting transplanted cells from immune attack' },
      ],
      clinicalNotes: 'AI-based retinopathy screening is FDA-approved and expanding access. Multi-omics approaches are research tools evolving toward clinical application. Beta cell replacement remains limited by immune challenges. Health equity must be central to complication prevention strategies. Learning health systems offer framework for continuous improvement in diabetes care quality.',
    },
  },

  media: [
    {
      id: 'complications-overview',
      type: 'diagram',
      filename: 'diabetes-complications-overview.svg',
      title: 'Overview of Diabetes Complications',
      description: 'Visual showing organs affected by diabetes complications',
    },
    {
      id: 'prevention-checklist',
      type: 'diagram',
      filename: 'complication-prevention-checklist.pdf',
      title: 'Complication Prevention Checklist',
      description: 'Patient checklist for preventive care activities',
    },
  ],

  citations: [
    {
      id: 'ada-complications',
      type: 'article',
      title: 'Comprehensive Medical Evaluation and Assessment of Comorbidities',
      source: 'Diabetes Care, American Diabetes Association',
    },
    {
      id: 'dcct-edic',
      type: 'article',
      title: 'DCCT/EDIC Research Group: Long-term Complications',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'diabetes-a1c-targets', targetType: 'topic', relationship: 'related', label: 'A1C Targets' },
    { targetId: 'diabetes-foot-care', targetType: 'topic', relationship: 'related', label: 'Foot Care' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular', 'renal', 'nervous', 'ophthalmologic'],
    topics: ['diabetes', 'complication prevention', 'screening'],
    keywords: ['diabetes complications', 'retinopathy', 'nephropathy', 'neuropathy', 'cardiovascular disease'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
