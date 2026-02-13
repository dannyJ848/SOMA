/**
 * Vaccine Safety
 *
 * Educational content on vaccine safety monitoring, adverse event reporting,
 * common reactions, evidence addressing misconceptions, adjuvant safety,
 * and the risk-benefit framework for immunization decisions.
 */

import { EducationalContent } from '../../types';

export const VACCINE_SAFETY: EducationalContent = {
  id: 'pediatrics-vaccine-safety',
  type: 'topic',
  name: 'Vaccine Safety',
  nameEs: 'Seguridad de las Vacunas',
  alternateNames: [
    'Vaccine adverse events',
    'Immunization safety',
    'Vaccine risk assessment',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Vaccines are among the safest medicines available. They are tested extensively before use and monitored continuously afterward. Serious side effects are extremely rare.',
      explanation: `Vaccines go through years of testing before they are approved. Even after approval, safety is continuously monitored. Here is what you should know:

**Common Side Effects (Normal)**
- Soreness, redness, or swelling at the injection site
- Low-grade fever (usually gone in 1-2 days)
- Fussiness or sleepiness in babies
- Mild rash (especially after MMR or chickenpox vaccine)

**These Are NOT Caused by Vaccines**
- Autism (this has been studied extensively and disproven)
- Immune system overload (babies handle thousands of germs daily; vaccines are a tiny fraction)
- The disease itself (you cannot get the flu from the flu shot)

**Very Rare Serious Reactions**
- Severe allergic reaction (anaphylaxis): about 1 in a million doses
- This is why doctors ask you to wait 15-30 minutes after vaccination

**How Safety Is Monitored**
- Before approval: Clinical trials with thousands of people
- After approval: Ongoing monitoring by doctors, scientists, and the government
- Anyone (including parents) can report a concern to a national safety system

**The Bottom Line**
- The risk of serious harm from a vaccine is far smaller than the risk of the disease it prevents
- Vaccines have eliminated or nearly eliminated many deadly childhood diseases
- Polio, measles, whooping cough, and diphtheria once killed or disabled millions of children each year`,
      keyTerms: [
        { term: 'side effect', definition: 'An unwanted but usually mild reaction to a medicine or vaccine, like soreness or a low fever' },
        { term: 'anaphylaxis', definition: 'A very rare but serious allergic reaction that happens within minutes of a vaccine; treatable with epinephrine' },
        { term: 'clinical trial', definition: 'A carefully controlled study that tests a new medicine or vaccine in people before it is approved for everyone' },
      ],
      analogies: [
        'Getting a vaccine is like wearing a seatbelt. Seatbelts occasionally cause minor bruises, but they prevent far worse injuries in a crash.',
        'Vaccine safety monitoring is like an airline tracking every flight. Rare problems are caught quickly because millions of people are being watched.',
      ],
      patientCounselingPoints: [
        'Mild side effects like soreness and low fever mean the immune system is learning. They go away in a day or two.',
        'Serious allergic reactions are extremely rare (about 1 in a million) and can be treated immediately.',
        'The diseases vaccines prevent are far more dangerous than any vaccine side effect.',
        'If you have concerns, talk to your child\'s doctor. They can explain the specific risks and benefits.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Vaccine safety involves pre-licensure clinical trials, post-licensure surveillance systems, and evidence-based evaluation of adverse events versus coincidental temporal associations.',
      explanation: `**Pre-Licensure Safety Evaluation**
| Phase | Participants | Purpose |
|-------|-------------|---------|
| Phase I | 20-100 healthy adults | Safety, dosing, immune response |
| Phase II | Hundreds | Safety, immunogenicity, dose optimization |
| Phase III | Thousands-tens of thousands | Safety, efficacy, rare adverse events |
| FDA Review | - | Risk-benefit analysis, manufacturing review |

**Post-Licensure Surveillance**
| System | How It Works |
|--------|-------------|
| VAERS | Anyone can report suspected adverse events; signals detected but NOT causation |
| Vaccine Safety Datalink (VSD) | Medical records from millions of patients linked to vaccination data |
| CISA Project | Expert clinical consultations for complex cases |
| Post-licensure studies | Large observational studies mandated by FDA |

**Common vs. Rare Adverse Events**
| Event | Frequency | Management |
|-------|-----------|-----------|
| Local reaction (pain, redness) | 20-50% | Ice, acetaminophen |
| Low-grade fever | 10-20% | Acetaminophen or ibuprofen |
| Febrile seizure (MMR) | 1 in 3,000 | Reassure; not a contraindication to future doses |
| ITP after MMR | 1 in 25,000-40,000 | Usually self-limited |
| Anaphylaxis | ~1 in 1,000,000 | Epinephrine; observe 15-30 minutes post-vaccination |
| Intussusception (rotavirus) | 1-7 in 100,000 first doses | Recognize symptoms; enema reduction |

**Debunked Vaccine Safety Myths**

*Vaccines and Autism:*
The original 1998 Wakefield study claiming MMR caused autism was:
- Based on only 12 children
- Found to be fraudulent (data fabricated)
- Retracted by The Lancet
- Wakefield lost his medical license
- Multiple studies of millions of children worldwide have found NO link between vaccines and autism

*Thimerosal:*
- Mercury-containing preservative removed from childhood vaccines by 2001 (except multi-dose flu)
- Contains ethylmercury (rapidly eliminated) not methylmercury (bioaccumulates)
- Multiple studies confirm no harm from thimerosal in vaccines
- Removal was precautionary, not based on evidence of harm

*"Too Many Too Soon":*
- The current schedule contains fewer antigens than historical schedules
- 1980 schedule: ~3,000 immunological components
- Current schedule: ~150 immunological components (despite more vaccines)
- Infant immune system handles thousands of antigens daily from normal environment

**Risk-Benefit Comparison**
| Disease | Pre-Vaccine Era (US Annual) | Post-Vaccine Era |
|---------|---------------------------|-----------------|
| Measles | 500,000 cases, 500 deaths | <100 cases/year (when coverage high) |
| Polio | 20,000 paralytic cases | 0 (eliminated in US) |
| Pertussis | 200,000 cases | ~15,000 cases/year (still circulates) |
| Hib meningitis | ~20,000 cases, 1,000 deaths | <50 cases/year |
| Congenital rubella | 20,000 affected infants/year | <5 cases/year |`,
      keyTerms: [
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; passive reporting system where anyone can submit a report; detects signals but does not prove causation' },
        { term: 'temporal association', definition: 'Two events happening close in time, which does not mean one caused the other; must be distinguished from true causation' },
        { term: 'thimerosal', definition: 'Ethylmercury-containing preservative removed from childhood vaccines by 2001 as precaution; multiple studies confirm safety' },
        { term: 'ITP', definition: 'Immune Thrombocytopenic Purpura; rare self-limited drop in platelets that can occur after MMR vaccination' },
        { term: 'post-licensure surveillance', definition: 'Continuous safety monitoring after a vaccine is approved and given to the general population' },
      ],
      analogies: [
        'VAERS is like a suggestion box, not a science experiment. Reports show what happened after a vaccine, not what was caused by it.',
        'The difference between temporal association and causation is like assuming your umbrella causes rain because you open it before it rains.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Vaccine safety science requires understanding causality assessment frameworks, Brighton Collaboration case definitions, and the pharmacovigilance infrastructure ensuring continuous monitoring.',
      explanation: `**Causality Assessment Frameworks**

*WHO Causality Assessment:*
| Classification | Criteria |
|---------------|---------|
| Consistent causal | Biologically plausible, temporal relationship, no alternative explanation, evidence from studies |
| Indeterminate | Temporal relationship, insufficient evidence for or against |
| Inconsistent causal | Established alternative etiology, biologically implausible, evidence against |
| Unclassifiable | Insufficient data |

*IOM (now NASEM) Evidence Categories:*
| Category | Meaning | Examples |
|----------|---------|---------|
| Convincingly supports | Strong mechanistic + epidemiologic evidence | Anaphylaxis (all vaccines), ITP (MMR) |
| Favors acceptance | Moderate evidence supporting causal relationship | Febrile seizure (MMR, MMRV), intussusception (RV) |
| Inadequate to accept or reject | Insufficient evidence | Most reported associations |
| Favors rejection | Evidence against causal relationship | MMR and autism, thimerosal and autism |

**Brighton Collaboration**
- International consortium for standardized AEFI case definitions
- Levels of diagnostic certainty (Level 1 = highest)
- Enables global comparison of safety data
- Key case definitions: anaphylaxis, seizures, GBS, intussusception, thrombosis with thrombocytopenia

**Specific Adverse Events in Detail**

*Anaphylaxis:*
- Rate: 1-2 per million doses
- Median onset: 15 minutes (90% within 30 minutes)
- Management: IM epinephrine (0.01 mg/kg, max 0.3 mg child, 0.5 mg adult)
- Identify trigger: gelatin, PEG, polysorbate 80, yeast, neomycin
- Subsequent doses of same vaccine: contraindicated (can skin test for components)

*MMRV vs. Separate MMR + Varicella:*
| Age | Febrile Seizure Risk | Recommendation |
|-----|---------------------|---------------|
| 12-23 months (first dose) | MMRV: 1 additional febrile seizure per 2,300 doses vs. separate | AAP prefers separate MMR + Varicella for dose 1 |
| >48 months (second dose) | No excess risk | MMRV or separate both acceptable |

*GBS and Influenza Vaccine:*
- Historical: 1976 Swine Flu vaccine had ~1/100,000 excess GBS risk
- Current seasonal IIV: 1-2 additional GBS cases per million vaccinated (if any)
- GBS risk from influenza infection itself is greater than from vaccine

*COVID-19 mRNA Vaccine Myocarditis:*
- Peak risk: Males 16-29 years, after dose 2
- Rate: ~1 per 10,000-20,000 (adolescent males)
- Presentation: Chest pain 2-5 days post-vaccination, elevated troponin, often normal EF
- Outcome: >95% complete recovery; most cases mild
- Risk-benefit: Benefits of vaccination outweigh myocarditis risk at all ages

**Vaccine Ingredients**
| Ingredient | Purpose | Safety Evidence |
|-----------|---------|----------------|
| Aluminum salts | Adjuvant (enhance immune response) | Used since 1930s; eliminated via kidneys; daily dietary intake far exceeds vaccine content |
| Formaldehyde | Inactivate toxins/viruses | Trace amounts; body produces 50,000x more naturally daily |
| Gelatin | Stabilizer | Rare allergenic potential; porcine-derived |
| Polysorbate 80 | Emulsifier | Used in foods and medicines; rare anaphylaxis |
| PEG (polyethylene glycol) | mRNA vaccine stabilizer | Present in many oral medications; rare allergenic potential |
| Residual egg protein | From manufacturing | Influenza: safe in egg allergy; MMR: no egg protein |`,
      keyTerms: [
        { term: 'Brighton Collaboration', definition: 'International consortium establishing standardized case definitions for adverse events following immunization to enable global safety data comparison' },
        { term: 'causality assessment', definition: 'Systematic evaluation of whether an adverse event was caused by a vaccine versus coincidental temporal association; uses biological plausibility, epidemiologic evidence, and clinical features' },
        { term: 'pharmacovigilance', definition: 'Science and activities related to detection, assessment, understanding, and prevention of adverse drug/vaccine effects' },
        { term: 'GBS', definition: 'Guillain-Barre Syndrome; autoimmune polyneuropathy rarely associated with influenza vaccine; risk from natural influenza infection exceeds vaccine risk' },
        { term: 'NASEM', definition: 'National Academies of Sciences, Engineering, and Medicine (formerly IOM); provides authoritative evidence reviews of vaccine safety claims' },
        { term: 'PEG', definition: 'Polyethylene glycol; mRNA vaccine stabilizer present in many oral medications; identified as rare cause of anaphylaxis to COVID mRNA vaccines' },
      ],
      clinicalNotes:
        'For dose 1 at 12-23 months, the AAP recommends separate MMR + varicella over MMRV due to excess febrile seizure risk. For dose 2 at 4-6 years, either approach is acceptable. GBS history within 6 weeks of a prior influenza vaccine is a precaution (not absolute contraindication). If a patient reports allergy to a vaccine component, allergy evaluation with skin testing can identify the responsible ingredient and guide future vaccination.',
    },
    4: {
      level: 4,
      summary:
        'Advanced vaccine safety encompasses molecular mechanisms of adverse events, genetic susceptibility, active surveillance methodologies, and regulatory decision-making frameworks.',
      explanation: `**Molecular Mechanisms of Vaccine Adverse Events**

*Anaphylaxis:*
- IgE-mediated hypersensitivity to vaccine component
- Identified allergens: PEG (mRNA vaccines), polysorbate 80, gelatin, yeast
- Cross-reactivity: PEG and polysorbate 80 share structural features
- Mast cell and basophil degranulation within minutes
- Management: Epinephrine IM, IV fluids, airway management

*Febrile Seizures (MMR/MMRV):*
- Peak risk: Days 7-10 post-MMR (coincides with viremia from live vaccine)
- MMRV at 12-23 months: ~1 additional febrile seizure per 2,300 doses vs. MMR + V separately
- Mechanism: Vaccine-strain viremia produces immune activation and fever
- Risk factors: Family history of febrile seizures, age <2 years

*Immune Thrombocytopenic Purpura (ITP):*
- Mechanism: Molecular mimicry; anti-platelet antibodies cross-reactive with rubella component
- Risk: 1 in 25,000-40,000 MMR doses
- Onset: 2-3 weeks post-vaccination
- Natural rubella infection causes ITP at 10x higher rate

*Vaccine-Induced Immune Thrombocytopenia and Thrombosis (VITT):*
- Associated with adenoviral vector COVID vaccines (AstraZeneca, J&J)
- Mechanism: Anti-PF4 antibodies (similar to HIT) triggering platelet activation and thrombosis
- Rare: ~1 per 50,000-100,000 doses
- Management: IVIG, non-heparin anticoagulation; avoid heparin and platelet transfusion

**Genetic Susceptibility to Vaccine Adverse Events**
| Gene/Pathway | Adverse Event | Mechanism |
|-------------|---------------|-----------|
| HLA variants | Febrile seizures post-MMR | Altered immune response to vaccine antigens |
| SCN1A/SCN2A | Seizures post-vaccination (Dravet) | Lower seizure threshold; fever-triggered |
| IFI44L methylation | Variable vaccine response | Innate immune signaling |
| MTHFR variants | No proven association | Despite persistent online claims |
| IL-1/IL-6 polymorphisms | Increased reactogenicity | Enhanced inflammatory response |

*Dravet Syndrome and Vaccination:*
- SCN1A mutation carriers may have first seizure triggered by vaccine-associated fever
- Vaccination does NOT cause Dravet syndrome (genetic condition)
- The seizure would have occurred with any febrile trigger
- Vaccination is NOT contraindicated in known or suspected Dravet syndrome
- The disease itself (e.g., pertussis) poses greater seizure risk

**Active Surveillance Methodology**

*Self-Controlled Case Series (SCCS):*
- Each individual serves as their own control
- Compares adverse event rate in risk window vs. control window
- Eliminates between-person confounders
- Used for VSD analyses of vaccine safety signals

*Rapid Cycle Analysis (RCA):*
- Near real-time sequential monitoring in VSD
- Pre-specified outcomes, exposure windows, and statistical stopping rules
- Used to rapidly detect safety signals with new vaccines
- Applied to COVID-19 vaccines, detecting myocarditis signal within weeks

**Regulatory Decision Framework**
| Signal Source | Response | Outcome |
|--------------|----------|---------|
| VAERS signal | VSD/CISA formal study | Most signals not confirmed |
| VSD confirmed signal | ACIP review, risk-benefit analysis | Label change, age restriction, or continued use |
| Clinical trial safety signal | FDA review, possible REMS | Additional warnings or restrictions |
| International signal | WHO GACVS review | Global recommendation adjustment |

**Vaccine Safety Communication Challenges**
- Cognitive biases: availability heuristic (rare events seem common when publicized), omission bias (inaction feels safer than action)
- Social media amplification of VAERS data without context
- Anti-vaccine misinformation networks exploit scientific uncertainty
- Evidence-based strategies: transparent communication, acknowledging real risks while contextualizing them`,
      keyTerms: [
        { term: 'VITT', definition: 'Vaccine-Induced Immune Thrombocytopenia and Thrombosis; rare syndrome with anti-PF4 antibodies and thrombosis associated with adenoviral vector COVID vaccines; managed with IVIG and non-heparin anticoagulation' },
        { term: 'molecular mimicry', definition: 'Immune cross-reactivity between vaccine/pathogen antigens and host proteins leading to autoimmune phenomena; proposed mechanism for ITP after MMR' },
        { term: 'self-controlled case series', definition: 'Epidemiologic study design where each individual serves as their own control; eliminates between-person confounders; used in VSD vaccine safety analyses' },
        { term: 'rapid cycle analysis', definition: 'Near real-time sequential safety monitoring in VSD with pre-specified outcomes and statistical stopping rules; detected COVID vaccine myocarditis signal rapidly' },
        { term: 'omission bias', definition: 'Cognitive tendency to perceive inaction (not vaccinating) as safer than action (vaccinating) even when evidence shows otherwise; major driver of vaccine hesitancy' },
        { term: 'Dravet syndrome', definition: 'SCN1A-associated epileptic encephalopathy; fever from any source (including vaccines) can trigger seizures, but vaccination does not cause the underlying condition and is not contraindicated' },
      ],
      clinicalNotes:
        'Dravet syndrome families need counseling that vaccination did not cause their child\'s condition and is not contraindicated. The seizure was inevitable with any febrile trigger. VITT should be suspected in patients with thrombosis + thrombocytopenia 4-28 days after adenoviral vector vaccine; test anti-PF4 antibodies and avoid heparin. The SCCS design is particularly powerful for vaccine safety because it eliminates confounders that plague cohort studies.',
    },
    5: {
      level: 5,
      summary:
        'Expert vaccine safety integrates precision pharmacovigilance, computational safety prediction, global harmonization initiatives, and ethical frameworks balancing individual autonomy with public health.',
      explanation: `**Precision Pharmacovigilance**

*Biomarker-Based Safety Prediction:*
| Approach | Application | Status |
|----------|------------|--------|
| Pre-vaccination immune profiling | Identify individuals at risk for adverse events | Research |
| HLA typing | Predict reactogenicity | Early studies for specific vaccines |
| Genetic screening | Identify SCN1A carriers before vaccination | Debated; not currently recommended |
| Autoantibody panels | Pre-existing autoimmunity as risk factor | Research |
| Complement pathway testing | Risk for inflammatory adverse events | Research |

*Electronic Health Record (EHR) Safety Monitoring:*
- Natural language processing to detect AEFIs from clinical notes
- Machine learning algorithms for signal detection superior to manual review
- Real-time syndromic surveillance integrated with vaccination records
- FDA Sentinel system: >300 million patients in distributed data network

**Global Safety Harmonization**

*WHO Global Advisory Committee on Vaccine Safety (GACVS):*
- Independent expert committee reviewing global safety signals
- Issues rapid assessments for emerging concerns
- Coordinates international pharmacovigilance networks

*International Coalition of Medicines Regulatory Authorities (ICMRA):*
- Aligns regulatory safety standards across countries
- COVID-19 pandemic demonstrated need for rapid global coordination
- Common data format for safety reporting across systems

**Causality in Complex Systems**

*Causal Inference Challenges:*
| Challenge | Example | Approach |
|-----------|---------|---------|
| Confounding by indication | Sicker children may receive different vaccines | Self-controlled designs |
| Healthy vaccinee bias | Healthier children more likely vaccinated on time | Adjust for healthcare utilization |
| Protopathic bias | Early symptoms of condition trigger medical visit where vaccine is given | Careful exposure window definition |
| Background rate uncertainty | How many events would occur without vaccination? | Historical rate estimation, expected vs. observed analysis |

*Computational Approaches:*
- Bayesian data mining of spontaneous reports (MGPS, BCPNN algorithms)
- Tree-based scan statistics for identifying unexpected adverse events
- Network meta-analysis combining multiple surveillance databases
- Causal inference from observational data (target trial emulation)

**Ethical Frameworks**

*Individual vs. Community:*
| Principle | Individual Perspective | Public Health Perspective |
|-----------|---------------------|--------------------------|
| Autonomy | Right to make own medical decisions | Collective responsibility to protect vulnerable |
| Beneficence | Protect individual from disease | Protect community via herd immunity |
| Non-maleficence | Avoid potential vaccine adverse events | Avoid preventable disease outbreaks |
| Justice | Access to accurate risk-benefit information | Equitable vaccine distribution |

*Mandate Policies:*
| Approach | Example | Evidence |
|----------|---------|---------|
| School entry requirements | All US states (with exemption variation) | Strongest evidence for maintaining coverage |
| Non-medical exemptions | Vary by state (religious, philosophical) | States removing personal belief exemptions show increased coverage |
| Healthcare worker mandates | Influenza, COVID-19 | Controversial; some evidence for reduced patient mortality |
| No mandates | Voluntary system with education | Some high-coverage countries succeed without mandates (e.g., UK) |

**Long-Term Safety Monitoring**
| Question | Study Design | Findings |
|----------|-------------|----------|
| Vaccines and autoimmune disease | Large cohort studies, SCCS | No consistent association for most vaccines |
| Aluminum accumulation | Pharmacokinetic modeling | Eliminated via kidneys; no bioaccumulation |
| Long-term neurologic effects | Danish cohort (650,000+ children) | No association MMR-autism |
| Intergenerational effects | Animal studies, epidemiologic data | No evidence of transgenerational harm |
| Cancer risk | Long-term follow-up studies | HPV vaccine reduces cervical cancer; no carcinogenic signal for any vaccine |`,
      keyTerms: [
        { term: 'Sentinel system', definition: 'FDA active surveillance system using distributed data network of >300 million patients to monitor post-market drug and vaccine safety in real time' },
        { term: 'GACVS', definition: 'WHO Global Advisory Committee on Vaccine Safety; independent expert body providing rapid global vaccine safety assessments and international pharmacovigilance coordination' },
        { term: 'healthy vaccinee bias', definition: 'Systematic bias where healthier individuals are more likely to be vaccinated on schedule, making vaccines appear protective against unrelated outcomes' },
        { term: 'protopathic bias', definition: 'Bias where early symptoms of a condition prompt a medical visit during which a vaccine is given, creating false appearance that the vaccine caused the condition' },
        { term: 'target trial emulation', definition: 'Causal inference framework applying randomized trial principles to observational data; increasingly used in vaccine safety research' },
      ],
      clinicalNotes: `**Expert Integration:**
- The SCCS design remains the gold standard for vaccine safety studies because it eliminates stable confounders. However, it requires careful handling of time-varying confounders.
- EHR-based NLP safety monitoring is advancing rapidly and may supplement or replace traditional surveillance in the near future.
- Genetic screening (e.g., SCN1A) before vaccination is NOT recommended, as it would delay vaccination and the risk of infection far exceeds the risk of fever-triggered seizures.
- The HPV vaccine cancer prevention data from Nordic registries are now mature: 90% reduction in cervical cancer in women vaccinated before age 17. This is the strongest vaccine-cancer prevention evidence to date.
- Mandate policies must balance individual autonomy with community protection. The evidence shows school entry requirements are the most effective policy for maintaining coverage.`,
    },
  },

  media: [
    {
      id: 'vaccine-safety-monitoring-diagram',
      type: 'diagram',
      filename: 'vaccine-safety-surveillance-systems.svg',
      title: 'Vaccine Safety Monitoring Systems',
      description: 'Overview of pre- and post-licensure vaccine safety monitoring infrastructure',
    },
  ],

  citations: [
    {
      id: 'nasem-vaccine-safety',
      type: 'article',
      title: 'Adverse Effects of Vaccines: Evidence and Causality',
      authors: ['National Academies of Sciences, Engineering, and Medicine'],
      source: 'National Academies Press',
      url: 'https://doi.org/10.17226/13164',
    },
    {
      id: 'cdc-vaccine-safety',
      type: 'website',
      title: 'Vaccine Safety',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccinesafety/',
    },
    {
      id: 'plotkin-safety-chapter',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin, S.A.', 'Orenstein, W.A.'],
      source: 'Elsevier',
      chapter: 'Vaccine Safety',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    { targetId: 'pediatrics-immunization-schedule', targetType: 'topic', relationship: 'sibling', label: 'Immunization Schedule' },
    { targetId: 'pediatrics-common-conditions', targetType: 'topic', relationship: 'related', label: 'Common Pediatric Conditions' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['pediatrics', 'public health', 'immunology', 'pharmacology', 'ethics'],
    keywords: ['vaccine safety', 'VAERS', 'adverse events', 'anaphylaxis', 'thimerosal', 'adjuvants', 'VITT', 'pharmacovigilance', 'vaccine hesitancy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'preventive medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
