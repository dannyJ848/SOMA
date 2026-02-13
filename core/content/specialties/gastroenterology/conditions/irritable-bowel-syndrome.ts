/**
 * Irritable Bowel Syndrome - Comprehensive Educational Content
 *
 * Covers IBS subtypes, pathophysiology, diagnosis (Rome IV criteria),
 * and evidence-based management strategies.
 */

import { EducationalContent } from '../../../types';

export const irritableBowelSyndrome: EducationalContent = {
  id: 'condition-irritable-bowel-syndrome',
  type: 'condition',
  name: 'Irritable Bowel Syndrome',
  alternateNames: [
    'IBS',
    'IBS-D',
    'IBS-C',
    'IBS-M',
    'Spastic Colon',
    'Nervous Colon',
    'Functional Bowel Disorder',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'IBS is a common condition where your intestines are extra sensitive, causing belly pain, bloating, and changes in bathroom habits. It\'s uncomfortable but doesn\'t damage your intestines.',
      explanation: `**What is Irritable Bowel Syndrome?**

IBS is one of the most common digestive problems. It means your intestines (the tubes that process food) are more sensitive than normal and don't work in a smooth, regular way.

**The Good News:**
Unlike some other stomach problems, IBS does NOT damage your intestines or lead to serious diseases. It's uncomfortable, but your intestines look completely normal.

**What Does It Feel Like?**

- Belly pain or cramps (often gets better after going to the bathroom)
- Bloating (feeling puffy or full)
- Gas
- Diarrhea (loose, watery poop)
- Constipation (hard to go, or not going often)
- Some people switch between diarrhea and constipation

**There Are Different Types:**

- **IBS-D**: Mainly diarrhea
- **IBS-C**: Mainly constipation
- **IBS-M**: Mix of both

**What Causes It?**

Doctors aren't completely sure, but it seems like:
- The brain and gut aren't communicating well
- Certain foods can trigger symptoms
- Stress often makes it worse
- Some people get it after a stomach bug

**Can It Be Helped?**

Yes! While there's no cure, many things can help:
- Watching what you eat (some foods make it worse)
- Managing stress
- Medications for specific symptoms
- Regular exercise
- Getting enough sleep`,
      keyTerms: [
        { term: 'irritable bowel syndrome', definition: 'A condition where the intestines are sensitive and cause belly pain and bathroom changes' },
        { term: 'constipation', definition: 'When it\'s hard to poop or you don\'t go very often' },
        { term: 'diarrhea', definition: 'When your poop is loose and watery, and you have to go often' },
        { term: 'bloating', definition: 'Feeling puffy or uncomfortably full in your belly' },
        { term: 'trigger', definition: 'Something that sets off or causes your symptoms' },
      ],
      analogies: [
        'IBS is like having a super-sensitive alarm system in your belly that goes off when it doesn\'t need to.',
        'Your gut and brain are like two people on a phone call with a bad connection - the messages get mixed up.',
        'Think of your intestines like a highway - in IBS, traffic either moves too fast (diarrhea) or too slow (constipation).',
      ],
      examples: [
        'Someone with IBS-D might need to rush to the bathroom several times in the morning, especially when feeling stressed.',
        'A person with IBS-C might go several days without a bowel movement and feel very bloated.',
      ],
    },
    2: {
      level: 2,
      summary: 'IBS is a functional gastrointestinal disorder characterized by recurrent abdominal pain associated with defecation or altered bowel habits. It\'s diagnosed using symptom-based criteria after excluding organic disease.',
      explanation: `## Understanding IBS

IBS is a "functional" GI disorder, meaning the intestines don't work properly, but there's no visible damage or disease when examined.

### Diagnostic Criteria (Rome IV)

**Recurrent abdominal pain**, on average at least 1 day per week in the last 3 months, associated with 2 or more of:
1. Related to defecation (pain improves or worsens)
2. Associated with change in stool frequency
3. Associated with change in stool form (appearance)

Symptoms must have started at least 6 months before diagnosis.

### IBS Subtypes

| Subtype | Pattern | Bristol Stool Scale |
|---------|---------|---------------------|
| IBS-D (Diarrhea) | >25% loose/watery, <25% hard | Types 6-7 predominant |
| IBS-C (Constipation) | >25% hard/lumpy, <25% loose | Types 1-2 predominant |
| IBS-M (Mixed) | >25% loose AND >25% hard | Variable |
| IBS-U (Unclassified) | Neither pattern met | Variable |

### Common Symptoms

**Primary:**
- Abdominal pain/cramping
- Bloating and distension
- Altered bowel habits
- Urgency (IBS-D)
- Straining, incomplete evacuation (IBS-C)
- Mucus in stool

**Associated:**
- Fatigue
- Headaches
- Fibromyalgia-like symptoms
- Sleep disturbances
- Anxiety/depression (common overlap)

### Contributing Factors

**Gut-Brain Axis Dysfunction:**
- Bidirectional communication between brain and gut
- Stress affects gut function
- Gut problems affect mood and anxiety

**Visceral Hypersensitivity:**
- Lower threshold for pain from intestinal distension
- Normal amounts of gas/stool cause discomfort

**Altered Motility:**
- Too fast = diarrhea
- Too slow = constipation

**Post-Infectious IBS:**
- ~10% of gastroenteritis cases lead to IBS
- Especially after bacterial infections (Salmonella, Campylobacter)

**Food Triggers:**
- FODMAPs (fermentable carbohydrates)
- Gluten (some non-celiac gluten sensitivity)
- Lactose, fructose

### Diagnosis

**IBS is a "diagnosis of exclusion" - but doesn't require extensive testing if:**
- Symptoms fit Rome IV criteria
- No alarm features present

**Alarm Features Requiring Further Workup:**
- Blood in stool
- Unintentional weight loss
- Family history of colon cancer or IBD
- Onset after age 50
- Nocturnal symptoms (waking from sleep)
- Fever
- Anemia

**Basic Workup:**
- CBC, CRP (rule out inflammation)
- Celiac serologies (TTG-IgA)
- Consider colonoscopy if alarm features or age-appropriate screening

### Treatment Approach

1. **Education and reassurance**
2. **Dietary modification** (low FODMAP diet, fiber adjustment)
3. **Lifestyle** (stress management, exercise)
4. **Medications** (targeted to predominant symptom)`,
      keyTerms: [
        { term: 'functional disorder', definition: 'Condition where an organ doesn\'t work properly but has no visible structural damage' },
        { term: 'Rome IV criteria', definition: 'International diagnostic criteria for functional GI disorders including IBS' },
        { term: 'visceral hypersensitivity', definition: 'Increased sensitivity to normal sensations in the intestines' },
        { term: 'gut-brain axis', definition: 'Two-way communication system between the GI tract and brain' },
        { term: 'FODMAP', definition: 'Fermentable Oligo-, Di-, Mono-saccharides And Polyols - carbohydrates that can trigger IBS' },
        { term: 'Bristol Stool Scale', definition: 'Classification system for stool appearance from Type 1 (hard) to Type 7 (watery)' },
      ],
      analogies: [
        'The gut-brain axis is like a two-way radio between your belly and brain - when one side is distressed, the other gets the message.',
        'Visceral hypersensitivity is like having the volume turned up too high on your intestines\' sensors.',
        'FODMAPs are like fuel for bacteria in your gut - too much causes a gas explosion (bloating).',
      ],
    },
    3: {
      level: 3,
      summary: 'IBS pathophysiology involves gut-brain axis dysfunction, altered intestinal motility, visceral hypersensitivity, immune activation, microbiome alterations, and intestinal permeability changes. Management targets specific pathophysiologic mechanisms.',
      explanation: `## IBS Pathophysiology

### The Biopsychosocial Model

IBS results from complex interactions between:
- Biological factors (motility, sensitivity, microbiome)
- Psychological factors (stress, anxiety, catastrophizing)
- Social factors (early life events, current stressors)

### Pathophysiologic Mechanisms

**1. Visceral Hypersensitivity**
- Lowered pain threshold to rectal balloon distension
- Central sensitization (spinal and brain amplification)
- Peripheral sensitization (increased mucosal nerve density)
- Present in ~60% of IBS patients

**2. Altered Intestinal Motility**
- IBS-D: Accelerated colonic transit, increased high-amplitude propagating contractions
- IBS-C: Delayed transit, decreased motility
- Exaggerated gastrocolic reflex

**3. Gut-Brain Axis Dysfunction**
- Altered vagal tone
- Hypothalamic-pituitary-adrenal (HPA) axis dysregulation
- Abnormal brain processing of visceral signals
- fMRI studies show altered activation in pain-processing regions

**4. Post-Infectious IBS (PI-IBS)**
- Risk factors: Severity of initial infection, female sex, psychological comorbidity
- Mechanisms:
  - Persistent low-grade inflammation
  - Increased intestinal permeability
  - Altered microbiome
  - Increased mast cells and enterochromaffin cells

**5. Microbiome Alterations**
- Decreased diversity
- Reduced Bifidobacteria
- Small intestinal bacterial overgrowth (SIBO) in some patients
- Altered bile acid metabolism

**6. Intestinal Permeability ("Leaky Gut")**
- Increased paracellular permeability
- Disrupted tight junctions
- May allow bacterial products to activate immune system

**7. Serotonin Signaling**
- 95% of body's serotonin is in the gut
- 5-HT3 receptors: Mediate visceral pain and motility
- 5-HT4 receptors: Promote peristalsis
- Altered serotonin metabolism in IBS

**8. Immune Activation**
- Increased mucosal mast cells
- Mast cell-nerve proximity
- Elevated pro-inflammatory cytokines
- Activated T lymphocytes

### Diagnostic Approach

**Rome IV Implementation:**

For IBS diagnosis:
- Symptom onset ≥6 months prior
- Active symptoms in last 3 months
- Pain ≥1 day/week with ≥2 criteria (defecation-related, frequency change, form change)

**Limited Testing Strategy (if no alarm features):**
- CBC, CMP
- CRP or fecal calprotectin (rules out IBD)
- Celiac serologies (TTG-IgA with total IgA)
- TSH (if diarrhea-predominant)

**Additional Testing When Indicated:**
- Colonoscopy: Age ≥45, alarm features, or poor response
- Hydrogen breath testing: SIBO, lactose/fructose malabsorption
- Stool studies: If diarrhea (infections, microscopic colitis)
- Anorectal manometry: Dyssynergic defecation if IBS-C

### Treatment by Mechanism

**Dietary:**
- Low FODMAP diet: Reduces fermentation, 50-80% response rate
- Fiber: Soluble (psyllium) better than insoluble (bran)
- Gluten-free trial: Even without celiac, some respond
- Lactose elimination if intolerant

**Pharmacologic - IBS-D:**
- Loperamide: Mu-opioid agonist, slows transit
- Bile acid sequestrants: If bile acid malabsorption
- Rifaximin: Non-absorbed antibiotic, 2-week course
- Eluxadoline: Mu-opioid agonist/delta antagonist
- Alosetron: 5-HT3 antagonist (women with severe IBS-D only)

**Pharmacologic - IBS-C:**
- Linaclotide/Plecanatide: Guanylate cyclase C agonists
- Lubiprostone: Chloride channel activator
- Prucalopride: 5-HT4 agonist
- PEG-based laxatives: Osmotic agents

**Central Neuromodulators:**
- TCAs (amitriptyline, nortriptyline): Benefit IBS-D, pain
- SSRIs: Primarily for psychiatric comorbidity
- SNRIs (duloxetine): Pain modulation

**Non-Pharmacologic:**
- Cognitive behavioral therapy: Strong evidence
- Gut-directed hypnotherapy: Effective for refractory cases
- Mindfulness-based stress reduction`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Increased excitability of CNS neurons leading to amplified pain perception' },
        { term: 'post-infectious IBS', definition: 'IBS developing after acute gastroenteritis; occurs in ~10% of cases' },
        { term: 'enterochromaffin cells', definition: 'Intestinal cells that produce serotonin; increased in PI-IBS' },
        { term: 'guanylate cyclase C', definition: 'Intestinal receptor that increases fluid secretion; target of linaclotide' },
        { term: 'SIBO', definition: 'Small intestinal bacterial overgrowth; may contribute to IBS symptoms in some patients' },
        { term: 'dyssynergic defecation', definition: 'Incoordination of pelvic floor muscles during attempted bowel movement' },
      ],
      clinicalNotes: 'Fecal calprotectin <50 mcg/g essentially rules out IBD and provides reassurance. The low FODMAP diet should be implemented with dietitian guidance and includes elimination, reintroduction, and personalization phases. Rifaximin may be repeated for recurrent symptoms.',
    },
    4: {
      level: 4,
      summary: 'IBS involves complex neuroimmune interactions including mast cell degranulation near mucosal nerves, altered tryptophan metabolism, and epigenetic modifications from early life stress. Treatment increasingly focuses on phenotype-specific approaches and emerging therapies.',
      explanation: `## Advanced IBS Pathophysiology

### Neuroimmune Interactions

**Mast Cell-Nerve Axis:**
- Increased mast cell numbers in IBS mucosa
- Closer proximity to nerve fibers
- Mast cell mediators (histamine, tryptase, prostaglandins) activate nociceptors
- Correlation between mast cell proximity and symptom severity
- CRH (corticotropin-releasing hormone) triggers mast cell degranulation

**Enteric Nervous System:**
- "Second brain" with 100 million neurons
- Altered neurotransmitter expression
- Increased nerve fiber density in mucosa
- Nerve growth factor (NGF) upregulation

**Cytokine Profiles:**
- Elevated IL-6, IL-8 in some studies
- Altered Th1/Th2 balance
- Increased TNF-alpha mRNA in IBS-D

### Serotonin Pathophysiology

**5-HT Synthesis and Metabolism:**
- Tryptophan → 5-HTP → Serotonin (5-HT) → 5-HIAA
- 5-HT stored in enterochromaffin cells, released by mechanical/chemical stimuli
- SERT (serotonin reuptake transporter) terminates signaling

**IBS-D:**
- Increased postprandial 5-HT release
- Decreased SERT expression
- Elevated plasma 5-HT levels
- Increased 5-HT3 receptor sensitivity

**IBS-C:**
- Decreased 5-HT release
- Reduced mucosal 5-HT content
- 5-HT4 agonists stimulate peristalsis

### Microbiome-Host Interactions

**Metabolite Production:**
- Short-chain fatty acids (SCFAs): Butyrate supports colonocyte health
- Bile acid metabolism: Deconjugation affects motility
- Tryptophan metabolites: Affect serotonin synthesis, AhR activation

**Specific Associations:**
- Decreased Faecalibacterium prausnitzii (anti-inflammatory)
- Increased Firmicutes:Bacteroidetes ratio in some studies
- Methanogen (Methanobrevibacter smithii) associated with constipation
- Sulfate-reducing bacteria may cause visceral hypersensitivity

### Genetic and Epigenetic Factors

**Candidate Genes:**
- SERT polymorphisms (5-HTTLPR)
- Sodium channel SCN5A mutations
- TNFSF15 (also IBD-associated)
- IL-6 polymorphisms

**Epigenetic Modifications:**
- Early life stress causes DNA methylation changes
- Altered glucocorticoid receptor expression
- Histone modifications affecting immune genes

### Central Processing

**Brain Imaging Findings:**
- Altered activation in anterior cingulate cortex (ACC)
- Increased insula activation
- Abnormal prefrontal cortex modulation
- Altered default mode network connectivity

**Descending Modulation:**
- Deficient descending inhibition of pain
- Enhanced facilitation pathways
- Norepinephrine/serotonin system involvement (explains TCA efficacy)

### Advanced Therapeutics

**Secretagogues - Mechanism Comparison:**

| Drug | Target | Effect | Key Point |
|------|--------|--------|-----------|
| Linaclotide | GC-C | cGMP → CFTR activation | Also reduces visceral pain |
| Plecanatide | GC-C | pH-dependent activation | More physiologic |
| Lubiprostone | ClC-2 | Chloride secretion | Can cause nausea |

**Eluxadoline:**
- Mixed opioid receptor agonist (mu/kappa) and antagonist (delta)
- Reduces motility and secretion without central effects
- Contraindicated: Prior cholecystectomy, pancreatitis history, alcohol use disorder
- Black box warning for sphincter of Oddi spasm/pancreatitis

**Rifaximin:**
- Non-absorbed rifamycin antibiotic
- Modulates microbiome, not true decontamination
- May have anti-inflammatory effects
- FDA approved for IBS-D without constipation
- Re-treatment allowed for recurrence

**Emerging Therapies:**

*Fecal Microbiota Transplantation:*
- Mixed results in trials
- Donor selection may be critical
- Not FDA-approved for IBS

*Tenapanor:*
- NHE3 inhibitor (approved for IBS-C)
- Reduces sodium absorption → increased luminal fluid
- Additional effect on tight junctions

*Bile Acid Modulators:*
- Elobixibat: IBAT inhibitor, increases colonic bile acids
- Odevixibat: Similar mechanism

*Histamine Pathway:*
- H1 receptor antagonists (ebastine) showed benefit in small trials
- Ketotifen (mast cell stabilizer) reduced symptoms in hypersensitive patients

### Phenotyping for Precision Medicine

**Biomarker-Guided Approaches:**
- SeHCAT/7alpha-hydroxy-4-cholesten-3-one: Bile acid diarrhea
- Hydrogen/methane breath testing: SIBO, carbohydrate malabsorption
- Mucosal mast cell counts: Predict response to mast cell stabilizers
- Fecal microbiome analysis: Research stage`,
      keyTerms: [
        { term: 'CRH', definition: 'Corticotropin-releasing hormone; stress hormone that triggers mast cell activation in the gut' },
        { term: 'SERT', definition: 'Serotonin reuptake transporter; terminates serotonin signaling; target for SSRIs' },
        { term: 'AhR', definition: 'Aryl hydrocarbon receptor; activated by tryptophan metabolites; modulates inflammation' },
        { term: 'GC-C', definition: 'Guanylate cyclase C; intestinal receptor that increases fluid secretion and reduces pain' },
        { term: 'IBAT', definition: 'Ileal bile acid transporter; inhibition increases colonic bile acids and motility' },
        { term: 'SCN5A', definition: 'Sodium channel gene; mutations cause IBS-like symptoms and intestinal pseudo-obstruction' },
      ],
      clinicalNotes: 'Eluxadoline requires careful patient selection - contraindicated without a gallbladder due to sphincter of Oddi spasm risk. Linaclotide has emerging evidence for visceral analgesic effects independent of its secretory action, mediated by extracellular cGMP.',
    },
    5: {
      level: 5,
      summary: 'Contemporary IBS management employs multi-target strategies based on predominant pathophysiology, integrating dietary therapy, pharmacologic interventions, and brain-gut behavioral therapies. Research frontiers include microbiome manipulation, bile acid modulation, and neurogastroenterology-informed approaches.',
      explanation: `## IBS: Evidence-Based Management and Emerging Science

### Diagnostic Certainty and Positive Diagnosis

**The Positive Diagnostic Approach:**
Rome IV emphasizes IBS as a positive diagnosis, not merely exclusion. Key elements:
- Symptom pattern recognition
- Limited, directed testing
- Avoid excessive investigation that reinforces illness behavior

**When to Test More Extensively:**
- Age ≥45-50 without prior screening
- Alarm features (bleeding, weight loss, nocturnal symptoms)
- Family history of IBD, celiac, colorectal cancer
- Objective inflammatory markers elevated
- Refractory to first-line therapy

### Treatment Algorithm - AGA/ACG Guidelines

**First-Line Approach:**
1. Patient education (naming the diagnosis, explaining gut-brain connection)
2. Dietary assessment and intervention
3. Lifestyle optimization (sleep, stress, exercise)

**Dietary Therapy:**

*Low FODMAP Diet Protocol:*
- Phase 1: Elimination (2-6 weeks)
- Phase 2: Reintroduction (systematic challenge)
- Phase 3: Personalization (liberalize tolerated foods)
- Evidence: NNT ~2.5 for symptom improvement
- Requires dietitian guidance

*Soluble Fiber:*
- Psyllium: 10-20 g/day, gradually titrated
- NNT ~6 for global symptom improvement
- Avoid insoluble fiber (bran) - may worsen symptoms

**Pharmacotherapy by Predominant Symptom:**

*IBS-D:*
| Agent | Dose | NNT | Notes |
|-------|------|-----|-------|
| Rifaximin | 550 mg TID x 14 days | 10.5 | Can repeat; global symptoms |
| Alosetron | 0.5-1 mg BID | 7.5 | Women only; constipation, ischemic colitis risk |
| Eluxadoline | 75-100 mg BID | 12.5 | Avoid if no gallbladder |
| TCAs | 10-75 mg qhs | 4.5 | Also address pain |
| Loperamide | 2-16 mg/day | - | Symptom relief, not FDA-specific |

*IBS-C:*
| Agent | Dose | NNT | Notes |
|-------|------|-----|-------|
| Linaclotide | 290 mcg daily | 6 | Give 30 min before breakfast |
| Plecanatide | 3 mg daily | 9 | Similar efficacy, possibly less diarrhea |
| Lubiprostone | 8 mcg BID | 12.5 | Nausea common |
| Tenapanor | 50 mg BID | 9 | NHE3 inhibitor |
| PEG 3350 | 17 g daily | - | No FDA IBS indication but effective |

**Neuromodulators:**

*TCA Selection:*
- Amitriptyline/nortriptyline: Start 10-25 mg qhs, titrate to 50-75 mg
- More effective for pain, IBS-D (anticholinergic = slows transit)
- Monitor QTc at higher doses

*SNRI:*
- Duloxetine 30-60 mg: Central pain modulation
- May be preferred with anxiety/depression comorbidity

*Atypical:*
- Mirtazapine: Weight gain, appetite stimulation; consider if underweight
- Buspirone: 5-HT1A agonist; may improve accommodation

### Brain-Gut Behavioral Therapies

**Cognitive Behavioral Therapy (CBT):**
- Strong evidence (NNT ~3-4)
- Addresses catastrophizing, avoidance behaviors
- Self-directed and internet-based versions effective

**Gut-Directed Hypnotherapy:**
- 7-12 sessions typically
- Sustained benefit at 5-year follow-up
- NNT ~4
- May reduce visceral sensitivity

**Mindfulness-Based Stress Reduction:**
- 8-week program
- Effective for global symptoms
- Particularly helpful for catastrophizing

### Refractory IBS Management

**Step 1: Reassess Diagnosis**
- Review symptom pattern (truly IBS?)
- Consider overlooked diagnoses:
  - Bile acid diarrhea: Up to 30% of IBS-D
  - Carbohydrate malabsorption
  - SIBO
  - Dyssynergic defecation (IBS-C)
  - Microscopic colitis

**Step 2: Optimize Current Therapy**
- Verify dietary adherence
- Ensure adequate drug dosing
- Address psychological comorbidity

**Step 3: Combination Therapy**
- Pharmacologic combinations (e.g., secretagogue + neuromodulator)
- Add behavioral therapy
- Multidisciplinary approach

**Step 4: Consider Emerging/Off-Label Options**
- Mast cell stabilizers (research stage)
- FMT (not recommended outside trials)
- Specialized hypersensitivity protocols

### Research Frontiers

**Microbiome Therapeutics:**
- Defined microbial consortia vs. FMT
- Personalized probiotic selection based on baseline microbiome
- Postbiotics (microbial metabolites)

**Biomarker Development:**
- Multi-omic profiling (metabolomics, proteomics)
- Volatile organic compounds in breath
- Host genetic profiling for drug selection

**Novel Targets:**
- Protease-activated receptors (PARs)
- Cannabinoid receptors (CB1, CB2)
- Transient receptor potential (TRP) channels
- Toll-like receptors
- Zona occludens toxin pathway (for permeability)

**Digital Therapeutics:**
- FDA-cleared app-based CBT (Mahana IBS)
- Symptom tracking with AI pattern recognition
- Remote hypnotherapy delivery

### Quality Metrics and Practice Points

**Documentation:**
- Rome IV criteria assessment
- Alarm feature screening
- Subtype classification
- Treatment trials and responses

**Patient Communication:**
- Validate symptoms are real
- Explain gut-brain connection
- Set realistic expectations
- Provide written educational materials

**Appropriate Testing:**
- Avoid "million dollar workup" for classic presentation
- Use fecal calprotectin to differentiate from IBD (cost-effective)
- Reserve colonoscopy for appropriate indications`,
      keyTerms: [
        { term: 'NNT', definition: 'Number needed to treat; number of patients who must be treated for one to benefit' },
        { term: 'positive diagnostic approach', definition: 'Diagnosing IBS based on symptom criteria rather than extensive exclusion testing' },
        { term: 'bile acid diarrhea', definition: 'Diarrhea from excess bile acids reaching the colon; common cause of IBS-D; test with SeHCAT or C4' },
        { term: 'gut-directed hypnotherapy', definition: 'Specialized hypnosis technique targeting gut sensations and motility; evidence-based IBS treatment' },
        { term: 'digital therapeutics', definition: 'Evidence-based software treatments (apps) for disease management' },
        { term: 'postbiotics', definition: 'Beneficial compounds produced by microbes; may have therapeutic potential' },
      ],
      clinicalNotes: `Key clinical pearls:
1. A positive diagnosis based on Rome IV reduces unnecessary testing and healthcare costs
2. Fecal calprotectin <50 mcg/g provides strong negative predictive value for IBD
3. Bile acid diarrhea underlies up to 30% of IBS-D; empiric bile acid sequestrant trial is reasonable
4. Low FODMAP diet is most effective dietary intervention but requires proper reintroduction phase
5. Linaclotide's analgesic effect is mediated by extracellular cGMP acting on mucosal afferents
6. Gut-directed hypnotherapy has durable effects; consider for refractory patients or those preferring non-pharmacologic treatment
7. Rifaximin can be repeated for IBS-D recurrence; some patients need periodic treatment
8. Address the gut-brain connection explicitly - patients who understand the mechanism have better outcomes
9. For dyssynergic defecation (paradoxical pelvic floor contraction), biofeedback is first-line, not laxatives`,
    },
  },

  media: [
    {
      id: 'ibs-subtypes',
      type: 'diagram',
      filename: 'ibs-subtypes.svg',
      title: 'IBS Subtypes',
      description: 'Bristol stool chart and IBS classification',
    },
    {
      id: 'gut-brain-axis',
      type: 'diagram',
      filename: 'gut-brain-axis.svg',
      title: 'Gut-Brain Axis',
      description: 'Bidirectional communication between brain and gut in IBS',
    },
  ],

  citations: [
    {
      id: 'acg-ibs-2021',
      type: 'article',
      title: 'ACG Clinical Guideline: Management of Irritable Bowel Syndrome',
      authors: ['Lacy, B.E.', 'Pimentel, M.', 'Brenner, D.M.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__management_of_irritable.10.aspx',
    },
    {
      id: 'rome-iv',
      type: 'article',
      title: 'Rome IV Diagnostic Criteria for Irritable Bowel Syndrome',
      source: 'Gastroenterology',
    },
    {
      id: 'aga-ibs-2022',
      type: 'article',
      title: 'AGA Clinical Practice Guideline on the Pharmacological Management of IBS',
      source: 'Gastroenterology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
    { targetId: 'condition-celiac', targetType: 'condition', relationship: 'related', label: 'Celiac Disease' },
    { targetId: 'structure-colon', targetType: 'structure', relationship: 'related', label: 'Colon Anatomy' },
  ],

  tags: {
    systems: ['digestive', 'nervous'],
    topics: ['pathology', 'gastroenterology', 'neurology', 'pharmacology'],
    keywords: ['IBS', 'functional', 'gut-brain', 'FODMAP', 'visceral hypersensitivity', 'motility'],
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

export default irritableBowelSyndrome;
