/**
 * Infection Prevention - Comprehensive Educational Content
 *
 * Covers transplant infection prophylaxis: antimicrobial protocols, vaccination,
 * risk stratification, and management of common opportunistic infections.
 */

import { EducationalContent } from '../../types';

export const infectionPrevention: EducationalContent = {
  id: 'topic-infection-prevention',
  type: 'topic',
  name: 'Infection Prevention',
  alternateNames: ['Infection Prophylaxis', 'Transplant Infections', 'Opportunistic Infection Prevention', 'Antimicrobial Prophylaxis'],

  levels: {
    1: {
      level: 1,
      summary: 'Infection prevention means taking medicines and precautions to protect against infections, which are more common and more dangerous after transplant because anti-rejection medicines weaken the immune system.',
      explanation: `After a transplant, you take medicines to prevent rejection. These medicines also weaken your immune system, making you more likely to get infections and less able to fight them off.

**Why Infection Prevention Is Important:**

- Your immune system is weakened by anti-rejection medicines
- Infections can be more serious than in healthy people
- Some infections are rare in healthy people but common after transplant
- Prevention is much easier than treating infections

**Types of Prevention:**

1. **Preventive Medicines**
   - Antibiotics for bacterial infections
   - Antivirals for viruses (especially CMV)
   - Antifungals for fungal infections
   - Usually taken for 3-6 months after transplant

2. **Vaccines**
   - Get vaccines before transplant when possible
   - Flu shot every year
   - Pneumonia vaccine
   - COVID-19 vaccines
   - NO live vaccines after transplant

3. **Daily Precautions**
   - Wash hands often
   - Avoid sick people
   - Cook meat thoroughly
   - Avoid raw or undercooked foods
   - Be careful with pets
   - Wear a mask in crowded places (especially early after transplant)

**Common Infections to Prevent:**

- **CMV (Cytomegalovirus)**: A common virus that can cause serious problems
- **PCP (Pneumocystis pneumonia)**: A type of lung infection
- **Fungal infections**: From soil, mold, or certain foods
- **Urinary tract infections**: Common in kidney transplant patients

**Warning Signs - Call Your Team Immediately:**

- Fever over 100.4°F (38°C)
- Chills or shaking
- Cough or shortness of breath
- Pain when urinating
- Diarrhea
- New rash or sores
- Headache with stiff neck`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Taking medicine to prevent an infection before it happens' },
        { term: 'CMV', definition: 'Cytomegalovirus; a common virus that can cause serious problems in transplant patients' },
        { term: 'PCP', definition: 'Pneumocystis pneumonia; a lung infection that transplant patients need protection against' },
        { term: 'opportunistic infection', definition: 'An infection caused by germs that usually do not cause disease in healthy people' },
      ],
      analogies: [
        'Preventive medicines are like a security system for your body when your immune "guards" are on reduced duty.',
        'Taking prophylaxis is like carrying an umbrella - you protect yourself before the rain starts.',
        'Your weakened immune system is like a castle with fewer guards - you need extra protective walls (medicines and precautions).',
      ],
      examples: [
        'A kidney transplant patient takes trimethoprim-sulfamethoxazole every day for 6 months to prevent PCP.',
        'A patient gets their flu shot before transplant and every year afterward.',
        'A transplant patient wears a mask and washes hands frequently during the first months after transplant.',
      ],
      patientCounselingPoints: [
        'Take your preventive medicines exactly as prescribed',
        'Call immediately for any fever over 100.4°F',
        'Wash hands frequently, especially before eating',
        'Avoid raw or undercooked meats, fish, and eggs',
        'Get your flu shot every year',
        'Tell your transplant team before getting any vaccines',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplant recipients require targeted antimicrobial prophylaxis against opportunistic infections (PCP, CMV, fungal) based on risk stratification, donor/recipient serostatus, and post-transplant timeline, along with appropriate vaccination and lifestyle precautions.',
      explanation: `## Timeline of Infection Risk

Post-transplant infection risk follows a predictable pattern:

| Period | Timeline | Common Pathogens | Risk Factors |
|--------|----------|------------------|--------------|
| Early | 0-1 month | Hospital bacteria, surgical site, Candida | Surgery, catheters, ICU |
| Middle | 1-6 months | CMV, PCP, BK virus, hepatitis | Peak immunosuppression |
| Late | >6 months | Community-acquired, cryptococcus | Chronic immunosuppression |

## Standard Prophylaxis Protocols

### Pneumocystis jirovecii (PCP)

**First-line:**
- Trimethoprim-sulfamethoxazole (TMP-SMX)
- Dose: Single-strength daily OR double-strength 3x/week
- Duration: 6-12 months minimum, often lifelong for some organs

**Alternatives (sulfa allergy):**
- Dapsone 100 mg daily
- Atovaquone 1500 mg daily
- Aerosolized pentamidine 300 mg monthly

### Cytomegalovirus (CMV)

**Risk Stratification:**
| Donor (D) | Recipient (R) | Risk Level | Approach |
|-----------|---------------|------------|----------|
| D+ | R- | Highest (D+/R-) | Prophylaxis 6 months |
| D+ | R+ | Intermediate | Prophylaxis 3 months |
| D- | R+ | Intermediate | Prophylaxis or preemptive |
| D- | R- | Lowest | No routine prophylaxis |

**Prophylaxis Regimens:**
- Valganciclovir 900 mg daily (adjust for renal function)
- Duration: 3-6 months based on risk

**Preemptive Approach:**
- Weekly CMV PCR monitoring
- Treat only if viremia detected
- May reduce drug toxicity
- Requires reliable monitoring

### Fungal Prophylaxis

**High-Risk Settings:**
- Lung transplant: Prophylaxis standard (fluconazole, voriconazole, or inhaled amphotericin)
- Liver transplant: Consider if high risk
- Kidney transplant: Not routine

**Agents:**
- Fluconazole 100-200 mg daily
- Voriconazole (lung, aspergillosis risk)
- Nystatin swish and swallow (oral candidiasis)

## Vaccination

### Pre-Transplant (Optimal)
Complete all routine vaccinations before transplant when immune system is functional:
- Pneumococcal (PCV13 and PPSV23)
- Influenza (annual)
- Hepatitis B series
- Tdap
- MMR, Varicella (live vaccines - give early if needed)
- COVID-19 series

### Post-Transplant
**Safe Vaccines (inactivated):**
- Influenza (annual, high-dose or adjuvanted may help)
- Pneumococcal boosters
- Hepatitis B boosters if non-responder
- COVID-19 vaccines
- Tdap

**Avoid (live vaccines):**
- MMR
- Varicella
- Live attenuated influenza (LAIV)
- Yellow fever
- Oral polio
- BCG

### Vaccine Response
- Response often suboptimal
- Check antibody titers
- May need additional doses
- Close contacts should be vaccinated

## Lifestyle Precautions

### Food Safety
- No raw or undercooked meat, fish, eggs
- Pasteurized dairy only
- Wash fruits and vegetables
- Avoid soft cheeses
- No unpasteurized juices

### Environmental Precautions
- Avoid gardening without gloves (soil fungi)
- Avoid construction sites (aspergillus)
- Clean home to prevent mold
- Careful with pets (cat litter, reptiles)

### Social Precautions
- Avoid sick contacts
- Mask in crowded places (especially early post-transplant)
- Hand hygiene
- Dental hygiene and regular dental care`,
      keyTerms: [
        { term: 'serostatus', definition: 'Whether someone has antibodies against a pathogen (seropositive) or not (seronegative)' },
        { term: 'D+/R-', definition: 'Donor positive, recipient negative; highest risk for CMV transmission' },
        { term: 'preemptive therapy', definition: 'Monitoring for infection and treating at first sign rather than universal prophylaxis' },
        { term: 'live vaccine', definition: 'Vaccine containing weakened live virus; contraindicated after transplant' },
        { term: 'inactivated vaccine', definition: 'Vaccine without live virus; safe after transplant but may be less effective' },
        { term: 'valganciclovir', definition: 'The main antiviral used for CMV prophylaxis and treatment' },
      ],
      analogies: [
        'CMV serostatus matching is like knowing if the donor and recipient have encountered the same "enemy" - the recipient who has never seen it is most vulnerable.',
        'Preemptive therapy is like having a smoke detector - you do not spray the fire extinguisher until you detect smoke.',
        'Live vaccines after transplant are like sending in untrained soldiers - your weakened immune system cannot handle them.',
      ],
    },
    3: {
      level: 3,
      summary: 'Post-transplant infection prevention requires understanding immunosuppression-pathogen interactions, evidence-based prophylaxis protocols, risk-adapted strategies for CMV and other opportunistic infections, and comprehensive vaccination approaches accounting for altered immune responses.',
      explanation: `## Immune Deficits Post-Transplant

### Net State of Immunosuppression

**Components:**
1. Immunosuppressive medications (CNI, antimetabolites, steroids)
2. Underlying disease effects
3. Technical/anatomic factors (drains, catheters, anastomoses)
4. Viral infections affecting immunity (CMV immunomodulation)
5. Metabolic conditions (diabetes, uremia, malnutrition)

### Specific Immune Deficits

| Drug | Primary Effect | Infection Risk |
|------|---------------|----------------|
| CNI (tacrolimus, cyclosporine) | T-cell inhibition | Viral, intracellular bacteria |
| Mycophenolate | B and T-cell inhibition | CMV, PCP, bacterial |
| Steroids | Broad anti-inflammatory | Bacterial, fungal, viral |
| ATG/Thymoglobulin | T-cell depletion | CMV, EBV, severe infections |
| Alemtuzumab | Pan-lymphocyte depletion | Profound, prolonged risk |

## CMV Management - Deep Dive

### Pathophysiology

**CMV Latency and Reactivation:**
- Latent virus in myeloid progenitor cells
- Reactivation with immunosuppression
- D+/R- highest risk (primary infection)
- R+ recipients: reactivation vs superinfection

**Direct vs Indirect Effects:**
- Direct: CMV syndrome, tissue-invasive disease
- Indirect: Rejection, other infections, graft dysfunction

### Prophylaxis vs Preemptive Strategy

**Universal Prophylaxis:**
- All at-risk patients receive antivirals
- Duration: 3-6 months (organ and risk-dependent)
- Pros: Simple, effective prevention
- Cons: Cost, toxicity, late-onset CMV

**Preemptive Therapy:**
- Regular CMV PCR monitoring
- Treat when viremia detected (threshold varies)
- Pros: Less drug exposure
- Cons: Requires reliable monitoring, some breakthrough

**Evidence:**
- Both approaches effective
- Prophylaxis may be superior for D+/R-
- Preemptive reasonable for R+ patients
- Hybrid approaches (prophylaxis then preemptive) increasingly used

### CMV Disease Syndromes

**CMV Syndrome:**
- Fever, malaise, leukopenia
- Viremia without organ involvement
- Treatment: Valganciclovir or ganciclovir IV

**Tissue-Invasive Disease:**
| Organ | Presentation | Diagnosis |
|-------|--------------|-----------|
| GI (most common) | Diarrhea, pain, bleeding | Endoscopy + biopsy |
| Pneumonitis | Cough, hypoxia, infiltrates | BAL, biopsy |
| Hepatitis | LFT elevation | Biopsy |
| Retinitis | Vision changes | Fundoscopy |

**Treatment:**
- IV ganciclovir 5 mg/kg BID for serious disease
- Duration: 2-3 weeks minimum
- Until symptoms resolve AND viremia cleared
- Secondary prophylaxis may follow

### CMV Resistance

**Risk Factors:**
- Prolonged low-level viremia
- Subtherapeutic drug levels
- D+/R- serostatus

**Testing:**
- UL97 mutations: Ganciclovir resistance
- UL54 mutations: Ganciclovir, cidofovir, foscarnet resistance

**Treatment Options:**
- Increase ganciclovir dose (if low-level resistance)
- Foscarnet (nephrotoxic, electrolyte abnormalities)
- Cidofovir (nephrotoxic)
- Maribavir (FDA approved for resistant CMV)
- Letermovir (prophylaxis, not for active disease)

## PCP Prophylaxis - Detailed

### TMP-SMX Benefits Beyond PCP

- Toxoplasma prophylaxis
- Listeria prophylaxis
- Nocardia prophylaxis
- UTI reduction

### Alternative Agent Considerations

| Agent | Dosing | Pros | Cons |
|-------|--------|------|------|
| Dapsone | 100 mg daily | Effective, cheap | G6PD hemolysis, methemoglobinemia |
| Atovaquone | 1500 mg daily | Well-tolerated | Expensive, food-dependent absorption |
| Pentamidine | 300 mg monthly inhaled | No systemic toxicity | Only pulmonary protection, bronchospasm |

### Duration Considerations

**Minimum:**
- Most centers: 6-12 months
- Longer if ongoing rejection treatment
- Some: Lifelong for certain organs

**Discontinuation Criteria:**
- Stable immunosuppression
- Good graft function
- Low CD4 count (if measured) may prompt continuation

## BK Virus

### Epidemiology
- DNA polyomavirus
- Primarily kidney transplant problem
- 1-10% develop BK nephropathy
- Peak incidence: 3-6 months post-transplant

### Surveillance
- Plasma BK PCR monthly for first 6 months
- Then every 3 months for 2 years
- Viruria precedes viremia

### Prevention/Treatment
- No specific antiviral
- Primary treatment: Reduce immunosuppression
- Target tacrolimus trough <6 ng/mL
- Reduce mycophenolate
- Consider cidofovir, leflunomide, IVIG (limited data)

## Fungal Infections

### Risk Stratification

**High Risk:**
- Lung and liver transplant
- Re-transplant
- Post-rejection treatment with ATG
- Prolonged hospitalization
- Renal replacement therapy
- CMV disease

### Aspergillosis

**Prevention (high-risk):**
- Inhaled amphotericin B (lung transplant)
- Voriconazole in some protocols

**Treatment:**
- Voriconazole first-line
- Isavuconazole alternative
- Monitor drug levels
- Manage CNI interactions

### Cryptococcus

**Timeline:**
- Late infection (>6 months)
- CNS involvement common

**Treatment:**
- Liposomal amphotericin B + flucytosine (induction)
- Fluconazole (consolidation and maintenance)`,
      keyTerms: [
        { term: 'net state of immunosuppression', definition: 'Cumulative effect of all factors affecting immune function' },
        { term: 'CMV syndrome', definition: 'Systemic CMV infection without organ involvement' },
        { term: 'tissue-invasive CMV', definition: 'CMV infection with documented organ involvement' },
        { term: 'maribavir', definition: 'Novel antiviral for treatment-resistant CMV' },
        { term: 'BK nephropathy', definition: 'BK virus infection causing kidney graft injury' },
        { term: 'G6PD', definition: 'Glucose-6-phosphate dehydrogenase; deficiency causes hemolysis with dapsone' },
      ],
      clinicalNotes: 'CMV prophylaxis duration is risk-dependent: 6 months for D+/R-, 3 months for R+. Always adjust valganciclovir for renal function. TMP-SMX provides protection beyond just PCP. BK virus has no specific antiviral - reducing immunosuppression is the treatment. Late infections (>6 months) often reflect community-acquired pathogens but can include opportunistic infections in over-immunosuppressed patients.',
    },
    4: {
      level: 4,
      summary: 'Contemporary infection prevention integrates precision risk stratification, optimized antimicrobial selection considering resistance and interactions, advanced viral monitoring strategies, and individualized vaccination approaches to balance infection prevention with immunosuppression optimization.',
      explanation: `## Risk-Stratified Prevention Protocols

### CMV Risk Stratification

**High Risk (D+/R-):**
- Universal prophylaxis 6 months
- Or hybrid: 3 months prophylaxis + preemptive
- Consider CMV-specific immune monitoring

**Intermediate Risk (R+):**
- Prophylaxis 3 months OR preemptive
- Choice depends on resources and patient factors
- Preemptive may reduce late-onset CMV

**Low Risk (D-/R-):**
- No specific CMV prophylaxis
- Monitor for healthcare-associated transmission

### Intensity of Immunosuppression

**Induction Therapy Impact:**
| Induction | CMV Risk | Recommended Approach |
|-----------|----------|---------------------|
| Basiliximab | Lower | Standard protocols |
| Thymoglobulin/ATG | Higher | Extended prophylaxis, closer monitoring |
| Alemtuzumab | Highest | Extended prophylaxis, intensified monitoring |

## Drug Interactions and Toxicity Management

### Valganciclovir Considerations

**Renal Dosing:**
| CrCl (mL/min) | Prophylaxis Dose | Treatment Dose |
|---------------|------------------|----------------|
| ≥60 | 900 mg daily | 900 mg BID |
| 40-59 | 450 mg daily | 450 mg BID |
| 25-39 | 450 mg q48h | 450 mg daily |
| 10-24 | 450 mg 2x/week | 450 mg q48h |

**Myelosuppression:**
- Common, dose-limiting
- Monitor CBC weekly during treatment
- G-CSF may allow continuation
- Alternative agents if severe

### Azole Antifungal Interactions

**CNI Interaction Management:**
| Azole | Tacrolimus Dose Adjustment | Monitoring |
|-------|---------------------------|------------|
| Fluconazole | Reduce 25-50% | Check level in 3-5 days |
| Voriconazole | Reduce 50-66% | Check level in 3-5 days |
| Posaconazole | Reduce 50-66% | Check level in 3-5 days |
| Isavuconazole | Reduce 25-50% | Check level in 3-5 days |

**TDM for Azoles:**
- Voriconazole: Target trough 1-5.5 mg/L
- Posaconazole: Target >1 mg/L (prophylaxis), >1.5 mg/L (treatment)
- Isavuconazole: Levels less critical but can guide

## Advanced CMV Monitoring

### CMV PCR Interpretation

**Viral Load Thresholds:**
- Varies by assay and organ
- Preemptive treatment threshold: Often >1000 IU/mL
- Higher thresholds may be appropriate if low risk
- Trend matters as much as absolute value

### CMV-Specific Immunity Monitoring

**QuantiFERON-CMV:**
- Measures CMV-specific T-cell response
- May predict who can safely discontinue prophylaxis
- Not yet standard practice

**CMV-Specific T-Cell Assays:**
- Research tools becoming clinical
- May guide prophylaxis duration
- Identify patients at risk despite prophylaxis

### Late-Onset CMV

**Definition:**
- CMV disease occurring after prophylaxis ends

**Risk Factors:**
- D+/R- serostatus
- Longer prophylaxis duration (paradoxically)
- Lack of CMV-specific immunity development

**Prevention:**
- Hybrid strategy (prophylaxis then preemptive)
- Consider extended prophylaxis in high-risk
- Monitor for delayed immunity development

## EBV and Post-Transplant Lymphoproliferative Disorder (PTLD)

### Risk Stratification

**Highest Risk:**
- EBV D+/R- (primary EBV infection)
- Pediatric recipients
- T-cell depleting induction

### Prevention Strategies

- No effective prophylaxis (antivirals don't prevent PTLD)
- Minimize immunosuppression
- EBV viral load monitoring (especially D+/R-)
- Early intervention for rising viral load

### Management

**Rising EBV Viral Load:**
- Reduce immunosuppression
- Monitor closely for PTLD

**Established PTLD:**
- Reduction of immunosuppression
- Rituximab (anti-CD20)
- Chemotherapy if progressive

## Vaccination Optimization

### Enhancing Vaccine Response

**Timing Strategies:**
- Vaccinate before transplant (best response)
- Post-transplant: Wait 3-6 months if possible
- Avoid peak immunosuppression periods

**Adjuvanted Vaccines:**
- High-dose influenza may improve response
- Adjuvanted vaccines under study

### Measuring Response

**Check Titers:**
- Hepatitis B surface antibody
- Pneumococcal antibodies
- Consider revaccination if non-responsive

### Household Contacts

**Importance:**
- Cocooning strategy
- All close contacts should be vaccinated
- Includes influenza, COVID-19
- Live vaccines okay for contacts (except avoid varicella if shedding)

## Special Infections

### Tuberculosis

**Pre-Transplant Screening:**
- Tuberculin skin test or IGRA
- Treat latent TB before transplant
- INH 9 months or rifampin 4 months

**Post-Transplant:**
- TB can reactivate
- High mortality if untreated
- Treatment complicated by rifampin interactions

### Strongyloides

**Pre-Transplant Screening:**
- Especially if endemic exposure
- Serology
- Treat if positive (ivermectin)

**Risk:**
- Hyperinfection syndrome with immunosuppression
- Can be fatal

### Hepatitis B and C

**HBV:**
- Prophylaxis with lamivudine or entecavir if at risk
- Monitor for reactivation

**HCV:**
- Direct-acting antivirals have transformed management
- Treat before or after transplant
- SVR achievable even post-transplant`,
      keyTerms: [
        { term: 'late-onset CMV', definition: 'CMV disease occurring after prophylaxis discontinuation' },
        { term: 'QuantiFERON-CMV', definition: 'Assay measuring CMV-specific T-cell immunity' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-associated malignancy' },
        { term: 'cocooning', definition: 'Vaccinating household contacts to protect immunocompromised patient' },
        { term: 'IGRA', definition: 'Interferon-gamma release assay; test for tuberculosis exposure' },
        { term: 'hyperinfection syndrome', definition: 'Disseminated Strongyloides infection in immunosuppressed patients' },
      ],
      clinicalNotes: 'Azole antifungals require proactive CNI dose reduction and close level monitoring. Late-onset CMV is emerging as a problem with longer prophylaxis - consider hybrid strategies. EBV viral load monitoring is crucial in high-risk (D+/R-) recipients. Screen for latent TB and Strongyloides before transplant to prevent reactivation. Household contact vaccination is an underutilized prevention strategy.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art infection prevention integrates novel diagnostics (pathogen-specific immunity monitoring, multiplex molecular panels), emerging antivirals, precision vaccination strategies, and risk-adapted protocols informed by genomics and immunologic biomarkers to optimize protection while minimizing toxicity and drug interactions.',
      explanation: `## Current Guidelines and Evidence Updates

### AST/IDSA Transplant ID Guidelines

**Key Recommendations:**
- Universal PCP prophylaxis (minimum 6-12 months)
- CMV prophylaxis or preemptive approach based on risk
- Pre-transplant vaccination completion
- Lifestyle education for all recipients

### Recent Advances

**CMV:**
- Maribavir FDA approved for refractory CMV
- Letermovir in kidney transplant under study
- CMV-specific immunity assays emerging

**COVID-19:**
- Additional vaccine doses recommended
- Variable responses in transplant recipients
- Monoclonal antibodies for prophylaxis (if available)

## Novel Antimicrobials

### Maribavir

**Mechanism:**
- UL97 kinase inhibitor
- Different mechanism than ganciclovir

**Indications:**
- Refractory or resistant CMV
- Post-transplant CMV not responding to standard therapy

**Dosing:**
- 400 mg twice daily
- 8 weeks treatment

**Advantages:**
- Less myelosuppression
- Oral administration

**Limitations:**
- Less virological efficacy than ganciclovir
- Taste disturbance common
- Drug interactions (CYP3A4)

### Letermovir

**Mechanism:**
- CMV terminase inhibitor
- Novel target

**Current Use:**
- Approved for CMV prophylaxis in HSCT
- Under investigation in solid organ transplant

**Potential Advantages:**
- No myelosuppression
- Different resistance profile

### Brincidofovir

**Status:**
- Approved for smallpox
- Studied in CMV and adenovirus
- Development issues in transplant

## Immune Monitoring Advances

### CMV-Specific Immunity

**QuantiFERON-CMV:**
- IFN-γ response to CMV antigens
- May predict late-onset CMV risk
- Could guide prophylaxis duration

**ELISpot Assays:**
- CMV-specific T-cell enumeration
- Research tool becoming clinical
- May identify patients safe to discontinue prophylaxis

### Pathogen-Specific Immunity Panels

**Multi-Pathogen Assessment:**
- Simultaneous assessment of immunity to CMV, EBV, BK, etc.
- Guide individualized surveillance
- Research stage

## Vaccination Science

### Enhanced Vaccine Strategies

**Adjuvanted Vaccines:**
- AS01B adjuvant (e.g., Shingrix)
- May improve response in immunocompromised
- Under study in transplant

**High-Dose Influenza:**
- 4x standard antigen dose
- May improve response in transplant recipients
- Some guidelines recommend

### mRNA Vaccines

**COVID-19 Experience:**
- Lower response rates in transplant recipients
- Additional doses improve response
- Ongoing optimization needed

**Future Applications:**
- Platform potentially applicable to other pathogens
- CMV mRNA vaccine in development

### Tolerance-Inducing Approaches

**Concept:**
- Vaccines that induce tolerance rather than immunity
- Could prevent rejection while allowing immunity to pathogens
- Very early research

## Precision Prevention

### Genetic Risk Factors

**Host Genetics:**
- Certain HLA types associated with CMV control
- TLR polymorphisms affect fungal infection risk
- May guide intensity of prophylaxis

**Pathogen Genomics:**
- CMV strain typing
- Resistance gene detection
- Epidemiologic investigation

### Biomarker-Guided Prophylaxis

**Concept:**
- Use immune monitoring to guide prophylaxis duration
- Discontinue when immunity demonstrated
- Continue if immunity lacking

**Implementation:**
- CMV-specific T-cell assays at end of prophylaxis
- If adequate immunity: discontinue
- If inadequate: extend or intensify monitoring

## Special Populations

### Pediatric Considerations

**Higher Infection Risk:**
- EBV D+/R- more common
- Primary CMV infection more severe
- Less pre-transplant immunity

**Vaccination:**
- Complete childhood vaccines before transplant
- Catch-up vaccinations post-transplant challenging

### Highly Sensitized Recipients

**Desensitization Impact:**
- Rituximab, plasmapheresis deplete immunity
- Higher infection risk post-transplant
- Consider extended prophylaxis

### Re-Transplant

**Cumulative Immunosuppression:**
- Increased infection risk
- May have unusual pathogen exposure history
- Individualized prophylaxis needed

## Future Directions

### Microbiome and Infection

**Concept:**
- Gut microbiome affects immune function
- Dysbiosis may increase infection risk
- Potential for microbiome-targeted interventions

**Research:**
- Characterizing post-transplant microbiome
- Identifying protective vs harmful bacteria
- Fecal microbiota transplant for C. difficile

### Immunotherapy

**Adoptive T-Cell Therapy:**
- CMV-specific T-cells from donor or third-party
- Used in HSCT, being studied in solid organ
- Could treat refractory viral infections

**Checkpoint Inhibitors:**
- Potential for enhancing antiviral immunity
- Risk of precipitating rejection
- Very limited use currently`,
      keyTerms: [
        { term: 'maribavir', definition: 'Novel UL97 kinase inhibitor for treatment-refractory CMV' },
        { term: 'letermovir', definition: 'CMV terminase inhibitor approved for HSCT prophylaxis' },
        { term: 'ELISpot', definition: 'Enzyme-linked immunospot assay quantifying pathogen-specific T-cells' },
        { term: 'adoptive T-cell therapy', definition: 'Infusion of pathogen-specific T-cells to treat infection' },
        { term: 'microbiome', definition: 'Community of microorganisms living in the body, especially the gut' },
        { term: 'brincidofovir', definition: 'Lipid conjugate of cidofovir with broader antiviral activity' },
      ],
      clinicalNotes: `Key clinical pearls for infection prevention:

1. **CMV Strategy Selection**: D+/R- requires universal prophylaxis. R+ can use preemptive approach if reliable monitoring available. Hybrid strategies may reduce late-onset CMV.

2. **Drug Interactions**: All azole antifungals significantly increase CNI levels. Proactively reduce tacrolimus/cyclosporine dose when starting and check levels within 3-5 days.

3. **Maribavir**: New option for refractory CMV. Less myelosuppression than ganciclovir but may be less effective. Reserve for true resistance.

4. **Immune Monitoring**: CMV-specific T-cell assays may help decide when to safely discontinue prophylaxis. Not yet standard but promising.

5. **Vaccination**: Complete vaccines before transplant. Post-transplant, avoid live vaccines. Additional COVID-19 doses improve response.

6. **Don't Forget**: Screen for latent TB and Strongyloides pre-transplant. Reactivation can be fatal.

7. **EBV/PTLD**: Monitor EBV viral loads in high-risk patients. Reduction of immunosuppression is first-line for rising viral loads.`,
    },
  },

  media: [
    {
      id: 'infection-timeline',
      type: 'diagram',
      filename: 'post-transplant-infection-timeline.svg',
      title: 'Post-Transplant Infection Timeline',
      description: 'Common pathogens by time period after transplantation',
    },
    {
      id: 'cmv-prevention-algorithm',
      type: 'diagram',
      filename: 'cmv-prophylaxis-algorithm.svg',
      title: 'CMV Prevention Algorithm',
      description: 'Risk-stratified approach to CMV prophylaxis and monitoring',
    },
  ],

  citations: [
    {
      id: 'ast-cmv-guidelines',
      type: 'article',
      title: 'CMV in Solid Organ Transplantation: AST Infectious Diseases Community of Practice',
      authors: ['Kotton CN', 'Kumar D', 'et al.'],
      source: 'American Journal of Transplantation',
      url: 'https://doi.org/10.1111/ajt.14088',
    },
    {
      id: 'maribavir-approval',
      type: 'article',
      title: 'Maribavir for Refractory Cytomegalovirus Infections in Hematopoietic-Cell and Solid-Organ Transplant Recipients',
      authors: ['Avery RK', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'transplant-vaccination',
      type: 'article',
      title: 'Vaccination of the Immunocompromised Host: Recommendations of the Advisory Committee on Immunization Practices',
      source: 'MMWR Recommendations and Reports',
    },
  ],

  crossReferences: [
    { targetId: 'topic-calcineurin-inhibitors', targetType: 'topic', relationship: 'related', label: 'Calcineurin Inhibitors' },
    { targetId: 'topic-antimetabolites', targetType: 'topic', relationship: 'related', label: 'Antimetabolites' },
    { targetId: 'topic-rejection-monitoring', targetType: 'topic', relationship: 'related', label: 'Rejection Monitoring' },
  ],

  tags: {
    systems: ['immune', 'infectious-disease'],
    topics: ['transplant', 'infectious-disease', 'prevention'],
    keywords: ['CMV', 'PCP', 'prophylaxis', 'vaccination', 'valganciclovir', 'opportunistic infection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default infectionPrevention;
