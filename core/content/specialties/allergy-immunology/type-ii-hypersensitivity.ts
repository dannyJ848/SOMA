import { EducationalContent } from '../../types';

export const typeIIHypersensitivityContent: EducationalContent = {
  id: 'allergy-immunology-type-ii-hypersensitivity',
  type: 'concept',
  name: 'Type II Hypersensitivity (Antibody-Mediated Cytotoxic)',
  alternateNames: ['Cytotoxic Hypersensitivity', 'Antibody-Mediated Hypersensitivity', 'IgG/IgM-Mediated Cytotoxicity'],

  levels: {
    1: {
      level: 1,
      summary: 'Type II hypersensitivity happens when antibodies attack your own cells or tissues, mistaking them for enemies.',
      explanation: `Type II hypersensitivity is when your immune system makes antibodies that attack your own body's cells. Unlike Type I allergies (like hay fever), this isn't about harmless things like pollen - it's about your immune system getting confused and attacking your own tissues.

**How It Works:**

1. **Antibodies Find Targets**
   - Your immune system makes antibodies (usually IgG or IgM type)
   - These antibodies stick to cells in your body
   - Sometimes they attack foreign cells (like a wrong blood transfusion)
   - Sometimes they mistakenly attack your own healthy cells

2. **Cells Get Destroyed**
   - Once antibodies attach to cells, the cells are marked for destruction
   - The complement system (helper proteins) punches holes in the cells
   - Special immune cells come and eat the marked cells
   - This causes tissue damage and disease

**Common Examples:**

- **Blood Transfusion Reactions**: Getting the wrong blood type causes antibodies to attack foreign red blood cells
- **Hemolytic Disease of Newborn**: Mom's antibodies attack baby's red blood cells
- **Autoimmune Hemolytic Anemia**: Your antibodies destroy your own red blood cells
- **Graves' Disease**: Antibodies over-stimulate your thyroid (a special case)
- **Myasthenia Gravis**: Antibodies block muscle signals, causing weakness

**Signs of Type II Reactions:**
- Destruction of blood cells (anemia, bleeding, infections)
- Organ damage
- Weakness or fatigue
- Symptoms depend on which cells are attacked`,
      keyTerms: [
        { term: 'antibody', definition: 'A protein made by your immune system that sticks to specific targets' },
        { term: 'complement', definition: 'Helper proteins in blood that help destroy cells marked by antibodies' },
        { term: 'cytotoxic', definition: 'Cell-killing; causes cells to die' },
        { term: 'autoimmune', definition: 'When your immune system attacks your own body' },
      ],
      analogies: [
        'Imagine antibodies as "wanted posters" that get stuck on cells. Once a cell has a wanted poster, other immune cells come to arrest (destroy) it.',
        'Type II is like friendly fire in a war - your own soldiers (immune system) accidentally shooting your own troops (healthy cells).',
      ],
      examples: [
        'If you get the wrong blood type during a transfusion, antibodies attack the new blood cells, causing a dangerous reaction.',
        'In Graves\' disease, antibodies act like a stuck gas pedal on your thyroid, making it produce too much hormone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type II hypersensitivity involves IgG or IgM antibodies binding to cell surface or extracellular matrix antigens, leading to cell destruction through complement activation, opsonization, or antibody-dependent cellular cytotoxicity.',
      explanation: `Type II hypersensitivity (antibody-mediated cytotoxic hypersensitivity) occurs when IgG or IgM antibodies bind to antigens on cell surfaces or in the extracellular matrix, triggering cell or tissue damage.

**Mechanisms of Damage:**

**1. Complement-Mediated Lysis**
- Antibody-antigen complexes activate classical complement pathway
- C1 complex binds to Fc regions of antibodies
- Complement cascade proceeds through C3 → C5 → C9
- Membrane Attack Complex (MAC) forms pores in target cells
- Result: Direct cell lysis (osmotic death)

**2. Opsonization and Phagocytosis**
- IgG antibodies coat target cells (opsonization)
- C3b deposition further enhances opsonization
- Phagocytes (macrophages, neutrophils) recognize:
  - Fc receptors (FcγRI, FcγRIII)
  - Complement receptors (CR1, CR3)
- Target cells are engulfed and destroyed

**3. Antibody-Dependent Cellular Cytotoxicity (ADCC)**
- NK cells and other cells recognize antibody-coated targets
- FcγRIIIA (CD16) on NK cells binds IgG Fc region
- NK cells release perforin and granzymes
- Target cells die by apoptosis

**4. Antibody-Mediated Cellular Dysfunction**
- Antibodies may not kill cells but alter their function
- Stimulating antibodies: Activate receptors (Graves')
- Blocking antibodies: Inhibit receptor function (myasthenia)
- Anti-receptor antibodies: Accelerate receptor internalization

**Clinical Examples:**

| Disease | Target Antigen | Mechanism | Result |
|---------|---------------|-----------|--------|
| Transfusion reaction | ABO blood groups | Complement lysis | Hemolysis |
| Hemolytic disease of newborn | Rh antigens | Opsonization | Fetal anemia |
| Autoimmune hemolytic anemia | RBC antigens | Opsonization/complement | Anemia |
| Immune thrombocytopenia | Platelet antigens | Opsonization | Bleeding |
| Goodpasture syndrome | Type IV collagen | Complement | Kidney/lung damage |
| Graves' disease | TSH receptor | Stimulation | Hyperthyroidism |
| Myasthenia gravis | Acetylcholine receptor | Blocking/degradation | Muscle weakness |

**Laboratory Findings:**
- Positive direct Coombs test (antibody on cells)
- Evidence of hemolysis (elevated LDH, bilirubin, low haptoglobin)
- Decreased cell counts (cytopenias)
- Detection of specific autoantibodies`,
      keyTerms: [
        { term: 'opsonization', definition: 'Coating of pathogens or cells with antibodies or complement to enhance phagocytosis', pronunciation: 'OP-son-ih-ZAY-shun' },
        { term: 'ADCC', definition: 'Antibody-dependent cellular cytotoxicity; killing of antibody-coated cells by NK cells', pronunciation: 'A-D-C-C' },
        { term: 'membrane attack complex', definition: 'MAC; complement proteins C5b-C9 that form pores in target cell membranes', pronunciation: 'MAC' },
        { term: 'Coombs test', definition: 'Laboratory test that detects antibodies attached to red blood cells', pronunciation: 'KOOMZ' },
        { term: 'hemolysis', definition: 'Destruction of red blood cells', pronunciation: 'heh-MOL-ih-sis' },
      ],
      analogies: [
        'Opsonization is like putting a "kick me" sign on cells so phagocytes know to target them.',
        'The MAC is like a molecular drill that punches holes in cell membranes, causing them to leak and die.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type II hypersensitivity is mediated by IgG/IgM antibodies targeting cell surface or matrix antigens, with pathology resulting from complement activation (classical pathway), Fc receptor-mediated phagocytosis, ADCC, or functional receptor modulation.',
      explanation: `Type II hypersensitivity encompasses antibody-mediated damage to cells and tissues through well-defined immunologic mechanisms that have important diagnostic and therapeutic implications.

**Detailed Mechanisms:**

**Classical Complement Pathway Activation:**

*Initiation:*
- IgM (pentamer) or IgG1/IgG3 bind cell surface antigen
- C1q binds Fc regions (requires multiple Fc for IgG)
- C1r and C1s activation
- C1s cleaves C4 → C4a + C4b
- C4b binds cell surface covalently
- C2 cleavage → C4b2a (C3 convertase)

*Amplification:*
- C3 convertase cleaves C3 → C3a + C3b
- C3b deposition (opsonization)
- C4b2a3b = C5 convertase

*Terminal Pathway:*
- C5 cleavage → C5a (anaphylatoxin) + C5b
- Sequential binding: C5b + C6 + C7 + C8
- Multiple C9 molecules polymerize
- MAC formation → osmotic cell lysis

**Fc Receptor-Mediated Mechanisms:**

*Opsonization and Phagocytosis:*
- IgG-coated cells bind FcγRI (CD64): High affinity, monomeric IgG
- FcγRIIA (CD32): Lower affinity, immune complexes
- FcγRIIIA (CD16): NK cells and macrophages
- Complement receptors: CR1 (CD35) for C3b, CR3 (CD11b/CD18) for iC3b
- Phagocytosis with oxidative burst and phagolysosomal killing

*ADCC:*
- NK cells express FcγRIIIA (CD16)
- Binding of IgG-coated targets
- Perforin-granzyme release
- Target cell apoptosis
- Also mediated by macrophages, neutrophils, eosinophils

**Anti-Receptor Antibodies:**

*Stimulating (Agonist):*
- Graves' disease: Anti-TSH receptor antibodies
- Mimic TSH action → cAMP elevation
- Thyroid hormone overproduction
- Not subject to feedback inhibition

*Blocking (Antagonist):*
- Myasthenia gravis: Anti-AChR antibodies
- Competitive inhibition at neuromuscular junction
- Accelerated receptor endocytosis
- Complement-mediated junction damage

*Neutral/Modulating:*
- Receptor internalization without activation
- Decreased surface receptor expression

**Specific Disease Mechanisms:**

**Goodpasture Syndrome:**
- Target: NC1 domain of α3 chain, type IV collagen
- Found in glomerular and alveolar basement membranes
- Linear IgG deposition on immunofluorescence
- Complement activation → neutrophil recruitment
- Rapidly progressive glomerulonephritis + pulmonary hemorrhage

**Autoimmune Hemolytic Anemia (AIHA):**

*Warm AIHA:*
- IgG antibodies (usually IgG1, IgG3)
- React at 37°C
- Extravascular hemolysis (splenic sequestration)
- Spherocytes on blood smear
- Associated: CLL, SLE, drugs

*Cold AIHA (Cold Agglutinin Disease):*
- IgM antibodies
- React best at 4°C, dissociate at 37°C
- Intravascular hemolysis (complement)
- Acrocyanosis in cold exposure
- Associated: Mycoplasma, EBV, lymphoma

**Drug-Induced Immune Cytopenias:**

*Hapten Mechanism:*
- Drug binds covalently to cell surface
- Antibodies recognize drug-cell complex
- Example: Penicillin-induced hemolytic anemia

*Immune Complex (Innocent Bystander):*
- Drug-antibody complexes adsorb to cells
- Complement activation damages "innocent" cells
- Example: Quinine-induced thrombocytopenia

*Autoantibody Induction:*
- Drug induces true autoantibodies
- Persist after drug discontinuation
- Example: Methyldopa-induced AIHA`,
      keyTerms: [
        { term: 'C3 convertase', definition: 'Enzyme complex (C4b2a in classical pathway) that cleaves C3, the central component of complement' },
        { term: 'anaphylatoxin', definition: 'Complement fragments (C3a, C5a) that cause inflammation, mast cell degranulation, and chemotaxis' },
        { term: 'warm AIHA', definition: 'Autoimmune hemolytic anemia with IgG antibodies active at body temperature, causing extravascular hemolysis' },
        { term: 'cold agglutinin disease', definition: 'IgM-mediated hemolytic anemia with antibodies active at low temperatures, causing intravascular hemolysis' },
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to a carrier protein or cell' },
        { term: 'linear immunofluorescence', definition: 'Pattern of antibody deposition along basement membrane, characteristic of anti-GBM disease' },
      ],
      clinicalNotes: 'Direct Coombs test (DAT) detects antibody/complement on RBCs; indirect Coombs detects free antibodies in serum. Warm AIHA: DAT positive for IgG; treat with steroids, rituximab. Cold AIHA: DAT positive for C3; avoid cold, rituximab. Drug-induced: remove offending agent. Anti-GBM: plasmapheresis + immunosuppression.',
    },
    4: {
      level: 4,
      summary: 'Type II hypersensitivity operates through IgG/IgM binding to cell-associated antigens with subsequent effector mechanisms including classical complement cascade activation, FcγR-mediated phagocytosis and ADCC, and pathogenic anti-receptor antibody effects, each with distinct molecular pathways and clinical manifestations.',
      explanation: `Type II hypersensitivity demonstrates the diversity of antibody-mediated pathology, from direct cytotoxicity to receptor dysfunction, with mechanistic understanding guiding targeted therapy.

**Molecular Determinants of Pathogenicity:**

**IgG Subclass Differences:**

| Subclass | Complement Activation | FcγR Binding | Clinical Role |
|----------|----------------------|--------------|---------------|
| IgG1 | +++ | High (all FcγR) | Most cytotoxic |
| IgG2 | + | FcγRIIa only | Anti-polysaccharide |
| IgG3 | ++++ | High (all FcγR) | Highly cytotoxic, short half-life |
| IgG4 | - | FcγRI only | Fab arm exchange, blocking |

*Glycosylation Effects:*
- Fc glycosylation modulates effector function
- Fucosylation decreases FcγRIIIa binding (reduced ADCC)
- Afucosylated antibodies: Enhanced ADCC (therapeutic application)
- Sialylation: Anti-inflammatory effects

**Complement Regulation and Deficiency:**

*Regulatory Proteins:*
- C1 inhibitor: Blocks C1r/C1s activation
- C4b-binding protein: Cofactor for C4b degradation
- Factor H: Cofactor for C3b degradation
- CD55 (DAF): Accelerates C3/C5 convertase decay
- CD59 (protectin): Blocks MAC formation

*Paroxysmal Nocturnal Hemoglobinuria (PNH):*
- PIGA mutation → absent GPI anchor
- Loss of CD55 and CD59
- Unregulated complement activation on RBCs
- Intravascular hemolysis, thrombosis
- Treatment: Eculizumab (anti-C5)

**FcγR Polymorphisms and Disease:**

*FcγRIIa (CD32):*
- H131 vs R131 polymorphism
- H131: Better IgG2 binding
- R131: Associated with SLE nephritis

*FcγRIIIa (CD16):*
- V158 vs F158 polymorphism
- V158: Higher IgG1/IgG3 affinity
- Affects ADCC efficacy (relevant to therapeutic antibodies)

**Advanced Disease Mechanisms:**

**Myasthenia Gravis - Molecular Pathology:**

*AChR Antibody Effects:*
1. Complement-mediated damage to postsynaptic membrane
2. Accelerated AChR endocytosis (antigenic modulation)
3. Functional block of ACh binding (minority)

*AChR Structure:*
- Pentameric: 2α, 1β, 1δ, 1ε (adult)
- Main immunogenic region (MIR) on α subunit
- 85% patients have anti-MIR antibodies

*MuSK Antibodies:*
- Muscle-specific kinase
- IgG4 predominant (non-complement fixing)
- Pathogenesis: Blocks agrin-LRP4-MuSK signaling
- Different clinical phenotype (bulbar predominant)

**Pemphigus Vulgaris:**

*Target Antigens:*
- Desmoglein 3 (mucosal dominant)
- Desmoglein 1 (mucocutaneous)

*Pathogenesis:*
- Direct interference with desmosomal adhesion
- Complement-independent (IgG4 can cause disease)
- Acantholysis: Loss of keratinocyte adhesion
- Suprabasilar blister formation

*Desmoglein Compensation Theory:*
- DSG1 in superficial epidermis, DSG3 in deep
- Mucosa: Only DSG3 (anti-DSG3 alone causes mucosal PV)
- Skin: Both present (need anti-DSG1 or high titer anti-DSG3)

**Thrombotic Thrombocytopenic Purpura (TTP):**

*Pathophysiology:*
- Acquired: Anti-ADAMTS13 antibodies
- ADAMTS13 normally cleaves ultra-large VWF multimers
- Inhibition → accumulation of ultra-large VWF
- Platelet aggregation and microthrombi

*Pentad (classic but rare):*
- Thrombocytopenia
- Microangiopathic hemolytic anemia
- Neurologic symptoms
- Renal dysfunction
- Fever

**Therapeutic Applications:**

**Monoclonal Antibody Engineering:**
- Complement-dependent cytotoxicity (CDC): Optimized for IgG1
- ADCC: Afucosylated antibodies
- Bispecific: Redirect T cells (not FcγR-mediated)
- Antibody-drug conjugates: Targeted payload delivery

**Rituximab Mechanisms:**
- Anti-CD20 IgG1
- CDC: C1q binding, MAC formation
- ADCC: NK cell and macrophage engagement
- Direct apoptosis: Controversial role
- Effective in autoimmune cytopenias, pemphigus, MG`,
      keyTerms: [
        { term: 'ADAMTS13', definition: 'A disintegrin and metalloproteinase with thrombospondin motifs 13; cleaves VWF multimers', pronunciation: 'a-DAMS-13' },
        { term: 'PNH', definition: 'Paroxysmal nocturnal hemoglobinuria; acquired loss of GPI-anchored complement regulators' },
        { term: 'MuSK', definition: 'Muscle-specific kinase; target of IgG4 antibodies in a subset of myasthenia gravis' },
        { term: 'desmoglein', definition: 'Cadherin adhesion proteins in desmosomes; targets in pemphigus' },
        { term: 'afucosylated', definition: 'Antibodies lacking core fucose glycosylation, with enhanced ADCC activity' },
        { term: 'antigenic modulation', definition: 'Accelerated receptor internalization induced by antibody cross-linking' },
      ],
      clinicalNotes: 'FcγR polymorphisms affect rituximab response. MuSK-MG is seronegative for AChR but responds poorly to cholinesterase inhibitors. Pemphigus can be triggered by drugs (penicillamine, ACE inhibitors). TTP: ADAMTS13 activity <10% diagnostic; treat with plasma exchange + rituximab. PNH: Eculizumab prevents hemolysis but not thrombosis; monitor for Neisseria (vaccination required).',
    },
    5: {
      level: 5,
      summary: 'Type II hypersensitivity encompasses a spectrum of antibody-mediated pathologies operating through complement activation, FcγR engagement, and receptor modulation, with molecular characteristics of the antibody (subclass, glycosylation), target antigen, and host effector mechanisms determining disease phenotype and response to targeted therapeutics.',
      explanation: `Comprehensive understanding of Type II hypersensitivity integrates molecular immunology with clinical medicine, enabling precision diagnosis and rational therapeutic selection.

**Systems-Level Understanding:**

**Immune Complex vs Cell-Bound Antibody:**

*Distinguishing Features:*
- Type II: Antibody binds cell surface/matrix in situ
- Type III: Preformed immune complexes deposit in tissues
- Overlap exists (some drug reactions have both mechanisms)

*Diagnostic Distinction:*
- Type II: Linear IF pattern (anti-GBM)
- Type III: Granular IF pattern (lupus nephritis)
- Type II: Autoantibodies to specific cellular antigens detectable

**Epitope Spreading and Disease Progression:**

*Concept:*
- Initial immune response to primary epitope
- Tissue damage releases additional antigens
- Immune response expands to secondary epitopes
- Disease becomes independent of initial trigger

*Examples:*
- Pemphigus: Initial anti-DSG3 → later anti-DSG1
- Myasthenia: Anti-AChR → anti-titin, anti-ryanodine receptor
- Implication: Early treatment may prevent spread

**Neonatal and Transplacental Disease:**

*IgG Crosses Placenta (FcRn-mediated):*
- Maternal antibodies protect neonate
- Pathogenic antibodies can cause disease

*Specific Conditions:*
- Neonatal Graves': Maternal TSHR Ab → neonatal thyrotoxicosis
- Neonatal MG: Maternal AChR Ab → transient weakness
- Neonatal lupus: Anti-Ro/La → heart block, rash
- HDFN: Anti-D, anti-K, anti-c → fetal anemia

**Advanced Diagnostics:**

**Autoantibody Detection Methods:**

*Indirect Immunofluorescence:*
- Tissue substrates (monkey esophagus for pemphigus)
- Cell lines (HEp-2 for ANA)
- Patterns correlate with specificities

*ELISA/Multiplex:*
- Quantitative antigen-specific detection
- High throughput
- Component-resolved (specific epitopes)

*Functional Assays:*
- TSHR stimulating/blocking antibodies (bioassay)
- ADAMTS13 activity (functional assay)
- Mixing studies (inhibitor vs deficiency)

**Flow Cytometry:**
- DAT equivalent on flow (more sensitive)
- Detection of antibodies to specific blood group antigens
- Drug-dependent antibodies

**Cell-Based Assays:**
- Transfected cells expressing target antigen
- Improved specificity over tissue-based IF
- Essential for MuSK, LGI1, CASPR2 detection

**Treatment Paradigms:**

**Mechanism-Specific Approaches:**

*Reducing Autoantibody Production:*
- Rituximab: B cell depletion
- Bortezomib: Plasma cell targeting
- Cyclophosphamide: Broad immunosuppression
- Mycophenolate: Inhibits lymphocyte proliferation

*Removing Circulating Antibodies:*
- Plasmapheresis: Rapid reduction in IgG
- Immunoadsorption: Specific antibody removal
- FcRn inhibitors (efgartigimod): Accelerate IgG catabolism

*Blocking Effector Mechanisms:*
- Eculizumab: Terminal complement blockade
- IVIg: FcγR blockade, anti-idiotype, immunomodulation
- Complement C1 inhibitors: Classical pathway blockade

*Receptor-Specific Approaches:*
- Anti-thyroid drugs (Graves': block hormone synthesis)
- Cholinesterase inhibitors (MG: enhance ACh transmission)

**Emerging Therapies:**

*FcRn Inhibitors:*
- Efgartigimod, rozanolixizumab
- Accelerate IgG catabolism
- Reduce pathogenic IgG by 70-80%
- Approved for generalized MG

*Complement Inhibitors:*
- Ravulizumab: Long-acting anti-C5
- Pegcetacoplan: C3 inhibitor
- Sutimlimab: Anti-C1s (cold agglutinin disease)
- Iptacopan: Factor B inhibitor

*CAR-T for Autoimmunity:*
- Anti-CD19 CAR-T: Deep B cell depletion
- Investigational in refractory autoimmune disease
- "Reset" of humoral immunity

**Case-Based Integration:**

**Case: 45-year-old with weakness and ptosis**

*Workup:*
1. AChR antibodies (85% sensitivity)
2. If negative: Anti-MuSK, anti-LRP4
3. Repetitive nerve stimulation (decrement)
4. Single-fiber EMG (jitter)
5. CT chest for thymoma

*Treatment Algorithm:*
- Pyridostigmine for symptom control
- Thymectomy if thymoma or generalized AChR+
- Prednisone for moderate disease
- Steroid-sparing: Azathioprine, mycophenolate
- Refractory: Rituximab, eculizumab, efgartigimod
- Crisis: IVIg or plasmapheresis

*MuSK-MG Differences:*
- Bulbar predominant, facial weakness
- Poor response to pyridostigmine
- Thymectomy less beneficial
- Rituximab often effective`,
      keyTerms: [
        { term: 'FcRn', definition: 'Neonatal Fc receptor; protects IgG from catabolism and mediates placental transfer' },
        { term: 'efgartigimod', definition: 'FcRn inhibitor that accelerates IgG degradation, reducing pathogenic autoantibodies' },
        { term: 'epitope spreading', definition: 'Expansion of immune response to additional epitopes on the same or different antigens over time' },
        { term: 'immunoadsorption', definition: 'Extracorporeal technique for selective removal of antibodies using antigen-coated columns' },
        { term: 'sutimlimab', definition: 'Anti-C1s antibody blocking classical complement pathway, approved for cold agglutinin disease' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Type II = antibody against cell surface/matrix antigens
- Mechanisms: Complement (lysis), opsonization/phagocytosis, ADCC, receptor dysfunction
- DAT: IgG = warm AIHA, C3 = cold AIHA
- Anti-GBM: Linear IF on kidney biopsy
- Graves': TSI (thyroid stimulating immunoglobulin) = stimulating Ab
- MG: AChR Ab 85%, MuSK 5-8%, seronegative 10%
- TTP: ADAMTS13 <10% activity is diagnostic
- PNH: GPI-anchor loss → CD55/CD59 absence → hemolysis
- IVIg mechanism in ITP: FcγRIIB upregulation, FcγR blockade
- FcRn inhibitors are new class for antibody-mediated diseases`,
    },
  },

  media: [
    {
      id: 'type-ii-mechanisms-diagram',
      type: 'diagram',
      filename: 'type-ii-hypersensitivity-mechanisms.svg',
      title: 'Type II Hypersensitivity Mechanisms',
      description: 'Diagram showing complement activation, opsonization, ADCC, and receptor dysfunction',
    },
  ],
  citations: [
    {
      id: 'abbas-type-ii',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: '19',
    },
    {
      id: 'nimmerjahn-fcgamma',
      type: 'article',
      title: 'Fcγ receptors as regulators of immune responses',
      authors: ['Nimmerjahn F', 'Ravetch JV'],
      source: 'Nature Reviews Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-autoimmune-principles', targetType: 'concept', relationship: 'see-also', label: 'Autoimmune Principles' },
    { targetId: 'allergy-immunology-drug-allergies', targetType: 'condition', relationship: 'see-also', label: 'Drug Allergies' },
  ],
  tags: {
    systems: ['immune', 'hematologic'],
    topics: ['immunology', 'hypersensitivity', 'autoimmunity'],
    keywords: ['type II', 'cytotoxic', 'IgG', 'complement', 'ADCC', 'autoantibodies'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default typeIIHypersensitivityContent;
