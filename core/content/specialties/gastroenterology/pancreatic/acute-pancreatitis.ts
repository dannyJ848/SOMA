/**
 * Acute Pancreatitis — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const acutePancreatitisContent: EducationalContent = {
  id: 'gi-pancreatic-acute',
  type: 'condition',
  name: 'Acute Pancreatitis',
  nameEs: 'Pancreatitis Aguda',
  alternateNames: ['AP', 'Acute Pancreatic Inflammation'],
  levels: {
    1: {
      level: 1,
      summary: 'Acute pancreatitis is sudden inflammation of the pancreas, usually caused by gallstones or heavy alcohol use, causing severe upper belly pain.',
      explanation: `Your pancreas is an organ behind your stomach that makes digestive juices and insulin. In acute pancreatitis, the digestive juices activate too early and start digesting the pancreas itself, causing sudden and severe pain in the upper belly that often radiates to the back. The two most common causes are **gallstones** (stones block the pancreatic duct) and **heavy alcohol use**. Most cases are mild and get better in a few days with IV fluids, pain medicine, and resting the gut. In severe cases, parts of the pancreas can die (necrosis) and become infected, requiring intensive care and sometimes surgery.`,
      keyTerms: [t('pancreas', 'An organ that makes digestive enzymes and insulin'), t('gallstones', 'Hard deposits in the gallbladder that can block the pancreatic duct'), t('necrosis', 'Death of tissue — a serious complication of pancreatitis')],
      analogies: ['The pancreas is like a factory that makes powerful chemicals — in pancreatitis, those chemicals leak inside the factory and damage it.'],
      patientCounselingPoints: ['Go to the ER immediately for severe upper belly pain with vomiting', 'Avoid alcohol completely after pancreatitis', 'Gallbladder removal prevents recurrence from gallstones'],
    },
    2: {
      level: 2,
      summary: 'Acute pancreatitis is diagnosed by 2 of 3 criteria: characteristic abdominal pain, lipase >3x ULN, and/or imaging findings. Gallstones and alcohol account for ~80% of cases.',
      explanation: `**Diagnosis (revised Atlanta criteria):** Need 2 of 3: (1) characteristic epigastric pain radiating to the back, (2) serum lipase or amylase >3x upper limit of normal, (3) characteristic findings on CT/MRI/US. Lipase is more specific and stays elevated longer than amylase. **Causes (I GET SMASHED mnemonic):** Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia, ERCP, Drugs (azathioprine, valproic acid, didanosine). **Severity:** Mild (no organ failure, no local complications), moderately severe (transient organ failure <48h or local complications), severe (persistent organ failure >48h). **Management:** Aggressive early IV fluid resuscitation (goal-directed), pain control (multimodal, opioids if needed), early oral feeding as tolerated (within 24h if mild). CT with contrast at 72-96h if no improvement (assess necrosis). Cholecystectomy during same admission for mild gallstone pancreatitis.`,
      keyTerms: [t('lipase', 'Enzyme from the pancreas — elevated >3x normal in acute pancreatitis'), t('Atlanta criteria', 'Classification system for acute pancreatitis severity'), t('ERCP', 'Endoscopic procedure that can both cause and treat pancreatitis')],
      examples: ['A patient with epigastric pain, vomiting, lipase of 1,500 U/L, and gallstones on ultrasound has mild gallstone pancreatitis — cholecystectomy should be done during the same hospitalization.'],
    },
    3: {
      level: 3,
      summary: 'Acute pancreatitis pathogenesis involves premature intracellular trypsinogen activation, acinar cell injury, SIRS, and a biphasic course with early organ failure and late infected necrosis as mortality drivers.',
      explanation: `**Pathogenesis:** Premature trypsinogen-to-trypsin conversion within acinar cells (normally prevented by SPINK1 inhibitor) triggers autodigestion. Calcium signaling disruption (sustained cytosolic Ca2+ elevation) impairs zymogen granule trafficking. Released pancreatic enzymes cause local fat necrosis, edema, and vascular injury. DAMPs from necrotic cells activate innate immunity (TLR4/NF-kB), generating a systemic inflammatory response (SIRS). **Biphasic mortality:** Week 1-2: early organ failure from SIRS (30% of deaths). Week 3-6: infected pancreatic necrosis with sepsis (70% of deaths). **Prognostication:** BISAP score (BUN >25, impaired mental status, SIRS, age >60, pleural effusion) — simple, validated. APACHE II >8 at admission predicts severe course. Hemoconcentration (HCT >44%) and elevated BUN are early markers. **Local complications:** Acute peripancreatic fluid collections (<4 weeks), pseudocyst (>4 weeks, encapsulated), acute necrotic collection, walled-off necrosis (WON, >4 weeks). Infected necrosis: suspect if gas on CT or failure to improve. FNA culture or empiric antibiotics controversial — step-up approach preferred.`,
      keyTerms: [t('SPINK1', 'Serine protease inhibitor Kazal type 1 — pancreatic trypsin inhibitor; mutations predispose to pancreatitis'), t('walled-off necrosis', 'Mature encapsulated collection of pancreatic and/or peripancreatic necrosis — candidate for intervention'), t('step-up approach', 'Graduated intervention: percutaneous drainage -> endoscopic necrosectomy -> surgery for infected necrosis')],
      clinicalNotes: 'WATERFALL trial (2022): goal-directed (moderate) fluid resuscitation is non-inferior and safer than aggressive fluid resuscitation in AP — aggressive fluids may cause fluid overload.',
    },
    4: {
      level: 4,
      summary: 'Advanced acute pancreatitis management encompasses the step-up approach for necrotizing pancreatitis, endoscopic transgastric necrosectomy, autoimmune pancreatitis differentiation, and post-AP diabetes screening.',
      explanation: `**Step-up approach (PANTER/TENSION trials):** Percutaneous catheter drainage (PCD) as first step — resolves ~35% without further intervention. If drainage fails: endoscopic transluminal necrosectomy (ETN) via lumen-apposing metal stents (LAMS) or minimally invasive surgical necrosectomy (VARD). TENSION trial: endoscopic step-up non-inferior to surgical step-up with fewer fistulas and shorter ICU stays. **Autoimmune pancreatitis (AIP):** Type 1 (IgG4-related, systemic, elevated serum IgG4, >60 yo males) — sausage-shaped pancreas, responds to steroids. Type 2 (granulocytic epithelial lesion, localized, younger, associated with IBD) — also steroid-responsive. Differentiate from pancreatic cancer: IgG4 >2x ULN, other organ involvement, response to steroid trial. **Post-AP sequelae:** 40% develop exocrine insufficiency (fecal elastase <200). 25-40% develop prediabetes/diabetes within 5 years (type 3c, pancreatogenic). Screen with fecal elastase and HbA1c at 3 months and annually. **Genetic pancreatitis:** PRSS1 (autosomal dominant hereditary pancreatitis), SPINK1, CFTR, CTRC mutations — consider if onset <20 years, family history, or recurrent idiopathic episodes.`,
      keyTerms: [t('LAMS', 'Lumen-apposing metal stent — used for endoscopic drainage/necrosectomy of walled-off necrosis'), t('AIP', 'Autoimmune pancreatitis — steroid-responsive condition mimicking pancreatic cancer'), t('type 3c diabetes', 'Pancreatogenic diabetes resulting from pancreatic exocrine disease and islet destruction')],
      clinicalNotes: 'Do not intervene on sterile necrosis unless symptomatic (pain, obstruction). Wait at least 4 weeks for encapsulation (WON) before necrosectomy when possible.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include early anti-inflammatory targets (trypsin-independent pathways), organoid-based pancreatic regeneration, liquid biopsy for infected necrosis prediction, and pharmacologic prevention of post-ERCP pancreatitis.',
      explanation: `**Trypsin-independent pathways:** NF-kB activation in acinar cells occurs upstream of trypsinogen activation — direct NF-kB inhibition may prevent progression independent of trypsin. NLRP3 inflammasome activation (pyroptosis) is central to early AP amplification; MCC950 (NLRP3 inhibitor) reduces severity in preclinical models. Receptor-interacting protein kinase 3 (RIPK3)-mediated necroptosis as a therapeutic target. **Biomarkers:** Circulating cell-free DNA (cfDNA) concentration correlates with necrosis volume and predicts organ failure within 24h. IL-6, procalcitonin trajectory, and presepsin for early infection detection in necrotizing AP. Machine learning models integrating clinical, lab, and imaging data outperform APACHE II for severity prediction. **Prevention:** Rectal indomethacin + aggressive hydration before ERCP reduces PEP (post-ERCP pancreatitis) by ~50%. Pancreatic duct stent placement for high-risk procedures. **Regenerative medicine:** Pancreatic acinar-to-ductal metaplasia (ADM) is a key regenerative/neoplastic switch. Organoid technology enables ex vivo modeling of pancreatic duct regeneration and drug screening for chronic pancreatitis.`,
      keyTerms: [t('NLRP3 inflammasome', 'Innate immune complex driving IL-1beta/IL-18 release and pyroptosis — central amplifier of acute pancreatitis severity'), t('necroptosis', 'Programmed necrotic cell death mediated by RIPK3/MLKL — distinct from apoptosis, highly inflammatory'), t('acinar-to-ductal metaplasia', 'Transdifferentiation of acinar cells to ductal phenotype — regenerative response that can progress to neoplasia')],
      clinicalNotes: 'cfDNA >115 ng/mL within 24h predicts severe AP with AUC 0.88. May guide early ICU triage and aggressive intervention. NLRP3 inhibitors remain preclinical.',
    },
  },
  media: [],
  citations: [{ id: 'aga-ap-2018', type: 'article', title: 'AGA Guidelines on Acute Pancreatitis', source: 'Gastroenterology 2018', authors: ['Crockett SD et al.'] }],
  crossReferences: [
    { targetId: 'gi-pancreatic-chronic', targetType: 'condition', relationship: 'related', label: 'Chronic Pancreatitis' },
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'see-also', label: 'Alcoholic Liver Disease' },
  ],
  tags: { systems: ['gastrointestinal', 'hepatobiliary'], topics: ['gastroenterology', 'pancreatic', 'emergency'], keywords: ['pancreatitis', 'acute', 'gallstone', 'necrosis', 'lipase', 'ERCP'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
