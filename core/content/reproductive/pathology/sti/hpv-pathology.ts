/**
 * HPV Pathology - Reproductive System
 *
 * Comprehensive content on human papillomavirus including types,
 * pathogenesis, prevention through vaccination, and related cancers.
 */

import { EducationalContent } from '../../../types';

export const hpvPathology: EducationalContent = {
  id: 'reproductive-hpv-pathology',
  type: 'condition',
  name: 'HPV Pathology',
  alternateNames: ['Human Papillomavirus', 'HPV Infection', 'Papillomavirus'],

  levels: {
    1: {
      level: 1,
      summary: 'HPV is a very common virus with many types. Some types cause genital warts while others can cause cancer. Vaccines prevent the cancer-causing types.',
      explanation: `## What Is HPV?

Human papillomavirus (HPV) is the most common sexually transmitted infection.

### Very Common

- Most sexually active people get HPV
- Usually no symptoms
- Body clears most infections
- Some types can cause cancer

### Types of HPV

**Low-Risk Types:**
- Cause genital warts
- Types 6 and 11
- Do not cause cancer
- Can be treated

**High-Risk Types:**
- Can cause cancer
- Types 16 and 18 (most common)
- Cause cervical, anal, oral cancers
- Usually no symptoms until cancer develops

### How It Spreads

- Skin-to-skin contact
- Vaginal, anal, or oral sex
- Can spread even without symptoms
- Most common in teens and 20s

### Prevention

**HPV Vaccine:**
- Prevents cancer-causing types
- Given at ages 11-12 (can start at 9)
- Also for adults up to age 45
- Best before sexual activity begins

**Other Protection:**
- Condoms reduce risk
- Limiting partners
- Regular screening (Pap tests)

### Cancers Caused by HPV

- Cervical cancer (most common)
- Anal cancer
- Oropharyngeal (throat) cancer
- Vulvar and vaginal cancer
- Penile cancer

### Important Facts

- HPV infection is very common
- Most infections clear on their own
- Vaccine prevents most HPV cancers
- Regular screening finds problems early`,
      keyTerms: [
        { term: 'HPV', definition: 'Human papillomavirus; common sexually transmitted virus' },
        { term: 'genital warts', definition: 'Growths in genital area caused by low-risk HPV' },
        { term: 'high-risk HPV', definition: 'HPV types that can cause cancer' },
        { term: 'Pap test', definition: 'Screening test for cervical cancer' },
        { term: 'vaccination', definition: 'Injection to prevent disease' },
      ],
      analogies: [
        'HPV is like a very common cold virus - most people get it, most clear it without problems, but some types can cause serious illness.',
      ],
      examples: [
        'About 80% of sexually active people will get HPV at some point',
        'HPV types 16 and 18 cause about 70% of cervical cancers',
        'The HPV vaccine can prevent about 90% of HPV-related cancers',
      ],
      patientCounselingPoints: [
        'HPV is extremely common and usually harmless',
        'The vaccine prevents cancer, not just HPV infection',
        'Regular Pap tests detect cervical changes before cancer develops',
        'Most HPV infections clear on their own within 1-2 years',
      ],
    },
    2: {
      level: 2,
      summary: 'HPV is a DNA virus with over 200 types classified as low-risk or high-risk. Persistent infection with high-risk types can lead to cancer through viral oncoproteins E6 and E7. Vaccination prevents infection with cancer-causing types.',
      explanation: `## HPV Overview

### Virology

**Structure:**
- Small DNA virus
- Non-enveloped
- Icosahedral capsid
- Circular genome

**Types:**
- 200+ types identified
- 40+ anogenital types
- High-risk: 16, 18, 31, 33, 45, 52, 58 (cancer)
- Low-risk: 6, 11 (warts)

### Life Cycle

**Infection:**
- Basal epithelial cells
- Viral entry via microabrasions
- E1, E2 proteins active
- Genome maintained as episome

**Replication:**
- Differentiating keratinocytes
- Viral DNA amplification
- Late gene expression
- Capsid assembly

**Release:**
- Shed with desquamating cells
- No cell lysis
- Asymptomatic shedding

### Pathogenesis

**Low-Risk Types:**
- E1, E2 active
- Genome maintained episomally
- Cellular proliferation (warts)
- No integration
- No malignant potential

**High-Risk Types:**
- Integration into host genome
- E6 and E7 oncoproteins
- P53 degradation (E6)
- Rb inactivation (E7)
- Chromosomal instability
- Progression to cancer

### Clinical Manifestations

**Genital Warts (Condyloma):**
- Types 6, 11 (90%)
- Exophytic, cauliflower-like
- Flat, papular, or pedunculated
- Cervix, vagina, vulva, anus, penis
- Benign

**Cervical Lesions:**
- CIN 1, 2, 3
- Squamous cell carcinoma
- Adenocarcinoma
- See cervical pathology module

**Other Cancers:**
- Anal cancer (90% HPV-related)
- Oropharyngeal (70%)
- Vulvar (40-50%)
- Vaginal (70%)
- Penile (40-50%)

**Recurrent Respiratory Papillomatosis:**
- Rare, children or adults
- Juvenile form (mother to child)
- Adult form (sexual transmission)
- Types 6, 11
- Multiple surgeries

### Natural History

**Acquisition:**
- Peak incidence: 15-25 years
- 80% sexually active people infected
- Usually within 1-2 years of sexual debut

**Clearance:**
- 70-90% clear within 2 years
- Median duration: 8 months
- Younger age: faster clearance

**Persistence:**
- 10-30% persist
- Risk of progression
- Associated with:
  - High-risk types
  - Immunosuppression
  - Smoking
  - Older age

**Progression to Cancer:**
- Years to decades
- Persistent infection required
- Additional cofactors
- Rare event

### Diagnosis

**Cervical Screening:**
- Pap test (cytology)
- HPV DNA testing
- Co-testing (Pap + HPV)
- See cervical pathology module

**Biopsy:**
- Colposcopy-directed
- Histopathology
- HPV typing (if needed)

**External Lesions:**
- Clinical diagnosis (warts)
- Biopsy if atypical
- Acetowhite testing

### Vaccination

**Vaccines:**

Bivalent (Cervarix): 16, 18
- Not available in US

Quadrivalent (Gardasil): 6, 11, 16, 18
- Genital warts + cancer prevention

9-valent (Gardasil 9): 6, 11, 16, 18, 31, 33, 45, 52, 58
- Broader cancer protection
- 90% of cervical cancers

**Schedule:**
- Age 9-14: 2 doses (0, 6-12 months)
- Age 15-45: 3 doses (0, 1-2, 6 months)

**Recommendations:**
- Routine at 11-12 years
- Catch-up through 26
- Shared decision 27-45

**Efficacy:**
- >90% against vaccine types
- No cross-protection (9-valent)
- Herd immunity effects
- Long-lasting protection

**Safety:**
- Excellent safety profile
- Pain at injection site
- Syncope (adolescents)
- No serious adverse events`,
      keyTerms: [
        { term: 'oncoproteins', definition: 'Proteins that can cause cancer; E6 and E7 in HPV' },
        { term: 'episome', definition: 'Viral DNA maintained separately from host chromosome' },
        { term: 'desquamation', definition: 'Shedding of skin cells' },
        { term: 'condyloma', definition: 'Genital warts caused by HPV' },
        { term: 'herd immunity', definition: 'Protection of unvaccinated due to high vaccination rates' },
      ],
      clinicalNotes: 'The 9-valent HPV vaccine (Gardasil 9) protects against HPV types 6, 11, 16, 18, 31, 33, 45, 52, and 58. This covers approximately 90% of cervical cancers, 85-90% of anal cancers, and 90% of genital warts.',
    },
    3: {
      level: 3,
      summary: 'HPV-related cancer prevention involves vaccination before exposure and screening to detect precancers. Treatment of precancerous lesions prevents cancer development. Oropharyngeal and anal cancers are increasing, highlighting the need for broader prevention strategies.',
      explanation: `## HPV-Related Cancers and Prevention

### Cervical Cancer Prevention

**Screening:**
- Ages 21-29: Cytology every 3 years
- Ages 30-65: Co-testing every 5 years OR cytology every 3 years
- HPV primary screening every 5 years (alternative)

**Abnormal Results:**
- Colposcopy
- Biopsy
- Treatment of precancers
- See cervical pathology module

**Treatment of CIN:**
- Excision (LEEP, cone)
- Ablation (cryotherapy)
- Prevents progression to cancer

### Anal Cancer

**Epidemiology:**
- 90% HPV-related (type 16)
- Increasing incidence
- Higher in HIV-positive
- Higher in MSM

**Screening (High-Risk):**
- Anal Pap test
- Anoscopy if abnormal
- Treat precancers (AIN)
- No universal recommendation

**Treatment:**
- Chemoradiation (standard)
- Surgery (early)
- Prognosis good if early

### Oropharyngeal Cancer

**Epidemiology:**
- 70% HPV-related
- Increasing incidence
- Type 16 predominant
- Male predominance (3-5:1)
- Younger age than smoking-related

**Presentation:**
- Tonsil or base of tongue
- Neck mass
- Sore throat
- Difficulty swallowing

**Treatment:**
- Chemoradiation
- Surgery
- De-escalation trials
- Better prognosis than HPV-negative

**Prevention:**
- Vaccination
- Tobacco cessation
- No screening test

### Vulvar and Vaginal Cancer

**Vulvar Cancer:**
- 40-50% HPV-related
- VIN (vulvar intraepithelial neoplasia)
- Smoking, immunosuppression
- Treatment: surgery, radiation

**Vaginal Cancer:**
- 70% HPV-related
- VAIN (vaginal intraepithelial neoplasia)
- Previous cervical cancer
- Treatment: radiation, surgery

### Penile Cancer

**Epidemiology:**
- 40-50% HPV-related
- Type 16
- Rare in developed countries
- Higher in HIV, uncircumcised
- Smoking

**Prevention:**
- Circumcision
- Hygiene
- Vaccination
- No screening

### Treatment of Genital Warts

**Patient-Applied:**
- Imiquimod (immune enhancer)
- Podofilox (antimitotic)
- Sinecatechins (green tea extract)

**Provider-Administered:**
- Cryotherapy
- Trichloroacetic acid
- Surgical excision
- Electrosurgery
- Laser

**Recurrence:**
- Common (20-30%)
- Treat until resolved
- Treat new lesions
- Consider immunosuppression

### Special Populations

**Immunocompromised:**
- HIV/AIDS
- Transplant recipients
- Higher HPV persistence
- Higher cancer risk
- More frequent screening
- Vaccinate if not done

**Pregnancy:**
- Warts may enlarge
- Treatment deferred if possible
- Cesarean not indicated for warts alone
- Rare juvenile-onset RRP

**MSM:**
- Higher anal cancer risk
- Consider screening
- Vaccinate
- HIV testing

**Transgender Persons:**
- Screen based on anatomy
- Cervical screening if cervix present
- Anal screening if indicated
- Vaccinate

### Public Health Impact

**Vaccination Programs:**
- School-based programs
- High coverage = low disease
- Australia: near elimination of cervical cancer projected
- Cost-effective

**Barriers:**
- Vaccine hesitancy
- Sexual concerns
- Access
- Cost (where not covered)
- Gender disparities

**Strategies:**
- Provider recommendation
- School requirements
- Community education
- Reminder systems`,
      keyTerms: [
        { term: 'AIN', definition: 'Anal intraepithelial neoplasia; precancerous anal lesion' },
        { term: 'VIN', definition: 'Vulvar intraepithelial neoplasia; precancerous vulvar lesion' },
        { term: 'VAIN', definition: 'Vaginal intraepithelial neoplasia; precancerous vaginal lesion' },
        { term: 'de-escalation', definition: 'Reducing treatment intensity while maintaining efficacy' },
        { term: 'antimitotic', definition: 'Preventing cell division' },
      ],
      clinicalNotes: 'HPV-positive oropharyngeal cancers have better prognosis than HPV-negative cases. The staging system now separates HPV-positive from HPV-negative oropharyngeal cancers, with different prognostic categories.',
    },
    4: {
      level: 4,
      summary: 'Advanced HPV management includes treatment of recurrent respiratory papillomatosis, management of complex anogenital lesions, and addressing vaccine hesitancy. Global implementation of vaccination programs aims to eliminate cervical cancer.',
      explanation: `## Advanced HPV Topics

### Recurrent Respiratory Papillomatosis (RRP)

**Juvenile-Onset:**
- Mother-to-child transmission
- Laryngeal involvement
- Hoarseness, stridor
- Multiple surgeries
- Risk of spread to trachea/lungs
- Malignant transformation rare

**Adult-Onset:**
- Sexual transmission
- Similar presentation
- Less aggressive

**Treatment:**
- Surgical debulking (repeated)
- Laser, microdebrider
- Adjuvant therapies:
  - Cidofovir
  - Bevacizumab
  - HPV vaccine (adjuvant)
  - Interferon

**Prevention:**
- HPV vaccination of mothers
- Cesarean not routinely indicated
- Prevention of genital warts

### Complex Anogenital Lesions

**Giant Condyloma (Buschke-Lowenstein):**
- Locally invasive
- Destructive growth
- Requires wide excision
- Recurrence common

**Intraepithelial Neoplasia:**
- Multifocal disease
- Difficult to treat
- Frequent recurrence
- Consider immunosuppression
- Close surveillance

**Anal HSIL (High-Grade):**
- Screen high-risk populations
- Infrared coagulation
- Topical treatments
- Surveillance

### Immunosuppression Management

**HIV:**
- Higher HPV persistence
- More frequent lesions
- Less clearance
- ART helps but does not eliminate risk
- Intensified screening
- Vaccinate

**Transplant:**
- High skin cancer risk (non-melanoma)
- Anogenital cancer risk
- Regular screening
- Vaccinate pre-transplant
- Reduce immunosuppression if possible

### Vaccine Hesitancy

**Concerns:**
- Safety
- Sexual implications
- Religious/cultural
- Misinformation

**Addressing:**
- Provider recommendation (strongest factor)
- Education
- Timing (before sexual debut optimal but not required)
- School requirements
- Community engagement

**Data:**
- Excellent safety record
- No increase in sexual activity
- Highly effective
- Cost-effective

### Elimination Goals

**WHO Strategy:**
- 90% HPV vaccination by age 15
- 70% screening coverage
- 90% treatment of precancers
- Eliminate cervical cancer as public health problem

**Progress:**
- Australia on track
- Rwanda high coverage
- Challenges in LMIC
- Equity issues

### Research Frontiers

**Therapeutic Vaccines:**
- For established infection
- Generate immune response
- Clinical trials
- Not yet available

**New Prevention:**
- Microbicides
- Intravaginal rings
- Pre-exposure
- Clinical trials

**Biomarkers:**
- Methylation markers
- Host gene expression
- Risk stratification
- Triage improvement

**Imaging:**
- Optical coherence tomography
- Confocal microscopy
- In vivo diagnosis
- Reduced biopsies

### Global Health

**Disparities:**
- Cervical cancer leading cause cancer death women in LMIC
- Vaccine access
- Screening access
- Treatment access

**Solutions:**
- GAVI support for vaccines
- Visual inspection with acetic acid (VIA)
- See-and-treat
- Task-shifting
- Single-visit approach

**Cost-Effectiveness:**
- Vaccination highly cost-effective
- Screening cost-effective
- Treatment of precancers cost-effective
- Investment priority`,
      keyTerms: [
        { term: 'stridor', definition: 'High-pitched breathing sound; airway obstruction' },
        { term: 'adjuvant therapy', definition: 'Additional treatment after primary therapy' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion' },
        { term: 'GAVI', definition: 'Global Alliance for Vaccines and Immunization' },
        { term: 'VIA', definition: 'Visual inspection with acetic acid; screening method' },
      ],
      clinicalNotes: 'The WHO has set targets to eliminate cervical cancer as a public health problem: 90% HPV vaccination by age 15, 70% screening coverage, and 90% treatment of precancers. These targets are achievable with political commitment and resources.',
    },
    5: {
      level: 5,
      summary: 'Expert HPV care involves managing complex cases, contributing to elimination efforts, and staying current with evolving science. Integration of HPV prevention with comprehensive reproductive and sexual health services optimizes outcomes.',
      explanation: `## Expert Topics

### Complex Clinical Scenarios

**Multifocal Disease:**
- Cervix, vagina, vulva, anus
- Synchronous lesions
- Field effect
- Close surveillance
- Consider immunosuppression

**Young Women with HSIL:**
- Fertility preservation
- Conservative management
- Excision preferred over ablation
- Preterm delivery risk
- Counseling

**Older Women:**
- Lower clearance rates
- Higher progression risk
- Continue screening
- Treatment as indicated
- Comorbidities

### Clinical Trials

**Therapeutic Vaccines:**
- HPV16 E6/E7 vaccines
- T-cell responses
- Established infection
- Adjuvant to surgery

**Immunotherapy:**
- Checkpoint inhibitors
- PD-1/PD-L1
- Advanced cervical cancer
- Combination approaches

**De-escalation:**
- Oropharyngeal cancer
- Lower radiation dose
- HPV-positive tumors
- Maintain efficacy
- Reduce toxicity

### Quality Metrics

**Vaccination:**
- Coverage rates
- Series completion
- Age at initiation
- Disparities

**Screening:**
- Uptake
- Adequacy
- Follow-up
- Treatment completion

**Outcomes:**
- CIN 2+ rates
- Cancer incidence
- Mortality
- Equity

### Survivorship

**Cervical Cancer:**
- Long-term follow-up
- Treatment effects
- Sexual health
- Lymphedema
- Psychosocial support

**Oropharyngeal Cancer:**
- Swallowing dysfunction
- Xerostomia
- Dental issues
- Speech therapy
- Quality of life

### Education and Advocacy

**Provider Education:**
- Vaccine recommendations
- Screening guidelines
- Treatment updates
- Cultural competence

**Patient Education:**
- HPV facts
- Vaccine safety
- Screening importance
- Normalization

**Advocacy:**
- Access to vaccines
- Screening programs
- Research funding
- Health equity

### Future Directions

**Single-Dose Vaccine:**
- Simpler schedule
- Improved coverage
- Cost savings
- Global impact

**Self-Testing:**
- Cervical sampling
- Home-based
- Increased access
- Implementation

**Point-of-Care Treatment:**
- Thermal ablation
- Portable devices
- LMIC appropriate
- Task-shifting

**Artificial Intelligence:**
- Automated cytology
- Risk prediction
- Triage algorithms
- Quality assurance`,
      keyTerms: [
        { term: 'field effect', definition: 'Entire area predisposed to cancer due to carcinogen exposure' },
        { term: 'synchronous', definition: 'Occurring at the same time' },
        { term: 'checkpoint inhibitors', definition: 'Cancer immunotherapy drugs' },
        { term: 'xerostomia', definition: 'Dry mouth' },
        { term: 'triage', definition: 'Sorting patients by urgency' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. The 9-valent HPV vaccine provides protection against approximately 90% of cervical cancers, 85-90% of anal cancers, and 90% of genital warts.

2. HPV vaccination is recommended for all adolescents at 11-12 years but can be given starting at age 9. Catch-up vaccination is recommended through age 26, and shared clinical decision-making for ages 27-45.

3. HPV-positive oropharyngeal cancers have better prognosis than HPV-negative cases, leading to separate staging systems and consideration of treatment de-escalation.

4. Recurrent respiratory papillomatosis is a rare but serious complication of perinatal HPV transmission. While cesarean delivery may reduce risk, it is not routinely indicated solely for maternal HPV or genital warts.

5. Australia is on track to be the first country to eliminate cervical cancer through high HPV vaccination coverage (>80%) and comprehensive screening programs.`,
    },
  },

  media: [
    {
      id: 'hpv-cancer-types',
      type: 'diagram',
      filename: 'hpv-cancer-types.svg',
      title: 'Cancers Caused by HPV',
      description: 'Anatomic sites affected by HPV-related cancers',
    },
  ],

  citations: [
    {
      id: 'cdc-hpv',
      type: 'article',
      title: 'HPV Vaccine Recommendations',
      authors: ['CDC'],
      source: 'MMWR',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-cervical-pathology', targetType: 'condition', relationship: 'related', label: 'Cervical Pathology' },
    { targetId: 'reproductive-chlamydia-gonorrhea', targetType: 'condition', relationship: 'related', label: 'Chlamydia and Gonorrhea' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'infectious-disease', 'public-health'],
    keywords: ['HPV', 'human papillomavirus', 'vaccine', 'cervical cancer', 'vaccination'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hpvPathology;
