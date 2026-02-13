/**
 * Cleaning Product Safety - Comprehensive Educational Content
 *
 * Covers health hazards from occupational exposure to cleaning chemicals,
 * including respiratory effects, dermal toxicity, mixing dangers,
 * and protective measures for custodial and housekeeping workers.
 */

import { EducationalContent } from '../types';

export const cleaningProductSafetyContent: EducationalContent = {
  id: 'topic-cleaning-product-safety',
  type: 'topic',
  name: 'Cleaning Product Safety',
  nameEs: 'Seguridad con Productos de Limpieza',
  alternateNames: ['Custodial Worker Chemical Safety', 'Cleaning Chemical Hazards'],

  levels: {
    1: {
      level: 1,
      summary: 'Cleaning products can be harmful if not used correctly. They can irritate your skin, eyes, and lungs, and mixing certain products together can create dangerous gases.',
      explanation: `Cleaning products help keep buildings, hospitals, and homes safe and germ-free. But the same chemicals that kill germs can also hurt the people who use them.

**How cleaning products can hurt you:**

1. **Skin irritation and burns**: Many cleaning products dry out your skin or cause painful rashes. Strong products like oven cleaners and drain openers can cause chemical burns.

2. **Eye damage**: Getting cleaning products in your eyes can cause serious pain and even permanent damage. This is especially true for products with bleach or ammonia.

3. **Breathing problems**: Spraying chemicals creates a mist that you breathe in. Over time, this can cause coughing, wheezing, and even asthma. Think of it like breathing in a cloud of invisible irritants all day long.

4. **Dangerous mixing**: Some cleaning products should NEVER be mixed together:
   - **Bleach + ammonia** = Toxic fumes that can damage your lungs
   - **Bleach + vinegar or acid** = Chlorine gas that can be deadly
   - **Hydrogen peroxide + vinegar** = Can irritate skin and lungs

**How to protect yourself:**

- **Read the label** before using any product - it tells you how to use it safely
- **Wear gloves** to protect your hands from chemicals
- **Open windows** or turn on fans when using cleaning products
- **Never mix products** unless the label specifically says it is safe
- **Use only the amount needed** - more is not better with chemicals
- **Wash your hands** after using cleaning products, even if you wore gloves

**If something goes wrong:**
- **Chemical in eyes**: Rinse with clean water for 15-20 minutes and seek medical help
- **Chemical on skin**: Remove contaminated clothing and rinse skin with water
- **Trouble breathing from fumes**: Move to fresh air immediately
- Call Poison Control: 1-800-222-1222`,
      keyTerms: [
        { term: 'chemical burn', definition: 'Damage to your skin or eyes caused by a strong cleaning product like bleach, drain cleaner, or oven cleaner' },
        { term: 'ventilation', definition: 'Having fresh air moving through a room, like opening windows or using fans, to reduce chemical fumes' },
        { term: 'Safety Data Sheet (SDS)', definition: 'A document that comes with every cleaning product telling you what chemicals are in it, how to use it safely, and what to do if there is an accident' },
        { term: 'toxic fumes', definition: 'Dangerous invisible gases released by chemicals, especially when two products are mixed together' },
        { term: 'PPE', definition: 'Personal Protective Equipment like gloves, goggles, and masks that protect you from chemicals' },
      ],
      analogies: [
        'Cleaning chemicals are like strong medicine - they work well in the right amount, but too much or the wrong combination can be dangerous.',
        'Wearing gloves when using cleaning products is like using a potholder when taking something out of the oven - it creates a barrier between you and something that can hurt you.',
      ],
      patientCounselingPoints: [
        'NEVER mix bleach with ammonia or any acid (vinegar, toilet bowl cleaner) - the fumes can send you to the hospital.',
        'If your hands are dry, cracked, or itchy from cleaning products, you may be developing contact dermatitis. Wear gloves and see a doctor.',
        'If you develop coughing or wheezing that gets worse at work and better on days off, your cleaning products may be causing asthma.',
        'Always have fresh air flowing when using spray products - spray chemicals get into your lungs even if you cannot smell them.',
        'Keep cleaning products in their original containers. Never put them in food or drink containers.',
      ],
    },
    2: {
      level: 2,
      summary: 'Occupational exposure to cleaning products causes respiratory disease, contact dermatitis, and acute chemical injuries, with custodial workers, housekeepers, and healthcare environmental service workers at highest risk.',
      explanation: `## Cleaning Product Hazards

### Who Is at Risk?
- Custodial and janitorial workers
- Housekeepers (hotels, hospitals, residential)
- Healthcare environmental service workers
- Maids and house cleaners
- Food service workers (sanitizers, degreasers)
- Estimated 3.5 million cleaning workers in the US

### Types of Cleaning Chemicals and Their Hazards

| Chemical Type | Common Products | Health Effects |
|--------------|----------------|----------------|
| Bleach (sodium hypochlorite) | Clorox, sanitizers | Eye/skin irritation, respiratory irritation |
| Ammonia | Glass cleaners, floor strippers | Eye/respiratory irritation, chemical burns |
| Quaternary ammonium (quats) | Disinfectant sprays, wipes | Skin sensitization, occupational asthma |
| Hydrochloric acid | Toilet bowl cleaners | Severe burns, respiratory damage |
| Sodium hydroxide (lye) | Oven cleaners, drain openers | Severe caustic burns, eye damage |
| Ethylene glycol monobutyl ether | All-purpose cleaners | CNS effects, kidney/liver toxicity |
| Fragrances and sensitizers | Air fresheners, scented products | Allergic reactions, asthma triggers |

### Routes of Exposure

1. **Inhalation** (most significant for respiratory effects)
   - Spray/aerosol generation during application
   - Vapor release from concentrated products
   - Off-gassing from treated surfaces

2. **Dermal** (most common route overall)
   - Direct contact with undiluted or diluted products
   - Wet work from prolonged water and chemical contact
   - Splash exposure during mixing/pouring

3. **Ocular** (most serious acute injuries)
   - Splash from pouring or spraying
   - Rubbing eyes with contaminated hands
   - Aerosol drift

### Dangerous Chemical Mixing

| Combination | Gas Produced | Symptoms |
|------------|-------------|----------|
| Bleach + ammonia | Chloramine | Cough, chest pain, shortness of breath |
| Bleach + acid | Chlorine | Severe respiratory distress, pulmonary edema |
| Bleach + hydrogen peroxide | Oxygen + chlorine | Irritation, explosive potential |
| Acid + base | Heat + splash | Chemical burns from exothermic reaction |

### Health Effects

**Respiratory:**
- New-onset asthma (cleaning work is a leading cause of occupational asthma)
- Work-exacerbated asthma
- Chronic bronchitis from repeated exposure
- RADS (Reactive Airways Dysfunction Syndrome) from single high-level exposure

**Skin:**
- Irritant contact dermatitis (most common - from wet work and chemicals)
- Allergic contact dermatitis (preservatives, fragrances, rubber gloves)
- Chemical burns from concentrated products

**Eye:**
- Chemical conjunctivitis
- Corneal burns (especially from alkali products)
- Permanent vision damage from untreated alkali exposure

### Prevention Strategies

- **Substitution**: Use less hazardous products when possible (e.g., hydrogen peroxide instead of bleach for some applications)
- **Proper dilution**: Follow manufacturer's instructions exactly
- **Ventilation**: Open windows, use fans, avoid spraying in enclosed spaces
- **PPE**: Chemical-resistant gloves, eye protection for splash risk, respirator for high-exposure tasks
- **Training**: Hazard communication, SDS access, safe use procedures
- **No mixing**: Clear policies and training against mixing products`,
      keyTerms: [
        { term: 'quaternary ammonium compounds', definition: 'A class of disinfectants commonly called "quats" that are widely used in healthcare and food service and are a recognized cause of occupational asthma and skin sensitization', pronunciation: 'KWAH-ter-nary' },
        { term: 'RADS', definition: 'Reactive Airways Dysfunction Syndrome; new-onset asthma-like condition caused by a single exposure to a high concentration of an irritant gas or vapor', pronunciation: 'RADS' },
        { term: 'irritant contact dermatitis', definition: 'Skin inflammation caused by direct chemical irritation without an immune response, common from wet work and repeated exposure to cleaning chemicals' },
        { term: 'GHS labeling', definition: 'The Globally Harmonized System of Classification and Labelling of Chemicals, which standardizes hazard communication through pictograms, signal words, and hazard statements on product labels' },
        { term: 'chloramine gas', definition: 'A toxic gas formed when bleach is mixed with ammonia, causing respiratory irritation, cough, and potentially severe lung injury' },
      ],
      patientCounselingPoints: [
        'Cleaning work is one of the top causes of new asthma in adults. If you develop breathing problems, tell your doctor what chemicals you use at work.',
        'Always dilute concentrated cleaning products according to the label. Using products at higher concentrations does not clean better but does increase health risks.',
        'Chemical-resistant nitrile gloves provide better protection than latex or vinyl for most cleaning chemicals.',
        'If you splash a cleaning product in your eyes, flush with clean water for at least 15-20 minutes and go to the emergency room.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cleaning product occupational health encompasses work-related asthma from quaternary ammonium compounds and other sensitizers, occupational contact dermatitis from wet work and chemical irritants, acute chemical injury from mixing events, and the application of the hierarchy of controls to cleaning operations.',
      explanation: `## Detailed Toxicology of Cleaning Products

### Respiratory Effects: Cleaning and Asthma

**Epidemiological Evidence:**
- European Community Respiratory Health Survey (ECRHS): Cleaning workers have 1.7x risk of new-onset asthma
- Dose-response relationship with spray product use frequency
- Longitudinal studies show accelerated FEV1 decline in professional cleaners
- Risk comparable to heavy smoking for some respiratory outcomes

**Mechanisms of Cleaning-Related Asthma:**

1. **Sensitizer-induced asthma** (immunologic):
   - Quaternary ammonium compounds (benzalkonium chloride)
   - Glutaraldehyde (healthcare disinfection)
   - Isothiazolinones (preservatives in liquid products)
   - Fragrances (limonene, linalool) - can oxidize to sensitizers
   - Mechanism: IgE-mediated or T-cell mediated sensitization

2. **Irritant-induced asthma**:
   - Chlorine and chloramine (bleach, bleach mixing events)
   - Ammonia (glass cleaners, floor strippers)
   - RADS from single high-concentration exposure
   - Mechanism: Direct epithelial damage → neurogenic inflammation

3. **Work-exacerbated asthma**:
   - Pre-existing asthma worsened by non-specific irritants
   - Fragrance-triggered bronchospasm
   - Not a new diagnosis but occupationally relevant

**Diagnostic Approach:**
- Serial peak flow monitoring (work vs. non-work days)
- Specific IgE to quat compounds, glutaraldehyde
- Methacholine challenge with work-related shift in PC20
- FeNO monitoring for eosinophilic inflammation
- Occupational history: Specific products, frequency, ventilation, PPE use

### Contact Dermatitis in Cleaning Workers

**Irritant Contact Dermatitis (ICD):**
- Mechanism: Direct cytotoxic damage to keratinocytes
- Risk factors: Wet work >2 hours/day, detergent exposure, occlusive gloves
- Pathology: Epidermal spongiosis, neutrophilic infiltrate
- Distribution: Dorsal hands, interdigital spaces, wrists
- Prevention: Minimize wet work, barrier creams, cotton glove liners

**Allergic Contact Dermatitis (ACD):**
- Type IV delayed hypersensitivity reaction
- Common allergens in cleaning:
  - Methylisothiazolinone (MI) and methylchloroisothiazolinone (MCI/MI): Preservatives
  - Formaldehyde and formaldehyde releasers: Preservatives in some products
  - Rubber accelerators: Thiurams, carbamates in gloves
  - Fragrances: Balsam of Peru, fragrance mix allergens
- Diagnosis: Patch testing with standard series + occupational additives
- Management: Allergen identification and complete avoidance

### Acute Chemical Injury

**Chloramine Gas Exposure (Bleach + Ammonia):**
- Chloramine (NH2Cl, NHCl2, NCl3): Moderately water-soluble
- Clinical: Onset within minutes; cough, dyspnea, chest tightness, lacrimation
- Severe cases: Bronchospasm, chemical pneumonitis, pulmonary edema (delayed 2-24 hrs)
- Treatment: Fresh air, supplemental oxygen, bronchodilators, observation
- Most cases self-resolve; CXR if symptomatic >6 hours

**Chlorine Gas Exposure (Bleach + Acid):**
- Chlorine gas (Cl2): More toxic than chloramine
- Water-soluble but can penetrate to lower airways at high concentration
- IDLH: 10 ppm (much lower threshold than chloramine)
- Treatment: Same as chloramine plus consideration of ARDS development
- Delayed pulmonary edema possible up to 24-48 hours after exposure

### Hierarchy of Controls Applied to Cleaning

1. **Elimination**: Reduce cleaning frequency where safe (evidence-based cleaning protocols)
2. **Substitution**:
   - Hydrogen peroxide-based products replacing bleach for general disinfection
   - Microfiber technology reducing chemical use
   - Electrolyzed water as an alternative sanitizer
   - Fragrance-free products eliminating sensitizer exposure
3. **Engineering controls**:
   - Dilution control systems (automated mixing)
   - Ventilation improvement in cleaning areas
   - Trigger sprays instead of aerosol cans (larger droplet size)
4. **Administrative controls**:
   - Training on proper dilution and use
   - No-mixing policies with clear labeling
   - Task rotation to limit exposure duration
   - Product inventory management
5. **PPE**: Chemical-resistant gloves, eye protection, respiratory protection for high-exposure tasks`,
      keyTerms: [
        { term: 'methylisothiazolinone (MI)', definition: 'A preservative biocide in liquid cleaning products and personal care products that has become one of the most common causes of allergic contact dermatitis in the past decade', pronunciation: 'METH-il-eye-so-THIGH-ah-zo-lin-own' },
        { term: 'dilution control system', definition: 'An automated chemical dispensing system that mixes concentrated cleaning products with water at the correct ratio, reducing worker contact with concentrated chemicals and ensuring proper dilution' },
        { term: 'RADS', definition: 'Reactive Airways Dysfunction Syndrome; a form of irritant-induced asthma from a single high-level exposure to an irritant, such as chlorine or chloramine gas from a cleaning product mixing event' },
        { term: 'electrolyzed water', definition: 'Water treated by electrolysis to generate hypochlorous acid, a disinfectant alternative that is less irritating than conventional chlorine-based products' },
        { term: 'specific inhalation challenge', definition: 'A controlled exposure test in a specialized laboratory to definitively diagnose sensitizer-induced occupational asthma by reproducing the asthmatic response under medical supervision' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of cleaning product exposures requires understanding of irritant and sensitizer mechanisms in cleaning-related asthma, patch testing protocols for occupational contact dermatitis, acute inhalation injury management, and the design of safer cleaning programs using green chemistry principles and technology-based exposure reduction.',
      explanation: `## Advanced Clinical Management

### Cleaning-Related Asthma: Diagnostic Workup

**Step 1: Establish Asthma Diagnosis**
- Spirometry with bronchodilator reversibility
- If normal: Methacholine challenge (PC20 <8 mg/mL)
- FeNO: Elevated (>50 ppb) suggests eosinophilic inflammation

**Step 2: Determine Work-Relatedness**
- Temporal relationship: Symptoms onset coinciding with cleaning work exposure
- Pattern: Worse at work or after work, improvement on weekends/vacations
- Serial peak flow: 4x daily for ≥2 weeks on and off work
- >20% work-related variability is suggestive

**Step 3: Identify Specific Agent**
- Specific IgE (ImmunoCAP) to available allergens (e.g., glutaraldehyde)
- Skin prick testing (limited panels available for cleaning chemicals)
- Specific inhalation challenge (gold standard, limited availability)
- Product ingredient analysis (SDS review for suspected sensitizers)

**Step 4: Classify the Type**
- Sensitizer-induced OA: Latency period, immunologic mechanism, permanent
- Irritant-induced OA/RADS: Acute onset after irritant event, no latency
- Work-exacerbated asthma: Pre-existing asthma worsened by cleaning exposures

**Management Based on Type:**
- Sensitizer-induced OA: Complete removal from sensitizing agent (essential)
- Irritant-induced OA: May continue with reduced exposure and engineering controls
- Work-exacerbated asthma: Environmental controls to reduce irritant burden
- All types: Standard asthma pharmacotherapy (ICS, SABA, LABA as needed)

### Patch Testing Protocol for Cleaning Workers

**Recommended Series:**
- Standard (baseline) series: 80+ allergens including fragrances, preservatives, rubber chemicals
- Additional panels:
  - Preservative series: MI, MCI/MI, formaldehyde, DMDM hydantoin, bronopol
  - Rubber additives: Thiuram mix, carbamate mix, mercaptobenzothiazole
  - Fragrance series: Extended fragrance allergens
  - Disinfectant series: Glutaraldehyde, benzalkonium chloride, chlorhexidine

**Interpretation Challenges:**
- Active dermatitis may cause false-positive irritant reactions
- "Angry back" syndrome: Widespread patch test positivity from heightened reactivity
- Relevance assessment: Is the identified allergen actually present in the patient's work products?
- SDS cross-referencing essential for establishing clinical relevance

### Acute Inhalation Injury Management

**Chloramine/Chlorine Gas Exposure Protocol:**

| Time from Exposure | Assessment | Intervention |
|--------------------|------------|--------------|
| Immediate | ABCs, remove from exposure | Fresh air, supplemental O2 |
| 0-1 hour | Chest auscultation, SpO2, RR | Bronchodilators if wheezing |
| 1-6 hours | CXR if symptomatic, ABG if SpO2 <94% | IV steroids if severe bronchospasm |
| 6-24 hours | Repeat CXR if initial symptoms | Observe for delayed pulmonary edema |
| 24-48 hours | Discharge if asymptomatic with normal CXR | Follow-up spirometry in 2-4 weeks |

**Disposition Decision:**
- Admit: Persistent hypoxemia, CXR infiltrates, severe bronchospasm
- Observe 6-24 hours: Moderate symptoms, normal initial CXR
- Discharge: Mild symptoms resolving within 2 hours, normal SpO2

### Green Cleaning Programs

**Evidence-Based Safer Chemical Selection:**
- EPA Safer Choice label: Products with ingredients reviewed for lower toxicity
- Green Seal GS-37: Standard for industrial and institutional cleaners
- UL ECOLOGO: Third-party environmental and health certification
- California Cleaning Product Right to Know Act: Ingredient disclosure requirements

**Clinical Evidence for Green Cleaning:**
- Before-after studies in healthcare: Reduced respiratory symptoms in EVS workers
- Reduced irritant contact dermatitis rates with less caustic formulations
- No evidence of reduced cleaning efficacy for approved green products
- Cost-neutral or cost-saving over time (concentrated products, reduced injury claims)

### Occupational Health Program for Cleaning Workers

**Medical Surveillance Elements:**
1. Pre-placement: Respiratory symptom questionnaire, baseline spirometry
2. Annual: Respiratory symptom survey, targeted spirometry
3. Symptom-triggered: Full evaluation for new respiratory or dermal symptoms
4. Post-incident: Evaluation after acute chemical exposure events

**Return-to-Work Considerations:**
- Sensitizer-induced OA: Cannot return to exposure (requires job modification or reassignment)
- ICD: Can return with improved PPE, barrier creams, reduced wet work
- Acute inhalation injury: Return when spirometry normalizes and symptoms resolve
- Patch test-confirmed ACD: Return with specific allergen avoidance (product substitution)`,
      keyTerms: [
        { term: 'EPA Safer Choice', definition: 'An EPA certification program identifying cleaning products formulated with ingredients that have been reviewed for lower toxicity to human health and the environment' },
        { term: 'angry back syndrome', definition: 'A condition where multiple false-positive irritant reactions occur during patch testing due to generalized skin hyperreactivity, requiring careful interpretation and possible retesting' },
        { term: 'serial peak flow monitoring', definition: 'Self-measurement of peak expiratory flow 4 or more times daily over at least 2 weeks on and off work, used to demonstrate work-related variability in airflow obstruction for occupational asthma diagnosis' },
        { term: 'DMDM hydantoin', definition: 'A formaldehyde-releasing preservative used in cleaning and personal care products that can cause allergic contact dermatitis in sensitized individuals' },
        { term: 'delayed pulmonary edema', definition: 'Non-cardiogenic pulmonary edema occurring 2-48 hours after inhalation of water-soluble irritant gases like chlorine and chloramine, requiring observation period even for initially well-appearing patients' },
        { term: 'Green Seal GS-37', definition: 'An independent certification standard for industrial and institutional cleaning products establishing criteria for reduced toxicity, VOC limits, and environmental impact' },
      ],
      clinicalNotes: `Key clinical management points:

1. **Work-related asthma from cleaning**: Cleaning occupations are among the top 3 causes of new-onset occupational asthma. Clinicians should ask ALL patients with new adult-onset asthma about cleaning exposures, both professional and domestic. The European ECRHS study found that even domestic cleaning spray use 1x/week was associated with accelerated FEV1 decline.

2. **Patch testing timing**: Patch testing should not be performed during active acute dermatitis. Wait 2-4 weeks after the acute phase has been treated. Also avoid testing within 4 weeks of systemic corticosteroid use (false negatives) or in areas of recent UV exposure.

3. **Chemical mixing events**: Most cleaning-related chemical exposures seen in EDs are mixing events. Obtain the specific products mixed (have someone photograph the labels). Most bleach-ammonia mixing events cause chloramine exposure (moderate severity); bleach-acid mixing produces chlorine gas (more severe). Both require observation for delayed pulmonary edema.

4. **Quaternary ammonium sensitization**: Quat-induced occupational asthma is increasingly recognized in healthcare EVS workers and food service. Unlike many sensitizers, quats can cause asthma through both immunologic (sensitization) and irritant mechanisms. Specific IgE testing is available for benzalkonium chloride through specialty labs.

5. **Documentation for workers' compensation**: For cleaning-related respiratory or skin disease claims, document specific products used (trade name and active ingredients), frequency and duration of use, ventilation conditions, PPE provided, and temporal relationship between exposure and symptoms. SDS review should be included in the medical record.`,
    },
    5: {
      level: 5,
      summary: 'Frontier research in cleaning product occupational health addresses the exposome approach to cleaning chemical mixtures, endocrine disruption from antimicrobial agents, microbiome perturbation from chronic disinfectant exposure, and the evidence base for green cleaning as a public health intervention in institutional settings.',
      explanation: `## Cutting-Edge Research in Cleaning Product Safety

### The Cleaning Chemical Exposome

**Mixture Effects:**
- Workers are exposed to dozens of chemicals simultaneously during a typical shift
- Traditional risk assessment evaluates chemicals individually
- Mixture toxicology: Additive, synergistic, or antagonistic interactions possible
- Example: Quaternary ammonium + fragrance compounds may have synergistic respiratory sensitization
- Multi-omics approaches (transcriptomics, metabolomics) to characterize biological response to mixtures

**Real-Time Exposure Assessment:**
- Photoionization detector (PID) personal monitors for VOC exposure
- Low-cost air quality sensors for particulate monitoring during cleaning
- Time-activity analysis linking specific tasks to exposure peaks
- Video exposure monitoring correlating work practices with real-time air sampling

### Endocrine Disruption from Cleaning Agents

**Antimicrobial Agents of Concern:**
- Triclosan (now banned in consumer hand soap but still in some products): Thyroid disruption, antibiotic resistance
- Quaternary ammonium compounds: Emerging evidence of reproductive toxicity in animal studies
  - Decreased fertility in rodent models at occupationally relevant exposures
  - Sperm quality effects in male custodial workers (preliminary epidemiological data)
  - Neural tube defects in rodent developmental studies
- Alkylphenol ethoxylates (surfactants): Estrogenic activity

**Research Gaps:**
- Human epidemiological data largely lacking for cleaning chemical endocrine effects
- Occupational exposure levels vs. consumer exposure levels poorly characterized
- Long-term reproductive outcome studies in cleaning workers needed
- Biomonitoring panels for cleaning chemical metabolites underdeveloped

### Microbiome Disruption

**Occupational Antimicrobial Exposure and Microbiome:**
- Chronic biocide exposure may alter skin and respiratory microbiome
- Antimicrobial resistance development in cleaning worker nasal and skin flora
- Gut microbiome effects from occupational ingestion (hand-to-mouth transfer)
- Hygiene hypothesis implications: Excessive antimicrobial use and immune dysregulation

**Healthcare Setting Implications:**
- Environmental microbiome disruption from aggressive disinfection protocols
- Selective pressure favoring resistant organisms (C. difficile, VRE, MRSA)
- Evidence-based cleaning frequency: Emerging data that less may sometimes be more
- Probiotic cleaning products as an emerging alternative (competitive exclusion)

### Green Chemistry and Safer Product Design

**Principles Applied to Cleaning Products:**
- Design for reduced toxicity: Selecting surfactants and solvents with lower hazard profiles
- Concentration optimization: Effective cleaning at lower chemical doses
- pH moderation: Avoiding extreme pH products when possible
- Fragrance-free formulation: Eliminating sensitizer and irritant burden
- Biodegradability: Reducing environmental and occupational exposure persistence

**Emerging Technologies:**
- Electrolyzed oxidizing water (EOW): Hypochlorous acid generation on-site
- UV-C disinfection: Reducing chemical disinfectant requirements
- Antimicrobial copper surfaces: Self-disinfecting materials reducing cleaning frequency
- Steam cleaning: Thermal disinfection without chemicals
- Microfiber technology: Mechanical removal reducing chemical needs by 90%+

### Policy and Regulatory Developments

**Ingredient Disclosure:**
- California Cleaning Product Right to Know Act (SB 258, 2017)
- OSHA Hazard Communication Standard: SDS requirements for all chemicals
- EPA Safer Choice program: Voluntary listing of safer ingredients
- Emerging EU regulations on cleaning product ingredient disclosure

**Occupational Exposure Limits:**
- Most cleaning product ingredients lack specific OELs
- Quaternary ammonium compounds: No OSHA PEL; NIOSH REL in development
- Chloramine: No OSHA PEL; ACGIH TLV-C of 0.5 ppm
- Need for mixture-based OELs reflecting real-world cleaning scenarios

### Health Equity in Cleaning Occupations

**Workforce Demographics:**
- Disproportionately female, immigrant, and minority workers
- Low wages with limited benefits and bargaining power
- High rates of wage theft and labor violations
- Language barriers limiting SDS comprehension and safety training
- Domestic workers excluded from many OSHA protections

**Intervention Models:**
- Community-based participatory research (CBPR) with cleaning worker organizations
- Promotora models adapted for custodial worker health education
- Union-negotiated green cleaning programs (e.g., SEIU janitor campaigns)
- Multilingual training materials using visual and hands-on methods
- Integration of occupational health into domestic worker bill of rights legislation`,
      keyTerms: [
        { term: 'exposome', definition: 'The totality of environmental exposures from conception onward, including the complex mixture of cleaning chemicals encountered simultaneously during occupational cleaning activities' },
        { term: 'electrolyzed oxidizing water', definition: 'Water passed through an electrolytic cell to generate hypochlorous acid and sodium hydroxide, providing an on-site generated disinfectant with lower toxicity than traditional chemical products' },
        { term: 'antimicrobial resistance (cleaning context)', definition: 'The development of microbial resistance to biocidal chemicals used in cleaning products, driven by chronic sub-lethal exposure in healthcare and institutional environments' },
        { term: 'competitive exclusion (probiotic cleaning)', definition: 'An emerging approach using beneficial bacteria in cleaning products to outcompete pathogens on surfaces, potentially reducing both chemical exposure and healthcare-associated infections' },
        { term: 'photoionization detector (PID)', definition: 'A portable instrument that detects volatile organic compounds in air using ultraviolet light to ionize gas molecules, enabling real-time personal exposure monitoring during cleaning tasks' },
        { term: 'community-based participatory research (CBPR)', definition: 'A research approach that equitably involves community members, organizational representatives, and researchers in all aspects of the research process, particularly effective for studying occupational health in marginalized cleaning worker populations' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Quat reproductive toxicity**: Emerging animal data suggest quaternary ammonium compounds at occupationally relevant doses may impair fertility and fetal development. While human data are preliminary, clinicians should consider this when counseling reproductive-age cleaning workers with high quat exposure, particularly in healthcare EVS roles using concentrated quat disinfectants daily.

2. **Cleaning-related asthma and lung function decline**: The ECRHS and other longitudinal studies demonstrate that professional cleaning is associated with FEV1 decline rates equivalent to 10-20 pack-years of smoking. This argues for aggressive primary prevention (product substitution, engineering controls) rather than relying solely on PPE.

3. **Methylisothiazolinone epidemic**: MI has become one of the most common contact allergens identified on patch testing, with prevalence increasing dramatically since 2005. It is present in numerous cleaning products, paints, and industrial fluids. When patch testing cleaning workers, use both MI alone (at 2000 ppm) and MCI/MI (at 100 ppm) as they are distinct sensitizations.

4. **Green cleaning evidence base**: Systematic reviews of green cleaning programs in healthcare settings demonstrate comparable infection control outcomes with reduced worker respiratory and dermal symptoms. This evidence supports institutional green cleaning adoption as an occupational health intervention without compromising patient safety.

5. **Domestic cleaning exposure**: Increasingly recognized that domestic (non-occupational) cleaning product use has measurable respiratory health effects. The ECRHS found weekly spray product use was associated with accelerated FEV1 decline even in non-professional cleaners. Counsel patients with asthma to reduce spray product use at home.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-cleaning-chemicals',
      type: 'website',
      title: 'Cleaning Chemicals and Your Health',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/cleaning-chemicals',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-cleaning',
      type: 'website',
      title: 'Cleaning and Disinfecting in Healthcare and Other Settings',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/cleaning/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-chemical-safety',
      type: 'website',
      title: 'Chemical Safety - Cleaning Products',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/news-room/fact-sheets/detail/chemicals-and-health',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-restaurant-food-service-health', targetType: 'topic', relationship: 'related', label: 'Restaurant & Food Service Health' },
    { targetId: 'topic-pesticide-safety', targetType: 'topic', relationship: 'related', label: 'Pesticide Safety' },
  ],

  tags: {
    systems: ['respiratory', 'dermatologic', 'ocular'],
    topics: ['occupational-medicine', 'toxicology', 'chemical-safety', 'preventive-medicine'],
    keywords: ['cleaning products', 'quaternary ammonium', 'chloramine', 'occupational asthma', 'contact dermatitis', 'green cleaning'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
