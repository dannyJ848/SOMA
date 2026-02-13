/**
 * Biological Self — Rheumatology Specialty Database
 * 35+ entries covering autoimmune/connective tissue diseases,
 * inflammatory arthritis, crystal arthropathies, vasculitis,
 * spondyloarthropathies, soft-tissue disorders, and metabolic bone disease.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RheumatologyCategory =
  | 'autoimmune-connective'
  | 'inflammatory-arthritis'
  | 'crystal-arthropathy'
  | 'vasculitis'
  | 'spondyloarthropathy'
  | 'soft-tissue'
  | 'metabolic-bone';

export interface RheumatologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: RheumatologyCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const rhe = (
  id: string, name: string, nameEs: string, category: RheumatologyCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  complications: string[], patientExplanation: string,
): RheumatologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, complications, patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const RHEUMATOLOGY_ENTRIES: Record<string, RheumatologyEntry> = {

  // ===== AUTOIMMUNE / CONNECTIVE TISSUE (8) =================================

  'systemic-lupus-erythematosus': rhe(
    'systemic-lupus-erythematosus',
    'Systemic Lupus Erythematosus (SLE)',
    'Lupus eritematoso sistémico (LES)',
    'autoimmune-connective', '4A40',
    'Chronic multisystem autoimmune disease with relapsing-remitting course, predominantly affecting women of childbearing age.',
    'Loss of self-tolerance leads to autoantibodies (anti-dsDNA, anti-Smith) and immune complex deposition in skin, kidneys, joints, and serosal surfaces. Complement activation drives tissue damage. Genetic (HLA-DR2/DR3), hormonal, and environmental (UV light) factors contribute.',
    ['Malar (butterfly) rash', 'Photosensitivity', 'Oral ulcers', 'Non-erosive polyarthritis', 'Serositis (pleuritis, pericarditis)', 'Nephritis (proteinuria, hematuria)', 'Cytopenias', 'Fatigue and fever'],
    ['ANA (>95% sensitive)', 'Anti-dsDNA (specific, correlates with nephritis)', 'Anti-Smith (highly specific)', 'Complement C3/C4 (low in flares)', 'CBC, CMP, urinalysis with microscopy', 'Renal biopsy if nephritis suspected'],
    ['Hydroxychloroquine for all patients', 'NSAIDs for mild arthritis/serositis', 'Corticosteroids for flares', 'Mycophenolate or cyclophosphamide for nephritis', 'Belimumab or anifrolumab for refractory disease', 'Sun protection and avoidance of UV'],
    ['Lupus nephritis (class III-V)', 'Accelerated atherosclerosis', 'Antiphospholipid syndrome overlap', 'Avascular necrosis', 'Infections from immunosuppression', 'Pregnancy complications (preeclampsia, flares)'],
    'Lupus is a condition where your immune system mistakenly attacks your own tissues. Hydroxychloroquine is the cornerstone treatment; take it daily, protect yourself from the sun, and keep regular follow-up to monitor kidney function.',
  ),

  'rheumatoid-arthritis': rhe(
    'rheumatoid-arthritis',
    'Rheumatoid Arthritis',
    'Artritis reumatoide',
    'autoimmune-connective', 'FA20',
    'Chronic inflammatory polyarthritis causing symmetric joint destruction, primarily affecting small joints of the hands and feet.',
    'Autoimmune synovitis driven by CD4+ T cells, macrophages, and cytokines (TNF-α, IL-6). Pannus formation erodes cartilage and bone. Anti-CCP antibodies and RF are produced by B cells in the synovium. Citrullination of proteins triggers loss of tolerance.',
    ['Symmetric polyarthritis (MCPs, PIPs, wrists)', 'Morning stiffness >1 hour', 'Swan-neck and boutonnière deformities (late)', 'Ulnar deviation', 'Rheumatoid nodules', 'Fatigue and malaise'],
    ['RF (sensitive ~80%, not specific)', 'Anti-CCP (specific ~95%)', 'ESR and CRP (disease activity)', 'X-ray hands/feet (erosions, periarticular osteopenia)', 'Musculoskeletal ultrasound or MRI for early synovitis', 'CBC, CMP, hepatitis panel before DMARD initiation'],
    ['Methotrexate first-line DMARD', 'Short-course prednisone for bridge therapy', 'TNF inhibitors if inadequate response (adalimumab, etanercept)', 'Abatacept, tocilizumab, or JAK inhibitors (tofacitinib) for refractory', 'Physical/occupational therapy', 'Treat-to-target strategy (remission or low disease activity)'],
    ['Joint destruction and disability', 'Atlantoaxial subluxation', 'Interstitial lung disease', 'Cardiovascular disease (accelerated)', 'Felty syndrome (splenomegaly, neutropenia)', 'Secondary amyloidosis'],
    'Rheumatoid arthritis causes your immune system to attack the lining of your joints. Starting treatment early with methotrexate is key to preventing joint damage. Report any new symptoms promptly so therapy can be adjusted.',
  ),

  'sjogren-syndrome': rhe(
    'sjogren-syndrome',
    'Sjögren Syndrome',
    'Síndrome de Sjögren',
    'autoimmune-connective', '4A41',
    'Chronic autoimmune disorder targeting exocrine glands, causing sicca symptoms; may be primary or secondary to other autoimmune diseases.',
    'Lymphocytic infiltration (CD4+ T cells and B cells) of lacrimal and salivary glands leads to glandular destruction. Anti-Ro (SSA) and anti-La (SSB) antibodies are characteristic. B-cell hyperactivity may progress to lymphoma.',
    ['Dry eyes (keratoconjunctivitis sicca)', 'Dry mouth (xerostomia)', 'Parotid gland enlargement', 'Arthralgia', 'Fatigue', 'Vaginal dryness', 'Dental caries (accelerated)'],
    ['Anti-Ro/SSA and anti-La/SSB antibodies', 'ANA positive (~80%)', 'RF positive (~60%)', 'Schirmer test (<5 mm wetting in 5 min)', 'Minor salivary gland biopsy (focus score ≥1)', 'Ocular staining score'],
    ['Artificial tears and saliva substitutes', 'Pilocarpine or cevimeline (secretagogues)', 'Hydroxychloroquine for arthralgia/fatigue', 'Rituximab for severe extraglandular manifestations', 'Dental care and fluoride trays', 'Monitoring for lymphoma development'],
    ['Non-Hodgkin lymphoma (MALT type, 5-10% risk)', 'Renal tubular acidosis', 'Peripheral neuropathy', 'Interstitial lung disease', 'Vasculitis'],
    'Sjögren syndrome causes dryness of the eyes and mouth because your immune system attacks moisture-producing glands. Use artificial tears frequently, stay hydrated, and maintain excellent dental hygiene to prevent cavities.',
  ),

  'scleroderma-limited': rhe(
    'scleroderma-limited',
    'Limited Cutaneous Systemic Sclerosis (CREST)',
    'Esclerosis sistémica cutánea limitada (CREST)',
    'autoimmune-connective', '4A61',
    'Subtype of systemic sclerosis with skin fibrosis limited to distal extremities and face, associated with CREST features.',
    'Vasculopathy, immune activation, and fibroblast dysfunction lead to collagen overproduction. Anti-centromere antibodies are characteristic. Endothelial injury causes Raynaud phenomenon and intimal fibrosis of small vessels.',
    ['Calcinosis cutis', 'Raynaud phenomenon', 'Esophageal dysmotility', 'Sclerodactyly', 'Telangiectasias', 'Skin thickening distal to elbows/knees'],
    ['Anti-centromere antibody (70-80%)', 'ANA (nucleolar or centromere pattern)', 'Nailfold capillaroscopy (dilated capillaries)', 'PFTs with DLCO (screen for PAH)', 'Echocardiogram for pulmonary hypertension', 'Barium swallow or esophageal manometry'],
    ['Calcium channel blockers for Raynaud (nifedipine)', 'PDE-5 inhibitors (sildenafil) for severe Raynaud/digital ulcers', 'PPI for esophageal reflux', 'Pulmonary vasodilators for PAH (bosentan, ambrisentan)', 'Hand therapy and skin care', 'Annual echocardiogram and PFT screening'],
    ['Pulmonary arterial hypertension (leading cause of death)', 'Digital ulcers and gangrene', 'Esophageal strictures', 'Primary biliary cholangitis overlap', 'Calcinosis-related infections'],
    'Limited scleroderma (CREST) mainly affects the skin of your hands and face. Keeping your hands warm and using medications for Raynaud can help. Regular heart and lung screening is important because pulmonary hypertension can develop over time.',
  ),

  'scleroderma-diffuse': rhe(
    'scleroderma-diffuse',
    'Diffuse Cutaneous Systemic Sclerosis',
    'Esclerosis sistémica cutánea difusa',
    'autoimmune-connective', '4A60',
    'Aggressive subtype of systemic sclerosis with widespread skin fibrosis and early visceral organ involvement.',
    'Widespread fibroblast activation and collagen deposition affecting skin and internal organs. Anti-Scl-70 (anti-topoisomerase I) is the hallmark antibody. Endothelial damage, perivascular inflammation, and TGF-β–driven fibrosis are central.',
    ['Rapid widespread skin thickening (trunk, proximal extremities)', 'Raynaud phenomenon', 'Tendon friction rubs', 'Pulmonary fibrosis (ILD)', 'Renal crisis (hypertension, AKI)', 'GI dysmotility', 'Cardiac involvement (myocardial fibrosis)'],
    ['Anti-Scl-70/anti-topoisomerase I (~40%)', 'Anti-RNA polymerase III (renal crisis risk)', 'ANA positive', 'HRCT chest (ground-glass, fibrosis)', 'PFTs with DLCO', 'Modified Rodnan skin score', 'Echocardiogram and renal function monitoring'],
    ['Mycophenolate or cyclophosphamide for ILD', 'ACE inhibitors for scleroderma renal crisis (captopril)', 'Nintedanib for progressive pulmonary fibrosis', 'PPI for GI reflux', 'Physical therapy to maintain mobility', 'Autologous stem cell transplant for severe refractory disease'],
    ['Scleroderma renal crisis', 'Progressive pulmonary fibrosis', 'Pulmonary arterial hypertension', 'Cardiac arrhythmias and heart failure', 'Malabsorption and GI pseudo-obstruction'],
    'Diffuse scleroderma causes widespread skin tightening and can affect your lungs, kidneys, and heart. Monitoring blood pressure is critical. Report any sudden increases in blood pressure or shortness of breath immediately.',
  ),

  'polymyositis': rhe(
    'polymyositis',
    'Polymyositis',
    'Polimiositis',
    'autoimmune-connective', '4A41.0',
    'Idiopathic inflammatory myopathy causing symmetric proximal muscle weakness.',
    'CD8+ T-cell–mediated attack on muscle fibers leads to endomysial inflammation and necrosis. Anti-Jo-1 (anti-synthetase) antibodies are associated with antisynthetase syndrome. MHC class I upregulation on myocytes is a key feature.',
    ['Symmetric proximal muscle weakness (difficulty rising from chair, climbing stairs)', 'Dysphagia (pharyngeal muscle involvement)', 'No skin rash (distinguishes from dermatomyositis)', 'Myalgia', 'Interstitial lung disease (antisynthetase syndrome)'],
    ['CK markedly elevated (5-50x normal)', 'Aldolase elevated', 'Anti-Jo-1 and other myositis-specific antibodies', 'EMG (myopathic pattern)', 'MRI of thighs (muscle edema)', 'Muscle biopsy (endomysial CD8+ infiltrate)'],
    ['High-dose prednisone (1 mg/kg) with taper', 'Methotrexate or azathioprine as steroid-sparing', 'IVIG for refractory disease', 'Rituximab for anti-synthetase syndrome', 'Physical therapy to maintain strength', 'Cancer screening (increased malignancy risk)'],
    ['Interstitial lung disease', 'Dysphagia and aspiration pneumonia', 'Cardiac involvement (myocarditis)', 'Associated malignancy', 'Steroid myopathy (treatment complication)'],
    'Polymyositis causes weakness in your large muscles. Treatment with steroids and other immune-suppressing medications can restore strength. Physical therapy is essential, and cancer screening is recommended because the conditions can be linked.',
  ),

  'dermatomyositis': rhe(
    'dermatomyositis',
    'Dermatomyositis',
    'Dermatomiositis',
    'autoimmune-connective', '4A41.1',
    'Inflammatory myopathy with characteristic skin findings and proximal muscle weakness; strong association with underlying malignancy.',
    'Complement-mediated microangiopathy targets intramuscular capillaries (perifascicular atrophy). B-cell and CD4+ T-cell perivascular infiltrates. Anti-Mi-2 and anti-MDA5 are specific antibodies. Skin manifestations may precede myopathy.',
    ['Heliotrope rash (violet eyelid discoloration)', 'Gottron papules (knuckles, elbows, knees)', 'Shawl sign (V-sign) photodistributed rash', 'Symmetric proximal weakness', 'Mechanic hands (fissured, hyperkeratotic)', 'Nail fold capillary changes'],
    ['CK elevated (may be less than polymyositis)', 'Anti-Mi-2, anti-MDA5, anti-TIF1-γ antibodies', 'EMG (myopathic pattern)', 'Muscle biopsy (perifascicular atrophy, perimysial inflammation)', 'MRI thighs (fascial/muscle edema)', 'Age-appropriate malignancy screening (CT chest/abdomen/pelvis)'],
    ['High-dose prednisone with taper', 'Methotrexate or azathioprine (steroid-sparing)', 'IVIG for moderate-severe disease', 'Hydroxychloroquine for skin manifestations', 'Sun protection', 'Comprehensive cancer screening at diagnosis and annually for 3-5 years'],
    ['Malignancy (ovarian, lung, GI, breast, lymphoma)', 'Rapidly progressive ILD (anti-MDA5)', 'Calcinosis (especially juvenile form)', 'Cardiac disease', 'Aspiration pneumonia'],
    'Dermatomyositis causes a characteristic skin rash and muscle weakness. It is important to screen for hidden cancers, as the condition can be linked. Sun protection helps the skin, and medications can control both the rash and weakness.',
  ),

  'mixed-connective-tissue-disease': rhe(
    'mixed-connective-tissue-disease',
    'Mixed Connective Tissue Disease (MCTD)',
    'Enfermedad mixta del tejido conectivo (EMTC)',
    'autoimmune-connective', '4A43',
    'Overlap syndrome with features of SLE, scleroderma, and polymyositis, defined by high-titer anti-U1 RNP antibodies.',
    'Anti-U1 RNP antibodies target small nuclear ribonucleoproteins. The pathogenesis involves immune complex deposition and T-cell–mediated tissue damage. Features may evolve over years, sometimes differentiating into a defined CTD.',
    ['Raynaud phenomenon (almost universal)', 'Swollen "sausage" fingers', 'Polyarthritis', 'Myositis (proximal weakness)', 'Esophageal dysmotility', 'Pleuritis or pericarditis', 'Sclerodactyly'],
    ['High-titer anti-U1 RNP antibody (required)', 'ANA positive (speckled pattern)', 'ESR/CRP elevated', 'CK if myositis component', 'PFTs and HRCT (ILD screening)', 'Echocardiogram (PAH screening)'],
    ['NSAIDs for arthritis', 'Low-dose corticosteroids', 'Hydroxychloroquine', 'Calcium channel blockers for Raynaud', 'Methotrexate or azathioprine for severe organ involvement', 'Treat each component based on predominant features'],
    ['Pulmonary arterial hypertension', 'Interstitial lung disease', 'Trigeminal neuropathy', 'Renal disease (rare)', 'Evolution into definite SLE or scleroderma'],
    'MCTD is an overlap condition with features of several autoimmune diseases. Treatment depends on which symptoms are most prominent. Raynaud management and regular lung screening are especially important.',
  ),

  'antiphospholipid-syndrome': rhe(
    'antiphospholipid-syndrome',
    'Antiphospholipid Syndrome (APS)',
    'Síndrome antifosfolípido (SAF)',
    'autoimmune-connective', '4A44.0',
    'Autoimmune thrombophilia causing arterial and venous thrombosis and pregnancy morbidity, associated with antiphospholipid antibodies.',
    'Antiphospholipid antibodies (anti-cardiolipin, anti-β2-glycoprotein I, lupus anticoagulant) activate endothelium, platelets, and complement. This promotes a prothrombotic state. May be primary or secondary to SLE.',
    ['Deep vein thrombosis or pulmonary embolism', 'Stroke or TIA (especially in young patients)', 'Recurrent pregnancy losses (especially after 10 weeks)', 'Livedo reticularis', 'Thrombocytopenia', 'Libman-Sacks endocarditis'],
    ['Lupus anticoagulant (functional assay)', 'Anti-cardiolipin IgG/IgM', 'Anti-β2-glycoprotein I IgG/IgM', 'Antibodies must be positive on 2 occasions ≥12 weeks apart', 'CBC (thrombocytopenia)', 'Coagulation studies (prolonged aPTT with lupus anticoagulant)'],
    ['Anticoagulation with warfarin (INR 2-3) for thrombosis', 'Low-dose aspirin for primary prophylaxis in SLE', 'Heparin + aspirin during pregnancy', 'Avoid estrogen-containing contraceptives', 'Hydroxychloroquine (reduces thrombosis risk in SLE-APS)', 'Rituximab or eculizumab for catastrophic APS'],
    ['Catastrophic APS (multi-organ thrombotic microangiopathy)', 'Recurrent thrombosis despite anticoagulation', 'Pregnancy loss', 'Stroke and cognitive decline', 'Valvular heart disease'],
    'APS makes your blood more likely to clot. Treatment with blood thinners is usually lifelong after a clot. If you are planning pregnancy, inform your rheumatologist early so medications can be adjusted for safety.',
  ),

  // ===== INFLAMMATORY ARTHRITIS (4) ==========================================

  'rheumatoid-arthritis-inflammatory': rhe(
    'rheumatoid-arthritis-inflammatory',
    'Rheumatoid Arthritis (Inflammatory Arthritis Classification)',
    'Artritis reumatoide (clasificación artritis inflamatoria)',
    'inflammatory-arthritis', 'FA20',
    'See primary RA entry under autoimmune-connective; classified here as the prototypical inflammatory arthritis for differential diagnosis.',
    'Autoimmune synovitis with pannus formation, driven by TNF-α, IL-6, and T/B-cell interactions. Anti-CCP and RF are serological hallmarks. Early treatment prevents erosive disease.',
    ['Symmetric small joint polyarthritis', 'Morning stiffness >60 minutes', 'MCP and PIP joint swelling', 'Positive squeeze test (MTP compression)', 'Extra-articular: nodules, ILD, vasculitis'],
    ['RF and anti-CCP', 'ESR/CRP', 'X-ray hands and feet', 'Musculoskeletal ultrasound (power Doppler synovitis)', 'DAS28 or CDAI for disease activity scoring'],
    ['Methotrexate (first-line DMARD)', 'Leflunomide or sulfasalazine alternatives', 'Biologic DMARDs: TNFi, IL-6 inhibitors, abatacept', 'JAK inhibitors (tofacitinib, upadacitinib)', 'Short-course glucocorticoids for flares', 'Treat-to-target: remission or low disease activity'],
    ['Erosive joint destruction', 'Cervical spine instability', 'Cardiovascular disease', 'Felty syndrome', 'Secondary Sjögren syndrome'],
    'Rheumatoid arthritis inflames the joint lining. Early aggressive treatment with methotrexate and, if needed, biologic agents can stop joint damage and keep you active.',
  ),

  'psoriatic-arthritis': rhe(
    'psoriatic-arthritis',
    'Psoriatic Arthritis',
    'Artritis psoriásica',
    'inflammatory-arthritis', 'FA21.0',
    'Inflammatory arthritis associated with psoriasis; variable patterns including oligoarthritis, polyarthritis, DIP-predominant, spondylitis, and arthritis mutilans.',
    'IL-23/IL-17 axis drives enthesitis, synovitis, and new bone formation. TNF-α and IL-22 contribute to skin and joint inflammation. Genetic association with HLA-B27 (spondylitic form). Entheseal inflammation is a distinguishing feature.',
    ['Dactylitis (sausage digits)', 'Enthesitis (Achilles, plantar fascia)', 'DIP joint involvement', 'Asymmetric oligoarthritis or symmetric polyarthritis', 'Nail pitting, onycholysis', 'Psoriatic skin plaques (may be occult: scalp, intergluteal)'],
    ['CASPAR criteria for classification', 'HLA-B27 (spondylitic pattern)', 'ESR/CRP (may be normal)', 'X-ray: pencil-in-cup deformity, periostitis, new bone formation', 'MRI for sacroiliitis and enthesitis', 'Skin and nail exam'],
    ['NSAIDs for mild disease', 'Methotrexate for peripheral polyarthritis', 'TNF inhibitors (first-line biologic)', 'IL-17 inhibitors (secukinumab, ixekizumab)', 'IL-23 inhibitors (guselkumab)', 'PDE4 inhibitor (apremilast) for mild-moderate', 'JAK inhibitors for refractory disease'],
    ['Erosive joint destruction (arthritis mutilans)', 'Axial disease with ankylosis', 'Uveitis', 'Cardiovascular risk', 'Metabolic syndrome'],
    'Psoriatic arthritis links skin psoriasis with joint inflammation. Newer biologic therapies can effectively treat both skin and joints simultaneously. Early treatment prevents irreversible joint damage.',
  ),

  'reactive-arthritis': rhe(
    'reactive-arthritis',
    'Reactive Arthritis',
    'Artritis reactiva',
    'inflammatory-arthritis', 'FA22',
    'Sterile inflammatory arthritis triggered by preceding GI or GU infection, often associated with HLA-B27.',
    'Molecular mimicry between bacterial antigens (Chlamydia, Salmonella, Shigella, Yersinia, Campylobacter) and self-antigens triggers immune-mediated joint inflammation. HLA-B27 predisposes to chronicity. Bacterial components may persist in the synovium.',
    ['Asymmetric oligoarthritis (lower extremity predominant)', 'Conjunctivitis or anterior uveitis', 'Urethritis', 'Enthesitis (heel pain)', 'Dactylitis', 'Keratoderma blennorrhagicum', 'Circinate balanitis', 'Oral ulcers'],
    ['HLA-B27 (60-80% positive)', 'ESR/CRP elevated', 'Synovial fluid: inflammatory (sterile)', 'GU testing for Chlamydia trachomatis (NAAT)', 'Stool cultures if GI trigger suspected', 'X-ray: periostitis, enthesophytes in chronic disease'],
    ['NSAIDs first-line', 'Antibiotics if active Chlamydia infection', 'Intra-articular corticosteroid injections', 'Sulfasalazine for chronic/recurrent disease', 'TNF inhibitors for refractory cases', 'Physical therapy'],
    ['Chronic arthritis (15-30% of cases)', 'Recurrent uveitis', 'Sacroiliitis', 'Aortic regurgitation (rare, chronic)', 'Keratoderma and nail changes'],
    'Reactive arthritis occurs when an infection elsewhere in your body triggers joint inflammation. Most cases resolve within months, but some become chronic. Treating any active infection and managing inflammation are the priorities.',
  ),

  'juvenile-idiopathic-arthritis': rhe(
    'juvenile-idiopathic-arthritis',
    'Juvenile Idiopathic Arthritis (JIA)',
    'Artritis idiopática juvenil (AIJ)',
    'inflammatory-arthritis', 'FA24',
    'Most common chronic rheumatic disease of childhood; onset before age 16 with arthritis persisting ≥6 weeks.',
    'Heterogeneous group unified by chronic synovitis in children. Subtypes include oligoarticular, polyarticular (RF+ or RF−), systemic (Still disease with IL-1/IL-18 overproduction), enthesitis-related, and psoriatic. Pathogenesis varies by subtype.',
    ['Joint swelling, stiffness, and pain', 'Limp or refusal to walk (young children)', 'Systemic JIA: quotidian fevers, salmon-colored rash, hepatosplenomegaly', 'Oligoarticular: 1-4 joints, high uveitis risk', 'Growth disturbance and leg-length discrepancy'],
    ['Clinical classification by ILAR criteria', 'ANA (uveitis risk in oligoarticular)', 'RF and anti-CCP (polyarticular subtype)', 'Ferritin (markedly elevated in systemic JIA)', 'Ophthalmologic slit-lamp exam (uveitis screening)', 'X-ray and musculoskeletal ultrasound'],
    ['NSAIDs for symptom control', 'Intra-articular triamcinolone for oligoarticular', 'Methotrexate for polyarticular disease', 'TNF inhibitors (etanercept, adalimumab)', 'IL-1 inhibitors (anakinra, canakinumab) for systemic JIA', 'IL-6 inhibitor (tocilizumab) for systemic/polyarticular', 'Regular ophthalmology screening'],
    ['Uveitis (anterior, chronic, often asymptomatic)', 'Macrophage activation syndrome (systemic JIA)', 'Growth retardation', 'Joint destruction and disability', 'Amyloidosis (rare)'],
    'JIA is a group of conditions causing joint inflammation in children. With modern treatments, most children can lead active lives. Regular eye exams are essential because silent eye inflammation can occur.',
  ),

  // ===== CRYSTAL ARTHROPATHIES (3) ===========================================

  'gout': rhe(
    'gout',
    'Gout',
    'Gota',
    'crystal-arthropathy', 'FA25.0',
    'Inflammatory arthritis caused by monosodium urate (MSU) crystal deposition in joints and soft tissues due to hyperuricemia.',
    'Serum urate >6.8 mg/dL exceeds solubility, forming MSU crystals in joints. Crystals activate NLRP3 inflammasome in macrophages, releasing IL-1β and triggering intense neutrophilic inflammation. Risk factors: diet (purines, fructose, alcohol), renal underexcretion (90%), overproduction (10%).',
    ['Acute monoarthritis (classically 1st MTP — podagra)', 'Exquisite pain, redness, swelling', 'Self-limited attacks (untreated: 7-10 days)', 'Tophi (chronic tophaceous gout)', 'Polyarticular flares in advanced disease', 'Nephrolithiasis (uric acid stones)'],
    ['Synovial fluid analysis: needle-shaped, negatively birefringent crystals', 'Serum urate (may be normal during acute flare)', 'Dual-energy CT for tophi detection', 'Joint X-ray: punched-out erosions with overhanging edges (chronic)', 'Renal function and urinalysis', '24-hour urine uric acid (overproducer vs. underexcretor)'],
    ['Acute flare: colchicine, NSAIDs, or corticosteroids', 'IL-1 inhibitors (anakinra) for refractory flares', 'Urate-lowering therapy (ULT): allopurinol or febuxostat (target <6 mg/dL)', 'Probenecid for underexcretors with normal renal function', 'Prophylactic colchicine when initiating ULT (3-6 months)', 'Dietary modification: limit alcohol, red meat, fructose'],
    ['Chronic tophaceous gout with joint destruction', 'Uric acid nephropathy and nephrolithiasis', 'Metabolic syndrome and cardiovascular risk', 'Medication side effects (allopurinol hypersensitivity — screen HLA-B*5801)'],
    'Gout causes sudden, painful joint attacks from uric acid crystals. Lowering uric acid with daily medication prevents future attacks and joint damage. Dietary changes help but are usually not enough alone.',
  ),

  'pseudogout-cppd': rhe(
    'pseudogout-cppd',
    'Calcium Pyrophosphate Deposition Disease (CPPD / Pseudogout)',
    'Enfermedad por depósito de pirofosfato de calcio (CPPD / Pseudogota)',
    'crystal-arthropathy', 'FA25.2',
    'Crystal arthropathy caused by calcium pyrophosphate dihydrate crystal deposition in cartilage and synovium.',
    'CPP crystals deposit in hyaline and fibrocartilage (chondrocalcinosis). Crystal shedding into joint space triggers NLRP3 inflammasome activation. Associated with aging, hyperparathyroidism, hemochromatosis, hypomagnesemia, and hypophosphatasia.',
    ['Acute mono- or oligoarthritis (knee most common)', 'Mimics gout (pseudogout) or RA (pseudo-RA)', 'Chondrocalcinosis on imaging', 'Chronic pyrophosphate arthropathy (resembles OA)', 'Crowned dens syndrome (cervical)', 'Less severe than gout, subacute onset'],
    ['Synovial fluid: rhomboid, weakly positively birefringent crystals', 'X-ray: chondrocalcinosis (menisci, triangular fibrocartilage, symphysis pubis)', 'Screen for metabolic causes: Ca, Mg, phosphate, ferritin, transferrin saturation, PTH', 'Ultrasound: hyperechoic deposits within cartilage'],
    ['Acute: colchicine, NSAIDs, intra-articular corticosteroids', 'Prophylactic low-dose colchicine for recurrent attacks', 'IL-1 inhibitors for refractory disease', 'Correct underlying metabolic disorder', 'Methotrexate or hydroxychloroquine for chronic inflammatory form', 'No crystal-dissolving therapy currently available'],
    ['Chronic destructive arthropathy', 'Joint deformity', 'Cervical myelopathy (crowned dens)', 'Misdiagnosis as OA or RA'],
    'Pseudogout causes calcium crystal deposits in your joint cartilage, leading to sudden painful swelling, most often in the knee. Unlike gout, there is no specific medication to dissolve the crystals, but attacks can be managed effectively.',
  ),

  'hydroxyapatite-deposition': rhe(
    'hydroxyapatite-deposition',
    'Hydroxyapatite Deposition Disease',
    'Enfermedad por depósito de hidroxiapatita',
    'crystal-arthropathy', 'FA25.3',
    'Periarticular or articular calcium hydroxyapatite crystal deposition causing acute or chronic symptoms.',
    'Basic calcium phosphate (hydroxyapatite) crystals deposit in tendons, bursae, and joint capsules. Mechanism involves tendon degeneration, local hypoxia, and metaplastic calcification. Crystal shedding triggers acute inflammation. Milwaukee shoulder is a destructive large-joint arthropathy variant.',
    ['Acute calcific periarthritis/tendinitis (shoulder most common)', 'Severe pain with limited range of motion', 'Milwaukee shoulder syndrome (destructive glenohumeral)', 'Periarticular swelling without warmth', 'Calcific deposits visible on imaging'],
    ['X-ray: periarticular calcific deposits', 'Ultrasound: echogenic foci with shadowing', 'Synovial fluid: non-birefringent crystals (alizarin red staining)', 'CT for deep deposits', 'Standard crystal analysis often negative (crystals too small for polarized light)'],
    ['NSAIDs for acute episodes', 'Colchicine for recurrent disease', 'Corticosteroid injection (periarticular)', 'Needling and aspiration/barbotage under ultrasound', 'Extracorporeal shock wave therapy for refractory calcific tendinitis', 'Surgical excision for large symptomatic deposits'],
    ['Chronic shoulder destruction (Milwaukee shoulder)', 'Frozen shoulder', 'Tendon rupture', 'Recurrence after treatment'],
    'Hydroxyapatite disease causes calcium deposits in tendons, especially around the shoulder. These deposits can cause sudden severe pain. Most episodes resolve with anti-inflammatory medications, and the calcium may reabsorb on its own.',
  ),

  // ===== VASCULITIS (9) ======================================================

  'giant-cell-arteritis': rhe(
    'giant-cell-arteritis',
    'Giant Cell Arteritis (Temporal Arteritis)',
    'Arteritis de células gigantes (arteritis temporal)',
    'vasculitis', '4A44.1',
    'Large-vessel vasculitis of the elderly affecting the aorta and its branches, particularly the temporal artery; ophthalmic emergency if untreated.',
    'Granulomatous inflammation of the media and adventitia of medium-to-large arteries. Dendritic cells in the adventitia activate CD4+ T cells, which produce IFN-γ, recruiting macrophages and giant cells. Intimal hyperplasia causes luminal stenosis. Associated with HLA-DR4.',
    ['New-onset headache (temporal region)', 'Scalp tenderness', 'Jaw claudication', 'Visual disturbances (amaurosis fugax, diplopia)', 'PMR symptoms (50% overlap)', 'Constitutional symptoms (fever, weight loss, fatigue)', 'Tender, thickened temporal artery'],
    ['ESR markedly elevated (>50, often >100)', 'CRP elevated', 'Temporal artery biopsy (gold standard; skip lesions possible)', 'Temporal artery ultrasound (halo sign)', 'PET-CT or CTA for large vessel involvement', 'CBC (thrombocytosis, normocytic anemia)'],
    ['High-dose prednisone immediately (1 mg/kg; do not wait for biopsy)', 'IV methylprednisolone if vision threatened', 'Tocilizumab (IL-6 inhibitor) as steroid-sparing agent', 'Slow prednisone taper over 12-24 months', 'Low-dose aspirin for ischemic risk', 'Osteoporosis prophylaxis during steroid course'],
    ['Permanent vision loss (anterior ischemic optic neuropathy)', 'Aortic aneurysm (thoracic)', 'Stroke', 'Aortic dissection', 'Glucocorticoid side effects (osteoporosis, diabetes, infections)'],
    'Giant cell arteritis causes inflammation of blood vessels near the temples and can threaten your vision. Steroids must be started immediately if suspected — even before the biopsy is done. Most patients improve but need a long, gradual steroid taper.',
  ),

  'takayasu-arteritis': rhe(
    'takayasu-arteritis',
    'Takayasu Arteritis',
    'Arteritis de Takayasu',
    'vasculitis', '4A44.2',
    'Large-vessel granulomatous vasculitis affecting the aorta and its major branches, predominantly in young women.',
    'Granulomatous inflammation of the aortic wall and branches causes intimal fibrosis, stenosis, and aneurysm formation. CD4+ T cells and macrophages infiltrate the vessel wall. Leads to ischemia of end organs. Pulselessness in advanced disease.',
    ['Diminished or absent peripheral pulses', 'Blood pressure discrepancy between arms (>10 mmHg)', 'Limb claudication', 'Carotidynia', 'Bruits (carotid, subclavian, aortic)', 'Constitutional symptoms early (fever, fatigue, weight loss)', 'Hypertension (renal artery stenosis)'],
    ['ESR and CRP (may be normal in chronic phase)', 'CT angiography or MR angiography (stenoses, wall thickening, aneurysms)', 'PET-CT (active inflammation)', 'Conventional angiography (gold standard for vessel mapping)', 'Echocardiogram (aortic regurgitation)', 'Four-limb blood pressures'],
    ['High-dose prednisone (1 mg/kg)', 'Methotrexate, azathioprine, or mycophenolate as steroid-sparing', 'Tocilizumab for refractory disease', 'TNF inhibitors for refractory cases', 'Antiplatelet therapy', 'Surgical revascularization or angioplasty for critical stenoses (when inflammation controlled)'],
    ['Aortic aneurysm and dissection', 'Aortic regurgitation', 'Ischemic stroke', 'Renovascular hypertension', 'Limb ischemia', 'Coronary artery stenosis'],
    'Takayasu arteritis inflames the aorta and large arteries, which can reduce blood flow to your arms, brain, and organs. Treatment with steroids and immune-suppressing medications can control inflammation. Regular imaging monitors your blood vessels.',
  ),

  'polyarteritis-nodosa': rhe(
    'polyarteritis-nodosa',
    'Polyarteritis Nodosa (PAN)',
    'Poliarteritis nodosa (PAN)',
    'vasculitis', '4A44.3',
    'Necrotizing vasculitis of medium-sized muscular arteries without glomerulonephritis or vasculitis in arterioles/capillaries/venules.',
    'Fibrinoid necrosis of medium-artery walls with neutrophilic infiltration. Segmental and transmural inflammation leads to aneurysm formation and vessel occlusion. Associated with hepatitis B in a subset. ANCA is typically negative (distinguishing from ANCA-associated vasculitis).',
    ['Constitutional symptoms (fever, weight loss, malaise)', 'Livedo reticularis and skin nodules', 'Myalgia and arthralgia', 'Mononeuritis multiplex', 'Renal artery stenosis and hypertension (not glomerulonephritis)', 'Mesenteric ischemia (abdominal pain)', 'Testicular pain'],
    ['ANCA negative (important distinction)', 'ESR/CRP elevated', 'Hepatitis B serology', 'Mesenteric or renal angiography (microaneurysms, beading)', 'Biopsy of affected tissue (sural nerve, skin)', 'CMP (renal function, liver enzymes)'],
    ['High-dose corticosteroids', 'Cyclophosphamide for severe/organ-threatening disease', 'Azathioprine for maintenance remission', 'Antiviral therapy if hepatitis B associated (entecavir + short steroid course + plasma exchange)', 'Treat hypertension aggressively'],
    ['Mesenteric infarction and bowel perforation', 'Renal failure', 'Stroke', 'Myocardial infarction', 'Peripheral neuropathy (irreversible)'],
    'PAN causes inflammation of medium-sized arteries, which can affect your kidneys, nerves, gut, and skin. It is treatable with steroids and immunosuppressants. If linked to hepatitis B, treating the virus is critical.',
  ),

  'granulomatosis-with-polyangiitis': rhe(
    'granulomatosis-with-polyangiitis',
    'Granulomatosis with Polyangiitis (GPA / Wegener)',
    'Granulomatosis con poliangeítis (GPA / Wegener)',
    'vasculitis', '4A44.4',
    'ANCA-associated small-vessel vasculitis with necrotizing granulomatous inflammation of the upper and lower respiratory tract and necrotizing glomerulonephritis.',
    'c-ANCA (anti-PR3) activates neutrophils, which adhere to vessel walls and release proteases causing necrotizing vasculitis. Granuloma formation involves macrophages and giant cells. Affects ENT, lungs, and kidneys preferentially.',
    ['Chronic sinusitis, epistaxis, nasal crusting', 'Saddle-nose deformity', 'Pulmonary nodules and cavitary lesions', 'Hemoptysis and alveolar hemorrhage', 'Rapidly progressive glomerulonephritis (RPGN)', 'Subglottic stenosis', 'Scleritis or orbital pseudotumor'],
    ['c-ANCA / anti-PR3 (90% in generalized disease)', 'Urinalysis (RBC casts, proteinuria)', 'BUN/creatinine', 'CT chest (nodules, cavities, ground glass)', 'CT sinuses', 'Renal biopsy: pauci-immune crescentic GN', 'Tissue biopsy: necrotizing granulomas'],
    ['Induction: rituximab or cyclophosphamide + glucocorticoids', 'Maintenance: rituximab, azathioprine, or methotrexate', 'Plasma exchange for severe renal involvement or DAH', 'Trimethoprim-sulfamethoxazole for limited ENT disease and PJP prophylaxis', 'Avacopan (C5a receptor inhibitor) as glucocorticoid-sparing'],
    ['End-stage renal disease', 'Pulmonary hemorrhage', 'Subglottic stenosis requiring dilation', 'Hearing loss', 'Saddle-nose deformity', 'Treatment-related infections and malignancy'],
    'GPA (formerly Wegener) is a serious vasculitis that affects the sinuses, lungs, and kidneys. Modern therapy with rituximab has greatly improved outcomes. Regular blood and urine monitoring is essential to detect kidney involvement early.',
  ),

  'microscopic-polyangiitis': rhe(
    'microscopic-polyangiitis',
    'Microscopic Polyangiitis (MPA)',
    'Poliangeítis microscópica (PAM)',
    'vasculitis', '4A44.5',
    'ANCA-associated small-vessel necrotizing vasculitis without granuloma formation, frequently causing RPGN and pulmonary capillaritis.',
    'p-ANCA (anti-MPO) activates neutrophils leading to necrotizing vasculitis of capillaries, venules, and arterioles. No granuloma formation (distinguishes from GPA). Pauci-immune glomerulonephritis is the hallmark renal lesion.',
    ['Rapidly progressive glomerulonephritis (most common)', 'Alveolar hemorrhage (pulmonary capillaritis)', 'Purpura', 'Mononeuritis multiplex', 'Constitutional symptoms', 'Arthralgias/myalgias', 'No upper airway granulomatous disease (distinguishes from GPA)'],
    ['p-ANCA / anti-MPO (60-80%)', 'Urinalysis: hematuria, RBC casts, proteinuria', 'Elevated creatinine', 'CT chest (ground-glass if DAH)', 'Renal biopsy: pauci-immune crescentic GN', 'ANCA serology with ELISA confirmation'],
    ['Induction: rituximab or cyclophosphamide + glucocorticoids', 'Maintenance: rituximab or azathioprine', 'Plasma exchange for severe kidney disease or DAH', 'Avacopan as adjunct', 'PJP prophylaxis with TMP-SMX', 'Renal replacement therapy if ESRD'],
    ['End-stage renal disease', 'Fatal pulmonary hemorrhage', 'Chronic kidney disease', 'Treatment-related infections', 'Relapse (less common than GPA)'],
    'MPA is a vasculitis that primarily affects the kidneys and lungs. Early treatment with immunosuppression can prevent permanent kidney damage. Report any bloody urine or new cough immediately.',
  ),

  'eosinophilic-granulomatosis-polyangiitis': rhe(
    'eosinophilic-granulomatosis-polyangiitis',
    'Eosinophilic Granulomatosis with Polyangiitis (EGPA / Churg-Strauss)',
    'Granulomatosis eosinofílica con poliangeítis (EGPA / Churg-Strauss)',
    'vasculitis', '4A44.6',
    'ANCA-associated vasculitis characterized by asthma, eosinophilia, and necrotizing vasculitis with granulomas.',
    'Three phases: (1) allergic: asthma and rhinitis; (2) eosinophilic: tissue eosinophilia; (3) vasculitic: small-vessel necrotizing vasculitis. p-ANCA/anti-MPO is positive in ~40%. Eosinophil granule proteins cause tissue damage. IL-5 drives eosinophil production.',
    ['Severe asthma (late-onset, refractory)', 'Peripheral eosinophilia (>1500/μL or >10%)', 'Migratory pulmonary infiltrates', 'Mononeuritis multiplex', 'Cardiac involvement (eosinophilic myocarditis)', 'Purpura and skin nodules', 'Nasal polyposis and sinusitis'],
    ['p-ANCA / anti-MPO (~40%)', 'Peripheral eosinophil count (markedly elevated)', 'IgE elevated', 'CT chest (patchy infiltrates)', 'Echocardiogram and cardiac MRI (myocarditis)', 'Nerve conduction studies', 'Tissue biopsy: eosinophilic granulomas and vasculitis'],
    ['Glucocorticoids (mainstay, often high-dose)', 'Cyclophosphamide for organ-threatening disease', 'Mepolizumab (anti-IL-5, FDA-approved for EGPA)', 'Azathioprine or methotrexate for maintenance', 'Rituximab for refractory disease', 'Continue asthma controller medications'],
    ['Eosinophilic cardiomyopathy and heart failure', 'Peripheral neuropathy (often irreversible)', 'GI ischemia', 'Renal failure (less common than GPA/MPA)', 'Treatment-related infections'],
    'EGPA (formerly Churg-Strauss) combines asthma with blood vessel inflammation. Cardiac involvement is the most dangerous complication. Steroids are very effective, and newer biologic therapies targeting eosinophils are now available.',
  ),

  'iga-vasculitis': rhe(
    'iga-vasculitis',
    'IgA Vasculitis (Henoch-Schönlein Purpura)',
    'Vasculitis por IgA (Púrpura de Henoch-Schönlein)',
    'vasculitis', '4A44.7',
    'Small-vessel vasculitis with IgA-dominant immune deposits; most common childhood vasculitis, often following URI.',
    'IgA1 immune complexes deposit in small vessel walls (skin, gut, kidney, joints). Defective IgA1 glycosylation leads to polymer formation and mesangial deposition. Complement activation via alternative/lectin pathway mediates tissue injury.',
    ['Palpable purpura (lower extremities, buttocks)', 'Arthritis/arthralgia (knees, ankles)', 'Abdominal pain and GI bleeding', 'Renal involvement (hematuria, proteinuria)', 'Often preceded by upper respiratory infection', 'Self-limited in most children'],
    ['Clinical diagnosis in typical presentation', 'Urinalysis (hematuria, proteinuria)', 'Serum IgA (elevated in ~50%)', 'BUN/creatinine', 'Skin biopsy: leukocytoclastic vasculitis with IgA deposits on DIF', 'Renal biopsy if severe nephritis: IgA mesangial deposits'],
    ['Supportive care (hydration, NSAIDs for arthralgia)', 'Corticosteroids for severe abdominal symptoms or orchitis', 'ACE inhibitors for nephritis with proteinuria', 'Mycophenolate or cyclophosphamide for severe nephritis', 'Monitor urine for up to 6 months after resolution'],
    ['IgA nephropathy (long-term renal disease)', 'Intussusception (children)', 'GI hemorrhage or perforation', 'Chronic kidney disease', 'Recurrence (~30% in children)'],
    'IgA vasculitis causes a purple rash, joint pain, and sometimes belly pain. In children, it usually resolves on its own within weeks. Urine tests are important to check for kidney involvement over the following months.',
  ),

  'behcet-disease': rhe(
    'behcet-disease',
    'Behçet Disease',
    'Enfermedad de Behçet',
    'vasculitis', '4A64',
    'Systemic vasculitis of variable vessel size characterized by recurrent oral and genital ulcers with multisystem involvement.',
    'Neutrophilic vasculitis with pathergy response. HLA-B51 is strongly associated. Innate immune overactivation with IL-1, TNF-α, and Th17 pathways. Can affect arteries and veins of all sizes. The Silk Road distribution suggests genetic-environmental interaction.',
    ['Recurrent oral aphthous ulcers (required criterion)', 'Genital ulcers (scarring)', 'Erythema nodosum and pseudofolliculitis', 'Pathergy reaction (positive in ~50%)', 'Anterior or posterior uveitis / panuveitis', 'Deep venous thrombosis', 'CNS involvement (neuro-Behçet)', 'Arterial aneurysms'],
    ['Clinical diagnosis (International Criteria for Behçet Disease)', 'Pathergy test (papule >2mm at 48h after skin prick)', 'HLA-B51 (supportive, not diagnostic)', 'CRP/ESR elevated during flares', 'MRI brain if neuro-Behçet suspected', 'Fundoscopy and fluorescein angiography for ocular disease', 'CT/MR angiography for vascular involvement'],
    ['Colchicine for oral/genital ulcers and arthritis', 'Topical corticosteroids for mucosal ulcers', 'Azathioprine for eye disease', 'TNF inhibitors (infliximab, adalimumab) for severe ocular/neuro/vascular disease', 'Apremilast for oral ulcers', 'Cyclophosphamide for major vessel or CNS disease', 'Anticoagulation is controversial for venous thrombosis'],
    ['Blindness from posterior uveitis', 'Cerebral venous sinus thrombosis', 'Pulmonary artery aneurysm (risk of fatal hemorrhage)', 'Bowel perforation', 'Large-vessel aneurysms'],
    'Behçet disease causes painful sores in the mouth and genitals, and can affect the eyes, blood vessels, and nervous system. Early treatment of eye disease is critical to prevent vision loss. Colchicine helps with ulcers and joint symptoms.',
  ),

  'cryoglobulinemic-vasculitis': rhe(
    'cryoglobulinemic-vasculitis',
    'Cryoglobulinemic Vasculitis',
    'Vasculitis crioglobulinémica',
    'vasculitis', '4A44.Y',
    'Small-vessel vasculitis caused by cryoglobulin immune complex deposition, strongly associated with hepatitis C.',
    'Cryoglobulins are immunoglobulins that precipitate at cold temperatures. Type II (mixed monoclonal IgM-RF + polyclonal IgG) is most common and strongly HCV-associated. Immune complexes deposit in small vessels, activating complement. Type I is associated with lymphoproliferative disorders.',
    ['Palpable purpura (lower extremities)', 'Arthralgia', 'Peripheral neuropathy (sensorimotor)', 'Membranoproliferative glomerulonephritis', 'Raynaud phenomenon', 'Livedo reticularis', 'Hepatosplenomegaly'],
    ['Cryoglobulin levels (keep sample at 37°C during transport)', 'Rheumatoid factor positive (high titer)', 'Low C4 (characteristic), normal or low C3', 'Hepatitis C serology and viral load', 'Urinalysis, BUN/creatinine', 'Skin or nerve biopsy if needed', 'Serum protein electrophoresis and immunofixation'],
    ['Treat underlying hepatitis C (direct-acting antivirals)', 'Rituximab for moderate-severe vasculitis', 'Plasma exchange for severe flares', 'Corticosteroids as bridge', 'Cyclophosphamide for life-threatening disease', 'Avoid cold exposure'],
    ['Renal failure (MPGN)', 'B-cell lymphoma (long-term HCV)', 'Severe neuropathy', 'Skin ulceration and necrosis', 'Digital gangrene'],
    'Cryoglobulinemic vasculitis is often caused by hepatitis C. Treating the hepatitis C infection can cure the vasculitis. In the meantime, avoiding cold and using medications like rituximab can control symptoms.',
  ),

  // ===== SPONDYLOARTHROPATHY (2) =============================================

  'ankylosing-spondylitis': rhe(
    'ankylosing-spondylitis',
    'Ankylosing Spondylitis',
    'Espondilitis anquilosante',
    'spondyloarthropathy', 'FA92.0',
    'Chronic inflammatory spondyloarthropathy primarily affecting the sacroiliac joints and spine, leading to progressive fusion.',
    'IL-23/IL-17 axis drives enthesitis and osteitis at spinal and sacroiliac entheses. Syndesmophyte formation leads to progressive ankylosis (bamboo spine). Strong HLA-B27 association (>90%). Mechanical stress at entheses may trigger inflammation in genetically predisposed individuals.',
    ['Chronic low back pain and stiffness (worse at rest, improves with exercise)', 'Sacroiliac tenderness', 'Reduced spinal mobility (Schober test)', 'Chest expansion limitation', 'Anterior uveitis (25-40%)', 'Enthesitis (heel, costochondral)', 'Progressive kyphosis'],
    ['HLA-B27 (~90% positive)', 'X-ray pelvis: sacroiliitis (bilateral, symmetric)', 'MRI sacroiliac joints (bone marrow edema = early disease)', 'Modified New York criteria (X-ray) or ASAS criteria (MRI)', 'ESR/CRP (elevated in ~50%)', 'X-ray spine: syndesmophytes, bamboo spine (late)'],
    ['NSAIDs (first-line, continuous use)', 'TNF inhibitors for NSAID-refractory disease (adalimumab, infliximab)', 'IL-17 inhibitors (secukinumab, ixekizumab)', 'JAK inhibitors (upadacitinib)', 'Physical therapy and structured exercise (essential)', 'No role for methotrexate or sulfasalazine for axial disease'],
    ['Spinal fractures (osteoporotic + fused spine)', 'Cauda equina syndrome', 'Aortic regurgitation and conduction abnormalities', 'Pulmonary fibrosis (apical)', 'IgA nephropathy', 'Restrictive lung disease'],
    'Ankylosing spondylitis causes stiffness and fusion of the spine. Daily exercise and stretching are as important as medications. NSAIDs and biologic therapies can control pain and slow progression.',
  ),

  'enteropathic-arthritis': rhe(
    'enteropathic-arthritis',
    'Enteropathic Arthritis',
    'Artritis enteropática',
    'spondyloarthropathy', 'FA92.1',
    'Spondyloarthropathy associated with inflammatory bowel disease (Crohn disease and ulcerative colitis).',
    'Shared IL-23/IL-17 immune pathways between gut and joint inflammation. Type 1 (peripheral, pauciarticular) correlates with IBD flares; type 2 (peripheral, polyarticular) is independent of bowel activity. Axial disease parallels ankylosing spondylitis and is HLA-B27 associated.',
    ['Peripheral arthritis (knees, ankles, wrists)', 'Type 1: acute, self-limited, parallels GI flares', 'Type 2: persistent, independent of bowel activity', 'Axial involvement (sacroiliitis, spondylitis)', 'Erythema nodosum', 'Uveitis', 'IBD symptoms (diarrhea, abdominal pain, bloody stools)'],
    ['Diagnosis of IBD (endoscopy + biopsy)', 'HLA-B27 for axial disease', 'ESR/CRP (correlate with inflammation)', 'Fecal calprotectin', 'MRI sacroiliac joints if axial symptoms', 'X-ray affected joints', 'Joint aspiration to exclude infection or crystals'],
    ['Control IBD (peripheral type 1 improves with GI remission)', 'NSAIDs (use cautiously — may exacerbate IBD)', 'Sulfasalazine for peripheral arthritis', 'TNF inhibitors (infliximab, adalimumab — treat both joint and bowel)', 'IL-12/23 inhibitor (ustekinumab)', 'JAK inhibitors (tofacitinib)', 'Physical therapy for axial disease'],
    ['Chronic joint damage', 'IBD flare from NSAIDs', 'Spinal ankylosis (axial disease)', 'Uveitis-related vision loss', 'Osteoporosis (IBD + steroid use)'],
    'Enteropathic arthritis links bowel inflammation (Crohn or ulcerative colitis) with joint pain. Treating your bowel disease often improves joint symptoms. Some biologic medications can treat both conditions simultaneously.',
  ),

  // ===== SOFT TISSUE (4) =====================================================

  'fibromyalgia': rhe(
    'fibromyalgia',
    'Fibromyalgia',
    'Fibromialgia',
    'soft-tissue', 'MG30.01',
    'Chronic widespread pain syndrome with central sensitization, fatigue, and cognitive dysfunction; no structural joint pathology.',
    'Central sensitization amplifies pain signaling: reduced descending inhibition and augmented excitatory neurotransmission (substance P, glutamate). Abnormal wind-up phenomenon. Dysregulated HPA axis and autonomic dysfunction. Sleep architecture is disrupted (reduced non-REM stage 3).',
    ['Chronic widespread pain (>3 months)', 'Fatigue and unrefreshing sleep', 'Cognitive dysfunction ("fibro fog")', 'Tender points (historical, not required for current criteria)', 'Headaches', 'Irritable bowel syndrome overlap', 'Paresthesias', 'Mood disturbance (anxiety, depression)'],
    ['ACR 2010/2016 criteria (widespread pain index + symptom severity)', 'Diagnosis of exclusion: normal labs', 'CBC, CMP, TSH, ESR/CRP (to exclude other causes)', 'Vitamin D level', 'No imaging findings (used to exclude other conditions)', 'Sleep study if sleep apnea suspected'],
    ['Patient education and reassurance', 'Graded aerobic exercise (most evidence-based non-pharmacologic)', 'CBT and mindfulness-based stress reduction', 'Duloxetine or milnacipran (SNRIs)', 'Pregabalin or gabapentin', 'Low-dose amitriptyline for sleep', 'Avoid opioids (ineffective, risk of harm)', 'Sleep hygiene optimization'],
    ['Chronic disability and reduced quality of life', 'Medication side effects', 'Opioid dependence if inappropriately prescribed', 'Depression and anxiety', 'Social isolation'],
    'Fibromyalgia causes widespread pain because your nervous system amplifies pain signals. Regular exercise, good sleep habits, and certain medications can significantly improve symptoms. This is a real condition, not imaginary.',
  ),

  'polymyalgia-rheumatica': rhe(
    'polymyalgia-rheumatica',
    'Polymyalgia Rheumatica (PMR)',
    'Polimialgia reumática (PMR)',
    'soft-tissue', 'FA20.1',
    'Inflammatory condition of the elderly causing bilateral shoulder and hip girdle pain and stiffness with markedly elevated ESR.',
    'IL-6–driven systemic inflammation targeting proximal synovial structures (subacromial bursitis, biceps tenosynovitis, hip synovitis). Subclinical large-vessel vasculitis is present in ~15% (GCA overlap). No muscle destruction (normal CK).',
    ['Bilateral shoulder pain and stiffness', 'Hip girdle pain (difficulty rising)', 'Morning stiffness >45 minutes', 'Constitutional symptoms (fatigue, fever, weight loss)', 'Rapid onset over days to weeks', 'Age >50 (almost always)', 'Dramatic response to low-dose prednisone'],
    ['ESR markedly elevated (>40, often >80)', 'CRP elevated', 'Normal CK (excludes myositis)', 'IL-6 elevated', 'Musculoskeletal ultrasound: subacromial bursitis, biceps tenosynovitis', 'PET-CT if GCA suspected (vascular uptake)', 'Exclude RA, myositis, malignancy, infection'],
    ['Prednisone 15-20 mg/day (rapid response supports diagnosis)', 'Gradual taper over 12-18 months', 'Methotrexate as steroid-sparing if frequent relapses', 'Tocilizumab for refractory or relapsing PMR', 'Osteoporosis prevention (calcium, vitamin D, bisphosphonate)', 'Monitor for development of GCA'],
    ['Giant cell arteritis (15-20% develop GCA)', 'Glucocorticoid side effects (osteoporosis, diabetes, cataracts)', 'Relapse during taper (~50%)', 'Adrenal insufficiency with rapid steroid withdrawal'],
    'PMR causes severe stiffness and pain in the shoulders and hips. A low dose of prednisone usually brings dramatic relief within days. The steroid dose is slowly reduced over many months; report any new headaches or vision changes immediately.',
  ),

  'tendinitis': rhe(
    'tendinitis',
    'Tendinitis / Tendinopathy',
    'Tendinitis / Tendinopatía',
    'soft-tissue', 'FB40',
    'Inflammation or degeneration of tendons, commonly affecting the rotator cuff, lateral epicondyle, Achilles, and patellar tendons.',
    'Acute tendinitis involves inflammation from overuse or injury. Chronic tendinopathy (tendinosis) is a degenerative process with failed healing, disorganized collagen, mucoid degeneration, and neovascularization rather than true inflammation. Repetitive microtrauma exceeds repair capacity.',
    ['Localized pain worsened by activity', 'Pain with resisted movement of affected tendon', 'Swelling along tendon', 'Point tenderness', 'Gradual onset (overuse) or acute (injury)', 'Crepitus in some cases'],
    ['Clinical diagnosis based on history and exam', 'Ultrasound (tendon thickening, tears, neovascularization)', 'MRI for refractory cases or surgical planning', 'X-ray to exclude calcifications or bony pathology', 'Consider systemic causes if multiple tendons affected (fluoroquinolones, statins, spondyloarthropathy)'],
    ['Relative rest and activity modification', 'Physical therapy with eccentric strengthening exercises', 'NSAIDs for acute inflammation', 'Corticosteroid injection (cautious — may weaken tendon)', 'PRP injection for chronic tendinopathy (emerging evidence)', 'Shock wave therapy for calcific tendinitis', 'Surgical debridement for refractory cases'],
    ['Tendon rupture', 'Chronic pain and disability', 'Post-injection tendon weakening', 'Frozen shoulder (after rotator cuff tendinitis)', 'Recurrence without biomechanical correction'],
    'Tendinitis is pain from an irritated tendon, usually from overuse. Rest, physical therapy with specific exercises, and anti-inflammatory medications help. Avoid repeated steroid injections, as they can weaken the tendon over time.',
  ),

  'bursitis': rhe(
    'bursitis',
    'Bursitis',
    'Bursitis',
    'soft-tissue', 'FB40.1',
    'Inflammation of synovial-lined bursae, commonly affecting the subacromial, olecranon, trochanteric, prepatellar, and pes anserine bursae.',
    'Bursae are fluid-filled sacs that reduce friction between musculoskeletal structures. Inflammation results from overuse (repetitive motion), trauma, infection (septic bursitis), crystal deposition, or systemic inflammatory conditions (RA, gout).',
    ['Localized pain and swelling over bursa', 'Pain with range of motion', 'Warmth and erythema (especially septic)', 'Palpable fluid collection (olecranon, prepatellar)', 'Limited ROM due to pain', 'Night pain (subacromial bursitis)'],
    ['Clinical diagnosis based on location and exam', 'Ultrasound (fluid distension, synovial thickening)', 'Bursal fluid aspiration if infection suspected (cell count, Gram stain, culture, crystals)', 'X-ray to exclude fracture or calcification', 'MRI rarely needed'],
    ['Rest and avoidance of aggravating activity', 'Ice application and compression', 'NSAIDs', 'Corticosteroid injection for persistent aseptic bursitis', 'Antibiotics for septic bursitis (cover Staphylococcus)', 'Incision and drainage for refractory septic bursitis', 'Physical therapy to address biomechanical factors'],
    ['Septic bursitis (osteomyelitis, bacteremia)', 'Chronic recurrent bursitis', 'Bursal adhesions and fibrosis', 'Skin atrophy at injection site'],
    'Bursitis is swelling of a fluid-filled cushion near a joint. Rest and anti-inflammatory medications usually resolve it. If the area is hot and red, seek medical attention promptly, as it could be infected and may need antibiotics or drainage.',
  ),

  // ===== METABOLIC BONE (3) ==================================================

  'osteoporosis': rhe(
    'osteoporosis',
    'Osteoporosis',
    'Osteoporosis',
    'metabolic-bone', 'FB83.1',
    'Systemic skeletal disease with low bone mass and microarchitectural deterioration, leading to increased fracture risk.',
    'Imbalance between osteoblast bone formation and osteoclast resorption. Postmenopausal: estrogen deficiency increases osteoclast activity (RANKL upregulation). Aging: reduced osteoblast function. Secondary causes: glucocorticoids, hyperparathyroidism, hypogonadism. Peak bone mass (age 25-30) and rate of loss determine fracture risk.',
    ['Often asymptomatic until fracture', 'Vertebral compression fractures (height loss, kyphosis)', 'Hip fractures (major morbidity/mortality)', 'Distal radius fractures (Colles)', 'Back pain from vertebral fractures', 'Fragility fractures with minimal trauma'],
    ['DXA scan (T-score ≤ −2.5 = osteoporosis)', 'FRAX score (10-year fracture probability)', 'Serum calcium, phosphate, alkaline phosphatase', '25-hydroxyvitamin D level', 'PTH', 'TSH (exclude hyperthyroidism)', 'CBC, CMP, SPEP (exclude secondary causes)', 'Vertebral fracture assessment or lateral spine X-ray'],
    ['Calcium (1200 mg/day) and vitamin D (800-2000 IU/day)', 'Weight-bearing and resistance exercise', 'Bisphosphonates first-line (alendronate, zoledronic acid)', 'Denosumab (RANKL inhibitor) for bisphosphonate intolerance', 'Teriparatide or abaloparatide (anabolic, for severe disease)', 'Romosozumab (anti-sclerostin, for very high fracture risk)', 'Fall prevention strategies'],
    ['Hip fracture (20-30% one-year mortality in elderly)', 'Vertebral fractures (chronic pain, disability)', 'Atypical femoral fractures (bisphosphonate long-term)', 'Osteonecrosis of the jaw (rare, bisphosphonate/denosumab)', 'Rebound bone loss after denosumab discontinuation'],
    'Osteoporosis weakens your bones, making them more likely to break. Weight-bearing exercise, calcium, vitamin D, and medications can strengthen bones. A bone density scan (DXA) tells us how strong your bones are.',
  ),

  'osteomalacia': rhe(
    'osteomalacia',
    'Osteomalacia',
    'Osteomalacia',
    'metabolic-bone', 'FB83.0',
    'Defective bone mineralization in adults due to vitamin D deficiency, phosphate depletion, or other causes of impaired mineralization.',
    'Insufficient calcium-phosphate product prevents hydroxyapatite crystal formation in osteoid. Vitamin D deficiency (most common cause) reduces intestinal calcium absorption, leading to secondary hyperparathyroidism. Phosphate-wasting disorders (tumor-induced osteomalacia, X-linked hypophosphatemia) are less common causes.',
    ['Diffuse bone pain and tenderness', 'Proximal muscle weakness (waddling gait)', 'Bone fragility fractures (insufficiency fractures)', 'Bone tenderness on palpation (sternum, shins)', 'Difficulty rising from a chair or climbing stairs', 'Hypocalcemia symptoms (tetany, paresthesias) in severe cases'],
    ['25-hydroxyvitamin D (low, <20 ng/mL)', 'Calcium and phosphate (low or low-normal)', 'Alkaline phosphatase (elevated)', 'PTH (elevated — secondary hyperparathyroidism)', 'X-ray: Looser zones (pseudofractures) pathognomonic', '24-hour urine calcium (low)', 'Bone biopsy with tetracycline labeling (gold standard, rarely needed)', 'FGF-23 if tumor-induced osteomalacia suspected'],
    ['Vitamin D replacement (ergocalciferol 50,000 IU weekly x8-12 weeks, then maintenance)', 'Calcium supplementation (1000-1500 mg/day)', 'Phosphate replacement for hypophosphatemic forms', 'Burosumab (anti-FGF-23) for X-linked hypophosphatemia', 'Treat underlying cause (malabsorption, medication adjustment)', 'Weight-bearing exercise as tolerated'],
    ['Pathologic fractures', 'Severe proximal myopathy', 'Chronic pain and disability', 'Hypocalcemic seizures (severe cases)', 'Secondary hyperparathyroidism with bone loss'],
    'Osteomalacia means your bones are not hardening properly, usually from low vitamin D. Taking vitamin D and calcium supplements can reverse the condition. Your doctor may check for other causes if vitamin D alone is insufficient.',
  ),

  'paget-disease-bone': rhe(
    'paget-disease-bone',
    'Paget Disease of Bone',
    'Enfermedad de Paget ósea',
    'metabolic-bone', 'FB84',
    'Chronic disorder of excessive and disorganized bone remodeling, leading to enlarged, deformed, and weakened bones.',
    'Overactive osteoclasts (large, multinucleated) drive excessive resorption followed by rapid, disorganized osteoblastic bone formation. Woven bone replaces normal lamellar bone (mosaic pattern on biopsy). Possible paramyxovirus trigger in genetically predisposed individuals (SQSTM1 mutations). Monostotic or polyostotic.',
    ['Often asymptomatic (incidental elevated ALP)', 'Bone pain (pelvis, femur, spine, skull most common)', 'Bone deformity (bowing of tibia, skull enlargement)', 'Warmth over affected bone (increased vascularity)', 'Hearing loss (cochlear/ossicular involvement)', 'Pathologic fractures', 'Headache and cranial nerve compression'],
    ['Alkaline phosphatase markedly elevated (most useful marker)', 'Bone-specific ALP or P1NP for monitoring', 'X-ray: cortical thickening, coarsened trabeculae, lytic-sclerotic pattern', 'Bone scan: increased uptake in affected bones (extent of disease)', 'CT/MRI if neurological complications or sarcomatous transformation', 'Calcium and vitamin D levels'],
    ['Bisphosphonates: zoledronic acid (single IV infusion, most effective)', 'Alendronate or risedronate (oral alternatives)', 'Calcitonin (rarely used, historical)', 'Calcium and vitamin D supplementation', 'Analgesics for pain', 'Orthopedic surgery for fractures, severe deformity, or joint replacement', 'Monitor ALP for treatment response and relapse'],
    ['Osteosarcoma (<1% but serious)', 'Pathologic fractures (banana fractures in femur)', 'Hearing loss and cranial nerve palsies', 'Spinal stenosis', 'High-output cardiac failure (extensive disease)', 'Hypercalcemia (immobilization)'],
    'Paget disease causes some bones to grow abnormally large and weak. A single bisphosphonate infusion can normalize bone turnover for years. Most people with Paget disease live normally with treatment and monitoring.',
  ),
};
