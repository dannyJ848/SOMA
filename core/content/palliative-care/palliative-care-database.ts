/**
 * Palliative Care Comprehensive Database
 *
 * Clinical reference database for palliative medicine education covering
 * symptom management, communication skills, ethical considerations,
 * end-of-life care, hospice criteria, and psychosocial support.
 *
 * For educational purposes only. Not a substitute for clinical judgment.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PalliativeCareDBCategory =
  | 'symptom-management'
  | 'communication'
  | 'ethics'
  | 'end-of-life'
  | 'psychosocial'
  | 'pediatric-palliative'
  | 'hospice'
  | 'pain-palliation'
  | 'goals-of-care';

export interface PalliativeCareEntry {
  id: string;
  name: string;
  category: PalliativeCareDBCategory;
  description: string;
  clinicalContext: string;
  approach: string[];
  management: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const palliativeCareDatabase: PalliativeCareEntry[] = [
  // ==========================================================================
  // SYMPTOM MANAGEMENT
  // ==========================================================================
  {
    id: 'pc-dyspnea',
    name: 'Dyspnea in Advanced Illness',
    category: 'symptom-management',
    description:
      'Subjective sensation of breathlessness common in advanced cardiopulmonary disease, cancer, and end-stage organ failure. Prevalence reaches 70% in terminal illness.',
    clinicalContext:
      'Dyspnea is one of the most distressing symptoms at end of life. Severity is best assessed by patient self-report; objective measures (SpO2, RR) correlate poorly with perceived breathlessness.',
    approach: [
      'Assess reversible causes: pleural effusion, bronchospasm, anemia, PE',
      'Use a validated dyspnea scale (Modified Borg, NRS 0-10)',
      'Evaluate psychosocial contributors (anxiety, fear of suffocation)',
      'Determine goals of care before invasive workup',
    ],
    management: [
      'Opioids: morphine 2-5 mg PO q4h (opioid-naive) — first-line pharmacologic therapy',
      'Fan directed at face — evidence-based non-pharmacologic intervention',
      'Oxygen only if hypoxemic (SpO2 < 90%); no benefit if normoxic',
      'Benzodiazepines for refractory dyspnea with anxiety component',
      'Positioning: upright or leaning forward',
      'Breathing techniques, relaxation training',
    ],
    keyPearls: [
      'Opioids reduce the sensation of breathlessness without worsening respiratory function at appropriate doses',
      'A bedside fan can be as effective as oxygen in non-hypoxic patients',
      'Treat the symptom even when the underlying disease is irreversible',
    ],
    references: [
      'Lancet Respir Med 2017;5(5):432-442 — Opioids for breathlessness',
      'J Pain Symptom Manage 2010;39(4):680-690 — Fan therapy',
      'Oxford Textbook of Palliative Medicine, 6th ed, Ch 11',
    ],
  },
  {
    id: 'pc-nausea-vomiting',
    name: 'Nausea and Vomiting in Palliative Care',
    category: 'symptom-management',
    description:
      'Nausea affects up to 70% of patients with advanced cancer. A mechanistic approach identifies the dominant pathway (chemoreceptor trigger zone, vestibular, GI, cortical) to guide targeted antiemetic therapy.',
    clinicalContext:
      'Chronic nausea in advanced illness is often multifactorial. Bowel obstruction, opioid use, metabolic derangements, and raised intracranial pressure should be considered.',
    approach: [
      'Identify likely pathophysiologic mechanism',
      'Review medication list for emetogenic drugs',
      'Assess for constipation and bowel obstruction',
      'Check electrolytes, calcium, renal function',
      'Consider CNS causes if new-onset with headache or neurologic changes',
    ],
    management: [
      'Chemoreceptor trigger zone: haloperidol 0.5-2 mg PO/SC q8h, ondansetron 4-8 mg q8h',
      'GI dysmotility: metoclopramide 10 mg PO/SC q6h (avoid in complete obstruction)',
      'Raised ICP: dexamethasone 4-8 mg daily',
      'Vestibular: meclizine 25 mg q8h, scopolamine patch',
      'Cortical/anticipatory: lorazepam 0.5-1 mg, olanzapine 2.5-5 mg',
      'Malignant bowel obstruction: octreotide 100-300 mcg SC q8h, dexamethasone, venting gastrostomy',
    ],
    keyPearls: [
      'Mechanistic approach to antiemetic selection outperforms empiric therapy',
      'Olanzapine is effective as a broad-spectrum antiemetic in palliative care',
      'Always address constipation as a contributing factor',
    ],
    references: [
      'J Palliat Med 2017;20(3):266-278 — Nausea mechanisms in palliative care',
      'Cochrane Database Syst Rev 2015 — Antiemetics in advanced cancer',
      'NCCN Antiemesis Guidelines v2.2024',
    ],
  },
  {
    id: 'pc-delirium',
    name: 'Delirium in Palliative Care',
    category: 'symptom-management',
    description:
      'Acute disturbance in attention and cognition occurring in up to 88% of patients in the last days of life. May be hyperactive, hypoactive, or mixed. Terminal delirium is often irreversible.',
    clinicalContext:
      'Delirium is the most common neuropsychiatric complication in advanced illness. Hypoactive delirium is frequently missed. Reversible causes exist in ~50% of episodes outside the last days of life.',
    approach: [
      'Screen using Confusion Assessment Method (CAM)',
      'Distinguish delirium from dementia, depression, psychosis',
      'Identify reversible causes: medications (opioids, anticholinergics, benzos), infection, dehydration, urinary retention, constipation, hypercalcemia',
      'Assess distress to patient and family',
      'Clarify goals: is this potentially reversible or terminal delirium?',
    ],
    management: [
      'Non-pharmacologic: reorientation, calm environment, familiar objects, consistent caregivers, sleep hygiene',
      'Opioid rotation if opioid-induced (reduce dose 25-50%, switch agent)',
      'Haloperidol 0.5-2 mg PO/SC/IV q4-6h prn for agitation (first-line)',
      'Avoid benzodiazepines unless alcohol withdrawal or seizures',
      'Terminal agitation: consider midazolam infusion or palliative sedation if refractory',
      'Hydration may help in dehydration-related delirium when consistent with goals',
    ],
    keyPearls: [
      'Hypoactive delirium is underrecognized and undertreated',
      'Antipsychotics treat agitation but do not resolve the underlying delirium',
      'Benzodiazepines worsen delirium (except in specific indications)',
      'Family education about terminal delirium reduces distress',
    ],
    references: [
      'Lancet Neurol 2020;19(9):767-779 — Delirium in palliative care',
      'J Pain Symptom Manage 2014;48(2):231-248 — CAM validation',
      'Palliat Med 2012;26(7):913-927 — Management of terminal restlessness',
    ],
  },
  {
    id: 'pc-fatigue',
    name: 'Cancer-Related Fatigue',
    category: 'symptom-management',
    description:
      'Persistent, subjective sense of physical, emotional, or cognitive exhaustion related to cancer or its treatment, disproportionate to recent activity. The most prevalent symptom in advanced cancer (60-90%).',
    clinicalContext:
      'Fatigue is distinct from normal tiredness, is not relieved by rest, and profoundly impacts quality of life. Often multifactorial with contributions from anemia, deconditioning, depression, sleep disruption, and cachexia.',
    approach: [
      'Screen with NRS 0-10 or Brief Fatigue Inventory',
      'Evaluate treatable contributors: anemia, hypothyroidism, hypogonadism, depression, sleep disorders, pain, medications (opioids, beta-blockers)',
      'Assess functional impact and patient priorities',
      'Rule out adrenal insufficiency if recent steroid taper',
    ],
    management: [
      'Exercise: moderate aerobic + resistance training is the most effective intervention',
      'Psychosocial: cognitive behavioral therapy, energy conservation counseling',
      'Treat anemia if Hgb < 8 (transfusion vs. ESA per goals)',
      'Methylphenidate 5-10 mg PO qAM and noon for moderate-severe fatigue',
      'Dexamethasone 4 mg daily short-term for refractory fatigue',
      'Optimize sleep hygiene, treat insomnia',
    ],
    keyPearls: [
      'Exercise is first-line despite seeming counterintuitive to patients',
      'Methylphenidate has the strongest pharmacologic evidence',
      'Fatigue is the symptom most frequently undertreated in cancer care',
    ],
    references: [
      'NCCN Cancer-Related Fatigue Guidelines v1.2024',
      'J Clin Oncol 2014;32(17):1840-1850 — Exercise meta-analysis',
      'Ann Oncol 2020;31(6):713-723 — Pharmacologic management',
    ],
  },
  {
    id: 'pc-constipation',
    name: 'Constipation in Palliative Care',
    category: 'symptom-management',
    description:
      'Reduced frequency or difficulty passing stool, occurring in >90% of patients on opioids. Opioid-induced constipation (OIC) does not develop tolerance and requires prophylaxis.',
    clinicalContext:
      'Unmanaged constipation leads to nausea, anorexia, delirium, overflow diarrhea, and pseudo-obstruction. Every opioid prescription should be accompanied by a bowel regimen.',
    approach: [
      'Assess stool frequency, consistency (Bristol Stool Scale), straining, completeness',
      'Abdominal exam for distension, bowel sounds, masses',
      'Digital rectal exam if impaction suspected',
      'Abdominal X-ray for fecal loading if clinical assessment unclear',
      'Review medications contributing to constipation',
    ],
    management: [
      'Prophylaxis with all opioids: stimulant laxative (senna 2 tabs BID) +/- osmotic (polyethylene glycol 17 g daily)',
      'Escalate: bisacodyl suppository, lactulose, magnesium citrate',
      'Opioid-induced: methylnaltrexone 8-12 mg SC if conventional laxatives fail',
      'Naloxegol 25 mg PO daily as alternative PAMORA',
      'Impaction: manual disimpaction, then aggressive oral regimen',
      'Non-pharmacologic: mobility, hydration, fiber (only if adequate fluid intake)',
    ],
    keyPearls: [
      'Always start a bowel regimen when initiating opioids — tolerance to constipation does NOT develop',
      'Bulk-forming agents (psyllium) may worsen constipation in immobile patients with poor fluid intake',
      'PAMORAs (peripherally acting mu-opioid receptor antagonists) do not reverse analgesia',
    ],
    references: [
      'J Pain Symptom Manage 2019;58(1):114-132 — OIC guidelines',
      'Cochrane Database Syst Rev 2018 — Laxatives for opioid-induced constipation',
      'Am J Gastroenterol 2021;116(1):94-119',
    ],
  },
  {
    id: 'pc-anorexia-cachexia',
    name: 'Anorexia-Cachexia Syndrome',
    category: 'symptom-management',
    description:
      'Multifactorial syndrome of involuntary weight loss, muscle wasting, and anorexia driven by systemic inflammation and metabolic alterations. Affects 50-80% of advanced cancer patients.',
    clinicalContext:
      'Cachexia is not simple starvation and is not fully reversible with nutritional supplementation alone. It significantly impacts quality of life, treatment tolerance, and prognosis.',
    approach: [
      'Distinguish cachexia from simple malnutrition or depression-related anorexia',
      'Assess for reversible contributors: mucositis, dysphagia, constipation, nausea, depression',
      'Evaluate functional status and prognosis to guide intervention intensity',
      'Discuss realistic expectations with patient and family',
    ],
    management: [
      'Appetite stimulants: megestrol acetate 400-800 mg daily, dexamethasone 2-4 mg daily',
      'Mirtazapine 15 mg qHS if co-existing depression/insomnia',
      'Small frequent meals, calorie-dense foods, dietary counseling',
      'Dronabinol 2.5 mg BID for appetite stimulation',
      'Artificial nutrition (TPN/tube feeding) rarely beneficial in advanced cancer; discuss goals',
      'Exercise and physical therapy to preserve function',
    ],
    keyPearls: [
      'Cachexia cannot be reversed by calories alone — it is an inflammatory metabolic syndrome',
      'Forcing food can worsen quality of life and cause distress to patient and family',
      'Education about the biology of cachexia reduces family guilt around feeding',
    ],
    references: [
      'Lancet Oncol 2011;12(5):489-495 — Cachexia consensus definition',
      'J Cachexia Sarcopenia Muscle 2019;10(1):22-44',
      'Palliat Med 2017;31(6):491-508 — Nutrition in advanced cancer',
    ],
  },
  {
    id: 'pc-secretions',
    name: 'Death Rattle (Terminal Secretions)',
    category: 'symptom-management',
    description:
      'Noisy breathing caused by pooled pharyngeal secretions in the imminently dying patient who cannot clear their airway. Present in 25-92% of dying patients.',
    clinicalContext:
      'Death rattle is a sign of imminent death (usually within 24-48 hours). The sound is generally more distressing to family and staff than to the patient, who is usually unconscious.',
    approach: [
      'Confirm patient is in the dying phase',
      'Assess level of consciousness — patient is rarely distressed',
      'Reposition to lateral or semi-prone to facilitate drainage',
      'Educate family that this is a natural part of dying, not drowning or choking',
    ],
    management: [
      'Glycopyrrolate 0.2-0.4 mg SC/IV q4-6h (does not cross BBB — preferred)',
      'Hyoscine butylbromide 20 mg SC q4-6h',
      'Atropine 1% ophthalmic drops 1-2 drops SL q4h',
      'Gentle oropharyngeal suctioning only if visible secretions (avoid deep suctioning)',
      'Reduce or discontinue IV fluids if contributing to secretion burden',
    ],
    keyPearls: [
      'Anticholinergics prevent new secretions but do not clear existing ones — early initiation is more effective',
      'Family education is the most important intervention',
      'Deep suctioning is uncomfortable and generally ineffective; avoid if possible',
    ],
    references: [
      'J Pain Symptom Manage 2013;45(1):14-26 — Death rattle management',
      'Palliat Med 2009;23(3):271-277 — Anticholinergics at end of life',
      'BMJ Support Palliat Care 2021;11(4):381-388',
    ],
  },
  {
    id: 'pc-pruritus',
    name: 'Pruritus in Advanced Illness',
    category: 'symptom-management',
    description:
      'Distressing itch associated with cholestasis, uremia, opioid use, or malignant skin infiltration. Can severely impair quality of life and sleep.',
    clinicalContext:
      'Mechanism-based approach is essential. Cholestatic pruritus responds to different agents than uremic or opioid-induced pruritus.',
    approach: [
      'Identify underlying cause: cholestasis, renal failure, opioids, dermatologic, paraneoplastic',
      'Review medication list for pruritogenic drugs',
      'Assess severity and impact on sleep and function',
      'Examine skin for primary dermatologic conditions',
    ],
    management: [
      'General: emollients, cool environment, short fingernails, cotton clothing',
      'Cholestatic: cholestyramine 4 g BID-QID, rifampin 150-300 mg BID, naltrexone',
      'Uremic: gabapentin 100-300 mg after dialysis, UVB phototherapy',
      'Opioid-induced: opioid rotation, nalbuphine, ondansetron 4-8 mg IV/PO',
      'Paraneoplastic: paroxetine 20 mg daily, mirtazapine 15 mg qHS',
      'Topical: menthol cream, capsaicin, topical corticosteroids for inflammatory causes',
    ],
    keyPearls: [
      'Antihistamines are often ineffective for non-histamine-mediated pruritus',
      'Gabapentin is first-line for uremic pruritus',
      'Opioid rotation is the most effective strategy for opioid-induced pruritus',
    ],
    references: [
      'J Am Acad Dermatol 2020;83(5):1311-1321',
      'Palliat Med 2016;30(6):525-535 — Pruritus in palliative care',
      'Am J Kidney Dis 2019;74(3):399-410 — Uremic pruritus',
    ],
  },

  // ==========================================================================
  // COMMUNICATION
  // ==========================================================================
  {
    id: 'pc-breaking-bad-news',
    name: 'Breaking Bad News (SPIKES Protocol)',
    category: 'communication',
    description:
      'Structured approach to delivering serious, life-changing medical information using the SPIKES framework: Setting, Perception, Invitation, Knowledge, Emotions, Strategy/Summary.',
    clinicalContext:
      'Breaking bad news is one of the most challenging communication tasks in medicine. Poor delivery causes lasting psychological harm; skilled delivery improves patient coping, satisfaction, and treatment adherence.',
    approach: [
      'S — Setting: private room, sit down, minimize interruptions, include support persons',
      'P — Perception: "What is your understanding of your illness so far?"',
      'I — Invitation: "How much detail would you like me to share?"',
      'K — Knowledge: use a warning shot ("I am afraid I have some difficult news"), then deliver information in plain language',
      'E — Emotions: acknowledge and validate emotional responses with empathic silence',
      'S — Strategy/Summary: outline next steps, arrange follow-up, ensure support',
    ],
    management: [
      'Practice empathic silence — resist the urge to fill emotional space with information',
      'Use "I wish" statements: "I wish I had better news"',
      'Avoid euphemisms that create ambiguity ("passed away" vs clear language)',
      'Check understanding: "Can you tell me in your own words what we discussed?"',
      'Document the conversation in the medical record',
      'Arrange follow-up within 24-48 hours',
    ],
    keyPearls: [
      'Patients remember HOW they received bad news for the rest of their lives',
      'A warning shot ("I am afraid...") prepares the patient and reduces shock',
      'After delivering the news, STOP talking — give the patient time to process',
      'Never say "there is nothing more we can do" — there is always something',
    ],
    references: [
      'Oncologist 2000;5(4):302-311 — Original SPIKES protocol',
      'JAMA 2018;320(18):1922 — Communication skills in serious illness',
      'BMJ 2020;368:m1220 — Breaking bad news during COVID-19',
    ],
  },
  {
    id: 'pc-goals-of-care-conversation',
    name: 'Goals of Care Conversations',
    category: 'goals-of-care',
    description:
      'Structured discussions to elicit patient values, explore understanding of illness, and align medical care with patient priorities. Central to patient-centered palliative care.',
    clinicalContext:
      'Goals of care conversations should occur at diagnosis of serious illness, significant clinical change, or when treatment decisions involve trade-offs. They are iterative, not one-time events.',
    approach: [
      'Assess understanding: "What do you understand about where things stand with your illness?"',
      'Explore values: "What matters most to you?" "What are you hoping for?"',
      'Share prognosis honestly and compassionately when patient is ready',
      'Explore fears: "What are you most worried about?"',
      'Discuss trade-offs of treatment options in terms of patient goals',
      'Make a recommendation: "Based on what you have told me, I would suggest..."',
    ],
    management: [
      'Use the Serious Illness Conversation Guide (Ariadne Labs)',
      'Document patient-stated goals, values, and preferences',
      'Translate goals into specific medical orders (code status, ICU, intubation, dialysis)',
      'Communicate goals to all members of the care team',
      'Revisit conversations as clinical status changes',
      'Engage surrogate decision-makers when patient lacks capacity',
    ],
    keyPearls: [
      'Ask before telling — understanding the patient perspective is more important than information delivery',
      'Most patients want to know their prognosis but need to be asked first',
      '"What are you hoping for?" is more productive than "Do you want CPR?"',
      'Silence after a difficult statement is therapeutic, not awkward',
    ],
    references: [
      'N Engl J Med 2020;382(7):e13 — Serious Illness Conversation Guide',
      'JAMA Intern Med 2013;173(20):1887-1894 — Goals of care documentation',
      'Ann Intern Med 2019;171(10):S99-S105 — Communication in serious illness',
    ],
  },
  {
    id: 'pc-prognostic-disclosure',
    name: 'Prognostic Disclosure',
    category: 'communication',
    description:
      'Communicating prognosis to patients with serious illness in a way that is honest, compassionate, and tailored to the individual patient preferences for information.',
    clinicalContext:
      'Prognostic awareness facilitates informed decision-making and advance care planning. Physicians tend to overestimate survival; communication of prognosis is often delayed or avoided.',
    approach: [
      'Ask permission: "Would it be helpful to talk about what to expect?"',
      'Assess prognostic awareness: "What is your sense of how things are going?"',
      'Use ranges rather than exact numbers: "days to weeks" vs "2 weeks"',
      'Frame with best/worst/most likely scenarios',
      'Acknowledge uncertainty honestly',
    ],
    management: [
      'Use evidence-based prognostic tools: PPI, PaP Score, Surprise Question',
      'The Surprise Question: "Would I be surprised if this patient died in the next year?"',
      'Communicate in patient-centered language, avoid statistics when not helpful',
      'Document prognostic discussion and patient response',
      'Reassess prognosis regularly and update conversations',
    ],
    keyPearls: [
      'The Surprise Question has ~70% sensitivity for identifying patients with poor prognosis',
      'Providing prognosis does not take away hope — it shifts hope to achievable goals',
      'Physicians overestimate survival by a factor of 3-5x on average',
      'Cultural humility: some patients and families prefer not to discuss prognosis directly',
    ],
    references: [
      'BMJ 2003;327(7408):195-198 — Prognostic disclosure',
      'JAMA 2016;315(2):164-174 — Surprise Question validation',
      'J Clin Oncol 2019;37(29):2627-2634 — Prognostic communication',
    ],
  },
  {
    id: 'pc-family-meetings',
    name: 'Conducting Family Meetings',
    category: 'communication',
    description:
      'Structured interdisciplinary meetings with patient/family to discuss diagnosis, prognosis, goals, and care plan. Essential when there is conflict, complexity, or transition of care.',
    clinicalContext:
      'Family meetings reduce ICU length of stay, improve family satisfaction, and decrease moral distress among clinicians. They are indicated for complex care decisions, family disagreement, or code status discussions.',
    approach: [
      'Pre-meeting: align the team on medical facts, identify goals, assign roles',
      'Introductions and establish ground rules',
      'Assess family understanding and concerns',
      'Provide medical update with honest, jargon-free language',
      'Explore patient values (via family if patient lacks capacity)',
      'Develop consensus plan, summarize, and document',
    ],
    management: [
      'Invite key family members and all relevant disciplines (MD, RN, SW, chaplain)',
      'Allow at least 30 minutes; do not rush',
      'Use reflective listening and validate emotions',
      'Address conflict with curiosity rather than defensiveness',
      'Summarize decisions and communicate to care team',
      'Schedule follow-up meeting if decisions cannot be made',
    ],
    keyPearls: [
      'The most important part of a family meeting is listening, not talking',
      'Pre-meeting team alignment prevents conflicting messages at the bedside',
      'Name the emotion: "I can see this is overwhelming" builds trust',
      'When families say "do everything," explore what that means to them',
    ],
    references: [
      'Crit Care Med 2007;35(6):1530-1534 — Family meetings in ICU',
      'Chest 2015;148(4):998-1004 — Communication in critical illness',
      'J Palliat Med 2018;21(9):1313-1319 — Family meeting frameworks',
    ],
  },

  // ==========================================================================
  // ETHICS
  // ==========================================================================
  {
    id: 'pc-withdrawal-of-care',
    name: 'Withdrawal of Life-Sustaining Treatment',
    category: 'ethics',
    description:
      'Ethically and legally supported decision to discontinue treatments (ventilator, vasopressors, dialysis, artificial nutrition) that no longer serve patient goals. Distinct from euthanasia.',
    clinicalContext:
      'Withdrawal of care is guided by the principles of autonomy, beneficence, non-maleficence, and justice. Legally and ethically, there is no distinction between withholding and withdrawing treatment.',
    approach: [
      'Confirm decision-making capacity or identify surrogate decision-maker',
      'Ensure patient/family understand diagnosis and prognosis',
      'Explore goals and values that inform the decision',
      'Distinguish patient wishes from family wishes',
      'Consult ethics if conflict or moral distress',
      'Document informed consent/assent for withdrawal',
    ],
    management: [
      'Pre-medicate for anticipated distress: morphine + midazolam available at bedside',
      'Ventilator withdrawal: rapid terminal wean or immediate extubation per institutional protocol',
      'Discontinue vasopressors — usually immediate cessation',
      'Continue all comfort medications; may need to escalate',
      'Remove monitors to shift focus to patient comfort',
      'Ensure family has time at bedside; offer chaplain/spiritual support',
    ],
    keyPearls: [
      'Withholding and withdrawing treatment are ethically and legally equivalent',
      'Withdrawal of care is NOT euthanasia — intent is to remove burdensome treatment, not to cause death',
      'The principle of double effect supports opioid/benzodiazepine use if intent is comfort',
      'Families need explicit permission that choosing comfort is an act of love, not giving up',
    ],
    references: [
      'N Engl J Med 2009;361(14):1393-1395 — Withdrawing treatment at end of life',
      'Crit Care Med 2014;42(5):1263-1271 — Ventilator withdrawal protocols',
      'Hastings Cent Rep 2013;43(1):S52-S59 — Ethics of withdrawal',
    ],
  },
  {
    id: 'pc-medical-futility',
    name: 'Medical Futility',
    category: 'ethics',
    description:
      'Concept that a treatment cannot achieve its intended physiologic or patient-centered goal. Quantitative futility (< 1% chance of success) and qualitative futility (outcome not valued by patient) are distinguished.',
    clinicalContext:
      'Futility disputes arise when clinicians believe treatment is non-beneficial but family requests continuation. Unilateral physician decision-making is ethically controversial; process-based approaches are preferred.',
    approach: [
      'Distinguish physiologic futility (CPR cannot restore circulation) from value-laden judgments',
      'Clarify what outcome is being called futile and for whom',
      'Engage patient/family in understanding medical realities',
      'Seek institutional ethics committee input',
      'Follow state-specific futility statutes if applicable (e.g., Texas Advance Directives Act)',
    ],
    management: [
      'Multidisciplinary team meeting to establish consensus',
      'Transparent communication with family about medical reality',
      'Ethics consultation when disagreement persists',
      'Time-limited trial of therapy with clear endpoints',
      'Facilitate transfer to another provider/institution if requested',
      'Document medical reasoning and family discussions thoroughly',
    ],
    keyPearls: [
      'True physiologic futility is rare; most "futility" disputes involve value disagreements',
      'A time-limited trial with predefined endpoints can bridge disagreements',
      'The term "futile" should be used cautiously — "non-beneficial" may be more accurate',
      'Ethics consultation reduces moral distress and improves outcomes in these situations',
    ],
    references: [
      'Chest 2015;148(4):1107-1113 — Futility in critical care',
      'JAMA 2010;304(14):1604-1605 — Process-based futility approach',
      'Ann Intern Med 2019;170(3):ITC17-ITC32 — Ethics in ICU',
    ],
  },
  {
    id: 'pc-double-effect',
    name: 'Principle of Double Effect',
    category: 'ethics',
    description:
      'Ethical principle holding that an action with both a good effect (symptom relief) and a bad effect (potential hastening of death) is permissible if the intent is the good effect and the bad effect is not the means to the good effect.',
    clinicalContext:
      'Commonly invoked when escalating opioids or sedatives in dying patients. Evidence shows that appropriate symptom management does not actually hasten death in most cases.',
    approach: [
      'Confirm the action has a legitimate medical purpose (pain/symptom relief)',
      'The good effect (comfort) must be intended; the bad effect (death) must be foreseen but not intended',
      'The bad effect must not be the means to achieving the good effect',
      'The good effect must be proportionate to the risk of the bad effect',
    ],
    management: [
      'Titrate opioids to symptom relief using established protocols',
      'Document clinical rationale and symptom assessment scores',
      'Reassess and escalate based on objective symptom burden',
      'Educate staff and families about this ethical principle',
      'Distinguish clearly from euthanasia and physician-assisted death',
    ],
    keyPearls: [
      'Empirical data shows appropriate opioid use does NOT hasten death',
      'Fear of double effect should never lead to undertreatment of suffering',
      'Intent matters ethically: relieving pain vs. intending death',
      'All major medical ethics organizations endorse this principle',
    ],
    references: [
      'J Pain Symptom Manage 2011;41(3):535-545 — Opioids do not hasten death',
      'Arch Intern Med 2003;163(3):341-344 — Double effect in practice',
      'Palliat Med 2014;28(7):909-917',
    ],
  },
  {
    id: 'pc-palliative-sedation',
    name: 'Palliative Sedation',
    category: 'ethics',
    description:
      'Intentional lowering of awareness to relieve refractory suffering at end of life. Reserved for patients with imminently terminal conditions where all other symptom management has failed.',
    clinicalContext:
      'Palliative sedation is a last resort for refractory symptoms (pain, dyspnea, delirium, existential distress) in imminently dying patients. It is ethically distinct from euthanasia because intent is relief of suffering, not death.',
    approach: [
      'Confirm symptoms are truly refractory (specialist palliative care consultation)',
      'Ensure patient/surrogate informed consent',
      'Determine proportionality: mild, intermediate, or deep sedation',
      'Assess prognosis — typically reserved for hours to days expected survival',
      'Ethics consultation recommended',
    ],
    management: [
      'Midazolam 0.5-1 mg/hr IV/SC infusion titrated to comfort (most common agent)',
      'Propofol 10-70 mcg/kg/min if available and needed for refractory symptoms',
      'Phenobarbital 1-3 mg/kg/day as alternative',
      'Continue symptom management medications (opioids for pain/dyspnea)',
      'Monitor comfort (RASS, facial expression) rather than vital signs',
      'Discuss with family that goal is comfort, not hastening death',
    ],
    keyPearls: [
      'Palliative sedation is NOT euthanasia — intent is symptom relief, not death',
      'Existential suffering alone as an indication remains ethically controversial',
      'Proportional sedation (lightest level to relieve suffering) is the ethical standard',
      'Evidence shows palliative sedation does not shorten survival compared to matched controls',
    ],
    references: [
      'J Palliat Med 2014;17(5):601-611 — Palliative sedation framework',
      'Lancet Oncol 2012;13(2):e58-e68 — European guidelines',
      'Ann Oncol 2022;33(8):801-810 — Survival impact analysis',
    ],
  },

  // ==========================================================================
  // END-OF-LIFE
  // ==========================================================================
  {
    id: 'pc-actively-dying',
    name: 'Recognizing the Actively Dying Patient',
    category: 'end-of-life',
    description:
      'Clinical recognition of the final hours to days of life, characterized by progressive functional decline, decreased oral intake, altered consciousness, and changes in respiratory pattern.',
    clinicalContext:
      'Recognizing dying allows appropriate transition to comfort-focused care, avoidance of unnecessary interventions, and preparation of family. Failure to recognize dying leads to inappropriate resuscitation and ICU admissions.',
    approach: [
      'Assess for signs: progressive drowsiness, bed-bound status, minimal oral intake, inability to take medications',
      'Breathing changes: Cheyne-Stokes, agonal breathing, apneic periods',
      'Circulatory: mottling (starts in knees/feet), cool extremities, weak pulse',
      'Neurologic: decreased consciousness, terminal restlessness, loss of reflexes',
      'Palliative Performance Scale (PPS) ≤20% suggests hours to days',
    ],
    management: [
      'Transition to comfort-focused care plan',
      'Discontinue non-essential medications, labs, vitals, monitors',
      'Convert essential medications to sublingual, SC, or rectal routes',
      'Prepare a comfort medication kit: morphine, haloperidol, glycopyrrolate, lorazepam, acetaminophen suppository',
      'Notify family and offer presence at bedside',
      'Address spiritual and cultural needs',
    ],
    keyPearls: [
      'The Palliative Performance Scale and RASS/consciousness level are the best bedside prognostic indicators',
      'Mottling of the knees is a sign that death is typically within 24-48 hours',
      'Decreased urine output often precedes death by 24-48 hours',
      'Document a clear plan for anticipated symptoms so nursing can act promptly',
    ],
    references: [
      'J Palliat Med 2017;20(12):1361-1368 — Signs of imminent death',
      'BMJ Support Palliat Care 2018;8(1):74-80 — PPS as predictor',
      'Lancet Oncol 2016;17(4):515-525 — Clinical signs of approaching death',
    ],
  },
  {
    id: 'pc-comfort-care-orders',
    name: 'Comfort Care Order Sets',
    category: 'end-of-life',
    description:
      'Standardized order sets for symptom management in actively dying patients, ensuring rapid access to PRN medications for pain, dyspnea, agitation, secretions, nausea, and fever.',
    clinicalContext:
      'Comfort care orders shift the focus from disease treatment to symptom relief. They should be anticipatory, allowing nurses to administer medications promptly without waiting for physician re-orders.',
    approach: [
      'Review and discontinue disease-directed therapies per goals',
      'Assess current symptoms and anticipate likely symptoms',
      'Select appropriate route (SL, SC, PR) if unable to swallow',
      'Ensure PRN medications are available at bedside or in automated dispensing',
      'Communicate plan to nursing, family, and covering physicians',
    ],
    management: [
      'Pain/dyspnea: morphine 2-4 mg SL/SC q1-2h PRN (opioid-naive) or 25-50% dose increase if on prior opioids',
      'Agitation/restlessness: haloperidol 1-2 mg SL/SC q4h PRN, midazolam 1-2 mg SC q2h PRN',
      'Secretions: glycopyrrolate 0.2 mg SC q4h PRN or atropine 1% drops 2 SL q4h',
      'Nausea: ondansetron 4 mg SL q8h or haloperidol 0.5-1 mg SC q6h',
      'Fever: acetaminophen 650 mg PR q4h or cooling measures',
      'Mouth care: oral swabs, lip moisturizer, artificial saliva q2h',
    ],
    keyPearls: [
      'Anticipatory prescribing prevents crisis management at 3 AM',
      'Sublingual and subcutaneous routes are preferred when swallowing fails',
      'Concentrate solutions (morphine 20 mg/mL) allow small-volume SL dosing',
      'A well-written comfort care order set is one of the most impactful palliative interventions',
    ],
    references: [
      'J Palliat Med 2015;18(5):457-463 — Standardized comfort care orders',
      'Am J Hosp Palliat Med 2019;36(8):714-720',
      'JAMA 2019;322(16):1607 — End-of-life symptom management',
    ],
  },
  {
    id: 'pc-pronouncement-of-death',
    name: 'Pronouncement of Death',
    category: 'end-of-life',
    description:
      'Medical examination to confirm and document death, followed by notification of family and completion of legal paperwork. A core clinical skill rarely taught formally.',
    clinicalContext:
      'Pronouncement should be performed with dignity and compassion. Components include confirming identity, assessing for signs of death, documenting the examination, and notifying the family.',
    approach: [
      'Confirm patient identity',
      'Assess: no spontaneous respirations, no heart sounds, no carotid pulse (observe/auscultate for 1-2 minutes)',
      'Fixed dilated pupils, no corneal reflex',
      'Document time of death, examination findings, and attending physician notification',
      'Notify family with compassion',
    ],
    management: [
      'Express condolences to family in person when possible',
      'Allow family time with the deceased',
      'Offer chaplain, social work, and bereavement services',
      'Complete death certificate (cause of death, manner of death)',
      'Notify organ/tissue donation organization per protocol',
      'Address autopsy request if indicated',
    ],
    keyPearls: [
      'There is no minimum observation time legally required, but 1-2 minutes of auscultation is standard',
      'Time of death is the time the physician examines the patient, not when the monitor alarmed',
      'This is a profoundly important moment for families — treat it with gravity and compassion',
      'Saying "I am sorry for your loss" is always appropriate',
    ],
    references: [
      'JAMA 2018;319(12):1271 — How to pronounce death',
      'Acad Med 2018;93(6):912-916 — Teaching pronouncement',
      'J Palliat Med 2020;23(4):567-569',
    ],
  },
  {
    id: 'pc-last-hours',
    name: 'Care in the Last Hours of Life',
    category: 'end-of-life',
    description:
      'Holistic management of the final hours including symptom control, family support, spiritual care, and environmental modifications to ensure a peaceful death.',
    clinicalContext:
      'The last hours of life are a critical time for patient comfort and family experience. Quality of dying significantly impacts bereavement outcomes for families.',
    approach: [
      'Recognize the transition to active dying',
      'Communicate clearly with family about what to expect',
      'Simplify the care plan — comfort medications only',
      'Create a peaceful environment: dim lights, minimize interruptions, allow music if desired',
      'Ensure continuous nursing presence or family education on giving PRN medications',
    ],
    management: [
      'Continue regular symptom medications; convert to non-oral routes',
      'Mouth care every 2 hours — most important comfort measure',
      'Reposition every 2-4 hours for comfort (avoid pressure injury focus)',
      'Minimize blood draws, vital signs, and unnecessary interventions',
      'Allow unlimited visiting hours',
      'Provide tissues, water, and a private space for family',
    ],
    keyPearls: [
      'Hearing is believed to be the last sense to fade — encourage families to keep talking',
      'Mouth care is the single most important comfort intervention in the actively dying',
      'Stop turning for pressure injury prevention if it causes distress',
      'A good death is one aligned with the patient values — there is no single right way',
    ],
    references: [
      'AAHPM Fast Facts #003 — The Dying Patient',
      'N Engl J Med 2010;362(1):e1 — Last hours of living (video)',
      'Palliat Med 2020;34(9):1198-1211 — Quality of dying',
    ],
  },

  // ==========================================================================
  // HOSPICE
  // ==========================================================================
  {
    id: 'pc-hospice-eligibility',
    name: 'Hospice Eligibility Criteria',
    category: 'hospice',
    description:
      'Medicare hospice benefit requires physician certification of terminal prognosis (≤6 months if disease follows expected course) and patient election of comfort-focused care over curative treatment.',
    clinicalContext:
      'Hospice is underutilized; median length of stay is only 18 days despite 6-month eligibility. Late referrals deprive patients and families of the full benefit of hospice services.',
    approach: [
      'Assess prognosis using disease-specific criteria and clinical judgment',
      'General decline indicators: PPS ≤50%, weight loss >10%, recurrent infections, declining albumin',
      'Disease-specific criteria exist for cancer, heart failure, COPD, dementia, renal disease, liver disease, stroke, HIV',
      'The Surprise Question: "Would I be surprised if this patient died within 6 months?"',
      'Hospice is appropriate when disease-directed therapy has limited benefit or is declined',
    ],
    management: [
      'Discuss hospice as ADDING services, not giving up',
      'Refer early — weeks to months before expected death',
      'Hospice provides: RN visits, aide services, medications, DME, chaplain, social work, bereavement support',
      'Continuous care (24-hour nursing) available during symptom crises',
      'General inpatient care for symptoms not manageable at home',
      'Patients may revoke hospice at any time to resume curative treatment',
    ],
    keyPearls: [
      'Hospice is a philosophy of care, not a place — delivered in homes, nursing facilities, and dedicated hospice units',
      'The 6-month prognosis requirement does NOT mean patients must die within 6 months — they can be recertified',
      'Late hospice referral (< 7 days) is associated with worse family satisfaction and bereavement outcomes',
      'Concurrent care models allow hospice + disease-directed treatment in some programs',
    ],
    references: [
      'CMS Medicare Hospice Benefit — Conditions of Participation',
      'NHPCO Facts and Figures 2023',
      'J Am Geriatr Soc 2015;63(2):269-276 — Timing of hospice referral',
    ],
  },
  {
    id: 'pc-hospice-non-cancer',
    name: 'Hospice Criteria for Non-Cancer Diagnoses',
    category: 'hospice',
    description:
      'Disease-specific hospice eligibility guidelines for non-malignant conditions including heart failure, COPD, dementia, renal disease, liver disease, and neurologic conditions.',
    clinicalContext:
      'Non-cancer patients are underrepresented in hospice despite high symptom burden. Prognostication is more difficult; disease trajectories are characterized by unpredictable exacerbations.',
    approach: [
      'Heart failure: NYHA Class IV, EF ≤20%, optimal therapy, recurrent hospitalizations',
      'COPD: FEV1 <30%, O2-dependent, cor pulmonale, recurrent exacerbations despite treatment',
      'Dementia: FAST Stage 7+, inability to ambulate/dress/bathe, limited speech, urinary incontinence, plus complication (aspiration, sepsis, pressure ulcer)',
      'Renal: GFR <10 (or <15 with diabetes), declining to pursue or continuing dialysis',
      'Liver: PT >5 sec over control, albumin <2.5, ascites refractory to treatment, hepatorenal syndrome',
      'Stroke/coma: persistent vegetative or minimally conscious state, medical complications',
    ],
    management: [
      'Use LCD (Local Coverage Determination) criteria as a guide, not a rigid checklist',
      'Focus on overall trajectory of decline over weeks to months',
      'Document functional decline, nutritional status, and comorbid conditions',
      'Recertify every 60 days (benefit periods 1 and 2) then every 60 days (unlimited)',
      'Provide non-cancer-specific symptom management protocols',
    ],
    keyPearls: [
      'Non-cancer hospice patients often have longer stays because prognosis is harder to predict',
      'Functional decline (decreasing PPS) is often the most reliable indicator across diagnoses',
      'Heart failure patients can continue cardiac medications if they contribute to symptom relief',
      'Dementia patients qualify based on functional stage + a sentinel complication',
    ],
    references: [
      'NHO Medical Guidelines for Determining Prognosis in Selected Non-Cancer Diseases',
      'JAMA 2004;291(1):88-93 — Prognostication in non-cancer',
      'J Pain Symptom Manage 2013;46(4):491-499 — Non-cancer hospice',
    ],
  },

  // ==========================================================================
  // PAIN PALLIATION
  // ==========================================================================
  {
    id: 'pc-opioid-management',
    name: 'Opioid Management in Palliative Care',
    category: 'pain-palliation',
    description:
      'Evidence-based approach to opioid prescribing for moderate-severe pain in serious illness, including selection, titration, rotation, and management of adverse effects.',
    clinicalContext:
      'Opioids are the cornerstone of moderate-severe cancer pain management. In palliative care, the goal is comfort; addiction concerns are secondary to symptom relief in patients with limited prognosis.',
    approach: [
      'Comprehensive pain assessment: location, quality, intensity (NRS), timing, aggravating/relieving factors',
      'Determine pain type: nociceptive (somatic/visceral), neuropathic, mixed',
      'Start with short-acting opioid; titrate to comfort over 24-48 hours',
      'Convert to long-acting formulation once daily requirements are established',
      'Always provide breakthrough dosing (10-15% of 24-hour total dose)',
      'Anticipate and prophylax for side effects',
    ],
    management: [
      'Opioid-naive: morphine 5-15 mg PO q4h or oxycodone 5-10 mg PO q4-6h',
      'Titration: increase total daily dose by 25-50% for moderate pain, 50-100% for severe',
      'Conversion: use equianalgesic tables with 25-50% dose reduction for incomplete cross-tolerance',
      'Adjuvants: gabapentin/pregabalin for neuropathic pain, dexamethasone for bone pain/edema, NSAIDs for bone metastases',
      'Bowel regimen mandatory; antiemetics PRN for first 3-5 days',
      'Consider methadone for refractory pain (specialist consultation recommended)',
    ],
    keyPearls: [
      'There is no ceiling dose for strong opioids in palliative care — titrate to effect',
      'Morphine dose reduction needed in renal impairment (active metabolite M6G accumulates)',
      'Opioid rotation can improve analgesia when tolerance or side effects limit current agent',
      'Physical dependence is expected and should not be confused with addiction',
    ],
    references: [
      'WHO Analgesic Ladder — Three-step approach to cancer pain',
      'NCCN Adult Cancer Pain Guidelines v1.2024',
      'J Clin Oncol 2016;34(27):3325-3345 — Cancer pain management',
    ],
  },
  {
    id: 'pc-neuropathic-pain',
    name: 'Neuropathic Pain in Palliative Care',
    category: 'pain-palliation',
    description:
      'Pain caused by damage or disease of the somatosensory nervous system, presenting as burning, shooting, tingling, or electric shock-like pain. Common in cancer (tumor infiltration, chemotherapy-induced) and non-cancer palliative conditions.',
    clinicalContext:
      'Neuropathic pain is often poorly responsive to opioids alone and requires adjuvant medications. Mixed pain (nociceptive + neuropathic) is the most common pain pattern in advanced cancer.',
    approach: [
      'Screen with DN4 or painDETECT questionnaire',
      'Characterize: burning, shooting, allodynia, hyperalgesia, numbness',
      'Identify mechanism: compression, infiltration, chemotherapy-induced, post-surgical, post-herpetic',
      'Assess impact on function, sleep, and mood',
    ],
    management: [
      'First-line adjuvants: gabapentin 300 mg titrated to 900-3600 mg/day in 3 divided doses',
      'Pregabalin 75 mg BID titrated to 150-300 mg BID',
      'Duloxetine 30-60 mg daily (particularly for chemotherapy-induced neuropathy)',
      'Tricyclics: amitriptyline/nortriptyline 10-75 mg qHS (use with caution in elderly)',
      'Refractory: methadone, ketamine infusion, nerve block, intrathecal pump',
      'Topical: lidocaine 5% patch, capsaicin 8% patch for localized neuropathic pain',
    ],
    keyPearls: [
      'Gabapentinoids and duloxetine are first-line for neuropathic pain — opioids alone are insufficient',
      'Start low, titrate slow with gabapentin to minimize sedation and dizziness',
      'Methadone has NMDA-receptor activity making it uniquely effective for neuropathic pain',
      'Duloxetine is the only agent with Level I evidence for chemotherapy-induced peripheral neuropathy',
    ],
    references: [
      'Lancet Neurol 2015;14(2):162-173 — Neuropathic pain pharmacotherapy',
      'J Clin Oncol 2014;32(18):1941-1967 — CIPN guidelines',
      'Pain 2018;159(5):815-836 — NeuPSIG guidelines update',
    ],
  },
  {
    id: 'pc-bone-pain',
    name: 'Malignant Bone Pain',
    category: 'pain-palliation',
    description:
      'Pain arising from bone metastases, the most common cause of cancer pain. Involves inflammatory, neuropathic, and mechanical components requiring multimodal therapy.',
    clinicalContext:
      'Bone metastases occur in 70% of breast and prostate cancers. Pain may be constant, incident (movement-related), or breakthrough. Pathologic fracture risk must be assessed.',
    approach: [
      'Assess pain character: constant background vs. incident vs. breakthrough',
      'Evaluate pathologic fracture risk (Mirels scoring system)',
      'Imaging: X-ray, bone scan, CT, or MRI to characterize lesions',
      'Determine if radiation therapy is appropriate (single fraction effective for pain)',
    ],
    management: [
      'NSAIDs/COX-2 inhibitors: highly effective for bone pain inflammatory component',
      'Opioids: titrate for background pain; provide rapid-onset formulation for incident pain',
      'Dexamethasone 4-8 mg daily for perineural edema',
      'Radiation therapy: single fraction (8 Gy) as effective as multi-fraction for pain relief',
      'Bisphosphonates (zoledronic acid) or denosumab for skeletal events',
      'Interventional: cementoplasty, nerve block, intrathecal pump for refractory cases',
    ],
    keyPearls: [
      'NSAIDs are often underused but are particularly effective for bone pain',
      'Single-fraction radiation provides equivalent pain relief to multi-fraction with less patient burden',
      'Incident pain (with movement) is the hardest component to manage — pre-dose with rapid-onset opioid',
      'Impending pathologic fracture requires orthopedic consultation before the fracture occurs',
    ],
    references: [
      'Lancet Oncol 2014;15(4):e164-e172 — Bone metastases management',
      'Cochrane Database Syst Rev 2017 — Radiotherapy for bone pain',
      'Ann Oncol 2017;28(suppl_4):iv1-iv21 — ESMO bone metastases guidelines',
    ],
  },

  // ==========================================================================
  // GOALS OF CARE
  // ==========================================================================
  {
    id: 'pc-advance-directives',
    name: 'Advance Directives and Advance Care Planning',
    category: 'goals-of-care',
    description:
      'Legal documents (living wills, healthcare proxy/DPOA) and the ongoing process of discussing and documenting future healthcare preferences in the context of serious illness.',
    clinicalContext:
      'Only ~37% of adults have completed advance directives. The process of conversation is more valuable than the document itself. ACP should be iterative and revisited with each change in clinical status.',
    approach: [
      'Initiate conversations early in the disease trajectory',
      'Assess health literacy and readiness for discussion',
      'Explore values: "What gives your life meaning?" "What would be unacceptable to you?"',
      'Discuss specific scenarios relevant to the patient illness',
      'Identify healthcare proxy/DPOA',
      'Document and distribute to medical record, proxy, and primary care provider',
    ],
    management: [
      'Living will: documents specific treatment preferences (CPR, intubation, dialysis, feeding tubes)',
      'Healthcare proxy/DPOA: designates a surrogate decision-maker',
      'POLST/MOLST: physician orders for patients with serious illness (more actionable than AD)',
      'Review and update with each hospitalization or clinical change',
      'State-specific legal requirements must be followed for validity',
      'Electronic health record documentation and patient portal access',
    ],
    keyPearls: [
      'The conversation matters more than the form — a completed form without a conversation is of limited value',
      'Healthcare proxy designation is the single most important advance directive',
      'POLST forms are medical orders, unlike ADs which are patient directives; both are needed',
      'Revisit advance directives — patient preferences change over time',
    ],
    references: [
      'N Engl J Med 2010;362(13):1211-1218 — Advance care planning review',
      'JAMA Intern Med 2014;174(7):1085-1092 — ACP conversations',
      'Ann Intern Med 2017;166(8):543-551 — Advance directive completion rates',
    ],
  },
  {
    id: 'pc-code-status',
    name: 'Code Status Discussions',
    category: 'goals-of-care',
    description:
      'Conversations about resuscitation preferences (DNR/DNI) framed within the broader context of patient values, goals, and understanding of illness.',
    clinicalContext:
      'Code status discussions are often conducted poorly — asking "Do you want us to do everything?" without context leads to uninformed decisions. These conversations should be embedded in broader goals of care.',
    approach: [
      'Never discuss code status in isolation from goals of care',
      'Assess understanding of illness and prognosis first',
      'Explain CPR in terms of realistic outcomes for the specific patient',
      'Frame in terms of goals: "Given what matters most to you..."',
      'Avoid the word "everything" — it implies unlimited benefit',
      'Make a recommendation based on clinical knowledge and patient values',
    ],
    management: [
      'Provide outcome data: in-hospital cardiac arrest survival to discharge ~25% overall, <5% in metastatic cancer',
      'Clarify that DNR does NOT mean "do not treat" — all other treatments continue',
      'Distinguish DNR from DNI and other specific interventions',
      'Document who participated, what was discussed, and the decision made',
      'Communicate to all care team members and update orders',
      'Allow patients to change their minds at any time',
    ],
    keyPearls: [
      '"Do you want us to do everything?" is the wrong question — it assumes all interventions are beneficial',
      'A physician recommendation ("Given your situation, I would recommend...") is not paternalism — it is clinical guidance patients often want',
      'DNR patients still receive all appropriate disease-directed and supportive treatments',
      'Asking about code status without discussing prognosis is asking patients to make decisions without information',
    ],
    references: [
      'N Engl J Med 2012;367(18):1750-1752 — CPR outcomes communication',
      'JAMA 2016;316(20):2142-2151 — Code status discussion quality',
      'Am J Respir Crit Care Med 2015;192(1):6-12 — In-hospital cardiac arrest outcomes',
    ],
  },
  {
    id: 'pc-time-limited-trial',
    name: 'Time-Limited Trials',
    category: 'goals-of-care',
    description:
      'Agreement to pursue a specific treatment for a defined period with predetermined endpoints, after which the team and family reassess goals based on the patient response.',
    clinicalContext:
      'Time-limited trials bridge prognostic uncertainty and decisional conflict. They allow trial of aggressive therapy while providing a structured off-ramp if treatment is not meeting goals.',
    approach: [
      'Define the trial: what treatment, for how long, what are we hoping to see',
      'Establish clear, measurable endpoints (e.g., "extubated within 5 days," "improved mental status by 72 hours")',
      'Discuss what happens if goals are met AND if they are not met',
      'Ensure all stakeholders agree before initiating',
      'Document the plan in the medical record',
    ],
    management: [
      'Typical duration: 3-14 days depending on the intervention',
      'Daily or scheduled reassessment by primary team',
      'Family meeting at predetermined endpoint',
      'If goals met: continue or transition to next phase',
      'If goals not met: transition to comfort-focused care as previously agreed',
      'If unclear: may extend with new specific endpoints and timeline',
    ],
    keyPearls: [
      'Time-limited trials transform "all or nothing" into a graduated approach',
      'The key is pre-commitment to reassessment — not just continuing indefinitely',
      'Defining failure criteria in advance is harder but more important than success criteria',
      'Time-limited trials reduce family guilt by framing withdrawal as the pre-agreed plan',
    ],
    references: [
      'Crit Care Med 2006;34(11 Suppl):S325-S329 — Time-limited trials in ICU',
      'JAMA 2020;324(14):1445-1446 — Practical framework',
      'Chest 2019;155(6):1249-1254',
    ],
  },

  // ==========================================================================
  // PSYCHOSOCIAL
  // ==========================================================================
  {
    id: 'pc-grief-bereavement',
    name: 'Grief and Bereavement Support',
    category: 'psychosocial',
    description:
      'Support for families before, during, and after death of a loved one. Distinguishes normal grief from complicated/prolonged grief disorder requiring specialized treatment.',
    clinicalContext:
      'Anticipatory grief begins before death. Bereavement support is a core hospice service (13 months post-death). Approximately 10% of bereaved individuals develop prolonged grief disorder.',
    approach: [
      'Screen for complicated grief risk factors: sudden death, caregiver burden, pre-existing mental health, limited social support, dependent relationship',
      'Normalize grief reactions: sadness, anger, guilt, relief are all common',
      'Distinguish normal grief from prolonged grief disorder (>12 months, functional impairment)',
      'Assess for suicidality in bereaved individuals',
    ],
    management: [
      'Pre-death: facilitate legacy work, life review, meaningful conversations',
      'At death: compassionate notification, time with the body, memorial rituals',
      'Post-death: bereavement follow-up calls/letters at 1, 3, 6, 12 months',
      'Support groups and peer support programs',
      'Prolonged grief disorder: grief-focused cognitive behavioral therapy (CBT)',
      'Pharmacotherapy only for comorbid depression/anxiety, not for grief itself',
    ],
    keyPearls: [
      'Grief is not a disorder — it is a normal human response to loss',
      'The "stages of grief" (Kubler-Ross) are not linear and not evidence-based as a model of bereavement',
      'Prolonged grief disorder was added to DSM-5-TR (2022) and ICD-11',
      'Bereavement support for families begins before the patient dies, not after',
    ],
    references: [
      'N Engl J Med 2023;389(1):72-78 — Prolonged grief disorder',
      'JAMA 2020;324(22):2299-2300 — Bereavement care',
      'World Psychiatry 2020;19(1):114-115 — PGD in ICD-11',
    ],
  },
  {
    id: 'pc-spiritual-care',
    name: 'Spiritual Care in Serious Illness',
    category: 'psychosocial',
    description:
      'Assessment and support of spiritual needs, meaning-making, and existential concerns in patients facing serious illness. Spiritual distress is an independent predictor of poor quality of life.',
    clinicalContext:
      'Spirituality is broader than religion — it encompasses meaning, purpose, connection, and transcendence. 70-80% of seriously ill patients report spiritual needs; <50% feel these are addressed.',
    approach: [
      'Screen using FICA (Faith, Importance, Community, Address) or HOPE (Hope, Organized religion, Personal spirituality, Effects)',
      'Ask: "How are you finding strength through this?" or "What gives your life meaning?"',
      'Identify spiritual distress: loss of meaning, anger at God, existential crisis, fear of death',
      'Determine patient preference for chaplain referral',
    ],
    management: [
      'Refer to board-certified chaplain for comprehensive spiritual assessment',
      'Support religious practices: prayer, rituals, sacraments, dietary requirements',
      'Dignity therapy: structured interview creating a generativity document',
      'Meaning-centered psychotherapy for existential distress',
      'Life review and legacy projects',
      'Respect atheist/agnostic patients — do not impose religious frameworks',
    ],
    keyPearls: [
      'Physicians do not need to provide spiritual care — they need to identify and refer',
      'Spiritual distress can manifest as physical symptoms or treatment refusal',
      'Dignity therapy has Level I evidence for improving end-of-life experience',
      'Never assume a patient religious identity — always ask',
    ],
    references: [
      'J Palliat Med 2009;12(10):885-904 — Consensus guidelines on spiritual care',
      'BMC Palliat Care 2017;16(1):26 — Dignity therapy RCT',
      'Lancet 2018;392(10155):1285-1292 — Spiritual care in palliative medicine',
    ],
  },
  {
    id: 'pc-caregiver-burnout',
    name: 'Caregiver Burden and Burnout',
    category: 'psychosocial',
    description:
      'Physical, emotional, and financial strain experienced by informal caregivers of seriously ill patients. Caregivers have higher rates of depression, anxiety, and mortality than non-caregivers.',
    clinicalContext:
      'There are 53 million unpaid caregivers in the US. Caregiver distress is a palliative care emergency — it threatens the patient care plan and the caregiver own health.',
    approach: [
      'Screen with Zarit Burden Interview or modified Caregiver Strain Index',
      'Assess: physical health, sleep, mood, social isolation, financial strain',
      'Identify high-risk: sole caregiver, employed, children at home, pre-existing health conditions',
      'Evaluate caregiver preparedness and information needs',
    ],
    management: [
      'Respite care: in-home, adult day, or residential (hospice provides 5 consecutive days)',
      'Psychoeducation on disease trajectory and what to expect',
      'Support groups (in-person and virtual)',
      'Social work referral for financial assistance, community resources, FMLA counseling',
      'Caregiver mental health treatment (therapy, medication if indicated)',
      'Practical support: home health aide, meal delivery, transportation assistance',
    ],
    keyPearls: [
      'Always ask the caregiver "How are YOU doing?" — they are often invisible in the healthcare system',
      'Respite care is underutilized and is a hospice Medicare benefit',
      'Caregiver burnout predicts earlier nursing home placement and worse patient outcomes',
      'Financial toxicity of caregiving is a major source of distress',
    ],
    references: [
      'JAMA 2019;321(12):1215 — Caregiver burden in serious illness',
      'J Pain Symptom Manage 2016;52(3):318-328 — Caregiver interventions',
      'AARP/NAC Caregiving in the US 2020 Report',
    ],
  },
  {
    id: 'pc-depression-serious-illness',
    name: 'Depression in Serious Illness',
    category: 'psychosocial',
    description:
      'Major depression affects 10-25% of patients with serious illness but is underdiagnosed because somatic symptoms (fatigue, anorexia, insomnia) overlap with the disease itself.',
    clinicalContext:
      'Depression in serious illness is NOT a normal reaction. It worsens pain, reduces treatment adherence, impairs quality of life, and may affect treatment decisions including desire to hasten death.',
    approach: [
      'Screen with PHQ-2 then PHQ-9; use psychological symptoms (anhedonia, worthlessness, guilt) as primary indicators',
      'Distinguish depression from normal sadness/grief, demoralization, and delirium',
      'Assess for suicidality and desire for hastened death',
      'Evaluate medication contributions (corticosteroids, interferon, beta-blockers)',
      'Consider uncontrolled symptoms as a cause of depressed mood',
    ],
    management: [
      'Psychotherapy: CBT, problem-solving therapy, meaning-centered therapy',
      'SSRIs: sertraline 25-50 mg (preferred for multiple drug interactions), escitalopram 5-10 mg',
      'Mirtazapine 15 mg qHS if insomnia and anorexia are co-present',
      'Methylphenidate 5-10 mg qAM for patients with limited prognosis (fast onset)',
      'Optimize pain and symptom management',
      'Social work and chaplain referral for holistic support',
    ],
    keyPearls: [
      'Anhedonia (loss of pleasure) is the most diagnostically useful symptom — somatic criteria are unreliable in advanced illness',
      'Methylphenidate works within days (vs. weeks for SSRIs) — important when prognosis is short',
      'Desire for hastened death should prompt evaluation for depression, pain, and spiritual distress',
      'Treating depression improves pain, function, and overall quality of life',
    ],
    references: [
      'Lancet Psychiatry 2018;5(12):990-1002 — Depression in cancer',
      'J Clin Oncol 2014;32(15):1605-1619 — ASCO depression screening guidelines',
      'Palliat Med 2019;33(8):1002-1016 — Antidepressant selection in advanced illness',
    ],
  },

  // ==========================================================================
  // PEDIATRIC PALLIATIVE
  // ==========================================================================
  {
    id: 'pc-pediatric-palliative-overview',
    name: 'Pediatric Palliative Care Principles',
    category: 'pediatric-palliative',
    description:
      'Palliative care for children with life-limiting or life-threatening conditions, emphasizing concurrent curative and palliative care, family-centered approach, and developmental appropriateness.',
    clinicalContext:
      'Pediatric palliative care differs from adult care: diagnoses are more varied, prognosis is less predictable, developmental considerations are paramount, and the entire family is the unit of care.',
    approach: [
      'Introduce palliative care early — at diagnosis of life-limiting condition',
      'Concurrent curative and palliative care is the norm (not either/or)',
      'Assess pain and symptoms using age-appropriate tools (FLACC, Wong-Baker, NRS)',
      'Include the child in discussions at a developmentally appropriate level',
      'Assess sibling needs and school impact',
      'Address parental anticipatory grief and decision-making burden',
    ],
    management: [
      'Pain: weight-based opioid dosing, multimodal analgesia, integrative therapies (massage, music, art therapy)',
      'Symptom management adapted for pediatric pharmacokinetics',
      'Child life specialists for procedural support and normalization',
      'School re-entry and educational continuity planning',
      'Respite care for parents and siblings',
      'Perinatal palliative care for life-limiting prenatal diagnoses',
    ],
    keyPearls: [
      'Children are not small adults — pharmacokinetics, psychology, and family dynamics are fundamentally different',
      'Pediatric palliative care is appropriate from diagnosis, not just at end of life',
      'Parents need permission to be parents, not just medical decision-makers',
      'Siblings are often the forgotten grievers — assess and support their needs',
    ],
    references: [
      'Pediatrics 2013;132(5):966-972 — AAP palliative care policy',
      'N Engl J Med 2015;372(8):780-781 — Pediatric palliative care',
      'J Palliat Med 2019;22(S1):S1-S161 — Pediatric palliative care guidelines',
    ],
  },
  {
    id: 'pc-pediatric-pain',
    name: 'Pain Management in Pediatric Palliative Care',
    category: 'pediatric-palliative',
    description:
      'Assessment and treatment of pain in children with serious illness using age-appropriate tools and weight-based pharmacology, with emphasis on multimodal and integrative approaches.',
    clinicalContext:
      'Pain in children is frequently undertreated due to assessment challenges, opioid fears, and developmental complexity. Neonates and non-verbal children require behavioral pain assessment.',
    approach: [
      'Use age-appropriate assessment: FLACC (0-3 years), Wong-Baker Faces (3-8 years), NRS (>8 years)',
      'Behavioral cues in non-verbal children: grimacing, guarding, irritability, feeding refusal',
      'Assess impact on sleep, play, school, and development',
      'Distinguish pain from anxiety, fear, and procedural distress',
    ],
    management: [
      'Mild pain: acetaminophen 15 mg/kg q4h, ibuprofen 10 mg/kg q6h',
      'Moderate-severe: morphine 0.1-0.2 mg/kg PO q4h or 0.05-0.1 mg/kg IV q2-4h',
      'Hydromorphone, oxycodone, fentanyl available for opioid rotation',
      'PCA appropriate for children >6 years; nurse/parent-controlled analgesia for younger children',
      'Integrative: massage, art therapy, music therapy, virtual reality distraction',
      'Regional anesthesia and nerve blocks for localized pain',
    ],
    keyPearls: [
      'Neonates and infants DO feel pain — adequate analgesia is an ethical imperative',
      'Weight-based dosing with careful titration is safe in children',
      'Codeine is contraindicated in children due to CYP2D6 ultra-rapid metabolizer risk',
      'Integrative therapies are particularly effective in pediatric populations',
    ],
    references: [
      'WHO Guidelines on the Pharmacologic Treatment of Persisting Pain in Children, 2012',
      'Pediatrics 2019;144(5):e20191945 — Pediatric pain management',
      'J Pain Symptom Manage 2018;56(6):905-916',
    ],
  },

  // ==========================================================================
  // ADDITIONAL ENTRIES
  // ==========================================================================
  {
    id: 'pc-opioid-rotation',
    name: 'Opioid Rotation',
    category: 'pain-palliation',
    description:
      'Switching from one opioid to another to improve analgesia, reduce side effects, or accommodate route changes. Based on equianalgesic dosing with cross-tolerance reduction.',
    clinicalContext:
      'Opioid rotation is indicated when current opioid produces inadequate analgesia despite escalation, intolerable side effects, or when route change is necessary. Incomplete cross-tolerance requires dose reduction.',
    approach: [
      'Calculate total 24-hour dose of current opioid in oral morphine equivalents (OMED)',
      'Use equianalgesic conversion table to calculate new opioid dose',
      'Reduce calculated dose by 25-50% for incomplete cross-tolerance',
      'Further reduce by 25-50% if changing for side effects (not inadequate analgesia)',
      'Provide adequate breakthrough dosing during transition',
    ],
    management: [
      'Key equianalgesic ratios (PO): morphine 30 mg = oxycodone 20 mg = hydromorphone 6 mg',
      'Fentanyl patch: OMED ÷ 2 = approximate fentanyl mcg/hr dose',
      'Methadone: use specialized conversion ratios (higher OMED = larger reduction ratio)',
      'Monitor closely for 48-72 hours after rotation',
      'Reassess and titrate breakthrough dose based on new opioid',
      'Document rationale and conversion calculations in the chart',
    ],
    keyPearls: [
      'Always reduce calculated equianalgesic dose by 25-50% — cross-tolerance is incomplete',
      'Methadone conversions are non-linear and should involve palliative care or pain specialists',
      'Fentanyl patch takes 12-24 hours to reach therapeutic levels — bridge with short-acting agent',
      'Rotation can improve analgesia even if the new opioid is "weaker" on paper',
    ],
    references: [
      'J Pain Symptom Manage 2016;51(2):325-334 — Opioid rotation guidelines',
      'Palliat Med 2011;25(5):431-441 — Equianalgesic tables',
      'NCCN Adult Cancer Pain Guidelines — Opioid rotation appendix',
    ],
  },
  {
    id: 'pc-existential-distress',
    name: 'Existential Distress',
    category: 'psychosocial',
    description:
      'Profound suffering related to loss of meaning, purpose, identity, and dignity in the face of mortality. Manifests as demoralization, loss of will to live, or desire for hastened death.',
    clinicalContext:
      'Existential distress is distinct from psychiatric depression though they may co-occur. It reflects a crisis of meaning rather than a mood disorder and responds to meaning-based interventions rather than pharmacotherapy alone.',
    approach: [
      'Screen: "Do you feel at peace?" (single-item screen has good sensitivity)',
      'Distinguish from depression: preserved emotional reactivity suggests existential distress',
      'Assess contributing factors: loss of function, burden to others, loss of dignity, loss of roles',
      'Explore sources of meaning and connection that remain',
    ],
    management: [
      'Dignity therapy: structured interview creating a generativity document for loved ones',
      'Meaning-centered group psychotherapy (Breitbart)',
      'Managing Cancer And Living Meaningfully (CALM) therapy',
      'Narrative medicine and life review',
      'Chaplain/spiritual care referral',
      'Address modifiable contributors: pain, loss of function, isolation',
    ],
    keyPearls: [
      '"Are you at peace?" is a validated single-item existential distress screen',
      'Existential distress can drive desire for hastened death independent of depression',
      'Dignity therapy improves sense of meaning and purpose with effect lasting after a single session',
      'Sometimes sitting with suffering is more therapeutic than trying to fix it',
    ],
    references: [
      'J Clin Oncol 2012;30(12):1304-1309 — "Are you at peace?" validation',
      'Lancet Oncol 2011;12(8):753-762 — Meaning-centered therapy',
      'J Palliat Med 2015;18(10):868-879 — Dignity therapy outcomes',
    ],
  },
  {
    id: 'pc-insomnia',
    name: 'Insomnia in Palliative Care',
    category: 'symptom-management',
    description:
      'Sleep disturbance affecting 30-75% of patients with advanced illness, caused by pain, anxiety, medications, delirium, and disrupted circadian rhythm. Profoundly impacts quality of life.',
    clinicalContext:
      'Insomnia in serious illness is multifactorial and underrecognized. It worsens pain perception, fatigue, depression, and cognitive function. Non-pharmacologic approaches are preferred when feasible.',
    approach: [
      'Assess sleep quality, duration, onset latency, and nighttime awakenings',
      'Identify reversible causes: uncontrolled pain, dyspnea, nocturia, medications (corticosteroids, stimulants)',
      'Screen for depression and anxiety',
      'Evaluate for delirium, especially with new-onset insomnia in hospitalized patients',
    ],
    management: [
      'Sleep hygiene: consistent schedule, dark/quiet room, limit napping, avoid screens',
      'CBT for insomnia (CBT-I): abbreviated protocols effective in cancer patients',
      'Melatonin 3-5 mg qHS (low side-effect profile)',
      'Trazodone 25-50 mg qHS (sedating antidepressant, low anticholinergic burden)',
      'Mirtazapine 7.5-15 mg qHS if co-existing depression and anorexia',
      'Avoid benzodiazepines and anticholinergics in elderly — fall and delirium risk',
    ],
    keyPearls: [
      'Corticosteroids should be dosed in the morning to minimize insomnia',
      'Trazodone and mirtazapine serve double duty as sedating antidepressants',
      'Always address underlying pain before adding a sleep medication',
      'Hospitalized patients: minimize overnight interruptions, cluster care activities',
    ],
    references: [
      'J Clin Sleep Med 2019;15(1):169-180 — Insomnia in cancer',
      'Palliat Med 2017;31(3):195-205 — Sleep disturbance in palliative care',
      'Ann Intern Med 2016;165(2):103-112 — CBT-I guidelines',
    ],
  },
  {
    id: 'pc-cultural-competence',
    name: 'Cultural Competence in End-of-Life Care',
    category: 'psychosocial',
    description:
      'Awareness and respect for diverse cultural, religious, and ethnic perspectives on death, dying, truth-telling, decision-making, and afterdeath rituals in palliative care.',
    clinicalContext:
      'Cultural background shapes every aspect of the end-of-life experience: who makes decisions, whether prognosis is disclosed, what constitutes a "good death," and how the body is handled after death.',
    approach: [
      'Practice cultural humility: curiosity over assumption',
      'Ask: "Are there cultural or religious traditions important to you as we plan your care?"',
      'Assess decision-making preferences: individual autonomy vs. family-centered',
      'Determine truth-telling preferences: some cultures prefer family receive prognostic information',
      'Identify afterdeath rituals and time-sensitive practices',
    ],
    management: [
      'Use professional medical interpreters (never family members) for language-discordant care',
      'Accommodate religious practices: prayer times, dietary restrictions, same-sex care providers',
      'Respect family-centered decision-making models without imposing Western autonomy framework',
      'Facilitate cultural rituals: bathing the body, continuous presence, specific burial timelines',
      'Document cultural preferences in the care plan',
      'Engage cultural/spiritual community leaders when invited by the patient/family',
    ],
    keyPearls: [
      'Never assume cultural preferences based on ethnicity — always ask the individual',
      'Family-centered decision-making is the global norm; Western individual autonomy is the exception',
      'Some cultures require rapid burial (Judaism, Islam) — death certificate process must accommodate this',
      'Cultural competence reduces disparities in palliative care access and quality',
    ],
    references: [
      'J Palliat Med 2014;17(2):152-158 — Cultural considerations in palliative care',
      'JAMA 2019;321(17):1720 — Cross-cultural end-of-life communication',
      'Am J Hosp Palliat Med 2018;35(8):1107-1112 — Cultural humility in hospice',
    ],
  },
  {
    id: 'pc-moral-distress',
    name: 'Moral Distress in Palliative Care Clinicians',
    category: 'ethics',
    description:
      'Psychological distress experienced when clinicians know the ethically correct action but are constrained from taking it, common in end-of-life care when there is perceived overtreatment or value conflicts.',
    clinicalContext:
      'Moral distress is a leading cause of burnout and attrition in palliative care and critical care clinicians. It arises from perceived futile treatment, aggressive care at end of life, and family-clinician disagreement.',
    approach: [
      'Recognize moral distress as distinct from burnout and compassion fatigue',
      'Identify root causes: institutional constraints, family demands, legal fears, team conflict',
      'Create safe spaces for team debriefing and narrative processing',
      'Consult ethics when facing recurrent moral distress scenarios',
    ],
    management: [
      'Individual: reflective practice, peer support, professional counseling, mindfulness',
      'Team: regular death debriefings, Schwartz Center Rounds, moral distress consult service',
      'Institutional: ethics committees, clear policies on futility, palliative care integration',
      'Education: moral resilience training, communication skills workshops',
      'Leadership: workload management, emotional support structures, recognition of the toll',
    ],
    keyPearls: [
      'Moral distress accumulates (moral residue) and is a major driver of workforce attrition',
      'Debriefing after difficult deaths reduces moral distress and improves team function',
      'Moral distress is a system problem, not an individual weakness',
      'Palliative care clinicians need palliative care for themselves — self-care is not optional',
    ],
    references: [
      'Am J Crit Care 2016;25(4):e52-e59 — Moral distress scale',
      'J Palliat Med 2018;21(4):544-549 — Moral distress in palliative care',
      'JAMA 2019;322(4):291-292 — Clinician well-being and moral injury',
    ],
  },
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by query string across name, description, clinicalContext, and keyPearls. */
export const searchPalliativeEntries = (query: string): PalliativeCareEntry[] => {
  const q = query.toLowerCase();
  return palliativeCareDatabase.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.clinicalContext.toLowerCase().includes(q) ||
      e.keyPearls.some((p) => p.toLowerCase().includes(q))
  );
};

/** Filter entries by one or more categories. */
export const filterByCategory = (
  categories: PalliativeCareDBCategory[]
): PalliativeCareEntry[] =>
  palliativeCareDatabase.filter((e) =>
    categories.includes(e.category)
  );

/** Retrieve a single entry by its id, or undefined if not found. */
export const getEntryById = (id: string): PalliativeCareEntry | undefined =>
  palliativeCareDatabase.find((e) => e.id === id);
