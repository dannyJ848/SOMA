/**
 * Cystic Fibrosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const cysticFibrosis: EducationalContent = {
  id: 'condition-cystic-fibrosis',
  type: 'condition',
  name: 'Cystic Fibrosis',
  alternateNames: ['CF', 'Mucoviscidosis', 'Cystic Fibrosis of the Pancreas'],
  hpoId: 'HP:0000007',

  levels: {
    1: {
      level: 1,
      summary: 'Cystic fibrosis is an inherited condition that causes thick, sticky mucus to build up in the lungs, digestive system, and other organs, leading to breathing problems and difficulty digesting food.',
      explanation: `Cystic fibrosis (CF) is a genetic disease that affects how the body makes mucus and sweat. The mucus becomes thick and sticky instead of thin and slippery.

**What happens in CF:**
- Mucus builds up in the lungs and causes infections
- Mucus blocks tubes in the pancreas, preventing enzymes from reaching food
- Sweat becomes very salty
- The body has trouble absorbing nutrients from food

**Common symptoms:**
- Coughing with thick mucus
- Frequent lung infections
- Wheezing and shortness of breath
- Poor growth and weight gain
- Greasy, bulky stools
- Salty-tasting skin

**Diagnosis:**
- Sweat test (measures salt in sweat)
- Genetic testing
- Newborn screening

**Treatment:**
- Airway clearance techniques (chest PT)
- Medicines to thin mucus
- Enzyme pills with meals
- Nutritional supplements
- Antibiotics for infections

**Life expectancy:**
- People with CF are living longer than ever before
- Many now live into their 40s, 50s, and beyond`,
      keyTerms: [
        { term: 'mucus', definition: 'Slimy substance that lines and protects the inside of organs; becomes thick and sticky in CF' },
        { term: 'pancreas', definition: 'Organ that makes enzymes to digest food and hormones like insulin' },
        { term: 'enzyme', definition: 'Protein that helps break down food for digestion' },
        { term: 'genetic', definition: 'Related to genes and inherited from parents' },
      ],
      analogies: [
        'In cystic fibrosis, mucus is like glue instead of gelatin. The thick, sticky mucus clogs airways and digestive tubes the way dried glue clogs a nozzle.',
        'Think of the airways like hallways. In CF, it is like having clutter blocking the halls—air cannot pass through easily.',
      ],
      examples: [
        'A baby is born with CF and is diagnosed through newborn screening. The parents learn to do chest percussion therapy to help clear their baby lungs.',
        'A child with CF takes enzyme capsules before every meal to help digest food and grow properly.',
      ],
      patientCounselingPoints: [
        'Take enzyme replacements with every meal and snack to help digest food properly.',
        'Do airway clearance exercises daily to keep lungs clear and prevent infections.',
        'Stay active and exercise—this helps clear mucus from the lungs.',
        'Eat a high-calorie diet to maintain a healthy weight.',
        'Drink plenty of fluids to help thin mucus.',
        'Avoid smoke and respiratory irritants.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cystic fibrosis is an autosomal recessive disorder caused by mutations in the CFTR gene, leading to defective chloride transport, thick mucus secretions, and multi-organ dysfunction affecting lungs, pancreas, liver, and reproductive system.',
      explanation: `## Genetics and Inheritance

**CFTR Gene:**
- Located on chromosome 7
- Autosomal recessive inheritance
- Both parents must be carriers
- 25% chance of affected child if both parents are carriers

**Carrier Frequency:**
- About 1 in 25-30 Caucasians
- Less common in other populations
- Over 2000 CFTR mutations known

**Common Mutations:**
- F508del: Most common (about 70%)
- G542X, N1303K, W1282X
- Panel testing covers most mutations

## Pathophysiology

**CFTR Protein Function:**
- Chloride channel on cell surface
- Regulates salt and water movement
- Defective in CF: impaired chloride secretion
- Results in thick, dehydrated mucus

**Organ Systems Affected:**

**Respiratory (95% of mortality):**
- Chronic bronchitis
- Recurrent infections
- Bronchiectasis
- Respiratory failure

**Gastrointestinal:**
- Pancreatic insufficiency (85%)
- Malabsorption, malnutrition
- Meconium ileus in newborns
- Distal intestinal obstruction syndrome

**Hepatobiliary:**
- Focal biliary cirrhosis
- Gallstones
- Liver disease

**Reproductive:**
- Male infertility (absent vas deferens)
- Reduced fertility in females

## Clinical Presentation

**Pulmonary Symptoms:**
- Chronic cough
- Recurrent pneumonia
- Persistent wheezing
- Digital clubbing
- Hemoptysis

**GI Symptoms:**
- Steatorrhea (fatty stools)
- Failure to thrive
- Rectal prolapse
- Vitamin deficiencies (A, D, E, K)

**Other:**
- Hyponatremia, hypokalemia (sweat)
- Heat intolerance
- Nasal polyps
- Sinusitis

## Diagnosis

**Newborn Screening:**
- Immunoreactive trypsinogen (IRT)
- Elevated IRT prompts DNA testing
- Confirmatory sweat test if positive

**Sweat Chloride Test:**
- Gold standard for diagnosis
- pilocarpine iontophoresis
- \`\`\`Intermediate\`\`\`: 30-59 mmol/L
- \`\`\`Positive\`\`\`: ≥60 mmol/L

**Genetic Testing:**
- CFTR mutation panel
- Full sequencing if needed
- Important for family planning`,
      keyTerms: [
        { term: 'autosomal recessive', definition: 'Inheritance pattern requiring two abnormal genes (one from each parent) to cause disease' },
        { term: 'CFTR', definition: 'Cystic Fibrosis Transmembrane Conductance Regulator; protein that functions as a chloride channel' },
        { term: 'bronchiectasis', definition: 'Permanent dilation of bronchi caused by chronic infection and inflammation' },
        { term: 'steatorrhea', definition: 'Excess fat in stools, appearing greasy, bulky, and foul-smelling' },
      ],
      analogies: [
        'The CFTR protein is like a door that lets salt in and out of cells. In CF, the door is broken, so salt and water cannot pass through properly.',
      ],
      clinicalNotes: 'Newborn screening has dramatically improved outcomes by enabling early treatment. The sweat chloride test remains the diagnostic gold standard. Pancreatic insufficiency affects most patients and requires enzyme replacement.',
    },
    3: {
      level: 3,
      summary: 'Cystic fibrosis management requires multidisciplinary care including airway clearance, CFTR modulator therapy, nutritional support, treatment of chronic infections (especially Pseudomonas and Staphylococcus), and monitoring for complications like bronchiectasis, diabetes, and liver disease.',
      explanation: `## CFTR Modulator Therapy

**Ivacaftor (Kalydeco):**
- For gating mutations (G551D)
- Potentiates CFTR channel
- Dramatic improvement in lung function

**Lumacaftor/Ivacaftor (Orkambi):**
- For F508del homozygous
- Corrector + potentiator
- Modest benefit

**Tezacaftor/Ivacaftor (Symdeko):**
- For F508del mutations
- Better tolerated than lumacaftor
- Improved FEV1

**Elexacaftor/Tezacaftor/Ivacaftor (Trikafta):**
- Triple therapy for F508del
- Most effective modulator
- 10-15% improvement in FEV1
- Reduced exacerbations

**Eligibility:**
- Based on genotype
- 90% of patients have eligible mutations
- Expands to younger ages

## Airway Clearance Techniques

**Options:**
- Chest physiotherapy (CPT) with percussion
- Active cycle of breathing technique
- Autogenic drainage
- Positive expiratory pressure (PEP) devices
- Oscillating devices (Flutter, Acapella)
- High-frequency chest wall oscillation (Vest)

**Frequency:**
- At least once daily
- Increased during exacerbations
- Before inhaled medications

## Inhaled Medications

**Mucolytics:**
- Dornase alfa (Pulmozyme): Daily
- Hypertonic saline: 3-7% twice daily
- N-acetylcysteine

**Bronchodilators:**
- Albuterol before airway clearance
- Consider if reactive airway disease

**Antibiotics:**
- Inhaled tobramycin
- Inhaled aztreonam
- Colistin
- Rotate regimens

## Chronic Infection Management

**Common Pathogens:**
- Staphylococcus aureus (MSSA, MRSA)
- Pseudomonas aeruginosa
- Haemophilus influenzae
- Burkholderia cepacia complex

**Eradication Protocols:**
- Early Pseudomonas: 3 weeks of inhaled tobramycin
- Oral ciprofloxacin
- Repeat cultures to confirm eradication

**Chronic Suppression:**
- 28-day cycles of inhaled antibiotics
- Rotate between agents
- Monitor renal and ototoxicity

## Nutritional Management

**Pancreatic Enzyme Replacement:**
- Lipase dosing: 500-4000 units/kg/meal
- Take with first bites of food
- Adjust based on stool consistency
- Enteric-coated microtablets

**Fat-Soluble Vitamins:**
- Vitamin A, D, E, K
- Water-miscible formulations
- Monitor levels annually

**Nutritional Goals:**
- 110-200% of expected calories
- High-fat diet encouraged
- BMI >50th percentile preferred

**GI Complications:**
- DIOS (distal intestinal obstruction syndrome)
- Rectal prolapse
- GERD (common)
- Liver disease

## Pulmonary Exacerbations

**Signs:**
- Increased cough
- Change in sputum
- Decreased FEV1 (>10%)
- Weight loss
- Fatigue

**Treatment:**
- IV antibiotics: dual coverage (anti-Pseudomonal)
- Airway clearance intensification
- Nutritional support
- Consider hospitalization

## Monitoring

**Routine Testing:**
- Quarterly: Spirometry, weight
- Annual: Chest X-ray or CT
- Annual: Sputum cultures
- Annual: Glucose tolerance test (age 10+)
- Biannual: Liver function tests

**Pulmonary Function:**
- FEV1: Primary outcome measure
- Decline predicts mortality
- Guides therapy changes`,
      keyTerms: [
        { term: 'CFTR modulator', definition: 'Medication that corrects or potentiates defective CFTR protein function' },
        { term: 'potentiator', definition: 'Drug that increases the activity of CFTR channels at the cell surface' },
        { term: 'corrector', definition: 'Drug that helps misfolded CFTR protein reach the cell surface' },
        { term: 'DIOS', definition: 'Distal Intestinal Obstruction Syndrome; partial blockage of intestines with thick mucus' },
      ],
      clinicalNotes: 'Trikafta (elexacaftor/tezacaftor/ivacaftor) has revolutionized CF care for patients with F508del mutations, significantly improving lung function and reducing exacerbations. Early diagnosis through newborn screening and aggressive nutritional management dramatically improves outcomes.',
    },
    4: {
      level: 4,
      summary: 'Advanced CF care includes lung transplantation referral criteria, management of CF-related diabetes, treatment of nontuberculous mycobacterial infections, and comprehensive complication surveillance including liver disease, bone health, and mental health.',
      explanation: `## CF-Related Diabetes (CFRD)

**Pathophysiology:**
- Progressive fibrosis of pancreas
- Islet cell destruction
- Insulin deficiency
- Insulin resistance during illness

**Diagnosis:**
- OGTT recommended from age 10
- Fasting glucose alone insensitive
- HbA1c unreliable (anemia, turnover)

**Classification:**
- No CFRD: Normal glucose tolerance
- Indeterminate CFRD: Intermediate
- CFRD with fasting hyperglycemia
- CFRD without fasting hyperglycemia

**Management:**
- Insulin is only recommended therapy
- Oral agents not effective
- Basal-bolus regimen preferred
- Tight control improves lung function

## Nontuberculous Mycobacteria (NTM)

**Common Species:**
- Mycobacterium avium complex (MAC)
- Mycobacterium abscessus
- Increasing prevalence

**Indications for Treatment:**
- Multiple positive cultures
- Clinical decline
- Radiographic progression

**Regimens:**
- MAC: Macrolide + ethambutol + rifampin
- M. abscessus: More difficult, multiple drugs
- Treatment duration: 12-24 months

## Lung Transplantation

**Referral Indications:**
- FEV1 <30% predicted or rapid decline
- Recurrent hemoptysis
- Recurrent pneumothorax
- Refractory respiratory failure
- Pulmonary hypertension

**Contraindications:**
- Active infection (Burkholderia, pan-resistant Pseudomonas)
- Severe malnutrition
- Nonadherence to therapy

**Outcomes:**
- Median survival: 8-10 years
- Improved quality of life
- Recurrent sinus disease common

## Liver Disease

**Spectrum:**
- Steatosis
- Cholestasis
- Focal biliary cirrhosis
- Multilobular cirrhosis

**Monitoring:**
- Annual LFTs, GGT
- Ultrasound if abnormal
- FibroScan for fibrosis

**Management:**
- UDCA for cholestasis
- Treat complications
- Refer for transplant evaluation

## Bone Health

**Risk Factors:**
- Malabsorption of vitamin D
- Chronic inflammation
- Glucocorticoid use
- Hypogonadism

**Monitoring:**
- DXA at age 18 (or earlier with steroids)
- Annual vitamin D levels

**Management:**
- Calcium 1000-1500 mg daily
- Vitamin D supplementation
- Bisphosphonates if osteoporosis

## Fertility and Reproduction

**Male Infertility:**
- Absent vas deferens in 97%
- Azoospermia
- Sperm retrieval possible (MESA, TESA)
- IVF/ICSI can achieve pregnancy

**Female Fertility:**
- Thick cervical mucus
- Malnutrition
- Chronic illness
- Pregnancy possible with stable disease

## Psychosocial Aspects

**Mental Health:**
- Depression: 30% prevalence
- Anxiety: 30% prevalence
- Annual screening recommended
- Integrated mental health care

**Adherence Challenges:**
- Time-consuming treatments
- Complex regimens
- Treatment burden: 2-4 hours daily
- Adolescents at highest risk

**Transition to Adult Care:**
- Structured program
- Begins in early teens
- Includes self-management skills`,
      keyTerms: [
        { term: 'CFRD', definition: 'Cystic Fibrosis-Related Diabetes; diabetes caused by pancreatic damage in CF' },
        { term: 'NTM', definition: 'Nontuberculous mycobacteria; environmental mycobacteria causing chronic lung infection' },
        { term: 'MESA', definition: 'Microsurgical epididymal sperm aspiration; sperm retrieval technique for male infertility' },
        { term: 'fibroscan', definition: 'Transient elastography; noninvasive measure of liver fibrosis' },
      ],
      clinicalNotes: 'CFRD management requires insulin therapy—oral agents are ineffective. Screen annually with OGTT starting at age 10. NTM infections are increasingly common and require prolonged multi-drug therapy. Consider transplant referral when FEV1 falls below 30% despite maximal therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CF management incorporates highly effective modulator therapy (HEMT), precision medicine based on genotype, treatment of emerging pathogens, lung transplant considerations, and evolving paradigms for gene editing and novel therapeutic delivery systems.',
      explanation: `## Highly Effective Modulator Therapy (HEMT)

**Triple Therapy (ELX/TEZ/IVA):**
- Indicated for ~90% of CF patients
- F508del homozygous: 14% FEV1 improvement
- F508del heterozygous: 10% improvement
- 63% reduction in exacerbations
- Improves QoL scores

**Long-Term Outcomes:**
- Slower lung function decline
- Weight gain and nutritional improvement
- Reduced hospitalizations
- Possible delayed need for transplant

**Unmet Needs:**
- Class I mutations (nonsense): ~5%
- Rare mutations: ~5%
- No approved modulator for these

**Emerging Therapies:**
- Elexacaftor/tezacaftor/ivacaftor extended to ages 2-5
- Next-generation correctors in development
- Amplifiers (PTI-428) for rare mutations
- Read-through agents for nonsense mutations (ataluren)

## Gene Therapy and Editing

**Gene Therapy Approaches:**
- Viral vectors (AAV, lentivirus)
- Non-viral delivery (lipid nanoparticles)
- CRISPR/Cas9 editing
- Base editing and prime editing

**Challenges:**
- Delivery to airway epithelium
- Immune response to vectors
- Transient expression
- Need for repeated administration

**CRISPR Developments:**
- Ex vivo editing of airway stem cells
- In vivo delivery systems
- Correction of F508del demonstrated
- Clinical trials pending

## Microbiome Considerations

**Airway Microbiome:**
- Shift from Staph aureus to Pseudomonas
- Diversity predicts disease state
- Dysbiosis precedes exacerbations
- Antibiotics alter microbiome

**Therapeutic Implications:**
- Probiotics under investigation
- Phage therapy for resistant pathogens
- Anti-virulence strategies
- Microbiome restoration

## Emerging Pathogens

**MDR Organisms:**
- Pandrug-resistant Pseudomonas
- Stenotrophomonas maltophilia
- Achromobacter xylosoxidans
- Burkholderia gladioli

**Treatment Approaches:**
- Synergistic combinations
- Novel beta-lactam/beta-lactamase inhibitors
- Polymyxins (colistin)
- Investigational agents

## Precision Medicine

**Genotype-Specific Therapy:**
- Over 2000 CFTR mutations
- Classified by functional defect
- Functional assays guide therapy
- Organoid testing for rare variants

**Biomarker Development:**
- Sweat chloride as pharmacodynamic marker
- FEV1 trajectory modeling
- Inflammatory biomarkers (CRP, calprotectin)
- Imaging biomarkers (MRI chest)

**Predictive Analytics:**
- Lung function prediction models
- Exacerbation risk scoring
- Treatment response prediction
- Machine learning approaches

## Newborn Screening Evolution

**Implementation:**
- Universal in US, Europe, Australia
- Immunoreactive trypsinogen (IRT) assay
- DNA multi-mutation panels
- Second-tier sequencing

**Benefits:**
- Improved survival
- Better nutritional status
- Reduced treatment burden
- Normal growth possible

**Ethical Considerations:**
- Detection of CFTR-related disorders
- Carrier identification
- Incidental findings
- Variants of uncertain significance

## Pregnancy and CF

**Preconception Counseling:**
- Optimize lung function
- Review medication safety
- Genetic counseling for partner testing
- Discuss reproductive options

**Pregnancy Management:**
- Multidisciplinary care
- Continue modulators (no clear harm)
- Monitor lung function closely
- Adjust enzymes for nutrition

**Outcomes:**
- Generally good if stable disease
- Preterm delivery increased
- Maternal respiratory complications
- No evidence of birth defects from modulators

## Future Directions

**Triple Therapy Expansions:**
- Younger patients (under age 2)
- Combination with other agents
- Generic/biosimilar development
- Cost reduction strategies

**Novel Delivery Systems:**
- Long-acting formulations
- Implantable devices
- Dry powder inhalers
- Improved adherence technologies

**Collaborative Care:**
- CF Foundation Care Center Network
- Quality improvement initiatives
- Patient registry (CFFPR)
- Real-world evidence generation`,
      keyTerms: [
        { term: 'HEMT', definition: 'Highly Effective Modulator Therapy; triple combination therapy for CF' },
        { term: 'organoid', definition: '3D tissue culture derived from stem cells; used for drug testing in CF' },
        { term: 'ex vivo', definition: 'Outside the living body; refers to manipulation of cells/tissues in lab' },
        { term: 'CFTR-related disorder', definition: 'Condition with some CF features but not meeting full diagnostic criteria' },
      ],
      clinicalNotes: 'HEMT has transformed CF from a fatal childhood disease to a chronic condition with normal life expectancy for many. The remaining 10% without effective modulators are the focus of intense research. Triple therapy is now approved down to age 2 years, with studies in infants ongoing. Long-term safety data continue to be reassuring.',
    },
  },

  media: [],
  citations: [
    { id: 'cff-guidelines', type: 'website', title: 'Cystic Fibrosis Foundation Clinical Care Guidelines', source: 'Cystic Fibrosis Foundation' },
    { id: 'ecfs-consensus', type: 'website', title: 'European Cystic Fibrosis Society Consensus Guidelines', source: 'European Cystic Fibrosis Society' },
    { id: 'ramsey', type: 'article', title: 'Cystic Fibrosis', authors: ['Ramsey BW'], source: 'Lancet' },
  ],
  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-pancreatitis', targetType: 'condition', relationship: 'related', label: 'Pancreatitis' },
  ],
  tags: {
    systems: ['respiratory', 'gastrointestinal'],
    topics: ['genetics', 'pulmonology', 'gastroenterology'],
    keywords: ['cystic fibrosis', 'CFTR', 'bronchiectasis', 'pancreatic insufficiency', 'modulator', 'Trikafta'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cysticFibrosis;
