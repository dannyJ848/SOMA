/**
 * COVID-19 Comprehensive Educational Module
 * 
 * Complete educational content across all 6 complexity levels.
 * Covers: SARS-CoV-2 virology, transmission dynamics, immune response,
 * vaccines, variants, and long COVID.
 */

import type { EducationalModule } from '../../types.js';

export const covid19Module: EducationalModule = {
  id: 'infectious-disease-covid19-comprehensive',
  type: 'specialty',
  specialty: 'infectious-disease',
  
  title: 'Understanding COVID-19',
  description: 'Comprehensive guide to COVID-19, covering the SARS-CoV-2 virus, how it spreads, immune system response, vaccines, variants, and long-term effects. Learn how to protect yourself and understand the science behind the pandemic.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'immune-system-basics',
    'respiratory-system-basics',
    'virus-basics',
  ],
  
  learningObjectives: [
    'Understand what SARS-CoV-2 is and how it infects human cells',
    'Learn how COVID-19 spreads and effective prevention strategies',
    'Understand the immune response to COVID-19 infection',
    'Learn how vaccines work to prevent severe disease',
    'Understand viral variants and their implications',
    'Recognize the symptoms and management of long COVID',
  ],
  
  estimatedTime: {
    1: '20 minutes',
    2: '30 minutes',
    3: '45 minutes',
    4: '60 minutes',
    5: '80 minutes',
    6: '100 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `COVID-19 is a disease caused by a virus called SARS-CoV-2. This virus mainly attacks the lungs and breathing system. When someone gets infected, they might feel like they have a bad cold or flu - with fever, cough, and feeling very tired. The virus spreads through tiny droplets when people talk, cough, or sneeze. You can protect yourself by washing hands, wearing masks in crowded places, and getting vaccinated. Some people feel sick for a long time after COVID-19 - this is called long COVID.`,
      
      analogy: `Imagine your body is a house and the virus is a burglar trying to break in. The burglar (virus) has special keys (spike proteins) that can unlock the doors (ACE2 receptors) to your lung cells. Once inside, the burglar makes copies of itself and spreads throughout the house, causing damage. 

Your immune system is like a security team. When they spot the burglar, they send alarms (fever) and fight back. Vaccines are like showing your security team pictures of the burglar beforehand, so they know exactly what to look for and can stop the break-in faster.`,
      
      keyPoints: [
        'COVID-19 is caused by the SARS-CoV-2 virus',
        'The virus mainly affects the lungs and breathing',
        'Common symptoms include fever, cough, tiredness, and loss of taste or smell',
        'The virus spreads through droplets when people breathe, talk, cough, or sneeze',
        'Vaccines help your body learn to fight the virus before you get sick',
        'Long COVID means symptoms that last for months after the infection clears',
        'Washing hands, wearing masks, and staying home when sick helps stop spread',
      ],
      
      visualAid: 'covid-virus-structure-diagram',
      
      story: `Meet Marcus, a 35-year-old teacher. In 2021, Marcus caught COVID-19 from a colleague. At first, he just felt tired and had a sore throat. Then he developed a fever and lost his sense of taste - even his morning coffee tasted like water. Marcus stayed home for two weeks, rested, and drank plenty of fluids. His body fought off the virus, and he slowly got better. However, even months later, Marcus sometimes felt short of breath when climbing stairs - a sign of long COVID. He worked with his doctor on breathing exercises and gradually built back his strength. Marcus now stays up-to-date on his COVID-19 vaccines and wears masks during flu season to protect himself and his students.`,
    },
    
    // Level 2: Developing
    2: {
      summary: `COVID-19 is an infectious disease caused by the SARS-CoV-2 coronavirus. The virus enters human cells by attaching its spike proteins to ACE2 receptors, primarily found in the lungs. Once inside, the virus hijacks the cell's machinery to replicate. The immune system responds with both immediate (innate) and targeted (adaptive) defenses. Vaccines work by training the adaptive immune system to recognize and neutralize the virus quickly. Variants emerge when the virus mutates during replication, potentially changing how contagious or severe the disease is.`,
      
      keyConcepts: [
        {
          term: 'SARS-CoV-2',
          explanation: 'The specific coronavirus that causes COVID-19; "SARS" stands for Severe Acute Respiratory Syndrome',
        },
        {
          term: 'Coronavirus',
          explanation: 'A family of viruses with crown-like spikes; includes viruses that cause colds, MERS, and SARS',
        },
        {
          term: 'ACE2 receptor',
          explanation: 'A protein on cell surfaces that the virus uses as a doorway to enter cells',
        },
        {
          term: 'Spike protein',
          explanation: 'The protrusions on the virus surface that attach to ACE2 receptors; the main target of vaccines',
        },
        {
          term: 'Antibodies',
          explanation: 'Proteins made by the immune system that recognize and neutralize specific viruses or bacteria',
        },
        {
          term: 'Variant',
          explanation: 'A version of the virus with genetic changes (mutations) that may affect its behavior',
        },
        {
          term: 'Long COVID',
          explanation: 'Persistent symptoms lasting 3 months or more after the initial infection',
        },
      ],
      
      keyPoints: [
        'SARS-CoV-2 is an RNA virus that mutates as it replicates, creating new variants',
        'The spike protein binds to ACE2 receptors to enter cells, especially in the lungs',
        'The immune system has two responses: innate (immediate) and adaptive (targeted and memory)',
        'Vaccines teach the adaptive immune system to recognize spike proteins without causing disease',
        'Variants can be more contagious, cause different symptoms, or evade some immunity',
        'Long COVID affects multiple body systems and can include fatigue, brain fog, and breathing problems',
        'Treatment depends on severity: rest and fluids for mild cases; antivirals or oxygen for severe cases',
      ],
      
      howItWorks: `1. Virus enters through nose, mouth, or eyes
2. Spike proteins attach to ACE2 receptors on lung cells
3. Virus enters the cell and releases its genetic material (RNA)
4. Cell's machinery is hijacked to make viral proteins
5. New virus particles are assembled and released
6. Released viruses infect neighboring cells
7. Immune cells detect the infection and release signals (cytokines)
8. Innate immune response causes fever and inflammation
9. Adaptive immune system creates antibodies against spike protein
10. T-cells destroy infected cells
11. Memory B and T cells remain for future protection
12. If vaccinated, memory cells respond faster and stronger`,
    },
    
    // Level 3: Standard
    3: {
      summary: `COVID-19, caused by SARS-CoV-2, is a respiratory disease with potential multi-system involvement. The virus is a positive-sense single-stranded RNA betacoronavirus. It enters host cells via the ACE2 receptor, facilitated by TMPRSS2-mediated spike protein priming. Pathogenesis involves direct viral cytopathic effects and immune-mediated damage. The disease course ranges from asymptomatic to severe pneumonia, acute respiratory distress syndrome (ARDS), and multi-organ failure. Risk factors include advanced age, obesity, diabetes, cardiovascular disease, and immunocompromise. Vaccines utilize mRNA, viral vector, or protein subunit platforms to induce neutralizing antibodies and T-cell responses.`,
      
      mechanisms: [
        {
          name: 'Viral Entry and Replication',
          description: 'Spike protein S1 subunit binds ACE2; TMPRSS2 cleaves S2 subunit enabling membrane fusion. Viral RNA is released, translated into polyproteins, and replicated by RNA-dependent RNA polymerase. New virions assemble in the ER-Golgi intermediate compartment.',
        },
        {
          name: 'Innate Immune Response',
          description: 'Pattern recognition receptors (TLR3, TLR7, RIG-I, MDA5) detect viral RNA. Type I interferons (IFN-α/β) are produced, inducing antiviral state. NK cells and macrophages respond to infected cells. Dysregulated response causes cytokine release syndrome.',
        },
        {
          name: 'Adaptive Immune Response',
          description: 'Antigen-presenting cells activate CD4+ and CD8+ T cells. B cells produce neutralizing antibodies primarily against the receptor-binding domain (RBD) of spike protein. Memory B and T cells provide durable immunity.',
        },
        {
          name: 'Pathological Progression',
          description: 'Early: viral replication in upper respiratory tract. Progressive: spread to lower respiratory tract, alveolar damage, hyaline membrane formation. Severe: diffuse alveolar damage, microthrombi, endothelial dysfunction, multi-organ failure.',
        },
        {
          name: 'Long COVID Pathophysiology',
          description: 'Persistent viral reservoirs, chronic inflammation, autoimmunity, microvascular dysfunction, and tissue damage contribute to prolonged symptoms. Multiple systems affected including neurologic, cardiovascular, and metabolic.',
        },
      ],
      
      clinicalCorrelates: [
        'RT-PCR: Gold standard for acute diagnosis; detects viral RNA',
        'Rapid antigen tests: Detect viral proteins; high specificity, variable sensitivity',
        'Serology: Detects antibodies (IgM, IgG, IgA); indicates past infection or vaccine response',
        'Chest CT: Ground-glass opacities, consolidation in severe disease',
        'D-dimer: Elevated in severe disease; indicates thrombotic risk',
        'C-reactive protein: Marker of inflammation; correlates with severity',
        'Lymphopenia: Common finding; reflects immune dysregulation',
      ],
      
      normalVsAbnormal: {
        normal: 'Respiratory epithelium intact; alveolar gas exchange efficient; immune response appropriately controlled; coagulation balance maintained.',
        abnormal: 'Viral invasion causes epithelial damage, alveolar exudate, and impaired gas exchange. Excessive inflammation leads to cytokine storm. Endothelial injury triggers microthrombi. Systemic hyperinflammation affects multiple organs.',
        whyItMatters: 'Early antiviral treatment and immunomodulation can prevent progression to severe disease and long-term complications.',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `SARS-CoV-2 is a betacoronavirus with a ~30kb positive-sense RNA genome encoding structural (S, E, M, N), non-structural (nsp1-16), and accessory proteins. The spike protein's receptor-binding domain (RBD) undergoes conformational changes between "up" (binding-competent) and "down" states. Viral entry can occur via plasma membrane fusion (TMPRSS2-dependent) or endosomal entry (cathepsin-dependent). The virus suppresses interferon responses through multiple mechanisms including nsp1-mediated host translation shutdown, ORF6 inhibition of nuclear import, and PLpro-mediated deISGylation. Severe disease involves dysregulated type I interferon responses, often with autoantibodies against IFN-α/β/ω.`,
      
      molecularMechanisms: [
        {
          pathway: 'Spike Protein-Mediated Entry',
          defect: 'S1/S2 cleavage by furin; S2\' cleavage by TMPRSS2 or cathepsin L',
          consequence: 'Conformational change exposes fusion peptide; membrane fusion releases nucleocapsid into cytoplasm',
        },
        {
          pathway: 'Viral Replication Complex',
          defect: 'nsp3 and nsp4 remodel ER membranes into double-membrane vesicles (DMVs)',
          consequence: 'DMVs serve as replication organelles housing RTC; protects viral RNA from innate sensors',
        },
        {
          pathway: 'Interferon Antagonism',
          defect: 'Multiple viral proteins (nsp1, nsp3, nsp5, nsp13, nsp14, nsp15, N, ORF6, ORF7a) target IFN pathway',
          consequence: 'Delayed interferon response; impaired antiviral state; enhanced viral replication',
        },
        {
          pathway: 'Cytokine Storm',
          defect: 'Hyperactivation of NLRP3 inflammasome; massive IL-1β, IL-6, TNF-α release',
          consequence: 'Vascular leakage, ARDS, disseminated intravascular coagulation, multi-organ failure',
        },
        {
          pathway: 'Antibody-Dependent Enhancement (ADE)',
          defect: 'Sub-neutralizing antibodies facilitate Fc-receptor mediated viral entry',
          consequence: 'Enhanced infection of monocytes/macrophages; potential mechanism for severe disease',
        },
        {
          pathway: 'Vaccine-Induced Immunity',
          defect: 'mRNA vaccines encode prefusion-stabilized spike (2P/6P mutations)',
          consequence: 'Robust germinal center response; affinity maturation; durable memory B cells; broad neutralizing antibodies',
        },
      ],
      
      pathways: [
        {
          name: 'Viral Life Cycle',
          steps: [
            'Spike protein binds ACE2; TMPRSS2 primes spike',
            'Membrane fusion or endosomal entry',
            'Genome release and translation of ORF1a/1b polyproteins',
            'nsp3-nsp4 remodel ER into double-membrane vesicles',
            'RTC assembles: nsp7-nsp8-nsp12 (RdRp) + nsp13 (helicase)',
            'Genomic and subgenomic RNA synthesis (-sgRNA template)',
            'Structural proteins translated on ER; assemble at ERGIC',
            'Nucleocapsid encapsidates genomic RNA',
            'Virions bud into ERGIC lumen',
            'Transport via secretory pathway; egress via exocytosis',
          ],
          regulation: 'Viral proteases (nsp5/Mpro, nsp3/PLpro) process polyproteins; nsp10 cofactor for nsp14 (exonuclease) and nsp16 (methyltransferase)',
        },
        {
          name: 'Type I Interferon Signaling',
          steps: [
            'Viral RNA detected by RIG-I, MDA5, TLR3, TLR7/8',
            'MAVS, TRIF, MyD88 activate TBK1 and IKKε',
            'IRF3 and IRF7 phosphorylation and dimerization',
            'Nuclear translocation; IFN-α/β gene transcription',
            'IFNAR receptor activation (JAK-STAT pathway)',
            'ISGF3 complex (STAT1/STAT2/IRF9) formation',
            'ISRE-driven transcription of ISGs',
            'Antiviral effectors: PKR, OAS/RNaseL, MX1, IFIT proteins',
          ],
          regulation: 'Viral ORF6 blocks STAT1 nuclear import; nsp1 suppresses host translation; autoantibodies against IFN-α/β in severe COVID-19',
        },
      ],
      
      references: [
        'Zhu N, et al. A novel coronavirus from patients with pneumonia in China, 2019. N Engl J Med. 2020;382(8):727-733.',
        'Hoffmann M, et al. SARS-CoV-2 cell entry depends on ACE2 and TMPRSS2 and is blocked by a clinically proven protease inhibitor. Cell. 2020;181(2):271-280.',
        'Blanco-Melo D, et al. Imbalanced host response to SARS-CoV-2 drives development of COVID-19. Cell. 2020;181(5):1036-1045.',
        'Bastard P, et al. Autoantibodies against type I IFNs in patients with life-threatening COVID-19. Science. 2020;370(6515):eabd4585.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `The evolutionary dynamics of SARS-CoV-2 have produced successive variants of concern (VOCs) characterized by altered transmission, immune evasion, and pathogenicity. Key substitutions (D614G, N501Y, E484K/Q, L452R/Q, K417N/T, T478K) in spike protein affect ACE2 affinity, furin cleavage, and antigenic properties. The transition from Delta to Omicron represented a shift toward immune evasion over intrinsic transmissibility, with extensive antigenic drift enabling breakthrough infection. T-cell responses remain more conserved than antibodies, providing protection against severe disease. The evolutionary trajectory suggests continued antigenic evolution with periodic convergent evolution (e.g., R346X, K444X, L452X, F486X mutations).`,
      
      researchFrontiers: [
        'Pan-coronavirus vaccines: Targeting conserved epitopes in S2 subunit, N protein, or non-spike proteins',
        'Intranasal vaccines: Mucosal immunity (IgA) for prevention of infection, not just disease',
        'Antiviral resistance: Monitoring for nirmatrelvir/ritonavir (Paxlovid) resistance mutations in Mpro',
        'Viral reservoirs: Persistence in tissue sanctuaries (gut, brain, lymphoid tissue) and long COVID',
        'Immune imprinting: Original antigenic sin affecting responses to new variants',
        'Host genetics: HLA associations, interferon pathway variants affecting disease severity',
        'Variant evolution: Predictive modeling of antigenic drift and escape mutations',
      ],
      
      controversies: [
        {
          topic: 'Origins of SARS-CoV-2',
          perspectives: [
            'Zoonotic spillover: Natural emergence from wildlife trade (bats → intermediate host → humans)',
            'Laboratory incident: Accidental release from research laboratory in Wuhan',
            'Evidence gaps: No definitive intermediate host identified; furin cleavage site unusual',
            'Scientific consensus: Most virologists favor natural origin but uncertainties remain',
          ],
        },
        {
          topic: 'Mask Effectiveness',
          perspectives: [
            'N95/FFP2 respirators: High-quality evidence for healthcare settings',
            'Surgical masks: Moderate evidence for source control and protection',
            'Cloth masks: Limited and inconsistent evidence; highly variable by material/fit',
            'Community masking: Ecological studies show correlation but RCT evidence limited',
          ],
        },
        {
          topic: 'Population Immunity Strategies',
          perspectives: [
            'Zero-COVID: Aggressive suppression to elimination (China until 2022)',
            'Focused protection: Shield vulnerable while allowing spread in low-risk (Great Barrington Declaration)',
            'Vaccine-plus: High vaccination + targeted measures (most Western countries)',
            'Trade-offs: Economic, educational, and mental health impacts vs. mortality',
          ],
        },
        {
          topic: 'Booster Vaccination Frequency',
          perspectives: [
            'Frequent boosting: Maintain high neutralizing antibody titers against variants',
            'Annual seasonal approach: Similar to influenza, match to circulating strains',
            'Risk-stratified: Focus on high-risk groups; infection-derived immunity sufficient for young/healthy',
            'Hybrid immunity: Previous infection + vaccination provides durable protection',
          ],
        },
      ],
      
      statisticalContext: `Vaccine effectiveness (VE) against symptomatic infection has declined with variant evolution but protection against severe disease remains robust:

- Original strain: VE ~95% (symptomatic), >95% (severe)
- Delta variant: VE ~80% (symptomatic), ~90% (severe)
- Omicron BA.1: VE ~30-40% (symptomatic), ~70% (severe)
- Omicron BQ/XBB lineages: VE ~20-30% (symptomatic), ~50-60% (severe)

Effectiveness of bivalent boosters against symptomatic BA.5 infection: 40-60% in first 2 months, waning to 20-30% by 4-6 months.

Long COVID prevalence: 10-30% of infected individuals; risk factors include female sex, age 35-50, severe acute illness, and pre-existing autoimmune conditions.

Case fatality rate evolution: Original ~1-2%, Alpha ~1.5-2%, Delta ~0.5-1%, Omicron ~0.1-0.3% (population-level, accounting for immunity).`,
      
      references: [
        'Cele S, et al. Omicron extensively but incompletely escapes Pfizer BNT162b2 neutralization. Nature. 2022;602(7898):654-656.',
        'Evans JP, et al. Neutralization of SARS-CoV-2 Omicron sub-lineages BA.1, BA.1.1, and BA.2. Cell Host Microbe. 2022;30(8):1093-1102.',
        'Tuekprakhon A, et al. Antibody escape of SARS-CoV-2 Omicron BA.4 and BA.5 from vaccine and BA.1 serum. Cell. 2022;185(14):2422-2433.',
        'Davis-Gardner ME, et al. mRNA vaccination enhances protection against SARS-CoV-2 Omicron variant in previously infected individuals. Nat Commun. 2023;14(1):1038.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `Clinical management of COVID-19 requires risk stratification, early intervention in high-risk patients, and appropriate supportive care. Outpatients with mild-moderate disease and risk factors for progression should receive nirmatrelvir/ritonavir (Paxlovid), remdesivir, or molnupiravir within 5 days of symptom onset. Inpatients with severe disease benefit from remdesivir, dexamethasone, and IL-6 inhibitors (tocilizumab) when appropriate. Long COVID management requires multidisciplinary care addressing cardiopulmonary, neurologic, and psychiatric sequelae. Infection prevention and control measures remain important in healthcare settings.`,
      
      clinicalApproach: [
        'Risk stratification: Age, vaccination status, immunocompromise, comorbidities (obesity, diabetes, CVD, lung disease)',
        'Outpatient treatment: Nirmatrelvir/ritonavir (preferred), remdesivir (3-day IV), molnupiravir (if others contraindicated) within 5 days',
        'Hospitalized patients: Remdesivir (if requiring supplemental oxygen), dexamethasone (if requiring oxygen), tocilizumab (if progressive despite steroids)',
        'Supportive care: Oxygen therapy, prone positioning, VTE prophylaxis, fluid management',
        'Pediatric considerations: Multisystem inflammatory syndrome (MIS-C) requires IVIG and steroids',
        'Long COVID evaluation: Cardiopulmonary exercise testing, autonomic testing, cognitive assessment, specialist referrals',
        'Prevention: Stay current with vaccinations; consider pre-exposure prophylaxis (tixagevimab/cilgavimab) for immunocompromised',
      ],
      
      differentialConsiderations: [
        'Influenza: Seasonal pattern, rapid antigen test differentiation, treat with oseltamivir',
        'RSV: More common in young children and elderly; no specific outpatient treatment',
        'Bacterial pneumonia: Focal consolidation, productive cough, responds to antibiotics',
        'Heart failure exacerbation: Orthopnea, elevated BNP, pulmonary edema on imaging',
        'Pulmonary embolism: Pleuritic chest pain, tachycardia, elevated D-dimer, CT angiography diagnostic',
        'Acute eosinophilic pneumonia: Hypoxemic respiratory failure, eosinophils in BAL',
        'Acute interstitial pneumonia: Rapidly progressive, often requires lung biopsy',
        'Drug-induced lung disease: Temporal relationship to medication, specific patterns on HRCT',
      ],
      
      guidelines: [
        'NIH COVID-19 Treatment Guidelines. https://www.covid19treatmentguidelines.nih.gov/',
        'IDSA Guidelines on the Treatment and Management of Patients with COVID-19. Clin Infect Dis. 2023.',
        'WHO Therapeutics and COVID-19: Living Guideline, 2023 update. BMJ. 2023.',
        'CDC Clinical Guidance for COVID-19. https://www.cdc.gov/coronavirus/2019-ncov/hcp/clical-guidance-management.html',
      ],
      
      caseExamples: [
        {
          presentation: '72-year-old male with hypertension and diabetes presents 3 days after symptom onset (fever, cough, myalgias). Unvaccinated. Oxygen saturation 94% on room air. Chest CT shows bilateral ground-glass opacities.',
          keyFindings: [
            'High-risk for progression (age >65, diabetes, unvaccinated)',
            'Early in disease course (day 3) - eligible for antiviral therapy',
            'Mild hypoxemia - outpatient candidate with close monitoring',
            'CT findings consistent with COVID-19 pneumonia',
          ],
          teachingPoints: [
            'Initiate nirmatrelvir/ritonavir (Paxlovid) within 5 days of symptom onset',
            'Check drug interactions: ACE inhibitors (safe), statins (hold during treatment), anticoagulants (monitor INR)',
            'Rebound symptoms after Paxlovid: Can occur 2-8 days after completing course; typically mild; retreatment not recommended',
            'Home pulse oximetry monitoring; return precautions for worsening dyspnea',
            'Discuss vaccination post-recovery; defer 3 months post-infection',
          ],
        },
        {
          presentation: '45-year-old female healthcare worker, fully vaccinated and boosted, presents with 6 weeks of persistent fatigue, brain fog, and exertional dyspnea following COVID-19 infection. Normal physical exam. Normal chest X-ray.',
          keyFindings: [
            'Classic long COVID presentation with fatigue, cognitive impairment, dyspnea',
            'Normal imaging makes structural lung disease less likely',
            'Previously healthy, vaccinated - demonstrates long COVID can affect anyone',
            '6-week duration meets criteria for long COVID evaluation',
          ],
          teachingPoints: [
            'Comprehensive evaluation to rule out other causes: CBC, CMP, TSH, BNP, troponin, EKG, echocardiogram',
            'Cardiopulmonary exercise testing (CPET) to assess for deconditioning vs. cardiopulmonary limitation',
            'Autonomic testing if orthostatic intolerance symptoms present',
            'Multidisciplinary approach: Cardiology, pulmonology, neurology, rehabilitation',
            'Evidence-based treatments: Pacing for PEM, pulmonary rehab, cognitive rehabilitation',
            'Prognosis: Most improve over 6-12 months; small fraction have persistent symptoms >1 year',
          ],
        },
        {
          presentation: '28-year-old male, 2 weeks post-COVID recovery, presents with fever, abdominal pain, rash, and conjunctivitis. Tachycardic with hypotension. Elevated troponin, BNP, ferritin, and D-dimer.',
          keyFindings: [
            'Multisystem inflammatory syndrome in adults (MIS-A) - rare but serious',
            'Temporal relationship to COVID-19 (typically 2-6 weeks post-infection)',
            'Multi-organ involvement: Cardiac, GI, dermatologic, hematologic',
            'Hyperinflammatory markers (ferritin, CRP, D-dimer)',
          ],
          teachingPoints: [
            'MIS-A is adult equivalent of MIS-C in children; immune-mediated post-infectious syndrome',
            'Diagnostic criteria: Severe illness, multi-organ involvement, recent COVID-19, elevated inflammatory markers, alternative diagnoses excluded',
            'Immediate treatment: IVIG 2g/kg + methylprednisolone 1-2mg/kg/day',
            'Cardiac monitoring for arrhythmias and heart failure',
            'VTE prophylaxis given hypercoagulable state',
            'Typically responsive to immunomodulatory therapy; mortality ~2-5%',
          ],
        },
      ],
      
      references: [
        'Hammond J, et al. Oral nirmatrelvir for high-risk, nonhospitalized adults with COVID-19. N Engl J Med. 2022;386(15):1397-1408.',
        'RECOVERY Collaborative Group. Dexamethasone in hospitalized patients with COVID-19. N Engl J Med. 2021;384(8):693-704.',
        'Al-Aly Z, et al. Long COVID after breakthrough SARS-CoV-2 infection. Nat Med. 2022;28(7):1461-1467.',
        'Taquet M, et al. Neurological and psychiatric risk trajectories after SARS-CoV-2 infection: an analysis of 2-year retrospective cohort studies. Lancet Psychiatry. 2022;9(10):657-675.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'lungs', focus: 'alveoli', description: 'Site of gas exchange; primary target of SARS-CoV-2 infection' },
      { structure: 'lungs', focus: 'bronchioles', description: 'Small airways where inflammation causes symptoms' },
      { structure: 'respiratory-system', focus: 'nasal-cavity', description: 'Primary site of viral entry and initial replication' },
      { structure: 'immune-system', focus: 'lymph-nodes', description: 'Sites of adaptive immune activation and antibody production' },
      { structure: 'cardiovascular-system', focus: 'endothelium', description: 'Target of vascular injury and thrombosis in severe COVID-19' },
      { structure: 'nervous-system', focus: 'olfactory-bulb', description: 'Site of viral entry to CNS; explains loss of smell' },
    ],
    
    relatedLabs: [
      'covid-pcr-test',
      'covid-antigen-test',
      'covid-antibody-test',
      'complete-blood-count',
      'c-reactive-protein',
      'd-dimer',
      'ferritin',
      'lactate-dehydrogenase',
    ],
    
    relatedMedications: [
      'nirmatrelvir-ritonavir',
      'remdesivir',
      'molnupiravir',
      'dexamethasone',
      'tocilizumab',
      'baricitinib',
      'covid-vaccines-mrna',
      'covid-vaccines-viral-vector',
    ],
    
    relatedConditions: [
      'pneumonia-viral',
      'acute-respiratory-distress-syndrome',
      'sepsis',
      'deep-vein-thrombosis',
      'pulmonary-embolism',
      'multisystem-inflammatory-syndrome',
      'chronic-fatigue-syndrome',
      'postural-orthostatic-tachycardia-syndrome',
    ],
    
    visualizations: [
      { type: '3d-model', id: 'sars-cov-2-structure', caption: '3D model of SARS-CoV-2 virus showing spike proteins' },
      { type: 'animation', id: 'viral-entry-mechanism', caption: 'Animation of spike protein binding to ACE2 receptor' },
      { type: 'diagram', id: 'immune-response-timeline', caption: 'Timeline of innate and adaptive immune response to COVID-19' },
      { type: 'graph', id: 'vaccine-efficacy-variants', caption: 'Vaccine effectiveness against different variants over time' },
      { type: 'diagram', id: 'long-covid-symptoms', caption: 'Multi-system symptoms associated with long COVID' },
    ],
  },
  
  quiz: {
    title: 'Test Your COVID-19 Knowledge',
    questions: [
      {
        id: 'covid-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'How does the SARS-CoV-2 virus primarily enter human cells?',
        options: [
          'Through skin pores',
          'Using spike proteins that attach to ACE2 receptors',
          'By dissolving cell walls',
          'Through hair follicles',
        ],
        correctAnswer: 1,
        explanation: 'SARS-CoV-2 uses its spike proteins to bind to ACE2 receptors on human cells, primarily in the lungs. This is like a key fitting into a lock, allowing the virus to enter and infect the cell.',
      },
      {
        id: 'covid-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What is the main purpose of COVID-19 vaccines?',
        options: [
          'To kill the virus immediately in your body',
          'To teach your immune system to recognize and fight the virus',
          'To replace your immune system',
          'To prevent all types of infections',
        ],
        correctAnswer: 1,
        explanation: 'Vaccines work by showing your immune system what the virus looks like (specifically its spike protein) without causing disease. This trains your body to respond quickly and effectively if you encounter the real virus later.',
      },
      {
        id: 'covid-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which of the following is a hallmark of the innate immune response to COVID-19?',
        options: [
          'Production of specific antibodies',
          'Release of type I interferons and activation of NK cells',
          'Formation of memory B cells',
          'Affinity maturation in germinal centers',
        ],
        correctAnswer: 1,
        explanation: 'The innate immune response is the first line of defense and includes pattern recognition receptors detecting viral RNA, release of type I interferons (IFN-α/β), and activation of NK cells and macrophages. Antibodies and memory B cells are part of the later adaptive immune response.',
      },
      {
        id: 'covid-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What is the mechanism by which nirmatrelvir (Paxlovid) inhibits SARS-CoV-2 replication?',
        options: [
          'It blocks the ACE2 receptor',
          'It inhibits the viral main protease (Mpro/3CLpro) required for polyprotein processing',
          'It prevents spike protein binding',
          'It destroys viral RNA directly',
        ],
        correctAnswer: 1,
        explanation: 'Nirmatrelvir is a reversible covalent inhibitor of the SARS-CoV-2 main protease (Mpro, also called 3CLpro). This protease is essential for cleaving viral polyproteins into functional proteins. Inhibition prevents viral replication. Ritonavir is added to slow metabolism of nirmatrelvir.',
      },
      {
        id: 'covid-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'Which patient should receive nirmatrelvir/ritonavir (Paxlovid) for outpatient treatment of COVID-19?',
        options: [
          'Any patient with a positive COVID-19 test regardless of symptoms',
          'A 28-year-old healthy, vaccinated patient with mild symptoms for 7 days',
          'A 68-year-old with diabetes and hypertension, symptomatic for 3 days, not requiring oxygen',
          'A patient already hospitalized requiring high-flow oxygen',
        ],
        correctAnswer: 2,
        explanation: 'Nirmatrelvir/ritonavir is indicated for high-risk outpatients with mild-moderate COVID-19 within 5 days of symptom onset. The 68-year-old with diabetes and hypertension has risk factors for progression and is within the treatment window. It is not indicated for hospitalized patients or those without risk factors.',
      },
    ],
    passingScore: 80,
  },
  
  references: [
    {
      citation: 'Zhu N, et al. A novel coronavirus from patients with pneumonia in China, 2019. N Engl J Med. 2020;382(8):727-733.',
      doi: '10.1056/NEJMoa2001017',
    },
    {
      citation: 'Hoffmann M, et al. SARS-CoV-2 cell entry depends on ACE2 and TMPRSS2 and is blocked by a clinically proven protease inhibitor. Cell. 2020;181(2):271-280.',
      doi: '10.1016/j.cell.2020.02.052',
    },
    {
      citation: 'Polack FP, et al. Safety and efficacy of the BNT162b2 mRNA COVID-19 vaccine. N Engl J Med. 2020;383(27):2603-2615.',
      doi: '10.1056/NEJMoa2034577',
    },
    {
      citation: 'Hammond J, et al. Oral nirmatrelvir for high-risk, nonhospitalized adults with COVID-19. N Engl J Med. 2022;386(15):1397-1408.',
      doi: '10.1056/NEJMoa2118542',
    },
    {
      citation: 'Al-Aly Z, et al. Long COVID after breakthrough SARS-CoV-2 infection. Nat Med. 2022;28(7):1461-1467.',
      doi: '10.1038/s41591-022-01840-0',
    },
    {
      citation: 'NIH COVID-19 Treatment Guidelines. National Institutes of Health. 2024.',
      url: 'https://www.covid19treatmentguidelines.nih.gov/',
    },
    {
      citation: 'WHO Therapeutics and COVID-19: Living Guideline. World Health Organization. 2023.',
      url: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-therapeutics-2023.1',
    },
    {
      citation: 'CDC Clinical Guidance for COVID-19. Centers for Disease Control and Prevention. 2024.',
      url: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/clinical-guidance-management.html',
    },
  ],
  
  resources: [
    {
      title: 'WHO Coronavirus Disease (COVID-19) Dashboard',
      type: 'website',
      url: 'https://covid19.who.int/',
      description: 'Global COVID-19 statistics and trends',
    },
    {
      title: 'CDC COVID-19 Information',
      type: 'website',
      url: 'https://www.cdc.gov/coronavirus/2019-ncov/',
      description: 'Comprehensive COVID-19 guidance for healthcare providers and public',
    },
    {
      title: 'NIH COVID-19 Treatment Guidelines',
      type: 'website',
      url: 'https://www.covid19treatmentguidelines.nih.gov/',
      description: 'Evidence-based treatment recommendations for COVID-19',
    },
    {
      title: 'Long COVID Alliance',
      type: 'website',
      url: 'https://longcovidalliance.org/',
      description: 'Resources and support for long COVID patients',
    },
  ],
};

export default covid19Module;
