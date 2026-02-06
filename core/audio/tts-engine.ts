/**
 * Text-to-Speech Engine
 * 
 * Web Speech API integration with advanced features for medical education:
 * - Multiple voice options (male/female, accents)
 * - Speed control (0.5x - 2x)
 * - Medical term pronunciation dictionary
 * - Queue management for long content
 */

import type {
  VoiceOption,
  VoiceGender,
  VoiceAccent,
  TTSSettings,
  PlaybackSpeed,
  TTSQueueItem,
  QueueStatus,
  PronunciationEntry,
  AudioEventType,
  AudioEventMap,
  AudioEventHandler,
} from './types.js';

// ============================================================================
// Medical Term Pronunciation Dictionary
// ============================================================================

export const MEDICAL_PRONUNCIATIONS: PronunciationEntry[] = [
  // Anatomy
  { term: 'acetabulum', phonetic: 'ass-eh-TAB-yoo-lum', syllables: 'ac-e-tab-u-lum', category: 'anatomy' },
  { term: 'acromion', phonetic: 'ah-KROH-mee-on', syllables: 'ac-ro-mi-on', category: 'anatomy' },
  { term: 'adenohypophysis', phonetic: 'ad-eh-no-hy-POF-eh-sis', syllables: 'ad-e-no-hy-poph-y-sis', category: 'anatomy' },
  { term: 'ampulla', phonetic: 'am-PULL-ah', syllables: 'am-pul-la', category: 'anatomy' },
  { term: 'anastomosis', phonetic: 'ah-nas-toh-MOH-sis', syllables: 'a-nas-to-mo-sis', category: 'anatomy' },
  { term: 'azygos', phonetic: 'AZ-ih-goss', syllables: 'a-zy-gos', category: 'anatomy' },
  { term: 'bregma', phonetic: 'BREG-mah', syllables: 'breg-ma', category: 'anatomy' },
  { term: 'buccinator', phonetic: 'BUK-sin-ay-tor', syllables: 'buc-cin-a-tor', category: 'anatomy' },
  { term: 'calcaneus', phonetic: 'kal-KAY-nee-us', syllables: 'cal-ca-ne-us', category: 'anatomy' },
  { term: 'chiasm', phonetic: 'KY-azm', syllables: 'chi-asm', category: 'anatomy' },
  { term: 'coccyx', phonetic: 'KOK-siks', syllables: 'coc-cyx', category: 'anatomy' },
  { term: 'cochlea', phonetic: 'KOK-lee-ah', syllables: 'coch-le-a', category: 'anatomy' },
  { term: 'conchae', phonetic: 'KON-kee', syllables: 'con-chae', category: 'anatomy' },
  { term: 'coracoid', phonetic: 'KOR-ah-koid', syllables: 'cor-a-coid', category: 'anatomy' },
  { term: 'cricoid', phonetic: 'KRY-koid', syllables: 'cri-coid', category: 'anatomy' },
  { term: 'diaphysis', phonetic: 'dy-AF-eh-sis', syllables: 'di-aph-y-sis', category: 'anatomy' },
  { term: 'duodenum', phonetic: 'doo-oh-DEE-num', syllables: 'du-o-de-num', category: 'anatomy' },
  { term: 'epiphysis', phonetic: 'eh-PIF-eh-sis', syllables: 'e-piph-y-sis', category: 'anatomy' },
  { term: 'epiglottis', phonetic: 'eh-pih-GLOT-iss', syllables: 'ep-i-glot-tis', category: 'anatomy' },
  { term: 'falx', phonetic: 'falks', syllables: 'falx', category: 'anatomy' },
  { term: 'foramen', phonetic: 'foh-RAY-men', syllables: 'fo-ra-men', category: 'anatomy' },
  { term: 'fovea', phonetic: 'FOH-vee-ah', syllables: 'fo-ve-a', category: 'anatomy' },
  { term: 'gladiolus', phonetic: 'glad-ee-OH-lus', syllables: 'gla-di-o-lus', category: 'anatomy' },
  { term: 'hyoid', phonetic: 'HY-oid', syllables: 'hy-oid', category: 'anatomy' },
  { term: 'ileum', phonetic: 'ILL-ee-um', syllables: 'il-e-um', category: 'anatomy' },
  { term: 'ischium', phonetic: 'ISS-kee-um', syllables: 'is-chi-um', category: 'anatomy' },
  { term: 'jejunum', phonetic: 'jeh-JOO-num', syllables: 'je-ju-num', category: 'anatomy' },
  { term: 'lacrimal', phonetic: 'LAK-rih-mal', syllables: 'lac-ri-mal', category: 'anatomy' },
  { term: 'malleolus', phonetic: 'mah-LEE-oh-lus', syllables: 'mal-le-o-lus', category: 'anatomy' },
  { term: 'manubrium', phonetic: 'mah-NOO-bree-um', syllables: 'ma-nu-bri-um', category: 'anatomy' },
  { term: 'mastoid', phonetic: 'MAS-toyd', syllables: 'mas-toid', category: 'anatomy' },
  { term: 'meatus', phonetic: 'mee-AY-tus', syllables: 'mea-tus', category: 'anatomy' },
  { term: 'medulla', phonetic: 'meh-DULL-ah', syllables: 'me-dul-la', category: 'anatomy' },
  { term: 'occiput', phonetic: 'OK-sih-put', syllables: 'oc-ci-put', category: 'anatomy' },
  { term: 'olecranon', phonetic: 'oh-LEK-rah-non', syllables: 'o-lec-ra-non', category: 'anatomy' },
  { term: 'papilla', phonetic: 'pah-PILL-ah', syllables: 'pa-pil-la', category: 'anatomy' },
  { term: 'phalanx', phonetic: 'FAY-langks', syllables: 'pha-lanx', category: 'anatomy' },
  { term: 'philtrum', phonetic: 'FILL-trum', syllables: 'phil-trum', category: 'anatomy' },
  { term: 'pia mater', phonetic: 'PY-ah MAH-ter', syllables: 'pia ma-ter', category: 'anatomy' },
  { term: 'pisiform', phonetic: 'PY-sih-form', syllables: 'pi-si-form', category: 'anatomy' },
  { term: 'popliteal', phonetic: 'pop-LIT-ee-al', syllables: 'pop-lit-e-al', category: 'anatomy' },
  { term: 'pylorus', phonetic: 'py-LOR-us', syllables: 'py-lo-rus', category: 'anatomy' },
  { term: 'ramus', phonetic: 'RAY-mus', syllables: 'ra-mus', category: 'anatomy' },
  { term: 'sacroiliac', phonetic: 'say-kroh-ILL-ee-ak', syllables: 'sacro-il-i-ac', category: 'anatomy' },
  { term: 'scaphoid', phonetic: 'SKAF-oid', syllables: 'scaph-oid', category: 'anatomy' },
  { term: 'sella turcica', phonetic: 'SEL-ah TUR-sih-kah', syllables: 'sel-la tur-ci-ca', category: 'anatomy' },
  { term: 'sphenoid', phonetic: 'SFEE-noyd', syllables: 'sphe-noid', category: 'anatomy' },
  { term: 'stapes', phonetic: 'STAY-peez', syllables: 'sta-pes', category: 'anatomy' },
  { term: 'styloid', phonetic: 'STY-loyd', syllables: 'sty-loid', category: 'anatomy' },
  { term: 'synapse', phonetic: 'SIN-aps', syllables: 'syn-apse', category: 'anatomy' },
  { term: 'talus', phonetic: 'TAY-lus', syllables: 'ta-lus', category: 'anatomy' },
  { term: 'temporal', phonetic: 'TEM-poh-ral', syllables: 'tem-po-ral', category: 'anatomy' },
  { term: 'thenar', phonetic: 'THEE-nar', syllables: 'the-nar', category: 'anatomy' },
  { term: 'tragus', phonetic: 'TRAY-gus', syllables: 'tra-gus', category: 'anatomy' },
  { term: 'trochanter', phonetic: 'troh-KAN-ter', syllables: 'tro-chan-ter', category: 'anatomy' },
  { term: 'turbinate', phonetic: 'TUR-bih-nate', syllables: 'tur-bi-nate', category: 'anatomy' },
  { term: 'tympanum', phonetic: 'TIM-pah-num', syllables: 'tym-pa-num', category: 'anatomy' },
  { term: 'vomer', phonetic: 'VOH-mer', syllables: 'vo-mer', category: 'anatomy' },
  { term: 'xiphoid', phonetic: 'ZY-foyd', syllables: 'xiph-oid', syllables: 'xiph-oid', category: 'anatomy' },
  { term: 'zygoma', phonetic: 'zy-GOH-mah', syllables: 'zy-go-ma', category: 'anatomy' },
  
  // Diseases/Conditions
  { term: 'achalasia', phonetic: 'ak-ah-LAY-zha', syllables: 'a-cha-la-sia', category: 'disease' },
  { term: 'acanthosis', phonetic: 'ak-an-THOH-sis', syllables: 'ac-an-tho-sis', category: 'disease' },
  { term: 'adenocarcinoma', phonetic: 'ad-eh-no-kar-sih-NOH-mah', syllables: 'ad-e-no-car-ci-no-ma', category: 'disease' },
  { term: 'amyloidosis', phonetic: 'am-ih-loy-DOH-sis', syllables: 'am-y-loi-do-sis', category: 'disease' },
  { term: 'aneurysm', phonetic: 'AN-yoo-riz-um', syllables: 'an-eu-rysm', category: 'disease' },
  { term: 'angina', phonetic: 'an-JY-nah', syllables: 'an-gi-na', category: 'disease' },
  { term: 'anhidrosis', phonetic: 'an-hy-DROH-sis', syllables: 'an-hi-dro-sis', category: 'disease' },
  { term: 'arrhythmia', phonetic: 'ah-RITH-mee-ah', syllables: 'ar-rhyth-mi-a', category: 'disease' },
  { term: 'astigmatism', phonetic: 'ah-STIG-mah-tiz-um', syllables: 'a-stig-ma-tism', category: 'disease' },
  { term: 'atherosclerosis', phonetic: 'ath-er-oh-skleh-ROH-sis', syllables: 'ath-er-o-scle-ro-sis', category: 'disease' },
  { term: 'bradycardia', phonetic: 'brad-ih-KAR-dee-ah', syllables: 'brad-y-car-di-a', category: 'disease' },
  { term: 'bronchiectasis', phonetic: 'brong-kee-EK-tah-sis', syllables: 'bron-chi-ec-ta-sis', category: 'disease' },
  { term: 'carcinoma', phonetic: 'kar-sih-NOH-mah', syllables: 'car-ci-no-ma', category: 'disease' },
  { term: 'cholecystitis', phonetic: 'koh-leh-sis-TY-tis', syllables: 'cho-le-cys-ti-tis', category: 'disease' },
  { term: 'chondromalacia', phonetic: 'kon-droh-mah-LAY-shee-ah', syllables: 'chon-dro-ma-la-cia', category: 'disease' },
  { term: 'cyanosis', phonetic: 'sy-ah-NOH-sis', syllables: 'cy-a-no-sis', category: 'disease' },
  { term: 'diverticulitis', phonetic: 'dy-ver-tik-yoo-LY-tis', syllables: 'di-ver-tic-u-li-tis', category: 'disease' },
  { term: 'dysphagia', phonetic: 'dis-FAY-jee-ah', syllables: 'dys-pha-gia', category: 'disease' },
  { term: 'dyspnea', phonetic: 'DISP-nee-ah', syllables: 'dysp-ne-a', category: 'disease' },
  { term: 'edema', phonetic: 'eh-DEE-mah', syllables: 'e-de-ma', category: 'disease' },
  { term: 'emphysema', phonetic: 'em-fih-ZEE-mah', syllables: 'em-phy-se-ma', category: 'disease' },
  { term: 'encephalopathy', phonetic: 'en-sef-ah-LOP-ah-thee', syllables: 'en-ceph-a-lop-a-thy', category: 'disease' },
  { term: 'endometriosis', phonetic: 'en-doh-mee-tree-OH-sis', syllables: 'en-do-me-tri-o-sis', category: 'disease' },
  { term: 'erythema', phonetic: 'er-ih-THEE-mah', syllables: 'er-y-the-ma', category: 'disease' },
  { term: 'hemoptysis', phonetic: 'hee-MOP-tih-sis', syllables: 'he-mop-ty-sis', category: 'disease' },
  { term: 'hepatomegaly', phonetic: 'hep-ah-toh-MEG-ah-lee', syllables: 'hep-a-to-meg-a-ly', category: 'disease' },
  { term: 'hyperglycemia', phonetic: 'hy-per-gly-SEE-mee-ah', syllables: 'hy-per-gly-ce-mi-a', category: 'disease' },
  { term: 'hypertension', phonetic: 'hy-per-TEN-shun', syllables: 'hy-per-ten-sion', category: 'disease' },
  { term: 'hypoglycemia', phonetic: 'hy-poh-gly-SEE-mee-ah', syllables: 'hy-po-gly-ce-mi-a', category: 'disease' },
  { term: 'hypotension', phonetic: 'hy-poh-TEN-shun', syllables: 'hy-po-ten-sion', category: 'disease' },
  { term: 'hypoxia', phonetic: 'hy-POK-see-ah', syllables: 'hy-pox-i-a', category: 'disease' },
  { term: 'ischemia', phonetic: 'ih-SKEE-mee-ah', syllables: 'is-che-mi-a', category: 'disease' },
  { term: 'leukocytosis', phonetic: 'loo-koh-sy-TOH-sis', syllables: 'leu-ko-cy-to-sis', category: 'disease' },
  { term: 'lymphadenopathy', phonetic: 'lim-fad-eh-NOP-ah-thee', syllables: 'lym-phad-e-nop-a-thy', category: 'disease' },
  { term: 'metastasis', phonetic: 'meh-TAS-tah-sis', syllables: 'me-tas-ta-sis', category: 'disease' },
  { term: 'myocardial', phonetic: 'my-oh-KAR-dee-al', syllables: 'my-o-car-di-al', category: 'disease' },
  { term: 'nystagmus', phonetic: 'nih-STAG-mus', syllables: 'nys-tag-mus', category: 'disease' },
  { term: 'oliguria', phonetic: 'ol-ih-GYOO-ree-ah', syllables: 'ol-i-gu-ri-a', category: 'disease' },
  { term: 'orthopnea', phonetic: 'or-THOP-nee-ah', syllables: 'or-thop-ne-a', category: 'disease' },
  { term: 'osteomyelitis', phonetic: 'os-tee-oh-my-LY-tis', syllables: 'os-te-o-my-e-li-tis', category: 'disease' },
  { term: 'pancytopenia', phonetic: 'pan-sy-toh-PEE-nee-ah', syllables: 'pan-cy-to-pe-ni-a', category: 'disease' },
  { term: 'paresthesia', phonetic: 'par-es-THEE-zha', syllables: 'par-es-the-sia', category: 'disease' },
  { term: 'pericarditis', phonetic: 'per-ih-kar-DY-tis', syllables: 'per-i-car-di-tis', category: 'disease' },
  { term: 'petechiae', phonetic: 'peh-TEE-kee-eye', syllables: 'pe-tech-i-ae', category: 'disease' },
  { term: 'polyuria', phonetic: 'pol-ee-YOO-ree-ah', syllables: 'pol-y-u-ri-a', category: 'disease' },
  { term: 'pruritus', phonetic: 'proo-RY-tus', syllables: 'pru-ri-tus', category: 'disease' },
  { term: 'psoriasis', phonetic: 'sor-EYE-ah-sis', syllables: 'pso-ri-a-sis', category: 'disease' },
  { term: 'pulmonary', phonetic: 'PULL-moh-nair-ee', syllables: 'pul-mo-nar-y', category: 'disease' },
  { term: 'pyelonephritis', phonetic: 'py-eh-loh-neh-FRY-tis', syllables: 'py-e-lo-neph-ri-tis', category: 'disease' },
  { term: 'sacroiliitis', phonetic: 'say-kroh-il-ee-EYE-tis', syllables: 'sacro-il-i-i-tis', category: 'disease' },
  { term: 'splenomegaly', phonetic: 'spleh-noh-MEG-ah-lee', syllables: 'sple-no-meg-a-ly', category: 'disease' },
  { term: 'tachycardia', phonetic: 'tak-ih-KAR-dee-ah', syllables: 'tach-y-car-di-a', category: 'disease' },
  { term: 'thrombocytopenia', phonetic: 'throm-boh-sy-toh-PEE-nee-ah', syllables: 'throm-bo-cy-to-pe-ni-a', category: 'disease' },
  { term: 'tinnitus', phonetic: 'tih-NY-tus', syllables: 'tin-ni-tus', category: 'disease' },
  { term: 'tonsillitis', phonetic: 'ton-sih-LY-tis', syllables: 'ton-sil-li-tis', category: 'disease' },
  { term: 'urticaria', phonetic: 'ur-tih-KAIR-ee-ah', syllables: 'ur-ti-car-i-a', category: 'disease' },
  { term: 'vasculitis', phonetic: 'vas-kyoo-LY-tis', syllables: 'vas-cu-li-tis', category: 'disease' },
  
  // Medications
  { term: 'acetaminophen', phonetic: 'ah-see-tah-MIN-oh-fen', syllables: 'ac-e-tam-i-no-phen', category: 'medication' },
  { term: 'acyclovir', phonetic: 'ay-SY-kloh-veer', syllables: 'ac-y-clo-vir', category: 'medication' },
  { term: 'alendronate', phonetic: 'ah-LEN-droh-nate', syllables: 'a-len-dro-nate', category: 'medication' },
  { term: 'amitriptyline', phonetic: 'am-ih-TRIP-tih-leen', syllables: 'am-i-trip-ty-line', category: 'medication' },
  { term: 'amoxicillin', phonetic: 'ah-moks-ih-SIL-in', syllables: 'a-mox-i-cil-lin', category: 'medication' },
  { term: 'atorvastatin', phonetic: 'ah-tor-vah-STAT-in', syllables: 'a-tor-va-stat-in', category: 'medication' },
  { term: 'azithromycin', phonetic: 'ah-zith-roh-MY-sin', syllables: 'a-zith-ro-my-cin', category: 'medication' },
  { term: 'bisoprolol', phonetic: 'bis-OH-proh-lol', syllables: 'bis-o-pro-lol', category: 'medication' },
  { term: 'carbamazepine', phonetic: 'kar-bah-MAH-zuh-peen', syllables: 'car-ba-maz-e-pine', category: 'medication' },
  { term: 'cephalexin', phonetic: 'sef-ah-LEX-in', syllables: 'ceph-a-lex-in', category: 'medication' },
  { term: 'ciprofloxacin', phonetic: 'sip-roh-FLOX-ah-sin', syllables: 'ci-pro-flox-a-cin', category: 'medication' },
  { term: 'clarithromycin', phonetic: 'klah-rith-roh-MY-sin', syllables: 'clar-ith-ro-my-cin', category: 'medication' },
  { term: 'clonazepam', phonetic: 'kloh-NAZ-eh-pam', syllables: 'clo-na-ze-pam', category: 'medication' },
  { term: 'clopidogrel', phonetic: 'kloh-PID-oh-grel', syllables: 'clo-pi-do-grel', category: 'medication' },
  { term: 'diazepam', phonetic: 'dye-AZ-eh-pam', syllables: 'di-az-e-pam', category: 'medication' },
  { term: 'diclofenac', phonetic: 'dye-KLOH-fen-ak', syllables: 'di-clo-fen-ac', category: 'medication' },
  { term: 'diltiazem', phonetic: 'dil-TY-ah-zem', syllables: 'dil-ti-a-zem', category: 'medication' },
  { term: 'diphenhydramine', phonetic: 'dye-fen-HY-drah-meen', syllables: 'di-phen-hy-dra-mine', category: 'medication' },
  { term: 'doxycycline', phonetic: 'dox-ih-SY-kleen', syllables: 'doxy-cy-cline', category: 'medication' },
  { term: 'enalapril', phonetic: 'en-AL-ah-pril', syllables: 'e-nal-a-pril', category: 'medication' },
  { term: 'erythromycin', phonetic: 'eh-rith-roh-MY-sin', syllables: 'e-ryth-ro-my-cin', category: 'medication' },
  { term: 'escitalopram', phonetic: 'es-sy-TAL-oh-pram', syllables: 'es-ci-ta-lo-pram', category: 'medication' },
  { term: 'esomeprazole', phonetic: 'es-oh-MEP-rah-zohl', syllables: 'e-so-mep-ra-zole', category: 'medication' },
  { term: 'fluconazole', phonetic: 'floo-KON-ah-zohl', syllables: 'flu-con-a-zole', category: 'medication' },
  { term: 'fluoxetine', phonetic: 'floo-OX-eh-teen', syllables: 'flu-ox-e-tine', category: 'medication' },
  { term: 'furosemide', phonetic: 'fur-OH-seh-mide', syllables: 'fu-ro-se-mide', category: 'medication' },
  { term: 'gabapentin', phonetic: 'gab-ah-PEN-tin', syllables: 'ga-ba-pen-tin', category: 'medication' },
  { term: 'hydrochlorothiazide', phonetic: 'hy-droh-klor-oh-THY-ah-zide', syllables: 'hy-dro-chlo-ro-thi-a-zide', category: 'medication' },
  { term: 'ibuprofen', phonetic: 'eye-byoo-PROH-fen', syllables: 'i-bu-pro-fen', category: 'medication' },
  { term: 'levothyroxine', phonetic: 'lee-voh-thy-ROK-seen', syllables: 'le-vo-thy-rox-ine', category: 'medication' },
  { term: 'lisinopril', phonetic: 'ly-SIN-oh-pril', syllables: 'li-si-no-pril', category: 'medication' },
  { term: 'loratadine', phonetic: 'lor-AT-ah-deen', syllables: 'lor-at-a-dine', category: 'medication' },
  { term: 'lorazepam', phonetic: 'lor-AZ-eh-pam', syllables: 'lor-a-ze-pam', category: 'medication' },
  { term: 'losartan', phonetic: 'loh-SAR-tan', syllables: 'lo-sar-tan', category: 'medication' },
  { term: 'metformin', phonetic: 'met-FOR-min', syllables: 'met-for-min', category: 'medication' },
  { term: 'methotrexate', phonetic: 'meth-oh-TREX-ate', syllables: 'meth-o-trex-ate', category: 'medication' },
  { term: 'metoprolol', phonetic: 'meh-TOH-proh-lol', syllables: 'me-to-pro-lol', category: 'medication' },
  { term: 'mirtazapine', phonetic: 'mir-TAZ-ah-peen', syllables: 'mir-taz-a-pine', category: 'medication' },
  { term: 'montelukast', phonetic: 'mon-teh-LOO-kast', syllables: 'mon-te-lu-kast', category: 'medication' },
  { term: 'naproxen', phonetic: 'nah-PROX-en', syllables: 'na-prox-en', category: 'medication' },
  { term: 'nifedipine', phonetic: 'nye-FED-ih-peen', syllables: 'ni-fed-i-pine', category: 'medication' },
  { term: 'omeprazole', phonetic: 'oh-MEP-rah-zohl', syllables: 'o-mep-ra-zole', category: 'medication' },
  { term: 'ondansetron', phonetic: 'on-DAN-seh-tron', syllables: 'on-dan-se-tron', category: 'medication' },
  { term: 'pantoprazole', phonetic: 'pan-TOH-prah-zohl', syllables: 'pan-to-pra-zole', category: 'medication' },
  { term: 'paroxetine', phonetic: 'par-OX-eh-teen', syllables: 'par-ox-e-tine', category: 'medication' },
  { term: 'pioglitazone', phonetic: 'py-oh-GLIH-tah-zohn', syllables: 'pi-o-gli-ta-zone', category: 'medication' },
  { term: 'prednisone', phonetic: 'PRED-nih-sone', syllables: 'pred-ni-sone', category: 'medication' },
  { term: 'pregabalin', phonetic: 'preh-GAB-ah-lin', syllables: 'pre-ga-ba-lin', category: 'medication' },
  { term: 'propranolol', phonetic: 'proh-PRAN-oh-lol', syllables: 'pro-pran-o-lol', category: 'medication' },
  { term: 'quetiapine', phonetic: 'kweh-TY-ah-peen', syllables: 'que-ti-a-pine', category: 'medication' },
  { term: 'ranitidine', phonetic: 'rah-NIH-tih-deen', syllables: 'ra-ni-ti-dine', category: 'medication' },
  { term: 'risperidone', phonetic: 'ris-PER-ih-done', syllables: 'ris-per-i-done', category: 'medication' },
  { term: 'rosuvastatin', phonetic: 'roh-soo-vah-STAT-in', syllables: 'ro-su-va-stat-in', category: 'medication' },
  { term: 'sertraline', phonetic: 'SER-trah-leen', syllables: 'ser-tra-line', category: 'medication' },
  { term: 'simvastatin', phonetic: 'sim-vah-STAT-in', syllables: 'sim-va-stat-in', category: 'medication' },
  { term: 'spironolactone', phonetic: 'spir-on-oh-LAK-tone', syllables: 'spi-ro-no-lac-tone', category: 'medication' },
  { term: 'sulfamethoxazole', phonetic: 'sul-fah-meth-OX-ah-zole', syllables: 'sul-fa-meth-ox-a-zole', category: 'medication' },
  { term: 'temazepam', phonetic: 'teh-MAZ-eh-pam', syllables: 'te-maz-e-pam', category: 'medication' },
  { term: 'tramadol', phonetic: 'TRAM-ah-dol', syllables: 'tra-ma-dol', category: 'medication' },
  { term: 'trazodone', phonetic: 'TRAZ-oh-done', syllables: 'traz-o-done', category: 'medication' },
  { term: 'trimethoprim', phonetic: 'try-METH-oh-prim', syllables: 'tri-meth-o-prim', category: 'medication' },
  { term: 'valsartan', phonetic: 'val-SAR-tan', syllables: 'val-sar-tan', category: 'medication' },
  { term: 'venlafaxine', phonetic: 'ven-lah-FAX-een', syllables: 'ven-la-fax-ine', category: 'medication' },
  { term: 'warfarin', phonetic: 'WAR-far-in', syllables: 'war-fa-rin', category: 'medication' },
  
  // Lab Terms
  { term: 'albumin', phonetic: 'al-BYOO-min', syllables: 'al-bu-min', category: 'lab' },
  { term: 'alkaline phosphatase', phonetic: 'AL-kah-line FOS-fah-tase', syllables: 'al-ka-line phos-pha-tase', category: 'lab' },
  { term: 'aspartate aminotransferase', phonetic: 'ah-SPAR-tate ah-mee-noh-TRANS-fer-ase', syllables: 'as-par-tate ami-no-trans-fer-ase', category: 'lab' },
  { term: 'alanine aminotransferase', phonetic: 'AL-ah-neen ah-mee-noh-TRANS-fer-ase', syllables: 'al-a-nine ami-no-trans-fer-ase', category: 'lab' },
  { term: 'bilirubin', phonetic: 'bil-ih-ROO-bin', syllables: 'bil-i-ru-bin', category: 'lab' },
  { term: 'creatinine', phonetic: 'kree-AT-in-in', syllables: 'cre-at-i-nine', category: 'lab' },
  { term: 'electrolytes', phonetic: 'ee-LEK-troh-lites', syllables: 'e-lec-tro-lytes', category: 'lab' },
  { term: 'eosinophil', phonetic: 'ee-oh-SIN-oh-fil', syllables: 'e-o-sin-o-phil', category: 'lab' },
  { term: 'erythrocyte', phonetic: 'eh-RITH-roh-site', syllables: 'e-ryth-ro-cyte', category: 'lab' },
  { term: 'erythropoietin', phonetic: 'eh-rith-roh-POY-eh-tin', syllables: 'e-ryth-ro-poi-e-tin', category: 'lab' },
  { term: 'glomerular', phonetic: 'gloh-MER-yoo-lar', syllables: 'glo-mer-u-lar', category: 'lab' },
  { term: 'hematocrit', phonetic: 'hee-MAT-oh-krit', syllables: 'he-mat-o-crit', category: 'lab' },
  { term: 'hemoglobin', phonetic: 'hee-moh-GLOH-bin', syllables: 'he-mo-glo-bin', category: 'lab' },
  { term: 'lymphocyte', phonetic: 'LIM-foh-site', syllables: 'lym-pho-cyte', category: 'lab' },
  { term: 'monocyte', phonetic: 'MON-oh-site', syllables: 'mon-o-cyte', category: 'lab' },
  { term: 'neutrophil', phonetic: 'NEW-troh-fil', syllables: 'neu-tro-phil', category: 'lab' },
  { term: 'thrombocyte', phonetic: 'THROM-boh-site', syllables: 'throm-bo-cyte', category: 'lab' },
  { term: 'troponin', phonetic: 'TROH-poh-nin', syllables: 'tro-po-nin', category: 'lab' },
  
  // Procedures
  { term: 'amniocentesis', phonetic: 'am-nee-oh-sen-TEE-sis', syllables: 'am-ni-o-cen-te-sis', category: 'procedure' },
  { term: 'arthroscopy', phonetic: 'ar-THROS-koh-pee', syllables: 'ar-thros-co-py', category: 'procedure' },
  { term: 'bronchoscopy', phonetic: 'brong-KOS-koh-pee', syllables: 'bron-chos-co-py', category: 'procedure' },
  { term: 'cardiac catheterization', phonetic: 'KAR-dee-ak kath-eh-ter-ih-ZAY-shun', syllables: 'car-di-ac cath-e-ter-i-za-tion', category: 'procedure' },
  { term: 'colonoscopy', phonetic: 'koh-luh-NOS-koh-pee', syllables: 'co-lo-nos-co-py', category: 'procedure' },
  { term: 'cystoscopy', phonetic: 'sis-TOS-koh-pee', syllables: 'cys-tos-co-py', category: 'procedure' },
  { term: 'echocardiography', phonetic: 'ek-oh-kar-dee-OG-rah-fee', syllables: 'e-cho-car-di-og-ra-phy', category: 'procedure' },
  { term: 'electrocardiogram', phonetic: 'ee-lek-troh-KAR-dee-oh-gram', syllables: 'e-lec-tro-car-di-o-gram', category: 'procedure' },
  { term: 'electroencephalography', phonetic: 'ee-lek-troh-en-sef-ah-LOG-rah-fee', syllables: 'e-lec-tro-en-ceph-a-log-ra-phy', category: 'procedure' },
  { term: 'endoscopy', phonetic: 'en-DOS-koh-pee', syllables: 'en-dos-co-py', category: 'procedure' },
  { term: 'hysteroscopy', phonetic: 'his-ter-OS-koh-pee', syllables: 'hys-ter-os-co-py', category: 'procedure' },
  { term: 'laparoscopy', phonetic: 'lap-ah-ROS-koh-pee', syllables: 'lap-a-ros-co-py', category: 'procedure' },
  { term: 'laryngoscopy', phonetic: 'lar-in-GOS-koh-pee', syllables: 'lar-yn-gos-co-py', category: 'procedure' },
  { term: 'lumbar puncture', phonetic: 'LUM-bar PUNK-cher', syllables: 'lum-bar punc-ture', category: 'procedure' },
  { term: 'mammography', phonetic: 'mah-MOG-rah-fee', syllables: 'mam-mog-ra-phy', category: 'procedure' },
  { term: 'myelography', phonetic: 'my-eh-LOG-rah-fee', syllables: 'my-e-log-ra-phy', category: 'procedure' },
  { term: 'ophthalmoscopy', phonetic: 'of-thal-MOS-koh-pee', syllables: 'oph-thal-mos-co-py', category: 'procedure' },
  { term: 'rhinoscopy', phonetic: 'ry-NOS-koh-pee', syllables: 'rhi-nos-co-py', category: 'procedure' },
  { term: 'sigmoidoscopy', phonetic: 'sig-moy-DOS-koh-pee', syllables: 'sig-moi-dos-co-py', category: 'procedure' },
  { term: 'thoracentesis', phonetic: 'thor-ah-sen-TEE-sis', syllables: 'tho-ra-cen-te-sis', category: 'procedure' },
  { term: 'thoracoscopy', phonetic: 'thor-ah-KOS-koh-pee', syllables: 'tho-ra-cos-co-py', category: 'procedure' },
  { term: 'tonometry', phonetic: 'toh-NOM-eh-tree', syllables: 'to-nom-e-try', category: 'procedure' },
  { term: 'ultrasonography', phonetic: 'ul-trah-son-OG-rah-fee', syllables: 'ul-tra-so-nog-ra-phy', category: 'procedure' },
  { term: 'venipuncture', phonetic: 'ven-ih-PUNK-cher', syllables: 've-ni-punc-ture', category: 'procedure' },
];

// Create a lookup map for faster access
const pronunciationMap = new Map<string, PronunciationEntry>();
MEDICAL_PRONUNCIATIONS.forEach(entry => {
  pronunciationMap.set(entry.term.toLowerCase(), entry);
});

// ============================================================================
// TTSEngine Class
// ============================================================================

export class TTSEngine {
  private synthesis: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private queue: TTSQueueItem[] = [];
  private isSpeaking = false;
  private isPaused = false;
  private settings: TTSSettings;
  private eventListeners: Map<AudioEventType, Set<AudioEventHandler<AudioEventType>>> = new Map();
  private currentItemId: string | null = null;
  private onBoundaryCallback: ((event: SpeechSynthesisEvent) => void) | null = null;
  private onEndCallback: (() => void) | null = null;
  private onErrorCallback: ((error: Error) => void) | null = null;

  constructor(settings: Partial<TTSSettings> = {}) {
    this.settings = { ...DEFAULT_TTS_SETTINGS, ...settings };
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;
    
    this.synthesis = window.speechSynthesis;
    this.loadVoices();
    
    // Voices may load asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  private loadVoices(): void {
    if (!this.synthesis) return;
    this.voices = this.synthesis.getVoices();
  }

  // ============================================================================
  // Voice Management
  // ============================================================================

  getAvailableVoices(): VoiceOption[] {
    if (!this.voices.length) return [DEFAULT_TTS_SETTINGS.voice];

    return this.voices
      .filter(v => v.lang.startsWith('en'))
      .map(voice => ({
        id: voice.voiceURI,
        name: voice.name,
        gender: this.inferGender(voice.name),
        accent: this.inferAccent(voice.lang),
        lang: voice.lang,
        default: voice.default,
      }));
  }

  private inferGender(name: string): VoiceGender {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('female') || lowerName.includes('woman') || lowerName.includes('girl')) {
      return 'female';
    }
    if (lowerName.includes('male') || lowerName.includes('man') || lowerName.includes('boy')) {
      return 'male';
    }
    return 'neutral';
  }

  private inferAccent(lang: string): VoiceAccent {
    const parts = lang.split('-');
    const region = parts[1]?.toLowerCase();
    
    switch (region) {
      case 'gb': case 'uk': return 'gb';
      case 'au': return 'au';
      case 'ca': return 'ca';
      case 'ie': return 'ie';
      case 'in': return 'in';
      case 'za': return 'za';
      default: return 'us';
    }
  }

  setVoice(voiceId: string): boolean {
    const voice = this.voices.find(v => v.voiceURI === voiceId);
    if (voice) {
      const voiceOption = this.getAvailableVoices().find(v => v.id === voiceId);
      if (voiceOption) {
        this.settings.voice = voiceOption;
        return true;
      }
    }
    return false;
  }

  // ============================================================================
  // Speed Control
  // ============================================================================

  setSpeed(speed: PlaybackSpeed): void {
    this.settings.speed = speed;
  }

  getSpeed(): PlaybackSpeed {
    return this.settings.speed;
  }

  // ============================================================================
  // Medical Term Pronunciation
  // ============================================================================

  enhanceTextWithPronunciation(text: string): string {
    let enhanced = text;
    
    // Sort terms by length (longest first) to avoid partial replacements
    const sortedTerms = [...MEDICAL_PRONUNCIATIONS].sort((a, b) => b.term.length - a.term.length);
    
    for (const entry of sortedTerms) {
      const regex = new RegExp(`\\b${entry.term}\\b`, 'gi');
      // Add SSML-like pause hints for complex terms
      const replacement = `${entry.term}`;
      enhanced = enhanced.replace(regex, replacement);
    }
    
    return enhanced;
  }

  getPronunciation(term: string): PronunciationEntry | undefined {
    return pronunciationMap.get(term.toLowerCase());
  }

  // ============================================================================
  // Queue Management
  // ============================================================================

  enqueue(item: Omit<TTSQueueItem, 'id'>): string {
    const id = `queue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const queueItem: TTSQueueItem = { ...item, id };
    
    // Insert based on priority
    const priorityIndex = this.queue.findIndex(i => this.priorityWeight(i.priority) < this.priorityWeight(item.priority));
    if (priorityIndex === -1) {
      this.queue.push(queueItem);
    } else {
      this.queue.splice(priorityIndex, 0, queueItem);
    }
    
    this.processQueue();
    return id;
  }

  private priorityWeight(priority: TTSQueueItem['priority']): number {
    return { high: 3, normal: 2, low: 1 }[priority];
  }

  dequeue(itemId: string): boolean {
    const index = this.queue.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.queue.splice(index, 1);
      return true;
    }
    return false;
  }

  clearQueue(): void {
    this.queue = [];
  }

  getQueueStatus(): QueueStatus {
    return {
      pending: this.queue.length,
      processing: this.isSpeaking ? 1 : 0,
      completed: 0, // Track separately if needed
      failed: 0,    // Track separately if needed
      estimatedTimeRemaining: this.queue.length * 5, // Rough estimate
    };
  }

  private async processQueue(): Promise<void> {
    if (this.isSpeaking || this.isPaused || this.queue.length === 0) return;
    
    const item = this.queue.shift();
    if (!item) return;
    
    this.currentItemId = item.id;
    await this.speakInternal(item.text, item.metadata);
  }

  // ============================================================================
  // Core Speech Methods
  // ============================================================================

  async speak(text: string, priority: TTSQueueItem['priority'] = 'normal'): Promise<void> {
    return new Promise((resolve, reject) => {
      const id = this.enqueue({
        text,
        priority,
        metadata: { resolve, reject },
      });
    });
  }

  private speakInternal(text: string, metadata?: Record<string, unknown>): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.synthesis) {
        reject(new Error('Speech synthesis not available'));
        return;
      }

      // Stop any current speech
      this.stop();

      // Enhance text with pronunciation hints
      const enhancedText = this.enhanceTextWithPronunciation(text);

      const utterance = new SpeechSynthesisUtterance(enhancedText);
      this.currentUtterance = utterance;

      // Apply settings
      utterance.rate = this.settings.speed;
      utterance.pitch = this.settings.pitch;
      utterance.volume = this.settings.volume;

      // Set voice
      const voice = this.voices.find(v => v.voiceURI === this.settings.voice.id);
      if (voice) {
        utterance.voice = voice;
      }

      // Event handlers
      utterance.onstart = () => {
        this.isSpeaking = true;
        this.emit('playback:start', { chapterIndex: 0, segmentIndex: 0 });
      };

      utterance.onboundary = (event) => {
        if (this.onBoundaryCallback) {
          this.onBoundaryCallback(event);
        }
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        this.emit('playback:complete', {});
        
        if (this.onEndCallback) {
          this.onEndCallback();
        }
        
        // Resolve promise from metadata if exists
        if (metadata?.resolve && typeof metadata.resolve === 'function') {
          metadata.resolve();
        }
        
        // Process next in queue
        this.processQueue();
        resolve();
      };

      utterance.onerror = (event) => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        const error = new Error(`Speech synthesis error: ${event.error}`);
        this.emit('playback:error', { error });
        
        if (this.onErrorCallback) {
          this.onErrorCallback(error);
        }
        
        if (metadata?.reject && typeof metadata.reject === 'function') {
          metadata.reject(error);
        }
        
        reject(error);
      };

      this.synthesis.speak(utterance);
    });
  }

  pause(): void {
    if (this.synthesis && this.isSpeaking) {
      this.synthesis.pause();
      this.isPaused = true;
      this.emit('playback:pause', { position: this.getCurrentPosition() });
    }
  }

  resume(): void {
    if (this.synthesis && this.isPaused) {
      this.synthesis.resume();
      this.isPaused = false;
      this.emit('playback:resume', { position: this.getCurrentPosition() });
    }
  }

  stop(): void {
    if (this.synthesis) {
      this.synthesis.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.emit('playback:stop', {});
    }
  }

  private getCurrentPosition() {
    return {
      chapterIndex: 0,
      segmentIndex: 0,
      charIndex: 0,
      currentTime: 0,
      totalTime: 0,
    };
  }

  // ============================================================================
  // Settings
  // ============================================================================

  getSettings(): TTSSettings {
    return { ...this.settings };
  }

  updateSettings(settings: Partial<TTSSettings>): void {
    this.settings = { ...this.settings, ...settings };
    this.emit('settings:change', { settings: this.settings });
  }

  // ============================================================================
  // Event System
  // ============================================================================

  on<T extends AudioEventType>(event: T, handler: AudioEventHandler<T>): () => void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event)!.add(handler as AudioEventHandler<AudioEventType>);
    
    // Return unsubscribe function
    return () => {
      this.eventListeners.get(event)?.delete(handler as AudioEventHandler<AudioEventType>);
    };
  }

  private emit<T extends AudioEventType>(event: T, data: AudioEventMap[T]): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(handler => {
        try {
          (handler as AudioEventHandler<T>)(data);
        } catch (error) {
          console.error(`Error in audio event handler for ${event}:`, error);
        }
      });
    }
  }

  // ============================================================================
  // State Queries
  // ============================================================================

  get isPlaying(): boolean {
    return this.isSpeaking && !this.isPaused;
  }

  get isSpeechPaused(): boolean {
    return this.isPaused;
  }

  get hasQueue(): boolean {
    return this.queue.length > 0;
  }

  // ============================================================================
  // Cleanup
  // ============================================================================

  destroy(): void {
    this.stop();
    this.clearQueue();
    this.eventListeners.clear();
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let globalTTSEngine: TTSEngine | null = null;

export function getTTSEngine(settings?: Partial<TTSSettings>): TTSEngine {
  if (!globalTTSEngine) {
    globalTTSEngine = new TTSEngine(settings);
  }
  return globalTTSEngine;
}

export function destroyTTSEngine(): void {
  if (globalTTSEngine) {
    globalTTSEngine.destroy();
    globalTTSEngine = null;
  }
}

// Default settings for export
export const DEFAULT_TTS_SETTINGS = {
  voice: {
    id: 'default',
    name: 'Default Voice',
    gender: 'neutral' as VoiceGender,
    accent: 'us' as VoiceAccent,
    lang: 'en-US',
    default: true,
  },
  speed: 1.0 as PlaybackSpeed,
  pitch: 1.0,
  volume: 1.0,
  autoNarrate: false,
  highlightWords: true,
};
