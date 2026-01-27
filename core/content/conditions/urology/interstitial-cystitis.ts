/**
 * Interstitial Cystitis / Bladder Pain Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const interstitialCystitis: EducationalContent = {
  id: 'condition-interstitial-cystitis',
  type: 'condition',
  name: 'Interstitial Cystitis / Bladder Pain Syndrome',
  alternateNames: ['IC/BPS', 'Painful Bladder Syndrome', 'Bladder Pain Syndrome'],
  hpoId: 'HP:0000082',

  levels: {
    1: {
      level: 1,
      summary: 'Interstitial cystitis is a chronic bladder condition causing pressure and pain in the bladder area, along with urinary frequency and urgency, often mimicking a urinary tract infection.',
      explanation: `Interstitial cystitis (IC) is a chronic condition that causes bladder pain, pressure, and discomfort. It affects the bladder and can have a major impact on quality of life.

**Common Symptoms:**
- Pain or pressure in the bladder area
- Pain that gets worse as the bladder fills
- Frequent urge to urinate (up to 60 times a day)
- Waking up many times at night to urinate
- Pain during sexual activity
- Flare-ups where symptoms suddenly get worse

**What Makes IC Different:**
- Symptoms come and go (flare-ups)
- Not caused by infection
- Antibiotics don't help
- Affects women more than men

**Things That Can Trigger Flare-ups:**
- Certain foods (coffee, alcohol, spicy foods, citrus)
- Stress
- Menstrual cycle
- Sexual activity
- Tight clothing
- Exercise

**What You Can Do:**
- Identify and avoid trigger foods
- Practice stress management
- Wear loose clothing
- Apply heat to the pelvic area
- See a doctor for proper diagnosis and treatment`,
      keyTerms: [
        { term: 'interstitial cystitis', definition: 'Chronic bladder condition causing pain and urinary symptoms' },
        { term: 'flare-up', definition: 'Period when IC symptoms suddenly get worse' },
        { term: 'pelvic', definition: 'The lower part of the abdomen, between the hip bones' },
        { term: 'frequency', definition: 'Needing to urinate more often than normal' },
        { term: 'urgency', definition: 'Sudden, strong need to urinate' },
      ],
      analogies: [
        'A bladder with interstitial cystitis is like a sunburn—it hurts when anything touches it or fills it up.',
        'Think of IC as having a blister on the inside of your bladder that gets irritated as the bladder stretches.'
      ],
      examples: [
        'A 35-year-old woman has pelvic pain and needs to urinate 15 times daily, but tests show no infection—she may have interstitial cystitis.',
        'A man notices his bladder pain worsens after drinking coffee and eating spicy foods—common IC triggers.'
      ],
      patientCounselingPoints: [
        'Keep a food diary to identify foods that worsen your symptoms',
        'Try an elimination diet to identify trigger foods',
        'Practice pelvic floor relaxation exercises',
        'Apply a heating pad to your lower abdomen for pain relief',
        'Join an IC support group for coping strategies'
      ],
    },
    2: {
      level: 2,
      summary: 'Interstitial cystitis/bladder pain syndrome is a chronic condition characterized by bladder pain, urinary frequency, and urgency, diagnosed by exclusion and requiring multimodal treatment.',
      explanation: `## Definition and Terminology

**Interstitial Cystitis/Bladder Pain Syndrome (IC/BPS):**
- Chronic unpleasant sensation (pain, pressure, discomfort)
- Perceived to be related to the urinary bladder
- Associated with lower urinary tract symptoms
- Duration > 6 weeks
- No infection or other identifiable causes

**Subtypes:**
- **Ulcerative (Hunner's lesions):** 5-10% of patients
- **Non-ulcerative:** 90-95% of patients

## Epidemiology

**Demographics:**
- Women > Men (ratio 5:1)
- Typical onset: 40-60 years
- Can occur at any age
- Possibly underdiagnosed in men

**Associations:**
- Often coexists with other chronic pain conditions
- Fibromyalgia, irritable bowel syndrome, chronic fatigue
- Migraines, temporomandibular joint disorder

## Clinical Presentation

**Bladder-Centered Symptoms:**
- Suprapubic pain or pressure
- Pain worsening with bladder filling
- Relief with voiding (partial)
- Urinary frequency (often > 8 times/day)
- Nocturia (often > 2 times/night)
- Urgency

**Pain Characteristics:**
- Can be constant or intermittent
- May radiate to urethra, vagina, pelvis, perineum
- Dyspareunia (painful intercourse) common in women

**Flare Factors:**
- Dietary triggers
- Stress
- Physical activity
- Sexual activity
- Menstrual cycle

## Diagnosis (Exclusion)

**Required Workup:**
- Urinalysis (rule out infection, hematuria)
- Urine culture (rule out UTI)
- Urine cytology (if risk factors for bladder cancer)
- Cystoscopy (may show Hunner's lesions)
- Potassium sensitivity test (rarely used now)

**Diagnostic Criteria (ESSIC):**
- Chronic pelvic pain, pressure, or discomfort
- Perceived to be related to the bladder
- At least one other urinary symptom (frequency, urgency, nocturia)
- Absence of confusable diseases

**Cystoscopic Findings:**
- **Hunner's ulcers:** Red, bleeding areas with small vessels radiating
- **Glomerulations:** Petechial hemorrhages after distension
- Normal cystoscopy does NOT rule out IC/BPS

## Treatment Approach

**Multimodal Therapy Required:**

**First-Line (Self-Care):**
- Dietary modification
- Stress management
- Pelvic floor relaxation
- Physical therapy

**Second-Line (Medications):**
- Oral medications
- Bladder instillations

**Third-Line (Procedures):**
- Neuromodulation
- Botulinum toxin injections

**Fourth-Line (Surgery):**
- Reserved for severe, refractory cases`,
      keyTerms: [
        { term: 'Hunner\'s lesion', definition: 'Inflammatory ulcerative lesion found in ulcerative IC/BPS' },
        { term: 'suprapubic', definition: 'Area above the pubic bone; location of bladder pain' },
        { term: 'dyspareunia', definition: 'Painful sexual intercourse' },
        { term: 'glomerulations', definition: 'Small pinpoint hemorrhages in bladder wall seen during cystoscopy' },
        { term: 'nocturia', definition: 'Waking at night to urinate' },
      ],
      analogies: [
        'The bladder in IC/BPS is like an over-sensitive alarm system that goes off even when there\'s no real danger.'
      ],
      examples: [
        'A woman with chronic pelvic pain, frequency, and urgency, but negative urine cultures likely has IC/BPS.',
        'Cystoscopy showing Hunner\'s ulcers confirms ulcerative IC, which requires different treatment than non-ulcerative IC.'
      ],
      patientCounselingPoints: [
        'IC is a diagnosis of exclusion—infections and other conditions must be ruled out first',
        'Many patients find relief by avoiding common trigger foods like caffeine, alcohol, citrus, and spicy foods',
        'Symptom flare-ups are common even with treatment—develop a plan for managing flares',
        'Pelvic floor physical therapy can significantly reduce pain for many patients'
      ],
    },
    3: {
      level: 3,
      summary: 'IC/BPS pathophysiology involves urothelial dysfunction, neurogenic inflammation, and mast cell activation, with treatment targeting the urinary glycosaminoglycan layer, pain pathways, and behavioral factors.',
      explanation: `## Pathophysiology

**Urothelial Dysfunction (Leaky Epithelium):**
- Defective glycosaminoglycan (GAG) layer
- Increased permeability to urinary solutes
- Potassium and other solutes irritate bladder wall
- Nerve ending activation → pain, urgency

**Neurogenic Inflammation:**
- Substance P, CGRP release from nerve terminals
- Mast cell activation and degranulation
- Neurogenic plasma extravasation
- Central sensitization develops over time

**Mast Cell Involvement:**
- Increased mast cells in detrusor muscle
- Release histamine, tryptase, prostaglandins
- Contribute to inflammation, pain, fibrosis
- Antihistamine benefits support this mechanism

**Autoimmune Considerations:**
- Autoantibodies in some patients
- Association with other autoimmune conditions
- Possible antiproliferative factor (APF)

**CNS Sensitization:**
- Chronic pain leads to central changes
- Wind-up phenomenon in spinal cord
- Reduced pain threshold
- Explains systemic symptoms

## Pharmacologic Treatment

**Oral Agents:**

**Amitriptyline:**
- Tricyclic antidepressant
- Mechanism: Increases serotonin/norepinephrine, antihistamine effect
- Starting: 10-25 mg at bedtime
- Titrate: Up to 75-100 mg
- Benefits: Pain, frequency, sleep
- Side effects: Sedation, dry mouth, weight gain

**Pentosan Polysulfate (Elmiron):**
- Only FDA-approved oral medication for IC/BPS
- Synthetic GAG analogue, repairs urothelium
- Dose: 100 mg TID
- Onset: 3-6 months for effect
- Side effects: GI upset, rare hepatotoxicity, rare pigmentary maculopathy
- Monitoring: LFTs periodically, eye exams with long-term use

**Antihistamines:**
- **Hydroxyzine:** H1 blocker, mast cell stabilizer
- **Cimetidine:** H2 blocker
- Benefits patients with histamine-related symptoms
- May help with nocturia

**Cimetidine:**
- H2 receptor antagonist
- Dose: 300 mg BID-TID
- May reduce mast cell activity

**Cyclosporine:**
- Immunomodulator
- For refractory cases
- Significant side effects
- Requires monitoring

**Bladder Instillations:**

**DMSO (Dimethyl Sulfoxide):**
- Anti-inflammatory, analgesic, muscle relaxant
- Instilled weekly for 6 weeks
- Garlic-like body odor afterward
- Less commonly used today

**Heparin:**
- GAG layer analog
- Protects urothelium
- Mixed with lidocaine, sodium bicarbonate
- Weekly instillations for 6-12 weeks

**Chondroitin Sulfate / Hyaluronic Acid:**
- GAG layer replacement
- Similar to heparin instillations
- Various commercial preparations

**BCG (Bacillus Calmette-Guérin):**
- Immune stimulation
- Mixed results, not commonly used
- More for ulcerative IC

## Behavioral Therapy

**Timed Voiding:**
- Schedule voiding every 2-3 hours
- Gradually increase intervals
- Reduces frequency, urgency

**Bladder Retraining:**
- Delay voiding when urge occurs
- Pelvic floor relaxation techniques
- Distraction techniques
- Goal: Increase functional bladder capacity

**Stress Management:**
- Cognitive behavioral therapy
- Mindfulness-based stress reduction
- Relaxation techniques
- Sleep hygiene

**Dietary Modification:**

**Common Trigger Foods:**
- Coffee, tea (caffeine)
- Alcohol
- Citrus fruits and juices
- Tomatoes
- Spicy foods
- Artificial sweeteners
- Carbonated beverages

**Elimination Diet:**
- Remove all potential triggers
- Gradually reintroduce one at a time
- Identify individual triggers
- Many patients have different triggers

## Physical Therapy

**Pelvic Floor Physical Therapy:**
- Many patients have pelvic floor hypertonicity
- Trigger point release (internal and external)
- Biofeedback
- Therapeutic exercise
- Home program

**Myofascial Release:**
- Releases tight pelvic floor muscles
- Reduces associated pain
- Can be combined with stretching`,
      keyTerms: [
        { term: 'GAG layer', definition: 'Glycosaminoglycan layer; protective coating on the bladder urothelium that is defective in IC/BPS' },
        { term: 'substance P', definition: 'Neuropeptide involved in pain transmission and inflammation' },
        { term: 'CGRP', definition: 'Calcitonin gene-related peptide; neuropeptide involved in neurogenic inflammation' },
        { term: 'APF', definition: 'Antiproliferative factor; protein found in urine of IC patients that inhibits bladder cell growth' },
        { term: 'pentosan polysulfate', definition: 'Oral medication that repairs the GAG layer of the bladder' },
        { term: 'pelvic floor hypertonicity', definition: 'Increased resting tone of pelvic floor muscles; contributes to pelvic pain' },
      ],
      clinicalNotes: 'Pentosan polysulfate takes 3-6 months for full effect—counsel patients to persist. Amitriptyline at low doses (10-50 mg) helps pain and sleep more than mood. Pelvic floor physical therapy is underutilized but highly effective, especially for patients with hypertonic pelvic muscles.',
    },
    4: {
      level: 4,
      summary: 'Complex IC/BPS management addresses Hunner\'s ulcer treatment, neuromodulation, intravesical botulinum toxin, and distinguishing IC/BPS from other chronic pain conditions like endometriosis and vulvodynia.',
      explanation: `## Hunner\'s Ulcer (Ulcerative IC)

**Characteristics:**
- Distinct from non-ulcerative IC
- 5-10% of IC/BPS patients
- Specific inflammatory patches
- Often more severe symptoms
- Responds differently to treatment

**Diagnosis:**
- Cystoscopic visualization required
- Appear as: Red, inflamed areas
- Small radiating vessels (glomerulations)
- Bleed easily with distension
- Biopsy to rule out cancer

**Treatment:**

**Laser Ablation:**
- Holmium or thulium laser
- Outpatient or short-stay procedure
- 70-80% have significant improvement
- May require repeat treatment

**Fulguration/Resection:**
- Electrocautery destruction
- Similar outcomes to laser
- Can be done during cystoscopy

**Triamcinolone Injection:**
- Injected into ulcer edges
- Steroid reduces inflammation
- Combined with ablation

**Outcomes:**
- Good response to ulcer-directed therapy
- Better than non-ulcerative IC treatment response
- Recurrence common, may need repeat procedures

## Neuromodulation

**Sacral Neuromodulation (InterStim):**
- Modulates sacral nerve roots (S3)
- Decreases urgency, frequency, pain
- **Test phase:** Temporary lead for 1-2 weeks
- **Permanent implant:** If > 50% improvement in test phase
- FDA approved for IC/BPS symptoms
- Helps with urgency, frequency more than pain

**Percutaneous Tibial Nerve Stimulation (PTNS):**
- Stimulation of tibial nerve (S3 derivative)
- Weekly office treatments for 12 weeks
- Maintenance treatments periodically
- Less invasive than sacral neuromodulation
- Modest benefit for urgency, frequency

**Pudendal Neuromodulation:**
- Direct pudendal nerve stimulation
- For refractory cases
- More invasive than sacral/tibial
- Limited data

## Botulinum Toxin A

**Intravesical Botox:**
- Injected into bladder wall (suburothelial)
- 100-200 units depending on approach
- Inhibits acetylcholine and neuropeptide release
- Reduces urgency, frequency, may help pain
- Risks: Urinary retention (may need CIC), UTI
- Effects last 6-12 months
- Repeat injections as needed

**Technique:**
- Cystoscopic injection
- 20-30 injection sites
- Trigone-sparing or include trigone
- Office or operating room

## Differential Diagnosis

**Conditions Mimicking IC/BPS:**

| Condition | Distinguishing Features |
|-----------|------------------------|
| Endometriosis | Cyclic pain, dysmenorrhea, dyspareunia |
| Vulvodynia | Vulvar pain provoked by touch |
| Pudendal neuralgia | Sitting worsens pain |
| Overactive bladder | No pain, predominant urgency |
| Chronic UTI | Positive cultures, responds to antibiotics |
| Bladder cancer | Hematuria, mass on imaging |
| Prostatitis (men) | Perineal pain, response to antibiotics |

**Endometriosis:**
- Often coexists with IC/BPS
- Can cause urinary symptoms
- Laparoscopy for diagnosis
- Hormonal treatments helpful

**Vulvodynia:**
- Localized vulvar pain
- Provoked by touch/tampon insertion
- May have IC/BPS simultaneously
- Multidisciplinary treatment

## Refractory IC/BPS

**Definition:**
- Failure of multiple treatments
- Persistent severe symptoms
- Significant quality of life impact

**Advanced Options:**

**Cyclosporine:**
- For ulcerative IC, refractory cases
- Significant side effects
- Requires monitoring
- Dose: 1-2 mg/kg twice daily

**Urinary Diversion:**
- **Continent:** Indiana pouch, Mitrofanoff
- **Incontinent:** Ileal conduit
- **Augmentation:** Enlarge bladder with bowel segment
- Last resort options
- Variable pain outcomes
- Major surgery

**Cystectomy (Bladder Removal):**
- With urinary diversion
- For end-stage, refractory cases
- May improve pain but not guaranteed
- Life-changing surgery

## Complications

**Bladder Changes:**
- Decreased bladder capacity
- Stiff, non-compliant bladder
- Upper tract damage (rare, late stage)

**Psychosocial:**
- Depression, anxiety
- Sexual dysfunction
- Relationship strain
- Work disability
- Social isolation

**Pain Sequelae:**
- Central sensitization
- Chronic pain syndrome
- Fibromyalgia overlap
- Opioid dependence risk

## Men with IC/BPS

**Under-recognized:**
- Often diagnosed as prostatitis
- May have IC/BPS + prostatitis

**Evaluation:**
- Cystoscopy to look for Hunner's lesions
- Prostate evaluation to rule out prostatitis

**Treatment:**
- Similar to women
- Consider prostatitis treatments if concurrent
- Pain can be perineal, suprapubic, or genital`,
      keyTerms: [
        { term: 'Hunner\'s ulcer', definition: 'Specific inflammatory lesion found in ulcerative IC/BPS subtype' },
        { term: 'sacral neuromodulation', definition: 'Electrical stimulation of sacral nerves to modulate bladder function' },
        { term: 'PTNS', definition: 'Percutaneous tibial nerve stimulation; minimally invasive neuromodulation' },
        { term: 'endometriosis', definition: 'Condition where uterine lining grows outside uterus; can mimic IC symptoms' },
        { term: 'vulvodynia', definition: 'Chronic vulvar pain without identifiable cause' },
        { term: 'central sensitization', definition: 'Heightened pain sensitivity in central nervous system from chronic pain' },
      ],
      clinicalNotes: 'Hunner\'s ulcers require different treatment (ablation) and have better outcomes than non-ulcerative IC. Botulinum toxin can cause urinary transient retention—patients must be willing to perform CIC if needed. Men with IC symptoms are often misdiagnosed with chronic prostatitis.',
    },
    5: {
      level: 5,
      summary: 'Emerging IC/BPS therapies target urothelial repair, mast cell stabilization, neurogenic inflammation, and novel delivery systems, while research explores biomarkers and personalized medicine approaches.',
      explanation: `## Novel Therapeutic Targets

**Urothelial Repair:**

**Liposomal Vesicles:**
- Liposome-encapsulated agents
- Prolonged contact with urothelium
- Enhanced penetration of GAG layer
- Under investigation

**Chitosan:**
- Natural polysaccharide
- Enhances urothelial barrier
- Drug delivery vehicle
- Early research

**NGF (Nerve Growth Factor) Inhibition:**
- NGF elevated in IC/BPS urine
- Tanezumab (anti-NGF antibody)
- Reduces pain, urgency
- Ongoing trials

**TRPV1 Antagonists:**
- Capsaicin receptor
- Involved in bladder sensation
- Oral antagonists in development
- Intravesical capsaicin (limited by burning)

**P2X3 Receptor Antagonists:**
- ATP receptor involved in urgency
- Gefapixant, BLU-5937
- Clinical trials ongoing
- Promise for urgency-predominant symptoms

**Cannabinoid Receptors:**
- CB1/CB2 in bladder
- Potential anti-inflammatory, analgesic
- Research phase

## Mast Cell Targeted Therapy

**Advanced Approaches:**
- **Cromolyn sodium:** Mast cell stabilizer
- **Ketotifen:** H1 antihistamine + mast cell stabilization
- **Quercetin:** Bioflavonoid with mast cell effects
- **Luteolin:** Mast cell stabilization

**Rationale:**
- Mast cells increased in IC bladders
- Release histamine, proteases, cytokines
- Contribute to pain, inflammation, fibrosis

## Regenerative Approaches

**Stem Cell Therapy:**
- **Mesenchymal stem cells:** Anti-inflammatory, regenerative
- **Adipose-derived stem cells:** Easily harvested
- **Mechanism:** Paracrine effects, tissue repair
- Delivery: Intravesical or injection
- Early studies show promise

**Platelet-Rich Plasma (PRP):**
- Autologous growth factors
- Intravesical instillation
- Early evidence for symptom improvement
- Limited standardization

## Biomarker Discovery

**Urinary Biomarkers:**
- **APF (Antiproliferative Factor):** Characterized protein
- **EGF (Epidermal Growth Factor):** Decreased in IC
- **Cytokines:** IL-6, IL-8, TNF-α
- **NGF:** Elevated in IC urine
- **Proteomic patterns:** Multiple protein signatures

**Diagnostic Applications:**
- Differentiate IC subtypes
- Monitor treatment response
- Predict prognosis
- Non-invasive testing

**Tissue Biomarkers:**
- Increased mast cells (tryptase)
- Nerve proliferation
- Urothelial thinning
- Specific gene expression patterns

## Phenotypic Classification

**IC/BPS Subtypes:**
- **Ulcerative:** Hunner's lesions, inflammatory
- **Non-ulcerative:** Further subdivide into:
  - **Central sensitization dominant:** Systemic pain
  - **Pelvic floor dysfunction:** Muscle hypertonicity
  - **Urothelial dysfunction:** GAG layer defect
  - **Inflammatory dominant:** Mast cell mediated

**Personalized Treatment:**
- Subtype-specific therapy
- Multimodal approach tailored to phenotype
- Biomarker-guided selection

## Advanced Delivery Systems

**Nanoparticle Delivery:**
- Enhanced drug penetration
- Sustained release
- Reduced systemic absorption
- Targeted delivery to bladder wall

**Thermosensitive Hydrogels:**
- Liquid when instilled
- Gel at body temperature
- Prolonged bladder contact
- Improved efficacy

**Mucoadhesive Polymers:**
- Adhere to urothelium
- Prolong contact time
- Enhanced GAG layer repair
- Under development

## Pain Management Innovation

**Central Sensitization Treatment:**
- **Gabapentinoids:** Gabapentin, pregabalin
- **SNRIs:** Duloxetine, venlafaxine
- **TCAs:** Amitriptyline (low dose)
- **NMDA antagonists:** Ketamine (limited)

**Interventional Pain:**
- **Trigger point injections:** Pelvic floor
- **Pudendal nerve blocks:** Diagnostic/therapeutic
- **Superior hypogastric plexus block:** For refractory pain
- **Spinal cord stimulation:** For severe cases

## Microbiome Considerations

**Urinary Microbiome:**
- 16S rRNA sequencing reveals diverse microbiota
- Dysbiosis in IC/BPS
- Lactobacillus dominance may be protective
- Research ongoing

**Gut-Bladder Axis:**
- Gut microbiome influences bladder
- Probiotic approaches under investigation
- Fecal microbiota transplant (early research)

## International Collaboration

**ESSIC (European Society for IC/BPS):**
- Standardized classification system
- Research collaboration
- Consensus guidelines

**ICA (Interstitial Cystitis Association):**
- Patient advocacy
- Research funding
- Support networks

## Quality of Life

**Comprehensive Care:**
- Multidisciplinary approach
- Pain management
- Psychological support
- Physical therapy
- Dietary counseling

**Sexual Health:**
- Dyspareunia management
- Pelvic floor therapy
- Vaginal moisturizers, lubricants
- Couples therapy

**Mental Health:**
- Depression screening
- Anxiety management
- Chronic pain coping strategies
- Support groups

## Future Directions

**Gene Therapy:**
- Target inflammatory pathways
- Enhance urothelial repair
- Early research phase

**CRISPR Applications:**
- Edit inflammatory mediators
- Correct genetic defects
- Conceptual stage

**Artificial Intelligence:**
- Symptom pattern recognition
- Treatment response prediction
- Personalized therapy selection
- Mobile app integration

**Telemedicine:**
- Remote symptom monitoring
- Virtual consultations
- Digital therapeutic delivery`,
      keyTerms: [
        { term: 'APF', definition: 'Antiproliferative factor; protein found in urine that inhibits bladder cell growth in IC' },
        { term: 'NGF', definition: 'Nerve growth factor; elevated in IC/BPS, contributes to pain and urgency' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; capsaicin receptor involved in bladder sensation' },
        { term: 'P2X3 receptor', definition: 'ATP-gated ion channel; target for urgency medications' },
        { term: 'central sensitization', definition: 'Heightened CNS pain sensitivity from chronic pain exposure' },
        { term: 'ESSIC', definition: 'European Society for the Study of Interstitial Cystitis; classification system' },
      ],
      clinicalNotes: 'APF testing remains research-only currently. Subtyping IC/BPS into phenotypes (ulcerative vs non-ulcerative, inflammatory vs central sensitization) guides personalized treatment. Multidisciplinary care including mental health, PT, and nutrition is essential for refractory cases.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-ic-2022', type: 'article', title: 'AUA Guideline: Diagnosis and Treatment of Interstitial Cystitis/Bladder Pain Syndrome', source: 'Journal of Urology' },
    { id: 'essa-ic-2023', type: 'article', title: 'ESSIC Guidelines on Interstitial Cystitis', source: 'European Society for the Study of IC' },
  ],
  crossReferences: [
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
    { targetId: 'condition-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'condition-prostatitis', targetType: 'condition', relationship: 'related', label: 'Prostatitis' },
    { targetId: 'condition-urinary-incontinence', targetType: 'condition', relationship: 'related', label: 'Urinary Incontinence' },
  ],
  tags: { systems: ['urinary', 'reproductive'], topics: ['urology', 'women\'s health', 'chronic pain'], keywords: ['IC', 'BPS', 'bladder pain', 'Hunner\'s ulcer', 'pelvic pain', 'frequency', 'urgency'], clinicalRelevance: 'high', examRelevance: { usmle: false, nbme: false, shelf: ['ob-gyn', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default interstitialCystitis;
