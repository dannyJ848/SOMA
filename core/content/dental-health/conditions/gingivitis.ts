/**
 * Gingivitis - Comprehensive Educational Content
 *
 * Covers gum inflammation, causes, prevention, and treatment
 * as the reversible stage of periodontal disease.
 */

import { EducationalContent } from '../../types';

export const gingivitis: EducationalContent = {
  id: 'condition-gingivitis',
  type: 'condition',
  name: 'Gingivitis',
  alternateNames: [
    'Gum Inflammation',
    'Gum Disease (Early)',
    'Plaque-Induced Gingivitis',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Gingivitis is when your gums get red, swollen, and bleed easily because of plaque buildup. The good news is it can be reversed with better brushing and flossing!',
      explanation: `**What Is Gingivitis?**

Gingivitis is the first stage of gum disease. It means your gums are inflamed (irritated and swollen) because of germs building up on your teeth.

**Signs of Gingivitis:**
- Gums that bleed when you brush or floss
- Red or puffy gums (healthy gums are pink and firm)
- Bad breath that does not go away
- Gums that feel tender or sore

**What Causes Gingivitis?**

1. **Plaque buildup**: Sticky germs form on your teeth
2. **Not brushing enough**: Plaque stays on teeth
3. **Not flossing**: Plaque builds up between teeth
4. **Plaque hardens**: Becomes tartar that you cannot brush off

**Why Does Plaque Cause Problems?**

The germs in plaque irritate your gums. Your body tries to fight the germs by sending extra blood to your gums. This makes them:
- Red (extra blood)
- Swollen (inflammation)
- Tender (sensitive)
- Prone to bleeding (delicate)

**How to Fix Gingivitis:**

The great news is gingivitis can be reversed! Here is how:

1. **Brush twice a day** for 2 minutes each time
2. **Floss every day** to clean between teeth
3. **See your dentist** for a professional cleaning
4. **Keep up the routine** - gums can heal in 1-2 weeks!

**What Happens If You Do Not Treat Gingivitis?**

If left untreated, gingivitis can become periodontitis - a more serious gum disease that can cause:
- Gums pulling away from teeth
- Bone loss around teeth
- Loose teeth
- Tooth loss

**Prevention Tips:**
- Brush and floss daily
- See your dentist regularly
- Do not smoke
- Eat healthy foods`,
      keyTerms: [
        { term: 'gingivitis', definition: 'Inflammation (swelling and redness) of the gums caused by plaque' },
        { term: 'inflammation', definition: 'The body\'s response to irritation - causes redness, swelling, and sometimes pain' },
        { term: 'plaque', definition: 'Sticky film of germs that forms on teeth every day' },
        { term: 'gums', definition: 'The pink tissue that surrounds and supports your teeth' },
        { term: 'tartar', definition: 'Hardened plaque that only a dentist can remove' },
      ],
      analogies: [
        'Gingivitis is like a warning light for your gums - it is telling you something is wrong before serious damage happens.',
        'Plaque on your teeth is like dirt on your skin - if you do not wash it off regularly, it causes problems.',
        'Bleeding gums are like a fire alarm - they are alerting you to danger that needs attention.',
      ],
      examples: [
        'If you notice pink on your toothbrush after brushing, that is a sign of gingivitis.',
        'After getting a professional cleaning and brushing well for two weeks, red gums can become healthy and pink again.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gingivitis is inflammation of the gingiva caused primarily by bacterial plaque accumulation. It is characterized by redness, swelling, and bleeding but without attachment loss. With proper treatment, gingivitis is completely reversible.',
      explanation: `## Understanding Gingivitis

**Definition:** Gingivitis is inflammation of the gingiva (gums) without loss of connective tissue attachment or bone. It is the mildest and only reversible form of periodontal disease.

## Clinical Signs

**Cardinal Signs:**
| Sign | Description |
|------|-------------|
| Redness | Color change from coral pink to red/bluish-red |
| Swelling | Edematous, enlarged gingival margin |
| Bleeding | On probing or spontaneous |
| Texture change | Loss of stippling, smooth and shiny |

**What You Will NOT See:**
- Pocket depths greater than 3 mm
- Attachment loss
- Bone loss on X-rays
- Tooth mobility

## Causes

**Primary Cause: Dental Plaque**
- Bacteria accumulate at gingival margin
- Immune response causes inflammation
- No tissue destruction (reversible)

**Risk Factors:**
- Poor oral hygiene
- Smoking/tobacco use
- Diabetes
- Certain medications (phenytoin, nifedipine, cyclosporine)
- Hormonal changes (puberty, pregnancy, menstruation)
- Mouth breathing
- Orthodontic appliances
- Overlapping/crowded teeth

## Types of Gingivitis

**1. Plaque-Induced Gingivitis**
- Most common form
- Directly related to plaque accumulation
- Reversible with plaque control

**2. Non-Plaque-Induced Gingival Diseases**
- Viral: Herpes simplex
- Fungal: Candidiasis
- Allergic reactions
- Traumatic lesions
- Genetic conditions

**3. Modified by Systemic Factors**
- Pregnancy gingivitis
- Puberty gingivitis
- Diabetes-associated gingivitis
- Drug-influenced gingival enlargement

## Diagnosis

**Clinical Examination:**
- Visual inspection of gingival color and contour
- Probing to assess bleeding
- Measure pocket depths (should be ≤3 mm in gingivitis)
- Assess plaque and calculus levels

**Gingival Indices:**
- Gingival Index (Löe and Silness): 0-3 scale
- Bleeding on Probing (BOP): Percentage of sites

## Treatment

**Professional Treatment:**
1. Dental prophylaxis (scaling and polishing)
2. Oral hygiene instruction
3. Identification and modification of risk factors

**Home Care:**
- Brushing twice daily (2 minutes)
- Daily interdental cleaning (floss or interdental brushes)
- Antimicrobial mouthwash if recommended

**Expected Outcomes:**
- Inflammation resolves in 1-2 weeks with proper care
- Bleeding stops
- Color returns to normal
- Complete reversal possible

## Prevention

**Daily Habits:**
- Thorough brushing technique
- Interdental cleaning
- Tongue cleaning

**Professional Care:**
- Regular dental visits (every 6 months)
- Professional cleanings
- Early intervention

**Lifestyle:**
- Smoking cessation
- Diabetes control
- Healthy diet`,
      keyTerms: [
        { term: 'gingivitis', definition: 'Inflammation of the gingiva without attachment loss; reversible with treatment' },
        { term: 'gingiva', definition: 'The gum tissue that surrounds the teeth and covers the alveolar bone' },
        { term: 'bleeding on probing (BOP)', definition: 'Bleeding from the gingival sulcus when gently probed; sign of inflammation' },
        { term: 'plaque-induced', definition: 'Caused by bacterial plaque accumulation on teeth' },
        { term: 'gingival index', definition: 'Scoring system to measure severity of gingival inflammation' },
        { term: 'stippling', definition: 'Orange-peel texture of healthy gingiva; lost in inflammation' },
      ],
      analogies: [
        'Gingivitis is like a skin rash from an irritant - remove the irritant (plaque) and the inflammation goes away.',
        'The gingival sulcus is like a moat around a castle (tooth) - when it is clean, it protects; when debris accumulates, problems start.',
        'Bleeding on probing is like a smoke detector going off - it is warning you of inflammation even if you cannot see it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gingivitis represents the host inflammatory response to subgingival biofilm accumulation within the gingival sulcus. Histopathologically characterized by initial and early lesions, it remains confined to the gingiva without periodontal attachment apparatus destruction.',
      explanation: `## Pathogenesis of Gingivitis

**Biofilm-Host Interaction:**

*Bacterial Challenge:*
- Plaque accumulation at gingival margin
- Subgingival extension of biofilm
- Bacterial products penetrate junctional epithelium
- Lipopolysaccharides, proteases, toxins

*Host Response:*
- Innate immune recognition (TLRs, NODs)
- Inflammatory cytokine release
- Neutrophil recruitment
- Vascular changes (vasodilation, permeability)

## Histopathological Stages

**Page and Schroeder Classification:**

| Stage | Timing | Histopathology | Clinical |
|-------|--------|----------------|----------|
| Initial lesion | 2-4 days | Vasculitis, PMN infiltration | Subclinical |
| Early lesion | 4-7 days | Lymphocyte predominance | Early signs |
| Established lesion | 2-3 weeks | Plasma cell predominance | Clinical gingivitis |

**Initial Lesion:**
- Acute inflammatory response
- Vasodilation, increased permeability
- PMN migration through junctional epithelium
- Increased GCF flow
- Loss of perivascular collagen

**Early Lesion:**
- T-lymphocyte infiltration
- Cytopathic changes in fibroblasts
- Junctional epithelium proliferation
- Continued collagen destruction (up to 70%)
- Clinically evident inflammation

**Established Lesion:**
- Plasma cell predominance
- B-cell and plasma cell infiltration
- Chronic inflammatory infiltrate
- Pocket formation (gingival pocket, not true pocket)
- Stable or may progress to periodontitis

## Microbiology

**Biofilm Maturation in Gingivitis:**

*Early Colonizers:*
- Streptococcus spp.
- Actinomyces spp.

*Secondary Colonizers:*
- Fusobacterium nucleatum (bridge organism)
- Prevotella intermedia
- Capnocytophaga spp.

*Gingivitis-Associated:*
- Not the classic "Red Complex" of periodontitis
- Actinomyces naeslundii increased
- Gram-negative anaerobes increase
- Still distinct from periodontitis microbiome

## Clinical Assessment

**Gingival Indices:**

*Löe and Silness Gingival Index:*
| Score | Criteria |
|-------|----------|
| 0 | Normal gingiva |
| 1 | Mild inflammation, slight color change, no BOP |
| 2 | Moderate inflammation, redness, edema, BOP |
| 3 | Severe inflammation, marked redness/edema, ulceration, spontaneous bleeding |

*Bleeding on Probing:*
- Most reliable clinical indicator
- Present in early inflammation
- Percentage of bleeding sites calculated
- Target: <10% for health

**Differential Diagnosis:**

| Condition | Distinguishing Features |
|-----------|------------------------|
| Periodontitis | Attachment loss, bone loss, deeper pockets |
| Desquamative gingivitis | Epithelial sloughing, associated with autoimmune conditions |
| Drug-induced enlargement | Medication history, hyperplastic tissue |
| Pregnancy gingivitis | Hormonal association, exaggerated response |
| Acute necrotizing gingivitis | Papillary necrosis, pain, fever |

## Risk Factor Modification

**Systemic Factors:**

*Diabetes:*
- Exaggerated inflammatory response
- Impaired neutrophil function
- HbA1c control improves gingival health

*Smoking:*
- Masks clinical signs (less BOP)
- Impairs healing
- Increases progression risk
- Cessation improves outcomes

*Hormonal:*
- Pregnancy, puberty, menstrual cycle
- Increased inflammatory response to plaque
- Regresses with hormonal normalization

**Local Factors:**

*Plaque Retentive Factors:*
- Calculus
- Overhanging restorations
- Orthodontic appliances
- Partial dentures

*Anatomic Factors:*
- Crowding
- Open contacts
- Mouth breathing

## Treatment Protocols

**Non-Surgical Therapy:**

1. **Professional Mechanical Plaque Removal**
   - Scaling to remove plaque and calculus
   - Polishing

2. **Oral Hygiene Instruction**
   - Technique demonstration
   - Device recommendation (interdental brushes vs. floss)
   - Motivation and reinforcement

3. **Risk Factor Modification**
   - Smoking cessation counseling
   - Diabetes control referral
   - Correction of local factors

**Chemical Adjuncts:**

| Agent | Use | Evidence |
|-------|-----|----------|
| Chlorhexidine | Short-term use (2 weeks) | Strong |
| Essential oils | Daily rinse | Moderate |
| Triclosan (discontinued) | Previously in toothpaste | Was moderate |
| Stannous fluoride | Toothpaste | Moderate |

**Maintenance:**
- Regular recall based on risk
- Reinforcement of home care
- Professional cleaning as needed`,
      keyTerms: [
        { term: 'junctional epithelium', definition: 'Specialized epithelium attaching gingiva to tooth surface; site of initial bacterial-host interaction' },
        { term: 'GCF', definition: 'Gingival Crevicular Fluid; serum transudate increased in inflammation' },
        { term: 'established lesion', definition: 'Histological stage of gingivitis with plasma cell predominance; may be stable or progress' },
        { term: 'PMN', definition: 'Polymorphonuclear leukocytes (neutrophils); first-line defenders in gingival inflammation' },
        { term: 'gingival pocket', definition: 'Deepened sulcus from gingival swelling without attachment loss; distinguishes from true periodontal pocket' },
        { term: 'plaque-retentive factors', definition: 'Local conditions promoting plaque accumulation: calculus, rough margins, crowding' },
      ],
      clinicalNotes: 'Bleeding on probing is the most reliable clinical indicator of inflammation - more so than color or swelling. The established lesion may remain stable for years or may progress to periodontitis based on host and bacterial factors. Smoking masks BOP, so absence of bleeding in smokers does not indicate health. Short-term chlorhexidine (2 weeks) is effective for acute management but long-term use causes staining and taste alteration.',
    },
    4: {
      level: 4,
      summary: 'Gingivitis pathobiology encompasses molecular signaling pathways, genetic susceptibility factors, and host-microbiome interactions that determine whether inflammation remains confined or progresses to destructive periodontitis. Understanding these mechanisms informs precision prevention strategies.',
      explanation: `## Molecular Pathogenesis

**Pattern Recognition and Signaling:**

*Toll-Like Receptor (TLR) Activation:*
- TLR2: Recognizes gram-positive lipoteichoic acid
- TLR4: Recognizes gram-negative LPS
- TLR signaling → NF-κB activation → Cytokine production

*Inflammasome Activation:*
- NLRP3 inflammasome assembly
- Caspase-1 activation
- IL-1β and IL-18 maturation and release
- Pyroptosis potential

**Cytokine Networks:**

| Cytokine | Source | Effect |
|----------|--------|--------|
| IL-1β | Monocytes, macrophages | Pro-inflammatory, bone resorption |
| TNF-α | Macrophages | Pro-inflammatory, tissue damage |
| IL-6 | Multiple cells | Inflammation, acute phase response |
| IL-8 | Epithelial cells, others | Neutrophil chemotaxis |
| IL-10 | T-regs, others | Anti-inflammatory (protective) |

**Neutrophil Biology in Gingivitis:**

*Normal Function:*
- Constant emigration into sulcus
- Phagocytosis of bacteria
- Oxidative burst
- NET formation (Neutrophil Extracellular Traps)

*Dysfunction Consequences:*
- Leukocyte adhesion deficiencies → Severe periodontitis
- Cyclic neutropenia → Cyclic periodontitis
- Chediak-Higashi → Aggressive periodontitis

## Genetic Susceptibility

**Immune Response Genes:**

*IL-1 Gene Cluster:*
- IL-1α, IL-1β polymorphisms
- Associated with inflammation intensity
- May predict progression risk

*Other Variants:*
| Gene | Function | Association |
|------|----------|-------------|
| IL-6 | Inflammation | Disease severity |
| TNF-α | Inflammation | Tissue destruction |
| Fc receptors | Antibody response | Phagocytosis efficiency |
| Vitamin D receptor | Immune modulation | Disease susceptibility |

**Microbiome-Host Genetics Interaction:**
- Host genetics influence microbiome composition
- Microbiome composition influences disease
- Bidirectional relationship

## Resolution and Progression Factors

**Why Some Lesions Remain as Gingivitis:**

*Resolution Mechanisms:*
- Specialized pro-resolving mediators (SPMs)
- Lipoxins, resolvins, protectins
- Active resolution, not just anti-inflammation
- Tissue homeostasis restoration

*Protective Factors:*
- Balanced Th1/Th2/Th17 response
- Effective T-reg function
- Adequate neutrophil surveillance
- Efficient tissue repair

**Why Some Progress to Periodontitis:**

*Susceptibility Factors:*
- Host genetic predisposition
- Systemic conditions (diabetes, smoking)
- Dysbiotic microbiome shift
- Keystone pathogen colonization (P. gingivalis)
- Impaired resolution pathways

*Microbiological Shift:*
- Red complex emergence
- Increased proteolytic species
- Anaerobic dominance
- Disruption of symbiotic community

## Advanced Diagnostics

**Biomarker Research:**

*GCF Biomarkers:*
| Category | Examples | Meaning |
|----------|----------|---------|
| Inflammatory | IL-1β, TNF-α, PGE2 | Active inflammation |
| Tissue destruction | MMP-8, MMP-9 | Collagen breakdown |
| Bone markers | ICTP, RANKL/OPG | Bone resorption |
| Protective | IL-10, TGF-β | Resolution |

*Salivary Biomarkers:*
- Non-invasive collection
- Whole-mouth assessment
- MMP-8 most studied
- Point-of-care tests developing

**Microbiome Analysis:**

*16S rRNA Sequencing:*
- Species identification
- Community profiling
- Gingivitis vs. health distinction

*Metatranscriptomics:*
- Active gene expression
- Functional status
- More informative than presence/absence

## Precision Prevention

**Risk Stratification:**

*Individual Risk Factors:*
- Genetic testing (research phase)
- Biomarker profiling
- Microbiome assessment
- Clinical history

*Tailored Prevention:*
| Risk Level | Assessment | Prevention Protocol |
|------------|------------|---------------------|
| Low | Clinical only | Standard hygiene, annual recalls |
| Moderate | + BOP monitoring | Enhanced hygiene, 6-month recalls |
| High | + Biomarkers | Intensive protocols, antimicrobials |
| Very High | + Genetic/microbiome | Aggressive prevention, 3-month recalls |

## Special Populations

**Pregnancy Gingivitis:**

*Mechanism:*
- Elevated progesterone and estrogen
- Enhanced vascular permeability
- Exaggerated inflammatory response to plaque
- Prevotella intermedia proliferation (uses steroids)

*Management:*
- Safe dental treatment throughout pregnancy
- Emphasis on plaque control
- Professional cleanings
- Regresses postpartum

**Drug-Induced Gingival Enlargement:**

*Causative Agents:*
| Drug Class | Examples | Prevalence |
|------------|----------|------------|
| Anticonvulsants | Phenytoin | 50% |
| Calcium channel blockers | Nifedipine | 20% |
| Immunosuppressants | Cyclosporine | 30% |

*Management:*
- Meticulous plaque control
- Drug substitution if possible
- Surgical reduction if severe

**Diabetes-Associated Gingivitis:**

*Mechanisms:*
- AGE accumulation in tissues
- Impaired neutrophil function
- Enhanced inflammatory response
- Delayed healing

*Bidirectional Relationship:*
- Diabetes worsens gingivitis/periodontitis
- Periodontitis impairs glycemic control
- Treatment improves both`,
      keyTerms: [
        { term: 'inflammasome', definition: 'Multiprotein intracellular complex that activates inflammatory caspases and IL-1β production' },
        { term: 'SPMs', definition: 'Specialized Pro-resolving Mediators; lipid mediators that actively resolve inflammation' },
        { term: 'NF-κB', definition: 'Nuclear Factor kappa B; transcription factor central to inflammatory gene expression' },
        { term: 'NETs', definition: 'Neutrophil Extracellular Traps; DNA-based structures for pathogen capture' },
        { term: 'keystone pathogen', definition: 'Low-abundance organism with disproportionate community and host response impact (e.g., P. gingivalis)' },
        { term: 'AGE', definition: 'Advanced Glycation End-products; proteins modified by glucose in diabetes' },
      ],
      clinicalNotes: 'Resolution of inflammation is an active process requiring specific mediators - not just absence of pro-inflammatory signals. This explains why some patients have persistent gingivitis despite adequate plaque control. Biomarkers like MMP-8 may identify patients at risk for progression before clinical signs appear. Drug-induced enlargement requires meticulous plaque control first; gingivectomy is reserved for cases not responding to conservative management.',
    },
    5: {
      level: 5,
      summary: 'Contemporary gingivitis research integrates systems biology approaches to understand inflammation resolution, microbiome-host interactions determining disease fate, and precision medicine frameworks for personalized prevention. Emerging therapies target resolution pathways rather than solely anti-inflammatory mechanisms.',
      explanation: `## Systems Biology of Gingivitis

**Network Analysis:**

*Inflammatory Networks:*
- Multiple pathway redundancy
- Feedback loops (positive and negative)
- Hub genes (highly connected nodes)
- Potential therapeutic targets at network nodes

*Resolution Networks:*
- Lipoxins from arachidonic acid
- Resolvins from omega-3 fatty acids
- Protectins and maresins
- Temporal regulation of resolution

**Multi-Omics Integration:**

| Omics Level | Information | Clinical Application |
|-------------|-------------|---------------------|
| Genomics | Susceptibility variants | Risk prediction |
| Transcriptomics | Active gene expression | Disease activity |
| Proteomics | Protein profiles | Biomarkers |
| Metabolomics | Metabolic products | Functional status |
| Microbiomics | Microbial community | Dysbiosis detection |

**Machine Learning Applications:**

*Predictive Modeling:*
- Integrate clinical + molecular data
- Predict gingivitis progression
- Identify high-risk individuals
- Optimize prevention protocols

## Microbiome-Host Dialogue

**Epithelial-Microbial Crosstalk:**

*Healthy State:*
- Commensal bacteria educate immune system
- Tolerogenic responses to normal flora
- Low-level surveillance maintains homeostasis
- Antimicrobial peptide production

*Disease State:*
- Dysbiosis triggers altered signaling
- Excessive inflammatory response
- Loss of homeostatic regulation
- Tissue damage

**Microbial Metabolites as Signaling Molecules:**

| Metabolite | Source | Host Effect |
|------------|--------|-------------|
| Short-chain fatty acids | Bacterial fermentation | Immunomodulatory |
| Hydrogen sulfide | Anaerobes | Pro-inflammatory, tissue damage |
| Polyamines | Various bacteria | Cell proliferation effects |
| Indoles | Tryptophan metabolism | AhR signaling, barrier function |

**Keystone Pathogen Hypothesis:**

*P. gingivalis Model:*
- Low abundance in gingivitis
- Manipulates host response
- Subverts complement
- Enables community dysbiosis
- May be present before clinical periodontitis

*Clinical Implications:*
- Early detection of keystone species
- Targeted elimination strategies
- Prevention of progression

## Resolution Therapeutics

**Pro-Resolving Lipid Mediators:**

*Classes:*
| Class | Precursor | Actions |
|-------|-----------|---------|
| Lipoxins | Arachidonic acid | Stop neutrophil recruitment |
| Resolvins E | EPA | Reduce inflammation, promote repair |
| Resolvins D | DHA | Enhanced resolution, tissue regeneration |
| Protectins | DHA | Neural and tissue protection |
| Maresins | DHA | Macrophage-derived resolution |

*Therapeutic Potential:*
- Resolvin E1 in animal periodontitis models
- Reduces bone loss
- Promotes tissue regeneration
- Shifts macrophage phenotype (M1→M2)
- Clinical trials needed

**Omega-3 Fatty Acid Supplementation:**

*Evidence:*
- Provides SPM precursors
- Reduces inflammatory markers
- Adjunct to mechanical therapy
- Meta-analysis shows modest benefit
- Not yet standard of care

**Host Modulation Strategies:**

*Low-Dose Doxycycline (SDD):*
- MMP inhibition
- Not antimicrobial at subantimicrobial dose
- Reduces collagenase activity
- FDA-approved for periodontitis
- Potential in severe gingivitis

## Precision Medicine Framework

**Individual Risk Profiling:**

*Components:*
1. Clinical assessment (BOP, plaque index)
2. Microbiome profiling (16S or metagenomic)
3. Biomarker panel (MMP-8, IL-1β)
4. Genetic susceptibility (IL-1, TNF-α variants)
5. Lifestyle factors (smoking, diet, stress)

*Personalized Prevention Algorithm:*

\`\`\`
Risk Score = Σ (Weighted Clinical + Microbiome + Biomarker + Genetic Factors)

Low Risk → Standard prevention
Moderate Risk → Enhanced monitoring
High Risk → Intensive intervention
Very High Risk → Aggressive prevention + possible antimicrobials
\`\`\`

**Emerging Diagnostics:**

*Point-of-Care Testing:*
- Chairside MMP-8 detection
- Salivary biomarker panels
- Rapid microbiome profiling
- Real-time risk assessment

*Wearable/Home Monitoring:*
- Smart toothbrush data
- Saliva collection devices
- AI analysis of photos
- Continuous risk assessment

## Microbiome Modulation

**Targeted Approaches:**

*Probiotics:*
- Lactobacillus reuteri
- Streptococcus salivarius
- Competitive exclusion
- Limited evidence in gingivitis

*Prebiotics:*
- Arginine supplementation
- Promotes ammonia-producing species
- Raises plaque pH
- Ecological approach

**Antimicrobial Strategies:**

*Selective Targeting:*
- Keystone species elimination
- Preserve commensal community
- Avoid broad-spectrum disruption
- STAMPs and specific phages (research)

*Biofilm Disruption:*
- Enzymatic matrix degradation
- Quorum sensing inhibition
- Enhanced drug penetration

## Population Health Integration

**Gingivitis as Gateway:**

*Prevention Model:*
- Gingivitis screening in primary care
- Medical-dental collaboration
- Early intervention prevents periodontitis
- Cost-effective public health approach

**Oral-Systemic Screening:**

*Bidirectional:*
- Gingivitis may indicate undiagnosed diabetes
- Screen gingivitis patients for prediabetes
- Treat gingivitis to improve systemic inflammation

**Health System Integration:**

*Value-Based Care:*
- Preventive focus
- Quality metrics include gingivitis rates
- Integration with chronic disease management
- Population health approach

## Research Frontiers

**Tissue Engineering:**

*Gingival Regeneration:*
- Stem cell approaches
- Scaffold-based regeneration
- Growth factor delivery
- Aesthetic improvements

**Microbiome Engineering:**

*Long-term Goals:*
- Defined healthy microbiome establishment
- Prevention of dysbiosis
- Personalized microbiome therapeutics

**Digital Health:**

*AI Applications:*
- Image analysis for gingivitis detection
- Natural language processing of records
- Predictive modeling at scale
- Telehealth triage`,
      keyTerms: [
        { term: 'resolvins', definition: 'Specialized pro-resolving mediators derived from omega-3 fatty acids that actively promote inflammation resolution' },
        { term: 'maresins', definition: 'Macrophage-derived resolution mediators from DHA; promote tissue regeneration' },
        { term: 'AhR', definition: 'Aryl hydrocarbon Receptor; transcription factor activated by microbial metabolites, regulates immune responses' },
        { term: 'hub genes', definition: 'Highly connected nodes in biological networks; potential key therapeutic targets' },
        { term: 'M1/M2 macrophage', definition: 'Macrophage phenotypes: M1 pro-inflammatory, M2 pro-resolution and tissue repair' },
        { term: 'SDD', definition: 'Subantimicrobial Dose Doxycycline; host modulation therapy at 20mg dose' },
      ],
      clinicalNotes: `Research translation priorities:
1. Resolution-based therapeutics represent paradigm shift from anti-inflammatory to pro-resolution
2. Omega-3 supplementation shows promise as adjunct but is not yet standard of care
3. Point-of-care biomarker testing (MMP-8) approaching clinical readiness for progression risk assessment
4. Microbiome profiling may guide personalized prevention but awaits clinical validation
5. Gingivitis screening in medical settings can identify systemic disease risk
6. Keystone pathogen detection before clinical periodontitis may enable targeted prevention
7. Digital health tools (smart brushes, AI image analysis) will enable continuous monitoring
8. Precision prevention algorithms will optimize resource allocation based on individual risk`,
    },
  },

  media: [
    {
      id: 'healthy-vs-gingivitis',
      type: 'image',
      filename: 'healthy-vs-gingivitis-gums.jpg',
      title: 'Healthy Gums vs. Gingivitis',
      description: 'Comparison showing healthy pink stippled gingiva and inflamed red edematous gingivitis',
    },
    {
      id: 'gingivitis-histology',
      type: 'histology',
      filename: 'gingivitis-histology.jpg',
      title: 'Gingivitis Histopathology',
      description: 'Microscopic view showing inflammatory infiltrate in gingival connective tissue',
    },
  ],

  citations: [
    {
      id: 'lang-clinical-periodontology',
      type: 'textbook',
      title: 'Clinical Periodontology and Implant Dentistry',
      authors: ['Lang, N.P.', 'Lindhe, J.'],
      source: 'Wiley-Blackwell',
    },
    {
      id: 'cochrane-mechanical',
      type: 'article',
      title: 'Mechanical plaque control for preventing gingivitis',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'condition-periodontitis', targetType: 'condition', relationship: 'related', label: 'Periodontitis' },
    { targetId: 'topic-dental-hygiene-basics', targetType: 'topic', relationship: 'related', label: 'Dental Hygiene' },
    { targetId: 'structure-gum-anatomy', targetType: 'structure', relationship: 'related', label: 'Gum Anatomy' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['gingiva', 'gums', 'periodontium'],
    topics: ['pathology', 'prevention', 'treatment'],
    keywords: ['gingivitis', 'gum disease', 'inflammation', 'bleeding gums', 'periodontal disease'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gingivitis;
