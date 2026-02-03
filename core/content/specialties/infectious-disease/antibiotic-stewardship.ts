/**
 * Antibiotic Stewardship - Comprehensive Educational Content
 *
 * Covers antimicrobial stewardship principles and implementation.
 */

import { EducationalContent } from '../../types';

export const antibioticStewardship: EducationalContent = {
  id: 'infectious-disease-antibiotic-stewardship',
  type: 'topic',
  name: 'Antibiotic Stewardship',
  alternateNames: ['Antimicrobial Stewardship', 'AMS', 'ASP', 'Antibiotic Optimization'],

  levels: {
    1: {
      level: 1,
      summary: 'Antibiotic stewardship means using antibiotics carefully and only when truly needed, so they keep working for everyone in the future.',
      explanation: `Antibiotics are medicines that fight bacterial infections. They have saved millions of lives! But there is a problem: when we use antibiotics too much or incorrectly, bacteria can become resistant and the antibiotics stop working.

**What Is Antibiotic Resistance?**
- When bacteria learn to survive antibiotic attacks
- The antibiotic no longer kills those bacteria
- These "superbugs" can spread to other people
- Some infections become very hard to treat

**Why Stewardship Matters:**
- Resistant infections are increasing
- We are running out of effective antibiotics
- New antibiotics take years to develop
- We need to protect the ones we have

**How We Practice Stewardship:**

**1. Use Antibiotics Only When Needed:**
- Antibiotics do NOT work against viruses (colds, flu, most coughs)
- Not every fever needs antibiotics
- Your doctor will check if bacteria are really the cause

**2. Use the Right Antibiotic:**
- Different antibiotics work against different bacteria
- Using the correct one helps it work better

**3. Use for the Right Amount of Time:**
- Not too short (infection comes back)
- Not too long (causes resistance)

**What You Can Do:**
- Do not ask for antibiotics if your doctor says you do not need them
- Take all your antibiotics as prescribed
- Never share antibiotics or use old ones
- Get vaccinated to prevent infections`,
      keyTerms: [
        { term: 'antibiotic', definition: 'Medicine that kills or stops the growth of bacteria' },
        { term: 'antibiotic resistance', definition: 'When bacteria change so that antibiotics no longer work against them' },
        { term: 'stewardship', definition: 'Taking care of something responsibly so it lasts for the future' },
        { term: 'superbug', definition: 'Bacteria that are resistant to many antibiotics and very hard to treat' },
      ],
      analogies: [
        'Antibiotics are like a special tool. If you use it for everything, it wears out. Save it for when you really need it.',
        'Antibiotic resistance is like a video game where the enemy learns your moves - you have to keep the antibiotics as a surprise weapon.',
      ],
      examples: [
        'A cold is caused by a virus, so taking antibiotics will not help and may cause harm.',
        'MRSA is a superbug that no longer responds to common antibiotics like penicillin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antimicrobial stewardship programs (ASPs) optimize antibiotic use through evidence-based interventions, reducing resistance development while improving patient outcomes.',
      explanation: `Antimicrobial resistance is one of the greatest threats to global health. Stewardship is the systematic approach to ensure antibiotics are used appropriately.

**Core Principles of Stewardship:**

**1. Right Drug:**
- Match antibiotic spectrum to suspected pathogen
- Narrow-spectrum when possible
- Consider local resistance patterns (antibiogram)

**2. Right Dose:**
- Adequate to achieve therapeutic levels
- Account for renal/hepatic function
- Consider site of infection

**3. Right Duration:**
- Shortest effective duration
- Many infections: 5-7 days is sufficient
- Avoid arbitrary long courses

**4. Right Time:**
- Prompt antibiotics for serious infections (sepsis)
- Obtain cultures before antibiotics when feasible

**5. Right Route:**
- IV to oral conversion when stable
- Oral often as effective as IV

**Common Stewardship Interventions:**

*Prospective Audit and Feedback:*
- Review antibiotic orders
- Provide recommendations to prescribers
- Shown to improve antibiotic use

*Preauthorization (Prior Approval):*
- Restricted antibiotics require approval
- Immediate impact on use
- May delay therapy if process burdensome

*Clinical Guidelines and Pathways:*
- Standardized treatment recommendations
- Based on local data and national guidelines
- Reduce variation in practice

*Antibiogram:*
- Local resistance data
- Guides empiric therapy
- Updated annually

**Consequences of Poor Antibiotic Use:**

*For the Patient:*
- C. difficile infection
- Drug toxicity and side effects
- Development of resistant infection

*For Society:*
- Spread of resistant organisms
- Fewer treatment options for future patients
- Increased healthcare costs

**Key Stewardship Targets:**
- Duration reduction
- IV-to-oral switch
- Unnecessary duplicate therapy
- Unnecessary coverage (e.g., unnecessary anaerobic coverage)
- De-escalation based on culture results`,
      keyTerms: [
        { term: 'antimicrobial stewardship program', definition: 'Coordinated effort to improve antibiotic use and reduce resistance' },
        { term: 'antibiogram', definition: 'Summary of local bacterial susceptibility patterns to guide empiric therapy' },
        { term: 'prospective audit and feedback', definition: 'Stewardship intervention where antibiotic orders are reviewed and recommendations made' },
        { term: 'de-escalation', definition: 'Narrowing antibiotic spectrum based on culture results' },
        { term: 'IV-to-oral conversion', definition: 'Switching from intravenous to oral antibiotics when patient is stable' },
      ],
      analogies: [
        'An antibiogram is like a local weather report for bacteria - it tells you what to expect in your hospital.',
        'De-escalation is like using a sniper rifle instead of a shotgun when you know exactly what you are aiming at.',
      ],
    },
    3: {
      level: 3,
      summary: 'Effective stewardship requires multidisciplinary programs implementing evidence-based interventions, leveraging diagnostic advances, and measuring outcomes including antibiotic use, resistance trends, and patient safety.',
      explanation: `Comprehensive stewardship integrates program structure, interventions, and metrics.

**CDC Core Elements of Hospital ASP:**

1. **Leadership Commitment:** Resources and authority
2. **Accountability:** Physician and pharmacist leads
3. **Pharmacy Expertise:** Clinical pharmacist involvement
4. **Action:** Implement interventions
5. **Tracking:** Measure antibiotic use and outcomes
6. **Reporting:** Feedback to prescribers
7. **Education:** Ongoing training

**Stewardship Interventions:**

*Active Interventions:*

| Intervention | Description | Evidence |
|--------------|-------------|----------|
| Prospective audit | Review + recommendations | Strong |
| Preauthorization | Prior approval for restricted drugs | Strong |
| Syndrome-specific protocols | Pathways for UTI, CAP, etc. | Moderate |
| Automatic stop orders | Antibiotics expire without renewal | Moderate |
| De-escalation programs | Culture-directed narrowing | Moderate |
| Duration optimization | Shorter courses | Strong |
| IV-to-oral programs | Early switch when feasible | Strong |

*Passive Interventions:*
- Educational sessions
- Posters and reminders
- Less effective alone but support active interventions

**Syndrome-Specific Targets:**

*Community-Acquired Pneumonia:*
- Duration: 5 days usually sufficient
- Avoid unnecessary MRSA/Pseudomonas coverage
- Dexamethasone: Consider in severe cases

*Urinary Tract Infection:*
- Avoid treating asymptomatic bacteriuria (except pregnancy, pre-urologic procedures)
- Short courses: 3 days uncomplicated cystitis, 5-7 days pyelonephritis
- Avoid fluoroquinolones for uncomplicated cystitis

*Skin and Soft Tissue Infection:*
- Uncomplicated cellulitis: 5-7 days
- MRSA coverage only when indicated
- Avoid unnecessary IV therapy

**Diagnostic Stewardship:**

*Rapid Diagnostics:*
- MALDI-TOF: Rapid organism identification
- Multiplex PCR panels: Blood, respiratory, GI
- Procalcitonin: Guides antibiotic start/stop

*Appropriate Testing:*
- Avoid testing unless clinically indicated
- Positive test does not always mean infection
- "Treat the patient, not the culture"

**Measuring Success:**

*Process Metrics:*
- Days of therapy (DOT) per 1000 patient-days
- Duration of therapy for specific syndromes
- Time to de-escalation
- IV-to-oral switch timing

*Outcome Metrics:*
- C. difficile rates
- Resistance trends (antibiogram changes)
- Length of stay
- Mortality (difficult to attribute)

**Implementation Science:**

*Barriers to Stewardship:*
- Fear of undertreatment
- Diagnostic uncertainty
- Time constraints
- Lack of ID/pharmacy resources

*Facilitators:*
- Physician champions
- Pharmacist integration on rounds
- User-friendly guidelines
- Timely culture results`,
      keyTerms: [
        { term: 'days of therapy', definition: 'Standard metric for antibiotic use: one antibiotic for one day = 1 DOT' },
        { term: 'CDC core elements', definition: 'Seven key components of effective hospital stewardship programs' },
        { term: 'diagnostic stewardship', definition: 'Ensuring appropriate diagnostic testing to guide antibiotic decisions' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without UTI symptoms; should not be treated in most patients' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infection; can guide antibiotic decisions' },
      ],
      clinicalNotes: 'Procalcitonin-guided therapy reduces antibiotic duration in respiratory infections and sepsis without increasing mortality. ID consult improves outcomes in S. aureus bacteremia - make it mandatory if possible.',
    },
    4: {
      level: 4,
      summary: 'Advanced stewardship integrates pharmacokinetic optimization, syndrome-based protocols, rapid molecular diagnostics, behavioral science, and informatics to transform antibiotic prescribing patterns.',
      explanation: `Contemporary stewardship leverages emerging science and technology for precision antibiotic use.

**Pharmacokinetic/Pharmacodynamic Optimization:**

*PK/PD Targets:*
| Drug Class | PK/PD Index | Target |
|------------|-------------|--------|
| Beta-lactams | fT>MIC | 40-70% (100% for severe) |
| Vancomycin | AUC/MIC | 400-600 |
| Aminoglycosides | Cmax/MIC | ≥10 |
| Fluoroquinolones | AUC/MIC | >125 |

*Optimization Strategies:*
- Extended infusion beta-lactams (especially for resistant organisms)
- Therapeutic drug monitoring (vancomycin, aminoglycosides)
- Dosing adjustment for renal/hepatic function
- Loading doses for critical illness

**Rapid Molecular Diagnostics:**

*Blood Culture Identification:*
- Verigene, BioFire, ePlex
- Organism ID + resistance genes in hours
- Stewardship intervention increases impact

*Respiratory Panels:*
- Multiplex PCR (BioFire FilmArray)
- Viral detection reduces antibiotic use
- Stewardship must guide interpretation

*Stewardship Integration:*
- 24/7 notification systems
- Real-time stewardship response
- Bundled interventions (rapid ID + guidance)

**Behavioral Science in Stewardship:**

*Nudges and Choice Architecture:*
- Default options (e.g., auto-stop orders)
- Order sets with recommended durations
- Clinical decision support alerts

*Accountable Justification:*
- Require documented indication for antibiotics
- Public display of antibiotic use by provider
- Peer comparison feedback

*Commitment Devices:*
- Explicit planned stop date at initiation
- Reduces prolonged therapy

**Outpatient Stewardship:**

*Targets:*
- Acute bronchitis: Antibiotics rarely indicated
- Viral URI: No antibiotics
- Acute sinusitis: Watchful waiting for mild
- Pharyngitis: Rapid strep test before antibiotics

*Interventions:*
- Patient education materials
- Delayed prescriptions (fill only if not improved)
- Peer comparison reports
- Commitment posters (e.g., pledging appropriate use)

**Special Populations:**

*ICU Stewardship:*
- Higher antibiotic use intensity
- More resistant organisms
- Balance: Cannot miss infection vs. stewardship
- Daily ICU rounds with ID/pharmacist

*Immunocompromised:*
- Broader empiric coverage often needed
- Rapid diagnostics critical
- Duration often longer
- Collaborative approach with transplant/oncology

*Pediatrics:*
- Weight-based dosing
- Different pharyngitis/otitis thresholds
- High outpatient antibiotic use

**Antifungal Stewardship:**

*Similar Principles:*
- Empiric vs. targeted therapy
- De-escalation with diagnostics (galactomannan, beta-glucan, PCR)
- Duration optimization
- Avoid echinocandin resistance development

**Resistance Epidemiology Integration:**

*Antibiogram Stratification:*
- By unit (ICU vs. floor)
- By specimen type
- Community vs. hospital-onset

*Molecular Epidemiology:*
- Clonal outbreaks vs. endemic resistance
- Guide infection control + stewardship response`,
      keyTerms: [
        { term: 'extended infusion', definition: 'Prolonging beta-lactam infusion time (3-4h) to improve time above MIC' },
        { term: 'accountable justification', definition: 'Requiring prescribers to document indication for antibiotic use' },
        { term: 'choice architecture', definition: 'Designing systems to nudge prescribers toward optimal antibiotic choices' },
        { term: 'delayed prescription', definition: 'Providing prescription to fill only if symptoms do not improve, reducing unnecessary use' },
        { term: 'syndromic panel', definition: 'Multiplex molecular test detecting multiple pathogens from single specimen' },
      ],
      clinicalNotes: 'Rapid diagnostics alone do not improve outcomes - pairing with stewardship intervention (real-time guidance) is essential. Extended infusion beta-lactams improve outcomes for serious infections with organisms at higher MICs.',
    },
    5: {
      level: 5,
      summary: 'Frontier stewardship research addresses precision antibiotic dosing with therapeutic drug monitoring, artificial intelligence for resistance prediction, economic incentives for new antibiotic development, and global stewardship frameworks.',
      explanation: `State-of-the-art stewardship integrates precision medicine, informatics, and policy innovation.

**Precision Dosing:**

*Model-Informed Precision Dosing (MIPD):*
- Population PK models + patient characteristics
- Bayesian dose optimization
- Software platforms: DoseMeRx, InsightRX
- Improves target attainment for vancomycin, aminoglycosides

*Beta-Lactam Therapeutic Drug Monitoring:*
- Emerging for critically ill patients
- Target: Free drug > MIC for defined % of interval
- May improve outcomes in difficult-to-treat infections

*Point-of-Care Diagnostics:*
- Real-time pathogen and resistance detection
- Potentially: Bedside MIC determination
- Future: Personalized spectrum selection

**Artificial Intelligence in Stewardship:**

*Predictive Models:*
- Resistance prediction from clinical data
- Identify patients at risk for MDRO infection
- Optimize empiric therapy

*Natural Language Processing:*
- Extract antibiotic indications from notes
- Automated surveillance
- Identify inappropriate use

*Machine Learning for Outcomes:*
- Predict treatment failure
- Personalized duration recommendations
- Identify high-risk patients for intervention

**Economic Challenges:**

*Antibiotic Market Failure:*
- New antibiotics are stewardship targets (restricted use)
- Low volume = low revenue
- Companies exit antibiotic market
- "Antimicrobial innovation crisis"

*Policy Solutions:*
| Model | Description |
|-------|-------------|
| Subscription (Netflix) | Fixed payment for access regardless of volume |
| Transferable exclusivity voucher | Incentive for other high-value drug |
| Market entry reward | One-time payment at approval |
| Pull incentives | Government purchase commitments |

*PASTEUR Act (US):*
- Proposed subscription-based model
- Government pays for access to critical antibiotics
- Delinks revenue from volume

**Global Stewardship:**

*WHO Access/Watch/Reserve:*
- Access: First-line, widely available
- Watch: Higher resistance potential, restricted
- Reserve: Last resort for MDROs

*LMIC Challenges:*
- Access gaps: Patients die from treatable infections
- Excess use: Over-the-counter antibiotics
- Quality concerns: Substandard/falsified drugs
- Need balanced approach: Access and stewardship

*One Health:*
- Human, animal, environmental interconnection
- Agricultural antibiotic use drives resistance
- Stewardship across sectors

**Future of Stewardship:**

*Narrow-Spectrum Antibiotics:*
- Targeted agents (e.g., cefiderocol for carbapenem-resistant)
- Pathogen-specific drugs
- Reduce collateral damage to microbiome

*Microbiome-Sparing Strategies:*
- Beta-lactamase in gut (ribaxamase) to protect microbiome
- Potentially reduce C. diff, resistance selection

*Non-Antibiotic Approaches:*
- Bacteriophage therapy
- Monoclonal antibodies (bezlotoxumab for C. diff)
- Antivirulence strategies
- Immunomodulation

*Stewardship + Infection Prevention:*
- Integrated programs
- Reduce need for antibiotics by preventing infections
- Synergistic impact on resistance

**Implementation at Scale:**

*Learning Health Systems:*
- Continuous data → feedback → improvement
- Real-world evidence for guideline updates
- Rapid dissemination of best practices

*Regional Collaboratives:*
- Shared antibiogram data
- Coordinated stewardship efforts
- Outbreak response

*Quality Incentives:*
- Pay-for-performance (C. diff rates)
- Public reporting of antibiotic use
- Accreditation standards`,
      keyTerms: [
        { term: 'model-informed precision dosing', definition: 'Using PK models and patient data for personalized antibiotic dosing' },
        { term: 'PASTEUR Act', definition: 'Proposed US legislation for subscription-based antibiotic payment to incentivize development' },
        { term: 'WHO AWaRe', definition: 'WHO classification of antibiotics by appropriate use: Access, Watch, Reserve' },
        { term: 'One Health', definition: 'Approach recognizing interconnection of human, animal, and environmental health in antibiotic resistance' },
        { term: 'ribaxamase', definition: 'Investigational oral beta-lactamase to protect gut microbiome during IV beta-lactam therapy' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Duration optimization: 5 days is enough for most CAP, uncomplicated UTI (3 days cystitis)
2. De-escalation: Narrow spectrum when cultures return - it is good medicine, not defeat
3. Procalcitonin: Helps guide antibiotic discontinuation; <0.25 supports stopping
4. IV-to-oral switch: If patient is afebrile, eating, and hemodynamically stable, switch
5. Asymptomatic bacteriuria: Do NOT treat (except pregnancy, pre-urology procedures)
6. S. aureus bacteremia: Always get ID consult, repeat cultures, echo, source control
7. Rapid diagnostics: Pair with stewardship intervention for maximum impact`,
    },
  },

  media: [
    {
      id: 'stewardship-principles',
      type: 'diagram',
      filename: 'stewardship-principles.svg',
      title: 'Core Principles of Antibiotic Stewardship',
      description: 'Right drug, dose, duration, time, route',
    },
    {
      id: 'cdc-core-elements',
      type: 'diagram',
      filename: 'cdc-core-elements.svg',
      title: 'CDC Core Elements of Stewardship',
      description: 'Seven key components of hospital ASP',
    },
  ],

  citations: [
    {
      id: 'cdc-core-elements',
      type: 'website',
      title: 'Core Elements of Hospital Antibiotic Stewardship Programs',
      source: 'CDC',
    },
    {
      id: 'idsa-guidance',
      type: 'article',
      title: 'IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections',
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'related', label: 'Bacterial Infections' },
    { targetId: 'infectious-disease-hai', targetType: 'topic', relationship: 'related', label: 'Healthcare-Associated Infections' },
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'pharmacology', 'quality-improvement'],
    keywords: ['antibiotic stewardship', 'resistance', 'antimicrobial', 'de-escalation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antibioticStewardship;
