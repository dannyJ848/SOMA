/**
 * Dialysis and Kidney Transplant - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const dialysisAndTransplant: EducationalContent = {
  id: 'nephro-dialysis-transplant',
  type: 'topic',
  name: 'Dialysis and Kidney Transplant',
  nameEs: 'Dialisis y Trasplante Renal',
  alternateNames: ['Renal Replacement Therapy', 'RRT', 'Kidney Replacement Therapy'],
  levels: {
    1: {
      level: 1,
      summary: 'When kidneys fail completely, dialysis or a kidney transplant can take over the job of cleaning your blood and keeping you alive.',
      explanation: `When your kidneys stop working (end-stage kidney disease), waste builds up in your blood and can make you very sick. You need one of these treatments:

**Hemodialysis:** A machine filters your blood through a special filter 3 times a week for about 4 hours each time. You go to a dialysis center or do it at home.

**Peritoneal Dialysis:** A special fluid is put into your belly through a tube. The fluid absorbs waste, then is drained out. You can do this at home, even while sleeping.

**Kidney Transplant:** A surgeon places a healthy kidney from a donor (living or deceased) into your body. This is the best treatment because it most closely replaces normal kidney function. You need to take anti-rejection medicines for life.`,
      keyTerms: [
        { term: 'hemodialysis', definition: 'Using a machine to filter waste from your blood when kidneys fail' },
        { term: 'peritoneal dialysis', definition: 'Using the lining of your belly to filter waste by filling it with a special solution' },
        { term: 'kidney transplant', definition: 'Surgery to place a healthy kidney from another person into your body' },
      ],
      analogies: ['Hemodialysis works like a car wash for your blood -- it goes through a cleaning machine and comes back clean.'],
      patientCounselingPoints: ['A transplant offers the best quality of life.', 'You can start the transplant evaluation process even before you need dialysis.'],
    },
    2: {
      level: 2,
      summary: 'Renal replacement therapy includes hemodialysis, peritoneal dialysis, and kidney transplantation, each with specific indications, access requirements, complications, and outcomes, with transplant offering superior survival.',
      explanation: `## Hemodialysis (HD)
**Principle:** Blood is pumped through an extracorporeal dialyzer containing a semipermeable membrane; diffusion removes solutes, ultrafiltration removes fluid.

**Vascular Access (in order of preference):**
1. AV fistula: Surgical anastomosis (radial-cephalic, brachiocephalic); needs 6-8 weeks to mature; lowest infection rate
2. AV graft: Synthetic bridge between artery and vein; usable in 2-4 weeks; higher thrombosis
3. Tunneled dialysis catheter: Immediate use; highest infection risk (catheter-related bloodstream infection)

**Prescription:** 3-4x/week, 3.5-4 hours per session. KT/V target >=1.4 per session.

## Peritoneal Dialysis (PD)
**Principle:** Peritoneal membrane as dialysis filter; dextrose-based dialysate creates osmotic gradient for fluid/solute removal.

**Types:** CAPD (4 exchanges/day), APD (automated cycler overnight)
**Complications:** Peritonitis (#1), catheter infection, ultrafiltration failure, encapsulating peritoneal sclerosis

## Kidney Transplant
**Living donor:** Better outcomes (95% 5-year graft survival); shorter wait time; preemptive transplant possible
**Deceased donor:** Median wait 3-5 years (varies by region/blood type)

**Immunosuppression:** Induction (thymoglobulin or basiliximab) + maintenance (tacrolimus + mycophenolate + prednisone)
**Rejection:** T-cell mediated (treat with steroids) vs antibody-mediated (plasmapheresis, IVIG)
**Survival:** Transplant recipients live 10-15 years longer than matched patients on dialysis waitlist`,
      keyTerms: [
        { term: 'AV fistula', definition: 'Surgical connection between artery and vein; preferred hemodialysis access with lowest complication rate' },
        { term: 'peritonitis', definition: 'Infection of the peritoneal cavity; most common serious complication of peritoneal dialysis' },
        { term: 'HLA matching', definition: 'Human leukocyte antigen compatibility testing between donor and recipient; better match = better outcomes' },
        { term: 'induction therapy', definition: 'Intensive immunosuppression given at time of transplant to prevent early rejection' },
      ],
    },
    3: {
      level: 3,
      summary: 'RRT selection involves shared decision-making based on patient factors, modality-specific physiology (diffusion/convection in HD, osmotic ultrafiltration in PD), transplant immunology (HLA, crossmatch, PRA), and management of long-term complications.',
      explanation: `## Hemodialysis Physiology
- **Diffusion:** Solute movement across membrane down concentration gradient (small molecules: urea, K, phosphate)
- **Convection:** Solute drag with ultrafiltration (better middle-molecule clearance); basis for hemodiafiltration (HDF)
- **Ultrafiltration:** Transmembrane pressure drives fluid removal
- High-flux vs low-flux membranes: High-flux clears beta-2-microglobulin better; standard of care
- CONVINCE trial: HDF with high convection volume reduces mortality vs conventional HD

**Dialysis Complications:**
- Intradialytic hypotension (20-30% of sessions): Too-rapid UF; lower UF rate, sodium modeling, cool dialysate
- Disequilibrium syndrome: Cerebral edema from rapid osmolality changes (first dialysis sessions)
- Dialysis-related amyloidosis: Beta-2-microglobulin deposition (carpal tunnel, bone cysts) -- less common with high-flux

## Peritoneal Dialysis Physiology
- Peritoneal membrane transport: High, high-average, low-average, low (PET classification)
- High transporters: Good solute clearance but rapid glucose absorption; prefer APD (short dwells)
- Low transporters: Better UF capacity; prefer CAPD (long dwells)
- Icodextrin: Colloid osmotic agent for long dwells; maintains UF in high transporters

## Transplant Immunology
- **HLA system:** HLA-A, B, DR most important; 0-antigen mismatch ideal
- **Crossmatch:** Donor lymphocytes + recipient serum; positive = contraindication (hyperacute rejection)
- **PRA (panel reactive antibody):** Percentage of population against which recipient has antibodies; high PRA = harder to find compatible donor
- **Desensitization:** IVIG, plasmapheresis, rituximab, bortezomib for HLA-incompatible transplant
- **BK virus nephropathy:** Reactivation in ~5% of transplants; reduce immunosuppression; no specific antiviral

## Outcomes Data
- Transplant > PD > HD for survival (adjusting for selection bias)
- Preemptive transplant > transplant after dialysis initiation
- Home HD (nocturnal/frequent) may approach PD/transplant outcomes (FHN trial)`,
      keyTerms: [
        { term: 'hemodiafiltration', definition: 'Dialysis modality combining diffusion and high-volume convection; CONVINCE trial showed mortality benefit' },
        { term: 'PET (peritoneal equilibration test)', definition: 'Test classifying peritoneal membrane transport rate; guides PD prescription' },
        { term: 'PRA', definition: 'Panel reactive antibody; measures degree of sensitization against HLA antigens; high PRA = difficult to match' },
        { term: 'BK virus', definition: 'Polyomavirus causing nephropathy in transplant recipients; managed by immunosuppression reduction' },
      ],
      clinicalNotes: 'The CONVINCE trial (2023) showed that high-dose HDF reduces all-cause mortality by 23% vs conventional HD -- a landmark finding. AV fistula should be planned when eGFR <15-20 (referral at eGFR <20). Peritonitis in PD should be treated empirically covering both gram-positive and gram-negative organisms, with adjustments based on culture.',
    },
    4: {
      level: 4,
      summary: 'Advanced RRT management encompasses precision dialysis prescriptions, donor-derived cfDNA monitoring in transplant, novel immunosuppressive protocols, and management of long-term complications including PTLD, CNI nephrotoxicity, and cardiovascular disease.',
      explanation: `## Advanced Dialysis Concepts

**Incremental Dialysis:**
- Start with 2x/week HD (or fewer PD exchanges) in patients with residual kidney function (urine output >500 mL/day)
- Preserve residual function longer; improved quality of life
- KDOQI endorses if residual KrU >=2 mL/min

**Dialysis in Special Settings:**
- CRRT: ICU patients; CVVHDF preferred; dose 20-25 mL/kg/hr (RENAL, ATN trials)
- SLED (Sustained Low-Efficiency Dialysis): Hybrid ICU modality; 6-12 hours
- Urgent-start PD: Viable alternative to urgent catheter-based HD; growing evidence base

## Advanced Transplant Medicine

**Monitoring:**
- Protocol biopsies: Detect subclinical rejection (10-15% at 3 months)
- Donor-derived cell-free DNA (dd-cfDNA): Non-invasive rejection marker; AlloSure, Prospera tests
  - >1% suggests active rejection; high negative predictive value
  - May reduce need for surveillance biopsies
- DSA monitoring: De novo DSA development signals chronic antibody-mediated rejection risk

**Immunosuppression Innovations:**
- Belatacept (BENEFIT trial): Costimulation blocker; CNI-free protocol; better long-term GFR but higher acute rejection
- Clazakizumab: Anti-IL-6; chronic AMR treatment (IMAGINE trial)
- Tocilizumab: Anti-IL-6R; desensitization and AMR
- Regulatory T-cell therapy: Phase I/II trials for tolerance induction

**Long-Term Complications:**
- CNI nephrotoxicity: Chronic allograft injury from tacrolimus; arteriolar hyalinosis on biopsy
- PTLD: EBV-driven lymphoproliferative disorder; reduce immunosuppression, rituximab
- BK nephropathy: Reduce immunosuppression; consider cidofovir or leflunomide (limited evidence)
- Cardiovascular disease: Leading cause of death; aggressive risk factor management
- Skin cancer: 65x increased SCC risk; annual dermatologic screening; sirolimus may be protective`,
      keyTerms: [
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA; non-invasive blood test detecting allograft injury/rejection; >1% suggests active rejection' },
        { term: 'belatacept', definition: 'CTLA4-Ig costimulation blocker; enables CNI-free immunosuppression with better long-term GFR (BENEFIT trial)' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-driven; treatment includes immunosuppression reduction and rituximab' },
        { term: 'incremental dialysis', definition: 'Starting dialysis at reduced frequency to preserve residual kidney function; improving quality of life' },
      ],
      clinicalNotes: 'dd-cfDNA is transforming transplant monitoring -- consider as a non-invasive screening tool before protocol biopsy. Belatacept-based regimens offer better long-term renal outcomes but require EBV seropositive recipients. PTLD risk is highest in the first year post-transplant in EBV-mismatched recipients.',
    },
    5: {
      level: 5,
      summary: 'The frontier of renal replacement therapy includes xenotransplantation, bioartificial kidneys, tolerance-inducing protocols, precision immunosuppression guided by molecular diagnostics, and equitable access to transplantation.',
      explanation: `## Xenotransplantation and Bioengineering

**Pig-to-Human Kidney Transplant:**
- 10-gene-edited pig (GalSafe + additional knockouts + human transgenes)
- First decedent studies (2021-2022): Kidneys functioned, produced urine, cleared creatinine
- First living recipient (2024): Functioned >2 months; demonstrated proof of concept
- Challenges: Porcine endogenous retrovirus (PERV), chronic xenograft rejection, regulatory pathway
- Potential to solve organ shortage (>100,000 US waitlist)

**Bioartificial Kidney (The Kidney Project):**
- Silicon nanopore membrane hemofilter + renal tubule cell bioreactor
- Implantable, no external power or anticoagulation needed
- Phase I trials anticipated; could eliminate dialysis entirely

**Kidney Organoids:**
- iPSC-derived kidney organoids for drug testing and disease modeling
- Transplantable organoids: Vascularization remains the key challenge
- CRISPR gene editing: Correct monogenic kidney diseases ex vivo

## Tolerance Induction
- **Mixed chimerism protocols:** Donor bone marrow infusion + conditioning allows graft acceptance without maintenance immunosuppression; small case series showing success (Northwestern, Stanford)
- **Regulatory T-cell therapy:** ONE Study, ThRIL: Manufactured donor-specific Tregs infused peri-transplant
- **CAR-Treg:** Engineered regulatory T cells targeting donor HLA; preclinical
- Goal: Eliminate lifelong immunosuppression and its complications

## Molecular Diagnostics
- Banff classification updates: Molecular Banff scores complement histology
- Gene expression profiling: TruGraf (subclinical rejection screening), DART (rejection gene panels)
- Multi-omics integration: Proteomics + transcriptomics + dd-cfDNA for precision rejection diagnosis
- Machine learning: Predicting graft loss 1-2 years before clinical detection

## Equity and Access
- Race-adjusted eGFR removal: Earlier transplant listing for Black patients (AAJT initiative)
- Paired kidney exchange: Chains enabling incompatible live-donor transplants
- Global disparities: Dialysis unavailable for millions; WHO task force on RRT access
- Presumed consent legislation: Increasing deceased donation rates (Spain model)`,
      keyTerms: [
        { term: 'xenotransplantation', definition: 'Cross-species organ transplantation; gene-edited pig kidneys in early human trials' },
        { term: 'mixed chimerism', definition: 'Tolerance protocol where recipient has both donor and self immune cells; may eliminate need for immunosuppression' },
        { term: 'bioartificial kidney', definition: 'Implantable device combining silicon membrane hemofilter with living renal tubule cells; in development (Kidney Project)' },
        { term: 'Banff classification', definition: 'International consensus histopathologic classification of kidney transplant rejection; now incorporates molecular data' },
      ],
      clinicalNotes: 'Xenotransplantation is no longer theoretical -- the first human pig kidney transplants have occurred. Mixed chimerism and Treg therapy represent viable paths to immunosuppression-free transplantation. Molecular Banff scoring is enhancing biopsy interpretation. Advocacy for equitable RRT access is a moral imperative.',
    },
  },
  media: [],
  citations: [
    { id: 'convince-trial', type: 'article', title: 'HDF vs HD on Mortality (CONVINCE)', source: 'New England Journal of Medicine' },
    { id: 'kdigo-transplant', type: 'article', title: 'KDIGO Clinical Practice Guideline for Kidney Transplant Recipients', source: 'Transplantation' },
    { id: 'kidney-project', type: 'website', title: 'The Kidney Project', source: 'UCSF/Vanderbilt', url: 'https://pharm.ucsf.edu/kidney' },
  ],
  crossReferences: [
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'parent', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
    { targetId: 'nephro-acute-tubular-necrosis', targetType: 'condition', relationship: 'related', label: 'Acute Tubular Necrosis' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['therapeutics', 'transplant', 'dialysis', 'surgery'],
    keywords: ['dialysis', 'hemodialysis', 'peritoneal dialysis', 'transplant', 'immunosuppression', 'xenotransplantation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dialysisAndTransplant;
