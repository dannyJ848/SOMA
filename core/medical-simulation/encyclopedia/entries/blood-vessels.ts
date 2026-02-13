/**
 * Blood Vessels Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Blood Vessels Entry
 */
export const bloodVesselsEntry: EncyclopediaEntry = {
  entryId: 'blood-vessels',
  name: 'Blood Vessels',
  nameEs: 'Vasos Sanguineos',
  entryType: 'anatomy',
  category: 'cardiovascular',
  summary: 'The network of tubes that transport blood throughout the body, including arteries, veins, and capillaries.',
  overview: {
    patient: 'Blood vessels are like a network of highways that carry blood throughout your body. Arteries carry oxygen-rich blood away from the heart to your organs and tissues. Veins return oxygen-poor blood back to the heart. Capillaries are tiny vessels where oxygen and nutrients are delivered to cells and waste products are picked up. Together, these vessels stretch about 60,000 miles in an adult - enough to circle the Earth more than twice!',
    intermediate: 'The vascular system consists of arteries (carrying blood away from heart), arterioles (small arterial branches), capillaries (exchange vessels), venules (small veins), and veins (returning blood to heart). Arterial blood is oxygen-rich in the systemic circuit and oxygen-poor in the pulmonary circuit (except for pulmonary veins, which carry oxygenated blood). Blood vessel walls have three layers (tunics): tunica intima (endothelium), tunica media (smooth muscle and elastic tissue), and tunica externa (connective tissue). Arteries have thicker walls to withstand higher pressure; veins have thinner walls, larger lumens, and valves to prevent backflow.',
    professional: 'The vascular system comprises a closed network of approximately 60,000 miles of vessels. Structural organization: Arterial system (elastic arteries, muscular arteries, arterioles) conducts blood away from heart; capillary beds (continuous, fenestrated, sinusoidal) provide exchange interface; venous system (venules, veins) returns blood to heart. Wall structure: Tunica intima (endothelium, basement membrane, subendothelial layer), tunica media (smooth muscle, elastic fibers, external elastic lamina), tunica externa/adventitia (collagen, elastic fibers, vasa vasorum, nervi vasorum). Arteries: Elastic arteries (aorta, pulmonary trunk, major branches) contain abundant elastic lamellae allowing Windkessel effect; muscular arteries (medium arteries, named) have thick tunica media; arterioles (resistance vessels) control blood flow distribution. Capillaries: 5-10 μm diameter, 0.5-1 mm length, total surface area 500-700 m²; types include continuous (CNS, muscle), fenestrated (kidney, intestines), and sinusoidal (liver, spleen, bone marrow). Veins: capacitance vessels containing 60-70% of blood volume; venules (10-200 μm); small/medium/large veins; venous valves (semilunar folds of intima) ensure unidirectional flow in extremities.',
  },
  content: [
    {
      title: 'Arteries',
      content: {
        patient: `Arteries carry blood away from the heart. They have thick, muscular walls to handle the high pressure of blood pumped by the heart. The largest artery is the aorta, which arches from the heart and distributes blood to the body. Arteries branch into smaller arterioles, which then connect to capillaries. Arterial blood is typically bright red because it's oxygen-rich (except in the pulmonary artery, which carries oxygen-poor blood to the lungs).`,
        intermediate: `Arteries are pressure vessels with three layers. The aorta and major branches are elastic arteries with abundant elastic tissue allowing expansion during systole and recoil during diastole (Windkessel effect), maintaining continuous flow. Muscular arteries (medium arteries like brachial, femoral) have thick tunica media with smooth muscle controlling vessel diameter. Arterioles (resistance vessels, 10-100 μm) have 1-3 layers of smooth muscle; they regulate blood flow to capillary beds and contribute significantly to total peripheral resistance. Precapillary sphincters (smooth muscle at capillary origin) control capillary perfusion.`,
        professional: `Arterial classification and structure:

Elastic (conducting) arteries: Diameter >10mm; aorta, pulmonary trunk, innominate, common carotid, subclavian, common iliac. Tunica media dominated by 40-70 concentric elastic lamellae with smooth muscle between; minimal vasa vasorum in outer media; external elastic lamina indistinct. Windkessel function: stores ~50% of stroke volume during systole, elastic recoil maintains diastolic pressure and continuous capillary flow.

Muscular (distributing) arteries: Diameter 0.1-10mm; named arteries (brachial, radial, femoral, coronary, renal). Tunica media 40% wall thickness with circular smooth muscle layers; prominent internal and external elastic laminae; vasa vasorum and nervi vasorum present. Vasomotor control: sympathetic adrenergic fibers cause contraction (α1 receptors); some vessels have cholinergic or dopaminergic vasodilator fibers. Endothelial factors: nitric oxide (vasodilation), endothelin (vasoconstriction), prostacyclin.

Arterioles (resistance vessels): Diameter 10-100 μm; 1-3 smooth muscle layers; minimal elastic tissue. Control ~75% of total peripheral resistance. Precapillary sphincters: circumferential smooth muscle at metarteriole-capillary junction; local metabolic control (O2, CO2, H+, adenosine, K+, lactate) regulates capillary flow. Myogenic response: increased transmural pressure causes smooth muscle contraction (Bayliss effect), maintaining constant flow.

Aortic branches: Ascending aorta (coronary arteries); aortic arch (brachiocephalic/innominate, left common carotid, left subclavian); descending thoracic aorta; abdominal aorta (celiac, SMA, renal, gonadal, IMA, common iliacs).`,
      },
    },
    {
      title: 'Veins and Valves',
      content: {
        patient: `Veins carry blood back to the heart. They have thinner walls than arteries and contain valves - like one-way doors - that prevent blood from flowing backward. This is especially important in your legs, where blood must flow against gravity to return to the heart. When leg muscles contract, they squeeze veins and push blood upward. Veins appear blue through the skin because the blood inside has given up its oxygen (deoxygenated).`,
        intermediate: `Veins are capacitance vessels containing 60-70% of blood volume. They have thinner walls, larger lumens, and lower pressure than arteries. The venous system includes venules (collecting blood from capillaries), small/medium veins, and large veins. Venous valves are semilunar folds of tunica intima that ensure unidirectional flow, particularly important in lower limbs where gravity opposes return. The muscle pump mechanism: skeletal muscle contraction compresses veins, propelling blood toward the heart; valves prevent backflow during relaxation. Veins serve as a blood reservoir; venoconstriction redistributes blood to central circulation when needed.`,
        professional: `Venous system anatomy and function:

Structural hierarchy: Post-capillary venules (10-30 μm) - porous for fluid exchange, site of leukocyte extravasation; muscular venules (50-100 μm) - smooth muscle appears; small veins (0.1-1mm) - adventitial sheaths; medium veins (1-10mm) - valves present, media thin; large veins (>10mm) - VCs, pulmonary veins, portal vein; tunica externa thickest layer, longitudinally oriented smooth muscle.

Venous valves: Bicuspid semilunar folds of tunica intima with collagen and elastic cores; most numerous in lower limbs (every 2-3 cm); absent in abdominal/thoracic veins, superior vena cava, inferior vena cava, and portal system. Valve closure requires reversing pressure gradient; incompetence causes varicosities.

Muscle pump and respiratory pump: Contraction of skeletal muscles (especially in calves with deep veins) generates 100-200 mmHg pressure, emptying veins; valves prevent backflow. Respiratory pump: inspiration decreases intrathoracic pressure, increasing venous return to right heart; expiration increases abdominal pressure, squeezing abdominal veins.

Venous tone: Sympathetic control causes venoconstriction; important in adjusting venous return and preload. Venous compliance is 24x arterial compliance.

Major veins: Systemic venous return - SVC (drains head, neck, upper limbs, thorax), IVC (drains abdomen, pelvis, lower limbs); portal system (drains GI tract, spleen, pancreas to liver).`,
      },
    },
    {
      title: 'Capillaries',
      content: {
        patient: `Capillaries are the smallest blood vessels - so tiny that red blood cells must pass through single file. They form vast networks connecting arterioles to venules. This is where the magic happens: oxygen and nutrients pass out of the blood into surrounding tissues, while carbon dioxide and waste products move from tissues into the blood. Each cell in your body is within a hair's width of a capillary, ensuring efficient exchange.`,
        intermediate: `Capillaries are microscopic exchange vessels (5-10 μm diameter, ~1 mm length) forming networks between arterioles and venules. Their walls consist of a single layer of endothelial cells on a basement membrane - the thinnest vessel wall, allowing efficient exchange. Total capillary surface area is 500-700 m². Exchange mechanisms include diffusion (lipid-soluble substances directly through membrane), transcytosis (vesicular transport), and filtration/reabsorption (Starling forces). Capillary density varies: high in metabolically active tissues (brain, heart, kidneys), low in less active tissues (tendons, cartilage).`,
        professional: `Capillary structure and function:

General characteristics: Diameter 5-10 μm (RBCs pass single file); length 0.5-1 mm; density 300-4000 per mm³ tissue; total number ~10 billion; total surface area 500-700 m²; total cross-sectional area 4500 cm² (explains slow velocity - 0.03 cm/s).

Wall structure: Endothelium (single layer of squamous cells with tight junctions, 0.2-0.4 μm thick); continuous basement membrane; pericytes (contractile cells regulating diameter and permeability). No smooth muscle or adventitia.

Capillary types: 
1. Continuous capillaries (CNS, muscle, skin, lungs, connective tissue): Tight junctions between endothelial cells; complete basement membrane; pinocytotic vesicles; least permeable; blood-brain barrier formed by tight junctions.
2. Fenestrated capillaries (kidney glomerulus, intestinal villi, endocrine glands): 60-80 nm pores (fenestrae) covered by diaphragm; 10x more permeable than continuous; allow rapid fluid/small solute exchange.
3. Sinusoids (liver, spleen, bone marrow, adrenal cortex, pituitary): Large, irregular 30-40 μm diameter; incomplete basement membrane; large intercellular gaps; most permeable; allow passage of cells and large proteins.

Exchange mechanisms:
- Diffusion: Lipid-soluble (O₂, CO₂, steroids) directly through membrane; water-soluble through intercellular clefts or fenestrae.
- Transcytosis: Vesicular transport for large proteins.
- Bulk flow: Starling forces - filtration at arterial end (capillary hydrostatic pressure > oncotic pressure), reabsorption at venous end (oncotic > hydrostatic), lymphatic drainage of excess.

Capillary recruitment: Metabolic demand opens more capillaries; autoregulation maintains constant flow despite pressure changes (myogenic, metabolic mechanisms).`,
      },
    },
    {
      title: 'Blood Pressure and Vascular Resistance',
      content: {
        patient: `Blood pressure is the force blood exerts on vessel walls. It's highest in arteries (around 120/80 mmHg) and lowest in veins. The top number (systolic) is pressure during heart contraction; the bottom number (diastolic) is pressure during relaxation. Blood pressure is needed to push blood through the circulatory system. Factors affecting blood pressure include how much blood the heart pumps, how narrow or wide the blood vessels are, and blood volume.`,
        intermediate: `Blood pressure (BP) is the hydrostatic pressure exerted by blood on vessel walls. Systemic arterial BP: normal ~120/80 mmHg (systolic/diastolic); mean arterial pressure (MAP) = diastolic + 1/3 pulse pressure. BP depends on cardiac output (CO) and total peripheral resistance (TPR): MAP = CO × TPR. Resistance is determined by vessel radius (R ∝ 1/r⁴, Poiseuille's law), blood viscosity, and vessel length. Vascular tone (degree of vasoconstriction) is regulated by autonomic nervous system, hormones (angiotensin II, vasopressin), and local factors (NO, prostacyclin, endothelin). Baroreceptors (aortic arch, carotid sinuses) provide rapid BP regulation via brainstem centers.`,
        professional: `Hemodynamics and blood pressure regulation:

Pressure gradients: Systemic circulation - aorta/mean 100 mmHg → arteries 100 → arterioles 85 → capillaries 35 (arterial) to 15 (venous) → venules 10 → veins 5 → vena cava/RA 0-2 mmHg. Pulmonary circulation - pulmonary artery 25/10 mmHg → capillaries 10 → left atrium 5 mmHg.

Blood pressure determinants: MAP = CO × TPR (Ohm's law analogy); CO = HR × SV; TPR = sum of all vascular resistances (primarily arteriolar). Pulse pressure = systolic - diastolic (~40 mmHg); reflects stroke volume and aortic compliance (decreased compliance increases pulse pressure).

Vascular resistance: Poiseuille's law - R = 8ηL/πr⁴ where η=viscosity, L=length, r=radius. Arteriolar radius is primary determinant; small changes cause large resistance changes (radius halved → resistance 16x). Series resistance: Rtotal = R1 + R2 + R3. Parallel resistance: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 (organs in parallel).

Autoregulation: Myogenic (pressure increase causes vasoconstriction); metabolic (O₂ decrease, CO₂/H⁺/adenosine/K⁺/osmolarity increase cause vasodilation); endothelial (flow-induced NO release). Reactive hyperemia: brief ischemia causes increased flow post-occlusion.

Neural control: Sympathetic (vasoconstrictor, T1-L2, α1 receptors); basal tone maintains TPR. Baroreceptor reflex: carotid sinus and aortic arch stretch receptors → glossopharyngeal (IX) and vagus (X) → NTS → increased vagal and decreased sympathetic outflow when BP high; reverse when BP low. Rapid response (seconds). Chemoreceptor reflex: carotid and aortic bodies respond to hypoxia, hypercapnia, acidemia → increased BP and ventilation.

Hormonal control: RAAS (renin-angiotensin-aldosterone system) - slow, sustained pressure increase; vasopressin (ADH) - potent vasoconstrictor at high levels; epinephrine - β2 vasodilation (skeletal muscle), α1 vasoconstriction; natriuretic peptides (ANP, BNP) - vasodilation, natriuresis.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'aorta', structureName: 'Aorta', linkText: 'Aorta', relevance: 'Largest artery' },
    { structureId: 'vena-cava', structureName: 'Vena Cava', linkText: 'Vena Cava', relevance: 'Major veins' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Blood pump' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-20-1',
      type: 'textbook',
      title: 'Anatomy and Physiology - 20.1 Structure and Function of Blood Vessels',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/20-1-structure-and-function-of-blood-vessels',
      citation: 'Betts JG, et al. Anatomy and Physiology. 20.1 Structure and Function of Blood Vessels. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'heart-anatomy', entryType: 'anatomy', name: 'Heart Anatomy', relationship: 'see-also' },
    { entryId: 'cardiac-cycle', entryType: 'physiology', name: 'Cardiac Cycle', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['blood vessels', 'arteries', 'veins', 'capillaries', 'circulation', 'blood pressure'],
    tags: ['cardiology', 'anatomy', 'cardiovascular'],
    synonyms: ['vascular system', 'vasculature', 'blood circulation'],
  },
};

/**
 * Blood Entry
 */
export const bloodEntry: EncyclopediaEntry = {
  entryId: 'blood',
  name: 'Blood',
  nameEs: 'Sangre',
  entryType: 'anatomy',
  category: 'cardiovascular',
  summary: 'The fluid connective tissue that transports oxygen, nutrients, hormones, and waste throughout the body.',
  overview: {
    patient: 'Blood is the liquid that flows through your body carrying oxygen, nutrients, and hormones to cells, while removing waste products. It makes up about 7-8% of your body weight - roughly 5 liters in an average adult. Blood is composed of plasma (the liquid part) and formed elements (red blood cells, white blood cells, and platelets). Red blood cells carry oxygen using hemoglobin, giving blood its red color. White blood cells fight infections. Platelets help blood clot to stop bleeding.',
    intermediate: 'Blood is a specialized connective tissue with a liquid extracellular matrix (plasma, 55% of blood volume) and formed elements (45%). Plasma is 92% water with dissolved proteins (albumin, globulins, fibrinogen), electrolytes, nutrients, gases, and waste. Formed elements include erythrocytes (RBCs, 4.5-5.5 million/μL, transport O₂ and CO₂ via hemoglobin), leukocytes (WBCs, 4,500-11,000/μL, immune function), and thrombocytes (platelets, 150,000-400,000/μL, hemostasis). RBCs are anucleate biconcave discs with 120-day lifespan. Hematocrit (packed cell volume) is normally 38-48% in women and 42-52% in men.',
    professional: 'Blood composition and function: Total volume 4.5-6L (males 5-6L, females 4.5-5L), ~7-8% body weight; pH 7.35-7.45; osmolarity 280-296 mOsm/L; viscosity 3.5-5.5x water. Plasma (55%): 92% water, 7% plasma proteins (albumin 58%, globulins 37%, fibrinogen 4%, regulatory proteins 1%), 1% other solutes. Formed elements (45%): Erythrocytes (99% of formed elements, 4.2-6.2×10⁶/μL, diameter 7.5 μm, volume 80-100 fL, no nucleus or organelles, biconcave shape maximizes surface area, lifespan 120 days, hemoglobin 12-18 g/dL); Leukocytes (4,500-11,000/μL): neutrophils (40-70%), lymphocytes (20-40%), monocytes (2-8%), eosinophils (1-4%), basophils (0.5-1%); Thrombocytes (150,000-400,000/μL), anucleate cell fragments from megakaryocytes, lifespan 8-10 days. Hematopoiesis occurs in bone marrow (adult: axial skeleton, girdles, proximal long bones).',
  },
  content: [
    {
      title: 'Plasma',
      content: {
        patient: 'Plasma is the liquid portion of blood, making up about 55% of total blood volume. It is 92% water and appears pale yellow. Plasma transports nutrients from the digestive system, hormones from endocrine glands, and waste products to the kidneys for removal. It also carries blood cells and contains proteins that help with clotting and immune function. Plasma can be donated and used to help patients with various medical conditions.',
        intermediate: 'Plasma is the straw-colored liquid extracellular matrix of blood, comprising 55% of blood volume. It is 92% water with dissolved solutes: plasma proteins (albumin for osmotic pressure, globulins for immunity/clotting/transport, fibrinogen for clotting), electrolytes (Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻), nutrients (glucose, amino acids, lipids, vitamins), gases (O₂, CO₂, N₂), and waste products (urea, creatinine, bilirubin). Plasma osmotic pressure (25 mmHg, mainly from albumin) maintains blood volume. Plasma is obtained by centrifuging blood with anticoagulant; serum is plasma without clotting factors.',
        professional: `Plasma composition and functions:

Water (92%): Solvent for transport, thermal regulation.

Plasma proteins (6-8% by weight, produces colloid osmotic pressure of 25-30 mmHg):
- Albumin (58%, 3.5-5.0 g/dL, MW 69 kDa): Smallest, most abundant; maintains oncotic pressure; transports fatty acids, bilirubin, calcium, drugs; negative acute phase reactant.
- Globulins (37%, 2.0-3.5 g/dL): α1-globulins (transcortin, thyroxine-binding globulin, α1-antitrypsin), α2-globulins (ceruloplasmin, haptoglobin, α2-macroglobulin), β-globulins (transferrin, complement), γ-globulins (immunoglobulins IgG, IgA, IgM, IgE, IgD).
- Fibrinogen (4%, 200-400 mg/dL): Clotting factor, converted to fibrin; acute phase reactant.
- Regulatory proteins: Enzymes, proenzymes, hormones.

Electrolytes (mEq/L): Cations: Na⁺ (135-145), K⁺ (3.5-5.5), Ca²⁺ (4.5-5.5), Mg²⁺ (1.5-2.5); Anions: Cl⁻ (100-108), HCO₃⁻ (22-26), phosphate (1.5-2.5), sulfate, organic acids, proteins. Maintain osmotic balance, pH buffering, membrane potentials.

Non-protein nitrogenous substances: Urea (BUN 8-25 mg/dL), uric acid, creatinine, amino acids.

Nutrients: Glucose (70-110 mg/dL fasting), lipids (triglycerides, cholesterol, phospholipids), vitamins, minerals.

Gases: O₂ (1-2% dissolved), CO₂ (5-10% dissolved, rest as bicarbonate or carbamino compounds).

Plasma derivatives: Fresh frozen plasma, cryoprecipitate, albumin, IVIG, clotting factor concentrates.`,
      },
    },
    {
      title: 'Red Blood Cells (Erythrocytes)',
      content: {
        patient: `Red blood cells (RBCs) are the most abundant cells in blood, giving it the red color. They are shaped like small, flexible doughnuts without holes in the center (biconcave discs). RBCs contain hemoglobin, a protein that grabs oxygen in the lungs and releases it to tissues throughout the body. They also help carry some carbon dioxide back to the lungs. RBCs have no nucleus, allowing more room for hemoglobin. They live about 120 days before being recycled by the spleen and liver.`,
        intermediate: `Erythrocytes are anucleate, biconcave discs (7.5 μm diameter, 2 μm thick) that transport respiratory gases. Their shape maximizes surface area-to-volume ratio for gas exchange and allows deformation through narrow capillaries. They lack nuclei and organelles, having expelled them during maturation; this allows more room for hemoglobin (~270 million molecules per cell) but limits lifespan to 120 days. Hemoglobin (Hb) is composed of four globin chains (α₂β₂ in adults, HbA) each with a heme group containing iron that binds O₂. Normal Hb concentration: males 14-18 g/dL, females 12-16 g/dL. RBCs are produced in bone marrow (erythropoiesis) stimulated by erythropoietin (EPO) from kidneys in response to hypoxia.`,
        professional: `Erythrocyte biology:

Morphology: Biconcave disc, diameter 7.5 μm (range 6.9-8.0), MCV 80-100 fL, thickness 2.0 μm at rim, 1.0 μm center; surface area 140 μm², volume 90 μm³; membrane surface area 40% greater than sphere of same volume. Cytoskeleton: spectrin-actin network maintains shape and provides deformability; vertical interactions (ankyrin, band 3, protein 4.2) anchor membrane to cytoskeleton; defects cause hereditary spherocytosis/elliptocytosis. No nucleus, mitochondria, ribosomes, or organelles; 95% of intracellular protein is hemoglobin.

Hemoglobin structure: Tetramer of two α chains (141 amino acids) and two β chains (146 amino acids); each chain has eight α-helical segments and one heme group (protoporphyrin IX with Fe²⁺); Fe²⁺ binds one O₂ molecule. HbA (α₂β₂) 96-98%, HbA2 (α₂δ₂) 2-3%, HbF (α₂γ₂) <1% adults. Oxygen binding: cooperative binding (sigmoid curve); influenced by pH (Bohr effect), CO₂, 2,3-BPG, temperature. Each gram Hb binds 1.34 mL O₂; O₂ capacity = Hb × 1.34. Oxygen transport: dissolved (1.5%) + Hb-bound (98.5%). CO₂ transport: dissolved (7%), carbamino-Hb (23%), bicarbonate (70% via carbonic anhydrase: CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻; chloride shift).

Erythropoiesis: Production 2-3 million RBCs/second; stimulated by EPO (glycoprotein hormone from peritubular cells of kidney, 90%; liver, 10%); EPO increased by hypoxia, androgens, high altitude; inhibited by polycythemia, hyperoxia. Progenitors: BFU-E (early), CFU-E (late, EPO-dependent). Maturation stages: proerythroblast → basophilic erythroblast → polychromatophilic erythroblast → orthochromatic erythroblast (extrudes nucleus) → reticulocyte (ribosomes, 1% in circulation) → erythrocyte. Maturation time ~7 days; requires iron, vitamin B12, folate, protein.

Metabolism: Glycolysis (90% Embden-Meyerhof, 10% pentose phosphate pathway); 2,3-BPG shunt modulates O₂ affinity; no oxidative phosphorylation; ATP from glycolysis maintains ion pumps (Na⁺/K⁺-ATPase, Ca²⁺-ATPase) and membrane lipids.

Senescence and removal: No protein synthesis; membrane changes (decreased sialic acid, phosphatidylserine exposure) recognized by macrophages; removed by splenic red pulp and liver Kupffer cells; iron recycled; heme degraded to bilirubin.`,
      },
    },
    {
      title: 'White Blood Cells (Leukocytes)',
      content: {
        patient: `White blood cells (WBCs) are the body's defense system. Unlike red blood cells, they have nuclei and can move out of blood vessels into tissues. There are five main types: neutrophils (first responders to bacterial infections), lymphocytes (make antibodies and kill infected cells), monocytes (become macrophages that eat invaders), eosinophils (fight parasites and allergies), and basophils (release histamine in allergic reactions). Normal WBC count is 4,500-11,000 per microliter.`,
        intermediate: `Leukocytes are nucleated immune cells (4,500-11,000/μL) classified as granulocytes (neutrophils, eosinophils, basophils with visible cytoplasmic granules) and agranulocytes (lymphocytes, monocytes). Neutrophils (40-70% of WBCs) are phagocytic first responders with multilobed nuclei. Lymphocytes (20-40%) mediate adaptive immunity: B cells (antibody production), T cells (cell-mediated immunity), NK cells (innate killing). Monocytes (2-8%) are precursors to tissue macrophages. Eosinophils (1-4%) combat parasites and mediate allergic responses. Basophils (0.5-1%) release histamine and heparin. WBCs can extravasate (diapedesis) and migrate to infection sites (chemotaxis).`,
        professional: `Leukocyte classification and function:

Granulocytes (polymorphonuclear leukocytes):

Neutrophils: 50-70% of WBCs; 10-12 μm diameter; nucleus 2-5 lobes; primary (azurophilic) granules with myeloperoxidase, defensins, lysozyme; secondary (specific) granules with lactoferrin, collagenase, NADPH oxidase. Functions: phagocytosis and killing of bacteria (respiratory burst: O₂⁻, H₂O₂, hypochlorous acid), NETosis (release of DNA traps). First responders (acute inflammation), migrate to sites within minutes, lifespan hours to days. Left shift (bandemia): increased immature neutrophils indicates infection.

Eosinophils: 1-4% of WBCs; bilobed nucleus; large red-orange granules (major basic protein, eosinophil cationic protein, eosinophil peroxidase, Charcot-Leyden crystals). Functions: kill parasites (helminths), modulate allergic reactions (inactivate histamine, leukotrienes), involved in asthma pathogenesis. Increased in parasitic infections, allergies, hypereosinophilic syndromes.

Basophils: 0.5-1% of WBCs; S-shaped nucleus; large deep blue granules (histamine, heparin, leukotrienes). Functions: allergic reactions (type I hypersensitivity), similar to mast cells. Release mediators causing vasodilation, increased vascular permeability, smooth muscle contraction.

Agranulocytes:

Lymphocytes: 20-40% of WBCs; 6-15 μm; large round nucleus with scant cytoplasm. Subtypes: B lymphocytes (bone marrow-derived, 10-20% of lymphocytes, surface immunoglobulin, produce antibodies, antigen presentation); T lymphocytes (thymus-processed, 60-80%, CD4+ helper T cells coordinate immunity, CD8+ cytotoxic T cells kill infected/cancer cells, regulatory T cells suppress responses); NK cells (natural killer, 5-10%, innate killing of viruses and tumors without prior sensitization). Functions: adaptive immunity, immunologic memory. Long lifespan (months to years for memory cells).

Monocytes: 2-8% of WBCs; 12-20 μm; kidney-shaped nucleus, gray-blue cytoplasm. Migrate to tissues and differentiate into macrophages (many tissues: Kupffer cells in liver, alveolar macrophages in lungs, microglia in CNS, osteoclasts in bone) and dendritic cells. Functions: phagocytosis, antigen presentation (link innate to adaptive immunity), cytokine production.`,
      },
    },
    {
      title: 'Platelets (Thrombocytes)',
      content: {
        patient: `Platelets are tiny cell fragments that help stop bleeding. When a blood vessel is injured, platelets rush to the site, stick together (platelet plug), and release chemicals that start the clotting process. They look like small purple specks under a microscope. Normal platelet count is 150,000-400,000 per microliter. Low platelet counts can cause easy bruising and bleeding; high counts increase clotting risk.`,
        intermediate: `Platelets (thrombocytes) are anucleate cytoplasmic fragments (2-4 μm diameter, 150,000-400,000/μL) derived from megakaryocytes in bone marrow. They contain granules: alpha granules (clotting factors, growth factors, adhesion molecules), dense granules (ADP, serotonin, calcium), and lysosomes. Platelets have a surface-connected canalicular system and cytoskeleton allowing shape change. Functions: hemostasis (vascular spasm, platelet plug formation, clot retraction), wound healing (PDGF, TGF-β release), inflammation. Lifespan 8-10 days; removed by spleen. Disorders: thrombocytopenia (low count, bleeding risk), thrombocytosis (high count, thrombosis risk), thrombasthenia (functional defects).`,
        professional: `Platelet biology and hemostasis:

Structure: Discoid shape (2-4 μm diameter, 0.5 μm thick), volume 7-10 fL; no nucleus but contain mitochondria, ribosomes, endoplasmic reticulum, Golgi, glycogen. Membrane: glycocalyx (ABO antigens, GPIb/IX/V for vWF binding, GPIIb/IIIa for fibrinogen binding), phospholipid bilayer (provides procoagulant surface). Open canalicular system (surface membrane invaginations for granule release), dense tubular system (Ca²⁺ storage, prostaglandin synthesis). Cytoskeleton: marginal microtubule band (maintains disc shape), actin-myosin (contraction), spectrin. Granules: Alpha granules (~50-80/platelet, P-selectin, vWF, fibrinogen, factor V, PDGF, TGF-β, PF4); Dense granules (~3-8/platelet, ADP, ATP, serotonin, Ca²⁺, histamine, pyrophosphate); Lysosomes (acid hydrolases).

Production: Thrombopoiesis regulated by thrombopoietin (TPO from liver, kidney); megakaryocyte progenitors (CFU-MK) → megakaryoblast → promegakaryocyte → megakaryocyte (polyploid, 16-64N) → platelet budding along proplatelet extensions. Production rate 100-200 billion/day. Apoptosis (intrinsic lifespan) and TPO levels regulate count.

Hemostasis phases:
1. Vascular spasm: Endothelin, neural reflex, platelet TXA₂ cause vasoconstriction.
2. Primary hemostasis (platelet plug): Adhesion (GPIb binds vWF at exposed subendothelium), activation (ADP, thrombin, TXA₂ cause shape change, granule release), aggregation (GPIIb/IIIa binds fibrinogen, linking platelets).
3. Secondary hemostasis (coagulation cascade): Intrinsic pathway (XII, XI, IX, VIII), extrinsic pathway (tissue factor VII), common pathway (X, V, II, I) generate thrombin, convert fibrinogen to fibrin.
4. Clot retraction: Platelet actin-myosin contracts, squeezing serum, approximating wound edges.
5. Fibrinolysis: Plasmin breaks down clot.

Platelet function tests: Platelet count, bleeding time, PFA-100, aggregometry, thromboelastography. Antiplatelet drugs: aspirin (irreversible COX-1 inhibition, ↓TXA₂), P2Y12 inhibitors (clopidogrel, ticagrelor), GPIIb/IIIa inhibitors (abciximab).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'bone-marrow', structureName: 'Bone Marrow', linkText: 'Bone Marrow', relevance: 'Blood cell production' },
    { structureId: 'spleen', structureName: 'Spleen', linkText: 'Spleen', relevance: 'RBC removal' },
    { structureId: 'liver', structureName: 'Liver', linkText: 'Liver', relevance: 'Clotting factor synthesis' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-18',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 18: Blood',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/18-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 18: Blood. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'blood-vessels', entryType: 'anatomy', name: 'Blood Vessels', relationship: 'see-also' },
    { entryId: 'immune-system', entryType: 'physiology', name: 'Immune System', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['blood', 'hematology', 'erythrocytes', 'leukocytes', 'platelets', 'plasma', 'hemoglobin'],
    tags: ['hematology', 'cardiovascular'],
    synonyms: ['hematology', 'blood cells', 'blood composition'],
  },
};

// Export all entries
export const bloodVesselsEntries: EncyclopediaEntry[] = [
  bloodVesselsEntry,
  bloodEntry,
];
