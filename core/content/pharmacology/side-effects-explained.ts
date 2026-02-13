/**
 * Side Effects Explained Database
 *
 * Patient-friendly explanations of WHY common medications cause specific
 * side effects. Each entry provides 5 complexity levels (8th grade through
 * MD/professional) and Spanish translations.
 *
 * 15 medication-side-effect pairs covering the most common classes:
 * ACE inhibitors, statins, metformin, beta-blockers, SSRIs, NSAIDs,
 * warfarin, diuretics, PPIs, calcium channel blockers, opioids,
 * corticosteroids, antibiotics, benzodiazepines, antihistamines.
 */

import type { ComplexityLevel } from '../types';

// ============================================
// Interfaces
// ============================================

export interface SideEffectLevel {
  level: ComplexityLevel;
  whyItHappens: string;
  analogy?: string;
}

export interface SideEffectExplainedEntry {
  id: string;
  drugClass: string;
  drugClassEs: string;
  sideEffect: string;
  sideEffectEs: string;
  commonDrugs: string[];
  levels: {
    1: SideEffectLevel;
    2: SideEffectLevel;
    3: SideEffectLevel;
    4: SideEffectLevel;
    5: SideEffectLevel;
  };
  whatToWatch: string[];
  whatToWatchEs: string[];
  whenToCallDoctor: string[];
  whenToCallDoctorEs: string[];
  clinicalPearl: string;
}

// ============================================
// Compact Constructor
// ============================================

function se(
  id: string,
  drugClass: string,
  drugClassEs: string,
  sideEffect: string,
  sideEffectEs: string,
  commonDrugs: string[],
  l1Why: string, l1Analogy: string,
  l2Why: string, l2Analogy: string,
  l3Why: string, l3Analogy: string,
  l4Why: string,
  l5Why: string,
  whatToWatch: string[],
  whatToWatchEs: string[],
  whenToCallDoctor: string[],
  whenToCallDoctorEs: string[],
  clinicalPearl: string,
): SideEffectExplainedEntry {
  return {
    id, drugClass, drugClassEs, sideEffect, sideEffectEs, commonDrugs,
    levels: {
      1: { level: 1, whyItHappens: l1Why, analogy: l1Analogy },
      2: { level: 2, whyItHappens: l2Why, analogy: l2Analogy },
      3: { level: 3, whyItHappens: l3Why, analogy: l3Analogy },
      4: { level: 4, whyItHappens: l4Why },
      5: { level: 5, whyItHappens: l5Why },
    },
    whatToWatch, whatToWatchEs, whenToCallDoctor, whenToCallDoctorEs, clinicalPearl,
  };
}

// ============================================
// Database (15 entries)
// ============================================

export const SIDE_EFFECTS_EXPLAINED: Record<string, SideEffectExplainedEntry> = {

  // ── 1. ACE Inhibitors → Dry Cough ───────────

  ace_inhibitor_cough: se(
    'ace_inhibitor_cough',
    'ACE Inhibitors', 'Inhibidores de la ECA',
    'Dry cough', 'Tos seca',
    ['Lisinopril', 'Enalapril', 'Ramipril'],

    'These blood pressure pills stop your body from breaking down a chemical called bradykinin. When too much bradykinin builds up, it tickles the nerves in your throat and makes you cough.',
    'Imagine a drain in your sink getting blocked. Water (bradykinin) backs up and overflows, irritating everything around it.',

    'ACE inhibitors block the enzyme that normally breaks down bradykinin. Extra bradykinin in your airways irritates nerve endings and triggers a dry, tickly cough.',
    'It is like turning off a recycling machine. The material it used to process piles up and causes problems nearby.',

    'ACE inhibitors block angiotensin-converting enzyme, which also degrades bradykinin and substance P. Accumulation of these peptides in the bronchial mucosa stimulates C-fiber sensory neurons, provoking the cough reflex.',
    'The enzyme has two jobs, like a worker who both processes orders and clears the warehouse. Block the worker and the warehouse floods.',

    'ACE (kininase II) is the primary enzyme responsible for bradykinin degradation. Inhibition leads to bradykinin and substance P accumulation in pulmonary tissue. These peptides activate C-fiber afferents via B2 receptors and NK1 receptors respectively, sensitizing the cough reflex arc. Prostaglandin synthesis may also be upregulated, further lowering the cough threshold.',

    'Bradykinin accumulates due to ACE inhibition of kininase II in the pulmonary vascular endothelium. B2-receptor activation on bronchial C-fibers triggers TRPV1 and TRPA1 channels, lowering the cough threshold. Substance P and prostaglandins (PGE2, PGI2) are co-elevated. Genetic polymorphisms in the bradykinin B2 receptor and ACE gene (II genotype) increase susceptibility. Incidence is 5-35%, higher in women and East Asian populations. The effect is class-wide and dose-independent. ARBs are the standard alternative since they do not affect bradykinin metabolism.',

    ['Persistent dry cough, especially at night', 'Tickling sensation in the throat', 'Cough that started after beginning the medication'],
    ['Tos seca persistente, especialmente por la noche', 'Sensacion de cosquilleo en la garganta', 'Tos que comenzo despues de iniciar el medicamento'],

    ['Cough that keeps you from sleeping for more than a week', 'Coughing up blood', 'Difficulty breathing or wheezing', 'Swelling of face, lips, or tongue (may indicate angioedema)'],
    ['Tos que le impide dormir por mas de una semana', 'Toser sangre', 'Dificultad para respirar o sibilancias', 'Hinchazon de cara, labios o lengua (puede indicar angioedema)'],

    'ACE inhibitor cough typically appears within 1-6 months of starting therapy and resolves within 1-4 weeks of discontinuation. Switching to an ARB resolves the cough in >90% of cases because ARBs do not inhibit bradykinin degradation.',
  ),

  // ── 2. Statins → Muscle Pain ────────────────

  statin_myalgia: se(
    'statin_myalgia',
    'Statins', 'Estatinas',
    'Muscle pain (myalgia)', 'Dolor muscular (mialgia)',
    ['Atorvastatin', 'Simvastatin', 'Rosuvastatin'],

    'Statins lower cholesterol, but they can also slow down the tiny power plants inside your muscle cells. When those power plants struggle, your muscles feel sore and weak.',
    'Think of your muscle cells like cars. Statins can accidentally clog the fuel line to the engine, making the car sputter and slow down.',

    'Statins block an enzyme used to make cholesterol, but that same pathway also makes a molecule called CoQ10 that your muscles need for energy. Less CoQ10 means your muscle cells cannot produce energy efficiently, leading to soreness.',
    'It is like shutting down a factory that makes two products: one you want to stop (cholesterol) and one your muscles need (CoQ10).',

    'Statins inhibit HMG-CoA reductase in the mevalonate pathway, which also produces coenzyme Q10 (ubiquinone) and isoprenoids essential for mitochondrial electron transport. Reduced CoQ10 impairs mitochondrial ATP production in skeletal muscle, potentially causing myalgia, weakness, or rarely rhabdomyolysis.',
    'The mevalonate pathway is like a production line with multiple exits. Blocking the entrance stops all products, not just cholesterol.',

    'HMG-CoA reductase inhibition depletes mevalonate-derived intermediates including farnesyl pyrophosphate and geranylgeranyl pyrophosphate (needed for protein prenylation and cell signaling) and ubiquinone (CoQ10), a critical electron carrier in mitochondrial complex III. Impaired oxidative phosphorylation reduces ATP yield in type II muscle fibers. Additionally, disrupted isoprenylation of small GTPases (Rab, Ras) may impair myocyte calcium handling and membrane integrity. Atrogin-1 upregulation promotes muscle protein degradation.',

    'Statin myotoxicity is multifactorial: (1) CoQ10 depletion impairs complex III of the electron transport chain; (2) reduced prenylation of small GTPases disrupts intracellular signaling and calcium homeostasis; (3) cholesterol depletion in sarcolemmal membranes alters chloride channel conductance; (4) upregulation of atrogin-1 via FoxO transcription factors accelerates proteasomal degradation. Risk factors include CYP3A4 inhibitors (simvastatin, lovastatin), hypothyroidism, renal impairment, high-dose therapy, and SLCO1B1 c.521T>C polymorphism. Incidence: 5-10% in trials, up to 20% in observational studies. CoQ10 supplementation evidence remains inconclusive. Rhabdomyolysis occurs in <0.1%.',

    ['Unexplained muscle aches, tenderness, or weakness', 'Pain that is worse after exercise', 'Symptoms typically in large muscle groups (thighs, calves, back)', 'Dark-colored urine (sign of rhabdomyolysis)'],
    ['Dolores musculares inexplicables, sensibilidad o debilidad', 'Dolor que empeora despues del ejercicio', 'Sintomas tipicamente en grupos musculares grandes (muslos, pantorrillas, espalda)', 'Orina de color oscuro (signo de rabdomiolisis)'],

    ['Severe muscle pain or weakness that limits daily activities', 'Dark or cola-colored urine', 'Fever with muscle pain', 'Muscle pain with elevated CK levels (confirmed by blood test)'],
    ['Dolor muscular severo o debilidad que limita actividades diarias', 'Orina oscura o color cola', 'Fiebre con dolor muscular', 'Dolor muscular con niveles elevados de CK (confirmado por analisis de sangre)'],

    'Statin myalgia is the most common reason for statin discontinuation. Strategies include switching to a hydrophilic statin (rosuvastatin, pravastatin), using alternate-day dosing, or trying a lower dose. CK levels should be checked if symptoms are significant. True rhabdomyolysis is very rare but requires immediate discontinuation.',
  ),

  // ── 3. Metformin → GI Upset ─────────────────

  metformin_gi: se(
    'metformin_gi',
    'Metformin', 'Metformina',
    'GI upset (nausea, diarrhea, bloating)', 'Malestar gastrointestinal (nauseas, diarrea, hinchazon)',
    ['Metformin', 'Metformin XR'],

    'Metformin for diabetes can upset your stomach because it increases a chemical called serotonin in your gut. It can also change how your intestines absorb sugar, which produces extra gas and loose stools.',
    'It is like adding too much soap to a dishwasher. Everything gets stirred up more than it should, causing a bubbly overflow.',

    'Metformin raises serotonin levels in your gut, which speeds up how quickly food moves through your intestines. It also changes the way your gut bacteria work and how sugar is absorbed, leading to bloating, nausea, and diarrhea.',
    'Your gut is like a conveyor belt. Metformin makes it run too fast at first, so things do not get processed smoothly.',

    'Metformin increases serotonin release from intestinal enterochromaffin cells, stimulating 5-HT3 receptors on vagal afferents to trigger nausea. It also promotes intestinal glucose utilization (increasing lactate), alters bile acid metabolism, and shifts gut microbiota composition, all contributing to osmotic diarrhea and bloating.',
    'The gut has its own nervous system. Metformin turns up the volume on multiple channels at once, creating a temporary overload.',

    'Metformin accumulates in enterocytes (500-fold higher concentration than plasma) and stimulates serotonin (5-HT) release from enterochromaffin cells. 5-HT3 receptor activation on vagal and enteric afferents drives nausea, emesis, and altered motility. Increased anaerobic glucose metabolism in the intestinal wall raises lactate, creating an osmotic gradient. Metformin also inhibits bile salt reuptake in the ileum and alters the Firmicutes/Bacteroidetes ratio, further disrupting normal absorption and fermentation patterns.',

    'The GI effects are multimechanistic: (1) Metformin-induced 5-HT release from enterochromaffin cells via OCT1/OCT3 transporters activates 5-HT3 vagal afferents; (2) enhanced intestinal anaerobic glycolysis increases luminal lactate, creating osmotic diarrhea; (3) AMPK activation in enterocytes alters tight junction permeability; (4) bile acid malabsorption from inhibited apical sodium-dependent bile acid transporter (ASBT); (5) microbiome shifts (increased Akkermansia, altered short-chain fatty acid production). OCT1 polymorphisms (SLC22A1) significantly predict GI intolerance. Extended-release formulations reduce peak intestinal concentration, halving GI side effect incidence. Effects typically attenuate over 2-4 weeks with gradual dose titration.',

    ['Nausea, especially after meals', 'Diarrhea or loose stools', 'Bloating or excessive gas', 'Metallic taste in mouth', 'Reduced appetite'],
    ['Nauseas, especialmente despues de comer', 'Diarrea o heces sueltas', 'Hinchazon o gases excesivos', 'Sabor metalico en la boca', 'Apetito reducido'],

    ['Severe diarrhea lasting more than a few days', 'Inability to keep food or fluids down', 'Signs of dehydration (dizziness, dry mouth, dark urine)', 'Unusual muscle pain, difficulty breathing, or extreme fatigue (rare signs of lactic acidosis)'],
    ['Diarrea severa que dura mas de unos pocos dias', 'Incapacidad de retener alimentos o liquidos', 'Signos de deshidratacion (mareos, boca seca, orina oscura)', 'Dolor muscular inusual, dificultad para respirar o fatiga extrema (signos raros de acidosis lactica)'],

    'GI side effects affect ~25% of patients and are the primary reason for metformin discontinuation. Starting at 500mg once daily with food and increasing by 500mg weekly dramatically reduces intolerance. Metformin XR cuts GI side effects roughly in half. Most patients adapt within 2-4 weeks.',
  ),

  // ── 4. Beta-Blockers → Fatigue & Cold Extremities ──

  beta_blocker_fatigue: se(
    'beta_blocker_fatigue',
    'Beta-Blockers', 'Betabloqueantes',
    'Fatigue and cold extremities', 'Fatiga y extremidades frias',
    ['Metoprolol', 'Atenolol', 'Propranolol', 'Carvedilol'],

    'Beta-blockers slow your heart down and make it pump less forcefully. This means less blood gets pushed out to your muscles and fingers and toes, so you feel tired and your hands and feet get cold.',
    'Imagine turning down the power on a water pump. Less water reaches the far ends of the hose, and the flow is weaker everywhere.',

    'These medications block adrenaline signals to your heart, lowering your heart rate and the force of each beat. With reduced blood flow, your muscles get less oxygen (causing fatigue) and your extremities receive less warm blood (causing cold hands and feet).',
    'Your heart is like a central heater. Beta-blockers turn down the thermostat, so rooms farthest from the heater (fingers and toes) get cold first.',

    'Beta-blockers antagonize beta-1 adrenergic receptors in the heart, reducing chronotropy and inotropy. The decrease in cardiac output reduces oxygen delivery to skeletal muscles, causing fatigue. Non-selective agents also block beta-2 receptors in peripheral blood vessels, preventing vasodilation and causing peripheral vasoconstriction, which results in cold extremities.',
    'Beta-1 blockade turns down the heart pump; beta-2 blockade narrows the peripheral pipes. Both reduce blood delivery to extremities.',

    'Beta-1 antagonism reduces heart rate (negative chronotropy) and contractility (negative inotropy), decreasing cardiac output by 15-20%. Reduced ejection fraction lowers mean arterial pressure and peripheral perfusion. Non-selective beta-blockers (propranolol) additionally block beta-2 receptors on vascular smooth muscle, eliminating catecholamine-mediated vasodilation in skeletal muscle and skin vasculature. Unopposed alpha-1 adrenergic tone causes peripheral vasoconstriction. CNS penetration (lipophilic agents like propranolol, metoprolol) may contribute to central fatigue via reduced noradrenergic tone in the locus coeruleus.',

    'Fatigue is multimechanistic: (1) reduced cardiac output (decreased stroke volume and heart rate) lowers systemic oxygen delivery, especially during exertion; (2) beta-2 blockade in skeletal muscle vasculature prevents exercise-induced vasodilation, impairing muscle perfusion during aerobic activity; (3) impaired hepatic glycogenolysis (beta-2-mediated) may blunt exercise fuel mobilization; (4) CNS effects via lipophilic agents reduce central noradrenergic and serotonergic tone. Cold extremities result from unopposed alpha-1 peripheral vasoconstriction when beta-2-mediated vasodilation is blocked. Beta-1 selective agents (bisoprolol, nebivolol) and vasodilating beta-blockers (carvedilol with alpha-1 blockade, nebivolol with NO-mediated vasodilation) cause fewer peripheral vascular symptoms. Symptoms often improve over weeks as compensatory mechanisms engage.',

    ['Feeling tired even after adequate sleep', 'Reduced exercise tolerance', 'Cold fingers and toes', 'Dizziness when standing up quickly', 'Slow heart rate'],
    ['Sentirse cansado incluso despues de dormir bien', 'Tolerancia reducida al ejercicio', 'Dedos de manos y pies frios', 'Mareos al levantarse rapidamente', 'Frecuencia cardiaca lenta'],

    ['Extreme fatigue that prevents daily activities', 'Heart rate below 50 beats per minute with symptoms', 'Fainting or near-fainting episodes', 'Fingers or toes turning blue or white', 'Worsening shortness of breath'],
    ['Fatiga extrema que impide actividades diarias', 'Frecuencia cardiaca por debajo de 50 latidos por minuto con sintomas', 'Episodios de desmayo o casi desmayo', 'Dedos de manos o pies que se ponen azules o blancos', 'Empeoramiento de la falta de aire'],

    'Beta-1 selective agents (metoprolol, bisoprolol) cause less peripheral vasoconstriction than non-selective agents (propranolol). Nebivolol augments nitric oxide-mediated vasodilation and may be best tolerated. Fatigue often improves after 2-4 weeks. Never stop beta-blockers abruptly; rebound tachycardia can be dangerous.',
  ),

  // ── 5. SSRIs → Sexual Dysfunction & Weight Gain ──

  ssri_sexual_weight: se(
    'ssri_sexual_weight',
    'SSRIs', 'ISRS (Inhibidores Selectivos de la Recaptacion de Serotonina)',
    'Sexual dysfunction and weight gain', 'Disfuncion sexual y aumento de peso',
    ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Paroxetine'],

    'These antidepressants boost serotonin in your brain to improve mood. But serotonin also affects other body systems: too much can lower your interest in sex and make it harder to reach orgasm. Over time, changes in appetite and metabolism can lead to weight gain.',
    'Serotonin is like a volume knob. Turning it up for mood can accidentally turn down the dial for sexual desire and turn up the dial for appetite.',

    'SSRIs increase serotonin throughout the nervous system. Extra serotonin in the spinal cord and brain areas that control sexual response inhibits arousal and orgasm. Serotonin also influences appetite-regulating centers, and over months, some people eat more or burn fewer calories, leading to weight gain.',
    'It is like adjusting one thermostat that is connected to multiple rooms. Fixing the temperature in one room changes it in others too.',

    'Elevated serotonin activates 5-HT2A and 5-HT3 receptors in spinal pathways controlling sexual reflexes, inhibiting arousal, erection, lubrication, and orgasm. Serotonin also suppresses dopamine and norepinephrine in the mesolimbic pathway, reducing libido. Weight gain involves 5-HT2C receptor downregulation over time, disinhibiting appetite, and antihistaminic properties of some SSRIs (especially paroxetine) that increase food intake.',
    'Serotonin acts as a brake on sexual circuits and, over time, loosens the brake on appetite circuits.',

    'Sexual dysfunction: 5-HT2A receptor activation in the medial preoptic area and nucleus paragigantocellularis inhibits dopaminergic and noradrenergic pro-sexual pathways. Spinal 5-HT2A and 5-HT3 activation inhibits the ejaculatory and orgasmic reflex arc. Nitric oxide-mediated genital vasodilation is also impaired. Incidence: 40-65%, highest with paroxetine (most anticholinergic, highest 5-HT affinity), lowest with bupropion (which is not an SSRI). Weight gain: acute 5-HT2C agonism initially suppresses appetite, but chronic receptor downregulation produces a rebound increase. Histamine H1 antagonism (paroxetine), reduced metabolic rate, and improved caloric intake from depression remission all contribute. Average gain: 2-5 kg over 6-12 months.',

    'Sexual dysfunction involves multiple serotonergic mechanisms: (1) 5-HT2A activation in the medial preoptic area and paragigantocellular nucleus inhibits pro-sexual dopaminergic and noradrenergic pathways; (2) 5-HT2C agonism in the ventral tegmental area reduces dopamine release in the nucleus accumbens, decreasing libido; (3) spinal 5-HT2A/5-HT3 activation raises the threshold for ejaculatory/orgasmic reflexes via inhibitory interneurons; (4) peripheral 5-HT effects reduce NO-mediated genital engorgement. Weight gain mechanisms: chronic 5-HT2C downregulation disinhibits hypothalamic POMC/AgRP appetite circuits; H1 antagonism (paroxetine >> others) directly stimulates appetite; insulin sensitivity changes may shift metabolic set-point. Bupropion (NDRI) and vortioxetine show lowest sexual side effects. Adding bupropion or switching to an SNRI can partially mitigate sexual dysfunction. Fluoxetine is most weight-neutral among SSRIs.',

    ['Decreased interest in sex', 'Difficulty reaching orgasm', 'Erectile dysfunction or reduced lubrication', 'Gradual weight gain over months', 'Increased appetite or food cravings'],
    ['Disminucion del interes en las relaciones sexuales', 'Dificultad para alcanzar el orgasmo', 'Disfuncion erectil o lubricacion reducida', 'Aumento gradual de peso durante meses', 'Aumento del apetito o antojos de comida'],

    ['Sexual side effects causing significant relationship distress', 'Rapid or significant weight gain (more than 5% of body weight)', 'Worsening depression due to side effects', 'Any thoughts of stopping the medication (do not stop without guidance)'],
    ['Efectos secundarios sexuales que causan angustia significativa en la relacion', 'Aumento de peso rapido o significativo (mas del 5% del peso corporal)', 'Empeoramiento de la depresion debido a efectos secundarios', 'Cualquier pensamiento de dejar el medicamento (no suspender sin orientacion medica)'],

    'Sexual dysfunction is the most common reason for SSRI non-adherence. Management options include dose reduction, drug holidays (risky for short half-life agents), switching to bupropion or vortioxetine, or adding bupropion. Paroxetine has the highest rates of both sexual dysfunction and weight gain among SSRIs.',
  ),

  // ── 6. NSAIDs → Stomach Ulcers & Kidney Issues ──

  nsaid_gi_renal: se(
    'nsaid_gi_renal',
    'NSAIDs', 'AINEs (Antiinflamatorios No Esteroideos)',
    'Stomach ulcers and kidney problems', 'Ulceras estomacales y problemas renales',
    ['Ibuprofen', 'Naproxen', 'Diclofenac', 'Ketorolac'],

    'Pain relievers like ibuprofen work by blocking chemicals that cause pain and swelling. But those same chemicals also protect your stomach lining and help your kidneys work properly. Without that protection, your stomach can develop sores and your kidneys may struggle.',
    'It is like removing the protective coating from a non-stick pan. The pan still works, but food starts sticking and the surface gets damaged.',

    'NSAIDs block enzymes called COX-1 and COX-2 that produce prostaglandins. While COX-2 prostaglandins cause pain and inflammation, COX-1 prostaglandins protect the stomach lining by increasing mucus and blood flow, and keep the kidneys filtering properly. Blocking both causes stomach ulcers and can reduce kidney function.',
    'These drugs cannot tell the difference between the bad prostaglandins (pain) and the good ones (protection). They block them all like a net catching every fish in the stream.',

    'NSAIDs inhibit cyclooxygenase-1 (COX-1), which produces prostaglandins PGE2 and PGI2 that maintain the gastric mucosal barrier via mucus secretion, bicarbonate production, and mucosal blood flow. Loss of this protection allows acid to damage the epithelium. In the kidneys, prostaglandins maintain afferent arteriolar vasodilation; COX inhibition reduces renal blood flow and GFR, especially when renal perfusion is already compromised.',
    'COX-1 prostaglandins are like the maintenance crew for both the stomach wall and the kidney pipes. NSAIDs fire the crew.',

    'GI effects: COX-1 inhibition depletes gastroprotective PGE2 and PGI2, reducing mucus/bicarbonate secretion, mucosal blood flow, and epithelial cell turnover. Direct topical toxicity of the acidic NSAID molecule in gastric mucosa compounds the systemic prostaglandin deficiency. Ulcer risk is 3-5x baseline; concurrent H. pylori or corticosteroids further multiply risk. Renal effects: prostaglandins (PGE2, PGI2) maintain afferent arteriolar vasodilation and medullary blood flow. COX inhibition causes afferent vasoconstriction, reducing GFR. In states of reduced effective circulating volume (heart failure, cirrhosis, dehydration), prostaglandin-dependent renal perfusion becomes critical, and NSAIDs can precipitate acute kidney injury. Chronic use may cause papillary necrosis and chronic interstitial nephritis.',

    'GI: COX-1-derived PGE2 (via EP3/EP4 receptors) stimulates mucus and bicarbonate secretion, maintains mucosal blood flow, and promotes epithelial restitution. Loss of this cytoprotection exposes epithelium to luminal acid and pepsin. NSAIDs also uncouple oxidative phosphorylation in mucosal cells (topical injury) and impair platelet aggregation (TXA2 reduction), worsening bleeding from existing lesions. Renal: afferent arteriolar PGI2 and PGE2 counterbalance angiotensin II and norepinephrine-mediated vasoconstriction. COX inhibition shifts the balance toward vasoconstriction, reducing RBF and GFR. The "triple whammy" (NSAID + ACEi/ARB + diuretic) removes all compensatory vasodilatory mechanisms, dramatically increasing AKI risk (OR ~3-4). COX-2 selective agents (celecoxib) reduce GI risk by ~50% but carry equivalent renal risk and potentially increased cardiovascular thrombotic risk due to PGI2/TXA2 imbalance.',

    ['Stomach pain or burning, especially on an empty stomach', 'Heartburn or indigestion', 'Dark or tar-colored stools (sign of GI bleeding)', 'Decreased urine output', 'Swelling in ankles or feet'],
    ['Dolor de estomago o ardor, especialmente con el estomago vacio', 'Acidez o indigestion', 'Heces oscuras o de color alquitran (signo de sangrado gastrointestinal)', 'Disminucion de la produccion de orina', 'Hinchazon en tobillos o pies'],

    ['Black, tarry, or bloody stools', 'Vomiting blood or material that looks like coffee grounds', 'Severe stomach pain', 'Sudden decrease in urination or inability to urinate', 'Unexplained swelling or rapid weight gain'],
    ['Heces negras, alquitranadas o con sangre', 'Vomitar sangre o material que parece granos de cafe', 'Dolor de estomago severo', 'Disminucion repentina de la orina o incapacidad para orinar', 'Hinchazon inexplicable o aumento rapido de peso'],

    'GI risk is highest in the first 30 days of use, in patients over 65, and with concurrent corticosteroids or anticoagulants. Use the lowest dose for the shortest duration. Co-prescribe a PPI for high-risk patients. Avoid NSAIDs if eGFR < 30 or in patients on the "triple whammy" combination.',
  ),

  // ── 7. Warfarin → Bleeding ──────────────────

  warfarin_bleeding: se(
    'warfarin_bleeding',
    'Warfarin', 'Warfarina',
    'Bleeding', 'Sangrado',
    ['Warfarin (Coumadin)'],

    'Warfarin prevents blood clots by slowing down your liver\'s ability to make clotting proteins. This is helpful for preventing dangerous clots, but it also means cuts and injuries take longer to stop bleeding, and you can bleed more easily.',
    'Think of warfarin as dimming the stickiness of your blood. It flows better through tight spaces, but it also does not plug leaks as quickly.',

    'Warfarin blocks vitamin K, which your liver needs to make four important clotting factors. With fewer clotting factors, blood cannot form clots as easily. This prevents harmful clots but also means even minor injuries can cause more bleeding than usual.',
    'Your clotting system is like a construction crew with four key workers. Warfarin sends those workers home, so the crew cannot build walls (clots) as fast.',

    'Warfarin inhibits vitamin K epoxide reductase (VKORC1), preventing recycling of vitamin K to its active form. Without active vitamin K, the liver cannot gamma-carboxylate clotting factors II, VII, IX, and X, rendering them non-functional. This anticoagulant effect prevents thrombosis but increases bleeding risk at all sites.',
    'Vitamin K is recycled like a rechargeable battery for clotting. Warfarin breaks the charger, so the batteries (clotting factors) slowly die.',

    'Warfarin inhibits VKORC1 in hepatic microsomes, blocking reduction of vitamin K epoxide to the active hydroquinone form. Without reduced vitamin K, gamma-glutamyl carboxylase cannot add calcium-binding gamma-carboxyglutamic acid (Gla) residues to factors II, VII, IX, X and proteins C and S. Non-carboxylated factors are released as non-functional PIVKAs (Proteins Induced by Vitamin K Absence). Factor VII has the shortest half-life (6 hours), so PT/INR rises first, but full anticoagulation requires depletion of factor II (60-72 hour half-life). Bleeding risk increases exponentially as INR exceeds 4.0.',

    'VKORC1 inhibition prevents vitamin K hydroquinone regeneration, halting gamma-carboxylation of Gla-domain residues on factors II (72h half-life), VII (6h), IX (24h), X (36h), protein C (8h), and protein S (30h). Early protein C depletion (short half-life) can create a transient prothrombotic state (explains warfarin-induced skin necrosis in protein C deficiency). Bleeding risk correlates with INR, age, concurrent antiplatelet agents, and genetic polymorphisms: CYP2C9 (*2, *3 alleles reduce clearance of S-warfarin) and VKORC1 (-1639G>A) predict dose requirements. INR variability from diet (vitamin K intake), drugs (CYP2C9/3A4 interactions), and alcohol is the primary safety challenge. Supratherapeutic INR management: hold warfarin, vitamin K (oral for INR 4.5-10; IV for active bleeding), 4-factor PCC for life-threatening hemorrhage.',

    ['Unexplained bruising or bruises that are larger than usual', 'Bleeding from gums when brushing teeth', 'Nosebleeds that are hard to stop', 'Heavier menstrual periods', 'Blood in urine (pink or red) or stool'],
    ['Moretones inexplicables o mas grandes de lo usual', 'Sangrado de encias al cepillarse los dientes', 'Hemorragias nasales dificiles de detener', 'Periodos menstruales mas abundantes', 'Sangre en la orina (rosada o roja) o en las heces'],

    ['Bleeding that will not stop after 10 minutes of pressure', 'Vomiting blood or coughing up blood', 'Severe headache, confusion, or vision changes (may indicate brain bleeding)', 'Blood in stool or very dark stools', 'Severe or sudden abdominal or back pain'],
    ['Sangrado que no se detiene despues de 10 minutos de presion', 'Vomitar sangre o toser sangre', 'Dolor de cabeza severo, confusion o cambios en la vision (puede indicar sangrado cerebral)', 'Sangre en las heces o heces muy oscuras', 'Dolor abdominal o de espalda severo o repentino'],

    'Target INR for most indications is 2.0-3.0 (mechanical valves: 2.5-3.5). INR should be monitored weekly when initiating therapy and at least monthly when stable. Patients must maintain consistent vitamin K intake and report all new medications. Warfarin has more drug interactions than almost any other medication.',
  ),

  // ── 8. Diuretics → Electrolyte Imbalance ────

  diuretic_electrolyte: se(
    'diuretic_electrolyte',
    'Diuretics', 'Diureticos',
    'Electrolyte imbalance', 'Desequilibrio electrolitico',
    ['Furosemide', 'Hydrochlorothiazide', 'Spironolactone', 'Chlorthalidone'],

    'Water pills make your kidneys remove extra water and salt through urine. But along with the water, important minerals like potassium, sodium, and magnesium also get flushed out. Without enough of these minerals, you can feel weak, dizzy, or get muscle cramps.',
    'It is like draining a fish tank to lower the water level. If you are not careful, you flush out the fish food and minerals that the fish need to stay healthy.',

    'Diuretics work at specific parts of the kidney to block salt reabsorption, pulling water along with it. Different types lose different electrolytes: loop diuretics (furosemide) waste potassium, sodium, magnesium, and calcium; thiazides waste potassium and sodium but retain calcium; potassium-sparing diuretics (spironolactone) can cause too much potassium.',
    'Each type of diuretic is like a different sieve. They all remove water, but each lets different minerals pass through.',

    'Loop diuretics block the Na-K-2Cl cotransporter (NKCC2), losing Na+, K+, Mg2+, and Ca2+ in urine. Thiazides block the Na-Cl cotransporter (NCC) in the distal tubule, wasting K+ and Na+ but enhancing Ca2+ reabsorption. Both cause hypokalemia via increased distal sodium delivery stimulating aldosterone-mediated K+ secretion. Potassium-sparing agents (spironolactone, amiloride) block aldosterone or ENaC, retaining K+ but risking hyperkalemia.',
    'The kidney has sequential filters. Different diuretics plug different filters, each with its own mineral profile leaking through.',

    'Loop diuretics: NKCC2 blockade in the thick ascending limb abolishes the lumen-positive transepithelial voltage that drives paracellular Ca2+ and Mg2+ reabsorption. Na+ and K+ loss is direct. Compensatory increased distal delivery stimulates principal cell ENaC and ROMK, augmenting K+ and H+ secretion (hypokalemic metabolic alkalosis). Thiazides: NCC blockade in the DCT increases intracellular Na+ depletion, enhancing basolateral NCX (Na/Ca exchanger) activity, paradoxically increasing Ca2+ reabsorption. K+ loss mirrors loops via distal flow-dependent secretion. Potassium-sparing: mineralocorticoid receptor antagonists (spironolactone, eplerenone) and ENaC blockers (amiloride, triamterene) reduce K+ secretion but risk life-threatening hyperkalemia, especially with concurrent ACEi/ARB or in CKD.',

    'Electrolyte disturbances are the most clinically significant diuretic adverse effects. Loops: hypokalemia, hypomagnesemia, hypocalcemia, hyponatremia, metabolic alkalosis. Mechanism: NKCC2 blockade eliminates the lumen-positive potential driving paracellular divalent cation reabsorption; increased distal Na+ delivery enhances ENaC-mediated Na+ reabsorption coupled to K+ and H+ secretion via ROMK and H+-ATPase. Thiazides: hypokalemia, hyponatremia (impaired diluting segment), hypercalcemia (enhanced NCX), hypomagnesemia (downregulated TRPM6). Thiazide-induced hyponatremia is the most common drug-induced hyponatremia in the elderly, mediated by impaired free water excretion and ADH-independent aquaporin-2 upregulation. Potassium-sparing: hyperkalemia risk is dose-dependent and synergistic with RAAS inhibitors. Monitoring frequency should be highest in the first 2 weeks of initiation or dose changes, in elderly, and in patients with renal impairment.',

    ['Muscle cramps or weakness', 'Feeling very thirsty', 'Dizziness or lightheadedness', 'Irregular heartbeat or palpitations', 'Confusion or mental changes (severe cases)'],
    ['Calambres o debilidad muscular', 'Sentir mucha sed', 'Mareos o aturdimiento', 'Latidos irregulares o palpitaciones', 'Confusion o cambios mentales (casos severos)'],

    ['Irregular or racing heartbeat', 'Severe muscle weakness or inability to move', 'Fainting or near-fainting', 'Persistent vomiting preventing fluid intake', 'Confusion, seizures, or altered consciousness'],
    ['Latidos irregulares o acelerados', 'Debilidad muscular severa o incapacidad para moverse', 'Desmayo o casi desmayo', 'Vomito persistente que impide ingerir liquidos', 'Confusion, convulsiones o alteracion de la conciencia'],

    'Electrolyte monitoring should occur within 1-2 weeks of starting or changing diuretic dose. Hypokalemia (<3.5 mEq/L) increases the risk of digoxin toxicity and cardiac arrhythmias. Combining a loop or thiazide with a potassium-sparing agent can help maintain K+ balance but requires careful monitoring.',
  ),

  // ── 9. PPIs → B12 Deficiency & Bone Loss ────

  ppi_b12_bone: se(
    'ppi_b12_bone',
    'PPIs (Proton Pump Inhibitors)', 'IBP (Inhibidores de la Bomba de Protones)',
    'B12 deficiency and bone loss', 'Deficiencia de B12 y perdida osea',
    ['Omeprazole', 'Pantoprazole', 'Esomeprazole', 'Lansoprazole'],

    'Acid-reducing medications stop your stomach from making acid. You need stomach acid to release vitamin B12 from food and to absorb calcium properly. Over many months, low acid can lead to low B12 (causing tiredness and nerve problems) and weaker bones.',
    'Stomach acid is like a key that unlocks nutrients from food. Without the key, B12 and calcium stay locked inside and pass right through you.',

    'PPIs block the stomach\'s acid-producing pumps nearly completely. Vitamin B12 is bound to proteins in food and requires acid and the enzyme pepsin to be released. Without sufficient acid, B12 is not freed for absorption. Similarly, calcium (especially carbonate forms) needs an acidic environment to dissolve and be absorbed, so long-term acid suppression can weaken bones.',
    'Your stomach is like a chemical processing plant. PPIs shut down the main reactor, so raw materials (B12, calcium) do not get processed for the body to use.',

    'PPIs irreversibly inhibit H+/K+-ATPase on parietal cells, raising gastric pH above 4. Pepsinogen requires acid for activation to pepsin, which proteolytically cleaves food-bound cobalamin (B12) from carrier proteins. Without pepsin activity, B12 remains protein-bound and cannot bind intrinsic factor for ileal absorption. Calcium carbonate solubility is pH-dependent; achlorhydric conditions reduce ionized calcium availability, impairing intestinal absorption and potentially increasing fracture risk over years of use.',
    'Acid is the first step in a chain reaction: acid activates pepsin, pepsin frees B12, and acid dissolves calcium. Removing the first domino stops the whole chain.',

    'B12 malabsorption: gastric acid activates pepsinogen to pepsin (optimal pH <3). Pepsin cleaves R-proteins (haptocorrins) from dietary cobalamin, allowing transfer to intrinsic factor in the duodenum. PPI-induced hypochlorhydria (pH >4) prevents pepsinogen activation, leaving B12 protein-bound. Risk increases after >2 years of continuous use. Serum B12 may be low-normal; methylmalonic acid is a more sensitive marker. Bone effects: calcium carbonate requires pH <4 for dissociation to Ca2+. PPI-induced achlorhydria reduces calcium bioavailability by up to 50%. Additionally, emerging evidence suggests PPIs may directly inhibit osteoclast vacuolar H+-ATPase (structurally similar to gastric H+/K+-ATPase) and reduce osteoblast activity, though this remains debated. Fracture risk increases ~30% for hip fractures with >1 year of use.',

    'B12: PPI-induced achlorhydria prevents pepsinogen activation (requires pH <3), halting proteolytic release of cobalamin from food proteins. Crystalline B12 (supplements) does not require acid for absorption, so supplementation bypasses this mechanism. Risk is significant after >2 years (OR ~1.65 for B12 deficiency). Methylmalonic acid and homocysteine are more sensitive biomarkers than serum B12. Bone: multiple mechanisms proposed: (1) reduced calcium carbonate solubility in achlorhydric milieu decreases intestinal calcium absorption; (2) secondary hyperparathyroidism from chronic calcium malabsorption increases bone resorption; (3) possible direct effects on bone cell H+-ATPases; (4) altered magnesium absorption may impair PTH secretion. Meta-analyses show ~25-30% increased hip fracture risk with long-term use (>1 year). FDA issued a safety alert for fracture risk in 2010. Calcium citrate is better absorbed than carbonate in achlorhydric conditions. Current guidelines recommend reassessing PPI need every 6-12 months and stepping down to H2 blockers when possible.',

    ['Fatigue or low energy (B12 deficiency)', 'Numbness or tingling in hands or feet', 'Memory problems or difficulty concentrating', 'Bone pain or tenderness', 'Fractures from minor falls (long-term risk)'],
    ['Fatiga o poca energia (deficiencia de B12)', 'Entumecimiento u hormigueo en manos o pies', 'Problemas de memoria o dificultad para concentrarse', 'Dolor o sensibilidad en los huesos', 'Fracturas por caidas menores (riesgo a largo plazo)'],

    ['Numbness, tingling, or weakness that is getting worse', 'Difficulty walking or balance problems', 'Memory loss or confusion', 'A fracture from a minor fall', 'Persistent bone or joint pain'],
    ['Entumecimiento, hormigueo o debilidad que empeora', 'Dificultad para caminar o problemas de equilibrio', 'Perdida de memoria o confusion', 'Una fractura por una caida menor', 'Dolor persistente en huesos o articulaciones'],

    'B12 and magnesium levels should be monitored in patients on long-term PPI therapy (>1 year). B12 supplements are absorbed normally because they do not require acid-mediated release. Calcium citrate is preferred over calcium carbonate in PPI users because citrate does not require acid for absorption. Always reassess the need for ongoing PPI therapy.',
  ),

  // ── 10. Calcium Channel Blockers → Ankle Swelling ──

  ccb_edema: se(
    'ccb_edema',
    'Calcium Channel Blockers (Dihydropyridines)', 'Bloqueadores de Canales de Calcio (Dihidropiridinicos)',
    'Ankle swelling (peripheral edema)', 'Hinchazon de tobillos (edema periferico)',
    ['Amlodipine', 'Nifedipine', 'Felodipine'],

    'These blood pressure medications relax and widen your arteries to lower blood pressure. But the veins do not widen as much. This creates more pressure in the tiny blood vessels of your legs, pushing fluid out into the surrounding tissue and causing puffy ankles.',
    'Imagine a garden hose with a wide opening at one end and a narrow opening at the other. More water pushes in than can drain out, so it leaks out in the middle.',

    'Calcium channel blockers dilate arteries much more than veins. Blood flows easily into the legs through widened arteries, but the veins cannot carry it away fast enough. This pressure difference forces fluid out of the capillaries into the ankle and foot tissue, causing swelling.',
    'It is like opening the faucet wide but leaving the drain half-closed. Water pools in the sink.',

    'Dihydropyridine CCBs preferentially relax arteriolar smooth muscle by blocking L-type calcium channels, reducing precapillary resistance. Postcapillary venules are not dilated, creating an imbalance: increased capillary hydrostatic pressure overwhelms the Starling forces that normally keep fluid inside vessels. The result is transudation of plasma into the interstitial space, most noticeable in dependent areas (ankles) due to gravity.',
    'The arterial faucet opens wide but the venous drain stays the same size, raising pressure at the capillary junction and forcing fluid out.',

    'DHPs reduce arteriolar tone by blocking L-type Ca2+ channels on vascular smooth muscle, decreasing precapillary resistance. Venular smooth muscle has fewer L-type channels and is less affected, maintaining postcapillary resistance. This precapillary-to-postcapillary resistance mismatch increases intracapillary hydrostatic pressure (Pc), shifting the Starling equation toward net filtration. Edema is dose-dependent (up to 20-30% with amlodipine 10mg) and not a sign of heart failure. Unlike heart failure edema, it does not respond well to diuretics because it is caused by pressure redistribution, not fluid overload.',

    'The mechanism is purely hemodynamic via the Starling equation: Jv = Kf[(Pc - Pi) - sigma(pi_c - pi_i)]. DHP CCBs increase Pc by preferentially reducing precapillary arteriolar resistance (Ra) while minimally affecting postcapillary venular resistance (Rv). The Ra/Rv ratio drops, raising Pc and net transcapillary filtration. Gravity-dependent regions (ankles) are most affected. Key distinction: this is not hypervolemic edema and responds poorly to diuretics. Most effective interventions include: (1) adding an ACEi/ARB, which dilates the postcapillary venules (reducing Rv), restoring the Ra/Rv ratio and reducing edema by 30-50%; (2) dose reduction; (3) switching to a non-DHP. Incidence is 5-10% at low doses, up to 50-70% with high-dose amlodipine monotherapy. Compression stockings provide symptomatic relief.',

    ['Swelling around the ankles, worse at end of day', 'Tight shoes or sock marks lasting longer than usual', 'Puffiness in feet and lower legs', 'The swelling may be painless', 'Symptoms improve after elevating the legs overnight'],
    ['Hinchazon alrededor de los tobillos, peor al final del dia', 'Zapatos apretados o marcas de calcetines que duran mas de lo usual', 'Hinchazon en pies y parte inferior de las piernas', 'La hinchazon puede ser indolora', 'Los sintomas mejoran despues de elevar las piernas durante la noche'],

    ['Swelling that is sudden, severe, or only on one side (may indicate a blood clot)', 'Swelling combined with shortness of breath (may indicate heart failure)', 'Pain, redness, or warmth in the swollen area', 'Swelling that does not improve with leg elevation'],
    ['Hinchazon repentina, severa o solo de un lado (puede indicar un coagulo de sangre)', 'Hinchazon combinada con falta de aire (puede indicar insuficiencia cardiaca)', 'Dolor, enrojecimiento o calor en el area hinchada', 'Hinchazon que no mejora al elevar las piernas'],

    'CCB peripheral edema is dose-dependent and NOT a sign of heart failure. Diuretics are minimally effective because the mechanism is pressure-based, not volume-based. The best strategy is adding an ACEi or ARB, which dilates the venous side, reducing capillary pressure and cutting edema incidence by 30-50%.',
  ),

  // ── 11. Opioids → Constipation ──────────────

  opioid_constipation: se(
    'opioid_constipation',
    'Opioids', 'Opioides',
    'Constipation', 'Estrenimiento',
    ['Oxycodone', 'Morphine', 'Hydrocodone', 'Codeine', 'Fentanyl'],

    'Pain medications like opioids slow everything down in your body, including your intestines. Your gut has special receptors that opioids latch onto, making your intestines squeeze less and absorb more water, so stool becomes hard and difficult to pass.',
    'It is like hitting the slow-motion button on a conveyor belt. Everything backs up and dries out.',

    'Your gut has opioid receptors called mu receptors on the intestinal muscles and nerves. When opioid medications activate these receptors, they slow down the rhythmic contractions (peristalsis) that move food through. They also increase water absorption from the stool, making it harder and more difficult to pass.',
    'Think of your intestines as a tube that squeezes like a toothpaste tube. Opioids make the squeezing stop, so nothing moves forward.',

    'Opioids activate mu-opioid receptors (MOR) on the myenteric and submucosal plexuses of the enteric nervous system. MOR activation inhibits acetylcholine release from excitatory motor neurons, reducing propulsive peristalsis. It also increases non-propulsive segmental contractions (mixing without moving), enhances electrolyte and water reabsorption in the colon, and raises anal sphincter tone. Unlike CNS tolerance, GI tolerance rarely develops.',
    'Opioids put the brakes on the gut highway while simultaneously drying out the road surface. And unlike pain tolerance, your gut never adapts.',

    'Mu-opioid receptors (MOR) are densely expressed on myenteric (Auerbach) and submucosal (Meissner) plexus neurons throughout the GI tract. MOR activation: (1) inhibits excitatory neurotransmitter release (ACh, substance P) from myenteric motor neurons, reducing propulsive peristalsis; (2) stimulates inhibitory VIP/NO neurons, causing intestinal stasis; (3) increases segmental non-propulsive contractions via direct circular muscle stimulation; (4) inhibits Cl- secretion and enhances Na+/water absorption in colonocytes; (5) increases internal anal sphincter tone. Transit time is prolonged throughout but predominantly in the colon. GI tolerance develops minimally because peripheral MOR are continuously accessible and do not undergo the same receptor internalization/desensitization as central MOR.',

    'Opioid-induced constipation (OIC) affects 40-80% of patients and is the most persistent opioid side effect because tolerance rarely develops at peripheral mu receptors. Mechanism: MOR (mu), and to a lesser extent DOR (delta) and KOR (kappa), on enteric neurons inhibit the peristaltic reflex via presynaptic inhibition of ACh and substance P release at the myenteric plexus, suppress mucosal secretion by inhibiting VIP and prostaglandin-mediated chloride efflux, and increase segmental contractions that retard transit. Colonic transit prolongation increases luminal water absorption, producing hard, infrequent stools. Anal sphincter spasm compounds evacuation difficulty. Unlike central analgesic tolerance (driven by receptor phosphorylation, beta-arrestin recruitment, and internalization), enteric MOR show minimal desensitization, likely due to lower beta-arrestin-2 expression in gut neurons. Management: prophylactic stimulant laxative (senna, bisacodyl) for ALL opioid patients; osmotic laxatives (PEG) as adjunct; peripherally-acting mu-opioid receptor antagonists (PAMORAs: naloxegol, methylnaltrexone, naldemedine) block gut MOR without crossing BBB and reversing analgesia.',

    ['Less frequent bowel movements than usual', 'Hard, dry, or lumpy stools', 'Straining or pain during bowel movements', 'Feeling of incomplete emptying', 'Bloating and abdominal discomfort'],
    ['Evacuaciones menos frecuentes de lo usual', 'Heces duras, secas o grumosas', 'Esfuerzo o dolor durante las evacuaciones', 'Sensacion de vaciado incompleto', 'Hinchazon y malestar abdominal'],

    ['No bowel movement for 3 or more days despite laxatives', 'Severe abdominal pain or bloating', 'Nausea or vomiting with inability to pass stool', 'Rectal bleeding or blood in stool', 'Fever with abdominal symptoms (may indicate obstruction)'],
    ['Sin evacuacion por 3 o mas dias a pesar de laxantes', 'Dolor abdominal severo o hinchazon', 'Nauseas o vomitos con incapacidad de evacuar', 'Sangrado rectal o sangre en las heces', 'Fiebre con sintomas abdominales (puede indicar obstruccion)'],

    'Every patient starting opioid therapy should be started on a prophylactic bowel regimen (stimulant laxative +/- osmotic laxative). Do not wait for constipation to develop. Fiber supplements alone are insufficient and may worsen symptoms. PAMORAs (naloxegol, methylnaltrexone) are reserved for patients failing conventional laxatives.',
  ),

  // ── 12. Corticosteroids → Weight Gain & Blood Sugar Rise ──

  corticosteroid_metabolic: se(
    'corticosteroid_metabolic',
    'Corticosteroids', 'Corticosteroides',
    'Weight gain and blood sugar rise', 'Aumento de peso y elevacion del azucar en sangre',
    ['Prednisone', 'Prednisolone', 'Dexamethasone', 'Methylprednisolone'],

    'Steroid medications tell your body to store more fat and release more sugar into your blood. They increase your appetite, move fat to your belly and face, and make your cells resist insulin. This raises blood sugar and causes weight gain, especially with long-term use.',
    'Steroids flip your body into "storage mode," like a bear preparing for winter, packing on fat and hoarding sugar in the blood.',

    'Corticosteroids mimic cortisol, the body\'s stress hormone. They promote gluconeogenesis (making new sugar), increase insulin resistance so cells absorb less sugar, stimulate appetite, and redistribute fat to the trunk, face (moon face), and upper back (buffalo hump). These metabolic changes cause weight gain and elevated blood sugar.',
    'Cortisol is your body\'s alarm hormone. Steroids keep that alarm blaring, telling the body to store energy and keep blood sugar high as if always under stress.',

    'Corticosteroids activate glucocorticoid receptors that upregulate hepatic gluconeogenesis enzymes (PEPCK, G6Pase), increase insulin resistance in skeletal muscle and adipose tissue by impairing GLUT4 translocation, and stimulate lipoprotein lipase in central fat depots while promoting peripheral fat lipolysis, causing centripetal fat redistribution. Appetite stimulation occurs via hypothalamic neuropeptide Y and endocannabinoid modulation.',
    'Steroids push three metabolic levers at once: more sugar production, less sugar uptake by cells, and fat rearrangement toward the center.',

    'Glucocorticoid receptor (GR) activation drives multiple metabolic pathways: (1) Hepatic gluconeogenesis: GR transactivates PEPCK and glucose-6-phosphatase genes, increasing glucose output by 2-3 fold; (2) Insulin resistance: impaired insulin receptor substrate (IRS-1) phosphorylation and reduced GLUT4 translocation in skeletal muscle and adipose tissue; (3) Protein catabolism: ubiquitin-proteasome pathway activation in muscle provides gluconeogenic substrates; (4) Adipose redistribution: central adipocytes have higher GR density and respond to cortisol by increasing LPL activity, while peripheral adipocytes undergo lipolysis; (5) Appetite: NPY/AgRP upregulation and leptin resistance in the arcuate nucleus increase caloric intake. Steroid diabetes develops in 20-40% of patients on chronic therapy. HPA axis suppression occurs with >7.5mg prednisone equivalent for >3 weeks.',

    'Metabolic effects are mediated through genomic (GR-GRE transactivation) and non-genomic mechanisms. Hyperglycemia: (1) transactivation of PEPCK, G6Pase, and tyrosine aminotransferase increases hepatic glucose output; (2) IRS-1 serine phosphorylation (instead of tyrosine) impairs insulin signaling in muscle; (3) reduced GLUT4 expression and translocation decreases peripheral glucose disposal; (4) pancreatic beta-cell dysfunction from glucolipotoxicity reduces compensatory insulin secretion. Steroid-induced hyperglycemia characteristically peaks in the afternoon/evening (matching the pharmacokinetic profile of morning dosing). Weight gain: caloric intake increases 20-30% from NPY/AgRP hypothalamic stimulation and endocannabinoid system activation. Centripetal fat redistribution reflects differential GR density (visceral > subcutaneous) and 11-beta-HSD1 amplification of cortisol in omental fat. Cushing syndrome features appear after 2-4 weeks of high-dose therapy. Management: glycemic monitoring in all patients; metformin or insulin for steroid diabetes; lowest effective dose and shortest duration; steroid-sparing agents when possible.',

    ['Increased appetite and food cravings', 'Weight gain, especially in the belly, face, and upper back', 'Higher blood sugar readings', 'Feeling puffy or swollen', 'Mood changes or difficulty sleeping'],
    ['Aumento del apetito y antojos de comida', 'Aumento de peso, especialmente en el abdomen, cara y parte superior de la espalda', 'Lecturas de azucar en sangre mas altas', 'Sentirse hinchado', 'Cambios de humor o dificultad para dormir'],

    ['Blood sugar consistently above 200 mg/dL or new onset of diabetes symptoms (excessive thirst, frequent urination)', 'Rapid weight gain of more than 5 pounds in a week', 'Severe mood changes, confusion, or psychosis', 'Signs of infection (fever, chills) while on steroids', 'Blurry vision that develops while on steroids'],
    ['Azucar en sangre consistentemente por encima de 200 mg/dL o inicio de sintomas de diabetes (sed excesiva, orina frecuente)', 'Aumento rapido de peso de mas de 5 libras en una semana', 'Cambios severos de humor, confusion o psicosis', 'Signos de infeccion (fiebre, escalofrios) mientras toma esteroides', 'Vision borrosa que se desarrolla mientras toma esteroides'],

    'Steroid-induced hyperglycemia characteristically worsens in the afternoon and evening when taking morning doses. Monitor blood glucose, especially in patients with diabetes or prediabetes. Use the lowest dose for the shortest duration. Patients on >7.5mg prednisone for >3 weeks need a taper to avoid adrenal crisis.',
  ),

  // ── 13. Antibiotics → Diarrhea ──────────────

  antibiotic_diarrhea: se(
    'antibiotic_diarrhea',
    'Antibiotics', 'Antibioticos',
    'Diarrhea (microbiome disruption)', 'Diarrea (alteracion del microbioma)',
    ['Amoxicillin', 'Amoxicillin-clavulanate', 'Clindamycin', 'Ciprofloxacin', 'Cephalosporins'],

    'Antibiotics kill the bad bacteria making you sick, but they also kill many of the good bacteria living in your gut. These good bacteria normally help with digestion and keep harmful germs in check. Without them, digestion gets disrupted and you get diarrhea.',
    'Your gut is like a garden with helpful plants and weeds. Antibiotics are like a weed killer that accidentally kills the flowers too, leaving the garden a mess.',

    'Your intestines are home to trillions of helpful bacteria (the microbiome) that aid digestion, produce vitamins, and prevent harmful bacteria from taking over. Broad-spectrum antibiotics wipe out many of these beneficial bacteria, disrupting the balance. This allows undigested sugars to ferment, changes water absorption, and sometimes lets dangerous bacteria like C. difficile grow unchecked.',
    'Your microbiome is an ecosystem like a coral reef. Antibiotics are like a blast that damages the reef, letting invasive species take over.',

    'Antibiotic-associated diarrhea (AAD) results from disruption of the colonic microbiome. Loss of commensal bacteria reduces short-chain fatty acid (SCFA) production (butyrate, propionate), impairing colonocyte energy metabolism and water absorption. Bile acid deconjugation is impaired, allowing primary bile acids to stimulate colonic secretion. Carbohydrate malfermentation from reduced Bacteroides and Bifidobacterium increases osmotic load. In ~15-25% of AAD cases, Clostridioides difficile exploits the ecological niche, producing toxins A and B that cause pseudomembranous colitis.',
    'Antibiotics create a power vacuum in the gut. Without the normal bacterial government maintaining order, chaos ensues and opportunistic pathogens can seize control.',

    'Microbiome disruption affects multiple colonic functions: (1) SCFA production collapse: Firmicutes and Bacteroidetes ferment dietary fiber to butyrate (colonocyte fuel), propionate, and acetate. Their depletion starves colonocytes, reducing Na+/water absorption and barrier integrity; (2) bile acid dysmetabolism: loss of 7-alpha-dehydroxylating bacteria (Clostridium clusters XIVa/IV) impairs secondary bile acid conversion, allowing primary bile acids (chenodeoxycholic acid) to stimulate CFTR-mediated Cl-/water secretion; (3) colonization resistance failure: loss of niche competition, antimicrobial peptides, and colonocyte-derived oxygen regulation allows C. difficile germination from spore to vegetative form; toxin A (enterotoxin) activates enteric neurons and mast cells, toxin B (cytotoxin) disrupts the actin cytoskeleton, together causing neutrophilic inflammation and pseudomembrane formation. Risk hierarchy: clindamycin, fluoroquinolones, and broad-spectrum cephalosporins carry highest C. difficile risk.',

    'AAD affects 5-35% of patients depending on the antibiotic. The microbiome is disrupted within 3-4 days of antibiotic initiation. Mechanisms: (1) reduced alpha-diversity and loss of keystone taxa (Bacteroides, Faecalibacterium prausnitzii, Bifidobacterium) diminishes SCFA output, particularly butyrate (primary fuel for colonocytes via beta-oxidation), impairing Na+-coupled water absorption and tight junction integrity; (2) loss of bile salt hydrolase-producing bacteria reduces secondary bile acid production; excess primary bile acids activate TGR5 and FXR signaling, stimulating cAMP-mediated chloride secretion; (3) disrupted colonization resistance involves loss of competition for nutrients (sialic acid, fucose) and ecological niches, reduced Type VI secretion system-mediated bacterial killing, and decreased colonocyte oxygen consumption allowing luminal oxygenation that favors facultative anaerobes and C. difficile. C. difficile colitis: binary toxin (CDT) in hypervirulent BI/NAP1/027 strain forms microtubule protrusions enhancing adherence. Saccharomyces boulardii and specific Lactobacillus strains show modest AAD prevention (NNT ~8-13). Fidaxomicin is preferred over vancomycin for C. difficile due to narrower spectrum preserving microbiome recovery.',

    ['Loose or watery stools starting during or after antibiotic use', 'Increased frequency of bowel movements', 'Mild abdominal cramping', 'Symptoms typically begin within a few days of starting antibiotics', 'Symptoms may persist up to 2 weeks after finishing the course'],
    ['Heces sueltas o acuosas que comienzan durante o despues del uso de antibioticos', 'Aumento de la frecuencia de evacuaciones', 'Calambres abdominales leves', 'Los sintomas tipicamente comienzan a los pocos dias de iniciar los antibioticos', 'Los sintomas pueden persistir hasta 2 semanas despues de terminar el curso'],

    ['Diarrhea more than 6 times a day', 'Blood or mucus in stool', 'Fever above 101.3 F (38.5 C) with diarrhea', 'Severe abdominal pain or tenderness', 'Symptoms worsening after the antibiotic is finished (possible C. difficile)'],
    ['Diarrea mas de 6 veces al dia', 'Sangre o moco en las heces', 'Fiebre por encima de 38.5 C (101.3 F) con diarrea', 'Dolor abdominal severo o sensibilidad', 'Sintomas que empeoran despues de terminar el antibiotico (posible C. difficile)'],

    'Antibiotic-associated diarrhea is most common with broad-spectrum agents. Probiotics (Saccharomyces boulardii, Lactobacillus rhamnosus GG) may reduce AAD risk by ~40% when started with the antibiotic. Always consider C. difficile testing if diarrhea persists after antibiotics are completed. Clindamycin, fluoroquinolones, and cephalosporins carry the highest C. difficile risk.',
  ),

  // ── 14. Benzodiazepines → Drowsiness & Dependence ──

  benzo_sedation_dependence: se(
    'benzo_sedation_dependence',
    'Benzodiazepines', 'Benzodiacepinas',
    'Drowsiness and dependence', 'Somnolencia y dependencia',
    ['Lorazepam', 'Diazepam', 'Alprazolam', 'Clonazepam'],

    'Benzodiazepines calm anxiety by boosting a brain chemical called GABA, which is your brain\'s natural "brake pedal." When the brakes are pushed hard, you feel sleepy. Over time, your brain adjusts by removing some of its own brakes, so you need more medication to get the same effect, and stopping suddenly can be dangerous.',
    'It is like always using a very loud alarm clock. Eventually your brain learns to sleep through it, so you need an even louder one, and without it you cannot sleep at all.',

    'Benzodiazepines enhance the effect of GABA, the brain\'s main calming neurotransmitter. They make nerve cells less excitable, which reduces anxiety but also causes sleepiness as a side effect. With regular use, the brain compensates by becoming less sensitive to GABA, requiring higher doses for the same effect (tolerance) and causing withdrawal symptoms if stopped abruptly (dependence).',
    'GABA is like a volume dial that turns down brain activity. Benzodiazepines amplify the dial, but the brain fights back by making the dial harder to turn, creating a cycle of needing more.',

    'Benzodiazepines are positive allosteric modulators of GABA-A receptors, increasing the frequency of chloride channel opening. Enhanced Cl- influx hyperpolarizes neurons, producing sedation, anxiolysis, and muscle relaxation. Drowsiness reflects widespread GABAergic enhancement in cortical and reticular activating system networks. Chronic use triggers compensatory GABA-A receptor downregulation and subunit composition changes (alpha-1 reduction, alpha-4 upregulation), manifesting as tolerance. Abrupt cessation unmasks a hyper-excitable state causing anxiety, insomnia, seizures, and potentially fatal withdrawal.',
    'Benzodiazepines amplify the brain\'s brake signal. The brain responds by removing brake pads. Stop the drug suddenly and the brain has no brakes left.',

    'Drowsiness: benzodiazepine binding at the alpha-1/gamma-2 subunit interface of GABA-A receptors in the cortex, thalamic reticular nucleus, and ascending reticular activating system enhances GABAergic inhibition of arousal circuits. Alpha-1 subunit mediates sedation and amnesia; alpha-2/3 mediate anxiolysis and muscle relaxation. Dependence: chronic GABA-A potentiation triggers homeostatic adaptations: (1) receptor internalization and reduced surface expression; (2) subunit compositional shift from alpha-1 (benzodiazepine-sensitive) to alpha-4 (benzodiazepine-insensitive); (3) increased NMDA receptor expression and glutamatergic activity as a counterbalance. These changes produce tolerance (diminished effect) and upon abrupt cessation, a glutamate/GABA imbalance favoring excitation, resulting in rebound anxiety, insomnia, autonomic instability, and seizures (withdrawal syndrome). Risk increases with duration (>4 weeks), dose, potency, and short half-life agents (alprazolam). Tapering 10-25% per week over 4-12 weeks is standard.',

    'The alpha-1 subunit of GABA-A receptors mediates sedation and is densely expressed in cortex, thalamic reticular nucleus, and raphe nuclei. Positive allosteric modulation increases Cl- conductance, hyperpolarizing neurons and reducing firing. Tolerance develops through multiple mechanisms: (1) uncoupling of benzodiazepine site from GABA-A Cl- channel via changes in receptor phosphorylation (PKC-mediated); (2) GABA-A receptor endocytosis and reduced surface density; (3) transcriptional downregulation of alpha-1 and upregulation of alpha-4/delta subunits (which form extrasynaptic receptors insensitive to benzodiazepines); (4) compensatory upregulation of glutamatergic NMDA and AMPA receptors; (5) reduced GAD67 expression decreasing endogenous GABA synthesis. Physical dependence reflects the new excitatory/inhibitory set-point. Withdrawal syndrome severity correlates with degree of neuroadaptation: seizure risk is highest with short-acting, high-potency agents (alprazolam, lorazepam) and abrupt cessation. Gradual taper allows reverse neuroadaptation. Flumazenil paradoxically may reset GABA-A sensitivity at ultra-low doses (investigational). Elderly are at increased risk of oversedation, falls, and cognitive impairment due to pharmacokinetic (reduced metabolism) and pharmacodynamic (increased receptor sensitivity) changes.',

    ['Excessive daytime sleepiness', 'Slowed thinking or confusion', 'Needing more medication for the same effect (tolerance)', 'Anxiety or restlessness between doses', 'Difficulty functioning without the medication'],
    ['Somnolencia diurna excesiva', 'Pensamiento lento o confusion', 'Necesitar mas medicamento para el mismo efecto (tolerancia)', 'Ansiedad o inquietud entre dosis', 'Dificultad para funcionar sin el medicamento'],

    ['Seizures or severe shaking', 'Confusion, hallucinations, or delirium', 'Severe rebound anxiety or panic attacks', 'Rapid heartbeat or chest pain', 'Thoughts of self-harm (do not stop the medication abruptly; call your doctor)'],
    ['Convulsiones o temblores severos', 'Confusion, alucinaciones o delirio', 'Ansiedad de rebote severa o ataques de panico', 'Latidos rapidos o dolor en el pecho', 'Pensamientos de hacerse dano (no suspenda el medicamento abruptamente; llame a su medico)'],

    'Benzodiazepine prescriptions should be limited to the shortest duration possible (2-4 weeks for anxiety). Dependence can develop within 2-4 weeks of daily use. Never stop abruptly; taper over weeks to months. In the elderly, benzodiazepines increase fall and fracture risk and are listed on the Beers Criteria as potentially inappropriate medications.',
  ),

  // ── 15. Antihistamines → Drowsiness ─────────

  antihistamine_drowsiness: se(
    'antihistamine_drowsiness',
    'First-Generation Antihistamines', 'Antihistaminicos de Primera Generacion',
    'Drowsiness', 'Somnolencia',
    ['Diphenhydramine (Benadryl)', 'Chlorpheniramine', 'Hydroxyzine', 'Promethazine'],

    'Older allergy medications block histamine, which causes allergy symptoms like itching and sneezing. But histamine is also one of the chemicals your brain uses to stay awake and alert. When the medicine blocks histamine in the brain, you feel sleepy.',
    'It is like turning off the alarm system in a building to stop a false alarm, but now no one can wake you up for a real one either.',

    'First-generation antihistamines cross into the brain and block H1 histamine receptors there. In the body, blocking histamine stops allergy symptoms. In the brain, histamine is a key neurotransmitter for wakefulness. Blocking it in the brain\'s arousal centers causes drowsiness, similar to how your brain naturally reduces histamine when it is time to sleep.',
    'Histamine is your brain\'s natural coffee. First-generation antihistamines spill the coffee, and without it, your brain wants to nap.',

    'First-generation antihistamines are lipophilic and cross the blood-brain barrier readily, blocking H1 receptors on histaminergic neurons in the tuberomammillary nucleus (TMN) of the posterior hypothalamus. The TMN is a primary arousal center that projects widely to the cortex, maintaining wakefulness. H1 blockade reduces cortical excitation, producing sedation. Second-generation antihistamines (cetirizine, loratadine, fexofenadine) are hydrophilic, poorly cross the BBB, and cause minimal sedation.',
    'The tuberomammillary nucleus is like a spotlight operator keeping the brain stage lit. Antihistamines switch off the spotlight.',

    'The histaminergic system originates from the tuberomammillary nucleus (TMN) in the posterior hypothalamus, projecting to virtually all brain regions. TMN neurons fire tonically during wakefulness and are silent during sleep. H1 receptor activation on cortical and thalamic neurons increases cation conductance, depolarizes neurons, and promotes arousal. First-generation antihistamines: high lipophilicity and small molecular size enable BBB penetration. H1 receptor occupancy in the brain exceeds 50-80% at therapeutic doses (measured by PET studies), directly suppressing TMN-mediated cortical activation. Additionally, muscarinic antagonism (anticholinergic effects) compounds sedation and causes dry mouth, urinary retention, and blurred vision. Second-generation agents: P-glycoprotein efflux at the BBB actively extrudes these agents, maintaining brain H1 occupancy below 20-30%.',

    'TMN histaminergic neurons are wake-active, receiving inhibitory input from VLPO GABAergic sleep-promoting neurons. H1 receptor activation on cortical pyramidal neurons increases Iq (mixed cation current) and decreases IKleak, depolarizing neurons toward firing threshold. First-generation antihistamines achieve 50-80% central H1 occupancy at standard doses (C11-doxepin PET data), directly antagonizing this pro-arousal mechanism. The sedative potency hierarchy correlates with central H1 occupancy: diphenhydramine > chlorpheniramine > cetirizine > loratadine > fexofenadine. Additional receptor promiscuity of first-generation agents (M1 muscarinic, alpha-1 adrenergic, 5-HT receptors) amplifies cognitive impairment and sedation. Anticholinergic burden in elderly patients increases delirium risk and is associated with accelerated cognitive decline (cumulative anticholinergic exposure studies). Second-generation agents are P-glycoprotein substrates at the BBB, actively effluxed from CNS, maintaining <20% central H1 occupancy at therapeutic doses. Cetirizine is mildly sedating (~10% CNS penetration) while fexofenadine is essentially non-sedating.',

    ['Feeling sleepy or groggy', 'Slowed reaction times', 'Difficulty concentrating', 'Dry mouth, blurred vision (anticholinergic effects)', 'Impaired driving ability (even if you do not feel sleepy)'],
    ['Sentirse sonoliento o aturdido', 'Tiempos de reaccion lentos', 'Dificultad para concentrarse', 'Boca seca, vision borrosa (efectos anticolinergicos)', 'Capacidad de conduccion deteriorada (incluso si no se siente sonoliento)'],

    ['Severe drowsiness that does not wear off', 'Confusion or hallucinations, especially in elderly patients', 'Difficulty urinating', 'Rapid heartbeat or irregular rhythm', 'Seizures (in overdose situations)'],
    ['Somnolencia severa que no desaparece', 'Confusion o alucinaciones, especialmente en pacientes mayores', 'Dificultad para orinar', 'Latidos rapidos o ritmo irregular', 'Convulsiones (en situaciones de sobredosis)'],

    'Second-generation antihistamines (loratadine, cetirizine, fexofenadine) are preferred for allergies because they cause minimal drowsiness. Diphenhydramine is listed on the Beers Criteria and should be avoided in the elderly due to anticholinergic burden, fall risk, and potential cognitive effects. Even "non-drowsy" cetirizine causes some sedation in ~10% of users.',
  ),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a side effect explanation by its ID.
 * Returns undefined if not found.
 */
export function getSideEffectExplained(id: string): SideEffectExplainedEntry | undefined {
  return SIDE_EFFECTS_EXPLAINED[id];
}

/**
 * Get a side effect explanation at a specific complexity level.
 */
export function getSideEffectAtLevel(
  id: string,
  level: ComplexityLevel,
): SideEffectLevel | undefined {
  const entry = SIDE_EFFECTS_EXPLAINED[id];
  return entry?.levels[level];
}

/**
 * Search side effect explanations by a case-insensitive query string.
 * Matches against drugClass, sideEffect, commonDrugs, and level content.
 */
export function searchSideEffects(query: string): SideEffectExplainedEntry[] {
  const q = query.toLowerCase();
  return Object.values(SIDE_EFFECTS_EXPLAINED).filter((entry) => {
    return (
      entry.drugClass.toLowerCase().includes(q) ||
      entry.drugClassEs.toLowerCase().includes(q) ||
      entry.sideEffect.toLowerCase().includes(q) ||
      entry.sideEffectEs.toLowerCase().includes(q) ||
      entry.commonDrugs.some((d) => d.toLowerCase().includes(q)) ||
      entry.clinicalPearl.toLowerCase().includes(q)
    );
  });
}

/**
 * Get all side effect explanations for a given drug name.
 */
export function getSideEffectsForDrug(drugName: string): SideEffectExplainedEntry[] {
  const q = drugName.toLowerCase();
  return Object.values(SIDE_EFFECTS_EXPLAINED).filter((entry) =>
    entry.commonDrugs.some((d) => d.toLowerCase().includes(q))
  );
}

/**
 * Get total number of side effect explanations in the database.
 */
export function getSideEffectExplainedCount(): number {
  return Object.keys(SIDE_EFFECTS_EXPLAINED).length;
}
