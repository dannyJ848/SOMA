/**
 * Cardiovascular Adaptations to Exercise - Comprehensive Educational Content
 *
 * Covers cardiac and vascular adaptations to chronic exercise training including
 * athlete's heart, endothelial function, and hemodynamic changes.
 */

import { EducationalContent } from '../../types';

export const cardiovascularAdaptations: EducationalContent = {
  id: 'sports-med-cardiovascular-adaptations',
  type: 'concept',
  name: 'Cardiovascular Adaptations to Exercise',
  alternateNames: ["Athlete's Heart", 'Cardiac Adaptations', 'Exercise-Induced Cardiac Remodeling'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular exercise makes your heart stronger and more efficient, like upgrading from a small pump to a bigger, better one.',
      explanation: `## How Exercise Makes Your Heart Stronger

Your heart is a muscle, and just like the muscles in your arms and legs, it gets stronger when you exercise!

**What Happens to Your Heart**
- It gets BIGGER and stronger
- It pumps MORE blood with each beat
- It doesn't have to work as hard during regular activities
- Your resting heart rate gets LOWER (a good thing!)

**What Happens to Your Blood Vessels**
- They become more flexible (like stretchy rubber bands)
- They can open wider when you need more blood flow
- Blood flows more smoothly through them

**Why This Matters**
Imagine your heart is like a water pump:
- An unfit heart = small pump that has to work really fast
- A fit heart = big, strong pump that works efficiently

**Cool Facts About Athletes' Hearts**
- Elite athletes can have heart rates as low as 40 beats per minute at rest
- A normal person's heart beats about 70-80 times per minute at rest
- Lower heart rate = more efficient heart!

**The Benefits**
- More energy for activities
- Less tired during sports
- Healthier for your whole life`,
      keyTerms: [
        { term: 'heart rate', definition: 'How many times your heart beats in one minute' },
        { term: 'blood vessels', definition: 'Tubes that carry blood throughout your body' },
        { term: 'efficient', definition: 'Doing a job well without wasting energy' },
      ],
      analogies: [
        'Your heart is like a car engine - training gives you a bigger, more powerful engine.',
        'Blood vessels are like garden hoses - exercise makes them more flexible and able to carry more.',
        'A trained heart is like a professional chef - gets the job done with less effort.',
      ],
      examples: [
        'After months of soccer practice, running around doesn\'t make your heart pound as hard.',
        'Professional cyclists have such strong hearts they can bike for hours without getting as tired as beginners.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic exercise training induces cardiac adaptations including increased heart chamber size, greater stroke volume, and lower resting heart rate, along with improved blood vessel function and blood pressure regulation.',
      explanation: `## Cardiac Adaptations

### Heart Changes with Training

**Structural Changes:**
- Heart chambers enlarge (especially left ventricle)
- Heart wall may thicken slightly
- Overall heart mass increases
- This is called "athlete's heart"

**Functional Improvements:**
- Stroke volume increases (more blood per beat)
- Resting heart rate decreases (50-60 bpm or lower)
- Cardiac output during exercise increases
- Heart becomes more efficient

### Types of Training, Types of Adaptation

**Endurance Training (Running, Swimming, Cycling):**
- Heart chambers dilate (get bigger)
- Walls stay relatively thin
- Called "eccentric hypertrophy"
- Heart fills with more blood

**Resistance Training (Weight Lifting):**
- Heart walls thicken
- Chamber size increases less
- Called "concentric hypertrophy"
- Heart pushes against higher pressure

## Blood Vessel Adaptations

**Arteries:**
- Become more elastic
- Better able to dilate (open wider)
- Improved endothelial function
- Lower blood pressure at rest

**Capillaries:**
- New capillaries form in muscles (angiogenesis)
- Better oxygen delivery to working muscles
- Improved waste removal

## Blood Adaptations

**Blood Volume:**
- Total blood volume increases
- More plasma (liquid part)
- More red blood cells (in trained athletes)
- Better oxygen-carrying capacity

## Resting Heart Rate Changes

| Fitness Level | Resting Heart Rate |
|---------------|-------------------|
| Sedentary | 70-85 bpm |
| Moderately Active | 60-70 bpm |
| Highly Trained | 50-60 bpm |
| Elite Endurance | 40-50 bpm |

**Why Lower is Better:**
- Heart pumps more per beat
- Less work for same blood flow
- Heart "rests" more between beats
- Sign of cardiovascular efficiency`,
      keyTerms: [
        { term: "athlete's heart", definition: 'Benign enlargement of the heart that develops with regular intense exercise' },
        { term: 'stroke volume', definition: 'Amount of blood pumped by the heart with each beat' },
        { term: 'cardiac output', definition: 'Total blood pumped per minute; equals heart rate times stroke volume' },
        { term: 'endothelium', definition: 'Inner lining of blood vessels that controls dilation and constriction' },
        { term: 'angiogenesis', definition: 'Formation of new blood vessels, especially capillaries' },
        { term: 'bradycardia', definition: 'Slow heart rate; in athletes, athletic bradycardia is a normal adaptation' },
      ],
      analogies: [
        'Endurance training makes the heart like a bigger bucket - holds and pumps more blood.',
        'Resistance training makes the heart like a stronger pump - pushes against higher pressure.',
        'Improved blood vessels are like upgrading narrow roads to wide highways.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular adaptation to exercise involves eccentric or concentric cardiac hypertrophy depending on training modality, enhanced myocardial contractility, vagal tone predominance, and vascular remodeling with improved endothelial function, distinguishable from pathological hypertrophy by preserved diastolic function.',
      explanation: `## Cardiac Structural Adaptations

### Patterns of Cardiac Remodeling

**Eccentric Hypertrophy (Endurance Athletes):**
- Volume overload → sarcomeres added in series
- LV internal diameter increases
- Wall thickness: normal to mildly increased
- LV mass increases proportionally
- Normal relative wall thickness ratio

**Concentric Hypertrophy (Strength Athletes):**
- Pressure overload → sarcomeres added in parallel
- LV wall thickness increases
- Chamber size: normal to mildly increased
- Increased relative wall thickness
- Less pronounced than pathological hypertrophy

### Echocardiographic Findings in Athlete's Heart
| Parameter | Normal | Athlete's Heart | Pathological |
|-----------|--------|-----------------|--------------|
| LV end-diastolic diameter | <55mm | 55-65mm | Variable |
| LV wall thickness | 6-11mm | 12-15mm | >15mm |
| LV mass index | <115 g/m² | 115-200 g/m² | >200 g/m² |
| Diastolic function | Normal | Normal/Enhanced | Impaired |
| Response to detraining | - | Regresses | Persists |

## Functional Cardiac Adaptations

### Systolic Function
**Enhanced Contractility:**
- Increased calcium handling
- β-adrenergic sensitivity maintained
- Ejection fraction normal to high-normal (55-75%)
- Greater maximal cardiac output

### Diastolic Function
**Improved Filling:**
- Enhanced early diastolic filling (E wave)
- Increased LV compliance
- Greater preload reserve
- Frank-Starling mechanism optimization

### Autonomic Adaptations
**Vagal Predominance:**
- Increased parasympathetic tone
- Decreased sympathetic activity at rest
- Athletic bradycardia (resting HR 40-60 bpm)
- Enhanced heart rate variability (HRV)

**Heart Rate Recovery:**
- Faster HR recovery post-exercise
- Marker of autonomic function
- Predictive of cardiovascular mortality

## Vascular Adaptations

### Arterial Function
**Endothelial Adaptations:**
- Increased eNOS expression
- Enhanced NO bioavailability
- Improved flow-mediated dilation (FMD)
- Reduced arterial stiffness

**Structural Vascular Changes:**
- Conduit artery diameter may increase
- Arterial wall thickness changes
- Improved compliance

### Peripheral Vascular Adaptations
**Capillarization:**
- Increased capillary density in trained muscles
- VEGF-mediated angiogenesis
- Improved oxygen extraction
- Enhanced a-vO2 difference

### Blood Pressure Effects
**Resting Blood Pressure:**
- Systolic BP: Decreases 5-10 mmHg
- Diastolic BP: Decreases 5-8 mmHg
- Effect comparable to single antihypertensive

**Mechanisms:**
- Decreased sympathetic nervous system activity
- Improved endothelial function
- Favorable arterial remodeling

## Hemodynamic Adaptations

### Cardiac Output Equation
Q = HR × SV

**At Rest (Trained vs. Untrained):**
- HR: Lower (trained)
- SV: Higher (trained)
- Q: Similar (~5 L/min)

**During Maximal Exercise:**
| Parameter | Untrained | Trained |
|-----------|-----------|---------|
| Max HR | ~195 bpm | ~190 bpm |
| Max SV | ~100 mL | ~150-180 mL |
| Max Q | ~20 L/min | ~30-40 L/min |

### Blood Volume Adaptations
- Total blood volume: +10-20%
- Plasma volume expansion
- Increased red cell mass
- Pseudoanemia (dilutional effect)`,
      keyTerms: [
        { term: 'eccentric hypertrophy', definition: 'Cardiac remodeling with increased chamber volume and proportional wall thickening, seen with endurance training (volume overload)' },
        { term: 'concentric hypertrophy', definition: 'Cardiac remodeling with increased wall thickness relative to chamber size, seen with resistance training (pressure overload)' },
        { term: 'heart rate variability (HRV)', definition: 'Beat-to-beat variation in R-R intervals; higher HRV indicates greater parasympathetic tone and cardiovascular health' },
        { term: 'flow-mediated dilation (FMD)', definition: 'Non-invasive measure of endothelial function; brachial artery dilation in response to reactive hyperemia' },
        { term: 'athletic bradycardia', definition: 'Physiological low resting heart rate (<60 bpm) in trained athletes due to enhanced vagal tone' },
        { term: 'Frank-Starling mechanism', definition: 'Intrinsic property where increased venous return stretches the ventricle, increasing stroke volume' },
      ],
      clinicalNotes: "Distinguishing athlete's heart from hypertrophic cardiomyopathy is crucial. Key features: athlete's heart regresses with detraining, maintains normal diastolic function, lacks family history, and shows appropriate physiological response to exercise testing.",
    },
    4: {
      level: 4,
      summary: "Cardiac adaptation to exercise involves physiological hypertrophy mediated by IGF-1/PI3K/Akt signaling distinct from pathological Gq/calcineurin pathways, with preserved or enhanced systolic and diastolic function, accompanied by vascular remodeling through eNOS activation and angiogenic factors, requiring differentiation from cardiomyopathy in clinical practice.",
      explanation: `## Molecular Mechanisms of Cardiac Hypertrophy

### Physiological vs. Pathological Signaling

**Physiological Hypertrophy (Exercise):**
\`\`\`
Exercise → Hemodynamic stress + Growth factors
                    ↓
              IGF-1 release (local and systemic)
                    ↓
         IGF-1 receptor → PI3K → Akt
                    ↓
    Physiological gene program:
    - α-MHC expression
    - SERCA2a upregulation
    - Normal Ca2+ handling
    - Angiogenesis coordinated with growth
\`\`\`

**Pathological Hypertrophy (Disease):**
\`\`\`
Pressure overload / Neurohormones
                    ↓
        Gq-coupled receptors (AT1R, ET-1R)
                    ↓
         Calcineurin / NFAT pathway
                    ↓
    Pathological gene program:
    - β-MHC re-expression
    - Fetal gene reactivation
    - ANP/BNP upregulation
    - Fibrosis
\`\`\`

### Akt Signaling in the Heart
**Downstream Effects:**
- mTORC1 activation → protein synthesis
- GSK3β inhibition → hypertrophy promotion
- eNOS phosphorylation → cardioprotection
- Metabolic regulation

**Negative Regulators:**
- PTEN: Dephosphorylates PI3K products
- Training may downregulate PTEN

### Cardiac Metabolism
**Trained Heart:**
- Enhanced fatty acid oxidation capacity
- Preserved metabolic flexibility
- Increased mitochondrial biogenesis
- PGC-1α upregulation

**Contrast with Pathological:**
- Metabolic shift to glucose
- Reduced fatty acid oxidation
- "Fetal metabolic pattern"

## Autonomic Remodeling

### Vagal Adaptation Mechanisms
**Central Adaptations:**
- Increased baroreflex sensitivity
- Modified central command
- Enhanced nucleus tractus solitarius function

**Cardiac Intrinsic Mechanisms:**
- Increased acetylcholine sensitivity
- Modified funny channel (HCN) expression
- Reduced intrinsic heart rate

### Heart Rate Variability Physiology
**Components:**
- High frequency (HF): Parasympathetic modulation
- Low frequency (LF): Mixed sympathetic/parasympathetic
- LF/HF ratio: Sympathovagal balance

**Training Effects:**
- Increased HF power
- Decreased LF/HF ratio at rest
- Enhanced HRV complexity

## Vascular Molecular Adaptations

### Endothelial NO Signaling
**eNOS Regulation:**
- Shear stress → eNOS activation
- Akt phosphorylation of eNOS (Ser1177)
- Increased eNOS expression
- Enhanced BH4 cofactor availability

**NO Functions:**
- Vasodilation
- Anti-inflammatory
- Anti-thrombotic
- Anti-proliferative

### Arterial Stiffness and Compliance
**Determinants:**
- Elastin/collagen ratio
- Smooth muscle tone
- Endothelial function
- AGE accumulation (with aging)

**Exercise Effects:**
- Reduced pulse wave velocity
- Improved compliance
- Structural and functional mechanisms

### Angiogenesis Signaling
**VEGF Pathway:**
- Exercise/hypoxia → HIF-1α stabilization
- VEGF transcription
- VEGFR2 endothelial activation
- Capillary sprouting and maturation

**Additional Factors:**
- FGF-2
- Angiopoietins
- PGC-1α coordination

## Clinical Differentiation: Athlete's Heart vs. Cardiomyopathy

### Diagnostic Algorithm
**Athlete's Heart Features:**
- Symmetric LVH (if present)
- LV cavity enlargement (endurance)
- Normal/supranormal diastolic function
- Normal exercise response
- Regression with detraining (2-3 months)

**Concerning Features:**
- Marked asymmetric hypertrophy
- LV wall >15mm
- Impaired diastolic relaxation
- Abnormal exercise BP response
- Family history sudden death

### Advanced Evaluation
**When Indicated:**
- Exercise echocardiography
- Cardiac MRI (fibrosis detection)
- Genetic testing
- Detraining challenge

### ECG Findings in Athletes
**Common/Normal:**
- Sinus bradycardia
- First-degree AV block
- Early repolarization
- Isolated voltage criteria for LVH

**Concerning:**
- T-wave inversions (location matters)
- ST depression
- Pathological Q waves
- QTc prolongation
- Epsilon waves`,
      keyTerms: [
        { term: 'IGF-1/PI3K/Akt pathway', definition: 'Signaling cascade mediating physiological cardiac hypertrophy; promotes growth while maintaining normal function and angiogenesis' },
        { term: 'calcineurin/NFAT pathway', definition: 'Signaling cascade associated with pathological cardiac hypertrophy; leads to fibrosis and dysfunction' },
        { term: 'baroreflex sensitivity', definition: 'Responsiveness of heart rate to changes in blood pressure; enhanced with training, indicating improved autonomic function' },
        { term: 'HCN channels', definition: 'Hyperpolarization-activated cyclic nucleotide-gated channels ("funny channels"); regulate sinoatrial node automaticity and contribute to training bradycardia' },
        { term: 'pulse wave velocity', definition: 'Speed of arterial pressure wave propagation; measure of arterial stiffness, reduced (improved) with exercise training' },
        { term: 'HIF-1α', definition: 'Hypoxia-inducible factor 1-alpha; transcription factor stabilized by exercise/hypoxia that activates angiogenic gene expression' },
      ],
      clinicalNotes: "Key clinical points: 1) Athlete's heart regresses with 3 months detraining - cardiomyopathy does not. 2) LV wall thickness >15mm is rare in athlete's heart - evaluate for HCM. 3) Cardiac MRI with late gadolinium enhancement can detect fibrosis in HCM. 4) T-wave inversions in lateral leads (V5-V6, I, aVL) are concerning and warrant investigation.",
    },
    5: {
      level: 5,
      summary: "Contemporary understanding of exercise-induced cardiac remodeling integrates epigenetic regulation, microRNA networks, and inter-organ crosstalk through cardiokines and exosomes, with precision medicine approaches emerging for distinguishing physiological adaptation from early cardiomyopathy and optimizing training for cardiovascular health.",
      explanation: `## Molecular Signatures of Cardiac Adaptation

### Epigenetic Regulation
**DNA Methylation:**
- Exercise-induced demethylation of protective genes
- DNMT3A/B regulation
- Tissue-specific methylation patterns
- Potential for "epigenetic memory"

**Histone Modifications:**
- H3K9ac, H3K14ac: Active transcription at exercise-responsive genes
- HDAC inhibition with exercise
- Class IIa HDACs: Export from nucleus enables MEF2 activity

**Chromatin Remodeling:**
- SWI/SNF complex involvement
- BRG1: Required for both physiological and pathological programs
- Context-dependent effects

### Non-Coding RNA Networks
**MicroRNAs in Cardiac Adaptation:**
| miRNA | Change with Training | Target/Function |
|-------|---------------------|-----------------|
| miR-1 | ↓ | Cardiac hypertrophy regulation |
| miR-133 | ↓ | Anti-hypertrophic |
| miR-208a | Heart-specific | MYH7 regulation |
| miR-222 | ↑ | Cardiomyocyte proliferation |
| miR-17-92 | ↑ | Pro-hypertrophic cluster |

**Circulating miRNAs:**
- Cardiac-enriched miRNAs released during exercise
- Potential biomarkers of adaptation
- May mediate systemic effects (exosomes)

**Long Non-Coding RNAs:**
- Mhrt: Protective in pathological hypertrophy
- lncRNA involvement in chromatin remodeling
- Emerging regulatory layer

### Cardiokine Signaling
**Heart as Endocrine Organ:**
- ANP/BNP: Traditional cardiac hormones
- Follistatin-like 1 (FSTL1): Cardioprotective
- Neuregulin (NRG1): Cardiomyocyte survival, potential regeneration
- FGF21: Metabolic regulation

**Exosome-Mediated Communication:**
- Cardiac-derived exosomes
- miRNA cargo delivery
- Inter-organ communication
- Exercise modifies exosome content

## Advanced Diagnostics

### Cardiac MRI Applications
**Tissue Characterization:**
- T1 mapping: Fibrosis detection, extracellular volume
- T2 mapping: Edema, inflammation
- Late gadolinium enhancement: Replacement fibrosis
- Strain imaging: Subclinical dysfunction

**Athlete's Heart vs. Cardiomyopathy:**
- Native T1 elevated in HCM
- ECV expansion in DCM, HCM
- LGE pattern (junction vs. patchy)
- Feature tracking strain analysis

### Genetic Testing Considerations
**When to Test:**
- LV wall >15mm
- Significant ST-T abnormalities
- Family history sudden death
- Syncope concerning for arrhythmia

**Interpretation Challenges:**
- Variants of uncertain significance
- Incomplete penetrance
- Gene-environment interaction
- Exercise as modifier

### Exercise Testing Protocols
**Physiological Response (Normal):**
- Appropriate BP augmentation
- Preserved ejection fraction
- Enhanced diastolic filling
- No ischemia, arrhythmia

**Concerning Findings:**
- Failure to augment EF (HCM)
- LVOT gradient increase (HCM)
- Complex ventricular ectopy
- Inappropriate BP response

## Clinical Frontiers

### Sudden Cardiac Death in Athletes
**Risk Stratification:**
- Pre-participation screening (ECG sensitivity/specificity debate)
- Imaging in high-risk features
- Family history documentation
- Genetic testing algorithms

**Most Common Etiologies by Age:**
- <35 years: HCM, anomalous coronaries, arrhythmogenic cardiomyopathy
- >35 years: Atherosclerotic coronary disease

### Extreme Exercise Controversy
**Potential Concerns:**
- Right ventricular remodeling
- Atrial fibrillation risk
- Coronary artery calcification (paradox)
- Fibrosis in ultra-endurance athletes

**Evidence Interpretation:**
- U-curve or reverse J-curve hypothesis
- Population vs. individual risk
- Confounding factors
- Benefits outweigh risks for most

### Precision Cardiovascular Medicine
**Emerging Approaches:**
- Polygenic risk scores + training response
- Metabolomics signatures of adaptation
- Proteomics biomarker panels
- Integrated multi-omics

**Training Optimization:**
- Individual dose-response curves
- HRV-guided training intensity
- Recovery optimization
- Long-term cardiovascular health focus

## Sex Differences in Cardiac Adaptation

### Female Athlete's Heart
**Structural Differences:**
- Smaller absolute LV dimensions
- LV wall thickness rarely >12mm
- Proportionally similar relative changes

**Hormonal Influences:**
- Estrogen: Cardioprotective effects
- Menstrual cycle: Minimal impact on remodeling
- Pregnancy: Overlapping physiology

### Clinical Implications
- Sex-specific reference values essential
- Lower sensitivity of standard criteria
- Ongoing research for female-specific guidelines

## Future Directions

### Regenerative Potential
**Cardiomyocyte Renewal:**
- Exercise stimulates low-level proliferation
- miR-222 pathway
- Endogenous regenerative programs

**Therapeutic Applications:**
- Exercise mimetics for cardiac protection
- Targeted pathway activation
- Combined with cell therapy

### Wearables and Monitoring
**Continuous Data:**
- HRV monitoring
- Strain detection (emerging)
- Arrhythmia identification
- Training load optimization

**AI Integration:**
- Pattern recognition
- Early warning systems
- Personalized recommendations`,
      keyTerms: [
        { term: 'cardiokines', definition: 'Cytokines and peptides secreted by the heart with autocrine, paracrine, and endocrine effects; include ANP, BNP, FSTL1, and neuregulin' },
        { term: 'cardiac exosomes', definition: 'Extracellular vesicles released by cardiomyocytes containing miRNAs and proteins; mediate inter-cellular and inter-organ communication' },
        { term: 'T1 mapping', definition: 'Cardiac MRI technique measuring myocardial T1 relaxation time; elevated in fibrosis, inflammation, infiltrative disease' },
        { term: 'extracellular volume (ECV)', definition: 'CMR-derived measure of interstitial space expansion; elevated in fibrosis and infiltrative cardiomyopathies' },
        { term: 'arrhythmogenic cardiomyopathy', definition: 'Inherited cardiomyopathy (formerly ARVC) characterized by fibrofatty replacement; important cause of sudden death in athletes' },
        { term: 'HRV-guided training', definition: 'Using heart rate variability metrics to adjust training intensity and optimize recovery; reflects autonomic readiness' },
      ],
      clinicalNotes: `Advanced clinical integration:
1. Cardiac MRI with tissue characterization is gold standard for differentiating athlete's heart from cardiomyopathy when echo inconclusive
2. Native T1 >1100ms (1.5T) suggests pathology; athlete's heart typically normal
3. Athletes with LGE at RV insertion points: Generally benign, follow clinically
4. Extreme endurance athletes: Consider AF screening, particularly if palpitations; rhythm monitoring
5. Female athletes: Wall thickness >12mm should prompt evaluation even though standard criteria allow up to 15mm
6. Pre-participation screening: 12-lead ECG per international consensus; interpretation requires athlete-specific criteria
7. Sudden cardiac death prevention: Balance screening sensitivity with false-positive rates and downstream testing burden`,
    },
  },

  media: [
    {
      id: 'cardiac-remodeling-types',
      type: 'diagram',
      filename: 'cardiac-remodeling-patterns.svg',
      title: 'Cardiac Remodeling Patterns',
      description: 'Eccentric vs concentric hypertrophy in endurance and resistance athletes',
    },
    {
      id: 'athlete-heart-vs-hcm',
      type: 'diagram',
      filename: 'athlete-heart-vs-hcm.svg',
      title: "Athlete's Heart vs Hypertrophic Cardiomyopathy",
      description: 'Diagnostic algorithm for differentiating physiological from pathological hypertrophy',
    },
  ],

  citations: [
    {
      id: 'sharma-athletes-heart',
      type: 'article',
      title: 'International recommendations for electrocardiographic interpretation in athletes',
      authors: ['Sharma, S.', 'Drezner, J.A.', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'morganroth-hypothesis',
      type: 'article',
      title: "The athlete's heart: remodeling, electrocardiogram, and preparticipation screening",
      source: 'Cardiology Clinics',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'parent', label: 'Exercise Physiology Basics' },
    { targetId: 'sports-med-exercise-for-cardiovascular', targetType: 'concept', relationship: 'related', label: 'Exercise for Cardiovascular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiac-adaptation', "athlete's-heart", 'exercise-physiology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiovascularAdaptations;
