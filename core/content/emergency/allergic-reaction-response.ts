/**
 * Allergic Reaction Response
 *
 * Comprehensive guide to recognizing and managing allergic reactions from
 * mild urticaria through life-threatening anaphylaxis, including epinephrine
 * auto-injector use, trigger identification, and prevention strategies.
 */

import { EducationalContent } from '../types';

export const allergicReactionResponseContent: EducationalContent = {
  id: 'topic-allergic-reaction-response',
  type: 'topic',
  name: 'Allergic Reaction Response',
  nameEs: 'Respuesta a Reaccion Alergica',
  alternateNames: ['Anaphylaxis Management', 'Allergy Emergency', 'Epinephrine Auto-Injector Use'],

  levels: {
    1: {
      level: 1,
      summary: 'An allergic reaction happens when your body overreacts to something harmless like food, a bee sting, or medicine. Mild reactions cause itching and hives, but severe reactions (anaphylaxis) can make it hard to breathe and need emergency help right away.',
      explanation: `Your immune system is like a security guard for your body. It watches for germs and fights them off. But sometimes the security guard makes a mistake and attacks something that is actually harmless, like peanuts, bee venom, or a medicine. This overreaction is an allergic reaction.

**Mild allergic reactions:**
- Itchy, red, or bumpy skin (hives)
- Runny nose, sneezing, watery eyes
- Mild swelling around the eyes or lips
- These are uncomfortable but usually not dangerous

**Severe allergic reactions (anaphylaxis) — THIS IS AN EMERGENCY:**
Anaphylaxis is like the security guard setting off every alarm in the building at once. The whole body reacts:
- Swelling of the throat that makes it hard to breathe or swallow
- Trouble breathing, wheezing, or a tight feeling in the chest
- Dizziness, feeling faint, or passing out (blood pressure drops)
- Vomiting, stomach cramps, or diarrhea
- A feeling of doom (like something very bad is about to happen)
- Skin turns pale or blue

**What to do for a MILD allergic reaction:**
1. Move away from whatever caused the reaction
2. Take an antihistamine (like Benadryl) if available
3. Apply cool compresses to itchy areas
4. Watch carefully — mild reactions can sometimes become severe

**What to do for ANAPHYLAXIS:**
1. **Call 911 immediately** — this is a life-threatening emergency
2. **Use an epinephrine auto-injector (EpiPen)** if available — inject into the outer thigh
3. Have the person lie down with their legs raised (unless they are having trouble breathing, then let them sit up)
4. If symptoms do not improve in 5 minutes, give a second dose of epinephrine
5. Be ready to do CPR if the person stops breathing

**Common things that cause allergic reactions:**
- Foods: Peanuts, tree nuts, milk, eggs, shellfish, wheat, soy, fish
- Insect stings: Bees, wasps, hornets, yellow jackets, fire ants
- Medicines: Penicillin, aspirin, ibuprofen
- Latex (rubber gloves)
- Exercise (rare, but it happens)

**How to use an EpiPen:**
1. Pull off the blue safety cap
2. Hold the orange tip against the outer thigh (you can inject through clothing)
3. Press firmly until you hear a click
4. Hold in place for 10 seconds
5. Remove and massage the area
6. Call 911 even after using it — the person still needs emergency care`,
      keyTerms: [
        { term: 'allergic reaction', definition: 'When your immune system overreacts to a substance that is usually harmless, causing symptoms like hives, swelling, or breathing problems' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction that affects the whole body and can cause difficulty breathing, low blood pressure, and death if not treated immediately' },
        { term: 'epinephrine', definition: 'A medicine (also called adrenaline) that is the first and most important treatment for anaphylaxis — it opens the airways and raises blood pressure' },
        { term: 'EpiPen', definition: 'A device that automatically injects a dose of epinephrine into the thigh muscle to treat anaphylaxis' },
        { term: 'hives', definition: 'Itchy, raised red bumps on the skin caused by an allergic reaction' },
        { term: 'allergen', definition: 'Any substance that causes an allergic reaction, such as peanuts, bee venom, or certain medicines' },
      ],
      analogies: [
        'Your immune system is like a security guard — allergic reactions happen when the guard attacks something harmless by mistake.',
        'Anaphylaxis is like every alarm in a building going off at once — the whole body is affected and needs immediate help.',
        'Epinephrine is like a fire extinguisher for allergic reactions — it works fast to stop the dangerous effects.',
      ],
      patientCounselingPoints: [
        'If you have a known severe allergy, always carry two epinephrine auto-injectors with you.',
        'Use epinephrine FIRST for anaphylaxis — do not wait to see if antihistamines work.',
        'Always call 911 after using an EpiPen — symptoms can come back hours later (biphasic reaction).',
        'Wear a medical alert bracelet if you have a life-threatening allergy.',
        'Read food labels carefully and always ask about ingredients at restaurants.',
        'Tell your school, workplace, and friends about your allergies so they can help in an emergency.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic reactions range from mild localized responses (urticaria, rhinitis) to life-threatening systemic anaphylaxis. Rapid recognition, epinephrine administration, and EMS activation are the cornerstones of anaphylaxis management. Understanding trigger identification, auto-injector use, and prevention strategies is essential for anyone with allergies or who cares for someone with allergies.',
      explanation: `## Allergic Reaction Response: Complete Guide

### Types of Allergic Reactions

**Mild to Moderate (Localized):**
- Urticaria (hives): Raised, itchy welts; can appear anywhere on the body
- Angioedema: Deeper tissue swelling, typically around eyes, lips, tongue, or hands
- Allergic rhinitis: Sneezing, nasal congestion, runny nose, itchy eyes
- Contact dermatitis: Localized skin rash from direct contact with allergen
- Mild GI symptoms: Nausea, abdominal discomfort

**Severe (Anaphylaxis):**
Anaphylaxis is a systemic reaction involving two or more organ systems:
- **Skin/mucosal**: Widespread hives, flushing, angioedema (90% of cases)
- **Respiratory**: Throat tightness, stridor, wheezing, shortness of breath, hoarseness
- **Cardiovascular**: Hypotension, tachycardia, dizziness, syncope, pale/clammy skin
- **Gastrointestinal**: Severe cramping, vomiting, diarrhea
- **Neurological**: Anxiety, sense of impending doom, confusion, loss of consciousness

### Diagnostic Criteria for Anaphylaxis

Anaphylaxis is likely when ANY ONE of the following three criteria is met:
1. **Acute onset** of skin/mucosal symptoms PLUS respiratory compromise OR hypotension
2. **Two or more of the following** rapidly after exposure to a likely allergen: skin/mucosal symptoms, respiratory symptoms, hypotension, persistent GI symptoms
3. **Hypotension** after exposure to a KNOWN allergen (SBP <90 mmHg in adults or >30% decrease from baseline)

### Treatment Algorithm

**Step 1 — Epinephrine (FIRST-LINE treatment):**
- Intramuscular injection into the mid-outer thigh
- Dose: 0.3-0.5 mg (1:1000 concentration) for adults
- Auto-injector: 0.3 mg (EpiPen, Auvi-Q) for patients >30 kg
- Pediatric: 0.15 mg auto-injector for patients 15-30 kg; 0.1 mg/kg (manual dosing) for infants
- Repeat every 5-15 minutes if symptoms persist or recur
- There is NO absolute contraindication to epinephrine in anaphylaxis

**Step 2 — Call 911:**
- Every patient with anaphylaxis needs emergency medical evaluation
- Biphasic reactions (recurrence of symptoms hours later) occur in 5-20% of cases
- Patients should be observed for at least 4-6 hours after an anaphylactic episode

**Step 3 — Position the patient:**
- Supine with legs elevated if hypotensive
- Sitting upright if respiratory distress predominates
- Recovery position if unconscious but breathing
- Do NOT have the patient stand or sit up suddenly — this can cause cardiovascular collapse

**Step 4 — Adjunctive therapies (do NOT delay epinephrine for these):**
- Antihistamines: H1 blocker (diphenhydramine 25-50 mg) for symptom relief — do NOT use as a substitute for epinephrine
- Albuterol inhaler: For bronchospasm that persists after epinephrine
- Supplemental oxygen: If available
- IV fluids: For persistent hypotension (EMS/hospital)

### Common Allergens and Cross-Reactivity

**Food Allergens (Top 9 in the US — FASTER Act 2021):**
Milk, eggs, peanuts, tree nuts, wheat, soy, fish, shellfish, sesame

**Insect Venom:**
- Hymenoptera: Bees, wasps, hornets, yellow jackets, fire ants
- Systemic reactions to stings occur in 0.4-0.8% of children and 3% of adults
- Venom immunotherapy reduces recurrence from 60% to <5%

**Medications:**
- Penicillin/beta-lactams (most common cause of drug-induced anaphylaxis)
- NSAIDs
- Neuromuscular blocking agents (most common perioperative trigger)
- Radiocontrast media

**Latex:**
- Healthcare workers at higher risk due to occupational exposure
- Cross-reactivity with certain fruits: banana, avocado, kiwi, chestnut

### Biphasic Anaphylaxis
- A recurrence of symptoms 1-72 hours after the initial reaction (typically 4-12 hours)
- Occurs in 5-20% of anaphylaxis cases
- Not reliably predicted by severity of initial reaction
- This is why all anaphylaxis patients need observation and should have a second epinephrine auto-injector available

### Prevention and Long-Term Management
- Allergen avoidance: Read labels, ask about ingredients, carry a chef card at restaurants
- Carry two epinephrine auto-injectors at all times
- Develop an Anaphylaxis Action Plan with your allergist
- Wear medical identification (bracelet or necklace)
- Consider allergist referral for: Skin testing, food challenges, venom immunotherapy, drug desensitization
- Educate family, friends, school staff, and coworkers on how to recognize and treat anaphylaxis`,
      keyTerms: [
        { term: 'anaphylaxis', definition: 'A severe, rapidly progressive systemic allergic reaction involving two or more organ systems, requiring immediate epinephrine administration and emergency medical care' },
        { term: 'biphasic reaction', definition: 'A recurrence of anaphylaxis symptoms hours after the initial reaction has resolved, occurring in 5-20% of cases; the reason patients need extended observation after treatment' },
        { term: 'angioedema', definition: 'Deeper tissue swelling beneath the skin, most commonly affecting the face, lips, tongue, and throat, which can be life-threatening when it compromises the airway' },
        { term: 'urticaria', definition: 'Raised, itchy, red welts (hives) on the skin surface caused by histamine release during an allergic reaction' },
        { term: 'epinephrine auto-injector', definition: 'A pre-loaded device that delivers a measured dose of epinephrine via intramuscular injection into the thigh; the first-line treatment for anaphylaxis' },
        { term: 'venom immunotherapy', definition: 'A long-term treatment where gradually increasing doses of insect venom are administered to build tolerance and prevent future anaphylaxis from stings' },
      ],
      patientCounselingPoints: [
        'Epinephrine is ALWAYS the first treatment for anaphylaxis — never give antihistamines first and wait.',
        'There is no situation where the risk of epinephrine outweighs the risk of untreated anaphylaxis.',
        'Always carry two auto-injectors because a single dose may not be enough.',
        'After any epinephrine use, go to the emergency department for observation — symptoms can return.',
        'Replace expired auto-injectors promptly and store them at room temperature (not in the car in summer/winter).',
      ],
    },
    3: {
      level: 3,
      summary: 'Anaphylaxis pathophysiology involves IgE-mediated mast cell and basophil degranulation releasing histamine, tryptase, prostaglandins, and leukotrienes, causing vasodilation, increased vascular permeability, bronchospasm, and mucosal edema. Management is anchored in epinephrine pharmacology, volume resuscitation, and understanding of refractory anaphylaxis.',
      explanation: `## Allergic Reaction Response: Intermediate Analysis

### Immunology of Allergic Reactions

**Type I Hypersensitivity (Immediate):**
Allergic reactions, including anaphylaxis, are predominantly Type I (Gell and Coombs classification) IgE-mediated hypersensitivity reactions:

1. **Sensitization phase**: First exposure to allergen is processed by antigen-presenting cells, leading to Th2 lymphocyte activation and B-cell class switching to IgE production. IgE binds to high-affinity FcepsilonRI receptors on mast cells and basophils. No symptoms during this phase.

2. **Re-exposure (effector phase)**: Allergen crosslinks surface-bound IgE molecules, triggering mast cell degranulation within seconds to minutes.

3. **Mediator release**:
   - **Preformed mediators** (immediate, within seconds): Histamine, tryptase, heparin, TNF-alpha
   - **Newly synthesized lipid mediators** (minutes): Prostaglandin D2, leukotriene C4/D4/E4, PAF (platelet-activating factor)
   - **Cytokines** (hours): IL-4, IL-5, IL-13, TNF-alpha

**Effects of Key Mediators:**
| Mediator | Vascular | Respiratory | Other |
|----------|----------|-------------|-------|
| Histamine | Vasodilation, increased permeability | Bronchospasm, mucus secretion | Pruritus, tachycardia |
| Leukotrienes | Increased permeability | Potent bronchospasm | Mucus secretion |
| PAF | Vasodilation, permeability | Bronchospasm | Platelet aggregation |
| Prostaglandin D2 | Vasodilation | Bronchospasm | Flushing |

**Non-IgE Anaphylaxis:**
Some triggers cause anaphylaxis through non-IgE mechanisms:
- Radiocontrast media: Direct mast cell activation
- NSAIDs: COX-1 inhibition shunts arachidonic acid toward leukotriene synthesis
- Exercise-induced: Unclear mechanism, often food-dependent
- Cold-induced: Physical urticaria leading to systemic reaction
These are clinically identical to IgE-mediated anaphylaxis and are treated the same way.

### Epinephrine Pharmacology

**Mechanism of Action:**
Epinephrine acts on multiple adrenergic receptors simultaneously:
- **Alpha-1**: Vasoconstriction → reverses hypotension, reduces mucosal edema and angioedema
- **Beta-1**: Positive chronotropy and inotropy → increases cardiac output
- **Beta-2**: Bronchodilation → reverses bronchospasm; stabilizes mast cell membranes → reduces further mediator release

**Route and Pharmacokinetics:**
- IM injection (vastus lateralis): Peak plasma levels at 8-10 minutes. Faster and higher peak levels than subcutaneous injection.
- Auto-injector needle length: Standard EpiPen reaches IM depth in most patients but may not reach IM tissue in obese patients (consider longer needle or manual injection)
- Half-life: 2-3 minutes (rapid metabolism by COMT and MAO)
- Short duration explains why repeat dosing is often needed and why IV infusion is used in refractory cases

### Refractory Anaphylaxis

Anaphylaxis that does not respond to ≥2 doses of IM epinephrine:
- **IV epinephrine infusion**: 0.1-1 mcg/kg/min, titrated to effect. Requires cardiac monitoring. Use 1:10,000 (0.1 mg/mL) concentration for IV administration.
- **Volume resuscitation**: Massive capillary leak can require 5-10 liters of crystalloid in severe anaphylaxis. Titrate to blood pressure and perfusion markers.
- **Vasopressors**: Norepinephrine or vasopressin for persistent hypotension despite epinephrine and fluids
- **Glucagon**: 1-5 mg IV for patients on beta-blockers (beta-blockade prevents the compensatory tachycardia and bronchodilation from epinephrine). Glucagon activates adenylate cyclase via non-adrenergic pathways.
- **Methylene blue**: 1.5-2 mg/kg IV as a rescue agent for vasoplegia-predominant anaphylaxis. Inhibits nitric oxide-mediated vasodilation.

### Serum Tryptase

- Tryptase is a protease released from mast cell granules
- Peaks 60-90 minutes after anaphylaxis onset, returns to baseline within 6-8 hours
- A level ≥11.4 ng/mL or >1.2x baseline + 2 ng/mL supports the diagnosis of anaphylaxis
- Useful in post-mortem diagnosis and in distinguishing anaphylaxis from other causes of shock
- Not reliably elevated in food-induced anaphylaxis (more basophil-mediated)

### Special Populations

**Pregnancy:**
- Anaphylaxis during pregnancy is a double emergency (maternal and fetal)
- Epinephrine is the treatment of choice — benefit outweighs the theoretical risk of uterine artery vasoconstriction
- Left lateral tilt positioning after 20 weeks gestation to relieve aortocaval compression
- Fetal monitoring after stabilization

**Beta-Blocker Use:**
- Patients on beta-blockers may have more severe anaphylaxis (impaired compensatory tachycardia)
- May be resistant to epinephrine
- Glucagon is the specific adjunctive agent for beta-blocker-related refractory anaphylaxis

**ACE Inhibitor Use:**
- ACE inhibitors impair bradykinin degradation
- Associated with increased severity of anaphylaxis and angioedema
- Consider medication review for patients with a history of anaphylaxis`,
      keyTerms: [
        { term: 'mast cell degranulation', definition: 'The process by which mast cells release their preformed granule contents (histamine, tryptase, heparin) upon allergen-triggered crosslinking of surface IgE, initiating the immediate allergic response' },
        { term: 'serum tryptase', definition: 'A protease biomarker released from mast cell granules during anaphylaxis, peaking at 60-90 minutes; useful for confirming the diagnosis, especially in ambiguous cases or post-mortem' },
        { term: 'FcepsilonRI', definition: 'The high-affinity IgE receptor on mast cells and basophils; allergen-induced crosslinking of IgE bound to this receptor triggers the signaling cascade leading to degranulation' },
        { term: 'platelet-activating factor', definition: 'A potent phospholipid mediator released during anaphylaxis that causes vasodilation, increased vascular permeability, bronchospasm, and platelet aggregation; its serum levels correlate with anaphylaxis severity' },
        { term: 'refractory anaphylaxis', definition: 'Anaphylaxis that fails to respond to two or more doses of intramuscular epinephrine, requiring IV epinephrine infusion, aggressive fluid resuscitation, and additional vasopressor support' },
        { term: 'glucagon', definition: 'A pancreatic hormone used as a rescue agent in beta-blocker-related refractory anaphylaxis; it activates adenylate cyclase independently of beta-adrenergic receptors, bypassing the beta-blockade' },
      ],
    },
    4: {
      level: 4,
      summary: 'Graduate-level anaphylaxis management integrates the molecular immunology of IgE-mediated and non-IgE-mediated pathways, evidence-based resuscitation protocols for refractory anaphylaxis, perioperative anaphylaxis investigation, the emerging role of PAF-acetylhydrolase deficiency as a risk factor, and long-term management including component-resolved diagnostics and biologics.',
      explanation: `## Allergic Reaction Response: Graduate-Level Detail

### Molecular Pathways of Anaphylaxis

**IgE-Mediated Signaling Cascade:**
1. Allergen-IgE-FcepsilonRI crosslinking activates Lyn (Src family kinase) and Syk (spleen tyrosine kinase)
2. Phosphorylation of LAT (Linker for Activation of T cells) and SLP-76
3. Activation of PLC-gamma → IP3 (calcium mobilization from ER) + DAG (PKC activation)
4. Calcium influx triggers granule fusion with the plasma membrane (degranulation)
5. Arachidonic acid metabolism via COX (prostaglandins) and 5-LOX (leukotrienes) pathways
6. The entire cascade from allergen binding to mediator release occurs within 60-120 seconds

**Amplification Mechanisms:**
- Complement activation: C3a and C5a (anaphylatoxins) directly activate mast cells, amplifying the response
- PAF amplification loop: PAF activates platelets and endothelial cells, propagating inflammation
- Bradykinin generation: Contact pathway activation contributes to vasodilation and edema

**PAF-Acetylhydrolase (PAF-AH) Deficiency:**
- PAF is degraded by the enzyme PAF-AH
- Patients with low PAF-AH levels have higher circulating PAF during anaphylaxis
- Vadas et al. (2008): Fatal and near-fatal anaphylaxis was associated with significantly lower PAF-AH activity
- PAF-AH deficiency may explain why some individuals develop fatal anaphylaxis while others with similar exposures have mild reactions
- Currently no clinical test is routinely available to assess PAF-AH levels

### Perioperative Anaphylaxis

**Incidence and Triggers:**
- Estimated 1:10,000 to 1:20,000 anesthesia procedures
- Neuromuscular blocking agents (NMBAs): Most common cause (50-70% of cases)
  - Succinylcholine and rocuronium are the most frequent triggers
  - Cross-reactivity among NMBAs is common (60-70%)
- Antibiotics: Second most common (15-20%)
- Latex: Declining due to latex-free protocols (5-10%)
- Chlorhexidine: Emerging cause, increasingly recognized
- Blood products, colloids, and dyes are additional triggers

**Investigation Protocol (NAP6 recommendations):**
1. Serum tryptase: At onset, 1-2 hours, and >24 hours (baseline)
2. Specific IgE testing: 4-6 weeks after event for suspected triggers
3. Skin prick and intradermal testing: 4-6 weeks after event at an allergy center
4. Basophil activation test (BAT): Flow cytometry-based assay measuring CD63/CD203c upregulation on basophils exposed to potential allergens
5. Component-resolved diagnostics: Identifies the specific protein component responsible (see below)

### Component-Resolved Diagnostics (CRD)

Traditional allergy testing (skin prick, total IgE to whole allergen extract) cannot distinguish between clinically significant sensitization and cross-reactive carbohydrate determinants (CCDs).

CRD measures IgE to individual allergen protein components:
- **Peanut**: Ara h 2 (2S albumin) = high risk of systemic reaction; Ara h 8 (PR-10 protein) = cross-reactive with birch pollen, usually causes only oral allergy syndrome
- **Milk**: Casein (Bos d 8) = persistent allergy; Whey proteins = more likely to be outgrown
- **Venom**: Api m 1 (bee PLA2), Ves v 5 (wasp antigen 5) — distinguishes true double sensitization from CCD cross-reactivity

CRD improves diagnostic accuracy, reduces unnecessary avoidance diets, and guides oral food challenge decisions.

### Biologic Therapies

**Omalizumab (Xolair):**
- Anti-IgE monoclonal antibody that binds free IgE, preventing FcepsilonRI binding
- FDA-approved for food allergy (January 2024) as an adjunct to allergen avoidance
- Reduces the severity of accidental exposures
- Also used as pre-treatment to enable safer oral immunotherapy
- Does NOT cure the allergy — protection requires ongoing treatment

**Oral Immunotherapy (OIT):**
- Palforzia (peanut protein powder): FDA-approved for peanut allergy in patients 4-17 years
- Graduated dosing escalation under medical supervision
- Achieves desensitization (tolerance while on therapy) in approximately 67% of patients
- Does NOT achieve sustained unresponsiveness (permanent tolerance) in most patients
- Risk of adverse reactions during therapy (10-20% experience significant GI or systemic symptoms)

### Anaphylaxis Fatality Analysis

**Epidemiology of Fatal Anaphylaxis:**
- Estimated 1,500 deaths per year in the US (likely underreported)
- Food-induced: Primarily peanuts and tree nuts; adolescents and young adults at highest risk; delayed epinephrine use is the most common modifiable factor
- Venom-induced: Middle-aged and older adults; often in individuals without prior history of systemic reactions
- Drug-induced: Penicillin and other beta-lactams; perioperative NMBAs
- Idiopathic: No trigger identified in approximately 20% of fatal cases

**Risk Factors for Fatal Outcome:**
- Delayed epinephrine administration (most important modifiable factor)
- Upright posture during hypotensive anaphylaxis ("empty ventricle syndrome")
- Concomitant asthma (especially poorly controlled)
- Beta-blocker or ACE inhibitor use
- Mast cell disorders (mastocytosis, elevated baseline tryptase)
- Absence of skin symptoms (anaphylaxis without urticaria may not be recognized as allergic)`,
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'An advanced allergy testing approach measuring IgE against individual allergen protein components rather than whole extracts, enabling distinction between clinically relevant sensitization and benign cross-reactivity' },
        { term: 'PAF-acetylhydrolase', definition: 'The enzyme that degrades platelet-activating factor; low levels are associated with fatal and near-fatal anaphylaxis, suggesting PAF accumulation as a key mechanism in severe reactions' },
        { term: 'omalizumab', definition: 'An anti-IgE monoclonal antibody (Xolair) that binds free IgE and prevents mast cell sensitization; FDA-approved as adjunctive treatment for food allergy to reduce severity of accidental exposures' },
        { term: 'oral immunotherapy', definition: 'A treatment approach involving gradual escalation of allergen dose under medical supervision to achieve desensitization; FDA-approved for peanut allergy (Palforzia) but does not typically achieve permanent tolerance' },
        { term: 'basophil activation test', definition: 'A flow cytometry-based in vitro assay measuring basophil activation markers (CD63, CD203c) in response to allergen exposure; used in perioperative anaphylaxis investigation and when skin testing is contraindicated' },
        { term: 'empty ventricle syndrome', definition: 'Cardiovascular collapse during anaphylaxis exacerbated by upright posture, where peripheral vasodilation and capillary leak reduce venous return to the point of cardiac emptying and pulseless electrical activity' },
      ],
      clinicalNotes: `Graduate-level clinical notes:

1. **Epinephrine timing is paramount**: Analysis of fatal anaphylaxis cases consistently identifies delayed epinephrine as the most common modifiable factor. Administer epinephrine at the first sign of systemic reaction — do not wait for cardiovascular collapse.

2. **Position matters**: Place hypotensive anaphylaxis patients supine immediately. Standing or sitting upright during anaphylactic shock can cause cardiovascular collapse (empty ventricle syndrome) and has been implicated in fatalities.

3. **Glucagon for beta-blocked patients**: Patients on beta-blockers may not respond to standard epinephrine doses. Glucagon 1-5 mg IV should be readily available. Monitor for vomiting (aspiration risk).

4. **Perioperative investigation**: All suspected perioperative anaphylaxis requires systematic investigation including serial tryptase, delayed skin testing, and specific IgE. The NAP6 protocol provides a standardized approach.

5. **Mastocytosis screening**: Consider baseline tryptase in patients with unexplained anaphylaxis, especially if triggered by insect stings. A baseline tryptase >11.4 ng/mL warrants investigation for clonal mast cell disease.

6. **Omalizumab in practice**: The FDA approval of omalizumab for food allergy represents a paradigm shift. It does not eliminate the allergy but raises the threshold for reaction, providing a safety margin for accidental exposures. It can also facilitate safer OIT initiation.`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art anaphylaxis science encompasses the evolving understanding of molecular endotypes, biomarker-driven risk stratification, precision therapeutics including biologics and desensitization protocols, novel delivery systems for epinephrine, and population-level strategies for reducing anaphylaxis mortality.',
      explanation: `## Allergic Reaction Response: Professional-Level Review

### Molecular Endotypes of Anaphylaxis

Emerging research suggests anaphylaxis is not a single disease but a syndrome with distinct molecular endotypes:

**IgE-High/Mast Cell-Predominant:**
- Classic allergic anaphylaxis
- Elevated tryptase, histamine, PGD2
- Responds well to epinephrine and antihistamines
- Associated with atopy, specific IgE positivity

**PAF-Predominant:**
- Characterized by severe cardiovascular collapse
- Elevated PAF with low PAF-AH activity
- May be less responsive to antihistamines
- PAF receptor antagonists (rupatadine) as potential targeted therapy

**Complement-Mediated:**
- Non-IgE mechanism via C3a/C5a
- Associated with radiocontrast media, dialysis membranes, certain biologics
- Premedication with corticosteroids may be partially effective
- Complement inhibitors (eculizumab) as potential targeted therapy

**Mixed/Idiopathic:**
- Multiple pathways activated simultaneously
- No identifiable trigger in approximately 20% of anaphylaxis cases
- Some cases linked to occult mastocytosis or alpha-gal syndrome

### Novel Epinephrine Delivery Systems

The epinephrine auto-injector model, while life-saving, has significant limitations:
- Needle phobia reduces willingness to use
- Dosing is fixed (0.15 or 0.3 mg) despite wide patient weight ranges
- Requires injection technique
- Short shelf life, temperature sensitivity, high cost

**Emerging Alternatives:**
1. **Intranasal epinephrine (neffy)**: FDA-approved nasal spray delivering 2 mg epinephrine. Pharmacokinetic studies show comparable epinephrine exposure to IM injection, though with slightly different time-concentration profile. Eliminates needle barrier.
2. **Sublingual epinephrine (AQST-108)**: Rapidly dissolving sublingual film. Phase 3 trials demonstrate bioequivalence to IM epinephrine. Shelf-stable at room temperature.
3. **Epinephrine auto-inhaler**: Inhaled epinephrine delivery for both systemic and direct airway effects. In clinical development.
4. **Microneedle patches**: Painless transdermal delivery via dissolving microneedles. Preclinical and early clinical studies show promise.

### Precision Allergy Diagnostics

**Epitope Mapping:**
Beyond component-resolved diagnostics, epitope mapping identifies the specific amino acid sequences recognized by a patient's IgE:
- Linear epitopes (sequential amino acids): Associated with persistent, severe allergy
- Conformational epitopes (3D structure-dependent): Associated with cross-reactivity and milder reactions
- Microarray platforms (ISAC, ALEX) can screen IgE against >100 allergen components simultaneously

**Basophil Activation Test (BAT) — Advanced Applications:**
- Threshold sensitivity: BAT can determine the allergen dose that triggers basophil activation, correlating with the patient's clinical threshold
- Monitoring immunotherapy: Decreasing BAT reactivity during OIT predicts sustained unresponsiveness
- Drug allergy: Superior specificity to skin testing for some drug classes (NSAIDs, NMBAs)

### Biologics Beyond Omalizumab

**Dupilumab (Dupixent):**
- Anti-IL-4R-alpha monoclonal antibody blocking IL-4 and IL-13 signaling
- Approved for atopic dermatitis, asthma, eosinophilic esophagitis
- Under investigation as OIT adjunct (DAIT trial)
- May reduce atopic march progression in infants (STOP-AD trial, early data)

**Tezepelumab (Tezspire):**
- Anti-TSLP (thymic stromal lymphopoietin) monoclonal antibody
- Targets upstream epithelial alarmin signaling
- Approved for severe asthma
- Potential role in IgE-independent anaphylaxis pathways

**Anti-Siglec-8 (lirentelimab):**
- Targets Siglec-8 on mast cells and eosinophils
- Induces mast cell apoptosis and eosinophil depletion
- Potential for mast cell disorders and IgE-mediated disease
- Clinical trials in eosinophilic gastritis showed mixed results; ongoing investigation

### Alpha-Gal Syndrome

A unique form of delayed anaphylaxis:
- IgE directed against galactose-alpha-1,3-galactose (alpha-gal), a carbohydrate on mammalian meat
- Sensitization occurs through tick bites (Lone Star tick in the US)
- Reaction occurs 3-6 hours after eating mammalian meat (beef, pork, lamb) — the delay is due to the time required for alpha-gal to enter the bloodstream during fat digestion
- Rising incidence, particularly in southeastern US
- Diagnosis: Specific IgE to alpha-gal; total IgE often markedly elevated
- CDC estimates approximately 450,000 affected individuals in the US (many undiagnosed)

### Population-Level Prevention

**Early Introduction Paradigm (LEAP and EAT Trials):**
- LEAP trial: Early introduction of peanut (4-11 months) reduced peanut allergy by 81% in high-risk infants
- This led to a paradigm shift in infant feeding guidelines — early introduction of allergenic foods is now recommended rather than delayed introduction
- EAT trial: Early introduction of 6 allergenic foods showed benefit for egg and peanut allergy prevention

**Anaphylaxis Registries:**
- NORA (Network for Online Registration of Anaphylaxis): European registry
- National anaphylaxis data collection in Australia
- These registries provide epidemiological data on triggers, management gaps, and outcomes
- Identified key finding: Up to 50% of patients with anaphylaxis are discharged from the ED without epinephrine auto-injector prescriptions or allergist referral

**Stock Epinephrine Legislation:**
- All 50 US states now have laws allowing schools to stock undesignated epinephrine auto-injectors
- Many states extend to restaurants, summer camps, and other public venues
- Implementation varies widely; training and access remain barriers`,
      keyTerms: [
        { term: 'molecular endotype', definition: 'A distinct subtype of anaphylaxis defined by the predominant molecular pathway (IgE/mast cell, PAF, complement, or mixed), which may predict severity and guide targeted therapeutic approaches' },
        { term: 'intranasal epinephrine (neffy)', definition: 'An FDA-approved needle-free nasal spray delivering epinephrine for anaphylaxis treatment, eliminating the needle phobia barrier while achieving comparable pharmacokinetic exposure to intramuscular injection' },
        { term: 'alpha-gal syndrome', definition: 'A delayed IgE-mediated allergic reaction to the carbohydrate galactose-alpha-1,3-galactose found in mammalian meat, triggered by tick bite sensitization, presenting with anaphylaxis 3-6 hours after red meat consumption' },
        { term: 'epitope mapping', definition: 'The identification of specific amino acid sequences on an allergen protein recognized by a patient\'s IgE antibodies; linear epitopes predict severe persistent allergy while conformational epitopes predict milder cross-reactive responses' },
        { term: 'LEAP trial', definition: 'Learning Early About Peanut Allergy — the landmark RCT demonstrating that early introduction of peanut protein in high-risk infants reduced peanut allergy development by 81%, fundamentally changing infant feeding guidelines' },
        { term: 'TSLP', definition: 'Thymic Stromal Lymphopoietin — an epithelial alarmin cytokine that initiates and amplifies type 2 immune responses; targeted by tezepelumab for treatment of severe asthma and potentially other allergic conditions' },
      ],
      clinicalNotes: `Professional-level clinical considerations:

1. **Intranasal epinephrine adoption**: Neffy provides a viable alternative for needle-phobic patients and those who have difficulty with auto-injector mechanics. The slightly different pharmacokinetic profile (Tmax approximately 15-20 minutes vs. 8-10 minutes for IM) should be considered, though clinical efficacy appears comparable.

2. **Alpha-gal syndrome recognition**: Consider this diagnosis in patients with delayed anaphylaxis to red meat, particularly in tick-endemic areas. Standard food allergy testing panels may not include alpha-gal IgE. Direct ordering is required.

3. **Epinephrine prescribing gap**: Registries consistently show that 30-50% of anaphylaxis patients leave the ED without an epinephrine prescription or allergist referral. This represents a critical systems failure. ED protocols should mandate both before discharge.

4. **OIT risk-benefit**: Peanut OIT (Palforzia) achieves desensitization in approximately 67% but with significant side effects (GI symptoms, systemic reactions during dosing). Omalizumab pre-treatment may improve safety. Shared decision-making with families is essential.

5. **Mast cell disorder screening**: Baseline serum tryptase should be measured in all patients with idiopathic or hymenoptera-triggered anaphylaxis. Values above 11.4 ng/mL warrant referral for bone marrow evaluation for systemic mastocytosis or hereditary alpha-tryptasemia.

6. **Anaphylaxis education gap**: Studies show that fewer than 50% of patients prescribed auto-injectors can demonstrate correct technique. Hands-on training with trainer devices at every clinical encounter is more effective than verbal instruction alone.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-allergy-1',
      type: 'guideline',
      title: 'Anaphylaxis: A Practice Parameter Update — Joint Task Force on Practice Parameters',
      source: 'American Academy of Allergy, Asthma, and Immunology / American Heart Association',
      url: 'https://www.aaaai.org/conditions-treatments/allergies/anaphylaxis',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-allergy-2',
      type: 'guideline',
      title: 'First Aid for Severe Allergic Reactions',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/take-a-class/first-aid',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-allergy-3',
      type: 'guideline',
      title: 'Allergies and Anaphylaxis — Clinical Information',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/nceh/features/allergies/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'related',
      label: 'When to Call 911',
    },
    {
      targetId: 'topic-pediatric-first-aid',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Pediatric First Aid',
    },
  ],

  tags: {
    systems: ['immune', 'respiratory', 'cardiovascular'],
    topics: ['emergency-care', 'allergy', 'anaphylaxis', 'immunology'],
    keywords: ['anaphylaxis', 'epinephrine', 'EpiPen', 'allergy', 'hives', 'angioedema', 'food allergy'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
