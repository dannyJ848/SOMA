/**
 * Pesticide Safety - Comprehensive Educational Content
 *
 * Covers pesticide classification, routes of exposure, acute and chronic
 * health effects, protective measures, and regulatory frameworks for
 * workers in agricultural and non-agricultural settings.
 */

import { EducationalContent } from '../types';

export const pesticideSafetyContent: EducationalContent = {
  id: 'topic-pesticide-safety',
  type: 'topic',
  name: 'Pesticide Safety',
  nameEs: 'Seguridad con Pesticidas',
  alternateNames: ['Pesticide Exposure Prevention', 'Agricultural Chemical Safety'],

  levels: {
    1: {
      level: 1,
      summary: 'Pesticides are chemicals used to kill bugs and weeds on farms and gardens, but they can also be harmful to people if not used safely.',
      explanation: `Pesticides help farmers protect crops from bugs, weeds, and diseases. But these chemicals can make people sick if they are not careful.

**How can pesticides get into your body?**

Think of pesticides like invisible paint that can get on you in three ways:
1. **Through your skin**: Touching plants, soil, or equipment that has pesticide on it - this is the most common way workers are exposed
2. **Through your lungs**: Breathing in spray mist or dust that contains pesticides
3. **Through your mouth**: Eating, drinking, or smoking without washing your hands first

**What happens if you are exposed to too many pesticides?**

Depending on the type and amount, pesticides can cause:
- Headaches and dizziness
- Stomach pain, nausea, and vomiting
- Skin rashes and eye irritation
- Trouble breathing
- In severe cases, seizures or even death

**How to stay safe around pesticides:**

- **Read the label**: Every pesticide container has a label that tells you how to use it safely - the label is the law
- **Wear protective equipment**: Gloves, long sleeves, goggles, and masks keep chemicals off your body
- **Stay away from sprayed areas**: Do not enter a field or garden that has been recently sprayed until it is safe
- **Wash up**: Wash your hands and face before eating; shower and change clothes after work
- **Store safely**: Keep pesticides locked away from children and food

**Remember**: If you or someone you know feels sick after being around pesticides, call Poison Control at 1-800-222-1222 or go to the emergency room right away.`,
      keyTerms: [
        { term: 'pesticide', definition: 'Any chemical used to kill or control pests like insects, weeds, or fungi' },
        { term: 'exposure', definition: 'When a chemical gets into or onto your body through your skin, lungs, or mouth' },
        { term: 'PPE (protective equipment)', definition: 'Special clothing and gear like gloves, masks, and goggles that protect you from chemicals' },
        { term: 'signal word', definition: 'A word on the pesticide label that tells you how dangerous it is - DANGER means most toxic, WARNING means moderately toxic, CAUTION means least toxic' },
        { term: 'restricted entry interval', definition: 'The amount of time you must wait after a pesticide is sprayed before it is safe to go into that area' },
      ],
      analogies: [
        'A pesticide label is like a recipe - it tells you exactly how much to use, how to use it, and what precautions to take. Following the label is not optional, it is the law.',
        'Wearing protective gear around pesticides is like wearing a seatbelt in a car - it might seem unnecessary until the moment you really need it.',
      ],
      patientCounselingPoints: [
        'The most common way pesticides get into your body is through your skin, not your mouth - always wear gloves and long sleeves.',
        'If you get pesticide on your skin, wash the area with soap and water for at least 15 minutes.',
        'Never eat, drink, or smoke while working with or near pesticides.',
        'Wash work clothes separately from family laundry to protect your family.',
        'If you feel sick after working with pesticides, tell your doctor exactly which products were used.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pesticides are classified by their target organism and chemical class, with health effects ranging from mild skin irritation to severe cholinergic toxicity depending on the agent, dose, and route of exposure.',
      explanation: `## Understanding Pesticides

### Types of Pesticides

Pesticides are classified by what they control:
- **Insecticides**: Kill insects (most toxic to humans)
- **Herbicides**: Kill weeds
- **Fungicides**: Kill mold and fungi
- **Rodenticides**: Kill rodents
- **Fumigants**: Gases used to treat soil or stored grain

### Chemical Classes of Insecticides

| Class | Examples | How They Work | Toxicity Level |
|-------|----------|---------------|----------------|
| Organophosphates | Malathion, Chlorpyrifos | Block nerve enzyme (AChE) | High |
| Carbamates | Carbaryl (Sevin), Aldicarb | Block nerve enzyme (reversible) | Moderate-High |
| Pyrethroids | Permethrin, Bifenthrin | Disrupt nerve signals | Low-Moderate |
| Neonicotinoids | Imidacloprid | Disrupt insect nerve receptors | Low (to humans) |
| Organochlorines | DDT (banned), Lindane | Disrupt nerve function | Variable |

### Routes of Exposure

1. **Dermal (skin)**: Accounts for 90% of occupational exposure
   - Absorption varies by body region: Scalp and groin absorb 4-10x more than forearms
2. **Inhalation**: More significant for fumigants and fine sprays
3. **Oral**: Usually accidental or from poor hygiene

### Symptoms of Pesticide Poisoning

**Organophosphate/Carbamate Poisoning (Cholinergic Crisis):**
- Excessive sweating, salivation, tearing
- Nausea, vomiting, diarrhea, abdominal cramps
- Blurred vision, small pupils (miosis)
- Wheezing, difficulty breathing
- Muscle twitching, weakness
- Confusion, seizures (severe cases)

**Pyrethroid Exposure:**
- Skin tingling and burning (paresthesias)
- Allergic reactions in sensitive individuals
- Generally much less toxic than organophosphates

### The Pesticide Label

The label is the most important safety document:
- **Signal word**: DANGER (most toxic), WARNING (moderate), CAUTION (least)
- **Precautionary statements**: How to protect yourself
- **First aid instructions**: What to do if exposed
- **RE-entry interval (REI)**: How long to wait before entering treated area
- **Pre-harvest interval (PHI)**: How long before crops can be harvested

### Protective Measures

- Read and follow the label completely
- Wear required PPE: chemical-resistant gloves, coveralls, respirator if specified
- Mix and load pesticides in well-ventilated areas
- Wash PPE after each use; shower immediately after application
- Store pesticides in original containers, locked and away from food`,
      keyTerms: [
        { term: 'organophosphate', definition: 'A class of insecticides that works by permanently blocking acetylcholinesterase, an enzyme needed for normal nerve function', pronunciation: 'or-GAN-oh-FOS-fate' },
        { term: 'cholinergic crisis', definition: 'A medical emergency caused by too much acetylcholine in the body, leading to excessive secretions, muscle twitching, and breathing difficulty' },
        { term: 'dermal absorption', definition: 'The passage of a chemical through the skin into the bloodstream, which is the primary route of occupational pesticide exposure' },
        { term: 'signal word', definition: 'A word on the pesticide label indicating toxicity level: DANGER (Category I), WARNING (Category II), or CAUTION (Category III/IV)' },
        { term: 'restricted entry interval (REI)', definition: 'The minimum time that must pass after a pesticide application before workers can enter the treated area without full PPE' },
      ],
      patientCounselingPoints: [
        'Organophosphate insecticides are the most dangerous class - if you work with these, make sure you know the symptoms of poisoning.',
        'Your skin absorbs pesticides at different rates - the groin, scalp, and face absorb chemicals much faster than hands or arms.',
        'Always check the pesticide label for the signal word: DANGER means the product can kill you with very small amounts.',
        'If someone is having a pesticide emergency, call 911 and Poison Control (1-800-222-1222) immediately.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pesticide toxicology encompasses acute cholinergic syndromes from organophosphate and carbamate exposure, chronic neurotoxic and carcinogenic effects, dermal and inhalational pharmacokinetics, biomonitoring strategies, and EPA risk assessment frameworks governing worker protection.',
      explanation: `## Pesticide Toxicology

### Organophosphate Mechanism of Toxicity

**Acetylcholinesterase (AChE) Inhibition:**
1. Organophosphate binds to serine hydroxyl group at AChE active site
2. Formation of phosphorylated enzyme intermediate
3. Aging: Dealkylation of phosphoryl group makes binding irreversible
4. Accumulation of acetylcholine (ACh) at cholinergic synapses
5. Overstimulation of muscarinic and nicotinic receptors

**Clinical Syndromes by Receptor Type:**

| Receptor | Location | Effects |
|----------|----------|---------|
| Muscarinic | Smooth muscle, glands, heart | DUMBELS: Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation |
| Nicotinic | NMJ, autonomic ganglia | Fasciculations, weakness, tachycardia, hypertension |
| Central | CNS | Anxiety, seizures, coma, respiratory depression |

**Intermediate Syndrome:**
- Occurs 24-96 hours after acute exposure
- Proximal muscle weakness, cranial nerve palsies, respiratory muscle paralysis
- Mechanism: Persistent nicotinic receptor dysfunction
- Does not respond to atropine or pralidoxime

### Carbamate vs. Organophosphate Toxicity

| Feature | Organophosphate | Carbamate |
|---------|-----------------|-----------|
| AChE binding | Irreversible (ages) | Spontaneously reversible |
| Duration | Hours to days | Hours |
| CNS penetration | Yes | Limited |
| Pralidoxime use | Effective before aging | Generally not needed |
| Diagnosis | Depressed RBC AChE | May normalize before testing |

### Chronic Health Effects of Pesticides

**Neurotoxicity:**
- Organophosphate-induced delayed neuropathy (OPIDN): 2-4 weeks post-exposure
- Chronic organophosphate-induced neuropsychiatric disorder (COPIND)
- Parkinson disease: Meta-analysis shows OR 1.6 for pesticide exposure
- Cognitive impairment in longitudinal studies of agricultural applicators

**Cancer:**
- IARC classifications relevant to agriculture:
  - Group 1 (carcinogenic): Arsenic compounds, lindane
  - Group 2A (probably carcinogenic): Glyphosate, malathion, diazinon
  - Group 2B (possibly carcinogenic): DDT, parathion
- Agricultural Health Study associations: Prostate cancer, non-Hodgkin lymphoma, leukemia

**Reproductive and Developmental:**
- Endocrine disruption: Atrazine (anti-androgenic), chlorpyrifos (thyroid)
- Semen quality reduction in applicators
- Shortened gestational age and reduced birth weight
- Neurodevelopmental effects in offspring (CHAMACOS, Mt. Sinai studies)

### Biomonitoring

**Cholinesterase Testing:**
- RBC AChE: Reflects target tissue (neuronal) inhibition
- Plasma BuChE (pseudocholinesterase): More sensitive to exposure, faster recovery
- Baseline establishment critical (personal, not population-based)
- Depression thresholds: Plasma 20%, RBC 30% from individual baseline

**Urinary Metabolites:**
- Dialkylphosphates (DAPs): Non-specific OP metabolites (DMP, DEP, DMTP, DETP, DMDTP, DEDTP)
- Specific metabolites provide agent identification: TCPy for chlorpyrifos, MDA for malathion
- Short half-lives (hours to days) require timed collection relative to exposure

### EPA Worker Protection Standard (WPS) - 40 CFR Part 170

**Key Provisions (2015 Revision):**
- Annual pesticide safety training for all farmworkers
- Minimum age of 18 for handlers; 16 for early-entry workers
- Expanded REIs for many products
- Application exclusion zones (AEZ): 25-100 feet
- Enhanced PPE requirements and medical provisions
- Anti-retaliation protections for reporting violations`,
      keyTerms: [
        { term: 'aging', definition: 'The irreversible dealkylation of the phosphorylated acetylcholinesterase-organophosphate complex, after which pralidoxime is no longer effective for reactivation' },
        { term: 'intermediate syndrome', definition: 'A delayed neurotoxic syndrome occurring 24-96 hours after organophosphate exposure, characterized by proximal weakness and respiratory failure, distinct from both acute cholinergic crisis and OPIDN' },
        { term: 'dialkylphosphate metabolites', definition: 'Six non-specific urinary metabolites (DMP, DMTP, DMDTP, DEP, DETP, DEDTP) of organophosphate pesticides used for biological monitoring of exposure' },
        { term: 'application exclusion zone', definition: 'An area surrounding pesticide application equipment from which bystanders and workers must be excluded during application, as mandated by the WPS' },
        { term: 'COPIND', definition: 'Chronic organophosphate-induced neuropsychiatric disorder; persistent cognitive and mood disturbances following chronic subclinical OP exposure without prior acute poisoning episode' },
        { term: 'biomonitoring', definition: 'The measurement of chemicals or their metabolites in biological specimens (blood, urine) to assess the magnitude of pesticide exposure absorbed into the body' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of pesticide poisoning requires understanding agent-specific toxicokinetics, antidotal therapy timing relative to AChE aging, cholinesterase monitoring program design, and the integration of occupational exposure assessment with long-term health surveillance for chronic neurotoxic and carcinogenic outcomes.',
      explanation: `## Clinical Management of Pesticide Poisoning

### Acute Organophosphate Poisoning: Treatment Protocol

**Initial Stabilization:**
1. Decontamination: Remove clothing, wash skin with soap and water
2. Airway management: Suction secretions, intubation for respiratory failure
3. Avoid succinylcholine (prolonged paralysis due to inhibited plasma cholinesterase)

**Pharmacological Treatment:**

**Atropine:**
- Competitive muscarinic antagonist
- Initial dose: 2-4 mg IV (adults); may double every 5 minutes
- Titrate to drying of secretions and adequate oxygenation
- Does NOT reverse nicotinic effects (fasciculations, weakness)
- May require massive doses (>100 mg in first 24 hours for severe cases)
- End-point: Clear lungs, adequate oxygenation (not pupil size or heart rate)

**Pralidoxime (2-PAM):**
- Oxime that reactivates phosphorylated AChE before aging occurs
- Dose: 1-2 g IV over 15-30 minutes, then 500 mg/hr infusion
- Must be given before aging (time varies by OP: diazinon ages in hours, others in days)
- WHO recommendation: Continue for duration of clinical toxicity
- Addresses both muscarinic and nicotinic symptoms
- Controversial efficacy in some studies, but WHO still recommends early administration

**Benzodiazepines:**
- Diazepam 5-10 mg IV for seizures
- Prophylactic use considered for severe poisoning (military nerve agent protocols)

### Cholinesterase Monitoring Program Design

**Program Components:**
1. Pre-season baseline: RBC AChE + Plasma BuChE (two determinations, averaged)
2. Periodic monitoring: Every 30 days during application season
3. Action levels:
   - Plasma BuChE decreased 20%: Repeat test, review practices
   - RBC AChE decreased 30%: Remove from OP/carbamate exposure until recovery
   - Plasma BuChE decreased 40%: Immediate removal from exposure
4. Recovery monitoring: Weekly until return to 80% of baseline
5. Return to work: When RBC AChE returns to 80% of personal baseline

**Program Implementation (California Model):**
- California Code of Regulations, Title 3, Section 6728
- Mandatory for employees handling Category I or II OPs/carbamates
- Employer-funded medical surveillance
- Results maintained in confidential medical records
- Washington State also mandates cholinesterase monitoring

### Fumigant Toxicology

**Methyl Bromide:**
- Dense gas; displaces oxygen in enclosed spaces
- Delayed onset pulmonary edema (12-48 hours)
- CNS effects: Seizures, cognitive impairment
- Being phased out under Montreal Protocol (ozone-depleting substance)
- Colorless and odorless; warning agents (chloropicrin) added

**Phosphine (Aluminum Phosphide):**
- Used for stored grain fumigation
- Mechanism: Mitochondrial cytochrome c oxidase inhibition
- Highly lethal by ingestion or inhalation
- "Garlic-like" odor; spontaneously ignites in moist air
- Cardiovascular collapse, metabolic acidosis, ARDS
- No antidote; aggressive supportive care with IV magnesium, vasopressors

**Sulfuryl Fluoride (Vikane):**
- Structural fumigant (termites); increasingly used for stored products
- CNS depression, fluoride nephrotoxicity, hypocalcemia
- Monitoring: Serum fluoride levels

### Long-Term Health Surveillance

**Neurological Monitoring:**
- Quantitative neurobehavioral testing (NCTB battery)
- Nerve conduction velocity studies for peripheral neuropathy
- Serial cognitive screening (MoCA or similar) for chronic exposure
- Vibration sense and proprioception testing

**Cancer Surveillance:**
- No specific screening guidelines for pesticide-exposed workers
- Maintain detailed exposure history for future cancer registry linkage
- Heightened awareness for hematopoietic malignancies, prostate cancer
- Skin examination for arsenical keratoses in historical arsenical pesticide exposure`,
      keyTerms: [
        { term: 'pralidoxime (2-PAM)', definition: 'An oxime compound that reactivates organophosphate-inhibited acetylcholinesterase by cleaving the phosphoryl group from the enzyme active site, effective only before aging occurs' },
        { term: 'aging (AChE)', definition: 'The time-dependent dealkylation of the phosphorylated AChE-OP complex that renders enzyme reactivation by oximes impossible; timing varies by specific organophosphate compound' },
        { term: 'phosphine', definition: 'A highly toxic fumigant gas (PH3) generated from aluminum or zinc phosphide; inhibits mitochondrial cytochrome c oxidase; used for stored grain fumigation with no effective antidote' },
        { term: 'NCTB', definition: 'Neurobehavioral Core Test Battery; a WHO-standardized battery of neurobehavioral tests used to detect subclinical neurotoxic effects of occupational chemical exposures' },
        { term: 'cholinesterase depression', definition: 'A quantitative decrease in acetylcholinesterase or butyrylcholinesterase activity from baseline, used as a biomarker of organophosphate or carbamate exposure severity' },
        { term: 'application exclusion zone', definition: 'WPS-mandated buffer area around pesticide application equipment during application; 25 feet for ground application, 100 feet for aerial application, from which all persons must be excluded' },
      ],
      clinicalNotes: `Critical clinical management points:

1. **Atropine dosing in OP poisoning**: The single most common error is under-dosing atropine. Titrate to drying of pulmonary secretions, not to pupil dilation or tachycardia. Pupils may not dilate for hours even with adequate atropinization. Some patients require hundreds of milligrams over the first 24-48 hours.

2. **Pralidoxime timing**: The "aging half-time" is agent-specific and determines the therapeutic window. For soman (nerve agent), aging occurs in minutes; for most agricultural OPs (e.g., parathion, chlorpyrifos), aging takes hours to days. When the specific OP is unknown, administer pralidoxime empirically.

3. **Carbamate poisoning management**: Pralidoxime is generally unnecessary and potentially harmful for carbaryl poisoning (may worsen inhibition). However, if the specific carbamate is uncertain and symptoms are severe, pralidoxime should still be given because OP exposure cannot be ruled out.

4. **Succinylcholine contraindication**: Plasma cholinesterase is responsible for metabolizing succinylcholine. In OP/carbamate poisoning, this enzyme is inhibited, leading to prolonged neuromuscular blockade. Use non-depolarizing agents (rocuronium) if paralysis is needed.

5. **Discharge considerations**: Patients with OP poisoning must be observed for at least 24-72 hours due to risk of delayed respiratory failure (intermediate syndrome) and rebound cholinergic crisis from fat-soluble OP redistribution.`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art pesticide safety integrates precision exposure assessment methodologies, advanced toxicogenomic risk characterization, evidence-based medical surveillance program optimization, and regulatory science advocacy to address evolving challenges from new pesticide chemistries, cumulative exposure models, and climate-driven changes in agricultural pest management patterns.',
      explanation: `## Frontiers in Pesticide Toxicology and Safety

### Precision Exposure Assessment

**Advanced Biomonitoring Technologies:**
- LC-MS/MS multi-residue panels detecting 200+ pesticide metabolites simultaneously
- Dried blood spot (DBS) sampling for field-based exposure assessment
- Silicone wristband personal passive samplers for 24-hour integrated exposure
- Salivary biomonitoring as non-invasive alternative for select compounds
- Hair and nail analysis for cumulative exposure retrospection (months)

**Exposure Modeling Innovations:**
- Physiologically-based pharmacokinetic (PBPK) models for pesticide disposition
- Bayesian exposure reconstruction from sparse biomonitoring data
- GIS-integrated proximity models linking pesticide use reporting (PUR) to residential exposure
- Real-time dermal exposure monitors using fluorescent tracer technology
- Agricultural spray drift modeling with computational fluid dynamics

### Toxicogenomics and Susceptibility

**Genetic Polymorphisms Affecting Pesticide Metabolism:**
- **PON1 (paraoxonase 1)**: Hydrolyzes OP oxons; Q192R and L55M polymorphisms
  - PON1-192QQ: Reduced hydrolysis of chlorpyrifos-oxon, paraoxon
  - Low PON1 activity in neonates (1/3 adult levels) → increased susceptibility
- **CYP450 enzymes**: CYP3A4, CYP1A2 activate OPs to their toxic oxon metabolites
- **Glutathione S-transferases (GSTs)**: GSTM1 and GSTT1 null genotypes reduce detoxification capacity
- **Butyrylcholinesterase variants**: Atypical BuChE (dibucaine-resistant) affects both susceptibility and monitoring interpretation

**Epigenetic Effects:**
- DNA methylation changes at imprinted gene loci following prenatal OP exposure
- Histone modification patterns in agricultural worker lymphocytes
- Transgenerational epigenetic effects observed in animal models
- MicroRNA expression changes as potential early effect biomarkers

### Regulatory Science and Policy

**EPA Cumulative Risk Assessment for Organophosphates:**
- Common mechanism group approach: All OPs share AChE inhibition
- Relative Potency Factor (RPF) methodology: Normalizes all OPs to an index compound
- Aggregate exposure: Combined dietary, residential, and occupational routes
- Probabilistic exposure modeling using Monte Carlo simulation
- 10X FQPA safety factor for children's risk assessment

**International Regulatory Frameworks:**
- Stockholm Convention: Persistent organic pollutant (POP) pesticides
- Rotterdam Convention: Prior Informed Consent for hazardous pesticides
- FAO/WHO Joint Meeting on Pesticide Residues (JMPR): Global MRL establishment
- Globally Harmonized System (GHS): International classification and labeling

### Emerging Pesticide Classes and Health Concerns

**Neonicotinoids:**
- Nicotinic acetylcholine receptor agonists (selective for insect subtypes)
- Growing evidence of developmental neurotoxicity at environmental levels
- Detectable in >50% of US population urine samples (NHANES data)
- EU ban on outdoor use (2018) due to pollinator health concerns

**RNA Interference (RNAi) Pesticides:**
- Double-stranded RNA targeting essential insect genes
- Species-specific mechanism reduces non-target toxicity (theoretically)
- First EPA registration: SmartStax PRO corn (dsRNA for rootworm)
- Human health assessment challenges: Oral bioavailability, off-target siRNA effects

**Biological Pesticides:**
- Bacillus thuringiensis (Bt) proteins
- Spinosyns (spinosad, spinetoram): Nicotinic receptor modulators
- Generally lower mammalian toxicity but not zero risk
- Occupational sensitization and allergic responses to microbial pesticides

### Climate Change Implications for Pesticide Safety

**Altered Pesticide Use Patterns:**
- Increased pest pressure from warming temperatures extends application seasons
- Geographic expansion of tropical pest species into temperate zones
- More frequent fungal disease requiring increased fungicide application
- Water scarcity reducing dilution of pesticide runoff

**Pharmacokinetic Considerations:**
- Heat stress increases dermal absorption through vasodilation and sweating
- Dehydration concentrates pesticide metabolites (affects biomonitoring interpretation)
- Increased ventilation rates in heat increase inhalational dose
- UV degradation of pesticides may generate more toxic photoproducts`,
      keyTerms: [
        { term: 'PON1 polymorphism', definition: 'Genetic variation in paraoxonase 1 enzyme (Q192R, L55M) that determines the rate of organophosphate oxon hydrolysis and thus individual susceptibility to OP toxicity' },
        { term: 'Relative Potency Factor', definition: 'A scaling methodology used in cumulative risk assessment that normalizes the toxicity of all compounds in a common mechanism group to a single index chemical for dose addition' },
        { term: 'PBPK model', definition: 'Physiologically-based pharmacokinetic model; a mathematical framework simulating chemical absorption, distribution, metabolism, and excretion based on tissue-specific physiological parameters' },
        { term: 'FQPA safety factor', definition: 'A 10-fold additional safety factor mandated by the Food Quality Protection Act (1996) for children\'s risk assessment, applied unless reliable data demonstrate children are not more susceptible' },
        { term: 'RNAi pesticide', definition: 'A next-generation pesticide technology using double-stranded RNA to silence essential genes in target pest species through RNA interference, offering potentially species-specific pest control' },
        { term: 'cumulative risk assessment', definition: 'An evaluation of combined risk from multiple chemicals sharing a common mechanism of toxicity, accounting for aggregate exposure from all routes and all chemicals in the group' },
      ],
      clinicalNotes: `Expert-level practice considerations:

1. **PON1 status and clinical decision-making**: While PON1 genotyping is available for research, it is not yet recommended for clinical use in determining work fitness. However, awareness of susceptibility variation is important when counseling patients with unusually severe responses to seemingly modest exposures. Low-activity PON1 genotypes may have 2-10x greater sensitivity to specific OPs.

2. **Interpreting cholinesterase in atypical BuChE carriers**: Approximately 1 in 25 persons is heterozygous for atypical BuChE, resulting in lower baseline plasma cholinesterase. Personal baselines are essential; using population reference ranges may falsely classify these individuals as exposed.

3. **Multi-residue biomonitoring panels**: Modern LC-MS/MS methods can detect 200+ pesticide metabolites in a single urine sample. While powerful for exposure assessment, clinical interpretation requires understanding of half-lives, timing of sample collection, and the distinction between occupational vs. dietary vs. residential sources.

4. **Regulatory consultation**: For complex exposure scenarios, clinicians can contact the NPIC (National Pesticide Information Center, 1-800-858-7378), AAPCC poison control (1-800-222-1222), or their state pesticide regulatory agency for agent-specific guidance on exposure assessment and medical management.

5. **Emerging liability**: Clinicians should be aware that glyphosate litigation (Roundup) has resulted in multi-billion dollar verdicts. Thorough documentation of patient exposure history and clinical findings may be relevant for future medicolegal proceedings.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'epa-worker-protection-standard',
      type: 'guideline',
      title: 'Agricultural Worker Protection Standard (40 CFR Part 170)',
      authors: ['Environmental Protection Agency'],
      source: 'EPA',
      url: 'https://www.epa.gov/pesticide-worker-safety',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-pesticides',
      type: 'website',
      title: 'Pesticide Illness and Injury Surveillance',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/pesticides/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-pesticide-guidelines',
      type: 'guideline',
      title: 'WHO Classification of Pesticides by Hazard',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240005662',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-agricultural-worker-health', targetType: 'topic', relationship: 'parent', label: 'Agricultural Worker Health' },
    { targetId: 'topic-cleaning-product-safety', targetType: 'topic', relationship: 'related', label: 'Cleaning Product Safety' },
  ],

  tags: {
    systems: ['neurological', 'respiratory', 'dermatologic', 'reproductive'],
    topics: ['occupational-medicine', 'toxicology', 'agricultural-health', 'environmental-health'],
    keywords: ['pesticide', 'organophosphate', 'cholinesterase', 'fumigant', 'herbicide', 'insecticide', 'worker protection standard'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
