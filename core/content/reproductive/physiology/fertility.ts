import { EducationalContent } from '../../types';

export const fertilityContent: EducationalContent = {
  id: 'reproductive-fertility',
  type: 'process',
  name: 'Fertility',
  alternateNames: ['Reproductive potential', 'Fecundity', 'Conception'],
  levels: {
    1: {
      level: 1,
      summary: 'Fertility is the ability to have children. It involves the coming together of an egg and sperm to create a pregnancy.',
      explanation: `Fertility means being able to have a baby. For pregnancy to happen, several things need to work together:

**What Needs to Happen for Pregnancy:**

1. **Egg Release**: About once a month, an ovary releases an egg (this is called ovulation)

2. **Sperm Journey**: Sperm travel from where they enter the body up through the uterus to the fallopian tubes

3. **Meeting Up**: The egg and sperm meet in the fallopian tube. Only one sperm can enter the egg.

4. **Fertilization**: When a sperm enters an egg, they combine their genetic material. This creates the beginning of a new person.

5. **Implantation**: The fertilized egg travels to the uterus and attaches to the lining, where it can grow into a baby.

**The Fertile Window:**
- The egg only lives for about 24 hours after release
- Sperm can live in the body for up to 5 days
- The "fertile window" is about 6 days each cycle - 5 days before ovulation and the day of ovulation

**Factors That Affect Fertility:**
- Age (fertility decreases over time, especially after 35 for egg-producers)
- Overall health and lifestyle
- Hormonal balance
- Reproductive organ health

Many people can become pregnant without any problems, while others may need help from doctors.`,
      keyTerms: [
        { term: 'Fertility', definition: 'The natural ability to produce children' },
        { term: 'Fertilization', definition: 'When a sperm enters an egg and they combine to start a pregnancy' },
        { term: 'Ovulation', definition: 'When an ovary releases an egg, usually once a month' },
        { term: 'Fertile window', definition: 'The days in a menstrual cycle when pregnancy is possible' },
      ],
      analogies: [
        'Fertilization is like a lock and key - only one specific sperm can unlock and enter the egg',
        'The fertile window is like a limited-time sale - there are only a few days each month when pregnancy can happen',
      ],
      patientCounselingPoints: [
        'Pregnancy usually happens within a year of trying for most couples',
        'Both partners contribute to fertility',
        'If concerned about fertility, talk to a healthcare provider',
      ],
    },
    2: {
      level: 2,
      summary: 'Fertility depends on proper function of the reproductive systems in both partners, including regular ovulation, healthy sperm production, and a hospitable uterine environment.',
      explanation: `Fertility requires coordination of multiple biological systems in both partners.

**Female Fertility Requirements:**

**1. Ovarian Function**
- Regular release of mature eggs (ovulation)
- Typically occurs around day 14 of a 28-day cycle
- Egg quality decreases with age

**2. Tubal Patency**
- Fallopian tubes must be open and functional
- This is where fertilization occurs
- Tubes transport the embryo to the uterus

**3. Uterine Receptivity**
- Endometrium must be properly prepared
- Implantation window occurs 6-10 days after ovulation
- Requires proper hormone signaling

**Male Fertility Requirements:**

**1. Sperm Production**
- Testes produce millions of sperm daily
- Takes about 72 days to produce mature sperm
- Requires proper testosterone levels

**2. Sperm Quality**
- Count: At least 15 million per mL
- Motility: At least 40% moving
- Morphology: At least 4% normal shape

**3. Delivery System**
- Sperm must travel through vas deferens, mix with seminal fluid
- Ejaculation must deliver sperm to the vagina

**The Fertilization Process:**

1. Sperm deposited in vagina travel through cervical mucus
2. Only hundreds of the millions of sperm reach the egg
3. Sperm undergo "capacitation" - final maturation
4. Sperm release enzymes to penetrate the egg's outer layer
5. One sperm enters; the egg immediately blocks others
6. Genetic material combines (23 chromosomes from each)
7. Cell division begins as the embryo travels to the uterus
8. Implantation occurs about 6-10 days after fertilization

**Fertility Statistics:**
- Healthy couples: ~20% chance of pregnancy per cycle
- 85% conceive within 1 year of trying
- Age 35+: Fertility begins declining more rapidly`,
      keyTerms: [
        { term: 'Tubal patency', definition: 'Having open, unblocked fallopian tubes that allow egg and sperm to meet' },
        { term: 'Capacitation', definition: 'Final maturation process sperm undergo in the female reproductive tract before they can fertilize an egg' },
        { term: 'Implantation', definition: 'When the embryo attaches to and embeds in the uterine lining' },
        { term: 'Sperm motility', definition: 'The ability of sperm to swim properly toward the egg' },
        { term: 'Morphology', definition: 'The size and shape of sperm; abnormal shapes may not function properly' },
      ],
      examples: [
        'Ovulation predictor kits detect the LH surge that occurs 24-36 hours before ovulation, helping identify the fertile window',
        'Cervical mucus becomes clear and stretchy ("egg white consistency") around ovulation, helping sperm survival and transport',
      ],
    },
    3: {
      level: 3,
      summary: 'Fertility encompasses gamete production and maturation, fertilization mechanics, early embryonic development, and the complex molecular events of implantation, all regulated by precise hormonal control.',
      explanation: `Fertility involves the successful completion of multiple reproductive events, each with specific physiological requirements.

**Oogenesis and Folliculogenesis:**

**Oocyte Development**
- Oocytes arrested in meiosis I (prophase) since fetal life
- Primordial → Primary → Secondary → Antral follicle progression
- LH surge triggers resumption of meiosis I
- Ovulation releases secondary oocyte (arrested in metaphase II)
- Meiosis II completed only upon sperm entry

**Follicular Selection**
- Cohort of follicles recruited each cycle by FSH
- Dominant follicle selection by day 5-7
- Produces majority of estradiol
- Other follicles undergo atresia

**Spermatogenesis:**

**Germ Cell Development**
- Spermatogonia → primary spermatocyte → secondary spermatocyte → spermatid → spermatozoon
- Complete process takes ~72 days
- Occurs in seminiferous tubules
- Supported by Sertoli cells (blood-testis barrier)

**Sperm Maturation**
- Epididymal transit (10-14 days): Acquire motility and fertilizing capacity
- Seminal fluid contribution: Fructose, prostaglandins, buffering capacity

**Fertilization Mechanics:**

**Sperm Transport and Capacitation**
- Millions deposited → ~200 reach ampulla
- Cervical mucus filters abnormal sperm
- Capacitation: Cholesterol efflux, membrane hyperpolarization
- Hyperactivated motility for zona penetration

**Acrosome Reaction and Fusion**
- ZP3 (zona pellucida glycoprotein) triggers acrosome reaction
- Release of hyaluronidase and acrosin
- Sperm penetrates zona pellucida
- Sperm-egg fusion via CD9, IZUMO1-JUNO interaction
- Cortical reaction prevents polyspermy

**Post-Fertilization Events:**
- Oocyte completes meiosis II, extrudes second polar body
- Pronuclei form (contain haploid genomes)
- Syngamy: Pronuclei fuse at first mitotic division
- Embryonic genome activation at 4-8 cell stage (humans)

**Pre-implantation Development:**

| Day | Stage | Location | Events |
|-----|-------|----------|--------|
| 0 | Fertilization | Ampulla | Sperm-egg fusion |
| 1-2 | Cleavage | Fallopian tube | Cell divisions |
| 3 | Morula | Isthmus | 16-cell compaction |
| 4-5 | Blastocyst | Uterus | ICM and trophoblast differentiation |
| 6-10 | Implantation | Uterus | Attachment and invasion |

**Implantation Biology:**
- Blastocyst hatches from zona pellucida
- Apposition → Adhesion → Invasion
- Trophoblast invades endometrium
- hCG secretion begins, rescuing corpus luteum`,
      keyTerms: [
        { term: 'Capacitation', definition: 'Physiological changes sperm undergo in female tract enabling fertilization, including membrane alterations and hyperactivated motility' },
        { term: 'Acrosome reaction', definition: 'Exocytosis of acrosomal enzymes allowing sperm to penetrate the zona pellucida' },
        { term: 'Zona pellucida', definition: 'Glycoprotein matrix surrounding the oocyte that sperm must penetrate for fertilization' },
        { term: 'Cortical reaction', definition: 'Release of cortical granule contents that modify the zona pellucida to prevent polyspermy' },
        { term: 'Blastocyst', definition: 'Pre-implantation embryo with inner cell mass (becomes fetus) and trophoblast (becomes placenta)' },
        { term: 'Syngamy', definition: 'Fusion of maternal and paternal pronuclei to form diploid zygote genome' },
      ],
      examples: [
        'The IZUMO1-JUNO interaction is essential for sperm-egg fusion; mutations in either gene cause infertility in mice and are being studied in human infertility',
        'Assisted hatching in IVF mechanically thins the zona pellucida to facilitate blastocyst hatching in women with thick zonae or repeated implantation failure',
      ],
    },
    4: {
      level: 4,
      summary: 'Fertility at the molecular level involves intricate signaling cascades controlling gametogenesis, the molecular events of fertilization, epigenetic reprogramming, and the immunological tolerance required for implantation.',
      explanation: `**Molecular Regulation of Gametogenesis:**

**Oocyte Molecular Events**
- Meiotic arrest maintained by high cAMP (from cumulus cells via gap junctions)
- LH surge → cAMP decrease → meiosis resumes
- Maturation Promoting Factor (MPF): Cyclin B + CDK1
- Cytoplasmic maturation: Organelle redistribution, mRNA storage
- Oocyte quality markers: Mitochondrial DNA content, spindle morphology

**Spermatogenesis Molecular Control**
- Retinoic acid initiates meiosis in germ cells
- GDNF maintains spermatogonial stem cells
- Kit/Kit-ligand signaling for proliferation
- CREM transcription factor for spermiogenesis
- Protamine replacement of histones for chromatin compaction

**Fertilization Signaling:**

**Sperm Activation**
- Progesterone (from cumulus) activates CatSper Ca²⁺ channels
- Ca²⁺ influx drives hyperactivated motility
- Bicarbonate activates soluble adenylyl cyclase (sAC)
- cAMP → PKA → tyrosine phosphorylation cascade

**Oocyte Activation**
- Sperm delivers PLCζ (phospholipase C zeta)
- PLCζ generates IP3 from PIP2
- IP3 → Ca²⁺ oscillations from ER stores
- Ca²⁺ oscillations trigger:
  - Cortical granule exocytosis (zona block)
  - Meiosis II completion
  - Pronuclear formation
  - Cell cycle resumption

**Epigenetic Reprogramming:**

**Gametic Epigenetics**
- Sperm: Highly methylated, protamine-compacted
- Oocyte: Partially methylated, histone-based
- Imprinted genes: Differential methylation maintained

**Post-Fertilization Reprogramming**
- Global DNA demethylation (except imprinted genes)
- Paternal genome: Active demethylation (TET3-mediated)
- Maternal genome: Passive dilution through replication
- De novo methylation at implantation
- X-chromosome inactivation (in females)

**Embryonic Genome Activation:**
- Maternal-to-zygotic transition at 4-8 cell stage
- Clearance of maternal mRNAs
- Zygotic genome activation (ZGA)
- DUX4 as master regulator of ZGA

**Implantation Molecular Biology:**

**Endometrial Receptivity**
- Window of implantation: Days 20-24 (secretory phase)
- Regulated by progesterone via PGR
- Key molecules: Integrins (αvβ3), osteopontin, leukemia inhibitory factor (LIF)
- HOX genes pattern the endometrium
- Pinopodes indicate receptivity

**Trophoblast-Endometrial Dialogue**
- hCG signals to corpus luteum (LH receptor)
- L-selectin on trophoblast, ligands on epithelium
- Cytokine signaling: IL-1β, LIF, CSF-1
- Decidualization: cAMP and progesterone-driven stromal transformation

**Immune Tolerance:**
- Uterine NK cells (CD56bright): Regulate invasion, spiral artery remodeling
- Regulatory T cells suppress anti-fetal immunity
- HLA-G on trophoblast modulates NK and T cell activity
- Complement regulation at maternal-fetal interface`,
      keyTerms: [
        { term: 'PLCζ', definition: 'Phospholipase C zeta; sperm-derived oocyte activating factor that triggers calcium oscillations', pronunciation: 'PLC-zeta' },
        { term: 'CatSper', definition: 'Sperm-specific calcium channel essential for hyperactivated motility and fertilization' },
        { term: 'Epigenetic reprogramming', definition: 'Global erasure and re-establishment of DNA methylation patterns after fertilization' },
        { term: 'Zygotic genome activation', definition: 'Point at which embryonic genes become transcriptionally active (4-8 cell in humans)' },
        { term: 'Decidualization', definition: 'Progesterone-driven transformation of endometrial stromal cells for implantation support' },
        { term: 'HLA-G', definition: 'Non-classical MHC class I molecule expressed by trophoblast that mediates immune tolerance' },
      ],
      clinicalNotes: 'Oocyte activation failure (OAF) due to PLCζ deficiency or mutations is a rare cause of male infertility where normal-appearing sperm fail to activate oocytes after ICSI. Artificial oocyte activation using calcium ionophore or electrical stimulation can overcome this in some cases.',
    },
    5: {
      level: 5,
      summary: 'Clinical fertility assessment and treatment encompasses comprehensive evaluation of both partners, evidence-based interventions from lifestyle modifications to assisted reproductive technologies, and emerging therapies including mitochondrial replacement and artificial gametes.',
      explanation: `**Clinical Fertility Evaluation:**

**Initial Assessment (Both Partners)**
- Complete reproductive history: Cycle regularity, STI history, prior pregnancies
- Medical history: Thyroid disease, DM, autoimmune conditions
- Medications: Gonadotoxins, SSRIs affecting ejaculation
- Lifestyle factors: BMI, smoking, alcohol, occupation
- Timing and frequency of intercourse

**Female Evaluation:**

*Ovulatory Function*
- Day 3 FSH/E2, AMH, AFC: Ovarian reserve
- Mid-luteal progesterone: Ovulation confirmation
- TSH, prolactin: Secondary causes

*Anatomic Assessment*
- Hysterosalpingogram (HSG): Tubal patency and uterine cavity
- Saline infusion sonohysterography (SIS): Intracavitary lesions
- Laparoscopy: Gold standard for tubal/peritoneal disease (rarely first-line)

*Additional Testing*
- Genetic carrier screening
- Thrombophilia workup (if recurrent loss)
- Karyotype (if POI or recurrent loss)

**Male Evaluation:**

*Semen Analysis (WHO 2021 criteria)*
- Volume: ≥1.4 mL
- Concentration: ≥16 million/mL
- Total motility: ≥42%
- Progressive motility: ≥30%
- Morphology: ≥4% normal forms
- Repeat in 2-3 months if abnormal

*Hormonal Assessment (if abnormal SA)*
- Testosterone, FSH, LH
- Prolactin if low testosterone
- Karyotype if severe oligospermia (<5 million)
- Y chromosome microdeletion (AZF regions)
- CFTR mutations if CBAVD suspected

**Treatment Paradigm:**

**Tier 1: Lifestyle and Timed Intercourse**
- Weight optimization (BMI 20-25)
- Smoking/alcohol cessation
- Ovulation tracking and timed intercourse
- Preconception vitamins (folate 400-800 mcg)

**Tier 2: Ovulation Induction + IUI**
- Letrozole: First-line for PCOS (5 mg days 3-7)
- Clomiphene citrate: Alternative for PCOS
- Gonadotropins: When oral agents fail
- IUI: Washed sperm placed in uterus at ovulation
- Success rates: 10-20% per cycle

**Tier 3: IVF/ICSI**
- Controlled ovarian hyperstimulation with gonadotropins
- GnRH agonist or antagonist protocol for LH suppression
- Trigger: hCG or GnRH agonist (lower OHSS risk)
- Oocyte retrieval: Transvaginal ultrasound-guided aspiration
- Fertilization: Conventional or ICSI
- Embryo culture: Day 3 (cleavage) or day 5 (blastocyst) transfer
- Fresh or frozen embryo transfer
- Live birth rate: 30-50% per retrieval (age-dependent)

**Advanced ART:**

*ICSI (Intracytoplasmic Sperm Injection)*
- Single sperm injected directly into oocyte
- Indications: Male factor, prior fertilization failure, PGT
- Surgical sperm retrieval (TESE, MESA) for azoospermia

*Preimplantation Genetic Testing*
- PGT-A: Aneuploidy screening (all chromosomes)
- PGT-M: Monogenic disease (specific mutation)
- PGT-SR: Structural rearrangements
- Trophectoderm biopsy at blastocyst stage

*Donor Gametes and Gestational Carriers*
- Donor oocytes: For POI, poor ovarian reserve, genetic disease
- Donor sperm: Azoospermia, genetic disease, single/same-sex parents
- Gestational carriers: Absent uterus, medical contraindications

**Emerging Technologies:**

*Mitochondrial Replacement Therapy*
- Prevents mitochondrial disease transmission
- Maternal spindle transfer or pronuclear transfer
- "Three-parent baby" - nuclear DNA from intended parents

*In Vitro Gametogenesis*
- iPSC-derived gametes in research
- Potential for fertility preservation, same-sex genetic parenthood
- Significant regulatory and ethical considerations

*Artificial Wombs (Ectogenesis)*
- EXTEND technology for extreme prematurity
- Full ectogenesis remains experimental and controversial

**Prognosis Counseling:**
- Per-cycle fecundability decreases with age
- Cumulative live birth rate after 3 IVF cycles: 50-70%
- Diminished ovarian reserve: Consider expedited treatment
- When to transition to donor gametes: After 3-4 failed IVF with own eggs`,
      keyTerms: [
        { term: 'Controlled ovarian hyperstimulation', definition: 'Gonadotropin stimulation protocol in IVF to recruit multiple follicles for retrieval' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection; direct injection of single sperm into oocyte cytoplasm' },
        { term: 'PGT-A', definition: 'Preimplantation genetic testing for aneuploidy; screens all chromosomes for numerical abnormalities' },
        { term: 'TESE', definition: 'Testicular sperm extraction; surgical retrieval of sperm from testicular tissue in men with azoospermia' },
        { term: 'Mitochondrial replacement therapy', definition: 'Technique to prevent mitochondrial disease by replacing affected mitochondria with donor mitochondria' },
        { term: 'AZF regions', definition: 'Azoospermia factor regions on Y chromosome; microdeletions cause spermatogenic failure' },
      ],
      clinicalNotes: 'ASRM/ESHRE guidelines recommend offering IVF after 3 failed IUI cycles or earlier if advanced maternal age or significant male factor. For women ≥38, consider proceeding directly to IVF. The POSEIDON criteria stratify poor responders for counseling and protocol selection. Single embryo transfer is now standard to reduce multiple gestations while maintaining success rates through improved embryo selection and vitrification.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Clinical Gynecologic Endocrinology and Infertility',
      authors: ['Speroff, L.', 'Fritz, M.A.'],
      source: 'Lippincott Williams & Wilkins',
      chapter: 'Infertility chapters',
      license: 'Proprietary',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'WHO laboratory manual for the examination and processing of human semen, 6th edition',
      source: 'World Health Organization',
      authors: ['WHO'],
      url: 'https://www.who.int/publications/i/item/9789240030787',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-hormones', targetType: 'process', relationship: 'related', label: 'Reproductive Hormones' },
    { targetId: 'reproductive-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['physiology', 'fertility', 'ART', 'IVF'],
    keywords: ['fertilization', 'ovulation', 'sperm', 'egg', 'implantation', 'IVF', 'ICSI', 'infertility'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
