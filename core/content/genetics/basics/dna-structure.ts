/**
 * DNA Structure - Comprehensive Educational Content
 *
 * Covers the molecular structure of DNA, the double helix,
 * nucleotide composition, and the relationship between structure and function.
 */

import { EducationalContent } from '../../types';

export const dnaStructureContent: EducationalContent = {
  id: 'concept-dna-structure',
  type: 'concept',
  name: 'DNA Structure',
  alternateNames: ['Deoxyribonucleic Acid', 'Double Helix', 'Genetic Material'],

  levels: {
    1: {
      level: 1,
      summary: 'DNA is like an instruction book inside every cell of your body that tells your body how to grow and work.',
      explanation: `DNA is the instruction manual for your body. It's found inside almost every cell in your body, and it contains all the information needed to make you who you are - from your eye color to how tall you'll grow.

Think of DNA like a very long twisted ladder. The sides of the ladder are made of sugar and a chemical called phosphate. The rungs of the ladder are made of four special chemicals called bases, which we call by their first letters: A, T, G, and C.

These four letters are like an alphabet. Just like you can write any word using the 26 letters of the alphabet, your body can write any instruction using these 4 letters. The order of these letters spells out the instructions for everything your body needs to do.

DNA is incredibly thin - about 100,000 DNA molecules could fit across your fingernail! But if you stretched out all the DNA from just one of your cells, it would be about 6 feet long. That's taller than most adults!`,
      keyTerms: [
        { term: 'DNA', definition: 'The instruction book found in your cells that tells your body how to grow and work' },
        { term: 'cell', definition: 'The tiny building blocks that make up your body' },
        { term: 'base', definition: 'The chemical letters (A, T, G, C) that make up the DNA code' },
        { term: 'gene', definition: 'A section of DNA that has instructions for one thing, like eye color' },
      ],
      analogies: [
        'DNA is like a recipe book - it has all the instructions for making everything in your body.',
        'The bases A, T, G, and C are like letters in an alphabet that spell out instructions.',
        'DNA is like a twisted ladder, with the bases forming the rungs.',
      ],
      examples: [
        'Your DNA contains instructions for your eye color, hair color, and how tall you might grow.',
        'Every person has unique DNA, except for identical twins who share the same DNA.',
      ],
    },
    2: {
      level: 2,
      summary: 'DNA is a double-stranded molecule made of nucleotides that stores genetic information through a specific sequence of four bases: adenine (A), thymine (T), guanine (G), and cytosine (C).',
      explanation: `DNA (deoxyribonucleic acid) is the molecule that carries genetic information in all living things. It has a distinctive double helix shape, discovered by James Watson and Francis Crick in 1953, with important contributions from Rosalind Franklin.

**Structure of DNA:**

The DNA molecule consists of two strands that wind around each other like a twisted ladder:

1. **Sugar-Phosphate Backbone**: The sides of the ladder are made of alternating sugar (deoxyribose) and phosphate groups.

2. **Nitrogenous Bases**: The rungs of the ladder are made of paired bases:
   - Adenine (A) always pairs with Thymine (T)
   - Guanine (G) always pairs with Cytosine (C)

   This specific pairing is called "complementary base pairing."

3. **Hydrogen Bonds**: The bases are held together by hydrogen bonds - A-T pairs have 2 hydrogen bonds, while G-C pairs have 3.

**Key Features:**
- DNA strands run in opposite directions (antiparallel)
- The sequence of bases encodes genetic information
- One complete turn of the helix spans about 10 base pairs
- Human DNA contains about 3 billion base pairs

**DNA Organization:**
In cells, DNA is organized with proteins called histones into structures called chromosomes. Humans have 46 chromosomes (23 pairs) in most cells.`,
      keyTerms: [
        { term: 'double helix', definition: 'The twisted ladder shape of DNA formed by two intertwined strands', pronunciation: 'HEE-liks' },
        { term: 'nucleotide', definition: 'The building block of DNA, consisting of a sugar, phosphate, and base', pronunciation: 'NOO-klee-oh-tide' },
        { term: 'complementary base pairing', definition: 'The rule that A always pairs with T, and G always pairs with C' },
        { term: 'chromosome', definition: 'A tightly packaged structure containing DNA and proteins', pronunciation: 'KROH-moh-sohm' },
        { term: 'histone', definition: 'Proteins that help package and organize DNA in the nucleus', pronunciation: 'HIS-tone' },
      ],
      analogies: [
        'The two DNA strands are like a zipper, where each tooth only fits with one specific tooth on the other side.',
        'DNA wrapping around histones is like thread wrapping around spools.',
      ],
    },
    3: {
      level: 3,
      summary: 'DNA is a right-handed double helix polymer of nucleotides with antiparallel strands connected by hydrogen bonds between complementary bases, organized into B-form structure under physiological conditions.',
      explanation: `## Molecular Structure of DNA

### Nucleotide Components

Each nucleotide consists of three parts:
1. **Pentose Sugar**: 2'-deoxyribose (distinguishes DNA from RNA)
2. **Phosphate Group**: Links nucleotides via phosphodiester bonds
3. **Nitrogenous Base**: Either a purine (A, G) or pyrimidine (T, C)

### Base Chemistry

**Purines** (two-ring structures):
- Adenine (A): Contains an amino group at C6
- Guanine (G): Contains a carbonyl at C6 and amino at C2

**Pyrimidines** (single-ring structures):
- Thymine (T): Contains methyl group at C5, carbonyl groups at C2 and C4
- Cytosine (C): Contains amino group at C4, carbonyl at C2

### Double Helix Parameters (B-DNA)

| Parameter | Value |
|-----------|-------|
| Helical sense | Right-handed |
| Base pairs per turn | ~10.5 |
| Rise per base pair | 3.4 Å |
| Helix diameter | 20 Å |
| Major groove width | 22 Å |
| Minor groove width | 12 Å |

### Strand Directionality

DNA strands have polarity defined by the 5' and 3' carbons of the deoxyribose:
- **5' end**: Terminal phosphate group
- **3' end**: Terminal hydroxyl group
- Strands run **antiparallel** (5'→3' opposite to 3'→5')
- New nucleotides are always added to the 3' end during replication

### DNA Conformations

- **B-DNA**: Most common form under physiological conditions
- **A-DNA**: Dehydrated form, wider and shorter
- **Z-DNA**: Left-handed helix, found in some GC-rich regions

### Structural Stability

Factors affecting DNA stability:
1. **Hydrogen bonds**: 2 between A-T, 3 between G-C (GC-rich regions more stable)
2. **Base stacking**: Hydrophobic and van der Waals interactions between adjacent bases
3. **Ionic environment**: Cations (Mg²⁺, K⁺) neutralize phosphate negative charges
4. **Temperature**: Denaturation (melting) separates strands; Tm depends on GC content`,
      keyTerms: [
        { term: 'phosphodiester bond', definition: 'Covalent bond linking the 5\' phosphate of one nucleotide to the 3\' hydroxyl of the next', pronunciation: 'fos-foh-dy-ES-ter' },
        { term: 'antiparallel', definition: 'Orientation of DNA strands running in opposite 5\' to 3\' directions' },
        { term: 'major groove', definition: 'The wider of two grooves in the DNA helix; important for protein-DNA recognition' },
        { term: 'minor groove', definition: 'The narrower groove in the DNA helix' },
        { term: 'denaturation', definition: 'Separation of double-stranded DNA into single strands, typically by heat', pronunciation: 'dee-nay-chur-AY-shun' },
        { term: 'melting temperature (Tm)', definition: 'Temperature at which 50% of DNA molecules are denatured' },
      ],
      clinicalNotes: 'Understanding DNA structure is fundamental for molecular diagnostics. PCR relies on DNA denaturation and renaturation. GC content affects primer design and sequencing. Major groove recognition is exploited by many transcription factors and DNA-binding drugs.',
    },
    4: {
      level: 4,
      summary: 'DNA structure encompasses primary sequence, secondary helical conformation, tertiary chromosomal organization, and dynamic transitions essential for replication, transcription, and repair processes.',
      explanation: `## Advanced DNA Structural Biology

### Primary Structure

The 5'→3' phosphodiester backbone creates:
- Negative charge density (~2 charges per base pair)
- Backbone flexibility with torsion angles (α through ζ)
- Sequence-dependent local structure variations

### Secondary Structure Polymorphism

**B-DNA Features:**
- C2'-endo sugar pucker (southern conformation)
- Base pairs nearly perpendicular to helix axis
- Wide, shallow major groove accessible to proteins
- Sequence-dependent variations: A-tracts cause bending

**A-DNA:**
- C3'-endo sugar pucker
- Bases tilted ~20° from perpendicular
- Deep, narrow major groove
- Found in DNA-RNA hybrids and during transcription

**Z-DNA:**
- Left-handed helix
- Alternating purine-pyrimidine sequences (especially GC)
- May form behind transcribing RNA polymerase
- Potential role in gene regulation and recombination

### Supercoiling and Topology

**Linking Number (Lk)** = Twist (Tw) + Writhe (Wr)

- **Twist**: Number of helical turns
- **Writhe**: Coiling of the helix axis in 3D space
- **Supercoiling**: ΔLk = Lk - Lk₀ (relaxed)
  - Negative supercoiling: Underwound, favors strand separation
  - Positive supercoiling: Overwound, inhibits strand separation

**Topoisomerases:**
- Type I: Cut one strand, change Lk by ±1
- Type II: Cut both strands, change Lk by ±2 (requires ATP)

### Chromatin Organization Hierarchy

1. **Nucleosome**: 147 bp wrapped ~1.7 times around histone octamer (H2A, H2B, H3, H4)
2. **Chromatosome**: Nucleosome + linker histone (H1)
3. **30 nm fiber**: Folded nucleosome array (structure debated)
4. **Chromatin loops**: 300-700 nm domains
5. **Chromosome**: Highest level of compaction (~10,000-fold)

### DNA-Protein Interactions

**Recognition Mechanisms:**
- Major groove: Most specific; α-helices and β-sheets read base sequence
- Minor groove: Less specific; AT-rich regions recognized by certain drugs/proteins
- Backbone contacts: Phosphate interactions; less sequence-specific

**Key Motifs:**
- Helix-turn-helix
- Zinc finger
- Leucine zipper
- TATA-binding protein (minor groove)

### DNA Damage and Structure

| Damage Type | Structural Effect | Recognition |
|-------------|-------------------|-------------|
| Depurination | Abasic site | BER pathway |
| Deamination | G:U or A:hypoxanthine mismatch | BER pathway |
| Oxidation | 8-oxoG causes G:A mismatch | BER pathway |
| Pyrimidine dimer | Helix distortion | NER pathway |
| DSB | Strand discontinuity | NHEJ, HR |`,
      keyTerms: [
        { term: 'supercoiling', definition: 'Additional coiling of the DNA helix axis, creating overwound (positive) or underwound (negative) tension' },
        { term: 'topoisomerase', definition: 'Enzyme that changes DNA topology by cutting and rejoining strands', pronunciation: 'toh-poh-eye-SOM-er-ase' },
        { term: 'nucleosome', definition: 'Fundamental unit of chromatin: DNA wrapped around a histone octamer', pronunciation: 'NOO-klee-oh-sohm' },
        { term: 'linking number', definition: 'Topological property describing total number of times DNA strands cross each other' },
        { term: 'sugar pucker', definition: 'Conformation of the deoxyribose ring affecting overall DNA geometry' },
        { term: 'torsion angle', definition: 'Rotational angles around bonds in the DNA backbone' },
      ],
      clinicalNotes: 'Topoisomerase inhibitors are important chemotherapy agents (topotecan, etoposide, doxorubicin). Z-DNA antibodies are found in lupus. Nucleosome positioning affects gene accessibility and is altered in cancer epigenetics.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding of DNA structure integrates atomic-level interactions, dynamic conformational landscapes, epigenetic modifications, and structure-function relationships relevant to disease mechanisms and therapeutic targeting.',
      explanation: `## Clinical and Research Perspectives on DNA Structure

### Structural Basis of Genetic Disease

**Repeat Expansion Disorders:**
- CTG/CAG repeats form hairpin structures
- Slippage during replication causes expansion
- Examples: Huntington disease, myotonic dystrophy, fragile X
- Repeat length correlates with severity (anticipation)

**G-Quadruplex (G4) Structures:**
- Formed in G-rich sequences (telomeres, promoters)
- Stack of G-quartets stabilized by cations (K⁺ > Na⁺)
- Telomere maintenance, gene regulation, genome instability
- Therapeutic target: G4 ligands in cancer

**DNA Damage Recognition:**
- XPC-RAD23B: Recognizes helix distortion (NER initiation)
- MutSα (MSH2-MSH6): Mismatch recognition (MMR)
- PARP1: SSB sensor
- Ku70/80: DSB end recognition (NHEJ)

### Epigenetic Modifications Affecting Structure

**Cytosine Modifications:**
- 5-methylcytosine (5mC): CpG methylation, gene silencing
- 5-hydroxymethylcytosine (5hmC): TET-mediated, active demethylation
- Affects major groove recognition, chromatin compaction

**Structural Effects:**
- Methylation increases melting temperature (~0.5°C per methylated CpG)
- Affects DNA flexibility and protein binding
- MeCP2 binding to methylated DNA → Rett syndrome mutations

### Chromatin States and Disease

**Histone Modifications:**
| Mark | Effect | Associated State |
|------|--------|------------------|
| H3K4me3 | Active | Promoters |
| H3K27me3 | Repressive | Polycomb silencing |
| H3K9me3 | Repressive | Heterochromatin |
| H3K27ac | Active | Enhancers |

**Clinical Relevance:**
- Histone modifier mutations: Leukemia, solid tumors
- SWI/SNF complex mutations: ~20% of cancers
- Cohesion mutations: Cornelia de Lange syndrome
- LaminA/C mutations: Affect nuclear architecture (progeria)

### Therapeutic Targeting of DNA Structure

**DNA-Targeting Drugs:**

1. **Intercalators**: Insert between base pairs
   - Doxorubicin, daunorubicin (topoisomerase II inhibition)
   - Actinomycin D (transcription inhibition)

2. **Minor Groove Binders:**
   - Distamycin (AT preference)
   - Netropsin
   - Therapeutic development ongoing

3. **Crosslinkers:**
   - Platinum agents (cisplatin, carboplatin): Intrastrand crosslinks
   - Nitrogen mustards: Interstrand crosslinks
   - Mitomycin C: Reductive activation

4. **Alkylating Agents:**
   - Temozolomide: O6-methylguanine (MGMT substrate)
   - Cyclophosphamide, chlorambucil

### Advanced Structural Biology Techniques

| Method | Resolution | Information |
|--------|------------|-------------|
| X-ray crystallography | Atomic | Static structures |
| Cryo-EM | Near-atomic | Large complexes |
| NMR | Atomic | Dynamics in solution |
| SAXS | Low | Solution conformation |
| AFM | Single molecule | Topology, mechanics |
| FRET | nm scale | Dynamic distances |
| Hi-C | kb-Mb | Chromosome organization |

### Genome Architecture in Disease

**3D Genome Organization:**
- Topologically associating domains (TADs)
- Enhancer-promoter loops (CTCF, cohesin)
- A/B compartments (active/inactive)

**Pathogenic Rearrangements:**
- TAD boundary disruption: Limb malformations (LBNT syndrome)
- Enhancer hijacking: Oncogene activation
- Chromothripsis: Clustered rearrangements in cancer`,
      keyTerms: [
        { term: 'G-quadruplex', definition: 'Non-B DNA structure formed by G-rich sequences involving stacked G-quartets', pronunciation: 'kwod-ROO-pleks' },
        { term: 'CpG methylation', definition: 'Addition of methyl group to cytosine in CpG dinucleotides; epigenetic silencing mark' },
        { term: 'topologically associating domain (TAD)', definition: 'Self-interacting genomic region forming structural and functional unit' },
        { term: 'intercalation', definition: 'Insertion of flat molecules between DNA base pairs, causing unwinding and lengthening' },
        { term: 'chromothripsis', definition: 'Catastrophic chromosome shattering with imperfect reassembly, seen in cancer' },
        { term: 'cohesin', definition: 'Protein complex mediating sister chromatid cohesion and chromatin loop formation' },
      ],
      clinicalNotes: `Key clinical applications:
1. BRCA1/2 mutations disrupt homologous recombination at DNA damage sites
2. MLH1 promoter methylation causes Lynch syndrome phenocopy (epimutation)
3. G-quadruplex ligands (quarfloxin, CX-5461) in clinical cancer trials
4. MGMT methylation predicts temozolomide response in glioblastoma
5. Topoisomerase I polymorphisms affect irinotecan toxicity
6. Hi-C revealing TAD disruptions in developmental disorders`,
    },
  },

  media: [
    {
      id: 'dna-double-helix-diagram',
      type: 'diagram',
      filename: 'dna-double-helix.svg',
      title: 'DNA Double Helix Structure',
      description: 'Detailed diagram showing sugar-phosphate backbone, base pairs, and major/minor grooves',
    },
    {
      id: 'nucleotide-structure',
      type: 'diagram',
      filename: 'nucleotide-components.svg',
      title: 'Nucleotide Components',
      description: 'Chemical structure of nucleotides showing sugar, phosphate, and base components',
    },
    {
      id: 'base-pairing-diagram',
      type: 'diagram',
      filename: 'base-pairing.svg',
      title: 'Complementary Base Pairing',
      description: 'Hydrogen bonding between A-T and G-C base pairs',
    },
  ],

  citations: [
    {
      id: 'watson-crick-1953',
      type: 'article',
      title: 'Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid',
      authors: ['Watson, J.D.', 'Crick, F.H.C.'],
      source: 'Nature',
      chapter: '171',
      page: '737-738',
    },
    {
      id: 'alberts-molecular-cell-bio',
      type: 'textbook',
      title: 'The Structure and Function of DNA',
      authors: ['Alberts, B.', 'et al.'],
      source: 'Molecular Biology of the Cell',
      chapter: '4',
      license: 'Garland Science',
    },
  ],

  crossReferences: [
    { targetId: 'concept-gene-expression', targetType: 'concept', relationship: 'related', label: 'Gene Expression' },
    { targetId: 'concept-chromosomes', targetType: 'concept', relationship: 'related', label: 'Chromosomes' },
    { targetId: 'concept-mutations-variants', targetType: 'concept', relationship: 'related', label: 'Mutations and Variants' },
  ],

  tags: {
    systems: ['genetics'],
    topics: ['molecular biology', 'genetics', 'biochemistry'],
    keywords: ['DNA', 'double helix', 'nucleotides', 'base pairs'],
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

export default dnaStructureContent;
