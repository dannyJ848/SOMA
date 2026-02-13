/**
 * Adult Immunization Schedule
 *
 * Comprehensive adult vaccination recommendations based on
 * CDC/ACIP guidelines, organized by age, risk factors, and special populations.
 */

import { EducationalContent } from '../../types';

export const ADULT_IMMUNIZATION_SCHEDULE: EducationalContent = {
  id: 'concept-adult-immunization-schedule',
  type: 'concept',
  name: 'Adult Immunization Schedule',
  alternateNames: ['Adult vaccines', 'Adult vaccination schedule', 'Immunization guidelines adults'],

  levels: {
    1: {
      level: 1,
      summary: 'Adults need vaccines too! Shots protect you from serious diseases throughout your life.',
      explanation: `Vaccines are not just for kids. Adults need certain shots to stay healthy too.

**Why Adults Need Vaccines:**
- Some childhood vaccines wear off over time
- New vaccines have been developed for adult diseases
- Your risk for some diseases increases as you get older
- Travel may expose you to new diseases

**Common Adult Vaccines:**

**Flu Shot:**
- Everyone should get one every year
- Best time is early fall (September-October)
- Protects against that year's flu strains

**Tetanus Shot:**
- Needed every 10 years
- Protects against a dangerous infection from cuts and wounds
- Usually given with diphtheria protection (Td or Tdap)

**Shingles Vaccine:**
- For adults 50 and older
- Prevents a painful skin rash caused by the chickenpox virus
- Given as two shots

**Pneumonia Vaccines:**
- For adults 65 and older
- Protects against lung infections
- Also for younger adults with certain health conditions

**COVID-19 Vaccines:**
- Updated versions recommended annually
- Protects against serious illness from COVID-19

Talk to your doctor about which vaccines you need!`,
      keyTerms: [
        { term: 'vaccine', definition: 'A shot that teaches your body to fight off a specific disease' },
        { term: 'immunity', definition: 'Your body\'s ability to protect itself from germs' },
        { term: 'booster', definition: 'An extra shot that keeps your protection strong' },
      ],
      analogies: [
        'Vaccines are like practice drills for your immune system - they teach your body how to fight diseases before you actually get sick.',
        'Getting vaccinated is like updating your phone\'s security software - it protects against the latest threats.',
      ],
      examples: [
        'The flu shot changes every year because the flu virus changes, so you need a new one each fall.',
        'The shingles vaccine prevents the painful rash that can occur in people who had chickenpox as children.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adult immunization schedules are based on age, health conditions, lifestyle factors, and prior vaccination history to maintain protection against vaccine-preventable diseases.',
      explanation: `The CDC and Advisory Committee on Immunization Practices (ACIP) update adult vaccine recommendations annually.

**Routine Adult Vaccines:**

**Influenza (Flu):**
- Annual vaccination for all adults
- Standard-dose or high-dose (65+) options
- Inactivated (shot) or live attenuated (nasal) formulations
- Optimal timing: Before flu season (September-October)

**Tetanus, Diphtheria, Pertussis:**
- Tdap: One dose if never received
- Td: Booster every 10 years
- Tdap recommended during each pregnancy (weeks 27-36)
- After wounds: Td if >5 years since last dose

**COVID-19:**
- Primary series completion if not done
- Updated (bivalent/annual) boosters as recommended
- Timing varies with health status and prior infection

**Age-Specific Vaccines:**

**Ages 19-26:**
- HPV vaccine (if not completed as adolescent)
- 2 or 3 doses depending on age at start

**Ages 50+:**
- Recombinant Zoster Vaccine (RZV/Shingrix): 2 doses
- Recommended even if prior shingles or older vaccine (Zostavax)

**Ages 65+:**
- Pneumococcal vaccines: PCV15 or PCV20
- If PCV15 given, follow with PPSV23
- High-dose or adjuvanted influenza vaccines preferred

**Special Situations:**
- Healthcare workers: Hepatitis B, annual flu required
- Chronic disease: Additional vaccines (pneumococcal, Hib)
- Immunocompromised: Modified schedules, avoid live vaccines
- Travelers: Destination-specific vaccines`,
      keyTerms: [
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices - CDC expert group that makes vaccine recommendations' },
        { term: 'Tdap', definition: 'Combination vaccine for tetanus, diphtheria, and pertussis (whooping cough)' },
        { term: 'live attenuated vaccine', definition: 'Vaccine made from weakened (but living) germs' },
        { term: 'inactivated vaccine', definition: 'Vaccine made from killed germs or pieces of germs' },
        { term: 'recombinant vaccine', definition: 'Vaccine made using genetic engineering technology' },
      ],
      analogies: [
        'The immunization schedule is like a maintenance schedule for your car - different services needed at different intervals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adult immunization schedules integrate vaccine immunology, epidemiological data, and individual risk stratification to provide evidence-based recommendations balancing efficacy, safety, and cost-effectiveness.',
      explanation: `**Comprehensive Adult Immunization Schedule (ACIP 2024-2025):**

**Routine Vaccines for All Adults:**

| Vaccine | Ages 19-26 | Ages 27-49 | Ages 50-64 | Ages 65+ |
|---------|------------|------------|------------|----------|
| Influenza | Annual | Annual | Annual | Annual (high-dose) |
| Td/Tdap | Tdap x1, then Td q10yr | Td q10yr | Td q10yr | Td q10yr |
| COVID-19 | Per current guidance | Per current guidance | Per current guidance | Per current guidance |
| MMR | 1 or 2 doses if no immunity | - | - | - |
| Varicella | 2 doses if no immunity | 2 doses if no immunity | - | - |
| HPV | 2-3 doses through age 26 | Shared decision 27-45 | - | - |
| Zoster (RZV) | - | - | 2 doses (50+) | 2 doses |
| Pneumococcal | Risk-based | Risk-based | Risk-based | PCV15/20 + PPSV23 |

**Pneumococcal Vaccine Algorithm:**

*Immunocompetent adults 65+:*
1. PCV20 alone, OR
2. PCV15 followed by PPSV23 (at least 1 year later)

*Adults 19-64 with risk conditions:*
- CSF leak, cochlear implant: PCV15 or PCV20 + PPSV23
- Chronic heart/lung/liver disease, diabetes, alcoholism, smoking: PCV15 or PCV20

*Immunocompromised:*
- PCV15 or PCV20, then PPSV23 (8+ weeks later if PCV15)

**Vaccine Types and Mechanisms:**

| Vaccine | Type | Mechanism |
|---------|------|-----------|
| Influenza (standard) | Inactivated | Hemagglutinin antibody response |
| Influenza (LAIV) | Live attenuated | Mucosal + systemic immunity |
| Shingrix | Recombinant subunit + adjuvant | gE glycoprotein + AS01B adjuvant |
| PCV15/PCV20 | Conjugate | T-cell dependent response |
| PPSV23 | Polysaccharide | T-cell independent |
| HPV | Recombinant VLP | L1 capsid antibodies |
| mRNA COVID | mRNA | Spike protein expression |

**Immunization in Special Populations:**

*Pregnancy:*
- Recommended: Tdap (27-36 weeks each pregnancy), Influenza, COVID-19, RSV (32-36 weeks)
- Contraindicated: Live vaccines (MMR, Varicella, LAIV)

*Immunocompromised:*
- Avoid live vaccines (LAIV, MMR, Varicella, live Zoster)
- May need higher doses or additional doses
- Timing relative to immunosuppression important

*Asplenia:*
- Pneumococcal, Meningococcal (ACWY + B), Hib vaccines critical
- Ideally vaccinate 2 weeks before elective splenectomy`,
      keyTerms: [
        { term: 'conjugate vaccine', definition: 'Vaccine linking polysaccharide antigen to protein carrier, inducing T-cell dependent immunity' },
        { term: 'polysaccharide vaccine', definition: 'Vaccine using bacterial capsule sugars; induces T-cell independent response' },
        { term: 'VLP (virus-like particle)', definition: 'Self-assembling protein structures mimicking virus surface without genetic material' },
        { term: 'adjuvant', definition: 'Substance added to vaccine to enhance immune response' },
        { term: 'AS01B', definition: 'Adjuvant system containing MPL and QS-21, used in Shingrix' },
      ],
      clinicalNotes: 'Check immunization records. Use state immunization registries. Consider serologic testing for uncertain history (MMR, Varicella, Hepatitis B). Administer multiple vaccines at same visit when possible.',
    },
    4: {
      level: 4,
      summary: 'Adult immunization optimization requires understanding vaccine immunobiology, waning immunity kinetics, correlates of protection, special population considerations, and health system implementation strategies.',
      explanation: `**Advanced Vaccine Immunology:**

**Immunological Basis of Adult Vaccination:**

*Waning Immunity:*
- Antibody titers decline over time (half-life varies by vaccine)
- Memory B and T cells persist longer than antibodies
- Anamnestic response upon boosting or exposure
- Some vaccines provide lifelong immunity; others require boosters

| Vaccine | Duration of Protection | Correlate of Protection |
|---------|----------------------|------------------------|
| Tetanus | ~10 years | Anti-toxin IgG ≥0.1 IU/mL |
| Pertussis | 4-12 years | Anti-PT antibodies (no threshold) |
| Influenza | ~6 months | HAI ≥1:40 (50% protection) |
| HPV | 10+ years (ongoing) | Anti-L1 IgG |
| Shingrix | 4+ years (97% at year 4) | Cell-mediated immunity |
| Pneumococcal | Variable by serotype | Anti-capsular IgG + OPA |

*Immunosenescence:*
- Decreased naive T cells
- Impaired germinal center reactions
- Lower antibody titers/affinity
- Strategies: Higher doses, adjuvants, prime-boost

**Evidence-Based Vaccine Recommendations:**

*Influenza in Adults 65+:*

| Vaccine | Relative Efficacy vs Standard | Mechanism |
|---------|------------------------------|-----------|
| High-dose (60mcg) | +24% | Higher antigen dose |
| Adjuvanted (MF59) | +22% | Adjuvant-enhanced response |
| Recombinant (45mcg) | +30% | Higher dose, no egg adaptation |

*Zoster Vaccination Strategy:*
- RZV (Shingrix) efficacy: 97% (50-69), 91% (70+)
- Duration: 97% at year 4, 84% at year 8
- Recommended even after prior ZVL (Zostavax) or shingles episode
- 2 doses, 2-6 months apart (minimum 4 weeks if needed)
- Common reactions: Injection site pain (78%), myalgias, fatigue

**Complex Vaccination Scenarios:**

*Solid Organ Transplant:*
- Complete vaccination 2-4 weeks before transplant
- Post-transplant: Avoid live vaccines; response diminished
- Re-vaccination may be needed post-transplant
- Consider pretransplant pneumococcal series completion

*HIV Infection:*
- CD4 >200: Can receive live vaccines (MMR, Varicella)
- CD4 <200: Avoid live vaccines
- May have diminished responses; consider titers
- Pneumococcal, influenza, hepatitis particularly important

*Biologic Therapy:*
- Timing varies by agent and vaccine
- TNF inhibitors: Live vaccines contraindicated
- B-cell depleting (rituximab): Vaccinate before or delay after
- JAK inhibitors: Avoid live vaccines; shingles risk elevated

**Contraindications and Precautions:**

*True Contraindications:*
- Anaphylaxis to vaccine or component
- For live vaccines: Pregnancy, severe immunocompromise
- LAIV: Close contact with severely immunocompromised

*Precautions (evaluate risk-benefit):*
- Moderate-severe acute illness (defer)
- Guillain-Barre within 6 weeks of prior dose
- History of arthus reaction to tetanus

*NOT Contraindications:*
- Mild illness
- Antibiotic therapy
- Pregnant household contacts (except smallpox)
- Breastfeeding (most vaccines)
- Immunocompromised household contacts (except OPV, smallpox)`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Immune marker associated with protection against disease; used to predict vaccine efficacy' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune function affecting vaccine responses' },
        { term: 'OPA (opsonophagocytic activity)', definition: 'Functional antibody assay measuring ability to promote bacterial killing' },
        { term: 'HAI (hemagglutination inhibition)', definition: 'Serological assay measuring influenza antibodies; HAI ≥1:40 considered protective' },
        { term: 'anamnestic response', definition: 'Rapid, enhanced immune response upon re-exposure due to immunological memory' },
      ],
      clinicalNotes: 'For immunocompromised patients, consult IDSA guidelines. Document vaccine manufacturer and lot number. Report adverse events to VAERS. Consider prophylactic antipyretics for Shingrix reactogenicity.',
    },
    5: {
      level: 5,
      summary: 'Adult immunization practice integrates vaccinology, implementation science, health economics, equity considerations, and emerging technologies to maximize population-level protection while addressing individual patient complexities and system-level barriers.',
      explanation: `**Systems-Level Immunization Optimization:**

**1. Immunization Program Implementation:**

*Healthcare System Strategies:*
- Standing orders protocols (nurse-initiated vaccination)
- EHR-based alerts and reminders
- Immunization information systems (IIS) integration
- Quality metrics (HEDIS, MIPS measures)
- Pharmacist-administered vaccines expansion

*Barriers to Adult Vaccination:*
| Barrier | Intervention |
|---------|-------------|
| Lack of recommendation | Provider education, standing orders |
| Access | Pharmacy vaccination, workplace clinics |
| Cost | Vaccine program funding, insurance navigation |
| Vaccine hesitancy | Motivational interviewing, trusted messengers |
| Fragmented records | IIS access, patient portals |

*Quality Metrics:*
- Flu vaccination rate (MIPS, ACO)
- Pneumococcal vaccination (65+)
- Zoster vaccination (50+)
- Documentation in IIS

**2. Vaccine Development Pipeline:**

*Next-Generation Vaccines:*

| Target | Platform | Status |
|--------|----------|--------|
| Universal influenza | Chimeric HA, conserved epitopes | Phase I-II |
| RSV (adults 60+) | Protein subunit (Arexvy, Abrysvo) | FDA approved 2023 |
| CMV | mRNA, protein subunit | Phase III |
| HSV-2 | Various platforms | Phase II |
| Pan-coronavirus | Mosaic nanoparticle | Preclinical |
| Therapeutic HPV | MVA vector, protein | Phase II |

*mRNA Platform Advantages:*
- Rapid development timeline
- Scalable manufacturing
- Multivalent capability
- Self-adjuvanting properties
- Challenges: Cold chain, reactogenicity, durability

**3. Health Equity in Vaccination:**

*Disparities:*
- Influenza vaccination: White 54%, Black 43%, Hispanic 41%
- Shingles: White 36%, Black 21%
- HPV (young adults): Disparities by socioeconomic status
- COVID-19: Initial disparities, since narrowed

*Targeted Interventions:*
- Community health worker outreach
- Culturally tailored messaging
- Faith-based vaccination clinics
- Mobile vaccination units
- Removing ID/insurance requirements where possible
- Translated materials and interpreters

**4. Cost-Effectiveness Analysis:**

*QALY-Based Analysis:*

| Vaccine | Cost per QALY | Interpretation |
|---------|---------------|----------------|
| Influenza (65+) | Cost-saving to $28,000 | Highly cost-effective |
| Shingrix (50+) | $30,000-$60,000 | Cost-effective |
| Pneumococcal (65+) | Cost-saving to $50,000 | Cost-effective |
| HPV (catch-up adults) | $100,000-$150,000 | Borderline |
| COVID-19 boosters | Varies by scenario | Generally cost-effective |

*Willingness-to-Pay Thresholds:*
- US: Generally $50,000-$150,000/QALY
- WHO: 1-3x GDP per capita

**5. Vaccine Safety Surveillance:**

*Monitoring Systems:*
- VAERS: Passive surveillance (detects signals)
- Vaccine Safety Datalink (VSD): Active surveillance
- CISA: Clinical consultation network
- BEST: FDA biologics surveillance
- International collaboration (Brighton Collaboration)

*Signal Detection and Evaluation:*
- Disproportionality analysis (VAERS)
- Rapid cycle analysis (VSD)
- Self-controlled case series
- Cohort studies

*Recent Safety Signals:*
- mRNA vaccines: Myocarditis (young males, post-dose 2)
- J&J COVID: TTS (thrombosis with thrombocytopenia)
- Dengue vaccine (Dengvaxia): Seronegative enhancement
- Rotavirus: Intussusception (small increased risk)

**6. Special Scenarios:**

*Outbreak Response Vaccination:*
- Hepatitis A outbreak: Post-exposure prophylaxis
- Meningococcal outbreak: Mass vaccination
- Measles exposure: MMR within 72h or IG within 6 days
- Mpox: JYNNEOS for high-risk contacts

*International Adoptees/Immigrants:*
- Vaccine records may be unreliable
- Options: Accept records, repeat vaccines, or serology
- ACIP guidance by age and vaccine type
- Consider hepatitis B screening (HBsAg, anti-HBc, anti-HBs)

*Altered Immunocompetence Categories:*
| Category | Live Vaccine | Inactivated | Notes |
|----------|-------------|-------------|-------|
| HIV CD4 <200 | Contraindicated | Yes (may be diminished) | Consider titers |
| Active chemo | Contraindicated | Timing-dependent | 3 months post-chemo |
| Solid organ transplant | Contraindicated | Yes | Pretransplant preferred |
| HSCT | Contraindicated | Revaccinate per protocol | Start 6-12 months post |
| High-dose steroids | Contraindicated | Yes | Wait 1 month after steroids |
| Biologic therapy | Varies by agent | Generally yes | Check specific guidance |

**7. Future Directions:**

- Correlates of protection for T-cell mediated immunity
- Mucosal vaccines for respiratory pathogens
- Personalized vaccination (genetic predictors of response)
- Thermostable formulations for global access
- Combination vaccines reducing visits
- AI-driven adverse event detection`,
      keyTerms: [
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; passive surveillance system co-managed by CDC and FDA' },
        { term: 'VSD', definition: 'Vaccine Safety Datalink; active surveillance network of integrated healthcare organizations' },
        { term: 'TTS', definition: 'Thrombosis with thrombocytopenia syndrome; rare adverse event associated with adenoviral vector vaccines' },
        { term: 'MIPS', definition: 'Merit-based Incentive Payment System; quality reporting program affecting Medicare reimbursement' },
        { term: 'IIS', definition: 'Immunization Information Systems; state/regional registries tracking vaccination records' },
      ],
      clinicalNotes: `**Implementation Pearls:**
- Use every clinical encounter as vaccination opportunity
- Standing orders empower nurses/pharmacists to vaccinate
- IIS access enables record reconciliation across providers
- Address hesitancy with empathic listening, not confrontation
- Report all serious adverse events to VAERS (mandatory for certain events)
- Consider catch-up vaccination during hospitalizations
- Coordinate with public health for outbreak response`,
    },
  },

  media: [
    {
      id: 'adult-immunization-schedule-chart',
      type: 'diagram',
      filename: 'adult-immunization-schedule-2024.svg',
      title: 'Adult Immunization Schedule 2024-2025',
      description: 'Visual chart of recommended adult vaccines by age group',
    },
  ],

  citations: [
    {
      id: 'cdc-adult-schedule',
      type: 'website',
      title: 'Recommended Adult Immunization Schedule',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/adult.html',
      accessedDate: '2025-01-24',
    },
    {
      id: 'acip-recommendations',
      type: 'website',
      title: 'ACIP Vaccine Recommendations',
      source: 'Advisory Committee on Immunization Practices',
      url: 'https://www.cdc.gov/vaccines/acip/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-pediatric-immunizations', targetType: 'concept', relationship: 'related', label: 'Pediatric Immunizations' },
    { targetId: 'concept-travel-vaccines', targetType: 'concept', relationship: 'related', label: 'Travel Vaccines' },
    { targetId: 'concept-vaccine-preventable-diseases', targetType: 'concept', relationship: 'related', label: 'Vaccine-Preventable Diseases' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'immunizations', 'public health', 'infectious disease'],
    keywords: ['vaccines', 'immunization schedule', 'ACIP', 'flu shot', 'shingles', 'pneumococcal', 'COVID-19'],
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
