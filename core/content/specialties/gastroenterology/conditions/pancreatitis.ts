/**
 * Pancreatitis - Comprehensive Educational Content
 *
 * Covers acute and chronic pancreatitis, including etiology, pathophysiology,
 * clinical presentation, and management.
 */

import { EducationalContent } from '../../../types';

export const pancreatitis: EducationalContent = {
  id: 'condition-pancreatitis',
  type: 'condition',
  name: 'Pancreatitis',
  alternateNames: ['Acute Pancreatitis', 'Chronic Pancreatitis', 'Pancreatic Inflammation'],

  levels: {
    1: {
      level: 1,
      summary: 'Pancreatitis is inflammation of the pancreas, an organ that helps digest food and control blood sugar. It can be sudden (acute) or ongoing (chronic).',
      explanation: `The pancreas is an organ behind your stomach that makes digestive juices and insulin. When it gets inflamed, it's called pancreatitis.

**Types:**
- Acute: Happens suddenly, usually gets better with treatment
- Chronic: Ongoing inflammation that damages the pancreas over time

**Common Causes:**
- Gallstones (most common cause of acute pancreatitis)
- Heavy alcohol use
- High triglycerides (blood fats)
- Certain medicines
- Sometimes the cause is unknown

**Symptoms of Acute Pancreatitis:**
- Severe upper belly pain that may go to the back
- Nausea and vomiting
- Fever
- Fast heartbeat
- Belly tenderness

**Symptoms of Chronic Pancreatitis:**
- Ongoing belly pain
- Fatty stools that float
- Weight loss without trying
- Diabetes (from pancreas damage)

**Treatment:**
- Hospital stay for acute attacks
- IV fluids and pain medicine
- Not eating for a few days to rest the pancreas
- Treating the cause (removing gallbladder, stopping alcohol)
- Special diet and enzyme supplements for chronic cases`,
      keyTerms: [
        { term: 'pancreas', definition: 'An organ that makes digestive juices and insulin' },
        { term: 'gallstones', definition: 'Hard stones that form in the gallbladder' },
        { term: 'enzymes', definition: 'Proteins that help break down food' },
      ],
      analogies: [
        'The pancreas is like a factory that normally packages its powerful chemicals carefully. In pancreatitis, those packages break open inside the factory, causing damage.',
      ],
      examples: [
        'Someone who drinks heavily for years develops ongoing belly pain and fatty stools.',
        'A person with gallstones has sudden, severe upper belly pain after a fatty meal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pancreatitis is inflammation of the pancreas; acute pancreatitis is most commonly caused by gallstones and alcohol, while chronic pancreatitis results from repeated injury.',
      explanation: `Pancreatitis ranges from mild self-limited disease to severe life-threatening illness.

**Acute Pancreatitis Etiology (GET SMASHED):**
- G: Gallstones
- E: Ethanol (alcohol)
- T: Trauma
- S: Steroids
- M: Mumps, other viruses
- A: Autoimmune
- S: Scorpion sting
- H: Hyperlipidemia, hypercalcemia
- E: ERCP
- D: Drugs (azathioprine, valproic acid, etc.)

**Pathophysiology:**
- Premature activation of trypsinogen to trypsin within pancreas
- Autodigestion of pancreatic tissue
- Release of inflammatory mediators
- In severe cases: Systemic inflammatory response syndrome (SIRS)

**Clinical Features:**
- Acute: Severe epigastric pain radiating to back, nausea, vomiting
- Chronic: Recurrent pain, steatorrhea, weight loss, diabetes

**Diagnosis:**
- Acute: 2 of 3 criteria
  1. Characteristic abdominal pain
  2. Amylase or lipase >3x upper limit normal
  3. Characteristic imaging findings

**Severity Assessment:**
- Ranson's criteria (at admission and 48 hours)
- APACHE II
- BISAP score
- CT severity index (Balthazar)

**Management:**
- Aggressive IV fluid resuscitation (lactated Ringer's preferred)
- Pain control
- Nutritional support (enteral preferred over TPN)
- Treat complications (necrosis, infection, pseudocyst)`,
      keyTerms: [
        { term: 'trypsin', definition: 'Digestive enzyme that can damage the pancreas if activated prematurely' },
        { term: 'pseudocyst', definition: 'Fluid collection surrounded by a fibrous wall, not true epithelium' },
        { term: 'SIRS', definition: 'Systemic inflammatory response syndrome' },
      ],
    },
    3: {
      level: 3,
      summary: 'Acute pancreatitis requires early aggressive fluid resuscitation; severity assessment guides monitoring; complications include pancreatic necrosis, infected necrosis, and multi-organ failure.',
      explanation: `Pancreatitis management requires understanding of pathophysiology, severity stratification, and complication management.

**Pathophysiology of Acute Pancreatitis:**
- Intra-acinar activation of trypsinogen
- Co-localization of zymogens with lysosomal enzymes
- NF-κB activation → inflammatory cascade
- Microcirculatory injury → ischemia
- Three phases: Early (first week), intermediate, late

**Severity Classification:**
- Mild: No organ failure, no complications
- Moderately severe: Transient organ failure (<48h) or local complications
- Severe: Persistent organ failure (>48h)

**Prognostic Scoring:**
- Ranson's: 0-2 (1% mortality), 3-5 (15%), ≥6 (40%)
- BISAP: Bedside index, 5 factors
- SIRS: ≥2 criteria = increased mortality
- HAPS: Harmless acute pancreatitis score

**Complications:**
- Local:
  - Acute peripancreatic fluid collection (<4 weeks)
  - Acute necrotic collection (<4 weeks, necrotic)
  - Walled-off necrosis (≥4 weeks, mature wall)
  - Pancreatic pseudocyst (≥4 weeks, no necrosis)
- Systemic:
  - Multi-organ failure (ARDS, AKI, shock)
  - Coagulopathy, metabolic derangements

**Management:**
- Fluids: 250-500 mL/hr initial, target HCT decrease
- Nutrition: Enteral (NG or NJ) within 24-48h, improves outcomes
- Antibiotics: Only for infected necrosis, not prophylactic
- Intervention for necrosis: Delay ≥4 weeks, minimally invasive preferred (STEP approach)`,
      keyTerms: [
        { term: 'STEP', definition: 'Step-up approach: percutaneous drainage before necrosectomy' },
        { term: 'walled-off necrosis', definition: 'Necrotic collection with mature fibrous wall after 4 weeks' },
        { term: 'organ failure', definition: 'Marshall score ≥2 for respiratory, cardiovascular, or renal systems' },
      ],
    },
    4: {
      level: 4,
      summary: 'Acute pancreatitis management involves early goal-directed fluid resuscitation, enteral nutrition within 48 hours, and delayed intervention for necrotic complications; chronic pancreatitis requires addressing etiology and complications.',
      explanation: `Advanced management of pancreatitis requires understanding of evidence-based interventions and complication management.

**Fluid Resuscitation Strategy:**
- Lactated Ringer's preferred (may reduce SIRS)
- Initial: 250-500 mL/hr for first 24-48 hours
- Goals: HCT decrease, UOP >0.5-1 mL/kg/hr, decreasing BUN
- Avoid overly aggressive fluids (associated with respiratory complications)
- Reassess at 6 and 24 hours

**Nutrition in Acute Pancreatitis:**
- Mild: Oral diet when pain improves
- Severe: Enteral nutrition within 48 hours
  - Nasogastric vs. nasojejunal: Equivalent outcomes
  - Elemental vs. polymeric: No clear difference
  - TPN only if enteral not feasible

**Chronic Pancreatitis:**
- Pathophysiology: Repeated injury → fibrosis, ductal changes
- TIGAR-O classification for etiology
- Complications:
  - Pain: Gabapentin, pregabalin, TCAs, celiac plexus block
  - Exocrine insufficiency: Pancreatic enzyme replacement (lipase-based dosing)
  - Diabetes: Often "brittle" due to combined α and β cell loss
  - Ductal obstruction: ERCP with stent, ESWL for stones
  - Pseudocyst: Endoscopic drainage if symptomatic
- Surgery: Frey, Puestow, pancreaticoduodenectomy

**Infected Necrosis:**
- Diagnosis: Gas in collection on CT, or positive FNA
- Timing: Intervention delayed ≥4 weeks when possible
- Approach: Minimally invasive step-up (PENGUIN trial)
  - Percutaneous or endoscopic drainage first
  - Video-assisted retroperitoneal debridement (VARD) if needed
  - Open necrosectomy last resort`,
      keyTerms: [
        { term: 'TIGAR-O', definition: 'Classification: Toxic, Idiopathic, Genetic, Autoimmune, Recurrent, Obstructive' },
        { term: 'Puestow procedure', definition: 'Lateral pancreaticojejunostomy for chronic pancreatitis with dilated duct' },
        { term: 'Frey procedure', definition: 'Coring of pancreatic head with lateral pancreaticojejunostomy' },
      ],
    },
    5: {
      level: 5,
      summary: 'Evidence-based pancreatitis management includes goal-directed resuscitation, early enteral nutrition, and delayed minimally invasive intervention for necrotic complications; chronic pancreatitis requires multidisciplinary approach.',
      explanation: `Expert management of pancreatitis integrates pathophysiology with evidence-based treatment strategies.

**Molecular Pathophysiology:**
- Trypsinogen activation: PRSS1 mutations (hereditary pancreatitis)
- Impaired trypsin inactivation: SPINK1 mutations
- Ductal obstruction/calcification: CFTR mutations
- Autoimmune: IgG4-related disease

**Severity Prediction and ICU Management:**
- Persistent SIRS at 48h: High mortality predictor
- Early organ failure: Worse prognosis than local complications
- ICU admission: Persistent organ failure, hemodynamic instability
- Hemodynamic monitoring: Early goal-directed therapy
- Respiratory support: ARDS common, lung-protective ventilation
- Renal replacement therapy: For AKI with volume overload

**Endoscopic Intervention:**
- Gallstone pancreatitis: ERCP within 24h for cholangitis, <48h for persistent biliary obstruction
- Pseudocyst drainage: Transmural (cystogastrostomy/duodenostomy) vs. transpapillary
- Walled-off necrosis: Multiple plastic stents or lumen-apposing metal stent (LAMS)
- Direct endoscopic necrosectomy for WON

**Surgical Considerations:**
- Cholecystectomy: Same admission for mild biliary pancreatitis
- Delayed for severe/necrotizing until resolution of inflammation
- Chronic pancreatitis surgery:
  - Drainage: Puestow for dilated duct (>7mm)
  - Resection: Whipple for inflammatory head mass
  - Combined: Frey, Beger procedures

**Autoimmune Pancreatitis:**
- Type 1 (lymphoplasmacytic sclerosing): IgG4-related, older males
- Type 2 (idiopathic duct-centric): Younger, IBD association, IgG4 negative
- Treatment: Corticosteroids, often dramatic response
- Relapse: Common, may require maintenance immunosuppression`,
      keyTerms: [
        { term: 'LAMS', definition: 'Lumen-apposing metal stent for pseudocyst/WON drainage' },
        { term: 'PRSS1', definition: 'Cationic trypsinogen gene; mutations cause hereditary pancreatitis' },
        { term: 'IgG4-related disease', definition: 'Fibroinflammatory condition affecting pancreas and multiple organs' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['gastrointestinal'],
    topics: ['pancreas', 'inflammation', 'GI'],
    keywords: ['pancreatitis', 'acute pancreatitis', 'chronic pancreatitis', 'pancreas'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default pancreatitis;
