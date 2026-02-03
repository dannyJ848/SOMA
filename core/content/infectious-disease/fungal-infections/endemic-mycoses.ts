import { EducationalContent } from '../../types';

export const ENDEMIC_MYCOSES: EducationalContent = {
  id: 'infectious-disease-endemic-mycoses',
  type: 'topic',
  name: 'Endemic Mycoses',
  nameEs: 'Micosis Endemicas',
  alternateNames: ['Dimorphic Fungi', 'Histoplasmosis', 'Blastomycosis', 'Coccidioidomycosis', 'Valley Fever', 'Paracoccidioidomycosis'],
  levels: {
    1: {
      level: 1,
      summary: 'Endemic mycoses are fungal infections caused by molds that live in soil in specific regions of the world; most people who breathe in the spores get better on their own, but some develop serious illness.',
      explanation: `Certain fungi live in the soil in specific parts of the world. When soil is disturbed (by wind, construction, or farming), tiny spores are released into the air and can be breathed in. Most healthy people fight off these fungi with no symptoms or just mild flu-like illness. But some people develop serious infections in their lungs or other organs.

**The Main Endemic Fungi:**

- **Histoplasmosis** ("Cave Disease"): Found in the Ohio and Mississippi River Valleys in the US. Associated with bat and bird droppings. You can get it from exploring caves or cleaning old buildings.

- **Coccidioidomycosis** ("Valley Fever"): Found in the desert Southwest US (Arizona, California), Mexico, and Central/South America. Spores are in the dry soil and become airborne during dust storms.

- **Blastomycosis**: Found near the Great Lakes and Ohio/Mississippi River Valleys. Associated with moist soil near waterways.

**Symptoms:**
- Many people have no symptoms or mild flu-like illness
- Cough, fever, fatigue, body aches
- Serious cases: Pneumonia, skin lesions, bone or brain infection
- People with weak immune systems are at highest risk for severe disease

**Treatment:**
- Mild cases: May resolve without treatment
- Moderate to severe: Antifungal medications (itraconazole for mild-moderate; amphotericin B for severe)
- Some patients need months of treatment`,
      keyTerms: [
        { term: 'Endemic', definition: 'Found naturally in a specific geographic region' },
        { term: 'Dimorphic', definition: 'Able to exist in two forms - as a mold in the environment and as yeast inside the human body' },
        { term: 'Histoplasmosis', definition: 'A fungal infection from the Ohio/Mississippi River Valleys associated with bat and bird droppings' },
        { term: 'Valley Fever', definition: 'Another name for coccidioidomycosis, a fungal infection common in the desert Southwest' },
      ],
      analogies: [
        'These fungi are like shape-shifters - they live as mold in the cold soil but transform into yeast when they enter your warm body.',
        'Getting histoplasmosis from a cave is like picking up a hitchhiker - the spores catch a ride in your lungs.',
      ],
      examples: [
        'A college student from Ohio goes spelunking (cave exploring) and develops fever and cough two weeks later from histoplasmosis.',
        'A construction worker in Arizona develops Valley Fever after a dust storm disturbs contaminated soil.',
      ],
      patientCounselingPoints: [
        'If you live in or travel to areas where these fungi are common, be aware of the risk.',
        'Wear masks during dusty outdoor activities in endemic areas.',
        'Most people recover on their own, but see a doctor if symptoms persist beyond two weeks.',
      ],
    },
    2: {
      level: 2,
      summary: 'The endemic dimorphic fungi (Histoplasma, Coccidioides, Blastomyces, Talaromyces, Paracoccidioides) exhibit thermal dimorphism, are geographically restricted, and cause a clinical spectrum from asymptomatic infection to severe disseminated disease, particularly in immunocompromised hosts.',
      explanation: `The endemic mycoses are caused by dimorphic fungi that exist as molds at environmental temperatures (25C) and convert to yeast (or spherules for Coccidioides) at body temperature (37C). This thermal dimorphism is essential for pathogenesis.

**The Major Endemic Fungi:**

| Organism | Geographic Distribution | Environmental Niche | Body Form | Key Clinical Feature |
|----------|----------------------|--------------------|-----------|--------------------|
| Histoplasma capsulatum | Ohio/Mississippi Valleys, Central America, Africa | Bat/bird guano, caves | Small intracellular yeast (2-4 um) | Mediastinal lymphadenopathy, hepatosplenomegaly |
| Coccidioides immitis/posadasii | SW US, Mexico, Central/South America | Desert soil (Lower Sonoran life zone) | Spherules with endospores | Erythema nodosum, thin-walled cavities |
| Blastomyces dermatitidis | Great Lakes, Ohio/Mississippi Valleys, Southeast | Moist soil near waterways | Large broad-based budding yeast (8-15 um) | Skin lesions (verrucous), bone |
| Talaromyces (Penicillium) marneffei | Southeast Asia (Thailand, Vietnam, S. China) | Bamboo rat habitats | Yeast with central septum (fission) | Disseminated in HIV; molluscum-like skin lesions |
| Paracoccidioides brasiliensis | Latin America (Brazil, Colombia, Venezuela) | Soil | Large yeast with multiple buds ("pilot's wheel") | Chronic pulmonary, mucocutaneous; men >> women |

**Clinical Spectrum:**

*Histoplasmosis:*
- Acute pulmonary: Flu-like; self-limited in immunocompetent
- Chronic cavitary: Resembles TB; upper lobe cavities in COPD patients
- Disseminated: HIV with CD4 <150; hepatosplenomegaly, pancytopenia, adrenal involvement
- Mediastinal: Granulomatous lymphadenopathy, fibrosing mediastinitis

*Coccidioidomycosis:*
- 60% asymptomatic; "Valley Fever" syndrome in 40%
- Community-acquired pneumonia in endemic areas
- Erythema nodosum or erythema multiforme (good prognostic sign)
- Disseminated: Skin, bone, meningitis (basilar); risk factors: Filipino, African American, immunosuppressed, pregnancy
- Coccidioidal meningitis: Chronic; requires lifelong fluconazole

*Blastomycosis:*
- Pulmonary: Consolidation, mass-like lesion (mimics malignancy)
- Skin: Verrucous (wart-like) or ulcerative lesions
- Bone: Osteolytic lesions
- GU: Prostate, epididymis

**Diagnosis:**
- Culture: Gold standard (biosafety level 3 for mold form)
- Histopathology: Characteristic morphology on tissue sections
- Antigen detection: Histoplasma and Blastomyces urine/serum antigen (cross-react); Coccidioides antigen emerging
- Serology: Complement fixation and immunodiffusion (Coccidioides, Histoplasma)
- Coccidioides serology: IgM (early), IgG/complement fixation (correlates with disease burden)

**Treatment:**

| Severity | Treatment | Duration |
|----------|-----------|----------|
| Mild-moderate pulmonary | Itraconazole 200 mg BID | 6-12 months |
| Severe/disseminated | Liposomal amphotericin B then step-down to itraconazole | 12+ months |
| Coccidioidal meningitis | Fluconazole 400-1200 mg/day | Lifelong |`,
      keyTerms: [
        { term: 'Thermal dimorphism', definition: 'The ability to grow as mold at environmental temperature and convert to yeast (or spherule) at body temperature' },
        { term: 'Spherule', definition: 'The tissue form of Coccidioides; a large structure (20-60 um) containing endospores that ruptures to release new organisms' },
        { term: 'Broad-based budding', definition: 'The characteristic morphology of Blastomyces yeast with a wide attachment point between parent and daughter cells' },
        { term: 'Erythema nodosum', definition: 'Tender red nodules on the shins; an immune-mediated reaction that can occur with coccidioidomycosis and indicates a good prognostic sign' },
        { term: 'Urine antigen', definition: 'A rapid test detecting fungal polysaccharide in urine; useful for diagnosing histoplasmosis and blastomycosis' },
      ],
      examples: [
        'A patient from Arizona presents with community-acquired pneumonia and erythema nodosum; serology confirms coccidioidomycosis.',
        'An HIV patient from Thailand with CD4 of 30 presents with fever, skin papules, and pancytopenia from disseminated Talaromyces marneffei.',
      ],
      patientCounselingPoints: [
        'These infections can be serious but are treatable with antifungal medications.',
        'Treatment duration is often 6-12 months; adherence is critical to prevent relapse.',
        'Itraconazole should be taken with food and an acidic beverage for best absorption.',
      ],
    },
    3: {
      level: 3,
      summary: 'Endemic mycoses pathogenesis involves phase-specific virulence factors, with yeast-phase BAD1 (Blastomyces), alpha-(1,3)-glucan (Histoplasma), and SOWgp (Coccidioides); host defense requires Th1-mediated granulomatous inflammation; diagnosis combines antigen testing, serology, and molecular methods.',
      explanation: `Detailed molecular pathogenesis and diagnostic/therapeutic nuances are essential for managing endemic mycoses.

**Molecular Pathogenesis:**

*Histoplasma capsulatum:*
- Alpha-(1,3)-glucan: Yeast cell wall component that blocks beta-glucan recognition by Dectin-1
- CBP1 (Calcium-Binding Protein 1): Secreted virulence factor; essential for intracellular survival in macrophages
- Yps3: Surface protein facilitating macrophage adhesion
- Intracellular pathogen: Survives within macrophage phagolysosomes by modulating pH, acquiring iron via siderophores
- Granuloma formation: CD4+ T cells produce IFN-gamma activating macrophages; TNF-alpha critical (anti-TNF therapy risk)
- Calcified granulomas and splenic calcifications: Hallmarks of prior infection

*Coccidioides immitis/posadasii:*
- SOWgp (Spherule Outer Wall glycoprotein): Adhesion to host cells; immunodominant antigen
- Metalloproteinase (Mep1): Degrades SOWgp during endosporulation to evade immune recognition
- Urease: Damages host tissue; facilitates tissue invasion
- Spherule-endospore cycle: Unique among dimorphic fungi; arthroconidia (barrel-shaped, infectious) -> spherules -> endospore release -> new spherules
- CSF complement fixation titer correlates with disease burden and treatment response

*Blastomyces dermatitidis:*
- BAD1 (Blastomyces Adhesin 1): Surface protein binding host CR3 and heparin sulfate; suppresses TNF-alpha production; essential virulence factor
- Alpha-(1,3)-glucan: Masks beta-glucan from immune recognition (similar to Histoplasma)
- Broad-based budding yeast: 8-15 um; refractile cell wall; multinucleated

**Advanced Diagnostics:**

*Antigen Testing:*
- Histoplasma and Blastomyces antigens: MVista (MiraVista Diagnostics) urine and serum EIA
  - Histoplasma urine antigen: Sensitivity 90-95% in disseminated; 60-80% in pulmonary
  - Cross-reactivity between Histoplasma, Blastomyces, Talaromyces, and Paracoccidioides
- Coccidioides antigen: Newer assays; sensitivity lower (~70%); improving
- Galactomannan and beta-D-glucan: Generally not useful for endemic mycoses (variable cross-reactivity)

*Molecular Methods:*
- Species-specific PCR from tissue and respiratory specimens
- Broad-range fungal PCR (ITS sequencing) for unusual presentations
- MALDI-TOF from culture: Rapid definitive identification
- AccuProbe: DNA probe for culture confirmation (Histoplasma, Blastomyces, Coccidioides)

*Serology:*
- Coccidioides: Most clinically useful; IgM (tube precipitin), IgG (complement fixation)
  - CF titer >=1:16 suggests disseminated disease; rising titer = worsening; declining = response
  - CSF CF positive = coccidioidal meningitis (very specific)
- Histoplasma: CF and immunodiffusion (H and M bands); H band = active infection
- Blastomyces: Serology insensitive (avoid); antigen testing preferred

**Treatment Nuances:**

*Itraconazole Considerations:*
- Capsule requires gastric acid (avoid PPIs); solution absorbed better (take empty stomach)
- TDM: Target random level >1 mcg/mL; check after 2 weeks of therapy
- Drug interactions: Potent CYP3A4 inhibitor
- Prolonged QTc risk; hepatotoxicity monitoring

*Fluconazole for Coccidioidal Meningitis:*
- Standard dose 400 mg/day; some experts use 800-1200 mg/day
- Lifelong therapy: Relapse rate >75% if discontinued
- Intrathecal amphotericin B: For refractory meningitis (requires reservoir placement)
- Voriconazole/posaconazole: Alternatives for refractory coccidioidal meningitis

*Special Populations:*
- Pregnancy: Amphotericin B relatively safe; azoles teratogenic (particularly fluconazole in first trimester)
- HIV: Start ART 2 weeks after initiating antifungal therapy (reduce IRIS risk)
- TNF-alpha inhibitor recipients: Screen for coccidioidomycosis in endemic areas; histoplasmosis reactivation risk`,
      keyTerms: [
        { term: 'BAD1', definition: 'Blastomyces Adhesin 1; a critical surface virulence factor mediating host cell adhesion and suppression of TNF-alpha production' },
        { term: 'Arthroconidia', definition: 'The infectious barrel-shaped spores of Coccidioides formed by fragmentation of mold hyphae; highly infectious (10 spores can cause infection)' },
        { term: 'Complement fixation titer', definition: 'A serologic test for Coccidioides where higher titers correlate with more severe or disseminated disease' },
        { term: 'CBP1', definition: 'Calcium-Binding Protein 1 secreted by Histoplasma; essential for intracellular survival within macrophages' },
        { term: 'Fibrosing mediastinitis', definition: 'A rare, severe complication of histoplasmosis causing fibrotic encasement of mediastinal structures due to an excessive host immune response to granulomatous disease' },
      ],
      clinicalNotes: 'Travel and exposure history is critical for diagnosing endemic mycoses. Histoplasma urine antigen is the most sensitive non-invasive test for disseminated histoplasmosis. Coccidioides serology is the cornerstone of diagnosis and monitoring. Itraconazole TDM is essential due to variable absorption. Coccidioidal meningitis requires lifelong fluconazole. TNF-alpha inhibitor recipients in endemic areas require awareness and often prophylaxis or monitoring.',
    },
    4: {
      level: 4,
      summary: 'Advanced endemic mycoses management integrates understanding of genetic susceptibility (STAT3, Dectin-1, IFNGR), emerging antifungal resistance, climate change-driven range expansion, and the design of pragmatic trials for global health impact.',
      explanation: `Graduate-level understanding encompasses host genetics, epidemiologic shifts, and research frontiers.

**Host Genetic Susceptibility:**
- STAT3 LOF (Job syndrome): Impaired Th17; susceptibility to coccidioidomycosis (disseminated)
- Dectin-1 polymorphisms (Y238X): Reduced beta-glucan recognition; increased susceptibility to endemic mycoses
- IFNGR deficiency: Severe disseminated histoplasmosis, coccidioidomycosis
- GATA2 deficiency: MonoMAC syndrome; disseminated coccidioidomycosis
- HLA associations: Certain HLA types associated with severe coccidioidomycosis in specific ethnic groups

**Climate Change and Range Expansion:**
- Coccidioides: Range expanding northward; cases now documented in Washington State, Utah, non-traditional areas
- Histoplasma: Cases increasing outside traditional Ohio/Mississippi Valley; documented in most US states
- Soil disruption: Construction, natural disasters, wildfires create exposure events
- Climate models predict 50% expansion of Coccidioides endemic range by 2100
- Public health implications: Physicians in non-endemic areas must consider these diagnoses

**Antifungal Resistance:**
- Azole resistance in dimorphic fungi: Rare but increasing
- Coccidioides: Fluconazole MIC creep; implications for meningitis treatment
- CYP51 mutations: Documented in Histoplasma isolates from patients on long-term azoles
- Echinocandin: Not active against dimorphic fungi (lack 1,3-beta-glucan in yeast form or different glucan synthase)

**Advanced Imaging:**
- PET/CT: Useful for staging disseminated disease (hot nodes, bones, adrenals)
- MRI brain: Basilar meningitis enhancement in coccidioidal meningitis; hydrocephalus
- CT chest patterns: Coccidioidomycosis (thin-walled cavities, nodules); Histoplasmosis (mediastinal lymphadenopathy, calcifications); Blastomycosis (mass-like consolidation mimicking cancer)

**Research Frontiers:**
- Vaccine development: Coccidioides Delta-CPS1 live attenuated vaccine (promising animal data; FDA IND expected)
- T-cell-based diagnostics: Coccidioides-specific T-cell assays for immune monitoring (analogous to TB QuantiFERON)
- Improved antigen assays: Multiplex platforms detecting multiple endemic fungi simultaneously
- Whole-genome sequencing: Phylogeographic analysis revealing population structure and virulence determinants
- Novel antifungals: Olorofim active against Coccidioides; fosmanogepix active against multiple dimorphic fungi

**Global Impact of Endemic Mycoses:**
- Histoplasmosis: Often misdiagnosed as TB in HIV patients in Latin America and Africa
- Talaromyces marneffei: Third most common AIDS-related opportunistic infection in Southeast Asia
- Access to diagnostics: Antigen testing and serology not widely available outside US
- WHO fungal priority pathogens list (2022): Histoplasma and Coccidioides listed as critical and high priority respectively`,
      keyTerms: [
        { term: 'Range expansion', definition: 'The geographic spread of endemic fungi beyond traditional boundaries driven by climate change, land use changes, and population movement' },
        { term: 'GATA2 deficiency', definition: 'A primary immunodeficiency (MonoMAC syndrome) with monocytopenia and susceptibility to disseminated endemic mycoses' },
        { term: 'Delta-CPS1 vaccine', definition: 'A live attenuated Coccidioides vaccine candidate with deletions in the CPS1 gene, showing promising protection in animal models' },
        { term: 'MIC creep', definition: 'A gradual increase in minimum inhibitory concentrations over time in a pathogen population, potentially reducing clinical efficacy' },
        { term: 'Fibrosing mediastinitis', definition: 'An excessive fibrotic response to Histoplasma granulomas causing compression of mediastinal structures; idiosyncratic; no proven treatment' },
      ],
      clinicalNotes: 'Climate change is fundamentally altering the epidemiology of endemic mycoses. Coccidioidomycosis must be considered in areas previously considered non-endemic. Histoplasmosis should be in the differential for disseminated disease in HIV patients from Latin America and Africa. Host genetic evaluation should be considered in patients with severe or disseminated disease without classic risk factors. The Coccidioides vaccine pipeline is the most advanced for any human fungal pathogen.',
    },
    5: {
      level: 5,
      summary: 'Expert knowledge of endemic mycoses encompasses immunogenomics-guided risk stratification, next-generation vaccine platforms, precision diagnostics including point-of-care multiplexing, global advocacy for fungal disease recognition, and the integration of environmental surveillance with clinical practice.',
      explanation: `Expert-level management integrates cutting-edge science, global health strategy, and policy advocacy.

**Immunogenomics and Risk Stratification:**
- Polygenic risk scores: Combining multiple host genetic variants (Dectin-1, TLR4, STAT3, IFN-gamma pathway) to predict dissemination risk
- Pharmacogenomics: CYP2C19/3A4 genotyping for itraconazole/voriconazole dose optimization
- Immune phenotyping: Flow cytometric analysis of Th1/Th17 responses to fungal antigens may predict treatment outcomes
- Precision approach: Integrating genetics + immune monitoring + pathogen virulence characterization for individualized therapy

**Next-Generation Vaccines:**
- Coccidioides vaccines: Most advanced; multiple candidates in preclinical/IND pipeline
  - Live attenuated (Delta-CPS1): Strong Th1/Th17 immunity
  - Recombinant protein (Ag2/Prp2 + adjuvant): Subunit approach
  - mRNA platform: Exploring for rapid development of coccidioidomycosis vaccine
- Histoplasma vaccines: Hsp60 (heat shock protein) as candidate antigen; dendritic cell vaccines
- Pan-fungal vaccine: Targeting conserved cell wall beta-glucan; could protect against multiple endemic mycoses

**Point-of-Care Diagnostics:**
- Lateral flow assays: Histoplasma urine antigen LFA (OIDx, MiraVista); sensitivity comparable to EIA
- Multiplex POC: Simultaneous detection of Histoplasma + Cryptococcus + TB antigens; critical for HIV programs in Latin America/Africa
- Loop-mediated isothermal amplification (LAMP): Molecular detection without thermocycler; suitable for resource-limited settings
- Digital PCR: Quantification of fungal burden for treatment monitoring

**Global Advocacy:**
- WHO Fungal Priority Pathogens List (2022): First-ever global fungal priority list; Histoplasma in critical group
- Diagnostic access: Advocating for Histoplasma antigen testing in WHO Essential Diagnostics List
- Misdiagnosis burden: Estimated 50% of disseminated histoplasmosis in Latin America misdiagnosed as TB
- Economic analysis: Investment in fungal diagnostics is cost-effective in high-burden HIV settings
- Capacity building: Training pathologists and microbiologists in fungal identification in endemic regions

**Environmental Surveillance:**
- Soil sampling and culture: Mapping Coccidioides distribution for public health planning
- Air sampling: Monitoring spore counts during dust events, construction, natural disasters
- Genomic environmental surveillance: Metagenomic sequencing of soil microbiome to detect pathogenic fungi
- Climate modeling: Projecting future endemic areas based on temperature and precipitation changes
- Early warning systems: Integrating environmental monitoring with clinical surveillance

**Expert Clinical Considerations:**
- Immune reconstitution: IRIS with endemic mycoses on ART or after TNF-alpha inhibitor discontinuation
- Transplant recipients: Donor-derived endemic mycosis from organs of donors with latent infection
- Biological therapy screening: Coccidioidomycosis serological screening before TNF-alpha inhibitor initiation in endemic areas
- Reactivation: Decades-dormant Histoplasma can reactivate with immunosuppression (like TB)
- Co-infections: Endemic mycoses + TB co-infection in HIV patients complicates diagnosis and treatment`,
      keyTerms: [
        { term: 'WHO Fungal Priority Pathogens List', definition: 'The first global initiative to systematically prioritize fungal pathogens based on public health importance, published by WHO in 2022' },
        { term: 'Polygenic risk score', definition: 'A combined genetic risk assessment integrating multiple host variants to predict individual susceptibility to severe endemic mycosis' },
        { term: 'Lateral flow assay POC', definition: 'Rapid point-of-care diagnostic tests for fungal antigens that can be performed at the bedside or in resource-limited clinic settings' },
        { term: 'LAMP', definition: 'Loop-Mediated Isothermal Amplification; a molecular diagnostic technique that amplifies DNA at constant temperature without a thermocycler, suitable for field use' },
        { term: 'Donor-derived infection', definition: 'Transmission of latent fungal infection through organ transplantation from a donor with unrecognized prior endemic mycosis' },
      ],
      clinicalNotes: 'The ID specialist must serve as a sentinel for changing endemic mycosis epidemiology, advocate for diagnostic access in resource-limited settings, and contribute to clinical trial design for antifungals and vaccines. Key priorities: (1) Recognize endemic mycoses outside traditional geographic boundaries. (2) Advocate for POC diagnostic availability, especially Histoplasma antigen in HIV programs. (3) Support the Coccidioides vaccine development pipeline. (4) Implement systematic screening before biological therapy in endemic areas. (5) Contribute to environmental surveillance data that informs public health planning.',
    },
  },
  media: [],
  citations: [
    { id: 'wheat-cid-histo-2007', type: 'article', title: 'Clinical Practice Guidelines for the Management of Patients with Histoplasmosis: 2007 Update by IDSA', authors: ['Wheat LJ', 'Freifeld AG', 'Kleiman MB'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
    { id: 'galgiani-cid-cocci-2016', type: 'article', title: 'Executive Summary: 2016 IDSA Clinical Practice Guideline for the Treatment of Coccidioidomycosis', authors: ['Galgiani JN', 'Ampel NM', 'Blair JE'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
    { id: 'who-fungal-priority-2022', type: 'website', title: 'WHO Fungal Priority Pathogens List to Guide Research, Development and Public Health Action', source: 'World Health Organization', license: 'CC BY-NC-SA 3.0 IGO' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-candidiasis', targetType: 'condition', relationship: 'sibling', label: 'Candidiasis' },
    { targetId: 'infectious-disease-aspergillosis', targetType: 'condition', relationship: 'sibling', label: 'Aspergillosis' },
    { targetId: 'infectious-disease-cryptococcosis', targetType: 'condition', relationship: 'sibling', label: 'Cryptococcosis' },
    { targetId: 'infectious-disease-hiv-aids', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
  ],
  tags: {
    systems: ['infectious-disease', 'mycology', 'pulmonology'],
    topics: ['fungal-infections', 'endemic-mycoses', 'histoplasmosis', 'coccidioidomycosis', 'blastomycosis'],
    keywords: ['dimorphic fungi', 'Histoplasma', 'Coccidioides', 'Blastomyces', 'Talaromyces', 'Paracoccidioides', 'Valley Fever', 'itraconazole', 'urine antigen', 'climate change'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
