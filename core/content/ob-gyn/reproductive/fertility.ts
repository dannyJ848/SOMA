import { EducationalContent } from '../../types';

export const fertility: EducationalContent = {
  id: 'obgyn-fertility',
  type: 'topic',
  name: 'Fertility and Infertility',
  nameEs: 'Fertilidad e Infertilidad',
  alternateNames: ['Reproductive Endocrinology', 'Infertility Evaluation'],
  levels: {
    1: {
      level: 1,
      summary: 'Fertility means the ability to have a baby; infertility is when a couple has trouble getting pregnant after trying for a year.',
      explanation:
        'For a pregnancy to happen, a healthy egg must be released from the ovary, travel through the fallopian tube, and meet a sperm. ' +
        'The fertilized egg then implants in the uterus. If any step in this process does not work properly, it can be hard to get pregnant. ' +
        'About 1 in 8 couples have trouble conceiving. Infertility can be caused by problems in the woman, the man, or both. ' +
        'Many treatments are available, from medications that help release eggs to procedures like IVF (in vitro fertilization), ' +
        'where eggs and sperm are combined in a laboratory.',
      keyTerms: [
        { term: 'Infertility', definition: 'Not being able to get pregnant after 12 months of regular unprotected intercourse (or 6 months if over 35)' },
        { term: 'Ovulation', definition: 'When an egg is released from the ovary, usually once a month' },
        { term: 'IVF', definition: 'In vitro fertilization; a procedure where eggs are fertilized with sperm in a lab, then placed in the uterus' },
      ],
      patientCounselingPoints: [
        'Infertility is common and not anyone\'s fault.',
        'Both partners should be evaluated — male factors cause about 40% of infertility.',
        'Many effective treatments exist, including medications, procedures, and IVF.',
      ],
    },
    2: {
      level: 2,
      summary: 'Infertility evaluation includes ovulatory assessment, tubal patency testing, semen analysis, and ovarian reserve testing, with treatment ranging from ovulation induction to IVF.',
      explanation:
        '**Female Evaluation:**\n' +
        '- Ovulatory function: menstrual history, day 21 progesterone (>3 ng/mL confirms ovulation)\n' +
        '- Ovarian reserve: day 3 FSH and estradiol, AMH (anti-Mullerian hormone)\n' +
        '- Tubal patency: hysterosalpingography (HSG) or saline infusion sonography\n' +
        '- Uterine cavity: HSG, sonohysterography, or hysteroscopy\n\n' +
        '**Male Evaluation:**\n' +
        '- Semen analysis: volume, concentration, motility, morphology\n' +
        '- Normal: >=15 million/mL, >=40% total motility, >=4% normal morphology (WHO 2021)\n\n' +
        '**Treatment Ladder:**\n' +
        '- Ovulation induction: letrozole (first-line for PCOS) or clomiphene\n' +
        '- IUI (intrauterine insemination): washed sperm placed directly into the uterus\n' +
        '- IVF: controlled ovarian stimulation, egg retrieval, fertilization, embryo transfer\n' +
        '- Donor gametes, gestational carrier for specific indications',
      keyTerms: [
        { term: 'AMH', definition: 'Anti-Mullerian hormone; a blood test indicating ovarian reserve (how many eggs remain)' },
        { term: 'Hysterosalpingography (HSG)', definition: 'X-ray test using dye to check if fallopian tubes are open and the uterine cavity is normal' },
        { term: 'Semen analysis', definition: 'Laboratory test evaluating sperm count, movement, and shape' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fertility management requires understanding the hypothalamic-pituitary-gonadal axis, controlled ovarian stimulation protocols, and embryo selection strategies to optimize pregnancy rates.',
      explanation:
        '**HPG Axis and Ovulation:**\n' +
        '- GnRH (pulsatile) -> FSH + LH from anterior pituitary\n' +
        '- FSH recruits follicular cohort; dominant follicle produces rising estradiol\n' +
        '- LH surge triggers ovulation ~36 hours later\n' +
        '- Corpus luteum produces progesterone supporting implantation\n\n' +
        '**Controlled Ovarian Stimulation (COS):**\n' +
        '- Gonadotropins (FSH +/- LH): recombinant or urinary-derived\n' +
        '- GnRH antagonist protocol (most common): start antagonist when lead follicle ~14 mm to prevent premature LH surge\n' +
        '- GnRH agonist long protocol: downregulation -> stimulation (higher egg yield, more OHSS risk)\n' +
        '- Trigger: hCG (standard) or GnRH agonist (OHSS prevention in antagonist protocol)\n\n' +
        '**IVF Lab:**\n' +
        '- Conventional IVF: ~50,000 sperm per oocyte\n' +
        '- ICSI: single sperm injected; used for severe male factor, prior fertilization failure\n' +
        '- Day 3 (cleavage) vs. day 5 (blastocyst) transfer: blastocyst preferred for higher implantation rate\n' +
        '- Preimplantation genetic testing (PGT-A): trophectoderm biopsy, NGS-based aneuploidy screening\n\n' +
        '**Unexplained Infertility (~25% of cases):**\n' +
        '- Normal ovulation, patent tubes, normal SA\n' +
        '- Treatment: empiric COH + IUI x 3 cycles -> IVF',
      keyTerms: [
        { term: 'Controlled ovarian stimulation', definition: 'Use of injectable gonadotropins to develop multiple follicles for IVF egg retrieval' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection; direct injection of a single sperm into an oocyte, used for severe male factor infertility' },
        { term: 'PGT-A', definition: 'Preimplantation genetic testing for aneuploidy; biopsy and genetic screening of embryos before transfer to select chromosomally normal embryos' },
      ],
      clinicalNotes: 'Single embryo transfer is standard practice to reduce multiple pregnancy risk. PGT-A improves per-transfer pregnancy rates but remains debated for cumulative live birth rate benefit.',
    },
    4: {
      level: 4,
      summary: 'Advanced reproductive endocrinology addresses diminished ovarian reserve management, recurrent implantation failure, fertility preservation, and uterine factor infertility including transplant.',
      explanation:
        '**Diminished Ovarian Reserve (DOR):**\n' +
        '- Bologna criteria: age >=40, prior poor response (<=3 oocytes with standard COS), abnormal reserve (AFC <5-7 or AMH <1.1)\n' +
        '- Protocols: high-dose stimulation, dual stimulation (DuoStim), mini-IVF, natural cycle IVF\n' +
        '- Adjuncts: growth hormone, DHEA, CoQ10 (limited evidence)\n' +
        '- Donor oocytes: highest success rates for severe DOR\n\n' +
        '**Recurrent Implantation Failure (RIF):**\n' +
        '- Defined as failure after transfer of >=3 good-quality embryos (or >=2 euploid blastocysts)\n' +
        '- Evaluation: hysteroscopy, endometrial biopsy (chronic endometritis — CD138 staining), thrombophilia workup\n' +
        '- ERA (endometrial receptivity analysis): personalized embryo transfer timing based on transcriptomic window of implantation\n' +
        '- Immunologic: intralipid infusion, IVIG, G-CSF (all investigational with limited evidence)\n\n' +
        '**Fertility Preservation:**\n' +
        '- Oocyte cryopreservation: vitrification survival rate ~90%; standard for medical and social fertility preservation\n' +
        '- Embryo cryopreservation: well-established; requires sperm at time of freezing\n' +
        '- Ovarian tissue cryopreservation: prepubertal patients or when COS timing not feasible; re-transplantation restores function\n' +
        '- Random-start and dual-trigger protocols minimize delay before gonadotoxic therapy\n\n' +
        '**Uterine Transplant:**\n' +
        '- Absolute uterine factor infertility: congenital absence (MRKH), hysterectomy\n' +
        '- >100 transplants worldwide; >50 live births\n' +
        '- Living vs. deceased donor; planned cesarean delivery, graft removal after family completion',
      keyTerms: [
        { term: 'DuoStim', definition: 'Dual ovarian stimulation within the same menstrual cycle (follicular + luteal phase) to maximize oocyte yield in poor responders' },
        { term: 'ERA', definition: 'Endometrial receptivity analysis; transcriptomic test identifying the personalized window of implantation for timed embryo transfer' },
        { term: 'Vitrification', definition: 'Ultra-rapid cryopreservation technique preventing ice crystal formation, achieving >90% oocyte/embryo survival rates' },
      ],
      clinicalNotes: 'ERA has shown mixed results in RCTs (ERA-RCT showed no benefit in general IVF population). Its value may be limited to RIF patients with displaced implantation windows. Uterine transplant remains available only at select centers.',
    },
    5: {
      level: 5,
      summary: 'Expert-level fertility science encompasses in vitro gametogenesis, mitochondrial replacement therapy, AI-driven embryo selection, and the epigenetic impact of ART on offspring health.',
      explanation:
        '**In Vitro Gametogenesis (IVG):**\n' +
        '- iPSC-derived oocytes and sperm: complete meiosis achieved in mice (Hayashi et al., 2012/2016)\n' +
        '- Human: iPSC -> PGCLCs demonstrated; full gametogenesis not yet achieved\n' +
        '- Implications: fertility from skin cells, same-sex reproduction, unlimited oocytes\n' +
        '- Ethical: genetic parentage, embryo creation at scale, regulatory void\n\n' +
        '**Mitochondrial Replacement Therapy (MRT):**\n' +
        '- Maternal spindle transfer or pronuclear transfer to prevent mitochondrial DNA disease transmission\n' +
        '- Legal in UK; FDA holds IND in US\n' +
        '- First birth (Zhang, 2016): spindle transfer for Leigh syndrome carrier\n' +
        '- Concerns: mtDNA carryover (~1-2%), nuclear-mitochondrial incompatibility\n\n' +
        '**AI in Embryo Selection:**\n' +
        '- Time-lapse morphokinetics: automated blastocyst grading (e.g., ERICA, iDAScore)\n' +
        '- Deep learning predicts ploidy from morphology with AUC ~0.65-0.75 (not replacing PGT-A)\n' +
        '- Non-invasive PGT: spent culture media cfDNA analysis — sensitivity improving but false positive rates limit clinical use\n\n' +
        '**Epigenetic Concerns of ART:**\n' +
        '- Increased imprinting disorders: Beckwith-Wiedemann (3-6x), Angelman (3-6x) — absolute risk remains very low\n' +
        '- ART-conceived children show altered DNA methylation at imprinted loci (H19/IGF2, SNRPN)\n' +
        '- ICSI vs. IVF: ICSI does not appear to increase epigenetic risk beyond standard IVF\n' +
        '- Frozen embryo transfer: higher birth weight than fresh transfer (endometrial environment difference)\n\n' +
        '**Genome Editing and Reproduction:**\n' +
        '- Heritable genome editing (He Jiankui, 2018) — international moratorium remains\n' +
        '- CRISPR base editing for monogenic disease prevention: technically feasible, ethically contested\n' +
        '- Polygenic embryo selection: marketed but scientifically limited and ethically controversial',
      keyTerms: [
        { term: 'In vitro gametogenesis', definition: 'Generation of functional eggs or sperm from pluripotent stem cells, achieved in mice but not yet in humans' },
        { term: 'Mitochondrial replacement therapy', definition: 'Technique replacing defective maternal mitochondria with healthy donor mitochondria to prevent mtDNA disease' },
        { term: 'Non-invasive PGT', definition: 'Preimplantation genetic testing using cell-free DNA in spent embryo culture media rather than trophectoderm biopsy' },
      ],
      clinicalNotes: 'IVG remains preclinical for humans but may fundamentally transform reproductive medicine within 10-20 years. Non-invasive PGT from spent media is commercially available but validation is ongoing. AI embryo selection supplements but does not replace established methods.',
    },
  },
  media: [],
  citations: [
    { id: 'practice-committee-asrm-2024', type: 'article', title: 'Diagnostic Evaluation of Infertility in the Female Partner', source: 'Fertility and Sterility', authors: ['Practice Committee of the ASRM'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
    { targetId: 'obgyn-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'obgyn-contraception', targetType: 'topic', relationship: 'sibling', label: 'Contraception' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['reproductive-endocrinology', 'infertility', 'IVF', 'fertility-preservation'],
    keywords: ['infertility', 'IVF', 'IUI', 'ovulation induction', 'AMH', 'egg freezing', 'PGT', 'ICSI'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
