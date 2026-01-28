import { EducationalContent } from '../../../types';

export const herpesContent: EducationalContent = {
  id: 'reproductive-herpes',
  type: 'condition',
  name: 'Genital Herpes',
  alternateNames: ['HSV', 'Herpes simplex virus infection', 'HSV-1 genital', 'HSV-2'],
  levels: {
    1: {
      level: 1,
      summary: 'Genital herpes is a very common infection caused by herpes simplex virus (HSV). It causes painful sores but can be managed with medication. Many people with herpes have no or mild symptoms.',
      explanation: `Genital herpes is a viral infection that affects the genital and anal area. It is one of the most common sexually transmitted infections in the world.

**Key Facts:**
- Caused by herpes simplex virus (HSV-1 or HSV-2)
- Very common: About 1 in 6 people ages 14-49 have genital herpes
- Once infected, the virus stays in your body for life
- Outbreaks can be managed with medication
- Most people with herpes do not know they have it

**Symptoms:**

*During an Outbreak:*
- Painful blisters or sores on or around genitals, anus, or thighs
- Tingling or burning before sores appear
- Flu-like symptoms (fever, body aches) with first outbreak
- Painful urination if sores are near urethra

*Many People Have:*
- No symptoms at all
- Very mild symptoms they do not notice
- Symptoms mistaken for something else

**How It Spreads:**
- Skin-to-skin contact during vaginal, anal, or oral sex
- Can spread even when no sores are visible (asymptomatic shedding)
- HSV-1 (usually oral herpes) can cause genital herpes through oral sex

**Living with Herpes:**
- It is a manageable condition
- Antiviral medication can:
  - Shorten outbreaks
  - Reduce number of outbreaks
  - Lower risk of spreading to partners
- Outbreaks typically become less frequent over time
- Millions of people live normal, healthy lives with herpes

**Prevention:**
- Condoms reduce but do not eliminate risk (can spread from uncovered areas)
- Avoid sex during outbreaks
- Daily antiviral medication reduces transmission risk
- Communication with partners is important`,
      keyTerms: [
        { term: 'Herpes simplex virus', definition: 'The virus that causes herpes; HSV-1 and HSV-2 are two types' },
        { term: 'Outbreak', definition: 'When herpes symptoms (sores) appear' },
        { term: 'Asymptomatic shedding', definition: 'When the virus can spread even without visible sores' },
        { term: 'Antiviral', definition: 'Medication that fights viruses; can help control herpes' },
      ],
      analogies: [
        'The herpes virus is like a guest that never fully leaves - it stays in your body but can be kept quiet with the right approach',
        'Outbreaks are like the virus waking up - medication helps keep it asleep longer',
      ],
      patientCounselingPoints: [
        'Herpes is very common and manageable',
        'Having herpes does not mean your sex life is over',
        'You can still have healthy relationships and children',
        'Medication greatly reduces symptoms and transmission risk',
      ],
    },
    2: {
      level: 2,
      summary: 'Genital herpes (HSV-1 or HSV-2) establishes lifelong latency in sensory ganglia with periodic reactivation. Diagnosis is by PCR or culture; treatment with antivirals reduces symptoms and transmission.',
      explanation: `Genital herpes is a chronic, incurable viral infection with recurrent outbreaks. HSV-2 is the primary cause, but HSV-1 genital infections are increasing.

**Virology:**
- HSV-1: Classically oral herpes; increasingly causes genital infection (via oral sex)
- HSV-2: Primary cause of genital herpes
- Double-stranded DNA virus
- Remains latent in sacral (S2-S4) ganglia

**Epidemiology:**
- HSV-2 seroprevalence: ~12% US adults (higher in women, Black populations)
- HSV-1 seroprevalence: ~50-80% US adults
- 87% of HSV-2-infected persons unaware of infection
- Rising proportion of genital herpes caused by HSV-1

**Clinical Presentation:**

*Primary Infection*
- First episode in HSV-seronegative person
- Often most severe
- Multiple painful vesicles/ulcers
- Bilateral distribution
- Fever, malaise, tender lymphadenopathy
- Duration: 2-4 weeks untreated
- Viral shedding: ~12 days

*Non-Primary First Episode*
- First genital HSV-1 in person with prior HSV-2 (or vice versa)
- Generally milder than primary

*Recurrent Episodes*
- Reactivation from latency
- Usually unilateral, fewer lesions
- Prodrome: Tingling, burning before lesions
- Duration: 7-10 days
- HSV-2: Average 4 recurrences/year in first year
- HSV-1 genital: Fewer recurrences (average 1/year)

*Asymptomatic Shedding*
- Virus detectable without symptoms
- Responsible for most transmission
- More frequent with HSV-2
- First year after infection: Highest shedding rate

**Diagnosis:**

*Lesion Present*
- PCR (preferred): Most sensitive and specific
- Viral culture: Less sensitive, useful for typing
- Type-specific testing important for counseling

*No Lesion (Screening)*
- Type-specific serology (IgG)
- HSV-2 IgG: Indicates genital infection
- HSV-1 IgG: Cannot distinguish oral vs. genital
- Western blot: Gold standard but limited availability

**Treatment:**

*First Episode*
| Drug | Dose | Duration |
|------|------|----------|
| Acyclovir | 400 mg TID or 200 mg 5x/day | 7-10 days |
| Valacyclovir | 1 g BID | 7-10 days |
| Famciclovir | 250 mg TID | 7-10 days |

*Recurrent Episodes (Episodic)*
- Start at prodrome or within 24h of lesions
- Acyclovir 400 mg TID x 5 days or 800 mg TID x 2 days
- Valacyclovir 500 mg BID x 3 days or 1 g daily x 5 days
- Famciclovir 1 g BID x 1 day or 125 mg BID x 5 days

*Suppressive Therapy*
- ≥6 outbreaks/year, or for transmission reduction
- Acyclovir 400 mg BID
- Valacyclovir 500 mg daily (or 1 g daily if >10 outbreaks/year)
- Famciclovir 250 mg BID
- Reduces transmission by ~50%
- Reassess annually

**Prevention:**
- Condoms: ~30% risk reduction
- Suppressive therapy: ~50% reduction in transmission
- Disclosure to partners
- Avoid sex during outbreaks`,
      keyTerms: [
        { term: 'Primary infection', definition: 'First HSV infection in a person without prior antibodies to either HSV type; often most severe' },
        { term: 'Latency', definition: 'State where virus remains dormant in nerve ganglia between outbreaks' },
        { term: 'Prodrome', definition: 'Warning symptoms (tingling, burning) that occur before visible outbreak' },
        { term: 'Suppressive therapy', definition: 'Daily antiviral medication to prevent outbreaks and reduce transmission' },
        { term: 'Type-specific serology', definition: 'Blood test that can distinguish HSV-1 from HSV-2 antibodies' },
      ],
      examples: [
        'A patient with severe first-episode genital herpes (bilateral ulcers, fever, lymphadenopathy) should receive 7-10 days of antiviral treatment',
        'Daily valacyclovir can reduce HSV-2 transmission to a serodiscordant partner by approximately 50%',
      ],
    },
    3: {
      level: 3,
      summary: 'HSV establishes latency through expression of LATs in sensory neurons, with reactivation triggered by various stressors. Immune control determines clinical manifestations, and neonatal herpes represents the most serious complication.',
      explanation: `**HSV Pathogenesis:**

**Acute Infection**
- Entry through mucosal surfaces or skin breaks
- Viral replication in epithelial cells
- Cytopathic effect: Cell fusion, ballooning, multinucleation
- Cowdry type A inclusions (intranuclear eosinophilic)
- Local spread and neuron invasion

**Establishment of Latency**
- Retrograde axonal transport to sensory ganglia
- Dorsal root ganglia (sacral for genital HSV)
- Viral genome persists as episome
- Limited gene expression (LATs - latency-associated transcripts)
- Immune surveillance maintains latency

**Reactivation**
- Triggers: Stress, illness, UV light, immunosuppression, menses
- Anterograde axonal transport to skin
- Viral replication → Lesions
- May be subclinical (asymptomatic shedding)

**LATs (Latency-Associated Transcripts):**
- Only viral transcripts expressed during latency
- microRNAs from LAT region
- Functions:
  - Promote neuronal survival (anti-apoptotic)
  - Epigenetic regulation of viral genome
  - May influence reactivation frequency

**Immune Response:**

*Innate*
- Type I interferons critical for initial control
- NK cells
- Toll-like receptor recognition

*Adaptive*
- CD8+ T cells: Essential for controlling reactivation
- CD4+ T cells: Help and cytokine production
- Antibodies: Neutralization, ADCC
- Mucosal immunity important

*Why Not Eliminated*
- Latency in neurons (immune privileged)
- Immune evasion mechanisms:
  - ICP47: Blocks TAP (MHC I presentation)
  - ICP0: Disrupts interferon signaling
  - Glycoprotein C: Blocks complement

**HSV-1 vs. HSV-2 Genital Infection:**

| Feature | HSV-1 Genital | HSV-2 Genital |
|---------|---------------|---------------|
| Primary episode | Similar severity | Similar severity |
| Recurrence rate | ~1/year | ~4/year (first year) |
| Asymptomatic shedding | Less frequent | More frequent |
| Trend | Increasing (oral sex) | Decreasing (safer sex) |

**Neonatal Herpes:**

*Epidemiology*
- Incidence: ~1,500 cases/year in US
- Highest risk: Primary maternal infection near delivery
- Risk with recurrent maternal infection: <1%

*Clinical Presentations*
| Type | Timing | Features | Mortality |
|------|--------|----------|-----------|
| SEM (Skin, Eye, Mouth) | 10-12 days | Vesicles, keratoconjunctivitis | <1% with Rx |
| CNS | 16-19 days | Seizures, encephalitis | 15% with Rx |
| Disseminated | 10-12 days | Sepsis, multiorgan failure | 30% with Rx |

*Prevention*
- C-section if active lesions or prodrome at labor
- Consider in primary infection in third trimester
- Suppressive therapy from 36 weeks if history of HSV

**Complications in Immunocompromised:**
- Severe, prolonged, atypical ulcers
- Esophagitis
- Hepatitis
- Pneumonitis
- CNS disease
- May require IV acyclovir
- Resistance can develop (TK mutations)`,
      keyTerms: [
        { term: 'LATs', definition: 'Latency-associated transcripts; only viral RNA expressed during HSV latency, important for maintaining latent state' },
        { term: 'Cowdry type A inclusion', definition: 'Intranuclear eosinophilic inclusion body seen in HSV-infected cells' },
        { term: 'Neonatal herpes', definition: 'HSV infection acquired during birth; can cause severe disease including encephalitis and death' },
        { term: 'ICP47', definition: 'HSV immune evasion protein that blocks TAP transporter and MHC class I antigen presentation' },
        { term: 'SEM disease', definition: 'Neonatal HSV confined to skin, eyes, and mouth; best prognosis with treatment' },
      ],
      examples: [
        'A pregnant woman with a history of genital herpes should receive suppressive valacyclovir starting at 36 weeks to reduce risk of outbreak at delivery',
        'Primary HSV acquisition in the third trimester carries ~30-50% neonatal transmission risk even with cesarean delivery, due to lack of protective maternal antibodies',
      ],
    },
    4: {
      level: 4,
      summary: 'HSV molecular mechanisms of latency, reactivation, and immune evasion provide targets for novel therapeutics. Vaccine development faces challenges of generating sterilizing immunity. Antiviral resistance emerges mainly in immunocompromised patients.',
      explanation: `**Molecular Mechanisms:**

**Viral Entry**
- Glycoprotein D (gD) binds receptors:
  - Nectin-1 (PVRL1): Primary for neurons and epithelium
  - HVEM: Immune cells and neurons
  - 3-O-sulfated heparan sulfate
- gB, gH, gL mediate membrane fusion
- Entry triggers VP16 release → immediate-early gene activation

**Gene Expression Cascade**
- Immediate-early (α): ICP0, ICP4, ICP27 (regulate viral/host transcription)
- Early (β): DNA replication machinery (TK, DNA polymerase)
- Late (γ): Structural proteins (capsid, glycoproteins)

**Latency Mechanisms**

*Establishment*
- Repression of lytic genes
- Chromatin remodeling (histone modifications)
- Only LAT region active
- LAT-derived microRNAs (miR-H2, miR-H6) suppress ICP0, ICP4

*Maintenance*
- Neuronal survival pathways
- Host immune surveillance
- Epigenetic silencing of lytic promoters
- LATs inhibit apoptosis

*Reactivation*
- Triggers alter neuronal environment
- Stress: Glucocorticoids, norepinephrine
- De-repression of lytic genes
- ICP0 reactivation initiates cascade
- CDK/VP16 pathway important

**Immune Evasion Strategies:**

| Mechanism | Viral Factor | Target |
|-----------|--------------|--------|
| MHC I downregulation | ICP47 | TAP transporter |
| Block IFN signaling | ICP0, US3 | IRF3, STAT1 |
| Complement evasion | gC | C3b |
| Autophagy inhibition | ICP34.5 | Beclin-1 |
| Block NF-κB | ICP0, US3 | Multiple |
| Block apoptosis | Multiple | Caspases |

**Antiviral Resistance:**

*Mechanism*
- Thymidine kinase (TK) mutations: Most common
  - TK necessary to activate acyclovir
  - TK-null or TK-altered mutants resistant
- DNA polymerase mutations: Less common

*Clinical Significance*
- Rare in immunocompetent (<1%)
- More common in immunocompromised (5-30%)
- AIDS, transplant patients
- Clinical: Non-healing lesions despite treatment

*Alternative Therapies for Resistance*
- Foscarnet: Directly inhibits DNA polymerase
- Cidofovir: Does not require TK activation
- May have cross-resistance

**Vaccine Development:**

*Challenges*
- Natural infection doesn't prevent reinfection or superinfection
- Latency establishment difficult to prevent
- Neuronal latency = lifelong reservoir
- Immune evasion mechanisms

*Approaches Tested*
- Subunit vaccines (gD): Phase III trials failed
- Replication-defective viruses
- DNA vaccines
- mRNA vaccines (in development)
- Therapeutic vaccines for recurrence reduction

*Current Status*
- No approved prophylactic vaccine
- Therapeutic vaccines in trials
- Need to understand correlates of protection

**HSV-HIV Interactions:**
- HSV-2 increases HIV acquisition 2-3x
- HIV worsens HSV disease
- HSV reactivation increases HIV viral load
- HSV suppressive therapy doesn't prevent HIV transmission (HPTN 039)
- Ulceration provides entry/exit points for HIV`,
      keyTerms: [
        { term: 'VP16', definition: 'HSV tegument protein that activates immediate-early gene transcription upon infection' },
        { term: 'ICP0', definition: 'HSV immediate-early protein critical for lytic replication and reactivation from latency' },
        { term: 'Thymidine kinase', definition: 'HSV enzyme that activates acyclovir; mutations cause antiviral resistance' },
        { term: 'Foscarnet', definition: 'Antiviral that directly inhibits HSV DNA polymerase; used for acyclovir-resistant HSV' },
        { term: 'gD subunit vaccine', definition: 'HSV vaccine approach using glycoprotein D; multiple candidates failed in trials' },
      ],
      clinicalNotes: 'Acyclovir-resistant HSV should be suspected in immunocompromised patients with lesions that fail to heal after 7-10 days of appropriate therapy. Confirm resistance with viral culture and susceptibility testing. Foscarnet is first-line for acyclovir-resistant HSV but has significant toxicity (nephrotoxicity, electrolyte abnormalities).',
    },
    5: {
      level: 5,
      summary: 'Clinical management of genital herpes requires individualized counseling, appropriate diagnostic testing, treatment selection based on clinical scenario, and special consideration for pregnancy and immunocompromised hosts. Partner notification and psychosocial support are essential components.',
      explanation: `**Diagnostic Approach:**

**Testing Strategy by Presentation**

| Scenario | Recommended Test |
|----------|------------------|
| Genital ulcer/vesicle | PCR (swab of lesion) |
| Atypical lesion | PCR + type-specific serology |
| No lesion, symptomatic | Type-specific serology |
| Partner of HSV+ person | Type-specific serology |
| Routine screening | NOT recommended |

**Type-Specific Serology:**
- Detects antibodies to glycoprotein G (gG1 or gG2)
- gG2 IgG: Specific for HSV-2
- gG1 IgG: Specific for HSV-1 (but can't distinguish site)
- Window period: 2-12 weeks
- Low positive values (1.1-3.5): May be false positive
- Western blot for confirmation if needed

**Treatment Recommendations (CDC 2021):**

**First Clinical Episode**
- Acyclovir 400 mg PO TID x 7-10 days
- OR Acyclovir 200 mg PO 5x/day x 7-10 days
- OR Valacyclovir 1 g PO BID x 7-10 days
- OR Famciclovir 250 mg PO TID x 7-10 days
- Extend if healing incomplete at 10 days

**Episodic Therapy for Recurrences**
- Start within 24h of prodrome/lesion onset
- Acyclovir 400 mg PO TID x 5 days
- OR Acyclovir 800 mg PO TID x 2 days
- OR Valacyclovir 500 mg PO BID x 3 days
- OR Valacyclovir 1 g PO daily x 5 days
- OR Famciclovir 1 g PO BID x 1 day
- OR Famciclovir 500 mg PO once, then 250 mg BID x 2 days

**Suppressive Therapy**
- Acyclovir 400 mg PO BID
- OR Valacyclovir 500 mg PO daily
- OR Valacyclovir 1 g PO daily (if >10 outbreaks/year)
- OR Famciclovir 250 mg PO BID
- Reassess need annually

**Severe Disease (Hospitalized)**
- Acyclovir 5-10 mg/kg IV q8h
- Until clinical improvement
- Then oral to complete 10 days

**Pregnancy Management:**

**Counseling**
- Most transmission from asymptomatic shedding
- Greatest risk: Primary infection near delivery
- Recurrent HSV: Low transmission risk

**Prevention Strategy**
- Known HSV history: Suppressive therapy from 36 weeks
  - Acyclovir 400 mg TID or Valacyclovir 500 mg BID
  - Reduces recurrence at delivery
  - Reduces cesarean for HSV indication
- Primary infection in third trimester: Consider serial serology to guide management

**Delivery Management**
| Situation | Recommendation |
|-----------|----------------|
| No lesions/prodrome | Vaginal delivery |
| Active lesions or prodrome | Cesarean delivery |
| Primary infection near term | Cesarean strongly recommended |
| PPROM + HSV | Individualized based on gestational age |

**Neonatal Exposure Protocol:**
- Surface cultures at 24 hours (mouth, eyes, nasopharynx, rectum)
- If mother had primary HSV or symptomatic recurrence: HSV PCR of CSF and serum
- If cultures positive or symptomatic neonate: IV acyclovir 60 mg/kg/day

**Immunocompromised Hosts:**

**HIV-Positive Patients**
- Standard regimens usually effective
- May need higher doses or longer courses
- Suppressive therapy reduces HIV viral load
- HSV cofactor for HIV transmission

**Transplant and Cancer Patients**
- Severe, atypical presentations
- IV acyclovir for disseminated disease
- Watch for resistance
- Prophylaxis during high-risk periods

**Acyclovir-Resistant HSV**
- Suspect: Lesions not healing after 10 days
- Confirm: Culture with susceptibility testing
- Treatment:
  - Foscarnet 40 mg/kg IV q8h (first-line)
  - Cidofovir 5 mg/kg IV weekly
  - Topical trifluridine, cidofovir
  - Imiquimod (adjunctive)

**Counseling and Support:**

**Key Messages**
- Common infection, manageable
- Transmission prevention possible
- Disclosure important for partners
- Not "worse" than other chronic infections

**Partner Communication**
- Encourage disclosure
- Provide transmission risk information
- Suppressive therapy + condoms: ~70% reduction
- Type-specific serology for partner

**Psychological Support**
- Diagnosis often causes significant distress
- Stigma out of proportion to medical impact
- Connect with support resources
- Address depression/anxiety if present`,
      keyTerms: [
        { term: 'Glycoprotein G', definition: 'HSV protein that differs between HSV-1 (gG1) and HSV-2 (gG2); target for type-specific serology' },
        { term: 'Western blot', definition: 'Gold standard confirmatory test for HSV serology when results are equivocal' },
        { term: 'Suppressive therapy in pregnancy', definition: 'Antiviral treatment from 36 weeks to reduce recurrence risk at delivery' },
        { term: 'Serodiscordant couple', definition: 'Partners where one has HSV antibodies and the other does not' },
        { term: 'Pritelivir', definition: 'Investigational helicase-primase inhibitor for HSV; potential option for acyclovir-resistant cases' },
      ],
      clinicalNotes: 'CDC does not recommend routine HSV serologic screening due to potential for stigma without clear clinical benefit, high false-positive rates for low-positive results, and inability of HSV-1 serology to localize infection site. Screening may be considered for: persons with recurrent genital symptoms and negative swabs, partners of HSV-2-positive persons, STI clinic attendees requesting comprehensive evaluation, and persons with HIV. Always confirm low-positive HSV-2 IgG (1.1-3.5) with alternative test or Western blot.',
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
      title: 'Genital Herpes - NEJM Review',
      source: 'New England Journal of Medicine',
      authors: ['Corey, L.', 'Wald, A.'],
      url: 'https://doi.org/10.1056/NEJMcp0903411',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-hpv', targetType: 'condition', relationship: 'sibling', label: 'HPV' },
    { targetId: 'reproductive-syphilis', targetType: 'condition', relationship: 'sibling', label: 'Syphilis' },
    { targetId: 'reproductive-chlamydia-gonorrhea', targetType: 'condition', relationship: 'sibling', label: 'Chlamydia and Gonorrhea' },
  ],
  tags: {
    systems: ['reproductive', 'infectious'],
    topics: ['pathology', 'infectious disease', 'STI', 'virology'],
    keywords: ['herpes', 'HSV', 'HSV-2', 'genital ulcer', 'acyclovir', 'valacyclovir'],
    clinicalRelevance: 'high',
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
