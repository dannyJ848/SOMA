import { EducationalContent } from '../../types';

export const liverFunctionTests: EducationalContent = {
  id: 'liver-function-tests',
  type: 'concept',
  name: 'Liver Function Tests',
  nameEs: 'Pruebas de Función Hepática',
  levels: {
    1: {
      level: 1,
      summary: 'Liver function tests are blood tests that check how well your liver is working.',
      explanation: 'Doctors use liver function tests to see if your liver is healthy. These tests measure different chemicals in your blood that the liver makes or processes.',
      keyTerms: [{ term: 'blood test', definition: 'Test that analyzes blood samples' }, { term: 'liver health', definition: 'How well the liver is functioning' }, { term: 'laboratory tests', definition: 'Medical tests done in a lab' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'LFTs include tests of synthetic function and markers of hepatocellular injury.',
      explanation: 'True liver function tests measure what the liver produces (albumin, coagulation factors) while liver chemistries measure enzymes released during injury. Together they assess both liver damage and liver reserve.',
      keyTerms: [{ term: 'albumin', definition: 'Major protein produced by the liver' }, { term: 'INR', definition: 'International normalized ratio - measures blood clotting' }, { term: 'bilirubin', definition: 'Yellow pigment from red blood cell breakdown' }, { term: 'synthetic function', definition: 'Liver\'s ability to produce proteins' }, { term: 'liver reserve', definition: 'Remaining functional capacity of the liver' }],
      clinicalNotes: 'INR and albumin are the most important markers of synthetic function and correlate with prognosis.'
    },
    3: {
      level: 3,
      summary: 'Comprehensive liver assessment requires integration of synthetic function, liver chemistries, and clinical evaluation.',
      explanation: 'Albumin has a long half-life (20 days) and reflects chronic liver function. Prothrombin time/INR has a shorter half-life and can detect acute changes. Total and direct bilirubin help differentiate pre-hepatic, hepatic, and post-hepatic causes of jaundice. Ammonia levels are used in acute encephalopathy evaluation.',
      keyTerms: [{ term: 'Child-Pugh score', definition: 'Scoring system for cirrhosis severity' }, { term: 'MELD score', definition: 'Model for End-Stage Liver Disease score' }, { term: 'conjugated bilirubin', definition: 'Direct bilirubin processed by liver' }, { term: 'unconjugated bilirubin', definition: 'Indirect bilirubin before liver processing' }, { term: 'hepatic encephalopathy', definition: 'Brain dysfunction from liver failure' }],
      clinicalNotes: 'Child-Pugh score uses albumin, bilirubin, INR, ascites, and encephalopathy to classify cirrhosis severity.'
    },
    4: {
      level: 4,
      summary: 'Advanced liver function assessment incorporates dynamic tests and quantitative measures of liver reserve.',
      explanation: 'Static tests like albumin and INR provide a snapshot, but dynamic tests like indocyanine green clearance or HIDA scans assess real-time liver function. Quantitative liver function tests can predict post-hepatectomy liver failure risk and transplant outcomes.',
      keyTerms: [{ term: 'indocyanine green clearance', definition: 'Dynamic test of liver function' }, { term: 'HIDA scan', definition: 'Nuclear medicine test of bile excretion' }, { term: 'hepatic venous pressure gradient', definition: 'HVPG - measures portal hypertension' }, { term: 'portal hypertension', definition: 'Elevated pressure in portal venous system' }, { term: 'post-hepatectomy liver failure', definition: 'Liver failure after partial liver removal' }],
      clinicalNotes: 'MELD-Na incorporates sodium to improve prognostication in cirrhosis. Hepatic venous pressure gradient >10 mmHg defines clinically significant portal hypertension.'
    },
    5: {
      level: 5,
      summary: 'Expert interpretation requires understanding the limitations of standard LFTs and use of specialized testing for complex cases.',
      explanation: 'Standard LFTs have limited sensitivity and specificity for early disease. Normal LFTs do not exclude significant liver disease, particularly in well-compensated cirrhosis. Specialized tests like quantitative liver scintigraphy, elastography for fibrosis staging, and genetic testing for inherited liver diseases complement standard LFTs in complex cases.',
      keyTerms: [{ term: 'transient elastography', definition: 'Ultrasound-based liver stiffness measurement' }, { term: 'FibroScan', definition: 'Device for non-invasive fibrosis assessment' }, { term: 'genetic liver disease', definition: 'Inherited disorders affecting the liver' }, { term: 'compensated cirrhosis', definition: 'Cirrhosis without clinical complications' }, { term: 'precision hepatology', definition: 'Individualized liver disease management' }],
      clinicalNotes: 'Albumin can be normal in well-compensated cirrhosis. Consider non-invasive fibrosis markers (FIB-4, APRI) or elastography before biopsy. Genetic testing for HFE, SERPINA1, ATP7B indicated in appropriate settings.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'liver-enzymes', targetType: 'concept', relationship: 'related' }, { targetId: 'what-the-liver-does', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
