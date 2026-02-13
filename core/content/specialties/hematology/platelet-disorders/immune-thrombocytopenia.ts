/**
 * Immune Thrombocytopenia - Comprehensive Educational Content
 *
 * An acquired autoimmune disorder characterized by isolated
 * thrombocytopenia due to platelet destruction and impaired production.
 */

import { EducationalContent } from '../../../types';

export const immuneThrombocytopenia: EducationalContent = {
  id: 'condition-immune-thrombocytopenia',
  type: 'condition',
  name: 'Immune Thrombocytopenia',
  alternateNames: ['ITP', 'Immune thrombocytopenic purpura', 'Idiopathic thrombocytopenic purpura'],

  levels: {
    1: {
      level: 1,
      summary: 'Immune thrombocytopenia (ITP) is a condition where the immune system destroys platelets, causing low platelet counts and bleeding symptoms.',
      explanation: `ITP is a condition where your body attacks its own platelets.

**What Happens:**
- The immune system makes antibodies against platelets
- These antibodies mark platelets for destruction
- Platelet count drops, making bleeding more likely

**Common Signs:**
- Easy bruising
- Tiny red/purple dots on skin (petechiae)
- Nosebleeds
- Bleeding gums
- Heavy periods

**Who Gets It:**
- Children: Often after viral illness, usually resolves
- Adults: More chronic, usually needs treatment

**Treatment:**
- Many people with mild ITP do not need treatment
- Steroids are first treatment when needed
- Other medicines help if steroids do not work
- Removing the spleen is sometimes needed`,
      keyTerms: [
        { term: 'platelets', definition: 'Small blood cells that help stop bleeding by forming clots' },
        { term: 'petechiae', definition: 'Tiny red or purple spots from bleeding under the skin', pronunciation: 'peh-TEE-kee-eye' },
        { term: 'immune system', definition: 'The bodys defense system that fights germs and disease' },
      ],
      analogies: [
        'In ITP, the immune system is like an overactive security guard who mistakes friendly employees (platelets) for intruders and removes them.',
      ],
      examples: [
        'A 4-year-old develops bruises and tiny red spots all over his body two weeks after having a cold. Blood tests show very low platelets, and he is diagnosed with ITP.',
      ],
    },
    2: {
      level: 2,
      summary: 'ITP is an autoimmune disorder with antiplatelet antibodies causing splenic destruction and impaired production, managed with corticosteroids, IVIG, and second-line agents.',
      explanation: `ITP is characterized by isolated thrombocytopenia (<100,000/mcL) without other causes.

**Pathophysiology:**
- Antiplatelet antibodies (usually IgG against GPIIb/IIIa or GPIb/IX)
- Antibody-coated platelets phagocytosed by splenic macrophages
- Megakaryocyte dysfunction (antibodies also affect production)
- Cytotoxic T cells contribute

**Classification:**
- Primary ITP: No identifiable cause
- Secondary ITP: Associated with other conditions (SLE, HIV, HCV, CLL)

**Phases:**
- Newly diagnosed: <3 months
- Persistent: 3-12 months
- Chronic: >12 months

**Clinical Features:**
- Mucocutaneous bleeding (petechiae, ecchymoses, epistaxis)
- Wet purpura (oral blood blisters) = more severe
- Rarely: Intracranial hemorrhage
- Splenomegaly ABSENT (if present, consider other diagnoses)

**Diagnosis:**
- Thrombocytopenia (<100,000/mcL)
- Normal WBC and RBC
- Normal peripheral smear (no schistocytes)
- Exclusion of other causes
- CBC, blood smear, HIV, HCV

**Treatment:**
- First line: Corticosteroids (prednisone 1mg/kg or dexamethasone pulses)
- IVIG for severe bleeding or emergent procedures
- Second line: Thrombopoietin receptor agonists, rituximab
- Splenectomy for refractory disease`,
      keyTerms: [
        { term: 'GPIIb/IIIa', definition: 'Platelet surface receptor; common target of antiplatelet antibodies in ITP' },
        { term: 'IVIG', definition: 'Intravenous immunoglobulin; rapidly raises platelet count temporarily' },
        { term: 'thrombopoietin receptor agonist', definition: 'Drugs that stimulate platelet production (romiplostim, eltrombopag)' },
        { term: 'wet purpura', definition: 'Oral blood blisters indicating more severe bleeding risk' },
      ],
      analogies: [
        'TPO receptor agonists are like hiring more workers (making more platelets) to compensate for the ones being unfairly fired (destroyed by antibodies).',
      ],
    },
    3: {
      level: 3,
      summary: 'ITP management requires distinguishing primary from secondary causes, risk-based treatment decisions, and understanding the expanding options for chronic disease.',
      explanation: `## Overview

ITP is a diagnosis of exclusion requiring thorough evaluation for secondary causes, particularly in adults.

## Epidemiology
- Incidence: 3/100,000 adults, 5/100,000 children
- Children: Peak age 2-5 years, often self-limited
- Adults: More common in women, usually chronic

## Pathophysiology

**Dual Mechanism:**
1. Increased destruction: FcR-mediated splenic phagocytosis
2. Decreased production: Antibody effects on megakaryocytes

**Antiplatelet Antibodies:**
- Target GPIIb/IIIa or GPIb/IX
- May be undetectable in 30-40%
- Sensitivity of testing limits utility

## Diagnosis

**Required Workup:**
- CBC with differential
- Peripheral blood smear (essential)
- Reticulocyte count (assess for hemolysis)
- HIV, HCV testing
- H. pylori testing (where prevalent)

**Consider:**
- ANA (if SLE features)
- Immunoglobulins (CVID)
- Bone marrow (if atypical features, older patients, before splenectomy)
- Direct antiglobulin test (Evans syndrome)

**Red Flags for Non-ITP:**
- Splenomegaly
- Lymphadenopathy
- Abnormal WBC/RBC
- Schistocytes (consider TTP)

## Treatment Algorithm

**Observation (Many Patients):**
- Platelet count >30,000 without bleeding
- Children: Most resolve spontaneously

**First-Line (When Needed):**
- Prednisone 1mg/kg/day x 2-4 weeks then taper
- OR Dexamethasone 40mg/day x 4 days (higher initial response)
- IVIG 1g/kg x 1-2 days (faster but temporary)
- Anti-D (if Rh+, spleen intact)

**Second-Line:**
| Option | Mechanism | Considerations |
|--------|-----------|----------------|
| Romiplostim | TPO-RA (SQ) | Weekly injection |
| Eltrombopag | TPO-RA (PO) | Liver monitoring |
| Avatrombopag | TPO-RA (PO) | Food requirement |
| Rituximab | CD20 depletion | Delayed response |
| Splenectomy | Remove destruction site | Surgical risk, infection |
| Fostamatinib | SYK inhibitor | Hypertension, GI |

## Special Situations

**Emergency Management:**
- Platelet transfusion (temporary, often ineffective)
- IVIG (fastest non-platelet option)
- IV methylprednisolone
- Aminocaproic acid/tranexamic acid

**Pregnancy:**
- Steroids and IVIG safe
- Avoid splenectomy if possible
- Consider TPO-RAs if severe (limited data)
- Monitor neonatal platelet count`,
      keyTerms: [
        { term: 'Evans syndrome', definition: 'ITP with concurrent autoimmune hemolytic anemia' },
        { term: 'romiplostim', definition: 'Peptibody TPO-RA given subcutaneously weekly' },
        { term: 'eltrombopag', definition: 'Oral small-molecule TPO-RA; requires liver monitoring' },
        { term: 'fostamatinib', definition: 'SYK inhibitor blocking FcR-mediated phagocytosis' },
      ],
      clinicalNotes: 'Splenomegaly in apparent ITP should prompt evaluation for other diagnoses (CLL, MDS, storage diseases). Always examine the smear.',
    },
    4: {
      level: 4,
      summary: 'ITP pathogenesis involves multiple immune mechanisms, with treatment selection guided by bleeding risk, treatment goals, and evolving evidence for TPO-RAs and novel agents.',
      explanation: `## Advanced Pathogenesis

**Immune Dysregulation:**
- Loss of B-cell tolerance → autoantibody production
- Defective Tregs
- Cytotoxic T cells directly kill platelets
- Complement may contribute

**Targets:**
- GPIIb/IIIa (most common)
- GPIb/IX
- GPIa/IIa
- Multiple glycoproteins (worse prognosis)

**Megakaryocyte Effects:**
- Antibodies bind megakaryocytes
- Impaired thrombopoiesis
- Explains why TPO levels often normal (paradoxical)

## Treatment Decision Making

**Factors Influencing Treatment:**
- Bleeding symptoms vs platelet count
- Patient preferences
- Comorbidities
- Cost and access
- Desire to avoid steroids

**TPO-RA Selection:**
| Factor | Romiplostim | Eltrombopag | Avatrombopag |
|--------|-------------|-------------|--------------|
| Route | SQ weekly | PO daily | PO daily |
| Food | N/A | Fasting | With food |
| Liver | No issue | Monitor | No issue |
| Response | Days-weeks | Days-weeks | Days-weeks |

**Splenectomy:**
- 60-70% long-term response
- Reserved after TPO-RA failure in most
- Vaccine before (pneumococcal, meningococcal, Hib)
- Consider laparoscopic approach

## Refractory Disease

**Definition:**
- Failed steroids + at least one second-line agent
- Or relapsed after splenectomy

**Options:**
- TPO-RA if not tried
- Rituximab (30-40% durable response)
- Fostamatinib
- Combination therapy
- Immunosuppressives (azathioprine, MMF, cyclosporine)
- Consider underlying cause

## Monitoring and Outcomes

**Response Definitions:**
- Complete response: Platelets ≥100,000
- Response: Platelets 30,000-100,000 and >2x baseline
- No response: <30,000 or <2x increase

**Long-Term Considerations:**
- TPO-RAs may be continued indefinitely
- Attempt taper if stable for 6+ months
- Some achieve sustained remission off therapy
- Bone marrow fibrosis with TPO-RAs (monitor)

## Secondary ITP

**Common Associations:**
| Condition | Approach |
|-----------|----------|
| H. pylori | Treat infection |
| HCV | Treat HCV |
| HIV | ART may improve platelets |
| SLE | Treat lupus |
| CLL | Treat CLL if indicated |
| CVID | IVIG replacement |`,
      keyTerms: [
        { term: 'Tregs', definition: 'Regulatory T cells; defective in ITP contributing to loss of tolerance' },
        { term: 'TPO-RA', definition: 'Thrombopoietin receptor agonist; stimulates platelet production' },
        { term: 'bone marrow fibrosis', definition: 'Potential complication of long-term TPO-RA use; monitor clinically' },
        { term: 'refractory ITP', definition: 'Failure of corticosteroids and at least one second-line therapy' },
      ],
      clinicalNotes: 'Eltrombopag interacts with polyvalent cations (calcium, iron); take on empty stomach 2 hours before or 4 hours after food/supplements.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ITP management integrates personalized treatment selection, emerging therapies targeting specific immune mechanisms, and quality-of-life considerations.',
      explanation: `## Immunopathogenesis Details

**B-Cell Compartment:**
- Autoreactive B cells escape tolerance
- Splenic germinal centers produce autoantibodies
- B-cell activating factor (BAFF) elevated

**T-Cell Abnormalities:**
- CD4+ Th1/Th17 skewing
- Treg deficiency/dysfunction
- Cytotoxic CD8+ T cells directly lyse platelets
- Not captured by standard antibody testing

**Fc Receptor Polymorphisms:**
- FcγRIIA, FcγRIIIA variants affect destruction
- Potential pharmacogenomic marker

## Treatment Advances

**Efgartigimod:**
- FcRn inhibitor
- Reduces IgG recycling
- Decreases autoantibody levels
- Phase 3 data in ITP

**BTK Inhibitors:**
- Riley-Ibrutinib study in ITP
- Reduce B-cell activation
- Investigational

**Complement Inhibition:**
- Sutimlimab (anti-C1s)
- Investigational in ITP

**Neonatal Fc Receptor Targeting:**
- Rozanolixizumab
- Novel IgG reduction approach

## Personalized Medicine Approach

**Factors in Treatment Selection:**
- Bleeding phenotype vs platelet count
- Fatigue (common symptom affecting QoL)
- Prior treatments and responses
- Patient lifestyle (travel, activity)
- Cost/insurance considerations

**Biomarkers Under Investigation:**
- Antiplatelet antibody specificity
- Fc receptor genotypes
- T-cell signatures
- Cytokine profiles

## Quality of Life

**Beyond Platelet Count:**
- Fatigue affects majority
- Anxiety about bleeding
- Treatment burden
- Cognitive effects of steroids

**Patient-Reported Outcomes:**
- ITP-PAQ (Patient Assessment Questionnaire)
- Should inform treatment decisions

## Special Populations

**Pediatric ITP:**
- 80% spontaneous resolution
- Watch and wait if not bleeding
- Steroids or IVIG if needed
- Chronic ITP: Manage like adults

**Elderly:**
- Higher bleeding risk
- More secondary causes
- Careful with steroids (bone, glucose)
- TPO-RAs well tolerated

**Pregnancy:**
- Safe: Steroids, IVIG
- Avoid: Rituximab near delivery
- Limited data: TPO-RAs (case reports)
- Check neonatal platelet count

## Outcomes and Prognosis

**Natural History:**
- Children: 80% resolve within 12 months
- Adults: 10-20% spontaneous remission
- Chronic ITP: Many maintain stable counts

**Treatment-Free Remission:**
- Some achieve after TPO-RA discontinuation
- More common with rituximab responders
- Attempt taper in stable patients

**Mortality:**
- Low with modern management
- ICH risk <1% with platelet >30,000
- Treatment complications may exceed ITP risk`,
      keyTerms: [
        { term: 'efgartigimod', definition: 'FcRn inhibitor reducing IgG levels; emerging therapy for ITP' },
        { term: 'FcRn', definition: 'Neonatal Fc receptor; recycles IgG extending half-life' },
        { term: 'ITP-PAQ', definition: 'ITP Patient Assessment Questionnaire; measures disease impact on quality of life' },
        { term: 'treatment-free remission', definition: 'Sustained platelet response after stopping treatment' },
      ],
      clinicalNotes: `**Board Pearls:**
- ITP = isolated thrombocytopenia, normal smear, no splenomegaly
- Splenomegaly suggests alternative diagnosis (CLL, MDS)
- Children: Often post-viral, self-limited
- Adults: Chronic, often requires treatment
- First-line: Steroids; IVIG if urgent
- TPO-RAs: First choice second-line for most
- Rituximab: Delayed response, can be durable
- Anti-D only for Rh+ patients with spleen
- Wet purpura = high bleeding risk, treat urgently
- Check HIV, HCV in all adults`,
    },
  },

  media: [
    {
      id: 'itp-petechiae',
      type: 'image',
      filename: 'itp-petechiae.jpg',
      title: 'Petechiae in ITP',
      description: 'Characteristic petechial rash in immune thrombocytopenia',
    },
  ],

  citations: [
    {
      id: 'neunert-2019',
      type: 'article',
      title: 'American Society of Hematology 2019 guidelines for ITP',
      authors: ['Neunert C', 'Terrell DR', 'Arnold DM', 'et al'],
      source: 'Blood Advances',
      url: 'https://doi.org/10.1182/bloodadvances.2019000966',
    },
  ],

  crossReferences: [
    { targetId: 'condition-ttp', targetType: 'condition', relationship: 'related', label: 'TTP' },
    { targetId: 'condition-heparin-induced-thrombocytopenia', targetType: 'condition', relationship: 'related', label: 'HIT' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['platelet disorder', 'autoimmune', 'hematology'],
    keywords: ['ITP', 'thrombocytopenia', 'autoimmune', 'platelets'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default immuneThrombocytopenia;
