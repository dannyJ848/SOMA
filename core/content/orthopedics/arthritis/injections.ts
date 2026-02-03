import { EducationalContent } from '../../types';

export const injectionsContent: EducationalContent = {
  id: 'ortho-patient-injections',
  type: 'concept',
  name: 'Joint Injections',
  alternateNames: ['Intra-articular injections', 'Cortisone shots', 'Steroid injections'],

  levels: {
    1: {
      level: 1,
      summary: 'Joint injections deliver medication directly into a painful joint to reduce inflammation and pain. They can provide temporary relief but are not a cure.',
      explanation: `Joint injections put medicine right where it's needed - inside the joint. This can help when pills alone aren't enough.

**Types of Injections:**
- **Corticosteroids (cortisone)**: Reduces inflammation quickly
- **Hyaluronic acid**: Gel-like fluid to lubricate the joint
- **PRP (platelet-rich plasma)**: Uses your own blood to help healing

**What to Expect:**
- Done in doctor's office
- Takes just a few minutes
- May feel pressure during injection
- Relief usually within days

**Benefits:**
- Fast pain relief
- Allows you to exercise and do therapy
- Can delay need for surgery
- May work for months

**Limitations:**
- Not a permanent fix
- May need to repeat
- Too many steroid shots may harm cartilage
- Results vary between people

**After the Injection:**
- Some soreness for a day or two is normal
- Avoid heavy activity for 24-48 hours
- Call if severe pain, fever, or redness develops`,
      keyTerms: [
        { term: 'corticosteroid', definition: 'Strong anti-inflammatory medication injected into joints' },
        { term: 'hyaluronic acid', definition: 'Gel-like substance naturally found in joints; injected to lubricate' },
        { term: 'PRP', definition: 'Platelet-rich plasma; concentrated healing factors from your own blood' },
      ],
      analogies: [
        'Corticosteroid injections are like using a fire extinguisher on inflammation.',
        'Hyaluronic acid is like adding oil to a squeaky hinge.',
      ],
      examples: [
        'A cortisone shot in the knee may relieve pain for 1-3 months.',
        'Shoulder injections can help people do physical therapy exercises.',
      ],
    },
    2: {
      level: 2,
      summary: 'Intra-articular injections include corticosteroids, hyaluronic acid, and biologic therapies. Evidence and duration of benefit vary by type, and risks must be balanced against benefits.',
      explanation: `Joint injections are a tool in the OA management toolkit, with different options for different situations.

**Corticosteroid Injections:**
- Mechanism: Potent anti-inflammatory
- Onset: Days to 1 week
- Duration: Weeks to months (variable)
- Best for: Inflammatory flares, acute pain

*Considerations:*
- Limit frequency (3-4 per year max)
- May affect blood sugar (diabetics)
- Possible cartilage effects with repeated use
- Avoid before surgery (infection risk)

**Hyaluronic Acid (Viscosupplementation):**
- Mechanism: Lubricant, possibly anti-inflammatory
- Products: Multiple, various molecular weights
- Evidence: Moderate, debated
- May work better for mild-moderate OA

**PRP (Platelet-Rich Plasma):**
- Source: Patient's own blood
- Contains: Growth factors, cytokines
- Evidence: Growing but variable
- Not covered by most insurance

**Other Biologics:**
- Bone marrow aspirate (BMAC)
- Adipose-derived cells
- Research stage for most

**Procedure Considerations:**
- Ultrasound guidance improves accuracy
- Sterile technique essential
- Post-procedure activity guidance
- Monitor for complications

**When to Consider Injections:**
- Inadequate response to oral medications
- Flare of symptoms
- Bridge to surgery
- Patient preference`,
      keyTerms: [
        { term: 'viscosupplementation', definition: 'Injection of hyaluronic acid into joints' },
        { term: 'intra-articular', definition: 'Inside the joint space' },
        { term: 'growth factors', definition: 'Proteins that promote tissue healing and repair' },
      ],
      analogies: [
        'PRP is like using your body\'s own repair kit in concentrated form.',
        'Viscosupplementation is like adding synthetic synovial fluid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Injection therapy for OA involves understanding mechanisms, patient selection, and evidence base. Guidance techniques, product selection, and timing affect outcomes.',
      explanation: `Evidence-based injection therapy requires understanding of indications, techniques, and limitations.

**Corticosteroid Evidence:**

*Efficacy:*
- Short-term pain relief: Well-established
- Duration: 1-3 months typically
- Dose-response: Uncertain
- Knee vs. hip: Similar efficacy

*Concerns:*
- Repeated injections may accelerate OA
- Cartilage effects documented
- Pre-arthroplasty: 3-month window
- Glycemic effects in diabetics

**Hyaluronic Acid Evidence:**

*Guidelines Vary:*
- AAOS: Cannot recommend
- OARSI: Uncertain recommendation
- ACR: Conditional recommendation

*Considerations:*
- May benefit specific phenotypes
- Lower grade OA may respond better
- Cost-effectiveness questioned
- Multiple products, outcomes vary

**PRP Evidence:**

*Current State:*
- Evidence accumulating
- Preparation methods vary
- Leukocyte content debated
- Multiple injection protocols

*Challenges:*
- Standardization lacking
- Cost not covered
- Quality control issues

**Technical Considerations:**

*Guidance:*
- Ultrasound improves accuracy
- Hip injections require guidance
- Knee landmarks reliable but variable
- Shoulder guidance helpful

*Technique:*
- Sterile preparation
- Appropriate needle size
- Effusion aspiration if present
- Post-procedure rest

**Combination Approaches:**
- Corticosteroid + HA
- PRP protocols vary
- Evidence for combinations limited`,
      keyTerms: [
        { term: 'leukocyte-rich PRP', definition: 'PRP preparation containing white blood cells; may increase inflammation' },
        { term: 'effusion', definition: 'Fluid accumulation in joint; should be drained before injection' },
        { term: 'image-guided injection', definition: 'Using ultrasound or fluoroscopy to ensure accurate placement' },
      ],
      clinicalNotes: 'Corticosteroid injections within 3 months of arthroplasty increase infection risk. Consider delaying surgery or using alternative therapies. Ultrasound guidance recommended for hip injections.',
    },
    4: {
      level: 4,
      summary: 'Injection therapy integrates understanding of local joint biology, product pharmacology, and technical precision. Emerging biologics require evaluation of evidence quality and mechanism.',
      explanation: `Advanced injection therapy requires understanding of mechanisms and evidence interpretation.

**Corticosteroid Pharmacology:**
- Triamcinolone: Common, crystalline
- Methylprednisolone: Less crystalline
- Betamethasone: Least crystalline
- Dexamethasone: Soluble, short-acting

*Mechanism:*
- Nuclear receptor binding
- Gene transcription modification
- Anti-inflammatory effects
- Chondrocyte metabolism effects

**Hyaluronic Acid Products:**
- Molecular weight variations
- Cross-linked vs. non-cross-linked
- Single vs. multiple injections
- Mechanism: Viscosity, receptor effects

**PRP Science:**

*Composition:*
- Platelets: Growth factor source
- Plasma: Matrix proteins
- Leukocytes: Controversial component
- RBCs: Should be minimized

*Growth Factors:*
- PDGF, TGF-beta, VEGF, IGF-1
- Released upon activation
- Modulate inflammation and repair
- Variable concentration by preparation

**Biologic Therapies:**

*BMAC:*
- Mesenchymal stem cells
- Growth factors
- Point-of-care processing
- Limited but growing evidence

*Adipose-Derived:*
- SVF (stromal vascular fraction)
- Regulatory considerations
- Processing requirements
- Research stage

*Amniotic Products:*
- Growth factors, not cells
- Marketing claims exceed evidence
- FDA regulatory concerns

**Outcome Assessment:**
- Pain scales (VAS, NRS)
- Function (WOMAC, KOOS)
- Imaging changes
- Time to arthroplasty`,
      keyTerms: [
        { term: 'SVF', definition: 'Stromal vascular fraction; cell population from adipose tissue' },
        { term: 'autologous', definition: 'Derived from the same individual; patient\'s own tissue' },
        { term: 'point-of-care', definition: 'Processing done in clinical setting rather than laboratory' },
      ],
      clinicalNotes: 'Biologic therapies lack standardization. FDA regulations affect what can be marketed. Evidence for most cellular therapies remains limited. Patients should be counseled about evidence gaps.',
    },
    5: {
      level: 5,
      summary: 'Contemporary injection therapy evidence reveals modest benefits for corticosteroids and uncertain value of biologics. Research priorities include biomarker-guided therapy, standardization, and identification of responders.',
      explanation: `Expert evaluation of injection therapy requires critical appraisal of evidence and emerging research.

**Evidence Synthesis:**

*Corticosteroids:*
- Meta-analyses: Short-term benefit established
- Concerns: Long-term cartilage effects
- Recent trials: Repeated injections may accelerate OA
- Role: Flares, bridging, patient preference

*Hyaluronic Acid:*
- Large meta-analyses: Small effect size
- Publication bias concerns
- High placebo response
- May benefit specific subgroups

*PRP:*
- Meta-analyses positive but heterogeneous
- Preparation variability problematic
- Comparison: May be superior to HA
- Cost-effectiveness unclear

**Biologic Regulation:**

*FDA Classification:*
- 361: Minimally manipulated, homologous use
- 351: Biological products, require approval
- Many products marketed inappropriately

*Current Landscape:*
- PRP: Generally permitted
- BMAC: Point-of-care acceptable
- Cultured cells: Require approval
- Amniotic products: Scrutiny increasing

**Research Priorities:**

*Biomarker Development:*
- Identify responders
- Predict outcomes
- Guide therapy selection
- Currently research stage

*Standardization:*
- PRP preparation protocols
- Outcome measures
- Comparison studies
- Registry data

**Clinical Decision Framework:**
- Patient factors (age, severity, goals)
- Evidence quality for each option
- Cost considerations
- Informed consent

**Emerging Directions:**
- Gene therapy
- Small molecule delivery
- Sustained release formulations
- Combination biologics`,
      keyTerms: [
        { term: 'effect size', definition: 'Statistical measure of treatment magnitude; important for clinical relevance' },
        { term: 'homologous use', definition: 'Using tissue for same function as original; regulatory term' },
        { term: 'placebo response', definition: 'Improvement from treatment expectation alone; high in injection studies' },
      ],
      clinicalNotes: 'Evidence does not support routine use of biologics for OA. Corticosteroids have role for flares. Patient education about evidence gaps essential. Shared decision-making recommended.',
    },
  },

  media: [
    {
      id: 'injection-types',
      type: 'diagram',
      filename: 'joint-injection-types.svg',
      title: 'Types of Joint Injections',
      description: 'Overview of injection options for arthritis',
    },
  ],
  citations: [
    {
      id: 'injection-ref',
      type: 'textbook',
      title: 'Intra-articular Injection Therapy',
      source: 'Rheumatology Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-non-surgical-management', targetType: 'concept', relationship: 'parent', label: 'Non-Surgical Management' },
    { targetId: 'ortho-patient-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthritis', 'injections'],
    keywords: ['injection', 'corticosteroid', 'PRP', 'hyaluronic acid'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default injectionsContent;
