/**
 * Genetics & Genomics Database
 *
 * Structured database of genetics and genomics entries for SOMA medical
 * education. Each entry covers genetic basis, clinical presentation,
 * diagnostic approach, management, and high-yield pearls.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GeneticsCategory =
  | 'mendelian'
  | 'chromosomal'
  | 'multifactorial'
  | 'mitochondrial'
  | 'cancer-genetics'
  | 'pharmacogenomics'
  | 'genetic-testing'
  | 'gene-therapy'
  | 'population-genetics';

export interface GeneticsEntry {
  id: string;
  name: string;
  category: GeneticsCategory;
  description: string;
  inheritance: string;
  geneticBasis: string;
  clinicalPresentation: string[];
  diagnosticApproach: string[];
  management: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const e = (
  id: string,
  name: string,
  category: GeneticsCategory,
  description: string,
  inheritance: string,
  geneticBasis: string,
  clinicalPresentation: string[],
  diagnosticApproach: string[],
  management: string[],
  keyPearls: string[],
  references: string[],
): GeneticsEntry => ({
  id,
  name,
  category,
  description,
  inheritance,
  geneticBasis,
  clinicalPresentation,
  diagnosticApproach,
  management,
  keyPearls,
  references,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const GENETICS_ENTRIES: Record<string, GeneticsEntry> = {

  // ── Mendelian Disorders ──────────────────────────────────────────────────

  'cystic-fibrosis': e(
    'cystic-fibrosis',
    'Cystic Fibrosis',
    'mendelian',
    'Most common lethal autosomal recessive disorder in Caucasians, affecting chloride channels.',
    'Autosomal recessive',
    'CFTR gene on chromosome 7q31.2; most common mutation is deltaF508 (F508del), a 3-bp deletion causing misfolded protein.',
    [
      'Chronic progressive pulmonary disease with bronchiectasis',
      'Pancreatic exocrine insufficiency with steatorrhea',
      'Meconium ileus in neonates',
      'Male infertility due to bilateral absence of vas deferens',
      'Elevated sweat chloride (>60 mEq/L)',
      'Nasal polyps and recurrent sinusitis',
    ],
    [
      'Newborn screening (immunoreactive trypsinogen)',
      'Sweat chloride test (gold standard)',
      'CFTR mutation panel',
      'Expanded carrier screening',
    ],
    [
      'Airway clearance techniques and chest physiotherapy',
      'CFTR modulators (ivacaftor, lumacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor)',
      'Pancreatic enzyme replacement',
      'Fat-soluble vitamin supplementation (A, D, E, K)',
      'Lung transplant for end-stage disease',
    ],
    [
      'Carrier frequency ~1/25 in Caucasians',
      'DeltaF508 accounts for ~70% of CF alleles worldwide',
      'Sweat chloride >60 mEq/L is diagnostic; 30-59 intermediate',
      'Elexacaftor/tezacaftor/ivacaftor (Trikafta) treats ~90% of patients',
      'CF-related diabetes develops in ~50% of adults',
    ],
    ['PMID: 31155234', 'PMID: 31563012'],
  ),

  'sickle-cell-disease': e(
    'sickle-cell-disease',
    'Sickle Cell Disease',
    'mendelian',
    'Hemoglobin disorder causing vaso-occlusion, hemolytic anemia, and multi-organ damage.',
    'Autosomal recessive',
    'HBB gene on chromosome 11p15.4; point mutation (GAG->GTG) causing Glu6Val substitution in beta-globin producing HbS.',
    [
      'Vaso-occlusive pain crises',
      'Acute chest syndrome',
      'Splenic sequestration and functional asplenia',
      'Stroke risk (especially in children)',
      'Avascular necrosis of femoral head',
      'Chronic hemolytic anemia (Hb 6-9 g/dL)',
    ],
    [
      'Newborn screening with hemoglobin electrophoresis',
      'Peripheral smear showing sickle cells, Howell-Jolly bodies',
      'Hemoglobin electrophoresis (HbSS, HbSC patterns)',
      'Transcranial Doppler for stroke risk assessment in children',
    ],
    [
      'Hydroxyurea (increases HbF, reduces crises)',
      'Prophylactic penicillin in children until age 5',
      'Pneumococcal vaccination',
      'Chronic transfusion therapy for stroke prevention',
      'L-glutamine, voxelotor, crizanlizumab for disease modification',
      'Hematopoietic stem cell transplant (curative)',
      'Gene therapy (emerging curative option)',
    ],
    [
      'HbS trait (carrier) confers malaria resistance (heterozygote advantage)',
      'Functional asplenia by age 5 increases infection risk from encapsulated organisms',
      'Acute chest syndrome is the leading cause of death',
      'Dactylitis (hand-foot syndrome) often the earliest manifestation in infants',
      'Target HbS <30% for stroke prevention with transfusion',
    ],
    ['PMID: 28622554', 'PMID: 33283989'],
  ),

  'huntington-disease': e(
    'huntington-disease',
    'Huntington Disease',
    'mendelian',
    'Progressive neurodegenerative disorder with chorea, psychiatric symptoms, and cognitive decline.',
    'Autosomal dominant with complete penetrance',
    'HTT gene on chromosome 4p16.3; CAG trinucleotide repeat expansion (>=40 repeats = full penetrance). Demonstrates anticipation.',
    [
      'Chorea (involuntary dance-like movements)',
      'Progressive dementia and cognitive decline',
      'Psychiatric symptoms (depression, irritability, psychosis)',
      'Caudate nucleus atrophy on imaging',
      'Onset typically 30-50 years',
      'Juvenile form with rigidity (>60 CAG repeats, paternal transmission)',
    ],
    [
      'Genetic testing for CAG repeat length',
      'MRI showing caudate atrophy and ventricular enlargement',
      'Predictive testing with genetic counseling',
      'Normal: <27 repeats; intermediate: 27-35; reduced penetrance: 36-39; full: >=40',
    ],
    [
      'Tetrabenazine or deutetrabenazine for chorea',
      'Antipsychotics for behavioral symptoms',
      'SSRIs for depression',
      'Supportive care, PT/OT/speech therapy',
      'Genetic counseling for at-risk family members',
    ],
    [
      'Anticipation: CAG repeat length increases in successive generations, especially paternal',
      'Full penetrance at >=40 repeats; reduced penetrance at 36-39',
      'Caudate atrophy is a hallmark neuroimaging finding',
      'Each child of an affected parent has 50% risk',
      'Juvenile onset (<20 years) typically from paternal inheritance with large expansions',
    ],
    ['PMID: 29647963'],
  ),

  'marfan-syndrome': e(
    'marfan-syndrome',
    'Marfan Syndrome',
    'mendelian',
    'Connective tissue disorder affecting skeletal, ocular, and cardiovascular systems.',
    'Autosomal dominant',
    'FBN1 gene on chromosome 15q21.1; encodes fibrillin-1, a glycoprotein in extracellular matrix microfibrils. ~25% de novo mutations.',
    [
      'Tall stature with long limbs and arachnodactyly',
      'Ectopia lentis (superior-temporal lens subluxation)',
      'Aortic root dilation and dissection',
      'Mitral valve prolapse',
      'Pectus excavatum or carinatum',
      'Dural ectasia',
      'Spontaneous pneumothorax',
    ],
    [
      'Revised Ghent nosology criteria (2010)',
      'Echocardiography for aortic root measurement',
      'FBN1 gene sequencing',
      'Ophthalmologic exam with slit lamp for lens subluxation',
    ],
    [
      'Beta-blockers or ARBs to slow aortic root dilation',
      'Prophylactic aortic root surgery when diameter reaches 5 cm',
      'Activity restriction (avoid contact sports, isometric exercise)',
      'Annual echocardiography and ophthalmologic exams',
      'Pregnancy counseling (high-risk for aortic dissection)',
    ],
    [
      'Aortic dissection is the main cause of mortality',
      'Lens subluxation is UPWARD in Marfan (DOWN in homocystinuria)',
      'Positive wrist sign (Walker-Murdoch) and thumb sign (Steinberg)',
      'Losartan may be equivalent to beta-blockers for aortic protection',
      'Must distinguish from Loeys-Dietz syndrome (TGFBR1/2 mutations)',
    ],
    ['PMID: 20301510', 'PMID: 24946442'],
  ),

  'phenylketonuria': e(
    'phenylketonuria',
    'Phenylketonuria (PKU)',
    'mendelian',
    'Inborn error of phenylalanine metabolism causing intellectual disability if untreated.',
    'Autosomal recessive',
    'PAH gene on chromosome 12q23.2; encodes phenylalanine hydroxylase. Cofactor BH4 deficiency can also cause hyperphenylalaninemia.',
    [
      'Intellectual disability if untreated',
      'Musty/mousy body odor',
      'Fair skin, light hair, blue eyes (decreased melanin)',
      'Eczema',
      'Seizures',
      'Microcephaly',
    ],
    [
      'Newborn screening (blood phenylalanine level)',
      'Plasma phenylalanine >1200 micromol/L (classic PKU)',
      'Confirm with PAH gene sequencing',
      'BH4 loading test to rule out cofactor deficiency',
    ],
    [
      'Lifelong phenylalanine-restricted diet',
      'Medical formula supplementation',
      'Sapropterin (BH4) for responsive patients (~25-50%)',
      'Pegvaliase (PEG-PAL enzyme substitution) for adults',
      'Maternal PKU: strict control during pregnancy to prevent fetal effects',
    ],
    [
      'Classic example of newborn screening success',
      'Treatment must begin within first weeks of life',
      'Aspartame contains phenylalanine (contraindicated)',
      'Maternal PKU: uncontrolled phe in pregnancy causes congenital heart defects, microcephaly',
      'Carrier frequency ~1/50 in general population',
    ],
    ['PMID: 28122801'],
  ),

  'hemophilia-a': e(
    'hemophilia-a',
    'Hemophilia A',
    'mendelian',
    'X-linked bleeding disorder due to factor VIII deficiency.',
    'X-linked recessive',
    'F8 gene on chromosome Xq28; intron 22 inversion accounts for ~45% of severe cases.',
    [
      'Hemarthrosis (bleeding into joints)',
      'Deep tissue and muscle hematomas',
      'Prolonged bleeding after surgery or trauma',
      'Easy bruising',
      'Intracranial hemorrhage (neonates)',
      'Severity correlates with factor level: severe <1%, moderate 1-5%, mild 5-40%',
    ],
    [
      'Prolonged aPTT with normal PT and bleeding time',
      'Factor VIII activity level',
      'Mixing study corrects aPTT (differentiates from inhibitor)',
      'Genetic testing for carrier detection and prenatal diagnosis',
    ],
    [
      'Factor VIII replacement (on-demand and prophylactic)',
      'Emicizumab (bispecific antibody mimicking factor VIII)',
      'Desmopressin (DDAVP) for mild hemophilia A',
      'Avoid aspirin and NSAIDs',
      'Gene therapy (emerging)',
    ],
    [
      'Most common severe bleeding disorder',
      'aPTT prolonged, PT normal, bleeding time normal',
      '~30% of cases are de novo mutations',
      'Obligate carriers: daughters of affected males',
      'Inhibitor development occurs in ~30% of severe cases',
    ],
    ['PMID: 33985862'],
  ),

  'hemophilia-b': e(
    'hemophilia-b',
    'Hemophilia B (Christmas Disease)',
    'mendelian',
    'X-linked bleeding disorder due to factor IX deficiency.',
    'X-linked recessive',
    'F9 gene on chromosome Xq27.1; various mutations including missense, nonsense, and deletions.',
    [
      'Hemarthrosis',
      'Deep tissue bleeding',
      'Prolonged bleeding after surgery',
      'Clinically indistinguishable from hemophilia A',
    ],
    [
      'Prolonged aPTT with normal PT',
      'Factor IX activity level',
      'Genetic testing for F9 mutations',
    ],
    [
      'Factor IX replacement therapy',
      'Extended half-life factor IX products',
      'Gene therapy (etranacogene dezaparvovec approved)',
      'Avoid aspirin and NSAIDs',
    ],
    [
      'Christmas disease named after first patient described',
      '~1/5 as common as hemophilia A',
      'Factor IX is vitamin K-dependent',
      'Gene therapy has shown durable expression',
    ],
    ['PMID: 34365812'],
  ),

  // ── Chromosomal Disorders ────────────────────────────────────────────────

  'down-syndrome': e(
    'down-syndrome',
    'Down Syndrome (Trisomy 21)',
    'chromosomal',
    'Most common chromosomal cause of intellectual disability, caused by extra chromosome 21.',
    'Sporadic (most); Robertsonian translocation (3-4%); Mosaicism (1-2%)',
    'Trisomy 21: 95% nondisjunction, 3-4% Robertsonian translocation (14;21), 1-2% mosaic. Maternal age is primary risk factor.',
    [
      'Intellectual disability (mild to moderate)',
      'Characteristic facies: flat face, upslanting palpebral fissures, epicanthal folds',
      'Single palmar crease, sandal gap',
      'Congenital heart defects (~50%, AV canal most common)',
      'Duodenal atresia (double bubble sign)',
      'Increased risk of ALL and AML',
      'Early-onset Alzheimer disease',
      'Atlantoaxial instability',
      'Hypothyroidism',
    ],
    [
      'First-trimester screening (nuchal translucency + serum markers)',
      'Quad screen: decreased AFP, decreased unconjugated estriol, increased hCG, increased inhibin A',
      'Cell-free fetal DNA (NIPT)',
      'Karyotype for confirmation (diagnostic)',
      'Echocardiogram in all neonates',
    ],
    [
      'Early intervention programs',
      'Cardiac surgery for congenital heart defects',
      'Thyroid function monitoring',
      'Annual audiologic and ophthalmologic exams',
      'Screening for atlantoaxial instability',
      'Developmental and educational support',
    ],
    [
      'Most common autosomal trisomy compatible with life',
      'Risk increases with maternal age (1/25 at age 45)',
      'Robertsonian translocation carriers have recurrence risk',
      'Endocardial cushion defect is the most characteristic cardiac lesion',
      'Quad screen pattern: low AFP, low uE3, high hCG, high inhibin A',
    ],
    ['PMID: 32726213'],
  ),

  'turner-syndrome': e(
    'turner-syndrome',
    'Turner Syndrome (45,X)',
    'chromosomal',
    'Complete or partial loss of one X chromosome in females, causing short stature and gonadal dysgenesis.',
    'Sporadic; 45,X or mosaic patterns',
    '45,X (complete monosomy) in ~50%; mosaicism (45,X/46,XX) and structural X abnormalities in remainder.',
    [
      'Short stature (average adult height ~4\'8")',
      'Streak gonads with primary amenorrhea',
      'Shield chest with widely spaced nipples',
      'Webbed neck (cystic hygroma in utero)',
      'Coarctation of the aorta',
      'Bicuspid aortic valve',
      'Horseshoe kidney',
      'Lymphedema of hands and feet at birth',
    ],
    [
      'Karyotype (gold standard)',
      'Elevated FSH/LH (hypergonadotropic hypogonadism)',
      'Echocardiogram and renal ultrasound',
      'Prenatal: cystic hygroma on ultrasound, positive NIPT',
    ],
    [
      'Growth hormone therapy for short stature',
      'Estrogen replacement at age of puberty',
      'Cardiac monitoring for aortic dilation',
      'Fertility options: donor oocytes, adoption',
      'Monitor for hypothyroidism and diabetes',
    ],
    [
      'Only viable monosomy in humans',
      'Most 45,X conceptions (99%) end in spontaneous abortion',
      'Coarctation of aorta is the most common cardiac defect',
      'Intelligence is typically normal',
      'Most common cause of primary amenorrhea',
    ],
    ['PMID: 31270530'],
  ),

  'klinefelter-syndrome': e(
    'klinefelter-syndrome',
    'Klinefelter Syndrome (47,XXY)',
    'chromosomal',
    'Most common sex chromosome aneuploidy in males, causing hypogonadism and infertility.',
    'Sporadic; advanced maternal age is a risk factor',
    '47,XXY in ~80%; variants include 48,XXXY and mosaics 47,XXY/46,XY.',
    [
      'Tall stature with eunuchoid proportions',
      'Small firm testes',
      'Gynecomastia',
      'Infertility (azoospermia)',
      'Learning disabilities (especially language)',
      'Decreased facial and body hair',
      'Increased risk of breast cancer and SLE',
    ],
    [
      'Karyotype (diagnostic)',
      'Hormone panel: elevated FSH/LH, low testosterone',
      'Semen analysis showing azoospermia',
      'Often diagnosed during infertility workup',
    ],
    [
      'Testosterone replacement starting at puberty',
      'Fertility assistance (testicular sperm extraction + ICSI)',
      'Educational support',
      'Breast cancer screening',
      'Bone density monitoring',
    ],
    [
      'Most common cause of hypogonadism and infertility in males',
      'Incidence ~1/600 male births',
      'Often not diagnosed until adulthood (infertility workup)',
      'Barr body present (one inactivated X)',
      'Increased risk of breast cancer (~20x general male population)',
    ],
    ['PMID: 30542582'],
  ),

  'prader-willi-syndrome': e(
    'prader-willi-syndrome',
    'Prader-Willi Syndrome',
    'chromosomal',
    'Genomic imprinting disorder with neonatal hypotonia, hyperphagia, obesity, and intellectual disability.',
    'Genomic imprinting (paternal genes affected)',
    'Loss of function of paternally expressed genes at 15q11-q13. ~70% paternal deletion, ~25% maternal uniparental disomy, ~2-5% imprinting defects.',
    [
      'Neonatal hypotonia and feeding difficulties',
      'Hyperphagia developing in early childhood',
      'Obesity if diet uncontrolled',
      'Short stature and small hands/feet',
      'Hypogonadism',
      'Mild to moderate intellectual disability',
      'Behavioral issues (tantrums, skin picking)',
    ],
    [
      'DNA methylation analysis (detects all molecular classes)',
      'FISH or chromosomal microarray for deletion',
      'Microsatellite/SNP analysis for UPD',
      'Growth hormone stimulation testing',
    ],
    [
      'Growth hormone therapy (improves height, body composition)',
      'Strict caloric restriction and food security',
      'Behavioral management',
      'Sex hormone replacement',
      'Multidisciplinary care',
    ],
    [
      'Classic imprinting disorder: loss of paternal 15q11-q13',
      'Compare with Angelman syndrome (maternal deletion of same region)',
      'Methylation testing is the first-line diagnostic test',
      'Hyperphagia begins around age 2-6 years',
      'Leading genetic cause of obesity',
    ],
    ['PMID: 28861857'],
  ),

  'digeorge-syndrome': e(
    'digeorge-syndrome',
    'DiGeorge Syndrome (22q11.2 Deletion)',
    'chromosomal',
    'Microdeletion syndrome affecting pharyngeal pouch derivatives; most common microdeletion in humans.',
    'Autosomal dominant (most de novo); 22q11.2 deletion',
    '22q11.2 microdeletion (~3 Mb) encompassing TBX1 gene, a key regulator of pharyngeal arch development. ~90% de novo.',
    [
      'Cardiac defects (tetralogy of Fallot, interrupted aortic arch, truncus arteriosus)',
      'Abnormal facies (long face, prominent nose)',
      'Thymic aplasia/hypoplasia with T-cell immunodeficiency',
      'Cleft palate or velopharyngeal insufficiency',
      'Hypocalcemia (hypoparathyroidism)',
      'Learning difficulties, psychiatric disorders (schizophrenia risk)',
    ],
    [
      'FISH or chromosomal microarray for 22q11.2 deletion',
      'MLPA (multiplex ligation-dependent probe amplification)',
      'Calcium and PTH levels',
      'Flow cytometry for T-cell subsets',
      'Echocardiogram',
    ],
    [
      'Cardiac surgery as needed',
      'Calcium and vitamin D supplementation',
      'Thymus transplant for severe T-cell deficiency',
      'Irradiated blood products to prevent GVHD',
      'Live vaccines contraindicated if severely immunodeficient',
      'Psychiatric monitoring',
    ],
    [
      'CATCH-22 mnemonic: Cardiac, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia',
      'Most common microdeletion syndrome (~1/4000)',
      'Interrupted aortic arch type B is highly associated',
      'Higher risk of schizophrenia (~25x general population)',
      'Absent thymic shadow on chest X-ray',
    ],
    ['PMID: 31725855'],
  ),

  'edwards-syndrome': e(
    'edwards-syndrome',
    'Edwards Syndrome (Trisomy 18)',
    'chromosomal',
    'Second most common autosomal trisomy; severe intellectual disability with characteristic features.',
    'Sporadic; maternal age-associated',
    'Trisomy 18 (most from nondisjunction); mosaicism and partial trisomy are less common.',
    [
      'Severe intellectual disability',
      'Clenched fists with overlapping fingers (index over 3rd)',
      'Rocker-bottom feet',
      'Congenital heart defects (VSD most common)',
      'Micrognathia, prominent occiput',
      'Low birth weight and failure to thrive',
    ],
    [
      'Prenatal ultrasound findings',
      'Quad screen: all four markers low',
      'NIPT',
      'Karyotype for confirmation',
    ],
    [
      'Supportive/comfort care (most common approach)',
      'Cardiac surgery in select cases',
      'Palliative care discussions',
      'Median survival ~5-15 days; ~10% survive to 1 year',
    ],
    [
      'Quad screen: all four markers decreased',
      'Clenched fist with overlapping fingers is pathognomonic',
      '80% are female',
      'Most common trisomy at conception (most abort spontaneously)',
      'Distinguished from trisomy 13 by hand position and absence of holoprosencephaly',
    ],
    ['PMID: 29046024'],
  ),

  // ── Multifactorial Disorders ─────────────────────────────────────────────

  'neural-tube-defects': e(
    'neural-tube-defects',
    'Neural Tube Defects',
    'multifactorial',
    'Congenital malformations from incomplete closure of the neural tube, influenced by genetic and environmental factors.',
    'Multifactorial',
    'Polygenic susceptibility with folate metabolism genes (MTHFR variants); environmental factors include folate deficiency, diabetes, valproic acid, obesity.',
    [
      'Anencephaly (failure of cranial closure, incompatible with life)',
      'Spina bifida occulta (usually asymptomatic, tuft of hair)',
      'Meningocele (meninges herniate through vertebral defect)',
      'Myelomeningocele (spinal cord and meninges herniate)',
      'Arnold-Chiari II malformation associated with myelomeningocele',
    ],
    [
      'Elevated maternal serum AFP (open NTDs)',
      'Prenatal ultrasound (lemon sign, banana sign)',
      'Amniocentesis for AFP and acetylcholinesterase',
      'Fetal MRI for detailed anatomy',
    ],
    [
      'Folic acid supplementation 0.4 mg/day (prevention, all women)',
      'High-dose folic acid 4 mg/day for women with prior affected pregnancy',
      'Prenatal surgical repair for myelomeningocele (MOMS trial)',
      'Postnatal surgical closure',
      'Multidisciplinary care (urology, orthopedics, neurosurgery)',
    ],
    [
      'Folic acid supplementation reduces NTD risk by ~70%',
      'Elevated AFP: open NTDs; decreased AFP: Down syndrome',
      'MTHFR C677T variant impairs folate metabolism',
      'Recurrence risk ~3-5% after one affected child',
      'Valproic acid is the most teratogenic anticonvulsant for NTDs',
    ],
    ['PMID: 30053082'],
  ),

  'type-2-diabetes-genetics': e(
    'type-2-diabetes-genetics',
    'Type 2 Diabetes (Genetic Factors)',
    'multifactorial',
    'Complex metabolic disorder with strong genetic and environmental contributions.',
    'Multifactorial; strong familial clustering',
    'Highly polygenic: >400 risk loci identified via GWAS. Key genes include TCF7L2, PPARG, KCNJ11, FTO. Heritability estimated at 40-70%.',
    [
      'Insulin resistance and progressive beta-cell dysfunction',
      'Hyperglycemia, often asymptomatic initially',
      'Metabolic syndrome association',
      'Microvascular and macrovascular complications',
    ],
    [
      'Polygenic risk scores (research/clinical trials)',
      'Family history assessment',
      'HbA1c, fasting glucose, OGTT',
      'MODY gene panels when monogenic diabetes suspected',
    ],
    [
      'Lifestyle modification (diet, exercise)',
      'Metformin and pharmacotherapy',
      'Monitoring for complications',
      'Genetic counseling if MODY suspected',
    ],
    [
      'TCF7L2 is the strongest common T2D risk locus',
      'Concordance in monozygotic twins ~70%, supporting strong genetic component',
      'MODY should be suspected in lean, young-onset, autosomal dominant pedigree',
      'FTO gene strongly associated with obesity and T2D risk',
      'Thrifty genotype hypothesis explains high prevalence in certain populations',
    ],
    ['PMID: 30054458'],
  ),

  'cleft-lip-palate': e(
    'cleft-lip-palate',
    'Cleft Lip and Palate',
    'multifactorial',
    'Common craniofacial malformation with genetic and environmental contributions.',
    'Multifactorial; syndromic forms may be Mendelian',
    'Polygenic: IRF6, MSX1, TGFA among identified risk genes. Environmental factors include folate deficiency, smoking, anticonvulsants.',
    [
      'Cleft lip with or without cleft palate (CL/P)',
      'Isolated cleft palate (CP)',
      'Feeding difficulties',
      'Speech problems',
      'Recurrent otitis media',
      'Dental abnormalities',
    ],
    [
      'Prenatal ultrasound (cleft lip detectable ~18 weeks)',
      'Clinical examination at birth',
      'Genetic evaluation for syndromic features',
      'Chromosomal microarray if additional anomalies',
    ],
    [
      'Surgical repair (lip at ~3 months, palate at ~12 months)',
      'Speech therapy',
      'Orthodontic care',
      'Audiology monitoring',
      'Multidisciplinary team approach',
    ],
    [
      'CL/P and isolated CP are genetically distinct',
      'Recurrence risk ~3-5% with one affected child',
      'Most common craniofacial malformation (~1/700 births)',
      'Van der Woude syndrome (IRF6): most common syndromic form',
      'Folic acid supplementation may reduce risk',
    ],
    ['PMID: 29728381'],
  ),

  // ── Mitochondrial Disorders ──────────────────────────────────────────────

  'leber-hereditary-optic-neuropathy': e(
    'leber-hereditary-optic-neuropathy',
    'Leber Hereditary Optic Neuropathy (LHON)',
    'mitochondrial',
    'Mitochondrial disorder causing acute or subacute bilateral vision loss in young adults.',
    'Maternal (mitochondrial)',
    'mtDNA point mutations: m.11778G>A (ND4, ~70%), m.3460G>A (ND1), m.14484T>C (ND6). Complex I dysfunction.',
    [
      'Acute or subacute painless central vision loss',
      'Typically affects young males (age 15-35)',
      'Sequential bilateral involvement (weeks to months)',
      'Central scotoma',
      'Optic disc hyperemia and peripapillary telangiectasia',
    ],
    [
      'Clinical presentation and fundoscopy',
      'mtDNA sequencing for known mutations',
      'OCT showing retinal nerve fiber layer thinning',
      'Visual evoked potentials',
      'Maternal inheritance pattern in pedigree',
    ],
    [
      'Idebenone (CoQ10 analog, modest benefit)',
      'Gene therapy (lenadogene nolparvovec for m.11778G>A)',
      'Avoid tobacco, alcohol, and mitochondrial toxins',
      'Low vision aids and rehabilitation',
    ],
    [
      'Classic mitochondrial inheritance: affected mothers pass to all children',
      'Male predominance despite maternal inheritance (incomplete penetrance)',
      'Heteroplasmy affects clinical expression',
      'm.14484T>C has best spontaneous recovery rate',
      'No male-to-child transmission',
    ],
    ['PMID: 32109259'],
  ),

  'melas-syndrome': e(
    'melas-syndrome',
    'MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like Episodes)',
    'mitochondrial',
    'Mitochondrial disorder with stroke-like episodes, seizures, and lactic acidosis.',
    'Maternal (mitochondrial)',
    'mtDNA mutation m.3243A>G in MT-TL1 (tRNA-Leu) in ~80% of cases. Affects oxidative phosphorylation.',
    [
      'Stroke-like episodes (not following vascular territories)',
      'Seizures (focal or generalized)',
      'Lactic acidosis',
      'Recurrent headaches and vomiting',
      'Myopathy and exercise intolerance',
      'Sensorineural hearing loss',
      'Short stature',
      'Diabetes mellitus',
    ],
    [
      'Elevated serum and CSF lactate',
      'MRI: stroke-like lesions not conforming to vascular territories',
      'Muscle biopsy: ragged red fibers, COX-negative fibers',
      'mtDNA sequencing (blood or muscle)',
    ],
    [
      'L-arginine (acute and prophylactic for stroke-like episodes)',
      'Coenzyme Q10 and L-carnitine supplementation',
      'Seizure management (avoid valproic acid)',
      'Diabetes management',
      'Avoid mitochondrial toxins',
    ],
    [
      'Stroke-like episodes do NOT follow vascular territories (distinguishing feature)',
      'Ragged red fibers on Gomori trichrome stain',
      'Avoid valproic acid (inhibits mitochondrial function)',
      'Same m.3243A>G mutation can cause MIDD (maternally inherited diabetes and deafness)',
      'Heteroplasmy level in muscle correlates better with severity than blood',
    ],
    ['PMID: 26017892'],
  ),

  'merrf-syndrome': e(
    'merrf-syndrome',
    'MERRF (Myoclonic Epilepsy with Ragged Red Fibers)',
    'mitochondrial',
    'Mitochondrial disorder characterized by myoclonus, epilepsy, ataxia, and ragged red fibers.',
    'Maternal (mitochondrial)',
    'mtDNA mutation m.8344A>G in MT-TK (tRNA-Lys) in ~80% of cases.',
    [
      'Myoclonus (hallmark feature)',
      'Generalized epilepsy',
      'Cerebellar ataxia',
      'Myopathy with exercise intolerance',
      'Sensorineural hearing loss',
      'Lipomas (especially cervical)',
    ],
    [
      'Muscle biopsy: ragged red fibers',
      'Elevated serum lactate',
      'mtDNA testing for m.8344A>G',
      'EEG showing generalized epileptiform discharges',
    ],
    [
      'Antiepileptic drugs for seizures (avoid valproic acid)',
      'Coenzyme Q10 supplementation',
      'L-carnitine supplementation',
      'Physical therapy',
    ],
    [
      'Myoclonus is the defining feature distinguishing MERRF from MELAS',
      'Ragged red fibers seen with Gomori trichrome stain',
      'Cervical lipomas are a distinctive associated feature',
      'Variable expressivity due to heteroplasmy',
    ],
    ['PMID: 20301709'],
  ),

  // ── Cancer Genetics ──────────────────────────────────────────────────────

  'brca-hereditary-breast-ovarian': e(
    'brca-hereditary-breast-ovarian',
    'BRCA1/BRCA2 Hereditary Breast and Ovarian Cancer',
    'cancer-genetics',
    'Hereditary cancer syndrome due to germline mutations in BRCA1 or BRCA2 tumor suppressors.',
    'Autosomal dominant with variable penetrance',
    'BRCA1 on 17q21; BRCA2 on 13q13. Both are tumor suppressors involved in homologous recombination DNA repair. Loss of heterozygosity initiates tumorigenesis (two-hit hypothesis).',
    [
      'Breast cancer (lifetime risk 60-80%)',
      'Ovarian cancer (BRCA1: 40-60%; BRCA2: 15-30%)',
      'Male breast cancer (especially BRCA2)',
      'Prostate cancer (BRCA2)',
      'Pancreatic cancer (BRCA2)',
      'Triple-negative breast cancer associated with BRCA1',
    ],
    [
      'Genetic testing for BRCA1/BRCA2 pathogenic variants',
      'Criteria: family history, young age at diagnosis, triple-negative histology',
      'Multi-gene panel testing increasingly used',
      'Genetic counseling before and after testing',
    ],
    [
      'Enhanced screening (annual MRI + mammography from age 25-30)',
      'Risk-reducing bilateral mastectomy (reduces risk ~90%)',
      'Risk-reducing bilateral salpingo-oophorectomy by age 35-40',
      'PARP inhibitors for BRCA-mutated cancers (olaparib, etc.)',
      'Cascade testing of at-risk family members',
    ],
    [
      'BRCA1/2 are tumor suppressors requiring two hits (Knudson hypothesis)',
      'BRCA1 mutations associated with triple-negative breast cancer',
      'BRCA2 mutations associated with male breast cancer',
      'Ashkenazi Jewish founder mutations: BRCA1 185delAG, 5382insC; BRCA2 6174delT',
      'PARP inhibitors exploit synthetic lethality in BRCA-deficient tumors',
    ],
    ['PMID: 30285735', 'PMID: 31170702'],
  ),

  'lynch-syndrome': e(
    'lynch-syndrome',
    'Lynch Syndrome (HNPCC)',
    'cancer-genetics',
    'Most common hereditary colorectal cancer syndrome, caused by mismatch repair gene deficiency.',
    'Autosomal dominant',
    'Germline mutations in MMR genes: MLH1, MSH2, MSH6, PMS2, or EPCAM deletion. Causes microsatellite instability (MSI-high).',
    [
      'Colorectal cancer (lifetime risk 40-80%, often right-sided, young onset)',
      'Endometrial cancer (40-60% lifetime risk in women)',
      'Ovarian cancer',
      'Gastric, urinary tract, small bowel cancers',
      'Sebaceous adenomas and keratoacanthomas (Muir-Torre variant)',
      'Brain tumors (Turcot variant)',
    ],
    [
      'Amsterdam II criteria and revised Bethesda guidelines',
      'Tumor testing: MSI analysis and/or immunohistochemistry for MMR proteins',
      'MLH1 promoter methylation to exclude sporadic cases',
      'Germline genetic testing for MMR genes',
    ],
    [
      'Colonoscopy every 1-2 years starting age 20-25',
      'Consider subtotal colectomy if CRC develops',
      'Hysterectomy and bilateral salpingo-oophorectomy after childbearing',
      'Aspirin (600 mg/day may reduce cancer risk)',
      'Immune checkpoint inhibitors for MSI-high cancers',
    ],
    [
      'Most common hereditary CRC syndrome (~3% of all CRC)',
      'MSI-high tumors respond to immune checkpoint inhibitors (pembrolizumab)',
      'Distinguish from familial adenomatous polyposis (thousands of polyps)',
      'Amsterdam II criteria: 3-2-1 rule (3 relatives, 2 generations, 1 under 50)',
      'MLH1 and MSH2 mutations account for ~90% of Lynch syndrome',
    ],
    ['PMID: 31026213'],
  ),

  'li-fraumeni-syndrome': e(
    'li-fraumeni-syndrome',
    'Li-Fraumeni Syndrome',
    'cancer-genetics',
    'Rare cancer predisposition syndrome with markedly elevated lifetime cancer risk across many tumor types.',
    'Autosomal dominant',
    'Germline TP53 mutations (17p13.1). p53 is "guardian of the genome," regulating cell cycle arrest, DNA repair, and apoptosis.',
    [
      'Soft tissue sarcomas',
      'Osteosarcoma',
      'Breast cancer (premenopausal)',
      'Brain tumors (gliomas)',
      'Adrenocortical carcinoma (especially in children)',
      'Leukemia',
      'Lifetime cancer risk approaching 100%',
    ],
    [
      'Classic Li-Fraumeni criteria',
      'TP53 germline sequencing',
      'Consider in pediatric adrenocortical carcinoma',
      'Whole-body MRI screening protocols',
    ],
    [
      'Annual whole-body MRI (Toronto protocol)',
      'Organ-specific cancer screening',
      'Avoid radiation exposure when possible',
      'Breast cancer screening starting at age 20',
      'Genetic counseling and cascade testing',
    ],
    [
      'TP53 is the most commonly mutated gene in human cancers',
      'Adrenocortical carcinoma in a child should prompt TP53 testing',
      'Two-hit model: germline + somatic mutation',
      'Avoid radiation therapy if possible (risk of radiation-induced secondary cancers)',
      'SBLA spectrum: Sarcoma, Breast, Leukemia, Adrenal',
    ],
    ['PMID: 31570560'],
  ),

  'retinoblastoma': e(
    'retinoblastoma',
    'Retinoblastoma',
    'cancer-genetics',
    'Pediatric ocular malignancy that established the two-hit hypothesis of tumor suppression.',
    'Autosomal dominant (hereditary form, ~40%); sporadic (~60%)',
    'RB1 gene on 13q14; encodes pRb tumor suppressor (cell cycle G1/S checkpoint regulator). Knudson two-hit hypothesis first described here.',
    [
      'Leukocoria (white pupillary reflex)',
      'Strabismus',
      'Unilateral (sporadic) or bilateral (hereditary)',
      'Hereditary form presents earlier (mean ~12 months vs 24 months)',
      'Increased risk of osteosarcoma and other second cancers in hereditary form',
    ],
    [
      'Fundoscopic examination under anesthesia',
      'Ocular ultrasound and MRI',
      'RB1 genetic testing',
      'Examination of siblings and offspring',
    ],
    [
      'Chemoreduction with focal consolidation',
      'Intra-arterial chemotherapy',
      'Laser therapy, cryotherapy',
      'Enucleation for advanced disease',
      'Surveillance for second cancers in hereditary cases',
    ],
    [
      'Classic example of Knudson two-hit hypothesis',
      'Leukocoria (absent red reflex) is the classic presenting sign',
      'Bilateral retinoblastoma = hereditary until proven otherwise',
      'pRb regulates G1-to-S cell cycle transition via E2F',
      'Hereditary form: increased lifelong risk of osteosarcoma',
    ],
    ['PMID: 30267086'],
  ),

  'familial-adenomatous-polyposis': e(
    'familial-adenomatous-polyposis',
    'Familial Adenomatous Polyposis (FAP)',
    'cancer-genetics',
    'Hereditary polyposis syndrome with hundreds to thousands of colorectal adenomas and near-certain CRC.',
    'Autosomal dominant',
    'APC gene on 5q21; tumor suppressor in Wnt signaling pathway. APC is the "gatekeeper" of colonic epithelium.',
    [
      'Hundreds to thousands of colorectal adenomatous polyps',
      'CRC by age 40 if untreated (nearly 100%)',
      'Duodenal adenomas and periampullary cancer',
      'Desmoid tumors',
      'CHRPE (congenital hypertrophy of retinal pigment epithelium)',
      'Gardner syndrome variant: osteomas, epidermoid cysts, desmoids',
      'Turcot syndrome variant: medulloblastoma',
    ],
    [
      'Colonoscopy showing >100 adenomatous polyps',
      'APC gene testing',
      'Annual colonoscopy from age 10-12 in at-risk families',
      'Upper endoscopy for duodenal screening',
    ],
    [
      'Prophylactic total colectomy (proctocolectomy with IPAA)',
      'Upper endoscopy surveillance every 1-3 years',
      'Celecoxib or sulindac as chemoprevention (adjunct only)',
      'Desmoid tumor management',
    ],
    [
      'APC is a "gatekeeper" tumor suppressor in Wnt/beta-catenin pathway',
      'Nearly 100% CRC risk without prophylactic colectomy',
      'Gardner syndrome = FAP + osteomas + soft tissue tumors',
      'Attenuated FAP: fewer polyps (10-100), later onset',
      'APC mutation location correlates with phenotype severity',
    ],
    ['PMID: 30419163'],
  ),

  // ── Pharmacogenomics ─────────────────────────────────────────────────────

  'cyp450-pharmacogenomics': e(
    'cyp450-pharmacogenomics',
    'CYP450 Pharmacogenomics',
    'pharmacogenomics',
    'Cytochrome P450 enzyme polymorphisms affecting drug metabolism and response.',
    'Autosomal codominant; pharmacogenomic phenotype classification',
    'CYP2D6, CYP2C19, CYP2C9, CYP3A4/5 and others. Allelic variants produce poor, intermediate, extensive (normal), and ultra-rapid metabolizer phenotypes.',
    [
      'CYP2D6: codeine (prodrug), tamoxifen, antidepressants, antipsychotics',
      'CYP2C19: clopidogrel (prodrug), PPIs, voriconazole',
      'CYP2C9: warfarin, phenytoin, NSAIDs',
      'CYP3A4/5: tacrolimus, cyclosporine, statins',
    ],
    [
      'Pharmacogenomic testing panels',
      'Genotype-to-phenotype translation',
      'CPIC guidelines for drug-gene pairs',
      'Pre-emptive vs reactive testing approaches',
    ],
    [
      'Dose adjustment based on metabolizer status',
      'Alternative drug selection for poor/ultra-rapid metabolizers',
      'CYP2D6 poor metabolizers: avoid codeine (no analgesia)',
      'CYP2D6 ultra-rapid metabolizers: avoid codeine (toxicity risk)',
      'CYP2C19 poor metabolizers: alternative to clopidogrel (reduced activation)',
    ],
    [
      'CYP2D6 is the most polymorphic CYP enzyme',
      'Codeine is a prodrug: CYP2D6 converts to morphine',
      'Poor CYP2D6 metabolizers get no benefit from codeine; ultra-rapid get toxicity',
      'CYP2C19 poor metabolizers have reduced clopidogrel activation (FDA black box)',
      'CPIC provides evidence-based dosing guidelines',
    ],
    ['PMID: 30801677', 'PMID: 32185396'],
  ),

  'hla-b5701-abacavir': e(
    'hla-b5701-abacavir',
    'HLA-B*5701 and Abacavir Hypersensitivity',
    'pharmacogenomics',
    'Pharmacogenomic test to prevent severe hypersensitivity reaction to abacavir in HIV treatment.',
    'HLA class I association',
    'HLA-B*5701 allele on chromosome 6p21.3; presence confers high risk of abacavir hypersensitivity reaction (immune-mediated, T-cell activation).',
    [
      'Abacavir hypersensitivity: fever, rash, GI symptoms, respiratory distress',
      'Occurs within first 6 weeks of treatment',
      'Potentially fatal on rechallenge',
      'Multi-organ involvement',
    ],
    [
      'HLA-B*5701 testing before starting abacavir',
      'Mandatory per guidelines (FDA label, CPIC, DHHS)',
      'Negative predictive value ~100%',
      'Positive predictive value ~50% (not all carriers react)',
    ],
    [
      'Do NOT prescribe abacavir if HLA-B*5701 positive',
      'Use alternative NRTI (tenofovir)',
      'Never rechallenge after hypersensitivity reaction',
      'Document allergy in medical record',
    ],
    [
      'Landmark example of pharmacogenomics implementation',
      'Testing is mandatory before abacavir prescription',
      'HLA-B*5701 prevalence varies: ~8% Caucasian, ~2-3% African American',
      'PREDICT-1 trial validated clinical utility',
      'Never rechallenge: can be fatal even after mild initial reaction',
    ],
    ['PMID: 18192541'],
  ),

  'warfarin-pharmacogenomics': e(
    'warfarin-pharmacogenomics',
    'Warfarin Pharmacogenomics',
    'pharmacogenomics',
    'Pharmacogenomic dosing of warfarin based on CYP2C9 and VKORC1 genotype.',
    'Autosomal codominant',
    'CYP2C9 (metabolism) and VKORC1 (drug target) variants. CYP2C9*2 and *3 reduce enzyme activity. VKORC1 -1639G>A increases warfarin sensitivity.',
    [
      'Variable dose requirements (1-15 mg/day)',
      'Bleeding complications with supratherapeutic INR',
      'Thromboembolic events with subtherapeutic INR',
      'Time to stable INR varies widely',
    ],
    [
      'CYP2C9 genotyping (*2, *3 variants)',
      'VKORC1 genotyping (-1639G>A)',
      'FDA-approved dosing algorithms available',
      'Clinical factors also important (age, weight, diet, interacting drugs)',
    ],
    [
      'Genotype-guided initial dosing (CPIC guidelines)',
      'CYP2C9 poor metabolizers: reduce dose 50-75%',
      'VKORC1 AA genotype: reduce dose ~50%',
      'More frequent INR monitoring during initiation',
      'Consider DOACs as alternative when appropriate',
    ],
    [
      'CYP2C9 and VKORC1 together explain ~40% of dose variability',
      'VKORC1 is the pharmacodynamic target; CYP2C9 is the metabolic enzyme',
      'Asian populations have higher VKORC1 A allele frequency (lower dose requirements)',
      'Clinical factors (age, BMI, drugs) explain additional ~20%',
      'Genotype-guided dosing may reduce time to stable INR',
    ],
    ['PMID: 28198005'],
  ),

  'thiopurine-tpmt': e(
    'thiopurine-tpmt',
    'TPMT/NUDT15 and Thiopurine Toxicity',
    'pharmacogenomics',
    'Pharmacogenomic testing to prevent severe myelosuppression from thiopurine drugs.',
    'Autosomal codominant',
    'TPMT (thiopurine S-methyltransferase) and NUDT15 polymorphisms. Reduced activity leads to accumulation of cytotoxic thioguanine nucleotides.',
    [
      'Severe myelosuppression (life-threatening pancytopenia)',
      'Leukopenia and neutropenia',
      'Hepatotoxicity',
      'Used in: ALL, IBD, autoimmune hepatitis, transplant',
    ],
    [
      'TPMT genotyping or enzyme activity assay',
      'NUDT15 genotyping (especially important in East Asian populations)',
      'Pre-treatment testing recommended by CPIC/FDA',
    ],
    [
      'TPMT homozygous deficient: avoid thiopurines or use 10% of dose',
      'TPMT heterozygous: reduce dose 50%',
      'NUDT15 poor metabolizers: similar dose reductions',
      'Monitor CBC closely regardless of genotype',
    ],
    [
      '~1 in 300 individuals is TPMT homozygous deficient',
      'NUDT15 variants are more common in East Asian populations',
      'Testing before treatment prevents life-threatening toxicity',
      'Both genotype and phenotype (enzyme activity) testing are available',
    ],
    ['PMID: 29498933'],
  ),

  // ── Genetic Testing ──────────────────────────────────────────────────────

  'karyotype-analysis': e(
    'karyotype-analysis',
    'Karyotype Analysis',
    'genetic-testing',
    'Cytogenetic analysis of banded metaphase chromosomes to detect numerical and large structural abnormalities.',
    'N/A (diagnostic method)',
    'Requires dividing cells (PHA-stimulated lymphocytes, amniocytes, or fibroblasts). G-banding resolves ~5-10 Mb. Detects aneuploidies, large deletions/duplications, translocations, inversions.',
    [
      'Aneuploidies (trisomy 21, 18, 13; Turner, Klinefelter)',
      'Large chromosomal deletions or duplications',
      'Balanced and unbalanced translocations',
      'Chromosomal inversions and ring chromosomes',
    ],
    [
      'Sample: peripheral blood, amniotic fluid, CVS, bone marrow',
      'Culture for 48-72 hours (blood)',
      'Arrest cells in metaphase with colchicine',
      'G-banding analysis of ~20 cells',
      'Resolution: ~5-10 Mb',
    ],
    [
      'Gold standard for aneuploidy confirmation',
      'First-line for suspected chromosomal disorders',
      'Used in prenatal diagnosis',
      'Constitutional and cancer cytogenetics',
    ],
    [
      'Resolution ~5-10 Mb (cannot detect microdeletions)',
      'Requires dividing cells (7-14 day turnaround for prenatal samples)',
      'Cannot detect balanced rearrangements at molecular level',
      'ISCN nomenclature: 47,XY,+21 (male with trisomy 21)',
      'Still gold standard for numerical abnormalities',
    ],
    ['PMID: 30445519'],
  ),

  'fish-testing': e(
    'fish-testing',
    'Fluorescence In Situ Hybridization (FISH)',
    'genetic-testing',
    'Targeted cytogenetic technique using fluorescent probes to detect specific chromosome regions.',
    'N/A (diagnostic method)',
    'Fluorescently labeled DNA probes hybridize to complementary sequences on chromosomes. Can be performed on metaphase or interphase cells.',
    [
      'Rapid aneuploidy detection (13, 18, 21, X, Y)',
      'Microdeletion syndromes (DiGeorge, Williams, Prader-Willi)',
      'Gene amplifications (HER2 in breast cancer)',
      'Specific translocations (BCR-ABL, PML-RARA)',
    ],
    [
      'Interphase FISH: no cell culture needed (rapid results)',
      'Metaphase FISH: higher resolution',
      'Probe types: centromeric, locus-specific, whole chromosome painting',
      'Results in 24-48 hours',
    ],
    [
      'Rapid prenatal aneuploidy screening',
      'Confirmation of suspected microdeletion syndromes',
      'Cancer diagnostics (specific translocations)',
      'Bone marrow transplant engraftment monitoring',
    ],
    [
      'Targeted test: can only detect what you probe for',
      'Cannot detect genome-wide imbalances (unlike microarray)',
      'Interphase FISH does not require dividing cells',
      'Break-apart probes detect translocations in cancer',
      'Much faster than karyotype (hours vs days)',
    ],
    ['PMID: 26077817'],
  ),

  'chromosomal-microarray': e(
    'chromosomal-microarray',
    'Chromosomal Microarray Analysis (CMA)',
    'genetic-testing',
    'Genome-wide detection of copy number variants at much higher resolution than karyotype.',
    'N/A (diagnostic method)',
    'Array CGH or SNP arrays detect submicroscopic deletions and duplications. Resolution ~50-100 kb. SNP arrays also detect regions of homozygosity (UPD, consanguinity).',
    [
      'Unexplained intellectual disability/developmental delay',
      'Autism spectrum disorder',
      'Multiple congenital anomalies',
      'Copy number variants of uncertain significance (VUS)',
    ],
    [
      'No cell culture required',
      'Genome-wide scan at ~50-100 kb resolution',
      'Detects CNVs not visible on karyotype',
      'SNP arrays detect absence of heterozygosity',
      'Results in 2-4 weeks',
    ],
    [
      'First-tier test for unexplained ID/ASD (ACMG recommendation)',
      'Prenatal testing for structural anomalies',
      'Cannot detect balanced rearrangements or low-level mosaicism',
      'VUS reporting requires careful genetic counseling',
    ],
    [
      'First-tier test for unexplained ID/DD and ASD per ACMG',
      'Detects pathogenic CNVs in ~15-20% of ID/DD cases',
      'Cannot detect balanced translocations or inversions',
      'SNP arrays can detect uniparental disomy',
      '~5-10% VUS rate necessitates genetic counseling',
    ],
    ['PMID: 21844811'],
  ),

  'whole-exome-sequencing': e(
    'whole-exome-sequencing',
    'Whole Exome Sequencing (WES)',
    'genetic-testing',
    'Sequencing of all protein-coding regions (~1-2% of genome), capturing ~85% of disease-causing variants.',
    'N/A (diagnostic method)',
    'Targets ~22,000 genes (~180,000 exons). Uses next-generation sequencing technology. Trio analysis (proband + parents) increases diagnostic yield.',
    [
      'Undiagnosed Mendelian disorders after standard workup',
      'Heterogeneous genetic conditions',
      'Atypical presentations of known disorders',
      'Novel gene discovery (research)',
    ],
    [
      'DNA extraction from blood or saliva',
      'Exome capture and NGS',
      'Variant filtering and interpretation',
      'ACMG variant classification (pathogenic, likely pathogenic, VUS, likely benign, benign)',
      'Results in 8-16 weeks',
    ],
    [
      'Diagnostic yield ~25-40% for undiagnosed genetic disease',
      'Trio analysis improves interpretation of de novo variants',
      'Reanalysis of negative cases may yield new diagnoses',
      'Secondary/incidental findings reporting (ACMG SF list)',
    ],
    [
      'Covers ~1-2% of genome but ~85% of known disease mutations',
      'Diagnostic yield ~25-40% (higher with trio analysis)',
      'Cannot detect: structural variants, repeat expansions, deep intronic variants',
      'ACMG recommends reporting secondary findings in ~80 genes',
      'Cost-effective compared to sequential single-gene testing',
    ],
    ['PMID: 31624994', 'PMID: 33106535'],
  ),

  'whole-genome-sequencing': e(
    'whole-genome-sequencing',
    'Whole Genome Sequencing (WGS)',
    'genetic-testing',
    'Comprehensive sequencing of the entire genome including coding and noncoding regions.',
    'N/A (diagnostic method)',
    'Sequences all ~3.2 billion base pairs. Detects SNVs, indels, structural variants, CNVs, and some repeat expansions. Requires significant bioinformatic infrastructure.',
    [
      'Comprehensive genetic diagnosis',
      'Detection of structural variants missed by WES',
      'Noncoding regulatory variants',
      'Mitochondrial genome coverage',
      'Pharmacogenomic variants',
    ],
    [
      'DNA extraction from blood',
      'Short-read or long-read NGS platforms',
      'Genome-wide variant calling',
      '~30x coverage standard for clinical use',
      'Results in 8-16 weeks (rapid WGS in days for NICU)',
    ],
    [
      'Highest yield single genetic test for undiagnosed disease',
      'Rapid WGS in NICU for critically ill neonates',
      'Detects variants missed by WES (structural, noncoding)',
      'Pharmacogenomic profiling as secondary output',
    ],
    [
      'Most comprehensive single genetic test available',
      'Rapid WGS (<48 hours) changing NICU management',
      'Detects structural variants and noncoding variants missed by WES',
      'Generates ~3-4 million variants per genome (interpretation challenge)',
      'Increasingly cost-competitive with WES',
    ],
    ['PMID: 32581362'],
  ),

  'nipt-cell-free-dna': e(
    'nipt-cell-free-dna',
    'Non-Invasive Prenatal Testing (NIPT)',
    'genetic-testing',
    'Cell-free fetal DNA screening from maternal blood for common aneuploidies.',
    'N/A (screening method)',
    'Analyzes cell-free DNA fragments in maternal plasma (~10-15% fetal origin from placental trophoblast). Detects relative chromosome representation.',
    [
      'Screening for trisomies 21, 18, 13',
      'Sex chromosome aneuploidies',
      'Fetal sex determination',
      'Select microdeletion syndromes (expanded panels)',
    ],
    [
      'Maternal blood draw from ~10 weeks gestation',
      'cfDNA extraction and sequencing or SNP-based analysis',
      'Sensitivity >99% for trisomy 21; lower for T18, T13',
      'Positive results require diagnostic confirmation',
    ],
    [
      'Screening test only: positive results need CVS or amniocentesis confirmation',
      'Cannot replace diagnostic testing',
      'Low fetal fraction (<4%) may cause test failure',
      'Confined placental mosaicism can cause false positives',
    ],
    [
      'Screening test, NOT diagnostic (positive predictive value varies)',
      'cfDNA is from placental trophoblast, not fetus directly',
      'Confined placental mosaicism causes false positives',
      'Sensitivity >99% for T21 but lower PPV in low-risk populations',
      'Available from ~10 weeks gestation',
    ],
    ['PMID: 30472770'],
  ),

  // ── Gene Therapy ─────────────────────────────────────────────────────────

  'gene-therapy-overview': e(
    'gene-therapy-overview',
    'Gene Therapy Approaches',
    'gene-therapy',
    'Strategies to treat or prevent disease by modifying gene expression, replacing defective genes, or editing DNA.',
    'N/A (therapeutic modality)',
    'Approaches include: gene replacement (AAV, lentivirus), gene editing (CRISPR-Cas9, base editing, prime editing), antisense oligonucleotides, RNA interference, and ex vivo cell-based therapy.',
    [
      'Gene replacement: voretigene neparvovec (RPE65, Luxturna) for retinal dystrophy',
      'Gene addition: onasemnogene abeparvovec (Zolgensma) for SMA',
      'Gene editing: exa-cel (exagamglogene autotemcel) for sickle cell and beta-thalassemia',
      'Antisense: nusinersen (Spinraza) for SMA',
      'CAR-T cell therapy for hematologic malignancies',
    ],
    [
      'Molecular diagnosis confirming target mutation',
      'Patient eligibility criteria (age, antibody status)',
      'Pre-existing immunity to viral vectors (AAV antibodies)',
      'Baseline organ function assessment',
    ],
    [
      'Vector-based gene delivery (AAV, lentivirus)',
      'CRISPR-based gene editing (ex vivo and in vivo)',
      'Antisense oligonucleotides (intrathecal, systemic)',
      'Immunosuppression for vector-directed immune responses',
      'Long-term follow-up for durability and safety',
    ],
    [
      'AAV vectors are the most commonly used in vivo delivery platform',
      'Pre-existing anti-AAV antibodies can preclude treatment',
      'CRISPR-Cas9 raises off-target editing concerns',
      'Exa-cel (Casgevy) is the first CRISPR-based therapy approved',
      'Gene therapy is curative in principle but long-term durability varies',
    ],
    ['PMID: 36106638', 'PMID: 37307041'],
  ),

  'aav-gene-therapy': e(
    'aav-gene-therapy',
    'Adeno-Associated Virus (AAV) Gene Therapy',
    'gene-therapy',
    'The most widely used viral vector platform for in vivo gene therapy.',
    'N/A (vector technology)',
    'AAV is a small, non-enveloped, non-pathogenic parvovirus. Various serotypes have different tissue tropisms. Packages ~4.7 kb transgene. Primarily remains episomal.',
    [
      'Retinal diseases (AAV2): voretigene neparvovec',
      'SMA (AAV9): onasemnogene abeparvovec',
      'Hemophilia B (AAV5): etranacogene dezaparvovec',
      'Duchenne MD, Fabry disease (clinical trials)',
    ],
    [
      'Anti-AAV antibody testing',
      'Liver function baseline',
      'Confirmation of target gene mutation',
      'Vector serotype selection based on target tissue',
    ],
    [
      'Single-dose intravenous or local administration',
      'Corticosteroid prophylaxis for immune response',
      'Liver enzyme monitoring post-treatment',
      'Long-term safety surveillance',
    ],
    [
      'AAV serotypes determine tissue tropism (AAV9 crosses BBB, AAV8 liver-tropic)',
      'Limited packaging capacity (~4.7 kb) restricts target genes',
      'Primarily episomal (does not integrate into genome)',
      'Pre-existing antibodies can neutralize vector (screen before treatment)',
      'Redosing challenging due to anti-capsid immunity',
    ],
    ['PMID: 31845998'],
  ),

  'crispr-gene-editing': e(
    'crispr-gene-editing',
    'CRISPR-Cas9 Gene Editing',
    'gene-therapy',
    'Revolutionary gene editing technology enabling precise DNA modifications for therapeutic applications.',
    'N/A (editing technology)',
    'CRISPR-Cas9 uses guide RNA to direct Cas9 nuclease to target DNA sequence. Creates double-strand breaks repaired by NHEJ (disruption) or HDR (precise correction). Base editors and prime editors enable precise changes without DSBs.',
    [
      'Exa-cel (Casgevy): sickle cell disease and beta-thalassemia',
      'Ex vivo editing of HSCs for hemoglobinopathies',
      'In vivo editing for transthyretin amyloidosis (NTLA-2001)',
      'Research: hereditary blindness, HIV cure strategies',
    ],
    [
      'Molecular confirmation of target variant',
      'Off-target analysis using computational prediction and experimental validation',
      'Guide RNA design and optimization',
      'Delivery method selection (viral, lipid nanoparticle, RNP)',
    ],
    [
      'Ex vivo: edit cells outside body, then infuse (e.g., HSCs)',
      'In vivo: deliver editing components directly to target tissue',
      'Base editing: precise single-nucleotide changes without DSBs',
      'Prime editing: search-and-replace editing without DSBs',
    ],
    [
      'Exa-cel (Casgevy) is the first approved CRISPR therapy (2023)',
      'Off-target editing is the primary safety concern',
      'Base editors and prime editors reduce off-target risk',
      'CRISPR can disrupt, correct, or insert genes',
      'Lipid nanoparticle delivery enables in vivo editing without viral vectors',
    ],
    ['PMID: 36823310', 'PMID: 34381216'],
  ),

  // ── Population Genetics ──────────────────────────────────────────────────

  'hardy-weinberg-equilibrium': e(
    'hardy-weinberg-equilibrium',
    'Hardy-Weinberg Equilibrium',
    'population-genetics',
    'Mathematical model describing allele and genotype frequencies in an idealized non-evolving population.',
    'N/A (population genetics principle)',
    'p^2 + 2pq + q^2 = 1 (genotype frequencies); p + q = 1 (allele frequencies). Assumes: large population, random mating, no selection, no mutation, no migration.',
    [
      'Calculating carrier frequencies for AR disorders',
      'Estimating disease incidence from allele frequencies',
      'Detecting deviations indicating selection or population structure',
      'Forensic genetics and paternity testing',
    ],
    [
      'Allele frequency estimation from population data',
      'Chi-square goodness-of-fit test for HWE',
      'Deviation suggests selection, assortative mating, or population stratification',
    ],
    [
      'Clinical application: if AR disease frequency = q^2, carrier frequency = 2pq',
      'Example: CF incidence ~1/2500 (q^2), so q=1/50, carrier freq 2pq ~ 1/25',
      'Used in genetic counseling for risk calculations',
    ],
    [
      'p^2 + 2pq + q^2 = 1 for genotype frequencies',
      'CF example: disease freq 1/2500 -> carrier freq ~1/25',
      'Sickle cell: heterozygote advantage violates assumption of no selection',
      'Five assumptions: large population, random mating, no selection, no mutation, no migration',
      'Deviation from HWE suggests evolutionary forces at work',
    ],
    ['PMID: 28493069'],
  ),

  'founder-effect': e(
    'founder-effect',
    'Founder Effect and Genetic Drift',
    'population-genetics',
    'Genetic phenomena in which a small founding population causes different allele frequencies from the source population.',
    'N/A (population genetics concept)',
    'A small group establishes a new population, carrying only a subset of genetic variation. Random drift in small populations can fix rare alleles. Explains high frequency of certain diseases in isolated populations.',
    [
      'Ashkenazi Jewish population: Tay-Sachs, Gaucher, BRCA founder mutations',
      'Finnish disease heritage: >30 rare diseases at elevated frequency',
      'Amish: Ellis-van Creveld syndrome, maple syrup urine disease',
      'French Canadian: tyrosinemia type I',
      'Afrikaner: familial hypercholesterolemia, porphyria variegata',
    ],
    [
      'Population-specific carrier screening panels',
      'Genealogical analysis',
      'Haplotype analysis around founder mutations',
      'Expanded carrier screening in at-risk populations',
    ],
    [
      'Population-specific screening programs',
      'Targeted carrier testing for founder mutations',
      'Genetic counseling considering ethnic background',
      'Prenatal and preimplantation diagnosis',
    ],
    [
      'Founder mutations are identical by descent (shared haplotype)',
      'Tay-Sachs carrier frequency ~1/30 in Ashkenazi Jewish population (vs 1/300 general)',
      'Genetic drift is stronger in small populations',
      'Bottleneck effect is a type of genetic drift',
      'Explains why some rare diseases are common in specific populations',
    ],
    ['PMID: 28127892'],
  ),

  'consanguinity-genetics': e(
    'consanguinity-genetics',
    'Consanguinity and Inbreeding',
    'population-genetics',
    'Mating between related individuals increases homozygosity and risk of autosomal recessive disorders.',
    'N/A (population genetics concept)',
    'Coefficient of inbreeding (F) = probability that two alleles at a locus are identical by descent. First cousins: F=1/16. Increases homozygosity for rare recessive alleles.',
    [
      'Increased incidence of autosomal recessive disorders',
      'Elevated infant mortality',
      'Congenital anomalies',
      'Reduced fertility in some cases',
    ],
    [
      'Detailed pedigree analysis for consanguinity loops',
      'Coefficient of inbreeding calculation',
      'SNP array for regions of homozygosity (ROH)',
      'WES/WGS for homozygosity mapping in consanguineous families',
    ],
    [
      'Genetic counseling regarding recurrence risks',
      'Expanded carrier screening for consanguineous couples',
      'Homozygosity mapping to identify causative gene',
      'Prenatal diagnosis for identified conditions',
    ],
    [
      'First cousin marriage: F=1/16, offspring risk of AR disease ~6% (vs 3% baseline)',
      'Common in Middle East, South Asia, North Africa (~20-50% of marriages)',
      'Regions of homozygosity on SNP array suggest consanguinity',
      'Homozygosity mapping is powerful for gene discovery in consanguineous families',
      'Genetic counseling must be culturally sensitive',
    ],
    ['PMID: 31327746'],
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Search genetics entries by query string across all text fields. */
export function searchGeneticsEntries(query: string): GeneticsEntry[] {
  const lq = query.toLowerCase();
  return Object.values(GENETICS_ENTRIES).filter((entry) => {
    const searchable = [
      entry.name,
      entry.description,
      entry.inheritance,
      entry.geneticBasis,
      ...entry.clinicalPresentation,
      ...entry.diagnosticApproach,
      ...entry.management,
      ...entry.keyPearls,
    ]
      .join(' ')
      .toLowerCase();
    return searchable.includes(lq);
  });
}

/** Filter genetics entries by one or more categories. */
export function filterByCategory(categories: GeneticsCategory[]): GeneticsEntry[] {
  const set = new Set(categories);
  return Object.values(GENETICS_ENTRIES).filter((entry) => set.has(entry.category));
}

/** Retrieve a single entry by its ID, or undefined if not found. */
export function getEntryById(id: string): GeneticsEntry | undefined {
  return GENETICS_ENTRIES[id];
}
