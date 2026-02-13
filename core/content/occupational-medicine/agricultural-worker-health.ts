/**
 * Agricultural Worker Health - Comprehensive Educational Content
 *
 * Covers health risks, common conditions, regulatory protections, and
 * preventive measures for agricultural and farmworker populations.
 */

import { EducationalContent } from '../types';

export const agriculturalWorkerHealthContent: EducationalContent = {
  id: 'topic-agricultural-worker-health',
  type: 'topic',
  name: 'Agricultural Worker Health',
  nameEs: 'Salud del Trabajador Agricola',
  alternateNames: ['Farmworker Health', 'Agricultural Occupational Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Farmworkers face many health risks because they work outdoors with plants, animals, heavy machines, and chemicals like pesticides.',
      explanation: `Working on a farm is one of the hardest and most dangerous jobs. Farmworkers grow the food we eat every day, but the work can make them sick or hurt in many ways.

**What makes farm work risky?**

Think of a farmworker like an athlete who plays outdoors every single day, rain or shine, hot or cold. But instead of a ball, they are handling sharp tools, heavy objects, and chemicals.

**Common health problems for farmworkers:**

1. **Sun and heat**: Working outside all day in the hot sun can cause sunburn, heat exhaustion, or heat stroke - which is when your body gets so hot it cannot cool itself down
2. **Pesticides**: Chemicals used to kill bugs on crops can make people sick if they touch their skin, breathe them in, or accidentally swallow them
3. **Muscle and joint pain**: Bending, lifting, and reaching all day causes back pain, sore shoulders, and hand injuries
4. **Breathing problems**: Dust from soil, hay, and grain can irritate the lungs and cause allergies or asthma
5. **Injuries from machines**: Tractors, harvesters, and other farm equipment can cause serious injuries if not used safely

**How can farmworkers stay safe?**

- Drink plenty of water and take breaks in the shade
- Wear protective clothing, gloves, and masks when using chemicals
- Learn how to use machinery safely
- Wash hands and change clothes after working with pesticides
- Tell a supervisor or doctor right away if you feel sick

**Important to know**: Farmworkers have the right to a safe workplace, clean water, and medical care if they get hurt on the job.`,
      keyTerms: [
        { term: 'pesticide', definition: 'A chemical used to kill insects, weeds, or other pests that can damage crops' },
        { term: 'heat exhaustion', definition: 'When your body gets too hot from working in the heat, causing dizziness, nausea, and heavy sweating' },
        { term: 'protective equipment', definition: 'Special clothing like gloves, masks, and goggles that protect workers from dangers' },
        { term: 'musculoskeletal injury', definition: 'Pain or damage to muscles, bones, or joints from physical work' },
        { term: 'dehydration', definition: 'When your body does not have enough water to work properly' },
      ],
      analogies: [
        'A farmworker\'s body is like a machine - it needs fuel (food and water), maintenance (rest and medical care), and protection (safety equipment) to keep running safely.',
        'Pesticides on a farm are like medicine for crops - they help the plants, but just like human medicine, too much or careless handling can be harmful to people.',
      ],
      patientCounselingPoints: [
        'Always drink water before you feel thirsty - by the time you are thirsty, your body is already running low on water.',
        'If you feel dizzy, confused, or stop sweating on a hot day, tell someone immediately and move to a cool place.',
        'Wash your hands and face before eating, drinking, or smoking when working around chemicals.',
        'You have the right to know what chemicals are being used on the farm and how to protect yourself.',
        'Report any injury or illness to your employer - you are protected by law even if you do not have papers.',
      ],
    },
    2: {
      level: 2,
      summary: 'Agricultural workers face occupational hazards including pesticide exposure, heat-related illness, musculoskeletal disorders, respiratory conditions, and traumatic injuries, with migrant and seasonal workers facing additional barriers to healthcare.',
      explanation: `## Overview of Agricultural Worker Health

Agriculture is one of the most hazardous industries in the United States, with farmworkers facing a wide range of physical, chemical, and biological hazards.

### Key Health Hazards

**Chemical Exposures:**
- Pesticides (insecticides, herbicides, fungicides)
- Fertilizers and soil amendments
- Fuel and solvents for equipment
- Veterinary chemicals (antibiotics, antiparasitics)

**Physical Hazards:**
- Extreme heat and UV radiation
- Heavy lifting, bending, and repetitive motions
- Machinery and equipment injuries
- Falls from ladders and elevated surfaces
- Noise from equipment

**Biological Hazards:**
- Zoonotic diseases (infections from animals like brucellosis, leptospirosis)
- Organic dust and mold (causing respiratory problems)
- Venomous snakes, spiders, and insects
- Soil-borne infections (Valley fever, hookworm)

### Populations at Risk

- **Migrant farmworkers**: Move between regions following crop seasons, often lacking consistent healthcare
- **Seasonal workers**: Employed during harvest periods with variable working conditions
- **Family members**: Children and spouses may also be exposed, especially in family farming operations

### Common Health Conditions

1. **Skin conditions**: Contact dermatitis from plants and chemicals, fungal infections, skin cancer from UV exposure
2. **Respiratory disease**: Organic dust toxic syndrome, farmer's lung, occupational asthma
3. **Musculoskeletal disorders**: Low back pain, carpal tunnel syndrome, tendinitis
4. **Eye injuries**: Foreign bodies, chemical splashes, UV damage
5. **Infectious diseases**: Tuberculosis (crowded housing), parasitic infections, zoonotic diseases

### Protections and Resources

- **EPA Worker Protection Standard (WPS)**: Requires training, notification, and protective equipment for pesticide handlers
- **OSHA Field Sanitation Standard**: Requires drinking water, toilets, and handwashing facilities
- **Migrant Health Centers**: Federally funded clinics serving agricultural communities
- **Workers' compensation**: Available in most states, though coverage varies for agricultural workers`,
      keyTerms: [
        { term: 'Worker Protection Standard', definition: 'EPA regulation that requires training and safety measures for agricultural workers who handle or are near pesticides', pronunciation: 'WPS' },
        { term: 'zoonotic disease', definition: 'An infection that can spread from animals to humans, such as brucellosis from cattle or leptospirosis from contaminated water', pronunciation: 'zo-uh-NOT-ik' },
        { term: 'organic dust toxic syndrome', definition: 'A flu-like illness caused by breathing in large amounts of dust from grain, hay, or animal waste', pronunciation: 'ODTS' },
        { term: 'migrant farmworker', definition: 'A person who moves from place to place for seasonal agricultural work' },
        { term: 'field sanitation standard', definition: 'OSHA rule requiring employers to provide drinking water, toilets, and handwashing facilities for field workers' },
      ],
      patientCounselingPoints: [
        'Keep a record of all pesticides used at your workplace - this information is important for your doctor if you get sick.',
        'Wear long sleeves, gloves, and a hat to protect your skin from chemicals and sun exposure.',
        'If you work with animals, wash your hands thoroughly afterward and tell your doctor about animal contact if you get sick.',
        'Community health centers in agricultural areas provide services regardless of ability to pay or immigration status.',
      ],
    },
    3: {
      level: 3,
      summary: 'Agricultural occupational health encompasses pesticide toxicology, heat stress physiology, ergonomic hazards specific to crop cultivation, respiratory exposures to organic dusts and bioaerosols, and infectious disease risks amplified by crowded housing and limited healthcare access.',
      explanation: `## Agricultural Health Hazards in Depth

### Pesticide Toxicology

**Organophosphates and Carbamates:**
- Mechanism: Acetylcholinesterase (AChE) inhibition
- Acute toxicity: Cholinergic crisis - SLUDGE/BBB mnemonic (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis / Bradycardia, Bronchospasm, Bronchorrhea)
- Organophosphates cause irreversible AChE inhibition; carbamates are reversible
- Biomonitoring: Red blood cell cholinesterase and plasma butyrylcholinesterase levels

**Chronic Pesticide Effects:**
- Neurobehavioral: Cognitive deficits, depression, peripheral neuropathy
- Endocrine disruption: Thyroid dysfunction, reproductive effects
- Cancer: Associations with non-Hodgkin lymphoma, leukemia, prostate cancer (Agricultural Health Study data)
- Developmental: In utero exposure linked to neurodevelopmental delays

### Heat Stress Physiology

**Thermoregulation in Agricultural Settings:**
- Work intensity: 300-500 kcal/hour for harvesting activities
- Environmental factors: Temperature, humidity, solar radiation, wind speed
- Wet Bulb Globe Temperature (WBGT) is the standard heat stress index
- Acclimatization requires 7-14 days of gradual exposure increases

**Risk Factors for Heat Illness:**
- Dehydration and inadequate fluid replacement
- Lack of shade and rest breaks
- Impermeable clothing for pesticide protection (impairs evaporative cooling)
- Medications that impair thermoregulation
- Pre-existing conditions (cardiovascular disease, diabetes, obesity)

### Musculoskeletal Disorders

**Ergonomic Hazards by Crop Type:**
- Stooped labor (lettuce, strawberries): Lumbar disc disease, sciatica
- Overhead reaching (tree fruit, grapes): Rotator cuff tendinopathy, cervical strain
- Repetitive hand motions (pruning, sorting): Carpal tunnel syndrome, trigger finger
- Heavy lifting (baling, loading): Acute and chronic low back pain

### Respiratory Exposures

**Organic Dust Components:**
- Grain dust: Endotoxins, beta-glucans, fungal spores, mites
- Animal confinement: Ammonia, hydrogen sulfide, endotoxins
- Composting/silage: Thermophilic actinomycetes, Aspergillus species

**Associated Conditions:**
- Organic Dust Toxic Syndrome (ODTS): Self-limited febrile illness, no sensitization
- Hypersensitivity Pneumonitis (Farmer's Lung): Immune-mediated, progressive
- Occupational Asthma: Grain dust, animal allergens
- Silo Filler's Disease: Nitrogen dioxide exposure from fresh silage

### Social Determinants of Health

**Healthcare Access Barriers:**
- Geographic isolation from medical facilities
- Language barriers (predominantly Spanish-speaking workforce)
- Fear of job loss or deportation limiting healthcare seeking
- Lack of health insurance (agricultural exemptions)
- Inadequate housing with overcrowding (TB, COVID transmission risk)
- Food insecurity despite working in food production`,
      keyTerms: [
        { term: 'acetylcholinesterase inhibition', definition: 'Mechanism of organophosphate and carbamate toxicity where the enzyme that breaks down acetylcholine is blocked, causing excessive cholinergic stimulation', pronunciation: 'ah-SEE-til-koh-lin-ES-ter-aze' },
        { term: 'Wet Bulb Globe Temperature', definition: 'A composite index measuring heat stress that accounts for temperature, humidity, wind speed, and solar radiation (WBGT)', pronunciation: 'WBGT' },
        { term: 'Organic Dust Toxic Syndrome', definition: 'Acute febrile illness from massive inhalation of organic dust containing endotoxins; distinct from hypersensitivity pneumonitis in that it does not involve immune sensitization' },
        { term: 'Agricultural Health Study', definition: 'A large prospective cohort study of licensed pesticide applicators and their spouses in Iowa and North Carolina, examining health effects of agricultural exposures' },
        { term: 'endotoxin', definition: 'Lipopolysaccharide component of gram-negative bacterial cell walls found in organic dust; potent trigger of airway inflammation' },
        { term: 'Worker Protection Standard', definition: 'EPA 40 CFR Part 170 regulation mandating pesticide safety training, restricted entry intervals, and PPE for agricultural pesticide handlers and fieldworkers' },
      ],
    },
    4: {
      level: 4,
      summary: 'Agricultural occupational medicine integrates pesticide toxicology with cholinesterase monitoring programs, heat illness prevention protocols, exposure-specific respiratory disease management, ergonomic intervention strategies, and culturally competent care delivery for underserved farmworker populations.',
      explanation: `## Advanced Clinical Considerations

### Pesticide Exposure Assessment and Management

**Cholinesterase Monitoring Programs:**
- Baseline RBC AChE and plasma BuChE before exposure season
- Serial monitoring every 30 days during application period
- Action levels: 20% depression from baseline for plasma BuChE, 30% for RBC AChE
- Medical removal when RBC AChE falls below 70% of baseline
- RBC AChE regeneration: 1% per day (reflects new RBC synthesis)
- Plasma BuChE recovery: 25-30% per week (hepatic synthesis)

**Organophosphate-Induced Delayed Neuropathy (OPIDN):**
- Occurs 2-4 weeks after acute exposure
- Distal axonopathy affecting long nerves first
- Mechanism: Inhibition and aging of neuropathy target esterase (NTE)
- Not all OPs cause OPIDN; chlorpyrifos and methamidophos are implicated
- No effective treatment; partial recovery over months

**Paraquat Toxicity:**
- Highly lethal herbicide (mortality 50-90% with ingestion)
- Concentrated in type I and II pneumocytes via polyamine uptake pathway
- Progressive pulmonary fibrosis within days to weeks
- No antidote; Fuller's earth or activated charcoal for GI decontamination
- Supplemental oxygen paradoxically worsens pulmonary injury (free radical generation)

### Heat Illness: Clinical Management Protocols

**Exertional Heat Stroke (EHS) in Agricultural Settings:**
- Core temperature measurement: Rectal thermometry is gold standard
- Cooling rate target: 0.15-0.25°C per minute
- Cold water immersion preferred but often unavailable in field settings
- Field cooling alternatives: Tarp-assisted cooling, ice sheet rotation, cold IV fluids
- Rhabdomyolysis screening: CK, comprehensive metabolic panel, urinalysis
- DIC screening: PT, PTT, fibrinogen, D-dimer, platelet count

**Return-to-Work After Heat Illness:**
- Minimum 7 days before return to heat exposure
- Gradual re-acclimatization protocol over 2 weeks
- Heat tolerance testing (laboratory-based) for severe cases
- Permanent heat intolerance in some individuals after EHS

### Respiratory Disease Surveillance

**Spirometric Monitoring in Agriculture:**
- Baseline spirometry before exposure season
- Cross-shift spirometry for acute exposures (grain elevators, CAFOs)
- Longitudinal FEV1 decline: Normal < 30 mL/year; excessive > 60 mL/year
- Methacholine challenge for suspected occupational asthma

**Hydrogen Sulfide Exposure in Agriculture:**
- Sources: Manure pits, confined animal feeding operations
- Olfactory fatigue above 100 ppm (loss of warning smell)
- Knockdown concentration: >500 ppm (immediate loss of consciousness)
- Mechanism: Cytochrome oxidase inhibition (similar to cyanide)
- Treatment: Supportive care; some evidence for nitrite-induced methemoglobin

### Cultural Competency in Agricultural Medicine

**Addressing Health Disparities:**
- Promotoras (community health workers) model for health education
- Culturally adapted safety training materials (visual-based, bilingual)
- Understanding curanderismo and traditional healing practices
- Building trust within communities with immigration concerns
- Portable health screening events at worksites and labor camps
- Integration with Migrant Health Program (Section 330(g) Health Centers)`,
      keyTerms: [
        { term: 'cholinesterase monitoring', definition: 'Serial measurement of RBC acetylcholinesterase and plasma butyrylcholinesterase to detect subclinical organophosphate exposure before clinical toxicity develops' },
        { term: 'OPIDN', definition: 'Organophosphate-induced delayed neuropathy; a distal axonopathy occurring 2-4 weeks post-exposure from neuropathy target esterase inhibition and aging' },
        { term: 'paraquat', definition: 'A bipyridyl herbicide that is selectively toxic to lung tissue via concentration in pneumocytes through the polyamine uptake pathway' },
        { term: 'promotora', definition: 'A community health worker model using lay health educators from within the community to deliver culturally appropriate health education and connect workers to services' },
        { term: 'CAFO', definition: 'Concentrated Animal Feeding Operation; an agricultural facility confining large numbers of animals that generates significant respiratory and environmental hazards' },
        { term: 'restricted entry interval', definition: 'The time period after pesticide application during which entry into treated areas is prohibited without PPE, as specified by the EPA Worker Protection Standard' },
      ],
      clinicalNotes: `Key clinical considerations for agricultural medicine:

1. **Cholinesterase testing interpretation**: Always establish individual baseline values before exposure season. Population-based reference ranges are inadequate because of wide inter-individual variation (up to 3-fold). A 20% decline from personal baseline is more sensitive than falling below a population reference range.

2. **Pesticide exposure documentation**: Detailed exposure history should include specific products (not just active ingredients), application method, duration, PPE used, and timing relative to restricted entry intervals. Acute poisoning events should be reported to the state health department and poison control.

3. **Heat illness risk stratification**: Agricultural workers wearing chemical-resistant PPE require more conservative work-rest schedules because evaporative cooling is impaired. WBGT-based guidelines should be adjusted downward by 5-10°F for impermeable clothing.

4. **Immigration status and clinical care**: Healthcare providers should be aware that fear of deportation significantly delays care-seeking. Establish clear policies that medical care is provided regardless of immigration status and that medical records are not shared with immigration authorities.`,
    },
    5: {
      level: 5,
      summary: 'Contemporary agricultural occupational medicine addresses the intersection of environmental health science, pesticide regulatory toxicology, climate change adaptation, and health equity frameworks to protect an essential yet systematically underserved workforce through evidence-based surveillance, intervention, and policy advocacy.',
      explanation: `## Cutting-Edge Issues in Agricultural Occupational Health

### Pesticide Regulatory Toxicology and Risk Assessment

**EPA Risk Assessment Framework:**
- Hazard identification → Dose-response assessment → Exposure assessment → Risk characterization
- Reference Dose (RfD): Estimated daily oral exposure unlikely to cause adverse effects over a lifetime
- Margin of Exposure (MOE): Ratio of NOAEL to estimated human exposure
- Aggregate exposure assessment: Occupational + dietary + residential pathways
- Cumulative risk assessment for common mechanism groups (e.g., all OPs)

**Evolving Regulatory Landscape:**
- Chlorpyrifos: EPA revocation of all food tolerances (2021) after decades of controversy
- Glyphosate: IARC Group 2A carcinogen vs. EPA "not likely to be carcinogenic" determination
- Neonicotinoids: Systemic insecticides with emerging concerns for human neurotoxicity
- PFAS in pesticide formulations: Emerging contaminant concern from fluorinated surfactants

### Climate Change and Agricultural Worker Health

**Direct Health Impacts:**
- Increasing heat-related illness frequency and severity
- Extended growing seasons increasing cumulative exposure duration
- Expanded geographic range of vector-borne diseases (dengue, Chagas, Valley fever)
- More frequent extreme weather events (wildfires, floods) creating acute hazards

**Indirect Health Impacts:**
- Altered pesticide efficacy requiring increased application rates
- New pest species requiring novel pesticide classes
- Water scarcity affecting field sanitation and hygiene
- Forced migration patterns from climate-affected agricultural regions

**Adaptation Strategies:**
- Heat illness prevention programs adjusted for rising baseline temperatures
- Early warning systems integrated with agricultural work scheduling
- Climate-resilient crop varieties reducing pesticide dependency
- Shade structures and mechanization to reduce direct exposure

### Advanced Biomonitoring Approaches

**Beyond Cholinesterase:**
- Urinary dialkylphosphate (DAP) metabolites for OP exposure (non-specific)
- Specific metabolites: TCPy (chlorpyrifos), MDA (malathion), PNP (parathion)
- Para-nitrophenol for parathion and related compounds
- Neonicotinoid metabolites in urine (emerging biomarkers)
- Buccal cell DNA adducts for genotoxic pesticide exposure assessment

**Exposure Assessment Innovations:**
- Silicone wristband passive samplers for personal pesticide exposure
- GPS-tracked exposure diaries with time-activity patterns
- Drone-based drift monitoring during aerial application
- Multi-residue analytical methods (LC-MS/MS, GC-MS/MS) for simultaneous detection of 200+ pesticides

### Health Equity and Policy Frameworks

**Structural Determinants of Agricultural Worker Health:**
- Immigration policy intersection with occupational health (H-2A visa program limitations)
- Agricultural exemptions from labor protections (overtime, child labor, collective bargaining)
- Housing quality standards for employer-provided labor camps
- Pesticide Action Network and farmworker advocacy organizations

**Evidence-Based Policy Recommendations:**
- Extend OSHA heat standard protections to agriculture explicitly
- Mandate cholinesterase monitoring for all pesticide handlers (currently only in WA, CA)
- Strengthen EPA WPS enforcement and compliance assistance
- Integrate occupational health into agricultural extension services
- Expand HRSA Migrant Health Program funding and telehealth access

### Emerging Research Priorities

**Agricultural Health Study (AHS) Ongoing Findings:**
- Largest prospective cohort (89,000+ participants) studying agricultural exposures
- Updated cancer incidence associations with specific pesticide active ingredients
- Neurodegenerative disease risk (Parkinson's, ALS) and lifetime pesticide exposure
- Epigenetic modifications from organophosphate exposure (DNA methylation changes)
- Respiratory outcomes and long-term grain dust exposure

**Children's Environmental Health:**
- Take-home pesticide exposure on clothing and shoes
- Developmental neurotoxicity from gestational and early-life exposures
- CHAMACOS (Center for Health Assessment of Mothers and Children of Salinas) cohort findings
- Para-occupational exposure assessment methodologies`,
      keyTerms: [
        { term: 'Reference Dose (RfD)', definition: 'An EPA estimate of daily oral exposure to a pesticide that is not expected to cause adverse health effects over a lifetime, incorporating uncertainty factors applied to the NOAEL' },
        { term: 'Margin of Exposure', definition: 'The ratio of the no-observed-adverse-effect level (NOAEL) to estimated human exposure; higher MOE indicates greater safety margin for risk characterization' },
        { term: 'dialkylphosphate metabolites', definition: 'Non-specific urinary biomarkers of organophosphate exposure (DMP, DMTP, DMDTP, DEP, DETP, DEDTP) used for population-level exposure assessment' },
        { term: 'H-2A visa program', definition: 'Federal temporary agricultural worker visa program that ties immigration status to a specific employer, creating power dynamics that can limit workers\' ability to report safety concerns' },
        { term: 'CHAMACOS cohort', definition: 'Center for the Health Assessment of Mothers and Children of Salinas; a longitudinal birth cohort study examining the health effects of pesticide exposure on farmworker children in California' },
        { term: 'para-occupational exposure', definition: 'Indirect pesticide exposure of family members through take-home contamination on workers\' clothing, skin, hair, and vehicles' },
      ],
      clinicalNotes: `Advanced practice considerations:

1. **Interpreting urinary DAP metabolites**: Non-specific DAPs (DMP, DEP, etc.) cannot identify specific OPs and may reflect dietary exposure. Use specific metabolites (TCPy, MDA) when available. Creatinine-adjusted concentrations preferred; spot samples have high within-person variability.

2. **Climate-adjusted heat protocols**: Current NIOSH and ACGIH TLV guidelines for heat stress were developed under historical climate conditions. For regions experiencing unprecedented heat waves, clinicians should advocate for more conservative work-rest cycles than those specified in current guidelines.

3. **Pesticide poisoning reporting**: Acute pesticide illness is reportable in most states (mandatory in CA, WA, OR, and others). Clinicians should report suspected cases to their state health department and EPA even when diagnostic certainty is incomplete. Under-reporting is estimated at 10-40x.

4. **Farmworker patient communication**: Use teach-back methods for safety instructions. Many farmworkers have limited formal education; visual materials and demonstrations are more effective than written instructions. Partner with promotoras for community-level education.

5. **Medicolegal documentation**: Detailed exposure records are critical for future workers' compensation claims and epidemiologic research. Document specific pesticide products by trade name AND active ingredient, application dates, and proximity of worker to application area.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-agricultural-operations',
      type: 'website',
      title: 'Agricultural Operations - Safety and Health Topics',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/agricultural-operations',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-agriculture',
      type: 'website',
      title: 'Agricultural Safety',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/aginjury/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'epa-worker-protection-standard',
      type: 'guideline',
      title: 'Agricultural Worker Protection Standard (40 CFR Part 170)',
      authors: ['Environmental Protection Agency'],
      source: 'EPA',
      url: 'https://www.epa.gov/pesticide-worker-safety',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-pesticide-safety', targetType: 'topic', relationship: 'child', label: 'Pesticide Safety' },
    { targetId: 'topic-heat-illness-prevention', targetType: 'topic', relationship: 'related', label: 'Heat Illness Prevention' },
  ],

  tags: {
    systems: ['respiratory', 'musculoskeletal', 'neurological', 'dermatologic'],
    topics: ['occupational-medicine', 'agricultural-health', 'environmental-health', 'health-equity'],
    keywords: ['farmworker', 'pesticide', 'heat illness', 'migrant health', 'agricultural safety', 'organic dust'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
