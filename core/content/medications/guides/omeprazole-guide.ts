import { EducationalContent } from '../../types';

export const omeprazoleGuideContent: EducationalContent = {
  id: 'topic-medication-omeprazole',
  type: 'topic',
  name: 'Omeprazole Guide',
  nameEs: 'Guia de Omeprazol',
  levels: {
    level1: {
      title: 'Omeprazole: Reducing Stomach Acid',
      titleEs: 'Omeprazol: Reduciendo el Acido Estomacal',
      content: `
Omeprazole is a medicine that reduces the amount of acid your stomach makes. Too much acid can cause
heartburn, acid reflux, and stomach ulcers. Omeprazole helps these conditions heal and prevents them
from coming back.

**How to Take Omeprazole**
- Take it once a day, usually in the morning before eating.
- Swallow the capsule whole — do not crush, chew, or open it.
- Take it 30-60 minutes before your first meal for best results.
- If you miss a dose, take it as soon as you remember. If it is almost time for your next dose,
  skip the missed one.

**What Omeprazole Does**
- It blocks the tiny pumps in your stomach that make acid.
- It reduces heartburn, chest burning, and sour taste in your mouth.
- It helps heal damage to your food pipe (esophagus) and stomach lining.

**Common Side Effects**
- Headache.
- Stomach pain or nausea.
- Diarrhea or constipation.
- Gas.

**Important Warnings**
- Omeprazole is not meant to be taken forever. Talk to your doctor about how long you should take it.
- Long-term use may affect your bones — your doctor should monitor this.
- Tell your doctor if you take blood thinners like clopidogrel (Plavix).
- If you have trouble swallowing, vomiting blood, or black stools, see a doctor right away.

**Tips for Success**
- Avoid foods that make heartburn worse: spicy foods, chocolate, coffee, alcohol, citrus fruits.
- Do not lie down right after eating — wait at least 2-3 hours.
- Raise the head of your bed by 6-8 inches if you have nighttime heartburn.
- Try to eat smaller meals more often instead of a few large meals.
      `,
      patientCounselingPoints: [
        'Take omeprazole 30-60 minutes before breakfast for best results.',
        'Swallow capsules whole — do not crush, chew, or break them open.',
        'Omeprazole is usually meant for short-term use (4-8 weeks). Talk to your doctor about duration.',
        'Tell your doctor about all medications you take, especially blood thinners.',
        'Lifestyle changes (diet, elevating bed, smaller meals) can help your medicine work better.',
        'See a doctor immediately if you vomit blood or have black, tarry stools.'
      ],
      keyTerms: [
        { term: 'Acid Reflux', definition: 'When stomach acid flows back up into your food pipe, causing burning and discomfort.' },
        { term: 'Proton Pump Inhibitor (PPI)', definition: 'The type of medicine omeprazole is. It blocks the pumps in your stomach that make acid.' },
        { term: 'GERD', definition: 'Gastroesophageal Reflux Disease — a chronic condition where acid regularly flows back into the food pipe.' },
        { term: 'Ulcer', definition: 'A sore on the lining of your stomach or small intestine, often caused by too much acid.' },
        { term: 'Esophagus', definition: 'The tube that carries food from your mouth to your stomach. Acid can damage its lining.' }
      ]
    },
    level2: {
      title: 'Understanding Omeprazole: A Proton Pump Inhibitor',
      titleEs: 'Entendiendo el Omeprazol: Un Inhibidor de la Bomba de Protones',
      content: `
Omeprazole belongs to a class of medications called proton pump inhibitors (PPIs). It is one of
the most widely used medications worldwide and is available both by prescription and over the counter.

**How Omeprazole Works**
Your stomach has special cells called parietal cells that produce hydrochloric acid. These cells use
tiny molecular "pumps" called proton pumps (H+/K+ ATPase) to push acid into your stomach.

Omeprazole permanently disables these proton pumps. Once a pump is disabled, it cannot produce acid
until your body makes a new pump (which takes about 24-48 hours). This is why omeprazole provides
long-lasting acid reduction even though the drug itself leaves your body relatively quickly.

**Dosing Information**
- GERD: 20 mg once daily for 4-8 weeks.
- Erosive esophagitis: 20 mg once daily for 4-8 weeks; may need maintenance therapy.
- Stomach ulcers: 20-40 mg once daily for 4-8 weeks.
- H. pylori treatment: 20 mg twice daily combined with antibiotics for 10-14 days.
- OTC (over-the-counter): 20 mg once daily for 14 days; can repeat after 4 months.

**Why Timing Matters**
Omeprazole works best when taken 30-60 minutes before a meal because:
- Eating stimulates your parietal cells to activate their proton pumps.
- Omeprazole can only block pumps that are active (turned on).
- Taking it before a meal ensures the drug reaches the pumps when they are most active.

**Duration Concerns**
Omeprazole was designed for short-term use (4-8 weeks), but many patients take it for years.
Long-term risks include:
- **Bone fractures**: Reduced calcium absorption may increase osteoporosis and fracture risk.
- **Magnesium deficiency**: Can cause muscle cramps, irregular heartbeat, and seizures.
- **Vitamin B12 deficiency**: Acid is needed to absorb B12 from food.
- **Kidney problems**: Rare association with interstitial nephritis.
- **Clostridium difficile infection**: Stomach acid normally kills bacteria; reducing acid may
  increase susceptibility to gut infections.
- **Rebound acid hypersecretion**: Stopping PPIs suddenly after long-term use can cause worse
  acid production than before you started.

**How to Stop Safely**
If you and your doctor decide to stop omeprazole after long-term use:
- Taper gradually over 2-4 weeks (e.g., every other day, then twice weekly, then stop).
- Use antacids (Tums, Maalox) for breakthrough symptoms during tapering.
- Maintain lifestyle modifications.
- Consider switching to an H2 blocker (famotidine) as a step-down therapy.

**Important Drug Interactions**
- **Clopidogrel (Plavix)**: Omeprazole can reduce clopidogrel's effectiveness. Your doctor may
  choose a different PPI (pantoprazole) or acid reducer.
- **Methotrexate**: PPIs can increase methotrexate levels, causing toxicity.
- **Citalopram/Escitalopram**: Possible increased risk of QT prolongation.
- **Iron and calcium supplements**: Reduced absorption due to lower stomach acid.
      `,
      patientCounselingPoints: [
        'Timing is critical — take omeprazole 30-60 minutes before your first meal for best effectiveness.',
        'Long-term PPI use has potential risks. Discuss the shortest effective duration with your doctor.',
        'Do not stop omeprazole suddenly after long-term use — taper gradually to avoid rebound acid.',
        'If you take clopidogrel (Plavix), tell your doctor — omeprazole may reduce its effectiveness.',
        'Ask about calcium and vitamin D supplementation if using omeprazole long-term.',
        'Over-the-counter omeprazole is intended for only 14-day courses, not continuous use.'
      ],
      keyTerms: [
        { term: 'Proton Pump (H+/K+ ATPase)', definition: 'The molecular pump in stomach cells that produces acid. Omeprazole permanently disables these pumps.' },
        { term: 'Parietal Cells', definition: 'Specialized stomach cells that produce hydrochloric acid using proton pumps.' },
        { term: 'Rebound Acid Hypersecretion', definition: 'A temporary increase in stomach acid production that occurs when PPIs are stopped suddenly after long-term use.' },
        { term: 'H. pylori', definition: 'Helicobacter pylori — a bacterium that causes stomach ulcers. Omeprazole is used with antibiotics to treat it.' },
        { term: 'Erosive Esophagitis', definition: 'Damage to the esophagus lining caused by chronic acid reflux. PPIs help this tissue heal.' },
        { term: 'H2 Blocker', definition: 'Another type of acid-reducing medication (e.g., famotidine) that is less potent than PPIs and can be used for step-down therapy.' }
      ]
    },
    level3: {
      title: 'Omeprazole Pharmacology and Acid-Related Disorders',
      titleEs: 'Farmacologia del Omeprazol y Trastornos Relacionados con el Acido',
      content: `
Omeprazole, the first clinically available PPI, revolutionized the management of acid-related
disorders. As a substituted benzimidazole, it represents the most potent class of acid-suppressive
agents, providing superior efficacy compared to H2 receptor antagonists.

**Mechanism of Action**
Omeprazole is a prodrug that requires acid activation:
1. Absorbed in the small intestine and distributed systemically.
2. Concentrates in the acidic canaliculi of parietal cells (pH ~1.0).
3. The acidic environment protonates omeprazole, converting it to the active sulfenamide form.
4. The sulfenamide covalently binds to cysteine residues (Cys813 and Cys822) on the alpha subunit
   of H+/K+ ATPase.
5. This irreversible binding disables the proton pump until new pumps are synthesized.

**Pharmacokinetics**
- **Absorption**: Acid-labile; enteric-coated formulations protect from gastric degradation.
  Bioavailability increases from 35% (first dose) to 60% with repeated dosing (less acid to
  degrade the drug).
- **Onset**: Acid suppression begins within 1 hour; maximal after 2 hours.
- **Peak plasma**: 1-2 hours. Plasma half-life: 0.5-1 hour (but clinical effect lasts 24+ hours
  due to irreversible pump binding).
- **Metabolism**: Extensive hepatic via CYP2C19 (major) and CYP3A4 (minor).
- **Elimination**: 80% renal (as metabolites), 20% fecal.

**CYP2C19 Pharmacogenomics**
CYP2C19 polymorphism significantly affects omeprazole pharmacokinetics:
- **Extensive metabolizers (EMs)**: Normal metabolism; standard doses typically effective.
- **Intermediate metabolizers (IMs)**: Moderate increase in drug exposure.
- **Poor metabolizers (PMs)**: 3-10 fold increase in AUC; more effective acid suppression but
  potentially more drug interactions. ~2-5% of Caucasians, ~15-20% of Asians are PMs.
- **Ultra-rapid metabolizers (UMs)**: Reduced efficacy; may need higher doses or alternative PPIs.

**Clinical Applications**
1. **GERD**: 20 mg daily heals erosive esophagitis in 80-90% of patients within 8 weeks.
2. **Peptic Ulcer Disease**: Superior healing rates compared to H2 blockers.
3. **H. pylori Eradication**: Triple therapy (PPI + clarithromycin + amoxicillin or metronidazole)
   for 14 days. Quadruple therapy with bismuth as alternative.
4. **Zollinger-Ellison Syndrome**: High-dose therapy (60-120 mg/day) for pathological hypersecretion.
5. **NSAID Gastroprotection**: Co-prescription with chronic NSAID use in high-risk patients.
6. **Stress Ulcer Prophylaxis**: IV formulation in critically ill patients (though overuse is common).

**Long-Term Safety Concerns — Evidence Review**
- **Fracture risk**: FDA safety communication (2010). Observational data suggest 10-40% increased
  hip fracture risk with >1 year use. Mechanism: Reduced calcium absorption and altered bone metabolism.
- **Hypomagnesemia**: FDA warning (2011). Occurs in ~1% of long-term users; can be severe.
- **C. difficile**: 65% increased risk per observational meta-analyses.
- **Pneumonia**: Modest association (OR 1.27); primarily community-acquired.
- **Chronic kidney disease**: Observational association with AIN and CKD progression.
- **Gastric fundic gland polyps**: Benign; occur in 10-25% of long-term users.
- **Dementia**: Initial observational concerns not confirmed by subsequent large studies.

**Deprescribing PPIs**
Evidence-based approach to PPI deprescribing:
1. Identify patients without clear ongoing indication.
2. Step-down strategy: Reduce to lowest effective dose.
3. Intermittent therapy: Use on-demand rather than daily.
4. Step-off: Taper over 2-4 weeks to prevent rebound.
5. Alternative therapy: H2 blockers or alginate-based antacids.
      `,
      keyTerms: [
        { term: 'Sulfenamide', definition: 'The active metabolite of omeprazole formed in the acidic environment of parietal cell canaliculi. It covalently binds and irreversibly inhibits proton pumps.' },
        { term: 'CYP2C19', definition: 'The primary hepatic enzyme metabolizing omeprazole. Genetic polymorphisms cause significant variability in drug levels and clinical response.' },
        { term: 'Canaliculi', definition: 'The acidic secretory channels of parietal cells where omeprazole is activated and proton pumps are located.' },
        { term: 'Zollinger-Ellison Syndrome', definition: 'A rare condition where tumors (gastrinomas) cause excessive gastric acid production, requiring high-dose PPI therapy.' },
        { term: 'Fundic Gland Polyps', definition: 'Benign gastric polyps occurring in 10-25% of long-term PPI users. Generally do not require treatment.' },
        { term: 'PPI Deprescribing', definition: 'The systematic process of tapering or discontinuing PPIs when no longer clearly indicated, using evidence-based step-down protocols.' }
      ]
    },
    level4: {
      title: 'Advanced Omeprazole Therapeutics and PPI Optimization',
      titleEs: 'Terapeutica Avanzada de Omeprazol y Optimizacion de IBP',
      content: `
This section addresses advanced PPI pharmacotherapy including refractory GERD management,
pharmacogenomic-guided dosing, complex drug interactions, and evidence-based deprescribing.

**Refractory GERD Management**
When patients fail standard PPI therapy:
1. Confirm adherence and correct timing (30-60 min before meals).
2. Assess for functional heartburn (non-acid symptoms) via ambulatory pH monitoring.
3. Consider CYP2C19 ultra-rapid metabolizer status — switch to PPI less dependent on CYP2C19
   (rabeprazole) or increase to twice-daily dosing.
4. Evaluate for eosinophilic esophagitis, pill esophagitis, or achalasia.
5. Consider surgical options (Nissen fundoplication, LINX device) for confirmed refractory GERD.

**Pharmacogenomic-Guided Therapy**
CYP2C19 genotype-guided PPI selection:
- *1/*1 (EM): Standard dosing appropriate.
- *1/*17 or *17/*17 (UM): Consider higher doses or rabeprazole (non-enzymatic conversion).
- *2 or *3 alleles (PM): Excellent acid suppression; monitor for drug interactions.
- CPIC guidelines suggest genotype-guided PPI selection for H. pylori eradication.

**Complex Drug Interactions**
- **Clopidogrel**: Omeprazole competitively inhibits CYP2C19, reducing conversion of clopidogrel
  to its active metabolite. FDA boxed warning advises avoiding concomitant use. Pantoprazole
  has weaker CYP2C19 inhibition and is preferred.
- **Methotrexate**: PPIs inhibit renal tubular secretion of methotrexate via inhibition of BCRP
  transporter. Risk of methotrexate toxicity, especially at high doses.
- **Tacrolimus**: PPIs increase tacrolimus bioavailability by 30-100% in CYP2C19 poor metabolizers.
- **Direct-acting antivirals**: Reduced absorption of ledipasvir, rilpivirine, and atazanavir
  due to increased gastric pH.

**Critical Illness Stress Ulcer Prophylaxis**
- IV PPI vs H2 blocker debate: PPIs reduce clinically significant GI bleeding but concerns about
  pneumonia and C. difficile risk.
- SUP-ICU trial: Pantoprazole vs placebo showed no difference in mortality or clinically important
  GI bleeding in general ICU patients.
- Current recommendation: Reserve PPI prophylaxis for highest-risk patients (coagulopathy,
  mechanical ventilation >48h, history of GI bleed).

**Barrett Esophagus and Cancer Prevention**
- PPIs may reduce progression from Barrett esophagus to esophageal adenocarcinoma.
- Observational data suggest 71% reduction in high-grade dysplasia/adenocarcinoma progression.
- AGA guidelines recommend indefinite PPI therapy for confirmed Barrett esophagus.
- Annual surveillance endoscopy for non-dysplastic Barrett; more frequent for dysplasia.

**Pediatric Considerations**
- FDA-approved for children ≥1 year for erosive esophagitis.
- Weight-based dosing: 5-10 kg: 5 mg; 10-20 kg: 10 mg; >20 kg: 20 mg.
- PPIs are significantly overprescribed in infants for physiologic reflux (GER) vs. pathologic
  GERD. Infant reflux typically resolves by 12-18 months without PPI therapy.

**Emerging Alternatives**
- **Vonoprazan**: Potassium-competitive acid blocker (P-CAB) that does not require acid activation.
  Faster onset, more consistent acid suppression, not dependent on CYP2C19. Available in Japan
  and increasingly studied globally.
- **Tegoprazan**: Another P-CAB with sustained acid suppression.
- These agents may eventually replace PPIs for specific indications.
      `,
      clinicalNotes: [
        'Refractory GERD workup should include adherence assessment, timing verification, ambulatory pH monitoring, and consideration of CYP2C19 genotype.',
        'The FDA boxed warning on omeprazole/clopidogrel interaction led to pantoprazole becoming the preferred PPI for patients on dual antiplatelet therapy.',
        'Stress ulcer prophylaxis with PPIs should be limited to highest-risk ICU patients based on SUP-ICU trial evidence.',
        'Barrett esophagus is a clear indication for long-term PPI therapy, as observational data suggest cancer risk reduction.',
        'PPI overprescription in infants for physiologic reflux is a significant healthcare quality concern.',
        'Vonoprazan and other P-CABs represent a paradigm shift, offering CYP2C19-independent acid suppression.'
      ],
      keyTerms: [
        { term: 'Vonoprazan', definition: 'A potassium-competitive acid blocker (P-CAB) that does not require acid activation, offering faster and more consistent acid suppression than PPIs.' },
        { term: 'CPIC Guidelines', definition: 'Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19-guided PPI selection, particularly relevant for H. pylori eradication.' },
        { term: 'Barrett Esophagus', definition: 'Intestinal metaplasia of the esophageal lining caused by chronic acid exposure. Precancerous condition requiring indefinite PPI therapy.' },
        { term: 'SUP-ICU Trial', definition: 'Stress Ulcer Prophylaxis in the Intensive Care Unit trial — showed no mortality benefit of pantoprazole vs placebo in general ICU patients.' },
        { term: 'BCRP Transporter', definition: 'Breast cancer resistance protein — a transporter inhibited by PPIs that mediates methotrexate renal excretion.' },
        { term: 'Potassium-Competitive Acid Blocker (P-CAB)', definition: 'A new class of acid suppressants that reversibly block H+/K+ ATPase without requiring acid activation, overcoming PPI limitations.' }
      ]
    },
    level5: {
      title: 'Omeprazole: Expert-Level Pharmacotherapeutic Analysis',
      titleEs: 'Omeprazol: Analisis Farmacoterapeutico de Nivel Experto',
      content: `
This expert analysis examines the molecular pharmacology, translational science, and evolving
therapeutic landscape of proton pump inhibition.

**Molecular Pharmacology: Covalent Inhibition**
Omeprazole's mechanism represents a classic example of mechanism-based (suicide) inhibition:
1. The acid-labile sulfinyl group undergoes protonation in parietal cell canaliculi (pH ~1).
2. Protonated omeprazole undergoes intramolecular rearrangement to form a tetracyclic sulfenamide.
3. The sulfenamide reacts with accessible cysteine residues on the luminal face of H+/K+ ATPase.
4. Cys813 binding causes conformational change blocking K+ access to the enzyme.
5. Cys822 binding provides additional stabilization of the inhibitory complex.
6. Duration of inhibition depends on pump turnover (~18% new pumps synthesized daily, achieving
   steady-state inhibition after 3-5 days of once-daily dosing).

**Enteric Coating and Formulation Science**
- Omeprazole degradation in gastric acid necessitates enteric coating (dissolves at pH >6).
- Multiple Unit Pellet System (MUPS): Contains hundreds of enteric-coated pellets for more
  reliable absorption than single-unit capsules.
- Omeprazole/sodium bicarbonate (Zegerid): Immediate-release formulation using bicarbonate
  buffer to protect from gastric acid, enabling nighttime dosing effectiveness.
- Delayed-release omeprazole suspension: Compounded for patients unable to swallow capsules.

**Nocturnal Acid Breakthrough**
Despite standard morning PPI dosing, 70-80% of patients experience gastric pH <4 for >1 hour
overnight. This is clinically relevant because:
- Parietal cells regenerate proton pumps overnight.
- Morning PPI dose cannot reach these newly synthesized pumps.
- Management: Bedtime H2 blocker (famotidine 20-40 mg) — though tachyphylaxis occurs within
  1-2 weeks. Alternatively, split PPI dosing (morning and evening before meals).
- P-CABs like vonoprazan may address this limitation through reversible, non-covalent binding.

**Microbiome Impact**
PPI-induced acid suppression has profound effects on the gastrointestinal microbiome:
- Increased oral bacterial colonization of the stomach and small intestine.
- Reduced microbial diversity in the distal gut.
- Enrichment of Enterococcus, Streptococcus, and Staphylococcus species.
- Depletion of Bifidobacterium and other commensal organisms.
- Increased susceptibility to C. difficile colonization and infection.
- Potential contribution to small intestinal bacterial overgrowth (SIBO).

**Neuroendocrine Effects**
Chronic acid suppression triggers compensatory hypergastrinemia:
- Gastrin levels increase 2-3 fold with standard PPI dosing.
- Hypergastrinemia stimulates enterochromaffin-like (ECL) cell hyperplasia.
- In rodents: ECL hyperplasia progresses to carcinoid tumors with lifelong PPI exposure.
- In humans: ECL hyperplasia is common but progression to neoplasia has not been demonstrated
  in >30 years of clinical use. However, very-long-term (>15 years) safety data are limited.

**Global Overprescription**
PPI overprescription represents a significant healthcare quality and cost issue:
- Estimated 25-70% of PPI prescriptions lack a clear evidence-based indication.
- Annual cost burden: Billions of dollars globally when accounting for unnecessary prescriptions
  and downstream complications.
- Deprescribing initiatives have demonstrated safe PPI discontinuation in 50-80% of patients
  on long-term therapy without clear indication.
- Barriers to deprescribing: Patient anxiety, symptom rebound, physician inertia, and lack of
  systematic review processes.
      `,
      clinicalNotes: [
        'Omeprazole suicide inhibition mechanism means clinical effect duration (24h+) far exceeds plasma half-life (0.5-1h), driven by pump turnover kinetics.',
        'Nocturnal acid breakthrough affects 70-80% of patients on morning PPI and may require split dosing or bedtime H2 blocker supplementation.',
        'PPI-induced microbiome disruption extends beyond C. difficile risk to include SIBO, reduced diversity, and potential systemic immunologic effects.',
        'Compensatory hypergastrinemia and ECL hyperplasia during chronic PPI use have not progressed to neoplasia in humans despite theoretical rodent concerns.',
        'Up to 70% of PPI prescriptions may lack clear indication — systematic deprescribing programs safely discontinue therapy in the majority of these patients.',
        'P-CABs (vonoprazan) address fundamental PPI limitations: acid activation requirement, delayed onset, CYP2C19 dependence, and nocturnal acid breakthrough.'
      ],
      keyTerms: [
        { term: 'Mechanism-Based Inhibition', definition: 'Also called suicide inhibition — the drug is activated by the target enzyme to form a covalent inhibitory complex, as omeprazole does with H+/K+ ATPase.' },
        { term: 'Nocturnal Acid Breakthrough', definition: 'Gastric pH <4 for >1 hour overnight despite standard PPI dosing, affecting 70-80% of patients due to overnight pump regeneration.' },
        { term: 'ECL Cell Hyperplasia', definition: 'Proliferation of enterochromaffin-like cells in response to hypergastrinemia during chronic PPI use. Common in humans but has not progressed to neoplasia.' },
        { term: 'MUPS (Multiple Unit Pellet System)', definition: 'A pharmaceutical formulation containing hundreds of enteric-coated pellets for more reliable and consistent drug absorption.' },
        { term: 'Hypergastrinemia', definition: 'Elevated gastrin levels occurring as a compensatory response to chronic acid suppression, driving 2-3 fold increases during PPI therapy.' },
        { term: 'Small Intestinal Bacterial Overgrowth (SIBO)', definition: 'Excessive bacterial colonization of the small intestine, potentially facilitated by PPI-induced reduction in the gastric acid barrier.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Omeprazole',
      url: 'https://medlineplus.gov/druginfo/meds/a693050.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Prilosec (Omeprazole) Drug Label',
      url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/019810s096lbl.pdf',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-ibuprofen', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-gerd', type: 'topic', relationship: 'parent' }
  ],
  tags: ['omeprazole', 'proton-pump-inhibitor', 'ppi', 'gerd', 'acid-reflux', 'stomach-ulcer', 'heartburn'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
