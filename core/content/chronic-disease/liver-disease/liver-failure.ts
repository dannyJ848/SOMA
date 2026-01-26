/**
 * Liver Failure - Chronic Disease Education
 *
 * Comprehensive patient education about liver failure,
 * when the liver can no longer function properly.
 */

import { EducationalContent } from '../../types';

export const LIVER_FAILURE: EducationalContent = {
  id: 'chronic-disease-liver-failure',
  type: 'condition',
  name: 'Liver Failure',
  alternateNames: ['Acute liver failure', 'Fulminant hepatic failure', 'End-stage liver disease', 'Hepatic failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Liver failure means your liver cannot work properly to keep you alive. This can happen suddenly (acute) or slowly over time (chronic), and requires urgent medical care.',
      explanation: `**What Is Liver Failure?

Liver failure means the liver has lost most or all of its function. The liver is a vital organ that filters toxins from blood, makes proteins, and helps digest food. When it fails, you need urgent medical care.


Liver Functions:
---------------------------------
- Clean toxins from blood
- Make proteins for blood clotting
- Produce bile for digestion
- Store energy and nutrients
- Help fight infections
---------------------------------


**Types of Liver Failure:**


Acute Liver Failure:
  - Happens suddenly (days to weeks)
  - Often affects people with healthy livers
  - Causes: Overdose, viruses, autoimmune

Chronic Liver Failure:
  - Happens slowly (months to years)
  - Results from cirrhosis (scarring)
  - Gets worse over time
---------------------------------

**What Causes It?**


Common Causes:
---------------------------------
Acute:
  - Acetaminophen (Tylenol) overdose
  - Viruses (hepatitis A, B, E)
  - Autoimmune hepatitis
  - Toxins, chemicals, mushrooms
  - Ischemia (low blood flow)

Chronic:
  - Alcoholic liver disease
  - Chronic hepatitis B or C
  - Non-alcoholic fatty liver disease
  - Autoimmune hepatitis
  - Genetic diseases
---------------------------------

**Common Symptoms:**

- Yellowing of skin and eyes (jaundice)
- Confusion, sleepiness, coma
- Nausea, vomiting
- Belly pain and swelling
- Easy bruising or bleeding
- Dark urine
- Fatigue, weakness
\n**Emergency - Go to ER:**
- Extreme confusion or cannot wake up
- Vomiting blood
- Severe belly pain
- Unable to urinate
`,
      keyTerms: [
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from liver problems' },
        { term: 'encephalopathy', definition: 'Brain dysfunction from liver failure' },
        { term: 'acetaminophen', definition: 'Pain reliever (Tylenol) that can damage liver in overdose' },
        { term: 'ischemia', definition: 'Low blood flow to organ' },
      ],
      analogies: [
        'The liver is like a chemical factory - when it fails, toxins build up.',
        'Encephalopathy is like the brain being poisoned by liver toxins.',
      ],
      examples: [
        'John developed acute liver failure from a Tylenol overdose.',
        'Maria has cirrhosis that has progressed to liver failure.',
      ],
      patientCounselingPoints: [
        'Never take more than the recommended dose of acetaminophen.',
        'Liver failure is a medical emergency - seek care immediately.',
        'Treatment depends on whether the failure is acute or chronic.',
        'Liver transplant may be needed for some people.',
      ],
    },
    2: {
      level: 2,
      summary: 'Liver failure represents the inability of the liver to maintain synthetic and metabolic functions, characterized by coagulopathy, encephalopathy, and multisystem dysfunction.',
      explanation: `**Definition:**

Acute Liver Failure (ALF):
- Rapid deterioration of liver function
- Encephalopathy within 8 weeks of onset
- No pre-existing cirrhosis
- INR ≥1.5

Chronic Liver Failure:
- Decompensated cirrhosis
- Progressive loss of liver function
- Complications of portal hypertension
- End-stage liver disease

**Etiology:**

Causes of ALF:
---------------------------------------------
Acetaminophen toxicity:
  - Most common cause in US
  - Dose >4g/day (7-10g can be toxic)
  - Therapeutic misadventure
  - Intentional overdose

Viral Hepatitis:
  - Acute hepatitis A (usually resolves)
  - Hepatitis B (can cause ALF)
  - Hepatitis E (severe in pregnancy)
  - Other viruses

Ischemic:
  - Heart failure
  - Shock
  - Heat stroke
  - Liver transplantation

Autoimmune:
  - Autoimmune hepatitis
  - Wilson disease (copper)
  - Primary biliary cholangitis
  - Other autoimmune conditions

Other:
  - Budd-Chiari syndrome (hepatic vein thrombosis)
  - Mushroom poisoning
  - Chemical/toxin exposure
---------------------------------------------

**Clinical Manifestations:**

Signs and Symptoms:
---------------------------------------------
Jaundice:
  - Yellow skin and eyes
  - Caused by bilirubin accumulation

Coagulopathy:
  - Easy bruising
  - Bleeding gums
  - GI bleeding
  - Low platelet count

Encephalopathy:
  - Confusion
  - Drowsiness
  - Asterixis (flapping tremor)
  - Coma

Ascites:
  - Abdominal swelling
  - Poor appetite
  - Weight gain

Hypoglycemia:
  - Low blood sugar
  - Confusion, tremors
  - Coma

Other:
  - Kidney dysfunction (hepatorenal)
  - Respiratory failure
  - Infection susceptibility
---------------------------------------------
`,
      keyTerms: [
        { term: 'encephalopathy', definition: 'Brain dysfunction from liver failure toxins' },
        { term: 'coagulopathy', definition: 'Blood clotting problems' },
        { term: 'ascites', definition: 'Fluid in abdomen from liver failure' },
        { term: 'asterixis', definition: 'Flapping tremor of hands in liver failure' },
        { term: 'hepatorenal', definition: 'Kidney dysfunction from liver failure' },
      ],
      analogies: [
        'Coagulopathy is like having sticky blood that cannot clot properly.',
      ],
      clinicalNotes: 'Acetaminophen overdose is treated with NAC. MELD score determines transplant urgency in ALF. Early recognition and treatment is critical for survival.',
      patientCounselingPoints: [
        'Acetaminophen overdose has an antidote (NAC) that works best if given early.',
        'Encephalopathy requires urgent treatment to prevent brain damage.',
        'Bleeding problems in liver failure can be life-threatening.',
      ],
    },
    3: {
      level: 3,
      summary: 'Liver failure is characterized by hepatic decompensation manifesting as coagulopathy, encephalopathy, and metabolic derangements, requiring intensive care and often transplantation for survival.',
      explanation: `**Diagnosis:**

Diagnostic Criteria for ALF:
-----------------------------------------------------
Acute Liver Failure:
  - Coagulopathy: INR ≥1.5
  - Encephalopathy: Any grade
  - Jaundice: Bilirubin >2 mg/dL
  - Acute deterioration within 26 weeks

Exclusion:
  - Pre-existing cirrhosis
  - Chronic hepatitis B or C
    (unless recent decompensation)
-----------------------------------------------------`,
      keyTerms: [
        { term: 'MELD', definition: 'Model for End-Stage Liver Disease; predicts 3-month mortality' },
        { term: 'NAC', definition: 'N-acetylcysteine; antidote for acetaminophen' },
        { term: 'fulminant', definition: 'Rapidly progressive liver failure' },
      ],
      analogies: [
        'The MELD score predicts mortality risk - higher scores mean more urgent need for transplant.',
      ],
      clinicalNotes: 'NAC is most effective within 8 hours of acetaminophen ingestion. King\'s College criteria define ALF. Early transplant improves survival in ALF.',
      patientCounselingPoints: [
        'MELD score determines how urgently you need a transplant.',
        'NAC treatment works best if started early for acetaminophen overdose.',
        'Early transplant can save lives in acute liver failure.',
      ],
    },
    4: {
      level: 4,
      summary: 'Liver failure management requires intensive care including etiology-specific treatments, management of complications, and evaluation for liver transplantation with survival dependent on MELD score and etiology.',
      explanation: `**Management:**

*Supportive Care:*
ICU Management:
------------------------------------------------------------
Airway/Protection:
  - Intubation for encephalopathy
  - Protect airway if bleeding risk

Circulation:
  - Vasopressors for hypotension
  - Pressorsors >1: Consider hydrocortisone
  - Fluid resuscitation

Metabolic Support:
  - Dextrose for hypoglycemia
  - Thiamine, folate for nutritional support
  - Lipids in high-risk patients
  - Enteral nutrition when possible
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'cerebral edema', definition: 'Brain swelling from liver failure' },
        { term: 'recombinant FVIIa', definition: 'Clotting factor concentrate for bleeding' },
        { term: 'lactulose', definition: 'Medicine that helps remove brain toxins' },
      ],
      analogies: [
        'Lactulose is like a laxative for toxins in your gut - it flushes ammonia out.',
      ],
      clinicalNotes: 'Cerebral edema increases intracranial pressure. Monitoring ICP is important in severe encephalopathy.',
      patientCounselingPoints: [
        'Brain swelling can cause severe headaches and need specialized treatment.',
        'Protein restriction and lactulose help reduce toxins affecting your brain.',
        'Bleeding problems require clotting factor replacement.',
      ],
    },
    5: {
      level: 5,
      summary: 'Liver failure management has evolved with artificial liver support systems, improved transplant outcomes, and etiology-specific treatments improving survival in select patient populations.',
      explanation: `**Artificial Liver Support:**

*Extracorporeal Liver Support:*
Systems:
------------------------------------------------------------
Charcoal-based (Detoxify):
  - MARS (Medical Array Redisporal System)
  - Biolux device (porcine liver cells)

Non-biological:
  - Molecular adsorbent recirculating system (MARS)
  - Fractionated plasma separation and adsorption
  - Albumin dialysis

Indications:
  - Bridge to transplant
  - Acute liver failure recovery
  - Selected toxic ingestions
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'MARS', definition: 'Molecular adsorbent recirculating system' },
        { term: 'high-volume plasma exchange', definition: 'Large volume plasma removal and replacement' },
      ],
      analogies: [
        'Artificial liver support is like a dialysis machine for the liver - it cleans blood until recovery or transplant.',
      ],
      clinicalNotes: 'MARS and high-volume plasma exchange improve survival in select cases. Liver transplantation offers 1-year survival >80% for many etiologies.',
      patientCounselingPoints: [
        'Artificial liver support can keep you alive while waiting for transplant.',
        'Some types of liver failure can recover with temporary support.',
        'Transplant success varies by cause of liver failure.',
      ],
    },
  },

  media: [
    {
      id: 'liver-failure-complications',
      type: 'diagram',
      filename: 'liver-failure-complications.svg',
      title: 'Liver Failure Complications',
      description: 'Diagram showing liver failure manifestations',
    },
  ],

  citations: [
    {
      id: 'aasld-alf-2011',
      type: 'article',
      title: 'AASLD Position Paper: Acute Liver Failure',
      source: 'Hepatology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-cirrhosis', targetType: 'condition', relationship: 'parent', label: 'Cirrhosis' },
    { targetId: 'chronic-disease-hepatitis', targetType: 'condition', relationship: 'related', label: 'Hepatitis' },
  ],

  tags: {
    systems: ['hepatic', 'gastrointestinal'],
    structures: ['liver'],
    topics: ['liver failure', 'hepatic failure', 'encephalopathy'],
    keywords: ['liver failure', 'hepatic failure', 'fulminant', 'encephalopathy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'icu'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
