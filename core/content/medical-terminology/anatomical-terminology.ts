/**
 * Anatomical Terminology Content
 *
 * Comprehensive anatomical vocabulary including:
 * - Directional terms (anterior/posterior, medial/lateral, etc.)
 * - Body planes (sagittal, coronal, transverse)
 * - Body regions and cavities
 * - Positional terminology
 */

import {
  DirectionalTerm,
  BodyPlane,
  BodyRegion,
  TerminologyModule,
  MedicalTerm,
} from './types';

// ============================================================================
// DIRECTIONAL TERMS
// ============================================================================

export const directionalTerms: DirectionalTerm[] = [
  // Anterior/Posterior (Front/Back)
  {
    id: 'dir-anterior',
    term: 'Anterior',
    oppositeTerm: 'Posterior',
    pronunciation: {
      ipa: '/ænˈtɪəriər/',
      simplified: 'an-TEER-ee-er',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'anterior',
      originalMeaning: 'before, in front',
    },
    definitions: {
      1: 'Toward the front of your body (like your belly button)',
      2: 'The front side of the body or toward the front',
      3: 'Situated at or directed toward the front of the body',
      4: 'Pertaining to the ventral surface in anatomical position',
      5: 'Anatomically anterior; in quadrupeds equivalent to ventral; clinically indicates structures closer to the front surface',
    },
    examples: [
      { description: 'Your nose is anterior', bodyExample: 'The nose is anterior to the ears', level: 1 },
      { description: 'Chest is anterior', bodyExample: 'The sternum is anterior to the heart', level: 2 },
      { description: 'Kneecap position', bodyExample: 'The patella is anterior to the femur', level: 3 },
      { description: 'Cardiac anatomy', bodyExample: 'The anterior descending artery courses on the anterior interventricular sulcus', level: 4 },
      { description: 'Surgical approach', bodyExample: 'Anterior cervical discectomy approaches the spine from the front of the neck', level: 5 },
    ],
    relatedTerms: ['ventral', 'frontal'],
    clinicalUsage: 'Anterior is used interchangeably with ventral in human anatomy; essential for describing surgical approaches and lesion locations',
  },
  {
    id: 'dir-posterior',
    term: 'Posterior',
    oppositeTerm: 'Anterior',
    pronunciation: {
      ipa: '/pɒˈstɪəriər/',
      simplified: 'pos-TEER-ee-er',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'posterior',
      originalMeaning: 'after, behind',
    },
    definitions: {
      1: 'Toward the back of your body (like your spine)',
      2: 'The back side of the body or toward the back',
      3: 'Situated at or directed toward the back of the body',
      4: 'Pertaining to the dorsal surface in anatomical position',
      5: 'Anatomically posterior; in quadrupeds equivalent to dorsal; critical for describing spinal and neural structures',
    },
    examples: [
      { description: 'Your back is posterior', bodyExample: 'The spine is posterior to the stomach', level: 1 },
      { description: 'Shoulder blade position', bodyExample: 'The scapula is on the posterior thorax', level: 2 },
      { description: 'Calf muscle location', bodyExample: 'The gastrocnemius is posterior to the tibia', level: 3 },
      { description: 'Cardiac anatomy', bodyExample: 'The posterior descending artery supplies the inferior wall of the heart', level: 4 },
      { description: 'Surgical anatomy', bodyExample: 'Posterior fossa tumors require occipital or retrosigmoid approaches', level: 5 },
    ],
    relatedTerms: ['dorsal', 'back'],
    clinicalUsage: 'Posterior is used interchangeably with dorsal; critical for describing spinal approaches and posterior circulation strokes',
  },

  // Superior/Inferior (Above/Below)
  {
    id: 'dir-superior',
    term: 'Superior',
    oppositeTerm: 'Inferior',
    pronunciation: {
      ipa: '/suːˈpɪəriər/',
      simplified: 'soo-PEER-ee-er',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'superior',
      originalMeaning: 'higher, above',
    },
    definitions: {
      1: 'Above something else (like your head is above your feet)',
      2: 'Higher up on the body or above another structure',
      3: 'Situated above or directed upward relative to another structure',
      4: 'Toward the cranial end of the body in anatomical position',
      5: 'Anatomically cephalad or cranial; used to describe relative position along the longitudinal body axis',
    },
    examples: [
      { description: 'Head position', bodyExample: 'Your head is superior to your shoulders', level: 1 },
      { description: 'Heart and diaphragm', bodyExample: 'The heart is superior to the diaphragm', level: 2 },
      { description: 'Kidney anatomy', bodyExample: 'The adrenal glands sit superior to the kidneys', level: 3 },
      { description: 'Vascular anatomy', bodyExample: 'The superior vena cava drains the upper body', level: 4 },
      { description: 'Surgical landmarks', bodyExample: 'The superior mesenteric artery arises inferior to the celiac trunk', level: 5 },
    ],
    relatedTerms: ['cranial', 'cephalad', 'upper'],
    clinicalUsage: 'Superior is preferred in human anatomy; cranial/cephalad used in comparative anatomy and some clinical contexts',
  },
  {
    id: 'dir-inferior',
    term: 'Inferior',
    oppositeTerm: 'Superior',
    pronunciation: {
      ipa: '/ɪnˈfɪəriər/',
      simplified: 'in-FEER-ee-er',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'inferior',
      originalMeaning: 'lower, below',
    },
    definitions: {
      1: 'Below something else (like your feet are below your knees)',
      2: 'Lower on the body or below another structure',
      3: 'Situated below or directed downward relative to another structure',
      4: 'Toward the caudal end of the body in anatomical position',
      5: 'Anatomically caudad; describes position along the longitudinal axis toward the lower body',
    },
    examples: [
      { description: 'Feet position', bodyExample: 'Your feet are inferior to your knees', level: 1 },
      { description: 'Stomach and diaphragm', bodyExample: 'The stomach is inferior to the diaphragm', level: 2 },
      { description: 'Pelvic anatomy', bodyExample: 'The bladder is inferior to the peritoneum', level: 3 },
      { description: 'Vascular anatomy', bodyExample: 'The inferior vena cava drains the lower body', level: 4 },
      { description: 'Cardiac anatomy', bodyExample: 'Inferior wall MI involves the RCA or circumflex territory', level: 5 },
    ],
    relatedTerms: ['caudal', 'caudad', 'lower'],
    clinicalUsage: 'Inferior used for human anatomy; caudal preferred in veterinary medicine and some neuroscience contexts',
  },

  // Medial/Lateral (Toward/Away from midline)
  {
    id: 'dir-medial',
    term: 'Medial',
    oppositeTerm: 'Lateral',
    pronunciation: {
      ipa: '/ˈmiːdiəl/',
      simplified: 'MEE-dee-ul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'medialis',
      originalMeaning: 'of the middle',
    },
    definitions: {
      1: 'Toward the middle of your body (like your nose)',
      2: 'Closer to the center line of the body',
      3: 'Situated nearer to the median plane of the body',
      4: 'Toward the sagittal midline in anatomical position',
      5: 'Toward the midsagittal plane; clinically important for describing limb anatomy and surgical approaches',
    },
    examples: [
      { description: 'Nose position', bodyExample: 'Your nose is medial to your ears', level: 1 },
      { description: 'Inner arm', bodyExample: 'The ulna is medial to the radius', level: 2 },
      { description: 'Knee anatomy', bodyExample: 'The medial meniscus is more commonly injured', level: 3 },
      { description: 'Brain anatomy', bodyExample: 'The medial temporal lobe contains the hippocampus', level: 4 },
      { description: 'Surgical anatomy', bodyExample: 'Medial parapatellar approach provides knee joint access', level: 5 },
    ],
    relatedTerms: ['internal', 'mesial'],
    clinicalUsage: 'Medial is essential for orthopedic and neurological descriptions; mesial used specifically in dental anatomy',
  },
  {
    id: 'dir-lateral',
    term: 'Lateral',
    oppositeTerm: 'Medial',
    pronunciation: {
      ipa: '/ˈlætərəl/',
      simplified: 'LAT-er-ul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'lateralis',
      originalMeaning: 'of the side',
    },
    definitions: {
      1: 'Toward the side of your body (like your ears)',
      2: 'Farther from the center line of the body',
      3: 'Situated farther from the median plane of the body',
      4: 'Away from the sagittal midline in anatomical position',
      5: 'Away from the midsagittal plane; critical for describing limb anatomy and lateral surgical approaches',
    },
    examples: [
      { description: 'Ear position', bodyExample: 'Your ears are lateral to your nose', level: 1 },
      { description: 'Outer arm', bodyExample: 'The radius is lateral to the ulna', level: 2 },
      { description: 'Ankle anatomy', bodyExample: 'The lateral malleolus is the outer ankle bone', level: 3 },
      { description: 'Brain anatomy', bodyExample: 'The lateral ventricles are paired CSF-containing cavities', level: 4 },
      { description: 'Surgical anatomy', bodyExample: 'Lateral decubitus position is used for thoracotomy', level: 5 },
    ],
    relatedTerms: ['external', 'outer'],
    clinicalUsage: 'Lateral is fundamental for anatomical description; lateral X-ray views show side profile',
  },

  // Proximal/Distal (Near/Far from origin)
  {
    id: 'dir-proximal',
    term: 'Proximal',
    oppositeTerm: 'Distal',
    pronunciation: {
      ipa: '/ˈprɒksɪməl/',
      simplified: 'PROK-sih-mul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'proximus',
      originalMeaning: 'nearest',
    },
    definitions: {
      1: 'Closer to where your arm or leg attaches to your body',
      2: 'Nearer to the trunk or point of attachment',
      3: 'Situated closer to the center of the body or point of origin',
      4: 'Toward the point of attachment to the trunk in limb anatomy',
      5: 'Closer to the root/origin; in limbs refers to trunk attachment; in vessels refers to the heart; in tubular structures refers to the source',
    },
    examples: [
      { description: 'Upper arm', bodyExample: 'Your shoulder is proximal to your elbow', level: 1 },
      { description: 'Thigh position', bodyExample: 'The thigh is proximal to the knee', level: 2 },
      { description: 'Bone anatomy', bodyExample: 'The proximal humerus includes the humeral head', level: 3 },
      { description: 'Vascular anatomy', bodyExample: 'Proximal LAD lesions carry higher risk', level: 4 },
      { description: 'GI anatomy', bodyExample: 'Proximal small bowel Crohns affects nutrient absorption differently', level: 5 },
    ],
    relatedTerms: ['central', 'near'],
    clinicalUsage: 'Proximal is essential for limb fracture descriptions and vascular lesion localization',
  },
  {
    id: 'dir-distal',
    term: 'Distal',
    oppositeTerm: 'Proximal',
    pronunciation: {
      ipa: '/ˈdɪstəl/',
      simplified: 'DIS-tul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'distare',
      originalMeaning: 'to be distant',
    },
    definitions: {
      1: 'Farther from where your arm or leg attaches to your body',
      2: 'Farther from the trunk or point of attachment',
      3: 'Situated farther from the center of the body or point of origin',
      4: 'Away from the point of attachment to the trunk in limb anatomy',
      5: 'Farther from the root/origin; in limbs refers to hand/foot; in vessels refers to periphery; critical for describing extent of disease',
    },
    examples: [
      { description: 'Hand position', bodyExample: 'Your hand is distal to your elbow', level: 1 },
      { description: 'Foot position', bodyExample: 'The foot is distal to the knee', level: 2 },
      { description: 'Finger anatomy', bodyExample: 'The distal phalanx is the fingertip bone', level: 3 },
      { description: 'Vascular anatomy', bodyExample: 'Distal vessel disease limits revascularization options', level: 4 },
      { description: 'Neuropathy', bodyExample: 'Diabetic neuropathy typically presents in a distal symmetric pattern', level: 5 },
    ],
    relatedTerms: ['peripheral', 'far'],
    clinicalUsage: 'Distal is fundamental for describing peripheral neuropathy patterns and extent of vascular disease',
  },

  // Superficial/Deep
  {
    id: 'dir-superficial',
    term: 'Superficial',
    oppositeTerm: 'Deep',
    pronunciation: {
      ipa: '/ˌsuːpərˈfɪʃəl/',
      simplified: 'soo-per-FISH-ul',
      stressedSyllable: 3,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'superficialis',
      originalMeaning: 'of the surface',
    },
    definitions: {
      1: 'Near the surface of your body (like your skin)',
      2: 'Closer to the surface of the body',
      3: 'Located nearer to the body surface',
      4: 'Situated toward the external surface relative to another structure',
      5: 'External to the deep fascia; clinically important for distinguishing wound depth and infection extent',
    },
    examples: [
      { description: 'Skin layer', bodyExample: 'Your skin is superficial to your muscles', level: 1 },
      { description: 'Vein location', bodyExample: 'Superficial veins are visible under the skin', level: 2 },
      { description: 'Fascia layers', bodyExample: 'The superficial fascia contains subcutaneous fat', level: 3 },
      { description: 'Muscle anatomy', bodyExample: 'The external oblique is superficial to internal oblique', level: 4 },
      { description: 'Wound classification', bodyExample: 'Superficial surgical site infections involve only skin/subcutaneous tissue', level: 5 },
    ],
    relatedTerms: ['external', 'surface', 'cutaneous'],
    clinicalUsage: 'Superficial is critical for wound classification, venous access, and describing tissue layer involvement',
  },
  {
    id: 'dir-deep',
    term: 'Deep',
    oppositeTerm: 'Superficial',
    pronunciation: {
      ipa: '/diːp/',
      simplified: 'DEEP',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'English',
      originalWord: 'deep',
      originalMeaning: 'extending far down',
    },
    definitions: {
      1: 'Far from the surface of your body (like your bones)',
      2: 'Farther from the surface of the body',
      3: 'Located farther from the body surface',
      4: 'Situated toward the interior relative to another structure',
      5: 'Internal to the deep fascia; clinically important for deep tissue infections and imaging interpretation',
    },
    examples: [
      { description: 'Bone location', bodyExample: 'Your bones are deep to your muscles', level: 1 },
      { description: 'Artery location', bodyExample: 'Deep arteries are protected by muscle', level: 2 },
      { description: 'Tissue layers', bodyExample: 'Deep veins accompany arteries in limbs', level: 3 },
      { description: 'Muscle anatomy', bodyExample: 'The transversus abdominis is the deepest abdominal muscle', level: 4 },
      { description: 'Infection spread', bodyExample: 'Deep space infections require surgical drainage', level: 5 },
    ],
    relatedTerms: ['internal', 'profundus'],
    clinicalUsage: 'Deep tissue involvement changes management - DVT vs superficial thrombophlebitis have different implications',
  },

  // Ipsilateral/Contralateral
  {
    id: 'dir-ipsilateral',
    term: 'Ipsilateral',
    oppositeTerm: 'Contralateral',
    pronunciation: {
      ipa: '/ˌɪpsɪˈlætərəl/',
      simplified: 'ip-sih-LAT-er-ul',
      stressedSyllable: 3,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'ipse + lateralis',
      originalMeaning: 'same + side',
    },
    definitions: {
      1: 'On the same side of your body',
      2: 'On the same side of the body as another structure',
      3: 'Pertaining to the same side of the body',
      4: 'Located on or affecting the same side as a reference point',
      5: 'Same side as lesion or reference; critical for understanding crossed vs uncrossed neurological pathways',
    },
    examples: [
      { description: 'Same side', bodyExample: 'Your right hand and right foot are ipsilateral', level: 2 },
      { description: 'Injury pattern', bodyExample: 'Ipsilateral fractures are on the same limb', level: 3 },
      { description: 'Neurological exam', bodyExample: 'Ipsilateral pupil dilation suggests uncal herniation', level: 4 },
      { description: 'Stroke findings', bodyExample: 'Cerebellar lesions cause ipsilateral ataxia', level: 5 },
    ],
    relatedTerms: ['homolateral', 'same-side'],
    clinicalUsage: 'Understanding ipsilateral vs contralateral patterns is fundamental for neurological localization',
  },
  {
    id: 'dir-contralateral',
    term: 'Contralateral',
    oppositeTerm: 'Ipsilateral',
    pronunciation: {
      ipa: '/ˌkɒntrəˈlætərəl/',
      simplified: 'kon-truh-LAT-er-ul',
      stressedSyllable: 3,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'contra + lateralis',
      originalMeaning: 'opposite + side',
    },
    definitions: {
      1: 'On the opposite side of your body',
      2: 'On the opposite side of the body from another structure',
      3: 'Pertaining to the opposite side of the body',
      4: 'Located on or affecting the side opposite to a reference point',
      5: 'Opposite side from lesion; reflects decussation of neural pathways; essential for stroke localization',
    },
    examples: [
      { description: 'Opposite side', bodyExample: 'Your right hand and left foot are contralateral', level: 2 },
      { description: 'Brain control', bodyExample: 'The left brain controls the contralateral right body', level: 3 },
      { description: 'Stroke findings', bodyExample: 'Contralateral hemiparesis localizes stroke to opposite hemisphere', level: 4 },
      { description: 'Surgical planning', bodyExample: 'Contralateral neck exploration may be indicated for thyroid cancer', level: 5 },
    ],
    relatedTerms: ['heterolateral', 'opposite'],
    clinicalUsage: 'Contralateral weakness is the hallmark of corticospinal tract lesions above the decussation',
  },

  // Bilateral
  {
    id: 'dir-bilateral',
    term: 'Bilateral',
    pronunciation: {
      ipa: '/baɪˈlætərəl/',
      simplified: 'by-LAT-er-ul',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'bi + lateralis',
      originalMeaning: 'two + sides',
    },
    definitions: {
      1: 'On both sides of your body',
      2: 'Affecting or involving both sides',
      3: 'Pertaining to both sides of the body',
      4: 'Occurring on or affecting both sides simultaneously',
      5: 'Involving both sides; in bilateral findings, consider systemic causes; bilateral surgical procedures have different recovery implications',
    },
    examples: [
      { description: 'Both sides', bodyExample: 'You have bilateral ears (one on each side)', level: 1 },
      { description: 'Lung exam', bodyExample: 'Bilateral breath sounds are normal', level: 2 },
      { description: 'Knee surgery', bodyExample: 'Bilateral knee replacements can be staged or simultaneous', level: 3 },
      { description: 'Adrenal disease', bodyExample: 'Bilateral adrenal hyperplasia suggests pituitary source', level: 4 },
      { description: 'Surgical planning', bodyExample: 'Bilateral mastectomy decisions involve complex risk-benefit analysis', level: 5 },
    ],
    relatedTerms: ['both-sided', 'symmetric'],
    clinicalUsage: 'Bilateral findings often suggest systemic etiology rather than localized process',
  },

  // Palmar/Dorsal (Hand-specific)
  {
    id: 'dir-palmar',
    term: 'Palmar',
    oppositeTerm: 'Dorsal',
    pronunciation: {
      ipa: '/ˈpælmər/',
      simplified: 'PAL-mer',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'palma',
      originalMeaning: 'palm of hand',
    },
    definitions: {
      1: 'The palm side of your hand (where you hold things)',
      2: 'Relating to the palm of the hand',
      3: 'Pertaining to the anterior surface of the hand',
      4: 'The volar or anterior surface of the hand in anatomical position',
      5: 'Palmar/volar surface; contains flexor tendons, palmar aponeurosis, and superficial arch; clinically important for tendon and nerve injuries',
    },
    examples: [
      { description: 'Palm location', bodyExample: 'Palm lines are on the palmar surface', level: 1 },
      { description: 'Hand anatomy', bodyExample: 'Palmar fascia covers the palm', level: 2 },
      { description: 'Nerve distribution', bodyExample: 'Median nerve provides palmar sensation', level: 3 },
      { description: 'Vascular anatomy', bodyExample: 'The superficial palmar arch is palpable', level: 4 },
      { description: 'Surgical anatomy', bodyExample: 'Palmar plate injuries are common in dorsal PIP dislocations', level: 5 },
    ],
    relatedTerms: ['volar', 'anterior (of hand)'],
    clinicalUsage: 'Palmar and volar are interchangeable for hand; palmar more common in clinical usage',
  },

  // Plantar/Dorsal (Foot-specific)
  {
    id: 'dir-plantar',
    term: 'Plantar',
    oppositeTerm: 'Dorsal',
    pronunciation: {
      ipa: '/ˈplæntər/',
      simplified: 'PLAN-ter',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'planta',
      originalMeaning: 'sole of foot',
    },
    definitions: {
      1: 'The bottom of your foot (what you stand on)',
      2: 'Relating to the sole of the foot',
      3: 'Pertaining to the inferior surface of the foot',
      4: 'The inferior or sole surface of the foot in anatomical position',
      5: 'Plantar surface; contains plantar fascia, intrinsic muscles, and medial/lateral plantar nerves; clinically important for plantar fasciitis and neuropathy',
    },
    examples: [
      { description: 'Foot bottom', bodyExample: 'Plantar warts are on the bottom of your foot', level: 1 },
      { description: 'Foot anatomy', bodyExample: 'Plantar fascia supports the arch', level: 2 },
      { description: 'Nerve distribution', bodyExample: 'Plantar sensation is from the tibial nerve', level: 3 },
      { description: 'Clinical condition', bodyExample: 'Plantar fasciitis causes heel pain', level: 4 },
      { description: 'Reflex testing', bodyExample: 'Plantar reflex (Babinski) tests corticospinal integrity', level: 5 },
    ],
    relatedTerms: ['sole', 'inferior (of foot)'],
    clinicalUsage: 'Plantar reflex (Babinski sign) is a key neurological test; abnormal response indicates upper motor neuron lesion',
  },
];

// ============================================================================
// BODY PLANES
// ============================================================================

export const bodyPlanes: BodyPlane[] = [
  {
    id: 'plane-sagittal',
    name: 'Sagittal Plane',
    alternateNames: ['Lateral plane', 'Anteroposterior plane'],
    pronunciation: {
      ipa: '/ˈsædʒɪtəl/',
      simplified: 'SAJ-ih-tul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'sagitta',
      originalMeaning: 'arrow',
      notes: 'Like an arrow passing through the body from front to back',
    },
    definitions: {
      1: 'An imaginary line dividing your body into left and right halves',
      2: 'A vertical plane that divides the body into left and right parts',
      3: 'A plane that passes through the body parallel to the median plane, dividing it into left and right portions',
      4: 'A longitudinal plane oriented anteroposteriorly; the median sagittal (midsagittal) plane creates equal halves',
      5: 'Sagittal sections visualize lateral asymmetry; MRI sagittal views are standard for spine, brain midline structures, and joint evaluation',
    },
    divides: 'The body into left and right portions',
    imagingRelevance: 'Sagittal MRI views are standard for spine imaging, showing vertebral alignment, disc herniations, and spinal cord',
    clinicalApplications: [
      'Spinal MRI interpretation',
      'Brain midline structure assessment',
      'Knee ligament evaluation',
      'Uterine and pelvic anatomy',
    ],
  },
  {
    id: 'plane-midsagittal',
    name: 'Midsagittal Plane',
    alternateNames: ['Median plane', 'Median sagittal plane'],
    pronunciation: {
      ipa: '/mɪdˈsædʒɪtəl/',
      simplified: 'mid-SAJ-ih-tul',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'medius + sagitta',
      originalMeaning: 'middle + arrow',
    },
    definitions: {
      1: 'The exact middle line that divides you into equal left and right halves',
      2: 'The specific sagittal plane that divides the body into exactly equal halves',
      3: 'The sagittal plane passing through the midline, creating symmetric left and right halves',
      4: 'The median plane; passes through the nose, navel, and vertebral spinous processes',
      5: 'The midsagittal plane defines bilateral symmetry; midline structures include corpus callosum, brainstem, and aorta',
    },
    divides: 'The body into exactly equal left and right halves',
    imagingRelevance: 'Midsagittal brain MRI shows corpus callosum, cerebellar vermis, and brainstem',
    clinicalApplications: [
      'Midline shift assessment in trauma',
      'Corpus callosum evaluation',
      'Cerebellar vermis imaging',
      'Spinal cord central lesions',
    ],
  },
  {
    id: 'plane-coronal',
    name: 'Coronal Plane',
    alternateNames: ['Frontal plane'],
    pronunciation: {
      ipa: '/kɒˈroʊnəl/',
      simplified: 'kuh-ROH-nul',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'corona',
      originalMeaning: 'crown',
      notes: 'Refers to the coronal suture of the skull running side to side like a crown',
    },
    definitions: {
      1: 'An imaginary line dividing your body into front and back halves',
      2: 'A vertical plane that divides the body into front (anterior) and back (posterior) parts',
      3: 'A plane passing through the body at right angles to the sagittal plane, dividing it into anterior and posterior portions',
      4: 'A longitudinal plane oriented laterally; perpendicular to sagittal plane',
      5: 'Coronal sections visualize bilateral structures simultaneously; standard for CT head, sinus imaging, and orthopedic assessments',
    },
    divides: 'The body into front (anterior) and back (posterior) portions',
    imagingRelevance: 'Coronal CT is standard for sinus imaging; coronal MRI useful for comparing bilateral structures',
    clinicalApplications: [
      'Sinus CT imaging',
      'Brain symmetry assessment',
      'Hip and shoulder evaluation',
      'Adrenal gland imaging',
    ],
  },
  {
    id: 'plane-transverse',
    name: 'Transverse Plane',
    alternateNames: ['Horizontal plane', 'Axial plane', 'Cross-sectional plane'],
    pronunciation: {
      ipa: '/trænsˈvɜːrs/',
      simplified: 'tranz-VERS',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'transversus',
      originalMeaning: 'turned across',
    },
    definitions: {
      1: 'An imaginary line that divides your body into top and bottom halves',
      2: 'A horizontal plane that divides the body into upper and lower parts',
      3: 'A plane perpendicular to the long axis of the body, dividing it into superior and inferior portions',
      4: 'A horizontal cross-section at any level; creates axial views in imaging',
      5: 'Axial/transverse imaging is the primary plane for CT and MRI; allows systematic review from cranial to caudal',
    },
    divides: 'The body into upper (superior) and lower (inferior) portions',
    imagingRelevance: 'Axial CT is the primary acquisition plane; axial images are reviewed sequentially from top to bottom',
    clinicalApplications: [
      'Standard CT review plane',
      'Abdominal organ assessment',
      'Spinal level identification',
      'Brain lesion localization',
    ],
  },
  {
    id: 'plane-oblique',
    name: 'Oblique Plane',
    pronunciation: {
      ipa: '/əˈbliːk/',
      simplified: 'oh-BLEEK',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'obliquus',
      originalMeaning: 'slanting, sideways',
    },
    definitions: {
      1: 'An angled cut through the body, not straight up-down or side-to-side',
      2: 'Any plane that is not parallel to the main body planes',
      3: 'A plane that passes through the body at an angle other than 90 degrees to any of the standard planes',
      4: 'Any sectional plane not aligned with standard anatomical planes; used for optimizing visualization of specific structures',
      5: 'Oblique imaging planes are prescribed to optimally visualize specific structures like the aortic valve, ACL, or renal arteries',
    },
    divides: 'The body at an angle that is not perpendicular to the standard planes',
    imagingRelevance: 'Oblique reformats optimize visualization of structures not aligned with standard planes',
    clinicalApplications: [
      'Cardiac valve imaging',
      'Aortic root assessment',
      'ACL visualization',
      'Renal artery stenosis evaluation',
    ],
  },
];

// ============================================================================
// BODY REGIONS AND CAVITIES
// ============================================================================

export const bodyRegions: BodyRegion[] = [
  {
    id: 'region-cranial',
    name: 'Cranial Cavity',
    alternateNames: ['Intracranial space', 'Skull cavity'],
    pronunciation: {
      ipa: '/ˈkreɪniəl/',
      simplified: 'KRAY-nee-ul',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kranion',
      originalMeaning: 'skull',
    },
    definitions: {
      1: 'The space inside your skull where your brain lives',
      2: 'The cavity within the skull that contains the brain',
      3: 'The space enclosed by the cranial bones, containing the brain, meninges, and cerebrospinal fluid',
      4: 'The intracranial compartment; subdivided into supratentorial and infratentorial spaces',
      5: 'The cranial vault contains brain, meninges, blood vessels, and CSF; fixed volume makes it vulnerable to mass effect; Monro-Kellie doctrine applies',
    },
    majorContents: ['Brain', 'Meninges', 'Cerebrospinal fluid', 'Cranial nerves', 'Blood vessels'],
    boundaries: {
      superior: 'Calvaria (skull cap)',
      inferior: 'Base of skull (floor)',
      anterior: 'Frontal bone',
      posterior: 'Occipital bone',
    },
  },
  {
    id: 'region-thoracic',
    name: 'Thoracic Cavity',
    alternateNames: ['Chest cavity', 'Thorax'],
    pronunciation: {
      ipa: '/θɔːˈræsɪk/',
      simplified: 'thor-AS-ik',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Greek',
      originalWord: 'thorax',
      originalMeaning: 'breastplate, chest',
    },
    definitions: {
      1: 'The space inside your chest where your heart and lungs are',
      2: 'The cavity in your chest between the neck and diaphragm',
      3: 'The space within the rib cage containing the lungs, heart, and major vessels',
      4: 'The thoracic compartment; subdivided into pleural cavities, mediastinum, and pericardial cavity',
      5: 'The thoracic cavity is bounded by ribs and diaphragm; negative intrapleural pressure maintains lung inflation; pneumothorax disrupts this',
    },
    majorContents: ['Heart', 'Lungs', 'Great vessels', 'Esophagus', 'Trachea', 'Thymus'],
    boundaries: {
      superior: 'Thoracic inlet',
      inferior: 'Diaphragm',
      anterior: 'Sternum and costal cartilages',
      posterior: 'Thoracic vertebrae',
      lateral: 'Ribs and intercostal muscles',
    },
  },
  {
    id: 'region-abdominal',
    name: 'Abdominal Cavity',
    alternateNames: ['Peritoneal cavity', 'Abdomen'],
    pronunciation: {
      ipa: '/æbˈdɒmɪnəl/',
      simplified: 'ab-DOM-ih-nul',
      stressedSyllable: 2,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'abdomen',
      originalMeaning: 'belly',
    },
    definitions: {
      1: 'The space inside your belly where your stomach and intestines are',
      2: 'The cavity below the diaphragm containing the digestive organs',
      3: 'The space between the diaphragm and pelvis containing abdominal organs',
      4: 'The abdominopelvic cavity; peritoneal and retroperitoneal compartments',
      5: 'The abdominal cavity contains intraperitoneal and retroperitoneal structures; nine regions or four quadrants used for localization',
    },
    majorContents: ['Stomach', 'Intestines', 'Liver', 'Spleen', 'Kidneys', 'Pancreas', 'Gallbladder'],
    boundaries: {
      superior: 'Diaphragm',
      inferior: 'Pelvic brim (continuous with pelvic cavity)',
      anterior: 'Abdominal wall muscles',
      posterior: 'Lumbar vertebrae and posterior muscles',
      lateral: 'Lateral abdominal muscles',
    },
  },
  {
    id: 'region-pelvic',
    name: 'Pelvic Cavity',
    alternateNames: ['Pelvis', 'True pelvis'],
    pronunciation: {
      ipa: '/ˈpelvɪk/',
      simplified: 'PEL-vik',
      stressedSyllable: 1,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'pelvis',
      originalMeaning: 'basin',
    },
    definitions: {
      1: 'The space inside your hip bones where the bladder is',
      2: 'The cavity below the abdominal cavity containing reproductive and urinary organs',
      3: 'The funnel-shaped space within the pelvic bones, continuous with the abdominal cavity',
      4: 'The true (lesser) pelvis; contains bladder, reproductive organs, rectum',
      5: 'The pelvic cavity is continuous with the abdominal cavity; the pelvic floor supports organs and contains the puborectalis sling; obstetric considerations important',
    },
    majorContents: ['Bladder', 'Rectum', 'Reproductive organs', 'Pelvic blood vessels', 'Pelvic nerves'],
    boundaries: {
      superior: 'Pelvic brim (inlet)',
      inferior: 'Pelvic floor muscles',
      anterior: 'Pubic symphysis',
      posterior: 'Sacrum and coccyx',
      lateral: 'Pelvic bones (ilium, ischium)',
    },
  },
  {
    id: 'region-mediastinum',
    name: 'Mediastinum',
    alternateNames: ['Mediastinal compartment'],
    pronunciation: {
      ipa: '/ˌmiːdiəˈstaɪnəm/',
      simplified: 'mee-dee-uh-STY-num',
      stressedSyllable: 4,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'mediastinus',
      originalMeaning: 'standing in the middle',
    },
    definitions: {
      1: 'The middle space in your chest between your lungs',
      2: 'The central compartment of the chest between the two lungs',
      3: 'The space between the pleural cavities containing the heart, great vessels, and other structures',
      4: 'Divided into superior and inferior (anterior, middle, posterior) mediastinum',
      5: 'The mediastinum is divided into anterior, middle, superior, and posterior compartments; each has typical pathology (thymoma anterior, lymphoma middle, neurogenic posterior)',
    },
    majorContents: ['Heart', 'Aorta', 'Vena cava', 'Trachea', 'Esophagus', 'Thymus', 'Lymph nodes'],
    boundaries: {
      superior: 'Thoracic inlet',
      inferior: 'Diaphragm',
      anterior: 'Sternum',
      posterior: 'Thoracic vertebrae',
      lateral: 'Mediastinal pleura (lungs)',
    },
  },
  {
    id: 'region-retroperitoneal',
    name: 'Retroperitoneal Space',
    alternateNames: ['Retroperitoneum'],
    pronunciation: {
      ipa: '/ˌretroʊˌperɪtəˈniːəl/',
      simplified: 'ret-roh-pair-ih-tuh-NEE-ul',
      stressedSyllable: 5,
    },
    etymology: {
      language: 'Latin',
      originalWord: 'retro + peritoneum',
      originalMeaning: 'behind + membrane around',
    },
    definitions: {
      1: 'The space behind your belly organs, closer to your back',
      2: 'The space behind the peritoneum (the lining of the abdominal cavity)',
      3: 'The anatomical space between the posterior parietal peritoneum and the posterior body wall',
      4: 'Contains the kidneys, adrenals, aorta, IVC, pancreas, and portions of the duodenum and colon',
      5: 'The retroperitoneum is divided into anterior and posterior pararenal and perirenal spaces; infections and hemorrhage spread along fascial planes',
    },
    majorContents: ['Kidneys', 'Adrenal glands', 'Ureters', 'Aorta', 'Inferior vena cava', 'Pancreas', 'Duodenum'],
    boundaries: {
      anterior: 'Posterior parietal peritoneum',
      posterior: 'Transversalis fascia, quadratus lumborum, psoas muscles',
      superior: 'Diaphragm',
      inferior: 'Pelvic brim',
    },
  },
];

// ============================================================================
// POSITIONAL TERMS (Medical Terms for Position/Posture)
// ============================================================================

export const positionalTerms: MedicalTerm[] = [
  {
    id: 'pos-supine',
    term: 'Supine',
    pronunciation: {
      ipa: '/suːˈpaɪn/',
      simplified: 'soo-PINE',
      stressedSyllable: 2,
    },
    components: {
      root: 'supin',
    },
    definitions: {
      1: 'Lying on your back, face up',
      2: 'Lying flat on the back with the face upward',
      3: 'A position in which the body is lying face upward',
      4: 'Dorsal recumbent position with anterior surface facing upward',
      5: 'The standard anatomical position for examination; supine hypotension syndrome occurs in pregnancy when the gravid uterus compresses the IVC',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'supinus',
      originalMeaning: 'lying on the back',
    },
    category: 'positional',
    relatedTerms: ['prone', 'recumbent', 'dorsal'],
    usageContext: 'clinical',
  },
  {
    id: 'pos-prone',
    term: 'Prone',
    pronunciation: {
      ipa: '/proʊn/',
      simplified: 'PROHN',
      stressedSyllable: 1,
    },
    components: {
      root: 'pron',
    },
    definitions: {
      1: 'Lying on your stomach, face down',
      2: 'Lying flat with the face and front of the body facing downward',
      3: 'A position in which the body is lying face downward',
      4: 'Ventral recumbent position with posterior surface facing upward',
      5: 'Prone positioning improves oxygenation in ARDS by improving V/Q matching; used in spine surgery for posterior approach',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'pronus',
      originalMeaning: 'inclined forward',
    },
    category: 'positional',
    relatedTerms: ['supine', 'ventral'],
    usageContext: 'clinical',
  },
  {
    id: 'pos-lateral-decubitus',
    term: 'Lateral Decubitus',
    pronunciation: {
      ipa: '/ˈlætərəl dɪˈkjuːbɪtəs/',
      simplified: 'LAT-er-ul deh-KYOO-bih-tus',
      stressedSyllable: 4,
    },
    components: {
      root: 'later + decubit',
    },
    definitions: {
      1: 'Lying on your side',
      2: 'Lying on either the left or right side',
      3: 'A side-lying position specified as left or right lateral decubitus',
      4: 'Position named for the dependent side; left lateral decubitus means left side down',
      5: 'Lateral decubitus positioning is used for thoracentesis, thoracotomy, and detection of pleural effusion layering on X-ray',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'decumbere',
      originalMeaning: 'to lie down',
    },
    category: 'positional',
    relatedTerms: ['supine', 'prone', 'Sims position'],
    usageContext: 'clinical',
    commonMistakes: [
      {
        mistake: 'Left lateral decubitus means left side up',
        correction: 'Left lateral decubitus means the left side is DOWN (dependent)',
      },
    ],
  },
  {
    id: 'pos-trendelenburg',
    term: 'Trendelenburg',
    pronunciation: {
      ipa: '/ˌtrendələnˈbɜːrɡ/',
      simplified: 'tren-DEL-en-berg',
      stressedSyllable: 2,
    },
    components: {
      root: 'Trendelenburg (eponym)',
    },
    definitions: {
      1: 'Lying with your head lower than your feet',
      2: 'A position where the body is tilted with the head lower than the pelvis',
      3: 'Supine position with the table tilted so the head is 15-30 degrees lower than the feet',
      4: 'Used to increase venous return and improve pelvic surgical exposure',
      5: 'Trendelenburg position increases preload but may worsen respiratory mechanics; reverse Trendelenburg (head up) reduces ICP and aspiration risk',
    },
    etymology: {
      language: 'German',
      originalWord: 'Friedrich Trendelenburg',
      originalMeaning: 'Named after German surgeon (1844-1924)',
    },
    category: 'positional',
    relatedTerms: ['reverse Trendelenburg', 'supine'],
    usageContext: 'clinical',
  },
  {
    id: 'pos-fowler',
    term: 'Fowler Position',
    alternateSpellings: ['Fowlers Position'],
    pronunciation: {
      ipa: '/ˈfaʊlər/',
      simplified: 'FOW-ler',
      stressedSyllable: 1,
    },
    components: {
      root: 'Fowler (eponym)',
    },
    definitions: {
      1: 'Sitting up in bed with your head raised',
      2: 'A position where the patient is sitting up at an angle',
      3: 'Semi-upright position with the head of bed elevated 45-60 degrees',
      4: 'Variations include high Fowler (90 degrees), semi-Fowler (30-45 degrees), and low Fowler (15-30 degrees)',
      5: 'Fowler position reduces aspiration risk, improves respiratory mechanics, and decreases ICP; semi-Fowler standard for many postoperative patients',
    },
    etymology: {
      language: 'English',
      originalWord: 'George Fowler',
      originalMeaning: 'Named after American surgeon (1848-1906)',
    },
    category: 'positional',
    relatedTerms: ['semi-Fowler', 'high Fowler', 'supine'],
    usageContext: 'clinical',
  },
  {
    id: 'pos-lithotomy',
    term: 'Lithotomy Position',
    pronunciation: {
      ipa: '/lɪˈθɒtəmi/',
      simplified: 'lih-THOT-uh-mee',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'litho-',
      root: 'tom',
      suffix: '-y',
    },
    definitions: {
      1: 'Lying on your back with legs up and apart (like at the doctor)',
      2: 'Position used for gynecological exams with legs raised and spread',
      3: 'Supine position with hips flexed, abducted, and externally rotated, legs supported in stirrups',
      4: 'Provides perineal access for OB/GYN, urological, and colorectal procedures',
      5: 'Lithotomy position risks include nerve injury (common peroneal, femoral), compartment syndrome with prolonged duration, and hemodynamic changes from Trendelenburg component',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'lithos + tome',
      originalMeaning: 'stone + cutting (historically for bladder stone removal)',
    },
    category: 'positional',
    relatedTerms: ['supine', 'dorsal lithotomy'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const anatomicalTerminologyModule: TerminologyModule = {
  id: 'anatomical-terminology',
  name: 'Anatomical Terminology',
  description: 'Comprehensive anatomical vocabulary including directional terms, body planes, regions, and positional terminology',
  directionalTerms,
  bodyPlanes,
  bodyRegions,
  terms: positionalTerms,
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
};

export default anatomicalTerminologyModule;
