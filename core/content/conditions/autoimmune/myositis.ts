/**
 * Polymyositis/Dermatomyositis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const myositisContent: EducationalContent = {
  id: 'condition-idiopathic-inflammatory-myopathies',
  type: 'condition',
  name: 'Idiopathic Inflammatory Myopathies',
  nameEs: 'Miopatías Inflamatorias Idiopáticas',
  alternateNames: ['Myositis', 'Polymyositis', 'Dermatomyositis', 'IIM', 'IIMs'],
  hpoId: 'HP:0001324',

  levels: {
    1: {
      level: 1,
      summary: 'Myositis is a group of autoimmune diseases that cause muscle inflammation and weakness. Dermatomyositis also causes a distinct skin rash.',
      explanation: `In myositis, your immune system attacks your muscles, causing inflammation and weakness. When there\'s also a skin rash, it\'s called dermatomyositis.

**Main symptoms:**
- Muscle weakness (especially shoulders, hips, thighs)
- Difficulty climbing stairs, rising from chairs
- Trouble lifting arms above head
- Feeling tired easily
- In dermatomyositis: distinctive skin rash

**Dermatomyositis rash:**
- Red or purplish rash on eyelids (heliotrope rash)
- Red bumps on knuckles (Gottron papules)
- Rash on face, chest, back, elbows, knees
- Nail fold changes

**Who gets myositis:**
- Adults (usually 30-60 years old)
- Women more commonly than men
- Children can get juvenile forms
- Sometimes associated with other autoimmune diseases

**Treatment:**
- Medications to calm the immune system (steroids)
- Other immunosuppressive drugs
- Physical therapy
- Skin protection for rash

**Important to know:**
- Muscle weakness typically gets worse over weeks to months
- Weakness is usually on both sides of the body
- Unlike muscle pain from exercise, this weakness persists`,
      keyTerms: [
        { term: 'myositis', definition: 'Inflammation of muscles causing weakness' },
        { term: 'heliotrope rash', definition: 'Purple-colored rash on the eyelids, characteristic of dermatomyositis' },
        { term: 'Gottron papules', definition: 'Red or violet bumps on the knuckles and finger joints seen in dermatomyositis' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
      ],
      analogies: [
        'Myositis is like your muscles being "attacked" by your own immune system, making them too weak to work properly.',
        'Think of dermatomyositis as myositis with a "telltale rash" that helps doctors recognize it.',
      ],
      examples: [
        'A 40-year-old woman notices she can\'t climb stairs anymore and has trouble washing her hair due to shoulder weakness.',
        'Someone develops a reddish-purple rash on their eyelids and bumpy knuckles along with muscle weakness.',
        'A person has trouble getting out of a chair without using their arms for help.',
      ],
      patientCounselingPoints: [
        'Take your medications exactly as prescribed - don\'t stop them without talking to your doctor',
        'Physical therapy is important to maintain muscle strength and flexibility',
        'Protect your skin from the sun if you have dermatomyositis rash',
        'Report any difficulty swallowing or breathing problems immediately',
        'Exercise within your limits - complete rest can make muscles weaker',
      ],
    },
    2: {
      level: 2,
      summary: 'Idiopathic inflammatory myopathies include polymyositis, dermatomyositis, inclusion body myositis, and overlap syndromes, characterized by proximal muscle weakness, elevated muscle enzymes, and autoantibodies.',
      explanation: `## Classification

**Major IIM Subtypes:**
- **Dermatomyositis (DM):** Muscle weakness + characteristic rash
- **Polymyositis (PM):** Muscle weakness without rash
- **Inclusion Body Myositis (IBM):** Distal weakness, asymmetric, poor treatment response
- **Overlap Myositis:** Myositis + features of another CTD (SLE, SSc, RA)
- **Antisynthetase Syndrome:** Myositis + interstitial lung disease + characteristic features

## Clinical Features

**Muscle Involvement:**
- Progressive proximal muscle weakness
- Shoulder and hip girdle predominance
- Difficulty: Rising from chair, climbing stairs, lifting overhead
- Myalgias present in ~50%
- Dysphagia in 30-40%

**Dermatomyositis-Specific Skin Findings:**
- **Heliotrope rash:** Violaceous periorbital edema
- **Gottron papules:** Violaceous papules over MCP/PIP joints
- **Gottron sign:** Erythema over elbows, knees
- **Shawl sign:** V-shaped rash on upper back/shoulders
- **Mechanic\'s hands:** Hyperkeratotic, fissured skin on lateral fingers
- **Nail fold changes:** Dilated capillary loops, hemorrhages
- **Photosensitivity rash:** Face, neck, upper chest

**Antisynthetase Syndrome:**
- Myositis
- Interstitial lung disease
- Fever
- Arthritis
- Mechanic\'s hands
- Raynaud phenomenon
- Anti-Jo-1 or other antisynthetase antibodies

## Laboratory Findings

**Muscle Enzymes:**
- CK (creatine kinase): Markedly elevated (often >10x normal)
- Aldolase: Elevated
- AST/ALT: Elevated (muscle source)
- LDH: Elevated

**Autoantibodies:**
- **Myositis-Specific Antibodies (MSA):**
  - Anti-Jo-1 (histidyl-tRNA synthetase): Antisynthetase syndrome
  - Anti-Mi-2: Classic DM, good prognosis
  - Anti-MDA5: Amyopathic DM, ILD, poor prognosis
  - Anti-TIF1-gamma: Cancer-associated DM
  - Anti-NXP2: Calcinois, cancer-associated
  - Anti-SRP: Necrotizing myopathy, severe

- **Myositis-Associated Antibodies (MAA):**
  - Anti-PM-Scl: Overlap syndrome
  - Anti-U1 RNP: MCTD, myositis
  - Anti-Ro/La: SLE/Sjogren overlap

**Inflammatory Markers:**
- ESR/CRP often elevated

## Diagnosis

**Diagnostic Criteria:**
- Progressive symmetric proximal muscle weakness
- Elevated muscle enzymes
- Abnormal EMG: Myopathic changes
- Muscle biopsy: Inflammation, fiber damage
- Characteristic skin rash (DM)
- Exclusion: Metabolic, toxic, infectious causes

**Muscle Biopsy:**
- DM: Perifascicular atrophy, perivascular inflammation
- PM: Endomysial CD8+ T cells invading fibers
- IBM: Rimmed vacuoles, inclusion bodies

**EMG:**
- Myopathic potentials
- Fibrillation potentials, positive sharp waves
- Irritable myopathy

## Treatment Overview

**Initial Therapy:**
- High-dose prednisone: 1 mg/kg/day
- Early steroid-sparing agent addition
- Physical therapy

**Steroid-Sparing Agents:**
- Methotrexate
- Azathioprine
- Mycophenolate mofetil

**Refractory Disease:**
- IVIG
- Rituximab
- Calcineurin inhibitors (cyclosporine, tacrolimus)`,
      keyTerms: [
        { term: 'proximal weakness', definition: 'Weakness of muscles closest to the trunk (shoulders, hips)' },
        { term: 'dysphagia', definition: 'Difficulty swallowing; occurs when throat muscles are affected' },
        { term: 'antisynthetase syndrome', definition: 'Myositis with ILD, fever, arthritis, mechanic\'s hands, Raynaud; anti-Jo-1 positive' },
        { term: 'MSA', definition: 'Myositis-specific antibodies; define specific IIM subtypes' },
        { term: 'inclusion body myositis', definition: 'IBM; distal, asymmetric weakness with poor treatment response' },
      ],
      analogies: [
        'MSA antibodies are like "nametags" that tell doctors exactly which subtype of myositis a patient has.',
      ],
      examples: [
        'Anti-Jo-1 positive patient with myositis, ILD, mechanic\'s hands, and fever has antisynthetase syndrome.',
        'A patient with heliotrope rash, Gottron papules, and proximal weakness has classic dermatomyositis.',
      ],
    },
    3: {
      level: 3,
      summary: 'IIM pathogenesis involves T-cell mediated cytotoxicity (PM/IBM) and complement-mediated microangiopathy (DM), with myositis-specific antibodies defining distinct clinical phenotypes and guiding management.',
      explanation: `## Pathophysiology

**Dermatomyositis:**
- Complement-mediated microangiopathy
- Type I interferon signature
- B-cell driven with autoantibodies
- Perifascicular atrophy characteristic
- CD4+ T cells predominant

**Polymyositis:**
- CD8+ cytotoxic T cells
- Direct myofiber attack
- Endomysial inflammation
- MHC-I upregulation on myofibers
- Similar to graft-versus-host disease

**Inclusion Body Myositis:**
- Degenerative + inflammatory
- Rimmed vacuoles with beta-amyloid
- TDP-43 protein aggregation
- Autoinflammatory component
- Poor response to immunosuppression

**Antisynthetase Syndrome:**
- Autoimmunity to aminoacyl-tRNA synthetases
- Anti-Jo-1 (histidyl) most common
- Enzyme inhibition contributes to pathogenesis
- Strong ILD association

## Myositis-Specific Antibodies and Phenotypes

| Antibody | Phenotype | Key Features |
|----------|----------|--------------|
| **Anti-Jo-1** | Antisynthetase | ILD, arthritis, fever, mechanic\'s hands |
| **Anti-PL-7/12** | Antisynthetase | Similar to Jo-1, less common |
| **Anti-EJ/OJ** | Antisynthetase | Severe myositis, ILD |
| **Anti-Mi-2** | Classic DM | Good response, shawl sign, V-sign |
| **Anti-MDA5** | Amyopathic DM | Skin-predominant, severe ILD, ulcerative rash |
| **Anti-TIF1-γ** | Cancer-associated DM | High cancer association, skin-dominant |
| **Anti-NXP2** | Cancer-associated DM | Severe weakness, calcinosis, dysphagia |
| **Anti-SAE** | DM | Skin-first, later myositis |
| **Anti-SRP** | IMNM | Necrotizing myopathy, severe weakness |
| **Anti-HMGCR** | IMNM | Statin-associated necrotizing myopathy |

**IMNM = Immune-Mediated Necrotizing Myopathy**

## Cancer Association

**Dermatomyositis:**
- 15-25% have occult malignancy
- Risk highest within 3 years of diagnosis
- Associated cancers: Ovarian, breast, lung, GI, lymphoma
- Anti-TIF1-γ and anti-NXP2: Highest risk
- Need age-appropriate cancer screening
- Consider CT chest/abdomen/pelvis

**Polymyositis:**
- Slightly increased cancer risk (~10%)
- Less than DM

**IBM:**
- No cancer association

##Interstitial Lung Disease in Myositis

**High-Risk Antibodies:**
- Anti-Jo-1 and other antisynthetase antibodies
- Anti-MDA5 (rapidly progressive, fatal)
- Anti-PL-7, PL-12, EJ

**ILD Patterns:**
- NSIP most common
- OP pattern
- DIP (rare)
- Anti-MDA5: DAOP pattern

**Treatment:**
- Aggressive immunosuppression
- Mycophenolate or cyclophosphamide
- Calcineurin inhibitors
- Consider rituximab early

## Treatment Strategies

**Initial Induction:**
- Prednisone 1 mg/kg/day (max 80-100 mg)
- Consider IV methylprednisolone pulse for severe disease
- Add steroid-sparing agent within 2-4 weeks

**Steroid-Sparing Agents:**
- Methotrexate 15-25 mg weekly (first-line)
- Azathioprine 2-3 mg/kg/day
- Mycophenolate mofetil 2-3 g/day (ILD preference)
- Tacrolimus 0.05-0.1 mg/kg BID (ILD)

**Refractory Disease:**
- IVIG 2 g/kg over 2-5 days, monthly
- Rituximab 1 g x 2 doses (2 weeks apart) or 375 mg/m² weekly x 4
- Cyclophosphamide for severe ILD

**IBM:**
- Poor response to immunosuppression
- Exercise therapy mainstay
- Consider IVIG (limited benefit)`,
      keyTerms: [
        { term: 'IMNM', definition: 'Immune-mediated necrotizing myopathy; severe weakness without inflammation, anti-SRP or anti-HMGCR positive' },
        { term: 'perifascicular atrophy', definition: 'Muscle fiber atrophy at edge of fascicle; characteristic of DM' },
        { term: 'rimmed vacuoles', definition: 'Vacuoles with granular material; hallmark of inclusion body myositis' },
        { term: 'amyopathic DM', definition: 'Dermatomyositis with skin findings but minimal or no muscle involvement' },
        { term: 'MHC-I', definition: 'Major histocompatibility complex class I; abnormally expressed on myofibers in IIM' },
      ],
      clinicalNotes: 'Check anti-HMGCR in statin-exposed patients with myositis. Screen for cancer in DM (especially anti-TIF1-γ positive). Anti-MDA5 positive patients need aggressive ILD screening. IBM often misdiagnosed as PM - look for distal/asymmetric weakness and finger flexor involvement.',
    },
    4: {
      level: 4,
      summary: 'Advanced IIM management incorporates myositis-specific antibody phenotyping, cancer screening protocols, ILD treatment strategies, and biologic therapies for refractory disease while managing treatment complications.',
      explanation: `## Antibody-Guided Management

**Anti-TIF1-γ Positive DM:**
- Age-appropriate cancer screening
- CT chest/abdomen/pelvis
- Pelvic US/CA-125 (women)
- Mammogram/breast MRI
- Consider PET/CT for occult malignancy
- Repeat screening for 3-5 years

**Anti-MDA5 Positive:**
- Aggressive ILD screening (HRCT)
- Monitor for rapidly progressive ILD
- Consider early combination immunosuppression
- High mortality - low threshold for ICU care

**Anti-Jo-1 Positive:**
- Monitor for antisynthetase syndrome features
- Serial PFTs/DLCO for ILD
- Aggressive treatment of ILD
- Consider mechanic\'s hand treatment

**Anti-HMGCR Positive (IMNM):**
- Check statin exposure
- Very high CK levels
- May need aggressive immunosuppression
- IVIG often effective
- Consider statin rechallenge to confirm (if safe)

**Anti-SRP Positive (IMNM):**
- Severe proximal weakness
- Dysphagia common
- Poor response to steroids alone
- Combination therapy often needed

## Interstitial Lung Disease Management

**ILD Assessment:**
- Baseline HRCT and PFTs with DLCO
- Serial PFTs every 3-6 months
- DLCO most sensitive for early ILD

**ILD Treatment:**
- Mycophenolate mofetil first-line
- Tacrolimus alternative
- Cyclophosphamide for severe/progressive ILD
- Rituximab for refractory disease
- Nintedanib (antifibrotic) for progressive fibrosis

**Anti-MDA5 RP-ILD:**
- Combination: Steroids + cyclophosphamide + calcineurin inhibitor
- Consider rituximab early
- Plasma exchange for rapidly progressive
- ECMO support in selected cases

## Refractory Myositis

**Definition:**
- Inadequate response to steroids + one steroid-sparing agent
- Persistent functional impairment
- Rising CK despite therapy

**Approach:**
- Re-evaluate diagnosis (IBM, metabolic myopathy, dystrophy)
- Assess adherence
- Exclude infectious mimics
- Consider combination therapy
- Biologic therapy

**Biologic Options:**
- Rituximab: B-cell depletion
  - Better for MSAs, antisynthetase
  - Clinical trial data mixed
  - Real-world benefit in subsets

- Abatacept: T-cell costimulation blockade
  - Some benefit in DM/PM
  - May help refractory disease

- JAK inhibitors:
  - Tofacitinib, ruxolitinib
  - Type I IFN-driven disease
  - Emerging data

**IVIG:**
- 2 g/kg divided over 2-5 days
- Repeat every 4-8 weeks
- Especially useful for dysphagia
- Expensive, access issues

## Cancer Screening Protocol

**At Diagnosis:**
- Comprehensive history and physical
- Age-appropriate screening
- CT chest/abdomen/pelvis
- Mammogram/breast MRI
- Pelvic ultrasound + CA-125
- PSA for men
- Consider PET/CT

**Ongoing:**
- Repeat screening every 6-12 months for 3-5 years
- Low threshold for investigating new symptoms
- Patient education on cancer warning signs

## Extramuscular Manifestations

**Dysphagia Management:**
- Speech pathology evaluation
- Modified barium swallow
- Esophageal manometry
- PPIs for reflux component
- Treat underlying myositis aggressively
- Consider feeding tube for severe cases

**Calcinosis:**
- Diltiazem may help
- Surgical excision for symptomatic deposits
- Bisphosphonates (investigational)
- IVIG (reports of benefit)

**Skin Disease:**
- Strict sun protection
- Topical steroids
- Hydroxychloroquine
- Methotrexate (for skin)
- IVIG for refractory skin disease

## Juvenile Myositis
- Similar to adult disease
- JDM most common
- Higher risk of calcinosis
- Aggressive treatment to prevent damage
- Growth considerations`,
      keyTerms: [
        { term: 'RP-ILD', definition: 'Rapidly progressive interstitial lung disease; high mortality, especially in anti-MDA5 positive patients' },
        { term: 'MSA', definition: 'Myositis-specific antibodies; help define clinical phenotypes and prognosis' },
        { term: 'JDM', definition: 'Juvenile dermatomyositis; pediatric form with higher calcinosis risk' },
      ],
      clinicalNotes: 'Anti-MDA5 RP-ILD has >50% mortality - requires early aggressive combination therapy. Always screen for cancer in adult DM, especially with anti-TIF1-γ or anti-NXP2. IBM should be considered when distal/asymmetric weakness, finger flexor involvement, or poor treatment response.',
    },
    5: {
      level: 5,
      summary: 'Contemporary myositis care integrates myositis-specific antibody phenotyping, novel biologic and targeted therapies, cancer surveillance protocols, and precision medicine approaches while addressing long-term outcomes and quality of life.',
      explanation: `## Precision Medicine in Myositis

**Antibody-Directed Therapy:**
- Anti-TIF1-γ: Enhanced cancer surveillance
- Anti-MDA5: Early aggressive ILD treatment
- Anti-Jo-1: Antisynthetase protocol
- Anti-HMGCR: Statin cessation + immunosuppression
- Anti-SRP: Combination therapy approach

**Biomarker Development:**
- Type I interferon signature
- MyomiR profiling (muscle-specific miRNAs)
- CK trends for monitoring
- Novel antibody discovery

## Emerging Therapies

**Novel Biologics:**
- Anifrolumab: Anti-IFNAR for DM
- Ravulizumab: C5 inhibitor (complement-mediated)
- Fostamatinib: Syk inhibitor
- Baricitinib: JAK1/2 inhibitor

**Targeted Therapies:**
- Anti-BLyS (belimumab): Investigational
- Anti-CD20 alternatives: Obinutuzumab
- Anti-CD19: Investigational

**Cellular Therapies:**
- Autologous stem cell transplant (refractory)
- Regulatory T cell therapy
- Mesenchymal stem cells

## Dermatomyositis Update

**Pathogenesis Insights:**
- Type I interferon central to DM
- MDA5 pathway activation
- Complement-mediated microvascular injury
- B-cell and plasmablast activation

**Skin-Directed Therapy:**
- Topical ruxolitinib (JAK inhibitor)
- Low-dose naltrexone (investigational)
- IVIG for refractory skin disease
- Apremilast for recalcitrant rash

## Cancer-Associated Myositis

**Risk Stratification:**
- Anti-TIF1-γ: Highest risk (OR ~10-20)
- Anti-NXP2: High risk
- Older age, male sex
- Smoking history
- Family history of cancer

**Screening Protocols:**
- Age-appropriate baseline
- Enhanced imaging (CT or PET/CT)
- Organ-specific screening based on epidemiology
- Repeat screening for 3-5 years
- Patient education on warning signs

**Management:**
- Treat underlying cancer
- Myositis may improve with cancer treatment
- Continue immunosuppression for symptom control

## Antisynthetase Syndrome Updates

**Spectrum of Disease:**
- Anti-Jo-1: Classic phenotype
- Non-Jo-1 antisynthetase: More ILD, less myositis
- PL-7, PL-12: Severe ILD
- EJ: Severe myositis

**ILD Patterns:**
- Anti-Jo-1: NSIP, OP
- Anti-MDA5: DAD, DAOP (rapid progression)
- Anti-PL-7/12: Fibrotic NSIP

**Treatment Algorithms:**
- Early combination therapy for ILD
- Mycophenolate or cyclophosphamide backbone
- Consider rituximab early
- Calcineurin inhibitors for refractory ILD

## Immune-Mediated Necrotizing Myopathy

**Pathogenesis:**
- Anti-SRP: Direct inhibition of signal recognition particle
- Anti-HMGCR: Statin-triggered autoimmunity

**Clinical Features:**
- Very high CK (often >10,000)
- Severe proximal weakness
- Minimal pain
- Poor response to steroids alone

**Treatment:**
- Early aggressive immunosuppression
- IVIG highly effective
- Combination: Steroids + IVIG + MMF/azathioprine
- Rituximab for refractory

## Inclusion Body Myositis

**Diagnostic Update:**
- Limited response to immunosuppression is characteristic
- Can coexist with other autoimmune disease
- Autoantibody to cytosolic 5'-nucleotidase 1A (cN1A)
- Consider MRI for pattern recognition

**Management:**
- Exercise therapy (mainstay)
- Fall prevention
- Dysphagia monitoring
- Limited role for immunosuppression
- Futile to give aggressive immunosuppression

## Pregnancy Considerations

**Pre-conception:**
- Achieve quiescent disease before pregnancy
- Review medication safety
- Counsel on risks

**Safe Medications:**
- Prednisone
- Azathioprine
- Hydroxychloroquine
- IVIG (if needed)
- Tacrolimus (caution)

**Avoid:**
- Methotrexate (teratogenic)
- Mycophenolate (teratogenic)
- Cyclophosphamide

## Long-Term Outcomes

**Damage Accrual:**
- Calcinosis (juvenile)
- Joint contractures
- Muscle atrophy
- Persistent weakness
- ILD fibrosis
- Quality of life impact

**Rehabilitation:**
- Physical therapy core
- Occupational therapy
- Speech therapy for dysphagia
- Psychological support`,
      keyTerms: [
        { term: 'cN1A', definition: 'Cytosolic 5\'-nucleotidase 1A autoantibody; associated with inclusion body myositis' },
        { term: 'myomiR', definition: 'Muscle-specific microRNAs as biomarkers for disease activity' },
        { term: 'DAOP', definition: 'Diffuse alveolar opacities pattern; seen in anti-MDA5 ILD' },
      ],
      clinicalNotes: 'Board pearls: Anti-Mi-2 = classic DM, good prognosis. Anti-TIF1-γ = cancer-associated DM. Anti-Jo-1 = antisynthetase syndrome (myositis + ILD + fever + arthritis + mechanic\'s hands). Anti-MDA5 = amyopathic DM with severe ILD. Anti-HMGCR = statin-associated necrotizing myopathy. IBM = distal/asymmetric, poor treatment response. Always screen for cancer in DM.',
    },
  },

  media: [
    {
      id: 'gottron-papules',
      type: 'image',
      filename: 'gottron-papules-dermatomyositis.jpg',
      title: 'Gottron Papules in Dermatomyositis',
      description: 'Violaceous scaly papules over MCP and PIP joints',
    },
    {
      id: 'heliotrope-rash',
      type: 'image',
      filename: 'heliotrope-rash-dermatomyositis.jpg',
      title: 'Heliotrope Rash in Dermatomyositis',
      description: 'Violaceous periorbital edema and rash',
    },
  ],
  citations: [
    {
      id: 'lundberg-2021',
      type: 'article',
      title: '2017 European League Against Rheumatism/American College of Rheumatology classification criteria for adult and juvenile idiopathic inflammatory myopathies',
      authors: ['Lundberg IE', 'Tjarnlund A', 'Katsarou O', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2017-211468',
    },
    {
      id: 'solomon-2020',
      type: 'article',
      title: '2020 European League Against Rheumatism/American College of Rheumatology classification criteria for idiopathic inflammatory myopathies',
      authors: ['Solomon J', 'Aggarwal R', 'Lniciati M', 'et al.'],
      source: 'Arthritis & Rheumatology',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune', 'integumentary', 'pulmonary'],
    topics: ['rheumatology', 'autoimmunity', 'neuromuscular', 'dermatology'],
    keywords: ['myositis', 'dermatomyositis', 'polymyositis', 'inclusion body myositis', 'antisynthetase', 'anti-Jo-1', 'Gottron papules', 'heliotrope rash'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default myositisContent;
