/**
 * Pelvic Inflammatory Disease
 *
 * Comprehensive coverage of PID including causes, diagnosis,
 * treatment, and complications.
 */

import { EducationalContent } from '../../../types';

export const pelvicInflammatoryDisease: EducationalContent = {
  id: 'obgyn-conditions-pid',
  type: 'condition',
  name: 'Pelvic Inflammatory Disease',
  alternateNames: ['PID', 'Salpingitis', 'Pelvic Infection'],

  levels: {
    1: {
      level: 1,
      summary: 'PID is an infection of a woman\'s reproductive organs, usually caused by sexually transmitted bacteria.',
      explanation: `PID happens when bacteria travel from the vagina up into the uterus, fallopian tubes, and ovaries.

**What causes it:**
- Usually from sexually transmitted infections (STIs)
- Chlamydia and gonorrhea are the most common causes
- Can also happen after procedures like IUD insertion

**Symptoms:**
- Lower belly pain (most common)
- Unusual vaginal discharge
- Pain during sex
- Fever
- Painful urination
- Irregular bleeding

**Why treatment is important:**
- Can be cured with antibiotics
- If untreated, can cause:
  - Chronic pelvic pain
  - Trouble getting pregnant
  - Ectopic pregnancy (pregnancy in fallopian tube)
  - Scar tissue in the pelvis

**Prevention:**
- Safe sex practices (condoms)
- Regular STI testing
- Treating partners when infected
- Prompt treatment of any STI`,
      keyTerms: [
        { term: 'PID', definition: 'An infection of the uterus, fallopian tubes, and/or ovaries' },
        { term: 'STI', definition: 'Sexually transmitted infection; diseases spread through sexual contact' },
        { term: 'fallopian tubes', definition: 'Tubes that carry eggs from ovaries to uterus; can be damaged by PID' },
      ],
      analogies: [
        'PID is like a house fire - the longer it burns untreated, the more damage it causes to the structure (reproductive organs).',
      ],
      examples: [
        'A young woman with lower belly pain, fever, and unusual discharge might have PID and should see a doctor right away.',
      ],
    },
    2: {
      level: 2,
      summary: 'PID is an ascending polymicrobial infection of the upper genital tract caused primarily by N. gonorrhoeae and C. trachomatis, requiring prompt antibiotic treatment to prevent sequelae.',
      explanation: `**Definition:**
Infection of the upper female genital tract (uterus, fallopian tubes, ovaries, pelvic peritoneum).

**Microbiology:**
- Neisseria gonorrhoeae
- Chlamydia trachomatis
- Bacterial vaginosis organisms
- Enteric bacteria
- Often polymicrobial

**Risk Factors:**
- Age <25 years
- Multiple sexual partners
- New sexual partner
- Prior STI or PID
- Inconsistent condom use
- IUD insertion (small risk in first 3 weeks)

**Clinical Presentation:**

*Minimum Criteria (need one):*
- Uterine tenderness
- Adnexal tenderness
- Cervical motion tenderness

*Additional Criteria:*
- Fever >38.3°C (101°F)
- Abnormal cervical/vaginal discharge
- WBC on wet mount
- Elevated ESR or CRP
- Lab-confirmed gonorrhea or chlamydia

**Diagnosis:**
- Clinical diagnosis (high index of suspicion)
- Pelvic exam
- STI testing (NAAT for GC/CT)
- Pregnancy test (rule out ectopic)
- Consider ultrasound (tubo-ovarian abscess)

**Treatment:**

*Outpatient (most cases):*
- Ceftriaxone 500 mg IM once PLUS
- Doxycycline 100 mg PO BID x 14 days PLUS
- Metronidazole 500 mg PO BID x 14 days

*Inpatient Indications:*
- Surgical emergency cannot be excluded
- Tubo-ovarian abscess
- Pregnancy
- Severe illness
- Cannot tolerate outpatient regimen`,
      keyTerms: [
        { term: 'cervical motion tenderness', definition: 'Pain when the cervix is moved during exam; classic PID finding ("chandelier sign")' },
        { term: 'tubo-ovarian abscess', definition: 'Collection of pus involving tube and ovary; serious PID complication' },
        { term: 'ascending infection', definition: 'Bacteria traveling upward from lower to upper genital tract' },
      ],
    },
    3: {
      level: 3,
      summary: 'PID diagnosis relies on clinical criteria with low threshold for treatment; management includes broad-spectrum antibiotics covering gonorrhea, chlamydia, and anaerobes, with partner treatment essential.',
      explanation: `**Pathophysiology:**

*Ascending Infection:*
- Cervical mucus barrier disruption (menses, cervical manipulation)
- Bacterial ascent through cervix
- Endometritis → salpingitis → peritonitis
- Polymicrobial infection common

*Inflammatory Response:*
- Tubal damage from inflammation
- Scarring and adhesion formation
- Fimbrial damage affects fertility
- Hydrosalpinx development

**Clinical Spectrum:**

| Presentation | Features |
|--------------|----------|
| Subclinical | Asymptomatic, found on laparoscopy |
| Mild | Minimal symptoms, outpatient |
| Moderate | More symptoms, consider admission |
| Severe | Systemic illness, TOA, requires IV |

**Diagnostic Approach:**

*CDC Criteria:*
- Minimum: CMT, uterine, or adnexal tenderness
- Plus: Sexually active, at risk
- Additional criteria increase specificity

*Laboratory:*
- NAAT for N. gonorrhoeae, C. trachomatis
- HIV testing
- Syphilis serology
- Wet mount (WBCs, BV organisms)
- Pregnancy test

*Imaging:*
- Transvaginal ultrasound if TOA suspected
- CT if differential broad
- MRI rarely needed

**Treatment Regimens (CDC 2021):**

*Outpatient:*
- Ceftriaxone 500 mg IM x 1
- Doxycycline 100 mg PO BID x 14 days
- Metronidazole 500 mg PO BID x 14 days

*Inpatient:*
- Cefotetan 2g IV q12h OR Cefoxitin 2g IV q6h PLUS
- Doxycycline 100 mg IV/PO q12h
- Transition to oral when improved

*Alternative:*
- Clindamycin + gentamicin (for PCN allergy)

**Partner Management:**
- Test and treat all partners within 60 days
- Expedited partner therapy (EPT) legal in most states
- Abstinence until treatment complete

**Follow-up:**
- Reexamine in 72 hours if no improvement
- Test of cure not routine (unless persistent symptoms)
- Retest for GC/CT in 3 months`,
      keyTerms: [
        { term: 'Fitz-Hugh-Curtis syndrome', definition: 'Perihepatitis with RUQ pain and "violin string" adhesions; complication of PID' },
        { term: 'expedited partner therapy', definition: 'Providing prescriptions for partners without examination' },
        { term: 'hydrosalpinx', definition: 'Fluid-filled, blocked fallopian tube; sequela of PID' },
      ],
      clinicalNotes: 'Maintain low threshold for PID diagnosis - the consequences of missed diagnosis (infertility, chronic pain, ectopic pregnancy) outweigh treatment risks. Sexual partners must be treated to prevent reinfection.',
    },
    4: {
      level: 4,
      summary: 'PID management requires balancing prompt empiric treatment against diagnostic uncertainty, with attention to sequelae prevention, TOA management, and public health implications.',
      explanation: `**Tubo-Ovarian Abscess:**

*Presentation:*
- Severe pain, fever, tachycardia
- Palpable mass on exam
- WBC often elevated

*Imaging:*
- Transvaginal US: Complex adnexal mass
- CT: May be needed if US equivocal
- "Cogwheel sign" on US (TOA appearance)

*Management:*
- Inpatient IV antibiotics
- 70% respond to antibiotics alone
- Drainage if: No response 48-72 hours, >9 cm, or ruptured
- Percutaneous vs. surgical drainage
- Laparoscopy/laparotomy if rupture suspected

*Ruptured TOA:*
- Surgical emergency
- Septic shock risk
- Aggressive resuscitation
- Emergent surgical exploration

**Long-term Sequelae:**

*Infertility:*
- ~15% after one episode
- ~35% after two episodes
- ~75% after three episodes
- Tubal factor from scarring

*Ectopic Pregnancy:*
- 6-10x increased risk
- Tubal damage predisposes
- Counsel on risk

*Chronic Pelvic Pain:*
- 18% develop chronic pain
- Adhesions, hydrosalpinx
- Multidisciplinary management

**Special Populations:**

*Adolescents:*
- Higher risk population
- Consider confidentiality issues
- Address prevention
- Partner treatment barriers

*HIV-Positive Women:*
- May have more severe presentations
- Similar treatment regimens
- Longer courses sometimes needed
- TOA more common

*IUD Users:*
- Small increased risk at insertion
- Do not need to remove IUD for mild PID
- Remove if no improvement in 48-72 hours

*Pregnant Women:*
- Rare (cervical mucus plug protective)
- High risk for complications
- Always requires hospitalization
- Affects pregnancy outcomes

**Prevention:**

*Primary:*
- Condom use promotion
- Limiting partners
- STI screening per guidelines

*Secondary:*
- Prompt STI treatment
- Partner notification
- Screening high-risk populations

*Screening Recommendations:*
- Annual chlamydia: All sexually active women <25
- Annual gonorrhea: High-risk populations
- More frequent if high-risk`,
      keyTerms: [
        { term: 'TOA', definition: 'Tubo-ovarian abscess; walled-off collection of pus involving tube and ovary' },
        { term: 'tubal factor infertility', definition: 'Infertility due to damaged or blocked fallopian tubes' },
        { term: 'EPT', definition: 'Expedited partner therapy; giving patients medications to give to partners' },
      ],
      clinicalNotes: 'IUD does not need to be removed for mild-moderate PID if patient improves with antibiotics. Remove if no improvement in 48-72 hours or for severe disease. The relationship between IUD and PID is minimal beyond the first 3 weeks post-insertion.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PID management integrates evidence-based treatment protocols, public health strategies for partner management, and recognition of subclinical disease while addressing antimicrobial resistance patterns.',
      explanation: `**Antimicrobial Resistance Concerns:**

*N. gonorrhoeae:*
- Increasing fluoroquinolone resistance (no longer recommended)
- Emerging azithromycin resistance
- Ceftriaxone remains effective (for now)
- Dual therapy rationale
- Monitoring for resistance evolution

*Treatment Evolution:*
- Previous: Fluoroquinolone-based regimens
- Current: Cephalosporin-based
- Future: May need new agents
- Research into alternatives ongoing

**Subclinical PID:**

*Recognition:*
- Identified on laparoscopy or histology
- No acute symptoms
- Significant cause of tubal damage
- Underrecognized contributor to infertility

*Implications:*
- Supports low threshold for treatment
- Screening and treating STIs prevents
- May explain "unexplained" infertility
- Tubal pathology on HSG/laparoscopy

**Quality Metrics:**

*Process Measures:*
- STI testing at diagnosis
- Appropriate antibiotic regimen
- Partner treatment documented
- Follow-up arranged

*Outcome Measures:*
- Clinical improvement rate
- TOA drainage rates
- Repeat PID episodes
- Long-term fertility outcomes

**Public Health Integration:**

*Partner Services:*
- Disease intervention specialists
- Partner notification
- EPT accessibility
- Breaking transmission chains

*Reporting:*
- GC/CT reportable diseases
- PID not typically reportable
- Surveillance through STI data
- Outbreak investigation when needed

**Research Priorities:**

*Clinical:*
- Optimal treatment duration
- Outpatient TOA management
- Biomarkers for severity
- Predicting sequelae risk

*Prevention:*
- Vaccine development (GC, CT)
- Novel prevention methods
- Behavioral interventions
- Implementation science

**Disparities:**

*Known Disparities:*
- Higher rates in Black women
- Lower SES communities affected
- Limited healthcare access
- STI stigma barriers

*Addressing Disparities:*
- Community-based screening
- Express STI clinics
- School-based programs
- Telemedicine options

**Clinical Decision Making:**

*Treatment Setting:*
- Most can be treated outpatient
- Clear inpatient criteria
- Shared decision-making
- Follow-up assurance

*Fertility Counseling:*
- Discuss sequelae risk
- Prompt treatment importance
- Future fertility options
- When to refer to REI`,
      keyTerms: [
        { term: 'subclinical PID', definition: 'Asymptomatic upper tract infection causing tubal damage; often unrecognized' },
        { term: 'disease intervention specialist', definition: 'Public health worker who assists with partner notification for STIs' },
        { term: 'HSG', definition: 'Hysterosalpingogram; imaging test that may reveal tubal damage from prior PID' },
      ],
      clinicalNotes: 'Antimicrobial resistance in gonorrhea is an urgent public health concern. Treatment guidelines change as resistance patterns evolve - always check current CDC recommendations. Dual therapy for gonorrhea is designed to slow resistance emergence.',
    },
  },

  media: [
    {
      id: 'pid-pathophysiology',
      type: 'diagram',
      filename: 'pid-ascending-infection.svg',
      title: 'PID Ascending Infection',
      description: 'Illustration showing bacterial ascent from cervix to upper genital tract',
    },
  ],

  citations: [
    {
      id: 'cdc-std-guidelines',
      type: 'article',
      title: 'Sexually Transmitted Infections Treatment Guidelines',
      source: 'CDC MMWR',
      authors: ['Centers for Disease Control and Prevention'],
      url: 'https://www.cdc.gov/std/treatment-guidelines/',
      license: 'Public Domain',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-fallopian-tubes', targetType: 'structure', relationship: 'related', label: 'Fallopian Tubes' },
    { targetId: 'infectious-disease-sti', targetType: 'condition', relationship: 'related', label: 'STIs' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'infectious disease', 'STI'],
    keywords: ['PID', 'pelvic infection', 'chlamydia', 'gonorrhea', 'salpingitis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
