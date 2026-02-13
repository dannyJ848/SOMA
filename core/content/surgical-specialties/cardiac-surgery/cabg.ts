/**
 * Coronary Artery Bypass Grafting (CABG)
 *
 * Surgical treatment for coronary artery disease by bypassing blocked arteries.
 */

import { EducationalContent } from '../../types';

export const cabgContent: EducationalContent = {
  id: 'cardiac-surgery-cabg',
  type: 'topic',
  name: 'Coronary Artery Bypass Grafting',
  alternateNames: ['CABG', 'Coronary Bypass', 'Bypass Surgery', 'Cabbage'],

  levels: {
    1: {
      level: 1,
      summary: 'CABG is a surgery that improves blood flow to the heart by using blood vessels from other parts of the body to go around blocked heart arteries.',
      explanation: `## What Is CABG Surgery?

Imagine your heart is like a house that needs water pipes to bring water in. The heart has tubes called arteries that bring blood with oxygen. Sometimes these tubes get clogged, like a pipe with built-up gunk.

CABG surgery creates new pathways for blood to flow around these clogged areas. The surgeon takes a healthy blood vessel from somewhere else in your body and uses it to make a detour around the blockage.

## How Does It Help?

When heart arteries are blocked, the heart muscle doesn't get enough oxygen-rich blood. This can cause chest pain (angina) or even a heart attack. After CABG surgery, blood flows more freely to the heart muscle, which can:

- Relieve chest pain
- Improve ability to be active
- Reduce risk of heart attack
- Help you live longer

## What Happens During Surgery?

1. **Anesthesia** - You are put to sleep so you don't feel anything
2. **Incision** - Surgeon opens your chest to reach your heart
3. **Bypass grafts** - Healthy blood vessels are attached to create new paths
4. **Recovery** - You stay in the hospital for about 5-7 days

## Recovery

Most people feel better within 4-6 weeks, but full recovery takes 3-6 months. You'll need to:
- Take medicines as prescribed
- Walk a little more each day
- Avoid heavy lifting for 6-8 weeks
- Follow up with your doctor regularly`,

      keyTerms: [
        { term: 'CABG', definition: 'Coronary Artery Bypass Grafting - surgery to bypass blocked heart arteries' },
        { term: 'Coronary arteries', definition: 'Blood vessels that supply oxygen-rich blood to the heart muscle' },
        { term: 'Graft', definition: 'A healthy blood vessel used to create a new pathway for blood flow' },
        { term: 'Angina', definition: 'Chest pain caused by reduced blood flow to the heart muscle' },
      ],
      analogies: [
        'CABG is like building a detour road around a traffic jam - cars can still get to their destination, just using a different route.',
        'Think of your arteries like highways. When there\'s a roadblock, CABG creates an alternate route so traffic can keep moving.',
        'Your heart is like an engine that needs fuel. When the fuel pipes are clogged, CABG creates new fuel lines.',
      ],
      examples: [
        'A person with severe chest pain that doesn\'t improve with medicines might need CABG',
        'Someone who had a heart attack and has multiple blocked arteries may need bypass surgery',
        'A patient whose stress test shows poor blood flow to the heart might be recommended for CABG',
      ],
    },

    2: {
      level: 2,
      summary: 'CABG is indicated for multivessel coronary disease, left main disease, or failed medical therapy. The surgery uses graft vessels (LITA, radial artery, saphenous vein) to bypass stenotic coronary segments.',
      explanation: `## CABG Indications

CABG is recommended for patients with:

**Anatomic Indications:**
- Left main coronary artery stenosis >50%
- Three-vessel disease (especially with diabetes)
- Two-vessel disease with proximal LAD stenosis
- Failed PCI or in-stent restenosis

**Clinical Indications:**
- Refractory angina despite optimal medical therapy
- Ischemic cardiomyopathy with viable myocardium
- Acute coronary syndromes not amenable to PCI
- Complications of PCI (coronary perforation, extensive dissection)

## Graft Conduits

**Arterial Grafts (preferred):**
- Left Internal Thoracic Artery (LITA) to LAD - 90% 10-year patency
- Right Internal Thoracic Artery (RITA)
- Radial artery - good for high-grade stenosis (>90%)
- Right Gastroepiploic artery

**Venous Grafts:**
- Great Saphenous Vein (GSV) - 50-60% 10-year patency
- Lower long-term patency than arterial grafts

## Surgical Technique

1. **Median Sternotomy** - Standard approach
2. **Cardiopulmonary Bypass (CPB)** - Conventional on-pump CABG
3. **Off-pump CABG (OPCAB)** - Beating heart surgery
4. **Minimally Invasive** - MIDCAB, robotic-assisted

## Outcomes

- Operative mortality: 1-3% (elective)
- 5-year survival: 85-90%
- Symptom relief in 90%+ of patients
- Graft patency: LITA >90%, SVG ~60% at 10 years`,

      keyTerms: [
        { term: 'LITA', definition: 'Left Internal Thoracic Artery - preferred graft for LAD bypass with excellent long-term patency' },
        { term: 'Cardiopulmonary bypass', definition: 'Machine that takes over heart and lung function during surgery' },
        { term: 'Stenosis', definition: 'Narrowing of a blood vessel, usually due to plaque buildup' },
        { term: 'Graft patency', definition: 'How likely a bypass graft remains open over time' },
        { term: 'LAD', definition: 'Left Anterior Descending artery - most important coronary artery' },
      ],
      analogies: [
        'Arterial grafts are like premium pipes that last longer, while vein grafts are like standard pipes that may wear out sooner.',
        'Cardiopulmonary bypass is like a temporary life support machine that does the work of your heart and lungs during surgery.',
      ],
      examples: [
        'A diabetic patient with three blocked arteries gets better survival with CABG than stents',
        'A 65-year-old with left main disease has a 5-year survival of 85% after CABG',
        'Someone with a failed stent in a critical artery needs CABG as backup',
      ],
      clinicalNotes: 'CABG is superior to PCI for diabetic patients with multivessel disease (FREEDOM trial). Left internal mammary to LAD is the single most important determinant of long-term survival.',
    },

    3: {
      level: 3,
      summary: 'CABG addresses coronary artery disease through surgical revascularization. The choice between on-pump and off-pump techniques, graft selection, and completeness of revascularization significantly impact outcomes.',
      explanation: `## Surgical Approaches

**On-Pump CABG (Conventional)**
- Cardiopulmonary bypass with aortic cross-clamping
- Cardioplegic arrest (cold blood or crystalloid)
- Advantages: Stable field, precise anastomosis
- Risks: Aortic manipulation, inflammation, neurocognitive effects

**Off-Pump CABG (OPCAB)**
- Beating heart surgery with stabilizers
- Avoids CPB and aortic cross-clamp
- Advantages: Reduced stroke, renal injury, transfusion
- Challenges: Technical difficulty, hemodynamic instability
- Equivalent long-term outcomes, reduced short-term complications

**Minimally Invasive Direct CABG (MIDCAB)**
- Left anterior thoracotomy approach
- LITA to LAD without CPB
- Limited to anterior targets

## Graft Selection Strategy

**Arterial Conduits:**
- LITA to LAD: Gold standard, 90%+ 10-year patency
- BITA (Bilateral ITA): Improved survival, increased sternal wound risk
- Radial artery: Use for target stenosis >70-80%, competitive flow risk
- Right gastroepiploic: Inferior-lateral wall, technically demanding

**Sequential vs. Individual Grafts:**
- Sequential: One graft to multiple targets, saves conduits
- Individual: Independent grafts, more options for revision

**T-Graft and Y-Graft Configurations:**
- All arterial revascularization with limited conduits
- Risk of graft steal phenomenon

## Perioperative Management

**Preoperative:**
- Antiplatelet management (stop clopidogrel 5-7 days)
- Beta-blockers continue throughout
- Statins continue throughout
- Anemia correction if Hb <10 g/dL

**Intraoperative:**
- TEE monitoring for ventricular function
- Cell saver for autotransfusion
- Glycemic control (target 140-180 mg/dL)

**Postoperative:**
- ICU monitoring for hemodynamic stability
- Atrial fibrillation prophylaxis (beta-blockers, amiodarone)
- Early extubation protocols (fast-track cardiac anesthesia)
- Chest tube management (drainage <100 mL/12h)

## Complications

**Early (<30 days):**
- Atrial fibrillation: 25-30%
- Wound infection: 1-3% (deep sternal infection 0.5-1%)
- Stroke: 1-2%
- Renal failure: 2-5%
- Mortality: 1-3% (elective)

**Late:**
- Graft occlusion
- Need for reintervention
- Sternal wound complications`,

      keyTerms: [
        { term: 'Cardioplegia', definition: 'Solution used to stop and protect the heart during surgery' },
        { term: 'Sternal wound infection', definition: 'Serous infection of the breastbone incision, can be life-threatening if deep' },
        { term: 'Competitive flow', definition: 'When native vessel flow competes with graft flow, risking graft failure' },
        { term: 'Sequential graft', definition: 'One graft conduit with side-to-side anastomoses to multiple target vessels' },
        { term: 'BITA', definition: 'Bilateral Internal Thoracic Arteries - using both mammary arteries for grafting' },
      ],
      analogies: [
        'Off-pump CABG is like fixing a car engine while it\'s still running - more challenging but avoids the "engine shutdown" of bypass.',
        'Sequential grafting is like a highway with multiple exits - one main road serving several destinations.',
      ],
      examples: [
        'A diabetic with three-vessel disease gets BITA grafts for improved survival',
        'A patient with calcified aorta gets off-pump CABG to reduce stroke risk',
        'Someone with previous sternal radiation gets a radial artery graft to avoid sternum complications',
      ],
      clinicalNotes: 'SYNTAX trial: CABG superior to PCI for high SYNTAX score (>32), three-vessel disease. FREEDOM trial: CABG superior to PCI for diabetic patients with multivessel disease. Complete revascularization is more important than the specific technique.',
    },

    4: {
      level: 4,
      summary: 'CABG involves complex decision-making regarding patient selection, conduit strategy, and surgical technique. Understanding the pathophysiology of graft failure, neurological complications, and long-term outcomes is essential for optimal management.',
      explanation: `## Patient Risk Stratification

**STS Risk Calculator** (Society of Thoracic Surgeons)
- Predicts operative mortality based on: age, renal function, lung disease, previous cardiac surgery, urgency
- EuroSCORE II also used for European practices

**High-Risk Groups:**
- Redo sternosis: 2-3x mortality, risk of heart injury
- Severe LV dysfunction (EF<25%): 5-10% mortality
- Renal failure (dialysis): 10%+ mortality
- Advanced age (>80): 2-3x risk, but still reasonable outcomes

## Pathophysiology of Graft Failure

**Early Failure (<30 days):**
- Technical issues: Poor anastomosis, tension, kinking
- Competitive flow: Poor runoff, target stenosis
- Thrombosis: Inadequate antiplatelet therapy

**Late Failure (>1 year):**
- Neointimal hyperplasia (vein grafts)
- Atherosclerosis progression
- Graft remodeling and dilation

**Radial Artery Spasm:**
- Calcium channel blocker prophylaxis (diltiazem)
- Avoid excessive distension during harvesting
- Critical stenosis requirement (>70-80%)

## Neurological Complications

**Stroke (1-2%):**
- Mechanisms: Aortic atherosclerosis embolization, hypoperfusion, atrial fibrillation
- Prevention: Epiaortic ultrasound, single cross-clamp, off-pump technique
- Heparin-coated circuits reduce embolic load

**Cognitive Decline (30-50% at discharge):**
- Usually reversible by 3 months
- Microembolic load from CPB
- Hypoperfusion, inflammation, genetic susceptibility (APOE4)

**Delirium:**
- Risk factors: Age, pre-existing cognitive impairment, opioids, sleep deprivation
- Prevention: Minimize benzos, early mobilization, orientation protocols

## Long-Term Outcomes

**Graft Patency by Type:**
- LITA-LAD: 90-95% at 10 years, 85-90% at 20 years
- Free RITA: 80-85% at 10 years
- Radial artery: 80-90% at 10 years (to tight stenosis)
- SVG: 50-60% at 10 years, 25-40% at 20 years

**Survival by Indication:**
- Left main disease: 10-year survival 70-80%
- Three-vessel disease: 10-year survival 60-70%
- Emergency CABG for AMI: 30-day mortality 5-10%

**Quality of Life:**
- 80-90% report significant symptom improvement
- Return to work: 70% at 3 months
- Physical functioning improves significantly

## Secondary Prevention

**Lifelong Therapy:**
- Antiplatelet: Aspirin 81-162 mg indefinitely
- Statin: High-intensity (atorvastatin 40-80 mg, rosuvastatin 20-40 mg)
- Beta-blocker: Carvedilol, metoprolol succinate (if LV dysfunction)
- ACE-I/ARB: If LV dysfunction, diabetes, or CKD

**Risk Factor Modification:**
- Smoking cessation: Non-negotiable
- Blood pressure: <130/80 mmHg
- LDL: <70 mg/dL (very high risk)
- HbA1c: <7% for diabetics`,

      keyTerms: [
        { term: 'Neointimal hyperplasia', definition: 'Thickening of the inner lining of a blood vessel in response to injury, can narrow grafts' },
        { term: 'Competitive flow', definition: 'When native vessel has better flow than graft, causing graft failure' },
        { term: 'Epiaortic ultrasound', definition: 'Imaging of the aorta during surgery to identify atherosclerotic plaques that could cause stroke' },
        { term: 'LVEF', definition: 'Left Ventricular Ejection Fraction - measure of heart pumping function' },
        { term: 'Redo sternotomy', definition: 'Opening the chest again after previous heart surgery - higher risk due to scar tissue' },
      ],
      analogies: [
        'Neointimal hyperplasia is like scar tissue forming inside a pipe, gradually narrowing it over time.',
        'Epiaortic ultrasound is like checking the road before driving - it helps you avoid potholes (plaques) that could cause accidents.',
      ],
      examples: [
        'A patient with calcified aorta gets epiaortic ultrasound to identify safe clamp sites',
        'Someone with radial artery graft to a 50% stenosis fails due to competitive flow',
        'A diabetic patient with SVG graft needs aggressive lipid lowering to prevent graft atherosclerosis',
      ],
      clinicalNotes: 'BITA grafts improve survival but increase sternal wound risk, especially in diabetics, obese patients, and those on steroids. Consider skeletonized ITA harvest to preserve sternal blood supply. All-arterial revascularization shows improved long-term survival but requires careful patient selection.',
    },

    5: {
      level: 5,
      summary: 'CABG represents the gold standard for multivessel coronary revascularization. Advanced concepts include hybrid revascularization, no-touch aortic techniques, and personalized graft selection based on genetic and anatomical factors.',
      explanation: `## Advanced Surgical Techniques

**No-Touch Aortic Techniques**
- Complete avoidance of aortic manipulation
- In-situ arterial grafts only
- Aortic "no-clamp" or "anaortic" protocols
- Reduces stroke risk significantly in atherosclerotic aortas

**Hybrid Revascularization**
- LITA to LAD (CABG) + PCI to non-LAD lesions
- Combines best of both worlds
- Particularly useful for high surgical risk patients
- Requires heart team approach and staged procedures

**Endoscopic Vein Harvesting (EVH)**
- Reduced wound complications, better cosmesis
- Concerns about graft damage during harvest
- Meta-analyses show no difference in patency or survival
- Skilled technique essential for good outcomes

## Controversies and Evolving Practice

**Bilateral vs. Single ITA:**
- BITA improves survival (ROI, ART registry data)
- Increased deep sternal wound infection (DSWI) risk
- Skeletonized harvest reduces DSWI
- Patient selection critical (diabetics, obese, steroids = risk)

**On-Pump vs. Off-Pump:**
- CORONARY, ROOBY, GOPCABE trials show equivalence
- Off-pump reduces stroke, renal injury, transfusion
- On-pump allows complete revascularization
- Surgeon expertise most important factor

**Multiple Arterial Grafts:**
- Survival benefit with 2+ arterial grafts
- Radial artery: Excellent when target stenosis >80%
- RITA: Good as free graft or to RCA
- Complete arterial revascularization achievable

## Genetics and Personalized Approach

**Antiplatelet Response:**
- CYP2C19 polymorphisms affect clopidogrel response
- Aspirin resistance (measured by TXB2, PFA-100)
- Tailor therapy based on platelet function testing

**Graft Healing and Remodeling:**
- Endothelialization timeline differs by conduit type
- Arterial grafts maintain vasa vasorum
- Vein grafts lose vasa vasorum, develop atherosclerosis
- External stenting shows promise for SVG patency

## Future Directions

**Hybrid OR Suites:**
- Combined surgical and interventional capabilities
- Immediate quality assessment (graft flow measurement)
- "Hybrid" procedures increasingly common

**Robotic and Minimally Invasive:**
- Totally endoscopic CABG (TECAB) with robotic assistance
- Limited adoption due to cost, learning curve
- May be ideal for specific patient subsets

**Regenerative Approaches:**
- Tissue-engineered conduits
- Stem cell therapy for graft enhancement
- Gene therapy to prevent vein graft failure

## Quality Metrics

**STS National Database Metrics:**
- Operative mortality (observed vs. expected)
- Return to OR for bleeding
- Deep sternal wound infection
- Prolonged ventilation >24 hours
- Stroke
- Acute kidney injury
- 30-day readmission`,

      keyTerms: [
        { term: 'Hybrid revascularization', definition: 'Combining CABG (usually LITA to LAD) with PCI to other coronary arteries' },
        { term: 'No-touch aortic', definition: 'Surgical technique avoiding any clamping or manipulation of the aorta to reduce embolic stroke risk' },
        { term: 'Skeletonized harvest', definition: 'Removing the IMA as a pedicle without surrounding muscle to preserve sternal blood supply' },
        { term: 'CYP2C19', definition: 'Liver enzyme that metabolizes clopidogrel; genetic variants affect antiplatelet response' },
        { term: 'TECAB', definition: 'Totally Endoscopic Coronary Artery Bypass - robotic surgery through small incisions' },
      ],
      analogies: [
        'Hybrid revascularization is like using both plumbing and patching to fix different types of leaks in a house.',
        'Skeletonized harvest is like carefully removing a cable without damaging the surrounding insulation.',
      ],
      examples: [
        'A high-risk patient with severe aortic atherosclerosis gets anaortic off-pump CABG',
        'A 50-year-old diabetic gets BITA grafts with skeletonized harvest technique',
        'CYP2C19 intermediate metabolite switched from clopidogrel to ticagrelor after CABG',
      ],
      clinicalNotes: 'EXCEL and NOBLE trials raised questions about CABG vs. PCI for left main disease. Longer-term (5+ year) follow-up favors CABG, especially with low SYNTAX scores. ESC guidelines recommend Heart Team approach for left main and complex three-vessel disease.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['cardiac-surgery', 'cabg', 'coronary-artery-disease', 'revascularization'],
    systems: ['cardiovascular'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
