/**
 * Acne Vulgaris Educational Module
 * 
 * Comprehensive educational content across all 6 complexity levels.
 * Covers pathophysiology, treatment, and clinical management of acne.
 */

import type { EducationalModule } from '../types.js';

export const acneComprehensiveModule: EducationalModule = {
  id: 'acne-vulgaris-comprehensive',
  type: 'specialty',
  specialty: 'dermatology',
  
  // Metadata
  title: 'Understanding Acne Vulgaris',
  description: 'A complete guide to acne: what causes it, how treatments work, and how to prevent scarring. From basic skin biology to advanced clinical management.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  // Learning structure
  prerequisites: [
    'skin-anatomy-basics',
    'sebaceous-gland-function',
    'hormone-basics',
  ],
  
  learningObjectives: [
    'Understand the four main factors that cause acne',
    'Learn how sebum production contributes to acne formation',
    'Understand the role of Cutibacterium acnes bacteria',
    'Know how retinoids and benzoyl peroxide work to treat acne',
    'Recognize hormonal influences on acne development',
    'Understand acne scarring mechanisms and prevention',
    'Be able to identify different types of acne lesions',
  ],
  
  estimatedTime: {
    1: '12 minutes',
    2: '18 minutes',
    3: '25 minutes',
    4: '40 minutes',
    5: '55 minutes',
    6: '75 minutes',
  },
  
  // Content by complexity level
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Acne happens when tiny holes in your skin called pores get clogged. Each pore has a hair and an oil gland. The oil keeps your skin soft. But sometimes the oil mixes with dead skin cells and blocks the pore. Bacteria that live on your skin can then grow inside the clogged pore, causing redness and swelling. Hormones, especially during puberty, tell your skin to make more oil, which is why teenagers often get acne.`,
      
      analogy: `Think of your skin like a garden with tiny sprinklers (pores). The sprinklers release water (oil) to keep the garden healthy:

1. Sometimes dirt and leaves (dead skin cells) clog the sprinkler heads
2. When blocked, water builds up underneath (oil trapped in pore)
3. Tiny bugs (bacteria) that normally live in the garden start multiplying in the trapped water
4. The area around the clogged sprinkler gets swollen and angry (red, inflamed pimple)
5. During puberty, the water pressure increases (more hormones = more oil), making clogs more likely`,
      
      keyPoints: [
        'Your skin has tiny holes called pores that can get clogged',
        'Oil from your skin mixes with dead skin cells to block pores',
        'Bacteria living on skin multiply in clogged pores',
        'Hormones during puberty increase oil production',
        'Picking at pimples can cause permanent scars',
        'Washing face twice daily helps prevent acne',
      ],
      
      visualAid: 'pore-clogging-diagram-simple',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Acne vulgaris develops through four interconnected processes: increased sebum production, abnormal skin cell shedding (follicular hyperkeratinization), bacterial colonization by Cutibacterium acnes, and inflammation. Sebaceous glands produce sebum, an oily substance that normally protects skin. During puberty, androgens (male hormones present in both sexes) stimulate these glands to enlarge and produce more sebum. Meanwhile, skin cells inside hair follicles shed abnormally and clump together, creating a plug that traps sebum and creates an environment where bacteria thrive.`,
      
      keyConcepts: [
        {
          term: 'Sebum',
          explanation: 'An oily substance produced by sebaceous glands that lubricates skin and hair. Too much sebum contributes to acne.',
        },
        {
          term: 'Sebaceous Gland',
          explanation: 'Small glands in the skin attached to hair follicles that produce sebum. They enlarge during puberty.',
        },
        {
          term: 'Cutibacterium acnes',
          explanation: 'A bacteria that normally lives on skin without causing problems, but multiplies in clogged pores and triggers inflammation.',
        },
        {
          term: 'Androgens',
          explanation: 'Hormones like testosterone that increase during puberty and stimulate sebum production.',
        },
        {
          term: 'Follicle',
 explanation: 'The structure in skin containing a hair and its associated sebaceous gland.',
        },
      ],
      
      keyPoints: [
        'Four factors cause acne: excess oil, clogged pores, bacteria, and inflammation',
        'Sebaceous glands make oil (sebum) to protect skin',
        'Androgens during puberty make these glands larger and more active',
        'Skin cells stick together abnormally inside follicles, forming plugs',
        'Cutibacterium acnes bacteria feed on trapped sebum and multiply',
        'The immune system responds to bacteria, causing redness and swelling',
        'Deep inflammation can damage skin and cause scars',
      ],
      
      howItWorks: `1. Androgens stimulate sebaceous glands → more sebum production
2. Follicular keratinocytes shed abnormally → cells clump together
3. The clumped cells block the follicle opening → microcomedone forms
4. Sebum accumulates behind the blockage
5. Cutibacterium acnes proliferates in the anaerobic (oxygen-poor) environment
6. Bacterial products trigger immune response → inflammation
7. Visible acne lesions develop: whiteheads, blackheads, papules, pustules`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Acne vulgaris is a chronic inflammatory disorder of the pilosebaceous unit involving four pathogenic factors: (1) follicular hyperkeratinization with subsequent microcomedone formation, (2) increased sebum production mediated by androgens, (3) colonization of the follicle by Cutibacterium acnes, and (4) inflammatory and immune responses. The microcomedone, invisible to the naked eye, is the precursor lesion to all clinical acne. Treatment targets one or more of these factors to interrupt the acne cycle.`,
      
      mechanisms: [
        {
          name: 'Follicular Hyperkeratinization',
 description: 'Abnormal shedding and cohesion of keratinocytes within the follicle. The cells fail to separate normally and form a plug (microcomedone) that blocks the follicular opening.',
        },
        {
          name: 'Sebum Production',
          description: 'Sebaceous glands are stimulated by dihydrotestosterone (DHT), a potent androgen. Increased sebum provides a growth medium for bacteria and contributes to comedone formation.',
        },
        {
          name: 'Bacterial Colonization',
          description: 'Cutibacterium acnes (formerly Propionibacterium acnes) is an anaerobic, gram-positive bacterium that proliferates in the sebum-rich, oxygen-depleted environment of the blocked follicle.',
        },
        {
          name: 'Inflammatory Cascade',
          description: 'C. acnes produces enzymes like lipases that break down sebum, releasing pro-inflammatory fatty acids. The bacteria also trigger toll-like receptor 2 (TLR2) activation, leading to cytokine release (IL-1α, IL-8, TNF-α) and neutrophil recruitment.',
        },
      ],
      
      clinicalCorrelates: [
        'Non-inflammatory lesions: Open comedones (blackheads) and closed comedones (whiteheads)',
        'Inflammatory lesions: Papules, pustules, nodules, and cysts represent increasing severity',
        'Distribution: Face, chest, and back have highest density of sebaceous glands',
        'Hormonal influence: Often flares before menstruation; improves during pregnancy for some',
        'Dietary factors: High glycemic load and dairy may exacerbate acne in some individuals',
        'Post-inflammatory hyperpigmentation: More common and persistent in darker skin types',
      ],
      
      normalVsAbnormal: {
        normal: 'Sebum production is balanced. Keratinocytes shed normally from follicular walls without clumping. Cutibacterium acnes exists on skin surface in small numbers without triggering inflammation. Follicle remains open and unobstructed.',
        abnormal: 'Excess sebum combines with abnormally adherent keratinocytes to form a plug (comedone). Anaerobic environment allows C. acnes overgrowth. Bacterial products and enzymes trigger inflammatory response, damaging follicle walls and surrounding tissue.',
        whyItMatters: 'Understanding these mechanisms allows targeted treatment: retinoids normalize cell shedding, benzoyl peroxide kills bacteria, hormonal therapies reduce sebum production, and anti-inflammatories reduce the immune response.',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The pathogenesis of acne involves complex molecular interactions within the pilosebaceous unit. Androgens bind to nuclear receptors in sebocytes, upregulating sebum production through activation of sterol response element binding proteins (SREBPs). Follicular keratinization abnormalities involve altered integrin expression and defective desquamation mediated by changes in corneodesmosomal proteins. Cutibacterium acnes strains possess distinct virulence factors including CAMP factors, hyaluronidases, and sialidases that facilitate tissue invasion and inflammation. The innate immune response involves TLR2/TLR4 activation, NLRP3 inflammasome assembly, and subsequent IL-1β and IL-18 release.`,
      
      molecularMechanisms: [
        {
          pathway: 'Androgen-Mediated Sebum Production',
          defect: '5α-reductase converts testosterone to DHT, which binds androgen receptors on sebocytes, activating lipogenic genes via SREBP-1c',
          consequence: 'Upregulation of fatty acid synthase (FAS) and acetyl-CoA carboxylase (ACC) → increased triglycerides, wax esters, and squalene in sebum',
        },
        {
          pathway: 'Follicular Hyperkeratinization',
          defect: 'Increased integrin α2 and α5 expression; reduced desmoglein 1 and corneodesmosin; altered terminal differentiation markers (involucrin, loricrin)',
          consequence: 'Hypercohesion of corneocytes within the follicular infundibulum → microcomedone formation and follicular occlusion',
        },
        {
          pathway: 'C. acnes Virulence and Inflammation',
          defect: 'C. acnes produces CAMP factors that synergize with host acid sphingomyelinase; activates TLR2 on keratinocytes and macrophages',
          consequence: 'NF-κB activation → pro-inflammatory cytokines (IL-1α, IL-8, TNF-α); NLRP3 inflammasome activation → IL-1β and IL-18 release',
        },
        {
          pathway: 'Matrix Metalloproteinase Activation',
          defect: 'Inflammatory cytokines stimulate keratinocytes and fibroblasts to produce MMP-1, MMP-3, and MMP-9',
          consequence: 'Degradation of collagen and extracellular matrix → follicular rupture, tissue destruction, and scar formation',
        },
      ],
      
      pathways: [
        {
          name: 'Retinoid Signaling Pathway',
          steps: [
            'Retinoids (tretinoin, adapalene, tazarotene) bind to nuclear RARs and RXRs',
            'RAR-RXR heterodimers bind to retinoic acid response elements (RAREs)',
            'Transcription of genes involved in cell differentiation and proliferation',
            'Downregulation of AP-1 and MMP expression',
            'Normalization of follicular keratinization and reduced microcomedone formation',
          ],
          regulation: 'Retinoids also have anti-inflammatory effects by inhibiting TLR2 expression and reducing pro-inflammatory cytokine production',
        },
        {
          name: 'Benzoyl Peroxide Mechanism',
          steps: [
            'BPO penetrates stratum corneum and releases free oxygen radicals',
            'Oxidative damage to bacterial cell membranes and proteins',
            'Bactericidal effect against C. acnes (no resistance develops)',
            'Mild comedolytic effect through oxidation of follicular contents',
            'Anti-inflammatory effects through reduction of neutrophil-generated reactive oxygen species',
          ],
          regulation: 'BPO is converted to benzoic acid in skin; peak efficacy at 2.5-5% concentration with minimal increase in irritation vs. higher concentrations',
        },
        {
          name: 'Hormonal Acne Pathway',
          steps: [
            'Ovaries and adrenal glands produce androgens (testosterone, DHEA-S)',
            '5α-reductase type 1 (skin) and type 2 (sebaceous glands) convert T to DHT',
            'DHT binds AR with 5-10x affinity vs. testosterone',
            'AR activation upregulates SREBP-1c and lipogenic enzymes',
            'Sebum composition changes: increased squalene, decreased linoleic acid',
          ],
          regulation: 'Spironolactone and combined oral contraceptives work by blocking AR or reducing androgen production; isotretinoin reduces sebaceous gland size and activity',
        },
      ],
      
      references: [
        'Zouboulis CC, et al. Acne: An overview of clinical research findings. Dermatol Ther. 2017;7(Suppl 1):3-16.',
        'Dreno B, et al. Acne modeling: Mutating sebaceous filaments into acne lesions. J Am Acad Dermatol. 2023;88(6):1256-1263.',
        'Dréno B. What is new in the pathophysiology of acne, an overview? J Eur Acad Dermatol Venereol. 2017;31(Suppl 5):8-12.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `Current acne research reveals strain-level heterogeneity in Cutibacterium acnes with distinct phylotypes (IA1, IA2, IB, IC, II, III) showing differential associations with acne severity and treatment response. Phylotype IA1 strains harbor unique virulence factors including the CAMP2 toxin and Christie-Atkins-Munch-Peterson factors. The skin microbiome's broader ecosystem—including Staphylococcus, Malassezia, and Corynebacterium species—modulates C. acnes pathogenicity through interspecies competition and metabolic cross-feeding. Emerging evidence implicates the gut-skin axis, with gut dysbiosis potentially exacerbating cutaneous inflammation through systemic immune modulation.`,
      
      researchFrontiers: [
        'Phylotype-specific therapies: Targeting virulent IA1 strains while preserving beneficial C. acnes phylotypes',
        'Microbiome transplantation: Autologous or donor-derived beneficial bacteria to restore skin ecosystem balance',
        'Vaccine development: Anti-C. acnes vaccines targeting CAMP factors or surface antigens entering clinical trials',
        'Personalized acne medicine: Genetic polymorphisms in androgen receptors, TNF-α, and MMPs predicting treatment response',
        'Gut-skin axis interventions: Probiotics (Lactobacillus, Bifidobacterium) showing promise as adjunctive therapy',
        'Light-based therapies: Photodynamic therapy with 5-ALA and targeted blue/red light optimizing bacterial destruction',
        'Novel anti-inflammatories: NLRP3 inflammasome inhibitors and IL-1 pathway modulators in development',
      ],
      
      controversies: [
        {
          topic: 'Dietary Impact on Acne',
          perspectives: [
            'Glycemic load hypothesis: High-GI diets increase IGF-1 and insulin, stimulating sebum production and follicular hyperkeratinization',
            'Dairy association: Whey proteins and hormones in milk may exacerbate acne; skim milk > whole milk in observational studies',
            'Skeptics note: Most dietary studies are observational with confounding variables; RCTs limited and short-term',
            'Current consensus: Dietary modification may help some patients but is not primary therapy',
          ],
        },
        {
          topic: 'Antibiotic Resistance in Acne',
          perspectives: [
            'Topical antibiotics alone: Resistance develops rapidly; should never be used as monotherapy',
            'Benzoyl peroxide combination: BPO reduces resistance when combined with topical antibiotics',
            'Oral antibiotic duration: Optimal duration controversial; traditional 3-6 months vs. shorter courses with earlier isotretinoin',
            'Concerns about macrolide resistance affecting community pathogens beyond skin',
          ],
        },
        {
          topic: 'Isotretinoin and Depression',
          perspectives: [
            'Case reports suggest association between isotretinoin and depression/suicidality',
            'Large epidemiologic studies: No consistent causal link; acne itself associated with depression',
            'Retinoid receptors in brain: Theoretical neurobiological mechanism via altered dopamine signaling',
            'Current guidelines: Monitor mood but do not withhold isotretinoin from appropriately selected patients',
          ],
        },
      ],
      
      statisticalContext: `Acne heritability is estimated at 50-80% based on twin studies, yet GWAS have identified relatively few robust loci. This suggests:
- Polygenic inheritance with many variants of small effect
- Gene-environment interactions (diet, stress, microbiome)
- Epigenetic modifications affecting androgen receptor sensitivity
- Copy number variations in skin barrier genes

The C. acnes pangenome contains approximately 6,000 genes, but any single strain carries only 2,200-2,800 genes. Accessory genome elements encode virulence factors, with phylotype IA1 strains carrying more antibiotic resistance genes and CAMP factor variants.

Isotretinoin achieves sustained remission in 60-80% of patients after a single course, but relapse rates vary by patient characteristics: females > males, adult onset > adolescent onset, truncal acne > facial-only acne.`,
      
      references: [
        'Fitz-Gibbon S, et al. Propionibacterium acnes strain populations in the human skin microbiome associated with acne. J Invest Dermatol. 2013;133(9):2152-2160.',
        'Omlor AJ, et al. Benzoylperoxide: The Doping Relevant Elimination Kinetics After Topical Administration. Front Pharmacol. 2021;12:680096.',
        'Tan JK, et al. Development and validation of a practical acne severity scale suitable for use in real-world clinical trials. J Cutan Med Surg. 2020;24(4):392-399.',
      ],
    },
    
    // Level 6: Clinical (Physician)
    6: {
      summary: `Clinical management of acne vulgaris requires individualized treatment selection based on acne severity, psychosocial impact, scarring risk, patient preferences, and prior treatment response. The Global Alliance to Improve Outcomes in Acne and American Academy of Dermatology guidelines provide evidence-based frameworks. Treatment algorithms stratify by lesion type (comedonal vs. inflammatory), severity (mild, moderate, severe), and special populations (pregnancy, pediatrics, skin of color). First-line therapy for mild comedonal acne is topical retinoids; inflammatory acne requires combination therapy with benzoyl peroxide and topical antibiotics. Moderate to severe acne warrants oral antibiotics (tetracyclines preferred) or hormonal therapy in appropriate females. Severe nodulocystic acne or treatment-resistant cases require isotretinoin.`,
      
      clinicalApproach: [
        'Assessment: Global Acne Grading System (GAGS) or Investigator\'s Global Assessment (IGA); document lesion counts, scarring, and psychosocial impact',
        'Comedonal acne (predominant): Topical retinoid (tretinoin, adapalene, tazarotene) as cornerstone; add benzoyl peroxide if inflammation present',
        'Mild inflammatory acne: Fixed-dose benzoyl peroxide + topical antibiotic (clindamycin or erythromycin) combination; NEVER antibiotic monotherapy',
        'Moderate inflammatory acne: Add oral tetracycline (doxycycline 50-100mg BID, minocycline 50-100mg BID, or sarecycline weight-based) for 3-4 months maximum',
        'Female patients with hormonal pattern (jawline, premenstrual flares): Combined oral contraceptives or spironolactone 25-200mg daily',
        'Severe nodulocystic acne: Isotretinoin 0.5-1 mg/kg/day for 16-20 weeks; cumulative dose 120-150 mg/kg',
        'Maintenance therapy: Topical retinoid after clearing to prevent recurrence; essential after oral antibiotic courses',
      ],
      
      differentialConsiderations: [
        'Gram-negative folliculitis: Pustules around nose/mouth; culture shows Enterobacteriaceae; occurs after prolonged antibiotic therapy',
        'Fungal acne (Malassezia folliculitis): Monomorphic papules/pustules on trunk; worsens with antibiotics; KOH prep positive for yeast',
        'Rosacea: Older age, centrofacial erythema, telangiectasias, no comedones, triggers (heat, alcohol, spicy foods)',
        'Periorificial dermatitis: Small papules around eyes/nose/mouth; often topical steroid-induced',
        'Drug-induced acne: Corticosteroids, lithium, phenytoin, isoniazid, EGFR inhibitors; monomorphic lesions',
        'Endocrine disorders: PCOS (irregular periods, hirsutism), congenital adrenal hyperplasia, Cushing\'s syndrome',
        'Acne fulminans: Sudden severe acne with systemic symptoms (fever, arthralgias, osteolytic bone lesions); requires urgent systemic steroids + isotretinoin',
        'SAPHO syndrome: Synovitis, acne, pustulosis, hyperostosis, osteitis; associated with severe acne',
      ],
      
      guidelines: [
        'Zaenglein AL, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2016;74(5):945-973.',
        'Tan J, et al. Development of an at-a-glance acne treatment algorithm. J Cutan Med Surg. 2021;25(1):48-54.',
        'Thiboutot D, et al. Practical management of acne for clinicians: An international consensus. Dermatol Ther. 2018;8(3):371-380.',
      ],
      
      caseExamples: [
        {
          presentation: '16-year-old male with moderate inflammatory facial acne, 20-30 papules/pustules, scattered comedones, mild scarring, no improvement after 3 months of OTC benzoyl peroxide.',
          keyFindings: [
            'Adolescent male with typical acne distribution',
            'Moderate severity by lesion count and inflammation',
            'Failed appropriate first-line OTC therapy',
            'Early scarring indicates need for aggressive treatment',
          ],
          teachingPoints: [
            'Initiate topical retinoid (adapalene 0.1% or tretinoin 0.025%) nightly',
            'Add fixed combination BPO/clindamycin or BPO/erythromycin AM',
            'Counsel on retinoid tolerability: start 2-3x weekly, moisturizer, sunscreen',
            'Reassess at 8-12 weeks; consider oral doxycycline if inadequate response',
            'Plan maintenance topical retinoid after clearing',
          ],
        },
        {
          presentation: '24-year-old female with persistent jawline acne flaring premenstrually, multiple deep tender nodules, significant post-inflammatory hyperpigmentation, Fitzpatrick skin type V, failed multiple topical regimens.',
          keyFindings: [
            'Adult female with hormonal pattern (jawline distribution)',
            'Post-inflammatory hyperpigmentation prominent in skin of color',
            'Nodular lesions suggest need for systemic therapy',
            'Hormonal therapy candidate given pattern and age',
          ],
          teachingPoints: [
            'Consider spironolactone 50-100mg daily (titrate to 150-200mg if needed)',
            'Combined oral contraceptive with low androgenic progestin (norgestimate, drospirenone)',
            'Continue topical retinoid for maintenance and PIH prevention',
            ' counsel on slow response to hormonal therapy (3-6 months)',
            'Strict sun protection to minimize PIH worsening',
            'If inadequate response after 6 months, consider isotretinoin',
          ],
        },
        {
          presentation: '28-year-old male with severe nodulocystic acne involving face, chest, and back; multiple keloidal scars forming; significant depression related to appearance; failed oral doxycycline and topical combination therapy.',
          keyFindings: [
            'Severe disease by lesion type (nodules/cysts) and distribution',
            'Active scarring indicates aggressive disease requiring isotretinoin',
            'Psychosocial impact (depression) warrants urgent effective treatment',
            'Failed appropriate prior therapies',
          ],
          teachingPoints: [
            'Isotretinoin indicated: 0.5-1 mg/kg/day (start lower if concerns)',
            'iPLEDGE enrollment and monthly pregnancy tests if applicable',
            'Baseline labs: LFTs, lipids, CBC; monitor monthly',
            'Counsel on mucocutaneous side effects, teratogenicity, mood monitoring',
            'Intralesional triamcinolone for active nodules (2.5-5 mg/mL)',
            'Early dermatology referral if not comfortable managing isotretinoin',
          ],
        },
      ],
      
      references: [
        'Zaenglein AL, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2016;74(5):945-973.',
        'Tan J, et al. Development of an at-a-glance acne treatment algorithm. J Cutan Med Surg. 2021;25(1):48-54.',
        'Thiboutot D, et al. Practical management of acne for clinicians: An international consensus. Dermatol Ther. 2018;8(3):371-380.',
        'Dréno B, et al. Acne as a chronic disease: How to improve adherence to treatment. J Eur Acad Dermatol Venereol. 2021;35(4):847-853.',
      ],
    },
  },
  
  // Interactive elements
  interactions: {
    anatomyPoints: [
      { structure: 'skin', focus: 'pilosebaceous-unit', description: 'The hair follicle and associated sebaceous gland where acne develops' },
      { structure: 'skin', focus: 'sebaceous-gland', description: 'Oil-producing glands stimulated by androgens' },
      { structure: 'skin', focus: 'epidermis', description: 'Contains keratinocytes that line the follicle and can cause blockages' },
    ],
    
    relatedLabs: [
      'testosterone-total',
      'testosterone-free',
      'dhea-sulfate',
      'lh',
      'fsh',
      'fasting-insulin',
    ],
    
    relatedMedications: [
      'tretinoin',
      'adapalene',
      'tazarotene',
      'benzoyl-peroxide',
      'clindamycin-topical',
      'doxycycline',
      'minocycline',
      'sarecycline',
      'isotretinoin',
      'spironolactone',
      'combined-oral-contraceptives',
    ],
    
    relatedConditions: [
      'pcos',
      'rosacea',
      'folliculitis',
      'perioral-dermatitis',
      'acne-keloidalis-nuchae',
      'hirsutism',
    ],
  },
  
  // Self-assessment
  quiz: {
    title: 'Test Your Understanding of Acne Vulgaris',
    questions: [
      {
        id: 'acne-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What are the main things that cause acne?',
        options: [
          'Eating chocolate and not washing your face',
          'Oil, clogged pores, bacteria, and inflammation',
          'Only hormones during puberty',
          'Being dirty and touching your face too much',
        ],
        correctAnswer: 1,
        explanation: 'Acne is caused by four main factors: excess oil (sebum) production, clogged pores from dead skin cells, Cutibacterium acnes bacteria multiplying in the blocked pore, and inflammation from the immune response.',
      },
      {
        id: 'acne-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'How do retinoids work to treat acne?',
        options: [
          'They kill bacteria like antibiotics do',
          'They reduce oil production immediately',
          'They help skin cells shed normally and prevent clogged pores',
          'They suppress the immune system',
        ],
        correctAnswer: 2,
        explanation: 'Retinoids (like tretinoin and adapalene) work primarily by normalizing follicular keratinization—they help skin cells inside the follicle shed properly instead of clumping together and blocking the pore.',
      },
      {
        id: 'acne-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Why does benzoyl peroxide not cause bacterial resistance, unlike topical antibiotics?',
        options: [
          'It works by physical oxidation rather than specific bacterial targets',
          'Bacteria cannot survive in oxygen-rich environments',
          'It is combined with antibiotics that prevent resistance',
          'Patients only use it for short periods of time',
        ],
        correctAnswer: 0,
        explanation: 'Benzoyl peroxide releases free oxygen radicals that cause non-specific oxidative damage to bacterial cell membranes and proteins. This physical mechanism makes it impossible for bacteria to develop resistance through genetic mutation.',
      },
      {
        id: 'acne-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which molecular mechanism explains how androgens increase sebum production?',
        options: [
          'Activation of NF-κB inflammatory pathway',
          'Upregulation of SREBP-1c leading to increased lipogenic enzymes',
          'Stimulation of TLR2 on sebocyte surfaces',
          'Inhibition of matrix metalloproteinases',
        ],
        correctAnswer: 1,
        explanation: 'Androgens (DHT) bind androgen receptors on sebocytes, activating Sterol Response Element Binding Protein-1c (SREBP-1c), which transcriptionally upregulates lipogenic enzymes like fatty acid synthase (FAS) and acetyl-CoA carboxylase (ACC), increasing sebum production.',
      },
      {
        id: 'acne-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'According to current guidelines, what is the recommended first-line treatment for a 24-year-old female with moderate inflammatory acne concentrated on the jawline that worsens before menstruation?',
        options: [
          'Oral isotretinoin at 1 mg/kg/day',
          'Topical retinoid plus oral doxycycline for 6 months',
          'Spironolactone with or without combined oral contraceptives',
          'Topical clindamycin gel as monotherapy',
        ],
        correctAnswer: 2,
        explanation: 'Jawline distribution with premenstrual flares in an adult female represents hormonal pattern acne. Anti-androgen therapy with spironolactone (and/or combined oral contraceptives with low-androgenic progestins) is the guideline-recommended first-line approach for this phenotype. Topical retinoids should be added for maintenance.',
      },
    ],
    passingScore: 80,
  },
  
  // References
  references: [
    {
      citation: 'Zaenglein AL, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2016;74(5):945-973.',
      doi: '10.1016/j.jaad.2015.12.037',
    },
    {
      citation: 'Tan J, et al. Development of an at-a-glance acne treatment algorithm. J Cutan Med Surg. 2021;25(1):48-54.',
      doi: '10.1177/1203475420965790',
    },
    {
      citation: 'Dréno B, et al. Acne modeling: Mutating sebaceous filaments into acne lesions. J Am Acad Dermatol. 2023;88(6):1256-1263.',
      doi: '10.1016/j.jaad.2023.01.023',
    },
    {
      citation: 'Zouboulis CC, et al. Acne: An overview of clinical research findings. Dermatol Ther. 2017;7(Suppl 1):3-16.',
      doi: '10.1007/s13555-016-0169-2',
    },
    {
      citation: 'Fitz-Gibbon S, et al. Propionibacterium acnes strain populations in the human skin microbiome associated with acne. J Invest Dermatol. 2013;133(9):2152-2160.',
      doi: '10.1038/jid.2013.21',
    },
  ],
  
  resources: [
    {
      title: 'American Academy of Dermatology: Acne Resource Center',
      type: 'website',
      url: 'https://www.aad.org/public/diseases/acne',
      description: 'Comprehensive patient and provider resources on acne from the AAD',
    },
    {
      title: 'Global Alliance to Improve Outcomes in Acne',
      type: 'website',
      url: 'https://www.acnealliance.org',
      description: 'International consensus resources and treatment algorithms',
    },
  ],
};

export default acneComprehensiveModule;
