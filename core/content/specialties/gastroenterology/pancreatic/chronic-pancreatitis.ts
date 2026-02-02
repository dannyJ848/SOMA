/**
 * Chronic Pancreatitis — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const chronicPancreatitisContent: EducationalContent = {
  id: 'gi-pancreatic-chronic',
  type: 'condition',
  name: 'Chronic Pancreatitis',
  nameEs: 'Pancreatitis Cr\u00f3nica',
  alternateNames: ['CP', 'Chronic Pancreatic Inflammation', 'Calcific Pancreatitis'],
  levels: {
    1: {
      level: 1,
      summary: 'Chronic pancreatitis is long-term inflammation of the pancreas that slowly damages it, leading to ongoing pain and problems digesting food.',
      explanation: `Chronic pancreatitis happens when the pancreas becomes permanently scarred from repeated injury, most often from years of heavy alcohol use. Unlike acute pancreatitis (which is sudden and usually gets better), chronic pancreatitis causes lasting damage. Over time, the pancreas loses its ability to make digestive enzymes (so food isn't digested properly, causing oily stools and weight loss) and insulin (leading to diabetes). The main symptoms are recurring upper belly pain, weight loss, and greasy stools. Treatment includes pain management, taking enzyme pills with meals to help digest food, and managing diabetes if it develops.`,
      keyTerms: [t('chronic', 'Lasting a long time with permanent changes'), t('digestive enzymes', 'Chemicals the pancreas makes to break down food'), t('malabsorption', 'When your body can\'t properly absorb nutrients from food')],
      analogies: ['Chronic pancreatitis is like an old, worn-out engine — it has been damaged so many times that it can never fully work again.'],
      patientCounselingPoints: ['Stop all alcohol use — it is the most important step', 'Take pancreatic enzyme supplements with every meal and snack', 'Small, frequent, low-fat meals are easier to digest'],
    },
    2: {
      level: 2,
      summary: 'Chronic pancreatitis is progressive fibro-inflammatory disease causing irreversible parenchymal damage, exocrine insufficiency, endocrine insufficiency, and chronic pain.',
      explanation: `**Etiology (TIGAR-O):** Toxic-metabolic (alcohol 70%, smoking synergistic), Idiopathic, Genetic (PRSS1, SPINK1, CFTR), Autoimmune, Recurrent acute pancreatitis, Obstructive. **Pathology:** Progressive fibrosis replaces acinar and islet cells. Intraductal calcifications and strictures. **Diagnosis:** CT shows calcifications and ductal changes. MRCP/secretin-enhanced MRCP shows ductal dilation, side-branch ectasia, irregularity. EUS (most sensitive for early disease) — Rosemont criteria. **Exocrine insufficiency:** Occurs when >90% of function is lost. Fecal elastase-1 <200 mcg/g. Treatment: pancreatic enzyme replacement therapy (PERT) — lipase 40,000-50,000 units with meals, 25,000 with snacks. **Endocrine insufficiency:** Type 3c diabetes — occurs in 40-70% eventually. Brittle, prone to hypoglycemia (lost glucagon). **Pain management:** Stepwise: lifestyle changes -> analgesics -> pregabalin/antioxidants -> endoscopic therapy (ESWL for stones, stenting for strictures) -> surgery (Frey, Beger, or total pancreatectomy with islet autotransplantation).`,
      keyTerms: [t('PERT', 'Pancreatic enzyme replacement therapy — oral enzyme capsules taken with meals'), t('fecal elastase', 'Stool test for pancreatic exocrine function — <200 mcg/g indicates insufficiency'), t('TIGAR-O', 'Etiologic classification system for chronic pancreatitis')],
      examples: ['A patient with history of alcohol abuse, recurrent abdominal pain, pancreatic calcifications on CT, and steatorrhea has chronic pancreatitis with exocrine insufficiency.'],
    },
    3: {
      level: 3,
      summary: 'Chronic pancreatitis pathogenesis involves sentinel acute pancreatitis event (SAPE) hypothesis, neuroimmune interactions driving pain, and progressive acinar-to-ductal-to-fibrotic remodeling.',
      explanation: `**SAPE hypothesis:** Initial sentinel AP event sensitizes the pancreas; repeated insults (alcohol, smoking, genetic susceptibility) activate pancreatic stellate cells (PSCs) and perpetuate fibrosis. The "two-hit" model: first hit injures acinar cells, second hit recruits immune cells that activate PSCs. **Pain neurophysiology:** Pancreatic nociceptors are sensitized by NGF (nerve growth factor) overexpression and perineural inflammatory infiltration. Intrapancreatic nerve hypertrophy and central sensitization perpetuate pain even after pancreatic destruction. **Diagnosis challenges:** Early CP: normal CT, subtle EUS changes (Rosemont criteria — parenchymal and ductal features). Secretin-enhanced MRCP improves sensitivity for early ductal changes. Pancreatic function tests: secretin stimulation test (gold standard, rarely performed), fecal elastase (practical but insensitive for mild insufficiency). **Imaging progression:** Early -> lobularity, duct irregularity. Late -> calcifications, duct dilation, atrophy. Cambridge classification for ductal changes. **Pancreatic cancer risk:** 5-15x increased risk; annual screening controversial except for hereditary pancreatitis (PRSS1) where risk is ~40% lifetime.`,
      keyTerms: [t('SAPE hypothesis', 'Sentinel Acute Pancreatitis Event — model explaining progression from acute to chronic pancreatitis'), t('pancreatic stellate cells', 'Fibroblast-like cells activated by injury that produce collagen and drive pancreatic fibrosis'), t('Rosemont criteria', 'EUS-based diagnostic criteria for chronic pancreatitis using major and minor parenchymal/ductal features')],
      clinicalNotes: 'Smoking cessation is as important as alcohol cessation — smoking independently accelerates CP progression and doubles pancreatic cancer risk. Fat-soluble vitamin supplementation (A, D, E, K) in exocrine insufficiency.',
    },
    4: {
      level: 4,
      summary: 'Advanced CP management includes total pancreatectomy with islet autotransplantation (TPIAT), endoscopic intervention algorithms, and emerging anti-fibrotic and neuromodulatory therapies.',
      explanation: `**TPIAT:** Total pancreatectomy with islet autotransplantation — removes the pain source while preserving beta-cell mass. Best outcomes in early disease (<5 years), minimal fibrosis, non-alcoholic etiology. 30-50% achieve insulin independence at 5 years. 85% report significant pain reduction. Patient selection is critical — multidisciplinary evaluation required. **Endoscopic therapy (ESGE guidelines):** ESWL for radiolucent stones >5mm before ERCP extraction. Dominant stricture: single plastic stent or fully covered SEMS for 2-3 months. Multiple plastic stent strategy for refractory strictures. EUS-guided celiac plexus block (CPB) for pain — limited duration of benefit (2-6 months), repeat as needed. **Surgery vs. endoscopy:** Randomized trials (Cahen 2007, ESCAPE 2020) show early surgery superior to endoscopy-first approach for pain relief in CP with dilated duct. Frey (LPJ + coring) preferred for enlarged head; Partington-Rochelle for dilated duct without head mass. **Autoimmune pancreatitis management:** Type 1: IgG4-related, steroid-responsive, relapse in 30-50% — steroid-sparing agents (azathioprine, rituximab). Type 2: granulocytic epithelial lesion, associated with IBD, lower relapse rate.`,
      keyTerms: [t('TPIAT', 'Total pancreatectomy with islet autotransplantation — definitive surgery for intractable CP pain'), t('Frey procedure', 'Local resection of pancreatic head with longitudinal pancreaticojejunostomy'), t('ESWL', 'Extracorporeal shock wave lithotripsy — fragmentation of pancreatic duct stones before endoscopic extraction')],
      clinicalNotes: 'ESCAPE trial: early surgery within 6 weeks of diagnosis of painful CP with dilated duct results in superior pain relief vs. endoscopy-first step-up approach at 18 months.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include stellate cell-targeted anti-fibrotics, pain neuroscience with central sensitization reversal, organoid-derived islet replacement, and imaging biomarkers for early disease.',
      explanation: `**Anti-fibrotic targets:** PSC deactivation via vitamin A/retinoic acid signaling restoration, Hedgehog pathway inhibitors, and pirfenidone (repurposed from pulmonary fibrosis — phase 2 in CP). Anti-CTGF (connective tissue growth factor) antibodies reduce experimental fibrosis. Camostat (trypsin inhibitor) widely used in Japan, limited evidence in Western trials. **Pain neuroscience:** Quantitative sensory testing (QST) profiles identify central sensitization in ~50% of CP patients — these respond poorly to peripheral procedures (surgery/endoscopy) and better to neuromodulators (pregabalin, S-ketamine, duloxetine). Transcranial magnetic stimulation (TMS) targeting the insular cortex in exploratory trials. NGF-neutralizing antibodies (tanezumab) reduce visceral pain but articular safety concerns limit development. **Islet replacement:** Human pluripotent stem cell-derived beta cells combined with encapsulation devices (ViaCyte/Vertex) may eventually replace TPIAT islet isolation. Gene therapy for PRSS1 gain-of-function mutations using allele-specific silencing in preclinical stages. **Imaging biomarkers:** Quantitative MRI (T1 mapping, ADC values) detects early fibrosis before morphologic changes. Radiomic features on EUS predict fibrosis grade without biopsy. AI models on secretin-MRCP quantify exocrine reserve.`,
      keyTerms: [t('QST', 'Quantitative sensory testing — psychophysical assessment of pain processing; identifies central sensitization in CP'), t('pirfenidone', 'Anti-fibrotic agent approved for IPF — under investigation for pancreatic fibrosis'), t('camostat', 'Serine protease inhibitor — blocks trypsin and used empirically for CP in Japan')],
      clinicalNotes: 'QST-guided pain phenotyping may transform CP pain management: peripheral-predominant phenotype -> surgery/endoscopy; central-predominant -> neuromodulators/psychotherapy. Prospective validation ongoing.',
    },
  },
  media: [],
  citations: [{ id: 'aga-cp-2020', type: 'article', title: 'AGA Clinical Practice Update on Chronic Pancreatitis', source: 'Gastroenterology 2020', authors: ['Singh VK et al.'] }],
  crossReferences: [
    { targetId: 'gi-pancreatic-acute', targetType: 'condition', relationship: 'related', label: 'Acute Pancreatitis' },
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'see-also', label: 'Alcoholic Liver Disease' },
  ],
  tags: { systems: ['gastrointestinal', 'hepatobiliary', 'endocrine'], topics: ['gastroenterology', 'pancreatic'], keywords: ['chronic pancreatitis', 'fibrosis', 'PERT', 'pain', 'exocrine insufficiency', 'TPIAT'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
