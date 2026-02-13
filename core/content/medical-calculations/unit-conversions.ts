import { EducationalContent } from '../types';

export const unitConversions: EducationalContent = {
  id: 'calculation-unit-conversions',
  type: 'concept',
  name: 'Medical Unit Conversions',
  alternateNames: ['Unit Conversions', 'Medical Calculations', 'Measurement Conversions', 'SI Units'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical unit conversions help change measurements from one system to another so doctors and nurses can understand and compare test results from different laboratories or countries.',
      explanation: `## Why Do We Need Unit Conversions?

Different countries and laboratories use different ways to measure the same things. Converting between these units helps doctors:
- Understand test results from anywhere
- Give the right amount of medicine
- Compare measurements over time

## Common Measurements That Need Conversion

**Weight:**
- Pounds (lbs) to kilograms (kg)
- 1 kg = 2.2 lbs

**Height:**
- Feet and inches to centimeters
- 1 inch = 2.54 cm

**Temperature:**
- Fahrenheit to Celsius
- Celsius to Fahrenheit

**Liquid Volume:**
- Teaspoons to milliliters
- Ounces to milliliters
- Liters to gallons

## Simple Conversion Formulas

**Pounds to Kilograms:**
Divide pounds by 2.2
Example: 154 lbs / 2.2 = 70 kg

**Kilograms to Pounds:**
Multiply kilograms by 2.2
Example: 70 kg x 2.2 = 154 lbs

**Fahrenheit to Celsius:**
Subtract 32, then multiply by 5/9
Example: 98.6 F -> (98.6 - 32) x 5/9 = 37 C

**Celsius to Fahrenheit:**
Multiply by 9/5, then add 32
Example: 37 C -> (37 x 9/5) + 32 = 98.6 F

## Why Accuracy Matters

Even small mistakes in conversion can cause problems:
- Wrong medicine doses
- Misunderstood test results
- Incorrect treatments

Always double-check calculations and ask if unsure.

## Common Medical Measurements

**Body Temperature:**
- Normal: 98.6 F (37 C)
- Fever: Above 100.4 F (38 C)

**Blood Pressure:**
- Written as two numbers (systolic/diastolic)
- Measured in mmHg (millimeters of mercury)
- No conversion needed - same everywhere

**Blood Sugar:**
- US: mg/dL (milligrams per deciliter)
- Other countries: mmol/L (millimoles per liter)
- Divide mg/dL by 18 to get mmol/L`,
      keyTerms: [
        { term: 'unit conversion', definition: 'Changing a measurement from one unit to another' },
        { term: 'kilogram', definition: 'Unit of weight; about 2.2 pounds' },
        { term: 'milliliter', definition: 'Unit of liquid volume; one-thousandth of a liter' },
        { term: 'Celsius', definition: 'Temperature scale where water freezes at 0 and boils at 100' },
      ],
      analogies: [
        'Unit conversion is like translating languages - the meaning stays the same, only the words change.',
        'Think of unit conversion like exchanging money - $100 and 85 euros can have the same value.',
      ],
      examples: [
        'A patient who weighs 180 pounds weighs 81.8 kilograms (180 / 2.2).',
        'A blood sugar of 126 mg/dL equals 7 mmol/L (126 / 18).',
      ],
    },
    2: {
      level: 2,
      summary: 'Medical unit conversions involve weight, length, volume, temperature, and laboratory values, requiring accuracy for safe medication dosing and proper interpretation of diagnostic tests across different measurement systems.',
      explanation: `## Standard International (SI) Units

**Base Units:**
- Length: meter (m)
- Mass: kilogram (kg)
- Time: second (s)
- Temperature: kelvin (K) or Celsius (C)
- Amount of substance: mole (mol)

**Common Prefixes:**
| Prefix | Symbol | Multiplier |
|--------|--------|------------|
| kilo- | k | 10^3 (1,000) |
| centi- | c | 10^-2 (0.01) |
| milli- | m | 10^-3 (0.001) |
| micro- | mc or μ | 10^-6 (0.000001) |
| nano- | n | 10^-9 |

## Weight Conversions

**Formulas:**
- kg = lbs / 2.20462
- lbs = kg x 2.20462

**Quick approximations:**
- kg ≈ lbs / 2.2
- lbs ≈ kg x 2.2

**Examples:**
- 70 kg = 154 lbs
- 150 lbs = 68.2 kg

## Length/Height Conversions

**Formulas:**
- cm = inches x 2.54
- inches = cm / 2.54
- m = feet x 0.3048

**Examples:**
- 5 feet 10 inches = 70 inches = 177.8 cm
- 160 cm = 63 inches = 5 feet 3 inches

## Temperature Conversions

**Exact Formulas:**
- C = (F - 32) x 5/9
- F = (C x 9/5) + 32

**Quick approximations:**
- C ≈ (F - 30) / 2
- F ≈ (C x 2) + 30

**Clinical Temperatures:**
| Description | Fahrenheit | Celsius |
|-------------|------------|---------|
| Hypothermia | <95 | <35 |
| Normal | 98.6 | 37 |
| Fever | >100.4 | >38 |
| High fever | >104 | >40 |

## Volume Conversions

**Household to Metric:**
| Household | Metric |
|-----------|--------|
| 1 teaspoon | 5 mL |
| 1 tablespoon | 15 mL |
| 1 ounce | 30 mL |
| 1 cup | 240 mL |
| 1 pint | 473 mL |
| 1 quart | 946 mL |
| 1 gallon | 3,785 mL |

## Laboratory Value Conversions

**Glucose:**
- mg/dL to mmol/L: divide by 18
- mmol/L to mg/dL: multiply by 18
- Normal fasting: 70-100 mg/dL (3.9-5.6 mmol/L)

**Creatinine:**
- mg/dL to μmol/L: multiply by 88.4
- μmol/L to mg/dL: divide by 88.4

**Cholesterol:**
- mg/dL to mmol/L: divide by 38.67
- mmol/L to mg/dL: multiply by 38.67

**Calcium:**
- mg/dL to mmol/L: divide by 4
- mmol/L to mg/dL: multiply by 4

## Pressure Conversions

**Blood Pressure:**
- 1 mmHg = 133.322 Pa (pascals)
- Standard units: mmHg (same worldwide)

**Other Pressure Units:**
- 1 atm = 760 mmHg = 101.325 kPa
- 1 psi = 51.7 mmHg

## Common Medication Conversion Errors

**Micrograms vs Milligrams:**
- 1 mg = 1,000 mcg
- Dangerous confusion possible
- Always verify units

**Grains:**
- 1 grain = 65 mg (approximately)
- Occasionally used for thyroid, aspirin
- Obsolete but still encountered

**International Units (IU):**
- Varies by substance
- Cannot convert to mass without specific conversion factor
- Examples: insulin, vitamin D, heparin`,
      keyTerms: [
        { term: 'SI units', definition: 'International System of Units; standardized measurement system' },
        { term: 'milligram', definition: 'One-thousandth of a gram; common unit for medication' },
        { term: 'microgram', definition: 'One-millionth of a gram; mcg or μg' },
        { term: 'milliequivalent', definition: 'Unit expressing chemical combining power; mEq' },
        { term: 'International Unit', definition: 'Unit of biological activity; varies by substance' },
      ],
      analogies: [
        'SI prefixes are like money denominations - kilo is like a thousand dollars, milli is like a tenth of a cent.',
      ],
      examples: [
        'Digoxin 0.25 mg = 250 mcg. Misreading this could lead to 1000x overdose.',
        'Patient cholesterol 200 mg/dL = 5.17 mmol/L (200 / 38.67).',
      ],
    },
    3: {
      level: 3,
      summary: 'Accurate unit conversion in clinical practice requires understanding the metric system, conventional US units, molarity, equivalents, and conversion factors for laboratory values, with attention to potential sources of medication errors.',
      explanation: `## Molarity and Moles

**Mole:**
- Amount containing Avogadro's number (6.022 x 10^23) of entities
- Gram molecular weight = 1 mole

**Molarity (M):**
- Moles per liter (mol/L)
- Used for many electrolytes and lab values

**Millimoles (mmol):**
- One-thousandth of a mole
- Common unit in medicine
- 1 mmol/L = 1 mM

## Equivalents and Milliequivalents

**Equivalent Weight:**
- Molecular weight / valence
- Reflects combining power

**Milliequivalent (mEq):**
- One-thousandth of an equivalent
- Used for electrolytes

**Conversion:**
- mEq/L = (mg/dL x 10 x valence) / atomic weight

**Common Electrolyte Conversions:**

| Electrolyte | Atomic Weight | Valence | mg/dL to mEq/L |
|-------------|---------------|---------|----------------|
| Sodium (Na) | 23 | 1 | mg/dL x 0.435 |
| Potassium (K) | 39 | 1 | mg/dL x 0.256 |
| Calcium (Ca) | 40 | 2 | mg/dL x 0.5 |
| Magnesium (Mg) | 24 | 2 | mg/dL x 0.833 |
| Chloride (Cl) | 35.5 | 1 | mg/dL x 0.282 |

## Osmolarity and Osmolality

**Definitions:**
- Osmole: Amount of substance contributing to osmotic pressure
- Osmolarity: Osmoles per liter of solution (mOsm/L)
- Osmolality: Osmoles per kg of solvent (mOsm/kg)

**Calculated Serum Osmolality:**
---
= 2(Na) + Glucose/18 + BUN/2.8
---

Normal: 275-295 mOsm/kg

**Osmolar Gap:**
---
= Measured osmolality - Calculated osmolality
---

Normal <10 mOsm/kg
Elevated with: mannitol, ethanol, methanol, ethylene glycol, isopropanol

## Medication Concentration Calculations

**Percent Solutions:**
- Weight/volume (w/v): grams per 100 mL
- Volume/volume (v/v): mL per 100 mL
- Weight/weight (w/w): grams per 100 g

**Examples:**
- D5W = 5% dextrose in water = 5 g/100 mL = 50 g/L
- NS = 0.9% NaCl = 0.9 g/100 mL = 9 g/L

**Ratio Solutions:**
- Expressed as 1:X
- 1:1000 epinephrine = 1 g/1000 mL = 1 mg/mL
- 1:10,000 epinephrine = 1 g/10,000 mL = 0.1 mg/mL

## Complex Laboratory Conversions

**Proteins:**
- g/dL to g/L: multiply by 10
- Some reported in g/L (SI)

**Enzymes:**
- IU/L (international units per liter)
- U/L (units per liter)
- Often same numerically

**Hormones:**
- Multiple units possible
- Must know conversion factor for specific hormone
- Examples: TSH (mIU/L), T4 (mcg/dL or nmol/L)

**Arterial Blood Gas:**
- pH: no units
- PCO2: mmHg (or kPa in some countries)
  - kPa = mmHg x 0.133
  - mmHg = kPa x 7.5
- HCO3: mEq/L (or mmol/L)
- Base excess: mEq/L

## Hematology Conversions

**Hemoglobin:**
- g/dL to g/L: multiply by 10
- Normal: 13.5-17.5 g/dL (male), 12-16 g/dL (female)

**Hematocrit:**
- Decimal to percentage: multiply by 100
- Normal: 38.8-50% (male), 34.9-44.5% (female)

**Cell Counts:**
- Conventional: cells/mm3 or cells/μL
- SI: cells x 10^9/L
- Conversion: same number (1,000/μL = 1.0 x 10^9/L)

## Drug Dosing Conversions

**Weight-Based Dosing:**
- Ensure weight in correct units
- Verify dose per kg vs dose per lb

**BSA-Based Dosing:**
- mg/m2 to dose
- Requires accurate BSA calculation

**Unit Conversion Check:**
1. Identify starting unit
2. Identify target unit
3. Find conversion factor
4. Set up equation (dimensional analysis)
5. Calculate
6. Verify reasonableness`,
      keyTerms: [
        { term: 'molarity', definition: 'Concentration expressed as moles of solute per liter of solution' },
        { term: 'milliequivalent', definition: 'Unit of chemical combining power; one-thousandth of an equivalent' },
        { term: 'osmolarity', definition: 'Concentration of osmotically active particles per liter' },
        { term: 'osmolality', definition: 'Concentration of osmotically active particles per kg of solvent' },
        { term: 'dimensional analysis', definition: 'Problem-solving method using units to guide calculations' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced clinical calculations incorporate complex unit conversions for pharmacokinetics, specialized laboratory tests, and clinical decision-making while implementing safety systems to prevent conversion errors that can lead to patient harm.',
      explanation: `## Pharmacokinetic Calculations

**Clearance Conversions:**
- mL/min to L/hour: multiply by 0.06
- L/hour to mL/min: multiply by 16.67

**Volume of Distribution:**
- L/kg to mL/kg: multiply by 1,000
- Express as fraction of body weight

**Half-Life:**
- Hours to minutes: multiply by 60
- Minutes to hours: divide by 60

**Drug Concentration:**
- mcg/mL = mg/L
- ng/mL = mcg/L
- pg/mL = ng/L

## Therapeutic Drug Monitoring Conversions

**Common Drug Units:**

| Drug | Units | Therapeutic Range |
|------|-------|-------------------|
| Digoxin | ng/mL | 0.5-0.9 (heart failure), 0.5-2 (AFib) |
| Vancomycin | mcg/mL | Trough 15-20 (serious infections) |
| Phenytoin | mcg/mL | 10-20 |
| Lithium | mEq/L | 0.6-1.0 (maintenance) |
| Theophylline | mcg/mL | 10-20 |
| Gentamicin | mcg/mL | Peak 5-10, Trough <2 |

**Free vs Total Drug:**
- Free fraction = unbound drug
- Percent free varies by drug and patient factors
- Free phenytoin: normally 10%, increased in hypoalbuminemia

**Corrected Phenytoin (Hypoalbuminemia):**
---
Corrected = Measured / [(0.2 x Albumin) + 0.1]
---

## Anion Gap

**Calculation:**
---
Anion Gap = Na - (Cl + HCO3)
---

Normal: 8-12 mEq/L (traditional), 3-7 mEq/L (modern assays)

**Albumin Correction:**
---
Corrected AG = Calculated AG + 2.5 x (4 - Albumin)
---

**Delta Ratio (Delta Gap):**
---
Delta Ratio = (Change in AG) / (Change in HCO3)
---

Used to evaluate mixed acid-base disorders

## Nutrition Calculations

**Caloric Density:**
- Carbohydrate: 3.4 kcal/g
- Protein: 4 kcal/g
- Fat: 9 kcal/g
- Alcohol: 7 kcal/g

**Non-Protein Calorie to Nitrogen Ratio:**
- Goal: 100-150:1
- Nitrogen = protein (g) / 6.25

**Basal Metabolic Rate (Harris-Benedict):**

Men:
---
BMR = 66.5 + (13.75 x weight kg) + (5.003 x height cm) - (6.775 x age)
---

Women:
---
BMR = 655.1 + (9.563 x weight kg) + (1.850 x height cm) - (4.676 x age)
---

## Oxygen Content and Delivery

**Oxygen Content:**
---
CaO2 = (1.34 x Hgb x SaO2) + (0.0031 x PaO2)
---

Units: mL O2/dL blood

**Oxygen Delivery:**
---
DO2 = CaO2 x Cardiac Output x 10
---

Units: mL O2/min

**Oxygen Consumption:**
---
VO2 = CO x (CaO2 - CvO2) x 10
---

Or using Fick principle:
---
VO2 = CO x 1.34 x Hgb x (SaO2 - SvO2)
---

## Pressure Conversions in Critical Care

**Blood Pressure:**
- 1 mmHg = 1.36 cm H2O
- 1 cm H2O = 0.735 mmHg

**Intracranial Pressure:**
- Usually measured in mmHg
- Normal <20 mmHg
- Or <25 cm H2O

**Ventilator Pressures:**
- Peak pressure
- Plateau pressure
- PEEP (positive end-expiratory pressure)
- Driving pressure (plateau - PEEP)

**CVP and PAOP:**
- Measured in mmHg
- CVP normal: 2-6 mmHg
- PAOP normal: 6-12 mmHg

## Safety Systems for Conversion Errors

**Common Error Sources:**
- Decimal point errors
- Unit confusion (mg vs mcg)
- Wrong patient weight units
- Concentration misinterpretation

**Prevention Strategies:**

Barcode verification:
- Scan medication
- Verify dose
- Compare to order

Smart pumps:
- Dose error reduction systems
- Soft and hard limits
- Unit standardization

Double-check systems:
- Independent calculation verification
- Pharmacist verification
- High-alert medication protocols

Unit standardization:
- Use metric exclusively
- Eliminate apothecary units
- Standardize concentrations

**High-Alert Medications Requiring Extra Care:**
- Insulin (always in units)
- Anticoagulants
- Chemotherapy
- Opioids
- Electrolytes (KCl, concentrated NaCl)`,
      keyTerms: [
        { term: 'anion gap', definition: 'Difference between measured cations and anions; metabolic acidosis marker' },
        { term: 'free drug fraction', definition: 'Unbound drug available to exert pharmacological effect' },
        { term: 'basal metabolic rate', definition: 'Energy expended at rest in neutral temperature' },
        { term: 'dose error reduction system', definition: 'Smart pump feature preventing programming errors' },
      ],
      clinicalNotes: 'Unit conversion errors are a major source of medication errors. Implement double-check systems for high-alert medications. Use smart pumps with dose error reduction systems. Standardize to metric units throughout the institution. For therapeutic drug monitoring, understand whether total or free drug concentration is being reported. Calculate anion gap for all metabolic acidosis cases and correct for albumin when interpreting.',
    },
    5: {
      level: 5,
      summary: 'Precision medicine and advanced diagnostics require mastery of complex unit conversions including molecular measurements, genomic data, pharmacogenomic dosing, and international reference standards while maintaining robust error prevention systems.',
      explanation: `## Molecular and Genomic Units

**DNA/RNA Concentration:**
- ng/μL or ng/mL
- A260 absorbance
- 1 OD260 = 50 μg/mL double-stranded DNA
- 1 OD260 = 40 μg/mL single-stranded DNA
- 1 OD260 = 40 μg/mL RNA

**Copy Number:**
- Copies per mL
- Copies per μg DNA
- Conversion requires genome size knowledge

**Next-Generation Sequencing:**
- Coverage depth (X)
- Base quality scores (Phred)
- Variant allele fraction (%)

## Pharmacogenomic Units

**CYP Enzyme Activity:**
- Phenotype: Poor, Intermediate, Normal, Rapid, Ultrarapid metabolizer
- Genotype: Specific alleles (*1, *2, *3, etc.)
- Activity score: 0-2 per allele

**Warfarin Sensitivity:**
- VKORC1 genotype
- CYP2C9 genotype
- Algorithm-based dosing

**HLA Typing:**
- Allele nomenclature: HLA-A*01:01
- Resolution levels (2-digit, 4-digit, 6-digit)
- High-resolution vs low-resolution

## International Reference Standards

**WHO International Standards:**
- Biological activity in International Units (IU)
- Defined by collaborative study
- Different for each substance

**Common IU Conversions:**

| Substance | IU Equivalent |
|-----------|---------------|
| Vitamin D | 1 IU = 0.025 mcg cholecalciferol |
| Insulin | Variable by preparation |
| Heparin | Activity-based |
| TSH | Activity-based |
| FSH | Activity-based |

**Mass-to-IU Conversion:**
- Requires specific activity
- Changes with preparation
- Must use reference standard

## Mass Spectrometry Units

**Conventional:**
- ng/mL or μg/L
- Same value

**SI for Mass Spec:**
- nmol/L or μmol/L
- Requires molecular weight
- Conversion: nmol/L = (ng/mL x 1000) / MW

**Examples:**

Cortisol (MW 362.5):
- 10 μg/dL = 276 nmol/L
- 10 x 10 / 362.5 = 0.276 μmol/L = 276 nmol/L

Testosterone (MW 288.4):
- 300 ng/dL = 10.4 nmol/L
- 300 x 10 / 288.4 = 10.4 nmol/L

## Flow Cytometry Units

**Cell Counts:**
- Cells/μL
- Percentage of parent population
- Median fluorescence intensity (MFI)

**Absolute Counts:**
- Using counting beads
- Cells/μL = (Cell events / Bead events) x Bead concentration

## Advanced Safety Systems

**Computerized Provider Order Entry:**
- Unit standardization
- Dose range checking
- Allergy alerts
- Drug interaction checking

**Clinical Decision Support:**
- Conversion calculators integrated
- Unit mismatch warnings
- High-alert medication protocols

**Artificial Intelligence:**
- Error pattern recognition
- Predictive alerts
- Natural language processing for units

## Future Directions

**Standardization Efforts:**
- Universal adoption of SI units
- Elimination of non-metric units
- Standardized reference ranges

**Point-of-Care Testing:**
- Standardized units across devices
- Connectivity for data integration
- Real-time quality control

**Global Health:**
- Standardized reporting across countries
- Mobile health unit conversion tools
- Language-independent symbols

**Precision Medicine Integration:**
- Genomic units in clinical practice
- Pharmacogenomic dosing tables
- Personalized reference ranges

## Quality Control

**Proficiency Testing:**
- External quality assessment
- Unit conversion verification
- Inter-laboratory comparison

**Internal Quality Control:**
- Daily QC samples
- Unit consistency checks
- Delta checks for patient trends

**Continuous Improvement:**
- Error tracking
- Root cause analysis
- Process improvements`,
      keyTerms: [
        { term: 'specific activity', definition: 'Biological activity per unit mass; used for IU conversions' },
        { term: 'Phred score', definition: 'Quality score for DNA sequencing base calls' },
        { term: 'variant allele fraction', definition: 'Percentage of DNA reads containing a specific variant' },
        { term: 'activity score', definition: 'Numerical representation of CYP enzyme activity based on genotype' },
      ],
      clinicalNotes: 'Precision medicine requires understanding complex molecular units including genomic and pharmacogenomic measurements. Implement standardized SI units throughout healthcare systems. Use computerized decision support with unit conversion checks. Mass spectrometry increasingly reports in SI units (nmol/L) requiring molecular weight knowledge for conversion. Pharmacogenomic results need proper interpretation for dosing algorithms.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['clinical-calculations', 'laboratory-medicine', 'pharmacy'],
    keywords: ['unit conversions', 'SI units', 'measurements', 'laboratory values', 'medical calculations'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
