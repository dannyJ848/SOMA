import { EducationalContent } from '../../../types';

export const syphilisContent: EducationalContent = {
  id: 'reproductive-syphilis',
  type: 'condition',
  name: 'Syphilis',
  alternateNames: ['Treponema pallidum infection', 'Lues', 'The great imitator'],
  levels: {
    1: {
      level: 1,
      summary: 'Syphilis is a bacterial sexually transmitted infection that progresses through stages. It can be cured with penicillin, but untreated syphilis can cause serious problems years later.',
      explanation: `Syphilis is a bacterial infection that has been around for centuries. It is called "the great imitator" because its symptoms can look like many other diseases.

**What Causes Syphilis:**
- A bacterium called Treponema pallidum
- Spread through direct contact with a syphilis sore during vaginal, anal, or oral sex
- Can be passed from mother to baby during pregnancy

**Stages of Syphilis:**

**Stage 1 - Primary Syphilis:**
- A painless sore (called a chancre) appears where the infection entered
- Usually on the genitals, anus, or mouth
- Heals on its own in 3-6 weeks
- Still infectious even after it heals

**Stage 2 - Secondary Syphilis:**
- Skin rash (often on palms and soles of feet)
- Flu-like symptoms: Fever, fatigue, swollen lymph nodes
- May have wart-like growths in genital area
- Symptoms come and go

**Latent Syphilis:**
- No symptoms, but infection is still in the body
- Can last for years
- Still detectable by blood test

**Stage 3 - Tertiary Syphilis (Rare if Treated):**
- Occurs years after initial infection if untreated
- Can damage heart, brain, nerves, bones
- Can be life-threatening

**Diagnosis:**
- Blood tests (screening and confirmatory)
- Examination of sores

**Treatment:**
- Penicillin injection is the cure
- One shot cures early syphilis
- More treatment needed for later stages
- Partners must be tested and treated

**Why Treatment Matters:**
- Syphilis is completely curable if caught early
- Without treatment, it can cause serious long-term damage
- Pregnant women with syphilis can pass it to their babies (congenital syphilis)`,
      keyTerms: [
        { term: 'Syphilis', definition: 'A bacterial sexually transmitted infection that progresses through stages' },
        { term: 'Chancre', definition: 'The painless sore that appears in primary syphilis' },
        { term: 'Congenital syphilis', definition: 'Syphilis passed from mother to baby during pregnancy' },
        { term: 'Treponema pallidum', definition: 'The bacteria that causes syphilis' },
      ],
      analogies: [
        'Syphilis stages are like a fire that seems to go out but keeps smoldering - it can flare up later if not properly extinguished (treated)',
        'The chancre is like a calling card - it announces the infection arrived but disappears whether treated or not',
      ],
      patientCounselingPoints: [
        'Syphilis is completely curable with the right treatment',
        'Painless sores should be checked - they might not hurt but are still serious',
        'All sexual partners need to be notified and tested',
        'Pregnant women should be tested to protect their babies',
      ],
    },
    2: {
      level: 2,
      summary: 'Syphilis caused by Treponema pallidum progresses through primary, secondary, latent, and tertiary stages. Diagnosis uses treponemal and nontreponemal serologic tests. Penicillin G remains the treatment of choice.',
      explanation: `Syphilis rates have been rising dramatically in recent years, making this "historic" infection an important current public health challenge.

**Epidemiology:**
- Rising incidence in US and globally
- Highest rates: MSM, young adults, Southern US
- Congenital syphilis rates also rising
- Often co-occurs with HIV

**Stages:**

**Primary Syphilis (10-90 days after exposure)**
- Chancre: Painless, indurated, clean-based ulcer
- Location: Genital, anal, oral
- Heals spontaneously in 3-6 weeks
- Highly infectious

**Secondary Syphilis (4-10 weeks after chancre)**
- Systemic dissemination
- Rash: Often palms/soles, not itchy
- Condyloma lata: Wart-like lesions in moist areas
- Mucous patches: Oral lesions
- Lymphadenopathy
- Constitutional symptoms
- Resolves spontaneously; can recur

**Latent Syphilis**
- Early latent: <1 year since infection
- Late latent: >1 year or unknown duration
- No symptoms
- Seroreactive
- Still transmissible (early latent)

**Tertiary Syphilis (years to decades later)**
- Occurs in ~30% of untreated patients
- Gummas: Granulomatous lesions in skin, bone, viscera
- Cardiovascular: Aortitis, aortic regurgitation, aneurysm
- Neurosyphilis: Can occur at any stage (see below)

**Neurosyphilis:**
- Can occur at any stage
- Early: Meningitis, cranial nerve involvement
- Late: General paresis (dementia), tabes dorsalis (posterior column disease)
- Argyll Robertson pupil: Accommodates but doesn't react to light

**Diagnosis:**

*Screening: Nontreponemal Tests*
- RPR (Rapid Plasma Reagin) or VDRL
- Measure antibody to cardiolipin
- Titer correlates with disease activity
- Can be falsely positive (autoimmune, infections, pregnancy)

*Confirmatory: Treponemal Tests*
- FTA-ABS, TP-PA, EIA/CIA
- Specific for T. pallidum
- Usually remain positive for life (even after treatment)

*Testing Algorithms*
1. Traditional: Screen with nontreponemal, confirm with treponemal
2. Reverse sequence: Screen with treponemal, confirm with nontreponemal
   - If discordant: Resolve with different treponemal test

**Treatment (CDC 2021):**

| Stage | Treatment |
|-------|-----------|
| Primary, Secondary, Early Latent | Benzathine penicillin G 2.4 million units IM x 1 |
| Late Latent or Unknown Duration | Benzathine penicillin G 2.4 million units IM weekly x 3 |
| Neurosyphilis | Aqueous penicillin G 18-24 million units/day IV x 10-14 days |

*Penicillin Allergy*
- Desensitization and treatment with penicillin (preferred)
- Alternative: Doxycycline 100 mg BID x 14-28 days

**Jarisch-Herxheimer Reaction:**
- Acute febrile reaction within 24 hours of treatment
- Due to dying spirochetes releasing cytokines
- More common in early syphilis
- Self-limited; treat symptomatically`,
      keyTerms: [
        { term: 'Chancre', definition: 'Painless, indurated ulcer at the site of T. pallidum entry in primary syphilis' },
        { term: 'Condyloma lata', definition: 'Highly infectious flat, wart-like lesions in secondary syphilis' },
        { term: 'RPR/VDRL', definition: 'Nontreponemal serologic tests used for screening and monitoring treatment response' },
        { term: 'Jarisch-Herxheimer', definition: 'Acute febrile reaction after syphilis treatment due to spirochete death' },
        { term: 'Benzathine penicillin G', definition: 'Long-acting penicillin formulation; treatment of choice for syphilis' },
      ],
      examples: [
        'A patient with a painless genital ulcer and bilateral inguinal lymphadenopathy should be tested for primary syphilis',
        'A patient treated for primary syphilis should have RPR titers checked at 6 and 12 months; a fourfold decline indicates adequate treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'T. pallidum pathogenesis involves dissemination and immune evasion leading to characteristic staged disease. Serologic testing algorithms, CSF analysis for neurosyphilis, and special management in pregnancy and HIV are essential clinical considerations.',
      explanation: `**T. pallidum Biology:**

**Organism Characteristics**
- Spirochete (spiral-shaped)
- Cannot be cultured in vitro (obligate pathogen)
- Fragile (survives poorly outside host)
- Outer membrane proteins critical for immune evasion

**Virulence Factors**
- Motility (endoflagella)
- Adhesins for tissue attachment
- Outer membrane proteins (Tpr family)
- Hyaluronidase for tissue invasion
- No LPS (low endotoxin activity)

**Immune Evasion**
- Sparse outer membrane proteins
- Antigenic variation
- Slow replication (evades immune clearance)
- Intracellular survival

**Pathogenesis by Stage:**

*Primary*
- Entry through microabrasions
- Local replication
- Minimal inflammation (painless)
- Ulcer forms (chancre)
- Early dissemination begins

*Secondary*
- Widespread hematogenous dissemination
- Spirochetemia
- Multiorgan involvement
- Immune complex deposition (rash, glomerulonephritis)
- Strong T cell response → resolution

*Latent*
- Treponemes persist in various tissues
- Low-level replication
- Immune surveillance controls but doesn't eradicate
- May reactivate (relapse to secondary)

*Tertiary*
- Delayed hypersensitivity response to persisting organisms
- Gumma: Granulomatous reaction
- Cardiovascular: Endarteritis obliterans of vasa vasorum
- Neurologic: Chronic meningeal inflammation, parenchymal invasion

**Neurosyphilis:**

*Classification*
| Type | Features |
|------|----------|
| Asymptomatic | CSF abnormalities, no symptoms |
| Meningeal | Headache, CN palsies |
| Meningovascular | Stroke syndromes |
| General paresis | Dementia, personality change |
| Tabes dorsalis | Posterior column dysfunction, lightning pains |
| Ocular | Uveitis, optic neuritis |
| Otic | Hearing loss, vestibular symptoms |

*CSF Analysis*
- Indicated if: Neurologic symptoms, treatment failure, HIV with CD4 <350 or high RPR
- Findings: Elevated WBC (>5), elevated protein, positive VDRL (specific but insensitive)
- Negative CSF VDRL doesn't exclude neurosyphilis

**Serologic Algorithms:**

*Traditional Algorithm*
1. Nontreponemal screen (RPR/VDRL)
2. If positive: Confirm with treponemal test (FTA-ABS/TP-PA)
3. If both positive: Syphilis (current or past)

*Reverse Sequence Algorithm*
1. Treponemal screen (EIA/CIA)
2. If positive: Nontreponemal test
3. If discordant (treponemal+, nontreponemal-): Alternative treponemal test
4. Resolves as treated/past infection vs. false positive

*Prozone Phenomenon*
- False-negative nontreponemal test due to antibody excess
- Suspect in secondary syphilis with very high burden
- Request diluted sample

**Special Populations:**

*HIV Coinfection*
- Atypical presentations possible
- May have higher false-negative serology
- Neurosyphilis more common
- Same treatment regimens but closer follow-up
- CSF exam if CD4 <350 or RPR ≥1:32

*Pregnancy*
- Untreated syphilis: 40% fetal death, congenital syphilis
- Screen all pregnant women (first prenatal, third trimester if at risk, delivery)
- Only penicillin treats fetal infection
- Desensitize penicillin-allergic patients
- Jarisch-Herxheimer may trigger labor`,
      keyTerms: [
        { term: 'Spirochete', definition: 'Spiral-shaped bacterium; T. pallidum belongs to this group' },
        { term: 'Vasa vasorum', definition: 'Small blood vessels that supply the walls of large arteries; involved in cardiovascular syphilis' },
        { term: 'Argyll Robertson pupil', definition: 'Pupil that accommodates but does not react to light; classic finding in neurosyphilis' },
        { term: 'Prozone phenomenon', definition: 'False-negative nontreponemal test due to antibody excess in high-burden disease' },
        { term: 'Reverse sequence algorithm', definition: 'Syphilis testing starting with treponemal test; increasingly used' },
      ],
      examples: [
        'In reverse sequence testing, a positive EIA with negative RPR requires a second treponemal test (TP-PA) to differentiate past treated infection from false-positive EIA',
        'A patient with neurosyphilis may have negative CSF VDRL; diagnosis relies on clinical findings and elevated CSF WBC/protein',
      ],
    },
    4: {
      level: 4,
      summary: 'T. pallidum molecular biology involves unique outer membrane composition enabling immune evasion and antigenic variation. PCR and molecular typing are used in research. Congenital syphilis pathophysiology and diagnosis require specific expertise.',
      explanation: `**T. pallidum Molecular Biology:**

**Genome**
- ~1.14 Mb circular chromosome
- Reduced genome (obligate parasite)
- Limited metabolic capacity
- Cannot synthesize most amino acids, nucleotides
- Lacks genes for oxidative phosphorylation

**Outer Membrane**
- Uniquely sparse protein content
- Lacks LPS (unlike gram-negative bacteria)
- Lipoproteins anchored to inner leaflet
- Surface-exposed proteins limited and variable
- Contributes to "stealth" pathogen strategy

**Tpr Family Proteins**
- T. pallidum repeat proteins
- Surface-exposed
- Undergo antigenic variation (gene conversion)
- TprK: Best characterized; multiple variable regions
- Immune pressure drives variation

**BMP Family**
- Basic membrane proteins
- Targets of protective immunity
- Potential vaccine candidates

**Cardiolipin and Nontreponemal Tests:**
- Cardiolipin: Component of host cell membranes
- Released from damaged cells during infection
- Antibodies to cardiolipin = nontreponemal test target
- Also released in other conditions (autoimmune, infections)

**Diagnostic Advances:**

*PCR*
- T. pallidum-specific DNA detection
- Useful for: Primary lesion, CSF, amniotic fluid
- More sensitive than dark-field microscopy
- Not widely available clinically

*Direct Detection*
- Dark-field microscopy: Requires experience, fresh specimen
- Direct fluorescent antibody (DFA): More accessible
- Silver staining (tissue)

*Molecular Typing*
- Strain typing for epidemiology
- CDC TP typing system
- Tracks outbreaks and transmission networks

**Congenital Syphilis:**

*Transmission Risk*
| Maternal Stage | Transmission Risk |
|----------------|-------------------|
| Primary/Secondary | 60-100% |
| Early Latent | 40% |
| Late Latent | 10% |

*Pathophysiology*
- Transplacental infection (primarily second half of pregnancy)
- Spirochetes cause placentitis
- Fetal hepatitis, hemolysis, hydrops
- Can occur at any gestational age

*Outcomes Without Treatment*
- Spontaneous abortion: 25%
- Stillbirth: 25%
- Congenital syphilis: 25%
- Normal infant (may be infected): 25%

*Clinical Manifestations*
| Early (<2 years) | Late (>2 years) |
|------------------|-----------------|
| Hepatomegaly | Hutchinson teeth |
| Rash | Interstitial keratitis |
| Snuffles (rhinitis) | Saddle nose |
| Osteochondritis | Saber shins |
| Pseudoparalysis | Eighth nerve deafness |
| Anemia, thrombocytopenia | Clutton joints |

*Diagnosis in Neonate*
- Maternal serologic status
- Infant titer > maternal titer (by 4-fold)
- IgM specific antibody
- Dark-field or PCR of lesions, placenta, cord
- CSF analysis
- Long bone X-rays

*Treatment*
- Aqueous crystalline penicillin G 50,000 units/kg IV q12h (first 7 days), then q8h (days 8-10)
- Total 10 days
- Alternative: Procaine penicillin G 50,000 units/kg IM daily x 10 days

**Syphilis and HIV:**

*Epidemiologic Synergy*
- Same risk behaviors
- Genital ulcers increase HIV transmission 2-5x
- 40-60% of MSM with primary syphilis are HIV-positive

*Clinical Implications*
- Atypical serologic responses possible
- More frequent CNS involvement
- Standard treatment regimens apply
- Enhanced follow-up recommended
- Screen HIV patients for syphilis at least annually`,
      keyTerms: [
        { term: 'TprK', definition: 'T. pallidum repeat protein K; undergoes antigenic variation to evade immune response' },
        { term: 'Hutchinson triad', definition: 'Classic findings of congenital syphilis: notched teeth, interstitial keratitis, eighth nerve deafness' },
        { term: 'Pseudoparalysis of Parrot', definition: 'Painful osteochondritis in congenital syphilis causing limb immobility' },
        { term: 'Snuffles', definition: 'Persistent mucopurulent rhinitis in congenital syphilis; highly infectious' },
        { term: 'Gene conversion', definition: 'Mechanism by which T. pallidum generates TprK antigenic variants' },
      ],
      clinicalNotes: 'Congenital syphilis is preventable with adequate prenatal screening and treatment. The CDC recommends screening at first prenatal visit, in third trimester, and at delivery for women in high-prevalence areas or with risk factors. Any infant born to a seropositive mother requires thorough evaluation based on maternal treatment status, adequacy, and timing.',
    },
    5: {
      level: 5,
      summary: 'Syphilis control requires comprehensive screening programs, partner services, and focused interventions for high-risk populations. Management follows CDC guidelines with attention to treatment response monitoring, special populations, and emerging antimicrobial resistance concerns.',
      explanation: `**Public Health Control:**

**Surveillance and Reporting**
- All stages are reportable
- Case definitions standardized
- Partner notification services critical
- Contact tracing for past 90 days (primary) to 1 year (late latent)

**Screening Recommendations**

| Population | Recommendation |
|------------|----------------|
| Pregnant women | First prenatal, third trimester if at risk, delivery |
| MSM | At least annually; q3-6 months if high-risk |
| HIV-positive | At diagnosis, then at least annually |
| Incarcerated | At intake |
| STI clinic attendees | Routine screening |

**Elimination Efforts**
- CDC piloted elimination programs (stalled due to resurgence)
- Focused interventions in high-morbidity areas
- PrEP programs integrating STI screening

**Treatment Details:**

**Primary/Secondary/Early Latent (<1 year)**
- Benzathine penicillin G 2.4 million units IM x 1
- Alternative (if penicillin allergy and can't desensitize):
  - Doxycycline 100 mg BID x 14 days
  - Ceftriaxone 1-2 g IM/IV daily x 10-14 days (limited data)

**Late Latent/Unknown Duration/Tertiary**
- Benzathine penicillin G 2.4 million units IM weekly x 3
- Alternative: Doxycycline 100 mg BID x 28 days

**Neurosyphilis/Ocular/Otic**
- Aqueous crystalline penicillin G 18-24 million units/day IV (3-4 million q4h) x 10-14 days
- Alternative: Procaine penicillin 2.4 million units IM daily + probenecid 500 mg QID x 10-14 days
- Desensitization preferred for penicillin allergy

**Treatment Response Monitoring:**

*Nontreponemal Titers*
- Check at 6 and 12 months (primary/secondary)
- Check at 6, 12, and 24 months (latent)
- Expected: Fourfold decline (e.g., 1:32 to 1:8)
- Some patients become seronegative

*Treatment Failure Criteria*
- Fourfold increase in titer
- Failure of fourfold decline by:
  - 6-12 months (primary/secondary)
  - 12-24 months (latent)
- Development of neurologic symptoms

*Management of Treatment Failure*
- CSF examination
- Re-treatment (generally with neurosyphilis regimen if CSF abnormal)
- Evaluate for HIV

**Pregnancy Management:**

*Maternal Treatment*
- Same regimens as non-pregnant
- Only penicillin adequately treats fetus
- Desensitization required for penicillin-allergic

*Adequate Treatment Definition*
- Stage-appropriate regimen
- Completed ≥30 days before delivery
- No evidence of reinfection
- Serologic response documented or expected

*Inadequate Treatment*
- Infant requires full evaluation and treatment
- May need extended follow-up

**Jarisch-Herxheimer Prevention/Management:**
- More common in early syphilis, HIV
- Occurs 2-8 hours after treatment
- Fever, rigors, myalgias, headache
- Management: Supportive, antipyretics
- Pregnancy: May trigger contractions; monitor fetus

**Emerging Concerns:**

*Azithromycin Resistance*
- 23S rRNA mutations
- Up to 10% resistance in some areas
- Azithromycin no longer recommended

*Macrolide Resistance Surveillance*
- Ongoing CDC monitoring
- Important for alternative regimen development

*Penicillin Supply*
- Periodic shortages
- Alternative formulations may be needed

**Partner Management:**

*Partner Notification*
- Primary: Partners from past 3 months
- Secondary: Partners from past 6 months
- Early latent: Partners from past 1 year
- Late latent: Evaluate long-term partners

*Epidemiologic Treatment*
- Treat partners presumptively based on exposure
- Do not wait for serologic results
- Use stage-appropriate regimens

**Special Scenarios:**

*Syphilis in MSM on PrEP*
- High STI rates despite PrEP
- Quarterly STI testing recommended
- PrEP visits opportunity for screening

*Late/Tertiary Syphilis Management*
- Cardiology consultation for cardiovascular syphilis
- May need concurrent steroids for some manifestations
- Gummas may require surgical intervention
- Long-term neurology follow-up for neurosyphilis`,
      keyTerms: [
        { term: 'Benzathine penicillin G', definition: 'Long-acting penicillin formulation used for most syphilis stages; single injection for early disease' },
        { term: 'Serologic response', definition: 'Expected fourfold decline in nontreponemal titer after adequate treatment' },
        { term: 'Epidemiologic treatment', definition: 'Treating exposed sexual contacts without waiting for their test results' },
        { term: 'Serofast', definition: 'Persistent low-level nontreponemal titer after treatment despite adequate therapy' },
        { term: 'Azithromycin resistance', definition: 'Emerging T. pallidum resistance making single-dose azithromycin unreliable' },
      ],
      clinicalNotes: 'Penicillin remains the cornerstone of syphilis treatment, and desensitization should be pursued for allergic patients rather than relying on alternatives, especially in pregnancy and neurosyphilis. The "serofast" state (persistent low titer after treatment) occurs in some patients; if there is no fourfold titer rise and symptoms do not develop, this may represent treated infection rather than failure. However, close follow-up and consideration of CSF examination is warranted.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'CDC Sexually Transmitted Infections Treatment Guidelines, 2021',
      source: 'MMWR Recommendations and Reports',
      authors: ['Workowski, K.A.', 'et al.'],
      url: 'https://doi.org/10.15585/mmwr.rr7004a1',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Syphilis - Lancet Seminar',
      source: 'The Lancet',
      authors: ['Peeling, R.W.', 'et al.'],
      url: 'https://doi.org/10.1016/S0140-6736(18)30295-3',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-herpes', targetType: 'condition', relationship: 'sibling', label: 'Herpes' },
    { targetId: 'reproductive-chlamydia-gonorrhea', targetType: 'condition', relationship: 'sibling', label: 'Chlamydia and Gonorrhea' },
    { targetId: 'reproductive-hpv', targetType: 'condition', relationship: 'sibling', label: 'HPV' },
  ],
  tags: {
    systems: ['reproductive', 'infectious', 'neurologic', 'cardiovascular'],
    topics: ['pathology', 'infectious disease', 'STI', 'public health'],
    keywords: ['syphilis', 'treponema pallidum', 'RPR', 'VDRL', 'chancre', 'neurosyphilis', 'congenital syphilis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'medicine', 'infectious-disease', 'neurology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
