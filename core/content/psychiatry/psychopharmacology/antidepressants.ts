import { EducationalContent } from '../../types';

export const antidepressants: EducationalContent = {
  id: 'psychiatry-antidepressants',
  type: 'topic',
  name: 'Antidepressants',
  nameEs: 'Antidepresivos',
  alternateNames: ['Antidepressant Medications', 'SSRIs', 'SNRIs', 'Monoamine Modulators'],

  levels: {
    1: {
      level: 1,
      summary: 'Antidepressants are medications that help fix chemical imbalances in the brain that cause depression and anxiety. They usually take several weeks to start working fully.',
      explanation:
        '## How Antidepressants Help\n\n' +
        'Your brain uses chemical messengers called **neurotransmitters** to communicate. In depression, ' +
        'some of these messengers (especially **serotonin** and **norepinephrine**) are not working properly.\n\n' +
        'Antidepressants help by increasing the amount of these chemical messengers available in the brain.\n\n' +
        '**Important things to know:**\n' +
        '- They take 4-6 weeks to start working fully -- do not give up too soon\n' +
        '- They are NOT addictive (though stopping suddenly can cause withdrawal symptoms)\n' +
        '- They treat a medical condition, just like blood pressure pills treat high blood pressure\n' +
        '- Common side effects (usually temporary): upset stomach, headache, trouble sleeping\n' +
        '- Never stop taking them suddenly without talking to your doctor first',
      keyTerms: [
        { term: 'Antidepressant', definition: 'A medication that helps treat depression by increasing brain chemical messengers', pronunciation: 'AN-tee-deh-PRESS-ant' },
        { term: 'Serotonin', definition: 'A brain chemical that helps regulate mood, sleep, and appetite', pronunciation: 'SAIR-oh-TOH-nin' },
      ],
      analogies: ['Antidepressants work like adding more mail carriers to a postal system -- they help make sure messages get delivered between brain cells.'],
      patientCounselingPoints: [
        'Give the medication at least 4-6 weeks to work fully.',
        'Do not stop the medication suddenly -- taper gradually under medical supervision.',
        'Side effects like nausea and headache often improve within the first 1-2 weeks.',
        'Antidepressants are not habit-forming -- they correct a chemical imbalance.',
      ],
    },

    2: {
      level: 2,
      summary: 'Antidepressant classes include SSRIs (first-line), SNRIs, bupropion (NDRI), mirtazapine, TCAs, and MAOIs. SSRIs block serotonin reuptake at SERT. Key clinical considerations include the serotonin syndrome, discontinuation syndrome, and sexual dysfunction.',
      explanation:
        '## Antidepressant Classes\n\n' +
        '**SSRIs (First-Line):**\n' +
        'Block serotonin transporter (SERT). Fluoxetine (long half-life, activating), sertraline (fewest drug interactions), ' +
        'escitalopram (most selective), paroxetine (anticholinergic, short half-life -- worst discontinuation), citalopram (QTc at high doses), ' +
        'fluvoxamine (OCD, drug interactions via CYP1A2).\n' +
        'Side effects: GI upset, sexual dysfunction (30-50%), initial anxiety/jitteriness, weight gain, hyponatremia (SIADH in elderly).\n\n' +
        '**SNRIs:** Venlafaxine (NE at higher doses, BP elevation), duloxetine (also for pain, neuropathy), desvenlafaxine, levomilnacipran.\n\n' +
        '**Bupropion (NDRI):** NE and DA reuptake inhibitor. No sexual dysfunction. Activating. Also for smoking cessation. ' +
        'Contraindicated in seizure disorders and eating disorders (lowers seizure threshold).\n\n' +
        '**Mirtazapine (NaSSA):** Alpha-2 antagonist + 5-HT2A/2C/3 + H1 blockade. Sedating, appetite-stimulating, weight gain. ' +
        'Useful for insomnia and poor appetite. No sexual dysfunction.\n\n' +
        '**TCAs:** Amitriptyline, nortriptyline, imipramine, clomipramine (OCD). Block SERT + NET + muscarinic/histamine/alpha-1 receptors. ' +
        'Effective but side effect burden: anticholinergic, sedation, orthostatic hypotension, cardiac conduction delays. Lethal in overdose.\n\n' +
        '**MAOIs:** Phenelzine, tranylcypromine, selegiline (transdermal). Most effective for atypical depression. ' +
        'Tyramine restriction required (hypertensive crisis). Serotonin syndrome risk with other serotonergic agents.',
      keyTerms: [
        { term: 'SSRI', definition: 'Selective serotonin reuptake inhibitor -- first-line antidepressant class blocking SERT to increase synaptic serotonin' },
        { term: 'Serotonin syndrome', definition: 'Potentially fatal condition from serotonergic excess: mental status changes, autonomic instability, myoclonus, hyperthermia. Treat with cyproheptadine.' },
        { term: 'Discontinuation syndrome', definition: 'Flu-like symptoms, dizziness, electric shock sensations ("brain zaps") from abrupt SSRI/SNRI cessation; worst with paroxetine and venlafaxine' },
        { term: 'Bupropion', definition: 'Norepinephrine-dopamine reuptake inhibitor; no sexual dysfunction; contraindicated in seizure/eating disorders', pronunciation: 'byoo-PRO-pee-on' },
      ],
      clinicalNotes: 'Serotonin syndrome triad: mental status changes + autonomic instability + neuromuscular excitation (clonus > rigidity). Distinguish from NMS (rigidity > clonus, bradykinesia vs. hyperkinesia). Treat with cyproheptadine (5-HT2A antagonist). TCAs are lethal in overdose (cardiac toxicity) -- avoid in suicidal patients. MAOIs: 2-week washout before switching to/from other serotonergic agents (5 weeks for fluoxetine due to long-acting metabolite norfluoxetine).',
    },

    3: {
      level: 3,
      summary: 'Antidepressant mechanisms extend beyond monoamine reuptake to include 5-HT1A autoreceptor desensitization (explaining therapeutic lag), BDNF-mediated neuroplasticity, and downstream intracellular signaling cascades (CREB, neurogenesis). Pharmacokinetics involve CYP450 metabolism with clinically significant polymorphisms.',
      explanation:
        '## Molecular Mechanisms & Pharmacokinetics\n\n' +
        '**Beyond Reuptake -- Why the Therapeutic Lag?**\n' +
        'SSRIs block SERT immediately, but clinical improvement takes 2-4 weeks because:\n' +
        '1. Increased 5-HT initially activates somatodendritic 5-HT1A autoreceptors on raphe neurons -> negative feedback reduces 5-HT firing\n' +
        '2. Over 2-3 weeks, 5-HT1A autoreceptors desensitize\n' +
        '3. Tonic serotonergic firing increases\n' +
        '4. Downstream: BDNF expression increases, CREB transcription factor activates, hippocampal neurogenesis begins\n' +
        '5. Synaptic remodeling and new dendritic spines form over weeks\n\n' +
        '**Intracellular Signaling:**\n' +
        '5-HT1A -> Gi -> adenylate cyclase inhibition and GIRK channel activation\n' +
        '5-HT2A -> Gq -> PLC -> IP3/DAG -> PKC\n' +
        'Chronic SSRI: Gs-coupled receptor upregulation -> cAMP -> PKA -> CREB -> BDNF gene transcription\n\n' +
        '**CYP450 Pharmacokinetics:**\n' +
        '- **CYP2D6:** Metabolizes fluoxetine, paroxetine, venlafaxine, TCAs. Fluoxetine and paroxetine are strong CYP2D6 inhibitors.\n' +
        '- **CYP2C19:** Metabolizes escitalopram, citalopram, sertraline. Poor metabolizers: 2x higher levels.\n' +
        '- **CYP3A4:** Metabolizes buspirone, quetiapine, many benzodiazepines.\n' +
        '- **CYP1A2:** Metabolizes fluvoxamine (also strong inhibitor), duloxetine. Induced by smoking.\n\n' +
        '**Pharmacogenomic guidance (CPIC):**\n' +
        'CYP2D6 poor metabolizers: reduce TCA/venlafaxine dose or use alternative. ' +
        'CYP2C19 poor metabolizers: max escitalopram 10mg. Ultra-rapid metabolizers may need higher doses.',
      keyTerms: [
        { term: '5-HT1A autoreceptor desensitization', definition: 'The 2-3 week process by which presynaptic serotonin autoreceptors downregulate, allowing full serotonergic transmission; explains the therapeutic lag of SSRIs' },
        { term: 'CREB', definition: 'cAMP response element-binding protein -- transcription factor activated by chronic antidepressant signaling that increases BDNF gene expression and hippocampal neurogenesis' },
        { term: 'CYP2D6', definition: 'Cytochrome P450 enzyme with high genetic polymorphism; metabolizes many antidepressants; poor metabolizers have elevated drug levels and increased side effects' },
      ],
      clinicalNotes: 'Fluoxetine and paroxetine are strong CYP2D6 inhibitors -- avoid combining with tamoxifen (converted to active form by CYP2D6). Smoking cessation can dramatically increase fluvoxamine and duloxetine levels (CYP1A2 no longer induced). CPIC guidelines provide dosing recommendations for specific drug-gene pairs: CYP2D6 for TCAs, CYP2C19 for escitalopram/sertraline.',
    },

    4: {
      level: 4,
      summary: 'Advanced antidepressant pharmacology includes ketamine/esketamine (NMDA antagonism, mTOR-mediated synaptogenesis), neurosteroids (zuranolone -- GABA-A modulation), multimodal agents (vortioxetine -- 5-HT modulator), and precision prescribing via pharmacogenomic panels and inflammatory biomarkers.',
      explanation:
        '## Novel Mechanisms & Precision Prescribing\n\n' +
        '**Ketamine / Esketamine:**\n' +
        'NMDA antagonism -> preferential blockade on GABAergic interneurons -> glutamate surge -> AMPA activation -> ' +
        'BDNF release -> TrkB -> mTOR signaling -> rapid synaptogenesis in PFC (hours). ' +
        'Rapamycin blocks antidepressant effect (confirming mTOR dependence). ' +
        'Esketamine (Spravato): intranasal, REMS-certified clinics, 2-hour monitoring.\n\n' +
        '**Zuranolone (Zurzuvae):**\n' +
        'Neuroactive steroid positive allosteric modulator of synaptic and extrasynaptic GABA-A receptors. ' +
        'FDA-approved for postpartum depression (2023). 14-day course -- paradigm shift from indefinite maintenance. ' +
        'Rapid onset (day 3). Modulates tonic inhibition via delta-subunit-containing extrasynaptic GABA-A receptors.\n\n' +
        '**Vortioxetine (Trintellix):**\n' +
        'Multimodal: SERT inhibitor + 5-HT1A agonist + 5-HT1B partial agonist + 5-HT3/5-HT7/5-HT1D antagonist. ' +
        'Pro-cognitive effects (unique among antidepressants). Enhances glutamate, DA, NE, ACh, and histamine release in PFC.\n\n' +
        '**Precision Prescribing:**\n' +
        '- Pharmacogenomic panels (GeneSight, Genomind): GUIDED trial showed improved response (26% vs. 20%) but not remission.\n' +
        '- CRP-guided selection: High CRP (>3 mg/L) -> dual-action or anti-inflammatory augmentation.\n' +
        '- EEG biomarkers: Frontal theta cordance predicts SSRI response at week 1.\n' +
        '- Machine learning on baseline clinical and biological features for treatment matching.',
      keyTerms: [
        { term: 'mTOR signaling', definition: 'Mechanistic target of rapamycin pathway activated by ketamine via AMPA/BDNF/TrkB cascade; drives rapid synaptogenesis in prefrontal cortex' },
        { term: 'Zuranolone', definition: 'Oral neuroactive steroid GABA-A receptor modulator; 14-day course for PPD/MDD with rapid onset; modulates extrasynaptic delta-subunit receptors', pronunciation: 'zoor-AN-oh-lone' },
        { term: 'Vortioxetine', definition: 'Multimodal serotonin modulator with pro-cognitive effects; SERT inhibitor plus agonist/antagonist activity at multiple 5-HT receptor subtypes', pronunciation: 'vor-TY-ox-eh-teen' },
      ],
      clinicalNotes: 'Zuranolone represents a paradigm shift: short-course treatment for a chronic condition. Long-term data limited. Vortioxetine is particularly useful for MDD patients with prominent cognitive symptoms (concentration, processing speed). EEG-guided antidepressant selection (PEER/ANNT testing) is commercially available but evidence is still maturing. Ketamine clinics are proliferating but lack standardized protocols and long-term safety data.',
    },

    5: {
      level: 5,
      summary: 'Frontier antidepressant research includes psychoplastogens (non-hallucinogenic 5-HT2A agonists), psilocybin-assisted therapy, opioid system modulators (kappa antagonists for anhedonia), anti-inflammatory agents for CRP-stratified depression, and CRISPR-based manipulation of serotonergic gene expression.',
      explanation:
        '## Frontier Antidepressant Targets\n\n' +
        '**Psychoplastogens:**\n' +
        'Non-hallucinogenic compounds promoting neuroplasticity via 5-HT2A-mediated TrkB/mTOR activation without subjective psychedelic effects. ' +
        'Tabernanthalog (ibogaine analog), deoxy-isopsilocin derivatives. Goal: neuroplasticity benefits without 8-hour supervised sessions.\n\n' +
        '**Psilocybin-Assisted Therapy:**\n' +
        'Psilocin (5-HT2A agonist) disrupts DMN, increases global brain connectivity, and promotes BDNF/neuroplasticity. ' +
        'COMPASS Phase IIb: single dose effective at 3 weeks. Non-inferior to escitalopram at Imperial College. ' +
        'FDA Breakthrough Therapy. Requires preparation, supervised dosing (6-8h), and integration sessions.\n\n' +
        '**Kappa-Opioid Receptor Antagonists:**\n' +
        'Aticaprant (JNJ-67953964): targets anhedonia (reward circuit dysfunction). Kappa receptor activation produces dysphoria; ' +
        'antagonism restores hedonic capacity. Phase III for MDD adjunct. May specifically address motivational/reward deficits.\n\n' +
        '**Targeted Anti-Inflammatory Approaches:**\n' +
        'Infliximab (TNF-alpha inhibitor): effective for MDD with CRP >5 mg/L but not low-CRP depression. ' +
        'Minocycline, celecoxib as augmentation. JAK inhibitors (baricitinib) in early trials.\n\n' +
        '**Rapid-Acting Glutamate Modulators:**\n' +
        'Rapastinel (GLYX-13, NMDA modulator -- development discontinued). ' +
        'AV-101 (GluN2B-selective antagonist). Nitrous oxide (NMDA antagonist) showed antidepressant effects in pilot studies.\n\n' +
        '**Gene Therapy:** AAV-mediated SERT/5-HT1A modulation in preclinical models; CRISPR epigenetic editing of BDNF promoter.',
      keyTerms: [
        { term: 'Psychoplastogen', definition: 'Non-hallucinogenic compound promoting neuroplasticity via 5-HT2A/TrkB/mTOR signaling without subjective psychedelic effects; tabernanthalog is a prototype', pronunciation: 'SY-koh-PLAS-toh-jen' },
        { term: 'Kappa-opioid antagonist', definition: 'Drug class targeting anhedonia by blocking kappa receptors in reward circuitry; aticaprant is in Phase III for MDD augmentation' },
        { term: 'CRP-stratified treatment', definition: 'Precision approach using C-reactive protein levels to select anti-inflammatory augmentation (infliximab, minocycline) for the inflammatory subtype of depression' },
      ],
      clinicalNotes: 'Psychoplastogens could democratize access to neuroplasticity-based treatments by eliminating the need for supervised psychedelic sessions. Kappa-opioid antagonists represent the first mechanism-based treatment specifically targeting anhedonia. CRP-stratified treatment is the closest to clinical implementation among precision psychiatry approaches. Psilocybin FDA approval timeline remains uncertain but Phase III trials are underway.',
    },
  },

  media: [],
  citations: [
    { id: 'stahl-antidep', type: 'textbook', title: "Stahl's Essential Psychopharmacology", authors: ['Stephen M. Stahl'], source: 'Cambridge University Press', chapter: 'Chapters 7-8', license: 'Proprietary' },
    { id: 'cpic-cyp2d6', type: 'article', title: 'CPIC Guideline for CYP2D6 and CYP2C19 Genotypes and Dosing of SSRIs and TCAs', authors: ['J. Kevin Hicks et al.'], source: 'Clinical Pharmacology & Therapeutics' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-mdd', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder (primary indication)' },
    { targetId: 'psychiatry-gad', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder (SSRI/SNRI indication)' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'related', label: 'Antipsychotics (augmentation in TRD)' },
    { targetId: 'psychiatry-mood-stabilizers', targetType: 'topic', relationship: 'related', label: 'Mood Stabilizers (bipolar depression considerations)' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'psychopharmacology', 'pharmacology'],
    keywords: ['SSRI', 'SNRI', 'bupropion', 'mirtazapine', 'TCA', 'MAOI', 'serotonin', 'CYP2D6', 'ketamine', 'esketamine', 'zuranolone', 'vortioxetine', 'psilocybin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine', 'pharmacology'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
