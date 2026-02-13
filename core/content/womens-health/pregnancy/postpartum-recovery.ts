/**
 * Postpartum Recovery
 *
 * Educational content covering physical and emotional recovery after
 * childbirth, perineal care, cesarean recovery, postpartum depression
 * screening, return to activity, and long-term maternal health.
 */

import { EducationalContent } from '../../types';

export const postpartumRecoveryContent: EducationalContent = {
  id: 'topic-postpartum-recovery',
  type: 'topic',
  name: 'Postpartum Recovery',
  nameEs: 'Recuperacion Postparto',
  alternateNames: ['After birth recovery', 'Postnatal recovery', 'Fourth trimester'],

  levels: {
    1: {
      level: 1,
      summary:
        'Your body goes through many changes after having a baby. Recovery takes time, and it is important to take care of yourself while caring for your newborn.',
      explanation: `After your baby is born, your body needs time to heal. This period is sometimes called the "fourth trimester" because it is an important transition for both you and your baby.

**What to Expect in the First Days**
- **Vaginal bleeding (lochia):** You will have bleeding like a heavy period for the first few days, then it gets lighter. It can last 4-6 weeks
- **Cramping:** Your uterus is shrinking back to its normal size. Cramps may be stronger when breastfeeding
- **Soreness:** Your body will be sore, especially if you had stitches or a C-section
- **Sweating:** Night sweats are common as your body gets rid of extra pregnancy fluid
- **Breast changes:** Your breasts will fill with milk around day 3-5; they may feel full and tender

**Caring for Yourself After a Vaginal Birth**
- Use a peri bottle (squeeze bottle) with warm water to clean after using the bathroom
- Apply ice packs or cold witch hazel pads to reduce swelling
- Sit on a soft pillow if sore
- Take pain medicine as directed by your doctor
- Do Kegel exercises gently when comfortable to strengthen your pelvic floor

**Caring for Yourself After a C-Section**
- Keep your incision clean and dry
- Do not lift anything heavier than your baby for 4-6 weeks
- Hold a pillow against your belly when coughing or laughing
- Take short walks to prevent blood clots, but rest often
- Watch your incision for signs of infection: redness, warmth, swelling, pus, or opening

**Emotional Changes**
- **Baby blues (first 2 weeks):** Mood swings, crying, anxiety. Affects up to 80% of new mothers. Usually goes away on its own
- **Postpartum depression:** Lasts longer and is more intense. Sadness, hopelessness, trouble bonding with baby, loss of interest in things you used to enjoy
- **When to get help:** If you feel sad most of the time for more than 2 weeks, have thoughts of harming yourself or your baby, or cannot care for yourself or your baby

**When to Call Your Doctor**
- Heavy bleeding (soaking a pad in an hour or passing clots bigger than a golf ball)
- Fever over 100.4 F (38 C)
- Foul-smelling vaginal discharge
- Severe headache or vision changes
- Redness, warmth, or pain in your leg (could be a blood clot)
- Chest pain or trouble breathing
- Severe abdominal pain
- C-section incision that opens, leaks, or looks infected

**Taking Care of Yourself**
- Rest when your baby rests
- Accept help from family and friends
- Eat nutritious meals and drink plenty of water
- Start gentle walking when you feel ready
- Attend your postpartum checkup (usually at 6 weeks)
- Talk to someone you trust if you feel overwhelmed`,
      keyTerms: [
        { term: 'lochia', definition: 'The vaginal bleeding and discharge that happens after giving birth; starts heavy and red, then gets lighter over 4-6 weeks' },
        { term: 'baby blues', definition: 'Mild mood swings, crying, and anxiety in the first 2 weeks after birth; very common and usually goes away on its own' },
        { term: 'postpartum depression', definition: 'A serious mood disorder after childbirth causing lasting sadness, hopelessness, and difficulty caring for yourself or your baby; needs treatment' },
        { term: 'Kegel exercises', definition: 'Exercises that strengthen the muscles of the pelvic floor by squeezing and releasing; help with bladder control after birth' },
        { term: 'perineum', definition: 'The area between the vagina and the rectum; may tear during vaginal delivery and need stitches' },
        { term: 'uterine involution', definition: 'The process of the uterus shrinking back to its normal size after birth; causes cramping' },
      ],
      analogies: [
        'Your uterus after delivery is about the size of a grapefruit and needs to shrink back to the size of a pear. That is why you feel cramps as it contracts back down.',
        'Baby blues are like emotional weather. The storm passes in a week or two. Postpartum depression is like a weather pattern that stays and needs help to clear.',
        'Recovery after a C-section is like recovering from major abdominal surgery, because that is exactly what it is. Give yourself the same patience and rest you would after any surgery.',
      ],
      patientCounselingPoints: [
        'Postpartum depression is not your fault and does not mean you are a bad mother. It is a medical condition that responds well to treatment.',
        'Do not skip your postpartum checkup even if you feel fine. Your doctor needs to check your physical recovery, blood pressure, and emotional health.',
        'If you feel like harming yourself or your baby, call 988 (Suicide and Crisis Lifeline) or go to the emergency room immediately. Help is available.',
        'It is normal for recovery to take longer than you expect. Be patient with yourself and ask for help when you need it.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Postpartum recovery encompasses physiological involution of reproductive organs, wound healing, hormonal shifts, lactation establishment, mood disorder screening, and return to pre-pregnancy function over 6-12 weeks.',
      explanation: `**Physiological Recovery Timeline**
| Timeframe | Process |
|-----------|---------|
| Hours 1-24 | Uterine contraction; initial lochia rubra; vital sign monitoring; ambulation |
| Days 1-3 | Milk transition (lactogenesis II); afterpains; diuresis (1-3 L excess fluid) |
| Days 3-10 | Lochia serosa (pink-brown); perineal healing; emotional lability peak |
| Weeks 2-6 | Lochia alba (white-yellow); cervix closing; uterus returns to pelvis |
| Weeks 6-12 | Full uterine involution; pelvic floor recovery; menstrual return (if not breastfeeding) |

**Uterine Involution**
- Uterus: 1,000 g at delivery to 60 g at 6 weeks
- Fundal height: at umbilicus immediately postpartum; decreases 1 cm/day; non-palpable by 2 weeks
- Afterpains: oxytocin-mediated contractions; more intense in multiparas and during breastfeeding
- Lochia stages: rubra (days 1-3) to serosa (days 4-10) to alba (days 11-6 weeks)

**Perineal Injury Classification**
| Degree | Involvement | Management |
|--------|------------|-----------|
| 1st | Vaginal mucosa and perineal skin | Suturing optional; heals spontaneously |
| 2nd | Perineal muscles (bulbocavernosus) | Sutured in layers; most common repair |
| 3rd | Extends into anal sphincter | Requires careful surgical repair; consider referral |
| 4th | Through anal sphincter into rectal mucosa | Surgical repair in OR; risk of fecal incontinence |

**Cesarean Recovery**
- Incision care: keep clean and dry; monitor for signs of infection
- Pain management: multimodal (NSAIDs + acetaminophen; opioids as needed)
- Activity: early ambulation (day 0-1); no heavy lifting (>10-15 lbs) for 4-6 weeks
- DVT prophylaxis: early ambulation; SCDs; pharmacologic prophylaxis if high risk
- Return to normal activity: 6-8 weeks; driving when off opioids and can emergency brake

**Postpartum Mood Disorders Spectrum**
| Condition | Timing | Prevalence | Features | Treatment |
|-----------|--------|-----------|----------|-----------|
| Baby blues | Day 3-14 | 50-80% | Mood swings, tearfulness, anxiety | Supportive care; resolves spontaneously |
| Postpartum depression | Within 12 months | 10-20% | Persistent sadness, anhedonia, guilt, sleep/appetite changes | Therapy, SSRIs, support |
| Postpartum anxiety | Within 12 months | 10-15% | Excessive worry, racing thoughts, physical symptoms | CBT, SSRIs, benzodiazepines short-term |
| Postpartum OCD | Within 12 months | 3-5% | Intrusive thoughts about harming baby (ego-dystonic) | CBT (exposure response prevention), SSRIs |
| Postpartum psychosis | Days to 4 weeks | 0.1-0.2% | Hallucinations, delusions, disorganized behavior | Psychiatric emergency; hospitalization; antipsychotics + mood stabilizers |

**Edinburgh Postnatal Depression Scale (EPDS)**
- 10-item screening tool; takes 5 minutes
- Score >= 13 suggests significant depressive symptoms
- Question 10 assesses self-harm ideation (any positive response requires immediate evaluation)
- Screen at 4-6 weeks postpartum (ACOG) or multiple time points (USPSTF)
- Validated in multiple languages and cultures

**Postpartum Contraception**
| Method | When to Start | Breastfeeding Compatible |
|--------|-------------|------------------------|
| Condoms | Anytime | Yes |
| Progestin-only pill | Immediately postpartum | Yes |
| Depo-Provera | Immediately or at 6 weeks | Yes |
| Implant (Nexplanon) | Immediately postpartum | Yes |
| Hormonal IUD (Mirena) | Immediate or 4-6 weeks | Yes |
| Copper IUD (Paragard) | Immediate or 4-6 weeks | Yes |
| Combined hormonal (pill, patch, ring) | 4-6 weeks (non-breastfeeding); 6 months (breastfeeding) | Estrogen may reduce supply |
| Lactational amenorrhea method | Effective first 6 months if exclusively breastfeeding, amenorrheic | Yes (is breastfeeding) |

**Postpartum Visit Components**
- Blood pressure assessment
- Weight and BMI
- Incision or perineal wound assessment
- Breast examination
- Mood screening (EPDS or PHQ-9)
- Contraception counseling
- Breastfeeding support
- GDM screening (if applicable)
- Pelvic floor assessment
- Chronic disease management plan
- Birth spacing counseling`,
      keyTerms: [
        { term: 'Edinburgh Postnatal Depression Scale', definition: 'A validated 10-question screening tool for postpartum depression; scores of 13 or above indicate significant depressive symptoms requiring further evaluation' },
        { term: 'afterpains', definition: 'Uterine cramping after delivery caused by oxytocin-mediated contractions as the uterus involutes; more intense in multiparous women and during breastfeeding' },
        { term: 'postpartum psychosis', definition: 'A rare but severe psychiatric emergency occurring in the first weeks postpartum; features include hallucinations, delusions, and disorganized behavior; requires immediate hospitalization' },
        { term: 'fourth trimester', definition: 'The 12-week period after birth recognized as a critical time for maternal physical recovery, infant adjustment, and establishment of the mother-infant bond' },
        { term: 'lactational amenorrhea method', definition: 'A natural contraception method effective in the first 6 months postpartum if exclusively breastfeeding, with no return of menstruation; 98% effective when criteria are met' },
        { term: 'perineal laceration', definition: 'Tear in the tissue between the vagina and rectum during vaginal delivery; classified in 4 degrees based on depth and structures involved' },
      ],
      patientCounselingPoints: [
        'Postpartum psychosis is an emergency. If you or a loved one experience confusion, hallucinations, or delusions after birth, seek emergency care immediately.',
        'You can get pregnant again before your first period returns. Discuss contraception before leaving the hospital or at your postpartum visit.',
        'If you had gestational diabetes, your 6-12 week glucose test is essential. Half of women with GDM develop type 2 diabetes within 10 years without lifestyle changes.',
        'Long-acting reversible contraception (IUD or implant) can be placed immediately after delivery and is the most effective method for birth spacing.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Postpartum physiology involves hormonal remodeling, pelvic floor rehabilitation, lactation neuroendocrinology, mood disorder neurobiology, thromboembolism risk, and evidence-based approaches to comprehensive fourth-trimester care.',
      explanation: `**Hormonal Changes Postpartum**
| Hormone | Postpartum Change | Clinical Effect |
|---------|-------------------|----------------|
| Estrogen | Dramatic decline (placental source lost) | Vaginal dryness, hot flashes, mood changes |
| Progesterone | Rapid decline | Mood instability; unmasking of mood disorders |
| Prolactin | Elevated with breastfeeding; suppresses GnRH | Lactation maintenance; anovulation |
| Oxytocin | Pulsatile release with suckling | Milk let-down; uterine contractions; bonding |
| Cortisol | Gradual normalization from elevated pregnancy levels | HPA axis resetting; stress vulnerability |
| Thyroid hormones | Postpartum thyroiditis risk (5-10% prevalence) | Thyrotoxic phase (1-4 months) then hypothyroid phase (4-8 months) |

**Postpartum Thyroiditis**
- Autoimmune; associated with positive TPO antibodies
- Biphasic course: thyrotoxicosis (destructive; NOT Graves) then hypothyroidism
- Thyrotoxic phase: anxiety, palpitations, weight loss (treat symptomatically with beta-blockers; antithyroids NOT indicated)
- Hypothyroid phase: fatigue, depression, weight gain, constipation (levothyroxine if symptomatic)
- 20-30% develop permanent hypothyroidism
- Can mimic postpartum depression; screen thyroid function if depression atypical or treatment-resistant

**Postpartum Venous Thromboembolism (VTE)**
- Risk increases 5-10x during pregnancy; highest in first 6 weeks postpartum
- Risk factors: cesarean delivery, immobility, obesity, age >35, thrombophilia, hemorrhage, transfusion
- Scoring systems: RCOG VTE risk assessment; individualized prophylaxis
- Pharmacologic prophylaxis: LMWH (enoxaparin 40 mg SC daily) for high-risk women
- Duration: 10 days post-cesarean for standard risk; 6 weeks for high risk

**Pelvic Floor Dysfunction**
| Condition | Prevalence Postpartum | Risk Factors | Management |
|-----------|----------------------|-------------|-----------|
| Urinary incontinence (stress) | 30-50% at 3 months | Vaginal delivery, forceps, macrosomia, prolonged second stage | Pelvic floor PT; pessary; surgery if persistent |
| Fecal incontinence | 5-10% (higher with 3rd/4th degree tears) | OASIS (obstetric anal sphincter injury) | Pelvic floor PT; biofeedback; sphincteroplasty |
| Pelvic organ prolapse | 50% of parous women have some degree | Multiparity, vaginal delivery, connective tissue disorders | Pelvic floor PT; pessary; reconstructive surgery |
| Diastasis recti | 60% at 6 weeks; 30% at 12 months | Multiple pregnancies, large fetus, weak connective tissue | Core rehabilitation; physical therapy |
| Dyspareunia | 40-60% at 3 months; 20% at 12 months | Perineal trauma, breastfeeding (estrogen deficiency), psychosocial factors | Vaginal estrogen; lubricants; pelvic floor PT; counseling |

**Neurobiology of Postpartum Depression**
- Estrogen/progesterone withdrawal: alters serotonin, GABA, and glutamate neurotransmission
- Allopregnanolone (progesterone metabolite): potent GABA-A receptor modulator; withdrawal triggers mood instability in susceptible women
- HPA axis dysregulation: blunted cortisol response; impaired stress reactivity
- Neuroinflammation: elevated pro-inflammatory cytokines (IL-6, TNF-alpha) associated with PPD
- Oxytocin system: reduced oxytocin associated with impaired bonding and higher depression scores
- Genetic vulnerability: serotonin transporter gene (5-HTTLPR), BDNF, and estrogen receptor polymorphisms

**Brexanolone and Zuranolone**
| Agent | Mechanism | Administration | Approval |
|-------|-----------|---------------|---------|
| Brexanolone (Zulresso) | IV allopregnanolone; GABA-A PAM | 60-hour IV infusion; requires REMS program | FDA-approved for PPD (2019) |
| Zuranolone (Zurzuvae) | Oral neuroactive steroid; GABA-A PAM | 50 mg nightly x 14 days | FDA-approved for PPD (2023) |

**Postpartum Hemorrhage: Late Presentation**
- Secondary (late) PPH: abnormal bleeding 24 hours to 12 weeks postpartum
- Causes: subinvolution of the placental site, retained products of conception, endometritis, coagulopathy
- Evaluation: ultrasound; CBC; coagulation studies
- Management: uterotonics (methylergonovine); antibiotics if endometritis; uterine curettage if retained products
- Consider von Willebrand disease or other bleeding disorders if recurrent

**Return to Exercise Postpartum**
| Phase | Timing | Activities |
|-------|--------|-----------|
| Phase 1 | Days 1-14 | Gentle walking; pelvic floor activation; breathing exercises |
| Phase 2 | Weeks 2-6 | Progressive walking; gentle core exercises; avoid high-impact |
| Phase 3 | Weeks 6-12 | Gradual return to pre-pregnancy activity level; pelvic floor PT clearance |
| Phase 4 | 3-6 months | Full activity including running, lifting; individualized based on pelvic floor function |`,
      keyTerms: [
        { term: 'allopregnanolone', definition: 'A progesterone metabolite and potent GABA-A receptor positive allosteric modulator; its rapid withdrawal postpartum is implicated in postpartum depression pathogenesis; basis for brexanolone and zuranolone therapy' },
        { term: 'postpartum thyroiditis', definition: 'Autoimmune thyroid inflammation occurring in 5-10% of postpartum women; presents with a biphasic thyrotoxic-then-hypothyroid course; can mimic postpartum depression' },
        { term: 'OASIS', definition: 'Obstetric Anal Sphincter Injuries; third and fourth degree perineal tears involving the anal sphincter; associated with fecal incontinence and require meticulous surgical repair' },
        { term: 'zuranolone', definition: 'First oral medication specifically approved for postpartum depression (2023); a neuroactive steroid acting as a GABA-A receptor positive allosteric modulator; taken for 14 days' },
        { term: 'diastasis recti', definition: 'Separation of the rectus abdominis muscles at the linea alba; affects 60% of women at 6 weeks postpartum; core rehabilitation is first-line treatment' },
        { term: 'subinvolution', definition: 'Failure of the placental attachment site to undergo normal hemostatic changes after delivery; a cause of secondary postpartum hemorrhage presenting with prolonged heavy bleeding' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced postpartum care integrates evidence-based management of peripartum cardiomyopathy, VTE risk stratification, complex mood disorder pharmacotherapy, pelvic floor injury prevention strategies, and the transition to long-term maternal health management.',
      explanation: `**Peripartum Cardiomyopathy (PPCM)**
| Feature | Detail |
|---------|--------|
| Definition | New-onset heart failure (LVEF <45%) in last month of pregnancy to 5 months postpartum; diagnosis of exclusion |
| Incidence | 1 in 1,000-4,000 pregnancies; higher in Black women, multifetal gestation, preeclampsia |
| Presentation | Dyspnea, orthopnea, PND, peripheral edema, tachycardia |
| Pathogenesis | Oxidative stress-mediated cleavage of prolactin to 16-kDa prolactin fragment (angiostatic, cardiotoxic); angiogenic imbalance (sFlt-1) |
| Treatment | Guideline-directed HF therapy: diuretics, ACE-I/ARB (postpartum only), beta-blockers, anticoagulation; bromocriptine (suppress prolactin) |
| Prognosis | 50% full recovery; 25% persistent dysfunction; mortality 2-6% in developed countries |
| Subsequent pregnancy | Risk of recurrence 30-50%; counseling essential; avoid if LVEF not fully recovered |

**Postpartum VTE Risk Stratification**
| Risk Level | Criteria | Prophylaxis |
|-----------|---------|-----------|
| Low | Vaginal delivery; no risk factors | Early ambulation; hydration |
| Moderate | Cesarean + 1 risk factor; vaginal + 2 risk factors | Consider pharmacologic prophylaxis x 10 days |
| High | Cesarean + 2+ risk factors; history of VTE; thrombophilia | LMWH x 6 weeks postpartum |
| Very high | Active thrombosis; mechanical heart valve | Therapeutic anticoagulation; multidisciplinary |

**Antithrombotic Agents and Breastfeeding:**
- Warfarin: compatible (minimal excretion in milk)
- LMWH (enoxaparin): compatible (not absorbed orally by infant)
- Unfractionated heparin: compatible
- DOACs (apixaban, rivarelbaan): limited data; generally avoided during breastfeeding

**Complex Postpartum Depression Pharmacotherapy**
| Scenario | Approach |
|----------|---------|
| Mild-moderate PPD | SSRI (sertraline preferred: lowest infant exposure in breast milk) + psychotherapy |
| Severe PPD | SSRI + therapy; consider zuranolone (14-day course); psychiatric referral |
| Treatment-resistant PPD | Augmentation strategies; brexanolone IV infusion; ECT (effective and safe postpartum) |
| PPD with psychotic features | Antipsychotic + mood stabilizer; differentiate from postpartum psychosis |
| Bipolar postpartum depression | Mood stabilizer (lamotrigine preferred for breastfeeding); avoid antidepressant monotherapy |
| Postpartum psychosis | Psychiatric hospitalization; lithium + antipsychotic; brexanolone NOT indicated |

**Breastfeeding-Compatible Psychotropics:**
| Class | Preferred Agent | RID | Safety Data |
|-------|----------------|-----|------------|
| SSRI | Sertraline | 0.5-2% | Most studied; minimal infant exposure |
| SSRI | Paroxetine | 1-3% | Extensive data; generally safe |
| SNRI | Venlafaxine | 6-8% | Reasonable option; higher RID |
| Mood stabilizer | Lamotrigine | 9-18% | Monitor infant levels if concerned; generally safe |
| Antipsychotic | Quetiapine | <1% | Low transfer; preferred if antipsychotic needed |
| Benzodiazepine | Lorazepam | Short-acting preferred | Use lowest effective dose; monitor infant sedation |

**OASIS Prevention Strategies**
| Intervention | Evidence |
|-------------|---------|
| Warm compresses to perineum | Reduces 3rd/4th degree tears (RR 0.48) |
| Manual perineal protection (Ritgen maneuver) | Conflicting evidence; expert recommendation for controlled delivery of head |
| Mediolateral episiotomy | Reduces OASIS risk compared to midline episiotomy when episiotomy is indicated |
| Avoiding routine episiotomy | Restrictive use reduces severe perineal trauma (Cochrane review) |
| Water birth | No increased OASIS risk; may reduce episiotomy rates |
| Epi-No device (antepartum perineal dilation) | Some evidence for reduced episiotomy; insufficient for OASIS reduction |

**Long-Term Maternal Health After Pregnancy**
| Pregnancy Complication | Long-Term Risk | Follow-Up |
|----------------------|---------------|-----------|
| Preeclampsia | 2-4x CVD risk; 4-5x chronic HTN risk | Annual BP monitoring; cardiovascular risk assessment |
| GDM | 50% T2DM within 10 years | Annual glucose screening; lifestyle counseling |
| Preterm delivery | Increased maternal CVD risk | Cardiovascular risk factor modification |
| Placental abruption | Increased CVD mortality | Cardiovascular screening |
| PPCM | Recurrence risk 30-50% | Cardiology follow-up; pre-conception counseling |
| Postpartum depression | 50% recurrence in subsequent pregnancies | Mental health monitoring; prophylactic treatment |`,
      keyTerms: [
        { term: 'peripartum cardiomyopathy', definition: 'New-onset heart failure with LVEF below 45% occurring in the last month of pregnancy to 5 months postpartum; pathogenesis involves cleavage of prolactin to a cardiotoxic 16-kDa fragment' },
        { term: '16-kDa prolactin', definition: 'Cardiotoxic fragment of prolactin generated by oxidative stress-mediated cathepsin D cleavage; inhibits angiogenesis and damages cardiomyocytes; target of bromocriptine therapy in PPCM' },
        { term: 'brexanolone', definition: 'IV formulation of allopregnanolone approved for postpartum depression; administered as a 60-hour continuous infusion under a REMS program; provides rapid onset of antidepressant effect' },
        { term: 'Ritgen maneuver', definition: 'Manual perineal support technique during delivery where pressure is applied to the fetal chin through the perineum to control the speed of head extension and reduce perineal trauma' },
        { term: 'relative infant dose', definition: 'Percentage of the maternal weight-adjusted drug dose received by the nursing infant through breast milk; values below 10% are generally considered compatible with breastfeeding' },
        { term: 'ECT in postpartum', definition: 'Electroconvulsive therapy; highly effective for severe postpartum depression and postpartum psychosis; safe during breastfeeding and when response to medication is inadequate or urgent' },
      ],
      clinicalNotes:
        'Zuranolone (Zurzuvae) represents a paradigm shift as the first oral medication specifically approved for PPD. Unlike SSRIs that take 2-4 weeks, zuranolone shows effect within days and is taken for only 14 days. For peripartum cardiomyopathy, bromocriptine to suppress the toxic 16-kDa prolactin fragment is supported by the BROMIDE trial data but requires careful weigh of risks (suppressing lactation). Pregnancy complications should be viewed as cardiovascular "stress tests"; preeclampsia and GDM are now recognized as lifelong cardiovascular risk factors requiring ongoing monitoring. The postpartum visit should be reconceptualized as the beginning of long-term chronic disease prevention, not just a one-time check.',
    },
    5: {
      level: 5,
      summary:
        'Expert postpartum care encompasses immunological remodeling, neuroactive steroid therapeutics, cardiac rehabilitation after PPCM, health systems redesign for fourth-trimester care, and maternal mortality prevention through quality improvement.',
      explanation: `**Immunological Remodeling Postpartum**
| Phase | Timing | Characteristics |
|-------|--------|----------------|
| Pregnancy (Th2 dominant) | During gestation | Immune tolerance to fetal antigens; reduced cell-mediated immunity |
| Postpartum rebound (Th1 shift) | Weeks 1-12 | Reactivation of cell-mediated immunity; autoimmune disease flares |
| Autoimmune conditions | Peak 3-6 months postpartum | Thyroiditis (5-10%), RA flare, MS relapse, lupus flare |
| Chimerism | Persistent | Fetal microchimerism: fetal cells persist in maternal tissues for decades; implications for autoimmunity and cancer |

**Neuroactive Steroid Therapeutics Pipeline**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Brexanolone (Zulresso) | IV allopregnanolone; GABA-A PAM | FDA-approved 2019; REMS required |
| Zuranolone (Zurzuvae) | Oral neuroactive steroid; GABA-A PAM | FDA-approved 2023; 14-day course |
| SAGE-324 | Oral GABA-A PAM (non-allopregnanolone) | Phase 2 for essential tremor; potential PPD application |
| PRAX-114 | Oral GABA-A PAM; next-generation neuroactive steroid | Phase 2; PPD potential |
| Ganaxolone | Oral GABA-A PAM | Approved for seizures (CDKL5); investigated in mood disorders |

**GABA-A Receptor Physiology in PPD:**
- Pregnancy: rising allopregnanolone upregulates inhibitory GABA-A tone
- Postpartum: abrupt allopregnanolone withdrawal leads to GABA-A receptor subunit composition changes (alpha4/delta upregulation)
- Altered receptors have reduced sensitivity to remaining GABA-ergic neurosteroids
- Result: reduced inhibitory tone, anxiety, depression in susceptible women
- Brexanolone/zuranolone restore GABA-A PAM activity directly

**PPCM: Advanced Management**
| Aspect | Detail |
|--------|--------|
| Biomarkers | NT-proBNP for monitoring; miR-146a as diagnostic biomarker |
| Bromocriptine | Blocks 16-kDa prolactin production; BROMIDE trial: improved LVEF at 6 months; 2.5 mg BID x 2 weeks then 2.5 mg daily x 6 weeks |
| Wearable defibrillator (LifeVest) | For LVEF <35% during recovery phase; bridge to ICD or recovery |
| Cardiac MRI | Late gadolinium enhancement predicts poor recovery |
| Genetics | TTN (titin) truncating variants in 15% of PPCM; familial screening recommended |
| Mechanical support | LVAD or transplant for refractory cases |
| Research | iPSC-derived cardiomyocytes from PPCM patients show intrinsic vulnerability; precision medicine approach |

**Health Systems Redesign for the Fourth Trimester**
| Current Model | Proposed Model |
|--------------|---------------|
| Single visit at 6 weeks | Contact within 3 days; visit at 1-2 weeks; comprehensive visit at 6 weeks; 12-week assessment |
| Provider-initiated follow-up | Patient-driven telehealth touchpoints; remote monitoring |
| Siloed OB care | Integrated care: OB + primary care + mental health + lactation + pelvic floor PT |
| Visit-based screening | Continuous screening via validated digital tools (EPDS via app) |
| Individual-level intervention | Community health workers; peer support; group care (CenteringPregnancy postpartum) |

**Maternal Mortality Prevention: Evidence-Based Bundles**
| Bundle | Key Components |
|--------|---------------|
| Hemorrhage | Quantitative blood loss; stage-based protocol; massive transfusion; TXA within 3 hours |
| Severe hypertension | Treat BP >= 160/110 within 30-60 min; magnesium prophylaxis; HELLP labs |
| Venous thromboembolism | Risk-based prophylaxis; early ambulation; awareness of atypical presentations |
| Sepsis | Obstetric-adapted SIRS criteria; source identification; antibiotics within 1 hour |
| Cardiac | CMQCC cardiovascular toolkit; peripartum cardiomyopathy awareness |
| Mental health | Universal screening; safety planning; crisis resources; 988 Suicide and Crisis Lifeline |

**Postpartum Contraception: Immediate Postplacental IUD**
| Aspect | Evidence |
|--------|---------|
| Timing | Within 10 minutes of placental delivery (vaginal or cesarean) |
| Expulsion rate | 10-20% (higher than interval placement) |
| Advantages | Guaranteed access; high continuation rates; no return visit needed |
| Perforation risk | Not increased vs. interval placement |
| Breastfeeding | Hormonal and copper IUDs compatible |
| Racial equity | Eliminates barriers to access; reduces disparities in unintended pregnancy |

**Fetal Microchimerism**
| Finding | Implication |
|---------|------------|
| Fetal cells persist in maternal blood and tissues for decades | Cross blood-brain barrier; found in thyroid, liver, heart, brain |
| Protective effects | May contribute to wound healing; reduced breast cancer risk |
| Pathogenic effects | Implicated in autoimmune thyroid disease, scleroderma |
| Therapeutic potential | Fetal stem cells as repair cells in maternal organ injury |
| Bidirectional | Maternal cells also found in offspring (maternal microchimerism) |`,
      keyTerms: [
        { term: 'fetal microchimerism', definition: 'Persistence of fetal cells in maternal tissues for decades after pregnancy; detected in thyroid, liver, brain, and other organs; implicated in both autoimmune disease and tissue repair' },
        { term: 'GABA-A positive allosteric modulator', definition: 'A compound that enhances the effect of GABA at the GABA-A receptor without directly activating it; mechanism of brexanolone and zuranolone; restores inhibitory tone lost by allopregnanolone withdrawal postpartum' },
        { term: 'TTN truncating variant', definition: 'Titin gene truncating mutation found in approximately 15% of peripartum cardiomyopathy cases; also found in dilated cardiomyopathy; suggests genetic susceptibility and indicates need for family screening' },
        { term: 'BROMIDE trial', definition: 'Bromocriptine in Peripartum Cardiomyopathy trial; demonstrated improved LVEF recovery at 6 months with bromocriptine therapy added to standard heart failure treatment' },
        { term: 'CenteringPregnancy', definition: 'Group prenatal and postpartum care model combining health assessment, education, and peer support; improves outcomes including reduced preterm birth and improved patient satisfaction' },
      ],
      clinicalNotes: `**Expert Integration:**
- The GABA-A receptor subunit remodeling hypothesis provides the most compelling mechanistic explanation for PPD vulnerability. The rapid clinical response to brexanolone and zuranolone validates this pathway and opens a new therapeutic paradigm beyond monoamine-based antidepressants.
- Fetal microchimerism challenges traditional immunological concepts. Fetal cells found in maternal brain tissue decades after pregnancy may participate in neuroplasticity and repair, or conversely, may trigger autoimmune processes. The implications for long-term maternal health are profound and still being elucidated.
- PPCM management should include genetic testing for TTN variants, as familial DCM may masquerade as PPCM. First-degree relatives of patients with TTN-positive PPCM should be offered cardiac screening.
- The transition from pregnancy care to primary care is the most vulnerable gap in the maternal health system. The ACOG reconceptualization of the postpartum period (2018 committee opinion) advocating for earlier and more frequent contact remains underimplemented. Health systems that have adopted the 3-day phone contact, 2-week visit, 6-week comprehensive visit model show improved maternal outcomes and detection of complications.
- Immediate postplacental IUD placement is a health equity intervention. By removing the return visit barrier, it reduces disparities in contraceptive access and unintended pregnancy rates among marginalized populations.`,
    },
  },

  media: [],

  citations: [
    { id: 'acog-co-736', type: 'guideline', title: 'Optimizing Postpartum Care: ACOG Committee Opinion 736', authors: ['ACOG Committee on Obstetric Practice'], source: 'Obstetrics & Gynecology', url: 'https://doi.org/10.1097/AOG.0000000000002633' },
    { id: 'zuranolone-approval', type: 'article', title: 'Zuranolone for the Treatment of Postpartum Depression', authors: ['Deligiannidis, K.M.', 'Meltzer-Brody, S.'], source: 'American Journal of Psychiatry', url: 'https://doi.org/10.1176/appi.ajp.20230241' },
    { id: 'ppcm-esc-2019', type: 'guideline', title: 'Current State of Knowledge on Peripartum Cardiomyopathy', authors: ['Bauersachs, J.', 'Konig, T.', 'Hilfiker-Kleiner, D.'], source: 'European Journal of Heart Failure', url: 'https://doi.org/10.1002/ejhf.1567' },
  ],

  crossReferences: [
    { targetId: 'topic-breastfeeding-support', targetType: 'topic', relationship: 'related', label: 'Breastfeeding Support' },
    { targetId: 'topic-high-risk-pregnancy-signs', targetType: 'topic', relationship: 'related', label: 'High-Risk Pregnancy Signs' },
  ],

  tags: {
    systems: ['reproductive', 'cardiovascular', 'nervous', 'immune'],
    topics: ['obstetrics', 'psychiatry', 'cardiology', 'rehabilitation', 'preventive medicine'],
    keywords: ['postpartum', 'recovery', 'PPD', 'postpartum depression', 'lochia', 'involution', 'pelvic floor', 'PPCM', 'fourth trimester', 'brexanolone', 'zuranolone'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics', 'psychiatry', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
