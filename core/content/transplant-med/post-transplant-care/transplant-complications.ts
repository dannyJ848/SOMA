/**
 * Transplant Complications
 *
 * Overview of complications following organ transplantation including
 * infectious, immunologic, metabolic, and malignant complications.
 */

import { EducationalContent } from '../../types';

export const TRANSPLANT_COMPLICATIONS: EducationalContent = {
  id: 'transplant-transplant-complications',
  type: 'concept',
  name: 'Transplant Complications',
  alternateNames: ['Post-transplant complications', 'Transplant-related problems'],

  levels: {
    1: {
      level: 1,
      summary: 'Transplant patients can develop complications including infections, rejection, kidney problems, diabetes, and some types of cancer, which is why careful monitoring is important.',
      explanation: `**Types of Transplant Complications:**

1. **Rejection**
   - Your body tries to attack the new organ
   - Can usually be treated if caught early
   - Why taking medications properly is so important

2. **Infections**
   - More common because anti-rejection medications weaken your immune system
   - Can include common infections and unusual infections
   - Why avoiding sick people matters

3. **Medication Side Effects**
   - Kidney damage from some medications
   - High blood sugar (diabetes)
   - High blood pressure
   - Tremors and headaches

4. **Cardiovascular Problems**
   - Higher risk of heart disease
   - High cholesterol
   - Important to maintain healthy lifestyle

5. **Bone Problems**
   - Weak bones (osteoporosis)
   - Higher risk of fractures
   - May need calcium and vitamin D

6. **Skin Cancer**
   - Much higher risk than general population
   - Sun protection very important
   - Regular skin checks needed

**What You Can Do:**

- Take all medications exactly as prescribed
- Never miss a dose
- Keep all follow-up appointments
- Report any new symptoms immediately
- Protect your skin from the sun
- Maintain a healthy lifestyle
- Get recommended vaccinations (some are not safe)`,
      keyTerms: [
        { term: 'complications', definition: 'Problems that can happen after a medical treatment' },
        { term: 'infection', definition: 'When germs enter your body and make you sick' },
        { term: 'side effects', definition: 'Unwanted effects from medications' },
      ],
      analogies: [
        'Taking immunosuppression is a trade-off: it protects your new organ but makes you more vulnerable to infections.',
        'Sun protection after transplant is like wearing armor - your skin is now more vulnerable.',
      ],
      examples: [
        'A transplant patient develops a fever and needs to see a doctor right away because infections can be serious.',
        'A kidney transplant patient notices their blood sugar is high and learns they have developed diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-transplant complications include acute and chronic rejection, opportunistic infections following a predictable timeline, metabolic effects of immunosuppression, and increased malignancy risk requiring systematic prevention and surveillance.',
      explanation: `**Rejection:**

*Types:*
| Type | Timing | Mechanism | Treatment |
|------|--------|-----------|-----------|
| Hyperacute | Minutes-hours | Pre-formed antibodies | Prevention (crossmatch) |
| Acute cellular | Days-months | T cells | Steroids, ATG |
| Acute antibody-mediated | Days-months | B cells, antibodies | Plasmapheresis, IVIG |
| Chronic | Months-years | Mixed, ongoing injury | Limited options |

**Infections:**

*Timeline:*
| Period | Common Infections |
|--------|-------------------|
| 0-1 month | Surgical site, donor-derived, nosocomial |
| 1-6 months | CMV, BK virus, PJP, Aspergillus |
| >6 months | Community-acquired, late opportunistic |

*Key Infections:*
| Infection | Features | Prevention/Treatment |
|-----------|----------|---------------------|
| CMV | Common, causes multiple problems | Prophylaxis or preemptive monitoring |
| BK virus | Kidney transplant specific | Reduce immunosuppression |
| PJP | Pneumonia, can be severe | TMP-SMX prophylaxis |

**Metabolic Complications:**

*New-Onset Diabetes After Transplant (NODAT):*
| Risk Factors | Management |
|--------------|------------|
| Steroids | Lifestyle modification |
| Tacrolimus | Diabetes medications |
| Obesity | Consider IS adjustment |
| Family history | Monitor glucose regularly |

*Dyslipidemia:*
- Very common (40-60%)
- mTOR inhibitors particularly causative
- Treat with statins (watch interactions)

*Hypertension:*
- Nearly universal
- CNIs cause vasoconstriction
- Often requires multiple medications

**Cardiovascular Disease:**

- Leading cause of death in kidney transplant recipients
- Multiple risk factors compound
- Aggressive prevention important

**Bone Disease:**

*Risk Factors:*
- Steroids (most significant)
- CNIs
- Pre-existing bone disease
- Hyperparathyroidism (kidney)

*Prevention/Treatment:*
- Calcium and vitamin D
- Bisphosphonates (when appropriate)
- Minimize steroid dose
- Weight-bearing exercise

**Malignancy:**

*Risk Increase:*
| Cancer | Risk vs General Population |
|--------|---------------------------|
| Skin cancer (SCC) | 65-250x |
| PTLD | 10-20x |
| Kaposi sarcoma | 20-500x |
| Other solid tumors | 2-3x |

*Post-Transplant Lymphoproliferative Disorder (PTLD):*
- EBV-related in most cases
- Higher risk with EBV-negative recipients
- Treatment: Reduce IS, rituximab, chemotherapy`,
      keyTerms: [
        { term: 'NODAT', definition: 'New-onset diabetes after transplant' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-related lymphoma' },
        { term: 'CMV', definition: 'Cytomegalovirus; common post-transplant infection' },
        { term: 'opportunistic infection', definition: 'Infection caused by organisms that rarely affect healthy people' },
      ],
      analogies: [
        'The infection timeline is like a weather forecast - you know what to expect at different times.',
        'PTLD risk in EBV-negative recipients is like a virus meeting a host with no immunity.',
      ],
    },
    3: {
      level: 3,
      summary: 'Transplant complications require understanding of immunosuppression-related pathophysiology, risk stratification for infections and malignancy, and organ-specific complications with targeted prevention and management strategies.',
      explanation: `**Calcineurin Inhibitor Nephrotoxicity:**

*Types:*
| Type | Mechanism | Features | Management |
|------|-----------|----------|------------|
| Acute | Vasoconstriction | Reversible AKI | Dose reduction |
| Chronic | Arteriolar hyalinosis, fibrosis | Progressive CKD | CNI minimization |

*Histology (Chronic):*
- Striped interstitial fibrosis
- Arteriolar hyalinosis (nodular)
- Tubular atrophy

*Management Strategies:*
\`\`\`
CNI Minimization:
- Lower target levels
- Add or switch to mTOR inhibitor
- Belatacept-based regimen (kidney)

Monitoring:
- Trend GFR over time
- Protocol biopsies (some centers)
- Balance rejection vs toxicity risk
\`\`\`

**CMV Disease - Detailed:**

*Clinical Manifestations:*
| Syndrome | Features |
|----------|----------|
| CMV syndrome | Fever, malaise, cytopenias |
| CMV enteritis | Diarrhea, abdominal pain |
| CMV hepatitis | Elevated LFTs |
| CMV pneumonitis | Cough, hypoxia |
| Tissue-invasive disease | Requires histologic confirmation |

*Risk-Stratified Management:*
| D/R Status | Strategy | Duration |
|------------|----------|----------|
| D+/R- | Universal prophylaxis | 6 months (kidney) |
| D+/R+ or D-/R+ | Prophylaxis or preemptive | 3 months |
| D-/R- | No routine prevention | Monitor if transfused |

*Resistant CMV:*
- Suspect if viral load rises on therapy
- Genotypic testing (UL97, UL54)
- Alternative agents: Foscarnet, cidofovir, maribavir

**BK Virus Nephropathy:**

*Pathophysiology:*
\`\`\`
Sequence:
BK viruria → BK viremia → BK nephropathy

Viral Loads:
- Viruria >10^7 copies: High risk
- Viremia >10^4 copies: High risk for nephropathy
\`\`\`

*Management:*
| Step | Action |
|------|--------|
| 1 | Reduce tacrolimus (target 4-6 ng/mL) |
| 2 | Reduce or hold mycophenolate |
| 3 | Consider IVIG (weak evidence) |
| 4 | Switch to mTOR inhibitor (some centers) |

**Cardiac Allograft Vasculopathy (CAV):**

*Pathophysiology:*
- Immune-mediated vascular injury
- Diffuse, concentric intimal thickening
- Unique to transplant

*Diagnosis:*
| Method | Sensitivity |
|--------|-------------|
| Angiography | Lower (misses early) |
| IVUS | Higher (detects intimal thickening) |
| Stress testing | Low sensitivity |

*Prevention and Treatment:*
- Statins (all patients)
- mTOR inhibitors (may slow progression)
- Optimal IS
- Revascularization rarely possible
- Re-transplant for severe

**PTLD - Comprehensive:**

*Risk Factors:*
| Factor | Risk |
|--------|------|
| EBV D+/R- | Highest |
| Heavy immunosuppression | Higher |
| ATG induction | Higher |
| T cell-depleting therapy | Higher |

*Classification:*
| Type | Features |
|------|----------|
| Early lesion | Reactive hyperplasia |
| Polymorphic | Mixed cell population |
| Monomorphic | B cell lymphoma (most common) |
| Classic Hodgkin-like | Rare |

*Treatment Approach:*
\`\`\`
Step 1: Reduce immunosuppression
- Often first step
- ~30% respond

Step 2: Rituximab
- CD20+ tumors
- Weekly x 4

Step 3: Chemotherapy
- R-CHOP or similar
- For non-responders

Step 4: Consider:
- Adoptive cell therapy (EBV-specific CTLs)
- Clinical trials
\`\`\`

**Recurrent Disease:**

*Common Recurrences by Organ:*
| Organ | Disease | Risk |
|-------|---------|------|
| Kidney | FSGS | 30-50% |
| Kidney | IgA nephropathy | 50% (histologic) |
| Kidney | Diabetic nephropathy | Very high |
| Liver | Hepatitis C | Nearly universal (if not treated) |
| Liver | Hepatitis B | High without prophylaxis |
| Liver | Autoimmune hepatitis | 10-30% |`,
      keyTerms: [
        { term: 'CAV', definition: 'Cardiac allograft vasculopathy; diffuse coronary disease unique to heart transplants' },
        { term: 'IVUS', definition: 'Intravascular ultrasound; more sensitive than angiography for detecting CAV' },
        { term: 'striped fibrosis', definition: 'Pattern of interstitial fibrosis characteristic of chronic CNI toxicity' },
        { term: 'EBV-specific CTLs', definition: 'Cytotoxic T lymphocytes targeting EBV; experimental PTLD treatment' },
      ],
      clinicalNotes: 'CNI nephrotoxicity and chronic rejection are difficult to distinguish histologically; clinical context matters. BK nephropathy can mimic rejection on biopsy; immunostaining confirms. CAV causes sudden death or heart failure without typical anginal symptoms due to denervation. PTLD reduction of immunosuppression must balance against rejection risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced transplant complication management encompasses precision diagnostics for distinguishing rejection from infection/toxicity, management of resistant infections, treatment of refractory complications, and long-term strategies for graft and patient survival.',
      explanation: `**Distinguishing Rejection from Other Causes:**

*Kidney Dysfunction Differential:*
\`\`\`
Rejection:
- ACR: Tubulitis, interstitial inflammation
- AMR: Microvascular inflammation, C4d, DSA

BK Nephropathy:
- Viral cytopathic changes
- SV40 immunostain positive
- Viral load elevated

CNI Toxicity:
- Arteriolar hyalinosis
- Isometric vacuolization (tubules)
- Usually no inflammation

Recurrent Disease:
- Histology of original disease
- FSGS: Segmental sclerosis
- IgA: Mesangial deposits
\`\`\`

*Molecular Diagnostics:*
| Test | Application |
|------|-------------|
| MMDx | Molecular phenotyping of biopsy |
| dd-cfDNA | Non-invasive injury marker |
| Gene expression | Immune quiescence assessment |

**Refractory and Resistant Infections:**

*Resistant CMV Management:*
\`\`\`
Testing:
- UL97 mutation: Ganciclovir resistance
- UL54 mutation: May affect multiple drugs

Treatment Options:
| Mutation | Drug Options |
|----------|--------------|
| UL97 only | Foscarnet, maribavir |
| UL54 | Cidofovir (if sensitive), maribavir |
| Multi-drug | Letermovir (limited), experimental |

Maribavir:
- UL97 kinase inhibitor (different site)
- FDA approved for resistant/refractory CMV
- Less nephrotoxic than alternatives
\`\`\`

*Invasive Fungal Infections:*
| Infection | Treatment |
|-----------|-----------|
| Aspergillus | Voriconazole (first-line) |
| Candida | Echinocandin or fluconazole |
| Cryptococcus | Ampho B induction → fluconazole |
| PJP | TMP-SMX, add steroids if severe |

**Chronic Rejection Management:**

*Chronic Active AMR (caAMR):*
\`\`\`
Pathology:
- Transplant glomerulopathy
- PTCML positive
- DSA positive
- Ongoing microvascular injury

Treatment (Limited Evidence):
- Optimize baseline IS
- Enhance adherence
- Consider: IVIG, rituximab, tocilizumab
- Plasmapheresis (less useful chronically)
- Clinical trials

Prognosis:
- Generally progressive
- 5-year graft survival ~50%
- May need re-transplant planning
\`\`\`

*Chronic Lung Allograft Dysfunction:*
| Phenotype | Features | Treatment |
|-----------|----------|-----------|
| BOS | Obstructive, air trapping | Azithromycin, FAM, re-transplant |
| RAS | Restrictive, fibrosis | Less responsive |

**Malignancy - Advanced Management:**

*Skin Cancer Prevention:*
\`\`\`
Strategies:
- Sun protection (sunscreen, clothing)
- Regular dermatology exam
- Low threshold for biopsy
- Acitretin for high-risk patients
- Consider sirolimus conversion (lower SCC risk)
\`\`\`

*PTLD Treatment Algorithm:*
\`\`\`
Step 1: Reduce IS
├─ Response: Continue, monitor
└─ No response → Step 2

Step 2: Rituximab (CD20+)
├─ Response: Consider consolidation
└─ No response → Step 3

Step 3: Chemotherapy (R-CHOP)
├─ Response: Complete treatment
└─ Refractory → Step 4

Step 4: Consider
- EBV-specific CTLs
- Checkpoint inhibitors (careful)
- Clinical trials
\`\`\`

**Metabolic Syndrome Management:**

*Integrated Approach:*
| Component | Target | Strategy |
|-----------|--------|----------|
| Diabetes | A1c <7% | Lifestyle, medications, IS adjustment |
| Hypertension | <130/80 | Multiple agents, CNI reduction |
| Dyslipidemia | Per ASCVD risk | Statins (watch interactions) |
| Obesity | Weight reduction | Lifestyle, consider GLP-1 agonists |

*Bariatric Surgery Post-Transplant:*
- May be considered for severe obesity
- Sleeve gastrectomy often preferred
- Medication absorption concerns
- Multidisciplinary evaluation

**Frailty and Aging:**

*Assessment:*
- Fried Frailty Index
- 6-minute walk test
- Grip strength
- Cognitive assessment

*Implications:*
- Affects survival independently
- May guide IS intensity
- Rehabilitation potential
- Goals of care discussions`,
      keyTerms: [
        { term: 'caAMR', definition: 'Chronic active antibody-mediated rejection; progressive graft injury with poor prognosis' },
        { term: 'transplant glomerulopathy', definition: 'Kidney pathology with GBM duplication, signature of chronic AMR' },
        { term: 'acitretin', definition: 'Retinoid used to prevent skin cancers in high-risk transplant patients' },
        { term: 'FAM', definition: 'Fundoplication, azithromycin, and montelukast protocol for BOS' },
      ],
      clinicalNotes: 'Distinguishing caAMR from CNI toxicity has major treatment implications; biopsy with DSA is essential. Sirolimus conversion may reduce SCC risk but has its own toxicities. PTLD treatment often requires balancing tumor response against rejection risk. Bariatric surgery can improve metabolic outcomes but requires careful medication management.',
    },
    5: {
      level: 5,
      summary: 'Expert management of transplant complications integrates precision diagnostics, novel therapeutics, clinical trial access, and multidisciplinary care to optimize outcomes for complex patients with refractory complications.',
      explanation: `**Precision Diagnostics for Complications:**

*Molecular Microscope Application:*
\`\`\`
Capabilities:
- Identifies molecular TCMR/ABMR
- Detects injury beyond Banff thresholds
- Classifies mixed rejection

Clinical Utility:
- Improves interobserver agreement
- Identifies early/subclinical disease
- May guide treatment intensity
\`\`\`

*Multi-omics Integration:*
| Approach | Application |
|----------|-------------|
| Transcriptomics | Rejection classification |
| Proteomics | Biomarker discovery |
| Metabolomics | Injury signatures |
| Epigenomics | Tolerance prediction |

**Novel Therapeutics:**

*Emerging Agents for AMR:*
| Agent | Target | Status |
|-------|--------|--------|
| Clazakizumab | IL-6 | Phase 3 |
| Tocilizumab | IL-6R | Off-label, trials |
| Imlifidase | IgG cleavage | Approved (EU) |
| Daratumumab | CD38 (plasma cells) | Case reports, trials |
| Obinutuzumab | CD20 | Case reports |

*PTLD Novel Approaches:*
| Strategy | Mechanism | Status |
|----------|-----------|--------|
| EBV-specific CTLs | Adoptive T cell therapy | Clinical use |
| Brentuximab | CD30-targeted | Case reports |
| Checkpoint inhibitors | Immune activation | Caution (rejection risk) |
| CAR-T cells | CD19-targeted | Early exploration |

**Management of Complex Scenarios:**

*Concurrent Rejection and Infection:*
\`\`\`
Scenario: BK viremia + rejection
Challenge: Need IS for rejection, reduction for BK

Approach:
1. Treat rejection (steroids)
2. Minimize maintenance IS differently:
   - Reduce MPA more than CNI
3. Monitor BK closely
4. Consider IVIG

Scenario: CMV + rejection
- Treat CMV (does not worsen with steroids)
- Treat rejection
- Avoid heavy T cell depletion if possible
\`\`\`

*Multi-organ Failure:*
| Situation | Approach |
|-----------|----------|
| Graft failure + sepsis | May need IS reduction, supportive care |
| Cardiac + renal dysfunction | Combined management, consider dual transplant |
| PTLD + rejection | Prioritize based on immediate threat |

**Re-Transplantation Considerations:**

*Indications:*
- Irreversible graft failure
- Life quality significantly impacted
- Patient otherwise candidate

*Special Challenges:*
| Issue | Consideration |
|-------|---------------|
| Sensitization | Higher PRA likely |
| Surgical | Prior surgery, adhesions |
| Psychological | Prior loss, expectations |
| Immunologic | Prior rejection history |

*Optimization:*
- Desensitization as needed
- Consider paired donation
- Careful patient selection
- Realistic counseling

**Palliative Care Integration:**

*When to Consider:*
- Irreversible graft failure
- Multiple failed re-transplants
- Significant comorbidities
- Patient preference

*Goals of Care:*
- Quality of life focus
- Symptom management
- Dialysis decisions (kidney)
- Hospice when appropriate

**Research and Clinical Trials:**

*Areas of Active Investigation:*
| Area | Focus |
|------|-------|
| Tolerance | IS withdrawal, cellular therapy |
| Biomarkers | Non-invasive monitoring |
| Novel IS | More selective agents |
| Gene therapy | Addressing root causes |

*Accessing Trials:*
- ClinicalTrials.gov registry
- Transplant network resources
- Academic center referral
- Patient advocacy groups

**Systems Optimization:**

*Multidisciplinary Team:*
\`\`\`
Core Team:
- Transplant physician
- Transplant surgeon
- Pharmacist
- Coordinator
- Social worker

Extended Team (as needed):
- Infectious disease
- Dermatology
- Oncology
- Palliative care
- Mental health
\`\`\`

*Quality Improvement:*
| Metric | Target |
|--------|--------|
| 1-year graft survival | >95% |
| Rejection rate (year 1) | <15% |
| CMV disease rate | <5% (at-risk) |
| NODAT incidence | Minimize |

*Long-term Registry Data:*
- SRTR (US kidney, liver, etc.)
- ISHLT (heart, lung)
- Outcomes benchmarking
- Risk adjustment`,
      keyTerms: [
        { term: 'EBV-specific CTLs', definition: 'Adoptive cellular therapy using T cells targeting EBV for PTLD treatment' },
        { term: 'clazakizumab', definition: 'Anti-IL-6 antibody in trials for chronic AMR treatment' },
        { term: 'SRTR', definition: 'Scientific Registry of Transplant Recipients; US outcomes database' },
        { term: 'multi-omics', definition: 'Integration of genomics, transcriptomics, proteomics for comprehensive analysis' },
      ],
      clinicalNotes: 'Checkpoint inhibitors in transplant patients carry high rejection risk and should be used cautiously with informed consent. EBV-CTLs are available at some centers and offer an alternative for PTLD without increasing rejection risk. Goals of care discussions should be incorporated when facing irreversible complications. Clinical trial access should be actively sought for patients with refractory complications.',
    },
  },

  media: [
    {
      id: 'complications-1',
      type: 'diagram',
      filename: 'transplant-complications-overview.svg',
      title: 'Transplant Complications Overview',
      description: 'Categories of post-transplant complications',
    },
  ],

  citations: [
    {
      id: 'ats-guidelines',
      type: 'article',
      title: 'American Transplant Society Guidelines',
      source: 'American Journal of Transplantation',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'transplant-immunosuppression-basics', targetType: 'concept', relationship: 'related', label: 'Immunosuppression Basics' },
    { targetId: 'transplant-post-transplant-monitoring', targetType: 'concept', relationship: 'related', label: 'Post-Transplant Monitoring' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'complications'],
    keywords: ['transplant', 'complications', 'rejection', 'infection', 'PTLD', 'CMV'],
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
