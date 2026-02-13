/**
 * Labor Induction
 *
 * Comprehensive coverage of labor induction including indications,
 * methods, cervical ripening, and management protocols.
 */

import { EducationalContent } from '../../../types';

export const laborInduction: EducationalContent = {
  id: 'obgyn-labor-induction',
  type: 'process',
  name: 'Labor Induction',
  alternateNames: ['Induction of Labor', 'IOL', 'Induced Labor'],

  levels: {
    1: {
      level: 1,
      summary: 'Labor induction is when doctors help start labor before it begins on its own.',
      explanation: `Sometimes labor needs to be started by the doctor instead of waiting for it to happen naturally.

**Why might labor be induced?**
- The baby is overdue (past 40 weeks)
- The mother has a health condition
- The water breaks but contractions do not start
- There are concerns about the baby's health

**How is labor induced?**
- Medicine can be given to help the cervix soften and open
- A balloon can be placed in the cervix to help it open
- The water bag can be broken
- Medicine (Pitocin) through an IV makes contractions start

**Is it safe?**
- Yes, when done for the right reasons
- The doctor monitors the baby closely
- It is very common (about 1 in 4 births are induced)`,
      keyTerms: [
        { term: 'induction', definition: 'Starting labor with medicine or other methods before it begins on its own' },
        { term: 'Pitocin', definition: 'A medicine given through an IV to start contractions' },
        { term: 'overdue', definition: 'When pregnancy goes past 40 weeks' },
      ],
      analogies: [
        'Inducing labor is like giving the starting signal at a race when the runners are ready but have not started on their own.',
      ],
      examples: [
        'A woman at 41 weeks might have her labor induced because waiting longer increases risks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Labor induction involves medical interventions to stimulate uterine contractions and cervical changes before spontaneous labor onset, used when benefits of delivery outweigh risks of continuing pregnancy.',
      explanation: `**Indications for Induction:**

*Maternal:*
- Preeclampsia/gestational hypertension
- Diabetes (gestational or pregestational)
- Chorioamnionitis
- Prelabor rupture of membranes (PROM)

*Fetal:*
- Post-term pregnancy (≥42 weeks)
- Fetal growth restriction
- Oligohydramnios
- Non-reassuring fetal testing

*Elective:*
- Term pregnancy (≥39 weeks) with patient preference

**Methods of Induction:**

*Cervical Ripening (softening the cervix):*
- Prostaglandins (misoprostol, dinoprostone)
- Mechanical (Foley catheter, balloon)

*Contractions:*
- Oxytocin (Pitocin) IV infusion
- Amniotomy (breaking the water)

**Bishop Score:**
A score that predicts how successful induction will be:
- Cervical dilation, effacement, station, consistency, position
- Score ≥6: Favorable; higher chance of vaginal delivery
- Score <6: May need cervical ripening first`,
      keyTerms: [
        { term: 'Bishop score', definition: 'A scoring system (0-13) that predicts likelihood of successful vaginal delivery after induction' },
        { term: 'cervical ripening', definition: 'Process of softening and preparing the cervix before inducing contractions' },
        { term: 'amniotomy', definition: 'Artificially rupturing the amniotic membranes (breaking the water)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Labor induction utilizes pharmacological and mechanical methods for cervical ripening and uterine stimulation, with method selection based on Bishop score, gestational age, and clinical factors.',
      explanation: `**Bishop Score Components:**

| Factor | 0 | 1 | 2 | 3 |
|--------|---|---|---|---|
| Dilation (cm) | Closed | 1-2 | 3-4 | ≥5 |
| Effacement (%) | 0-30 | 40-50 | 60-70 | ≥80 |
| Station | -3 | -2 | -1,0 | +1,+2 |
| Consistency | Firm | Medium | Soft | - |
| Position | Posterior | Mid | Anterior | - |

**Cervical Ripening Agents:**

*Prostaglandins:*
- Misoprostol (Cytotec): 25-50 mcg vaginal/buccal q3-6h
- Dinoprostone: Cervidil insert (10 mg) or Prepidil gel (0.5 mg)
- Contraindicated with prior cesarean (uterine rupture risk)

*Mechanical Methods:*
- Foley catheter: 30-80 mL balloon placed transcervically
- Double-balloon device (Cook catheter)
- Safe with prior cesarean
- May be combined with prostaglandins

**Oxytocin Administration:**

*Protocols:*
- Low-dose: Start 1-2 mU/min, increase by 1-2 mU q30-40 min
- High-dose: Start 4-6 mU/min, increase by 4-6 mU q15-40 min
- Maximum dose: 20-40 mU/min (institution-dependent)

*Monitoring:*
- Continuous fetal heart rate monitoring
- Contraction frequency/duration
- Goal: 3-5 contractions per 10 minutes

**Amniotomy:**
- Artificial rupture of membranes
- May accelerate labor 1-2 hours
- Increases infection risk if prolonged
- Used alone or combined with oxytocin`,
      keyTerms: [
        { term: 'misoprostol', definition: 'Synthetic prostaglandin E1 analogue used for cervical ripening' },
        { term: 'Foley catheter', definition: 'Balloon catheter placed through cervix for mechanical ripening' },
        { term: 'tachysystole', definition: 'Excessive uterine contractions (>5 in 10 minutes); complication of induction' },
      ],
      clinicalNotes: 'Prostaglandins are generally contraindicated with prior cesarean due to increased uterine rupture risk. Mechanical methods (Foley) are preferred for TOLAC candidates. Misoprostol 25 mcg vaginal is preferred over higher doses to reduce hyperstimulation.',
    },
    4: {
      level: 4,
      summary: 'Labor induction requires individualized protocol selection based on cervical status, obstetric history, and clinical urgency, with careful monitoring for complications including tachysystole and failed induction.',
      explanation: `**Evidence-Based Indications:**

*Strong Indications (delivery recommended):*
- Preeclampsia with severe features
- PPROM at term
- Chorioamnionitis
- Placental abruption (stable)
- Fetal demise

*Moderate Indications (induction reasonable):*
- Post-term (≥41-42 weeks)
- Gestational diabetes (controlled)
- Chronic hypertension (controlled)
- Oligohydramnios
- IUGR with reassuring testing

*ARRIVE Trial:*
- Elective induction at 39 weeks vs. expectant management
- Primary cesarean: 18.6% vs. 22.2% (p<0.001)
- No increase in adverse neonatal outcomes
- Shifted practice toward earlier elective induction

**Protocol Selection Algorithm:**

*Unfavorable Cervix (Bishop <6):*
1. Prostaglandin if no prior cesarean
2. Mechanical ripening (Foley) if prior cesarean or preference
3. Combination approach may be more effective

*Favorable Cervix (Bishop ≥6):*
1. Oxytocin +/- amniotomy
2. Amniotomy alone (if contraindication to oxytocin)

**Failed Induction Definition:**

ACOG criteria:
- Requires: Ruptured membranes + ≥24 hours of oxytocin
- Failed to achieve active phase (≥6 cm dilation)
- Failed induction is cesarean indication

**Complications:**

*Tachysystole (>5 contractions/10 min):*
- Treatment: Reduce/stop oxytocin, terbutaline 0.25 mg SQ
- May cause fetal hypoxia, late decelerations

*Uterine Rupture:*
- Higher risk with prostaglandins + prior cesarean
- Signs: Fetal bradycardia, loss of station, pain
- Emergency cesarean required

*Cord Prolapse:*
- Risk with amniotomy and unengaged head
- Assess station before AROM
- Emergency delivery if occurs

*Failed Induction:*
- Risk factors: Nulliparity, BMI >30, unfavorable cervix
- Rate: 10-20% depending on population`,
      keyTerms: [
        { term: 'ARRIVE trial', definition: 'Landmark RCT showing elective induction at 39 weeks reduces cesarean rate in low-risk nulliparas' },
        { term: 'failed induction', definition: 'Inability to achieve active labor after ≥24 hours of oxytocin with ruptured membranes' },
        { term: 'uterine rupture', definition: 'Catastrophic tearing of uterus; higher risk with prostaglandin use after prior cesarean' },
      ],
      clinicalNotes: 'The distinction between "failed induction" and "labor arrest" is critical. Failed induction (never achieving active labor) requires adequate time and oxytocin. Labor arrest (after active labor achieved) has different diagnostic criteria.',
    },
    5: {
      level: 5,
      summary: 'Optimal induction management integrates current evidence on timing, method selection, and labor progress assessment while balancing maternal autonomy, resource utilization, and perinatal outcomes.',
      explanation: `**Current Controversies and Evidence:**

*Timing of Elective Induction:*
- ARRIVE trial: 39-week induction safe and potentially beneficial
- SWEPIS trial: 42 vs 43 weeks; earlier delivery reduced stillbirth
- Shared decision-making essential
- Consider patient values, logistics, and risk profile

*Outpatient Cervical Ripening:*
- Foley catheter placement with discharge
- Patient selection crucial (low-risk, close to hospital)
- May improve patient satisfaction and resource use
- Evidence base still developing

*Combination Ripening:*
- Foley + misoprostol vs. either alone
- Some evidence for shorter time to delivery
- May increase tachysystole
- Institution-specific protocols

**Specific Clinical Scenarios:**

*PROM at Term:*
- Immediate vs. expectant management
- TERMPROM trial: Immediate oxytocin reduces infection
- Wait up to 24 hours for spontaneous labor reasonable
- GBS status influences management

*TOLAC/Prior Cesarean:*
- Prostaglandins contraindicated
- Mechanical ripening safe
- Oxytocin induction acceptable
- Higher cesarean rate than spontaneous TOLAC
- Informed consent for VBAC vs. repeat cesarean

*Gestational Hypertension/Preeclampsia:*
- Induction at diagnosis if ≥37 weeks
- Severe features: Delivery regardless of gestational age
- Magnesium sulfate for seizure prophylaxis

*Fetal Growth Restriction:*
- Timing depends on severity and testing
- Severe early FGR: May delay to gain maturity
- Term FGR: Induction reasonable

**Quality Metrics and Outcomes:**

*Induction Outcomes to Track:*
- Cesarean rate by indication
- Time to delivery
- Tachysystole rate
- Chorioamnionitis rate
- Maternal satisfaction

*Protocol Standardization:*
- Reduces variation in care
- High-reliability organization principles
- Nurse-driven protocols improve efficiency
- Regular protocol review and update

**Communication and Shared Decision-Making:**

*Pre-Induction Counseling:*
- Indication and alternatives
- Expected timeline (often 12-24+ hours)
- Methods to be used
- Possibility of cesarean (varies by indication and parity)
- Pain management options
- Continuous monitoring requirements

*Managing Expectations:*
- Induction is often a marathon, not a sprint
- Patience in latent phase important
- Family should plan for extended stay
- Support person presence valuable`,
      keyTerms: [
        { term: 'TERMPROM trial', definition: 'Trial showing immediate induction reduces infection rates in term PROM' },
        { term: 'outpatient ripening', definition: 'Cervical ripening initiated in ambulatory setting for selected low-risk patients' },
        { term: 'nurse-driven protocol', definition: 'Standardized induction protocol allowing nursing management of oxytocin within parameters' },
      ],
      clinicalNotes: 'Post-ARRIVE, elective induction at 39 weeks is increasingly accepted for low-risk nulliparas. However, implementation requires careful patient selection, counseling, and resource availability. Not all patients will want induction, and shared decision-making remains paramount.',
    },
  },

  media: [
    {
      id: 'bishop-score-diagram',
      type: 'diagram',
      filename: 'bishop-score.svg',
      title: 'Bishop Score Assessment',
      description: 'Visual guide to Bishop score components and scoring',
    },
  ],

  citations: [
    {
      id: 'arrive-trial',
      type: 'article',
      title: 'Labor Induction versus Expectant Management in Low-Risk Nulliparous Women',
      source: 'New England Journal of Medicine',
      authors: ['Grobman WA', 'Rice MM', 'Reddy UM'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-overview', targetType: 'process', relationship: 'parent', label: 'Labor Overview' },
    { targetId: 'obgyn-labor-cesarean', targetType: 'process', relationship: 'related', label: 'Cesarean Delivery' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'labor', 'induction'],
    keywords: ['induction', 'Pitocin', 'oxytocin', 'cervical ripening', 'Bishop score'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
