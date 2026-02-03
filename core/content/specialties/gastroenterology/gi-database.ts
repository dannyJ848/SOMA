// =============================================================================
// Biological Self — Gastroenterology Specialty Database
// 25 entries covering esophageal, gastric, hepatic, pancreatic, biliary,
// small-bowel, colorectal, functional, and procedural GI topics
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GISpecialtyEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory:
    | 'esophageal'
    | 'gastric'
    | 'hepatic'
    | 'pancreatic'
    | 'biliary'
    | 'small-bowel'
    | 'colorectal'
    | 'functional'
    | 'procedural';
  summary: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnosticWorkup: string[];
  management: string;
  dietaryRecommendations: string;
  medications: string[];
  whenToRefer: string;
  redFlags: string[];
  patientTip: string;
}

type Sub = GISpecialtyEntry['subcategory'];

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function gi(
  id: string, name: string, nameEs: string, subcategory: Sub,
  summary: string, pathophysiology: string,
  clinicalFeatures: string[], diagnosticWorkup: string[],
  management: string, dietaryRecommendations: string,
  medications: string[], whenToRefer: string,
  redFlags: string[], patientTip: string,
): GISpecialtyEntry {
  return {
    id, name, nameEs, subcategory, summary, pathophysiology,
    clinicalFeatures, diagnosticWorkup, management, dietaryRecommendations,
    medications, whenToRefer, redFlags, patientTip,
  };
}

// ---------------------------------------------------------------------------
// GI SPECIALTY ENTRIES
// ---------------------------------------------------------------------------

export const GI_SPECIALTY_ENTRIES: Record<string, GISpecialtyEntry> = {

  // =========================================================================
  // ESOPHAGEAL (3)
  // =========================================================================

  'gerd-management': gi(
    'gerd-management', 'GERD Management', 'Manejo del ERGE', 'esophageal',
    'Gastroesophageal reflux disease is chronic acid reflux causing mucosal damage and symptoms such as heartburn and regurgitation.',
    'Transient lower esophageal sphincter (LES) relaxations allow gastric acid to contact esophageal squamous epithelium, triggering inflammation and symptom perception via chemosensitive afferents.',
    ['Heartburn (retrosternal burning)', 'Regurgitation of sour/bitter material', 'Dysphagia', 'Chronic cough or hoarseness', 'Dental erosions', 'Chest pain (non-cardiac)'],
    ['Clinical diagnosis for typical symptoms', 'Upper endoscopy if alarm features', '24-h pH/impedance monitoring for refractory cases', 'Esophageal manometry before surgery'],
    'Step-up approach: lifestyle modifications first, then PPI therapy (standard dose x 8 weeks). Maintenance PPI at lowest effective dose for relapsers. Fundoplication for PPI-dependent or refractory patients.',
    'Avoid large meals, acidic/spicy foods, caffeine, alcohol, and chocolate. Elevate head of bed 6-8 inches. Avoid eating 3 hours before bedtime. Weight loss if overweight.',
    ['Omeprazole 20 mg daily', 'Esomeprazole 40 mg daily', 'Famotidine 20 mg BID (step-down)', 'Antacids PRN'],
    'Refer if alarm symptoms (dysphagia, weight loss, GI bleeding), refractory to 8 weeks of BID PPI, or atypical presentation.',
    ['Dysphagia or odynophagia', 'Unintentional weight loss', 'GI bleeding / iron deficiency anemia', 'Persistent vomiting', 'Symptoms starting after age 50'],
    'Keep a food diary to identify personal triggers — not everyone reacts to the same foods.',
  ),

  'barretts-esophagus': gi(
    'barretts-esophagus', "Barrett's Esophagus", 'Esofago de Barrett', 'esophageal',
    "Barrett's esophagus is intestinal metaplasia of the distal esophageal epithelium, a pre-malignant condition associated with chronic GERD.",
    'Chronic acid/bile exposure induces replacement of normal squamous epithelium with specialized intestinal-type columnar epithelium containing goblet cells, creating a field prone to dysplasia and adenocarcinoma.',
    ['Often asymptomatic once metaplasia established', 'History of chronic GERD symptoms', 'May present with dysphagia if stricture develops'],
    ['Upper endoscopy with Seattle protocol biopsies (4-quadrant q2 cm)', 'Histologic confirmation of intestinal metaplasia with goblet cells', 'Assess for dysplasia grade'],
    'PPI therapy (high-dose) to control reflux. Surveillance endoscopy: no dysplasia q3-5 yr, low-grade dysplasia q6-12 mo or endoscopic eradication, high-grade dysplasia: endoscopic eradication therapy (RFA/EMR).',
    'Standard GERD dietary precautions. Emphasize antioxidant-rich fruits and vegetables. Limit processed meats and high-fat foods.',
    ['Esomeprazole 40 mg BID', 'Omeprazole 40 mg daily', 'Pantoprazole 40 mg daily'],
    "Refer at diagnosis for surveillance planning. Urgent referral if dysplasia detected on biopsy.",
    ['New or progressive dysphagia', 'GI bleeding', 'Weight loss', 'High-grade dysplasia on biopsy'],
    "Barrett's does not always lead to cancer. Regular surveillance allows early detection and treatment of any concerning changes.",
  ),

  'esophageal-varices': gi(
    'esophageal-varices', 'Esophageal Varices', 'Varices esofagicas', 'esophageal',
    'Dilated submucosal veins in the esophagus caused by portal hypertension, most commonly from cirrhosis, with risk of life-threatening hemorrhage.',
    'Portal hypertension (HVPG > 10 mmHg) diverts blood through portosystemic collaterals. Esophageal submucosal veins dilate under increased wall tension; rupture occurs when wall stress exceeds tensile strength.',
    ['Often asymptomatic until bleeding', 'Hematemesis (bright red or coffee-ground)', 'Melena', 'Signs of chronic liver disease (spider angiomata, ascites)'],
    ['Screening EGD for all cirrhotics at diagnosis', 'Classify variceal size (small vs large)', 'Assess for red wale marks', 'Hepatic venous pressure gradient measurement'],
    'Primary prophylaxis: non-selective beta-blocker (NSBB) or endoscopic variceal ligation (EVL) for large varices. Acute bleed: resuscitation, octreotide, emergent EGD with band ligation, antibiotics. Secondary prophylaxis: NSBB + EVL. Consider TIPS for refractory bleeding.',
    'Soft diet after banding. Avoid hard, sharp foods that may disrupt bands. Sodium restriction if ascites present.',
    ['Propranolol 20-40 mg BID (titrate to HR 55-60)', 'Nadolol 40 mg daily', 'Carvedilol 6.25 mg BID', 'Octreotide 50 mcg bolus then 50 mcg/hr (acute bleed)', 'Ceftriaxone 1 g IV daily (bleed prophylaxis)'],
    'All patients with known or suspected cirrhosis should be referred for screening endoscopy.',
    ['Hematemesis or large-volume melena', 'Hemodynamic instability', 'Rapid drop in hemoglobin', 'Signs of hepatic encephalopathy with bleeding'],
    'If you have liver disease, ask your doctor about screening for varices — early treatment can prevent dangerous bleeding.',
  ),

  // =========================================================================
  // GASTRIC (3)
  // =========================================================================

  'peptic-ulcer-disease': gi(
    'peptic-ulcer-disease', 'Peptic Ulcer Disease', 'Enfermedad ulcerosa peptica', 'gastric',
    'Mucosal defects in the stomach or duodenum caused primarily by H. pylori infection or NSAID use.',
    'Disruption of the mucosal defense barrier (mucus-bicarbonate layer, epithelial integrity, mucosal blood flow) by H. pylori urease/toxins or NSAID-mediated prostaglandin inhibition allows acid-peptic injury.',
    ['Epigastric pain (burning, gnawing)', 'Pain worse with meals (gastric) or relieved by meals (duodenal)', 'Nausea', 'Early satiety', 'Bloating'],
    ['H. pylori testing (urea breath test, stool antigen, or biopsy)', 'Upper endoscopy if alarm features or age > 55', 'CBC, iron studies if anemia suspected', 'Gastric ulcer biopsy to rule out malignancy'],
    'Eradicate H. pylori if positive (see H. pylori entry). Discontinue NSAIDs if possible. PPI therapy 4-8 weeks (duodenal) or 8-12 weeks (gastric). Repeat endoscopy for gastric ulcers to confirm healing.',
    'Avoid NSAIDs, alcohol, and smoking. Eat regular meals. No specific dietary restrictions proven, but avoid personally irritating foods.',
    ['Omeprazole 20 mg BID (during H. pylori treatment)', 'Pantoprazole 40 mg daily', 'Sucralfate 1 g QID (adjunct)', 'Misoprostol 200 mcg QID (NSAID prophylaxis)'],
    'Refer if refractory ulcer despite 12 weeks of PPI, recurrent ulcers, or complications (bleeding, perforation, obstruction).',
    ['Hematemesis or melena', 'Sudden severe abdominal pain (perforation)', 'Persistent vomiting (obstruction)', 'Unintentional weight loss', 'Anemia'],
    'If you need long-term NSAIDs, talk to your doctor about stomach-protective medication to take alongside them.',
  ),

  'h-pylori-eradication': gi(
    'h-pylori-eradication', 'H. pylori Eradication', 'Erradicacion de H. pylori', 'gastric',
    'Treatment protocols for Helicobacter pylori infection, the primary cause of peptic ulcers and a risk factor for gastric cancer.',
    'H. pylori colonizes the gastric mucosa, producing urease to neutralize acid. Virulence factors (CagA, VacA) trigger chronic inflammation, alter gastric acid secretion, and can initiate the Correa cascade toward intestinal metaplasia and carcinoma.',
    ['Often asymptomatic', 'Dyspepsia', 'Epigastric discomfort', 'Nausea', 'Iron deficiency anemia (refractory)', 'ITP association'],
    ['Urea breath test (preferred non-invasive)', 'Stool antigen test', 'Endoscopic biopsy with CLO test/histology', 'Hold PPI 2 weeks and antibiotics 4 weeks before testing'],
    'First-line: bismuth quadruple therapy (PPI + bismuth + metronidazole + tetracycline x 14 days) or concomitant therapy (PPI + clarithromycin + amoxicillin + metronidazole x 14 days). Confirm eradication 4 weeks after treatment completion.',
    'No specific dietary restrictions during treatment. Avoid alcohol during metronidazole use. Probiotics may reduce antibiotic side effects.',
    ['PPI BID (omeprazole 20 mg)', 'Bismuth subsalicylate 524 mg QID', 'Metronidazole 500 mg TID', 'Tetracycline 500 mg QID', 'Amoxicillin 1 g BID', 'Clarithromycin 500 mg BID'],
    'Refer if two eradication attempts fail (culture and sensitivity testing needed) or if complicated ulcer disease.',
    ['Bleeding ulcer', 'Gastric outlet obstruction', 'Suspected gastric malignancy', 'MALT lymphoma association'],
    'Complete the entire course of antibiotics even if you feel better — stopping early increases resistance and treatment failure.',
  ),

  'gastroparesis': gi(
    'gastroparesis', 'Gastroparesis', 'Gastroparesia', 'gastric',
    'Delayed gastric emptying without mechanical obstruction, most commonly from diabetic autonomic neuropathy or idiopathic causes.',
    'Impaired gastric motility from damage to the vagus nerve, interstitial cells of Cajal, or smooth muscle results in delayed emptying. Diabetic neuropathy, post-surgical vagal injury, and idiopathic causes account for most cases.',
    ['Nausea and vomiting (often of undigested food)', 'Early satiety', 'Postprandial fullness and bloating', 'Abdominal pain', 'Weight loss', 'Erratic blood glucose in diabetics'],
    ['Gastric emptying scintigraphy (gold standard — 4 hr study)', 'Upper endoscopy to exclude obstruction', 'Basic metabolic panel, TSH, HbA1c', 'SmartPill wireless motility capsule (alternative)'],
    'Dietary modification is cornerstone. Prokinetics: metoclopramide (lowest dose, shortest duration). Antiemetics for symptom control. Optimize glycemic control in diabetics. Gastric electrical stimulation for refractory cases. Pyloromyotomy (G-POEM) emerging option.',
    'Small frequent meals (4-6/day). Low-fat, low-fiber diet. Well-cooked soft foods. Liquid calories when solids poorly tolerated. Avoid carbonated beverages.',
    ['Metoclopramide 5-10 mg AC (max 12 weeks)', 'Domperidone 10 mg TID (where available)', 'Ondansetron 4-8 mg TID PRN', 'Prochlorperazine 5-10 mg PRN', 'Erythromycin 50-100 mg IV (acute inpatient)'],
    'Refer if diagnosis confirmed and symptoms persist despite dietary changes and antiemetics, or for consideration of gastric stimulator placement.',
    ['Severe dehydration or malnutrition', 'Intractable vomiting', 'Bezoar formation', 'Recurrent hospitalizations'],
    'Eating smaller, more frequent meals with softer textures is often more effective than medication for managing daily symptoms.',
  ),

  // =========================================================================
  // HEPATIC (4)
  // =========================================================================

  'nafld-nash': gi(
    'nafld-nash', 'NAFLD/NASH', 'EHGNA/EHNA', 'hepatic',
    'Non-alcoholic fatty liver disease encompasses simple steatosis to non-alcoholic steatohepatitis (NASH), which can progress to fibrosis and cirrhosis.',
    'Insulin resistance drives hepatic de novo lipogenesis and impaired fatty acid oxidation, causing steatosis. Lipotoxicity, oxidative stress, and inflammatory cytokines trigger hepatocyte injury (NASH). Sustained injury activates stellate cells, producing fibrosis.',
    ['Usually asymptomatic', 'Fatigue', 'Right upper quadrant discomfort', 'Hepatomegaly', 'Elevated ALT/AST (AST:ALT ratio < 1 until cirrhosis)'],
    ['Hepatic steatosis index or FLI for screening', 'FIB-4 or NAFLD fibrosis score for fibrosis risk', 'Liver ultrasound', 'Transient elastography (FibroScan)', 'Liver biopsy (gold standard for NASH diagnosis)'],
    'Weight loss (7-10% body weight) is the most effective intervention and can reverse NASH. No FDA-approved pharmacotherapy specific to NASH yet; resmetirom (thyroid hormone receptor agonist) approved 2024. Pioglitazone and vitamin E considered. Manage metabolic comorbidities aggressively.',
    'Calorie reduction (500-1000 kcal/day deficit). Mediterranean diet preferred. Minimize added sugars and fructose. Avoid alcohol. Coffee consumption may be protective.',
    ['Pioglitazone 30-45 mg daily (biopsy-proven NASH, non-diabetic)', 'Vitamin E 800 IU daily (biopsy-proven NASH, non-diabetic/non-cirrhotic)', 'Resmetirom 80-100 mg daily (for NASH with fibrosis)', 'GLP-1 RA (semaglutide — emerging evidence)'],
    'Refer if FIB-4 > 1.3 (indeterminate) or > 2.67 (high risk), elevated liver enzymes not explained, or suspected cirrhosis.',
    ['Signs of cirrhosis (ascites, jaundice, variceal bleeding)', 'Rapidly rising liver enzymes', 'FIB-4 > 2.67', 'Unexplained weight loss'],
    'Losing even 5% of your body weight can significantly reduce liver fat — small, sustainable changes matter more than crash diets.',
  ),

  'hepatitis-b-management': gi(
    'hepatitis-b-management', 'Hepatitis B Management', 'Manejo de Hepatitis B', 'hepatic',
    'Chronic hepatitis B virus infection management focusing on viral suppression, monitoring, and preventing complications.',
    'HBV is a hepatotropic DNA virus integrating cccDNA into hepatocytes. Chronic infection results from immune tolerance/failure to clear virus. Ongoing immune-mediated hepatocyte destruction and viral integration drive fibrosis and hepatocellular carcinoma risk.',
    ['Often asymptomatic in chronic phase', 'Fatigue', 'Right upper quadrant pain', 'Jaundice (flares)', 'Extrahepatic: polyarteritis nodosa, glomerulonephritis'],
    ['HBsAg, anti-HBs, anti-HBc panel', 'HBeAg, anti-HBe', 'HBV DNA quantitative PCR', 'ALT levels serially', 'Liver fibrosis assessment (FibroScan or biopsy)', 'HCC screening: ultrasound + AFP q6 months'],
    'Not all chronic HBV requires treatment. Treat if: immune-active phase (elevated ALT + high HBV DNA), significant fibrosis, or cirrhosis. First-line: entecavir or tenofovir (indefinite in most). Monitor for HBsAg loss (functional cure). HCC surveillance for at-risk patients.',
    'Avoid alcohol. No specific dietary restrictions. Maintain healthy weight to avoid superimposed NAFLD.',
    ['Entecavir 0.5 mg daily (1 mg if lamivudine-experienced)', 'Tenofovir disoproxil 300 mg daily', 'Tenofovir alafenamide 25 mg daily (preferred if renal/bone risk)', 'Peginterferon alfa-2a 180 mcg/wk x 48 wk (select patients)'],
    'Refer at diagnosis for phase determination and treatment decision. Ensure household contacts and sexual partners are vaccinated.',
    ['Acute flare with jaundice or coagulopathy', 'Decompensated cirrhosis', 'Suspected hepatocellular carcinoma', 'Rising AFP or new liver lesion'],
    'Hepatitis B is manageable with modern antivirals — consistent medication adherence is the key to keeping the virus suppressed.',
  ),

  'hepatitis-c-treatment': gi(
    'hepatitis-c-treatment', 'Hepatitis C Treatment', 'Tratamiento de Hepatitis C', 'hepatic',
    'Curative direct-acting antiviral (DAA) therapy for chronic hepatitis C virus infection.',
    'HCV is an RNA virus replicating in hepatocytes. Chronic infection (>6 months) occurs in 55-85% of acute cases. Persistent inflammation causes progressive fibrosis. DAAs target NS3/4A protease, NS5A, and NS5B polymerase to achieve sustained virologic response (SVR = cure).',
    ['Often asymptomatic for decades', 'Fatigue', 'Arthralgia', 'Cryoglobulinemia (purpura, neuropathy)', 'Late: cirrhosis manifestations'],
    ['Anti-HCV antibody (screening)', 'HCV RNA quantitative PCR (confirms active infection)', 'HCV genotype (less critical with pangenotypic DAAs)', 'Fibrosis assessment (FIB-4, FibroScan)', 'CBC, CMP, INR', 'HIV and HBV co-infection screening'],
    'All patients with chronic HCV should be treated. Pangenotypic regimens: sofosbuvir/velpatasvir x 12 weeks (most patients) or glecaprevir/pibrentasvir x 8 weeks (treatment-naive, non-cirrhotic). Confirm SVR12 (undetectable HCV RNA 12 weeks post-treatment). Continue HCC surveillance if cirrhosis present pre-treatment.',
    'No specific dietary restrictions. Avoid alcohol. Avoid hepatotoxic supplements.',
    ['Sofosbuvir/velpatasvir 400/100 mg daily x 12 wk', 'Glecaprevir/pibrentasvir 300/120 mg daily x 8-12 wk', 'Sofosbuvir/velpatasvir/voxilaprevir 400/100/100 mg daily x 12 wk (retreatment)'],
    'Refer all patients with confirmed HCV RNA positivity for treatment. Pre-treatment assessment needed for fibrosis stage and drug interactions.',
    ['Decompensated cirrhosis (ascites, variceal bleed, encephalopathy)', 'HBV co-infection (risk of reactivation during DAA therapy)', 'Suspected hepatocellular carcinoma', 'Significant drug-drug interactions'],
    'Hepatitis C is now curable in most people with just 8-12 weeks of pills — talk to your doctor about treatment even if you feel fine.',
  ),

  'cirrhosis-management': gi(
    'cirrhosis-management', 'Cirrhosis Management', 'Manejo de Cirrosis', 'hepatic',
    'Comprehensive management of cirrhosis focusing on decompensation prevention, complication treatment, and transplant evaluation.',
    'Chronic liver injury from any cause (alcohol, viral, metabolic) activates stellate cells producing excessive collagen. Progressive fibrosis distorts lobular architecture, increases intrahepatic resistance (portal hypertension), and reduces functional hepatocyte mass.',
    ['Compensated: often asymptomatic, fatigue', 'Ascites', 'Variceal bleeding', 'Hepatic encephalopathy (confusion, asterixis)', 'Jaundice', 'Spider angiomata, palmar erythema', 'Coagulopathy'],
    ['Liver function tests, CBC, INR, albumin', 'MELD-Na score calculation', 'Abdominal ultrasound with Doppler', 'Screening EGD for varices', 'HCC surveillance (US + AFP q6 mo)', 'Liver biopsy or elastography for etiology confirmation'],
    'Treat underlying cause (abstinence, antivirals, etc.). Ascites: sodium restriction + diuretics (spironolactone + furosemide). Encephalopathy: lactulose + rifaximin. Variceal prophylaxis: NSBB +/- EVL. HCC screening. Evaluate for liver transplant when MELD >= 15 or first decompensation.',
    'Sodium restriction (< 2 g/day) for ascites. Adequate protein (1.2-1.5 g/kg/day) despite encephalopathy (restriction is outdated). Small frequent meals with late-evening snack to prevent catabolism.',
    ['Spironolactone 100 mg daily (titrate to 400 mg)', 'Furosemide 40 mg daily (titrate to 160 mg)', 'Lactulose 15-30 mL BID-TID (titrate to 2-3 soft stools/day)', 'Rifaximin 550 mg BID', 'Propranolol 20-40 mg BID (variceal prophylaxis)', 'Albumin 25% for large-volume paracentesis'],
    'All cirrhotics should be managed with hepatology/GI involvement. Urgent referral for any decompensation event.',
    ['New-onset ascites', 'GI bleeding', 'Confusion or personality changes (encephalopathy)', 'Fever with ascites (spontaneous bacterial peritonitis)', 'Jaundice worsening rapidly', 'Hepatorenal syndrome (rising creatinine)'],
    'Keeping regular follow-up appointments is critical — many cirrhosis complications can be prevented or caught early with routine monitoring.',
  ),

  // =========================================================================
  // PANCREATIC (2)
  // =========================================================================

  'acute-pancreatitis': gi(
    'acute-pancreatitis', 'Acute Pancreatitis', 'Pancreatitis aguda', 'pancreatic',
    'Acute inflammatory condition of the pancreas, most commonly caused by gallstones or alcohol, ranging from mild edematous to severe necrotizing forms.',
    'Premature activation of trypsinogen within acinar cells triggers autodigestion cascade. Gallstone impaction at the ampulla or alcohol metabolites (fatty acid ethyl esters) cause acinar injury, releasing inflammatory mediators that can cause SIRS and organ failure.',
    ['Severe epigastric pain radiating to the back', 'Nausea and vomiting', 'Abdominal tenderness and guarding', 'Fever', 'Tachycardia', "Grey Turner's/Cullen's sign (severe hemorrhagic)"],
    ['Lipase > 3x upper limit of normal (preferred over amylase)', 'CT abdomen with contrast (if diagnosis uncertain or complications suspected, delay 72 hr for necrosis)', 'RUQ ultrasound (gallstone etiology)', 'Triglyceride level, calcium', 'BISAP or Ranson criteria for severity'],
    'Aggressive IV fluid resuscitation (goal-directed, lactated Ringer). Pain management (multimodal, opioids as needed). Early oral feeding when tolerated (within 24 hr if mild). NPO only if intolerant. ERCP within 24 hr if cholangitis. Cholecystectomy during same admission for mild gallstone pancreatitis.',
    'Early oral feeding with low-fat, soft diet as tolerated. Clear liquids advancing to solids. Avoid alcohol permanently if alcohol-related. Long-term: low-fat diet, small meals.',
    ['Lactated Ringer IV (250-500 mL/hr initially)', 'Hydromorphone 0.5-1 mg IV q3-4h PRN', 'Acetaminophen 1 g IV/PO q6h', 'Ondansetron 4 mg IV PRN nausea'],
    'Hospitalize all patients. ICU transfer for organ failure. GI consult for severe, necrotizing, or gallstone pancreatitis requiring ERCP.',
    ['Organ failure (renal, respiratory, cardiovascular)', 'SIRS criteria met', 'Suspected infected necrosis (fever, rising WBC after initial improvement)', 'Biliary obstruction with cholangitis'],
    'Most episodes of acute pancreatitis resolve within a week with supportive care — identifying and treating the cause prevents recurrence.',
  ),

  'chronic-pancreatitis': gi(
    'chronic-pancreatitis', 'Chronic Pancreatitis', 'Pancreatitis cronica', 'pancreatic',
    'Progressive inflammatory disease causing irreversible structural damage to the pancreas with exocrine and endocrine insufficiency.',
    'Repeated pancreatic injury (alcohol, genetic mutations like PRSS1/SPINK1/CFTR, obstruction) drives a necrosis-fibrosis sequence. Stellate cell activation produces fibrosis replacing functional parenchyma, causing ductal obstruction, calcification, and gland atrophy.',
    ['Recurrent or constant epigastric pain', 'Steatorrhea (fatty, foul-smelling stools)', 'Weight loss', 'Diabetes mellitus (type 3c)', 'Malnutrition and fat-soluble vitamin deficiency'],
    ['CT abdomen (calcifications, ductal dilation)', 'MRCP / secretin-enhanced MRCP (ductal changes)', 'Endoscopic ultrasound (early changes)', 'Fecal elastase-1 (< 200 mcg/g = exocrine insufficiency)', 'HbA1c, glucose (endocrine insufficiency)', 'Fat-soluble vitamin levels (A, D, E, K)'],
    'Pain management (stepwise: acetaminophen, pregabalin/gabapentin, tramadol, opioids). Pancreatic enzyme replacement therapy (PERT) for exocrine insufficiency. Insulin for diabetes. Endoscopic therapy for dominant strictures/stones. Surgery (Frey, Puestow) for refractory pain.',
    'Low-fat diet (though moderate fat with adequate PERT is acceptable). Small frequent meals. Abstain from alcohol. Supplement fat-soluble vitamins. Medium-chain triglyceride (MCT) oil for caloric supplementation.',
    ['Pancrelipase 50,000-75,000 units lipase per meal', 'Pregabalin 75-150 mg BID', 'Acetaminophen 500-1000 mg TID', 'PPI (omeprazole 20 mg) to optimize enzyme activity', 'Insulin (type 3c diabetes management)'],
    'Refer for pain management optimization, endoscopic intervention if ductal pathology, or surgical evaluation if medical therapy fails.',
    ['Severe uncontrolled pain requiring high-dose opioids', 'New diabetes or worsening glycemic control', 'Pancreatic duct obstruction', 'Suspicion of pancreatic cancer (new weight loss, jaundice)'],
    'Taking pancreatic enzymes at the start of every meal and snack is essential — they only work when taken with food.',
  ),

  // =========================================================================
  // BILIARY (2)
  // =========================================================================

  'gallstones-cholecystitis': gi(
    'gallstones-cholecystitis', 'Gallstones & Cholecystitis', 'Colelitiasis y colecistitis', 'biliary',
    'Gallstone disease ranges from asymptomatic cholelithiasis to acute cholecystitis requiring surgical intervention.',
    'Cholesterol supersaturation of bile, gallbladder hypomotility, and accelerated nucleation form cholesterol stones (80%). Pigment stones form from bilirubin polymerization. Cystic duct obstruction by a stone causes gallbladder distension, inflammation, and potential ischemia.',
    ['Biliary colic: postprandial RUQ pain lasting 30 min to several hours', 'Nausea and vomiting', "Acute cholecystitis: persistent RUQ pain, fever, positive Murphy's sign", 'Referred pain to right scapula'],
    ['RUQ ultrasound (first-line: stones, wall thickening, pericholecystic fluid)', 'HIDA scan if ultrasound equivocal (non-filling = cystic duct obstruction)', 'CBC, CMP, lipase (exclude other diagnoses)', 'MRCP if choledocholithiasis suspected'],
    'Asymptomatic gallstones: expectant management. Symptomatic cholelithiasis: elective cholecystectomy. Acute cholecystitis: IV antibiotics + early laparoscopic cholecystectomy (within 72 hr). ERCP for common bile duct stones.',
    'Low-fat diet may reduce biliary colic frequency. Maintain healthy weight; avoid rapid weight loss (increases stone risk). Regular meals (prolonged fasting promotes stone formation).',
    ['Piperacillin-tazobactam 3.375 g IV q6h (cholecystitis)', 'Ceftriaxone 1 g IV + metronidazole 500 mg IV (alternative)', 'Ketorolac 30 mg IV (biliary colic)', 'Ursodiol 8-10 mg/kg/day (non-surgical candidates)'],
    'Refer for surgical evaluation if symptomatic gallstones. Emergent referral for acute cholecystitis, cholangitis, or gallstone pancreatitis.',
    ['Fever with jaundice and RUQ pain (Charcot triad — cholangitis)', 'Altered mental status and hypotension (Reynolds pentad)', 'Concurrent pancreatitis', 'Persistent pain > 6 hours with systemic signs'],
    'Gallstones found incidentally on imaging rarely cause problems — surgery is usually only needed if they cause symptoms.',
  ),

  'primary-biliary-cholangitis': gi(
    'primary-biliary-cholangitis', 'Primary Biliary Cholangitis', 'Colangitis biliar primaria', 'biliary',
    'Autoimmune disease targeting small intrahepatic bile ducts, causing progressive cholestasis and potential cirrhosis.',
    'Autoimmune destruction of biliary epithelial cells in small intrahepatic ducts. Anti-mitochondrial antibodies (AMA) target the E2 subunit of pyruvate dehydrogenase complex. Progressive ductopenia leads to cholestasis, bile acid toxicity, fibrosis, and eventually cirrhosis.',
    ['Fatigue (most common, often debilitating)', 'Pruritus (worse at night)', 'Jaundice (later stage)', 'Elevated alkaline phosphatase', 'Xanthomas/xanthelasma', 'Associated autoimmune conditions (Sjogren, thyroid disease)'],
    ['AMA positive (> 95% of cases)', 'Elevated alkaline phosphatase > 1.5x ULN for > 6 months', 'ANA (sp100, gp210) if AMA negative', 'IgM elevation', 'Liver biopsy (staging, not required for diagnosis if AMA+ and elevated ALP)', 'DEXA scan (osteoporosis risk)'],
    'First-line: ursodeoxycholic acid (UDCA) 13-15 mg/kg/day (improves survival). Assess response at 1 year (Paris criteria). Obeticholic acid (OCA) as add-on for inadequate UDCA response. Pruritus management: cholestyramine, rifampin, naltrexone. Liver transplant for decompensated disease.',
    'No specific diet required. Calcium and vitamin D supplementation for bone health. Fat-soluble vitamin supplementation if cholestasis is severe. Sodium restriction if cirrhotic ascites develops.',
    ['Ursodeoxycholic acid (UDCA) 13-15 mg/kg/day', 'Obeticholic acid 5-10 mg daily (add-on)', 'Cholestyramine 4 g before and after breakfast', 'Rifampin 150-300 mg BID (refractory pruritus)', 'Calcium + vitamin D supplementation'],
    'Refer at diagnosis for hepatology management. Monitor treatment response annually. Transplant evaluation when MELD rising despite therapy.',
    ['Rapid rise in bilirubin', 'Decompensation (ascites, variceal bleeding)', 'Refractory disabling pruritus', 'Inadequate biochemical response to UDCA at 1 year'],
    'UDCA is a daily medication that can slow or halt disease progression — consistent use is essential for the best long-term outcome.',
  ),

  // =========================================================================
  // SMALL BOWEL (2)
  // =========================================================================

  'celiac-disease': gi(
    'celiac-disease', 'Celiac Disease', 'Enfermedad celiaca', 'small-bowel',
    'Autoimmune enteropathy triggered by dietary gluten in genetically susceptible individuals (HLA-DQ2/DQ8), causing villous atrophy and malabsorption.',
    'Gluten peptides (gliadin) cross the intestinal epithelium, are deamidated by tissue transglutaminase (tTG), and presented by HLA-DQ2/DQ8 on antigen-presenting cells. This activates gluten-specific CD4+ T cells, driving an inflammatory response that destroys villi.',
    ['Diarrhea or steatorrhea', 'Bloating and abdominal pain', 'Iron deficiency anemia (refractory)', 'Weight loss', 'Fatigue', 'Dermatitis herpetiformis', 'Osteoporosis', 'Elevated transaminases (unexplained)'],
    ['tTG-IgA antibody (first-line screening)', 'Total IgA level (rule out IgA deficiency)', 'Endomysial antibody (EMA) for confirmation', 'Deamidated gliadin peptide IgG (if IgA deficient)', 'Duodenal biopsies (gold standard: villous atrophy, crypt hyperplasia, intraepithelial lymphocytosis)', 'HLA-DQ2/DQ8 (high negative predictive value)'],
    'Strict lifelong gluten-free diet (GFD) is the only proven treatment. Avoid wheat, barley, rye, and cross-contaminated oats. Nutritional repletion (iron, calcium, vitamin D, B12, folate). Monitor with tTG-IgA and symptoms. Repeat biopsy at 1-2 years to confirm mucosal healing.',
    'Strict gluten-free diet: eliminate wheat, barley, rye. Certified gluten-free oats may be tolerated. Read all food labels carefully. Beware of hidden gluten in sauces, medications, supplements.',
    ['Iron supplementation (ferrous sulfate 325 mg daily if deficient)', 'Calcium 1000-1200 mg + Vitamin D 1000-2000 IU daily', 'Folate 1 mg daily (if deficient)', 'Dapsone 25-50 mg daily (dermatitis herpetiformis)'],
    'Refer at diagnosis for confirmation biopsy and nutritional assessment. Dietitian referral essential. Re-refer if refractory symptoms despite strict GFD (rule out refractory celiac disease).',
    ['Symptoms persist despite strict GFD > 6-12 months (refractory celiac)', 'Alarm features suggesting lymphoma (night sweats, adenopathy, rapid weight loss)', 'Severe malnutrition', 'Neurological symptoms (ataxia, neuropathy)'],
    'A gluten-free diet works — most people feel significantly better within weeks, and the intestine typically heals fully within 1-2 years.',
  ),

  'small-bowel-obstruction': gi(
    'small-bowel-obstruction', 'Small Bowel Obstruction', 'Obstruccion intestinal', 'small-bowel',
    'Mechanical or functional blockage of small intestinal contents, most commonly caused by adhesions from prior surgery.',
    'Mechanical obstruction (adhesions 60%, hernias 15%, tumors 15%) causes proximal bowel dilation with fluid/gas accumulation. Increased intraluminal pressure compromises mucosal blood flow, risking ischemia, necrosis, and perforation. Closed-loop obstruction carries highest risk.',
    ['Colicky abdominal pain', 'Nausea and vomiting (bilious, early in proximal obstruction)', 'Abdominal distension', 'Obstipation (complete obstruction)', 'High-pitched tinkling bowel sounds progressing to absent sounds'],
    ['CT abdomen/pelvis with IV contrast (gold standard: transition point, cause, complications)', 'Abdominal X-ray (dilated loops, air-fluid levels, absence of distal gas)', 'CBC, BMP, lactate, lipase', 'Water-soluble contrast challenge (Gastrografin — therapeutic and diagnostic)'],
    'Initial: NPO, nasogastric decompression, aggressive IV fluids, electrolyte correction. Partial/adhesive SBO: trial of non-operative management (48-72 hr) with Gastrografin challenge. Operative intervention for complete obstruction, strangulation signs, or failure of conservative management.',
    'NPO during acute phase. Clear liquids when obstruction resolves, advancing to low-residue diet. Long-term: chew food thoroughly, avoid high-fiber indigestible foods if recurrent adhesive SBO.',
    ['Lactated Ringer IV resuscitation', 'Ondansetron 4 mg IV q6h PRN', 'Piperacillin-tazobactam 3.375 g IV q6h (if concern for ischemia/perforation)', 'Gastrografin 100 mL PO/NGT (contrast challenge)'],
    'Emergency department evaluation for all suspected SBO. Surgical consultation mandatory.',
    ['Fever with peritoneal signs (strangulation)', 'Hemodynamic instability', 'Lactic acidosis', 'Pneumoperitoneum on imaging (perforation)', 'Non-reducible hernia with obstruction'],
    'If you have had abdominal surgery and develop crampy pain with vomiting and inability to pass gas, seek emergency care promptly.',
  ),

  // =========================================================================
  // COLORECTAL (4)
  // =========================================================================

  'crohns-disease': gi(
    'crohns-disease', "Crohn's Disease", 'Enfermedad de Crohn', 'colorectal',
    'Chronic transmural inflammatory bowel disease that can affect any part of the GI tract from mouth to anus, with skip lesions and potential complications including strictures, fistulas, and abscesses.',
    'Dysregulated immune response to gut microbiota in genetically susceptible individuals (NOD2/CARD15 mutations). Th1/Th17-mediated transmural inflammation causes granuloma formation, fibrosis, and fistulizing complications. TNF-alpha plays a central role.',
    ['Chronic diarrhea (often non-bloody)', 'Abdominal pain (RLQ common with ileal disease)', 'Weight loss and malnutrition', 'Fatigue', 'Perianal disease (fistulas, abscesses, skin tags)', 'Extraintestinal: arthritis, uveitis, erythema nodosum'],
    ['Ileocolonoscopy with biopsies (cobblestoning, skip lesions, granulomas)', 'MR enterography (small bowel assessment)', 'CRP, ESR, fecal calprotectin', 'CBC (anemia), albumin (nutrition), iron studies', 'CT abdomen/pelvis if acute complication suspected', 'Rule out infections (C. difficile, TB before biologics)'],
    'Induction: corticosteroids (moderate-severe flare) or biologics (anti-TNF, vedolizumab, ustekinumab). Maintenance: early biologic therapy for moderate-severe disease (top-down approach). Immunomodulators (azathioprine, methotrexate) as mono or combo. Surgery for complications (strictures, abscesses, refractory disease). Treat to target: clinical remission + endoscopic healing.',
    'No universal diet; personalized approach. Avoid trigger foods during flares. Low-residue diet during stricturing disease. Exclusive enteral nutrition effective for pediatric induction. Consider Mediterranean or specific carbohydrate diet in remission.',
    ['Infliximab 5 mg/kg IV (induction wk 0, 2, 6; maintenance q8wk)', 'Adalimumab 160 mg SC then 80 mg wk 2, then 40 mg q2wk', 'Ustekinumab 6 mg/kg IV then 90 mg SC q8wk', 'Vedolizumab 300 mg IV wk 0, 2, 6 then q8wk', 'Azathioprine 2-2.5 mg/kg/day', 'Prednisone 40 mg taper (flare only)'],
    "Refer at diagnosis. Multidisciplinary care with GI, surgery, nutrition. Urgent referral for suspected abscess, high-output fistula, or bowel obstruction.",
    ['Severe abdominal pain with fever (abscess/perforation)', 'High-output fistula', 'Bowel obstruction symptoms', 'Severe perianal disease', 'Failure of biologic therapy'],
    "Crohn's is manageable with modern biologics — starting effective treatment early gives the best chance of preventing complications.",
  ),

  'ulcerative-colitis': gi(
    'ulcerative-colitis', 'Ulcerative Colitis', 'Colitis ulcerosa', 'colorectal',
    'Chronic inflammatory bowel disease characterized by continuous mucosal inflammation of the colon extending proximally from the rectum.',
    'Dysregulated mucosal immune response with Th2 predominance causing superficial mucosal/submucosal inflammation. Defective epithelial barrier function allows luminal antigens to trigger inflammatory cascade. Continuous inflammation (no skip lesions) distinguishes from Crohn.',
    ['Bloody diarrhea (hallmark)', 'Urgency and tenesmus', 'Abdominal cramping (LLQ)', 'Mucus in stool', 'Extraintestinal manifestations: PSC, arthritis, pyoderma gangrenosum'],
    ['Colonoscopy with biopsies (continuous inflammation, crypt abscesses, pseudopolyps)', 'Fecal calprotectin (non-invasive monitoring)', 'CRP, ESR (may be normal in mild disease)', 'Stool studies (C. difficile, culture, O&P)', 'pANCA (supportive, not diagnostic)', 'Assess disease extent: proctitis, left-sided, or pancolitis'],
    'Stratify by severity and extent. Mild-moderate proctitis/left-sided: 5-ASA (oral + topical). Moderate-severe: biologics (anti-TNF, vedolizumab, tofacitinib, upadacitinib). Acute severe UC: IV corticosteroids, rescue therapy (infliximab/cyclosporine) if no response in 3-5 days. Colectomy for refractory/fulminant disease or dysplasia. CRC surveillance starting 8 years after diagnosis.',
    'No specific diet in remission. Low-residue diet during flares. Avoid dairy if lactose intolerant. Ensure adequate calcium and vitamin D (steroid use).',
    ['Mesalamine 2.4-4.8 g/day PO + rectal (5-ASA)', 'Infliximab 5 mg/kg IV', 'Vedolizumab 300 mg IV', 'Tofacitinib 10 mg BID (induction) then 5 mg BID', 'Prednisone 40-60 mg (acute flare, taper over 8-12 wk)', 'Azathioprine 2-2.5 mg/kg/day'],
    'Refer at diagnosis for treatment stratification. Urgent referral for acute severe colitis (>6 bloody stools/day with systemic toxicity).',
    ['> 6 bloody stools/day with tachycardia or fever (acute severe UC)', 'Toxic megacolon (colonic dilation > 5.5 cm with systemic toxicity)', 'Massive hemorrhage', 'Perforation', 'Dysplasia on surveillance biopsy'],
    'Taking maintenance medication consistently — even when feeling well — is the best way to prevent flares and reduce long-term complications.',
  ),

  'colorectal-cancer-screening': gi(
    'colorectal-cancer-screening', 'Colorectal Cancer Screening', 'Tamizaje de cancer colorrectal', 'colorectal',
    'Evidence-based screening strategies for colorectal cancer prevention and early detection in average- and high-risk populations.',
    'Most CRCs arise from adenomatous polyps through the adenoma-carcinoma sequence (APC mutation, KRAS, TP53 progression over 10-15 years). Serrated pathway (BRAF mutation, CpG island methylation) accounts for 20-30%. Screening detects and removes precancerous polyps, interrupting malignant transformation.',
    ['Screening targets asymptomatic individuals', 'Polyps and early CRC are typically asymptomatic', 'Advanced CRC: change in bowel habits, rectal bleeding, iron deficiency anemia, weight loss'],
    ['Colonoscopy q10 years (gold standard, starting age 45)', 'FIT (fecal immunochemical test) annually', 'FIT-DNA (Cologuard) q3 years', 'CT colonography q5 years', 'Flexible sigmoidoscopy q5 years', 'High-risk: earlier and more frequent colonoscopy (Lynch syndrome, FAP, IBD, family history)'],
    'Average risk: begin screening at age 45 (USPSTF, ACS). Colonoscopy preferred for direct visualization and polypectomy. Stool-based tests (FIT) are acceptable alternatives. High-risk: genetic counseling and tailored protocols. Surveillance intervals based on polyp pathology (tubular adenoma <10mm: 7-10 yr; advanced adenoma: 3 yr; serrated: 3-5 yr).',
    'High-fiber diet, fruits and vegetables may reduce CRC risk. Limit red and processed meat. Limit alcohol. Maintain healthy weight. Regular physical activity reduces risk by 20-30%.',
    ['Aspirin 81-325 mg daily (CRC chemoprevention in select patients per USPSTF)', 'Bowel prep agents (see colonoscopy prep entry)'],
    'Refer for colonoscopy if positive stool-based test, family history of CRC or advanced adenoma in first-degree relative (especially < 60), hereditary cancer syndrome suspected, or IBD.',
    ['Positive FIT or FIT-DNA (requires colonoscopy)', 'Iron deficiency anemia in any male or post-menopausal female', 'Rectal bleeding with change in bowel habits', 'Family history of CRC before age 50', 'Unexplained weight loss with bowel symptoms'],
    'Colorectal cancer is one of the most preventable cancers — getting screened on time can literally save your life.',
  ),

  'diverticular-disease': gi(
    'diverticular-disease', 'Diverticular Disease', 'Enfermedad diverticular', 'colorectal',
    'Spectrum from asymptomatic diverticulosis to complicated diverticulitis with abscess, perforation, or fistula formation.',
    'Low-fiber diet and age-related colonic wall weakening lead to herniation of mucosa/submucosa through muscular layer at vasa recta penetration sites. Fecalith obstruction of a diverticulum causes microperforation, localized inflammation (diverticulitis), and potential abscess/perforation.',
    ['Diverticulosis: usually asymptomatic', 'Acute diverticulitis: LLQ pain, fever, leukocytosis', 'Altered bowel habits', 'Diverticular bleeding: painless, large-volume hematochezia (arterial)'],
    ['CT abdomen/pelvis with IV contrast (gold standard for acute diverticulitis)', 'Hinchey classification for complicated disease', 'CBC, CRP', 'Colonoscopy 6-8 weeks after acute episode (rule out malignancy)', 'CT angiography or colonoscopy for diverticular bleeding'],
    'Uncomplicated diverticulitis: outpatient management with clear liquids advancing diet (antibiotics only if systemic signs, immunosuppressed, or comorbidities per AGA guidelines). Complicated (abscess > 3 cm): percutaneous drainage + antibiotics. Free perforation: emergent surgery. Elective sigmoid colectomy for recurrent complicated disease or fistula.',
    'High-fiber diet (25-35 g/day) for diverticulosis prevention and after recovery. No evidence to avoid nuts, seeds, or popcorn. Adequate hydration.',
    ['Amoxicillin-clavulanate 875/125 mg BID x 7-10 days (outpatient)', 'Ciprofloxacin 500 mg BID + metronidazole 500 mg TID (alternative)', 'Piperacillin-tazobactam 3.375 g IV q6h (inpatient)', 'Acetaminophen for pain (avoid NSAIDs)'],
    'Refer for complicated diverticulitis (abscess, fistula, stricture), recurrent episodes, or immunosuppressed patients. Colonoscopy referral after recovery.',
    ['Free air on imaging (perforation)', 'Sepsis', 'Peritonitis (diffuse abdominal tenderness, rigidity)', 'Large-volume hematochezia with hemodynamic instability', 'Failure to improve with antibiotics in 48-72 hours'],
    'A high-fiber diet is the best way to keep diverticulosis from causing problems — aim for 25-35 grams per day with plenty of water.',
  ),

  // =========================================================================
  // FUNCTIONAL (3)
  // =========================================================================

  'ibs-management': gi(
    'ibs-management', 'IBS Management', 'Manejo del SII', 'functional',
    'Irritable bowel syndrome is a disorder of gut-brain interaction characterized by recurrent abdominal pain associated with defecation or change in bowel habits.',
    'Visceral hypersensitivity, altered gut motility, disrupted gut-brain axis signaling, intestinal dysbiosis, post-infectious immune activation, and psychosocial factors converge to produce symptoms. Peripheral and central sensitization amplify pain perception.',
    ['Recurrent abdominal pain (at least 1 day/week for 3 months)', 'Related to defecation', 'Associated with change in stool frequency or form', 'Bloating and distension', 'Subtypes: IBS-C, IBS-D, IBS-M, IBS-U'],
    ['Rome IV criteria (clinical diagnosis)', 'Limited labs: CBC, CRP, celiac serology (tTG-IgA)', 'Fecal calprotectin (excludes IBD)', 'Colonoscopy only if alarm features or age-appropriate screening', 'Stool studies if IBS-D (bile acid malabsorption, microscopic colitis)'],
    'Multimodal approach: dietary modification (low-FODMAP diet trial x 4-6 weeks with dietitian guidance, then reintroduction), soluble fiber supplementation, pharmacotherapy targeted to predominant symptom (IBS-D: loperamide, eluxadoline, rifaximin; IBS-C: linaclotide, lubiprostone, PEG). Gut-directed psychotherapy (CBT, hypnotherapy). Regular exercise.',
    'Low-FODMAP diet under dietitian supervision (elimination then structured reintroduction). Soluble fiber (psyllium 5-10 g/day). Regular meals, adequate hydration. Limit caffeine, alcohol, fatty foods, and artificial sweeteners.',
    ['Psyllium 5-10 g daily (soluble fiber)', 'Linaclotide 290 mcg daily (IBS-C)', 'Lubiprostone 8 mcg BID (IBS-C)', 'Loperamide 2-4 mg PRN (IBS-D)', 'Rifaximin 550 mg TID x 14 days (IBS-D with bloating)', 'Eluxadoline 100 mg BID (IBS-D)', 'Amitriptyline 10-25 mg QHS (pain-predominant)'],
    'Refer if diagnosis uncertain, alarm features present, refractory symptoms despite first-line therapy, or significant psychological comorbidity requiring integrated care.',
    ['Unintentional weight loss', 'Rectal bleeding', 'Nocturnal symptoms waking from sleep', 'Family history of CRC, IBD, or celiac disease', 'Onset after age 50', 'Progressive symptom escalation'],
    'IBS is real and manageable — finding the right combination of diet, stress management, and medication takes time but makes a real difference.',
  ),

  'functional-dyspepsia': gi(
    'functional-dyspepsia', 'Functional Dyspepsia', 'Dispepsia funcional', 'functional',
    'Chronic upper abdominal symptoms (epigastric pain, early satiety, postprandial fullness) without structural cause, classified as postprandial distress syndrome or epigastric pain syndrome.',
    'Impaired gastric accommodation, visceral hypersensitivity, delayed gastric emptying (in a subset), duodenal eosinophilia/low-grade inflammation, and altered central processing. H. pylori may contribute in some patients. Gut-brain axis dysfunction is central.',
    ['Postprandial fullness (PDS subtype)', 'Early satiety', 'Epigastric pain or burning (EPS subtype)', 'Nausea', 'Bloating', 'Overlap with GERD and IBS common'],
    ['Rome IV criteria for diagnosis', 'Upper endoscopy (to exclude organic cause — recommended if alarm features, age > 60, or non-responder)', 'H. pylori testing (test-and-treat strategy)', 'Basic labs: CBC, CMP, lipase'],
    'Step 1: H. pylori test and treat. Step 2: PPI trial x 4-8 weeks. Step 3: Tricyclic antidepressant (amitriptyline 10-25 mg QHS). Step 4: Prokinetics (for PDS subtype). Consider gut-directed psychotherapy (CBT, hypnotherapy). Buspirone for impaired accommodation.',
    'Eat smaller, more frequent meals. Low-fat diet. Avoid trigger foods (often fatty/spicy). Eat slowly and chew thoroughly. Avoid lying down after meals.',
    ['Omeprazole 20 mg daily x 4-8 wk', 'Amitriptyline 10-25 mg QHS', 'Buspirone 10 mg TID (fundic relaxation)', 'Metoclopramide 5-10 mg AC (short-term PDS)', 'Mirtazapine 7.5-15 mg QHS (weight loss, nausea-predominant)'],
    'Refer if refractory to PPI + TCA, weight loss, or diagnostic uncertainty.',
    ['Unintentional weight loss > 5%', 'Progressive dysphagia', 'Persistent vomiting', 'GI bleeding', 'Palpable abdominal mass', 'New symptoms after age 60'],
    'Functional dyspepsia is a real condition — it is not "just stress." Effective treatments exist, and working with your doctor to find the right approach is worthwhile.',
  ),

  'chronic-constipation': gi(
    'chronic-constipation', 'Chronic Constipation', 'Estrenimiento cronico', 'functional',
    'Persistent difficulty with defecation including infrequent stools, hard stools, straining, or sensation of incomplete evacuation, lasting 3+ months.',
    'Normal-transit (most common): altered stool consistency or rectal sensitivity. Slow-transit: impaired colonic motility from reduced ICC or enteric neurons. Dyssynergic defecation: paradoxical contraction or inadequate relaxation of pelvic floor muscles during evacuation.',
    ['< 3 bowel movements per week', 'Hard or lumpy stools (Bristol 1-2)', 'Straining > 25% of defecations', 'Sensation of incomplete evacuation', 'Sensation of anorectal blockage', 'Digital maneuvers to facilitate defecation'],
    ['Rome IV criteria', 'Digital rectal exam (assess for dyssynergia, masses, tone)', 'Basic labs: TSH, calcium, CBC, glucose', 'Colonoscopy if alarm features or age-appropriate screening due', 'Anorectal manometry + balloon expulsion test (if suspected dyssynergia)', 'Colonic transit study (if slow-transit suspected)'],
    'Step 1: Fiber supplementation (psyllium 25-30 g/day) + adequate fluids + exercise. Step 2: Osmotic laxative (PEG 3350). Step 3: Secretagogues (linaclotide, lubiprostone, plecanatide). Step 4: Prucalopride (prokinetic). Dyssynergic defecation: biofeedback therapy (first-line, >70% success). Avoid chronic stimulant laxative dependence.',
    'High-fiber diet (25-30 g/day from whole grains, fruits, vegetables, legumes). Adequate fluid intake (8+ glasses/day). Regular physical activity. Establish consistent toilet routine (post-meal, unhurried).',
    ['Psyllium (Metamucil) 5-10 g daily', 'PEG 3350 (MiraLAX) 17 g daily', 'Linaclotide 145 mcg daily', 'Lubiprostone 24 mcg BID', 'Prucalopride 2 mg daily', 'Bisacodyl 10 mg PRN (rescue)', 'Senna 17.2 mg QHS PRN (short-term)'],
    'Refer if refractory to osmotic laxatives + fiber, suspected dyssynergic defecation (for biofeedback), or alarm features present.',
    ['New-onset constipation after age 50', 'Rectal bleeding', 'Unintentional weight loss', 'Family history of CRC', 'Narrowing stool caliber', 'Iron deficiency anemia'],
    'Consistency matters most — taking fiber daily with plenty of water and establishing a regular bathroom routine works better than occasional laxative use.',
  ),

  // =========================================================================
  // PROCEDURAL (2)
  // =========================================================================

  'colonoscopy-prep': gi(
    'colonoscopy-prep', 'Colonoscopy Prep & Expectations', 'Preparacion y expectativas de colonoscopia', 'procedural',
    'Patient guide to colonoscopy preparation, the procedure itself, and post-procedure expectations.',
    'Colonoscopy requires a clean colon for adequate mucosal visualization. Bowel prep solutions induce osmotic diarrhea to clear colonic contents. Inadequate prep (found in up to 25% of colonoscopies) reduces adenoma detection rate and may require repeat procedure.',
    ['Procedure indication determines urgency (screening, surveillance, diagnostic, therapeutic)', 'Sedation options: moderate sedation (midazolam + fentanyl) or propofol (monitored anesthesia care)', 'Procedure duration: 15-45 minutes typically'],
    ['Pre-procedure: CBC, INR if indicated', 'Anesthesia evaluation if high-risk', 'Review medications for adjustment (anticoagulants, antiplatelets, diabetes medications)', 'Assess prep quality: Boston Bowel Preparation Scale'],
    'Split-dose prep is standard of care (better cleanliness, tolerability). Low-volume preps (MiraLAX + Gatorade or sutab) improve compliance. Day before: clear liquid diet. Morning of second dose: complete 4-5 hours before procedure. Post-procedure: monitor in recovery 30-60 min, arrange ride home, resume diet as directed.',
    'Day before: clear liquids only (water, broth, clear juices without pulp, popsicles, Jell-O — avoid red/purple colors). Avoid seeds, nuts, popcorn 3 days before (per some providers). Resume normal diet after procedure unless otherwise instructed.',
    ['PEG 3350 (MiraLAX) 238 g + 64 oz Gatorade — split dose', 'PEG-ELS (GoLYTELY) 4 L — split dose', 'Sodium sulfate tablets (SUTAB) — split dose', 'Midazolam 2-5 mg IV + Fentanyl 50-100 mcg IV (moderate sedation)', 'Propofol (MAC sedation)'],
    'Refer for colonoscopy per screening guidelines (age 45+ average risk), positive stool-based test, symptoms warranting evaluation, or surveillance intervals.',
    ['Chest pain or severe abdominal pain post-procedure (perforation)', 'Significant rectal bleeding post-polypectomy', 'Fever after procedure', 'Signs of dehydration during prep (dizziness, minimal urine output)'],
    'The prep is the hardest part — splitting the dose (half the night before, half the morning of) makes it much more tolerable and gives better results.',
  ),

  'upper-endoscopy-guide': gi(
    'upper-endoscopy-guide', 'Upper Endoscopy (EGD) Guide', 'Guia de endoscopia superior (EGD)', 'procedural',
    'Patient and provider guide to esophagogastroduodenoscopy (EGD) — indications, preparation, procedure, and recovery.',
    'EGD allows direct visualization of the esophageal, gastric, and duodenal mucosa using a flexible endoscope. It enables tissue sampling (biopsy), therapeutic interventions (dilation, hemostasis, foreign body removal), and surveillance of pre-malignant conditions.',
    ['Common indications: dysphagia, refractory GERD, upper GI bleeding, iron deficiency anemia, celiac disease evaluation, Barrett surveillance', 'Procedure time: 5-15 minutes typically', 'Sedation: topical throat spray + IV moderate sedation or MAC'],
    ['Pre-procedure: review medications (hold anticoagulants per guidelines)', 'NPO 6-8 hours for solids, 2 hours for clear liquids', 'Informed consent: discuss risks (perforation <0.03%, bleeding 0.1%, aspiration)', 'Anesthesia evaluation for high-risk patients'],
    'Patient positioned in left lateral decubitus. Bite block placed. Scope advanced under direct visualization through esophagus, stomach, and into duodenum. Systematic inspection on withdrawal. Biopsies obtained as indicated (Seattle protocol for Barrett, duodenal for celiac, gastric for H. pylori). Therapeutic maneuvers as needed. Recovery 30-60 min, arrange ride home.',
    'NPO after midnight (or 6-8 hours). Sips of water with essential medications morning of procedure. Resume regular diet after procedure (start with soft foods). Mild sore throat expected for 24-48 hours.',
    ['Midazolam 2-5 mg IV', 'Fentanyl 50-100 mcg IV', 'Propofol (MAC sedation)', 'Cetacaine/benzocaine spray (topical oropharyngeal)', 'Simethicone (reduce gas during procedure)', 'Glucagon 0.5-1 mg IV (reduce motility if needed)'],
    'Refer for EGD when alarm symptoms present (dysphagia, GI bleeding, unexplained anemia), refractory GERD, celiac disease confirmation, or surveillance (Barrett, gastric intestinal metaplasia).',
    ['Post-procedure: severe chest/abdominal pain (perforation)', 'Hematemesis or melena after biopsy/intervention', 'Fever or rigors (bacteremia)', 'Difficulty breathing or swallowing post-procedure', 'Subcutaneous emphysema in neck'],
    'EGD is very safe and usually takes only 10-15 minutes — most people do not remember the procedure due to sedation and can go home the same day.',
  ),
};

// ---------------------------------------------------------------------------
// Accessor utilities
// ---------------------------------------------------------------------------

/** Retrieve a single GI entry by ID. */
export function getGIEntry(id: string): GISpecialtyEntry | undefined {
  return GI_SPECIALTY_ENTRIES[id];
}

/** Free-text search across name, summary, and clinical features. */
export function searchGIEntries(query: string): GISpecialtyEntry[] {
  const q = query.toLowerCase();
  return Object.values(GI_SPECIALTY_ENTRIES).filter((e) => {
    if (e.name.toLowerCase().includes(q)) return true;
    if (e.nameEs.toLowerCase().includes(q)) return true;
    if (e.summary.toLowerCase().includes(q)) return true;
    if (e.clinicalFeatures.some((f) => f.toLowerCase().includes(q))) return true;
    if (e.medications.some((m) => m.toLowerCase().includes(q))) return true;
    return false;
  });
}

/** Filter entries by subcategory. */
export function getGIBySubcategory(
  sub: GISpecialtyEntry['subcategory'],
): GISpecialtyEntry[] {
  return Object.values(GI_SPECIALTY_ENTRIES).filter((e) => e.subcategory === sub);
}

/** Total number of entries. */
export function getGIEntryCount(): number {
  return Object.keys(GI_SPECIALTY_ENTRIES).length;
}
