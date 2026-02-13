/**
 * Genetic Conditions Database
 *
 * Comprehensive reference of 30+ genetic conditions with
 * clinical summaries, inheritance patterns, and management guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GeneticConditionCategory =
  | 'chromosomal'
  | 'autosomal-dominant'
  | 'autosomal-recessive'
  | 'x-linked'
  | 'trinucleotide-repeat'
  | 'hereditary-cancer'
  | 'lysosomal-storage'
  | 'metabolic';

export interface GeneticConditionEntry {
  id: string;
  name: string;
  nameEs?: string;
  category: GeneticConditionCategory;
  inheritance: string;
  geneOrChromosome: string;
  description: string;
  clinicalFeatures: string[];
  diagnosis: string[];
  management: string;
  prognosis: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function gc(
  id: string, name: string, nameEs: string, category: GeneticConditionCategory,
  inheritance: string, geneOrChromosome: string, description: string,
  clinicalFeatures: string[], diagnosis: string[],
  management: string, prognosis: string, icdCode: string,
): GeneticConditionEntry {
  return {
    id, name, nameEs, category, inheritance, geneOrChromosome, description,
    clinicalFeatures, diagnosis, management, prognosis, icdCode,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const GENETIC_CONDITION_ENTRIES: Record<string, GeneticConditionEntry> = {

  // ---- Chromosomal (4) ----------------------------------------------------

  'down-syndrome': gc(
    'down-syndrome', 'Down Syndrome (Trisomy 21)', 'Síndrome de Down (Trisomía 21)', 'chromosomal',
    'Sporadic (trisomy 21); ~4% translocation (may be inherited); ~1% mosaic',
    'Chromosome 21 — full or partial trisomy',
    'Most common chromosomal aneuploidy causing intellectual disability. Incidence ~1 in 700 live births, risk increases with maternal age.',
    ['Characteristic facial features (upslanting palpebral fissures, epicanthal folds, flat nasal bridge)', 'Hypotonia in infancy', 'Intellectual disability (mild to moderate)', 'Congenital heart defects (~50%, especially AVSD)', 'Duodenal atresia', 'Hypothyroidism', 'Increased risk of ALL in childhood', 'Early-onset Alzheimer disease'],
    ['Prenatal screening (first-trimester combined, cell-free fetal DNA)', 'Prenatal diagnostic (amniocentesis or CVS)', 'Postnatal karyotype or chromosomal microarray', 'Echocardiography at birth', 'Thyroid function tests'],
    'Early intervention programs (PT, OT, speech). Surgical correction of congenital heart defects. Thyroid monitoring annually. Screening for atlantoaxial instability, celiac disease, hearing loss, and vision problems. Supportive education and vocational training.',
    'Life expectancy ~60 years with modern care. Quality of life greatly improved by early intervention, cardiac surgery, and inclusive education. Adults can live semi-independently with appropriate support.',
    'Q90',
  ),

  'turner-syndrome': gc(
    'turner-syndrome', 'Turner Syndrome (45,X)', 'Síndrome de Turner (45,X)', 'chromosomal',
    'Sporadic; 45,X monosomy or mosaic variants',
    'X chromosome — complete or partial monosomy',
    'Affects ~1 in 2,500 live-born females. Only viable human monosomy. Highly variable phenotype depending on karyotype.',
    ['Short stature (nearly universal)', 'Gonadal dysgenesis with streak ovaries and primary amenorrhea', 'Webbed neck and low posterior hairline', 'Shield chest with widely spaced nipples', 'Congenital heart defects (bicuspid aortic valve ~30%, coarctation ~10%)', 'Lymphedema of hands/feet in neonates', 'Normal intelligence but may have visuospatial learning difficulties', 'Renal anomalies (horseshoe kidney)'],
    ['Karyotype (gold standard)', 'Prenatal: increased nuchal translucency, cystic hygroma on ultrasound', 'FSH/LH (elevated indicating gonadal failure)', 'Echocardiography and renal ultrasound', 'Growth hormone stimulation testing'],
    'Growth hormone therapy to improve adult height (start early). Estrogen replacement at age ~12 to induce puberty, then cyclic estrogen-progesterone. Cardiac surveillance (aortic root monitoring). Address fertility (donor oocytes/IVF possible). Screen for hypothyroidism, diabetes, osteoporosis, hearing loss.',
    'Near-normal life expectancy with appropriate cardiac surveillance. Fertility generally requires assisted reproduction. Psychosocial support important throughout life.',
    'Q96',
  ),

  'klinefelter-syndrome': gc(
    'klinefelter-syndrome', 'Klinefelter Syndrome (47,XXY)', 'Síndrome de Klinefelter (47,XXY)', 'chromosomal',
    'Sporadic; 47,XXY (80%) or mosaic/variant karyotypes',
    'Extra X chromosome — 47,XXY most common',
    'Most common sex chromosome aneuploidy in males (~1 in 600). Often underdiagnosed; many identified during infertility workup.',
    ['Tall stature with long limbs (eunuchoid habitus)', 'Small firm testes and infertility (azoospermia)', 'Gynecomastia', 'Sparse facial and body hair', 'Learning disabilities (especially language-based)', 'Increased risk of metabolic syndrome and type 2 diabetes', 'Osteoporosis due to low testosterone', 'Slightly increased breast cancer risk'],
    ['Karyotype (diagnostic)', 'Hormonal panel (low testosterone, elevated FSH/LH)', 'Semen analysis (azoospermia or severe oligospermia)', 'DEXA scan for bone density', 'Metabolic screening'],
    'Testosterone replacement therapy starting at puberty (improves virilization, bone density, energy, mood). Speech and language therapy if needed. Fertility options: micro-TESE with ICSI in some patients. Screen for metabolic syndrome, osteoporosis, and breast cancer. Psychosocial support.',
    'Normal life expectancy with testosterone replacement. Many men lead productive lives; diagnosis is often made late. Early testosterone therapy optimizes outcomes.',
    'Q98.0',
  ),

  'patau-syndrome': gc(
    'patau-syndrome', 'Patau Syndrome (Trisomy 13)', 'Síndrome de Patau (Trisomía 13)', 'chromosomal',
    'Sporadic trisomy; ~20% translocation',
    'Chromosome 13 — full or partial trisomy',
    'Severe chromosomal disorder occurring in ~1 in 10,000 live births. Associated with advanced maternal age.',
    ['Holoprosencephaly and severe intellectual disability', 'Microcephaly', 'Cleft lip/palate (bilateral)', 'Polydactyly', 'Congenital heart defects (~80%)', 'Microphthalmos or anophthalmos', 'Renal anomalies', 'Cutis aplasia of the scalp'],
    ['Prenatal screening (cell-free DNA, first-trimester combined)', 'Prenatal ultrasound findings', 'Karyotype or chromosomal microarray', 'Echocardiography', 'Brain imaging'],
    'Supportive and palliative care. Goals of care discussion with family. Surgical correction of specific defects considered case-by-case. Comfort measures and family support.',
    'Median survival ~7-10 days; ~10% survive to 1 year. Survivors have profound developmental disabilities. Palliative approach is standard; some families pursue surgical interventions.',
    'Q91',
  ),

  // ---- Autosomal Dominant (7) ---------------------------------------------

  'marfan-syndrome': gc(
    'marfan-syndrome', 'Marfan Syndrome', 'Síndrome de Marfan', 'autosomal-dominant',
    'Autosomal dominant; ~25% de novo mutations',
    'FBN1 gene (15q21.1) — encodes fibrillin-1',
    'Connective tissue disorder affecting skeletal, ocular, and cardiovascular systems. Prevalence ~1 in 5,000.',
    ['Tall stature with disproportionately long limbs and digits (arachnodactyly)', 'Pectus excavatum or carinatum', 'Scoliosis', 'Ectopia lentis (lens subluxation, usually superotemporal)', 'Aortic root dilation and risk of dissection', 'Mitral valve prolapse', 'Dural ectasia', 'Spontaneous pneumothorax'],
    ['Revised Ghent nosology (clinical criteria + family history)', 'FBN1 genetic testing', 'Echocardiography (aortic root measurement)', 'Ophthalmologic slit-lamp exam', 'Skeletal survey'],
    'Beta-blocker or ARB (losartan) to slow aortic root dilation. Prophylactic aortic root surgery when diameter reaches threshold (~5.0 cm). Annual echocardiography. Ophthalmologic monitoring. Avoid contact sports, isometric exercise, and stimulants.',
    'Life expectancy near-normal with proper surveillance and timely aortic surgery (previously median age 40 without treatment). Leading cause of death is aortic dissection/rupture if untreated.',
    'Q87.4',
  ),

  'ehlers-danlos-syndrome': gc(
    'ehlers-danlos-syndrome', 'Ehlers-Danlos Syndrome', 'Síndrome de Ehlers-Danlos', 'autosomal-dominant',
    'Most types autosomal dominant (hEDS, classical, vascular); some AR',
    'Multiple genes (COL5A1/2 classical; COL3A1 vascular; unknown for hEDS)',
    'Group of heritable connective tissue disorders characterized by joint hypermobility, skin hyperextensibility, and tissue fragility. 13 subtypes recognized.',
    ['Joint hypermobility and recurrent dislocations/subluxations', 'Skin hyperextensibility and easy bruising', 'Atrophic scarring', 'Chronic musculoskeletal pain', 'Vascular EDS: arterial/organ rupture risk', 'Fatigue', 'Dysautonomia (POTS common in hEDS)', 'GI dysmotility'],
    ['Clinical criteria (2017 International Classification)', 'Beighton hypermobility score', 'Genetic testing (all subtypes except hEDS)', 'Skin biopsy with electron microscopy (some types)', 'Echocardiography', 'Vascular imaging for vascular EDS'],
    'Physical therapy (joint stabilization, proprioception). Pain management (avoid NSAIDs in vascular EDS). Bracing and orthotics. Avoid contact sports. Vascular EDS: vascular surveillance, avoid arteriography if possible, celiprolol may reduce vascular events. Genetic counseling.',
    'Variable by subtype. Hypermobile EDS: normal lifespan but chronic pain and disability. Vascular EDS: median survival ~50 years due to arterial/organ rupture. Classical EDS: normal lifespan with skin and joint management.',
    'Q79.6',
  ),

  'neurofibromatosis-1': gc(
    'neurofibromatosis-1', 'Neurofibromatosis Type 1 (NF1)', 'Neurofibromatosis Tipo 1 (NF1)', 'autosomal-dominant',
    'Autosomal dominant; ~50% de novo mutations',
    'NF1 gene (17q11.2) — encodes neurofibromin (tumor suppressor)',
    'Most common neurocutaneous disorder (~1 in 3,000). Progressive condition with highly variable expressivity.',
    ['Cafe-au-lait macules (>=6, >5mm prepubertal / >15mm postpubertal)', 'Neurofibromas (cutaneous, subcutaneous, plexiform)', 'Axillary/inguinal freckling (Crowe sign)', 'Lisch nodules (iris hamartomas)', 'Optic pathway glioma', 'Skeletal dysplasia (tibial bowing, sphenoid wing dysplasia)', 'Learning disabilities (~60%)', 'Increased cancer risk (MPNST, pheochromocytoma)'],
    ['NIH clinical diagnostic criteria (>=2 of 7 features)', 'NF1 genetic testing (confirmatory)', 'Annual ophthalmologic exam (children)', 'MRI brain/orbits if symptomatic', 'Blood pressure monitoring (renal artery stenosis/pheochromocytoma)'],
    'Annual comprehensive clinical exam. MRI surveillance for plexiform neurofibromas. Selumetinib (MEK inhibitor) for symptomatic inoperable plexiform neurofibromas. Surgical excision of problematic neurofibromas. Learning support. Screen for hypertension. Genetic counseling.',
    'Life expectancy reduced by ~10-15 years on average. Most individuals lead productive lives. Major risks: malignant peripheral nerve sheath tumor (8-13% lifetime risk), optic glioma, vasculopathy.',
    'Q85.0',
  ),

  'neurofibromatosis-2': gc(
    'neurofibromatosis-2', 'Neurofibromatosis Type 2 (NF2)', 'Neurofibromatosis Tipo 2 (NF2)', 'autosomal-dominant',
    'Autosomal dominant; ~50% de novo mutations',
    'NF2 gene (22q12.2) — encodes merlin/schwannomin (tumor suppressor)',
    'Characterized by bilateral vestibular schwannomas. Much rarer than NF1 (~1 in 25,000).',
    ['Bilateral vestibular schwannomas (hallmark)', 'Progressive sensorineural hearing loss', 'Tinnitus and balance problems', 'Other cranial nerve schwannomas', 'Meningiomas (intracranial, spinal)', 'Spinal ependymomas', 'Juvenile posterior subcapsular cataracts', 'Peripheral neuropathy'],
    ['MRI brain with gadolinium (bilateral vestibular schwannomas)', 'Audiometry', 'NF2 genetic testing', 'Spinal MRI', 'Ophthalmologic exam'],
    'Multidisciplinary skull base team. Observation with serial MRI for stable tumors. Microsurgery or stereotactic radiosurgery for growing schwannomas. Hearing rehabilitation (cochlear implant, auditory brainstem implant). Bevacizumab for progressive tumors. Genetic counseling.',
    'Variable; bilateral deafness is common. Life expectancy depends on tumor burden and complications. Average age of death ~36 years in severe cases, but many survive much longer with modern management.',
    'Q85.0',
  ),

  'tuberous-sclerosis': gc(
    'tuberous-sclerosis', 'Tuberous Sclerosis Complex (TSC)', 'Complejo de Esclerosis Tuberosa (CET)', 'autosomal-dominant',
    'Autosomal dominant; ~2/3 de novo mutations',
    'TSC1 (9q34, hamartin) or TSC2 (16p13.3, tuberin) — mTOR pathway regulators',
    'Multi-system disorder characterized by hamartomas in brain, skin, kidneys, heart, and lungs. Prevalence ~1 in 6,000.',
    ['Cortical tubers and subependymal nodules (seizures in ~85%)', 'Subependymal giant cell astrocytomas (SEGA)', 'Hypomelanotic macules (ash-leaf spots)', 'Facial angiofibromas', 'Shagreen patches', 'Renal angiomyolipomas', 'Cardiac rhabdomyomas (often regress)', 'Lymphangioleiomyomatosis (LAM) in adult women', 'Intellectual disability (~50%)'],
    ['Clinical diagnostic criteria (major and minor features)', 'TSC1/TSC2 genetic testing', 'MRI brain (tubers, SEGA, SEN)', 'Renal ultrasound or MRI', 'Echocardiography (infants)', 'Dermatologic exam with Wood lamp'],
    'mTOR inhibitors (everolimus) for SEGA, renal angiomyolipomas, and LAM. Antiepileptic therapy (vigabatrin first-line for infantile spasms in TSC). Surgical resection of epileptogenic tubers if refractory. Embolization or surgery for large angiomyolipomas. Surveillance protocol with regular MRI and renal imaging.',
    'Variable: some individuals mildly affected; others have refractory epilepsy and severe disability. Life expectancy improving with mTOR inhibitor therapy. Leading causes of death: SEGA complications, renal disease, LAM, status epilepticus.',
    'Q85.1',
  ),

  'familial-hypercholesterolemia': gc(
    'familial-hypercholesterolemia', 'Familial Hypercholesterolemia (FH)', 'Hipercolesterolemia Familiar (HF)', 'autosomal-dominant',
    'Autosomal dominant (codominant); heterozygous ~1 in 250; homozygous ~1 in 300,000',
    'LDLR (most common), APOB, or PCSK9 genes',
    'Most common monogenic disorder causing premature atherosclerotic cardiovascular disease. Severely underdiagnosed globally.',
    ['Markedly elevated LDL cholesterol (hetero: 190-400 mg/dL; homo: >500 mg/dL)', 'Premature coronary artery disease', 'Tendon xanthomas (Achilles, hand extensors)', 'Corneal arcus in young adults', 'Xanthelasma', 'Aortic stenosis (homozygous FH)'],
    ['Dutch Lipid Clinic Network criteria or Simon Broome criteria', 'Fasting lipid panel (LDL markedly elevated)', 'Genetic testing (LDLR, APOB, PCSK9)', 'Cascade screening of first-degree relatives', 'Coronary calcium score or CT angiography'],
    'High-intensity statin therapy (start in childhood for heterozygous FH). Add ezetimibe if not at goal. PCSK9 inhibitors (evolocumab, alirocumab) for refractory cases. Homozygous FH: lomitapide, evinacumab, LDL apheresis. Lifestyle modifications adjunctive. Cascade family screening essential.',
    'Untreated heterozygous FH: 50% of men have MI by age 50, 30% of women by age 60. Statin therapy dramatically reduces risk. Homozygous FH: coronary disease in childhood without aggressive treatment.',
    'E78.0',
  ),

  'huntington-disease': gc(
    'huntington-disease', 'Huntington Disease', 'Enfermedad de Huntington', 'trinucleotide-repeat',
    'Autosomal dominant with complete penetrance (>=40 CAG repeats)',
    'HTT gene (4p16.3) — CAG trinucleotide repeat expansion',
    'Progressive neurodegenerative disorder characterized by chorea, cognitive decline, and psychiatric symptoms. Onset typically age 30-50.',
    ['Chorea (involuntary dance-like movements)', 'Progressive motor dysfunction (dystonia, bradykinesia later)', 'Cognitive decline progressing to dementia', 'Psychiatric symptoms (depression, irritability, apathy, psychosis)', 'Weight loss', 'Dysarthria and dysphagia', 'Juvenile HD (<20 years): rigidity predominant, seizures'],
    ['Genetic testing (CAG repeat length in HTT gene)', 'Normal: <27 repeats; intermediate: 27-35; reduced penetrance: 36-39; full penetrance: >=40', 'Clinical diagnosis: motor signs + family history', 'MRI brain (caudate atrophy)', 'Predictive testing available for at-risk individuals (requires genetic counseling)'],
    'No disease-modifying therapy. Symptomatic: tetrabenazine or deutetrabenazine for chorea. Antidepressants/antipsychotics for psychiatric symptoms. Speech and swallowing therapy. Physical therapy. Nutritional support (high-calorie diet). Advance care planning. Genetic counseling for family.',
    'Relentlessly progressive. Mean survival ~15-20 years from motor onset. Death usually from aspiration pneumonia, falls, or suicide. Anticipation (earlier onset with paternal transmission due to CAG expansion).',
    'G10',
  ),

  // ---- Autosomal Recessive (8) --------------------------------------------

  'cystic-fibrosis': gc(
    'cystic-fibrosis', 'Cystic Fibrosis', 'Fibrosis Quística', 'autosomal-recessive',
    'Autosomal recessive; carrier frequency ~1 in 25 (Caucasian)',
    'CFTR gene (7q31.2) — encodes chloride channel; F508del most common mutation',
    'Most common life-shortening autosomal recessive disorder in Caucasians. Affects lungs, pancreas, GI tract, reproductive system.',
    ['Chronic progressive lung disease (thick mucus, recurrent infections, bronchiectasis)', 'Pancreatic insufficiency (malabsorption, steatorrhea, FTT)', 'Meconium ileus in neonates', 'Salty-tasting skin', 'Nasal polyps and chronic sinusitis', 'CF-related diabetes', 'Male infertility (CBAVD)', 'Distal intestinal obstruction syndrome (DIOS)', 'Biliary cirrhosis'],
    ['Newborn screening (immunoreactive trypsinogen)', 'Sweat chloride test (>=60 mmol/L diagnostic)', 'CFTR genetic testing (identifies mutations)', 'Pulmonary function tests (FEV1 monitoring)', 'Sputum cultures', 'Fecal elastase (pancreatic function)'],
    'CFTR modulators revolutionizing care: elexacaftor/tezacaftor/ivacaftor (Trikafta) for >=1 F508del allele (~90% of patients). Airway clearance (chest physiotherapy, oscillatory devices). Inhaled mucolytics (dornase alfa, hypertonic saline). Inhaled antibiotics (tobramycin). Pancreatic enzyme replacement. Fat-soluble vitamin supplementation. Lung transplantation for end-stage disease.',
    'Median predicted survival now >50 years with CFTR modulator therapy (previously ~30 years). Quality of life dramatically improved. Lung disease remains leading cause of mortality.',
    'E84',
  ),

  'sickle-cell-disease': gc(
    'sickle-cell-disease', 'Sickle Cell Disease', 'Enfermedad de Células Falciformes', 'autosomal-recessive',
    'Autosomal recessive; carrier state (sickle cell trait) confers malaria resistance',
    'HBB gene (11p15.4) — Glu6Val substitution produces hemoglobin S',
    'Most common inherited hemoglobinopathy worldwide. Predominantly affects individuals of African, Mediterranean, Middle Eastern, and Indian descent.',
    ['Vaso-occlusive pain crises (bone, chest, abdomen)', 'Chronic hemolytic anemia', 'Acute chest syndrome (life-threatening)', 'Splenic sequestration and functional asplenia', 'Stroke (especially in children)', 'Avascular necrosis of femoral/humeral head', 'Priapism', 'Leg ulcers', 'Chronic organ damage (kidney, retina, pulmonary hypertension)'],
    ['Newborn screening (hemoglobin electrophoresis)', 'CBC with reticulocyte count', 'Peripheral smear (sickled cells, Howell-Jolly bodies)', 'Hemoglobin electrophoresis or HPLC', 'HBB genetic testing', 'Transcranial Doppler (stroke risk screening in children)'],
    'Hydroxyurea (increases fetal hemoglobin, reduces crises). Voxelotor (HbS polymerization inhibitor). Crizanlizumab (anti-P-selectin, reduces VOC). L-glutamine. Gene therapy (emerging, potentially curative). Chronic transfusion program for stroke prevention. Hematopoietic stem cell transplant (curative). Pain management for crises. Penicillin prophylaxis and vaccination (functional asplenia).',
    'Median survival ~45-55 years in high-income countries. Gene therapy and stem cell transplant offer cure. Hydroxyurea significantly reduces complications. Acute chest syndrome and stroke are leading causes of death.',
    'D57',
  ),

  'phenylketonuria': gc(
    'phenylketonuria', 'Phenylketonuria (PKU)', 'Fenilcetonuria (PKU)', 'metabolic',
    'Autosomal recessive',
    'PAH gene (12q23.2) — encodes phenylalanine hydroxylase',
    'Inborn error of amino acid metabolism. Without treatment causes severe intellectual disability. Model for newborn screening success.',
    ['Untreated: profound intellectual disability, seizures, musty body odor, fair skin/hair/eyes, eczematous rash', 'Treated: normal development if diet started early', 'Maternal PKU: teratogenic effects of elevated Phe on fetus (microcephaly, CHD, FGR) if mother not on diet during pregnancy'],
    ['Newborn screening (elevated phenylalanine on blood spot)', 'Plasma phenylalanine level (>360 umol/L or >6 mg/dL)', 'PAH genotyping', 'BH4 loading test (identifies BH4-responsive patients)', 'Neurocognitive testing'],
    'Phenylalanine-restricted diet (lifelong). Medical formula providing protein without Phe. Sapropterin (BH4 cofactor) for responsive genotypes (~25-50%). Pegvaliase (enzyme substitution) for adults with uncontrolled Phe. Regular Phe level monitoring. Strict dietary control before and during pregnancy (maternal PKU).',
    'Normal intelligence and lifespan with early and continuous dietary treatment. Late-treated or untreated individuals have irreversible intellectual disability. Dietary relaxation in adulthood leads to executive function problems.',
    'E70.0',
  ),

  'tay-sachs-disease': gc(
    'tay-sachs-disease', 'Tay-Sachs Disease', 'Enfermedad de Tay-Sachs', 'lysosomal-storage',
    'Autosomal recessive; carrier screening especially in Ashkenazi Jewish, French-Canadian, Cajun populations',
    'HEXA gene (15q23) — encodes hexosaminidase A alpha subunit',
    'GM2 gangliosidosis caused by hexosaminidase A deficiency. Ganglioside accumulation in neurons causes progressive neurodegeneration.',
    ['Infantile form (most severe): normal at birth, developmental regression at 3-6 months', 'Progressive weakness, hypotonia then spasticity', 'Cherry-red spot on macula (pathognomonic)', 'Exaggerated startle response to sound', 'Seizures', 'Blindness and deafness', 'Macrocephaly', 'Late-onset forms: ataxia, psychiatric symptoms, motor neuron disease-like presentation'],
    ['Hexosaminidase A enzyme assay (deficient)', 'HEXA genetic testing', 'Carrier screening in at-risk populations', 'Fundoscopy (cherry-red spot)', 'MRI brain (cerebral atrophy)'],
    'No disease-modifying therapy for infantile form. Supportive/palliative care: seizure management, nutrition support, respiratory care. Genetic counseling and carrier screening. Substrate reduction therapy and gene therapy under investigation.',
    'Infantile: death by age 3-5 years. Late-onset juvenile/adult forms have slower progression. Carrier screening programs have dramatically reduced incidence in Ashkenazi Jewish population.',
    'E75.0',
  ),

  'gaucher-disease': gc(
    'gaucher-disease', 'Gaucher Disease', 'Enfermedad de Gaucher', 'lysosomal-storage',
    'Autosomal recessive; most common lysosomal storage disorder; carrier frequency ~1 in 15 (Ashkenazi Jewish)',
    'GBA1 gene (1q22) — encodes glucocerebrosidase',
    'Glucocerebroside accumulates in macrophages ("Gaucher cells"). Three types: Type 1 (non-neuronopathic, most common), Type 2 (acute neuronopathic), Type 3 (subacute neuronopathic).',
    ['Type 1: hepatosplenomegaly, anemia, thrombocytopenia, bone disease (Erlenmeyer flask deformity, avascular necrosis, fractures)', 'Type 2: rapid neurodegeneration in infancy, bulbar signs, death by age 2', 'Type 3: slower neurologic decline with systemic features', 'Increased risk of Parkinson disease (GBA1 variants)', 'Bone crises', 'Easy bruising/bleeding'],
    ['Glucocerebrosidase enzyme assay (deficient)', 'GBA1 genetic testing', 'CBC (cytopenias)', 'Liver/spleen volumetry (MRI or ultrasound)', 'Skeletal survey or MRI for bone involvement', 'Biomarkers: chitotriosidase, CCL18, glucosylsphingosine'],
    'Enzyme replacement therapy (ERT): imiglucerase, velaglucerase alfa, taliglucerase alfa. Substrate reduction therapy (SRT): eliglustat, miglustat. ERT does not cross BBB (ineffective for neurologic disease). Bone monitoring and bisphosphonates if osteopenia. Splenectomy avoided if possible. Genetic counseling.',
    'Type 1: normal lifespan with ERT, good quality of life. Type 2: fatal in infancy. Type 3: variable neurologic progression despite systemic improvement with ERT.',
    'E75.2',
  ),

  'fabry-disease': gc(
    'fabry-disease', 'Fabry Disease', 'Enfermedad de Fabry', 'lysosomal-storage',
    'X-linked; males severely affected; heterozygous females variably affected',
    'GLA gene (Xq22.1) — encodes alpha-galactosidase A',
    'Globotriaosylceramide (Gb3) accumulates in vascular endothelium, podocytes, and cardiomyocytes. Prevalence ~1 in 40,000.',
    ['Acroparesthesias (burning pain in hands/feet, onset childhood)', 'Angiokeratomas (dark red papules, bathing suit distribution)', 'Hypohidrosis (heat intolerance)', 'Cornea verticillata', 'Progressive renal failure', 'Hypertrophic cardiomyopathy', 'Early stroke', 'GI symptoms (abdominal pain, diarrhea)'],
    ['Alpha-galactosidase A enzyme assay (males)', 'GLA genetic testing (essential for females)', 'Plasma/urine Gb3 and lyso-Gb3', 'Renal biopsy (zebra bodies on EM)', 'Echocardiography and cardiac MRI', 'Renal function monitoring'],
    'Enzyme replacement therapy: agalsidase alfa or agalsidase beta. Oral chaperone therapy: migalastat (for amenable GLA mutations). Renal protective measures (ACE inhibitor/ARB). Cardiac management. Stroke prevention. Pain management (carbamazepine, gabapentin). Renal transplant for ESRD. Genetic counseling.',
    'Untreated males: median survival ~50 years. ERT and chaperone therapy improve outcomes and slow organ damage if started early. Females have variable disease severity.',
    'E75.2',
  ),

  'alpha-1-antitrypsin-deficiency': gc(
    'alpha-1-antitrypsin-deficiency', 'Alpha-1 Antitrypsin Deficiency', 'Deficiencia de Alfa-1 Antitripsina', 'autosomal-recessive',
    'Autosomal codominant; ZZ genotype most severe; ~1 in 2,500 (Northern European)',
    'SERPINA1 gene (14q32.13) — Z allele (Glu342Lys) most common deficient variant',
    'Protease-antiprotease imbalance leads to emphysema. Misfolded Z-protein polymerizes in hepatocytes causing liver disease.',
    ['Early-onset panacinar emphysema (lower lobes)', 'COPD in non-smokers or early-onset (<45 years)', 'Neonatal hepatitis/cholestasis', 'Cirrhosis (childhood or adult)', 'Hepatocellular carcinoma', 'Panniculitis (rare)', 'Granulomatosis with polyangiitis (c-ANCA positive, rare association)'],
    ['Serum alpha-1 antitrypsin level (low)', 'AAT phenotyping by isoelectric focusing or genotyping (Pi*ZZ)', 'PFTs (obstructive pattern with low DLCO)', 'CT chest (basilar emphysema)', 'Liver function tests and elastography', 'Family screening'],
    'Smoking cessation (critical). AAT augmentation therapy (weekly IV pooled human AAT — slows emphysema progression in FEV1 30-65% predicted). Standard COPD management (bronchodilators, pulmonary rehab). Liver management and transplant evaluation if cirrhosis. Lung transplant for end-stage emphysema. Avoid occupational exposures.',
    'Variable: never-smokers may have near-normal lung function. Smokers develop severe emphysema decades earlier. Liver disease affects ~10% of ZZ adults. Augmentation therapy slows FEV1 decline.',
    'E88.0',
  ),

  'wilson-disease': gc(
    'wilson-disease', 'Wilson Disease', 'Enfermedad de Wilson', 'autosomal-recessive',
    'Autosomal recessive; prevalence ~1 in 30,000',
    'ATP7B gene (13q14.3) — encodes copper-transporting ATPase',
    'Impaired biliary copper excretion leads to copper accumulation in liver, brain, cornea, and kidneys.',
    ['Hepatic: hepatitis, cirrhosis, acute liver failure (with Coombs-negative hemolytic anemia)', 'Neuropsychiatric: tremor, dystonia, dysarthria, drooling, personality changes, psychosis', 'Kayser-Fleischer rings (copper deposits in Descemet membrane)', 'Renal tubular dysfunction (Fanconi syndrome)', 'Hemolytic anemia', 'Osteoporosis/arthropathy'],
    ['Serum ceruloplasmin (low, <20 mg/dL)', 'Slit-lamp exam (Kayser-Fleischer rings)', '24-hour urine copper (elevated >100 mcg/day)', 'Hepatic copper content on liver biopsy (gold standard)', 'ATP7B genetic testing', 'Leipzig scoring system'],
    'Lifelong copper chelation: D-penicillamine or trientine. Zinc (blocks intestinal copper absorption, maintenance therapy or mild disease). Low-copper diet (avoid shellfish, liver, chocolate, mushrooms, nuts). Acute liver failure: emergency liver transplant. Neuropsychiatric symptoms may worsen initially with chelation.',
    'Excellent if treated before irreversible damage. Untreated: fatal. Hepatic disease responds well. Neurologic recovery is slower and incomplete in some patients. Lifelong therapy required; non-compliance leads to relapse.',
    'E83.0',
  ),

  'hemochromatosis': gc(
    'hemochromatosis', 'Hereditary Hemochromatosis', 'Hemocromatosis Hereditaria', 'autosomal-recessive',
    'Autosomal recessive; C282Y homozygosity most common; low clinical penetrance (~30% of homozygotes develop disease)',
    'HFE gene (6p22.2) — C282Y mutation most common',
    'Excessive intestinal iron absorption leading to iron overload in liver, heart, pancreas, joints, and pituitary. Most common genetic disorder in Northern Europeans.',
    ['Fatigue and arthralgia (earliest symptoms)', 'Hepatomegaly and elevated transaminases progressing to cirrhosis', 'Bronze skin pigmentation', 'Diabetes mellitus ("bronze diabetes")', 'Cardiomyopathy and arrhythmias', 'Hypogonadism (pituitary iron deposition)', 'Arthropathy (2nd/3rd MCP joints characteristic)', 'Increased susceptibility to Vibrio vulnificus and Listeria'],
    ['Transferrin saturation (elevated >45% — best screening test)', 'Serum ferritin (elevated)', 'HFE genotyping (C282Y/H63D)', 'Liver MRI (iron quantification by T2*)', 'Liver biopsy (if uncertain diagnosis or assess fibrosis)', 'Hepatic iron concentration'],
    'Therapeutic phlebotomy: weekly until ferritin <50 ng/mL, then maintenance every 2-4 months. Iron chelation (deferoxamine) if phlebotomy not tolerated. Avoid iron supplements and excess vitamin C. Limit alcohol. Screen first-degree relatives. Liver transplant for decompensated cirrhosis. Monitor for HCC if cirrhotic.',
    'Normal life expectancy if treated before cirrhosis develops. Cirrhosis is irreversible and carries HCC risk (200-fold increased). Arthropathy and hypogonadism may not improve with treatment.',
    'E83.1',
  ),

  // ---- X-Linked (4) -------------------------------------------------------

  'duchenne-muscular-dystrophy': gc(
    'duchenne-muscular-dystrophy', 'Duchenne Muscular Dystrophy', 'Distrofia Muscular de Duchenne', 'x-linked',
    'X-linked recessive; ~1/3 de novo mutations; ~1 in 3,500 male births',
    'DMD gene (Xp21.2) — frameshift mutations abolishing dystrophin production',
    'Most common and severe muscular dystrophy. Progressive skeletal and cardiac muscle degeneration due to absence of dystrophin.',
    ['Progressive proximal muscle weakness (onset age 2-5)', 'Gowers sign (using arms to climb up legs when rising)', 'Pseudohypertrophy of calves', 'Waddling gait', 'Loss of ambulation by age 10-13', 'Dilated cardiomyopathy', 'Respiratory failure (progressive restrictive lung disease)', 'Elevated CK (10-100x normal)', 'Mild cognitive impairment (~30%)'],
    ['Serum CK (markedly elevated, often >10,000 U/L)', 'DMD genetic testing (deletions/duplications ~70%, sequencing for point mutations)', 'Muscle biopsy (absent dystrophin on immunostaining — rarely needed now)', 'Echocardiography and PFTs (baseline and monitoring)', 'Genetic counseling for carrier testing'],
    'Corticosteroids (deflazacort or prednisone) — prolong ambulation by 2-3 years. Exon-skipping therapies (eteplirsen, golodirsen, casimersen for specific mutations). Cardiac: ACE inhibitor/beta-blocker early. Respiratory: nocturnal NIV, then full-time ventilation. Physical therapy, bracing, scoliosis surgery. Delandistrogene moxeparvovec (gene therapy) for ages 4-5.',
    'Mean survival mid-20s to 30s with modern respiratory and cardiac care (previously late teens). Death from respiratory or cardiac failure. Gene therapy and exon-skipping offer hope for improved outcomes.',
    'G71.01',
  ),

  'becker-muscular-dystrophy': gc(
    'becker-muscular-dystrophy', 'Becker Muscular Dystrophy', 'Distrofia Muscular de Becker', 'x-linked',
    'X-linked recessive; in-frame mutations preserving partially functional dystrophin',
    'DMD gene (Xp21.2) — in-frame deletions producing truncated but partially functional dystrophin',
    'Milder allelic variant of Duchenne. Onset later, progression slower, but cardiomyopathy can be severe and disproportionate.',
    ['Progressive proximal weakness (onset age 5-15)', 'Calf pseudohypertrophy', 'Maintain ambulation into late teens/adulthood (often >16 years)', 'Dilated cardiomyopathy (can be severe, may be presenting feature)', 'Elevated CK (5-50x normal)', 'Muscle cramps and myoglobinuria with exercise'],
    ['Serum CK (elevated)', 'DMD genetic testing (in-frame deletion/duplication)', 'Muscle biopsy (reduced/abnormal dystrophin)', 'Echocardiography (cardiac monitoring critical)', 'PFTs'],
    'Physical therapy and exercise (moderate activity encouraged). Corticosteroids less established than in DMD. Cardiac management: ACE inhibitor/beta-blocker for cardiomyopathy, heart transplant in severe cases. Respiratory support if needed. Genetic counseling.',
    'Variable: some remain ambulatory into 60s, others wheelchair-bound by 20s. Cardiomyopathy is major determinant of survival. Mean survival into 40s-50s. Some patients die primarily from cardiac disease.',
    'G71.01',
  ),

  'hemophilia-a': gc(
    'hemophilia-a', 'Hemophilia A', 'Hemofilia A', 'x-linked',
    'X-linked recessive; ~30% de novo mutations; ~1 in 5,000 male births',
    'F8 gene (Xq28) — encodes factor VIII',
    'Most common severe inherited bleeding disorder. Severity correlates with factor VIII level: severe (<1%), moderate (1-5%), mild (5-40%).',
    ['Hemarthroses (spontaneous in severe; trauma-related in moderate/mild)', 'Deep muscle hematomas', 'Prolonged bleeding after surgery/trauma', 'Easy bruising', 'Intracranial hemorrhage (life-threatening)', 'Chronic arthropathy (target joints)', 'Pseudotumors (encapsulated hematomas)', 'Mucosal bleeding less prominent than in VWD'],
    ['aPTT prolonged (PT normal)', 'Factor VIII activity level (reduced)', 'Mixing study (corrects with normal plasma)', 'F8 genetic testing (intron 22 inversion ~45% of severe)', 'Inhibitor screening (Bethesda assay)', 'Family history and carrier testing'],
    'Factor VIII replacement: on-demand or prophylactic (standard of care for severe). Extended half-life factor VIII products. Emicizumab (bispecific antibody mimicking factor VIIIa — subcutaneous, effective even with inhibitors). Fitusiran (anti-antithrombin siRNA). Gene therapy (valoctocogene roxaparvovec) for selected adults. Joint protection, physical therapy. Avoid aspirin/NSAIDs.',
    'Near-normal life expectancy with modern prophylaxis. Inhibitor development (~30% of severe) is major complication. Chronic arthropathy if prophylaxis inadequate. Gene therapy potentially curative.',
    'D66',
  ),

  'hemophilia-b': gc(
    'hemophilia-b', 'Hemophilia B (Christmas Disease)', 'Hemofilia B (Enfermedad de Christmas)', 'x-linked',
    'X-linked recessive; ~1 in 25,000 male births',
    'F9 gene (Xq27.1) — encodes factor IX',
    'Clinically identical to hemophilia A but caused by factor IX deficiency. Named after Stephen Christmas, first patient described.',
    ['Same bleeding phenotype as hemophilia A', 'Hemarthroses and deep muscle bleeds', 'Prolonged surgical/traumatic bleeding', 'Severity correlates with factor IX level', 'Inhibitor development less common (~3-5%)'],
    ['aPTT prolonged (PT normal)', 'Factor IX activity level (reduced)', 'F9 genetic testing', 'Inhibitor screening', 'Distinguish from hemophilia A by specific factor assays'],
    'Factor IX replacement: on-demand or prophylactic. Extended half-life factor IX (eftrenonacog alfa, nonacog beta pegol). Fitusiran (shared with hemophilia A). Gene therapy: etranacogene dezaparvovec (Hemgenix) — first approved gene therapy for hemophilia B, single IV infusion. Emicizumab NOT effective (specific to factor VIII pathway).',
    'Near-normal life expectancy with prophylaxis. Gene therapy (Hemgenix) showing sustained factor IX expression after single dose. Lower inhibitor risk than hemophilia A.',
    'D67',
  ),

  // ---- Additional Conditions (8) ------------------------------------------

  'fragile-x-syndrome': gc(
    'fragile-x-syndrome', 'Fragile X Syndrome', 'Síndrome de X Frágil', 'trinucleotide-repeat',
    'X-linked dominant with reduced penetrance; CGG repeat expansion',
    'FMR1 gene (Xq27.3) — CGG trinucleotide repeat expansion silences FMRP production',
    'Most common inherited cause of intellectual disability and autism. Full mutation >200 CGG repeats (normal <45). Premutation carriers (55-200) at risk for FXTAS and FXPOI.',
    ['Intellectual disability (moderate in males, mild/normal in ~50% of females)', 'Autism spectrum features (~60% of males)', 'Long face, prominent ears, macroorchidism (post-pubertal)', 'Hyperactivity and attention problems', 'Anxiety and social avoidance', 'Seizures (~15%)', 'Joint hypermobility', 'FXTAS in premutation carriers: tremor, ataxia, cognitive decline (older males)'],
    ['FMR1 CGG repeat analysis (diagnostic)', 'Distinguish premutation from full mutation', 'Carrier testing for family members', 'Developmental and cognitive assessment', 'Autism screening'],
    'Early intervention (speech, OT, behavioral therapy). Special education with individualized plan. Medications for specific symptoms: stimulants for ADHD, SSRIs for anxiety, anticonvulsants for seizures. No targeted therapy yet; mGluR5 antagonists did not meet endpoints in trials. Genetic counseling crucial (premutation inheritance pattern complex).',
    'Normal life expectancy. Males typically require lifelong support. Females have milder phenotype. Premutation carriers: FXTAS risk ~40% in males >50 years; FXPOI in ~20% of females.',
    'Q99.2',
  ),

  'williams-syndrome': gc(
    'williams-syndrome', 'Williams Syndrome', 'Síndrome de Williams', 'autosomal-dominant',
    'Autosomal dominant (microdeletion); nearly all de novo',
    '7q11.23 microdeletion (~26-28 genes including ELN elastin gene)',
    'Contiguous gene deletion syndrome with distinctive facial features, cardiovascular disease, intellectual disability, and unique cognitive-behavioral profile.',
    ['Distinctive "elfin" facies (broad forehead, short nose, full lips, wide mouth)', 'Supravalvular aortic stenosis (SVAS) and peripheral pulmonary stenosis', 'Hypercalcemia (infantile)', 'Intellectual disability (mild-moderate, mean IQ ~55-70)', 'Overfriendly personality with strong verbal skills but poor visuospatial ability', 'Short stature', 'Stellate iris pattern', 'Hyperacusis', 'Joint laxity then contractures'],
    ['FISH or chromosomal microarray (7q11.23 deletion)', 'Echocardiography (SVAS, other cardiac)', 'Serum calcium', 'Renal ultrasound (structural anomalies)', 'Thyroid function', 'Developmental assessment'],
    'Cardiac surveillance and surgical repair of SVAS if indicated. Manage hypercalcemia (low-calcium diet, avoid excess vitamin D). Monitor for hypertension and renal anomalies. Early intervention and special education emphasizing visuospatial skills. Behavioral support. Endocrine monitoring (thyroid, calcium). Avoid unnecessary anesthesia sedation (cardiovascular risk).',
    'Reduced life expectancy if significant cardiac disease; otherwise may approach normal. Adults can achieve semi-independent living. Cardiovascular complications are leading cause of morbidity.',
    'Q93.82',
  ),

  'prader-willi-syndrome': gc(
    'prader-willi-syndrome', 'Prader-Willi Syndrome', 'Síndrome de Prader-Willi', 'chromosomal',
    'Genomic imprinting disorder — loss of paternal 15q11.2-q13 expression; ~70% paternal deletion, ~25% maternal UPD, ~2-5% imprinting defect',
    '15q11.2-q13 region (paternal copy) — multiple genes including SNRPN',
    'Classic genomic imprinting disorder. Prevalence ~1 in 15,000. Distinct phases: neonatal hypotonia/feeding difficulty, then childhood-onset hyperphagia.',
    ['Severe neonatal hypotonia and poor feeding', 'Childhood-onset insatiable hyperphagia and obesity if unrestricted', 'Short stature', 'Hypogonadism (cryptorchidism, delayed/incomplete puberty)', 'Mild-moderate intellectual disability', 'Behavioral: temper outbursts, skin picking, OCD features', 'Characteristic facies (narrow bifrontal diameter, almond-shaped eyes)', 'Small hands and feet'],
    ['DNA methylation analysis (detects >99% of cases)', 'FISH or microarray for deletion', 'Microsatellite analysis for UPD', 'Growth hormone stimulation testing', 'Sleep study (central apnea)', 'Hormonal evaluation'],
    'Strict caloric management and environmental food restriction (food security measures). Growth hormone therapy (improves height, body composition, possibly cognition — start in infancy). Sex hormone replacement at puberty. Behavioral management. Sleep study and treatment. Scoliosis monitoring. Multidisciplinary team essential.',
    'Reduced life expectancy primarily from obesity complications (diabetes, cardiorespiratory failure) if weight uncontrolled. With strict dietary management and GH therapy, survival into 50s-60s achievable. Supervised living usually required.',
    'Q87.1',
  ),

  'angelman-syndrome': gc(
    'angelman-syndrome', 'Angelman Syndrome', 'Síndrome de Angelman', 'chromosomal',
    'Genomic imprinting disorder — loss of maternal UBE3A expression; ~70% maternal deletion, ~11% UBE3A mutation, ~7% paternal UPD, ~3% imprinting defect',
    'UBE3A gene at 15q11.2-q13 (maternal copy) — ubiquitin ligase',
    'Neurodevelopmental disorder characterized by severe intellectual disability, absent speech, seizures, ataxia, and a happy demeanor. "Sister" imprinting disorder to Prader-Willi.',
    ['Severe intellectual disability and absent/minimal speech', 'Movement disorder: ataxia, tremulous limbs, jerky movements', 'Frequent laughing and smiling with excitable personality', 'Seizures (~80%, onset by age 3)', 'Microcephaly (acquired)', 'Sleep disturbance', 'Wide-based gait with arms raised', 'Fascination with water'],
    ['DNA methylation analysis', 'UBE3A sequencing', 'Chromosomal microarray (maternal deletion)', 'EEG (characteristic pattern: high-amplitude delta with superimposed spikes)', 'Clinical diagnosis based on features'],
    'Seizure management (valproate, clobazam, levetiracetam — avoid carbamazepine). Melatonin for sleep disturbance. Physical therapy and communication aids (AAC devices). Behavioral support. Scoliosis monitoring. ASO therapy (antisense oligonucleotides targeting UBE3A) in clinical trials. Genetic counseling.',
    'Near-normal life expectancy. Severe functional disability persists. Seizures often improve after puberty. Adults require lifelong supervision and care. Gene therapy approaches are actively being researched.',
    'Q93.51',
  ),

  'von-willebrand-disease': gc(
    'von-willebrand-disease', 'Von Willebrand Disease', 'Enfermedad de Von Willebrand', 'autosomal-dominant',
    'Usually autosomal dominant (Type 1, most Type 2); Type 3 is autosomal recessive',
    'VWF gene (12p13.31) — encodes von Willebrand factor',
    'Most common inherited bleeding disorder (~1% of population). VWF mediates platelet adhesion and carries/stabilizes factor VIII.',
    ['Mucocutaneous bleeding (epistaxis, gum bleeding, menorrhagia)', 'Easy bruising', 'Prolonged bleeding after dental procedures or surgery', 'GI bleeding (especially Type 2A with angiodysplasia)', 'Menorrhagia (leading presenting complaint in women)', 'Postpartum hemorrhage', 'Joint bleeding rare except in severe Type 3'],
    ['VWF antigen level', 'VWF activity (ristocetin cofactor assay)', 'Factor VIII level', 'VWF multimer analysis (Type 2 subtyping)', 'PFA-100 (closure time prolonged)', 'Repeat testing if initial borderline (levels fluctuate with stress, inflammation, estrogen)', 'VWF gene testing for Type 2/3'],
    'Desmopressin (DDAVP): first-line for Type 1, releases stored VWF (test with trial). VWF-containing factor concentrates for Type 2/3 or DDAVP non-responders. Tranexamic acid for mucosal bleeding. Hormonal therapy for menorrhagia (OCPs, IUD). Avoid aspirin. Type 2B: DDAVP contraindicated (worsens thrombocytopenia).',
    'Excellent for Type 1 (most common, ~70-80%). Type 3 (severe): significant bleeding risk requiring factor replacement. Normal life expectancy for most. Menorrhagia significantly impacts quality of life.',
    'D68.0',
  ),

  // ---- Hereditary Cancer Syndromes (3) ------------------------------------

  'brca-hereditary-breast-ovarian': gc(
    'brca-hereditary-breast-ovarian', 'BRCA-Related Hereditary Breast & Ovarian Cancer', 'Cáncer Hereditario de Mama y Ovario Relacionado con BRCA', 'hereditary-cancer',
    'Autosomal dominant with high penetrance',
    'BRCA1 (17q21.31) or BRCA2 (13q13.1) — DNA double-strand break repair (homologous recombination)',
    'Most well-characterized hereditary cancer predisposition. BRCA1: ~70% lifetime breast cancer risk, ~44% ovarian. BRCA2: ~69% breast, ~17% ovarian.',
    ['Early-onset breast cancer (often <50 years)', 'Triple-negative breast cancer (especially BRCA1)', 'Bilateral breast cancer', 'Ovarian/fallopian tube/peritoneal cancer', 'Male breast cancer (especially BRCA2)', 'Prostate cancer (BRCA2)', 'Pancreatic cancer (BRCA2)', 'Family history of multiple affected members across generations'],
    ['Genetic counseling and testing (BRCA1/BRCA2 sequencing + MLPA)', 'Family history assessment (NCCN criteria for testing)', 'Cascade testing of family members', 'Breast MRI and mammography (alternating every 6 months starting age 25)', 'CA-125 and transvaginal ultrasound (limited sensitivity for ovarian)'],
    'Enhanced surveillance: annual breast MRI + mammogram starting age 25. Risk-reducing mastectomy (reduces breast cancer risk ~90%). Risk-reducing salpingo-oophorectomy by age 35-40 for BRCA1, 40-45 for BRCA2. Chemoprevention (tamoxifen/raloxifene). PARP inhibitors for BRCA-mutated cancers (olaparib, talazoparib). Male carriers: prostate screening.',
    'Significantly elevated cancer risk without intervention. Risk-reducing surgery dramatically lowers incidence. Prognosis of BRCA-related cancers improved by PARP inhibitor therapy. Platinum chemotherapy particularly effective in BRCA-mutated tumors.',
    'Z15.01',
  ),

  'lynch-syndrome': gc(
    'lynch-syndrome', 'Lynch Syndrome (HNPCC)', 'Síndrome de Lynch (CCHNP)', 'hereditary-cancer',
    'Autosomal dominant; ~1 in 279 individuals',
    'MLH1, MSH2, MSH6, PMS2, or EPCAM — DNA mismatch repair genes',
    'Most common hereditary colorectal cancer syndrome. Causes ~3% of all colorectal cancers. Also increases risk of endometrial, ovarian, gastric, urinary tract, and other cancers.',
    ['Early-onset colorectal cancer (mean age ~45)', 'Right-sided colon cancer predominance', 'Endometrial cancer (40-60% lifetime risk, most common extracolonic)', 'Ovarian cancer (~10-12% lifetime risk)', 'Synchronous/metachronous colorectal cancers', 'Sebaceous neoplasms (Muir-Torre variant)', 'Urothelial and gastric cancers', 'Tumors show microsatellite instability (MSI-H)'],
    ['Tumor testing: immunohistochemistry for MMR proteins and/or MSI testing', 'Germline genetic testing of MMR genes', 'Amsterdam II criteria or revised Bethesda guidelines', 'Universal tumor screening recommended for all CRC/endometrial cancers', 'Cascade testing of relatives'],
    'Colonoscopy every 1-2 years starting age 20-25. Consider prophylactic colectomy (subtotal) if cancer diagnosed. Aspirin (600mg daily reduces cancer risk — CAPP2 trial). Endometrial screening and consideration of risk-reducing hysterectomy/BSO after childbearing. Immunotherapy (pembrolizumab) highly effective for MSI-H cancers. Urine cytology for urinary tract surveillance.',
    'Excellent prognosis for early-detected cancers. MSI-H cancers respond exceptionally well to immune checkpoint inhibitors. Lifetime CRC risk 50-80% without surveillance.',
    'Z15.09',
  ),

  'li-fraumeni-syndrome': gc(
    'li-fraumeni-syndrome', 'Li-Fraumeni Syndrome', 'Síndrome de Li-Fraumeni', 'hereditary-cancer',
    'Autosomal dominant with very high penetrance; ~50% cancer by age 30, ~90% lifetime',
    'TP53 gene (17p13.1) — "guardian of the genome" tumor suppressor',
    'Rare but devastating cancer predisposition syndrome. Broad spectrum of cancers at young ages. Among the highest cancer risks of any hereditary syndrome.',
    ['Soft tissue sarcomas (childhood)', 'Osteosarcoma (adolescence)', 'Pre-menopausal breast cancer', 'Brain tumors (especially choroid plexus carcinoma, astrocytoma)', 'Adrenocortical carcinoma (childhood — highly suggestive)', 'Leukemia', 'Multiple primary cancers across lifetime', 'Wide spectrum: lung, GI, melanoma, others'],
    ['TP53 germline genetic testing', 'Classic Li-Fraumeni criteria (proband sarcoma <45 + FDR cancer <45 + FDR/SDR cancer <45 or sarcoma at any age)', 'Chompret criteria (revised, more inclusive)', 'Cascade testing of family members', 'Annual whole-body MRI (Toronto protocol)'],
    'Intensive surveillance: annual whole-body MRI and brain MRI, clinical breast exams and breast MRI (women), colonoscopy, dermatologic exam. Consider risk-reducing mastectomy. Minimize radiation exposure (avoid CT when possible — radiation sensitivity). Genetic counseling. No standard chemoprevention yet.',
    'Highly variable depending on cancer types and detection. Early detection through surveillance improves outcomes. Multiple primary cancers common. Radiation therapy should be avoided when possible due to risk of radiation-induced secondary cancers.',
    'Z15.01',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single genetic condition by ID. */
export function getGeneticCondition(id: string): GeneticConditionEntry | undefined {
  return GENETIC_CONDITION_ENTRIES[id];
}

/** Search conditions by name or any text field (case-insensitive). */
export function searchGeneticConditions(query: string): GeneticConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(GENETIC_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) ||
    (c.nameEs && c.nameEs.toLowerCase().includes(q)) ||
    c.category.toLowerCase().includes(q) ||
    c.inheritance.toLowerCase().includes(q) ||
    c.geneOrChromosome.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.management.toLowerCase().includes(q) ||
    c.prognosis.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getGeneticByCategory(category: GeneticConditionCategory): GeneticConditionEntry[] {
  return Object.values(GENETIC_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Filter conditions by inheritance pattern (case-insensitive partial match). */
export function getGeneticByInheritance(pattern: string): GeneticConditionEntry[] {
  const p = pattern.toLowerCase();
  return Object.values(GENETIC_CONDITION_ENTRIES).filter(c =>
    c.inheritance.toLowerCase().includes(p),
  );
}

/** Return the total number of genetic conditions in the database. */
export function getGeneticConditionCount(): number {
  return Object.keys(GENETIC_CONDITION_ENTRIES).length;
}

/** Get all conditions affecting a given gene or chromosome (case-insensitive). */
export function getGeneticByGene(gene: string): GeneticConditionEntry[] {
  const g = gene.toLowerCase();
  return Object.values(GENETIC_CONDITION_ENTRIES).filter(c =>
    c.geneOrChromosome.toLowerCase().includes(g),
  );
}
