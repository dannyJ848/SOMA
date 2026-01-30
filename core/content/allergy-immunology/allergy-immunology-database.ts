/**
 * Allergy & Immunology Database
 *
 * Comprehensive reference database for 3rd-year medical students
 * covering allergic diseases, immunodeficiencies, autoimmune conditions,
 * hypersensitivity reactions, and immunotherapy.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AllergyImmunologyCategory =
  | 'allergic-rhinitis'
  | 'food-allergy'
  | 'drug-allergy'
  | 'anaphylaxis'
  | 'immunodeficiency'
  | 'autoimmune'
  | 'hypersensitivity'
  | 'immunotherapy'
  | 'eosinophilic';

export interface AllergyImmunologyEntry {
  id: string;
  name: string;
  category: AllergyImmunologyCategory;
  description: string;
  pathophysiology: string;
  clinicalPresentation: string;
  diagnosticWorkup: string;
  management: string;
  complications: string;
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Helper – compact entry builder
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  category: AllergyImmunologyCategory,
  description: string,
  pathophysiology: string,
  clinicalPresentation: string,
  diagnosticWorkup: string,
  management: string,
  complications: string,
  keyPearls: string[],
  references: string[],
): AllergyImmunologyEntry => ({
  id,
  name,
  category,
  description,
  pathophysiology,
  clinicalPresentation,
  diagnosticWorkup,
  management,
  complications,
  keyPearls,
  references,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const allergyImmunologyDatabase: Record<string, AllergyImmunologyEntry> = {
  // ── Allergic Rhinitis ────────────────────────────────────────────────
  'seasonal-allergic-rhinitis': entry(
    'seasonal-allergic-rhinitis',
    'Seasonal Allergic Rhinitis',
    'allergic-rhinitis',
    'IgE-mediated inflammation of the nasal mucosa triggered by seasonal aeroallergens such as tree, grass, and weed pollens.',
    'Inhaled pollen cross-links allergen-specific IgE on mast cells in the nasal mucosa, triggering degranulation and release of histamine, leukotrienes, and prostaglandins. A late-phase reaction 4-8 hours later involves eosinophil and T-cell recruitment.',
    'Paroxysmal sneezing, clear rhinorrhea, nasal congestion, and pruritus of the nose, palate, and eyes. Symptoms follow a seasonal pattern. Physical exam may show pale, boggy turbinates and allergic shiners.',
    'Clinical history correlating symptoms with pollen seasons. Skin prick testing (SPT) or serum-specific IgE to suspected pollens. Nasal cytology may show eosinophils.',
    'Allergen avoidance. Intranasal corticosteroids are first-line. Second-generation antihistamines (cetirizine, loratadine) for mild cases. Intranasal azelastine for refractory symptoms. Allergen immunotherapy (SCIT or SLIT) for inadequate pharmacotherapy response.',
    'Sinusitis, nasal polyps, eustachian tube dysfunction, otitis media with effusion, sleep disturbance, impaired concentration and school/work performance.',
    [
      'Intranasal corticosteroids are the single most effective pharmacotherapy for allergic rhinitis.',
      'The "allergic salute" (upward rubbing of the nose) and Dennie-Morgan lines are classic exam findings in children.',
      'Starting intranasal steroids 1-2 weeks before the expected pollen season improves symptom control.',
    ],
    [
      'Dykewicz MS, et al. J Allergy Clin Immunol. 2020;146(4):721-767.',
      'Bousquet J, et al. Allergy. 2020;75(7):1582-1602.',
    ],
  ),

  'perennial-allergic-rhinitis': entry(
    'perennial-allergic-rhinitis',
    'Perennial Allergic Rhinitis',
    'allergic-rhinitis',
    'Year-round IgE-mediated nasal inflammation driven by indoor allergens such as dust mites, mold, pet dander, and cockroach.',
    'Chronic exposure to indoor allergens leads to persistent IgE-mediated mast cell activation and ongoing eosinophilic inflammation of the nasal mucosa. Remodeling of the nasal epithelium may occur with prolonged inflammation.',
    'Chronic nasal congestion (often predominant symptom), postnasal drip, hyposmia, and mouth breathing. Less sneezing/pruritus compared to seasonal form. Hypertrophied turbinates on exam.',
    'SPT or serum-specific IgE to perennial allergens (dust mite, cat, dog, mold, cockroach). Consider CT sinuses if concurrent sinusitis is suspected.',
    'Environmental controls (allergen-proof bedding covers, HEPA filters, humidity control). Intranasal corticosteroids daily. Antihistamines as adjuncts. Allergen immunotherapy for dust mite and pet dander. Montelukast as add-on if needed.',
    'Chronic sinusitis, nasal polyposis, obstructive sleep apnea in children, orthodontic abnormalities from chronic mouth breathing.',
    [
      'Dust mite allergy is the most common cause of perennial allergic rhinitis worldwide.',
      'Congestion predominates over sneezing in perennial forms, unlike seasonal rhinitis.',
      'Keeping indoor humidity below 50% reduces dust mite proliferation.',
    ],
    [
      'Brozek JL, et al. J Allergy Clin Immunol. 2010;126(3):466-476.',
    ],
  ),

  'allergic-conjunctivitis': entry(
    'allergic-conjunctivitis',
    'Allergic Conjunctivitis',
    'allergic-rhinitis',
    'IgE-mediated inflammation of the conjunctiva, commonly co-occurring with allergic rhinitis (allergic rhinoconjunctivitis).',
    'Aeroallergens contact the conjunctival surface, cross-linking IgE on local mast cells. Histamine release causes vasodilation, increased vascular permeability, and stimulation of sensory nerves producing itch.',
    'Bilateral eye pruritus (hallmark), tearing, conjunctival injection, and chemosis. Lid edema. In vernal keratoconjunctivitis, giant papillae on the tarsal conjunctiva ("cobblestoning").',
    'Clinical diagnosis. SPT or serum IgE to identify triggers. Slit-lamp exam for vernal or atopic keratoconjunctivitis.',
    'Allergen avoidance and cold compresses. Topical dual-action agents (olopatadine, ketotifen). Topical mast cell stabilizers for prophylaxis. Short-term topical vasoconstrictors. Avoid topical corticosteroids without ophthalmology follow-up.',
    'Corneal shield ulcers in vernal keratoconjunctivitis, keratoconus in atopic keratoconjunctivitis, corneal scarring, visual impairment.',
    [
      'Itching is the cardinal symptom that distinguishes allergic from infectious conjunctivitis.',
      'Vernal keratoconjunctivitis predominantly affects boys in warm climates and may be sight-threatening.',
      'Topical dual-action antihistamine/mast cell stabilizers are preferred first-line therapy.',
    ],
    [
      'Bielory L, et al. J Allergy Clin Immunol Pract. 2020;8(5):1466-1474.',
    ],
  ),

  'non-allergic-rhinitis': entry(
    'non-allergic-rhinitis',
    'Non-Allergic Rhinitis',
    'allergic-rhinitis',
    'Chronic nasal symptoms without evidence of IgE-mediated allergic sensitization, encompassing vasomotor, gustatory, hormonal, and drug-induced subtypes.',
    'Heterogeneous mechanisms including autonomic nervous system dysregulation (vasomotor), neurogenic inflammation, and local mucosal irritation. Nociceptive C-fiber activation and parasympathetic overactivity lead to rhinorrhea and congestion without eosinophilic inflammation.',
    'Chronic nasal congestion and/or rhinorrhea triggered by temperature changes, strong odors, spicy foods, alcohol, or positional changes. Absence of significant sneezing or pruritus. Negative allergy testing.',
    'Diagnosis of exclusion after negative SPT/serum-specific IgE. Nasal cytology may differentiate non-allergic rhinitis with eosinophilia syndrome (NARES).',
    'Intranasal ipratropium for rhinorrhea-predominant symptoms. Intranasal corticosteroids or azelastine for congestion. Avoidance of identified triggers. Rhinitis medicamentosa requires discontinuation of topical decongestants.',
    'Rhinitis medicamentosa (rebound congestion from decongestant overuse), chronic sinusitis, diminished quality of life.',
    [
      'Non-allergic rhinitis accounts for up to 50% of chronic rhinitis cases.',
      'Rhinitis medicamentosa should be suspected with >3 days of topical decongestant use.',
      'NARES (non-allergic rhinitis with eosinophilia) responds well to intranasal corticosteroids.',
    ],
    [
      'Segboer CL, et al. Allergy. 2012;67(9):1073-1080.',
    ],
  ),

  // ── Food Allergy ─────────────────────────────────────────────────────
  'ige-mediated-food-allergy': entry(
    'ige-mediated-food-allergy',
    'IgE-Mediated Food Allergy',
    'food-allergy',
    'Immediate hypersensitivity reaction to food proteins mediated by allergen-specific IgE, most commonly to peanut, tree nuts, milk, egg, wheat, soy, fish, shellfish, and sesame.',
    'Oral ingestion of food protein leads to cross-linking of IgE on gastrointestinal and systemic mast cells and basophils. Degranulation releases histamine, tryptase, leukotrienes, and prostaglandins causing rapid-onset symptoms within minutes to 2 hours.',
    'Urticaria, angioedema, oral pruritus/tingling (oral allergy syndrome), nausea, vomiting, abdominal pain, diarrhea, laryngeal edema, wheezing, hypotension. Biphasic reactions occur in 5-20% of cases.',
    'Detailed dietary history with timing of reactions. SPT and/or serum-specific IgE. Oral food challenge (OFC) is the gold standard. Component-resolved diagnostics (e.g., Ara h 2 for peanut) improve specificity.',
    'Strict allergen avoidance and education on label reading. Epinephrine auto-injector for all patients. Antihistamines for mild cutaneous reactions. FDA-approved peanut oral immunotherapy (Palforzia) for peanut allergy ages 4-17. Omalizumab for multi-food allergy.',
    'Anaphylaxis, nutritional deficiencies from overly restrictive diets, anxiety and reduced quality of life, accidental exposure risk.',
    [
      'Epinephrine is the first-line treatment for food-induced anaphylaxis, not antihistamines.',
      'Ara h 2-specific IgE is a better predictor of clinical peanut allergy than whole peanut IgE.',
      'Most children outgrow milk and egg allergy; peanut, tree nut, and shellfish allergies tend to persist.',
      'Early introduction of peanut (4-6 months) in high-risk infants reduces peanut allergy risk (LEAP study).',
    ],
    [
      'Sampson HA, et al. J Allergy Clin Immunol. 2014;133(2):291-307.',
      'Du Toit G, et al. N Engl J Med. 2015;372(9):803-813.',
    ],
  ),

  'food-protein-induced-enterocolitis': entry(
    'food-protein-induced-enterocolitis',
    'Food Protein-Induced Enterocolitis Syndrome (FPIES)',
    'food-allergy',
    'Non-IgE-mediated food allergy presenting with profuse vomiting and diarrhea 1-4 hours after ingestion of the trigger food, most commonly milk, soy, rice, or oats in infants.',
    'T-cell-mediated intestinal inflammation with increased TNF-alpha, decreased TGF-beta, and local neutrophil infiltration. Intestinal permeability increases, causing fluid shifts and potential hypovolemic shock in severe cases.',
    'Acute form: repetitive, projectile vomiting 1-4 hours post-ingestion, followed by diarrhea, lethargy, and pallor. Severe cases cause hypothermia and hypotension mimicking sepsis. Chronic form (ongoing exposure): failure to thrive, chronic diarrhea.',
    'Clinical diagnosis based on characteristic presentation and timing. No role for SPT or serum IgE (negative by definition). Oral food challenge with IV access is confirmatory. Stool may show occult blood, neutrophils.',
    'Strict avoidance of trigger food. Ondansetron IV for acute episodes (increasingly used). IV fluid resuscitation for severe acute reactions. Most children outgrow FPIES by age 3-5; supervised OFC to assess tolerance.',
    'Severe dehydration and hypovolemic shock, failure to thrive, methemoglobinemia (rare), unnecessary sepsis workups and antibiotics.',
    [
      'FPIES is commonly misdiagnosed as sepsis in infants presenting with vomiting, lethargy, and hypotension.',
      'Standard allergy testing (SPT, IgE) is negative in FPIES—it is a non-IgE-mediated reaction.',
      'Ondansetron has emerged as an effective acute treatment for FPIES episodes.',
      'Rice and oats are common FPIES triggers—a fact often surprising since they are considered hypoallergenic.',
    ],
    [
      'Nowak-Wegrzyn A, et al. J Allergy Clin Immunol. 2017;139(4):1111-1126.',
    ],
  ),

  'eosinophilic-esophagitis': entry(
    'eosinophilic-esophagitis',
    'Eosinophilic Esophagitis (EoE)',
    'eosinophilic',
    'Chronic, immune-mediated esophageal disease characterized by eosinophil-predominant inflammation leading to esophageal dysfunction.',
    'Th2-mediated immune response driven by food and aeroallergens. IL-5, IL-13, and eotaxin-3 recruit eosinophils to the esophageal epithelium. Chronic inflammation leads to subepithelial fibrosis and esophageal remodeling.',
    'Children: feeding difficulties, vomiting, abdominal pain, failure to thrive. Adults: dysphagia (especially for solids), food impaction (may be the presenting event), heartburn refractory to PPI. Endoscopy shows rings, furrows, white exudates, strictures.',
    'Esophagogastroduodenoscopy (EGD) with biopsies from proximal and distal esophagus required. Histology: >=15 eosinophils per high-power field (eos/hpf). Allergy evaluation (SPT, specific IgE) to identify potential food triggers.',
    'PPI trial (some patients are PPI-responsive). Topical swallowed corticosteroids (budesonide slurry, fluticasone swallowed). Elimination diets (empiric 6-food or 2-food elimination, or targeted). Esophageal dilation for strictures. Dupilumab (FDA-approved biologic for EoE).',
    'Esophageal stricture formation, food impaction requiring emergent endoscopy, esophageal perforation (rare, especially with dilation), nutritional deficiencies with restrictive diets.',
    [
      'EoE is the most common cause of food impaction and dysphagia in young adults.',
      'A threshold of >=15 eos/hpf on esophageal biopsy is required for diagnosis.',
      'Dupilumab is the first FDA-approved biologic for EoE.',
      'The "rings, furrows, exudates" triad on endoscopy is classic but not always present.',
    ],
    [
      'Dellon ES, et al. Gastroenterology. 2022;163(5):1249-1271.',
      'Hirano I, et al. N Engl J Med. 2022;387(25):2317-2330.',
    ],
  ),

  'oral-allergy-syndrome': entry(
    'oral-allergy-syndrome',
    'Oral Allergy Syndrome (Pollen-Food Allergy)',
    'food-allergy',
    'IgE-mediated cross-reactivity between pollen proteins and structurally similar proteins in raw fruits, vegetables, and nuts, causing localized oropharyngeal symptoms.',
    'Sensitization to pollen allergens (e.g., birch Bet v 1) produces IgE that cross-reacts with homologous proteins in plant foods (e.g., PR-10 proteins in apple, cherry, peach). These proteins are heat-labile and denatured by cooking.',
    'Immediate pruritus, tingling, or mild swelling of the lips, tongue, and oropharynx upon eating raw fruits or vegetables. Symptoms resolve within minutes. Systemic reactions are rare (<2%).',
    'Clinical history is usually sufficient. SPT with fresh food extracts (prick-to-prick) is more sensitive than commercial extracts. Component testing (e.g., Bet v 1, Pru p 3) can clarify risk.',
    'Avoidance of raw forms of trigger foods. Cooked/processed forms are generally tolerated. Antihistamines for symptoms. Epinephrine auto-injector generally not required unless systemic reactions occur. Birch pollen immunotherapy may reduce symptoms.',
    'Very low risk of systemic reactions. Rare progression to anaphylaxis (more likely with lipid transfer protein sensitization). Unnecessary food avoidance if not properly counseled.',
    [
      'Birch-apple, birch-cherry, ragweed-melon, and grass-tomato are classic cross-reactivity pairings.',
      'Cooking denatures the labile proteins, so cooked forms are tolerated.',
      'Lipid transfer protein (LTP) allergy is a more dangerous variant that is heat-stable and can cause systemic reactions.',
    ],
    [
      'Carlson G, Coop C. Ann Allergy Asthma Immunol. 2019;123(1):47-53.',
    ],
  ),

  // ── Drug Allergy ─────────────────────────────────────────────────────
  'penicillin-allergy': entry(
    'penicillin-allergy',
    'Penicillin Allergy',
    'drug-allergy',
    'The most commonly reported drug allergy. Most patients labeled penicillin-allergic are not truly allergic, and de-labeling through testing is a major antimicrobial stewardship initiative.',
    'True penicillin allergy is IgE-mediated (Type I) targeting the beta-lactam ring or side chains. The major determinant is penicilloyl-polylysine; minor determinants include penicillin G, penicilloate, and penilloate. Delayed reactions may involve T-cell-mediated mechanisms (Type IV).',
    'Immediate (within 1 hour): urticaria, angioedema, bronchospasm, anaphylaxis. Accelerated (1-72 hours): urticaria, rash. Delayed (>72 hours): maculopapular rash, serum sickness-like reactions, drug fever. Severe: SJS/TEN, DRESS, AIN.',
    'Detailed drug allergy history (timing, symptoms, treatment required). Penicillin skin testing (major and minor determinants) followed by oral amoxicillin challenge. Direct oral amoxicillin challenge for low-risk histories. Negative predictive value of skin testing >95%.',
    'For confirmed allergy: alternative antibiotics or desensitization if penicillin is essential (e.g., syphilis in pregnancy). De-labeling: negative skin test + oral challenge allows safe future use. Graded dose challenges for low-risk patients. Desensitization protocols for IgE-mediated allergy when drug is required.',
    'Unnecessary use of broader-spectrum antibiotics (increased cost, resistance, C. diff risk), surgical prophylaxis limitations, suboptimal treatment of syphilis, endocarditis, or streptococcal infections.',
    [
      'Over 90% of patients labeled "penicillin allergic" can safely tolerate penicillins after formal evaluation.',
      'Penicillin allergy de-labeling is a key antimicrobial stewardship intervention.',
      'Cross-reactivity between penicillins and cephalosporins is approximately 2% (lower than historically quoted 10%).',
      'A childhood rash with amoxicillin is most often a viral exanthem, not a true allergy.',
    ],
    [
      'Shenoy ES, et al. JAMA. 2019;321(2):188-199.',
      'Blumenthal KG, et al. N Engl J Med. 2019;381(24):2338-2351.',
    ],
  ),

  'nsaid-hypersensitivity': entry(
    'nsaid-hypersensitivity',
    'NSAID Hypersensitivity',
    'drug-allergy',
    'Adverse reactions to NSAIDs classified as cross-reactive (COX-1-dependent) or selective (immunologically mediated to a specific NSAID).',
    'Cross-reactive type: COX-1 inhibition shunts arachidonic acid to the 5-lipoxygenase pathway, increasing cysteinyl leukotrienes in susceptible individuals. Not immune-mediated. Selective type: IgE-mediated or T-cell-mediated hypersensitivity to a specific NSAID structure.',
    'Cross-reactive cutaneous: urticaria/angioedema with multiple NSAIDs. NSAID-exacerbated respiratory disease (N-ERD/Samter triad): asthma, nasal polyposis, respiratory reactions to aspirin/NSAIDs. Selective type: reactions to a single NSAID only.',
    'Detailed history of reactions to multiple vs. single NSAIDs. Aspirin provocation challenge (gold standard) performed in a monitored setting. No validated in-vitro tests for COX-1-dependent reactions.',
    'Cross-reactive: avoidance of all COX-1 inhibitors, COX-2 selective inhibitors (celecoxib) often tolerated. N-ERD: aspirin desensitization followed by daily maintenance aspirin (therapeutic). Selective: avoid the specific NSAID, alternatives usually tolerated.',
    'Uncontrolled asthma exacerbations (N-ERD), recurrent nasal polyposis, unnecessary avoidance of all pain medications, suboptimal cardiovascular prophylaxis when aspirin is avoided.',
    [
      'Samter triad (N-ERD) = asthma + nasal polyposis + aspirin/NSAID sensitivity.',
      'Cross-reactive NSAID reactions are pharmacologic (COX-1 dependent), not immune-mediated.',
      'Aspirin desensitization is a therapeutic intervention in N-ERD, reducing polyp recurrence and improving asthma control.',
      'COX-2 inhibitors (celecoxib) are generally safe in cross-reactive NSAID hypersensitivity.',
    ],
    [
      'Kowalski ML, et al. Allergy. 2013;68(10):1219-1232.',
    ],
  ),

  'drug-reaction-eosinophilia': entry(
    'drug-reaction-eosinophilia',
    'DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms)',
    'drug-allergy',
    'Severe delayed drug hypersensitivity characterized by rash, fever, eosinophilia, and internal organ involvement, most commonly hepatitis.',
    'Type IV (T-cell-mediated) hypersensitivity reaction. Drug or drug-reactive metabolites activate HLA-restricted T cells. Strong HLA associations exist (e.g., HLA-B*58:01 with allopurinol, HLA-A*31:01 with carbamazepine). HHV-6 reactivation is frequently detected and may propagate the immune response.',
    'Onset 2-8 weeks after drug initiation. High fever, widespread morbilliform rash (may progress to erythroderma), facial edema, lymphadenopathy. Lab: eosinophilia (often >1500/uL), atypical lymphocytes, elevated transaminases, renal dysfunction. Common culprits: anticonvulsants, allopurinol, sulfonamides, dapsone, vancomycin.',
    'RegiSCAR scoring system. CBC with differential (eosinophilia, atypical lymphocytes), CMP (hepatitis, renal function), urinalysis. HHV-6 PCR. Skin biopsy if diagnosis unclear. Consider HLA testing before prescribing high-risk drugs in appropriate populations.',
    'Immediate discontinuation of the culprit drug. Systemic corticosteroids (prednisone 1-2 mg/kg/day) with prolonged taper over 8-12 weeks. Steroid-sparing agents (cyclosporine) for steroid-refractory cases. Monitor organ function for months (thyroiditis can develop weeks to months after resolution).',
    'Fulminant hepatic failure (leading cause of death), myocarditis, interstitial nephritis, pneumonitis, autoimmune thyroiditis (late complication), HHV-6 reactivation, prolonged course even after drug cessation.',
    [
      'DRESS has a long latency (2-8 weeks) distinguishing it from other drug reactions.',
      'Facial edema is a distinctive feature of DRESS, unlike other drug eruptions.',
      'Autoimmune thyroiditis can develop months after DRESS resolution—follow thyroid function.',
      'HLA-B*58:01 testing should be performed in at-risk populations before starting allopurinol.',
    ],
    [
      'Kardaun SH, et al. Br J Dermatol. 2013;169(5):1071-1080.',
      'Shiohara T, et al. Allergol Int. 2006;55(1):1-8.',
    ],
  ),

  'stevens-johnson-ten': entry(
    'stevens-johnson-ten',
    'Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis (SJS/TEN)',
    'drug-allergy',
    'Life-threatening mucocutaneous reactions with widespread keratinocyte apoptosis. SJS involves <10% BSA detachment; SJS-TEN overlap 10-30%; TEN >30%.',
    'CD8+ cytotoxic T cells and NK cells release granulysin (key mediator), perforin, and granzyme B, causing massive keratinocyte apoptosis. Fas-FasL interactions also contribute. Strong HLA associations (HLA-B*15:02 with carbamazepine in Southeast Asian populations, HLA-B*58:01 with allopurinol).',
    'Prodrome of fever and flu-like symptoms 1-3 weeks after drug exposure. Painful erythematous or purpuric macules progressing to flaccid bullae with full-thickness epidermal detachment (positive Nikolsky sign). Mucosal involvement (oral, ocular, genital) in >90%. Common triggers: allopurinol, anticonvulsants, sulfonamides, antibiotics.',
    'Clinical diagnosis confirmed by skin biopsy showing full-thickness epidermal necrosis with sparse lymphocytic infiltrate. SCORTEN severity score for prognosis. Distinguish from staphylococcal scalded skin syndrome (subgranular split, no mucosal involvement).',
    'Immediate cessation of causative drug. Transfer to burn unit or ICU for TEN. Supportive care (fluids, wound care, pain management, nutritional support). Cyclosporine has emerging evidence for benefit. IVIG is controversial. Ophthalmology consultation essential. Avoid systemic corticosteroids in TEN (debated).',
    'Sepsis (leading cause of death), ocular scarring and synechiae, blindness, genitourinary strictures, bronchiolitis obliterans, chronic pain, psychological morbidity. Mortality: SJS ~5%, TEN ~30%.',
    [
      'Granulysin is the key cytotoxic mediator in SJS/TEN.',
      'SCORTEN calculated within the first 24 hours predicts mortality.',
      'Nikolsky sign (epidermal detachment with lateral pressure) is positive in SJS/TEN.',
      'HLA-B*15:02 testing is recommended before carbamazepine in Southeast Asian and South Asian populations.',
    ],
    [
      'Chung WH, et al. Nature. 2008;451(7178):1110-1113.',
      'Sekula P, et al. J Invest Dermatol. 2013;133(5):1197-1204.',
    ],
  ),

  // ── Anaphylaxis ──────────────────────────────────────────────────────
  'anaphylaxis': entry(
    'anaphylaxis',
    'Anaphylaxis',
    'anaphylaxis',
    'Acute, life-threatening systemic hypersensitivity reaction involving multiple organ systems, most commonly triggered by foods, medications, and Hymenoptera stings.',
    'IgE-mediated degranulation of mast cells and basophils releases massive amounts of histamine, tryptase, leukotrienes, and PAF. Causes vasodilation, increased vascular permeability, bronchoconstriction, and mucus hypersecretion. Non-IgE pathways (complement, direct mast cell activation) can also cause anaphylaxis.',
    'Rapid onset (minutes to hours). Skin (90%): urticaria, flushing, angioedema. Respiratory (70%): dyspnea, wheezing, stridor, laryngeal edema. Cardiovascular (45%): hypotension, tachycardia, syncope. GI (45%): nausea, vomiting, cramping, diarrhea. Diagnostic criteria require involvement of 2+ organ systems or hypotension after known allergen exposure.',
    'Clinical diagnosis. Serum tryptase (draw within 1-3 hours; elevated levels support the diagnosis). Baseline tryptase to rule out mastocytosis. After stabilization: allergy evaluation with SPT/serum IgE to identify triggers.',
    'Epinephrine IM (anterolateral thigh) 0.3-0.5 mg adults, 0.01 mg/kg children—FIRST-LINE, repeat every 5-15 minutes. Position supine with legs elevated. IV fluids for hypotension. Adjuncts: H1/H2 antihistamines, corticosteroids (may reduce biphasic reactions), nebulized albuterol for bronchospasm. Observation minimum 4-6 hours (longer for severe or biphasic risk). Prescribe epinephrine auto-injector and provide anaphylaxis action plan at discharge.',
    'Biphasic reaction (5-20%, occurring 1-72 hours later), fatal anaphylaxis (especially delayed epinephrine), protracted anaphylaxis, cardiac arrest, hypoxic brain injury.',
    [
      'Epinephrine is the ONLY first-line treatment for anaphylaxis. Delayed administration increases mortality.',
      'Antihistamines treat urticaria but do NOT treat hypotension or airway obstruction.',
      'Biphasic reactions can occur up to 72 hours later—observe and educate patients.',
      'Serum tryptase peaks at 1-2 hours after onset—a normal tryptase does not exclude anaphylaxis (especially food-triggered).',
    ],
    [
      'Shaker MS, et al. Ann Allergy Asthma Immunol. 2020;124(1):13-27.',
      'Cardona V, et al. World Allergy Organ J. 2020;13(10):100472.',
    ],
  ),

  'exercise-induced-anaphylaxis': entry(
    'exercise-induced-anaphylaxis',
    'Exercise-Induced Anaphylaxis',
    'anaphylaxis',
    'Rare form of anaphylaxis triggered by physical exertion, sometimes dependent on co-ingestion of a specific food (food-dependent exercise-induced anaphylaxis, FDEIA).',
    'Exercise increases GI permeability and may enhance allergen absorption. In FDEIA, neither exercise alone nor the food alone triggers symptoms—the combination is required. Mast cell activation occurs via mechanisms not fully understood, possibly involving tissue transglutaminase activation of allergens (e.g., omega-5 gliadin in wheat-dependent EIA).',
    'Generalized warmth, flushing, pruritus, urticaria progressing to angioedema, bronchospasm, and hypotension during exercise. FDEIA: symptoms only when exercising within 2-6 hours of eating a specific food (commonly wheat, shellfish, celery).',
    'Clinical history correlating exercise with symptoms. Specific IgE or SPT to suspected co-trigger foods. Component testing: omega-5 gliadin (Tri a 19) for wheat-dependent FDEIA. Exercise challenge testing (with and without suspected food) in a monitored setting.',
    'Carry epinephrine auto-injector during exercise. FDEIA: avoid the trigger food 4-6 hours before and 1-2 hours after exercise. Exercise with a partner. Avoid exercise during extremes of temperature, high pollen counts, or if fatigued/ill. Premedication with antihistamines is NOT reliably protective.',
    'Fatal anaphylaxis during exercise, hypoxic brain injury, exercise avoidance affecting quality of life.',
    [
      'Wheat-dependent exercise-induced anaphylaxis is the most common form of FDEIA.',
      'Omega-5 gliadin (Tri a 19) is the key allergen component in wheat-dependent FDEIA.',
      'Neither the food alone nor exercise alone triggers reactions in FDEIA—the combination is required.',
      'Patients must carry epinephrine during all exercise sessions.',
    ],
    [
      'Feldweg AM. J Allergy Clin Immunol Pract. 2017;5(5):1169-1175.',
    ],
  ),

  // ── Immunodeficiency ─────────────────────────────────────────────────
  'common-variable-immunodeficiency': entry(
    'common-variable-immunodeficiency',
    'Common Variable Immunodeficiency (CVID)',
    'immunodeficiency',
    'The most common symptomatic primary immunodeficiency in adults, characterized by hypogammaglobulinemia with impaired antibody responses and increased susceptibility to infections.',
    'Heterogeneous genetic basis. Defects in B-cell differentiation, class-switch recombination, and T-cell co-stimulation lead to inadequate immunoglobulin production. Decreased switched memory B cells (CD27+IgD-IgM-) is a hallmark. Associated with mutations in ICOS, TACI, BAFF-R, and others.',
    'Recurrent sinopulmonary infections (most common presentation), bronchiectasis, autoimmune cytopenias (ITP, AIHA in ~20%), granulomatous disease (lung, liver, spleen), lymphoid hyperplasia, GI disease mimicking celiac or IBD, increased lymphoma risk.',
    'Serum immunoglobulins (low IgG with low IgA and/or IgM). Poor vaccine responses (pneumococcal polysaccharide and/or protein-conjugate). Flow cytometry: B-cell subsets (especially switched memory B cells). Exclude secondary causes (medication, protein-losing states, malignancy). Genetic testing in selected cases.',
    'Immunoglobulin replacement therapy (IVIG or SCIG) to maintain trough IgG >500 mg/dL. Prophylactic antibiotics for breakthrough infections. Aggressive treatment of infections. Monitor for and treat autoimmune complications. Cancer surveillance. Avoid live vaccines.',
    'Bronchiectasis (from recurrent infections), autoimmune disease, granulomatous-lymphocytic interstitial lung disease (GLILD), lymphoma (especially non-Hodgkin), hepatic granulomatous disease, GI malabsorption.',
    [
      'CVID is the most common symptomatic primary immunodeficiency, typically diagnosed in the 2nd-3rd decade.',
      'Autoimmune cytopenias may precede the diagnosis of CVID by years.',
      'Always check vaccine responses—low immunoglobulins alone are insufficient for diagnosis.',
      'Granulomatous disease in CVID can mimic sarcoidosis.',
    ],
    [
      'Bonilla FA, et al. J Allergy Clin Immunol Pract. 2016;4(1):38-59.',
      'Resnick ES, et al. Blood. 2012;119(7):1650-1657.',
    ],
  ),

  'selective-iga-deficiency': entry(
    'selective-iga-deficiency',
    'Selective IgA Deficiency',
    'immunodeficiency',
    'The most common primary immunodeficiency (1:500 in Caucasians), defined as serum IgA <7 mg/dL with normal IgG and IgM in patients older than 4 years.',
    'Defective B-cell class-switching to IgA. Most cases are sporadic; some are familial. Shared genetic susceptibility locus with CVID (some IgA-deficient patients progress to CVID). HLA associations: HLA-A1, B8, DR3.',
    'Most patients are asymptomatic. Symptomatic patients may have recurrent sinopulmonary infections, GI infections (especially Giardia), celiac disease (10-15x increased risk), autoimmune diseases (SLE, RA, thyroiditis). Increased risk of anaphylaxis to blood products containing IgA.',
    'Serum immunoglobulins showing IgA <7 mg/dL with normal IgG and IgM. Check IgG subclasses (concomitant IgG2 deficiency worsens infection risk). Anti-IgA antibodies in patients with transfusion reactions. Screen for celiac disease.',
    'Most patients require no treatment. Treat infections aggressively with antibiotics. IgA-deficient blood products for transfusions in patients with anti-IgA antibodies (use washed RBCs or IgA-depleted products). Monitor for progression to CVID. Screen for associated autoimmune conditions.',
    'Progression to CVID (rare but documented), transfusion-related anaphylaxis, increased susceptibility to GI infections and celiac disease, associated autoimmune diseases.',
    [
      'IgA deficiency is the most common primary immunodeficiency but most patients are asymptomatic.',
      'Anaphylactic transfusion reactions can occur due to anti-IgA antibodies—use washed blood products.',
      'Screen IgA-deficient patients for celiac disease due to the strong association.',
      'Some patients with IgA deficiency progress to CVID—monitor immunoglobulin levels periodically.',
    ],
    [
      'Yel L. J Clin Immunol. 2010;30(1):10-16.',
    ],
  ),

  'x-linked-agammaglobulinemia': entry(
    'x-linked-agammaglobulinemia',
    'X-Linked Agammaglobulinemia (Bruton Disease)',
    'immunodeficiency',
    'Primary immunodeficiency caused by BTK gene mutations leading to arrested B-cell development, absent mature B cells, and profoundly low immunoglobulins.',
    'Mutations in Bruton tyrosine kinase (BTK) on Xq21.3 block B-cell maturation at the pre-B cell stage in the bone marrow. Absent or markedly reduced circulating B cells and all immunoglobulin isotypes. T-cell numbers and function are normal.',
    'Boys presenting at 6-12 months of age (after maternal antibody wanes) with recurrent sinopulmonary infections (Streptococcus pneumoniae, Haemophilus influenzae), otitis media, septic arthritis, and chronic diarrhea (Giardia). Absent or hypoplastic tonsils and lymph nodes on exam.',
    'Serum immunoglobulins: all isotypes markedly decreased. Flow cytometry: absent or <2% CD19+/CD20+ B cells. BTK protein expression by flow cytometry. Genetic testing for BTK mutations. Absent or hypoplastic germinal centers on lymph node biopsy.',
    'Lifelong immunoglobulin replacement therapy (IVIG or SCIG). Aggressive antibiotic treatment of infections. Prophylactic antibiotics in some patients. Avoid live vaccines. Monitor for chronic lung disease.',
    'Bronchiectasis, chronic enteroviral meningoencephalitis (devastating complication), vaccine-associated paralytic polio (from live OPV), chronic arthritis (may be infectious).',
    [
      'XLA presents after 6 months of age when maternal IgG wanes.',
      'Absent tonsillar tissue and palpable lymph nodes is a clinical clue.',
      'Flow cytometry showing absent B cells (<2% CD19+) is the key rapid diagnostic test.',
      'Enteroviral meningoencephalitis is a feared and potentially fatal complication.',
    ],
    [
      'Conley ME, et al. Immunol Rev. 2005;203:216-234.',
    ],
  ),

  'severe-combined-immunodeficiency': entry(
    'severe-combined-immunodeficiency',
    'Severe Combined Immunodeficiency (SCID)',
    'immunodeficiency',
    'The most severe form of primary immunodeficiency, with absent or non-functional T cells (and often B/NK cell defects), presenting in early infancy with life-threatening infections.',
    'Multiple genetic defects: IL-2 receptor gamma chain (X-linked SCID, most common ~50%), adenosine deaminase (ADA) deficiency, RAG1/RAG2 deficiency, JAK3 deficiency, IL-7Rα deficiency, and others. All result in absent or profoundly impaired T-cell development. B cells may be present but non-functional without T-cell help.',
    'Presentation in the first months of life with failure to thrive, chronic diarrhea, oral thrush (Candida), Pneumocystis jirovecii pneumonia, disseminated BCG or CMV infection. Absent thymic shadow on chest X-ray. Maternal T-cell engraftment may cause GvHD-like rash.',
    'Newborn screening: TREC assay (T-cell receptor excision circles)—absent or very low TRECs. CBC: lymphopenia (<2500/uL in infants is abnormal). Flow cytometry: absent or very low T cells, variable B/NK cells depending on subtype. Genetic testing for specific mutations. ADA enzyme activity if suspected.',
    'Hematopoietic stem cell transplantation (HSCT) is curative—best outcomes with early matched sibling donor transplant. Gene therapy for ADA-SCID and X-linked SCID. PEG-ADA enzyme replacement as bridge in ADA-SCID. Protective isolation until definitive treatment. PJP prophylaxis, antifungals, IVIG replacement. Avoid live vaccines and non-irradiated blood products.',
    'Fatal opportunistic infections without treatment. Graft-versus-host disease from non-irradiated blood products or maternal T cells. Autoimmunity post-HSCT. Late effects of conditioning for transplant.',
    [
      'Newborn TREC screening has revolutionized early SCID detection—most US states now screen.',
      'SCID is a pediatric emergency—early HSCT dramatically improves survival.',
      'Absent thymic shadow on CXR is a classic finding in SCID.',
      'Non-irradiated blood products can cause fatal GvHD in SCID patients.',
    ],
    [
      'Kwan A, et al. JAMA. 2014;312(7):729-738.',
      'Pai SY, et al. N Engl J Med. 2014;371(5):434-446.',
    ],
  ),

  // ── Autoimmune ───────────────────────────────────────────────────────
  'systemic-lupus-erythematosus': entry(
    'systemic-lupus-erythematosus',
    'Systemic Lupus Erythematosus (SLE)',
    'autoimmune',
    'Chronic multisystem autoimmune disease characterized by autoantibody production and immune complex deposition affecting virtually any organ system.',
    'Loss of immune tolerance leads to autoantibody production (anti-dsDNA, anti-Smith, ANA). Immune complex deposition activates complement and triggers inflammation. Defective clearance of apoptotic cells provides autoantigens. Type III hypersensitivity (immune complex) predominates, with Type II (anti-cell antibodies) causing cytopenias.',
    'Malar (butterfly) rash, photosensitivity, oral ulcers, non-erosive arthritis, serositis (pleuritis, pericarditis), nephritis (proteinuria, hematuria, casts), neuropsychiatric manifestations, cytopenias (hemolytic anemia, leukopenia, thrombocytopenia). Fatigue is nearly universal.',
    'ANA (sensitive but not specific), anti-dsDNA (specific, correlates with disease activity and nephritis), anti-Smith (most specific), complement levels (C3, C4—decreased in active disease). CBC, CMP, urinalysis with microscopy. Renal biopsy for lupus nephritis classification (ISN/RPS). ACR/EULAR 2019 classification criteria.',
    'Hydroxychloroquine for ALL SLE patients (reduces flares, damage accrual, mortality). NSAIDs/low-dose corticosteroids for mild disease. Immunosuppressives for moderate-severe: mycophenolate or cyclophosphamide for lupus nephritis, azathioprine for maintenance. Belimumab (anti-BAFF) and voclosporin for lupus nephritis. Anifrolumab (anti-IFNAR) for skin/joint disease.',
    'Lupus nephritis (leading cause of morbidity), accelerated atherosclerosis, antiphospholipid syndrome, avascular necrosis, infections from immunosuppression, pregnancy complications (pre-eclampsia, neonatal lupus).',
    [
      'Hydroxychloroquine is recommended for ALL SLE patients unless contraindicated.',
      'Anti-dsDNA and low complement correlate with disease activity, especially nephritis.',
      'Anti-Smith antibodies are the most specific for SLE.',
      'SLE predominantly affects women of childbearing age, with higher severity in Black and Hispanic patients.',
    ],
    [
      'Fanouriakis A, et al. Ann Rheum Dis. 2019;78(6):736-745.',
      'Aringer M, et al. Arthritis Rheumatol. 2019;71(9):1400-1412.',
    ],
  ),

  'hereditary-angioedema': entry(
    'hereditary-angioedema',
    'Hereditary Angioedema (HAE)',
    'autoimmune',
    'Autosomal dominant disorder caused by C1-inhibitor deficiency or dysfunction leading to recurrent episodes of non-pruritic, non-urticarial angioedema.',
    'C1-inhibitor (C1-INH) deficiency leads to unregulated activation of the contact/kallikrein system, generating excess bradykinin. Bradykinin increases vascular permeability causing angioedema. NOT histamine-mediated (hence unresponsive to antihistamines/epinephrine/corticosteroids). Type I: low C1-INH levels. Type II: normal levels, dysfunctional protein.',
    'Recurrent episodes of non-pitting, non-pruritic swelling of the face, extremities, genitalia, and GI tract (abdominal attacks with severe pain mimicking acute abdomen). Laryngeal edema is life-threatening. Episodes last 2-5 days. No urticaria. Triggers: trauma, stress, estrogen, ACE inhibitors.',
    'C4 level (low, even between attacks—excellent screening test). C1-inhibitor quantitative level and functional assay. Type I: low C4, low C1-INH level. Type II: low C4, normal C1-INH level, low C1-INH function. C1q normal (distinguishes from acquired angioedema where C1q is low).',
    'Acute attacks: icatibant (bradykinin B2 receptor antagonist), ecallantide (kallikrein inhibitor), C1-INH concentrate (plasma-derived or recombinant). Long-term prophylaxis: lanadelumab (anti-kallikrein monoclonal antibody), berotralstat (oral kallikrein inhibitor), subcutaneous C1-INH concentrate. Antihistamines, epinephrine, and corticosteroids are INEFFECTIVE.',
    'Laryngeal edema and asphyxiation (historically leading cause of death), unnecessary abdominal surgeries during GI attacks, delayed diagnosis (average 8+ years).',
    [
      'HAE does NOT respond to epinephrine, antihistamines, or corticosteroids—it is bradykinin-mediated, not histamine-mediated.',
      'C4 is low even between attacks—the best screening test for HAE.',
      'ACE inhibitors are absolutely contraindicated in HAE (they inhibit bradykinin degradation).',
      'Abdominal attacks can mimic acute surgical abdomen, leading to unnecessary surgeries.',
    ],
    [
      'Maurer M, et al. Allergy. 2022;77(7):1961-1990.',
      'Zuraw BL. N Engl J Med. 2008;359(10):1027-1036.',
    ],
  ),

  // ── Hypersensitivity ─────────────────────────────────────────────────
  'type-i-hypersensitivity': entry(
    'type-i-hypersensitivity',
    'Type I Hypersensitivity (Immediate/IgE-Mediated)',
    'hypersensitivity',
    'Immediate hypersensitivity reaction mediated by IgE antibodies bound to mast cells and basophils, occurring within minutes of allergen exposure.',
    'Initial sensitization: APCs present allergen to Th2 cells, which produce IL-4 and IL-13, driving B-cell class-switching to IgE. IgE binds FcεRI on mast cells and basophils (sensitization). Re-exposure: allergen cross-links surface-bound IgE, triggering immediate degranulation (histamine, tryptase, heparin) and de novo synthesis of leukotrienes, prostaglandins, and cytokines (late phase at 4-8 hours).',
    'Immediate phase (minutes): vasodilation, increased vascular permeability, smooth muscle contraction, mucus secretion. Manifests as urticaria, angioedema, rhinitis, bronchospasm, GI symptoms, anaphylaxis. Late phase (4-8 hours): eosinophil and neutrophil recruitment causing sustained inflammation.',
    'Skin prick testing (SPT): gold standard for detecting specific IgE. Serum-specific IgE (ImmunoCAP). Total IgE (elevated but nonspecific). Serum tryptase (elevated during anaphylaxis). Component-resolved diagnostics for improved specificity.',
    'Allergen avoidance. Antihistamines (H1 blockers) for mild reactions. Epinephrine for anaphylaxis. Leukotriene receptor antagonists (montelukast). Mast cell stabilizers (cromolyn). Allergen immunotherapy (desensitization). Omalizumab (anti-IgE monoclonal antibody) for severe allergic asthma and chronic urticaria.',
    'Anaphylaxis (most severe manifestation), status asthmaticus, chronic inflammation from repeated late-phase responses, tissue remodeling.',
    [
      'Type I reactions are the only hypersensitivity type detectable by skin prick testing.',
      'The early phase is mast cell-dependent; the late phase is eosinophil-driven.',
      'IgE has the shortest serum half-life of all immunoglobulins (~2 days free, weeks when bound to FcεRI).',
      'Omalizumab binds free IgE and prevents binding to FcεRI, reducing mast cell activation.',
    ],
    [
      'Galli SJ, Tsai M. Nat Med. 2012;18(5):693-704.',
    ],
  ),

  'type-ii-hypersensitivity': entry(
    'type-ii-hypersensitivity',
    'Type II Hypersensitivity (Antibody-Mediated/Cytotoxic)',
    'hypersensitivity',
    'Antibody-mediated hypersensitivity where IgG or IgM antibodies target cell-surface or extracellular matrix antigens, leading to cell destruction or dysfunction.',
    'Three mechanisms: (1) Opsonization and phagocytosis—antibody coating leads to Fc receptor-mediated phagocytosis or ADCC (e.g., autoimmune hemolytic anemia). (2) Complement activation—MAC formation and lysis (e.g., transfusion reactions). (3) Antibody-mediated cellular dysfunction—antibodies alter receptor function without cell destruction (e.g., Graves disease stimulating TSH receptor, myasthenia gravis blocking AChR).',
    'Depends on the target antigen. Hemolytic anemias (warm or cold AIHA, hemolytic transfusion reactions, hemolytic disease of the newborn). Thrombocytopenia (ITP). Goodpasture syndrome (anti-GBM causing pulmonary hemorrhage and glomerulonephritis). Graves disease (stimulatory anti-TSH receptor antibodies). Myasthenia gravis (anti-AChR blocking antibodies).',
    'Direct Coombs test (detects antibody/complement on cell surfaces). Indirect Coombs test (detects circulating antibodies). Specific autoantibody testing: anti-GBM, anti-TSH receptor, anti-AChR, anti-PLA2R. Complement levels may be reduced. Tissue biopsy with immunofluorescence showing linear deposition (e.g., Goodpasture).',
    'Remove inciting cause (drug-induced). Immunosuppression (corticosteroids, rituximab, cyclophosphamide). Plasmapheresis for rapid antibody removal (Goodpasture, severe MG crisis). Specific treatments: thymectomy for MG, antithyroid drugs for Graves, IVIG/splenectomy for ITP.',
    'End-organ damage (renal failure in Goodpasture, respiratory failure), severe cytopenias, neonatal complications (hemolytic disease of newborn), thyroid storm.',
    [
      'Type II reactions show LINEAR immunofluorescence on biopsy (vs. granular in Type III).',
      'Goodpasture syndrome targets the alpha-3 chain of type IV collagen in glomerular and alveolar basement membranes.',
      'Type II can be cytotoxic (cell destruction) OR functional (receptor stimulation/blockade) without lysis.',
      'Direct Coombs test detects antibodies already bound to cells; indirect detects antibodies in serum.',
    ],
    [
      'Kumar V, et al. Robbins & Cotran Pathologic Basis of Disease. 10th ed. 2021.',
    ],
  ),

  'type-iii-hypersensitivity': entry(
    'type-iii-hypersensitivity',
    'Type III Hypersensitivity (Immune Complex-Mediated)',
    'hypersensitivity',
    'Tissue injury caused by deposition of antigen-antibody (immune) complexes in blood vessel walls and tissues, activating complement and recruiting inflammatory cells.',
    'Immune complexes form when antigen and antibody are in relative excess or at equivalence. Small complexes deposit in vessel walls (especially in kidneys, joints, skin). Deposited complexes activate complement (C3a, C5a recruit neutrophils), which release proteases and reactive oxygen species causing tissue damage. Defective clearance of complexes (e.g., complement deficiency) increases susceptibility.',
    'Serum sickness: fever, urticaria, arthralgias, lymphadenopathy 7-14 days after antigen exposure. SLE nephritis: proteinuria, hematuria. Hypersensitivity pneumonitis: cough, dyspnea, fever after inhalation exposure. Polyarteritis nodosa. Arthus reaction: localized skin necrosis at injection site.',
    'Serum complement (C3, C4) decreased during active disease. ESR and CRP elevated. Urinalysis (proteinuria, hematuria in renal involvement). Tissue biopsy with immunofluorescence showing GRANULAR ("lumpy-bumpy") immune complex deposition. Circulating immune complexes (C1q binding assay).',
    'Remove or treat the source of antigen. Corticosteroids for acute inflammation. Immunosuppressives for chronic disease (SLE nephritis, severe vasculitis). Plasmapheresis for life-threatening manifestations. Antigen avoidance for hypersensitivity pneumonitis.',
    'Glomerulonephritis and renal failure, vasculitis, chronic lung fibrosis (hypersensitivity pneumonitis), recurrent serum sickness.',
    [
      'Type III reactions show GRANULAR immunofluorescence (vs. linear in Type II).',
      'Complement consumption (low C3, C4) is a hallmark of active immune complex disease.',
      'Serum sickness classically occurs 7-14 days after first exposure (time to mount IgG response).',
      'Complement deficiencies (especially C1q, C2, C4) predispose to immune complex disease and SLE.',
    ],
    [
      'Kumar V, et al. Robbins & Cotran Pathologic Basis of Disease. 10th ed. 2021.',
    ],
  ),

  'type-iv-hypersensitivity': entry(
    'type-iv-hypersensitivity',
    'Type IV Hypersensitivity (Delayed/Cell-Mediated)',
    'hypersensitivity',
    'T-cell-mediated immune response occurring 24-72 hours after antigen exposure, involving CD4+ Th1 cells and/or CD8+ cytotoxic T cells without antibody involvement.',
    'Type IVa (Th1-mediated): macrophage activation via IFN-gamma (e.g., tuberculin reaction, contact dermatitis). Type IVb (Th2-mediated): eosinophil recruitment (e.g., chronic asthma). Type IVc (CD8+ T-cell-mediated): direct cytotoxicity (e.g., SJS/TEN). Type IVd (T-cell/neutrophil): neutrophilic inflammation (e.g., acute generalized exanthematous pustulosis, AGEP).',
    'Contact dermatitis: pruritic, vesicular, well-demarcated rash at contact site (e.g., nickel, poison ivy). Tuberculin (PPD) skin test: indurated papule at 48-72 hours. Granulomatous inflammation: sarcoidosis, TB. Drug eruptions: DRESS, SJS/TEN, AGEP, maculopapular exanthem.',
    'Patch testing for contact dermatitis (applied for 48 hours, read at 48 and 96 hours). TST/PPD (read at 48-72 hours). Skin biopsy showing lymphocytic infiltrate. Drug lymphocyte stimulation test (DLST) for drug reactions (limited sensitivity). No role for IgE testing.',
    'Contact dermatitis: allergen avoidance, topical corticosteroids, calcineurin inhibitors. TB: antimycobacterial therapy. Drug reactions: drug withdrawal, corticosteroids for DRESS, supportive care for SJS/TEN. Sarcoidosis: corticosteroids if symptomatic.',
    'Chronic dermatitis with lichenification, occupational disability (contact dermatitis), organ damage from granulomatous inflammation, mortality from severe drug reactions (SJS/TEN).',
    [
      'Type IV is the only hypersensitivity type mediated by T cells, not antibodies.',
      'Patch testing is the diagnostic method for Type IV contact allergy—read at 48-72 hours.',
      'The tuberculin skin test (PPD) is a classic Type IVa (Th1/macrophage) reaction.',
      'SJS/TEN is classified as Type IVc—CD8+ T cell and NK cell-mediated keratinocyte killing.',
    ],
    [
      'Pichler WJ. Ann Intern Med. 2003;139(8):683-693.',
    ],
  ),

  'contact-dermatitis': entry(
    'contact-dermatitis',
    'Allergic Contact Dermatitis',
    'hypersensitivity',
    'Type IV (delayed) hypersensitivity reaction to a skin contactant, presenting as eczematous dermatitis at the site of exposure.',
    'Haptens (small molecules) penetrate the epidermis and bind to skin proteins, forming complete antigens. Langerhans cells process and present these to T cells in regional lymph nodes (sensitization phase, 10-14 days). Re-exposure activates memory T cells, recruiting macrophages and causing the inflammatory response within 24-72 hours.',
    'Pruritic, well-demarcated eczematous patches/plaques with vesicles at contact sites. Acute: edema, vesicles, weeping. Chronic: lichenification, fissuring. Distribution provides clues: earlobes (nickel), dorsal feet (shoe materials), wrists (watch/bracelet), perioral (cosmetics), hands (occupational). Linear streaks suggest plant contact (poison ivy/oak).',
    'Patch testing: standardized allergens applied to the back for 48 hours, read at 48 and 96 hours. Standard series (TRUE test or expanded panels). Positive reaction shows erythema, papules, vesicles at the test site. History and distribution pattern guide allergen selection.',
    'Strict avoidance of identified allergen. Topical corticosteroids (mid to high potency for body, low potency for face). Topical calcineurin inhibitors for sensitive areas. Wet dressings for acute weeping lesions. Short course of systemic corticosteroids for severe/widespread disease. Barrier creams for occupational exposure.',
    'Secondary bacterial infection, chronic dermatitis, occupational disability, systemic contact dermatitis (widespread eruption from systemic exposure to a contact allergen, e.g., nickel in diet).',
    [
      'Nickel is the most common contact allergen worldwide.',
      'Poison ivy/oak dermatitis is caused by urushiol—a classic Type IV reaction.',
      'Linear or geometric distribution is a hallmark of exogenous/contact etiology.',
      'Patch testing should be delayed at least 2 weeks after a flare to avoid false negatives.',
    ],
    [
      'Usatine RP, Riojas M. Am Fam Physician. 2010;82(3):249-255.',
      'Nassau S, Fonacier L. Ann Allergy Asthma Immunol. 2020;124(1):28-34.',
    ],
  ),

  // ── Immunotherapy ────────────────────────────────────────────────────
  'subcutaneous-immunotherapy': entry(
    'subcutaneous-immunotherapy',
    'Subcutaneous Immunotherapy (SCIT)',
    'immunotherapy',
    'Allergen-specific immunotherapy administered via subcutaneous injections to induce immune tolerance to aeroallergens and Hymenoptera venom.',
    'Repeated allergen exposure shifts the immune response from Th2 to Th1/Treg predominance. IL-10 and TGF-beta production increases. Allergen-specific IgG4 (blocking antibodies) rises, competing with IgE for allergen binding. Mast cell and basophil reactivity decreases over time. Effects persist after discontinuation (disease-modifying).',
    'Not directly applicable—SCIT is a therapeutic intervention. Indicated for: allergic rhinitis/conjunctivitis, allergic asthma (mild-moderate, stable), Hymenoptera venom allergy. Build-up phase: weekly injections with escalating doses over 3-6 months. Maintenance phase: monthly injections for 3-5 years.',
    'Demonstrated IgE-mediated sensitization to relevant allergens (positive SPT or serum-specific IgE) with corresponding clinical symptoms. Pulmonary function testing before initiating SCIT in asthma patients.',
    'Build-up phase: weekly escalating doses. Maintenance: monthly injections at target dose for 3-5 years. Observe 30 minutes after each injection for adverse reactions. Epinephrine must be immediately available. Dose adjustments for missed appointments, reactions, or high allergen season. Rush/cluster schedules available for accelerated build-up.',
    'Local reactions (most common: erythema, swelling at injection site). Systemic reactions (0.1-0.2% of injections): generalized urticaria, asthma exacerbation, anaphylaxis. Fatal anaphylaxis (rare: ~1 per 2.5 million injections). Avoid in uncontrolled asthma.',
    [
      'SCIT is the only disease-modifying treatment for allergic rhinitis—effects persist after discontinuation.',
      'Patients must wait 30 minutes after each injection for observation.',
      'Venom immunotherapy is >95% effective in preventing future systemic sting reactions.',
      'SCIT may prevent development of asthma in children with allergic rhinitis.',
    ],
    [
      'Cox L, et al. J Allergy Clin Immunol. 2011;127(1 Suppl):S1-55.',
    ],
  ),

  'sublingual-immunotherapy': entry(
    'sublingual-immunotherapy',
    'Sublingual Immunotherapy (SLIT)',
    'immunotherapy',
    'Allergen-specific immunotherapy administered as sublingual tablets or drops to induce tolerance, offering a home-based alternative to SCIT.',
    'Allergen absorbed through the sublingual mucosa is captured by tolerogenic dendritic cells in the oral mucosa. Similar immune modulation as SCIT: Treg induction, IgG4 blocking antibodies, reduced Th2 cytokines. Oral mucosal Langerhans cells are key antigen-presenting cells. Lower risk of systemic reactions compared to SCIT.',
    'FDA-approved sublingual tablets: Grastek (timothy grass), Ragwitek (short ragweed), Odactra (house dust mite), Palforzia (peanut—actually oral, not sublingual). First dose administered in clinic; subsequent doses at home. Duration: 3 years for sustained benefit.',
    'Same as SCIT: confirmed IgE-mediated sensitization with clinically relevant symptoms. Patients must be able to understand and manage potential reactions at home.',
    'First dose under medical supervision (30-minute observation). Daily home administration held under the tongue for 1-2 minutes then swallowed. Pre-seasonal or year-round depending on allergen. Epinephrine auto-injector prescribed for home use. 3-year treatment course recommended.',
    'Local oral reactions (most common: oropharyngeal pruritus, lip/tongue swelling, generally self-limiting). Systemic reactions rare (<1%). GI symptoms. Contraindicated in severe/uncontrolled asthma, eosinophilic esophagitis.',
    [
      'SLIT has a better safety profile than SCIT, allowing home administration after the first dose.',
      'Local oral side effects (itching, swelling) are common but usually resolve within weeks.',
      'Currently FDA-approved for grass pollen, ragweed pollen, and house dust mite.',
      'Three years of treatment is recommended for lasting disease modification.',
    ],
    [
      'Creticos PS, et al. N Engl J Med. 2013;368(18):1659-1668.',
      'Virchow JC, et al. JAMA. 2016;315(16):1715-1725.',
    ],
  ),

  'omalizumab': entry(
    'omalizumab',
    'Omalizumab (Anti-IgE Therapy)',
    'immunotherapy',
    'Recombinant humanized monoclonal antibody targeting free IgE, approved for moderate-severe allergic asthma, chronic spontaneous urticaria, nasal polyps, and food allergy.',
    'Omalizumab binds the Cε3 domain of free IgE at the same site that IgE binds FcεRI, preventing IgE from attaching to mast cells and basophils. Reduces surface FcεRI expression over time. Decreases mast cell and basophil activation. Does NOT bind cell-bound IgE (no anaphylaxis risk from cross-linking).',
    'Indicated for moderate-severe allergic asthma (uncontrolled on ICS/LABA, positive aeroallergen sensitization, IgE 30-1500 IU/mL), chronic spontaneous urticaria (unresponsive to antihistamines), nasal polyposis, and IgE-mediated food allergy (multi-food allergy reduction). Administered as subcutaneous injection every 2-4 weeks.',
    'Allergic asthma: total IgE level and body weight determine dosing. Confirmed aeroallergen sensitization. CSU: no IgE level or allergy testing required. Monitor for anaphylaxis. Baseline CBC, IgE.',
    'Dosing based on total serum IgE and body weight (for asthma). Injections every 2-4 weeks. Observe 30 minutes after first 3 injections (anaphylaxis risk 0.1-0.2%). Benefits may take 12-16 weeks. For CSU: fixed 150 or 300 mg monthly regardless of IgE. Reduce or discontinue other medications as disease control improves.',
    'Anaphylaxis (rare, 0.1-0.2%—can be delayed), injection site reactions, theoretical concern for malignancy (not confirmed in long-term studies), serum sickness (very rare).',
    [
      'Omalizumab is the only biologic approved for both allergic asthma and chronic spontaneous urticaria.',
      'Dosing for asthma depends on IgE and weight; CSU uses fixed dosing regardless of IgE.',
      'FDA recently approved omalizumab for food allergy reduction (landmark).',
      'Serum IgE levels cannot be used to monitor response because omalizumab-IgE complexes elevate total IgE.',
    ],
    [
      'Normansell R, et al. Cochrane Database Syst Rev. 2014;(1):CD003559.',
      'Wood RA, et al. N Engl J Med. 2024;390(10):889-899.',
    ],
  ),

  // ── Eosinophilic ─────────────────────────────────────────────────────
  'eosinophilic-granulomatosis': entry(
    'eosinophilic-granulomatosis',
    'Eosinophilic Granulomatosis with Polyangiitis (EGPA/Churg-Strauss)',
    'eosinophilic',
    'ANCA-associated systemic vasculitis characterized by asthma, peripheral eosinophilia, and eosinophilic infiltration of multiple organs.',
    'Three-phase disease: allergic phase (asthma, rhinitis), eosinophilic phase (tissue eosinophilia), and vasculitic phase (small-vessel vasculitis). IL-5-driven eosinophil activation and degranulation cause tissue damage. ANCA (typically p-ANCA/MPO) present in ~40% and associated with vasculitic manifestations (glomerulonephritis, neuropathy).',
    'Late-onset asthma (often severe), chronic rhinosinusitis with nasal polyps, peripheral blood eosinophilia (>1500/uL or >10%), migratory pulmonary infiltrates, mononeuritis multiplex (most specific clinical feature), cardiomyopathy (leading cause of mortality), purpura, GI involvement.',
    'CBC (marked eosinophilia), ESR/CRP elevated, IgE elevated, ANCA (p-ANCA/anti-MPO in ~40%). Tissue biopsy showing eosinophilic infiltration, necrotizing vasculitis, and extravascular granulomas. CT chest (pulmonary infiltrates, ground glass). Nerve conduction studies for neuropathy. Echocardiogram for cardiac involvement.',
    'Systemic corticosteroids (mainstay, often high-dose initially). Cyclophosphamide for severe/organ-threatening disease. Mepolizumab (anti-IL-5) FDA-approved for EGPA—reduces relapse and steroid burden. Azathioprine or methotrexate for maintenance. Rituximab for refractory ANCA-positive disease.',
    'Eosinophilic cardiomyopathy and cardiac death, irreversible peripheral neuropathy, renal failure (ANCA-positive subset), chronic corticosteroid toxicity, relapsing disease course.',
    [
      'Cardiac involvement is the leading cause of death in EGPA—always assess with echocardiography.',
      'Mononeuritis multiplex is the most specific neurologic finding.',
      'Mepolizumab (anti-IL-5) is the first targeted biologic approved for EGPA.',
      'ANCA-positive EGPA has more vasculitic features; ANCA-negative has more eosinophilic/cardiac features.',
    ],
    [
      'Wechsler ME, et al. N Engl J Med. 2017;376(20):1921-1932.',
      'Chung SA, et al. Arthritis Rheumatol. 2021;73(8):1366-1383.',
    ],
  ),

  'hypereosinophilic-syndrome': entry(
    'hypereosinophilic-syndrome',
    'Hypereosinophilic Syndrome (HES)',
    'eosinophilic',
    'Group of disorders characterized by persistent eosinophilia (>1500/uL for >6 months) with eosinophil-mediated organ damage in the absence of secondary causes.',
    'Three variants: myeloproliferative (FIP1L1-PDGFRA fusion, clonal eosinophil expansion), lymphocytic (aberrant T cells producing IL-5 driving eosinophilia), and idiopathic. Eosinophil granule proteins (MBP, ECP, EDN, EPO) cause direct tissue damage, especially to the heart (endomyocardial fibrosis), nervous system, skin, and lungs.',
    'Cardiac: endomyocardial fibrosis, restrictive cardiomyopathy, intracardiac thrombus. Neurologic: peripheral neuropathy, CNS dysfunction. Dermatologic: pruritus, urticaria, angioedema, eczematous lesions. Pulmonary: cough, infiltrates. GI: diarrhea, abdominal pain. Constitutional: fever, fatigue, weight loss.',
    'CBC with persistent eosinophilia >1500/uL. Exclude secondary causes (parasites, allergies, drugs, malignancy). Peripheral blood smear (dysplastic eosinophils). FIP1L1-PDGFRA fusion (FISH or RT-PCR). Flow cytometry for aberrant T-cell clones. Serum tryptase, vitamin B12, IL-5 levels. Bone marrow biopsy. Echocardiogram. Serum troponin.',
    'FIP1L1-PDGFRA-positive: imatinib (dramatic response, first-line). Corticosteroids for other variants (often first-line). Mepolizumab (anti-IL-5) for steroid-dependent/refractory HES. Hydroxyurea, interferon-alpha for myeloproliferative variant. Anticoagulation if cardiac thrombus. Avoid imatinib in lymphocytic variant.',
    'Endomyocardial fibrosis (irreversible cardiac damage), thromboembolic events, transformation to eosinophilic leukemia (myeloproliferative variant), chronic organ damage.',
    [
      'FIP1L1-PDGFRA-positive HES responds dramatically to imatinib—always test for this fusion.',
      'Cardiac involvement is the major cause of morbidity and mortality in HES.',
      'Mepolizumab (anti-IL-5) is FDA-approved for HES.',
      'Serum tryptase >12 and elevated B12 suggest a myeloproliferative variant.',
    ],
    [
      'Cools J, et al. N Engl J Med. 2003;348(13):1201-1214.',
      'Ogbogu PU, et al. J Allergy Clin Immunol. 2009;124(6):1319-1325.',
    ],
  ),

  // ── Additional entries to exceed 35 ──────────────────────────────────

  'chronic-spontaneous-urticaria': entry(
    'chronic-spontaneous-urticaria',
    'Chronic Spontaneous Urticaria (CSU)',
    'hypersensitivity',
    'Recurrent wheals (hives) and/or angioedema occurring for >6 weeks without an identifiable external trigger.',
    'Autoimmune mechanisms in ~50%: IgG autoantibodies against IgE or FcεRI on mast cells cause chronic activation. IgE autoantibodies against self-antigens (e.g., thyroid peroxidase, IL-24) also implicated. Mast cell and basophil dysregulation leads to chronic histamine and mediator release. Not typically IgE/allergen-mediated.',
    'Spontaneous wheals: pruritic, migratory, individual lesions resolving within 24 hours without bruising. Angioedema (in ~40%): deeper swelling of face, lips, tongue, or extremities. Daily or near-daily symptoms. No identifiable external trigger. May coexist with inducible urticarias.',
    'Clinical diagnosis based on history (>6 weeks of spontaneous wheals). CBC with differential, ESR/CRP, TSH, anti-TPO antibodies. Autologous serum skin test (screening for autoimmune urticaria). Consider anti-FcεRI and anti-IgE autoantibodies. Skin biopsy only if urticarial vasculitis is suspected (lesions lasting >24 hours with bruising).',
    'Second-generation H1 antihistamines at standard dose (first-line). Up-titrate to 4x standard dose if uncontrolled. Add omalizumab if refractory (strong evidence). Cyclosporine as third-line. Short-course corticosteroids for exacerbations only. Avoid first-generation antihistamines as monotherapy. Emerging: ligelizumab, remibrutinib.',
    'Significant impairment in quality of life, sleep disturbance, depression/anxiety, corticosteroid side effects from repeated courses, rarely laryngeal angioedema.',
    [
      'Individual wheals in CSU resolve within 24 hours—if they last longer, consider urticarial vasculitis.',
      'Up to 50% of CSU has an autoimmune basis with autoantibodies against IgE or FcεRI.',
      'Second-generation antihistamines can be safely up-titrated to 4x the standard dose.',
      'Omalizumab is effective even in CSU without elevated IgE—mechanism differs from allergic asthma.',
    ],
    [
      'Zuberbier T, et al. Allergy. 2022;77(3):734-766.',
      'Maurer M, et al. N Engl J Med. 2013;368(10):924-935.',
    ],
  ),

  'atopic-dermatitis': entry(
    'atopic-dermatitis',
    'Atopic Dermatitis (Eczema)',
    'hypersensitivity',
    'Chronic, relapsing, pruritic inflammatory skin disease with impaired skin barrier function and Th2-skewed immune dysregulation, part of the "atopic triad" with asthma and allergic rhinitis.',
    'Epidermal barrier dysfunction due to filaggrin mutations (loss-of-function in 20-30% of AD patients) and reduced ceramides. Barrier disruption allows allergen penetration, activating keratinocytes to release TSLP, IL-25, and IL-33. Th2 immune response predominates (IL-4, IL-13, IL-31). IL-31 is the major pruritogenic cytokine. Staphylococcus aureus colonization in >90% of AD skin exacerbates inflammation.',
    'Infants: facial and extensor surface involvement. Children/adults: flexural distribution (antecubital/popliteal fossae, neck, wrists). Intense pruritus (hallmark), xerosis, erythema, papules, vesicles (acute), lichenification (chronic). "Itch that rashes" (pruritus precedes lesions). Associated features: Dennie-Morgan folds, allergic shiners, keratosis pilaris.',
    'Clinical diagnosis (Hanifin and Rajka criteria or UK Working Party criteria). No specific lab test required. Consider allergy testing (SPT, specific IgE) if food allergy triggers are suspected. Elevated total IgE (non-specific). Skin biopsy rarely needed (spongiotic dermatitis). Assess severity with SCORAD or EASI scores.',
    'Emollients as cornerstone of therapy (applied liberally, multiple times daily). Topical corticosteroids for flares (potency matched to severity and body site). Topical calcineurin inhibitors (tacrolimus, pimecrolimus) for sensitive areas. Crisaborole (PDE4 inhibitor). Dupilumab (anti-IL-4Rα) for moderate-severe AD. JAK inhibitors (abrocitinib, upadacitinib, baricitinib) for moderate-severe. Tralokinumab (anti-IL-13). Wet wrap therapy for severe flares. Bleach baths for S. aureus colonization.',
    'Secondary skin infections (S. aureus, eczema herpeticum), sleep disturbance, psychosocial impact, atopic march progression (allergic rhinitis, asthma), contact dermatitis from topical treatments, systemic immunosuppression side effects.',
    [
      'AD is "the itch that rashes"—pruritus precedes visible skin changes.',
      'Filaggrin mutations are the strongest known genetic risk factor for AD.',
      'Dupilumab (anti-IL-4Rα) has transformed moderate-severe AD management.',
      'Eczema herpeticum (disseminated HSV) is a medical emergency in AD patients.',
    ],
    [
      'Wollenberg A, et al. J Eur Acad Dermatol Venereol. 2022;36(9):1409-1431.',
      'Simpson EL, et al. N Engl J Med. 2016;375(24):2335-2348.',
    ],
  ),

  'allergic-bronchopulmonary-aspergillosis': entry(
    'allergic-bronchopulmonary-aspergillosis',
    'Allergic Bronchopulmonary Aspergillosis (ABPA)',
    'eosinophilic',
    'Hypersensitivity reaction to Aspergillus fumigatus colonizing the airways, occurring primarily in patients with asthma or cystic fibrosis.',
    'Aspergillus spores are inhaled and colonize the airways without tissue invasion. Hypersensitivity response involves both Type I (IgE-mediated) and Type III (immune complex) reactions. Th2 response produces IL-4, IL-5, IL-13, driving intense eosinophilic inflammation and mucus hypersecretion. Bronchial wall damage leads to central bronchiectasis.',
    'Poorly controlled asthma with recurrent exacerbations, productive cough with brown mucus plugs, low-grade fever, malaise. Expectoration of brownish-black mucus plugs. Fleeting pulmonary infiltrates on CXR. Central bronchiectasis on CT. Peripheral blood eosinophilia.',
    'Elevated total IgE (>1000 IU/mL suggests ABPA). Aspergillus-specific IgE and IgG elevated. Peripheral eosinophilia. Positive Aspergillus skin test. Serum precipitins (IgG) to Aspergillus. CT chest showing central bronchiectasis, mucoid impaction, fleeting infiltrates. ISHAM criteria for diagnosis.',
    'Systemic corticosteroids (prednisone) for acute exacerbations and to reduce inflammation. Itraconazole as steroid-sparing antifungal (reduces fungal burden). Omalizumab for steroid-dependent cases. Monitor total IgE as marker of disease activity (aim for >35-50% decline). Dupilumab emerging as treatment option.',
    'Progressive bronchiectasis and fibrosis, pulmonary function decline, corticosteroid side effects from chronic use, invasive aspergillosis if immunosuppressed.',
    [
      'Elevated total IgE >1000 IU/mL in an asthmatic should raise suspicion for ABPA.',
      'Central (proximal) bronchiectasis is characteristic of ABPA (unlike post-infectious which is peripheral).',
      'Total IgE is used to monitor disease activity and guide treatment.',
      'ABPA complicates both asthma and cystic fibrosis.',
    ],
    [
      'Agarwal R, et al. Clin Exp Allergy. 2013;43(8):850-873.',
    ],
  ),

  'mast-cell-activation': entry(
    'mast-cell-activation',
    'Mastocytosis and Mast Cell Activation Syndrome',
    'hypersensitivity',
    'Disorders of abnormal mast cell proliferation (mastocytosis) or excessive mast cell mediator release (MCAS), causing recurrent symptoms of mast cell degranulation.',
    'Systemic mastocytosis: clonal mast cell expansion driven by activating KIT D816V mutation in >90% of cases. Mast cells infiltrate bone marrow, skin, GI tract, liver, and spleen. MCAS: episodic mast cell mediator release without clonal proliferation (diagnosis of exclusion). Mediators include histamine, tryptase, prostaglandin D2, and leukotrienes.',
    'Cutaneous mastocytosis: urticaria pigmentosa (reddish-brown macules/papules with positive Darier sign—wheal upon stroking). Systemic symptoms: flushing, pruritus, GI cramping/diarrhea, hypotension, syncope, anaphylaxis. Triggers: physical stimuli, alcohol, opioids, NSAIDs, Hymenoptera stings, temperature changes.',
    'Serum tryptase (elevated >20 ng/mL suggests systemic mastocytosis; transient elevation during episodes supports MCAS). Bone marrow biopsy: >25% spindle-shaped mast cells in aggregates, aberrant CD25/CD2 expression. KIT D816V mutation. 24-hour urine: N-methylhistamine, prostaglandin D2 metabolites. Skin biopsy if cutaneous mastocytosis suspected.',
    'H1 and H2 antihistamines (dual blockade). Mast cell stabilizers (cromolyn sodium). Leukotriene receptor antagonists. Epinephrine auto-injector for anaphylaxis risk. Avoidance of known triggers. For advanced systemic mastocytosis: midostaurin (KIT inhibitor), avapritinib. Cytoreductive therapy for aggressive disease. Bone density monitoring.',
    'Anaphylaxis (especially with Hymenoptera stings—venom immunotherapy indicated), osteoporosis, organ infiltration (advanced mastocytosis), transformation to mast cell leukemia (rare), GI malabsorption.',
    [
      'KIT D816V mutation is present in >90% of systemic mastocytosis.',
      'Darier sign (urticaria upon stroking a skin lesion) is pathognomonic for cutaneous mastocytosis.',
      'Baseline serum tryptase >20 ng/mL should prompt evaluation for systemic mastocytosis.',
      'Patients with mastocytosis and venom allergy should receive lifelong venom immunotherapy.',
    ],
    [
      'Valent P, et al. J Allergy Clin Immunol. 2012;129(4):S298-S302.',
      'Pardanani A. Am J Hematol. 2021;96(4):508-525.',
    ],
  ),

  'hymenoptera-venom-allergy': entry(
    'hymenoptera-venom-allergy',
    'Hymenoptera Venom Allergy',
    'anaphylaxis',
    'IgE-mediated systemic allergic reactions to stings from Hymenoptera insects (honeybees, wasps, yellowjackets, hornets, fire ants), a leading cause of anaphylaxis in adults.',
    'Venom proteins (phospholipase A2 in bee venom, antigen 5 in wasp venom) act as allergens. IgE-mediated sensitization occurs with initial sting(s). Subsequent stings cause mast cell/basophil degranulation and systemic allergic reaction. Large local reactions involve late-phase IgE-mediated inflammation.',
    'Large local reactions: swelling >10 cm at sting site lasting >24 hours. Systemic reactions: generalized urticaria, angioedema, bronchospasm, hypotension, anaphylaxis occurring within minutes of sting. Most fatal reactions occur within 30 minutes. Risk factors for severe reactions: older age, cardiovascular disease, elevated baseline tryptase, mastocytosis.',
    'Detailed sting history (insect identification, timing, severity). Venom-specific IgE (skin testing and/or serum-specific IgE) at least 4-6 weeks after the sting (to avoid false negatives during refractory period). Baseline serum tryptase (to screen for mastocytosis). Component-resolved diagnostics to differentiate true sensitization from cross-reactivity.',
    'Acute: epinephrine IM for systemic reactions. Long-term: venom immunotherapy (VIT)—indicated for systemic reactions with confirmed venom-specific IgE. VIT is >95% effective at preventing future systemic reactions. Duration: minimum 5 years (lifelong if mastocytosis or prior life-threatening reaction). Carry epinephrine auto-injector. Sting avoidance measures.',
    'Fatal anaphylaxis, recurrent anaphylaxis without VIT (30-60% re-sting reaction rate), anxiety and outdoor activity avoidance, missed mastocytosis diagnosis.',
    [
      'Venom immunotherapy is >95% effective—one of the most effective treatments in allergy.',
      'Wait 4-6 weeks after a sting before testing (refractory period causes false negatives).',
      'Elevated baseline tryptase in venom-allergic patients should prompt evaluation for mastocytosis.',
      'Large local reactions have only a 5-10% risk of future systemic reactions—VIT generally not indicated.',
    ],
    [
      'Golden DBK, et al. J Allergy Clin Immunol. 2017;139(3):669-678.',
    ],
  ),

  'allergic-asthma': entry(
    'allergic-asthma',
    'Allergic Asthma',
    'hypersensitivity',
    'Asthma phenotype driven by IgE-mediated sensitization to aeroallergens, representing the most common form of asthma, especially in children.',
    'Inhaled allergens trigger Th2-mediated inflammation: IL-4/IL-13 drive IgE production and mucus hypersecretion, IL-5 recruits eosinophils. Chronic airway inflammation leads to bronchoconstriction, mucosal edema, mucus plugging, and airway remodeling (subepithelial fibrosis, smooth muscle hypertrophy). Early-phase (mast cell-dependent) and late-phase (eosinophil-driven) responses.',
    'Episodic wheezing, dyspnea, chest tightness, and cough, often worse at night or with exercise. Symptoms triggered by allergen exposure, viral infections, cold air, exercise. Atopic features: allergic rhinitis, eczema, family history of atopy. Exam: diffuse expiratory wheezing, prolonged expiration.',
    'Spirometry with bronchodilator reversibility (>=12% and >=200 mL improvement in FEV1). Allergy testing (SPT or serum-specific IgE) to identify relevant allergens. FeNO (fractional exhaled nitric oxide) elevated >25 ppb suggests eosinophilic/allergic inflammation. Peripheral eosinophil count and total IgE. Peak flow variability.',
    'Stepwise approach per GINA/NAEPP guidelines. ICS (inhaled corticosteroids) are the cornerstone. ICS/LABA combinations for moderate-persistent. Allergen avoidance. LTRA (montelukast) as adjunct. Biologics for severe allergic asthma: omalizumab (anti-IgE), dupilumab (anti-IL-4Rα), mepolizumab/benralizumab (anti-IL-5 pathway), tezepelumab (anti-TSLP). Allergen immunotherapy (SCIT/SLIT).',
    'Status asthmaticus, airway remodeling (fixed obstruction), medication side effects (oral corticosteroid dependence), fatal asthma, pneumothorax, reduced quality of life.',
    [
      'Inhaled corticosteroids are the cornerstone of persistent asthma management.',
      'FeNO >25 ppb supports an eosinophilic/allergic asthma phenotype and predicts ICS response.',
      'Multiple biologics now target different Th2 pathways for severe allergic asthma.',
      'Allergen immunotherapy may prevent progression of allergic rhinitis to asthma in children.',
    ],
    [
      'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management. 2023.',
      'Holguin F, et al. J Allergy Clin Immunol. 2020;145(3):702-726.',
    ],
  ),

  'latex-allergy': entry(
    'latex-allergy',
    'Latex Allergy',
    'drug-allergy',
    'IgE-mediated hypersensitivity to natural rubber latex proteins, an important occupational allergy in healthcare workers with cross-reactivity to certain foods.',
    'Hevea brasiliensis (rubber tree) proteins (Hev b 1-13) cause IgE-mediated sensitization through repeated mucosal, cutaneous, or inhalational exposure (powdered glove particles). Cross-reactivity with food proteins causes latex-fruit syndrome (banana, avocado, kiwi, chestnut contain homologous proteins).',
    'Contact urticaria (most common Type I presentation), rhinoconjunctivitis, asthma from inhaled latex particles, and anaphylaxis (especially during surgery/procedures). Type IV reactions (delayed contact dermatitis from rubber additives) also occur. High-risk groups: healthcare workers, rubber industry workers, spina bifida patients (repeated surgical exposure), atopic individuals.',
    'Skin prick testing with latex extract (not standardized in the US). Serum-specific IgE to latex. Component testing (Hev b 5, Hev b 6.01 are major allergens). Glove-use provocation test. Patch testing for Type IV (rubber accelerator) allergy.',
    'Strict latex avoidance (non-latex gloves, latex-free environment for procedures/surgery). Medical alert identification. Epinephrine auto-injector for IgE-mediated allergy. Pre-operative protocols for latex-allergic patients (first case of the day, latex-free OR). Counsel on latex-fruit syndrome cross-reactivity.',
    'Intraoperative anaphylaxis, occupational disability, latex-fruit syndrome anaphylaxis, reduced quality of life from pervasive latex exposure in medical settings.',
    [
      'Latex allergy has declined with the transition to non-powdered and non-latex gloves.',
      'Latex-fruit syndrome: cross-reactivity with banana, avocado, kiwi, and chestnut.',
      'Spina bifida patients are at very high risk due to repeated early surgical exposure.',
      'Schedule latex-allergic patients as first case of the day to minimize aeroallergen levels.',
    ],
    [
      'Kelly KJ, Sussman G. J Allergy Clin Immunol. 2017;140(5):1230-1238.',
    ],
  ),

  'primary-immunodeficiency-evaluation': entry(
    'primary-immunodeficiency-evaluation',
    'Approach to Primary Immunodeficiency Evaluation',
    'immunodeficiency',
    'Systematic clinical approach to evaluating patients with suspected primary immunodeficiency, guided by infection pattern, age of onset, and family history.',
    'Over 450 inborn errors of immunity identified. Categorized by defective component: antibody (B-cell) deficiencies (most common ~50%), combined T and B-cell deficiencies, phagocytic defects, complement deficiencies, innate immunity defects, and immune dysregulation syndromes. Specific infection patterns suggest the defective immune component.',
    'Warning signs (Jeffrey Modell Foundation): >=4 new ear infections/year, >=2 serious sinus infections/year, >=2 months on antibiotics with poor response, >=2 pneumonias/year, failure to thrive, recurrent deep abscesses, persistent oral thrush or skin infections, need for IV antibiotics, family history of immunodeficiency. Infection pattern guides evaluation: encapsulated bacteria suggest antibody deficiency; opportunistic infections suggest T-cell deficiency; catalase-positive organisms suggest phagocyte defects; Neisseria suggests complement deficiency.',
    'First-tier: CBC with differential, quantitative immunoglobulins (IgG, IgA, IgM), vaccine antibody responses (tetanus, pneumococcal). Second-tier: lymphocyte subsets by flow cytometry (CD3, CD4, CD8, CD19, CD16/56), IgG subclasses, complement (CH50, AH50). Third-tier: lymphocyte proliferation assays, neutrophil oxidative burst (DHR flow cytometry for CGD), genetic testing/whole exome sequencing. HIV testing to exclude secondary immunodeficiency.',
    'Treat infections aggressively. Immunoglobulin replacement for antibody deficiencies. Prophylactic antibiotics as indicated. HSCT for severe combined and some other primary immunodeficiencies. Gene therapy for selected conditions (ADA-SCID, X-linked SCID, CGD). Avoid live vaccines in severe immunodeficiency. Genetic counseling.',
    'Diagnostic delay (average 5-7 years from symptom onset), end-organ damage from chronic infections (bronchiectasis), autoimmune complications, malignancy, chronic lung disease, and premature death in severe forms.',
    [
      'Antibody deficiencies are the most common primary immunodeficiencies (~50%).',
      'Infection pattern points to the defective immune component—use this to guide workup.',
      'Always check vaccine responses—low immunoglobulins alone are insufficient for antibody deficiency diagnosis.',
      'Newborn TREC screening detects SCID and some other severe T-cell deficiencies at birth.',
    ],
    [
      'Tangye SG, et al. J Clin Immunol. 2022;42(7):1473-1507.',
      'Bonilla FA, et al. J Allergy Clin Immunol Pract. 2015;3(6):843-855.',
    ],
  ),

  'chronic-granulomatous-disease': entry(
    'chronic-granulomatous-disease',
    'Chronic Granulomatous Disease (CGD)',
    'immunodeficiency',
    'Primary immunodeficiency of phagocyte function caused by defects in the NADPH oxidase complex, resulting in inability to generate reactive oxygen species and kill catalase-positive organisms.',
    'NADPH oxidase (phox) complex normally generates superoxide for microbial killing in the phagolysosome. Genetic defects (X-linked gp91phox most common ~65%, autosomal recessive p47phox, p22phox, p67phox) abolish oxidative burst. Catalase-positive organisms (Staphylococcus, Aspergillus, Serratia, Nocardia, Burkholderia) are not killed because they destroy their own H2O2, which would otherwise compensate for the phagocyte defect. Catalase-negative organisms (Streptococcus) produce H2O2 that the phagocyte can use.',
    'Recurrent infections with catalase-positive organisms: skin abscesses, lymphadenitis, pneumonia (especially Aspergillus), liver abscesses, osteomyelitis (Serratia, Aspergillus). Granuloma formation (GI tract causing obstruction, GU tract). Onset typically in childhood. Inflammatory complications: colitis mimicking Crohn disease, granulomatous cystitis.',
    'Dihydrorhodamine (DHR) flow cytometry: gold standard screening test (absent or markedly reduced oxidative burst). Nitroblue tetrazolium (NBT) test: older, less sensitive (no color change in affected neutrophils). Genetic testing for specific mutation. CT imaging for deep infections. Tissue biopsy showing granulomas.',
    'Prophylactic trimethoprim-sulfamethoxazole and itraconazole (lifelong). IFN-gamma prophylaxis (controversial, reduces infection frequency). Aggressive treatment of infections (often prolonged IV antibiotics, surgical drainage). HSCT is curative and increasingly recommended early. Gene therapy in clinical trials. Corticosteroids (cautiously) for granulomatous obstruction.',
    'Invasive aspergillosis (leading cause of death), hepatic/pulmonary abscesses, GI obstruction from granulomas, chronic lung disease, graft failure post-HSCT.',
    [
      'CGD patients are susceptible to catalase-positive organisms: remember "S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia."',
      'DHR flow cytometry has replaced the NBT test as the standard screening test.',
      'Aspergillus is the leading cause of mortality in CGD.',
      'CGD-associated colitis can mimic Crohn disease histologically and clinically.',
    ],
    [
      'Holland SM. Clin Rev Allergy Immunol. 2010;38(1):3-10.',
      'Marciano BE, et al. J Allergy Clin Immunol. 2015;136(2):318-324.',
    ],
  ),

  'serum-sickness': entry(
    'serum-sickness',
    'Serum Sickness and Serum Sickness-Like Reactions',
    'hypersensitivity',
    'Type III hypersensitivity reaction caused by immune complex deposition following exposure to foreign proteins (classic serum sickness) or drugs (serum sickness-like reaction).',
    'Classic serum sickness: foreign protein (antithymocyte globulin, chimeric monoclonal antibodies, antivenom) induces IgG antibody formation. Immune complexes form at equivalence and deposit in vessel walls, activating complement (C3a, C5a) and recruiting neutrophils. Serum sickness-like reactions (from drugs like cefaclor, TMP-SMX) have a similar presentation but immune complex formation is less clearly demonstrated.',
    'Onset 7-14 days after first exposure (or 1-3 days if previously sensitized). Fever, urticarial or morbilliform rash, arthralgias/arthritis, lymphadenopathy. May include glomerulonephritis, peripheral neuropathy. Self-limited (1-2 weeks after drug cessation).',
    'Clinical diagnosis based on timing and presentation. CBC (possible leukopenia, eosinophilia), low complement (C3, C4), elevated ESR, urinalysis (proteinuria if renal involvement). Circulating immune complexes may be detected. Skin biopsy showing leukocytoclastic vasculitis.',
    'Discontinue offending agent. NSAIDs for mild symptoms. Antihistamines for urticaria. Short-course corticosteroids for moderate-severe symptoms. Self-resolving within 1-2 weeks after drug cessation. Document the agent to avoid future re-exposure.',
    'Rarely: renal failure, severe vasculitis, neuropathy. Recurrence with re-exposure (more rapid and severe).',
    [
      'Serum sickness classically occurs 7-14 days after first exposure—time to mount an IgG response.',
      'Low complement (C3, C4) distinguishes serum sickness from simple drug rash.',
      'Serum sickness is self-limited after drug removal, typically resolving in 1-2 weeks.',
      'Cefaclor is the antibiotic most commonly associated with serum sickness-like reactions in children.',
    ],
    [
      'Lawley TJ, et al. N Engl J Med. 1984;311(22):1407-1413.',
    ],
  ),

  'drug-desensitization': entry(
    'drug-desensitization',
    'Drug Desensitization',
    'immunotherapy',
    'Protocol to temporarily induce tolerance to a drug in a patient with confirmed or suspected IgE-mediated drug allergy when no adequate alternative exists.',
    'Gradual escalation of drug doses progressively occupies FcεRI-bound IgE on mast cells without cross-linking sufficient receptors to trigger degranulation. Mast cell mediator stores are gradually depleted. Tolerance is temporary—maintained only while the drug is continuously administered. Mechanisms also involve inhibitory receptor engagement and altered intracellular signaling.',
    'Indicated when a patient with confirmed IgE-mediated drug allergy requires the specific drug and no effective alternative exists. Common scenarios: penicillin allergy requiring penicillin for syphilis in pregnancy, aspirin desensitization for AERD/cardiac indications, carboplatin desensitization for ovarian cancer, insulin desensitization for insulin allergy.',
    'Confirmed IgE-mediated allergy (positive skin test or history of immediate reaction). Assessment of risk/benefit. Informed consent. ICU or monitored setting with resuscitation equipment. Premedication protocols (antihistamines, corticosteroids) are sometimes used.',
    'Typical protocol: start at 1/10,000 to 1/1000 of target dose, double the dose every 15-30 minutes until full therapeutic dose is reached (usually 4-12 hours). Continuous dosing required to maintain tolerance. If drug is interrupted for >24-48 hours, re-desensitization is needed. Monitor for reactions at each step.',
    'Anaphylaxis during the protocol, breakthrough reactions, failure to achieve tolerance, drug toxicity at therapeutic doses.',
    [
      'Drug desensitization is TEMPORARY—tolerance is lost if the drug is stopped for >24-48 hours.',
      'Desensitization works for IgE-mediated reactions ONLY, not for SJS/TEN, DRESS, or other severe T-cell reactions.',
      'Aspirin desensitization in N-ERD is both a desensitization and a therapeutic intervention.',
      'Carboplatin desensitization protocols are commonly used in oncology for patients with platinum hypersensitivity.',
    ],
    [
      'Castells MC. J Allergy Clin Immunol. 2017;140(2):335-342.',
    ],
  ),

  'complement-deficiency': entry(
    'complement-deficiency',
    'Complement Deficiency Syndromes',
    'immunodeficiency',
    'Primary immunodeficiencies involving defects in complement components, leading to increased susceptibility to specific infections and autoimmune disease.',
    'Classical pathway deficiencies (C1q, C2, C4): impaired immune complex clearance, strongly associated with SLE. C3 deficiency: impaired opsonization, recurrent pyogenic infections. Terminal complement deficiencies (C5-C9/MAC): inability to form the membrane attack complex, predisposing to Neisseria infections. MBL deficiency: most common complement defect but often clinically silent.',
    'Classical pathway (C1q, C2, C4): SLE-like autoimmune disease (C1q deficiency has >90% penetrance for SLE). C3 deficiency: recurrent encapsulated bacterial infections. Terminal complement (C5-C9): recurrent Neisseria meningitidis infections (meningococcemia, meningitis). Properdin/factor D deficiency: fulminant meningococcal disease. C1-inhibitor deficiency: hereditary angioedema (see separate entry).',
    'CH50 (total hemolytic complement): screens the entire classical and terminal pathway (0 if any component is missing). AH50: screens alternative pathway. Individual complement component levels (C3, C4, C1q, etc.). Functional assays for specific components. Genetic testing.',
    'Vaccination against encapsulated organisms (meningococcal ACWY + B, pneumococcal, Hib). Prophylactic antibiotics for high-risk patients. Aggressive treatment of infections. SLE management per standard guidelines. Genetic counseling. Meningococcal boosters more frequently than standard schedule.',
    'Fulminant meningococcal sepsis, renal failure from lupus nephritis (C1q deficiency), recurrent infections, disseminated gonococcal infection.',
    [
      'CH50 = 0 indicates complete deficiency of one component in the classical/terminal pathway.',
      'Terminal complement deficiency (C5-C9) is the classic cause of recurrent Neisseria meningitidis infections.',
      'C2 deficiency is the most common classical pathway complement deficiency.',
      'Always vaccinate complement-deficient patients against meningococcal disease (ACWY + B).',
    ],
    [
      'Ram S, et al. N Engl J Med. 2010;362(18):1727-1737.',
    ],
  ),

  'ige-mediated-food-allergy-prevention': entry(
    'ige-mediated-food-allergy-prevention',
    'Food Allergy Prevention (Early Introduction)',
    'food-allergy',
    'Evidence-based strategy of early dietary introduction of allergenic foods in infancy to prevent IgE-mediated food allergy development, a paradigm shift from prior avoidance recommendations.',
    'Dual-allergen exposure hypothesis: cutaneous allergen exposure through impaired skin barrier (eczema) promotes Th2 sensitization, while early oral exposure promotes oral tolerance via Treg induction. Early and regular oral exposure to food proteins induces immune tolerance through gut-associated lymphoid tissue (GALT). Delayed introduction allows cutaneous sensitization to dominate.',
    'Not a disease presentation—this is a preventive strategy. Target population: infants at high risk for food allergy (those with severe eczema and/or egg allergy). LEAP study demonstrated that early peanut introduction (4-6 months) in high-risk infants reduced peanut allergy by 81% compared to avoidance.',
    'For high-risk infants (severe eczema/egg allergy): allergy evaluation (SPT or specific IgE to peanut) before introduction. Negative test: introduce at home. Small wheal (1-4mm): supervised in-office introduction. Large wheal (>4mm or known allergy): allergist-supervised evaluation. For moderate/low-risk infants: introduce allergenic foods around 4-6 months without prior testing.',
    'Introduce peanut-containing foods at 4-6 months for high-risk infants (per AAP/NIAID guidelines). Introduce other common allergens (egg, milk, wheat, soy, tree nuts, fish, shellfish, sesame) early in the complementary feeding period. Continue regular ingestion (3x/week) to maintain tolerance. Do NOT delay introduction of allergenic foods.',
    'Allergic reaction during introduction (rare, usually mild), parental anxiety, choking risk (use age-appropriate textures—not whole nuts). Failure to maintain regular ingestion may not sustain tolerance.',
    [
      'The LEAP study revolutionized food allergy prevention—early peanut introduction reduces allergy by 81%.',
      'The dual-allergen exposure hypothesis: skin exposure sensitizes, oral exposure tolerizes.',
      'NIAID guidelines recommend peanut introduction at 4-6 months for high-risk infants.',
      'Regular ingestion (not just initial introduction) is necessary to maintain oral tolerance.',
    ],
    [
      'Du Toit G, et al. N Engl J Med. 2015;372(9):803-813.',
      'Togias A, et al. J Allergy Clin Immunol. 2017;139(1):29-44.',
    ],
  ),

  'immunoglobulin-replacement-therapy': entry(
    'immunoglobulin-replacement-therapy',
    'Immunoglobulin Replacement Therapy',
    'immunotherapy',
    'Administration of pooled human IgG to patients with primary or secondary antibody deficiencies to prevent recurrent infections.',
    'Pooled from thousands of donors, providing broad spectrum of pathogen-specific IgG antibodies. Replaces missing protective antibodies. Also has immunomodulatory effects at higher doses (used in autoimmune conditions). IVIG: intermittent IV infusions every 3-4 weeks. SCIG: more frequent subcutaneous self-infusions (weekly or biweekly) providing stable IgG levels.',
    'Indicated for: CVID, XLA, other primary antibody deficiencies, secondary hypogammaglobulinemia (CLL, post-HSCT, rituximab-induced). Goal: maintain trough IgG >500 mg/dL (higher targets may be needed for individual patients based on infection frequency). IVIG doses: 400-600 mg/kg every 3-4 weeks. SCIG equivalent doses divided into weekly infusions.',
    'Confirm antibody deficiency: low IgG with poor vaccine responses. Baseline labs: IgG/A/M levels, hepatitis B/C serologies, renal and liver function. Monitor trough IgG levels, infection frequency, liver and renal function. Preinfusion assessment for each IVIG infusion.',
    'IVIG: premedicate with acetaminophen, antihistamine, and/or hydrocortisone for reaction-prone patients. Start infusion slowly and titrate up. SCIG: teach self-administration (abdomen, thighs, arms); better tolerated with fewer systemic reactions. Dose adjust to achieve adequate trough and clinical response (infection reduction). SCIG offers more stable IgG levels and better quality of life.',
    'IVIG reactions: headache, chills, myalgia, fever (rate-related), aseptic meningitis, renal dysfunction (sucrose-containing products), thromboembolic events, hemolytic anemia (anti-A/anti-B antibodies), TRALI (rare). SCIG: local site reactions (swelling, erythema). IgA-containing products can cause anaphylaxis in IgA-deficient patients with anti-IgA antibodies.',
    [
      'Trough IgG >500 mg/dL is the minimum target, but clinical response (infection frequency) guides individual dosing.',
      'SCIG provides more stable IgG levels and fewer systemic side effects than IVIG.',
      'Use IgA-depleted products for patients with IgA deficiency and anti-IgA antibodies.',
      'High-dose IVIG (2 g/kg) has immunomodulatory effects used in ITP, Kawasaki disease, and GBS.',
    ],
    [
      'Perez EE, et al. J Allergy Clin Immunol. 2017;139(3S):S218-S229.',
    ],
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search entries by query string across name, description, clinical
 * presentation, pathophysiology, and management fields.
 */
export function searchAllergyEntries(query: string): AllergyImmunologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(allergyImmunologyDatabase).filter((e) => {
    const haystack = [
      e.name,
      e.description,
      e.pathophysiology,
      e.clinicalPresentation,
      e.diagnosticWorkup,
      e.management,
      e.complications,
      ...e.keyPearls,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

/**
 * Filter entries by one or more categories.
 */
export function filterByCategory(
  categories: AllergyImmunologyCategory[],
): AllergyImmunologyEntry[] {
  const set = new Set<AllergyImmunologyCategory>(categories);
  return Object.values(allergyImmunologyDatabase).filter((e) => set.has(e.category));
}

/**
 * Retrieve a single entry by its id, or undefined if not found.
 */
export function getEntryById(id: string): AllergyImmunologyEntry | undefined {
  return allergyImmunologyDatabase[id];
}
