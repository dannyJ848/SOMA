/**
 * Immunization Schedule
 *
 * Educational content on the CDC recommended childhood immunization schedule,
 * catch-up schedules, contraindications, and special population considerations.
 */

import { EducationalContent } from '../../types';

export const IMMUNIZATION_SCHEDULE: EducationalContent = {
  id: 'pediatrics-immunization-schedule',
  type: 'topic',
  name: 'Immunization Schedule',
  nameEs: 'Calendario de Vacunacion',
  alternateNames: [
    'Childhood vaccination schedule',
    'CDC immunization schedule',
    'Pediatric vaccine schedule',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Vaccines protect children from serious diseases. Doctors give vaccines at specific ages, starting at birth, to build protection when children need it most.',
      explanation: `Vaccines train the immune system to fight germs without causing illness. Here is the general schedule:

**Birth**
- Hepatitis B (first dose)

**2 Months**
- DTaP (diphtheria, tetanus, whooping cough)
- IPV (polio)
- Hib (bacterial meningitis)
- PCV (pneumonia, ear infections)
- Rotavirus (stomach flu)
- Hepatitis B (second dose)

**4 Months**
- Same vaccines as 2 months (second doses)

**6 Months**
- DTaP, IPV, PCV, Rotavirus (third doses)
- Hepatitis B (third dose)
- Start flu vaccine every year (after 6 months of age)

**12-15 Months**
- MMR (measles, mumps, rubella)
- Varicella (chickenpox)
- Hepatitis A (first dose)
- PCV and Hib boosters

**4-6 Years (Before School)**
- DTaP, IPV, MMR, Varicella boosters

**11-12 Years**
- Tdap (tetanus, diphtheria, whooping cough booster)
- HPV (protects against certain cancers)
- Meningococcal vaccine

**Why the Schedule Matters**
- Babies are most at risk for serious infections in the first year of life
- Vaccines are timed to protect as early as safely possible
- Delaying vaccines leaves children unprotected during their most vulnerable period`,
      keyTerms: [
        { term: 'vaccine', definition: 'A medicine that teaches your body to fight a specific germ so you do not get sick from it' },
        { term: 'booster', definition: 'An extra dose of a vaccine given later to keep protection strong' },
        { term: 'immunization', definition: 'The process of becoming protected against a disease, usually by getting a vaccine' },
      ],
      analogies: [
        'A vaccine is like a fire drill for your immune system. It practices fighting a germ so it is ready if the real thing shows up.',
        'Booster shots are like reviewing for a test. Extra practice helps your body remember how to fight.',
      ],
      patientCounselingPoints: [
        'Vaccines are very safe. Mild side effects like soreness or a low fever are normal and go away quickly.',
        'Following the recommended schedule gives your child the best protection at the right time.',
        'If your child missed a vaccine, talk to your doctor about catching up.',
        'Vaccines protect not just your child but also babies too young to be vaccinated.',
      ],
    },
    2: {
      level: 2,
      summary:
        'The CDC childhood immunization schedule specifies vaccines from birth through 18 years with timing based on earliest age of efficacy and disease risk.',
      explanation: `**Recommended Schedule (Birth to 15 Months)**

| Vaccine | Birth | 2 mo | 4 mo | 6 mo | 12-15 mo |
|---------|-------|------|------|------|----------|
| Hep B | Dose 1 | Dose 2 | - | Dose 3 | - |
| RV | - | Dose 1 | Dose 2 | Dose 3* | - |
| DTaP | - | Dose 1 | Dose 2 | Dose 3 | - |
| Hib | - | Dose 1 | Dose 2 | Dose 3** | Booster |
| PCV15/20 | - | Dose 1 | Dose 2 | Dose 3 | Booster |
| IPV | - | Dose 1 | Dose 2 | Dose 3 | - |
| Influenza | - | - | - | Annual (6 mo+) | Annual |
| MMR | - | - | - | - | Dose 1 |
| Varicella | - | - | - | - | Dose 1 |
| Hep A | - | - | - | - | Dose 1 |

*RV: 2 doses if Rotarix, 3 if RotaTeq
**Hib: PRP-OMP (PedvaxHIB) needs 2 primary + booster

**18 Months to 18 Years**
| Vaccine | 15-18 mo | 4-6 yr | 11-12 yr | 16 yr |
|---------|----------|--------|----------|-------|
| DTaP/Tdap | Dose 4 | Dose 5 | Tdap | - |
| IPV | - | Dose 4 | - | - |
| MMR | - | Dose 2 | - | - |
| Varicella | - | Dose 2 | - | - |
| Hep A | Dose 2 | - | - | - |
| HPV | - | - | 2-3 doses | - |
| MenACWY | - | - | Dose 1 | Booster |

**Minimum Intervals**
| Vaccine | Min. Interval |
|---------|--------------|
| DTaP doses 1-3 | 4 weeks apart |
| DTaP dose 3 to 4 | 6 months |
| Hep B dose 2 to 3 | 8 weeks (16 weeks after dose 1) |
| MMR dose 1 to 2 | 4 weeks |

**Contraindications**
| Contraindication | Affected Vaccines |
|-----------------|-------------------|
| Severe allergic reaction to prior dose | That specific vaccine |
| Pregnancy | MMR, Varicella, LAIV |
| Severe immunodeficiency | Live vaccines (MMR, Varicella, LAIV, RV) |
| Intussusception history | Rotavirus |
| Encephalopathy within 7 days of pertussis vaccine | DTaP |

**Common Misconceptions**
| Misconception | Reality |
|--------------|---------|
| "Too many vaccines overwhelm the immune system" | Infants encounter thousands of antigens daily; vaccines use a tiny fraction |
| "Vaccines cause autism" | Thoroughly disproven by multiple large studies involving millions of children |
| "Natural immunity is better" | Many diseases kill or disable before natural immunity develops |`,
      keyTerms: [
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices; CDC advisory body developing the US vaccine schedule' },
        { term: 'DTaP', definition: 'Diphtheria, Tetanus, acellular Pertussis vaccine for children under 7; Tdap is the adolescent/adult booster' },
        { term: 'conjugate vaccine', definition: 'Vaccine linking a sugar antigen to a protein carrier, making it effective in young children' },
        { term: 'minimum interval', definition: 'Shortest time between doses for effective immune response; doses given too close may not count' },
        { term: 'catch-up schedule', definition: 'Modified timeline for children who have fallen behind on immunizations' },
      ],
      analogies: [
        'Minimum intervals are like rest days between workouts. The immune system needs time to build its response.',
        'The vaccination schedule is like a building blueprint. Each vaccine is placed at the right time for strongest protection.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Immunization practice requires understanding vaccine immunology (live vs. inactivated), catch-up algorithms, true vs. false contraindications, and management of immunocompromised children.',
      explanation: `**Vaccine Types and Immunology**

| Type | Examples | Response | Key Notes |
|------|---------|----------|-----------|
| Live attenuated | MMR, Varicella, RV, LAIV | Strong cellular + humoral; durable | Contraindicated if immunocompromised; 28-day interval between live vaccines |
| Inactivated | IPV, Hep A, IIV | Primarily humoral; needs boosters | Safe in immunocompromised |
| Subunit/conjugate | DTaP, Hib, PCV, HPV, Hep B, MenACWY | Humoral; T-cell dependent (conjugate) | Conjugation critical for response <2 years |
| Toxoid | Tetanus, Diphtheria | Anti-toxin antibodies | Boosters every 10 years |
| mRNA | COVID-19 | Humoral + cellular | Cold chain requirements |

**Catch-Up Principles**
1. Use minimum intervals and minimum ages
2. Never restart a series regardless of time elapsed
3. Multiple vaccines can be given at same visit (different sites)
4. Live injectable vaccines: same day or 28+ days apart
5. No limit on simultaneous inactivated vaccines

**True vs. False Contraindications**
| True | False (OK to vaccinate) |
|------|------------------------|
| Anaphylaxis to prior dose/component | Mild illness with low-grade fever |
| Encephalopathy within 7d of pertussis vaccine | Current antibiotic therapy |
| Severe immunodeficiency (live vaccines) | Prematurity (use chronologic age) |
| Pregnancy (live vaccines) | Breastfeeding |
| Intussusception history (RV) | Family history of adverse reactions |

**Special Populations**

*Premature Infants:*
- Vaccinate at chronologic age regardless of gestational age or weight
- Exception: Hep B in <2000g born to HBsAg-negative mother may delay
- HBsAg-positive mother: Hep B + HBIG within 12 hours regardless of weight

*Immunocompromised:*
| Condition | Live Vaccines | Inactivated |
|-----------|---------------|-------------|
| HIV (CD4 >15%) | MMR/Varicella OK | Standard |
| HIV (CD4 <15%) | Contraindicated | Standard |
| High-dose steroids (>2 mg/kg/d x14d) | Wait 1 month after stopping | Standard |
| Post-HSCT | Revaccinate 6-12 months post | Per protocol |
| Asplenia | Standard | Add MenACWY, MenB, PCV, Hib |

*Egg Allergy:*
- Influenza IIV: Safe for all egg-allergic patients; observe 30 min if severe
- MMR: Grown in fibroblasts, NOT egg; safe
- Yellow fever: Contains egg protein; requires skin test

**Administration**
| Age | Site | Needle | Route |
|-----|------|--------|-------|
| 0-28 days | Anterolateral thigh | 5/8 inch | IM |
| 1-2 years | Anterolateral thigh | 1 inch | IM |
| 3-18 years | Deltoid | 1-1.5 inch | IM |`,
      keyTerms: [
        { term: 'live attenuated vaccine', definition: 'Weakened but living pathogen producing strong, durable immunity; contraindicated in immunocompromised; examples: MMR, varicella, rotavirus' },
        { term: 'conjugate vaccine', definition: 'Polysaccharide antigen linked to protein carrier converting T-independent to T-dependent response; essential for immunity in children <2 years' },
        { term: 'HBIG', definition: 'Hepatitis B Immune Globulin; immediate passive immunity given with Hep B vaccine to newborns of HBsAg-positive mothers within 12 hours' },
        { term: 'herd immunity', definition: 'Indirect protection of unvaccinated individuals when sufficient population immunity reduces transmission' },
        { term: 'false contraindication', definition: 'Condition mistakenly believed to preclude vaccination (mild illness, prematurity, antibiotics); recognizing these prevents missed opportunities' },
        { term: 'asplenia', definition: 'Absent/non-functional spleen increasing risk for encapsulated organisms; requires additional vaccines' },
      ],
      clinicalNotes:
        'The most common cause of under-vaccination is missed opportunities from false contraindications. Mild illness is NOT a reason to delay. Premature infants use chronologic age. The 28-day rule for live vaccines applies only when given at DIFFERENT visits; two live vaccines on the SAME day is acceptable.',
    },
    4: {
      level: 4,
      summary:
        'Advanced immunization practice encompasses vaccine adjuvant science, correlates of protection, AEFI surveillance systems, and global elimination strategies.',
      explanation: `**Vaccine Adjuvants**
| Adjuvant | Vaccines | Mechanism |
|----------|---------|-----------|
| Aluminum salts | DTaP, Hep B, PCV, HPV | Depot effect; NLRP3 inflammasome |
| AS04 (alum + MPL) | Cervarix | TLR4 agonist; Th1 enhancement |
| AS01B (MPL + QS-21) | Shingrix | Potent Th1 and CD8+ response |
| MF59 (squalene) | Fluad | Enhanced antigen processing |
| CpG 1018 | Heplisav-B | TLR9 agonist; B cell activation |

**Correlates of Protection**
| Vaccine | Protective Level | Test |
|---------|-----------------|------|
| Hep B | Anti-HBs >=10 mIU/mL | Quantitative anti-HBs |
| Tetanus | >=0.1 IU/mL | ELISA |
| Measles | Anti-measles IgG positive | ELISA/PRNT |
| Hib | Anti-PRP >=0.15 mcg/mL (short); >=1.0 (long) | ELISA |
| Pneumococcal | >=1.3 mcg/mL per serotype | Multiplex ELISA |

**AEFI Surveillance Systems**
| System | Type | Purpose |
|--------|------|---------|
| VAERS | Passive | Signal detection; anyone can report |
| VSD | Active | Large linked database; causality |
| CISA | Expert consult | Complex adverse event evaluation |
| V-safe | Active (smartphone) | Post-COVID monitoring |

*Established Rare Adverse Events:*
| Vaccine | Event | Rate |
|---------|-------|------|
| Rotavirus | Intussusception | 1-7/100,000 first doses |
| MMR | Febrile seizure | 1/3,000 (day 7-10) |
| MMR | ITP | 1/25,000-40,000 |
| DTaP | HHE | 1/1,000-2,000 (not a contraindication) |
| COVID mRNA | Myocarditis | ~1/10,000-20,000 (adolescent males, dose 2) |

**VICP (Vaccine Injury Compensation Program)**
- No-fault federal program (1986 NCVIA)
- Vaccine Injury Table lists presumptive injuries
- Funded by $0.75 excise tax per dose
- Covers all recommended childhood vaccines

**Global Immunization**
| Initiative | Goal |
|-----------|------|
| WHO EPI | Universal childhood immunization |
| Gavi | Equitable access for LMICs |
| GPEI | Polio eradication |
| IA2030 | Reach zero-dose children |

**Outbreak Response**
| Scenario | Action |
|----------|--------|
| Measles exposure (unvaccinated) | MMR within 72h or IG within 6 days |
| Varicella exposure (immunocompromised) | VariZIG within 10 days |
| Meningococcal outbreak | Serogroup-appropriate vaccine + chemoprophylaxis |
| Pertussis exposure | Azithromycin prophylaxis for close contacts |`,
      keyTerms: [
        { term: 'adjuvant', definition: 'Substance enhancing vaccine immune response; aluminum salts most common; newer adjuvants include TLR agonists and squalene emulsions' },
        { term: 'correlate of protection', definition: 'Measurable immune marker associated with disease protection; used to evaluate vaccine efficacy' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; passive surveillance for signal detection; does not establish causation' },
        { term: 'VSD', definition: 'Vaccine Safety Datalink; active surveillance network of >12 million members for rigorous vaccine safety studies' },
        { term: 'VICP', definition: 'Vaccine Injury Compensation Program; no-fault federal system for proven vaccine injuries' },
        { term: 'zero-dose children', definition: 'Children with no routine vaccines; estimated 14.3 million globally; primary IA2030 target' },
      ],
      clinicalNotes:
        'VAERS reports do not establish causation. Clinicians must report Vaccine Injury Table events. The HHE after DTaP is self-limited and NOT a future contraindication. Myocarditis after mRNA COVID vaccine is typically mild and self-resolving; benefits continue to outweigh risks.',
    },
    5: {
      level: 5,
      summary:
        'Expert vaccinology encompasses next-generation platforms, mucosal immunity strategies, systems vaccinology, implementation science, and ethical frameworks for vaccine policy.',
      explanation: `**Next-Generation Platforms**
| Platform | Mechanism | Advantages | Pipeline |
|----------|-----------|-----------|---------|
| mRNA (LNP) | In vivo antigen translation | Rapid development, strong cellular immunity | RSV, influenza, CMV, EBV |
| Self-amplifying RNA | Self-replicating construct | Lower dose, sustained expression | COVID, rabies |
| Viral vector | Adenovirus/MVA carrying target gene | Strong cellular immunity | Ebola (approved), HIV, TB |
| Protein nanoparticle | Self-assembling display | Multivalent, thermostable | RSV, malaria |
| OMV | Bacterial membrane vesicles | Native antigen presentation | MenB, Shigella |

**Mucosal Immunity**
- Parenteral vaccines: systemic IgG but limited mucosal IgA
- Mucosal vaccines (oral, intranasal): secretory IgA at infection site
- Intranasal COVID vaccines: prevent transmission, not just disease
- Oral rotavirus: gold standard mucosal vaccine
- Challenge: Reduced oral vaccine efficacy in LMICs (enteropathy, maternal Ab, microbiome)

**Systems Vaccinology**
| Approach | Application |
|----------|------------|
| Transcriptomics | Day 1-7 signatures predict day 28 response (Pulendran, Yellow Fever) |
| Epigenetic reprogramming | BCG trained immunity via histone modifications (H3K4me3) |
| Metabolomics | Amino acid/lipid profiles correlate with immunogenicity |
| Single-cell analysis | BCR repertoire identifies broadly neutralizing lineages |
| Computational modeling | In silico T cell epitope prediction |

**Vaccine Hesitancy (WHO SAGE 3 Cs)**
| Factor | Intervention |
|--------|-------------|
| Confidence (trust) | Transparent communication, provider recommendation |
| Complacency (low risk perception) | Disease awareness campaigns |
| Convenience (access) | School-based programs, reduced cost |

*Evidence-Based Communication:*
- Strong provider recommendation is the single most effective intervention
- Presumptive approach > participatory approach
- Motivational interviewing > confrontation
- Social norms messaging effective

**Pediatric Pipeline**
| Vaccine | Target | Status |
|---------|--------|--------|
| Nirsevimab | RSV (all infants) | Approved (2023) |
| RSV maternal (Abrysvo) | Infant protection via placental Ab | Approved (2023) |
| MenABCWY | Simplified meningococcal schedule | Phase 3 |
| GBS maternal | Neonatal sepsis prevention | Phase 2 |
| CMV mRNA | Congenital infection prevention | Phase 3 |
| Universal influenza | Conserved HA stalk | Phase 1-2 |
| EBV mRNA | Mononucleosis prevention | Phase 1 |`,
      keyTerms: [
        { term: 'systems vaccinology', definition: 'High-throughput omics approaches to predict and understand vaccine immune responses at a systems level' },
        { term: 'trained immunity', definition: 'Epigenetic reprogramming of innate immune cells after stimuli like BCG leading to enhanced non-specific responses; mediated by histone modifications' },
        { term: 'mucosal immunity', definition: 'Immune defense at mucosal surfaces via secretory IgA; parenteral vaccines generally do not induce this, driving mucosal platform development' },
        { term: 'vaccine hesitancy', definition: 'Delay or refusal of vaccines despite availability; WHO top-10 global health threat; driven by confidence, complacency, and convenience' },
        { term: 'presumptive communication', definition: 'Provider strategy stating vaccines as default rather than asking; associated with higher acceptance rates' },
      ],
      clinicalNotes: `**Expert Integration:**
- mRNA vaccines for RSV, CMV, and EBV are the most significant near-term pipeline advances for pediatrics.
- Nirsevimab + maternal RSV vaccine provide complementary RSV prevention strategies.
- BCG trained immunity is well-documented in LMICs; heterologous effects on all-cause mortality are significant.
- Provider recommendation remains the single most effective vaccine acceptance intervention.
- Pentavalent MenABCWY will simplify the adolescent schedule once approved.`,
    },
  },

  media: [
    {
      id: 'cdc-schedule-infographic',
      type: 'diagram',
      filename: 'cdc-childhood-immunization-schedule.svg',
      title: 'CDC Recommended Immunization Schedule',
      description: 'Visual representation of the childhood immunization schedule birth through 18 years',
    },
    {
      id: 'vaccine-types-diagram',
      type: 'diagram',
      filename: 'vaccine-types-mechanism.svg',
      title: 'Vaccine Types and Mechanisms',
      description: 'Comparison of live, inactivated, subunit, conjugate, toxoid, and mRNA platforms',
    },
  ],

  citations: [
    {
      id: 'cdc-schedule-2024',
      type: 'website',
      title: 'Recommended Child and Adolescent Immunization Schedule',
      source: 'CDC',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
    {
      id: 'aap-red-book',
      type: 'textbook',
      title: 'Red Book: Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP',
      license: 'Proprietary',
    },
    {
      id: 'plotkin-vaccines',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin, S.A.', 'Orenstein, W.A.', 'Offit, P.A.'],
      source: 'Elsevier',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    { targetId: 'pediatrics-vaccine-safety', targetType: 'topic', relationship: 'sibling', label: 'Vaccine Safety' },
    { targetId: 'pediatrics-common-conditions', targetType: 'topic', relationship: 'related', label: 'Common Pediatric Conditions' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['pediatrics', 'infectious disease', 'public health', 'immunology'],
    keywords: ['vaccines', 'immunization', 'CDC schedule', 'ACIP', 'DTaP', 'MMR', 'HPV', 'catch-up', 'contraindications', 'herd immunity'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'family medicine', 'preventive medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
