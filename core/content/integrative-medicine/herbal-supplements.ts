/**
 * Herbal Supplements - Educational Content
 *
 * Comprehensive content covering herbal supplement evidence,
 * interactions, safety, and appropriate use.
 */

import { EducationalContent } from "../types";

export const herbalSupplementsContent: EducationalContent = {
  id: "integrative-medicine-herbal-supplements",
  type: "concept",
  name: "Herbal Supplements",
  alternateNames: [
    "Herbal Medicine",
    "Botanical Medicine",
    "Phytotherapy",
    "Herbal Remedies",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Herbal supplements are products made from plants that people take to try to improve their health. Some can help, but they can also cause problems if not used carefully.",
      explanation: `**What are herbal supplements?**
Herbal supplements are products made from plants - their leaves, roots, flowers, or seeds. People have used plants as medicine for thousands of years, and today many people still take herbal products to try to stay healthy or treat health problems.

**Common herbal supplements:**
- **Echinacea**: Often taken for colds
- **Ginkgo**: Taken for memory and thinking
- **St. John's Wort**: Used for mood and depression
- **Ginger**: Used for upset stomach
- **Turmeric**: Taken for inflammation
- **Valerian**: Used for sleep

**Important things to know:**

*They are not tested like medicines:*
Herbal supplements do not have to be proven to work before they are sold. This is different from prescription medicines, which must be tested carefully.

*"Natural" does not mean safe:*
Plants can have powerful effects on your body. Some herbal supplements can:
- Cause side effects
- Interact badly with your medicines
- Be harmful if you take too much
- Be dangerous for pregnant women or children

*Quality varies:*
What is in the bottle may not match the label. Some products have been found to contain:
- More or less of the herb than stated
- The wrong plant
- Harmful things like lead or other chemicals

**Staying safe:**
- Tell your doctor about ALL supplements you take
- Buy from trusted companies
- Do not take herbal supplements instead of prescribed medicine
- Be extra careful if you are pregnant, nursing, or have health conditions
- Stop taking supplements before surgery (ask your doctor when)`,
      keyTerms: [
        {
          term: "herbal supplement",
          definition: "A product made from plants that people take for health",
        },
        {
          term: "interaction",
          definition: "When two things you take affect each other in your body",
        },
        {
          term: "side effect",
          definition: "An unwanted effect that a product can cause",
        },
      ],
      analogies: [
        "Taking herbal supplements without research is like adding ingredients to a recipe without knowing what they do - the result might not be what you expected.",
        "Just because something grows in nature does not make it safe - poison ivy is natural too!",
      ],
      examples: [
        "Someone taking blood pressure medicine should be careful with licorice root because it can raise blood pressure.",
        "A person taking antidepressants should avoid St. John's Wort because they can interact dangerously.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Herbal supplements contain bioactive compounds that can have therapeutic and adverse effects. Evidence varies widely by product, and interactions with medications are a significant safety concern requiring careful evaluation.",
      explanation: `**Understanding Herbal Supplements:**

*Regulation:*
- Regulated as dietary supplements, not drugs
- DSHEA (1994) limits FDA oversight
- No pre-market approval for safety or efficacy
- Manufacturers responsible for safety
- FDA can act after problems reported

*Quality Concerns:*
- No required standardization
- Content may not match label
- Contamination possible (heavy metals, pesticides)
- Adulteration with pharmaceuticals reported
- Batch-to-batch variability

**Evidence Levels for Common Supplements:**

*Some Evidence of Benefit:*
- St. John's Wort: Mild-moderate depression (comparable to SSRIs)
- Ginger: Nausea (pregnancy, chemotherapy)
- Peppermint oil: Irritable bowel syndrome
- Saw palmetto: Benign prostatic hyperplasia (mixed results)
- Milk thistle: Liver protection (limited evidence)

*Limited or Mixed Evidence:*
- Echinacea: Cold prevention/treatment (inconsistent)
- Ginkgo: Memory, dementia (negative in large trials)
- Valerian: Sleep (modest effects)
- Black cohosh: Menopause symptoms (inconsistent)
- Garlic: Cholesterol (modest effects)

*Insufficient Evidence:*
- Most herbs have limited quality research
- Traditional use does not equal proven efficacy
- Marketing claims often exceed evidence

**Major Drug-Herb Interactions:**

*St. John's Wort (MOST CONCERNING):*
- Induces CYP3A4 and P-glycoprotein
- Decreases effectiveness of many drugs:
  - Birth control pills (pregnancy risk)
  - HIV medications
  - Immunosuppressants (transplant rejection)
  - Warfarin
  - Chemotherapy drugs
- Serotonin syndrome with SSRIs

*Other Important Interactions:*
- Ginkgo: Increased bleeding with anticoagulants
- Ginseng: Affects blood sugar, warfarin
- Kava: Liver toxicity, sedative effects
- Licorice: Increases blood pressure, affects potassium
- Garlic: Increased bleeding risk

**Safety Considerations:**

*Who Should Be Especially Careful:*
- Pregnant and nursing women
- Children
- People with liver or kidney disease
- Those taking prescription medications
- People with bleeding disorders
- Before and after surgery

*Signs of Quality:*
- USP, NSF, or ConsumerLab verification
- Good Manufacturing Practices (GMP) certified
- Clear labeling of contents
- Contact information for company
- No unrealistic claims

**Talking to Your Doctor:**

*Information to Share:*
- All supplements you take
- Doses and frequency
- How long you have taken them
- Why you are taking them
- Any effects you have noticed

*Questions to Ask:*
- Is this safe with my medications?
- Is there evidence this works for my condition?
- What dose is appropriate?
- Are there risks I should know about?
- Should I stop before surgery?`,
      keyTerms: [
        {
          term: "DSHEA",
          definition: "Dietary Supplement Health and Education Act - law that regulates supplements less strictly than drugs",
        },
        {
          term: "CYP3A4",
          definition: "Liver enzyme that breaks down many medications - can be affected by herbal supplements",
        },
        {
          term: "standardization",
          definition: "Process of ensuring herbal products contain consistent amounts of active ingredients",
        },
        {
          term: "adulteration",
          definition: "When products contain ingredients not listed on the label, sometimes pharmaceutical drugs",
        },
      ],
      analogies: [
        "Herbal supplements affecting liver enzymes is like changing the settings on a factory machine - it affects how everything going through gets processed.",
        "Buying unverified supplements is like buying food without knowing the ingredients - you cannot be sure what you are really getting.",
      ],
      examples: [
        "A woman taking birth control pills who starts St. John's Wort for depression could become pregnant because the herb reduces the pill's effectiveness.",
        "Someone taking warfarin for blood clots who adds garlic or ginkgo supplements could have an increased bleeding risk.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Herbal supplements contain complex phytochemical mixtures with varied pharmacological activities. Evidence-based evaluation requires understanding of pharmacognosy, drug-herb interaction mechanisms, and the regulatory framework governing these products.",
      explanation: `**Pharmacognosy Fundamentals:**

*Bioactive Constituents:*
- Alkaloids (e.g., caffeine, morphine)
- Glycosides (e.g., digoxin precursors)
- Terpenes (e.g., ginkgolides)
- Flavonoids (e.g., quercetin)
- Polyphenols (e.g., curcumin)
- Essential oils

*Standardization Approaches:*
- Marker compound standardization
- Active constituent standardization
- Extract ratios (e.g., 5:1)
- Whole plant vs. isolated compounds
- Limitations of standardization

**Evidence by Supplement:**

*St. John's Wort (Hypericum perforatum):*
- Active: Hypericin, hyperforin
- Evidence: RCTs show efficacy for mild-moderate depression
- NNT similar to SSRIs for mild depression
- NOT for severe depression
- Major interaction concerns

*Ginkgo biloba:*
- Active: Ginkgolides, flavonoid glycosides
- Memory/dementia: Large trials (GEM, GINDEM) negative
- Claudication: Modest benefit
- Tinnitus: Insufficient evidence
- Bleeding risk with anticoagulants

*Echinacea:*
- Multiple species (E. purpurea, E. angustifolia)
- Cold prevention: Meta-analyses inconsistent
- Cold treatment: Minimal benefit
- Quality and preparation vary significantly
- Generally safe short-term

*Saw Palmetto (Serenoa repens):*
- BPH symptom improvement in some studies
- Cochrane: Not clearly superior to placebo
- STEP and CAMUS trials negative
- Mechanism: 5-alpha reductase inhibition proposed

*Milk Thistle (Silybum marianum):*
- Active: Silymarin complex
- Hepatoprotection: Animal data positive
- Human trials: Limited quality, mixed results
- Acute poisoning (Amanita): Case reports of benefit
- Generally well tolerated

**Drug-Herb Interaction Mechanisms:**

*Pharmacokinetic Interactions:*

CYP450 Modulation:
- Induction: St. John's Wort (CYP3A4, 2C9, 1A2)
- Inhibition: Grapefruit (CYP3A4), goldenseal (CYP2D6, 3A4)
- Time course: Induction takes days, inhibition immediate
- Clinical significance depends on drug's therapeutic index

P-glycoprotein Effects:
- St. John's Wort induces P-gp
- Affects absorption and distribution
- Reduces bioavailability of substrates

*Pharmacodynamic Interactions:*
- Additive bleeding (ginkgo + warfarin)
- Serotonin syndrome (St. John's Wort + SSRIs)
- Additive sedation (valerian + benzodiazepines)
- Blood glucose effects (ginseng + diabetes medications)

**Quality and Safety Issues:**

*Contamination Types:*
- Heavy metals (lead, mercury, arsenic)
- Pesticides
- Microbial contamination
- Mycotoxins
- Environmental pollutants

*Adulteration:*
- Undeclared pharmaceuticals
- Different plant species
- Fillers and excipients
- Examples: PDE5 inhibitors in "male enhancement," sibutramine in weight loss products

*Hepatotoxicity Concerns:*
- Pyrrolizidine alkaloids (comfrey, coltsfoot)
- Kava (hepatotoxic in some individuals)
- Green tea extract (high-dose preparations)
- Black cohosh (rare reports)
- Mechanism often unclear

**Clinical Application:**

*Evidence Assessment:*
- Check Natural Medicines Database
- Review Cochrane reviews
- Assess study quality
- Consider effect sizes and clinical significance

*Interaction Checking:*
- Lexicomp, Micromedex, Natural Medicines Database
- Consider CYP450 and P-gp effects
- Evaluate clinical significance
- Document and communicate findings

*Patient Counseling Points:*
- Disclosure importance
- Evidence level for specific use
- Interaction potential
- Quality product selection
- Monitoring recommendations`,
      keyTerms: [
        {
          term: "pharmacognosy",
          definition: "Study of medicines derived from natural sources, especially plants",
        },
        {
          term: "P-glycoprotein",
          definition: "Membrane transporter affecting drug absorption and distribution, induced by St. John's Wort",
        },
        {
          term: "pyrrolizidine alkaloids",
          definition: "Hepatotoxic compounds found in some herbs (comfrey, coltsfoot)",
        },
        {
          term: "therapeutic index",
          definition: "Ratio between toxic and therapeutic doses - narrow index drugs more susceptible to interactions",
        },
      ],
      clinicalNotes:
        "St. John's Wort interactions are the most clinically significant - always check when patients report use. Screen all patients for supplement use. For commonly used supplements, know the evidence level and major interactions. Recommend third-party verified products (USP, NSF). Document supplement use in the medication list.",
    },
    4: {
      level: 4,
      summary:
        "Advanced evaluation of herbal supplements integrates pharmacokinetic and pharmacodynamic interaction assessment, regulatory framework analysis, adverse event surveillance, and evidence-based approaches to clinical integration within conventional care.",
      explanation: `**Advanced Pharmacology:**

*Phytochemical Complexity:*
- Multiple bioactive compounds per plant
- Synergistic and antagonistic effects
- Matrix effects on absorption
- Metabolism to active/inactive metabolites
- Inter-individual variability

*Detailed Interaction Mechanisms:*

CYP450 System:
| Enzyme | Inducers | Inhibitors |
|--------|----------|------------|
| CYP3A4 | St. John's Wort | Grapefruit, goldenseal |
| CYP2D6 | None significant | Goldenseal |
| CYP2C9 | St. John's Wort | Ginkgo (weak) |
| CYP1A2 | St. John's Wort | None significant |

Clinical Significance Factors:
- Substrate drug's therapeutic index
- Magnitude of enzyme effect
- Duration of concomitant use
- Patient-specific factors (genetics, disease)

*P-glycoprotein Interactions:*
- St. John's Wort strong inducer
- Reduces absorption of P-gp substrates
- Affects CNS penetration
- Examples: digoxin, cyclosporine, HIV protease inhibitors

**Hepatotoxicity Assessment:**

*Mechanisms:*
- Direct toxicity (dose-dependent)
- Idiosyncratic reactions
- Immune-mediated
- Metabolite-related
- Mitochondrial dysfunction

*High-Risk Supplements:*
- Kava: Hepatotoxicity led to bans in some countries
- Green tea extract: High-dose formulations
- Pyrrolizidine alkaloid-containing plants
- Combination products ("fat burners")
- Ayurvedic preparations (contamination)

*RUCAM Assessment:*
- Roussel Uclaf Causality Assessment Method
- Adapted for herbs (Herb-RUCAM)
- Temporal relationship
- Exclusion of other causes
- Dechallenge/rechallenge
- Known hepatotoxin

**Regulatory Landscape:**

*US Framework:*
- DSHEA 1994 grandfather clause
- New Dietary Ingredient (NDI) notification
- Structure/function claims allowed
- Disease claims prohibited
- cGMP requirements (2007)
- Adverse event reporting (2006)

*FDA Enforcement Tools:*
- Warning letters
- Import alerts
- Injunctions
- Product seizures
- Criminal prosecution (rare)

*International Comparison:*
- EU: Traditional Herbal Medicinal Products Directive
- Canada: Natural Health Products Regulations
- Australia: TGA complementary medicines
- WHO Traditional Medicine Strategy

**Pharmacovigilance:**

*Adverse Event Monitoring:*
- FDA MedWatch
- FAERS database
- Underreporting significant
- Signal detection challenges
- Causality assessment difficulties

*Quality Surveillance:*
- FDA warning letters database
- ConsumerLab.com testing
- USP Dietary Supplement Verification
- Academic surveillance studies

**Clinical Integration:**

*Pre-Surgical Assessment:*
- Discontinuation timing
- Bleeding risk assessment
- Anesthesia interactions
- Generally: 1-2 weeks before surgery

Common Pre-Op Concerns:
| Supplement | Concern | Timing |
|------------|---------|--------|
| Ginkgo | Bleeding | 36 hours |
| Garlic | Bleeding | 7 days |
| Ginseng | Hypoglycemia, bleeding | 7 days |
| St. John's Wort | Drug interactions | 5 days |
| Kava | Sedation potentiation | 24 hours |
| Valerian | Sedation potentiation | Taper |

*Cancer Care:*
- High prevalence of supplement use
- Antioxidant-chemotherapy debate
- Hormonal supplement concerns
- Memorial Sloan Kettering "About Herbs" resource
- Integrative oncology consultation

*Special Populations:*
- Pregnancy: Most lack safety data; avoid unless evidence-based
- Lactation: Limited data; use caution
- Pediatrics: Generally discouraged without clear indication
- Elderly: Interaction and polypharmacy concerns
- Renal/hepatic impairment: Altered metabolism

**Decision Support:**

*Resources:*
- Natural Medicines Database (comprehensive, subscription)
- Lexicomp drug interactions
- About Herbs (MSKCC, free, oncology focus)
- Cochrane reviews
- NCCIH fact sheets

*Documentation Standards:*
- List all supplements in medication list
- Include dose and frequency
- Note indication
- Document interaction check
- Record patient counseling`,
      keyTerms: [
        {
          term: "RUCAM",
          definition: "Roussel Uclaf Causality Assessment Method - tool for assessing drug-induced liver injury causality",
        },
        {
          term: "NDI notification",
          definition: "New Dietary Ingredient notification required for supplements with ingredients not marketed before 1994",
        },
        {
          term: "FAERS",
          definition: "FDA Adverse Event Reporting System - database for drug and supplement adverse events",
        },
        {
          term: "cGMP",
          definition: "Current Good Manufacturing Practices - FDA quality standards for supplement production",
        },
      ],
      clinicalNotes:
        "Systematic approach to herbal supplements: 1) Document all supplements in medication list, 2) Check interactions with prescription medications, 3) Assess for hepatotoxicity risk, 4) Provide pre-operative discontinuation guidance, 5) Recommend third-party verified products. For complex cases or oncology patients, consider integrative medicine consultation.",
    },
    5: {
      level: 5,
      summary:
        "Comprehensive herbal supplement evaluation requires integration of pharmacognosy, clinical pharmacology, regulatory science, and implementation of systematic safety monitoring within healthcare systems, while addressing policy implications and research priorities.",
      explanation: `**State of the Science:**

*Pharmacognosy Research:*
- Metabolomics for quality assessment
- Network pharmacology approaches
- Systems biology integration
- Bioavailability enhancement research
- Standardization methodology advances

*Clinical Research Advances:*
- Pragmatic trial designs
- Real-world evidence
- Individual patient data meta-analyses
- Biomarker development
- Responder identification

**Detailed Interaction Pharmacology:**

*Transporter Effects Beyond P-gp:*
- OATP (organic anion transporting polypeptide)
- BCRP (breast cancer resistance protein)
- MRP2 (multidrug resistance protein)
- Clinical significance emerging

*Protein Binding Interactions:*
- Generally less clinically significant
- Warfarin displacement concerns
- Highly bound drug considerations

*Gut Microbiome Effects:*
- Metabolism of phytochemicals
- Individual variation
- Emerging research area
- Clinical implications unclear

**Hepatotoxicity Deep Dive:**

*Mechanistic Classification:*
- Intrinsic (dose-dependent)
- Idiosyncratic (immune-mediated vs. metabolic)
- Mixed patterns

*Susceptibility Factors:*
- Genetic polymorphisms (CYP450, UGT, GST)
- Age and sex
- Pre-existing liver disease
- Alcohol use
- Concurrent hepatotoxins

*Surveillance Challenges:*
- Attribution difficulties
- Underreporting
- Product variability
- Combination product complexity
- Lack of systematic monitoring

**Regulatory Science:**

*Evidence Standards Debate:*
- Structure/function claims vs. health claims
- Evidence thresholds
- Qualified health claims
- International harmonization efforts

*Quality Assurance Evolution:*
- DNA barcoding for species verification
- Chemical fingerprinting
- Reference standard development
- Supply chain integrity

*Policy Considerations:*
- Mandatory adverse event reporting expansion
- Pre-market notification requirements
- Third-party testing requirements
- Advertising oversight enhancement

**Implementation Science:**

*Health System Integration:*
- EHR supplement documentation
- Clinical decision support for interactions
- Pharmacy verification protocols
- Provider education programs
- Patient education resources

*Quality Improvement:*
- Medication reconciliation inclusion
- Pre-operative protocols
- Oncology-specific pathways
- Adverse event tracking

*Barriers to Implementation:*
- Time constraints
- Provider knowledge gaps
- Patient non-disclosure
- Database limitations
- Alert fatigue

**Research Priorities:**

*NCCIH Strategic Plan Alignment:*
- Biological mechanisms
- Biomarkers of response
- Optimal formulations
- Safety monitoring methodologies
- Implementation research

*Key Gaps:*
- Long-term safety data
- Interaction studies with new drugs
- Special population research
- Quality/efficacy correlation
- Cost-effectiveness data

**Clinical Decision Framework:**

*Risk-Benefit Assessment:*
1. Evidence for efficacy (condition-specific)
2. Safety profile (direct risks)
3. Interaction potential (with patient's medications)
4. Quality assurance (product verification)
5. Patient factors (population, comorbidities)
6. Alternative options available
7. Monitoring capability

*High-Risk Scenarios:*
- Narrow therapeutic index drugs (warfarin, cyclosporine, digoxin)
- Cancer treatment
- Organ transplant
- HIV therapy
- Pregnancy
- Upcoming surgery

**Practice Recommendations:**

*Systematic Assessment Protocol:*
1. Universal inquiry about supplement use
2. Document in medication list with details
3. Check interaction databases
4. Assess hepatotoxicity risk factors
5. Evaluate evidence for patient's indication
6. Counsel on quality product selection
7. Develop monitoring plan
8. Communicate with other providers

*Patient Counseling Framework:*
- Validate interest and concerns
- Present evidence honestly
- Explain interaction mechanisms simply
- Recommend quality verification
- Emphasize disclosure to all providers
- Set expectations for monitoring

*Pre-Operative Protocol:*
- Standardized screening
- Supplement-specific guidance
- Documentation and communication
- Post-operative resumption timing

*Resources for Clinicians:*
- Natural Medicines Database (comprehensive)
- About Herbs (MSKCC) - oncology
- NCCIH Herbs at a Glance
- Cochrane Complementary Medicine
- FDA MedWatch (reporting)
- State pharmacy boards (verification)

**Future Directions:**

*Emerging Technologies:*
- AI-assisted interaction prediction
- Pharmacogenomics integration
- Real-time monitoring systems
- Blockchain for supply chain
- Patient-facing decision support

*Policy Evolution:*
- International regulatory harmonization
- Evidence-based claim standards
- Mandatory quality certification
- Enhanced surveillance systems
- Research infrastructure investment`,
      keyTerms: [
        {
          term: "network pharmacology",
          definition: "Approach analyzing complex interactions between multiple compounds and multiple targets",
        },
        {
          term: "DNA barcoding",
          definition: "Method using short genetic markers to identify plant species in products",
        },
        {
          term: "metabolomics",
          definition: "Study of chemical processes involving metabolites, used for supplement quality assessment",
        },
        {
          term: "qualified health claim",
          definition: "FDA-authorized claim based on limited evidence, requiring qualifying language",
        },
      ],
      clinicalNotes: `Summary for clinical practice:

Systematic Approach:
1. Ask all patients about supplements (normalize inquiry)
2. Document in medication list with dose, frequency, reason
3. Check interactions before prescribing
4. Assess hepatotoxicity risk
5. Counsel on quality products (USP, NSF verified)
6. Provide pre-operative guidance

High-Priority Interactions:
- St. John's Wort with almost everything
- Ginkgo/garlic with anticoagulants
- Supplements affecting CYP3A4 substrates
- Serotonergic supplements with antidepressants

Pre-Operative Standard:
- Most supplements: 7-14 days before surgery
- Bleeding risk supplements: Based on half-life
- Document and verify discontinuation

Key Resources:
- Natural Medicines Database (subscription)
- About Herbs, MSKCC (free, oncology)
- NCCIH website (patient handouts)
- ConsumerLab.com (quality reports)
- FDA MedWatch (adverse event reporting)

When to Consult:
- Complex polypharmacy
- Oncology patients
- Transplant patients
- Severe hepatotoxicity concern
- Uncertainty about specific products`,
    },
  },

  media: [
    {
      id: "herb-drug-interactions-table",
      type: "diagram",
      filename: "herb_drug_interactions.svg",
      title: "Major Herb-Drug Interactions",
      description: "Table of clinically significant interactions",
    },
    {
      id: "supplement-evaluation-flowchart",
      type: "diagram",
      filename: "supplement_evaluation_flowchart.svg",
      title: "Supplement Evaluation Flowchart",
      description: "Clinical decision support for supplement assessment",
    },
  ],

  citations: [
    {
      id: "nccih-herbs",
      type: "website",
      title: "Herbs at a Glance",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/herbsataglance",
    },
    {
      id: "natural-medicines-database",
      type: "website",
      title: "Natural Medicines Database",
      source: "Therapeutic Research Center",
      url: "https://naturalmedicines.therapeuticresearch.com/",
    },
    {
      id: "fda-supplements",
      type: "website",
      title: "Dietary Supplements",
      source: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/food/dietary-supplements",
    },
  ],

  crossReferences: [
    {
      targetId: "integrative-medicine-evidence-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Evidence-Based Complementary Therapies",
    },
    {
      targetId: "drug-interactions",
      targetType: "concept",
      relationship: "related",
      label: "Drug Interactions",
    },
    {
      targetId: "hepatotoxicity",
      targetType: "condition",
      relationship: "related",
      label: "Hepatotoxicity",
    },
  ],

  tags: {
    systems: ["integrative", "hepatic", "pharmacology"],
    topics: [
      "herbal supplements",
      "drug interactions",
      "patient safety",
      "pharmacognosy",
      "dietary supplements",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine", "pharmacology"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default herbalSupplementsContent;
