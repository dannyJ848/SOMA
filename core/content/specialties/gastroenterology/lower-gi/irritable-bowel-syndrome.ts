/**
 * Irritable Bowel Syndrome — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const ibsContent: EducationalContent = {
  id: 'gi-lower-ibs',
  type: 'condition',
  name: 'Irritable Bowel Syndrome',
  nameEs: 'S\u00edndrome del Intestino Irritable',
  alternateNames: ['IBS', 'Spastic Colon', 'Functional Bowel Disorder'],
  levels: {
    1: {
      level: 1,
      summary: 'IBS is a common condition where the gut is extra sensitive, causing belly pain, bloating, and changes in bowel habits without any visible damage.',
      explanation: `IBS is very common — about 1 in 10 people have it. Your intestines look completely normal, but they don't work the way they should. The muscles in your gut may squeeze too hard or too softly, and the nerves in your gut may be extra sensitive. This causes belly pain or cramping, bloating, and diarrhea, constipation, or both. Stress and certain foods can make it worse. IBS is uncomfortable but does not damage your intestines or lead to serious disease. Treatment focuses on diet changes, stress management, and medicines to ease symptoms.`,
      keyTerms: [t('IBS', 'A condition where the gut is overly sensitive, causing pain and bowel changes'), t('bloating', 'Feeling of fullness or swelling in the belly'), t('functional disorder', 'A condition where the organ looks normal but doesn\'t work properly')],
      analogies: ['IBS is like a car alarm that goes off too easily — the gut signals pain even when nothing dangerous is happening.'],
      patientCounselingPoints: ['IBS does not lead to cancer or damage your intestines', 'A low-FODMAP diet may help identify trigger foods', 'Regular exercise and stress management improve symptoms'],
    },
    2: {
      level: 2,
      summary: 'IBS is a functional gastrointestinal disorder defined by recurrent abdominal pain associated with defecation or changes in stool form/frequency, classified as IBS-D, IBS-C, or IBS-M.',
      explanation: `IBS is diagnosed using Rome IV criteria: recurrent abdominal pain at least 1 day/week for the last 3 months, associated with 2+ of: related to defecation, change in stool frequency, change in stool form (Bristol Stool Scale). Subtypes: IBS-D (diarrhea-predominant), IBS-C (constipation-predominant), IBS-M (mixed). Pathophysiology involves visceral hypersensitivity, altered gut motility, gut-brain axis dysfunction, and gut microbiome changes. Limited testing: CBC, CRP, celiac serologies, and stool calprotectin to exclude organic disease. First-line: dietary modification (low-FODMAP diet reduces symptoms in ~70%), fiber supplementation (soluble preferred), and antispasmodics (hyoscine, peppermint oil). Psychological therapies (CBT, gut-directed hypnotherapy) have strong evidence.`,
      keyTerms: [t('Rome IV criteria', 'Standard diagnostic criteria for functional GI disorders including IBS'), t('FODMAP', 'Fermentable oligosaccharides, disaccharides, monosaccharides, and polyols — poorly absorbed sugars that trigger IBS'), t('visceral hypersensitivity', 'Increased pain perception from normal gut activity')],
      examples: ['A patient with chronic abdominal pain relieved by defecation, alternating diarrhea and constipation, and normal bloodwork meets IBS-M criteria.'],
    },
    3: {
      level: 3,
      summary: 'IBS pathophysiology involves bidirectional gut-brain axis dysfunction, visceral hypersensitivity, altered motility, intestinal permeability changes, and microbiome dysbiosis.',
      explanation: `**Gut-brain axis:** Central sensitization in the anterior cingulate cortex and insula amplifies visceral afferent signals. Serotonin (5-HT) dysregulation is central — 95% of body 5-HT is in the gut. Increased 5-HT in IBS-D, decreased in IBS-C. **Microbiome:** Reduced diversity, decreased Bifidobacterium and Lactobacillus, increased Firmicutes/Bacteroidetes ratio. Post-infectious IBS occurs in 10-15% after acute gastroenteritis. **Low-permeability barrier:** Tight junction proteins (occludin, claudins) are downregulated, increasing paracellular permeability. Mast cell activation near enteric nerves drives visceral hypersensitivity. **Pharmacotherapy by subtype:** IBS-D: rifaximin 550 mg TID x 14 days (targets SIBO/dysbiosis), eluxadoline (mu-opioid agonist/delta antagonist), bile acid sequestrants if BAM suspected. IBS-C: linaclotide, plecanatide (guanylate cyclase-C agonists), lubiprostone (chloride channel activator), tenapanor. **Biomarkers:** Anti-CdtB and anti-vinculin antibodies may distinguish IBS-D from IBD.`,
      keyTerms: [t('gut-brain axis', 'Bidirectional communication between CNS and enteric nervous system via vagal, immune, and endocrine pathways'), t('rifaximin', 'Non-absorbed antibiotic used in IBS-D — modulates gut microbiome'), t('linaclotide', 'Guanylate cyclase-C agonist increasing intestinal fluid secretion and reducing visceral pain')],
      clinicalNotes: 'Rifaximin retreatment is effective and safe for IBS-D relapse. Eluxadoline is contraindicated in patients without a gallbladder (pancreatitis risk).',
    },
    4: {
      level: 4,
      summary: 'Advanced IBS management includes neuromodulator therapy, microbiome-targeted interventions, and recognition of overlap syndromes with functional dyspepsia and central sensitization disorders.',
      explanation: `**Neuromodulators:** Tricyclic antidepressants (amitriptyline 10-50 mg) are first-line central neuromodulators for IBS — reduce visceral pain via descending inhibitory pathway modulation. SNRIs (duloxetine) for pain-predominant IBS with comorbid anxiety. SSRIs for comorbid depression. Pregabalin for refractory visceral hypersensitivity. **Overlap syndromes:** IBS frequently coexists with functional dyspepsia (overlap ~40%), fibromyalgia, chronic fatigue, and migraine — suggesting central sensitization. **Bile acid diarrhea (BAD):** SeHCAT testing (75Se-homotaurocholic acid retention) or serum C4/FGF19 levels identify BAD in up to 30% of IBS-D patients. Cholestyramine is therapeutic. **Gut-directed hypnotherapy:** RCTs show sustained benefit up to 5 years. NICE and AGA guidelines recommend it. Mechanism: modulates anterior cingulate cortex activation and rectal sensitivity thresholds. **Diet:** FODMAP elimination (6-8 weeks) followed by structured reintroduction identifies individual triggers. Gluten sensitivity without celiac disease remains debated.`,
      keyTerms: [t('central sensitization', 'Amplified CNS pain processing — shared mechanism across IBS, fibromyalgia, and chronic pain syndromes'), t('BAD', 'Bile acid diarrhea — underdiagnosed cause of IBS-D symptoms, responsive to sequestrants'), t('SeHCAT', '75Se-homotaurocholic acid test — nuclear medicine test for bile acid malabsorption')],
      clinicalNotes: 'Up to 30% of IBS-D is actually bile acid diarrhea. Empiric cholestyramine trial is reasonable when SeHCAT is unavailable.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include IBS molecular subtyping via multi-omics, microbiome transplant and defined consortia, novel neuroimmune targets, and digital therapeutics.',
      explanation: `**Molecular subtyping:** Mucosal transcriptomics identify IBS subgroups with distinct immune activation patterns (mast cell-high, lymphocyte-high, neuronal). Stool metabolomics reveals tryptophan pathway metabolites (kynurenine, serotonin) as potential biomarkers. **Microbiome therapies:** FMT shows modest benefit in IBS (donor-dependent); anaerobic donor stool preparation may improve efficacy. Defined microbial consortia targeting butyrate production are in trials. **Novel targets:** Histamine H1 receptor antagonism (ebastine) reduces visceral hypersensitivity in mast cell-high IBS. Anti-CGRP antibodies (migraine drugs) being explored for visceral pain. Ibodutant (NK2 receptor antagonist) showed efficacy in IBS-D phase 2. **Digital therapeutics:** FDA-cleared cognitive behavioral therapy apps (e.g., Mahana) demonstrate non-inferiority to in-person CBT. Wearable gut-motility sensors enable real-time symptom-motility correlation. **Autoimmune hypothesis:** Anti-vinculin antibodies suggest autoimmune etiology in post-infectious IBS. Molecular mimicry between CdtB toxin and vinculin may drive dysmotility.`,
      keyTerms: [t('anti-vinculin antibodies', 'Autoantibodies against the cytoskeletal protein vinculin — potential IBS-D biomarker suggesting autoimmune mechanism'), t('Mahana', 'FDA-cleared digital CBT therapeutic for IBS'), t('ibodutant', 'NK2 tachykinin receptor antagonist — novel visceral analgesic for IBS-D')],
      clinicalNotes: 'Anti-CdtB/anti-vinculin testing (ibs-smart) has ~44% sensitivity, 92% specificity for IBS-D vs IBD. Useful as a rule-in test, not screening.',
    },
  },
  media: [],
  citations: [{ id: 'rome-iv', type: 'article', title: 'Rome IV Diagnostic Criteria for FGIDs', source: 'Gastroenterology 2016', authors: ['Drossman DA'] }],
  crossReferences: [
    { targetId: 'gi-lower-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
    { targetId: 'gi-upper-gerd', targetType: 'condition', relationship: 'see-also', label: 'Functional Dyspepsia Overlap' },
  ],
  tags: { systems: ['gastrointestinal', 'nervous'], topics: ['gastroenterology', 'lower-gi', 'functional'], keywords: ['IBS', 'FODMAP', 'gut-brain', 'functional', 'visceral hypersensitivity'], clinicalRelevance: 'medium', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
