/**
 * Autoimmune/Immune Conditions Database
 *
 * Comprehensive reference of autoimmune and immune-mediated conditions
 * with clinical summaries, diagnostics, and patient education.
 * Bilingual: English + Spanish
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AutoimmuneCategory =
  | 'systemic'
  | 'rheumatologic'
  | 'neurologic'
  | 'gastrointestinal';

export interface AutoimmuneConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: AutoimmuneCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const AUTOIMMUNE_CONDITIONS: Record<string, AutoimmuneConditionEntry> = {
  'systemic-lupus-erythematosus': {
    id: 'systemic-lupus-erythematosus',
    name: 'Systemic Lupus Erythematosus (SLE)',
    nameEs: 'Lupus eritematoso sistémico',
    category: 'systemic',
    icd11: '4A40',
    description: 'Chronic multisystem autoimmune disease with relapsing-remitting course affecting skin, joints, kidneys, blood, and CNS. Loss of self-tolerance leads to autoantibody production and immune complex deposition.',
    descriptionEs: 'Enfermedad autoinmune crónica multisistémica con curso de recaídas y remisiones que afecta piel, articulaciones, riñones, sangre y SNC. La pérdida de autotolerancia conduce a la producción de autoanticuerpos y depósito de complejos inmunes.',
    riskFactors: ['Female sex (9:1)', 'African American, Hispanic, Asian descent', 'Age 15-45', 'Family history', 'UV exposure', 'Smoking', 'Certain medications'],
    pathophysiology: 'Polyclonal B-cell activation produces pathogenic autoantibodies, especially anti-dsDNA. Immune complex deposition causes complement activation and tissue inflammation. Type III hypersensitivity with complement consumption.',
    pathophysiologyEs: 'La activación policlonal de células B produce autoanticuerpos patógenos, especialmente anti-ADN bicatenario. El depósito de complejos inmunes causa activación del complemento e inflamación tisular. Hipersensibilidad tipo III con consumo de complemento.',
    symptoms: ['Malar (butterfly) rash', 'Photosensitivity', 'Polyarthralgia/arthritis', 'Oral or nasopharyngeal ulcers', 'Serositis (pleuritis, pericarditis)', 'Lupus nephritis', 'Cytopenias', 'Neuropsychiatric symptoms', 'Fever and fatigue', 'Raynaud phenomenon'],
    diagnostics: {
      tests: ['ANA (>98% sensitivity)', 'Anti-dsDNA (high specificity)', 'Anti-Smith antibody', 'C3 and C4 complement levels', 'CBC with differential', 'CMP with creatinine', 'Urinalysis with microscopy'],
      imaging: ['Chest X-ray for pleuritis/pericarditis', 'Echocardiogram if cardiac involvement', 'Brain MRI for neuropsychiatric lupus'],
      criteria: ['SLICC criteria', '2019 EULAR/ACR classification criteria', 'Renal biopsy for nephritis staging']
    },
    treatment: {
      medications: ['Hydroxychloroquine (all patients)', 'NSAIDs for mild disease', 'Corticosteroids for flares', 'Azathioprine for maintenance', 'Mycophenolate for severe nephritis', 'Cyclophosphamide for life-threatening disease', 'Belimumab (anti-BLyS)', 'Voclosporin for nephritis'],
      procedures: ['Renal biopsy for nephritis classification', 'Plasma exchange for severe refractory disease'],
      lifestyle: ['Strict sun protection (SPF 50+)', 'Smoking cessation', 'Regular exercise', 'Adequate sleep', 'Stress management', 'Avoid estrogen-containing contraceptives']
    },
    emergencySigns: ['Severe headache or seizures', 'Chest pain or shortness of breath', 'Decreased urine output or blood in urine', 'High fever', 'Acute confusion', 'Sudden severe abdominal pain'],
    patientExplanation: 'Lupus is a disease where your immune system mistakenly attacks your own body tissues, causing inflammation in many organs. Think of it as your body\'s defense system being overactive and attacking friend instead of foe. The butterfly rash on the face is a classic sign, but lupus can affect joints, kidneys, heart, and brain. Treatment focuses on controlling the immune system with medications like hydroxychloroquine and steroids during flares. With proper treatment, most people with lupus can live normal lives, though it requires lifelong management and sun protection.',
    patientExplanationEs: 'El lupus es una enfermedad en la que su sistema inmunológico ataca por error sus propios tejidos corporales, causando inflamación en muchos órganos. Piense en ello como si el sistema de defensa de su cuerpo estuviera hiperactivo y atacara a amigos en lugar de enemigos. La erupción en forma de mariposa en la cara es un signo clásico, pero el lupus puede afectar articulaciones, riñones, corazón y cerebro. El tratamiento se centra en controlar el sistema inmunológico con medicamentos como hidroxicloroquina y esteroides durante las crisis. Con el tratamiento adecuado, la mayoría de las personas con lupus pueden vivir vidas normales, aunque requiere manejo de por vida y protección solar.'
  },

  'rheumatoid-arthritis': {
    id: 'rheumatoid-arthritis',
    name: 'Rheumatoid Arthritis',
    nameEs: 'Artritis reumatoide',
    category: 'rheumatologic',
    icd11: 'FA20',
    description: 'Chronic symmetric inflammatory polyarthritis targeting synovial joints, leading to progressive joint destruction, deformity, and disability if untreated. Systemic autoimmune disease driven by TNF-alpha and IL-6.',
    descriptionEs: 'Poliartritis inflamatoria simétrica crónica que afecta las articulaciones sinoviales, causando destrucción articular progresiva, deformidad y discapacidad si no se trata. Enfermedad autoinmune sistémica impulsada por TNF-alfa e IL-6.',
    riskFactors: ['Female sex (3:1)', 'Age 40-60', 'Smoking (strongest modifiable risk)', 'HLA-DR4 genetic marker', 'Family history', 'Obesity', 'Silica exposure'],
    pathophysiology: 'Citrullination of self-proteins triggers adaptive immune response in HLA-DR4 individuals. Synovial inflammation driven by TNF-alpha, IL-6, and RANKL causes pannus formation that erodes cartilage and bone. B-cell and T-cell dysregulation perpetuates chronic inflammation.',
    pathophysiologyEs: 'La citrulinación de autoproteínas desencadena una respuesta inmune adaptativa en individuos HLA-DR4. La inflamación sinovial impulsada por TNF-alfa, IL-6 y RANKL causa formación de pannus que erosiona cartílago y hueso. La desregulación de células B y T perpetúa la inflamación crónica.',
    symptoms: ['Symmetric polyarthritis of small joints (MCP, PIP, wrists)', 'Morning stiffness >60 minutes', 'Joint swelling and tenderness', 'Rheumatoid nodules', 'Fatigue and malaise', 'Low-grade fever', 'Carpal tunnel syndrome', 'Atlantoaxial subluxation', 'Interstitial lung disease'],
    diagnostics: {
      tests: ['RF (Rheumatoid Factor, 70-80% positive)', 'Anti-CCP antibodies (95% specificity)', 'ESR and CRP (elevated)', 'CBC (anemia of chronic disease)', 'ANA (30% positive)'],
      imaging: ['X-rays of hands and feet (periarticular erosions, joint space narrowing)', 'Musculoskeletal ultrasound (synovitis, erosions)', 'MRI for early disease detection'],
      criteria: ['2010 ACR/EULAR classification criteria', 'DAS28 score for disease activity']
    },
    treatment: {
      medications: ['Methotrexate (first-line DMARD)', 'Hydroxychloroquine', 'Sulfasalazine', 'Leflunomide', 'TNF inhibitors (adalimumab, etanercept, infliximab)', 'IL-6 inhibitors (tocilizumab, sarilumab)', 'JAK inhibitors (tofacitinib, baricitinib, upadacitinib)', 'Rituximab (anti-CD20)', 'Abatacept (CTLA4-Ig)', 'Short-term corticosteroids'],
      procedures: ['Joint aspiration and injection', 'Synovectomy', 'Joint replacement for severe damage'],
      lifestyle: ['Regular low-impact exercise', 'Physical and occupational therapy', 'Smoking cessation', 'Mediterranean diet', 'Omega-3 supplementation', 'Maintain healthy weight']
    },
    emergencySigns: ['Severe neck pain with neurological symptoms', 'Sudden loss of hand or leg function', 'New severe shortness of breath', 'Signs of septic arthritis (fever, hot swollen joint)', 'Vasculitis symptoms'],
    patientExplanation: 'Rheumatoid arthritis is an autoimmune disease where your immune system attacks the lining of your joints, causing pain, swelling, and eventually joint damage. Unlike osteoarthritis from wear and tear, RA is caused by your immune system being overactive. It typically affects both sides of your body equally, especially your hands and feet. Morning stiffness lasting over an hour is a hallmark. Early aggressive treatment with disease-modifying drugs can prevent joint destruction and achieve remission in many patients. The goal is to treat to target—adjusting medications until inflammation is controlled.',
    patientExplanationEs: 'La artritis reumatoide es una enfermedad autoinmune en la que su sistema inmunológico ataca el revestimiento de sus articulaciones, causando dolor, hinchazón y eventualmente daño articular. A diferencia de la osteoartritis por desgaste, la AR es causada por un sistema inmunológico hiperactivo. Típicamente afecta ambos lados del cuerpo por igual, especialmente manos y pies. La rigidez matutina de más de una hora es característica. El tratamiento agresivo temprano con fármacos modificadores puede prevenir la destrucción articular y lograr remisión en muchos pacientes. El objetivo es tratar hasta alcanzar la meta—ajustar medicamentos hasta controlar la inflamación.'
  },

  'multiple-sclerosis': {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    nameEs: 'Esclerosis múltiple',
    category: 'neurologic',
    icd11: '8A40',
    description: 'Chronic immune-mediated demyelinating disease of the central nervous system causing relapsing or progressive neurological dysfunction. Autoreactive T cells attack myelin and oligodendrocytes in brain and spinal cord.',
    descriptionEs: 'Enfermedad desmielinizante inmunomediada crónica del sistema nervioso central que causa disfunción neurológica recurrente o progresiva. Las células T autorreactivas atacan la mielina y los oligodendrocitos en cerebro y médula espinal.',
    riskFactors: ['Female sex (3:1)', 'Age 20-40', 'Northern European ancestry', 'HLA-DRB1*15:01', 'Low vitamin D', 'EBV infection', 'Smoking', 'Obesity in adolescence'],
    pathophysiology: 'Autoreactive Th1 and Th17 cells cross blood-brain barrier and attack myelin sheath and oligodendrocytes. B cells and antibodies contribute to inflammation and demyelination. Axonal damage accumulates causing progressive disability. Plaques of demyelination disseminated in space and time.',
    pathophysiologyEs: 'Las células Th1 y Th17 autorreactivas cruzan la barrera hematoencefálica y atacan la vaina de mielina y los oligodendrocitos. Las células B y anticuerpos contribuyen a la inflamación y desmielinización. El daño axonal se acumula causando discapacidad progresiva. Placas de desmielinización diseminadas en espacio y tiempo.',
    symptoms: ['Optic neuritis (vision loss, eye pain)', 'Sensory symptoms (numbness, tingling, Lhermitte sign)', 'Motor weakness and spasticity', 'Cerebellar ataxia and tremor', 'Internuclear ophthalmoplegia', 'Bladder and bowel dysfunction', 'Fatigue (most common)', 'Cognitive impairment', 'Uhthoff phenomenon (heat sensitivity)', 'Sexual dysfunction'],
    diagnostics: {
      tests: ['Oligoclonal bands in CSF (>95%)', 'Elevated IgG index in CSF', 'Serum anti-AQP4 (to rule out NMOSD)', 'Anti-MOG antibodies (to rule out MOG-associated disease)'],
      imaging: ['Brain MRI (periventricular, juxtacortical, infratentorial lesions)', 'Spinal cord MRI (demyelinating lesions)', 'MRI with gadolinium (active inflammation)'],
      criteria: ['McDonald 2017 criteria (dissemination in space and time)', 'Visual evoked potentials', 'OCT for retinal nerve fiber layer thinning']
    },
    treatment: {
      medications: ['High-efficacy DMTs: Ocrelizumab, ofatumumab, natalizumab, alemtuzumab, cladribine', 'Platform therapies: Interferons, glatiramer acetate, teriflunomide, dimethyl fumarate', 'Acute relapse: IV methylprednisolone', 'Symptom management: Baclofen, gabapentin, amantadine'],
      procedures: ['Plasma exchange for severe refractory relapses', 'Intrathecal baclofen pump for spasticity'],
      lifestyle: ['Regular exercise', 'Vitamin D supplementation', 'Avoid overheating', 'Stress management', 'Cognitive rehabilitation', 'Bladder training']
    },
    emergencySigns: ['Sudden vision loss', 'Severe weakness or paralysis', 'Difficulty swallowing or breathing', 'Severe vertigo with vomiting', 'Loss of bladder/bowel control', 'Cognitive changes or confusion'],
    patientExplanation: 'Multiple sclerosis is a disease where your immune system attacks the protective covering (myelin) of nerves in your brain and spinal cord. Think of myelin like the insulation on electrical wires—when it\'s damaged, signals don\'t travel properly. This causes symptoms like numbness, vision problems, weakness, and fatigue. MS is unpredictable—some people have relapses with recovery, others have gradual progression. Modern medications can significantly slow disease progression and reduce relapses. Starting high-efficacy treatments early gives the best long-term outcomes. Many people with MS live full, active lives with proper management.',
    patientExplanationEs: 'La esclerosis múltiple es una enfermedad en la que su sistema inmunológico ataca la cubierta protectora (mielina) de los nervios en su cerebro y médula espinal. Piense en la mielina como el aislamiento de cables eléctricos—cuando se daña, las señales no viajan correctamente. Esto causa síntomas como entumecimiento, problemas de visión, debilidad y fatiga. La EM es impredecible—algunas personas tienen recaídas con recuperación, otras tienen progresión gradual. Los medicamentos modernos pueden ralentizar significativamente la progresión y reducir las recaídas. Iniciar tratamientos de alta eficacia temprano da los mejores resultados a largo plazo. Muchas personas con EM viven vidas plenas y activas con el manejo adecuado.'
  },

  'celiac-disease': {
    id: 'celiac-disease',
    name: 'Celiac Disease',
    nameEs: 'Enfermedad celíaca',
    category: 'gastrointestinal',
    icd11: 'DA95',
    description: 'Immune-mediated enteropathy triggered by gluten ingestion in genetically predisposed individuals (HLA-DQ2/DQ8). Causes villous atrophy of small intestine with malabsorption.',
    descriptionEs: 'Enteropatía inmunomediada desencadenada por la ingestión de gluten en individuos genéticamente predispuestos (HLA-DQ2/DQ8). Causa atrofia vellositaria del intestino delgado con malabsorción.',
    riskFactors: ['HLA-DQ2 or DQ8 (required)', 'First-degree relative with celiac', 'Type 1 diabetes', 'Autoimmune thyroid disease', 'Down syndrome', 'Turner syndrome', 'Northern European ancestry'],
    pathophysiology: 'Tissue transglutaminase (tTG) deamidates gliadin peptides from gluten. HLA-DQ2/DQ8 presents these to CD4+ T cells, triggering inflammatory cascade. Results in crypt hyperplasia, villous atrophy, and intraepithelial lymphocytosis. Impaired nutrient absorption.',
    pathophysiologyEs: 'La transglutaminasa tisular (tTG) desamina péptidos de gliadina del gluten. HLA-DQ2/DQ8 los presenta a células T CD4+, desencadenando cascada inflamatoria. Resulta en hiperplasia de criptas, atrofia vellositaria y linfocitosis intraepitelial. Absorción de nutrientes deteriorada.',
    symptoms: ['Chronic diarrhea and steatorrhea', 'Abdominal bloating and pain', 'Iron deficiency anemia (refractory)', 'Weight loss or failure to thrive', 'Dermatitis herpetiformis (itchy blistering rash)', 'Osteoporosis', 'Fatigue', 'Peripheral neuropathy', 'Infertility', 'Elevated transaminases'],
    diagnostics: {
      tests: ['Anti-tTG IgA (first-line, 95% sensitivity)', 'Total IgA (exclude IgA deficiency)', 'Anti-endomysial IgA (confirmatory)', 'Anti-deamidated gliadin peptide IgG/IgA', 'HLA-DQ2/DQ8 (high negative predictive value)'],
      imaging: ['Video capsule endoscopy if needed', 'Small bowel imaging for complications'],
      criteria: ['Duodenal biopsy (gold standard): villous atrophy, Marsh classification', 'Response to gluten-free diet']
    },
    treatment: {
      medications: ['No disease-modifying drugs—diet is treatment', 'Iron, calcium, vitamin D, B12, folate supplementation', 'Corticosteroids for refractory celiac'],
      procedures: ['Upper endoscopy with duodenal biopsies', 'Repeat endoscopy to document healing'],
      lifestyle: ['Strict lifelong gluten-free diet (eliminate wheat, barley, rye)', 'Dietitian consultation', 'Read all food labels', 'Avoid cross-contamination', 'Monitor adherence with anti-tTG levels']
    },
    emergencySigns: ['Severe abdominal pain', 'Persistent vomiting', 'Severe diarrhea with dehydration', 'Signs of bowel obstruction', 'Unexplained weight loss despite gluten-free diet'],
    patientExplanation: 'Celiac disease is an autoimmune condition where eating gluten (found in wheat, barley, and rye) triggers your immune system to attack your small intestine. This damages the tiny finger-like projections (villi) that absorb nutrients, leading to malnutrition. Common symptoms include diarrhea, bloating, anemia, and fatigue. The only treatment is a strict gluten-free diet for life—no cheating, as even small amounts cause damage. Most people feel dramatically better within weeks of going gluten-free, and the intestine heals over 6-24 months. Reading labels carefully and avoiding cross-contamination are essential for success.',
    patientExplanationEs: 'La enfermedad celíaca es una condición autoinmune donde comer gluten (presente en trigo, cebada y centeno) desencadena que su sistema inmunológico ataque su intestino delgado. Esto daña las pequeñas proyecciones en forma de dedo (vellosidades) que absorben nutrientes, causando desnutrición. Los síntomas comunes incluyen diarrea, hinchazón, anemia y fatiga. El único tratamiento es una dieta estricta sin gluten de por vida—sin hacer trampa, ya que incluso pequeñas cantidades causan daño. La mayoría de las personas se sienten dramáticamente mejor en semanas sin gluten, y el intestino sana en 6-24 meses. Leer etiquetas cuidadosamente y evitar la contaminación cruzada son esenciales para el éxito.'
  },

  'psoriatic-arthritis': {
    id: 'psoriatic-arthritis',
    name: 'Psoriatic Arthritis',
    nameEs: 'Artritis psoriásica',
    category: 'rheumatologic',
    icd11: 'FA20.1',
    description: 'Inflammatory arthritis associated with psoriasis, featuring heterogeneous joint patterns including enthesitis, dactylitis, and axial disease. Seronegative spondyloarthropathy with potential for destructive arthropathy.',
    descriptionEs: 'Artritis inflamatoria asociada con psoriasis, presentando patrones articulares heterogéneos incluyendo entesitis, dactilitis y enfermedad axial. Espondiloartropatía seronegativa con potencial para artropatía destructiva.',
    riskFactors: ['Psoriasis (skin disease precedes arthritis in 70%)', 'Family history', 'HLA-B27 (axial disease)', 'Age 30-50', 'Obesity', 'Trauma', 'Infections'],
    pathophysiology: 'Shared IL-23/IL-17 axis with psoriasis. Mechanical stress at entheses triggers innate immune activation. TNF, IL-17, and IL-23 drive synovitis, enthesitis, and paradoxical new bone formation. Entheseal-based inflammation distinguishes from RA.',
    pathophysiologyEs: 'Eje IL-23/IL-17 compartido con psoriasis. El estrés mecánico en las entesis desencadena activación inmune innata. TNF, IL-17 e IL-23 impulsan sinovitis, entesitis y formación paradójica de hueso nuevo. La inflamación basada en entesis distingue de la AR.',
    symptoms: ['Asymmetric oligoarthritis (most common pattern)', 'Distal interphalangeal joint involvement', 'Dactylitis (sausage digits)', 'Enthesitis (Achilles, plantar fascia)', 'Axial disease (spondylitis, sacroiliitis)', 'Nail disease (pitting, onycholysis)', 'Psoriatic skin lesions', 'Uveitis', 'Arthritis mutilans (severe destructive form)'],
    diagnostics: {
      tests: ['RF (negative—seronegative)', 'Anti-CCP (usually negative)', 'HLA-B27 (positive in 40-50% with axial disease)', 'ESR and CRP (may be normal)', 'Skin biopsy if psoriasis unclear'],
      imaging: ['X-rays (pencil-in-cup deformity, periostitis, ankylosis)', 'MRI or ultrasound (enthesitis, synovitis, bone edema)', 'Sacroiliac joint imaging for axial disease'],
      criteria: ['CASPAR criteria (sensitivity 91%, specificity 98%)']
    },
    treatment: {
      medications: ['NSAIDs for mild disease', 'Methotrexate (skin and peripheral joints)', 'Sulfasalazine', 'Leflunomide', 'TNF inhibitors (adalimumab, etanercept, infliximab, golimumab, certolizumab)', 'IL-17 inhibitors (secukinumab, ixekizumab)', 'IL-23 inhibitors (guselkumab, risankizumab)', 'IL-12/23 inhibitor (ustekinumab)', 'JAK inhibitors (tofacitinib, upadacitinib)', 'Apremilast (PDE4 inhibitor)'],
      procedures: ['Joint injections', 'Synovectomy', 'Joint replacement for severe damage'],
      lifestyle: ['Regular low-impact exercise', 'Physical therapy', 'Weight management (reduces mechanical stress)', 'Smoking cessation', 'Stress reduction', 'Skin care for psoriasis']
    },
    emergencySigns: ['Severe joint pain with fever', 'Red, hot, swollen joint (rule out septic arthritis)', 'Acute vision changes (uveitis)', 'Severe back pain with neurological symptoms', 'Inability to walk or use hands'],
    patientExplanation: 'Psoriatic arthritis is an inflammatory joint disease that occurs in people with psoriasis (or family history of psoriasis). It\'s different from rheumatoid arthritis—it can affect different joints, cause sausage-like swelling of fingers or toes (dactylitis), and inflammation where tendons attach to bone (enthesitis). Some people also develop spine inflammation. It\'s unpredictable, ranging from mild to severe. Modern treatments, especially biologics targeting IL-17 and IL-23, can control both skin and joint disease. Early treatment prevents permanent joint damage and achieves minimal disease activity in many patients.',
    patientExplanationEs: 'La artritis psoriásica es una enfermedad articular inflamatoria que ocurre en personas con psoriasis (o historial familiar de psoriasis). Es diferente de la artritis reumatoide—puede afectar diferentes articulaciones, causar hinchazón en forma de salchicha de dedos de manos o pies (dactilitis), e inflamación donde los tendones se unen al hueso (entesitis). Algunas personas también desarrollan inflamación de la columna. Es impredecible, variando de leve a severa. Los tratamientos modernos, especialmente biológicos dirigidos a IL-17 e IL-23, pueden controlar tanto la enfermedad de piel como articular. El tratamiento temprano previene daño articular permanente y logra actividad mínima de la enfermedad en muchos pacientes.'
  },

  'sjogren-syndrome': {
    id: 'sjogren-syndrome',
    name: 'Sjögren\'s Syndrome',
    nameEs: 'Síndrome de Sjögren',
    category: 'systemic',
    icd11: '4A01.0',
    description: 'Chronic autoimmune exocrinopathy primarily affecting salivary and lacrimal glands, causing dry eyes and dry mouth (sicca symptoms). May be primary or secondary to other autoimmune diseases. Associated with lymphoma risk.',
    descriptionEs: 'Exocrinopatía autoinmune crónica que afecta principalmente glándulas salivales y lagrimales, causando ojos secos y boca seca (síntomas sicca). Puede ser primario o secundario a otras enfermedades autoinmunes. Asociado con riesgo de linfoma.',
    riskFactors: ['Female sex (9:1)', 'Age 40-60', 'Other autoimmune diseases (RA, SLE, scleroderma)', 'Family history', 'HLA-DR3, HLA-B8'],
    pathophysiology: 'Lymphocytic infiltration of exocrine glands causes focal lymphocytic sialadenitis and dacryoadenitis. B-cell hyperactivity and type I interferon pathway activation drive gland destruction. Ductal epithelial cells act as antigen-presenting cells, perpetuating inflammation. Chronic B-cell stimulation increases lymphoma risk.',
    pathophysiologyEs: 'La infiltración linfocítica de glándulas exocrinas causa sialadenitis linfocítica focal y dacrioadenitis. La hiperactividad de células B y activación de la vía del interferón tipo I impulsan la destrucción glandular. Las células epiteliales ductales actúan como células presentadoras de antígeno, perpetuando la inflamación. La estimulación crónica de células B aumenta el riesgo de linfoma.',
    symptoms: ['Dry eyes (keratoconjunctivitis sicca, gritty sensation)', 'Dry mouth (xerostomia, difficulty swallowing)', 'Parotid gland enlargement', 'Dental caries and oral candidiasis', 'Arthralgia and myalgia', 'Fatigue (profound)', 'Dry skin and vaginal dryness', 'Peripheral neuropathy', 'Interstitial lung disease', 'Renal tubular acidosis', 'Vasculitis', 'Lymphoma (5-10% risk)'],
    diagnostics: {
      tests: ['Anti-SSA/Ro (70-80% positive)', 'Anti-SSB/La (40-50% positive)', 'ANA (80% positive)', 'RF (60-70% positive)', 'Elevated IgG', 'ESR and CRP', 'Schirmer test (tear production <5mm)', 'Ocular staining score', 'Salivary flow rate'],
      imaging: ['Salivary gland ultrasound', 'Chest X-ray or HRCT for lung involvement', 'Sialography if needed'],
      criteria: ['2016 ACR/EULAR classification criteria', 'Salivary gland biopsy (focus score ≥1)']
    },
    treatment: {
      medications: ['Artificial tears and lubricant eye ointments', 'Saliva substitutes', 'Pilocarpine or cevimeline (muscarinic agonists for sicca)', 'Hydroxychloroquine for arthralgia/fatigue', 'Rituximab for severe extraglandular disease', 'Immunosuppressives (methotrexate, azathioprine, mycophenolate)'],
      procedures: ['Punctal plugs for dry eyes', 'Salivary gland biopsy'],
      lifestyle: ['Frequent water sips', 'Sugar-free gum to stimulate saliva', 'Humidifier at night', 'Avoid dry environments', 'Meticulous dental hygiene', 'Avoid anticholinergic medications', 'Use preservative-free eye drops']
    },
    emergencySigns: ['Sudden gland swelling with fever (parotitis)', 'Severe eye pain or vision changes', 'Rapidly progressive weakness', 'New lymph node swelling (lymphoma)', 'Severe difficulty swallowing', 'Respiratory distress'],
    patientExplanation: 'Sjögren\'s syndrome is an autoimmune disease that attacks your moisture-producing glands, especially those that make tears and saliva. This causes dry eyes (feeling like sand in your eyes) and dry mouth (difficulty eating dry foods). Many people also experience severe fatigue and joint pain. The dryness may seem minor but can seriously impact quality of life and dental health. Treatment focuses on symptom relief with artificial tears, saliva substitutes, and medications that stimulate gland secretion. Some people need stronger immune-suppressing medications for severe symptoms. Regular dental checkups are crucial. There\'s a small increased risk of lymphoma, so any new swollen lymph nodes should be evaluated promptly.',
    patientExplanationEs: 'El síndrome de Sjögren es una enfermedad autoinmune que ataca sus glándulas productoras de humedad, especialmente las que producen lágrimas y saliva. Esto causa ojos secos (sensación de arena en los ojos) y boca seca (dificultad para comer alimentos secos). Muchas personas también experimentan fatiga severa y dolor articular. La sequedad puede parecer menor pero puede impactar seriamente la calidad de vida y la salud dental. El tratamiento se centra en alivio de síntomas con lágrimas artificiales, sustitutos de saliva y medicamentos que estimulan la secreción glandular. Algunas personas necesitan medicamentos más fuertes para suprimir el sistema inmune en casos severos. Los chequeos dentales regulares son cruciales. Hay un pequeño riesgo aumentado de linfoma, por lo que cualquier ganglio linfático inflamado nuevo debe evaluarse prontamente.'
  }
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search autoimmune conditions by query string (case-insensitive).
 * Searches across name, nameEs, category, description, and symptoms.
 */
export function searchAutoimmuneConditions(query: string): AutoimmuneConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(AUTOIMMUNE_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.symptoms.some(s => s.toLowerCase().includes(q))
  );
}

/**
 * Get a single autoimmune condition by ID.
 */
export function getAutoimmuneConditionById(id: string): AutoimmuneConditionEntry | undefined {
  return AUTOIMMUNE_CONDITIONS[id];
}

/**
 * Filter conditions by category.
 */
export function getAutoimmuneByCategory(category: AutoimmuneCategory): AutoimmuneConditionEntry[] {
  return Object.values(AUTOIMMUNE_CONDITIONS).filter(c => c.category === category);
}

/**
 * Get total count of autoimmune conditions in database.
 */
export function getAutoimmuneConditionCount(): number {
  return Object.keys(AUTOIMMUNE_CONDITIONS).length;
}
