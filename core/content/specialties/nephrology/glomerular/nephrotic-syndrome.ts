/**
 * Nephrotic Syndrome - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const nephroticSyndrome: EducationalContent = {
  id: 'nephro-nephrotic-syndrome',
  type: 'condition',
  name: 'Nephrotic Syndrome',
  nameEs: 'Sindrome Nefrotico',
  alternateNames: ['Nephrosis', 'Nephrotic-Range Proteinuria'],
  hpoId: 'HP:0000100',
  levels: {
    1: {
      level: 1,
      summary: 'Nephrotic syndrome happens when damaged kidney filters leak large amounts of protein into the urine, causing body swelling and other problems.',
      explanation: `Your kidneys normally keep protein in your blood while filtering out waste. In nephrotic syndrome, the filters are damaged and leak protein into your urine.

**What happens:**
- Foamy urine from protein loss
- Swelling (especially around eyes, legs, and belly)
- High cholesterol
- Increased risk of blood clots and infections

**Common causes in children:** Minimal change disease (usually responds well to steroids)
**Common causes in adults:** Diabetes, membranous nephropathy, focal segmental glomerulosclerosis (FSGS)`,
      keyTerms: [
        { term: 'proteinuria', definition: 'Protein leaking into your urine; makes it foamy' },
        { term: 'edema', definition: 'Swelling caused by extra fluid trapped in your body\'s tissues' },
      ],
      analogies: ['Nephrotic syndrome is like a window screen with big holes -- things that should stay inside (protein) escape through the damaged filter.'],
      patientCounselingPoints: ['Limit salt intake to reduce swelling.', 'Report any leg pain or redness immediately (blood clot risk).'],
    },
    2: {
      level: 2,
      summary: 'Nephrotic syndrome is defined by proteinuria >3.5 g/day, hypoalbuminemia, peripheral edema, and hyperlipidemia, with primary causes including minimal change disease, FSGS, and membranous nephropathy.',
      explanation: `## Diagnostic Criteria
- Proteinuria >3.5 g/24h (or urine protein/creatinine ratio >3.5 g/g)
- Hypoalbuminemia (<3.0 g/dL)
- Peripheral edema
- Hyperlipidemia (elevated LDL, total cholesterol)

## Primary (Podocyte) Causes
| Cause | Age Group | Key Feature |
|-------|-----------|-------------|
| Minimal Change Disease | Children (#1) | Normal LM, foot process effacement on EM |
| FSGS | Adults | Segmental sclerosis; often steroid-resistant |
| Membranous Nephropathy | Adults (#1 primary) | Subepithelial deposits; anti-PLA2R |

## Secondary Causes
- Diabetic nephropathy (most common overall)
- Amyloidosis, lupus nephritis, HIV-associated nephropathy

## Complications
- Venous thromboembolism (especially renal vein thrombosis in membranous)
- Infections (loss of immunoglobulins)
- Acute kidney injury (hypovolemia, NSAIDs)`,
      keyTerms: [
        { term: 'FSGS', definition: 'Focal segmental glomerulosclerosis; scarring of some glomeruli in certain segments' },
        { term: 'minimal change disease', definition: 'Most common nephrotic cause in children; normal on light microscopy, responds to steroids' },
        { term: 'hypoalbuminemia', definition: 'Low albumin in blood (<3 g/dL) from urinary losses; drives edema and hyperlipidemia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Nephrotic syndrome pathophysiology involves podocyte injury disrupting the glomerular filtration barrier, with specific histopathology guiding classification (MCD, FSGS, membranous, amyloid) and evidence-based immunosuppressive therapy.',
      explanation: `## Glomerular Filtration Barrier
Three layers normally prevent protein passage:
1. Fenestrated endothelium
2. Glomerular basement membrane (GBM) -- charge and size barrier
3. Podocyte foot processes with slit diaphragm (nephrin, podocin)

**Podocyte injury** is the unifying mechanism: foot process effacement increases permeability.

## Pathophysiology of Complications
- **Edema:** Underfill (low oncotic pressure) vs overflow (primary sodium retention) hypothesis
- **Hyperlipidemia:** Hepatic lipoprotein synthesis increases to compensate for albumin loss
- **Thrombosis:** Loss of antithrombin III, protein S; increased fibrinogen and platelet aggregation
- **Infection:** Loss of IgG; complement opsonization impaired

## Treatment by Etiology
- **MCD:** Prednisone 1 mg/kg/day; >90% remission. Relapsers: cyclophosphamide, calcineurin inhibitors, rituximab
- **FSGS:** Steroids first-line (lower response ~30-50%); calcineurin inhibitors for steroid-resistant; genetic FSGS does not respond to immunosuppression
- **Membranous:** Anti-PLA2R-guided therapy; rituximab first-line; spontaneous remission in ~30%
- **All:** RAAS blockade, SGLT2i, statin, edema management, anticoagulation if albumin <2.5 (especially membranous)`,
      keyTerms: [
        { term: 'podocyte', definition: 'Specialized epithelial cell wrapping glomerular capillaries; forms the final filtration barrier via slit diaphragm' },
        { term: 'slit diaphragm', definition: 'Protein complex (nephrin, podocin) between podocyte foot processes; critical size-selective barrier' },
        { term: 'antithrombin III', definition: 'Anticoagulant protein lost in urine in nephrotic syndrome; contributes to hypercoagulable state' },
      ],
      clinicalNotes: 'Renal vein thrombosis should be suspected in membranous nephropathy with flank pain, hematuria, or acute rise in proteinuria. Prophylactic anticoagulation is considered when albumin <2.0-2.5 g/dL.',
    },
    4: {
      level: 4,
      summary: 'Nephrotic syndrome management requires biopsy-guided classification, understanding of podocyte biology and genetic forms, targeted immunosuppression based on antigen-specific biomarkers, and comprehensive complication management.',
      explanation: `## Podocyte Biology and Genetic Nephrotic Syndrome
**Key Podocyte Proteins:**
- Nephrin (NPHS1): Slit diaphragm structural protein; mutations cause congenital nephrotic syndrome (Finnish type)
- Podocin (NPHS2): Links nephrin to actin cytoskeleton; autosomal recessive FSGS
- TRPC6: Calcium channel; gain-of-function mutations cause autosomal dominant FSGS
- APOL1: Risk alleles (G1, G2) in African ancestry; 3-5x FSGS/HIVAN risk

**Clinical Implication:** Genetic testing in steroid-resistant FSGS -- genetic forms do not respond to immunosuppression and do not recur post-transplant (except NPHS1).

## Advanced Therapeutics
- **Rituximab in MCD/FSGS:** Binds SMPDL-3b on podocytes, stabilizing actin cytoskeleton (independent of B-cell depletion)
- **Voclosporin:** Novel calcineurin inhibitor with more predictable PK; approved for lupus nephritis, studied in FSGS
- **Sparsentan:** Dual ETA/AT1 blocker; proteinuria reduction in FSGS (DUPLEX trial)

## Recurrence After Transplant
| Disease | Recurrence Rate | Management |
|---------|----------------|------------|
| FSGS | 30-40% (primary) | Plasmapheresis, rituximab |
| Membranous | 10-30% | Monitor anti-PLA2R |
| MCD | <5% | Steroids |
| IgA | 30-60% (usually mild) | Supportive |`,
      keyTerms: [
        { term: 'APOL1', definition: 'Apolipoprotein L1 gene; risk variants in African ancestry drive higher rates of FSGS, HIVAN, and CKD' },
        { term: 'nephrin', definition: 'Key slit diaphragm protein; mutations cause congenital nephrotic syndrome; target of autoantibodies in some MCD' },
        { term: 'SMPDL-3b', definition: 'Podocyte lipid raft protein; rituximab binding stabilizes podocyte structure independent of B-cell effects' },
      ],
      clinicalNotes: 'APOL1 genotyping is increasingly relevant for risk stratification in African-ancestry patients with proteinuric kidney disease and in living kidney donor evaluation.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art nephrotic syndrome care involves antigen-specific serologic monitoring, podocyte-targeted therapies, APOL1-informed management, and clinical trial advances in FSGS, membranous nephropathy, and minimal change disease.',
      explanation: `## Paradigm Shifts in Nephrotic Syndrome

**Membranous Nephropathy as Autoimmune Disease:**
- PLA2R (70%), THSD7A (3%), NELL-1, EXT1/EXT2, NCAM1 target antigens identified
- Antigen-specific monitoring guides treatment initiation, response assessment, and duration
- Immunological remission (antibody disappearance) precedes proteinuria remission by months
- Serum PLA2R monitoring replaces repeat biopsy in many centers

**FSGS Reclassification:**
- Primary (circulating permeability factor) vs adaptive (hyperfiltration) vs genetic vs medication-induced
- Soluble urokinase plasminogen activator receptor (suPAR) as putative permeability factor (controversial)
- APOL1-associated FSGS: Inaxaplin (APOL1 inhibitor) in clinical trials

**Emerging Therapies:**
- Anti-nephrin autoantibodies in MCD: Novel biomarker discovery (2024)
- Atacicept (TACI-Ig): B-cell targeting in IgA and membranous
- Iptacopan (factor B inhibitor): Complement-mediated nephrotic syndrome
- Atrasentan (selective ETA antagonist): ALIGN trial in IgA, proteinuria reduction

## Key Trials Reshaping Practice
- MENTOR: Rituximab > cyclosporine for membranous remission
- STARMEN: Sequential tacrolimus-rituximab effective in membranous
- PROTECT: Sparsentan reduces proteinuria in IgA
- DUPLEX: Sparsentan in FSGS
- NefIgArd: Tarpeyo sustained GFR benefit at 2 years`,
      keyTerms: [
        { term: 'inaxaplin', definition: 'First-in-class small molecule APOL1 inhibitor; investigational for APOL1-mediated FSGS' },
        { term: 'suPAR', definition: 'Soluble urokinase plasminogen activator receptor; proposed circulating factor in primary FSGS (debated)' },
        { term: 'anti-nephrin antibodies', definition: 'Newly discovered autoantibodies in MCD targeting podocyte slit diaphragm; potential diagnostic biomarker' },
      ],
      clinicalNotes: 'The identification of target antigens in membranous nephropathy has transformed it into a model autoimmune disease with antigen-specific monitoring. APOL1 genotyping is entering clinical practice for donor evaluation and therapeutic targeting.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-gn-2024', type: 'article', title: 'KDIGO 2024 Clinical Practice Guideline for Glomerular Diseases', source: 'Kidney International' },
    { id: 'mentor-trial', type: 'article', title: 'Rituximab vs Cyclosporine in Membranous Nephropathy (MENTOR)', authors: ['Fervenza FC', 'et al.'], source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'nephro-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis' },
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['pathology', 'immunology', 'therapeutics'],
    keywords: ['nephrotic syndrome', 'proteinuria', 'FSGS', 'membranous', 'minimal change', 'podocyte'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephroticSyndrome;
