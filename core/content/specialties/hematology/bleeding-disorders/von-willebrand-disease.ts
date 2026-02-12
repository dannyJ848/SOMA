/**
 * Von Willebrand Disease - Comprehensive Educational Content
 *
 * Comprehensive coverage of VWD including pathophysiology, classification,
 * diagnosis, and treatment strategies.
 */

import { EducationalContent } from '../../../types';

export const vonWillebrandDisease: EducationalContent = {
  id: 'condition-von-willebrand-disease',
  type: 'condition',
  name: 'Von Willebrand Disease',
  alternateNames: ['VWD', 'Von Willebrand Disorder', 'VWF Deficiency'],
  hpoId: 'HP:0001936',

  levels: {
    1: {
      level: 1,
      summary: 'Von Willebrand disease is the most common inherited bleeding disorder, caused by problems with a protein that helps blood clot.',
      explanation: `Von Willebrand disease (VWD) is a condition that affects how your blood clots. It is the most common bleeding disorder that people are born with.

**What Is von Willebrand Factor?**
- A protein in your blood that helps platelets stick together
- Also carries factor 8, another clotting protein
- Without enough of it, bleeding lasts longer

**Types:**
- Type 1: Lower amounts of the protein (most common, mildest)
- Type 2: The protein does not work properly
- Type 3: Very little or none of the protein (rarest, most severe)

**Symptoms:**
- Easy bruising
- Frequent nosebleeds
- Heavy bleeding after dental work
- Heavy menstrual periods in women
- Bleeding from gums
- Long bleeding after cuts or surgery

**Inheritance:**
- Usually passed from parents to children
- Both males and females can have it
- Sometimes symptoms are mild and not noticed

**Treatment:**
- Medicine called desmopressin (DDAVP) for some types
- Medicine to help prevent breakdown of clots
- Replacing the missing protein
- Avoiding certain medicines like aspirin`,
      keyTerms: [
        { term: 'platelets', definition: 'Small blood cells that help form clots' },
        { term: 'von Willebrand factor', definition: 'A protein that helps platelets stick together' },
        { term: 'desmopressin', definition: 'A medicine that releases stored von Willebrand factor' },
      ],
      analogies: [
        'Von Willebrand factor is like glue that helps platelets stick to a cut. Without enough glue, the platelets cannot form a good patch.',
      ],
      examples: [
        'A teenage girl has very heavy periods that last longer than normal.',
        'A child gets frequent nosebleeds that are hard to stop.',
      ],
    },
    2: {
      level: 2,
      summary: 'VWD is the most common inherited bleeding disorder; classified into types 1, 2, and 3 based on quantitative vs. qualitative defects in von Willebrand factor.',
      explanation: `Von Willebrand disease encompasses several subtypes with varying clinical severity.

**Classification:**
- Type 1: Partial quantitative deficiency (70-80% of cases)
- Type 2: Qualitative defects (15-30%)
  - 2A: Decreased platelet-dependent function
  - 2B: Increased affinity for platelets
  - 2M: Decreased platelet-dependent function (not 2A)
  - 2N: Decreased factor VIII binding
- Type 3: Virtually complete deficiency (rare, severe)

**VWF Function:**
- Mediates platelet adhesion to subendothelium
- Carries and stabilizes factor VIII
- Large and small multimers (larger = more hemostatically active)

**Laboratory Testing:**
- VWF antigen (VWF:Ag): Amount of protein
- VWF activity (VWF:RCo or VWF:GPIbM): Platelet-binding function
- Factor VIII level
- VWF:RCo/VWF:Ag ratio: <0.6 suggests type 2
- Ristocetin-induced platelet aggregation (RIPA): Increased in 2B

**Clinical Features:**
- Mucocutaneous bleeding predominates
- Menorrhagia, epistaxis, easy bruising
- Less joint bleeding than hemophilia
- Bleeding severity varies within same subtype

**Treatment:**
- Desmopressin (DDAVP): Releases endogenous VWF
  - Effective in type 1, some type 2
  - Test dose to assess response
- VWF-containing concentrates: For non-responders
- Antifibrinolytics: Tranexamic acid`,
      keyTerms: [
        { term: 'multimers', definition: 'Different sizes of VWF molecules; larger are more active' },
        { term: 'ristocetin', definition: 'Antibiotic used in lab testing of VWF function' },
        { term: 'VWF:RCo', definition: 'VWF ristocetin cofactor activity; measures platelet binding' },
      ],
    },
    3: {
      level: 3,
      summary: 'VWD diagnosis requires VWF antigen, activity, and FVIII levels; treatment is stratified by type with desmopressin for responders and VWF concentrates for others.',
      explanation: `Accurate VWD diagnosis requires understanding of VWF physiology and appropriate testing.

**Diagnostic Algorithm:**
1. Screening: aPTT may be prolonged (if FVIII low), bleeding history
2. Initial testing: VWF:Ag, VWF:RCo (or VWF:GPIbM), FVIII
3. If VWF:RCo/VWF:Ag <0.6: Further typing (multimer analysis, RIPA, VWF:CB, VWF:FVIIIB)
4. Consider repeat testing (VWF varies with stress, inflammation, hormones)

**Type-Specific Features:**

*Type 1:*
- VWF:Ag and VWF:RCo proportionally decreased
- Normal multimer distribution
- Good response to desmopressin

*Type 2A:*
- Loss of HMW multimers
- Decreased VWF:RCo/Ag ratio
- Defective synthesis or increased proteolysis

*Type 2B:*
- Increased platelet affinity
- May have thrombocytopenia
- RIPA increased at low ristocetin
- Desmopressin may worsen thrombocytopenia

*Type 2N:*
- Normal VWF:Ag and VWF:RCo
- Low FVIII (may mimic hemophilia A)
- VWF:FVIIIB binding assay diagnostic

*Type 3:*
- Virtually absent VWF and FVIII
- Severe bleeding, joint involvement possible

**Treatment Principles:**
- DDAVP: 0.3 mcg/kg IV over 30 min
  - Peak effect 30-60 min
  - Tachyphylaxis after 3-4 doses
  - Monitor for hyponatremia
- VWF concentrates: Humate-P, Wilate, Vonvendi
  - Contains both VWF and FVIII
  - Dosing based on VWF:RCo units`,
      keyTerms: [
        { term: 'VWF:FVIIIB', definition: 'Assay measuring VWF binding to factor VIII' },
        { term: 'VWF:CB', definition: 'VWF collagen binding assay; reflects HMW multimers' },
        { term: 'tachyphylaxis', definition: 'Decreased response to repeated doses' },
      ],
    },
    4: {
      level: 4,
      summary: 'VWD management requires accurate subtyping; desmopressin is first-line for type 1 and some type 2; VWF concentrates for non-responders; avoid DDAVP in type 2B.',
      explanation: `Comprehensive VWD management integrates accurate diagnosis with appropriate treatment selection.

**Desmopressin Response Testing:**
- Give DDAVP 0.3 mcg/kg IV
- Check VWF:Ag, VWF:RCo, FVIII at baseline, 1 hour, 4 hours
- Good response: ≥2x baseline or >50% normal levels
- Type 1: ~80% respond
- Type 2A: ~30% respond
- Type 2M: ~20% respond
- Type 2B: Generally avoid (may cause thrombocytopenia)
- Type 2N: May normalize FVIII

**VWF Concentrate Selection:**
- Plasma-derived with VWF and FVIII (Humate-P, Wilate)
  - FVIII rises over time (endogenous production)
  - May exceed target with prolonged treatment
- Plasma-derived VWF-predominant (Vonvendi)
  - Little FVIII content
  - May need FVIII supplement for initial treatment
- Recombinant VWF (Vonvendi): Viral-safe, consistent

**Special Situations:**

*Pregnancy:*
- VWF rises 2-3 fold during pregnancy
- Type 1 often normalizes
- Postpartum: VWF drops rapidly, bleeding risk 2-3 weeks
- May need treatment postpartum

*Menorrhagia:*
- First-line hormonal therapies
- Tranexamic acid during menses
- DDAVP or VWF concentrate if needed
- Consider underlying bleeding disorder in heavy menstrual bleeding

*Surgery:*
- Major: VWF concentrate to maintain VWF >50-100%
- Minor: DDAVP if responder
- Dental: Tranexamic acid mouthwash

**Acquired von Willebrand Syndrome:**
- Underlying conditions: LVAD, myeloma, hypothyroidism, valvular disease
- Loss of HMW multimers
- Treat underlying cause if possible`,
      keyTerms: [
        { term: 'AVWS', definition: 'Acquired von Willebrand syndrome; secondary to other conditions' },
        { term: 'LVAD', definition: 'Left ventricular assist device; causes AVWS via shear stress' },
        { term: 'HMW multimers', definition: 'High molecular weight multimers; most hemostatically active' },
      ],
    },
    5: {
      level: 5,
      summary: 'VWD diagnosis and management integrate VWF physiology, subtyping, and targeted therapy; acquired VWS requires addressing underlying conditions; pregnancy and surgery need specialized protocols.',
      explanation: `Expert VWD management requires understanding of complex diagnostic challenges and treatment nuances.

**Diagnostic Challenges:**
- VWF levels vary with:
  - ABO blood group: O type has 25-35% lower levels
  - Inflammation: Acute phase reactant
  - Hormones: Estrogen increases, thyroid affects levels
  - Stress, exercise: Increase levels
- Low VWF: 30-50% levels
  - May or may not cause bleeding
  - Decision to treat based on clinical context
- Reference ranges: Should be ABO-adjusted

**Type 2B Diagnostic Pitfalls:**
- May be confused with immune thrombocytopenia
- Thrombocytopenia worsens with stress, pregnancy
- RIPA increased at low concentrations (0.5 mg/mL)
- Multimer analysis shows loss of HMW
- Avoid DDAVP: Can worsen thrombocytopenia

**Type 2N vs. Hemophilia A:**
- Both have low FVIII
- VWD type 2N: VWF:Ag and VWF:RCo normal
- VWF:FVIIIB binding assay definitive
- Important for genetic counseling (autosomal vs X-linked)

**Gene Therapy:**
- Early phase trials for type 3 VWD
- AAV vector delivery of VWF gene
- Challenges: Large gene size, multimer formation

**Future Directions:**
- Improved VWF activity assays (VWF:GPIbM replacing VWF:RCo)
- Recombinant VWF products
- Gene editing approaches

**Acquired VWS Management:**
- LVAD: May need VWF concentrate; often improves with pump speed adjustment
- Multiple myeloma: Treat underlying disease
- Hypothyroidism: Thyroid replacement
- Valvular disease: Valve replacement
- Monoclonal gammopathy: IVIG may help`,
      keyTerms: [
        { term: 'VWF:GPIbM', definition: 'Newer VWF activity assay using murine GPIb; replacing VWF:RCo' },
        { term: 'low VWF', definition: 'VWF levels 30-50%; clinical significance debated' },
        { term: 'ABO effect', definition: 'Blood group O individuals have 25-35% lower VWF levels' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['bleeding disorder', 'coagulation', 'genetic'],
    keywords: ['von Willebrand', 'VWD', 'bleeding', 'VWF'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default vonWillebrandDisease;
