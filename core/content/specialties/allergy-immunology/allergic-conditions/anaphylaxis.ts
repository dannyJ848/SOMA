/**
 * Anaphylaxis - Comprehensive Educational Content
 *
 * Severe, potentially life-threatening systemic hypersensitivity reaction.
 */

import type { EducationalContent } from '../../../types';

export const anaphylaxis: EducationalContent = {
  id: 'condition-anaphylaxis',
  type: 'condition',
  name: 'Anaphylaxis',
  alternateNames: ['Severe Allergic Reaction', 'Anaphylactic Shock', 'Systemic Hypersensitivity'],

  levels: {
    1: {
      level: 1,
      summary: 'Anaphylaxis is a severe, life-threatening allergic reaction that happens quickly and needs immediate treatment.',
      explanation: `Anaphylaxis is the most serious type of allergic reaction. It can happen within seconds or minutes of exposure to something you're allergic to.

**Common Triggers:**
- Foods (peanuts, tree nuts, shellfish, eggs, milk)
- Insect stings (bees, wasps, hornets)
- Medications (antibiotics, aspirin)
- Latex

**Warning Signs:**
- Trouble breathing or swallowing
- Swelling of lips, tongue, or throat
- Hives or widespread rash
- Dizziness or fainting
- Stomach pain, vomiting, or diarrhea

**Emergency Treatment:**
- Use an epinephrine auto-injector (EpiPen) immediately
- Call 911 right away
- Lie down with legs raised unless having trouble breathing
- Do not stand up or walk

**Prevention:**
- Avoid known triggers
- Carry epinephrine at all times if prescribed
- Wear medical alert jewelry
- Have an emergency action plan`,
      keyTerms: [
        { term: 'epinephrine', definition: 'The medicine used to treat anaphylaxis; also called adrenaline' },
        { term: 'auto-injector', definition: 'A device that gives a pre-measured dose of epinephrine' },
        { term: 'trigger', definition: 'The substance that causes an allergic reaction' },
      ],
      analogies: [
        'Anaphylaxis is like a fire alarm going off in your whole body at once - every system reacts urgently.',
      ],
      examples: [
        'A child eats a cookie containing peanuts and within minutes develops throat swelling and trouble breathing',
        'Someone gets stung by a bee and quickly breaks out in hives all over and feels faint',
      ],
    },
    2: {
      level: 2,
      summary: 'Anaphylaxis is an acute, potentially fatal systemic hypersensitivity reaction requiring immediate recognition and treatment with epinephrine.',
      explanation: `Anaphylaxis is a severe, potentially life-threatening systemic hypersensitivity reaction characterized by rapid onset and involving multiple organ systems.

**Diagnostic Criteria (2 or more of the following):**
1. Skin/mucosal involvement (hives, itch, flush, swollen lips/tongue)
2. Respiratory compromise (dyspnea, wheeze, stridor, hypoxia)
3. Hypotension or associated symptoms (syncope, incontinence)
4. Persistent gastrointestinal symptoms (crampy abdominal pain, vomiting)

**Pathophysiology:**
- IgE-mediated mast cell and basophil degranulation
- Release of histamine, tryptase, and other mediators
- Increased vascular permeability and vasodilation
- Smooth muscle contraction

**Treatment Protocol:**
1. IM epinephrine 0.3-0.5 mg (0.3-0.5 mL of 1:1000) in mid-outer thigh
2. May repeat every 5-15 minutes
3. Position patient supine with legs elevated
4. High-flow oxygen
5. IV fluid bolus for hypotension
6. Adjunctive: antihistamines, corticosteroids (do not delay epinephrine)

**Biphasic Reactions:**
- Symptoms may recur 1-72 hours after initial reaction
- Observation for at least 4-6 hours recommended`,
      keyTerms: [
        { term: 'tryptase', definition: 'Enzyme released from mast cells; elevated serum level confirms anaphylaxis' },
        { term: 'biphasic reaction', definition: 'Recurrence of symptoms after initial resolution without re-exposure' },
      ],
      analogies: [
        'The cascade of mediator release is like dominoes falling - once started, it affects multiple systems rapidly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anaphylaxis is an acute, systemic, IgE-mediated reaction causing mast cell degranulation with multi-organ involvement; epinephrine is the first-line treatment.',
      explanation: `Anaphylaxis represents the most severe form of immediate hypersensitivity, typically IgE-mediated, resulting in massive degranulation of mast cells and basophils.

**Immunologic Mechanisms:**
- Sensitization phase: Antigen exposure leads to IgE production
- Mast cells and basophils bind IgE via FcεRI receptors
- Re-exposure causes cross-linking of surface IgE
- Signal transduction triggers degranulation
- Release of preformed (histamine, tryptase) and newly formed (leukotrienes, prostaglandins) mediators

**Clinical Recognition:**
Acute onset (minutes to hours) with involvement of:
- Skin: Urticaria, angioedema, flushing (80-90%)
- Respiratory: Dyspnea, wheeze, stridor, hypoxia (70%)
- Cardiovascular: Hypotension, arrhythmia, cardiac arrest (45%)
- GI: Nausea, vomiting, diarrhea, cramping (45%)

**Treatment Algorithm:**
1. Remove trigger if possible
2. IM epinephrine 0.3-0.5 mg (adults) or 0.01 mg/kg (children) in vastus lateralis
3. May repeat q5-15 min x 2-3 doses
4. Positioning: Supine with elevated legs (unless respiratory distress)
5. Supplemental oxygen
6. IV NS bolus 1-2 L for hypotension
7. Adjunctive medications (do NOT delay epinephrine):
   - Diphenhydramine 25-50 mg IV
   - Methylprednisolone 125 mg IV
   - Albuterol nebulized for bronchospasm

**Refractory Anaphylaxis:**
- Epinephrine infusion: 0.1-0.5 mcg/kg/min
- Glucagon 1-2 mg IV for patients on beta-blockers`,
      keyTerms: [
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells and basophils' },
        { term: 'tryptase', definition: 'Mast cell protease; peaks 1-2 hours post-reaction' },
        { term: 'summation anaphylaxis', definition: 'Anaphylaxis from combined factors (exercise + food)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Anaphylaxis involves rapid IgE-FcεRI crosslinking on mast cells/basophils causing systemic mediator release; management requires prompt epinephrine and monitoring for biphasic responses.',
      explanation: `Anaphylaxis is a systemic, rapid-onset hypersensitivity reaction mediated primarily through IgE-dependent mechanisms, though non-IgE pathways (direct mast cell activation, immune complexes) also contribute.

**Molecular Mechanisms:**
- FcεRI-mediated: Antigen cross-links receptor-bound IgE → Lyn/Syk activation → LAT/SLP-76 signaling → Calcium influx → Degranulation
- Mediator profiles: Preformed (histamine, tryptase, chymase, heparin) vs. newly synthesized (PGD2, LTC4, PAF)
- PAF (platelet-activating factor): Major contributor to cardiovascular collapse

**Diagnostic Framework:**
NIAID/FAAN criteria - any ONE of:
1. Acute onset with skin/mucosa PLUS respiratory compromise or hypotension
2. TWO OR MORE of: skin, respiratory, cardiovascular, GI after likely allergen
3. Hypotension after known allergen exposure

**Management Protocol:**
1. Epinephrine IM (vastus lateralis preferred) - time to administration is critical
   - Adults: 0.3-0.5 mg of 1:1000
   - Children: 0.01 mg/kg (max 0.3 mg)
2. Beta-blocker patients may require glucagon (1-2 mg IV)
3. Refractory: Epinephrine infusion or vasopressin
4. Biphasic monitoring: 4-6 hours minimum; high-risk 24 hours

**Discharge Planning:**
- Epinephrine auto-injector prescription (2 doses)
- Allergist referral for identification of trigger
- Immunotherapy consideration for insect venom
- Written emergency action plan`,
      keyTerms: [
        { term: 'PAF', definition: 'Platelet-activating factor; key mediator of cardiovascular collapse in anaphylaxis' },
        { term: 'PAF-AH', definition: 'PAF acetylhydrolase; deficiency associated with severe reactions' },
      ],
    },
    5: {
      level: 5,
      summary: 'Anaphylaxis represents acute systemic mast cell activation via FcεRI-dependent or independent pathways; mortality correlates with epinephrine delay; emergent management prioritizes airway, IV access, and serial epinephrine.',
      explanation: `Anaphylaxis is a clinical syndrome of rapid, multi-organ hypersensitivity, with mortality primarily from cardiovascular collapse and airway obstruction.

**Immunopathophysiology:**
- Classical: Polyvalent antigen cross-links IgE bound to FcεRIα on mast cells → Lyn kinase phosphorylation → ITAM signaling → Syk recruitment → PLCγ activation → IP3/DAG → Ca²⁺ mobilization → SNARE-mediated granule exocytosis
- Alternative pathways: C3a/C5a (complement), MRGPRX2 (drugs like vancomycin, neuromuscular blockers), IgG (aggregated antigens)
- Key mediators: Histamine (H1/H2), PAF, tryptase (β-tryptase indicative of mast cell vs. basophil), chymase, LTC4/D4/E4, PGD2

**Hemodynamic Alterations:**
- Massive vasodilation and capillary leak → distributive shock
- Decreased preload from venous pooling
- Potential for myocardial depression and arrhythmias
- Relative adrenal insufficiency in refractory cases

**Clinical Decision-Making:**
- Serum tryptase: Peak 1-2h; compare to baseline (≥1.2 × baseline + 2 ng/mL suggests anaphylaxis)
- Serial epinephrine: Up to 20% require >1 dose
- Refractory anaphylaxis: IV epinephrine infusion (0.1-1 mcg/kg/min titrated) ± vasopressin (2 U bolus)
- Extracorporeal membrane oxygenation (ECMO) in cardiopulmonary arrest

**Risk Stratification for Biphasic Reaction:**
- Severe initial reaction, delayed epinephrine, ≥2 epinephrine doses
- Observation 6-24 hours based on risk profile

**Special Populations:**
- Beta-blockade: Glucagon 1-2 mg IV, may require high-dose
- ACE inhibitors: Increased risk due to bradykinin accumulation
- Mastocytosis: Higher epinephrine requirements, consider omalizumab prophylaxis`,
      keyTerms: [
        { term: 'MRGPRX2', definition: 'Mas-related G-protein coupled receptor X2; mediates non-IgE drug reactions' },
        { term: 'clonal mast cell disorder', definition: 'Underlying mastocytosis increases anaphylaxis risk and severity' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['allergy', 'anaphylaxis', 'emergency'],
    keywords: ['anaphylaxis', 'epinephrine', 'allergic reaction', 'hypersensitivity'],
    clinicalRelevance: 'critical',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default anaphylaxis;
