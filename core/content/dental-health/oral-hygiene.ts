/**
 * Oral Hygiene - Comprehensive Educational Content
 *
 * Covers brushing techniques, flossing methods, interdental cleaning,
 * and preventive oral hygiene practices for maintaining dental health.
 */

import { EducationalContent } from '../types';

export const oralHygiene: EducationalContent = {
  id: 'topic-oral-hygiene',
  type: 'topic',
  name: 'Oral Hygiene',
  nameEs: 'Higiene Oral',
  alternateNames: [
    'Dental Hygiene',
    'Oral Care',
    'Preventive Dentistry',
    'Home Care',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Oral hygiene means keeping your mouth clean and healthy. This includes brushing your teeth twice a day, flossing daily, and visiting your dentist regularly. Good oral hygiene prevents cavities, gum disease, and bad breath.',
      explanation: `**Why Oral Hygiene Matters**

Keeping your mouth clean is one of the most important things you can do for your health. Good oral hygiene:

- Prevents cavities (tooth decay)
- Prevents gum disease
- Prevents bad breath
- Keeps your teeth looking their best
- Saves money on dental bills
- Helps your overall health

**Brushing Your Teeth**

**How often:** Twice a day - morning and night

**How long:** 2 minutes each time

**The right way to brush:**
1. Use a soft-bristled toothbrush
2. Use fluoride toothpaste (pea-sized amount)
3. Hold brush at a 45-degree angle to your gums
4. Gently move back and forth in short strokes
5. Brush all surfaces: outside, inside, and chewing surfaces
6. Brush your tongue to remove bacteria and freshen breath
7. Spit out toothpaste but don't rinse (lets fluoride work longer)

**Common brushing mistakes:**
- Brushing too hard (damages gums and enamel)
- Brushing too fast (needs 2 full minutes)
- Missing spots (especially back teeth)
- Using a worn-out toothbrush (replace every 3-4 months)

**Flossing**

**How often:** Once a day (bedtime is best)

**How to floss:**
1. Break off about 18 inches of floss
2. Wrap most around your middle fingers
3. Hold tightly between thumbs and index fingers
4. Slide gently between teeth
5. Curve into a C shape against one tooth
6. Move up and down against the side
7. Repeat on the other tooth
8. Don't forget the back of your last teeth!

**Other Tips:**
- Use a toothpaste with fluoride
- Limit sugary snacks and drinks
- Drink plenty of water
- Don't use tobacco products
- Visit your dentist regularly

**Remember:**
A clean mouth is a healthy mouth!`,
      keyTerms: [
        { term: 'plaque', definition: 'A sticky film of bacteria that forms on your teeth' },
        { term: 'tartar', definition: 'Hardened plaque that can only be removed by a dentist' },
        { term: 'fluoride', definition: 'A mineral that strengthens teeth and prevents cavities' },
        { term: 'gingivitis', definition: 'Early gum disease causing red, swollen gums' },
      ],
      analogies: [
        'Brushing is like washing your car - you need to clean all the surfaces, not just the parts people see.',
        'Floss is like a shower for between your teeth - brushing alone isn\'t enough.',
      ],
      examples: [
        'If you only brush once a day, do it at bedtime to remove all the day\'s plaque.',
        'An electric toothbrush can help you brush for the full 2 minutes.',
      ],
      patientCounselingPoints: [
        'Most people only brush for 45 seconds - use a timer or electric toothbrush with a built-in timer',
        'Flossing before brushing lets fluoride reach between teeth better',
        'Replace your toothbrush every 3-4 months or after you\'ve been sick',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective oral hygiene requires mechanical plaque removal through brushing and interdental cleaning combined with chemical plaque control via fluoride toothpaste. Regular professional cleanings complement home care.',
      explanation: `## Plaque Control

**Dental Plaque Biofilm:**
- Complex community of bacteria
- Forms within 24 hours without cleaning
- Maturation increases pathogenicity
- Must be disrupted regularly

**Plaque-Induced Diseases:**
- Caries (tooth decay)
- Gingivitis (gum inflammation)
- Periodontitis (gum disease with bone loss)
- Peri-implantitis (around implants)

## Tooth Brushing

**Brush Types:**

| Type | Pros | Cons |
|------|------|------|
| Manual | Inexpensive, portable | Technique dependent |
| Electric (oscillating) | Superior plaque removal | Cost, charging |
| Electric (sonic) | Fluid dynamics, timer | Cost |
| Sustainable (bamboo) | Eco-friendly | May wear faster |

**Brushing Techniques:**

*Bass Method (Recommended for most):*
- Bristles at 45-degree angle toward gumline
- Small circular motions
- Emphasizes gingival margin
- Most effective for plaque removal
- Technique for gingivitis/periodontitis patients

*Modified Bass:*
- Same as Bass, plus sweeping stroke away from gumline
- Cleans tooth surface after gingival area

*Stillman Method:*
- Bristles at 45-degree angle
- Press against gingiva, pull toward incisal/occlusal
- For massaging gingiva (controversial benefit)

*Charter Method:*
- Bristles at 45-degree angle toward occlusal
- Used with orthodontic appliances, fixed prostheses

**Toothbrush Selection:**
- Soft bristles (medium/hard can damage enamel and gingiva)
- Small head for posterior access
- Replacement: Every 3-4 months or after illness
- Signs of wear: Bristle splaying, loss of shape

## Interdental Cleaning

**Dental Floss:**
- Nylon: Multiple filaments, may shred
- PTFE (monofilament): Slides easily, shred-resistant
- Waxed: Easier between tight contacts
- Unwaxed: Better cleaning capacity, squeaks when clean
- Tape: Wider, for wider spaces

**Floss Holders:**
- Useful for dexterity limitations
- Children learning to floss
- Back teeth access
- Fixed orthodontic appliances

**Interdental Brushes:**
- Sizes: Color-coded by diameter
- Indicated for open contacts, embrasures
- More effective than floss for open embrasures
- Should fit snugly but without force

**Water Flossers (Oral Irrigators):**
- Pulsating water stream
- Useful for: Orthodontics, bridges, implants, dexterity issues
- Adjunct to, not replacement for, floss
- Evidence: Reduces gingivitis comparable to floss

**Wooden Sticks/Plastic Picks:**
- Stimulate gingiva
- Dislodge food particles
- Limited plaque removal compared to floss

## Toothpaste

**Essential Ingredients:**
- Fluoride (1000-1500 ppm OTC, 5000 ppm Rx)
- Abrasives (silica, calcium carbonate)
- Detergents (SLS - foaming)
- Humectants (prevent hardening)
- Flavoring (mint, etc.)
- Binders (stability)

**Specialized Toothpastes:**
- Desensitizing: Potassium nitrate, stannous fluoride
- Tartar control: Pyrophosphates
- Whitening: Higher abrasives, peroxides
- SLS-free: For aphthous ulcers, sensitivity
- Natural: Alternative ingredients

**Amount:**
- Adults: Full brush (pea-sized recommended by ADA)
- Children <3: Smear/rice grain
- Children 3-6: Pea-sized
- Spit, don't rinse: Maximizes fluoride benefit

## Mouthrinse

**Therapeutic vs. Cosmetic:**

| Type | Purpose | Evidence |
|------|---------|----------|
| Cosmetic | Breath freshening | Temporary |
| Fluoride | Caries prevention | Strong |
| Antiseptic (CHX) | Plaque reduction (short-term) | Strong |
| Essential oil | Plaque/gingivitis reduction | Moderate |
| Peroxide | Whitening | Weak |

**Chlorhexidine (0.12%):**
- Gold standard anti-plaque agent
- Prescription use only (US)
- Indications: Perio surgery, high caries risk
- Side effects: Staining, taste alteration
- Duration: 2-4 weeks maximum

## Tongue Cleaning

**Methods:**
- Tongue scraper (plastic, metal, copper)
- Toothbrush (use dedicated brush or back of brush)
- Reduces volatile sulfur compounds (bad breath)

**Technique:**
- Start at back, pull forward
- Rinse after each stroke
- Once daily is sufficient

## Oral Hygiene Aids for Special Needs

**Orthodontics:**
- Interdental brushes for around brackets
- Floss threaders or super floss
- Water flosser
- Orthodontic toothbrush (notched middle)

**Bridges:**
- Floss threaders
- Bridge floss (stiffened end)
- Water flosser
- Interdental brushes

**Implants:**
- Implant-specific brushes
- Proper flossing technique
- Avoid scrubs that damage mucosa

**Dexterity Limitations:**
- Electric toothbrush
- Floss holder
- Adaptive grips
- Caregiver assistance

**Xerostomia (dry mouth):**
- Dry mouth toothpaste/mouthrinse
- Alcohol-free products
- Sugar-free gum/mints (xylitol)
- Frequent sips of water`,
      keyTerms: [
        { term: 'biofilm', definition: 'Complex community of microorganisms attached to a surface' },
        { term: 'Bass method', definition: 'Recommended brushing technique with 45° angle and circular motions' },
        { term: 'interdental', definition: 'Between teeth; the space where teeth contact each other' },
        { term: 'xerostomia', definition: 'Dry mouth; reduced salivary flow' },
        { term: 'SLS', definition: 'Sodium lauryl sulfate; detergent in toothpaste causing foaming' },
      ],
      analogies: [
        'Biofilm is like a city - simple bacteria start it, others join, and it becomes a complex community.',
        'Interdental brushes are like pipe cleaners - they scrub the spaces between teeth.',
      ],
      clinicalNotes: 'Patients often overestimate their oral hygiene effectiveness. Plaque disclosure agents can reveal missed areas. Most people brush for <1 minute despite recommendations for 2 minutes. Electric toothbrushes with timers improve compliance.',
      patientCounselingPoints: [
        'The most important time to brush is before bedtime - plaque accumulates overnight',
        'If you can\'t floss, interdental brushes are a good alternative for some',
        'Dry mouth increases cavity risk - use fluoride products and stay hydrated',
      ],
    },
    3: {
      level: 3,
      summary: 'Oral hygiene efficacy depends on both mechanical removal of dental biofilm and chemical modification of plaque ecology. Optimal home care requires patient-specific strategies based on disease risk, anatomy, and dexterity.',
      explanation: `## Biofilm Management

**Dental Plaque as Biofilm:**

*Structure:*
- Acquired pellicle: Glycoprotein coating on tooth (minutes)
- Initial colonizers: Gram-positive cocci (hours)
- Secondary colonizers: Co-aggregation (days)
- Maturation: Complex community, EPS matrix (weeks)

*EPS (Extracellular Polymeric Substance):*
- Glucans, fructans from bacterial metabolism
- Provides adhesion and protection
- Creates diffusion barrier
- Limits antimicrobial penetration

*Biofilm Properties:*
- 1000x more resistant to antimicrobials than planktonic bacteria
- Persister cells survive treatment
- Recolonization after disruption

**Mechanical Disruption:**

*Plaque Disruption Frequency:*
- Critical interval: ~24 hours
- Maturation to pathogenic state: 2-3 days
- Daily disruption prevents pathogenic shift

*Effectiveness:*
- Proper brushing: 50-70% plaque removal
- Brushing + flossing: 80-90% plaque removal
- Power brush vs. manual: Similar with proper technique
- With poor technique: Power brush superior

**Chemical Plaque Control:**

*Antimicrobial Mechanisms:*
- Bactericidal: Kills bacteria (CHX)
- Bacteriostatic: Inhibits growth (fluoride)
- Anti-adherence: Prevents attachment
- Metabolic interference: Reduces acid production

*Fluoride Actions:*
1. Enamel enhancement: Fluorapatite formation
2. Remineralization: Accelerates deposit of calcium-phosphate
3. Inhibition: Enolase enzyme inhibition in bacteria
4. Surface effects: Reduces enamel solubility

*Essential Oils (Listerine):*
- Thymol, eucalyptol, menthol, methyl salicylate
- Disrupts cell membrane
- Reduces plaque and gingivitis 20-30%
- Twice daily use required

*Cetylpyridinium Chloride (CPC):*
- Cationic surfactant
- Disrupts bacterial membrane
- Moderate anti-plaque effect
- Can cause staining

*Chlorhexidine:*
- Cationic, binds to oral surfaces
- Substantive: 12-hour activity
- Gold standard short-term anti-plaque
- 12-month maximum continuous use (staining, taste)

*Povidone Iodine:*
- Broad-spectrum antimicrobial
- Reduces S. mutans counts
- Limited duration due to taste, staining

*Triclosan/Copolymer:*
- Removed from most markets
- Formerly in Colgate Total
- Anti-inflammatory, anti-plaque

**Chemical Agents Summary:**

| Agent | Anti-plaque | Anti-gingivitis | Duration |
|-------|-------------|-----------------|----------|
| CHX | ++++ | ++++ | Short-term only |
| Essential oils | ++ | ++ | Long-term OK |
| CPC | ++ | ++ | Long-term OK |
| Fluoride | + | + | Preventive |
| Povidone iodine | +++ | +++ | Short-term |

## Disease-Specific Protocols

**Caries Prevention:**

*High Risk:*
- 5000 ppm fluoride toothpaste
- Daily fluoride rinse (0.05% NaF)
- Fluoride varnish every 3-6 months
- Xylitol products (5-10g/day)
- Chlorhexidine short courses for high S. mutans

*Moderate Risk:*
- 1000-1500 ppm fluoride toothpaste
- Daily fluoride rinse optional
- Fluoride varnish annually

*Root Caries:*
- Chlorhexidine gel to exposed roots
- High-fluoride toothpaste
- Dietary counseling
- 3-month recall

**Periodontal Maintenance:**

*After Periodontal Treatment:*
- Bass technique emphasis
- Interproximal cleaning priority
- Weekly chlorhexidine for persistent inflammation
- Power brush consideration
- Water flosser as adjunct

*Maintenance Interval:*
- Standard: 3 months
- High risk: 2 months
- Lower risk after stability: 4 months

**Peri-implant Mucositis Prevention:**
- Non-metal instruments (titanium picks, plastic scalers)
- Avoid abrasion of implant surface
- Specialized brushes (narrow single-tuft)
- No abrasive paste on exposed threads

**Orthodontic Patients:**
- Fluoride use with brackets:
  - Daily fluoride rinse
  - Fluoride varnish every 3-6 months
  - High-fluoride toothpaste for high risk
- Interdental cleaning through brackets essential
- Disclosing tablets for education

## Patient Behavior Modification

**Motivational Interviewing:**
- Patient-centered approach
- Elicits change talk
- Resists righting reflex
- Supports self-efficacy

**Stages of Change Model:**
1. Precontemplation: Not considering change
2. Contemplation: Thinking about change
3. Preparation: Planning for change
4. Action: Implementing change
5. Maintenance: Sustaining change
6. Relapse: Returning to old behavior

**Barriers to Compliance:**
- Lack of perceived need
- Lack of time
- Forgetfulness
- Cost
- Dexterity issues
- Lack of motivation
- Competing priorities

**Improving Adherence:**
- Clear, simple instructions
- Demonstration
- Written reinforcement
- Electronic reminders
- Habit stacking (pair with existing habit)
- Social support
- Self-monitoring (apps, timers)
- Goal setting and feedback

**OHA (Oral Hygiene Instructions) Best Practices:**
- Assess current habits first
- Demonstrate in patient's mouth
- Use mirror for feedback
- Teach one skill at a time
- Provide written materials
- Follow up on adherence`,
      keyTerms: [
        { term: 'EPS', definition: 'Extracellular polymeric substance; biofilm matrix material' },
        { term: 'substantive', definition: 'Ability to adhere to and remain active on surfaces for extended period' },
        { term: 'planktonic', definition: 'Free-floating bacteria (vs. biofilm-embedded)' },
        { term: 'OHI', definition: 'Oral hygiene instructions; patient education on home care' },
        { term: 'motivational interviewing', definition: 'Patient-centered counseling style to elicit behavior change' },
      ],
      clinicalNotes: 'Plaque disclosure is a powerful educational tool - shows patients what they\'re missing. Bass technique is most evidence-based. Power brushes improve compliance, especially in children, elderly, and those with dexterity issues. CHX is the most effective anti-plaque agent but staining limits long-term use.',
      patientCounselingPoints: [
        'Biofilm reforms in 24 hours - don\'t skip even one day of cleaning',
        'If gums bleed when flossing, that\'s a sign of inflammation - keep flossing and it will improve',
        'Power brushes can make up for technique deficiencies',
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary oral hygiene integrates biofilm science, molecular approaches to plaque control, and personalized prevention based on genetic, microbiome, and behavioral factors. Novel technologies expand options for mechanical and chemical plaque management.',
      explanation: `## Advanced Biofilm Science

**Quorum Sensing:**
- Cell-to-cell communication
- Autoinducer molecules accumulate
- Threshold triggers coordinated gene expression
- Targets for anti-biofilm strategies

**Persister Cells:**
- Dormant subpopulation
- Survive antimicrobial exposure
- Repopulate biofilm after treatment
- Challenge to eradication

**Biofilm Dispersal:**
- Enzymatic matrix degradation
- Dispersin B: Degrades PIA/PNAG
- DNase: Breaks down eDNA
- Potential therapeutic target

## Novel Mechanical Technologies

**Ultrasonic/Ultrasonic Toothbrushes:**
- High-frequency vibrations (20 kHz+)
- Cavitation: Bubble formation and collapse
- Fluid dynamics beyond bristle contact
- Evidence: Improved plaque removal

**Ionic Toothbrushes:**
- Claim to repel plaque from tooth surface
- Weak evidence for superiority
- Controversial mechanism

**UV Sanitizing:**
- UV light in brush head storage
- Reduces bacterial contamination
- Limited clinical significance

**Smart Toothbrushes:**
- Pressure sensors
- Position tracking
- Duration monitoring
- Smartphone connectivity
- May improve compliance through feedback

**Water Flosser Advances:**
- Adjustable pressure settings
- Multiple tips for different applications
- Portable, cordless options
- Evidence: Comparable to floss for gingivitis reduction

## Advanced Chemical Approaches

**Arginine-Based Products:**
- Arginine bicarbonate + calcium carbonate
- Neutralizes acid, supports beneficial bacteria
- Mechanism: Substrate for arginolytic bacteria (S. sanguinis)
- Produces ammonia, raises pH
- Clinical: Reduces dentin hypersensitivity, modest caries benefit

**Nanohydroxyapatite Toothpaste:**
- Particle size: 20-100 nm
- Fills enamel microporosities
- Remineralization potential
- Popular in Japan, emerging elsewhere

**Bioactive Glass:**
- Releases calcium, phosphate, sodium, silica
- Precipitates hydroxycarbonate apatite
- Occludes dentinal tubules
- Reduces sensitivity, may remineralize

**Enzyme-Modifying Products:**
- Mutanase: Degrades glucans
- Dextranase: Degrades dextrans
- Oxidase: Alters redox potential
- Experimental, limited availability

**Probiotic Approaches:**
- L. reuteri, L. brevis lozenges
- S. salivarius M18, K12
- Mechanism: Competitive exclusion, bacteriocins
- Evidence: Modest benefit, ongoing research

## Microbiome-Targeted Strategies

**Prebiotics:**
- Substrates promoting beneficial bacteria
- Arginine, nitrate
- Polyphenols
- Goal: Shift ecology toward health

**Synbiotics:**
- Probiotic + prebiotic combination
- Enhanced survival and colonization
- Limited clinical evidence

**Phage Therapy:**
- Bacteriophages against S. mutans
- Species-specific
- Early research stage

**Targeted Antimicrobials:**
- Anti-S. mutans antibodies
- Glucosyltransferase inhibitors
- Cell wall synthesis inhibitors
- Experimental

## Genomic and Personalized Approaches

**Genetic Susceptibility:**
- AMELX, ENAM variants: Enamel defects
- CA6 polymorphisms: Saliva composition
- TAS1R variants: Sweet preference
- Future: Genetic risk-based protocols

**Microbiome Analysis:**
- 16S rRNA sequencing
- Pathogen quantification
- Personalized antimicrobial selection
- Research to clinical pipeline

**Salivary Diagnostics:**
- Pathogen testing (S. mutans, lactobacilli)
- Acid production capacity
- Buffer capacity
- Flow rate
- Biomarker panels: IL-1β, MMP-8

**AI-Powered Recommendations:**
- Risk assessment algorithms
- Personalized product selection
- Adherence monitoring
- Intervention timing

## Special Populations

**Geriatric Considerations:**
- Root caries prevention
- Xerostomia management
- Dexterity adaptations
- Cognitive decline adaptations
- Polypharmacy effects on oral health

**Pediatric Approaches:**
- Parental responsibility until age 8
- Twice-daily brushing supervision
- Fluoride toothpaste age-based dosing
- Early establishment of habits
- Behavioral techniques: Rewards, charts, apps

**Pregnancy:**
- Gingivitis prevention (hormone-mediated)
- Morning sickness erosion protection
- Safe fluoride use emphasized
- Infant oral health counseling

**Head and Neck Radiation:**
- Severe xerostomia
- Aggressive caries prevention
- Daily fluoride application
- Frequent professional care
- Saliva substitutes

**Eating Disorders:**
- Perimylolysis: Erosion from vomiting
- Comprehensive fluoride regimen
- Avoid brushing immediately after vomiting
- Rinse with baking soda
- Professional collaboration

**Dementia:**
- Caregiver training essential
- Simplified protocols
- Power brushes often helpful
- Mouth props may be needed
- Eventually requires full caregiver assistance`,
      keyTerms: [
        { term: 'quorum sensing', definition: 'Bacterial cell-to-cell communication regulating gene expression based on population density' },
        { term: 'persister cells', definition: 'Dormant bacterial cells that survive antimicrobial treatment' },
        { term: 'arginolytic', definition: 'Producing ammonia from arginine; raises pH, associated with oral health' },
        { term: 'perimylolysis', definition: 'Erosion of teeth due to frequent vomiting (eating disorders)' },
        { term: 'synbiotic', definition: 'Combination of probiotic and prebiotic' },
      ],
      clinicalNotes: 'Power brushes improve compliance significantly in most populations. Water flossers are effective adjuncts, especially for difficult-to-clean areas. CHX remains most effective short-term but staining limits use. Arginine products show promise for pH neutralization.',
    },
    5: {
      level: 5,
      summary: 'The future of oral hygiene integrates smart technologies, microbiome engineering, and precision medicine approaches. Emerging research explores biofilm quorum sensing disruption, enzymatic plaque control, and AI-driven personalized preventive protocols.',
      explanation: `## Frontiers in Oral Hygiene

### Digital Health and AI

**Smart Ecosystem:**
- Connected toothbrush, floss, water flosser
- AI analysis of brushing patterns
- Real-time feedback and coaching
- Adherence tracking and gamification
- Integration with electronic health records

**Computer Vision:**
- Smartphone camera plaque detection
- AI-powered assessment
- Color-coded feedback
- Progress tracking over time

**Wearable Technology:**
- Intraoral sensors
- pH monitoring
- Biomarker detection
- Continuous data streams

### Novel Mechanical Approaches

**Ultrasonic and Sonic Advances:**
- Multiple frequency modes
- Subgingival penetration
- Cavitation enhancement
- Targeted biofilm disruption

**Robotic Brushing:**
- Automated positioning
- Consistent pressure
- Coverage optimization
- Accessibility for special needs

**Novel Bristle Designs:**
- Multi-length bristles
- Tapered tips
- Centered bristles for interproximal
- Material advances

### Biofilm-Targeted Strategies

**Quorum Sensing Inhibition:**
- Enzyme degradation of autoinducers
- Receptor antagonists
- Prevents pathogenic coordination
- Prevents biofilm maturation

**Anti-Adhesion Approaches:**
- Surface coating modification
- Competitive binding agents
- Blocking pellicle formation
- Non-stick surface technology

**Enzyme-Based Plaque Removal:**
- Mutanase, dextranase
- Dispersin B analogs
- DNase formulations
- Matrix-degrading enzymes

**Photodynamic Therapy:**
- Photosensitizer + specific wavelength
- Reactive oxygen species generation
- Kills bacteria, disrupts biofilm
- Adjunctive professional use

### Precision Prevention

**Genetic Risk Stratification:**
- Polygenic risk scores
- Enamel gene variants
- Immune response profiles
- Personalized fluoride regimens

**Microbiome Engineering:**
- Full sequencing analysis
- Functional metagenomics
- Precision probiotics
- Prebiotic targeting
- Synthetic consortia

**Salivary Biomarker Panels:**
- Disease activity markers
- Treatment response monitoring
- Risk assessment
- Chairside point-of-care

**Metabolomic Profiling:**
- Pathway analysis
- Bacterial metabolic output
- Acid production capacity
- pH dynamics

### Regenerative Approaches

**Enamel Remineralization:**
- Biomimetic approaches
- Peptide-guided crystal growth
- Nanoparticle delivery
- Hierarchical structure restoration

**Dentin-Pulp Regeneration:**
- Pulp capping biomaterials
- Stem cell homing
- Scaffold-based approaches
- Vascularization strategies

### Future Clinical Practice

**Predictive Modeling:**
- Machine learning risk calculators
- Individualized recall intervals
- Targeted intervention timing
- Resource optimization

**Population Health:**
- Community-wide risk screening
- School-based programs
- Tele-dentistry for remote areas
- Public health surveillance

**Integration with Systemic Health:**
- Oral health as vital sign
- Medical-dental record integration
- Collaborative care pathways
- Outcomes research

**Challenges:**
- Evidence generation
- Regulatory approval
- Reimbursement models
- Accessibility and equity
- Clinical workflow integration
- Patient acceptance

**Research Priorities:**
- Biofilm dispersal agents
- Non-antibiotic antimicrobials
- Microbiome therapeutics
- Smart diagnostics
- Prevention over intervention`,
      keyTerms: [
        { term: 'computer vision', definition: 'AI field enabling computers to interpret and understand visual information' },
        { term: 'polygenic risk score', definition: 'Calculation of genetic risk based on multiple genetic variants' },
        { term: 'metabolomics', definition: 'Study of small molecules (metabolites) in biological systems' },
      ],
      clinicalNotes: `Clinical practice transformation:
1. AI-powered oral health apps will provide real-time coaching and feedback
2. Salivary diagnostics will enable personalized prevention protocols
3. Microbiome analysis will guide targeted antimicrobial selection
4. Smart connected devices will improve adherence through monitoring
5. Precision dentistry will integrate genetic, microbiome, and behavioral data`,
    },
  },

  media: [
    {
      id: 'bass-technique',
      type: 'diagram',
      filename: 'bass-brushing-technique.svg',
      title: 'Bass Brushing Technique',
      description: 'Proper angle and motion for Bass brushing technique',
    },
    {
      id: 'flossing-technique',
      type: 'diagram',
      filename: 'proper-flossing-technique.svg',
      title: 'Proper Flossing Technique',
      description: 'Step-by-step guide to proper flossing',
    },
  ],

  citations: [
    {
      id: 'darby-walsh',
      type: 'textbook',
      title: 'Dental Hygiene: Theory and Practice',
      authors: ['Darby, M.L.', 'Walsh, M.'],
      source: 'Elsevier',
      chapter: 'Chapters 10-15',
    },
    {
      id: 'ada-oral-health',
      type: 'website',
      title: 'American Dental Association - Brushing Your Teeth',
      source: 'American Dental Association',
      url: 'https://www.ada.org/en/member-center/oral-health-topics/brushing-your-teeth',
    },
  ],

  crossReferences: [
    { targetId: 'topic-fluoride', targetType: 'topic', relationship: 'related', label: 'Fluoride' },
    { targetId: 'condition-tooth-decay', targetType: 'condition', relationship: 'related', label: 'Tooth Decay' },
    { targetId: 'condition-gum-disease', targetType: 'condition', relationship: 'related', label: 'Gum Disease' },
    { targetId: 'procedure-professional-cleanings', targetType: 'topic', relationship: 'related', label: 'Professional Cleanings' },
  ],

  tags: {
    systems: ['dental'],
    structures: [],
    topics: ['prevention', 'patient-education', 'health-behavior'],
    keywords: ['oral hygiene', 'brushing', 'flossing', 'plaque control', 'prevention', 'home care'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oralHygiene;
