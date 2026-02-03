/**
 * Professional Cleanings - Comprehensive Educational Content
 *
 * Covers dental prophylaxis, scaling and root planing,
 * and professional preventive care procedures.
 */

import { EducationalContent } from '../../types';

export const professionalCleanings: EducationalContent = {
  id: 'topic-professional-cleanings',
  type: 'topic',
  name: 'Professional Cleanings',
  alternateNames: [
    'Dental Prophylaxis',
    'Dental Cleaning',
    'Teeth Cleaning',
    'Scaling and Polishing',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Professional dental cleanings are done by dentists and hygienists to remove buildup that regular brushing cannot. Getting cleanings twice a year helps keep your teeth and gums healthy.',
      explanation: `**What Happens During a Dental Cleaning?**

When you visit the dentist for a cleaning, a dental hygienist or dentist will clean your teeth in ways that are impossible to do at home.

**Steps of a Professional Cleaning:**

**Step 1: Examination**
- The hygienist looks at your teeth and gums
- They check for any problems or areas of concern
- Sometimes they take X-rays to see between teeth

**Step 2: Removing Tartar (Scaling)**
- Tartar is hardened plaque that you cannot brush off
- They use special tools to scrape it away
- You might hear scraping sounds - this is normal!
- It does not hurt, but you might feel pressure

**Step 3: Deep Cleaning with Gritty Toothpaste**
- A spinning brush with gritty toothpaste polishes teeth
- This removes stains and makes teeth smooth
- It might tickle but should not hurt

**Step 4: Professional Flossing**
- The hygienist flosses between all your teeth
- They can reach spots you might miss
- They might point out areas to focus on at home

**Step 5: Rinsing**
- You rinse out all the debris
- Sometimes a fluoride rinse is used

**Step 6: Fluoride Treatment (Optional)**
- A gel or foam is put on your teeth
- This makes teeth stronger against cavities
- You might need to wait before eating or drinking

**Why Are Professional Cleanings Important?**

- Remove tartar that brushing cannot
- Catch problems early before they get serious
- Keep gums healthy
- Make your smile look brighter
- Fresh, clean feeling!

**How Often Should You Go?**

- Most people: Every 6 months
- Some people need to go more often if they have gum disease`,
      keyTerms: [
        { term: 'dental hygienist', definition: 'A trained professional who cleans teeth and teaches you how to care for them' },
        { term: 'tartar', definition: 'Hardened plaque on teeth that only professional tools can remove' },
        { term: 'scaling', definition: 'The process of scraping tartar off teeth with special instruments' },
        { term: 'polishing', definition: 'Using a spinning brush and paste to make teeth smooth and shiny' },
        { term: 'fluoride treatment', definition: 'A special gel or foam that makes tooth enamel stronger' },
      ],
      analogies: [
        'Tartar is like hard water deposits on a faucet - regular wiping cannot remove it, but special tools can.',
        'A dental cleaning is like a car wash for your teeth - it gets the deep-down dirt that regular washing misses.',
        'The polishing step is like buffing and waxing your car to make it shine.',
      ],
      examples: [
        'If you see yellowish or brownish buildup near your gums that brushing does not remove, that is tartar.',
        'After a cleaning, your teeth might feel extra smooth when you run your tongue over them.',
      ],
    },
    2: {
      level: 2,
      summary: 'Professional dental prophylaxis involves the removal of plaque, calculus, and stains to prevent and treat gingivitis. More advanced scaling and root planing treats periodontitis by cleaning below the gum line.',
      explanation: `## Types of Professional Cleanings

**1. Prophylaxis (Regular Cleaning)**

*Definition:* Preventive cleaning for patients with generally healthy gums or mild gingivitis.

*Components:*
- Supragingival scaling (above gum line)
- Removal of light calculus and plaque
- Polishing to remove stains
- Typically every 6 months

*Who Needs It:*
- Patients without periodontal disease
- Healthy gums or mild gingivitis
- Children and adults with good oral health

**2. Scaling and Root Planing (Deep Cleaning)**

*Definition:* Therapeutic procedure for patients with periodontitis; cleans below the gum line.

*Components:*
- Subgingival scaling (below gum line)
- Root planing (smoothing root surfaces)
- Removal of calculus and infected tissue
- Usually done in quadrants with anesthesia

*Who Needs It:*
- Patients with periodontal disease
- Pocket depths greater than 3-4 mm
- Bone loss visible on X-rays

**3. Periodontal Maintenance**

*Definition:* Ongoing care after periodontal treatment to prevent disease recurrence.

*Components:*
- More thorough than prophylaxis
- Subgingival and supragingival cleaning
- Usually every 3-4 months
- Pocket depth monitoring

## Instruments Used

**Hand Instruments:**
| Instrument | Purpose |
|------------|---------|
| Scalers | Remove supragingival calculus |
| Curettes | Subgingival scaling and root planing |
| Explorers | Detect calculus and irregularities |
| Probes | Measure pocket depths |

**Powered Instruments:**
- **Ultrasonic scalers**: Vibrate to break up calculus; water spray cools and flushes
- **Sonic scalers**: Similar but lower frequency
- **Air polishers**: Spray of water, air, and powder for stain removal

## What to Expect

**During Prophylaxis:**
- Usually 30-60 minutes
- May feel pressure and vibration
- Generally comfortable without anesthesia
- Some sensitivity possible

**During Scaling and Root Planing:**
- Local anesthesia typically used
- May be done over 2-4 appointments
- More extensive and thorough
- Some discomfort expected afterward
- Antibiotics sometimes prescribed

## Fluoride and Adjunctive Treatments

**Professional Fluoride:**
- Varnish, gel, or foam
- Higher concentration than OTC
- Strengthens enamel
- Reduces sensitivity

**Other Options:**
- Desensitizing treatments
- Antimicrobial rinses (chlorhexidine)
- Sealants for cavity-prone areas
- Custom fluoride trays for high-risk patients

## Recommended Frequency

| Patient Type | Recommended Interval |
|--------------|---------------------|
| Low risk, healthy | 6-12 months |
| Moderate risk | 6 months |
| Gingivitis | 6 months with improvement |
| Treated periodontitis | 3-4 months |
| High risk (diabetes, smoking) | 3-4 months |`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Preventive dental cleaning to remove plaque, calculus, and stains above the gum line', pronunciation: 'pro-fih-LAK-sis' },
        { term: 'scaling and root planing', definition: 'Deep cleaning procedure that removes calculus and bacteria below the gum line and smooths root surfaces' },
        { term: 'calculus', definition: 'Mineralized dental plaque (tartar) that requires professional removal' },
        { term: 'supragingival', definition: 'Above the gum line' },
        { term: 'subgingival', definition: 'Below the gum line, in the pocket between tooth and gum' },
        { term: 'periodontal maintenance', definition: 'Ongoing professional care for patients who have been treated for periodontal disease' },
      ],
      analogies: [
        'Scaling is like scraping barnacles off a boat hull - the buildup is stuck on and needs mechanical removal.',
        'Root planing is like sanding a rough wooden surface smooth so nothing can stick to it easily.',
        'The ultrasonic scaler works like a jackhammer in miniature, vibrating calculus loose from the tooth.',
      ],
    },
    3: {
      level: 3,
      summary: 'Professional dental cleanings are categorized by disease status and treatment goals: prophylaxis for prevention, scaling and root planing for active periodontitis, and periodontal maintenance for sustained control. Instrumentation technique, adjunctive therapies, and individualized intervals optimize outcomes.',
      explanation: `## Classification of Professional Cleanings

**ADA Procedure Codes:**

| Code | Procedure | Indication |
|------|-----------|------------|
| D1110 | Prophylaxis - adult | Healthy/gingivitis |
| D1120 | Prophylaxis - child | Healthy/gingivitis |
| D4341 | SRP - 4+ teeth/quadrant | Periodontitis |
| D4342 | SRP - 1-3 teeth/quadrant | Localized periodontitis |
| D4910 | Periodontal maintenance | Post-periodontal therapy |

**Clinical Decision Framework:**

*Prophylaxis Appropriate:*
- No attachment loss
- Pocket depths ≤3 mm
- Gingivitis without bone loss
- Recall interval based on risk

*SRP Indicated:*
- Clinical attachment loss present
- Pocket depths ≥4 mm with bleeding
- Radiographic bone loss
- Active periodontal disease

*Periodontal Maintenance:*
- After completion of active therapy (SRP or surgery)
- Lifelong at reduced intervals (typically 3-4 months)
- Alternates or supplements with restorative dentist

## Instrumentation Science

**Hand Instrumentation:**

*Curette Design:*
- Gracey curettes: Area-specific, one cutting edge
- Universal curettes: Multi-use, two cutting edges
- After Five/Mini Five: Extended shank for deeper pockets
- Langer curettes: Hybrid design

*Principles:*
- Proper angulation (45-90° to tooth)
- Controlled lateral pressure
- Overlapping strokes for complete coverage
- Tactile sensitivity for calculus detection

**Power Instrumentation:**

*Ultrasonic Scalers:*
- Magnetostrictive: Elliptical tip motion (25-30 kHz)
- Piezoelectric: Linear tip motion (25-50 kHz)
- Advantages: Efficient calculus removal, cavitation/acoustic streaming
- Considerations: Water spray, aerosol generation

*Clinical Evidence:*
- Comparable outcomes to hand instrumentation
- May be faster for heavy calculus
- Combined approach often optimal
- Thin tips for subgingival use

**Air Polishing:**

*Mechanism:*
- Pressurized air, water, powder stream
- Sodium bicarbonate (traditional)
- Glycine or erythritol (subgingival safe)

*Indications:*
- Supragingival stain and biofilm removal
- Subgingival biofilm (with appropriate powder)
- Implant maintenance (non-abrasive powder)

## Adjunctive Therapies

**Local Antimicrobials:**

| Agent | Delivery | Duration | Indication |
|-------|----------|----------|------------|
| Chlorhexidine chip | Pocket insertion | 7-10 days | Residual pockets ≥5 mm |
| Minocycline microspheres | Pocket insertion | 14 days | Residual pockets ≥5 mm |
| Doxycycline gel | Pocket insertion | 7 days | Residual pockets |

*Evidence:* Modest additional benefit (0.5 mm CAL gain) when used with SRP.

**Systemic Antibiotics:**

- Reserved for aggressive periodontitis or refractory cases
- Amoxicillin + metronidazole combination most studied
- Not routine for chronic periodontitis
- Antimicrobial stewardship concerns

**Host Modulation:**

- Subantimicrobial dose doxycycline (SDD)
- Reduces collagenase activity
- May provide additional CAL gain
- Prescription product (Periostat)

## Risk-Based Recall Intervals

**Factors Influencing Interval:**

*Patient Factors:*
- Diabetes (especially poorly controlled)
- Smoking status
- Genetic susceptibility
- Compliance with home care
- Age and manual dexterity

*Clinical Factors:*
- History of periodontal disease
- Current pocket depths
- Bleeding on probing
- Rate of calculus formation
- Presence of restorations/prosthetics

**Evidence for Intervals:**

*Cochrane Review Findings:*
- Limited high-quality evidence for optimal interval
- No strong evidence that 6 months is superior to 12 months for low-risk patients
- High-risk patients likely benefit from shorter intervals
- Individualization is key

**Recommended Approach:**

| Risk Level | Characteristics | Interval |
|------------|-----------------|----------|
| Very low | No disease, excellent home care | 12 months |
| Low | Minimal calculus, healthy gingiva | 6-12 months |
| Moderate | Gingivitis, moderate calculus | 6 months |
| High | Treated periodontitis | 3-4 months |
| Very high | Aggressive disease, poor control | 2-3 months |

## Quality Considerations

**Completeness of Debridement:**
- Root surface instrumentation goals: Smooth, calculus-free
- Residual calculus impairs healing
- May require multiple appointments for heavy deposits
- Re-evaluation at 4-6 weeks post-SRP

**Patient Comfort:**
- Topical anesthesia for prophylaxis sensitivity
- Local anesthesia for SRP
- Post-procedure discomfort management
- Communication throughout procedure`,
      keyTerms: [
        { term: 'CAL', definition: 'Clinical Attachment Loss; distance from CEJ to base of pocket, measure of periodontal destruction' },
        { term: 'Gracey curette', definition: 'Area-specific hand instrument with one cutting edge for subgingival scaling' },
        { term: 'magnetostrictive', definition: 'Ultrasonic scaler type using magnetic field to create tip vibration' },
        { term: 'piezoelectric', definition: 'Ultrasonic scaler type using crystal deformation to create tip vibration' },
        { term: 'cavitation', definition: 'Formation and collapse of bubbles in liquid from ultrasonic vibration; aids debridement' },
        { term: 'SDD', definition: 'Subantimicrobial Dose Doxycycline; host modulation therapy reducing collagenase' },
      ],
      clinicalNotes: 'Distinguish prophylaxis from SRP based on disease status, not just presence of calculus. Heavy calculus in a patient without attachment loss requires prophylaxis, not SRP (though it may take longer). Document findings to justify procedure codes. For periodontal maintenance patients, evaluate at each visit whether disease is stable or if re-treatment is needed.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of professional dental cleanings encompasses biofilm disruption mechanisms, instrumentation biomechanics, evidence for adjunctive therapies, and integration of precision approaches based on microbiological and host factors.',
      explanation: `## Biofilm Disruption Mechanisms

**Mechanical Debridement:**

*Biofilm Response to Instrumentation:*
- Shear forces disrupt matrix structure
- Mechanical removal of attached biofilm
- Disruption of organized bacterial communities
- Reduction of pathogen load and virulence

*Complete Removal Limitations:*
- Complex root anatomy (furcations, concavities)
- Deep pockets limit instrument access
- Regrowth from residual organisms
- Recolonization from saliva, tongue, other sites

**Ultrasonic Effects:**

*Physical Mechanisms:*
1. **Mechanical disruption**: Direct contact of vibrating tip
2. **Cavitation**: Bubble implosion creates localized forces
3. **Acoustic microstreaming**: Fluid currents enhance debridement
4. **Lavage effect**: Continuous water flow flushes debris

*Subgingival Penetration:*
- Fluid penetrates 50-75% of pocket depth
- Thin inserts reach deeper
- Antimicrobial solutions can be used as coolant

**Air Polishing Science:**

*Particle Dynamics:*
- Kinetic energy transfer to biofilm
- Abrasion coefficient varies by powder
- Subgingival powders (glycine, erythritol): Non-damaging to soft tissue
- Sodium bicarbonate: Supragingival only

*Biofilm Removal Efficacy:*
- Faster than curettes for biofilm
- Less effective for calculus
- Minimal root surface damage with low-abrasive powders
- Subgingival air polishing: Emerging evidence for maintenance

## Instrumentation Biomechanics

**Hand Instrument Forces:**

*Optimal Parameters:*
- Lateral force: 0.5-2.0 N
- Angle to root: 45-90°
- Stroke length: Short, overlapping
- Excessive force → tissue damage, operator fatigue

*Sharpness Matters:*
- Sharp instruments require less force
- Dull instruments cause burnishing (polishing calculus)
- Regular sharpening essential
- Consider disposable inserts

**Powered Instrument Variables:**

| Parameter | Effect |
|-----------|--------|
| Power setting | Higher = more efficient but more potential damage |
| Tip selection | Thin for subgingival, broader for heavy calculus |
| Angulation | 0-15° to root surface |
| Stroke | Light, brushing motion |
| Water flow | Cooling, lavage, cavitation |

**Root Surface Effects:**

*Instrumentation Creates:*
- Removal of cementum (inevitable)
- Smear layer formation
- Surface roughness changes
- May expose dentinal tubules → sensitivity

*Clinical Implications:*
- Over-instrumentation strips excessive cementum
- Balance thoroughness with tissue preservation
- Consider desensitizing treatments post-SRP

## Evidence for Adjunctive Therapies

**Local Antimicrobials Meta-Analysis:**

*Findings:*
- Additional 0.4-0.5 mm CAL gain over SRP alone
- Additional 0.4-0.5 mm pocket depth reduction
- Modest but statistically significant
- Cost-effectiveness varies

*Best Use:*
- Sites not responding to SRP alone
- Pockets ≥5 mm after initial therapy
- Not as universal adjunct

**Systemic Antibiotics:**

*Meta-Analysis Findings:*
- Amoxicillin + metronidazole: ~0.5 mm additional CAL gain
- Best evidence for aggressive periodontitis
- Number needed to treat: 7-10 for chronic periodontitis
- Resistance concerns limit routine use

*Guideline Recommendations:*
- Not routine for chronic periodontitis
- Consider for aggressive periodontitis
- Consider for refractory cases after re-instrumentation
- Microbiological testing may guide selection

**Photodynamic Therapy (PDT):**

*Mechanism:*
- Photosensitizer application
- Light activation → reactive oxygen species
- Bacterial kill within pocket

*Evidence:*
- Mixed results in clinical trials
- May provide additional benefit in deep pockets
- Not yet standard of care
- Ongoing research

**Laser Therapy:**

*Types Used:*
- Diode lasers: Soft tissue effects, bacterial reduction
- Nd:YAG: Calculus removal, bactericidal
- Er:YAG: Hard and soft tissue, calculus removal

*Evidence:*
- Not superior to SRP for most outcomes
- May provide adjunctive benefit
- High-quality RCTs limited
- Technique-sensitive

## Precision Approaches

**Microbiological Testing:**

*Methods:*
- DNA probes for periodontal pathogens
- PCR-based identification
- Culture (research settings)
- Point-of-care testing emerging

*Clinical Use:*
- Identify high-risk pathogens (A. actinomycetemcomitans)
- Guide antibiotic selection
- Monitor treatment response
- Research more than routine practice currently

**Genetic Susceptibility:**

*IL-1 Polymorphism Testing:*
- IL-1α and IL-1β gene variants
- Associated with increased periodontitis risk
- May influence treatment response and recall interval
- Not yet standard of care

**Biomarker-Guided Care:**

*Emerging Biomarkers:*
- MMP-8 (active collagenase): Indicates active destruction
- GCF/salivary biomarkers
- Point-of-care testing developing
- May guide treatment intensity

## Integration with Systemic Health

**Medical Collaboration:**

*Diabetes Management:*
- Periodontal treatment improves HbA1c (~0.4% reduction)
- Coordinate with diabetes care team
- More frequent maintenance for diabetic patients
- Document outcomes

*Cardiovascular Risk:*
- Periodontal treatment reduces inflammatory markers
- Long-term CVD outcome studies ongoing
- Include in comprehensive prevention

**Pre-Procedure Considerations:**

*Before Dental Prophylaxis/SRP:*
- Antibiotic prophylaxis per AHA guidelines (specific conditions)
- Anticoagulation management (usually continue)
- Immunocompromise considerations
- Bisphosphonate history (for any planned extractions)`,
      keyTerms: [
        { term: 'acoustic microstreaming', definition: 'Fluid circulation patterns created by ultrasonic vibration that enhance biofilm removal' },
        { term: 'smear layer', definition: 'Debris layer created on root surface by instrumentation; may occlude tubules' },
        { term: 'photodynamic therapy', definition: 'Antimicrobial treatment using photosensitizer activated by light to generate reactive oxygen species' },
        { term: 'MMP-8', definition: 'Matrix metalloproteinase-8 (collagenase-2); biomarker of active periodontal tissue destruction' },
        { term: 'burnishing', definition: 'Polishing calculus smooth with dull instruments rather than removing it' },
        { term: 'NNT', definition: 'Number Needed to Treat; number of patients who must receive treatment for one to benefit' },
      ],
      clinicalNotes: 'Evidence supports mechanical debridement as the foundation of periodontal therapy. Adjunctive antimicrobials provide modest additional benefit for non-responding sites. Systemic antibiotics should be reserved for specific indications due to resistance concerns. Precision approaches (microbiological testing, biomarkers) may guide therapy intensity but are not yet routine. Coordinate periodontal care with medical management of systemic conditions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary professional dental cleaning integrates advanced biofilm science, minimally invasive instrumentation strategies, precision diagnostics for treatment individualization, and recognition of periodontal therapy as a component of systemic health management.',
      explanation: `## Advanced Biofilm Science

**Subgingival Biofilm Ecology:**

*Climax Community Characteristics:*
- 500+ species potential
- Highly organized structure
- Metabolic interdependence
- Quorum sensing communication
- Resistance to antimicrobials

*Keystone Pathogen Concept:*
- P. gingivalis as exemplar
- Low abundance, high impact
- Modulates host response
- Enables dysbiosis

**Post-Debridement Recolonization:**

*Timeline:*
| Time | Microbiological Status |
|------|------------------------|
| Immediately | Biofilm disrupted, pathogen reduction |
| 1-2 weeks | Early recolonization, pioneers |
| 1-3 months | Community re-establishing |
| 3-6 months | Approaching pre-treatment composition |

*Implications:*
- Maintenance intervals based on recolonization patterns
- High-risk patients need shorter intervals
- Full-mouth disinfection concept (debatable evidence)

**Biofilm-Based Treatment Paradigm:**

*Shift from Pathogen-Specific to Ecological:*
- Target environmental conditions, not just bacteria
- Disrupt biofilm structure
- Prevent pathogenic succession
- Maintain health-associated community

## Minimally Invasive Approaches

**Tissue-Preserving Debridement:**

*Principles:*
- Remove biofilm and calculus, preserve tissue
- Avoid aggressive root planing
- Maintain cementum when possible
- Use appropriate instrument selection

*Evidence:*
- Excessive cementum removal: No added benefit
- Smear layer may aid healing
- Focus on biofilm disruption over "root planing"

**Subgingival Air Polishing:**

*Glycine/Erythritol Powder Air Polishing (GPAP):*
- Biofilm removal without root damage
- Minimal patient discomfort
- Faster than curettes for biofilm
- Evidence supporting use in maintenance

*Protocol:*
- Use with subgingival nozzle
- 5-10 seconds per site
- May reduce need for hand instrumentation
- Not effective for calculus

**Guided Biofilm Therapy (GBT):**

*Concept:*
- Assess → Disclose → Motivate → Air Polish → PIEZON (calculus) → Check

*Components:*
1. Disclosing biofilm
2. Patient education based on visualization
3. Supragingival air polishing
4. Subgingival air polishing (PLUS powder)
5. Ultrasonic/hand instruments for residual calculus
6. Quality check

*Evidence:*
- Reduced treatment time
- Patient comfort
- Effective biofilm removal
- Emerging supportive data

## Precision Diagnostics

**Point-of-Care Testing:**

*Available Technologies:*
- Chairside bacterial DNA tests
- MMP-8 detection (PerioSafe, ImplantSafe)
- Salivary diagnostics
- Pocket biomarker analysis

*Clinical Integration:*
- Risk stratification
- Treatment planning guidance
- Monitoring response
- Determining recall intervals

**Machine Learning Applications:**

*Emerging Uses:*
- Radiographic bone loss detection
- Risk prediction models
- Treatment outcome prediction
- Personalized maintenance intervals

**Salivary Diagnostics Platform:**

*Biomarkers Under Investigation:*
| Category | Examples | Application |
|----------|----------|-------------|
| Bacterial | P. gingivalis, T. denticola DNA | Pathogen load |
| Host enzymes | MMP-8, MMP-9 | Active destruction |
| Inflammatory | IL-1β, TNF-α | Inflammation status |
| Tissue breakdown | ICTP, OPG/RANKL | Bone resorption |

## Systemic Health Integration

**Periodontal Medicine:**

*Established Associations:*
- Diabetes: Bidirectional relationship
- Cardiovascular disease: Inflammation, bacteremia
- Adverse pregnancy outcomes: Preterm birth risk
- Respiratory disease: Aspiration, inflammation

*Evidence for Periodontal Treatment Impact:*
| Condition | Effect of Periodontal Therapy |
|-----------|-------------------------------|
| Diabetes | HbA1c reduction ~0.4% |
| CVD markers | CRP reduction |
| Preterm birth | Mixed results (prevention not proven) |
| Hospital pneumonia | Oral care reduces incidence |

**Integrated Care Models:**

*Medical-Dental Integration:*
- Shared electronic records
- Referral networks
- Collaborative care protocols
- Co-located services

*Value-Based Care:*
- Periodontal health as quality metric
- Cost savings through prevention
- Population health management
- Accountable care organization inclusion

## Research Frontiers

**Microbiome Modulation:**

*Approaches:*
- Prebiotic supplementation
- Probiotic colonization (L. reuteri, S. salivarius)
- Bacteriophage therapy
- Selective antimicrobial peptides

*Status:*
- Promising preclinical data
- Limited clinical evidence
- Regulatory pathway challenges
- Ecological approach is conceptually appealing

**Regenerative Adjuncts:**

*Post-Debridement Regeneration:*
- Enamel matrix derivative (Emdogain)
- Growth factors
- Biologics for pocket reduction
- Combination with debridement

**Host Modulation Research:**

*Novel Targets:*
- Resolution mediators (resolvins, lipoxins)
- Anti-inflammatory without immunosuppression
- Complement modulation
- Matrix metalloproteinase inhibition

## Practice Evolution

**From Scaling to Biofilm Management:**

*Paradigm Shift:*
- Past: Remove calculus, plane roots smooth
- Present: Disrupt biofilm, preserve tissues, individualize care
- Future: Precision diagnostics, microbiome modulation, systemic integration

**Quality Metrics:**

*Process Measures:*
- Appropriate procedure coding
- Documented risk assessment
- Individualized recall determination
- Adjunctive therapy when indicated

*Outcome Measures:*
- Pocket depth reduction
- Bleeding on probing reduction
- Radiographic bone stability
- Patient-reported outcomes

**Future Directions:**

1. Point-of-care diagnostics guiding real-time treatment decisions
2. AI-assisted risk prediction and treatment planning
3. Microbiome-based therapeutics
4. Full medical-dental integration
5. Value-based care models incorporating oral health
6. Minimally invasive biofilm management as standard
7. Personalized maintenance based on biomarkers`,
      keyTerms: [
        { term: 'keystone pathogen', definition: 'Low-abundance microorganism with disproportionate impact on community structure and host response (e.g., P. gingivalis)' },
        { term: 'dysbiosis', definition: 'Microbial community imbalance associated with disease; shift from health-associated to disease-associated species' },
        { term: 'GPAP', definition: 'Glycine Powder Air Polishing; minimally invasive biofilm removal for subgingival use' },
        { term: 'Guided Biofilm Therapy', definition: 'Systematic protocol: disclose, educate, air polish, instrument residual calculus' },
        { term: 'resolvins', definition: 'Specialized pro-resolving lipid mediators that promote inflammation resolution without immunosuppression' },
        { term: 'ICTP', definition: 'C-terminal telopeptide of type I collagen; bone resorption biomarker' },
      ],
      clinicalNotes: `Translation to practice:
1. Shift focus from aggressive root planing to biofilm disruption with tissue preservation
2. Consider Guided Biofilm Therapy or similar systematic protocols
3. Subgingival air polishing with appropriate powder is evidence-based for maintenance
4. Point-of-care biomarker testing (e.g., MMP-8) can guide treatment intensity
5. Integrate periodontal care with medical management of diabetes, CVD risk
6. Individualize recall intervals based on risk assessment, not arbitrary 6-month standard
7. Document medical necessity for insurance and quality tracking
8. Stay current on microbiome-based therapeutics - emerging field with clinical potential`,
    },
  },

  media: [
    {
      id: 'ultrasonic-scaler',
      type: 'diagram',
      filename: 'ultrasonic-scaler-action.svg',
      title: 'Ultrasonic Scaler Mechanism',
      description: 'Illustration of ultrasonic scaling showing cavitation and acoustic streaming',
    },
    {
      id: 'srp-procedure',
      type: 'diagram',
      filename: 'scaling-root-planing.svg',
      title: 'Scaling and Root Planing',
      description: 'Cross-section showing subgingival instrumentation technique',
    },
  ],

  citations: [
    {
      id: 'ccochrane-recall',
      type: 'article',
      title: 'Recall intervals for oral health in primary care patients',
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'aap-guidelines',
      type: 'article',
      title: 'Treatment of Stage I-III Periodontitis',
      authors: ['Sanz, M.', 'Herrera, D.'],
      source: 'Journal of Clinical Periodontology',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-hygiene-basics', targetType: 'topic', relationship: 'parent', label: 'Dental Hygiene Basics' },
    { targetId: 'condition-gingivitis', targetType: 'condition', relationship: 'related', label: 'Gingivitis' },
    { targetId: 'condition-periodontitis', targetType: 'condition', relationship: 'related', label: 'Periodontitis' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['teeth', 'gums', 'periodontal tissues'],
    topics: ['prevention', 'treatment', 'professional care'],
    keywords: ['dental cleaning', 'prophylaxis', 'scaling', 'root planing', 'periodontal maintenance'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default professionalCleanings;
