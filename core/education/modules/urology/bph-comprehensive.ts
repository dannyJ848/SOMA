/**
 * Urology: Benign Prostatic Hyperplasia Comprehensive Educational Module
 *
 * Covers prostate anatomy, lower urinary tract symptoms (LUTS), medical management
 * (alpha-blockers, 5-alpha reductase inhibitors), and surgical options (TURP, laser)
 * across 6 complexity levels.
 */

import type { EducationalModule } from '../../types.js';

export const bphModule: EducationalModule = {
  id: 'urology-bph-comprehensive',
  type: 'specialty',
  specialty: 'urology',
  
  title: 'Benign Prostatic Hyperplasia (BPH) and Urinary Symptoms',
  description: 'Comprehensive guide to understanding prostate enlargement, urinary symptoms, and treatment options from lifestyle changes to surgery.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'male-anatomy-basics',
    'urinary-system-function',
  ],
  
  learningObjectives: [
    'Understand what the prostate is and how it affects urination',
    'Learn why the prostate enlarges with age',
    'Recognize the symptoms of BPH (LUTS)',
    'Understand medical and surgical treatment options',
    'Know when to seek medical evaluation',
  ],
  
  estimatedTime: {
    1: '10 minutes',
    2: '15 minutes',
    3: '25 minutes',
    4: '35 minutes',
    5: '45 minutes',
    6: '60 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `The prostate is a small gland in men that sits below the bladder and wraps around the urine tube (urethra). As men get older, the prostate often grows larger, which can squeeze the urethra and make it harder to urinate. This condition is called BPH (Benign Prostatic Hyperplasia). "Benign" means it is not cancer. BPH is very common - about half of men have it by age 60.`,
      
      analogy: `Imagine a garden hose passing through a doughnut. The hose is your urethra and the doughnut is your prostate. When the doughnut gets bigger, it squeezes the hose and makes it harder for water to flow through. This is similar to how an enlarged prostate affects urine flow.`,
      
      keyPoints: [
        'The prostate is a walnut-sized gland below the bladder in men',
        'The urethra (urine tube) passes through the prostate',
        'BPH means the prostate is enlarged but not cancerous',
        'BPH is very common in older men - by age 85, about 90% are affected',
        'Symptoms include frequent urination, weak stream, and difficulty starting',
        'BPH can be managed with medication or surgery',
      ],
      
      visualAid: 'prostate-anatomy-diagram',
      
      story: `Meet John, a 65-year-old who started noticing he needed to use the bathroom more often, especially at night. His urine stream seemed weaker, and he sometimes felt like he couldn't fully empty his bladder. His doctor explained that his prostate had enlarged and was pressing on his urethra. With medication, John's symptoms improved significantly, and he was able to sleep through the night again.`,
    },
    
    // Level 2: Developing
    2: {
      summary: `Benign Prostatic Hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that occurs as men age. The prostate surrounds the prostatic urethra, and when it enlarges, it can compress the urethra and obstruct urine flow. This causes Lower Urinary Tract Symptoms (LUTS) which are categorized as either obstructive (voiding) or irritative (storage) symptoms.`,
      
      keyConcepts: [
        {
          term: 'Prostate',
          explanation: 'A walnut-sized gland located below the bladder that produces fluid for semen',
        },
        {
          term: 'Urethra',
          explanation: 'The tube that carries urine from the bladder out of the body',
        },
        {
          term: 'BPH',
          explanation: 'Benign Prostatic Hyperplasia - non-cancerous enlargement of the prostate',
        },
        {
          term: 'LUTS',
          explanation: 'Lower Urinary Tract Symptoms - urinary problems caused by prostate enlargement',
        },
        {
          term: 'DHT',
          explanation: 'Dihydrotestosterone - a hormone that stimulates prostate growth',
        },
      ],
      
      keyPoints: [
        'BPH develops in the transition zone of the prostate, closest to the urethra',
        'The hormonal basis involves conversion of testosterone to DHT by 5-alpha reductase',
        'Obstructive symptoms: weak stream, hesitancy, incomplete emptying',
        'Irritative symptoms: frequency, urgency, nocturia (waking at night)',
        'Doctors use the IPSS questionnaire to measure symptom severity',
        'Treatment options include watchful waiting, medications, and surgery',
      ],
      
      howItWorks: `1. Testosterone from the testes enters prostate cells
2. The enzyme 5-alpha reductase converts testosterone to DHT
3. DHT binds to receptors and stimulates cell growth
4. Over years, the transition zone enlarges
5. The enlarged tissue compresses the urethra
6. Bladder must work harder to push urine through
7. Over time, the bladder muscle thickens and becomes overactive`,
    },
    
    // Level 3: Standard
    3: {
      summary: `BPH is characterized by hyperplasia of both glandular epithelial and stromal smooth muscle elements in the transition zone. Bladder outlet obstruction occurs through static (mechanical) and dynamic (muscular) components. The static component results from physical enlargement of the gland, while the dynamic component involves alpha-adrenergic receptor-mediated contraction of prostatic smooth muscle.`,
      
      mechanisms: [
        {
          name: 'Static Obstruction',
          description: 'Physical enlargement of the prostate gland compressing the urethra; addressed by 5-alpha reductase inhibitors',
        },
        {
          name: 'Dynamic Obstruction',
          description: 'Alpha-1 adrenergic receptor-mediated contraction of prostatic smooth muscle; addressed by alpha-blockers',
        },
        {
          name: 'Bladder Compensation',
          description: 'Detrusor muscle hypertrophy and overactivity in response to outlet obstruction, causing storage symptoms',
        },
        {
          name: 'Hormonal Pathway',
          description: '5-alpha reductase converts testosterone to DHT, which stimulates growth factors (FGF-2, TGF-β, IGF-1)',
        },
      ],
      
      clinicalCorrelates: [
        'BPH and prostate cancer can coexist but are distinct conditions',
        'PSA elevation occurs in both BPH and prostate cancer',
        'Acute urinary retention may be precipitated by medications (anticholinergics, decongestants)',
        'Chronic obstruction can lead to bladder diverticula, stones, or hydronephrosis',
        'Nocturia often results from decreased nocturnal bladder capacity and increased urine production',
        'Sexual dysfunction commonly coexists with LUTS and may influence treatment selection',
      ],
      
      normalVsAbnormal: {
        normal: 'Prostate volume less than 30 mL; urine flow rate 15-25 mL/sec; post-void residual less than 50 mL; IPSS score less than 7',
        abnormal: 'Prostate volume greater than 30 mL; urine flow rate less than 10 mL/sec; post-void residual greater than 100 mL; IPSS score greater than 7',
        whyItMatters: 'Progressive obstruction can lead to irreversible bladder damage, urinary retention, and renal insufficiency if untreated',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `At the molecular level, BPH involves stromal-epithelial interactions mediated by androgen receptor signaling and growth factor pathways. DHT binds androgen receptors with higher affinity than testosterone, activating transcription of genes encoding growth factors. Three alpha-1 adrenergic receptor subtypes (alpha-1A, 1B, 1D) have distinct tissue distributions, with alpha-1A predominating in the prostate and mediating smooth muscle contraction.`,
      
      molecularMechanisms: [
        {
          pathway: 'Androgen Receptor Signaling',
          defect: 'Age-related increase in 5-alpha reductase type 2 expression',
          consequence: 'Elevated tissue DHT promotes epithelial and stromal proliferation via gene transcription',
        },
        {
          pathway: 'Growth Factor Signaling',
          defect: 'Upregulation of FGF-2, TGF-β, IGF-1, and EGF in prostatic tissue',
          consequence: 'Stromal cell proliferation and extracellular matrix deposition',
        },
        {
          pathway: 'Inflammatory Cascade',
          defect: 'Chronic inflammation with cytokine release (IL-6, IL-8, TNF-α)',
          consequence: 'Promotes cell proliferation and reduces apoptosis in prostatic tissue',
        },
        {
          pathway: 'Apoptosis Regulation',
          defect: 'Reduced Bax/Bcl-2 ratio in hyperplastic tissue',
          consequence: 'Decreased programmed cell death contributing to net growth',
        },
      ],
      
      pathways: [
        {
          name: 'Alpha-Adrenergic Receptor Distribution',
          steps: [
            'Alpha-1A: 70% of prostatic receptors, mediates contraction',
            'Alpha-1B: Predominantly vascular, causes blood pressure effects',
            'Alpha-1D: Bladder detrusor and spinal cord, affects storage symptoms',
            'Tamsulosin and silodosin are selective for alpha-1A',
            'Non-selective agents (terazosin, doxazosin) affect all subtypes',
          ],
          regulation: 'Sympathetic nervous system activation increases tone; alpha-blockers competitively antagonize',
        },
        {
          name: '5-Alpha Reductase Isoenzymes',
          steps: [
            'Type 1: Expressed in liver, skin; inhibited by dutasteride',
            'Type 2: Predominant in prostate; inhibited by finasteride and dutasteride',
            'DHT reduction decreases VEGF and prostatic vascularity',
            'Apoptosis of epithelial cells reduces prostate volume 20-30%',
            'Clinical effect requires 3-6 months of therapy',
          ],
          regulation: 'Competitive inhibition by 5-ARIs reduces DHT synthesis',
        },
      ],
      
      references: [
        'Roehrborn CG. Benign prostatic hyperplasia: an overview. Rev Urol. 2005;7 Suppl 9:S3-S14.',
        'Wei JT, Miner M, Steers WD, et al. Benign prostatic hyperplasia: the central role of the stroma. Rev Urol. 2008;10 Suppl 1:S3-S9.',
        'McConnell JD, Roehrborn CG, Bautista OM, et al. MTOPS Study. N Engl J Med. 2003;349:2387-2398.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `The MTOPS trial established that combination therapy (alpha-blocker plus 5-ARI) reduces clinical progression by 66% compared to placebo. PDE5 inhibitors, particularly tadalafil, have emerged as an alternative for men with concurrent erectile dysfunction. Minimally invasive surgical therapies (MIST) including UroLift, Rezum, and Aquablation now fill the therapeutic gap between medications and traditional surgery, offering faster recovery with preserved sexual function but potentially higher retreatment rates.`,
      
      researchFrontiers: [
        'Long-term outcomes of MIST procedures compared to TURP at 10+ years',
        'Personalized medicine approaches using genetic markers for 5-ARI response',
        'Novel therapeutic targets including COX-2 inhibitors and PDE5 inhibitors',
        'Stem cell therapy for prostate regeneration',
        'Artificial intelligence for predicting treatment outcomes',
        'Waterjet ablation (Aquablation) robotically-guided precision outcomes',
      ],
      
      controversies: [
        {
          topic: 'Post-Finasteride Syndrome',
          perspectives: [
            'Some patients report persistent sexual, neurological, and psychological symptoms after discontinuation',
            'Incidence estimates range from 1-2% to much higher in patient advocacy reports',
            'Mechanism may involve persistent changes in neurosteroid metabolism',
            'FDA and EMA have issued warnings but maintain favorable risk-benefit profile',
          ],
        },
        {
          topic: 'PSA Screening in Men on 5-ARIs',
          perspectives: [
            '5-ARIs reduce PSA by approximately 50% after 6 months',
            'Some experts recommend doubling PSA values for cancer detection',
            'Concern that cancer detection may be delayed',
            'REDUCE trial showed increased detection of high-grade cancer with dutasteride',
          ],
        },
        {
          topic: 'Optimal Timing of Surgical Intervention',
          perspectives: [
            'Traditional: Surgery after medical therapy failure',
            'Emerging: Early surgery for young patients to preserve bladder function',
            'MIST as first-line surgical option vs reserved for specific populations',
            'Cost-effectiveness of early definitive therapy vs chronic medication',
          ],
        },
      ],
      
      statisticalContext: `The MTOPS trial (n=3,047) demonstrated cumulative clinical progression rates at 5 years: placebo 17.4%, doxazosin 10.6%, finasteride 10.3%, combination 5.5%. Number needed to treat (NNT) with combination therapy to prevent one progression: 8.3. The CombAT trial (n=4,844) showed that dutasteride plus tamsulosin reduced acute urinary retention by 66% compared to tamsulosin alone. PDE5 inhibitor trials show modest LUTS improvement (IPSS -3 to -5 points) with benefit for concurrent ED.`,
      
      references: [
        'McConnell JD, et al. MTOPS Study. N Engl J Med. 2003;349:2387-2398.',
        'Roehrborn CG, et al. CombAT Study. J Urol. 2008;179:616-621.',
        'Porst H, et al. LUTS-FLOW Trial. Eur Urol. 2014;65:275-283.',
        'McVary KT, et al. AUA Guideline Update. J Urol. 2011;185:1793-1803.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `Clinical management of BPH requires systematic evaluation including IPSS, DRE, urinalysis, and selective use of PSA, PVR, and uroflowmetry. Absolute indications for surgery include refractory retention, recurrent UTI, bladder stones, and renal insufficiency from obstruction. TURP remains the gold standard with 85% symptom improvement, but laser procedures (HoLEP, Greenlight PVP) offer advantages for anticoagulated patients and large prostates. MIST procedures preserve sexual function but have higher retreatment rates.`,
      
      clinicalApproach: [
        'Initial evaluation: History with IPSS, DRE, urinalysis, discussion of PSA testing',
        'Additional testing: PVR, uroflowmetry, cystoscopy (if hematuria or surgical planning)',
        'Mild symptoms (IPSS <8): Watchful waiting with lifestyle modifications',
        'Moderate-severe symptoms: Alpha-blocker first-line; add 5-ARI if prostate >30mL or PSA >1.4',
        'Concurrent ED: Consider tadalafil 5mg daily or PDE5 inhibitor + alpha-blocker',
        'Storage-predominant symptoms: Add anticholinergic if PVR <200-250mL',
        'Surgical referral: Failed medical therapy, complications, or patient preference',
      ],
      
      differentialConsiderations: [
        'Prostate cancer - abnormal DRE, elevated PSA, family history',
        'Overactive bladder - storage symptoms without obstruction, normal flow',
        'Neurogenic bladder - neurological disease, diabetes, abnormal urodynamics',
        'Urethral stricture - history of instrumentation, trauma, or infection',
        'Urinary tract infection - dysuria, pyuria, positive culture',
        'Medication-induced - anticholinergics, decongestants, diuretics',
      ],
      
      guidelines: [
        'AUA 2021 Guideline: Alpha-blockers standard for moderate-severe symptoms; 5-ARI for prostates >30g or PSA >1.4; combination superior for progression prevention',
        'EAU 2023 Guideline: Similar recommendations with emphasis on shared decision-making; MIST options for appropriate candidates',
        'Surgical indications: Refractory retention, recurrent UTI, bladder stones, renal insufficiency, failed medical therapy',
        'TURP: Gold standard for prostates 30-80mL; 85% symptom improvement; 65-70% retrograde ejaculation',
        'HoLEP: Enucleation technique for any size prostate; equivalent outcomes to TURP/TUPR; excellent hemostasis',
        'Greenlight PVP: Photoselective vaporization; outpatient; anticoagulation-safe; higher retreatment rate',
        'MIST (UroLift, Rezum, Aquablation): Preserve sexual function; lower morbidity; variable durability data',
      ],
      
      caseExamples: [
        {
          presentation: '72-year-old man with acute urinary retention. History of progressive LUTS for 2 years, IPSS 24. DRE: 90g prostate. PVR 800mL. On apixaban for atrial fibrillation.',
          keyFindings: [
            'Large prostate (>80g) on anticoagulation',
            'Absolute indication for intervention',
            'High surgical risk with TURP due to bleeding',
          ],
          teachingPoints: [
            'HoLEP preferred over TURP for large glands and anticoagulation',
            'Apixaban can be continued perioperatively with HoLEP',
            'Counsel on high likelihood of retrograde ejaculation',
            'Erectile function preservation expected',
            'Trial of void with alpha-blocker after catheterization',
          ],
        },
        {
          presentation: '58-year-old man with bothersome LUTS (IPSS 18), prostate 45g. Recently remarried, desires fertility. Failed tamsulosin due to sexual side effects.',
          keyFindings: [
            'Moderate symptoms in relatively young patient',
            'Fertility preservation priority',
            'Intolerance to alpha-blocker due to sexual dysfunction',
          ],
          teachingPoints: [
            'UroLift or Rezum recommended for ejaculatory function preservation (>90% preserve function)',
            'Tadalafil 5mg daily option for LUTS without ejaculatory side effects',
            'Avoid 5-ARI due to potential fertility impact',
            'Consider intermittent catheterization if medical therapy fails',
            'Aquablation also has good ejaculatory preservation data',
          ],
        },
        {
          presentation: '68-year-old man 6 months post-TURP with recurrent weak stream and frequency. Postoperative course uncomplicated. No prior radiation.',
          keyFindings: [
            'Early recurrence after TURP',
            'Differential: bladder neck contracture vs residual adenoma vs stricture',
            'Need cystoscopy to evaluate',
          ],
          teachingPoints: [
            'Bladder neck contracture occurs in 2-4%, presents early (<1 year)',
            'Urethral stricture presents with weak stream, often history of catheterization',
            'Cystoscopy essential for diagnosis before treatment',
            'Bladder neck incision for contracture',
            'Urethrotomy or dilation for stricture',
          ],
        },
      ],
      
      references: [
        'McVary KT, et al. AUA Guideline on Management of BPH. J Urol. 2011;185:1793-1803.',
        'Oelke M, et al. EAU Guidelines on Treatment of Male LUTS. Eur Urol. 2013;64:118-140.',
        'Roehrborn CG, et al. CombAT Study. J Urol. 2008;179:616-621.',
        'McConnell JD, et al. MTOPS Study. N Engl J Med. 2003;349:2387-2398.',
        'Gilling PJ, et al. Holmium Laser Enucleation Long-term Results. Eur Urol. 2008;53:744-749.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      {
        structure: 'prostate',
        focus: 'transition-zone',
        description: 'The inner zone surrounding the urethra where BPH develops',
      },
      {
        structure: 'bladder',
        focus: 'trigone',
        description: 'The triangular region near the ureter openings affected by outlet obstruction',
      },
      {
        structure: 'urethra',
        focus: 'prostatic-urethra',
        description: 'The section passing through the prostate that becomes compressed',
      },
    ],
    
    relatedLabs: [
      'PSA (Prostate-Specific Antigen)',
      'Urinalysis',
      'Serum creatinine (if renal concern)',
      'Post-void residual volume',
    ],
    
    relatedMedications: [
      'Alpha-blockers (tamsulosin, alfuzosin, silodosin)',
      '5-alpha reductase inhibitors (finasteride, dutasteride)',
      'PDE5 inhibitors (tadalafil)',
      'Anticholinergics (for storage symptoms)',
    ],
    
    relatedConditions: [
      'Prostate cancer',
      'Overactive bladder',
      'Urinary tract infection',
      'Neurogenic bladder',
      'Urethral stricture',
    ],
    
    calculators: [
      {
        name: 'IPSS Score Calculator',
        inputs: [
          { name: 'incomplete_emptying', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'frequency', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'intermittency', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'urgency', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'weak_stream', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'straining', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
          { name: 'nocturia', type: 'select', options: ['0', '1', '2', '3', '4', '5'] },
        ],
        formula: 'Sum all seven response values',
        interpretation: '0-7: Mild, 8-19: Moderate, 20-35: Severe',
      },
    ],
  },
  
  quiz: {
    title: 'Benign Prostatic Hyperplasia Knowledge Check',
    passingScore: 80,
    questions: [
      {
        id: 'bph-q1',
        type: 'multiple-choice',
        complexity: 2,
        question: 'Which zone of the prostate is primarily affected in benign prostatic hyperplasia?',
        options: ['Peripheral zone', 'Central zone', 'Transition zone', 'Anterior fibromuscular stroma'],
        correctAnswer: 2,
        explanation: 'BPH develops in the transition zone, which surrounds the prostatic urethra. The peripheral zone is where most prostate cancers arise.',
      },
      {
        id: 'bph-q2',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which two mechanisms contribute to bladder outlet obstruction in BPH?',
        options: [
          'Static (mechanical) and dynamic (muscular)',
          'Inflammatory and infectious',
          'Neuropathic and myopathic',
          'Anatomic and functional',
        ],
        correctAnswer: 0,
        explanation: 'Static obstruction results from physical enlargement of the gland. Dynamic obstruction results from alpha-adrenergic mediated smooth muscle contraction.',
      },
      {
        id: 'bph-q3',
        type: 'multiple-choice',
        complexity: 4,
        question: 'A patient on tamsulosin is scheduled for cataract surgery. What complication should the ophthalmologist be alerted about?',
        options: [
          'Retinal detachment',
          'Intraoperative Floppy Iris Syndrome (IFIS)',
          'Glaucoma exacerbation',
          'Corneal abrasion',
        ],
        correctAnswer: 1,
        explanation: 'Alpha-blockers, especially tamsulosin, are associated with IFIS, characterized by poor pupillary dilation and billowing iris during cataract surgery.',
      },
      {
        id: 'bph-q4',
        type: 'multiple-choice',
        complexity: 5,
        question: 'According to the MTOPS trial, what was the risk reduction for clinical progression with combination therapy (alpha-blocker + 5-ARI) compared to placebo?',
        options: ['25%', '39%', '66%', '85%'],
        correctAnswer: 2,
        explanation: 'The MTOPS trial demonstrated that combination therapy reduced clinical progression by 66% compared to placebo over 5 years.',
      },
      {
        id: 'bph-q5',
        type: 'case-study',
        complexity: 6,
        question: 'A 72-year-old man with acute urinary retention, 90g prostate, on apixaban. Which surgical approach is most appropriate?',
        options: [
          'TURP with perioperative bridging',
          'HoLEP (Holmium laser enucleation)',
          'Open prostatectomy',
          'Simple catheterization only',
        ],
        correctAnswer: 1,
        explanation: 'HoLEP is preferred for large prostates (>80g) and anticoagulated patients due to excellent hemostasis allowing continuation of apixaban.',
      },
    ],
  },
  
  references: [
    {
      citation: 'McVary KT, Roehrborn CG, Avins AL, et al. Update on AUA guideline on the management of benign prostatic hyperplasia. J Urol. 2011;185(5):1793-1803.',
      url: 'https://www.auanet.org/guidelines/guidelines/benign-prostatic-hyperplasia-(bph)-guideline',
    },
    {
      citation: 'Roehrborn CG, Siami P, Barkin J, et al. The effects of dutasteride, tamsulosin and combination therapy on lower urinary tract symptoms in men with benign prostatic hyperplasia and prostatic enlargement: 2-year results from the CombAT study. J Urol. 2008;179(2):616-621.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2390823/',
    },
    {
      citation: 'McConnell JD, Roehrborn CG, Bautista OM, et al. The long-term effect of doxazosin, finasteride, and combination therapy on the clinical progression of benign prostatic hyperplasia. N Engl J Med. 2003;349(25):2387-2398. (MTOPS Study)',
      url: 'https://www.nejm.org/doi/full/10.1056/nejmoa030656',
    },
    {
      citation: 'Gilling PJ, Aho TF, Frampton CM, King GG, Graydon RJ. Holmium laser enucleation of the prostate: results at 6 years. Eur Urol. 2008;53(4):744-749.',
    },
    {
      citation: 'Roehrborn CG. Benign prostatic hyperplasia: an overview. Rev Urol. 2005;7 Suppl 9(Suppl 9):S3-S14.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1477619/',
    },
    {
      citation: 'Oelke M, Bachmann A, Descazeaud A, et al. EAU guidelines on the treatment and follow-up of non-neurogenic male lower urinary tract symptoms including benign prostatic obstruction. Eur Urol. 2013;64(1):118-140.',
      url: 'https://uroweb.org/guidelines/compilations-of-all-guidelines/non-neurogenic-male-luts/',
    },
    {
      citation: 'Rassweiler J, Teber D, Kuntz R, Hofmann R. Complications of transurethral resection of the prostate (TURP)--incidence, management, and prevention. Eur Urol. 2006;50(5):969-979.',
    },
    {
      citation: 'Wei JT, Miner M, Steers WD, et al. Benign prostatic hyperplasia: the central role of the stroma in the biology and therapy. Rev Urol. 2008;10(Suppl 1):S3-S9.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2629813/',
    },
  ],
};

export default bphModule;
