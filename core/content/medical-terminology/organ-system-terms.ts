/**
 * Organ System Terminology Content
 *
 * Medical vocabulary organized by body system:
 * - Cardiovascular system
 * - Respiratory system
 * - Gastrointestinal system
 * - Nervous system
 * - Musculoskeletal system
 * - Integumentary system
 * - Endocrine system
 * - Urinary system
 * - Reproductive system
 * - Lymphatic/Immune system
 * - Hematologic system
 */

import { MedicalTerm, TerminologyModule } from './types';

// ============================================================================
// CARDIOVASCULAR SYSTEM TERMS
// ============================================================================

export const cardiovascularTerms: MedicalTerm[] = [
  {
    id: 'cv-myocardium',
    term: 'Myocardium',
    pronunciation: {
      ipa: '/ˌmaɪoʊˈkɑːrdiəm/',
      simplified: 'my-oh-KAR-dee-um',
      stressedSyllable: 3,
    },
    components: {
      root: 'my/o + cardi/o',
      suffix: '-um',
    },
    definitions: {
      1: 'The muscle layer of your heart that pumps blood',
      2: 'The thick muscular middle layer of the heart wall',
      3: 'The cardiac muscle tissue responsible for heart contraction',
      4: 'The middle layer of the heart wall composed of cardiac myocytes',
      5: 'Cardiac muscle forming the bulk of the ventricular walls; contains sarcomeres, intercalated discs, and gap junctions for synchronized contraction',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'mys + kardia',
      originalMeaning: 'muscle + heart',
    },
    category: 'anatomy',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['endocardium', 'epicardium', 'pericardium'],
  },
  {
    id: 'cv-systole',
    term: 'Systole',
    pronunciation: {
      ipa: '/ˈsɪstəli/',
      simplified: 'SIS-tuh-lee',
      stressedSyllable: 1,
    },
    components: {
      root: 'systol',
      suffix: '-e',
    },
    definitions: {
      1: 'When your heart squeezes to push blood out',
      2: 'The phase when the heart contracts and pumps blood',
      3: 'The contraction phase of the cardiac cycle ejecting blood from the ventricles',
      4: 'Ventricular contraction; divided into isovolumetric contraction and ejection phases',
      5: 'Systole begins with mitral/tricuspid valve closure (S1) and ends with aortic/pulmonic valve closure (S2); systolic dysfunction is reduced ejection fraction',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'systole',
      originalMeaning: 'contraction, drawing together',
    },
    category: 'physiology',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['diastole', 'cardiac cycle', 'ejection fraction'],
    antonyms: ['diastole'],
  },
  {
    id: 'cv-diastole',
    term: 'Diastole',
    pronunciation: {
      ipa: '/daɪˈæstəli/',
      simplified: 'dy-AS-tuh-lee',
      stressedSyllable: 2,
    },
    components: {
      root: 'diastol',
      suffix: '-e',
    },
    definitions: {
      1: 'When your heart relaxes and fills with blood',
      2: 'The phase when the heart relaxes and fills with blood',
      3: 'The relaxation phase of the cardiac cycle when ventricles fill with blood',
      4: 'Ventricular relaxation; divided into isovolumetric relaxation and filling phases',
      5: 'Diastole is when coronary perfusion occurs; diastolic dysfunction (HFpEF) involves impaired relaxation and increased filling pressures',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'diastole',
      originalMeaning: 'expansion, dilation',
    },
    category: 'physiology',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['systole', 'cardiac cycle', 'preload'],
    antonyms: ['systole'],
  },
  {
    id: 'cv-arrhythmia',
    term: 'Arrhythmia',
    alternateSpellings: ['Dysrhythmia'],
    pronunciation: {
      ipa: '/əˈrɪðmiə/',
      simplified: 'uh-RITH-mee-uh',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'a-',
      root: 'rhythm',
      suffix: '-ia',
    },
    definitions: {
      1: 'When your heart beats in an irregular pattern',
      2: 'An abnormal heart rhythm - too fast, too slow, or irregular',
      3: 'Any deviation from the normal sinus rhythm of the heart',
      4: 'Abnormal electrical activity causing irregular cardiac contraction patterns',
      5: 'Arrhythmias classified by origin (supraventricular vs ventricular), rate (brady vs tachy), and mechanism (reentry, automaticity, triggered activity)',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'a + rhythmos',
      originalMeaning: 'without + rhythm',
    },
    category: 'diagnosis',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['bradycardia', 'tachycardia', 'fibrillation', 'flutter'],
  },
  {
    id: 'cv-atherosclerosis',
    term: 'Atherosclerosis',
    pronunciation: {
      ipa: '/ˌæθəroʊskləˈroʊsɪs/',
      simplified: 'ath-er-oh-skluh-ROH-sis',
      stressedSyllable: 5,
    },
    components: {
      root: 'ather/o + scler/o',
      suffix: '-osis',
    },
    definitions: {
      1: 'When fatty stuff builds up inside blood vessels and makes them narrow',
      2: 'Hardening and narrowing of arteries due to plaque buildup',
      3: 'A disease characterized by lipid and calcium deposits in arterial walls',
      4: 'Progressive inflammatory disease with intimal plaque formation leading to arterial stenosis',
      5: 'Atherosclerosis involves endothelial dysfunction, lipid accumulation, foam cell formation, and fibrous cap development; vulnerable plaques risk acute thrombosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'athere + skleros',
      originalMeaning: 'gruel/porridge + hard',
    },
    category: 'pathology',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['arteriosclerosis', 'plaque', 'stenosis', 'coronary artery disease'],
  },
];

// ============================================================================
// RESPIRATORY SYSTEM TERMS
// ============================================================================

export const respiratoryTerms: MedicalTerm[] = [
  {
    id: 'resp-alveoli',
    term: 'Alveoli',
    pronunciation: {
      ipa: '/ælˈviːəlaɪ/',
      simplified: 'al-VEE-oh-ly',
      stressedSyllable: 2,
    },
    components: {
      root: 'alveol',
      suffix: '-i',
    },
    definitions: {
      1: 'Tiny air sacs in your lungs where oxygen enters your blood',
      2: 'Small air sacs at the ends of bronchioles where gas exchange occurs',
      3: 'Terminal respiratory units composed of type I and II pneumocytes',
      4: 'Grape-like clusters forming the respiratory zone; type II cells produce surfactant',
      5: 'Alveoli provide ~70m2 surface area for gas exchange; type I cells (gas exchange) and type II cells (surfactant, regeneration); surrounded by capillary network',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'alveolus',
      originalMeaning: 'small cavity',
    },
    category: 'anatomy',
    bodySystems: ['respiratory'],
    relatedTerms: ['bronchioles', 'surfactant', 'pneumocytes', 'respiratory membrane'],
  },
  {
    id: 'resp-dyspnea',
    term: 'Dyspnea',
    pronunciation: {
      ipa: '/dɪspˈniːə/',
      simplified: 'disp-NEE-uh',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'dys-',
      root: 'pnea',
    },
    definitions: {
      1: 'Difficulty breathing or feeling short of breath',
      2: 'The sensation of difficulty breathing or breathlessness',
      3: 'Subjective experience of breathing discomfort or air hunger',
      4: 'Perception of respiratory distress; may be exertional, orthopnic, or at rest',
      5: 'Dyspnea involves afferent feedback from chemoreceptors, mechanoreceptors, and central processing; differential includes cardiac, pulmonary, neuromuscular, and anxiety causes',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'dys + pnoia',
      originalMeaning: 'difficult + breathing',
    },
    category: 'symptom',
    bodySystems: ['respiratory', 'cardiovascular'],
    relatedTerms: ['orthopnea', 'paroxysmal nocturnal dyspnea', 'tachypnea', 'hypoxia'],
  },
  {
    id: 'resp-pneumothorax',
    term: 'Pneumothorax',
    pronunciation: {
      ipa: '/ˌnjuːmoʊˈθɔːræks/',
      simplified: 'noo-moh-THOR-aks',
      stressedSyllable: 3,
    },
    components: {
      root: 'pneum/o + thorax',
    },
    definitions: {
      1: 'Air trapped in the space around your lung, causing it to collapse',
      2: 'A collapsed lung caused by air in the chest cavity outside the lung',
      3: 'Collection of air in the pleural space causing lung collapse',
      4: 'Air in the pleural cavity; may be spontaneous, traumatic, or iatrogenic',
      5: 'Pneumothorax disrupts negative intrapleural pressure; tension pneumothorax causes mediastinal shift and hemodynamic compromise requiring immediate decompression',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'pneuma + thorax',
      originalMeaning: 'air + chest',
    },
    category: 'diagnosis',
    bodySystems: ['respiratory'],
    relatedTerms: ['hemothorax', 'pleural effusion', 'tension pneumothorax'],
  },
  {
    id: 'resp-bronchiectasis',
    term: 'Bronchiectasis',
    pronunciation: {
      ipa: '/ˌbrɒŋkiˈɛktəsɪs/',
      simplified: 'brong-kee-EK-tuh-sis',
      stressedSyllable: 3,
    },
    components: {
      root: 'bronch/i + ect',
      suffix: '-asis',
    },
    definitions: {
      1: 'When the airways in your lungs become permanently widened and damaged',
      2: 'Permanent widening and damage to the airways in the lungs',
      3: 'Irreversible dilation of bronchi with impaired mucus clearance',
      4: 'Destruction of bronchial walls leading to cylindrical, varicose, or saccular dilation',
      5: 'Bronchiectasis results from infection-inflammation cycle; causes include CF, immunodeficiency, post-infectious, allergic bronchopulmonary aspergillosis; traction bronchiectasis from fibrosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'bronchos + ektasis',
      originalMeaning: 'windpipe + stretching',
    },
    category: 'diagnosis',
    bodySystems: ['respiratory'],
    relatedTerms: ['cystic fibrosis', 'COPD', 'bronchitis'],
  },
];

// ============================================================================
// GASTROINTESTINAL SYSTEM TERMS
// ============================================================================

export const gastrointestinalTerms: MedicalTerm[] = [
  {
    id: 'gi-peristalsis',
    term: 'Peristalsis',
    pronunciation: {
      ipa: '/ˌperɪˈstælsɪs/',
      simplified: 'pair-ih-STAL-sis',
      stressedSyllable: 3,
    },
    components: {
      root: 'peristalt',
      suffix: '-sis',
    },
    definitions: {
      1: 'Wave-like muscle squeezes that push food through your digestive system',
      2: 'The rhythmic muscle contractions that move food through the digestive tract',
      3: 'Sequential circular muscle contractions propelling contents through the GI tract',
      4: 'Coordinated smooth muscle contraction regulated by the enteric nervous system',
      5: 'Peristalsis involves the migrating motor complex during fasting and fed-state contractions; disorders include achalasia, gastroparesis, and ileus',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'peristellein',
      originalMeaning: 'to wrap around',
    },
    category: 'physiology',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['motility', 'ileus', 'obstruction', 'enteric nervous system'],
  },
  {
    id: 'gi-dysphagia',
    term: 'Dysphagia',
    pronunciation: {
      ipa: '/dɪsˈfeɪdʒiə/',
      simplified: 'dis-FAY-jee-uh',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'dys-',
      root: 'phag',
      suffix: '-ia',
    },
    definitions: {
      1: 'Trouble swallowing food or drinks',
      2: 'Difficulty or discomfort when swallowing',
      3: 'Impaired passage of food from mouth to stomach',
      4: 'Classified as oropharyngeal (transfer) or esophageal (transport) dysphagia',
      5: 'Dysphagia to solids suggests mechanical obstruction; to liquids suggests motility disorder; progressive dysphagia warrants endoscopy to evaluate for malignancy',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'dys + phagein',
      originalMeaning: 'difficult + to eat',
    },
    category: 'symptom',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['odynophagia', 'achalasia', 'stricture', 'globus'],
  },
  {
    id: 'gi-cirrhosis',
    term: 'Cirrhosis',
    pronunciation: {
      ipa: '/sɪˈroʊsɪs/',
      simplified: 'sih-ROH-sis',
      stressedSyllable: 2,
    },
    components: {
      root: 'cirrh/o',
      suffix: '-osis',
    },
    definitions: {
      1: 'Severe scarring of the liver that prevents it from working properly',
      2: 'Advanced liver disease with scarring that replaces normal tissue',
      3: 'End-stage liver fibrosis with nodular regeneration and architectural distortion',
      4: 'Irreversible hepatic fibrosis leading to portal hypertension and hepatic dysfunction',
      5: 'Cirrhosis results from chronic injury (alcohol, viral, NASH); complications include varices, ascites, encephalopathy, HCC, and hepatorenal syndrome; Child-Pugh and MELD scores predict prognosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kirrhos',
      originalMeaning: 'yellow-orange (color of diseased liver)',
    },
    category: 'diagnosis',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['hepatitis', 'fibrosis', 'portal hypertension', 'ascites', 'encephalopathy'],
  },
  {
    id: 'gi-hematemesis',
    term: 'Hematemesis',
    pronunciation: {
      ipa: '/ˌhiːməˈtemɪsɪs/',
      simplified: 'hee-muh-TEM-ih-sis',
      stressedSyllable: 3,
    },
    components: {
      root: 'hemat/o + emes',
      suffix: '-is',
    },
    definitions: {
      1: 'Throwing up blood',
      2: 'Vomiting blood or blood-stained material',
      3: 'Vomiting of blood indicating upper gastrointestinal bleeding',
      4: 'Emesis of blood; may be bright red or coffee-ground appearance',
      5: 'Hematemesis indicates bleeding proximal to the ligament of Treitz; coffee-ground suggests partial digestion; bright red indicates active brisk bleeding; warrants emergent evaluation',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'haima + emesis',
      originalMeaning: 'blood + vomiting',
    },
    category: 'symptom',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['melena', 'hematochezia', 'upper GI bleed', 'varices'],
  },
];

// ============================================================================
// NERVOUS SYSTEM TERMS
// ============================================================================

export const nervousSystemTerms: MedicalTerm[] = [
  {
    id: 'neuro-neuron',
    term: 'Neuron',
    pronunciation: {
      ipa: '/ˈnjʊərɒn/',
      simplified: 'NOOR-on',
      stressedSyllable: 1,
    },
    components: {
      root: 'neur',
      suffix: '-on',
    },
    definitions: {
      1: 'A nerve cell that sends electrical signals in your body',
      2: 'The basic unit of the nervous system that transmits signals',
      3: 'Specialized cell conducting electrochemical impulses along axons and dendrites',
      4: 'Electrically excitable cells with soma, axon, and dendrites; communicate via synapses',
      5: 'Neurons are classified as sensory, motor, or interneurons; action potentials depend on voltage-gated channels; synaptic transmission involves neurotransmitter release',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'neuron',
      originalMeaning: 'nerve, sinew',
    },
    category: 'anatomy',
    bodySystems: ['nervous'],
    relatedTerms: ['axon', 'dendrite', 'synapse', 'neurotransmitter', 'glia'],
  },
  {
    id: 'neuro-paresthesia',
    term: 'Paresthesia',
    alternateSpellings: ['Paraesthesia'],
    pronunciation: {
      ipa: '/ˌpærəsˈθiːziə/',
      simplified: 'pair-es-THEE-zhuh',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'para-',
      root: 'esthes',
      suffix: '-ia',
    },
    definitions: {
      1: 'Tingling or pins and needles feeling',
      2: 'Abnormal sensations like tingling, numbness, or prickling',
      3: 'Spontaneous abnormal cutaneous sensation without external stimulus',
      4: 'Positive sensory phenomenon indicating peripheral or central nervous system dysfunction',
      5: 'Paresthesias may indicate neuropathy, radiculopathy, myelopathy, or central lesion; distribution helps localize; distinguish from dysesthesia (unpleasant) and hyperesthesia (increased)',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'para + aisthesis',
      originalMeaning: 'beside + sensation',
    },
    category: 'symptom',
    bodySystems: ['nervous'],
    relatedTerms: ['neuropathy', 'radiculopathy', 'dysesthesia', 'anesthesia'],
  },
  {
    id: 'neuro-hemiplegia',
    term: 'Hemiplegia',
    pronunciation: {
      ipa: '/ˌhemɪˈpliːdʒiə/',
      simplified: 'hem-ih-PLEE-jee-uh',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'hemi-',
      root: 'pleg',
      suffix: '-ia',
    },
    definitions: {
      1: 'Paralysis of one whole side of your body',
      2: 'Complete paralysis affecting one side of the body',
      3: 'Total loss of voluntary movement on one side of the body',
      4: 'Unilateral paralysis involving face, arm, and leg; indicates contralateral corticospinal lesion',
      5: 'Hemiplegia results from contralateral motor cortex or corticospinal tract lesion; spares face with pontine/medullary lesions; UMN signs develop after acute phase',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'hemi + plege',
      originalMeaning: 'half + stroke/blow',
    },
    category: 'symptom',
    bodySystems: ['nervous'],
    relatedTerms: ['hemiparesis', 'paraplegia', 'quadriplegia', 'monoplegia'],
  },
  {
    id: 'neuro-ataxia',
    term: 'Ataxia',
    pronunciation: {
      ipa: '/əˈtæksiə/',
      simplified: 'uh-TAK-see-uh',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'a-',
      root: 'tax',
      suffix: '-ia',
    },
    definitions: {
      1: 'Difficulty controlling your movements, leading to clumsiness',
      2: 'Loss of coordination affecting walking and movement',
      3: 'Impaired coordination of voluntary movements without muscle weakness',
      4: 'Incoordination classified as cerebellar, sensory, or vestibular',
      5: 'Cerebellar ataxia causes ipsilateral limb dysmetria, truncal instability; sensory ataxia worsens with eyes closed (Romberg positive); vestibular ataxia causes lateropulsion',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'a + taxis',
      originalMeaning: 'without + order',
    },
    category: 'symptom',
    bodySystems: ['nervous'],
    relatedTerms: ['dysmetria', 'dysdiadochokinesia', 'Romberg test', 'cerebellar'],
  },
];

// ============================================================================
// MUSCULOSKELETAL SYSTEM TERMS
// ============================================================================

export const musculoskeletalTerms: MedicalTerm[] = [
  {
    id: 'msk-tendon',
    term: 'Tendon',
    pronunciation: {
      ipa: '/ˈtendən/',
      simplified: 'TEN-dun',
      stressedSyllable: 1,
    },
    components: {
      root: 'tend',
      suffix: '-on',
    },
    definitions: {
      1: 'A tough cord that connects your muscles to your bones',
      2: 'Strong tissue that attaches muscles to bones',
      3: 'Dense connective tissue transmitting force from muscle to bone',
      4: 'Type I collagen-rich structure connecting muscle to periosteum',
      5: 'Tendons contain tenocytes, collagen fibrils, and ground substance; blood supply from musculotendinous junction; prone to overuse injury and degeneration (tendinopathy)',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'tendere',
      originalMeaning: 'to stretch',
    },
    category: 'anatomy',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['ligament', 'muscle', 'enthesis', 'tendinopathy'],
  },
  {
    id: 'msk-arthralgia',
    term: 'Arthralgia',
    pronunciation: {
      ipa: '/ɑːrˈθrældʒiə/',
      simplified: 'ar-THRAL-jee-uh',
      stressedSyllable: 2,
    },
    components: {
      root: 'arthr/o',
      suffix: '-algia',
    },
    definitions: {
      1: 'Pain in a joint',
      2: 'Joint pain without signs of inflammation',
      3: 'Pain in one or more joints without objective inflammatory findings',
      4: 'Joint pain without swelling, warmth, or erythema; contrast with arthritis',
      5: 'Arthralgia may be mechanical, inflammatory, or referred; pattern (monoarticular vs polyarticular, symmetric vs asymmetric, migratory) helps differential diagnosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'arthron + algos',
      originalMeaning: 'joint + pain',
    },
    category: 'symptom',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['arthritis', 'myalgia', 'joint pain', 'fibromyalgia'],
  },
  {
    id: 'msk-crepitus',
    term: 'Crepitus',
    pronunciation: {
      ipa: '/ˈkrepɪtəs/',
      simplified: 'KREP-ih-tus',
      stressedSyllable: 1,
    },
    components: {
      root: 'crepit',
      suffix: '-us',
    },
    definitions: {
      1: 'A crackling or grinding sound or feeling in a joint',
      2: 'The grating or crackling sound or sensation from joints or bones',
      3: 'Audible or palpable crepitation from joint surfaces or subcutaneous air',
      4: 'May indicate cartilage degeneration, fracture, or subcutaneous emphysema',
      5: 'Crepitus in osteoarthritis reflects cartilage loss and bone-on-bone contact; subcutaneous crepitus suggests air from pneumothorax, necrotizing infection, or procedural complication',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'crepitare',
      originalMeaning: 'to crackle',
    },
    category: 'symptom',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['osteoarthritis', 'subcutaneous emphysema', 'fracture'],
  },
  {
    id: 'msk-kyphosis',
    term: 'Kyphosis',
    pronunciation: {
      ipa: '/kaɪˈfoʊsɪs/',
      simplified: 'ky-FOH-sis',
      stressedSyllable: 2,
    },
    components: {
      root: 'kyph/o',
      suffix: '-osis',
    },
    definitions: {
      1: 'An outward curve of the upper back causing a hump',
      2: 'Excessive forward curvature of the upper spine',
      3: 'Abnormal posterior convexity of the thoracic spine',
      4: 'Thoracic hyperkyphosis; may be postural, structural, or congenital',
      5: 'Kyphosis may result from vertebral compression fractures, Scheuermann disease, or degenerative changes; severe cases cause restrictive lung disease and sagittal imbalance',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kyphos',
      originalMeaning: 'bent, hunched',
    },
    category: 'diagnosis',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['lordosis', 'scoliosis', 'spinal deformity'],
    antonyms: ['lordosis'],
  },
];

// ============================================================================
// INTEGUMENTARY SYSTEM TERMS
// ============================================================================

export const integumentaryTerms: MedicalTerm[] = [
  {
    id: 'integ-epidermis',
    term: 'Epidermis',
    pronunciation: {
      ipa: '/ˌepɪˈdɜːrmɪs/',
      simplified: 'ep-ih-DER-mis',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'epi-',
      root: 'derm',
      suffix: '-is',
    },
    definitions: {
      1: 'The outer layer of your skin that you can see and touch',
      2: 'The outermost layer of skin that protects the body',
      3: 'The avascular stratified squamous epithelium covering the body surface',
      4: 'Composed of stratum basale, spinosum, granulosum, lucidum, and corneum',
      5: 'Keratinocytes differentiate from basal layer to cornified layer; melanocytes, Langerhans cells, and Merkel cells reside within; barrier function depends on lipid bilayers',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'epi + derma',
      originalMeaning: 'upon + skin',
    },
    category: 'anatomy',
    bodySystems: ['integumentary'],
    relatedTerms: ['dermis', 'hypodermis', 'keratinocyte', 'melanocyte'],
  },
  {
    id: 'integ-erythema',
    term: 'Erythema',
    pronunciation: {
      ipa: '/ˌerɪˈθiːmə/',
      simplified: 'air-ih-THEE-muh',
      stressedSyllable: 3,
    },
    components: {
      root: 'erythem',
      suffix: '-a',
    },
    definitions: {
      1: 'Redness of the skin',
      2: 'Red discoloration of the skin due to increased blood flow',
      3: 'Cutaneous hyperemia causing visible redness',
      4: 'Superficial vasodilation resulting in blanching erythema',
      5: 'Erythema may be localized (infection, allergy) or diffuse (drug reaction, viral exanthem); blanching indicates capillary filling; non-blanching suggests purpura or petechiae',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'erythema',
      originalMeaning: 'flush, redness',
    },
    category: 'symptom',
    bodySystems: ['integumentary'],
    relatedTerms: ['rash', 'cellulitis', 'urticaria', 'blanching'],
  },
  {
    id: 'integ-pruritus',
    term: 'Pruritus',
    pronunciation: {
      ipa: '/prʊˈraɪtəs/',
      simplified: 'proo-RY-tus',
      stressedSyllable: 2,
    },
    components: {
      root: 'prurit',
      suffix: '-us',
    },
    definitions: {
      1: 'Itching or itchy skin',
      2: 'The sensation that makes you want to scratch',
      3: 'An unpleasant cutaneous sensation provoking the desire to scratch',
      4: 'Mediated by histamine, cytokines, and neuropeptides activating C-fibers',
      5: 'Pruritus may be dermatologic, systemic (cholestasis, uremia, malignancy), or neuropathic; without rash suggests systemic cause; chronic pruritus warrants workup',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'prurire',
      originalMeaning: 'to itch',
    },
    category: 'symptom',
    bodySystems: ['integumentary'],
    relatedTerms: ['urticaria', 'eczema', 'xerosis', 'cholestasis'],
  },
];

// ============================================================================
// ENDOCRINE SYSTEM TERMS
// ============================================================================

export const endocrineTerms: MedicalTerm[] = [
  {
    id: 'endo-hormone',
    term: 'Hormone',
    pronunciation: {
      ipa: '/ˈhɔːrmoʊn/',
      simplified: 'HOR-mohn',
      stressedSyllable: 1,
    },
    components: {
      root: 'hormon',
      suffix: '-e',
    },
    definitions: {
      1: 'Chemical messengers that tell parts of your body what to do',
      2: 'Chemical substances produced by glands that control body functions',
      3: 'Signaling molecules secreted into blood that regulate target organ function',
      4: 'Peptide, steroid, or amine molecules acting via specific receptors',
      5: 'Hormones act via endocrine (blood), paracrine (local), or autocrine (self) mechanisms; feedback loops regulate secretion; receptor binding initiates intracellular signaling cascades',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'hormon',
      originalMeaning: 'to set in motion, urge on',
    },
    category: 'physiology',
    bodySystems: ['endocrine'],
    relatedTerms: ['gland', 'receptor', 'feedback loop', 'hypothalamic-pituitary axis'],
  },
  {
    id: 'endo-hypothyroidism',
    term: 'Hypothyroidism',
    pronunciation: {
      ipa: '/ˌhaɪpoʊˈθaɪrɔɪdɪzəm/',
      simplified: 'hy-poh-THY-roid-iz-um',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'hypo-',
      root: 'thyroid',
      suffix: '-ism',
    },
    definitions: {
      1: 'When your thyroid gland does not make enough hormones, making you tired and cold',
      2: 'Underactive thyroid causing fatigue, weight gain, and cold intolerance',
      3: 'Thyroid hormone deficiency affecting metabolism',
      4: 'Primary (thyroid failure), secondary (pituitary), or tertiary (hypothalamic) etiology',
      5: 'Hashimoto thyroiditis is the most common cause in iodine-sufficient areas; elevated TSH with low free T4 confirms primary disease; levothyroxine replacement targets normal TSH',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'hypo + thyreos + -ism',
      originalMeaning: 'under + shield + condition',
    },
    category: 'diagnosis',
    bodySystems: ['endocrine'],
    relatedTerms: ['hyperthyroidism', 'Hashimoto thyroiditis', 'TSH', 'T4', 'myxedema'],
    antonyms: ['hyperthyroidism'],
  },
  {
    id: 'endo-polydipsia',
    term: 'Polydipsia',
    pronunciation: {
      ipa: '/ˌpɒlɪˈdɪpsiə/',
      simplified: 'pol-ee-DIP-see-uh',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'poly-',
      root: 'dips',
      suffix: '-ia',
    },
    definitions: {
      1: 'Feeling extremely thirsty all the time',
      2: 'Excessive thirst and need to drink fluids',
      3: 'Abnormally increased thirst, often with increased fluid intake',
      4: 'May be primary (psychogenic) or secondary to polyuria',
      5: 'Polydipsia with polyuria suggests diabetes mellitus, diabetes insipidus, or hypercalcemia; primary polydipsia causes dilute urine and low-normal sodium; water deprivation test differentiates',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'polys + dipsa',
      originalMeaning: 'much + thirst',
    },
    category: 'symptom',
    bodySystems: ['endocrine'],
    relatedTerms: ['polyuria', 'diabetes mellitus', 'diabetes insipidus', 'hyperglycemia'],
  },
];

// ============================================================================
// URINARY SYSTEM TERMS
// ============================================================================

export const urinaryTerms: MedicalTerm[] = [
  {
    id: 'uro-nephron',
    term: 'Nephron',
    pronunciation: {
      ipa: '/ˈnefrɒn/',
      simplified: 'NEF-ron',
      stressedSyllable: 1,
    },
    components: {
      root: 'nephr',
      suffix: '-on',
    },
    definitions: {
      1: 'The tiny filtering unit in your kidney that cleans your blood',
      2: 'The microscopic unit in the kidney that filters blood and makes urine',
      3: 'The functional unit of the kidney comprising glomerulus and tubules',
      4: 'Consists of glomerulus, Bowman capsule, and tubular segments (PCT, loop, DCT, CD)',
      5: 'Each kidney contains ~1 million nephrons; juxtamedullary nephrons concentrate urine; cortical nephrons handle most filtration; nephron loss underlies CKD progression',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'nephros',
      originalMeaning: 'kidney',
    },
    category: 'anatomy',
    bodySystems: ['urinary'],
    relatedTerms: ['glomerulus', 'tubule', 'Bowman capsule', 'collecting duct'],
  },
  {
    id: 'uro-oliguria',
    term: 'Oliguria',
    pronunciation: {
      ipa: '/ˌɒlɪˈɡjʊəriə/',
      simplified: 'ol-ih-GYOOR-ee-uh',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'oligo-',
      root: 'ur',
      suffix: '-ia',
    },
    definitions: {
      1: 'Making very little urine',
      2: 'Producing less urine than normal',
      3: 'Reduced urine output, typically less than 400-500 mL per day',
      4: 'Urine output <0.5 mL/kg/hr indicating renal hypoperfusion or injury',
      5: 'Oliguria may be prerenal (hypovolemia), intrinsic (ATN, glomerulonephritis), or postrenal (obstruction); FeNa and urine studies help differentiate; persistent oliguria in AKI worsens prognosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'oligos + ouron',
      originalMeaning: 'scanty + urine',
    },
    category: 'symptom',
    bodySystems: ['urinary'],
    relatedTerms: ['anuria', 'polyuria', 'acute kidney injury', 'prerenal azotemia'],
  },
  {
    id: 'uro-azotemia',
    term: 'Azotemia',
    pronunciation: {
      ipa: '/ˌæzoʊˈtiːmiə/',
      simplified: 'az-oh-TEE-mee-uh',
      stressedSyllable: 3,
    },
    components: {
      root: 'azot/o',
      suffix: '-emia',
    },
    definitions: {
      1: 'When waste products build up in your blood because kidneys are not working well',
      2: 'Elevated nitrogen waste products in the blood',
      3: 'Increased blood urea nitrogen (BUN) and creatinine indicating renal dysfunction',
      4: 'Classified as prerenal, intrinsic, or postrenal; prerenal shows BUN:Cr >20:1',
      5: 'Azotemia is a lab finding; uremia is the clinical syndrome of symptomatic azotemia; progression causes encephalopathy, pericarditis, and platelet dysfunction',
    },
    etymology: {
      language: 'French/Greek',
      originalWord: 'azote + haima',
      originalMeaning: 'nitrogen + blood',
    },
    category: 'diagnosis',
    bodySystems: ['urinary'],
    relatedTerms: ['uremia', 'BUN', 'creatinine', 'acute kidney injury'],
  },
];

// ============================================================================
// REPRODUCTIVE SYSTEM TERMS
// ============================================================================

export const reproductiveTerms: MedicalTerm[] = [
  {
    id: 'repro-menorrhagia',
    term: 'Menorrhagia',
    pronunciation: {
      ipa: '/ˌmenəˈreɪdʒiə/',
      simplified: 'men-oh-RAY-jee-uh',
      stressedSyllable: 3,
    },
    components: {
      root: 'men/o + rrhag',
      suffix: '-ia',
    },
    definitions: {
      1: 'Very heavy periods that last longer than normal',
      2: 'Abnormally heavy or prolonged menstrual bleeding',
      3: 'Menstrual blood loss exceeding 80 mL or lasting more than 7 days',
      4: 'Heavy menstrual bleeding; distinguished from metrorrhagia (irregular bleeding)',
      5: 'Menorrhagia causes include fibroids, adenomyosis, polyps, coagulopathy, and anovulation; PALM-COEIN classification guides workup; may cause iron deficiency anemia',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'men + rhegnynai',
      originalMeaning: 'month + to burst forth',
    },
    category: 'symptom',
    bodySystems: ['reproductive'],
    relatedTerms: ['metrorrhagia', 'dysmenorrhea', 'amenorrhea', 'abnormal uterine bleeding'],
  },
  {
    id: 'repro-amenorrhea',
    term: 'Amenorrhea',
    alternateSpellings: ['Amenorrhoea'],
    pronunciation: {
      ipa: '/eɪˌmenəˈriːə/',
      simplified: 'ay-men-oh-REE-uh',
      stressedSyllable: 4,
    },
    components: {
      prefix: 'a-',
      root: 'men/o + rrhe',
      suffix: '-a',
    },
    definitions: {
      1: 'When a woman does not get her period',
      2: 'Absence of menstrual periods',
      3: 'Absence of menstruation; primary (never occurred) or secondary (previously present)',
      4: 'Primary: no menarche by 15; Secondary: no menses for 3 cycles or 6 months',
      5: 'Amenorrhea workup includes pregnancy test, TSH, prolactin, FSH; hypothalamic, pituitary, ovarian, and outflow tract causes; functional hypothalamic amenorrhea common in athletes',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'a + men + rhoia',
      originalMeaning: 'without + month + flow',
    },
    category: 'symptom',
    bodySystems: ['reproductive'],
    relatedTerms: ['oligomenorrhea', 'menarche', 'menopause', 'hypothalamic amenorrhea'],
  },
  {
    id: 'repro-dyspareunia',
    term: 'Dyspareunia',
    pronunciation: {
      ipa: '/ˌdɪspəˈruːniə/',
      simplified: 'dis-puh-ROO-nee-uh',
      stressedSyllable: 3,
    },
    components: {
      prefix: 'dys-',
      root: 'pareun',
      suffix: '-ia',
    },
    definitions: {
      1: 'Pain during sexual activity',
      2: 'Painful sexual intercourse',
      3: 'Genital pain occurring before, during, or after intercourse',
      4: 'Classified as superficial (entry) or deep; may be lifelong or acquired',
      5: 'Superficial dyspareunia suggests vulvodynia, atrophy, or infection; deep dyspareunia suggests endometriosis, PID, or adhesions; psychosexual factors often contribute',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'dys + pareunos',
      originalMeaning: 'difficult + lying beside',
    },
    category: 'symptom',
    bodySystems: ['reproductive'],
    relatedTerms: ['vaginismus', 'vulvodynia', 'endometriosis', 'atrophic vaginitis'],
  },
];

// ============================================================================
// LYMPHATIC/IMMUNE SYSTEM TERMS
// ============================================================================

export const immuneTerms: MedicalTerm[] = [
  {
    id: 'immune-lymphadenopathy',
    term: 'Lymphadenopathy',
    pronunciation: {
      ipa: '/ˌlɪmfædɪˈnɒpəθi/',
      simplified: 'lim-fad-eh-NOP-uh-thee',
      stressedSyllable: 4,
    },
    components: {
      root: 'lymph/o + aden/o',
      suffix: '-pathy',
    },
    definitions: {
      1: 'Swollen lymph nodes (lumps you might feel in your neck or armpits)',
      2: 'Enlarged lymph nodes, often from infection or illness',
      3: 'Abnormal enlargement of lymph nodes',
      4: 'May be localized (draining infection) or generalized (systemic disease)',
      5: 'Lymphadenopathy evaluation considers location, size, consistency, tenderness, and duration; supraclavicular nodes have high malignancy risk; biopsy indicated for persistent unexplained lymphadenopathy',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'lympha + aden + pathos',
      originalMeaning: 'water + gland + disease',
    },
    category: 'symptom',
    bodySystems: ['lymphatic'],
    relatedTerms: ['lymphoma', 'lymph node', 'splenomegaly', 'reactive lymphadenitis'],
  },
  {
    id: 'immune-anaphylaxis',
    term: 'Anaphylaxis',
    pronunciation: {
      ipa: '/ˌænəfɪˈlæksɪs/',
      simplified: 'an-uh-fih-LAK-sis',
      stressedSyllable: 4,
    },
    components: {
      prefix: 'ana-',
      root: 'phylaxis',
    },
    definitions: {
      1: 'A severe allergic reaction that can be life-threatening',
      2: 'A serious whole-body allergic reaction that needs emergency treatment',
      3: 'Acute systemic hypersensitivity reaction affecting multiple organ systems',
      4: 'IgE-mediated mast cell degranulation causing vasodilation and bronchoconstriction',
      5: 'Anaphylaxis involves skin (urticaria, angioedema), respiratory (bronchospasm, laryngeal edema), and cardiovascular (hypotension) systems; epinephrine is first-line treatment; biphasic reactions may occur',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'ana + phylaxis',
      originalMeaning: 'against + protection (paradoxically)',
    },
    category: 'diagnosis',
    bodySystems: ['immune'],
    relatedTerms: ['allergy', 'urticaria', 'angioedema', 'epinephrine', 'anaphylactoid'],
  },
  {
    id: 'immune-immunodeficiency',
    term: 'Immunodeficiency',
    pronunciation: {
      ipa: '/ˌɪmjuːnoʊdɪˈfɪʃənsi/',
      simplified: 'im-yoo-noh-deh-FISH-en-see',
      stressedSyllable: 5,
    },
    components: {
      prefix: 'immuno-',
      root: 'defic',
      suffix: '-iency',
    },
    definitions: {
      1: 'When your body cannot fight off infections well',
      2: 'A weakened immune system that cannot fight infections properly',
      3: 'Impaired immune function leading to increased susceptibility to infection',
      4: 'Primary (genetic) or secondary (acquired - HIV, chemotherapy, medications)',
      5: 'Immunodeficiency presentations depend on component affected: B-cell (encapsulated bacteria), T-cell (opportunistic infections), phagocyte (bacteria, fungi), complement (Neisseria); IVIG, prophylaxis, and targeted therapies used',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'immunis + de + facere',
      originalMeaning: 'exempt + away + to make',
    },
    category: 'diagnosis',
    bodySystems: ['immune'],
    relatedTerms: ['HIV', 'AIDS', 'SCID', 'Common Variable Immunodeficiency'],
  },
];

// ============================================================================
// HEMATOLOGIC SYSTEM TERMS
// ============================================================================

export const hematologicTerms: MedicalTerm[] = [
  {
    id: 'heme-erythrocyte',
    term: 'Erythrocyte',
    pronunciation: {
      ipa: '/ɪˈrɪθrəsaɪt/',
      simplified: 'ih-RITH-roh-site',
      stressedSyllable: 2,
    },
    components: {
      root: 'erythr/o + cyt',
      suffix: '-e',
    },
    definitions: {
      1: 'Red blood cells that carry oxygen around your body',
      2: 'Red blood cells that transport oxygen',
      3: 'Biconcave disc-shaped cells containing hemoglobin for oxygen transport',
      4: 'Anucleate cells with ~120-day lifespan; produced in bone marrow, removed by spleen',
      5: 'Erythrocytes contain hemoglobin (4 heme groups); 2,3-DPG modulates oxygen affinity; reticulocyte count reflects marrow response; membrane defects cause hemolysis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'erythros + kytos',
      originalMeaning: 'red + cell',
    },
    category: 'anatomy',
    bodySystems: ['hematologic'],
    relatedTerms: ['hemoglobin', 'reticulocyte', 'anemia', 'RBC'],
  },
  {
    id: 'heme-thrombocytopenia',
    term: 'Thrombocytopenia',
    pronunciation: {
      ipa: '/ˌθrɒmboʊsaɪtəˈpiːniə/',
      simplified: 'throm-boh-sy-toh-PEE-nee-uh',
      stressedSyllable: 5,
    },
    components: {
      root: 'thromb/o + cyt/o',
      suffix: '-penia',
    },
    definitions: {
      1: 'Not having enough platelets in your blood, which can cause bleeding',
      2: 'A low platelet count that may cause easy bruising or bleeding',
      3: 'Decreased platelet count, typically below 150,000/microL',
      4: 'Classified by mechanism: decreased production, increased destruction, or sequestration',
      5: 'Thrombocytopenia causes include ITP, TTP, HIT, DIC, bone marrow failure, and hypersplenism; <10,000 risk spontaneous bleeding; platelet transfusion contraindicated in TTP and HIT',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'thrombos + kytos + penia',
      originalMeaning: 'clot + cell + poverty',
    },
    category: 'diagnosis',
    bodySystems: ['hematologic'],
    relatedTerms: ['platelet', 'ITP', 'TTP', 'HIT', 'petechiae'],
  },
  {
    id: 'heme-pancytopenia',
    term: 'Pancytopenia',
    pronunciation: {
      ipa: '/ˌpænsaɪtəˈpiːniə/',
      simplified: 'pan-sy-toh-PEE-nee-uh',
      stressedSyllable: 4,
    },
    components: {
      prefix: 'pan-',
      root: 'cyt/o',
      suffix: '-penia',
    },
    definitions: {
      1: 'When all your blood cell types are too low',
      2: 'Low counts of all blood cell types - red cells, white cells, and platelets',
      3: 'Reduction in all three blood cell lineages',
      4: 'Decreased RBCs, WBCs, and platelets; suggests bone marrow failure or infiltration',
      5: 'Pancytopenia differential includes aplastic anemia, myelodysplastic syndrome, leukemia, megaloblastic anemia, and hypersplenism; bone marrow biopsy usually required',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'pan + kytos + penia',
      originalMeaning: 'all + cell + poverty',
    },
    category: 'diagnosis',
    bodySystems: ['hematologic'],
    relatedTerms: ['aplastic anemia', 'myelodysplastic syndrome', 'bone marrow failure'],
  },
  {
    id: 'heme-coagulopathy',
    term: 'Coagulopathy',
    pronunciation: {
      ipa: '/koʊˌæɡjʊˈlɒpəθi/',
      simplified: 'koh-ag-yoo-LOP-uh-thee',
      stressedSyllable: 4,
    },
    components: {
      root: 'coagul/o',
      suffix: '-pathy',
    },
    definitions: {
      1: 'When your blood does not clot properly',
      2: 'A disorder affecting blood clotting',
      3: 'Abnormality in the blood coagulation cascade leading to bleeding or clotting',
      4: 'Includes factor deficiencies, DIC, vitamin K deficiency, and liver disease',
      5: 'Coagulopathies present with bleeding (hemophilia, DIC consumption) or thrombosis (factor V Leiden, protein C/S deficiency); PT tests extrinsic pathway, PTT tests intrinsic pathway',
    },
    etymology: {
      language: 'Latin/Greek',
      originalWord: 'coagulare + pathos',
      originalMeaning: 'to curdle + disease',
    },
    category: 'diagnosis',
    bodySystems: ['hematologic'],
    relatedTerms: ['hemophilia', 'DIC', 'thrombophilia', 'PT', 'PTT', 'INR'],
  },
];

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const organSystemTermsModule: TerminologyModule = {
  id: 'organ-system-terms',
  name: 'Organ System Terminology',
  description: 'Medical vocabulary organized by body system including cardiovascular, respiratory, gastrointestinal, nervous, musculoskeletal, integumentary, endocrine, urinary, reproductive, immune, and hematologic systems',
  terms: [
    ...cardiovascularTerms,
    ...respiratoryTerms,
    ...gastrointestinalTerms,
    ...nervousSystemTerms,
    ...musculoskeletalTerms,
    ...integumentaryTerms,
    ...endocrineTerms,
    ...urinaryTerms,
    ...reproductiveTerms,
    ...immuneTerms,
    ...hematologicTerms,
  ],
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
};

// Individual system collections are already exported above via `export const`

export default organSystemTermsModule;
