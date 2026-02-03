/**
 * Pancreatitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pancreatitis: EducationalContent = {
  id: 'condition-pancreatitis',
  type: 'condition',
  name: 'Pancreatitis',
  alternateNames: ['Acute Pancreatitis', 'Chronic Pancreatitis', 'AP', 'CP'],
  hpoId: 'HP:0002027',

  levels: {
    1: {
      level: 1,
      summary: 'Pancreatitis is inflammation of the pancreas, an organ behind the stomach that helps digest food and control blood sugar.',
      explanation: `The pancreas is an organ that makes enzymes to digest food and hormones like insulin. When it becomes inflamed (pancreatitis), these enzymes can damage the pancreas itself.

**Types:**
- **Acute:** Sudden inflammation, usually short-term
- **Chronic:** Ongoing inflammation that causes permanent damage

**Symptoms:**
- Severe upper abdominal pain (often radiates to back)
- Nausea and vomiting
- Fever
- Abdominal tenderness

**Common causes:**
- Gallstones
- Heavy alcohol use
- High triglycerides (fats in blood)
- Certain medications
- Trauma

**Treatment:**
- Hospital care for acute cases
- IV fluids
- Pain medication
- Treat the underlying cause
- Do not eat or drink initially (rest the pancreas)

**Complications:** Can lead to dehydration, infection, organ failure in severe cases`,
      keyTerms: [
        { term: 'pancreas', definition: 'An organ behind the stomach that produces digestive enzymes and insulin' },
        { term: 'enzymes', definition: 'Proteins that help break down food for digestion' },
        { term: 'gallstones', definition: 'Hard deposits in the gallbladder that can block pancreatic ducts' },
      ],
      analogies: ['The pancreas is like a factory that produces digesting juices. In pancreatitis, these juices start digesting the factory itself.'],
      examples: ['Someone who drinks heavily and develops severe abdominal pain that wraps around to their back might have pancreatitis.'],
    },
    2: {
      level: 2,
      summary: 'Pancreatitis is inflammation of the pancreas causing epigastric pain, diagnosed by elevated lipase and imaging, with severity ranging from mild edematous to severe necrotizing disease.',
      explanation: `## Types
**Acute Pancreatitis (AP):** Sudden inflammation, can recur
**Chronic Pancreatitis (CP):** Progressive inflammation with fibrosis, permanent damage

## Common Causes
- **Gallstones:** 40-70% of cases
- **Alcohol:** 25-35% of cases
- **Hypertriglyceridemia:** Triglycerides >1000 mg/dL
- **Medications:** Many classes possible
- **ERCP:** Post-procedure pancreatitis
- **Trauma, infection, autoimmune**

## Diagnosis
**Clinical:**
- Epigastric pain radiating to back
- Nausea, vomiting
- often severe

**Laboratory:**
- Lipase: >3x upper limit of normal (specific)
- Amylase: Also elevated (less specific)

**Imaging:**
- CT abdomen with contrast (72 hours for necrosis)
- Ultrasound (if gallstones suspected)
- MRCP (for biliary/pancreatic ducts)

## Severity Assessment
- **Mild:** No organ failure, no local complications
- **Moderately severe:** Transient organ failure (<48h)
- **Severe:** Persistent organ failure (>48h)`,
      keyTerms: [
        { term: 'lipase', definition: 'Enzyme produced by pancreas; elevated in pancreatitis' },
        { term: 'epigastric', definition: 'Upper middle part of the abdomen' },
        { term: 'necrotizing pancreatitis', definition: 'Severe form with tissue death' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pancreatitis management requires aggressive fluid resuscitation, pain control, treatment of underlying etiology, and monitoring for systemic inflammatory response, local complications, and organ dysfunction.',
      explanation: `## Pathophysiology
- Premature activation of pancreatic enzymes
- Autodigestion of pancreatic tissue
- Inflammatory cascade → SIRS
- Vascular leak, hypovolemia
- Potential for multi-organ failure

## Initial Management
**Fluid Resuscitation:**
- Lactated Ringer's preferred
- 250-500 mL/hr initially (titrate to response)
- Goal: Urine output 0.5-1 mL/kg/hr

**Pain Control:**
- IV opioids (hydromorphone, fentanyl)
- Some avoid morphine (sphincter of Oddi theory—not well-supported)

**Nutrition:**
- **Mild:** Start oral diet when pain improves
- **Severe:** Early enteral nutrition (within 24-48h) via NJ tube if needed
- TPN only if enteral not possible

## Etiology-Specific Treatment
**Gallstone pancreatitis:**
- ERCP within 24h if cholangitis
- Cholecystectomy during same admission (before discharge)

**Alcoholic:** Abstinence, rehabilitation
**Hypertriglyceridemic:** Insulin, fibrates, plasmapheresis if severe

## Local Complications
- **Peripancreatic fluid collections:** <4 weeks
- **Acute necrotic collections:** <4 weeks
- **Walled-off necrosis:** >4 weeks
- **Pseudocyst:** >4 weeks, no necrosis

## Systemic Complications
- **Organ failure:** Respiratory, renal, cardiovascular
- **SIRS:** Systemic inflammatory response syndrome
- **Sepsis:** Infected necrosis`,
      keyTerms: [
        { term: 'SIRS', definition: 'Systemic inflammatory response syndrome; overwhelming inflammatory response' },
        { term: 'ERCP', definition: 'Endoscopic retrograde cholangiopancreatography; procedure to treat bile duct stones' },
        { term: 'walled-off necrosis', definition: 'Organized necrotic tissue with encapsulation, >4 weeks old' },
      ],
      clinicalNotes: 'Ranson criteria and APACHE II predict severity. BISAP (Bedside Index for Severity in AP) is simpler: BUN>25, impaired mental status, SIRS, age>60, pleural effusion.',
    },
    4: {
      level: 4,
      summary: 'Acute pancreatitis management focuses on early aggressive fluids, enteral nutrition, and targeted interventions for local complications, while chronic pancreatitis requires pain control and management of exocrine/endocrine insufficiency.',
      explanation: `## Severity Scoring Systems

**BISAP (within 24h):** Score ≥2 indicates increased mortality risk
- BUN >25 mg/dL
- Impaired mental status
- SIRS (≥2 criteria)
- Age >60 years
- Pleural effusion on imaging

**Atlanta Classification (2012):**
- Mild: No organ failure, no local complications
- Moderately severe: Transient organ failure (<48h)
- Severe: Persistent organ failure (>48h)

## Management of Local Complications

**Acute necrotic collection (<4 weeks):**
- Usually sterile, conservative management
- Antibiotics if infected

**Walled-off necrosis (>4 weeks):**
- Asymptomatic: Observe
- Symptomatic/infected: Drainage

**Intervention approach:**
1. Percutaneous drainage
2. Endoscopic (transgastric) drainage/necrosectomy
3. Surgical necrosectomy (last resort)

**Infected necrosis:**
- Step-up approach preferred
- Delay intervention if possible (3-4 weeks)
- Culture-directed antibiotics

## Chronic Pancreatitis Management
**Pain control:**
- PERT (pancreatic enzyme replacement therapy) for pain
- TCAs for neuropathic pain
- Celiac plexus block
- Surgery (drainage vs resection) for refractory

**Exocrine insufficiency:**
- PERT with meals
- Fat-soluble vitamin replacement

**Endocrine insufficiency:**
- Diabetes management
- "Brittle" diabetes common`,
      keyTerms: [
        { term: 'PERT', definition: 'Pancreatic enzyme replacement therapy; capsules taken with meals' },
        { term: 'step-up approach', definition: 'Progressive minimally invasive interventions before surgery' },
        { term: 'celiac plexus block', definition: 'Injection to block pain nerves from pancreas' },
      ],
      clinicalNotes: 'Prophylactic antibiotics NOT recommended for severe pancreatitis (only for proven infection). Early enteral nutrition reduces mortality compared to TPN.',
    },
    5: {
      level: 5,
      summary: 'Advanced pancreatitis care incorporates personalized fluid resuscitation, minimally invasive necrosectomy techniques, endoscopic interventions, and comprehensive management of chronic pancreatitis complications including pain and insufficiency.',
      explanation: `## Personalized Fluid Management
**Goal-directed therapy:**
- Lactated Ringer's (reduces SIRS vs NS)
- Hemodynamic monitoring in severe cases
- Avoid fluid overload (worse outcomes)

**Biomarker-guided:**
- BUN, hematocrit trends
- Base deficit, lactate
- Early aggressive fluids in first 24h, then reassess

## Advanced Interventional Techniques

**Endoscopic:**
- Endoscopic necrosectomy (DENPP, DIRECT)
- Lumen-apposing metal stents (LAMS)
- Combined percutaneous-endoscopic (STEP-up)

**Minimally invasive surgery:**
- Videoscopic-assisted retroperitoneal debridement (VARD)
- Minimally invasive pancreatic necrosectomy

**Open surgery:**
- Necrosectomy with continuous lavage
- Open packing (rare, mortality high)

## Chronic Pancreatitis Therapeutics
**Endoscopic:**
- Pancreatic duct stenting
- Stricture dilation
- Lithotripsy for stones
- Celiac plexus block (EUS-guided)

**Surgical:**
- Frey procedure (coring out head + drainage)
- Puestow (lateral pancreaticojejunostomy)
- Whipple (for head mass, suspicion of cancer)
- Total pancreatectomy with islet auto-transplant (TPIAT)

**Total pancreatectomy with islet auto-transplant:**
- Indication: Intractable pain, preserved islet function
- Autologous islets infused into liver
- Can prevent brittle diabetes

## Emerging Therapies
**For acute:**
- Protease inhibitors (not proven)
- Anti-cytokine therapies
- Early ERCP for selected patients

**For chronic:**
- Antioxidants (limited benefit)
- PENT for neuropathic pain
- GLP-1 agonists for pancreatic rest

## Prevention of Recurrence
- Cholecystectomy for gallstone pancreatitis
- Alcohol cessation
- Triglyceride control
- Avoid culprit medications`,
      keyTerms: [
        { term: 'LAMS', definition: 'Lumen-apposing metal stent; endoscopic stent for draining fluid collections' },
        { term: 'TPIAT', definition: 'Total pancreatectomy with islet auto-transplant; preserves endocrine function' },
        { term: 'Frey procedure', definition: 'Surgery combining coring of pancreatic head with drainage' },
      ],
      clinicalNotes: 'Alcoholic pancreatitis has high recurrence without abstinence. TPIAT increasingly offered for hereditary and chronic pancreatitis with intractable pain.',
    },
  },

  media: [],
  citations: [
    { id: 'acg-pancreatitis-2024', type: 'article', title: 'ACG Clinical Guideline: Management of Acute Pancreatitis', source: 'American Journal of Gastroenterology' },
    { id: 'apa-2023', type: 'article', title: 'Management of Chronic Pancreatitis', source: 'American Pancreatic Association Guidelines' },
  ],
  crossReferences: [
    { targetId: 'condition-choledocholithiasis', targetType: 'condition', relationship: 'related', label: 'Gallstone Disease' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'critical-care'], keywords: ['pancreatitis', 'lipase', 'necrosis', 'organ failure'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pancreatitis;
