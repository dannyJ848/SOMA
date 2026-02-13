/**
 * Cardiovascular System Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 * Local comprehensive reference for offline access
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Heart Anatomy Entry
 */
export const heartAnatomyEntry: EncyclopediaEntry = {
  entryId: 'heart-anatomy',
  name: 'Heart Anatomy',
  nameEs: 'Anatomia del Corazon',
  entryType: 'anatomy',
  category: 'cardiovascular',
  summary: 'The muscular pump that propels blood through the pulmonary and systemic circulatory systems.',
  overview: {
    patient: 'The heart is a muscular pump about the size of your fist, located in the center of your chest. It beats about 100,000 times per day, pumping blood to your lungs to pick up oxygen and then to the rest of your body to deliver that oxygen. The heart has four chambers - two upper atria and two lower ventricles - plus four valves that keep blood flowing in the right direction.',
    intermediate: 'The heart is a four-chambered muscular organ located in the mediastinum. It consists of two atria (receiving chambers) and two ventricles (pumping chambers). The right side receives deoxygenated blood and pumps it to the lungs (pulmonary circulation). The left side receives oxygenated blood and pumps it to the body (systemic circulation). Four valves ensure unidirectional flow: tricuspid, pulmonary, mitral (bicuspid), and aortic. The heart wall consists of three layers: epicardium, myocardium, and endocardium.',
    professional: 'The heart is a muscular organ weighing 250-350g located in the middle mediastinum, oriented with base posterior-superior and apex anterior-inferior. It contains four chambers: right atrium (receives systemic venous return via SVC, IVC, coronary sinus), right ventricle (pumps to pulmonary circulation), left atrium (receives pulmonary venous return), and left ventricle (pumps to systemic circulation). The heart valves include atrioventricular valves (tricuspid right, mitral/bicuspid left) and semilunar valves (pulmonary, aortic). The cardiac skeleton (fibrous skeleton) provides structural support and electrical insulation.',
  },
  content: [
    {
      title: 'Location and Orientation',
      content: {
        patient: `The heart sits in the middle of your chest, between your lungs, in a space called the mediastinum. It's protected by the rib cage and sits behind the breastbone (sternum). The heart is tilted so that the right side is more forward and the left side is more back. The bottom tip of the heart, called the apex, points down and to the left. You can feel the heartbeat best at the apex, between the 4th and 5th ribs on the left side.`,
        intermediate: `The heart is located in the thoracic cavity within the mediastinum, posterior to the sternum and anterior to the vertebral column. It is obliquely oriented with the right side more anterior and the left side more posterior. The base is located at the level of the third costal cartilage and receives the great vessels. The apex is located at the fifth intercostal space, mid-clavicular line on the left side. This is the site of maximal impulse (PMI) where the heartbeat is palpated most strongly. The heart is enclosed in the pericardial sac.`,
        professional: `Anatomical position: The heart occupies the middle mediastinum, extending from T5-T8 vertebral levels. The base is formed by the left atrium (receiving pulmonary veins) and right atrium (receiving SVC/IVC), located at the level of T6-T9. The apex is formed by the left ventricle and is directed anteriorly, inferiorly, and to the left. Sternocostal surface: mainly right ventricle; diaphragmatic surface: mainly left ventricle; left pulmonary surface: mainly left ventricle; right pulmonary surface: mainly right atrium. The cardiac notch of the left lung accommodates the apex. Anatomical relationships: anterior - sternum, costal cartilages, lungs; posterior - esophagus, descending aorta, thoracic duct, vertebral column; superior - great vessels; inferior - central tendon of diaphragm.`,
      },
    },
    {
      title: 'Chambers and Blood Flow',
      content: {
        patient: `Blood flows through the heart in a specific pattern. Deoxygenated blood returns from the body through veins into the right atrium, then passes through the tricuspid valve into the right ventricle. The right ventricle pumps blood through the pulmonary valve to the lungs where it picks up oxygen. Oxygen-rich blood returns to the left atrium via pulmonary veins, passes through the mitral valve into the left ventricle, and is pumped through the aortic valve into the aorta to supply the entire body.`,
        intermediate: `The heart has four chambers with two separate circulatory circuits. The pulmonary circuit: Deoxygenated blood from systemic circulation enters the right atrium via SVC and IVC → passes through tricuspid valve → right ventricle → pulmonary semilunar valve → pulmonary trunk → lungs. The systemic circuit: Oxygenated blood returns from lungs to left atrium via pulmonary veins → passes through mitral (bicuspid) valve → left ventricle → aortic semilunar valve → aorta → systemic circulation. Atrial contraction contributes about 20% to ventricular filling (atrial kick); most filling occurs passively during ventricular relaxation.`,
        professional: `Cardiac chambers and flow pathway: Systemic venous return (SVC, IVC, coronary sinus) → right atrium (smooth posterior wall with openings of venae cavae and coronary sinus; anterior wall with pectinate muscles; fossa ovalis remnant of foramen ovale) → tricuspid valve (anterior, posterior, septal leaflets; attached to papillary muscles via chordae tendineae) → right ventricle (trabeculae carneae, moderator band containing right bundle branch; crescent-shaped in cross-section) → pulmonary valve (three semilunar cusps: anterior, left, right) → pulmonary trunk (bifurcates into right and left pulmonary arteries) → pulmonary capillaries (gas exchange) → pulmonary veins (four vessels; only veins carrying oxygenated blood) → left atrium (smooth walls; auricle with pectinate muscles) → mitral valve (two leaflets: anterior/aortic and posterior/mural; saddle-shaped annulus) → left ventricle (conical shape; twice as thick as right ventricle; trabeculae carneae but no moderator band) → aortic valve (three semilunar cusps: right, left, posterior/non-coronary; Valsalva sinuses contain coronary ostia) → ascending aorta → systemic circulation.`,
      },
    },
    {
      title: 'Heart Valves',
      content: {
        patient: `The heart has four valves that act like one-way doors, ensuring blood flows in only one direction. The tricuspid valve (three flaps) is between the right atrium and ventricle. The pulmonary valve is between the right ventricle and pulmonary artery. The mitral valve (two flaps, like a bishop's hat) is between the left atrium and ventricle. The aortic valve is between the left ventricle and aorta. Heartstrings (chordae tendineae) and papillary muscles anchor the tricuspid and mitral valves to prevent them from flipping backward under pressure.`,
        intermediate: `Atrioventricular (AV) valves prevent backflow from ventricles to atria. The tricuspid valve (right AV valve) has three cusps and is anchored by chordae tendineae to three papillary muscles. The mitral valve (left AV valve, bicuspid) has two cusps and is anchored to two papillary muscles. The papillary muscles contract with the ventricle, maintaining tension on the chordae tendineae to prevent valve prolapse. Semilunar valves prevent backflow from arteries to ventricles. The pulmonary valve guards the exit from the right ventricle; the aortic valve guards the exit from the left ventricle. Semilunar valves have three pocket-like cusps that fill with blood to close the valve when pressure drops.`,
        professional: `Valve anatomy: Right AV (tricuspid) valve - three leaflets (anterior, posterior, septal); fibrous trigone at septal origin; chordae tendineae (80% collagen, 20% elastin and endothelium) attach to anterior, posterior, and septal papillary muscles; annulus D-shaped. Left AV (mitral/bicuspid) valve - two leaflets (anterior/anterolateral ~1/3 circumference, posterior/posteromedial ~2/3 circumference but shorter height); saddle-shaped annulus (high points anterolaterally and posteromedially, low points mid-anterior and mid-posterior); two papillary muscles (anterolateral, posteromedial) with chordae attaching to both leaflets; commissures at anterolateral and posteromedial positions. Semilunar valves - three semilunar cusps with nodules at center of free edge; lunula (thickened arc below nodule); Valsalva sinuses behind each cusp (right and left coronary sinuses contain coronary ostia in aortic valve); pulmonary valve cusps named by facing position (anterior, left, right) while aortic cusps named by coronary relationship (right coronary, left coronary, non-coronary/posterior). Valve histology: fibrosa (collagen core), spongiosa (loose connective tissue), atrialis/ventricularis (endothelial lining).`,
      },
    },
    {
      title: 'Heart Wall Layers',
      content: {
        patient: `The heart wall has three layers. The epicardium is the outer protective layer. The myocardium is the thick middle layer of heart muscle that contracts to pump blood. The endocardium is the smooth inner lining that blood flows over. The heart also sits in a protective sac called the pericardium, which has fluid between its layers to reduce friction as the heart beats.`,
        intermediate: `The epicardium (visceral pericardium) is the outermost layer consisting of mesothelium and connective tissue; it contains coronary blood vessels and nerves. The myocardium is the thick muscular layer made of cardiac muscle cells arranged in complex swirling patterns around the chambers; it forms figure-8 patterns around atria and ventricles. The left ventricular myocardium is much thicker than the right because it must generate higher pressure. The endocardium is the inner endothelial lining that covers the chambers and valves; it is continuous with blood vessel endothelium. The pericardium surrounds the heart: fibrous pericardium (tough outer layer), parietal pericardium (serous), visceral pericardium (epicardium), with pericardial cavity containing lubricating fluid between parietal and visceral layers.`,
        professional: `Wall structure: Epicardium (visceral layer of serous pericardium) - mesothelium (simple squamous epithelium) overlying adipose tissue, coronary vessels, lymphatics, nerves; varies in thickness with fat content; extends over great vessels. Myocardium - cardiac muscle arranged in complex laminar architecture; subepicardial and subendocardial layers with middle helical layer; individual cardiomyocytes branch and interconnect via intercalated discs (desmosomes, fascia adherens, gap junctions); left ventricle 10-15mm thick (circular/oblique fibers for pressure generation), right ventricle 3-5mm thick (longitudinal fibers for volume displacement); specialized conducting myocardium in conduction system. Endocardium - endothelial lining (simple squamous) on thin connective tissue layer; covers trabeculae carneae, papillary muscles, chordae tendineae, valves; continuous with vascular endothelium; contains Purkinje fibers in subendocardial region. Pericardium - fibrous pericardium (dense irregular connective tissue, attached to sternum and central tendon of diaphragm); serous pericardium (parietal layer lining fibrous pericardium, visceral layer/epicardium on heart); pericardial cavity with 15-50mL serous fluid; pericardial sinuses (transverse, oblique) formed by pericardial reflections around great vessels.`,
      },
    },
    {
      title: 'Coronary Circulation',
      content: {
        patient: `The heart muscle itself needs oxygen and nutrients, which it gets from its own blood supply called the coronary circulation. The left coronary artery and right coronary artery branch from the aorta just above the aortic valve. The left artery splits into the circumflex artery and the left anterior descending artery (LAD, or "widow maker"). The right artery gives off the posterior descending artery. These vessels run on the surface of the heart in grooves called sulci.`,
        intermediate: `Coronary arteries arise from the aortic sinuses (Valsalva) just above the aortic valve. The right coronary artery (RCA) arises from the anterior aortic sinus and courses in the right atrioventricular groove, giving off marginal branches to the right ventricle and usually the posterior descending artery (PDA) supplying the inferior wall. The left coronary artery arises from the left posterior aortic sinus and is typically larger; it bifurcates into the left anterior descending (LAD) artery in the anterior interventricular groove (supplying anterior wall, septum) and the circumflex artery in the left atrioventricular groove (supplying lateral wall). Coronary dominance is determined by which artery gives off the PDA. Coronary veins parallel arteries and drain into the coronary sinus, which empties into the right atrium.`,
        professional: `Coronary anatomy: Left main coronary artery (LMCA) - 5-10mm long, arises from left sinus of Valsalva, bifurcates into LAD and circumflex (LCx); occasionally trifurcates with ramus intermedius. LAD (anterior interventricular artery) - courses in anterior interventricular groove toward apex, gives off diagonal branches (D1, D2, D3) to anterolateral wall and septal perforators to anterior 2/3 of septum; terminates as apical or continues in posterior groove. Circflex artery - courses in left AV groove, gives off obtuse marginal branches (OM1, OM2, OM3) to lateral wall; may give off posterolateral branches; terminates as variable posterolateral branch. Right coronary artery (RCA) - arises from right anterior sinus of Valsalva, courses in right AV groove, gives off conus artery (may arise separately), sinoatrial nodal artery (60% from RCA), marginal branches to right ventricle; terminates as PDA (in right-dominant circulation, 85%) supplying inferior wall and posterior 1/3 of septum, and posterolateral branch. Coronary dominance: right-dominant (PDA from RCA, 85%), left-dominant (PDA from LCx, 8%), codominant (dual supply, 7%). Coronary veins: great cardiac vein (with LAD then LCx), middle cardiac vein (with PDA), small cardiac vein (with RCA), anterior cardiac veins (right ventricle), all draining to coronary sinus (opens into right atrium near IVC orifice); Thebesian veins drain directly to chambers.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'right-atrium', structureName: 'Right Atrium', linkText: 'Right Atrium', relevance: 'Receives systemic venous return' },
    { structureId: 'left-ventricle', structureName: 'Left Ventricle', linkText: 'Left Ventricle', relevance: 'Main pumping chamber' },
    { structureId: 'mitral-valve', structureName: 'Mitral Valve', linkText: 'Mitral Valve', relevance: 'Left AV valve' },
    { structureId: 'aortic-valve', structureName: 'Aortic Valve', linkText: 'Aortic Valve', relevance: 'Systemic outflow valve' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-19-1',
      type: 'textbook',
      title: 'Anatomy and Physiology - 19.1 Heart Anatomy',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-1-heart-anatomy',
      citation: 'Betts JG, et al. Anatomy and Physiology. 19.1 Heart Anatomy. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'cardiac-conduction', entryType: 'physiology', name: 'Cardiac Conduction System', relationship: 'see-also' },
    { entryId: 'cardiac-cycle', entryType: 'physiology', name: 'Cardiac Cycle', relationship: 'see-also' },
    { entryId: 'blood-vessels', entryType: 'anatomy', name: 'Blood Vessels', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['heart anatomy', 'cardiac anatomy', 'heart chambers', 'heart valves', 'coronary arteries', 'myocardium'],
    tags: ['cardiology', 'anatomy', 'cardiovascular', 'heart'],
    synonyms: ['heart structure', 'cardiac structure', 'cor heart'],
  },
};

// Export all entries
export const cardiovascularSystemEntries: EncyclopediaEntry[] = [
  heartAnatomyEntry,
];
