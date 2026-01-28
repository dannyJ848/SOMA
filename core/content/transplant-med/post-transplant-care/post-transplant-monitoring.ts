/**
 * Post-Transplant Monitoring
 *
 * Comprehensive surveillance protocols for organ transplant recipients
 * including laboratory monitoring, infectious disease screening, and
 * long-term complication surveillance.
 */

import { EducationalContent } from '../../types';

export const POST_TRANSPLANT_MONITORING: EducationalContent = {
  id: 'transplant-post-transplant-monitoring',
  type: 'concept',
  name: 'Post-Transplant Monitoring',
  alternateNames: ['Transplant surveillance', 'Post-transplant follow-up', 'Graft monitoring'],

  levels: {
    1: {
      level: 1,
      summary: 'After a transplant, patients need regular check-ups with blood tests and exams to make sure the new organ is working well and to catch any problems early.',
      explanation: `**Why Monitoring Is Important:**

After receiving a transplant, you need regular follow-up care for the rest of your life. This helps:
- Make sure your new organ is working
- Check that medication levels are correct
- Find problems early when they are easier to treat
- Prevent infections and other complications

**What to Expect:**

*Visit Schedule:*
- First months: Very frequent visits (weekly or more)
- First year: Gradually less frequent
- Long-term: Every few months

*At Each Visit:*
- Blood tests to check organ function
- Drug level tests
- Blood pressure and weight check
- Discussion of any symptoms or concerns

**Blood Tests:**

Different organs need different tests:
- **Kidney**: Creatinine (kidney function)
- **Liver**: Liver enzymes (AST, ALT)
- **Heart**: Regular heart function tests

All organs need:
- Drug levels (tacrolimus or other)
- Complete blood count
- Glucose (blood sugar)
- Cholesterol

**Watching for Problems:**

Signs to report immediately:
- Fever (sign of infection)
- Pain over the transplant
- Unusual fatigue
- Changes in urine (kidney)
- Jaundice/yellow skin (liver)
- Shortness of breath (heart/lung)

**Infection Prevention:**

- Avoid sick people
- Good hand washing
- Food safety (no raw foods early on)
- Certain vaccines (some are not safe)
- Take preventive medications as prescribed`,
      keyTerms: [
        { term: 'graft function', definition: 'How well your transplanted organ is working' },
        { term: 'drug levels', definition: 'The amount of anti-rejection medication in your blood' },
        { term: 'creatinine', definition: 'A blood test that shows how well your kidneys are working' },
      ],
      analogies: [
        'Monitoring a transplant is like regular car maintenance - check-ups prevent breakdowns.',
        'Drug levels are like Goldilocks - not too high (toxic), not too low (rejection risk), just right.',
      ],
      examples: [
        'A kidney transplant patient gets blood tests weekly for the first month, then every two weeks.',
        'A liver transplant recipient learns to watch for yellowing of the eyes as a warning sign.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-transplant monitoring includes regular assessment of graft function, immunosuppressant drug levels, infection screening, and surveillance for complications including rejection, malignancy, and metabolic disease.',
      explanation: `**Monitoring Schedule:**

*Early Post-Transplant (0-3 months):*
| Frequency | Assessments |
|-----------|-------------|
| Weekly | Organ function labs, drug levels |
| As needed | Biopsies if dysfunction |

*Intermediate (3-12 months):*
| Frequency | Assessments |
|-----------|-------------|
| Every 2-4 weeks | Labs, levels |
| Protocol biopsies | Some centers |

*Long-term (>1 year):*
| Frequency | Assessments |
|-----------|-------------|
| Every 1-3 months | Labs, clinical exam |
| Annually | Full health maintenance |

**Organ-Specific Monitoring:**

*Kidney Transplant:*
| Test | Purpose |
|------|---------|
| Serum creatinine | Graft function |
| eGFR | Estimated kidney function |
| Urinalysis | Proteinuria, infection |
| BK virus PCR | BK nephropathy screening |
| DSA | Antibody monitoring |

*Liver Transplant:*
| Test | Purpose |
|------|---------|
| AST, ALT | Hepatocyte injury |
| Bilirubin | Liver function |
| INR | Synthetic function |
| Ultrasound | Vascular patency |

*Heart Transplant:*
| Test | Purpose |
|------|---------|
| Echocardiogram | Heart function |
| Endomyocardial biopsy | Rejection screening |
| Coronary angiography | CAV surveillance |
| AlloMap (some centers) | Non-invasive rejection screening |

**Drug Level Monitoring:**

*Target Ranges (vary by center and time):*
| Drug | Early Target | Late Target |
|------|--------------|-------------|
| Tacrolimus | 8-12 ng/mL | 5-8 ng/mL |
| Cyclosporine | 200-300 ng/mL | 100-200 ng/mL |
| Sirolimus | 8-12 ng/mL | 4-8 ng/mL |

*When to Check Levels:*
- After dose changes
- When starting/stopping interacting drugs
- With graft dysfunction
- Suspected non-adherence

**Infection Monitoring:**

*Routine Screening:*
| Infection | Timing | Test |
|-----------|--------|------|
| CMV | 0-6 months post-transplant | PCR weekly |
| BK virus (kidney) | 0-12 months | PCR monthly |
| EBV (if recipient negative) | Ongoing | PCR |

*Prophylaxis (varies by protocol):*
| Infection | Duration | Agent |
|-----------|----------|-------|
| PJP | 6-12 months | TMP-SMX |
| CMV | 3-6 months | Valganciclovir |
| Fungal | Variable | Nystatin, fluconazole |

**General Health Monitoring:**

*Metabolic:*
- Glucose (diabetes screening)
- Lipids (cardiovascular risk)
- Blood pressure (hypertension common)
- Bone density (osteoporosis)

*Cancer Screening:*
- Annual skin exam (skin cancer very common)
- Age-appropriate cancer screening
- PTLD surveillance in high-risk patients`,
      keyTerms: [
        { term: 'CMV', definition: 'Cytomegalovirus; common infection in transplant patients' },
        { term: 'BK virus', definition: 'Virus that can damage transplanted kidneys if immunosuppression is too strong' },
        { term: 'PJP', definition: 'Pneumocystis jirovecii pneumonia; opportunistic lung infection prevented with prophylaxis' },
        { term: 'DSA', definition: 'Donor-specific antibodies that can cause rejection' },
      ],
      analogies: [
        'Drug level monitoring is like a tightrope walk - staying in the therapeutic range keeps you balanced.',
        'Infection prophylaxis is like an umbrella - you use it even if it is not raining because storms can come quickly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive post-transplant monitoring integrates organ-specific surveillance protocols, therapeutic drug monitoring, infection risk stratification, and structured screening for metabolic, cardiovascular, and malignant complications.',
      explanation: `**Therapeutic Drug Monitoring:**

*Tacrolimus:*
\`\`\`
Pharmacokinetics:
- Narrow therapeutic index
- Variable absorption
- CYP3A4/5 and P-gp substrate

Monitoring Strategy:
- Trough levels (12h post-dose)
- Target varies by time and organ

Factors Affecting Levels:
- Food (grapefruit increases)
- Drug interactions
- Diarrhea (increases levels paradoxically short-term)
- CYP3A5 genotype
\`\`\`

*MPA (Mycophenolic Acid):*
| Monitoring | Approach |
|------------|----------|
| Routine levels | Not standard |
| AUC monitoring | Some centers |
| Dose adjustment | Based on toxicity, rejection |

**Infection Risk Timeline:**

*0-1 Month:*
| Type | Examples |
|------|----------|
| Nosocomial | Bacterial, Candida |
| Donor-derived | CMV, HSV, TB |
| Surgical complications | Wound infection |

*1-6 Months:*
| Type | Examples |
|------|----------|
| Opportunistic | PJP, CMV, Aspergillus |
| Viral reactivation | BK, EBV, HBV/HCV |

*>6 Months:*
| Type | Examples |
|------|----------|
| Community-acquired | Respiratory viruses, bacterial |
| Late opportunistic | CMV if non-compliant with monitoring |
| Chronic viral | HBV, HCV reactivation |

**CMV Monitoring and Management:**

*Risk Stratification:*
| D/R Status | Risk | Strategy |
|------------|------|----------|
| D+/R- | Highest | Universal prophylaxis |
| D+/R+ or D-/R+ | Intermediate | Prophylaxis or preemptive |
| D-/R- | Lowest | Monitor if blood products |

*Preemptive Strategy:*
\`\`\`
Monitor: Weekly CMV PCR for 12 weeks
Treat if: Detectable viremia above threshold
Treatment: Valganciclovir or IV ganciclovir
Duration: Until undetectable x 2 weeks
\`\`\`

**BK Virus (Kidney Transplant):**

*Screening Protocol:*
| Time | Frequency |
|------|-----------|
| 0-12 months | Monthly BK PCR |
| 12-24 months | Every 3 months |
| >24 months | If graft dysfunction |

*Management by Viral Load:*
| Viremia | Action |
|---------|--------|
| <1000 copies | Monitor |
| 1000-10,000 | Reduce immunosuppression |
| >10,000 | Significant reduction, consider biopsy |

**Protocol Biopsies:**

*Kidney:*
| Time | Rationale |
|------|-----------|
| 3 months | Detect subclinical rejection |
| 12 months | Assess for chronic changes |
| For cause | With any dysfunction |

*Heart:*
- Traditional: Frequent early EMB (weekly → monthly → less)
- Gene expression profiling (AlloMap): Reduces biopsies

**Metabolic Complications:**

*New-Onset Diabetes After Transplant (NODAT):*
| Risk Factors | Management |
|--------------|------------|
| CNIs (tacrolimus > cyclosporine) | Monitor glucose |
| Steroids | Lifestyle modification |
| Weight gain | Diabetic medications |
| Family history | Consider CNI minimization |

*Dyslipidemia:*
- Screen annually
- mTOR inhibitors increase lipids significantly
- Treat per cardiovascular guidelines
- Watch for statin-CNI interactions

*Cardiovascular Risk:*
- Leading cause of death in kidney transplant
- Aggressive risk factor modification
- BP targets: <130/80 mmHg
- LDL targets: Based on ASCVD risk

**Bone Health:**

*Osteoporosis Risk Factors:*
- Steroids
- CNIs
- Hyperparathyroidism (kidney)
- Immobility

*Monitoring:*
- Baseline DEXA
- Repeat at 1 year, then as indicated
- Calcium, vitamin D, PTH monitoring`,
      keyTerms: [
        { term: 'preemptive strategy', definition: 'Monitoring for infection and treating when detected, rather than universal prophylaxis' },
        { term: 'NODAT', definition: 'New-onset diabetes after transplant; common complication of immunosuppression' },
        { term: 'protocol biopsy', definition: 'Scheduled surveillance biopsy regardless of graft function' },
        { term: 'AlloMap', definition: 'Gene expression test for heart transplant rejection surveillance' },
      ],
      clinicalNotes: 'Tacrolimus levels can be falsely elevated with hemolysis or if the wrong tube is used. BK viral load of >10,000 copies/mL has high positive predictive value for BK nephropathy. CMV D+/R- recipients remain high risk even after 6 months of prophylaxis. Protocol biopsies detect subclinical rejection in 10-30% of stable patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced post-transplant monitoring encompasses non-invasive biomarkers, precision approaches to infection management, long-term graft preservation strategies, and integrated care addressing the full spectrum of transplant-related complications.',
      explanation: `**Non-Invasive Monitoring Biomarkers:**

*Donor-Derived Cell-Free DNA (dd-cfDNA):*
\`\`\`
Mechanism:
- Dying graft cells release DNA
- Detectable in recipient blood
- Elevated with graft injury

Clinical Use:
- Complement or replace protocol biopsies
- Early rejection detection
- Guide biopsy decisions

Interpretation (kidney):
- <1%: Low probability of rejection
- 1-2%: Consider clinical context
- >1-2%: Biopsy recommended
\`\`\`

*Gene Expression Profiling:*
| Test | Organ | Application |
|------|-------|-------------|
| AlloMap | Heart | Rule out moderate ACR |
| TruGraf | Kidney | Immune quiescence |
| HeartCare | Heart | Rejection risk |

*DSA Monitoring:*
| Timing | Indication |
|--------|------------|
| Pre-transplant | Baseline |
| Protocol | 3, 12 months, annual |
| For cause | Graft dysfunction |
| After events | Non-adherence, infection |

**Precision Infection Management:**

*CMV Viral Kinetics:*
\`\`\`
Monitoring Parameters:
- Peak viral load
- Doubling time
- Time to undetectable
- Rebound timing

Clinical Utility:
- Identify treatment failure early
- Guide duration of treatment
- Predict relapse risk
\`\`\`

*Resistant CMV:*
| Scenario | Approach |
|----------|----------|
| Rising VL on ganciclovir | Consider resistance testing |
| UL97 mutation | Consider foscarnet |
| UL54 mutation | May need cidofovir or maribavir |

*BK Management - Advanced:*
| Strategy | Evidence |
|----------|----------|
| Reduce tacrolimus target | Standard |
| Reduce/hold MPA | Standard |
| IVIG | Limited data |
| Cidofovir | Limited data, nephrotoxic |
| Leflunomide | Mixed evidence |

**Surveillance for Specific Complications:**

*Cardiac Allograft Vasculopathy (CAV):*
\`\`\`
Screening:
- Annual coronary angiography
- Consider IVUS (more sensitive)

Staging:
- CAV0: Normal
- CAV1: Mild (angiographic)
- CAV2: Moderate
- CAV3: Severe

Prevention:
- mTOR inhibitors may slow progression
- Statin therapy
- Aggressive risk factor control
\`\`\`

*Chronic Lung Allograft Dysfunction (CLAD):*
| Type | Features |
|------|----------|
| BOS | Obstructive, air trapping |
| RAS | Restrictive, fibrotic |
| Mixed | Features of both |

Monitoring: FEV1 quarterly, CT as needed

*Recurrent Disease:*
| Disease | Monitoring |
|---------|------------|
| FSGS | Urine protein, biopsy |
| Hepatitis C | HCV RNA, liver function |
| Hepatitis B | HBsAg, HBV DNA |
| Autoimmune hepatitis | Autoantibodies, biopsy |

**Long-Term Complications:**

*Post-Transplant Malignancy:*
\`\`\`
Skin Cancer:
- 20-50x increased SCC risk
- Annual dermatology exam
- Sun protection education
- Low threshold for biopsy

PTLD:
- EBV-related lymphoma
- Risk factors: EBV D+/R-, heavy IS
- Surveillance: EBV PCR in high-risk
- Treatment: Reduce IS, rituximab

Solid Tumors:
- Age-appropriate screening
- Consider more intensive in high-risk
\`\`\`

*Medication Toxicity - Long-term:*
| Drug | Toxicity | Monitoring |
|------|----------|------------|
| CNI | Nephrotoxicity, tremor, diabetes | Renal function, glucose |
| mTOR | Hyperlipidemia, proteinuria | Lipids, urine protein |
| MPA | Cytopenias, GI | CBC, symptoms |
| Steroids | Bone, metabolic, skin | DEXA, glucose |

**Transition to Long-Term Care:**

*Late Follow-Up Schedule:*
| Time | Frequency |
|------|-----------|
| Year 1-2 | Every 2-3 months |
| Year 2-5 | Every 3-4 months |
| >5 years | Every 4-6 months |

*Health Maintenance:*
- Immunizations (no live vaccines)
- Cancer screening
- Cardiovascular risk assessment
- Bone health
- Mental health screening`,
      keyTerms: [
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA; non-invasive biomarker of graft injury' },
        { term: 'CAV', definition: 'Cardiac allograft vasculopathy; chronic rejection of heart transplant affecting coronary arteries' },
        { term: 'CLAD', definition: 'Chronic lung allograft dysfunction; includes BOS and RAS phenotypes' },
        { term: 'BOS', definition: 'Bronchiolitis obliterans syndrome; obstructive CLAD' },
      ],
      clinicalNotes: 'dd-cfDNA is changing surveillance paradigms but should be interpreted in clinical context - non-rejection causes of graft injury also elevate levels. CAV is diffuse and concentric, often missed on angiography alone; IVUS is more sensitive. PTLD risk remains highest in EBV D+/R- recipients even years post-transplant; consider reducing immunosuppression if EBV viremia develops.',
    },
    5: {
      level: 5,
      summary: 'Expert post-transplant monitoring integrates multi-modal biomarker surveillance, precision medicine approaches, AI-driven risk prediction, and comprehensive strategies for optimizing both graft and patient survival over the lifespan.',
      explanation: `**Integrated Biomarker Surveillance:**

*Multi-Marker Approach:*
\`\`\`
Combining Biomarkers:
- dd-cfDNA: Graft injury signal
- DSA: Humoral immunity
- Gene expression: Immune state
- Histology: Gold standard

Sequential Testing:
1. dd-cfDNA screening
2. If elevated: DSA check
3. If either abnormal: Consider biopsy
4. Biopsy guides treatment

Cost-Effectiveness:
- May reduce routine biopsies
- Targeted approach
- Still being validated
\`\`\`

*Molecular Diagnostics in Biopsy:*
| Test | Application |
|------|-------------|
| MMDx | Molecular classification |
| Banff Integrative Diagnostics | Combine molecular + histology |
| C4d alternatives | SLC44A5 molecular marker |

**Precision Medicine Applications:**

*Risk Prediction Models:*
\`\`\`
iBox (Kidney):
- Integrates clinical, functional, histologic data
- Predicts 3 and 7-year graft survival
- Guides surveillance intensity

ABCD Score (Liver):
- Age, Bilirubin, Creatinine, Diabetes
- Predicts post-transplant outcomes
\`\`\`

*Pharmacogenomics in Practice:*
| Gene | Application |
|------|-------------|
| CYP3A5 | Tacrolimus initial dosing |
| CYP2C19 | PPIs (affects tacrolimus) |
| IMPDH | MPA response (research) |

**AI and Machine Learning:**

*Current Applications:*
| Domain | Application | Status |
|--------|-------------|--------|
| Rejection prediction | Multi-variable models | Research |
| Drug dosing | Population PK models | Some clinical |
| Image analysis | Histopathology AI | Emerging |
| Outcomes prediction | Risk scores | Clinical |

*Future Directions:*
- Real-time monitoring integration
- Automated alert systems
- Personalized surveillance protocols
- Treatment optimization

**Advanced Infection Management:**

*CMV Resistance:*
\`\`\`
Testing:
- Genotypic: UL97, UL54 mutations
- Phenotypic: Viral culture (slow)

Treatment Options:
| Resistance | Drug Options |
|------------|--------------|
| UL97 | Foscarnet, maribavir |
| UL54 | Cidofovir, maribavir |
| Multi-drug | Experimental (letermovir off-label) |

Novel Agents:
- Maribavir: Approved for refractory CMV
- Letermovir: UL56 inhibitor (prophylaxis approved for HSCT)
\`\`\`

*Novel Infection Diagnostics:*
| Technology | Application |
|------------|-------------|
| mNGS | Unbiased pathogen detection |
| Karius test | Blood cfDNA for infection |
| T-SPOT/QuantiFERON | TB screening |
| Beta-D-glucan | Fungal infection |

**Special Population Monitoring:**

*Pediatric Considerations:*
- Growth monitoring
- Developmental assessment
- Non-adherence (adolescents)
- Transition to adult care

*Pregnancy Post-Transplant:*
\`\`\`
Monitoring:
- Monthly graft function
- Proteinuria screening
- Drug levels (may need adjustment)
- High-risk OB management

Immunosuppression:
- Continue tacrolimus (safe)
- Stop MMF 6 weeks before conception
- Low-dose prednisone acceptable
\`\`\`

**Long-Term Survival Optimization:**

*Cardiovascular Prevention:*
| Target | Approach |
|--------|----------|
| BP <130/80 | ACE/ARB preferred |
| LDL per ASCVD risk | Statins (mind interactions) |
| Glucose control | A1c <7% if tolerated |
| Lifestyle | Exercise, diet, weight |

*Frailty Assessment:*
- Emerging concern in aging recipients
- Fried Frailty Index
- Guides intervention intensity
- Affects survival independently

*Quality of Life:*
- Validated instruments (SF-36, etc.)
- Mental health screening
- Employment support
- Sexual health counseling

**Health Systems Considerations:**

*Care Coordination:*
\`\`\`
Team Model:
- Transplant center (primary)
- PCP (health maintenance)
- Specialists (as needed)
- Pharmacy (adherence, interactions)

Communication:
- Shared records/EMR access
- Clear roles defined
- Medication reconciliation
- Urgent access protocols
\`\`\`

*Telemedicine:*
- Remote monitoring integration
- Virtual visits for stable patients
- Home vital signs/labs
- May improve access and adherence

*Transition of Care:*
- Pediatric to adult
- Transplant center to community
- Standardized handoff protocols
- Risk identification during transition`,
      keyTerms: [
        { term: 'iBox', definition: 'Integrative prediction model for kidney allograft survival' },
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing; detects pathogens without prior suspicion' },
        { term: 'maribavir', definition: 'Novel CMV antiviral approved for refractory/resistant CMV infection' },
        { term: 'Fried Frailty Index', definition: 'Assessment tool for frailty predicting outcomes in transplant recipients' },
      ],
      clinicalNotes: 'Integrated biomarker surveillance is changing practice but optimal protocols are still being established. AI-based prediction models show promise but require validation before widespread clinical use. Maribavir offers a new option for resistant CMV but is expensive. Frailty assessment should be incorporated into long-term follow-up as the transplant population ages.',
    },
  },

  media: [
    {
      id: 'monitoring-1',
      type: 'diagram',
      filename: 'transplant-monitoring-timeline.svg',
      title: 'Post-Transplant Monitoring Timeline',
      description: 'Schedule of surveillance activities by time post-transplant',
    },
  ],

  citations: [
    {
      id: 'kdigo-care',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'American Journal of Transplantation',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'transplant-immunosuppression-basics', targetType: 'concept', relationship: 'related', label: 'Immunosuppression Basics' },
    { targetId: 'transplant-transplant-complications', targetType: 'concept', relationship: 'see-also', label: 'Transplant Complications' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'monitoring', 'follow-up'],
    keywords: ['transplant', 'monitoring', 'surveillance', 'CMV', 'BK virus', 'drug levels'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
