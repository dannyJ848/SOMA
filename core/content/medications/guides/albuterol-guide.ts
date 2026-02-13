import { EducationalContent } from '../../types';

export const albuterolGuideContent: EducationalContent = {
  id: 'topic-medication-albuterol',
  type: 'topic',
  name: 'Albuterol Guide',
  nameEs: 'Guia de Albuterol',
  levels: {
    level1: {
      title: 'Albuterol: Opening Your Airways When You Cannot Breathe',
      titleEs: 'Albuterol: Abriendo Sus Vias Respiratorias Cuando No Puede Respirar',
      content: `
Albuterol is a medicine that opens up your airways quickly when you have trouble breathing. It is most
commonly used as an inhaler for asthma and other breathing problems. It works within minutes.

**How to Use Your Albuterol Inhaler**
- Shake the inhaler well before each use.
- Breathe out completely, then put the mouthpiece in your mouth.
- Press the inhaler and breathe in slowly and deeply at the same time.
- Hold your breath for 10 seconds, then breathe out slowly.
- If you need a second puff, wait about 1 minute between puffs.
- Rinse your mouth with water after using.
- The usual dose is 1-2 puffs every 4-6 hours as needed.

**When to Use Albuterol**
- When you feel wheezing, chest tightness, coughing, or shortness of breath.
- Before exercise if your doctor recommends it (to prevent exercise-induced symptoms).
- During an asthma attack.
- Albuterol is a RESCUE medicine — use it when you need quick relief.

**Common Side Effects**
- Shaky or jittery feeling (tremor). - Fast heartbeat. - Nervousness. - Headache.
- These side effects usually go away quickly and get better with regular use.

**Important Warnings**
- If you use your rescue inhaler more than 2 times per week (not counting exercise), your asthma
  may not be well controlled. Talk to your doctor about a daily maintenance medicine.
- Keep track of how many puffs are left. Replace your inhaler before it runs out.
- Do not use more puffs than your doctor recommended. Too much albuterol can cause dangerous
  heart rhythm problems.
- If your breathing does not improve or gets worse after using albuterol, call 911.

**Tips for Success**
- Always carry your rescue inhaler with you. - Use a spacer if your doctor recommends one — it helps
  more medicine reach your lungs. - Keep your inhaler at room temperature. - Clean the mouthpiece weekly.
      `,
      patientCounselingPoints: [
        'Shake the inhaler well before each use and use a spacer if recommended for better medicine delivery.',
        'Albuterol is a RESCUE medicine for quick relief — if you need it more than twice a week, talk to your doctor about a daily controller.',
        'Hold your breath for 10 seconds after inhaling to let the medicine settle in your lungs.',
        'Keep track of how many doses are left in your inhaler and get a refill before it runs out.',
        'If albuterol does not relieve your symptoms or you need it more often than usual, seek medical attention.',
        'Always carry your rescue inhaler with you, especially during exercise or in cold weather.'
      ],
      keyTerms: [
        { term: 'Rescue Inhaler', definition: 'A fast-acting inhaler like albuterol used for quick relief during breathing problems. Not a daily maintenance medicine.' },
        { term: 'Asthma', definition: 'A condition where your airways become narrow and swollen, making it hard to breathe. Albuterol opens these airways.' },
        { term: 'Bronchospasm', definition: 'When the muscles around your airways tighten suddenly, making it hard to breathe. Albuterol relaxes these muscles.' },
        { term: 'Spacer', definition: 'A tube that attaches to your inhaler and helps more medicine reach your lungs instead of staying in your mouth.' },
        { term: 'Maintenance Medicine', definition: 'A daily medicine that prevents asthma symptoms. Used alongside your rescue inhaler, not instead of it.' }
      ]
    },
    level2: {
      title: 'Understanding Albuterol: A Short-Acting Bronchodilator',
      titleEs: 'Entendiendo el Albuterol: Un Broncodilatador de Accion Corta',
      content: `
Albuterol (also known as salbutamol outside the US) is a short-acting beta-2 agonist (SABA). It is
the most commonly used rescue inhaler and works by relaxing the muscles around your airways.

**How Albuterol Works**
Your airways are surrounded by smooth muscle. In asthma or COPD, this muscle can tighten suddenly
(bronchospasm), narrowing the airways. Albuterol stimulates beta-2 receptors on these muscles:
1. Beta-2 receptors are activated by albuterol.
2. This triggers a chemical chain that relaxes the smooth muscle.
3. The airways open wider (bronchodilation).
4. Air can flow in and out more easily.
5. Relief begins within 5-15 minutes and lasts 4-6 hours.

**Types of Albuterol Delivery**
- **Metered-dose inhaler (MDI)**: Most common. Uses propellant to deliver measured puffs. Works best with a spacer.
- **Dry powder inhaler (DPI)**: Breath-activated, no propellant needed. Requires strong inhalation.
- **Nebulizer solution**: Liquid turned into a fine mist by a machine. Good for young children, elderly, or severe attacks.

**Proper Inhaler Technique (MDI)**
Poor inhaler technique is the number one reason asthma medicines do not work:
1. Remove cap and shake vigorously for 5 seconds.
2. Breathe out completely away from the inhaler.
3. Place mouthpiece between teeth, lips sealed around it.
4. Start breathing in slowly, press the canister once, continue slow deep breath (3-5 seconds).
5. Hold breath for 10 seconds.
6. Wait 1 minute before second puff if needed.
7. Rinse mouth with water (especially if using spacer with ICS).

**Rescue vs. Maintenance: Understanding the Difference**
- **Rescue (SABA like albuterol)**: Fast-acting, used only when needed. If used >2x/week, asthma
  is not well controlled.
- **Controller/Maintenance**: Daily medicines like inhaled corticosteroids (ICS) that prevent inflammation
  and symptoms. Must be used every day even when feeling well.
- GINA guidelines now recommend ICS-formoterol as both rescue and maintenance in many patients.

**When to Seek Emergency Care**
- Albuterol does not improve symptoms within 15-20 minutes.
- You need albuterol every 2-4 hours or more.
- You cannot complete a sentence without stopping to breathe.
- Your fingernails or lips turn blue.
- Peak flow drops below 50% of your personal best.

**Side Effects and Management**
Common effects (from systemic beta-2 stimulation):
- Tremor (shakiness): Usually mild, improves over time.
- Tachycardia (fast heartbeat): Usually not dangerous.
- Nervousness/restlessness. - Headache. - Throat irritation.
- Hypokalemia: Rare with inhaled use but possible with repeated/high doses.
      `,
      patientCounselingPoints: [
        'Poor inhaler technique is the number one reason asthma medicines fail. Ask your pharmacist to demonstrate proper use.',
        'Using a spacer with your MDI significantly improves medicine delivery to the lungs (from ~10% to ~20% of dose).',
        'Needing your rescue inhaler more than twice per week indicates poorly controlled asthma requiring daily controller therapy.',
        'GINA guidelines now recommend ICS-formoterol as preferred rescue therapy in many patients — ask your doctor about this approach.',
        'Prime a new inhaler (4 puffs into the air) before first use or if not used for 2+ weeks.',
        'During an asthma emergency, you can use up to 4-8 puffs of albuterol every 20 minutes while waiting for help.'
      ],
      keyTerms: [
        { term: 'Beta-2 Agonist', definition: 'A medicine that stimulates beta-2 receptors on airway muscles, causing them to relax. Albuterol is a short-acting beta-2 agonist (SABA).' },
        { term: 'Bronchodilation', definition: 'The widening of airways when smooth muscles relax. Albuterol causes bronchodilation within 5-15 minutes.' },
        { term: 'Metered-Dose Inhaler (MDI)', definition: 'The most common inhaler type. Delivers a measured amount of medicine as a spray using a propellant.' },
        { term: 'Nebulizer', definition: 'A machine that turns liquid medicine into a fine mist you breathe through a mask or mouthpiece.' },
        { term: 'GINA Guidelines', definition: 'Global Initiative for Asthma — the leading international asthma treatment guidelines. Now recommend ICS-containing rescue therapy.' },
        { term: 'Inhaled Corticosteroid (ICS)', definition: 'Daily controller medicine that reduces airway inflammation. The foundation of asthma treatment.' }
      ]
    },
    level3: {
      title: 'Albuterol Pharmacology and Respiratory Therapeutics',
      titleEs: 'Farmacologia del Albuterol y Terapeutica Respiratoria',
      content: `
Albuterol (salbutamol) is the prototypical short-acting beta-2 adrenergic agonist. As the most
prescribed bronchodilator worldwide, it serves as both rescue therapy and as a diagnostic tool in
pulmonary function testing.

**Mechanism of Action**
Albuterol selectively stimulates beta-2 adrenergic receptors on airway smooth muscle:
1. Binding activates adenylyl cyclase via stimulatory Gs protein.
2. Increased intracellular cyclic AMP (cAMP) activates protein kinase A (PKA).
3. PKA phosphorylates multiple targets: myosin light chain kinase (inactivation reduces contractile
   force), Ca2+ channels (reduced intracellular Ca2+), and K+ channels (membrane hyperpolarization).
4. Net effect: Smooth muscle relaxation and bronchodilation.
5. Additional effects: Inhibition of mast cell mediator release, increased mucociliary clearance,
   reduced microvascular permeability.

**Pharmacokinetics**
- **Onset**: Inhaled: 5-15 minutes. Oral: 30 minutes.
- **Peak effect**: 1-2 hours (inhaled). - **Duration**: 4-6 hours.
- **Bioavailability**: Inhaled MDI ~10-20% reaches lower airways (remainder deposited in oropharynx/swallowed).
- **Metabolism**: Hepatic sulfation to inactive albuterol 4'-O-sulfate. Pulmonary metabolism also significant.
- **Elimination**: Renal (primarily as metabolites). Half-life: 4-6 hours.
- **Stereochemistry**: Racemic mixture of R-albuterol (levalbuterol, active) and S-albuterol.

**R-Albuterol vs. S-Albuterol**
- R-albuterol: Pharmacologically active enantiomer with 100-fold greater beta-2 receptor affinity.
- S-albuterol: Initially considered inert, but evidence suggests it may promote inflammation,
  bronchial hyperresponsiveness, and reduce the effectiveness of R-albuterol.
- Levalbuterol (Xopenex): Pure R-enantiomer. Theoretically fewer side effects and better efficacy,
  though clinical superiority over racemic albuterol is debated. Significantly more expensive.

**Paradigm Shift: SABA-Only Rescue to ICS-Containing Rescue**
GINA 2019 landmark recommendation:
- Previous: SABA alone as rescue for mild intermittent asthma.
- Current: ICS-formoterol as preferred rescue (as-needed low-dose ICS-formoterol).
- Rationale: SABA-only treatment addresses bronchospasm but NOT underlying inflammation. Even
  mild asthma has an inflammatory component. Studies (SYGMA-1, SYGMA-2, Novel START) demonstrated
  that as-needed ICS-formoterol provides superior exacerbation prevention compared to SABA alone.
- SABA overuse (>3 canisters/year) is associated with increased exacerbations and mortality.

**Beta-2 Receptor Desensitization**
Regular SABA use leads to receptor downregulation:
- Chronic beta-2 stimulation causes GRK-mediated receptor phosphorylation and beta-arrestin binding.
- Receptor internalization reduces surface receptor density.
- Clinical consequence: Tolerance to bronchodilator effect with regular (vs. as-needed) use.
- ICS prevent and reverse beta-2 receptor downregulation by upregulating receptor gene transcription.

**Delivery Device Selection**
- MDI + spacer: Most evidence-based for mild-moderate exacerbations. Non-inferior to nebulizer in
  most clinical settings. More cost-effective and portable.
- Nebulizer: Preferred for severe exacerbations (tidal breathing, no coordination needed),
  ICU patients, and young children (<4 years) unable to use MDI/spacer.
- DPI: Adequate inspiratory flow required (>30 L/min). Not suitable during acute exacerbations.
      `,
      keyTerms: [
        { term: 'Cyclic AMP (cAMP)', definition: 'The intracellular second messenger activated by albuterol binding to beta-2 receptors. Mediates smooth muscle relaxation via protein kinase A.' },
        { term: 'Beta-2 Receptor Desensitization', definition: 'Downregulation of beta-2 receptors with chronic SABA use, leading to reduced bronchodilator response. Reversed by ICS therapy.' },
        { term: 'Levalbuterol', definition: 'The pure R-enantiomer of albuterol. Theoretically fewer side effects but clinical superiority over racemic albuterol is debated.' },
        { term: 'SYGMA Trials', definition: 'Studies demonstrating superiority of as-needed ICS-formoterol over SABA alone for asthma exacerbation prevention, supporting the GINA paradigm shift.' },
        { term: 'GRK-Mediated Desensitization', definition: 'G-protein-coupled receptor kinase phosphorylation of beta-2 receptors during chronic stimulation, leading to receptor internalization and tolerance.' },
        { term: 'Mucociliary Clearance', definition: 'The airways self-cleaning mechanism. Albuterol enhances ciliary beat frequency, improving mucus clearance from the respiratory tract.' }
      ]
    },
    level4: {
      title: 'Advanced Albuterol Therapeutics and Respiratory Care',
      titleEs: 'Terapeutica Avanzada de Albuterol y Cuidado Respiratorio',
      content: `
This section covers advanced clinical applications, dose optimization, and the evolving role
of SABA therapy within contemporary asthma and COPD management frameworks.

**Acute Exacerbation Dosing**
Standard emergency dosing protocols:
- **Mild-moderate**: MDI + spacer: 4-8 puffs every 20 minutes for 3 doses, then every 1-4 hours as needed.
- **Severe**: Continuous nebulization 10-15 mg/hour or 5 mg nebulized every 20 minutes.
- **Critical/ICU**: IV terbutaline may be considered if inhaled therapy is inadequate.
- Adding ipratropium bromide (anticholinergic) to albuterol provides synergistic bronchodilation
  in moderate-severe exacerbations but not in mild attacks.

**SABA Overreliance: Risk Signal**
Emerging evidence links SABA overuse to adverse outcomes:
- >3 SABA canisters/year: Associated with increased exacerbation risk.
- >12 canisters/year: 2-fold increased mortality risk.
- SABA overuse is a surrogate marker for poor asthma control and inadequate anti-inflammatory therapy.
- Clinical implication: Dispensing data should trigger review of controller therapy.

**Hyperkalemia and Albuterol**
Albuterol drives potassium into cells via beta-2 receptor stimulation of Na+/K+ ATPase:
- Nebulized albuterol (10-20 mg) reduces serum K+ by 0.5-1.0 mEq/L within 30 minutes.
- Used as emergency treatment for hyperkalemia alongside insulin/glucose, calcium, and kayexalate.
- Effect is temporary (2-4 hours) and should be combined with potassium removal strategies.
- Dose: 10-20 mg nebulized (4-8x the bronchodilator dose). Tachycardia is expected.

**Albuterol in Obstetrics**
- Used off-label as tocolytic (inhibits uterine contractions in preterm labor).
- Beta-2 receptors on uterine smooth muscle mediate relaxation.
- IV terbutaline preferred over albuterol for tocolysis, though both are second-line to nifedipine
  and atosiban due to maternal cardiovascular side effects.
- Nebulized albuterol for asthma during pregnancy is safe and recommended.

**Albuterol in Pediatrics**
- Viral-induced wheeze in infants: SABA response is variable. AAP bronchiolitis guidelines recommend
  against routine albuterol use in infants with first-episode bronchiolitis.
- Asthma in children >5 years: Similar to adult management. MDI + spacer + mask preferred
  over nebulizer for mild-moderate exacerbations.
- Exercise-induced bronchoconstriction: 2 puffs 15-30 minutes pre-exercise. If daily pre-exercise
  SABA needed, consider daily controller therapy.

**Future of SABA Therapy**
The standalone SABA inhaler may become obsolete for asthma:
- GINA no longer recommends SABA-only treatment for any asthma patient.
- Combination SABA-ICS inhalers are in development and regulatory review.
- AIR (albuterol-budesonide) combination rescue inhaler studies show superior exacerbation
  prevention compared to SABA alone.
- Paradigm: Every rescue puff delivers anti-inflammatory therapy, preventing reliance on
  bronchodilation alone.
      `,
      clinicalNotes: [
        'MDI + spacer is non-inferior to nebulizer for mild-moderate exacerbations and should be offered as first-line delivery method.',
        'SABA overuse (>3 canisters/year) is an independent risk factor for exacerbations and mortality — dispensing data should trigger clinical review.',
        'Nebulized albuterol (10-20 mg) is an effective temporary treatment for hyperkalemia, reducing K+ by 0.5-1.0 mEq/L within 30 minutes.',
        'AAP bronchiolitis guidelines recommend against routine albuterol in infants with first-episode viral bronchiolitis due to variable response.',
        'GINA no longer recommends SABA-only treatment for any asthma severity — combination SABA-ICS rescue inhalers represent the future of rescue therapy.',
        'Adding ipratropium to albuterol in severe exacerbations provides synergistic benefit, but this combination is unnecessary for mild attacks.'
      ],
      keyTerms: [
        { term: 'SABA Overuse', definition: 'Use of >3 SABA canisters/year, associated with increased exacerbation risk and mortality. Indicates inadequate anti-inflammatory controller therapy.' },
        { term: 'Continuous Nebulization', definition: 'Delivery of 10-15 mg/hour of albuterol via nebulizer for severe exacerbations unresponsive to intermittent dosing.' },
        { term: 'Na+/K+ ATPase Stimulation', definition: 'Albuterol beta-2 effect driving potassium intracellularly, exploited therapeutically for emergency hyperkalemia management.' },
        { term: 'AIR Combination Inhaler', definition: 'Albuterol-budesonide rescue inhaler under development, delivering anti-inflammatory therapy with every rescue puff.' },
        { term: 'Tocolysis', definition: 'Pharmacological inhibition of uterine contractions for preterm labor. Beta-2 agonists like albuterol are second-line agents.' },
        { term: 'Ipratropium', definition: 'An inhaled anticholinergic that provides synergistic bronchodilation when combined with albuterol in severe exacerbations.' }
      ]
    },
    level5: {
      title: 'Albuterol: Expert Pulmonary Pharmacotherapy Review',
      titleEs: 'Albuterol: Revision Experta de Farmacoterapia Pulmonar',
      content: `
This expert review addresses molecular receptor pharmacology, inhaler device science, translational
research, and the paradigm shift in rescue bronchodilator therapy.

**Beta-2 Adrenergic Receptor Molecular Biology**
The beta-2 receptor (ADRB2) is a 413-amino acid GPCR:
- Coupling: Primarily Gs-coupled, activating adenylyl cyclase. Sustained stimulation leads to
  Gi coupling (reduced cAMP) and beta-arrestin signaling (receptor internalization, MAPK activation).
- Biased agonism: Full agonists (isoproterenol) vs. partial agonists (albuterol) differentially
  activate G-protein vs. beta-arrestin pathways. This concept drives development of novel
  bronchodilators with optimized signaling profiles.
- Receptor polymorphisms: Arg16Gly (rs1042713) and Glu27Gln (rs1042714) variants influence
  receptor downregulation kinetics and clinical response.

**Pharmacogenomics of Beta-2 Response**
ADRB2 polymorphisms significantly affect albuterol response:
- **Arg16Gly**: Arg/Arg genotype associated with more rapid receptor downregulation, potentially
  reduced bronchodilator response with regular use. Gly/Gly genotype: less downregulation but
  greater response to acute administration.
- **Glu27Gln**: Gln27 variant is partially protective against agonist-induced downregulation.
- BARGE trial: Genotype-stratified analysis of regular vs. as-needed albuterol showed Arg/Arg
  patients had worse outcomes with regular SABA use, supporting the as-needed approach.
- Clinical implementation of ADRB2 genotyping is not yet standard but may guide individualized
  SABA vs. ICS-formoterol rescue selection.

**Aerosol Physics and Deposition**
Optimal drug delivery depends on particle aerodynamics:
- **MMAD (mass median aerodynamic diameter)**: Optimal 1-5 mcm for lower airway deposition.
  <1 mcm: exhaled without deposition. >5 mcm: oropharyngeal impaction.
- **MDI**: MMAD 2-4 mcm with HFA propellant. ~10-20% lung deposition without spacer; ~20-40% with spacer.
- **DPI**: Drug delivery depends on inspiratory flow rate. Minimum 30 L/min for most devices;
  60+ L/min optimal for some formulations.
- **Nebulizer**: MMAD 2-5 mcm depending on device. 10-15% lung deposition with standard jet
  nebulizer; higher with vibrating mesh nebulizers.
- **Smart inhalers**: Electronic monitoring devices tracking inhaler use, technique, and adherence.
  Proven to improve outcomes in clinical trials.

**Environmental Impact of Inhalers**
MDIs use hydrofluoroalkane (HFA) propellants with significant carbon footprint:
- Each MDI canister: ~20-36 kg CO2 equivalent over its lifetime.
- DPIs have ~10-20x lower carbon footprint than MDIs.
- Global transition from MDI to DPI (where clinically appropriate) is a growing environmental
  health initiative.
- UK NHS commitment to reduce inhaler-related carbon footprint by 50% by 2028.

**The End of SABA Monotherapy**
The GINA 2019 paradigm shift represents the most significant change in asthma management in decades:
- Evidence base: SYGMA-1, SYGMA-2, Novel START, PRACTICAL trials demonstrated as-needed
  ICS-formoterol reduces severe exacerbations by 60-65% vs. SABA alone.
- Mechanism: Even mild, intermittent asthma has an eosinophilic inflammatory component.
  SABA addresses bronchospasm only; inflammation continues unchecked.
- Analogy: Treating asthma with SABA alone is like treating hypertension only during hypertensive
  crises while ignoring daily blood pressure control.
- Regulatory lag: US FDA has not yet approved ICS-formoterol as rescue-only therapy, though
  clinical practice is shifting. Albuterol-budesonide (Airsupra) combination received FDA approval
  in 2023 as an as-needed rescue inhaler.
      `,
      clinicalNotes: [
        'ADRB2 Arg16Gly polymorphism influences albuterol response: Arg/Arg genotype shows greater downregulation with regular SABA use (BARGE trial evidence).',
        'Biased agonism at the beta-2 receptor is a frontier for developing novel bronchodilators with optimized G-protein vs. beta-arrestin signaling profiles.',
        'Smart inhalers with electronic monitoring demonstrate significant improvement in adherence and outcomes — they represent the future of inhaler therapy.',
        'MDI-to-DPI transition for appropriate patients reduces carbon footprint by 10-20x, aligning respiratory care with environmental sustainability.',
        'The Airsupra (albuterol-budesonide) FDA approval in 2023 marks the first regulatory acknowledgment of the SABA monotherapy obsolescence paradigm.',
        'Optimal aerosol particle size (MMAD 1-5 mcm) determines the balance between lung deposition and oropharyngeal impaction, affecting clinical outcomes.'
      ],
      keyTerms: [
        { term: 'ADRB2 Polymorphism', definition: 'Genetic variants in the beta-2 adrenergic receptor gene that influence receptor downregulation kinetics and clinical response to albuterol.' },
        { term: 'Biased Agonism', definition: 'The ability of different ligands to preferentially activate G-protein vs. beta-arrestin signaling at the same receptor, driving novel drug development.' },
        { term: 'MMAD', definition: 'Mass Median Aerodynamic Diameter — the particle size parameter determining inhaled drug deposition. Optimal 1-5 mcm for lower airway delivery.' },
        { term: 'Smart Inhaler', definition: 'Electronic device attached to an inhaler that monitors usage, technique, and adherence, with proven clinical outcome improvement.' },
        { term: 'Airsupra', definition: 'FDA-approved albuterol-budesonide combination rescue inhaler (2023), marking the transition from SABA monotherapy to ICS-containing rescue.' },
        { term: 'HFA Propellant Carbon Footprint', definition: 'Hydrofluoroalkane propellants in MDIs contribute 20-36 kg CO2 equivalent per canister, driving environmental sustainability initiatives.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Albuterol Oral Inhalation',
      url: 'https://medlineplus.gov/druginfo/meds/a682145.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Albuterol Sulfate Inhalation Aerosol',
      url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/020983s035lbl.pdf',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-condition-asthma', type: 'topic', relationship: 'parent' },
    { id: 'topic-condition-copd', type: 'topic', relationship: 'related' }
  ],
  tags: ['albuterol', 'salbutamol', 'inhaler', 'asthma', 'bronchodilator', 'saba', 'rescue-inhaler', 'respiratory'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
