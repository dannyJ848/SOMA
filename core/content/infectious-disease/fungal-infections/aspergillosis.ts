import { EducationalContent } from '../../types';

export const ASPERGILLOSIS: EducationalContent = {
  id: 'infectious-disease-aspergillosis',
  type: 'condition',
  name: 'Aspergillosis',
  nameEs: 'Aspergilosis',
  alternateNames: ['Aspergillus Infection', 'Invasive Aspergillosis', 'Allergic Bronchopulmonary Aspergillosis', 'ABPA'],
  levels: {
    1: {
      level: 1,
      summary: 'Aspergillosis is an infection caused by a common mold called Aspergillus that is found in the environment; it usually only makes people sick if their immune system is very weak.',
      explanation: `Aspergillus is a type of mold found everywhere - in soil, on decaying plants, in buildings, and even floating in the air. We all breathe in tiny Aspergillus spores every day, but our healthy immune systems destroy them easily.

**When Aspergillus Causes Problems:**
- People with very weak immune systems (like after a bone marrow transplant or chemotherapy) can develop serious lung infections
- People with asthma or cystic fibrosis may develop an allergic reaction to the mold
- People with damaged lungs (like from tuberculosis) may develop a "fungus ball" in an old cavity

**Symptoms:**
- Cough, sometimes with blood
- Fever that does not respond to antibiotics
- Chest pain or shortness of breath
- In severe cases, the infection can spread to the brain or other organs

**Treatment:**
Antifungal medicines are used to treat Aspergillus infections. The most important medicine is called voriconazole.

**Prevention:**
- People with weak immune systems should avoid dusty areas, construction sites, and compost piles
- Hospitals use special air filters (HEPA) in rooms for high-risk patients`,
      keyTerms: [
        { term: 'Aspergillus', definition: 'A common mold found in the environment that can cause infection in people with weak immune systems' },
        { term: 'Mold', definition: 'A type of fungus that grows in thread-like structures and reproduces by releasing tiny spores into the air' },
        { term: 'Spores', definition: 'Tiny reproductive structures released by molds that float in the air and can be breathed in' },
        { term: 'HEPA filter', definition: 'A special air filter that removes 99.97% of tiny particles including mold spores' },
      ],
      analogies: [
        'Aspergillus spores are like dust in the air - everyone breathes them in, but they only cause problems when your body\'s defenses are down.',
        'A fungus ball growing in a lung cavity is like a bird building a nest in a hollow tree trunk.',
      ],
      examples: [
        'A patient receiving chemotherapy develops a fever and cough that does not improve with antibiotics - testing reveals Aspergillus in the lungs.',
        'A person with asthma develops worsening wheezing and cough due to an allergic reaction to Aspergillus mold.',
      ],
      patientCounselingPoints: [
        'If you have a weak immune system, avoid areas with heavy dust, mold, or construction.',
        'Report any fever or new cough to your doctor immediately if you are immunocompromised.',
        'Take antifungal medications exactly as prescribed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Aspergillus species, primarily A. fumigatus, cause a spectrum of disease from allergic (ABPA) to chronic (aspergilloma) to invasive pulmonary aspergillosis (IPA), with invasive disease occurring primarily in immunocompromised hosts and treated with voriconazole.',
      explanation: `Aspergillus is a genus of ubiquitous saprophytic molds. A. fumigatus causes ~90% of invasive disease due to its small conidial size (2-3 micrometers), thermotolerance, and virulence factors.

**Clinical Spectrum:**

| Disease | Host | Key Features |
|---------|------|-------------|
| ABPA (Allergic Bronchopulmonary Aspergillosis) | Asthma, cystic fibrosis | Hypersensitivity response; eosinophilia, elevated IgE, mucoid impaction; treat with corticosteroids +/- itraconazole |
| Chronic Pulmonary Aspergillosis | Pre-existing lung cavities (TB, COPD, sarcoidosis) | Aspergilloma (fungus ball); chronic cavitary PA; treated with itraconazole or voriconazole long-term |
| Invasive Pulmonary Aspergillosis (IPA) | Severe immunosuppression | Angioinvasive; halo sign on CT (ground-glass around nodule); high mortality (30-50%) |
| Tracheobronchial Aspergillosis | Lung transplant, AIDS | Airway-invasive form; pseudomembranous or ulcerative |
| Disseminated | Profound immunosuppression | Spread to brain (stroke-like), skin, liver, kidneys |

**Risk Factors for Invasive Aspergillosis:**
- Prolonged neutropenia (>10 days, ANC <500)
- Allogeneic hematopoietic stem cell transplant
- Solid organ transplant (especially lung)
- High-dose corticosteroids (>0.3 mg/kg prednisone equivalent for >3 weeks)
- Graft-versus-host disease treatment
- Advanced HIV/AIDS

**Diagnosis:**
- CT chest: Halo sign (early IPA), air-crescent sign (late; recovering neutrophils)
- Galactomannan antigen: Aspergillus cell wall component; serum and BAL testing
- Beta-D-glucan: Pan-fungal marker; elevated in aspergillosis
- Culture: Septate hyphae branching at 45-degree angles (V-shaped)
- Biopsy: Definitive but often not feasible in thrombocytopenic patients

**Treatment:**
- IPA first-line: Voriconazole (oral or IV)
- Alternatives: Isavuconazole (fewer drug interactions), liposomal amphotericin B
- Salvage: Posaconazole, combination therapy
- ABPA: Systemic corticosteroids with or without itraconazole
- Aspergilloma: Observation if asymptomatic; surgical resection for hemoptysis`,
      keyTerms: [
        { term: 'Invasive pulmonary aspergillosis', definition: 'A life-threatening fungal lung infection occurring in immunocompromised patients, caused by Aspergillus invading lung tissue and blood vessels' },
        { term: 'Galactomannan', definition: 'An Aspergillus cell wall polysaccharide released during growth; used as a serum or BAL biomarker for invasive aspergillosis' },
        { term: 'Halo sign', definition: 'A CT finding of ground-glass opacity surrounding a pulmonary nodule, characteristic of early invasive aspergillosis with surrounding hemorrhage' },
        { term: 'ABPA', definition: 'Allergic Bronchopulmonary Aspergillosis - a hypersensitivity response to Aspergillus colonization in patients with asthma or cystic fibrosis' },
        { term: 'Aspergilloma', definition: 'A mass of fungal hyphae (fungus ball) growing within a pre-existing lung cavity' },
      ],
      examples: [
        'A neutropenic patient with AML develops fever and a CT showing a nodule with halo sign; galactomannan is positive; voriconazole is started.',
        'A patient with a history of TB and a lung cavity is found to have an aspergilloma on routine chest X-ray.',
      ],
      patientCounselingPoints: [
        'Voriconazole can cause visual disturbances (blurred vision, color changes) especially in the first few days.',
        'Avoid direct sunlight while taking voriconazole due to increased skin sensitivity.',
        'Report any breakthrough fever while on antifungal prophylaxis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Aspergillus pathogenesis involves conidial germination, hyphal angioinvasion, and galactomannan/gliotoxin secretion; host defense relies on alveolar macrophages and neutrophils with NADPH oxidase-dependent killing; voriconazole acts via CYP51A inhibition of ergosterol synthesis with therapeutic drug monitoring essential.',
      explanation: `Understanding Aspergillus pathobiology and antifungal pharmacology is essential for managing the full spectrum of aspergillosis.

**Pathogenesis:**
- Inhaled conidia (2-3 um) reach terminal bronchioles and alveoli
- Alveolar macrophages: First-line defense; kill conidia via NADPH oxidase (reactive oxygen species)
- If conidia germinate: Neutrophils are recruited and kill hyphae via degranulation, NET formation, and oxidative burst
- Angioinvasion: Hyphae penetrate blood vessel walls causing thrombosis, hemorrhagic infarction (halo sign)
- Virulence factors: Melanin (protects against ROS), gliotoxin (immunosuppressive, induces apoptosis of immune cells), complement evasion

**Immune Defects and Risk:**
- Neutropenia: Loss of critical anti-hyphal defense
- CGD (Chronic Granulomatous Disease): NADPH oxidase deficiency; cannot generate ROS for killing
- Corticosteroids: Impair macrophage and neutrophil function
- T-cell immunosuppression (post-transplant): Impaired Th1/Th17 responses; reduced IFN-gamma

**Advanced Diagnostics:**
- Galactomannan (GM): ELISA; ODI >=0.5 (serum) or >=1.0 (BAL) considered positive; serial monitoring twice weekly in high-risk patients; sensitivity higher with BAL GM (75-90%) vs. serum (50-70% off antifungal prophylaxis)
- Aspergillus lateral flow assay (LFA): Point-of-care detection of Aspergillus galactomannosidase; rapid (<30 min)
- PCR: Aspergillus-specific PCR from blood or BAL; standardized assays emerging; often combined with GM for improved sensitivity
- Combined biomarker strategy: GM + PCR increases sensitivity to >90%

**Antifungal Therapy - Detailed:**

*Voriconazole:*
- Mechanism: Inhibits lanosterol 14-alpha-demethylase (CYP51A); depletes ergosterol from fungal membrane
- TDM essential: Target trough 1-5.5 mcg/mL; CYP2C19 polymorphisms affect metabolism
  - Poor metabolizers: Supratherapeutic levels, hepatotoxicity
  - Ultra-rapid metabolizers: Subtherapeutic levels, treatment failure
- Adverse effects: Visual disturbances (30%), hepatotoxicity, photosensitivity, periostitis, skin cancer (long-term)
- Drug interactions: Extensive CYP450 interactions (2C19, 2C9, 3A4)

*Isavuconazole:*
- Prodrug (isavuconazonium sulfate); broad-spectrum triazole
- Non-inferior to voriconazole for IPA (SECURE trial)
- Advantages: Fewer visual effects, fewer drug interactions, no TDM routinely needed, IV without cyclodextrin vehicle

*Posaconazole:*
- Extended-spectrum azole; prophylaxis in AML/MDS and GVHD (POET trials)
- Delayed-release tablets and IV have improved bioavailability vs. suspension

*Liposomal Amphotericin B:*
- Alternative first-line or salvage
- Dose: 3-5 mg/kg/day; lipid formulation reduces nephrotoxicity
- Mechanism: Ergosterol binding causing pore formation and membrane disruption

**Prophylaxis Strategies:**
- Posaconazole: Standard prophylaxis for AML induction and allo-HSCT with GVHD
- Voriconazole: Alternative prophylaxis
- Micafungin: Prophylaxis in neutropenic HSCT (not active against Aspergillus molds in established infection)
- Environmental controls: HEPA filtration, positive pressure rooms, construction barriers`,
      keyTerms: [
        { term: 'Gliotoxin', definition: 'An immunosuppressive mycotoxin produced by Aspergillus that induces apoptosis of neutrophils and macrophages and inhibits NF-kB signaling' },
        { term: 'NADPH oxidase', definition: 'The enzyme complex in phagocytes that generates reactive oxygen species for microbial killing; deficient in chronic granulomatous disease' },
        { term: 'CYP51A', definition: 'Lanosterol 14-alpha-demethylase; the fungal target of azole antifungals; mutations confer azole resistance in Aspergillus' },
        { term: 'Therapeutic drug monitoring (TDM)', definition: 'Measurement of drug levels in blood to ensure adequate but non-toxic concentrations; essential for voriconazole' },
        { term: 'Galactomannan optical density index', definition: 'The quantitative measure of galactomannan antigen in serum or BAL; values >=0.5 (serum) suggest invasive aspergillosis' },
      ],
      clinicalNotes: 'Voriconazole remains first-line for IPA with isavuconazole as an alternative with fewer drug interactions. TDM for voriconazole is mandatory. Galactomannan-guided preemptive therapy (starting treatment based on biomarker positivity before clinical or radiographic changes) reduces antifungal overuse. CYP2C19 genotyping can guide initial voriconazole dosing. Environmental azole resistance in A. fumigatus linked to agricultural fungicide use is an emerging global concern.',
    },
    4: {
      level: 4,
      summary: 'Advanced aspergillosis management encompasses environmental azole resistance (TR34/L98H and TR46/Y121F/T289A mutations linked to agricultural triazole use), combination antifungal strategies, immunoadjunctive therapy with IFN-gamma and G-CSF, and the emerging role of Aspergillus-specific T-cell immune monitoring.',
      explanation: `Graduate-level understanding integrates resistance mechanisms, immunotherapy, and translational advances.

**Environmental Azole Resistance in A. fumigatus:**

*Mechanisms:*
- CYP51A mutations: Most common mechanism
  - TR34/L98H: Tandem repeat in promoter + point mutation; most prevalent environmental resistance mechanism
  - TR46/Y121F/T289A: Higher-level azole resistance; may confer pan-azole resistance
  - Environmental origin: Cross-resistance between medical triazoles and agricultural fungicides (propiconazole, tebuconazole, difenoconazole)
- Prevalence: 1-30% depending on geography (highest in Netherlands, UK, India, China)
- Clinical impact: Azole-resistant IPA has ~50% higher mortality than azole-susceptible IPA
- Screening: Susceptibility testing recommended for all clinically significant Aspergillus isolates; agar-based screening with itraconazole (4 mg/L)

*Treatment of Azole-Resistant IPA:*
- Liposomal amphotericin B as empiric therapy in regions with >10% resistance
- Voriconazole + echinocandin combination if resistance suspected
- Susceptibility-guided modification once available
- Combination therapy (voriconazole + anidulafungin) studied in COMBAT trial: No overall benefit but trend toward benefit in GM-positive subgroup

**Immunoadjunctive Therapy:**

*Recombinant Cytokines:*
- IFN-gamma: Enhances macrophage and neutrophil antifungal activity; used adjunctively in CGD and refractory aspergillosis; evidence from case series and small trials
- G-CSF/GM-CSF: Accelerate neutrophil recovery and enhance function; routinely used in febrile neutropenia; GM-CSF specifically enhances antifungal killing

*Granulocyte Transfusions:*
- Irradiated donor granulocytes for prolonged neutropenia with invasive mold infection
- Evidence: Mixed results in clinical trials; logistical challenges
- G-CSF-stimulated donors provide higher granulocyte yields

*Aspergillus-Specific T-cell Monitoring:*
- Aspergillus-specific CD4+ T cells can be quantified using intracellular cytokine staining (IFN-gamma, IL-17, IL-10)
- Post-transplant immune reconstitution: Detectable Aspergillus-specific Th1 cells correlate with protection
- Potential for guiding antifungal prophylaxis duration and discontinuation
- Adoptive T-cell therapy: Aspergillus-specific T cells manufactured from donors; preclinical and early clinical trials

**Aspergillus in Specific Populations:**

*COVID-19-Associated Pulmonary Aspergillosis (CAPA):*
- Incidence: 5-35% in ICU COVID-19 patients (varies by definition and diagnostic intensity)
- Risk factors: Corticosteroid use (dexamethasone), mechanical ventilation, tocilizumab
- Diagnosis challenging: Modified diagnostic criteria (ECMM/ISHAM consensus)
- BAL GM preferred over serum GM (higher sensitivity in CAPA)
- Treatment: Voriconazole or isavuconazole

*Influenza-Associated Pulmonary Aspergillosis (IAPA):*
- Similar to CAPA; recognized before COVID-19
- Occurs in both immunocompromised and previously healthy patients
- May occur despite antifungal prophylaxis
- Mortality ~50%

*Chronic Pulmonary Aspergillosis (CPA):*
- Global burden: ~3 million cases (often post-TB in low-resource settings)
- Subtypes: Simple aspergilloma, chronic cavitary PA, chronic fibrosing PA, subacute IPA
- Treatment: Long-term oral azoles (itraconazole, voriconazole, posaconazole); 6+ months minimum
- Therapeutic drug monitoring essential for long-term azole therapy
- Surgical resection for refractory disease or life-threatening hemoptysis`,
      keyTerms: [
        { term: 'TR34/L98H', definition: 'The most common environmental azole resistance mechanism in A. fumigatus, involving a tandem repeat insertion in the CYP51A promoter and a leucine-to-histidine substitution' },
        { term: 'CAPA', definition: 'COVID-19-Associated Pulmonary Aspergillosis; an increasingly recognized complication in critically ill COVID-19 patients, particularly those receiving corticosteroids' },
        { term: 'Aspergillus-specific T cells', definition: 'CD4+ T lymphocytes with antigen-specific reactivity to Aspergillus that can be monitored as a biomarker of immune reconstitution and protection' },
        { term: 'Chronic pulmonary aspergillosis', definition: 'A slowly progressive form of aspergillosis in patients with pre-existing lung disease, affecting an estimated 3 million people globally' },
        { term: 'Granulocyte transfusion', definition: 'Infusion of donor-derived neutrophils as adjunctive therapy for invasive mold infections in patients with prolonged neutropenia' },
      ],
      clinicalNotes: 'Environmental azole resistance is transforming the management of invasive aspergillosis. In areas with significant resistance, empiric liposomal amphotericin B or combination therapy should be considered. All clinically significant Aspergillus isolates should undergo susceptibility testing. CAPA should be considered in deteriorating ICU COVID-19 patients with BAL GM testing. Immunoadjunctive strategies (IFN-gamma, G-CSF) should be considered for refractory disease, particularly in CGD patients.',
    },
    5: {
      level: 5,
      summary: 'Expert aspergillosis knowledge encompasses next-generation diagnostics (Aspergillus PCR standardization, breath analysis), novel antifungal targets (Gwt1, dihydroorotate dehydrogenase), antifungal resistance surveillance networks, and the intersection of agricultural fungicide policy with clinical resistance outcomes.',
      explanation: `Expert-level management integrates cutting-edge research, global policy, and precision medicine approaches.

**Next-Generation Diagnostics:**
- Standardized Aspergillus PCR: EAPCRI consensus protocols; when combined with GM, sensitivity >95% for IPA
- Point-of-care: Aspergillus-specific lateral flow device (OLM Diagnostics); BAL and serum; results in 30 minutes
- Breath analysis: Volatile organic compounds (VOCs) produced by Aspergillus (2-pentylfuran, sesquiterpenes) detectable in exhaled breath; experimental
- cfDNA: Cell-free Aspergillus DNA detection in plasma; emerging research
- Digital pathology: AI-assisted identification of fungal elements in tissue sections

**Novel Antifungal Targets:**

*Olorofim (F2G):*
- First-in-class orotomide; inhibits dihydroorotate dehydrogenase (DHODH) in pyrimidine biosynthesis
- Active against azole-resistant A. fumigatus (completely novel target)
- Oral bioavailability; no cross-resistance with azoles, echinocandins, or amphotericin B
- Limitations: No activity against Mucorales or Candida
- FDA breakthrough therapy designation for invasive mold infections with limited treatment options

*Fosmanogepix:*
- Gwt1 inhibitor (described under Candida); also active against Aspergillus and rare molds
- Novel mechanism complementary to existing antifungal classes

*Rezafungin:*
- While echinocandins are not standard for Aspergillus treatment, rezafungin is being explored for mold-active prophylaxis

**Resistance Surveillance:**
- ISHAM/ECMM Aspergillus Resistance Surveillance Network
- Global reporting of CYP51A mutations and MIC data
- Environmental surveillance: Soil sampling, compost facility monitoring
- One Health approach: Link between agricultural azole use and clinical resistance

**Agricultural-Clinical Resistance Interface:**
- Agricultural triazole fungicides share molecular targets with medical azoles
- Environmental selection pressure: Resistant A. fumigatus in soil exposed to agricultural azoles
- Countries banning/restricting agricultural azoles have not shown reduced clinical resistance yet (long environmental persistence)
- Policy debate: Restricting agricultural azoles vs. economic impact on crop protection
- Alternative agricultural strategies: Non-azole fungicides, resistant crop varieties, biological control

**Precision Medicine in Aspergillosis:**
- CYP2C19 pharmacogenomics: Guide initial voriconazole dosing
  - Poor metabolizers (*2/*2, *2/*3): Start lower dose
  - Ultra-rapid metabolizers (*17/*17): Consider alternative agent or higher dose with close TDM
- Host genomic risk: DECTIN-1 Y238X, TLR4, CXCL10 polymorphisms associated with increased susceptibility
- Therapeutic drug monitoring with Bayesian forecasting: Model-informed precision dosing
- Galactomannan kinetics: Rising GM despite treatment correlates with poor outcome; can guide therapy changes

**Future Directions:**
- Pan-fungal vaccines: Targeting conserved cell wall components (laminarin-CRM197 conjugate)
- Antifungal lock therapy: For Aspergillus catheter-related infections
- Nebulized antifungals: Liposomal amphotericin B inhalation for prophylaxis and treatment of pulmonary aspergillosis
- Combination antifungal strategies: Triple therapy under investigation for pan-resistant molds`,
      keyTerms: [
        { term: 'Olorofim', definition: 'A first-in-class orotomide antifungal that inhibits dihydroorotate dehydrogenase, active against azole-resistant Aspergillus with a completely novel mechanism of action' },
        { term: 'EAPCRI', definition: 'European Aspergillus PCR Initiative; consortium that standardized Aspergillus PCR methodology for clinical diagnosis' },
        { term: 'Volatile organic compounds', definition: 'Metabolic byproducts produced by Aspergillus that can be detected in exhaled breath as a non-invasive diagnostic approach' },
        { term: 'Bayesian forecasting', definition: 'A model-informed precision dosing approach that integrates pharmacokinetic models with individual patient drug levels to optimize antifungal dosing' },
        { term: 'One Health fungal resistance', definition: 'The recognition that antifungal resistance in clinical isolates is connected to environmental selection pressure from agricultural fungicide use' },
      ],
      clinicalNotes: 'The expert infectious disease specialist must advocate for routine Aspergillus susceptibility testing, environmental resistance surveillance, and policy engagement on agricultural azole use. Novel agents like olorofim will be critical for azole-resistant aspergillosis. CYP2C19 pharmacogenomics should be incorporated into voriconazole prescribing. Combined diagnostic strategies (GM + PCR) provide optimal sensitivity for early IPA detection. The expanding spectrum of aspergillosis beyond classic neutropenic hosts (CAPA, IAPA) requires heightened clinical awareness.',
    },
  },
  media: [],
  citations: [
    { id: 'patterson-idsa-aspergillosis-2016', type: 'article', title: 'Practice Guidelines for the Diagnosis and Management of Aspergillosis: 2016 Update by IDSA', authors: ['Patterson TF', 'Thompson GR', 'Denning DW'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
    { id: 'denning-lancet-id-2019', type: 'article', title: 'Global burden of chronic pulmonary aspergillosis', authors: ['Denning DW', 'Cadranel J', 'Beigelman-Aubry C'], source: 'European Respiratory Journal', license: 'Copyrighted' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-candidiasis', targetType: 'condition', relationship: 'sibling', label: 'Candidiasis' },
    { targetId: 'infectious-disease-cryptococcosis', targetType: 'condition', relationship: 'sibling', label: 'Cryptococcosis' },
    { targetId: 'infectious-disease-antimicrobial-resistance-comprehensive', targetType: 'topic', relationship: 'related', label: 'Antimicrobial Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'mycology', 'pulmonology'],
    topics: ['fungal-infections', 'aspergillosis', 'antifungals', 'immunocompromised-host'],
    keywords: ['Aspergillus', 'IPA', 'ABPA', 'aspergilloma', 'voriconazole', 'galactomannan', 'azole resistance', 'TR34/L98H', 'CAPA'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
