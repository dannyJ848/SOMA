/**
 * Foot Care - Diabetes Management
 *
 * Teaching patients about diabetic foot care to prevent
 * complications including ulcers and amputations.
 */

import { EducationalContent } from '../../types';

export const FOOT_CARE: EducationalContent = {
  id: 'diabetes-foot-care',
  type: 'concept',
  name: 'Diabetic Foot Care',
  alternateNames: ['Foot care for diabetes', 'Diabetic foot prevention', 'Foot self-care'],

  levels: {
    1: {
      level: 1,
      summary: 'Taking care of your feet every day is very important when you have diabetes because diabetes can cause foot problems that lead to serious injuries.',
      explanation: `**Why Are Feet Important in Diabetes?**
Diabetes can affect your feet in two ways:
1. **Nerve damage (neuropathy):** You may not feel pain, heat, or cold in your feet
2. **Poor blood flow:** Wounds heal more slowly

This means you might not notice a small cut or blister, and it can turn into a big problem.

**Daily Foot Care Routine:**

*Check Your Feet Every Day:*
- Look at the tops, bottoms, and between your toes
- Use a mirror to see the bottom of your feet
- Look for cuts, blisters, red spots, or swelling
- Check for dry, cracked skin

*Wash Your Feet Daily:*
- Use warm (not hot) water
- Test the water with your elbow or a thermometer
- Don't soak your feet - this dries out the skin
- Dry your feet well, especially between the toes

*Keep Skin Smooth:*
- Use lotion on the tops and bottoms of your feet
- Don't put lotion between your toes (this can cause infection)

**Protect Your Feet:**

*What to Wear:*
- Always wear shoes or slippers - even indoors
- Wear socks that fit well and have no seams
- Choose comfortable shoes that fit properly
- Break in new shoes slowly

*What to Avoid:*
- Walking barefoot
- Tight shoes or socks
- Heating pads or hot water bottles on feet
- Cutting corns or calluses yourself

**When to Call Your Doctor:**

Call right away if you notice:
- A cut or blister that won't heal
- Red, warm, or swollen areas
- Numbness or tingling
- Changes in the shape of your foot
- Ingrown toenails
- Signs of infection (pus, bad smell, fever)

**Toenail Care:**
- Cut nails straight across
- Don't cut into the corners
- File the edges smooth
- See a foot doctor if you can't reach your feet or see well

**Professional Foot Care:**
- Have your feet checked at every diabetes visit
- See a podiatrist (foot doctor) at least once a year
- Get fitted for special shoes if needed`,
      keyTerms: [
        { term: 'neuropathy', definition: 'Nerve damage that can make you lose feeling in your feet' },
        { term: 'podiatrist', definition: 'A doctor who specializes in foot care' },
        { term: 'ulcer', definition: 'A sore or wound that is hard to heal' },
      ],
      analogies: [
        'Your feet are like the foundation of a house - if you don\'t take care of them, problems can spread to the rest of the structure.',
        'Checking your feet every day is like checking your car\'s tires - catching small problems early prevents big breakdowns.',
      ],
      examples: [
        'Maria checks her feet every morning while sitting on her bed. She uses a mirror to see the bottoms of her feet.',
        'Tom found a small cut on his foot during his daily check. He cleaned it, covered it with a bandage, and watched it closely. When it didn\'t heal after two days, he called his doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetic foot care involves daily inspection, proper hygiene, appropriate footwear, and regular professional examinations to prevent complications that can lead to ulcers and amputations.',
      explanation: `**Understanding Diabetic Foot Problems:**

Diabetes can cause foot complications through two main mechanisms:

*Peripheral Neuropathy:*
- Sensory loss (can't feel pain, temperature)
- Motor dysfunction (foot deformities, altered gait)
- Autonomic changes (dry skin, changes in blood flow)

*Peripheral Vascular Disease:*
- Reduced blood flow to feet
- Poor wound healing
- Increased infection risk

**Risk Factors for Foot Complications:**

| Higher Risk | Highest Risk |
|-------------|--------------|
| Diabetes >10 years | Previous amputation |
| Poor glucose control | Previous ulcer |
| Smoking | Peripheral neuropathy |
| Peripheral vascular disease | Foot deformity |
| Vision problems | Chronic kidney disease |

**Daily Self-Care Protocol:**

*Foot Inspection Checklist:*
- [ ] Check between all toes
- [ ] Look for cuts, blisters, calluses
- [ ] Note any color changes
- [ ] Check for swelling
- [ ] Feel for areas of warmth
- [ ] Look for toenail problems
- [ ] Notice any new deformities

*Proper Foot Hygiene:*
1. Wash daily with mild soap and lukewarm water
2. Test water temperature with elbow (not feet)
3. Dry thoroughly, especially between toes
4. Apply moisturizer to prevent cracking (not between toes)
5. Use foot powder if feet tend to sweat

**Footwear Guidelines:**

*Shoe Selection:*
| Feature | Why It Matters |
|---------|----------------|
| Proper fit | Prevents friction and pressure |
| Breathable material | Reduces moisture |
| Soft interior | No seams to cause rubbing |
| Sturdy sole | Protection from objects |
| Low heel | Reduces pressure points |

*Socks:*
- Moisture-wicking material
- No tight elastic bands
- Seamless or padded options
- Clean pair daily

**Warning Signs Requiring Medical Attention:**

*Urgent (Same Day):*
- Signs of infection: redness, warmth, swelling, pus, fever
- New ulcer or wound
- Color changes (pale, blue, black)
- Sudden severe pain or numbness

*Non-Urgent (Within 1-2 Weeks):*
- Calluses or corns building up
- Ingrown toenails
- Dry, cracking skin
- Minor cuts not healing

**Professional Care:**

*Annual Foot Exam Components:*
- Visual inspection
- Pulse assessment
- Monofilament testing (sensation)
- Ankle reflexes
- Vibration sensation
- Risk classification

*Specialist Referrals:*
- Podiatry for nail care, callus management
- Vascular surgery if blood flow concerns
- Wound care specialists for non-healing wounds
- Orthotics for foot deformities

**Prevention Strategies:**

*Do:*
- Control blood glucose
- Quit smoking
- Exercise regularly (appropriate for risk level)
- Attend all foot appointments
- Wear appropriate footwear

*Don't:*
- Walk barefoot anywhere
- Use sharp objects on feet
- Apply heat to feet
- Self-treat corns, calluses, or ingrown nails
- Ignore changes in feet`,
      keyTerms: [
        { term: 'peripheral neuropathy', definition: 'Nerve damage in the extremities causing numbness, tingling, or loss of sensation' },
        { term: 'peripheral vascular disease', definition: 'Reduced blood circulation to the limbs due to narrowed arteries' },
        { term: 'monofilament test', definition: 'Screening test using a thin filament to assess protective sensation in the feet' },
        { term: 'protective sensation', definition: 'Ability to feel potential damage to the foot, such as from injury or pressure' },
      ],
      analogies: [
        'Diabetes can affect foot nerves like static on a phone line - the signal (feeling) doesn\'t get through clearly, so you miss important messages (pain warnings).',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetic foot care encompasses risk stratification, standardized assessment protocols, evidence-based prevention strategies, and coordinated multidisciplinary management to prevent lower extremity complications.',
      explanation: `**Pathophysiology of Diabetic Foot Disease:**

*Neuropathy Triad:*
1. **Sensory neuropathy:** Loss of protective sensation
2. **Motor neuropathy:** Intrinsic muscle weakness, foot deformities
3. **Autonomic neuropathy:** Anhidrosis, altered blood flow regulation

*Vascular Component:*
- Atherosclerosis (macrovascular)
- Microvascular dysfunction
- Impaired wound healing
- Increased infection susceptibility

*Biomechanical Factors:*
- Altered foot architecture
- Abnormal pressure distribution
- Repetitive trauma
- Charcot neuroarthropathy

**Risk Stratification:**

*IWGDF Risk Classification:*
| Category | Findings | Ulcer Risk | Exam Frequency |
|----------|----------|------------|----------------|
| 0 | No LOPS, no PAD | Very low | Annual |
| 1 | LOPS or PAD | Low | Every 6-12 months |
| 2 | LOPS + PAD, or LOPS + deformity | Moderate | Every 3-6 months |
| 3 | LOPS or PAD + history of ulcer/amputation | High | Every 1-3 months |

*LOPS: Loss of Protective Sensation; PAD: Peripheral Arterial Disease*

**Clinical Assessment:**

*Neurological Examination:*
- 10-g monofilament testing (4-10 sites)
- 128-Hz tuning fork (vibration)
- Ankle reflexes
- Pin-prick sensation
- Temperature discrimination

*Vascular Assessment:*
- Pedal pulse palpation
- Ankle-brachial index (ABI)
- Toe-brachial index if ABI >1.3
- Doppler waveform analysis

*Structural Evaluation:*
- Deformities (claw toes, bunions, Charcot)
- Callus pattern
- Plantar pressure distribution
- Footwear assessment

**Evidence-Based Prevention Interventions:**

*Proven Effective:*
| Intervention | Evidence Level |
|--------------|----------------|
| Integrated foot care programs | High |
| Patient education | Moderate |
| Therapeutic footwear (high risk) | Moderate |
| Regular foot screening | Moderate |
| Callus debridement | Low-Moderate |

*Key Components of Effective Programs:*
- Regular examination and risk classification
- Patient education and empowerment
- Appropriate footwear provision
- Prompt treatment of pre-ulcerative lesions
- Multidisciplinary approach

**Therapeutic Footwear:**

*Indications:*
- Previous ulcer or amputation
- Peripheral neuropathy with deformity
- Peripheral arterial disease with neuropathy
- Callus formation due to abnormal pressure

*Types:*
| Type | Indication |
|------|------------|
| Extra-depth shoes | Accommodate deformities, orthotics |
| Custom-molded shoes | Severe deformity, prior ulcer |
| Healing sandals | Post-ulcer healing |
| Total contact casts | Offloading for ulcer healing |

**Ulcer Classification:**

*University of Texas Classification:*
| Grade | Definition |
|-------|------------|
| 0 | Pre/post-ulcerative lesion |
| 1 | Superficial wound |
| 2 | Wound to tendon/capsule |
| 3 | Wound to bone/joint |

*Stages:* A (no infection/ischemia), B (infection), C (ischemia), D (both)

**Multidisciplinary Team Approach:**

*Core Team Members:*
- Primary care provider
- Endocrinologist
- Podiatrist
- Wound care specialist
- Vascular surgeon
- Orthotist
- Diabetes educator

*Coordination Functions:*
- Regular case conferences
- Shared care pathways
- Clear referral criteria
- Patient navigation support`,
      keyTerms: [
        { term: 'loss of protective sensation (LOPS)', definition: 'Inability to detect 10-g monofilament indicating neuropathy' },
        { term: 'ankle-brachial index (ABI)', definition: 'Ratio of ankle to arm blood pressure; <0.9 indicates peripheral arterial disease' },
        { term: 'Charcot neuroarthropathy', definition: 'Progressive destruction of weight-bearing joints in neuropathic patients' },
        { term: 'IWGDF', definition: 'International Working Group on the Diabetic Foot; develops evidence-based guidelines' },
        { term: 'offloading', definition: 'Removing mechanical pressure from a wound to promote healing' },
      ],
      clinicalNotes: 'Annual foot examination should include monofilament testing and pedal pulse palpation at minimum. Risk stratification determines follow-up frequency. Integrated foot care programs reduce amputations by 40-85%. Therapeutic footwear reduces ulcer recurrence by ~50%.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive diabetic foot management integrates advanced assessment technologies, molecular wound healing principles, limb preservation strategies, and health systems approaches to reduce the global burden of diabetic foot disease.',
      explanation: `**Diabetic Foot Disease Pathobiology:**

*Wound Healing Impairment:*
\`\`\`
Hyperglycemia
      ↓
AGE Accumulation → Protein Cross-linking
      ↓
Inflammation           Microvascular Disease
      ↓                        ↓
Impaired Growth Factor     Tissue Hypoxia
Expression                      ↓
      ↓                  Impaired Collagen
Reduced Angiogenesis      Synthesis
      ↓                        ↓
         Delayed Wound Healing
\`\`\`

*Neuropathy Mechanisms:*
- Polyol pathway activation
- Oxidative stress
- Protein kinase C activation
- Neurotrophic factor deficiency
- Microvascular ischemia

**Advanced Assessment:**

*Quantitative Sensory Testing:*
| Modality | Method | Abnormal Values |
|----------|--------|-----------------|
| Touch/pressure | Semmes-Weinstein monofilament | Cannot feel 10-g |
| Vibration | Biothesiometer | >25V at great toe |
| Temperature | Thermal threshold | >6°C difference |
| Sudomotor | Sudoscan | <40 μS |

*Vascular Imaging:*
- Duplex ultrasound
- CT angiography
- MR angiography
- Transcutaneous oxygen (TcPO2)
- Skin perfusion pressure

*Foot Pressure Analysis:*
- In-shoe pressure measurement
- Barefoot plantar pressure
- Gait analysis
- Peak pressure identification
- Custom orthotic design

**Molecular Approaches to Wound Healing:**

*Growth Factor Therapy:*
| Factor | Application | Evidence |
|--------|-------------|----------|
| PDGF (becaplermin) | Neuropathic ulcers | Moderate healing benefit |
| EGF | Various wounds | Limited evidence |
| VEGF | Ischemic wounds | Research phase |

*Cellular Therapies:*
- Bioengineered skin substitutes
- Stem cell applications
- Platelet-rich plasma
- Amniotic membrane products

**Limb Preservation Strategies:**

*Revascularization:*
| Approach | Indication |
|----------|------------|
| Endovascular (angioplasty/stent) | Focal lesions, high surgical risk |
| Open bypass surgery | Extensive disease, good conduit |
| Hybrid procedures | Complex anatomy |

*Decision Framework:*
\`\`\`
Diabetic Foot Ulcer
        ↓
Assess Perfusion (ABI, TBI, TcPO2)
        ↓
Adequate Perfusion → Standard Wound Care
        ↓
Inadequate Perfusion → Vascular Imaging
        ↓
Revascularization Candidate?
   Yes → Endovascular vs. Open
   No → Medical optimization, palliative care
\`\`\`

**Infection Management:**

*IDSA/IWGDF Classification:*
| Severity | Clinical Features |
|----------|-------------------|
| Uninfected | No systemic or local signs |
| Mild | Local infection only, <2cm cellulitis |
| Moderate | Deeper infection or >2cm cellulitis |
| Severe | Systemic signs, metabolic instability |

*Antibiotic Principles:*
- Empiric therapy based on severity
- Culture to guide targeted therapy
- Duration based on infection depth
- Avoid unnecessary broad coverage

**Amputation Prevention:**

*Minor Amputation:*
- Toe amputation
- Ray resection
- Transmetatarsal amputation

*Major Amputation Prevention:*
- Timely revascularization
- Aggressive wound care
- Offloading adherence
- Infection control
- Multidisciplinary team approach

**Health Systems Approaches:**

*Successful Program Elements:*
1. Universal screening and risk classification
2. Podiatry integration in primary care
3. Therapeutic footwear access
4. Rapid access for acute foot problems
5. Multidisciplinary limb preservation teams
6. Quality metrics and outcomes tracking

*Cost-Effectiveness:*
- Prevention programs cost-saving
- Early intervention reduces hospitalizations
- Amputation prevention has major cost benefits
- Quality-adjusted life year gains`,
      keyTerms: [
        { term: 'transcutaneous oxygen (TcPO2)', definition: 'Non-invasive measure of skin oxygenation; <30mmHg indicates critical limb ischemia' },
        { term: 'bioengineered skin substitute', definition: 'Advanced wound dressing containing living cells or tissue components' },
        { term: 'limb preservation', definition: 'Multidisciplinary approach to prevent amputation through revascularization and wound care' },
        { term: 'critical limb ischemia', definition: 'Severe peripheral arterial disease threatening limb viability' },
        { term: 'IDSA', definition: 'Infectious Diseases Society of America; publishes diabetic foot infection guidelines' },
      ],
      clinicalNotes: 'TcPO2 <30mmHg or toe pressure <30mmHg indicates critical ischemia requiring vascular intervention. Bioengineered skin substitutes can improve healing in select patients. Limb preservation teams reduce major amputations by 30-80%. Time to revascularization is critical for limb salvage.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art diabetic foot management integrates precision diagnostics, regenerative medicine, advanced biomechanics, artificial intelligence, and global health systems innovation to transform outcomes in diabetic foot disease.',
      explanation: `**Precision Medicine in Diabetic Foot Disease:**

*Genomic Factors:*
\`\`\`
Genetic Susceptibility:
- Wound healing gene variants
- Neuropathy susceptibility loci
- PAD risk genes
- Infection susceptibility

Applications:
- Risk stratification
- Therapeutic selection
- Prognosis prediction
\`\`\`

*Biomarker Development:*
| Biomarker Type | Application |
|----------------|-------------|
| Inflammatory (CRP, cytokines) | Infection severity |
| Metabolic (AGEs) | Tissue damage |
| Vascular (endothelial markers) | Perfusion status |
| Wound-specific (MMPs) | Healing trajectory |

**Regenerative Medicine:**

*Cellular Therapies:*
- Mesenchymal stem cells (autologous, allogeneic)
- Adipose-derived stem cells
- Endothelial progenitor cells
- Induced pluripotent stem cells

*Mechanisms of Benefit:*
\`\`\`
Stem Cell Administration
        ↓
Paracrine Effect        Direct Engraftment
        ↓                     ↓
Growth Factor Release   Tissue Replacement
        ↓
Angiogenesis + Immunomodulation
        ↓
Enhanced Wound Healing
\`\`\`

*Tissue Engineering:*
- 3D-bioprinted skin constructs
- Scaffold-based tissue regeneration
- Gene-modified cellular products
- Extracellular matrix products

**Advanced Biomechanics:**

*Smart Insoles and Footwear:*
- Real-time pressure monitoring
- Temperature sensing
- Activity tracking
- Alert systems
- Cloud connectivity

*Gait Analysis Integration:*
- Kinematic analysis
- Kinetic assessment
- Muscle activity patterns
- Personalized orthotic design
- 3D-printed custom footwear

**Artificial Intelligence Applications:**

*Wound Assessment:*
- Image-based wound measurement
- Wound healing prediction
- Infection detection
- Tissue classification
- Telemedicine integration

*Risk Prediction Models:*
| Outcome | Model Inputs | Performance |
|---------|--------------|-------------|
| Ulcer development | Demographics, history, exam | AUC 0.7-0.8 |
| Amputation | Ulcer characteristics, vascular | AUC 0.75-0.85 |
| Wound healing | Wound features, patient factors | AUC 0.7-0.8 |

**Emerging Technologies:**

*Novel Diagnostics:*
- Hyperspectral imaging (tissue oxygenation)
- Thermal imaging (inflammation detection)
- Point-of-care microbiome analysis
- Optical coherence tomography
- Photoacoustic imaging

*Advanced Therapeutics:*
- Gene therapy (growth factors)
- Exosome-based treatments
- Smart dressings (drug delivery)
- Negative pressure wound therapy variants
- Electrical stimulation

**Global Health Systems Innovation:**

*Low-Resource Setting Approaches:*
- Task-shifting to community health workers
- mHealth screening tools
- Simplified risk assessment
- Locally producible footwear
- Telemedicine networks

*Implementation Research:*
\`\`\`
Evidence-to-Practice Gap:
Known effective interventions
        ↓
Implementation barriers
(access, training, systems, culture)
        ↓
Implementation strategies
        ↓
Outcomes monitoring
        ↓
Continuous improvement
\`\`\`

**Future Directions:**

*Research Priorities:*
- Prevention trial optimization
- Regenerative medicine translation
- AI validation in clinical practice
- Health equity interventions
- Economic sustainability

*Paradigm Shifts:*
- Prevention over treatment
- Personalized over standardized
- Connected over episodic care
- Team over individual provider
- Patient activation emphasis`,
      keyTerms: [
        { term: 'hyperspectral imaging', definition: 'Technology capturing multiple wavelength bands to assess tissue oxygenation and composition' },
        { term: 'mesenchymal stem cells', definition: 'Multipotent cells with regenerative and immunomodulatory properties for wound healing' },
        { term: 'digital twin', definition: 'Computational model of patient\'s foot for personalized biomechanical simulation' },
        { term: 'smart insole', definition: 'Pressure-sensing shoe insert enabling real-time monitoring and alert generation' },
        { term: 'exosome therapy', definition: 'Cell-derived vesicles containing therapeutic factors for wound healing' },
        { term: 'task-shifting', definition: 'Delegation of tasks to less specialized workers to expand healthcare access' },
      ],
      clinicalNotes: 'AI-based wound assessment is increasingly validated but requires clinical oversight. Stem cell therapies for diabetic foot are primarily in clinical trials. Smart insoles can detect early problems but adherence is challenging. Global variation in amputation rates reflects health systems factors amenable to intervention. Telemedicine extends specialist access but requires integration with local care.',
    },
  },

  media: [
    {
      id: 'foot-inspection-guide',
      type: 'diagram',
      filename: 'daily-foot-inspection.svg',
      title: 'Daily Foot Inspection Guide',
      description: 'Visual guide for daily foot self-examination',
    },
    {
      id: 'proper-footwear',
      type: 'diagram',
      filename: 'diabetes-footwear-guide.svg',
      title: 'Proper Footwear for Diabetes',
      description: 'Features of appropriate shoes for people with diabetes',
    },
  ],

  citations: [
    {
      id: 'iwgdf-guidelines',
      type: 'article',
      title: 'IWGDF Practical Guidelines on the Prevention and Management of Diabetic Foot Disease',
      source: 'International Working Group on the Diabetic Foot',
    },
    {
      id: 'ada-foot',
      type: 'article',
      title: 'Foot Care: Standards of Medical Care in Diabetes',
      source: 'Diabetes Care, American Diabetes Association',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-complication-prevention', targetType: 'topic', relationship: 'related', label: 'Complication Prevention' },
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'chronic-disease-warning-signs', targetType: 'topic', relationship: 'related', label: 'Warning Signs' },
  ],

  tags: {
    systems: ['integumentary', 'nervous', 'vascular'],
    topics: ['diabetes', 'foot care', 'complication prevention'],
    keywords: ['diabetic foot', 'foot care', 'neuropathy', 'ulcer prevention', 'amputation prevention'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
