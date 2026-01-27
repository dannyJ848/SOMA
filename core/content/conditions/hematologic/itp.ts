/**
 * Immune Thrombocytopenia (ITP) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const itp: EducationalContent = {
  id: 'condition-immune-thrombocytopenia',
  type: 'condition',
  name: 'Immune Thrombocytopenia',
  alternateNames: ['ITP', 'Idiopathic Thrombocytopenic Purpura', 'Immune Thrombocytopenic Purpura', 'Autoimmune Thrombocytopenia'],
  hpoId: 'HP:0011875',

  levels: {
    1: {
      level: 1,
      summary: 'Immune thrombocytopenia (ITP) is a condition where your immune system mistakenly destroys platelets, which are cells that help your blood clot.',
      explanation: `Platelets are small cells in your blood that help stop bleeding by forming clots. In ITP, your immune system attacks and destroys these platelets, making you more likely to bleed or bruise.

**Symptoms:**
- Easy bruising (purpura)
- Small red or purple spots on skin (petechiae)
- Bleeding gums
- Nosebleeds
- Heavy menstrual periods
- Blood in urine or stool (rare)

**What causes it:**
- Immune system mistake (autoimmune)
- Often no clear cause (idiopathic)
- Sometimes after viral infections
- Can occur with other autoimmune diseases
- Certain medications

**Who gets it:**
- Children (usually sudden onset after illness)
- Adults (more common in women)
- Can occur at any age

**Treatment:**
- Many children need no treatment (gets better on its own)
- Medications to suppress the immune system
- Medications to boost platelets
- In severe cases, spleen removal

**When to seek emergency care:**
- Severe headache
- Vision changes
- Confusion
- Severe bleeding that won't stop`,
      keyTerms: [
        { term: 'platelets', definition: 'Small blood cells that help form clots to stop bleeding' },
        { term: 'purpura', definition: 'Purple-colored bruises on the skin from bleeding underneath' },
        { term: 'petechiae', definition: 'Tiny red or purple spots on the skin from broken capillaries' },
      ],
      analogies: ['ITP is like friendly fire—your immune system attacks your own platelets by mistake, just like an army accidentally attacking its own troops.'],
      examples: ['A child who develops lots of bruising and purple spots on their legs after a viral illness may have ITP.'],
    },
    2: {
      level: 2,
      summary: 'ITP is an acquired autoimmune disorder characterized by isolated thrombocytopenia (platelet count <100,000) with normal peripheral smear aside from large platelets; treatment depends on platelet count and bleeding symptoms.',
      explanation: `## Definition

Isolated thrombocytopenia (platelet count <100,000/μL) caused by autoantibody-mediated platelet destruction, with normal hemoglobin and white blood cell count.

## Clinical Presentation

**Signs/Symptoms:**
- Petechiae (lower extremities common)
- Purpura, easy bruising
- Mucocutaneous bleeding (gums, nose)
- Menorrhagia
- Splenomegaly is ABSENT (distinguishes from other causes)

**Bleeding Risk by Platelet Count:**

| Platelet Count | Bleeding Risk |
|----------------|---------------|
| >50,000 | Normal |
| 20,000-50,000 | Mild bleeding with trauma |
| 10,000-20,000 | Spontaneous bruising |
| <10,000 | Risk of severe bleeding |

## Diagnosis

**Laboratory Findings:**
- Platelet count <100,000/μL
- Large platelets on smear
- Normal hemoglobin, WBC
- Normal peripheral smear otherwise

**Diagnostic Criteria:**
- Isolated thrombocytopenia
- Normal peripheral smear (except large platelets)
- No other identifiable cause
- No splenomegaly
- No drugs causing thrombocytopenia

**Tests to CONSIDER (to rule out other causes):**
- CBC with peripheral smear
- ANA, HIV, HCV testing
- Thyroid function tests
- Pregnancy test if applicable
- Bone marrow biopsy (rarely needed)

## Treatment: First-Line

**Corticosteroids (Adults):**
- Prednisone 1 mg/kg/day
- Or prednisolone 1 mg/kg/day
- Or dexamethasone 40 mg × 4 days

**Observation (Children):**
- Many children spontaneously remit
- No treatment if platelets >20,000 and minimal bleeding
- Monitor platelet count

**IVIG:**
- Rapid platelet increase
- Used for severe bleeding
- Expensive, short duration

## Treatment: Second-Line (for refractory cases)

**TPO-Receptor Agonists:**
- Romiplostim (weekly injection)
- Eltrombopag (daily oral)
- Lusutrombopag (oral)

**Rituximab:**
- Anti-CD20 monoclonal antibody
- Considered before splenectomy
- B-cell depletion

**Splenectomy:**
- Curative in ~70% of cases
- Considered if medical therapy fails
- Lifelong infection risk after

## Emergency Treatment

**For Severe Bleeding or Very Low Counts:**
- IVIG + corticosteroids
- Platelet transfusion (may be ineffective)
- Anti-fibrinolytics (tranexamic acid) for mucosal bleeding`,
      keyTerms: [
        { term: 'thrombocytopenia', definition: 'Low platelet count' },
        { term: 'IVIG', definition: 'Intravenous immunoglobulin; pooled antibodies that modulate immune system' },
        { term: 'TPO agonist', definition: 'Medication that stimulates platelet production by mimicking thrombopoietin' },
      ],
      clinicalNotes: 'Always examine the peripheral smear. Pseudothrombocytopenia (platelet clumping in EDTA tube) can mimic ITP. If platelet count is very low but no bleeding seen, consider repeating with citrate tube.',
    },
    3: {
      level: 3,
      summary: 'ITP pathogenesis involves antiplatelet autoantibody production (often against GPIIb/IIIa), Fc receptor-mediated platelet destruction by splenic macrophages, and impaired platelet production; management ranges from observation to splenectomy based on bleeding risk.',
      explanation: `## Pathophysiology

**Autoantibody Production:**
- Antiplatelet IgG autoantibodies
- Most common targets: GPIIb/IIIa, GPIb/IX
- Often polyclonal
- T-cell help required

**Platelet Destruction:**
- Fcγ receptor-mediated phagocytosis
- Primarily in spleen (80%), liver (20%)
- Macrophages recognize antibody-coated platelets
- Platelet survival: hours to days (vs 7-10 days normal)

**Impaired Production:**
- Autoantibodies target megakaryocytes
- TPO levels often inappropriately normal
- Platelet production inhibited

**T-Cell Role:**
- Cytotoxic T-cells directly lyse platelets
- Th1 polarization
- Cytokine dysregulation

## Diagnostic Approach

**Essential Evaluation:**

| Test | Purpose |
|------|---------|
| CBC with smear | Confirm isolated thrombocytopenia |
| ANA | Screen for SLE |
| HIV/HCV | Rule out secondary causes |
| Thyroid tests | Rule out thyroiditis |
| Blood type | Anti-A, Anti-B ITP antibodies |

**Smear Findings:**
- Large platelets (young platelets)
- No schistocytes (excludes TTP)
- No blast cells (excludes leukemia)

**Secondary ITP Causes:**
- SLE, antiphospholipid syndrome
- HIV, HCV, EBV, CMV
- Helicobacter pylori (especially in Japan)
- Medications (heparin, quinidine, sulfonamides)

**Diagnostic Criteria (ASH 2019):**
- Platelet count <100,000 × 10⁹/L
- Exclude other causes
- Not required: Bone marrow exam, antiplatelet antibody testing

## First-Line Treatment

**Prednisone:**
- 1 mg/kg/day (max 80 mg)
- Taper over 4-6 weeks if response
- Only 20-30% have sustained remission

**Dexamethasone (High-Dose):**
- 40 mg daily × 4 days
- Higher response rate than prednisone
- More durable responses
- May repeat monthly

**IVIG:**
- 1 g/kg × 1-2 doses
- Works in 1-3 days
- Short duration (weeks)
- Expensive, headaches common

**Combination:**
- Steroids + IVIG for severe bleeding
- Dexamethasone + IVIG evaluated in trials

## Second-Line Treatment

**TPO-Receptor Agonists:**

| Agent | Dose | Route | Notes |
|-------|------|-------|-------|
| Romiplostim | 1-10 mcg/kg | Weekly SC | Titrate to platelets 50k |
| Eltrombopag | 25-75 mg | Daily oral | Empty stomach, avoid Ca/Fe |
| Avatrombopag | 20-40 mg | Daily oral | Can take with food |

**Monitoring on TPO-RAs:**
- Liver function (eltrombopag)
- Cataract risk (eltrombopag)
- Thrombosis risk if platelets >450k

**Rituximab:**
- 375 mg/m2 weekly × 4
- Or 1 g × 2 doses (2 weeks apart)
- Response rate ~40%
- Median response: 2-4 weeks
- Duration: 1-2 years

## Surgical Options

**Splenectomy:**
- Indication: Failed medical therapy
- Response rate: 60-80%
- Durable remission in ~70%
- Laparoscopic approach preferred
- Overwhelming post-splenectomy infection (OPSI) risk

**Pre-Splenectomy:**
- Vaccinations REQUIRED: Pneumococcal, Meningococcal, HiB
- At least 2 weeks before surgery

## Treatment Algorithm

**By Platelet Count and Bleeding:**

| Platelets | Bleeding | Action |
|-----------|----------|--------|
| >30,000 | None/minimal | Observation |
| >30,000 | Significant | Treat |
| 10,000-30,000 | None | Consider treatment (patient factors) |
| <10,000 | Any | Usually treat |
| <20,000 | Headache/neuro | Emergency (ICH risk) |

**Bleeding Score (ITP-BAT):**
- Guides treatment intensity
- Includes: Skin, oral, epistaxis, etc.
- Higher score = more aggressive therapy`,
      keyTerms: [
        { term: 'GPIIb/IIIa', definition: 'Platelet surface glycoprotein; common target of autoantibodies in ITP' },
        { term: 'megakaryocyte', definition: 'Bone marrow cell that produces platelets; affected in ITP' },
        { term: 'OPSI', definition: 'Overwhelming post-splenectomy infection; life-threatening infection risk after spleen removal' },
        { term: 'TPO', definition: 'Thrombopoietin; hormone that stimulates platelet production' },
      ],
      clinicalNotes: 'Antiplatelet antibody testing is NOT recommended for diagnosis due to poor sensitivity and specificity. Bone marrow examination is unnecessary in typical ITP but consider if atypical features (abnormal WBC/RBC, lymphadenopathy, splenomegaly).',
    },
    4: {
      level: 4,
      summary: 'Advanced ITP management addresses refractory disease, bleeding risk stratification using ITP-BAT score, combination therapies, thrombopoietin mimetic selection, splenectomy timing, and special populations including pregnancy and chronic ITP.',
      explanation: `## Refractory ITP

**Definition:**
- Failed corticosteroids
- Failed at least one second-line therapy
- Platelets <30,000 with bleeding

**Approach:**
- Re-evaluate diagnosis (is it really ITP?)
- Review prior treatments and responses
- Consider combination therapy
- Assess bleeding risk vs treatment toxicity

**Combination Therapies:**
- TPO-RA + rituximab
- TPO-RA + mycophenolate
- Dexamethasone + rituximab upfront

## Bleeding Risk Stratification

**ITP-BLEED Score:**

| Parameter | Points |
|-----------|--------|
| Wet purpura | 2 |
| GI bleed | 2 |
| Epistaxis | 1 |
| Oral mucosal bleeding | 1 |
| Ecchymoses | 1 |

- Score ≥3: Higher bleeding risk, treat more aggressively

**Other Risk Factors:**
- Age >60 (higher ICH risk)
- History of significant bleeding
- Concurrent anticoagulation/antiplatelet use
- Hypertension (increases ICH risk)
- Non-adherent patients

## Thrombopoietin Receptor Agonist Selection

**Romiplostim:**
- Subcutaneous weekly
- No drug interactions (protein)
- No dietary restrictions
- May cause bone marrow reticulin

**Eltrombopag:**
- Oral daily
- Must take on empty stomach
- Interactions: Iron, calcium, polyphenols
- Monitor LFTs
- Cataract risk

**Avatrombopag:**
- Oral daily
- Can take with food
- Fewer drug interactions
- Newer, less data

**Response Predictors:**
- Younger age
- Higher baseline TPO
- Shorter ITP duration
- No prior splenectomy

## Rituximab Considerations

**Response:**
- Overall: 40% complete/partial response
- Median time to response: 4 weeks
- Duration: 1-2 years (median)
- Better in younger patients

**Toxicity:**
- Infusion reactions (first dose)
- HBV reactivation (screen!)
- PML (rare)
- Hypogammaglobulinemia

**When to Use:**
- Steroid-sparing
- Before splenectomy
- Pregnancy planning (splenectomy alternative)

## Splenectomy Decision

**Timing:**
- After failing 1-2 second-line therapies
- Consider earlier if:
  - Severe bleeding
  - Very low counts (<10k)
  - Quality of life severely affected

**Preoperative:**
- Vaccinations (Pneumococcal, Meningococcal, HiB)
- Platelet transfusion if needed
- IVIG to raise count

**Outcomes:**
- Immediate response: 80-90%
- Durable remission: ~70%
- Relapse: Accessory spleen, other causes

**Post-Splenectomy:**
- Lifelong penicillin (many centers)
- Daily antibiotic prophylaxis (varies)
- Emergency antibiotics education
- Vaccine boosters

## Special Populations

**Pregnancy:**
- Avoid TPO-RA (limited data)
- IVIG safe
- Corticosteroids (risk: gestational diabetes, hypertension)
- Avoid splenectomy in pregnancy
- Target platelets: >10k for delivery, >30k for epidural

**Elderly:**
- Higher bleeding risk
- More comorbidities
- TPO-RA preferred (avoid steroid complications)
- Lower threshold for treatment

**Hepatitis C:**
- Treat HCV first (DAAs)
- ITP often improves with HCV cure
- Avoid interferon (worsens ITP)
- TPO-RA if needed

**HIV-Associated ITP:**
- ART often improves counts
- IVIG effective
- Avoid splenectomy if possible

## Monitoring

**Response Criteria:**
- Complete response: Platelets ≥100k, no bleeding
- Response: Platelets ≥30k and >2x baseline, no bleeding
- No response: Platelets <30k or bleeding

**Follow-up:**
- CBC initially weekly
- Platelets <30k: More frequent
- Stable: Every 1-3 months

**TPO-RA Monitoring:**
- CBC weekly initially
- LFTs (eltrombopag)
- Avoid platelets >450k (thrombosis risk)`,
      keyTerms: [
        { term: 'ITP-BLEED score', definition: 'Validated bleeding assessment tool for ITP to guide treatment intensity' },
        { term: 'refractory ITP', definition: 'ITP that fails to respond to corticosteroids and at least one second-line therapy' },
        { term: 'bone marrow reticulin', definition: 'Fibrosis in bone marrow; potential complication of TPO-RA therapy' },
      ],
      clinicalNotes: 'Re-evaluate diagnosis if ITP is refractory. Consider MDS, inherited thrombocytopenia, or alternative diagnoses. Always screen for hepatitis B before rituximab due to risk of reactivation. In pregnancy, IVIG is the preferred second-line therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ITP management integrates bleeding score-guided treatment, novel inhibitors of FcγR and neonatal Fc receptor, combination therapies including upfront rituximab with TPO-RAs, personalized splenectomy timing, and emerging syk inhibitor and complement-targeted approaches.',
      explanation: `## Precision Medicine in ITP

**Bleeding Assessment Tools:**

**ITP-BAT (Bleeding Assessment Tool):**
- Validated bleeding score
- Skin, oral, nasal, GI, genitourinary, CNS domains
- Guides treatment intensity
- Predicts bleeding events

**KHOPC Score:**
- Age, comorbidities
- Helps identify elderly at high risk
- Treatment threshold adjustments

## Novel Therapeutic Targets

**Fcγ Receptor Blockade:**

**Rozanolixizumab:**
- Anti-FcγRIIB monoclonal antibody
- Prevents phagocytosis of antibody-coated platelets
- Subcutaneous administration
- Phase 3 data positive

**Efgartigimod:**
- Fc fragment engineering
- Binds FcRn, reducing IgG
- Subcutaneous, approved for myasthenia gravis
- Phase 3 in ITP ongoing

**Syk Inhibition:**

**Fostamatinib:**
- Oral Syk inhibitor
- Blocks FcγR signaling
- Approved for chronic ITP (2018)
- Response rate ~40%
- Diarrhea, hypertension side effects

**Bruton Tyrosine Kinase Inhibition:**

**Ibrutinib:**
- Case reports in CLL-associated ITP
- BTK involved in Fc signaling
- Off-label use

## Combination Strategies

**Upfront Multi-Agent:**
- Dexamethasone + rituximab
- Shows higher remission rates
- May prevent progression to chronic ITP
- Phase 3 trials ongoing

**Sequential TPO-RA + Rituximab:**
- Start TPO-RA for rapid count rise
- Add rituximab for sustained response
- Synergistic effect

**Triple Therapy (Refractory):**
- TPO-RA + rituximab + mycophenolate
- Consider in severe, refractory cases
- High toxicity, limited data

## FcRn Blockade

**Mechanism:**
- Binds neonatal Fc receptor
- Accelerates IgG catabolism
- Reduces pathogenic autoantibodies
- Lowers total IgG (infection risk)

**Agents:**
- Efgartigimod
- Rozanolixizumab
- Nipocalimab

**Advantages:**
- Subcutaneous administration
- Rapid onset (weeks)
- Potential for sustained remission

## Complement Inhibition

**Rationale:**
- Complement may enhance platelet destruction
- C3 opsonization promotes phagocytosis

**Agents:**
- Sutimlimab (anti-C1s)
- Pegcetacoplan (C3 inhibitor)
- Early data in refractory ITP

## Biomarker-Guided Therapy

**Antiplatelet Antibody Testing:**
- Historically poor sensitivity
- New assays (MAIPA) more specific
- May predict response to certain therapies
- Not routinely used

**Thrombopoietin Levels:**
- Inappropriately normal in ITP
- Higher baseline TPO predicts TPO-RA response
- Not clinically used yet

**FcγR Polymorphisms:**
- FCGR2A, FCGR3A variants
- May affect rituximab response
- Research use only

## Treatment-Free Remission

**Goal:**
- Sustained remission off all therapy
- Possible in 20-30% with modern approaches

**Predictors:**
- Younger age
- Shorter duration
- No prior splenectomy
- Good response to initial therapy

**Achieving TFR:**
- Combination therapy upfront
- Taper therapy gradually
- Long-term TPO-RA use then taper

## Quality of Life

**ITP-SPL Score:**
- ITP-specific quality of life
- Physical, emotional, social domains
- Improves with successful treatment
- Guides clinical decisions

**Fatigue in ITP:**
- Common even with adequate platelets
- Multifactorial (disease + treatment)
- Improves with TPO-RAs
- Important outcome measure

## Special Situations

**Vaccine-Associated ITP:**
- MMR, COVID-19 vaccines
- Usually self-limited
- Typical ITP treatments
- Benefits of vaccination outweigh risks

**Post-Transplant ITP:**
- Stem cell transplant
- Difficult to treat
- Consider DLI, rituximab

**Multicentric Castleman Disease:**
- IL-6 driven
- Tocilizumab (anti-IL-6) may help ITP

## Future Directions

**B-Cell Targeted Beyond Rituximab:**
- Obinutuzumab
- Ofatumumab
- Investigational agents

**Tolerance Induction:**
- Peptide-based immunotherapy
- Treg expansion
- Curative potential

**Gene Therapy:**
- Theoretical
- Modifying immune response
- Distant future

**Artificial Platelets:**
- Platelet substitutes
- May reduce transfusion needs
- Clinical trials ongoing`,
      keyTerms: [
        { term: 'ITP-BAT', definition: 'ITP Bleeding Assessment Tool; validated instrument to quantify bleeding severity in ITP' },
        { term: 'FcγR', definition: 'Fc gamma receptor; receptor on macrophages that binds antibody-coated platelets' },
        { term: 'FcRn', definition: 'Neonatal Fc receptor; recycling receptor for IgG; blockade reduces IgG levels' },
        { term: 'Syk', definition: 'Spleen tyrosine kinase; involved in FcγR signaling in phagocytes' },
        { term: 'treatment-free remission', definition: 'Sustained normal platelet count without ongoing therapy' },
      ],
      clinicalNotes: 'Fostamatinib is the first Syk inhibitor approved for chronic ITP, offering an oral option for patients who fail multiple therapies. FcRn inhibitors like efgartigimod represent a novel approach that reduces pathogenic IgG levels, showing promise in refractory ITP. Combination therapy with dexamethasone plus rituximab upfront may achieve higher remission rates and prevent chronic disease.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-itp-2019', type: 'article', title: 'ASH Guidelines for Immune Thrombocytopenia', source: 'Blood Advances' },
    { id: 'nejm-itp', type: 'article', title: 'Immune Thrombocytopenia', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'condition-hemolytic-anemia', targetType: 'condition', relationship: 'related', label: 'Hemolytic Anemia' },
    { targetId: 'condition-hemophilia', targetType: 'condition', relationship: 'related', label: 'Hemophilia' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'immunology'], keywords: ['ITP', 'thrombocytopenia', 'platelets', 'TPO agonist', 'rituximab', 'splenectomy'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default itp;
