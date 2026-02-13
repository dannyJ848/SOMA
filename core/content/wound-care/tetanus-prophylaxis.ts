/**
 * Tetanus Prophylaxis
 *
 * Comprehensive content on tetanus basics, vaccination guidelines,
 * wound classification for tetanus risk, and prophylaxis decisions.
 */

import { EducationalContent } from '../types';

export const tetanusProphylaxis: EducationalContent = {
  id: 'wound-care-tetanus-prophylaxis',
  type: 'topic',
  name: 'Tetanus Prophylaxis',
  alternateNames: ['Tetanus Prevention', 'Tetanus Vaccination', 'Lockjaw Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Tetanus ("lockjaw") is a serious disease caused by bacteria in dirt and rust. A tetanus shot protects you. You need a booster every 10 years, or sooner after certain wounds.',
      explanation: `Tetanus is a dangerous disease that causes your muscles to lock up painfully. It's sometimes called "lockjaw" because the jaw muscles are often affected first. The good news is that tetanus shots are very effective at preventing it.

## What Is Tetanus?

- Caused by bacteria called Clostridium tetani
- These bacteria live in soil, dust, and animal droppings
- They get into your body through wounds
- The bacteria make a poison (toxin) that affects nerves
- This causes painful muscle stiffness and spasms

## How Tetanus Affects the Body

**Early Signs:**
- Jaw stiffness (can't open mouth fully)
- Neck stiffness
- Difficulty swallowing
- Stiff muscles

**Serious Problems:**
- Whole body muscle spasms
- Breathing problems
- Broken bones from severe spasms
- Can be fatal

## Tetanus Shots (Vaccination)

### Types of Vaccines

**For Children:**
- DTaP - protects against Diphtheria, Tetanus, and Pertussis (whooping cough)
- Given at ages 2, 4, 6, and 15-18 months, and 4-6 years

**For Teens and Adults:**
- Tdap - a booster that includes all three
- Td - a booster for just Tetanus and Diphtheria

### Booster Schedule

- Everyone needs a tetanus booster every 10 years
- Tdap is recommended at least once as an adult
- After that, Td boosters every 10 years

## When You Need a Tetanus Shot for a Wound

### High-Risk Wounds (May Need Shot Sooner)

These wounds are more likely to cause tetanus:
- Deep puncture wounds (stepping on a nail)
- Wounds with dirt, feces, or saliva
- Wounds from rusty metal
- Crush injuries
- Burns
- Wounds with dead tissue
- Bite wounds

### If You Get a High-Risk Wound

**You need a tetanus shot if:**
- It's been more than 5 years since your last shot
- You're not sure when you had your last shot
- You've had fewer than 3 tetanus shots ever

**You may not need a shot if:**
- You've had 3 or more tetanus shots
- AND your last shot was less than 5 years ago

### For Clean, Minor Wounds

**You need a tetanus shot if:**
- It's been more than 10 years since your last shot
- You're not sure when you had your last shot
- You've had fewer than 3 tetanus shots ever

## Tetanus Immune Globulin (TIG)

Sometimes, if you have a high-risk wound and:
- Haven't had all your tetanus shots (less than 3), OR
- Don't know your shot history

You may get TIG in addition to the vaccine. TIG gives you immediate protection while your body builds immunity from the vaccine.

## Tetanus Prevention Tips

**Keep your vaccines up to date:**
- Get boosters every 10 years
- Keep a record of your vaccinations
- Ask for a tetanus shot if you're not sure

**Clean wounds properly:**
- Wash all wounds with soap and water
- Remove dirt and debris
- See a doctor for deep or dirty wounds

**When to seek medical care:**
- Deep puncture wounds
- Wounds you can't clean well
- Wounds from dirty or rusty objects
- If you haven't had a tetanus shot in 5+ years and have a concerning wound

## Tetanus Is Rare But Serious

- Very rare in the US because of vaccination (about 30 cases per year)
- More common in unvaccinated people
- Older adults and diabetics at higher risk
- Prevention is key since tetanus is difficult to treat`,
      keyTerms: [
        { term: 'tetanus', definition: 'A serious disease caused by bacteria that makes a toxin affecting nerves, causing painful muscle stiffness and spasms; also called lockjaw' },
        { term: 'Clostridium tetani', definition: 'The bacteria that causes tetanus; found in soil, dust, and animal droppings', pronunciation: 'klah-STRID-ee-um TET-an-eye' },
        { term: 'tetanus shot', definition: 'A vaccine that protects against tetanus; needs boosters every 10 years' },
        { term: 'TIG', definition: 'Tetanus Immune Globulin; a medicine that gives immediate protection against tetanus for high-risk wounds' },
      ],
      analogies: [
        'The tetanus vaccine is like training your body\'s security team to recognize a specific intruder. Every 10 years, they need a refresher course (booster) to stay alert.',
        'TIG is like hiring a temporary security guard while your own team is being trained - it provides immediate protection.',
        'The bacteria that cause tetanus are like hidden landmines in the soil - you can\'t see them, but they\'re dangerous if you step on something sharp.',
      ],
      examples: [
        'You step on a rusty nail in the garden. Even if it\'s been 7 years since your last tetanus shot, you should get one because this is a high-risk wound.',
        'You get a small paper cut at work. You don\'t need a tetanus shot because this is a clean, minor wound (unless it\'s been over 10 years since your last shot).',
        'A child scrapes their knee on the sidewalk. The pediatrician checks their vaccination record to see if they\'re up to date.',
      ],
    },

    2: {
      level: 2,
      summary: 'Tetanus prophylaxis decisions depend on wound classification (clean/minor vs. tetanus-prone) and immunization history. Guidelines recommend Tdap/Td based on time since last dose, with TIG added for tetanus-prone wounds in under-immunized patients.',
      explanation: `## Tetanus: The Disease

### Pathogen
- Clostridium tetani: Gram-positive, anaerobic, spore-forming bacillus
- Spores ubiquitous in environment (soil, dust, animal feces)
- Spores extremely resistant, survive years in environment

### Mechanism
1. Spores enter wound
2. Anaerobic environment allows germination
3. Bacteria produce tetanospasmin (neurotoxin)
4. Toxin travels retrograde along nerves to CNS
5. Blocks inhibitory neurotransmitters (GABA, glycine)
6. Results in unopposed muscle contraction

### Clinical Presentation

**Incubation:** 3-21 days (average 8 days)
- Shorter incubation = more severe disease

**Types:**
| Type | Features |
|------|----------|
| Generalized | Most common; trismus, risus sardonicus, opisthotonus, generalized spasms |
| Localized | Muscle rigidity near wound; may progress to generalized |
| Cephalic | Rare; after head injury; cranial nerve involvement |
| Neonatal | Umbilical infection; high mortality in developing countries |

**Classic Signs:**
- Trismus (lockjaw)
- Risus sardonicus (sardonic smile from facial spasms)
- Opisthotonus (arched back from spasms)
- Board-like abdominal rigidity
- Autonomic instability

### Prognosis
- Mortality 10-80% depending on access to intensive care
- Higher mortality: short incubation, rapid progression, elderly, unvaccinated
- Recovery takes weeks to months

## Tetanus Vaccines

### Vaccine Types

| Vaccine | Components | Use |
|---------|------------|-----|
| DTaP | Diphtheria, Tetanus, acellular Pertussis | Children <7 years |
| Tdap | Tetanus, diphtheria (reduced), acellular Pertussis | Adolescents, adults (one dose) |
| Td | Tetanus, diphtheria (reduced) | Adult boosters |
| TT | Tetanus toxoid only | Rarely used now |

### Recommended Schedule

**Children:**
- DTaP at 2, 4, 6, 15-18 months, and 4-6 years (5 doses)

**Adolescents:**
- Tdap at 11-12 years

**Adults:**
- Tdap once (if not previously received)
- Td booster every 10 years
- Tdap for pregnant women each pregnancy (27-36 weeks)

## Wound Classification for Tetanus

### Clean, Minor Wounds
- Clean, superficial wounds
- No significant contamination
- No devitalized tissue
- Examples: Paper cuts, clean knife cuts, surgical incisions

### Tetanus-Prone Wounds

| Feature | Description |
|---------|-------------|
| Contamination | Dirt, soil, feces, saliva |
| Mechanism | Puncture, crush, avulsion, burn, frostbite |
| Tissue | Devitalized or necrotic tissue |
| Timing | >6 hours old |
| Configuration | Deep, stellate |
| Foreign material | Retained foreign body |

**Examples:**
- Stepping on a nail
- Animal or human bites
- Agricultural injuries
- Injection drug use
- Burns
- Crush injuries

## Prophylaxis Guidelines (ACIP)

### Decision Matrix

| Vaccination History | Clean, Minor Wound | Tetanus-Prone Wound |
|--------------------|-------------------|---------------------|
| Unknown or <3 doses | Tdap/Td | Tdap/Td + TIG |
| ≥3 doses, last ≥10 years | Tdap/Td | Tdap/Td |
| ≥3 doses, last 5-10 years | None | Tdap/Td |
| ≥3 doses, last <5 years | None | None |

### Key Points

**Vaccine (Tdap or Td):**
- Provides active immunization (body makes antibodies)
- Takes ~2 weeks to develop protection
- Tdap preferred if not previously received
- After Tdap, subsequent boosters can be Td

**TIG (Tetanus Immune Globulin):**
- Provides passive immunization (immediate antibodies)
- Dose: 250 units IM
- Give in separate site from vaccine
- For under-immunized patients with tetanus-prone wounds

### Immunocompromised Patients
- May have inadequate response to vaccination
- Consider TIG for tetanus-prone wounds even if vaccination history complete
- May benefit from checking antibody titers

## Special Situations

### Pregnancy
- Tdap recommended each pregnancy (27-36 weeks)
- Protects infant through passive antibody transfer
- If Tdap not given during pregnancy, give postpartum

### Unknown Vaccination History
- Assume unvaccinated
- Begin or complete primary series (3 doses)
- Add TIG for tetanus-prone wounds

### Wound Management
- Clean wound thoroughly
- Debride devitalized tissue
- Remove foreign material
- Proper wound care essential regardless of tetanus prophylaxis

### Documentation
- Record vaccine given (type, date, site, lot)
- Give patient written vaccination record
- Enter in immunization registry if available

## Tetanus Epidemiology

**United States:**
- ~30 cases per year
- Mostly in unvaccinated or incompletely vaccinated adults
- Elderly and injection drug users at higher risk
- No herd immunity (not transmitted person-to-person)

**Global:**
- ~50,000 deaths annually (declining)
- Neonatal tetanus a major issue in developing countries
- Maternal immunization programs critical`,
      keyTerms: [
        { term: 'tetanospasmin', definition: 'The neurotoxin produced by Clostridium tetani; one of the most potent toxins known', pronunciation: 'TET-an-oh-spaz-min' },
        { term: 'trismus', definition: 'Inability to fully open the mouth due to jaw muscle spasm; classic early sign of tetanus', pronunciation: 'TRIZ-mus' },
        { term: 'opisthotonus', definition: 'Severe back muscle spasm causing arched posture; seen in generalized tetanus', pronunciation: 'oh-pis-THOT-oh-nus' },
        { term: 'tetanus-prone wound', definition: 'Wound with high risk for tetanus: contaminated, puncture, crush, burn, or containing devitalized tissue' },
        { term: 'primary series', definition: 'Initial set of vaccine doses (typically 3 for tetanus) needed to establish baseline immunity' },
      ],
      clinicalNotes: 'Always ask about tetanus vaccination status for any wound. When in doubt about history, vaccinate. TIG must be given at a different site than the vaccine to avoid interference. Wound care (cleaning, debridement) is essential and should not be overlooked in favor of immunization alone.',
    },

    3: {
      level: 3,
      summary: 'Tetanus prophylaxis integrates wound risk assessment, immunization status evaluation, and ACIP guidelines to determine need for Tdap/Td vaccination and/or TIG, with special considerations for immunocompromised patients, pregnancy, and catch-up vaccination.',
      explanation: `## Tetanus Pathophysiology

### Clostridium tetani Biology

**Organism:**
- Gram-positive, obligate anaerobe
- Motile with peritrichous flagella
- Terminal spore ("drumstick" or "tennis racket" appearance)

**Spore Characteristics:**
- Highly resistant to heat, desiccation, disinfectants
- Survive boiling for 20+ minutes
- Can persist in soil for decades
- Germinate in anaerobic, low-oxidation reduction potential environments

**Toxin Production:**
- Tetanospasmin: A-B type neurotoxin
- Heavy chain (B): Binding to gangliosides
- Light chain (A): Zinc endopeptidase activity
- One of the most potent toxins (lethal dose ~2.5 ng/kg)

### Pathogenesis

1. **Entry:** Spores enter wound
2. **Germination:** Anaerobic conditions trigger germination
3. **Toxin production:** Vegetative bacteria produce tetanospasmin
4. **Retrograde transport:** Toxin taken up at neuromuscular junction, travels retrograde up motor neurons
5. **Transcytosis:** Crosses to inhibitory interneurons in spinal cord
6. **SNARE cleavage:** Light chain cleaves synaptobrevin (VAMP)
7. **Inhibition blocked:** Cannot release GABA and glycine
8. **Unopposed excitation:** Results in muscle spasm and rigidity

### Clinical Syndrome

**Incubation Period:**
- Range: 3 days to 3 weeks (rarely months)
- Median: 7-8 days
- Shorter incubation correlates with:
  - Closer wound to CNS
  - Larger toxin load
  - More severe disease

**Generalized Tetanus (80%):**

| Phase | Features |
|-------|----------|
| Prodrome | Fatigue, headache, restlessness, irritability |
| Early | Trismus (lockjaw), risus sardonicus, neck stiffness |
| Established | Generalized rigidity, reflex spasms, opisthotonus |
| Autonomic | Labile BP, tachycardia, arrhythmias, sweating |

**Severity Grading:**

| Grade | Description | Features |
|-------|-------------|----------|
| I | Mild | Trismus, dysphagia, mild rigidity |
| II | Moderate | Above + spasms, moderate dysphagia |
| III | Severe | Above + frequent spasms, respiratory compromise |
| IV | Very severe | Above + violent autonomic instability |

## Immunization Science

### Vaccine Immunogenicity

**Primary Series:**
- 3 doses produce protective antibody levels (>0.1 IU/mL)
- 99%+ efficacy after complete series

**Booster Response:**
- Anamnestic response to booster
- Peak antibodies at 2-4 weeks
- Duration: ~10 years at protective levels

**Correlate of Protection:**
- Anti-tetanus toxoid IgG >0.1 IU/mL = protective
- Natural infection does not confer immunity (toxin dose too small)

### Waning Immunity

| Time Since Vaccination | Percentage Protected |
|-----------------------|---------------------|
| 0-10 years | >95% |
| 10-20 years | ~70% |
| >20 years | ~50% |
| Never vaccinated | 0% |

### Passive Immunization (TIG)

**Mechanism:**
- Pre-formed anti-tetanus antibodies
- Immediate protection
- Neutralizes unbound toxin
- Does not affect toxin already bound to neurons

**Pharmacokinetics:**
- Half-life: ~28 days
- Provides protection for 4+ weeks
- Standard dose: 250 units IM (prophylaxis)

## ACIP Guidelines: Detailed Application

### Vaccination History Assessment

**Documented History:**
- Review immunization records
- Check immunization registries
- Accept written records from reliable sources

**Unknown History:**
- Consider unvaccinated
- Begin primary series
- Three doses minimum for protection

### Wound Assessment

**Clean, Minor Wounds:**
- Uncontaminated
- Linear edges
- Minimal tissue damage
- <6 hours old
- Examples: Clean cuts, surgical wounds

**Tetanus-Prone Wounds:**
- Contaminated with dirt, feces, saliva
- Puncture, crush, avulsion, missile
- Burns, frostbite
- >6 hours old
- Significant devitalized tissue
- Foreign body present

### Prophylaxis Decision Table (Expanded)

| History | Clean, Minor | Tetanus-Prone |
|---------|--------------|---------------|
| Unknown or <3 doses | Tdap/Td (start/complete series) | Tdap/Td + TIG (start/complete series) |
| ≥3 doses, last ≥10 years | Tdap/Td | Tdap/Td |
| ≥3 doses, last 5-10 years | None | Tdap/Td |
| ≥3 doses, last <5 years | None | None |

### Tdap vs. Td Selection

**Prefer Tdap if:**
- Patient has not received Tdap previously
- Any wound in previously Tdap-naive adult
- Pregnancy (27-36 weeks)
- Close contact of infant <12 months

**Td Acceptable:**
- Patient previously received Tdap
- Tdap unavailable

### TIG Administration

**Indication:**
- Tetanus-prone wound AND
- <3 documented doses OR unknown history

**Dose:**
- 250 units IM

**Technique:**
- Give at different site than vaccine
- Ideally different limb
- If same limb, separate by at least 5 cm

**Special Situations:**
- Large/heavily contaminated wounds: Some experts suggest 500 units
- Immunocompromised: Consider TIG regardless of vaccination history

## Special Populations

### Immunocompromised

**Considerations:**
- May have inadequate vaccine response
- Consider TIG for all tetanus-prone wounds
- May check titers if time permits
- HIV: Usually respond to vaccination; TIG threshold lower

### Pregnancy

**ACIP Recommendations:**
- Tdap each pregnancy (27-36 weeks)
- Optimal timing: Early in window (27-30 weeks)
- Protects infant via transplacental antibody
- If not given during pregnancy, give immediately postpartum

### Elderly

**Risk Factors:**
- Waning immunity more pronounced
- May never have completed primary series
- Higher tetanus incidence
- Consider lower threshold for vaccination

### Injection Drug Users

**High-Risk Group:**
- Wound contamination from non-sterile injection
- Skin popping creates deep tissue infection risk
- Often incomplete vaccination history
- Aggressive prophylaxis recommended

## Catch-Up Vaccination

### Primary Series for Adults

**Previously Unvaccinated:**
- Dose 1: Tdap (preferred) or Td
- Dose 2: Td, 4+ weeks after dose 1
- Dose 3: Td, 6-12 months after dose 2
- Then Td every 10 years

### Incomplete Series

**<3 doses documented:**
- Do not restart series
- Give doses needed to complete series
- Use Tdap for one dose if not previously received

## Documentation and Communication

### Record Keeping
- Document vaccine type, date, lot, site, route
- Provide written record to patient
- Report to immunization information system

### Patient Education
- Explain tetanus risk and prevention
- Schedule next booster (or series completion)
- Discuss wound care
- Return precautions for infection signs`,
      keyTerms: [
        { term: 'synaptobrevin', definition: 'SNARE protein essential for neurotransmitter release; cleaved by tetanus toxin to block inhibitory neurotransmission', pronunciation: 'sin-AP-toh-brev-in' },
        { term: 'anamnestic response', definition: 'Rapid, enhanced antibody response on re-exposure to antigen; basis for booster effectiveness' },
        { term: 'correlate of protection', definition: 'Measurable immune response (e.g., antibody level) associated with protection from disease' },
        { term: 'anti-tetanus toxoid', definition: 'Antibodies against tetanus toxin; levels >0.1 IU/mL considered protective' },
        { term: 'catch-up vaccination', definition: 'Vaccination schedule for individuals who did not receive vaccines at recommended ages' },
      ],
      clinicalNotes: 'TIG only neutralizes unbound toxin - once tetanospasmin is bound to neurons, it cannot be removed. This is why wound care (debridement, antisepsis) and early TIG administration are critical. For immunocompromised patients, the threshold for TIG should be lower regardless of vaccination history.',
    },

    4: {
      level: 4,
      summary: 'Advanced tetanus prophylaxis requires understanding of toxin mechanisms, immunology of protection, nuanced application of guidelines to complex scenarios, and integration with wound management and public health systems.',
      explanation: `## Molecular Mechanisms

### Tetanospasmin Structure-Function

**Toxin Architecture:**
- Single polypeptide chain (150 kDa)
- Processed into heavy (100 kDa) and light (50 kDa) chains
- Linked by disulfide bond
- A-B toxin model

**Heavy Chain (B Fragment) Functions:**
- C-terminus (HC): Receptor binding
  - Binds gangliosides (GT1b, GD1b)
  - Binds nidogens
- N-terminus (HN): Translocation domain
  - pH-dependent membrane insertion
  - Forms pore for light chain entry

**Light Chain (A Fragment):**
- Zinc-dependent metalloprotease
- Cleaves synaptobrevin/VAMP at single peptide bond
- Irreversible modification

### Retrograde Transport

**Pathway:**
1. Toxin binds at neuromuscular junction
2. Endocytosis into motor neurons
3. Retrograde axonal transport (dynein-mediated)
4. Reaches cell body in spinal cord
5. Transcytosis to inhibitory interneurons
6. Light chain released into cytosol

**Target Neurons:**
- Renshaw cells (recurrent inhibition)
- Ia inhibitory interneurons (reciprocal inhibition)
- Results in loss of motor neuron inhibition

### SNARE Complex Disruption

**Normal Function:**
- Synaptobrevin (VAMP) part of SNARE complex
- SNARE complex mediates vesicle fusion
- Required for neurotransmitter release

**Toxin Effect:**
- Cleavage of synaptobrevin at Gln76-Phe77
- Prevents SNARE complex assembly
- Blocks GABA and glycine release
- Unopposed motor neuron firing → spasticity

## Immunology of Protection

### Vaccine-Induced Immunity

**Antigen Processing:**
- Tetanus toxoid processed by APCs
- Presented on MHC class II
- T-helper cell activation
- B-cell help for antibody production

**Antibody Response:**
- Primary response: IgM then IgG
- Class switching to IgG1 and IgG3 predominant
- Affinity maturation over time
- Memory B-cell generation

**T-Cell Response:**
- Th2 predominant
- IL-4, IL-5 production
- Essential for B-cell help
- Memory T-cell generation

### Correlates of Protection

**Antibody Levels:**
| Level (IU/mL) | Interpretation |
|---------------|----------------|
| <0.01 | No protection |
| 0.01-0.1 | Uncertain protection |
| 0.1-1.0 | Basic protection |
| >1.0 | Long-term protection |

**Functional Considerations:**
- Neutralizing antibody is key
- Avidity matters (higher = better)
- Measurement method affects interpretation

### Passive vs. Active Immunity

| Feature | TIG (Passive) | Vaccine (Active) |
|---------|---------------|------------------|
| Onset | Immediate | 1-2 weeks |
| Duration | 4-6 weeks | 10+ years |
| Memory | None | Yes |
| Mechanism | Pre-formed antibody | Stimulates immune response |
| Use | Immediate protection | Long-term prevention |

## Complex Clinical Scenarios

### Severely Contaminated Wounds

**Considerations:**
- Higher toxin load potential
- More aggressive debridement
- Consider higher TIG dose (500 units)
- May add metronidazole or penicillin
- Close observation

### Delayed Presentation

**>6 Hours After Injury:**
- Classified as tetanus-prone
- Wound care still critical
- Debride devitalized tissue
- Irrigation
- TIG if indicated

**>24 Hours After Injury:**
- Same approach as 6-24 hours
- Toxin may already be produced
- TIG still beneficial for unbound toxin
- Increased infection risk

### Post-Surgical Wounds

**Generally Clean:**
- Follow standard clean wound guidelines
- OR environment minimizes contamination
- GI or contaminated surgery: Assess individually

### Burns

**Tetanus Risk:**
- Burns are tetanus-prone wounds
- Devitalized tissue
- Often contaminated
- Barrier function loss

**Management:**
- Verify/provide tetanus prophylaxis
- TIG for incomplete immunization
- Part of initial burn assessment

### Chronic Wounds

**Considerations:**
- Pressure ulcers, diabetic ulcers
- Often colonized
- May become acutely contaminated
- Assess tetanus status on presentation
- Update vaccination as needed

## Vaccine Safety and Contraindications

### Adverse Events

**Common:**
- Local reactions (pain, swelling, redness)
- Mild systemic (fever, malaise, headache)

**Rare:**
- Severe allergic reaction (anaphylaxis)
- Guillain-Barré syndrome (very rare, causal link unclear)
- Brachial neuritis (rare)

### Contraindications

**Absolute:**
- History of anaphylaxis to vaccine or component
- History of encephalopathy within 7 days of pertussis vaccine (for Tdap)

**Precautions:**
- Guillain-Barré syndrome within 6 weeks of previous dose
- Moderate-severe acute illness (defer)

### Special Situations

**Latex Allergy:**
- Some products contain latex in vial stopper
- Check product information
- Use latex-free alternative if available

**Egg Allergy:**
- Tetanus vaccines not produced in eggs
- Safe to administer

## TIG: Advanced Considerations

### Mechanism Detail

**Neutralization:**
- Antibodies bind toxin
- Prevent receptor binding
- Block neuronal uptake
- Do not reverse bound toxin

**Pharmacokinetics:**
| Parameter | Value |
|-----------|-------|
| Half-life | 23-28 days |
| Tmax | 2-3 days |
| Duration | 4+ weeks protection |

### Wound Infiltration

**Technique:**
- Portion of TIG infiltrated around wound
- Remainder given IM at distant site
- May neutralize toxin at source
- Limited evidence but logical

### Human vs. Equine

**Human TIG (preferred):**
- Lower allergic risk
- Longer half-life
- Standard of care in developed countries

**Equine Antitoxin:**
- Higher allergic/serum sickness risk
- Shorter half-life
- May be only option in resource-limited settings
- Requires skin testing

## Public Health Integration

### Surveillance

**Reportable Disease:**
- Report all cases to public health
- Case investigation
- Vaccination status assessment
- Wound source identification

### Immunization Information Systems

**Utility:**
- Access vaccination history
- Avoid unnecessary doses
- Identify under-vaccinated
- Population-level tracking

### Global Considerations

**Neonatal Tetanus:**
- Major cause of neonatal mortality globally
- Maternal immunization prevents
- Clean delivery practices
- WHO elimination target

**Adult Tetanus:**
- Older adults at risk
- Immigrants may have incomplete vaccination
- Catch-up vaccination important

## Future Directions

### Vaccine Development

**Next Generation:**
- Recombinant vaccines
- Novel adjuvants
- Combination vaccines
- Needle-free delivery

### Antitoxin Advances

**Monoclonal Antibodies:**
- Defined specificity
- Consistent potency
- Potential for more targeted therapy`,
      keyTerms: [
        { term: 'gangliosides', definition: 'Glycosphingolipids containing sialic acid; serve as receptors for tetanus toxin on neuronal membranes' },
        { term: 'SNARE complex', definition: 'Protein complex (SNAP receptors) essential for vesicle fusion and neurotransmitter release; disrupted by tetanus toxin' },
        { term: 'transcytosis', definition: 'Transport across a cell; tetanus toxin crosses from motor neurons to inhibitory interneurons via this mechanism' },
        { term: 'affinity maturation', definition: 'Process during immune response where antibody binding affinity increases over time through somatic hypermutation' },
        { term: 'equine antitoxin', definition: 'Horse-derived tetanus antibodies; alternative to human TIG but with higher allergic risk' },
      ],
      clinicalNotes: 'For severely contaminated wounds with high tetanus risk, consider infiltrating a portion of TIG around the wound in addition to IM administration at a distant site. This may neutralize toxin at the source before it binds neurons. In resource-limited settings where only equine antitoxin is available, skin testing is required before administration.',
    },

    5: {
      level: 5,
      summary: 'Expert tetanus prophylaxis integrates deep understanding of toxin biology, immunological principles, evidence-based guidelines, and systems thinking to optimize individual patient care and public health outcomes while advancing the field through research and quality improvement.',
      explanation: `## Advanced Toxin Biology

### Structure-Function Relationships

**Crystal Structure Insights:**
- X-ray crystallography revealed detailed binding domains
- HC binds dual ganglioside receptors
- Specific amino acid residues critical for toxicity
- Basis for therapeutic targeting

**Membrane Translocation:**
- pH-dependent conformational change
- HN forms pore in endosomal membrane
- Light chain unfolds and translocates
- Refolding in cytosol restores activity

**Catalytic Mechanism:**
- Zinc-dependent metalloprotease
- HEXXH motif coordinates zinc
- Single-turnover enzyme (one substrate per toxin)
- Irreversible modification of synaptobrevin

### Comparative Toxinology

**Related Clostridial Toxins:**
| Toxin | Target | Clinical Syndrome |
|-------|--------|-------------------|
| Tetanospasmin | CNS inhibitory neurons | Spastic paralysis |
| Botulinum toxin | Peripheral cholinergic | Flaccid paralysis |
| C. perfringens toxins | Multiple targets | Gas gangrene |
| C. difficile toxins | Intestinal epithelium | Colitis |

**Evolutionary Perspective:**
- Clostridial neurotoxins share common ancestor
- Divergent target specificity
- Light chain substrate specificity evolved

### Toxin Persistence

**In Neurons:**
- Toxin persists in neurons for weeks
- Slow turnover of cleaved SNARE proteins
- Explains prolonged clinical course
- Recovery requires new protein synthesis

## Immunological Advances

### Systems Immunology

**Vaccine Response Profiling:**
- Transcriptomic signatures of responders
- Predictive biomarkers
- Personalized immunization strategies
- Identifying non-responders

**Memory B-Cell Biology:**
- Long-lived plasma cells in bone marrow
- Memory B-cells in secondary lymphoid organs
- Basis for durable immunity
- Reactivation upon booster

### Adjuvant Science

**Aluminum Salts:**
- Mechanism: Depot effect, NLRP3 activation
- Standard in tetanus vaccines
- Well-established safety

**Novel Adjuvants:**
- TLR agonists
- Saponins (AS01)
- Emulsions (MF59)
- Potential for improved responses

### Immunological Memory

**Duration of Protection:**
| Study Type | Finding |
|------------|---------|
| Seroepidemiologic | >90% protected at 10 years |
| Case series | Protection persists decades in some |
| Mathematical models | Waning follows biphasic curve |

**Factors Affecting Duration:**
- Number of doses received
- Time since primary series
- Individual variation
- Immune status

## Evidence Synthesis

### Guideline Development

**ACIP Process:**
- Systematic evidence review
- Grading of recommendations
- Public comment period
- Periodic updates

**Evidence Quality:**
- Randomized trials limited
- Observational data predominant
- Expert consensus fills gaps
- Pragmatic approach needed

### Key Evidence Gaps

**Unanswered Questions:**
- Optimal booster interval (5 vs. 10 years for wound prophylaxis)
- TIG dose for severely contaminated wounds
- Role of antibiotics in prophylaxis
- Immunocompromised patient management

### Cost-Effectiveness

**Routine Vaccination:**
- Highly cost-effective
- Prevents costly treatment
- QALY gains

**Wound Prophylaxis:**
- TIG adds cost
- Justified by prevented cases
- Severity of tetanus offsets costs

## Complex Scenarios: Expert Management

### Polytrauma

**Considerations:**
- Multiple wounds with varying contamination
- Resuscitation priorities
- May delay non-emergent care
- Document tetanus status early
- Administer prophylaxis when stable

### Immunocompromised Hosts

**HIV/AIDS:**
- Generally respond to vaccination
- CD4 >200: Standard approach
- CD4 <200: Consider TIG for any tetanus-prone wound
- May check titers

**Transplant Recipients:**
- Often lose vaccine immunity
- Re-vaccinate post-transplant
- Lower threshold for TIG
- Consult with transplant team

**Cancer/Chemotherapy:**
- Impaired responses during treatment
- Time vaccines appropriately
- TIG for tetanus-prone wounds during immunosuppression

### Pregnancy: Maternal-Fetal Considerations

**Transplacental Antibody:**
- IgG crosses placenta
- Third trimester optimal
- Protects neonate until vaccination
- Critical for preventing neonatal tetanus

**Timing of Tdap:**
- 27-36 weeks recommended
- Earlier in window optimizes transfer
- Each pregnancy (antibody wanes)

**Wound in Pregnancy:**
- Standard guidelines apply
- TIG safe in pregnancy
- Critical to protect mother

### Refugee and Immigrant Populations

**Challenges:**
- Incomplete or unknown vaccination history
- Different schedules by country of origin
- Documentation gaps
- Catch-up vaccination essential

**Approach:**
- Assume unvaccinated if undocumented
- Begin or complete series
- Use Tdap at least once
- Document and enter in registry

## Quality Improvement

### Process Measures

**Wound Care Setting:**
- Tetanus status documentation rate
- Appropriate prophylaxis rate
- TIG administration when indicated
- Vaccine documentation provided

**Primary Care:**
- Booster completion rate
- Registry utilization
- Recall systems for due vaccines

### Outcome Measures

**Population Level:**
- Tetanus incidence
- Vaccination coverage
- Case demographics

**Quality Metrics:**
- Preventable tetanus cases
- Prophylaxis errors
- Adverse events

## Research Frontiers

### Therapeutic Antibodies

**Monoclonal Antibodies:**
- High specificity
- Consistent potency
- Potential for improved efficacy
- Reduced immunogenicity vs. polyclonal

**Engineered Antibodies:**
- Extended half-life
- Enhanced neutralization
- Combination approaches

### Toxoid Improvements

**Recombinant Vaccines:**
- Defined antigens
- Consistent manufacturing
- Potential for improved immunogenicity

**Novel Delivery:**
- Mucosal vaccines
- Microneedle patches
- Thermostable formulations

### Global Elimination Efforts

**Neonatal Tetanus:**
- WHO elimination threshold: <1/1000 live births
- Maternal vaccination key
- Clean delivery practices
- Progress but challenges remain

**Adult Tetanus:**
- Aging populations at risk
- Vaccination campaigns for elderly
- Healthcare worker education

## Ethical and Practical Considerations

### Resource Allocation

**Limited Supply Scenarios:**
- Prioritize highest risk wounds
- Prioritize under-immunized patients
- Ethical framework for rationing

### Patient Autonomy

**Vaccine Hesitancy:**
- Address concerns respectfully
- Provide evidence-based information
- Document discussion
- Respect informed refusal

**Informed Consent:**
- Explain risks and benefits
- Discuss alternatives (wound care alone)
- Document consent

### Systems Integration

**Electronic Health Records:**
- Immunization alerts
- Decision support
- Documentation templates
- Registry linkage

**Care Coordination:**
- Emergency to primary care handoff
- Ensure series completion
- Community health integration`,
      keyTerms: [
        { term: 'NLRP3 inflammasome', definition: 'Intracellular protein complex activated by aluminum adjuvants; promotes inflammatory response enhancing vaccine immunogenicity' },
        { term: 'long-lived plasma cells', definition: 'Antibody-secreting cells residing in bone marrow that provide durable humoral immunity without re-exposure to antigen' },
        { term: 'seroepidemiologic', definition: 'Pertaining to the study of disease patterns through measurement of antibodies in populations' },
        { term: 'microneedle patches', definition: 'Minimally invasive vaccine delivery system using arrays of microscopic projections to deliver antigen through skin' },
        { term: 'maternal immunization', definition: 'Vaccination of pregnant women to protect both mother and infant through transplacental antibody transfer' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Natural infection does not protect** - The toxin dose causing disease is too small to generate immunity. Vaccination is essential even in recovered patients.

2. **TIG timing critical** - Once toxin binds neurons, it cannot be neutralized. Early TIG administration for indicated patients maximizes benefit.

3. **Wound care is fundamental** - Debridement removes the anaerobic environment tetanus requires. Prophylaxis complements but does not replace proper wound management.

4. **Immunocompromised threshold lower** - Consider TIG for any tetanus-prone wound in significantly immunocompromised patients regardless of vaccination history.

5. **Systems matter** - Immunization registries, EHR alerts, and documentation improve appropriate prophylaxis. Integrate these tools into practice.

6. **Global perspective** - Maternal-neonatal tetanus remains a challenge globally. Maternal immunization programs are critical for elimination.

7. **Evidence gaps remain** - Some recommendations based on limited evidence and expert consensus. Pragmatic approach balancing safety and resource use.

8. **Complete the series** - Wound prophylaxis is an opportunity to catch up incomplete vaccination. Ensure follow-up for series completion.`,
    },
  },

  media: [
    {
      id: 'tetanus-prophylaxis-algorithm',
      type: 'diagram',
      filename: 'tetanus-prophylaxis-algorithm.svg',
      title: 'Tetanus Prophylaxis Decision Algorithm',
      description: 'Flowchart for tetanus prophylaxis decisions based on wound type and vaccination history',
    },
    {
      id: 'tetanus-toxin-mechanism',
      type: 'diagram',
      filename: 'tetanus-toxin-mechanism.svg',
      title: 'Tetanus Toxin Mechanism',
      description: 'Diagram showing how tetanus toxin blocks inhibitory neurotransmission',
    },
  ],

  citations: [
    {
      id: 'acip-tetanus-2020',
      type: 'article',
      title: 'Prevention of Tetanus, Diphtheria, and Pertussis: Recommendations of the ACIP',
      authors: ['Havers, F.P.', 'et al.'],
      source: 'MMWR Recommendations and Reports',
    },
    {
      id: 'cdc-pinkbook-tetanus',
      type: 'article',
      title: 'Tetanus',
      authors: ['CDC'],
      source: 'Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book)',
    },
    {
      id: 'tetanus-pathophysiology',
      type: 'article',
      title: 'Tetanus',
      authors: ['Thwaites, C.L.', 'Beeching, N.J.', 'Newton, C.R.'],
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-when-to-seek-care', targetType: 'topic', relationship: 'related', label: 'When to Seek Care' },
    { targetId: 'wound-care-wound-types', targetType: 'topic', relationship: 'related', label: 'Wound Types' },
    { targetId: 'wound-care-signs-of-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
  ],

  tags: {
    systems: ['integumentary', 'nervous', 'immune'],
    topics: ['tetanus', 'vaccination', 'wound care', 'prophylaxis', 'immunization'],
    keywords: ['tetanus shot', 'Tdap', 'TIG', 'lockjaw', 'booster', 'Clostridium tetani'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'emergency medicine', 'family medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tetanusProphylaxis;
