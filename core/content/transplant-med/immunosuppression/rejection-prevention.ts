/**
 * Rejection Prevention
 *
 * Strategies and protocols for preventing organ rejection including
 * risk assessment, induction protocols, and monitoring approaches.
 */

import { EducationalContent } from '../../types';

export const REJECTION_PREVENTION: EducationalContent = {
  id: 'transplant-rejection-prevention',
  type: 'concept',
  name: 'Rejection Prevention',
  alternateNames: ['Anti-rejection strategies', 'Preventing transplant rejection'],

  levels: {
    1: {
      level: 1,
      summary: 'Preventing organ rejection requires matching the organ well, using anti-rejection medications, and monitoring for early signs of problems.',
      explanation: `**What Is Rejection?**

Rejection happens when your immune system recognizes a transplanted organ as "foreign" and attacks it. Without treatment, rejection can damage or destroy your new organ.

**How Doctors Prevent Rejection:**

1. **Matching the Organ**
   - Blood type matching (A, B, AB, O)
   - Tissue type matching (HLA)
   - Better matching = lower rejection risk

2. **Anti-Rejection Medications**
   - Started at the time of transplant
   - Usually multiple drugs together
   - Must be taken for life
   - Regular blood tests to check levels

3. **Close Monitoring**
   - Regular clinic visits
   - Blood tests to check organ function
   - Biopsies if rejection is suspected

**Types of Rejection:**

1. **Hyperacute** (rare now)
   - Happens within minutes to hours
   - Due to pre-existing antibodies
   - Prevented by crossmatching

2. **Acute Rejection**
   - Happens within weeks to months
   - Most common type
   - Usually treatable if caught early

3. **Chronic Rejection**
   - Happens over months to years
   - Gradual damage to the organ
   - Harder to treat

**Warning Signs of Rejection:**

Different organs have different signs:
- Kidney: Less urine, swelling, weight gain
- Heart: Tiredness, shortness of breath
- Liver: Jaundice, fatigue, dark urine
- Always call your doctor if something feels wrong!`,
      keyTerms: [
        { term: 'crossmatch', definition: 'A test to see if your blood reacts badly with the donor organ' },
        { term: 'HLA matching', definition: 'Comparing tissue types between donor and recipient' },
        { term: 'biopsy', definition: 'Taking a small piece of the organ to check for rejection' },
      ],
      analogies: [
        'HLA matching is like making sure a puzzle piece fits - better matching means less conflict.',
        'Anti-rejection medications are like peacekeepers that prevent your immune soldiers from attacking the new organ.',
      ],
      examples: [
        'Before transplant, doctors check that the blood types match and do a crossmatch test.',
        'A kidney patient notices she is making less urine - this could be a sign of rejection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rejection prevention involves pre-transplant risk assessment, induction immunosuppression at surgery, maintenance therapy, and surveillance through clinical monitoring, laboratory tests, and protocol biopsies.',
      explanation: `**Pre-Transplant Risk Assessment:**

*Immunologic Factors:*
| Factor | Higher Risk | Lower Risk |
|--------|-------------|------------|
| HLA mismatch | More mismatches | Fewer mismatches |
| PRA (antibodies) | High PRA (>20%) | Low/zero PRA |
| Prior transplants | Multiple | First transplant |
| Blood type | ABO-incompatible | ABO-compatible |
| Crossmatch | Positive | Negative |

*Other Risk Factors:*
- Younger age (stronger immune system)
- African American race (increased acute rejection risk)
- Delayed graft function (kidney)
- Cold ischemia time

**Types of Rejection:**

*Hyperacute Rejection:*
- Within minutes to hours
- Pre-formed antibodies attack donor
- Results in immediate graft loss
- Prevented by crossmatching

*Acute Cellular Rejection (ACR):*
- T cell-mediated
- Days to weeks post-transplant (can occur anytime)
- Usually responsive to steroids
- Diagnosed by biopsy

*Antibody-Mediated Rejection (AMR):*
- B cells and antibodies
- More difficult to treat
- Associated with DSA (donor-specific antibodies)
- Worse long-term outcomes

*Chronic Rejection:*
- Months to years
- Gradual organ deterioration
- Often combination of immune and non-immune factors
- Limited treatment options

**Induction Therapy:**

| Agent | Type | Use |
|-------|------|-----|
| Thymoglobulin (ATG) | T cell depleting | High-risk patients |
| Basiliximab | IL-2R blocker | Low-moderate risk |
| Alemtuzumab | Lymphocyte depleting | Some protocols |

*Selection:*
- High risk → depleting agent (ATG)
- Low risk → non-depleting (basiliximab)
- Protocol varies by center

**Maintenance Therapy:**

*Standard Triple Therapy:*
- Calcineurin inhibitor (tacrolimus)
- Antimetabolite (mycophenolate)
- Corticosteroid (prednisone)

*Drug Targets:*
| Drug | Target | Level Monitoring |
|------|--------|------------------|
| Tacrolimus | 5-15 ng/mL (varies) | Yes |
| Cyclosporine | 100-300 ng/mL | Yes |
| Sirolimus | 5-15 ng/mL | Yes |
| Mycophenolate | Usually no | Optional |

**Monitoring for Rejection:**

*Clinical Signs:*
| Organ | Signs of Rejection |
|-------|-------------------|
| Kidney | ↑Creatinine, ↓urine output |
| Heart | Arrhythmias, heart failure |
| Liver | ↑LFTs, jaundice |
| Lung | ↓Lung function, dyspnea |

*Laboratory Monitoring:*
- Organ-specific function tests
- Drug levels
- CBC (for drug toxicity)
- DSA monitoring

*Biopsy:*
- Gold standard for diagnosis
- Protocol biopsies at scheduled times
- For-cause biopsies when rejection suspected`,
      keyTerms: [
        { term: 'PRA', definition: 'Panel reactive antibody; measures how sensitized a patient is to HLA antigens' },
        { term: 'DSA', definition: 'Donor-specific antibodies; antibodies targeting the specific donor HLA' },
        { term: 'protocol biopsy', definition: 'Scheduled biopsy to check for subclinical rejection' },
        { term: 'induction therapy', definition: 'Intensive immunosuppression given around transplant time' },
      ],
      analogies: [
        'Protocol biopsies are like regular check-ups - sometimes they find problems before symptoms appear.',
        'Thymoglobulin depleting T cells is like clearing a field before planting - reduces immediate threats.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rejection prevention integrates risk-stratified induction selection, tailored maintenance regimens, structured surveillance protocols, and early detection strategies using biomarkers and histopathology for timely intervention.',
      explanation: `**Risk-Stratified Induction:**

*High-Risk Features:*
\`\`\`
Immunologic:
- PRA >20%
- Prior transplant with rejection
- Positive crossmatch (with desensitization)
- ABO-incompatible
- HLA sensitization

Non-Immunologic:
- Prolonged cold ischemia
- DGF expected
- Extended criteria donor
\`\`\`

*Induction Selection:*
| Risk Level | Recommended Induction |
|------------|----------------------|
| High | T cell depletion (ATG, alemtuzumab) |
| Moderate | Basiliximab or ATG |
| Low | Basiliximab or none |

**Acute Cellular Rejection (ACR):**

*Banff Classification (Kidney):*
| Grade | Histology |
|-------|-----------|
| Borderline | Mild tubulitis, no interstitial inflammation |
| 1A | >25% interstitial inflammation, mild tubulitis |
| 1B | >25% interstitial inflammation, severe tubulitis |
| 2A | Mild intimal arteritis |
| 2B | Severe intimal arteritis |
| 3 | Transmural arteritis |

*Treatment:*
\`\`\`
Grade 1 (mild):
- IV methylprednisolone 250-500 mg x 3 days
- Response rate >80%

Grade 2-3 or steroid-resistant:
- Thymoglobulin
- Duration depends on response
\`\`\`

**Antibody-Mediated Rejection (AMR):**

*Diagnostic Criteria (Banff):*
1. Histologic evidence (microvascular inflammation)
2. C4d deposition or molecular markers
3. DSA positivity

*Treatment:*
\`\`\`
First-line:
- Plasmapheresis (remove antibodies)
- IVIG (immunomodulation)
- Consider rituximab

Second-line:
- Bortezomib (plasma cell depletion)
- Eculizumab (complement inhibition)
- Tocilizumab/clazakizumab (IL-6 pathway)
\`\`\`

**Surveillance Strategies:**

*Protocol Biopsy Timing (Kidney):*
| Time | Rationale |
|------|-----------|
| 3 months | Early subclinical rejection |
| 12 months | Late subclinical rejection |
| For cause | Any time with dysfunction |

*Non-Invasive Biomarkers:*
| Biomarker | Application |
|-----------|-------------|
| dd-cfDNA | Graft injury marker |
| Gene expression (AlloMap, TruGraf) | Rejection risk |
| DSA | Antibody monitoring |

**DSA Monitoring:**

*De Novo DSA:*
- Develops after transplant
- Associated with worse outcomes
- Risk factors: Non-adherence, inadequate IS

*Management of DSA:*
| DSA Status | Action |
|------------|--------|
| New DSA, stable function | Enhanced monitoring, optimize IS |
| DSA + graft dysfunction | Biopsy to assess AMR |
| Persistent DSA + injury | Consider treatment for AMR |

**Adherence and Its Impact:**

*Non-Adherence:*
- Major risk factor for rejection
- Late acute rejection often due to non-adherence
- Associated with de novo DSA
- Leading cause of late graft loss

*Strategies to Improve Adherence:*
- Patient education
- Simplified regimens
- Electronic monitoring
- Regular adherence assessment
- Address barriers (cost, side effects)`,
      keyTerms: [
        { term: 'Banff classification', definition: 'International consensus criteria for transplant pathology diagnosis' },
        { term: 'C4d', definition: 'Complement split product; marker of antibody-mediated injury' },
        { term: 'de novo DSA', definition: 'Donor-specific antibodies developing after transplant, often from non-adherence' },
        { term: 'subclinical rejection', definition: 'Rejection seen on biopsy without clinical signs or graft dysfunction' },
      ],
      clinicalNotes: 'Protocol biopsies detect subclinical rejection in 10-30% of cases, allowing early treatment. De novo DSA development is one of the strongest predictors of poor long-term outcomes. Non-adherence should be assessed at every visit, especially in patients with late acute rejection or new DSA.',
    },
    4: {
      level: 4,
      summary: 'Advanced rejection prevention encompasses precision risk stratification using molecular diagnostics, management of highly sensitized patients, treatment of refractory rejection, and strategies for long-term graft preservation.',
      explanation: `**Molecular Diagnostics:**

*Gene Expression Profiling:*
\`\`\`
Kidney (TruGraf):
- Blood-based gene expression
- Identifies immune quiescence
- May reduce protocol biopsies

Heart (AlloMap):
- Gene expression in blood
- Rules out moderate-severe ACR
- Alternative to routine biopsy
\`\`\`

*dd-cfDNA Integration:*
| dd-cfDNA Level | Interpretation | Action |
|----------------|----------------|--------|
| <1% | Low probability of injury | Continue monitoring |
| 1-2% | Indeterminate | Consider repeat, DSA |
| >1-2% | Possible rejection/injury | Biopsy indicated |

*Molecular Microscope (MMDx):*
- Classifies rejection by gene expression
- Improves histologic interpretation
- Identifies molecular AMR early

**Highly Sensitized Patient Management:**

*Pre-Transplant Desensitization:*
\`\`\`
Components:
1. Plasmapheresis: Remove antibodies
2. IVIG: Immunomodulation
3. Rituximab: B cell depletion
4. +/- Bortezomib: Plasma cell depletion

Goal:
- Reduce DSA to acceptable level
- Negative or acceptable crossmatch
- Enable transplantation
\`\`\`

*Virtual Crossmatch:*
- Predict physical crossmatch result
- Based on DSA specificity and HLA typing
- Enables transplant without pre-transplant physical crossmatch
- Reduces cold ischemia time

**Treatment-Resistant Rejection:**

*Steroid-Resistant ACR:*
\`\`\`
First: Confirm diagnosis (re-biopsy if needed)
Then: T cell depleting therapy
- Thymoglobulin 1.5 mg/kg x 7-14 days
- Monitor for response
- Consider adding mycophenolate if not on
\`\`\`

*Refractory AMR:*
| Approach | Mechanism |
|----------|-----------|
| Rituximab | B cell depletion |
| Bortezomib | Plasma cell depletion |
| Eculizumab | Terminal complement blockade |
| Tocilizumab | IL-6R blockade |
| Imlifidase | Rapid IgG cleavage |

*Chronic Active AMR (caAMR):*
- Ongoing inflammation despite treatment
- Associated with transplant glomerulopathy
- Limited treatment options
- Often progressive to graft failure

**Long-Term Graft Preservation:**

*CNI Nephrotoxicity Management:*
\`\`\`
Strategies:
1. CNI minimization (lower targets over time)
2. CNI-free protocols (belatacept)
3. mTOR conversion (sirolimus/everolimus)

Monitoring:
- Kidney function trends
- Protocol biopsies (interstitial fibrosis)
- Balance against rejection risk
\`\`\`

*Cardiovascular Protection:*
- Major cause of death in transplant recipients
- Manage traditional risk factors aggressively
- Consider IS with favorable CV profile

*Malignancy Surveillance:*
- Annual dermatologic exam
- Age-appropriate cancer screening
- Consider mTOR inhibitors (antitumor effect)

**Special Situations:**

*Recurrent Disease:*
| Disease | Recurrence Risk | Management |
|---------|-----------------|------------|
| FSGS | 30-50% | Plasmapheresis, rituximab |
| IgA nephropathy | High (50%) | Optimize IS, supportive care |
| Diabetic nephropathy | High over time | Glucose control |
| Lupus | 2-10% | IS may help prevent |

*Combined Transplants:*
- Kidney-pancreas: Consider SPK vs PAK
- Liver-kidney: Often protect kidney from rejection
- Heart-kidney: High-risk patients`,
      keyTerms: [
        { term: 'virtual crossmatch', definition: 'Predicting crossmatch result based on DSA and HLA typing without physical testing' },
        { term: 'MMDx', definition: 'Molecular Microscope Diagnostic System; gene expression-based transplant pathology' },
        { term: 'caAMR', definition: 'Chronic active antibody-mediated rejection; progressive graft injury despite treatment' },
        { term: 'SPK', definition: 'Simultaneous pancreas-kidney transplant' },
      ],
      clinicalNotes: 'Virtual crossmatch has enabled transplants with reduced cold ischemia but requires accurate HLA typing and antibody characterization. Chronic active AMR is the leading cause of late kidney graft loss and has no proven effective treatment. The choice between CNI minimization versus tolerance of stable nephrotoxicity requires individual risk-benefit assessment.',
    },
    5: {
      level: 5,
      summary: 'Expert rejection prevention integrates advanced immunologic risk assessment, novel therapeutic strategies, tolerance protocols, and precision medicine approaches to optimize long-term graft and patient survival.',
      explanation: `**Advanced Immunologic Assessment:**

*Eplet Analysis:*
\`\`\`
Concept:
- HLA epitopes recognized by antibodies
- More granular than HLA mismatch counting

Application:
- Predict immunogenicity
- Guide organ allocation
- Identify acceptable mismatches

Evidence:
- Higher eplet load = higher rejection risk
- May enable expanded donor pool
\`\`\`

*Memory B Cell Assessment:*
- Circulating memory B cells
- May produce DSA with challenge
- Research stage for clinical use

*Complement-Binding DSA:*
| Type | Pathogenicity |
|------|---------------|
| C1q-binding DSA | Higher risk of AMR |
| C3d-binding DSA | Higher risk of graft loss |
| Non-complement fixing | Lower (but not absent) risk |

**Novel Rejection Prevention Strategies:**

*Imlifidase (IdeS):*
\`\`\`
Mechanism:
- Endopeptidase cleaving IgG
- Rapid, complete IgG removal

Use:
- Enable transplant in highly sensitized
- Single dose, immediate effect
- Approved in EU for desensitization

Limitations:
- IgG rebounds
- Anti-drug antibodies limit repeat use
- High cost
\`\`\`

*Costimulation Blockade Optimization:*
| Agent | Target | Status |
|-------|--------|--------|
| Belatacept | CD28/B7 | Approved, first-line option |
| ASKP1240 | CD40 | Phase 2 |
| Iscalimab (CFZ533) | CD40 | Phase 2 |

*IL-6 Pathway Inhibition:*
- Tocilizumab, clazakizumab
- For chronic AMR
- Phase 3 trials ongoing

**Tolerance Induction Protocols:**

*Mixed Chimerism (Stanford/ITN):*
\`\`\`
Protocol:
- Total lymphoid irradiation
- Anti-thymocyte globulin
- Donor bone marrow infusion
- Gradual IS withdrawal

Results:
- ~50% achieved IS-free state
- Duration of tolerance: Years
- Not standard care yet
\`\`\`

*Regulatory T Cell Therapy:*
| Approach | Status |
|----------|--------|
| Polyclonal Tregs | Phase 1/2 |
| Donor-specific Tregs | Early trials |
| CAR-Tregs | Preclinical |

*Thymus Tolerance:*
- Vascularized thymus + organ transplant
- Pediatric applications
- Induces central tolerance

**Precision Medicine Integration:**

*Risk Scores:*
\`\`\`
iBox (kidney):
- Integrates clinical and histologic features
- Predicts 7-year graft survival
- Guides surveillance intensity

APOL1 Genotyping:
- African ancestry donors
- High-risk variants: Faster function decline
- Consider in donor selection
\`\`\`

*Pharmacogenomics:*
| Gene | Drug | Clinical Use |
|------|------|--------------|
| CYP3A5 | Tacrolimus | Initial dosing |
| CYP3A4 | CNIs, mTORi | Drug interactions |
| IMPDH | Mycophenolate | Research stage |

**Future Directions:**

*Xenotransplantation:*
\`\`\`
Status:
- Gene-edited pigs (10 modifications)
- First clinical trials (2022)
- Kidney, heart tested

Immunology Challenges:
- Hyperacute rejection (overcome with edits)
- Chronic xenograft rejection
- Novel IS requirements
\`\`\`

*Regenerative Approaches:*
- Decellularized organs
- Bioengineered grafts
- Stem cell-derived organs
- Would reduce IS need

*Artificial Intelligence:*
| Application | Status |
|-------------|--------|
| Rejection prediction | Research |
| Optimal dosing | Early clinical |
| Image analysis (pathology) | Research |
| Personalized protocols | Future |

**Complex Case Management:**

*Third/Fourth Transplant:*
- Very high immunologic risk
- Consider paired donation
- Aggressive desensitization
- Realistic discussion of outcomes

*Adherence Failure:*
\`\`\`
Management:
1. Identify root causes
2. Address barriers
3. Simplify regimen if possible
4. Consider belatacept (monthly infusion)
5. Behavioral interventions
6. Multidisciplinary approach
\`\`\`

*Pregnancy Post-Transplant:*
- High-risk pregnancy
- Switch from MMF 6 weeks before conception
- Tacrolimus adjustment (levels may drop)
- Close monitoring for rejection`,
      keyTerms: [
        { term: 'iBox', definition: 'Integrative prediction score for kidney allograft survival using clinical and histologic features' },
        { term: 'mixed chimerism', definition: 'Coexistence of donor and recipient immune cells, potentially enabling tolerance' },
        { term: 'CAR-Tregs', definition: 'Chimeric antigen receptor regulatory T cells; engineered cells for transplant tolerance' },
        { term: 'APOL1', definition: 'Apolipoprotein L1; gene variants in African ancestry associated with kidney disease' },
      ],
      clinicalNotes: 'Tolerance induction remains investigational but represents the ultimate goal of transplant immunology. Eplet matching and complement-binding DSA assessment refine risk prediction beyond standard HLA matching. Xenotransplantation may address organ shortage but introduces novel immunologic challenges. Non-adherence management requires systematic assessment and multidisciplinary intervention.',
    },
  },

  media: [
    {
      id: 'rejection-prevention-1',
      type: 'diagram',
      filename: 'rejection-types.svg',
      title: 'Types of Transplant Rejection',
      description: 'Hyperacute, acute, and chronic rejection mechanisms',
    },
  ],

  citations: [
    {
      id: 'banff-consensus',
      type: 'article',
      title: 'Banff Meeting Report on Allograft Pathology',
      source: 'American Journal of Transplantation',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'transplant-immunosuppression-basics', targetType: 'concept', relationship: 'related', label: 'Immunosuppression Basics' },
    { targetId: 'transplant-post-transplant-monitoring', targetType: 'concept', relationship: 'see-also', label: 'Post-Transplant Monitoring' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'immunology'],
    keywords: ['rejection', 'transplant', 'prevention', 'DSA', 'Banff', 'induction'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
