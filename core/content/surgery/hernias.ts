/**
 * Hernias
 *
 * Comprehensive general surgery content covering abdominal wall hernias
 * including inguinal, femoral, incisional, umbilical, and hiatal hernias.
 * Covers anatomy, classification, repair techniques, and mesh considerations.
 */

import { EducationalContent } from '../types';

export const hernias: EducationalContent = {
  id: 'surgery-hernias',
  type: 'condition',
  name: 'Hernias',
  nameEs: 'Hernias',
  alternateNames: ['Abdominal Wall Hernias', 'Hernia Repair', 'Herniorrhaphy'],

  levels: {
    1: {
      level: 1,
      summary:
        'A hernia is when part of the inside of your body pushes through a weak spot in the muscle or tissue wall, creating a bulge that may need surgery to fix.',
      explanation: `A hernia happens when something inside your body (usually part of the intestine or fatty tissue) pushes through a weak spot in the muscles that normally hold everything in place. Think of it like a bulge forming in a weak spot of an inner tube.

**Common Types of Hernias:**

1. **Inguinal Hernia (Groin)** — The most common type. A bulge appears in the groin area, especially when you cough, strain, or lift something heavy. Much more common in boys and men.

2. **Femoral Hernia (Upper Thigh)** — A bulge that appears in the upper thigh near the groin. More common in women. Can be dangerous because it is more likely to get stuck.

3. **Incisional Hernia** — A bulge that appears at the site of a previous surgery scar. The scar may be weaker than normal tissue.

4. **Umbilical Hernia (Belly Button)** — A bulge at or near the belly button. Common in babies (most close on their own by age 4-5). Also seen in adults, especially during pregnancy or with obesity.

5. **Hiatal Hernia (Inside the Chest)** — Part of the stomach pushes up through an opening in the diaphragm (the muscle between your chest and belly). This can cause heartburn and reflux.

**Warning Signs — When a Hernia Is an Emergency:**
- The bulge becomes very painful and hard
- You cannot push the bulge back in
- The skin over the bulge turns red or purple
- You feel sick to your stomach and are throwing up
- You cannot pass gas or have a bowel movement

These signs mean the hernia might be trapped (incarcerated) or the blood supply might be cut off (strangulated), which is a medical emergency.

**How Hernias Are Fixed:**
- Most hernias are fixed with surgery
- A piece of mesh (like a tiny screen) is often placed to strengthen the weak area
- Surgery can be done with a big cut (open) or with small holes and a camera (laparoscopic)
- Recovery usually takes a few weeks`,
      keyTerms: [
        { term: 'hernia', definition: 'A bulge caused by an organ or tissue pushing through a weak spot in the surrounding muscle or tissue' },
        { term: 'incarcerated', definition: 'When the hernia gets stuck and cannot be pushed back in — this is a warning sign' },
        { term: 'strangulated', definition: 'When the blood supply to the hernia contents is cut off — this is a medical emergency' },
        { term: 'mesh', definition: 'A thin, flexible screen placed during surgery to strengthen the weak area and help prevent the hernia from coming back' },
      ],
      analogies: [
        'A hernia is like a weak spot in a tire — the inner tube bulges through where the tire wall is thin.',
        'Incarceration is like getting your finger stuck in a ring — the hernia contents are trapped and cannot go back in.',
        'Surgical mesh is like a patch you put on a pair of jeans — it strengthens the weak area so it does not tear again.',
      ],
      examples: [
        'A man notices a bulge in his groin that appears when he lifts heavy boxes and goes away when he lies down — this is an inguinal hernia.',
        'A baby has a small bulge at the belly button that gets bigger when crying — this is an umbilical hernia that will likely close on its own.',
      ],
      patientCounselingPoints: [
        'Most hernias do not go away on their own and usually need surgery to fix.',
        'If your hernia suddenly becomes very painful, hard, or you cannot push it back in, go to the emergency room right away.',
        'After hernia surgery, avoid heavy lifting for several weeks as directed by your surgeon.',
        'It is normal to have some swelling and bruising after hernia surgery — this will improve over time.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Hernias are classified by anatomic location and are defined by the relationship of abdominal contents to the musculofascial wall. Inguinal hernias are most common, and the distinction between incarceration and strangulation determines surgical urgency.',
      explanation: `## Hernia Types and Clinical Features

### Inguinal Hernias (75% of all hernias)
The inguinal canal is a passage through the lower abdominal wall through which the spermatic cord (in males) or round ligament (in females) passes.

**Indirect Inguinal Hernia:**
- Passes through the internal (deep) inguinal ring along the inguinal canal
- Follows the path of testicular descent — most common type in all age groups
- Congenital origin: patent processus vaginalis (a remnant from fetal development)
- The hernia sac is lateral to the inferior epigastric vessels

**Direct Inguinal Hernia:**
- Pushes directly through a weak area in the posterior wall of the inguinal canal (Hesselbach triangle)
- Acquired — associated with aging, chronic straining, obesity
- The hernia sac is medial to the inferior epigastric vessels
- Rarely incarcerates because of the wide neck

### Femoral Hernias (3-5% of all hernias)
- Pass through the femoral canal, below the inguinal ligament
- More common in women (due to wider pelvis)
- **High risk of incarceration and strangulation** (narrow, rigid canal)
- Often missed on exam — can be confused with inguinal hernia or lymph node
- Approximately 40% present as emergencies

### Incisional Hernias
- Develop at the site of prior surgical incisions
- Incidence: 10-15% of all laparotomy wounds
- Risk factors: wound infection, obesity, smoking, steroids, malnutrition
- Can be large with "loss of domain" (abdominal contents cannot fit back inside)

### Umbilical Hernias
- **Pediatric:** Defect in the umbilical ring; closes spontaneously in 85% of children by age 5
- **Adult:** Acquired, associated with obesity, pregnancy, ascites (cirrhosis)
- Incarceration risk increases with smaller defect size (narrow neck)

### Hiatal Hernias
**Type I (Sliding) — 95% of hiatal hernias:**
- Gastroesophageal junction (GEJ) slides above the diaphragm
- Associated with GERD (gastroesophageal reflux disease)
- Managed medically unless severe

**Type II-IV (Paraesophageal):**
- The gastric fundus herniates alongside the esophagus through the hiatus
- Risk of gastric volvulus (stomach twisting) — surgical emergency
- Elective repair generally recommended for symptomatic paraesophageal hernias

### Incarceration vs. Strangulation

| Feature | Incarcerated | Strangulated |
|---------|-------------|--------------|
| Reducible? | No | No |
| Blood supply | Intact | Compromised |
| Symptoms | Pain, nausea | Severe pain, signs of ischemia |
| Urgency | Urgent | Emergent |
| Exam | Tender, irreducible mass | Erythema, necrosis, peritonitis |

**Key principle:** Any hernia that cannot be reduced and is associated with signs of obstruction or ischemia requires emergent surgery.`,
      keyTerms: [
        { term: 'indirect inguinal hernia', definition: 'A hernia that passes through the internal inguinal ring and follows the inguinal canal; the most common type of hernia, related to a congenital patent processus vaginalis' },
        { term: 'direct inguinal hernia', definition: 'A hernia that protrudes directly through the posterior wall of the inguinal canal (Hesselbach triangle); an acquired defect associated with aging and straining' },
        { term: 'femoral hernia', definition: 'A hernia passing through the femoral canal below the inguinal ligament; more common in women and has the highest risk of incarceration among groin hernias' },
        { term: 'Hesselbach triangle', definition: 'The anatomic area bounded by the inguinal ligament, inferior epigastric vessels, and lateral border of the rectus muscle — direct inguinal hernias protrude through this area' },
        { term: 'hiatal hernia', definition: 'Herniation of abdominal contents (usually stomach) through the esophageal hiatus of the diaphragm; sliding type (Type I) is most common and associated with GERD' },
        { term: 'loss of domain', definition: 'A condition in large incisional hernias where so much abdominal content resides outside the abdominal cavity that it cannot be returned without special techniques' },
      ],
      analogies: [
        'The inguinal canal is like a tunnel through a wall — indirect hernias sneak in through the entrance of the tunnel, while direct hernias punch through the wall itself.',
        'Strangulation of a hernia is like wrapping a rubber band too tightly around your finger — blood cannot flow and the tissue dies.',
      ],
      examples: [
        'A 60-year-old man with a reducible bulge in his groin that increases with coughing has an inguinal hernia — likely direct given his age.',
        'An elderly woman presenting to the ER with vomiting, abdominal distension, and a small, tender, irreducible mass below the inguinal ligament has a strangulated femoral hernia requiring emergent surgery.',
        'A 45-year-old obese woman with chronic heartburn who burps frequently after eating likely has a Type I (sliding) hiatal hernia contributing to GERD.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Hernia management requires understanding of inguinal canal anatomy, fascial layers, and repair techniques including open (Lichtenstein) and laparoscopic (TEP/TAPP) approaches with mesh reinforcement as the standard of care.',
      explanation: `## Hernia Anatomy, Classification, and Repair Techniques

### Inguinal Canal Anatomy (Layers from Superficial to Deep)

**Anterior wall:** External oblique aponeurosis (and internal oblique laterally)
**Posterior wall:** Transversalis fascia (and conjoint tendon medially)
**Roof:** Internal oblique and transversus abdominis arches
**Floor:** Inguinal ligament (Poupart ligament) and lacunar ligament (Gimbernat ligament)

**Contents:**
- Male: Spermatic cord (vas deferens, testicular artery, pampiniform plexus, cremasteric muscle, genital branch of genitofemoral nerve, ilioinguinal nerve)
- Female: Round ligament of the uterus

**Key Landmarks:**
- Internal (deep) inguinal ring: opening in transversalis fascia; indirect hernias enter here
- External (superficial) inguinal ring: opening in external oblique aponeurosis
- Inferior epigastric vessels: landmark dividing direct (medial) from indirect (lateral) hernias
- Hesselbach triangle: inguinal ligament inferiorly, inferior epigastric vessels laterally, rectus sheath medially

### Nyhus Classification
- **Type I:** Indirect, normal internal ring (pediatric)
- **Type II:** Indirect, dilated internal ring, intact posterior wall
- **Type III:** Posterior wall defect
  - IIIa: Direct hernia
  - IIIb: Indirect hernia with dilated ring and weak posterior wall (pantaloon = combined direct + indirect)
  - IIIc: Femoral hernia
- **Type IV:** Recurrent hernia (a-d based on type of recurrence)

### Open Repair: Lichtenstein Tension-Free Mesh Repair

**Procedure:**
1. Inguinal incision, open external oblique aponeurosis
2. Identify and protect ilioinguinal and iliohypogastric nerves
3. Mobilize spermatic cord, identify hernia sac
4. Reduce hernia contents; indirect sac is ligated at internal ring
5. Place polypropylene mesh over the posterior wall:
   - Medial: overlap pubic tubercle by 1-2 cm
   - Lateral: create a "slit" around the spermatic cord at the internal ring
   - Superior: tack to internal oblique/conjoint tendon
   - Inferior: suture to inguinal ligament (shelving edge)
6. Close external oblique over the cord

**Advantages:** Low recurrence (~1-2%), local/regional anesthesia possible, reproducible technique.
**Nerve injury risk:** Ilioinguinal, iliohypogastric, genital branch of genitofemoral — chronic inguinodynia in 6-12%.

### Laparoscopic Repair: TEP and TAPP

**Totally Extraperitoneal (TEP):**
- Dissection entirely in the preperitoneal space (between peritoneum and transversalis fascia)
- No peritoneal entry — lower risk of visceral injury and adhesions
- Bilateral hernias can be repaired through the same incisions
- Larger mesh coverage of the entire myopectineal orifice
- Technically more challenging; steeper learning curve

**Transabdominal Preperitoneal (TAPP):**
- Enter the abdominal cavity first, then create a peritoneal flap to access the preperitoneal space
- Allows visualization of the contralateral side (diagnose occult hernia)
- Peritoneal flap must be closed to prevent internal hernia
- Easier visualization but requires peritoneal entry

**Laparoscopic Mesh Placement:**
- Mesh covers entire myopectineal orifice (inguinal and femoral spaces)
- Critical landmarks: Cooper ligament (pectineal ligament), inferior epigastric vessels, iliopubic tract
- **Triangle of Doom:** Between vas deferens and gonadal vessels — contains external iliac artery and vein. NO tacking or stapling here.
- **Triangle of Pain:** Lateral to gonadal vessels — contains lateral femoral cutaneous nerve, femoral branch of genitofemoral nerve. NO tacking here.

### Mesh Considerations

**Types of Mesh:**
| Property | Lightweight | Heavyweight |
|----------|------------|-------------|
| Pore size | >1 mm (macroporous) | <1 mm (microporous) |
| Weight | <50 g/m² | >80 g/m² |
| Flexibility | More | Less |
| Foreign body reaction | Less | More |
| Chronic pain | Lower risk | Higher risk |
| Usage | Standard for most repairs | Complex/contaminated cases |

**Mesh Materials:**
- Polypropylene (most common): permanent, strong, good tissue ingrowth
- Polyester: good handling, higher infection risk
- ePTFE: smooth, less adhesion formation — good for intraperitoneal placement
- Biologic mesh (acellular dermal matrix): used in contaminated fields where synthetic mesh is contraindicated
- Absorbable synthetic: for contaminated fields as bridging material

**Mesh Complications:**
- Chronic pain (meshoma) — most common long-term complication
- Infection — may require mesh explantation
- Migration/erosion — rare but reported into bladder, bowel
- Seroma — common, usually self-resolving
- Recurrence — 1-4% depending on technique

### Femoral Hernia Repair
- Open: McVay repair (Cooper ligament repair) or mesh plug
- Laparoscopic TEP/TAPP: preferred — covers both inguinal and femoral spaces simultaneously
- Emergency: may require bowel resection if strangulated

### Incisional Hernia Repair
- Mesh repair is standard (primary suture repair has >50% recurrence)
- Retromuscular (Rives-Stoppa) placement has lowest recurrence
- Component separation technique (anterior or posterior) for large defects with loss of domain
- Robotic-assisted approaches increasingly used for complex ventral hernia repair

### Hiatal Hernia Repair
- Nissen fundoplication (360° wrap) or Toupet (270° posterior wrap)
- Crural repair with mesh reinforcement in large defects (controversial — erosion risk)
- Paraesophageal hernia repair: reduce stomach, excise sac, repair crura, fundoplication, consider gastropexy`,
      keyTerms: [
        { term: 'Lichtenstein repair', definition: 'The gold standard open tension-free inguinal hernia repair using a flat polypropylene mesh sewn over the posterior wall of the inguinal canal, with recurrence rates of 1-2%' },
        { term: 'TEP', definition: 'Totally Extraperitoneal laparoscopic hernia repair performed entirely in the preperitoneal space without entering the peritoneal cavity, allowing large mesh coverage of the myopectineal orifice' },
        { term: 'TAPP', definition: 'Transabdominal Preperitoneal laparoscopic hernia repair that enters the abdominal cavity first, then creates a peritoneal flap to place mesh in the preperitoneal space' },
        { term: 'Triangle of Doom', definition: 'The anatomic space between the vas deferens and gonadal vessels containing the external iliac vessels — tacking or stapling here during laparoscopic hernia repair risks catastrophic vascular injury' },
        { term: 'Triangle of Pain', definition: 'The anatomic space lateral to the gonadal vessels containing the lateral femoral cutaneous nerve and femoral branch of the genitofemoral nerve — tacking here causes chronic neuralgia' },
        { term: 'myopectineal orifice', definition: 'The anatomic space in the groin bounded by the rectus muscle, iliopsoas, and Cooper ligament through which all groin hernias (inguinal and femoral) occur — laparoscopic mesh covers this entire space' },
        { term: 'component separation', definition: 'Surgical technique for large ventral/incisional hernias that releases lateral abdominal wall muscles (external oblique in anterior approach, transversus abdominis in posterior/TAR approach) to allow tension-free midline closure' },
        { term: 'Nyhus classification', definition: 'A system classifying inguinal hernias into Types I-IV based on hernia anatomy and posterior wall integrity, guiding surgical approach' },
      ],
      clinicalNotes: `**Surgical Pearls:**
- Mesh repair is superior to primary tissue repair for all adult inguinal hernias — reduces recurrence from 10-15% to 1-4%.
- During laparoscopic repair, NEVER place tacks in the Triangle of Doom (vascular injury) or Triangle of Pain (chronic neuralgia).
- Lightweight macroporous mesh produces less chronic pain and foreign body sensation than heavyweight mesh — now standard for most elective repairs.
- Femoral hernias have the highest strangulation rate of all groin hernias (~40% present emergently) — early repair is recommended even if asymptomatic.
- Always rule out a femoral hernia in any patient (especially women) presenting with small bowel obstruction and no prior surgery.`,
    },

    4: {
      level: 4,
      summary:
        'Complex hernia management involves understanding recurrence patterns, optimizing mesh placement planes, managing contaminated fields, and applying component separation techniques for abdominal wall reconstruction.',
      explanation: `## Advanced Hernia Surgery

### Evidence-Based Approach to Inguinal Hernia Repair

**Watchful Waiting vs. Surgery for Minimally Symptomatic Hernias:**
- Fitzgibbons et al. (JAMA 2006): Watchful waiting is safe for minimally symptomatic inguinal hernias in men; acute incarceration risk <2% per year
- However, crossover to surgery was 72% at 10 years due to increasing symptoms
- Current consensus: repair is recommended for symptomatic hernias; observation is acceptable for truly asymptomatic inguinal hernias in men with regular follow-up

**Open vs. Laparoscopic Inguinal Hernia Repair:**
- Primary unilateral: Open Lichtenstein and laparoscopic TEP/TAPP have comparable outcomes
- Bilateral hernias: Laparoscopic is preferred (same incisions, faster recovery)
- Recurrent hernias: Use a different approach than the index repair (if prior open → do laparoscopic; if prior laparoscopic → do open Lichtenstein)
- Chronic pain: Laparoscopic approach has slightly lower chronic pain rates (preperitoneal plane avoids ilioinguinal/iliohypogastric nerves)

### Ventral/Incisional Hernia: Mesh Placement Planes

**Onlay:** Mesh on top of the anterior rectus sheath
- Easiest placement but highest recurrence and SSI rates
- Requires large subcutaneous dissection (seroma risk)

**Inlay (Bridging):** Mesh bridging the fascial defect without closure
- Highest recurrence — NOT recommended

**Sublay/Retromuscular (Rives-Stoppa):**
- Mesh placed between rectus muscle and posterior rectus sheath
- Gold standard for ventral hernia repair — lowest recurrence (5-8%)
- Large overlap, protected from viscera by posterior sheath, favorable tissue ingrowth

**Preperitoneal:**
- Mesh placed between posterior rectus sheath/transversalis fascia and peritoneum
- Used when posterior sheath is deficient (below the arcuate line)

**Intraperitoneal (IPOM):**
- Mesh placed inside the peritoneal cavity directly against bowel
- Requires barrier-coated mesh (ePTFE or composite) to prevent adhesions
- Higher adhesion and fistula risk — reserved for when other planes are not accessible

### Transversus Abdominis Release (TAR) — Posterior Component Separation

**Technique:**
1. Retromuscular dissection of the Rives-Stoppa space
2. Incise the posterior rectus sheath medially, then the posterior lamella of the internal oblique
3. Enter the plane between the internal oblique and transversus abdominis
4. Divide the transversus abdominis muscle — releases 8-10 cm per side
5. Place large mesh (extends from the retroperitoneum bilaterally)
6. Close the posterior rectus sheath over the mesh, then close anterior fascia

**Advantages over anterior component separation:**
- Preserves lateral abdominal wall blood supply (perforating vessels)
- Retromuscular mesh placement (superior to onlay)
- Lower wound complication rate
- Greater medial advancement possible

### Hernia Repair in Contaminated Fields

**CDC Wound Classification and Mesh Selection:**
- **Clean (Class I):** Synthetic mesh (standard)
- **Clean-contaminated (Class II):** Synthetic mesh generally acceptable with antibiotic prophylaxis
- **Contaminated (Class III):** Biologic mesh or absorbable synthetic mesh preferred; some data supporting synthetic mesh with negative pressure wound therapy
- **Dirty/Infected (Class IV):** Biologic mesh or delayed repair; avoid permanent synthetic mesh

**Biologic Mesh Options:**
- Human acellular dermal matrix (AlloDerm, FlexHD)
- Porcine acellular dermal matrix (Strattice, Permacol)
- Bovine pericardium (Veritas)
- Function: serve as scaffold for native tissue ingrowth; can be vascularized even in contaminated fields
- Limitations: higher recurrence (30-50%), expensive, variable remodeling

**Absorbable Synthetic Mesh:**
- Polyglycolic acid/trimethylene carbonate (GORE BIO-A, Phasix)
- Bridge period until native tissue strengthens
- Lower infection risk than permanent mesh in contaminated fields
- Moderate recurrence rates (15-30%)

### Chronic Inguinodynia After Hernia Repair

**Incidence:** 6-12% with chronic pain; 1-3% with disabling pain
**Mechanisms:**
- Nerve entrapment (ilioinguinal, iliohypogastric, genital branch of genitofemoral)
- Meshoma: inflammatory mass around mesh causing nerve irritation
- Periostitis at pubic tubercle from fixation

**Management Algorithm:**
1. Conservative: NSAIDs, gabapentin/pregabalin, nerve blocks
2. Targeted nerve blocks with local anesthetic (diagnostic and therapeutic)
3. Neurectomy (triple neurectomy: ilioinguinal, iliohypogastric, genital branch)
4. Mesh removal (partial or complete) — last resort, variable results

### Sportsman Hernia (Athletic Pubalgia)
- Not a true hernia — no fascial defect
- Weakness/tear of the posterior inguinal wall or rectus abdominis insertion
- Presents as chronic groin pain in athletes, worsened by activity
- Diagnosis: clinical + MRI (edema at pubic symphysis/rectus insertion)
- Treatment: rehabilitation first; surgical repair (posterior wall reinforcement or adductor tenotomy) for refractory cases

### Parastomal Hernia
- Incidence: 30-50% of all stomas (most common late stoma complication)
- Prevention: prophylactic mesh at stoma creation (Sugarbaker or keyhole technique) — reduces incidence to <10%
- Repair options: local repair (high recurrence), Sugarbaker technique (mesh covers stoma orifice intraperitoneally), stoma relocation`,
      keyTerms: [
        { term: 'Rives-Stoppa repair', definition: 'Retromuscular mesh placement between the rectus muscle and posterior rectus sheath — the gold standard for ventral hernia repair with the lowest recurrence rates (5-8%)' },
        { term: 'transversus abdominis release (TAR)', definition: 'Posterior component separation technique dividing the transversus abdominis muscle to gain 8-10 cm of medial advancement per side while preserving the retromuscular mesh plane and lateral abdominal wall blood supply' },
        { term: 'anterior component separation', definition: 'Release of the external oblique aponeurosis lateral to the rectus sheath, gaining 5-10 cm of medial advancement; useful for large ventral hernias but sacrifices perforating vessel blood supply' },
        { term: 'biologic mesh', definition: 'Mesh derived from decellularized human, porcine, or bovine tissue that serves as a scaffold for native tissue ingrowth; used in contaminated fields where synthetic mesh is contraindicated, though with higher recurrence rates' },
        { term: 'meshoma', definition: 'Inflammatory mass or granulomatous reaction around implanted hernia mesh causing chronic pain, often requiring targeted injection or surgical excision' },
        { term: 'Sugarbaker technique', definition: 'Method of parastomal hernia repair using intraperitoneal mesh that covers the stoma orifice, with the bowel lateralized between mesh and abdominal wall' },
        { term: 'triple neurectomy', definition: 'Surgical division of the ilioinguinal, iliohypogastric, and genital branch of the genitofemoral nerves for treatment of refractory chronic inguinodynia after inguinal hernia repair' },
        { term: 'athletic pubalgia', definition: 'Chronic exertional groin pain in athletes from injury to the posterior inguinal wall, rectus insertion, or adductor complex — often called sportsman hernia despite having no true hernia defect' },
      ],
      clinicalNotes: `**Advanced Decision-Making:**
- Retromuscular (Rives-Stoppa) mesh placement is the gold standard for ventral hernias — sublay position combines large overlap, protection from viscera, and favorable tissue incorporation.
- TAR (posterior component separation) has largely replaced anterior component separation due to preservation of perforator blood supply and retromuscular mesh plane.
- For recurrent inguinal hernias, always change the surgical approach: prior open → laparoscopic; prior laparoscopic → open anterior. Operating in virgin tissue planes reduces complications.
- Prophylactic mesh at stoma creation is supported by Level 1 evidence — discuss with patients undergoing planned stoma formation.
- Chronic inguinodynia management should be stepwise: medications → nerve blocks → neurectomy → mesh removal as last resort.`,
    },

    5: {
      level: 5,
      summary:
        'Contemporary hernia surgery is shaped by landmark trials (HerniaSurge guidelines), robotic approaches, enhanced recovery protocols, and evolving understanding of mesh biocompatibility and optimal placement strategies.',
      explanation: `## Frontiers in Hernia Surgery

### HerniaSurge International Guidelines (2018)

The HerniaSurge Group produced the most comprehensive evidence-based guidelines for inguinal hernia management:

**Key Recommendations:**
- Mesh-based repair is recommended for all adult inguinal hernias (strong recommendation)
- Watchful waiting is acceptable for minimally symptomatic or asymptomatic men (conditional recommendation)
- Tailored approach based on surgeon expertise, patient factors, and hernia characteristics
- For unilateral primary inguinal hernia: open Lichtenstein or laparoscopic TEP/TAPP have similar outcomes when performed by experienced surgeons
- Bilateral and recurrent (after open) hernias favor laparoscopic approach
- Lightweight macroporous mesh is preferred over heavyweight mesh
- Self-gripping mesh (e.g., ProGrip) eliminates need for fixation sutures/tacks — reduces operative time and may decrease pain
- Antibiotic prophylaxis: recommended for open mesh repair in high-risk settings; not routinely needed for laparoscopic repair in low-risk patients

### Robotic Hernia Repair

**Robotic Inguinal Hernia Repair (r-TAPP):**
- Transabdominal preperitoneal approach using da Vinci robotic platform
- Advantages: wristed instruments, improved ergonomics, magnified 3D visualization
- Current evidence shows equivalent outcomes to laparoscopic but higher cost
- May lower the learning curve for surgeons transitioning from open to minimally invasive
- Increasingly adopted — now accounts for >30% of laparoscopic inguinal repairs in the US

**Robotic Ventral Hernia Repair (rTAR):**
- Extended totally extraperitoneal approach or robotic TAR
- Significant adoption due to ergonomic advantages in retromuscular dissection
- Preliminary data suggest shorter hospital stay vs. open TAR
- Cost remains a limitation; awaiting long-term recurrence data

### Mesh Innovation and Biocompatibility

**Current Mesh Research:**
- Nanofiber meshes: electrospun meshes with controlled porosity and drug-eluting capability (antibiotics, anti-adhesion agents)
- Hybrid meshes: composite synthetic-biologic designs aiming for the strength of synthetic with the infection resistance of biologic
- Stem cell-seeded scaffolds: preclinical work using mesenchymal stem cells on biologic scaffolds to enhance tissue regeneration

**Mesh Fixation Evolution:**
- Self-gripping meshes (ProGrip): microhooks eliminate need for sutures/tacks — reduced operative time, potentially less pain
- Fibrin glue (Tisseel): tissue-friendly fixation for open and laparoscopic repair — lower pain vs. suture fixation
- No fixation (TEP): some evidence supports large self-expanding mesh without fixation in TEP — ongoing trials

**Long-Term Mesh Outcomes:**
- Large registry studies (Danish Hernia Database, Swedish Hernia Register) show excellent long-term outcomes with mesh repair (>95% success at 10 years)
- Mesh-related complications requiring explantation: <1% in elective inguinal repair
- Mesh contraction (shrinkage): 20-40% over time — supports initial oversizing and macroporous design

### ERAS in Hernia Surgery

**Evidence-Based Enhanced Recovery Elements:**
- Preoperative: patient education, carbohydrate loading, minimize fasting
- Intraoperative: multimodal analgesia (TAP block or local infiltration, IV acetaminophen, avoid routine opioids), minimize pneumoperitoneum pressure (8-10 mmHg), goal-directed fluid therapy
- Postoperative: early ambulation (day of surgery), early oral intake, scheduled non-opioid analgesics (acetaminophen + NSAID ± gabapentin), opioids only for breakthrough pain
- ERAS reduces opioid consumption by 40-60%, shortens hospital stay, and improves patient satisfaction in both open and laparoscopic hernia repair

### Complex Abdominal Wall Reconstruction: Current Paradigms

**Preoperative Optimization ("Prehabilitation"):**
- Weight loss (BMI <40 ideally <35 for elective repair)
- Smoking cessation (minimum 4 weeks preoperatively)
- Diabetes optimization (HbA1c <8%)
- Nutritional optimization (prealbumin >15 mg/dL)
- Progressive pneumoperitoneum (Goni Moreno technique) for large hernias with loss of domain

**Surgical Planning:**
- CT-based volumetric analysis: hernia sac volume vs. abdominal cavity volume
- When hernia sac volume >20-25% of abdominal cavity volume, component separation or progressive pneumoperitoneum is needed to prevent abdominal compartment syndrome upon reduction
- 3D reconstruction for surgical planning increasingly used at specialized centers

**Prophylactic Mesh in Midline Laparotomy:**
- PRIMA trial: prophylactic onlay mesh at midline closure reduces incisional hernia from 30% to 13% in high-risk patients (AAA repair, obesity, BMI >27)
- PRE-PRIME trial: ongoing large RCT evaluating prophylactic mesh in emergency laparotomy
- Small-bite fascial closure technique (5:1 suture-to-wound-length ratio, 5mm bites, 5mm intervals) reduces incisional hernia to ~13% without mesh

### Emerging Technologies

**Indocyanine Green (ICG) Fluorescence:**
- Intraoperative perfusion assessment of hernia sac and flap viability
- May guide extent of sac excision in complex repairs
- Increasingly available on robotic and laparoscopic platforms

**AI Applications:**
- Machine learning for recurrence prediction based on patient factors, hernia characteristics, and repair type
- Computer vision for surgical phase recognition and quality metrics during hernia repair
- Automated CT-based hernia defect measurement and classification

**Abdominal Wall Transplantation:**
- First successful abdominal wall transplant as part of multivisceral transplant
- Vascularized composite allograft provides both functional muscle and fascia
- Experimental — requires lifelong immunosuppression; reserved for extreme cases`,
      keyTerms: [
        { term: 'HerniaSurge guidelines', definition: 'The 2018 international evidence-based guidelines for inguinal hernia management produced by the HerniaSurge group, establishing mesh repair as the standard and supporting tailored approach selection based on hernia type, surgeon expertise, and patient factors' },
        { term: 'robotic TAPP (r-TAPP)', definition: 'Robot-assisted transabdominal preperitoneal inguinal hernia repair using the da Vinci platform, offering wristed instruments and 3D visualization with equivalent outcomes to standard laparoscopic repair' },
        { term: 'self-gripping mesh', definition: 'Hernia mesh incorporating microhooks (e.g., ProGrip) that attach to surrounding tissue without sutures or tacks, reducing operative time and potentially decreasing chronic pain' },
        { term: 'progressive pneumoperitoneum', definition: 'Goni Moreno technique of gradually insufflating air into the peritoneal cavity over 1-2 weeks preoperatively to expand abdominal domain before repair of large incisional hernias with loss of domain' },
        { term: 'PRIMA trial', definition: 'Landmark RCT demonstrating that prophylactic onlay mesh during midline laparotomy in high-risk patients reduces incisional hernia incidence from 30% to 13%' },
        { term: 'small-bite closure', definition: 'Evidence-based fascial closure technique using 5mm bites at 5mm intervals with a suture-to-wound-length ratio of at least 4:1 (ideally 5:1), shown to reduce incisional hernia rates without mesh' },
        { term: 'rTAR', definition: 'Robotic transversus abdominis release — robotic-assisted posterior component separation that leverages ergonomic advantages of the robotic platform for complex retromuscular dissection in ventral hernia repair' },
      ],
      clinicalNotes: `**Evidence-Based Practice Points:**
- HerniaSurge 2018 remains the definitive reference for inguinal hernia management — mesh repair is the standard for all adults; watchful waiting only for truly asymptomatic men.
- Robotic hernia repair is rapidly expanding but must be evaluated against the benchmark of laparoscopic and open approaches. Cost-effectiveness data is still maturing.
- ERAS in hernia surgery reduces opioid use by 40-60% — multimodal analgesia (TAP block + scheduled acetaminophen + NSAIDs) should be default, with opioids reserved for breakthrough pain.
- Preoperative optimization (weight loss, smoking cessation, HbA1c control, nutrition) significantly reduces recurrence and wound complications in complex abdominal wall reconstruction.
- Prophylactic mesh or small-bite closure technique should be considered for all high-risk midline laparotomy patients (PRIMA trial evidence).
- Self-gripping mesh and fibrin glue fixation are evidence-based alternatives to suture/tack fixation that may reduce chronic pain.`,
    },
  },

  media: [
    {
      id: 'hernia-types-anatomy',
      type: 'diagram',
      filename: 'hernia-types-anatomy.svg',
      title: 'Anatomy of Groin Hernias',
      description: 'Diagram showing the anatomy of inguinal canal with indirect, direct, and femoral hernia positions relative to key landmarks.',
    },
    {
      id: 'mesh-placement-planes',
      type: 'diagram',
      filename: 'ventral-hernia-mesh-planes.svg',
      title: 'Mesh Placement Planes for Ventral Hernia Repair',
      description: 'Cross-sectional diagram showing onlay, sublay (retromuscular), preperitoneal, and intraperitoneal mesh placement positions.',
    },
    {
      id: 'laparoscopic-danger-zones',
      type: 'diagram',
      filename: 'laparoscopic-hernia-danger-zones.svg',
      title: 'Triangle of Doom and Triangle of Pain',
      description: 'Laparoscopic view of the inguinal region showing the Triangle of Doom and Triangle of Pain with critical structures.',
    },
  ],

  citations: [
    {
      id: 'herniasurge-2018',
      type: 'article',
      title: 'International guidelines for groin hernia management',
      authors: ['HerniaSurge Group'],
      source: 'Hernia',
      chapter: '22(1):1-165',
      url: 'https://doi.org/10.1007/s10029-017-1668-x',
    },
    {
      id: 'prima-trial',
      type: 'article',
      title: 'Prevention of Incisional Hernia with Prophylactic Onlay and Sublay Mesh Reinforcement (PRIMA)',
      authors: ['Jairam AP', 'Timmermans L', 'Eker HH', 'et al.'],
      source: 'Annals of Surgery',
      chapter: '272(1):29-35',
    },
    {
      id: 'fitzgibbons-watchful-waiting',
      type: 'article',
      title: 'Watchful Waiting vs Repair of Inguinal Hernia in Minimally Symptomatic Men',
      authors: ['Fitzgibbons RJ', 'Giobbie-Hurder A', 'Gibbs JO', 'et al.'],
      source: 'JAMA',
      chapter: '295(3):285-292',
    },
    {
      id: 'schwartz-principles-surgery-hernias',
      type: 'textbook',
      title: "Schwartz's Principles of Surgery — Abdominal Wall Hernias",
      authors: ['Brunicardi FC', 'et al.'],
      source: 'McGraw-Hill, 11th Edition',
      license: 'Commercial',
    },
  ],

  crossReferences: [
    {
      targetId: 'surgery-acute-abdomen',
      targetType: 'condition',
      relationship: 'related',
      label: 'Acute Abdomen',
    },
    {
      targetId: 'surgery-surgical-principles',
      targetType: 'topic',
      relationship: 'related',
      label: 'Surgical Principles',
    },
    {
      targetId: 'surgery-surgical-complications',
      targetType: 'topic',
      relationship: 'related',
      label: 'Surgical Complications',
    },
    {
      targetId: 'surgery-minimally-invasive-surgery',
      targetType: 'topic',
      relationship: 'related',
      label: 'Minimally Invasive Surgery',
    },
  ],

  tags: {
    systems: ['musculoskeletal', 'gastrointestinal'],
    topics: ['surgery', 'general surgery', 'abdominal wall', 'hernia repair'],
    keywords: [
      'inguinal hernia', 'femoral hernia', 'incisional hernia', 'umbilical hernia',
      'hiatal hernia', 'Lichtenstein', 'TEP', 'TAPP', 'mesh repair',
      'component separation', 'TAR', 'robotic hernia', 'strangulation',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2025-01-30T00:00:00Z',
  updatedAt: '2025-01-30T00:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
