import { EducationalContent } from '../../types';

export const donorTypes: EducationalContent = {
  id: 'donor-types',
  type: 'concept',
  name: 'Donor Types in Transplantation',
  alternateNames: ['Living Donor', 'Deceased Donor', 'Organ Donor Types'],

  levels: {
    1: {
      level: 1,
      summary: 'Organs for transplant come from two main sources: living donors who are alive when they donate, and deceased donors who have died and donated their organs.',
      explanation: `Organ transplantation saves lives, but where do the organs come from? Understanding donor types is key to understanding transplant medicine.

**Living Donors**

Living donors are people who choose to donate an organ or part of an organ while they are alive. This is an amazing gift that can transform someone's life.

*How it works:*
- A person chooses to donate one of their kidneys or part of their liver
- They undergo surgery to remove the organ
- The organ is transplanted into the recipient
- The donor can live a healthy life with one kidney, and the liver regenerates

*Why living donation?*
- Shorter wait time for recipients
- Better outcomes - organs from living donors often work better and last longer
- The surgery can be planned when both donor and recipient are healthy

**Deceased Donors**

Deceased donors are people who have died and donated their organs. A single deceased donor can save up to 8 lives!

*How it works:*
- The donor suffers brain death - complete and irreversible loss of brain function
- Their heart may still be beating due to life support
- Organs are recovered in a surgical procedure
- Organs are transplanted into recipients on the waiting list

*Types of deceased donation:*
- DBD (Donation after Brain Death): Donor declared brain dead but heart still beating
- DCD (Donation after Circulatory Death): Donor's heart has stopped beating

**Key Points:**
- Kidneys are the most common organ donated by living donors
- Most other organs (heart, lungs, pancreas) come from deceased donors
- Both living and deceased donation save lives
- Blood type must be compatible between donor and recipient
- People of all ages can register to be organ donors`,
      keyTerms: [
        { term: 'Living Donor', definition: 'A person who donates an organ or part of an organ while alive' },
        { term: 'Deceased Donor', definition: 'A person who has died and donated their organs for transplantation' },
        { term: 'Brain Death', definition: 'Complete and irreversible loss of brain function' },
        { term: 'Living Donation', definition: 'Surgery to remove an organ or part of an organ from a living person for transplant' },
        { term: 'Organ Recovery', definition: 'Surgical procedure to remove organs from a deceased donor' }
      ],
      analogies: [
        'Living donation is like giving someone a spare key when you have two - you still have one that works perfectly.',
        'Deceased donation is like someone passing on their library to others when they\'re done with it - their gift of knowledge lives on.'
      ],
      examples: [
        'A parent donates one kidney to their child who has kidney failure.',
        'A person who died in a car accident donates their heart, liver, kidneys, and lungs to save multiple lives.',
        'A husband donates part of his liver to his wife who has liver disease.'
      ],
    },
    2: {
      level: 2,
      summary: 'Donation types include living donation (kidney, partial liver) and deceased donation (DBD, DCD), each with distinct evaluation processes, surgical considerations, and outcomes.',
      explanation: `Understanding the differences between living and deceased donation is essential for transplant medicine.

**Living Donation in Detail**

*Organs that can be donated while living:*
- **Kidneys**: Most common living donation. People can live normal, healthy lives with one kidney.
- **Liver**: The liver regenerates. A portion can be donated and grows back in both donor and recipient.

*Living donor evaluation:*
- Comprehensive medical and psychological assessment
- Blood tests to check kidney/liver function
- Imaging to examine organ anatomy
- Evaluation of surgical risk
- Psychological screening to ensure voluntary, informed consent

*Benefits of living donation:*
- Better outcomes: Living donor kidneys work better and last longer (~50% longer lifespan)
- Shorter wait time: No need to wait on the national list
- Planned surgery: Can be scheduled when both donor and recipient are healthy
- Immediate function: Organ starts working right away

**Deceased Donation Types**

**DBD - Donation after Brain Death**
- Donor has suffered brain death but heart is still beating
- Organs are being perfused with blood until recovery
- Better organ preservation and function
- Can recover multiple organs including heart, lungs, liver, kidneys, pancreas, intestines

**DCD - Donation after Circulatory Death**
- Donor dies after withdrawal of life support
- Heart stops beating
- Organ recovery happens quickly (minutes) after death
- Higher rates of delayed graft function
- Expands the donor pool

*Key differences:*
| Factor | DBD | DCD |
|--------|-----|-----|
| Heart status | Beating | Stopped |
| Organ recovery | With perfusion | Warm ischemia time |
| Outcomes | Better | Slightly worse |
| Donor pool | Smaller | Larger |

**Living Donor Surgery**

*Kidney donation:*
- Usually done laparoscopically (small incisions)
- Hospital stay: 1-2 days
- Recovery: 2-6 weeks to normal activities
- Long-term: Normal life expectancy with one kidney

*Liver donation:*
- Major surgery (larger incision)
- Hospital stay: 5-7 days
- Recovery: 6-12 weeks
- Remnant liver regenerates to full volume in weeks

**Special Considerations**

*Living donor priority:* If a living donor ever needs a transplant themselves, they receive priority on the waiting list.

*Right vs. Left kidney:* The left kidney is usually preferred for donation because it has a single renal artery and longer vein, making the transplant surgery technically easier.

*Left vs. Right liver lobe:* Left lateral segment donation (usually to a child) is safer for donors. Right lobe donation (to an adult) carries higher surgical risk but provides more liver tissue for the recipient.`,
      keyTerms: [
        { term: 'DBD', definition: 'Donation after Brain Death - organs recovered from donors declared brain dead' },
        { term: 'DCD', definition: 'Donation after Circulatory Death - organs recovered after heart stops beating' },
        { term: 'Regeneration', definition: 'Ability of the liver to grow back after part is removed' },
        { term: 'Nephrectomy', definition: 'Surgical removal of a kidney' },
        { term: 'Hepatectomy', definition: 'Surgical removal of part or all of the liver' }
      ],
      analogies: [
        'DCD is like harvesting vegetables after the farm shuts down - you have to work quickly before everything spoils.',
        'DBD is like harvesting while the farm is still running - better conditions but more limited opportunities.'
      ],
      examples: [
        'A living donor kidney transplant allows a recipient to avoid years of dialysis while waiting on the deceased donor list.',
        'DCD kidneys may have delayed function (taking longer to "wake up") compared to DBD kidneys.'
      ],
    },
    3: {
      level: 3,
      summary: 'Donors are classified by criteria (SCD, ECD, KDPI) and source (living related/unrelated, DBD, DCD), with careful evaluation of medical, surgical, and psychosocial factors.',
      explanation: `Donor classification and evaluation are fundamental to transplant medicine, affecting outcomes and allocation.

**Deceased Donor Classification**

**Standard Criteria Donors (SCD)**
- Age < 50 years
- No significant medical problems
- No history of hypertension, diabetes, or kidney disease
- No viral infections (HIV, hepatitis B/C)
- Lowest risk for complications
- Best outcomes

**Extended Criteria Donors (ECD)**
- Age > 60 years OR
- Age 50-59 with two of:
  - History of hypertension
  - Serum creatinine > 1.5 mg/dL
  - Cerebrovascular cause of death
- Higher risk of graft failure
- Still provides survival advantage over dialysis
- Important option for older recipients

**KDPI (Kidney Donor Profile Index)**
- Continuous score from 0-100%
- Incorporates multiple donor factors:
  - Age, height, weight
  - History of hypertension, diabetes
  - Cause of death
  - Serum creatinine
  - HLA mismatch
  - Donation after circulatory death
- Higher KDPI = lower expected kidney function
- Used for kidney allocation matching
- High KDPI kidneys often go to older recipients

**Donation after Circulatory Death Categories (Maastricht)**

| Category | Description |
|----------|-------------|
| I | Dead on arrival, unsuccessful resuscitation |
| II | Unsuccessful resuscitation in hospital |
| III | Awaiting cardiac arrest (planned) |
| IV | Cardiac arrest after brain death |
| V | Patients in brain stem death |

**Living Donor Relationships**

*Living Related Donors:*
- Biologically related to recipient
- Parent to child
- Sibling to sibling
- Better genetic matching (similar HLA)
- May have unknown shared genetic risks

*Living Unrelated Donors:*
- Not biologically related
- Spouses, life partners
- Friends
- Altruistic strangers (non-directed)
- Outcomes similar to related donors

*Directed vs. Non-Directed:*
- **Directed**: Donor chooses specific recipient
- **Non-Directed**: Donor gives to stranger or through paired donation

**Kidney Paired Donation (KPD)**

Solves incompatibility between donor-recipient pairs:

1. Two or more incompatible pairs are identified
2. Donors are swapped between recipients
3. Creates compatible matches
4. Can be chains starting with non-directed donor
5. Increases transplant opportunities for sensitized patients

**Living Donor Evaluation**

*Medical criteria:*
- Age 18-70 (varies by center)
- Normal kidney function (GFR > 80)
- No proteinuria
- Controlled blood pressure
- No active infections
- No significant cardiovascular disease
- No history of kidney stones (or acceptable risk)

*Surgical/anatomic criteria:*
- Single renal artery preferred
- Normal kidney anatomy
- Adequate liver volume (>30% remnant for liver donors)
- No severe fatty liver disease

*Psychosocial criteria:*
- Voluntary, informed decision
- No coercion
- Adequate social support
- Understanding of risks and benefits
- No active substance abuse
- Financial stability

**Absolute Contraindications to Living Donation**
- Uncontrolled hypertension
- Diabetes mellitus
- Active malignancy
- Significant proteinuria
- Kidney stones with recurrence
- Severe cardiovascular disease
- Active psychiatric illness
- Inability to give informed consent`,
      keyTerms: [
        { term: 'SCD', definition: 'Standard Criteria Donor - deceased donor under 50 with no significant medical issues' },
        { term: 'ECD', definition: 'Extended Criteria Donor - donor over 60 or 50-59 with specific risk factors' },
        { term: 'KDPI', definition: 'Kidney Donor Profile Index - score from 0-100 measuring donor quality' },
        { term: 'Non-Directed Donor', definition: 'Living donor who donates to a stranger without specifying recipient' },
        { term: 'Paired Donation', definition: 'Exchange between incompatible donor-recipient pairs to achieve compatibility' }
      ],
      clinicalNotes: 'ECD kidneys have higher failure risk but offer survival advantage over dialysis. KDPI matching allocates higher-quality kidneys to younger recipients. KPD chains can involve dozens of transplants from one altruistic donor.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive donor evaluation includes infectious disease testing (HIV, hepatitis, CMV, EBV), HLA typing, crossmatching, and assessment of anatomic and surgical risk factors.',
      explanation: `Donor evaluation and risk assessment require systematic approaches to ensure safety for both donor and recipient.

**Deceased Donor Evaluation**

**Infectious Disease Testing**
- HIV-1/2 (antibody and NAT)
- Hepatitis B (HBsAg, anti-HBc, NAT)
- Hepatitis C (antibody and NAT)
- Syphilis (RPR or VDRL)
- Cytomegalovirus (CMV) IgG/IgM
- Epstein-Barr virus (EBV) IgG/IgM
- West Nile virus (seasonal/regional)
- Tuberculosis screening (when indicated)

**Public Health Service (PHS) Increased Risk Donors**
Have behaviors that may increase infection risk:
- Men who have sex with men (MSM) in past 12 months
- IV drug use in past 12 months
- Incarceration in past 12 months
- Sex for money or drugs in past 12 months
- History of sex with person above

*NAT (Nucleic Acid Testing)*
- Detects viral genetic material
- Shortens window period
- Identifies early infections
- Standard for HIV, HCV testing

**Deceased Donor Assessment**
- Medical history review
- Social history (risk behaviors)
- Laboratory testing
- Imaging (CT angiography, echocardiography)
- Bronchoscopy (for lung donors)
- Liver biopsy (for certain liver donors)
- Kidney biopsy (for certain kidney donors)

**Crossmatching**
*Final compatibility test:*
- Mixes recipient serum with donor lymphocytes
- Tests for pre-formed anti-donor antibodies
- Positive crossmatch = high rejection risk
- Negative crossmatch = compatible
- Virtual crossmatch using HLA typing

**Living Donor Medical Evaluation**

*Comprehensive metabolic panel*
- Kidney function (creatinine, GFR)
- Liver function (AST, ALT, bilirubin)
- Electrolytes
- Glucose

*Complete blood count*
- Hemoglobin, hematocrit
- White blood cell count
- Platelet count

*Urinalysis*
- Protein
- Blood
- Glucose
- Microalbumin/creatinine ratio

*Imaging*
- CT angiography of kidneys/liver
- Assess vascular anatomy
- Count renal arteries
- Measure liver volume
- Detect stones or abnormalities

*Cardiovascular evaluation*
- ECG for all donors
- Stress testing based on age/risk (age > 45-50)
- Echocardiography if indicated
- Coronary angiography for high-risk donors

*Pulmonary evaluation*
- Chest X-ray
- Pulmonary function tests (for lung donors)
- ABG (for lung donors)

**Living Donor Surgical Risks**

*Kidney donation mortality:*
- Overall: ~0.03%
- Similar to appendectomy risk
- Lower than many other surgeries

*Liver donation mortality:*
- Overall: 0.2-0.5%
- Higher than kidney donation
- Right lobe > left lobe risk

*Long-term risks:*
- Slightly higher hypertension risk
- Slightly higher preeclampsia risk
- No decrease in life expectancy
- GFR decreases slightly but remains normal

**Living Donor GFR Measurement**
*For borderline kidney function:*
- Iothalamate clearance
- iothalamate or iohexol clearance
- 24-hour urine creatinine clearance
- Nuclear medicine GFR measurement
- Required for GFR 60-80 mL/min

**Anatomic Considerations**

*Kidney anatomy variations:*
- Multiple renal arteries (20-30%)
- Multiple renal veins
- Retroaortic left renal vein
- Horseshoe kidney (contraindicated)
- Solitary kidney (previous nephrectomy)

*Liver anatomy considerations:*
- Remnant liver volume > 30%
- Biliary anatomy variations
- Vascular anatomy (portal vein, hepatic artery)
- Steatosis (fatty liver) assessment
- Right lobe > left lobe surgical risk`,
      keyTerms: [
        { term: 'CDC High Risk Donor', definition: 'Donor with behaviors increasing risk of undetected infections (formerly PHS increased risk)' },
        { term: 'NAT', definition: 'Nucleic Acid Testing - detects viral genetic material, shortens window period' },
        { term: 'Window Period', definition: 'Time between infection and when test can detect the infection' },
        { term: 'Remnant Liver', definition: 'Amount of liver remaining in donor after partial liver donation' },
        { term: 'Renal Artery Anomalies', definition: 'Variations in kidney blood vessel anatomy that affect surgical approach' }
      ],
      clinicalNotes: 'CMV-negative recipients receiving CMV-positive organs need prophylaxis. Living donor GFR must be >80 (or age-adjusted). Remnant liver must be >30% of total volume. APOL1 testing in African American donors identifies higher ESRD risk.',
    },
    5: {
      level: 5,
      summary: 'Advances include ex vivo perfusion (NMP, HMP) for organ resuscitation, normothermic regional perfusion, use of HCV-positive organs with DAA therapy, HIV-positive transplantation (HOPE Act), and emerging xenotransplantation.',
      explanation: `Advanced donor management and emerging technologies are expanding the donor pool and improving outcomes.

**Ex Vivo Perfusion Technologies**

**Normothermic Machine Perfusion (NMP)**
- Maintains organ at body temperature (37°C)
- Provides oxygenated blood with nutrients
- Allows organ metabolism and function
- Enables assessment of organ function
- Permits therapeutic interventions
- Reduces ischemia-reperfusion injury
- Improves outcomes for marginal donors

*Applications:*
- Kidneys: Assessing function, reducing DGF
- Livers: Reducing biliary complications
- Lungs: EVLP for assessment and rehabilitation
- Hearts: Resuscitating marginal donors

**Hypothermic Machine Perfusion (HMP)**
- Maintains organ at 4-8°C
- Slows metabolism but provides perfusion
- Reduces cold ischemia injury
- Cheaper and simpler than NMP
- Standard of care for many kidneys
- Reduces delayed graft function

**Normothermic Regional Perfusion (NRP)**
- In situ perfusion after DCD declaration
- Establishes circulation to abdominal organs
- Reduces warm ischemia injury
- Improves organ quality
- Increases organ utilization
- Can reduce kidney discard rates by 50%

**Hepatitis C-Positive Organs**

*Direct-Acting Antiviral (DAA) Therapy:*
- Cures HCV infection in >95% of cases
- 8-12 week oral treatment
- Minimal side effects
- Allows safe use of HCV-positive donors

*Indications:*
- HCV-negative recipients with long wait times
- HCV-negative recipients at high mortality risk
- All HCV-positive recipients

*Outcomes:*
- Excellent patient survival
- Excellent graft survival
- No long-term HCV complications
- Increases transplant access

*Approach:*
- Transplant HCV-positive organ
- Monitor for HCV transmission (PCR)
- Treat with DAA when HCV detected
- Prophylactic treatment also effective

**HIV-Positive Transplantation (HOPE Act)**

*Legal framework:*
- HIV Organ Policy Equity Act (2013)
- Allows HIV-positive to HIV-positive transplantation
- Requires research protocol
- FDA-approved protocols available

*Outcomes:*
- Similar outcomes to HIV-negative transplants
- No HIV progression with appropriate therapy
- Addresses organ shortage for HIV-positive patients

**APOL1 and Genetic Risk Assessment**

*APOL1 risk variants:*
- G1 and G2 alleles
- Associated with increased ESRD risk in African Americans
- Two risk alleles = high-risk genotype
- 2x higher risk of ESRD after donation

*Clinical implications:*
- APOL1 testing for African American living donors
- High-risk genotype may contraindicate donation
- Important for informed consent
- Identifies donors at higher long-term risk

**Extended Criteria Donors**

*Marginal donor utilization:*
- Machine perfusion improves outcomes
- Careful recipient selection
- Dual kidney transplantation (both kidneys to one recipient)
- Older donor to older recipient matching

*Fatty liver assessment:*
- Macrovesicular steatosis threshold
- Biopsy for >30% steatosis
- NMP can assess functional impact

**Donor-Derived Cell-Free DNA (dd-cfDNA)**
- Biomarker for graft injury
- Detects rejection earlier
- Distinguishes rejection from other causes
- May reduce need for biopsy
- Complements other monitoring

**Paired Donation Advances**

*Non-simultaneous extended altruistic donor (NEAD) chains:*
- One altruistic donor starts chain
- Chain continues indefinitely
- Bridge donors maintain the chain
- Maximizes transplants from one altruistic donor

*Desensitization with paired donation:*
- Combined approach
- Removes antibodies and finds compatible donor
- Enables highly sensitized patients to receive transplant

**Xenotransplantation**

*Genetically modified pig organs:*
- CRISPR gene editing
- Remove pig antigens (alpha-gal)
- Add human regulatory proteins
- Prevent hyperacute rejection
- Clinical trials underway

*First pig-to-human heart transplant:*
- Performed 2022
- Patient survived 2 months
- Proof of concept established
- Future may address organ shortage

**Ethical Considerations**

*Living donor autonomy:*
- Right to assume risks
- Protection from coercion
- Independent living donor advocate
- Informed consent process

*Justice in allocation:*
- Fair distribution of scarce organs
- Special consideration for pediatric patients
- Balancing utility (outcomes) and justice (access)

*Financial considerations:*
- Removing financial barriers
- Reimbursement for lost wages
- Travel and lodging support
- Protection for donor insurance coverage`,
      keyTerms: [
        { term: 'HOPE Act', definition: 'HIV Organ Policy Equity Act - allows transplantation from HIV-positive donors to HIV-positive recipients' },
        { term: 'NRP', definition: 'Normothermic Regional Perfusion - in situ perfusion after circulatory death to condition organs' },
        { term: 'DAA', definition: 'Direct-Acting Antiviral medications that cure hepatitis C infection' },
        { term: 'Viability Assessment', definition: 'Testing organs during perfusion to determine if they are suitable for transplant' },
        { term: 'Discard Rate', definition: 'Percentage of recovered organs that are not transplanted' }
      ],
      clinicalNotes: 'NRP can reduce DCD kidney discard by 50%. EVLP rehabilitates marginal lungs. HCV+ organs in HCV- recipients: excellent outcomes with DAA. APOL1 high-risk = 2x ESRD risk post-donation. HOPE Act enables HIV+ to HIV+ transplant.',
    },
  },

  media: [
    {
      id: 'donor-types-diagram',
      type: 'diagram',
      filename: 'donor-types.svg',
      title: 'Types of Organ Donors',
      description: 'Diagram showing living and deceased donor types',
    },
  ],
  citations: [
    {
      id: 'kidney-donor-evaluation',
      type: 'article',
      title: 'The Living Kidney Donor Profile: An Overview',
      authors: ['Segev DL'],
      source: 'Transplantation',
    },
  ],
  crossReferences: [
    { targetId: 'transplant-overview', targetType: 'concept', relationship: 'parent', label: 'Transplant Overview' },
    { targetId: 'immunology-basics', targetType: 'concept', relationship: 'related', label: 'Transplant Immunology' },
  ],
  tags: {
    systems: ['urinary', 'hepatobiliary', 'cardiovascular', 'pulmonary', 'gastrointestinal'],
    topics: ['transplantation', 'surgery', 'ethics', 'immunology'],
    keywords: ['living donor', 'deceased donor', 'DBD', 'DCD', 'kidney donation', 'liver donation', 'paired donation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
