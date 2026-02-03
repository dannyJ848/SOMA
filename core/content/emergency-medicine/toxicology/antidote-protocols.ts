/**
 * Antidote Protocols - Emergency Toxicology
 *
 * Comprehensive content on specific antidotes, their mechanisms, dosing protocols,
 * indications, and monitoring for common poisoning emergencies.
 */

import { EducationalContent } from '../../types';

export const antidoteProtocols: EducationalContent = {
  id: 'emergency-toxicology-antidote-protocols',
  type: 'topic',
  name: 'Antidote Protocols',
  nameEs: 'Protocolos de Antidotos',
  alternateNames: ['Antidote Guide', 'Toxicology Antidotes', 'Poison Antidotes', 'Reversal Agents'],

  levels: {
    1: {
      level: 1,
      summary: 'Antidotes are special medicines that reverse the effects of specific poisons or drug overdoses. Knowing which antidote to use and giving it quickly can save lives.',
      explanation: `## What Are Antidotes?

An antidote is a medicine that counteracts a specific poison or drug overdose. Not every poison has an antidote, but for those that do, giving the right one quickly can save a life.

### Common Antidotes Everyone Should Know

**Naloxone (Narcan) - for Opioid Overdose**
- Reverses the effects of heroin, fentanyl, oxycodone, and other opioids
- Can be given as a nasal spray or injection
- Available without a prescription at most pharmacies
- Works within 2-5 minutes
- May need to be given more than once

**Activated Charcoal - for Many Poisonings**
- A black powder mixed with water that absorbs poisons in the stomach
- Must be given within 1-2 hours of swallowing the poison
- Does not work for all substances

**N-Acetylcysteine (NAC) - for Tylenol Overdose**
- Protects the liver from damage caused by too much acetaminophen
- Most effective when given within 8 hours
- Given through an IV at the hospital

**Atropine - for Certain Chemical Poisonings**
- Used for nerve agent or pesticide poisoning
- Dries up excess secretions and improves breathing
- Given as an injection

### How Antidotes Work

Antidotes work in different ways:
- **Blocking:** Some antidotes block the poison from working (naloxone blocks opioids)
- **Absorbing:** Some absorb the poison before it enters the blood (activated charcoal)
- **Repairing:** Some help the body repair damage (NAC helps the liver)
- **Binding:** Some attach to the poison and make it harmless (chelation for metals)

### Important Points

- Not all poisons have antidotes
- Some antidotes must be given very quickly to work
- Always call 911 or Poison Control (1-800-222-1222) for poisoning emergencies
- Do NOT try to treat poisoning at home without medical guidance`,
      keyTerms: [
        { term: 'antidote', definition: 'A medicine that counteracts or reverses the effects of a specific poison or drug' },
        { term: 'naloxone', definition: 'The antidote for opioid overdose, available as a nasal spray or injection', pronunciation: 'nal-OX-own' },
        { term: 'activated charcoal', definition: 'A powder that absorbs many poisons in the stomach before they enter the bloodstream' },
        { term: 'chelation', definition: 'A process where a medicine binds to metals (like lead or iron) so the body can remove them' },
      ],
      analogies: [
        'An antidote is like a key that fits into the same lock as the poison but turns it the opposite way.',
        'Activated charcoal is like a sponge that soaks up poison in your stomach before your body can absorb it.',
        'Chelation therapy is like a magnet for toxic metals - it grabs them and helps your body flush them out.',
      ],
      examples: [
        'A person is found unconscious and barely breathing after using drugs. A friend sprays naloxone in their nose. Within minutes, they start breathing normally and wake up.',
        'A child accidentally eats too many iron vitamins. At the ER, doctors give a special medicine called deferoxamine to remove the extra iron from the blood.',
      ],
      patientCounselingPoints: [
        'Keep Poison Control number saved: 1-800-222-1222',
        'Naloxone is available without a prescription - consider having it if opioids are in the home',
        'If you suspect any poisoning, do not wait for symptoms to get worse before calling for help',
        'Bring the container of whatever was swallowed to the ER so doctors know what to treat',
      ],
    },

    2: {
      level: 2,
      summary: 'Antidote protocols specify the correct agent, dose, route, and timing for reversing specific toxins. Prompt administration of the appropriate antidote significantly reduces morbidity and mortality.',
      explanation: `## Essential Antidote Reference

### Antidote Quick Reference Table

| Poison/Overdose | Antidote | Dose | Key Notes |
|-----------------|----------|------|-----------|
| Opioids | Naloxone | 0.4-2mg IV/IM/IN | May need repeat doses; short half-life |
| Acetaminophen | N-acetylcysteine | 150mg/kg IV loading | 21-hour IV protocol |
| Benzodiazepines | Flumazenil | 0.2mg IV (titrate) | Risk of seizures; rarely used |
| TCAs | Sodium bicarbonate | 1-2 mEq/kg IV bolus | For QRS >100ms |
| Beta-blockers | Glucagon | 5-10mg IV bolus | Then infusion 1-5mg/hr |
| Calcium channel blockers | Calcium + high-dose insulin | CaCl2 1-3g + insulin 1u/kg | Dextrose to prevent hypoglycemia |
| Organophosphates | Atropine + pralidoxime | Atropine 2mg IV q5min; 2-PAM 1-2g IV | Atropine until secretions dry |
| Methanol/ethylene glycol | Fomepizole | 15mg/kg IV loading | Blocks alcohol dehydrogenase |
| Iron | Deferoxamine | 15mg/kg/hr IV | For severe toxicity |
| Digoxin | Digoxin-specific Fab | Based on level/amount | For arrhythmias, hyperK |
| Warfarin | Vitamin K + PCC | Vit K 10mg IV + 4F-PCC | For serious bleeding |
| Carbon monoxide | High-flow oxygen | 100% O2 via NRB or HBO | HBO for severe cases |
| Cyanide | Hydroxocobalamin | 5g IV over 15min | Preferred over nitrite kit |
| Methemoglobinemia | Methylene blue | 1-2mg/kg IV | Avoid in G6PD deficiency |

### Detailed Protocols

**Naloxone for Opioid Overdose:**
- **Suspected OD with respiratory depression:** 0.4mg IV/IM/IN
- If no response in 2-3 min: Give 2mg IV
- If still no response: Consider non-opioid cause or give up to 10mg total
- Duration: 30-90 minutes (shorter than most opioids)
- Infusion: 2/3 of reversal dose per hour if needed
- Goal: Restore adequate breathing, NOT full consciousness

**N-Acetylcysteine (NAC) for Acetaminophen:**
- **IV Protocol (21 hours):**
  - 150mg/kg in 200mL D5W over 1 hour
  - 50mg/kg in 500mL D5W over 4 hours
  - 100mg/kg in 1000mL D5W over 16 hours
- **Oral Protocol (72 hours):**
  - 140mg/kg loading
  - 70mg/kg every 4 hours for 17 additional doses
- Start NAC if level above treatment line on nomogram (4-24h post-ingestion)

**Atropine for Organophosphate/Nerve Agent:**
- Initial: 2mg IV (double every 3-5 minutes)
- Endpoint: Drying of secretions (NOT pupil size or heart rate)
- May require massive doses (100+ mg for severe nerve agent exposure)
- Must co-administer pralidoxime (2-PAM) to regenerate acetylcholinesterase

**Sodium Bicarbonate for TCA Overdose:**
- Bolus: 1-2 mEq/kg IV for QRS >100ms
- Infusion: 150 mEq NaHCO3 in 1L D5W at 250mL/hr
- Target: QRS narrowing and serum pH 7.50-7.55
- Also treats wide QRS from other sodium channel blockers

### When There Is No Specific Antidote

Many poisonings are managed with **supportive care:**
- Maintain airway, breathing, and circulation
- Treat seizures with benzodiazepines
- Treat agitation with benzodiazepines
- Cool for hyperthermia
- Correct electrolyte abnormalities
- Monitor in ICU for developing complications`,
      keyTerms: [
        { term: 'flumazenil', definition: 'Benzodiazepine reversal agent; used cautiously due to seizure risk in chronic users', pronunciation: 'flu-MAZ-en-il' },
        { term: 'fomepizole', definition: 'Antidote for toxic alcohol poisoning; blocks the enzyme that creates toxic metabolites', pronunciation: 'foh-MEP-ih-zole' },
        { term: 'pralidoxime', definition: 'Reactivates acetylcholinesterase inhibited by organophosphates; given with atropine', pronunciation: 'pral-ih-DOX-eem' },
        { term: 'deferoxamine', definition: 'Chelating agent that binds free iron, turning urine a characteristic vin rose color', pronunciation: 'de-fer-OX-ah-meen' },
        { term: 'hydroxocobalamin', definition: 'Preferred cyanide antidote; binds cyanide to form cyanocobalamin (vitamin B12)', pronunciation: 'hi-DROX-oh-koh-BAL-ah-min' },
      ],
      analogies: [
        'Naloxone kicks opioids off their receptors like a bouncer removing someone from a seat they shouldn\'t be in.',
        'Fomepizole blocks the enzyme that turns antifreeze into poison, like putting a padlock on a dangerous machine.',
        'Deferoxamine is a magnet for iron - it grabs excess iron and carries it out through the urine.',
      ],
      examples: [
        'A patient arrives unresponsive with pinpoint pupils. Naloxone 0.4mg IV given. Respirations improve but patient re-sedates 40 minutes later. Naloxone infusion started at 0.4mg/hr.',
        'Child ingested grandparent\'s blood pressure medication (amlodipine). HR 45, BP 65/30. Calcium chloride and high-dose insulin/dextrose started. BP improves over 30 minutes.',
      ],
      patientCounselingPoints: [
        'After naloxone, observation for at least 4-6 hours is needed because the medication wears off faster than most opioids',
        'NAC may cause nausea, vomiting, or allergic-type reactions but these are usually manageable',
        'Always tell doctors about ALL medications and substances taken - this helps choose the right treatment',
      ],
    },

    3: {
      level: 3,
      summary: 'Antidote protocols require understanding of toxin mechanisms, antidote pharmacology, dosing kinetics, and monitoring endpoints to guide effective treatment of specific poisonings.',
      explanation: `## Mechanism-Based Antidote Classification

### Competitive Receptor Antagonists
- **Naloxone:** Mu-opioid receptor antagonist (higher affinity than most opioids)
- **Flumazenil:** GABA-A benzodiazepine site antagonist
- **Atropine:** Muscarinic receptor antagonist (competitive inhibition of acetylcholine)

### Enzyme Inhibitors/Reactivators
- **Fomepizole:** Alcohol dehydrogenase inhibitor (prevents toxic metabolite formation)
- **Pralidoxime:** Reactivates organophosphate-inhibited acetylcholinesterase (before "aging")
- **Physostigmine:** Reversible acetylcholinesterase inhibitor (increases ACh at muscarinic receptors)

### Metabolic Antidotes
- **NAC:** Glutathione precursor + direct NAPQI scavenger
- **Hydroxocobalamin:** Binds cyanide, forms non-toxic cyanocobalamin
- **Methylene blue:** Electron carrier reducing methemoglobin back to hemoglobin via NADPH pathway

### Chelating Agents
- **Deferoxamine:** Iron chelator (binds Fe3+, renally eliminated)
- **Succimer (DMSA):** Oral lead chelator
- **Calcium disodium EDTA:** IV lead chelator
- **BAL (dimercaprol):** Arsenic, mercury, lead chelator (IM only)
- **Prussian blue:** Ion exchange for thallium, radioactive cesium

### Antibody-Based Antidotes
- **Digoxin-specific Fab:** Binds free digoxin, renally eliminated
- **Crotalidae polyvalent immune Fab:** Pit viper antivenom
- **Black widow antivenom:** Latrodectus antivenom (rarely used)
- **Botulism antitoxin:** Equine-derived heptavalent antitoxin

## Detailed Protocols

### Organophosphate/Nerve Agent Protocol

**Atropine titration:**
- Start: 2mg IV (pediatric: 0.05mg/kg)
- Double dose every 3-5 minutes until endpoint reached
- Endpoint: Drying of bronchial secretions (NOT pupil size)
- Severe exposure may require 100+ mg
- Switch to infusion: 10-20% of total loading dose per hour

**Pralidoxime (2-PAM):**
- Adult: 1-2g IV over 15-30 min, then 500mg/hr infusion
- Must be given within 24-48 hours (before enzyme "ages")
- Aging time varies: Sarin (hours), VX (days), organophosphate pesticides (24-48h)
- Reactivates phosphorylated acetylcholinesterase

### Calcium Channel Blocker Overdose Protocol

**Stepwise approach:**
1. **Atropine** for symptomatic bradycardia (often ineffective)
2. **Calcium:** CaCl2 1g IV (or Ca gluconate 3g) q15-20min x3
3. **High-dose insulin:** 1 u/kg bolus, then 1-10 u/kg/hr infusion
   - Co-infuse D50 bolus + D10 drip
   - Monitor glucose q15-30min, potassium q1h
   - Takes 15-45 minutes for hemodynamic effect
4. **Vasopressors:** Norepinephrine for refractory hypotension
5. **Lipid emulsion:** 20% intralipid if cardiovascular collapse
6. **Mechanical support:** VA-ECMO or Impella for refractory shock

### Cyanide Antidote Protocols

**Hydroxocobalamin (Cyanokit) - Preferred:**
- Dose: 5g IV over 15 minutes (adult)
- Mechanism: Binds CN-, forms cyanocobalamin (B12)
- Safe in smoke inhalation (no methemoglobin formation)
- Side effects: Red discoloration of skin/urine, may interfere with co-oximetry

**Cyanide Antidote Kit (Nithiodote) - Alternative:**
- Sodium nitrite 300mg IV over 2-4 minutes
  - Creates methemoglobin which binds cyanide
  - Risk: Excessive methemoglobin formation
- Sodium thiosulfate 12.5g IV over 10 minutes
  - Provides sulfur substrate for rhodanese (detoxification enzyme)
- Concern in smoke inhalation: Nitrite-induced MetHb + CO-Hb = severe hypoxia

### Snake Envenomation (Crotalidae)

**Crotalidae Polyvalent Immune Fab (CroFab):**
- Indication: Progressive swelling, coagulopathy, systemic effects
- Initial: 4-6 vials IV over 1 hour
- Reassess at 1 hour: If not controlled, repeat 4-6 vials
- Maintenance: 2 vials at 6, 12, and 18 hours
- Monitor: CBC, fibrinogen, PT/INR q6h for 24h, then q12h

**Recurrent coagulopathy:**
- Occurs in 5-20% after initial control
- Monitor coagulation studies for 2-3 weeks
- Re-treat with additional antivenom if clinically significant`,
      keyTerms: [
        { term: 'aging', definition: 'Irreversible binding of organophosphate to acetylcholinesterase; once aged, pralidoxime cannot reactivate the enzyme' },
        { term: 'chelation', definition: 'Process by which a chelating agent binds metal ions, forming a soluble complex for renal elimination' },
        { term: 'rhodanese', definition: 'Mitochondrial enzyme that converts cyanide to thiocyanate using thiosulfate as sulfur donor' },
        { term: 'methemoglobin', definition: 'Oxidized form of hemoglobin (Fe3+) unable to bind oxygen; normally <1% of total Hb' },
        { term: 'Fab fragment', definition: 'Antibody fragment (antigen-binding) used in digoxin and snake antivenom; smaller than whole antibody, renally cleared' },
      ],
      analogies: [
        'Pralidoxime reactivates aged enzyme like unlocking a door before the lock is changed permanently.',
        'Hydroxocobalamin traps cyanide like a net catching a dangerous animal - binds it and makes it harmless.',
        'Chelation agents work like escort services - they grab toxic metals and walk them out of the body through the kidneys.',
      ],
      examples: [
        'Farm worker with organophosphate exposure: DUMBELS toxidrome. Atropine 2mg, 4mg, 8mg, 16mg IV (total 30mg over 20 min) until secretions dry. Pralidoxime infusion started. Atropine infusion 3mg/hr.',
        'Copperhead bite with progressive swelling past elbow. CroFab 6 vials given. Swelling controlled at 1 hour. Maintenance doses at 6, 12, 18 hours. Fibrinogen monitored weekly.',
      ],
      clinicalNotes: 'Atropine endpoint is drying of secretions, NOT heart rate or pupil size. Pralidoxime must be given before aging (timing varies by agent). HIET onset takes 15-45 minutes - start early in CCB toxicity. Hydroxocobalamin preferred over cyanide kit in smoke inhalation. Snake antivenom: observation for recurrent coagulopathy for 2-3 weeks.',
    },

    4: {
      level: 4,
      summary: 'Advanced antidote practice requires nuanced dosing strategies, understanding of pharmacokinetic interactions, management of antidote complications, and application of emerging reversal agents.',
      explanation: `## Advanced Antidote Pharmacology

### Naloxone Advanced Dosing

**Titration strategy:**
- Goal: Restore ventilation, NOT consciousness (avoids precipitated withdrawal)
- Micro-dosing: 0.04mg IV increments in opioid-dependent patients
- Standard: 0.4mg IV/IM/IN for unknown patients
- High-dose: 2-10mg for fentanyl analogs, sustained-release opioids

**Naloxone pharmacokinetics:**
- IV onset: 1-2 minutes
- IM onset: 3-5 minutes
- IN onset: 3-5 minutes
- Duration: 30-90 minutes (vs opioid duration 4-24+ hours)
- Infusion: 2/3 of effective reversal dose per hour

**Renarcotization management:**
- Occurs when naloxone wears off before opioid
- Higher risk: Methadone (long half-life), fentanyl patches, body packers
- Monitoring: Minimum 4-6 hours post-last naloxone dose
- If required: Naloxone infusion 0.25-6.25 mcg/kg/hr

### N-Acetylcysteine Advanced Protocols

**Modified (two-bag) protocol:**
- 200mg/kg in 500mL D5W over 4 hours
- 100mg/kg in 1000mL D5W over 16 hours
- Fewer anaphylactoid reactions than standard three-bag
- Equivalent hepatoprotection

**Extended NAC:**
- Continue beyond 21 hours if:
  - AST/ALT still rising
  - INR >2.0
  - Hepatic encephalopathy present
- Continue until: AST trending down, INR improving, clinical improvement

**Massive ingestion (>150mg/kg, level >300 at 4h):**
- Consider higher initial NAC dose
- Earlier acetylcysteine initiation (even before 4-hour level)
- Monitor for delayed peak (extended-release formulations)

### Digoxin Fab Advanced Dosing

**Calculation methods:**
- Known amount ingested: Vials = (mg ingested x 0.8) / 0.5
- Known serum level: Vials = (level ng/mL x weight kg) / 100
- Unknown: 10-20 vials empirically
- Partial reversal: Half the calculated dose (for rate control, not cardiac arrest)

**Post-Fab monitoring:**
- Total digoxin level rises (Fab-bound + free)
- Free digoxin level drops to undetectable
- Assays measuring total level are misleading
- Clinical improvement within 30-60 minutes
- Rebound toxicity: Possible as Fab eliminated (half-life 15-20h)

### Anticoagulant Reversal Agents

**Warfarin reversal:**
| Urgency | Agent | Dose | Onset |
|---------|-------|------|-------|
| Life-threatening bleed | 4F-PCC + Vitamin K | 25-50 u/kg + 10mg IV | 15-30 min |
| Serious bleed | 4F-PCC + Vitamin K | 25-50 u/kg + 10mg IV | 15-30 min |
| INR correction only | Vitamin K | 2.5-5mg PO | 24 hours |

**DOAC reversal:**
- Dabigatran: Idarucizumab (Praxbind) 5g IV - immediate, complete reversal
- Xa inhibitors: Andexanet alfa (Andexxa) - bolus + infusion (costly, limited supply)
- Alternative: 4F-PCC 50 u/kg for Xa inhibitors if andexanet unavailable
- Activated charcoal: Within 2 hours of DOAC ingestion

### Methemoglobinemia Protocol

**Methylene blue:**
- Dose: 1-2 mg/kg IV over 5 minutes
- Mechanism: NADPH-dependent reduction of methemoglobin
- Onset: 15-30 minutes
- May repeat once if MetHb still elevated

**Contraindications:**
- G6PD deficiency (methylene blue relies on NADPH; G6PD deficiency = low NADPH = ineffective + hemolysis)
- Alternative in G6PD: Ascorbic acid (slow), exchange transfusion

**Pulse oximetry limitation:**
- SpO2 reads approximately 85% regardless of true oxygen saturation
- Co-oximetry required for accurate MetHb measurement
- ABG: Normal PaO2 with "chocolate brown" blood and cyanosis`,
      keyTerms: [
        { term: 'renarcotization', definition: 'Recurrence of opioid effects after naloxone wears off; occurs when opioid half-life exceeds naloxone duration' },
        { term: 'anaphylactoid reaction', definition: 'Non-IgE-mediated hypersensitivity reaction to NAC; dose-rate dependent, treated by slowing infusion' },
        { term: 'idarucizumab', definition: 'Monoclonal antibody fragment that immediately and completely reverses dabigatran', pronunciation: 'ih-dar-OO-siz-oo-mab' },
        { term: 'andexanet alfa', definition: 'Recombinant modified Factor Xa that reverses Xa inhibitor anticoagulants', pronunciation: 'an-DEX-ah-net' },
        { term: 'co-oximetry', definition: 'Blood gas analyzer measuring multiple hemoglobin species including methemoglobin and carboxyhemoglobin' },
      ],
      analogies: [
        'Naloxone titration: like turning a dial to just the right level - enough to restore breathing but not so much you cause withdrawal.',
        'Digoxin Fab binds digoxin like a sponge absorbing spilled liquid - total liquid is the same but none is free to cause damage.',
        'Methylene blue is an electron shuttle bus - it picks up electrons from NADPH and delivers them to methemoglobin, reducing it back to functional hemoglobin.',
      ],
      examples: [
        'Methadone overdose: Naloxone 0.4mg restores breathing. 45 minutes later, respiratory rate drops to 6. Naloxone infusion 0.4mg/hr started. Patient monitored 24 hours in ICU.',
        'Dabigatran-associated ICH: CT shows large hemispheric bleed. Idarucizumab 5g IV given. PTT normalizes within 10 minutes. Neurosurgery performs craniotomy.',
      ],
      clinicalNotes: 'Naloxone: titrate to ventilation, not consciousness. Two-bag NAC reduces anaphylactoid reactions. Extended NAC if AST rising or INR elevated. Digoxin Fab: post-treatment total levels are misleading. Methylene blue in G6PD causes hemolysis - use exchange transfusion. SpO2 is unreliable in methemoglobinemia - always get co-oximetry.',
    },

    5: {
      level: 5,
      summary: 'Expert antidote practice integrates precision dosing, novel reversal strategies, antidote pharmacogenomics, supply chain management, and systems-level preparedness for mass casualty toxicologic events.',
      explanation: `## Expert-Level Antidote Practice

### Antidote Supply Chain and Preparedness

**Emergency department antidote stocking:**
- ACMT/AACT guidelines for minimum stocking requirements
- High-cost antidotes (CroFab, hydroxocobalamin, Digibind): Regional sharing agreements
- Expiration management: Rotation protocols, FDA extension programs
- Strategic National Stockpile: Nerve agent antidotes, botulism antitoxin, DTPA

**Mass casualty chemical events:**
- Nerve agents: Autoinjector kits (atropine + pralidoxime), Mark I / DuoDote
- Cyanide (industrial/fire): Hydroxocobalamin for all symptomatic patients
- Radiation: KI (thyroid protection), DTPA/Prussian blue (internal contamination)
- Hospital decontamination protocols: Disrobe, gross decontamination, triage

### Pharmacogenomic Considerations

**NAC metabolism:**
- NAC itself is a prodrug; converted to cysteine for glutathione synthesis
- CYP2E1 inducers (chronic alcohol, isoniazid): More NAPQI at lower APAP doses
- Clinical impact: Lower treatment thresholds for these patients

**Codeine/tramadol and CYP2D6:**
- Ultra-rapid metabolizers: Excessive opioid effect from prodrug conversion
- Poor metabolizers: Lack of analgesic effect, but also reduced toxicity
- Relevance to naloxone dosing: Ultra-rapid metabolizers may need less

**Methylene blue and G6PD:**
- G6PD deficiency: Low NADPH stores
- Methylene blue requires NADPH as electron donor
- Result: Ineffective reduction of MetHb + oxidative hemolysis
- Prevalence: ~400 million worldwide, variable by ethnicity

### Novel and Investigational Antidotes

**Nalmefene:**
- Longer-acting opioid antagonist (half-life 8-11 hours vs naloxone 30-90 min)
- FDA-approved for alcohol use disorder, investigational for OD
- May reduce need for repeated dosing/infusion
- Risk: Prolonged precipitated withdrawal

**Sugammadex for rocuronium reversal:**
- Encapsulation-based reversal (gamma-cyclodextrin cage)
- Concept being explored for other drug encapsulation strategies

**Calmangafodipir (PledOx):**
- Investigational manganese-based chelator for chemotherapy neuroprotection
- Potential SOD mimetic applications in toxicology

**Monoclonal antibodies for drugs of abuse:**
- Anti-methamphetamine antibodies (preclinical/Phase I)
- Anti-fentanyl antibodies (research stage)
- Concept: Sequester drug in plasma, prevent CNS penetration

### Evidence Gaps and Controversies

**Flumazenil safety:**
- Risk of seizures in BZD-dependent patients or co-ingestion of proconvulsants
- May be appropriate for isolated iatrogenic oversedation (procedural sedation)
- Growing evidence supports careful use in selected patients

**Physostigmine comeback:**
- Safer than previously taught when properly selected
- Indication: Anticholinergic delirium without cardiac conduction abnormalities
- Contraindications: QRS >100ms, reactive airway disease, GI/GU obstruction
- Dose: 0.5-2mg IV over 5 minutes, may repeat
- Onset: 3-5 minutes

**Calcium in hyperkalemia:**
- Stabilizes myocardium (does not lower potassium)
- CaCl2 vs Ca gluconate: CaCl2 has 3x elemental calcium, requires central line
- Ca gluconate: Peripheral safe, but less elemental calcium per vial
- Onset: 1-3 minutes, duration 30-60 minutes

### Quality and Systems

**Antidote administration quality metrics:**
- Time from identification to antidote administration
- Appropriate antidote selection rate
- Antidote stocking compliance
- Poison center consultation rate
- Adverse event tracking

**Poison center integration:**
- Real-time consultation for complex cases
- Population-level surveillance for emerging threats
- Drug identification services
- Post-exposure follow-up coordination

**Education and training:**
- Antidote dosing often incorrect in practice
- Simulation-based training improves accuracy
- Cognitive aids and mobile apps reduce errors
- Toxicology fellowships train 50-60 physicians/year in US`,
      keyTerms: [
        { term: 'Strategic National Stockpile', definition: 'US federal repository of critical medical supplies including antidotes for chemical, biological, and radiological events' },
        { term: 'nalmefene', definition: 'Longer-acting opioid antagonist (half-life 8-11h) potentially reducing need for repeated naloxone dosing' },
        { term: 'encapsulation reversal', definition: 'Novel antidote strategy using molecular cages (cyclodextrins) to trap and inactivate drugs; proven with sugammadex' },
        { term: 'anti-drug antibodies', definition: 'Investigational monoclonal antibodies that bind drugs of abuse in plasma, preventing CNS effects' },
        { term: 'DuoDote', definition: 'Combination autoinjector containing atropine + pralidoxime for nerve agent exposure in mass casualty settings' },
      ],
      clinicalNotes: 'Antidote stocking is a systems issue - regional sharing agreements are critical for high-cost items. Pharmacogenomics increasingly relevant: CYP2E1 induction lowers APAP toxicity threshold, G6PD status affects methylene blue use. Novel antibody-based antidotes for drugs of abuse may transform overdose management. Physostigmine is underutilized for anticholinergic delirium when properly selected. Poison center consultation improves outcomes and should be standard of care for all significant poisonings.',
    },
  },

  media: [
    {
      id: 'antidote-quick-reference',
      type: 'diagram',
      filename: 'antidote-quick-reference.svg',
      title: 'Antidote Quick Reference Card',
      description: 'Common poisons and their antidotes with dosing',
    },
    {
      id: 'nac-protocol-flowchart',
      type: 'diagram',
      filename: 'nac-protocol-flowchart.svg',
      title: 'NAC Protocol Decision Flowchart',
      description: 'Decision tree for N-acetylcysteine administration',
    },
  ],

  citations: [
    {
      id: 'goldfrank-antidotes',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies - Antidotes in Depth',
      authors: ['Nelson LS', 'et al.'],
      source: 'McGraw-Hill',
      accessedDate: '2026-01-30',
    },
    {
      id: 'acmt-antidote-stocking',
      type: 'article',
      title: 'ACMT/AACT Antidote Stocking Recommendations',
      authors: ['Dart RC', 'et al.'],
      source: 'Annals of Emergency Medicine',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-toxicology-overdose-management', targetType: 'topic', relationship: 'sibling', label: 'Overdose Management' },
    { targetId: 'emergency-cardiac-acls-algorithms', targetType: 'topic', relationship: 'related', label: 'ACLS Algorithms' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous', 'hepatic', 'renal'],
    topics: ['emergency medicine', 'toxicology', 'pharmacology', 'critical care'],
    keywords: ['antidote', 'naloxone', 'NAC', 'atropine', 'chelation', 'reversal agent', 'poisoning'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'internal medicine', 'pharmacology'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antidoteProtocols;
