import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const breastExam: WomensHealthContent = {
  id: 'breast-exam',
  title: 'Breast Self-Examination and Clinical Breast Exam',
  category: 'Breast Health',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Breast Self-Examination',
      content: `Breast self-examination (BSE) is a simple technique that helps you become familiar with how your breasts normally look and feel. This familiarity helps you notice any changes that may occur.

**Why Perform Breast Self-Examination?**

Being familiar with your breasts helps you:
- Detect changes early
- Recognize what's normal for you
- Feel more confident about your breast health
- Have informed discussions with your doctor

**When to Perform BSE:**

**Timing Matters:**
- Perform monthly, 3-5 days after your period ends
- Breasts are least tender and lumpy at this time
- If you no longer have periods, choose the same day each month

**How to Perform Breast Self-Examination:**

**Step 1: Visual Inspection**

Stand in front of a mirror with your upper body unclothed:

1. **Arms at your sides**
   - Look at the size, shape, and contour
   - Note any changes from previous exams

2. **Arms raised over your head**
   - Look for the same changes
   - Note any dimpling or puckering

3. **Hands on hips**
   - Press firmly to flex chest muscles
   - Look again for any changes

**What to Look For:**
- Changes in size or shape
- Skin dimpling or puckering
- Nipple changes (inversion, discharge)
- Redness or rash
- Visible lumps

**Step 2: Physical Examination**

You can perform this lying down, standing, or both.

**Lying Down Technique:**
1. Lie flat on your back
2. Place a pillow under your right shoulder
3. Place your right arm behind your head
4. Use your left hand to examine your right breast
5. Use the pads of your three middle fingers (not fingertips)

**Examination Pattern:**
- Move your fingers in small, dime-sized circles
- Use different levels of pressure: light, medium, and firm
- Cover the entire breast from collarbone to rib cage
- Don't forget the area under your armpit
- Repeat on the other side

**Step 3: Check Your Nipples**

- Gently squeeze each nipple
- Look for any discharge
- Note the color and amount if discharge is present

**Step 4: Shower Examination**

Many women find it easiest to do this exam in the shower:
- Skin is wet and soapy
- Fingers glide more smoothly
- Follow the same pattern as above

**What to Report to Your Doctor:**

Contact your healthcare provider if you notice:
- A new lump or thickening
- Change in breast size or shape
- Dimpling or puckering of the skin
- Nipple changes or discharge
- Redness or scaling
- Persistent pain

**Remember:**

- Most breast lumps are NOT cancer
- Don't panic if you find something
- Many changes are normal or benign
- Prompt evaluation provides peace of mind
- You know your body best

**Important Note:**

Current guidelines emphasize breast **awareness** rather than strict monthly self-exams. The goal is knowing what's normal for you and reporting any changes.`,
      keyPoints: [
        'Breast self-examination helps you become familiar with what\'s normal for your breasts',
        'The best time to examine your breasts is 3-5 days after your period ends',
        'Use the pads of your fingers, not your fingertips, when feeling for lumps',
        'Look for changes in size, shape, skin texture, and nipple appearance',
        'Report any changes to your healthcare provider promptly'
      ],
      vocabulary: [
        { term: 'Breast Self-Examination (BSE)', definition: 'A technique women use to check their breasts for changes or abnormalities' },
        { term: 'Palpation', definition: 'Using the sense of touch to examine the body' },
        { term: 'Discharge', definition: 'Any fluid that comes from the nipple when not breastfeeding' },
        { term: 'Puckering', definition: 'Indentation or pulling in of the breast skin, possibly indicating an underlying mass' }
      ],
      quiz: [
        {
          question: 'When is the best time during the menstrual cycle to perform breast self-examination?',
          options: [
            'Just before menstruation begins',
            '3-5 days after your period ends',
            'During menstruation',
            'Mid-cycle (day 14)'
          ],
          correctAnswer: 1,
          explanation: 'The best time to perform breast self-examination is 3-5 days after your period ends when breasts are least tender and have the least amount of normal lumpiness.'
        },
        {
          question: 'What part of the hand should be used to feel for breast lumps?',
          options: [
            'Fingertips',
            'Pads of the fingers',
            'Palm of the hand',
            'Back of the hand'
          ],
          correctAnswer: 1,
          explanation: 'Use the pads of your three middle fingers to feel for lumps. The pads are more sensitive than the fingertips and better able to detect subtle changes.'
        },
        {
          question: 'What should you do if you find a lump during self-examination?',
          options: [
            'Ignore it and check again next month',
            'Panic and assume it\'s cancer',
            'Report it to your healthcare provider for evaluation',
            'Perform more vigorous self-exams'
          ],
          correctAnswer: 2,
          explanation: 'If you find a lump, report it to your healthcare provider promptly. Most breast lumps are not cancer, but only proper medical evaluation can determine the cause.'
        }
      ]
    },
    {
      level: 2,
      title: 'Clinical Breast Examination',
      content: `Clinical breast examination (CBE) is a physical examination of the breasts performed by a healthcare professional. It's an important part of routine breast health care.

**What is a Clinical Breast Examination?**

A CBE is a careful physical examination of both breasts and the surrounding areas performed by:
- Doctor (primary care, gynecologist, or other)
- Nurse practitioner
- Physician assistant
- Trained nurse

**What Happens During a CBE?**

**1. Health History:**

Your provider will ask about:
- Personal and family history of breast problems
- Current medications
- Hormone use
- Previous breast biopsies
- Risk factors for breast cancer
- Any breast symptoms you've noticed

**2. Visual Inspection:**

While you are sitting up:
- Provider observes breast size and shape
- Checks for symmetry
- Looks for skin changes
- Examines nipple and areola
- Assesses with arms in different positions

**3. Physical Examination:**

*Lying Down:*
- You lie flat on your back
- Provider examines one breast at a time
- Uses systematic approach with fingers
- Covers entire breast area
- Checks armpit (axilla) and collarbone area
- Applies different levels of pressure

*Sitting Up:*
- May repeat exam while you're sitting
- Assesses tissue when upright
- Checks for changes with position

**What Areas Are Examined?**

The examination includes:
- Both breasts (all quadrants)
- Area under the armpits (axilla)
- Area above the collarbone (supraclavicular)
- Area below the collarbone (infraclavicular)
- Area up to the breastbone

**What is the Provider Feeling For?**

- Lumps or masses
- Areas of thickening
- Texture changes
- Tenderness
- Asymmetry between breasts
- Enlarged lymph nodes

**How Long Does a CBE Take?**

- Usually 5-10 minutes
- May take longer if findings need detailed assessment
- Should not feel rushed

**Frequency of Clinical Breast Examination:**

| Age Group | Recommended Frequency |
|-----------|---------------------|
| Women 20-39 | Every 1-3 years |
| Women 40 and older | Annually |
| High-risk women | May be more frequent |

**CBE vs Mammography:**

| Feature | CBE | Mammography |
|---------|-----|-------------|
| Detects | Palpable lumps | Non-palpable abnormalities |
| Performed by | Healthcare provider | Radiology technician |
| Uses | Hands only | X-ray imaging |
| Can find | Larger tumors | Microcalcifications |
| Best for | Symptomatic women | Screening asymptomatic women |

**Limitations of CBE:**

- May miss small or deep tumors
- Operator dependent (varies by skill)
- Cannot detect microcalcifications
- Less sensitive than mammography
- Dense breast tissue harder to examine

**What Happens if Something is Found?**

**Abnormal Finding May Lead To:**
- Diagnostic mammogram
- Breast ultrasound
- Referral to breast specialist
- Short-term follow-up examination
- Biopsy if indicated

**Benign Findings:**

Common findings that are usually benign:
- Fibrocystic changes
- Simple cysts
- Fibroadenomas
- Normal nodularity
- Tenderness related to cycle

**Preparing for Your CBE:**

**Best Timing:**
- Schedule 1-2 weeks after your period starts
- Avoid scheduling during your period
- If no longer menstruating, any time is fine

**What to Bring:**
- List of current medications
- Previous mammogram reports if new provider
- List of any symptoms or concerns
- Family history of breast cancer

**During the Examination:**

- You should feel comfortable
- Ask questions if unsure
- Tell provider about any discomfort
- You may request a chaperone
- You may bring someone with you

**After the Examination:**

Your provider should:
- Discuss findings with you
- Explain any abnormalities
- Recommend follow-up if needed
- Discuss screening recommendations
- Answer your questions

**Documentation:**

Your provider should document:
- Date of examination
- Findings for each breast
- Any abnormalities
- Recommendations made
- Follow-up plans

**Combined Screening Approach:**

Best breast health includes:
- Breast awareness
- Clinical breast exams
- Mammography when appropriate
- Risk assessment
- Healthy lifestyle choices`,
      keyPoints: [
        'Clinical breast examination is performed by a trained healthcare professional',
        'Women 20-39 should have CBE every 1-3 years, and annually after age 40',
        'CBE includes examination of breasts, armpits, and collarbone areas',
        'CBE complements but does not replace mammography screening',
        'The best time for CBE is 1-2 weeks after your period starts'
      ],
      vocabulary: [
        { term: 'Axilla', definition: 'The armpit area, which contains lymph nodes that drain breast tissue' },
        { term: 'Supraclavicular', definition: 'Above the collarbone, an area examined during breast exam' },
        { term: 'Palpable', definition: 'Able to be felt by touch' },
        { term: 'Fibrocystic', definition: 'Having benign breast changes including lumpiness and tenderness' }
      ],
      quiz: [
        {
          question: 'How often should women aged 40 and older have a clinical breast examination?',
          options: [
            'Every 6 months',
            'Every year',
            'Every 2 years',
            'Every 5 years'
          ],
          correctAnswer: 1,
          explanation: 'Women aged 40 and older should have a clinical breast examination annually as part of their routine breast health care.'
        },
        {
          question: 'What areas are examined during a clinical breast examination?',
          options: [
            'Only the breasts',
            'Breasts and nipples only',
            'Breasts, armpits, and collarbone areas',
          ],
          correctAnswer: 2,
          explanation: 'During a clinical breast examination, the provider examines the breasts, the armpit areas (axillae), and the areas above and below the collarbones where lymph nodes are located.'
        },
        {
          question: 'What is the main limitation of clinical breast examination compared to mammography?',
          options: [
            'CBE is more expensive',
            'CBE takes longer to perform',
            'CBE cannot detect non-palpable abnormalities or microcalcifications',
            'CBE cannot be performed on women over 50'
          ],
          correctAnswer: 2,
          explanation: 'The main limitation of CBE is that it can only detect lumps that are large enough to be felt (palpable), whereas mammography can detect abnormalities that cannot be felt, including microcalcifications.'
        }
      ]
    },
    {
      level: 3,
      title: 'Examination Techniques and Findings',
      content: `Proper examination technique and accurate interpretation of findings are essential for effective breast evaluation.

**Breast Examination Techniques:**

**1. Visual Inspection Systematic Approach:**

*Four Arm Positions:*
1. Arms at sides
2. Arms raised overhead
3. Hands pressed on hips (pectoral muscles contracted)
4. Leaning forward (gravity effect)

*What to Assess:*
- Size comparison between breasts
- Shape and contour
- Skin characteristics (color, texture, thickness)
- Nipple position and appearance
- Dimpling or retraction with movement
- Symmetry or asymmetry
- Visible veins
- Skin lesions

**2. Palpation Techniques:**

*Finger Position:*
- Use pads of three middle fingers
- Keep fingers flat, not curved
- Maintain constant contact with skin

*Pressure Levels:*
1. **Light pressure** - for tissue just beneath the skin
2. **Medium pressure** - for tissue in the middle of the breast
3. **Deep pressure** - for tissue near the chest wall

*Movement Patterns:*

| Pattern | Description | Advantages | Disadvantages |
|---------|-------------|------------|---------------|
| Concentric circles | Spiral from nipple outward | Systematic, thorough | May miss tail of Spence |
| Vertical strips | Up and down movements | Covers axillary tail | More time-consuming |
| Wedge pattern | Pie-slice sections | Good for beginners | Can miss axillary area |

**Quadrant Examination:**

The breast is divided into four quadrants:
- **Upper outer** (includes axillary tail)
- **Upper inner**
- **Lower outer**
- **Lower inner**
- Plus central (retroareolar) area

**3. Lymph Node Examination:**

*Axillary Nodes:**
- Support patient's arm with examiner's arm
- Use opposite hand to examine
- Feel along axillary folds
- Note size, texture, mobility

*Supraclavicular Nodes:*
- Above clavicle in supraclavicular fossa
- Use gentle pressure
- Compare sides

**Characterizing Breast Findings:**

**Descriptive Terms for Lumps/Masses:**

| Characteristic | Description | Significance |
|----------------|-------------|---------------|
| Size | Measured in centimeters | Documentation and monitoring |
| Location | Quadrant and distance from nipple | Precise localization |
| Consistency | Soft, firm, hard | Soft usually benign, hard concerning |
| Mobility | Mobile, fixed, partially fixed | Mobile suggests benign |
| Tenderness | Present or absent | Often benign finding |
| Borders | Well-defined vs ill-defined | Well-defined usually benign |
| Skin involvement | Attached or not attached | Attachment concerning |

**BENIGN Characteristics:**
- Mobile (moves freely)
- Well-circumscribed
- Smooth surface
- Rubbery or soft consistency
- Non-tender
- Single or multiple
- May change with menstrual cycle

**CONCERNING Characteristics:**
- Fixed to chest wall or skin
- Irregular borders
- Hard, stony consistency
- Painless (but not always)
- Skin dimpling or retraction
- Nipple inversion or discharge
- Increasing in size

**Specific Findings and Their Significance:**

**Cyclical Nodularity:**
- Changes with menstrual cycle
- Usually bilateral
- Generalized lumpiness
- Most pronounced before menses
- **Significance:** Usually fibrocystic changes, benign

**Dominant Mass:**
- Distinct from surrounding tissue
- Persistent throughout cycle
- Unilateral
- **Significance:** Requires diagnostic evaluation

**Nipple Discharge:**

| Discharge Type | Characteristics | Significance |
|---------------|----------------|---------------|
| Milky | White, bilateral | Prolactin-related, usually benign |
| Serous | Clear or yellow, unilateral | May indicate intraductal papilloma |
| Bloody | Red or brown, unilateral | Concerning, requires evaluation |
| Green | Dark green, often spontaneous | Usually duct ectasia, benign |

**Skin Changes:**

- **Peau d'orange** (orange peel appearance): Edema of skin, concerning
- **Dimpling:** Suggests tethering to underlying tumor
- **Erythema:** Redness, may indicate inflammatory cancer
- **Scaling:** May indicate Paget's disease of nipple

**Nipple Changes:**

- **New inversion:** Concerning if unilateral
- **Deviation:** Points to underlying mass
- **Scaling or crusting:** May indicate Paget's
- **Eczema-like changes:** May be Paget's disease

**Documentation of Findings:**

**Standard Format:**
1. Date and time of examination
2. Indication (screening vs diagnostic)
3. Visual inspection findings
4. Palpation findings (each quadrant)
5. Lymph node assessment
6. Nipple and areolar assessment
7. Impression/interpretation
8. Recommendations

**Clock Face Method:**
- Breast as a clock face with nipple at center
- Findings described by position (e.g., "mass at 2 o'clock")
- Distance from nipple noted (e.g., "4 cm from nipple")
- Combines with quadrant description

**Common Pitfalls in Breast Examination:**

1. **Inadequate exposure** - Must fully examine breasts
2. **Rushing** - Takes time to be thorough
3. **Inadequate pressure** - Must use deep enough pressure
4. **Missing areas** - Must cover axillary tail and collarbone
5. **Not using systematic pattern** - May miss areas
6. **Poor documentation** - Makes follow-up difficult

**Special Examination Situations:**

**Pregnant Women:**
- Breasts enlarge and become nodular
- Examination more challenging
- Any persistent mass requires evaluation
- May use ultrasound

**Augmented Breasts (Implants):**
- Special attention to implant integrity
- Examine natural tissue and implant
- Feel for capsular contracture
- May require additional imaging views

**Women with Breast Reduction:**
- Scar tissue may feel nodular
- Changes from surgery must be distinguished
- May have altered sensation

**Very Large Breasts:**
- Examination more challenging
- May need additional time
- Important to examine all tissue
**May require additional positioning**`,
      keyPoints: [
        'Three levels of pressure (light, medium, deep) should be used during palpation',
        'Masses that are mobile with well-defined borders are usually benign',
        'Characteristics of concern include fixation, hardness, irregular borders, and skin changes',
        'Nipple discharge characteristics (color, laterality) help determine significance',
        'Documentation should use either quadrant or clock face method for precise localization'
      ],
      vocabulary: [
        { term: 'Peau d\'orange', definition: 'French term meaning "orange peel" - a descriptive term for skin changes in breast cancer where skin appears thickened and pitted' },
        { term: 'Dominant Mass', definition: 'A distinct, persistent breast mass that differs from surrounding tissue and requires evaluation' },
        { term: 'Ill-defined', definition: 'Having unclear or indistinct borders, a concerning characteristic for breast masses' },
        { term: 'Clock Face Method', definition: 'A documentation method describing breast findings by position like numbers on a clock' }
      ],
      quiz: [
        {
          question: 'What type of nipple discharge is most concerning and requires prompt evaluation?',
          options: [
            'Milky discharge from both nipples',
            'Clear yellow discharge from one nipple',
            'Bloody discharge from one nipple',
            'Green discharge from both nipples'
          ],
          correctAnswer: 2,
          explanation: 'Bloody or spontaneous serous discharge from a single duct is most concerning and requires evaluation. It may indicate intraductal papilloma or malignancy.'
        },
        {
          question: 'Which characteristic of a breast mass is most reassuring (suggests benign)?',
          options: [
            'Fixed to chest wall',
            'Irregular borders',
            'Mobile with well-defined borders',
            'Hard as a stone'
          ],
          correctAnswer: 2,
          explanation: 'A mass that is mobile with well-defined borders is more likely to be benign. Concerning features include fixation to chest wall, irregular borders, and hard consistency.'
        },
        {
          question: 'What does "peau d\'orange" indicate in breast examination?',
          options: [
            'Normal breast skin variation',
            'Inflammatory breast cancer causing skin edema',
            'Benign skin condition unrelated to breast',
            'Hormonal changes from pregnancy'
          ],
          correctAnswer: 1,
          explanation: 'Peau d\'orange (orange peel appearance) is a sign of inflammatory breast cancer where lymphatic obstruction causes skin edema, thickening, and pitting that resembles orange peel.'
        }
      ]
    },
    {
      level: 4,
      title: 'Abnormal Findings and Next Steps',
      content: `When abnormal findings are detected during breast examination, a systematic approach to further evaluation is essential.

**Initial Assessment of Abnormal Findings:**

**Documentation:**
- Precise location (quadrant/clock face + distance)
- Size (measure in centimeters)
- Consistency (soft, firm, hard)
- Mobility (mobile, partially fixed, fixed)
- Skin changes
- Nipple abnormalities
- Lymph node findings

**Risk Stratification:**

**Low Risk (Likely Benign):**
- Simple cyst on ultrasound
- Fibroadenoma characteristics
- Fat necrosis (with trauma history)
- Areas of fibrocystic change
- Benign nipple discharge (non-bloody, non-spontaneous)

**Intermediate Risk (Requires Further Evaluation):**
- Indeterminate solid mass
- Complex cyst
- Palpable mass not seen on imaging
- New asymmetric density

**High Risk (Suspicious):**
- Hard, fixed mass
- Spiculated mass
- Architectural distortion
- Bloody nipple discharge
- Skin changes or retraction
- Enlarged axillary nodes

**Diagnostic Workup Pathway:**

**Step 1: Diagnostic Imaging**

*Diagnostic Mammogram:*
- More detailed than screening mammogram
- Additional views (spot compression, magnification)
- Comparison with prior studies
- Focuses on area of concern

*Ultrasound:*
- Determines if mass is solid or cystic
- Characterizes solid masses
- Guides biopsy if needed
- Useful in dense breast tissue

*MRI (when indicated):*
- High-risk screening
- Diagnostic problem solving
- Implant rupture evaluation
- Extent of disease assessment

**BI-RADS Assessment Categories:**

| Category | Assessment | Follow-up |
|----------|------------|-----------|
| 0 | Incomplete - needs additional imaging | Additional imaging |
| 1 | Negative | Routine screening |
| 2 | Benign finding | Routine screening |
| 3 | Probably benign | Short-interval follow-up (6 months) |
| 4 | Suspicious abnormality | Biopsy recommended |
| 5 | Highly suggestive of malignancy | Biopsy recommended |
| 6 | Known biopsy-proven malignancy | Treatment planning |

**Step 2: Biopsy When Indicated**

**Image-Guided Biopsy Options:**

*Ultrasound-Guided Core Biopsy:*
- Most common for palpable masses
- Real-time visualization
- Minimal recovery
- Accurate diagnosis

*Stereotactic Core Biopsy:*
- For mammographic findings
- Calcifications or masses
- Uses mammography guidance
- Accurate for microcalcifications

*MRI-Guided Biopsy:*
- For MRI-only findings
- More complex setup
- Used when lesion only visible on MRI

**Fine Needle Aspiration (FNA):**
- Uses thin needle
- For cyst aspiration
- Sometimes for lymph nodes
- Less tissue obtained

**Surgical Biopsy:**
- Excisional (remove entire lesion)
- Incisional (remove part of lesion)
- Wire/localization if non-palpable
- Now less common, percutaneous preferred

**Step 3: Pathology Results**

**Benign Results:**
- Fibroadenoma
- Fibrocystic changes
- Cyst
- Benign breast tissue
- Papilloma

**Atypical Results:**
- Atypical ductal hyperplasia (ADH)
- Atypical lobular hyperplasia (ALH)
- May require surgical excision
- Increased future risk

**Malignant Results:**
- Ductal carcinoma in situ (DCIS)
- Invasive ductal carcinoma
- Invasive lobular carcinoma
- Other types
- Referral to breast specialist

**Management Based on Findings:**

**Probably Benign (BI-RADS 3):**
- Short-interval follow-up (6 months)
- Repeat imaging to ensure stability
- After 2-3 years of stability, return to routine screening
- <2% malignancy rate

**Suspicious (BI-RADS 4):**
- Biopsy recommended
- Malignancy risk ranges 2-95% depending on subtype
- Further management based on pathology

**Highly Suspicious (BI-RADS 5):**
- Biopsy strongly recommended
- >95% malignancy risk
- Prepare for cancer treatment

**Specific Clinical Scenarios:**

**Palpable Mass Not Seen on Imaging:**

*Approach:*
- Verify clinical finding
- Consider different imaging modality
- If highly suspicious, proceed to biopsy
- Surgical excision may be necessary

**Breast Pain (Mastalgia):**

*Evaluation:*
- Usually not the first sign of cancer
- Characterize pain (cyclic vs non-cyclic)
- Examination and imaging as indicated
- Treat symptomatically if evaluation negative
- Reassurance if workup negative

**Nipple Discharge:**

*Evaluation:*
- Cytology of discharge
- Imaging (mammogram, ultrasound, ductogram)
- Blood test for prolactin if milky discharge
- Surgical referral if concerning

**Skin Changes:**

*Approach:*
- Immediate imaging
- Skin biopsy if indicated
- Rule out inflammatory breast cancer
- Consider other dermatologic conditions

**Post-Biopsy Care:**

*Core Biopsy:*
- Ice and over-the-counter pain relief
- Avoid strenuous activity 24-48 hours
- Watch for infection signs
- Bruising expected

*Results Timeline:*
- Usually 2-4 working days
- Discuss at follow-up appointment
- Bring support person if desired

**Communication Considerations:**

When discussing abnormal findings:
- Be clear and direct
- Avoid causing unnecessary alarm
- Provide written information
- Offer support resources
- Ensure patient understands next steps
- Allow time for questions

**Multidisciplinary Approach:**

Breast abnormalities often require:
- Primary care provider
- Radiologist
- Breast surgeon
- Medical oncologist (if cancer)
- Radiation oncologist (if cancer)
- Plastic surgeon (if reconstruction)
- Genetic counselor (if high risk)
- Pathologist

**Shared Decision Making:**

Involve patient in decisions about:
- Additional imaging choices
- Biopsy approach
- Treatment options
- Follow-up schedule
- Second opinions`,
      keyPoints: [
        'BI-RADS categories provide a standardized assessment system for breast findings',
        'Image-guided core biopsy is the preferred method for diagnosing breast abnormalities',
        'Palpable masses not seen on imaging require careful consideration and may need biopsy',
        'Most breast pain is not cancer but deserves appropriate evaluation',
        'Multidisciplinary care provides the best outcomes for significant breast abnormalities'
      ],
      vocabulary: [
        { term: 'BI-RADS', definition: 'Breast Imaging Reporting and Data System - a standardized system for classifying breast imaging findings' },
        { term: 'Stereotactic Biopsy', definition: 'A biopsy procedure using mammography guidance to locate and sample breast tissue' },
        { term: 'Core Biopsy', definition: 'A biopsy using a larger needle to obtain a core of tissue for analysis' },
        { term: 'Cytology', definition: 'The study of cells, often used to evaluate nipple discharge or fine needle aspiration specimens' }
      ],
      quiz: [
        {
          question: 'What is the appropriate follow-up for a BI-RADS 3 (probably benign) finding?',
          options: [
            'Immediate biopsy',
            'Mastectomy',
            'Short-interval follow-up imaging in 6 months',
            'No further action needed'
          ],
          correctAnswer: 2,
          explanation: 'BI-RADS 3 (probably benign) findings are managed with short-interval follow-up imaging, typically at 6 months, to ensure stability. The malignancy rate is less than 2%.'
        },
        {
          question: 'Which biopsy technique is most commonly used for palpable breast masses?',
          options: [
            'Surgical excision',
            'Fine needle aspiration',
            'MRI-guided biopsy',
            'Ultrasound-guided core biopsy'
          ],
          correctAnswer: 3,
          explanation: 'Ultrasound-guided core biopsy is the most common technique for palpable breast masses. It provides real-time visualization and adequate tissue for diagnosis with minimal invasiveness.'
        },
        {
          question: 'What percentage of malignancy risk is associated with a BI-RADS 5 classification?',
          options: [
            '< 2%',
            '2-10%',
            '> 95%',
            '50-75%'
          ],
          correctAnswer: 2,
          explanation: 'BI-RADS 5 (highly suggestive of malignancy) carries a greater than 95% risk of malignancy. Biopsy is strongly recommended for these findings.'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Detection and Risk Assessment',
      content: `This advanced section explores cutting-edge breast imaging technologies, risk assessment models, and emerging detection methods.

**Advanced Breast Imaging Modalities:**

**Digital Breast Tomosynthesis (DBT / 3D Mammography):**

*Technology:*
- Acquires multiple low-dose images
- Reconstructs 1-mm slices
- Reduces tissue overlap
- Can be performed with 2D mammography

*Advantages:*
- Improved cancer detection rate (1-2 more cancers per 1000)
- Reduced recall rates
- Better visualization in dense breasts
- More accurate lesion localization

*Limitations:*
- Higher radiation dose (though still low)
- Increased cost
- Longer interpretation time
- Not all insurance covers

**Automated Breast Ultrasound (ABUS):**

*Technology:*
- Automated ultrasound scanner
- Standardized coverage
- 3D reconstruction
- For use as adjunct to mammography

*Indications:*
- Dense breast tissue
- High-risk women
- Adjunct to screening mammography

*Limitations:*
- High false-positive rate
- Operator dependence reduced but not eliminated
- Not a replacement for handheld ultrasound

**Contrast-Enhanced Mammography:**

*Technology:*
- Iodine-based contrast agent
- Dual-energy acquisition
- Shows angiogenesis
- Can assess treatment response

*Advantages:*
- Wider availability than MRI
- Lower cost than MRI
- Useful for dense breasts
- Can guide biopsy

**Breast MRI:**

*Indications:*
- High-risk screening (BRCA, >20% lifetime risk)
- Diagnostic problem solving
- Implant evaluation
- Neoadjuvant chemotherapy monitoring
- Occult primary cancer
- Axillary node malignancy with unknown primary

*Technique:*
- Contrast-enhanced
- Bilateral examination
- Multiple sequences
- Kinetic assessment (uptake and washout)

*MRI BI-RADS Categories:*
- Adapted from mammography BI-RADS
- Considers morphology and kinetics
- High sensitivity (~95%)
- Moderate specificity (~70%)

**Molecular Breast Imaging (MBI):**

*Technology:*
- Nuclear medicine technique
- Tc-99m sestamibi
- Gamma camera
- Shows metabolic activity

*Advantages:*
- Useful in dense breasts
- Lower cost than MRI
- No contrast needed
- Can be used with renal insufficiency

*Limitations:*
- Radiation exposure
- Lower spatial resolution
- Limited availability

**Risk Assessment Models:**

**Gail Model:**

*Assesses:*
- Age
- Age at menarche
- Age at first live birth
- Number of breast biopsies
- Presence of atypical hyperplasia
- Race/ethnicity
- Family history (first-degree relatives only)

*Output:*
- 5-year risk
- Lifetime risk
- Determines screening recommendations

*Limitations:*
- Doesn't account for second-degree relatives
- Doesn't consider paternal family history
- Not accurate for BRCA carriers
- Not for women with prior breast cancer

**Tyrer-Cuzick Model:**

*Includes:*
- All Gail factors plus:
- Second-degree relatives
- Paternal family history
- Age of relatives' diagnosis
- BRCA status if known
- Hormone replacement therapy
- BMI

*Advantages:*
- More comprehensive
- Better for strong family histories
- Can incorporate genetic testing

**BRCAPRO Model:**

*Purpose:*
- Estimates BRCA mutation probability
- Bayesian calculation
- Family pedigree analysis
- Considers Ashkenazi Jewish ancestry

**Boadicea Model:**

*Features:*
- Comprehensive pedigree analysis
- Polygenic risk factors
- BRCA1/2 and other genes
- Tumor characteristics
- Can include genetic test results

**Genetic Testing:**

**Multigene Panel Testing:**

*Genes commonly tested:*
- BRCA1, BRCA2
- PALB2
- CHEK2
- ATM
- TP53 (Li-Fraumeni)
- PTEN (Cowden syndrome)
- CDH1 (Hereditary diffuse gastric cancer)
- And others (10-30 genes per panel)

*Testing Indications:*
- Breast cancer <50 years
- Triple-negative breast cancer <60
- Male breast cancer
- Multiple primary cancers
- Strong family history
- Ashkenazi Jewish ancestry
- Known family mutation

**Artificial Intelligence in Breast Imaging:**

**Applications:**
- Detection assistance
- Risk assessment
- Workflow optimization
- Quality assurance
- Report generation

**AI Detection Systems:**
- Deep learning algorithms
- Trained on large datasets
- Can flag suspicious areas
- May reduce false negatives
- May increase false positives

**AI in Risk Stratification:**
- Breast density assessment
- Mammographic texture analysis
- Combination with clinical models
- Personalized screening intervals

**Emerging Technologies:**

**Contrast-Enhanced Spectral Mammography (CESM):**
- Dual-energy subtraction
- Iodine enhancement
- Improved specificity

**Abbreviated Breast MRI:**
- Shorter acquisition time
- Lower cost
- For intermediate-risk women
- Wider accessibility

**Optical Imaging:**
- Near-infrared light
- Hemoglobin mapping
- No radiation
- Still investigational

**Electrical Impedance Scanning:**
- Measures electrical properties
- Adjunct to mammography
- Limited adoption

**Thermography:**
- Not recommended by major organizations
- Low sensitivity
- High false-positive rate
- Should not replace mammography

**Liquid Biopsy:**

*Circulating Tumor DNA (ctDNA):*
- Cell-free DNA in blood
- Detects mutations
- Monitoring treatment
- Early detection research
- Not yet standard of care

*Circulating Tumor Cells (CTCs):*
- Rare but detectable
- Prognostic value
- Monitoring response
- Research applications

**Screening Recommendations by Risk:**

| Risk Level | Lifetime Risk | Screening Recommendations |
|------------|---------------|---------------------------|
| Average | < 15% | Annual mammogram 40-49, annual 50+ |
| Intermediate | 15-20% | Consider annual mammogram 40+, possibly MRI |
| High | > 20% | Annual mammogram + MRI 10 years before earliest family cancer |
| BRCA carrier | > 60% | Annual mammogram + MRI starting 25-30 |

**Future Directions:**

- Risk-adapted screening
- AI-assisted detection
- Molecular imaging
- Integration of genetic and imaging data
- Personalized screening intervals
- Prevention strategies for high-risk women`,
      keyPoints: [
        'Digital breast tomosynthesis (3D mammography) improves cancer detection and reduces recall rates',
        'Breast MRI is indicated for high-risk screening and diagnostic problem solving',
        'Risk assessment models include Gail, Tyrer-Cuzick, BRCAPRO, and BOADICEA, each with different strengths',
        'Multigene panel testing can identify inherited breast cancer risk beyond BRCA genes',
        'AI is increasingly being integrated into breast imaging for detection and risk assessment'
      ],
      vocabulary: [
        { term: 'Tomosynthesis', definition: 'Three-dimensional mammography that creates slices of breast tissue to reduce overlap' },
        { term: 'Angiogenesis', definition: 'The formation of new blood vessels, which tumors use to grow and spread' },
        { term: 'Kinetic Assessment', definition: 'Evaluation of how contrast enhancement changes over time on MRI' },
        { term: 'Circulating Tumor DNA', definition: 'Small fragments of DNA shed by tumors into the bloodstream, detectable by blood tests' }
      ],
      quiz: [
        {
          question: 'What is the primary advantage of digital breast tomosynthesis (3D mammography) over traditional 2D mammography?',
          options: [
            'Lower cost',
            'Faster examination time',
            'Reduced tissue overlap and improved cancer detection',
            'No compression needed'
          ],
          correctAnswer: 2,
          explanation: 'The primary advantage of 3D mammography is reduced tissue overlap, which improves cancer detection (especially in dense breasts) and reduces recall rates.'
        },
        {
          question: 'Which risk assessment model includes second-degree relatives and paternal family history?',
          options: [
            'Gail Model',
            'Tyrer-Cuzick Model',
            'BRCAPRO Model',
            'Simple family history'
          ],
          correctAnswer: 1,
          explanation: 'The Tyrer-Cuzick Model includes more comprehensive family history than the Gail model, including second-degree relatives and paternal family history, making it more accurate for women with strong family histories.'
        },
        {
          question: 'At what age should MRI screening begin for BRCA mutation carriers?',
          options: [
            'Age 40',
            'Age 25-30',
            'Age 50',
            'Age 18'
          ],
          correctAnswer: 1,
          explanation: 'For BRCA mutation carriers, annual MRI screening should begin at age 25-30, which is 10 years before the earliest family cancer diagnosis. Mammography is added later (usually at 30-35) to avoid radiation exposure at younger ages.'
        }
      ]
    }
  ],
  relatedTopics: ['breast-cancer-screening', 'breast-anatomy', 'womens-health-screening', 'cancer-screening'],
  lastUpdated: '2025-01-25',
  references: [
    { title: 'American Cancer Society - Breast Cancer Early Detection', url: 'https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection.html' },
    { title: 'USPSTF Breast Cancer Screening Recommendations', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening' },
    { title: 'ACR BI-RADS Atlas', url: 'https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/Bi-Rads' },
    { title: 'Breast Examination - Techniques and Findings', url: 'https://www.aafp.org/pubs/afp/issues/2016/1001/p538.html' },
    { title: 'NCCN Guidelines for Breast Cancer Screening', url: 'https://www.nccn.org/professionals/physician_gls/default.aspx' }
  ]
};
