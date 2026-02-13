/**
 * Chlamydia and Gonorrhea - Reproductive System
 *
 * Comprehensive content on chlamydia and gonorrhea infections including
 * diagnosis, treatment, and complications.
 */

import { EducationalContent } from '../../../types';

export const chlamydiaGonorrhea: EducationalContent = {
  id: 'reproductive-chlamydia-gonorrhea',
  type: 'condition',
  name: 'Chlamydia and Gonorrhea',
  alternateNames: ['CT/GC', 'STIs', 'Sexually Transmitted Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Chlamydia and gonorrhea are common sexually transmitted infections. They often have no symptoms but can cause serious problems if not treated. Testing and antibiotics cure these infections.',
      explanation: `## What Are Chlamydia and Gonorrhea?

Chlamydia and gonorrhea are common sexually transmitted infections (STIs) caused by bacteria.

### Chlamydia

- Caused by Chlamydia trachomatis bacteria
- Most commonly reported bacterial STI in the US
- Often has no symptoms
- Easy to treat with antibiotics

### Gonorrhea

- Caused by Neisseria gonorrhoeae bacteria
- Can infect genitals, rectum, and throat
- Growing antibiotic resistance
- Can cause serious complications

### How They Spread

- Through vaginal, anal, or oral sex
- From mother to baby during birth
- Cannot spread through casual contact

### Often No Symptoms

Many people have no symptoms but can still spread the infection.

**Possible symptoms:**
- Unusual discharge
- Burning when urinating
- Pain or bleeding during sex
- Lower belly pain

### Why Treatment Is Important

If not treated, can cause:
- Pelvic inflammatory disease (PID)
- Infertility
- Ectopic pregnancy
- Chronic pain
- Increased HIV risk

### Testing

- Urine test or swab
- Simple and painless
- Regular screening if sexually active
- Especially important for women under 25

### Treatment

- Antibiotics cure the infection
- Finish all medication
- Partners must be treated
- No sex until treatment complete
- Retesting in 3 months

### Prevention

- Condoms reduce risk
- Limiting number of partners
- Regular testing
- Prompt treatment`,
      keyTerms: [
        { term: 'chlamydia', definition: 'Bacterial sexually transmitted infection caused by Chlamydia trachomatis' },
        { term: 'gonorrhea', definition: 'Bacterial sexually transmitted infection caused by Neisseria gonorrhoeae' },
        { term: 'STI', definition: 'Sexually transmitted infection' },
        { term: 'PID', definition: 'Pelvic inflammatory disease; infection of female reproductive organs' },
        { term: 'antibiotic resistance', definition: 'Bacteria becoming able to survive antibiotic treatment' },
      ],
      analogies: [
        'Chlamydia is like a silent intruder - it can be present and causing damage without making any noise or obvious signs.',
      ],
      examples: [
        'Chlamydia is the most commonly reported bacterial STI in the United States',
        'About 70% of women and 50% of men with chlamydia have no symptoms',
        'Untreated chlamydia or gonorrhea can cause infertility in 10-15% of women',
      ],
      patientCounselingPoints: [
        'Most people with these infections have no symptoms but can still spread them',
        'Regular testing is important if you are sexually active',
        'Antibiotics cure these infections completely',
        'All sexual partners from the past 60 days need treatment',
        'Get retested in 3 months to check for reinfection',
      ],
    },
    2: {
      level: 2,
      summary: 'Chlamydia and gonorrhea are bacterial STIs with high prevalence, particularly in young adults. Nucleic acid amplification tests (NAATs) are the diagnostic standard. Treatment involves antibiotics, with emerging gonorrhea resistance requiring dual therapy approaches.',
      explanation: `## Chlamydia and Gonorrhea Overview

### Epidemiology

**Chlamydia:**
- 1.6 million cases reported annually (US)
- 50% of cases in ages 15-24
- Highest prevalence in women 15-24
- Underdiagnosis common
- Asymptomatic infection frequent

**Gonorrhea:**
- 700,000 cases reported annually (US)
- Increasing incidence
- Antibiotic resistance growing
- High-risk groups: MSM, young adults
- Disseminated infection rare

### Microbiology

**Chlamydia trachomatis:**
- Obligate intracellular bacteria
- Serovars D-K (genital)
- Serovars A-C (trachoma)
- L1-L3 (lymphogranuloma venereum)
- Biphasic life cycle

**Neisseria gonorrhoeae:**
- Gram-negative diplococcus
- Oxidase positive
- Requires CO2 for growth
- Antigenic variation
- Pili for attachment

### Clinical Manifestations

**Men:**

Urethritis:
- Urethral discharge
- Dysuria
- Incubation: 1-14 days (GC), 7-21 days (CT)
- Epididymitis (unilateral scrotal pain)

Proctitis (MSM):
- Rectal pain, discharge, bleeding
- Often asymptomatic
- Can be caused by either organism

Pharyngitis:
- Usually asymptomatic
- GC more common than CT
- Usually self-limited

**Women:**

Cervicitis:
- Often asymptomatic
- Mucopurulent discharge
- Cervical friability
- Postcoital bleeding

Urethritis:
- Dysuria
- Frequency
- Often misdiagnosed as UTI

PID:
- Lower abdominal pain
- Fever
- Adnexal tenderness
- 10-15% of untreated progress

**Other Manifestations:**

Lymphogranuloma venereum (CT serovars L1-L3):
- Painless papule
- Painful inguinal lymphadenopathy (buboes)
- Rectal involvement (MSM)

Disseminated Gonococcal Infection (DGI):
- Fever, arthralgias
- Dermatitis-tenosynovitis-arthritis
- Rare but serious
- Culture-negative

### Diagnostic Testing

**NAATs (Nucleic Acid Amplification Tests):**
- Gold standard
- Highly sensitive and specific
- Can use urine or swabs
- Self-collected vaginal swabs acceptable
- Rectal and pharyngeal sites

**Specimen Types:**
- First-catch urine (men)
- Vaginal swab
- Endocervical swab
- Rectal swab
- Pharyngeal swab

**Culture:**
- Required for antibiotic susceptibility (GC)
- Thayer-Martin or Martin-Lewis media
- Immediate plating ideal

### Screening Recommendations

**Women:**
- Annual screening if <25 and sexually active
- Annual screening if >25 with risk factors
- Pregnancy screening (all women)

**Men:**
- Not routinely screened except:
- MSM: rectal, urethral, pharyngeal annually
- High prevalence settings
- HIV-positive

**Pregnancy:**
- Screen all women <25
- Screen older women with risk factors
- Retest third trimester if high risk

### Treatment

**Chlamydia:**
- Doxycycline 100 mg PO BID x 7 days (preferred)
- Azithromycin 1 g PO single dose (alternative)
- Erythromycin or levofloxacin (alternatives)

**Gonorrhea:**
- Ceftriaxone 500 mg IM (1 g if >=150 kg)
- PLUS doxycycline if chlamydia not excluded
- Test of cure 7-14 days (pharyngeal)

**Dual Therapy:**
- Treat for both if GC diagnosed
- High coinfection rate
- Doxycycline 7 days

**Pregnancy:**
- Azithromycin for chlamydia
- Ceftriaxone for gonorrhea
- Avoid doxycycline

### Management of Partners

**Expedited Partner Therapy (EPT):**
- Where legal
- Medications/prescriptions for partners
- Without examination
- Reduces reinfection

**Partner Notification:**
- Partners from past 60 days
- Must be treated
- Abstain until treatment complete

### Follow-up

**Test of Cure:**
- Gonorrhea pharyngeal: 7-14 days
- If treated with alternative regimen
- If symptoms persist

**Retesting:**
- All patients at 3 months
- High reinfection rate
- Screen for other STIs

### Complications

**Women:**
- PID
- Infertility
- Ectopic pregnancy
- Chronic pelvic pain

**Men:**
- Epididymitis
- Proctitis complications
- Urethral stricture (rare)

**Both:**
- Reactive arthritis
- HIV transmission facilitation`,
      keyTerms: [
        { term: 'NAAT', definition: 'Nucleic acid amplification test; highly sensitive diagnostic method' },
        { term: 'dysuria', definition: 'Painful urination' },
        { term: 'cervicitis', definition: 'Inflammation of the cervix' },
        { term: 'expedited partner therapy', definition: 'Providing treatment to sex partners without medical evaluation' },
        { term: 'buboes', definition: 'Swollen lymph nodes; characteristic of LGV' },
      ],
      clinicalNotes: 'Due to increasing fluoroquinolone and oral cephalosporin resistance, ceftriaxone is now the only recommended treatment for gonorrhea in the United States. Azithromycin is no longer recommended as dual therapy for gonorrhea due to resistance concerns.',
    },
    3: {
      level: 3,
      summary: 'Chlamydia and gonorrhea management includes addressing pelvic inflammatory disease, epididymitis, and extragenital infections. Public health approaches including partner notification and EPT reduce community transmission. Rising antibiotic resistance requires surveillance and adaptability.',
      explanation: `## Detailed Management

### Pelvic Inflammatory Disease (PID)

**Diagnosis:**
- Minimum criteria: lower abdominal pain + adnexal tenderness OR cervical motion tenderness
- Additional criteria: fever, elevated WBC, purulent discharge
- Definitive: laparoscopic findings, ultrasound evidence

**Microbiology:**
- Polymicrobial
- Chlamydia, gonorrhea common
- Anaerobes
- Endogenous flora

**Treatment (Outpatient):**
- Ceftriaxone 250 mg IM x 1
- PLUS doxycycline 100 mg PO BID x 14 days
- PLUS metronidazole 500 mg PO BID x 14 days

**Inpatient Criteria:**
- Failed outpatient therapy
- Unable to tolerate PO
- Severe illness
- Tubo-ovarian abscess
- Pregnancy

**Follow-up:**
- Re-evaluate in 48-72 hours
- Hospitalize if no improvement
- Treat partners
- Screen for reinfection at 3 months

### Epididymitis

**Acute (<6 weeks):**
- Unilateral scrotal pain
- Swelling
- Fever
- Urethral discharge

**Etiology:**
- Under 35: STI (CT, GC)
- Over 35: enteric organisms, obstruction

**Treatment (<35):**
- Ceftriaxone 500 mg IM
- PLUS doxycycline 100 mg BID x 10 days

**Follow-up:**
- Improvement in 48 hours
- If no improvement: evaluate for complications
- Scrotal ultrasound if mass

### Lymphogranuloma Venereum (LGV)

**Clinical Stages:**

Primary:
- Painless papule or ulcer
- Heals spontaneously

Secondary:
- Inguinal syndrome (buboes)
- Tender lymphadenopathy
- Groove sign (inguinal ligament)

Tertiary:
- Genitoanorectal syndrome
- Rectal strictures
- Fistulas

**Diagnosis:**
- NAAT positive for CT
- LGV-specific testing (genotyping)
- Clinical suspicion

**Treatment:**
- Doxycycline 100 mg BID x 21 days
- Alternative: erythromycin base 500 mg QID x 21 days
- Aspiration of fluctuant nodes
- May need surgery for strictures

### Proctitis

**Etiology:**
- Receptive anal intercourse
- Chlamydia (including LGV)
- Gonorrhea
- Syphilis
- HSV

**Symptoms:**
- Anorectal pain
- Tenesmus
- Mucopurulent discharge
- Bleeding

**Diagnosis:**
- Anoscopy
- NAAT from rectal swab
- Gram stain

**Treatment:**
- Ceftriaxone + doxycycline
- Extended doxycycline if LGV
- Consider empiric therapy

### Disseminated Gonococcal Infection (DGI)

**Presentation:**
- Dermatitis-arthritis syndrome (most common)
- Purulent arthritis (less common)
- Tenosynovitis
- Pustular skin lesions
- Rarely: endocarditis, meningitis

**Diagnosis:**
- Blood cultures
- Synovial fluid culture
- Skin lesion culture
- Often culture-negative

**Treatment:**
- Ceftriaxone 1 g IV/IM daily
- Continue 24-48 hours after improvement
- Switch to oral cefixime to complete 7 days
- Treat for chlamydia
- Drainage of infected joints

### Neonatal Infections

**Ophthalmia Neonatorum:**
- Prophylaxis: erythromycin 0.5% ointment
- GC: ceftriaxone 25-50 mg/kg IV/IM
- CT: erythromycin base 50 mg/kg/day PO x 14 days

**Pneumonia:**
- CT acquired during birth
- Afebrile pneumonia
- Staccato cough
- Erythromycin 50 mg/kg/day x 14 days

### Antibiotic Resistance

**Gonorrhea:**

Historical:
- Sulfonamides
- Penicillins
- Tetracyclines
- Fluoroquinolones
- Oral cephalosporins

Current concern:
- Extended-spectrum cephalosporins
- Ceftriaxone resistance emerging
- Multidrug-resistant strains (Japan, Europe)

**Surveillance:**
- GISP (Gonococcal Isolate Surveillance Project)
- Culture required for susceptibility
- Local resistance patterns

**Response:**
- Higher dose ceftriaxone
- Avoid azithromycin combination
- Monitor closely
- Report treatment failures

### Prevention Strategies

**Individual:**
- Condom use
- Limiting partners
- Regular screening
- Prompt treatment
- Partner notification

**Population:**
- Screening programs
- EPT programs
- Surveillance
- Resistance monitoring
- Vaccine development (research)

**Healthcare System:**
- Quality measures
- Prompt treatment
- Partner services
- Retesting protocols

### Special Populations

**MSM:**
- Higher rates
- Extragenital sites
- Frequent screening
- HIV coinfection

**Transgender Persons:**
- Screen based on anatomy
- Consider hormone effects
- Inclusive care

**Adolescents:**
- Confidential care
- Screening criteria same
- EPT considerations by state
- Consent laws

**HIV-Positive:**
- More frequent screening
- Higher risk of complications
- Drug interactions
- Immune reconstitution`,
      keyTerms: [
        { term: 'tenesmus', definition: 'Painful straining to defecate or urinate' },
        { term: 'groove sign', definition: 'Groove created by inguinal ligament between lymph node chains' },
        { term: 'GISP', definition: 'Gonococcal Isolate Surveillance Project' },
        { term: 'multidrug-resistant', definition: 'Resistant to multiple antibiotic classes' },
        { term: 'immune reconstitution', definition: 'Inflammatory response after starting HIV treatment' },
      ],
      clinicalNotes: 'The treatment of PID should provide broad coverage for likely pathogens including N. gonorrhoeae, C. trachomatis, anaerobes, gram-negative facultative bacteria, and streptococci. Metronidazole is added for anaerobic coverage and is particularly important if tubo-ovarian abscess is present.',
    },
    4: {
      level: 4,
      summary: 'Complex STI management includes HIV co-infection, recurrent infections, and antibiotic treatment failures. Contact tracing and partner services are essential public health interventions. Emerging resistance patterns require ongoing surveillance.',
      explanation: `## Advanced Topics

### HIV Coinfection

**Increased Susceptibility:**
- HIV acquisition risk increased
- Genital inflammation
- Mucosal disruption
- Higher viral shedding

**Management:**
- Test for HIV with STI diagnosis
- More frequent screening
- Drug interactions
- ART adherence support

**Prevention:**
- PrEP for high-risk HIV-negative
- PEP after exposure
- Integrated care

### Recurrent Infections

**Reasons:**
- Reinfection from untreated partner
- Treatment failure
- Poor adherence
- Resistance

**Approach:**
- Retest at 3 months
- Partner treatment verification
- Culture and susceptibility
- Alternative regimens
- Intensive counseling

### Treatment Failures

**Chlamydia:**
- Rare true failures
- Reinfection more likely
- Retest at 4 weeks if concern
- Alternative: azithromycin or levofloxacin

**Gonorrhea:**
- Emerging resistance
- Test of cure 7-14 days
- Culture and susceptibility
- Consult infectious disease
- Report to health department

**Persistent Symptoms:**
- Consider other etiologies
- Mycoplasma genitalium
- Ureaplasma
- Trichomonas
- HSV
- Non-infectious causes

### Mycoplasma genitalium

**Recognition:**
- Often overlooked
- Nongonococcal urethritis
- Persistent cervicitis
- Treatment failure

**Diagnosis:**
- NAAT (not widely available)
- Research use
- Clinical diagnosis

**Treatment:**
- Doxycycline 7 days (limited efficacy)
- Azithromycin 1 g, then 500 mg daily x 4 days
- Moxifloxacin if resistant
- Emerging resistance

### Public Health Approaches

**Partner Services:**
- Interview patients
- Notify partners
- Ensure treatment
- Disease intervention specialists

**Expedited Partner Therapy:**
- Legal in many states
- Medications/prescriptions
- Instructions
- Reduces reinfection
- Cost-effective

**Surveillance:**
- Mandatory reporting
- Resistance monitoring
- Outbreak detection
- Resource allocation

**Prevention Programs:**
- School-based education
- Community outreach
- Condom distribution
- Screening programs

### Special Clinical Scenarios

**Pregnancy:**
- Screen at first prenatal visit
- Retest third trimester if high risk
- Ophthalmia neonatorum prophylaxis
- Vertical transmission risk

**Sexual Assault:**
- Empiric treatment recommended
- GC, CT, trichomonas coverage
- HIV post-exposure prophylaxis
- Follow-up care

**Pelvic Tuberculous:**
- Endemic areas
- Infertility evaluation
- AFB culture
- Anti-tuberculous therapy

### Quality Improvement

**Measures:**
- Screening rates
- Treatment completion
- Partner notification
- Retesting rates
- Time to treatment

**Interventions:**
- Standing orders
- Electronic reminders
- Self-collection
- Rapid testing
- Telemedicine

### Global Health

**Disparities:**
- Higher rates in LMIC
- Limited resources
- Access to diagnostics
- Antibiotic access

**Interventions:**
- Syndromic management
- Point-of-care tests
- Simplified regimens
- Task-shifting

**Research:**
- Vaccine development
- New antibiotics
- Resistance mechanisms
- Point-of-care diagnostics`,
      keyTerms: [
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis for HIV prevention' },
        { term: 'PEP', definition: 'Post-exposure prophylaxis for HIV prevention' },
        { term: 'nongonococcal urethritis', definition: 'Urethritis not caused by gonorrhea' },
        { term: 'syndromic management', definition: 'Treatment based on symptoms rather than laboratory diagnosis' },
        { term: 'disease intervention specialist', definition: 'Public health worker who assists with partner notification' },
      ],
      clinicalNotes: 'Patients diagnosed with chlamydia or gonorrhea should be retested approximately 3 months after treatment due to high reinfection rates. This can be done even if the patient believes their partners were treated.',
    },
    5: {
      level: 5,
      summary: 'Expert STI management involves addressing antimicrobial resistance through surveillance, developing new diagnostic tools, and potential vaccines. Integration with HIV and reproductive health services improves comprehensive care.',
      explanation: `## Expert Topics

### Antimicrobial Resistance Surveillance

**Gonococcal Isolate Surveillance:**
- GISP in US
- Euro-GASP in Europe
- Global network
- Susceptibility testing
- Trend monitoring

**Response to Resistance:**
- Treatment guideline updates
- Alternative regimens
- Combination therapy
- Research for new antibiotics
- Vaccine development

**Whole Genome Sequencing:**
- Transmission tracking
- Resistance prediction
- Typing
- Outbreak investigation

### New Diagnostics

**Point-of-Care Tests:**
- Rapid results
- Same-day treatment
- Resource-limited settings
- Self-testing
- Implementation research

**Multiplex Panels:**
- Multiple STIs
- Syndromic approach
- Efficiency
- Cost-effectiveness

**Antibiotic Susceptibility:**
- Rapid testing
- Phenotypic
- Genotypic
- Clinical utility

### Vaccine Development

**Gonorrhea Vaccine:**
- N. meningitidis cross-protection
- Research ongoing
- Pilus antigens
- Outer membrane vesicles
- Challenges with antigenic variation

**Chlamydia Vaccine:**
- Multiple attempts
- Partial protection
- Serovar-specific issues
- T-cell responses
- MOMP antigen

### Integration of Services

**HIV/STI Integration:**
- Combined screening
- PrEP programs
- Comprehensive care
- Risk reduction counseling

**Reproductive Health:**
- Contraception
- Fertility services
- Pregnancy planning
- Cervical cancer screening

**Primary Care:**
- Routine screening
- Risk assessment
- Prevention counseling
- Treatment

### Telemedicine and Digital Health

**Applications:**
- EPT delivery
- Home testing
- Online results
- Prescription delivery
- Follow-up care

**Benefits:**
- Access
- Convenience
- Privacy
- Reach

**Challenges:**
- Digital divide
- Privacy/security
- Reimbursement
- Regulation

### Health Equity

**Disparities:**
- Racial/ethnic
- Socioeconomic
- Geographic
- LGBTQ+ barriers
- Stigma

**Addressing:**
- Community-based care
- Culturally competent services
- Sliding scale fees
- Transportation
- Confidential services

**Social Determinants:**
- Education
- Housing
- Employment
- Access to care
- Structural interventions

### Future Directions

**Research Priorities:**
- New antibiotics
- Vaccines
- Diagnostics
- Biomarkers
- Prevention strategies

**Implementation Science:**
- Uptake of guidelines
- EPT expansion
- Screening optimization
- Quality improvement

**Policy:**
- Funding for STI programs
- Mandatory reporting
- Insurance coverage
- Comprehensive sex education

### Global Elimination Goals

**WHO Targets:**
- 90% reduction in gonorrhea incidence by 2030
- Surveillance strengthening
- Antimicrobial stewardship
- Vaccine development

**Challenges:**
- Resource constraints
- Antibiotic access
- Diagnostics
- Stigma
- Coordination`,
      keyTerms: [
        { term: 'MOMP', definition: 'Major outer membrane protein; chlamydia vaccine candidate' },
        { term: 'Euro-GASP', definition: 'European Gonococcal Antimicrobial Surveillance Programme' },
        { term: 'multiplex', definition: 'Testing for multiple targets simultaneously' },
        { term: 'phenotypic', definition: 'Based on observable characteristics' },
        { term: 'genotypic', definition: 'Based on genetic analysis' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. All sexually active women under 25 should be screened annually for chlamydia and gonorrhea, as should older women with risk factors such as new or multiple partners.

2. Due to increasing resistance, ceftriaxone is now the only recommended treatment for gonorrhea in the United States. Azithromycin is no longer recommended as part of dual therapy.

3. Expedited partner therapy (EPT) where legal reduces reinfection rates by ensuring partners are treated without requiring medical evaluation.

4. Retesting at 3 months after chlamydia or gonorrhea treatment is recommended due to high reinfection rates, which can reach 30% or higher.

5. Pelvic inflammatory disease (PID) should be considered in any woman with lower abdominal pain and adnexal or cervical motion tenderness, and empiric treatment should not be delayed while awaiting test results.`,
    },
  },

  media: [
    {
      id: 'sti-complications',
      type: 'diagram',
      filename: 'sti-complications.svg',
      title: 'Complications of Untreated Chlamydia and Gonorrhea',
      description: 'PID, infertility, and ectopic pregnancy risks',
    },
  ],

  citations: [
    {
      id: 'cdc-sti-guidelines',
      type: 'article',
      title: 'Sexually Transmitted Infections Treatment Guidelines',
      authors: ['CDC'],
      source: 'MMWR',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-hpv-pathology', targetType: 'condition', relationship: 'related', label: 'HPV Pathology' },
    { targetId: 'reproductive-syphilis-hiv', targetType: 'condition', relationship: 'related', label: 'Syphilis and HIV' },
    { targetId: 'reproductive-cervical-pathology', targetType: 'condition', relationship: 'related', label: 'Cervical Pathology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'infectious-disease', 'public-health'],
    keywords: ['chlamydia', 'gonorrhea', 'STI', 'PID', 'antibiotic resistance'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chlamydiaGonorrhea;
