/**
 * Vaccine Safety
 *
 * Comprehensive education on vaccine safety monitoring and adverse events
 */

import { EducationalContent } from '../../types';

export const VACCINE_SAFETY: EducationalContent = {
  id: 'concept-vaccine-safety',
  type: 'concept',
  name: 'Vaccine Safety',
  alternateNames: ['Vaccine adverse events', 'Immunization safety', 'Vaccine side effects'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines are very safe. They are tested more than almost any other medicine and are monitored continuously after approval.',
      explanation: `Vaccines go through extensive testing before they are approved and continue to be monitored afterward to ensure they are safe.

**How Vaccines Are Tested:**
- Years of laboratory research
- Animal testing
- Human trials with thousands of volunteers
- Review by independent experts
- Approval only if benefits outweigh risks
- Continued monitoring after approval

**Common Side Effects:**
These are normal signs that your body is building protection:
- Sore arm where the shot was given
- Mild fever
- Tiredness
- Headache
- Muscle aches

These effects usually go away in 1-2 days.

**Serious Side Effects:**
Serious reactions are very rare:
- Severe allergic reactions: About 1 in a million doses
- You are monitored for 15-30 minutes after vaccination
- Healthcare providers can treat allergic reactions immediately

**What Is NOT True:**
- Vaccines do NOT cause autism (thoroughly studied)
- Vaccines do NOT overwhelm the immune system
- Vaccines do NOT contain harmful levels of any ingredient

**Who Monitors Vaccine Safety:**
- FDA (Food and Drug Administration)
- CDC (Centers for Disease Control)
- Doctors and nurses who report reactions
- Researchers who study vaccine data

**What to Do If You Have Concerns:**
- Talk to your doctor
- Ask questions
- Get information from trusted sources (CDC, your doctor)`,
      keyTerms: [
        { term: 'side effect', definition: 'An effect of a medicine other than what it was designed to do' },
        { term: 'allergic reaction', definition: 'The body\'s immune response to something it sees as harmful' },
        { term: 'clinical trial', definition: 'Research studies testing medicines in people' },
      ],
      analogies: [
        'Vaccine side effects like sore arm and mild fever are like the sound of a fire alarm during a fire drill - a sign that the system is working.',
      ],
      examples: [
        'After her flu shot, Jane had a sore arm for a day. This was normal and meant her immune system was responding to the vaccine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccine safety is ensured through rigorous pre-licensure clinical trials and robust post-marketing surveillance systems that detect rare adverse events not captured in trials.',
      explanation: `Vaccines undergo extensive evaluation before and after approval to ensure they are safe for public use.

**Pre-Licensure Evaluation:**

*Phase 1:* Small group (20-100 people)
- Safety assessment
- Dosing determination

*Phase 2:* Larger group (100s-1000s)
- Safety and immunogenicity
- Dose optimization

*Phase 3:* Very large group (1000s-10,000s+)
- Efficacy evaluation
- Safety in diverse populations
- Rare adverse events may not be detected

*FDA Review:*
- Biologics License Application (BLA)
- Independent advisory committee review
- Risk-benefit assessment

**Post-Licensure Surveillance:**

*VAERS (Vaccine Adverse Event Reporting System):*
- Passive reporting system
- Anyone can report
- Detects potential safety signals
- Does not prove causation

*VSD (Vaccine Safety Datalink):*
- Active surveillance
- Linked vaccination and medical records
- 12+ million people
- Can assess causation

*CISA (Clinical Immunization Safety Assessment):*
- Expert consultation for complex cases
- Individual risk assessment

**Common vs. Rare Adverse Events:**

| Type | Examples | Frequency |
|------|----------|-----------|
| Very common | Local pain, swelling | 1 in 10 |
| Common | Fever, fatigue | 1 in 10-100 |
| Uncommon | Extensive local reaction | 1 in 100-1000 |
| Rare | Severe allergic reaction | 1 in 10,000-100,000 |
| Very rare | Specific serious AEs | <1 in 100,000 |

**Anaphylaxis:**
- Severe allergic reaction
- Occurs within minutes
- Rate: ~1-2 per million doses
- Treatable with epinephrine
- Reason for 15-30 minute observation

**Specific Vaccine Safety Topics:**

*MMR and Autism:*
- Original study was fraudulent (retracted)
- Multiple large studies show no link
- Andrew Wakefield lost medical license
- Still: Myth persists

*Thimerosal:*
- Mercury-containing preservative
- Removed from most childhood vaccines (2001)
- Extensive studies: No harm
- Still in some multi-dose flu vaccines

*Aluminum Adjuvants:*
- Used for decades
- Amount less than daily intake from food/water
- Extensive safety data`,
      keyTerms: [
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; national system for reporting vaccine side effects' },
        { term: 'VSD', definition: 'Vaccine Safety Datalink; network linking vaccine and health records for safety research' },
        { term: 'anaphylaxis', definition: 'Severe, potentially life-threatening allergic reaction' },
        { term: 'adjuvant', definition: 'Ingredient added to vaccines to strengthen the immune response' },
      ],
      analogies: [
        'VAERS is like a suggestion box - anyone can submit, and the reports help identify potential issues to investigate further, but a report alone does not prove the vaccine caused the problem.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccine pharmacovigilance integrates passive and active surveillance systems, epidemiologic methods for causality assessment, and regulatory frameworks to ensure ongoing safety while maintaining public confidence.',
      explanation: `**Pharmacovigilance Framework:**

*Pre-Licensure:*
- Phase 1-3 clinical trials
- Typically detect events occurring in ≥1:1000-10,000
- Cannot detect rare events
- Limited follow-up duration

*Post-Licensure Systems:*

**VAERS (Passive Surveillance):**
- Co-managed by CDC and FDA
- Mandatory reporting: Healthcare providers for specified events
- Voluntary reporting: Anyone
- Strengths: Rapid signal detection, all vaccines
- Limitations: Reporting bias, cannot determine causation

**VSD (Active Surveillance):**
- Nine healthcare organizations
- 12+ million members
- Linked vaccine exposure and outcomes
- Rapid Cycle Analysis: Near real-time monitoring
- Can calculate rates and assess causation

**PRISM (Post-Licensure Rapid Immunization Safety Monitoring):**
- FDA system using claims data
- Largest US active surveillance
- 190+ million individuals

**Causality Assessment:**

*Brighton Collaboration Criteria:*
- Standardized case definitions
- Levels of diagnostic certainty
- Enables comparison across studies

*WHO Causality Assessment:*
- Consistent with causal association
- Indeterminate
- Inconsistent with causal association
- Unclassifiable

*Epidemiologic Criteria:*
- Temporal relationship
- Biologic plausibility
- Strength of association
- Consistency across studies
- Specificity
- Dose-response

**Specific Adverse Events:**

*Guillain-Barre Syndrome (GBS):*
- Ascending paralysis
- Background rate: 1-2 per 100,000/year
- Influenza vaccine: Small increased risk (~1-2 per million)
- COVID-19 J&J vaccine: Slightly elevated risk
- Benefits outweigh risks for most

*Thrombosis with Thrombocytopenia Syndrome (TTS):*
- Associated with adenovirus vector COVID vaccines
- ~1-4 per million doses
- Younger women at higher risk
- Mechanism: Anti-PF4 antibodies

*Myocarditis/Pericarditis:*
- mRNA COVID vaccines
- Young males, after second dose
- ~40-50 per million (16-29 year old males)
- Generally mild, self-resolving
- COVID infection: Higher myocarditis risk

*Intussusception (Rotavirus):*
- RotaShield withdrawn (1999)
- Current vaccines: Very small risk (~1-2 per 100,000)
- Age restrictions to minimize risk
- Benefits far exceed risks

**Vaccine Injury Compensation:**

*National Vaccine Injury Compensation Program (VICP):*
- No-fault system
- Covers routinely recommended vaccines
- Vaccine Injury Table lists presumptive injuries
- Alternative to litigation

*Countermeasures Injury Compensation Program (CICP):*
- Covers pandemic vaccines
- COVID-19 vaccines initially covered here`,
      keyTerms: [
        { term: 'Brighton Collaboration', definition: 'International collaboration developing standardized case definitions for vaccine adverse events' },
        { term: 'Rapid Cycle Analysis', definition: 'Near real-time statistical monitoring for vaccine safety signals' },
        { term: 'TTS', definition: 'Thrombosis with thrombocytopenia syndrome; rare clotting disorder associated with adenovirus vaccines' },
        { term: 'VICP', definition: 'National Vaccine Injury Compensation Program; no-fault system for vaccine injury claims' },
      ],
      clinicalNotes: 'Report serious adverse events to VAERS. VAERS reports do not prove causation. Observe patients 15-30 minutes post-vaccination for anaphylaxis. Review Vaccine Injury Table for presumptive injuries.',
    },
    4: {
      level: 4,
      summary: 'Advanced vaccine safety science integrates mechanistic immunology, genetic susceptibility assessment, benefit-risk communication frameworks, and public health ethics to navigate complex safety signals while maintaining immunization program integrity.',
      explanation: `**Mechanistic Understanding:**

*Anaphylaxis Mechanisms:*
- IgE-mediated hypersensitivity
- Potential allergens: Gelatin, egg protein, PEG, polysorbate
- PEG (polyethylene glycol): Novel concern with mRNA vaccines
- Cross-reactivity: PEG and polysorbate 80

*TTS Mechanism:*
- Anti-PF4 antibodies (similar to HIT)
- Adenovirus vector triggers
- Platelet activation → thrombosis + thrombocytopenia
- Requires specific treatment (avoid heparin initially)

*Myocarditis Mechanism:*
- Proposed: Molecular mimicry, immune activation
- mRNA-specific? (Spike protein? Delivery vehicle?)
- Research ongoing
- Generally self-limiting

**Genetic Susceptibility:**

*HLA Associations:*
- Some adverse events cluster by HLA type
- Narcolepsy after Pandemrix (H1N1): HLA-DQB1*06:02
- May enable risk stratification in future

*Immune Phenotypes:*
- Hyperinflammatory responders
- Autoimmune predisposition
- Limited clinical utility currently

**Benefit-Risk Assessment:**

*Quantitative Framework:*
- Number needed to vaccinate (NNV) to prevent one case/death
- Number needed to harm (NNH) for one serious adverse event
- Compare: Benefits should far exceed risks

*Example - COVID-19 mRNA Vaccines (Young Males):*
- NNV to prevent hospitalization: ~1000-5000
- NNH for myocarditis: ~20,000-50,000
- Myocarditis mostly mild; COVID infection has higher myocarditis risk
- Net benefit positive, but requires communication

**Risk Communication:**

*Principles:*
- Acknowledge uncertainty
- Use absolute (not relative) numbers
- Context matters (background rates)
- Avoid dismissing concerns
- Partner with patient in decision-making

*Visual Aids:*
- Icon arrays
- Frequency formats (1 in X)
- Comparison to other risks

**Vaccine Hesitancy:**

*WHO Strategic Advisory Group Definition:*
- Delay or refusal despite availability
- Influenced by confidence, complacency, convenience

*Confidence Factors:*
- Trust in vaccine safety
- Trust in healthcare system
- Trust in policymakers

*Addressing Hesitancy:*
- Motivational interviewing
- Acknowledge concerns
- Provide evidence
- Strong provider recommendation
- Multiple touchpoints

**Public Health Ethics:**

*Individual vs Population:*
- Small individual risk may justify large population benefit
- But: Must respect autonomy
- Transparent communication essential

*Mandates:*
- School vaccination requirements
- Healthcare worker mandates
- COVID-19 workplace mandates (legal challenges)
- Balance: Public health vs individual rights

**Safety Signal Management:**

*Signal Detection:*
- Statistical threshold triggers investigation
- Data mining (Proportional Reporting Ratio, Empirical Bayes)
- Clinical pattern recognition

*Investigation Steps:*
1. Confirm signal validity
2. Determine if causally related
3. Estimate magnitude of risk
4. Assess benefit-risk balance
5. Communicate findings
6. Modify recommendations if needed`,
      keyTerms: [
        { term: 'number needed to harm (NNH)', definition: 'Number of people who need to be exposed for one additional person to experience harm' },
        { term: 'Pandemrix', definition: 'H1N1 influenza vaccine associated with narcolepsy in Europe' },
        { term: 'Proportional Reporting Ratio', definition: 'Statistical method to detect safety signals in passive surveillance data' },
        { term: 'HIT', definition: 'Heparin-induced thrombocytopenia; mechanism similar to TTS' },
      ],
      clinicalNotes: 'Use absolute risk numbers in counseling. Acknowledge patient concerns before providing evidence. Strong provider recommendation most effective for hesitancy. Consider referral for complex cases (CISA network).',
    },
    5: {
      level: 5,
      summary: 'Contemporary vaccine safety science integrates genomic susceptibility research, advanced pharmacovigilance methodologies, global safety harmonization, and implementation science to optimize benefit-risk communication while addressing misinformation in the digital age.',
      explanation: `**Advanced Pharmacovigilance:**

*Signal Detection Methods:*
- Disproportionality analysis (ROR, PRR, EBGM)
- Sequential analysis (MaxSPRT, CUSUM)
- Tree-based scan statistics
- Machine learning approaches

*Causal Inference:*
- Self-controlled case series (SCCS)
- Self-controlled risk interval (SCRI)
- Case-crossover designs
- Negative control outcomes

*Big Data Integration:*
- Electronic health records
- Claims databases
- Pharmacy data
- Registry linkage
- Natural language processing

**Genomic Safety Research:**

*Immunogenetics:*
- HLA associations with adverse events
- Innate immune gene variants
- Autoimmunity susceptibility loci

*Pharmacogenomics:*
- Potential for personalized risk assessment
- Currently research phase
- Ethical considerations (access, discrimination)

**Global Harmonization:**

*WHO Global Vaccine Safety:*
- Global Vaccine Safety Initiative
- Vaccine safety communication guidance
- Causality assessment training

*Brighton Collaboration:*
- Standardized case definitions
- Global network of experts
- Level of diagnostic certainty

*CIOMS/WHO Working Group:*
- Harmonized reporting standards
- Periodic safety update reports
- Development safety update reports

**Infodemic Management:**

*Misinformation Landscape:*
- Social media amplification
- Anti-vaccine movements
- Conspiracy theories
- Echo chambers

*Counter-Strategies:*
- Prebunking (inoculation theory)
- Debunking (fact-checking)
- Trusted messenger networks
- Social media platform policies
- Media literacy education

*Research:*
- Misinformation spread dynamics
- Effective counter-messaging
- Role of algorithms

**Implementation Science:**

*Hesitancy Interventions:*
- Motivational interviewing training
- Presumptive vs participatory language
- Clinic-level interventions
- Community engagement

*Measuring Impact:*
- Vaccination coverage
- Attitudes and beliefs
- Trust metrics
- Adverse event reporting rates

**Emerging Challenges:**

*Novel Platforms:*
- mRNA: New safety profile to characterize
- Viral vectors: TTS, GBS signals
- Nanoparticle formulations: Lipid-related effects

*Speed of Development:*
- COVID-19 accelerated timelines
- EUA vs full approval
- Public trust implications

*Global Equity:*
- Safety monitoring capacity in LMICs
- Reporting disparities
- Pharmacovigilance strengthening

**Future Directions:**

*Precision Vaccinology:*
- Genomic risk stratification
- Personalized schedules
- Tailored risk communication

*Enhanced Surveillance:*
- Real-time monitoring
- Wearable devices integration
- Patient-reported outcomes
- Natural language processing of records

*Communication Science:*
- AI-assisted fact-checking
- Targeted interventions
- Behavioral economics applications

**Ethical Framework:**

*Transparency:*
- Rapid data sharing
- Pre-registration of studies
- Open access publications

*Community Engagement:*
- Participatory governance
- Cultural adaptation
- Building trust partnerships

*Equity:*
- Equal access to safe vaccines
- Monitoring safety across populations
- Addressing historical harms`,
      keyTerms: [
        { term: 'self-controlled case series', definition: 'Epidemiologic method comparing risk periods within the same individual to assess vaccine causality' },
        { term: 'prebunking', definition: 'Preemptively exposing people to weakened misinformation to build resistance (inoculation theory)' },
        { term: 'EBGM', definition: 'Empirical Bayesian Geometric Mean; statistical method for signal detection in pharmacovigilance' },
        { term: 'infodemic', definition: 'Excessive spread of information including misinformation, hindering effective public health response' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Report all serious adverse events to VAERS
- Understand VAERS limitations (does not prove causation)
- Use shared decision-making with hesitant patients
- Provide absolute risk numbers, not just relative
- Strong provider recommendation is most effective
- Document discussions and vaccine refusals
- Refer complex cases to CISA
- Stay current with evolving safety data
- Combat misinformation with evidence and empathy
- Support patients who experience adverse events`,
    },
  },

  media: [
    {
      id: 'vaccine-safety-monitoring',
      type: 'diagram',
      filename: 'vaccine-safety-surveillance-systems.svg',
      title: 'Vaccine Safety Surveillance Systems',
      description: 'Diagram showing how vaccine safety is monitored before and after approval',
    },
  ],

  citations: [
    {
      id: 'cdc-vaccine-safety',
      type: 'website',
      title: 'Vaccine Safety',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccinesafety/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-how-vaccines-work', targetType: 'concept', relationship: 'related', label: 'How Vaccines Work' },
    { targetId: 'concept-adult-vaccine-schedule', targetType: 'concept', relationship: 'related', label: 'Adult Vaccine Schedule' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'vaccination', 'pharmacovigilance'],
    keywords: ['vaccine safety', 'adverse events', 'VAERS', 'immunization', 'side effects'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
