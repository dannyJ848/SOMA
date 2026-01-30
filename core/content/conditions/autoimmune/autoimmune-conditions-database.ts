/**
 * Autoimmune Conditions Database
 *
 * Comprehensive reference of 30+ autoimmune conditions with
 * clinical summaries, autoantibodies, and treatment guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AutoimmuneConditionCategory =
  | 'systemic'
  | 'organ-specific'
  | 'connective-tissue'
  | 'vasculitic'
  | 'neurologic'
  | 'endocrine'
  | 'gastrointestinal'
  | 'dermatologic';

export interface AutoimmuneConditionEntry {
  id: string;
  name: string;
  category: AutoimmuneConditionCategory;
  description: string;
  pathogenesis: string;
  autoantibodies: string[];
  clinicalFeatures: string[];
  diagnosis: string[];
  treatment: string;
  prognosis: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function ai(
  id: string, name: string,
  category: AutoimmuneConditionCategory, icdCode: string,
  description: string, pathogenesis: string,
  autoantibodies: string[], clinicalFeatures: string[],
  diagnosis: string[], treatment: string, prognosis: string,
): AutoimmuneConditionEntry {
  return {
    id, name, category, description, pathogenesis,
    autoantibodies, clinicalFeatures, diagnosis, treatment, prognosis, icdCode,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const AUTOIMMUNE_CONDITION_ENTRIES: Record<string, AutoimmuneConditionEntry> = {

  // ---- Systemic (3) -------------------------------------------------------

  'sle': ai(
    'sle', 'Systemic Lupus Erythematosus (SLE)',
    'systemic', 'M32.9',
    'Chronic multisystem autoimmune disease with relapsing-remitting course affecting skin, joints, kidneys, blood, and CNS.',
    'Loss of self-tolerance leads to polyclonal B-cell activation and production of pathogenic autoantibodies, especially anti-dsDNA. Immune complex deposition causes complement activation and tissue inflammation in virtually any organ.',
    ['ANA', 'Anti-dsDNA', 'Anti-Smith', 'Anti-RNP', 'Antiphospholipid antibodies', 'Anti-ribosomal P'],
    ['Malar (butterfly) rash', 'Photosensitivity', 'Polyarthralgia/arthritis', 'Oral ulcers', 'Serositis (pleuritis, pericarditis)', 'Lupus nephritis', 'Cytopenias', 'Neuropsychiatric manifestations', 'Raynaud phenomenon'],
    ['ANA screening (>98% sensitivity)', 'Anti-dsDNA and anti-Smith (high specificity)', 'Complement levels (C3, C4)', 'CBC, CMP, urinalysis with microscopy', 'Renal biopsy if nephritis suspected', 'SLICC or 2019 EULAR/ACR classification criteria'],
    'Hydroxychloroquine (all patients), NSAIDs for mild disease, corticosteroids for flares, steroid-sparing agents (mycophenolate, azathioprine, cyclophosphamide for severe nephritis), belimumab, voclosporin for refractory nephritis.',
    '10-year survival >90% with modern therapy. Prognosis depends on renal involvement, infections, and cardiovascular disease. Leading causes of death: infections, active disease flares, and premature atherosclerosis.',
  ),

  'antiphospholipid-syndrome': ai(
    'antiphospholipid-syndrome', 'Antiphospholipid Syndrome',
    'systemic', 'D68.61',
    'Acquired thrombophilia characterized by arterial and venous thrombosis and pregnancy morbidity in the presence of persistent antiphospholipid antibodies.',
    'Antiphospholipid antibodies bind beta-2 glycoprotein I and activate endothelial cells, platelets, and complement, creating a prothrombotic state. May be primary or secondary to SLE.',
    ['Lupus anticoagulant', 'Anticardiolipin antibodies (IgG/IgM)', 'Anti-beta-2 glycoprotein I (IgG/IgM)'],
    ['Deep vein thrombosis', 'Pulmonary embolism', 'Stroke (especially in young patients)', 'Recurrent pregnancy loss', 'Thrombocytopenia', 'Livedo reticularis', 'Libman-Sacks endocarditis', 'Catastrophic APS (multi-organ thrombosis)'],
    ['Persistent positivity (≥12 weeks apart) of ≥1 antiphospholipid antibody', 'Sydney classification criteria: clinical + laboratory', 'Coagulation studies', 'Imaging for thrombosis confirmation'],
    'Long-term anticoagulation with warfarin (target INR 2-3) after thrombotic event. Aspirin + low-molecular-weight heparin during pregnancy. Hydroxychloroquine as adjunct. Catastrophic APS: anticoagulation + corticosteroids + plasma exchange + IVIG.',
    'Recurrence risk is high without anticoagulation. Catastrophic APS carries >30% mortality. Pregnancy outcomes significantly improved with treatment (>70% live birth rate).',
  ),

  'mixed-connective-tissue-disease': ai(
    'mixed-connective-tissue-disease', 'Mixed Connective Tissue Disease',
    'systemic', 'M35.1',
    'Overlap syndrome with features of SLE, systemic sclerosis, and polymyositis, defined by high-titer anti-U1 RNP antibodies.',
    'High-titer anti-U1 RNP antibodies drive an overlap autoimmune process. T-cell and B-cell dysregulation causes inflammation in joints, muscles, skin, and lungs. May evolve into a defined CTD over time.',
    ['Anti-U1 RNP (high titer, required)', 'ANA (speckled pattern)'],
    ['Raynaud phenomenon (nearly universal)', 'Swollen "sausage" fingers', 'Polyarthritis', 'Myositis', 'Esophageal dysmotility', 'Pulmonary hypertension', 'Interstitial lung disease', 'Sclerodactyly'],
    ['High-titer anti-U1 RNP antibody', 'ANA (speckled pattern)', 'CK if myositis present', 'PFTs and HRCT for ILD screening', 'Echocardiogram for pulmonary hypertension'],
    'Corticosteroids for active disease. NSAIDs and hydroxychloroquine for mild symptoms. Immunosuppressives (methotrexate, azathioprine, mycophenolate) for organ-threatening disease. Calcium channel blockers for Raynaud. Pulmonary hypertension-targeted therapy as needed.',
    'Generally more favorable than SLE or scleroderma alone. Pulmonary hypertension is the leading cause of death. Some patients evolve into a single defined CTD.',
  ),

  // ---- Connective Tissue (4) ----------------------------------------------

  'rheumatoid-arthritis': ai(
    'rheumatoid-arthritis', 'Rheumatoid Arthritis',
    'connective-tissue', 'M06.9',
    'Chronic symmetric inflammatory polyarthritis targeting the synovial joints, leading to erosive joint destruction if untreated.',
    'Citrullination of self-proteins (e.g., vimentin, fibrinogen) triggers adaptive immune response in genetically susceptible individuals (HLA-DR4). Synovial inflammation driven by TNF-α, IL-6, and RANKL leads to pannus formation and cartilage/bone erosion.',
    ['RF (Rheumatoid Factor)', 'Anti-CCP (anti-citrullinated peptide)', 'ANA (30% of patients)'],
    ['Symmetric polyarthritis of small joints (MCP, PIP, wrists)', 'Morning stiffness >60 minutes', 'Joint swelling and tenderness', 'Rheumatoid nodules', 'Interstitial lung disease', 'Felty syndrome (splenomegaly + neutropenia)', 'Cervical spine subluxation', 'Secondary amyloidosis'],
    ['RF and anti-CCP antibodies', 'ESR and CRP', 'Radiographs of hands/feet (erosions)', 'Musculoskeletal ultrasound or MRI', '2010 ACR/EULAR classification criteria'],
    'Treat-to-target strategy: early DMARD initiation (methotrexate first-line), escalate to combination DMARDs or biologics (TNF inhibitors, IL-6 inhibitors, JAK inhibitors, anti-CD20, CTLA4-Ig) if target not met. Short-term corticosteroids for flares.',
    'Early aggressive treatment dramatically improves outcomes. Remission achievable in 30-50%. Untreated RA leads to joint destruction within 2 years. Increased CV mortality risk.',
  ),

  'sjogren-syndrome': ai(
    'sjogren-syndrome', 'Sjögren Syndrome',
    'connective-tissue', 'M35.0',
    'Chronic autoimmune exocrinopathy primarily affecting salivary and lacrimal glands, causing sicca symptoms. May be primary or secondary to other CTDs.',
    'Lymphocytic infiltration of exocrine glands (focal lymphocytic sialadenitis) driven by B-cell hyperactivity and type I interferon pathway. Ductal epithelial cells present autoantigens and produce pro-inflammatory cytokines.',
    ['Anti-SSA/Ro', 'Anti-SSB/La', 'ANA', 'RF (60-70%)'],
    ['Dry eyes (keratoconjunctivitis sicca)', 'Dry mouth (xerostomia)', 'Parotid gland enlargement', 'Dental caries', 'Arthralgia', 'Fatigue', 'Interstitial lung disease', 'Renal tubular acidosis', 'Peripheral neuropathy', 'Increased lymphoma risk (5-10%)'],
    ['Anti-SSA/Ro and Anti-SSB/La', 'Schirmer test and ocular staining', 'Salivary gland biopsy (focus score ≥1)', 'Salivary flow rate', 'ACR/EULAR 2016 classification criteria'],
    'Symptomatic: artificial tears, saliva substitutes, pilocarpine or cevimeline for sicca. Hydroxychloroquine for arthralgia/fatigue. Rituximab for severe extraglandular disease. Monitoring for lymphoma.',
    'Generally good survival but significantly reduced quality of life. NHL risk 5-10% (44x general population). Extraglandular manifestations (ILD, vasculitis) worsen prognosis.',
  ),

  'scleroderma': ai(
    'scleroderma', 'Scleroderma (Systemic Sclerosis)',
    'connective-tissue', 'M34.9',
    'Fibrotic autoimmune disease characterized by skin thickening, vasculopathy, and internal organ fibrosis. Classified as limited cutaneous (lcSSc) or diffuse cutaneous (dcSSc).',
    'Vascular injury (endothelial dysfunction and intimal proliferation) triggers fibroblast activation and excessive collagen deposition. Immune activation (Th2-skewed) drives inflammation and fibrosis. Three pathologic hallmarks: vasculopathy, fibrosis, and autoimmunity.',
    ['Anti-centromere (limited)', 'Anti-Scl-70/topoisomerase I (diffuse)', 'Anti-RNA polymerase III (diffuse, renal crisis risk)', 'ANA (>90%)'],
    ['Raynaud phenomenon (first symptom)', 'Skin thickening (sclerodactyly to trunk)', 'Digital ulcers and pitting scars', 'Interstitial lung disease', 'Pulmonary arterial hypertension', 'Scleroderma renal crisis', 'Esophageal dysmotility and GERD', 'Calcinosis (CREST syndrome)'],
    ['ANA and scleroderma-specific antibodies', 'Nailfold capillaroscopy', 'PFTs with DLCO (ILD screening)', 'HRCT chest', 'Echocardiogram (PAH screening)', 'ACR/EULAR 2013 classification criteria'],
    'No disease-modifying therapy for fibrosis. ILD: mycophenolate, nintedanib, or tocilizumab. PAH: PDE5 inhibitors, endothelin receptor antagonists, prostacyclin analogs. Renal crisis: ACE inhibitors (first-line). Raynaud: CCBs, PDE5 inhibitors. Autologous stem cell transplant for selected severe diffuse cases.',
    'Variable. Limited disease: 10-year survival ~75%. Diffuse disease: 10-year survival ~55%. Leading causes of death: ILD and PAH. Anti-RNA polymerase III associated with renal crisis but better long-term skin outcomes.',
  ),

  'polymyositis-dermatomyositis': ai(
    'polymyositis-dermatomyositis', 'Polymyositis / Dermatomyositis',
    'connective-tissue', 'M33.9',
    'Idiopathic inflammatory myopathies causing proximal muscle weakness. Dermatomyositis additionally features characteristic skin findings and is associated with occult malignancy.',
    'Polymyositis: CD8+ T-cell mediated attack on myofibers (endomysial inflammation). Dermatomyositis: complement-mediated microangiopathy targeting intramuscular capillaries (perifascicular atrophy). Both result in muscle fiber necrosis and weakness.',
    ['Anti-Jo-1 (antisynthetase syndrome)', 'Anti-Mi-2 (classic DM)', 'Anti-MDA5 (amyopathic DM, ILD)', 'Anti-SRP (necrotizing myopathy)', 'Anti-TIF1-gamma (malignancy-associated DM)', 'ANA'],
    ['Progressive proximal muscle weakness', 'Gottron papules (DM)', 'Heliotrope rash (DM)', 'Shawl sign and V-sign (DM)', 'Mechanic hands', 'Dysphagia', 'Interstitial lung disease (antisynthetase syndrome)', 'Malignancy (DM > PM)', 'Calcinosis'],
    ['Elevated CK (10-50x normal)', 'Myositis-specific antibodies', 'EMG (irritable myopathy)', 'MRI of thighs (muscle edema)', 'Muscle biopsy (gold standard)', 'Malignancy screening (DM within 3 years of diagnosis)'],
    'High-dose corticosteroids (first-line), steroid-sparing agents (methotrexate, azathioprine, mycophenolate). Refractory: IVIG, rituximab, calcineurin inhibitors. Physical therapy essential. Age-appropriate malignancy screening for DM.',
    'Most respond to immunosuppression. DM with anti-MDA5 and rapidly progressive ILD has poor prognosis. Malignancy-associated DM prognosis depends on underlying cancer. Overall 5-year survival ~80%.',
  ),

  // ---- Endocrine (4) ------------------------------------------------------

  'type-1-diabetes': ai(
    'type-1-diabetes', 'Type 1 Diabetes Mellitus',
    'endocrine', 'E10.9',
    'Autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency, typically presenting in childhood or adolescence.',
    'Genetic susceptibility (HLA-DR3/DR4) plus environmental trigger leads to T-cell mediated destruction of pancreatic islet beta cells. Progressive loss of insulin secretory capacity results in hyperglycemia and ketosis-prone metabolism.',
    ['Anti-GAD65', 'Anti-IA-2 (islet antigen 2)', 'Anti-insulin (IAA)', 'Anti-ZnT8', 'Islet cell antibodies (ICA)'],
    ['Polyuria, polydipsia, polyphagia', 'Weight loss', 'Diabetic ketoacidosis (DKA)', 'Fatigue', 'Blurred vision', 'Long-term: retinopathy, nephropathy, neuropathy, cardiovascular disease'],
    ['Fasting glucose ≥126 mg/dL or random ≥200 mg/dL with symptoms', 'HbA1c ≥6.5%', 'C-peptide (low/undetectable)', 'Islet autoantibodies (≥1 positive)', 'Distinction from type 2 and MODY'],
    'Lifelong insulin replacement: basal-bolus regimen (MDI) or insulin pump (CSII). Continuous glucose monitoring. Carbohydrate counting. HbA1c target <7%. Screening for microvascular complications. Teplizumab may delay onset in at-risk individuals.',
    'Life expectancy reduced by ~12 years without optimal control. Intensive management reduces microvascular complications by 50-76% (DCCT). Technology advances (CGM, hybrid closed-loop) improving outcomes significantly.',
  ),

  'hashimoto-thyroiditis': ai(
    'hashimoto-thyroiditis', 'Hashimoto Thyroiditis',
    'endocrine', 'E06.3',
    'Chronic autoimmune thyroiditis and the most common cause of hypothyroidism in iodine-sufficient regions.',
    'CD4+ T-cell and antibody-mediated destruction of thyroid follicular cells. Anti-TPO and anti-thyroglobulin antibodies cause complement-mediated and cell-mediated thyroid damage, leading to progressive hypothyroidism.',
    ['Anti-TPO (>90%)', 'Anti-thyroglobulin', 'TSH receptor blocking antibodies (some)'],
    ['Fatigue and lethargy', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin and hair', 'Goiter (painless, firm)', 'Myxedema', 'Depression', 'Menstrual irregularities', 'Myxedema coma (severe)'],
    ['TSH (elevated)', 'Free T4 (low or low-normal)', 'Anti-TPO antibodies', 'Anti-thyroglobulin antibodies', 'Thyroid ultrasound (heterogeneous, hypoechoic)'],
    'Levothyroxine replacement titrated to normalize TSH (target 0.5-2.5 mIU/L). Monitor TSH every 6-8 weeks during dose adjustment, then annually. Subclinical hypothyroidism: treat if TSH >10 or symptomatic.',
    'Excellent with thyroid hormone replacement. Lifelong treatment required. Small increased risk of thyroid lymphoma (MALT). Associated with other autoimmune diseases (T1DM, celiac, vitiligo).',
  ),

  'graves-disease': ai(
    'graves-disease', 'Graves Disease',
    'endocrine', 'E05.0',
    'Autoimmune hyperthyroidism caused by stimulatory TSH receptor antibodies, the most common cause of hyperthyroidism.',
    'Thyroid-stimulating immunoglobulins (TSI) bind and activate TSH receptors on thyroid follicular cells, causing unregulated thyroid hormone production. B-cell and T-cell dysregulation in genetically predisposed individuals (HLA-DR3).',
    ['TSH receptor antibodies (TRAb/TSI)', 'Anti-TPO (70%)', 'Anti-thyroglobulin (30%)'],
    ['Weight loss despite increased appetite', 'Heat intolerance and sweating', 'Tremor and anxiety', 'Palpitations and tachycardia', 'Diffuse goiter with bruit', 'Graves ophthalmopathy (proptosis, lid retraction)', 'Pretibial myxedema', 'Thyroid acropachy', 'Thyroid storm (life-threatening)'],
    ['TSH (suppressed)', 'Free T4 and Free T3 (elevated)', 'TSH receptor antibodies', 'Radioactive iodine uptake (diffusely increased)', 'Thyroid ultrasound with Doppler (hypervascular)'],
    'Three options: antithyroid drugs (methimazole preferred, PTU in first trimester), radioactive iodine ablation, or thyroidectomy. Beta-blockers for symptomatic relief. Ophthalmopathy: selenium, corticosteroids, teprotumumab, orbital decompression.',
    'Most achieve remission or euthyroidism with definitive therapy. ATD remission ~50% after 12-18 months. RAI and surgery result in hypothyroidism requiring lifelong replacement. Ophthalmopathy may persist independently.',
  ),

  'addison-disease': ai(
    'addison-disease', 'Addison Disease (Primary Adrenal Insufficiency)',
    'endocrine', 'E27.1',
    'Autoimmune destruction of the adrenal cortex causing deficiency of cortisol, aldosterone, and adrenal androgens.',
    'T-cell and antibody-mediated destruction of adrenal cortical cells. Anti-21-hydroxylase antibodies are the hallmark. >90% of cortex must be destroyed before clinical insufficiency manifests. Part of autoimmune polyendocrine syndromes.',
    ['Anti-21-hydroxylase (>90%)', 'Anti-adrenal cortex antibodies'],
    ['Fatigue and weakness', 'Hyperpigmentation (skin creases, buccal mucosa)', 'Weight loss and anorexia', 'Orthostatic hypotension', 'Salt craving', 'Nausea, vomiting, abdominal pain', 'Hyponatremia and hyperkalemia', 'Adrenal crisis (acute emergency)'],
    ['Morning cortisol (low)', 'ACTH stimulation test (cosyntropin, gold standard)', 'ACTH level (elevated)', 'Anti-21-hydroxylase antibodies', 'Electrolytes (low Na, high K)', 'CT adrenals (small/atrophic in autoimmune)'],
    'Glucocorticoid replacement (hydrocortisone 15-25 mg/day in divided doses). Mineralocorticoid replacement (fludrocortisone). Stress dose steroids during illness/surgery. Medical alert identification. DHEA supplementation in women if persistent fatigue.',
    'Normal life expectancy with proper replacement therapy and patient education. Adrenal crisis remains the primary cause of excess mortality. Associated autoimmune conditions (thyroid, T1DM) require screening.',
  ),

  // ---- Gastrointestinal (5) -----------------------------------------------

  'celiac-disease': ai(
    'celiac-disease', 'Celiac Disease',
    'gastrointestinal', 'K90.0',
    'Immune-mediated enteropathy triggered by gluten ingestion in genetically predisposed individuals (HLA-DQ2/DQ8), causing villous atrophy of the small intestine.',
    'Tissue transglutaminase (tTG) deamidates gliadin peptides, which are presented by HLA-DQ2/DQ8 to CD4+ T cells. This triggers an inflammatory cascade causing crypt hyperplasia and villous atrophy, impairing nutrient absorption.',
    ['Anti-tTG IgA', 'Anti-endomysial (EMA) IgA', 'Anti-deamidated gliadin peptide (DGP) IgG/IgA'],
    ['Chronic diarrhea and steatorrhea', 'Abdominal bloating and pain', 'Iron deficiency anemia (refractory)', 'Weight loss/failure to thrive', 'Dermatitis herpetiformis', 'Osteoporosis', 'Fatigue', 'Neurological symptoms (ataxia, neuropathy)', 'Infertility', 'Elevated transaminases'],
    ['Anti-tTG IgA (first-line screening)', 'Total IgA (exclude IgA deficiency)', 'Anti-EMA IgA (confirmatory)', 'Duodenal biopsy (villous atrophy, Marsh classification)', 'HLA-DQ2/DQ8 (high negative predictive value)', 'Response to gluten-free diet'],
    'Strict lifelong gluten-free diet (eliminate wheat, barley, rye). Nutritional supplementation (iron, calcium, vitamin D, B12, folate). Monitor adherence with anti-tTG levels. Refractory celiac: corticosteroids, azathioprine. Screen for associated conditions.',
    'Excellent with strict gluten-free diet. Mucosal healing in 6-24 months. Non-adherent patients: increased risk of T-cell lymphoma (EATL), osteoporosis, infertility. Refractory celiac disease type II has poor prognosis.',
  ),

  'crohn-disease': ai(
    'crohn-disease', 'Crohn Disease',
    'gastrointestinal', 'K50.9',
    'Chronic transmural granulomatous inflammatory bowel disease that can affect any segment from mouth to anus, most commonly the terminal ileum and colon.',
    'Dysregulated immune response to commensal gut flora in genetically susceptible individuals (NOD2/CARD15). Th1/Th17-driven transmural inflammation causes skip lesions, granulomas, and complications including strictures, fistulae, and abscesses.',
    ['ASCA (Anti-Saccharomyces cerevisiae, 60%)', 'pANCA (less common, helps distinguish from UC)'],
    ['Chronic diarrhea (often non-bloody)', 'Abdominal pain (RLQ, mimics appendicitis)', 'Weight loss and malnutrition', 'Perianal disease (fistulae, abscesses)', 'Strictures and bowel obstruction', 'Extraintestinal: arthritis, erythema nodosum, uveitis, PSC', 'Oral aphthous ulcers', 'Growth failure in children'],
    ['Ileocolonoscopy with biopsies (skip lesions, cobblestoning, granulomas)', 'CRP and ESR (inflammation)', 'Fecal calprotectin', 'MR enterography (small bowel disease, fistulae)', 'CT abdomen (complications)', 'Capsule endoscopy if needed'],
    'Step-up or top-down approach. 5-ASA (colonic disease only). Corticosteroids for induction (not maintenance). Immunomodulators (azathioprine, methotrexate). Biologics: anti-TNF (infliximab, adalimumab), anti-integrin (vedolizumab), anti-IL-12/23 (ustekinumab), anti-IL-23 (risankizumab). Surgery for complications (~70% lifetime).',
    'Chronic relapsing course. ~50% require surgery within 10 years. Biologic era has reduced surgical rates. Increased risk of colorectal cancer. Smoking worsens prognosis. Mortality modestly increased.',
  ),

  'ulcerative-colitis': ai(
    'ulcerative-colitis', 'Ulcerative Colitis',
    'gastrointestinal', 'K51.9',
    'Chronic inflammatory bowel disease causing continuous mucosal inflammation of the colon and rectum, always involving the rectum and extending proximally.',
    'Dysregulated Th2/Th17 immune response to gut microbiota in genetically predisposed individuals. Mucosal-limited inflammation (unlike transmural in Crohn). Epithelial barrier dysfunction and aberrant NKT cell activity.',
    ['pANCA (60-70%)', 'ASCA (less common)'],
    ['Bloody diarrhea with mucus', 'Urgency and tenesmus', 'Abdominal cramping (LLQ)', 'Toxic megacolon (emergency)', 'Extraintestinal: arthritis, pyoderma gangrenosum, PSC, uveitis', 'Iron deficiency anemia', 'Pancolitis increases colorectal cancer risk'],
    ['Colonoscopy with biopsies (continuous inflammation from rectum, loss of haustral folds, pseudopolyps)', 'CRP and ESR', 'Fecal calprotectin', 'Stool studies (exclude infection)', 'pANCA/ASCA to help distinguish from Crohn'],
    '5-ASA (mesalamine, first-line for mild-moderate). Corticosteroids for flares. Thiopurines (azathioprine). Biologics: anti-TNF, vedolizumab, ustekinumab, JAK inhibitors (tofacitinib, upadacitinib), anti-IL-23 (mirikizumab). Colectomy curative for refractory disease or dysplasia.',
    'Variable relapsing course. ~20% eventually require colectomy. Increased CRC risk after 8-10 years (surveillance colonoscopy). PSC is an independent CRC risk factor. Mortality similar to general population with modern therapy.',
  ),

  'autoimmune-hepatitis': ai(
    'autoimmune-hepatitis', 'Autoimmune Hepatitis',
    'gastrointestinal', 'K75.4',
    'Chronic immune-mediated liver inflammation causing progressive hepatocellular damage, fibrosis, and potentially cirrhosis if untreated.',
    'Loss of immune tolerance to hepatocyte antigens. CD4+ T cells activated by molecular mimicry or environmental triggers attack hepatocytes. Type 1 (anti-SMA/ANA) is more common; Type 2 (anti-LKM1) typically affects children.',
    ['ANA (type 1)', 'Anti-smooth muscle/anti-actin (SMA, type 1)', 'Anti-LKM1 (type 2)', 'Anti-SLA/LP (prognostic)', 'Elevated IgG'],
    ['Fatigue', 'Jaundice', 'Hepatomegaly', 'Elevated transaminases (often >10x ULN)', 'Acute hepatitis presentation (25%)', 'Cirrhosis at diagnosis (30%)', 'Amenorrhea', 'Arthralgia', 'Association with other autoimmune diseases'],
    ['Elevated transaminases and IgG', 'Autoantibodies (ANA, SMA, LKM1)', 'Liver biopsy (interface hepatitis, plasma cell infiltration)', 'Simplified or revised IAIHG scoring system', 'Exclude viral hepatitis, Wilson disease, drug-induced injury'],
    'Prednisone induction (40-60 mg, taper over weeks) with azathioprine as steroid-sparing agent. Maintenance: azathioprine or mycophenolate. Budesonide as alternative for non-cirrhotic patients. Liver transplant for decompensated cirrhosis or fulminant hepatitis.',
    '80% respond to immunosuppression. 10-year survival >90% with treatment (vs ~50% untreated). Relapse common upon treatment withdrawal (50-80%). Cirrhosis develops in 15-20% despite treatment.',
  ),

  'primary-biliary-cholangitis': ai(
    'primary-biliary-cholangitis', 'Primary Biliary Cholangitis',
    'gastrointestinal', 'K74.3',
    'Chronic autoimmune cholestatic liver disease targeting small intrahepatic bile ducts, predominantly affecting middle-aged women.',
    'Immune-mediated destruction of small intrahepatic bile duct epithelial cells. Anti-mitochondrial antibodies target the E2 subunit of pyruvate dehydrogenase complex on biliary epithelium. Granulomatous inflammation leads to ductopenia, cholestasis, and progressive fibrosis.',
    ['Anti-mitochondrial antibody (AMA, >95%)', 'ANA (sp100, gp210 - AMA-negative PBC)', 'Elevated IgM'],
    ['Fatigue (most debilitating symptom)', 'Pruritus', 'Jaundice (late)', 'Xanthomas and xanthelasma', 'Hepatomegaly', 'Osteoporosis', 'Hyperlipidemia', 'Sicca symptoms (associated Sjögren)', 'Portal hypertension (advanced)'],
    ['Elevated alkaline phosphatase (cholestatic pattern)', 'AMA positivity (≥1:40)', 'Elevated IgM', 'Liver biopsy (florid duct lesion, not always needed)', 'Diagnosis: 2 of 3 criteria (ALP elevation, AMA+, compatible biopsy)'],
    'Ursodeoxycholic acid (UDCA, 13-15 mg/kg/day, first-line). Obeticholic acid or bezafibrate for inadequate UDCA response. Pruritus: cholestyramine, rifampin, naltrexone. Liver transplant for end-stage disease (excellent outcomes, low recurrence).',
    'UDCA improves transplant-free survival. Paris criteria predict inadequate response. Non-responders to UDCA: higher risk of progression to cirrhosis. Liver transplant survival >85% at 5 years.',
  ),

  // ---- Neurologic (3) -----------------------------------------------------

  'multiple-sclerosis': ai(
    'multiple-sclerosis', 'Multiple Sclerosis',
    'neurologic', 'G35',
    'Chronic immune-mediated demyelinating disease of the central nervous system causing relapsing or progressive neurological dysfunction.',
    'Autoreactive T cells (Th1 and Th17) cross the blood-brain barrier and attack myelin and oligodendrocytes. B cells and antibodies contribute to inflammation and demyelination. Axonal damage accumulates, causing progressive disability. Environmental factors (low vitamin D, EBV, smoking) interact with genetic risk (HLA-DRB1*15:01).',
    ['Oligoclonal bands in CSF (>95%)', 'Anti-MOG (in MOG-associated disease)', 'Anti-AQP4 (rules out NMOSD)'],
    ['Optic neuritis (vision loss, pain with eye movement)', 'Sensory symptoms (numbness, tingling, Lhermitte sign)', 'Motor weakness', 'Cerebellar ataxia', 'Internuclear ophthalmoplegia', 'Bladder dysfunction', 'Fatigue (most common symptom)', 'Uhthoff phenomenon (heat sensitivity)', 'Cognitive impairment'],
    ['MRI brain and spine (periventricular, juxtacortical, infratentorial, and spinal cord lesions)', 'McDonald criteria (dissemination in space and time)', 'CSF (oligoclonal bands, elevated IgG index)', 'Evoked potentials (VEP)', 'OCT (retinal nerve fiber layer thinning)'],
    'Disease-modifying therapies: platform (interferons, glatiramer) for mild disease, high-efficacy (natalizumab, ocrelizumab, ofatumumab, cladribine, alemtuzumab) for active disease. Acute relapses: high-dose IV methylprednisolone. Symptomatic management: spasticity, pain, bladder, fatigue.',
    'Highly variable. RRMS: 50% convert to SPMS within 15-20 years without treatment. Modern DMTs significantly reduce relapse rates and disability accumulation. Early high-efficacy treatment improves long-term outcomes.',
  ),

  'myasthenia-gravis': ai(
    'myasthenia-gravis', 'Myasthenia Gravis',
    'neurologic', 'G70.0',
    'Autoimmune disorder of the neuromuscular junction causing fluctuating skeletal muscle weakness that worsens with activity and improves with rest.',
    'Autoantibodies target postsynaptic acetylcholine receptors (AChR) at the neuromuscular junction, causing complement-mediated destruction and receptor internalization. Thymus plays a pathogenic role (thymoma in 10-15%, thymic hyperplasia in 60%). MuSK antibodies define a distinct subtype.',
    ['Anti-AChR (85% of generalized MG)', 'Anti-MuSK (5-8%)', 'Anti-LRP4 (1-3%)', 'Striational antibodies (thymoma-associated)'],
    ['Ptosis and diplopia (ocular MG)', 'Fatigable proximal limb weakness', 'Bulbar weakness (dysarthria, dysphagia, nasal speech)', 'Facial weakness', 'Respiratory failure (myasthenic crisis)', 'Symptoms fluctuate: worse with activity, better with rest', 'Worsening in heat, infection, stress'],
    ['Anti-AChR and anti-MuSK antibodies', 'Edrophonium (Tensilon) test (historical)', 'Ice pack test', 'Repetitive nerve stimulation (decremental response)', 'Single-fiber EMG (most sensitive)', 'CT chest (thymoma screening)'],
    'Acetylcholinesterase inhibitors (pyridostigmine). Immunosuppression: corticosteroids, azathioprine, mycophenolate. Refractory: rituximab, eculizumab, efgartigimod (FcRn blocker), zilucoplan. Thymectomy for thymoma or non-thymomatous AChR+ MG. Myasthenic crisis: IVIG or plasmapheresis.',
    'Most patients achieve good control with modern therapy. Mortality from crisis <5% in specialized centers. Thymectomy improves outcomes. MuSK-MG responds well to rituximab. Remission possible in 10-20%.',
  ),

  'guillain-barre-syndrome': ai(
    'guillain-barre-syndrome', 'Guillain-Barré Syndrome',
    'neurologic', 'G61.0',
    'Acute immune-mediated polyradiculoneuropathy causing rapidly progressive ascending weakness, often preceded by infection.',
    'Molecular mimicry between microbial antigens (Campylobacter jejuni, CMV, EBV, Zika) and peripheral nerve gangliosides triggers cross-reactive immune attack. AIDP variant: macrophage-mediated segmental demyelination. AMAN variant: anti-ganglioside antibodies (GM1, GD1a) attack axonal membranes at nodes of Ranvier.',
    ['Anti-GM1 (AMAN)', 'Anti-GD1a (AMAN)', 'Anti-GQ1b (Miller Fisher variant)'],
    ['Ascending symmetric weakness (legs first)', 'Areflexia or hyporeflexia', 'Paresthesias (sensory symptoms usually mild)', 'Facial weakness (bilateral)', 'Respiratory failure (25-30%, may need ventilation)', 'Autonomic dysfunction (tachycardia, BP lability)', 'Back and limb pain', 'Miller Fisher: ophthalmoplegia, ataxia, areflexia'],
    ['Clinical diagnosis (Brighton criteria)', 'CSF: albuminocytologic dissociation (elevated protein, normal cells) - may be normal in first week', 'Nerve conduction studies (demyelination or axonal pattern)', 'Anti-ganglioside antibodies', 'MRI spine (nerve root enhancement)'],
    'IVIG (0.4 g/kg/day x5 days) or plasmapheresis (equally effective, do not combine). ICU monitoring for respiratory failure (serial FVC). DVT prophylaxis. Rehabilitation. Corticosteroids are NOT effective. Pain management.',
    '80% recover ability to walk independently within 6 months. 5-10% mortality (respiratory failure, autonomic instability). 20% have significant residual disability. Axonal variants recover more slowly. Recurrence rate ~3-5%.',
  ),

  // ---- Vasculitic (3) -----------------------------------------------------

  'granulomatosis-with-polyangiitis': ai(
    'granulomatosis-with-polyangiitis', 'Granulomatosis with Polyangiitis (GPA)',
    'vasculitic', 'M31.3',
    'ANCA-associated necrotizing granulomatous vasculitis affecting small and medium vessels, classically involving the upper/lower respiratory tract and kidneys.',
    'PR3-ANCA (c-ANCA) activates primed neutrophils, causing them to adhere to and damage small vessel endothelium. Granulomatous inflammation forms in the respiratory tract. T-cell and B-cell dysregulation contribute to disease perpetuation.',
    ['c-ANCA / PR3-ANCA (>90%)', 'p-ANCA / MPO-ANCA (10%)'],
    ['Sinusitis, nasal crusting, saddle nose deformity', 'Otitis media', 'Pulmonary nodules, cavitary lesions, alveolar hemorrhage', 'Rapidly progressive glomerulonephritis (pauci-immune crescentic)', 'Subglottic stenosis', 'Scleritis, orbital pseudotumor', 'Peripheral neuropathy (mononeuritis multiplex)', 'Constitutional symptoms'],
    ['c-ANCA/PR3-ANCA (highly specific)', 'Urinalysis (dysmorphic RBCs, RBC casts)', 'Creatinine (renal function)', 'CRP/ESR', 'CT chest (nodules, cavities)', 'CT sinuses', 'Tissue biopsy (granulomatous vasculitis)'],
    'Remission induction: rituximab or cyclophosphamide + corticosteroids. Avacopan (C5a receptor inhibitor) as glucocorticoid-sparing agent. Maintenance: rituximab (preferred) or azathioprine for 2+ years. Plasma exchange for severe renal disease or alveolar hemorrhage. Trimethoprim-sulfamethoxazole for limited upper airway disease.',
    '5-year survival >85% with modern therapy (formerly fatal within 1 year untreated). Relapse rate 50% within 5 years. PR3-ANCA associated with higher relapse risk. Renal damage may be irreversible. Treatment toxicity (infections, malignancy) remains a concern.',
  ),

  'microscopic-polyangiitis': ai(
    'microscopic-polyangiitis', 'Microscopic Polyangiitis (MPA)',
    'vasculitic', 'M31.7',
    'ANCA-associated necrotizing small-vessel vasculitis without granulomatous inflammation, predominantly affecting kidneys and lungs.',
    'MPO-ANCA activates neutrophils against small vessel endothelium. Non-granulomatous necrotizing vasculitis and pauci-immune glomerulonephritis result. NETs (neutrophil extracellular traps) contribute to vascular damage.',
    ['p-ANCA / MPO-ANCA (>90%)', 'c-ANCA / PR3-ANCA (10%)'],
    ['Rapidly progressive glomerulonephritis (most common presentation)', 'Pulmonary-renal syndrome', 'Diffuse alveolar hemorrhage', 'Peripheral neuropathy', 'Purpura', 'Constitutional symptoms (fever, weight loss, myalgia)', 'Interstitial lung disease (MPO-specific)'],
    ['p-ANCA/MPO-ANCA', 'Urinalysis and creatinine', 'CRP/ESR', 'CT chest', 'Renal biopsy (pauci-immune crescentic GN)', 'Lung biopsy if needed (capillaritis)'],
    'Same as GPA: rituximab or cyclophosphamide + corticosteroids for induction. Avacopan as glucocorticoid-sparing. Maintenance: rituximab or azathioprine. Plasma exchange for severe renal failure or alveolar hemorrhage.',
    'Similar to GPA but lower relapse rate. MPO-ANCA associated with more chronic renal damage. 5-year survival ~75%. ESRD develops in 25%. ILD is increasingly recognized as a chronic manifestation.',
  ),

  'eosinophilic-granulomatosis-with-polyangiitis': ai(
    'eosinophilic-granulomatosis-with-polyangiitis', 'Eosinophilic Granulomatosis with Polyangiitis (EGPA)',
    'vasculitic', 'M30.1',
    'ANCA-associated eosinophilic granulomatous vasculitis occurring in patients with asthma and eosinophilia, affecting small and medium vessels.',
    'Eosinophil-driven inflammation and granulomatous vasculitis. Two phenotypes: ANCA-positive (MPO, vasculitic features) and ANCA-negative (eosinophilic tissue infiltration, cardiac involvement). IL-5 drives eosinophil activation. Asthma and eosinophilia precede vasculitis by years.',
    ['p-ANCA / MPO-ANCA (40%)', 'Elevated IgE'],
    ['Late-onset/refractory asthma (prodromal phase)', 'Blood eosinophilia (often >10%)', 'Eosinophilic pneumonia (migratory infiltrates)', 'Cardiomyopathy (leading cause of death)', 'Mononeuritis multiplex', 'Sinusitis and nasal polyposis', 'Purpura', 'GI involvement'],
    ['Blood eosinophilia (>10% or >1500/μL)', 'MPO-ANCA (positive in 40%)', 'Tissue biopsy (eosinophilic granulomatous inflammation)', 'Echocardiogram and cardiac MRI (cardiac involvement)', 'Nerve conduction studies', 'ACR/EULAR classification criteria'],
    'Corticosteroids (first-line, many respond). Mepolizumab (anti-IL-5, FDA-approved for EGPA). Cyclophosphamide for severe organ-threatening disease. Azathioprine or mepolizumab for maintenance. Rituximab for ANCA-positive refractory disease.',
    '5-year survival ~90%. Cardiac involvement is the leading cause of mortality (ANCA-negative phenotype). Five-factor score (FFS) guides prognosis and treatment intensity. Mepolizumab has transformed management.',
  ),

  // ---- Organ-Specific (3) -------------------------------------------------

  'iga-nephropathy': ai(
    'iga-nephropathy', 'IgA Nephropathy (Berger Disease)',
    'organ-specific', 'N02.8',
    'Most common primary glomerulonephritis worldwide, caused by mesangial deposition of galactose-deficient IgA1 immune complexes.',
    'Four-hit hypothesis: (1) increased circulating galactose-deficient IgA1 (Gd-IgA1), (2) anti-Gd-IgA1 autoantibodies, (3) immune complex formation, (4) mesangial deposition causing complement activation, mesangial proliferation, and glomerular injury.',
    ['Galactose-deficient IgA1', 'Anti-Gd-IgA1 antibodies (glycan-specific)', 'Serum IgA elevated (50%)'],
    ['Episodic gross hematuria (synpharyngitic, within 1-2 days of URI)', 'Persistent microscopic hematuria', 'Proteinuria (variable)', 'Hypertension', 'Nephrotic syndrome (uncommon)', 'Slowly progressive CKD', 'Henoch-Schönlein purpura (systemic form)'],
    ['Renal biopsy (gold standard): mesangial IgA deposits on immunofluorescence', 'MEST-C (Oxford) classification on histology', 'Urinalysis (hematuria, proteinuria)', 'Serum IgA (elevated in 50%)', 'eGFR', 'International IgAN Prediction Tool for risk stratification'],
    'Optimized supportive care: RAS blockade (ACEi/ARB), BP control (<130/80), dietary sodium restriction. Corticosteroids if proteinuria >1g/day despite 3 months of supportive care (TESTING study). Sparsentan (dual endothelin/angiotensin receptor antagonist). SGLT2 inhibitors (renoprotective). Budesonide (targeted-release, Nefecon) for high-risk patients. Fish oil (uncertain benefit).',
    '20-40% progress to ESRD over 20-30 years. Risk factors for progression: proteinuria >1g/day, hypertension, reduced eGFR, MEST-C score. Recurs in renal transplants (~50%) but graft loss from recurrence is lower.',
  ),

  'goodpasture-syndrome': ai(
    'goodpasture-syndrome', 'Goodpasture Syndrome (Anti-GBM Disease)',
    'organ-specific', 'M31.0',
    'Rapidly progressive autoimmune disease caused by antibodies against the alpha-3 chain of type IV collagen in glomerular and alveolar basement membranes.',
    'Anti-GBM antibodies bind the NC1 domain of the alpha-3 chain of type IV collagen. Linear IgG deposition on glomerular and alveolar basement membranes causes complement activation, neutrophil recruitment, and necrotizing/crescentic glomerulonephritis. Pulmonary hemorrhage occurs when alveolar capillary permeability is increased (smoking, infection).',
    ['Anti-GBM antibodies (anti-alpha-3 type IV collagen)', 'ANCA (30% dual-positive with MPO or PR3)'],
    ['Rapidly progressive glomerulonephritis (oliguria, hematuria)', 'Pulmonary hemorrhage (hemoptysis, dyspnea)', 'Pulmonary-renal syndrome', 'Anemia (from hemorrhage)', 'Glomerular crescents on biopsy'],
    ['Anti-GBM antibodies (serum, high specificity)', 'Renal biopsy: linear IgG on IF, crescentic GN', 'ANCA (check for dual positivity)', 'CT chest if pulmonary involvement', 'CRP, BUN/creatinine', 'Urgent workup required'],
    'Medical emergency. Plasmapheresis (daily for 14 days to remove anti-GBM antibodies). Cyclophosphamide + corticosteroids. Rituximab in refractory cases. Avoid plasma exchange cessation until antibodies negative. Dialysis-dependent patients with no pulmonary hemorrhage may not benefit from immunosuppression.',
    'Prognosis depends on renal function at presentation. Dialysis-dependent at diagnosis: <10% recover renal function. Creatinine <5.7 mg/dL at presentation: better outcomes. Pulmonary hemorrhage responds well to treatment. Recurrence is rare (<5%). Dual ANCA/anti-GBM positivity may predict relapsing course.',
  ),

  'autoimmune-hemolytic-anemia': ai(
    'autoimmune-hemolytic-anemia', 'Autoimmune Hemolytic Anemia',
    'organ-specific', 'D59.1',
    'Acquired hemolytic anemia caused by autoantibodies directed against red blood cell surface antigens.',
    'Warm AIHA (70%): IgG antibodies bind RBCs at 37°C, causing Fc-receptor mediated splenic sequestration. Cold AIHA (20%): IgM antibodies fix complement at low temperatures, causing intravascular hemolysis. Mixed type: both mechanisms.',
    ['Direct antiglobulin test (DAT/Coombs) positive', 'Warm: IgG on DAT', 'Cold: complement (C3d) on DAT', 'Cold agglutinins (IgM)'],
    ['Fatigue and pallor', 'Jaundice (indirect hyperbilirubinemia)', 'Splenomegaly', 'Dark urine (hemoglobinuria in intravascular hemolysis)', 'Cold-triggered acrocyanosis (cold AIHA)', 'Rapid-onset severe anemia', 'Associated with lymphoproliferative disorders, SLE, infections'],
    ['CBC (anemia, reticulocytosis)', 'DAT (positive, specifies IgG vs C3d)', 'Peripheral smear (spherocytes, polychromasia)', 'Indirect bilirubin and LDH (elevated)', 'Haptoglobin (decreased)', 'Reticulocyte count (elevated)', 'Exclude secondary causes (lymphoma, SLE, drugs)'],
    'Warm AIHA: corticosteroids (first-line), rituximab (second-line), splenectomy. Refractory: mycophenolate, azathioprine, danazol. Cold AIHA: avoid cold exposure, rituximab + bendamustine; sutimlimab (anti-C1s complement inhibitor). Transfuse for life-threatening anemia (least incompatible blood).',
    'Warm AIHA: initial response to steroids in 80%, but relapse common. Cold agglutinin disease: chronic course. Sutimlimab has improved cold AIHA outcomes. Secondary AIHA prognosis depends on underlying cause.',
  ),

  // ---- Dermatologic (4) ---------------------------------------------------

  'psoriasis': ai(
    'psoriasis', 'Psoriasis',
    'dermatologic', 'L40.9',
    'Chronic immune-mediated inflammatory skin disease characterized by well-demarcated erythematous plaques with silvery scale, driven by the IL-23/IL-17 axis.',
    'Dendritic cell activation leads to IL-23 production, which drives Th17 cell differentiation and IL-17A secretion. IL-17A acts on keratinocytes, causing hyperproliferation (epidermal turnover 3-5 days vs normal 28 days), abnormal differentiation, and neutrophilic inflammation. Strong genetic component (HLA-Cw6).',
    ['HLA-Cw6 (genetic marker, not autoantibody)', 'No classic autoantibodies; diagnosis is clinical'],
    ['Well-demarcated erythematous plaques with silvery scale', 'Predilection: elbows, knees, scalp, gluteal cleft', 'Auspitz sign (pinpoint bleeding on scale removal)', 'Koebner phenomenon', 'Nail pitting and onycholysis', 'Inverse psoriasis (flexural)', 'Guttate psoriasis (post-streptococcal)', 'Erythrodermic and pustular variants (severe)', 'Metabolic syndrome association'],
    ['Clinical diagnosis based on morphology and distribution', 'Skin biopsy if atypical (Munro microabscesses, parakeratosis, acanthosis)', 'PASI score for severity', 'Screen for psoriatic arthritis, metabolic syndrome, depression', 'Strep throat culture in guttate variant'],
    'Mild: topical corticosteroids, vitamin D analogs, calcineurin inhibitors. Moderate-severe: phototherapy (NB-UVB), methotrexate, cyclosporine, apremilast. Biologics (moderate-severe/refractory): anti-TNF, anti-IL-17 (secukinumab, ixekizumab), anti-IL-23 (guselkumab, risankizumab), anti-IL-12/23 (ustekinumab). TYK2 inhibitor (deucravacitinib).',
    'Chronic relapsing course. Biologic era has achieved PASI 90-100 (near-clear/clear skin) in >50-70%. Associated cardiovascular risk requires screening. Significant psychosocial impact. No cure but excellent control achievable.',
  ),

  'psoriatic-arthritis': ai(
    'psoriatic-arthritis', 'Psoriatic Arthritis',
    'dermatologic', 'L40.50',
    'Inflammatory arthritis associated with psoriasis, with heterogeneous joint involvement patterns and potential for destructive arthropathy.',
    'Shared IL-23/IL-17 axis with psoriasis but additional entheseal inflammation. Mechanical stress at entheses may trigger innate immune activation. TNF, IL-17, and IL-23 drive synovitis, enthesitis, and new bone formation. Distinct from RA: entheseal-based rather than synovial-primary.',
    ['RF negative (seronegative spondyloarthropathy)', 'HLA-B27 (axial disease, 40-50%)'],
    ['Asymmetric oligoarthritis (most common)', 'Distal interphalangeal joint involvement', 'Dactylitis (sausage digits)', 'Enthesitis (Achilles, plantar fascia)', 'Axial disease (spondylitis, sacroiliitis)', 'Nail disease (pitting, onycholysis)', 'Psoriatic skin lesions (may precede, follow, or accompany)', 'Arthritis mutilans (severe, destructive)'],
    ['Clinical: CASPAR criteria', 'RF (negative), anti-CCP (usually negative)', 'HLA-B27 (axial disease)', 'Radiographs (pencil-in-cup, periostitis, ankylosis)', 'MRI/ultrasound (enthesitis, synovitis)', 'CRP/ESR (may be normal)'],
    'NSAIDs for mild disease. DMARDs: methotrexate (skin and peripheral joints), sulfasalazine, leflunomide. Biologics: anti-TNF, anti-IL-17, anti-IL-23, anti-IL-12/23. JAK inhibitors (tofacitinib, upadacitinib). Apremilast (PDE4 inhibitor). Treat-to-target approach: minimal disease activity.',
    'Variable. 20% develop severe destructive disease. Early treatment prevents joint damage. Biologic therapies have transformed outcomes. Axial disease less responsive to conventional DMARDs. Cardiovascular risk increased.',
  ),

  'pemphigus-vulgaris': ai(
    'pemphigus-vulgaris', 'Pemphigus Vulgaris',
    'dermatologic', 'L10.0',
    'Life-threatening autoimmune blistering disease caused by antibodies against desmosomal proteins, resulting in loss of epidermal cell adhesion (acantholysis).',
    'IgG autoantibodies target desmoglein 3 (mucosal) and desmoglein 1 (mucocutaneous). Antibody binding disrupts desmosomal adhesion between keratinocytes, causing intraepidermal acantholysis and flaccid blistering. The desmoglein compensation theory explains the distribution pattern.',
    ['Anti-desmoglein 3 (mucosal disease)', 'Anti-desmoglein 1 (cutaneous disease)', 'Intercellular IgG and C3 on DIF'],
    ['Painful oral erosions (often first symptom)', 'Flaccid blisters that rupture easily', 'Nikolsky sign positive', 'Non-healing erosions on skin', 'Asboe-Hansen sign', 'Scalp, trunk, and intertriginous involvement', 'Weight loss from oral pain', 'Secondary infections'],
    ['Skin biopsy: intraepidermal acantholysis (suprabasal)', 'Direct immunofluorescence (DIF): intercellular IgG and C3 ("fish net" pattern)', 'Indirect immunofluorescence or ELISA for anti-Dsg1 and Dsg3', 'Anti-desmoglein antibody titers correlate with disease activity'],
    'Rituximab (now considered first-line by many experts). Corticosteroids (prednisone 1 mg/kg/day). Steroid-sparing: mycophenolate, azathioprine. Refractory: IVIG, cyclophosphamide, or plasmapheresis. Wound care and infection prevention essential.',
    'Formerly fatal (mortality >75% before corticosteroids). Current mortality ~5% with modern immunosuppression. Rituximab has transformed outcomes with higher complete remission rates. Anti-desmoglein titers guide treatment adjustments.',
  ),

  'vitiligo': ai(
    'vitiligo', 'Vitiligo',
    'dermatologic', 'L80',
    'Acquired autoimmune depigmentation disorder caused by destruction of melanocytes, affecting 0.5-2% of the population worldwide.',
    'CD8+ T-cell mediated destruction of melanocytes. Oxidative stress damages melanocytes, releasing autoantigens that activate autoimmune response through IFN-γ/CXCL10 axis. Genetic susceptibility (NLRP1, PTPN22) overlaps with other autoimmune diseases.',
    ['Anti-melanocyte antibodies (research use)', 'No routine diagnostic autoantibodies'],
    ['Well-demarcated depigmented macules and patches', 'Predilection: face, hands, genitals, body folds', 'Koebner phenomenon', 'Leukotrichia (white hair in affected areas)', 'Trichrome and confetti patterns', 'Segmental (dermatomal) vs non-segmental (generalized)', 'Associated autoimmune diseases (thyroid, T1DM, pernicious anemia)', 'Significant psychosocial impact'],
    ['Clinical diagnosis (Wood lamp examination enhances visualization)', 'Skin biopsy rarely needed (absence of melanocytes)', 'Screen for associated autoimmune diseases: TSH, CBC, glucose, vitamin B12', 'Anti-TPO antibodies'],
    'Topical: corticosteroids, calcineurin inhibitors (tacrolimus, pimecrolimus). Phototherapy: NB-UVB (most effective non-surgical). Ruxolitinib cream (JAK inhibitor, FDA-approved). Systemic: oral mini-pulse corticosteroids for progressive disease. Surgical: melanocyte transplantation for stable segmental vitiligo. Cosmetic camouflage.',
    'Chronic course with unpredictable progression. Facial and acral vitiligo responds best to treatment. NB-UVB and JAK inhibitors achieve repigmentation in many. Segmental vitiligo stabilizes early and responds well to surgery. No impact on life expectancy but significant quality-of-life burden.',
  ),

  'alopecia-areata': ai(
    'alopecia-areata', 'Alopecia Areata',
    'dermatologic', 'L63.9',
    'Autoimmune hair loss disorder caused by T-cell mediated attack on the hair follicle, resulting in non-scarring alopecia.',
    'Loss of immune privilege of the hair follicle. CD8+ NKG2D+ T cells infiltrate the hair bulb, disrupting the growth cycle and pushing follicles into catagen/telogen. IFN-γ and IL-15 signaling through JAK-STAT pathway are central to pathogenesis.',
    ['No routine diagnostic autoantibodies', 'Associated: anti-TPO, anti-parietal cell, anti-21-hydroxylase'],
    ['Smooth, round patches of non-scarring hair loss', 'Exclamation point hairs at margins', 'Nail pitting and trachyonychia', 'Alopecia totalis (entire scalp)', 'Alopecia universalis (entire body)', 'Ophiasis pattern (band-like occipital)', 'Associated atopic diseases and autoimmune thyroiditis'],
    ['Clinical diagnosis (patch pattern, exclamation point hairs)', 'Dermoscopy (yellow dots, black dots, broken hairs)', 'Pull test', 'Scalp biopsy if uncertain (peribulbar lymphocytic infiltrate, "swarm of bees")', 'Screen: TSH, CBC, vitamin D, ferritin'],
    'Mild/patchy: topical corticosteroids, intralesional triamcinolone, topical minoxidil. Moderate-severe: JAK inhibitors (baricitinib oral - FDA-approved, ritlecitinib - FDA-approved), contact immunotherapy (DPCP). Systemic corticosteroids for rapid progression (short course). Experimental: IL-13 inhibitors.',
    'Highly variable. Spontaneous regrowth in ~50% with limited patches within 1 year. Extensive disease (totalis/universalis) has poorer spontaneous remission (<10%). JAK inhibitors have transformed severe AA management. Relapse common upon treatment discontinuation.',
  ),

  // ---- Additional entries to reach 30+ ------------------------------------

  'ankylosing-spondylitis': ai(
    'ankylosing-spondylitis', 'Ankylosing Spondylitis',
    'connective-tissue', 'M45.9',
    'Chronic inflammatory spondyloarthropathy primarily affecting the axial skeleton, causing progressive spinal fusion and sacroiliac joint ankylosis.',
    'IL-23/IL-17 axis drives inflammation at entheses and bone. HLA-B27 misfolding triggers endoplasmic reticulum stress and IL-23 production. New bone formation (syndesmophytes) occurs paradoxically alongside bone erosion. Gut-joint axis: subclinical intestinal inflammation in 60%.',
    ['HLA-B27 (present in >90%)', 'No specific autoantibodies'],
    ['Inflammatory low back pain (improves with exercise, worse at rest)', 'Morning stiffness >30 minutes', 'Sacroiliitis (bilateral)', 'Limited spinal mobility (Schober test)', 'Enthesitis (Achilles, plantar)', 'Anterior uveitis', 'Aortic root inflammation', 'Apical pulmonary fibrosis', 'Cauda equina syndrome (rare)'],
    ['Modified New York criteria or ASAS criteria', 'MRI sacroiliac joints (bone marrow edema - early disease)', 'Radiographs (sacroiliitis grading, bamboo spine - late)', 'HLA-B27', 'CRP/ESR', 'BASDAI and BASFI scores'],
    'NSAIDs (continuous first-line). Biologics if inadequate response: anti-TNF (adalimumab, etanercept, infliximab), anti-IL-17 (secukinumab, ixekizumab), JAK inhibitors (tofacitinib, upadacitinib). Physical therapy and exercise essential. No role for methotrexate in axial disease. Surgery for severe kyphosis.',
    'Variable progression. Many maintain function with modern therapy. Biologics prevent radiographic progression in some. Spinal fracture risk elevated (osteoporosis + rigidity). Cardiovascular risk increased. Functional outcomes dramatically improved in biologic era.',
  ),

  'pernicious-anemia': ai(
    'pernicious-anemia', 'Pernicious Anemia',
    'organ-specific', 'D51.0',
    'Autoimmune destruction of gastric parietal cells causing intrinsic factor deficiency and vitamin B12 malabsorption.',
    'Anti-parietal cell antibodies and anti-intrinsic factor antibodies cause chronic autoimmune gastritis. Parietal cell destruction leads to achlorhydria and loss of intrinsic factor, essential for B12 absorption in the terminal ileum. B12 deficiency impairs DNA synthesis in rapidly dividing cells.',
    ['Anti-intrinsic factor (highly specific, 50-70%)', 'Anti-parietal cell (sensitive, 80-90%, less specific)'],
    ['Megaloblastic anemia (fatigue, pallor)', 'Glossitis (beefy red tongue)', 'Peripheral neuropathy (paresthesias)', 'Subacute combined degeneration of spinal cord', 'Cognitive impairment and dementia', 'Depression', 'Pancytopenia', 'Hypersegmented neutrophils', 'Increased gastric cancer risk'],
    ['CBC (macrocytic anemia, hypersegmented neutrophils)', 'Serum B12 (low)', 'Methylmalonic acid and homocysteine (elevated)', 'Anti-intrinsic factor antibodies', 'Anti-parietal cell antibodies', 'Reticulocyte count (low)', 'Gastric biopsy (chronic atrophic gastritis)'],
    'Intramuscular B12 (hydroxocobalamin or cyanocobalamin): 1000 mcg daily x1 week, weekly x4 weeks, then monthly lifelong. High-dose oral B12 (1000-2000 mcg/day) may be effective alternative. Monitor for hypokalemia during initial treatment. Screen for gastric cancer and carcinoid periodically.',
    'Excellent with B12 replacement. Neurological damage may be irreversible if treatment delayed. Hematologic response within days. Increased risk of gastric adenocarcinoma and carcinoid tumors requiring endoscopic surveillance.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single autoimmune condition by ID. */
export function getAutoimmuneCondition(id: string): AutoimmuneConditionEntry | undefined {
  return AUTOIMMUNE_CONDITION_ENTRIES[id];
}

/** Search autoimmune conditions by name, category, or any text field (case-insensitive). */
export function searchAutoimmuneConditions(query: string): AutoimmuneConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(AUTOIMMUNE_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathogenesis.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q),
  );
}

/** Filter autoimmune conditions by category. */
export function getAutoimmuneByCategory(category: AutoimmuneConditionCategory): AutoimmuneConditionEntry[] {
  return Object.values(AUTOIMMUNE_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Return the total number of autoimmune conditions in the database. */
export function getAutoimmuneConditionCount(): number {
  return Object.keys(AUTOIMMUNE_CONDITION_ENTRIES).length;
}

/** Get all conditions with a specific autoantibody (case-insensitive). */
export function getAutoimmuneByAutoantibody(antibody: string): AutoimmuneConditionEntry[] {
  const ab = antibody.toLowerCase();
  return Object.values(AUTOIMMUNE_CONDITION_ENTRIES).filter(c =>
    c.autoantibodies.some(a => a.toLowerCase().includes(ab)),
  );
}

/** Get all conditions matching a clinical feature (case-insensitive). */
export function getAutoimmuneByFeature(feature: string): AutoimmuneConditionEntry[] {
  const f = feature.toLowerCase();
  return Object.values(AUTOIMMUNE_CONDITION_ENTRIES).filter(c =>
    c.clinicalFeatures.some(cf => cf.toLowerCase().includes(f)),
  );
}
