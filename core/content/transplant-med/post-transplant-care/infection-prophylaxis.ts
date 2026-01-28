/**
 * Infection Prophylaxis
 *
 * Comprehensive coverage of infection prevention strategies in transplant recipients,
 * including antimicrobial prophylaxis, vaccination, and infection surveillance.
 */

import { EducationalContent } from '../../types';

export const infectionProphylaxis: EducationalContent = {
  id: 'transplant-infection-prophylaxis',
  type: 'concept',
  name: 'Infection Prophylaxis',
  alternateNames: ['Infection Prevention', 'Antimicrobial Prophylaxis', 'Transplant Infections', 'Preventive Antibiotics'],

  levels: {
    1: {
      level: 1,
      summary: 'Infection prophylaxis means taking medications and precautions to prevent infections, which are more common and serious in transplant patients due to immunosuppression.',
      explanation: `**Why Infection Prevention Matters:**

After a transplant, the medications that prevent rejection also weaken your immune system. This makes it easier to get infections and harder to fight them off.

**Types of Prevention:**

1. **Medications to Prevent Infections**
   - Antibiotics (for certain bacteria)
   - Antivirals (for viruses like CMV)
   - Antifungals (for fungal infections)
   - Usually taken for 3-6 months after transplant

2. **Vaccines**
   - Important before and after transplant
   - Some vaccines cannot be given after transplant
   - Flu shot every year
   - COVID-19 vaccination recommended

3. **Lifestyle Precautions**
   - Wash hands frequently
   - Avoid sick people when possible
   - Food safety practices
   - Pet precautions

**Common Infections to Prevent:**

- Cytomegalovirus (CMV)
- Pneumocystis pneumonia (PCP)
- Fungal infections
- Urinary tract infections
- Respiratory infections

**Important Tips:**

- Take preventive medications exactly as prescribed
- Report any fever immediately
- Avoid raw or undercooked foods
- Be careful with gardening (fungus in soil)
- Tell your doctor about any travel plans

**How Long Prevention Continues:**

- Some medications: 3-6 months
- Some: lifelong (depending on risk)
- Vaccines: regularly scheduled boosters
- Precautions: ongoing awareness`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Treatment to prevent disease or infection' },
        { term: 'immunosuppression', definition: 'Weakening of the immune system by medications' },
        { term: 'CMV', definition: 'Cytomegalovirus, a common virus that can cause serious problems after transplant' },
        { term: 'PCP', definition: 'Pneumocystis pneumonia, a type of lung infection' },
      ],
      analogies: [
        'Infection prophylaxis is like wearing a raincoat in a storm - it protects you from getting wet even though you are outside.',
        'Think of preventive medications as security guards standing watch to stop invaders before they can attack.',
      ],
      examples: [
        'A transplant patient takes valganciclovir daily for 6 months to prevent CMV infection.',
        'A patient receives pneumonia and flu vaccines before transplant surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplant recipients require targeted antimicrobial prophylaxis against opportunistic infections based on risk stratification, donor/recipient serostatus, and time post-transplant. Prophylaxis protocols follow the timeline of immunosuppression intensity.',
      explanation: `**Timeline of Infection Risk:**

| Phase | Timeframe | Risk Factors | Key Pathogens |
|-------|-----------|--------------|---------------|
| Early | 0-1 month | Surgery, catheters, ICU | Bacterial, candida, HSV |
| Middle | 1-6 months | Intense immunosuppression | CMV, PCP, BK, hepatitis |
| Late | >6 months | Community exposure, chronic IS | Community respiratory, NTM, cancer |

**Standard Prophylaxis Protocols:**

*Pneumocystis jirovecii Pneumonia (PCP):*
- Agent: Trimethoprim-sulfamethoxazole (TMP-SMX)
- Dose: Single strength daily or double strength 3x/week
- Duration: Minimum 6 months, often longer
- Alternatives: Dapsone, atovaquone, pentamidine (if sulfa allergy)

*Cytomegalovirus (CMV):*

Risk stratification:
- High risk: D+/R- (donor positive, recipient negative)
- Moderate risk: R+, D+/R+, D-/R+
- Low risk: D-/R-

Prophylaxis:
- Valganciclovir 900 mg daily (high risk: 6 months, moderate: 3 months)
- Ganciclovir IV if unable to take oral
- Preemptive therapy alternative in some centers

*Fungal Prophylaxis:*

Indications:
- Lung transplant (universal)
- Liver transplant with high MELD
- High-risk kidney (diabetes, retransplant)
- Pancreas transplant

Agents:
- Fluconazole 200-400 mg daily
- Voriconazole, posaconazole (lung)
- Duration: 3-6 months typically

*Oral Candidiasis:*
- Nystatin suspension or clotrimazole troches
- Duration: 1-3 months

*Toxoplasmosis:*
- Indication: Heart transplant, D+/R- serostatus
- TMP-SMX (double strength) daily
- Duration: 6 months

**Hepatitis B Prophylaxis:**

- Lamivudine, tenofovir, or entecavir
- For HBsAg+ donors or recipients
- Duration: Often indefinite
- Monitor HBV DNA

**Tuberculosis:**
- Isoniazid for high-risk (treatment of latent TB)
- 9 months with vitamin B6
- Check for drug interactions with immunosuppressants

**Preemptive vs Universal Prophylaxis:**

| Strategy | Approach | Advantages | Disadvantages |
|----------|----------|------------|---------------|
| Universal | All at-risk patients | Simpler, catches all cases | Cost, resistance, side effects |
| Preemptive | Monitor CMV DNA, treat when positive | Reduced drug exposure | Misses some cases, requires frequent testing |`,
      keyTerms: [
        { term: 'opportunistic infection', definition: 'Infection that takes advantage of weakened immune system' },
        { term: 'serostatus', definition: 'Presence or absence of antibodies in blood (D+/R- means donor positive, recipient negative)' },
        { term: 'valganciclovir', definition: 'Oral antiviral medication for CMV prevention' },
        { term: 'TMP-SMX', definition: 'Trimethoprim-sulfamethoxazole, antibiotic for PCP prevention' },
        { term: 'preemptive therapy', definition: 'Monitoring for infection and treating early rather than universal prevention' },
        { term: 'latent TB', definition: 'Inactive tuberculosis infection that can reactivate' },
      ],
      analogies: [
        'Universal prophylaxis is like vaccinating everyone before flu season; preemptive therapy is like testing people and only treating those who show early signs of infection.',
        'The three phases of infection risk are like security levels at an airport - highest alert right after surgery, then gradually relaxing as recovery progresses.',
      ],
      examples: [
        'A CMV D+/R- kidney recipient receives valganciclovir for 6 months to prevent primary CMV infection.',
        'Lung transplant patient receives voriconazole and TMP-SMX for fungal and PCP prophylaxis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Infection prophylaxis strategies are tailored to donor-recipient serostatus, organ type, and immunosuppression intensity. CMV prevention uses risk-stratified antiviral prophylaxis or preemptive monitoring. PCP prophylaxis is nearly universal. Fungal prophylaxis is organ-specific.',
      explanation: `**CMV Prevention Strategies:**

*Risk Stratification:*

| Risk Category | Serostatus | Incidence without Prophylaxis | Recommended Prophylaxis |
|---------------|------------|-------------------------------|-------------------------|
| Highest | D+/R- | 50-60% | 6 months valganciclovir |
| Moderate | D+/R+ or R+ | 15-30% | 3 months valganciclovir |
| Lowest | D-/R- | <5% | Usually none |

*Antiviral Agents:*

Valganciclovir:
- Oral prodrug of ganciclovir
- 900 mg daily (dose adjust for renal function)
- Bioavailability: ~60%
- Bone marrow suppression (leukopenia)

Ganciclovir:
- IV formulation
- 5 mg/kg daily
- For patients unable to take oral
- Similar toxicity profile

*Preemptive Therapy Protocol:*
- Weekly CMV PCR monitoring
- Trigger: >1000-2000 copies/mL or rising trend
- Treatment: valganciclovir 900 mg BID
- Continue until PCR negative x 2

*Late CMV Disease:*
- Occurs after prophylaxis completion
- D+/R- at highest risk
- Consider extended prophylaxis (12 months)
- Valganciclovir resistance possible (UL97 mutations)

**Fungal Infection Prevention:**

*Candida Prophylaxis:*
- Indications: most solid organ transplants early post-op
- Agents: fluconazole, nystatin, clotrimazole
- Target: oropharyngeal and esophageal candidiasis
- Invasive candidiasis prevention in high-risk

*Aspergillus Prophylaxis:*
- Indication: lung transplant (universal)
- Agents: voriconazole, posaconazole, inhaled amphotericin
- Duration: 3-6 months minimum
- Drug interactions with CNIs significant

*Pneumocystis Prophylaxis Details:*

TMP-SMX:
- Also provides Toxoplasma and some bacterial protection
- Dose-related bone marrow suppression
- Hyperkalemia risk
- Allergic reactions common

Alternatives:
- Dapsone 50-100 mg daily (check G6PD first)
- Atovaquone 1500 mg daily (expensive)
- Inhaled pentamidine 300 mg monthly (breakthrough common)

**BK Polyomavirus Management:**

Not prevented by standard prophylaxis
- Monitoring: monthly plasma BK PCR x 6 months
- Threshold: >1000 copies/mL concern
- Nephropathy risk with high viral load
- Treatment: reduce immunosuppression (no antiviral proven)

**Hepatitis B and C Considerations:**

*HBV Prevention:*
- Antivirals for HBsAg+ recipients
- HBIG for high-risk liver transplants
- Monitor HBV DNA and HBsAg
- Resistance testing if breakthrough

*HCV Management:*
- Direct-acting antivirals pre or post-transplant
- Check for drug interactions with immunosuppressants
- Glecaprevir/pibrentasvir generally safe
- Recurrence universal without treatment

**Drug Interaction Considerations:**

*Azole antifungals:*
- Inhibit CYP3A4
- Increase tacrolimus, cyclosporine levels
- Significant dose reductions needed
- Monitor levels closely

*Rifamycins (for TB):*
- Induce CYP3A4
- Decrease CNI levels
- Require CNI dose increases
- Alternative: rifabutin (less induction)

*Macrolides:*
- Clarithromycin, erythromycin inhibit CYP3A4
- Azithromycin safer (less interaction)
- Monitor CNI levels`,
      keyTerms: [
        { term: 'UL97', definition: 'CMV gene where mutations cause ganciclovir resistance' },
        { term: 'viral load', definition: 'Amount of virus measured in blood (copies/mL)' },
        { term: 'leukopenia', definition: 'Low white blood cell count, side effect of antivirals' },
        { term: 'G6PD', definition: 'Glucose-6-phosphate dehydrogenase, enzyme deficiency contraindicates dapsone' },
        { term: 'BK polyomavirus', definition: 'Virus causing nephropathy in kidney transplant recipients' },
        { term: 'HBIG', definition: 'Hepatitis B immune globulin, passive immunization' },
        { term: 'direct-acting antivirals', definition: 'Modern HCV treatments (sofosbuvir, ledipasvir, etc.)' },
        { term: 'CYP3A4', definition: 'Cytochrome P450 enzyme metabolizing immunosuppressants and other drugs' },
      ],
    },
    4: {
      level: 4,
      summary: 'Optimal infection prophylaxis requires balancing protection against opportunistic pathogens with risks of drug toxicity, resistance, and cost. Risk-stratified approaches individualize prophylaxis intensity. Drug interactions between antimicrobial agents and immunosuppressants require careful management and monitoring.',
      explanation: `**Prophylaxis Efficacy and Complications:**

*CMV Prophylaxis Outcomes:*

Benefits:
- Reduces CMV disease by 80-90%
- Prevents CMV syndrome (fever, leukopenia, transaminitis)
- Reduces indirect effects (other infections, rejection, graft loss)
- D+/R- benefit greatest

Complications:
- Late-onset CMV disease after stopping prophylaxis
- Ganciclovir resistance in treated patients
- Bone marrow suppression (additive with immunosuppressants)
- Teratogenic (contraception required)

Cost considerations:
- Valganciclovir expensive
- Preemptive therapy may be cost-effective in low-risk
- Generic availability improving access

*PCP Prophylaxis Efficacy:*

TMP-SMX:
- >90% effective when taken
- Breakthrough rare
- Also reduces UTI, Toxoplasma, some bacterial infections
- Resistance rare

Alternative agents:
- Dapsone: ~80% effective
- Atovaquone: ~85% effective
- Pentamidine: ~70% effective
- Second-line when TMP-SMX not tolerated

**Resistant Infections:**

*CMV Resistance:*
- UL97 mutations: ganciclovir resistance
- UL54 mutations: cross-resistance
- Foscarnet or cidofovir for resistant cases
- Maribavir (new agent, no myelosuppression)
- Reduce immunosuppression concurrently

*Candida Resistance:*
- Fluconazole resistance in C. glabrata, C. krusei
- Echinocandins (micafungin) for resistant species
- Breakthrough candidemia requires imaging

*Aspergillus in Breakthrough:*
- Voriconazole failure: consider posaconazole, isavuconazole
- Drug interactions limit options
- Therapeutic drug monitoring helpful

**Special Populations:**

*Pediatric Transplant:*
- Weight-based dosing
- Liquid formulations needed
- CMV prophylaxis duration often longer
- Growth considerations with chronic medications

*Pregnancy Planning:*
- Valganciclovir: contraindicated
- TMP-SMX: avoid first trimester, near term
- Adjust prophylaxis strategy
- Preconception counseling essential

*Elderly Recipients:*
- Increased toxicity risk
- Drug interactions more common
- Bone marrow suppression less tolerated
- Consider reduced intensity prophylaxis

**Prevention Beyond Medications:**

*Environmental Precautions:*
- Legionella: avoid stagnant water sources
- Aspergillus: avoid construction dust
- Histoplasma: avoid bird/bat droppings, caves
- Cryptococcus: avoid pigeon droppings

*Food Safety:*
- Avoid raw/undercooked meat, fish
- Wash fruits and vegetables
- Avoid unpasteurized dairy
- Food handling precautions

*Pet Precautions:*
- Avoid handling cat litter (Toxoplasma)
- Avoid reptiles, chicks (Salmonella)
- Keep pets vaccinated
- Hand hygiene after animal contact

*Travel Considerations:*
- Avoid live vaccines
- Malaria prophylaxis if needed
- Avoid endemic areas for certain fungi
- Travel clinic consultation

**Prophylaxis Discontinuation:**

Timing depends on:
- Time post-transplant
- Immunosuppression intensity
- Prior infections
- Current risk factors

General approach:
- CMV: 3-6 months for most
- PCP: minimum 6 months, often indefinite if ongoing intense immunosuppression
- Fungal: 3-6 months for most, longer for lung
- Individualize based on risk assessment`,
      keyTerms: [
        { term: 'maribavir', definition: 'New CMV treatment without bone marrow suppression' },
        { term: 'foscarnet', definition: 'IV antiviral for ganciclovir-resistant CMV' },
        { term: 'echinocandins', definition: 'Class of antifungals (micafungin, caspofungin)' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to optimize dosing' },
        { term: 'CMV syndrome', definition: 'CMV infection with fever, leukopenia, elevated transaminases' },
        { term: 'indirect effects', definition: 'CMV-mediated immunomodulation causing other infections' },
        { term: 'breakthrough infection', definition: 'Infection occurring despite prophylaxis' },
      ],
      clinicalNotes: `Infection prophylaxis must be individualized based on donor-recipient serostatus, organ type, and immunosuppression intensity. CMV D+/R- recipients need the longest prophylaxis (6 months minimum). TMP-SMX is first-line for PCP prevention and should be continued indefinitely in patients on intense immunosuppression or with prior PCP. Drug interactions between azoles and CNIs require careful dose adjustments and frequent level monitoring. Breakthrough infections on prophylaxis should prompt evaluation for resistance and reduction of immunosuppression.`,
    },
    5: {
      level: 5,
      summary: 'Advances in infection prophylaxis include CMV vaccines, adoptive T-cell therapy, and molecular diagnostic-guided strategies. Immunogenomic approaches may identify patients needing intensified prophylaxis. Future directions include pathogen-specific immune reconstitution and personalized prophylaxis algorithms based on pharmacogenomics and immune profiling.',
      explanation: `**Emerging Prophylaxis Strategies:**

*CMV Vaccines:*

Current development:
- mRNA-1647 (Moderna): phase III trials
- Contains gB + pentamer antigens
- Goal: prevent infection in D+/R- recipients
- Could reduce/eliminate need for antiviral prophylaxis

Previous attempts:
- gB/MF59 vaccine: partial efficacy
- Towne strain: limited durability
- New multivalent approaches promising

*Adoptive T-cell Therapy:*

CMV-specific T-cells:
- Expanded donor-derived or third-party CMV-specific T-cells
- For refractory or resistant CMV
- Early phase clinical trials
- Potential for prophylaxis in high-risk

Multipathogen T-cells:
- Target CMV, EBV, adenovirus, BK
- For severe combined immunodeficiency post-transplant
- Preliminary efficacy data

*Monoclonal Antibodies:*

CMV hyperimmune globulin:
- Limited efficacy data
- Expensive, IV administration
- Not standard prophylaxis

Anketvirmab (CMV mAb):
- Investigational
- Phase II trials
- Potential for prophylaxis

**Precision Prophylaxis:**

*Pharmacogenomic Guidance:*

TPMT/NDUT15 testing:
- Predicts azathioprine toxicity
- Guides dosing for patients on AZA + TMP-SMX

CYP2C19 testing:
- Voriconazole metabolism
- Poor metabolizers: higher levels, more toxicity
- Ultra-rapid: subtherapeutic levels

*Immune Monitoring:*

Immuknow assay:
- ATP production from stimulated lymphocytes
- Predicts infection vs rejection risk
- Low values suggest increased infection risk
- Limited clinical utility to date

T-cell subset analysis:
- CD4 count
- T-cell receptor diversity
- Predicts opportunistic infection risk

CMV-specific immunity:
- Quantiferon-CMV
- ELISPOT assays
- Predicts CMV risk post-prophylaxis

**Novel Antimicrobial Agents:**

*Brincidofovir:*
- Lipid conjugate of cidofovir
- Oral bioavailability
- CMV, adenovirus, BK activity
- Myelosuppression (less than ganciclovir)

*Letermovir:*
- CMV DNA terminase inhibitor
- Prophylaxis in stem cell transplant (approved)
- No myelosuppression
- Transplant studies ongoing

*Oteseconazole:*
- Oral antifungal for recurrent VVC
- Not yet for transplant prophylaxis
- Possible applications

**Resistant Infection Management:**

*Genotypic Resistance Testing:*
- CMV: UL97, UL54 sequencing
- HIV: standard practice, transplant application
- HBV: polymerase mutations
- Rapid turnaround essential

*Phage Therapy:*
- Bacteriophages for resistant bacteria
- Compassionate use cases
- Clinical trials in transplant

*Fecal Microbiota Transplant:*
- For recurrent C. difficile
- Durable efficacy
- Expand to other applications?

**Health Systems Approaches:**

*Antimicrobial Stewardship:*
- De-escalation protocols
- Duration optimization
- Avoid unnecessary broad-spectrum coverage
- Resistance surveillance

*Prophylaxis Bundles:*
- Standardized protocols
- Checklists
- Quality metrics
- Reduce variability

*Telemedicine and Remote Monitoring:*
- Home-based monitoring
- Early detection of infection
- Patient-reported outcomes
- Reduce clinic visits

**Future Directions:**

*Microbiome Modulation:*
- Probiotics for infection prevention
- Decolonization strategies
- Fecal transplant applications

*Engineered Immunity:*
- CAR-T cells for viral infections
- Synthetic biology approaches
- Off-the-shelf products

*Biomarker-Guided Prophylaxis:*
- Early infection detection
- Duration individualization
- Risk prediction models

*Artificial Intelligence:*
- Predict infection risk
- Optimize prophylaxis selection
- Detect outbreaks
- Resource allocation`,
      keyTerms: [
        { term: 'letermovir', definition: 'CMV DNA terminase inhibitor for prophylaxis' },
        { term: 'anketvirmab', definition: 'Investigational monoclonal antibody for CMV' },
        { term: 'adoptive T-cell therapy', definition: 'Infusion of pathogen-specific T-cells for treatment or prevention' },
        { term: 'pharmacogenomics', definition: 'Using genetic information to guide drug therapy' },
        { term: 'CYP2C19', definition: 'Cytochrome P450 enzyme metabolizing voriconazole' },
        { term: 'DNA terminase', definition: 'CMV enzyme targeted by letermovir' },
        { term: 'mRNA vaccine', definition: 'Vaccine using messenger RNA to induce immunity' },
        { term: 'fecal microbiota transplant', definition: 'Transfer of gut bacteria to treat C. difficile and other conditions' },
      ],
      clinicalNotes: `The future of infection prophylaxis in transplantation lies in precision medicine approaches. CMV vaccines in development may revolutionize prevention in D+/R- recipients. Adoptive T-cell therapy offers promise for refractory infections and potentially for prophylaxis in profoundly immunosuppressed patients. Pharmacogenomic testing can guide drug selection and dosing to optimize efficacy while minimizing toxicity. Novel agents like letermovir provide alternatives with improved safety profiles. Integration of immune monitoring and molecular diagnostics will enable truly personalized prophylaxis strategies that balance infection prevention against risks of antimicrobial resistance and drug toxicity.`,
    },
  },

  media: [
    {
      id: 'infection-timeline',
      type: 'diagram',
      filename: 'infection-timeline.png',
      title: 'Timeline of Infection Risk Post-Transplant',
      description: 'Phases of infection risk with common pathogens and prophylaxis strategies',
    },
    {
      id: 'prophylaxis-protocol-table',
      type: 'diagram',
      filename: 'prophylaxis-protocols.png',
      title: 'Standard Prophylaxis Protocols',
      description: 'Summary of antimicrobial prophylaxis by indication and duration',
    },
  ],

  citations: [
    {
      id: 'cmv-prophylaxis-guidelines',
      type: 'article',
      title: 'CMV Management in Solid Organ Transplant Recipients: Guidelines',
      authors: ['Kotton CN', 'Kumar D'],
      source: 'Transplantation',
      accessedDate: '2026-01-28',
    },
    {
      id: 'pcp-prophylaxis',
      type: 'article',
      title: 'Guidelines for Prevention and Treatment of Opportunistic Infections',
      authors: ['CDC', 'IDSA'],
      source: 'MMWR Recomm Rep',
      accessedDate: '2026-01-28',
    },
    {
      id: 'infectious-diseases-transplant',
      type: 'textbook',
      title: 'AST Infectious Diseases Community of Practice Guidelines',
      authors: ['Fishman JA'],
      source: 'American Society of Transplantation',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-post-transplant-care',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Post-Transplant Care',
    },
    {
      targetId: 'infectious-disease-opportunistic',
      targetType: 'concept',
      relationship: 'related',
      label: 'Opportunistic Infections',
    },
    {
      targetId: 'immune-immunodeficiency',
      targetType: 'concept',
      relationship: 'related',
      label: 'Immunodeficiency',
    },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'infectious-disease', 'prophylaxis', 'prevention'],
    keywords: ['infection', 'prophylaxis', 'CMV', 'PCP', 'antifungal', 'antiviral', 'antibiotic', 'prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
