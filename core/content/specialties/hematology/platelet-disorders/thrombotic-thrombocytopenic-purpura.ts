/**
 * Thrombotic Thrombocytopenic Purpura - Comprehensive Educational Content
 *
 * A life-threatening microangiopathic hemolytic anemia caused by
 * severe ADAMTS13 deficiency.
 */

import { EducationalContent } from '../../../types';

export const thromboticThrombocytopenicPurpura: EducationalContent = {
  id: 'condition-thrombotic-thrombocytopenic-purpura',
  type: 'condition',
  name: 'Thrombotic Thrombocytopenic Purpura',
  alternateNames: ['TTP', 'Moschcowitz syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'TTP is a rare but life-threatening condition where tiny blood clots form throughout the body, using up platelets and damaging red blood cells.',
      explanation: `TTP is a serious blood disorder that needs emergency treatment.

**What Happens:**
- Tiny blood clots form in small blood vessels throughout the body
- These clots use up platelets (causing low counts)
- Red blood cells break apart as they squeeze past clots

**Main Signs:**
- Low platelet count (easy bleeding, bruising)
- Anemia (tiredness, pale skin)
- Fever
- Confusion or other brain problems
- Kidney problems

**Why It Happens:**
- A protein called ADAMTS13 is missing or blocked
- This protein normally prevents blood clots from forming in small vessels

**Treatment:**
- Emergency plasma exchange (filters blood and adds healthy plasma)
- Medicines to suppress the immune system
- Without treatment, TTP is often fatal
- With treatment, most people survive`,
      keyTerms: [
        { term: 'plasma exchange', definition: 'A treatment that removes and replaces the liquid part of blood' },
        { term: 'ADAMTS13', definition: 'A protein that prevents abnormal blood clotting in small vessels' },
        { term: 'microangiopathy', definition: 'Disease of the smallest blood vessels' },
      ],
      analogies: [
        'ADAMTS13 is like a pair of scissors that cuts blood clots down to size. Without these scissors, clots grow too big and clog the smallest blood vessels.',
      ],
      examples: [
        'A 35-year-old woman comes to the ER confused with a headache. Blood tests show very low platelets, anemia, and broken red blood cells. TTP is diagnosed and she is started on plasma exchange immediately.',
      ],
    },
    2: {
      level: 2,
      summary: 'TTP is defined by severe ADAMTS13 deficiency (<10%) causing accumulation of ultra-large VWF multimers, microvascular thrombosis, and the classic pentad of findings.',
      explanation: `TTP is a thrombotic microangiopathy (TMA) distinguished by ADAMTS13 deficiency.

**Pathophysiology:**
- ADAMTS13 cleaves ultra-large VWF multimers
- Deficiency allows UL-VWF to accumulate
- UL-VWF causes spontaneous platelet adhesion
- Microvascular platelet-rich thrombi form

**Types:**
- Acquired (immune): Autoantibodies against ADAMTS13 (95%)
- Hereditary (congenital): ADAMTS13 gene mutations (5%)

**Classic Pentad:**
1. Microangiopathic hemolytic anemia (MAHA)
2. Thrombocytopenia
3. Neurologic symptoms
4. Renal dysfunction
5. Fever

(Complete pentad rare; thrombocytopenia + MAHA sufficient to suspect)

**Diagnosis:**
- Schistocytes on blood smear
- Elevated LDH, indirect bilirubin
- Low haptoglobin
- Negative direct Coombs
- ADAMTS13 activity <10%

**Differential:**
- HUS (E. coli O157:H7, complement-mediated)
- DIC
- HELLP syndrome
- Malignant hypertension
- Drug-induced TMA

**Treatment:**
- Plasma exchange (PEX) - urgent
- Corticosteroids
- Rituximab
- Caplacizumab (anti-VWF nanobody)
- Do NOT transfuse platelets (fuel the fire)`,
      keyTerms: [
        { term: 'ADAMTS13', definition: 'A disintegrin and metalloprotease with thrombospondin type 1 motif, member 13; VWF-cleaving protease' },
        { term: 'ultra-large VWF', definition: 'Uncleaved VWF multimers that spontaneously bind and aggregate platelets' },
        { term: 'schistocytes', definition: 'Fragmented red blood cells; hallmark of microangiopathic hemolytic anemia' },
        { term: 'caplacizumab', definition: 'Anti-VWF nanobody that blocks platelet-VWF interaction' },
      ],
      analogies: [
        'Ultra-large VWF is like super-sticky tape that grabs platelets even without an injury. ADAMTS13 normally cuts this tape into smaller, less sticky pieces.',
      ],
    },
    3: {
      level: 3,
      summary: 'TTP requires rapid recognition and initiation of plasma exchange, with ADAMTS13 activity confirming diagnosis and guiding management including rituximab and caplacizumab.',
      explanation: `## Overview

TTP is a hematologic emergency with high mortality (~90%) if untreated, reduced to <20% with plasma exchange.

## Epidemiology
- Incidence: 3-4/million/year
- Peak age: 30-50 years
- Female predominance
- Higher incidence in Black patients

## Pathophysiology

**ADAMTS13 Function:**
- Cleaves VWF at A2 domain
- Prevents UL-VWF accumulation
- Released from endothelium under shear stress

**Acquired TTP:**
- IgG autoantibodies against ADAMTS13
- Inhibit activity and/or increase clearance
- Triggers: Infection, pregnancy, autoimmune disease, drugs

**Congenital TTP (Upshaw-Schulman Syndrome):**
- Biallelic ADAMTS13 mutations
- Presents in childhood or pregnancy
- Recurrent episodes

## Diagnosis

**Laboratory:**
| Finding | Result |
|---------|--------|
| Platelets | Severely low (<30,000 typical) |
| Hemoglobin | Low |
| LDH | Very elevated |
| Haptoglobin | Undetectable |
| Bilirubin | Indirect elevated |
| Coombs | Negative |
| Schistocytes | Present (>1%) |
| Creatinine | Mild elevation (severe = atypical) |
| ADAMTS13 | <10% |

**PLASMIC Score (Pretest Probability):**
- Platelet count <30K
- Combined hemolysis variable
- No active cancer
- No transplant
- MCV <90 fL
- INR <1.5
- Creatinine <2 mg/dL

Score ≥5: High probability for ADAMTS13 <10%

## Treatment

**Plasma Exchange:**
- Start immediately if TTP suspected
- Do NOT wait for ADAMTS13 result
- Daily until platelet normalization
- Continue until remission

**Corticosteroids:**
- Methylprednisolone 1g/day x 3 or prednisone 1mg/kg
- Reduce antibody production

**Rituximab:**
- CD20 depletion
- Reduces relapse rate
- Consider early (frontline) use

**Caplacizumab:**
- Anti-VWF A1 domain nanobody
- Blocks VWF-platelet interaction
- Faster platelet normalization
- Reduced exacerbations and deaths
- Continue 30 days after PEX stops

**Platelets:**
- Generally contraindicated
- May worsen microvascular thrombosis
- Give only if life-threatening bleeding

## Monitoring and Outcomes

**Response:**
- Platelet recovery (≥150,000 x 2 days)
- Normalize LDH
- ADAMTS13 activity >20% off PEX

**Relapse Risk:**
- 30-50% without rituximab
- Lower with rituximab
- Monitor ADAMTS13 activity after remission`,
      keyTerms: [
        { term: 'PLASMIC score', definition: 'Clinical prediction score for severe ADAMTS13 deficiency' },
        { term: 'Upshaw-Schulman syndrome', definition: 'Hereditary TTP from congenital ADAMTS13 deficiency' },
        { term: 'exacerbation', definition: 'Recurrence within 30 days of remission (vs relapse after 30 days)' },
        { term: 'nanobody', definition: 'Small single-domain antibody fragment; caplacizumab is an anti-VWF nanobody' },
      ],
      clinicalNotes: 'Start PEX based on clinical suspicion - do not wait for ADAMTS13. PLASMIC score helps but clinical judgment is key. Caplacizumab accelerates response but increases bleeding risk.',
    },
    4: {
      level: 4,
      summary: 'TTP management integrates early plasma exchange, frontline rituximab, caplacizumab, and ADAMTS13 monitoring for remission and relapse prevention.',
      explanation: `## Pathobiology Details

**VWF-ADAMTS13 Interaction:**
- VWF A2 domain exposes cleavage site under shear
- ADAMTS13 binds spacer, cysteine-rich, and D4-CK domains
- Autoantibodies often target spacer domain
- Epitope mapping may predict severity

**Endothelial Activation:**
- Inflammation triggers VWF release
- UL-VWF strings anchor to endothelium
- Platelets "string" along VWF in microvasculature
- Creates platelet-rich, fibrin-poor thrombi

## Risk Stratification

**Factors Predicting Severity:**
- Cardiac troponin elevation
- Severe neurologic involvement
- Lactate elevation
- Very low ADAMTS13 (<5%)
- High anti-ADAMTS13 antibody titer

**French TTP Score:**
- Brain involvement
- LDH level
- Age
- Predicts mortality

## Treatment Evolution

**Standard Approach:**
1. PEX (1-1.5 plasma volumes daily)
2. Corticosteroids
3. Rituximab (375mg/m2 weekly x 4)
4. Caplacizumab (10mg SQ daily)

**Caplacizumab Details:**
- Loading: 11mg IV before first PEX
- Maintenance: 10mg SQ daily
- Continue 30 days after last PEX
- Extends treatment-free survival
- Bleeding risk (mucocutaneous common)

**Refractory TTP:**
- Twice-daily PEX
- Increase rituximab
- Immunosuppression escalation (cyclophosphamide, bortezomib)
- Consider splenectomy (rarely)

## ADAMTS13 Monitoring

**Utility:**
| Timing | Action |
|--------|--------|
| Diagnosis | <10% confirms TTP |
| During PEX | Rise = response |
| Remission | Monitor for early relapse |
| Follow-up | Drop <20% may herald relapse |

**Antibody Testing:**
- Inhibitor assay (Bethesda-like)
- Anti-ADAMTS13 IgG
- Guides duration of immunosuppression

## Relapse Prevention

**Risk Factors:**
- ADAMTS13 <10% at remission
- Persistent anti-ADAMTS13 antibodies
- Prior relapse

**Strategies:**
- Preemptive rituximab if ADAMTS13 declining
- Close monitoring first year
- Patient education on symptoms

## Pregnancy and TTP

**Challenges:**
- ADAMTS13 naturally declines in pregnancy
- Triggers acquired TTP
- Must differentiate from preeclampsia/HELLP

**Management:**
- PEX safe in pregnancy
- Rituximab: Avoid 3rd trimester
- Caplacizumab: Limited data
- High-risk pregnancies: Prophylactic PEX`,
      keyTerms: [
        { term: 'exacerbation vs relapse', definition: 'Exacerbation <30 days, relapse >30 days from remission' },
        { term: 'French TTP score', definition: 'Mortality prediction model using brain involvement, LDH, age' },
        { term: 'spacer domain', definition: 'ADAMTS13 region commonly targeted by autoantibodies' },
        { term: 'refractory TTP', definition: 'Persistent thrombocytopenia despite 5-7 days of PEX' },
      ],
      clinicalNotes: 'ADAMTS13 monitoring post-remission is crucial. Drop <20% should prompt consideration of preemptive rituximab even without clinical relapse.',
    },
    5: {
      level: 5,
      summary: 'Contemporary TTP management integrates ADAMTS13-based diagnosis and monitoring, triple therapy (PEX + steroids + caplacizumab + rituximab), and relapse prevention strategies.',
      explanation: `## Precision Diagnostics

**ADAMTS13 Assays:**
- FRETS-VWF73 (activity)
- Chromogenic assay
- Anti-ADAMTS13 antibody (ELISA, inhibitor assay)
- Genetic testing for congenital

**Prognostic Biomarkers:**
- Troponin (cardiac involvement)
- Brain natriuretic peptide
- Cytokine profiles (IL-6, TNF)
- VWF:Ag/ADAMTS13 ratio

## Treatment Optimization

**TITAN Trial (Caplacizumab):**
- Faster platelet normalization
- 74% reduction in TTP-related death/recurrence/major thrombotic event
- 38% reduction in refractoriness
- Standard of care addition

**Frontline Rituximab:**
- Reduces relapse from ~50% to ~10%
- Earlier rituximab = faster ADAMTS13 recovery
- Some advocate for upfront in all iTTP

**Emerging Therapies:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Recombinant ADAMTS13 | Replace deficient enzyme | Phase 3 (congenital) |
| Anti-CD20 alternatives | Obinutuzumab, ofatumumab | Case reports |
| BTK inhibitors | Reduce B-cell activity | Investigational |
| Complement inhibitors | Block alternative pathway | Investigational |

## Recombinant ADAMTS13

**For Congenital TTP:**
- Currently prophylactic plasma infusions
- BAX930/TAK-755: Recombinant ADAMTS13
- Phase 3 trials ongoing
- Would replace plasma dependency

**For Acquired TTP:**
- May have role in acute management
- Antibodies may neutralize; short-lived effect

## Differential Diagnosis: TMA Spectrum

| Feature | TTP | HUS | aHUS | DIC | Drug-TMA |
|---------|-----|-----|------|-----|----------|
| ADAMTS13 | <10% | Normal | Normal | Normal | Variable |
| Renal | Mild | Severe | Severe | Variable | Variable |
| Diarrhea | No | Yes (STEC) | No | No | No |
| Treatment | PEX | Supportive | Eculizumab | Underlying | Stop drug |

## Long-Term Management

**Surveillance:**
- ADAMTS13 every 1-3 months first year
- Antibody levels
- Clinical vigilance

**Preemptive Treatment:**
- ADAMTS13 <20%: Consider rituximab
- Prevents clinical relapse
- Cost-effective approach

**Congenital TTP:**
- Prophylactic plasma every 2-4 weeks
- Adjust based on activity and events
- Future: Recombinant ADAMTS13

## Outcomes

**Survival:**
- With treatment: >90% survival
- Without: <10% survival

**Long-Term Sequelae:**
- Cognitive dysfunction
- Depression
- Fatigue
- Stroke/neurologic deficits
- Hypertension
- Chronic kidney disease

**Quality of Life:**
- Significant impact even in remission
- Anxiety about relapse
- Comprehensive follow-up needed`,
      keyTerms: [
        { term: 'TITAN trial', definition: 'Randomized trial establishing caplacizumab benefit in TTP' },
        { term: 'recombinant ADAMTS13', definition: 'Enzyme replacement therapy under development for TTP' },
        { term: 'aHUS', definition: 'Atypical HUS; complement-mediated TMA treated with eculizumab' },
        { term: 'STEC-HUS', definition: 'Shiga toxin-producing E. coli HUS; supportive treatment only' },
      ],
      clinicalNotes: `**Board Pearls:**
- TTP = MAHA + thrombocytopenia + ADAMTS13 <10%
- Schistocytes on smear = MAHA (with LDH up, haptoglobin down, Coombs negative)
- Do NOT wait for ADAMTS13 to start PEX
- Do NOT transfuse platelets (unless life-threatening bleeding)
- PLASMIC score predicts ADAMTS13 <10%
- Caplacizumab speeds response but watch for bleeding
- Rituximab reduces relapse from 50% to 10%
- Renal failure severe = think HUS, not TTP
- Congenital TTP: Triggers often pregnancy, infection`,
    },
  },

  media: [
    {
      id: 'ttp-schistocytes',
      type: 'histology',
      filename: 'ttp-schistocytes.jpg',
      title: 'Schistocytes in TTP',
      description: 'Peripheral smear showing fragmented RBCs (schistocytes)',
    },
  ],

  citations: [
    {
      id: 'scully-2019',
      type: 'article',
      title: 'Caplacizumab Treatment for Acquired TTP',
      authors: ['Scully M', 'Cataland SR', 'Peyvandi F', 'et al'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1806311',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hus', targetType: 'condition', relationship: 'related', label: 'Hemolytic Uremic Syndrome' },
    { targetId: 'condition-dic', targetType: 'condition', relationship: 'related', label: 'DIC' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['thrombotic microangiopathy', 'hematology emergency', 'hematology'],
    keywords: ['TTP', 'ADAMTS13', 'schistocytes', 'plasma exchange', 'caplacizumab'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default thromboticThrombocytopenicPurpura;
