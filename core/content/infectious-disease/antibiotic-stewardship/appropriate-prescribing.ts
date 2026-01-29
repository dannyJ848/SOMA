/**
 * Appropriate Antibiotic Prescribing - Comprehensive Educational Content
 *
 * Covers principles of antibiotic stewardship, appropriate use,
 * and optimization of antimicrobial therapy.
 */

import { EducationalContent } from '../../types';

export const appropriatePrescribing: EducationalContent = {
  id: 'topic-appropriate-prescribing',
  type: 'topic',
  name: 'Appropriate Antibiotic Prescribing',
  alternateNames: ['Antibiotic Stewardship', 'Antimicrobial Stewardship', 'Judicious Antibiotic Use'],

  levels: {
    1: {
      level: 1,
      summary: 'Appropriate antibiotic use means taking antibiotics only when truly needed and using the right one for the right amount of time.',
      explanation: `Antibiotics are powerful medicines that fight bacterial infections. But using them the wrong way can cause problems. Here is what you need to know about using antibiotics wisely.

**When Antibiotics Help:**

Antibiotics work ONLY against bacteria. They help with:
- Strep throat
- Urinary tract infections
- Many skin infections
- Pneumonia (some types)
- Ear infections (sometimes)

**When Antibiotics Do NOT Help:**

Antibiotics do NOT work against viruses. They will not help with:
- Common colds
- Most coughs
- The flu (influenza)
- Most sore throats
- COVID-19

**Why Taking Antibiotics When You Do Not Need Them Is Bad:**

1. **Side effects for no benefit** - You might get diarrhea, stomach upset, or a rash without any benefit
2. **Kills good bacteria** - Antibiotics kill helpful bacteria in your gut too
3. **Creates superbugs** - Bacteria can become resistant to antibiotics
4. **Risk of C. diff** - A dangerous diarrhea infection caused by wiping out good bacteria
5. **Allergic reactions** - You could develop an allergic reaction

**How to Use Antibiotics Correctly:**

1. **Only take them when your doctor prescribes them** - Trust your doctor if they say you don't need them
2. **Take the full course** - Even if you feel better, finish all your pills
3. **Take them as directed** - Follow the timing and food instructions
4. **Never share antibiotics** - They are prescribed specifically for you
5. **Don't save leftovers** - Dispose of unused antibiotics properly

**Questions to Ask Your Doctor:**

- "Do I really need an antibiotic?"
- "What happens if I wait to see if I get better on my own?"
- "What else can I do to feel better without antibiotics?"`,
      keyTerms: [
        { term: 'antibiotic', definition: 'Medicine that kills or stops bacteria from growing' },
        { term: 'bacteria', definition: 'Tiny germs that can cause some infections' },
        { term: 'virus', definition: 'A different kind of germ that antibiotics cannot kill' },
        { term: 'side effect', definition: 'Unwanted effect from a medicine' },
      ],
      analogies: [
        'Taking antibiotics for a cold is like using a fire extinguisher on a candle - it is the wrong tool and makes a mess.',
        'Antibiotics are like soldiers trained to fight bacteria. They do not know how to fight viruses.',
        'Finishing your antibiotics is like finishing a race - stopping early means you might not win against the bacteria.',
      ],
      examples: [
        'Sarah had a cold and asked for antibiotics, but her doctor explained that her body would fight the virus on its own.',
        'John had strep throat, so his doctor prescribed antibiotics for 10 days. Even though he felt better after 3 days, he finished all 10 days of medicine.',
      ],
      patientCounselingPoints: [
        'Most sore throats, colds, and coughs are caused by viruses and do not need antibiotics',
        'If prescribed an antibiotic, take it exactly as directed and finish the entire course',
        'Report any side effects to your doctor, especially rash, difficulty breathing, or severe diarrhea',
        'Never take someone else\'s antibiotics or save leftovers for later',
      ],
    },
    2: {
      level: 2,
      summary: 'Antibiotic stewardship involves selecting the right drug, dose, duration, and route to optimize clinical outcomes while minimizing resistance, toxicity, and C. difficile risk.',
      explanation: `## Principles of Appropriate Antibiotic Use

Antibiotic stewardship is the practice of using antibiotics wisely to maximize benefit and minimize harm. The goal is to improve patient outcomes while reducing antibiotic resistance.

## The "5 Ds" of Antibiotic Therapy

1. **Diagnosis** - Is this a bacterial infection?
2. **Drug** - Which antibiotic is best?
3. **Dose** - Is the dose appropriate?
4. **Duration** - How long should treatment last?
5. **De-escalation** - Can we narrow therapy?

## When Antibiotics Are NOT Needed

**Common conditions that usually don't require antibiotics:**

| Condition | Why No Antibiotic |
|-----------|-------------------|
| Common cold | Viral infection |
| Acute bronchitis | Usually viral |
| Viral pharyngitis | Most sore throats are viral |
| Acute sinusitis (<10 days) | Usually resolves on its own |
| Asymptomatic bacteriuria | Not harmful in most patients |

## Choosing the Right Antibiotic

**Narrow vs. Broad Spectrum:**
- **Narrow spectrum**: Targets specific bacteria (preferred when causative organism known)
- **Broad spectrum**: Covers many bacteria (appropriate for serious infections before culture results)

**Considerations:**
- Site of infection (does drug penetrate?)
- Local resistance patterns (antibiogram)
- Patient allergies
- Kidney and liver function
- Drug interactions
- Cost

## Duration of Therapy

**Evidence supports shorter courses for many infections:**

| Infection | Traditional | Current Evidence |
|-----------|-------------|------------------|
| Community-acquired pneumonia | 7-14 days | 5 days |
| Uncomplicated UTI | 7 days | 3-5 days |
| Skin/soft tissue | 10-14 days | 5-6 days |
| Acute sinusitis | 10-14 days | 5-7 days |

## De-escalation

**Switching from broad to narrow spectrum when:**
- Culture results identify the organism
- Patient is clinically improving
- Susceptibility testing shows narrower options work

**IV to Oral Conversion:**
Switch from IV to oral antibiotics when:
- Patient can tolerate oral intake
- No GI issues affecting absorption
- Appropriate oral option available
- Clinical improvement noted

## Consequences of Inappropriate Use

1. **Antibiotic resistance**: Bacteria evolve to survive
2. **C. difficile infection**: 5-10x increased risk with antibiotics
3. **Adverse drug events**: Allergic reactions, organ toxicity
4. **Microbiome disruption**: Loss of beneficial bacteria
5. **Drug interactions**: Especially with anticoagulants, seizure medications
6. **Cost**: Healthcare and personal expense

## Red Flags Requiring Antibiotics

- High fever with bacterial source
- Signs of sepsis
- Immunocompromised patients with infection
- Positive culture from sterile site
- Confirmed strep throat (rapid strep or culture positive)`,
      keyTerms: [
        { term: 'antibiotic stewardship', definition: 'Programs and practices to optimize antibiotic use', pronunciation: 'STEW-ard-ship' },
        { term: 'de-escalation', definition: 'Switching from broad-spectrum to narrow-spectrum antibiotics based on culture results' },
        { term: 'antibiogram', definition: 'Chart showing local bacteria susceptibility patterns to guide antibiotic selection' },
        { term: 'empiric therapy', definition: 'Initial antibiotic treatment started before culture results are available' },
        { term: 'C. difficile', definition: 'Bacteria causing severe diarrhea, often triggered by antibiotic use', pronunciation: 'see dif-ih-SEEL' },
      ],
      analogies: [
        'De-escalation is like switching from a sledgehammer to a precision tool once you know exactly what needs fixing.',
        'Using broad-spectrum antibiotics when narrow-spectrum would work is like using a shotgun when a scalpel is needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antimicrobial stewardship programs (ASPs) implement evidence-based interventions including prospective audit and feedback, formulary restriction, and clinical decision support to optimize antimicrobial use, measured by process and outcome metrics.',
      explanation: `## Stewardship Program Core Elements

### CDC Core Elements for Hospital Stewardship

1. **Leadership Commitment**
   - Dedicated resources and authority
   - Financial and staffing support

2. **Accountability**
   - Single leader responsible for program outcomes
   - Typically physician (ID) or pharmacist

3. **Drug Expertise**
   - ID pharmacist involvement
   - Formulary management
   - Dosing optimization

4. **Action**
   - Prospective audit and feedback
   - Prior authorization
   - Facility-specific guidelines

5. **Tracking**
   - Antimicrobial use monitoring
   - Resistance patterns

6. **Reporting**
   - Regular feedback to prescribers
   - Benchmarking against peers

7. **Education**
   - Ongoing provider education
   - Patient education

## Key Stewardship Interventions

### Prospective Audit and Feedback (PAF)

**Process:**
- ASP team reviews antimicrobial orders
- Provides recommendations to prescribers
- Non-restrictive but influential

**Evidence:**
- Reduces inappropriate use 20-30%
- Decreases costs
- Improves clinical outcomes
- Higher prescriber acceptance than restriction

### Prior Authorization

**Process:**
- Restricted antibiotics require ASP approval
- Immediate feedback at point of prescribing

**Appropriate for:**
- High-cost agents
- Drugs prone to resistance (fluoroquinolones, carbapenems)
- Agents with significant toxicity

### Clinical Decision Support

**Electronic Interventions:**
- Allergy checking
- Dose optimization for renal/hepatic function
- Drug interaction alerts
- Automatic stop dates
- IV-to-PO conversion prompts

## Evidence-Based Prescribing Guidelines

### Community-Acquired Pneumonia

**Outpatient (no comorbidities):**
- Amoxicillin OR
- Doxycycline OR
- Azithromycin (only in areas of low resistance)

**Inpatient (non-severe):**
- Beta-lactam + macrolide OR
- Respiratory fluoroquinolone

**Duration:** 5 days (minimum), guided by clinical stability

### Urinary Tract Infections

**Uncomplicated Cystitis:**
- Nitrofurantoin 5 days OR
- TMP-SMX 3 days OR
- Fosfomycin single dose

**Avoid:** Fluoroquinolones for uncomplicated UTI (FDA boxed warning)

**Pyelonephritis:**
- Fluoroquinolone 5-7 days OR
- Beta-lactam 10-14 days

### Skin and Soft Tissue Infections

**Cellulitis (non-purulent):**
- Cephalexin or dicloxacillin 5-6 days
- Cover streptococci primarily

**Abscess:**
- I&D is primary treatment
- Antibiotics if: large abscess, systemic symptoms, immunocompromised
- Cover MRSA in most areas

## Duration Optimization

### Evidence for Shorter Courses

| Infection | Evidence | Recommended Duration |
|-----------|----------|---------------------|
| CAP | Multiple RCTs | 5 days |
| VAP | Multiple RCTs | 7 days |
| Complicated UTI | Limited data | 7 days |
| Intra-abdominal | STOP-IT trial | 4 days post-source control |
| Uncomplicated bacteremia | BALANCE trial | 7 days |
| SSTI | Multiple studies | 5-6 days |

### Biomarker-Guided Discontinuation

**Procalcitonin:**
- Respiratory infections: Safe to discontinue when PCT <0.25 or >80% decline
- Meta-analyses show reduced duration without harm
- NNT ~14 to prevent one C. difficile infection

## Tracking and Metrics

### Antimicrobial Use Metrics

**Days of Therapy (DOT):**
- One DOT = receipt of one antibiotic for one day
- DOT per 1,000 patient-days allows benchmarking
- NHSN AU option for standardized reporting

**SAAR (Standardized Antimicrobial Administration Ratio):**
- Observed DOT / predicted DOT
- Risk-adjusted comparison to national benchmark
- SAAR >1 indicates higher than expected use

### Outcome Metrics

- C. difficile infection rates
- Resistance rates
- Mortality
- Length of stay
- Readmission rates`,
      keyTerms: [
        { term: 'prospective audit and feedback', definition: 'Stewardship intervention where ASP reviews and provides recommendations on antimicrobial orders' },
        { term: 'DOT', definition: 'Days of therapy; metric measuring antibiotic exposure as antibiotic-days per 1000 patient-days' },
        { term: 'SAAR', definition: 'Standardized Antimicrobial Administration Ratio; risk-adjusted comparison of observed to expected antibiotic use' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infection; useful for guiding antibiotic duration in respiratory infections' },
        { term: 'cascade reporting', definition: 'Susceptibility reporting strategy that shows narrow-spectrum agents first, broader only if resistant' },
      ],
      clinicalNotes: 'Stewardship is not about withholding antibiotics - it is about optimizing use. Early appropriate antibiotics save lives in sepsis. The goal is right drug, right dose, right duration. Always consider source control as primary intervention.',
    },
    4: {
      level: 4,
      summary: 'Advanced stewardship integrates rapid diagnostics, pharmacokinetic/pharmacodynamic optimization, syndrome-specific pathways, and behavioral science principles to transform prescribing practices while maintaining safety in complex clinical scenarios.',
      explanation: `## Advanced Stewardship Strategies

### Rapid Diagnostics Integration

**Diagnostic-Stewardship Bundled Approach:**
- Rapid diagnostic alone: Limited impact
- Rapid diagnostic + ASP intervention: Significant improvement

**Evidence:**
- Blood culture ID panels + ASP: 1-day reduction in time to appropriate therapy
- Mortality reduction in bacteremia (some studies)
- Cost savings $20,000-60,000 per 100 patients

**Implementation Keys:**
- 24/7 ASP coverage or real-time pharmacist notification
- Standardized response algorithms
- Integration with clinical workflows

### Pharmacokinetic/Pharmacodynamic Optimization

**Beta-Lactam Infusion Strategies:**

| Strategy | Advantages | Evidence |
|----------|------------|----------|
| Extended infusion (3-4 hr) | Maintains fT>MIC, practical | Mortality benefit in severe infections |
| Continuous infusion | Maximum fT>MIC | Equivalent outcomes, more complex |
| Standard bolus | Simple | Suboptimal for resistant organisms |

**Therapeutic Drug Monitoring:**
- Vancomycin: AUC/MIC-guided dosing (target 400-600)
- Aminoglycosides: Peak and trough monitoring
- Beta-lactams: Emerging for critically ill patients

### Syndrome-Specific Pathways

**Sepsis Pathway:**
1. Hour 1: Cultures, lactate, broad-spectrum antibiotics
2. Hour 24-48: Review cultures, narrow therapy
3. Day 3: ASP review, de-escalation, duration assessment
4. Day 5-7: Discontinuation assessment

**HAP/VAP Pathway:**
1. Day 0: Gram stain, culture, empiric based on local antibiogram
2. Day 2-3: Culture-directed therapy
3. Day 7: Consider stopping if clinical response
4. Avoid prolonged courses even with positive cultures

### Behavioral Science in Stewardship

**Effective Interventions:**

| Approach | Mechanism | Evidence |
|----------|-----------|----------|
| Peer comparison | Social norms | 20% reduction in inappropriate use |
| Public commitment | Accountability | Displayed commitments reduce prescribing |
| Accountable justification | Friction | Required documentation reduces orders |
| Feedback with benchmarking | Awareness | Most effective with actionable data |

**Implementation Science:**
- Audit and feedback works best when individualized and actionable
- Education alone has minimal sustained impact
- Restriction has backlash and workaround risks
- Multi-modal interventions most effective

## Special Populations

### Immunocompromised Hosts

**Considerations:**
- Lower threshold for empiric therapy
- Broader initial coverage often appropriate
- Longer durations may be needed
- De-escalation still possible with clinical improvement

**Neutropenic Fever:**
- Immediate broad-spectrum coverage (antipseudomonal beta-lactam)
- Empiric adjustment based on risk factors (MRSA, VRE, MDR)
- Duration: Until afebrile and ANC recovering

### Critical Care Stewardship

**Challenges:**
- Higher acuity, more resistant organisms
- Altered pharmacokinetics (Vd, clearance)
- Multiple concurrent infections
- Limited oral options

**Strategies:**
- Daily review of antimicrobials in ICU
- Emphasis on source control
- PK/PD optimization crucial
- De-escalation within 48-72 hours when appropriate

### Outpatient Stewardship

**Common Targets:**
- Acute respiratory infections (50% of outpatient antibiotics)
- Asymptomatic bacteriuria
- Prolonged durations

**Effective Interventions:**
- Delayed prescribing (prescription to fill only if not improving)
- Communication training for providers
- Patient education and expectation management
- EHR-based clinical decision support

## Diagnostic Stewardship

### Blood Culture Stewardship

**Appropriate Indications:**
- New fever with clinical concern for bloodstream infection
- Severe sepsis/septic shock
- Endovascular infections
- Before starting antibiotics for suspected serious infection

**Inappropriate Indications:**
- Routine "pan-culture" on admission
- Isolated fever without other signs
- Following up positive cultures without indication

**Volume Matters:**
- 20-30 mL per set (2 sets minimum)
- Each mL increases yield 3-5%
- Under-filling is common and reduces sensitivity

### Urine Culture Stewardship

**Avoid Cultures When:**
- Asymptomatic (except pregnancy, pre-urologic procedure)
- Foley catheter without symptoms
- Non-specific symptoms (confusion, falls in elderly)

**Culture Only When:**
- Dysuria, frequency, urgency
- Pyelonephritis symptoms
- Obstructive uropathy
- Prior to urologic procedures`,
      keyTerms: [
        { term: 'fT>MIC', definition: 'Time above minimum inhibitory concentration; key PK/PD parameter for beta-lactams' },
        { term: 'AUC-guided dosing', definition: 'Dosing strategy using area under the curve rather than trough alone; recommended for vancomycin' },
        { term: 'diagnostic stewardship', definition: 'Optimizing diagnostic test ordering to improve antimicrobial prescribing decisions' },
        { term: 'delayed prescribing', definition: 'Strategy providing prescription to fill only if symptoms do not improve, reducing unnecessary use' },
        { term: 'accountable justification', definition: 'Requiring documented rationale for antibiotic prescribing as a behavioral intervention' },
      ],
      clinicalNotes: 'Rapid diagnostics without stewardship intervention have limited impact - the intervention is as important as the diagnostic. In critically ill patients, optimize PK/PD with extended infusions and consider TDM. Behavioral interventions (peer comparison, public commitment) can be as effective as restrictive policies with better acceptance.',
    },
    5: {
      level: 5,
      summary: 'Contemporary antimicrobial stewardship operates within complex adaptive systems, requiring integration of precision diagnostics, AI-assisted decision support, implementation science frameworks, and health economics to optimize antimicrobial use across the healthcare continuum while addressing the innovation gap in antimicrobial development.',
      explanation: `## Implementation Science Framework

### Stewardship as Complex Intervention

**Key Dimensions:**
1. Behavioral (prescriber decision-making)
2. Organizational (culture, resources, leadership)
3. Technical (diagnostics, EHR, algorithms)
4. Educational (knowledge, attitudes)
5. Regulatory (requirements, incentives)

### Theoretical Frameworks

**Capability-Opportunity-Motivation (COM-B) Model:**
- **Capability**: Knowledge and skills to prescribe appropriately
- **Opportunity**: Systems and social norms supporting good practice
- **Motivation**: Reflective (beliefs) and automatic (habits)
- Interventions must address all three domains

**Consolidated Framework for Implementation Research (CFIR):**
- Intervention characteristics
- Inner setting (organizational factors)
- Outer setting (external policies)
- Individual characteristics
- Implementation process

### Measuring Implementation Success

**RE-AIM Framework:**
- **Reach**: Proportion of patients/prescribers affected
- **Effectiveness**: Clinical and process outcomes
- **Adoption**: Institutional uptake
- **Implementation**: Fidelity to intended intervention
- **Maintenance**: Sustainability over time

## Precision Stewardship

### Rapid Diagnostic Ecosystem

**Blood Culture Identification:**
| Technology | TAT | Capabilities |
|------------|-----|--------------|
| MALDI-TOF | Minutes from colony | ID only |
| PCR panels | 1-2 hours from positive | ID + select resistance markers |
| Accelerate Pheno | 7 hours | ID + phenotypic AST |
| Next-gen sequencing | Hours (emerging) | Complete resistance profile |

**Optimal Workflow:**
1. Blood culture positive alert → immediate Gram stain
2. Rapid ID within 1-2 hours → empiric adjustment
3. Rapid AST within 6-8 hours → definitive therapy
4. ASP review within 24 hours → optimization

### Machine Learning Applications

**Current Applications:**
- Prediction of resistance phenotype from genotype
- Risk stratification for MDR organisms
- Antibiotic recommendation algorithms
- Duration of therapy optimization

**Emerging Applications:**
- Real-time prescribing decision support
- Population-level resistance trend prediction
- Outbreak detection
- Personalized dosing based on ML-derived PK models

## Health Economics of Stewardship

### Cost-Effectiveness Evidence

**ASP ROI:**
- Average cost savings: $200,000-400,000 annually per hospital
- Reduction in drug costs: 20-30%
- Reduction in length of stay: 0.5-2 days
- C. difficile prevention: ~$30,000 per case avoided

**Cost per QALY:**
- Stewardship programs: Dominant (cost-saving, health-improving)
- Rapid diagnostics + ASP: Cost-effective (<$50,000/QALY)

### Value-Based Stewardship

**Quality Metrics:**
- CMS HAI penalties (C. difficile rates)
- Joint Commission standards
- Leapfrog antibiotic stewardship scoring
- NHSN AU benchmarking

**Incentive Alignment:**
- Bundle payments favor stewardship (reduced LOS, readmissions)
- Quality reporting creates accountability
- Public reporting drives improvement

## Advanced Clinical Scenarios

### Antimicrobial Therapy in ECMO/CRRT

**Pharmacokinetic Challenges:**
- ECMO: Drug sequestration in circuit, increased Vd
- CRRT: Variable drug clearance, mode-dependent

**Dosing Principles:**
| Drug Class | ECMO Effect | CRRT Dosing |
|------------|-------------|-------------|
| Beta-lactams | Sequestration | Increase frequency or continuous infusion |
| Vancomycin | Variable | AUC-guided, often higher doses |
| Fluoroquinolones | Minimal | Standard to reduced |
| Aminoglycosides | Increased Vd | Extended interval, TDM essential |

### Management of Beta-Lactam Allergies

**Risk Stratification:**
| History | Risk | Approach |
|---------|------|----------|
| Anaphylaxis, severe reaction | High | Avoid class, desensitization if essential |
| Urticaria, angioedema | Moderate | Skin testing, consider cephalosporin |
| Distant, unknown | Low | Direct challenge with observation |
| GI symptoms only | Minimal | Not a true allergy, can use |

**Penicillin Allergy De-labeling:**
- 90% of labeled allergies are not true IgE-mediated
- Testing + challenge programs: 95%+ can receive penicillins
- Stewardship impact: Reduces broad-spectrum use, improves outcomes

### Outpatient Parenteral Antimicrobial Therapy (OPAT)

**Stewardship Considerations:**
- Duration optimization (avoid default prolonged courses)
- Oral step-down when appropriate
- Weekly ASP review of OPAT patients
- Monitoring for complications and treatment response

**POET Trial Implications:**
- Oral antibiotics non-inferior to IV for left-sided endocarditis
- Oral options expanding for traditionally IV-only indications
- OPAT can be avoided in many osteomyelitis patients

## Future Directions

### Microbiome-Informed Prescribing

**Emerging Concepts:**
- Narrow-spectrum agents preferentially preserve microbiome
- Gut decontamination strategies for C. difficile prevention
- Microbiome recovery post-antibiotics
- Microbiome-protective antibiotics in development

### Novel Stewardship Targets

**Antifungal Stewardship:**
- Similar principles, unique challenges
- Empiric vs. pre-emptive vs. prophylactic use
- Duration optimization for candidemia

**Antiviral Stewardship:**
- Influenza treatment timing and duration
- COVID-19 therapeutics (paxlovid, remdesivir)
- Emerging resistance concerns

### Global Stewardship

**LMIC Considerations:**
- Limited diagnostics
- Over-the-counter antibiotic access
- Resource constraints for ASP implementation
- Adapted frameworks (WHO AWaRe classification)

**WHO AWaRe Categories:**
- **Access**: First-line, narrow-spectrum (target 60%+ of use)
- **Watch**: Higher resistance potential (use with caution)
- **Reserve**: Last resort for MDR organisms

## Policy and Regulatory Landscape

### Stewardship Requirements

**US:**
- CMS Conditions of Participation (hospitals)
- CDC Core Elements (hospitals, nursing homes, outpatient)
- Joint Commission standards

**International:**
- UK: Start Smart Then Focus
- EU: National action plans required
- WHO: Global Action Plan on AMR

### Incentivizing Antimicrobial Development

**Market Challenges:**
- Short courses limit revenue
- Reserved use limits volume
- Resistance reduces market life

**Policy Solutions:**
- GAIN Act (extended exclusivity)
- PASTEUR Act (subscription model proposed)
- CARB-X funding
- Push-pull incentives`,
      keyTerms: [
        { term: 'COM-B model', definition: 'Behavioral framework describing Capability, Opportunity, Motivation as determinants of prescribing behavior' },
        { term: 'RE-AIM', definition: 'Implementation science framework: Reach, Effectiveness, Adoption, Implementation, Maintenance' },
        { term: 'AWaRe classification', definition: 'WHO antibiotic categorization: Access (first-line), Watch (use cautiously), Reserve (last resort)' },
        { term: 'OPAT', definition: 'Outpatient parenteral antimicrobial therapy; IV antibiotics administered outside hospital' },
        { term: 'penicillin allergy de-labeling', definition: 'Process of removing inaccurate penicillin allergy labels through testing and challenge' },
        { term: 'antimicrobial stewardship program', definition: 'Coordinated intervention to optimize antimicrobial use, improve outcomes, and reduce resistance' },
      ],
      clinicalNotes: `Key principles for stewardship leadership:

1. **Data-driven improvement**: Track DOT, SAAR, C. difficile rates; benchmark against peers
2. **Rapid diagnostics require stewardship intervention**: Technology alone does not change practice
3. **Behavioral science works**: Peer comparison and public commitment can be as effective as restriction
4. **Allergy de-labeling is high-yield**: 90% of penicillin "allergies" are not true allergies
5. **Duration optimization is low-hanging fruit**: Evidence supports shorter courses for most infections
6. **Implementation science matters**: Use frameworks like COM-B and CFIR for sustainable change
7. **Stewardship is not rationing**: Goal is optimal antibiotics for patients who need them
8. **Multidisciplinary approach essential**: ID physician, pharmacist, infection prevention, IT, administration`,
    },
  },

  media: [
    {
      id: 'stewardship-core-elements',
      type: 'diagram',
      filename: 'stewardship-core-elements.svg',
      title: 'CDC Core Elements of Antibiotic Stewardship',
      description: 'Seven core elements for hospital stewardship programs',
    },
    {
      id: 'stewardship-interventions',
      type: 'diagram',
      filename: 'stewardship-interventions.svg',
      title: 'Stewardship Intervention Strategies',
      description: 'Prospective audit, restriction, decision support approaches',
    },
    {
      id: 'duration-evidence',
      type: 'diagram',
      filename: 'duration-evidence.svg',
      title: 'Evidence for Shorter Antibiotic Courses',
      description: 'Summary of evidence supporting shorter treatment durations',
    },
  ],

  citations: [
    {
      id: 'cdc-core-elements',
      type: 'website',
      title: 'Core Elements of Hospital Antibiotic Stewardship Programs',
      authors: ['CDC'],
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/antibiotic-use/core-elements/hospital.html',
    },
    {
      id: 'idsa-stewardship-guidelines',
      type: 'article',
      title: 'Implementing an Antibiotic Stewardship Program: Guidelines by IDSA and SHEA',
      authors: ['Barlam TF', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'sanford-guide',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy',
      source: 'Antimicrobial Therapy, Inc.',
    },
  ],

  crossReferences: [
    { targetId: 'condition-antibiotic-resistance', targetType: 'condition', relationship: 'related', label: 'Antibiotic Resistance' },
    { targetId: 'condition-c-difficile', targetType: 'condition', relationship: 'related', label: 'C. difficile Infection' },
    { targetId: 'topic-infection-control', targetType: 'topic', relationship: 'related', label: 'Infection Control' },
    { targetId: 'topic-pharmacokinetics', targetType: 'topic', relationship: 'related', label: 'Pharmacokinetics' },
  ],

  tags: {
    systems: ['infectious-disease'],
    topics: ['stewardship', 'pharmacology', 'quality-improvement', 'public-health'],
    keywords: ['stewardship', 'antimicrobial', 'prescribing', 'de-escalation', 'duration', 'C. difficile'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'infectious disease'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default appropriatePrescribing;
