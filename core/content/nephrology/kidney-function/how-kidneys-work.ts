import { EducationalContent } from '../../types';

export const howKidneysWork: EducationalContent = {
  id: 'how-kidneys-work',
  type: 'concept',
  name: 'How Kidneys Work',
  levels: {
    1: {
      level: 1,
      summary: 'The kidneys are bean-shaped organs that clean your blood and make urine.',
      explanation: 'You have two kidneys located in your back, below your ribs. They filter waste and extra water from your blood to make urine, which leaves your body when you go to the bathroom.',
      keyTerms: [{ term: 'kidneys', definition: 'Organs that filter blood and make urine' }, { term: 'urine', definition: 'Liquid waste removed from body' }, { term: 'filter', definition: 'Remove unwanted substances' }, { term: 'waste', definition: 'Things the body doesn\'t need' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'Kidneys filter blood, regulate fluid and electrolyte balance, and produce hormones.',
      explanation: 'The kidneys filter approximately 180 liters of blood daily, removing waste products while retaining essential nutrients. They regulate sodium, potassium, and acid-base balance, control blood pressure through the renin-angiotensin system, and produce erythropoietin for red blood cell production.',
      keyTerms: [{ term: 'glomerular filtration', definition: 'Filtering of blood in kidney glomeruli' }, { term: 'electrolyte balance', definition: 'Maintaining proper levels of sodium, potassium, etc.' }, { term: 'renin-angiotensin system', definition: 'Hormone system regulating blood pressure' }, { term: 'erythropoietin', definition: 'Hormone that stimulates red blood cell production' }, { term: 'acid-base balance', definition: 'Maintaining proper blood pH' }],
      clinicalNotes: 'Normal GFR is >90 mL/min/1.73m². Kidneys maintain homeostasis through filtration, reabsorption, and secretion.'
    },
    3: {
      level: 3,
      summary: 'The nephron is the functional unit of the kidney, performing filtration, reabsorption, and secretion.',
      explanation: 'Each kidney contains approximately 1 million nephrons. The glomerulus filters plasma, producing ultrafiltrate. The tubular system selectively reabsorbs water, electrolytes, and nutrients while secreting waste products. The loop of Henle creates a concentration gradient enabling urine concentration. Hormones including ADH, aldosterone, and PTH regulate these processes.',
      keyTerms: [{ term: 'nephron', definition: 'Functional unit of the kidney' }, { term: 'glomerulus', definition: 'Ball of capillaries that filters blood' }, { term: 'proximal tubule', definition: 'First segment reabsorbing most filtered substances' }, { term: 'loop of Henle', definition: 'U-shaped tubule creating concentration gradient' }, { term: 'distal tubule', definition: 'Tubule segment for fine-tuning electrolyte balance' }, { term: 'collecting duct', definition: 'Final segment concentrating urine' }, { term: 'ADH', definition: 'Antidiuretic hormone controlling water reabsorption' }, { term: 'aldosterone', definition: 'Hormone regulating sodium and potassium balance' }],
      clinicalNotes: 'The proximal tubule reabsorbs 65% of filtered sodium and water. Loop diuretics block sodium reabsorption in the thick ascending limb of Henle.'
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of renal physiology includes autoregulation, tubuloglomerular feedback, and integrated hormonal control.',
      explanation: 'The kidneys autoregulate GFR through myogenic and tubuloglomerular feedback mechanisms, maintaining stable filtration despite blood pressure fluctuations. Juxtaglomerular apparatus senses distal tubule sodium delivery and modulates afferent arteriolar tone and renin secretion. The kidney integrates multiple hormonal signals including RAAS, natriuretic peptides, and prostaglandins to maintain volume and pressure homeostasis.',
      keyTerms: [{ term: 'autoregulation', definition: 'Kidney\'s ability to maintain stable GFR despite BP changes' }, { term: 'tubuloglomerular feedback', definition: 'Mechanism sensing distal tubule sodium' }, { term: 'juxtaglomerular apparatus', definition: 'Structure regulating GFR and renin release' }, { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system' }, { term: 'natriuretic peptides', definition: 'Hormones promoting sodium excretion' }, { term: 'prostaglandins', definition: 'Lipid compounds regulating renal blood flow' }],
      clinicalNotes: 'Autoregulation maintains GFR between MAP 80-180 mmHg. NSAIDs impair afferent arteriolar dilation and can precipitate AKI in volume-depleted states. ACE inhibitors reduce efferent arteriolar tone, decreasing glomerular pressure.'
    },
    5: {
      level: 5,
      summary: 'Expert knowledge encompasses molecular mechanisms of transport, signaling pathways in kidney disease, and emerging therapeutic targets.',
      explanation: 'Specific transporters in each nephron segment mediate selective reabsorption: SGLT2 in proximal tubule, NKCC2 in thick ascending limb, NCC in distal tubule, and ENaC in collecting duct. Understanding these transporters enables targeted therapy. The kidney exhibits metabolic flexibility, utilizing both oxidative phosphorylation and glycolysis. Metabolic reprogramming occurs in kidney disease and represents a therapeutic target. Single-cell genomics reveals heterogeneity within nephron segments with distinct transcriptional programs.',
      keyTerms: [{ term: 'SGLT2', definition: 'Sodium-glucose cotransporter 2 in proximal tubule' }, { term: 'NKCC2', definition: 'Sodium-potassium-chloride cotransporter in loop of Henle' }, { term: 'NCC', definition: 'Sodium-chloride cotransporter in distal tubule' }, { term: 'ENaC', definition: 'Epithelial sodium channel in collecting duct' }, { term: 'metabolic reprogramming', definition: 'Alterations in cellular metabolism in disease' }, { term: 'single-cell genomics', definition: 'Genetic analysis at individual cell level' }, { term: 'precision nephrology', definition: 'Individualized kidney disease treatment' }],
      clinicalNotes: 'SGLT2 inhibitors reduce cardiovascular and kidney disease progression in diabetic and non-diabetic CKD. Targeting metabolic pathways may slow CKD progression. Understanding tubular segment-specific injury mechanisms guides biomarker development.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'measuring-kidney-function', targetType: 'concept', relationship: 'related' }, { targetId: 'kidney-disease-stages', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
