/**
 * Vasculitis - Comprehensive Educational Content
 *
 * Heterogeneous group of disorders characterized by inflammation
 * of blood vessels with varying clinical presentations.
 */

import { EducationalContent } from '../../types';

export const vasculitisContent: EducationalContent = {
  id: 'condition-vasculitis',
  type: 'condition',
  name: 'Vasculitis',
  alternateNames: ['Vasculitic Syndrome', 'Angiitis', 'Arteritis'],
  hpoId: 'HP:0002633',

  levels: {
    1: {
      level: 1,
      summary: 'Vasculitis is a group of rare diseases that cause inflammation of blood vessels, which can damage organs and tissues by restricting blood flow.',
      explanation: `Vasculitis means inflammation of blood vessels. There are many different types depending on which blood vessels are affected.

**What Happens:**
- Your immune system attacks your blood vessels
- The vessels become swollen and narrowed
- Blood flow to organs and tissues is reduced
- This can damage affected body parts

**Common Symptoms:**
- Fever and fatigue
- Weight loss
- Muscle and joint pain
- Skin rashes or spots
- Nerve problems (numbness, weakness)
- Depends on which organs are affected

**Types of Vasculitis:**
- Giant cell arteritis: Large vessels, usually in head (temples)
- Takayasu arteritis: Large vessels in young women
- Polyarteritis nodosa: Medium arteries
- ANCA-associated vasculitis: Small vessels, affects kidneys and lungs

**Treatment:**
- Steroids to reduce inflammation
- Immune-suppressing medicines
- Treatment depends on type and severity
- Many people respond well to treatment`,
      keyTerms: [
        { term: 'inflammation', definition: 'Swelling and irritation of body tissues' },
        { term: 'blood vessel', definition: 'Tubes that carry blood through the body' },
        { term: 'immune system', definition: 'Body defense system that fights infection' },
      ],
      analogies: [
        'Blood vessels are like pipes delivering water to houses. Vasculitis is like rust building up inside the pipes, slowing down the flow.',
      ],
      examples: [
        'An older adult with new headaches and scalp tenderness is diagnosed with giant cell arteritis.',
        'A young woman with arm pain and weak pulses has Takayasu arteritis affecting her arm arteries.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vasculitis is classified by vessel size (large, medium, small); diagnosis requires clinical features, laboratory testing, imaging, and often biopsy; treatment is immunosuppression.',
      explanation: `Vasculitis encompasses multiple distinct syndromes classified by vessel size.

**Classification by Vessel Size:**

*Large Vessel:*
- Giant cell arteritis (GCA): Temporal artery, aortic branches
- Takayasu arteritis: Aorta and main branches

*Medium Vessel:*
- Polyarteritis nodosa (PAN): Medium muscular arteries
- Kawasaki disease: Children, coronary arteries

*Small Vessel (ANCA-associated):*
- Granulomatosis with polyangiitis (GPA): ENT, lungs, kidneys
- Microscopic polyangiitis (MPA): Kidneys, lungs
- Eosinophilic granulomatosis with polyangiitis (EGPA): Asthma, eosinophilia

*Small Vessel (Immune complex):*
- IgA vasculitis: Skin, joints, GI, kidneys
- Cryoglobulinemic vasculitis: Skin, kidneys, nerves

**Diagnostic Approach:**
- Clinical features (organ involvement pattern)
- Laboratory: CBC, CMP, ESR/CRP, ANCA, complement
- Imaging: CT, MRI, angiography, PET
- Biopsy: Gold standard when feasible`,
      keyTerms: [
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibody; marker for small vessel vasculitis' },
        { term: 'GCA', definition: 'Giant cell arteritis; large vessel vasculitis in older adults' },
        { term: 'GPA', definition: 'Granulomatosis with polyangiitis (formerly Wegener)' },
      ],
    },
    3: {
      level: 3,
      summary: 'GCA requires immediate high-dose steroids to prevent blindness; ANCA-associated vasculitis requires induction (cyclophosphamide or rituximab) followed by maintenance therapy; relapse is common.',
      explanation: `Specific vasculitis syndromes have distinct treatment approaches.

**Giant Cell Arteritis:**
- Presentation: Headache, scalp tenderness, jaw claudication, visual symptoms
- Labs: ESR >50, CRP elevated
- Temporal artery biopsy or ultrasound
- Treatment: Prednisone 40-60 mg/day; start immediately if suspected
- Tocilizumab: Steroid-sparing, FDA approved

**ANCA-Associated Vasculitis (AAV):**
- Induction: Rituximab or cyclophosphamide + glucocorticoids
- Maintenance: Rituximab or azathioprine
- Plasma exchange: Severe renal disease or pulmonary hemorrhage
- Relapse rate: 30-50% at 2 years

**Takayasu Arteritis:**
- Young women, aortic arch and branches
- Claudication, decreased pulses, blood pressure discrepancy
- Glucocorticoids first-line; tocilizumab for refractory

**Polyarteritis Nodosa:**
- Medium vessel, NOT ANCA-associated
- Skin, nerves, GI, kidneys (not glomerulonephritis)
- HBV-associated in 30%; treat hepatitis
- Cyclophosphamide for severe disease`,
      keyTerms: [
        { term: 'jaw claudication', definition: 'Pain in jaw when chewing; classic GCA symptom' },
        { term: 'rituximab', definition: 'Anti-CD20 antibody; first-line for AAV induction' },
        { term: 'tocilizumab', definition: 'IL-6 inhibitor; FDA approved for GCA and Takayasu' },
      ],
    },
    4: {
      level: 4,
      summary: 'Vasculitis management follows induction-maintenance protocols; GCA treatment should not await biopsy; AAV maintenance is now often rituximab-based; monitoring includes disease activity and medication toxicity.',
      explanation: `Comprehensive vasculitis management requires disease-specific protocols and monitoring.

**GCA Treatment Details:**
- Do not delay steroids for biopsy (biopsy remains positive for 2+ weeks)
- Prednisone taper over 12-24 months
- Tocilizumab: 162 mg weekly subcutaneously
- Aspirin 81 mg (reduces ischemic complications)
- Monitor: Vision, aortic complications (aneurysm, dissection)

**AAV Treatment Protocol:**

*Induction (3-6 months):*
- Rituximab: 375 mg/m² weekly x 4 OR 1 g x 2 (2 weeks apart)
- Cyclophosphamide: IV pulse preferred (less toxicity)
- Glucocorticoids: Rapid taper

*Maintenance (18-24 months):*
- Rituximab: 500 mg at 6 and 12 months (or 1 g at 6 months)
- Azathioprine: 2 mg/kg/day
- Mycophenolate: Alternative

**Monitoring Disease Activity:**
- BVAS (Birmingham Vasculitis Activity Score)
- ANCA titers: May not correlate with disease activity
- Urinalysis: Monitor for renal involvement
- Imaging as indicated

**Medication Toxicity:**
- Cyclophosphamide: Bladder toxicity, infertility, malignancy
- Rituximab: Infection, hypogammaglobulinemia
- Glucocorticoids: Osteoporosis, diabetes, infection`,
      keyTerms: [
        { term: 'BVAS', definition: 'Birmingham Vasculitis Activity Score; disease activity measure' },
        { term: 'hypogammaglobulinemia', definition: 'Low antibody levels; rituximab complication' },
        { term: 'IV cyclophosphamide', definition: 'Pulsed dosing reduces cumulative toxicity vs. oral' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert vasculitis management integrates induction-maintenance protocols, novel biologic agents, and monitoring for relapse and treatment toxicity; avacopan offers glucocorticoid-sparing approach; long-term follow-up essential.',
      explanation: `Advanced vasculitis care addresses complex cases and emerging therapies.

**Avacopan:**
- C5a receptor inhibitor
- FDA approved for AAV (with rituximab or cyclophosphamide)
- Reduces glucocorticoid exposure
- ADVOCATE trial: Non-inferior for remission

**Refractory Disease:**
- AAV: Switch rituximab to cyclophosphamide or vice versa
- GCA: Tocilizumab, infliximab, abatacept
- Consider compliance, infection mimicking flare
- Plasma exchange: Severe/refractory cases

**Relapse Prediction:**
- AAV: PR3-ANCA, ENT involvement, persistent ANCA positivity
- GCA: Cannot reliably predict
- Maintenance therapy duration individualized

**Long-Term Complications:**
- GCA: Aortic aneurysm (10-20%), dissection
- AAV: CKD progression, cardiovascular disease
- Treatment-related: Malignancy, infection, osteoporosis

**Special Considerations:**
- Pregnancy: Plan during remission; certain medications safe
- Surgery: Hold immunosuppression peri-operatively
- Vaccination: Pneumococcal, influenza, shingles (Shingrix)

**Future Directions:**
- Targeted biologics for specific vasculitis types
- Biomarkers for relapse prediction
- Glucocorticoid-sparing protocols`,
      keyTerms: [
        { term: 'avacopan', definition: 'C5aR inhibitor; glucocorticoid-sparing for AAV' },
        { term: 'PR3-ANCA', definition: 'Proteinase 3 ANCA; associated with GPA, higher relapse risk' },
        { term: 'aortic aneurysm', definition: 'Long-term GCA complication; requires surveillance' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular', 'immune'],
    topics: ['vasculitis', 'autoimmune', 'inflammation'],
    keywords: ['vasculitis', 'ANCA', 'GCA', 'arteritis'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default vasculitisContent;
