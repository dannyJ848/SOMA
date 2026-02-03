import { EducationalContent } from '../../types';

export const APPROPRIATE_ANTIBIOTIC_USE: EducationalContent = {
  id: 'infectious-disease-appropriate-antibiotic-use',
  type: 'concept',
  name: 'Appropriate Antibiotic Use',
  alternateNames: ['Antibiotic Stewardship', 'Antimicrobial Stewardship', 'AMS', 'ASP'],
  levels: {
    1: {
      level: 1,
      summary: 'Appropriate antibiotic use means taking the right antibiotic, at the right dose, for the right amount of time - and only when truly needed.',
      explanation: `Antibiotics are powerful medicines that kill bacteria and save lives. But like all medicines, they should only be used when necessary. Using antibiotics incorrectly can cause problems for you and for everyone.

**When Antibiotics Work:**
Antibiotics work against BACTERIA. They treat infections like:
- Strep throat
- Urinary tract infections
- Skin infections
- Some ear infections
- Bacterial pneumonia

**When Antibiotics DON'T Work:**
Antibiotics do NOT work against VIRUSES. They won't help:
- Common cold
- Most sore throats
- Flu (influenza)
- Most coughs and bronchitis
- COVID-19

Taking antibiotics for viral infections won't make you better, but it can cause harm.

**Why It Matters:**
When antibiotics are overused:
- Bacteria become resistant (harder to kill with antibiotics)
- Future infections become harder to treat
- You may experience side effects for no benefit
- Other people may be affected by resistant bacteria

**How to Use Antibiotics Properly:**
- Only take antibiotics prescribed for you
- Take them exactly as directed
- Finish the entire prescription (unless your doctor tells you otherwise)
- Never share or save antibiotics
- Don't ask for antibiotics if your doctor says you don't need them

**Questions to Ask Your Doctor:**
- Do I really need an antibiotic?
- What can I do to feel better without antibiotics?
- What side effects might I have?
- When should I start feeling better?

**Preventing Infections:**
The best way to reduce antibiotic need is to prevent infections:
- Wash hands frequently
- Stay up to date on vaccines
- Handle food safely
- Stay home when sick`,
      keyTerms: [
        { term: 'Antibiotic', definition: 'Medicine that kills bacteria or stops them from growing' },
        { term: 'Bacteria', definition: 'Tiny organisms that can cause some infections' },
        { term: 'Virus', definition: 'A type of germ smaller than bacteria that causes infections like cold and flu' },
        { term: 'Side effects', definition: 'Unwanted effects from taking medicine' },
      ],
    },
    2: {
      level: 2,
      summary: 'Antimicrobial stewardship promotes optimal antibiotic selection, dosing, and duration to maximize treatment efficacy while minimizing resistance development and adverse effects.',
      explanation: `Antimicrobial stewardship is a coordinated effort to improve antibiotic use. The goal is to ensure that patients receive the right antibiotic, at the right dose, at the right time, and for the right duration.

**The Five Ds of Antibiotic Prescribing:**
1. **Diagnosis**: Is this a bacterial infection requiring antibiotics?
2. **Drug**: Which antibiotic is most appropriate?
3. **Dose**: Is the dose correct for this patient?
4. **Duration**: How long should treatment continue?
5. **De-escalation**: Can we narrow therapy based on results?

**When Antibiotics Are NOT Indicated:**

| Condition | Usual Cause | Antibiotics Needed? |
|-----------|-------------|---------------------|
| Common cold | Viruses | No |
| Acute bronchitis | Usually viruses | Rarely |
| Flu (influenza) | Influenza virus | No (antivirals may help) |
| Most sore throats | Viruses | Only if strep test positive |
| Viral sinusitis | Viruses | No |
| Asymptomatic bacteriuria | Bacteria present, no symptoms | Only in pregnancy or before procedures |

**Choosing the Right Antibiotic:**
- **Narrow spectrum first**: Use targeted antibiotics when possible
- **Consider local resistance patterns**: Check local antibiograms
- **Allergies and interactions**: Review patient's medication list
- **Route of administration**: Oral if appropriate, IV if necessary

**Duration Matters:**
Shorter courses are often as effective and safer:
| Infection | Traditional | Current Evidence |
|-----------|-------------|------------------|
| Uncomplicated UTI | 7-14 days | 3-5 days |
| Community-acquired pneumonia | 10-14 days | 5 days (if stable) |
| Skin/soft tissue infection | 10-14 days | 5-6 days |

**Why Stewardship Matters:**
- Reduces antibiotic resistance
- Decreases *Clostridioides difficile* infections
- Reduces drug costs
- Improves patient outcomes
- Decreases side effects

**What Patients Can Do:**
- Understand that "stronger" antibiotics aren't always better
- Complete prescribed courses
- Report allergies accurately
- Ask about alternatives if antibiotics may not be needed`,
      keyTerms: [
        { term: 'Antimicrobial stewardship', definition: 'A coordinated program to improve antibiotic use and reduce resistance' },
        { term: 'Narrow spectrum', definition: 'An antibiotic that targets specific bacteria rather than many types' },
        { term: 'De-escalation', definition: 'Switching from broad to narrow antibiotic coverage based on test results' },
        { term: 'Antibiogram', definition: 'A summary of local antibiotic resistance patterns to guide prescribing' },
        { term: 'C. difficile', definition: 'A bacterium that causes diarrhea, often after antibiotic use' },
      ],
    },
    3: {
      level: 3,
      summary: 'Antimicrobial stewardship programs implement evidence-based interventions including prospective audit and feedback, formulary restriction, and clinical pathways to optimize antibiotic prescribing and reduce collateral damage.',
      explanation: `Antimicrobial stewardship encompasses systematic approaches to optimize antimicrobial prescribing across healthcare settings.

**Core Elements of Stewardship Programs (CDC):**

*Leadership Commitment:*
- Executive and clinical leadership support
- Resources for stewardship activities
- Integration with quality and safety initiatives

*Accountability:*
- Designated physician and pharmacist leaders
- Defined roles and responsibilities
- Stewardship committee oversight

*Drug Expertise:*
- Clinical pharmacist involvement
- Infectious disease physician support
- Access to consultation

*Actions:*
- Prospective audit and feedback
- Prior authorization
- Facility-specific clinical pathways
- Antibiotic "time-outs"

*Tracking:*
- Antibiotic use metrics (DOT, DDD)
- Resistance patterns
- C. difficile rates
- Clinical outcomes

*Reporting:*
- Regular feedback to prescribers
- Comparison to benchmarks
- Transparent communication

*Education:*
- Ongoing provider education
- Patient education materials
- Competency assessment

**Key Stewardship Interventions:**

*Prospective Audit and Feedback:*
- Pharmacist/ID physician review of prescriptions
- Recommendations provided to prescribers
- Non-restrictive but highly effective
- Requires dedicated personnel

*Formulary Restriction/Prior Authorization:*
- Certain antibiotics require approval
- Reduces use of restricted agents
- Can delay therapy if not implemented well
- Works best for high-risk agents (carbapenems, fluoroquinolones)

*Clinical Pathways:*
- Standardized approaches for common infections
- Evidence-based antibiotic selection
- Defined durations
- Reduces variability

*Automatic Stop Orders:*
- Limits duration of empiric therapy
- Prompts reassessment at defined intervals
- Surgical prophylaxis (24-48 hour stop)

**Optimizing Therapy:**

*IV to Oral Conversion:*
Criteria for switching:
- Improving clinically
- Afebrile 24-48 hours
- Functioning GI tract
- Available oral alternative with good bioavailability

Savings: Cost, nursing time, IV complications, length of stay

*Dose Optimization:*
- Renal function adjustment
- Extended infusions for beta-lactams (time-dependent killing)
- Therapeutic drug monitoring (vancomycin, aminoglycosides)

*Duration Optimization:*
- Evidence supports shorter courses for many infections
- PCT-guided discontinuation reduces antibiotic days
- "Antibiotic time-out" at 48-72 hours

**Collateral Damage:**
Unintended consequences of antibiotics:
- C. difficile infection (highest risk: fluoroquinolones, clindamycin, cephalosporins)
- Resistance selection in commensal flora
- Drug toxicity
- Allergic reactions
- Microbiome disruption

**Stewardship Metrics:**

*Process Measures:*
- Days of therapy (DOT) per 1000 patient-days
- Compliance with clinical pathways
- Time to de-escalation
- IV to oral conversion rates

*Outcome Measures:*
- C. difficile rates
- Resistance trends
- Length of stay
- Mortality`,
      keyTerms: [
        { term: 'Prospective audit and feedback', definition: 'Real-time review of antibiotic prescriptions with recommendations to prescribers' },
        { term: 'Prior authorization', definition: 'Requirement for approval before prescribing certain antibiotics' },
        { term: 'DOT', definition: 'Days of therapy - a metric measuring antibiotic use' },
        { term: 'IV to oral conversion', definition: 'Switching from intravenous to oral antibiotics when clinically appropriate' },
        { term: 'Antibiotic time-out', definition: 'Scheduled reassessment of antibiotic necessity, typically at 48-72 hours' },
      ],
    },
    4: {
      level: 4,
      summary: 'Antimicrobial stewardship integrates diagnostic stewardship, pharmacokinetic/pharmacodynamic optimization, behavioral science interventions, and outcome measurement within a framework addressing both institutional and societal antimicrobial use.',
      explanation: `Advanced stewardship practice requires integration of multiple disciplines and extension beyond traditional acute care settings.

**Diagnostic Stewardship:**

*Concept:*
Optimizing diagnostic testing to guide appropriate antimicrobial therapy:
- Right test, right patient, right time
- Avoiding unnecessary testing that leads to unnecessary treatment

*Applications:*
- Urine cultures: Avoid in asymptomatic patients
- Blood cultures: Appropriate indications and collection
- Respiratory cultures: Distinguish colonization from infection
- Procalcitonin: Guide antibiotic initiation/discontinuation
- Rapid diagnostics: Enable earlier targeted therapy

*Challenges:*
- Culture reflex protocols may over-test
- Positive results often lead to treatment regardless of indication
- Education needed on when NOT to test

**PK/PD Optimization:**

*Principles:*
| Drug Class | PK/PD Target | Optimization Strategy |
|------------|--------------|----------------------|
| Beta-lactams | %T>MIC | Extended/continuous infusions |
| Aminoglycosides | Cmax/MIC | Once-daily dosing |
| Fluoroquinolones | AUC/MIC | Optimize dose |
| Vancomycin | AUC/MIC | TDM, target AUC 400-600 |

*Critical Illness Considerations:*
- Augmented renal clearance: May need higher doses
- Volume of distribution changes: Loading doses important
- Hypoalbuminemia: Affects highly protein-bound drugs
- Obesity: Weight-based dosing considerations

*Therapeutic Drug Monitoring:*
- Vancomycin: AUC-guided dosing replacing trough-only
- Aminoglycosides: Peak for efficacy, trough for toxicity
- Beta-lactams: Emerging role for TDM in critical illness

**Behavioral Science in Stewardship:**

*Prescriber Psychology:*
- Fear of undertreating (cognitive bias toward action)
- Diagnostic uncertainty drives broad empiric therapy
- Social norms within medical culture
- Time pressure limits deliberation

*Effective Interventions:*
| Strategy | Mechanism | Example |
|----------|-----------|---------|
| Audit and feedback | Social accountability | Peer comparison reports |
| Nudges | Choice architecture | Default order sets |
| Commitment devices | Public commitment | Poster pledge campaigns |
| Social norms | Peer influence | "80% of colleagues use X" |
| Education | Knowledge | But limited impact alone |

*Implementation Science:*
- Behavior change is essential for stewardship success
- Multifaceted interventions more effective than single strategies
- Sustained interventions needed; effects decay

**Outpatient Stewardship:**

*Challenge:*
- Majority of antibiotic use is outpatient
- Limited oversight infrastructure
- Patient expectations for antibiotics
- Time pressure in clinic visits

*Interventions:*
- Delayed prescriptions: "Fill only if not better in 3 days"
- Point-of-care testing: Rapid strep, flu testing
- Patient education materials
- Prescriber feedback reports
- Telemedicine stewardship

*Target Conditions:*
- Acute respiratory infections (viral URIs, bronchitis)
- Sinusitis (most viral, bacterial rarely needs antibiotics early)
- Otitis media (watchful waiting appropriate for many)
- Asymptomatic bacteriuria (don't treat outside pregnancy)

**Special Populations:**

*Long-Term Care Facilities:*
- High antibiotic use and resistance
- UTI overtreatment major issue
- Loeb criteria for initiating antibiotics
- Telemedicine ID consultation

*Pediatrics:*
- Weight-based dosing complexity
- Watchful waiting for otitis media
- Shorter courses often appropriate
- Palatability of oral formulations

*Immunocompromised:*
- Higher threshold to withhold antibiotics
- Broader empiric coverage often appropriate
- Still apply de-escalation, duration principles

**Quality Improvement Framework:**

*Plan-Do-Study-Act (PDSA) Cycles:*
- Iterative improvement
- Small tests of change
- Data-driven refinement

*Dashboard Development:*
- Real-time antibiotic use data
- Resistance trends
- Process compliance metrics
- Outcome measures

*Benchmarking:*
- NHSN AU reporting
- Comparison to peer facilities
- State and national comparisons`,
      keyTerms: [
        { term: 'Diagnostic stewardship', definition: 'Optimizing diagnostic test ordering to improve antimicrobial prescribing' },
        { term: 'Augmented renal clearance', definition: 'Enhanced kidney function in critically ill patients leading to increased drug elimination' },
        { term: 'Choice architecture', definition: 'Designing the environment in which decisions are made to influence behavior' },
        { term: 'Delayed prescription', definition: 'A prescription given to the patient to fill only if symptoms do not improve' },
        { term: 'PDSA cycle', definition: 'Plan-Do-Study-Act - an iterative quality improvement method' },
      ],
      clinicalNotes: 'Effective stewardship requires addressing prescriber behavior, not just knowledge. Audit and feedback with peer comparison is consistently effective. Diagnostic stewardship prevents the cascade of positive cultures leading to unnecessary treatment. PK/PD optimization is increasingly recognized as a stewardship tool, particularly in critically ill patients.',
    },
    5: {
      level: 5,
      summary: 'Expert antimicrobial stewardship integrates precision diagnostics, machine learning-assisted decision support, behavioral economics, health systems engineering, and global policy frameworks to optimize antimicrobial use across the continuum of care.',
      explanation: `Mastery of antimicrobial stewardship requires synthesis of diagnostic innovation, data science, implementation science, and health policy.

**Precision Stewardship:**

*Rapid Diagnostics Integration:*
- Blood culture identification with AST in hours (MALDI-TOF + VITEK RAPID)
- Direct-from-specimen molecular tests (BioFire, Verigene)
- Genotypic resistance prediction
- Challenge: Translating rapid results into rapid action

*Clinical Decision Support:*
- Real-time allergy verification
- Renal dosing alerts
- Drug-drug interaction checks
- Bug-drug mismatch alerts
- Automated de-escalation prompts

*Machine Learning Applications:*
- Predicting antibiotic need based on presentation
- Identifying patients at risk for resistant organisms
- Optimizing empiric therapy recommendations
- Predicting C. difficile risk
- Natural language processing of clinical notes

**Economic Evaluation:**

*Cost-Effectiveness:*
- Stewardship programs consistently cost-effective
- ROI from reduced C. difficile, shorter LOS, fewer adverse events
- Often cost-saving or cost-neutral

*Value Proposition:*
| Outcome | Impact |
|---------|--------|
| Drug costs | Reduced |
| LOS | Reduced |
| C. difficile | Reduced |
| Resistance | Reduced |
| Mortality | Variable |

*Payer and Policy Implications:*
- CMS conditions of participation (stewardship required)
- Hospital Value-Based Purchasing
- Leapfrog safety grades
- Insurance company quality initiatives

**Global Stewardship:**

*Low-Resource Settings:*
- Limited microbiologic capacity
- Syndromic management approaches
- Essential medicines lists
- Access vs. excess balance
- Community pharmacy interventions

*International Frameworks:*
- WHO AWaRe classification for stewardship
- Global PPS (point prevalence surveys)
- Fleming Fund capacity building
- GLASS surveillance integration

*Antimicrobial Use Targets:*
- WHO: 60% of antibiotics from Access group
- National reduction targets (e.g., UK 15% reduction)
- Agricultural antibiotic restrictions
- One Health integration

**Emerging Stewardship Approaches:**

*Bayesian Decision Support:*
- Incorporate prior probability of resistance
- Update with patient-specific factors
- Optimize therapy given uncertainty

*Pharmacometrics Integration:*
- Model-informed precision dosing
- Adaptive dosing based on measured levels
- Population PK models for special populations

*Syndromic Stewardship:*
- Condition-specific bundles
- Sepsis stewardship protocols
- Surgical prophylaxis optimization
- Empiric therapy pathways with built-in reassessment

**Research Frontiers:**

*Stewardship-Resistance Link:*
- Quantifying impact of stewardship on resistance
- Ecological modeling of interventions
- Transmission modeling
- Optimal intervention targets

*Microbiome-Informed Stewardship:*
- Understanding antibiotic impacts on microbiome
- Recovery after antibiotic exposure
- Narrow-spectrum preference for microbiome preservation
- Probiotic co-administration

*Implementation Science:*
- What works, where, and why
- Context-specific adaptation
- Sustainability of interventions
- Scalability and spread

**Leadership and Advocacy:**

*Professional Development:*
- Stewardship certification programs
- Fellowship training
- Continuing education requirements

*Policy Engagement:*
- Regulatory advocacy
- Reimbursement policy
- Antibiotic R&D incentives
- Public awareness campaigns

*Future Vision:*
- Stewardship integrated into all prescribing
- Rapid diagnostics as standard of care
- Antibiotic use publicly reported
- Global coordination on resistance
- Novel antibiotics preserved through stewardship`,
      keyTerms: [
        { term: 'Model-informed precision dosing', definition: 'Using pharmacometric models to individualize drug dosing' },
        { term: 'AWaRe', definition: 'WHO classification of antibiotics into Access, Watch, and Reserve categories for stewardship guidance' },
        { term: 'Point prevalence survey', definition: 'A snapshot study of antibiotic use at a specific time point to assess prescribing patterns' },
        { term: 'Syndromic stewardship', definition: 'Stewardship approaches organized around clinical syndromes rather than specific pathogens' },
        { term: 'Fleming Fund', definition: 'UK aid program supporting antimicrobial resistance surveillance and stewardship in low-resource settings' },
      ],
      clinicalNotes: 'Expert stewardship leadership requires not only clinical expertise but also skills in implementation science, quality improvement, and change management. Rapid diagnostics are only valuable if results translate into action. Machine learning shows promise but requires careful validation and integration into workflow. Global engagement recognizes that resistance is a shared threat requiring coordinated response. Advocacy for appropriate incentives for antibiotic development is part of comprehensive stewardship.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-core-elements-2019',
      type: 'website',
      title: 'Core Elements of Hospital Antibiotic Stewardship Programs',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      license: 'Copyrighted',
    },
    {
      id: 'barlam-idsa-2016',
      type: 'article',
      title: 'Implementing an Antibiotic Stewardship Program: Guidelines by the Infectious Diseases Society of America and the Society for Healthcare Epidemiology of America',
      authors: ['Barlam TF', 'Cosgrove SE', 'Abbo LM'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
    { targetId: 'infectious-disease-infection-prevention', targetType: 'concept', relationship: 'related', label: 'Infection Prevention' },
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'infectious-disease-utis', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infections' },
  ],
  tags: {
    systems: ['infectious-disease'],
    topics: ['antimicrobial-stewardship', 'quality-improvement', 'public-health'],
    keywords: ['antibiotic stewardship', 'appropriate use', 'prescribing', 'de-escalation', 'duration'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
