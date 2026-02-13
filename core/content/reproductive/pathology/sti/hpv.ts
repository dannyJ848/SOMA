import { EducationalContent } from '../../../types';

export const hpvContent: EducationalContent = {
  id: 'reproductive-hpv',
  type: 'condition',
  name: 'Human Papillomavirus (HPV)',
  alternateNames: ['HPV', 'Genital warts', 'Condyloma acuminata', 'Papillomavirus infection'],
  levels: {
    1: {
      level: 1,
      summary: 'HPV is the most common sexually transmitted infection. Most people get it at some point, and most clear it naturally. Some types can cause genital warts or cancer, but vaccination prevents the most dangerous types.',
      explanation: `Human papillomavirus (HPV) is extremely common - nearly all sexually active people will get at least one type of HPV at some point.

**Key Facts:**
- There are over 200 types of HPV
- Most infections cause no symptoms and go away on their own
- Some types cause genital warts
- Some types can cause cancer (but this is rare and preventable)
- A safe, effective vaccine is available

**Types of HPV:**
- Low-risk types (6, 11): Cause genital warts
- High-risk types (16, 18, others): Can cause cancer of the cervix, anus, throat, penis, vulva

**Symptoms:**
- Most people have NO symptoms
- Genital warts: Flesh-colored bumps that may look like cauliflower
- Cancer may not cause symptoms until advanced

**How It Spreads:**
- Skin-to-skin contact during sexual activity
- Can spread even without intercourse
- Condoms reduce but don't eliminate risk

**HPV and Cancer:**
- Most HPV infections clear without causing problems
- Only persistent high-risk infections can lead to cancer
- Cervical cancer: Almost all cases caused by HPV
- Cancer develops slowly over years - screening can catch it early

**Prevention:**

*HPV Vaccine (Very Important!)*
- Prevents infection with most dangerous HPV types
- Recommended for everyone ages 11-26
- Most effective if given before sexual activity begins
- Safe and highly effective

*Screening*
- Pap smear and HPV testing detect cervical changes early
- Regular screening starting at age 21-25

*Safer Sex*
- Condoms reduce but don't eliminate risk
- Limiting partners reduces exposure`,
      keyTerms: [
        { term: 'HPV', definition: 'Human papillomavirus; a very common virus that can cause warts or cancer' },
        { term: 'Genital warts', definition: 'Growths caused by low-risk HPV types; not dangerous but may be bothersome' },
        { term: 'Cervical cancer', definition: 'Cancer of the cervix; almost all cases are caused by HPV' },
        { term: 'HPV vaccine', definition: 'A vaccine that prevents infection with the most dangerous HPV types' },
      ],
      analogies: [
        'HPV is like a common cold for your skin - most people get it, and usually the immune system clears it',
        'The vaccine is like a shield that prevents the most dangerous types from ever getting in',
      ],
      patientCounselingPoints: [
        'HPV is extremely common - you are not alone',
        'Most HPV infections go away on their own',
        'The vaccine is safe and highly effective at preventing cancer',
        'Regular screening helps catch any problems early',
      ],
    },
    2: {
      level: 2,
      summary: 'HPV encompasses over 200 types, with high-risk types causing cervical and other anogenital cancers through persistent infection. Prevention includes vaccination (9-valent) and cervical screening with cytology and HPV testing.',
      explanation: `HPV is the most common sexually transmitted infection, with lifetime prevalence approaching 80% for sexually active individuals.

**HPV Classification:**

| Risk Category | Types | Associated Disease |
|---------------|-------|-------------------|
| Low-risk | 6, 11 | Anogenital warts, RRP |
| High-risk | 16, 18, 31, 33, 45, 52, 58, others | Cervical, anal, oropharyngeal, vulvar, vaginal, penile cancer |

**Natural History:**
- 90% of infections clear within 2 years
- Persistent infection (usually >1-2 years) required for cancer development
- Progression: Normal → LSIL → HSIL → Cancer (years to decades)
- Immunosuppression increases persistence and progression

**Clinical Manifestations:**

*Genital Warts (Condyloma Acuminata)*
- Caused by HPV 6 and 11 (90%)
- Flesh-colored, raised, often cauliflower-like
- Locations: External genitalia, perineum, perianal, vagina, cervix
- Not pre-cancerous

*Cervical Disease*
- LSIL (CIN 1): Mild dysplasia, usually clears
- HSIL (CIN 2/3): Moderate to severe dysplasia, precancerous
- Cervical cancer: Squamous cell carcinoma (most common) or adenocarcinoma

*Other HPV-Related Cancers*
- Anal cancer: MSM at highest risk; screening emerging
- Oropharyngeal cancer: Rising incidence, HPV-16 dominant
- Vulvar, vaginal, penile cancers

**Diagnosis:**

*Genital Warts*
- Clinical diagnosis (visual)
- Biopsy if atypical or uncertain

*Cervical Screening*
- Pap smear (cytology): Detects cellular abnormalities
- HPV testing: Detects high-risk HPV DNA or mRNA
- Co-testing: Pap + HPV together

**Screening Recommendations (USPSTF/ASCCP):**

| Age | Recommendation |
|-----|----------------|
| 21-29 | Pap alone every 3 years |
| 30-65 | Pap every 3 years, OR HPV every 5 years, OR co-testing every 5 years |
| >65 | May stop if adequate prior screening and low risk |
| After hysterectomy | None if no history of HSIL/cancer |

**HPV Vaccination:**

*9-Valent Vaccine (Gardasil 9)*
- Types: 6, 11, 16, 18, 31, 33, 45, 52, 58
- Covers ~90% of cervical cancer and ~90% of genital warts
- Recommended ages 9-26 (catch-up to 45 if not vaccinated)
- Schedule: 2 doses if started <15; 3 doses if ≥15

*Efficacy*
- ~97% effective against HPV 16/18 precancerous lesions
- Real-world data showing cervical cancer reductions in vaccinated populations

**Wart Treatment:**
- Patient-applied: Imiquimod, podofilox, sinecatechins
- Provider-applied: Cryotherapy, TCA/BCA, surgical removal
- Treatment removes warts but not underlying infection`,
      keyTerms: [
        { term: 'CIN', definition: 'Cervical intraepithelial neoplasia; precancerous changes graded 1-3' },
        { term: 'LSIL', definition: 'Low-grade squamous intraepithelial lesion; mild dysplasia, often clears' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion; precancerous, requires treatment' },
        { term: 'Gardasil 9', definition: 'Nine-valent HPV vaccine protecting against types 6, 11, 16, 18, 31, 33, 45, 52, 58' },
        { term: 'Colposcopy', definition: 'Magnified examination of the cervix used to evaluate abnormal Pap results' },
      ],
      examples: [
        'A 25-year-old woman with LSIL on Pap smear should have repeat cytology in 1 year or reflex HPV testing, as most LSIL regresses spontaneously',
        'A 32-year-old with HPV 16 and normal cytology should have repeat co-testing in 1 year due to increased risk with this high-risk type',
      ],
    },
    3: {
      level: 3,
      summary: 'HPV oncogenesis is driven by E6 and E7 oncoproteins that inactivate p53 and Rb tumor suppressors. Cervical screening with HPV primary testing is increasingly adopted. Management of abnormal results follows ASCCP risk-based guidelines.',
      explanation: `**HPV Virology:**

**Structure**
- Non-enveloped, circular dsDNA virus (~8 kb)
- Icosahedral capsid (L1, L2 proteins)
- Epitheliotropic (infects basal epithelial cells)

**Genomic Organization**
- Early genes: E1, E2, E4, E5, E6, E7 (replication, transformation)
- Late genes: L1, L2 (capsid proteins)
- Long control region (LCR): Regulatory sequences

**Life Cycle**
1. Microtrauma allows access to basal cells
2. Binds heparan sulfate proteoglycans, L1 conformational change
3. Enters via clathrin-independent endocytosis
4. Nuclear entry, episomal maintenance
5. Amplification during epithelial differentiation
6. Virion assembly in superficial layers
7. Release with desquamating cells

**Oncogenic Mechanism:**

*E6 Oncoprotein*
- Binds E6AP (ubiquitin ligase)
- Targets p53 for degradation
- Also activates telomerase (hTERT)
- Inhibits apoptosis

*E7 Oncoprotein*
- Binds Rb (retinoblastoma protein)
- Releases E2F transcription factors
- Drives uncontrolled S phase entry
- Also interacts with p21, p27

*Integration*
- Normally episomal (circular)
- Integration into host chromosome
- Often disrupts E2 gene (which normally represses E6/E7)
- Results in E6/E7 overexpression
- Key event in progression to cancer

**Immune Evasion:**
- Minimal inflammation (no cell lysis)
- Interferon pathway inhibition
- Low MHC class I expression
- Immunosuppressed patients: Higher persistence/cancer risk

**Cervical Cancer Pathogenesis:**

*Timeline*
- Infection → Persistent infection (2+ years) → CIN 1 → CIN 2/3 → Cancer
- Full progression: Often 10-20+ years

*Histologic Progression*
- CIN 1: Koilocytes (HPV cytopathic effect), mild atypia, confined to lower 1/3
- CIN 2: Moderate atypia, involves lower 2/3
- CIN 3: Severe atypia/carcinoma in situ, full-thickness
- Invasive carcinoma: Breach of basement membrane

**Screening Approaches:**

*Cytology (Pap)*
- Bethesda classification: NILM, ASC-US, LSIL, ASC-H, HSIL, SCC
- Sensitivity ~53%, Specificity ~96%
- Operator dependent

*HPV Testing*
- Detects high-risk HPV DNA or mRNA
- Sensitivity ~95%, Specificity ~90%
- Can do reflex or primary testing

*Primary HPV Screening*
- HPV test first; triage positives with cytology or HPV 16/18 genotyping
- Better sensitivity than cytology
- Allows extended screening intervals for HPV-negative women

**ASCCP Risk-Based Management (2019):**

*Risk Stratification*
- Based on current and prior results
- Determines threshold for colposcopy/treatment
- 5-year risk of CIN 3+ calculated

*Management Actions*
| 5-year CIN 3+ Risk | Action |
|--------------------|--------|
| ≥4% | Colposcopy |
| 0.55-4% | 1-year follow-up |
| 0.15-0.55% | 3-year follow-up |
| <0.15% | 5-year follow-up |

*Special Considerations*
- HPV 16/18 positive: Higher risk, colposcopy even with normal cytology
- Immunosuppressed: More frequent screening
- Pregnancy: Defer colposcopy unless HSIL concern`,
      keyTerms: [
        { term: 'E6 oncoprotein', definition: 'HPV protein that causes p53 degradation, removing key tumor suppressor function' },
        { term: 'E7 oncoprotein', definition: 'HPV protein that inactivates Rb, driving uncontrolled cell proliferation' },
        { term: 'Koilocyte', definition: 'Squamous cell with perinuclear halo and nuclear irregularity; pathognomonic for HPV' },
        { term: 'ASCCP', definition: 'American Society for Colposcopy and Cervical Pathology; provides management guidelines' },
        { term: 'HPV integration', definition: 'Incorporation of HPV DNA into host genome; key step in carcinogenesis' },
      ],
      examples: [
        'Integration of HPV genome often disrupts E2, which normally represses E6/E7, leading to uncontrolled oncogene expression',
        'A patient with HPV-positive, cytology-negative result who is HPV 16 or 18 positive should proceed to colposcopy due to high-risk genotype',
      ],
    },
    4: {
      level: 4,
      summary: 'HPV vaccine immunology involves VLP-based induction of neutralizing antibodies. Molecular markers like p16 aid histologic interpretation. Treatment of high-grade lesions aims to remove transformation zone while preserving fertility.',
      explanation: `**Vaccine Immunology:**

**Virus-Like Particles (VLPs)**
- L1 capsid protein self-assembles into VLP
- Structurally identical to native virion
- No viral DNA = no infection risk
- Highly immunogenic

**Immune Response**
- Primarily antibody-mediated protection
- Neutralizing antibodies against L1
- Titers 10-100x higher than natural infection
- Cell-mediated response also generated
- Long-term protection (at least 10+ years)

**Cross-Protection**
- Some protection against non-vaccine types
- Phylogenetically related types (e.g., 16→31→33)
- Variable and incomplete

**Therapeutic Vaccine Approaches**
- Target E6/E7 (not L1)
- Generate T cell response to clear infected cells
- Multiple candidates in trials
- Not yet approved

**Molecular Biomarkers:**

*p16 (INK4a)*
- CDK inhibitor normally suppressed by Rb pathway
- E7 inactivates Rb → p16 overexpression (paradoxical)
- Used as surrogate marker for HPV-driven HSIL
- Continuous, strong staining = HPV-driven
- Helps distinguish CIN 2/3 from mimics

*Ki-67*
- Proliferation marker
- Used with p16 in dual-stain
- Dual-stain: Emerging as triage test

*HPV mRNA Tests*
- E6/E7 mRNA detection
- More specific for transforming infections
- May improve triage

**Treatment of Cervical Dysplasia:**

*CIN 1*
- Usually observation (high regression rate)
- Repeat testing at 12 months
- Treatment only if persistent (2+ years)

*CIN 2/3 (HSIL)*
- Treatment recommended (high progression risk)
- Goal: Excise/destroy transformation zone

*Excisional Procedures*
| Procedure | Method | Specimen |
|-----------|--------|----------|
| LEEP/LLETZ | Electrosurgical loop | Yes |
| Cold knife conization | Scalpel | Yes |
| Laser conization | CO2 laser | Yes |

- LEEP: Most common, office-based
- Provides specimen for histology
- Allows margin assessment

*Ablative Procedures*
| Procedure | Method |
|-----------|--------|
| Cryotherapy | Freezing |
| Laser ablation | Thermal destruction |
| Thermal ablation | Heat coagulation |

- No specimen
- Use only when invasion excluded

**Obstetric Considerations:**
- Excisional procedures increase preterm birth risk
- Risk correlates with depth of excision
- Consider surveillance vs. treatment in young women
- CIN 2: May observe in women <25
- Cone depth >1.0-1.5 cm: Highest risk

**Anal Dysplasia:**

*High-Risk Groups*
- MSM (especially HIV-positive)
- Women with cervical/vulvar HSIL
- Immunosuppressed

*Screening*
- Anal cytology
- High-resolution anoscopy (HRA) if abnormal
- Guidelines emerging

*Management*
- ANCHOR trial: Treatment of HSIL reduces anal cancer risk
- Ablation or excision of HSIL
- Surveillance for lower-grade lesions

**Oropharyngeal HPV:**
- Rising incidence of HPV+ oropharyngeal cancer
- Most HPV-16
- Better prognosis than HPV-negative
- p16 IHC used for classification
- No established screening
- Vaccine expected to reduce incidence`,
      keyTerms: [
        { term: 'VLP', definition: 'Virus-like particle; self-assembled L1 capsid protein forming immunogenic structure without viral DNA' },
        { term: 'p16 overexpression', definition: 'Surrogate marker for HPV-driven high-grade lesions resulting from Rb inactivation by E7' },
        { term: 'LEEP', definition: 'Loop electrosurgical excision procedure; most common treatment for cervical HSIL' },
        { term: 'Transformation zone', definition: 'Cervical area where columnar and squamous epithelium meet; origin of most cervical cancers' },
        { term: 'HRA', definition: 'High-resolution anoscopy; colposcopy equivalent for anal dysplasia evaluation' },
      ],
      clinicalNotes: 'The ANCHOR trial (published 2022) demonstrated that treatment of anal HSIL reduces progression to anal cancer by 57% compared to active monitoring. This supports screening and treatment in high-risk populations (especially HIV-positive MSM).',
    },
    5: {
      level: 5,
      summary: 'HPV prevention strategy integrates population-level vaccination programs, risk-stratified cervical screening algorithms, and evidence-based management of precancerous lesions, with emerging applications in HPV-related cancers at other sites.',
      explanation: `**Vaccination Strategy:**

**Global Implementation**
- WHO: Recommend vaccination of girls before sexual debut
- Many countries now include boys
- Single-dose schedules being evaluated (promising data)

**US Recommendations (ACIP)**
- Routine: Age 11-12 (can start at 9)
- Catch-up: Through age 26
- Shared decision-making: 27-45 (less benefit if prior exposure)
- Schedule:
  - Ages 9-14: 2 doses (0, 6-12 months)
  - Ages 15+: 3 doses (0, 1-2, 6 months)

**Effectiveness Data**
- Australia (high coverage): 77% reduction in high-grade cervical abnormalities
- Near elimination of genital warts in young vaccinated cohorts
- Herd immunity effects observed
- Cervical cancer incidence declining in vaccinated populations

**Post-Vaccination Screening**
- Continue cervical screening (not all types covered)
- Future: May allow modified screening strategies

**Cervical Screening Implementation:**

**Primary HPV Screening Adoption**
- FDA-approved strategy
- More sensitive than cytology
- Longer screening intervals (5 years if negative)
- Algorithm:
  1. HPV test
  2. If positive: HPV 16/18 genotyping and/or cytology triage
  3. HPV 16/18 positive → Colposcopy
  4. Other HR-HPV, normal cytology → Repeat in 1 year

**Self-Collection**
- HPV testing can use self-collected vaginal samples
- Nearly as sensitive as clinician-collected
- Potential to increase screening coverage
- FDA approval pending

**Risk-Based Management:**

**ASCCP 2019 Guidelines**
- Equal management for equal risk
- Uses tables/apps to determine action
- Incorporates current and prior test results
- Key thresholds:
  - ≥4%: Colposcopy
  - ≥25%: Expedited treatment (treat without biopsy) option
  - <0.15%: Return to routine screening

**Colposcopy Practice**
- Systematic examination of transformation zone
- Acetic acid application (acetowhite changes)
- Lugol's iodine (Schiller test)
- Targeted biopsies of abnormal areas
- ECC if indicated (non-pregnant)

**Treatment Decision-Making:**

**LEEP/Excision Technique**
- Ensure adequate excision of transformation zone
- Minimize unnecessary depth (obstetric risk)
- Endocervical margin most important
- Positive margins: Repeat testing, not automatic re-excision

**Post-Treatment Surveillance**
- HPV/cytology co-testing at 6 months preferred
- If negative: Annual for 3 years, then every 3 years for 25 years
- HPV persistent: Consider re-evaluation

**Special Populations:**

**HIV-Positive Women**
- Higher HPV prevalence and persistence
- Faster progression
- Screening: Cytology at diagnosis, then annual
- OR HPV co-testing at diagnosis, then per standard if CD4 stable
- Lower threshold for colposcopy

**Immunosuppression (Transplant)**
- Similar increased risks
- Annual cytology recommended

**Adolescents**
- Conservative management (high regression)
- CIN 2: May observe with close follow-up
- Vaccination critical

**Post-Hysterectomy**
- If no prior HSIL: No screening needed
- History of HSIL: Continue vaginal cuff screening for 25 years

**Emerging Directions:**

**HPV-Related Cancer at Other Sites**
- Anal cancer screening emerging for high-risk
- Oropharyngeal: No screening; rely on vaccination
- Penile: No routine screening

**Therapeutic Vaccines**
- Target E6/E7 to clear existing infection
- Multiple trials ongoing
- Could reduce need for excisional treatment

**Biomarker Development**
- Methylation markers for triage
- Dual-stain (p16/Ki-67) for cytology triage
- Risk stratification enhancement`,
      keyTerms: [
        { term: 'Primary HPV screening', definition: 'Cervical screening strategy starting with HPV test rather than cytology' },
        { term: 'Expedited treatment', definition: 'Treatment of HSIL without preceding biopsy when CIN 3+ risk exceeds 25%' },
        { term: 'ASCCP risk tables', definition: 'Evidence-based tools calculating CIN 3+ risk to guide management based on test result combinations' },
        { term: 'Self-collection', definition: 'Patient-collected vaginal samples for HPV testing; potential to increase screening uptake' },
        { term: 'ANCHOR trial', definition: 'Study demonstrating anal HSIL treatment reduces anal cancer; supports screening in high-risk groups' },
      ],
      clinicalNotes: 'The 2019 ASCCP guidelines represent a paradigm shift from result-based to risk-based management. Use of the ASCCP risk tables or management app is recommended for clinical decision-making. Key principle: patients with equal risk receive equal management regardless of how risk was determined. HPV vaccination is now recommended through age 45 for those not previously vaccinated, though benefit diminishes with age/prior exposure.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: '2019 ASCCP Risk-Based Management Consensus Guidelines',
      source: 'Journal of Lower Genital Tract Disease',
      authors: ['Perkins, R.B.', 'et al.'],
      url: 'https://doi.org/10.1097/LGT.0000000000000525',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'HPV Vaccines - NEJM Review',
      source: 'New England Journal of Medicine',
      authors: ['Schiller, J.T.', 'Lowy, D.R.'],
      url: 'https://doi.org/10.1056/NEJMra070287',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-herpes', targetType: 'condition', relationship: 'sibling', label: 'Herpes' },
    { targetId: 'reproductive-chlamydia-gonorrhea', targetType: 'condition', relationship: 'sibling', label: 'Chlamydia and Gonorrhea' },
  ],
  tags: {
    systems: ['reproductive', 'infectious'],
    topics: ['pathology', 'infectious disease', 'STI', 'oncology', 'prevention'],
    keywords: ['HPV', 'cervical cancer', 'genital warts', 'Pap smear', 'HPV vaccine', 'Gardasil'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'medicine', 'infectious-disease'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
