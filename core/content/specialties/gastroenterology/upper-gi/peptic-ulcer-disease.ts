/**
 * Peptic Ulcer Disease — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const pepticUlcerContent: EducationalContent = {
  id: 'gi-upper-pud',
  type: 'condition',
  name: 'Peptic Ulcer Disease',
  nameEs: 'Enfermedad Ulcerosa P\u00e9ptica',
  alternateNames: ['PUD', 'Gastric Ulcer', 'Duodenal Ulcer', 'Stomach Ulcer'],
  levels: {
    1: {
      level: 1,
      summary: 'Peptic ulcers are open sores in the stomach or upper small intestine caused mainly by a germ (H. pylori) or pain medicines like ibuprofen.',
      explanation: `Your stomach has a protective lining that keeps acid from hurting the wall. When that lining gets damaged — usually by a bacteria called H. pylori or by taking too many pain pills (NSAIDs like ibuprofen) — the acid eats into the wall and makes a sore called an ulcer. The most common symptom is a gnawing or burning pain in the upper belly, often worse when your stomach is empty. Ulcers can usually be healed with medicines that reduce acid and, if H. pylori is present, antibiotics to kill the germ.`,
      keyTerms: [t('ulcer', 'An open sore in the lining of the stomach or intestine'), t('H. pylori', 'A bacteria that lives in the stomach and causes ulcers'), t('NSAIDs', 'Pain medicines like ibuprofen and aspirin')],
      analogies: ['An ulcer is like a pothole in a road — the protective surface has worn away and the material underneath is exposed.'],
      patientCounselingPoints: ['Complete the full course of antibiotics if prescribed', 'Avoid NSAIDs — use acetaminophen for pain instead', 'Seek immediate care for black stools or vomiting blood'],
    },
    2: {
      level: 2,
      summary: 'Peptic ulcer disease involves mucosal breaks in the stomach or duodenum, primarily from H. pylori infection or NSAID use, disrupting the balance between acid and mucosal defense.',
      explanation: `The stomach lining is protected by mucus, bicarbonate, and prostaglandins. H. pylori colonizes the gastric epithelium and triggers chronic inflammation, weakening defenses. NSAIDs inhibit COX-1, reducing prostaglandin synthesis and mucosal blood flow. Duodenal ulcers (more common) cause epigastric pain relieved by eating; gastric ulcers cause pain worsened by eating. Diagnosis: H. pylori testing (stool antigen or urea breath test) and upper endoscopy if alarm features. Treatment: PPI plus triple or quadruple antibiotic therapy for H. pylori eradication. Complications include bleeding, perforation, and gastric outlet obstruction.`,
      keyTerms: [t('duodenal ulcer', 'Ulcer in the first part of the small intestine — most common type'), t('prostaglandins', 'Chemicals that protect the stomach lining; blocked by NSAIDs'), t('triple therapy', 'PPI + clarithromycin + amoxicillin for H. pylori')],
      examples: ['A patient on daily aspirin for heart protection develops epigastric pain — NSAID-induced ulcer should be considered.'],
    },
    3: {
      level: 3,
      summary: 'PUD results from mucosal defense failure against acid-pepsin aggression, with H. pylori (antral-predominant gastritis driving duodenal ulcers) and NSAIDs as primary etiologies.',
      explanation: `H. pylori pathogenesis: CagA-positive strains inject the CagA protein via a type IV secretion system, disrupting epithelial cell signaling. Antral-predominant infection increases gastrin release and acid output, favoring duodenal ulcers. Corpus-predominant gastritis causes atrophy and hypochlorhydria, favoring gastric ulcers and cancer. NSAID mechanism: COX-1 inhibition depletes mucosal prostaglandins (PGE2, PGI2), reducing mucus/bicarbonate secretion and mucosal blood flow. Topical injury from acidic NSAIDs is a secondary factor. Diagnosis: urea breath test (sensitivity/specificity >95%), fecal antigen (comparable accuracy), serology (cannot confirm active infection). Endoscopy: biopsy gastric ulcers to rule out malignancy (duodenal ulcers are rarely malignant). H. pylori eradication: bismuth quadruple therapy (PPI + bismuth + metronidazole + tetracycline) in areas with >15% clarithromycin resistance.`,
      keyTerms: [t('CagA', 'Cytotoxin-associated gene A — H. pylori virulence factor associated with higher ulcer and cancer risk'), t('urea breath test', 'Gold standard non-invasive test for active H. pylori infection'), t('Zollinger-Ellison syndrome', 'Gastrinoma causing extreme acid hypersecretion and refractory ulcers')],
      clinicalNotes: 'Hold PPI for 2 weeks and antibiotics for 4 weeks before H. pylori testing to avoid false negatives. Confirm eradication 4+ weeks after therapy completion.',
    },
    4: {
      level: 4,
      summary: 'Advanced PUD management includes H. pylori resistance-guided therapy, risk stratification for NSAID gastropathy, and endoscopic hemostasis for bleeding ulcers.',
      explanation: `Resistance-guided therapy: culture-based or molecular (PCR) susceptibility testing improves eradication rates to >90%. Empiric regimens in high-resistance areas: bismuth quadruple or concomitant therapy (PPI + amoxicillin + clarithromycin + metronidazole). NSAID risk stratification: high-risk patients (prior ulcer, dual antiplatelet, anticoagulants, age >65) need gastroprotection with PPI co-therapy. COX-2 selective inhibitors (celecoxib) reduce but do not eliminate GI risk. Bleeding peptic ulcers: Forrest classification guides endoscopic therapy. High-risk stigmata (Forrest Ia/Ib/IIa) require dual endoscopic hemostasis (epinephrine injection + thermal/clip). IV PPI bolus + infusion (80 mg then 8 mg/hr x 72h) after endoscopy reduces rebleeding. Rockall and Glasgow-Blatchford scores guide disposition. Surgical intervention for failed endoscopic hemostasis or perforation (Graham patch for duodenal, wedge resection for gastric).`,
      keyTerms: [t('Forrest classification', 'Endoscopic classification of ulcer bleeding stigmata (Ia-III) guiding management'), t('Glasgow-Blatchford score', 'Pre-endoscopy risk score for upper GI bleeding; score 0 = safe for outpatient management'), t('Graham patch', 'Omental patch repair for perforated duodenal ulcer')],
      clinicalNotes: 'Forrest IIb (adherent clot): guidelines vary — AGA suggests removing clot and treating underlying lesion. Forrest IIc/III: low rebleed risk, no endoscopic therapy needed.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include H. pylori vaccine development, AI-assisted endoscopic risk stratification, molecular resistance profiling, and chemoprevention of H. pylori-related gastric cancer.',
      explanation: `Maastricht VI/Florence consensus recommends test-and-treat for H. pylori in populations with gastric cancer incidence >6/100,000. Molecular susceptibility testing via next-generation sequencing detects point mutations in 23S rRNA (clarithromycin), rdxA/frxA (metronidazole), gyrA (fluoroquinolone). Eradication reduces gastric cancer risk by ~46% in meta-analyses. Vonoprazan-based triple therapy shows superior eradication vs. PPI-based regimens for clarithromycin-resistant strains. For bleeding ulcers, hemostatic powders (TC-325), over-the-scope clips (OTSC), and doppler endoscopic probe-guided therapy improve outcomes for refractory bleeding. AI convolutional neural networks achieve >95% accuracy in detecting H. pylori gastritis on endoscopic images. Cap-assisted or Forrest-guided protocols reduce unnecessary intervention. Ongoing H. pylori vaccine candidates target urease, CagA, and VacA antigens.`,
      keyTerms: [t('Maastricht VI', 'Latest international H. pylori management consensus guidelines'), t('OTSC', 'Over-the-scope clip — large-bore clip for refractory GI bleeding or perforation closure'), t('TC-325', 'Hemospray — hemostatic nanopowder for acute GI bleeding')],
      clinicalNotes: 'Vonoprazan triple therapy (vonoprazan + amoxicillin + clarithromycin) achieved 84.7% eradication vs. 78.8% for PPI-based in PHOCUS trial. WHO lists H. pylori eradication as a cancer prevention strategy.',
    },
  },
  media: [],
  citations: [{ id: 'maastricht-vi', type: 'article', title: 'Maastricht VI/Florence Consensus', source: 'Gut 2022', authors: ['Malfertheiner P et al.'] }],
  crossReferences: [
    { targetId: 'gi-upper-gerd', targetType: 'condition', relationship: 'related', label: 'GERD' },
    { targetId: 'gi-lower-ibd', targetType: 'condition', relationship: 'see-also', label: 'IBD' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'upper-gi'], keywords: ['peptic ulcer', 'H. pylori', 'NSAID', 'GI bleeding', 'PUD'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
