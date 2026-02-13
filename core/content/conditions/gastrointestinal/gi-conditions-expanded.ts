/**
 * GI & Hepatobiliary Conditions — Expanded Database
 *
 * 100+ gastrointestinal, hepatic, biliary, and pancreatic conditions with
 * bilingual (EN/ES) clinical summaries, ICD-11 codes, and patient education.
 *
 * Sources: OpenStax Anatomy & Physiology, Amboss (open summaries),
 * WHO ICD-11 coding tool, NIH NIDDK public-domain content.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GICategory =
  | 'esophageal'
  | 'gastric'
  | 'small-bowel'
  | 'colorectal'
  | 'hepatic'
  | 'biliary'
  | 'pancreatic'
  | 'peritoneal'
  | 'functional'
  | 'inflammatory'
  | 'neoplastic'
  | 'congenital';

export interface GIConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: GICategory;
  icd11: string;
  description: string;
  riskFactors: string[];
  pathophysiology: string;
  symptoms: string[];
  diagnostics: string[];
  treatment: string;
  lifestyle: string;
  emergencySigns: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper — mirrors cv-conditions-database.ts pattern
// ---------------------------------------------------------------------------

function gi(
  id: string, name: string, nameEs: string,
  category: GICategory, icd11: string, description: string,
  riskFactors: string[], pathophysiology: string,
  symptoms: string[], diagnostics: string[],
  treatment: string, lifestyle: string,
  emergencySigns: string[], patientExplanation: string,
): GIConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    riskFactors, pathophysiology, symptoms, diagnostics,
    treatment, lifestyle, emergencySigns, patientExplanation,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const GI_CONDITIONS_EXPANDED: Record<string, GIConditionEntry> = {

  // ==========================================================================
  //  ESOPHAGEAL (11)
  // ==========================================================================

  'gerd': gi(
    'gerd',
    'Gastroesophageal Reflux Disease (GERD)',
    'Enfermedad por Reflujo Gastroesofagico (ERGE)',
    'esophageal', 'DA22',
    'Chronic retrograde flow of gastric acid into the esophagus causing mucosal injury and symptoms such as heartburn and regurgitation.',
    ['Obesity', 'Hiatal hernia', 'Pregnancy', 'Smoking', 'Delayed gastric emptying', 'Connective tissue disorders', 'High-fat diet'],
    'Transient lower esophageal sphincter (LES) relaxations, reduced LES tone, impaired esophageal acid clearance, and defective mucosal defense allow prolonged acid contact with squamous epithelium, causing inflammation and erosion.',
    ['Heartburn (pirosis) / Acidez estomacal', 'Regurgitation / Regurgitacion', 'Dysphagia / Disfagia', 'Chronic cough / Tos cronica', 'Laryngitis / Laringitis', 'Non-cardiac chest pain / Dolor toracico no cardiaco', 'Globus sensation / Sensacion de globo'],
    ['Clinical diagnosis with empiric PPI trial', 'Upper endoscopy (EGD) for alarm symptoms', '24-hour pH-impedance monitoring (gold standard)', 'Esophageal manometry (pre-operative)', 'Barium swallow for anatomic assessment'],
    'Lifestyle modifications first-line. PPI therapy (omeprazole, pantoprazole) 8 weeks; step-down to H2-blockers for maintenance. Surgical fundoplication (Nissen) or LINX device for refractory disease.',
    'Elevate head of bed 6-8 inches, avoid meals 3 hours before bedtime, weight loss if overweight, smoking cessation, limit caffeine/alcohol/chocolate/fatty foods, small frequent meals. / Elevar cabecera 15-20 cm, evitar comidas 3 horas antes de dormir, perder peso, dejar de fumar, limitar cafeina/alcohol/chocolate/grasas.',
    ['Dysphagia that worsens progressively', 'Unintentional weight loss', 'Hematemesis or melena', 'Severe chest pain (rule out cardiac cause)', 'Odynophagia'],
    'GERD means the valve between your stomach and food pipe is weak, letting acid splash upward and cause burning. Medications reduce acid and lifestyle changes prevent episodes. / El reflujo significa que la valvula entre su estomago y esofago no cierra bien, permitiendo que el acido suba y cause ardor. Los medicamentos reducen el acido y los cambios de estilo de vida previenen episodios.',
  ),

  'barretts-esophagus': gi(
    'barretts-esophagus',
    'Barrett Esophagus',
    'Esofago de Barrett',
    'esophageal', 'DA23.0',
    'Intestinal metaplasia of the distal esophageal squamous epithelium to columnar epithelium with goblet cells; a premalignant complication of chronic GERD.',
    ['Chronic GERD (>5 years)', 'Male sex', 'White ethnicity', 'Age >50', 'Obesity (central)', 'Smoking', 'Family history of Barrett or esophageal adenocarcinoma'],
    'Chronic acid and bile exposure triggers replacement of normal stratified squamous epithelium with specialized intestinal-type columnar epithelium containing goblet cells. This metaplasia may progress through low-grade then high-grade dysplasia to adenocarcinoma.',
    ['Often asymptomatic / Frecuentemente asintomatico', 'GERD symptoms (heartburn, regurgitation)', 'Dysphagia if stricture develops / Disfagia si se desarrolla estenosis'],
    ['EGD with systematic 4-quadrant biopsies (Seattle protocol)', 'Histology confirming goblet cells (intestinal metaplasia)', 'Surveillance intervals: no dysplasia q3-5y, LGD q6-12mo, HGD requires intervention'],
    'Long-term PPI therapy. No dysplasia: surveillance endoscopy. Low-grade dysplasia: endoscopic radiofrequency ablation (RFA) or surveillance. High-grade dysplasia: RFA or endoscopic mucosal resection (EMR). Intramucosal carcinoma: EMR/ESD followed by ablation. Esophagectomy if invasive cancer.',
    'GERD lifestyle modifications, maintain healthy BMI, increase fruit and vegetable intake, limit processed and red meat, avoid tobacco. / Modificaciones de estilo de vida para ERGE, mantener peso saludable, aumentar frutas y verduras, limitar carnes procesadas y rojas, evitar tabaco.',
    ['New or worsening dysphagia', 'Unintentional weight loss', 'GI bleeding', 'Persistent chest pain'],
    'The lining of your lower food pipe has changed from years of acid exposure. Regular check-ups with a camera test (endoscopy) are important because, rarely, it can develop into cancer. Medication controls the acid. / El revestimiento de la parte baja de su esofago ha cambiado por anos de exposicion al acido. Es importante hacer revisiones regulares con endoscopia porque, en raros casos, puede convertirse en cancer.',
  ),

  'esophageal-adenocarcinoma': gi(
    'esophageal-adenocarcinoma',
    'Esophageal Adenocarcinoma',
    'Adenocarcinoma Esofagico',
    'esophageal', '2B70.0',
    'Malignancy arising from Barrett metaplasia in the distal esophagus or gastroesophageal junction; incidence rising in Western populations.',
    ['Barrett esophagus', 'Chronic GERD', 'Obesity', 'Male sex', 'White ethnicity', 'Smoking', 'High-fat diet'],
    'Progression from intestinal metaplasia through low-grade and high-grade dysplasia to invasive adenocarcinoma. Arises in distal esophagus or GEJ. Early lymphatic spread due to lack of serosa.',
    ['Progressive dysphagia (solids then liquids) / Disfagia progresiva', 'Unintentional weight loss / Perdida de peso involuntaria', 'Odynophagia / Odinofagia', 'Chest or back pain', 'Iron deficiency anemia', 'GI bleeding'],
    ['EGD with biopsy', 'CT chest/abdomen/pelvis for staging', 'EUS for T and N staging', 'PET-CT for distant metastases', 'Staging laparoscopy if locally advanced'],
    'Early (T1a): endoscopic mucosal resection. Locally advanced: neoadjuvant chemoradiation (CROSS regimen: carboplatin/paclitaxel + radiation) followed by esophagectomy. Unresectable: definitive chemoradiation. Metastatic: palliative chemotherapy, immunotherapy (nivolumab, pembrolizumab for PD-L1+), esophageal stenting for dysphagia.',
    'High-calorie high-protein diet, small frequent meals, soft/pureed consistency if dysphagia, nutritional supplementation, enteral feeding if intake inadequate, avoid alcohol and tobacco. / Dieta alta en calorias y proteinas, comidas pequenas y frecuentes, consistencia suave si hay disfagia, suplementacion nutricional.',
    ['Complete inability to swallow', 'Hematemesis', 'Severe chest pain', 'Signs of aspiration (fever, cough after eating)', 'Rapid weight loss'],
    'A cancer has developed in the lower part of your food pipe, often from long-term acid damage. Treatment depends on the stage and may include surgery, chemotherapy, and radiation. / Se ha desarrollado un cancer en la parte baja de su esofago, frecuentemente por dano cronico del acido. El tratamiento depende de la etapa y puede incluir cirugia, quimioterapia y radiacion.',
  ),

  'esophageal-squamous-cell-carcinoma': gi(
    'esophageal-squamous-cell-carcinoma',
    'Esophageal Squamous Cell Carcinoma',
    'Carcinoma Epidermoide Esofagico',
    'esophageal', '2B70.1',
    'Malignancy arising from esophageal squamous epithelium, predominantly in the upper and middle esophagus; most common esophageal cancer worldwide.',
    ['Alcohol use', 'Tobacco smoking', 'Achalasia', 'Caustic stricture', 'Plummer-Vinson syndrome', 'Hot beverages', 'Nutritional deficiencies (zinc, selenium)', 'HPV infection', 'Tylosis'],
    'Chronic mucosal irritation from alcohol, tobacco, or thermal injury causes squamous dysplasia progressing to invasive carcinoma. Arises from squamous epithelium of the proximal and mid esophagus. Spreads early to mediastinal lymph nodes.',
    ['Progressive dysphagia / Disfagia progresiva', 'Weight loss / Perdida de peso', 'Odynophagia', 'Hoarseness (recurrent laryngeal nerve invasion)', 'Cough (tracheal involvement)', 'Chest pain'],
    ['EGD with biopsy and Lugol chromoendoscopy', 'CT chest/abdomen for staging', 'EUS for local staging', 'PET-CT for metastatic workup', 'Bronchoscopy if proximal tumor (airway invasion)'],
    'Localized: neoadjuvant chemoradiation + esophagectomy or definitive chemoradiation (cisplatin/5-FU + radiation). Superficial: endoscopic resection. Advanced: palliative chemotherapy, immunotherapy (pembrolizumab), esophageal stenting.',
    'Absolute alcohol and tobacco cessation, high-calorie diet, nutritional support, avoid very hot foods and beverages. / Cesacion absoluta de alcohol y tabaco, dieta alta en calorias, soporte nutricional, evitar alimentos y bebidas muy calientes.',
    ['Complete dysphagia', 'Hematemesis', 'Respiratory distress (tracheal fistula)', 'Severe chest pain', 'Stridor'],
    'A cancer of the food pipe lining is usually related to smoking and alcohol. Treatment often combines chemotherapy, radiation, and surgery. Quitting tobacco and alcohol is essential. / Un cancer del revestimiento del esofago usualmente relacionado con tabaco y alcohol. El tratamiento combina quimioterapia, radiacion y cirugia. Dejar tabaco y alcohol es esencial.',
  ),

  'esophageal-varices': gi(
    'esophageal-varices',
    'Esophageal Varices',
    'Varices Esofagicas',
    'esophageal', 'DA23.3',
    'Dilated submucosal veins in the distal esophagus secondary to portal hypertension, most commonly from cirrhosis. Rupture causes life-threatening hemorrhage.',
    ['Cirrhosis (any etiology)', 'Portal hypertension (HVPG >10 mmHg)', 'Continued alcohol use', 'Advanced fibrosis', 'Portal vein thrombosis', 'Schistosomiasis'],
    'Portal hypertension diverts blood through portosystemic collaterals. Esophageal submucosal veins dilate under elevated pressure. Wall tension increases with variceal size; rupture occurs when wall stress exceeds tensile strength, causing massive upper GI hemorrhage.',
    ['Often asymptomatic until hemorrhage / Asintomaticos hasta la hemorragia', 'Hematemesis (bright red blood) / Hematemesis', 'Melena / Melena', 'Hypovolemic shock', 'Stigmata of chronic liver disease'],
    ['Screening EGD in all patients with cirrhosis', 'Variceal grading (small vs large)', 'Red wale marks, cherry-red spots (high rupture risk)', 'Hepatic venous pressure gradient (HVPG) >10 mmHg defines clinically significant portal HTN'],
    'Primary prophylaxis: non-selective beta-blockers (propranolol, nadolol, carvedilol) or endoscopic variceal ligation (EVL) for large varices. Acute hemorrhage: IV octreotide/terlipressin, emergent EGD with band ligation, balloon tamponade (Sengstaken-Blakemore) as bridge, TIPS for refractory bleeding. Secondary prophylaxis: combination EVL + NSBB.',
    'Absolute alcohol cessation, sodium restriction <2g/day if ascites, soft diet to avoid mechanical trauma, adequate protein unless hepatic encephalopathy. / Abstinencia total de alcohol, restriccion de sodio <2g/dia si hay ascitis, dieta blanda, proteinas adecuadas.',
    ['Hematemesis or large-volume melena', 'Signs of shock (tachycardia, hypotension)', 'Confusion (hepatic encephalopathy)', 'Syncope', 'Rapid abdominal distension'],
    'Liver disease raises pressure in your portal vein, causing swollen veins in your food pipe that can burst and bleed heavily. Medications lower the pressure, and banding procedures tie off the veins. / La enfermedad hepatica aumenta la presion en la vena porta, causando venas inflamadas en el esofago que pueden reventar y sangrar. Los medicamentos bajan la presion y los procedimientos de ligadura cierran las venas.',
  ),

  'esophageal-stricture': gi(
    'esophageal-stricture',
    'Esophageal Stricture',
    'Estenosis Esofagica',
    'esophageal', 'DA23.1',
    'Narrowing of the esophageal lumen from fibrosis, most commonly caused by chronic GERD (peptic stricture), caustic ingestion, or radiation.',
    ['Chronic GERD', 'Caustic ingestion', 'Radiation therapy', 'Eosinophilic esophagitis', 'Post-surgical anastomotic scarring', 'Pill esophagitis', 'Nasogastric tube trauma'],
    'Chronic inflammation triggers submucosal fibrosis and collagen deposition, progressively narrowing the lumen. Dysphagia typically occurs when the lumen narrows below 13 mm. Peptic strictures are smooth and symmetric; malignant strictures are irregular and shelf-like.',
    ['Progressive dysphagia to solids more than liquids', 'Food impaction / Impactacion de alimentos', 'Weight loss', 'Chest pain with eating', 'Regurgitation of undigested food'],
    ['Barium swallow (smooth tapering = benign; irregular = malignant)', 'EGD with biopsy (rule out malignancy)', 'EUS if malignant stricture suspected'],
    'Endoscopic bougie or balloon dilation (serial sessions). PPI therapy for peptic strictures. Intralesional corticosteroid injection for refractory strictures. Self-expanding metal stent for malignant strictures. Surgery for refractory benign or complex strictures.',
    'Soft or pureed foods during symptomatic periods, chew thoroughly, take small bites with liquids, avoid tough meats and crusty bread, advance diet after dilation. / Alimentos blandos o en pure, masticar bien, bocados pequenos con liquidos, evitar carnes duras y pan crujiente.',
    ['Complete inability to swallow', 'Severe chest pain after dilation (perforation)', 'Fever after dilation', 'Signs of aspiration'],
    'Scarring has narrowed your food pipe, making swallowing difficult. A stretching procedure during endoscopy can widen it, and acid medication helps prevent re-narrowing. / Cicatrices han estrechado su esofago. Un procedimiento de dilatacion durante endoscopia puede ensancharlo, y el medicamento para el acido previene que se estreche de nuevo.',
  ),

  'achalasia': gi(
    'achalasia',
    'Achalasia',
    'Acalasia',
    'esophageal', 'DA21.0',
    'Primary esophageal motility disorder characterized by impaired LES relaxation and absent peristalsis due to loss of inhibitory myenteric neurons.',
    ['Autoimmune mechanisms', 'Viral triggers (herpes, measles)', 'Chagas disease (secondary achalasia)', 'Genetic susceptibility (HLA-DQw1)'],
    'Degeneration of inhibitory ganglion cells in the myenteric (Auerbach) plexus leads to loss of nitric oxide and VIP signaling. The LES fails to relax with swallowing, and esophageal body peristalsis is absent, creating a functional obstruction. Chagas disease (T. cruzi) causes identical pathology.',
    ['Dysphagia to solids AND liquids simultaneously / Disfagia a solidos y liquidos', 'Regurgitation of undigested food / Regurgitacion', 'Chest pain / Dolor toracico', 'Weight loss / Perdida de peso', 'Nocturnal cough or aspiration / Tos nocturna'],
    ['Barium swallow: bird-beak sign, dilated esophagus', 'Esophageal high-resolution manometry (gold standard): absent peristalsis, impaired LES relaxation, elevated integrated relaxation pressure', 'EGD to exclude pseudoachalasia (GEJ malignancy)', 'Chicago Classification (types I-III)'],
    'Graded approach: pneumatic dilation (effective, repeatable), Heller myotomy with partial fundoplication (Dor/Toupet), peroral endoscopic myotomy (POEM — emerging preferred). Botulinum toxin injection for poor surgical candidates. No effective medical therapy long-term.',
    'Eat slowly and chew thoroughly, upright position during and 30 min after meals, liquid/soft foods if severe dysphagia, warm liquids may aid passage, avoid eating before bed. / Comer lento y masticar bien, posicion erguida durante y despues de comer, liquidos tibios pueden ayudar.',
    ['Inability to swallow liquids', 'Severe chest pain', 'Signs of aspiration pneumonia (fever, cough)', 'Significant rapid weight loss'],
    'The muscle at the bottom of your food pipe does not open properly, trapping food above it. A procedure can cut or stretch this muscle to restore normal swallowing. / El musculo al final de su esofago no se abre correctamente, atrapando la comida. Un procedimiento puede cortar o estirar este musculo para restaurar la deglucion.',
  ),

  'eosinophilic-esophagitis': gi(
    'eosinophilic-esophagitis',
    'Eosinophilic Esophagitis (EoE)',
    'Esofagitis Eosinofilica',
    'esophageal', 'DA22.1',
    'Chronic immune-mediated esophageal disease characterized by eosinophilic infiltration causing dysphagia and food impaction, primarily in atopic individuals.',
    ['Atopic history (asthma, eczema, allergic rhinitis)', 'Food allergies', 'Male sex', 'Caucasian ethnicity', 'Family history of EoE', 'Aeroallergen sensitization'],
    'Th2-mediated immune response to food and environmental antigens drives eosinophil recruitment to esophageal mucosa (>=15 eos/HPF). Chronic inflammation leads to subepithelial fibrosis, lamina propria remodeling, and stricture formation.',
    ['Dysphagia to solids / Disfagia a solidos', 'Food impaction / Impactacion alimentaria', 'Chest pain / Dolor toracico', 'Heartburn unresponsive to PPI / Acidez refractaria', 'Children: feeding difficulties, failure to thrive / Ninos: dificultad para comer, fallo de medro'],
    ['EGD: rings (trachealization), linear furrows, white plaques (exudates), crepe-paper mucosa', 'Biopsy: >=15 eosinophils/HPF in at least one field', 'Allergy testing (skin prick, patch testing)', 'Rule out GERD and other causes of esophageal eosinophilia'],
    'PPI trial (some respond — PPI-responsive esophageal eosinophilia). Swallowed topical corticosteroids (fluticasone MDI swallowed, budesonide oral viscous slurry). Dupilumab (FDA-approved biologic for EoE). Elimination diet (6-food or targeted). Endoscopic dilation for established strictures.',
    'Six-food elimination diet (dairy, wheat, soy, eggs, nuts, seafood) with sequential reintroduction. Work with allergist and dietitian. Avoid identified food triggers. / Dieta de eliminacion de 6 alimentos (lacteos, trigo, soya, huevos, nueces, mariscos) con reintroduccion secuencial. Trabajar con alergologo y nutricionista.',
    ['Complete food impaction (cannot swallow saliva)', 'Severe chest pain after impaction', 'Signs of perforation (fever, subcutaneous crepitus)', 'Respiratory distress'],
    'Your immune system overreacts to certain foods, causing a type of white blood cell to inflame your food pipe and make swallowing difficult. Treatment involves medication and identifying which foods trigger the reaction. / Su sistema inmunologico reacciona a ciertos alimentos, causando inflamacion en su esofago que dificulta tragar. El tratamiento incluye medicamentos e identificar los alimentos que provocan la reaccion.',
  ),

  'mallory-weiss-tear': gi(
    'mallory-weiss-tear',
    'Mallory-Weiss Tear',
    'Desgarro de Mallory-Weiss',
    'esophageal', 'DA23.2',
    'Longitudinal mucosal laceration at the gastroesophageal junction caused by forceful retching or vomiting, accounting for 5-10% of upper GI bleeds.',
    ['Forceful vomiting or retching', 'Alcohol binge', 'Bulimia nervosa', 'Severe coughing or straining', 'Hiatal hernia', 'Anticoagulant use'],
    'Sudden rise in intra-abdominal pressure during emesis transmits force to the GEJ, causing longitudinal mucosal and submucosal tears. Tears do not extend through the muscularis propria (differentiating from Boerhaave syndrome).',
    ['Hematemesis following forceful vomiting / Hematemesis despues de vomito intenso', 'Epigastric pain / Dolor epigastrico', 'Melena / Melena', 'History of preceding retching episode'],
    ['EGD (diagnostic and therapeutic — visualizes longitudinal tear at GEJ)', 'CBC and coagulation studies', 'Type and screen', 'Clinical history of preceding vomiting/retching'],
    'Majority (90%) stop bleeding spontaneously. Active bleeding: endoscopic hemostasis (epinephrine injection, electrocautery, hemoclips). PPI therapy. Antiemetics to prevent further retching. Refractory: angiographic embolization or surgery (rare).',
    'Avoid alcohol binges, treat underlying vomiting causes, small frequent meals during recovery, advance diet as tolerated. / Evitar excesos de alcohol, tratar causas de vomito, comidas pequenas durante recuperacion.',
    ['Ongoing hematemesis', 'Signs of hypovolemic shock (tachycardia, hypotension, lightheadedness)', 'Severe chest or abdominal pain (concern for Boerhaave)'],
    'Forceful vomiting caused a small tear where your food pipe meets your stomach. Most tears heal on their own within a few days without surgery. / El vomito intenso causo un pequeno desgarro donde el esofago se une con el estomago. La mayoria de los desgarros sanan solos en pocos dias.',
  ),

  'boerhaave-syndrome': gi(
    'boerhaave-syndrome',
    'Boerhaave Syndrome (Esophageal Perforation)',
    'Sindrome de Boerhaave (Perforacion Esofagica)',
    'esophageal', 'DA24',
    'Transmural esophageal perforation (rupture) from sudden rise in intraluminal pressure, typically during forceful vomiting. A surgical emergency with high mortality.',
    ['Forceful vomiting (most common)', 'Alcohol excess', 'Heavy meals preceding emesis', 'Iatrogenic (endoscopic procedures)', 'Foreign body ingestion', 'Straining'],
    'Sudden extreme rise in intraesophageal pressure against a closed cricopharyngeus causes full-thickness perforation, usually of the left posterolateral distal esophagus. Gastric contents contaminate the mediastinum and pleural space, causing chemical and then bacterial mediastinitis.',
    ['Mackler triad: vomiting, chest pain, subcutaneous emphysema', 'Severe retrosternal or epigastric pain after vomiting / Dolor severo retroesternal', 'Dyspnea / Disnea', 'Fever / Fiebre', 'Hamman sign (mediastinal crunch on auscultation)', 'Rapid clinical deterioration'],
    ['Chest X-ray: pneumomediastinum, left pleural effusion, subcutaneous emphysema', 'CT chest with oral water-soluble contrast (diagnostic, localizes perforation)', 'Gastrografin then barium swallow if CT inconclusive', 'Labs: leukocytosis, elevated CRP/lactate'],
    'Surgical emergency. Primary repair with drainage (within 24 hours ideal). Esophageal stenting for contained perforations. Broad-spectrum antibiotics and antifungals. NPO with parenteral nutrition. Chest tube for pleural contamination. Esophageal diversion/exclusion for late or extensive perforations.',
    'NPO during acute management, prolonged recovery with gradual dietary advancement under surgical team guidance. / Nada por boca durante manejo agudo, recuperacion prolongada con avance dietetico gradual.',
    ['Severe chest pain after vomiting — seek immediate emergency care', 'Rapid breathing or respiratory distress', 'Fever with chest pain', 'Subcutaneous crepitus in neck/chest', 'Signs of sepsis'],
    'A full-thickness tear in the food pipe after violent vomiting is a surgical emergency. Stomach contents leak into the chest causing severe infection. Immediate surgery is usually required. / Un desgarro completo del esofago despues de vomito violento es una emergencia quirurgica. El contenido del estomago se filtra al pecho causando infeccion severa. Generalmente se requiere cirugia inmediata.',
  ),

  'zenkers-diverticulum': gi(
    'zenkers-diverticulum',
    'Zenker Diverticulum',
    'Diverticulo de Zenker',
    'esophageal', 'DA20.0',
    'Posterior pharyngeal pouch (false diverticulum) herniating through Killian triangle between the thyropharyngeus and cricopharyngeus muscles.',
    ['Age >60', 'Male sex', 'Cricopharyngeal dysfunction', 'GERD', 'Upper esophageal sphincter incoordination'],
    'Increased pharyngeal pressure during swallowing against a non-relaxing or spastic cricopharyngeus causes mucosal and submucosal herniation through the weak posterior area (Killian dehiscence). It is a pulsion-type false diverticulum (lacks muscularis propria).',
    ['Dysphagia / Disfagia', 'Regurgitation of undigested food hours after eating', 'Halitosis / Halitosis', 'Gurgling in throat', 'Nocturnal aspiration and cough', 'Neck mass that gurgles with palpation'],
    ['Barium swallow (diagnostic — shows posterior outpouching)', 'EGD with caution (risk of perforation into diverticulum)', 'Modified barium swallow for aspiration assessment'],
    'Surgical: cricopharyngeal myotomy with diverticulectomy or diverticulopexy. Endoscopic: Zenker diverticulotomy (stapler-assisted or flexible endoscopic) — less invasive, shorter recovery. Observation for small asymptomatic diverticula.',
    'Eat in upright position, chew thoroughly, tilt head to apply pressure to diverticulum during swallowing, soft diet if symptomatic. / Comer en posicion erguida, masticar bien, dieta blanda si hay sintomas.',
    ['Aspiration pneumonia (recurrent fevers, cough)', 'Complete dysphagia', 'Significant weight loss', 'Neck swelling with signs of infection'],
    'A pouch has formed at the top of your food pipe where food collects, causing difficulty swallowing and bad breath. A procedure can remove or open the pouch. / Se ha formado una bolsa en la parte superior de su esofago donde se acumula comida, causando dificultad para tragar y mal aliento. Un procedimiento puede remover o abrir la bolsa.',
  ),

  'esophageal-diverticulum': gi(
    'esophageal-diverticulum',
    'Esophageal Diverticulum (Mid/Epiphrenic)',
    'Diverticulo Esofagico (Medio/Epifrenico)',
    'esophageal', 'DA20',
    'Outpouching of the esophageal wall; mid-esophageal (traction type from mediastinal inflammation) or epiphrenic (pulsion type associated with motility disorders).',
    ['Mediastinal lymphadenitis (TB, histoplasmosis — traction type)', 'Esophageal motility disorders (achalasia, DES — epiphrenic)', 'Prior esophageal surgery', 'GERD'],
    'Mid-esophageal: traction from adherent inflamed mediastinal lymph nodes pulls the esophageal wall outward (true diverticulum with all layers). Epiphrenic: elevated intraluminal pressure from distal motility disorder causes pulsion herniation near the diaphragm (false diverticulum).',
    ['Often asymptomatic / Frecuentemente asintomatico', 'Dysphagia / Disfagia', 'Regurgitation', 'Chest pain', 'Halitosis', 'Aspiration symptoms if large'],
    ['Barium swallow (primary diagnostic study)', 'Esophageal manometry (evaluate underlying motility disorder)', 'CT chest if complicated', 'EGD for mucosal assessment'],
    'Asymptomatic: observation. Symptomatic: surgical diverticulectomy with myotomy of underlying motility disorder. Epiphrenic: often combined with Heller myotomy and partial fundoplication. Mid-esophageal: address underlying cause (treat TB/histoplasmosis).',
    'Upright eating position, thorough chewing, soft diet if symptomatic, aspiration precautions. / Comer en posicion erguida, masticar bien, dieta blanda si hay sintomas.',
    ['Recurrent aspiration pneumonia', 'Perforation (fever, severe pain, sepsis)', 'Complete dysphagia'],
    'A pouch in your food pipe can collect food and cause difficulty swallowing. If it causes problems, surgery can fix it along with the underlying muscle issue. / Una bolsa en su esofago puede acumular comida y causar dificultad para tragar. Si causa problemas, la cirugia puede corregirla junto con el problema muscular subyacente.',
  ),

  // ==========================================================================
  //  GASTRIC (8)
  // ==========================================================================

  'peptic-ulcer-disease': gi(
    'peptic-ulcer-disease',
    'Peptic Ulcer Disease',
    'Enfermedad Ulcerosa Peptica',
    'gastric', 'DA43',
    'Mucosal defects in the stomach (gastric ulcer) or duodenum (duodenal ulcer) caused primarily by H. pylori infection or NSAID use.',
    ['H. pylori infection', 'NSAID use', 'Smoking', 'Alcohol', 'Physiologic stress (burns, sepsis, head injury)', 'Zollinger-Ellison syndrome', 'Corticosteroid use with NSAIDs'],
    'Disruption of the mucosal defense barrier (mucus, bicarbonate, prostaglandins, mucosal blood flow) by H. pylori virulence factors (CagA, VacA, urease) or NSAID-mediated COX-1 inhibition allows acid-peptic digestion of the mucosa and submucosa, forming discrete ulcers.',
    ['Epigastric burning/gnawing pain / Dolor epigastrico quemante', 'Gastric ulcer: pain worse with eating / Ulcera gastrica: peor al comer', 'Duodenal ulcer: pain 2-5 hrs after eating, relieved by food / Ulcera duodenal: mejora al comer', 'Nausea, bloating / Nausea, distension', 'Early satiety / Saciedad temprana', 'Nocturnal pain (duodenal)'],
    ['EGD with biopsy (gold standard — biopsy gastric ulcers to exclude malignancy)', 'H. pylori testing: urea breath test, stool antigen (non-invasive); rapid urease test, histology (invasive)', 'Hold PPIs 2 weeks, antibiotics 4 weeks before H. pylori testing', 'CBC (anemia), fecal occult blood'],
    'H. pylori eradication: bismuth quadruple therapy (PPI + bismuth + metronidazole + tetracycline x14d) or concomitant therapy (PPI + clarithromycin + amoxicillin + metronidazole). PPI therapy 4-8 weeks. Discontinue NSAIDs. Confirm eradication 4+ weeks post-treatment. Repeat EGD for gastric ulcers at 8-12 weeks.',
    'Avoid NSAIDs (use acetaminophen instead), smoking cessation, limit alcohol, regular meal schedule, manage stress, probiotics may support eradication therapy. / Evitar antiinflamatorios, dejar de fumar, limitar alcohol, horario regular de comidas, manejar estres.',
    ['Hematemesis or coffee-ground emesis', 'Melena or hematochezia', 'Sudden severe abdominal pain (perforation)', 'Dizziness/syncope from blood loss', 'Persistent vomiting (gastric outlet obstruction)'],
    'You have a sore (ulcer) in your stomach or upper intestine, usually caused by a bacterium (H. pylori) or pain medications. Antibiotics and acid-reducing medicine can heal it. / Tiene una ulcera en su estomago o intestino superior, usualmente causada por una bacteria (H. pylori) o por medicamentos. Los antibioticos y medicamentos para acido pueden curarla.',
  ),

  'acute-gastritis': gi(
    'acute-gastritis',
    'Acute Gastritis',
    'Gastritis Aguda',
    'gastric', 'DA42',
    'Acute inflammation of the gastric mucosa caused by NSAIDs, alcohol, stress, or infection, with transient mucosal injury.',
    ['NSAID use', 'Alcohol excess', 'Critical illness (stress gastritis)', 'Corrosive ingestion', 'Cocaine use', 'Radiation', 'Viral infection (CMV in immunocompromised)'],
    'Direct mucosal injury from irritants or ischemia disrupts the protective mucus-bicarbonate barrier. Neutrophilic infiltration and epithelial erosion occur rapidly. Stress gastritis involves splanchnic hypoperfusion in critically ill patients.',
    ['Epigastric pain or burning / Dolor epigastrico', 'Nausea and vomiting / Nausea y vomito', 'Anorexia / Anorexia', 'Hematemesis if erosive / Hematemesis si es erosiva', 'Abdominal tenderness'],
    ['Clinical diagnosis in mild cases', 'EGD showing erythema, erosions, or hemorrhage', 'H. pylori testing', 'CBC, BMP'],
    'Remove offending agent (NSAID, alcohol). PPI or H2-blocker therapy. Sucralfate for mucosal protection. Stress ulcer prophylaxis in ICU: IV PPI. Treat H. pylori if positive. Supportive care with IV fluids if needed.',
    'Avoid NSAIDs and alcohol, small bland meals during recovery, smoking cessation, stress management. / Evitar antiinflamatorios y alcohol, comidas blandas durante recuperacion, dejar de fumar.',
    ['Hematemesis or melena', 'Signs of hemorrhagic shock', 'Severe persistent abdominal pain', 'Inability to tolerate oral intake'],
    'Your stomach lining is inflamed, often from medications or alcohol. Removing the cause and taking acid-reducing medication lets it heal. / El revestimiento de su estomago esta inflamado, frecuentemente por medicamentos o alcohol. Eliminar la causa y tomar medicamento permite que sane.',
  ),

  'chronic-gastritis': gi(
    'chronic-gastritis',
    'Chronic Gastritis (H. pylori and Autoimmune)',
    'Gastritis Cronica (por H. pylori y Autoinmune)',
    'gastric', 'DA42.0',
    'Persistent gastric mucosal inflammation. Type B (antral): H. pylori-associated. Type A (fundal/body): autoimmune, with anti-parietal cell and anti-intrinsic factor antibodies causing pernicious anemia.',
    ['H. pylori infection (Type B)', 'Autoimmune disorders (Type A)', 'Chronic NSAID use', 'Bile reflux (post-gastrectomy)', 'Pernicious anemia family history'],
    'Type B: H. pylori colonizes antral mucosa causing chronic inflammation, potentially leading to intestinal metaplasia and gastric cancer (Correa cascade). Type A: autoantibodies destroy parietal cells in the body/fundus, causing achlorhydria, hypergastrinemia, and intrinsic factor loss leading to B12 malabsorption (pernicious anemia).',
    ['Often asymptomatic / Frecuentemente asintomatico', 'Dyspepsia, epigastric discomfort', 'Nausea / Nausea', 'Type A: macrocytic anemia (fatigue, paresthesias, glossitis)', 'Type A: neurologic deficits from B12 deficiency (subacute combined degeneration)'],
    ['EGD with biopsy (Sydney system)', 'H. pylori testing', 'Anti-parietal cell antibodies, anti-intrinsic factor antibodies (Type A)', 'Serum B12, methylmalonic acid', 'Serum gastrin (elevated in both types)', 'CBC with peripheral smear (megaloblastic anemia)'],
    'Type B: H. pylori eradication. Type A: lifelong B12 supplementation (IM or high-dose oral), iron if needed, endoscopic surveillance for dysplasia and gastric carcinoids (from hypergastrinemia). PPI for symptomatic relief.',
    'Balanced diet rich in B12 sources, avoid NSAIDs and excessive alcohol, smoking cessation. Type A: lifelong monitoring. / Dieta equilibrada rica en B12, evitar antiinflamatorios, dejar de fumar. Tipo A: monitoreo de por vida.',
    ['Severe anemia symptoms (dyspnea, chest pain, syncope)', 'Neurologic deterioration', 'GI bleeding', 'New dysphagia or weight loss'],
    'Chronic gastritis means long-term stomach inflammation. The H. pylori type is cured with antibiotics. The autoimmune type requires lifelong vitamin B12 to prevent anemia and nerve damage. / Gastritis cronica significa inflamacion prolongada del estomago. El tipo por H. pylori se cura con antibioticos. El tipo autoinmune requiere B12 de por vida.',
  ),

  'h-pylori-infection': gi(
    'h-pylori-infection',
    'Helicobacter pylori Infection',
    'Infeccion por Helicobacter pylori',
    'gastric', 'DA42.0',
    'Chronic infection of the gastric mucosa by the gram-negative microaerophilic bacterium H. pylori, affecting ~50% of the world population. Causal agent of peptic ulcers and gastric cancer.',
    ['Low socioeconomic status', 'Crowded living conditions', 'Developing countries', 'Childhood acquisition (fecal-oral, oral-oral)', 'Contaminated water', 'Lack of sanitation'],
    'H. pylori colonizes the mucus layer using urease to create an alkaline microenvironment. Virulence factors (CagA, VacA, BabA) induce epithelial injury, chronic inflammation, and immune evasion. Leads to gastritis, peptic ulcers, MALT lymphoma, and gastric adenocarcinoma.',
    ['Majority asymptomatic / Mayoria asintomatica', 'Dyspepsia / Dispepsia', 'Epigastric discomfort', 'Nausea / Nausea', 'Presentations of complications (ulcer pain, bleeding, obstruction)'],
    ['Non-invasive: urea breath test (preferred for test-of-cure), stool antigen', 'Invasive: rapid urease test (CLO test), histology, culture with susceptibility', 'Serology (IgG) — only for epidemiology (stays positive after cure)', 'Hold PPIs 2 wk and antibiotics 4 wk before testing'],
    'First-line: bismuth quadruple therapy (PPI + bismuth subsalicylate + metronidazole + tetracycline x14d) or concomitant therapy (PPI + clarithromycin + amoxicillin + metronidazole x14d). Confirm eradication 4+ weeks after completion via urea breath test or stool antigen. Salvage: rifabutin- or levofloxacin-based regimens guided by susceptibility.',
    'Probiotics (Lactobacillus, S. boulardii) may reduce side effects and improve eradication. Avoid alcohol during treatment. Hand hygiene to prevent transmission. / Probioticos pueden reducir efectos secundarios. Evitar alcohol durante tratamiento. Higiene de manos.',
    ['Hematemesis or melena (ulcer complication)', 'Severe abdominal pain (perforation)', 'Unexplained weight loss (malignancy)', 'Persistent vomiting'],
    'H. pylori is a common stomach bacterium that can cause ulcers and increase cancer risk. A course of antibiotics and acid medication clears the infection. / H. pylori es una bacteria comun del estomago que puede causar ulceras y aumentar riesgo de cancer. Un curso de antibioticos y medicamento para acido elimina la infeccion.',
  ),

  'gastric-cancer-adenocarcinoma': gi(
    'gastric-cancer-adenocarcinoma',
    'Gastric Adenocarcinoma',
    'Adenocarcinoma Gastrico',
    'neoplastic', '2B72',
    'Malignant neoplasm of the stomach; intestinal type follows the Correa cascade (H. pylori -> atrophic gastritis -> metaplasia -> dysplasia -> cancer). Diffuse type involves CDH1/E-cadherin loss.',
    ['H. pylori infection', 'Chronic atrophic gastritis', 'Intestinal metaplasia', 'Smoking', 'High-salt/smoked foods', 'Family history', 'Blood type A', 'Pernicious anemia', 'Prior gastrectomy', 'Lynch syndrome', 'CDH1 mutation (hereditary diffuse)'],
    'Intestinal type: Correa cascade. Diffuse type: loss of E-cadherin (CDH1) causes signet-ring cell infiltration and linitis plastica. Spreads via lymphatics, peritoneal seeding (Krukenberg to ovaries, Sister Mary Joseph nodule), and hematogenous routes.',
    ['Early: asymptomatic / Temprano: asintomatico', 'Epigastric pain / Dolor epigastrico', 'Weight loss / Perdida de peso', 'Early satiety / Saciedad temprana', 'Nausea/vomiting', 'Iron deficiency anemia', 'Late: Virchow node, Sister Mary Joseph nodule, Blumer shelf'],
    ['EGD with multiple biopsies (>=7)', 'CT chest/abdomen/pelvis', 'EUS for local staging', 'PET-CT', 'Staging laparoscopy', 'HER2 status, MSI testing', 'CEA, CA 19-9'],
    'Early: endoscopic submucosal dissection. Localized: perioperative FLOT chemotherapy + gastrectomy with D2 lymphadenectomy. HER2+: trastuzumab + chemo. MSI-high: immunotherapy. Advanced: palliative chemo, ramucirumab, nivolumab. CDH1 carriers: prophylactic total gastrectomy.',
    'Post-gastrectomy: small frequent meals (6-8/day), avoid dumping triggers, B12/iron/calcium/vitamin D supplementation, weight monitoring. / Post-gastrectomia: comidas pequenas y frecuentes, suplementacion vitaminica.',
    ['GI bleeding', 'Gastric outlet obstruction', 'Severe abdominal pain', 'Rapid weight loss', 'Ascites'],
    'Stomach cancer often relates to H. pylori and dietary factors. Treatment may include surgery and chemotherapy. After stomach surgery, smaller frequent meals and vitamin supplements are essential. / El cancer de estomago se relaciona con H. pylori y dieta. El tratamiento puede incluir cirugia y quimioterapia.',
  ),

  'gist': gi(
    'gist',
    'Gastrointestinal Stromal Tumor (GIST)',
    'Tumor del Estroma Gastrointestinal (GIST)',
    'neoplastic', '2B5B',
    'Most common mesenchymal tumor of the GI tract, arising from interstitial cells of Cajal. Driven by KIT or PDGFRA mutations. Stomach (60%), small bowel (30%).',
    ['KIT gain-of-function mutations (85%)', 'PDGFRA mutations (5-10%)', 'NF1', 'Carney triad', 'SDH deficiency'],
    'Gain-of-function mutations in KIT or PDGFRA receptor tyrosine kinases cause constitutive signaling activation (RAS/MAPK, PI3K/AKT), driving uncontrolled proliferation from interstitial cells of Cajal or their precursors.',
    ['Often incidental finding / Hallazgo incidental', 'GI bleeding (most common symptom)', 'Abdominal pain or mass', 'Early satiety / Saciedad temprana', 'Obstruction if large'],
    ['CT with contrast (enhancing submucosal mass)', 'EUS with FNA', 'IHC: CD117 (KIT)+, DOG1+', 'Mutational analysis', 'PET-CT for staging and response'],
    'Surgical resection (no lymphadenectomy needed). Imatinib (TKI) adjuvant for intermediate/high-risk, neoadjuvant for borderline, lifelong for metastatic. Sunitinib (2nd-line), regorafenib (3rd-line), ripretinib (4th-line). Avapritinib for PDGFRA D842V.',
    'Balanced diet, regular follow-up imaging, imatinib adherence, monitor for side effects (edema, rash, cytopenias). / Dieta balanceada, imagenes de seguimiento, adherencia a imatinib.',
    ['Acute GI hemorrhage', 'Bowel obstruction', 'Tumor rupture', 'Severe abdominal pain'],
    'A GIST is a rare tumor in the stomach or intestine wall driven by a specific gene mutation. Targeted medication (imatinib) attacks this mutation, and surgery removes the tumor. / Un GIST es un tumor raro en la pared del estomago o intestino. Un medicamento dirigido (imatinib) ataca la mutacion, y la cirugia remueve el tumor.',
  ),

  'gastroparesis': gi(
    'gastroparesis',
    'Gastroparesis',
    'Gastroparesia',
    'functional', 'DA40',
    'Delayed gastric emptying without mechanical obstruction, causing nausea, vomiting, early satiety, and bloating.',
    ['Diabetes mellitus', 'Post-surgical (vagotomy)', 'Idiopathic (most common)', 'Medications (opioids, GLP-1 agonists, anticholinergics)', 'Parkinson disease', 'Amyloidosis', 'Scleroderma'],
    'Impaired gastric motility from vagal neuropathy (diabetic autonomic neuropathy), loss of interstitial cells of Cajal, or smooth muscle dysfunction. Diabetic gastroparesis results from hyperglycemia-induced oxidative damage to vagal neurons and ICC networks.',
    ['Nausea (most common) / Nausea', 'Vomiting of undigested food / Vomito de comida no digerida', 'Early satiety / Saciedad temprana', 'Bloating / Distension', 'Epigastric pain / Dolor epigastrico', 'Weight loss / Perdida de peso', 'Erratic blood glucose in diabetics'],
    ['Gastric emptying scintigraphy (gold standard, 4-hour, >10% retention at 4h abnormal)', 'EGD to exclude obstruction', 'Wireless motility capsule (SmartPill)', 'HbA1c, TSH'],
    'Dietary modifications first-line. Prokinetics: metoclopramide (limit 12 weeks — tardive dyskinesia risk), domperidone, erythromycin (short-term). Antiemetics: ondansetron. Refractory: gastric electrical stimulation, G-POEM (pyloromyotomy), jejunostomy tube. Optimize glycemic control.',
    'Small frequent meals (6/day), low-fat low-fiber diet, well-cooked soft foods, upright 1-2 hours post-meals, liquid supplements, avoid carbonation. / Comidas pequenas y frecuentes, baja grasa y fibra, alimentos blandos, sentarse erguido despues de comer.',
    ['Intractable vomiting with dehydration', 'Inability to maintain nutrition', 'Severe hypoglycemia or hyperglycemia', 'Bezoar causing obstruction'],
    'Your stomach empties food too slowly, causing nausea and bloating. Small low-fat meals and medications that speed stomach emptying help. For diabetics, blood sugar control is key. / Su estomago vacia los alimentos muy lento. Comidas pequenas bajas en grasa y medicamentos que aceleran el vaciamiento ayudan.',
  ),

  'zollinger-ellison-syndrome': gi(
    'zollinger-ellison-syndrome',
    'Zollinger-Ellison Syndrome',
    'Sindrome de Zollinger-Ellison',
    'gastric', 'DA45',
    'Gastric acid hypersecretion caused by gastrin-secreting neuroendocrine tumor (gastrinoma), typically in the gastrinoma triangle (duodenum/pancreas).',
    ['Sporadic (75-80%)', 'MEN1 syndrome (20-25%)', 'Family history of MEN1'],
    'Gastrinoma secretes massive gastrin causing parietal cell hyperplasia and HCl hypersecretion, leading to multiple refractory or atypically located peptic ulcers. Most tumors in gastrinoma triangle. >50% malignant at diagnosis.',
    ['Severe refractory peptic ulcers / Ulceras refractarias severas', 'Multiple or jejunal ulcers', 'Diarrhea and steatorrhea / Diarrea y esteatorrea', 'GERD symptoms', 'Abdominal pain', 'Weight loss if malignant'],
    ['Fasting serum gastrin (>1000 pg/mL diagnostic)', 'Secretin stimulation test (paradoxical rise >120 pg/mL)', 'Gastric pH <2 with elevated gastrin', 'CT/MRI for localization', 'Ga-68 DOTATATE PET or OctreoScan', 'EUS', 'Screen for MEN1 (calcium, PTH, prolactin)'],
    'High-dose PPI (often 2-3x standard). Surgical resection if localized/sporadic (curative 30-40%). MEN1: surgery less curative. Metastatic: somatostatin analogs, everolimus, sunitinib. Lifelong PPI if unresectable.',
    'PPI adherence, monitor for chronic acid suppression complications (B12 deficiency, hypomagnesemia, fracture risk), calcium and vitamin D supplementation. / Adherencia a PPI, monitorear complicaciones de supresion acida cronica.',
    ['GI hemorrhage', 'Perforation', 'Severe diarrhea with dehydration', 'Signs of liver metastases'],
    'A rare tumor produces excess gastrin hormone, flooding your stomach with acid. High-dose acid-blocking medication and surgery to remove the tumor can control and potentially cure it. / Un tumor raro produce exceso de gastrina. Medicamento de alta dosis y cirugia para remover el tumor pueden controlarlo.',
  ),

  'menetrier-disease': gi(
    'menetrier-disease',
    'Menetrier Disease',
    'Enfermedad de Menetrier',
    'gastric', 'DA44.1',
    'Rare hypertrophic gastropathy with giant gastric folds, foveolar hyperplasia, and protein-losing gastropathy.',
    ['Middle-aged adults', 'Male predominance', 'CMV association (children)', 'H. pylori association'],
    'TGF-alpha overexpression activates EGFR signaling causing massive foveolar hyperplasia with glandular atrophy. Giant rugal folds, excessive mucus, reduced acid, and transmucosal protein loss result.',
    ['Epigastric pain / Dolor epigastrico', 'Nausea and vomiting', 'Weight loss / Perdida de peso', 'Peripheral edema from hypoalbuminemia / Edema periferico', 'Diarrhea'],
    ['EGD: giant rugal folds in body/fundus', 'Full-thickness biopsy (foveolar hyperplasia, glandular atrophy)', 'Serum albumin (low)', 'Gastric pH (elevated)', 'CT to exclude infiltrative malignancy'],
    'Cetuximab (anti-EGFR). High-protein diet. H. pylori eradication if positive. Octreotide for symptoms. Gastrectomy for refractory or malignant transformation.',
    'High-protein diet, monitor albumin, regular endoscopic surveillance for cancer risk. / Dieta alta en proteinas, monitorear albumina, vigilancia endoscopica.',
    ['Severe edema (anasarca)', 'Thromboembolism', 'Signs of gastric malignancy', 'Severe malnutrition'],
    'A rare condition thickens your stomach lining, leaking protein and causing swelling. Targeted medication and high-protein diet help. / Una condicion rara engrosa el revestimiento del estomago, perdiendo proteinas y causando hinchazon. Medicamento dirigido y dieta alta en proteinas ayudan.',
  ),

  // ==========================================================================
  //  SMALL BOWEL (14)
  // ==========================================================================

  'celiac-disease': gi(
    'celiac-disease',
    'Celiac Disease',
    'Enfermedad Celiaca',
    'small-bowel', 'DA95.0',
    'Immune-mediated enteropathy triggered by dietary gluten (wheat, barley, rye) in genetically susceptible individuals (HLA-DQ2/DQ8), causing villous atrophy and malabsorption.',
    ['HLA-DQ2 (95%) or HLA-DQ8', 'Family history (10% first-degree relatives)', 'Type 1 diabetes', 'Autoimmune thyroiditis', 'Down syndrome', 'Turner syndrome', 'IgA deficiency'],
    'Gluten-derived gliadin peptides are deamidated by tissue transglutaminase (tTG) in the lamina propria, presented by HLA-DQ2/DQ8 on APCs to CD4+ T cells. The adaptive immune response causes crypt hyperplasia, villous atrophy, and intraepithelial lymphocytosis, leading to malabsorption.',
    ['Diarrhea and steatorrhea / Diarrea y esteatorrea', 'Bloating, flatulence / Distension, flatulencia', 'Weight loss / Perdida de peso', 'Iron deficiency anemia (may be sole presentation)', 'Fatigue / Fatiga', 'Dermatitis herpetiformis (pruritic papulovesicular rash on extensor surfaces)', 'Children: failure to thrive, short stature', 'Osteoporosis', 'Neurologic: peripheral neuropathy, ataxia'],
    ['Serology (while on gluten-containing diet): IgA anti-tTG (most sensitive), IgA anti-endomysial antibody (most specific)', 'Total serum IgA (rule out IgA deficiency — use IgG-based tests)', 'EGD with duodenal biopsies (>=4 from D2, 1-2 from bulb): Marsh classification (intraepithelial lymphocytosis -> crypt hyperplasia -> villous atrophy)', 'HLA-DQ2/DQ8 testing (high negative predictive value)', 'Response to gluten-free diet confirms diagnosis'],
    'Strict lifelong gluten-free diet (GFD) — eliminate wheat, barley, rye, and cross-contaminated oats. Nutritional repletion: iron, folate, calcium, vitamin D, B12 as needed. DEXA scan for osteoporosis. Refractory celiac: corticosteroids, azathioprine. Screen for associated conditions (thyroid, T1DM). Surveillance for complications (lymphoma, adenocarcinoma).',
    'Strict gluten-free diet, read all food labels, dedicated GF preparation surfaces, work with dietitian, celiac support groups, calcium and vitamin D supplementation, DEXA scan. / Dieta estricta libre de gluten, leer etiquetas, superficies dedicadas, trabajar con nutricionista, suplementar calcio y vitamina D.',
    ['Severe malnutrition or dehydration', 'Refractory celiac (symptoms despite strict GFD >12 months)', 'Signs of lymphoma (fever, night sweats, weight loss, abdominal mass)', 'Severe anemia', 'Neurologic deterioration'],
    'Your immune system reacts to gluten (a protein in wheat, barley, and rye), damaging your intestinal lining and preventing nutrient absorption. A strict gluten-free diet is the treatment and allows your intestine to heal. / Su sistema inmunologico reacciona al gluten, danando el revestimiento intestinal e impidiendo absorcion de nutrientes. Una dieta estricta libre de gluten permite que su intestino sane.',
  ),

  'crohn-disease': gi(
    'crohn-disease',
    'Crohn Disease',
    'Enfermedad de Crohn',
    'inflammatory', 'DD50',
    'Chronic transmural granulomatous inflammatory bowel disease that can affect any part of the GI tract (mouth to anus), most commonly the terminal ileum and colon. Characterized by skip lesions, fistulas, and strictures.',
    ['Smoking (strongest modifiable risk factor)', 'Family history (NOD2/CARD15 mutations)', 'Northern European/Ashkenazi descent', 'Age 15-35 (bimodal peak)', 'Western diet', 'NSAID use', 'Prior appendectomy (debated)'],
    'Dysregulated immune response to commensal gut microbiota in genetically susceptible individuals. NOD2 mutations impair innate immunity. Th1/Th17-mediated transmural inflammation produces non-caseating granulomas, deep ulcers (cobblestoning), and fibrosis. Skip lesions with intervening normal mucosa are characteristic.',
    ['Chronic diarrhea (often non-bloody) / Diarrea cronica', 'Abdominal pain (often RLQ — terminal ileum) / Dolor abdominal', 'Weight loss, malnutrition / Perdida de peso', 'Fatigue / Fatiga', 'Fever / Fiebre', 'Perianal disease (fissures, fistulas, abscesses)', 'Extraintestinal: arthritis, erythema nodosum, pyoderma gangrenosum, uveitis, sclerosing cholangitis, aphthous ulcers'],
    ['Ileocolonoscopy with biopsies (skip lesions, aphthous ulcers, cobblestoning, non-caseating granulomas)', 'CT/MR enterography (small bowel involvement, strictures, fistulas, abscesses)', 'Fecal calprotectin (monitor inflammation)', 'Labs: CRP, ESR, CBC (anemia), albumin, iron studies, B12, folate', 'ASCA+/pANCA- pattern supportive', 'Capsule endoscopy (small bowel evaluation if CT/MR negative)'],
    'Induction: corticosteroids (prednisone, budesonide for ileal), exclusive enteral nutrition (pediatric). Maintenance: immunomodulators (azathioprine, 6-MP, methotrexate), biologics (anti-TNF: infliximab, adalimumab; anti-integrin: vedolizumab; anti-IL12/23: ustekinumab; anti-IL23: risankizumab). Small molecule: upadacitinib. Surgery for complications (stricturoplasty, resection for refractory disease, abscess drainage). Perianal: seton placement, anti-TNF, antibiotics.',
    'Smoking cessation (most important), balanced nutrition, monitor for deficiencies (B12, iron, folate, vitamin D), limit processed foods, stress management, regular exercise, avoid NSAIDs. / Dejar de fumar, nutricion equilibrada, monitorear deficiencias, limitar alimentos procesados, manejar estres, evitar antiinflamatorios.',
    ['Severe abdominal pain with fever (abscess or perforation)', 'High-output fistula with dehydration', 'Signs of bowel obstruction (vomiting, distension, no flatus)', 'Massive GI bleeding', 'Toxic megacolon (rare in Crohn)', 'Perianal sepsis'],
    'Crohn disease is a lifelong inflammatory condition that can affect any part of your digestive tract. Medications suppress the immune overreaction, and quitting smoking is the most important lifestyle change. Flares alternate with remission periods. / La enfermedad de Crohn es una condicion inflamatoria de por vida que puede afectar cualquier parte del tracto digestivo. Los medicamentos suprimen la reaccion inmune, y dejar de fumar es el cambio mas importante.',
  ),

  'ulcerative-colitis': gi(
    'ulcerative-colitis',
    'Ulcerative Colitis',
    'Colitis Ulcerosa',
    'inflammatory', 'DD51',
    'Chronic inflammatory bowel disease limited to the colon and rectum with continuous mucosal/submucosal inflammation extending proximally from the rectum.',
    ['Family history', 'Non-smoking (protective effect of smoking — but not recommended)', 'Ashkenazi Jewish descent', 'Age 15-30 (peak)', 'Western diet', 'NSAIDs may trigger flares', 'Prior appendectomy may be protective'],
    'Dysregulated Th2-mediated mucosal immune response causes continuous superficial inflammation limited to mucosa and submucosa. Starts at the rectum and extends proximally without skip lesions. Crypt abscesses, goblet cell depletion, and pseudopolyps are characteristic.',
    ['Bloody diarrhea (hallmark) / Diarrea sanguinolenta', 'Rectal urgency and tenesmus / Urgencia rectal y tenesmo', 'Abdominal cramping / Colicos abdominales', 'Mucus in stool / Moco en heces', 'Fatigue / Fatiga', 'Weight loss in severe disease', 'Extraintestinal: arthritis, erythema nodosum, pyoderma gangrenosum, uveitis, PSC'],
    ['Colonoscopy with biopsies (continuous inflammation from rectum, erythema, friability, ulceration, pseudopolyps, crypt abscesses on histology)', 'Fecal calprotectin', 'Labs: CRP, ESR, CBC, albumin, iron studies', 'pANCA+/ASCA- pattern supportive', 'Stool studies to exclude C. difficile and other infections', 'Abdominal X-ray or CT if severe (rule out toxic megacolon)'],
    'Induction: 5-ASA (mesalamine — mild-moderate), corticosteroids (moderate-severe). Maintenance: 5-ASA (topical and/or oral), immunomodulators (azathioprine, 6-MP), biologics (infliximab, adalimumab, vedolizumab, ustekinumab), small molecules (tofacitinib, ozanimod, upadacitinib). Severe/fulminant: IV steroids, rescue therapy (infliximab or cyclosporine). Proctocolectomy with ileal pouch-anal anastomosis (IPAA) is curative.',
    'Balanced diet, identify and avoid personal trigger foods, stay hydrated during flares, stress management, regular exercise in remission, colorectal cancer surveillance colonoscopy starting 8 years after diagnosis. / Dieta equilibrada, evitar alimentos que desencadenen sintomas, mantenerse hidratado, manejar estres, vigilancia de cancer colorrectal.',
    ['Severe bloody diarrhea (>6 bloody stools/day) with systemic toxicity', 'Abdominal distension with pain (toxic megacolon)', 'Signs of perforation (rigid abdomen, fever, tachycardia)', 'Massive hemorrhage', 'High fever with severe colitis'],
    'Ulcerative colitis causes inflammation and ulcers in the lining of your colon, leading to bloody diarrhea. Medications control the inflammation, and surgery removing the colon is curative if needed. / La colitis ulcerosa causa inflamacion y ulceras en el revestimiento del colon, produciendo diarrea sanguinolenta. Los medicamentos controlan la inflamacion, y la cirugia es curativa si es necesaria.',
  ),

  'microscopic-colitis': gi(
    'microscopic-colitis',
    'Microscopic Colitis (Collagenous and Lymphocytic)',
    'Colitis Microscopica (Colagenosa y Linfocitica)',
    'inflammatory', 'DD52',
    'Chronic watery non-bloody diarrhea with grossly normal colonoscopy but characteristic microscopic findings: collagenous (thickened subepithelial collagen band) or lymphocytic (intraepithelial lymphocytosis).',
    ['Female sex (especially collagenous)', 'Age >60', 'Medications (NSAIDs, PPIs, SSRIs, checkpoint inhibitors)', 'Autoimmune diseases (celiac, thyroiditis, RA)', 'Smoking', 'Bile acid malabsorption'],
    'Collagenous: thickened subepithelial collagen band (>10 micrometers) with lymphoplasmacytic infiltrate. Lymphocytic: increased intraepithelial lymphocytes (>20/100 epithelial cells) without collagen thickening. Both involve immune-mediated mucosal inflammation with preserved mucosal architecture grossly.',
    ['Chronic watery non-bloody diarrhea / Diarrea acuosa cronica no sanguinolenta', 'Nocturnal diarrhea / Diarrea nocturna', 'Abdominal cramping / Colicos', 'Fecal urgency / Urgencia fecal', 'Weight loss / Perdida de peso', 'Fecal incontinence'],
    ['Colonoscopy: grossly normal mucosa (must biopsy to diagnose)', 'Random biopsies from right and left colon (essential)', 'Histology: collagenous (>10um collagen band) or lymphocytic (>20 IEL/100 epithelial cells)', 'Stool studies to exclude infection', 'Celiac serologies (association)', 'Fecal calprotectin (mildly elevated)'],
    'Discontinue offending medications. First-line: budesonide (excellent response rate, high relapse on withdrawal). Cholestyramine (bile acid sequestrant) for bile acid malabsorption component. Bismuth subsalicylate. Refractory: immunomodulators (azathioprine), biologics (anti-TNF). Rarely: surgery (diverting ileostomy).',
    'Discontinue offending medications (NSAIDs, PPIs if possible), smoking cessation, low-fat diet may help, avoid caffeine and lactose if triggers, stay hydrated. / Suspender medicamentos causantes, dejar de fumar, dieta baja en grasa, evitar cafeina y lactosa si son desencadenantes.',
    ['Severe dehydration from profuse diarrhea', 'Electrolyte abnormalities', 'Significant weight loss', 'Symptoms not responsive to budesonide'],
    'Microscopic colitis causes chronic watery diarrhea even though your colon looks normal on camera. Biopsies reveal inflammation visible only under a microscope. An oral steroid (budesonide) is very effective. / La colitis microscopica causa diarrea acuosa cronica aunque su colon se ve normal. Las biopsias revelan inflamacion visible solo al microscopio. Un esteroide oral (budesonida) es muy efectivo.',
  ),

  'small-bowel-obstruction': gi(
    'small-bowel-obstruction',
    'Small Bowel Obstruction (SBO)',
    'Obstruccion del Intestino Delgado',
    'small-bowel', 'DA91',
    'Mechanical blockage of the small intestine lumen preventing normal transit of intestinal contents. Most common cause in developed world: adhesions from prior surgery.',
    ['Prior abdominal surgery (adhesions — 60-75%)', 'Hernias (inguinal, incisional, internal)', 'Crohn disease (stricture)', 'Neoplasm', 'Gallstone ileus', 'Intussusception', 'Radiation enteritis', 'Foreign body'],
    'Mechanical obstruction causes proximal bowel dilation with fluid and gas accumulation. Increased intraluminal pressure impairs venous return, leading to bowel wall edema, ischemia, and potential necrosis/perforation. Closed-loop obstruction (e.g., hernia with two points of obstruction) has highest strangulation risk.',
    ['Crampy abdominal pain (colicky, periumbilical) / Dolor abdominal tipo colico', 'Nausea and vomiting (bilious — early in proximal, feculent in distal) / Nausea y vomito', 'Abdominal distension / Distension abdominal', 'Obstipation (no flatus or stool in complete) / Ausencia de gas y heces', 'High-pitched tinkling bowel sounds initially, then absent', 'Tachycardia from dehydration'],
    ['Abdominal X-ray (dilated loops, air-fluid levels, paucity of distal gas)', 'CT abdomen/pelvis with IV contrast (gold standard — identifies transition point, cause, and signs of strangulation)', 'Labs: CBC (leukocytosis with strangulation), BMP (dehydration, electrolyte abnormalities), lactate (ischemia)', 'Water-soluble contrast study (Gastrografin) — diagnostic and therapeutic for partial SBO'],
    'Initial: NPO, IV fluid resuscitation, nasogastric tube decompression, electrolyte correction, Foley catheter. Partial SBO without signs of strangulation: trial of conservative management 48-72 hours with Gastrografin challenge. Complete SBO or signs of strangulation (fever, tachycardia, peritoneal signs, elevated lactate): urgent surgical exploration. Adhesiolysis, hernia repair, or bowel resection as indicated.',
    'Post-operative: advance diet slowly (clear liquids to regular), ambulate early to prevent recurrent adhesions, small frequent meals, chew food thoroughly. / Post-operatorio: avanzar dieta lentamente, caminar pronto, comidas pequenas y frecuentes.',
    ['Increasing abdominal pain becoming constant (strangulation)', 'Fever with abdominal rigidity (perforation/necrosis)', 'Bloody stool or emesis', 'Signs of sepsis (confusion, hypotension)', 'Failure to improve with conservative management'],
    'A blockage in your small intestine prevents food from passing through, usually from scar tissue from prior surgery. Treatment starts with rest, IV fluids, and a stomach tube. Surgery is needed if the blockage does not open or the bowel is in danger. / Un bloqueo en su intestino delgado impide el paso de alimentos. El tratamiento inicia con reposo, sueros y sonda. Se necesita cirugia si no mejora.',
  ),

  'ileus': gi(
    'ileus',
    'Paralytic Ileus',
    'Ileo Paralitico',
    'small-bowel', 'DA93',
    'Functional (non-mechanical) intestinal obstruction due to impaired peristalsis without a physical blockage.',
    ['Post-operative (most common — especially abdominal surgery)', 'Electrolyte abnormalities (hypokalemia, hypomagnesemia, hypocalcemia)', 'Opioid use', 'Peritonitis', 'Sepsis', 'Spinal cord injury', 'Retroperitoneal hemorrhage', 'Mesenteric ischemia'],
    'Disruption of coordinated enteric nervous system signaling impairs peristalsis. Post-operative ileus involves sympathetic hyperactivity, local inflammatory mediators, and opioid-mediated inhibition of enteric neurotransmission. Electrolyte abnormalities impair smooth muscle contractility.',
    ['Nausea and vomiting / Nausea y vomito', 'Abdominal distension / Distension abdominal', 'Diffuse abdominal discomfort (not colicky) / Malestar abdominal difuso', 'Absent or hypoactive bowel sounds / Ruidos intestinales ausentes', 'Inability to pass flatus or stool / Incapacidad de pasar gas', 'Obstipation'],
    ['Abdominal X-ray (diffusely dilated small and large bowel without transition point)', 'CT abdomen to exclude mechanical obstruction', 'Electrolytes (K, Mg, Ca)', 'CBC, BMP, lactate', 'Clinical distinction from mechanical obstruction is critical'],
    'Treat underlying cause. Correct electrolytes (especially potassium). Minimize opioids (multimodal analgesia). NPO or clear liquids. NG tube if significant distension/vomiting. Early ambulation. Chewing gum (stimulates GI motility). Alvimopan (mu-opioid antagonist) for post-operative ileus. IV neostigmine if colonic pseudo-obstruction component.',
    'Early ambulation after surgery, chewing gum, minimize narcotic use, correct dietary potassium, adequate hydration. / Caminar pronto despues de cirugia, mascar chicle, minimizar narcoticos, corregir potasio, hidratacion adecuada.',
    ['Increasing abdominal distension with pain', 'Fever (concern for underlying infection)', 'Failure to improve after 5-7 days (consider mechanical cause)', 'Signs of bowel ischemia'],
    'After surgery or illness, your intestines temporarily stop moving, causing bloating and nausea. It usually resolves on its own with bowel rest, walking, and correcting the underlying cause. / Despues de cirugia o enfermedad, sus intestinos dejan de moverse temporalmente. Usualmente se resuelve con reposo intestinal, caminar y corregir la causa.',
  ),

  'intussusception': gi(
    'intussusception',
    'Intussusception',
    'Invaginacion Intestinal (Intususcepcion)',
    'small-bowel', 'DA91.0',
    'Telescoping of a proximal segment of bowel (intussusceptum) into an adjacent distal segment (intussuscipiens). Most common cause of intestinal obstruction in children 6-36 months.',
    ['Children: idiopathic (viral illness with lymphoid hyperplasia as lead point — 90%)', 'Meckel diverticulum', 'Polyp or tumor (lead point)', 'Adults: almost always pathologic lead point (malignancy, polyp, Meckel)', 'Henoch-Schonlein purpura', 'Celiac disease', 'Cystic fibrosis'],
    'A lead point (enlarged lymphoid tissue in children, mass in adults) is propelled distally by peristalsis, dragging the proximal bowel and its mesentery into the distal lumen. Mesenteric vessel compression causes venous congestion, edema, ischemia, and eventual necrosis if not reduced.',
    ['Children: sudden episodic colicky abdominal pain with drawing up of legs / Dolor abdominal colico episodico', 'Currant-jelly stool (blood and mucus — late sign) / Heces de jalea de grosella', 'Sausage-shaped abdominal mass (RUQ) / Masa abdominal en forma de salchicha', 'Vomiting (initially non-bilious, then bilious)', 'Lethargy between episodes / Letargia', 'Dance sign (empty RLQ)', 'Adults: intermittent obstruction symptoms'],
    ['Ultrasound: target sign or pseudokidney sign (diagnostic in children)', 'Air or barium enema (diagnostic AND therapeutic in children)', 'CT abdomen (preferred in adults — shows lead point)', 'Labs: may show leukocytosis, metabolic acidosis if ischemia'],
    'Children: pneumatic (air) or hydrostatic (saline) enema reduction under fluoroscopy or ultrasound (success 80-95%). Surgery (manual reduction or resection) if enema fails, peritonitis, or perforation. Adults: surgical exploration with resection (due to pathologic lead points — malignancy must be excluded).',
    'Post-reduction: observe for recurrence (5-10% recurrence rate), advance diet as tolerated, follow-up if recurrent episodes. / Post-reduccion: observar recurrencia, avanzar dieta segun tolerancia.',
    ['Signs of peritonitis (rigid abdomen, fever)', 'Hemodynamic instability', 'Bilious vomiting with distension', 'Failed enema reduction', 'Recurrence after reduction'],
    'A section of intestine telescopes into itself, blocking the passage and cutting off blood supply. In children, an air or water enema can push it back to normal. Surgery is needed if that does not work. / Una seccion del intestino se introduce dentro de si misma. En ninos, un enema de aire o agua puede corregirlo. Se necesita cirugia si eso no funciona.',
  ),

  'volvulus': gi(
    'volvulus',
    'Volvulus (Sigmoid and Cecal)',
    'Volvulo (Sigmoideo y Cecal)',
    'colorectal', 'DA91.1',
    'Twisting of a bowel segment around its mesenteric axis causing closed-loop obstruction and vascular compromise. Sigmoid (most common in adults) and cecal types.',
    ['Sigmoid: chronic constipation, high-fiber diet (endemic in Africa/Asia), megacolon, elderly, institutionalized/psychiatric patients, redundant sigmoid', 'Cecal: young adults, prior surgery with mobile cecum, pregnancy, marathon running'],
    'Sigmoid: long redundant sigmoid with narrow mesenteric base twists on itself, creating closed-loop obstruction with venous then arterial compromise. Cecal: mobile cecum folds on itself (axial torsion) or basculates anteriorly. Both cause bowel ischemia, necrosis, and perforation if not detorsed.',
    ['Acute abdominal pain and distension / Dolor y distension abdominal aguda', 'Obstipation / Ausencia de evacuaciones', 'Nausea and vomiting / Nausea y vomito', 'Sigmoid: gradual onset in elderly', 'Cecal: acute onset in younger patients', 'Abdominal tympany'],
    ['Abdominal X-ray: sigmoid — coffee-bean sign (bent inner tube sign), cecal — dilated cecum in LUQ', 'CT abdomen with contrast (whirl sign, identifies volvulus type and complications)', 'Water-soluble contrast enema (bird-beak sign at twist point)'],
    'Sigmoid volvulus (non-gangrenous): emergent flexible sigmoidoscopy with rectal tube decompression, followed by semi-elective sigmoid colectomy (high recurrence without resection). Gangrenous: emergent sigmoid resection (Hartmann procedure). Cecal volvulus: surgical management required (cecopexy or right hemicolectomy — endoscopic decompression rarely effective).',
    'Post-operative: advance diet slowly, high-fiber diet with adequate fluids long-term to prevent recurrence, bowel regimen to prevent constipation. / Post-operatorio: avanzar dieta lentamente, dieta alta en fibra con liquidos adecuados.',
    ['Severe persistent abdominal pain (ischemia/necrosis)', 'Fever and peritoneal signs (perforation)', 'Hemodynamic instability', 'Failed endoscopic detorsion', 'Bloody stool (gangrene)'],
    'A loop of your intestine has twisted on itself, blocking the passage and cutting off blood supply. Sigmoid volvulus can often be untwisted with a scope, but surgery is usually needed to prevent it from happening again. / Un asa de su intestino se ha torcido, bloqueando el paso y cortando el flujo de sangre. Se puede destorcer con un endoscopio, pero generalmente se necesita cirugia para prevenir recurrencia.',
  ),

  'meckel-diverticulum': gi(
    'meckel-diverticulum',
    'Meckel Diverticulum',
    'Diverticulo de Meckel',
    'congenital', 'LB12.0',
    'Most common congenital anomaly of the GI tract — a true diverticulum (contains all bowel wall layers) from persistence of the omphalomesenteric (vitelline) duct. Rule of 2s: 2% of population, 2 feet from ileocecal valve, 2 inches long, 2 types of ectopic tissue (gastric, pancreatic).',
    ['Congenital (present from birth)', 'Male sex (symptomatic complications 2-3x more common)', 'Children <2 years (most symptomatic presentations)'],
    'Failure of complete obliteration of the vitelline duct leaves a true diverticulum on the antimesenteric border of the ileum. Ectopic gastric mucosa (most common) secretes acid causing ulceration of adjacent ileal mucosa. Ectopic pancreatic tissue may also be present.',
    ['Majority asymptomatic (lifetime) / Mayoria asintomatica', 'Painless rectal bleeding in children (most common presentation — from ectopic gastric acid) / Sangrado rectal indoloro en ninos', 'Intestinal obstruction (intussusception, volvulus around band)', 'Diverticulitis (mimics appendicitis)', 'Perforation'],
    ['Technetium-99m pertechnetate scan (Meckel scan — detects ectopic gastric mucosa, 85% sensitive in children)', 'CT abdomen (may show inflamed diverticulum)', 'Angiography if active bleeding', 'Often diagnosed intraoperatively', 'Capsule endoscopy (may visualize)'],
    'Symptomatic: surgical resection (diverticulectomy or segmental ileal resection with primary anastomosis). Bleeding: resection of diverticulum and adjacent ulcerated ileum. Incidental finding at surgery: resection if broad base, palpable abnormality, or patient <40 years (controversial). Asymptomatic: observation.',
    'No specific lifestyle modifications required. Post-surgical: normal diet advancement, routine recovery. / No se requieren modificaciones de estilo de vida. Post-quirurgico: avance normal de dieta.',
    ['Massive painless rectal bleeding in a child', 'Signs of intestinal obstruction', 'Right lower quadrant pain mimicking appendicitis', 'Signs of perforation (peritonitis)'],
    'A Meckel diverticulum is a small pouch in the small intestine that you are born with. Most people never know they have it. If it causes bleeding or blockage, surgical removal is straightforward. / Un diverticulo de Meckel es una pequena bolsa en el intestino delgado de nacimiento. La mayoria nunca lo sabe. Si causa sangrado u obstruccion, la cirugia es sencilla.',
  ),

  'small-bowel-tumors': gi(
    'small-bowel-tumors',
    'Small Bowel Tumors',
    'Tumores del Intestino Delgado',
    'neoplastic', '2B6A',
    'Rare neoplasms of the small intestine accounting for <5% of GI malignancies. Most common malignant types: adenocarcinoma (duodenum), neuroendocrine (carcinoid — ileum), lymphoma, GIST.',
    ['Celiac disease (increased lymphoma and adenocarcinoma risk)', 'Crohn disease (ileal adenocarcinoma)', 'FAP/Peutz-Jeghers syndrome (duodenal adenoma/carcinoma)', 'Immunodeficiency (lymphoma)', 'Prior radiation'],
    'Adenocarcinoma: mucosal dysplasia-carcinoma sequence, most common in duodenum. Neuroendocrine (carcinoid): arises from enterochromaffin cells, produces serotonin. Lymphoma: MALT or diffuse large B-cell. GIST: from interstitial cells of Cajal.',
    ['Often nonspecific / Frecuentemente inespecificos', 'Abdominal pain / Dolor abdominal', 'GI bleeding (occult or overt)', 'Weight loss / Perdida de peso', 'Obstruction symptoms', 'Carcinoid syndrome (flushing, diarrhea, wheezing — if hepatic metastases)'],
    ['CT enterography or MR enterography', 'Capsule endoscopy (small bowel visualization)', 'Double-balloon enteroscopy (diagnostic and therapeutic)', 'EGD for duodenal tumors', 'CT/MRI for staging', 'Chromogranin A, 5-HIAA (24h urine) for carcinoid', 'PET-CT or DOTATATE PET for neuroendocrine'],
    'Adenocarcinoma: surgical resection (pancreaticoduodenectomy for periampullary), adjuvant chemotherapy. Carcinoid: surgical resection, somatostatin analogs (octreotide) for carcinoid syndrome, PRRT (Lu-177 DOTATATE) for advanced. Lymphoma: chemotherapy (R-CHOP for DLBCL). GIST: surgical resection + imatinib.',
    'Balanced diet, nutritional support, manage diarrhea if carcinoid syndrome, avoid alcohol, regular follow-up. / Dieta balanceada, soporte nutricional, manejar diarrea, evitar alcohol.',
    ['Massive GI bleeding', 'Complete bowel obstruction', 'Perforation', 'Carcinoid crisis (life-threatening flushing, bronchospasm, hemodynamic instability)'],
    'Small bowel tumors are rare but include several types. Treatment depends on the specific type and stage, often involving surgery and sometimes chemotherapy or targeted therapy. / Los tumores del intestino delgado son raros pero incluyen varios tipos. El tratamiento depende del tipo y etapa.',
  ),

  'tropical-sprue': gi(
    'tropical-sprue',
    'Tropical Sprue',
    'Esprue Tropical',
    'small-bowel', 'DA94',
    'Malabsorptive small bowel disease occurring in residents of or travelers to tropical regions, likely infectious in etiology, causing villous atrophy and megaloblastic anemia.',
    ['Residence in or travel to tropical regions (Caribbean, South Asia, Southeast Asia)', 'Prolonged stay (>1 month)', 'Poor sanitation', 'Enteric infections'],
    'Likely caused by persistent bacterial colonization (enterotoxigenic E. coli, Klebsiella) of the small bowel causing chronic inflammation, villous atrophy, and malabsorption. Folate and B12 deficiency develop from impaired terminal ileum and jejunal absorption, worsening mucosal injury in a vicious cycle.',
    ['Chronic diarrhea and steatorrhea / Diarrea cronica y esteatorrea', 'Abdominal bloating / Distension abdominal', 'Weight loss / Perdida de peso', 'Fatigue from anemia / Fatiga por anemia', 'Glossitis / Glositis', 'Megaloblastic anemia symptoms'],
    ['Clinical history (tropical exposure + malabsorption)', 'Duodenal/jejunal biopsy (partial villous atrophy, not as severe as celiac)', 'Low serum folate and B12', 'Megaloblastic anemia on CBC/smear', 'Fat malabsorption (72h fecal fat, D-xylose test)', 'Negative celiac serologies and normal tTG'],
    'Tetracycline or doxycycline for 3-6 months plus folate and B12 supplementation. Response to antibiotics confirms diagnosis. Nutritional repletion. Treatment duration may need to extend 6+ months for full mucosal recovery.',
    'Folate-rich foods, B12 supplementation, adequate nutrition during recovery, safe water and food hygiene if returning to endemic areas. / Alimentos ricos en folato, suplemento de B12, nutricion adecuada, agua segura e higiene alimentaria.',
    ['Severe anemia (dyspnea, chest pain)', 'Severe malnutrition', 'Electrolyte abnormalities', 'Failure to respond to treatment (reconsider diagnosis)'],
    'Tropical sprue is an intestinal infection from tropical regions that impairs nutrient absorption, causing diarrhea and anemia. Antibiotics and vitamin supplements cure it. / El esprue tropical es una infeccion intestinal de regiones tropicales que afecta la absorcion de nutrientes. Los antibioticos y suplementos vitaminicos lo curan.',
  ),

  'whipple-disease': gi(
    'whipple-disease',
    'Whipple Disease',
    'Enfermedad de Whipple',
    'small-bowel', 'DA96',
    'Rare chronic systemic infection caused by Tropheryma whipplei, a gram-positive actinomycete, primarily affecting the small intestine but also joints, CNS, and heart.',
    ['Middle-aged Caucasian men (classic demographic)', 'Farmers and outdoor workers (soil exposure)', 'HLA-B27 association', 'Possible immune defect in macrophage function'],
    'T. whipplei infects macrophages in the intestinal lamina propria, which accumulate but fail to destroy the bacterium. PAS-positive, diastase-resistant granules fill macrophages in the lamina propria. Villous distortion from macrophage infiltration causes malabsorption. Systemic dissemination affects joints, CNS, heart, and other organs.',
    ['Diarrhea and steatorrhea / Diarrea y esteatorrea', 'Weight loss / Perdida de peso', 'Migratory arthralgias (often precede GI symptoms by years) / Artralgias migratorias', 'Abdominal pain / Dolor abdominal', 'Cardiac: culture-negative endocarditis', 'Neurologic: dementia, ophthalmoplegia, oculomasticatory myorhythmia (pathognomonic)', 'Lymphadenopathy', 'Hyperpigmentation'],
    ['EGD with duodenal biopsy: PAS-positive, diastase-resistant macrophages in lamina propria (foamy macrophages)', 'PCR for T. whipplei (blood, stool, CSF, tissue)', 'Electron microscopy: rod-shaped bacilli in macrophages', 'CSF analysis if neurologic symptoms', 'Echocardiography if cardiac involvement', 'MRI brain for CNS disease'],
    'Induction: ceftriaxone or meropenem IV for 2 weeks. Maintenance: TMP-SMX (trimethoprim-sulfamethoxazole) orally for 1 year minimum. Alternative maintenance: doxycycline + hydroxychloroquine. Monitor for CNS relapse. Lifelong follow-up with repeat biopsies.',
    'Adequate nutrition during treatment, weight recovery monitoring, report any neurologic or cardiac symptoms promptly. / Nutricion adecuada durante tratamiento, monitorear recuperacion de peso, reportar sintomas neurologicos o cardiacos.',
    ['Neurologic deterioration (CNS Whipple)', 'Culture-negative endocarditis (cardiac involvement)', 'Severe malnutrition', 'Relapse symptoms after treatment completion'],
    'Whipple disease is a rare bacterial infection that affects your intestine and sometimes your brain, joints, or heart. Long-term antibiotics (1+ year) are needed to fully clear it. / La enfermedad de Whipple es una infeccion bacteriana rara que afecta el intestino y a veces cerebro, articulaciones o corazon. Se necesitan antibioticos a largo plazo para curarla.',
  ),

  'short-bowel-syndrome': gi(
    'short-bowel-syndrome',
    'Short Bowel Syndrome',
    'Sindrome de Intestino Corto',
    'small-bowel', 'DA90',
    'Malabsorptive condition resulting from extensive small bowel resection (<200 cm remaining) or functional loss, leading to dependence on parenteral nutrition.',
    ['Extensive surgical resection (Crohn disease, mesenteric ischemia, volvulus, NEC, trauma)', 'Multiple sequential resections', 'Congenital short bowel', 'Radiation enteritis'],
    'Loss of absorptive surface area causes malabsorption of macronutrients, fluids, electrolytes, vitamins, and minerals. Severity depends on length and location of remaining bowel, presence of ileocecal valve, and colon continuity. Jejunum absorbs most nutrients; ileum absorbs B12 and bile salts (loss causes bile salt malabsorption and steatorrhea). Intestinal adaptation (villous hyperplasia, increased crypt depth) occurs over 1-2 years.',
    ['Diarrhea and steatorrhea / Diarrea y esteatorrea', 'Dehydration / Deshidratacion', 'Weight loss and malnutrition / Perdida de peso y desnutricion', 'Electrolyte abnormalities', 'Vitamin and mineral deficiencies (B12, fat-soluble vitamins, zinc, magnesium)', 'Metabolic acidosis (D-lactic acidosis)', 'Kidney stones (oxalate)'],
    ['Clinical history of extensive resection', 'Remaining bowel length documentation', 'Nutritional labs: albumin, prealbumin, vitamins A/D/E/K/B12, folate, zinc, copper, iron', 'Electrolytes, BMP', '72-hour fecal fat', 'DEXA scan for bone density', 'Monitor renal function and oxalate levels'],
    'Phase 1 (acute): TPN, fluid/electrolyte management, PPI (gastric hypersecretion), anti-diarrheal agents (loperamide, codeine). Phase 2 (adaptation): gradual enteral feeding advancement, oral rehydration solutions. Phase 3 (maintenance): maximize enteral nutrition, GLP-2 analog (teduglutide — promotes intestinal adaptation and reduces TPN dependence). Surgical: intestinal lengthening procedures (STEP, Bianchi), intestinal transplantation for TPN failure.',
    'Oral rehydration solutions (ORS), small frequent high-calorie meals, limit simple sugars (osmotic diarrhea), avoid high-oxalate foods, separate fluids from meals, parenteral nutrition as needed, regular monitoring. / Soluciones de rehidratacion oral, comidas frecuentes altas en calorias, limitar azucares simples, evitar alimentos altos en oxalato.',
    ['Severe dehydration', 'Line sepsis (central venous catheter infection)', 'TPN-related liver disease', 'Severe electrolyte abnormalities (hypomagnesemia, metabolic acidosis)', 'Renal failure from chronic dehydration'],
    'After extensive bowel surgery, your remaining intestine cannot absorb enough nutrients and fluids. Specialized nutrition, medications, and sometimes IV feeding help your body adapt over time. / Despues de cirugia intestinal extensa, el intestino restante no absorbe suficientes nutrientes. Nutricion especializada y medicamentos ayudan a su cuerpo a adaptarse.',
  ),

  'carcinoid-syndrome': gi(
    'carcinoid-syndrome',
    'Carcinoid Syndrome',
    'Sindrome Carcinoide',
    'small-bowel', '2B6A',
    'Systemic syndrome from serotonin and other vasoactive substances secreted by metastatic neuroendocrine tumors (carcinoids), most commonly from ileal primaries with liver metastases.',
    ['Neuroendocrine tumor (usually midgut — ileum)', 'Liver metastases (hepatic metabolism normally inactivates serotonin — metastases bypass first-pass)', 'Rarely: bronchial or ovarian carcinoids (drain directly to systemic circulation)'],
    'Neuroendocrine tumor cells produce serotonin (5-HT), histamine, bradykinin, prostaglandins, and tachykinins. Normally, portal blood serotonin is metabolized by hepatic MAO. Liver metastases release serotonin directly into systemic circulation, causing flushing, diarrhea, bronchoconstriction, and right-sided cardiac fibrosis (carcinoid heart disease).',
    ['Episodic flushing (face, neck — dry, not diaphoretic) / Enrojecimiento episodico', 'Secretory diarrhea / Diarrea secretora', 'Wheezing/bronchospasm / Sibilancias', 'Right-sided heart disease (tricuspid regurgitation, pulmonary stenosis from endocardial fibrosis)', 'Pellagra-like symptoms (niacin deficiency from tryptophan diversion to serotonin)'],
    ['24-hour urine 5-HIAA (serotonin metabolite — elevated)', 'Serum chromogranin A (elevated)', 'CT/MRI for primary tumor and metastases', 'Ga-68 DOTATATE PET/CT (somatostatin receptor imaging — most sensitive)', 'Echocardiography for carcinoid heart disease', 'Avoid serotonin-rich foods before testing (bananas, avocados, walnuts)'],
    'Somatostatin analogs (octreotide LAR, lanreotide) — control symptoms and slow tumor growth. Hepatic metastases: resection if feasible, hepatic artery embolization, PRRT (Lu-177 DOTATATE). Telotristat (TPH inhibitor) for diarrhea refractory to SSA. Everolimus. Niacin supplementation. Carcinoid heart disease: valve replacement. Avoid carcinoid crisis triggers (anesthesia, biopsy — pretreat with octreotide).',
    'Avoid triggers (alcohol, strenuous exercise, certain foods), niacin supplementation, report flushing episodes, regular cardiac monitoring, medical alert bracelet for carcinoid crisis risk. / Evitar desencadenantes, suplemento de niacina, reportar episodios de enrojecimiento, monitoreo cardiaco regular.',
    ['Carcinoid crisis (severe flushing, bronchospasm, hypotension — can be fatal)', 'Severe bronchospasm', 'Refractory diarrhea with dehydration', 'Heart failure from carcinoid heart disease'],
    'Carcinoid syndrome occurs when a tumor in your intestine spreads to the liver and releases hormones causing flushing, diarrhea, and wheezing. Injections of a hormone-blocking medication control symptoms. / El sindrome carcinoide ocurre cuando un tumor intestinal se disemina al higado y libera hormonas que causan enrojecimiento, diarrea y sibilancias. Inyecciones de medicamento hormonal controlan los sintomas.',
  ),

  // ==========================================================================
  //  COLORECTAL / ANORECTAL (18)
  // ==========================================================================

  'appendicitis': gi(
    'appendicitis',
    'Acute Appendicitis',
    'Apendicitis Aguda',
    'colorectal', 'DB10',
    'Acute inflammation of the vermiform appendix, the most common surgical emergency worldwide. Peak incidence ages 10-30.',
    ['Luminal obstruction (fecalith most common, lymphoid hyperplasia, parasites)', 'Male sex', 'Age 10-30', 'Low-fiber diet (debated)', 'Family history'],
    'Luminal obstruction (fecalith, lymphoid hyperplasia) leads to increased intraluminal pressure, venous congestion, bacterial overgrowth, and transmural inflammation. If untreated, progresses to gangrene, perforation, and peritonitis.',
    ['Periumbilical pain migrating to RLQ (McBurney point) / Dolor periumbilical que migra a FID', 'Anorexia (almost always present) / Anorexia', 'Nausea and vomiting (after pain onset) / Nausea y vomito', 'Low-grade fever / Fiebre baja', 'Rovsing sign, psoas sign, obturator sign', 'Rebound tenderness / Dolor de rebote'],
    ['Clinical diagnosis (Alvarado score)', 'CT abdomen/pelvis with contrast (gold standard in adults — >98% sensitive)', 'Ultrasound (first-line in children, pregnant women)', 'MRI (pregnancy, pediatric)', 'Labs: leukocytosis with left shift, elevated CRP'],
    'Appendectomy (laparoscopic preferred). Antibiotics-first strategy for uncomplicated appendicitis (emerging evidence, not yet standard). Perforated with abscess: percutaneous drainage + antibiotics, interval appendectomy 6-8 weeks later. Peritonitis: emergent surgery.',
    'Post-operative: advance diet as tolerated, early ambulation, return to normal activities 1-2 weeks (laparoscopic). / Post-operatorio: avanzar dieta, caminar pronto, actividades normales en 1-2 semanas.',
    ['Increasing RLQ pain with high fever (perforation)', 'Rigid abdomen (peritonitis)', 'Signs of sepsis', 'Inability to walk or stand upright due to pain'],
    'Appendicitis means your appendix is inflamed and usually needs to be surgically removed. It is a common emergency surgery with an excellent outcome. / La apendicitis significa que su apendice esta inflamado y usualmente necesita ser removido quirurgicamente. Es una cirugia de emergencia comun con excelente resultado.',
  ),

  'diverticulosis': gi(
    'diverticulosis',
    'Diverticulosis',
    'Diverticulosis',
    'colorectal', 'DB31',
    'Presence of multiple false diverticula (mucosal/submucosal herniations through the muscular wall) in the colon, most commonly sigmoid. Prevalent in >50% of adults over age 60 in Western populations.',
    ['Age >50', 'Low-fiber diet', 'Obesity', 'Sedentary lifestyle', 'Smoking', 'NSAID/corticosteroid use', 'Connective tissue disorders (Marfan, Ehlers-Danlos — young patients)'],
    'Pulsion diverticula form at points of weakness where vasa recta penetrate the circular muscle layer. Low dietary fiber leads to low stool bulk, increased intraluminal pressure, and herniation. Diverticula are false (mucosa and submucosa only).',
    ['Usually asymptomatic (found incidentally) / Usualmente asintomatica', 'Mild LLQ discomfort / Malestar leve en FII', 'Bloating / Distension', 'Altered bowel habits', 'Painless rectal bleeding (diverticular hemorrhage — arterial)'],
    ['Colonoscopy (incidental finding)', 'CT colonography', 'Barium enema (largely replaced by CT)', 'CT angiography if acute diverticular bleeding'],
    'Asymptomatic: high-fiber diet, adequate hydration. Diverticular bleeding: usually self-limited (80%); persistent bleeding — colonoscopic hemostasis, angiographic embolization, or segmental colectomy for massive hemorrhage.',
    'High-fiber diet (25-35 g/day), adequate hydration, regular exercise, weight management, avoid smoking. Nuts/seeds/popcorn restriction is NOT supported by evidence. / Dieta alta en fibra, hidratacion adecuada, ejercicio regular, mantener peso, dejar de fumar.',
    ['Massive painless rectal bleeding', 'Signs of hemorrhagic shock', 'Severe persistent abdominal pain (diverticulitis)'],
    'Diverticulosis means small pouches have formed in the wall of your colon. This is very common with age and usually causes no problems. A high-fiber diet helps prevent complications. / La diverticulosis significa que se han formado pequenas bolsas en la pared de su colon. Es muy comun con la edad y usualmente no causa problemas. Una dieta alta en fibra previene complicaciones.',
  ),

  'diverticulitis': gi(
    'diverticulitis',
    'Acute Diverticulitis',
    'Diverticulitis Aguda',
    'colorectal', 'DB30',
    'Inflammation and/or microperforation of a colonic diverticulum, most commonly in the sigmoid colon. Can be uncomplicated or complicated (abscess, fistula, obstruction, perforation).',
    ['Diverticulosis', 'Age >50', 'Obesity', 'Low-fiber diet', 'Smoking', 'NSAID use', 'Sedentary lifestyle', 'Immunosuppression'],
    'Fecal material or undigested food trapped in a diverticulum causes erosion and microperforation of the thin diverticular wall. Localized inflammation and infection ensue. Complications include pericolic abscess, free perforation with peritonitis, fistula (colovesical, colovaginal), and stricture.',
    ['LLQ abdominal pain (hallmark) / Dolor en FII (signo principal)', 'Fever / Fiebre', 'Nausea / Nausea', 'Change in bowel habits (constipation or diarrhea)', 'Urinary symptoms if adjacent to bladder', 'Leukocytosis', 'Localized peritoneal signs'],
    ['CT abdomen/pelvis with contrast (gold standard — pericolic fat stranding, bowel wall thickening, abscess, free air)', 'Labs: WBC with left shift, CRP elevated', 'Avoid colonoscopy during acute episode (perforation risk)', 'Colonoscopy 6-8 weeks after resolution to exclude malignancy', 'Hinchey classification for complicated disease'],
    'Uncomplicated: oral antibiotics (ciprofloxacin + metronidazole or amoxicillin-clavulanate) + clear liquid diet advancing as tolerated. Recent evidence supports antibiotics-free management for mild uncomplicated cases. Abscess (Hinchey I-II): CT-guided percutaneous drainage + IV antibiotics. Free perforation/peritonitis (Hinchey III-IV): emergent surgery (Hartmann procedure or primary anastomosis with diverting ileostomy). Elective sigmoid colectomy after recurrent or complicated episodes.',
    'High-fiber diet after recovery, adequate hydration, regular exercise, weight management, smoking cessation, avoid NSAIDs. / Dieta alta en fibra despues de recuperacion, hidratacion, ejercicio, mantener peso, dejar de fumar, evitar antiinflamatorios.',
    ['Increasing pain with high fever (abscess or perforation)', 'Rigid abdomen (peritonitis)', 'Pneumaturia or fecaluria (colovesical fistula)', 'Signs of sepsis', 'Massive rectal bleeding'],
    'Diverticulitis means one of the small pouches in your colon has become infected and inflamed, causing pain and fever. Most cases are treated with antibiotics and bowel rest. Severe cases may need drainage or surgery. / La diverticulitis significa que una de las bolsas del colon se ha infectado e inflamado. La mayoria se trata con antibioticos y reposo intestinal. Casos severos pueden necesitar drenaje o cirugia.',
  ),

  'colorectal-cancer': gi(
    'colorectal-cancer',
    'Colorectal Cancer',
    'Cancer Colorrectal',
    'neoplastic', '2B90',
    'Third most common cancer worldwide; arises from adenomatous polyps through the adenoma-carcinoma sequence (APC -> KRAS -> p53 mutations). Screening significantly reduces mortality.',
    ['Age >45', 'Family history (first-degree relative)', 'Adenomatous polyps', 'IBD (UC > Crohn colitis)', 'Lynch syndrome (HNPCC)', 'FAP', 'Obesity', 'Red/processed meat', 'Smoking', 'Alcohol', 'Diabetes', 'Sedentary lifestyle', 'Prior pelvic radiation'],
    'Adenoma-carcinoma sequence (chromosomal instability pathway): APC tumor suppressor loss -> KRAS oncogene activation -> p53 loss -> carcinoma over 10-15 years. Microsatellite instability pathway (Lynch syndrome): mismatch repair gene deficiency. Serrated pathway: BRAF mutation -> sessile serrated lesions. Right-sided: bulky, bleeding; left-sided: annular, obstructing.',
    ['Often asymptomatic early / Asintomatico temprano', 'Right-sided: iron deficiency anemia, occult bleeding, fatigue / Derecho: anemia ferropenica', 'Left-sided: change in bowel habits, narrow stools, hematochezia / Izquierdo: cambio en habitos intestinales', 'Rectal: tenesmus, rectal bleeding / Rectal: tenesmo, sangrado', 'Weight loss, abdominal pain (advanced)', 'Obstruction or perforation (presentation in some)'],
    ['Screening: colonoscopy q10y starting age 45 (or FIT annually, Cologuard q3y)', 'Colonoscopy with biopsy (diagnostic)', 'CT chest/abdomen/pelvis for staging', 'MRI pelvis for rectal cancer', 'CEA (baseline and monitoring)', 'MSI/MMR testing, KRAS/NRAS/BRAF mutations, HER2 status', 'PET-CT if metastatic disease suspected'],
    'Polyps: endoscopic polypectomy/EMR/ESD. Stage I-III colon: surgical resection (colectomy with en-bloc lymphadenectomy, >=12 nodes). Stage III: adjuvant FOLFOX or CAPOX chemotherapy. Rectal: neoadjuvant chemoradiation (5-FU + radiation) + total mesorectal excision (TME), or total neoadjuvant therapy (TNT). Stage IV (metastatic): FOLFOX/FOLFIRI + biologics (bevacizumab, cetuximab/panitumumab for RAS-wt left-sided), immunotherapy for MSI-high (pembrolizumab), liver/lung metastasectomy if oligometastatic.',
    'High-fiber diet, increase fruits/vegetables/whole grains, limit red and processed meat, regular exercise (150 min/week), maintain healthy weight, limit alcohol, do not smoke, adherence to screening schedule. / Dieta alta en fibra, frutas/verduras/granos integrales, limitar carne roja/procesada, ejercicio regular, peso saludable, limitar alcohol, no fumar, cumplir con esquema de tamizaje.',
    ['New rectal bleeding', 'Iron deficiency anemia without clear cause', 'Bowel obstruction symptoms', 'Unexplained weight loss', 'Abdominal mass', 'Severe abdominal pain (perforation)'],
    'Colorectal cancer develops slowly from polyps over many years, which is why screening colonoscopy is so effective — polyps can be removed before they become cancer. If diagnosed, treatment depends on the stage and may include surgery, chemotherapy, and radiation. / El cancer colorrectal se desarrolla lentamente de polipos durante anos, por eso la colonoscopia de deteccion es tan efectiva. El tratamiento depende de la etapa.',
  ),

  'colonic-polyps': gi(
    'colonic-polyps',
    'Colonic Polyps',
    'Polipos Colonicos',
    'colorectal', 'DB34',
    'Mucosal growths projecting into the colonic lumen. Most important types: adenomatous (tubular, tubulovillous, villous — premalignant), sessile serrated, hyperplastic (benign).',
    ['Age >50', 'Family history of polyps or CRC', 'Obesity', 'Smoking', 'Red meat and processed food', 'Alcohol', 'Sedentary lifestyle', 'IBD'],
    'Adenomatous: APC gene inactivation leads to uncontrolled epithelial proliferation. Villous architecture has highest malignant potential. Sessile serrated: BRAF mutation-driven, right-sided, subtle flat lesions, serrated pathway to CRC. Hyperplastic: exaggerated crypt proliferation without dysplasia, no malignant potential (except large right-sided).',
    ['Usually asymptomatic (found on screening) / Usualmente asintomaticos', 'Occult or overt rectal bleeding / Sangrado rectal oculto o evidente', 'Iron deficiency anemia', 'Large villous adenoma: secretory diarrhea (rare)', 'Change in bowel habits (rare unless large)'],
    ['Colonoscopy with polypectomy (diagnostic and therapeutic)', 'Histopathology determines polyp type, grade, completeness of resection', 'Stool-based tests (FIT, Cologuard) for screening', 'Surveillance intervals based on polyp pathology (1-3 years for high-risk, 5-10 years for low-risk adenomas)'],
    'Endoscopic polypectomy (snare, EMR, ESD for large/flat lesions). Surveillance colonoscopy per guidelines (based on polyp number, size, histology, completeness). High-risk adenomas (>=10mm, villous, high-grade dysplasia, >=3 adenomas): colonoscopy in 3 years. Low-risk: 5-10 years. Surgery for polyps not amenable to endoscopic resection.',
    'High-fiber diet, regular exercise, maintain healthy weight, limit red/processed meat and alcohol, calcium and vitamin D supplementation may be protective, aspirin may reduce recurrence (discuss with doctor). / Dieta alta en fibra, ejercicio, peso saludable, limitar carne roja/procesada y alcohol.',
    ['Rectal bleeding', 'Iron deficiency anemia', 'Polyp with invasive cancer on pathology — requires surgical evaluation'],
    'Polyps are small growths in your colon that are usually harmless but some types can slowly become cancer. Removing them during colonoscopy prevents cancer. Follow-up colonoscopies ensure new ones are caught early. / Los polipos son pequenos crecimientos en su colon. Removerlos durante la colonoscopia previene cancer. Las colonoscopias de seguimiento aseguran que nuevos polipos se detecten temprano.',
  ),

  'familial-adenomatous-polyposis': gi(
    'familial-adenomatous-polyposis',
    'Familial Adenomatous Polyposis (FAP)',
    'Poliposis Adenomatosa Familiar (PAF)',
    'congenital', '2B90.Y',
    'Autosomal dominant disorder caused by germline APC gene mutation resulting in hundreds to thousands of colorectal adenomas, with near 100% lifetime CRC risk if untreated.',
    ['APC gene mutation (chromosome 5q21)', 'Family history of FAP', 'Autosomal dominant inheritance (25% de novo mutations)'],
    'Germline APC tumor suppressor mutation causes loss of beta-catenin degradation, leading to constitutive Wnt signaling and uncontrolled epithelial proliferation. Hundreds to thousands of adenomatous polyps develop in the colon by teens-20s. Without colectomy, CRC develops by age 40.',
    ['Hundreds of colorectal polyps (typically by age 15-20)', 'Rectal bleeding / Sangrado rectal', 'Diarrhea / Diarrea', 'Abdominal pain / Dolor abdominal', 'Extracolonic: congenital hypertrophy of retinal pigment epithelium (CHRPE), desmoid tumors, osteomas (Gardner syndrome), CNS tumors (Turcot syndrome), duodenal/periampullary adenomas'],
    ['Colonoscopy revealing >100 adenomatous polyps', 'Genetic testing for APC mutation (confirmatory)', 'Family screening starting age 10-12 (annual flexible sigmoidoscopy or colonoscopy)', 'Upper endoscopy for duodenal adenomas (Spigelman staging)', 'CT/MRI for desmoid tumors'],
    'Prophylactic total proctocolectomy with IPAA (ileal pouch-anal anastomosis) by late teens to early 20s. Total abdominal colectomy with ileorectal anastomosis (alternative — requires lifelong rectal stump surveillance). Celecoxib or sulindac may reduce polyp burden (adjunctive, not curative). Upper GI surveillance and management of duodenal adenomas.',
    'Genetic counseling for family members, regular surveillance of remaining GI tract, awareness of extracolonic manifestations, psychological support for young patients. / Consejeria genetica, vigilancia regular, conciencia de manifestaciones extracolonicas, apoyo psicologico.',
    ['Signs of CRC (bleeding, obstruction, weight loss)', 'Large or growing desmoid tumor', 'Duodenal cancer (periampullary)', 'Obstruction'],
    'FAP is an inherited condition causing thousands of polyps in the colon that will become cancer if not treated. Preventive surgery to remove the colon is recommended in early adulthood. Family members should be tested. / La PAF es una condicion hereditaria que causa miles de polipos en el colon. Se recomienda cirugia preventiva. Los familiares deben ser evaluados.',
  ),

  'lynch-syndrome': gi(
    'lynch-syndrome',
    'Lynch Syndrome (HNPCC)',
    'Sindrome de Lynch (CCHNP)',
    'congenital', '2B90.Y',
    'Autosomal dominant cancer predisposition syndrome caused by germline mutations in DNA mismatch repair (MMR) genes (MLH1, MSH2, MSH6, PMS2). Lifetime CRC risk 40-80%, plus increased risk of endometrial, ovarian, gastric, urologic, and other cancers.',
    ['Germline MMR gene mutation (MLH1, MSH2, MSH6, PMS2)', 'EPCAM deletion (silences MSH2)', 'Autosomal dominant inheritance', 'Family history meeting Amsterdam II or Bethesda criteria'],
    'Loss of MMR function leads to microsatellite instability (MSI-high), accumulation of frameshift mutations in coding microsatellites of tumor suppressors (TGF-beta RII, BAX, IGFIIR), and accelerated carcinogenesis. CRC tends to be right-sided, mucinous, and have prominent lymphocytic infiltration. Accelerated adenoma-carcinoma sequence (2-3 years vs 10-15 years in sporadic).',
    ['CRC at young age (<50) / Cancer colorrectal a edad temprana', 'Multiple primary cancers', 'Right-sided colon cancer', 'Family history of Lynch-associated cancers', 'Endometrial cancer (most common extracolonic — lifetime risk 40-60%)', 'May be asymptomatic until cancer develops'],
    ['Universal tumor testing: IHC for MMR proteins and/or MSI testing on all CRC specimens', 'Germline genetic testing for MMR mutations', 'Amsterdam II criteria (3-2-1 rule)', 'Revised Bethesda guidelines', 'Colonoscopy: q1-2 years starting age 20-25 (or 2-5 years before earliest family diagnosis)', 'Consider upper endoscopy, urinalysis, skin exams'],
    'Intensified surveillance: colonoscopy q1-2 years starting age 20-25. CRC: standard oncologic resection (consider subtotal colectomy vs segmental). Aspirin chemoprevention (CAPP2 trial). Gynecologic: consider prophylactic hysterectomy/BSO after childbearing. Immunotherapy: MSI-high CRC responds to checkpoint inhibitors (pembrolizumab — even as first-line in metastatic).',
    'Adherence to surveillance schedule (colonoscopy q1-2y), genetic counseling for at-risk relatives, aspirin as directed, healthy lifestyle to reduce baseline cancer risk. / Adherencia a vigilancia, consejeria genetica para familiares, aspirina segun indicacion.',
    ['Any new rectal bleeding or change in bowel habits', 'Abnormal uterine bleeding', 'New persistent abdominal pain', 'Unexplained weight loss'],
    'Lynch syndrome is an inherited condition that significantly increases your risk of colon and other cancers. Regular colonoscopies starting young can catch problems early. Family members should be tested for the gene mutation. / El sindrome de Lynch es hereditario y aumenta significativamente el riesgo de cancer de colon y otros. Las colonoscopias regulares pueden detectar problemas temprano.',
  ),

  'irritable-bowel-syndrome': gi(
    'irritable-bowel-syndrome',
    'Irritable Bowel Syndrome (IBS)',
    'Sindrome del Intestino Irritable (SII)',
    'functional', 'DD91',
    'Chronic functional GI disorder characterized by recurrent abdominal pain associated with defecation or change in bowel habits, without structural or biochemical abnormality. Subtypes: IBS-D (diarrhea), IBS-C (constipation), IBS-M (mixed).',
    ['Female sex (2:1)', 'Age <50', 'Psychological stress, anxiety, depression', 'Prior GI infection (post-infectious IBS)', 'Food intolerances', 'Visceral hypersensitivity', 'Family history', 'History of abuse'],
    'Brain-gut axis dysregulation with visceral hypersensitivity, altered GI motility, intestinal permeability changes, low-grade mucosal inflammation, and altered gut microbiome. Central sensitization amplifies visceral afferent signals. Psychological factors modulate symptoms via the autonomic nervous system.',
    ['Recurrent abdominal pain related to defecation / Dolor abdominal recurrente relacionado con defecacion', 'Altered stool frequency / Frecuencia alterada de evacuaciones', 'Altered stool form (Bristol stool scale)', 'Bloating and distension / Distension abdominal', 'Mucus in stool / Moco en heces', 'Symptom improvement or worsening with defecation', 'No alarm features (weight loss, bleeding, anemia, nocturnal symptoms)'],
    ['Rome IV criteria (clinical diagnosis of exclusion)', 'Limited testing to exclude organic disease: CBC, CRP, celiac serologies, fecal calprotectin', 'Colonoscopy only if alarm features, age >=45, or family history of CRC/IBD', 'Stool studies if diarrhea-predominant (C. difficile, ova and parasites)', 'Hydrogen breath test if suspected SIBO or lactose intolerance', 'TSH if constipation-predominant'],
    'Stepped approach. Diet: low-FODMAP diet (most evidence-based), fiber supplementation (psyllium for IBS-C), identify trigger foods. IBS-D: loperamide, bile acid sequestrants, rifaximin, eluxadoline, alosetron (severe, women only). IBS-C: linaclotide, lubiprostone, plecanatide, PEG. Pain: antispasmodics (hyoscyamine, dicyclomine), peppermint oil, low-dose TCAs (amitriptyline) or SSRIs. CBT and gut-directed hypnotherapy (strong evidence).',
    'Low-FODMAP diet with dietitian guidance, regular meals, adequate hydration, regular exercise, stress management (meditation, yoga, CBT), adequate sleep, limit caffeine/alcohol, food diary. / Dieta baja en FODMAP, comidas regulares, hidratacion, ejercicio, manejo de estres, sueno adecuado, diario de alimentos.',
    ['IBS is NOT an emergency — but seek care for: rectal bleeding, unintentional weight loss, nocturnal diarrhea, progressive symptoms, fever, new onset after age 50 (these suggest organic disease, not IBS)'],
    'IBS is a condition where your brain and gut communicate abnormally, causing pain, bloating, and changed bowel habits. It is uncomfortable but does not damage your intestine. Diet changes, stress management, and targeted medications help most people significantly. / El SII es una condicion donde su cerebro e intestino se comunican anormalmente. No dana su intestino. Los cambios de dieta, manejo de estres y medicamentos ayudan significativamente.',
  ),

  'c-difficile-colitis': gi(
    'c-difficile-colitis',
    'Clostridioides difficile Infection (CDI)',
    'Infeccion por Clostridioides difficile',
    'colorectal', 'DA34',
    'Toxin-mediated colitis from C. difficile overgrowth, the most common healthcare-associated infection. Ranges from mild diarrhea to fulminant colitis and toxic megacolon.',
    ['Recent antibiotic use (fluoroquinolones, clindamycin, cephalosporins, carbapenems — highest risk)', 'Hospitalization or nursing home residence', 'Age >65', 'PPI use', 'Chemotherapy', 'Immunosuppression', 'IBD', 'Prior CDI'],
    'Antibiotic disruption of normal colonic microbiome allows C. difficile spore germination and vegetative cell proliferation. Toxin A (enterotoxin) and Toxin B (cytotoxin) damage colonocytes, trigger neutrophilic inflammation, and cause characteristic pseudomembranous colitis (raised yellow-white plaques on inflamed mucosa).',
    ['Watery diarrhea (>=3 unformed stools/24h) / Diarrea acuosa', 'Lower abdominal cramping / Colicos abdominales', 'Low-grade fever / Fiebre baja', 'Leukocytosis (often marked: >15,000) / Leucocitosis', 'Foul-smelling stool', 'Fulminant: severe pain, distension, ileus, shock'],
    ['Stool testing: NAAT (PCR — most sensitive) and/or GDH + toxin EIA (two-step algorithm)', 'Do NOT test formed stools or test-of-cure', 'CT abdomen: wall thickening (accordion sign), pericolonic stranding', 'Flexible sigmoidoscopy: pseudomembranes (if diagnosis uncertain)', 'Labs: WBC (often >15k), creatinine, lactate, albumin for severity'],
    'Non-severe (WBC <15k, Cr <1.5): oral vancomycin 125mg QID x10d or fidaxomicin 200mg BID x10d (preferred — lower recurrence). Severe (WBC >=15k or Cr >=1.5): same regimen. Fulminant (hypotension, ileus, megacolon): oral vancomycin + IV metronidazole, rectal vancomycin if ileus, surgical consultation for subtotal colectomy. Recurrent CDI: fidaxomicin, vancomycin taper/pulse, fecal microbiota transplantation (FMT — most effective for recurrent), bezlotoxumab (anti-toxin B antibody).',
    'Strict hand hygiene with soap and water (alcohol gel does NOT kill spores), contact isolation, antibiotic stewardship, discontinue offending antibiotics if possible, probiotics (S. boulardii) may reduce recurrence. / Higiene estricta de manos con agua y jabon, aislamiento de contacto, suspender antibioticos causantes.',
    ['High fever with severe abdominal pain and distension', 'WBC >25,000 or lactate >2.2', 'Ileus (absent bowel sounds, vomiting)', 'Signs of toxic megacolon (colon >6cm on imaging)', 'Hemodynamic instability', 'Acute kidney injury'],
    'C. difficile is a bacterial infection that causes severe diarrhea, usually after antibiotic use disrupts normal gut bacteria. Specific antibiotics treat the infection, and handwashing with soap and water prevents spread. Fecal transplant can help prevent recurrence. / C. difficile es una infeccion bacteriana que causa diarrea severa, usualmente despues de antibioticos. Se trata con antibioticos especificos y el trasplante fecal previene recurrencia.',
  ),

  'ischemic-colitis': gi(
    'ischemic-colitis',
    'Ischemic Colitis',
    'Colitis Isquemica',
    'colorectal', 'DA65',
    'Most common form of intestinal ischemia; transient or chronic reduction in mesenteric blood flow to the colon, typically at watershed areas (splenic flexure, rectosigmoid junction).',
    ['Age >60', 'Atherosclerosis', 'Hypotension/shock', 'Atrial fibrillation (embolic)', 'Aortic surgery (IMA ligation)', 'Vasculitis', 'Hypercoagulable states', 'Cocaine/methamphetamine use', 'Constipation-inducing medications', 'Long-distance running'],
    'Reduced colonic blood flow (non-occlusive hypoperfusion most common, less often thrombotic or embolic occlusion) causes mucosal ischemia at watershed areas (Griffith point at splenic flexure, Sudeck point at rectosigmoid). Ranges from reversible mucosal injury to transmural necrosis and perforation.',
    ['Sudden crampy LLQ or lower abdominal pain / Dolor abdominal colico subito', 'Urgent desire to defecate / Urgencia para defecar', 'Bloody diarrhea within 24 hours of pain onset / Diarrea sanguinolenta', 'Mild tenderness over affected segment', 'Low-grade fever'],
    ['CT abdomen with contrast (wall thickening, pericolonic stranding, thumbprinting at watershed area)', 'Colonoscopy within 48h (segmental erythema, ulceration, edema, pseudomembranes — characteristic single-stripe sign)', 'Labs: lactate (if elevated, concern for transmural necrosis), WBC, BMP', 'CT angiography to exclude mesenteric arterial occlusion'],
    'Most cases (80%) are transient and self-limiting. Supportive: IV fluids, bowel rest, broad-spectrum antibiotics (if moderate-severe). Avoid vasoconstrictors. Discontinue causative medications. Serial abdominal exams. Surgery (segmental colectomy) for peritoneal signs, perforation, or stricture.',
    'Control cardiovascular risk factors (hypertension, diabetes, hyperlipidemia), adequate hydration, avoid constipation, avoid vasoconstrictive substances (cocaine, decongestants). / Controlar factores de riesgo cardiovascular, hidratacion, evitar estrenimiento y sustancias vasoconstrictoras.',
    ['Increasing abdominal pain with peritoneal signs', 'High fever', 'Hemodynamic instability', 'Elevated lactate (transmural necrosis)', 'Massive rectal bleeding', 'Signs of perforation'],
    'Ischemic colitis means part of your colon did not get enough blood flow, causing pain and bloody diarrhea. Most cases heal on their own with bowel rest and fluids. Surgery is needed only for severe cases. / La colitis isquemica significa que parte de su colon no recibio suficiente flujo sanguineo. La mayoria sana sola con reposo intestinal y liquidos.',
  ),

  'toxic-megacolon': gi(
    'toxic-megacolon',
    'Toxic Megacolon',
    'Megacolon Toxico',
    'colorectal', 'DB90',
    'Life-threatening complication of severe colitis (UC, C. difficile, ischemic) with total or segmental non-obstructive colonic dilation (>=6 cm) plus systemic toxicity.',
    ['Severe ulcerative colitis (most common cause)', 'C. difficile infection (fulminant)', 'Ischemic colitis', 'CMV colitis in immunocompromised', 'Medications that reduce motility (opioids, anticholinergics, antidiarrheals)', 'Hypokalemia', 'Colonoscopy/barium enema during severe colitis'],
    'Severe transmural inflammation extends into the muscularis propria and serosa, with release of inflammatory mediators (NO, prostanoids) that inhibit smooth muscle tone. Loss of colonic motor function leads to progressive dilation. Risk of perforation increases sharply when transverse colon exceeds 6 cm.',
    ['Severe bloody diarrhea that may decrease (ominous sign) / Diarrea sanguinolenta severa', 'Abdominal distension and pain / Distension y dolor abdominal', 'High fever >38.6C / Fiebre alta', 'Tachycardia / Taquicardia', 'Altered mental status / Estado mental alterado', 'Rebound tenderness', 'Reduced or absent bowel sounds'],
    ['Abdominal X-ray: transverse colon dilation >=6 cm (or cecum >=9 cm) without obstruction', 'CT abdomen: dilated colon, wall thinning, pericolonic fat stranding, free air if perforated', 'Labs: leukocytosis, anemia, elevated lactate, hypoalbuminemia, electrolyte abnormalities', 'Jalan criteria: radiographic dilation + >=3 of (fever >38.6, HR >120, WBC >10.5k, anemia) + >=1 of (dehydration, altered mental status, electrolyte abnormality, hypotension)'],
    'Medical emergency. IV corticosteroids (methylprednisolone) for UC-related. IV vancomycin + metronidazole for C. difficile. Bowel rest (NPO), IV fluids, NG decompression, correct electrolytes, discontinue offending medications (opioids, anticholinergics). Position changes (prone, knee-chest) to redistribute gas. Serial abdominal exams and X-rays q12h. Surgery (subtotal colectomy with end ileostomy) if no improvement in 24-72h, perforation, or clinical deterioration.',
    'Post-colectomy: ileostomy care education, nutritional support, psychological support, discuss future reconstructive options. / Post-colectomia: educacion sobre cuidado de ileostomia, soporte nutricional y psicologico.',
    ['This IS the emergency — all cases require immediate hospitalization', 'Increasing distension', 'Signs of perforation (sudden worsening pain, rigidity)', 'Hemodynamic instability', 'Altered consciousness'],
    'Toxic megacolon means your colon is severely inflamed and dangerously dilated, which is a medical emergency. Intensive IV medications may resolve it, but surgery to remove the colon may be needed if there is no rapid improvement. / El megacolon toxico significa que su colon esta severamente inflamado y peligrosamente dilatado, una emergencia medica. Se necesitan medicamentos IV intensivos o cirugia.',
  ),

  'ogilvie-syndrome': gi(
    'ogilvie-syndrome',
    'Ogilvie Syndrome (Acute Colonic Pseudo-Obstruction)',
    'Sindrome de Ogilvie (Pseudoobstruccion Colonica Aguda)',
    'colorectal', 'DA93.0',
    'Acute massive dilation of the colon (primarily cecum and right colon) without mechanical obstruction, occurring in hospitalized or debilitated patients.',
    ['Recent surgery (especially orthopedic, cardiac)', 'Critical illness', 'Electrolyte imbalance (hypokalemia, hypomagnesemia, hypocalcemia)', 'Opioid and anticholinergic medications', 'Spinal cord injury', 'Neurologic disease', 'Sepsis', 'Cardiac disease'],
    'Autonomic imbalance with excess sympathetic (inhibitory) and deficient parasympathetic (excitatory) tone to the colon causes functional adynamic obstruction. The transition zone at the splenic flexure reflects the boundary between vagal (proximal) and sacral parasympathetic (distal) innervation.',
    ['Abdominal distension (progressive) / Distension abdominal progresiva', 'Diffuse abdominal pain / Dolor abdominal difuso', 'Nausea and vomiting / Nausea y vomito', 'Reduced passage of flatus and stool', 'Tympanic abdomen', 'Often in a hospitalized patient with comorbidities'],
    ['Abdominal X-ray: massive cecal and colonic dilation without transition point', 'CT abdomen with contrast to exclude mechanical obstruction (essential)', 'Water-soluble contrast enema if CT indeterminate', 'Cecal diameter: >12 cm = high perforation risk', 'Labs: electrolytes, CBC, lactate'],
    'Conservative (initial 24-48h): correct electrolytes, discontinue offending medications, ambulate, bowel rest, NG tube, rectal tube, position changes. Neostigmine IV 2mg (acetylcholinesterase inhibitor — effective in 80-90%, give with telemetry monitoring due to bradycardia risk, have atropine at bedside). Colonoscopic decompression if neostigmine fails or contraindicated. Surgery (cecostomy or colectomy) for perforation or failed decompression with cecum >12 cm.',
    'Early mobilization, correct electrolytes, minimize opioids, bowel regimen. / Movilizacion temprana, corregir electrolitos, minimizar opioides.',
    ['Cecal diameter >12 cm (perforation risk)', 'Increasing pain with peritoneal signs', 'Fever (perforation)', 'Failure to respond to neostigmine', 'Signs of ischemia or perforation on imaging'],
    'Ogilvie syndrome means your colon has become very dilated without a physical blockage, usually during illness or after surgery. Correcting underlying issues and sometimes a medication injection (neostigmine) can restore normal function. / El sindrome de Ogilvie significa que su colon se ha dilatado sin bloqueo fisico. Corregir los problemas subyacentes y medicamento pueden restaurar la funcion normal.',
  ),

  'hemorrhoids': gi(
    'hemorrhoids',
    'Hemorrhoids',
    'Hemorroides',
    'colorectal', 'DB60',
    'Symptomatic enlargement of the hemorrhoidal vascular cushions. Internal (above dentate line — painless bleeding) and external (below dentate line — painful if thrombosed).',
    ['Chronic constipation and straining', 'Pregnancy', 'Obesity', 'Prolonged sitting (especially toilet)', 'Low-fiber diet', 'Heavy lifting', 'Age', 'Portal hypertension', 'Chronic diarrhea'],
    'Hemorrhoidal cushions are normal vascular structures in the anal canal. Chronic straining and increased intra-abdominal pressure cause engorgement, prolapse, and erosion of supporting connective tissue. Internal hemorrhoids originate above the dentate line (visceral innervation — painless), external below (somatic innervation — painful).',
    ['Internal: painless bright-red rectal bleeding with defecation / Sangrado rectal rojo brillante indoloro', 'Prolapse (graded I-IV) / Prolapso', 'Mucus discharge / Secrecion mucosa', 'Pruritus ani / Prurito anal', 'External: perianal pain and swelling / Dolor y hinchazon perianal', 'Thrombosed external: acute severe perianal pain with firm tender lump'],
    ['Digital rectal exam', 'Anoscopy (best for internal hemorrhoids)', 'Colonoscopy if age >=45 or alarm features (to exclude proximal pathology)', 'No imaging typically required', 'Grading: I (no prolapse), II (prolapse with spontaneous reduction), III (prolapse requiring manual reduction), IV (irreducible prolapse)'],
    'Grade I-II: conservative (fiber, sitz baths, topical agents), office procedures (rubber band ligation — most effective office procedure, sclerotherapy, infrared coagulation). Grade III: rubber band ligation, surgical hemorrhoidectomy if failed. Grade IV: surgical hemorrhoidectomy (excisional or stapled). Thrombosed external: excision within 72 hours or conservative if >72 hours (sitz baths, analgesics, resolution over weeks).',
    'High-fiber diet (25-35g/day), adequate water intake (8 glasses/day), avoid prolonged toilet sitting (no phone on toilet), avoid straining, regular exercise, sitz baths 2-3 times daily during flares. / Dieta alta en fibra, hidratacion, evitar sentarse prolongadamente en el bano, no pujar, ejercicio regular, banos de asiento.',
    ['Severe uncontrolled rectal bleeding', 'Thrombosed hemorrhoid with intractable pain', 'Incarcerated prolapsed hemorrhoid', 'Signs of infection (fever, spreading perianal cellulitis)'],
    'Hemorrhoids are swollen blood vessels around the anus that can cause bleeding or pain. High-fiber diet and adequate water prevent most problems. Office procedures can treat persistent ones. / Las hemorroides son vasos sanguineos hinchados alrededor del ano. Dieta alta en fibra y agua previenen problemas. Procedimientos en consultorio tratan las persistentes.',
  ),

  'anal-fissure': gi(
    'anal-fissure',
    'Anal Fissure',
    'Fisura Anal',
    'colorectal', 'DB61',
    'Linear tear in the anoderm distal to the dentate line, most commonly at the posterior midline. Causes severe pain with defecation and minor bleeding.',
    ['Chronic constipation and hard stools', 'Chronic diarrhea', 'Childbirth', 'Anal intercourse', 'Crohn disease', 'HIV', 'Tuberculosis (if atypical location)'],
    'Hard stool passage tears the anoderm. Internal anal sphincter spasm reduces blood flow to the posterior commissure (watershed area), impairing healing and creating a cycle of pain -> spasm -> ischemia -> non-healing. Chronic fissures develop sentinel pile (external) and hypertrophied papilla (internal).',
    ['Severe sharp pain during and after defecation / Dolor agudo severo durante la defecacion', 'Bright-red blood on toilet paper or stool surface / Sangre roja brillante en papel', 'Anal spasm / Espasmo anal', 'Fear of defecation (stool withholding) / Miedo a defecar', 'Sentinel pile visible externally in chronic fissures'],
    ['Visual inspection of the anal verge (posterior midline tear visible with gentle traction)', 'Digital rectal exam (may be deferred if severe pain)', 'Anoscopy after healing or under anesthesia', 'Biopsy if atypical location (lateral — rule out Crohn, cancer, STI, TB)', 'Colonoscopy not routinely needed unless alarm features'],
    'Acute (<6 weeks): stool softeners, high-fiber diet, sitz baths, topical analgesics. Chronic: topical nitroglycerin 0.2-0.4% or topical diltiazem 2% (relax internal sphincter, improve blood flow — first-line medical). Botulinum toxin injection into internal sphincter. Lateral internal sphincterotomy (LIS — most effective, gold standard for refractory chronic fissure, small risk of incontinence).',
    'High-fiber diet, adequate hydration, stool softeners, avoid straining, sitz baths after bowel movements, keep area clean and dry. / Dieta alta en fibra, hidratacion, ablandadores de heces, evitar pujar, banos de asiento.',
    ['Severe uncontrolled pain not responsive to conservative measures', 'Fissure in atypical location (may indicate Crohn or other pathology)', 'Signs of perianal abscess (fever, swelling)'],
    'An anal fissure is a small tear in the skin around your anus, causing sharp pain during bowel movements. Fiber, stool softeners, and medicated ointments heal most fissures. Surgery is reserved for persistent cases. / Una fisura anal es un pequeno desgarro que causa dolor agudo al defecar. Fibra, ablandadores y unguentos curan la mayoria.',
  ),

  'anal-fistula': gi(
    'anal-fistula',
    'Anal Fistula',
    'Fistula Anal',
    'colorectal', 'DB62',
    'Abnormal tract connecting the anal canal (internal opening at dentate line) to the perianal skin (external opening). Most commonly from a prior perianal abscess.',
    ['Prior perianal abscess (cryptoglandular — most common)', 'Crohn disease', 'Tuberculosis', 'Radiation', 'Malignancy', 'HIV', 'Trauma'],
    'Cryptoglandular theory: infection of an anal gland at the dentate line forms an abscess that spontaneously drains or is surgically drained, leaving an epithelialized tract. Goodsall rule predicts tract course: posterior external opening -> curved tract to posterior midline internal opening; anterior external opening -> radial tract to nearest crypt.',
    ['Persistent perianal drainage (purulent or serosanguinous) / Secrecion perianal persistente', 'Perianal pain (during flares/abscess) / Dolor perianal', 'External opening visible as small papule near anus / Abertura externa visible', 'Recurrent perianal abscess / Abscesos perianales recurrentes', 'Pruritus ani / Prurito anal'],
    ['Physical exam: external opening with expressible discharge, palpable tract', 'Digital rectal exam (internal opening)', 'MRI pelvis (gold standard for complex fistulas — maps tract and identifies secondary extensions)', 'EUS (endoanal ultrasound)', 'Fistulography (largely replaced by MRI)', 'Exam under anesthesia (EUA)', 'Assess for Crohn disease if recurrent or complex'],
    'Simple (low, single tract): fistulotomy (lay-open — high success rate, low recurrence). Complex (high, multiple tracts, anterior in women, Crohn-related): seton placement (draining or cutting), LIFT procedure (ligation of intersphincteric fistula tract), endorectal advancement flap, fibrin glue/plug, VAAFT (video-assisted). Crohn-related: anti-TNF therapy (infliximab), seton drainage, combined medical-surgical approach.',
    'Keep perianal area clean and dry, sitz baths, high-fiber diet, monitor for recurrence. / Mantener area perianal limpia y seca, banos de asiento, dieta alta en fibra, vigilar recurrencia.',
    ['Increasing perianal pain with fever (abscess recurrence)', 'Spreading perianal cellulitis', 'Systemic sepsis', 'New fistula tracts developing'],
    'An anal fistula is an abnormal tunnel from your anal canal to the skin near the anus, usually from a prior abscess. Surgery can close or remove the tract. / Una fistula anal es un tunel anormal del canal anal a la piel. La cirugia puede cerrar o remover el tracto.',
  ),

  'perianal-abscess': gi(
    'perianal-abscess',
    'Perianal Abscess',
    'Absceso Perianal',
    'colorectal', 'DB63',
    'Collection of pus in the perianal/anorectal tissues, most commonly from infected anal glands (cryptoglandular origin). Classified by location: perianal, ischiorectal, intersphincteric, supralevator.',
    ['Cryptoglandular infection (most common)', 'Crohn disease', 'Diabetes mellitus', 'Immunosuppression', 'HIV', 'Trauma', 'Foreign body'],
    'Obstruction of an anal crypt gland leads to stasis and bacterial infection (polymicrobial — E. coli, Bacteroides, Streptococcus). Pus collects in the intersphincteric space and can spread to various perianal spaces depending on the path of least resistance.',
    ['Severe constant perianal pain / Dolor perianal severo constante', 'Perianal swelling, induration, erythema / Hinchazon perianal', 'Fever / Fiebre', 'Pain worsens with sitting and defecation', 'Fluctuant mass on exam', 'Deep abscesses (intersphincteric, supralevator) may lack external findings'],
    ['Clinical diagnosis (tender, fluctuant perianal mass)', 'CT or MRI pelvis for deep abscesses not clinically apparent', 'EUS if intersphincteric abscess suspected', 'Labs: WBC, glucose (screen for diabetes)'],
    'Surgical emergency — incision and drainage (I&D) as soon as possible. Antibiotics alone are insufficient. Pack wound loosely or place Penrose drain. Antibiotics (ciprofloxacin + metronidazole) only if: extensive cellulitis, immunosuppression, valvular heart disease, diabetes, systemic sepsis. Sitz baths post-drainage. ~50% develop anal fistula after drainage.',
    'Sitz baths 3-4 times daily after drainage, keep wound clean, high-fiber diet, stool softeners, follow-up for wound healing and fistula assessment. / Banos de asiento 3-4 veces al dia, mantener herida limpia, dieta alta en fibra, seguimiento para cierre de herida.',
    ['This IS an emergency requiring prompt drainage', 'High fever with spreading cellulitis', 'Necrotizing perianal infection (Fournier gangrene — rapidly spreading, crepitus)', 'Urinary retention', 'Sepsis'],
    'A perianal abscess is a collection of infected fluid near your anus that needs to be drained surgically as soon as possible. Antibiotics alone cannot cure it. / Un absceso perianal es una coleccion de liquido infectado cerca del ano que necesita ser drenado quirurgicamente lo antes posible.',
  ),

  'rectal-prolapse': gi(
    'rectal-prolapse',
    'Rectal Prolapse',
    'Prolapso Rectal',
    'colorectal', 'DB70',
    'Full-thickness protrusion of the rectal wall through the anal canal. Partial (mucosal) prolapse involves only mucosa; complete prolapse involves all layers with concentric folds.',
    ['Chronic constipation and straining', 'Female sex (6:1)', 'Elderly', 'Pelvic floor weakness', 'Multiparity', 'Neurologic conditions (MS, spinal cord injury)', 'Cystic fibrosis (children)', 'Connective tissue disorders'],
    'Weakened pelvic floor muscles and supporting ligaments allow intussusception of the rectal wall through the anal canal. Loss of sacral attachments and deep cul-de-sac (Douglas pouch) contribute. Chronic straining and pudendal neuropathy are common associated findings.',
    ['Visible mass protruding from anus (especially with straining) / Masa visible protruyendo del ano', 'Fecal incontinence / Incontinencia fecal', 'Mucous discharge / Secrecion mucosa', 'Rectal bleeding / Sangrado rectal', 'Sensation of incomplete evacuation / Sensacion de evacuacion incompleta', 'Constipation (obstructed defecation)'],
    ['Physical exam: concentric mucosal folds visible on straining (vs radial folds in mucosal prolapse)', 'Defecography (dynamic MRI or fluoroscopic) for occult prolapse', 'Anal manometry (assess sphincter function)', 'Colonoscopy to exclude mass (if age-appropriate)', 'Pelvic floor assessment'],
    'Children: usually resolves with conservative management (fiber, stool softeners, manual reduction). Adults: surgical repair. Abdominal approach (preferred in fit patients): rectopexy (suture or mesh — laparoscopic preferred), sigmoid resection if redundant. Perineal approach (elderly/comorbid): Delorme procedure (mucosal sleeve resection) or Altemeier procedure (perineal rectosigmoidectomy). Biofeedback for associated incontinence.',
    'High-fiber diet, adequate fluids, avoid straining, pelvic floor exercises, maintain healthy weight. / Dieta alta en fibra, liquidos adecuados, evitar pujar, ejercicios de suelo pelvico.',
    ['Incarcerated prolapse (cannot reduce — emergency)', 'Strangulated prolapse (ischemia — severe pain, dark tissue)', 'Significant rectal bleeding', 'Urinary retention'],
    'Rectal prolapse means the rectum slides out through the anus. Conservative measures help children, while adults usually need surgery to secure the rectum in place. / El prolapso rectal significa que el recto se desliza hacia afuera. Medidas conservadoras ayudan a ninos, mientras adultos usualmente necesitan cirugia.',
  ),

  'hirschsprung-disease': gi(
    'hirschsprung-disease',
    'Hirschsprung Disease',
    'Enfermedad de Hirschsprung',
    'congenital', 'LB14.0',
    'Congenital absence of ganglion cells in the myenteric (Auerbach) and submucosal (Meissner) plexuses of the distal bowel, causing functional obstruction. Aganglionic segment always includes the rectum and extends proximally for variable distance.',
    ['Male sex (4:1)', 'Down syndrome (trisomy 21 — 5-15%)', 'RET proto-oncogene mutations', 'Family history', 'Other neurocristopathies (MEN2A, Waardenburg syndrome)'],
    'Failure of neural crest cell migration to the distal bowel during weeks 5-12 of gestation results in absence of ganglion cells. The aganglionic segment remains tonically contracted (no relaxation), causing functional obstruction proximal to it. The internal sphincter fails to relax (absent rectoanal inhibitory reflex).',
    ['Neonatal: failure to pass meconium within 48 hours (90%) / Falla en pasar meconio en 48 horas', 'Abdominal distension / Distension abdominal', 'Bilious vomiting / Vomito bilioso', 'Explosive stool after rectal exam (blast sign)', 'Older children: chronic severe constipation since birth, failure to thrive', 'Enterocolitis (life-threatening complication)'],
    ['Contrast enema: transition zone (dilated proximal ganglionic colon, narrow distal aganglionic segment), delayed 24h film showing retained contrast', 'Rectal suction biopsy (gold standard): absence of ganglion cells, hypertrophied nerve trunks, elevated acetylcholinesterase staining', 'Anorectal manometry: absent rectoanal inhibitory reflex (RAIR)'],
    'Definitive: surgical pull-through procedure (Soave — endorectal, Swenson — full-thickness, Duhamel — retrorectal) resecting aganglionic bowel and anastomosing ganglionic bowel to the anus. Often single-stage in neonates. Diverting colostomy initially if enterocolitis, perforation, or massive dilation. Rectal irrigations as temporizing measure.',
    'Post-surgical: monitor for enterocolitis (fever, distension, diarrhea — treated with rectal irrigations and antibiotics), bowel training, adequate fiber and fluids, long-term follow-up for constipation and continence. / Post-quirurgico: vigilar enterocolitis, entrenamiento intestinal, fibra y liquidos adecuados, seguimiento a largo plazo.',
    ['Hirschsprung-associated enterocolitis (HAEC) — fever, bloody explosive diarrhea, distension (can be fatal)', 'Bowel perforation', 'Severe abdominal distension with bilious vomiting in neonate', 'Sepsis'],
    'Hirschsprung disease means nerve cells are missing from part of your child\'s colon, preventing normal bowel movements. Surgery removes the affected section and connects healthy bowel to the anus, allowing normal function. / La enfermedad de Hirschsprung significa que faltan celulas nerviosas en parte del colon de su hijo. La cirugia remueve la seccion afectada y conecta el intestino sano al ano.',
  ),

  // ==========================================================================
  //  HEPATIC (22)
  // ==========================================================================

  'hepatitis-a': gi(
    'hepatitis-a', 'Hepatitis A', 'Hepatitis A',
    'hepatic', '1E50.0',
    'Acute self-limited liver infection by hepatitis A virus (HAV, RNA picornavirus) transmitted via the fecal-oral route. Does not cause chronic hepatitis.',
    ['Travel to endemic areas', 'Contaminated food/water', 'MSM', 'IV drug use', 'Lack of vaccination', 'Close contact with infected person'],
    'HAV is ingested, absorbed in the intestine, and replicates in hepatocytes. Immune-mediated hepatocyte destruction (not direct viral cytopathy) causes acute hepatitis. Viremia and fecal shedding peak before symptom onset. No chronicity; lifelong immunity after infection.',
    ['Prodrome: fatigue, malaise, anorexia, nausea / Fatiga, malestar, anorexia, nausea', 'Jaundice, dark urine, pale stools / Ictericia, orina oscura, heces palidas', 'RUQ pain / Dolor en hipocondrio derecho', 'Fever / Fiebre', 'Children often asymptomatic; adults more symptomatic', 'Self-limited over 2-6 weeks'],
    ['Anti-HAV IgM (acute infection)', 'Anti-HAV IgG (past infection or vaccination — immunity)', 'Elevated ALT/AST (often >1000)', 'Elevated bilirubin', 'PT/INR (if fulminant)'],
    'Supportive care only: rest, hydration, avoid hepatotoxins (alcohol, acetaminophen). No specific antiviral therapy. Fulminant hepatitis (<1%): refer for liver transplant evaluation. Prevention: HAV vaccine (2-dose series), post-exposure prophylaxis (vaccine or IG within 2 weeks).',
    'Rest, avoid alcohol, adequate hydration, balanced diet, hand hygiene to prevent transmission. / Reposo, evitar alcohol, hidratacion, dieta balanceada, higiene de manos.',
    ['Fulminant hepatic failure (coagulopathy, encephalopathy)', 'Prolonged vomiting with dehydration', 'INR >1.5 or signs of liver failure'],
    'Hepatitis A is a liver infection from contaminated food or water that resolves on its own. A vaccine prevents it. / La hepatitis A es una infeccion del higado por agua o alimentos contaminados que se resuelve sola. Una vacuna la previene.',
  ),

  'hepatitis-b': gi(
    'hepatitis-b', 'Hepatitis B', 'Hepatitis B',
    'hepatic', '1E51',
    'Liver infection by hepatitis B virus (HBV, DNA hepadnavirus) transmitted via blood, sexual contact, or vertical transmission. Can cause acute or chronic hepatitis, cirrhosis, and hepatocellular carcinoma.',
    ['Vertical transmission (mother to child — most common worldwide)', 'IV drug use', 'Unprotected sexual contact', 'Healthcare exposure (needlestick)', 'Hemodialysis', 'Endemic area residence (Asia, Africa)', 'Lack of vaccination'],
    'HBV infects hepatocytes via NTCP receptor. Viral cccDNA integrates into host genome (persistence mechanism). Immune-mediated hepatocyte destruction causes liver injury (not direct cytopathy). Chronic infection (HBsAg+ >6 months) phases: immune-tolerant, immune-active, inactive carrier, reactivation. HBV DNA integration promotes hepatocarcinogenesis even without cirrhosis.',
    ['Acute: prodrome then jaundice (similar to HAV) / Fase aguda: similar a hepatitis A', 'Chronic: often asymptomatic until complications / Cronica: frecuentemente asintomatica', 'Fatigue, RUQ discomfort / Fatiga, malestar en hipocondrio derecho', 'Extrahepatic: polyarteritis nodosa, membranous nephropathy, serum sickness-like illness', 'Cirrhosis and HCC complications in chronic disease'],
    ['Serologic panel: HBsAg (active infection), anti-HBs (immunity), anti-HBc IgM (acute), anti-HBc IgG (prior exposure), HBeAg (high replication), anti-HBe (lower replication)', 'HBV DNA viral load (quantitative)', 'ALT/AST, bilirubin, albumin, PT/INR', 'Liver fibrosis assessment: FibroScan or FIB-4', 'HCC screening: AFP + liver ultrasound q6mo in cirrhotics or high-risk chronic carriers'],
    'Acute: supportive (>95% of adults clear spontaneously). Chronic (treatment if immune-active or advanced fibrosis): tenofovir (TDF or TAF) or entecavir (first-line nucleos(t)ide analogs — long-term suppression). Pegylated interferon-alpha (finite course, 48 weeks — achieves functional cure in some). Goal: sustained HBV DNA suppression, HBsAg loss (functional cure — rare). HCC surveillance q6 months.',
    'Avoid alcohol, hepatotoxic medications, ensure vaccination of household/sexual contacts, use barrier protection, do not share razors/toothbrushes. / Evitar alcohol y medicamentos hepatotoxicos, vacunar contactos, usar proteccion de barrera.',
    ['Acute liver failure (coagulopathy, encephalopathy, jaundice)', 'HBV reactivation during immunosuppression', 'Signs of decompensated cirrhosis', 'New liver mass (HCC concern)'],
    'Hepatitis B is a liver virus spread through blood and body fluids. Most adults clear it, but chronic infection can lead to cirrhosis or liver cancer. Antiviral medication suppresses the virus, and vaccination prevents infection. / La hepatitis B es un virus del higado. La mayoria de adultos lo elimina, pero la infeccion cronica puede causar cirrosis o cancer. Antivirales suprimen el virus y la vacuna lo previene.',
  ),

  'hepatitis-c': gi(
    'hepatitis-c', 'Hepatitis C', 'Hepatitis C',
    'hepatic', '1E51.1',
    'Liver infection by hepatitis C virus (HCV, RNA flavivirus) transmitted via blood. Leading cause of chronic hepatitis, cirrhosis, and liver transplantation. Now curable with direct-acting antivirals.',
    ['IV drug use (most common in US)', 'Blood transfusion before 1992', 'Needlestick injuries', 'Vertical transmission (5%)', 'Intranasal drug use', 'Tattoos/piercings with unsterile equipment', 'Hemodialysis', 'Birth cohort 1945-1965'],
    'HCV infects hepatocytes and evades immune clearance via high mutation rate (RNA-dependent RNA polymerase lacks proofreading). Chronic infection (70-80% of those exposed) causes persistent hepatic inflammation, stellate cell activation, fibrosis, cirrhosis (20-30% over 20-30 years), and HCC. Extrahepatic manifestations from immune complex deposition (cryoglobulinemia, membranoproliferative GN).',
    ['Acute: usually asymptomatic (80%) / Aguda: usualmente asintomatica', 'Chronic: fatigue (most common symptom), RUQ discomfort / Cronica: fatiga, malestar en HD', 'Often discovered incidentally on labs', 'Cirrhosis complications (ascites, variceal bleeding, encephalopathy)', 'Extrahepatic: cryoglobulinemia (palpable purpura, arthralgias, GN), porphyria cutanea tarda, lichen planus, lymphoma'],
    ['Anti-HCV antibody (screening — if positive, confirm with HCV RNA)', 'HCV RNA quantitative (viral load — confirms active infection)', 'HCV genotype (guides treatment, though pangenotypic regimens now standard)', 'ALT/AST, CBC, CMP, INR', 'Liver fibrosis: FibroScan, FIB-4, liver biopsy (rarely needed)', 'Screen: all adults 18+ at least once, all pregnant women each pregnancy (USPSTF)'],
    'Direct-acting antivirals (DAAs) cure >95%. Pangenotypic regimens: sofosbuvir/velpatasvir (Epclusa) 12 weeks or glecaprevir/pibrentasvir (Mavyret) 8-12 weeks. Decompensated cirrhosis: sofosbuvir/velpatasvir (no protease inhibitors). Confirm SVR12 (sustained virologic response at 12 weeks post-treatment = cure). Continue HCC surveillance if cirrhotic even after cure. Liver transplant for decompensated cirrhosis or HCC.',
    'Avoid alcohol (accelerates fibrosis), avoid sharing needles/razors, harm reduction programs, balanced diet, HCC surveillance if cirrhotic. / Evitar alcohol, no compartir agujas/navajas, programas de reduccion de danos, dieta balanceada.',
    ['Signs of decompensated cirrhosis (ascites, variceal bleeding, encephalopathy)', 'Acute liver failure (rare)', 'New liver mass (HCC)', 'Severe cryoglobulinemic vasculitis'],
    'Hepatitis C is a curable liver virus. Modern antiviral pills taken for 8-12 weeks cure over 95% of patients. Early treatment prevents cirrhosis and liver cancer. / La hepatitis C es un virus del higado curable. Pastillas antivirales por 8-12 semanas curan mas del 95% de los pacientes.',
  ),

  'hepatitis-d': gi(
    'hepatitis-d', 'Hepatitis D', 'Hepatitis D',
    'hepatic', '1E51.2',
    'Liver infection by hepatitis D virus (HDV, defective RNA virus requiring HBV surface antigen for assembly). Coinfection or superinfection with HBV causes more severe disease.',
    ['HBV infection (absolute requirement)', 'IV drug use', 'Endemic area (Mediterranean, Amazon basin, Mongolia)', 'High-risk sexual behavior'],
    'HDV is a defective satellite virus requiring HBsAg coat for virion assembly and entry. Coinfection (HBV + HDV simultaneously): usually acute and self-limited. Superinfection (HDV in chronic HBV carrier): severe hepatitis with high rate of chronicity (70-90%), accelerated progression to cirrhosis and HCC.',
    ['Similar to HBV but more severe / Similar a hepatitis B pero mas severa', 'Jaundice / Ictericia', 'Fatigue, malaise / Fatiga, malestar', 'Biphasic hepatitis with two ALT peaks (coinfection)', 'Rapid progression to cirrhosis (superinfection)', 'Fulminant hepatitis (more common than HBV alone)'],
    ['Anti-HDV antibody (total and IgM)', 'HDV RNA (PCR — confirms active replication)', 'HBsAg must be positive', 'HBV serologies and DNA', 'Liver function tests, fibrosis assessment'],
    'Pegylated interferon-alpha for 48 weeks (only established therapy — limited efficacy ~25% SVR). Bulevirtide (entry inhibitor — approved in EU, blocks NTCP receptor). Treat underlying HBV. Liver transplant for decompensated cirrhosis. HBV vaccination prevents HDV (no HDV without HBV).',
    'Avoid alcohol, HBV prevention measures (vaccination of contacts), avoid hepatotoxins. / Evitar alcohol, medidas de prevencion de hepatitis B, evitar hepatotoxinas.',
    ['Fulminant hepatic failure', 'Rapid onset decompensated cirrhosis', 'Signs of liver failure'],
    'Hepatitis D only infects people who already have hepatitis B, making the liver disease worse. The best prevention is hepatitis B vaccination. / La hepatitis D solo infecta a personas con hepatitis B, empeorando la enfermedad hepatica. La mejor prevencion es la vacuna contra hepatitis B.',
  ),

  'hepatitis-e': gi(
    'hepatitis-e', 'Hepatitis E', 'Hepatitis E',
    'hepatic', '1E50.4',
    'Acute hepatitis caused by hepatitis E virus (HEV, RNA hepevirus) transmitted via fecal-oral route (contaminated water) or zoonotic (undercooked pork/game). Usually self-limited; dangerous in pregnancy.',
    ['Travel to endemic areas (South Asia, Africa)', 'Contaminated water', 'Undercooked pork or wild game (genotype 3/4)', 'Pregnancy (high mortality)', 'Immunosuppression (chronic infection risk)'],
    'HEV genotypes 1-2: fecal-oral/waterborne, endemic in developing countries. Genotypes 3-4: zoonotic (pigs, deer), sporadic in developed countries. Self-limited in immunocompetent. Fulminant hepatitis in pregnancy (15-25% mortality in third trimester). Can become chronic in immunosuppressed (organ transplant recipients).',
    ['Similar to hepatitis A: fatigue, jaundice, nausea / Similar a hepatitis A', 'Usually self-limited 2-6 weeks', 'Pregnancy: high risk of fulminant failure / Embarazo: alto riesgo de falla fulminante', 'Immunosuppressed: chronic hepatitis possible', 'Neurologic manifestations (Guillain-Barre, neuralgic amyotrophy) reported'],
    ['Anti-HEV IgM (acute)', 'Anti-HEV IgG (past infection)', 'HEV RNA (PCR — confirms active infection)', 'ALT/AST elevated', 'PT/INR in severe cases'],
    'Supportive care in immunocompetent (self-limited). Pregnancy: supportive, monitor closely, early delivery if fulminant (no effective antiviral). Chronic HEV in immunosuppressed: reduce immunosuppression first, ribavirin if persistent. Prevention: vaccine available in China (Hecolin); no global availability yet.',
    'Safe drinking water, adequate sanitation, avoid undercooked pork/game, hand hygiene. / Agua potable segura, saneamiento adecuado, evitar carne de cerdo/caza cruda, higiene de manos.',
    ['Fulminant hepatic failure (especially in pregnancy)', 'Severe jaundice with coagulopathy', 'Encephalopathy', 'Pregnant woman with hepatitis symptoms — urgent evaluation'],
    'Hepatitis E is a liver infection usually from contaminated water, similar to hepatitis A. It is especially dangerous for pregnant women. / La hepatitis E es una infeccion del higado por agua contaminada. Es especialmente peligrosa para mujeres embarazadas.',
  ),

  'autoimmune-hepatitis': gi(
    'autoimmune-hepatitis', 'Autoimmune Hepatitis', 'Hepatitis Autoinmune',
    'hepatic', 'DB96.0',
    'Chronic progressive hepatitis caused by immune-mediated destruction of hepatocytes. Type 1 (ANA/ASMA+, adults) and Type 2 (anti-LKM-1+, children/young adults).',
    ['Female sex (4:1)', 'Other autoimmune diseases (thyroiditis, UC, celiac, RA)', 'HLA-DR3, HLA-DR4', 'Drug-triggered (nitrofurantoin, minocycline, statins)', 'Family history of autoimmunity'],
    'Loss of immune tolerance to hepatocyte antigens triggers CD4+ T cell-mediated attack on hepatocytes. Type 1: anti-nuclear antibody (ANA) and anti-smooth muscle antibody (ASMA) positive. Type 2: anti-liver-kidney microsomal antibody (anti-LKM-1) positive, often more severe. Interface hepatitis with plasma cell infiltration is the histologic hallmark.',
    ['Fatigue (most common) / Fatiga', 'Jaundice / Ictericia', 'Arthralgias / Artralgias', 'Hepatomegaly / Hepatomegalia', 'RUQ discomfort', 'May present acutely mimicking viral hepatitis or insidiously with cirrhosis', 'Amenorrhea, acne, hirsutism in women', 'Associated autoimmune conditions'],
    ['Elevated IgG (polyclonal)', 'Autoantibodies: ANA, ASMA (Type 1); anti-LKM-1, anti-LC-1 (Type 2)', 'Elevated ALT/AST (often markedly)', 'Liver biopsy: interface hepatitis with plasma cell-rich infiltrate (gold standard)', 'Simplified or revised original International AIH Group scoring criteria', 'Exclude viral hepatitis, Wilson disease, drug-induced hepatitis'],
    'Induction: prednisone (or budesonide if non-cirrhotic) + azathioprine. Maintenance: azathioprine monotherapy (steroid-sparing) or low-dose prednisone + azathioprine. Incomplete response: mycophenolate mofetil, tacrolimus, or 6-mercaptopurine. Treat until biochemical and histologic remission (minimum 2-3 years). Liver transplant for decompensated cirrhosis or fulminant presentation. High recurrence rate post-transplant (20-40%).',
    'Balanced diet, avoid alcohol, medication adherence (do not stop immunosuppression without medical guidance), bone health monitoring (calcium, vitamin D — steroid-related osteoporosis). / Dieta balanceada, evitar alcohol, adherencia a medicamentos, salud osea.',
    ['Acute liver failure (jaundice, coagulopathy, encephalopathy)', 'Signs of decompensated cirrhosis', 'Severe flare with markedly elevated transaminases', 'Drug side effects (cytopenias from azathioprine)'],
    'Your immune system is mistakenly attacking your liver. Medications that calm the immune system can control the disease and prevent liver damage. / Su sistema inmunologico esta atacando su higado por error. Medicamentos que calman el sistema inmune controlan la enfermedad y previenen dano hepatico.',
  ),

  'primary-biliary-cholangitis': gi(
    'primary-biliary-cholangitis', 'Primary Biliary Cholangitis (PBC)', 'Colangitis Biliar Primaria (CBP)',
    'hepatic', 'DB98.0',
    'Chronic autoimmune cholestatic liver disease characterized by destruction of small intrahepatic bile ducts, leading to cholestasis, fibrosis, and cirrhosis.',
    ['Female sex (9:1)', 'Middle age (40-60)', 'Anti-mitochondrial antibody positive (95%)', 'Family history', 'Other autoimmune diseases (Sjogren, thyroiditis, scleroderma)', 'Recurrent UTIs (molecular mimicry with E. coli)'],
    'Autoimmune destruction of small interlobular bile ducts (florid duct lesion: granulomatous cholangitis). Anti-mitochondrial antibodies (AMA) target E2 subunit of pyruvate dehydrogenase complex on bile duct epithelium. Progressive ductopenia leads to cholestasis, bile acid retention, hepatocyte injury, fibrosis, and biliary cirrhosis.',
    ['Fatigue (most debilitating symptom) / Fatiga', 'Pruritus (often precedes jaundice by years) / Prurito', 'Jaundice (late) / Ictericia', 'Xanthelasma and xanthomas (hypercholesterolemia)', 'Hepatomegaly / Hepatomegalia', 'Sicca symptoms (associated Sjogren) / Sequedad ocular y bucal', 'Osteoporosis', 'Fat-soluble vitamin deficiency (A, D, E, K)'],
    ['Anti-mitochondrial antibody (AMA) — >95% sensitive and specific', 'Elevated alkaline phosphatase (cholestatic pattern)', 'Elevated GGT', 'Elevated IgM', 'Liver biopsy: florid duct lesion, granulomatous inflammation (not always needed if AMA+ with cholestatic labs)', 'AMA-negative PBC: check ANA with specific patterns (nuclear dot — sp100, nuclear rim — gp210)'],
    'Ursodeoxycholic acid (UDCA) 13-15 mg/kg/day — first-line, improves biochemistry and slows progression. Obeticholic acid (FXR agonist) — add-on for incomplete UDCA response. Fibrates (bezafibrate) — adjunctive for incomplete response. Pruritus: cholestyramine, rifampin, naltrexone, sertraline. Fat-soluble vitamin supplementation. Liver transplant for decompensated disease (excellent post-transplant outcomes, 10% recurrence).',
    'Calcium and vitamin D supplementation, DEXA scan for osteoporosis, avoid alcohol, cholesterol monitoring, balanced diet with adequate fat-soluble vitamins. / Suplemento de calcio y vitamina D, densitometria osea, evitar alcohol.',
    ['Signs of decompensated cirrhosis', 'Intractable pruritus affecting quality of life', 'Progressive jaundice', 'Variceal bleeding'],
    'PBC is an immune condition that slowly damages the small bile ducts in your liver. A medication called ursodiol protects your liver and slows the disease. / La CBP es una condicion inmune que dana lentamente los conductos biliares pequenos de su higado. Un medicamento llamado ursodiol protege su higado.',
  ),

  'primary-sclerosing-cholangitis': gi(
    'primary-sclerosing-cholangitis', 'Primary Sclerosing Cholangitis (PSC)', 'Colangitis Esclerosante Primaria (CEP)',
    'hepatic', 'DB98.1',
    'Chronic cholestatic liver disease with inflammation and fibrosis of intrahepatic and/or extrahepatic bile ducts, causing multifocal strictures. Strong association with IBD (especially UC).',
    ['Male sex (2:1)', 'Age 30-40', 'Ulcerative colitis (60-80% of PSC patients have UC)', 'IBD', 'Family history', 'HLA-B8, HLA-DR3'],
    'Immune-mediated periductal fibrosis (onion-skin fibrosis) causes progressive bile duct stricturing and destruction. Leads to cholestasis, secondary biliary cirrhosis, and high risk of cholangiocarcinoma (lifetime risk 10-20%). The etiology involves gut-liver axis dysfunction with bacterial translocation and immune cross-reactivity between colonic and biliary epithelium.',
    ['Often asymptomatic early (found on labs) / Frecuentemente asintomatico temprano', 'Fatigue / Fatiga', 'Pruritus / Prurito', 'Jaundice (episodic or progressive) / Ictericia', 'RUQ pain / Dolor en hipocondrio derecho', 'Recurrent bacterial cholangitis (fever, jaundice, pain)', 'Weight loss', 'Concurrent UC symptoms'],
    ['MRCP (magnetic resonance cholangiopancreatography): beading pattern (multifocal strictures and dilations — string-of-beads)', 'Alkaline phosphatase elevated (cholestatic pattern)', 'pANCA positive (in 80%)', 'Liver biopsy: periductal (onion-skin) fibrosis (not always needed if classic MRCP)', 'ERCP reserved for therapeutic intervention', 'Screen for IBD (colonoscopy in all PSC patients)', 'CA 19-9 and MRCP surveillance for cholangiocarcinoma annually'],
    'No proven medical therapy to halt progression. UDCA (debated — may improve biochemistry but no proven survival benefit in PSC). Dominant stricture: ERCP with balloon dilation and stenting. Bacterial cholangitis: antibiotics. Pruritus management. Colonoscopic surveillance for CRC (annual in PSC-IBD). Liver transplant for decompensated disease or recurrent cholangitis (10-20% recurrence post-transplant). Cholangiocarcinoma surveillance.',
    'Avoid alcohol, balanced diet, fat-soluble vitamin supplementation if cholestatic, annual colonoscopy if IBD, monitor for cholangiocarcinoma. / Evitar alcohol, dieta balanceada, suplementacion de vitaminas liposolubles, colonoscopia anual si tiene EII.',
    ['Fever with jaundice and RUQ pain (cholangitis — Charcot triad)', 'Rapidly worsening jaundice (cholangiocarcinoma concern)', 'Signs of decompensated cirrhosis', 'New abdominal mass'],
    'PSC causes scarring and narrowing of your bile ducts. There is no cure yet, but managing complications and screening for associated cancers is essential. Liver transplant may eventually be needed. / La CEP causa cicatrizacion de sus conductos biliares. No hay cura, pero manejar complicaciones y deteccion de cancer es esencial.',
  ),

  'alcoholic-liver-disease': gi(
    'alcoholic-liver-disease', 'Alcoholic Liver Disease', 'Enfermedad Hepatica Alcoholica',
    'hepatic', 'DB92',
    'Spectrum of liver injury from chronic alcohol use: steatosis (fatty liver) -> alcoholic hepatitis -> cirrhosis. Most common cause of liver disease worldwide.',
    ['Chronic heavy alcohol use (>40g/day women, >60g/day men for >10 years)', 'Female sex (lower threshold)', 'Obesity', 'Genetic factors (PNPLA3, TM6SF2)', 'Concurrent hepatitis C', 'Malnutrition', 'Binge drinking pattern'],
    'Alcohol metabolism produces acetaldehyde (direct hepatotoxin) and generates oxidative stress. Steatosis: alcohol promotes hepatic lipogenesis and impairs fatty acid oxidation. Alcoholic hepatitis: acetaldehyde-protein adducts trigger immune response, neutrophilic infiltration, hepatocyte ballooning (Mallory-Denk bodies). Cirrhosis: repeated injury activates stellate cells producing collagen and irreversible fibrosis.',
    ['Steatosis: usually asymptomatic, hepatomegaly / Esteatosis: asintomatica, hepatomegalia', 'Alcoholic hepatitis: jaundice, fever, RUQ pain, hepatomegaly, leukocytosis / Hepatitis alcoholica: ictericia, fiebre, dolor', 'Cirrhosis: ascites, variceal bleeding, encephalopathy, spider angiomata, gynecomastia, palmar erythema, caput medusae / Cirrosis: ascitis, sangrado variceal, encefalopatia', 'Malnutrition / Desnutricion'],
    ['Thorough alcohol history (AUDIT questionnaire)', 'AST:ALT ratio >2:1 (classic)', 'Elevated GGT (sensitive for alcohol use)', 'Elevated MCV (macrocytosis)', 'Maddrey discriminant function (>=32 = severe alcoholic hepatitis)', 'MELD score', 'Liver biopsy: steatosis, Mallory-Denk bodies, neutrophilic infiltration, perisinusoidal/pericellular fibrosis', 'FibroScan for fibrosis staging', 'Rule out other causes'],
    'Steatosis: alcohol abstinence (reversible). Alcoholic hepatitis (severe, MDF >=32): prednisolone 40mg/day x28 days (if Lille score <0.45 at day 7 — continue; if >=0.45 — stop, no benefit). Pentoxifylline (alternative if steroids contraindicated — less evidence). NAC as adjunct. Nutritional support (high-calorie, high-protein). Cirrhosis: manage complications. Liver transplant for decompensated cirrhosis (6-month abstinence rule is evolving; select patients with severe alcoholic hepatitis may benefit from early transplant).',
    'Absolute alcohol abstinence (most important intervention), adequate nutrition (high-protein), thiamine/folate/multivitamin supplementation, psychological support, AA or counseling, treat underlying alcohol use disorder. / Abstinencia absoluta de alcohol, nutricion adecuada, suplementos vitaminicos, apoyo psicologico.',
    ['Severe alcoholic hepatitis (jaundice, coagulopathy, fever, encephalopathy)', 'Variceal hemorrhage', 'Hepatic encephalopathy', 'Hepatorenal syndrome', 'Spontaneous bacterial peritonitis'],
    'Alcohol damages the liver progressively from fatty liver to inflammation to scarring (cirrhosis). The most important treatment is stopping alcohol completely — early stages can reverse. / El alcohol dana el higado progresivamente. El tratamiento mas importante es dejar de beber completamente — las etapas tempranas pueden revertirse.',
  ),

  'nafld-nash': gi(
    'nafld-nash', 'NAFLD / NASH (MASLD / MASH)', 'Enfermedad del Higado Graso No Alcoholico / NASH',
    'hepatic', 'DB92.0',
    'Hepatic steatosis (>=5% of hepatocytes) without significant alcohol consumption. NASH (steatohepatitis) includes inflammation and hepatocyte injury, progressing to fibrosis and cirrhosis. Now termed MASLD/MASH (metabolic dysfunction-associated).',
    ['Obesity (especially central)', 'Type 2 diabetes mellitus', 'Metabolic syndrome', 'Dyslipidemia', 'Polycystic ovary syndrome', 'Obstructive sleep apnea', 'Hypothyroidism', 'Hispanic ethnicity', 'PNPLA3 gene variant'],
    'Insulin resistance drives hepatic de novo lipogenesis and impaired fatty acid oxidation, causing steatosis (first hit). Lipotoxicity, oxidative stress, mitochondrial dysfunction, and ER stress trigger hepatocyte injury and inflammation (NASH — second hit). Activated hepatic stellate cells deposit collagen, leading to progressive fibrosis and eventually cirrhosis.',
    ['Usually asymptomatic / Usualmente asintomatica', 'Fatigue / Fatiga', 'Vague RUQ discomfort', 'Hepatomegaly / Hepatomegalia', 'Incidental finding on imaging or labs', 'Elevated ALT (may be normal even with NASH)', 'Acanthosis nigricans (insulin resistance marker)'],
    ['Liver ultrasound (hyperechoic liver — screening)', 'FIB-4 index (non-invasive fibrosis assessment — first-line triage)', 'FibroScan (vibration-controlled transient elastography)', 'NFS (NAFLD Fibrosis Score)', 'Liver biopsy (gold standard for distinguishing NASH from simple steatosis and grading fibrosis — NAS score)', 'Exclude alcohol use (>20g/day women, >30g/day men), viral hepatitis, autoimmune, Wilson, etc.', 'MRI-PDFF for steatosis quantification'],
    'Lifestyle modification (first-line): weight loss 7-10% reduces steatosis and inflammation, >10% may improve fibrosis. Resmetirom (thyroid hormone receptor-beta agonist — FDA-approved for NASH with fibrosis, first approved drug). Pioglitazone (for NASH with diabetes). Vitamin E 800 IU/day (for NASH without diabetes). GLP-1 agonists (semaglutide — significant benefit). SGLT2 inhibitors. Bariatric surgery if BMI criteria met. Manage comorbidities (diabetes, dyslipidemia, hypertension). Liver transplant for decompensated cirrhosis.',
    'Weight loss through caloric restriction and exercise (150+ min/week moderate intensity), Mediterranean diet, limit fructose and processed foods, avoid alcohol, treat metabolic syndrome components, screen for cardiovascular disease (leading cause of death in NAFLD). / Perdida de peso, dieta mediterranea, limitar fructosa, evitar alcohol, tratar sindrome metabolico.',
    ['Signs of decompensated cirrhosis', 'New liver mass (HCC — can occur even without cirrhosis in NASH)', 'Rapid worsening of liver function tests', 'Cardiovascular events (leading cause of mortality)'],
    'Fatty liver disease from metabolic conditions (obesity, diabetes) can progress to liver scarring. Weight loss of 7-10% through diet and exercise is the most effective treatment. New medications are also available. / La enfermedad del higado graso puede progresar a cirrosis. Perder 7-10% de peso es el tratamiento mas efectivo. Nuevos medicamentos tambien estan disponibles.',
  ),

  'cirrhosis': gi(
    'cirrhosis', 'Cirrhosis and Complications', 'Cirrosis y Complicaciones',
    'hepatic', 'DB93',
    'End-stage chronic liver disease with irreversible fibrosis, regenerative nodules, and distorted hepatic architecture. Complications: portal hypertension, ascites, variceal bleeding, hepatic encephalopathy, hepatorenal syndrome, SBP, HCC.',
    ['Chronic alcohol use', 'Chronic hepatitis B or C', 'NAFLD/NASH', 'Autoimmune hepatitis', 'PBC', 'PSC', 'Hemochromatosis', 'Wilson disease', 'Alpha-1 antitrypsin deficiency', 'Biliary atresia (pediatric)'],
    'Chronic hepatocyte injury activates stellate cells to myofibroblasts, producing excessive collagen (types I and III) and extracellular matrix. Fibrous septa bridge portal tracts and central veins, forming regenerative nodules. Architectural distortion increases intrahepatic vascular resistance, causing sinusoidal portal hypertension (HVPG >5 mmHg; clinically significant >10 mmHg).',
    ['Compensated: may be asymptomatic / Compensada: puede ser asintomatica', 'Fatigue, weakness / Fatiga, debilidad', 'Jaundice / Ictericia', 'Spider angiomata, palmar erythema, gynecomastia, testicular atrophy', 'Ascites / Ascitis', 'Peripheral edema / Edema periferico', 'Variceal bleeding / Sangrado variceal', 'Hepatic encephalopathy (confusion, asterixis, sleep-wake reversal) / Encefalopatia hepatica', 'Easy bruising (coagulopathy) / Moretones faciles', 'Muscle wasting, malnutrition / Desgaste muscular'],
    ['Labs: low albumin, elevated bilirubin, prolonged PT/INR, thrombocytopenia, elevated ammonia', 'MELD score (predicts 3-month mortality, transplant prioritization)', 'Child-Pugh score (A/B/C classification)', 'FibroScan or liver biopsy (diagnosis)', 'Ultrasound with Doppler (portal hypertension, HCC screening)', 'EGD for variceal screening', 'Paracentesis for new-onset ascites (cell count, albumin, culture — SAAG >1.1 = portal HTN)', 'AFP + liver ultrasound q6mo for HCC surveillance'],
    'Treat underlying etiology (alcohol cessation, antivirals, immunosuppression). Ascites: sodium restriction (<2g/day), diuretics (spironolactone + furosemide), large-volume paracentesis with albumin, TIPS for refractory. Variceal bleeding: see esophageal varices entry. Hepatic encephalopathy: lactulose (titrate to 2-3 soft stools/day) + rifaximin. SBP: ceftriaxone or cefotaxime, secondary prophylaxis with norfloxacin/ciprofloxacin. HRS: albumin + midodrine + octreotide or norepinephrine, TIPS, liver transplant. HCC: see hepatocellular carcinoma entry. Liver transplant for decompensated cirrhosis or HCC (Milan criteria).',
    'Sodium restriction <2g/day, alcohol abstinence, adequate protein (1.2-1.5 g/kg/day — do NOT restrict protein), small frequent meals with late-evening snack, avoid NSAIDs and nephrotoxic medications, vaccinations (HAV, HBV, pneumococcal, influenza), fall precautions. / Restriccion de sodio, abstinencia de alcohol, proteina adecuada, comidas frecuentes, evitar antiinflamatorios, vacunas.',
    ['Hematemesis (variceal bleeding)', 'Confusion or altered consciousness (encephalopathy)', 'Fever with ascites (SBP)', 'Rapid abdominal distension', 'Decreased urine output (hepatorenal syndrome)', 'New abdominal mass (HCC)'],
    'Cirrhosis means your liver is heavily scarred and cannot function normally. Managing complications and treating the cause can stabilize the disease. A liver transplant may be needed for severe cases. / La cirrosis significa que su higado esta muy cicatrizado. Manejar complicaciones y tratar la causa estabiliza la enfermedad. Un trasplante puede ser necesario.',
  ),

  'hepatocellular-carcinoma': gi(
    'hepatocellular-carcinoma', 'Hepatocellular Carcinoma (HCC)', 'Carcinoma Hepatocelular (CHC)',
    'hepatic', '2C12',
    'Primary liver malignancy arising from hepatocytes. Most common primary liver cancer. Usually occurs in the setting of cirrhosis (80-90%). 6th most common cancer worldwide.',
    ['Cirrhosis (any etiology)', 'Chronic HBV (can cause HCC without cirrhosis)', 'Chronic HCV', 'Alcoholic liver disease', 'NAFLD/NASH', 'Aflatoxin B1 exposure (Aspergillus — grains, peanuts)', 'Hemochromatosis', 'Alpha-1 antitrypsin deficiency', 'Male sex', 'Obesity and diabetes'],
    'Chronic hepatocyte injury and regeneration in cirrhosis promotes accumulation of genetic and epigenetic alterations. HBV DNA integration directly promotes oncogenesis. Key pathways: Wnt/beta-catenin, p53, telomerase (TERT). Aflatoxin B1 causes p53 R249S hotspot mutation. Tumor has arterial blood supply (unlike normal liver — portal venous), enabling arterial-phase enhancement on imaging.',
    ['Often asymptomatic in early stage (found on surveillance) / Frecuentemente asintomatico temprano', 'RUQ pain or mass / Dolor o masa en hipocondrio derecho', 'Weight loss / Perdida de peso', 'Decompensation of previously stable cirrhosis', 'Paraneoplastic: erythrocytosis, hypercalcemia, hypoglycemia', 'Elevated AFP'],
    ['Surveillance: AFP + liver ultrasound q6 months in all cirrhotics', 'Diagnosis: multiphasic CT or MRI — arterial enhancement with washout (LI-RADS 5 = definitive HCC)', 'Biopsy only if imaging indeterminate', 'AFP (elevated in ~50%)', 'Staging: BCLC system (0, A, B, C, D)', 'Liver function assessment (Child-Pugh, MELD)'],
    'BCLC 0-A (early): curative intent — resection (non-cirrhotic or preserved function), liver transplant (Milan criteria: single <=5cm or up to 3 <=3cm), ablation (RFA, MWA for <=3cm). BCLC B (intermediate): transarterial chemoembolization (TACE). BCLC C (advanced): systemic therapy — atezolizumab + bevacizumab (first-line), sorafenib, lenvatinib, nivolumab + ipilimumab, cabozantinib. BCLC D (terminal): best supportive care.',
    'Avoid alcohol, manage cirrhosis optimally, adequate nutrition, adherence to HCC surveillance, hepatitis B treatment adherence. / Evitar alcohol, manejar cirrosis, nutricion adecuada, adherencia a vigilancia de CHC.',
    ['Tumor rupture (acute abdominal pain, hemorrhagic shock)', 'Rapid hepatic decompensation', 'Portal vein thrombosis by tumor', 'Severe variceal bleeding'],
    'HCC is a liver cancer that usually develops in a damaged (cirrhotic) liver. Regular screening with ultrasound and blood tests catches it early when treatment is most effective. Options range from removing the tumor to liver transplant. / El CHC es un cancer hepatico que usualmente se desarrolla en un higado cirrotico. Las pruebas regulares lo detectan temprano cuando el tratamiento es mas efectivo.',
  ),

  'liver-abscess': gi(
    'liver-abscess', 'Liver Abscess (Pyogenic and Amebic)', 'Absceso Hepatico (Piogeno y Amebiano)',
    'hepatic', 'DB99',
    'Localized collection of pus within the hepatic parenchyma. Pyogenic (bacterial): polymicrobial, biliary source most common. Amebic: Entamoeba histolytica, most common in endemic areas.',
    ['Pyogenic: biliary disease (choledocholithiasis, cholangitis), portal seeding (diverticulitis, appendicitis), hepatic artery seeding (endocarditis), direct extension, post-procedural, cryptogenic', 'Amebic: travel to/residence in endemic areas (Mexico, Central America, India, Africa), MSM, fecal-oral transmission'],
    'Pyogenic: bacteria reach the liver via biliary tree (ascending cholangitis), portal vein (GI infections), hepatic artery (septicemia), or direct extension. Common organisms: E. coli, Klebsiella, Streptococcus, Bacteroides, anaerobes. Klebsiella pneumoniae (K1 serotype) causes a distinct hypermucoviscous liver abscess syndrome endemic in East Asia. Amebic: E. histolytica trophozoites invade colonic mucosa, reach liver via portal vein, cause liquefactive necrosis (anchovy paste contents).',
    ['Fever (most common) / Fiebre', 'RUQ pain / Dolor en hipocondrio derecho', 'Hepatomegaly / Hepatomegalia', 'Malaise, anorexia / Malestar, anorexia', 'Jaundice (if biliary source) / Ictericia', 'Right pleuritic pain (diaphragmatic irritation)', 'Amebic: recent travel history, diarrhea may be absent'],
    ['CT abdomen with contrast (ring-enhancing lesion — single or multiple)', 'Blood cultures (positive in 50% of pyogenic)', 'Labs: leukocytosis, elevated ALP, elevated ESR/CRP', 'Amebic serology: anti-amebic antibodies (>90% sensitive)', 'Percutaneous aspiration: pyogenic = purulent, amebic = chocolate/anchovy paste (often sterile on culture)', 'Stool O&P for amebic cysts (only 10-40% positive)', 'Ultrasound: hypoechoic hepatic lesion'],
    'Pyogenic: percutaneous drainage (CT or US-guided) + IV antibiotics (empiric: ceftriaxone + metronidazole or piperacillin-tazobactam, then tailored to culture). Small abscesses (<3-5 cm): antibiotics alone may suffice. Surgical drainage if percutaneous fails. 4-6 weeks total antibiotics. Treat underlying biliary source. Amebic: metronidazole 750mg TID x10 days (or tinidazole) followed by luminal agent (paromomycin 25-35 mg/kg/day x7d) to eliminate intestinal cysts. Drainage if >5 cm, left lobe (rupture risk), or no response to 5-7 days of metronidazole.',
    'Complete antibiotic course, follow-up imaging to confirm resolution, treat underlying biliary disease. Amebic: hand hygiene, safe water/food in endemic areas. / Completar antibioticos, imagen de seguimiento, tratar enfermedad biliar subyacente. Amebiano: higiene de manos, agua y alimentos seguros.',
    ['Rupture (intraperitoneal — pyogenic; into pleura/pericardium — amebic left lobe)', 'Sepsis (high fever, hemodynamic instability)', 'Failure to respond to antibiotics', 'Secondary bacterial infection of amebic abscess'],
    'A liver abscess is a pocket of infection in the liver. The pyogenic type is treated with drainage and antibiotics. The amebic type from a parasite is treated with specific medication. / Un absceso hepatico es un bolsillo de infeccion en el higado. El tipo piogeno se trata con drenaje y antibioticos. El tipo amebiano se trata con medicamento especifico.',
  ),

  'budd-chiari-syndrome': gi(
    'budd-chiari-syndrome', 'Budd-Chiari Syndrome', 'Sindrome de Budd-Chiari',
    'hepatic', 'DB99.3',
    'Hepatic venous outflow obstruction at the level of the hepatic veins or IVC, causing hepatic congestion, sinusoidal hypertension, and ischemic liver injury.',
    ['Myeloproliferative neoplasms (PV, ET — most common cause, often occult JAK2 V617F mutation)', 'Thrombophilia (Factor V Leiden, protein C/S deficiency, antithrombin III deficiency)', 'Oral contraceptives/pregnancy', 'PNH', 'Antiphospholipid syndrome', 'Behcet disease', 'Membranous IVC web (Asia)'],
    'Thrombosis or non-thrombotic obstruction of hepatic veins causes sinusoidal congestion, centrilobular ischemia/necrosis, and eventually fibrosis. Elevated sinusoidal pressure causes portal hypertension. Caudate lobe hypertrophy occurs because it drains directly into the IVC via separate hepatic veins. Acute, subacute, or chronic presentation.',
    ['Acute: rapid-onset RUQ pain, hepatomegaly, ascites / Agudo: dolor rapido, hepatomegalia, ascitis', 'Subacute (most common): progressive ascites and hepatomegaly', 'Chronic: cirrhosis-like presentation', 'Jaundice / Ictericia', 'Lower extremity edema (IVC involvement)', 'Classic triad: abdominal pain, hepatomegaly, ascites'],
    ['Doppler ultrasound (absent or reversed flow in hepatic veins — first-line)', 'CT/MRI with contrast: hepatic vein thrombosis, heterogeneous liver enhancement (nutmeg pattern), caudate lobe hypertrophy', 'Hepatic venography (gold standard — spider-web pattern of collaterals)', 'Labs: elevated ALT/AST, elevated bilirubin, ascitic fluid analysis (high protein >2.5 g/dL, high SAAG)', 'Thrombophilia workup: JAK2 V617F, factor V Leiden, PNH flow cytometry, antiphospholipid antibodies'],
    'Stepwise approach. Anticoagulation (all patients — heparin then warfarin/DOACs). Treat underlying cause (myeloproliferative neoplasm: hydroxyurea + phlebotomy for PV). Symptomatic ascites: diuretics, paracentesis. Angioplasty/stenting of hepatic vein or IVC stenosis. TIPS (transjugular intrahepatic portosystemic shunt) for refractory disease. Liver transplant for fulminant or decompensated disease unresponsive to TIPS. Thrombolysis for acute presentation.',
    'Lifelong anticoagulation adherence, treat underlying hematologic condition, monitor liver function, sodium restriction for ascites. / Adherencia a anticoagulacion de por vida, tratar condicion hematologica subyacente, monitorear funcion hepatica.',
    ['Acute liver failure (encephalopathy, coagulopathy)', 'Massive ascites with respiratory compromise', 'Variceal hemorrhage', 'Renal failure'],
    'Budd-Chiari syndrome means the veins draining your liver are blocked, causing liver congestion and fluid buildup. Blood thinners and procedures to open the veins are the main treatments. / El sindrome de Budd-Chiari significa que las venas que drenan su higado estan bloqueadas. Anticoagulantes y procedimientos para abrir las venas son el tratamiento principal.',
  ),

  'portal-vein-thrombosis': gi(
    'portal-vein-thrombosis', 'Portal Vein Thrombosis', 'Trombosis de Vena Porta',
    'hepatic', 'DB99.4',
    'Thrombotic occlusion of the portal vein, causing portal hypertension. Can be acute (abdominal pain, bowel ischemia risk) or chronic (cavernous transformation, portal hypertensive complications).',
    ['Cirrhosis (most common cause)', 'Myeloproliferative neoplasms', 'Thrombophilia', 'Intra-abdominal inflammation (pancreatitis, diverticulitis)', 'Abdominal surgery or trauma', 'Hepatocellular carcinoma (tumor thrombus)', 'Oral contraceptives', 'Neonatal: umbilical vein catheterization/omphalitis'],
    'Portal vein thrombosis increases portal venous pressure. Acute PVT: intestinal congestion may lead to bowel ischemia if mesenteric veins involved. Chronic PVT: collateral vessels develop (cavernous transformation — portal cavernoma), portal hypertension with varices and splenomegaly. Hepatic function is typically preserved (non-cirrhotic PVT) because hepatic artery compensates.',
    ['Acute: abdominal pain, nausea, fever, bloody diarrhea if mesenteric ischemia / Agudo: dolor abdominal, diarrea sanguinolenta', 'Chronic: often incidental finding, splenomegaly, variceal bleeding, ascites', 'Pylephlebitis: septic PVT with fever and bacteremia'],
    ['Doppler ultrasound (absent flow in portal vein — first-line)', 'CT with contrast (portal phase): intraluminal filling defect, cavernous transformation if chronic', 'MRI/MRA', 'Labs: CBC (cytopenias from hypersplenism), liver function (often normal in non-cirrhotic)', 'Thrombophilia workup', 'Evaluate for underlying cirrhosis or malignancy'],
    'Acute non-cirrhotic: anticoagulation (LMWH then warfarin for >=6 months, lifelong if thrombophilia). Acute with mesenteric ischemia: surgery or thrombolysis. Septic PVT (pylephlebitis): broad-spectrum antibiotics + anticoagulation. Chronic with varices: beta-blockers and/or EVL for prophylaxis, TIPS if needed. Cirrhotic PVT: anticoagulation if transplant candidate or mesenteric extension.',
    'Anticoagulation adherence, monitor for variceal development, treat underlying condition. / Adherencia a anticoagulacion, monitorear varices, tratar condicion subyacente.',
    ['Acute severe abdominal pain (mesenteric ischemia/infarction)', 'Bloody diarrhea with peritoneal signs', 'High fever (pylephlebitis/sepsis)', 'Variceal hemorrhage'],
    'A blood clot in your portal vein (the main vein carrying blood to your liver) can cause abdominal pain and complications. Blood thinners dissolve and prevent further clots. / Un coagulo en la vena porta puede causar dolor abdominal y complicaciones. Los anticoagulantes disuelven y previenen mas coagulos.',
  ),

  'wilson-disease': gi(
    'wilson-disease', 'Wilson Disease', 'Enfermedad de Wilson',
    'hepatic', '5C64.00',
    'Autosomal recessive disorder of copper metabolism caused by ATP7B gene mutations, leading to copper accumulation in the liver, brain, cornea, and other organs.',
    ['ATP7B gene mutation (autosomal recessive)', 'Family history', 'Age 5-40 at presentation'],
    'ATP7B protein normally incorporates copper into ceruloplasmin and excretes excess copper into bile. Loss of function causes copper accumulation in hepatocytes (causing liver disease), basal ganglia (neuropsychiatric disease), Descemet membrane (Kayser-Fleischer rings), and kidneys. Free copper generates reactive oxygen species causing oxidative tissue injury.',
    ['Hepatic: chronic hepatitis, cirrhosis, acute liver failure (especially in young adults) / Hepatico: hepatitis cronica, cirrosis, falla hepatica aguda', 'Neurologic: tremor, dysarthria, dystonia, parkinsonism, drooling / Neurologico: temblor, disartria, distonia', 'Psychiatric: personality changes, depression, psychosis', 'Kayser-Fleischer rings (copper in Descemet membrane — pathognomonic)', 'Hemolytic anemia (Coombs-negative)', 'Renal: Fanconi syndrome'],
    ['Low serum ceruloplasmin (<20 mg/dL)', 'Elevated 24-hour urine copper (>100 mcg/day, >40 suggestive)', 'Slit-lamp exam: Kayser-Fleischer rings (present in 95% of neurologic Wilson, 50% of hepatic)', 'Liver biopsy: hepatic copper content (>250 mcg/g dry weight — gold standard)', 'ATP7B genetic testing', 'Low serum copper (low ceruloplasmin-bound), elevated free copper', 'Leipzig scoring system for diagnosis'],
    'Lifelong treatment. Chelation: D-penicillamine (first-line chelator) or trientine (better tolerated). Zinc acetate (blocks intestinal copper absorption — maintenance or initial mild disease). Combination chelation + zinc in severe cases. Acute liver failure: liver transplant (urgent). Monitor 24h urine copper and free copper for treatment response. Screen siblings (25% risk).',
    'Low-copper diet (avoid organ meats, shellfish, nuts, chocolate, mushrooms), use copper-free water if pipes are copper, lifelong medication adherence, family screening. / Dieta baja en cobre (evitar visceras, mariscos, nueces, chocolate), adherencia a medicamentos de por vida, evaluar familiares.',
    ['Acute liver failure in young person (fulminant Wilson)', 'Neurologic deterioration', 'Hemolytic crisis', 'Severe hepatic decompensation'],
    'Wilson disease causes copper to build up in your liver and brain due to a genetic mutation. Lifelong medication removes excess copper and prevents organ damage. Family members should be tested. / La enfermedad de Wilson causa acumulacion de cobre en el higado y cerebro. Medicamento de por vida remueve el exceso de cobre. Los familiares deben ser evaluados.',
  ),

  'hemochromatosis': gi(
    'hemochromatosis', 'Hereditary Hemochromatosis', 'Hemocromatosis Hereditaria',
    'hepatic', '5C64.01',
    'Autosomal recessive iron overload disorder caused by HFE gene mutations (C282Y most common), leading to excess iron absorption and organ damage (liver, heart, pancreas, joints).',
    ['C282Y homozygosity (HFE gene — most common)', 'H63D compound heterozygosity', 'Male sex (clinical disease — women protected by menstruation)', 'Northern European descent (Celtic origin)', 'Age >40 at clinical presentation'],
    'HFE gene mutations cause inappropriately low hepcidin production, the master iron-regulatory hormone. Low hepcidin increases ferroportin-mediated intestinal iron absorption and macrophage iron release. Progressive iron deposition in parenchymal cells causes oxidative damage. Classic triad: cirrhosis, diabetes mellitus, skin hyperpigmentation ("bronze diabetes").',
    ['Often asymptomatic until advanced / Frecuentemente asintomatico hasta avanzado', 'Fatigue (most common early symptom) / Fatiga', 'Arthralgias (2nd-3rd MCP joints — classic) / Artralgias', 'Hepatomegaly, cirrhosis / Hepatomegalia, cirrosis', 'Diabetes mellitus / Diabetes mellitus', 'Skin hyperpigmentation (bronze) / Hiperpigmentacion cutanea', 'Cardiomyopathy (dilated) / Miocardiopatia', 'Hypogonadism (pituitary iron deposition) / Hipogonadismo', 'Hypothyroidism'],
    ['Elevated transferrin saturation (>45% — best screening test)', 'Elevated serum ferritin (>300 men, >200 women)', 'HFE genotyping (C282Y, H63D)', 'Liver MRI with T2* (quantify hepatic iron — replacing biopsy)', 'Liver biopsy: Prussian blue staining (hepatic iron), fibrosis assessment, hepatic iron index (>1.9)', 'Screen first-degree relatives', 'Assess for end-organ damage: glucose, echo, LFTs, testosterone, DEXA'],
    'Therapeutic phlebotomy — cornerstone: remove 500mL blood (250mg iron) weekly until ferritin <50 ng/mL and transferrin saturation <50%, then maintenance phlebotomy q2-4 months. Iron chelation (deferoxamine, deferasirox) only if phlebotomy contraindicated (anemia, heart failure). Manage complications: diabetes, cirrhosis, cardiomyopathy. HCC surveillance if cirrhotic. Liver transplant for decompensated cirrhosis.',
    'Avoid iron supplements and vitamin C (enhances iron absorption), limit red meat, avoid alcohol (synergistic liver toxicity), avoid raw shellfish (Vibrio vulnificus risk — iron overload increases susceptibility). / Evitar suplementos de hierro y vitamina C, limitar carne roja, evitar alcohol, evitar mariscos crudos.',
    ['Signs of decompensated cirrhosis', 'Heart failure or arrhythmias (cardiac iron overload)', 'Severe hepatic decompensation', 'New liver mass (HCC — 200x increased risk with cirrhosis)'],
    'Hemochromatosis causes your body to absorb too much iron, which damages organs over time. Regular blood removal (phlebotomy) lowers iron levels and prevents complications. Family members should be tested. / La hemocromatosis causa que su cuerpo absorba demasiado hierro. La extraccion regular de sangre baja los niveles de hierro. Los familiares deben ser evaluados.',
  ),

  'alpha1-antitrypsin-deficiency-hepatic': gi(
    'alpha1-antitrypsin-deficiency-hepatic', 'Alpha-1 Antitrypsin Deficiency (Hepatic)', 'Deficiencia de Alfa-1 Antitripsina (Hepatica)',
    'hepatic', '5C54',
    'Autosomal codominant disorder causing misfolded alpha-1 antitrypsin (AAT) protein accumulation in hepatocytes (PiZZ phenotype), leading to chronic liver disease, cirrhosis, and HCC.',
    ['PiZZ homozygosity (most severe — 10-15% develop clinically significant liver disease)', 'PiMZ heterozygosity (possible mild risk)', 'Northern European descent'],
    'Mutant Z-type AAT protein misfolds in the endoplasmic reticulum of hepatocytes and cannot be secreted. Accumulated polymer aggregates form PAS-positive, diastase-resistant globules that trigger ER stress, hepatocyte apoptosis, inflammation, and fibrosis. Liver disease is from toxic gain-of-function (protein accumulation), while lung disease is from loss-of-function (uninhibited neutrophil elastase).',
    ['Neonatal hepatitis and cholestasis / Hepatitis neonatal y colestasis', 'Childhood: hepatitis or cirrhosis', 'Adults: chronic hepatitis, cirrhosis, HCC', 'May present concurrently with emphysema (panacinar, basal predominant)', 'Often asymptomatic liver disease discovered incidentally'],
    ['Serum alpha-1 antitrypsin level (low <80 mg/dL in PiZZ)', 'AAT phenotyping (isoelectric focusing) or genotyping (Pi typing — PiMM normal, PiZZ disease)', 'Liver biopsy: PAS-positive, diastase-resistant globules in periportal hepatocytes (pathognomonic)', 'Liver function tests, fibrosis assessment', 'Pulmonary function tests and CT chest for lung involvement'],
    'No specific hepatic therapy (AAT augmentation therapy only benefits lung disease, not liver). Manage liver disease as per standard cirrhosis care. Avoid alcohol and hepatotoxins. Liver transplant for decompensated cirrhosis (curative — donor liver produces normal AAT). HCC surveillance if cirrhotic. Genetic counseling.',
    'Avoid alcohol, avoid smoking (lung protection), hepatotoxin avoidance, genetic counseling for family planning, vaccination against hepatitis A and B. / Evitar alcohol, no fumar, evitar hepatotoxinas, consejeria genetica, vacunas contra hepatitis.',
    ['Signs of decompensated cirrhosis', 'Neonatal cholestasis not resolving', 'New liver mass (HCC)', 'Worsening liver function'],
    'Alpha-1 antitrypsin deficiency causes an abnormal protein to build up in liver cells, potentially leading to liver damage. Avoiding alcohol and monitoring liver health is important. Liver transplant cures the liver disease. / La deficiencia de alfa-1 antitripsina causa que una proteina anormal se acumule en el higado. Evitar alcohol y monitorear el higado es importante.',
  ),

  'drug-induced-liver-injury': gi(
    'drug-induced-liver-injury', 'Drug-Induced Liver Injury (DILI)', 'Lesion Hepatica Inducida por Medicamentos',
    'hepatic', 'DB95',
    'Liver injury caused by medications, supplements, or toxins. Leading cause of acute liver failure in the US. Can be dose-dependent (intrinsic — acetaminophen) or idiosyncratic (unpredictable).',
    ['Acetaminophen overdose (most common DILI cause)', 'Antibiotics (amoxicillin-clavulanate most common idiosyncratic)', 'NSAIDs', 'Statins', 'Anti-epileptics (valproate, phenytoin, carbamazepine)', 'Anti-TB drugs (isoniazid, rifampin, pyrazinamide)', 'Herbal supplements (kava, black cohosh, green tea extract)', 'Immune checkpoint inhibitors', 'Anabolic steroids', 'Alcohol', 'Female sex', 'Older age', 'Pre-existing liver disease'],
    'Intrinsic (dose-dependent): acetaminophen metabolized by CYP2E1 to NAPQI, a toxic metabolite normally detoxified by glutathione. Overdose depletes glutathione -> NAPQI binds hepatocyte proteins -> centrilobular necrosis. Idiosyncratic: immune-mediated or metabolic susceptibility, unpredictable, not dose-dependent. Patterns: hepatocellular (ALT-predominant, R>5), cholestatic (ALP-predominant, R<2), mixed (R 2-5).',
    ['Nausea, vomiting, RUQ pain / Nausea, vomito, dolor en hipocondrio derecho', 'Jaundice / Ictericia', 'Fatigue, malaise / Fatiga, malestar', 'Rash, eosinophilia (drug hypersensitivity / DRESS syndrome)', 'Acetaminophen: 4 stages (nausea -> apparent improvement -> liver failure -> recovery or death)', 'Asymptomatic transaminase elevation (common, often transient)'],
    ['Temporal relationship to drug exposure (critical)', 'ALT, AST, ALP, bilirubin pattern (R-value: ALT/ULN divided by ALP/ULN)', 'Exclude other causes (viral serologies, autoimmune markers, imaging)', 'RUCAM (Roussel Uclaf Causality Assessment Method) score', 'Acetaminophen level and Rumack-Matthew nomogram', 'Hy law: ALT >3x ULN + bilirubin >2x ULN without ALP elevation = >10% risk of fatal outcome', 'Liver biopsy if diagnosis uncertain'],
    'Discontinue offending agent immediately. Acetaminophen: N-acetylcysteine (NAC) — IV or oral, most effective within 8h but beneficial up to 72h. Idiosyncratic DILI: supportive care; corticosteroids for immune-mediated DILI (checkpoint inhibitor-induced, DRESS). Monitor for acute liver failure: refer for transplant evaluation if INR >1.5 with encephalopathy. King College Criteria for transplant listing.',
    'Avoid re-exposure to causative agent, limit acetaminophen to <2g/day (lower with alcohol use or liver disease), avoid combining hepatotoxic drugs, read supplement labels, report all medications to your doctor. / Evitar re-exposicion, limitar acetaminofen, evitar combinar hepatotoxicos, leer etiquetas de suplementos.',
    ['Acetaminophen overdose — immediate emergency room', 'Jaundice with coagulopathy (INR >1.5)', 'Encephalopathy (confusion, somnolence)', 'Rapidly rising bilirubin', 'Severe nausea/vomiting after new medication'],
    'Some medications and supplements can injure the liver. The most common is acetaminophen overdose, which has a specific antidote. For other drugs, stopping the medication usually allows recovery. / Algunos medicamentos pueden danar el higado. El mas comun es la sobredosis de acetaminofen, que tiene un antidoto especifico. Suspender el medicamento usualmente permite la recuperacion.',
  ),

  'gilbert-syndrome': gi(
    'gilbert-syndrome', 'Gilbert Syndrome', 'Sindrome de Gilbert',
    'hepatic', '5C58.00',
    'Benign autosomal recessive condition with intermittent unconjugated hyperbilirubinemia due to reduced UGT1A1 enzyme activity. Affects 5-10% of the population. No liver damage.',
    ['Genetic: UGT1A1 promoter polymorphism (TA repeat — decreased enzyme expression)', 'Triggers: fasting, stress, illness, exercise, menstruation, sleep deprivation'],
    'Reduced (30%) UGT1A1 (UDP-glucuronosyltransferase) activity decreases hepatic bilirubin conjugation. Mild unconjugated hyperbilirubinemia fluctuates with triggers (fasting, stress). No hemolysis, no liver cell damage. Completely benign.',
    ['Intermittent mild jaundice (especially scleral icterus) / Ictericia leve intermitente', 'Triggered by fasting, stress, illness / Desencadenada por ayuno, estres, enfermedad', 'Otherwise asymptomatic', 'Often discovered incidentally on blood tests', 'Some report fatigue and abdominal discomfort (functional)'],
    ['Unconjugated (indirect) hyperbilirubinemia <5 mg/dL (usually <3)', 'Normal liver enzymes (ALT, AST, ALP, GGT)', 'Normal CBC (no hemolysis — reticulocyte count, haptoglobin, LDH normal)', 'Bilirubin rises with fasting (fasting test) or decreases with phenobarbital (rarely needed)', 'Diagnosis of exclusion — rule out hemolysis and liver disease', 'Genetic testing available but rarely needed'],
    'No treatment necessary. Reassurance that it is benign and does not cause liver disease. Avoid prolonged fasting. Be aware that irinotecan and atazanavir toxicity may be increased (UGT1A1 substrate drugs). No dietary restrictions needed.',
    'Adequate hydration, regular meals (avoid prolonged fasting), manage stress, reassurance. / Hidratacion adecuada, comidas regulares, manejar estres, tranquilizacion.',
    ['Gilbert syndrome itself does NOT cause emergencies. Seek care only for: bilirubin >5 mg/dL (consider other causes), signs of hemolysis, or abnormal liver enzymes'],
    'Gilbert syndrome is a very common, harmless genetic condition that sometimes causes mild yellowing of your eyes. It does not damage your liver and requires no treatment. / El sindrome de Gilbert es una condicion genetica comun e inofensiva que a veces causa leve coloracion amarilla de los ojos. No dana su higado y no requiere tratamiento.',
  ),

  'crigler-najjar-syndrome': gi(
    'crigler-najjar-syndrome', 'Crigler-Najjar Syndrome', 'Sindrome de Crigler-Najjar',
    'hepatic', '5C58.01',
    'Rare autosomal recessive disorder of bilirubin conjugation due to UGT1A1 deficiency. Type I: absent activity (severe, neonatal kernicterus risk). Type II: markedly reduced activity (moderate, responds to phenobarbital).',
    ['UGT1A1 gene mutation (autosomal recessive)', 'Consanguinity increases risk', 'Family history'],
    'Type I: complete absence of UGT1A1 activity, no bilirubin conjugation possible. Severe unconjugated hyperbilirubinemia (>20 mg/dL) from birth causes kernicterus (bilirubin encephalopathy) without treatment. Type II (Arias syndrome): partial UGT1A1 activity, moderate hyperbilirubinemia (6-20 mg/dL), responds to phenobarbital (enzyme inducer), no kernicterus risk.',
    ['Type I: severe jaundice from birth, kernicterus (bilirubin encephalopathy — spasticity, deafness, intellectual disability)', 'Type II: moderate jaundice, typically no neurologic sequelae', 'No signs of liver disease or hemolysis'],
    ['Severely elevated unconjugated bilirubin (Type I: >20 mg/dL; Type II: 6-20 mg/dL)', 'Normal liver enzymes and liver histology', 'No hemolysis (normal reticulocytes, haptoglobin, LDH)', 'Type II: bilirubin decreases >30% with phenobarbital trial (differentiates from Type I)', 'Genetic testing for UGT1A1 mutations', 'Bile analysis: Type I — no conjugated bilirubin; Type II — some conjugated bilirubin'],
    'Type I: phototherapy 10-12 hours daily (converts bilirubin to water-soluble photoisomers excreted in bile). Liver transplant (curative — only definitive treatment). Hepatocyte transplant (experimental). Plasmapheresis for bilirubin crises. Type II: phenobarbital (induces residual UGT1A1 activity, reduces bilirubin by 25-30%). Avoid drugs that displace bilirubin from albumin.',
    'Type I: daily phototherapy compliance, avoid bilirubin-displacing drugs, protect skin from phototherapy effects, prepare for liver transplant. Type II: medication adherence. / Tipo I: cumplimiento de fototerapia, evitar medicamentos que desplacen bilirrubina, preparar para trasplante. Tipo II: adherencia a medicamentos.',
    ['Type I: any illness or drug that raises bilirubin (kernicterus risk)', 'Bilirubin >20 mg/dL', 'Signs of kernicterus (opisthotonus, hypertonia, seizures)', 'Phototherapy equipment failure'],
    'Crigler-Najjar syndrome is a rare genetic condition where the liver cannot properly process bilirubin. Type I is severe and requires daily light therapy and eventually liver transplant. Type II is milder and responds to medication. / El sindrome de Crigler-Najjar es una condicion genetica rara. El Tipo I requiere fototerapia diaria y eventualmente trasplante. El Tipo II responde a medicamento.',
  ),

  'dubin-johnson-syndrome': gi(
    'dubin-johnson-syndrome', 'Dubin-Johnson Syndrome', 'Sindrome de Dubin-Johnson',
    'hepatic', '5C58.02',
    'Benign autosomal recessive condition with conjugated hyperbilirubinemia due to defective canalicular export of conjugated bilirubin (ABCC2/MRP2 mutation). Liver appears grossly black from melanin-like pigment accumulation.',
    ['ABCC2 (MRP2) gene mutation (autosomal recessive)', 'Family history', 'More common in Sephardic Jews and Iranian Jews'],
    'Mutation in ABCC2 (MRP2 — multidrug resistance-associated protein 2) impairs canalicular excretion of conjugated bilirubin and other organic anions into bile. Conjugated bilirubin refluxes into blood. Melanin-like pigment (lipofuscin) accumulates in hepatocytes giving the liver a grossly black appearance. Completely benign.',
    ['Intermittent mild jaundice / Ictericia leve intermitente', 'Often discovered incidentally', 'May worsen with illness, pregnancy, or oral contraceptives', 'Otherwise asymptomatic'],
    ['Conjugated (direct) hyperbilirubinemia (usually 2-5 mg/dL)', 'Normal liver enzymes', 'Coproporphyrin analysis: total urine coproporphyrin normal but ratio shifted (>80% isomer I vs normal ~25%)', 'Liver biopsy: dense melanin-like (lipofuscin) pigment in hepatocytes (black liver)', 'HIDA scan: delayed visualization of gallbladder and bile ducts', 'Genetic testing for ABCC2 mutation'],
    'No treatment necessary. Benign condition. Reassurance. Avoid oral contraceptives if jaundice worsens. Genetic counseling for family planning.',
    'Normal lifestyle, no restrictions needed, reassurance that condition is benign. / Estilo de vida normal, sin restricciones, condicion benigna.',
    ['Dubin-Johnson does NOT cause emergencies. Seek care for bilirubin >10 mg/dL (consider other causes) or new symptoms suggesting liver disease'],
    'Dubin-Johnson syndrome is a harmless genetic condition causing mild intermittent jaundice. Your liver is healthy and no treatment is needed. / El sindrome de Dubin-Johnson es una condicion genetica inofensiva que causa ictericia leve intermitente. Su higado esta sano y no se necesita tratamiento.',
  ),

  // ==========================================================================
  //  BILIARY (8)
  // ==========================================================================

  'cholelithiasis': gi(
    'cholelithiasis', 'Cholelithiasis (Gallstones)', 'Colelitiasis (Calculos Biliares)',
    'biliary', 'DC11',
    'Stones in the gallbladder. Cholesterol stones (80% in Western world) and pigment stones (black — hemolysis; brown — biliary infection). Most gallstones are asymptomatic.',
    ['Female sex (4F: Fat, Fertile, Forty, Female)', 'Obesity', 'Rapid weight loss', 'Pregnancy', 'Age >40', 'Native American and Hispanic ethnicity', 'Family history', 'Diabetes', 'Hemolytic disorders (sickle cell — pigment stones)', 'Cirrhosis', 'TPN', 'Crohn disease (ileal — bile salt malabsorption)', 'Estrogen therapy'],
    'Cholesterol stones: bile supersaturated with cholesterol (increased cholesterol, decreased bile salts/phospholipids), gallbladder hypomotility, and crystal nucleation. Black pigment stones: excess unconjugated bilirubin (chronic hemolysis, cirrhosis) polymerizes with calcium. Brown pigment stones: bacterial infection deconjugates bilirubin in bile ducts.',
    ['Asymptomatic (80%) / Asintomatica (80%)', 'Biliary colic: episodic RUQ/epigastric pain after fatty meals, lasting 30 min to several hours, resolving / Colico biliar: dolor en hipocondrio derecho despues de comidas grasas', 'Nausea / Nausea', 'Referred pain to right scapula / Dolor referido a escapula derecha'],
    ['RUQ ultrasound (gold standard — hyperechoic focus with posterior acoustic shadowing)', 'Labs usually normal in uncomplicated cholelithiasis', 'HIDA scan if ultrasound negative but biliary colic suspected'],
    'Asymptomatic: observation (prophylactic cholecystectomy only if porcelain gallbladder, large >3 cm stones, or gallbladder polyps >1 cm). Symptomatic (biliary colic): elective laparoscopic cholecystectomy. Medical dissolution: ursodeoxycholic acid for small cholesterol stones in non-surgical candidates (slow, high recurrence). NSAIDs for acute colic pain.',
    'Low-fat diet may reduce colic episodes, maintain healthy weight, avoid rapid weight loss, regular meals, adequate fiber. / Dieta baja en grasa, mantener peso saludable, evitar perder peso rapidamente, comidas regulares.',
    ['Persistent RUQ pain >6 hours with fever (cholecystitis)', 'Jaundice (CBD stone)', 'Severe pain with nausea/vomiting not resolving', 'Pancreatitis symptoms (epigastric pain radiating to back)'],
    'Gallstones are hardened deposits in your gallbladder. Most cause no problems. If they cause pain after fatty meals, surgery to remove the gallbladder is the definitive treatment. / Los calculos biliares son depositos solidos en su vesicula. La mayoria no causa problemas. Si causan dolor, la cirugia para remover la vesicula es el tratamiento definitivo.',
  ),

  'acute-cholecystitis': gi(
    'acute-cholecystitis', 'Acute Cholecystitis', 'Colecistitis Aguda',
    'biliary', 'DC12',
    'Acute inflammation of the gallbladder, usually from cystic duct obstruction by a gallstone (calculous — 90%) or without stones (acalculous — 10%, critically ill patients).',
    ['Cholelithiasis (most common)', 'Acalculous: critical illness, ICU, TPN, diabetes, HIV, vasculitis', 'Prior biliary colic episodes'],
    'Cystic duct obstruction by a stone traps bile, causing gallbladder distension. Chemical inflammation from concentrated bile salts progresses to secondary bacterial infection (E. coli, Klebsiella, Enterococcus). If untreated: empyema, gangrene, perforation. Acalculous: gallbladder ischemia and stasis in critically ill.',
    ['Persistent RUQ pain >6 hours (unlike colic which resolves) / Dolor persistente en hipocondrio derecho >6 horas', 'Fever / Fiebre', 'Nausea and vomiting / Nausea y vomito', 'Murphy sign (inspiratory arrest during RUQ palpation — classic) / Signo de Murphy positivo', 'RUQ guarding', 'Leukocytosis'],
    ['RUQ ultrasound: gallstones, gallbladder wall thickening >3mm, pericholecystic fluid, sonographic Murphy sign', 'Labs: leukocytosis, CRP elevated, LFTs may be mildly elevated', 'HIDA scan (if ultrasound equivocal): non-visualization of gallbladder = cystic duct obstruction (95% sensitive)', 'CT if complications suspected (perforation, abscess)'],
    'Early laparoscopic cholecystectomy within 72 hours (preferred — same hospitalization). IV antibiotics (ceftriaxone + metronidazole or piperacillin-tazobactam). NPO, IV fluids, analgesics. High-risk surgical patients: percutaneous cholecystostomy tube drainage. Chronic cholecystitis: elective cholecystectomy. Gangrenous or perforated: emergent surgery.',
    'Post-cholecystectomy: gradual fat reintroduction, most tolerate normal diet within weeks, some develop post-cholecystectomy diarrhea (bile acid — treated with cholestyramine). / Post-colecistectomia: reintroduccion gradual de grasas, la mayoria tolera dieta normal en semanas.',
    ['Persistent high fever (empyema or perforation)', 'Peritoneal signs (rigid abdomen)', 'Charcot triad: fever + jaundice + RUQ pain (cholangitis)', 'Reynold pentad: adds hypotension + altered mental status (severe cholangitis)'],
    'Your gallbladder is infected and inflamed, usually because a gallstone is blocking it. Surgery to remove the gallbladder is the standard treatment and is done within a few days. / Su vesicula esta infectada e inflamada, usualmente por un calculo que la bloquea. La cirugia para removerla es el tratamiento estandar.',
  ),

  'choledocholithiasis': gi(
    'choledocholithiasis', 'Choledocholithiasis', 'Coledocolitiasis',
    'biliary', 'DC13',
    'Gallstone(s) in the common bile duct (CBD), causing biliary obstruction, jaundice, and risk of cholangitis and gallstone pancreatitis.',
    ['Cholelithiasis (stones migrate from gallbladder)', 'Prior cholecystectomy (retained or recurrent stones)', 'Bile duct dilation', 'Brown pigment stones (form primarily in ducts)'],
    'Gallstone passes from the gallbladder through the cystic duct into the CBD, obstructing bile flow. Obstruction causes upstream bile duct dilation, conjugated hyperbilirubinemia, and elevation of ALP/GGT. Bacterial colonization of stagnant bile leads to ascending cholangitis. Stone impacted at the ampulla of Vater causes gallstone pancreatitis.',
    ['RUQ or epigastric pain / Dolor en hipocondrio derecho o epigastrio', 'Jaundice / Ictericia', 'Dark urine and pale stools / Orina oscura y heces palidas', 'Pruritus / Prurito', 'May be asymptomatic (incidental finding)'],
    ['Labs: elevated conjugated bilirubin, elevated ALP/GGT, elevated ALT/AST (transient spike if stone passes)', 'RUQ ultrasound: dilated CBD >6mm (>8mm post-cholecystectomy), may not visualize stone', 'MRCP (non-invasive, excellent sensitivity for CBD stones)', 'EUS (high sensitivity for small stones)', 'ERCP (diagnostic and therapeutic — reserved for confirmed or high-probability stones)'],
    'ERCP with sphincterotomy and stone extraction (balloon or basket) — therapeutic gold standard. Followed by laparoscopic cholecystectomy (same admission if possible). Intraoperative cholangiogram or laparoscopic CBD exploration as alternative. Large or difficult stones: lithotripsy (mechanical, electrohydraulic, laser) via ERCP. Biliary stent if stone cannot be removed (temporizing).',
    'Post-ERCP: advance diet as tolerated, monitor for post-ERCP pancreatitis (most common complication), low-fat diet initially. / Post-CPRE: avanzar dieta, vigilar pancreatitis, dieta baja en grasa inicialmente.',
    ['Charcot triad (fever, jaundice, RUQ pain — cholangitis)', 'Reynold pentad (+ hypotension + AMS — suppurative cholangitis)', 'Severe epigastric pain radiating to back (gallstone pancreatitis)', 'Rapidly worsening jaundice'],
    'A gallstone has moved into the main bile duct, blocking bile flow and causing jaundice. An endoscopic procedure (ERCP) removes the stone, followed by gallbladder removal surgery. / Un calculo biliar se movio al conducto biliar principal. Un procedimiento endoscopico (CPRE) remueve el calculo, seguido de cirugia para remover la vesicula.',
  ),

  'ascending-cholangitis': gi(
    'ascending-cholangitis', 'Ascending Cholangitis', 'Colangitis Ascendente',
    'biliary', 'DC15',
    'Bacterial infection of the biliary tree due to obstruction, most commonly from CBD stones. A biliary emergency requiring urgent decompression.',
    ['Choledocholithiasis (most common)', 'Bile duct stricture (benign or malignant)', 'Post-ERCP/biliary stent', 'Pancreatic head mass compressing CBD', 'Parasites (Clonorchis, Ascaris)', 'Primary sclerosing cholangitis'],
    'Biliary obstruction leads to bile stasis and bacterial colonization (E. coli, Klebsiella, Enterococcus, Bacteroides — ascending from duodenum). Increased intraductal pressure forces bacteria into the bloodstream (cholangiovenous reflux), causing bacteremia and sepsis.',
    ['Charcot triad (50-70%): fever with rigors + jaundice + RUQ pain / Triada de Charcot: fiebre + ictericia + dolor en HD', 'Reynold pentad (severe): + hypotension + altered mental status / Pentada de Reynolds: + hipotension + alteracion mental', 'Nausea / Nausea', 'This is a MEDICAL EMERGENCY'],
    ['Labs: leukocytosis, elevated bilirubin, elevated ALP/GGT, elevated ALT/AST, blood cultures (positive in 50%)', 'RUQ ultrasound: dilated CBD, possible stone', 'CT abdomen: biliary dilation, may identify cause of obstruction', 'MRCP if diagnosis uncertain'],
    'MEDICAL EMERGENCY. IV fluid resuscitation, broad-spectrum antibiotics (piperacillin-tazobactam or meropenem). Urgent biliary decompression: ERCP with sphincterotomy and stone removal/stent placement (first-line). Percutaneous transhepatic cholangiography (PTC) drainage if ERCP fails or inaccessible. Surgical decompression (last resort). Definitive treatment of underlying cause after stabilization.',
    'After recovery: cholecystectomy to prevent recurrence if stones, treat underlying stricture or tumor. / Despues de recuperacion: colecistectomia para prevenir recurrencia, tratar causa subyacente.',
    ['This IS the emergency — all cases need immediate hospitalization', 'High fever with rigors and jaundice', 'Hypotension and confusion (severe/suppurative cholangitis)', 'Septic shock'],
    'Cholangitis is a serious infection of the bile ducts caused by a blockage (usually a gallstone). It requires emergency treatment with antibiotics and an endoscopic procedure to remove the blockage. / La colangitis es una infeccion seria de los conductos biliares. Requiere antibioticos de emergencia y un procedimiento endoscopico para remover el bloqueo.',
  ),

  'cholangiocarcinoma': gi(
    'cholangiocarcinoma', 'Cholangiocarcinoma', 'Colangiocarcinoma',
    'biliary', '2C12.0',
    'Malignancy of the bile duct epithelium. Classified as intrahepatic, perihilar (Klatskin tumor — most common), or distal. Often presents late with poor prognosis.',
    ['Primary sclerosing cholangitis (strongest risk factor)', 'Liver fluke infection (Opisthorchis, Clonorchis — endemic in SE Asia)', 'Choledochal cysts', 'Hepatolithiasis', 'Caroli disease', 'Cirrhosis', 'Chronic hepatitis B/C', 'Thorotrast exposure', 'Toxins'],
    'Chronic biliary inflammation and cholestasis promote malignant transformation of cholangiocytes. Perihilar (Klatskin) tumors arise at the hepatic duct confluence. Intrahepatic tumors present as liver masses. Distal tumors present like pancreatic head cancer with painless jaundice. Bismuth-Corlette classification grades perihilar extent.',
    ['Painless obstructive jaundice (perihilar and distal) / Ictericia obstructiva indolora', 'Pruritus / Prurito', 'Weight loss / Perdida de peso', 'Pale stools, dark urine / Heces palidas, orina oscura', 'Intrahepatic: mass-like presentation, RUQ pain', 'Courvoisier sign (palpable non-tender gallbladder — distal)'],
    ['CT/MRI with contrast (mass, biliary dilation, vascular involvement)', 'MRCP (delineates biliary anatomy and stricture)', 'ERCP with brushings and biopsy (cytology — low sensitivity)', 'Tumor markers: CA 19-9 (elevated but not specific), CEA', 'EUS with FNA for distal tumors', 'PET-CT for staging', 'Liver biopsy for intrahepatic type'],
    'Resectable (minority): surgical resection — hepatectomy (intrahepatic), hepatic duct resection + hepatectomy (perihilar/Klatskin), pancreaticoduodenectomy (distal). Adjuvant capecitabine (BILCAP trial). Unresectable: palliative biliary stenting (ERCP or PTC), gemcitabine + cisplatin (ABC-02 regimen), immune checkpoint inhibitors for MSI-high or FGFR2 fusions (pemigatinib, futibatinib for intrahepatic). Liver transplant: highly selected perihilar cholangiocarcinoma (Mayo protocol with neoadjuvant chemoradiation).',
    'Manage pruritus (cholestyramine), nutritional support, fat-soluble vitamin supplementation if cholestatic. / Manejar prurito, soporte nutricional, suplementar vitaminas liposolubles.',
    ['Acute cholangitis (fever, jaundice — from biliary obstruction)', 'Rapidly worsening jaundice', 'Biliary sepsis', 'Complete biliary obstruction'],
    'Cholangiocarcinoma is a cancer of the bile ducts that often causes jaundice. Surgery can be curative when caught early. For advanced disease, chemotherapy and procedures to relieve bile duct blockage help manage symptoms. / El colangiocarcinoma es un cancer de los conductos biliares. La cirugia puede curar si se detecta temprano.',
  ),

  'gallbladder-cancer': gi(
    'gallbladder-cancer', 'Gallbladder Cancer', 'Cancer de Vesicula Biliar',
    'biliary', '2C13',
    'Adenocarcinoma of the gallbladder, often diagnosed incidentally after cholecystectomy for presumed benign disease. Associated with gallstones and chronic inflammation.',
    ['Cholelithiasis (large stones >3 cm)', 'Porcelain gallbladder (calcified wall)', 'Gallbladder polyps >1 cm', 'Anomalous pancreaticobiliary duct junction', 'Female sex (3:1)', 'Chronic cholecystitis', 'Native American descent', 'Obesity'],
    'Chronic inflammation from gallstones drives dysplasia-carcinoma sequence. Porcelain gallbladder represents chronic calcific cholecystitis with increased cancer risk. Anomalous pancreaticobiliary junction allows pancreatic juice reflux into the biliary tree, causing chronic inflammation. Invades liver directly (segments IVb/V) and spreads to regional lymph nodes.',
    ['Often asymptomatic until advanced / Frecuentemente asintomatico hasta avanzado', 'Mimics cholecystitis: RUQ pain, nausea / Mimetiza colecistitis', 'Jaundice (advanced — liver/bile duct invasion) / Ictericia', 'Weight loss / Perdida de peso', 'Palpable gallbladder mass', 'Incidental finding on cholecystectomy pathology (~1% of cholecystectomies)'],
    ['Ultrasound: gallbladder wall thickening, mass', 'CT/MRI: staging, liver invasion, lymph nodes', 'Incidental pathology on cholecystectomy specimen (most common diagnosis)', 'CA 19-9, CEA (elevated in advanced)', 'Staging: AJCC T staging critical for management'],
    'Incidental T1a (lamina propria): cholecystectomy is curative. T1b (muscle layer) and above: radical re-resection (extended cholecystectomy with liver segment IVb/V resection, regional lymphadenectomy, and bile duct resection if cystic duct margin positive). Port site resection (controversial). Unresectable: palliative gemcitabine + cisplatin, biliary stenting. Adjuvant capecitabine for resected disease.',
    'Post-surgical follow-up, nutritional support, advance diet gradually after surgery. / Seguimiento post-quirurgico, soporte nutricional.',
    ['Rapidly progressive jaundice', 'Bowel obstruction', 'Severe RUQ mass with pain', 'Signs of peritoneal carcinomatosis'],
    'Gallbladder cancer is often found unexpectedly when the gallbladder is removed for gallstones. Early-stage cancer may be cured by surgery alone. Advanced disease requires chemotherapy. / El cancer de vesicula frecuentemente se descubre al remover la vesicula por calculos. El cancer temprano se cura con cirugia.',
  ),

  'biliary-dyskinesia': gi(
    'biliary-dyskinesia', 'Biliary Dyskinesia', 'Discinesia Biliar',
    'biliary', 'DC10',
    'Functional gallbladder motility disorder with biliary-type pain and reduced gallbladder ejection fraction (<35%) on HIDA-CCK scan, without gallstones.',
    ['Female sex', 'Young adults', 'Functional GI disorders', 'Obesity'],
    'Impaired gallbladder contractility leads to inadequate emptying despite normal stimulation (CCK). The exact pathophysiology is unclear — may involve gallbladder smooth muscle dysfunction, visceral hypersensitivity, or cystic duct dysfunction. Chronic cholecystitis may be found on histology after cholecystectomy.',
    ['Episodic RUQ or epigastric pain similar to biliary colic / Dolor episodico en hipocondrio derecho similar a colico biliar', 'Pain after fatty meals / Dolor despues de comidas grasas', 'Nausea / Nausea', 'Bloating / Distension', 'No gallstones on imaging'],
    ['RUQ ultrasound: normal (no stones, no wall thickening)', 'HIDA scan with CCK stimulation: gallbladder ejection fraction <35% (or <40% per some criteria) + symptom reproduction', 'Normal liver function tests and pancreatic enzymes', 'Exclude other causes of abdominal pain (EGD, PUD, IBS, gastroparesis)'],
    'Laparoscopic cholecystectomy (symptom relief in 80-90% when strict criteria met: typical biliary pain + low EF + symptom reproduction on HIDA-CCK). Conservative management: low-fat diet, antispasmodics. Ensure thorough workup before surgery to avoid unnecessary cholecystectomy.',
    'Low-fat diet, small frequent meals, avoid trigger foods, maintain healthy weight. / Dieta baja en grasa, comidas pequenas, evitar alimentos desencadenantes.',
    ['Severe persistent pain not responsive to analgesics', 'Fever (suggests alternative diagnosis)', 'Jaundice (suggests alternative diagnosis)'],
    'Biliary dyskinesia means your gallbladder is not squeezing properly, causing pain after fatty meals even without gallstones. Removing the gallbladder usually resolves symptoms. / La discinesia biliar significa que su vesicula no se contrae bien. Remover la vesicula usualmente resuelve los sintomas.',
  ),

  'sphincter-of-oddi-dysfunction': gi(
    'sphincter-of-oddi-dysfunction', 'Sphincter of Oddi Dysfunction', 'Disfuncion del Esfinter de Oddi',
    'biliary', 'DC10.1',
    'Functional disorder of the sphincter of Oddi causing biliary or pancreatic-type pain, typically after cholecystectomy. Classified as biliary type or pancreatic type.',
    ['Prior cholecystectomy', 'Female sex', 'Age 20-50', 'Functional GI disorders'],
    'Sphincter of Oddi spasm or stenosis impairs bile and/or pancreatic juice drainage into the duodenum. Elevated basal sphincter pressure (>40 mmHg on manometry) causes biliary dilation, elevated liver enzymes, and pain. Biliary type I (definite): dilated CBD + abnormal LFTs + pain. Type II (presumptive): 1-2 criteria. Type III (possible): pain only.',
    ['Episodic RUQ or epigastric pain post-cholecystectomy / Dolor episodico en hipocondrio derecho post-colecistectomia', 'Pain similar to biliary colic / Dolor similar a colico biliar', 'Recurrent pancreatitis (pancreatic type)', 'Nausea / Nausea', 'Elevated liver enzymes during pain episodes'],
    ['MRCP (rule out structural causes — stones, stricture)', 'Labs during pain episode: elevated AST/ALT, ALP, bilirubin, lipase/amylase', 'HIDA scan with fatty meal: delayed drainage', 'Sphincter of Oddi manometry (ERCP — gold standard but invasive, high complication rate)', 'EUS to exclude choledocholithiasis'],
    'Type I (definite): endoscopic sphincterotomy (highly effective). Type II: sphincterotomy may help (~70% respond). Type III: medical management preferred (sphincterotomy less effective, high complication risk). Medical: smooth muscle relaxants (nifedipine, nitrates), antispasmodics, TCAs, pain management. Avoid repeated ERCPs.',
    'Low-fat diet, avoid large meals, stress management, avoid opioids (can increase sphincter tone). / Dieta baja en grasa, evitar comidas grandes, manejar estres, evitar opioides.',
    ['Recurrent pancreatitis', 'Ascending cholangitis', 'Severe uncontrolled pain', 'Jaundice with fever'],
    'After gallbladder removal, the valve controlling bile flow into the intestine may malfunction, causing pain. An endoscopic procedure to cut the valve can help for certain types. / Despues de remover la vesicula, la valvula que controla el flujo biliar puede funcionar mal. Un procedimiento endoscopico puede ayudar.',
  ),

  // ==========================================================================
  //  PANCREATIC (6)
  // ==========================================================================

  'acute-pancreatitis': gi(
    'acute-pancreatitis', 'Acute Pancreatitis', 'Pancreatitis Aguda',
    'pancreatic', 'DC31',
    'Acute inflammatory condition of the pancreas ranging from mild edematous to severe necrotizing disease. Most commonly caused by gallstones (40%) and alcohol (30%). Third most common cause of GI-related hospital admissions.',
    ['Gallstones (40%)', 'Alcohol (30%)', 'Hypertriglyceridemia (>1000 mg/dL)', 'Post-ERCP', 'Drugs (azathioprine, valproate, didanosine, thiazides)', 'Autoimmune', 'Trauma', 'Hypercalcemia', 'Infections (mumps, CMV)', 'Pancreas divisum', 'Scorpion sting', 'Idiopathic (15-20%)'],
    'Premature activation of trypsinogen to trypsin within acinar cells triggers autodigestion cascade activating other zymogens. Pancreatic enzyme release causes local tissue necrosis, fat saponification, and a massive inflammatory response (SIRS). Severe cases develop pancreatic necrosis (sterile or infected), organ failure, and systemic complications.',
    ['Severe epigastric pain radiating to the back (band-like) / Dolor epigastrico severo irradiado a la espalda', 'Nausea and vomiting / Nausea y vomito', 'Abdominal tenderness and guarding / Dolor abdominal a la palpacion', 'Fever in severe cases / Fiebre', 'Cullen sign (periumbilical ecchymosis) and Grey Turner sign (flank ecchymosis) in hemorrhagic necrosis', 'Tachycardia, hypotension in severe disease'],
    ['Diagnosis requires 2 of 3: characteristic pain + lipase >3x ULN + imaging findings', 'Serum lipase (preferred over amylase — more sensitive and specific)', 'CT abdomen with contrast (not needed for diagnosis if clear clinically — use at 72-96h to assess necrosis/complications)', 'RUQ ultrasound (evaluate for gallstones as etiology)', 'APACHE-II, Ranson criteria, BISAP score (severity prediction)', 'CRP >150 at 48h predicts severe disease', 'Triglycerides, calcium, IgG4 levels to evaluate etiology'],
    'Mild (80%): aggressive IV fluid resuscitation (goal-directed, lactated Ringer preferred), pain management (multimodal: acetaminophen, NSAIDs, opioids as needed), early oral feeding (within 24h if tolerated — low-fat diet), NPO only if intolerant. Gallstone pancreatitis: cholecystectomy same admission (mild) or after recovery (severe). Severe/necrotizing: ICU care, organ support, antibiotics only for infected necrosis (not prophylactic). Infected necrosis: step-up approach (percutaneous drainage -> endoscopic necrosectomy -> surgical necrosectomy). Hypertriglyceridemic: insulin drip, plasmapheresis.',
    'No alcohol, low-fat diet, treat underlying cause (cholecystectomy for gallstones, triglyceride management, discontinue offending drugs), small frequent meals during recovery. / No alcohol, dieta baja en grasa, tratar causa subyacente, comidas pequenas durante recuperacion.',
    ['Persistent or worsening pain despite treatment', 'High fever (infected necrosis)', 'Organ failure (respiratory distress, renal failure, shock)', 'Abdominal compartment syndrome', 'Hemorrhage (hemodynamic instability)'],
    'Your pancreas is severely inflamed, most often from a gallstone or alcohol. Treatment involves IV fluids, pain control, and resting the digestive system. Most cases are mild and resolve in days. Severe cases need intensive care. / Su pancreas esta severamente inflamado. El tratamiento incluye sueros, control del dolor y reposo digestivo. La mayoria son leves.',
  ),

  'chronic-pancreatitis': gi(
    'chronic-pancreatitis', 'Chronic Pancreatitis', 'Pancreatitis Cronica',
    'pancreatic', 'DC32',
    'Progressive inflammatory disease with irreversible structural damage (fibrosis, calcifications, ductal changes) leading to exocrine and endocrine insufficiency.',
    ['Chronic heavy alcohol use (most common — 70%)', 'Smoking (independent and synergistic with alcohol)', 'Recurrent acute pancreatitis', 'Genetic: PRSS1 (hereditary), SPINK1, CFTR mutations', 'Autoimmune pancreatitis', 'Tropical pancreatitis', 'Idiopathic', 'Obstructive (ductal stricture, tumor)'],
    'Repeated pancreatic injury triggers stellate cell activation, producing fibrosis that replaces normal acinar and islet tissue. Sentinel acute pancreatitis event (SAPE) hypothesis: initial insult sensitizes the pancreas to further injury. Progressive loss of exocrine function (maldigestion) and endocrine function (diabetes) occur. Ductal strictures, calcifications, and pseudocysts develop.',
    ['Chronic epigastric pain radiating to back (may be constant or episodic) / Dolor epigastrico cronico irradiado a espalda', 'Steatorrhea (fat malabsorption) / Esteatorrea', 'Weight loss / Perdida de peso', 'Diabetes mellitus (type 3c — pancreatogenic)', 'Fat-soluble vitamin deficiency (A, D, E, K)', 'Narcotic dependence from chronic pain'],
    ['CT abdomen: pancreatic calcifications (pathognomonic), ductal dilation, parenchymal atrophy', 'MRCP/secretin-enhanced MRCP: ductal irregularities (chain-of-lakes)', 'EUS: parenchymal and ductal criteria (Rosemont classification)', 'Fecal elastase-1 (<200 mcg/g = exocrine insufficiency)', '72-hour fecal fat (>7g/day = steatorrhea)', 'HbA1c, glucose (endocrine insufficiency)', 'IgG4 if autoimmune suspected', 'Genetic testing if young onset'],
    'Pain management: stepwise (acetaminophen -> NSAIDs -> tramadol -> adjuvants like pregabalin/TCAs -> opioids as last resort). Pancreatic enzyme replacement therapy (PERT — lipase 40,000-50,000 units/meal with fat). Antioxidants (limited evidence). Endoscopic therapy: ERCP for dominant stricture/stone (lithotripsy, stenting). Celiac plexus block/neurolysis for refractory pain. Surgery: lateral pancreaticojejunostomy (Puestow — dilated duct), Frey procedure, total pancreatectomy with islet autotransplantation (TPIAT). Autoimmune: corticosteroids.',
    'Absolute alcohol and smoking cessation, small frequent low-fat meals, PERT with every meal and snack containing fat, fat-soluble vitamin supplementation, diabetes management, avoid narcotic dependence. / Abstinencia absoluta de alcohol y tabaco, comidas pequenas bajas en grasa, enzimas pancreaticas con cada comida, suplementos vitaminicos.',
    ['Severe acute-on-chronic flare', 'Pancreatic pseudocyst complications (infection, hemorrhage, rupture)', 'New-onset jaundice (bile duct stricture or malignancy)', 'Uncontrolled pain', 'Severe malnutrition', 'Pancreatic cancer development (4% lifetime risk)'],
    'Chronic pancreatitis means your pancreas is permanently scarred, affecting digestion and blood sugar. Enzyme pills help you digest food, and stopping alcohol and smoking prevents further damage. / La pancreatitis cronica significa que su pancreas esta permanentemente danado. Las pastillas de enzimas ayudan a digerir y dejar alcohol y tabaco previene mas dano.',
  ),

  'pancreatic-cancer': gi(
    'pancreatic-cancer', 'Pancreatic Ductal Adenocarcinoma', 'Adenocarcinoma Ductal Pancreatico',
    'pancreatic', '2C10',
    'Highly aggressive malignancy of the pancreatic duct epithelium. 4th leading cause of cancer death. 5-year survival ~12%. Head (60-70%), body (15%), tail (15%).',
    ['Smoking (strongest modifiable)', 'Age >55', 'Chronic pancreatitis', 'Diabetes mellitus (new-onset diabetes after age 50 may be early sign)', 'Obesity', 'Family history (5-10%)', 'Genetic: BRCA1/2, PALB2, CDKN2A, Lynch syndrome, Peutz-Jeghers', 'Heavy alcohol use'],
    'KRAS mutation (>90%), p53, CDKN2A, SMAD4 inactivation drive adenocarcinoma progression. Dense desmoplastic stroma creates immunosuppressive, hypovascular microenvironment (chemotherapy resistance). Head tumors obstruct the CBD early (jaundice). Body/tail tumors present late with pain and weight loss.',
    ['Painless obstructive jaundice (head tumors) / Ictericia obstructiva indolora', 'Epigastric pain radiating to back / Dolor epigastrico irradiado a espalda', 'Weight loss (profound) / Perdida de peso significativa', 'New-onset diabetes (type 3c) / Diabetes de nuevo inicio', 'Courvoisier sign (palpable non-tender gallbladder)', 'Trousseau syndrome (migratory thrombophlebitis)', 'Depression (may precede diagnosis)', 'Steatorrhea / Esteatorrea'],
    ['CT pancreatic protocol (triple-phase — defines resectability, vascular involvement)', 'CA 19-9 (elevated in 80% — not screening, monitoring)', 'EUS with FNA (tissue diagnosis, small tumors)', 'MRCP for biliary anatomy', 'PET-CT for occult metastases', 'Staging laparoscopy (peritoneal disease)', 'Genetic/somatic testing (BRCA, MSI)'],
    'Resectable (15-20%): upfront surgery — pancreaticoduodenectomy (Whipple) for head tumors, distal pancreatectomy + splenectomy for body/tail. Adjuvant: modified FOLFIRINOX (preferred) or gemcitabine + capecitabine. Borderline resectable: neoadjuvant FOLFIRINOX or gemcitabine/nab-paclitaxel, then restage for surgery. Locally advanced unresectable: FOLFIRINOX or gemcitabine/nab-paclitaxel, chemoradiation. Metastatic: FOLFIRINOX or gemcitabine/nab-paclitaxel. BRCA/PALB2 mutated: platinum-based chemo + olaparib maintenance. MSI-high: pembrolizumab. Biliary stenting for jaundice.',
    'High-calorie high-protein diet, pancreatic enzyme replacement, manage diabetes, pain management, palliative care involvement early, psychological support. / Dieta alta en calorias y proteinas, enzimas pancreaticas, manejar diabetes, control del dolor, cuidados paliativos tempranos.',
    ['Complete biliary obstruction (dark urine, pale stools, ascending cholangitis)', 'Severe uncontrolled pain', 'GI bleeding', 'Gastric outlet obstruction (persistent vomiting)', 'Deep vein thrombosis or pulmonary embolism'],
    'Pancreatic cancer is an aggressive cancer often diagnosed at an advanced stage. Surgery offers the best chance for cure but is only possible in 15-20% of patients. Chemotherapy is the mainstay for most patients. / El cancer de pancreas es agresivo. La cirugia ofrece la mejor oportunidad pero solo es posible en 15-20% de los pacientes.',
  ),

  'pancreatic-pseudocyst': gi(
    'pancreatic-pseudocyst', 'Pancreatic Pseudocyst', 'Pseudoquiste Pancreatico',
    'pancreatic', 'DC31.1',
    'Encapsulated fluid collection of pancreatic secretions surrounded by a fibrous wall (no epithelial lining — distinguishes from true cyst), typically developing >=4 weeks after acute pancreatitis.',
    ['Acute pancreatitis (most common)', 'Chronic pancreatitis', 'Pancreatic trauma', 'Pancreatic duct disruption'],
    'Pancreatic duct disruption from inflammation or trauma causes leakage of pancreatic juice, which becomes walled off by granulation tissue and fibrosis over 4-6 weeks. No epithelial lining (pseudocyst vs. true cyst). Contains high amylase/lipase levels. Most resolve spontaneously. Complications occur with large (>6 cm) or persistent pseudocysts.',
    ['Abdominal pain / Dolor abdominal', 'Palpable abdominal mass / Masa abdominal palpable', 'Nausea and early satiety (gastric compression) / Nausea y saciedad temprana', 'May be asymptomatic', 'Jaundice if compressing CBD', 'Fever if infected'],
    ['CT abdomen with contrast: well-defined, round, encapsulated fluid collection without solid component (develops >=4 weeks after pancreatitis)', 'MRI/MRCP: distinguishes pseudocyst from cystic neoplasm', 'EUS with FNA: fluid analysis (high amylase = pseudocyst; mucin/CEA = mucinous cyst)', 'Cyst fluid CEA <5 and high amylase favors pseudocyst'],
    'Small, asymptomatic: observation (many resolve spontaneously over 6 weeks). Large (>6 cm), symptomatic, or complicated: drainage — endoscopic cystgastrostomy or cystduodenostomy (EUS-guided — preferred), percutaneous drainage (higher recurrence), surgical internal drainage (cystgastrostomy, cystjejunostomy, Roux-en-Y). Infected: antibiotics + drainage. Hemorrhagic: angiographic embolization.',
    'Low-fat diet, avoid alcohol, pancreatic enzyme supplementation if needed, follow-up imaging to confirm resolution or stability. / Dieta baja en grasa, evitar alcohol, enzimas pancreaticas si necesario, imagen de seguimiento.',
    ['Infection (fever, increasing pain, leukocytosis)', 'Rupture (sudden severe pain, peritonitis)', 'Hemorrhage into pseudocyst (sudden enlargement, pain, anemia)', 'Gastric outlet or biliary obstruction'],
    'A pancreatic pseudocyst is a fluid-filled sac that forms after pancreatic inflammation. Many resolve on their own. Large or symptomatic ones can be drained through an endoscopic procedure. / Un pseudoquiste pancreatico es un saco de liquido que se forma despues de inflamacion del pancreas. Muchos se resuelven solos. Los grandes se drenan con endoscopia.',
  ),

  'autoimmune-pancreatitis': gi(
    'autoimmune-pancreatitis', 'Autoimmune Pancreatitis', 'Pancreatitis Autoinmune',
    'pancreatic', 'DC30',
    'Immune-mediated pancreatitis. Type 1 (IgG4-related — part of systemic IgG4-related disease) and Type 2 (granulocytic epithelial lesion — associated with IBD). Often mimics pancreatic cancer.',
    ['Type 1: male predominance, age >60, IgG4-related disease', 'Type 2: younger, equal sex, UC association (20-30%)'],
    'Type 1: IgG4-positive plasma cell and lymphocyte infiltration of the pancreas and other organs (salivary glands, bile ducts, retroperitoneum, kidneys) causing storiform fibrosis and obliterative phlebitis. Part of systemic IgG4-related disease. Type 2: neutrophilic infiltration of duct epithelium (granulocytic epithelial lesion — GEL) confined to the pancreas.',
    ['Painless obstructive jaundice (mimics pancreatic cancer) / Ictericia obstructiva indolora', 'Diffuse or focal pancreatic enlargement (sausage-shaped pancreas)', 'Mild abdominal pain / Dolor abdominal leve', 'Weight loss / Perdida de peso', 'New-onset diabetes', 'Type 1: extrapancreatic manifestations (sclerosing cholangitis, sialadenitis, retroperitoneal fibrosis, tubulointerstitial nephritis)', 'Type 2: may present with acute pancreatitis'],
    ['CT: diffuse pancreatic enlargement (sausage-shaped, loss of lobulation), capsule-like rim, delayed enhancement', 'Elevated serum IgG4 >2x ULN (Type 1 — not always elevated)', 'EUS with core biopsy (>2 IgG4+ cells/HPF)', 'ERCP: diffuse CBD narrowing, pancreatic duct narrowing', 'HISORt criteria (histology, imaging, serology, other organ involvement, response to steroids)', 'CRITICAL: distinguish from pancreatic cancer before starting steroids'],
    'Corticosteroids (dramatic response — both types): prednisone 40mg/day x4 weeks then taper over 2-3 months. Type 1: maintenance with low-dose steroids or azathioprine/rituximab (relapse rate 30-50%). Type 2: excellent response to steroids, low relapse rate, treat associated UC. Steroid response helps confirm diagnosis. Biliary stenting if obstructive jaundice (resolves with steroids). Resect only if cancer cannot be excluded.',
    'Regular follow-up, monitor for relapse, manage diabetes and exocrine insufficiency if present. / Seguimiento regular, vigilar recaida, manejar diabetes e insuficiencia exocrina.',
    ['Failure to respond to steroids (reconsider pancreatic cancer diagnosis)', 'Biliary obstruction with cholangitis', 'Organ failure from IgG4-related disease (renal failure)'],
    'Autoimmune pancreatitis occurs when your immune system attacks the pancreas. It can look like pancreatic cancer on imaging, but it responds dramatically to steroid medication. / La pancreatitis autoinmune ocurre cuando su sistema inmune ataca el pancreas. Puede parecer cancer, pero responde al tratamiento con esteroides.',
  ),

  'pancreatic-neuroendocrine-tumors': gi(
    'pancreatic-neuroendocrine-tumors', 'Pancreatic Neuroendocrine Tumors (Insulinoma, Gastrinoma, VIPoma, Glucagonoma)', 'Tumores Neuroendocrinos Pancreaticos (Insulinoma, Gastrinoma, VIPoma, Glucagonoma)',
    'pancreatic', '2C10.1',
    'Neoplasms arising from pancreatic islet cells. Can be functional (hormone-secreting) or non-functional. Insulinoma: most common functional PanNET, benign in 90%. Gastrinoma: see Zollinger-Ellison. VIPoma: watery diarrhea. Glucagonoma: necrolytic migratory erythema.',
    ['MEN1 syndrome (20-30% of gastrinomas, 10% of insulinomas)', 'VHL syndrome (non-functional PanNETs)', 'Tuberous sclerosis', 'Neurofibromatosis type 1', 'Family history of MEN1'],
    'Insulinoma: beta-cell tumor secretes excess insulin causing hypoglycemia. Whipple triad: hypoglycemia symptoms + low glucose + symptom relief with glucose. VIPoma: VIP secretion causes massive secretory diarrhea, hypokalemia, achlorhydria (WDHA syndrome — Watery Diarrhea, Hypokalemia, Achlorhydria). Glucagonoma: glucagon excess causes necrolytic migratory erythema, diabetes, DVT, weight loss, anemia (4D syndrome).',
    ['Insulinoma: episodic hypoglycemia (confusion, diaphoresis, tremor, palpitations, seizures, relieved by eating) / Insulinoma: hipoglucemia episodica', 'VIPoma: profuse watery diarrhea (>700 mL/day, persists with fasting), hypokalemia, dehydration', 'Glucagonoma: necrolytic migratory erythema (painful migratory erythematous rash), diabetes, weight loss, DVT, glossitis, anemia', 'Non-functional: mass effect, incidental finding'],
    ['Insulinoma: supervised 72-hour fast (glucose <45, insulin elevated, C-peptide elevated, negative sulfonylurea screen)', 'VIPoma: serum VIP elevated (>200 pg/mL), secretory diarrhea pattern (persists with fasting, stool osmotic gap <50)', 'Glucagonoma: serum glucagon >500 pg/mL (often >1000)', 'All: CT/MRI pancreas, EUS (small tumors), Ga-68 DOTATATE PET/CT', 'Chromogranin A (general marker)', 'Ki-67 index and mitotic rate for grading (G1/G2/G3)', 'Screen for MEN1'],
    'Insulinoma: surgical enucleation or partial pancreatectomy (curative in 90% — mostly benign). Medical: diazoxide, octreotide if unresectable. VIPoma: octreotide (controls diarrhea), surgical resection if localized, IV fluid/electrolyte replacement. Glucagonoma: surgical resection, octreotide, DVT prophylaxis, nutritional support. Non-functional/advanced: somatostatin analogs, everolimus, sunitinib, temozolomide/capecitabine, PRRT (Lu-177 DOTATATE). All localized functional tumors: surgical resection.',
    'Insulinoma: frequent meals, complex carbohydrates, avoid fasting, carry glucose source. VIPoma: aggressive fluid/electrolyte repletion. Glucagonoma: DVT prophylaxis, skin care for rash. / Insulinoma: comidas frecuentes, carbohidratos complejos. VIPoma: reposicion agresiva de liquidos.',
    ['Insulinoma: severe hypoglycemia (seizures, loss of consciousness)', 'VIPoma: severe dehydration and hypokalemia (cardiac arrhythmia risk)', 'Glucagonoma: DVT/PE', 'Carcinoid crisis during surgery (pre-treat with octreotide)', 'Tumor hemorrhage'],
    'These rare pancreatic tumors produce excess hormones causing specific syndromes. Insulinoma causes dangerously low blood sugar. VIPoma causes severe diarrhea. Most are treatable with surgery and/or medications. / Estos tumores pancreaticos raros producen exceso de hormonas. El insulinoma causa hipoglucemia. El VIPoma causa diarrea severa. La mayoria son tratables.',
  ),

  // ==========================================================================
  //  PERITONEAL / MESENTERIC / OTHER (3)
  // ==========================================================================

  'peritonitis': gi(
    'peritonitis', 'Peritonitis', 'Peritonitis',
    'peritoneal', 'DC40',
    'Inflammation of the peritoneum, either primary (spontaneous bacterial peritonitis — SBP, in ascitic patients) or secondary (from visceral perforation, postoperative, trauma).',
    ['SBP: cirrhosis with ascites (most common), low ascitic protein (<1.5 g/dL), prior SBP, variceal bleeding', 'Secondary: perforated viscus (peptic ulcer, appendicitis, diverticulitis), bowel ischemia, postoperative anastomotic leak, peritoneal dialysis, trauma'],
    'SBP: bacterial translocation from the gut to mesenteric lymph nodes and bloodstream, seeding ascitic fluid. Usually monomicrobial (E. coli, Klebsiella, Streptococcus pneumoniae). Low ascitic fluid complement and opsonin activity in cirrhotics impairs bacterial clearance. Secondary: spillage of GI contents or pus into the peritoneal cavity causes polymicrobial infection and intense chemical/inflammatory peritonitis.',
    ['Abdominal pain and tenderness / Dolor y sensibilidad abdominal', 'Fever / Fiebre', 'SBP: may be subtle (low-grade fever, worsening encephalopathy, renal function decline in cirrhotic)', 'Secondary: severe diffuse abdominal pain, guarding, rigidity (board-like abdomen) / Abdomen en tabla', 'Absent bowel sounds', 'Nausea, vomiting / Nausea, vomito', 'Rebound tenderness / Dolor de rebote'],
    ['SBP: diagnostic paracentesis (ascitic fluid PMN count >=250/mm3 is diagnostic, culture often negative)', 'SAAG >1.1 g/dL (portal hypertension)', 'Secondary: CT abdomen (free air, loculated fluid, abscess, visceral perforation)', 'Labs: leukocytosis, elevated lactate, blood cultures', 'Peritoneal fluid: gram stain, culture (bedside inoculation into blood culture bottles increases yield)'],
    'SBP: IV cefotaxime or ceftriaxone x5 days + IV albumin (1.5 g/kg day 1, 1 g/kg day 3 — reduces hepatorenal syndrome). Secondary prophylaxis: daily norfloxacin or TMP-SMX. Primary prophylaxis if ascitic protein <1.5 with liver or renal impairment. Secondary: emergent surgery (repair perforation, washout), broad-spectrum antibiotics (piperacillin-tazobactam or carbapenem + vancomycin), source control.',
    'SBP prevention: sodium restriction, diuretics for ascites control, prophylactic antibiotics as indicated. Secondary: treat underlying cause, post-surgical recovery care. / Prevencion de PBE: restriccion de sodio, diureticos, antibioticos profilacticos.',
    ['SBP: any cirrhotic with ascites and fever or abdominal pain needs IMMEDIATE paracentesis', 'Secondary: rigid abdomen (surgical emergency)', 'Septic shock', 'Worsening hepatic encephalopathy in cirrhotic'],
    'Peritonitis is a serious infection of the lining of your abdomen. In patients with liver disease and fluid buildup, bacteria can infect the fluid spontaneously. In other cases, a hole in the intestine spills contents. Both require urgent antibiotics and often surgery. / La peritonitis es una infeccion seria del revestimiento abdominal. Requiere antibioticos urgentes y frecuentemente cirugia.',
  ),

  'mesenteric-ischemia': gi(
    'mesenteric-ischemia', 'Mesenteric Ischemia (Acute and Chronic)', 'Isquemia Mesenterica (Aguda y Cronica)',
    'peritoneal', 'DA65.0',
    'Insufficient blood flow to the intestines via the mesenteric arteries. Acute: surgical emergency with high mortality (60-80%). Chronic: intestinal angina from atherosclerotic stenosis.',
    ['Acute: atrial fibrillation (arterial embolism — SMA most common, 50%), atherosclerosis (arterial thrombosis, 25%), low-flow states (NOMI — non-occlusive, 20%), mesenteric venous thrombosis (5%)', 'Chronic: atherosclerosis of mesenteric vessels (celiac, SMA, IMA), smoking, hypertension, hyperlipidemia', 'Hypercoagulable states (venous thrombosis)'],
    'Acute arterial embolism: AF or cardiac thrombus lodges in the SMA (usually beyond the origin of the middle colic artery). Acute thrombosis: rupture of atherosclerotic plaque in stenotic SMA. NOMI: mesenteric vasoconstriction from low cardiac output or vasopressors. All cause intestinal mucosal ischemia progressing to transmural necrosis. Chronic: postprandial blood flow demand exceeds supply through stenotic vessels (intestinal angina). Usually requires 2 of 3 mesenteric vessels stenosed.',
    ['Acute: sudden severe periumbilical abdominal pain "out of proportion to physical exam" (classic early finding) / Dolor abdominal severo desproporcional al examen fisico', 'Nausea, vomiting, diarrhea (may be bloody) / Diarrea que puede ser sanguinolenta', 'Rapid progression to peritonitis, shock', 'Gut emptying (early vomiting and diarrhea)', 'Chronic: postprandial abdominal pain (intestinal angina — 15-30 min after eating) / Dolor postprandial', 'Food fear and weight loss / Sitofobia y perdida de peso', 'Abdominal bruit'],
    ['Acute: CT angiography (gold standard — filling defect in SMA/SMV, bowel wall thickening, pneumatosis, portal venous gas)', 'Labs: elevated lactate (late and ominous), leukocytosis, metabolic acidosis, elevated D-dimer, elevated LDH/amylase', 'Conventional angiography (diagnostic and therapeutic)', 'Plain film: may be normal early; late: thumbprinting, pneumatosis, portal venous gas', 'Chronic: CT angiography or MRA (mesenteric vessel stenosis), duplex ultrasound (SMA peak systolic velocity >275 cm/s)'],
    'Acute embolism: emergent surgical embolectomy or catheter-directed thrombolysis/thrombectomy + bowel resection of necrotic segments + second-look laparotomy in 24-48h. Acute thrombosis: surgical bypass or endovascular stenting + bowel assessment. NOMI: treat underlying cause, IV papaverine or prostaglandin infusion, optimize cardiac output. Venous thrombosis: anticoagulation (heparin then warfarin/DOAC, 6+ months), surgery only for peritoneal signs. Chronic: endovascular mesenteric stenting (first-line) or surgical bypass (aortomesenteric), antiplatelet therapy.',
    'Acute: post-surgical recovery, anticoagulation for embolic source (AF). Chronic: small frequent meals, cardiovascular risk factor management (smoking cessation, statin, BP control), adequate hydration. / Agudo: anticoagulacion post-quirurgica. Cronico: comidas frecuentes, manejar factores de riesgo cardiovascular.',
    ['Acute mesenteric ischemia IS the emergency — high mortality without rapid treatment', 'Pain out of proportion to exam', 'Bloody diarrhea with metabolic acidosis', 'Peritoneal signs (necrosis has occurred)', 'Pneumatosis on imaging'],
    'Acute mesenteric ischemia is a life-threatening blockage of blood flow to your intestines that requires emergency treatment. Chronic mesenteric ischemia causes pain after eating from narrowed arteries, treated with stents or surgery. / La isquemia mesenterica aguda es un bloqueo del flujo sanguineo a los intestinos que requiere tratamiento de emergencia.',
  ),

  'abdominal-compartment-syndrome': gi(
    'abdominal-compartment-syndrome', 'Abdominal Compartment Syndrome', 'Sindrome Compartimental Abdominal',
    'peritoneal', 'ME85',
    'Sustained intra-abdominal pressure (IAP) >20 mmHg with new organ dysfunction. A life-threatening condition in critically ill patients requiring urgent decompression.',
    ['Massive fluid resuscitation (burns, sepsis, trauma)', 'Abdominal surgery', 'Pancreatitis (severe)', 'Bowel obstruction or ileus', 'Retroperitoneal hemorrhage', 'Pneumoperitoneum', 'Ascites (tense)', 'Abdominal packing', 'Prone positioning'],
    'Increased IAP compresses abdominal and retroperitoneal structures. Venous return decreases (IVC compression -> decreased cardiac preload -> decreased cardiac output). Diaphragm elevation impairs ventilation (elevated peak pressures, hypoxia, hypercapnia). Renal vein/artery compression causes renal failure. Mesenteric blood flow decreases causing intestinal ischemia. Elevated intracranial pressure from impaired cerebral venous drainage.',
    ['Tense distended abdomen / Abdomen tenso y distendido', 'Oliguria or anuria / Oliguria o anuria', 'Increasing ventilatory pressures (elevated peak and plateau pressures)', 'Hypoxia / Hipoxia', 'Hypotension resistant to fluids / Hipotension resistente a liquidos', 'Decreased cardiac output', 'Elevated intracranial pressure in TBI patients'],
    ['Intravesical (bladder) pressure measurement (gold standard for IAP — transduced via Foley catheter)', 'IAH: IAP >=12 mmHg sustained', 'ACS: IAP >20 mmHg with new organ dysfunction', 'Labs: rising creatinine, lactate, metabolic acidosis', 'Imaging: compressed IVC, renal vein congestion, bowel wall edema'],
    'Grade-based approach. IAH without ACS: medical management — NG decompression, rectal tube, adequate sedation and analgesia, neuromuscular blockade, avoid excessive fluid resuscitation, diuretics, paracentesis/drainage of abdominal fluid collections, body positioning. ACS: surgical decompressive laparotomy with temporary abdominal closure (vacuum-assisted, Bogota bag). Gradually close abdomen when IAP and physiology normalize.',
    'ICU-level care, close monitoring of IAP in at-risk patients, balanced fluid resuscitation to prevent IAH. / Cuidado en UCI, monitoreo cercano de presion intra-abdominal, reanimacion con liquidos balanceada.',
    ['This IS the emergency — ACS requires immediate intervention', 'Worsening oliguria/anuria', 'Hemodynamic collapse', 'Refractory hypoxia', 'Increasing lactate/acidosis'],
    'Abdominal compartment syndrome means pressure inside your abdomen is dangerously high, compressing organs and blood vessels. It requires urgent intervention to relieve the pressure, sometimes with emergency surgery. / El sindrome compartimental abdominal significa que la presion dentro de su abdomen es peligrosamente alta. Requiere intervencion urgente.',
  ),

};

// ---------------------------------------------------------------------------
// Category labels (bilingual)
// ---------------------------------------------------------------------------

export const GI_EXPANDED_CATEGORY_LABELS: Record<GICategory, { en: string; es: string }> = {
  esophageal:    { en: 'Esophageal Disorders',       es: 'Trastornos Esofagicos' },
  gastric:       { en: 'Gastric Disorders',           es: 'Trastornos Gastricos' },
  'small-bowel': { en: 'Small Bowel Disorders',       es: 'Trastornos del Intestino Delgado' },
  colorectal:    { en: 'Colorectal / Anorectal',      es: 'Trastornos Colorrectales / Anorrectales' },
  hepatic:       { en: 'Hepatic Disorders',           es: 'Trastornos Hepaticos' },
  biliary:       { en: 'Biliary Disorders',           es: 'Trastornos Biliares' },
  pancreatic:    { en: 'Pancreatic Disorders',        es: 'Trastornos Pancreaticos' },
  peritoneal:    { en: 'Peritoneal / Mesenteric',     es: 'Trastornos Peritoneales / Mesentericos' },
  functional:    { en: 'Functional GI Disorders',     es: 'Trastornos GI Funcionales' },
  inflammatory:  { en: 'Inflammatory Bowel Disease',  es: 'Enfermedad Inflamatoria Intestinal' },
  neoplastic:    { en: 'GI Neoplasms',               es: 'Neoplasias GI' },
  congenital:    { en: 'Congenital GI Disorders',     es: 'Trastornos GI Congenitos' },
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getGIExpandedCondition(id: string): GIConditionEntry | undefined {
  return GI_CONDITIONS_EXPANDED[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchGIExpandedConditions(query: string): GIConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(GI_CONDITIONS_EXPANDED).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getGIExpandedByCategory(category: GICategory): GIConditionEntry[] {
  return Object.values(GI_CONDITIONS_EXPANDED).filter(c => c.category === category);
}

/** Return the total number of GI conditions in the expanded database. */
export function getGIExpandedConditionCount(): number {
  return Object.keys(GI_CONDITIONS_EXPANDED).length;
}

/** Get all conditions with a specific risk factor (case-insensitive). */
export function getGIExpandedByRiskFactor(riskFactor: string): GIConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(GI_CONDITIONS_EXPANDED).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}

/** Get all conditions that list a specific symptom (case-insensitive). */
export function getGIExpandedBySymptom(symptom: string): GIConditionEntry[] {
  const s = symptom.toLowerCase();
  return Object.values(GI_CONDITIONS_EXPANDED).filter(c =>
    c.symptoms.some(sym => sym.toLowerCase().includes(s)),
  );
}

/** Get all emergency conditions (those with non-empty emergencySigns). */
export function getGIExpandedEmergencies(): GIConditionEntry[] {
  return Object.values(GI_CONDITIONS_EXPANDED).filter(c => c.emergencySigns.length > 0);
}

/** Get condition IDs grouped by category. */
export function getGIExpandedIdsByCategory(): Record<GICategory, string[]> {
  const result: Record<string, string[]> = {};
  for (const [key, entry] of Object.entries(GI_CONDITIONS_EXPANDED)) {
    if (!result[entry.category]) result[entry.category] = [];
    result[entry.category].push(key);
  }
  return result as Record<GICategory, string[]>;
}

/** Lookup a condition by ICD-11 code. */
export function getGIExpandedByICD11(code: string): GIConditionEntry | undefined {
  return Object.values(GI_CONDITIONS_EXPANDED).find(c => c.icd11 === code);
}
