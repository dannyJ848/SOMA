/**
 * Medical Prefixes Educational Content
 *
 * Comprehensive coverage of common medical prefixes with multi-level
 * explanations suitable for learners from 8th grade through medical professionals.
 */

import { EducationalContent } from '../types';

export const medicalPrefixes: EducationalContent = {
  id: 'medical-terminology-prefixes',
  type: 'topic',
  name: 'Medical Prefixes',
  alternateNames: ['Medical Word Beginnings', 'Prefixes in Medical Terminology'],

  levels: {
    1: {
      level: 1,
      summary: 'Prefixes are parts added to the beginning of words that change their meaning, like "un-" in "unhappy" or "re-" in "redo".',
      explanation: 'In medical words, prefixes are added at the start to tell us things like where something is, how much there is, or if something is wrong. Think of a prefix like a sign at the beginning of a word that gives you a hint about what the word means.\n\nFor example:\n- "Hyper-" means too much or over (like hyperactive means too active)\n- "Hypo-" means too little or under (like hypothermia means too cold)\n- "Anti-" means against (like antibodies fight against germs)\n- "Dys-" means bad or difficult (like dyslexia means trouble with reading)\n\nLearning these prefixes is like learning a secret code - once you know them, you can figure out what many medical words mean just by looking at their parts!',
      keyTerms: [
        { term: 'prefix', definition: 'A letter or group of letters added to the START of a word to change its meaning', pronunciation: 'PREE-fiks' },
        { term: 'hyper-', definition: 'A prefix meaning "too much" or "over"', pronunciation: 'HY-per' },
        { term: 'hypo-', definition: 'A prefix meaning "too little" or "under"', pronunciation: 'HY-poh' },
        { term: 'anti-', definition: 'A prefix meaning "against" or "opposing"', pronunciation: 'AN-tee' },
      ],
      analogies: [
        'Prefixes are like the first ingredient label on a recipe - they tell you what special quality the whole recipe will have.',
        'Think of medical words like LEGO buildings - prefixes are special starting pieces that determine what kind of building you will make.',
      ],
      examples: [
        'Hyperthermia = Hyper (too much) + thermia (heat) = too much heat in the body (fever/overheating)',
        'Hypothermia = Hypo (too little) + thermia (heat) = too little heat in the body (freezing)',
        'Antibiotic = Anti (against) + biotic (life) = medicine that works against bacteria (germs)',
        'Antiseptic = Anti (against) + septic (infection) = something that works against germs',
      ],
      patientCounselingPoints: [
        'Understanding prefixes helps you understand your medications - "anti-" drugs work against something, while "hyper-" and "hypo-" often describe test results that are too high or too low.',
      ],
    },

    2: {
      level: 2,
      summary: 'Medical prefixes are word parts placed at the beginning of terms that modify meaning, commonly indicating position, number, quantity, or negation.',
      explanation: 'Medical prefixes are derived primarily from Latin and Greek. They are attached to the beginning of medical root words to modify their meaning. Unlike root words, prefixes cannot stand alone - they must be attached to another word part.\n\n**Categories of Medical Prefixes:**\n\n**Position/Location Prefixes:**\n- **Endo-** = within, inside (endoscope = tool to look inside)\n- **Exo-/Ecto-** = outside, external (exoskeleton = skeleton on the outside)\n- **Peri-** = around, surrounding (pericardium = sac around the heart)\n- **Sub-** = under, below (subcutaneous = under the skin)\n- **Supra-/Super-** = above, over (suprapubic = above the pubic bone)\n\n**Quantity/Size Prefixes:**\n- **Hyper-** = excessive, above normal (hypertension = high blood pressure)\n- **Hypo-** = deficient, below normal (hypoglycemia = low blood sugar)\n- **Macro-** = large (macrocyte = large cell)\n- **Micro-** = small (microscope = instrument to see small things)\n\n**Number Prefixes:**\n- **Mono-/Uni-** = one (unilateral = one side)\n- **Bi-/Di-** = two (bilateral = both sides)\n- **Poly-/Multi-** = many (polycystic = many cysts)\n- **Semi-/Hemi-** = half (semiconscious = half conscious)\n\n**Negation Prefixes:**\n- **A-/An-** = without, absence of (anemia = without enough blood cells)\n- **De-** = away from, removal (dehydration = removal of water)',
      keyTerms: [
        { term: 'prefix', definition: 'Word part placed at the beginning that modifies the meaning of the root word', pronunciation: 'PREE-fiks' },
        { term: 'combining form', definition: 'Root word plus a vowel (usually "o") that connects to other word parts', pronunciation: 'kum-BY-ning form' },
        { term: 'etymology', definition: 'The origin and history of how a word developed', pronunciation: 'et-uh-MOL-uh-jee' },
        { term: 'hyper-', definition: 'Prefix meaning excessive, above normal, or too much', pronunciation: 'HY-per' },
        { term: 'hypo-', definition: 'Prefix meaning deficient, below normal, or too little', pronunciation: 'HY-poh' },
        { term: 'anti-', definition: 'Prefix meaning against or opposing', pronunciation: 'AN-tee' },
        { term: 'dys-', definition: 'Prefix meaning bad, difficult, painful, or abnormal', pronunciation: 'DIS' },
        { term: 'sub-', definition: 'Prefix meaning under, below, or beneath', pronunciation: 'SUB' },
      ],
      analogies: [
        'Medical prefixes are like adjectives for nouns - they describe qualities of the root word.',
        'Think of word construction like building a sandwich: prefix = first bread slice, root = meat/cheese, suffix = bottom bread slice.',
      ],
      examples: [
        'Hypertension = Hyper (high) + tension (pressure) = high blood pressure',
        'Hypotension = Hypo (low) + tension (pressure) = low blood pressure',
        'Endocarditis = Endo (inside) + cardi (heart) + itis (inflammation) = inflammation of heart lining',
        'Subcutaneous = Sub (under) + cutane (skin) + ous = under the skin',
        'Bilateral = Bi (two) + lateral (side) = both sides',
        'Unilateral = Uni (one) + lateral (side) = one side only',
        'Antibiotic = Anti (against) + bio (life) = kills bacteria',
        'Dyspnea = Dys (difficult) + pnea (breathing) = difficulty breathing',
      ],
    },

    3: {
      level: 3,
      summary: 'Medical prefixes from Latin and Greek origins indicate position, number, quantity, time, or negation, and are essential for understanding medical terminology.',
      explanation: 'Medical prefixes are fundamental building blocks of medical language. Over 75% of medical prefixes derive from Greek, with most of the remainder from Latin. Understanding prefixes allows systematic decoding of unfamiliar medical terms.\n\n**PREFIX CLASSIFICATION SYSTEM:**\n\n**1. POSITIONAL AND DIRECTIONAL PREFIXES**\n| Prefix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| Endo- | Within | Endocardium | Inner heart layer |\n| Epi- | Upon, over | Epidermis | Outer skin layer |\n| Hypo- | Under | Hypodermic | Below dermis |\n| Infra- | Below | Infratrochlear | Below trochlea |\n| Sub- | Under | Sublingual | Under tongue |\n| Supra- | Above | Suprapatellar | Above kneecap |\n| Retro- | Backward | Retroperitoneal | Behind peritoneum |\n| Post- | After | Postoperative | After surgery |\n| Pre- | Before | Preoperative | Before surgery |\n| Peri- | Around | Periarticular | Around joint |\n\n**2. NUMBER AND QUANTITY PREFIXES**\n| Prefix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| Mono-, Uni- | One | Monocyte | Single nucleus cell |\n| Bi-, Di- | Two | Bicuspid | Two cusps |\n| Tri- | Three | Tricuspid | Three cusps |\n| Multi-, Poly- | Many | Multicystic | Many cysts |\n| Nulli- | None | Nullipara | No births |\n| Primi- | First | Primigravida | First pregnancy |\n| Multi- | Many | Multipara | Many births |\n| Macro- | Large | Macrocyte | Large cell |\n| Micro- | Small | Microcyte | Small cell |\n| Mega- | Great | Megacolon | Dilated colon |\n\n**3. CONDITION AND QUALITY PREFIXES**\n| Prefix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| Hyper- | Excessive | Hyperglycemia | High blood sugar |\n| Hypo- | Deficient | Hyponatremia | Low sodium |\n| Dys- | Bad/Painful | Dysphagia | Painful swallowing |\n| Eu- | Good/Normal | Euthyroid | Normal thyroid |\n| Mal- | Bad | Malabsorption | Poor absorption |\n| Pseudo- | False | Pseudocyst | False cyst |\n| Pan- | All | Pancreatitis | All/prefix + inflammation |\n\n**4. NEGATION AND ABSENCE PREFIXES**\n| Prefix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| A-, An- | Without | Apnea | No breathing |\n| De- | Removal | Dehydration | Water removal |\n| Dis- | Apart | Dislocation | Apart from location |\n| Non- | Not | Noninvasive | Not invading |\n\n**PREFIX USAGE RULES:**\n1. A-/An-: Use "an-" before vowels (anemia), "a-" before consonants (asymptomatic)\n2. Combining vowels: Usually "o" to connect prefix to root when prefix ends in consonant\n3. Prefix assimilation: Some prefixes change form based on following consonant',
      keyTerms: [
        { term: 'prefix assimilation', definition: 'When a prefix changes its form to match the following sound (e.g., ad- + fect = affect)', pronunciation: 'as-im-i-LAY-shun' },
        { term: 'combining vowel', definition: 'Vowel (usually "o") placed between word parts to make pronunciation easier', pronunciation: 'kum-BY--ning VOW-el' },
        { term: 'etymology', definition: 'Study of the origin of words and how their meanings have changed throughout history', pronunciation: 'et-uh-MOL-uh-jee' },
        { term: 'hyper-', definition: 'Greek prefix meaning excessive, above normal, or overactive', pronunciation: 'HY-per' },
        { term: 'hypo-', definition: 'Greek prefix meaning deficient, below normal, or underactive', pronunciation: 'HY-poh' },
        { term: 'brady-', definition: 'Greek prefix meaning slow', pronunciation: 'BRAY-dee' },
        { term: 'tachy-', definition: 'Greek prefix meaning fast or rapid', pronunciation: 'TAK-ee' },
        { term: 'dys-', definition: 'Greek prefix indicating bad, difficult, painful, or abnormal', pronunciation: 'DIS' },
        { term: 'eu-', definition: 'Greek prefix meaning good, normal, or well', pronunciation: 'YOO' },
      ],
      examples: [
        'Hyperthyroidism (overactive thyroid) vs Hypothyroidism (underactive thyroid)',
        'Bradycardia (slow heart <60 bpm) vs Tachycardia (fast heart >100 bpm)',
        'Endocarditis (inner heart layer inflammation) vs Pericarditis (outer heart sac inflammation)',
        'Subacute (between acute and chronic) vs Supracristal (above crest)',
        'Primigravida (first pregnancy) vs Multipara (multiple births)',
        'Macrocytosis (large RBCs) vs Microcytosis (small RBCs)',
        'Pseudostrabismus (false strabismus) vs True strabismus',
        'Pancreatitis (inflammation of ALL of pancreas)',
      ],
    },

    4: {
      level: 4,
      summary: 'Medical prefixes provide essential semantic information about anatomical position, physiological state, pathological conditions, and temporal relationships through systematic morphological rules.',
      explanation: 'Medical prefixes operate within a morphological system that encodes complex medical concepts through combinatory word parts. Prefix derivation from classical languages follows systematic patterns that reflect historical medical knowledge development from Hippocrates through modern scientific terminology.\n\n**PHILOLOGICAL AND ETYMOLOGICAL FOUNDATIONS:**\n\n**Greek Prefixes (~75%):** Reflect the foundational Greek medical tradition (Hippocrates, Galen)\n- Hyper- (Greek hyper) = excessive, pathological overactivity\n- Hypo- (Greek hypo) = deficient, pathological underactivity\n- Dys- (Greek dys) = impaired function, pathological difficulty\n- Eu- (Greek eu) = normal, healthy state (descriptive baseline)\n- Brady- (Greek bradys) = pathologically slow rate\n- Tachy- (Greek tachys) = pathologically rapid rate\n\n**Latin Prefixes (~20%):** Reflect anatomical and surgical tradition\n- Sub- (Latin sub) = anatomical position beneath\n- Supra- (Latin supra) = anatomical position above\n- Post- (Latin post) = temporal sequence after\n- Pre- (Latin prae) = temporal sequence before\n- Retro- (Latin retro) = posterior positional relationship\n- Infra- (Latin infra) = inferior positional relationship\n\n**PREFIX-DRIVEN PATHOPHYSIOLOGICAL CLASSIFICATION:**\n\n**Endocrine/Metabolic Disorders:**\n- Hyperglycemia (elevated glucose) vs Hypoglycemia (decreased glucose)\n- Hypercalcemia (elevated calcium) vs Hypocalcemia (decreased calcium)\n- Hyperkalemia (elevated potassium) vs Hypokalemia (decreased potassium)\n- Hypernatremia (elevated sodium) vs Hyponatremia (decreased sodium)\n\n**Cardiovascular Physiology:**\n- Hypertension (BP > 130/80 or >140/90 by older criteria)\n- Hypotension (SBP < 90 or symptomatic)\n- Bradycardia (HR < 60 bpm)\n- Tachycardia (HR > 100 bpm)\n- Bradypnea (RR < 12)\n- Tachypnea (RR > 20)\n\n**Neurological States:**\n- Hyperreflexia (pathologically increased reflexes - UMN lesion)\n- Hyporeflexia (decreased reflexes - LMN lesion, peripheral neuropathy)\n- Areflexia (absent reflexes - spinal shock, complete cord transection)\n- Dysarthria (impaired articulation - cerebellar, UMN, or LMN)\n- Dysphagia (impaired swallowing - stroke, neuromuscular disease)\n- Dysphonia (impaired voice production)\n\n**TEMPORAL AND SEQUENTIAL PREFIXES:**\n- Pre- (before): Preoperative, prenatal, predisposition\n- Post- (after): Postoperative, postpartum, postictal\n- Peri- (around): Perioperative, perinatal, perimortem\n- Pro- (before, forward): Prognosis, prophylactic, prodrome\n- Meta- (beyond, change): Metastasis, metamorphosis, metabolism',
      keyTerms: [
        { term: 'hyperreflexia', definition: 'Exaggerated deep tendon reflexes indicating upper motor neuron lesion', pronunciation: 'hy-per-ree-FLEX-ee-uh' },
        { term: 'hyporeflexia', definition: 'Diminished deep tendon reflexes indicating lower motor neuron lesion or peripheral nerve pathology', pronunciation: 'hy-po-ree-FLEX-ee-uh' },
        { term: 'areflexia', definition: 'Absence of deep tendon reflexes occurring in spinal shock or complete nerve transection', pronunciation: 'ay-ree-FLEX-ee-uh' },
        { term: 'dysarthria', definition: 'Motor speech disorder from impaired muscular control of speech mechanism', pronunciation: 'dis-AR-three-uh' },
        { term: 'dysphagia', definition: 'Subjective sensation of difficulty or abnormality of swallowing', pronunciation: 'dis-FAY-jee-uh' },
        { term: 'prodrome', definition: 'Early symptom or set of symptoms indicating onset of disease', pronunciation: 'PRO-drohm' },
        { term: 'prophylactic', definition: 'Treatment or procedure designed to prevent disease occurrence', pronunciation: 'pro-fuh-LAK-tik' },
      ],
      examples: [
        'Hyperthyroidism: TSH < 0.4, elevated T4/T3, signs: tachycardia, weight loss, heat intolerance',
        'Hypothyroidism: TSH > 4.0 (primary), decreased T4, signs: bradycardia, weight gain, cold intolerance',
        'Hypercalcemia: Ca > 10.5 mg/dL, "stones, bones, groans, thrones, psychiatric overtones"',
        'Hyponatremia: Na < 135 mEq/L, neurologic symptoms proportional to rapidity of decline',
        'Hyperkalemia: K > 5.0 mEq/L, ECG changes: peaked T waves, widened QRS',
        'Hypokalemia: K < 3.5 mEq/L, ECG changes: U waves, flattened T, ST depression',
        'Dysphagia evaluation: Bedside swallow exam modified barium swallow, FEES testing',
        'Prodromal phase: Migraine aura, herpes simplex prodrome, seizure prodrome',
      ],
      clinicalNotes: 'Prefix-based terminology forms the foundation of clinical communication. Understanding hyper-/hypo- distinctions is critical for laboratory interpretation and endocrine management. Dys- prefixes typically indicate impaired function requiring diagnostic evaluation to characterize the specific deficit.',
    },

    5: {
      level: 5,
      summary: 'Medical prefixes encode complex clinical, pathophysiological, and therapeutic concepts through morphological rules reflecting the historical development of medical science from classical antiquity to modern evidence-based practice.',
      explanation: 'Medical prefixes constitute a semantically dense morphological system that facilitates precise clinical communication while encoding etiological, pathophysiological, and therapeutic information. The systematic application of prefixes reflects the evolution of medical epistemology from humoral theory through molecular pathology.\n\n**CLINICAL PATHOPHYSIOLOGY: PREFIX-BASED CLASSIFICATION**\n\n**Endocrine System (Homeostatic Dysregulation):**\n\n*Hyper- States (Excess Production/Action):*\n- **Hyperthyroidism**: TSH suppression, elevated free T4, Graves disease (TSI), toxic multinodular goiter\n- **Hyperparathyroidism**: Elevated PTH, hypercalcemia, osteitis fibrosa cystica, stones\n- **Hypercortisolism (Cushing)**: Elevated cortisol, loss of diurnal variation, dexamethasone suppression testing\n- **Hyperaldosteronism (Conn)**: Hypertension, hypokalemia, elevated aldosterone/renin ratio\n- **Hyperprolactinemia**: Galactorrhea, amenorrhea, prolactinoma vs medication-induced\n\n*Hypo- States (Deficient Production/Action):*\n- **Hypothyroidism**: Elevated TSH (primary), decreased free T4 (secondary), myxedema coma\n- **Hypoparathyroidism**: Hypocalcemia, hyperphosphatemia, post-thyroidectomy, DiGeorge syndrome\n- **Hypoadrenalism (Addison)**: Fatigue, hyponatremia, hyperkalemia, ACTH stimulation testing\n- **Hypoaldosteronism**: Hyperkalemia, metabolic acidosis (type 4 RTA)\n- **Hypopituitarism**: Panhypopituitarism vs isolated hormone deficiencies\n\n**Cardiovascular System (Hemodynamic States):**\n\n- **Hypertension**: Primary (essential) vs secondary categories: RAS, coarctation, OSA, hyperaldosteronism\n  - Stage 1: 130-139/80-89, Stage 2: >=140/90\n  - JNC 8 vs ACC/AHA 2017 guidelines\n\n- **Hypotension**: Orthostatic hypotension (20/10 mmHg drop), septic distributive shock, cardiogenic shock\n- **Bradycardia**: Sinus node dysfunction, AV block, beta-blocker toxicity, sick sinus\n- **Tachycardia**: Sinus tachycardia vs pathologic: SVT, atrial fibrillation, VTach\n\n**Neurological System (Functional States):**\n\n- **Hyperreflexia**: UMN lesions: stroke, spinal cord compression, multiple sclerosis (clonus, spasticity)\n- **Hyporeflexia/Areflexia**: LMN lesions: Guillain-Barre (areflexia), peripheral neuropathy\n- **Dysarthria**: UMN (spastic), LMN (flaccid), cerebellar (ataxic), basal ganglia (hypokinetic)\n- **Dysphagia**: Oropharyngeal (stroke, ALS) vs esophageal (achalasia, stricture)\n- **Dysautonomia**: Autonomic neuropathy (diabetic), POTS, MSA, pure autonomic failure\n\n**ONCOLOGIC PREFIXES:**\n\n- **Hyperplasia**: Increased cell number (benign): BPH, endometrial hyperplasia\n- **Neoplasia**: New growth (benign or malignant): conceptual distinction from hyperplasia\n- **Dysplasia**: Disordered growth, precancerous: cervical (LGSIL, HGSIL), esophageal (Barrett)\n- **Metaplasia**: Cell type change (adaptive): squamous metaplasia in smokers (reversible)\n- **Anaplasia**: Poor differentiation, malignant: high-grade tumors, poor prognosis\n\n**THERAPEUTIC PREFIX SEMANTICS:**\n\n- **Prophylactic**: Primary vs secondary prevention: statins, vaccines, prophylactic anticoagulation\n- **Palliative**: Symptom-directed care without curative intent: hospice referral criteria\n- **Adjuvant**: Post-primary therapy to reduce recurrence: adjuvant chemotherapy for breast cancer\n- **Neoadjuvant**: Pre-primary therapy to downstage: neoadjuvant chemoradiation for rectal cancer\n- **Adjunct**: Supplemental therapy: adjunctive steroids in PJP pneumonia',
      keyTerms: [
        { term: 'hyperplasia', definition: 'Increase in the number of cells in a tissue or organ, resulting in enlargement; may be physiologic or pathologic', pronunciation: 'hy-per-PLAY-zhuh' },
        { term: 'neoplasia', definition: 'New, uncontrolled growth of cells that is not under physiologic control; can be benign or malignant', pronunciation: 'nee-oh-PLAY-zhuh' },
        { term: 'dysplasia', definition: 'Disordered cellular development resulting in abnormal size, shape, and organization; considered precancerous', pronunciation: 'dis-PLAY-zhuh' },
        { term: 'metaplasia', definition: 'Reversible change where one mature cell type replaces another; usually adaptive response to chronic irritation', pronunciation: 'met-uh-PLAY-zhuh' },
        { term: 'anaplasia', definition: 'Loss of structural differentiation and cellular orientation; hallmark of malignancy', pronunciation: 'an-uh-PLAY-zhuh' },
        { term: 'adjuvant therapy', definition: 'Additional treatment given after primary therapy to decrease chance of recurrence', pronunciation: 'AJ-uh-vant' },
        { term: 'neoadjuvant therapy', definition: 'Treatment given before primary therapy to shrink tumor and improve outcomes', pronunciation: 'nee-oh-AJ-uh-vant' },
        { term: 'orthostatic hypotension', definition: 'BP drop >=20/10 mmHg within 3 minutes of standing; syncope risk', pronunciation: 'or-thoh-STAT-ik hy-po-TEN-shun' },
        { term: 'dysautonomia', definition: 'Failure of sympathetic or parasympathetic components of autonomic nervous system', pronunciation: 'dis-aw-toh-NO-mee-uh' },
      ],
      examples: [
        'Hyperparathyroidism workup: PTH, calcium, phosphate, 24-hr urine calcium, sestamibi scan, UAE criteria for surgery',
        'Hypoparathyroidism: Post-thyroidectomy monitoring, calcium gluconate for severe symptoms, calcitriol + calcium maintenance',
        'Adjuvant therapy for breast cancer: Oncotype DX recurrence score guides chemotherapy decision in ER+/HER2-/N0 disease',
        'Neoadjuvant chemoradiation: Total neoadjuvant therapy (TNT) for locally advanced rectal cancer',
        'Orthostatic vitals: Assess volume depletion, autonomic dysfunction, POTS diagnosis',
        'Dysautonomia differential: POTS (orthostatic tachycardia without hypotension), MSA (parkinsonism + autonomic failure)',
        'Cervical dysplasia: ASCCP risk-based management, LEEP vs cryotherapy vs observation based on colposcopic findings',
      ],
      clinicalNotes: 'Understanding prefix semantics is essential for clinical reasoning. Hyper-/hypo- distinctions guide laboratory interpretation and endocrine management. Dys- prefixes indicate functional impairment requiring targeted diagnostic evaluation. Neoplastic terminology (hyperplasia vs neoplasia vs dysplasia) determines surveillance and treatment strategies. Therapeutic prefix descriptors (adjuvant, neoadjuvant, prophylactic) indicate timing and intent of interventions critical for multidisciplinary care planning.',
    },
  },

  media: [],
  citations: [
    {
      id: 'chabner-2020',
      type: 'textbook',
      title: 'The Language of Medicine',
      source: 'Elsevier',
      authors: ['Davi-Ellen Chabner'],
      chapter: '1-4',
    },
    {
      id: 'gylys-2020',
      type: 'textbook',
      title: 'Medical Terminology Systems: A Body Systems Approach',
      source: 'F.A. Davis Company',
      authors: ['Barbara A. Gylys', 'Mary Ellen Wedding'],
    },
  ],
  crossReferences: [
    { targetId: 'medical-terminology-suffixes', targetType: 'topic', relationship: 'sibling', label: 'Medical Suffixes' },
    { targetId: 'medical-terminology-word-roots', targetType: 'topic', relationship: 'sibling', label: 'Word Roots' },
    { targetId: 'medical-terminology-combining-forms', targetType: 'topic', relationship: 'sibling', label: 'Combining Forms' },
  ],
  tags: {
    systems: ['general'],
    topics: ['medical-terminology', 'word-structure', 'etymology'],
    keywords: ['prefixes', 'word-parts', 'greek', 'latin', 'etymology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['all'] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicalPrefixes;
