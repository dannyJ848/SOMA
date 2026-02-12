/**
 * Immune Thrombocytopenia - Comprehensive Educational Content
 *
 * Covers ITP pathophysiology, diagnosis, and treatment strategies
 * including first-line and refractory disease management.
 */

import { EducationalContent } from '../../../types';

export const immuneThrombocytopenia: EducationalContent = {
  id: 'condition-immune-thrombocytopenia',
  type: 'condition',
  name: 'Immune Thrombocytopenia',
  alternateNames: ['ITP', 'Idiopathic Thrombocytopenic Purpura', 'Autoimmune Thrombocytopenia'],
  hpoId: 'HP:0001973',

  levels: {
    1: {
      level: 1,
      summary: 'Immune thrombocytopenia (ITP) is a condition where your immune system destroys platelets, causing easy bruising and bleeding.',
      explanation: `ITP happens when your immune system mistakenly attacks your platelets, the blood cells that help you stop bleeding.

**What Are Platelets?**
- Tiny blood cells that help form clots
- Stop bleeding when you get a cut
- Normal count: 150,000-450,000 per microliter
- ITP: Count drops below normal

**Symptoms:**
- Easy bruising (purpura)
- Small red or purple spots on skin (petechiae)
- Bleeding gums
- Nosebleeds
- Heavy menstrual periods
- Blood in urine or stool (serious)

**Who Gets ITP:**
- Children: Often after viral infection, usually goes away
- Adults: More often chronic (long-lasting)
- More common in women

**Treatment:**
- Mild cases may not need treatment
- Medicines to slow platelet destruction
- Medicines to help make more platelets
- Sometimes removing the spleen
- Avoiding aspirin and ibuprofen`,
      keyTerms: [
        { term: 'platelets', definition: 'Tiny blood cells that help blood clot' },
        { term: 'petechiae', definition: 'Small red or purple dots from bleeding under skin' },
        { term: 'spleen', definition: 'Organ that removes old platelets and blood cells' },
      ],
      analogies: [
        'Platelets are like little repair workers. In ITP, your immune system fires them by mistake, leaving too few workers to fix cuts and bruises.',
      ],
      examples: [
        'A woman notices unexplained bruises on her arms and legs and finds her platelet count is very low.',
        'A child gets ITP after a viral infection but recovers without treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'ITP is an autoimmune disorder with platelet destruction and impaired production; diagnosis is one of exclusion after ruling out other causes of thrombocytopenia.',
      explanation: `Immune thrombocytopenia is characterized by isolated thrombocytopenia without other obvious causes.

**Pathophysiology:**
- Autoantibodies (usually anti-GPIIb/IIIa) against platelets
- Platelet destruction in spleen and liver
- Also impaired platelet production (megakaryocyte damage)
- T-cell mediated mechanisms also involved

**Classification:**
- Newly diagnosed: <3 months
- Persistent: 3-12 months
- Chronic: >12 months

**Diagnosis (Diagnosis of Exclusion):**
- Isolated thrombocytopenia (platelets <100,000)
- Normal hemoglobin and white blood cells
- Normal peripheral smear (may see large platelets)
- No other causes: Medications, infections, other autoimmune diseases
- Consider: HIV, HCV, H. pylori testing
- Bone marrow biopsy: Not routine; if atypical features or before splenectomy

**Clinical Presentation:**
- Asymptomatic (incidentally found)
- Mucocutaneous bleeding
- Severe bleeding rare unless platelets <10,000

**Treatment Indications:**
- Platelets <20-30,000 with bleeding
- Platelets <10,000 without bleeding
- Higher counts with bleeding risk factors`,
      keyTerms: [
        { term: 'GPIIb/IIIa', definition: 'Platelet surface glycoprotein; common target of autoantibodies' },
        { term: 'thrombocytopenia', definition: 'Low platelet count (<150,000 per microliter)' },
        { term: 'megakaryocyte', definition: 'Bone marrow cell that produces platelets' },
      ],
    },
    3: {
      level: 3,
      summary: 'ITP treatment follows a stepwise approach: steroids first-line, IVIG/anti-D for rapid response, TPO-RAs and rituximab second-line, splenectomy for refractory cases.',
      explanation: `ITP management involves a staged approach balancing bleeding risk with treatment side effects.

**First-Line Treatment:**
- Corticosteroids (prednisone 1 mg/kg/day):
  - 70-80% initial response
  - Taper over weeks; many relapse
  - Short course (2-4 weeks) preferred
- IVIG: 1 g/kg x 1-2 days
  - Rapid response (24-72 hours)
  - For severe bleeding or needing rapid platelet rise
- Anti-D immune globulin:
  - For Rh+ patients with spleen
  - Avoid if hemolytic anemia

**Second-Line Treatment:**
- Thrombopoietin receptor agonists (TPO-RAs):
  - Eltrombopag: Daily oral, liver monitoring needed
  - Romiplostim: Weekly SC injection
  - Response in 70-80%, long-term therapy
- Rituximab: 375 mg/m² weekly x 4
  - Response ~40-60%, durable in 20-30%
  - Not FDA approved for ITP (off-label)
- Fostamatinib: SYK inhibitor, oral daily

**Splenectomy:**
- Response rate ~70%
- Performed laparoscopically
- Vaccinate 2+ weeks before
- Lifelong infection risk
- Consider delayed due to TPO-RA availability

**Refractory ITP:**
- Failed splenectomy and multiple therapies
- Options: TPO-RAs, rituximab, immunosuppressants
- Fostamatinib, avatrombopag
- Clinical trials`,
      keyTerms: [
        { term: 'TPO-RA', definition: 'Thrombopoietin receptor agonist; stimulates platelet production' },
        { term: 'fostamatinib', definition: 'SYK inhibitor; FDA approved for chronic ITP' },
        { term: 'avatrombopag', definition: 'Oral TPO-RA; less liver toxicity than eltrombopag' },
      ],
    },
    4: {
      level: 4,
      summary: 'ITP treatment has evolved with TPO-RAs and fostamatinib; treatment goals prioritize hemostasis over normal platelet counts; individualized approach based on bleeding and comorbidities.',
      explanation: `Modern ITP management uses targeted therapies and a patient-centered approach.

**Treatment Selection Considerations:**

*TPO-RAs:*
- Eltrombopag: Drug interactions (polyvalent cations), LFT monitoring, cataract risk
- Romiplostim: Injection site reactions, no hepatic metabolism
- Avatrombopag: No food restrictions, fewer drug interactions
- All: Theoretical thrombosis risk, monitor CBC weekly initially

*Rituximab:*
- Good for younger patients wanting to avoid splenectomy
- Pneumocystis prophylaxis during treatment
- HBV reactivation risk - screen first
- Progressive multifocal leukoencephalopathy (rare)

*Fostamatinib:*
- Oral, twice daily
- Diarrhea, hypertension common side effects
- For patients failing other therapies

**Special Situations:**

*Pregnancy:*
- Avoid TPO-RAs (insufficient data)
- Prednisone, IVIG safe
- Anti-D contraindicated
- Fetal ITP rare (1-5% with maternal ITP)
- Neonatal platelet count at delivery

*Children:*
- 70-80% resolve spontaneously
- Observe if no bleeding, platelets >20,000
- IVIG, anti-D for treatment
- Splenectomy deferred if possible

**Treatment Goals:**
- Target: Platelets sufficient to prevent bleeding (>30,000-50,000)
- Not necessary to normalize count
- Minimize treatment toxicity
- Quality of life considerations`,
      keyTerms: [
        { term: 'anti-D', definition: 'Anti-D immune globulin; causes immune blockade in Rh+ patients' },
        { term: 'neonatal alloimmune thrombocytopenia', definition: 'Maternal antibodies against fetal platelet antigens' },
        { term: 'quality of life', definition: 'Important treatment consideration in ITP management' },
      ],
    },
    5: {
      level: 5,
      summary: 'ITP management integrates TPO-RAs, fostamatinib, and rituximab; personalized approach based on patient factors, bleeding phenotype, and comorbidities; emerging therapies target novel pathways.',
      explanation: `Expert ITP management incorporates disease biology and personalized treatment selection.

**Immunopathophysiology:**
- B-cell derived antiplatelet antibodies (classic mechanism)
- CD8+ T-cell mediated platelet destruction
- Impaired megakaryopoiesis from antibody and T-cell effects
- Regulatory T-cell dysfunction
- Helicobacter pylori may trigger (test and treat in some patients)

**Risk Stratification:**
- Bleeding risk not purely platelet-dependent
- Factors: Age, comorbidities, antiplatelet/anticoagulant use
- IPSET scoring: Age, platelet count, hemoglobin, ITP duration
- Severe bleeding usually with platelets <10,000

**Refractory Disease Management:**
- Define: Failed splenectomy and multiple agents
- Continue TPO-RA if partial response
- Combination approaches (TPO-RA + rituximab)
- Immunosuppressants: Azathioprine, cyclosporine, mycophenolate, cyclophosphamide
- Daratumumab (anti-CD38): Case series showing efficacy
- Bortezomib: For refractory autoimmune cytopenias

**Emerging Therapies:**
- FcRn inhibitors (efgartigimod, rozanolixizumab): Reduce IgG recycling
- BTK inhibitors: Block B-cell receptor signaling
- Complement inhibitors: Target platelet opsonization pathway
- CAR-T: Case reports in refractory autoimmune cytopenias

**Secondary ITP:**
- SLE, CLL, CVD, HCV, HIV
- Treat underlying disease when possible
- May respond to ITP-specific therapies
- Consider disease-specific treatments (e.g., antivirals for HCV)`,
      keyTerms: [
        { term: 'FcRn', definition: 'Neonatal Fc receptor; recycles IgG; target for novel ITP therapies' },
        { term: 'IPSET', definition: 'International Working Group bleeding score for ITP' },
        { term: 'daratumumab', definition: 'Anti-CD38 monoclonal antibody; emerging therapy for refractory ITP' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['platelet disorder', 'autoimmune', 'bleeding'],
    keywords: ['ITP', 'immune thrombocytopenia', 'platelets', 'thrombocytopenia'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default immuneThrombocytopenia;
