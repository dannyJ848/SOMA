/**
 * Supplements in Sport - Comprehensive Educational Content
 *
 * Evidence-based coverage of ergogenic aids and dietary supplements
 * in athletic performance and recovery.
 */

import { EducationalContent } from '../../types';

export const supplementsInSport: EducationalContent = {
  id: 'sports-med-supplements-in-sport',
  type: 'concept',
  name: 'Supplements in Sport',
  alternateNames: ['Ergogenic Aids', 'Sports Supplements', 'Performance Supplements'],

  levels: {
    1: {
      level: 1,
      summary: 'Supplements are extra nutrients or substances that some athletes take to try to improve their performance, but most young athletes get everything they need from regular healthy food.',
      explanation: `## What Are Supplements?

Supplements are pills, powders, or drinks that contain vitamins, minerals, or other substances. Some athletes take them hoping to get stronger or faster.

## Do Young Athletes Need Supplements?

**Usually No!**

Most kids and teens who eat healthy meals get everything they need from food. In fact:
- Regular food is the best source of energy and nutrients
- Your body absorbs nutrients better from food than from pills
- Some supplements can be harmful or contain bad ingredients

## When Might Someone Need a Supplement?

A doctor might recommend a supplement if:
- You don't eat certain foods (like vegetarians might need vitamin B12)
- Blood tests show you're low in something (like iron)
- You have a medical condition

## Important Safety Rules

1. **Never take supplements without asking a parent or doctor first**
2. Many supplements aren't tested for safety in kids
3. Some supplements sold for sports have dangerous ingredients
4. "Natural" doesn't always mean safe

## What Really Works

Instead of supplements, focus on:
- Eating a variety of healthy foods
- Getting enough sleep
- Drinking plenty of water
- Practicing your sport regularly`,
      keyTerms: [
        { term: 'supplement', definition: 'Extra nutrients taken in pill, powder, or drink form besides regular food' },
        { term: 'vitamin', definition: 'Substances your body needs in small amounts to work properly, found in foods' },
        { term: 'mineral', definition: 'Elements like iron and calcium that your body needs from food' },
      ],
      analogies: [
        'Taking supplements when you already eat well is like adding extra toppings to a pizza that already has everything - it won\'t make it better and might make it worse.',
      ],
      examples: [
        'A glass of milk gives you calcium and protein naturally - you don\'t need a supplement for that.',
        'If a doctor finds you\'re low in vitamin D from a blood test, they might recommend a vitamin D supplement.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sports supplements range from beneficial (when addressing deficiencies) to potentially harmful, with most healthy athletes able to meet their nutritional needs through a balanced diet. Evidence-based supplements like caffeine and creatine may help adult athletes, but many popular products lack proven benefits.',
      explanation: `## Understanding Sports Supplements

### Types of Supplements

**Vitamins and Minerals**
- May be needed if diet is inadequate or deficiency exists
- Common concerns in athletes: Iron, Vitamin D, Calcium
- Excess amounts can be harmful

**Protein Supplements**
- Whey, casein, plant proteins
- Convenient but not superior to food protein
- Most athletes can meet needs through diet

**Performance Supplements**
- Substances claimed to enhance performance
- Few have strong scientific evidence
- Risk of contamination or banned substances

### Evidence-Based Supplements (for adults)

| Supplement | What It Does | Evidence Level |
|-----------|--------------|----------------|
| Caffeine | Improves alertness, endurance | Strong |
| Creatine | Increases power, muscle mass | Strong |
| Beta-alanine | Buffers acid in muscles | Moderate |
| Beetroot juice | May improve endurance | Moderate |

### Supplements with Limited or No Evidence

- Most "testosterone boosters"
- Most fat burners
- Many pre-workout formulas
- "Muscle building" supplements

### Safety Concerns

**Contamination Risks:**
- Many supplements contain unlisted ingredients
- Some contain banned substances (intentionally or accidentally)
- Third-party testing (NSF, Informed Sport) helps reduce risk

**Regulation Issues:**
- Supplements are not tested like medications
- "Generally Recognized as Safe" doesn't mean proven safe
- Marketing claims often exceed evidence

### When Supplements Might Be Appropriate

- Diagnosed deficiency (via blood test)
- Medical condition limiting food intake
- Specific dietary restrictions (vegan athletes)
- Under guidance of sports medicine professional

### Bottom Line

1. Food first approach is best
2. If considering supplements, consult a professional
3. Use only third-party tested products
4. Be skeptical of dramatic claims`,
      keyTerms: [
        { term: 'ergogenic aid', definition: 'Any substance or method that may enhance athletic performance' },
        { term: 'third-party testing', definition: 'Independent verification that a supplement contains what it claims and is free of banned substances' },
        { term: 'caffeine', definition: 'Stimulant found in coffee and tea that can improve alertness and exercise performance' },
        { term: 'creatine', definition: 'Natural substance that helps muscles produce energy during high-intensity exercise' },
      ],
      analogies: [
        'Third-party tested supplements are like products with a safety seal - they\'ve been checked by someone independent.',
        'Taking supplements without addressing diet first is like buying premium tires for a car with engine problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sports supplementation should follow evidence-based guidelines with supplements categorized by scientific support level. Key ergogenic aids (caffeine, creatine, beta-alanine, nitrates) have established mechanisms and dosing protocols, while many popular supplements lack sufficient evidence for recommendation.',
      explanation: `## Evidence Classification System

### AIS/IOC Supplement Categories

**Category A - Strong Evidence:**
- Caffeine, creatine, beta-alanine, bicarbonate, nitrate
- Well-established mechanisms and protocols
- Consistent performance benefits in research

**Category B - Emerging Evidence:**
- Some promising research
- More studies needed
- May work for some athletes/situations

**Category C - Limited Evidence:**
- Little meaningful evidence
- Not recommended for performance

**Category D - Prohibited/High Risk:**
- Banned by WADA
- High contamination risk
- Significant health risks

## Category A Supplements: Details

### Caffeine
**Mechanism:**
- Adenosine receptor antagonism
- Enhanced CNS activation
- Improved motor recruitment
- Reduced perceived exertion

**Protocol:**
- Dose: 3-6 mg/kg body weight
- Timing: 60 minutes pre-exercise
- Duration: Effects last 3-5 hours
- Habituation may reduce effects

**Performance Effects:**
- Endurance: 2-4% improvement
- Strength/power: Variable, smaller effects
- Cognitive performance: Enhanced

### Creatine
**Mechanism:**
- Increased phosphocreatine stores
- Faster ATP regeneration
- Enhanced training capacity
- Cell volumization

**Protocol:**
- Loading: 20 g/day (4 x 5g) for 5-7 days (optional)
- Maintenance: 3-5 g/day or 0.1 g/kg/day
- Timing: Any time, consistency matters

**Performance Effects:**
- Strength: 5-15% improvement
- Power output: 5-15% improvement
- Lean mass gains enhanced

### Beta-Alanine
**Mechanism:**
- Increases muscle carnosine
- Intracellular H+ buffering
- Delays fatigue in 1-4 minute efforts

**Protocol:**
- Dose: 3.2-6.4 g/day
- Duration: 4-12 weeks for effect
- Split doses to reduce paresthesia (tingling)

**Performance Effects:**
- Events 60 seconds - 4 minutes: 2-3% improvement
- High-intensity interval capacity improved

### Sodium Bicarbonate
**Mechanism:**
- Extracellular H+ buffering
- Enhanced lactate efflux from muscle
- Delayed acidosis

**Protocol:**
- Dose: 0.2-0.3 g/kg body weight
- Timing: 60-90 minutes pre-exercise
- GI issues common - individual tolerance varies

**Performance Effects:**
- Events 1-7 minutes: 2-3% improvement
- Repeated sprints improved

### Nitrate (Beetroot Juice)
**Mechanism:**
- Nitrate → Nitrite → Nitric oxide
- Improved mitochondrial efficiency
- Enhanced blood flow
- Reduced oxygen cost of exercise

**Protocol:**
- Dose: 6-12 mmol nitrate (400-800 mg)
- Timing: 2-3 hours pre-exercise
- Or: Daily for 3-6 days before competition

**Performance Effects:**
- Endurance events: 1-3% improvement
- May be less effective in highly trained athletes

## Micronutrient Supplementation

### Iron
**When Needed:**
- Serum ferritin <35 μg/L in athletes
- More common in female athletes, vegetarians
- Symptoms: Fatigue, impaired performance

**Protocol:**
- Work with physician for diagnosis
- Oral iron with vitamin C
- Monitor levels during supplementation

### Vitamin D
**When Needed:**
- 25(OH)D levels <50 nmol/L (deficient)
- 50-75 nmol/L (insufficient)
- Common in indoor athletes, northern latitudes

**Protocol:**
- 1,000-4,000 IU/day depending on status
- Retest after 8-12 weeks

## Supplement Safety

### Third-Party Certification Programs
- NSF Certified for Sport
- Informed Sport
- BSCG (Banned Substances Control Group)
- Cologne List

### Risk Mitigation
1. Use only certified products
2. Research company reputation
3. Avoid proprietary blends
4. Keep records of products used
5. Consult sports dietitian/physician`,
      keyTerms: [
        { term: 'phosphocreatine', definition: 'High-energy phosphate stored in muscle, used for rapid ATP regeneration during high-intensity efforts' },
        { term: 'carnosine', definition: 'Dipeptide in muscle that buffers H+ ions; increased by beta-alanine supplementation' },
        { term: 'paresthesia', definition: 'Tingling sensation commonly experienced with beta-alanine supplementation; harmless but can be uncomfortable' },
        { term: 'WADA', definition: 'World Anti-Doping Agency; international organization that maintains list of prohibited substances in sport' },
      ],
      clinicalNotes: 'Athletes subject to drug testing must be extremely careful with supplements. Even third-party tested products cannot guarantee 100% safety. Advise athletes to keep detailed records of all supplements and consult anti-doping resources for their sport.',
    },
    4: {
      level: 4,
      summary: 'Advanced supplement science integrates pharmacokinetics, molecular mechanisms, individual response variability, and strategic periodization to optimize ergogenic aid use while managing risks related to contamination, anti-doping compliance, and health considerations.',
      explanation: `## Pharmacology of Ergogenic Aids

### Caffeine Pharmacokinetics
**Absorption and Distribution:**
- Rapid absorption: Peak plasma 30-60 minutes
- Half-life: 3-7 hours (CYP1A2 dependent)
- Crosses blood-brain barrier readily
- Lipophilic distribution

**Genetic Variation:**
- CYP1A2 *1F allele: Fast metabolizer
- CYP1A2 *1C allele: Slow metabolizer
- ADORA2A variants: Receptor sensitivity
- Performance response varies with genotype

**Habituation and Tolerance:**
- Adenosine receptor upregulation with chronic use
- Withdrawal may be necessary for maximal effect
- 4-7 day washout restores sensitivity

### Creatine Mechanisms - Detailed
**Cellular Effects:**
- PCr resynthesis rate increased
- Glycolytic flux enhanced
- Cell swelling → anabolic signaling
- Satellite cell proliferation enhanced
- Myogenic regulatory factor expression

**Loading vs. No Loading:**
- Loading: Maximum stores in 5-7 days
- No loading: Maximum stores in 28 days
- End result similar; loading faster

**Non-Responders:**
- ~20-30% show minimal response
- Higher baseline muscle creatine
- Type I fiber predominance
- Vegetarians typically respond well (lower baseline)

### Beta-Alanine Kinetics
**Carnosine Synthesis:**
- Beta-alanine is rate-limiting precursor
- Histidine generally adequate from diet
- Carnosine synthase in muscle
- Plateau at ~80% increase after 10-12 weeks

**Dose-Response:**
- Higher doses = faster loading
- Split dosing reduces paresthesia
- Sustained-release formulations available
- Total intake matters more than timing

### Nitrate-Nitrite-NO Pathway
**Conversion Process:**
- Dietary nitrate absorbed in small intestine
- Salivary glands concentrate nitrate 10-fold
- Oral bacteria reduce nitrate → nitrite
- Nitrite → NO in acidic/hypoxic conditions

**Factors Affecting Response:**
- Mouthwash use disrupts bacterial conversion
- Proton pump inhibitors may reduce conversion
- Training status: Highly trained may have less response
- Baseline nitrate status

## Advanced Supplement Strategies

### Combination Protocols
**Caffeine + Beta-Alanine:**
- Complementary mechanisms
- May have additive effects for sustained efforts

**Creatine + Beta-Alanine:**
- Both increase training capacity
- Different mechanisms, compatible use

**Bicarbonate + Beta-Alanine:**
- Intra and extracellular buffering
- May have synergistic effects
- Research still emerging

### Periodized Supplement Use
**Competition Phase:**
- Acute ergogenic aids: Caffeine, bicarbonate, beetroot
- Timing optimized for event

**Training Blocks:**
- Creatine for high-intensity training phases
- May withdraw during endurance-focused blocks

**Recovery Periods:**
- Vitamin D, omega-3 for recovery
- Protein for muscle preservation

## Emerging Supplements

### Category B - Promising Research

**Collagen + Vitamin C:**
- Proposed benefit for tendon/ligament
- 15g collagen + 50mg vitamin C
- 30-60 min before rehab exercises
- Mechanism: Procollagen synthesis

**Tart Cherry Extract:**
- Anti-inflammatory (anthocyanins)
- May reduce DOMS and recovery time
- 30-60 mL concentrate or equivalent
- Evidence still accumulating

**HMB (Beta-Hydroxy Beta-Methylbutyrate):**
- Leucine metabolite
- Anti-catabolic during caloric restriction
- 3g/day in divided doses
- May benefit during injury/disuse

### Experimental/Limited Evidence

**Phosphatidic Acid:**
- mTOR pathway activation
- Preliminary muscle mass studies
- 750 mg/day

**Epicatechin:**
- Myostatin inhibition proposed
- Very limited human data
- Found in dark chocolate, green tea

## Risk Management

### Contamination Analysis
**Common Contaminants:**
- Anabolic steroids (intentional for effect)
- Stimulants (synephrine, DMAA)
- SARMs (sold as "legal" alternatives)
- Heavy metals (poor manufacturing)

**Testing Limitations:**
- Not all batches tested
- Novel substances may not be detected
- Supply chain vulnerabilities

### Anti-Doping Considerations
**Prohibited List Awareness:**
- Review WADA Prohibited List annually
- Check sport-specific rules
- Some substances prohibited only in-competition
- Some have thresholds (caffeine: monitoring only)

**Therapeutic Use Exemptions (TUE):**
- Required for prescribed medications
- Must be applied for in advance
- Documentation requirements specific

### Documentation Protocol
- Maintain complete supplement log
- Photograph labels and batch numbers
- Keep receipts and order confirmations
- Note any adverse effects
- Useful for anti-doping defense if needed`,
      keyTerms: [
        { term: 'CYP1A2', definition: 'Cytochrome P450 enzyme responsible for caffeine metabolism; genetic variants determine metabolizer status (fast/slow)' },
        { term: 'non-responder', definition: 'Individual who shows minimal physiological or performance response to a supplement despite adequate dosing and compliance' },
        { term: 'Therapeutic Use Exemption (TUE)', definition: 'Permission granted to an athlete to use a prohibited substance for legitimate medical treatment' },
        { term: 'SARMs', definition: 'Selective Androgen Receptor Modulators; synthetic compounds with anabolic effects; prohibited in sport and associated with contamination risk' },
      ],
      clinicalNotes: 'CYP1A2 genotyping can guide caffeine recommendations. Slow metabolizers may need lower doses or earlier timing. Regular supplement audits recommended for competitive athletes. Any unexplained adverse analytical finding should prompt thorough supplement review.',
    },
    5: {
      level: 5,
      summary: 'Elite supplement science encompasses precision pharmacogenomics, advanced delivery systems, regulatory frameworks, and cutting-edge research on novel ergogenic compounds while navigating complex ethical and anti-doping landscapes in professional sport.',
      explanation: `## Pharmacogenomics in Supplement Response

### Caffeine Response Genetics
**CYP1A2 Polymorphisms:**
- *1A/*1A: Fast metabolizers (homozygous)
- *1A/*1F: Intermediate
- *1F/*1F: Slow metabolizers
- Performance implications: Slow metabolizers may have impaired performance with high doses

**ADORA2A Gene:**
- rs5751876: Caffeine sensitivity
- Anxiety response to caffeine
- Sleep disruption susceptibility

**Practical Application:**
- Genetic testing available commercially
- Consider reducing dose in *1F carriers
- Earlier timing for slow metabolizers
- Washout periods more important for slow metabolizers

### Creatine Response Variability
**Genetic Factors:**
- GAMT, GATM: Creatine synthesis
- SLC6A8: Creatine transporter
- Baseline creatine content
- ACTN3 genotype may influence response

**Phenotypic Predictors:**
- Fiber type distribution
- Training status
- Dietary creatine intake
- Vegetarian/vegan status

### Nitrate Response Genetics
**NOS3 Polymorphisms:**
- Endothelial nitric oxide synthase variants
- Baseline NO production capacity
- May explain responder/non-responder phenomenon

## Advanced Delivery Systems

### Novel Formulations
**Buffered/Micronized Creatine:**
- Claimed better absorption/tolerance
- Evidence shows no advantage over monohydrate
- Premium pricing not justified

**Slow-Release Beta-Alanine:**
- Reduces paresthesia
- Allows larger single doses
- Similar efficacy to split dosing

**Liposomal Caffeine:**
- Extended release profile
- Potentially sustained effects
- Limited research currently

### Combination Products
**Pre-Workout Formulas:**
- Often contain multiple ergogenic aids
- Proprietary blends mask actual doses
- May contain ineffective amounts
- Risk of excessive stimulant intake

**Intra-Workout:**
- CHO + Electrolytes (proven)
- Added BCAAs/EAAs (limited additional benefit if protein adequate)
- Performance claims often unsubstantiated

## Regulatory Landscape

### Global Regulatory Differences
**United States (DSHEA):**
- Supplements not pre-approved
- FDA intervenes post-market only
- Manufacturer responsible for safety

**European Union:**
- Positive lists for permitted ingredients
- Maximum levels established
- Novel foods regulation

**Australia (TGA):**
- Listed vs. Registered products
- More stringent than US
- Some products require prescription

### Anti-Doping Framework
**WADA Code:**
- Strict liability principle
- Presence = violation regardless of intent
- Contaminated supplement not valid defense

**Intelligence and Investigation:**
- Supply chain monitoring
- Batch testing programs
- Informant networks

### Emerging Regulatory Challenges
- Novel compounds (SARMs, peptides)
- Online marketplace enforcement
- International supply chains
- Label accuracy verification

## Cutting-Edge Research Areas

### Exogenous Ketones
**Current State:**
- Ketone esters: Rapid elevation of BHB
- Performance results mixed
- GI tolerance issues common
- Expensive, poor palatability

**Proposed Mechanisms:**
- Alternative brain fuel
- Glycogen sparing
- Anti-inflammatory effects
- Signaling molecule

**Research Directions:**
- Combined CHO + ketone strategies
- Individual responder identification
- Novel formulations (salts, diesters)

### Urolithin A
**Mechanism:**
- Gut microbiome metabolite of ellagitannins
- Promotes mitophagy
- May enhance mitochondrial function

**Current Evidence:**
- Preclinical: Strong
- Human: Early, promising
- 500-1000 mg doses studied

### NAD+ Precursors
**NMN and NR:**
- NAD+ precursors
- Proposed benefits for aging, metabolism
- Endurance performance interest

**Evidence:**
- Strong preclinical
- Limited human performance data
- Dose optimization ongoing

### Senolytic Compounds
**Concept:**
- Clear senescent cells
- Improve tissue function
- Potential recovery enhancement

**Status:**
- Very early research stage
- Quercetin + dasatinib studied
- No athletic performance data

## Ethical and Practical Considerations

### Spirit of Sport
**Philosophical Questions:**
- Where does nutrition end and doping begin?
- Genetic advantages vs. pharmaceutical
- Technology vs. natural performance

**Supplement-Doping Continuum:**
- Legal supplements ↔ Novel compounds ↔ Prohibited substances
- Line often unclear for new substances
- Regulatory lag behind science

### Practitioner Guidelines
**Evidence-Based Framework:**
1. Identify clear need/goal
2. Evaluate evidence quality
3. Assess individual factors
4. Consider risk-benefit
5. Choose certified products
6. Monitor response
7. Document thoroughly

**Communication with Athletes:**
- Realistic expectations
- Clear safety information
- Anti-doping education
- Food-first philosophy

### Future Directions
**Personalized Supplementation:**
- Genetic profiling integration
- Microbiome analysis
- Metabolomic monitoring
- AI-driven recommendations

**Technology Integration:**
- Real-time biomarker monitoring
- Automated dosing systems
- Supply chain blockchain verification

**Research Priorities:**
- Long-term safety data
- Combination studies
- Individual response prediction
- Novel delivery mechanisms`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug/supplement response, enabling personalized dosing and selection' },
        { term: 'strict liability', definition: 'WADA principle that athletes are responsible for any prohibited substance in their body, regardless of how it entered' },
        { term: 'exogenous ketones', definition: 'Supplemental ketone bodies that elevate blood ketones without dietary ketosis; under investigation for performance enhancement' },
        { term: 'mitophagy', definition: 'Selective autophagy of mitochondria; removal of damaged mitochondria to maintain cellular health' },
        { term: 'senolytic', definition: 'Compound that selectively eliminates senescent (aged, dysfunctional) cells; emerging area for health and performance' },
      ],
      clinicalNotes: `Clinical guidance for elite supplement management:
1. Genetic testing for caffeine metabolism (CYP1A2) has practical utility for dosing optimization
2. Maintain comprehensive supplement databases with batch tracking for anti-doping protection
3. Novel compounds (exogenous ketones, urolithin A, NAD+ precursors) show promise but lack sufficient evidence for recommendation
4. Anti-doping education should emphasize strict liability and supplement risk even with testing
5. Practitioner should stay current with WADA Prohibited List updates (published January 1 annually)
6. Consider psychological dependence on supplements and address with behavioral approaches`,
    },
  },

  media: [
    {
      id: 'supplement-evidence-pyramid',
      type: 'diagram',
      filename: 'supplement-evidence-pyramid.svg',
      title: 'Supplement Evidence Pyramid',
      description: 'Visual categorization of supplements by strength of evidence',
    },
  ],

  citations: [
    {
      id: 'ioc-supplements',
      type: 'article',
      title: 'IOC Consensus Statement: Dietary Supplements and the High-Performance Athlete',
      source: 'British Journal of Sports Medicine',
    },
    {
      id: 'ais-supplement-framework',
      type: 'website',
      title: 'AIS Sports Supplement Framework',
      source: 'Australian Institute of Sport',
      url: 'https://www.ais.gov.au/nutrition/supplements',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-sports-nutrition-basics', targetType: 'concept', relationship: 'parent', label: 'Sports Nutrition Basics' },
    { targetId: 'sports-med-hydration-for-exercise', targetType: 'concept', relationship: 'related', label: 'Hydration for Exercise' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    topics: ['sports-medicine', 'supplements', 'ergogenic-aids', 'anti-doping'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default supplementsInSport;
