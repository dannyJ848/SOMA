/**
 * Allergic Rhinitis - Comprehensive Educational Content
 *
 * Covers seasonal and perennial allergic rhinitis, pathophysiology,
 * diagnosis, avoidance measures, pharmacotherapy, and immunotherapy.
 */

import { EducationalContent } from '../../types';

export const allergicRhinitis: EducationalContent = {
  id: 'condition-allergic-rhinitis',
  type: 'condition',
  name: 'Allergic Rhinitis',
  nameEs: 'Rinitis Alérgica',
  alternateNames: ['Hay Fever', 'Seasonal Allergies', 'Perennial Rhinitis', 'Nasal Allergies', 'Allergic Rhinosinusitis'],
  hpoId: 'HP:0003193',

  levels: {
    1: {
      level: 1,
      summary: 'Allergic rhinitis is an allergic reaction that causes sneezing, runny or stuffy nose, and itchy eyes when your immune system overreacts to harmless substances like pollen or pet dander.',
      explanation: `## What is Allergic Rhinitis?

**Allergic rhinitis** is when your nose becomes stuffy, runny, or sneezy because of an allergy. It is commonly called "hay fever" (even though it has nothing to do with hay or fever).

**Think of it like this:**
Your immune system is like a security guard. In people with allergies, the security guard overreacts to harmless things like pollen or pet dander, treating them like dangerous invaders.

## Common Allergens (Triggers)

**Outdoor allergens (cause seasonal allergies):**
- Tree pollen (spring)
- Grass pollen (late spring and summer)
- Weed pollen (especially ragweed in late summer and fall)

**Indoor allergens (cause year-round allergies):**
- Dust mites (tiny bugs in dust)
- Pet dander (skin flakes from pets)
- Mold (damp areas like bathrooms)
- Cockroach droppings

## Signs and Symptoms

**Common symptoms:**
- Runny nose with clear mucus
- Stuffy, blocked nose
- Sneezing (often in bursts)
- Itchy nose, throat, or eyes
- Watery, red, itchy eyes
- Coughing
- Post-nasal drip (mucus dripping down throat)

**"Allergic salute":**
- Children with allergies often rub their nose upward with their palm
- This can cause a crease across the nose

**Allergic shiners:**
- Dark circles under the eyes from congestion
- Swelling under the eyes

## Seasonal vs Year-Round

**Seasonal allergic rhinitis (hay fever):**
- Symptoms only during certain times of the year
- Usually spring and fall when pollen counts are high
- Outdoor allergens are the trigger

**Perennial allergic rhinitis:**
- Symptoms year-round
- Indoor allergens are usually the trigger
- Dust mites, pets, mold

## How is it Diagnosed?

A doctor can diagnose allergies by:
1. **Asking about symptoms** and when they occur
2. **Examining you** to look for signs of allergies
3. **Allergy testing:**
   - Skin prick test: Small drops of allergens placed on skin, gently pricked
   - Blood test: Measures antibodies to specific allergens

## Treatment

**Avoidance (best approach):**
- Stay indoors when pollen counts are high
- Keep windows closed during allergy season
- Use air conditioning
- Remove carpets and stuffed animals from bedroom
- Wash bedding in hot water weekly
- Keep pets out of the bedroom

**Medicines to help:**

**Antihistamines:**
- Help with sneezing, itching, and runny nose
- Examples: cetirizine (Zyrtec), loratadine (Claritin), fexofenadine (Allegra)
- Some can make you drowsy

**Nasal sprays:**
- **Steroid sprays:** Help with all symptoms, most effective
  - Examples: fluticasone (Flonase), triamcinolone (Nasacort)
- **Antihistamine sprays:** Help with runny nose and sneezing
  - Example: azelastine (Astelin)

**Decongestants:**
- Help with stuffy nose
- Example: pseudoephedrine (Sudafed)
- Can increase heart rate and blood pressure

**Eye drops:**
- For itchy, watery eyes
- Examples: ketotifen (Zaditor), olopatadine (Pataday)

**Allergy shots (immunotherapy):**
- Regular injections of small amounts of allergen
- Helps your body get used to the allergen
- Can provide long-term relief
- Usually given for 3-5 years

## Home Remedies

- **Nasal rinses:** Saltwater rinse to clear allergens
- **HEPA filters:** Clean air in your home
- **Humidifier:** If air is dry (but avoid if mold is a trigger)
- **Cool compress:** On eyes for itching
- **Shower at night:** Wash off pollen before bed

## Complications

Allergic rhinitis can lead to:
- **Sinus infections:** Blocked sinuses can become infected
- **Ear infections:** Especially in children
- **Sleep problems:** Stuffy nose makes breathing hard at night
- **Asthma flare-ups:** Many people with allergies also have asthma
- **Poor school or work performance:** Due to poor sleep and symptoms

## Prevention Tips

- Know your triggers and avoid them
- Check pollen counts before outdoor activities
- Take medication before allergy season starts
- Keep windows closed during high pollen times
- Use allergy-proof covers on pillows and mattresses
- Wash hands and face after being outdoors
- Change clothes after being outdoors
- Shower before bed to wash off pollen

## When to See a Doctor

See a doctor if:
- Symptoms interfere with daily life
- Over-the-counter medicines don't help
- You have side effects from medicines
- You have symptoms year-round
- You also have asthma
- Sinus infections develop frequently`,
      keyTerms: [
        { term: 'allergic rhinitis', definition: 'Allergic reaction causing runny nose, sneezing, and itching; commonly called hay fever' },
        { term: 'allergen', definition: 'A substance that triggers an allergic reaction, such as pollen or pet dander' },
        { term: 'pollen', definition: 'Tiny powder from plants that can cause allergies' },
        { term: 'dust mites', definition: 'Tiny bugs that live in dust and can cause allergies' },
        { term: 'antihistamine', definition: 'Medicine that blocks histamine to reduce allergy symptoms' },
      ],
      analogies: [
        'Your immune system is like a security guard that overreacts to harmless things like pollen.',
        'Allergies are like having an overly sensitive car alarm that goes off when a leaf blows by.',
      ],
      examples: [
        'Someone who sneezes and has itchy eyes every spring might be allergic to tree pollen.',
        'A person who has a stuffy nose year-round might be allergic to dust mites in their home.',
      ],
      patientCounselingPoints: [
        'Start allergy medicines before allergy season begins for best results',
        'Nasal sprays often work better than pills for nasal congestion',
        'It may take a few weeks of regular use to see full benefit from nasal steroid sprays',
        'Avoidance of allergens is the most effective treatment',
        'Shower at night to wash pollen off before bed',
        'Keep windows closed during high pollen times, use air conditioning instead',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic rhinitis is an IgE-mediated inflammatory response of the nasal mucosa to allergens, classified as seasonal (intermittent) or perennial (persistent), requiring a combination of allergen avoidance, pharmacotherapy, and immunotherapy for optimal management.',
      explanation: `## Pathophysiology

**Allergic cascade:**
1. **Sensitization:** First exposure to allergen leads to IgE production
2. **IgE binding:** IgE antibodies attach to mast cells and basophils
3. **Re-exposure:** Allergen cross-links IgE on mast cells
4. **Degranulation:** Mast cells release inflammatory mediators:
   - **Histamine:** Causes itching, sneezing, rhinorrhea
   - **Leukotrienes:** Cause congestion
   - **Prostaglandins:** Cause inflammation
   - **Cytokines:** Attract inflammatory cells

**Early phase response:**
- Occurs within minutes
- Mediated by histamine
- Symptoms: Sneezing, itching, rhinorrhea

**Late phase response:**
- Occurs 4-6 hours later
- Mediated by leukotrienes, cytokines
- Symptoms: Congestion, inflammation

## Classification

### Based on Timing

**Seasonal allergic rhinitis (intermittent):**
- Symptoms < 4 days per week OR < 4 weeks
- Triggered by outdoor allergens
- Tree, grass, weed pollens
- Outdoor mold spores

**Perennial allergic rhinitis (persistent):**
- Symptoms ≥ 4 days per week AND ≥ 4 weeks
- Triggered by indoor allergens
- Dust mites, pet dander, cockroach, indoor mold

### Based on Severity

**Mild:**
- Normal sleep and daily activities
- No impairment

**Moderate to severe:**
- Sleep disturbance
- Impairment of daily activities
- School or work problems

## Common Allergens

### Outdoor Allergens (Seasonal)

**Tree pollen (February-April):**
- Oak, maple, birch, cedar, elm
- Earlier in southern regions

**Grass pollen (April-July):**
- Bermuda, Timothy, Kentucky bluegrass
- Late afternoon and early evening peak

**Weed pollen (August-October):**
- Ragweed (most common)
- Pigweed, sheep sorrel

### Indoor Allergens (Perennial)

**Dust mites:**
- *Dermatophagoides pteronyssinus* and *D. farinae*
- Thrive in warm, humid environments
- Found in bedding, carpets, upholstery
- Waste particles are allergenic

**Pet dander:**
- Cats: Major allergen is Fel d 1 (found in saliva, sebaceous glands)
- Dogs: Major allergen is Can f 1
- Dander persists for months after pet removal

**Cockroach:**
- Allergens in droppings, saliva, body parts
- More common in urban areas
- Bla g 1 and Bla g 2 major allergens

**Indoor mold:**
- *Aspergillus*, *Penicillium*, *Cladosporium*
- Damp areas: bathrooms, basements
- Air conditioning systems

## Clinical Presentation

### Symptoms

**Nasal symptoms:**
- Rhinorrhea (clear, watery discharge)
- Nasal congestion (most bothersome symptom)
- Sneezing (often paroxysmal)
- Nasal itching

**Ocular symptoms:**
- Itching
- Redness
- Tearing
- Swelling (allergic shiners)

**Other symptoms:**
- Post-nasal drip
- Cough
- Itchy palate or throat
- Fatigue
- Sleep disturbance

### Physical Examination Findings

**Nasal examination:**
- Pale, boggy, edematous turbinates
- Clear rhinorrhea
- Nasal crease from allergic salute
- Deviated septum may coexist

**Ocular findings:**
- Conjunctival injection
- Chemosis (conjunctival swelling)
- Dennie-Morgan lines (creases under lower eyelids)
- Allergic shiners (dark circles)

**Other findings:**
- Mouth breathing
- Midface hypoplasia (long-standing nasal congestion in children)
- Eustachian tube dysfunction signs

## Diagnosis

### Clinical Diagnosis

**History:**
- Symptom pattern and timing
- Trigger identification
- Impact on daily life
- Response to medications
- Family history of atopy
- Environmental exposures

**Physical examination:**
- Nasal cavity examination
- Eye examination
- Examination for complications (sinusitis, polyps)

### Allergy Testing

**Skin prick testing:**
- Most common, cost-effective
- Results in 15-20 minutes
- High sensitivity and specificity
- Tests multiple allergens simultaneously
- Contraindications: Severe eczema, inability to stop antihistamines

**Specific IgE testing (blood test):**
- Radioallergosorbent test (RAST)
- ImmunoCAP assay
- Not affected by antihistamines
- More expensive
- Slightly lower sensitivity

**Interpretation:**
- Correlate with clinical history
- Positive test alone does not diagnose allergy
- Must have symptoms + exposure + positive test

## Differential Diagnosis

**Other causes of rhinitis:**
- **Vasomotor rhinitis:** Non-allergic, triggered by irritants, temperature change
- **Infectious rhinitis:** Viral URIs
- **Hormonal rhinitis:** Pregnancy, hypothyroidism
- **Drug-induced rhinitis:** ACE inhibitors, topical decongestant overuse
- **Structural:** Deviated septum, nasal polyps, adenoid hypertrophy

## Treatment

### Allergen Avoidance

**First-line and always recommended**

**Dust mite avoidance:**
- Encase mattresses and pillows in allergen-impermeable covers
- Wash bedding weekly in hot water (> 130°F/54°C)
- Remove carpets from bedroom
- Reduce indoor humidity to < 50%
- HEPA-filter vacuum cleaner

**Pet dander avoidance:**
- Remove pet from home (most effective)
- If unable: Keep pet out of bedroom
- HEPA air filters
- Wash pet weekly
- Remove carpets and upholstery

**Pollen avoidance:**
- Keep windows closed during pollen season
- Use air conditioning
- Avoid outdoor activities during high pollen times
- Shower after outdoor exposure
- Change clothes after being outdoors

### Pharmacotherapy

**Oral antihistamines:**

| Medication | Dose (adults) | Sedation |
|-------------|---------------|----------|
| Cetirizine (Zyrtec) | 10 mg daily | Mild |
| Loratadine (Claritin) | 10 mg daily | Minimal |
| Fexofenadine (Allegra) | 180 mg daily | None |
| Levocetirizine (Xyzal) | 5 mg daily | Mild |
| Desloratadine (Clarinex) | 5 mg daily | Minimal |

**Intranasal corticosteroids (most effective single agent):**

| Medication | Dose |
|-------------|------|
| Fluticasone propionate (Flonase) | 2 sprays each nostril daily |
| Mometasone (Nasonex) | 2 sprays each nostril daily |
| Triamcinolone (Nasacort) | 2 sprays each nostril daily |
| Budesonide (Rhinocort) | 2 sprays each nostril daily |

**Intranasal antihistamines:**
- Azelastine (Astelin, Astepro): 1-2 sprays each nostril daily
- Olopatadine (Pataday): 1 spray each nostril daily
- Can cause bitter taste

**Decongestants:**
- Oral: Pseudoephedrine 30-60 mg q4-6h (avoid in hypertension)
- Topical: Oxymetazoline (Afrin) - max 3 days to avoid rhinitis medicamentosa

**Leukotriene receptor antagonists:**
- Montelukast (Singulair): 10 mg daily
- Alternative for patients with concomitant asthma
- Less effective than intranasal steroids

**Mast cell stabilizers:**
- Cromolyn nasal spray: 1 spray each nostril q4-6h
- Less effective, requires frequent dosing

**Combination therapy:**
- Intranasal steroid + intranasal antihistamine
- Oral antihistamine + intranasal steroid
- Individualize based on symptoms and response

### Immunotherapy

**Indications:**
- Poor response to avoidance and medications
- Side effects from medications
- Desire to avoid long-term medications
- Prevent progression to asthma (controversial)

**Subcutaneous immunotherapy (SCIT):**
- Allergy shots
- Build-up phase: Weekly injections for 3-6 months
- Maintenance phase: Monthly injections for 3-5 years
- Effective for 80-90% of patients
- Risk of anaphylaxis (requires observation period)

**Sublingual immunotherapy (SLIT):**
- Allergy tablets or drops under tongue
- Daily home administration
- Approved for: Grass, ragweed, dust mite (tablets)
- Fewer systemic reactions than SCIT
- Less data on long-term efficacy

## Complications

**Quality of life:**
- Sleep disturbance
- Daytime fatigue
- Impaired concentration
- School/work absenteeism
- Reduced productivity

**Associated conditions:**
- **Asthma:** 20-40% of allergic rhinitis patients
- **Sinusitis:** Obstructed ostia lead to infection
- **Otitis media:** Eustachian tube dysfunction
- **Nasal polyps:** In chronic inflammation
- **Dental malocclusion:** Mouth breathing in children

**Impact on asthma:**
- Uncontrolled allergic rhinitis worsens asthma
- Treating allergic rhinitis improves asthma control
- "United airways" concept`,
      keyTerms: [
        { term: 'allergic rhinitis', definition: 'IgE-mediated inflammation of nasal mucosa in response to allergen exposure' },
        { term: 'IgE', definition: 'Immunoglobulin E; antibody type involved in allergic reactions', pronunciation: 'immunoglobulin E' },
        { term: 'sensitization', definition: 'Initial immune response to allergen leading to IgE production; first step in developing allergy' },
        { term: 'mast cells', definition: 'Immune cells containing histamine; degranulate during allergic reaction' },
        { term: 'allergen', definition: 'Substance that triggers IgE-mediated allergic response' },
        { term: 'immunotherapy', definition: 'Treatment that gradually exposes immune system to allergen to induce tolerance; allergy shots' },
      ],
      analogies: [
        'The allergic cascade is like a security system with many steps - interrupting any step can stop the allergic reaction.',
        'Intranasal corticosteroids are like fire extinguishers for the inflammation in your nose.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergic rhinitis is an IgE-mediated inflammatory disorder requiring systematic evaluation, identification of specific allergens through testing, and comprehensive management including environmental control, targeted pharmacotherapy, and immunotherapy for refractory disease.',
      explanation: `## Immunopathogenesis

### Allergic Cascade: Molecular Details

**Sensitization phase:**
- Allergen presentation by dendritic cells in nasal mucosa
- Activation of naive T-cells toward Th2 phenotype
- Th2 cytokines: IL-4, IL-5, IL-13
- IL-4 and IL-13 drive B-cell class switching to IgE
- IgE binds to FcεRI receptors on mast cells and basophils

**Effector phase (re-exposure):**
- Allergen cross-links membrane-bound IgE
- Mast cell degranulation within minutes
- Pre-formed mediator release:
  - Histamine (H1 receptor effects: sneezing, itching, rhinorrhea)
  - Tryptase
  - Chymase
  - Heparin
  - TNF-alpha

**Newly synthesized mediators:**
- Leukotrienes (LTC4, LTD4, LTE4): Potent bronchoconstrictors, increase vascular permeability
- Prostaglandin D2 (PGD2): Vasodilation, chemotaxis
- Platelet-activating factor (PAF)
- Cytokines: IL-4, IL-5, IL-6, IL-13, TNF-alpha, GM-CSF

**Late phase reaction:**
- 4-6 hours after allergen exposure
- Attracted inflammatory cells: Eosinophils, basophils, neutrophils, T-cells
- Eosinophil major basic protein causes tissue damage
- Sustained inflammation, hyperresponsiveness

### Genetic and Environmental Factors

**Heritability:**
- 40-60% heritability
- Multiple genes involved
- Filaggrin mutations (FLG) associated with atopy
- IL-4 receptor alpha chain polymorphisms
- HLA associations

**Epigenetic factors:**
- Gene-environment interactions
- Microbiome influences immune development

**Environmental risk factors:**
- Western lifestyle (hygiene hypothesis)
- Reduced early childhood infections
- Antibiotic use in early life
- Diet changes
- Pollution exposure
- Tobacco smoke exposure

## Clinical Evaluation

### Phenotypes

**Seasonal allergic rhinitis:**
- Tree pollen: February-April
- Grass pollen: April-July
- Weed pollen: August-October (ragweed peak)
- Outdoor molds: Summer and fall

**Perennial allergic rhinitis:**
- Dust mites: Year-round, worse in humid conditions
- Pets: Year-round, worse with indoor exposure
- Cockroach: Urban areas, year-round
- Indoor molds: Year-round, worse in damp conditions

**Local allergic rhinitis:**
- Negative systemic IgE testing
- Positive nasal provocation testing
- Elevated nasal IgE
- May account for up to 25% of non-allergic rhinitis

### Diagnosis

**Clinical assessment:**
- Detailed history: Triggers, timing, duration
- Impact on quality of life (sleep, work, school)
- Previous treatments and response
- Comorbidities (asthma, eczema)
- Family history

**Physical examination:**
- Anterior rhinoscopy
- Nasal endoscopy if polyps or structural issues suspected
- Eye examination for conjunctival involvement
- Examination for complications

**Diagnostic criteria (ARIA):**
- Typical symptoms PLUS
- Allergen exposure documented OR
- Positive allergy test

### Allergy Testing

**Skin prick testing (SPT):**
- Technique: Drop of allergen extract, prick through skin
- Positive result: Wheal ≥ 3 mm larger than negative control
- Histamine positive control
- Saline negative control
- Timing: Read at 15-20 minutes

**Advantages:**
- Cost-effective
- Immediate results
- High sensitivity
- Visible to patient

**Limitations:**
- Affected by antihistamines (stop 3-7 days before)
- Dermatographism may cause false positives
- Requires clinical correlation

**Specific IgE testing (ImmunoCAP):**
- Quantitative measurement
- Unaffected by antihistamines
- Useful when SPT not possible
- Higher cost

**Interpretation challenges:**
- Sensitization vs clinical allergy
- Positive test without symptoms = sensitization only
- Must correlate with exposure and symptoms

## Treatment Algorithms

### ARIA Classification and Treatment

**ARIA classification (based on duration and severity):**

| Duration | Severity | Impact | Treatment approach |
|----------|----------|--------|-------------------|
| Intermittent | Mild | None | As needed antihistamine |
| Intermittent | Moderate-severe | Yes | Daily intranasal steroid |
| Persistent | Mild | Some | Daily intranasal steroid |
| Persistent | Moderate-severe | Significant | Intranasal steroid + antihistamine |

### Stepwise Approach

**Step 1: Mild intermittent disease**
- Oral second-generation antihistamine PRN
- Intranasal antihistamine PRN
- Cromolyn PRN (less effective)

**Step 2: Mild persistent or moderate-severe intermittent**
- Daily intranasal corticosteroid (INCS)
- Consider adding oral antihistamine
- Intranasal antihistamine alternative

**Step 3: Moderate-severe persistent**
- Intranasal corticosteroid + oral antihistamine
- Consider adding intranasal antihistamine
- Consider leukotriene receptor antagonist
- Consider decongestant short-term

**Step 4: Refractory disease**
- Optimize INCS technique and compliance
- Consider combination INCS + intranasal antihistamine
- Consider short course oral corticosteroids
- Evaluate for immunotherapy

### Intranasal Corticosteroids: First-Line

**Mechanism:**
- Reduce inflammatory cytokine production
- Decrease eosinophil survival
- Reduce vascular permeability
- Down-regulate inflammatory genes

**Comparative efficacy:**
- Most effective monotherapy for allergic rhinitis
- Superior to oral antihistamines for congestion
- Superior to leukotriene antagonists
- Onset of action: 12 hours, full benefit 1-2 weeks

**Proper technique:**
- Shake bottle
- Clear nose gently before use
- Head tilted forward slightly
- Direct spray away from septum (toward ear)
- Sniff gently, do not sniff hard
- Do not blow nose immediately after

**Specific agents:**
- Fluticasone propionate, mometasone, triamcinolone: OTC
- All have similar efficacy
- Mometasone and fluticasone have lowest systemic absorption

### Antihistamines

**Second-generation oral antihistamines:**
- Mechanism: H1 receptor blockade
- Less sedating than first-generation
- Comparable efficacy among agents

**Intranasal antihistamines:**
- Azelastine, olopatadine
- Faster onset than oral (15-30 minutes)
- More effective for congestion than oral
- Side effect: Bitter taste (use proper technique)

**Topical ocular antihistamines:**
- Ketotifen, olopatadine, pataday
- For ocular symptoms
- Can be combined with nasal therapy

### Decongestants

**Oral decongestants:**
- Pseudoephedrine, phenylephrine
- Mechanism: Alpha-1 adrenergic agonist
- Effective for congestion
- Side effects: Insomnia, irritability, hypertension, tachycardia
- Contraindications: Hypertension, BPH, CAD

**Topical decongestants:**
- Oxymetazoline, phenylephrine
- Max 3 days to avoid rhinitis medicamentosa
- Rebound congestion with prolonged use

### Leukotriene Receptor Antagonists

**Montelukast:**
- Mechanism: CysLT1 receptor blockade
- Indicated for allergic rhinitis and asthma
- Less effective than INCS for rhinitis
- Alternative for:
  - Patients with asthma and allergic rhinitis
  - Patients who cannot use INCS
- Side effects: Neuropsychiatric (rare), headache

## Immunotherapy

### Indications

**Evidence supports:**
- Symptomatic despite appropriate medical therapy
- Side effects from medications
- Desire to avoid long-term medications
- Disease duration > 2 years
- Preventing progression to asthma (ongoing research)

**Contraindications:**
- Uncontrolled asthma
- Beta-blocker use (relative)
- Autoimmune disease (relative)
- Pregnancy (initiation)
- Severe cardiac disease

### Subcutaneous Immunotherapy (SCIT)

**Mechanism:**
- Induces T-reg cells
- Increases IgG blocking antibodies
- Decreases IgE over time
- Shifts from Th2 to Th1 response

**Protocol:**
- **Build-up phase:**
  - Weekly injections
  - Increasing allergen dose
  - Duration: 3-6 months (conventional) or 8-12 weeks (cluster)

- **Maintenance phase:**
  - Monthly injections
  - Duration: 3-5 years
  - Symptom improvement continues after discontinuation

**Efficacy:**
- 80-90% of patients respond
- Reduces medication use
- Prevents new sensitizations
- May prevent asthma development

**Safety:**
- Local reactions: Common, expected
- Systemic reactions: 0.1-0.3% of injections
- Anaphylaxis: Rare, treatable with epinephrine
- Observation period: 30 minutes post-injection

### Sublingual Immunotherapy (SLIT)

**Mechanism:** Similar to SCIT

**Forms:**
- Tablets: FDA-approved for grass, ragweed, dust mite
- Drops: Off-label, various allergens

**Protocol:**
- Daily home administration
- First dose in clinic (observation)
- Duration: 3-5 years

**Advantages:**
- Home administration
- Lower systemic reaction rate
- No injections

**Disadvantages:**
- Fewer allergens available
- Less long-term data
- Local side effects common (oral itching, swelling)

## Complications

**Quality of life impact:**
- Sleep disturbance and fatigue
- Impaired concentration and learning
- Reduced work productivity
- Increased healthcare utilization

**Comorbidities:**
- **Asthma:** 20-40% association
- **Sinusitis:** Obstructed ostia predispose
- **Otitis media:** Eustachian tube dysfunction
- **Nasal polyps:** Chronic inflammation
- **Dental malocclusion:** Mouth breathing in children

**Disease progression:**
- Atopic march: Atopic dermatitis → allergic rhinitis → asthma
- Early intervention may prevent progression`,
      keyTerms: [
        { term: 'Th2 phenotype', definition: 'T-helper 2 cell response characterized by IL-4, IL-5, IL-13 production; drives allergic inflammation' },
        { term: 'FcεRI receptor', definition: 'High-affinity IgE receptor on mast cells and basophils; cross-linking triggers degranulation' },
        { term: 'local allergic rhinitis', definition: 'Phenotype with negative systemic IgE but positive nasal provocation and elevated nasal IgE' },
        { term: 'ARIA', definition: 'Allergic Rhinitis and its Impact on Asthma; international classification and treatment guideline' },
        { term: 'rhinitis medicamentosa', definition: 'Rebound congestion from prolonged topical decongestant use' },
        { term: 'atopic march', definition: 'Progression of atopic disease from eczema to allergic rhinitis to asthma' },
      ],
      clinicalNotes: 'Intranasal corticosteroids are first-line for persistent allergic rhinitis. Proper technique essential (direct away from septum, sniff gently). Onset 12 hours, full benefit 1-2 weeks. Second-generation oral antihistamines for mild disease. Immunotherapy for refractory cases: 3-5 years duration, prevents new sensitizations. Consider asthma in all patients (united airways).',
    },
    4: {
      level: 4,
      summary: 'Allergic rhinitis management integrates environmental control, evidence-based pharmacotherapy targeting specific inflammatory pathways, and immunotherapy for refractory disease, with consideration of comorbid conditions including asthma and sinusitis.',
      explanation: `## Evidence-Based Management

### Intranasal Corticosteroid Evidence

**Meta-analysis data:**
- Most effective monotherapy for allergic rhinitis
- Superior to oral antihistamines for congestion (NNT 3-5)
- Superior to leukotriene antagonists for all symptoms
- Onset: 12 hours for initial effect
- Maximal benefit: 1-2 weeks of regular use

**Head-to-head comparisons:**
- All INCS have similar efficacy
- Mometasone and fluticasone furoate: Lowest systemic bioavailability
- Triamcinolone: Higher systemic absorption
- No significant difference in clinical outcomes

**Proper technique impact:**
- Up to 50% of patients use incorrect technique
- Common errors:
  - Not clearing nose before use
  - Spraying toward septum (causes epistaxis)
  - Sniffing too hard (drug goes to throat)
  - Blowing nose immediately after use

### Antihistamine Selection

**Second-generation oral antihistamines:**

| Agent | Sedation | Onset | Duration |
|-------|----------|-------|----------|
| Cetirizine | Mild-moderate | 1 h | 24 h |
| Levocetirizine | Mild | 1 h | 24 h |
| Loratadine | Minimal | 2-3 h | 24 h |
| Desloratadine | Minimal | 3 h | 24 h |
| Fexofenadine | None | 2 h | 12 h |

**Clinical application:**
- Fexofenadine: No sedation, good for occupations requiring alertness
- Cetirizine/levocetirizine: Slightly better efficacy, some sedation
- No significant difference in efficacy among agents

**Intranasal antihistamines:**
- Azelastine, olopatadine
- Faster onset than oral (15-30 min)
- More effective for congestion than oral
- Side effect: Bitter taste (mitigate by tilting head forward, not sniffing)
- Evidence: Equivalent to oral antihistamine for sneezing, itching, rhinorrhea; superior for congestion

### Combination Therapy Evidence

**INCS + intranasal antihistamine:**
- Single product (Dymista): Fluticasone + azelastine
- Superior to either component alone
- Onset: 30 minutes (faster than INCS alone)
- Indicated for moderate-severe disease

**INCS + oral antihistamine:**
- Better than INCS alone for itching, sneezing, rhinorrhea
- No additional benefit for congestion
- Common combination in clinical practice

**Montelukast + antihistamine:**
- Additive benefit in some studies
- Less effective than INCS
- Useful in patients with concomitant asthma

### Decongestant Considerations

**Oral decongestant evidence:**
- Pseudoephedrine effective for congestion
- Phenylephrine poor bioavailability at oral doses
- Risks: Hypertension, tachycardia, insomnia, urinary retention
- Limit duration: Short-term only (≤ 3 days)

**Topical decongestant risks:**
- Rhinitis medicamentosa with > 3 days use
- Rebound congestion due to down-regulation of receptors
- Treatment: Stop topical decongestant, start INCS
- Consider short course oral steroids if severe

## Special Populations

### Pediatric Considerations

**Age-appropriate medications:**
- < 2 years: Limited options, avoid most OTC products
- 2-6 years: Cetirizine, loratadine; fluticasone INCS
- 6-12 years: All second-generation antihistamines; most INCS
- > 12 years: Adult dosing

**Pediatric immunotherapy:**
- SCIT effective and safe in children ≥ 5 years
- SLIT approved for grass (≥ 5 years), ragweed (≥ 18 years)
- May prevent asthma development
- Prevents new sensitizations

**Growth concerns:**
- INCS: Minimal systemic absorption at recommended doses
- Monitor growth if long-term high-dose use
- Risk-benefit favors treatment over untreated allergic rhinitis

### Pregnancy

**Safety categories:**
- **Category B:** Loratadine, cetirizine, intranasal corticosteroids
- **Category C:** Fexofenadine, montelukast
- **Avoid:** Decongestants, first-generation antihistamines

**Treatment principles:**
- Avoid allergens when possible
- Use topical therapy preferred over systemic
- Loratabine: Best studied in pregnancy
- INCS: Safe at recommended doses
- Avoid initiating immunotherapy during pregnancy

### Asthma and Allergic Rhinitis

**"United airways" concept:**
- 20-40% of allergic rhinitis patients have asthma
- 80% of asthmatics have allergic rhinitis
- Treating allergic rhinitis improves asthma outcomes
- Reduced asthma exacerbations
- Improved asthma control

**Management approach:**
- Evaluate all rhinitis patients for asthma
- Evaluate all asthma patients for allergic rhinitis
- Treat both conditions for optimal outcomes
- Montelukast beneficial for both

## Immunotherapy: Evidence and Selection

### SCIT vs SLIT Comparison

| Feature | SCIT | SLIT |
|---------|------|------|
| Efficacy | High | Moderate |
| Onset | 6-12 months | 6-12 months |
| Duration | 3-5 years | 3-5 years |
| Administration | Clinic injections | Home tablets |
| Safety | Systemic reactions | Local reactions |
| Allergens available | Multiple | Limited (grass, ragweed, dust mite) |
| Long-term benefit | Prevents new sensitizations | Less data |
| Cost | Injections + visits | Tablets (insurance variable) |

### Patient Selection for Immunotherapy

**Ideal candidates:**
- Clear IgE-mediated disease
- Symptoms despite appropriate medical therapy
- Side effects from medications
- Committed to 3-5 year course
- Realistic expectations

**Contraindications:**
- Uncontrolled asthma
- Beta-blocker use (relative)
- Severe cardiovascular disease
- Pregnancy (initiation)
- Autoimmune disease (relative)

### Efficacy Evidence

**SCIT:**
- 80-90% response rate
- Reduces symptom scores 30-60%
- Reduces medication use
- Prevents new sensitizations
- May prevent asthma in children (GPT study)

**SLIT:**
- 40-70% response rate
- Reduces symptom scores 20-40%
- Less long-term data
- Lower systemic reaction rate

## Quality of Life Impact

**Untreated allergic rhinitis:**
- Sleep disturbance: 50% of patients
- Daytime fatigue: 60% of patients
- Impaired concentration: 40% of patients
- Work/school impairment: Significant

**Treatment benefit:**
- Improved sleep quality
- Improved daytime functioning
- Improved work productivity
- Reduced healthcare utilization
- Improved asthma control (if comorbid)`,
      keyTerms: [
        { term: 'rhinitis medicamentosa', definition: 'Rebound congestion from prolonged use (> 3 days) of topical decongestants' },
        { term: 'Dymista', definition: 'Combination intranasal product containing fluticasone propionate and azelastine' },
        { term: 'united airways', definition: 'Concept linking upper and lower airway inflammation; treating allergic rhinitis improves asthma' },
        { term: 'bioavailability', definition: 'Proportion of drug that reaches systemic circulation; lower is better for topical agents' },
      ],
      clinicalNotes: 'INCS first-line for persistent allergic rhinitis. Proper technique critical: clear nose first, direct spray away from septum (toward ear), sniff gently. Full benefit 1-2 weeks. Second-generation oral antihistamines for mild intermittent disease. Immunotherapy for refractory disease: 3-5 years duration. Always evaluate for asthma in allergic rhinitis patients (united airways). Avoid topical decongestants beyond 3 days.',
    },
    5: {
      level: 5,
      summary: 'Contemporary allergic rhinitis management integrates precision allergen identification, evidence-based pharmacotherapy targeting specific inflammatory pathways, personalized immunotherapy approaches, and comprehensive management of comorbid conditions within the united airways framework.',
      explanation: `## Current Guidelines and Evidence Evolution

### Guideline Comparison

| Aspect | ARIA 2019 | AAO-HNS 2015 | EAACI 2021 |
|--------|-----------|--------------|------------|
| Classification | Intermittent/persistent | Seasonal/perennial | IgE-mediated |
| First-line | INCS | INCS | INCS |
| INCS onset | 12 hours | Days | 8-12 hours |
| SLIT evidence | Moderate | Limited | Strong (specific allergens) |
| Asthma link | United airways | Comorbid condition | United airways |

### Recent Evidence Updates

**Local allergic rhinitis (LAR):**
- Up to 25% of previously diagnosed non-allergic rhinitis
- Negative systemic IgE, positive nasal provocation
- Elevated nasal IgE
- Responds to INCS and immunotherapy

**Precision medicine approaches:**
- Component-resolved diagnostics (CRD)
- Molecular allergen identification
- Predicts cross-reactivity
- Guides immunotherapy selection

## Diagnostic Precision

### Component-Resolved Diagnostics

**Traditional vs molecular diagnostics:**
- Traditional: Whole allergen extracts
- Molecular: Individual allergen components

**Clinical applications:**
- Distinguish primary sensitization from cross-reactivity
- Predict severity of reactions
- Guide immunotherapy selection
- Predict treatment response

**Examples:**
- Bet v 1 (birch pollen primary) vs cross-reactive carbohydrate determinants
- Ara h 2 (peanut component) predicts clinical reactivity
- Specific grass pollen components predict cross-reactivity

### Biomarker Development

**Exhaled nitric oxide (FeNO):**
- Marker of lower airway inflammation
- May predict allergic asthma risk
- May guide therapy in united airways

**Nasal nitric oxide (nNO):**
- Marker of upper airway inflammation
- Decreased in primary ciliary dyskinesia
- May monitor treatment response

**Urinary biomarkers:**
- LTE4 (leukotriene E4): Marker of cysteinyl leukotriene activity
- May predict montelukast response

## Therapeutic Optimization

### Intranasal Corticosteroids: Advanced Concepts

**Bioavailability and safety:**
- Mometasone: < 0.1% systemic bioavailability
- Fluticasone furoate: < 0.5% systemic bioavailability
- Triamcinolone: ~ 10-20% systemic bioavailability
- Clinical significance: Minimal at recommended doses

**Combination products:**
- Dymista (fluticasone + azelastine):
  - Onset: 30 minutes
  - Efficacy superior to components alone
  - Cost higher than individual agents
  - Patient preference: Single spray vs two sprays

**Novel delivery systems:**
- Breath-powered delivery: Improves posterior nasal delivery
- Reduced anterior deposition
- Improved efficacy, less runoff

### Biologic Therapy

**Indications:**
- Severe allergic rhinitis unresponsive to conventional therapy
- Comorbid moderate-severe asthma
- Chronic rhinosinusitis with nasal polyps

**Agents:**

| Biologic | Target | Indication | Evidence for AR |
|----------|--------|------------|-----------------|
| Omalizumab | IgE | Asthma, CRSwNP | Moderate |
| Mepolizumab | IL-5 | Asthma, CRSwNP | Limited |
| Dupilumab | IL-4/IL-13 | CRSwNP, eczema | Moderate |
| Benralizumab | IL-5 | Asthma | Limited |

**Omalizumab for allergic rhinitis:**
- Anti-IgE monoclonal antibody
- Reduces free IgE levels
- Down-regulates FcεRI receptors
- Reduces symptom scores in seasonal allergic rhinitis
- Cost-effectiveness: Poor for allergic rhinitis alone
- Consider for comorbid asthma or CRSwNP

### Emerging Therapies

**Bruton tyrosine kinase (BTK) inhibitors:**
- Inhibits B-cell and mast cell signaling
- Early phase trials for allergic diseases

**Syk kinase inhibitors:**
- Inhibits FcεRI signaling
- Topical formulation in development

**DNA vaccines:**
- Tolerogenic vaccines to induce tolerance
- Early phase trials

## Immunotherapy Advances

### Personalized Immunotherapy

**Component-based immunotherapy:**
- Using major allergen components
- More standardized than whole extracts
- Better efficacy prediction
- Lower cross-reactivity risk

**Modified allergens:**
- Recombinant allergens with reduced IgE binding
- Preserved T-cell epitopes
- Reduced systemic reaction risk
- Clinical trials ongoing

### Novel Routes

**Epicutaneous immunotherapy:**
- Skin patch delivery
- Lower systemic reaction risk
- Approved for peanut allergy
- Being studied for allergic rhinitis

**Intralymphatic immunotherapy:**
- Direct lymph node injection
- Fewer injections (3 doses vs years)
- Faster desensitization
- Long-term durability under study

**Oral mucosal immunotherapy:**
- Sublingual tablets
- Sublingual drops (off-label)
- Approved for grass, ragweed, dust mite

## United Airways Management

### Evidence for Treating Both Airways

**Allergic rhinitis treatment improves asthma:**
- Reduced asthma exacerbations: 30-50%
- Improved asthma control scores
- Reduced rescue medication use
- Improved lung function

**Mechanisms:**
- Reduced nasobronchial reflex
- Reduced mouth breathing (better conditioning of air)
- Reduced systemic inflammation
- Improved medication delivery (better nasal breathing)

**Treatment approach:**
- Evaluate all rhinitis patients for asthma
- Evaluate all asthma patients for allergic rhinitis
- Treat both for optimal outcomes
- INCS beneficial for both
- Montelukast beneficial for both

## Quality Improvement

**Appropriate testing metrics:**
- Correlation of testing with clinical history
- Avoiding testing low-risk patients
- Testing only when results will change management

**Appropriate treatment metrics:**
- INCS first-line for persistent disease
- Avoid overuse of decongestants
- Limit duration of combination products

**Immunotherapy metrics:**
- Appropriate patient selection
- Duration of therapy (3-5 years)
- Monitoring for systemic reactions
- Measuring treatment response

**Patient education:**
- Proper nasal spray technique
- Understanding chronic nature
- Realistic expectations
- Importance of adherence

## Future Directions

**Primary prevention:**
- Early allergen exposure may reduce risk (hygiene hypothesis)
- Probiotic trials mixed results
- Pet exposure in infancy: Protective or risk?

**Biomarker-guided therapy:**
- Predicting response to specific therapies
- Monitoring treatment response
- Personalized medicine approaches

**Microbiome modulation:**
- Nasal microbiome
- Gut-nasal axis
- Probiotic/prebiotic interventions`,
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'Molecular allergen testing identifying specific allergen proteins; distinguishes primary sensitization from cross-reactivity' },
        { term: 'local allergic rhinitis', definition: 'Phenotype with negative systemic IgE but positive nasal provocation; may account for 25% of non-allergic rhinitis' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide; biomarker of lower airway inflammation' },
        { term: 'Dymista', definition: 'Combination intranasal fluticasone propionate and azelastine; rapid onset (30 min)' },
        { term: 'united airways', definition: 'Concept linking upper and lower airway inflammation; treating allergic rhinitis improves asthma' },
        { term: 'biologic therapy', definition: 'Monoclonal antibody treatments targeting specific inflammatory pathways' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Diagnosis:** Correlate allergy tests with clinical history. Positive test alone = sensitization, not clinical allergy. Must have symptoms + exposure + positive test.

2. **INCS first-line:** Intranasal corticosteroids most effective monotherapy. Onset 12 hours, full benefit 1-2 weeks. Proper technique critical: clear nose, direct away from septum, sniff gently. Mometasone and fluticasone furoate lowest systemic bioavailability.

3. **Antihistamine selection:** Second-generation oral antihistamines for mild intermittent disease. Fexofenadine: no sedation. Cetirizine/levocetirizine: slightly better efficacy, mild sedation. Intranasal antihistamines: faster onset (15-30 min), better for congestion, bitter taste side effect.

4. **Combination therapy:** Dymista (fluticasone + azelastine) onset 30 min, superior to either alone. INCS + oral antihistamine: no additional benefit for congestion. Reserve combination for moderate-severe disease.

5. **Decongestants:** Oral pseudoephedrine effective but avoid in hypertension. Topical oxymetazoline max 3 days to avoid rhinitis medicamentosa (rebound congestion). Treat with INCS if rhinitis medicamentosa develops.

6. **Immunotherapy:** For refractory disease despite optimal medical therapy. SCIT: 80-90% response, 3-5 years duration, prevents new sensitizations. SLIT: tablets for grass, ragweed, dust mite; lower systemic reaction risk; 40-70% response.

7. **United airways:** 20-40% of allergic rhinitis patients have asthma. 80% of asthmatics have allergic rhinitis. Treating allergic rhinitis improves asthma outcomes. Evaluate all rhinitis patients for asthma and vice versa.

8. **Special populations:** Pediatric: Age-appropriate dosing, INCS safe at recommended doses. Pregnancy: Loratabine or INCS preferred; avoid decongestants, first-generation antihistamines.

9. **Comorbidities:** Evaluate for sinusitis, otitis media, nasal polyps. Sleep disturbance common. Quality of life impairment significant.

10. **Emerging therapies:** Biologics (omalizumab) for severe disease with comorbid asthma/CRSwNP. Component-resolved diagnostics for precision immunotherapy.`,
    },
  },

  media: [
    {
      id: 'allergic-cascade',
      type: 'diagram',
      filename: 'allergic-cascade.svg',
      title: 'Allergic Cascade',
      description: 'Step-by-step immune response in allergic reaction',
    },
    {
      id: 'pollen-calendar',
      type: 'diagram',
      filename: 'pollen-calendar.svg',
      title: 'Pollen Calendar',
      description: 'Seasonal distribution of tree, grass, and weed pollen',
    },
    {
      id: 'nasal-spray-technique',
      type: 'diagram',
      filename: 'nasal-spray-technique.svg',
      title: 'Nasal Spray Technique',
      description: 'Proper technique for intranasal medication administration',
    },
    {
      id: 'immunotherapy-comparison',
      type: 'diagram',
      filename: 'immunotherapy-comparison.svg',
      title: 'SCIT vs SLIT',
      description: 'Comparison of subcutaneous and sublingual immunotherapy',
    },
  ],

  citations: [
    {
      id: 'aria-guideline-2019',
      type: 'article',
      title: 'Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines - 2019 Revision',
      authors: ['Brozek JL', 'Bousquet J', 'Agache I', 'et al.'],
      source: 'Journal of Allergy and Clinical Immunology',
      url: 'https://doi.org/10.1016/j.jaci.2019.06.049',
    },
    {
      id: 'aao-hns-allergic-rhinitis-2015',
      type: 'article',
      title: 'Clinical Practice Guideline: Allergic Rhinitis',
      authors: ['Seidman MD', 'Gurgel RK', 'Lin SY', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599814561600',
    },
    {
      id: 'eaaci-guidelines-2021',
      type: 'article',
      title: 'EAACI Guidelines on Allergen Immunotherapy',
      authors: ['Roberts G', 'Ollert M', 'Halken S', 'et al.'],
      source: 'Allergy',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nasal-cavity', targetType: 'structure', relationship: 'related', label: 'Nasal Cavity' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-sinusitis', targetType: 'condition', relationship: 'related', label: 'Sinusitis' },
  ],

  tags: {
    systems: ['ent', 'immune'],
    topics: ['otolaryngology', 'allergy immunology', 'primary care'],
    keywords: ['allergic rhinitis', 'hay fever', 'antihistamine', 'intranasal corticosteroid', 'immunotherapy', 'allergen'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['family medicine', 'otolaryngology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default allergicRhinitis;
