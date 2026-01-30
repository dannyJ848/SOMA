/**
 * Integrative Medicine Database
 *
 * Structured database of integrative and complementary medicine entries
 * for SOMA medical education. Each entry provides evidence-based information
 * including mechanisms, indications, risks, interactions, and plain-language
 * patient explanations.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type IntegrativeCategory =
  | 'mind-body'
  | 'manual-therapy'
  | 'herbal'
  | 'nutritional'
  | 'energy-medicine'
  | 'traditional'
  | 'evidence-evaluation'
  | 'safety';

export interface IntegrativeMedicineEntry {
  id: string;
  name: string;
  nameEs: string;
  category: IntegrativeCategory;
  description: string;
  evidenceLevel: string;
  indications: string[];
  mechanism: string;
  risks: string[];
  interactions: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  nameEs: string,
  category: IntegrativeCategory,
  description: string,
  evidenceLevel: string,
  indications: string[],
  mechanism: string,
  risks: string[],
  interactions: string[],
  patientExplanation: string,
): IntegrativeMedicineEntry => ({
  id,
  name,
  nameEs,
  category,
  description,
  evidenceLevel,
  indications,
  mechanism,
  risks,
  interactions,
  patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const INTEGRATIVE_MEDICINE_ENTRIES: Record<string, IntegrativeMedicineEntry> = {

  // ── Mind-Body ───────────────────────────────────────────────────────────

  'mindfulness-meditation': entry(
    'mindfulness-meditation',
    'Mindfulness Meditation',
    'Meditación de Atención Plena',
    'mind-body',
    'A practice of focused, non-judgmental awareness of the present moment. Rooted in Buddhist traditions, it has been secularized for clinical use in programs such as Mindfulness-Based Stress Reduction (MBSR).',
    'Strong — multiple RCTs and meta-analyses support benefits for anxiety, depression, and chronic pain',
    ['Generalized anxiety disorder', 'Major depressive disorder (relapse prevention)', 'Chronic pain', 'Insomnia', 'Stress-related conditions'],
    'Modulates activity in the default-mode network and amygdala, reduces cortisol secretion, and promotes parasympathetic tone through sustained attentional regulation.',
    ['Rare reports of depersonalization or increased anxiety in trauma survivors', 'May exacerbate psychosis in vulnerable individuals'],
    ['No known pharmacological interactions', 'May complement but should not replace psychiatric medication without clinical guidance'],
    'Mindfulness meditation means paying close attention to the present moment — your breathing, body sensations, and thoughts — without judging them. Research shows it can lower stress hormones and calm the parts of your brain that trigger anxiety. Most people practice 10–30 minutes a day and notice benefits within a few weeks.',
  ),

  'yoga-therapy': entry(
    'yoga-therapy',
    'Yoga Therapy',
    'Terapia de Yoga',
    'mind-body',
    'Therapeutic application of yoga postures (asana), breathing techniques (pranayama), and meditation tailored to individual health conditions.',
    'Moderate to strong — good evidence for low-back pain, anxiety, and hypertension',
    ['Chronic low-back pain', 'Anxiety disorders', 'Hypertension', 'Insomnia', 'Depression'],
    'Combines mechanical stretching and strengthening with vagal nerve stimulation via controlled breathing, decreasing sympathetic nervous system activation and improving proprioception.',
    ['Musculoskeletal injury if poses performed incorrectly', 'Rare vertebral artery dissection with extreme neck positions', 'Caution with glaucoma (inversions)'],
    ['No direct drug interactions', 'Blood-pressure-lowering effects may add to antihypertensive medications'],
    'Yoga therapy uses specific poses, breathing exercises, and meditation chosen for your health needs. The breathing techniques activate your vagus nerve, which tells your body to relax. Studies show it can help with back pain, anxiety, and high blood pressure when practiced regularly.',
  ),

  'tai-chi': entry(
    'tai-chi',
    'Tai Chi',
    'Tai Chi',
    'mind-body',
    'A Chinese martial art practiced as a series of slow, flowing movements coordinated with deep breathing. Used clinically to improve balance, reduce falls, and manage chronic conditions.',
    'Strong for fall prevention in the elderly; moderate for pain and cardiovascular health',
    ['Fall prevention in older adults', 'Osteoarthritis pain', 'Heart failure rehabilitation', 'Fibromyalgia', 'Parkinson disease balance'],
    'Engages the vestibular and proprioceptive systems, strengthens lower extremity muscles, and reduces systemic inflammation through gentle aerobic exercise and meditative focus.',
    ['Very low risk overall', 'Mild muscle soreness initially', 'Caution in severe osteoporosis or acute joint inflammation'],
    ['No known pharmacological interactions', 'Complements standard fall-prevention and cardiac-rehab programs'],
    'Tai chi is a gentle exercise where you move through a set of slow, flowing positions while breathing deeply. It is one of the safest forms of exercise for older adults and has strong evidence for improving balance and preventing falls. Many people also find it reduces joint pain and stress.',
  ),

  'cognitive-behavioral-therapy-pain': entry(
    'cognitive-behavioral-therapy-pain',
    'CBT for Chronic Pain',
    'TCC para Dolor Crónico',
    'mind-body',
    'Application of cognitive-behavioral therapy (CBT) principles to chronic pain management, targeting catastrophizing, avoidance behaviors, and maladaptive beliefs about pain.',
    'Strong — recommended by ACP and IASP guidelines for chronic pain',
    ['Chronic low-back pain', 'Fibromyalgia', 'Migraine and tension headache', 'Osteoarthritis', 'Temporomandibular disorders'],
    'Restructures maladaptive cognitions about pain, reduces fear-avoidance behavior, and modulates central sensitization through descending inhibitory pathway activation.',
    ['No physical risks', 'Temporary emotional discomfort when confronting pain beliefs', 'Requires trained therapist'],
    ['Complementary to pharmacotherapy and physical therapy', 'Can reduce the need for opioid analgesics over time'],
    'CBT for pain teaches you how your thoughts about pain can make it feel worse. For example, thinking "this pain will never end" increases muscle tension and anxiety, which amplifies the pain signal. A therapist helps you identify and change those thought patterns, practice relaxation techniques, and gradually return to activities you have been avoiding.',
  ),

  // ── Manual Therapy ──────────────────────────────────────────────────────

  'chiropractic-spinal-manipulation': entry(
    'chiropractic-spinal-manipulation',
    'Chiropractic Spinal Manipulation',
    'Manipulación Espinal Quiropráctica',
    'manual-therapy',
    'High-velocity, low-amplitude thrust applied to spinal joints to restore mobility, reduce pain, and improve function. Core technique of chiropractic care.',
    'Moderate for acute low-back pain; limited for other conditions',
    ['Acute and subacute low-back pain', 'Neck pain', 'Cervicogenic headache'],
    'Mechanical thrust gaps facet joints, triggers neurophysiological responses including altered muscle spindle activity, reduced local inflammatory mediators, and activation of descending pain-inhibitory pathways.',
    ['Rare but serious: vertebral artery dissection with cervical manipulation', 'Cauda equina syndrome (extremely rare)', 'Transient soreness and stiffness'],
    ['No direct drug interactions', 'Anticoagulant therapy increases bleeding risk with forceful manipulation'],
    'Chiropractic spinal manipulation involves a trained practitioner applying a quick, controlled push to a joint in your spine. This can improve how the joint moves and reduce pain signals. Research supports its use mainly for acute low-back pain. It is generally safe, though cervical (neck) manipulation carries a very small risk of a serious blood vessel injury.',
  ),

  'massage-therapy': entry(
    'massage-therapy',
    'Therapeutic Massage',
    'Masaje Terapéutico',
    'manual-therapy',
    'Manual soft-tissue manipulation using various techniques (Swedish, deep tissue, myofascial release) to reduce pain, improve circulation, and promote relaxation.',
    'Moderate — benefits for low-back pain, anxiety, and tension headache; less clear for other conditions',
    ['Chronic low-back pain', 'Anxiety and depression symptoms', 'Tension headache', 'Myofascial pain', 'Cancer-related fatigue and anxiety'],
    'Stimulates mechanoreceptors and proprioceptors, increases local blood and lymphatic flow, reduces cortisol while increasing serotonin and dopamine, and decreases substance P in pain pathways.',
    ['Bruising or soreness post-treatment', 'Contraindicated over areas of deep vein thrombosis, fracture, or active infection', 'Caution with bleeding disorders'],
    ['Anticoagulants increase bruising risk', 'May enhance relaxation effects of sedating medications'],
    'Therapeutic massage uses hands-on pressure to relax tight muscles, improve blood flow, and reduce pain. Studies show it can lower stress hormones and increase your body\'s natural feel-good chemicals. It is especially well-supported for back pain and anxiety.',
  ),

  'acupuncture': entry(
    'acupuncture',
    'Acupuncture',
    'Acupuntura',
    'manual-therapy',
    'Insertion of fine needles at defined anatomical points to modulate pain and physiological function. Practiced in traditional Chinese medicine for millennia and now used in integrative clinical settings.',
    'Strong for chronic pain and chemotherapy-induced nausea; moderate for other conditions',
    ['Chronic low-back pain', 'Knee osteoarthritis', 'Migraine prophylaxis', 'Chemotherapy-induced nausea/vomiting', 'Postoperative pain'],
    'Stimulates A-delta and C afferent nerve fibers, triggering endogenous opioid release (endorphins, enkephalins), modulating serotonin and norepinephrine pathways, and activating descending pain-inhibitory mechanisms.',
    ['Mild bruising or bleeding at needle sites', 'Rare infection if non-sterile needles used', 'Pneumothorax (extremely rare, with thoracic points)', 'Vasovagal syncope'],
    ['Anticoagulants increase bleeding risk at puncture sites', 'Generally safe alongside conventional therapies', 'May reduce analgesic medication requirements'],
    'Acupuncture involves placing very thin needles at specific points on your body. This stimulates nerves that send signals to your brain to release natural painkillers and reduce inflammation. The strongest evidence supports its use for chronic pain and chemotherapy-related nausea. Most people feel minimal discomfort during treatment.',
  ),

  // ── Herbal ──────────────────────────────────────────────────────────────

  'st-johns-wort': entry(
    'st-johns-wort',
    'St. John\'s Wort',
    'Hierba de San Juan',
    'herbal',
    'Hypericum perforatum — a flowering plant extract widely used for mild-to-moderate depression in Europe. One of the most studied herbal medicines, but notable for extensive drug interactions.',
    'Strong for mild-to-moderate depression; comparable to SSRIs in several RCTs',
    ['Mild-to-moderate major depressive disorder', 'Seasonal affective disorder'],
    'Contains hyperforin and hypericin, which inhibit reuptake of serotonin, norepinephrine, and dopamine, and modulate GABA and glutamate transmission. Hyperforin also potently induces CYP3A4 and P-glycoprotein.',
    ['Photosensitivity', 'GI upset', 'Serotonin syndrome when combined with serotonergic drugs', 'Mania in bipolar disorder'],
    ['MAJOR: Reduces efficacy of oral contraceptives, warfarin, cyclosporine, antiretrovirals, and many other CYP3A4 substrates', 'Serotonin syndrome risk with SSRIs, SNRIs, triptans, and tramadol', 'Decreases effectiveness of chemotherapy agents'],
    'St. John\'s wort is a plant extract that works on the same brain chemicals as prescription antidepressants. Studies show it can help mild-to-moderate depression. However, it has very serious interactions with many common medications — including birth control pills, blood thinners, and HIV drugs — because it speeds up how your liver breaks them down. Always tell your doctor before taking it.',
  ),

  'turmeric-curcumin': entry(
    'turmeric-curcumin',
    'Turmeric / Curcumin',
    'Cúrcuma / Curcumina',
    'herbal',
    'Curcumin is the primary bioactive compound in turmeric (Curcuma longa). Widely studied for anti-inflammatory and antioxidant properties, though limited by poor oral bioavailability.',
    'Moderate — emerging evidence for osteoarthritis and inflammatory conditions; bioavailability is a limiting factor',
    ['Osteoarthritis pain', 'Inflammatory bowel disease (adjunct)', 'Metabolic syndrome markers', 'Exercise-induced muscle soreness'],
    'Inhibits NF-kB, COX-2, and lipoxygenase pathways; scavenges reactive oxygen species; modulates inflammatory cytokines (TNF-alpha, IL-1, IL-6). Piperine co-administration increases bioavailability by 2000%.',
    ['GI discomfort at high doses', 'May increase bleeding risk', 'Possible gallbladder contraction in patients with gallstones', 'Iron chelation at very high doses'],
    ['May potentiate anticoagulants and antiplatelet agents', 'May interact with sulfasalazine and increase its blood levels', 'Piperine enhances absorption of many co-administered drugs'],
    'Turmeric contains curcumin, a natural compound that reduces inflammation in a similar way to over-the-counter anti-inflammatories. The main challenge is that your body absorbs very little of it on its own — taking it with black pepper extract dramatically improves absorption. Research is promising for joint pain and inflammation, but tell your doctor if you take blood thinners.',
  ),

  'ginkgo-biloba': entry(
    'ginkgo-biloba',
    'Ginkgo Biloba',
    'Ginkgo Biloba',
    'herbal',
    'Leaf extract of the Ginkgo biloba tree, standardized to flavone glycosides and terpene lactones. Historically promoted for cognitive enhancement and peripheral vascular disease.',
    'Weak to moderate — large trials (GEM study) failed to show benefit for dementia prevention; some evidence for claudication',
    ['Intermittent claudication', 'Tinnitus (limited evidence)', 'Age-related cognitive decline (uncertain benefit)'],
    'Inhibits platelet-activating factor (PAF), scavenges free radicals, improves endothelial nitric oxide production, and modulates neurotransmitter systems including cholinergic and monoaminergic pathways.',
    ['Increased bleeding risk', 'Headache', 'GI upset', 'Allergic skin reactions', 'Seizures at very high doses'],
    ['Anticoagulants and antiplatelet drugs (increased bleeding)', 'May lower seizure threshold with anticonvulsants', 'Possible interaction with SSRIs'],
    'Ginkgo biloba is a tree extract that some people take hoping to sharpen memory or improve blood flow. While it does have antioxidant properties, large clinical trials have not shown it prevents dementia. It does increase bleeding risk, so it is important to stop taking it before surgery and to tell your doctor if you use blood thinners.',
  ),

  // ── Nutritional ─────────────────────────────────────────────────────────

  'omega-3-fatty-acids': entry(
    'omega-3-fatty-acids',
    'Omega-3 Fatty Acids (EPA/DHA)',
    'Ácidos Grasos Omega-3 (EPA/DHA)',
    'nutritional',
    'Polyunsaturated fatty acids found in fatty fish and fish-oil supplements. EPA and DHA are the biologically active forms most studied for cardiovascular and anti-inflammatory benefits.',
    'Strong for hypertriglyceridemia; moderate for cardiovascular risk reduction; mixed for depression',
    ['Hypertriglyceridemia', 'Cardiovascular risk reduction', 'Rheumatoid arthritis (adjunctive)', 'Major depressive disorder (adjunctive, EPA-predominant)', 'Dry eye syndrome'],
    'Compete with arachidonic acid in cyclooxygenase and lipoxygenase pathways, producing less inflammatory eicosanoids (resolvins, protectins); lower VLDL hepatic synthesis; stabilize cardiac myocyte ion channels.',
    ['Fishy aftertaste and GI upset', 'Increased bleeding time at high doses (> 3 g/day)', 'Possible LDL elevation with DHA-dominant formulations'],
    ['May potentiate anticoagulant and antiplatelet agents at high doses', 'Prescription omega-3 products may interact with statins (monitor liver function)', 'Generally safe with most medications at standard doses'],
    'Omega-3 fatty acids, found in fish oil, help your body make fewer inflammatory chemicals and more anti-inflammatory ones. They are best proven for lowering high triglycerides. There is also evidence they support heart health and may help with depression when used alongside standard treatment. The main side effects are fishy burps and mild stomach upset.',
  ),

  'vitamin-d': entry(
    'vitamin-d',
    'Vitamin D Supplementation',
    'Suplementación de Vitamina D',
    'nutritional',
    'Fat-soluble vitamin (cholecalciferol D3 or ergocalciferol D2) essential for calcium homeostasis and bone health, with emerging roles in immune function and chronic disease.',
    'Strong for bone health and fall prevention in deficient populations; mixed for other outcomes',
    ['Vitamin D deficiency or insufficiency', 'Osteoporosis prevention', 'Fall prevention in elderly', 'Adjunct in multiple sclerosis (under investigation)', 'Immune support in deficiency'],
    'Converted to 25-hydroxyvitamin D in the liver and then to active 1,25-dihydroxyvitamin D in the kidneys; binds vitamin D receptor (VDR) to regulate calcium absorption, bone mineralization, immune cell differentiation, and gene transcription.',
    ['Hypercalcemia and hypercalciuria at excessive doses', 'Kidney stones (especially with concurrent calcium supplementation)', 'Nausea and vomiting at toxic levels'],
    ['Thiazide diuretics may increase hypercalcemia risk', 'Corticosteroids impair vitamin D metabolism', 'Cholestyramine and orlistat reduce absorption', 'May affect digoxin levels through calcium changes'],
    'Vitamin D helps your body absorb calcium and keep bones strong. Many people do not get enough, especially those with limited sun exposure or darker skin. If a blood test shows you are low, supplements can bring your levels back to normal and reduce fracture risk. Taking too much can be harmful, so follow your doctor\'s recommended dose.',
  ),

  'probiotics': entry(
    'probiotics',
    'Probiotics',
    'Probióticos',
    'nutritional',
    'Live microorganisms (primarily Lactobacillus and Bifidobacterium strains) administered to confer a health benefit on the host by modulating the gut microbiome.',
    'Moderate — strain-specific evidence for antibiotic-associated diarrhea and IBS; overgeneralized marketing claims are common',
    ['Antibiotic-associated diarrhea prevention', 'Clostridioides difficile infection prevention', 'Irritable bowel syndrome (specific strains)', 'Infantile colic', 'Atopic dermatitis prevention in high-risk infants'],
    'Compete with pathogenic organisms for mucosal binding sites, produce bacteriocins and short-chain fatty acids, modulate mucosal immune responses including IgA production, and strengthen intestinal epithelial barrier integrity.',
    ['Gas and bloating (usually transient)', 'Rare bacteremia or fungemia in immunocompromised patients', 'Risk of sepsis with central venous catheters'],
    ['Generally safe with most medications', 'Immunosuppressed patients should use with caution', 'Antibiotics reduce probiotic viability if taken simultaneously — separate dosing by 2 hours'],
    'Probiotics are beneficial bacteria that you take as supplements or find in foods like yogurt. They work by supporting the healthy bacteria already in your gut, which helps with digestion and immune function. The best evidence is for preventing diarrhea caused by antibiotics. Different strains do different things, so it matters which product you choose.',
  ),

  'magnesium': entry(
    'magnesium',
    'Magnesium Supplementation',
    'Suplementación de Magnesio',
    'nutritional',
    'Essential mineral involved in over 300 enzymatic reactions. Commonly supplemented as magnesium glycinate, citrate, or oxide for various clinical indications.',
    'Moderate — good evidence for migraine prophylaxis, eclampsia, and constipation; emerging evidence for anxiety and sleep',
    ['Migraine prophylaxis', 'Constipation (magnesium citrate/oxide)', 'Eclampsia and pre-eclampsia (IV magnesium sulfate)', 'Muscle cramps (limited evidence)', 'Insomnia and anxiety (preliminary)'],
    'Cofactor for ATP production, neuromuscular transmission, and regulation of NMDA receptors. Modulates calcium and potassium channel activity; influences HPA axis and cortisol secretion.',
    ['Diarrhea (especially oxide and citrate forms)', 'Hypermagnesemia in renal impairment', 'Nausea at high doses', 'Hypotension with IV administration'],
    ['Reduces absorption of bisphosphonates, tetracyclines, and fluoroquinolones — separate by 2 hours', 'Concurrent use with other CNS depressants may enhance sedation', 'Loop and thiazide diuretics increase renal magnesium loss'],
    'Magnesium is a mineral your body needs for hundreds of processes, including muscle relaxation, nerve function, and energy production. Many people do not get enough from their diet. Supplements can help prevent migraines and relieve constipation. The most common side effect is loose stools, which varies by the type of magnesium you take.',
  ),

  // ── Energy Medicine ─────────────────────────────────────────────────────

  'reiki': entry(
    'reiki',
    'Reiki',
    'Reiki',
    'energy-medicine',
    'A Japanese healing practice in which practitioners place their hands lightly on or near the body with the intention of channeling "universal life energy" to promote healing.',
    'Insufficient — no plausible mechanism; studies show no benefit beyond placebo and nonspecific relaxation effects',
    ['Stress and anxiety (relaxation context only)', 'Palliative care (comfort measure)', 'No evidence for treatment of any specific disease'],
    'No established physiological mechanism. Proposed "biofield" energy transfer has not been detected or measured by scientific instruments. Observed benefits are consistent with placebo, expectancy, and therapeutic touch/attention effects.',
    ['Extremely low physical risk', 'Primary risk is substitution for evidence-based care', 'Potential for false beliefs about disease treatment'],
    ['No pharmacological interactions', 'Risk of delaying or replacing effective medical treatment'],
    'Reiki is a relaxation practice where a practitioner places their hands lightly on or above your body. Some people find it calming and stress-relieving, similar to other relaxation techniques. However, scientific studies have not found that it works beyond the general comfort of resting in a quiet environment with personal attention. It should never be used instead of proven medical treatments.',
  ),

  'therapeutic-touch': entry(
    'therapeutic-touch',
    'Therapeutic Touch',
    'Toque Terapéutico',
    'energy-medicine',
    'A nursing-originated practice in which practitioners move their hands above the patient\'s body to detect and modulate a proposed "human energy field." Despite the name, no physical touch is required.',
    'Insufficient — the foundational premise (human energy field) lacks scientific support; clinical trials show no specific benefit',
    ['Anxiety reduction (relaxation context)', 'Palliative comfort care'],
    'Purported to work by smoothing disturbances in the patient\'s energy field. No such field has been scientifically detected. A landmark study by a 9-year-old (Emily Rosa, JAMA 1998) demonstrated practitioners could not detect the energy field under blinded conditions.',
    ['No direct physical harm', 'Risk of substituting for evidence-based treatments', 'May foster false confidence in unvalidated diagnoses'],
    ['No pharmacological interactions'],
    'Therapeutic touch involves a practitioner moving their hands over your body without actually touching you, claiming to balance your energy. Scientific testing has not confirmed that practitioners can detect or change any energy field. While it is not physically harmful, it should not replace treatments your doctor recommends.',
  ),

  // ── Traditional ─────────────────────────────────────────────────────────

  'traditional-chinese-medicine': entry(
    'traditional-chinese-medicine',
    'Traditional Chinese Medicine (TCM)',
    'Medicina Tradicional China (MTC)',
    'traditional',
    'A comprehensive medical system originating in ancient China, incorporating acupuncture, herbal formulas, dietary therapy, tai chi, and qi gong. Diagnosis is based on pattern differentiation (bian zheng) rather than biomedical disease categories.',
    'Variable — some components (acupuncture, tai chi) have moderate-to-strong evidence; herbal formulas range from promising to unproven; overall system-level evidence is limited',
    ['Chronic pain (acupuncture component)', 'Nausea and vomiting', 'Menopausal symptoms', 'Various conditions addressed through specific herbal formulas'],
    'TCM framework attributes disease to imbalances in qi, yin/yang, and the five elements. Biomedical research on individual components has identified plausible mechanisms for some (e.g., acupuncture\'s neurophysiological effects, specific herbal compound pharmacology), while system-level concepts like qi remain outside scientific validation.',
    ['Herbal formulas may contain heavy metals, adulterants, or unlisted pharmaceutical compounds', 'Herb-drug interactions', 'Acupuncture risks (see acupuncture entry)', 'Delay of conventional diagnosis'],
    ['Multiple potential herb-drug interactions depending on specific formulas', 'Ephedra (ma huang) interacts with stimulants and MAOIs', 'Licorice root interacts with diuretics, corticosteroids, and cardiac glycosides'],
    'Traditional Chinese medicine is a complete healthcare system from China that includes acupuncture, herbal remedies, dietary advice, and exercises like tai chi. Some parts — especially acupuncture and tai chi — have good scientific evidence behind them. Herbal formulas require more caution because quality varies and they can interact with prescription drugs. Always tell your doctor what TCM treatments you use.',
  ),

  'ayurveda': entry(
    'ayurveda',
    'Ayurvedic Medicine',
    'Medicina Ayurvédica',
    'traditional',
    'Ancient Indian medical system based on the concept of three doshas (Vata, Pitta, Kapha) governing individual constitution and disease. Incorporates herbal medicine, dietary practices, yoga, massage, and purification procedures (panchakarma).',
    'Limited overall; specific components (turmeric, yoga) have independent evidence; some Ayurvedic preparations have shown concerning contamination rates',
    ['Digestive disorders (traditional use)', 'Joint and musculoskeletal complaints', 'Stress management', 'General wellness optimization'],
    'Ayurvedic theory attributes illness to doshic imbalance. Individual interventions have diverse mechanisms: herbal compounds (anti-inflammatory, antioxidant), yoga (neurophysiological, see yoga entry), dietary modifications (nutrient and fiber effects), and panchakarma (proposed detoxification — not validated by modern toxicology).',
    ['CRITICAL: Studies have found 20% of US-manufactured Ayurvedic products contain detectable lead, mercury, or arsenic', 'Some preparations contain unlisted pharmaceutical compounds', 'Panchakarma procedures carry risk of dehydration and electrolyte imbalance', 'Herbal hepatotoxicity reported'],
    ['Multiple potential herb-drug interactions', 'Heavy metal contamination may affect drug metabolism', 'Ashwagandha may potentiate sedatives and thyroid hormones', 'Triphala may enhance anticoagulant effects'],
    'Ayurvedic medicine is an ancient Indian healing system that uses herbs, diet, yoga, and cleansing procedures. While some individual components like turmeric and yoga have scientific support, there are important safety concerns. Studies have found that a significant number of Ayurvedic herbal products — even those made in the US — contain dangerous levels of lead, mercury, or arsenic. If you choose to use Ayurvedic remedies, purchase from reputable sources that provide third-party testing.',
  ),

  'homeopathy': entry(
    'homeopathy',
    'Homeopathy',
    'Homeopatía',
    'traditional',
    'A system developed in the 1790s by Samuel Hahnemann based on two principles: "like cures like" and "the law of infinitesimal doses." Remedies are serially diluted — often beyond Avogadro\'s number — meaning no molecules of the original substance remain.',
    'Negative — systematic reviews and meta-analyses consistently conclude effects are not distinguishable from placebo',
    ['No condition has sufficient evidence to support homeopathic treatment'],
    'No plausible mechanism. At common dilution levels (30C), the probability of a single molecule of the active substance remaining is effectively zero. Proposed mechanisms (water memory, nanoparticles) have not been validated. Clinical effects are consistent with placebo, natural disease course, and regression to the mean.',
    ['Direct physical risks are negligible (remedies are inert)', 'PRIMARY RISK: delay or substitution of effective evidence-based treatment', 'Financial cost with no therapeutic return', 'Nosodes used instead of vaccines pose serious public health risk'],
    ['No pharmacological interactions (remedies contain no active molecules)', 'Dangerous if used as replacement for indicated pharmaceuticals'],
    'Homeopathic remedies are made by diluting substances so many times that no molecules of the original ingredient remain in the final product. Multiple high-quality reviews have concluded that homeopathy does not work better than a placebo. While the remedies themselves are physically harmless (they are essentially water or sugar), the real danger is using them instead of proven treatments for serious conditions.',
  ),

  // ── Evidence Evaluation ─────────────────────────────────────────────────

  'evaluating-cam-claims': entry(
    'evaluating-cam-claims',
    'Evaluating CAM Claims',
    'Evaluación de Afirmaciones de MCA',
    'evidence-evaluation',
    'Framework for critically assessing complementary and alternative medicine (CAM) claims using scientific literacy, hierarchy of evidence, and recognition of common logical fallacies.',
    'N/A — this is a methodological framework',
    ['Patient education', 'Clinical decision-making', 'Health literacy improvement', 'Informed consent discussions'],
    'Applies the hierarchy of evidence (systematic reviews > RCTs > cohort studies > case reports > expert opinion > anecdote) and evaluates biological plausibility, study quality, consistency of findings, and magnitude of claimed effects.',
    ['Over-skepticism may dismiss emerging evidence', 'Over-credulity may accept weak evidence'],
    ['N/A — educational framework'],
    'When someone claims a treatment works, ask: What is the evidence? Look for studies published in peer-reviewed journals, not just testimonials. Be cautious of claims that sound too good to be true, treatments that claim to cure everything, and anyone who tells you to stop your prescribed medications. Your doctor can help you evaluate the evidence for any therapy you are considering.',
  ),

  'placebo-effect': entry(
    'placebo-effect',
    'Understanding the Placebo Effect',
    'Comprensión del Efecto Placebo',
    'evidence-evaluation',
    'The placebo effect is a measurable physiological response triggered by the expectation of benefit, therapeutic context, and patient-provider relationship — not by any specific active intervention. Understanding it is essential for evaluating all therapies.',
    'Strong — extensive neuroscience research documents real neurobiological mechanisms underlying placebo responses',
    ['Understanding CAM efficacy claims', 'Informed consent', 'Optimizing therapeutic relationships', 'Clinical trial interpretation'],
    'Expectation and conditioning activate endogenous opioid, dopamine, and endocannabinoid pathways. Neuroimaging shows placebo analgesia involves prefrontal cortex, anterior cingulate, and periaqueductal gray activation. The response varies by condition (strongest in pain, nausea, depression) and is modulated by therapeutic context.',
    ['Ethical concerns with deceptive placebo use', 'Risk of attributing all CAM benefits to placebo without adequate investigation'],
    ['N/A — conceptual framework'],
    'The placebo effect is real and measurable — it is not "all in your head" in a dismissive sense. When you expect a treatment to help, your brain releases its own pain-relieving and mood-boosting chemicals. This explains why many therapies, including some CAM treatments, make people feel better even when the specific treatment has no direct biological effect. Understanding this helps you make more informed decisions about your care.',
  ),

  'hierarchy-of-evidence': entry(
    'hierarchy-of-evidence',
    'Hierarchy of Evidence',
    'Jerarquía de la Evidencia',
    'evidence-evaluation',
    'A structured ranking system for evaluating the quality and reliability of clinical evidence, from systematic reviews and meta-analyses at the top to expert opinion and anecdotal reports at the bottom.',
    'N/A — this is a methodological framework foundational to evidence-based medicine',
    ['Evaluating any medical claim', 'Comparing conventional and integrative therapies', 'Patient education', 'Clinical guideline development'],
    'Ranks evidence by its ability to control for bias and confounding. Randomization eliminates selection bias, blinding eliminates observer and performance bias, and systematic reviews synthesize multiple studies to provide the most reliable estimate of effect.',
    ['Rigid application may dismiss valuable observational or mechanistic data', 'Quality within each level varies widely (a poorly done RCT may be less reliable than a well-conducted cohort study)'],
    ['N/A — educational framework'],
    'Not all medical evidence is equal. A single person\'s story about a treatment working is the weakest form of evidence because many factors could explain the improvement. Stronger evidence comes from well-designed studies where patients are randomly assigned to receive the real treatment or a comparison, and neither they nor their doctors know which group they are in. The strongest evidence comes from combining the results of many such studies.',
  ),

  // ── Safety ──────────────────────────────────────────────────────────────

  'supplement-regulation': entry(
    'supplement-regulation',
    'Dietary Supplement Regulation (DSHEA)',
    'Regulación de Suplementos Dietéticos (DSHEA)',
    'safety',
    'The Dietary Supplement Health and Education Act (1994) classifies supplements as foods rather than drugs, meaning they do not require pre-market proof of safety or efficacy. Manufacturers are responsible for safety, but FDA can only act after harm is demonstrated.',
    'N/A — regulatory framework',
    ['Understanding supplement quality risks', 'Informed purchasing decisions', 'Recognizing misleading claims', 'Patient counseling about supplements'],
    'Under DSHEA, supplements do not undergo FDA pre-market review for safety or efficacy. Structure/function claims are allowed without evidence review. Good Manufacturing Practice (GMP) regulations exist but enforcement is limited. Third-party certification (USP, NSF, ConsumerLab) provides independent quality verification.',
    ['Contamination with heavy metals, pesticides, or undeclared drugs', 'Inaccurate labeling (actual content may differ from label)', 'Adulteration with pharmaceutical compounds', 'No required adverse-event reporting system before 2007'],
    ['Supplements can interact with prescription medications', 'Patients often do not disclose supplement use to physicians', 'No regulatory requirement to test for drug interactions'],
    'In the US, dietary supplements are regulated more like food than like medicine. Companies do not have to prove supplements are safe or effective before selling them. The FDA can only pull a product after it causes harm. This means quality varies widely. To protect yourself, look for products with third-party testing seals (USP, NSF, or ConsumerLab) and always tell your doctor about every supplement you take.',
  ),

  'herb-drug-interactions': entry(
    'herb-drug-interactions',
    'Herb-Drug Interactions',
    'Interacciones Hierba-Medicamento',
    'safety',
    'Pharmacokinetic and pharmacodynamic interactions between herbal products and conventional medications. A critical patient-safety issue given that 30–40% of adults use supplements, and many do not disclose this to their physicians.',
    'Strong — well-documented interactions for common herbs including St. John\'s wort, ginkgo, garlic, ginseng, and kava',
    ['Any patient taking both herbal products and prescription medications', 'Pre-surgical assessment', 'Polypharmacy risk management', 'Patient counseling'],
    'Pharmacokinetic interactions: herbs may induce or inhibit CYP450 enzymes (especially CYP3A4, CYP2D6, CYP1A2) and drug transporters (P-glycoprotein), altering drug levels. Pharmacodynamic interactions: additive, synergistic, or antagonistic effects on the same physiological target (e.g., serotonergic herbs plus SSRIs; anticoagulant herbs plus warfarin).',
    ['Therapeutic failure of life-saving medications (e.g., organ-rejection drugs, antiretrovirals, oral contraceptives)', 'Excessive drug effect leading to toxicity', 'Serotonin syndrome', 'Increased bleeding risk'],
    ['St. John\'s wort + CYP3A4 substrates (most dangerous)', 'Ginkgo + anticoagulants', 'Garlic supplements + anticoagulants', 'Kava + hepatotoxic drugs', 'Valerian + CNS depressants', 'Ginseng + warfarin, insulin, MAOIs'],
    'Herbal products contain active chemicals that can change how your prescription medications work. Some herbs make medications less effective — for example, St. John\'s wort can cause birth control pills to fail. Others increase medication effects dangerously — like ginkgo increasing bleeding risk with blood thinners. Always bring a complete list of everything you take — including herbs, vitamins, and teas — to every doctor and pharmacist visit.',
  ),

  'recognizing-quackery': entry(
    'recognizing-quackery',
    'Red Flags for Health Fraud',
    'Señales de Alerta de Fraude en Salud',
    'safety',
    'Identifying deceptive or fraudulent health claims and products. Health fraud costs consumers billions annually and can lead to delayed treatment, worsened outcomes, and financial harm.',
    'N/A — patient safety framework',
    ['Consumer protection', 'Patient education', 'Health literacy', 'Identifying predatory wellness marketing'],
    'Fraudulent products exploit cognitive biases including appeal to nature, appeal to authority, anecdotal evidence bias, and confirmation bias. Marketing strategies include: claims of persecution by "the establishment," proprietary secret formulas, cure-all claims, testimonial-based evidence, and artificial urgency.',
    ['Delay of evidence-based treatment for serious conditions', 'Financial exploitation', 'Direct harm from contaminated or toxic products', 'Psychological harm from false hope', 'Erosion of trust in legitimate medicine'],
    ['N/A — educational framework'],
    'Watch out for these warning signs: a product claims to cure many unrelated diseases, uses only personal testimonials rather than scientific studies, says the medical establishment is trying to suppress it, uses terms like "miracle cure" or "breakthrough," requires buying expensive ongoing treatments, or asks you to stop your prescribed medications. If something sounds too good to be true, it probably is. Ask your doctor before trying any new treatment.',
  ),

  'safe-disclosure-framework': entry(
    'safe-disclosure-framework',
    'Discussing CAM with Your Doctor',
    'Hablar sobre MCA con su Médico',
    'safety',
    'A framework for open, non-judgmental communication between patients and providers about complementary and alternative medicine use. Studies show 30–70% of CAM users do not disclose use to their physicians, creating safety risks.',
    'Strong — evidence supports that structured communication improves disclosure rates and patient safety',
    ['Any patient using or considering CAM therapies', 'Medication reconciliation', 'Pre-surgical assessment', 'Shared decision-making'],
    'Non-judgmental inquiry increases disclosure rates. The ASK framework: Ask about all treatments being used, Share evidence-based information, Keep the door open for ongoing discussion. Provider bias (positive or negative) affects patient willingness to disclose.',
    ['Judgmental responses may reduce future disclosure', 'Provider unfamiliarity with CAM may lead to dismissive or inaccurate counseling'],
    ['Disclosure is essential for identifying herb-drug interactions', 'Complete medication lists improve safety'],
    'It is important to tell your doctor about every treatment you use, including herbs, supplements, acupuncture, or any other therapy. Many people worry their doctor will judge them, but most doctors want to help you make safe choices. Bring a written list of everything you take to appointments. If a practitioner of any kind tells you to keep their treatment secret from your doctor, consider that a major warning sign.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search integrative medicine entries by name, description, indications,
 * or patient explanation. Case-insensitive.
 */
export function searchIntegrativeMedicine(query: string): IntegrativeMedicineEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(INTEGRATIVE_MEDICINE_ENTRIES).filter((e) => {
    const searchable = [
      e.name,
      e.nameEs,
      e.description,
      e.patientExplanation,
      e.mechanism,
      e.evidenceLevel,
      ...e.indications,
      ...e.risks,
      ...e.interactions,
    ]
      .join(' ')
      .toLowerCase();
    return searchable.includes(lowerQuery);
  });
}

/**
 * Filter integrative medicine entries by category.
 */
export function filterByCategory(category: IntegrativeCategory): IntegrativeMedicineEntry[] {
  return Object.values(INTEGRATIVE_MEDICINE_ENTRIES).filter((e) => e.category === category);
}

/**
 * Get all available categories with their entry counts.
 */
export function getCategorySummary(): Record<IntegrativeCategory, number> {
  const summary = {} as Record<IntegrativeCategory, number>;
  for (const entry of Object.values(INTEGRATIVE_MEDICINE_ENTRIES)) {
    summary[entry.category] = (summary[entry.category] || 0) + 1;
  }
  return summary;
}

/**
 * Retrieve a single entry by its ID, or undefined if not found.
 */
export function getEntryById(id: string): IntegrativeMedicineEntry | undefined {
  return INTEGRATIVE_MEDICINE_ENTRIES[id];
}
