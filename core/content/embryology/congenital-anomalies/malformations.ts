import { EducationalContent } from '../../types';

export const malformationsContent: EducationalContent = {
  id: 'malformations',
  type: 'topic',
  name: 'Congenital Malformations',
  alternateNames: ['Birth Defects', 'Congenital Anomalies', 'Structural Birth Defects'],
  levels: {
    1: {
      level: 1,
      summary: 'Congenital malformations (birth defects) are structural abnormalities present at birth that develop during pregnancy. They affect about 3% of all births, with causes including genetic factors (50-60%), environmental factors (10-20%), and unknown causes (30-40%).',
      explanation: `What are Congenital Malformations:
Congenital malformations (also called birth defects) are structural abnormalities present at birth
They develop during pregnancy and can affect any part of the body
Affect approximately 3% of all births
About 50% of causes are unknown
Detection occurs through prenatal ultrasound or after birth
Treatment varies from observation to surgery

Types of Malformations by Body System:
Heart: VSD, ASD, tetralogy of Fallot
Brain: Spina bifida, anencephaly
Limbs: Polydactyly, clubfoot, missing limbs
Face: Cleft lip and palate
Abdomen: Gastroschisis, omphalocele
Kidneys: Renal agenesis, hydronephrosis
Chromosomes: Down syndrome, trisomy 18

Major Categories:
Structural Malformations: Spina bifida, cleft lip/palate, heart defects, clubfoot, hip dysplasia
Chromosomal Disorders: Down syndrome (extra chromosome 21), Trisomy 18, Trisomy 13
Single Gene Disorders: Cystic fibrosis, sickle cell disease, muscular dystrophy

Causes of Malformations:
Genetic Factors (50-60%): Chromosome abnormalities, single gene mutations, multifactorial inheritance
Environmental Factors (10-20%): Infections (rubella, CMV, Zika), medications, alcohol, radiation
Unknown (30-40%): Complex interactions of factors

Common Malformations:

Neural Tube Defects:
Spina bifida occulta: Hidden, mild form
Meningocele: Meninges protrude
Myelomeningocele: Severe form with spinal cord involvement
Anencephaly: Missing parts of brain/skull, fatal

Cardiac Defects:
Septal Defects: VSD (hole between ventricles), ASD (hole between atria)
Tetralogy of Fallot: Four heart problems together causing blue baby syndrome

Orofacial Clefts:
Cleft lip: Opening in upper lip, can be unilateral or bilateral
Cleft palate: Opening in roof of mouth, affects feeding and speech

Limb Abnormalities:
Polydactyly: Extra fingers or toes
Syndactyly: Fused fingers or toes
Clubfoot: Foot turned inward/downward

Abdominal Wall Defects:
Gastroschisis: Intestines outside abdomen beside cord, not covered by membrane
Omphalocele: Intestines at umbilicus covered by membrane

When Do Malformations Occur:
Weeks 3-4: Heart, limbs, face, neural tube most vulnerable
Weeks 5-8: Palate, genitalia, brain development
Weeks 9-12: External genitalia, continued brain growth
Weeks 13-40: Growth, maturation, minor defects
The earlier in pregnancy, the more severe the potential effects

Prevention:
Before Pregnancy: Folic acid 400-800 mcg daily, vaccinations (rubella, chickenpox), medical control, genetic counseling
During Pregnancy: Avoid alcohol completely, avoid smoking completely, medications only if prescribed, regular prenatal care
Important: Folic acid reduces neural tube defects by 70%, start before pregnancy ideally 1 month before, continue through first trimester

Diagnosis:
Prenatal Testing: Ultrasound at 18-22 weeks, blood tests for screening markers, amniocentesis for genetic testing (15-20 weeks), CVS for earlier testing (10-13 weeks)
After Birth: Physical examination, imaging (X-ray, ultrasound), genetic testing, specialist referral`,
      keyTerms: [
        { term: 'congenital', definition: 'Present at birth' },
        { term: 'teratogen', definition: 'Substance that causes birth defects' },
        { term: 'neural tube defect', definition: 'Birth defect of the brain, spine, or spinal cord' },
        { term: 'folic acid', definition: 'B vitamin that prevents neural tube defects when taken before and during early pregnancy' },
      ],
      analogies: [
        'Think of the developing baby like construction - the earlier in the building process, the more serious the effect of a problem.',
      ],
      examples: [
        'Folic acid supplementation before pregnancy can reduce spina bifida risk by 70%.',
        'Rubella infection in early pregnancy can cause deafness, cataracts, and heart defects in the baby.',
      ],
      patientCounselingPoints: [
        'Folic acid supplementation before and during early pregnancy is critical for preventing neural tube defects.',
        'Avoiding alcohol, smoking, and unnecessary medications during pregnancy reduces birth defect risk.',
        'Early prenatal care allows for detection and planning for many congenital conditions.',
      ],
    },
    2: {
      level: 2,
      summary: 'Wilson\'s principles of teratology guide understanding of how malformations develop: susceptibility depends on genotype and developmental stage, teratogens act through specific mechanisms with dose-response relationships, and manifestations depend on timing of exposure. The critical period for organogenesis is weeks 3-8.',
      explanation: `Wilson's Principles of Teratology:
1) Susceptibility to teratogens depends on genotype - genetic variation affects response
2) Susceptibility varies with developmental stage - critical periods for each organ
3) Teratogens act through specific mechanisms - multiple pathways possible
4) There is a dose-response relationship - higher dose generally means greater effect
5) Manifestations depend on timing of exposure - same teratogen at different times causes different defects
6) Teratogenic effects include death, malformations, growth retardation, and functional deficits

Critical Periods:
All or none: Weeks 1-2 (embryo usually survives or dies completely)
Organogenesis: Weeks 3-8 (HIGH risk for structural defects)
Fetal period: Weeks 9-38 (moderate risk for functional defects and growth)

Organ-Specific Critical Periods:
Brain: 3-16 weeks (most vulnerable 3-8)
Heart: 3-7 weeks
Limbs: 4-7 weeks
Palate: 7-12 weeks
Genitals: 7-20 weeks
Eyes: 4-10 weeks

Critical Periods by Malformation:
Anencephaly and spina bifida: 3-4 weeks
Cleft lip: 5-7 weeks
Cleft palate: 7-12 weeks
Heart defects: 3-7 weeks
Limb reductions: 4-7 weeks
Hypospadias: 8-20 weeks

Teratogens:

Infectious Teratogens (TORCH):
Toxoplasmosis: 1st trimester worst, causes chorioretinitis, hydrocephalus, calcifications
Rubella: 1st trimester worst, causes cataracts, deafness, heart defects. Prevention: MMR vaccine
Cytomegalovirus (CMV): Any time, most common congenital viral infection, causes microcephaly, hearing loss
Herpes simplex (HSV): Perinatal, causes skin lesions, encephalitis

Physical Teratogens:
Ionizing radiation: Threshold possibly 5-10 cGy, causes microcephaly and growth restriction
Hyperthermia: Core temp >38.9C (102F), risk of neural tube defects, avoid hot tubs and saunas

Chemical Teratogens:
Alcohol: No safe level, causes Fetal Alcohol Spectrum Disorders, most severe is Fetal Alcohol Syndrome
Isotretinoin (Accutane): 20% risk of major malformations, most sensitive 3-5 weeks, pregnancy prevention required
Anticonvulsants: Valproate (10% risk NTDs), carbamazepine (1% risk NTDs), lamotrigine is safer
Warfarin: Warfarin embryopathy, heparin is safe alternative

Maternal Conditions:
Diabetes mellitus: Poor control increases risk 3-10%, causes cardiac defects, caudal regression
Phenylketonuria (PKU): Maternal PKU syndrome if uncontrolled, low-phenylalanine diet before pregnancy
Obesity: BMI >30 increases risk of NTDs and cardiac defects

Pathogenic Mechanisms:
Cell Death: Apoptosis (programmed, orderly) vs necrosis (unprogrammed, disorderly)
Disrupted Signaling: Growth factor pathways (FGF, SHH, BMP, Wnt)
Genetic vs Epigenetic: Gene mutations and chromosomal abnormalities vs DNA methylation and histone modification

Classification of Malformations:
Minor vs Major: Minor has no medical consequence, Major requires medical/surgical intervention
Isolated vs Syndromic: Isolated affects single organ system, Syndromic has recognizable pattern and often genetic`,
      keyTerms: [
        { term: 'teratogen', definition: 'Agent that causes birth defects' },
        { term: 'organogenesis', definition: 'Formation of organs during embryonic development' },
        { term: 'FAS', definition: 'Fetal Alcohol Syndrome - most severe form of fetal alcohol spectrum disorders' },
        { term: 'chorioretinitis', definition: 'Inflammation of the retina and choroid, often from congenital infection' },
      ],
      analogies: [
        'The embryo is like a construction project - disrupting work early (foundation) causes more damage than disrupting it later.',
      ],
      examples: [
        'Rubella in the first trimester can cause the classic triad of deafness, cataracts, and heart defects.',
        'Isotretinoin (Accutane) is one of the most potent human teratogens with a 20% risk of major malformations.',
      ],
      patientCounselingPoints: [
        'First trimester is the critical period for organ formation - avoid teratogens especially during weeks 3-8.',
        'Some medications are safe in pregnancy but always consult your healthcare provider.',
        'Preconception counseling is important for women with chronic medical conditions.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neural tube defects (NTDs), orofacial clefts, congenital heart defects, limb abnormalities, and abdominal wall defects each have specific embryologic origins, genetic factors, and clinical considerations. Understanding these patterns guides diagnosis, management, and genetic counseling.',
      explanation: `Neural Tube Defects:

Classification:
Open NTDs: Craniorachischisis (complete failure), anencephaly (cranial neuropore failure), myelomeningocele (caudal with protrusion), myeloschisis (open cord)
Closed NTDs: Spina bifida occulta (hidden), meningocele (meninges protrude), lipomyelomeningocele (lipomatous), diastematomyelia (split cord)

Pathogenesis: Multifactorial etiology with genetic (60-70%) and environmental factors. MTHFR, PDGFRA, VANGL1, and folate pathway genes involved. Folate deficiency creates 5-10 fold increased risk. Diabetes mellitus creates 3-4 fold increased risk. Obesity (BMI >30) creates 1.5-2 fold increased risk. Hyperthermia with core temp >38.9C creates 2-3 fold increased risk.

Orofacial Clefts:

Classification:
Cleft lip: Unilateral vs bilateral, complete vs incomplete
Cleft palate: Soft palate only, hard palate, submucous (hidden)
Robin sequence: Micrognathia + glossoptosis + airway obstruction + U-shaped cleft palate

Embryology: Lip forms weeks 5-7, primary palate weeks 6-7, secondary palate weeks 8-12

Genetic factors: IRF6 for Van der Woude syndrome, FGFR1 for Pfeiffer, MSX1 and TGF-beta3 for cleft palate

Teratogens: Anticonvulsants (phenobarbital, valproate), smoking, alcohol

Congenital Heart Defects:

Classification:
Shunt lesions: ASD, VSD, PDA, AVSD
Obstructive lesions: Pulmonary stenosis, aortic stenosis, coarctation
Complex lesions: Tetralogy of Fallot, transposition, truncus arteriosus, hypoplastic left heart

Molecular genetics: 22q11.2 deletion (DiGeorge syndrome), NOTCH1 (bicuspid aortic valve), GATA4 and NKX2-5 (septal defects)

Maternal factors: Diabetes (3-5 fold increased risk), obesity, rubella (PDA, pulmonary stenosis), alcohol

Limb Abnormalities:

Classification:
Transverse defects: Amelia (absence of entire limb), meromelia (partial absence), adactylia (absence of digits)
Longitudinal defects: Preaxial (absence of radius side), postaxial (absence of ulna side), phocomelia (shortened proximal)
Teratogen: Thalidomide (days 20-36 most sensitive)

Polydactyly genetics: Preaxial (SHH/ZPA), postaxial (SHH, GLI3)

Syndactyly types: Apert (FGFR2), Poland (unilateral, often right-sided)

Abdominal Wall Defects:

Omphalocele vs Gastroschisis:
Omphalocele: At umbilicus, covered by peritoneal membrane, bowel possibly liver, associated with chromosomal/syndromic anomalies, karyotype indicated (15-30% abnormal)
Gastroschisis: Beside umbilicus (usually right), no covering, bowel usually not liver, usually isolated (normal karyotype)

Dysmorphology Principles:
Pattern recognition: Down syndrome (up-slanting palpebral fissures, flat face, single palmar crease), Trisomy 18 (rocker-bottom feet, overlapping fingers), Fetal alcohol syndrome (short palpebral fissures, smooth philtrum, thin vermillion), Noonan syndrome (hypertelorism, down-slanting eyes, webbed neck)

Examination components: Growth (height, weight, OFC), face (eyes, ears, nose, philtrum), hands/feet (length, fingers, nails), skin (pigmentation, texture), genitalia (ambiguity, anomalies), neurologic (tone, reflexes)`,
      keyTerms: [
        { term: 'myelomeningocele', definition: 'Severe form of spina bifida with spinal cord and meninges protruding' },
        { term: 'Robin sequence', definition: 'Triad of micrognathia, glossoptosis, and airway obstruction, often with cleft palate' },
        { term: '22q11.2 deletion', definition: 'DiGeorge/velocardiofacial syndrome - most common microdeletion syndrome' },
        { term: 'phocomelia', definition: 'Seal limbs - shortened proximal segments with hands/feet near body' },
      ],
      analogies: [
        'Neural tube closure is like closing a zipper - it must start and end at the right places and close completely.',
      ],
      examples: [
        'Gastroschisis: Intestines beside umbilicus, no membrane, usually normal karyotype. Omphalocele: At umbilicus, covered by membrane, often has chromosomal abnormalities.',
        'Orofacial cleft timing: Cleft lip (5-7 weeks), Cleft palate (7-12 weeks). Palate has longer critical period than lip.',
      ],
      patientCounselingPoints: [
        'Omphalocele has a 15-30% rate of chromosomal abnormalities so genetic testing is recommended.',
        'Cleft lip repair is typically at ~3 months of age, cleft palate repair at ~12 months.',
        'Neural tube defect risk after one affected child is 2-4%, compared to baseline 0.1-0.2%.',
      ],
    },
    4: {
      level: 4,
      summary: 'Molecular genetics of malformations includes single gene disorders, chromosomal abnormalities, microdeletion/microduplication syndromes, and the genetic basis of specific conditions. Understanding these patterns guides genetic testing, recurrence risk counseling, and prenatal diagnosis.',
      explanation: `Single Gene Disorders:

Disrupted Pathways:
Folate pathway genes: MTHFR C677T (thermolabile variant, reduced enzyme activity)
Planar cell polarity pathway: VANGL1, CELSR1, SCRIB, DVL2 for neural tube closure
Sonic hedgehog pathway: SHH (holoprosencephaly), PTCH1 (basal cell nevus), GLI3 (Pallister-Hall)

Chromosomal Disorders:
Aneuploidy: Trisomy 21 (1:700), Trisomy 18 (1:5000), Trisomy 13 (1:10000), Monosomy X/Turner (1:2500 females), 47,XXY/Klinefelter (1:600 males)
Microdeletion/microduplication: 22q11.2 deletion (DiGeorge), 7q11.23 deletion (Williams), 15q11-q13 duplication (Prader-Willi/Angelman), 1p36 deletion, 17p13.3 deletion (Miller-Dieker)

Neural Tube Defects Molecular Genetics:
MTHFR polymorphisms: C677T and A1298C variants reduce enzyme activity
Planar cell polarity: VANGL1 (autosomal recessive spina bifida), CELSR1, SCRIB
Folate receptor alpha: FOLR1 mutations cause severe NTD despite supplementation
Gene-environment interactions: Low folate + C677T = highest NTD risk, high folia reduces risk even with C677T

Orofacial Clefts Genetics:
Syndromic clefting: IRF6 (Van der Woude), TP63 (EEC syndrome), FGFR1 (Pfeiffer)
Non-syndromic: IRF6, MAFB (isolated cleft palate), PAX7
Gene-environment interactions: TP63-smoking, GSTT1-detoxification, ADH1B-alcohol

Congenital Heart Defects Molecular Genetics:
Conotruncal defects: 22q11.2 deletion, TBX1 haploinsufficiency, CRKL and MEF2C
LVOTO: NOTCH1 (bicuspid aortic valve), GATA4, NKX2-5, MYH6
Heterotaxy: ZIC3, CFC1B, LEFTY1/2, NODAL

Skeletal Dysplasia Genetics:
Achondroplasia: FGFR3 gain of function
Osteogenesis imperfecta: COL1A1, COL1A2 (type I collagen)
Thanatophoric dysplasia: FGFR3 (more severe than achondroplasia)

Muscular Dystrophy Genetics:
Dystrophinopathies: Dystrophin gene (Xp21.2), 2.2 million bp, 79 exons
Duchenne vs Becker: Frame-shift (Duchenne) vs in-frame (Becker) mutations
Myotonic dystrophy: DMPK CTG expansion (type I), CNBP CCTG expansion (type II)

Prenatal Diagnosis:
Chromosomal microarray (CMA): All fetal anomalies, 6-7% yield overall
Whole exome sequencing (WES): Multiple anomalies, 30-40% yield
Cell-free DNA (cfDNA): Common trisomies, 93-99% detection

Genetic Counseling Principles:
Recurrence risks: Chromosomal disorders (varies), Multifactorial (NTD 2-4%, CL/P 4%, CHD 2-3%)
Counseling challenges: Variants of uncertain significance (VUS), ethical considerations

Ethical Considerations:
Prenatal decision-making: Respecting parental values, presenting options without bias
Future therapies: Gene editing, stem cells, prenatal therapy possibilities`,
      keyTerms: [
        { term: 'aneuploidy', definition: 'Abnormal number of chromosomes' },
        { term: 'microdeletion', definition: 'Small chromosomal deletion that can cause syndrome' },
        { term: 'frame-shift mutation', definition: 'Insertion or deletion that disrupts the reading frame of a gene' },
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase - key enzyme in folate metabolism' },
      ],
      analogies: [
        'Genes are like blueprints - a missing or misprinted page can affect the entire structure.',
      ],
      examples: [
        '22q11.2 deletion (DiGeorge syndrome) is the most common microdeletion syndrome.',
        'Duchenne vs Becker: Frame-shift mutations cause Duchenne (no dystrophin), in-frame mutations cause Becker (reduced dystrophin).',
        'Exome sequencing diagnostic yield: ~30-40% for multiple anomalies, ~10-15% for isolated anomalies.',
      ],
      patientCounselingPoints: [
        'Genetic testing can provide answers about causes and recurrence risks for congenital anomalies.',
        'Genetic counseling helps families understand inheritance patterns and future pregnancy risks.',
        'Prenatal diagnosis options continue to expand with advancing technology.',
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical management of congenital malformations includes prenatal screening/diagnosis, multidisciplinary management, surgical timing considerations, long-term outcomes, and emerging therapies including fetal surgery, stem cells, and gene therapy.',
      explanation: `Prenatal Ultrasound Screening:
First trimester (11-14 weeks): Nuchal translucency, nasal bone, ductus venosus, fetal heart rate, cystic hygroma
Combined test: NT + PAPP-A + beta-hCG, 85-90% detection for trisomy 21, ~5% false positive
Second trimester (18-22 weeks): CNS, face, neck, chest, abdomen, limbs, spine, umbilical cord, placenta
Soft markers: Choroid plexus cyst (trisomy 18), echogenic bowel (CF, CMV), short femur (trisomy 21, skeletal dysplasia)

Diagnostic Testing:
Chorionic villus sampling (10-13 weeks): Placental villi, 0.5-1% miscarriage risk
Amniocentesis (15-20 weeks): Amniotic fluid, 0.25-0.5% miscarriage risk
Fetal blood sampling (cordocentesis) (>18 weeks): Fetal blood, 1-2% miscarriage risk

Counseling Framework:
Providing options: Information, time, support, respect for values
Prognosis discussion: Spectrum from certain lethal to compatible with life, variability, uncertainty
Reproductive options: Continuing pregnancy vs termination, delivery planning, care coordination

Management Algorithms:
Neural tube defects: Prenatal (ultrasound, MRI, genetics), Perinatal (tertiary center delivery, postnatal MRI/US, surgery within 24-72 hours)
Orofacial clefts: Prenatal (3D ultrasound), Perinatal (specialty bottles, lip repair ~3 months, palate ~12 months)
Congenital heart disease: Prenatal (four-chamber view, outflow tracts), Perinatal (planned delivery at cardiac center, prostaglandin for ductal-dependent lesions)
Abdominal wall defects: Gastroschisis (37-38 weeks delivery, immediate surgery), Omphalocele (term delivery unless complications, genetic testing recommended)

Long-Term Outcomes:
Neural tube defects: 70-80% walk independently, 60-70% bowel incontinence, 80% require shunting, 80% normal intelligence
Orofacial clefts: 80% normal speech with treatment, conductive hearing loss common, orthognathic surgery may be needed
Congenital heart disease: Simple lesions have excellent survival, complex lesions improved with modern techniques, transition to adult care needed

Research Frontiers:
Fetal therapy: Myelomeningocele (MOMS trial benefit), CDH (tracheal balloon), Sacrococcygeal teratoma (EXIT procedure)
Gene therapy: Ex vivo (correct mutation, transplant), In vivo (AAV delivery), Base editing, Prime editing
Stem cells: In utero hematopoietic transplant for SCID, spina bifida stem cell patch
Future directions: Prenatal gene editing, stem cell therapies, tissue engineering, ethical considerations

Ethical Considerations:
Value of life: Disability community perspectives, parental experience, quality often higher than predicted
Non-directive counseling: Present facts without bias, respect for parental values
Resource allocation: Cost-effectiveness, access and equity`,
      keyTerms: [
        { term: 'nuchal translucency', definition: 'Fluid collection behind fetal neck, increased in chromosomal abnormalities' },
        { term: 'EXIT procedure', definition: 'Ex utero intrapartum treatment - surgery while baby remains attached to placenta' },
        { term: 'MOMS trial', definition: 'Management of Myelomeningocele Study - showed benefit of fetal surgery for spina bifida' },
      ],
      analogies: [
        'Prenatal diagnosis is like a weather forecast - it gives you information to help prepare, even if you can\'t change everything.',
      ],
      examples: [
        'Gastroschisis delivery at 37-38 weeks with immediate surgery vs Omphalocele delivery at term with delayed closure.',
        'For DDH: <6 months Pavlik harness, 6-18 months closed reduction + cast, 18m-4y open reduction + osteotomy.',
        'Long-term outcomes for myelomeningocele: 70-80% walk independently, many live independently and work.',
      ],
      patientCounselingPoints: [
        'Prenatal diagnosis allows for preparation and planning but cannot predict every outcome.',
        'Support groups and connecting with other families facing similar challenges can be invaluable.',
        'Transition to adult care is important for children with special healthcare needs.',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'embryology-overview', targetType: 'topic', relationship: 'parent', label: 'Embryology' },
  ],
  tags: {
    systems: ['all'],
    topics: ['embryology', 'congenital-anomalies', 'birth-defects', 'teratology'],
    keywords: ['malformations', 'birth defects', 'teratogens', 'neural tube defects', 'cleft lip', 'cleft palate'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obgyn', 'pediatrics', 'surgery'] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default malformationsContent;
