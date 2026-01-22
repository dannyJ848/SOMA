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
