import { EducationalContent } from '../../types';

export const laborManagement: EducationalContent = {
  id: 'obgyn-labor-management',
  type: 'topic',
  name: 'Labor and Delivery Management',
  nameEs: 'Manejo del Trabajo de Parto y Parto',
  alternateNames: ['Intrapartum Care', 'Labor Management'],
  levels: {
    1: {
      level: 1,
      summary: 'Labor is the process where the uterus contracts to push the baby out through the birth canal, typically happening around 40 weeks of pregnancy.',
      explanation:
        'When it is time for the baby to be born, the uterus (womb) starts squeezing in a pattern called contractions. ' +
        'These contractions slowly open the cervix (the bottom of the uterus) so the baby can come out. Labor has three stages: ' +
        'opening the cervix, pushing the baby out, and delivering the placenta (afterbirth). Doctors and nurses monitor ' +
        'mom and baby the whole time to make sure everything is going safely. If problems happen, they may need to help ' +
        'with tools or do a cesarean section (C-section), which is surgery to deliver the baby through the belly.',
      keyTerms: [
        { term: 'Contractions', definition: 'Regular squeezing of the uterus that opens the cervix and pushes the baby out' },
        { term: 'Cervix', definition: 'The lower, narrow part of the uterus that opens during labor' },
        { term: 'Cesarean section', definition: 'Surgery to deliver the baby through a cut in the mother\'s abdomen', pronunciation: 'seh-ZAIR-ee-un' },
      ],
      patientCounselingPoints: [
        'Go to the hospital when contractions are regular, about 5 minutes apart, for at least 1 hour.',
        'You can discuss pain relief options with your doctor, including epidurals.',
        'A birth plan is a guide, but flexibility is important for the safety of you and your baby.',
      ],
    },
    2: {
      level: 2,
      summary: 'Labor progresses through three stages with cervical dilation, fetal descent, and placental delivery, monitored via cervical exams and electronic fetal heart rate tracings.',
      explanation:
        '**Stages of Labor:**\n' +
        '- Stage 1 (Latent + Active): cervix dilates from 0 to 10 cm. Latent phase: 0-6 cm (slow, irregular contractions). Active phase: 6-10 cm (regular contractions q2-3 min)\n' +
        '- Stage 2: complete dilation to delivery of the baby. Active pushing.\n' +
        '- Stage 3: delivery of the placenta, usually within 30 minutes\n\n' +
        '**Fetal Monitoring:**\n' +
        '- External: tocodynamometer (contraction timing) + Doppler ultrasound (fetal heart rate)\n' +
        '- Internal: fetal scalp electrode (FSE) for precise heart rate; intrauterine pressure catheter (IUPC) for contraction strength\n\n' +
        '**Pain Management:**\n' +
        '- Epidural anesthesia: most common, catheter placed in lumbar epidural space\n' +
        '- IV opioids, nitrous oxide, non-pharmacologic methods (positioning, hydrotherapy)',
      keyTerms: [
        { term: 'Cervical dilation', definition: 'Opening of the cervix measured in centimeters, from 0 (closed) to 10 (fully dilated)' },
        { term: 'Epidural', definition: 'Regional anesthesia injected into the epidural space of the spine to numb the lower body during labor' },
        { term: 'Fetal heart rate tracing', definition: 'Continuous electronic recording of the baby\'s heart rate pattern during labor' },
      ],
    },
    3: {
      level: 3,
      summary: 'Intrapartum management requires systematic fetal heart rate interpretation using NICHD criteria, labor curve assessment, and evidence-based protocols for augmentation and operative delivery.',
      explanation:
        '**FHR Interpretation (NICHD):**\n' +
        '- Category I (Normal): baseline 110-160, moderate variability, no late/variable decels\n' +
        '- Category II (Indeterminate): anything not Category I or III — most common, requires evaluation\n' +
        '- Category III (Abnormal): absent variability + recurrent late decels, bradycardia, or sinusoidal pattern — requires immediate intervention\n\n' +
        '**Labor Dystocia:**\n' +
        '- First stage arrest: >=6 cm dilation with ruptured membranes and no cervical change for >=4 hours of adequate contractions (or 6 hours if inadequate)\n' +
        '- Second stage arrest: nullipara >3 hrs with epidural (>2 hrs without); multipara >2 hrs with epidural (>1 hr without)\n\n' +
        '**Augmentation:**\n' +
        '- Oxytocin infusion: low-dose (1-2 mU/min, increase q30min) or high-dose protocols\n' +
        '- Amniotomy: artificial rupture of membranes to augment labor\n\n' +
        '**Operative Vaginal Delivery:**\n' +
        '- Vacuum or forceps: requires full dilation, engaged head, known position, adequate pelvis\n' +
        '- Indications: prolonged second stage, non-reassuring FHR, maternal exhaustion',
      keyTerms: [
        { term: 'NICHD categories', definition: 'Three-tier classification system for fetal heart rate tracings guiding intrapartum management' },
        { term: 'Labor dystocia', definition: 'Abnormally slow or arrested progress of labor, the most common indication for primary cesarean' },
        { term: 'Amniotomy', definition: 'Intentional rupture of the amniotic membranes to stimulate or augment labor' },
      ],
      clinicalNotes: 'The Safe Prevention of Primary Cesarean (ACOG/SMFM) consensus emphasizes allowing longer labor before diagnosing arrest, particularly in the first stage.',
    },
    4: {
      level: 4,
      summary: 'Advanced intrapartum management addresses shoulder dystocia algorithms, postpartum hemorrhage protocols, uterine rupture recognition, and evidence for trial of labor after cesarean.',
      explanation:
        '**Shoulder Dystocia (HELPERR mnemonic):**\n' +
        '- H: call for Help\n' +
        '- E: Evaluate for episiotomy\n' +
        '- L: Legs (McRoberts maneuver — hyperflexion of thighs)\n' +
        '- P: suprapubic Pressure (NOT fundal)\n' +
        '- E: Enter for rotational maneuvers (Woods screw, Rubin)\n' +
        '- R: Remove posterior arm\n' +
        '- R: Roll to hands and knees (Gaskin maneuver)\n\n' +
        '**Postpartum Hemorrhage (>1000 mL or signs of hypovolemia):**\n' +
        '- 4 T\'s: Tone (atony, most common), Trauma, Tissue (retained placenta), Thrombin (coagulopathy)\n' +
        '- Stepwise management: uterine massage -> uterotonics (oxytocin, methylergonovine, carboprost, misoprostol) -> tamponade (Bakri balloon) -> surgical (B-Lynch suture, uterine artery ligation) -> hysterectomy\n' +
        '- Massive transfusion protocol: 1:1:1 ratio pRBC:FFP:platelets\n\n' +
        '**TOLAC/VBAC:**\n' +
        '- Success rate ~60-80% with prior low transverse incision\n' +
        '- Contraindications: prior classical incision, prior rupture, >2 prior cesareans (relative)\n' +
        '- Uterine rupture risk: ~0.5-0.7% for one prior low transverse\n' +
        '- Must have capability for emergent cesarean',
      keyTerms: [
        { term: 'McRoberts maneuver', definition: 'Hyperflexion of maternal thighs to widen the pelvic outlet as first-line management of shoulder dystocia' },
        { term: 'Postpartum hemorrhage', definition: 'Blood loss >=1000 mL or signs of hypovolemia after delivery, most commonly caused by uterine atony' },
        { term: 'TOLAC', definition: 'Trial of labor after cesarean; attempted vaginal delivery in a patient with prior cesarean section' },
      ],
      clinicalNotes: 'Shoulder dystocia is an obstetric emergency with ~1-2% incidence. The McRoberts maneuver alone resolves ~40% of cases. Never apply fundal pressure.',
    },
    5: {
      level: 5,
      summary: 'Expert-level labor management integrates computerized CTG analysis, intrapartum FECG-derived ST analysis, maternal sepsis bundles, and emerging evidence on delayed cord clamping, optimal cord blood gas analysis, and AI-driven labor prediction.',
      explanation:
        '**Computerized CTG (cCTG):**\n' +
        '- Dawes-Redman analysis: quantifies short-term variability (STV); STV <3 ms associated with fetal acidosis\n' +
        '- INFANT trial: computerized decision support did not improve outcomes vs. standard CTG interpretation\n\n' +
        '**ST Analysis (STAN):**\n' +
        '- Fetal ECG via scalp electrode detects ST segment and T-wave changes indicating myocardial hypoxia\n' +
        '- Meta-analyses show reduced operative deliveries for fetal distress but not improved neonatal outcomes consistently\n\n' +
        '**Maternal Sepsis:**\n' +
        '- Intrapartum fever (>=39.0C single or >=38.0C persistent): chorioamnionitis until proven otherwise\n' +
        '- Triple I criteria: intraamniotic infection, inflammation, or infection confirmed\n' +
        '- Sepsis-3 adapted for obstetrics: qSOFA less validated in pregnancy due to physiologic changes\n\n' +
        '**Delayed Cord Clamping:**\n' +
        '- 30-60 seconds recommended for term and preterm neonates (WHO, ACOG)\n' +
        '- Preterm: reduces IVH, NEC, and need for transfusion; increases peak bilirubin slightly\n\n' +
        '**Cord Blood Gas Analysis:**\n' +
        '- Paired arterial and venous: pH <7.00 and base deficit >=12 mmol/L criteria for hypoxic-ischemic encephalopathy evaluation\n' +
        '- Arterio-venous difference helps distinguish acute vs. chronic hypoxia',
      keyTerms: [
        { term: 'Short-term variability (STV)', definition: 'Beat-to-beat FHR variation quantified by computerized analysis; <3 ms suggests fetal compromise' },
        { term: 'Triple I', definition: 'Classification system replacing "chorioamnionitis" distinguishing isolated fever, suspected infection, and confirmed infection' },
        { term: 'Cord blood gas', definition: 'Paired arterial and venous blood gas from the umbilical cord used to assess neonatal acid-base status at birth' },
      ],
      clinicalNotes: 'STAN monitoring has not achieved widespread US adoption despite European use. Delayed cord clamping is now standard of care for both term and preterm neonates barring emergent resuscitation needs.',
    },
  },
  media: [],
  citations: [
    { id: 'acog-labor-2024', type: 'article', title: 'Safe Prevention of the Primary Cesarean Delivery', source: 'Obstetric Care Consensus, ACOG/SMFM', authors: ['ACOG', 'SMFM'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-prenatal-care', targetType: 'topic', relationship: 'related', label: 'Prenatal Care' },
    { targetId: 'obgyn-preeclampsia', targetType: 'condition', relationship: 'see-also', label: 'Preeclampsia' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'labor', 'delivery', 'intrapartum'],
    keywords: ['labor management', 'fetal monitoring', 'cesarean', 'shoulder dystocia', 'postpartum hemorrhage', 'VBAC'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
