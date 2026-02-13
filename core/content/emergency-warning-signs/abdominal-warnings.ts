/**
 * Abdominal Warning Signs - Emergency Content
 *
 * Covers: appendicitis, bowel obstruction, GI hemorrhage,
 * ruptured AAA, pancreatitis, peritonitis.
 *
 * IMPORTANT: Educational purposes only. Call 911 in any emergency.
 */

import { EducationalContent } from '../types';

const now = '2026-01-30T00:00:00.000Z';

function entry(
  id: string,
  name: string,
  nameEs: string,
  levels: EducationalContent['levels'],
): EducationalContent {
  return {
    id,
    type: 'condition',
    name,
    alternateNames: [nameEs],
    levels,
    media: [],
    citations: [],
    crossReferences: [],
    tags: {
      systems: ['digestive'],
      topics: ['emergency medicine', 'warning signs'],
      keywords: [name.toLowerCase(), nameEs.toLowerCase()],
      clinicalRelevance: 'critical',
    },
    createdAt: now,
    updatedAt: now,
    version: 1,
    status: 'published',
  };
}

export const abdominalWarnings: Record<string, EducationalContent> = {
  appendicitis: entry(
    'abdominal-appendicitis',
    'Appendicitis',
    'Apendicitis',
    {
      1: {
        level: 1,
        summary: 'Your appendix can get infected and need surgery. Pain starts near the belly button and moves to the lower right side.',
        explanation: `The appendix is a small tube attached to your large intestine. When it gets blocked and infected, the pain usually starts around the belly button, then moves to the lower right side. You may also have fever, nausea, and loss of appetite. If untreated it can burst and spread infection.\n\n**When to call 911:** Severe right-side belly pain with fever.`,
        keyTerms: [{ term: 'appendix', definition: 'A small finger-shaped pouch on your large intestine that can become infected.' }],
        analogies: ['The appendix is like a dead-end alley — if trash builds up, it gets infected.'],
        patientCounselingPoints: ['Do not eat or drink if you suspect appendicitis — you may need surgery.'],
      },
      2: {
        level: 2,
        summary: 'Appendicitis classically presents with periumbilical pain migrating to the RLQ at McBurney point, with anorexia, nausea, and low-grade fever.',
        explanation: `Classic progression: vague periumbilical pain migrates to the right lower quadrant over 12–24 hours. Tenderness at McBurney point (one-third from ASIS to umbilicus). Rovsing sign, psoas sign, and obturator sign may be present.\n\nAtypical in elderly (less pain, higher rupture risk), children, and pregnant women.`,
        keyTerms: [
          { term: 'McBurney point', definition: 'The point one-third of the distance from the ASIS to the umbilicus where appendiceal tenderness localizes.' },
          { term: 'Rovsing sign', definition: 'RLQ pain elicited by palpation of the LLQ, suggesting peritoneal irritation.' },
        ],
      },
      3: {
        level: 3,
        summary: 'Appendicitis diagnosis uses the Alvarado score, CT imaging (>95% sensitivity), and clinical assessment. Perforation risk rises after 36 hours.',
        explanation: `Alvarado (MANTRELS) score stratifies probability. CT abdomen/pelvis with IV contrast is the gold standard in adults; US first-line in children and pregnancy. Perforation risk increases significantly with each 12-hour delay beyond 36 hours. Elderly perforation rate: 50–70%.`,
        keyTerms: [
          { term: 'Alvarado score', definition: 'MANTRELS scoring system for appendicitis probability. Score 7–10 = high probability.' },
        ],
        clinicalNotes: 'CT with IV contrast: sensitivity and specificity >95%. Appendicolith on imaging predicts failure of antibiotic-only management.',
      },
      4: {
        level: 4,
        summary: 'Advanced management includes antibiotics-first strategies (CODA trial), ERAS protocols, and laparoscopic approaches with <5% negative appendectomy target.',
        explanation: `CODA trial (2020): antibiotics non-inferior to surgery for uncomplicated appendicitis; 29% underwent appendectomy within 90 days. Appendicolith predicts failure. ERAS protocols enable same-day discharge for uncomplicated laparoscopic appendectomy. Interval appendectomy after abscess drainage remains debated.`,
        keyTerms: [
          { term: 'CODA trial', definition: '2020 RCT establishing antibiotics as viable option for uncomplicated appendicitis.' },
        ],
        clinicalNotes: 'Perforation disparity: Black and Hispanic patients have higher perforation rates — standardized clinical pathways help close the gap.',
      },
      5: {
        level: 5,
        summary: 'AI-augmented CT diagnosis (AUC >0.90), radiomics for complicated vs. uncomplicated classification, and pharmacogenomic-guided management represent the frontier.',
        explanation: `ML algorithms achieve AUC >0.90 for appendicitis diagnosis and can differentiate complicated from uncomplicated cases using CT texture analysis. Shared decision-making supported by CODA and APPAC data. Quality metrics: negative appendectomy rate <5%, time to OR <24h, laparoscopic completion >90%.`,
        keyTerms: [
          { term: 'radiomics', definition: 'Computational extraction of quantitative features from medical images for predictive modeling.' },
        ],
        clinicalNotes: 'APPAC trial: 73% success at 1 year, 39% recurrence at 5 years for antibiotic management.',
      },
    },
  ),

  bowelObstruction: entry(
    'abdominal-bowel-obstruction',
    'Bowel Obstruction',
    'Obstruccion Intestinal',
    {
      1: {
        level: 1,
        summary: 'A bowel obstruction means something is blocking your intestines so food and waste cannot pass through.',
        explanation: `When the intestines are blocked, you get belly cramps, swelling, vomiting, and cannot pass gas or poop. This is called obstipation. It can be caused by scar tissue from old surgery or other problems.\n\n**When to call 911:** Belly swelling with cramping, vomiting, and no gas or poop for a day or more.`,
        keyTerms: [{ term: 'obstipation', definition: 'Complete inability to pass stool or gas — worse than constipation.' }],
        analogies: ['A blocked intestine is like a clogged pipe — nothing can get through and pressure builds up.'],
        patientCounselingPoints: ['If you have had belly surgery before, you are at higher risk for bowel obstruction.'],
      },
      2: {
        level: 2,
        summary: 'SBO is most often from adhesions; LBO from colon cancer in older adults. Strangulation (loss of blood supply) is the feared complication.',
        explanation: `Small bowel obstruction (SBO): adhesions (60%), hernias, tumors. Large bowel obstruction (LBO): cancer, volvulus, diverticular stricture. Cardinal features: colicky pain, distension, vomiting (early in SBO, late in LBO), obstipation. Strangulation signs: constant pain, fever, tachycardia, rigid abdomen.`,
        keyTerms: [
          { term: 'strangulation', definition: 'Loss of blood supply to obstructed bowel — a surgical emergency.' },
          { term: 'adhesions', definition: 'Scar tissue bands from prior surgery that can kink or compress bowel.' },
        ],
      },
      3: {
        level: 3,
        summary: 'CT identifies transition point and strangulation signs (closed-loop, pneumatosis, portal venous gas). Gastrografin challenge predicts resolution.',
        explanation: `CT findings: dilated proximal loops (>3 cm SB), decompressed distal bowel, transition point, small bowel feces sign. Strangulation signs: closed-loop, mesenteric haziness, reduced wall enhancement, pneumatosis, portal venous gas. Management: NPO, NGT, IV fluids. Urgent surgery if peritoneal signs or strangulation. Conservative trial 48–72h for partial SBO. Gastrografin reaching colon at 24h predicts resolution.`,
        keyTerms: [
          { term: 'pneumatosis intestinalis', definition: 'Gas in the bowel wall — ominous sign of ischemia or necrosis.', pronunciation: 'new-mah-TOH-sis' },
        ],
        clinicalNotes: 'Portal venous gas in context of obstruction is ominous but can occur benignly after endoscopy.',
      },
      4: {
        level: 4,
        summary: 'Damage control surgery, abdominal compartment syndrome monitoring, and second-look laparotomy are key advanced management concepts.',
        explanation: `Damage control for lethal triad (hypothermia, coagulopathy, acidosis). ACS: IAP >=20 mmHg with organ dysfunction — measure via bladder pressure. Decompressive laparotomy with VAC closure. ML models predicting SBO resolution vs. surgery need are under development.`,
        keyTerms: [
          { term: 'abdominal compartment syndrome', definition: 'IAP >=20 mmHg with new organ dysfunction requiring decompressive laparotomy.' },
        ],
        clinicalNotes: 'Monitor bladder pressures in massive resuscitation. IAH: >=12 mmHg sustained; ACS: >=20 mmHg with organ failure.',
      },
      5: {
        level: 5,
        summary: 'AI-assisted CT triage, ML prediction of operative need, and ICG fluorescence angiography for bowel viability represent current frontiers.',
        explanation: `Automated CT detection of obstruction and strangulation signs. ICG fluorescence angiography (SPY system) sensitivity >90% for non-viable bowel — superior to clinical judgment. NELA audit benchmarks: risk-adjusted mortality, consultant-led care within 6h, goal-directed fluid therapy.`,
        keyTerms: [
          { term: 'ICG fluorescence angiography', definition: 'Intraoperative near-infrared perfusion mapping using indocyanine green for bowel viability assessment.' },
        ],
      },
    },
  ),

  giHemorrhage: entry(
    'abdominal-gi-hemorrhage',
    'Gastrointestinal Hemorrhage',
    'Hemorragia Gastrointestinal',
    {
      1: {
        level: 1,
        summary: 'Bleeding inside your stomach or intestines is an emergency. Signs include vomiting blood or having black tarry poop.',
        explanation: `Internal bleeding in the digestive system can show up as: vomiting bright red blood or dark coffee-ground material, black sticky poop (old blood), or bright red blood in poop. You may feel dizzy, weak, or faint.\n\n**Call 911 immediately** if you see these signs.`,
        keyTerms: [{ term: 'melena', definition: 'Black, tarry, foul-smelling stool caused by digested blood from the stomach.' }],
        analogies: ['Internal bleeding is like a hidden leak — you cannot see it, but the damage gets worse every minute.'],
        patientCounselingPoints: ['Black tarry stools are an emergency even without pain.', 'Heces negras como alquitran son una emergencia.'],
      },
      2: {
        level: 2,
        summary: 'Upper GI bleeding (hematemesis, melena) and lower GI bleeding (hematochezia) require different evaluation. Signs of dangerous blood loss include tachycardia, hypotension, and pallor.',
        explanation: `Upper GI sources: peptic ulcers, varices, Mallory-Weiss tears. Lower GI: diverticulosis, angiodysplasia, cancer. Hematemesis/coffee-ground emesis = upper. Melena = upper. Hematochezia = lower (or brisk upper). Shock signs: HR >100, SBP <90, orthostatic changes, confusion.`,
        keyTerms: [
          { term: 'hematemesis', definition: 'Vomiting blood — bright red (active) or coffee-ground (partially digested).' },
          { term: 'hematochezia', definition: 'Bright red blood per rectum, usually from lower GI source.' },
        ],
      },
      3: {
        level: 3,
        summary: 'Glasgow-Blatchford score stratifies pre-endoscopy risk. Endoscopy within 24h (12h if high-risk). Restrictive transfusion (Hgb 7–9) per Villanueva trial.',
        explanation: `GBS score 0 = very low risk, possible outpatient. Score >=6 = high risk. Resuscitation: 2 large-bore IVs, type and cross. PPI infusion for suspected peptic ulcer. Variceal bleeding: octreotide + antibiotics + urgent banding. Forrest classification guides endoscopic therapy and rebleeding risk.`,
        keyTerms: [
          { term: 'Glasgow-Blatchford score', definition: 'Pre-endoscopy risk stratification for upper GI bleeding using clinical and lab data.' },
          { term: 'Forrest classification', definition: 'Endoscopic grading of ulcer bleeding stigmata guiding intervention.' },
        ],
        clinicalNotes: 'Restrictive transfusion (Hgb trigger 7) improves survival. Over-transfusion increases portal pressure and variceal rebleeding.',
      },
      4: {
        level: 4,
        summary: 'Balanced resuscitation (1:1:1), 4-factor PCC for warfarin reversal, and interventional radiology embolization for endoscopy-refractory bleeding.',
        explanation: `PROPPR trial: 1:1:1 pRBC:FFP:platelets. TXA: HALT-IT showed no mortality benefit in GI bleeding specifically. Coagulopathy: FFP for INR >1.5, platelets for <50K with active bleed, cryo for fibrinogen <150. 4-factor PCC for urgent warfarin reversal. IR embolization when endoscopy fails.`,
        keyTerms: [
          { term: '4-factor PCC', definition: 'Prothrombin complex concentrate for rapid warfarin reversal in bleeding emergencies.' },
        ],
        clinicalNotes: 'Villanueva trial: lower mortality with Hgb trigger 7 vs 9. Exception: active hemorrhagic shock — transfuse aggressively.',
      },
      5: {
        level: 5,
        summary: 'AI-powered endoscopic bleeding detection, hemostatic powders, and over-the-scope clips represent evolving GI bleeding management.',
        explanation: `AI-assisted endoscopy identifies bleeding lesions in real-time. Novel hemostatic agents: TC-325 hemostatic powder, over-the-scope clips (OTSC) for refractory bleeding. Quality metrics: time to endoscopy <24h, rebleeding rate <10%, transfusion protocol adherence. Disparities: lower endoscopy rates in minority populations.`,
        keyTerms: [
          { term: 'OTSC', definition: 'Over-the-scope clip — large-bore endoscopic clip for refractory GI bleeding and perforations.' },
        ],
      },
    },
  ),

  rupturedAAA: entry(
    'abdominal-ruptured-aaa',
    'Ruptured Abdominal Aortic Aneurysm',
    'Aneurisma Aortico Abdominal Roto',
    {
      1: {
        level: 1,
        summary: 'The aorta is the biggest blood vessel in your body. If it balloons out and bursts in the belly, it is a life-threatening emergency.',
        explanation: `The aorta carries blood from your heart to the rest of your body. Sometimes the wall weakens and balloons out (aneurysm). If it bursts (ruptures), you can bleed to death very quickly.\n\n**Warning signs:** Sudden severe belly or back pain, feeling faint, and a pulsing feeling in the belly.\n\n**Call 911 immediately.**`,
        keyTerms: [{ term: 'aneurysm', definition: 'A balloon-like bulge in a blood vessel wall that can burst.' }],
        analogies: ['An aneurysm is like a weak spot on a garden hose — it bulges and can burst under pressure.'],
        patientCounselingPoints: ['Men over 65 who have smoked should be screened with ultrasound.'],
      },
      2: {
        level: 2,
        summary: 'Ruptured AAA presents with the classic triad: abdominal/back pain, hypotension, and pulsatile abdominal mass. Mortality is 80–90% without surgery.',
        explanation: `Risk factors: age >65, male sex, smoking, hypertension, family history. Classic triad present in only 50% of cases. Contained rupture may present with back/flank pain and hemodynamic stability initially. Misdiagnosis as renal colic is common. Screening: one-time US for men 65–75 who have ever smoked (USPSTF).`,
        keyTerms: [
          { term: 'pulsatile mass', definition: 'An expansile pulsation felt in the abdomen suggesting aortic aneurysm.' },
        ],
      },
      3: {
        level: 3,
        summary: 'CT angiography confirms diagnosis. EVAR vs. open repair depends on anatomy and stability. Permissive hypotension until surgical control.',
        explanation: `Hemodynamically stable: CT angiography to confirm and plan. Unstable: OR immediately (bedside US if available). EVAR (endovascular aneurysm repair) if anatomically suitable — lower 30-day mortality than open repair. Permissive hypotension (SBP 70–90) to limit bleeding before aortic control. Massive transfusion protocol activation.`,
        keyTerms: [
          { term: 'EVAR', definition: 'Endovascular aneurysm repair — stent-graft deployment via femoral access.', pronunciation: 'EE-var' },
          { term: 'permissive hypotension', definition: 'Deliberately tolerating low BP to reduce bleeding before surgical hemorrhage control.' },
        ],
        clinicalNotes: 'Do not delay OR for imaging in unstable patients. Classic triad present in only ~50% — high clinical suspicion required.',
      },
      4: {
        level: 4,
        summary: 'Complex EVAR, chimney grafts, and damage control resuscitation optimize outcomes. Abdominal compartment syndrome is a major postoperative risk.',
        explanation: `Complex anatomy: fenestrated/branched EVAR, chimney/snorkel grafts. Open repair: supraceliac clamp, tube or bifurcated graft. Postop ACS risk from massive resuscitation — monitor bladder pressures. Colonic ischemia in 2–7% post-AAA repair (IMA ligation). Spinal cord ischemia risk with thoracoabdominal extension.`,
        keyTerms: [
          { term: 'fenestrated EVAR', definition: 'Custom stent-graft with fenestrations preserving flow to renal and visceral vessels.' },
        ],
        clinicalNotes: 'Mortality: ruptured AAA open repair 40–50%, EVAR 20–30%. Screening prevents rupture — advocate for guideline adherence.',
      },
      5: {
        level: 5,
        summary: 'REBOA as bridge to repair, AI-based rupture risk prediction, and genomic markers for aneurysm growth are active research frontiers.',
        explanation: `REBOA Zone I for temporary hemorrhage control. Partial REBOA reduces ischemic complications. AI models predict rupture risk from CT morphology (wall stress analysis, intraluminal thrombus characteristics). Genomic studies: MMP variants, TGF-beta pathway mutations associated with aneurysm growth. Population screening optimization using ML risk models.`,
        keyTerms: [
          { term: 'REBOA', definition: 'Resuscitative Endovascular Balloon Occlusion of the Aorta — temporary hemorrhage control bridge to surgery.' },
        ],
      },
    },
  ),

  pancreatitis: entry(
    'abdominal-pancreatitis',
    'Acute Pancreatitis',
    'Pancreatitis Aguda',
    {
      1: {
        level: 1,
        summary: 'The pancreas is an organ behind your stomach. When it gets inflamed, it causes severe upper belly pain that goes to the back.',
        explanation: `Pancreatitis means the pancreas is inflamed and angry. The most common causes are gallstones and heavy alcohol use. The pain is in the upper belly and often goes straight through to the back. You may feel better leaning forward.\n\n**When to go to the ER:** Severe upper belly pain lasting hours, especially with nausea and vomiting.`,
        keyTerms: [{ term: 'pancreas', definition: 'An organ behind the stomach that helps digest food and control blood sugar.' }],
        analogies: ['The pancreas digesting itself is like a washing machine leaking soap that damages its own parts.'],
        patientCounselingPoints: ['Gallstones and heavy alcohol use are the two most common causes.'],
      },
      2: {
        level: 2,
        summary: 'Diagnosis requires 2 of 3: characteristic pain, lipase >3x upper limit, and imaging findings. Severity ranges from mild (most cases) to severe with organ failure.',
        explanation: `Gallstones (40%) and alcohol (30%) cause most cases. Epigastric pain radiating to back, worse supine, better leaning forward. Lipase more sensitive and specific than amylase. Ranson criteria and BISAP score assess severity. Most cases mild and self-limited. Severe: persistent organ failure (>48h), 30–50% mortality.`,
        keyTerms: [
          { term: 'lipase', definition: 'Pancreatic enzyme; level >3x normal is diagnostic of pancreatitis.' },
          { term: 'BISAP score', definition: 'Bedside severity index: BUN >25, impaired mental status, SIRS, age >60, pleural effusion.' },
        ],
      },
      3: {
        level: 3,
        summary: 'Revised Atlanta classification defines severity tiers. Early aggressive fluid resuscitation with LR (WATERFALL trial), early enteral nutrition, and ERCP for biliary pancreatitis with cholangitis.',
        explanation: `Atlanta: mild (no complications), moderately severe (transient OF <48h or local complications), severe (persistent OF >48h). LR preferred over NS (WATERFALL 2022). Early oral diet as tolerated in mild cases. ERCP within 24h only if concurrent cholangitis — not for predicted severe biliary pancreatitis alone. Infected necrosis: step-up approach.`,
        keyTerms: [
          { term: 'Revised Atlanta Classification', definition: 'Severity grading: mild, moderately severe, severe based on organ failure duration.' },
          { term: 'WATERFALL trial', definition: '2022 trial showing LR superior to NS for pancreatitis fluid resuscitation.' },
        ],
        clinicalNotes: 'Do not delay cholecystectomy: perform during same admission for mild gallstone pancreatitis to prevent recurrence.',
      },
      4: {
        level: 4,
        summary: 'Infected pancreatic necrosis management uses step-up approach (PANTER/PENGUIN trials). Walled-off necrosis amenable to endoscopic transgastric necrosectomy.',
        explanation: `Infected necrosis: suspect if clinical deterioration at 2–4 weeks; gas in collection on CT is diagnostic. Step-up: antibiotics → percutaneous/endoscopic drainage → minimally invasive necrosectomy → open (last resort). PYTHON trial: NG feeding non-inferior to NJ. ACS risk with aggressive resuscitation.`,
        keyTerms: [
          { term: 'step-up approach', definition: 'Graduated management of infected necrosis: antibiotics → drainage → necrosectomy → open surgery.' },
        ],
        clinicalNotes: 'Delay intervention for infected necrosis to >4 weeks if possible for better demarcation of necrotic tissue.',
      },
      5: {
        level: 5,
        summary: 'Novel biomarkers (IL-6, angiopoietin-2, TAP), genetic risk factors (PRSS1, SPINK1), and ML severity prediction models are advancing precision management.',
        explanation: `Urinary TAP, IL-6, IL-8, angiopoietin-2 predict severity better than traditional scores. PRSS1, SPINK1, CFTR mutations predict recurrence. ML models combining clinical + biomarker data outperform BISAP/Ranson. Pharmacogenomics emerging for treatment optimization. EUS-guided drainage with lumen-apposing metal stents for WON becoming standard.`,
        keyTerms: [
          { term: 'PRSS1 mutation', definition: 'Hereditary pancreatitis gene — cationic trypsinogen variant causing recurrent pancreatitis.' },
        ],
      },
    },
  ),

  peritonitis: entry(
    'abdominal-peritonitis',
    'Peritonitis',
    'Peritonitis',
    {
      1: {
        level: 1,
        summary: 'Peritonitis means the lining inside your belly is infected or inflamed. Your belly becomes hard, very painful, and this is a surgical emergency.',
        explanation: `The peritoneum is a thin lining inside your belly that covers your organs. When it gets infected — from a burst appendix, stomach ulcer hole, or other cause — the belly becomes extremely painful and hard as a board. You cannot move without severe pain.\n\n**Call 911:** Hard belly, extreme pain, fever, looking very sick.`,
        keyTerms: [{ term: 'peritoneum', definition: 'The thin lining inside your belly that covers and protects the organs.' }],
        analogies: ['Peritonitis is like a fire alarm going off — the body locks down the belly to protect against the threat inside.'],
        patientCounselingPoints: ['A hard belly that hurts to touch needs emergency care immediately.', 'Una barriga dura y dolorosa necesita atencion de emergencia.'],
      },
      2: {
        level: 2,
        summary: 'Primary peritonitis is from infection without perforation (e.g., SBP in cirrhosis). Secondary peritonitis is from perforation or organ rupture and requires surgery.',
        explanation: `Primary (spontaneous): SBP in cirrhosis/ascites — diagnosed by paracentesis (PMN >250). Treat with ceftriaxone. Secondary: perforation of appendix, ulcer, diverticulum, or bowel. Board-like rigidity, involuntary guarding, rebound tenderness, absent bowel sounds. Surgical emergency — source control is the priority.`,
        keyTerms: [
          { term: 'SBP', definition: 'Spontaneous bacterial peritonitis — infection of ascites without perforation, common in cirrhosis.' },
          { term: 'involuntary guarding', definition: 'Reflex abdominal wall contraction the patient cannot relax — a sign of peritoneal inflammation.' },
        ],
      },
      3: {
        level: 3,
        summary: 'Peritoneal signs (guarding, rebound, rigidity) indicate surgical emergency. CT with free air confirms perforation. Source control within 6 hours improves survival.',
        explanation: `Free air (pneumoperitoneum) on CT = hollow viscus perforation until proven otherwise. Upright CXR shows free air under diaphragm (70% sensitivity). Sepsis bundle: blood cultures, broad-spectrum antibiotics (pip-tazo or meropenem + vancomycin), fluid resuscitation. Source control: surgery or percutaneous drainage. Delayed source control increases mortality.`,
        keyTerms: [
          { term: 'pneumoperitoneum', definition: 'Free air in the peritoneal cavity indicating hollow organ perforation.' },
          { term: 'source control', definition: 'Surgical or interventional elimination of the infection source — critical in secondary peritonitis.' },
        ],
        clinicalNotes: 'Source control within 6h of sepsis onset significantly improves survival. Broad-spectrum antibiotics are a bridge, not a substitute.',
      },
      4: {
        level: 4,
        summary: 'Tertiary peritonitis (persistent/recurrent after adequate source control) carries >50% mortality. Damage control surgery and open abdomen management may be required.',
        explanation: `Tertiary peritonitis: nosocomial organisms (Candida, Enterococcus, resistant GNRs) after adequate prior intervention. Risk factors: immunosuppression, malnutrition, ICU stay. Damage control: abbreviated surgery, temporary closure, ICU resuscitation, planned re-exploration. Fungal peritonitis: empiric antifungals if risk factors present.`,
        keyTerms: [
          { term: 'tertiary peritonitis', definition: 'Persistent or recurrent peritonitis after adequate source control — often nosocomial pathogens with >50% mortality.' },
        ],
        clinicalNotes: 'Consider fungal coverage (fluconazole or echinocandin) in tertiary peritonitis, post-operative leaks, and immunocompromised patients.',
      },
      5: {
        level: 5,
        summary: 'Biomarker-guided antibiotic stewardship, molecular diagnostics for pathogen identification, and peritoneal cytokine profiling are emerging in peritonitis management.',
        explanation: `PCT-guided antibiotic duration reduces unnecessary exposure. Rapid molecular diagnostics (PCR panels) identify pathogens and resistance in hours vs. days. Peritoneal fluid cytokine profiling (IL-6, TNF-alpha) may predict tertiary peritonitis. NELA audit: consultant-led care within 6h, goal-directed fluid therapy, critical care admission for high-risk patients reduce mortality.`,
        keyTerms: [
          { term: 'PCT-guided stewardship', definition: 'Using procalcitonin levels to guide antibiotic duration — reduces unnecessary antibiotic exposure.' },
        ],
      },
    },
  ),
};

export default abdominalWarnings;
