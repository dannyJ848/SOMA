import { EducationalContent } from '../../types';

export const transplantTypes: EducationalContent = {
  id: 'transplant-types',
  type: 'concept',
  name: 'Types of Organ Transplants',
  alternateNames: ['Organ Transplant Types', 'Solid Organ Transplantation'],

  levels: {
    1: {
      level: 1,
      summary: 'Organ transplants can replace failing kidneys, liver, heart, lungs, pancreas, or intestines with healthy organs from donors, saving thousands of lives each year.',
      explanation: `When an organ fails, doctors can replace it with a healthy organ from a donor. This surgery is called organ transplantation.

**Most Common Organ Transplants**

**Kidney Transplant**
- Most common type of transplant
- Can come from living or deceased donors
- People can live normal lives with one kidney
- Helps people whose kidneys have stopped working

**Liver Transplant**
- Replaces a failing liver
- Can use part of a liver from a living donor
- The liver regenerates (grows back) in both donor and recipient
- Treats liver failure and some liver cancers

**Heart Transplant**
- Replaces a failing heart
- For people with severe heart failure
- Only from deceased donors
- Can extend life by many years

**Lung Transplant**
- Replaces diseased lungs
- Can be one lung or both lungs
- Sometimes combined with heart transplant
- Treats advanced lung diseases

**Pancreas Transplant**
- Usually done for people with type 1 diabetes
- Can allow independence from insulin
- Often done with kidney transplant
- Helps control blood sugar

**Intestine Transplant**
- Rare but life-saving
- For people whose intestines don't work
- Often needed for short gut syndrome
- Allows normal eating instead of IV nutrition

**Key Facts:**
- One donor can save up to 8 lives
- Some organs can come from living donors
- Transplants require lifelong medications
- Success rates are improving every year`,
      keyTerms: [
        { term: 'Kidney Transplant', definition: 'Surgery to place a healthy kidney into a person whose kidneys no longer function properly' },
        { term: 'Liver Transplant', definition: 'Replacement of a diseased liver with a healthy liver from another person' },
        { term: 'Heart Transplant', definition: 'Surgery to remove a damaged heart and replace it with a healthy donor heart' },
        { term: 'Lung Transplant', definition: 'Surgery to replace one or both diseased lungs with healthy lungs from a donor' },
        { term: 'Pancreas Transplant', definition: 'Surgery to place a healthy pancreas into a person with diabetes' }
      ],
      analogies: [
        'An organ transplant is like replacing a broken engine in a car - when the original can\'t be fixed, you install a new one.',
        'The liver is like a starfish that can regrow its arm - a partial liver transplant grows into a full liver.',
      ],
      examples: [
        'A person with kidney failure receives a kidney from their sister.',
        'Someone with liver disease gets part of a liver from a living donor.',
        'A child with heart failure receives a new heart from a deceased donor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Each organ type has specific indications, surgical considerations, and outcomes. Kidney transplants have the best outcomes, while multi-organ transplants address complex failure.',
      explanation: `Different organs are transplanted for different reasons, with unique procedures and considerations for each.

**Kidney Transplantation**

*Indications:*
- End-stage renal disease (ESRD)
- Diabetes complications
- High blood pressure damage
- Genetic kidney diseases
- Glomerulonephritis

*Types:*
- Living donor (better outcomes, shorter wait)
- Deceased donor (standard waiting list)
- Pre-emptive (before dialysis starts)

*Outcomes:*
- Highest success rate among organ transplants
- 95% one-year survival
- Average graft life: 10-15 years

**Liver Transplantation**

*Indications:*
- Cirrhosis from alcohol, hepatitis, fatty liver
- Acute liver failure (sudden onset)
- Hepatocellular carcinoma (liver cancer)
- Genetic liver diseases

*Types:*
- Whole liver from deceased donor
- Partial liver from living donor (right or left lobe)
- Split liver (one donor liver to two recipients)

*Special consideration - Milan Criteria:*
For liver cancer, transplant is allowed when:
- Single tumor ≤5 cm, OR
- Up to 3 tumors, each ≤3 cm
- No vascular invasion
- No extrahepatic spread

**Heart Transplantation**

*Indications:*
- End-stage heart failure
- Ischemic cardiomyopathy
- Dilated cardiomyopathy
- Some congenital heart defects
- Severe arrhythmias not treatable otherwise

*Bridge to transplant:*
- Ventricular assist devices (VAD)
- Intra-aortic balloon pump
- Medications (inotropes)

**Lung Transplantation**

*Types:*
- Single lung transplant
- Double lung transplant
- Heart-lung transplant (rare)

*Indications:*
- COPD (most common)
- Pulmonary fibrosis
- Cystic fibrosis
- Pulmonary arterial hypertension

*Choosing single vs. double:*
- Single: COPD, IPF (preserves one lung)
- Double: Suppurative diseases (CF, bronchiectasis)
- Heart-lung: Severe pulmonary hypertension with heart failure

**Pancreas Transplantation**

*Types:*
- SPK (Simultaneous Pancreas-Kidney) - most common
- PAK (Pancreas After Kidney)
- PTA (Pancreas Transplant Alone)

*Indications:*
- Type 1 diabetes with hypoglycemia unawareness
- Diabetes with kidney failure (SPK)
- Poor quality of life despite insulin therapy

**Intestine Transplantation**

*Indications:*
- Short gut syndrome (insufficient intestine)
- TPN-associated liver disease
- Line infections (infections from IV nutrition)
- Motility disorders

*Challenges:*
- Highest rejection rates
- Most complications
- Shortest graft survival
- Last resort option

*Multi-Organ Transplants:*
- SLK (Simultaneous Liver-Kidney)
- SPK (Simultaneous Pancreas-Kidney)
- Heart-lung
- Multivisceral (stomach, intestine, liver, pancreas)`,
      keyTerms: [
        { term: 'Single Lung Transplant', definition: 'Replacement of one diseased lung with a donor lung' },
        { term: 'Double Lung Transplant', definition: 'Replacement of both lungs with donor lungs' },
        { term: 'SPK', definition: 'Simultaneous Pancreas-Kidney transplant - both organs transplanted at the same time' },
        { term: 'Short Gut Syndrome', definition: 'Condition where the intestine cannot absorb enough nutrients, often requiring transplant' },
        { term: 'VAD', definition: 'Ventricular Assist Device - mechanical pump that can support patients waiting for heart transplant' }
      ],
      analogies: [
        'Split liver transplant is like dividing a pizza to feed two people - each portion still works as a complete organ.',
        'VAD is like a spare tire that keeps your car moving until you can get a proper replacement.'
      ],
      examples: [
        'A diabetic with kidney failure receives both a kidney and pancreas (SPK transplant).',
        'A patient with cystic fibrosis gets a double lung transplant because both lungs are affected.',
        'Someone with severe COPD may only need a single lung transplant.'
      ],
    },
    3: {
      level: 3,
      summary: 'Specific indications, contraindications, and evaluation criteria vary by organ type, with considerations like MELD scoring for liver, PVR assessment for heart, and Milan criteria for liver cancer.',
      explanation: `Each organ transplant type has specific indications, contraindications, and evaluation criteria.

**Kidney Transplant - Detailed**

*Indications:*
- ESRD with GFR <15 mL/min
- Diabetic nephropathy
- Hypertensive nephrosclerosis
- Glomerulonephritis
- Polycystic kidney disease
- Reflux nephropathy

*Contraindications:*
- Active infection
- Untreated malignancy
- Severe cardiovascular disease
- Inability to comply with medications
- Active substance abuse

*Timing:*
- Pre-emptive (before dialysis) preferred
- Shorter dialysis duration = better outcomes
- Consider transplant when GFR <20

**Liver Transplant - Detailed**

*Indications:*
- Cirrhosis with complications (ascites, encephalopathy, variceal bleeding)
- Acute liver failure (King's College criteria)
- Hepatocellular carcinoma (within Milan criteria)
- Primary biliary cholangitis
- Primary sclerosing cholangitis
- Alpha-1 antitrypsin deficiency

*MELD Score:*
- Prioritizes liver allocation
- Based on bilirubin, INR, creatinine
- Higher MELD = higher priority
- MELD exception points for special cases

*Contraindications:*
- Active alcohol use (<6 months)
- Extrahepatic malignancy
- Uncontrolled sepsis
- Severe pulmonary hypertension
- Advanced liver disease with poor functional status

**Heart Transplant - Detailed**

*Indications:*
- ischemic cardiomyopathy
- Dilated cardiomyopathy
- Refractory arrhythmias
- Congenital heart disease (adults)
- Restrictive cardiomyopathy

*Evaluation:*
- LVEF typically <20%
- Maximum medical therapy failed
- No reversible cause of heart failure
- Adequate psychosocial support

*Contraindications:*
- Fixed PVR >5 Wood units
- Severe COPD
- Active infection
- Recent MI (<3-6 months)
- Severe comorbidities limiting survival

**Lung Transplant - Detailed**

*Indications by disease:*
- COPD: FEV1 <15-20% predicted
- IPF: Declining FVC, oxygen dependent
- Cystic fibrosis: FEV1 <30%, frequent exacerbations
- PAH: Failed medical therapy

*Contraindications:*
- Mechanical ventilation (relative)
- BMI >30-35
- Chest wall deformity
- Ventilator dependence
- Uncontrolled extrapulmonary infection

*Special considerations:*
- Single lung: COPD, IPF
- Double lung: CF, bronchiectasis, PAH
- LAS (Lung Allocation Score) determines priority

**Pancreas Transplant - Detailed**

*Indications:*
- Type 1 diabetes with:
  - Hypoglycemia unawareness
  - Labile diabetes despite optimal management
  - End-stage renal disease (SPK)

*Contraindications:*
- Severe cardiovascular disease
- Uncontrolled diabetes complications
- Active substance abuse
- Inability to manage immunosuppression

**Intestine Transplant - Detailed**

*Indications:*
- Intestinal failure with:
  - TPN complications (liver disease, thrombosis)
  - Recurrent line infections
  - Severe dehydration
  - <5026 remaining small intestine

*Contraindications:*
- Active malignancy
- Severe cardiovascular disease
- Uncontrolled infection
- Fatal comorbidities`,
      keyTerms: [
        { term: 'Milan Criteria', definition: 'Criteria for liver transplant in HCC: single tumor ≤5cm or ≤3 tumors ≤3cm, no vascular invasion' },
        { term: 'ESRD', definition: 'End-Stage Renal Disease - kidney failure requiring dialysis or transplant' },
        { term: 'TPN', definition: 'Total Parenteral Nutrition - intravenous nutrition for intestinal failure' },
        { term: 'Hypoglycemia Unawareness', definition: 'Inability to feel low blood sugar, dangerous complication of diabetes' },
        { term: 'Cardiomyopathy', definition: 'Disease of the heart muscle leading to weakened heart function' }
      ],
      clinicalNotes: 'Kidney: Pre-emptive transplant (pre-dialysis) has best outcomes. Liver: MELD score determines allocation; 6-month sobriety required for alcohol-related disease. Heart: PVR must be <5 Wood units. Lung: Single for COPD/IPF, double for CF/PAH. Pancreas: Best outcomes with SPK.',
    },
    4: {
      level: 4,
      summary: 'Multi-organ transplants, ABO-incompatible transplantation, desensitization protocols, and special techniques like split liver and domino transplants expand transplant options for complex cases.',
      explanation: `Advanced transplant techniques enable transplantation in increasingly complex scenarios.

**Multi-Organ Transplantation**

**SLK (Simultaneous Liver-Kidney)**
Indications:
- Combined liver and kidney failure
- Metabolic diseases affecting both organs
- Liver failure with hepatorenal syndrome
- Polycystic kidney and liver disease

*Outcomes:*
- Better than kidney alone in liver failure
- Liver protects kidney from rejection
- Improved survival vs. sequential transplants

**SPK (Simultaneous Pancreas-Kidney)**
- Standard for type 1 diabetes with ESRD
- Better pancreas graft survival than PAK or PTA
- Pancreas protects kidney from diabetic recurrence

**Heart-Lung**
- Rare (<50 cases/year in US)
- Indicated for Eisenmenger syndrome, PPH with heart failure
- Replaced by lung transplant alone in most cases

**Multivisceral**
- Stomach, duodenum, pancreas, liver, intestine
- For extensive abdominal catastrophe
- High mortality but only option for some

**Domino Transplantation**

*Concept:*
- Remove organ from transplant recipient
- Transplant that organ to another patient
- Uses explanted organ that still has function

*Example - Familial Amyloidosis:*
- Patient receives liver transplant
- Their liver produces abnormal proteins
- But liver functions normally otherwise
- Liver is transplanted into another patient
- Recipient may develop amyloidosis decades later

*Ethical considerations:*
- Informed consent from both parties
- Donor knows they have a genetic disease
- Recipient knows future disease risk
- Generally accepted for select conditions

**Split Liver Transplantation**

*Types:*
- In situ: Split before donor recovery (better outcomes)
- Ex situ: Split after recovery (more common)

*Division:*
- Left lateral segment (child) + right lobe (adult)
- Two adults: left lobe + extended right lobe

*Considerations:*
- Increases donor pool
- Two recipients from one donor
- More complex surgery
- Biliary complications more common

**ABO-Incompatible Transplantation**

*Kidney (most common):*
- Desensitization with:
  - Plasmapheresis (remove antibodies)
  - IVIG (neutralize antibodies)
  - Rituximab (destroy B cells)
  - Bortezomib (destroy plasma cells)
- Similar outcomes to compatible after desensitization
- Expands living donor pool

*Liver (unique):*
- Liver more tolerogenic
- Can sometimes cross ABO without desensitization
- Higher risk of complications but possible

**Retransplantation**

*Indications:*
- Primary graft non-function
- Chronic rejection
- Recurrent disease
- Technical complications

*Outcomes:*
- Higher mortality than primary transplant
- Lower graft survival
- More complications
- Required for some patients

**Pediatric Considerations**

*Unique aspects:*
- Size matching critical
- Growth and development
- Immune system maturation
- Longer expected survival
- Adherence challenges in adolescence

*Special techniques:*
- Reduced-size organs
- Split liver for children
- Living donors preferred

**Mechanical Circulatory Support**

*LVAD (Left Ventricular Assist Device):*
- Bridge to transplant (temporary)
- Destination therapy (permanent)
- Bridge to recovery (some recover)

*Complications:*
- Infection
- Stroke
- Bleeding
- Device malfunction

*Impact on transplant:*
- May contraindicate transplant if severe complications
- Requires careful assessment`,
      keyTerms: [
        { term: 'Domino Transplant', definition: 'Using an organ removed from one transplant recipient for another patient (e.g., liver in familial amyloidosis)' },
        { term: 'Bridge to Transplant', definition: 'Using temporary therapy to keep patient alive until donor organ available' },
        { term: 'Destination Therapy', definition: 'Permanent use of a device (like LVAD) instead of transplant' },
        { term: 'Multivisceral Transplant', definition: 'Transplantation of multiple abdominal organs (stomach, intestine, liver, pancreas)' },
        { term: 'Retransplantation', definition: 'Second transplant after the first graft has failed' }
      ],
      clinicalNotes: 'SLK better than kidney alone in liver failure. Domino liver: recipient may develop amyloidosis decades later. LVAD can be bridge, recovery, or destination. ABOi kidney after desensitization has similar outcomes to compatible transplants.',
    },
    5: {
      level: 5,
      summary: 'Emerging technologies include machine perfusion (NMP, HMP, EVLP), split liver, lobar lung, auto-transplantation, and paired donation chains, expanding donor pool and improving outcomes.',
      explanation: `Transplant medicine continues to evolve with technologies that expand the donor pool and improve outcomes.

**Machine Perfusion Technologies**

*Normothermic Machine Perfusion (NMP):*
- Maintains organ at 37°C
- Allows metabolic activity
- Can assess organ function before transplant
- Enables repair/rehabilitation of organs
- Reduces ischemia-reperfusion injury

*Applications:*
- Kidneys: Reduces delayed graft function
- Livers: Reduces biliary complications
- Lungs: EVLP rehabilitates marginal lungs
- Hearts: Resuscitates marginal donors

*Hypothermic Machine Perfusion (HMP):*
- Maintains organ at 4-8°C
- Cheaper and simpler than NMP
- Standard for many kidney transplants
- Reduces delayed graft function

**Advanced Surgical Techniques**

*Split Liver Transplant:*
- In situ splitting preferred (better outcomes)
- Ex situ splitting more common
- Left lateral segment + right lobe
- Enables adult and child from one donor

*Lobar Lung Transplant:*
- Uses lung lobes for small recipients
- Two living donors give lobes to one recipient
- Enables pediatric lung transplant
- More complex surgery

*Auto-transplantation:*
- Remove organ from patient
- Treat organ outside body
- Reimplant into same patient
- Used for kidney tumors, liver tumors

**Paired Donation Advances**

*NEAD Chains (Non-simultaneous Extended Altruistic Donor):*
- One altruistic donor starts chain
- Chain continues indefinitely
- Bridge donors maintain chain
- Maximizes transplants from one donor
- Longest: 68 transplants from one altruistic donor

*Desensitization + KPD:*
- Combined approach
- Removes antibodies and finds compatible donor
- Enables highly sensitized patients

**HLA Desensitization**

*Protocols:*
- Plasmapheresis: Removes antibodies
- IVIG: Neutralizes antibodies
- Rituximab: Destroys B cells
- Bortezomib: Destroys plasma cells
- Tocilizumab: IL-6 blockade

*Outcomes:*
- Enables transplantation for highly sensitized
- Similar outcomes to non-sensitized
- Higher rejection rates initially
- Requires careful monitoring

**Tolerance Induction**

*Mixed Chimerism:*
- Bone marrow transplant with solid organ
- Donor and recipient immune cells coexist
- Some patients off immunosuppression
- Experimental but promising

*T regulatory cells:*
- Promotes immune tolerance
- Cell therapy trials ongoing
- May reduce immunosuppression needs

**Xenotransplantation**

*Genetically modified pig organs:*
- CRISPR gene editing
- Remove pig antigens (alpha-gal)
- Add human regulatory proteins
- Prevent hyperacute rejection

*First pig-to-human heart:*
- Performed 2022
- Patient survived 2 months
- Proof of concept established
- Future may address organ shortage

*Barriers:*
- Physiologic differences
- Immune rejection
- Zoonotic disease risk
- Ethical considerations

**Biomarkers and Monitoring**

*Donor-derived cell-free DNA (dd-cfDNA):*
- Detects graft injury
- Earlier than traditional markers
- Distinguishes rejection from other causes
- May reduce biopsy need

*Gene expression profiling:*
- Heart transplant (AlloMap)
- Rules out rejection
- Non-invasive monitoring

**Future Directions**

*Ex vivo organ repair:*
- Gene therapy during perfusion
- Stem cell therapies
- Pharmacologic conditioning

*Bioengineering:*
- 3D printed organs
- Decellularized scaffolds
- Organ-on-chip technology

*Immunomodulation:*
- Costimulation blockade
- Targeted immunosuppression
- Tolerance protocols`,
      keyTerms: [
        { term: 'NMP', definition: 'Normothermic Machine Perfusion - keeping organ at body temperature with perfusion' },
        { term: 'HMP', definition: 'Hypothermic Machine Perfusion - keeping organ cold with continuous perfusion' },
        { term: 'Split Liver', definition: 'Dividing one donor liver into two grafts for two recipients' },
        { term: 'Auto-transplantation', definition: 'Removing organ, treating outside body, and reimplanting it' },
        { term: 'Bortezomib', definition: 'Proteasome inhibitor used to kill plasma cells producing anti-HLA antibodies' }
      ],
      clinicalNotes: 'EVLP can rehabilitate marginal lungs. In situ split liver has better outcomes than ex situ. NEAD chains maximize transplants from one altruistic donor. First pig-to-human heart transplant 2022. dd-cfDNA detects rejection earlier than traditional markers.',
    },
  },

  media: [
    {
      id: 'transplant-types-diagram',
      type: 'diagram',
      filename: 'organ-transplant-types.svg',
      title: 'Types of Organ Transplants',
      description: 'Diagram showing different organ transplant types and their indications',
    },
  ],
  citations: [
    {
      id: 'organ-allocation',
      type: 'article',
      title: 'Organ Allocation and Procurement',
      authors: ['UNOS'],
      source: 'United Network for Organ Sharing',
    },
  ],
  crossReferences: [
    { targetId: 'transplant-overview', targetType: 'concept', relationship: 'parent', label: 'Transplant Overview' },
    { targetId: 'donor-types', targetType: 'concept', relationship: 'related', label: 'Donor Types' },
  ],
  tags: {
    systems: ['urinary', 'hepatobiliary', 'cardiovascular', 'pulmonary', 'gastrointestinal', 'endocrine'],
    topics: ['transplantation', 'surgery', 'immunology'],
    keywords: ['kidney transplant', 'liver transplant', 'heart transplant', 'lung transplant', 'MELD', 'SPK'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
