/**
 * Hemolytic Anemia - Comprehensive Educational Content
 *
 * Covers the pathophysiology, classification, diagnosis, and management
 * of hemolytic anemias including inherited and acquired forms.
 */

import { EducationalContent } from '../../../types';

export const hemolyticAnemia: EducationalContent = {
  id: 'condition-hemolytic-anemia',
  type: 'condition',
  name: 'Hemolytic Anemia',
  alternateNames: ['Hemolysis', 'Extravascular Hemolysis', 'Intravascular Hemolysis'],
  hpoId: 'HP:0001878',

  levels: {
    1: {
      level: 1,
      summary: 'Hemolytic anemia happens when red blood cells are destroyed faster than your body can replace them, causing tiredness and other symptoms.',
      explanation: `Red blood cells normally live about 120 days. In hemolytic anemia, they are destroyed much faster than normal.

**What Happens:**
- Your body breaks down red blood cells too early
- Your bone marrow cannot make new ones fast enough
- This leads to anemia (low red blood cells)

**Signs and Symptoms:**
- Tiredness and weakness
- Yellow skin or eyes (jaundice)
- Dark urine
- Fast heartbeat
- Enlarged spleen
- Shortness of breath

**Types:**
- Some types you are born with (inherited)
- Some types develop later in life (acquired)
- Your immune system may attack your own red blood cells
- Sometimes red blood cells have an abnormal shape

**Treatment:**
- Depends on the cause
- May include steroids or other medicines
- Sometimes removing the spleen helps
- Blood transfusions if severe
- Avoiding certain medicines or foods`,
      keyTerms: [
        { term: 'hemolysis', definition: 'The destruction or breakdown of red blood cells' },
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from breakdown products of red blood cells' },
        { term: 'spleen', definition: 'An organ that filters blood and removes old red blood cells' },
      ],
      analogies: [
        'Think of red blood cells like cars on a delivery route. Normally they complete their route before being replaced. In hemolytic anemia, the cars break down halfway through.',
      ],
      examples: [
        'A person takes a new medicine and suddenly develops yellow eyes and dark urine.',
        'A child born with an inherited condition has pale skin and gets tired easily.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemolytic anemia results from premature destruction of red blood cells; classified as intravascular vs. extravascular, inherited vs. acquired.',
      explanation: `Hemolytic anemia encompasses a diverse group of disorders characterized by premature red blood cell destruction.

**Classification:**
- By site: Intravascular vs. extravascular
- By mechanism: Immune vs. non-immune
- By etiology: Inherited vs. acquired

**Inherited Causes:**
- Membrane defects: Hereditary spherocytosis, elliptocytosis
- Enzyme defects: G6PD deficiency, pyruvate kinase deficiency
- Hemoglobinopathies: Sickle cell, thalassemia

**Acquired Causes:**
- Immune: Autoimmune (AIHA), drug-induced, transfusion reaction
- Non-immune: Microangiopathic (TTP, HUS), infections, liver disease

**Laboratory Features:**
- Anemia with increased reticulocyte count
- Elevated LDH
- Decreased haptoglobin
- Indirect bilirubin elevated
- Urinary hemosiderin (intravascular)

**Key Diagnostic Tests:**
- Peripheral smear: Spherocytes, schistocytes, sickle cells
- Direct antiglobulin test (Coombs): For immune causes
- Osmotic fragility: Hereditary spherocytosis
- G6PD assay (not during hemolysis)
- Flow cytometry for PNH`,
      keyTerms: [
        { term: 'reticulocyte', definition: 'Young red blood cell released from bone marrow' },
        { term: 'haptoglobin', definition: 'Protein that binds free hemoglobin; decreased in hemolysis' },
        { term: 'schistocyte', definition: 'Fragmented red blood cell seen in microangiopathic hemolysis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemolytic anemias require systematic evaluation including reticulocyte count, LDH, haptoglobin, bilirubin, and peripheral smear; management targets underlying cause.',
      explanation: `A systematic approach to hemolytic anemia integrates laboratory findings with clinical presentation.

**Pathophysiology by Type:**

*Intravascular Hemolysis:*
- Direct destruction in circulation
- Free hemoglobin release
- Hemoglobinuria, hemosiderinuria
- Causes: ABO incompatibility, PNH, mechanical valves, severe burns

*Extravascular Hemolysis:*
- Destruction by macrophages in spleen/liver
- Bilirubin elevation
- Causes: AIHA, hereditary spherocytosis, sickle cell

**Autoimmune Hemolytic Anemia (AIHA):**
- Warm AIHA (IgG, 37°C):
  - Spherocytes on smear
  - DAT positive for IgG ± C3
  - Associations: CLL, lymphoma, SLE, drugs
  - Treatment: Steroids, rituximab, splenectomy

- Cold agglutinin disease (IgM):
  - RBC agglutination on smear
  - DAT positive for C3
  - Associations: Mycoplasma, EBV, lymphoma
  - Treatment: Keep warm, rituximab, avoid steroids

**Hereditary Spherocytosis:**
- Most common inherited hemolytic anemia in Caucasians
- Spectrin, ankyrin, band 3, protein 4.2 defects
- Osmotic fragility increased
- Splenectomy curative in severe cases

**G6PD Deficiency:**
- X-linked inheritance
- Triggers: Fava beans, sulfa drugs, antimalarials, infection
- Heinz bodies, bite cells on smear
- Avoid triggers; supportive care during crisis`,
      keyTerms: [
        { term: 'DAT', definition: 'Direct antiglobulin test (direct Coombs); detects antibodies on RBCs' },
        { term: 'Heinz bodies', definition: 'Denatured hemoglobin inclusions seen in G6PD deficiency' },
        { term: 'bite cells', definition: 'RBCs with removed Heinz bodies by splenic macrophages' },
      ],
    },
    4: {
      level: 4,
      summary: 'AIHA management includes steroids for warm type, rituximab for refractory cases; hereditary hemolytic anemias require genetic counseling and targeted interventions like splenectomy.',
      explanation: `Management of hemolytic anemias requires understanding of disease-specific therapies and complications.

**Warm AIHA Treatment Algorithm:**
1. First-line: Prednisone 1-1.5 mg/kg/day
   - 70-80% respond
   - Taper over months once stable
2. Second-line:
   - Rituximab 375 mg/m² weekly x 4 (70% response)
   - Splenectomy (response in 50-60% of steroid failures)
3. Third-line:
   - Immunosuppressants (azathioprine, cyclophosphamide, mycophenolate)
   - Daratumumab (anti-CD38) emerging data

**Cold Agglutinin Disease:**
- Steroids and splenectomy generally ineffective
- Rituximab ± bendamustine
- Sutimlimab (C1s inhibitor) FDA approved
- Plasmapheresis for severe acute hemolysis

**Hereditary Spherocytosis Management:**
- Folic acid supplementation
- Splenectomy indications:
  - Severe disease (Hgb <8)
  - Significant symptomatic anemia
  - Gallstones (cholecystectomy can be combined)
- Vaccinate 2 weeks before splenectomy (pneumococcal, meningococcal, H. influenzae)

**Microangiopathic Hemolytic Anemias:**
- TTP: ADAMTS13 <10%, plasma exchange urgent
- HUS: Shiga toxin (STEC-HUS) or complement-mediated (aHUS)
- DIC: Treat underlying cause, consider blood products
- Eculizumab for aHUS (requires meningococcal vaccination)

**PNH:**
- Flow cytometry: CD55, CD59 deficiency (GPI-anchored proteins)
- Eculizumab or ravulizumab (C5 inhibitors)
- Allogeneic transplant for severe cases`,
      keyTerms: [
        { term: 'eculizumab', definition: 'C5 complement inhibitor for PNH and aHUS' },
        { term: 'ADAMTS13', definition: 'Von Willebrand factor cleaving protease; deficiency causes TTP' },
        { term: 'GPI anchor', definition: 'Glycosylphosphatidylinositol; defective in PNH' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert hemolytic anemia management integrates molecular diagnostics, risk-adapted therapy, and emerging targeted agents like complement inhibitors; genetic counseling essential for inherited forms.',
      explanation: `Advanced management of hemolytic anemias incorporates molecular pathogenesis and targeted therapeutics.

**Molecular Basis of Inherited Hemolysis:**
- Hereditary spherocytosis: SPTA1, SPTB, ANK1, SLC4A1, EPB42 mutations
- Hereditary elliptocytosis: SPTA1, SPTB mutations (spectrin variants)
- G6PD: >200 variants; Class II (severe) vs Class III (moderate)
- Pyruvate kinase: PKLR gene; only RBC enzyme deficiency with splenectomy benefit

**Advanced AIHA Considerations:**
- Evan's syndrome: AIHA + ITP (or autoimmune neutropenia)
- Secondary causes: CLL (treat underlying disease), SLE, lymphoma
- Refractory disease:
  - Daratumumab: Case reports/series show efficacy
  - Bortezomib: For antibody-mediated refractory cases
  - CAR-T: Emerging therapy for refractory autoimmune cytopenias

**Complement-Mediated Hemolysis:**
- Classical pathway: Cold agglutinins, immune complexes
- Alternative pathway: PNH, aHUS
- Terminal complement: C5 inhibitors (eculizumab, ravulizumab)
- Upstream targets: Factor D (danicopan), C3 (pegcetacoplan)

**Transfusion Challenges:**
- AIHA: May have pan-agglutinin; "least incompatible" blood
- Sickle cell: Alloimmunization risk; extended phenotype matching
- PNH: Can transfuse safely; ABO-compatible RBCs

**Future Directions:**
- Gene therapy for inherited hemolytic anemias
- Novel complement inhibitors
- B-cell directed therapies for autoimmune hemolysis
- Mitapivat for PK deficiency`,
      keyTerms: [
        { term: 'Evan\'s syndrome', definition: 'Autoimmune destruction of ≥2 cell lines (AIHA + ITP most common)' },
        { term: 'pegcetacoplan', definition: 'C3 inhibitor approved for PNH' },
        { term: 'mitapivat', definition: 'PK activator for pyruvate kinase deficiency' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['anemia', 'hemolysis', 'autoimmune'],
    keywords: ['hemolytic anemia', 'AIHA', 'hemolysis', 'spherocytes'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default hemolyticAnemia;
