/**
 * Biological Self — Allergy & Immunology Specialty Database
 * ~35 entries covering allergic rhinitis, food allergy, drug allergy,
 * anaphylaxis, immunodeficiency, autoimmune, hypersensitivity, and immunotherapy.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AllergyCategory =
  | 'allergic-rhinitis' | 'food-allergy' | 'drug-allergy' | 'anaphylaxis'
  | 'immunodeficiency' | 'autoimmune' | 'hypersensitivity' | 'immunotherapy';

export interface AllergyImmunologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: AllergyCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  prevention: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ai = (
  id: string, name: string, nameEs: string, category: AllergyCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  prevention: string[], patientExplanation: string, emergencySigns: string[],
): AllergyImmunologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, prevention, patientExplanation, emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ALLERGY_IMMUNOLOGY_ENTRIES: Record<string, AllergyImmunologyEntry> = {

  // ===== ALLERGIC RHINITIS (4) ===============================================

  'seasonal-allergic-rhinitis': ai(
    'seasonal-allergic-rhinitis', 'Seasonal Allergic Rhinitis (Hay Fever)', 'Rinitis alérgica estacional', 'allergic-rhinitis',
    'CA08.0', 'IgE-mediated nasal inflammation triggered by seasonal aeroallergens such as tree, grass, and weed pollens.',
    'Pollen exposure crosslinks IgE on mast cells in the nasal mucosa, triggering degranulation and release of histamine, leukotrienes, and prostaglandins. Early-phase response occurs within minutes; late-phase response (eosinophilic inflammation) peaks at 4-8 hours.',
    ['Paroxysmal sneezing', 'Watery rhinorrhea', 'Nasal and palatal pruritus', 'Nasal congestion', 'Allergic conjunctivitis (itchy, watery eyes)', 'Allergic shiners (infraorbital darkening)', 'Allergic salute and transverse nasal crease'],
    ['Skin prick testing to regional pollens', 'Serum-specific IgE (ImmunoCAP)', 'Nasal cytology showing eosinophils', 'Total serum IgE (supportive but non-specific)', 'Anterior rhinoscopy revealing pale, boggy turbinates'],
    ['Intranasal corticosteroids (fluticasone, mometasone) — first-line', 'Second-generation oral antihistamines (cetirizine, loratadine, fexofenadine)', 'Intranasal antihistamines (azelastine)', 'Leukotriene receptor antagonists (montelukast)', 'Allergen immunotherapy (subcutaneous or sublingual) for refractory cases'],
    ['Monitor pollen counts and limit outdoor exposure during peaks', 'Keep windows closed during pollen season', 'Shower and change clothes after outdoor activity', 'Use HEPA filters indoors', 'Pre-seasonal initiation of intranasal corticosteroids'],
    'Hay fever is caused by your immune system overreacting to pollen. A daily nasal spray is the best treatment, and antihistamine pills can help with remaining symptoms.',
    ['Severe asthma exacerbation triggered by pollen season', 'Sinusitis with facial pain and purulent discharge', 'Obstructive sleep disturbance from severe congestion'],
  ),

  'perennial-allergic-rhinitis': ai(
    'perennial-allergic-rhinitis', 'Perennial Allergic Rhinitis', 'Rinitis alérgica perenne', 'allergic-rhinitis',
    'CA08.1', 'Year-round IgE-mediated nasal inflammation triggered by indoor allergens such as dust mites, mold, pet dander, and cockroach debris.',
    'Continuous exposure to indoor aeroallergens leads to chronic mast cell activation and persistent eosinophilic nasal inflammation. The nasal mucosa undergoes remodeling with goblet cell hyperplasia and submucosal gland hypertrophy.',
    ['Chronic nasal congestion (predominant symptom)', 'Postnasal drip', 'Hyposmia or anosmia', 'Mouth breathing and snoring', 'Eustachian tube dysfunction', 'Chronic cough from postnasal drainage'],
    ['Skin prick testing (dust mite, mold, pet dander, cockroach)', 'Serum-specific IgE panels', 'Nasal endoscopy to rule out polyps or structural issues', 'CT sinuses if chronic sinusitis suspected', 'Anterior rhinoscopy: edematous, pale-violet mucosa'],
    ['Intranasal corticosteroids daily', 'Second-generation oral antihistamines', 'Intranasal ipratropium for rhinorrhea-predominant symptoms', 'Allergen immunotherapy for identified triggers', 'Nasal saline irrigation'],
    ['Encase mattresses and pillows in allergen-proof covers', 'Wash bedding weekly in hot water (>130 °F)', 'Maintain indoor humidity below 50%', 'Remove carpeting if feasible; use HEPA vacuum', 'Limit pet access to bedrooms'],
    'Perennial allergic rhinitis means year-round nasal symptoms from indoor triggers like dust or pets. Environmental control measures combined with a daily nasal steroid spray are most effective.',
    ['Development of nasal polyps', 'Recurrent acute sinusitis', 'Significant sleep-disordered breathing'],
  ),

  'allergic-conjunctivitis': ai(
    'allergic-conjunctivitis', 'Allergic Conjunctivitis', 'Conjuntivitis alérgica', 'allergic-rhinitis',
    'CA08.2', 'IgE-mediated inflammation of the conjunctiva, often co-occurring with allergic rhinitis, presenting with ocular itching and tearing.',
    'Allergen exposure triggers mast cell degranulation in the conjunctival mucosa, releasing histamine and tryptase. The early phase produces itching and tearing; the late phase involves eosinophil recruitment with papillary hypertrophy.',
    ['Intense bilateral ocular pruritus (hallmark)', 'Watery or mucoid discharge', 'Conjunctival injection and chemosis', 'Papillary reaction on tarsal conjunctiva', 'Periorbital edema', 'Photophobia in severe cases'],
    ['Clinical diagnosis based on history and exam', 'Skin prick testing or serum-specific IgE for allergen identification', 'Slit-lamp exam to rule out vernal or atopic keratoconjunctivitis', 'Conjunctival scraping showing eosinophils (rarely needed)'],
    ['Topical antihistamine/mast cell stabilizers (olopatadine, ketotifen) — first-line', 'Oral second-generation antihistamines', 'Artificial tears for barrier dilution', 'Cold compresses for symptom relief', 'Short-course topical corticosteroids for severe flares (ophthalmology supervision)'],
    ['Avoid rubbing eyes', 'Wear wraparound sunglasses outdoors', 'Reduce allergen exposure (same measures as allergic rhinitis)', 'Avoid contact lenses during flares'],
    'Allergic conjunctivitis makes your eyes itchy and watery because of an allergic reaction. Antihistamine eye drops used daily are the most effective treatment.',
    ['Vision changes suggesting corneal involvement', 'Severe pain or photophobia (may indicate vernal keratoconjunctivitis)', 'Unilateral symptoms requiring alternative diagnosis'],
  ),

  'non-allergic-rhinitis': ai(
    'non-allergic-rhinitis', 'Non-Allergic Rhinitis (Vasomotor Rhinitis)', 'Rinitis no alérgica (vasomotora)', 'allergic-rhinitis',
    'CA09', 'Chronic nasal symptoms without demonstrable IgE-mediated sensitization, triggered by irritants, temperature changes, or autonomic dysfunction.',
    'Autonomic imbalance with parasympathetic predominance leads to glandular hypersecretion and vascular engorgement of the nasal mucosa. Nociceptive C-fibers release substance P and CGRP, amplifying neurogenic inflammation. No eosinophilic infiltrate distinguishes it from allergic rhinitis.',
    ['Nasal congestion and rhinorrhea (predominant)', 'Triggered by strong odors, cold air, humidity changes, or spicy food', 'Minimal sneezing or pruritus (unlike allergic rhinitis)', 'Absence of ocular symptoms', 'Symptoms worsen in poorly ventilated or polluted environments'],
    ['Negative skin prick testing or serum-specific IgE', 'Normal total IgE', 'Nasal cytology: absence of eosinophils', 'Anterior rhinoscopy: erythematous (not pale) turbinates', 'Diagnosis of exclusion after ruling out allergic, infectious, structural, and medication-induced causes'],
    ['Intranasal corticosteroids', 'Intranasal ipratropium bromide (especially for rhinorrhea)', 'Intranasal azelastine (effective in non-allergic subtypes)', 'Combination azelastine/fluticasone (Dymista)', 'Capsaicin nasal spray for refractory cases'],
    ['Avoid known triggers (perfumes, smoke, cold air)', 'Use a humidifier in dry environments', 'Nasal saline irrigation regularly', 'Avoid decongestant nasal sprays (risk of rhinitis medicamentosa)'],
    'Non-allergic rhinitis causes stuffy or runny nose from triggers like strong smells or weather changes, not from allergies. It is managed with prescription nasal sprays.',
    ['Recurrent nosebleeds from mucosal fragility', 'Progressive nasal obstruction suggesting structural pathology', 'Unilateral symptoms requiring evaluation for masses'],
  ),

  // ===== FOOD ALLERGY (5) ====================================================

  'ige-mediated-food-allergy': ai(
    'ige-mediated-food-allergy', 'IgE-Mediated Food Allergy', 'Alergia alimentaria mediada por IgE', 'food-allergy',
    'CA91', 'Immediate hypersensitivity reaction to food proteins mediated by allergen-specific IgE antibodies, potentially causing anaphylaxis.',
    'Sensitization occurs when food proteins penetrate the gut or skin barrier and are presented by dendritic cells to Th2 lymphocytes, driving IgE production. On re-exposure, the allergen crosslinks IgE on mast cells and basophils, causing rapid degranulation with histamine, tryptase, and leukotriene release.',
    ['Urticaria and angioedema (most common)', 'Oral pruritus and lip/tongue swelling', 'Abdominal pain, nausea, vomiting, diarrhea', 'Laryngeal edema and stridor', 'Hypotension and anaphylaxis', 'Symptoms within minutes to 2 hours of ingestion'],
    ['Skin prick testing to suspected food allergens', 'Serum-specific IgE (component-resolved diagnostics for peanut: Ara h 2)', 'Oral food challenge (gold standard for diagnosis)', 'Detailed dietary and reaction history', 'Basophil activation test (emerging)'],
    ['Strict allergen avoidance — cornerstone of management', 'Epinephrine auto-injector prescribed and carried at all times', 'Oral immunotherapy (OIT) for peanut (Palforzia) — FDA-approved', 'Antihistamines for mild cutaneous reactions only', 'Emergency action plan for school and caregivers'],
    ['Read food labels meticulously (FALCPA allergen labeling)', 'Educate on cross-contact risks during food preparation', 'Medical identification bracelet', 'School and daycare allergy action plans', 'Periodic reassessment as some allergies (milk, egg, wheat, soy) may be outgrown'],
    'A food allergy means your immune system treats a specific food as dangerous. Always carry your epinephrine injector and avoid the food completely. Some children outgrow certain food allergies.',
    ['Anaphylaxis: throat tightness, difficulty breathing, dizziness, or passing out', 'Biphasic reaction (recurrence 1-72 hours after initial episode)', 'Severe abdominal symptoms mimicking acute abdomen'],
  ),

  'peanut-allergy': ai(
    'peanut-allergy', 'Peanut Allergy', 'Alergia al cacahuate', 'food-allergy',
    'CA91.0', 'One of the most common and severe food allergies, often lifelong, with significant anaphylaxis risk. Affects approximately 2% of children.',
    'Sensitization to peanut proteins (Ara h 1, 2, 3, 6) involves Th2-driven IgE production. Ara h 2 is the dominant allergen and best predictor of clinical reactivity. Dual-allergen exposure hypothesis: early cutaneous sensitization through inflamed skin (eczema) and delayed oral introduction increases allergy risk.',
    ['Urticaria and angioedema within minutes of ingestion', 'Oral allergy symptoms (itching, tingling of lips and mouth)', 'Gastrointestinal symptoms (vomiting, abdominal cramps)', 'Respiratory symptoms (cough, wheeze, stridor)', 'Cardiovascular collapse in severe anaphylaxis', 'Reactions can occur from trace amounts or skin contact'],
    ['Skin prick test to peanut extract', 'Serum peanut-specific IgE and Ara h 2 component testing', 'Supervised oral food challenge (definitive)', 'Clinical history of reaction pattern', 'Baseline serum tryptase (to assess mast cell burden)'],
    ['Strict peanut avoidance', 'Epinephrine auto-injector (always carry two)', 'Peanut oral immunotherapy (Palforzia) for ages 4-17 with confirmed allergy', 'Omalizumab as adjunct to OIT (investigational)', 'Antihistamines for mild isolated skin reactions only'],
    ['Early introduction of peanut protein in infants at age 4-6 months (LEAP study guidelines)', 'Screen high-risk infants (severe eczema or egg allergy) with SPT/sIgE before introduction', 'Allergen-free classroom policies', 'Educate on hidden peanut in sauces, baked goods, and ethnic cuisines', 'Annual reassessment of allergy status'],
    'Peanut allergy is a serious condition that usually lasts a lifetime. New treatments like oral immunotherapy can reduce the risk of severe reactions. Always carry epinephrine and read every food label.',
    ['Any breathing difficulty after peanut exposure', 'Dizziness, lightheadedness, or feeling faint', 'Swelling of tongue or throat', 'Use epinephrine first — do not wait to see if antihistamines work'],
  ),

  'cows-milk-allergy': ai(
    'cows-milk-allergy', "Cow's Milk Protein Allergy", 'Alergia a la proteína de leche de vaca', 'food-allergy',
    'CA91.1', 'Most common food allergy in infants, involving IgE-mediated and/or non-IgE-mediated immune responses to casein or whey proteins.',
    'IgE-mediated: rapid mast cell degranulation upon exposure to casein (heat-stable) or whey (alpha-lactalbumin, beta-lactoglobulin). Non-IgE-mediated (FPIES, proctocolitis): T-cell-driven inflammation of the GI mucosa causing delayed symptoms. Most children develop tolerance by age 5.',
    ['IgE-mediated: urticaria, vomiting, wheeze within minutes', 'Non-IgE (FPIES): profuse vomiting 1-4 hours after ingestion, lethargy, pallor', 'Allergic proctocolitis: blood-streaked stools in breastfed infant', 'Eczema flares with milk ingestion', 'Failure to thrive in severe cases', 'Oral allergy symptoms'],
    ['Skin prick test and serum-specific IgE to milk, casein, whey fractions', 'Supervised oral food challenge (gold standard)', 'Elimination diet with symptom resolution and re-challenge', 'Stool studies (occult blood, eosinophils) in non-IgE forms', 'Patch testing (limited utility)'],
    ['Extensively hydrolyzed formula (eHF) as first-line substitute', 'Amino acid-based formula if eHF not tolerated', 'Strict milk protein avoidance in maternal diet if breastfeeding', 'Baked milk challenge (many tolerate heated milk) — accelerates tolerance', 'Epinephrine auto-injector for IgE-mediated cases'],
    ['Introduce baked milk under medical supervision when appropriate to accelerate tolerance', 'Ensure adequate calcium and vitamin D supplementation', 'Educate on hidden dairy in processed foods', 'Periodic re-evaluation (every 6-12 months) for tolerance development', 'Avoid soy formula in infants with FPIES to milk (10-40% cross-react)'],
    'Most babies with milk allergy outgrow it by school age. Using a special formula and avoiding dairy is the main treatment. Your allergist will test periodically to see if your child has outgrown it.',
    ['Severe FPIES episode with dehydration and lethargy', 'Anaphylaxis (IgE-mediated)', 'Failure to thrive or nutritional deficiency', 'Accidental ingestion causing respiratory symptoms'],
  ),

  'eosinophilic-esophagitis': ai(
    'eosinophilic-esophagitis', 'Eosinophilic Esophagitis (EoE)', 'Esofagitis eosinofílica', 'food-allergy',
    'DA22.0', 'Chronic immune-mediated esophageal disease characterized by eosinophilic infiltration, often driven by food allergen sensitization.',
    'Th2-mediated inflammation driven by food (and possibly aeroallergen) exposure leads to eotaxin-3 (CCL26) release, recruiting eosinophils to the esophageal epithelium. Chronic inflammation causes subepithelial fibrosis, stricture formation, and esophageal remodeling.',
    ['Dysphagia to solids (adults — most common)', 'Food impaction (often the presenting event)', 'Chest pain and heartburn refractory to PPI', 'Feeding difficulties and vomiting (children)', 'Failure to thrive in pediatric patients', 'History of atopic comorbidities (eczema, asthma, allergic rhinitis)'],
    ['Esophagogastroduodenoscopy with biopsies (gold standard) — ≥15 eos/hpf', 'Endoscopic findings: rings, furrows, white exudates, strictures, crepe-paper mucosa', 'Allergy testing (SPT, sIgE, atopy patch test) to guide elimination diets', 'Barium swallow if stricture suspected', 'Peripheral eosinophil count (often normal)'],
    ['PPI therapy (omeprazole, esomeprazole) — first-line', 'Swallowed topical corticosteroids (fluticasone, budesonide slurry)', 'Dupilumab — FDA-approved biologic for EoE', 'Empiric six-food elimination diet (milk, wheat, egg, soy, fish/shellfish, nuts)', 'Endoscopic dilation for symptomatic strictures'],
    ['Identify and avoid trigger foods through guided elimination', 'Educate about food impaction risk and emergency procedures', 'Avoid rapid eating; chew food thoroughly', 'Long-term maintenance therapy to prevent fibrotic progression', 'Regular endoscopic surveillance'],
    'EoE is a condition where the swallowing tube becomes inflamed from food allergies. Treatment involves medication and avoiding trigger foods. Chew carefully and see your doctor regularly to prevent narrowing.',
    ['Acute food impaction requiring emergent endoscopy', 'Complete esophageal obstruction', 'Esophageal perforation (spontaneous or during dilation)', 'Severe weight loss from food avoidance'],
  ),

  'oral-allergy-syndrome': ai(
    'oral-allergy-syndrome', 'Oral Allergy Syndrome (Pollen-Food Allergy)', 'Síndrome de alergia oral', 'food-allergy',
    'CA91.2', 'IgE-mediated cross-reactivity between pollen proteins and structurally similar proteins in raw fruits, vegetables, and nuts causing localized oropharyngeal symptoms.',
    'Pollen-sensitized individuals produce IgE that cross-reacts with homologous PR-10 (Bet v 1), profilin, or LTP proteins in plant foods. These proteins are heat-labile (destroyed by cooking), explaining why cooked forms are tolerated. Birch-apple, ragweed-melon, and grass-celery are common associations.',
    ['Oropharyngeal pruritus and tingling', 'Lip and tongue swelling (mild, localized)', 'Symptoms limited to oropharynx with raw foods', 'Rapid onset (within minutes)', 'Spontaneous resolution within 30 minutes', 'Toleration of cooked forms of the same food'],
    ['Clinical history correlating pollen sensitization with food symptoms', 'Skin prick test with fresh food extracts (prick-to-prick)', 'Serum-specific IgE to pollen and cross-reactive components (Bet v 1, profilin)', 'Commercial SPT may be falsely negative (labile proteins)', 'Oral food challenge rarely needed'],
    ['Avoidance of raw trigger foods if bothersome', 'Cooking, heating, or microwaving denatures causative proteins', 'Antihistamines for symptomatic relief', 'Peeling fruits may reduce allergen load', 'Pollen immunotherapy may reduce OAS symptoms in some patients'],
    ['Identify cross-reactive food-pollen pairs', 'Carry antihistamines during pollen seasons when OAS worsens', 'Reassure that systemic reactions are rare (<2%)', 'LTP-mediated OAS (Mediterranean) has higher systemic risk — carry epinephrine', 'Cooking eliminates symptoms for most PR-10-mediated reactions'],
    'Oral allergy syndrome occurs when your pollen allergy causes itching in your mouth from certain raw fruits or vegetables. Cooking the food usually eliminates the problem.',
    ['Systemic urticaria or anaphylaxis (rare, suggests LTP sensitization)', 'Progressive oropharyngeal swelling', 'Any respiratory symptoms after eating raw fruits or vegetables'],
  ),

  // ===== DRUG ALLERGY (4) ====================================================

  'penicillin-allergy': ai(
    'penicillin-allergy', 'Penicillin Allergy', 'Alergia a la penicilina', 'drug-allergy',
    'QC44.8', 'Most commonly reported drug allergy; however, >90% of labeled patients are not truly allergic upon formal evaluation, leading to suboptimal antibiotic use.',
    'True penicillin allergy involves IgE-mediated (Type I) reactions to the beta-lactam ring or side-chain determinants. Penicilloyl-polylysine (major determinant) and minor determinants bind IgE on mast cells. Allergy wanes over time: 80% lose sensitization within 10 years. Cross-reactivity with cephalosporins is 1-2% (side-chain dependent).',
    ['Urticaria and angioedema (most common IgE-mediated)', 'Anaphylaxis (rare but life-threatening)', 'Maculopapular rash (often non-allergic, delayed)', 'Serum sickness-like reaction (fever, arthralgias, rash)', 'Drug fever', 'SJS/TEN (rare, severe delayed reaction)'],
    ['Penicillin skin testing (PST) with major and minor determinants — gold standard', 'Graded oral amoxicillin challenge after negative PST', 'Detailed history: timing, morphology, severity of prior reaction', 'Serum-specific IgE to penicillin (lower sensitivity than SPT)', 'Drug provocation test under observation'],
    ['If PST negative: full-dose penicillin/amoxicillin safely administered', 'If truly allergic: use alternative antibiotics (azithromycin, fluoroquinolones)', 'Penicillin desensitization protocol for essential indications (syphilis in pregnancy, enterococcal endocarditis)', 'De-labeling program: remove inaccurate allergy labels after negative testing', 'Third-generation cephalosporins generally safe with true penicillin allergy (dissimilar side chains)'],
    ['Formal allergy evaluation for all patients with penicillin allergy label', 'Update medical records after negative testing (de-labeling)', 'Avoid empiric broad-spectrum antibiotics when penicillin de-labeling is possible', 'Educate patients on the difference between allergy and side effects', 'Pre-procedure allergy assessment for surgical prophylaxis optimization'],
    'Many people labeled penicillin-allergic are actually not. An allergist can do a simple skin test to find out. If you are truly allergic, safe alternatives exist and desensitization is possible when penicillin is essential.',
    ['Anaphylaxis during antibiotic administration', 'Severe mucocutaneous reactions (SJS/TEN): skin pain, blistering, mucosal involvement', 'Airway compromise from angioedema', 'Hemodynamic instability'],
  ),

  'nsaid-hypersensitivity': ai(
    'nsaid-hypersensitivity', 'NSAID Hypersensitivity', 'Hipersensibilidad a AINEs', 'drug-allergy',
    'QC44.2', 'Adverse reactions to NSAIDs encompassing both immunologic (allergic) and non-immunologic (pharmacologic, COX-1 inhibition) mechanisms.',
    'Non-allergic (COX-1 dependent): inhibition of cyclooxygenase-1 shunts arachidonic acid toward the 5-lipoxygenase pathway, increasing cysteinyl leukotrienes causing bronchoconstriction and urticaria. This cross-reacts across all COX-1 inhibitors. Allergic (IgE-mediated): selective reactions to a single NSAID without cross-reactivity.',
    ['AERD/Samter triad: nasal polyps, asthma, aspirin sensitivity', 'Urticaria/angioedema exacerbated by NSAIDs', 'Single-NSAID-induced urticaria or anaphylaxis (IgE-mediated)', 'Respiratory reactions: bronchospasm, rhinorrhea', 'Blended reactions (cutaneous + respiratory)', 'Symptoms typically within 30 minutes to 4 hours'],
    ['Detailed clinical history (drug, timing, symptoms, cross-reactivity pattern)', 'Aspirin provocation/challenge test (gold standard, performed in specialized centers)', 'Distinguish cross-reactive (COX-1) from selective (single-NSAID) phenotype', 'No validated in vitro test currently available', 'Nasal lysine-aspirin challenge for AERD diagnosis'],
    ['COX-1 cross-reactive: avoid all traditional NSAIDs; use COX-2 selective inhibitors (celecoxib) or acetaminophen', 'AERD: aspirin desensitization followed by daily aspirin maintenance (reduces polyp recurrence)', 'Single-NSAID allergy: avoid the culprit and closely related NSAIDs; alternatives are safe', 'Leukotriene receptor antagonists (montelukast) as adjunct in AERD', 'Biologic therapy (dupilumab, mepolizumab) for refractory AERD with nasal polyps'],
    ['Clear documentation of NSAID reaction phenotype in medical record', 'Educate patients on OTC medications containing NSAIDs', 'Medical alert identification', 'Pre-procedural planning for patients requiring antiplatelet therapy', 'Allergist referral for phenotyping and challenge testing'],
    'NSAID sensitivity means certain pain medications cause reactions. An allergist can determine which type you have and identify safe alternatives. Some patients benefit from aspirin desensitization therapy.',
    ['Severe bronchospasm after NSAID ingestion', 'Anaphylaxis with cardiovascular collapse', 'Laryngeal edema', 'Severe asthma exacerbation in AERD patients'],
  ),

  'local-anesthetic-allergy': ai(
    'local-anesthetic-allergy', 'Local Anesthetic Allergy', 'Alergia a anestésicos locales', 'drug-allergy',
    'QC44.5', 'True IgE-mediated allergy to local anesthetics is extremely rare; most reported reactions are vasovagal, epinephrine effects, or anxiety-related.',
    'Local anesthetics are classified as esters (procaine, benzocaine) or amides (lidocaine, bupivacaine). Esters are metabolized to PABA and more likely to cause allergic sensitization. True IgE-mediated reactions involve mast cell activation. Cross-reactivity occurs within the ester group but not between esters and amides.',
    ['Vasovagal syncope (most common misattributed reaction)', 'Tachycardia and tremor from epinephrine additive', 'Anxiety and panic symptoms', 'True allergy: urticaria, angioedema, bronchospasm (rare)', 'Contact dermatitis from ester-type anesthetics (Type IV)', 'Delayed hypersensitivity rash at injection site'],
    ['Detailed history of the reaction (symptoms, timing, agent used)', 'Subcutaneous challenge test with preservative-free amide anesthetic — gold standard', 'Graded-dose provocation under observation', 'Skin prick and intradermal testing (limited positive predictive value)', 'Distinguish vasovagal, toxic, and true allergic reactions'],
    ['If ester allergy confirmed: use amide-class anesthetic (no cross-reactivity)', 'Subcutaneous graded challenge to confirm tolerance before procedure', 'Use preservative-free, epinephrine-free preparations for testing', 'For confirmed (rare) amide allergy: use alternative amide subclass or general anesthesia', 'Diphenhydramine 1% has local anesthetic properties as last-resort alternative'],
    ['Document specific agent and reaction details accurately', 'Allergist evaluation prior to dental or surgical procedures', 'Reassurance that true allergy is exceedingly rare', 'Avoid imprecise allergy labels (e.g., "allergy to all local anesthetics")', 'Test in controlled setting before elective procedures'],
    'True allergy to numbing medications is very rare. Most reactions are from anxiety or adrenaline in the injection. An allergist can safely test you and find a numbing agent that works.',
    ['True anaphylaxis to local anesthetic (extremely rare)', 'Local anesthetic systemic toxicity (LAST): seizures, cardiac arrest from inadvertent intravascular injection', 'Severe vasovagal episode with prolonged loss of consciousness'],
  ),

  'radiocontrast-reaction': ai(
    'radiocontrast-reaction', 'Radiocontrast Media Reaction', 'Reacción a medios de contraste', 'drug-allergy',
    'QC44.6', 'Adverse reactions to iodinated contrast media ranging from mild cutaneous symptoms to life-threatening anaphylactoid reactions; predominantly non-IgE-mediated.',
    'Most reactions are anaphylactoid (non-IgE-mediated): direct activation of mast cells, complement, and the contact/coagulation systems by contrast hyperosmolality and chemotoxicity. True IgE-mediated allergy to contrast is rare but possible. Low-osmolar and iso-osmolar agents have significantly reduced reaction rates.',
    ['Mild: nausea, warmth, flushing, urticaria', 'Moderate: extensive urticaria, bronchospasm, facial edema', 'Severe: hypotension, laryngeal edema, cardiac arrest', 'Delayed reactions (4-48 hours): maculopapular rash (T-cell-mediated)', 'Vasovagal reactions', 'Symptoms typically within 5-30 minutes of injection'],
    ['Clinical history of prior contrast reaction (strongest predictor)', 'No reliable skin test or in vitro test for non-IgE reactions', 'Skin testing may help for severe immediate reactions (emerging evidence)', 'Risk stratification based on reaction severity and prior history', 'Document specific contrast agent, volume, and reaction details'],
    ['Premedication protocol for high-risk patients: prednisone 50 mg at 13, 7, and 1 hour + diphenhydramine 50 mg 1 hour before', 'Use low-osmolar or iso-osmolar non-ionic contrast', 'Use alternative imaging (MRI, ultrasound) when feasible', 'Epinephrine for anaphylactoid reactions — same protocol as anaphylaxis', 'For severe prior reactions: consider gadolinium-based or CO2 angiography'],
    ['Document reaction severity and specific agent', 'Premedication does not prevent all reactions; have resuscitation equipment available', 'Hydration before and after contrast to reduce nephrotoxicity', 'Iodinated contrast allergy does NOT equal shellfish or iodine allergy', 'Consider allergist referral for severe reactors'],
    'A contrast dye reaction does not mean you are allergic to iodine or shellfish. If you have had a prior reaction, pretreatment medications significantly reduce the risk of another. Alternative imaging may be available.',
    ['Severe anaphylactoid reaction with hypotension', 'Laryngeal edema or severe bronchospasm', 'Cardiac arrest', 'Contrast-induced nephropathy in high-risk patients'],
  ),

  // ===== ANAPHYLAXIS (4) =====================================================

  'anaphylaxis-general': ai(
    'anaphylaxis-general', 'Anaphylaxis', 'Anafilaxia', 'anaphylaxis',
    'QA86', 'Severe, potentially fatal systemic allergic reaction with rapid onset involving multiple organ systems, requiring immediate epinephrine administration.',
    'Massive mast cell and basophil degranulation releases histamine, tryptase, leukotrienes, and platelet-activating factor. This causes vasodilation, increased vascular permeability, bronchospasm, and mucus secretion. Distributive shock ensues from profound third-spacing and vasodilation. Biphasic reactions (recurrence without re-exposure) occur in 5-20% of cases.',
    ['Cutaneous: urticaria, flushing, angioedema (present in ~90%)', 'Respiratory: dyspnea, wheeze, stridor, laryngeal edema', 'Cardiovascular: hypotension, tachycardia, syncope', 'Gastrointestinal: nausea, vomiting, abdominal cramps, diarrhea', 'Neurological: sense of doom, confusion, loss of consciousness', 'Rapid progression over minutes'],
    ['Clinical diagnosis using NIAID/FAAN criteria (2 or more organ systems involved after likely allergen exposure)', 'Serum tryptase within 1-2 hours of onset (elevated >11.4 ng/mL supports diagnosis)', 'Post-event allergy workup: skin testing and sIgE 4-6 weeks later', 'Detailed exposure history to identify trigger', 'Baseline tryptase to rule out mastocytosis'],
    ['Epinephrine IM (anterolateral thigh) 0.3-0.5 mg adults, 0.01 mg/kg children — FIRST-LINE, no contraindications', 'Position supine with legs elevated (Trendelenburg)', 'High-flow oxygen', 'IV normal saline bolus 1-2 L for hypotension', 'Adjuncts: H1 antihistamine, H2 blocker, corticosteroids (prevent biphasic), inhaled beta-agonist for bronchospasm', 'Observe 4-6 hours minimum (longer for severe or biphasic risk)'],
    ['Allergen avoidance (identify and document trigger)', 'Prescribe two epinephrine auto-injectors', 'Anaphylaxis emergency action plan', 'Medical alert identification', 'Refer to allergist for trigger identification and long-term management', 'Consider mast cell disorder workup if idiopathic or recurrent'],
    'Anaphylaxis is a severe allergic reaction that can be life-threatening. Epinephrine is the only medication that can stop it — use it immediately and call emergency services. Always carry two auto-injectors.',
    ['ANY signs of anaphylaxis require immediate epinephrine', 'Difficulty breathing or swallowing', 'Feeling faint, dizzy, or confused', 'Rapid swelling of face, lips, or throat', 'Chest tightness or persistent cough', 'Do NOT delay epinephrine for antihistamines'],
  ),

  'exercise-induced-anaphylaxis': ai(
    'exercise-induced-anaphylaxis', 'Exercise-Induced Anaphylaxis', 'Anafilaxia inducida por ejercicio', 'anaphylaxis',
    'QA86.1', 'Anaphylaxis triggered by physical exertion, sometimes only when exercise occurs within hours of ingesting a specific food (food-dependent EIA).',
    'Exercise increases gut permeability and mast cell releasability. In food-dependent EIA (FD-EIA), the co-factor of exercise allows absorption of incompletely digested food allergens (commonly wheat omega-5-gliadin) that would otherwise be tolerated. Mast cell degranulation follows. Exercise alone or food alone is tolerated; the combination triggers anaphylaxis.',
    ['Prodromal warmth, pruritus, and flushing during exercise', 'Urticaria with large (10-15 mm) wheals', 'Progression to angioedema, dyspnea, and hypotension if exercise continues', 'Symptoms typically 10-30 minutes into vigorous exercise', 'Food-dependent form: occurs only when exercise follows specific food ingestion (2-6 hours)', 'Cholinergic urticaria may overlap'],
    ['Clinical history correlating exercise and symptoms', 'Exercise challenge test (treadmill) under medical supervision', 'Food-exercise combination challenge for FD-EIA', 'Serum-specific IgE to wheat omega-5-gliadin (Tri a 19) for wheat-dependent EIA', 'Baseline tryptase to exclude mastocytosis', 'Serum tryptase during episode if possible'],
    ['Carry epinephrine auto-injector during all exercise', 'Stop exercise immediately at first symptom', 'Avoid eating 4-6 hours before exercise (FD-EIA)', 'Avoid specific trigger food before exercise if identified', 'Exercise with a partner who knows the emergency plan', 'Avoid exercise in extreme heat/humidity or after alcohol/NSAIDs (cofactors)'],
    ['Identify food co-triggers through careful history and testing', 'Avoid exercising after eating (especially the trigger food)', 'Avoid cofactors: alcohol, NSAIDs, and hot/humid environments', 'Warm-up gradually (may reduce threshold in some patients)', 'Annual allergist follow-up', 'School and sports team notification with action plan'],
    'Exercise-induced anaphylaxis means your body can have a severe allergic reaction during physical activity, sometimes only when you eat a specific food beforehand. Always exercise with a buddy and carry epinephrine.',
    ['Any breathing difficulty during exercise', 'Widespread hives with lightheadedness during exertion', 'Collapse during exercise', 'Feeling of throat closing during physical activity'],
  ),

  'idiopathic-anaphylaxis': ai(
    'idiopathic-anaphylaxis', 'Idiopathic Anaphylaxis', 'Anafilaxia idiopática', 'anaphylaxis',
    'QA86.2', 'Recurrent anaphylaxis with no identifiable trigger after thorough allergic evaluation; a diagnosis of exclusion.',
    'The mechanism is poorly understood. Proposed theories include occult mast cell activation, unidentified allergens (alpha-gal, galactose-alpha-1,3-galactose from tick bites), or autoimmune IgE against self-antigens. Mast cell disorders (systemic mastocytosis, mast cell activation syndrome) must be excluded.',
    ['Recurrent episodes of anaphylaxis without identifiable trigger', 'Frequency varies: weekly to yearly', 'Same clinical features as triggered anaphylaxis', 'Episodes may cluster then remit spontaneously', 'No consistent temporal pattern with food, exercise, or medications'],
    ['Exhaustive allergy workup: comprehensive SPT and sIgE panels', 'Serum tryptase (baseline and acute) — exclude mastocytosis', 'Alpha-gal IgE (mammalian meat allergy from tick bites)', 'Bone marrow biopsy if elevated baseline tryptase', '24-hour urine for histamine metabolites and prostaglandin D2', 'KIT D816V mutation analysis'],
    ['Epinephrine auto-injector — always carry two', 'Prophylactic regimen: daily H1 + H2 antihistamines and oral corticosteroids during frequent episodes', 'Omalizumab (anti-IgE) for refractory cases — reduces episode frequency', 'Taper prophylactic medications once episode-free for months', 'Treat acute episodes identically to triggered anaphylaxis'],
    ['Always carry two epinephrine auto-injectors', 'Medical alert bracelet', 'Regular allergist follow-up every 3-6 months', 'Maintain symptom diary for pattern identification', 'Re-evaluate for new allergens periodically (alpha-gal, emerging sensitizations)', 'Mast cell disorder screening'],
    'Idiopathic anaphylaxis means severe allergic reactions without a known cause. While the trigger is unknown, the treatment is the same: always carry epinephrine. Daily medications can reduce how often episodes occur.',
    ['All episodes require epinephrine and emergency evaluation', 'Cardiovascular collapse', 'Loss of consciousness', 'Repeated episodes despite prophylactic therapy'],
  ),

  'mast-cell-activation-syndrome': ai(
    'mast-cell-activation-syndrome', 'Mast Cell Activation Syndrome (MCAS)', 'Síndrome de activación mastocitaria', 'anaphylaxis',
    'QA86.Y', 'Episodic mast cell mediator release causing recurrent anaphylaxis-like symptoms without evidence of systemic mastocytosis or clonal mast cell disease.',
    'Mast cells are inappropriately activated by diverse triggers (stress, temperature, vibration, medications) without clonal proliferation. Mediators released include histamine, tryptase, prostaglandin D2, and leukotrienes. Diagnosis requires the triad of: (1) episodic symptoms consistent with mast cell activation, (2) biochemical evidence of mast cell mediator release, and (3) response to mast cell-directed therapy.',
    ['Flushing and urticaria', 'Hypotension and presyncope', 'Abdominal cramping and diarrhea', 'Tachycardia and palpitations', 'Headache and brain fog', 'Bone pain and osteoporosis (chronic mediator effects)'],
    ['Serum tryptase during episode (>20% above baseline + 2 ng/mL)', '24-hour urine: N-methylhistamine, prostaglandin D2 metabolite (11-beta-PGF2alpha)', 'Baseline serum tryptase (normal in MCAS vs. elevated in mastocytosis)', 'Bone marrow biopsy to exclude systemic mastocytosis', 'KIT D816V mutation (negative in MCAS)', 'Response to empiric mast cell-directed therapy supports diagnosis'],
    ['H1 antihistamine (cetirizine, fexofenadine) — daily', 'H2 antihistamine (famotidine) — daily', 'Mast cell stabilizer (cromolyn sodium)', 'Leukotriene receptor antagonist (montelukast)', 'Omalizumab for refractory cases', 'Epinephrine auto-injector for anaphylactic episodes'],
    ['Identify and avoid individual triggers (stress, temperature extremes, alcohol, opioids, NSAIDs)', 'Gradual temperature transitions', 'Stress management techniques', 'Pre-medication before known trigger exposures (procedures, exercise)', 'Medical alert identification', 'Consistent medication adherence'],
    'MCAS causes your mast cells (allergy cells) to release chemicals too easily, causing flushing, stomach upset, and sometimes severe reactions. Daily medications block these chemicals and reduce symptoms.',
    ['Anaphylaxis with cardiovascular collapse', 'Recurrent syncope', 'Severe refractory hypotension', 'Airway compromise'],
  ),

  // ===== IMMUNODEFICIENCY (5) ================================================

  'common-variable-immunodeficiency': ai(
    'common-variable-immunodeficiency', 'Common Variable Immunodeficiency (CVID)', 'Inmunodeficiencia variable común', 'immunodeficiency',
    '4A01.1', 'Most common symptomatic primary immunodeficiency, characterized by hypogammaglobulinemia with impaired antibody responses leading to recurrent infections.',
    'Heterogeneous defect in B-cell differentiation into memory B cells and plasma cells. Most cases are polygenic; identified genes include TNFRSF13B (TACI), ICOS, BAFFR, and CD19. Results in decreased IgG (always) and IgA and/or IgM. T-cell dysfunction present in a subset, predisposing to autoimmune and granulomatous complications.',
    ['Recurrent sinopulmonary infections (pneumonia, sinusitis, otitis)', 'Chronic diarrhea and malabsorption', 'Autoimmune cytopenias (ITP, AIHA) in 20-30%', 'Granulomatous disease (lungs, liver, spleen)', 'Lymphoid hyperplasia and splenomegaly', 'Increased risk of lymphoma and gastric cancer'],
    ['Quantitative immunoglobulins: IgG <500 mg/dL with low IgA and/or IgM', 'Absent or poor response to vaccine antigens (pneumococcal polysaccharide)', 'Flow cytometry: reduced switched memory B cells', 'Exclude secondary causes (medications, protein loss, malignancy)', 'Genetic testing for known CVID-associated genes', 'CT chest for bronchiectasis and granulomatous disease'],
    ['Immunoglobulin replacement therapy (IVIG or SCIG) to maintain IgG trough >500 mg/dL', 'Prophylactic antibiotics for breakthrough infections', 'Aggressive treatment of acute infections', 'Immunosuppression for autoimmune complications (corticosteroids, rituximab)', 'Surveillance for lymphoma and gastric cancer', 'Pulmonary function monitoring for bronchiectasis'],
    ['Avoid live vaccines', 'Annual influenza vaccination (may have reduced response)', 'Pneumococcal and other killed vaccines recommended', 'Regular screening for bronchiectasis (CT every 3-5 years)', 'Screen for autoimmune complications annually', 'Genetic counseling if familial pattern identified'],
    'CVID means your body does not make enough antibodies to fight infections. Regular infusions of immunoglobulin (from donated blood) replace the missing antibodies and significantly reduce infections.',
    ['Severe or unusual infection requiring hospitalization', 'Signs of lymphoma: night sweats, weight loss, enlarged lymph nodes', 'Severe autoimmune cytopenia requiring transfusion', 'Progressive respiratory symptoms or hemoptysis'],
  ),

  'selective-iga-deficiency': ai(
    'selective-iga-deficiency', 'Selective IgA Deficiency', 'Deficiencia selectiva de IgA', 'immunodeficiency',
    '4A01.0', 'Most common primary immunodeficiency (1:500 in Caucasians), with absent or markedly reduced serum IgA while other immunoglobulin classes are normal.',
    'Impaired terminal differentiation of IgA-committed B cells. Most cases are sporadic; HLA associations include A1, B8, DR3. IgA protects mucosal surfaces; its absence increases susceptibility to sinopulmonary and GI infections. Anti-IgA antibodies may develop, posing anaphylaxis risk with blood product transfusions.',
    ['Majority are asymptomatic (85-90%)', 'Recurrent sinopulmonary infections', 'GI infections (Giardia) and celiac-like syndrome', 'Autoimmune associations (celiac disease, SLE, RA, thyroiditis)', 'Increased atopic diseases', 'Anaphylaxis to blood products containing IgA (rare)'],
    ['Serum IgA <7 mg/dL with normal IgG and IgM (age >4 years)', 'Normal vaccine responses', 'Screen for anti-IgA antibodies before blood product administration', 'Screen for celiac disease (use IgG-based TTG if IgA deficient)', 'Evaluate for concurrent IgG subclass deficiency', 'Exclude secondary causes of low IgA'],
    ['Most patients require no specific therapy', 'Prompt antibiotic treatment for infections', 'Prophylactic antibiotics if recurrent infections', 'IgG subclass deficiency + recurrent infections: consider immunoglobulin replacement', 'Washed or IgA-depleted blood products if transfusion needed', 'Treat associated autoimmune conditions per standard guidelines'],
    ['Medical alert bracelet for transfusion risk', 'Inform blood bank of IgA deficiency before any procedure', 'Screen first-degree relatives', 'Annual monitoring for progression to CVID', 'Screen for celiac disease and autoimmune thyroiditis', 'Avoid unnecessary blood product exposure'],
    'IgA deficiency is the most common immune deficiency and most people with it are perfectly healthy. The main concern is a small risk of reactions to blood transfusions, so always inform your doctors.',
    ['Anaphylaxis during blood transfusion (anti-IgA antibodies)', 'Severe or recurrent pneumonia suggesting progression to CVID', 'Signs of autoimmune disease', 'Persistent diarrhea with weight loss'],
  ),

  'x-linked-agammaglobulinemia': ai(
    'x-linked-agammaglobulinemia', 'X-Linked Agammaglobulinemia (Bruton Disease)', 'Agammaglobulinemia ligada al X (enfermedad de Bruton)', 'immunodeficiency',
    '4A01.2', 'Primary immunodeficiency caused by BTK gene mutations leading to absent B cells and profoundly low immunoglobulins, presenting in male infants after maternal antibody wanes.',
    'Mutations in Bruton tyrosine kinase (BTK) on Xq21.3 block pre-B cell maturation at the pro-B to pre-B cell stage. B cells are absent or <2% in peripheral blood. All immunoglobulin classes are profoundly reduced. T-cell function is intact. Patients are susceptible to encapsulated bacteria and enteroviruses.',
    ['Recurrent bacterial infections beginning at 6-9 months of age', 'Pneumonia, otitis media, sinusitis, sepsis', 'Absent or very small tonsils and lymph nodes', 'No palpable lymphadenopathy even during infections', 'Chronic enteroviral meningoencephalitis (devastating)', 'Septic arthritis and osteomyelitis'],
    ['Quantitative immunoglobulins: all classes markedly reduced (IgG <200 mg/dL)', 'Flow cytometry: absent or <2% CD19+ B cells', 'BTK protein expression by flow cytometry (absent)', 'Genetic testing: BTK gene mutation confirmation', 'Family history of affected males (X-linked inheritance)', 'Absent germinal centers on lymph node biopsy'],
    ['Lifelong immunoglobulin replacement therapy (IVIG or SCIG)', 'Target IgG trough >500 mg/dL', 'Prophylactic antibiotics (amoxicillin or azithromycin)', 'Aggressive treatment of infections with extended antibiotic courses', 'Avoid live vaccines (OPV, MMR, rotavirus, varicella)', 'Gene therapy under investigation'],
    ['Carrier testing for female relatives', 'Genetic counseling for family planning', 'Newborn screening in siblings of affected males', 'Avoid live vaccines', 'Contact precautions for enteroviral illness', 'Monitor pulmonary function and CT for bronchiectasis'],
    'Bruton disease means boys are born without the ability to make B cells and antibodies. Lifelong immunoglobulin infusions replace the missing antibodies and allow a normal, active life.',
    ['Sepsis or meningitis', 'Chronic enteroviral meningoencephalitis (personality changes, seizures)', 'Severe pneumonia with respiratory failure', 'Vaccine-associated paralytic polio (if live OPV given)'],
  ),

  'severe-combined-immunodeficiency': ai(
    'severe-combined-immunodeficiency', 'Severe Combined Immunodeficiency (SCID)', 'Inmunodeficiencia combinada grave', 'immunodeficiency',
    '4A01.4', 'The most severe primary immunodeficiency, with absent functional T cells and impaired B and NK cells, fatal within the first year of life without definitive treatment.',
    'Diverse genetic defects (IL2RG/X-linked most common, then ADA, JAK3, RAG1/2, IL7R) impair T-cell development. Without T-cell help, B-cell antibody production fails. The thymus is hypoplastic. TREC-based newborn screening enables early detection. Hematopoietic stem cell transplant is curative if performed before 3.5 months of age.',
    ['Persistent oral candidiasis refractory to treatment', 'Failure to thrive beginning in infancy', 'Chronic diarrhea and malabsorption', 'Pneumocystis jirovecii pneumonia', 'Absent thymic shadow on chest X-ray', 'Absent lymphoid tissue (tonsils, lymph nodes)', 'Graft-versus-host disease from non-irradiated blood products or maternal T cells', 'Disseminated BCG or viral infections'],
    ['Newborn screening: TREC assay (absent or very low T-cell receptor excision circles)', 'Absolute lymphocyte count <2500/mcL in infancy', 'Flow cytometry: absent or very low T cells (CD3+), variable B and NK cells', 'Absent T-cell proliferation to mitogens (PHA)', 'Genetic testing for specific mutation (IL2RG, ADA, etc.)', 'ADA enzyme activity if ADA-SCID suspected'],
    ['Hematopoietic stem cell transplant (HSCT) — definitive, best outcomes before age 3.5 months', 'Gene therapy for ADA-SCID and IL2RG-SCID (FDA-approved)', 'ADA-SCID: enzyme replacement therapy (pegademase bovine) as bridge to HSCT', 'Protective isolation until immune reconstitution', 'Immunoglobulin replacement', 'PCP prophylaxis (trimethoprim-sulfamethoxazole) and antifungal prophylaxis'],
    ['Universal newborn screening with TREC assay', 'Avoid live vaccines in affected infants and unscreened siblings', 'Use only irradiated, CMV-negative, leukoreduced blood products', 'Strict infection control until definitive treatment', 'Genetic counseling for family', 'Screen all siblings at birth'],
    'SCID is a life-threatening condition in babies who are born without a working immune system. Newborn blood screening can detect it early. A bone marrow transplant or gene therapy can be curative, especially when done in the first few months of life.',
    ['Any fever or infection in a known SCID infant is an emergency', 'Respiratory distress (PCP pneumonia)', 'Persistent diarrhea with dehydration', 'Skin rash suggesting GVHD', 'Failure to thrive'],
  ),

  'hiv-acquired-immunodeficiency': ai(
    'hiv-acquired-immunodeficiency', 'HIV/AIDS (Acquired Immunodeficiency)', 'VIH/SIDA (inmunodeficiencia adquirida)', 'immunodeficiency',
    '1C62', 'Progressive acquired immunodeficiency caused by HIV infection destroying CD4+ T cells, leading to opportunistic infections and malignancies.',
    'HIV (a retrovirus) binds CD4 and CCR5/CXCR4 co-receptors, infects helper T cells, macrophages, and dendritic cells. Reverse transcriptase converts viral RNA to DNA, integrating into the host genome. Chronic immune activation and CD4 depletion over years leads to AIDS (CD4 <200 cells/mcL). Viral reservoirs in resting memory T cells prevent eradication.',
    ['Acute retroviral syndrome: fever, pharyngitis, rash, lymphadenopathy (2-4 weeks post-infection)', 'Chronic phase: often asymptomatic for years', 'Generalized lymphadenopathy', 'AIDS-defining conditions: PCP, CMV retinitis, Kaposi sarcoma, cerebral toxoplasmosis, MAC', 'Wasting syndrome, chronic diarrhea', 'HIV-associated neurocognitive disorders'],
    ['HIV-1/2 Ag/Ab combination immunoassay (4th generation) — screening', 'HIV-1/2 antibody differentiation assay — confirmatory', 'HIV-1 RNA quantitative PCR (viral load)', 'CD4+ T-cell count and percentage', 'Genotypic resistance testing before ART initiation', 'Screening for opportunistic infections and co-infections (TB, hepatitis B/C, syphilis)'],
    ['Antiretroviral therapy (ART) for ALL diagnosed patients regardless of CD4 count', 'Preferred regimens: integrase inhibitor-based (bictegravir/TAF/FTC or dolutegravir-based)', 'OI prophylaxis: TMP-SMX when CD4 <200 (PCP), azithromycin when CD4 <50 (MAC)', 'Immune reconstitution inflammatory syndrome (IRIS) management', 'Long-acting injectable ART (cabotegravir/rilpivirine) for adherence support', 'Treatment of opportunistic infections per guidelines'],
    ['Pre-exposure prophylaxis (PrEP) for high-risk individuals', 'Post-exposure prophylaxis (PEP) within 72 hours', 'Universal screening at least once for ages 15-65', 'Consistent condom use', 'Treatment as prevention (U=U: Undetectable = Untransmittable)', 'Prevention of mother-to-child transmission with ART during pregnancy'],
    'HIV is a treatable condition. Modern medications can suppress the virus to undetectable levels, allowing a normal lifespan. Taking your medication daily is key. Undetectable means untransmittable.',
    ['New AIDS-defining opportunistic infection', 'Rapid CD4 decline or virologic failure', 'Severe IRIS reaction', 'Acute retroviral syndrome with severe symptoms', 'Progressive multifocal leukoencephalopathy', 'Suicidal ideation after diagnosis'],
  ),

  // ===== AUTOIMMUNE (5) ======================================================

  'systemic-lupus-erythematosus': ai(
    'systemic-lupus-erythematosus', 'Systemic Lupus Erythematosus (SLE)', 'Lupus eritematoso sistémico', 'autoimmune',
    '4A40.0', 'Chronic multisystem autoimmune disease characterized by autoantibody production and immune complex deposition causing inflammation in virtually any organ.',
    'Loss of immune tolerance to self-antigens (particularly nuclear antigens) leads to production of anti-dsDNA, anti-Smith, and other autoantibodies. Immune complex deposition activates complement (classical pathway) and triggers Type III hypersensitivity in kidneys, skin, joints, and serosal surfaces. Defective clearance of apoptotic debris perpetuates autoantigen exposure.',
    ['Butterfly (malar) rash sparing nasolabial folds', 'Photosensitivity', 'Non-erosive polyarthritis (symmetric, small joints)', 'Oral ulcers (usually painless)', 'Serositis (pleuritis, pericarditis)', 'Lupus nephritis (proteinuria, hematuria)', 'Cytopenias (hemolytic anemia, leukopenia, thrombocytopenia)', 'Fatigue and constitutional symptoms'],
    ['ANA (sensitive but not specific, >95%)', 'Anti-dsDNA (specific, correlates with disease activity and nephritis)', 'Anti-Smith antibodies (most specific for SLE)', 'Complement levels (C3, C4) low during flares', 'CBC, urinalysis, renal function, ESR/CRP', 'Renal biopsy for suspected lupus nephritis (ISN/RPS classification)', 'Antiphospholipid antibodies (anticardiolipin, lupus anticoagulant, anti-beta-2-GP1)'],
    ['Hydroxychloroquine — all SLE patients (reduces flares, organ damage, and mortality)', 'NSAIDs for musculoskeletal and mild serositis symptoms', 'Corticosteroids for moderate-severe flares (taper aggressively)', 'Immunosuppressants: mycophenolate mofetil or cyclophosphamide for lupus nephritis', 'Belimumab (anti-BLyS) and anifrolumab (anti-IFNAR) as add-on biologics', 'Voclosporin for lupus nephritis'],
    ['Strict photoprotection (SPF 50+, UVA/UVB block, protective clothing)', 'Smoking cessation', 'Cardiovascular risk factor management (accelerated atherosclerosis)', 'Vaccination (avoid live vaccines on immunosuppression)', 'Pregnancy planning with disease quiescence for 6+ months', 'Annual ophthalmologic exam for hydroxychloroquine toxicity'],
    'Lupus is a condition where your immune system attacks your own body. Hydroxychloroquine is a critical daily medication that reduces flares. Sun protection, regular follow-up, and planned pregnancies are essential.',
    ['Rapidly progressive renal failure', 'Severe thrombocytopenia with bleeding', 'Cerebritis or psychosis', 'Catastrophic antiphospholipid syndrome', 'Pulmonary hemorrhage', 'Acute pericarditis with tamponade'],
  ),

  'rheumatoid-arthritis-immunology': ai(
    'rheumatoid-arthritis-immunology', 'Rheumatoid Arthritis (Immunologic Perspective)', 'Artritis reumatoide (perspectiva inmunológica)', 'autoimmune',
    'FA20', 'Chronic autoimmune inflammatory arthritis driven by autoantibodies (RF, anti-CCP) and T-cell-mediated synovial inflammation causing joint destruction.',
    'Citrullination of self-proteins in the synovium and lungs generates neoepitopes recognized by autoreactive T and B cells. Anti-citrullinated protein antibodies (ACPA/anti-CCP) and rheumatoid factor form immune complexes in the synovium. TNF-alpha, IL-6, and IL-1 drive pannus formation, which erodes cartilage and bone. Shared epitope (HLA-DRB1) is the strongest genetic risk factor.',
    ['Symmetric polyarthritis of small joints (MCP, PIP, wrist)', 'Morning stiffness >60 minutes', 'Swan-neck and boutonniere deformities (late)', 'Rheumatoid nodules (extensor surfaces)', 'Felty syndrome (splenomegaly, neutropenia)', 'Interstitial lung disease', 'Atlantoaxial subluxation (cervical spine)'],
    ['Anti-CCP antibodies (most specific, 95%)', 'Rheumatoid factor (sensitive but less specific)', 'ESR and CRP (disease activity markers)', 'X-ray hands/feet: periarticular osteopenia, erosions, joint space narrowing', 'Musculoskeletal ultrasound: synovitis, power Doppler signal', 'MRI for early erosion detection', 'Shared epitope HLA-DRB1 typing (prognostic, not diagnostic)'],
    ['Methotrexate — first-line DMARD (anchor drug)', 'Combination DMARDs: MTX + hydroxychloroquine + sulfasalazine (triple therapy)', 'Biologic DMARDs: TNF inhibitors (adalimumab, etanercept), IL-6 inhibitors (tocilizumab), T-cell co-stimulation blockers (abatacept), B-cell depletion (rituximab)', 'JAK inhibitors (tofacitinib, upadacitinib)', 'Low-dose corticosteroids as bridge therapy', 'Treat-to-target strategy: aim for remission or low disease activity'],
    ['Early aggressive treatment to prevent joint damage (window of opportunity)', 'Folic acid supplementation with methotrexate', 'Cardiovascular risk reduction (accelerated atherosclerosis)', 'Infection screening before biologics (TB, hepatitis B)', 'Bone density monitoring', 'Smoking cessation (worsens disease and reduces treatment response)'],
    'Rheumatoid arthritis is caused by your immune system attacking your joints. Early and consistent treatment with medications like methotrexate can prevent permanent joint damage. Never stop medications without consulting your doctor.',
    ['Atlantoaxial instability with neurological symptoms', 'Severe interstitial lung disease', 'Serious infection on immunosuppression', 'Vasculitis with skin ulcers or neuropathy'],
  ),

  'type-1-diabetes-autoimmune': ai(
    'type-1-diabetes-autoimmune', 'Type 1 Diabetes Mellitus (Autoimmune Perspective)', 'Diabetes mellitus tipo 1 (perspectiva autoinmune)', 'autoimmune',
    '5A10', 'Autoimmune destruction of pancreatic beta cells by autoreactive T cells, leading to absolute insulin deficiency.',
    'Environmental triggers (viral infections, gut microbiome changes) in genetically susceptible individuals (HLA-DR3/DR4) activate autoreactive CD4+ and CD8+ T cells against beta-cell antigens (GAD65, IA-2, insulin, ZnT8). Progressive beta-cell destruction occurs over months to years (preclinical stage). Clinical diabetes manifests when >80-90% of beta-cell mass is destroyed.',
    ['Polyuria, polydipsia, and weight loss', 'Diabetic ketoacidosis as initial presentation (30%)', 'Rapid onset in children and adolescents', 'LADA (latent autoimmune diabetes of adults) — slower onset, often misdiagnosed as T2DM', 'Other autoimmune comorbidities (thyroiditis, celiac disease, vitiligo)', 'Low or absent C-peptide'],
    ['Islet autoantibodies: GAD65, IA-2, insulin (IAA), ZnT8 — presence of 2+ is diagnostic', 'C-peptide level (low or undetectable)', 'HLA typing: DR3-DQ2 and/or DR4-DQ8 (risk alleles)', 'Oral glucose tolerance test for staging in at-risk individuals', 'Screening first-degree relatives for autoantibodies (TrialNet)', 'HbA1c, fasting glucose, random glucose >200 mg/dL with symptoms'],
    ['Insulin therapy (basal-bolus or insulin pump) — lifelong', 'Continuous glucose monitoring (CGM)', 'Automated insulin delivery (hybrid closed-loop) systems', 'Teplizumab (anti-CD3) — FDA-approved to delay clinical onset in Stage 2 T1D', 'Carbohydrate counting and medical nutrition therapy', 'Screening for and managing autoimmune comorbidities'],
    ['Screen first-degree relatives with islet autoantibodies (TrialNet)', 'Teplizumab for Stage 2 prevention', 'DKA prevention education', 'Annual screening for thyroid disease and celiac disease', 'Regular ophthalmologic and nephrology screening', 'Psychological support for disease management burden'],
    'Type 1 diabetes is an autoimmune condition where your immune system destroys the cells that make insulin. You will need insulin for life. New technologies like insulin pumps and continuous glucose monitors make management much easier.',
    ['Diabetic ketoacidosis (nausea, vomiting, abdominal pain, Kussmaul breathing)', 'Severe hypoglycemia with loss of consciousness', 'Hypoglycemia unawareness', 'New-onset DKA as first presentation'],
  ),

  'autoimmune-thyroiditis': ai(
    'autoimmune-thyroiditis', 'Autoimmune Thyroiditis (Hashimoto Disease)', 'Tiroiditis autoinmune (enfermedad de Hashimoto)', 'autoimmune',
    '5A00.1', 'Most common cause of hypothyroidism in iodine-sufficient areas, caused by autoimmune destruction of thyroid follicular cells.',
    'CD4+ T-helper cells recognize thyroid antigens (thyroglobulin, TPO) and recruit cytotoxic CD8+ T cells that destroy follicular cells. Anti-TPO and anti-thyroglobulin antibodies are produced. Lymphocytic infiltration and germinal center formation within the thyroid lead to progressive fibrosis and atrophy. Associated with HLA-DR3, DR4, DR5.',
    ['Gradual onset of hypothyroidism: fatigue, cold intolerance, weight gain', 'Firm, non-tender goiter (classic) or atrophic thyroid (late)', 'Hashitoxicosis (transient hyperthyroidism from follicular destruction)', 'Dry skin, constipation, bradycardia', 'Depression and cognitive slowing', 'Associated autoimmune conditions (T1DM, celiac, vitiligo, Addison disease)'],
    ['Anti-TPO antibodies (present in >90%)', 'Anti-thyroglobulin antibodies', 'TSH (elevated) and free T4 (low or low-normal)', 'Thyroid ultrasound: diffuse hypoechogenicity, heterogeneous parenchyma', 'FNA biopsy only if nodule present (evaluate for thyroid lymphoma)', 'Screen for coexisting autoimmune conditions'],
    ['Levothyroxine replacement — standard of care', 'Dose titrated to normalize TSH (goal 0.5-2.5 mIU/L)', 'Monitor TSH every 6-8 weeks during titration, then annually', 'Subclinical hypothyroidism: treat if TSH >10 or symptoms present', 'Selenium supplementation (limited evidence, may reduce anti-TPO levels)', 'Surgery only for compressive goiter or suspected lymphoma'],
    ['Annual TSH monitoring in at-risk populations (family history, autoimmune disease)', 'Screen pregnant women with risk factors', 'Adequate iodine intake (neither excess nor deficiency)', 'Awareness of medications affecting thyroid (amiodarone, lithium, immune checkpoint inhibitors)', 'Counsel about lifelong treatment with levothyroxine', 'Screen for thyroid lymphoma in rapidly enlarging goiter'],
    'Hashimoto disease causes your immune system to slowly damage your thyroid gland, leading to an underactive thyroid. Taking a daily thyroid hormone pill replaces what your thyroid can no longer make and you will feel much better.',
    ['Myxedema coma (severe hypothyroidism: hypothermia, altered mental status, bradycardia)', 'Rapidly enlarging goiter (concern for thyroid lymphoma)', 'Severe depression or psychosis from undiagnosed hypothyroidism', 'Hashimoto encephalopathy (rare: seizures, cognitive decline with high anti-TPO)'],
  ),

  'celiac-disease-immunology': ai(
    'celiac-disease-immunology', 'Celiac Disease (Immunologic Perspective)', 'Enfermedad celíaca (perspectiva inmunológica)', 'autoimmune',
    'DA95.0', 'Autoimmune enteropathy triggered by gluten ingestion in genetically predisposed individuals (HLA-DQ2/DQ8), causing villous atrophy and malabsorption.',
    'Gliadin peptides from gluten are deamidated by tissue transglutaminase (tTG) in the intestinal submucosa, enhancing binding to HLA-DQ2 or DQ8 on antigen-presenting cells. This activates gluten-specific CD4+ T cells, producing IFN-gamma and driving villous atrophy. Intraepithelial lymphocytes (CD8+ T cells, NK cells) directly kill enterocytes via NKG2D-MICA interaction.',
    ['Chronic diarrhea and steatorrhea', 'Abdominal bloating and pain', 'Iron deficiency anemia refractory to oral iron', 'Failure to thrive (children) or weight loss', 'Dermatitis herpetiformis (intensely pruritic papulovesicular rash)', 'Osteoporosis from calcium/vitamin D malabsorption', 'Elevated liver enzymes (cryptogenic)', 'Neuropsychiatric: peripheral neuropathy, ataxia, depression'],
    ['Anti-tTG IgA antibody (first-line screening, >95% sensitivity)', 'Total serum IgA (rule out IgA deficiency causing false-negative)', 'Anti-endomysial antibody (EMA) IgA (confirmatory, highly specific)', 'Deamidated gliadin peptide (DGP) IgG if IgA deficient', 'Duodenal biopsy: villous atrophy, crypt hyperplasia, increased intraepithelial lymphocytes (Marsh classification)', 'HLA-DQ2/DQ8 typing (high negative predictive value)'],
    ['Strict lifelong gluten-free diet (GFD) — cornerstone', 'Nutritional supplementation: iron, folate, calcium, vitamin D, B12 as needed', 'Pneumococcal vaccination (functional hyposplenia)', 'Monitoring adherence with anti-tTG levels and symptoms', 'Refractory celiac: corticosteroids, azathioprine, or cladribine', 'Evaluate for enteropathy-associated T-cell lymphoma (EATL) if refractory'],
    ['Screen first-degree relatives (10-15% prevalence)', 'Screen patients with T1DM, autoimmune thyroiditis, Down syndrome, Turner syndrome', 'Do NOT start GFD before diagnostic testing (causes false negatives)', 'DEXA scan at diagnosis for bone density assessment', 'Dietitian referral for comprehensive gluten-free education', 'Annual follow-up with serology and nutritional labs'],
    'Celiac disease means gluten (found in wheat, barley, and rye) triggers your immune system to damage your small intestine. A strict gluten-free diet allows your gut to heal completely. Even small amounts of gluten can cause damage.',
    ['Severe malnutrition or dehydration', 'Celiac crisis (rare: profuse diarrhea, metabolic derangement)', 'Signs of lymphoma: weight loss, night sweats, abdominal mass', 'Refractory celiac disease with worsening symptoms despite strict GFD'],
  ),

  // ===== HYPERSENSITIVITY (5) ================================================

  'type-i-hypersensitivity': ai(
    'type-i-hypersensitivity', 'Type I Hypersensitivity (Immediate)', 'Hipersensibilidad tipo I (inmediata)', 'hypersensitivity',
    'QA80', 'IgE-mediated immediate hypersensitivity reaction occurring within minutes of allergen exposure, ranging from localized (rhinitis, urticaria) to systemic (anaphylaxis).',
    'Initial sensitization: allergen is processed by APCs and presented to Th2 cells, which produce IL-4 and IL-13, driving B-cell class switch to IgE. IgE binds high-affinity FcepsilonRI receptors on mast cells and basophils. Re-exposure: allergen crosslinks surface IgE, triggering degranulation. Early phase (minutes): histamine, tryptase, prostaglandins. Late phase (4-8 hours): eosinophils, Th2 cytokines, leukotrienes.',
    ['Immediate onset (seconds to minutes)', 'Urticaria and angioedema', 'Rhinitis, conjunctivitis', 'Bronchospasm and wheezing', 'Anaphylaxis (most severe)', 'Pruritus as early symptom'],
    ['Skin prick testing — gold standard for identifying specific IgE', 'Serum-specific IgE (ImmunoCAP)', 'Total serum IgE (supportive)', 'Component-resolved diagnostics for cross-reactivity assessment', 'Basophil activation test (research/emerging)', 'Serum tryptase during acute reaction'],
    ['Allergen avoidance — primary strategy', 'Antihistamines (H1 blockers) for mild symptoms', 'Epinephrine for anaphylaxis', 'Intranasal corticosteroids for allergic rhinitis', 'Allergen immunotherapy (desensitization) for long-term modification', 'Omalizumab (anti-IgE) for severe allergic asthma and chronic urticaria'],
    ['Identify and avoid specific allergens', 'Environmental control measures for aeroallergens', 'Allergen immunotherapy for sustained tolerance', 'Carry epinephrine if history of anaphylaxis', 'Educate on early recognition of symptoms'],
    'Type I hypersensitivity is what most people call an "allergy." Your immune system makes IgE antibodies against a harmless substance, causing rapid symptoms like hives, sneezing, or in severe cases, anaphylaxis.',
    ['Anaphylaxis with respiratory or cardiovascular compromise', 'Severe bronchospasm unresponsive to inhaler', 'Progressive angioedema of lips, tongue, or throat', 'Biphasic anaphylaxis hours after initial reaction'],
  ),

  'type-ii-hypersensitivity': ai(
    'type-ii-hypersensitivity', 'Type II Hypersensitivity (Cytotoxic/Antibody-Mediated)', 'Hipersensibilidad tipo II (citotóxica)', 'hypersensitivity',
    'QA81', 'Antibody-mediated (IgG or IgM) hypersensitivity directed against antigens on cell surfaces or extracellular matrix, causing cell destruction or functional alteration.',
    'Three mechanisms: (1) Complement-dependent cytotoxicity: antibody activates classical complement pathway (C5b-9 MAC) lysing target cells (e.g., transfusion reactions, AIHA). (2) Antibody-dependent cell-mediated cytotoxicity (ADCC): Fc receptors on NK cells and macrophages bind antibody-coated targets. (3) Antibody-mediated cellular dysfunction: antibodies block or stimulate receptors without destroying cells (e.g., Graves disease stimulates TSH receptor; myasthenia gravis blocks AChR).',
    ['Hemolytic transfusion reactions (fever, jaundice, hemoglobinuria)', 'Autoimmune hemolytic anemia', 'Immune thrombocytopenia (ITP)', 'Hemolytic disease of the newborn (Rh incompatibility)', 'Goodpasture syndrome (anti-GBM: pulmonary hemorrhage + glomerulonephritis)', 'Graves disease (stimulatory antibodies)', 'Myasthenia gravis (blocking antibodies)', 'Drug-induced immune cytopenias'],
    ['Direct antiglobulin test (DAT/Coombs) for AIHA', 'Indirect Coombs for alloantibody detection', 'Anti-GBM antibodies (Goodpasture)', 'TSH receptor antibodies (Graves)', 'Anti-AChR antibodies (myasthenia gravis)', 'Peripheral smear showing spherocytes (AIHA) or schistocytes', 'Complement levels (low C3/C4 with complement activation)'],
    ['Depends on specific disease', 'AIHA: corticosteroids first-line, rituximab, splenectomy', 'ITP: corticosteroids, IVIG, thrombopoietin receptor agonists', 'Graves: antithyroid drugs, radioactive iodine, surgery', 'Goodpasture: plasmapheresis + cyclophosphamide + corticosteroids', 'Hemolytic disease of newborn: anti-D prophylaxis, phototherapy, exchange transfusion'],
    ['Blood typing and crossmatching before transfusion', 'RhoGAM (anti-D immunoglobulin) at 28 weeks and postpartum for Rh-negative mothers', 'Avoid culprit drugs in drug-induced cytopenias', 'Monitor DAT in patients on known causative medications', 'Screen for autoimmune conditions in patients with unexplained cytopenias'],
    'Type II hypersensitivity means your antibodies mistakenly target your own cells or tissues. Examples include certain blood disorders and thyroid disease. Treatment depends on the specific condition.',
    ['Acute hemolytic transfusion reaction (fever, back pain, dark urine)', 'Severe anemia with cardiovascular compromise', 'Pulmonary hemorrhage in Goodpasture syndrome', 'Myasthenic crisis with respiratory failure', 'Thyroid storm in Graves disease'],
  ),

  'type-iii-hypersensitivity': ai(
    'type-iii-hypersensitivity', 'Type III Hypersensitivity (Immune Complex)', 'Hipersensibilidad tipo III (complejos inmunes)', 'hypersensitivity',
    'QA82', 'Hypersensitivity caused by deposition of antigen-antibody immune complexes in tissues, activating complement and recruiting neutrophils causing tissue damage.',
    'Immune complexes form in antigen excess or equivalence zone and deposit in blood vessel walls, glomeruli, joints, and skin. Complement activation (C3a, C5a) recruits neutrophils, which release lysosomal enzymes and reactive oxygen species causing vasculitis and tissue necrosis. Arthus reaction is localized; serum sickness is the systemic prototype.',
    ['Serum sickness: fever, arthralgia, urticaria, lymphadenopathy 7-14 days after exposure', 'Vasculitis (palpable purpura)', 'Glomerulonephritis (hematuria, proteinuria)', 'Arthus reaction: localized edema and necrosis at injection site', 'Polyarteritis nodosa (HBV-associated)', 'Lupus nephritis (prototype of chronic immune complex disease)', 'Hypersensitivity pneumonitis (farmer lung)'],
    ['Serum complement levels (C3, C4) — consumed during IC deposition', 'ESR and CRP elevated', 'Urinalysis (RBC casts, proteinuria in nephritis)', 'Skin biopsy with immunofluorescence (granular IC deposition along basement membrane)', 'Renal biopsy: subendothelial or mesangial deposits', 'Serology for underlying cause (ANA, anti-dsDNA, hepatitis B/C, cryoglobulins)'],
    ['Remove or treat the source of antigen (discontinue drug, treat infection)', 'Corticosteroids for moderate to severe disease', 'Plasmapheresis for severe systemic immune complex disease', 'NSAIDs and antihistamines for mild serum sickness', 'Disease-specific immunosuppression (lupus nephritis: mycophenolate)', 'Supportive care and monitoring of renal function'],
    ['Identify and avoid causative antigens', 'Monitor renal function in patients with immune complex diseases', 'Hepatitis B vaccination to prevent HBV-associated vasculitis', 'Careful drug history for serum sickness-like reactions', 'Regular complement and autoantibody monitoring in SLE'],
    'Type III hypersensitivity occurs when antigen-antibody complexes get trapped in your tissues, causing inflammation. Serum sickness is the classic example. Treatment involves removing the trigger and controlling inflammation.',
    ['Rapidly progressive glomerulonephritis', 'Severe vasculitis with end-organ damage', 'Pulmonary hemorrhage (SLE)', 'Serum sickness with anaphylaxis-like features'],
  ),

  'type-iv-hypersensitivity': ai(
    'type-iv-hypersensitivity', 'Type IV Hypersensitivity (Delayed-Type)', 'Hipersensibilidad tipo IV (retardada)', 'hypersensitivity',
    'QA83', 'T-cell-mediated delayed hypersensitivity occurring 24-72 hours after antigen exposure, independent of antibodies. Includes contact dermatitis, granulomatous reactions, and drug hypersensitivity.',
    'Sensitized T cells (CD4+ Th1 and CD8+ cytotoxic) recognize antigen presented by APCs in the context of MHC molecules. Th1 cells release IFN-gamma and TNF-alpha, activating macrophages and causing granuloma formation. CD8+ T cells directly kill target cells (contact dermatitis, SJS/TEN). No antibody involvement. Subtypes: IVa (Th1/macrophage), IVb (Th2/eosinophil), IVc (CD8+/cytotoxic), IVd (T-cell/neutrophil).',
    ['Contact dermatitis (poison ivy, nickel): pruritic vesicular rash at contact site, 24-72 hours', 'Tuberculin (PPD/Mantoux) skin test reaction: induration at 48-72 hours', 'Granulomatous inflammation (TB, sarcoidosis, Crohn disease)', 'Stevens-Johnson syndrome / toxic epidermal necrolysis (drug-induced, severe)', 'DRESS syndrome (drug reaction with eosinophilia and systemic symptoms)', 'Transplant rejection (acute cellular)'],
    ['Patch testing (gold standard for contact dermatitis, 96 allergens)', 'Tuberculin skin test (TST/PPD) — prototype delayed hypersensitivity test', 'Skin biopsy: perivascular lymphocytic infiltrate, spongiosis (contact dermatitis)', 'Granuloma on biopsy (epithelioid histiocytes, giant cells)', 'Drug lymphocyte stimulation test (DLST) for drug hypersensitivity', 'HLA typing for drug hypersensitivity risk (HLA-B*57:01 for abacavir, HLA-B*15:02 for carbamazepine)'],
    ['Contact dermatitis: topical corticosteroids, allergen avoidance', 'Severe contact dermatitis: systemic corticosteroids short course', 'SJS/TEN: immediate drug withdrawal, supportive care (burn unit), consider cyclosporine or IVIG', 'DRESS: drug withdrawal, systemic corticosteroids', 'Granulomatous disease: treat underlying cause (anti-TB therapy, immunosuppression for sarcoidosis)', 'Transplant rejection: pulse methylprednisolone, anti-thymocyte globulin'],
    ['Patch testing to identify contact allergens and guide avoidance', 'HLA screening before high-risk medications (abacavir, carbamazepine)', 'Avoid re-exposure to culprit drugs in SJS/TEN (absolute contraindication)', 'Barrier creams and protective clothing for occupational contact dermatitis', 'Desensitization protocols for essential medications (limited evidence in Type IV)'],
    'Type IV hypersensitivity is a delayed allergic reaction mediated by T cells, not antibodies. Poison ivy rash and certain drug reactions are examples. It takes 1-3 days to develop after exposure.',
    ['SJS/TEN: skin pain, blistering, mucosal erosions, positive Nikolsky sign', 'DRESS: high fever, facial swelling, widespread rash, liver/kidney involvement', 'Acute transplant rejection: fever, graft tenderness, declining function', 'Severe generalized contact dermatitis with secondary infection'],
  ),

  'drug-hypersensitivity-syndrome': ai(
    'drug-hypersensitivity-syndrome', 'Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)', 'Reacción a fármacos con eosinofilia y síntomas sistémicos', 'hypersensitivity',
    'QC42', 'Severe delayed drug hypersensitivity (Type IVb) characterized by skin eruption, eosinophilia, and multiorgan involvement with potential mortality of 5-10%.',
    'Drug or its metabolite activates T cells (primarily CD4+ and CD8+) in genetically susceptible individuals (HLA-linked). Massive Th2-skewed immune response with eosinophil recruitment and organ infiltration. HHV-6 reactivation is a hallmark and may amplify the immune response. Onset is typically 2-8 weeks after drug initiation. Common culprits: anticonvulsants (carbamazepine, phenytoin, lamotrigine), allopurinol, sulfonamides, dapsone.',
    ['High fever (often >38.5 °C)', 'Widespread morbilliform eruption (may progress to exfoliative dermatitis)', 'Facial edema (distinctive feature)', 'Lymphadenopathy (generalized)', 'Eosinophilia (>1500/mcL) or atypical lymphocytosis', 'Hepatitis (most common organ involvement, 80%)', 'Nephritis, pneumonitis, myocarditis, thyroiditis', 'Onset 2-8 weeks after drug initiation'],
    ['RegiSCAR scoring system for diagnosis', 'CBC: eosinophilia >1500/mcL, atypical lymphocytes', 'Liver function tests (often markedly elevated)', 'Renal function panel', 'HHV-6 PCR and serology (reactivation supports diagnosis)', 'Skin biopsy: interface dermatitis with eosinophils', 'HLA typing (HLA-B*58:01 for allopurinol, HLA-A*31:01 for carbamazepine)', 'Echocardiogram if cardiac involvement suspected'],
    ['Immediate discontinuation of all suspected drugs', 'Systemic corticosteroids (prednisone 1 mg/kg/day with slow taper over 3-6 months)', 'Organ-specific supportive care', 'Cyclosporine for steroid-refractory cases', 'Monitor for autoimmune sequelae (thyroiditis, T1DM) up to 12 months', 'Avoid all drugs in the same class (cross-reactivity)', 'Aggressive taper to prevent flare (minimum 6-8 week taper)'],
    ['HLA screening before prescribing high-risk drugs in appropriate populations', 'HLA-B*58:01 screening before allopurinol (especially in Southeast Asian and African American patients)', 'Document the specific drug as an absolute contraindication', 'Alert family members (genetic HLA susceptibility)', 'Avoid structurally related drugs (aromatic anticonvulsant cross-reactivity)', 'MedAlert bracelet for culprit drug'],
    'DRESS is a serious drug reaction that usually starts 2-8 weeks after beginning a new medication. It causes fever, rash, and can damage your liver and other organs. Early drug withdrawal and steroid treatment are critical.',
    ['Liver failure (ALT/AST >10x normal, INR elevation)', 'Myocarditis (chest pain, arrhythmia, heart failure)', 'Acute kidney injury', 'Hemophagocytic lymphohistiocytosis (HLH)', 'Flare during steroid taper', 'Late-onset autoimmune thyroiditis or T1DM (weeks to months after DRESS resolves)'],
  ),

  // ===== IMMUNOTHERAPY (4) ===================================================

  'subcutaneous-immunotherapy': ai(
    'subcutaneous-immunotherapy', 'Subcutaneous Immunotherapy (SCIT / Allergy Shots)', 'Inmunoterapia subcutánea', 'immunotherapy',
    'QC80', 'Allergen-specific immunotherapy administered by subcutaneous injection to induce long-term immune tolerance to environmental allergens, with proven efficacy for allergic rhinitis, allergic asthma, and venom allergy.',
    'Repeated subcutaneous injection of increasing allergen doses shifts the immune response from Th2 to Th1/Treg dominance. IL-10 and TGF-beta from regulatory T cells suppress IgE production while promoting blocking IgG4 antibodies. Mast cell and basophil desensitization occurs. Immune tolerance persists years after completion, unlike pharmacotherapy.',
    ['Build-up phase: weekly injections with escalating doses (typically 6-8 months)', 'Maintenance phase: monthly injections at target dose for 3-5 years', 'Local reactions: erythema, swelling at injection site (common)', 'Systemic reactions: urticaria, bronchospasm, anaphylaxis (rare)', 'Gradual symptom improvement over first year', 'Disease-modifying: reduces new sensitizations and asthma development in children'],
    ['Confirmed IgE-mediated disease (positive SPT or sIgE)', 'Correlation between sensitization and clinical symptoms', 'Inadequate response to pharmacotherapy or allergen avoidance', 'Pre-treatment spirometry for asthmatic patients (FEV1 >70% predicted)', 'Document current medications (beta-blockers increase anaphylaxis risk)', 'Assess patient reliability for long-term adherence'],
    ['Standardized allergen extracts with individualized dosing', '30-minute post-injection observation for systemic reactions', 'Dose adjustment for missed appointments or local reactions', 'Pre-treatment with antihistamines to reduce local reactions', 'Epinephrine immediately available at administration site', 'Venom immunotherapy: 98% protective against re-sting anaphylaxis'],
    ['Administer in supervised medical setting with resuscitation capability', 'Withhold injection if patient has active asthma (peak flow <80%)', 'Avoid exercise for 2 hours post-injection', 'Extended observation for high-risk patients', 'Annual reassessment of clinical response', 'Consider 3-year minimum duration for sustained benefit'],
    'Allergy shots work by gradually training your immune system to tolerate allergens. They require weekly shots initially, then monthly for 3-5 years, but provide long-lasting relief even after stopping.',
    ['Anaphylaxis during or after injection (most within 30 minutes)', 'Severe asthma exacerbation', 'Delayed systemic reaction after leaving office', 'Large local reaction suggesting dose adjustment needed'],
  ),

  'sublingual-immunotherapy': ai(
    'sublingual-immunotherapy', 'Sublingual Immunotherapy (SLIT)', 'Inmunoterapia sublingual', 'immunotherapy',
    'QC80.1', 'Allergen-specific immunotherapy administered as sublingual tablets or drops for allergic rhinitis, offering a home-based alternative to injection immunotherapy.',
    'Allergen placed under the tongue is captured by oral mucosal dendritic cells (Langerhans cells), which migrate to cervical lymph nodes and promote Treg differentiation. Similar immunologic shift to SCIT (Th2-to-Th1/Treg, IgG4 blocking antibodies) but with a stronger mucosal tolerance component. Lower risk of systemic reactions compared to SCIT.',
    ['Local oropharyngeal reactions: itching, swelling, tingling (most common, usually mild)', 'Gastrointestinal symptoms: abdominal pain, nausea', 'Systemic allergic reactions (very rare, <0.1%)', 'Symptom improvement within first pollen season', 'Daily administration at home', 'FDA-approved tablets for grass (Grastek), ragweed (Ragwitek), dust mite (Odactra), mixed grass (Oralair)'],
    ['Confirmed IgE sensitization to available SLIT allergen', 'Clinical correlation with symptoms', 'First dose administered in medical office with 30-minute observation', 'Spirometry for asthmatic patients', 'Assess ability for self-administration and emergency recognition', 'Epinephrine auto-injector prescribed for home use'],
    ['FDA-approved sublingual tablets taken daily', 'Initiate 8-12 weeks before pollen season (seasonal allergens) or year-round (dust mite)', '3-year treatment course recommended', 'Hold tablet under tongue for 1-2 minutes, then swallow', 'First dose in medical office; subsequent doses at home', 'Continue concomitant pharmacotherapy as needed initially'],
    ['First dose always under medical supervision', 'Prescribe and educate on epinephrine auto-injector use', 'Withhold dose during oral wounds, dental procedures, or acute asthma', 'Store tablets properly (some require refrigeration)', 'Do not take with food; hold sublingual for recommended duration', 'Annual follow-up to assess efficacy and adherence'],
    'Sublingual immunotherapy is an allergy tablet you dissolve under your tongue daily at home. It is a convenient alternative to allergy shots for grass, ragweed, and dust mite allergies.',
    ['Anaphylaxis after sublingual dose (very rare but possible)', 'Severe oropharyngeal swelling with dysphagia', 'Asthma exacerbation', 'Severe persistent GI symptoms'],
  ),

  'biologic-therapy-allergy': ai(
    'biologic-therapy-allergy', 'Biologic Therapies in Allergy-Immunology', 'Terapias biológicas en alergia-inmunología', 'immunotherapy',
    'QC80.2', 'Monoclonal antibodies and targeted therapies that modulate specific immune pathways in severe allergic and immunologic diseases.',
    'Biologics target specific molecules in the allergic cascade: Omalizumab binds free IgE, preventing FcepsilonRI binding. Dupilumab blocks IL-4/IL-13 signaling (Th2 pathway). Mepolizumab, reslizumab, and benralizumab target IL-5/IL-5R, reducing eosinophils. Tezepelumab blocks TSLP (epithelial alarmin upstream of Th2 inflammation). These agents treat the underlying immune dysregulation rather than just symptoms.',
    ['Omalizumab: chronic spontaneous urticaria, moderate-severe allergic asthma, nasal polyps, food allergy (adjunct)', 'Dupilumab: moderate-severe atopic dermatitis, asthma with type 2 inflammation, CRSwNP, EoE, COPD with type 2 inflammation', 'Mepolizumab/benralizumab: severe eosinophilic asthma, EGPA', 'Tezepelumab: severe asthma regardless of phenotype', 'Administration: subcutaneous injection (self-administered or office)', 'Onset of action: weeks to months'],
    ['Confirm appropriate phenotype (IgE level, eosinophil count, FeNO) for biologic selection', 'Baseline IgE for omalizumab dosing', 'Blood eosinophil count for anti-IL-5 selection', 'Rule out parasitic infections before anti-eosinophil therapy', 'Assess disease severity meeting criteria for biologic use', 'Monitor disease-specific outcomes (ACT score, EASI score, SNOT-22)'],
    ['Omalizumab: dosed by IgE level and body weight, every 2-4 weeks', 'Dupilumab: 300 mg SC every 2 weeks (after loading dose)', 'Mepolizumab: 100 mg SC every 4 weeks', 'Benralizumab: 30 mg SC every 4 weeks x3, then every 8 weeks', 'Tezepelumab: 210 mg SC every 4 weeks', 'Taper concomitant corticosteroids after biologic initiation (steroid-sparing effect)'],
    ['Supervised first injection with 30-minute observation (omalizumab — anaphylaxis risk 0.1%)', 'Ophthalmologic monitoring on dupilumab (conjunctivitis risk)', 'Helminth screening in endemic areas before anti-eosinophil biologics', 'Do not abruptly stop oral corticosteroids when starting biologics', 'Annual reassessment for continued need', 'Step-down approach: reduce concomitant medications before biologic discontinuation'],
    'Biologic medications are advanced treatments that target specific parts of your immune system causing severe allergies, asthma, or eczema. They are given as injections and can dramatically improve quality of life when standard treatments are not enough.',
    ['Anaphylaxis after omalizumab injection', 'Severe injection site reaction', 'Rebound severe disease after abrupt biologic discontinuation', 'Parasitic superinfection on anti-eosinophil therapy', 'Severe conjunctivitis or keratitis on dupilumab'],
  ),

  'venom-immunotherapy': ai(
    'venom-immunotherapy', 'Venom Immunotherapy', 'Inmunoterapia con veneno', 'immunotherapy',
    'QC80.3', 'Allergen-specific immunotherapy using purified Hymenoptera venom extracts to prevent life-threatening anaphylaxis from future stings; the most effective form of immunotherapy (98% protective).',
    'Repeated venom injection induces venom-specific IgG4 blocking antibodies and Treg-mediated tolerance. Mast cell and basophil threshold for activation is raised. IL-10-producing Tregs suppress Th2 responses. Immune tolerance is long-lasting, often persisting after discontinuation. Efficacy: 98% protection versus 60% with observation alone.',
    ['History of systemic reaction to Hymenoptera sting (urticaria, angioedema, bronchospasm, hypotension)', 'Build-up phase: weekly injections over 8-16 weeks (or rush/cluster protocols)', 'Maintenance: monthly injections for 3-5 years', 'Large local reactions at injection site', 'Systemic reactions during VIT (5-15%, lower than untreated re-sting risk)', 'Near-complete protection by 6-8 weeks of build-up'],
    ['Clinical history of systemic sting reaction', 'Skin prick testing to Hymenoptera venoms (honeybee, wasp, yellow jacket, hornet, fire ant)', 'Serum-specific IgE to venoms', 'Baseline serum tryptase (elevated tryptase increases sting anaphylaxis severity and indicates longer/lifelong VIT)', 'Component-resolved diagnostics: Api m 1 (honeybee), Ves v 5 (yellow jacket) for species identification', 'Venom skin testing may be negative early after reaction — repeat in 4-6 weeks'],
    ['VIT with species-specific purified venom extract', 'Maintenance dose: 100 mcg (300 mcg for fire ant whole-body extract)', 'Rush or cluster build-up protocols for faster protection', 'Continue 5+ years; consider lifelong in patients with elevated tryptase, prior severe anaphylaxis, or mastocytosis', 'Prescribe epinephrine auto-injector during build-up and after VIT completion', 'Pre-medication with antihistamines reduces build-up reactions'],
    ['Avoid known Hymenoptera nesting areas', 'Wear shoes outdoors, avoid bright clothing and fragrances', 'Carry epinephrine auto-injector even during VIT', 'Professional pest control for nests near home', 'Medical alert identification', 'Evaluate for mastocytosis if elevated baseline tryptase'],
    'Venom immunotherapy (allergy shots for bee/wasp stings) is 98% effective at preventing severe reactions to future stings. It is recommended for anyone who has had a serious allergic reaction to a sting.',
    ['Anaphylaxis to sting despite VIT (rare, re-dose or increase maintenance)', 'Anaphylaxis during VIT administration', 'Sting during build-up phase before full protection (carry and use epinephrine)', 'Cardiac arrest from sting anaphylaxis (especially with elevated tryptase or mastocytosis)'],
  ),

  // ===== ADDITIONAL ENTRIES (4) ==============================================

  'chronic-urticaria': ai(
    'chronic-urticaria', 'Chronic Spontaneous Urticaria', 'Urticaria crónica espontánea', 'hypersensitivity',
    'EB05', 'Recurrent wheals (hives) and/or angioedema occurring for more than 6 weeks without an identifiable external trigger.',
    'Autoimmune mechanism in ~50%: IgG autoantibodies against IgE or FcepsilonRI directly activate mast cells. Non-autoimmune: intrinsic mast cell defects with lowered activation threshold. Histamine, leukotrienes, and prostaglandins cause vasodilation, increased permeability, and sensory nerve activation. NOT IgE/allergen-mediated in most cases.',
    ['Pruritic, erythematous, raised wheals lasting <24 hours each', 'Angioedema (deeper swelling, lips/eyes/extremities) in 40%', 'No identifiable external trigger', 'Symptoms fluctuate unpredictably', 'Significant quality of life impact (sleep, work, mood)', 'Dermatographism may coexist'],
    ['Clinical diagnosis (wheals >6 weeks, no trigger)', 'CBC with differential, ESR/CRP', 'TSH and thyroid antibodies (autoimmune thyroiditis association)', 'Autologous serum skin test or basophil histamine release assay (autoimmune subtype)', 'Total IgE (guides omalizumab dosing)', 'Skin biopsy only if wheals last >24 hours (rule out urticarial vasculitis)', 'Hepatitis B/C, ANA, complement if clinically indicated'],
    ['Second-generation H1 antihistamine at standard dose — first-line', 'Up-dose antihistamine to 4x standard dose if inadequate response', 'Omalizumab (anti-IgE) 300 mg SC monthly — second-line', 'Cyclosporine — third-line for refractory cases', 'Short-course corticosteroids for severe flares only (not maintenance)', 'Avoid aspirin and NSAIDs (exacerbate in ~30%)'],
    ['Avoid known exacerbants (NSAIDs, heat, stress, tight clothing)', 'Stress management and sleep hygiene', 'Urticaria activity score (UAS7) diary for monitoring', 'Avoid unnecessary allergy testing (not IgE-mediated)', 'Spontaneous remission occurs in 30-50% within 5 years', 'Annual reassessment for step-down therapy'],
    'Chronic hives are usually caused by your immune system activating skin cells, not by a specific allergy. Daily antihistamines control symptoms for most people, and injectable medication (omalizumab) is available for stubborn cases. Most people eventually go into remission.',
    ['Angioedema involving airway (tongue, larynx)', 'Wheals lasting >24 hours with bruising (suspect urticarial vasculitis)', 'Anaphylaxis-like episodes', 'Severe refractory disease impacting daily function'],
  ),

  'hereditary-angioedema': ai(
    'hereditary-angioedema', 'Hereditary Angioedema (HAE)', 'Angioedema hereditario', 'immunodeficiency',
    'D72.0', 'Genetic deficiency or dysfunction of C1-esterase inhibitor causing recurrent episodes of bradykinin-mediated angioedema without urticaria.',
    'C1-INH deficiency (Type I, 85%) or dysfunction (Type II, 15%) leads to unregulated activation of complement, contact, and fibrinolytic pathways. Excess bradykinin generation increases vascular permeability. NOT histamine-mediated (antihistamines, corticosteroids, and epinephrine are INEFFECTIVE). Autosomal dominant inheritance with variable penetrance. Type III: normal C1-INH, factor XII mutations.',
    ['Recurrent non-pruritic angioedema WITHOUT urticaria (key distinction)', 'Face, extremities, genitalia, and GI tract involvement', 'Abdominal attacks: severe colicky pain, vomiting, diarrhea (may mimic acute abdomen)', 'Laryngeal edema (life-threatening, responsible for mortality)', 'Attacks last 2-5 days without treatment', 'Triggers: trauma, stress, dental procedures, estrogen, ACE inhibitors', 'Family history in ~75% (de novo mutations in 25%)'],
    ['C4 level (always low during and often between attacks — best screening test)', 'C1-INH quantitative level (low in Type I)', 'C1-INH functional assay (low in Types I and II)', 'C1q level (normal in HAE, low in acquired angioedema)', 'Genetic testing for C1-INH mutations or Factor XII mutations', 'Family screening of first-degree relatives'],
    ['Acute attack: icatibant (bradykinin B2 receptor antagonist), ecallantide (kallikrein inhibitor), or C1-INH concentrate (plasma-derived or recombinant)', 'Long-term prophylaxis: lanadelumab (anti-kallikrein monoclonal antibody) SC every 2-4 weeks', 'Berotralstat (oral kallikrein inhibitor) daily', 'Plasma-derived C1-INH concentrate for long-term prophylaxis', 'Short-term prophylaxis before procedures: C1-INH concentrate', 'AVOID: ACE inhibitors, estrogen-containing contraceptives'],
    ['Genetic counseling and family screening', 'Avoid ACE inhibitors (can trigger severe attacks)', 'Avoid estrogen-containing medications', 'Always carry on-demand treatment for acute attacks', 'Develop action plan for dental and surgical procedures (pre-procedural prophylaxis)', 'Medical alert identification', 'Emergency department letter explaining HAE management'],
    'Hereditary angioedema causes recurrent swelling episodes from a missing protein in your blood. Unlike allergic swelling, it does NOT respond to antihistamines or epinephrine. Specific medications are available that work very well both for treatment and prevention.',
    ['Laryngeal angioedema (hoarseness, stridor, dyspnea) — life-threatening emergency', 'Severe abdominal attack with dehydration', 'Facial or tongue swelling progressing toward airway', 'Any attack not responding to on-demand therapy within 1 hour'],
  ),

  'atopic-dermatitis': ai(
    'atopic-dermatitis', 'Atopic Dermatitis (Eczema)', 'Dermatitis atópica (eccema)', 'hypersensitivity',
    'EA80', 'Chronic relapsing inflammatory skin disease driven by Th2 immune dysregulation and skin barrier dysfunction, strongly associated with the atopic triad (eczema, asthma, allergic rhinitis).',
    'Filaggrin loss-of-function mutations impair the epidermal barrier, allowing allergen penetration and transepidermal water loss. Th2-dominant inflammation (IL-4, IL-13, IL-31) perpetuates barrier disruption and itch. Epicutaneous sensitization through damaged skin may drive food allergy and asthma development (atopic march). Staphylococcus aureus colonization (>90%) exacerbates inflammation through superantigens.',
    ['Intense pruritus (hallmark, drives scratch-itch cycle)', 'Age-dependent distribution: face/extensors (infants), flexural folds (children/adults)', 'Xerosis (dry skin)', 'Lichenification from chronic scratching', 'Eczema herpeticum (HSV superinfection)', 'Associated: keratosis pilaris, ichthyosis vulgaris, pityriasis alba', 'Sleep disturbance and psychosocial impact'],
    ['Clinical diagnosis (Hanifin-Rajka criteria)', 'Severity scoring: SCORAD, EASI, IGA', 'Skin prick testing or sIgE for comorbid food allergy/aeroallergen sensitization', 'Patch testing if contact dermatitis suspected', 'Skin culture if secondary infection suspected', 'Serum IgE (often elevated but non-specific)', 'Skin biopsy rarely needed (spongiotic dermatitis with eosinophils)'],
    ['Emollients and skin barrier repair — cornerstone (apply immediately after bathing)', 'Topical corticosteroids (low-potency face/folds, mid-high potency body)', 'Topical calcineurin inhibitors (tacrolimus, pimecrolimus) — steroid-sparing', 'Topical PDE4 inhibitor (crisaborole)', 'Topical JAK inhibitor (ruxolitinib)', 'Dupilumab (anti-IL-4/13) for moderate-severe disease', 'Oral JAK inhibitors (abrocitinib, upadacitinib) for refractory disease', 'Wet wrap therapy for acute flares'],
    ['Daily emollient use even during remission', 'Avoid triggers: harsh soaps, fragrances, wool, excessive heat', 'Short lukewarm baths with gentle cleanser', 'Bleach baths (1/4-1/2 cup per full tub) 2-3x weekly to reduce S. aureus', 'Proactive intermittent topical anti-inflammatory maintenance', 'Screen and treat comorbid food allergies (do not use elimination diets empirically)', 'Early introduction of allergenic foods to prevent food allergy development'],
    'Eczema makes your skin dry, itchy, and inflamed because of immune system overactivity and a weakened skin barrier. Moisturizing daily is the most important thing you can do. New biologic treatments are available for severe cases.',
    ['Eczema herpeticum (widespread vesicles, fever, pain — HSV emergency)', 'Erythroderma (generalized redness >90% body surface area)', 'Severe secondary bacterial infection (cellulitis, abscess)', 'Kaposi varicelliform eruption', 'Severe disease unresponsive to topical therapy requiring systemic escalation'],
  ),

  'allergic-bronchopulmonary-aspergillosis': ai(
    'allergic-bronchopulmonary-aspergillosis', 'Allergic Bronchopulmonary Aspergillosis (ABPA)', 'Aspergilosis broncopulmonar alérgica', 'hypersensitivity',
    'CA22', 'Complex hypersensitivity reaction (Types I, III, and IV) to Aspergillus fumigatus colonizing the airways, occurring in patients with asthma or cystic fibrosis.',
    'Aspergillus spores germinate in bronchial mucus, releasing antigens that trigger IgE-mediated (Type I) and immune complex (Type III) hypersensitivity. Th2-driven eosinophilic inflammation and mucoid impaction cause bronchiectasis. Persistent antigenic stimulation leads to airway remodeling, central bronchiectasis, and mucus plugging with high-attenuation mucus (HAM).',
    ['Poorly controlled asthma with recurrent exacerbations', 'Productive cough with brownish mucus plugs', 'Transient pulmonary infiltrates (fleeting opacities)', 'Central bronchiectasis (characteristic)', 'Peripheral blood eosinophilia', 'Expectoration of fungal casts', 'Malaise, low-grade fever during exacerbations'],
    ['Total serum IgE markedly elevated (>1000 IU/mL)', 'Aspergillus-specific IgE (positive skin prick test or sIgE)', 'Aspergillus-specific IgG (precipitating antibodies)', 'Peripheral eosinophilia (>500/mcL)', 'CT chest: central bronchiectasis, high-attenuation mucus, fleeting infiltrates', 'Sputum culture for Aspergillus (supportive but not required)', 'Rosenberg-Patterson diagnostic criteria'],
    ['Oral corticosteroids (prednisone 0.5 mg/kg/day for 2 weeks, then taper over 3-6 months)', 'Itraconazole as steroid-sparing antifungal (reduces fungal burden)', 'Omalizumab (anti-IgE) for corticosteroid-dependent ABPA', 'Monitor total IgE every 8 weeks (>35% rise suggests relapse)', 'Optimize asthma controller therapy', 'Airway clearance techniques'],
    ['Monitor total IgE serially as relapse marker', 'Annual CT chest in chronic ABPA', 'Maintain good asthma control to reduce Aspergillus colonization', 'Avoid environments with high mold exposure', 'Screen cystic fibrosis patients annually for ABPA', 'Itraconazole drug level monitoring (hepatotoxicity, drug interactions)'],
    'ABPA is an allergic reaction to a mold (Aspergillus) that grows in the airways. It causes worsening asthma and can damage your lungs if untreated. Steroids and antifungal medications control the condition effectively.',
    ['Severe asthma exacerbation not responding to standard therapy', 'Hemoptysis', 'Respiratory failure', 'Progression to pulmonary fibrosis', 'Invasive aspergillosis in immunocompromised patients'],
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getAllergyImmunologyEntry(id: string): AllergyImmunologyEntry | undefined {
  return ALLERGY_IMMUNOLOGY_ENTRIES[id];
}

export function searchAllergyImmunology(query: string): AllergyImmunologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(ALLERGY_IMMUNOLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.icd11.toLowerCase().includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)) ||
    e.treatment.some(t => t.toLowerCase().includes(q)),
  );
}

export function getAllergyImmunologyByCategory(category: AllergyCategory): AllergyImmunologyEntry[] {
  return Object.values(ALLERGY_IMMUNOLOGY_ENTRIES).filter(e => e.category === category);
}

export function getAllergyImmunologyCount(): number {
  return Object.keys(ALLERGY_IMMUNOLOGY_ENTRIES).length;
}
