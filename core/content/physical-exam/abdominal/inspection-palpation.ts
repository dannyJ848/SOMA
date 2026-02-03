/**
 * Abdominal Inspection and Palpation - Physical Examination
 */

import { EducationalContent } from '../../types';

export const inspectionPalpation: EducationalContent = {
  id: 'abdominal-inspection-palpation',
  type: 'topic',
  name: 'Abdominal Inspection and Palpation',
  alternateNames: ['Abdominal Exam', 'Abdominal Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'Abdominal inspection and palpation are ways doctors look at and feel your belly to check for problems like pain, swelling, or unusual lumps.',
      explanation: `## What Is Abdominal Inspection and Palpation?

When doctors check your belly (abdomen), they use two main techniques:

### Inspection (Looking)
The doctor looks at your bare abdomen while you lie flat. They check for:
- **Swelling or bloating** - Is your belly bigger than normal?
- **Scars** - Signs of past surgeries
- **Skin changes** - Color changes, rashes, or stretch marks
- **Visible lumps** - Anything pushing out from inside
- **Movement** - Does your belly move normally when you breathe?

### Palpation (Feeling)
The doctor gently presses on different areas of your abdomen with their hands to check:
- **Tenderness** - Does it hurt when pressed?
- **Guarding** - Do your muscles tighten up to protect an area?
- **Masses or lumps** - Any unusual bumps under the skin
- **Organ size** - Whether organs like the liver feel enlarged
- **Temperature** - Is one area warmer than others?

### Why This Exam Matters

This simple exam can find:
- Appendicitis (inflamed appendix)
- Hernias (organs pushing through weak spots)
- Enlarged organs
- Fluid buildup
- Blockages in the intestines`,

      keyTerms: [
        { term: 'inspection', definition: 'Looking at the body to check for visible signs of health or disease' },
        { term: 'palpation', definition: 'Using hands to feel the body and check for abnormalities' },
        { term: 'abdomen', definition: 'The belly area between the chest and hips' },
        { term: 'tenderness', definition: 'Pain or discomfort when an area is touched or pressed' },
        { term: 'guarding', definition: 'Automatic tightening of muscles to protect a painful area' },
      ],

      analogies: [
        'Inspection is like checking the outside of a car for dents before looking under the hood.',
        'Palpation is like a mechanic feeling hoses to check if anything is loose or swollen.',
        'Guarding is like pulling your hand back when something hurts - muscles protect tender areas.',
      ],

      examples: [
        'A doctor might feel a firm, tender area in the right lower belly and suspect appendicitis.',
        'Feeling a soft bulge near the belly button could mean a hernia.',
        'An abdomen that sounds hollow when tapped might have trapped gas.',
      ],

      patientCounselingPoints: [
        'Tell your doctor if any area hurts during the exam.',
        'Try to relax your belly muscles for the most accurate exam.',
        'This exam is safe and helps avoid unnecessary tests.',
      ],
    },

    2: {
      level: 2,
      summary: 'Abdominal inspection and palpation are systematic examination techniques using visual assessment and manual pressure to evaluate abdominal organs and detect pathology.',
      explanation: `## Abdominal Examination Fundamentals

### Patient Positioning
- Supine with arms at sides
- Knees slightly flexed to relax abdominal muscles
- Adequate exposure from xiphoid to pubic symphysis

### Inspection Findings

| Finding | Description | Significance |
|---------|-------------|--------------|
| Distension | Swollen, rounded abdomen | Fluid, gas, fat, or mass |
| Asymmetry | One side larger | Mass, hernia, organomegaly |
| Visible peristalsis | Wave-like movements | Possible obstruction |
| Scars | Surgical scars | Previous operations |
| Striae | Stretch marks | Weight change, Cushing syndrome |
| Caput medusae | Dilated veins around navel | Portal hypertension |

### Palpation Methods

**Superficial Palpation:**
- Light pressure with finger pads
- Assess temperature, texture, tenderness
- Check for guarding or rigidity

**Deep Palpation:**
- Firmer pressure with flat hand
- Assess organ borders and size
- Feel for deep masses

**Special Techniques:**
- Bimanual palpation for deeper structures
- Hooking technique for liver edge
- Ballottement for fluid or floating masses`,

      keyTerms: [
        { term: 'organomegaly', definition: 'Enlargement of an organ' },
        { term: 'rebound tenderness', definition: 'Pain when pressure is released, indicating peritoneal irritation' },
        { term: 'ascites', definition: 'Accumulation of fluid in the abdominal cavity' },
        { term: 'peristalsis', definition: 'Wave-like muscle contractions moving food through the digestive tract' },
        { term: 'peritonitis', definition: 'Inflammation of the abdominal lining' },
        { term: 'rigidity', definition: 'Abnormally stiff abdominal muscles' },
      ],

      analogies: [
        'The abdominal exam is like a pilot doing a pre-flight inspection.',
        'Palpating for organ edges is like feeling for the edge of a book under a blanket.',
      ],

      examples: [
        'Right lower quadrant tenderness with rebound suggests appendicitis.',
        'Pulsatile epigastric mass may indicate abdominal aortic aneurysm.',
        'Cullen sign suggests retroperitoneal hemorrhage.',
      ],

      clinicalNotes: 'Always examine the area of reported pain last to avoid guarding.',
    },

    3: {
      level: 3,
      summary: 'Abdominal examination requires systematic techniques to assess the nine abdominal regions, evaluate organ size, detect peritoneal signs, and identify surgical emergencies.',
      explanation: `## Systematic Abdominal Examination

### Nine Abdominal Regions

**Regions and Contents:**

| Region | Quadrant | Major Structures |
|--------|----------|------------------|
| Right hypochondrium | RUQ | Liver, gallbladder, right kidney |
| Epigastrium | Central | Stomach, pancreas, duodenum |
| Left hypochondrium | LUQ | Spleen, stomach, left kidney |
| Right lumbar | RLQ | Ascending colon, right kidney |
| Umbilical | Central | Small intestine, aorta |
| Left lumbar | LLQ | Descending colon, left kidney |
| Right iliac | RLQ | Cecum, appendix, right ovary |
| Hypogastric | Central | Bladder, uterus |
| Left iliac | LLQ | Sigmoid colon, left ovary |

### Organ Palpation

**Liver Palpation:**
- Start in right lower quadrant
- Press under costal margin during inspiration
- Normal span: 6-12 cm at midclavicular line

**Spleen Palpation:**
- Not normally palpable
- If felt, always pathological

**Kidney Palpation:**
- Bimanual technique
- Feel for lower pole during inspiration

### Peritoneal Signs

**Rebound Tenderness:**
- Pain when pressure released
- Indicates peritoneal irritation

**Special Signs:**
- Rovsing: LLQ pressure causes RLQ pain
- Psoas: Hip extension causes RLQ pain
- Obturator: Hip rotation causes RLQ pain`,

      keyTerms: [
        { term: 'hepatic flexure', definition: 'Bend in colon near the liver' },
        { term: 'McBurney point', definition: 'Location suggesting appendicitis' },
        { term: 'Murphy sign', definition: 'Indicates cholecystitis' },
        { term: 'shifting dullness', definition: 'Indicates ascites' },
        { term: 'fluid wave', definition: 'Test for ascites' },
      ],

      analogies: [
        'The nine regions are like rooms in a house - each has different contents.',
        'Palpating for the liver edge is like catching a wave with breathing.',
      ],

      examples: [
        'McBurney point tenderness suggests acute appendicitis.',
        'Positive Murphy sign indicates acute cholecystitis.',
        'Shifting dullness confirms significant ascites.',
      ],

      clinicalNotes: 'Document organ size by measuring from fixed points.',
    },

    4: {
      level: 4,
      summary: 'Advanced abdominal examination integrates clinical reasoning to differentiate surgical from non-surgical abdomen and guide diagnostic workup.',
      explanation: `## Clinical Integration

### The Acute Abdomen

**Surgical vs Non-surgical:**

Surgical indicators:
- Generalized peritonitis
- Progressive deterioration
- Hemodynamic instability
- Free air on imaging

Non-surgical causes:
- Myocardial infarction
- Pneumonia
- Diabetic ketoacidosis

### Advanced Techniques

**Aortic Palpation:**
- Normal: <3 cm diameter
- >3 cm: Aneurysm until proven otherwise

**Assessment of Ascites:**

| Sign | Sensitivity |
|------|-------------|
| Bulging flanks | ~80% |
| Shifting dullness | ~85% |
| Fluid wave | ~60% |

**Carnett Sign:**
- Differentiates abdominal wall from intra-abdominal pain
- Patient lifts head to tense muscles
- Pain worsens: abdominal wall source`,

      keyTerms: [
        { term: 'peritoneal carcinomatosis', definition: 'Widespread metastatic disease of peritoneum' },
        { term: 'diastasis recti', definition: 'Separation of abdominal muscles' },
        { term: 'volvulus', definition: 'Twisting of intestine causing obstruction' },
        { term: 'Cullen sign', definition: 'Periumbilical bruising' },
        { term: 'Grey Turner sign', definition: 'Flank bruising in pancreatitis' },
      ],

      clinicalNotes: 'Avoid deep palpation if AAA suspected. In pregnancy, appendix migrates superiorly.',
    },

    5: {
      level: 5,
      summary: 'Expert-level abdominal examination integrates advanced techniques and evidence-based approaches for complex presentations.',
      explanation: `## Expert Abdominal Examination

### Diagnostic Accuracy

| Finding | Condition | LR+ | LR- |
|---------|-----------|-----|-----|
| Rigidity | Peritonitis | 4.0 | 0.5 |
| Rebound | Appendicitis | 1.9 | 0.5 |
| Murphy sign | Cholecystitis | 2.8 | 0.5 |
| Guarding | Peritonitis | 3.7 | 0.4 |

### Complex Scenarios

**Immunocompromised:**
- May have minimal physical findings
- Steroids mask peritoneal signs
- Low threshold for imaging

**Abdominal Compartment Syndrome:**
- Pressure >20 mmHg
- Tense, distended abdomen
- Multi-organ dysfunction

**Rare Findings:**
- Sister Mary Joseph nodule: periumbilical metastasis
- Pseudo-Caput Medusae: dilated veins
- Grey Turner and Cullen signs: retroperitoneal hemorrhage

### Documentation Standards
Essential elements: inspection findings, bowel sounds, palpation results, special signs, hernia assessment.`,

      keyTerms: [
        { term: 'typhlitis', definition: 'Neutropenic enterocolitis' },
        { term: 'Sister Mary Joseph nodule', definition: 'Periumbilical metastatic nodule' },
        { term: 'abdominal compartment syndrome', definition: 'Elevated intra-abdominal pressure' },
        { term: 'FAST exam', definition: 'Bedside ultrasound for trauma' },
      ],

      clinicalNotes: 'Physical examination remains essential for triage. Bedside ultrasound extends exam capabilities.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-guide',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott Williams and Wilkins',
    },
    {
      id: 'mcgee-signs',
      type: 'textbook',
      title: 'Evidence-Based Physical Diagnosis',
      authors: ['Steven McGee'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'abdominal-percussion-auscultation', targetType: 'topic', relationship: 'sibling', label: 'Abdominal Percussion' },
    { targetId: 'abdominal-liver-spleen', targetType: 'topic', relationship: 'sibling', label: 'Liver and Spleen Exam' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['physical-examination', 'clinical-skills'],
    keywords: ['inspection', 'palpation', 'abdominal exam', 'tenderness'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default inspectionPalpation;
