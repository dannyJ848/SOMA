/**
 * Comprehensive Anatomy Content for RAG
 *
 * Educational content from open source textbooks covering all major body systems.
 * Sources: OpenStax Anatomy & Physiology 2e, StatPearls (CC BY 4.0)
 */

import type { SourceContent } from './index.js';

export const ANATOMY_CONTENT: SourceContent[] = [
  // ==================== CARDIOVASCULAR SYSTEM ====================
  {
    text: `The heart is a muscular organ located in the mediastinum, the central compartment of the thoracic cavity. It is approximately the size of a closed fist and weighs between 250-350 grams in adults. The heart is enclosed by a double-walled sac called the pericardium, which protects the heart and anchors it to surrounding structures.

The heart has four chambers: two upper atria and two lower ventricles. The right atrium receives deoxygenated blood from the body via the superior and inferior vena cava. The right ventricle pumps this blood to the lungs via the pulmonary arteries. The left atrium receives oxygenated blood from the lungs via the pulmonary veins. The left ventricle, with its thicker walls, pumps oxygenated blood to the body through the aorta.

The heart wall consists of three layers: the epicardium (outer layer), myocardium (middle, muscular layer), and endocardium (inner layer). The myocardium is the thickest layer and is composed of cardiac muscle cells (cardiomyocytes) that contract rhythmically to pump blood.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 19',
      section: 'Heart Anatomy',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The coronary circulation provides blood supply to the heart muscle itself. The right and left coronary arteries arise from the base of the aorta, just above the aortic valve. The left coronary artery divides into the left anterior descending (LAD) artery and the circumflex artery. The LAD supplies the anterior wall of the left ventricle and the anterior two-thirds of the interventricular septum.

The right coronary artery supplies the right atrium, right ventricle, and the posterior portion of the left ventricle in most people. Coronary veins collect deoxygenated blood and drain into the coronary sinus, which empties into the right atrium.

Blockage of coronary arteries leads to myocardial ischemia and potentially myocardial infarction (heart attack). The severity depends on which artery is affected and the extent of collateral circulation.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 19',
      section: 'Coronary Circulation',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Blood vessels form a closed circuit that transports blood throughout the body. Arteries carry blood away from the heart, while veins return blood to the heart. Capillaries are microscopic vessels that connect arteries to veins and are the sites of nutrient and gas exchange.

Arteries have thick, elastic walls with three layers: tunica intima (innermost), tunica media (middle, muscular), and tunica adventitia (outermost). The aorta is the largest artery, receiving blood directly from the left ventricle. Major branches include the brachiocephalic, left common carotid, and left subclavian arteries.

Veins have thinner walls than arteries and contain valves to prevent backflow of blood. The superior and inferior vena cava are the largest veins, returning blood to the right atrium. The portal system is unique in that it connects two capillary beds, carrying nutrient-rich blood from the intestines to the liver.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 20',
      section: 'Blood Vessel Structure',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-1-structure-and-function-of-blood-vessels',
      license: 'CC BY 4.0',
    },
  },

  // ==================== RESPIRATORY SYSTEM ====================
  {
    text: `The lungs are paired organs of respiration located in the thoracic cavity. The right lung has three lobes (superior, middle, and inferior), while the left lung has two lobes (superior and inferior) to accommodate the heart. Each lung is enclosed by a double-layered serous membrane called the pleura.

The respiratory tree begins with the trachea, which divides into the right and left main bronchi at the carina. These primary bronchi further divide into lobar bronchi, then segmental bronchi, continuing to divide approximately 23 times until reaching the alveoli. The alveoli are tiny air sacs where gas exchange occurs.

Gas exchange takes place across the respiratory membrane, which consists of the alveolar epithelium, the capillary endothelium, and their fused basement membranes. This membrane is approximately 0.5 micrometers thick, allowing rapid diffusion of oxygen and carbon dioxide.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 22',
      section: 'Organs of the Respiratory System',
      system: 'respiratory',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The upper respiratory tract includes the nose, nasal cavity, pharynx, and larynx. The nasal cavity is divided by the nasal septum and contains three bony projections called conchae (turbinates) that increase surface area for warming and humidifying air. The paranasal sinuses (frontal, maxillary, ethmoid, and sphenoid) are air-filled spaces that lighten the skull and produce mucus.

The pharynx is divided into three regions: nasopharynx (behind the nasal cavity), oropharynx (behind the oral cavity), and laryngopharynx (above the larynx). The larynx, or voice box, contains the vocal cords and connects the pharynx to the trachea. The epiglottis is a cartilaginous flap that covers the larynx during swallowing to prevent aspiration.

The trachea (windpipe) is approximately 10-12 cm long and is supported by C-shaped cartilage rings that keep it open during breathing. The posterior wall, which borders the esophagus, is flexible to allow food to pass.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 22',
      section: 'Upper Respiratory Tract',
      system: 'respiratory',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system',
      license: 'CC BY 4.0',
    },
  },

  // ==================== NERVOUS SYSTEM ====================
  {
    text: `The brain is the central organ of the nervous system, weighing approximately 1.4 kg in adults. It is protected by the skull, meninges (three membrane layers: dura mater, arachnoid mater, and pia mater), and cerebrospinal fluid. The brain consists of the cerebrum, cerebellum, and brainstem.

The cerebrum is the largest part of the brain and is divided into two hemispheres connected by the corpus callosum. Each hemisphere has four lobes: frontal (motor control, reasoning, planning), parietal (sensory processing, spatial awareness), temporal (hearing, memory, language), and occipital (vision). The cerebral cortex is the outer layer of gray matter responsible for higher cognitive functions.

The cerebellum, located at the back of the brain below the cerebrum, coordinates movement, balance, and posture. The brainstem connects the brain to the spinal cord and includes the midbrain, pons, and medulla oblongata, which control vital functions like breathing, heart rate, and blood pressure.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 13',
      section: 'Brain Anatomy',
      system: 'nervous',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The spinal cord extends from the medulla oblongata to the level of the first or second lumbar vertebra (L1-L2). It is approximately 45 cm long and 1 cm in diameter. The spinal cord is protected by the vertebral column and surrounded by the same three meninges as the brain.

In cross-section, the spinal cord shows an H-shaped area of gray matter surrounded by white matter. Gray matter contains neuron cell bodies and is divided into dorsal (posterior) horns (sensory neurons), ventral (anterior) horns (motor neurons), and lateral horns (autonomic neurons in thoracic and lumbar regions).

There are 31 pairs of spinal nerves: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal. Each spinal nerve has a dorsal root (sensory) and ventral root (motor). The cauda equina is the bundle of nerve roots at the inferior end of the spinal cord.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 13',
      section: 'Spinal Cord Anatomy',
      system: 'nervous',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The peripheral nervous system (PNS) consists of all neural tissue outside the brain and spinal cord. It includes cranial nerves, spinal nerves, and their branches. The PNS is divided into the somatic nervous system (voluntary control of skeletal muscles) and autonomic nervous system (involuntary control of organs).

There are 12 pairs of cranial nerves that emerge directly from the brain. These include: I Olfactory (smell), II Optic (vision), III Oculomotor (eye movement), IV Trochlear (eye movement), V Trigeminal (facial sensation, chewing), VI Abducens (eye movement), VII Facial (facial expression, taste), VIII Vestibulocochlear (hearing, balance), IX Glossopharyngeal (taste, swallowing), X Vagus (parasympathetic functions), XI Accessory (neck muscles), XII Hypoglossal (tongue movement).

The autonomic nervous system has two divisions: the sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) systems. These work in opposition to maintain homeostasis of organs, glands, and blood vessels.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 14',
      section: 'Peripheral Nervous System',
      system: 'nervous',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-1-sensory-perception',
      license: 'CC BY 4.0',
    },
  },

  // ==================== DIGESTIVE SYSTEM ====================
  {
    text: `The digestive system consists of the gastrointestinal (GI) tract and accessory organs. The GI tract is a continuous tube approximately 9 meters long, extending from the mouth to the anus. It includes the oral cavity, pharynx, esophagus, stomach, small intestine, and large intestine.

The stomach is a J-shaped muscular organ located in the left upper quadrant of the abdomen. It has four regions: cardia (entrance from esophagus), fundus (upper dome), body (main portion), and pylorus (connection to duodenum). The stomach wall has three muscle layers (longitudinal, circular, and oblique) that enable churning movements.

The stomach secretes gastric juice containing hydrochloric acid (HCl), pepsinogen, intrinsic factor, and mucus. HCl creates an acidic environment (pH 1.5-3.5) that denatures proteins and activates pepsinogen to pepsin. Intrinsic factor is essential for vitamin B12 absorption in the ileum.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Stomach Anatomy',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-4-the-stomach',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The small intestine is approximately 6 meters long and consists of three segments: duodenum (25 cm), jejunum (2.5 m), and ileum (3.5 m). It is the primary site of nutrient absorption. The inner surface is covered with circular folds (plicae circulares), villi, and microvilli, which increase the surface area to approximately 200 square meters.

Each villus contains a capillary network and a lacteal (lymphatic vessel). Nutrients are absorbed across the epithelium: monosaccharides and amino acids enter blood capillaries, while lipids enter lacteals as chylomicrons. The brush border enzymes (maltase, sucrase, lactase, peptidases) complete digestion of carbohydrates and proteins.

The large intestine (colon) is approximately 1.5 meters long and absorbs water and electrolytes from indigestible food matter. It includes the cecum (with appendix), ascending colon, transverse colon, descending colon, sigmoid colon, rectum, and anal canal. Bacteria in the colon synthesize vitamins K and B.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Small and Large Intestine',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The liver is the largest internal organ, weighing approximately 1.5 kg. Located in the right upper quadrant of the abdomen, it has four lobes: right (largest), left, caudate, and quadrate. The liver receives a dual blood supply: the hepatic artery (25% of blood, oxygenated) and the portal vein (75% of blood, nutrient-rich from intestines).

The functional units of the liver are lobules, hexagonal structures with a central vein. Hepatocytes (liver cells) are arranged in plates radiating from the central vein. Sinusoids (specialized capillaries) carry blood from the portal triads to the central vein. Kupffer cells in the sinusoids are macrophages that remove bacteria and debris.

The liver performs over 500 functions including: bile production, protein synthesis (albumin, clotting factors), detoxification, glucose storage (glycogen), cholesterol metabolism, and vitamin storage (A, D, E, K, B12). Bile is produced continuously and stored in the gallbladder.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Liver Anatomy and Function',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The pancreas is a retroperitoneal organ approximately 15 cm long, located behind the stomach. It has both exocrine and endocrine functions. The head of the pancreas is nestled in the curve of the duodenum, while the tail extends toward the spleen.

The exocrine pancreas produces approximately 1.5 liters of pancreatic juice daily, containing digestive enzymes (trypsin, chymotrypsin, lipase, amylase) and bicarbonate to neutralize stomach acid. Enzymes are secreted as inactive zymogens to prevent self-digestion.

The endocrine pancreas consists of clusters of cells called islets of Langerhans. These contain alpha cells (glucagon), beta cells (insulin), delta cells (somatostatin), and PP cells (pancreatic polypeptide). Insulin and glucagon regulate blood glucose levels through opposing actions.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Pancreas Anatomy',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
      license: 'CC BY 4.0',
    },
  },

  // ==================== URINARY SYSTEM ====================
  {
    text: `The kidneys are paired, bean-shaped organs located retroperitoneally against the posterior abdominal wall. Each kidney is approximately 11 cm long, 6 cm wide, and 3 cm thick, weighing about 150 grams. The right kidney is slightly lower than the left due to the liver.

Each kidney has three regions: cortex (outer), medulla (inner), and renal pelvis (funnel-shaped collecting area). The medulla contains 8-18 renal pyramids, whose tips (papillae) project into minor calyces. The nephron is the functional unit of the kidney, with approximately 1 million nephrons per kidney.

A nephron consists of a renal corpuscle (glomerulus and Bowman's capsule) and renal tubule (proximal convoluted tubule, loop of Henle, distal convoluted tubule). The collecting duct receives filtrate from multiple nephrons. Blood enters via the afferent arteriole, filters through the glomerulus, and exits via the efferent arteriole.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 25',
      section: 'Kidney Anatomy',
      system: 'urinary',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-gross-anatomy-of-the-kidney',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The ureters are muscular tubes approximately 25-30 cm long that transport urine from the kidneys to the bladder. They pass behind the peritoneum and enter the bladder at an oblique angle, which helps prevent reflux of urine. Peristaltic contractions move urine toward the bladder.

The urinary bladder is a muscular reservoir that stores urine. When empty, it lies in the pelvic cavity; when full, it can extend into the abdominal cavity. The bladder wall contains the detrusor muscle, which contracts during urination. The trigone is a triangular region defined by the two ureteral openings and the internal urethral orifice.

The urethra conducts urine from the bladder to the outside. In females, it is approximately 4 cm long. In males, it is approximately 20 cm long and is divided into prostatic, membranous, and spongy (penile) portions. The internal urethral sphincter (involuntary) and external urethral sphincter (voluntary) control urination.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 25',
      section: 'Urinary Tract Anatomy',
      system: 'urinary',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-gross-anatomy-of-the-kidney',
      license: 'CC BY 4.0',
    },
  },

  // ==================== SKELETAL SYSTEM ====================
  {
    text: `The skeletal system consists of bones, cartilage, and connective tissues that provide structural support, protection, and movement. The adult human skeleton contains 206 bones divided into two main divisions: the axial skeleton (80 bones) and the appendicular skeleton (126 bones).

The axial skeleton includes the skull (22 bones), vertebral column (26 bones), and thoracic cage (25 bones including ribs and sternum). The appendicular skeleton includes the bones of the upper and lower limbs, as well as the pectoral and pelvic girdles that attach them to the axial skeleton.

Bones are classified by their shape: long bones (femur, humerus), short bones (carpals, tarsals), flat bones (skull, ribs), irregular bones (vertebrae), and sesamoid bones (patella). Each type has distinct structural characteristics suited to its function.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 7',
      section: 'Divisions of the Skeletal System',
      system: 'skeletal',
      complexityLevel: 2,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The vertebral column (spine) consists of 33 vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), and 4 coccygeal (fused). It protects the spinal cord, supports the head and trunk, and allows flexibility and movement.

Each vertebra has a vertebral body (anterior, weight-bearing), vertebral arch (posterior, forms vertebral foramen), and various processes. The spinous process projects posteriorly, transverse processes project laterally, and articular processes form joints with adjacent vertebrae.

Intervertebral discs between vertebral bodies provide cushioning and flexibility. Each disc has a tough outer annulus fibrosus and a gel-like inner nucleus pulposus. Herniation occurs when the nucleus pulposus protrudes through the annulus fibrosus, potentially compressing spinal nerves.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 7',
      section: 'Vertebral Column',
      system: 'skeletal',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The skull consists of 22 bones: 8 cranial bones and 14 facial bones. The cranial bones (frontal, parietal x2, temporal x2, occipital, sphenoid, ethmoid) form the cranial vault that protects the brain. Sutures are immovable joints that connect cranial bones.

Major sutures include: coronal (between frontal and parietal), sagittal (between the two parietals), lambdoid (between parietal and occipital), and squamous (between temporal and parietal). The foramen magnum in the occipital bone allows the spinal cord to pass through.

Facial bones include the mandible (lower jaw, only movable skull bone), maxillae (upper jaw), zygomatic (cheekbones), nasal, lacrimal, palatine, inferior nasal conchae, and vomer. The temporomandibular joint (TMJ) connects the mandible to the temporal bone and allows chewing movements.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 7',
      section: 'Skull Anatomy',
      system: 'skeletal',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull',
      license: 'CC BY 4.0',
    },
  },

  // ==================== MUSCULAR SYSTEM ====================
  {
    text: `The muscular system consists of approximately 700 skeletal muscles that produce movement, maintain posture, and generate heat. Skeletal muscle is attached to bones by tendons and is under voluntary control. Muscle fibers are multinucleated cells that contain myofibrils composed of actin and myosin filaments.

Muscles are organized into fascicles (bundles of muscle fibers) surrounded by perimysium. The entire muscle is wrapped in epimysium. Blood vessels and nerves penetrate these connective tissue layers to supply muscle fibers. Each muscle fiber is innervated by a single motor neuron at the neuromuscular junction.

Muscles work in antagonistic pairs: when one contracts (agonist), the opposing muscle relaxes (antagonist). For example, when the biceps brachii contracts to flex the elbow, the triceps brachii relaxes. Synergist muscles assist the prime mover, while fixators stabilize joints.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 10',
      section: 'Skeletal Muscle Structure',
      system: 'muscular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-2-skeletal-muscle',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Major muscles of the upper body include the pectoralis major (chest, adducts and medially rotates arm), deltoid (shoulder, abducts arm), latissimus dorsi (back, extends and adducts arm), and trapezius (upper back, moves scapula). The rotator cuff muscles (supraspinatus, infraspinatus, teres minor, subscapularis) stabilize the shoulder joint.

The biceps brachii flexes the elbow and supinates the forearm, while the triceps brachii extends the elbow. Forearm muscles control wrist and finger movements: flexor carpi radialis and ulnaris flex the wrist, while extensor carpi radialis and ulnaris extend it.

Core muscles include the rectus abdominis (flexes trunk, "six-pack"), external and internal obliques (rotate and flex trunk), and transverse abdominis (compresses abdomen). The erector spinae group extends the vertebral column and maintains posture.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 11',
      section: 'Upper Body Muscles',
      system: 'muscular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Major muscles of the lower body include the gluteus maximus (largest muscle, extends hip), gluteus medius (abducts hip), and iliopsoas (flexes hip). The quadriceps femoris (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius) extends the knee, while the hamstrings (biceps femoris, semimembranosus, semitendinosus) flex the knee and extend the hip.

The adductor group (adductor longus, brevis, magnus, gracilis, pectineus) moves the thigh medially. The sartorius, the longest muscle in the body, crosses both the hip and knee joints.

Lower leg muscles include the gastrocnemius and soleus (calf muscles, plantar flex foot), tibialis anterior (dorsiflexes foot), and fibularis (peroneus) muscles (evert foot). The Achilles tendon is the strongest tendon in the body, connecting the calf muscles to the calcaneus (heel bone).`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 11',
      section: 'Lower Body Muscles',
      system: 'muscular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs',
      license: 'CC BY 4.0',
    },
  },

  // ==================== ENDOCRINE SYSTEM ====================
  {
    text: `The endocrine system consists of glands that secrete hormones directly into the bloodstream. Major endocrine glands include the hypothalamus, pituitary, thyroid, parathyroids, adrenals, pancreas, and gonads. Hormones are chemical messengers that regulate metabolism, growth, reproduction, and homeostasis.

The hypothalamus is the link between the nervous and endocrine systems. It produces releasing and inhibiting hormones that control the anterior pituitary. The posterior pituitary stores and releases oxytocin (uterine contractions, milk ejection) and antidiuretic hormone (ADH, water retention).

The anterior pituitary produces growth hormone (GH), thyroid-stimulating hormone (TSH), adrenocorticotropic hormone (ACTH), follicle-stimulating hormone (FSH), luteinizing hormone (LH), and prolactin. These hormones regulate their target glands through negative feedback loops.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 17',
      section: 'Endocrine System Overview',
      system: 'endocrine',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-3-the-pituitary-gland-and-hypothalamus',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The thyroid gland is a butterfly-shaped gland located anterior to the trachea. It produces thyroid hormones (T3 and T4), which regulate metabolism, and calcitonin, which lowers blood calcium levels. Thyroid hormones require iodine for synthesis.

The parathyroid glands are four small glands embedded in the posterior surface of the thyroid. They produce parathyroid hormone (PTH), which raises blood calcium by stimulating bone resorption, increasing intestinal calcium absorption, and reducing renal calcium excretion.

The adrenal glands sit atop each kidney. The adrenal cortex produces mineralocorticoids (aldosterone, sodium retention), glucocorticoids (cortisol, stress response), and androgens. The adrenal medulla produces epinephrine (adrenaline) and norepinephrine (fight-or-flight response).`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 17',
      section: 'Thyroid, Parathyroid, and Adrenal Glands',
      system: 'endocrine',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-4-the-thyroid-gland',
      license: 'CC BY 4.0',
    },
  },

  // ==================== INTEGUMENTARY SYSTEM ====================
  {
    text: `The integumentary system consists of the skin and its accessory structures (hair, nails, glands). The skin is the largest organ of the body, covering approximately 2 square meters and weighing about 4.5 kg. It protects against pathogens, UV radiation, and dehydration, regulates temperature, and contains sensory receptors.

The skin has three layers: epidermis (outer), dermis (middle), and hypodermis/subcutaneous layer (deepest). The epidermis is stratified squamous epithelium composed of keratinocytes. It has five layers in thick skin: stratum basale, stratum spinosum, stratum granulosum, stratum lucidum, and stratum corneum.

The dermis is connective tissue containing collagen and elastic fibers, blood vessels, nerves, and accessory structures. The papillary layer forms dermal papillae that create fingerprints. The reticular layer provides strength and elasticity. The hypodermis contains adipose tissue for insulation and energy storage.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 5',
      section: 'Skin Structure',
      system: 'integumentary',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/5-1-layers-of-the-skin',
      license: 'CC BY 4.0',
    },
  },

  // ==================== LYMPHATIC/IMMUNE SYSTEM ====================
  {
    text: `The lymphatic system consists of lymphatic vessels, lymph nodes, and lymphoid organs (spleen, thymus, tonsils). It returns excess interstitial fluid to the bloodstream, absorbs dietary lipids, and houses immune cells.

Lymphatic vessels begin as blind-ended lymphatic capillaries that collect interstitial fluid (lymph). Larger lymphatic vessels have valves to prevent backflow. Lymph passes through lymph nodes, which filter pathogens and contain lymphocytes. Major lymph node clusters are found in the cervical, axillary, and inguinal regions.

The spleen, located in the left upper quadrant, filters blood, stores platelets, and destroys old red blood cells (red pulp) while housing lymphocytes (white pulp). The thymus, located in the mediastinum, is where T lymphocytes mature. It is largest during childhood and gradually involutes with age.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 21',
      section: 'Lymphatic System Anatomy',
      system: 'lymphatic',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems',
      license: 'CC BY 4.0',
    },
  },

  // ==================== REPRODUCTIVE SYSTEM ====================
  {
    text: `The male reproductive system includes the testes, epididymis, vas deferens, seminal vesicles, prostate gland, bulbourethral glands, and penis. The testes are located in the scrotum, which maintains them at a temperature slightly below body temperature for optimal sperm production.

Spermatogenesis occurs in the seminiferous tubules of the testes and takes approximately 74 days. Sertoli cells support developing sperm, while Leydig cells produce testosterone. Mature sperm travel from the seminiferous tubules through the rete testis, efferent ductules, and epididymis where they mature and are stored.

During ejaculation, sperm travel through the vas deferens, which joins with the seminal vesicle duct to form the ejaculatory duct. Seminal vesicles produce fructose-rich fluid (60% of semen volume). The prostate adds alkaline fluid, and bulbourethral glands produce pre-ejaculate that neutralizes urethral acidity.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 27',
      section: 'Male Reproductive Anatomy',
      system: 'reproductive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-1-anatomy-and-physiology-of-the-male-reproductive-system',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The female reproductive system includes the ovaries, fallopian tubes (uterine tubes), uterus, vagina, and external genitalia. The ovaries produce oocytes and hormones (estrogen and progesterone). Oogenesis begins before birth but is arrested until puberty.

The uterus is a pear-shaped organ with three layers: perimetrium (outer), myometrium (muscular middle), and endometrium (inner lining). The endometrium thickens during the menstrual cycle in preparation for implantation. If pregnancy does not occur, the functional layer is shed during menstruation.

The menstrual cycle averages 28 days and includes the follicular phase (days 1-14), ovulation (day 14), and luteal phase (days 14-28). FSH stimulates follicle development, LH triggers ovulation, and the corpus luteum produces progesterone to maintain the endometrium.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 27',
      section: 'Female Reproductive Anatomy',
      system: 'reproductive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      license: 'CC BY 4.0',
    },
  },
];

export const PHYSIOLOGY_CONTENT: SourceContent[] = [
  {
    text: `The cardiac cycle describes the sequence of events that occur during one complete heartbeat. It consists of two main phases: systole (contraction) and diastole (relaxation). The average cardiac cycle lasts about 0.8 seconds at a heart rate of 75 beats per minute.

During atrial systole, the atria contract and push remaining blood into the ventricles. This is followed by ventricular systole, where the ventricles contract powerfully, ejecting blood into the pulmonary artery (right ventricle) and aorta (left ventricle). The AV valves close at the start of ventricular systole, producing the first heart sound (S1, "lub"). The semilunar valves close at the end of ventricular systole, producing the second heart sound (S2, "dub").

Cardiac output is the volume of blood pumped by the heart per minute. It equals stroke volume (amount pumped per beat) multiplied by heart rate. Normal cardiac output is approximately 5 liters per minute at rest.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 19',
      section: 'Cardiac Cycle',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Blood pressure is the force exerted by blood against the walls of blood vessels. It is typically measured in millimeters of mercury (mmHg) and expressed as systolic pressure over diastolic pressure. Systolic pressure is the maximum pressure during ventricular contraction, while diastolic pressure is the minimum pressure during ventricular relaxation.

Normal blood pressure is approximately 120/80 mmHg. Hypertension is defined as a blood pressure consistently above 130/80 mmHg. Blood pressure is regulated by several mechanisms including the baroreceptor reflex, the renin-angiotensin-aldosterone system (RAAS), and antidiuretic hormone (ADH).

Mean arterial pressure (MAP) represents the average pressure in the arteries during one cardiac cycle. It can be estimated as diastolic pressure plus one-third of the pulse pressure. A MAP of at least 60 mmHg is necessary to perfuse vital organs.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 20',
      section: 'Blood Pressure Regulation',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Respiration involves two processes: ventilation (breathing) and gas exchange. Ventilation is the mechanical movement of air into and out of the lungs. Inspiration occurs when the diaphragm and external intercostals contract, increasing thoracic volume and decreasing intrapulmonary pressure below atmospheric pressure.

Expiration is normally passive, resulting from elastic recoil of the lungs. Forced expiration involves the internal intercostals and abdominal muscles. Tidal volume (500 mL) is the amount of air moved during normal breathing. Vital capacity is the maximum amount of air that can be exhaled after maximum inspiration.

Gas exchange occurs by diffusion across the respiratory membrane. Oxygen diffuses from alveoli into blood, binding to hemoglobin in red blood cells. Carbon dioxide diffuses from blood into alveoli. The partial pressure gradient determines the direction and rate of diffusion.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 22',
      section: 'Pulmonary Ventilation and Gas Exchange',
      system: 'respiratory',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Urine formation involves three processes: glomerular filtration, tubular reabsorption, and tubular secretion. Glomerular filtration produces approximately 180 liters of filtrate per day, but 99% is reabsorbed. The glomerular filtration rate (GFR) is normally about 125 mL/min.

Tubular reabsorption occurs primarily in the proximal convoluted tubule (PCT), where most glucose, amino acids, and ions are reclaimed. The loop of Henle establishes the concentration gradient in the medulla through countercurrent multiplication. The distal convoluted tubule (DCT) and collecting duct fine-tune urine concentration under hormonal control.

ADH (antidiuretic hormone) increases water reabsorption in the collecting duct, producing concentrated urine. Aldosterone increases sodium reabsorption in the DCT, indirectly increasing water retention. Atrial natriuretic peptide (ANP) promotes sodium excretion.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 25',
      section: 'Urine Formation',
      system: 'urinary',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-5-physiology-of-urine-formation',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Digestion involves mechanical and chemical breakdown of food. Mechanical digestion includes chewing, churning, and segmentation. Chemical digestion uses enzymes to break down macromolecules into absorbable units: carbohydrates to monosaccharides, proteins to amino acids, and lipids to fatty acids and monoglycerides.

Carbohydrate digestion begins in the mouth with salivary amylase and continues in the small intestine with pancreatic amylase. Brush border enzymes complete the process. Protein digestion begins in the stomach with pepsin and continues in the small intestine with pancreatic proteases (trypsin, chymotrypsin, carboxypeptidase).

Lipid digestion requires emulsification by bile salts before pancreatic lipase can act. The products form micelles, which transport lipids to the brush border for absorption. Inside enterocytes, triglycerides are reassembled and packaged into chylomicrons for transport via lymphatics.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Digestive Processes',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7-chemical-digestion-and-absorption',
      license: 'CC BY 4.0',
    },
  },
];

export const PATHOLOGY_CONTENT: SourceContent[] = [
  {
    text: `Hypertension, or high blood pressure, is a chronic medical condition in which the systemic arterial blood pressure is elevated. It is classified as either primary (essential) hypertension, which has no identifiable cause and accounts for 90-95% of cases, or secondary hypertension, which results from an identifiable underlying condition.

Risk factors for primary hypertension include age, family history, obesity, physical inactivity, tobacco use, high sodium intake, low potassium intake, excessive alcohol consumption, and stress. Secondary causes include renal artery stenosis, primary aldosteronism, pheochromocytoma, Cushing syndrome, and coarctation of the aorta.

Untreated hypertension can lead to serious complications including stroke, heart failure, coronary artery disease, chronic kidney disease, and retinopathy. Treatment typically involves lifestyle modifications (diet, exercise, weight loss) and pharmacological therapy with antihypertensive medications.`,
    metadata: {
      source: 'StatPearls',
      section: 'Hypertension',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539859/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Type 2 diabetes mellitus is a metabolic disorder characterized by chronic hyperglycemia resulting from insulin resistance and relative insulin deficiency. It accounts for approximately 90-95% of all diabetes cases and is strongly associated with obesity and physical inactivity.

Pathophysiology involves multiple defects: decreased insulin sensitivity in muscle and adipose tissue, increased hepatic glucose production, impaired insulin secretion from pancreatic beta cells, and abnormal incretin hormone function. Over time, persistent hyperglycemia leads to microvascular complications (retinopathy, nephropathy, neuropathy) and macrovascular complications (coronary artery disease, stroke, peripheral vascular disease).

Diagnosis is based on fasting plasma glucose ≥126 mg/dL, 2-hour plasma glucose ≥200 mg/dL during OGTT, HbA1c ≥6.5%, or random plasma glucose ≥200 mg/dL with classic symptoms. Management includes lifestyle modifications, oral hypoglycemic agents, and potentially insulin therapy.`,
    metadata: {
      source: 'StatPearls',
      section: 'Type 2 Diabetes Mellitus',
      system: 'endocrine',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK513253/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Coronary artery disease (CAD) is the most common type of heart disease, caused by atherosclerosis of the coronary arteries. Atherosclerosis is the buildup of lipid-rich plaques in the arterial wall, leading to narrowing of the lumen and reduced blood flow to the myocardium.

Risk factors include hyperlipidemia (high LDL, low HDL), hypertension, diabetes, smoking, obesity, family history, and sedentary lifestyle. Stable angina occurs when oxygen demand exceeds supply during exertion. Acute coronary syndrome (unstable angina, NSTEMI, STEMI) results from plaque rupture and thrombus formation.

Diagnosis involves ECG, cardiac biomarkers (troponin), stress testing, and coronary angiography. Treatment includes lifestyle modifications, medications (aspirin, statins, beta-blockers, ACE inhibitors), and revascularization (PCI with stenting or CABG surgery).`,
    metadata: {
      source: 'StatPearls',
      section: 'Coronary Artery Disease',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK564304/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Chronic obstructive pulmonary disease (COPD) is a progressive lung disease characterized by persistent airflow limitation. It includes emphysema (destruction of alveoli) and chronic bronchitis (inflammation and mucus hypersecretion in airways). Smoking is the primary cause, accounting for 80-90% of cases.

Pathophysiology involves chronic inflammation leading to airway remodeling, mucus hypersecretion, and loss of elastic recoil. Patients present with dyspnea, chronic cough, and sputum production. Spirometry showing FEV1/FVC ratio <0.70 after bronchodilator confirms diagnosis.

Management includes smoking cessation (most important), bronchodilators (beta-agonists, anticholinergics), inhaled corticosteroids for frequent exacerbations, pulmonary rehabilitation, and supplemental oxygen if hypoxemic. COPD exacerbations are treated with systemic corticosteroids and antibiotics.`,
    metadata: {
      source: 'StatPearls',
      section: 'COPD',
      system: 'respiratory',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK559281/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Chronic kidney disease (CKD) is defined as abnormalities of kidney structure or function present for more than 3 months. It is staged by GFR: Stage 1 (≥90), Stage 2 (60-89), Stage 3a (45-59), Stage 3b (30-44), Stage 4 (15-29), Stage 5 (<15 or dialysis).

Common causes include diabetes (leading cause), hypertension, glomerulonephritis, and polycystic kidney disease. CKD leads to accumulation of uremic toxins, fluid overload, electrolyte imbalances (hyperkalemia, hyperphosphatemia), metabolic acidosis, and anemia (decreased erythropoietin production).

Management focuses on treating underlying causes, controlling blood pressure (target <130/80), managing complications, and slowing progression. ACE inhibitors or ARBs are preferred antihypertensives. Dietary modifications include protein, sodium, potassium, and phosphorus restriction. End-stage renal disease requires dialysis or transplantation.`,
    metadata: {
      source: 'StatPearls',
      section: 'Chronic Kidney Disease',
      system: 'urinary',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK535404/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Osteoarthritis (OA) is the most common form of arthritis, characterized by progressive degeneration of articular cartilage. It primarily affects weight-bearing joints (knee, hip) and the hands. Risk factors include age, obesity, joint injury, repetitive stress, and genetics.

Pathophysiology involves cartilage degradation, subchondral bone sclerosis, osteophyte (bone spur) formation, and synovial inflammation. Patients present with joint pain that worsens with activity, stiffness lasting <30 minutes, and reduced range of motion. Crepitus may be heard on examination.

X-ray findings include joint space narrowing, osteophytes, subchondral sclerosis, and subchondral cysts. Treatment is primarily symptomatic: weight loss, physical therapy, acetaminophen, NSAIDs, and intra-articular corticosteroid injections. Joint replacement surgery is considered for severe, refractory cases.`,
    metadata: {
      source: 'StatPearls',
      section: 'Osteoarthritis',
      system: 'musculoskeletal',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK482326/',
      license: 'CC BY 4.0',
    },
  },
];

export const PHARMACOLOGY_CONTENT: SourceContent[] = [
  // ==================== CARDIOVASCULAR PHARMACOLOGY ====================
  {
    text: `Beta-blockers (beta-adrenergic antagonists) are a class of medications that block the effects of epinephrine and norepinephrine on beta-adrenergic receptors. They are widely used for hypertension, heart failure, arrhythmias, and angina. Common examples include metoprolol, atenolol, carvedilol, and propranolol.

Beta-1 selective blockers (metoprolol, atenolol) primarily affect the heart, reducing heart rate and contractility. Non-selective blockers (propranolol) also block beta-2 receptors in the lungs and blood vessels. Carvedilol and labetalol additionally block alpha-1 receptors, providing vasodilation.

Common side effects include bradycardia, fatigue, cold extremities, and sexual dysfunction. Beta-blockers should be used cautiously in patients with asthma (risk of bronchospasm), diabetes (may mask hypoglycemia symptoms), and peripheral vascular disease. Abrupt discontinuation can cause rebound tachycardia and hypertension.`,
    metadata: {
      source: 'StatPearls',
      section: 'Beta-Blockers',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532906/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `ACE inhibitors (angiotensin-converting enzyme inhibitors) block the conversion of angiotensin I to angiotensin II, a potent vasoconstrictor. This reduces blood pressure and decreases aldosterone secretion. Common examples include lisinopril, enalapril, ramipril, and captopril.

ACE inhibitors are first-line therapy for hypertension, heart failure, and diabetic nephropathy. They provide cardiovascular protection and slow progression of kidney disease in diabetic patients. The RAAS blockade reduces preload and afterload, improving cardiac output in heart failure.

The most common side effect is a dry, persistent cough (occurs in 5-20% of patients) due to accumulation of bradykinin. Angioedema is a rare but serious adverse effect. ACE inhibitors are contraindicated in pregnancy (teratogenic) and bilateral renal artery stenosis. Hyperkalemia and acute kidney injury may occur, especially when combined with NSAIDs or potassium-sparing diuretics.`,
    metadata: {
      source: 'StatPearls',
      section: 'ACE Inhibitors',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430896/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Statins (HMG-CoA reductase inhibitors) are the primary medications for lowering LDL cholesterol. They competitively inhibit the enzyme HMG-CoA reductase, which catalyzes the rate-limiting step in cholesterol synthesis. This leads to upregulation of LDL receptors and increased clearance of LDL from blood.

Common statins include atorvastatin, rosuvastatin, simvastatin, and pravastatin. High-intensity statins (atorvastatin 40-80mg, rosuvastatin 20-40mg) can reduce LDL by ≥50%. They also modestly raise HDL and lower triglycerides. Statins have pleiotropic effects including anti-inflammatory and plaque-stabilizing properties.

Side effects include myalgias (muscle pain without elevated CK), myopathy (with elevated CK), and rarely rhabdomyolysis. Hepatotoxicity is uncommon but liver function should be monitored. Drug interactions occur with CYP3A4 inhibitors (grapefruit juice, macrolides, azole antifungals) for simvastatin and atorvastatin.`,
    metadata: {
      source: 'StatPearls',
      section: 'Statins',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430940/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Antiplatelet agents prevent platelet aggregation and are essential in preventing arterial thrombosis. Aspirin irreversibly inhibits cyclooxygenase-1 (COX-1), blocking thromboxane A2 synthesis for the platelet's lifetime (7-10 days). Low-dose aspirin (81-325mg) is used for cardiovascular prevention.

P2Y12 inhibitors (clopidogrel, prasugrel, ticagrelor) block ADP-mediated platelet activation. Clopidogrel is a prodrug requiring hepatic activation via CYP2C19; genetic polymorphisms affect response. Prasugrel and ticagrelor have more predictable effects. Dual antiplatelet therapy (DAPT) with aspirin plus a P2Y12 inhibitor is standard after acute coronary syndrome or coronary stenting.

Bleeding is the primary risk with all antiplatelet agents. Aspirin can cause GI bleeding and should be used with proton pump inhibitors in high-risk patients. P2Y12 inhibitors should be held before elective surgery. Clopidogrel interacts with omeprazole (CYP2C19 inhibition).`,
    metadata: {
      source: 'StatPearls',
      section: 'Antiplatelet Drugs',
      system: 'cardiovascular',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537062/',
      license: 'CC BY 4.0',
    },
  },

  // ==================== DIABETES PHARMACOLOGY ====================
  {
    text: `Metformin is the first-line medication for type 2 diabetes mellitus. It is a biguanide that primarily reduces hepatic glucose production and improves insulin sensitivity in peripheral tissues. Unlike sulfonylureas, metformin does not cause hypoglycemia when used alone and is weight-neutral or promotes modest weight loss.

Metformin also has cardiovascular benefits, reducing the risk of myocardial infarction and cardiovascular mortality. It may reduce cancer risk and has potential anti-aging effects. The usual dose is 500-2000mg daily, typically started at 500mg with meals and titrated to minimize GI side effects.

Common side effects include nausea, diarrhea, and abdominal discomfort, which often improve over time. Vitamin B12 deficiency can occur with long-term use. Lactic acidosis is rare but potentially fatal, especially in patients with renal impairment, hepatic dysfunction, or conditions causing tissue hypoxia. Metformin should be held before contrast procedures and resumed after confirming stable renal function.`,
    metadata: {
      source: 'StatPearls',
      section: 'Metformin',
      system: 'endocrine',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK518983/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `SGLT2 inhibitors (sodium-glucose cotransporter-2 inhibitors) block glucose reabsorption in the proximal tubule of the kidney, promoting glucosuria and lowering blood glucose. Examples include empagliflozin, dapagliflozin, and canagliflozin. They reduce HbA1c by 0.5-1.0% and promote weight loss (2-3 kg).

Beyond glycemic control, SGLT2 inhibitors have remarkable cardiovascular and renal benefits. They reduce the risk of heart failure hospitalization, cardiovascular death, and progression of chronic kidney disease. These benefits are independent of glucose lowering and have led to their use in heart failure and CKD even without diabetes.

Side effects include genital mycotic infections (yeast infections), urinary tract infections, and volume depletion. Euglycemic diabetic ketoacidosis is a rare but serious complication, particularly in patients with reduced carbohydrate intake or acute illness. Canagliflozin may increase fracture and amputation risk. SGLT2 inhibitors should be held during acute illness or before surgery.`,
    metadata: {
      source: 'StatPearls',
      section: 'SGLT2 Inhibitors',
      system: 'endocrine',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK576405/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `GLP-1 receptor agonists (glucagon-like peptide-1 agonists) mimic the incretin hormone GLP-1, which is released from the gut after eating. They stimulate glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, and promote satiety. Examples include semaglutide, liraglutide, dulaglutide, and exenatide.

GLP-1 agonists reduce HbA1c by 1.0-1.5% and produce significant weight loss (3-6 kg or more with semaglutide). They have cardiovascular benefits, reducing major adverse cardiovascular events in patients with established atherosclerotic disease. Some agents (semaglutide, liraglutide) are also FDA-approved for weight management at higher doses.

Common side effects are gastrointestinal: nausea, vomiting, and diarrhea, which typically improve over time with gradual dose titration. There is a theoretical risk of pancreatitis and contraindication in patients with personal or family history of medullary thyroid carcinoma or MEN2. Injectable formulations are given daily or weekly; oral semaglutide is also available.`,
    metadata: {
      source: 'StatPearls',
      section: 'GLP-1 Receptor Agonists',
      system: 'endocrine',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551568/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Insulin is essential for type 1 diabetes and often required in advanced type 2 diabetes. Human insulin and insulin analogs are available with varying onset and duration of action. Rapid-acting insulins (lispro, aspart, glulisine) work within 15 minutes and last 3-5 hours. Regular insulin has onset in 30-60 minutes.

Intermediate-acting NPH insulin has onset in 1-2 hours and lasts 12-18 hours. Long-acting basal insulins (glargine, detemir, degludec) provide relatively flat 24-hour coverage. Insulin regimens range from once-daily basal insulin to intensive basal-bolus therapy with multiple daily injections or continuous subcutaneous infusion (insulin pump).

Hypoglycemia is the most common and serious side effect, with symptoms including sweating, tremor, confusion, and in severe cases, seizures or loss of consciousness. Weight gain is common. Injection site reactions, lipohypertrophy, and rarely allergic reactions may occur. Patient education on proper injection technique, glucose monitoring, and hypoglycemia treatment is essential.`,
    metadata: {
      source: 'StatPearls',
      section: 'Insulin Therapy',
      system: 'endocrine',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK278938/',
      license: 'CC BY 4.0',
    },
  },

  // ==================== PAIN AND INFLAMMATION ====================
  {
    text: `NSAIDs (non-steroidal anti-inflammatory drugs) inhibit cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis. This provides analgesic, anti-inflammatory, and antipyretic effects. Traditional NSAIDs (ibuprofen, naproxen, diclofenac) inhibit both COX-1 and COX-2. COX-2 selective inhibitors (celecoxib) spare COX-1.

NSAIDs are effective for musculoskeletal pain, headaches, dysmenorrhea, and inflammatory conditions like arthritis. They are often used in combination with acetaminophen for multimodal analgesia. Topical NSAIDs (diclofenac gel) provide local relief with less systemic exposure.

GI toxicity (ulcers, bleeding) is the most common serious adverse effect, related to COX-1 inhibition. COX-2 selective inhibitors have less GI toxicity but increased cardiovascular risk. All NSAIDs can cause acute kidney injury, especially in volume-depleted patients or those on ACE inhibitors/ARBs. They should be avoided in the third trimester of pregnancy (premature ductus closure) and used cautiously in the elderly.`,
    metadata: {
      source: 'StatPearls',
      section: 'NSAIDs',
      system: 'musculoskeletal',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK547742/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Opioid analgesics bind to mu, kappa, and delta opioid receptors, producing analgesia, euphoria, and respiratory depression. They are classified by potency and formulation. Weak opioids include codeine and tramadol. Strong opioids include morphine, oxycodone, hydromorphone, fentanyl, and methadone.

Opioids are indicated for moderate to severe pain, particularly cancer pain and acute post-surgical pain. For chronic non-cancer pain, opioids should be considered only after non-opioid options have failed, with careful risk-benefit assessment. Equianalgesic dosing tables guide conversions between opioids.

Common side effects include constipation (which does not develop tolerance), nausea, sedation, and pruritus. Respiratory depression is the most dangerous effect, especially with overdose or in opioid-naive patients. Long-term use leads to tolerance and physical dependence. Opioid use disorder is a significant risk, particularly with high doses or prolonged use. Naloxone reverses opioid overdose and should be co-prescribed for at-risk patients.`,
    metadata: {
      source: 'StatPearls',
      section: 'Opioid Analgesics',
      system: 'nervous',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK526015/',
      license: 'CC BY 4.0',
    },
  },

  // ==================== RESPIRATORY PHARMACOLOGY ====================
  {
    text: `Bronchodilators are the mainstay of treatment for asthma and COPD. Short-acting beta-2 agonists (SABAs) like albuterol provide rapid relief by relaxing bronchial smooth muscle. They work within minutes and last 4-6 hours. Long-acting beta-2 agonists (LABAs) like salmeterol and formoterol provide 12-24 hour bronchodilation for maintenance therapy.

Anticholinergics (muscarinic antagonists) block acetylcholine-mediated bronchoconstriction. Short-acting ipratropium is often combined with albuterol for COPD exacerbations. Long-acting tiotropium is a once-daily maintenance bronchodilator for COPD. LAMA/LABA combinations (e.g., tiotropium/olodaterol) are increasingly used.

Side effects of beta-agonists include tremor, tachycardia, and hypokalemia with high doses. LABAs should not be used as monotherapy in asthma (increased mortality risk); they must be combined with inhaled corticosteroids. Anticholinergics can cause dry mouth and urinary retention. Proper inhaler technique is essential for drug delivery.`,
    metadata: {
      source: 'StatPearls',
      section: 'Bronchodilators',
      system: 'respiratory',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519028/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Inhaled corticosteroids (ICS) are the most effective anti-inflammatory medications for asthma. They reduce airway inflammation, decrease mucus production, and improve lung function. Common ICS include fluticasone, budesonide, beclomethasone, and mometasone. They are first-line controller therapy for persistent asthma.

ICS are often combined with LABAs in fixed-dose combination inhalers (fluticasone/salmeterol, budesonide/formoterol) for moderate-to-severe asthma and COPD. In COPD, ICS reduce exacerbation frequency but do not slow disease progression. The LABA/ICS combination may increase pneumonia risk in COPD patients.

Local side effects include oral candidiasis (thrush) and dysphonia (hoarseness), which can be minimized by rinsing the mouth after use and using a spacer device. Systemic effects are minimal at low-to-moderate doses but high doses may affect bone density, growth in children, and adrenal function. ICS do not treat acute bronchospasm.`,
    metadata: {
      source: 'StatPearls',
      section: 'Inhaled Corticosteroids',
      system: 'respiratory',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470556/',
      license: 'CC BY 4.0',
    },
  },

  // ==================== ANTIBIOTICS ====================
  {
    text: `Penicillins are beta-lactam antibiotics that inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs). Natural penicillins (penicillin G, penicillin V) are effective against streptococci and some gram-negative organisms. Aminopenicillins (amoxicillin, ampicillin) have broader gram-negative coverage.

Antistaphylococcal penicillins (nafcillin, oxacillin, dicloxacillin) are resistant to staphylococcal beta-lactamase. Extended-spectrum penicillins (piperacillin) combined with beta-lactamase inhibitors (piperacillin-tazobactam) cover Pseudomonas and anaerobes. Amoxicillin-clavulanate provides broader coverage than amoxicillin alone.

Hypersensitivity reactions range from rash to anaphylaxis, occurring in 1-10% of patients. Cross-reactivity with cephalosporins is lower than previously thought (~1%). GI side effects (diarrhea, nausea) are common. Ampicillin causes a maculopapular rash in patients with infectious mononucleosis.`,
    metadata: {
      source: 'StatPearls',
      section: 'Penicillins',
      system: 'infectious',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470401/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Fluoroquinolones are broad-spectrum antibiotics that inhibit bacterial DNA gyrase and topoisomerase IV. They have excellent tissue penetration and oral bioavailability. Ciprofloxacin has strong gram-negative coverage including Pseudomonas. Levofloxacin and moxifloxacin have improved gram-positive and respiratory pathogen coverage.

Fluoroquinolones are used for urinary tract infections, respiratory infections, intra-abdominal infections, and certain sexually transmitted infections. They achieve high concentrations in urine, prostate, and respiratory secretions. However, resistance is increasing, and they should be reserved for situations where other antibiotics are inappropriate.

Serious adverse effects include tendinopathy and tendon rupture (especially Achilles tendon, risk increased with corticosteroids and in elderly), peripheral neuropathy, CNS effects (seizures, confusion), QT prolongation, and aortic aneurysm/dissection. They are contraindicated in pregnancy and children (cartilage damage in animal studies). FDA black box warnings limit their use for uncomplicated infections.`,
    metadata: {
      source: 'StatPearls',
      section: 'Fluoroquinolones',
      system: 'infectious',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557777/',
      license: 'CC BY 4.0',
    },
  },

  // ==================== PSYCHIATRIC PHARMACOLOGY ====================
  {
    text: `Selective serotonin reuptake inhibitors (SSRIs) are first-line medications for depression and anxiety disorders. They selectively inhibit serotonin reuptake at the presynaptic neuron, increasing serotonin availability in the synaptic cleft. Common SSRIs include sertraline, fluoxetine, escitalopram, paroxetine, and citalopram.

SSRIs are effective for major depressive disorder, generalized anxiety disorder, panic disorder, OCD, PTSD, and social anxiety disorder. They typically take 2-4 weeks to show therapeutic effect. Sertraline and escitalopram are often preferred due to favorable side effect profiles and fewer drug interactions.

Common side effects include GI upset (nausea, diarrhea), sexual dysfunction (decreased libido, anorgasmia), weight changes, insomnia or somnolence, and headache. Serotonin syndrome can occur with concomitant serotonergic drugs (MAOIs, tramadol, triptans). SSRIs increase bleeding risk when combined with antiplatelet agents or anticoagulants. Discontinuation syndrome (dizziness, irritability, flu-like symptoms) can occur with abrupt cessation, especially with paroxetine.`,
    metadata: {
      source: 'StatPearls',
      section: 'SSRIs',
      system: 'nervous',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554406/',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Benzodiazepines enhance the effect of GABA at the GABA-A receptor, producing anxiolytic, sedative, hypnotic, anticonvulsant, and muscle relaxant effects. They are classified by duration of action: short-acting (triazolam, midazolam), intermediate-acting (lorazepam, alprazolam), and long-acting (diazepam, clonazepam).

Benzodiazepines are used for acute anxiety, panic attacks, insomnia, alcohol withdrawal, seizures, and procedural sedation. Lorazepam is preferred in hepatic impairment as it lacks active metabolites. IV midazolam and lorazepam are used for status epilepticus. However, benzodiazepines should generally be used short-term due to dependence potential.

Side effects include sedation, cognitive impairment, ataxia, and respiratory depression (especially when combined with opioids or alcohol). Physical dependence develops with regular use, and withdrawal can cause seizures. Benzodiazepines are associated with increased fall risk and hip fractures in the elderly. Flumazenil reverses benzodiazepine overdose but can precipitate withdrawal seizures.`,
    metadata: {
      source: 'StatPearls',
      section: 'Benzodiazepines',
      system: 'nervous',
      complexityLevel: 4,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470159/',
      license: 'CC BY 4.0',
    },
  },
];

export const HISTOLOGY_CONTENT: SourceContent[] = [
  // ==================== EPITHELIAL TISSUE ====================
  {
    text: `Epithelial tissue covers body surfaces, lines body cavities and organs, and forms glands. It is characterized by cells that are closely packed with minimal extracellular matrix, resting on a basement membrane. Epithelium is avascular, receiving nutrients by diffusion from underlying connective tissue.

Epithelium is classified by cell shape (squamous, cuboidal, columnar) and layering (simple, stratified, pseudostratified). Simple squamous epithelium (alveoli, blood vessel endothelium) allows diffusion and filtration. Simple cuboidal epithelium lines kidney tubules and ducts. Simple columnar epithelium (intestine) is specialized for absorption and secretion.

Stratified epithelium provides protection in areas of wear. Stratified squamous epithelium (keratinized in skin, non-keratinized in mouth, esophagus, vagina) protects against abrasion. Transitional epithelium (urothelium) lines the urinary tract and can stretch. Pseudostratified ciliated columnar epithelium lines the respiratory tract, with cilia moving mucus.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 4',
      section: 'Epithelial Tissue',
      system: 'general',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-2-epithelial-tissue',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Glandular epithelium forms exocrine and endocrine glands. Exocrine glands secrete products through ducts onto body surfaces or into cavities. They are classified by structure (simple vs. compound, tubular vs. acinar) and secretion method (merocrine, apocrine, holocrine).

Merocrine glands (most common) release products by exocytosis without cell damage (sweat glands, salivary glands, pancreatic acinar cells). Apocrine glands release products with part of the cell membrane (apocrine sweat glands, mammary glands). Holocrine glands release entire cells filled with secretory product (sebaceous glands).

Endocrine glands are ductless glands that secrete hormones directly into the bloodstream. They include the pituitary, thyroid, parathyroids, adrenals, pineal, and the endocrine portions of the pancreas, ovaries, and testes. Endocrine cells may be organized into distinct glands or scattered as individual cells (enteroendocrine cells in the GI tract).`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 4',
      section: 'Glandular Epithelium',
      system: 'general',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-2-epithelial-tissue',
      license: 'CC BY 4.0',
    },
  },

  // ==================== CONNECTIVE TISSUE ====================
  {
    text: `Connective tissue provides structural support, binds organs together, and stores energy. Unlike epithelium, connective tissue has abundant extracellular matrix composed of ground substance and fibers. The matrix is produced by resident cells including fibroblasts, adipocytes, and various immune cells.

Collagen fibers provide tensile strength and are the most abundant protein in the body. Type I collagen is found in bone, tendons, and dermis. Type II is specific to cartilage. Elastic fibers (elastin) provide stretch and recoil in blood vessels, lungs, and skin. Reticular fibers (type III collagen) form delicate networks in lymphoid organs and bone marrow.

Connective tissue proper includes loose (areolar, adipose, reticular) and dense (regular, irregular, elastic) types. Areolar tissue is the most widely distributed, providing support and containing blood vessels and nerves. Adipose tissue stores energy as triglycerides and provides insulation. Dense regular connective tissue forms tendons and ligaments.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 4',
      section: 'Connective Tissue',
      system: 'general',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-3-connective-tissue-supports-and-protects',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Cartilage is specialized connective tissue with a firm but flexible matrix containing chondrocytes in lacunae. It is avascular and receives nutrients by diffusion, which limits its healing capacity. There are three types: hyaline, elastic, and fibrocartilage.

Hyaline cartilage is the most common type, found in articular surfaces of joints, costal cartilages, tracheal rings, and the fetal skeleton. Its matrix contains type II collagen and provides smooth, low-friction surfaces. Elastic cartilage contains elastic fibers in addition to collagen, providing flexibility (external ear, epiglottis).

Fibrocartilage contains dense bundles of type I collagen, providing high tensile strength. It is found in intervertebral discs, menisci of the knee, and the pubic symphysis. Fibrocartilage often occurs at the junction between tendons/ligaments and bone. Unlike hyaline cartilage, fibrocartilage lacks a perichondrium.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 4',
      section: 'Cartilage',
      system: 'skeletal',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-3-connective-tissue-supports-and-protects',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Bone (osseous tissue) is mineralized connective tissue providing support, protection, movement, and mineral storage. The matrix contains type I collagen (organic, providing flexibility) and hydroxyapatite crystite (inorganic, providing hardness). Osteocytes reside in lacunae and communicate via canaliculi.

Compact (cortical) bone forms the dense outer layer of bones. It is organized into osteons (Haversian systems), cylindrical units with concentric lamellae surrounding a central canal containing blood vessels. Volkmann's canals connect adjacent osteons. Compact bone provides strength against bending and twisting forces.

Spongy (trabecular, cancellous) bone consists of trabeculae forming a lattice-like network, with bone marrow filling the spaces. It is found in the interior of bones, particularly the epiphyses of long bones and vertebral bodies. Spongy bone is lighter than compact bone and is oriented along lines of stress.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 6',
      section: 'Bone Tissue',
      system: 'skeletal',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure',
      license: 'CC BY 4.0',
    },
  },

  // ==================== MUSCLE TISSUE ====================
  {
    text: `Skeletal muscle is composed of long, multinucleated fibers with characteristic striations visible under microscopy. Striations result from the organized arrangement of sarcomeres, the basic contractile units. Each sarcomere extends from one Z-disc to the next and contains thick (myosin) and thin (actin) filaments.

A bands (dark) contain overlapping thick and thin filaments; the H zone within contains only thick filaments. I bands (light) contain only thin filaments and span adjacent sarcomeres across the Z-disc. The M line is at the center of the sarcomere. During contraction, thin filaments slide over thick filaments, shortening the sarcomere (sliding filament theory).

Muscle fibers are classified by contraction speed and metabolic properties. Type I (slow oxidative) fibers are fatigue-resistant and suited for endurance activities. Type IIa (fast oxidative-glycolytic) fibers combine speed with moderate fatigue resistance. Type IIx (fast glycolytic) fibers generate rapid, powerful contractions but fatigue quickly.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 10',
      section: 'Skeletal Muscle Histology',
      system: 'muscular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-2-skeletal-muscle',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Cardiac muscle is found exclusively in the heart. Like skeletal muscle, it is striated, but cardiac muscle fibers are shorter, branched, and usually have one central nucleus (occasionally two). Intercalated discs connect adjacent cardiac muscle cells, containing desmosomes (mechanical coupling) and gap junctions (electrical coupling).

The gap junctions at intercalated discs allow rapid spread of action potentials, enabling the heart to contract as a functional syncytium. Cardiac muscle has abundant mitochondria (25-35% of cell volume) to support continuous aerobic metabolism. It relies primarily on fatty acids and glucose for energy.

Cardiac muscle has intrinsic rhythmicity due to specialized pacemaker cells. Unlike skeletal muscle, it cannot undergo tetanic contraction due to a long refractory period, which prevents fatal sustained contraction. The sarcomere structure is similar to skeletal muscle, but T-tubules are larger and located at Z-discs rather than A-I junctions.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 19',
      section: 'Cardiac Muscle Histology',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2-cardiac-muscle-and-electrical-activity',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Smooth muscle is found in the walls of hollow organs (blood vessels, GI tract, urinary bladder, uterus, airways). It is non-striated because myofilaments are not organized into sarcomeres. Smooth muscle cells are spindle-shaped with a single central nucleus and lack T-tubules.

Smooth muscle contraction is slower and more sustained than skeletal muscle. It can maintain tone for prolonged periods with low energy expenditure (latch state). Contraction is regulated by calcium-calmodulin-dependent phosphorylation of myosin light chains, rather than the troponin system of striated muscle.

Smooth muscle is classified as single-unit (visceral) or multi-unit. Single-unit smooth muscle cells are connected by gap junctions and contract as a syncytium in response to stretch or autonomic stimulation (GI tract, uterus). Multi-unit smooth muscle cells act independently and require direct innervation for contraction (iris, large arteries, vas deferens).`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 10',
      section: 'Smooth Muscle Histology',
      system: 'muscular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-8-smooth-muscle',
      license: 'CC BY 4.0',
    },
  },

  // ==================== NERVOUS TISSUE ====================
  {
    text: `Neurons are the functional units of the nervous system, specialized for generating and conducting electrical impulses. A typical neuron has a cell body (soma) containing the nucleus, dendrites that receive signals, and an axon that transmits signals to other neurons or effector cells.

Neurons are classified by structure (multipolar, bipolar, unipolar/pseudounipolar) and function (sensory, motor, interneurons). Multipolar neurons (most common) have multiple dendrites and one axon. Bipolar neurons have one dendrite and one axon (retina, olfactory epithelium). Pseudounipolar neurons have a single process that bifurcates (sensory neurons in dorsal root ganglia).

The axon hillock is the site of action potential initiation. Axons may be myelinated or unmyelinated. Myelin is formed by oligodendrocytes in the CNS and Schwann cells in the PNS. Nodes of Ranvier are gaps in the myelin sheath where action potentials are regenerated, enabling rapid saltatory conduction.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 12',
      section: 'Neuron Histology',
      system: 'nervous',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Glial cells (neuroglia) are non-neuronal cells that support, protect, and maintain neurons. In the CNS, they outnumber neurons and comprise about half the brain's volume. Unlike neurons, glial cells can divide throughout life.

Astrocytes are the most abundant glial cells in the CNS. They maintain the blood-brain barrier, regulate ion and neurotransmitter concentrations, provide metabolic support to neurons, and participate in synaptic transmission. Reactive astrocytes form glial scars after CNS injury.

Oligodendrocytes form myelin sheaths around CNS axons; one oligodendrocyte can myelinate multiple axon segments. Microglia are the resident immune cells of the CNS, derived from mesoderm rather than neuroectoderm. Ependymal cells line the ventricles and central canal, producing and circulating cerebrospinal fluid. In the PNS, Schwann cells form myelin (one Schwann cell per internode) and satellite cells surround neuronal cell bodies in ganglia.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 12',
      section: 'Glial Cells',
      system: 'nervous',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue',
      license: 'CC BY 4.0',
    },
  },

  // ==================== BLOOD AND LYMPHOID TISSUE ====================
  {
    text: `Blood is a specialized connective tissue with a liquid matrix (plasma) and formed elements (cells and cell fragments). Plasma (55% of blood volume) contains water, proteins (albumin, globulins, fibrinogen), electrolytes, nutrients, waste products, and hormones.

Red blood cells (erythrocytes) are biconcave discs lacking nuclei and organelles, maximizing hemoglobin content and flexibility. They live approximately 120 days before being removed by splenic macrophages. White blood cells (leukocytes) include granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes).

Neutrophils (50-70% of WBCs) are the first responders to bacterial infection, performing phagocytosis and releasing antimicrobial substances. Lymphocytes (20-40%) include T cells (cell-mediated immunity), B cells (antibody production), and NK cells (innate immunity). Platelets (thrombocytes) are cell fragments from megakaryocytes, essential for hemostasis and clot formation.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 18',
      section: 'Blood Histology',
      system: 'cardiovascular',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/18-1-an-overview-of-blood',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `Lymphoid tissue provides sites for immune cell development, activation, and surveillance. Primary lymphoid organs (bone marrow, thymus) are where lymphocytes develop and mature. Secondary lymphoid organs (lymph nodes, spleen, MALT) are where immune responses are initiated.

Lymph nodes filter lymph and contain B cell follicles in the cortex and T cell zones in the paracortex. Germinal centers within follicles are sites of B cell proliferation and antibody affinity maturation. The medulla contains plasma cells and macrophages. High endothelial venules allow lymphocyte entry from blood.

The spleen filters blood rather than lymph. White pulp contains periarteriolar lymphoid sheaths (T cells) and follicles (B cells). Red pulp consists of splenic cords and sinusoids, where aged red blood cells are removed by macrophages. Mucosa-associated lymphoid tissue (MALT) includes Peyer's patches in the intestine and tonsils in the pharynx.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 21',
      section: 'Lymphoid Tissue Histology',
      system: 'lymphatic',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems',
      license: 'CC BY 4.0',
    },
  },

  // ==================== ORGAN-SPECIFIC HISTOLOGY ====================
  {
    text: `The liver lobule is the structural and functional unit of the liver. Each hexagonal lobule has a central vein at its center and portal triads (hepatic artery, portal vein, bile duct) at the corners. Hepatocytes are arranged in plates (cords) radiating from the central vein, separated by sinusoids.

Sinusoids are specialized capillaries with fenestrated endothelium and no basement membrane, allowing direct contact between hepatocyte microvilli and blood. Kupffer cells (resident macrophages) line the sinusoids and remove bacteria, old red blood cells, and debris. The space of Disse lies between hepatocytes and sinusoidal endothelium.

Bile is produced by hepatocytes and secreted into bile canaliculi, small channels between adjacent hepatocytes. Bile flows opposite to blood flow: from the central lobule toward portal triads, then into bile ductules and larger bile ducts. Hepatic stellate cells in the space of Disse store vitamin A and can become myofibroblasts in liver fibrosis.`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 23',
      section: 'Liver Histology',
      system: 'digestive',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
      license: 'CC BY 4.0',
    },
  },
  {
    text: `The kidney nephron has distinct histological regions corresponding to different functions. The renal corpuscle consists of the glomerulus (capillary tuft) surrounded by Bowman's capsule. The visceral layer of Bowman's capsule is formed by podocytes, whose foot processes (pedicels) interdigitate around glomerular capillaries.

The filtration barrier has three layers: fenestrated capillary endothelium, glomerular basement membrane (fused from endothelial and podocyte basement membranes), and filtration slits between podocyte pedicels. This barrier allows passage of water and small solutes while retaining cells and most proteins.

The proximal convoluted tubule has cuboidal epithelium with prominent brush border (microvilli) for reabsorption. The loop of Henle has thin segments with squamous epithelium and thick segments with cuboidal cells. The distal convoluted tubule lacks a brush border but has basal infoldings for ion transport. The collecting duct has principal cells (water reabsorption) and intercalated cells (acid-base regulation).`,
    metadata: {
      source: 'OpenStax Anatomy & Physiology 2e',
      chapter: 'Chapter 25',
      section: 'Kidney Histology',
      system: 'urinary',
      complexityLevel: 3,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-3-gross-anatomy-of-the-kidney',
      license: 'CC BY 4.0',
    },
  },
];
