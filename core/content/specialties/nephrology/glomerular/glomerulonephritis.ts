/**
 * Glomerulonephritis - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const glomerulonephritis: EducationalContent = {
  id: 'nephro-glomerulonephritis',
  type: 'condition',
  name: 'Glomerulonephritis',
  nameEs: 'Glomerulonefritis',
  alternateNames: ['GN', 'Glomerular Nephritis', 'Bright\'s Disease'],
  hpoId: 'HP:0000099',
  levels: {
    1: {
      level: 1,
      summary: 'Glomerulonephritis is inflammation of the tiny filters in your kidneys that clean your blood.',
      explanation: `Your kidneys have millions of tiny filters called glomeruli. When these filters become inflamed, they can't clean your blood properly. This can cause blood and protein to leak into your urine, and waste products build up in your blood.

**Common signs:** Foamy urine (protein), dark or cola-colored urine (blood), swelling in your face or legs, and high blood pressure.

**Causes:** Your immune system can mistakenly attack the filters after an infection (like strep throat), or conditions like lupus can trigger the inflammation.`,
      keyTerms: [
        { term: 'glomeruli', definition: 'Tiny filters in your kidneys that clean waste from blood' },
        { term: 'inflammation', definition: 'When part of your body becomes swollen, red, and irritated' },
      ],
      analogies: ['Glomeruli are like coffee filters -- when they get damaged, grounds (blood and protein) leak into the coffee (urine).'],
      patientCounselingPoints: ['Watch for puffy eyes in the morning or dark urine and tell your doctor right away.'],
    },
    2: {
      level: 2,
      summary: 'Glomerulonephritis refers to inflammatory diseases of the glomerulus causing hematuria, proteinuria, and impaired renal function, classified as nephritic or nephrotic based on clinical presentation.',
      explanation: `## Overview
Glomerulonephritis (GN) encompasses diseases where the glomerular capillary tuft is inflamed or damaged by immune-mediated mechanisms.

**Nephritic Syndrome:** Hematuria (RBC casts), mild proteinuria (<3.5 g/day), hypertension, oliguria, and azotemia.

**Nephrotic Syndrome:** Heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, hyperlipidemia.

**Major Categories:**
- Post-infectious GN (after strep pharyngitis)
- IgA nephropathy (most common worldwide)
- Lupus nephritis
- ANCA-associated vasculitis
- Anti-GBM disease (Goodpasture)`,
      keyTerms: [
        { term: 'nephritic syndrome', definition: 'Glomerular inflammation with hematuria, RBC casts, mild proteinuria, and hypertension' },
        { term: 'RBC casts', definition: 'Red blood cells clumped in a tubular shape, pathognomonic for glomerular bleeding' },
        { term: 'IgA nephropathy', definition: 'Most common GN worldwide; IgA deposits in the mesangium' },
      ],
    },
    3: {
      level: 3,
      summary: 'GN is classified by histopathologic pattern (proliferative, membranous, crescentic) and immunofluorescence findings, with treatment guided by biopsy and serologic workup including complement levels, ANCA, anti-GBM, and ANA.',
      explanation: `## Classification by Histopathology

**Proliferative GN:**
- Diffuse proliferative: Post-infectious, lupus class IV
- Mesangioproliferative: IgA nephropathy
- Membranoproliferative (MPGN): C3 glomerulopathy, immune complex-mediated

**Crescentic (Rapidly Progressive) GN:**
- Type I: Anti-GBM (linear IF) -- Goodpasture
- Type II: Immune complex (granular IF) -- lupus, post-infectious
- Type III: Pauci-immune (negative IF) -- ANCA-associated vasculitis

## Serologic Workup
| Finding | Suggests |
|---------|----------|
| Low C3/C4 | Lupus, MPGN, post-infectious |
| c-ANCA (PR3) | Granulomatosis with polyangiitis |
| p-ANCA (MPO) | Microscopic polyangiitis |
| Anti-GBM | Goodpasture syndrome |
| ASO titer | Post-streptococcal GN |

## Treatment Principles
- Immunosuppression for active immune-mediated GN (steroids, cyclophosphamide, rituximab)
- Plasmapheresis for anti-GBM disease and severe ANCA vasculitis
- RAAS blockade for proteinuria reduction
- Blood pressure control (<130/80)`,
      keyTerms: [
        { term: 'crescentic GN', definition: 'Rapidly progressive glomerulonephritis with crescent formation on biopsy; a nephrology emergency' },
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibodies; associated with small-vessel vasculitis causing GN' },
        { term: 'anti-GBM', definition: 'Antibodies against glomerular basement membrane collagen IV; causes Goodpasture syndrome' },
        { term: 'immunofluorescence', definition: 'Biopsy staining pattern (linear, granular, pauci-immune) that guides GN classification' },
      ],
      clinicalNotes: 'Crescentic GN is a nephrology emergency -- renal biopsy should be obtained urgently and treatment started empirically if RPGN is suspected clinically.',
    },
    4: {
      level: 4,
      summary: 'Advanced GN management requires integration of biopsy pathology (LM, IF, EM), serologic markers, and evidence-based immunosuppressive regimens tailored to specific histologic diagnoses, with emerging targeted therapies replacing broad immunosuppression.',
      explanation: `## Pathogenesis by Mechanism

**Immune Complex Deposition:**
- Subepithelial: Membranous nephropathy (anti-PLA2R), post-infectious GN ("humps")
- Subendothelial: Lupus class IV, MPGN type I
- Mesangial: IgA nephropathy, lupus class II

**Anti-GBM Disease:**
- Antibodies to alpha-3 chain of type IV collagen
- Linear IgG on IF; pulmonary hemorrhage if alveolar BM involved

**Pauci-Immune (ANCA):**
- Neutrophil-mediated glomerular necrosis without immune deposits
- GPA (PR3-ANCA) vs MPA (MPO-ANCA) vs EGPA

**Complement-Mediated:**
- C3 glomerulopathy: Dysregulation of alternative complement pathway
- C3GN vs Dense Deposit Disease by EM

## Evidence-Based Treatment
- **IgA Nephropathy:** TESTING trial -- reduced-dose steroids + SGLT2i; NEFIGAN (targeted budesonide)
- **Membranous:** Rituximab first-line (MENTOR trial); cyclophosphamide alternative; monitor anti-PLA2R titers
- **ANCA Vasculitis:** Rituximab non-inferior to cyclophosphamide (RAVE, RITUXVAS); avacopan (C5a receptor inhibitor) as steroid-sparing
- **Lupus Nephritis Class III/IV:** MMF or cyclophosphamide induction + steroids; belimumab or voclosporin add-on (BLISS-LN, AURORA)`,
      keyTerms: [
        { term: 'anti-PLA2R', definition: 'Autoantibody against phospholipase A2 receptor; diagnostic biomarker for primary membranous nephropathy' },
        { term: 'avacopan', definition: 'Oral C5a receptor inhibitor; steroid-sparing agent for ANCA vasculitis (ADVOCATE trial)' },
        { term: 'C3 glomerulopathy', definition: 'GN driven by alternative complement pathway dysregulation; C3-dominant deposits on IF' },
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor approved as add-on for lupus nephritis (AURORA trial)' },
      ],
      clinicalNotes: 'Anti-PLA2R antibody titers correlate with disease activity in membranous nephropathy and can guide immunosuppression duration. SGLT2 inhibitors are now part of standard nephroprotective care in proteinuric glomerular diseases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GN management integrates precision biomarkers (PLA2R, ANCA, complement genetics), targeted biologics, and risk-stratified protocols, with clinical trials reshaping standard of care for ANCA vasculitis, membranous nephropathy, and IgA nephropathy.',
      explanation: `## Landmark Trials and Guideline Updates (KDIGO 2024)

**ANCA Vasculitis:**
- PEXIVAS: Plasma exchange no benefit on death/ESKD
- ADVOCATE: Avacopan non-inferior to prednisone taper; better GFR recovery
- RITAZAREM: Rituximab superior to azathioprine for relapse prevention
- Reduced steroid protocols gaining traction

**Membranous Nephropathy:**
- MENTOR: Rituximab superior to cyclosporine for remission
- STARMEN: Tacrolimus-rituximab sequential effective
- Anti-PLA2R-negative: Consider secondary causes or THSD7A, NELL-1

**IgA Nephropathy:**
- TESTING: Methylprednisolone reduced ESKD risk (with PJP prophylaxis)
- DAPA-CKD/EMPA-KIDNEY subgroups: SGLT2i benefit in IgA
- NEFIGAN/NefIgArd: Targeted-release budesonide (Tarpeyo) FDA-approved
- Sparsentan (dual endothelin/angiotensin blocker): PROTECT trial

**Lupus Nephritis:**
- AURORA 2: Voclosporin sustained benefit at 3 years
- BLISS-LN: Belimumab added to standard therapy improved renal response
- Obinutuzumab: Under investigation (NOBILITY trial)

## Emerging Biomarkers and Precision Medicine
- Urinary biomarkers: NGAL, KIM-1, MCP-1 for activity monitoring
- Complement genetic profiling for C3G and atypical HUS
- Repeat biopsy protocols to guide therapy duration
- Single-cell RNA sequencing revealing glomerular cell-specific pathways

## Future Directions
- CAR-T therapy for refractory lupus nephritis (early case series)
- Complement-targeted therapies: Iptacopan (factor B inhibitor), narsoplimab (MASP-2 inhibitor)
- Endothelin receptor antagonists in proteinuric glomerular disease`,
      keyTerms: [
        { term: 'sparsentan', definition: 'Dual endothelin A and angiotensin II receptor blocker; FDA-approved for IgA nephropathy proteinuria reduction' },
        { term: 'Tarpeyo', definition: 'Targeted-release budesonide (nefecon) for IgA nephropathy; reduces proteinuria with less systemic steroid exposure' },
        { term: 'PEXIVAS', definition: 'Trial showing plasma exchange does not reduce death/ESKD in severe ANCA vasculitis' },
      ],
      clinicalNotes: 'The GN treatment landscape is rapidly evolving. SGLT2 inhibitors should be prescribed for nearly all proteinuric glomerular diseases. Steroid-minimization strategies are standard. Repeat biopsy is underutilized but valuable for treatment decisions.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-gn-2024', type: 'article', title: 'KDIGO 2024 Clinical Practice Guideline for Glomerular Diseases', source: 'Kidney International' },
    { id: 'brenner-rector', type: 'textbook', title: 'Brenner & Rector\'s The Kidney', source: 'Elsevier', chapter: 'Glomerulonephritis' },
  ],
  crossReferences: [
    { targetId: 'nephro-nephrotic-syndrome', targetType: 'condition', relationship: 'related', label: 'Nephrotic Syndrome' },
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['pathology', 'immunology', 'therapeutics'],
    keywords: ['glomerulonephritis', 'ANCA', 'IgA nephropathy', 'membranous', 'crescentic', 'lupus nephritis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerulonephritis;
