/**
 * Hemolytic Anemia - Comprehensive Educational Content
 *
 * A diverse group of anemias characterized by premature destruction of red blood cells,
 * classified by intrinsic vs extrinsic causes and intravascular vs extravascular hemolysis.
 */

import { EducationalContent } from '../../../types';

export const hemolyticAnemia: EducationalContent = {
  id: 'condition-hemolytic-anemia',
  type: 'condition',
  name: 'Hemolytic Anemia',
  alternateNames: ['Hemolysis', 'Hemolytic disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Hemolytic anemia happens when red blood cells are destroyed faster than your body can make new ones.',
      explanation: `Hemolytic anemia is like having workers tear down houses faster than builders can construct new ones - your red blood cells are being broken apart faster than your body can replace them.

**Why Red Blood Cells Get Destroyed:**
Normally, red blood cells live about 120 days. In hemolytic anemia, they are destroyed much sooner. This can happen because:
- Something is wrong with the red blood cells themselves (they are made with defects)
- Something outside the cells is attacking them (like the immune system)

**Types:**
- **Inherited**: You are born with cells that break easily (like sickle cell disease)
- **Acquired**: Something starts attacking your cells later in life

**Common Signs:**
- Pale skin
- Yellow skin or eyes (jaundice) - from breakdown products
- Feeling tired and weak
- Dark urine (tea or cola colored)
- Fast heartbeat
- Enlarged spleen

**How It's Treated:**
- Depends on the cause
- Blood transfusions if severe
- Medicines to stop the immune system from attacking cells
- Sometimes removing the spleen helps`,
      keyTerms: [
        { term: 'hemolytic', definition: 'Breaking apart of red blood cells', pronunciation: 'hee-moh-LIT-ik' },
        { term: 'jaundice', definition: 'Yellow color of skin and eyes from a buildup of bilirubin', pronunciation: 'JAWN-dis' },
        { term: 'bilirubin', definition: 'A yellow substance made when red blood cells break down', pronunciation: 'bil-ih-ROO-bin' },
        { term: 'spleen', definition: 'An organ that filters blood and removes old or damaged red blood cells' },
      ],
      analogies: [
        'Red blood cells in hemolytic anemia are like balloons that pop too easily - they burst before they should.',
        'The spleen acts like a quality control inspector, but in hemolytic anemia, it removes too many cells.',
      ],
      examples: [
        'Someone with sickle cell disease has red blood cells shaped like crescents that get stuck and break easily.',
        'A person whose immune system starts attacking their own red blood cells develops autoimmune hemolytic anemia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemolytic anemia results from shortened red blood cell survival, classified by intrinsic vs extrinsic causes and by the site of hemolysis (intravascular vs extravascular).',
      explanation: `Hemolytic anemia encompasses conditions where RBCs are destroyed prematurely, reducing their normal 120-day lifespan. The bone marrow compensates by increasing production, but when destruction exceeds production, anemia develops.

**Classification:**

*By Cause:*
- **Intrinsic (corpuscular)**: Defect within the RBC
  - Membrane disorders (spherocytosis, elliptocytosis)
  - Hemoglobin disorders (sickle cell, thalassemia)
  - Enzyme deficiencies (G6PD, pyruvate kinase)
- **Extrinsic (extracorpuscular)**: External factors destroying normal RBCs
  - Immune-mediated (autoimmune, alloimmune)
  - Mechanical (heart valves, microangiopathy)
  - Infections, toxins, drugs

*By Location of Hemolysis:*
- **Intravascular**: RBCs destroyed in circulation
  - Complement-mediated lysis
  - Mechanical trauma
  - Findings: Free hemoglobin, hemoglobinuria
- **Extravascular**: RBCs destroyed in spleen/liver
  - Macrophage phagocytosis
  - Findings: Splenomegaly, indirect hyperbilirubinemia

**Clinical Features:**
- Symptoms of anemia (fatigue, dyspnea, pallor)
- Jaundice (from bilirubin)
- Dark urine (hemoglobinuria if intravascular)
- Splenomegaly
- Gallstones (pigment stones from chronic hemolysis)

**Laboratory Findings:**

*Evidence of Hemolysis:*
- Elevated LDH (released from RBCs)
- Elevated indirect bilirubin
- Decreased haptoglobin (binds free hemoglobin)
- Elevated reticulocyte count (bone marrow response)

*Peripheral Smear:*
- Polychromasia (young RBCs)
- Specific findings depend on cause (spherocytes, schistocytes, sickle cells)

**Coombs Test:**
- Direct (DAT): Detects antibodies on RBC surface
- Indirect: Detects antibodies in serum
- Positive DAT suggests immune hemolysis`,
      keyTerms: [
        { term: 'intravascular hemolysis', definition: 'RBC destruction within blood vessels, releasing hemoglobin directly into plasma' },
        { term: 'extravascular hemolysis', definition: 'RBC destruction by macrophages in spleen and liver' },
        { term: 'haptoglobin', definition: 'Plasma protein that binds free hemoglobin; decreased in hemolysis', pronunciation: 'hap-toh-GLOH-bin' },
        { term: 'reticulocyte', definition: 'Young RBC released early from marrow; increased in hemolysis', pronunciation: 'reh-TIK-yoo-loh-site' },
        { term: 'Coombs test', definition: 'Test detecting antibodies on RBCs (direct) or in serum (indirect)' },
      ],
      analogies: [
        'Haptoglobin is like a cleanup crew for escaped hemoglobin - when hemolysis is active, the cleanup crew runs out.',
        'Reticulocytes are like reinforcements rushed to battle - their increase shows the bone marrow is working overtime.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hemolytic anemias require systematic diagnostic evaluation to distinguish intrinsic from extrinsic causes and guide targeted therapy, with laboratory findings reflecting the site and severity of hemolysis.',
      explanation: `## Pathophysiology

**Normal RBC Lifespan:**
- Average 120 days
- Senescent RBCs recognized by:
  - Loss of membrane phosphatidylserine asymmetry
  - Band 3 clustering
  - Decreased deformability
- Removed by splenic and hepatic macrophages

**Hemolysis Compensation:**
- Bone marrow can increase production 6-8 fold
- Hemolytic anemia develops when destruction exceeds compensation
- Reticulocyte count reflects marrow response
- Reticulocyte production index (RPI) >2 indicates adequate response

**Intravascular Hemolysis Cascade:**
1. RBC lysis releases hemoglobin
2. Hemoglobin binds haptoglobin (removed by hepatocytes)
3. Excess free hemoglobin:
   - Filtered by kidney (hemoglobinuria)
   - Oxidized to methemoglobin
   - Dissociates to heme (binds hemopexin)
4. Consequences: Acute kidney injury, pulmonary hypertension

**Extravascular Hemolysis:**
1. Damaged/opsonized RBCs recognized by macrophages
2. Phagocytosis in spleen (primarily) and liver
3. Heme converted to bilirubin
4. Indirect hyperbilirubinemia, splenomegaly

## Classification and Etiologies

### Intrinsic (Corpuscular) Defects

**Membrane Disorders:**
| Disorder | Defect | Features |
|----------|--------|----------|
| Hereditary spherocytosis | Spectrin, ankyrin | Spherocytes, splenomegaly, osmotic fragility |
| Hereditary elliptocytosis | Spectrin, protein 4.1 | Elliptocytes, mild/variable anemia |
| PNH | GPI anchor (acquired) | Complement-mediated lysis, thrombosis |

**Enzyme Deficiencies:**
| Disorder | Defect | Features |
|----------|--------|----------|
| G6PD deficiency | G6PD enzyme | Episodic, oxidant-induced, bite cells |
| Pyruvate kinase deficiency | PK enzyme | Chronic, echinocytes |

**Hemoglobinopathies:**
| Disorder | Defect | Features |
|----------|--------|----------|
| Sickle cell disease | HbS | Sickling, vasoocclusion |
| Thalassemia | Globin chain imbalance | Ineffective erythropoiesis |
| Unstable hemoglobins | Various | Heinz bodies |

### Extrinsic (Extracorpuscular) Causes

**Immune-Mediated:**
- Warm AIHA: IgG, extravascular, spherocytes
- Cold AIHA: IgM, complement, acrocyanosis
- Drug-induced: Multiple mechanisms
- Alloimmune: Transfusion reaction, HDN

**Mechanical:**
- Microangiopathic (TTP, HUS, DIC): Schistocytes
- Macroangiopathic: Prosthetic valves
- March hemoglobinuria: Foot strike

**Other:**
- Infections: Malaria, Babesia, Clostridium
- Toxins: Snake venom, copper (Wilson disease)
- Hypersplenism

## Diagnostic Approach

**Step 1: Confirm Hemolysis**
- LDH elevated
- Indirect bilirubin elevated
- Haptoglobin decreased
- Reticulocyte count elevated

**Step 2: Determine Site**
| Finding | Intravascular | Extravascular |
|---------|---------------|---------------|
| Hemoglobinuria | Present | Absent |
| Hemoglobinemia | Present | Absent |
| Hemosiderinuria | Present (late) | Absent |
| Haptoglobin | Very low | Low |
| Splenomegaly | Less common | Common |

**Step 3: Identify Cause**
- Direct Coombs test: + for immune hemolysis
- Peripheral smear: Morphology guides diagnosis
- Additional tests based on findings

**Peripheral Smear Findings:**
| Finding | Suggests |
|---------|----------|
| Spherocytes | Hereditary spherocytosis, AIHA |
| Schistocytes | Microangiopathy (TTP, HUS, DIC) |
| Sickle cells | Sickle cell disease |
| Bite cells | G6PD deficiency |
| Target cells | Hemoglobinopathy, liver disease |
| Agglutination | Cold AIHA |

## Treatment Principles

**Supportive:**
- Folic acid supplementation (chronic hemolysis)
- Transfusion if severe (caution in AIHA)
- Iron chelation if chronically transfused

**Cause-Specific:**
- AIHA: Steroids, rituximab, splenectomy
- TTP: Plasma exchange
- PNH: Eculizumab (complement inhibitor)
- Hereditary spherocytosis: Splenectomy if severe

**Splenectomy Considerations:**
- Removes site of extravascular hemolysis
- Effective in hereditary spherocytosis, warm AIHA
- Requires pre-operative vaccination (pneumococcus, meningococcus, Haemophilus)
- Increases infection risk (encapsulated organisms)`,
      keyTerms: [
        { term: 'RPI', definition: 'Reticulocyte Production Index; corrects reticulocyte count for anemia degree and maturation time; >2 suggests adequate marrow response' },
        { term: 'schistocytes', definition: 'Fragmented RBCs from mechanical destruction; hallmark of microangiopathic hemolytic anemia', pronunciation: 'SHIS-toh-sites' },
        { term: 'spherocytes', definition: 'Small, round RBCs lacking central pallor; seen in hereditary spherocytosis and AIHA' },
        { term: 'osmotic fragility', definition: 'Test measuring RBC susceptibility to lysis in hypotonic solutions; increased in spherocytosis' },
        { term: 'direct antiglobulin test', definition: 'Coombs test detecting antibodies bound to RBCs; positive in immune hemolysis' },
      ],
      clinicalNotes: 'In suspected hemolytic anemia, always examine the peripheral smear - it is the most informative test. Schistocytes suggest microangiopathy (consider TTP - a medical emergency). Spherocytes with positive DAT indicate AIHA.',
    },
    4: {
      level: 4,
      summary: 'Hemolytic anemia diagnosis and management requires integration of pathophysiologic mechanisms, laboratory findings, and clinical context, with particular attention to distinguishing TMA syndromes, optimizing AIHA therapy, and managing complex inherited hemolytic disorders.',
      explanation: `## Advanced Pathophysiology

**Hemoglobin Degradation:**

*Intravascular Pathway:*
\`\`\`
Free Hb → Hb-haptoglobin (cleared by CD163+ macrophages)
       ↓
Excess Hb → Methemoglobin → Heme + Globin
                          ↓
                   Hemopexin binding (cleared by liver)
                          ↓
                   Excess heme → Albumin binding (methemalbumin)
                               → Renal filtration
                               → Hemosiderin deposition
\`\`\`

*Consequences of Intravascular Hemolysis:*
- NO scavenging by free hemoglobin
- Pulmonary hypertension
- Acute kidney injury
- Thrombosis (PNH, paroxysmal cold hemoglobinuria)

**Complement-Mediated Hemolysis:**
- Classical pathway: Antibody-mediated (cold AIHA)
- Alternative pathway: Continuous low-level activation (PNH)
- Terminal complement (C5-C9): Membrane attack complex
- Regulatory proteins: CD55, CD59 (missing in PNH)

## Autoimmune Hemolytic Anemia

**Warm AIHA:**
- IgG antibodies (usually)
- Optimal activity at 37C
- Extravascular hemolysis (splenic)
- Causes: Idiopathic, lymphoproliferative, autoimmune, drugs

*Management:*
1. First-line: Prednisone 1-1.5 mg/kg/day
2. Second-line: Rituximab (preferred over splenectomy)
3. Third-line: Splenectomy, immunosuppressants
4. Refractory: Bortezomib, alemtuzumab, complement inhibitors

*Response Assessment:*
- Reticulocyte response in days
- Hemoglobin improvement weeks
- DAT may remain positive despite clinical response

**Cold Agglutinin Disease:**
- IgM antibodies with complement fixation
- Optimal activity at 4C
- Intravascular and extravascular hemolysis
- Often secondary (lymphoma, Mycoplasma, EBV)

*Management:*
- Avoid cold exposure
- Steroids generally ineffective
- Rituximab-based therapy for symptomatic disease
- Complement inhibitors (sutimlimab - approved 2022)

**Drug-Induced Immune Hemolysis:**
| Mechanism | Drugs | DAT | Features |
|-----------|-------|-----|----------|
| Drug adsorption | Penicillin (high dose) | IgG+ | Dose-dependent |
| Immune complex | Quinine, quinidine | C3+ | Small doses |
| Autoantibody induction | Methyldopa, fludarabine | IgG+ | Mimics warm AIHA |

## Microangiopathic Hemolytic Anemia

**TTP (Thrombotic Thrombocytopenic Purpura):**
- ADAMTS13 deficiency (<10% activity)
- Acquired (autoantibodies) or congenital
- Pentad: MAHA, thrombocytopenia, neuro, renal, fever (full pentad rare)
- Emergency: Plasma exchange

*PLASMIC Score (pretest probability):*
- Platelet count <30
- Hemolysis (reticulocyte, bilirubin, haptoglobin)
- No active cancer
- No transplant
- MCV <90
- INR <1.5
- Creatinine <2.0
- 6-7 points: High probability; start treatment

**HUS (Hemolytic Uremic Syndrome):**
- Typical: STEC infection (E. coli O157:H7), children
- Atypical: Complement dysregulation, any age
- Renal involvement predominates

*aHUS Treatment:*
- Eculizumab or ravulizumab (C5 inhibitors)
- Consider complement genetic testing
- Not plasma exchange (unlike TTP)

**Distinguishing TMA Syndromes:**
| Feature | TTP | HUS (typical) | aHUS | DIC |
|---------|-----|---------------|------|-----|
| ADAMTS13 | <10% | Normal | Normal | Normal |
| Creatinine | Mild/moderate | Severe | Severe | Variable |
| Coagulation | Normal | Normal | Normal | Abnormal |
| Trigger | None/autoimmune | STEC | Complement | Underlying disease |

## Inherited Hemolytic Anemias

**G6PD Deficiency:**
- X-linked
- Mediterranean variant (severe) vs African variant (mild-moderate)
- Oxidant stress → Heinz bodies → bite cells → hemolysis

*Triggers:*
- Fava beans (favism)
- Infections
- Drugs: Primaquine, dapsone, sulfonamides, nitrofurantoin

*Management:*
- Avoid triggers
- Transfusion if severe
- Reticulocytes have G6PD (may mask deficiency in acute episode)

**Hereditary Spherocytosis:**
- Autosomal dominant (75%)
- Spectrin, ankyrin, band 3, protein 4.2 defects
- Variable severity

*Diagnosis:*
- Spherocytes, elevated MCHC
- Osmotic fragility increased
- EMA (eosin-5-maleimide) binding decreased
- Genetic testing available

*Management:*
- Folic acid supplementation
- Splenectomy for moderate-severe (consider partial)
- Monitor for aplastic crisis (parvovirus B19)
- Gallstone surveillance

**Paroxysmal Nocturnal Hemoglobinuria (PNH):**
- Acquired clonal GPI-anchor deficiency
- PIGA mutation in hematopoietic stem cell
- Missing CD55 (DAF) and CD59

*Clinical Features:*
- Episodic hemoglobinuria
- Thrombosis (unusual sites: hepatic, cerebral)
- Cytopenias (often arises from aplastic anemia)
- Abdominal pain, dysphagia, erectile dysfunction

*Diagnosis:*
- Flow cytometry: GPI-anchored protein deficiency (CD55, CD59, FLAER)
- Clone size guides management

*Treatment:*
- Complement inhibition: Eculizumab, ravulizumab
- Breakthrough hemolysis: Add pegcetacoplan (C3 inhibitor)
- Thrombosis prophylaxis in high-risk
- Allogeneic transplant: Potentially curative

## Transfusion Considerations

**AIHA Challenges:**
- Difficult crossmatch (autoantibody reacts with all cells)
- "Least incompatible" units
- Clinical judgment: Severe anemia requires transfusion despite risks
- May need extended phenotype/genotype matching

**Alloimmunization:**
- Risk with repeated transfusions
- Particularly in sickle cell disease
- Extended antigen matching reduces risk`,
      keyTerms: [
        { term: 'ADAMTS13', definition: 'A disintegrin and metalloproteinase with thrombospondin motifs 13; vWF-cleaving protease deficient in TTP', pronunciation: 'a-DAMS-13' },
        { term: 'eculizumab', definition: 'Monoclonal antibody targeting complement C5; approved for PNH and aHUS', pronunciation: 'ek-yoo-LIZ-oo-mab' },
        { term: 'FLAER', definition: 'Fluorescent aerolysin; binds GPI anchors and is used to diagnose PNH by flow cytometry' },
        { term: 'cold agglutinin', definition: 'IgM antibody that binds RBCs optimally at cold temperatures, fixing complement and causing hemolysis' },
        { term: 'sutimlimab', definition: 'Monoclonal antibody targeting C1s; approved 2022 for cold agglutinin disease' },
      ],
      clinicalNotes: 'In any patient with MAHA and thrombocytopenia, consider TTP and check ADAMTS13 activity - do not delay plasma exchange while awaiting results if clinical suspicion is high. In PNH patients on eculizumab, meningococcal vaccination is mandatory due to complement inhibition.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of hemolytic anemias integrates advances in complement biology, targeted therapies, and diagnostic precision, with evolving paradigms in autoimmune hemolysis treatment, complement inhibition strategies, and personalized approaches to inherited disorders.',
      explanation: `## Molecular and Genetic Advances

**Complement System in Hemolysis:**

*Alternative Pathway:*
- Continuous low-level activation ("tickover")
- Amplification loop critical for pathology
- Regulatory proteins: Factor H, Factor I, MCP (CD46)
- Dysregulation → aHUS, C3 glomerulopathy

*Terminal Pathway Inhibition:*
- C5 inhibitors: Eculizumab, ravulizumab
- Prevent MAC formation
- Do not prevent C3b opsonization
- Extravascular hemolysis may persist

*Proximal Complement Inhibition:*
- C3 inhibitors: Pegcetacoplan
- Prevents both MAC and opsonization
- Greater hemolysis control but infection concerns
- Factor D inhibitors in development

**Genetic Architecture of Hemolysis:**

*Hereditary Spherocytosis Genes:*
| Gene | Protein | Frequency | Inheritance |
|------|---------|-----------|-------------|
| ANK1 | Ankyrin | 40-65% | AD |
| SPTB | Beta-spectrin | 15-30% | AD |
| SLC4A1 | Band 3 | 15-25% | AD |
| SPTA1 | Alpha-spectrin | <5% | AR |
| EPB42 | Protein 4.2 | <5% | AR |

*G6PD Variants:*
- >200 variants identified
- Class I: Chronic hemolysis (<10% activity)
- Class II: Severe (Mediterranean) <10% activity
- Class III: Moderate (African A-) 10-60% activity
- WHO classification guides severity

## Therapeutic Advances

**Complement Inhibitors:**

| Agent | Target | Dosing | Key Features |
|-------|--------|--------|--------------|
| Eculizumab | C5 | Q2 weeks IV | First approved |
| Ravulizumab | C5 | Q8 weeks IV | Long-acting |
| Pegcetacoplan | C3 | Q3 days SQ | Proximal inhibition |
| Iptacopan | Factor B | Daily PO | Oral option |
| Danicopan | Factor D | BID PO | Breakthrough adjunct |
| Sutimlimab | C1s | Q2 weeks IV | Classical pathway (CAD) |

**PNH Management Evolution:**

*Clone Size Stratification:*
- Large clone (>50%): High thrombosis risk
- Consider anticoagulation prophylaxis
- Complement inhibition if symptomatic

*Treatment Selection:*
1. C5 inhibitor (eculizumab/ravulizumab)
   - First-line for hemolytic PNH
   - Monitor for breakthrough (LDH)
2. Add pegcetacoplan if:
   - Persistent anemia
   - Ongoing transfusion need
   - Extravascular hemolysis markers
3. Consider:
   - Iptacopan (oral Factor B inhibitor)
   - Danicopan add-on

*Monitoring on Complement Inhibition:*
- LDH (breakthrough hemolysis)
- Reticulocyte count
- Hemoglobin
- Bilirubin
- Meningococcal vaccination status

**AIHA Treatment Algorithm:**

*Warm AIHA:*
\`\`\`
First-line: Prednisone 1-1.5 mg/kg
          ↓
No response or relapse
          ↓
Rituximab (375 mg/m2 weekly x4)
          ↓
Refractory options:
- Splenectomy
- Mycophenolate
- Azathioprine
- Sirolimus
- Danazol
- Complement inhibitors
- FcRn inhibitors (emerging)
\`\`\`

*Cold Agglutinin Disease:*
- Sutimlimab: First approved therapy (2022)
- Rituximab + bendamustine
- Bortezomib-based
- Avoid steroids, splenectomy (ineffective)

## Diagnostic Refinement

**Flow Cytometry Applications:**

*PNH Detection:*
- FLAER (most sensitive)
- CD55, CD59 on RBCs
- CD14, CD16, CD24 on granulocytes
- Clone size quantification
- Minimal residual disease monitoring

*Red Cell Phenotyping:*
- EMA binding (hereditary spherocytosis)
- AGLT (acidified glycerol lysis time)
- Flow-based osmotic fragility

**Molecular Testing:**

*Next-Generation Sequencing Panels:*
- Hereditary hemolytic anemias
- Includes: Membrane, enzyme, globin genes
- Increasingly replacing older tests

*Specific Applications:*
- PIGA sequencing (PNH confirmation)
- Complement gene panels (aHUS)
- ADAMTS13 gene (congenital TTP)

## Special Clinical Scenarios

**TTP Treatment Advances:**

*Caplacizumab:*
- Anti-vWF nanobody
- Blocks vWF-platelet interaction
- Added to plasma exchange and immunosuppression
- Faster platelet recovery, reduced exacerbations

*Treatment Protocol:*
1. Plasma exchange (immediately upon suspicion)
2. Corticosteroids
3. Caplacizumab
4. Rituximab (for relapse reduction)
5. Monitor ADAMTS13 during and post-treatment

**Pregnancy Considerations:**

*AIHA in Pregnancy:*
- Can cause fetal/neonatal hemolysis (IgG crosses placenta)
- Steroids first-line (relatively safe)
- IVIG option
- Rituximab category C (use if needed)

*PNH in Pregnancy:*
- High-risk (thrombosis, hemolysis)
- Continue complement inhibition
- Eculizumab crosses placenta minimally
- Anticoagulation considerations

**Hemolysis Post-Transplant:**

*Stem Cell Transplant:*
- Minor ABO mismatch: Immediate hemolysis of donor cells
- Major ABO mismatch: Delayed RBC recovery
- Passenger lymphocyte syndrome: Donor lymphocytes make anti-recipient antibodies

*Solid Organ Transplant:*
- Liver transplant associated hemolysis
- ABO considerations

## Research Frontiers

**Emerging Therapies:**

*FcRn Inhibitors:*
- Reduce IgG recycling
- Lower pathogenic autoantibodies
- Rozanolixizumab, efgartigimod
- Potential for warm AIHA

*BTK Inhibitors:*
- B-cell signaling inhibition
- Riley in AIHA trials
- Reduce autoantibody production

*Spleen-Preserving Approaches:*
- Rituximab preferred over splenectomy
- Partial splenectomy (especially children)
- Splenic artery embolization

**Gene Therapy:**

*PNH:*
- PIGA gene correction
- Hematopoietic stem cell targeting
- Early development

*Hereditary Disorders:*
- Pyruvate kinase deficiency: Mitapivat (PKR activator) approved
- Gene therapy trials ongoing

## Quality Metrics

**Performance Measures:**
- ADAMTS13 testing in suspected TTP
- Complement inhibitor vaccination protocols
- DAT and hemolysis workup documentation
- Appropriate crossmatch procedures in AIHA

**Avoiding Pitfalls:**
- Never delay plasma exchange for ADAMTS13 results in suspected TTP
- G6PD testing during acute hemolysis may be falsely negative
- DAT can be positive without clinical hemolysis
- Haptoglobin may be normal in subacute hemolysis`,
      keyTerms: [
        { term: 'pegcetacoplan', definition: 'C3 inhibitor for PNH; targets proximal complement, preventing both MAC and C3 opsonization' },
        { term: 'caplacizumab', definition: 'Anti-vWF nanobody used in TTP to prevent platelet-vWF interaction; improves outcomes with plasma exchange', pronunciation: 'cap-la-SIZ-oo-mab' },
        { term: 'FcRn inhibitors', definition: 'Drugs blocking neonatal Fc receptor to accelerate IgG catabolism; emerging therapy for autoantibody diseases' },
        { term: 'mitapivat', definition: 'Pyruvate kinase activator; first oral therapy for hereditary PK deficiency; approved 2022', pronunciation: 'my-TA-pi-vat' },
        { term: 'passenger lymphocyte syndrome', definition: 'Post-transplant hemolysis from donor lymphocytes producing antibodies against recipient RBC antigens' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- TTP: ADAMTS13 <10%, plasma exchange is life-saving, caplacizumab improves outcomes
- PNH: Flow cytometry for GPI-anchored proteins (FLAER), meningococcal vaccination before eculizumab
- Cold agglutinin disease: Sutimlimab first approved therapy, steroids/splenectomy ineffective
- Warm AIHA: Rituximab increasingly preferred over splenectomy
- G6PD: Test may be normal during acute hemolysis (reticulocytes have enzyme)
- Schistocytes: >1% suggests microangiopathy - consider TMA
- In AIHA, "least incompatible" units may be transfused if clinically necessary
- Complement inhibition requires vaccination against encapsulated organisms`,
    },
  },

  media: [
    {
      id: 'hemolysis-classification',
      type: 'diagram',
      filename: 'hemolysis-classification.svg',
      title: 'Classification of Hemolytic Anemias',
      description: 'Intrinsic vs extrinsic and intravascular vs extravascular hemolysis',
    },
    {
      id: 'peripheral-smear-hemolysis',
      type: 'histology',
      filename: 'hemolytic-anemia-smears.jpg',
      title: 'Peripheral Blood Smear Findings in Hemolytic Anemia',
      description: 'Spherocytes, schistocytes, bite cells, and sickle cells',
    },
    {
      id: 'complement-pathway',
      type: 'diagram',
      filename: 'complement-pathway-hemolysis.svg',
      title: 'Complement Pathways in Hemolysis',
      description: 'Classical, alternative, and terminal pathways with therapeutic targets',
    },
  ],

  citations: [
    {
      id: 'barcellini-2021',
      type: 'article',
      title: 'Autoimmune hemolytic anemia',
      authors: ['Barcellini W', 'Fattizzo B'],
      source: 'Hematology Am Soc Hematol Educ Program',
      url: 'https://doi.org/10.1182/hematology.2021000259',
    },
    {
      id: 'hill-2022',
      type: 'article',
      title: 'Paroxysmal nocturnal hemoglobinuria',
      authors: ['Hill A', 'DeZern AE', 'Kinoshita T', 'Brodsky RA'],
      source: 'Nature Reviews Disease Primers',
      url: 'https://doi.org/10.1038/s41572-022-00361-z',
    },
    {
      id: 'williams-hemolysis',
      type: 'textbook',
      title: 'Hemolytic Anemias',
      source: 'Williams Hematology',
      chapter: '48-52',
    },
  ],

  crossReferences: [
    { targetId: 'condition-sickle-cell-disease', targetType: 'condition', relationship: 'related', label: 'Sickle Cell Disease' },
    { targetId: 'condition-ttp', targetType: 'condition', relationship: 'related', label: 'Thrombotic Thrombocytopenic Purpura' },
    { targetId: 'condition-pnh', targetType: 'condition', relationship: 'related', label: 'Paroxysmal Nocturnal Hemoglobinuria' },
    { targetId: 'system-complement', targetType: 'system', relationship: 'related', label: 'Complement System' },
  ],

  tags: {
    systems: ['hematologic', 'immune'],
    topics: ['anemia', 'hemolysis', 'autoimmune', 'complement', 'hematology'],
    keywords: ['hemolytic', 'spherocytes', 'schistocytes', 'Coombs', 'complement', 'AIHA', 'PNH', 'TTP'],
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

export default hemolyticAnemia;
