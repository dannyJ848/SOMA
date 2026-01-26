/**
 * Local Anesthesia
 *
 * Topical, infiltration, and field block techniques for local anesthesia
 * including agents, dosing, and safety considerations.
 */

import { EducationalContent } from '../types';

export const localAnesthesiaContent: EducationalContent = {
  id: 'anesthesia-local',
  type: 'process',
  name: 'Local Anesthesia',
  alternateNames: ['Local Anesthetic', 'Local', 'Numbing Medicine'],

  levels: {
    1: {
      level: 1,
      summary: 'Local anesthesia numbs a small area of your body so you can have a minor medical procedure without feeling pain.',
      explanation: `Local anesthesia is medicine that numbs just a small part of your body where a doctor needs to work. You stay completely awake, but you don't feel anything in that area.

**How Local Anesthesia Works:**

The medicine is injected right where the doctor will work. It blocks pain signals from that area so your brain doesn't receive them. You can still feel pressure or movement, but not sharp pain.

**Types of Local Anesthesia:**

### 1. Topical Anesthesia
- Put on the skin as a cream, gel, or spray
- Used for very minor procedures
- Takes 15-60 minutes to work
- Examples: Before stitches, IV placement, eye procedures

### 2. Infiltration
- Medicine injected directly into the area
- Works within minutes
- Used for small surgeries
- Examples: Removing moles, stitching cuts, biopsies

### 3. Field Block
- Medicine injected around the area, not in it
- Numbs a larger region
- Used for slightly bigger procedures
- Examples: Small surgeries on limbs, hernia repair

**What You'll Feel:**

When the doctor gives you the shot:
1. A tiny pinch when the needle goes in
2. A burning sensation for 5-10 seconds (this is normal!)
3. Then numbness spreading through the area

During the procedure:
- You should feel NO pain
- You might feel pressure or pushing
- You can talk to the doctor
- You can move other parts of your body

**After the Procedure:**

- Numbness lasts 1-4 hours depending on the medicine
- Be careful not to bite your lip/tongue if mouth is numb
- Don't use the numbed area (like walking if foot is numb)
- Pain returns when numbness wears off - take medicine as directed

**Safety:**

Local anesthesia is very safe. Risks include:
- Allergic reaction (rare)
- Bleeding or bruising at injection site
- Temporary numbness that lasts too long

**Tell Your Doctor If:**
- You've had reactions to numbing medicine before
- You're allergic to any medicines
- You're pregnant or breastfeeding`,
      keyTerms: [
        { term: 'local anesthesia', definition: 'Medicine that numbs a small, specific area of the body' },
        { term: 'topical', definition: 'Medicine applied to the skin surface' },
        { term: 'infiltration', definition: 'Injecting medicine directly into the tissue to numb it' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue for testing', pronunciation: 'BY-op-see' },
        { term: 'allergic reaction', definition: 'When your body\'s immune system reacts badly to something, causing rash, swelling, or breathing problems' },
      ],
      analogies: [
        'Local anesthesia is like turning off the power to one outlet - everything else works normally.',
        'The burning feeling when the medicine is injected is like putting hand sanitizer on a cut - stings briefly, then stops hurting.',
      ],
      examples: [
        'The dentist injects lidocaine to numb your tooth before filling a cavity.',
        'A doctor uses numbing cream on a child\'s arm before placing an IV to make it hurt less.',
        'A skin doctor removes a mole using local anesthesia so you don\'t feel the cutting.',
      ],
      patientCounselingPoints: [
        'Tell your doctor right away if you feel any pain during the procedure - more medicine can be given.',
        'Be very careful eating when your mouth is numb - you could bite your lip or tongue without realizing.',
        'Numbness usually lasts 2-3 hours, but can last longer in some areas.',
      ],
    },
    2: {
      level: 2,
      summary: 'Local anesthesia produces reversible loss of sensation in a circumscribed area by blocking nerve conduction with local anesthetic agents, allowing minor surgical procedures to be performed with the patient awake.',
      explanation: `Local anesthesia involves the administration of anesthetic agents directly to the site of the procedure, producing loss of sensation in a specific, limited area without loss of consciousness.

## Mechanism of Action

Local anesthetics work by:
- Blocking voltage-gated sodium channels in nerve membranes
- Preventing nerve depolarization and action potential propagation
- Producing reversible loss of sensation (and motor function at higher doses)

## Types of Local Anesthesia

### 1. Topical Anesthesia
**Application Methods:**
- Creams, ointments, gels
- Sprays, solutions
- Patches
- Eye drops

**Examples:**
- **EMLA cream** (lidocaine-prilocaine): Used before IV placement, venipuncture
- **Lidocaine-prilocaine**: Applied 60-90 minutes before procedure
- **Tetracaine eye drops**: For corneal procedures
- **Lidocaine spray**: For endoscopy, airway procedures
- **Benzocaine spray**: For mouth procedures

### 2. Infiltration Anesthesia
**Technique:**
- Local anesthetic injected directly into tissue
- Creates a wheal at injection site
- Spreads through tissue to affect local nerve endings
- Used for small surgical areas

**Indications:**
- Laceration repair
- Small lesion excision (moles, cysts)
- Breast biopsy
- Minor skin procedures

**Technique Tips:**
- Inject slowly to minimize pain
- Use smallest effective needle (25-30 gauge)
- May buffer with sodium bicarbonate (reduces stinging)
- Keep solution warm (body temperature)

### 3. Field Block
**Technique:**
- Inject in a ring around the surgical area
- Anesthetizes nerves supplying the area
- Avoids injecting directly into wound
- Used for larger areas than infiltration

**Indications:**
- Scalp laceration repair
- Extremity procedures
- Small hernia repair
- Larger excisions

### 4. Nerve Block
**Technique:**
- Inject near specific nerve trunks
- Anesthetizes entire distribution of nerve
- Requires anatomical knowledge

## Local Anesthetic Agents

**Amides (most commonly used):**
- **Lidocaine (Xylocaine)**: 1-4 hours duration
- **Bupivacaine (Marcaine)**: 4-8 hours duration
- **Ropivacaine (Naropin)**: 4-8 hours, less cardiotoxic
- **Mepivacaine (Carbocaine)**: 2-3 hours

**Esters:**
- **Chloroprocaine**: Short duration, rapid metabolism
- **Tetracaine**: Long duration, mostly topical/spinal use
- **Benzocaine**: Topical only
- Higher allergy potential than amides

## Maximum Recommended Doses

**Without Epinephrine:**
- Lidocaine: 4.5 mg/kg (or 300 mg max)
- Bupivacaine: 2 mg/kg (or 175 mg max)
- Ropivacaine: 3 mg/kg (or 225 mg max)

**With Epinephrine (vasoconstrictor):**
- Lidocaine: 7 mg/kg (or 500 mg max) - epinephrine slows absorption
- Bupivacaine: 3 mg/kg (or 225 mg max)

**Practical Example:**
- 70 kg person: ~315 mg lidocaine max (with epinephrine)
- 1% lidocaine = 10 mg/mL
- So ~31 mL of 1% lidocaine is maximum safe dose

## Epinephrine (Adrenaline) Addition

**Benefits:**
- Vasoconstriction reduces bleeding
- Slows anesthetic absorption → higher max dose
- Prolongs duration of action
- Reduces systemic toxicity risk

**Concentration:** 1:100,000 or 1:200,000

**Contraindications:**
- Areas with end-arterial circulation (fingers, toes, nose, ear, penis)
- Patients on beta-blockers (risk of hypertensive crisis)
- Severe hypertension, heart disease

## Side Effects and Complications

**Common:**
- Injection site pain (burning, stinging)
- Bleeding, bruising
- Anxiety, palpitations (if epinephrine used)

**Serious (rare):**
- Local anesthetic systemic toxicity (LAST)
- Allergic reactions (more common with esters)
- Tissue necrosis (rare, epinephrine in end organs)
- Methemoglobinemia (benzocaine, prilocaine in infants)`,
      keyTerms: [
        { term: 'wheal', definition: 'Raised, blister-like area on skin caused by injection of fluid; confirms proper placement for local anesthesia', pronunciation: 'wheel' },
        { term: 'buffer', definition: 'Adding sodium bicarbonate to local anesthetic to neutralize acidity, reducing stinging sensation' },
        { term: 'vasoconstrictor', definition: 'Substance that narrows blood vessels; epinephrine added to local anesthetics to reduce bleeding and prolong effect' },
        { term: 'methemoglobinemia', definition: 'Blood disorder where hemoglobin is altered, reducing oxygen delivery; can be caused by benzocaine and prilocaine' },
        { term: 'end-arterial', definition: 'Blood supply to an area from a single source without significant collateral circulation; epinephrine contraindicated in these areas' },
      ],
      analogies: [
        'Field block is like putting a roadblock around a city - nothing can get in or out.',
        'Buffering lidocaine is like adding antacid to acidic food - it makes it less irritating.',
      ],
      examples: [
        'EMLA cream applied to a child\'s hand 60 minutes before blood draw significantly reduces pain.',
        'A dentist uses 2% lidocaine with 1:100,000 epinephrine for a filling - the epinephrine reduces bleeding.',
        'Emergency physician infiltrates 1% lidocaine around a 4 cm laceration before suturing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Local anesthetics reversibly block sodium channels to inhibit action potential propagation. Understanding pharmacology, maximum dosing, and tissue toxicity is essential for safe clinical use.',
      explanation: `## Pharmacology of Local Anesthetics

**Chemical Structure:**
All local anesthetics consist of:
- **Lipophilic aromatic ring**: Penetrates nerve membrane
- **Intermediate chain**: Ester (COO) or amide (NH)
- **Hydrophilic amine group**: Water soluble, exists in cationic form

**Mechanism of Action:**
1. Local anesthetic diffuses to nerve membrane
2. Crosses lipid bilayer in unionized form
3. Binds to intracellular portion of voltage-gated Na+ channels
4. Blocks channel inactivated state
5. Prevents Na+ influx and depolarization
6. Action potential cannot propagate

**Factors Affecting Onset:**
- **pH**: Lower pH (infected tissue) slows onset
- **Lipid solubility**: Higher = faster penetration
- **Concentration**: Higher = faster onset, denser block
- **Protein binding**: Higher binding = longer duration
- **Vascularity**: Higher = faster absorption = shorter duration

**pH and Clinical Relevance:**
- Infected tissue is acidic (pH ~6.5)
- More local anesthetic is ionized (charged) at lower pH
- Ionized form doesn't cross nerve membrane well
- Use larger volumes or alternate techniques in infected areas

## Amide vs. Ester Local Anesthetics

| Characteristic | Amides | Esters |
|---------------|--------|--------|
| Metabolism | Liver (CYP450) | Plasma pseudocholinesterase |
| Onset | Moderate | Fast |
| Duration | Longer | Shorter |
| Stability | Stable in solution | Unstable (short shelf life) |
| Allergy | Rare (preservative) | More common (metabolite PABA) |
| Examples | Lidocaine, Bupivacaine | Tetracaine, Chloroprocaine |

**Cross-Allergy:**
- Esters metabolize to PABA (para-aminobenzoic acid)
- PABA can cause allergic reactions
- Amides do NOT cross-react with esters
- Patients allergic to esters can safely receive amides
- Multi-dose vial preservatives (methylparaben) related to PABA

## Specific Local Anesthetic Agents

**Lidocaine:**
- Onset: 2-5 minutes
- Duration: 1-4 hours (varies by site)
- Maximum: 4.5 mg/kg without epi, 7 mg/kg with epi
- Versatile: skin, mucosa, nerve blocks
- Toxicity: CNS stimulation → seizures, cardiovascular depression

**Bupivacaine:**
- Onset: 5-10 minutes (slower than lidocaine)
- Duration: 4-8 hours
- Potency: 4x lidocaine
- Maximum: 2 mg/kg without epi, 3 mg/kg with epi
- Cardiotoxic: Arrhythmias, difficult resuscitation
- NOT recommended for peripheral nerve blocks with epinephrine in end organs

**Ropivacaine:**
- Similar to bupivacaine
- Less cardiotoxic (safer)
- Produces more motor blockade separation
- Maximum: 3 mg/kg

**Chloroprocaine:**
- Ester with rapid plasma hydrolysis
- Short duration (30-60 min)
- Very low toxicity
- Excellent for epidural in laboring women (doesn't affect newborn)

**Tetracaine:**
- Long-acting ester
- Used for spinal anesthesia
- Topical for eye procedures
- Significant toxicity risk

## Local Anesthetic Systemic Toxicity (LAST)

**Pathophysiology:**
- Accidental intravascular injection OR rapid absorption from large doses
- CNS and cardiovascular effects
- CNS symptoms appear FIRST (more sensitive)

**CNS Symptoms (progressive):**
1. Circumoral numbness, tinnitus, metallic taste
2. Restlessness, agitation, confusion
3. Slurred speech, nystagmus
4. Muscle twitching, tremors
5. Generalized seizures
6. Coma, respiratory arrest

**Cardiovascular Symptoms:**
- Hypotension, bradycardia
- Arrhythmias (ventricular, heart block)
- Cardiovascular collapse (bupivacaine most dangerous)

**Risk Factors:**
- Injection into highly vascular area (head, neck)
- Accidental intravascular placement
- Excessive total dose
- Very low body weight
- Liver disease (amide metabolism impaired)

**Treatment:**
1. Stop injection immediately
2. Airway support, 100% oxygen
3. Seizure treatment (benzodiazepines)
4. Lipid emulsion therapy (20% lipid rescue)
   - Bolus: 1.5 mL/kg
   - Infusion: 0.25 mL/kg/min
   - Continue until recovery

## Tissue Toxicity

**Myonecrosis:**
- Direct muscle toxicity from local anesthetics
- Bupivacaine more myotoxic than lidocaine
- Usually heals spontaneously

**Chondrotoxicity:**
- Cartilage damage from intra-articular injections
- Bupivacaine more toxic than ropivacaine
- Caution with repeated joint injections

**Neurotoxicity:**
- Rare with peripheral nerve blocks
- Higher risk with intraneural injection
- High-concentration lidocaine associated with transient neurologic symptoms (spinal)

## Special Considerations

**Pediatric Dosing:**
- Weight-based dosing essential
- Maximum dose guidelines apply
- Use 1% lidocaine for larger volumes
- EMLA cream reduces distress for procedures

**Pregnancy:**
- Local anesthetics cross placenta
- FDA Category B (lidocaine, bupivacaine)
- Avoid epinephrine in end organs
- Preferable to general anesthesia for minor procedures

**Liver Failure:**
- Amide metabolism impaired
- Reduce maximum dose
- Consider esters (plasma metabolism)

**Kidney Failure:**
- Amides safe (hepatic metabolism)
- Ester metabolism may be impaired (pseudocholinesterase)`,
      keyTerms: [
        { term: 'PABA', definition: 'Para-aminobenzoic acid - metabolite of ester local anesthetics that can cause allergic reactions' },
        { term: 'pseudocholinesterase', definition: 'Plasma enzyme that metabolizes ester local anesthetics and succinylcholine; deficiency prolongs drug action' },
        { term: 'transient neurologic symptoms', definition: 'TNS - back pain radiating to legs after spinal anesthesia; associated with lidocaine spinal anesthesia' },
        { term: 'myonecrosis', definition: 'Death of muscle tissue; can occur with local anesthetic injection into muscle' },
        { term: 'chondrotoxicity', definition: 'Toxic effect on cartilage; concern with intra-articular local anesthetic injections, especially bupivacaine' },
      ],
      clinicalNotes: 'Lipid emulsion therapy for LAST has dramatically improved outcomes since adoption. Bupivacaine-induced cardiac toxicity is notoriously difficult to treat with standard resuscitation - lipid emulsion can be life-saving. Always calculate maximum dose before injecting, especially in larger procedures or smaller patients.',
    },
    4: {
      level: 4,
      summary: 'Local anesthetic pharmacology involves complex interactions with sodium channel states, pH-dependent ionization, and organ-specific metabolism, with clinical implications for dosing, toxicity prevention, and special populations.',
      explanation: `## Advanced Local Anesthetic Pharmacology

**Sodium Channel Gating:**
Local anesthetics bind preferentially to:
- **Open state** (use-dependent block)
- **Inactivated state** (higher affinity than resting)

**Clinical Implications:**
- Rapidly firing nerves blocked first (pain fibers)
- Larger doses affect slower fibers (motor, proprioception)
- Small fibers blocked before large fibers
- Myelinated blocked before unmyelinated (same diameter)

**pH-Dependent Ionization:**
Henderson-Hasselbalch equation determines ionization:
- **pH = pKa + log([ionized]/[unionized])**
- pKa values: Lidocaine 7.9, Bupivacaine 8.1, Procaine 8.9
- At physiologic pH (7.4), amides are ~60-80% ionized
- Unionized form crosses membrane
- Ionized form binds sodium channel
- Lower pH → more ionization → less membrane penetration

**Tissue pH Modifiers:**
- Sodium bicarbonate (1 mEq per 10 mL lidocaine)
- Raises pH → more unionized drug
- Faster onset, less painful injection
- Precipitation risk with carbocaine

## Pharmacokinetics in Detail

**Absorption Factors:**
| Site | Absorption Speed | Max Dose Reduction |
|------|------------------|-------------------|
| Intercostal | Very Fast | Significant |
| Cervical plexus | Fast | Moderate |
| Lumbar plexus | Moderate | Mild |
| Brachial plexus | Moderate | Mild |
| Sciatic/femoral | Slow | Minimal |
| Subcutaneous | Slow | Minimal |

**Distribution:**
- **Vd**: Initial distribution to well-perfused organs
- **Redistribution**: To muscle and fat
- **Protein binding**: High (95% for bupivacaine) - limits free drug
- **Alpha-1 acid glycoprotein**: Major binding protein

**Metabolism:**
- **Amides**: Hepatic CYP450 (first-pass effect)
  - Lidocaine: CYP3A4 (major), CYP1A2 (minor)
  - Metabolites: monoethylglycinexylidide (MEGX) - active
- **Esters**: Plasma pseudocholinesterase (butyrylcholinesterase)
  - Rapid hydrolysis (<1 minute)
  - Metabolites: PABA (allergenic)

**Excretion:**
- **Amides**: Renal excretion of metabolites
- **Esters**: Renal excretion of PABA and other metabolites
- **Unchanged drug**: <5% renal

## Enhanced Local Anesthetic Techniques

**Liposomal Bupivacaine (Exparel):**
- Multivesicular liposomal formulation
- Extended release over 72-96 hours
- FDA: 2011 for field block, 2015 for nerve blocks
- Significantly more expensive
- Cost-effectiveness debated
- No advantage for short procedures

**Adjuvants to Local Anesthetics:**

**Epinephrine:**
- Vasoconstriction reduces systemic absorption
- Increases max dose by 30-50%
- Prolongs duration (lidocaine: 50% longer)
- Test dose for intravascular injection (heart rate increase)

**Clonidine:**
- Alpha-2 agonist
- Prolongs duration by 50-100%
- Can cause hypotension, bradycardia
- More common in regional than local

**Dexamethasone:**
- Prolongs duration of peripheral nerve blocks
- Anti-inflammatory, antiemetic
- 8 mg IM/IV common dose

**Sodium Bicarbonate:**
- 1 mEq per 10 mL lidocaine (1:10 ratio)
- Neutralizes acidity
- Reduces injection pain
- Faster onset
- Don't use with bupivacaine (precipitation risk)

**Dexmedetomidine:**
- Alpha-2 agonist
- Prolongs block duration significantly
- Sedation, sympatholysis
- Emerging adjuvant for nerve blocks

## Specific Clinical Applications

**Wound Infiltration:**
- Pre-incisional infiltration may reduce postoperative pain
- Multimodal: local + NSAID + acetaminophen
- Catheter infiltration for continuous infusion (some surgeries)

**Trigger Finger Injections:**
- 40 mg methylprednisolone + 1-2 mL lidocaine
- Intra-sheath injection
- Success rate: 60-80%
- Avoid epinephrine (vascularity of tendon sheath)

**Hemorrhoid Treatment:**
- Internal hemorrhoids: 2.5% lidocaine ointment
- Thrombosed external: excision under local
- Consider pudendal nerve block for extensive disease

**Dental Applications:**
- 2% lidocaine with 1:100,000 epinephrine
- Articaine 4% (amide with ester metabolism)
- Inferior alveolar nerve block for lower teeth
- Supraperiosteal infiltration for upper teeth

**Ophthalmic Applications:**
- Proparacaine 0.5% drops (topical)
- Sub-Tenon's block
- Peribulbar block
- Retrobulbar block (rarely used now)

## Local Anesthetic Systemic Toxicity Prevention

**Prevention Strategies:**
1. Use lowest effective dose
2. Aspirate before each injection
3. Inject slowly (≤10 mL/min for large volumes)
4. Use epinephrine as marker
5. Incremental dosing for large areas
6. Avoid accidental intravascular injection

**High-Risk Scenarios:**
- Intercostal nerve blocks (rapid absorption)
- Head/neck blocks (vascular, brain uptake)
- Patients with low cardiac reserve
- Hepatic failure (amide accumulation)
- Very low body weight

**Lipid Rescue Readiness:**
- 20% lipid emulsion immediately available
- Dosing: 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion
- Continue until cardiovascular recovery
- May require massive doses (up to 10 mL/kg)

## Special Populations

**Neonates and Infants:**
- Lower pseudocholinesterase activity
- Increased risk of methemoglobinemia (prilocaine)
- Alpha-1 acid glycoprotein lower → more free drug
- Reduce maximum dose

**Pregnant Patients:**
- Increased sensitivity to local anesthetics
- Epidural venous engorgement → increased intravascular uptake risk
- Avoid prilocaine (methemoglobinemia risk to fetus)
- Lidocaine and bupivacaine are Category B

**Elderly:**
- Reduced cardiac output → slower distribution
- Hepatic metabolism may be reduced
- Lower doses often adequate
- Increased sensitivity to CNS effects`,
      keyTerms: [
        { term: 'Henderson-Hasselbalch equation', definition: 'Mathematical relationship describing pH as a function of pKa and ratio of ionized to unionized drug' },
        { term: 'use-dependent block', definition: 'Preferential blockade of rapidly firing nerves because local anesthetics bind to open/inactivated sodium channels' },
        { term: 'alpha-1 acid glycoprotein', definition: 'Acute phase protein that binds local anesthetics; levels increase during inflammation, affecting free drug concentration' },
        { term: 'multivesicular liposomal', definition: 'Drug delivery system using lipid spheres with multiple compartments for extended release' },
        { term: 'pre-incisional', definition: 'Administration of local anesthetic before surgical incision to prevent central sensitization and reduce postoperative pain' },
      ],
      clinicalNotes: 'Liposomal bupivacaine has been heavily marketed but systematic reviews show limited clinical advantage over standard bupivacaine for most procedures. The high cost is difficult to justify for routine use. However, it may have value in specific procedures where prolonged analgesia without catheter is desired.',
    },
    5: {
      level: 5,
      summary: 'Local anesthetic practice integrates advanced pharmacology, novel delivery systems, and toxicity prevention protocols, with ongoing research examining formulation improvements and adjuvant therapies.',
      explanation: `## State of the Art: Local Anesthesia 2024

**Contemporary practice** balances efficacy, safety, and cost:
- Standard local anesthetics remain first-line
- Novel formulations have specific niches
- Lipid emulsion rescue is standard of care for toxicity
- Multimodal analgesia reduces local anesthetic requirements

## Recent Evidence and Updates

**Liposomal Bupivacaine (Exparel) Meta-Analyses:**
- No significant advantage over standard bupivacaine for most procedures
- Possible benefit in TAP blocks for cesarean delivery
- Cost: >$200 per dose vs. <$5 for bupivacaine
- Not recommended for routine use
- May have role in patients where catheters impractical

**Local Anesthetic Systemic Toxicity (LAST) Registry:**
- Incidence: ~0.03-0.08% for peripheral nerve blocks
- Most cases related to inadvertent intravascular injection
- Ultrasound guidance reduced but didn't eliminate LAST
- Lipid emulsion dramatically reduced mortality
- Current recommendation: 20% lipid emulsion immediately available

**Epinephrine in Local Anesthesia:**
- Routine use debated
- Vasoconstriction benefits: reduced bleeding, prolonged duration
- Risk: Tissue ischemia in end-arterial areas
- Digital blocks: epinephrine previously contraindicated
- Recent evidence: epinephrine safe in digits with proper dilution (<1:200,000)
- BUT: Avoid in patients with severe vascular disease

## Emerging Techniques

**Needle-Free Jet Injection:**
- High-pressure stream penetrates skin
- No needle, less pain, no sharps disposal
- Applications: Vaccines, insulin, local anesthesia
- Limitations: Volume, depth control

**Microneedle Patches:**
- Tiny needles penetrate stratum corneum only
- Local anesthetic delivery without deep injection
- Applications: Topical anesthesia before IV placement
- Still investigational for most uses

**Thermosensitive Gels:**
- Liquid at room temperature, gel at body temperature
- Prolonged contact at site
- Postoperative pain control
- Examples: Poloxamer gels

**Nanoparticle Delivery:**
- Encapsulated local anesthetic
- Prolonged release
- Targeted delivery
- Early phase development

## Adjuvant Therapy Evidence

**Dexamethasone:**
- Level A evidence for prolonging brachial plexus block duration
- 8-10 mg equivalent to perineural catheter for ~24 hours
- Antiemetic benefit adds value
- Controversy: perineural vs. IV administration

**Dexmedetomidine:**
- Prolongs block duration (dose-dependent)
- Side effects: Bradycardia, hypotension, sedation
- More evidence for peripheral than neuraxial
- FDA: Not approved for regional anesthesia (off-label)

**Magnesium:**
- NMDA antagonist
- Perineural magnesium: mixed evidence
- IV magnesium: systemic analgesia
- Inexpensive, generally safe

**NSAIDs as Adjuncts:**
- Ketorolac added to local anesthetic for infiltration
- Prolongs analgesia modestly
- Reduces opioid requirements
- Commonly used in multimodal protocols

## Special Clinical Contexts

**Cosmetic Surgery:**
- Tumescent anesthesia: Large volume dilute lidocaine + epinephrine
- Maximum lidocaine dose increased to 35 mg/kg (tumescent technique)
- Mechanism: Slow absorption from fat, vasoconstriction
- Monitor plasma levels for large-volume procedures

**Trauma and Wound Care:**
- Early local infiltration reduces pain scores
- Lidocaine-epinephrine-tetracaine (LET) topical for wound repair
- LET = 4% lidocaine, 0.1% epinephrine, 0.5% tetracaine
- Effective for facial and scalp lacerations

**Painful Chronic Conditions:**
- Trigger point injections: local anesthetic ± steroid
- Bursitis: local anesthetic + steroid injection
- Neuroma: local anesthetic ± steroid or alcohol ablation
- Myofascial pain: local anesthetic infiltration

**Pediatric Considerations:**
- Age-appropriate dosing critical
- EMLA cream reduces procedure-related distress
- Avoid benzocaine in infants <2 months (methemoglobinemia)
- Use 1% lidocaine to allow larger volumes

## Toxicology Updates

**Methemoglobinemia:**
- Benzocaine sprays/patches: Black box warning
- Prilocaine: Dose-dependent risk
- Infants at highest risk (immature NADH reductase)
- Treatment: Methylene blue 1-2 mg/kg IV over 5 minutes
- Prevention: Alternative agents in high-risk patients

**Cardiotoxicity Differences:**
- Bupivacaine: Most cardiotoxic, difficult to resuscitate
- Ropivacaine: Less cardiotoxic (S-enantiomer only)
- Levobupivacaine: Less cardiotoxic than racemic bupivacaine
- Lidocaine: Antiarrhythmic properties (class Ib)

**Pregnancy Category Update:**
- All amides: Category B (no proven risk)
- Esters: Category C (some risk, but limited data)
- Prilocaine: Avoid (methemoglobinemia)
- Lidocaine: Preferred in pregnancy

## Future Directions

**Extended-Release Formulations:**
- Bioresorbable polymer microspheres
- Drug release over days to weeks
- Applications: Postoperative pain, chronic pain
- Challenge: Controlling release rate

**Local Anesthetic Biosynthesis:**
- Recombinant production
- Potential for novel compounds
- Early research stage

**Targeted Delivery:**
- Nerve-specific targeting
- Reduced systemic exposure
- Conjugated molecules
- Preclinical investigation

**Improved Toxicity Monitoring:**
- Point-of-care local anesthetic levels
- Early warning systems
- Automated dose calculation`,
      keyTerms: [
        { term: 'tumescent anesthesia', definition: 'Dilute lidocaine with epinephrine infiltrated into large areas; allows much higher total lidocaine doses due to slow absorption' },
        { term: 'LET solution', definition: 'Topical anesthetic combination (Lidocaine, Epinephrine, Tetracaine) for wound repair without injection' },
        { term: 'poloxamer', definition: 'Thermosensitive polymer that is liquid when cold and forms gel at body temperature; used for drug delivery' },
        { term: 'methylene blue', definition: 'Antidote for methemoglobinemia; reduces methemoglobin back to hemoglobin' },
        { term: 'NADH reductase', definition: 'Enzyme that converts methemoglobin back to hemoglobin; immature in infants, predisposing to methemoglobinemia' },
      ],
      clinicalNotes: `2024 Practice Updates:
1. Epinephrine with local anesthesia in digits is safe with proper dilution (≤1:200,000) and avoidance in vascular disease
2. Liposomal bupivacaine not recommended for routine use - high cost without clear benefit
3. LAST registry shows ultrasound doesn't eliminate risk - vigilance still required
4. Dexamethasone 8-10 mg (perineural or IV) significantly prolongs block duration
5. Avoid benzocaine in infants <2 months due to methemoglobinemia risk
6. Maximum lidocaine dose for tumescent anesthesia is 35 mg/kg (vs. 7 mg/kg standard)
7. Sodium bicarbonate buffering (1:10) reduces injection pain and speeds onset`,
    },
  },

  media: [
    {
      id: 'local-infiltration-technique',
      type: 'diagram',
      filename: 'local-infiltration-technique.svg',
      title: 'Local Infiltration Technique',
      description: 'Diagram showing proper needle angle and injection technique for local infiltration',
    },
    {
      id: 'field-block-diagram',
      type: 'diagram',
      filename: 'field-block-vs-infiltration.svg',
      title: 'Field Block vs. Infiltration',
      description: 'Comparison of field block and infiltration techniques',
    },
  ],

  citations: [
    {
      id: 'asra-last-guidelines',
      type: 'article',
      title: 'ASRA Practice Advisory on Local Anesthetic Systemic Toxicity',
      source: 'Regional Anesthesia and Pain Medicine',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28584849/',
      accessedDate: '2024-01-01',
    },
    {
      id: 'miller-chapter-17',
      type: 'textbook',
      title: 'Local Anesthetics',
      source: "Miller's Anesthesia",
      chapter: '17',
    },
    {
      id: 'morgan-michels-local',
      type: 'textbook',
      title: 'Local Anesthesia',
      source: 'Clinical Anesthesiology',
      chapter: '16',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-regional', targetType: 'topic', relationship: 'sibling', label: 'Regional Anesthesia' },
    { targetId: 'nervous-structure-nerve', targetType: 'structure', relationship: 'related', label: 'Nerves' },
    { targetId: 'pain-management-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Pain Management' },
  ],

  tags: {
    systems: ['nervous', 'integumentary'],
    topics: ['anesthesia', 'pain management', 'pharmacology', 'minor procedures'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default localAnesthesiaContent;
