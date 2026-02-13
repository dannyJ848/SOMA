/**
 * Sjogren Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const sjogrensContent: EducationalContent = {
  id: 'condition-sjogren-syndrome',
  type: 'condition',
  name: 'Sjogren Syndrome',
  nameEs: 'Síndrome de Sjögren',
  alternateNames: ['Sjogren\'s Syndrome', 'Sicca Syndrome', 'Sjogren\'s Disease'],
  hpoId: 'HP:0002802',

  levels: {
    1: {
      level: 1,
      summary: 'Sjogren syndrome is an autoimmune disease that mainly causes dry eyes and dry mouth because your immune system attacks the glands that make tears and saliva.',
      explanation: `In Sjogren syndrome, your body\'s immune system attacks moisture-producing glands, especially the tear glands and salivary glands. This causes significant dryness that affects daily comfort.

**Main symptoms:**
- Dry eyes (gritty, sandy feeling)
- Dry mouth (difficulty swallowing, speaking)
- Need to drink water to swallow food
- Increased tooth decay and cavities
- Dry skin or dry cough

**Other possible symptoms:**
- Joint pain
- Fatigue
- Swollen salivary glands

**Who gets Sjogren syndrome:**
- Most common in women (90% of cases)
- Usually diagnosed after age 40
- Can occur alone (primary) or with other autoimmune diseases (secondary)

**What helps:**
- Artificial tears for dry eyes
- Saliva substitutes, sugar-free gum
- Good dental hygiene (very important)
- Prescription medications to increase moisture
- Regular dental visits`,
      keyTerms: [
        { term: 'sicca', definition: 'Medical term for dryness, especially of eyes and mouth' },
        { term: 'salivary glands', definition: 'Glands that produce saliva; located in mouth and cheeks' },
        { term: 'tear glands', definition: 'Glands (lacrimal) that produce tears to keep eyes moist' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
      ],
      analogies: [
        'Sjogren syndrome is like a sprinkler system that\'s been shut off - your body can\'t produce the moisture it needs.',
        'Imagine your eyes and mouth are like a desert because the "rivers" (salivary and tear glands) have dried up.',
      ],
      examples: [
        'A 50-year-old woman needs to carry a water bottle everywhere because her mouth is so dry she can\'t speak without sipping water.',
        'Someone uses artificial tears every hour because their eyes feel like they have sand in them.',
        'A patient develops several new cavities despite brushing regularly due to lack of protective saliva.',
      ],
      patientCounselingPoints: [
        'Use artificial tears regularly, even when your eyes don\'t feel dry - prevention is better than treating dry eyes',
        'Practice excellent dental hygiene - see your dentist every 3-4 months',
        'Use sugar-free gum or candies to stimulate saliva production',
        'Use a humidifier at home, especially in your bedroom',
        'Avoid medications that can worsen dry mouth (antihistamines, decongestants) if possible',
      ],
    },
    2: {
      level: 2,
      summary: 'Sjogren syndrome is a systemic autoimmune disorder characterized by lymphocytic infiltration of exocrine glands causing sicca symptoms, with potential extraglandular manifestations.',
      explanation: `## Epidemiology
- Female:male ratio ~9:1
- Peak onset 40-60 years
- Second most common autoimmune rheumatic disease
- Primary (isolated) or secondary (with other autoimmune disease)

## Clinical Features

**Glandular Manifestations:**
- **Ocular:** Dry eyes, foreign body sensation, photophobia, blurred vision
- **Oral:** Xerostomia, dysphagia, altered taste, dental caries, oral candidiasis
- **Other:** Dry nose, dry skin, dry vagina

**Extraglandular Manifestations (30-50%):**
- Arthralgias/arthritis (non-erosive)
- Fatigue (common and debilitating)
- Cutaneous: Vasculitis, purpura, annular erythema
- Pulmonary: Interstitial lung disease
- Renal: Tubulointerstitial nephritis, distal RTA
- Neurologic: Peripheral neuropathy, CNS involvement

**Lymphoma Risk:**
- 5-10% develop B-cell lymphoma
- Watch for persistent salivary gland enlargement
- New systemic symptoms warrant evaluation

## Diagnostic Criteria (2016 ACR/EULAR)
**Weighted Score System:**

| Item | Points |
|------|--------|
| Labial salivary gland biopsy with focal lymphocytic sialadenitis | 3 |
| Anti-SSA/Ro positive | 3 |
| Ocular staining score ≥5 | 1 |
| Schirmer test ≤5 mm/5 min (each eye) | 1 |
| Unstimulated whole saliva flow ≤0.1 mL/min | 1 |
| OSS ≤4 or Schirmer ≥5 (not both) | 1 |

Score ≥4 = definite Sjogren syndrome

## Laboratory Findings
**Autoantibodies:**
- Anti-SSA/Ro (60-70%): Sensitive
- Anti-SSB/La (30-40%): More specific
- ANA positive (70-80%)
- RF positive (50-60%)

**Inflammatory markers:**
- Elevated ESR/CRP common
- Hypergammaglobulinemia

## Treatment Principles

**Symptomatic Relief:**
- Artificial tears, lubricating ointments
- Saliva substitutes, pilocarpine, cevimeline
- Meticulous dental care

**Systemic Therapy:**
- Hydroxychloroquine for fatigue, arthralgias
- Methotrexate for arthritis
- Steroids for severe systemic disease
- Rituximab for severe extraglandular disease

**Monitoring:**
- Regular ophthalmologic exams
- Dental surveillance
- Monitor for lymphoma`,
      keyTerms: [
        { term: 'xerostomia', definition: 'Dry mouth resulting from decreased salivary flow' },
        { term: 'keratoconjunctivitis sicca', definition: 'Dry inflammation of the cornea and conjunctiva (dry eyes)' },
        { term: 'Schirmer test', definition: 'Test measuring tear production; filter paper strip placed in eyelid for 5 minutes' },
        { term: 'parotitis', definition: 'Inflammation of the parotid salivary gland, causing swelling' },
        { term: 'anti-SSA/Ro', definition: 'Autoantibody associated with Sjogren syndrome, neonatal lupus, and SLE' },
      ],
      analogies: [
        'The focal lymphocytic sialadenitis seen on biopsy is like "islands" of immune cells replacing normal gland tissue.',
      ],
      examples: [
        'A patient with anti-SSA positive, positive ocular staining, and Schirmer test <5 mm/5 min meets Sjogren criteria (4 points).',
        'Rapid enlargement of a salivary gland in Sjogren requires prompt evaluation to exclude lymphoma.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sjogren syndrome involves lymphocytic infiltration of exocrine glands with autoantibody production (anti-SSA/SSB), causing sicca symptoms and systemic manifestations requiring multidisciplinary management.',
      explanation: `## Pathophysiology

**Immunopathogenesis:**
- CD4+ T-cell driven process
- B-cell hyperactivity and autoantibody production
- Epithelial cells active participants (autoimmune epithelitis)
- Type I interferon signature
- Genetic: HLA-DR3, HLA-DQ2 associations

**Histopathology:**
- Lymphocytic infiltration of exocrine glands
- Formation of lymphoepithelial lesions
- Germinal center-like structures
- Replacement of acinar tissue

**Focus Score:**
- Biopsy of minor salivary glands
- Count lymphocytic foci (>50 lymphocytes)
- Focus score ≥1 = 1 focus per 4 mm²
- Score ≥3 significant

## Classification Criteria (2016 ACR/EULAR)

**Exclusion Criteria:**
- Prior head/neck radiation
- Hepatitis C infection
- HIV
- Sarcoidosis
- Amyloidosis
- Graft-versus-host disease
- IgG4-related disease

**Positive Criteria ≥4:**
- Labial salivary gland biopsy with focus score ≥1 (3 pts)
- Anti-SSA/Ro positive (3 pts)
- Ocular staining score ≥5 (1 pt)
- Schirmer's test ≤5 mm/5 min (1 pt)
- Unstimulated salivary flow ≤0.1 mL/min (1 pt)

## Systemic Manifestations

**Rheumatologic:**
- Non-erosive polyarthritis (30-50%)
- Overlap with RA, SLE, SSc

**Cutaneous:**
- Palpable purpura (cryoglobulinemic)
- Annular erythema (Asian patients)
- Vasculitis

**Pulmonary:**
- Interstitial lung disease (NSIP, UIP)
- Airway dryness, bronchiectasis
- Lymphocytic interstitial pneumonitis

**Renal:**
- Tubulointerstitial nephritis (most common)
- Distal renal tubular acidosis
- Nephrolithiasis, nephrocalcinosis
- Glomerulonephritis (cryoglobulinemic)

**Neurologic:**
- Peripheral neuropathy (sensory, axonal)
- Trigeminal neuropathy
- CNS involvement (rare)

**Hematologic:**
- Cytopenias
- Cryoglobulinemia
- Monoclonal gammopathy

## Treatment Strategies

**Ocular:**
- Artificial tears (preservative-free)
- Lacrisert (cellulose insert)
- Punctal plugs/cautery
- Cyclosporine ophthalmic drops
- Lifitegrast

**Oral:**
- Sugar-free gum, candies
- Saliva substitutes
- Pilocarpine 5 mg TID
- Cevimeline 30 mg TID
- Meticulous dental hygiene

**Systemic:**
- Hydroxychloroquine (fatigue, arthralgias)
- Low-dose steroids
- Methotrexate, azathioprine
- Mycophenolate for severe organ involvement
- IVIG for neuropathy
- Rituximab for cryoglobulinemia, vasculitis

**Contraindications to Secretagogues:**
- Uncontrolled asthma (pilocarpine)
- Narrow-angle glaucoma
- Acute iritis
- Significant cardiovascular disease

## Lymphoma Surveillance
- Risk: 10-44x general population
- Marginal zone B-cell lymphoma most common
- Warning signs: Persistent gland enlargement, new systemic symptoms, cryoglobulinemia, low C4
- No consensus on optimal screening`,
      keyTerms: [
        { term: 'focus score', definition: 'Number of lymphocytic foci per 4 mm² of minor salivary gland tissue; ≥1 is abnormal' },
        { term: 'lymphoepithelial lesion', definition: 'Ductal epithelial damage with lymphocytic infiltration characteristic of Sjogren' },
        { term: 'NSIP', definition: 'Nonspecific interstitial pneumonia; common pattern of Sjogren-associated ILD' },
        { term: 'pilocarpine', definition: 'Cholinergic agonist that stimulates residual salivary and tear production' },
      ],
      clinicalNotes: 'Schirmer test: <5 mm = abnormal, 5-10 mm = borderline. Anti-SSA can be positive with negative ANA - check specifically if clinical suspicion. Consider lymphoma in persistently enlarged salivary glands. Pilocarpine and cevimeline require functional gland tissue.',
    },
    4: {
      level: 4,
      summary: 'Advanced Sjogren management encompasses glandular and systemic treatment paradigms, lymphoma risk stratification, management of overlapping autoimmune conditions, and addressing quality of life impacts.',
      explanation: `## Disease Phenotypes

**Glandular-Dominant:**
- Predominant sicca symptoms
- Minimal systemic involvement
- Focus on symptomatic therapies

**Systemic-Dominant:**
- Extraglandular manifestations
- Higher inflammatory markers
- Cryoglobulinemia, vasculitis
- More aggressive immunosuppression

**Overlap Syndrome:**
- Sjogren + RA (secondary)
- Sjogren + SLE
- Sjogren + SSc (MCTD-like)
- Features of multiple diseases

## Lymphoma Risk Stratification

**High-risk features:**
- Low C4 complement
- Cryoglobulinemia
- Persistent salivary gland enlargement
- Skin vasculitis
- Peripheral neuropathy
- Low monoclonal IgM

**Monitoring strategy:**
- Clinical exam for gland asymmetry
- CBC, CMP, ESR/CRP regularly
- Serum protein electrophoresis
- Immunofixation if abnormal SPEP
- Low threshold for imaging persistent symptoms
- PET/CT for suspected transformation

## Difficult Symptoms Management

**Refractory Dry Eyes:**
- Combination therapies
- Serum tears (autologous)
- Amniotic membrane drops
- Scleral lenses
- Consider punctal cautery if plugs fail

**Refractory Dry Mouth:**
- Combination secretagogues
- Custom fluoride trays
- Antifungal prophylaxis
- Manage oral candidiasis aggressively

**Fatigue:**
- Exclude hypothyroidism, anemia, depression
- Exercise programs
- Cognitive behavioral therapy
- Hydroxychloroquine trial
- Consider modafinil (off-label)

**Arthralgias:**
- Distinguish from inflammatory arthritis
- NSAIDs
- HCQ first-line
- Low-dose steroids for flares
- Methotrexate if HCQ insufficient

## Systemic Therapy Guidelines

**Indications for Immunosuppression:**
- Severe systemic involvement
- Vasculitis, neuropathy
- Glomerulonephritis
- Severe ILD
- Debilitating fatigue/arthritis

**Agents:**
- MMF: ILD, renal, systemic disease
- Azathioprine: Alternative to MMF
- Cyclophosphamide: Severe organ-threatening disease
- Rituximab: Cryoglobulinemia, vasculitis, ILD
- Belimumab: Investigational

## Reproductive Health
- Anti-SSA/Ro crosses placenta
- Risk of neonatal lupus (~2%)
- Risk of congenital heart block (~1-2%)
- Monitor fetus: ECG at 16-28 weeks
- Counsel about risks pre-conception

## Quality of Life
- Sjogren significantly impairs QoL
- Fatigue and pain are major contributors
- Vaginal dryness: Common but under-addressed
- Sexual health counseling important
- Depression screening`,
      keyTerms: [
        { term: 'serum tears', definition: 'Autologous eye drops made from patient\'s own blood serum for severe dry eye' },
        { term: 'scleral lenses', definition: 'Large-diameter contact lenses that bathe cornea in fluid reservoir for severe dry eye' },
        { term: 'cryoglobulinemia', definition: 'Presence of cryoglobulins that precipitate in cold; associated with vasculitis in Sjogren' },
      ],
      clinicalNotes: 'Anti-SSA/Ro mothers require fetal echocardiography monitoring for congenital heart block. Consider CT or MRI for persistent parotid enlargement to exclude lymphoma. Treat oral candidiasis before using secretagogues.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Sjogren care incorporates emerging biologic therapies, refined lymphoma surveillance protocols, molecular phenotyping, and novel symptom management strategies while addressing patient-reported outcomes and comorbidity optimization.',
      explanation: `## Precision Medicine Approaches

**Molecular Phenotypes:**
- Type I interferon-high: Consider anifrolumab
- B-cell signature: Rituximab, belimumab
- Germinal center formation: Higher lymphoma risk

**Biomarker Development:**
- Salivary proteomics
- Tear film biomarkers
- Gene expression signatures
- MicroRNA profiles

## Emerging Therapies

**Biologics:**
- Rituximab: Mixed trial results, clinical benefit in subsets
- Belimumab: Ongoing trials
- Abatacept: Some benefit in small studies
- Anifrolumab: Under investigation
- Anti-CD20: Obinutuzumab trials

**Targeted Synthetic:**
- JAK inhibitors: Tofacitinib, filgotinib
- TYK2 inhibitors

**Cellular Therapies:**
- Mesenchymal stem cells (investigational)
- Regulatory T cell therapy

## Lymphoma Prevention and Early Detection

**Pathogenesis of Lymphomagenesis:**
- Chronic antigenic stimulation
- Germinal center-like structures
- B-cell receptor repertoire abnormalities
- BAFF overexpression

**Detection Strategies:**
- Ultrasound surveillance of salivary glands
- Salivary gland elastography
- Serum free light chains
- PET/CT for suspected transformation
- Early biopsy of suspicious lesions

**Management of MALT Lymphoma:**
- Stage I: Radiotherapy or surgery
- Advanced stages: Rituximab-based
- May improve with Sjogren treatment

## Novel Symptom Management

**Xerostomia Management:**
- Gene therapy (aquaporin water channels)
- Stem cell regeneration
- Electroacupuncture
- Transcranial nerve stimulation

**Ocular Surface Disease:**
- New lubricant formulations
- Anti-inflammatory drops
- Lacrimal nerve stimulation
- Secretagogue combinations

**Systemic Symptoms:**
- Fatigue management protocols
- Fibromyalgia overlap treatment
- Cognitive dysfunction strategies

## Pregnancy Considerations

**Pre-conception Planning:**
- Assess disease activity
- Review medication safety
- Anti-SSA/Ro counseling
- Baseline fetal echo

**Safe Medications:**
- HCQ throughout pregnancy
- Azathioprine
- Prednisone
- Avoid MMF, cyclophosphamide, methotrexate

**Fetal Monitoring:**
- Weekly ECG 16-28 weeks
- Fetal echocardiography
- Monitor for heart block
- Post-natal pediatric follow-up

## Comorbidity Management
- Accelerated atherosclerosis
- Cardiovascular risk reduction
- Bone health (steroid-sparing)
- Infection prevention
- Vaccination strategies
- Depression/anxiety screening
- Sleep disorder evaluation

## Research Directions
- Microbiome modulation
- Tolerance induction strategies
- Biomarker-guided therapy
- Quality of outcome measures
- Telemedicine for symptom monitoring`,
      keyTerms: [
        { term: 'MALT lymphoma', definition: 'Mucosa-associated lymphoid tissue lymphoma; most common lymphoma type in Sjogren' },
        { term: 'BAFF', definition: 'B-cell activating factor; overexpressed in Sjogren, promotes B-cell survival' },
        { term: 'elastography', definition: 'Ultrasound technique measuring tissue stiffness; helps detect malignancy in salivary glands' },
      ],
      clinicalNotes: 'Board pearls: Anti-SSA more sensitive, anti-SSB more specific. Lymphoma risk 5-10%. Focal lymphocytic sialadenitis with focus score ≥1 on lip biopsy is diagnostic. Consider lymphoma with unilateral gland enlargement. Anti-SSA mothers need fetal echo for congenital heart block.',
    },
  },

  media: [
    {
      id: 'sjogren-biopsy',
      type: 'image',
      filename: 'minor-salivary-gland-biopsy.jpg',
      title: 'Minor Salivary Gland Biopsy in Sjogren',
      description: 'Lymphocytic infiltration with focus scoring',
    },
  ],
  citations: [
    {
      id: 'shiboski-2017',
      type: 'article',
      title: '2016 American College of Rheumatology/European League Against Rheumatism classification criteria for primary Sjogren syndrome',
      authors: ['Shiboski CH', 'Shiboski SC', 'Seror R', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2016-210571',
    },
    {
      id: 'qin-2021',
      type: 'article',
      title: 'Management of Sjogren syndrome: 2021 guidelines',
      authors: ['Qin B', 'Wang J', 'Liang Z', 'et al.'],
      source: 'Seminars in Arthritis and Rheumatism',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['immune', 'exocrine', 'nervous', 'rheumatologic'],
    topics: ['rheumatology', 'autoimmunity', 'ophthalmology', 'oral medicine'],
    keywords: ['sjogren', 'sicca', 'dry eyes', 'dry mouth', 'anti-SSA', 'anti-SSB', 'xerostomia', 'keratoconjunctivitis sicca'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sjogrensContent;
