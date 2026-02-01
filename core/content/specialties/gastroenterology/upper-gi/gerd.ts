/**
 * Gastroesophageal Reflux Disease (GERD) — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const gerdContent: EducationalContent = {
  id: 'gi-upper-gerd',
  type: 'condition',
  name: 'Gastroesophageal Reflux Disease (GERD)',
  nameEs: 'Enfermedad por Reflujo Gastroesof\u00e1gico',
  alternateNames: ['Acid Reflux', 'Heartburn Disease', 'GORD'],
  levels: {
    1: {
      level: 1,
      summary: 'GERD is when stomach acid repeatedly flows back into the food pipe, causing heartburn and irritation.',
      explanation: `Your stomach makes acid to digest food. A muscle at the top of your stomach acts like a one-way valve. In GERD, this valve is weak or relaxes too often, letting acid splash up into your food pipe (esophagus). This causes burning chest pain called heartburn, especially after meals or when lying down. Over time the acid can damage the lining. Treatment includes avoiding trigger foods, not lying down after eating, and medicines that reduce acid.`,
      keyTerms: [t('GERD', 'Repeated backflow of stomach acid into the food pipe'), t('heartburn', 'Burning feeling in the chest from acid'), t('esophagus', 'The tube connecting your mouth to your stomach')],
      analogies: ['The valve at the top of your stomach is like a trapdoor that should stay shut — in GERD it keeps swinging open.'],
      patientCounselingPoints: ['Elevate the head of your bed 6-8 inches', 'Avoid eating 3 hours before bedtime', 'Keep a food diary to find your personal triggers'],
    },
    2: {
      level: 2,
      summary: 'GERD results from lower esophageal sphincter (LES) dysfunction allowing gastric acid reflux, causing esophagitis and symptoms like heartburn and regurgitation.',
      explanation: `The lower esophageal sphincter (LES) normally prevents stomach contents from entering the esophagus. In GERD, transient LES relaxations or chronically low LES pressure allow acid and pepsin to contact esophageal mucosa. Risk factors include obesity, hiatal hernia, pregnancy, smoking, and certain foods (caffeine, chocolate, fatty foods). Diagnosis is clinical for typical symptoms. Alarm symptoms (dysphagia, weight loss, bleeding) warrant endoscopy. Treatment: lifestyle changes, then PPI therapy for 8 weeks.`,
      keyTerms: [t('LES', 'Lower esophageal sphincter — the muscle ring preventing reflux'), t('PPI', 'Proton pump inhibitor — a drug that blocks stomach acid production'), t('hiatal hernia', 'When part of the stomach pushes up through the diaphragm')],
      examples: ['A patient with nightly heartburn and chronic cough may have extraesophageal GERD.'],
    },
    3: {
      level: 3,
      summary: 'GERD involves transient LES relaxations and impaired esophageal clearance. Complications include erosive esophagitis, strictures, and Barrett esophagus.',
      explanation: `Pathophysiology centers on transient lower esophageal sphincter relaxations (TLESRs) mediated by vagal reflexes, reduced LES basal tone, and impaired esophageal peristaltic clearance. Hiatal hernia creates an acid pocket above the diaphragm. Esophageal mucosal defense (bicarbonate secretion, epithelial tight junctions) is overwhelmed by prolonged acid exposure. Diagnosis: empiric PPI trial, upper endoscopy with biopsy for alarm features, ambulatory pH monitoring (DeMeester score >14.7) for refractory cases. Los Angeles classification grades erosive esophagitis A-D. Barrett esophagus (intestinal metaplasia) is a premalignant condition requiring surveillance endoscopy.`,
      keyTerms: [t('Barrett esophagus', 'Intestinal metaplasia of esophageal squamous epithelium from chronic acid exposure'), t('TLESRs', 'Transient lower esophageal sphincter relaxations — the dominant reflux mechanism'), t('DeMeester score', 'Composite pH score; >14.7 indicates pathologic reflux')],
      clinicalNotes: 'Los Angeles grade C/D erosive esophagitis requires long-term PPI maintenance. Barrett esophagus surveillance: every 3-5 years without dysplasia.',
    },
    4: {
      level: 4,
      summary: 'GERD pathophysiology involves TLESRs, hiatal hernia mechanics, impaired mucosal defense, and esophageal hypersensitivity. Barrett esophagus carries adenocarcinoma risk.',
      explanation: `TLESRs are vagally mediated via mechanoreceptors in the gastric cardia; gastric distention is the primary trigger. The "acid pocket" — a layer of unbuffered acid floating atop postprandial gastric contents near the gastroesophageal junction — is enlarged by hiatal hernia. Impaired secondary peristalsis and reduced salivary bicarbonate prolong acid contact time. Mucosal injury follows a spectrum: non-erosive reflux disease (NERD, 60%) -> erosive esophagitis -> stricture -> Barrett metaplasia -> dysplasia -> adenocarcinoma. Functional heartburn (normal acid exposure, no reflux-symptom correlation) is managed with neuromodulators (TCAs, SSRIs). Impedance-pH testing distinguishes acid vs. weakly acidic vs. non-acid reflux. Anti-reflux surgery (Nissen fundoplication) or magnetic sphincter augmentation (LINX) for PPI-refractory anatomic disease.`,
      keyTerms: [t('acid pocket', 'Postprandial unbuffered acid layer near the GEJ'), t('NERD', 'Non-erosive reflux disease — symptoms with normal endoscopy'), t('LINX', 'Magnetic sphincter augmentation device for anti-reflux surgery')],
      clinicalNotes: 'Impedance-pH off PPI is the gold standard for diagnosing GERD. On-PPI testing identifies refractory reflux. Confirm Barrett with goblet cells on biopsy (intestinal metaplasia).',
    },
    5: {
      level: 5,
      summary: 'Advanced GERD management integrates impedance-pH phenotyping, novel endoscopic therapies, chemoprevention for Barrett, and molecular risk stratification for dysplasia progression.',
      explanation: `Lyon Consensus 2.0 criteria define conclusive GERD: AET >6%, >80 reflux episodes, or LA grade C/D. Borderline zone (AET 4-6%) requires adjunctive evidence (MNBI, PSPW index). Reflux hypersensitivity (positive symptom association, normal AET) is an esophageal functional disorder. Potassium-competitive acid blockers (P-CABs: vonoprazan) offer faster, more potent acid suppression than PPIs. Endoscopic anti-reflux procedures (transoral incisionless fundoplication, radiofrequency ablation — Stretta) fill the gap between medical and surgical therapy. Barrett esophagus management: radiofrequency ablation (RFA) for dysplastic Barrett achieves >90% eradication; cryotherapy for residual/recurrent disease. Molecular biomarkers (p53 immunohistochemistry, Cytosponge-TFF3 for screening) are entering clinical practice. Annual EA risk from non-dysplastic Barrett is 0.3-0.5%.`,
      keyTerms: [t('Lyon Consensus', 'Evidence-based criteria for objective GERD diagnosis using reflux monitoring'), t('P-CAB', 'Potassium-competitive acid blocker — next-generation antisecretory agent'), t('Cytosponge', 'Swallowable sponge device for non-endoscopic Barrett screening')],
      clinicalNotes: 'Vonoprazan 20 mg was non-inferior to PPI for EE healing in RCTs. AGA recommends against routine screening endoscopy for Barrett in general GERD population without risk factors.',
    },
  },
  media: [],
  citations: [{ id: 'lyon-2024', type: 'article', title: 'Lyon Consensus 2.0', source: 'Gut 2024', authors: ['Gyawali CP et al.'] }],
  crossReferences: [
    { targetId: 'gi-upper-pud', targetType: 'condition', relationship: 'related', label: 'Peptic Ulcer Disease' },
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'see-also', label: 'Portal Hypertensive Gastropathy' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'upper-gi'], keywords: ['GERD', 'reflux', 'Barrett', 'heartburn', 'PPI'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
