import type { EducationalContent } from '../../../types';

export const secondaryImmunodeficiency: EducationalContent = {
  id: 'secondary-immunodeficiency',
  type: 'condition',
  name: 'Secondary Immunodeficiency',
  alternateNames: ['Acquired Immunodeficiency', 'Immunosuppression', 'Drug-Induced Immunodeficiency'],
  levels: {
    1: {
      level: 1,
      summary: 'Secondary immunodeficiency is when the immune system becomes weakened due to factors like medications, infections, or other medical conditions, rather than being born with the problem.',
      explanation: `Secondary immunodeficiency happens when something weakens a person's immune system after they are born. This is different from primary immunodeficiency, which is inherited from birth.\n\nMany things can cause secondary immunodeficiency. Certain medications like steroids or chemotherapy drugs used to treat cancer can suppress the immune system. Infections like HIV can damage immune cells. Other conditions like diabetes, kidney disease, or malnutrition can also weaken immunity.\n\nWhen the immune system is weakened, people are more likely to get infections and may have trouble fighting them off. They might get sick more often, take longer to recover, or develop infections that a healthy person would not get.\n\nThe good news is that secondary immunodeficiency can often be improved by treating the underlying cause, adjusting medications, or providing supportive treatments to help prevent infections.`,
      keyTerms: [
        { term: 'secondary immunodeficiency', definition: 'A weakened immune system caused by factors after birth rather than inherited' },
        { term: 'immunosuppression', definition: 'Reduction of immune system activity, often from medications' },
        { term: 'HIV', definition: 'A virus that attacks immune cells and can cause AIDS' },
        { term: 'chemotherapy', definition: 'Strong medications used to treat cancer that can affect the immune system' }
      ],
      analogies: [
        'Secondary immunodeficiency is like a security system that was working but got turned down or damaged',
        'Think of it like a battery that has run low - it can often be recharged by addressing the cause'
      ],
      examples: [
        'A person taking steroid medication for lupus who gets frequent infections',
        'Someone with diabetes who has recurrent skin infections that heal slowly'
      ]
    },
    2: {
      level: 2,
      summary: 'Secondary immunodeficiency results from external factors including medications, infections, malignancies, metabolic disorders, and malnutrition, and is far more common than primary immunodeficiency.',
      explanation: `Secondary immunodeficiencies are acquired conditions that impair immune function and are significantly more common than primary immunodeficiencies. They affect millions of people worldwide and represent a major cause of infection-related morbidity and mortality.\n\nMajor causes of secondary immunodeficiency:\n\n1. Iatrogenic (medication-induced):\n- Corticosteroids: Dose-dependent immunosuppression affecting cellular immunity\n- Chemotherapy agents: Myelosuppression, mucosal barrier disruption\n- Immunosuppressive drugs (transplant): Calcineurin inhibitors, anti-proliferatives, biologics\n- Biologic agents: Anti-TNF, anti-CD20, anti-IL-6\n- Long-term antibiotic use: Altered microbiome\n\n2. Infectious causes:\n- HIV/AIDS: CD4 T-cell depletion\n- CMV, EBV: Immune dysregulation\n- Measles: Temporary immunosuppression\n- Malaria, tuberculosis: Immune exhaustion\n\n3. Malignancy:\n- Hematologic cancers: Leukemia, lymphoma, multiple myeloma directly affect immune cells\n- Solid tumors: Metastasis to bone marrow\n- Paraneoplastic syndromes\n\n4. Metabolic and nutritional:\n- Diabetes mellitus: Neutrophil dysfunction, poor wound healing\n- Chronic kidney disease: Uremia affects immune function\n- Liver disease: Decreased complement, impaired Kupffer cell function\n- Malnutrition: Protein-energy, vitamin deficiencies (A, C, D, E, zinc)\n- Obesity: Chronic low-grade inflammation, immune dysregulation\n\n5. Physiologic states:\n- Pregnancy: Relative immunosuppression\n- Aging (immunosenescence): Decreased vaccine responses, increased infections\n- Neonates: Immature immune system\n- Prematurity\n\n6. Other conditions:\n- Autoimmune diseases: Disease and treatment effects\n- Burns: Barrier loss, immune dysfunction\n- Splenectomy: Decreased antibody responses, encapsulated organism risk\n- Protein-losing states: Nephrotic syndrome, protein-losing enteropathy\n- Sickle cell disease: Functional asplenia\n\nClinical presentation:\n- Recurrent or persistent infections\n- Opportunistic infections (unusual organisms)\n- Reactivation of latent infections\n- Poor response to treatment\n- Increased infection severity`,
      keyTerms: [
        { term: 'iatrogenic', definition: 'Caused by medical examination or treatment' },
        { term: 'myelosuppression', definition: 'Decreased bone marrow activity leading to low blood counts' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune function' },
        { term: 'opportunistic infection', definition: 'Infection by organisms that take advantage of weakened immunity' },
        { term: 'nephrotic syndrome', definition: 'Kidney disorder causing protein loss in urine' }
      ],
      analogies: [
        'Secondary immunodeficiency is like a dimmer switch - the immune system is not broken, just turned down',
        'Malnutrition affecting immunity is like running an engine without proper fuel'
      ],
      examples: [
        'A kidney transplant patient on anti-rejection medications who develops Pneumocystis pneumonia',
        'An elderly person with poor nutrition who gets shingles and has trouble recovering'
      ]
    },
    3: {
      level: 3,
      summary: 'Secondary immunodeficiency mechanisms include drug-induced immune cell depletion or dysfunction, pathogen-mediated immune damage, metabolic disturbances affecting immune function, and barrier integrity loss.',
      explanation: `Secondary immunodeficiency encompasses diverse mechanisms by which external factors impair immune system function. Understanding these mechanisms guides prevention and management strategies.\n\nMedication-induced mechanisms:\n\nCorticosteroids:\n- Anti-inflammatory effects through multiple pathways\n- Reduced neutrophil migration to sites of infection\n- Impaired T-cell activation and proliferation\n- Decreased cytokine production (IL-1, IL-2, IL-6, TNF)\n- Monocyte/macrophage dysfunction\n- Risk dose and duration dependent\n\nChemotherapy agents:\n- Direct myelosuppression affecting neutrophils, lymphocytes\n- Mucosal barrier disruption allowing pathogen entry\n- Dose-dependent, usually reversible\n- Neutropenia (<500 cells/uL) highest infection risk\n\nBiologic agents:\n- Anti-CD20 (rituximab): B-cell depletion for 6-12 months\n- Anti-TNF: Impaired granuloma formation, increased TB risk\n- Anti-IL-6: Decreased acute phase response, masking infection signs\n- Anti-IL-17: Increased Candida risk\n- CTLA-4-Ig: General immunosuppression\n- Anti-CD52 (alemtuzumab): Profound lymphopenia\n\nCalcineurin inhibitors (tacrolimus, cyclosporine):\n- Block T-cell activation via IL-2 suppression\n- Nephrotoxic, neurotoxic\n- Increased viral infection risk (CMV, BK virus)\n\nAntiproliferative agents (mycophenolate, azathioprine):\n- Inhibit lymphocyte proliferation\n- Preferentially affect T-cells\n- Increased viral and opportunistic infections\n\nInfectious mechanisms:\n\nHIV:\n- CD4 T-cell infection and depletion\n- Immune activation and exhaustion\n- Opportunistic infections when CD4 <200\n- Malignancy risk (Kaposi sarcoma, lymphoma)\n\nCMV:\n- Direct immunosuppression in transplant recipients\n- T-cell dysfunction\n- Increased risk of other opportunistic infections\n\nEBV:\n- B-cell immortalization (lymphoma risk in immunosuppressed)\n- Post-transplant lymphoproliferative disorder (PTLD)\n\nMetabolic mechanisms:\n\nDiabetes mellitus:\n- Neutrophil chemotaxis, phagocytosis, killing impaired\n- Poor wound healing\n- Hyperglycemia feeds bacteria and fungi\n- Microvascular disease causing tissue hypoxia\n- Increased skin, urinary, fungal infections\n\nChronic kidney disease:\n- Uremia inhibits neutrophil function\n- Decreased complement synthesis\n- Dialysis-related: Catheter access, bioincompatibility\n\nMalnutrition:\n- Protein-energy: Lymphoid tissue atrophy, decreased IgA\n- Vitamin A: Mucosal integrity, NK cell function\n- Vitamin D: Immune regulation, antimicrobial peptides\n- Zinc: T-cell function, wound healing\n\nAging (immunosenescence):\n- Thymic involution: Decreased naive T-cell output\n- Reduced vaccine responses\n- Increased infection risk\n- Chronic low-grade inflammation (inflammaging)`,
      keyTerms: [
        { term: 'calcineurin inhibitor', definition: 'Immunosuppressive drug blocking T-cell activation; tacrolimus, cyclosporine' },
        { term: 'neutropenia', definition: 'Low neutrophil count; high infection risk when <500 cells/uL' },
        { term: 'overwhelming post-splenectomy infection', definition: 'Rapid, severe sepsis in asplenic patients; high mortality' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging' },
        { term: 'immune amnesia', definition: 'Loss of previously acquired immunity; seen with measles infection' }
      ]
    },
    4: {
      level: 4,
      summary: 'Secondary immunodeficiency management includes identifying and treating underlying causes, antimicrobial prophylaxis, vaccination strategies, immunoglobulin replacement when indicated, and immune reconstitution monitoring.',
      explanation: `Management of secondary immunodeficiency requires a systematic approach addressing the underlying cause, preventing infections, and monitoring immune recovery.\n\nAssessment and diagnosis:\n\nHistory:\n- Medication review (current and past)\n- Infections: Type, frequency, severity, response to treatment\n- Underlying diseases\n- Surgical history (splenectomy)\n\nLaboratory evaluation:\n- CBC with differential\n- Comprehensive metabolic panel\n- Quantitative immunoglobulins\n- HIV testing\n- Blood glucose/A1c\n\nSpecific management by cause:\n\nMedication-induced:\n- Risk stratification by drug, dose, duration\n- Chemotherapy: G-CSF for high-risk regimens\n- Corticosteroids: PJP prophylaxis if >20mg prednisone for >1 month\n- Biologics: TB screening before anti-TNF, HBV screening before rituximab\n\nInfectious causes:\n\nHIV:\n- Antiretroviral therapy (immune restoration)\n- PJP prophylaxis if CD4 <200\n- Toxoplasma prophylaxis if CD4 <100 and seropositive\n- MAC prophylaxis if CD4 <50\n\nNutritional/metabolic:\n- Diabetes: Glycemic control, vaccinations\n- Malnutrition: Nutritional rehabilitation, micronutrient repletion\n- Nephrotic syndrome: Pneumococcal vaccination, consider prophylactic penicillin\n\nSplenectomy/asplenia:\n- Vaccination: Pneumococcal, meningococcal, Hib\n- Daily penicillin prophylaxis (especially first 2 years, children)\n- Medical alert identification\n\nAntimicrobial prophylaxis:\n\nIndications:\n- HIV: PJP, toxoplasma, MAC based on CD4 count\n- Transplant: CMV, fungal, PJP first 6 months\n- Chemotherapy: Bacterial, fungal, antiviral based on risk\n\nAgents:\n- PJP: TMP-SMX (first-line), dapsone, atovaquone\n- Fungal: Fluconazole, posaconazole\n- CMV: Valganciclovir\n\nVaccination strategies:\n\nGeneral principles:\n- Inactivated vaccines generally safe in immunosuppression\n- Live vaccines contraindicated with significant immunosuppression\n- Vaccinate before immunosuppression when possible\n\nPre-immunosuppression:\n- Complete all indicated vaccines\n- Live vaccines: MMR, varicella, zoster\n- Allow 2-4 weeks before starting immunosuppression\n\nDuring immunosuppression:\n- Annual influenza (inactivated)\n- Pneumococcal per guidelines\n- Hepatitis B (check titers)\n\nHousehold contacts:\n- Should be vaccinated (influenza, pertussis)\n- Can receive live vaccines\n\nImmunoglobulin replacement:\n\nIndications:\n- Drug-induced hypogammaglobulinemia with recurrent infections\n- Post-rituximab prolonged hypogammaglobulinemia\n- CLL with hypogammaglobulinemia\n\nDosing: Same as primary immunodeficiency\n\nMonitoring:\n- Immune recovery (CD4, lymphocyte counts)\n- Infection surveillance\n- Drug levels for immunosuppressants`,
      keyTerms: [
        { term: 'PJP prophylaxis', definition: 'Preventive treatment for Pneumocystis jirovecii pneumonia' },
        { term: 'valganciclovir', definition: 'Oral antiviral medication for CMV prevention and treatment' },
        { term: 'preemptive therapy', definition: 'Monitoring for infection and treating when detected' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome; paradoxical worsening with HIV treatment' },
        { term: 'G-CSF', definition: 'Granulocyte colony-stimulating factor; stimulates neutrophil production' }
      ],
      clinicalNotes: `Clinical pearls for secondary immunodeficiency:\n\n1. Drug-induced hypogammaglobulinemia is often overlooked - check IgG in patients on rituximab or long-term steroids with recurrent infections\n2. Asplenia is a life-long risk - patients need vaccination, prophylaxis, and education about fever emergencies\n3. PJP prophylaxis is indicated for CD4 <200, >20mg prednisone for >1 month, or combination immunosuppression\n\nChemotherapy patients:\n- Febrile neutropenia is a medical emergency - broad-spectrum antibiotics within 1 hour\n- G-CSF reduces neutropenia duration\n\nTransplant patients:\n- Highest infection risk first 6 months\n- CMV is the most common opportunistic infection\n\nHIV patients:\n- Immune restoration with ART can cause IRIS\n- Prophylaxis can be stopped when CD4 recovers\n\nWhen to refer to immunology:\n- Unclear cause of immunodeficiency\n- Features suggesting primary immunodeficiency`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include biomarkers for infection risk prediction, novel immunomodulatory therapies, immune reconstitution strategies, and management of complex immunosuppressed populations.',
      explanation: `Contemporary management of secondary immunodeficiency incorporates predictive biomarkers, precision medicine approaches, and specialized management of complex patient populations.\n\nBiomarkers for infection risk:\n\nNeutropenia:\n- ANC <500/uL: High risk\n- Duration >7-10 days: Cumulative risk\n\nImmune cell quantification:\n- CD4 count in HIV\n- CD19/CD20 B-cell count post-rituximab\n\nFunctional assays:\n- Neutrophil oxidative burst\n- T-cell proliferation\n\nMolecular biomarkers:\n- CMV viral load\n- HBV DNA (reactivation risk)\n\nNovel immunomodulatory therapies:\n\nImmunostimulants:\n- Interferon-gamma for CGD\n- IL-7: T-cell reconstitution\n- G-CSF, GM-CSF: Myeloid reconstitution\n\nComplement therapies:\n- Eculizumab for complement-mediated disease\n- C1-inhibitor for hereditary angioedema\n\nImmune reconstitution:\n\nHIV immune restoration:\n- ART initiation leads to immune recovery\n- Persistent inflammation despite viral suppression\n- Associated with non-AIDS events\n\nPost-chemotherapy:\n- Neutrophil recovery 7-14 days\n- Lymphocyte recovery weeks to months\n- Revaccination needed\n\nComplex populations:\n\nAutoimmune disease with immunosuppression:\n- Balancing disease control vs infection risk\n- Vaccination before intensive therapy\n\nSolid organ transplant:\n- Individualized immunosuppression\n- Minimization protocols to reduce infection\n\nCancer patients:\n- Risk-adapted prophylaxis\n- CAR-T cell therapy complications\n\nCOVID-19 considerations:\n- Immunosuppressed patients at higher risk\n- Impaired vaccine responses\n- Prolonged viral shedding\n\nFuture directions:\n\nPrecision medicine:\n- Pharmacogenomics of immunosuppression\n- Individualized dosing based on metabolism\n- Biomarker-guided prophylaxis\n\nCellular therapy:\n- CMV-specific T-cells for refractory infection\n- Off-the-shelf products\n\nArtificial intelligence:\n- Predicting infection risk\n- Early detection algorithms\n- Treatment optimization`,
      keyTerms: [
        { term: 'letermovir', definition: 'Newer antiviral for CMV prevention' },
        { term: 'adoptive immunotherapy', definition: 'Transfer of immune cells for infection treatment' },
        { term: 'immune risk phenotype', definition: 'Pattern of immune dysfunction associated with poor outcomes' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cells; causes prolonged immunosuppression' },
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response' }
      ],
      clinicalNotes: `Advanced clinical considerations:\n\nImmunodeficiency of critical illness:\n- Sepsis-associated immunosuppression common\n- Lymphopenia, decreased HLA-DR expression\n\nPost-CAR-T management:\n- Prolonged B-cell aplasia\n- Hypogammaglobulinemia requiring IVIG\n\nTransplant tolerance:\n- Minimization protocols reduce infection risk\n- Operational tolerance (no immunosuppression)\n\nEmerging pathogens:\n- Immunosuppressed susceptible to novel infections\n- Candida auris\n\nDrug interactions:\n- Azole antifungals: Major CYP interactions\n- TDM often needed\n\nHealth equity:\n- Access to prophylaxis\n- Global burden of secondary immunodeficiency`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 61: Secondary Immunodeficiency' },
    { id: '2', type: 'article', title: 'Guidelines for vaccination of immunocompromised hosts', authors: ['Rubin LG', 'Levin MJ', 'Ljungman P'], source: 'Clinical Infectious Diseases', chapter: '2014' }
  ],
  crossReferences: [
    { targetId: 'primary-immunodeficiency', targetType: 'condition', relationship: 'sibling' },
    { targetId: 'hiv-aids', targetType: 'condition', relationship: 'related' },
    { targetId: 'transplant-infections', targetType: 'concept', relationship: 'related' }
  ],
  tags: {
    systems: ['allergy-immunology', 'infectious-disease'],
    topics: ['immunodeficiency', 'immunosuppression', 'infection prevention'],
    keywords: ['secondary immunodeficiency', 'immunosuppression', 'chemotherapy', 'transplant', 'HIV', 'prophylaxis'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
