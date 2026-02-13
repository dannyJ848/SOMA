/**
 * Immunization Guide for Parents
 *
 * Educational content covering childhood vaccines, recommended schedules,
 * safety data, addressing vaccine hesitancy, and the immunological basis
 * of vaccination from a parent-centered perspective.
 */

import { EducationalContent } from '../types';

export const immunizationGuideParentsContent: EducationalContent = {
  id: 'topic-immunization-guide-parents',
  type: 'topic',
  name: 'Immunization Guide for Parents',
  nameEs: 'Guia de Vacunacion para Padres',
  alternateNames: ['Vaccine guide for parents', 'Childhood immunization schedule', 'Vaccination FAQ'],

  levels: {
    1: {
      level: 1,
      summary:
        'Vaccines protect your child from serious diseases by teaching their immune system how to fight germs. Following the recommended schedule is one of the most important things you can do to keep your child healthy.',
      explanation: `Vaccines are one of the greatest achievements in medicine. They have eliminated or nearly eliminated diseases that once killed or disabled thousands of children every year.

**How Vaccines Work**
- Vaccines contain a weakened or inactive piece of a germ (or instructions to make one)
- Your child's immune system learns to recognize and fight that germ
- If your child is ever exposed to the real disease, their body is ready to fight it off
- It is like a fire drill for the immune system: practice now so you are ready for the real thing

**The Recommended Vaccine Schedule (Birth to 6 Years)**
| Age | Vaccines |
|-----|---------|
| Birth | Hepatitis B (1st dose) |
| 2 months | DTaP, IPV, Hib, PCV13, RV, Hepatitis B (2nd dose) |
| 4 months | DTaP, IPV, Hib, PCV13, RV |
| 6 months | DTaP, PCV13, RV, Hepatitis B (3rd dose), flu (yearly) |
| 12-15 months | MMR, Varicella, Hepatitis A, PCV13, Hib |
| 4-6 years | DTaP, IPV, MMR, Varicella |

**What Each Vaccine Protects Against**
| Vaccine | Diseases Prevented |
|---------|-------------------|
| DTaP | Diphtheria, tetanus (lockjaw), pertussis (whooping cough) |
| IPV | Polio |
| Hib | Haemophilus influenzae type b (meningitis, pneumonia) |
| PCV13 | Pneumococcal disease (meningitis, blood infections, ear infections) |
| RV | Rotavirus (severe diarrhea and vomiting) |
| MMR | Measles, mumps, rubella |
| Varicella | Chickenpox |
| Hepatitis A & B | Liver infections |
| Flu | Influenza (given every year starting at 6 months) |

**Are Vaccines Safe?**
- Vaccines are among the most studied medical products in the world
- Millions of children receive them safely every year
- Serious side effects are extremely rare
- Common side effects are mild: sore arm, low fever, fussiness for 1-2 days
- The risk of disease is far greater than the risk of the vaccine

**Common Concerns and Facts**
- **"Too many vaccines at once":** Your child's immune system handles thousands of germs every day. Vaccines use a tiny fraction of that capacity
- **"Vaccines cause autism":** This has been studied extensively in millions of children. Vaccines do NOT cause autism
- **"Natural immunity is better":** Getting the disease can cause serious harm or death. Vaccines give protection without the danger
- **"My child doesn't need vaccines because these diseases are rare":** They are rare BECAUSE of vaccines. When vaccination rates drop, diseases come back

**When to Delay or Skip a Vaccine**
- Your child has a severe allergic reaction to a previous dose
- Your child has a weakened immune system (some vaccines may need to be modified)
- Your child has a moderate to severe illness (wait until they recover)
- A mild cold is NOT a reason to delay vaccines

**After Vaccination**
- Apply a cool cloth to the sore spot
- Give your child extra comfort and fluids
- Acetaminophen or ibuprofen can help with pain or fever (ask your doctor about doses)
- Call your doctor if your child has a fever over 105 F, cries for more than 3 hours, or you are worried`,
      keyTerms: [
        { term: 'vaccine', definition: 'A preparation that teaches your immune system to fight a specific disease without getting sick from the disease itself' },
        { term: 'immune system', definition: 'Your body\'s defense system that recognizes and fights germs like bacteria and viruses' },
        { term: 'booster', definition: 'An additional dose of a vaccine given after the first doses to strengthen and extend protection' },
        { term: 'herd immunity', definition: 'When enough people in a community are vaccinated, it protects even those who cannot be vaccinated, like very young babies' },
        { term: 'antibodies', definition: 'Proteins made by your immune system that recognize and help destroy specific germs' },
        { term: 'side effects', definition: 'Common reactions after a vaccine like a sore arm or mild fever; they show the immune system is working' },
      ],
      analogies: [
        'A vaccine is like a wanted poster for your immune system. It shows your body what a dangerous germ looks like so your body can recognize and stop it before it causes harm.',
        'Herd immunity works like a firebreak around a forest. When enough people are vaccinated, the disease cannot spread easily, protecting everyone including those who cannot be vaccinated.',
        'Getting vaccines on schedule is like building a wall brick by brick. Each dose adds another layer of protection until the wall is strong enough to keep diseases out.',
      ],
      patientCounselingPoints: [
        'It is normal to have questions about vaccines. Ask your pediatrician to explain anything you are unsure about.',
        'Mild reactions like a sore arm or low fever mean the vaccine is working. These go away in 1-2 days.',
        'Staying on schedule is important. Delaying vaccines leaves your child unprotected during the time they are most vulnerable.',
        'If your child missed vaccines, it is never too late to catch up. Your doctor can create a catch-up schedule.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Childhood immunization follows an evidence-based schedule designed to provide protection during periods of greatest vulnerability. Understanding vaccine types, the schedule rationale, contraindications, and addressing parental concerns are essential for optimal vaccine uptake.',
      explanation: `**Vaccine Types and Mechanisms**
| Type | Mechanism | Examples |
|------|-----------|---------|
| Live attenuated | Weakened virus replicates; strong immune response | MMR, varicella, rotavirus, live flu (nasal) |
| Inactivated | Killed pathogen; cannot replicate | IPV, hepatitis A, inactivated flu |
| Subunit/conjugate | Purified protein or polysaccharide components | DTaP (toxoid), Hib (conjugate), PCV13, hepatitis B |
| mRNA | Instructions for cells to make viral protein | COVID-19 (Pfizer, Moderna) |
| Viral vector | Harmless virus delivers antigen gene | COVID-19 (J&J); not routine pediatric |

**Schedule Rationale**
- Timing based on: waning maternal antibodies, age of highest disease risk, immune system maturity
- Multiple doses needed because: immune memory builds incrementally; booster doses recruit long-lived plasma cells and memory B cells
- Combination vaccines (e.g., Pediarix: DTaP-IPV-HepB) reduce injection count without reducing efficacy or safety

**Detailed CDC Recommended Schedule (2024)**
| Age | Vaccines | Notes |
|-----|---------|-------|
| Birth | HepB #1 | Within 24 hours; prevents perinatal transmission |
| 2 months | DTaP #1, IPV #1, Hib #1, PCV15/20 #1, RV #1, HepB #2 | Can give 6 antigens in 2-3 injections using combos |
| 4 months | DTaP #2, IPV #2, Hib #2, PCV #2, RV #2 | Continue series |
| 6 months | DTaP #3, PCV #3, RV #3, HepB #3, IIV (flu) | Flu vaccine annually from 6 months |
| 12-15 months | MMR #1, VAR #1, HepA #1, PCV #4, Hib booster | Live vaccines; can give simultaneously |
| 15-18 months | DTaP #4 | Fourth dose |
| 4-6 years | DTaP #5, IPV #4, MMR #2, VAR #2 | School entry doses |
| 11-12 years | Tdap, MenACWY, HPV (2-3 doses) | Adolescent platform |

**Contraindications vs. Precautions**
| Contraindication (DO NOT give) | Precaution (Consider risk/benefit) |
|-------------------------------|-----------------------------------|
| Severe allergic reaction (anaphylaxis) to prior dose or component | Moderate-severe acute illness |
| Encephalopathy within 7 days of pertussis vaccine (for DTaP) | History of GBS within 6 weeks of prior vaccine |
| Severe immunodeficiency (for live vaccines) | Recent blood product administration (delay live vaccines) |
| Pregnancy (for live vaccines) | History of intussusception (for rotavirus) |

**NOT Contraindications (Safe to Vaccinate):**
- Mild illness, low-grade fever, current antibiotic use
- Mild reaction to prior dose (soreness, fever <105 F)
- Family history of adverse reactions
- Prematurity (vaccinate on chronological age schedule)
- Breastfeeding
- Allergies to non-vaccine components (eggs for most vaccines; gelatin for some)

**Vaccine Safety Monitoring Systems**
| System | Purpose |
|--------|---------|
| VAERS | Passive reporting; anyone can report; detects safety signals |
| VSD (Vaccine Safety Datalink) | Active surveillance; 12 million members; rapid signal assessment |
| CISA (Clinical Immunization Safety Assessment) | Expert consultation for complex cases |
| v-safe | Smartphone-based active monitoring (COVID-19 era) |
| Global: WHO GVSI | International vaccine safety coordination |

**Addressing Vaccine Hesitancy**
| Strategy | Approach |
|----------|---------|
| Motivational interviewing | Open-ended questions; reflective listening; respect autonomy |
| Presumptive language | "Today we'll be giving the vaccines your child needs" vs. "Do you want vaccines?" |
| Address specific concerns | Listen; provide evidence-based answers without dismissing |
| Storytelling | Share (with consent) experiences of vaccine-preventable disease |
| Reliable resources | CDC, AAP, immunize.org; avoid social media misinformation |
| Scheduled follow-up | If parent declines, revisit at every subsequent visit |`,
      keyTerms: [
        { term: 'live attenuated vaccine', definition: 'A vaccine containing a weakened form of the virus that can replicate but not cause disease; produces strong, long-lasting immune response; examples include MMR and varicella' },
        { term: 'conjugate vaccine', definition: 'A vaccine that links a weak antigen (polysaccharide) to a strong antigen (protein carrier) to improve the immune response, especially in young children; examples include Hib and PCV' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; a passive surveillance system where anyone can report suspected vaccine side effects; used to detect potential safety signals' },
        { term: 'vaccine hesitancy', definition: 'Delay or refusal of vaccines despite availability; driven by concerns about safety, necessity, or mistrust; a top global health threat identified by WHO' },
        { term: 'presumptive language', definition: 'Communication approach where the provider presents vaccination as the expected next step rather than asking a yes/no question; associated with higher vaccine acceptance rates' },
        { term: 'combination vaccine', definition: 'A vaccine that protects against multiple diseases in one injection, such as Pediarix (DTaP-IPV-HepB); reduces injection count without reducing safety or efficacy' },
      ],
      patientCounselingPoints: [
        'The vaccine schedule is designed so your child is protected during the ages they are most vulnerable. Each vaccine is timed for a reason.',
        'If you are worried about too many shots at once, ask about combination vaccines that reduce the number of injections while providing the same protection.',
        'Vaccine safety is monitored continuously by multiple independent systems even after approval. This ongoing surveillance has detected and addressed rare side effects.',
        'Delaying vaccines does not make them safer. It leaves your child unprotected longer during the period of greatest risk.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Childhood immunization rests on principles of adaptive immunity, antigen presentation, memory cell generation, and population-level herd immunity. The schedule reflects immunogenicity data, epidemiological risk windows, and cost-effectiveness analysis.',
      explanation: `**Immunological Basis of Vaccination**
- **Innate response:** Vaccine adjuvants (aluminum salts, AS04) activate dendritic cells and macrophages via pattern recognition receptors (TLR4, NLRP3)
- **Adaptive response:** Dendritic cells present antigen to naive T cells in lymph nodes
- **T-cell help:** CD4+ T helper cells activate B cells in germinal centers
- **Germinal center reaction:** Somatic hypermutation and affinity maturation produce high-affinity antibodies
- **Memory generation:** Long-lived plasma cells (bone marrow) provide sustained antibody; memory B and T cells enable rapid recall response
- **Multiple doses:** Each dose recruits additional germinal center reactions, improving antibody affinity and generating more memory cells

**Why Infants Need Vaccines Early**
| Factor | Explanation |
|--------|-----------|
| Maternal antibody waning | Transplacental IgG wanes by 6-12 months; leaves vulnerability window |
| Disease risk | Pertussis, Hib meningitis, rotavirus peak in early infancy |
| Immature immune system | Neonatal immune system is Th2-skewed; vaccines drive Th1 responses needed for bacterial defense |
| Polysaccharide antigens | Infants <2 years cannot respond to pure polysaccharide; conjugate vaccines bypass this limitation |

**Conjugate Vaccine Technology**
- Polysaccharide capsule antigens are T-independent: produce short-lived IgM, no memory
- Conjugation to carrier protein (CRM197, tetanus toxoid) converts response to T-dependent
- T-dependent response: class switching (IgM to IgG), affinity maturation, memory B cells
- Clinical impact: Hib disease reduced by >99% after conjugate vaccine introduction; similar success with PCV

**Herd Immunity Thresholds**
| Disease | R0 | Herd Immunity Threshold |
|---------|------|----------------------|
| Measles | 12-18 | 92-95% |
| Pertussis | 12-17 | 92-94% |
| Diphtheria | 6-7 | 83-86% |
| Polio | 5-7 | 80-86% |
| Rubella | 5-7 | 80-86% |
| Mumps | 4-7 | 75-86% |

**Vaccine Adverse Events: Evidence vs. Myth**
| Claimed Association | Evidence |
|-------------------|---------|
| MMR and autism | Wakefield study retracted (fraud); 14+ large studies (>1 million children) show NO association |
| Thimerosal and neurodevelopment | Removed from childhood vaccines (2001) as precaution; multiple studies show NO harm; still safe |
| Aluminum adjuvants and toxicity | Total aluminum from vaccines in first year (~4.4 mg) is far less than dietary intake (~7 mg in first 6 months from breast milk/formula) |
| "Too many antigens" | 1980 schedule contained ~3,000 antigens; current schedule contains ~160 (thanks to purified vaccines); immune capacity is enormous |
| Vaccines and autoimmune disease | Large epidemiological studies show no increased risk |

**Special Populations**
| Population | Vaccination Considerations |
|-----------|--------------------------|
| Preterm infants | Vaccinate on chronological age; same schedule; may have reduced initial response but adequate protection after series completion |
| Immunocompromised (primary) | No live vaccines; inactivated vaccines may have reduced efficacy; protective antibody titers guide decisions |
| HIV-infected children | CD4-dependent: live vaccines if CD4 >15%; enhanced inactivated schedule |
| Asplenia | Enhanced pneumococcal and meningococcal vaccination; PCV20 or PCV15+PPSV23; MenB series |
| Transplant recipients | Re-vaccinate after engraftment (HSCT) or on immunosuppression stability (solid organ) |
| Egg allergy | MMR and varicella safe (not egg-grown); influenza safe regardless of egg allergy severity (ACIP 2023) |

**Catch-Up Immunization Principles**
- Minimum intervals between doses must be respected
- Doses already given count; do not restart a series
- Multiple live injectable vaccines: give same day or wait >= 28 days
- Accelerated schedules available for travel, outbreaks, or immigration
- No maximum interval; late is better than never`,
      keyTerms: [
        { term: 'germinal center reaction', definition: 'The process in lymph nodes where B cells undergo somatic hypermutation and affinity maturation with T cell help; produces high-affinity antibodies and long-lived memory cells; each vaccine dose stimulates new germinal center reactions' },
        { term: 'R0', definition: 'Basic reproduction number; the average number of secondary infections from one infected person in a fully susceptible population; determines the herd immunity threshold' },
        { term: 'conjugate vaccine', definition: 'Technology linking a polysaccharide antigen to a protein carrier, converting a T-independent response (short-lived, no memory) to a T-dependent response (class switching, memory cells) effective in infants' },
        { term: 'somatic hypermutation', definition: 'Process in germinal centers where B cells randomly mutate their antibody genes; cells with higher affinity antibodies are selected, producing progressively better immune responses with each vaccine dose' },
        { term: 'transplacental IgG', definition: 'Maternal IgG antibodies actively transported across the placenta to the fetus, especially in the third trimester; provides passive protection that wanes by 6-12 months' },
        { term: 'T-independent antigen', definition: 'Antigens like bacterial polysaccharides that activate B cells without T cell help; produce only IgM, no memory; explains why infants under 2 cannot respond to unconjugated polysaccharide vaccines' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced immunization science encompasses adjuvant mechanisms, mucosal immunity, correlates of protection, vaccine effectiveness surveillance, and clinical management of immunocompromised patients and adverse events.',
      explanation: `**Adjuvant Mechanisms and Innate Immune Activation**
| Adjuvant | Mechanism | Vaccines |
|----------|-----------|---------|
| Aluminum salts (alum) | NLRP3 inflammasome activation; depot effect; DC recruitment | DTaP, HepB, PCV, HepA |
| AS04 (alum + MPL) | TLR4 agonist + alum; enhanced Th1 response | Cervarix (HPV) |
| AS01 (MPL + QS-21) | TLR4 + saponin; potent CD4+ T cell response | Shingrix, malaria (RTS,S) |
| MF59 (squalene emulsion) | Chemokine gradient; enhanced APC recruitment; broader antibody response | Fluad (elderly influenza) |
| CpG-ODN (TLR9 agonist) | B cell and pDC activation; Th1 polarization | Heplisav-B (HepB) |
| mRNA lipid nanoparticle | Innate sensing via RIG-I, MDA5, TLR7/8; potent type I IFN response | COVID-19 mRNA vaccines |

**Correlates of Protection**
| Vaccine | Accepted Correlate | Threshold |
|---------|-------------------|-----------|
| Hepatitis B | Anti-HBs antibody | >= 10 mIU/mL |
| Tetanus | Anti-tetanus toxoid IgG | >= 0.01 IU/mL |
| Measles | Measles IgG | >= 120 mIU/mL (PRNT) |
| Hib | Anti-PRP antibody | >= 0.15 mcg/mL (short-term); >= 1.0 mcg/mL (long-term) |
| Pneumococcal | Anti-capsular IgG | >= 0.35 mcg/mL (WHO) |
| Varicella | VZV IgG | >= 5 gpELISA units/mL |

**Vaccine Effectiveness Surveillance**
| Method | Application |
|--------|-----------|
| Test-negative design | Compare vaccination status of test-positive vs. test-negative individuals seeking care for similar symptoms |
| Case-control | Match cases (disease) with controls; compare vaccine exposure |
| Cohort studies | Follow vaccinated vs. unvaccinated populations; measure incidence |
| Post-licensure databases | VSD, PCORNET; population-level effectiveness monitoring |
| Breakthrough infection analysis | Characterize disease severity in vaccinated vs. unvaccinated |

**Managing Immunocompromised Patients**
| Condition | Live Vaccines | Inactivated Vaccines | Special Considerations |
|-----------|--------------|---------------------|----------------------|
| Primary immunodeficiency (SCID) | Contraindicated | Give but check titers | Household contacts should receive IPV (not OPV) |
| HIV (CD4 >= 15%) | MMR, VAR can be given | Standard schedule | Check antibody response |
| Chemotherapy | Defer until immune reconstitution (3-6 months) | Give when possible; may need re-vaccination | Timing relative to treatment cycles |
| Solid organ transplant | Contraindicated on immunosuppression | Optimal 2-4 weeks pre-transplant; post-transplant at 3-6 months | Reduced response on mycophenolate, belatacept |
| HSCT | Re-vaccinate starting 6-12 months post-transplant | Start at 3-6 months for inactivated | Complete revaccination series needed |
| Biologic agents (anti-TNF, rituximab) | Hold biologics; timing varies | Vaccinate; may have reduced response | Rituximab: vaccinate >= 4 weeks before or >= 6 months after |

**Adverse Event Investigation**
| Event | Investigation Steps |
|-------|-------------------|
| Anaphylaxis (within 15-30 min) | Treat (epinephrine 0.01 mL/kg IM); report to VAERS; allergist referral; identify causative component |
| Febrile seizure (within 24-72 hr) | Reassurance (benign); evaluate for other causes; not a contraindication to future doses |
| HHE (hypotonic-hyporesponsive episode) | Reassurance (self-resolving); not a contraindication to future pertussis vaccine (per ACIP) |
| Intussusception post-rotavirus | Age-dependent risk; evaluate surgically; very rare (1-5 per 100,000) |
| GBS post-influenza vaccine | 1-2 per million doses; relative contraindication if GBS within 6 weeks of prior flu vaccine |
| Immune thrombocytopenia post-MMR | 1 per 25,000 doses; self-limited; not a contraindication to MMR #2 (discuss risk/benefit) |

**HPV Vaccine Impact Data**
| Outcome | Reduction |
|---------|-----------|
| HPV infection (vaccine types) | 85-90% in vaccinated populations |
| Cervical precancer (CIN2/3) | 40-60% reduction (population level) |
| Cervical cancer (Australia, UK) | 87% reduction in women vaccinated at 12-13 years (Lancet 2021) |
| Genital warts | 90% reduction in young adults |
| Cross-protection to non-vaccine types | Modest (15-30%) for related types |`,
      keyTerms: [
        { term: 'NLRP3 inflammasome', definition: 'Intracellular multiprotein complex activated by aluminum adjuvants; triggers caspase-1 activation, IL-1beta and IL-18 release, and recruitment of immune cells to the injection site' },
        { term: 'correlate of protection', definition: 'An immune marker (typically antibody level) associated with protection against disease; used to evaluate vaccine immunogenicity when efficacy trials are impractical' },
        { term: 'test-negative design', definition: 'Epidemiological study design comparing vaccination status between symptomatic individuals testing positive versus negative for the disease of interest; efficient for post-licensure vaccine effectiveness estimation' },
        { term: 'hypotonic-hyporesponsive episode', definition: 'Uncommon reaction after pertussis vaccination where the infant becomes limp, pale, and less responsive; self-resolving and not a contraindication to subsequent doses per ACIP' },
        { term: 'AS01 adjuvant system', definition: 'Potent adjuvant combining MPL (TLR4 agonist) and QS-21 (saponin); generates strong CD4+ T cell responses; used in Shingrix and malaria RTS,S vaccines' },
        { term: 'anti-PRP antibody', definition: 'Antibody against polyribosylribitol phosphate, the capsular polysaccharide of Haemophilus influenzae type b; the correlate of protection for Hib conjugate vaccines' },
      ],
      clinicalNotes:
        'The HPV vaccine is one of the most impactful cancer prevention tools available. Australian population data showing 87% cervical cancer reduction in women vaccinated at 12-13 years provides the first definitive evidence of a vaccine preventing cancer at the population level. For immunocompromised patients, the key principle is: vaccinate early (before immunosuppression when possible), use inactivated vaccines on immunosuppression, and check post-vaccination titers to confirm response. Rituximab patients require special attention: B cell depletion renders vaccination ineffective for 6+ months after infusion; time vaccination before initiation or after B cell recovery.',
    },
    5: {
      level: 5,
      summary:
        'Expert immunization science integrates systems vaccinology, next-generation platform technologies, global eradication strategies, vaccine confidence research, and precision vaccinology approaches to optimize individual and population-level protection.',
      explanation: `**Systems Vaccinology**
| Approach | Application |
|----------|-----------|
| Transcriptomics | Blood gene expression signatures at day 1-7 post-vaccination predict antibody response at day 28 (Yellow fever, influenza) |
| Metabolomics | Amino acid and lipid metabolite profiles correlate with vaccine immunogenicity |
| Epigenomics | Vaccination induces trained immunity via epigenetic reprogramming of monocytes (BCG, MMR) |
| Proteomics | Serum protein biomarkers predict responders vs. non-responders |
| Microbiome | Gut microbiome composition modulates vaccine immunogenicity (oral vaccines most affected; parenteral vaccines also influenced) |

**Trained Immunity and Non-Specific Vaccine Effects**
| Vaccine | Non-Specific Effect | Mechanism |
|---------|-------------------|-----------|
| BCG | Reduces all-cause neonatal mortality by 30-50% in LMICs | Epigenetic reprogramming of monocytes (H3K4me3 at IL-6, TNF-alpha promoters); enhanced innate response to unrelated pathogens |
| MMR | Reduced all-cause mortality in children | Heterologous immunity; trained innate response |
| OPV | Non-polio benefits in respiratory illness | Interferon induction; innate immune stimulation |
| Measles vaccine | Prevents immune amnesia (measles destroys memory B/T cells) | Protects existing immune memory from measles virus-mediated deletion |

**Next-Generation Vaccine Platforms**
| Platform | Advantage | Pipeline |
|----------|-----------|---------|
| mRNA (LNP) | Rapid design; strong cellular + humoral response; self-adjuvanting | RSV, influenza, CMV, HIV, cancer (personalized neoantigen) |
| Self-amplifying RNA (saRNA) | Lower dose; sustained antigen expression | Influenza, rabies, COVID variants |
| Protein nanoparticle | Multivalent display; enhanced B cell activation | RSV (Arexvy), malaria (R21), influenza |
| Viral vector (replication-incompetent) | Strong T cell response; single dose potential | Ebola (rVSV-ZEBOV), HIV, TB |
| Outer membrane vesicles | Native conformation antigens; adjuvant-like properties | Meningococcus B (Bexsero), gonorrhea |
| Microneedle patch | Thermostable; self-administered; pain-free; cold chain-free | Measles-rubella, influenza, COVID (Phase 1-2) |

**Global Eradication and Elimination Strategies**
| Disease | Strategy | Status |
|---------|---------|--------|
| Smallpox | Ring vaccination | Eradicated (1980) |
| Polio | OPV + IPV switch; surveillance; mop-up campaigns | Near-eradication; endemic in 2 countries; cVDPV challenge |
| Measles | Two-dose MCV; >95% coverage; outbreak response | Regional elimination achieved then lost; resurgence with vaccine hesitancy |
| Rubella/CRS | MR vaccine integration | Eliminated in Americas (2015) |
| Maternal/neonatal tetanus | TT immunization of pregnant women; clean delivery | Near-elimination; 12 countries remain |

**Vaccine Confidence and Misinformation**
| Factor | Research Finding |
|--------|----------------|
| Social media algorithms | Amplify anti-vaccine content by 2-3x vs. pro-vaccine content |
| Healthcare provider recommendation | Single strongest predictor of vaccine acceptance |
| Motivational interviewing | More effective than information-giving alone |
| Mandates | Increase coverage but may increase opposition in some populations |
| Community engagement | Trust-building through culturally concordant messengers |
| Inoculation theory | Pre-exposing people to weakened misinformation arguments builds resistance |

**Precision Vaccinology**
| Application | Status |
|-------------|--------|
| Age-adjusted dosing | Elderly receive higher-dose flu vaccine (Fluzone HD); infants receive adjusted doses |
| Adjuvant selection by age | AS01 for elderly (Shingrix); alum for infants |
| Genetic predictors of response | HLA type, cytokine gene polymorphisms predict antibody response (research) |
| Microbiome optimization pre-vaccination | Probiotic supplementation may enhance vaccine response in LMICs (clinical trials) |
| Chronovaccinology | Time of day affects immune response; morning vaccination may produce higher antibody titers |
| Transcriptomic response prediction | Day 1-3 blood gene signatures predict seroconversion; potential to identify non-responders early |`,
      keyTerms: [
        { term: 'trained immunity', definition: 'Epigenetic reprogramming of innate immune cells (monocytes, NK cells) by certain vaccines (especially BCG and MMR) that enhances subsequent responses to unrelated pathogens; mediated by histone modifications at innate immune gene promoters' },
        { term: 'immune amnesia', definition: 'Measles virus-mediated deletion of existing memory B and T cells, leaving the recovered individual susceptible to previously encountered pathogens for 2-3 years; prevented by measles vaccination' },
        { term: 'systems vaccinology', definition: 'Multi-omics approach (transcriptomics, metabolomics, proteomics, epigenomics) to predict and understand vaccine immune responses at the systems level; pioneered by Pulendran lab' },
        { term: 'inoculation theory', definition: 'Psychological strategy of pre-exposing individuals to weakened forms of misinformation arguments to build cognitive resistance; applied to vaccine communication to counter anti-vaccine messaging' },
        { term: 'circulating vaccine-derived poliovirus', definition: 'Mutated oral polio vaccine virus that regains neurovirulence after prolonged circulation in under-immunized populations; a major challenge to polio eradication requiring nOPV2 development' },
      ],
      clinicalNotes: `**Expert Integration:**
- Trained immunity via BCG and live vaccines has profound implications for global child survival. The 30-50% reduction in all-cause neonatal mortality from BCG in LMICs cannot be explained by TB prevention alone and represents a paradigm shift in our understanding of vaccine benefits beyond target diseases.
- Measles-induced immune amnesia (documented by Mina et al., Science 2019) provides a novel argument for measles vaccination: it protects not just against measles but against all previously acquired immunity that measles would otherwise destroy.
- mRNA vaccine technology has the potential to transform childhood immunization through multivalent single-dose formulations combining multiple antigens. Combination mRNA vaccines for respiratory pathogens (influenza + RSV + COVID) are in clinical trials.
- Microneedle patch vaccines represent the most promising innovation for global vaccine equity: thermostable (no cold chain), self-administered (no trained personnel), and painless (improved acceptance). Measles-rubella and influenza patch vaccines are in Phase 1-2 trials.
- Chronovaccinology research suggests vaccination timing matters: morning vaccination consistently produces higher antibody responses than afternoon vaccination across multiple vaccines, likely due to circadian variation in immune cell trafficking and cortisol levels.`,
    },
  },

  media: [],

  citations: [
    { id: 'cdc-schedule-2024', type: 'guideline', title: 'Recommended Child and Adolescent Immunization Schedule, United States, 2024', authors: ['Advisory Committee on Immunization Practices'], source: 'CDC/MMWR', url: 'https://www.cdc.gov/vaccines/schedules/' },
    { id: 'plotkin-vaccines-7th', type: 'textbook', title: 'Plotkin\'s Vaccines, 7th Edition', authors: ['Plotkin, S.A.', 'Orenstein, W.A.', 'Offit, P.A.'], source: 'Elsevier', license: 'Proprietary' },
    { id: 'measles-immune-amnesia', type: 'article', title: 'Measles Virus Infection Diminishes Preexisting Antibodies That Offer Protection from Other Pathogens', authors: ['Mina, M.J.', 'Kula, T.', 'Leng, Y.'], source: 'Science', url: 'https://doi.org/10.1126/science.aay6485' },
  ],

  crossReferences: [
    { targetId: 'topic-when-to-see-doctor-children', targetType: 'topic', relationship: 'related', label: 'When to See the Doctor for Children' },
    { targetId: 'topic-common-childhood-illnesses', targetType: 'topic', relationship: 'related', label: 'Common Childhood Illnesses' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['pediatrics', 'immunology', 'preventive medicine', 'public health', 'infectious disease'],
    keywords: ['vaccines', 'immunization', 'vaccine schedule', 'childhood vaccines', 'herd immunity', 'vaccine safety', 'MMR', 'DTaP', 'HPV', 'vaccine hesitancy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'preventive medicine', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
