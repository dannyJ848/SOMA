import { EducationalContent } from '../../types';

export const endometriosis: EducationalContent = {
  id: 'obgyn-endometriosis',
  type: 'condition',
  name: 'Endometriosis',
  nameEs: 'Endometriosis',
  alternateNames: ['Endometriotic Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Endometriosis is a condition where tissue similar to the lining of the uterus grows outside the uterus, causing pain and sometimes difficulty getting pregnant.',
      explanation:
        'The inside of the uterus has a special lining called the endometrium that builds up and sheds each month during a period. ' +
        'In endometriosis, tissue that looks and acts like this lining grows in places it should not, such as on the ovaries, ' +
        'fallopian tubes, or the tissue lining the pelvis. This misplaced tissue still responds to monthly hormones, so it bleeds ' +
        'during periods — but the blood has nowhere to go. This causes inflammation, pain, and scar tissue. ' +
        'About 1 in 10 women of reproductive age have endometriosis.',
      keyTerms: [
        { term: 'Endometrium', definition: 'The lining inside the uterus that thickens each month and sheds during a period' },
        { term: 'Inflammation', definition: 'The body\'s response to irritation, causing swelling, redness, and pain' },
      ],
      analogies: ['Endometriosis is like a plant growing in the wrong garden bed — it does not belong there and causes problems for the surrounding soil.'],
      patientCounselingPoints: [
        'Period pain that keeps you from normal activities is not normal and should be evaluated.',
        'Endometriosis is common and treatable — you are not alone.',
        'Treatment options range from pain medication to hormonal therapy to surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endometriosis presents with dysmenorrhea, dyspareunia, and infertility; diagnosis often requires laparoscopy, and treatment includes hormonal suppression and surgical excision.',
      explanation:
        '**Symptoms:**\n' +
        '- Dysmenorrhea (painful periods), often progressive\n' +
        '- Dyspareunia (pain during intercourse)\n' +
        '- Chronic pelvic pain, dyschezia (painful bowel movements)\n' +
        '- Infertility (30-50% of affected women)\n\n' +
        '**Diagnosis:**\n' +
        '- Clinical suspicion based on symptoms and exam (tender nodularity, fixed uterus)\n' +
        '- Ultrasound can detect endometriomas (\"chocolate cysts\") but not superficial disease\n' +
        '- Gold standard: laparoscopy with histologic confirmation\n\n' +
        '**Treatment:**\n' +
        '- NSAIDs for pain; combined OCPs (continuous use) as first-line hormonal therapy\n' +
        '- Progestins: norethindrone, medroxyprogesterone, IUD (levonorgestrel)\n' +
        '- Surgical excision or ablation of implants; definitive treatment is hysterectomy with BSO',
      keyTerms: [
        { term: 'Dysmenorrhea', definition: 'Painful menstrual cramps, often the most common symptom of endometriosis' },
        { term: 'Endometrioma', definition: 'An ovarian cyst filled with old blood (\"chocolate cyst\") caused by endometriosis' },
        { term: 'Laparoscopy', definition: 'Minimally invasive surgery using a camera to look inside the abdomen, the gold standard for diagnosing endometriosis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Endometriosis is staged by the revised ASRM classification, driven by retrograde menstruation and immune dysfunction, and managed with a spectrum from hormonal suppression to surgical excision with attention to fertility preservation.',
      explanation:
        '**Pathophysiology (Sampson\'s theory):**\n' +
        '- Retrograde menstruation: endometrial fragments flow through fallopian tubes into peritoneal cavity\n' +
        '- Requires immune dysfunction (deficient NK cell activity, altered macrophage function) for implantation\n' +
        '- Alternative theories: coelomic metaplasia, lymphatic/hematogenous spread (explains rare extrapelvic disease)\n\n' +
        '**Staging (rASRM):**\n' +
        '- Stage I (minimal): isolated implants, no adhesions\n' +
        '- Stage II (mild): superficial implants <5 cm total, no adhesions\n' +
        '- Stage III (moderate): deep implants, small endometriomas, filmy adhesions\n' +
        '- Stage IV (severe): large endometriomas, dense adhesions, cul-de-sac obliteration\n' +
        '- Note: stage does NOT correlate well with pain severity\n\n' +
        '**Medical Management:**\n' +
        '- GnRH agonists (leuprolide) with add-back therapy (norethindrone + estrogen) — limit to 6-12 months\n' +
        '- GnRH antagonists (elagolix): oral, dose-dependent estrogen suppression\n' +
        '- Aromatase inhibitors (letrozole) for refractory disease\n\n' +
        '**Fertility:**\n' +
        '- Stage I-II: controlled ovarian stimulation + IUI or expectant management\n' +
        '- Stage III-IV: IVF preferred; surgical excision of endometriomas >4 cm may improve access but can reduce ovarian reserve',
      keyTerms: [
        { term: 'Retrograde menstruation', definition: 'Backward flow of menstrual blood through the fallopian tubes into the pelvic cavity, the leading theory for endometriosis development' },
        { term: 'GnRH agonist', definition: 'Medication that initially stimulates then suppresses gonadotropin release, creating a hypoestrogenic state' },
        { term: 'rASRM staging', definition: 'Revised American Society for Reproductive Medicine classification scoring endometriosis severity I-IV based on surgical findings' },
      ],
      clinicalNotes: 'Endometriosis stage does not predict pain severity or fertility outcomes. GnRH agonist therapy requires add-back to prevent bone loss.',
    },
    4: {
      level: 4,
      summary: 'Advanced endometriosis management addresses deep infiltrating endometriosis, multidisciplinary surgical planning for bowel/bladder involvement, and emerging biomarkers for non-invasive diagnosis.',
      explanation:
        '**Deep Infiltrating Endometriosis (DIE):**\n' +
        '- Defined as implants penetrating >5 mm below peritoneal surface\n' +
        '- Common locations: uterosacral ligaments, rectovaginal septum, bladder, rectosigmoid\n' +
        '- MRI with vaginal/rectal gel contrast is imaging modality of choice for surgical planning\n\n' +
        '**Surgical Considerations:**\n' +
        '- Excision superior to ablation for DIE (longer pain-free interval, lower recurrence)\n' +
        '- Bowel endometriosis: shaving vs. disc excision vs. segmental resection based on depth and circumference\n' +
        '- Ureteral involvement: ureterolysis vs. reimplantation; preoperative stenting may be needed\n' +
        '- Nerve-sparing techniques for hypogastric plexus preservation\n\n' +
        '**Biomarkers (Investigational):**\n' +
        '- CA-125: elevated in advanced disease but poor sensitivity/specificity for screening\n' +
        '- miRNA panels, glycoproteomics, and menstrual effluent analysis under investigation\n' +
        '- No validated non-invasive diagnostic biomarker exists currently\n\n' +
        '**Adenomyosis Association:**\n' +
        '- Frequently coexists with endometriosis (20-80% depending on population)\n' +
        '- MRI: junctional zone thickness >12 mm diagnostic\n' +
        '- Impacts IVF outcomes; may benefit from prolonged GnRH agonist pretreatment',
      keyTerms: [
        { term: 'Deep infiltrating endometriosis', definition: 'Endometriotic lesions penetrating >5 mm below the peritoneal surface, often involving bowel, bladder, or ureters' },
        { term: 'Adenomyosis', definition: 'Presence of endometrial glands and stroma within the myometrium, frequently coexisting with endometriosis' },
        { term: 'Nerve-sparing surgery', definition: 'Surgical technique preserving the hypogastric nerve plexus to prevent bladder and bowel dysfunction after DIE excision' },
      ],
      clinicalNotes: 'DIE surgery should be performed at specialized centers. Bowel resection carries 2-5% anastomotic leak risk. Preoperative MRI is essential for multidisciplinary surgical planning.',
    },
    5: {
      level: 5,
      summary: 'Expert-level endometriosis science encompasses epigenetic reprogramming, progesterone resistance mechanisms, immune-endocrine crosstalk, and translational research into targeted therapies and non-invasive diagnostics.',
      explanation:
        '**Molecular Pathogenesis:**\n' +
        '- Epigenetic alterations: hypermethylation of HOXA10 (implantation gene), hypomethylation of SF-1 (steroidogenic factor) enabling local estrogen production\n' +
        '- Progesterone resistance: reduced PR-B expression, elevated PR-A:PR-B ratio, impaired decidualization\n' +
        '- Local aromatase (CYP19A1) overexpression creates a positive estrogen feedback loop\n' +
        '- NF-kB activation drives inflammatory cytokine production (IL-6, IL-8, TNF-alpha) and angiogenesis\n\n' +
        '**Immune Dysfunction:**\n' +
        '- Reduced peritoneal NK cell cytotoxicity against ectopic endometrial cells\n' +
        '- M2 macrophage polarization promotes tissue remodeling and lesion survival\n' +
        '- Regulatory T cell imbalance facilitating immune tolerance of ectopic tissue\n\n' +
        '**Emerging Therapies:**\n' +
        '- Dichloroacetate: targets Warburg effect in endometriotic cells (preclinical)\n' +
        '- Anti-angiogenic agents (bevacizumab): effective in animal models, human trials limited\n' +
        '- Selective progesterone receptor modulators (SPRMs)\n' +
        '- Microbiome modulation: gut-peritoneal axis under investigation\n\n' +
        '**Non-Invasive Diagnostics:**\n' +
        '- Salivary miRNA panels (EndoTest): CE-marked in Europe, sensitivity ~95% reported\n' +
        '- Machine learning combining symptoms, imaging, and blood biomarkers\n' +
        '- AAGL/ESGE push toward imaging-based diagnosis without mandatory laparoscopy',
      keyTerms: [
        { term: 'Progesterone resistance', definition: 'Reduced responsiveness of endometriotic tissue to progesterone due to altered receptor expression and epigenetic changes' },
        { term: 'CYP19A1 (aromatase)', definition: 'Enzyme aberrantly expressed in endometriotic tissue enabling local estrogen biosynthesis independent of ovarian production' },
        { term: 'EndoTest', definition: 'Investigational salivary microRNA-based diagnostic test for endometriosis' },
      ],
      clinicalNotes: 'Progesterone resistance explains why some patients fail progestin therapy. The EndoTest salivary miRNA panel is promising but requires further validation in diverse populations. Imaging-based diagnosis without surgery is gaining acceptance.',
    },
  },
  media: [],
  citations: [
    { id: 'taylor-endometriosis-2021', type: 'article', title: 'Endometriosis', source: 'New England Journal of Medicine', authors: ['Taylor, H.S.', 'Kotlyar, A.M.', 'Flores, V.A.'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-pcos', targetType: 'condition', relationship: 'sibling', label: 'Polycystic Ovary Syndrome' },
    { targetId: 'obgyn-fertility', targetType: 'topic', relationship: 'related', label: 'Fertility and Infertility' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'chronic-pain', 'infertility', 'surgery'],
    keywords: ['endometriosis', 'pelvic pain', 'dysmenorrhea', 'endometrioma', 'deep infiltrating'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
