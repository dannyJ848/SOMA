/**
 * GI Motility - Comprehensive Educational Content
 *
 * Covers peristalsis, segmentation, migrating motor complex, sphincter
 * function, gastric emptying, and the neural control of GI movement.
 */

import { EducationalContent } from '../../types';

export const giMotility: EducationalContent = {
  id: 'physiology-gi-motility',
  type: 'process',
  name: 'Gastrointestinal Motility',
  alternateNames: [
    'GI motility',
    'Gut motility',
    'Motilidad gastrointestinal (Spanish)',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your digestive system moves food along like a conveyor belt, using squeezing muscles to push food from your mouth all the way through to the end.',
      explanation: `Your digestive system is like a long tube with muscles wrapped around it. These muscles squeeze in special patterns to move food along and mix it up.

**How Food Moves Through You:**

1. **Swallowing** - When you swallow, muscles in your throat push food down a tube called the esophagus. It takes about 8 seconds for food to reach your stomach.

2. **Stomach churning** - Your stomach is like a washing machine. It squeezes and churns food, mixing it with digestive juices. Food stays here 2 to 4 hours.

3. **Small intestine** - Here, food gets squeezed back and forth (like kneading dough) to mix it with digestive juices, and also pushed forward slowly.

4. **Large intestine** - Water is absorbed and waste moves slowly toward the exit. This takes 12 to 36 hours.

**Sphincters - The Gatekeepers:**

At certain points along the tube, there are rings of muscle called sphincters that act like doors. They open to let food through and close to keep it from going backward. The most important ones keep food in your stomach and prevent stomach acid from going up into your throat.

**What Happens Between Meals:**

When you are not eating, your intestines do a special cleaning wave about every 90 minutes, sweeping leftover bits and bacteria out - like a housekeeper cleaning up.

**En espanol:** Tu sistema digestivo mueve la comida como una cinta transportadora, usando musculos que se aprietan para empujar la comida desde la boca hasta el final.`,
      keyTerms: [
        {
          term: 'peristalsis',
          definition:
            'The wave-like squeezing that pushes food forward through the digestive tube',
        },
        {
          term: 'sphincter',
          definition:
            'A ring of muscle that acts like a door, opening and closing to control food movement',
        },
        {
          term: 'esophagus',
          definition:
            'The tube that carries food from your throat to your stomach',
        },
        {
          term: 'churning',
          definition:
            'The mixing and squeezing action of the stomach that breaks food into smaller pieces',
        },
      ],
      analogies: [
        'Peristalsis is like squeezing a tube of toothpaste from the top - the squeezing motion pushes everything forward.',
        'Sphincters are like one-way doors in a building - they let you go through but not back.',
        'The cleaning wave between meals is like a street sweeper that comes through after the parade is over.',
      ],
      examples: [
        'You can actually swallow food while hanging upside down because peristalsis pushes food regardless of gravity.',
        'When you feel your stomach growling between meals, that is the cleaning wave sweeping through your empty intestines.',
      ],
      patientCounselingPoints: [
        'Walking after meals can help food move through your digestive system.',
        'Eating slowly and chewing well gives your stomach less work to do.',
        'Lying down right after eating can cause acid reflux because the sphincter at the top of the stomach has to fight gravity.',
      ],
    },
    2: {
      level: 2,
      summary:
        'GI motility involves coordinated patterns of smooth muscle contraction - peristalsis propels food forward, segmentation mixes it, and the migrating motor complex cleans the gut between meals. Sphincters regulate flow between regions.',
      explanation: `## Types of GI Movement

**Peristalsis (Propulsion):**
- Wave-like contractions that move food forward
- Behind the food bolus: circular muscle contracts (pushes forward)
- Ahead of the bolus: circular muscle relaxes (makes room)
- Coordinated by the enteric nervous system
- Occurs throughout the entire GI tract

**Segmentation (Mixing):**
- Rhythmic contractions that chop and mix food
- Alternating rings of muscle contract and relax
- Does NOT push food forward - just mixes it with digestive juices
- Most important in the small intestine
- Ensures thorough contact between food and enzymes

**Migrating Motor Complex (MMC):**
- The "housekeeper" of the GI tract
- Occurs between meals (every 90-120 minutes during fasting)
- Strong wave that sweeps from stomach to terminal ileum
- Clears undigested food, debris, and bacteria
- Regulated by the hormone motilin
- Disrupted by eating (feeding switches to segmentation)

## Sphincters of the GI Tract

| Sphincter | Location | Function |
|-----------|----------|----------|
| Upper esophageal (UES) | Top of esophagus | Prevents air entry; opens during swallowing |
| Lower esophageal (LES) | Bottom of esophagus | Prevents acid reflux into esophagus |
| Pyloric | Stomach exit | Controls gastric emptying into duodenum |
| Sphincter of Oddi | Duodenal wall | Controls bile and pancreatic juice release |
| Ileocecal valve | Ileum-cecum junction | Prevents backflow from colon to small intestine |
| Internal anal | Rectum | Involuntary; maintains continence |
| External anal | Anus | Voluntary control of defecation |

## Gastric Emptying

Food leaves the stomach at a controlled rate:
- **Liquids:** Empty faster than solids
- **Small particles:** Empty faster than large ones
- **Carbohydrates:** Empty fastest
- **Proteins:** Moderate rate
- **Fats:** Empty slowest (fats trigger CCK which slows stomach emptying)

## Neural Control

The gut has its own nervous system called the enteric nervous system (ENS), sometimes called the "second brain." It contains about 100 million neurons and can function independently of the brain, though it communicates with the central nervous system.

**En espanol:** La motilidad GI involucra patrones coordinados de contraccion del musculo liso: la peristalsis impulsa la comida hacia adelante, la segmentacion la mezcla, y el complejo motor migratorio limpia el intestino entre comidas.`,
      keyTerms: [
        {
          term: 'peristalsis',
          definition:
            'Coordinated wave-like muscle contractions that propel food through the GI tract; involves contraction behind and relaxation ahead of the food bolus',
          pronunciation: 'per-ih-STALL-sis',
        },
        {
          term: 'segmentation',
          definition:
            'Rhythmic back-and-forth contractions in the small intestine that mix food with digestive juices without moving it forward',
        },
        {
          term: 'migrating motor complex (MMC)',
          definition:
            'Strong sweeping contraction that occurs every 90-120 minutes during fasting to clear the GI tract; regulated by motilin',
        },
        {
          term: 'motilin',
          definition:
            'Hormone that triggers the migrating motor complex during fasting; released by endocrine cells in the duodenum and jejunum',
        },
        {
          term: 'enteric nervous system',
          definition:
            'The network of 100 million neurons within the GI tract wall that can independently control digestion; the "second brain"',
        },
      ],
      analogies: [
        'Peristalsis is like the wave motion at a sports stadium - one section stands up while the next sits down, creating a wave that moves around.',
        'Segmentation is like a washing machine on a gentle cycle - it sloshes contents back and forth for thorough mixing.',
        'The MMC is like an automated cleaning robot that activates every 90 minutes when nobody is home.',
      ],
      examples: [
        'Gastroparesis (delayed stomach emptying) is common in diabetes because high blood sugar damages the nerves controlling gastric motility.',
        'Motion sickness can cause nausea because conflicting signals between your eyes and inner ear affect the brain-gut connection, disrupting normal motility.',
      ],
    },
    3: {
      level: 3,
      summary:
        'GI motility arises from the interplay of smooth muscle electrical activity (slow waves and spike potentials), the enteric nervous system (myenteric and submucosal plexuses), autonomic input, and hormonal modulation, producing region-specific patterns from esophageal peristalsis to colonic mass movements.',
      explanation: `## Electrical Basis of GI Motility

**Slow Waves:**
- Rhythmic depolarizations generated by interstitial cells of Cajal (ICC)
- ICC act as pacemaker cells of the GI tract
- Slow waves do NOT cause contraction by themselves
- Set the maximum possible contraction frequency for each region

| Region | Slow Wave Frequency |
|--------|-------------------|
| Stomach | 3 per minute |
| Duodenum | 12 per minute |
| Jejunum | 9 per minute |
| Ileum | 7-8 per minute |
| Colon | 2-6 per minute |

**Spike Potentials (Action Potentials):**
- Occur on top of slow waves when depolarization reaches threshold
- Caused by Ca2+ influx through L-type calcium channels
- Spike potentials cause actual muscle contraction
- Number of spikes determines strength of contraction
- Factors increasing spike activity: stretching, acetylcholine, parasympathetic stimulation
- Factors decreasing spike activity: norepinephrine, sympathetic stimulation

## Enteric Nervous System (ENS)

**Myenteric Plexus (Auerbach's plexus):**
- Between circular and longitudinal muscle layers
- Primary control of GI motility
- Excitatory motor neurons: ACh, Substance P (stimulate contraction)
- Inhibitory motor neurons: NO, VIP (cause relaxation)
- Coordinates peristaltic reflex: contraction behind, relaxation ahead

**Submucosal Plexus (Meissner's plexus):**
- Within the submucosa
- Primary control of GI secretion and blood flow
- Also regulates local absorption

**Peristaltic Reflex (Law of the Intestine):**
1. Luminal distension detected by mechanoreceptors
2. Sensory (IPANs) neurons activate interneurons
3. Ascending excitatory pathway: ACh + Substance P cause oral contraction
4. Descending inhibitory pathway: NO + VIP cause anal relaxation
5. Net effect: bolus propulsion in the aboral direction

## Autonomic Modulation

**Parasympathetic (Vagus and Pelvic Nerves):**
- Generally stimulatory (increases motility and secretion)
- Vagus: Esophagus through transverse colon
- Pelvic nerves: Distal colon, rectum, internal anal sphincter
- Preganglionic fibers synapse on enteric neurons (ACh-ACh)

**Sympathetic:**
- Generally inhibitory (decreases motility, contracts sphincters)
- Prevertebral ganglia: Celiac, superior mesenteric, inferior mesenteric
- Postganglionic fibers release norepinephrine
- Inhibit enteric neurons and contract sphincters

## Swallowing (Deglutition)

**Phases:**
1. **Oral (voluntary):** Tongue pushes bolus to pharynx
2. **Pharyngeal (involuntary):** Reflex triggered by CN IX, X; UES relaxes; airway protected
3. **Esophageal:** Primary peristalsis (continuation of pharyngeal wave); secondary peristalsis (triggered by residual food/distension)

**Lower Esophageal Sphincter (LES):**
- Tonic contraction: 15-30 mmHg above gastric pressure
- Relaxation: Mediated by VIP and NO from enteric neurons (vagovagal reflex)
- Factors decreasing LES pressure: Progesterone, chocolate, alcohol, fat, caffeine, smoking
- GERD pathophysiology: Transient LES relaxations (most common), low baseline LES pressure, hiatal hernia

## Gastric Motility

**Receptive Relaxation:**
- Vagal reflex; stomach fundus relaxes to accommodate food
- Mediated by VIP and NO
- Allows storage of up to 1.5 L without significant pressure increase

**Antral Peristalsis and Retropulsion:**
- Strong antral contractions push chyme toward pylorus
- Pylorus closes, forcing chyme back (retropulsion)
- Mechanical grinding of solids to particles < 2 mm
- Liquids and small particles pass through pylorus

**Gastric Emptying Regulation:**
- Accelerators: Gastrin, motilin, distension
- Inhibitors: CCK, secretin, GIP, fat in duodenum, acid in duodenum
- Enterogastric reflex: Duodenal stimuli inhibit gastric emptying via neural and hormonal pathways

## Colonic Motility

**Haustration:** Segmental contractions forming haustra; mix and expose contents to mucosa
**Mass Movements:** Strong propulsive contractions, 1-3 times daily; move contents toward rectum
**Gastrocolic Reflex:** Eating stimulates colonic motility (mediated by gastrin and CCK)
**Defecation Reflex:**
1. Feces enters rectum, distends wall
2. Intrinsic reflex via myenteric plexus: Peristalsis in descending/sigmoid colon, relaxation of internal anal sphincter
3. Parasympathetic reflex via pelvic nerves amplifies the response
4. External anal sphincter: Voluntary relaxation permits defecation

**En espanol:** La motilidad GI surge de la interaccion entre la actividad electrica del musculo liso, el sistema nervioso enterico, la inervacion autonomica y la modulacion hormonal, produciendo patrones especificos para cada region.`,
      keyTerms: [
        {
          term: 'interstitial cells of Cajal (ICC)',
          definition:
            'Pacemaker cells of the GI tract that generate slow wave electrical rhythms; located between smooth muscle layers and interface with enteric neurons',
          pronunciation: 'ka-HAL',
        },
        {
          term: 'slow waves',
          definition:
            'Rhythmic depolarizations generated by ICC that set the maximum contraction frequency; do not cause contraction alone but allow spike potentials when threshold is reached',
        },
        {
          term: 'myenteric plexus',
          definition:
            'Auerbach plexus; nerve network between circular and longitudinal muscle layers; primary controller of GI motility',
          pronunciation: 'my-en-TAIR-ik',
        },
        {
          term: 'receptive relaxation',
          definition:
            'Vagally mediated relaxation of the gastric fundus upon food arrival, allowing storage without pressure increase; mediated by VIP and NO',
        },
        {
          term: 'retropulsion',
          definition:
            'Forceful return of gastric contents from the closed pylorus back into the antrum, mechanically grinding solids to less than 2 mm',
        },
        {
          term: 'gastrocolic reflex',
          definition:
            'Reflex increase in colonic motility triggered by food in the stomach; mediated by gastrin, CCK, and parasympathetic pathways',
        },
      ],
      clinicalNotes:
        'Hirschsprung disease results from absence of enteric ganglia (both plexuses) in a segment of colon, causing functional obstruction due to inability to relax. Achalasia involves loss of inhibitory neurons (NO/VIP) in the LES and esophageal body, leading to failure of LES relaxation and absent peristalsis. Gastroparesis is defined as delayed gastric emptying without mechanical obstruction; most commonly diabetic or idiopathic.',
    },
    4: {
      level: 4,
      summary:
        'GI motility integrates ICC pacemaker networks, smooth muscle ion channel physiology, enteric neural circuits with specific neurotransmitter systems, and neurohumoral feedback loops, with disruptions manifesting as motility disorders spanning dysphagia, gastroparesis, intestinal pseudo-obstruction, and colonic inertia.',
      explanation: `## ICC Pacemaker Physiology

**ICC Subtypes:**
| Subtype | Location | Function |
|---------|----------|----------|
| ICC-MY | Between muscle layers (myenteric) | Slow wave generation |
| ICC-IM | Within muscle layers (intramuscular) | Neurotransmission mediation |
| ICC-DMP | Deep muscular plexus (small intestine) | Stretch sensing |
| ICC-SM | Submucosal border | Pacemaker in colon |
| ICC-SMP | Submucosal plexus surface | Secondary pacemaker |

**Slow Wave Ionic Mechanism:**
- Pacemaker current: Ano1 (TMEM16A) calcium-activated chloride channel
- IP3-dependent Ca2+ release from ER triggers Ano1 opening
- Cl- efflux produces depolarization (plateau phase)
- Spread via gap junctions (Connexin 43) to smooth muscle syncytium
- Kit receptor (c-Kit/CD117): Tyrosine kinase essential for ICC development and maintenance
- Kit signaling: SCF (stem cell factor) ligand from smooth muscle cells

**Smooth Muscle Contraction Cascade:**
1. Slow wave depolarization reaches threshold
2. L-type Ca2+ channel opening (spike potential)
3. Ca2+ influx + SR calcium release
4. Ca2+-calmodulin activates MLCK (myosin light chain kinase)
5. MLC phosphorylation = cross-bridge cycling = contraction
6. Relaxation: MLCP (myosin light chain phosphatase) dephosphorylates MLC
7. Rho-kinase inhibits MLCP, sustaining tonic contraction (sphincters)

## Advanced Enteric Neurocircuitry

**Intrinsic Primary Afferent Neurons (IPANs):**
- Calbindin-positive, Dogiel type II morphology
- Mechanosensitive and chemosensitive
- Synapse onto ascending excitatory and descending inhibitory interneurons
- Slow EPSP mediated by tachykinins (NK1, NK3 receptors)

**Motor Neuron Transmitters:**
| Neuron Type | Transmitters | Target Response |
|-------------|-------------|----------------|
| Excitatory circular | ACh, Substance P, NK-A | Contraction |
| Inhibitory circular | NO, VIP, ATP, PACAP | Relaxation |
| Excitatory longitudinal | ACh, calretinin | Contraction |
| Inhibitory longitudinal | NO, VIP | Relaxation |

**Purinergic Neurotransmission:**
- Inhibitory junction potentials (IJPs) in circular muscle
- Fast IJP: ATP or beta-NAD acting on P2Y1 receptors
- Slow IJP: NO-mediated, cGMP-dependent K+ channel activation
- Both required for normal descending relaxation

## Migrating Motor Complex: Molecular Regulation

**Phase Structure:**
| Phase | Duration | Activity | Mechanism |
|-------|----------|----------|-----------|
| Phase I | 45-60 min | Quiescence | Low excitability |
| Phase II | 30 min | Irregular contractions | Increasing excitability |
| Phase III | 5-15 min | Intense regular contractions | Motilin peak |
| Phase IV | 5 min | Transition to quiescence | Declining activity |

**Motilin Signaling:**
- Motilin receptor (MLNR): GPCR on smooth muscle and enteric neurons
- Erythromycin: Motilin receptor agonist (prokinetic use)
- Ghrelin: Related peptide; ghrelin receptor agonists (relamorelin) being studied for gastroparesis
- Serotonin (5-HT4): Facilitates MMC; prucalopride mechanism

## Gastroparesis: Pathophysiology

**Cellular Mechanisms:**
- ICC loss/dysfunction (reduced Kit expression)
- Smooth muscle fibrosis and atrophy
- Oxidative stress from macrophage activation (M1 to M2 shift failure)
- Loss of nNOS-expressing inhibitory neurons
- Impaired fundic relaxation + antral hypomotility

**Diabetic Gastroparesis Cascade:**
1. Hyperglycemia-induced oxidative stress
2. Advanced glycation end-products (AGEs) accumulate
3. Loss of protective M2 macrophage phenotype (CD206+)
4. ICC apoptosis and network disruption
5. nNOS downregulation in inhibitory motor neurons
6. Impaired pyloric relaxation and antral contractions
7. Delayed gastric emptying

**Treatment Algorithm:**
- Dietary modification: Small, frequent, low-fat, low-fiber meals
- Prokinetics: Metoclopramide (D2 antagonist/5-HT4 agonist), domperidone, erythromycin
- Antiemetics: Ondansetron (5-HT3 antagonist)
- Endoscopic: Gastric peroral endoscopic myotomy (G-POEM) for refractory pyloric dysfunction
- Neuromodulation: Gastric electrical stimulation (Enterra device) for refractory nausea/vomiting

## Intestinal Pseudo-Obstruction

**Chronic Intestinal Pseudo-Obstruction (CIPO):**
- Neuropathic: Enteric neuron degeneration (can be autoimmune, anti-Hu antibodies in paraneoplastic)
- Myopathic: Smooth muscle degeneration (visceral myopathy, familial forms with ACTG2 mutations)
- ICC-pathic: Loss of ICC networks

**ACTG2 Mutations:**
- Encode gamma-2 actin (smooth muscle)
- Autosomal dominant with variable penetrance
- Megacystis-microcolon-intestinal hypoperistalsis syndrome (MMIHS)
- Prune belly-like phenotype possible

**En espanol:** La motilidad GI integra redes de marcapasos ICC, fisiologia de canales ionicos del musculo liso, circuitos neurales entericos con sistemas de neurotransmisores especificos y bucles de retroalimentacion neurohumorales.`,
      keyTerms: [
        {
          term: 'Ano1 (TMEM16A)',
          definition:
            'Calcium-activated chloride channel responsible for the pacemaker current in ICC; its opening produces slow wave depolarization',
        },
        {
          term: 'c-Kit (CD117)',
          definition:
            'Receptor tyrosine kinase on ICC essential for their development and maintenance; SCF is its ligand; also a marker used to identify ICC on pathology',
        },
        {
          term: 'MLCK',
          definition:
            'Myosin light chain kinase; Ca2+-calmodulin-dependent enzyme that phosphorylates MLC to initiate smooth muscle contraction',
        },
        {
          term: 'inhibitory junction potential',
          definition:
            'Hyperpolarization of smooth muscle caused by inhibitory enteric motor neurons; fast component (purinergic) and slow component (nitrergic)',
        },
        {
          term: 'G-POEM',
          definition:
            'Gastric peroral endoscopic myotomy; endoscopic procedure dividing the pyloric sphincter muscle for refractory gastroparesis',
        },
      ],
      clinicalNotes:
        'ICC loss is now recognized as the common final pathway in many motility disorders. Quantification of ICC on full-thickness gastric biopsy (using CD117/Kit immunohistochemistry) is emerging as a diagnostic and prognostic tool in gastroparesis. ACTG2 genetic testing should be considered in pediatric patients with unexplained intestinal pseudo-obstruction, megacystis, or microcolon. Erythromycin as a prokinetic undergoes tachyphylaxis within days due to motilin receptor desensitization, limiting its chronic use.',
    },
    5: {
      level: 5,
      summary:
        'State-of-the-art GI motility science encompasses ICC network biology with optogenetic tools, smooth muscle transcriptomics, translational prokinetic pharmacology, high-resolution manometry phenotyping, and precision medicine approaches to motility disorders.',
      explanation: `## ICC Biology: Translational Frontiers

**ICC Network Mapping:**
- Whole-mount immunohistochemistry with Kit, Ano1 antibodies reveals 3D ICC networks
- ICC-MY form a dense network with ~90% coverage of myenteric region
- Gap junction coupling creates a functional syncytium: ICC-ICC-smooth muscle
- Computational modeling: FitzHugh-Nagumo-based models simulate slow wave propagation
- High-resolution electrical mapping (HR-EGG, serosal mapping) validates models in human tissue

**ICC in Disease:**
| Condition | ICC Change | Clinical Correlation |
|-----------|-----------|---------------------|
| Diabetic gastroparesis | Depleted ICC-MY, ICC-IM | Slow wave dysrhythmia |
| Slow-transit constipation | Reduced ICC-SM, ICC-MY in colon | Decreased colonic pacemaker activity |
| Hirschsprung disease | Altered ICC distribution in aganglionic segment | Abnormal slow wave propagation |
| GI stromal tumor (GIST) | ICC-derived neoplasia | Kit/PDGFRA mutations; imatinib target |
| Post-surgical ileus | ICC mechano-transduction disruption | Delayed return of motility |

**GIST Molecular Biology:**
- ~80% have activating KIT mutations (exon 11 most common)
- ~10% have PDGFRA mutations (D842V most common, imatinib-resistant)
- ~10% wild-type: SDH-deficient, NF1-associated, RAS pathway
- Avapritinib: Selective for PDGFRA D842V mutant
- Ripretinib: Broad-spectrum switch-control KIT/PDGFRA inhibitor

## High-Resolution Manometry: Diagnostic Revolution

**Esophageal HRM (Chicago Classification v4.0):**
| Diagnosis | IRP | Contractile Pattern |
|-----------|-----|-------------------|
| Type I Achalasia | Elevated | Absent peristalsis |
| Type II Achalasia | Elevated | Pan-esophageal pressurization |
| Type III Achalasia | Elevated | Premature/spastic contractions |
| EGJ outflow obstruction | Elevated | Normal peristalsis |
| Absent contractility | Normal | No contraction (0% effective swallows) |
| Distal esophageal spasm | Normal | Premature contractions (DL < 4.5 s) |
| Jackhammer esophagus | Normal | Hypercontractile (DCI > 8000 mmHg*s*cm) |

**Gastric HRM and EndoFLIP:**
- EndoFLIP (endolumenal functional lumen imaging probe): Measures compliance and diameter
- Pyloric EndoFLIP: Distensibility index < 9.2 mm2/mmHg predicts gastroparesis response to pyloromyotomy
- Gastric body HRM: Emerging tool for classifying gastric motility phenotypes

**Colonic Manometry:**
- High-amplitude propagating contractions (HAPCs): Mass movement correlate
- Absent HAPCs in slow-transit constipation
- Colonic manometry distinguishes neuropathic vs myopathic patterns
- Guides surgical decisions (colectomy vs continued medical management)

## Prokinetic Pharmacology: Current and Pipeline

**Approved Agents:**
| Agent | Mechanism | Indication | Limitations |
|-------|-----------|------------|-------------|
| Metoclopramide | D2 antagonist, 5-HT4 agonist | Gastroparesis | Tardive dyskinesia (FDA black box) |
| Prucalopride | Selective 5-HT4 agonist | Chronic constipation | No cardiac 5-HT effect (unlike cisapride) |
| Erythromycin | Motilin receptor agonist | Acute gastroparesis | Tachyphylaxis, QT prolongation |
| Linaclotide | GC-C agonist | IBS-C, CIC | Secretory + prokinetic; diarrhea |
| Tegaserod | 5-HT4 partial agonist | IBS-C (women < 65) | Reintroduced with CV restrictions |

**Pipeline Therapeutics:**
- Relamorelin: Ghrelin receptor agonist; Phase III for diabetic gastroparesis
- Velusetrag: Highly selective 5-HT4 agonist; gastroparesis Phase II
- Camicinal: Motilin receptor agonist; resistant to tachyphylaxis (modified macrolide)
- TAK-954: 5-HT4 agonist for post-operative ileus
- Vibrating capsule (Vibrant): Mechanical stimulation for chronic constipation (FDA approved)

## Neuromodulation and Surgical Innovation

**Gastric Electrical Stimulation (GES):**
- Enterra device: High-frequency/low-energy stimulation of gastric body
- Mechanism debated: Likely central antiemetic effect rather than prokinetic
- Best outcomes: Diabetic gastroparesis with primarily nausea/vomiting
- Temporary GES via endoscopically placed electrodes for trial before permanent implant

**Posterior Tibial Nerve Stimulation (PTNS):**
- Percutaneous or transcutaneous
- Modulates sacral parasympathetic outflow
- Evidence for fecal incontinence (FDA approved: InterStim)
- Emerging evidence for constipation and gastroparesis

**Gastric Peroral Endoscopic Myotomy (G-POEM):**
- Pyloric myotomy through submucosal tunnel
- 70-80% clinical response in gastroparesis at 12 months
- Best predictors of response: Low pyloric compliance on EndoFLIP, pylorospasm on manometry
- London Classification: Proposed standardized phenotyping for G-POEM candidate selection

**Colonic Approaches:**
- Sacral nerve stimulation for slow-transit constipation
- Antegrade continence enemas (ACE/Malone procedure) for refractory constipation
- Subtotal colectomy with ileorectal anastomosis: Last resort for confirmed colonic inertia

## Precision Medicine in Motility Disorders

**Genetic Testing:**
- ACTG2, MYH11, LMOD1: Visceral myopathy genes
- RET, EDNRB, EDN3, SOX10: Hirschsprung disease genes
- SCN5A: Sodium channelopathy associated with IBS and GI motility disorders
- Mitochondrial DNA mutations: Mitochondrial neurogastrointestinal encephalopathy (MNGIE)

**Biomarker Development:**
- Anti-vinculin and anti-CdtB antibodies: Post-infectious IBS biomarker
- Serum ghrelin/motilin ratios in gastroparesis subtypes
- ICC quantification on full-thickness biopsy as prognostic marker
- Gastric myoelectrical activity (cutaneous electrogastrography + machine learning)

**En espanol:** La ciencia de vanguardia en motilidad GI abarca la biologia de redes ICC, el fenotipado con manometria de alta resolucion, la farmacologia prokinetics translacional y los enfoques de medicina de precision para trastornos de la motilidad.`,
      keyTerms: [
        {
          term: 'Chicago Classification v4.0',
          definition:
            'Standardized classification system for esophageal motility disorders based on high-resolution manometry metrics including IRP, DCI, and DL',
        },
        {
          term: 'EndoFLIP',
          definition:
            'Endolumenal functional lumen imaging probe measuring compliance, cross-sectional area, and distensibility of GI sphincters; key tool for pyloric phenotyping in gastroparesis',
        },
        {
          term: 'GIST',
          definition:
            'Gastrointestinal stromal tumor; ICC-derived mesenchymal neoplasm driven by KIT or PDGFRA activating mutations; paradigm for targeted tyrosine kinase inhibitor therapy',
        },
        {
          term: 'avapritinib',
          definition:
            'Selective KIT/PDGFRA kinase inhibitor with unique activity against PDGFRA D842V mutant GIST, previously resistant to imatinib',
        },
        {
          term: 'relamorelin',
          definition:
            'Synthetic ghrelin receptor agonist in late-stage clinical development for diabetic gastroparesis; accelerates gastric emptying without tachyphylaxis seen with motilin agonists',
        },
      ],
      clinicalNotes: `**Board-Relevant and Practice Pearls:**
- Type II achalasia has the best treatment response (POEM or pneumatic dilation); Type III has the worst prognosis and may require long myotomy
- EndoFLIP pyloric distensibility index is emerging as the key predictor of G-POEM success; consider it before proceeding to pyloromyotomy
- PDGFRA D842V GIST was historically untreatable; avapritinib transformed outcomes with ~90% response rate
- Anti-vinculin antibodies may help distinguish post-infectious IBS from other causes, potentially guiding treatment selection
- The vibrating capsule (Vibrant) represents a novel drug-free mechanical approach to chronic constipation; FDA cleared based on SPEED trial data
- SCN5A sodium channelopathy is increasingly recognized in refractory IBS/functional GI disorders; consider genetic testing in severe, treatment-resistant cases`,
    },
  },

  media: [
    {
      id: 'gi-motility-patterns',
      type: 'diagram',
      filename: 'gi-motility-patterns.svg',
      title: 'GI Motility Patterns',
      description:
        'Visual comparison of peristalsis, segmentation, haustration, and mass movements',
    },
    {
      id: 'slow-wave-diagram',
      type: 'diagram',
      filename: 'slow-wave-spike-potentials.svg',
      title: 'Slow Waves and Spike Potentials',
      description:
        'Electrical activity of GI smooth muscle showing slow wave frequencies by region and superimposed spike potentials',
    },
    {
      id: 'mmc-phases',
      type: 'diagram',
      filename: 'mmc-phases.svg',
      title: 'Migrating Motor Complex Phases',
      description:
        'Four phases of the MMC with hormonal and neural regulation',
    },
  ],

  citations: [
    {
      id: 'guyton-gi-motility',
      type: 'textbook',
      title: 'General Principles of Gastrointestinal Function - Motility',
      source: 'Guyton and Hall Textbook of Medical Physiology, 14th Edition',
      chapter: '63',
    },
    {
      id: 'boron-gi-motility',
      type: 'textbook',
      title: 'Gastrointestinal Motility',
      source: 'Boron and Boulpaep Medical Physiology, 3rd Edition',
      chapter: '41-42',
    },
    {
      id: 'sleisenger-motility',
      type: 'textbook',
      title: 'Gastric Motor and Sensory Function and Motor Disorders of the Stomach',
      source:
        'Sleisenger and Fordtran Gastrointestinal and Liver Disease, 11th Edition',
      chapter: '50',
    },
  ],

  crossReferences: [
    {
      targetId: 'physiology-gi-digestion-absorption',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Digestion and Absorption',
    },
    {
      targetId: 'physiology-gi-secretion',
      targetType: 'process',
      relationship: 'sibling',
      label: 'GI Secretion',
    },
    {
      targetId: 'physiology-gi-enteric-nervous-system',
      targetType: 'concept',
      relationship: 'related',
      label: 'Enteric Nervous System',
    },
    {
      targetId: 'physiology-gi-gut-brain-axis',
      targetType: 'concept',
      relationship: 'related',
      label: 'Gut-Brain Axis',
    },
  ],

  tags: {
    systems: ['gastrointestinal', 'nervous'],
    topics: [
      'motility',
      'peristalsis',
      'smooth muscle',
      'enteric nervous system',
      'physiology',
    ],
    keywords: [
      'peristalsis',
      'segmentation',
      'MMC',
      'ICC',
      'slow waves',
      'sphincter',
      'gastroparesis',
      'achalasia',
      'Hirschsprung',
      'motilin',
      'prokinetic',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default giMotility;
