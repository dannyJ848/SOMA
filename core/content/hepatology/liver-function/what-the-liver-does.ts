import { EducationalContent } from '../../types';

export const whatTheLiverDoes: EducationalContent = {
  id: 'what-the-liver-does',
  type: 'concept',
  name: 'What the Liver Does',
  nameEs: 'Funciones del Hígado',
  levels: {
    1: {
      level: 1,
      summary: 'The liver is a large organ that does many important jobs to keep you healthy.',
      explanation: 'Your liver helps clean your blood, stores energy, and makes important proteins. It is located on the right side of your belly and is about the size of a football.',
      keyTerms: [{ term: 'liver', definition: 'Large organ that cleans blood and makes important substances' }, { term: 'organ', definition: 'Body part that does specific jobs' }, { term: 'blood cleaning', definition: 'Removing waste from blood' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'The liver performs metabolic, synthetic, and detoxification functions essential for life.',
      explanation: 'The liver metabolizes nutrients from digestion, synthesizes proteins including clotting factors and albumin, stores glycogen and vitamins, produces bile for fat digestion, and detoxifies drugs and toxins.',
      keyTerms: [{ term: 'metabolism', definition: 'Chemical processes that convert food to energy' }, { term: 'protein synthesis', definition: 'Making proteins' }, { term: 'detoxification', definition: 'Removing harmful substances' }, { term: 'bile production', definition: 'Making fluid that helps digest fats' }, { term: 'glycogen storage', definition: 'Storing sugar for energy' }],
      clinicalNotes: 'The liver has remarkable regenerative capacity and functional reserve - up to 75% can be removed and it will regenerate.'
    },
    3: {
      level: 3,
      summary: 'The liver is central to carbohydrate, protein, and lipid metabolism, and performs critical synthetic and excretory functions.',
      explanation: 'The liver maintains glucose homeostasis through glycogenolysis and gluconeogenesis. It synthesizes most plasma proteins including all coagulation factors except factor VIII. It metabolizes ammonia to urea, conjugates bilirubin for excretion, and performs first-pass metabolism of drugs and toxins.',
      keyTerms: [{ term: 'gluconeogenesis', definition: 'Making new glucose from non-sugar sources' }, { term: 'glycogenolysis', definition: 'Breaking down stored glycogen to glucose' }, { term: 'urea cycle', definition: 'Process converting ammonia to urea' }, { term: 'bilirubin conjugation', definition: 'Processing bilirubin for excretion' }, { term: 'first-pass metabolism', definition: 'Drug processing before entering systemic circulation' }, { term: 'cytochrome P450', definition: 'Enzyme system for drug metabolism' }],
      clinicalNotes: 'Hepatic dysfunction leads to hypoglycemia (impaired gluconeogenesis), coagulopathy (decreased synthesis), hyperammonemia (impaired urea cycle), and jaundice (impaired bilirubin conjugation).'
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of hepatic function includes the lobular zonation of metabolic processes and hepatocyte-cholangiocyte interactions.',
      explanation: 'Hepatic lobules demonstrate metabolic zonation with periportal hepatocytes performing oxidative metabolism and gluconeogenesis, while pericentral hepatocytes perform glycolysis and biotransformation. The liver produces bile acids that are recycled through enterohepatic circulation. Hepatocytes and cholangiocytes interact through autocrine and paracrine signaling.',
      keyTerms: [{ term: 'hepatic zonation', definition: 'Functional specialization of hepatocytes by location' }, { term: 'enterohepatic circulation', definition: 'Recycling of bile acids between liver and intestine' }, { term: 'bile acids', definition: 'Molecules produced from cholesterol for fat digestion' }, { term: 'hepatocyte', definition: 'Main functional liver cell' }, { term: 'cholangiocyte', definition: 'Bile duct cell' }, { term: 'sinusoidal endothelium', definition: 'Specialized blood vessel lining in liver' }],
      clinicalNotes: 'Zone 3 (pericentral) hepatocytes are most susceptible to ischemic and toxic injury. Bile acid synthesis and recycling can be targeted therapeutically in cholestatic diseases.'
    },
    5: {
      level: 5,
      summary: 'Expert knowledge encompasses molecular mechanisms of hepatic function, regeneration, and adaptation to disease states.',
      explanation: 'The liver exhibits unique regenerative capacity mediated by hepatocyte proliferation and hepatic progenitor cell activation. Hepatocytes are highly polarized epithelial cells with distinct apical (canalicular) and basolateral (sinusoidal) domains. The liver adapts to metabolic demands through transcriptional programs regulated by nuclear receptors including FXR, PXR, and CAR. Understanding these pathways enables precision therapeutic targeting in liver disease.',
      keyTerms: [{ term: 'hepatic regeneration', definition: 'Liver\'s ability to regrow after injury' }, { term: 'hepatic progenitor cells', definition: 'Stem cells that can become hepatocytes' }, { term: 'nuclear receptors', definition: 'Proteins that regulate gene expression' }, { term: 'FXR', definition: 'Farnesoid X receptor - regulates bile acid synthesis' }, { term: 'PXR', definition: 'Pregnane X receptor - regulates drug metabolism' }, { term: 'CAR', definition: 'Constitutive androstane receptor - regulates xenobiotic metabolism' }, { term: 'hepatocyte polarity', definition: 'Directional organization of hepatocyte membrane domains' }],
      clinicalNotes: 'FXR agonists are therapeutic in primary biliary cholangitis. CAR and PXR activation explain many drug-drug interactions through cytochrome P450 induction. Regenerative capacity is impaired in cirrhosis due to altered hepatic architecture.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'liver-function-tests', targetType: 'concept', relationship: 'related' }, { targetId: 'liver-enzymes', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
