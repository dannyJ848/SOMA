import { EducationalContent } from '../../types';

export const ibuprofenGuideContent: EducationalContent = {
  id: 'topic-medication-ibuprofen',
  type: 'topic',
  name: 'Ibuprofen Guide',
  nameEs: 'Guia de Ibuprofeno',
  levels: {
    level1: {
      title: 'Ibuprofen: Relieving Pain and Reducing Inflammation',
      titleEs: 'Ibuprofeno: Aliviando el Dolor y Reduciendo la Inflamacion',
      content: `
Ibuprofen is a medicine that helps with pain, fever, and swelling. You may know it by the brand names
Advil or Motrin. It is available over the counter (without a prescription) and in stronger prescription doses.

**How to Take Ibuprofen**
- Take it with food or a full glass of water to protect your stomach.
- Follow the label directions for dosing. For adults, the usual OTC dose is 200-400 mg every 4-6 hours.
- Do not take more than 1,200 mg per day without your doctor telling you to (prescription doses can be higher).
- Take the lowest dose that works for you, for the shortest time needed.

**What Ibuprofen Treats**
- Headaches and migraines.
- Muscle aches and back pain.
- Menstrual cramps.
- Toothaches.
- Fever.
- Arthritis pain and swelling.
- Minor injuries (sprains, strains).

**Common Side Effects**
- Stomach pain, heartburn, or nausea — taking it with food helps.
- Dizziness.
- Mild headache.

**Important Warnings**
- Do not take ibuprofen on an empty stomach. It can cause stomach ulcers and bleeding.
- Tell your doctor if you have kidney problems, heart problems, or high blood pressure.
- Do not take ibuprofen if you are in the last 3 months of pregnancy.
- Be careful about taking ibuprofen with blood thinners or other pain medicines.
- Avoid alcohol while taking ibuprofen — it increases stomach bleeding risk.
- If you have stomach pain that does not go away, black or bloody stools, or vomit blood, get
  medical help right away.

**Tips for Success**
- Use the lowest dose for the shortest time possible.
- For ongoing pain, talk to your doctor instead of using ibuprofen every day.
- Do not combine with other NSAIDs (like naproxen) — this increases side effects.
- Acetaminophen (Tylenol) can be alternated with ibuprofen for better pain control.
      `,
      patientCounselingPoints: [
        'Always take ibuprofen with food or milk to protect your stomach.',
        'Do not exceed 1,200 mg daily without a doctor prescription. Follow label directions.',
        'Stop ibuprofen and seek medical help if you have black stools, bloody vomit, or severe stomach pain.',
        'Avoid alcohol while taking ibuprofen as it increases stomach bleeding risk.',
        'Tell your doctor about kidney or heart conditions before taking ibuprofen regularly.',
        'Do not combine with other NSAIDs like naproxen (Aleve) — use only one at a time.'
      ],
      keyTerms: [
        { term: 'NSAID', definition: 'Non-Steroidal Anti-Inflammatory Drug — the class of medicine ibuprofen belongs to. It reduces pain, fever, and swelling.' },
        { term: 'Inflammation', definition: 'Your body response to injury or infection that causes redness, swelling, heat, and pain. Ibuprofen reduces this.' },
        { term: 'Over-the-Counter (OTC)', definition: 'Medicine you can buy without a prescription. Ibuprofen is available OTC at lower doses.' },
        { term: 'Stomach Ulcer', definition: 'A sore on the lining of your stomach. Taking ibuprofen without food or for too long can cause ulcers.' },
        { term: 'GI Bleeding', definition: 'Bleeding in the stomach or intestines. A serious risk with regular ibuprofen use.' }
      ]
    },
    level2: {
      title: 'Understanding Ibuprofen: An NSAID Pain Reliever',
      titleEs: 'Entendiendo el Ibuprofeno: Un Analgesico AINE',
      content: `
Ibuprofen is one of the most widely used medications worldwide. It belongs to the NSAID class and
provides three benefits: pain relief (analgesic), fever reduction (antipyretic), and anti-inflammatory effects.

**How Ibuprofen Works**
When your body is injured or infected, it produces chemicals called prostaglandins. These chemicals:
- Cause inflammation (swelling, redness, heat).
- Sensitize nerve endings, making you feel more pain.
- Raise your body temperature (fever).

Ibuprofen blocks the enzyme COX (cyclooxygenase) that produces prostaglandins. By reducing
prostaglandin production, ibuprofen decreases pain, fever, and inflammation.

There are two forms of COX:
- **COX-1**: Present all the time. Protects your stomach lining and helps kidneys function.
- **COX-2**: Produced mainly at sites of inflammation.
Ibuprofen blocks both COX-1 and COX-2, which is why it reduces inflammation but can also harm your stomach.

**Dosing Information**
- OTC adults: 200-400 mg every 4-6 hours (max 1,200 mg/day).
- Prescription: Up to 800 mg every 6-8 hours (max 3,200 mg/day).
- Children (6 months+): 5-10 mg/kg every 6-8 hours.
- Take with food to minimize GI effects. Use the lowest effective dose for the shortest duration.

**GI Risks**
NSAID gastropathy is the most common serious adverse effect:
- Risk factors: age >65, history of ulcer or GI bleeding, concurrent corticosteroids, anticoagulants,
  or aspirin, alcohol use, H. pylori infection.
- Prevention: Take with food, use PPI co-therapy for high-risk patients, use lowest effective dose.
- Symptoms: Stomach pain, heartburn, nausea, black stools (melena), vomiting blood.

**Kidney Considerations**
Prostaglandins help maintain blood flow to the kidneys. Blocking them with ibuprofen can:
- Reduce kidney blood flow, causing fluid retention and elevated blood pressure.
- Worsen existing kidney disease.
- Risk increases with dehydration, heart failure, and concurrent ACE inhibitors or diuretics.
- Stay well hydrated when taking ibuprofen.
- Avoid regular use if you have kidney problems.

**Cardiovascular Risks**
FDA black box warning: NSAIDs increase the risk of heart attack and stroke:
- Risk increases with higher doses and longer duration.
- Present even in the first weeks of use.
- Greatest risk in patients with pre-existing heart disease.
- Low-dose, short-duration use for acute pain is generally safe in otherwise healthy individuals.

**Important Drug Interactions**
- **Aspirin**: Ibuprofen may block aspirin's cardioprotective effect. Take aspirin 30+ minutes
  before ibuprofen if both are needed.
- **Blood thinners (warfarin)**: Increased bleeding risk.
- **ACE inhibitors/ARBs**: Reduced antihypertensive effect; increased kidney risk.
- **Lithium**: Increased lithium levels.
- **SSRIs**: Increased GI bleeding risk.
      `,
      patientCounselingPoints: [
        'Ibuprofen blocks both COX-1 (stomach protection) and COX-2 (inflammation), which is why taking it with food is important.',
        'If you take daily aspirin for heart protection, take aspirin at least 30 minutes before ibuprofen to maintain cardiac benefit.',
        'Stay well hydrated when using ibuprofen — dehydration increases kidney damage risk.',
        'The FDA warns that all NSAIDs increase heart attack and stroke risk; use the lowest dose for the shortest time.',
        'High-risk patients (elderly, history of ulcer) should discuss PPI co-therapy with their doctor.',
        'Alternating ibuprofen and acetaminophen every 3 hours can provide better pain control with lower individual doses.'
      ],
      keyTerms: [
        { term: 'Cyclooxygenase (COX)', definition: 'The enzyme that produces prostaglandins. Ibuprofen blocks both COX-1 and COX-2 forms.' },
        { term: 'Prostaglandins', definition: 'Chemical messengers that cause inflammation, pain, and fever. Also protect the stomach lining and maintain kidney blood flow.' },
        { term: 'NSAID Gastropathy', definition: 'Stomach and intestinal damage caused by NSAIDs. Ranges from mild dyspepsia to life-threatening bleeding ulcers.' },
        { term: 'Black Box Warning', definition: 'The FDA strongest warning on a drug label. NSAIDs carry black box warnings for cardiovascular and GI risks.' },
        { term: 'COX-1 vs COX-2', definition: 'COX-1 is always present (protects stomach, kidneys). COX-2 appears at inflammation sites. Ibuprofen blocks both.' },
        { term: 'Melena', definition: 'Black, tarry stools indicating GI bleeding. A warning sign requiring immediate medical attention while on NSAIDs.' }
      ]
    },
    level3: {
      title: 'Ibuprofen Pharmacology and NSAID Therapeutics',
      titleEs: 'Farmacologia del Ibuprofeno y Terapeutica con AINEs',
      content: `
Ibuprofen, a propionic acid derivative, is a non-selective COX inhibitor and the prototypical OTC NSAID.
Its favorable efficacy-to-safety ratio at low doses has made it one of the most consumed analgesic
agents globally.

**Mechanism of Action**
Ibuprofen reversibly inhibits both cyclooxygenase isoforms:
- **COX-1 inhibition**: Reduces thromboxane A2 (platelet aggregation), prostaglandin E2 and I2
  (gastric cytoprotection), and renal prostaglandins (maintaining renal perfusion).
- **COX-2 inhibition**: Reduces prostaglandins at inflammation sites, mediating anti-inflammatory,
  analgesic, and antipyretic effects.
- Ibuprofen COX-1/COX-2 selectivity ratio is approximately 1:1 (non-selective).

**Pharmacokinetics**
- **Absorption**: Rapid and complete. Peak plasma: 1-2 hours. Bioavailability >80%.
- **Distribution**: Highly protein-bound (99% to albumin). Vd: 0.12 L/kg.
- **Metabolism**: Extensively hepatic via CYP2C9 (major) and CYP2C8 (minor). Active S-enantiomer;
  R-enantiomer undergoes chiral inversion to S-form (~60%).
- **Elimination**: Primarily renal (90% as metabolites). Half-life: 2-4 hours. No accumulation
  with normal renal function.

**Chirality**
Ibuprofen is marketed as a racemic mixture (R and S enantiomers):
- S(+)-ibuprofen: The pharmacologically active enantiomer responsible for COX inhibition.
- R(-)-ibuprofen: Inactive as COX inhibitor but undergoes unidirectional chiral inversion to
  S-form via alpha-methylacyl-CoA racemase.
- Dexibuprofen (pure S-enantiomer): Available in some countries at half the racemic dose.

**Cardiovascular Risk — Evidence**
- PRECISION trial: Celecoxib non-inferior to ibuprofen and naproxen for cardiovascular outcomes
  in arthritis patients at moderate CV risk. Ibuprofen had highest renal adverse events.
- Naproxen may have lower CV risk among NSAIDs due to sustained COX-1/thromboxane inhibition
  (pseudo-aspirin effect), though evidence is inconsistent.
- Ibuprofen interference with aspirin: Competes for the COX-1 binding site, preventing aspirin
  irreversible acetylation. FDA recommends aspirin 30 min before or 8 hours after ibuprofen.

**Renal Pathophysiology**
Prostaglandins (PGE2, PGI2) maintain afferent arteriolar vasodilation and renal perfusion:
- In states of reduced effective circulating volume (heart failure, cirrhosis, dehydration, CKD),
  renal prostaglandins become critical for GFR maintenance.
- NSAID-induced prostaglandin inhibition can precipitate acute kidney injury (AKI).
- "Triple whammy" combination: NSAID + ACE inhibitor/ARB + diuretic — significantly increases AKI risk.
- Chronic NSAID use: Associated with analgesic nephropathy and CKD progression.

**GI Toxicity — Mechanisms**
- **Topical injury**: Direct mucosal damage from acidic drug in stomach lumen.
- **Systemic COX-1 inhibition**: Reduced prostaglandin-mediated mucus and bicarbonate secretion,
  reduced mucosal blood flow, impaired epithelial cell renewal.
- **Enteropathy**: NSAID damage extends beyond the stomach to the small intestine, often subclinical
  but detectable by capsule endoscopy in 60-70% of chronic NSAID users.

**Risk Mitigation Strategies**
1. Lowest effective dose, shortest duration.
2. PPI co-therapy for high-risk patients (reduces upper GI events by ~60%).
3. Consider COX-2 selective agents (celecoxib) for high GI risk / low CV risk patients.
4. H. pylori testing and treatment before long-term NSAID use.
5. Avoid concurrent aspirin, anticoagulants, corticosteroids when possible.
      `,
      keyTerms: [
        { term: 'S(+)-Ibuprofen', definition: 'The pharmacologically active enantiomer responsible for COX inhibition. R(-)-ibuprofen undergoes chiral inversion to the active S-form.' },
        { term: 'PRECISION Trial', definition: 'Prospective Randomized Evaluation of Celecoxib Integrated Safety vs Ibuprofen Or Naproxen — demonstrated cardiovascular non-inferiority of celecoxib.' },
        { term: 'Triple Whammy', definition: 'The combination of NSAID + ACE inhibitor/ARB + diuretic that significantly increases acute kidney injury risk.' },
        { term: 'Analgesic Nephropathy', definition: 'Chronic kidney disease caused by long-term analgesic (especially NSAID) use, involving papillary necrosis and interstitial nephritis.' },
        { term: 'NSAID Enteropathy', definition: 'Small intestinal damage from NSAIDs, detectable by capsule endoscopy in 60-70% of chronic users, often subclinical.' },
        { term: 'Chiral Inversion', definition: 'The metabolic conversion of inactive R(-)-ibuprofen to active S(+)-ibuprofen via alpha-methylacyl-CoA racemase.' }
      ]
    },
    level4: {
      title: 'Advanced Ibuprofen Therapeutics and Risk Stratification',
      titleEs: 'Terapeutica Avanzada de Ibuprofeno y Estratificacion de Riesgo',
      content: `
This section addresses clinical risk stratification for NSAID prescribing, pharmacogenomic
considerations, and evidence-based approaches to minimizing adverse outcomes.

**Risk Stratification Framework**
Comprehensive assessment before NSAID prescribing:
1. **GI Risk Assessment**: Age >65, prior ulcer/bleeding, concurrent anticoagulant/antiplatelet/
   corticosteroid, high-dose NSAID, H. pylori, alcohol use.
2. **CV Risk Assessment**: History of MI, stroke, PVD, heart failure, hypertension, diabetes,
   hyperlipidemia, smoking.
3. **Renal Risk Assessment**: Baseline eGFR, concurrent ACE/ARB/diuretic, dehydration risk,
   heart failure.

**Clinical Decision Matrix**:
- Low GI + Low CV: NSAID appropriate; standard precautions.
- High GI + Low CV: NSAID + PPI, or consider COX-2 selective agent.
- Low GI + High CV: Naproxen preferred (best CV safety data); avoid ibuprofen.
- High GI + High CV: Avoid NSAIDs if possible. If necessary: celecoxib + PPI with close monitoring.

**Pharmacogenomic Considerations**
- **CYP2C9**: Major metabolizer of ibuprofen. Poor metabolizers (*2, *3 alleles) have 2-4 fold
  increased exposure. Prevalence: ~35% carry at least one reduced-function allele.
  CPIC guidelines suggest reduced doses and avoidance in CYP2C9 poor metabolizers.
- **CYP2C8**: Minor pathway. Polymorphisms may contribute to variability.
- **UGT2B7**: Phase II glucuronidation enzyme. Variants affect ibuprofen acyl glucuronide
  formation, potentially influencing GI toxicity.

**Special Population Considerations**
- **Pediatrics**: FDA-approved from 6 months. 5-10 mg/kg q6-8h. Alternating with acetaminophen
  provides superior fever reduction compared to either agent alone.
- **Elderly**: Highest risk population for all NSAID adverse effects. Use topical NSAIDs when
  possible. If systemic NSAID required: lowest dose, shortest duration, with PPI.
- **Pregnancy**: Contraindicated after 20 weeks (FDA 2020 warning: oligohydramnios from fetal
  renal effects). Acceptable in first trimester with caution.
- **Breastfeeding**: Compatible; minimal infant exposure (<1% of maternal dose).

**Aspirin Interaction: Clinical Management**
- Ibuprofen reversibly blocks the COX-1 active site, preventing aspirin irreversible acetylation.
- Timing matters: Aspirin should be taken >=30 minutes before ibuprofen or >=8 hours after.
- This interaction does NOT apply to enteric-coated aspirin (delayed absorption) — take immediate-
  release aspirin before ibuprofen.
- Consider switching to naproxen or celecoxib for patients on daily aspirin therapy.
- Acetaminophen does not interfere with aspirin.

**Topical Ibuprofen**
Topical formulations offer an alternative for localized pain:
- Significantly lower systemic absorption (5-10% of oral).
- Reduced GI and CV risk compared to oral NSAIDs.
- Effective for osteoarthritis (NICE recommends as first-line before oral NSAIDs).
- Limitations: Only effective for superficial joints; not effective for deep or widespread pain.
      `,
      clinicalNotes: [
        'The GI/CV risk matrix should guide every NSAID prescribing decision: high GI + high CV risk patients should avoid NSAIDs whenever possible.',
        'CYP2C9 poor metabolizers (35% carry reduced-function alleles) have 2-4 fold increased ibuprofen exposure; CPIC guidelines recommend dose reduction.',
        'The ibuprofen-aspirin interaction is clinically significant: aspirin must be taken >=30 minutes before ibuprofen to maintain cardioprotective effect.',
        'FDA 2020 warning extends NSAID contraindication from 30 weeks to 20 weeks of pregnancy due to oligohydramnios risk.',
        'Topical NSAIDs should be first-line for localized musculoskeletal pain, particularly in elderly patients, before escalating to oral agents.',
        'Alternating ibuprofen and acetaminophen in children provides superior fever reduction and is endorsed by AAP guidelines.'
      ],
      keyTerms: [
        { term: 'CYP2C9 Polymorphism', definition: 'Genetic variants in the primary ibuprofen-metabolizing enzyme. Poor metabolizers have significantly increased drug exposure and adverse event risk.' },
        { term: 'GI/CV Risk Matrix', definition: 'A clinical decision framework stratifying NSAID selection based on concurrent gastrointestinal and cardiovascular risk factors.' },
        { term: 'Topical NSAID', definition: 'Ibuprofen gel or cream applied directly to skin over painful joints, providing local effect with minimal systemic exposure.' },
        { term: 'Oligohydramnios', definition: 'Reduced amniotic fluid caused by NSAID-mediated fetal renal prostaglandin inhibition. Basis for FDA contraindication after 20 weeks gestation.' },
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium — provides evidence-based pharmacogenomic dosing guidelines for ibuprofen and other NSAIDs.' },
        { term: 'Acyl Glucuronide', definition: 'A reactive metabolite of ibuprofen formed by UGT2B7 that may contribute to idiosyncratic GI and hepatic toxicity.' }
      ]
    },
    level5: {
      title: 'Ibuprofen: Expert Pharmacotherapeutic and Translational Review',
      titleEs: 'Ibuprofeno: Revision Farmacoterapeutica y Traslacional Experta',
      content: `
This expert analysis examines the molecular pharmacology of COX inhibition, translational research,
and the evolving understanding of NSAID risk-benefit profiles.

**COX Structure-Function and Ibuprofen Binding**
Crystal structure studies reveal:
- COX-1/COX-2 share 60% amino acid homology. The COX-2 active site has a larger side pocket
  due to Val523 (vs. Ile523 in COX-1), explaining selectivity of COX-2 inhibitors.
- Ibuprofen binds in the COX active channel, forming hydrogen bonds with Arg120 and Tyr355.
- Time-dependent, two-step binding: Initial reversible binding followed by conformational
  change creating a tighter complex. This is slower than aspirin's rapid, irreversible acetylation.
- S(+)-ibuprofen has ~160-fold greater potency at COX-1 than R(-)-ibuprofen.

**Aspirin-Ibuprofen Interaction: Molecular Basis**
- Aspirin acetylates Ser530 of COX-1, irreversibly blocking thromboxane A2 synthesis.
- Ibuprofen reversibly occupies the COX-1 active site, physically preventing aspirin access to Ser530.
- This pharmacodynamic interaction occurs at the molecular level within platelets.
- Clinical significance: Loss of aspirin cardioprotection increases thrombotic event risk by 1.5-3x.

**Novel Mechanisms: Beyond COX Inhibition**
Recent research suggests ibuprofen has COX-independent activities:
1. **NF-kB inhibition**: Direct suppression of the NF-kB inflammatory signaling pathway.
2. **Endocannabinoid modulation**: Ibuprofen inhibits fatty acid amide hydrolase (FAAH),
   increasing endogenous cannabinoid (anandamide) levels. This may contribute to analgesic
   efficacy beyond COX inhibition.
3. **PPAR-gamma activation**: Anti-inflammatory effects through peroxisome proliferator-activated
   receptor gamma activation, potentially relevant in neuroinflammation.
4. **Neuroprotection**: Epidemiological association with reduced Alzheimer disease risk, though
   RCTs (ADAPT trial) did not confirm prophylactic benefit.

**Precision Medicine in NSAID Prescribing**
The convergence of pharmacogenomics, biomarkers, and risk prediction models:
- CYP2C9 genotyping: *2 and *3 alleles predict 2-4x increased exposure. CPIC Level A evidence
  supports dose adjustment.
- GI risk biomarkers: Fecal calprotectin for subclinical NSAID enteropathy detection.
- CV risk scores: SCORE2 or Framingham integration into NSAID prescribing decisions.
- Renal biomarkers: NGAL, KIM-1 for early detection of NSAID nephrotoxicity.

**Ibuprofen and COVID-19**
Initial concern (March 2020, French Health Minister advisory) that ibuprofen might worsen COVID-19:
- Theoretical mechanism: COX-2 inhibition reducing anti-inflammatory prostaglandins, or
  upregulation of ACE2 expression.
- Subsequent evidence: Multiple observational studies and WHO position statement found no
  evidence of harm. Ibuprofen can be used for COVID-19 symptom management.

**Environmental Pharmacology**
Ibuprofen is one of the most commonly detected pharmaceuticals in environmental water systems:
- Detected in surface water, groundwater, and drinking water at ng/L to mcg/L concentrations.
- Incomplete removal by conventional wastewater treatment.
- Potential ecotoxicological effects on aquatic organisms.
- Emerging concern for pharmaceutical environmental risk assessment.
      `,
      clinicalNotes: [
        'The molecular basis of the aspirin-ibuprofen interaction involves competitive active site occupancy, physically preventing aspirin access to Ser530 of COX-1.',
        'FAAH inhibition by ibuprofen increases endocannabinoid levels, suggesting analgesic mechanisms beyond COX inhibition that may explain efficacy-dose discrepancies.',
        'CYP2C9 pharmacogenomic testing has CPIC Level A evidence for ibuprofen dose adjustment — implementation in clinical workflows improves safety.',
        'COVID-19 ibuprofen concerns were definitively resolved: WHO and major guidelines confirm safety for symptomatic management.',
        'NSAID environmental contamination represents an emerging pharmaceutical ecology concern with potential regulatory implications.',
        'Novel GI biomarkers (fecal calprotectin) enable detection of subclinical NSAID enteropathy before clinical complications develop.'
      ],
      keyTerms: [
        { term: 'Ser530 Acetylation', definition: 'The specific serine residue in COX-1 that aspirin irreversibly acetylates. Ibuprofen physically blocks aspirin access to this site.' },
        { term: 'FAAH Inhibition', definition: 'Fatty acid amide hydrolase inhibition by ibuprofen, increasing endocannabinoid levels and potentially contributing to analgesic effects beyond COX inhibition.' },
        { term: 'Val523/Ile523', definition: 'The amino acid difference between COX-2 and COX-1 active sites that creates the larger COX-2 side pocket exploited by selective COX-2 inhibitors.' },
        { term: 'ADAPT Trial', definition: 'Alzheimer Disease Anti-inflammatory Prevention Trial — failed to demonstrate NSAID prophylactic benefit despite epidemiological associations.' },
        { term: 'Fecal Calprotectin', definition: 'A biomarker for intestinal inflammation that can detect subclinical NSAID enteropathy before clinical GI complications develop.' },
        { term: 'Pharmaceutical Environmental Contamination', definition: 'Detection of ibuprofen and other drugs in water systems, representing an emerging ecotoxicological and public health concern.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Ibuprofen',
      url: 'https://medlineplus.gov/druginfo/meds/a682159.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'FDA Drug Safety Communication: NSAIDs',
      url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-strengthens-warning-non-aspirin-nonsteroidal-anti-inflammatory-drugs',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-acetaminophen', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-pain-management', type: 'topic', relationship: 'parent' }
  ],
  tags: ['ibuprofen', 'nsaid', 'pain-relief', 'anti-inflammatory', 'fever-reducer', 'analgesic', 'over-the-counter'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
