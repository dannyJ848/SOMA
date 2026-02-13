import { EducationalContent } from '../types';

export const fracturesMedicalContent: EducationalContent = {
  id: 'ortho-fractures-medical',
  type: 'topic',
  name: 'Fractures: Types, Healing, and Classification',
  nameEs: 'Fracturas: Tipos, Cicatrizacion y Clasificacion',
  alternateNames: ['Bone fractures', 'Osseous fractures', 'Fracture management'],

  levels: {
    1: {
      level: 1,
      summary:
        'Bones can break in different ways depending on how the force is applied. The body has an amazing ability to repair broken bones through a step-by-step healing process.',
      explanation: `When a bone breaks, it is called a fracture. Bones break in different patterns depending on how the injury happened.

**How Bones Break:**
- A direct hit can snap a bone straight across
- A twisting motion can cause a spiral-shaped break
- A crushing force can shatter bone into many pieces
- Repeated stress over time can cause tiny cracks called stress fractures

**How Bones Heal:**
Your body starts fixing a broken bone right away. The process works like this:
1. **Blood clot forms** - Blood fills the gap at the break site, like a natural bandage
2. **Soft bridge builds** - Your body creates a soft, rubbery patch over the break
3. **Hard bridge forms** - The soft patch slowly turns into new bone
4. **Reshaping** - The new bone reshapes itself to look like the original over months to years

**What Helps Bones Heal:**
- Keeping the bone still (casts, splints, or surgery)
- Eating foods rich in calcium and vitamin D
- Not smoking (smoking slows healing dramatically)
- Following your doctor's instructions about when to start moving

**When to Worry:**
- Bone poking through skin (open fracture) is an emergency
- Increasing pain, numbness, or tingling after a fracture needs immediate attention
- A fracture that does not heal may need additional treatment

**Children vs. Adults:**
- Children's bones are softer and can bend or buckle instead of snapping completely
- Children heal much faster than adults because their bones are still growing
- Special growth areas near the ends of children's bones can be injured`,
      keyTerms: [
        { term: 'fracture', definition: 'A break or crack in a bone' },
        { term: 'stress fracture', definition: 'A tiny crack in bone caused by repeated force, like running too much' },
        { term: 'open fracture', definition: 'A break where the bone pierces through the skin, which is an emergency' },
        { term: 'callus', definition: 'The new material your body builds to bridge a broken bone' },
        { term: 'cast', definition: 'A hard shell placed around a broken bone to keep it still while it heals' },
      ],
      analogies: [
        'A bone breaking is like a stick snapping - the pattern depends on how you bend or hit it.',
        'Bone healing is like fixing a cracked wall: first you fill the crack with putty (soft callus), then it hardens (hard callus), then you sand it smooth (remodeling).',
        'A stress fracture is like a paper clip that bends back and forth too many times - eventually it cracks from fatigue.',
      ],
      examples: [
        'A child falling off monkey bars might get a buckle fracture of the wrist, where the bone crumples on one side like a crushed soda can.',
        'A basketball player landing on another player\'s foot might twist their ankle and get a spiral fracture of the fibula.',
        'A runner training for a marathon who increases mileage too quickly might develop a stress fracture in their shin bone.',
      ],
      patientCounselingPoints: [
        'Most fractures heal completely in 6-8 weeks, but some take longer.',
        'It is very important not to smoke during fracture healing.',
        'Follow weight-bearing instructions carefully to avoid re-injury.',
        'Pain that gets worse instead of better after treatment needs medical attention right away.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Fractures are classified by pattern, displacement, and relationship to the skin and joints. Understanding fracture types helps predict treatment needs and complications.',
      explanation: `Fracture classification organizes breaks by their characteristics to guide treatment decisions.

**Fracture Patterns:**
- **Transverse**: Straight across the bone, perpendicular to the long axis. Caused by direct force.
- **Oblique**: Diagonal break at an angle. Caused by angular or compressive forces.
- **Spiral**: Corkscrew-shaped break wrapping around the bone. Caused by rotational (twisting) forces.
- **Comminuted**: Bone shatters into three or more fragments. High-energy injuries.
- **Segmental**: Two separate breaks in the same bone creating an isolated middle segment.
- **Compression**: Bone is crushed, usually in vertebrae. Common in osteoporosis.
- **Avulsion**: A piece of bone is pulled off where a tendon or ligament attaches.
- **Greenstick**: Bone bends and cracks on one side only. Occurs in children.
- **Torus (buckle)**: Bone buckles or wrinkles on one side. Also in children.

**Important Descriptors:**
- **Open vs. Closed**: Whether bone has broken through the skin
- **Displaced vs. Non-displaced**: Whether bone fragments have shifted from their normal position
- **Intra-articular vs. Extra-articular**: Whether the fracture line crosses into a joint surface
- **Stable vs. Unstable**: Whether the fracture is likely to shift position

**Fracture Healing Steps:**
1. **Hematoma phase (days 1-5)**: Blood from broken vessels clots at the fracture site, forming a framework
2. **Inflammatory phase (days 1-7)**: White blood cells clean up debris; growth factors are released
3. **Soft callus phase (weeks 2-3)**: Cartilage and fibrous tissue bridge the gap
4. **Hard callus phase (weeks 3-12)**: Woven bone replaces the soft callus through ossification
5. **Remodeling phase (months to years)**: Woven bone is replaced by organized lamellar bone following Wolff's law

**Treatment Options:**
- **Casting/Splinting**: For stable, well-aligned fractures
- **Closed reduction**: Realigning bone without surgery, then casting
- **Open reduction internal fixation (ORIF)**: Surgery with plates, screws, rods, or wires
- **External fixation**: Pins through skin connected to an external frame

**Salter-Harris Classification (Pediatric Growth Plate Fractures):**
- Type I: Through the growth plate only
- Type II: Through growth plate and metaphysis (most common)
- Type III: Through growth plate and epiphysis into the joint
- Type IV: Through metaphysis, growth plate, and epiphysis
- Type V: Crush injury to the growth plate`,
      keyTerms: [
        { term: 'comminuted', definition: 'A fracture where the bone is broken into three or more fragments', pronunciation: 'COM-ih-noo-ted' },
        { term: 'displaced', definition: 'Fracture fragments that have moved out of their normal alignment' },
        { term: 'reduction', definition: 'The process of realigning fracture fragments back to their normal position' },
        { term: 'ORIF', definition: 'Open Reduction Internal Fixation - surgery to realign and stabilize a fracture with hardware' },
        { term: 'Salter-Harris', definition: 'Classification system for fractures involving the growth plate in children, types I through V' },
        { term: 'intra-articular', definition: 'A fracture that extends into the surface of a joint' },
        { term: 'greenstick fracture', definition: 'An incomplete fracture where bone bends and cracks on one side, like a green tree branch' },
      ],
      analogies: [
        'A transverse fracture is like snapping a pencil straight across. A spiral fracture is like wringing out a wet towel until it tears.',
        'The Salter-Harris classification can be remembered with SALTR: Slipped, Above, Lower, Through, and Ruined (or Rammed).',
        'Fracture healing is like road repair: first a temporary patch (soft callus), then proper resurfacing (hard callus), then smoothing (remodeling).',
      ],
      examples: [
        'A fall on an outstretched hand in an elderly person often causes a distal radius fracture (Colles fracture) with a characteristic dinner fork deformity.',
        'A Salter-Harris type II fracture of the distal fibula is one of the most common ankle injuries in adolescents.',
        'A comminuted fracture of the tibial plateau from a car bumper impact often requires CT scanning to plan surgical reconstruction.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Fracture healing involves coordinated biological processes governed by mechanical and molecular signals. Wolff\'s law drives bone remodeling, while classification systems like Gustilo-Anderson and Salter-Harris guide clinical management.',
      explanation: `Understanding fracture biology and classification is essential for predicting outcomes and guiding treatment.

**Wolff's Law and Bone Adaptation:**
Julius Wolff described that bone remodels in response to the mechanical loads placed upon it. Increased loading leads to bone deposition; decreased loading leads to resorption. This principle:
- Explains stress fractures from repetitive overload
- Guides rehabilitation protocols (progressive weight-bearing stimulates healing)
- Underlies implant design (stress shielding under rigid plates can cause bone resorption)

**Fracture Healing Biology:**

*Primary (Direct) Bone Healing:*
- Occurs only with absolute stability (rigid fixation, compression)
- Osteoclastic cutting cones cross the fracture site directly
- Haversian remodeling without visible callus
- Requires anatomic reduction and rigid fixation (e.g., compression plating)

*Secondary (Indirect) Bone Healing:*
- Most common natural healing pathway
- Requires some micromotion at the fracture site
- Proceeds through distinct phases:

1. **Hematoma formation**: Ruptured periosteal and endosteal vessels form a hematoma. Platelets release PDGF, TGF-beta. Hypoxia recruits inflammatory cells.
2. **Inflammatory phase**: Macrophages, PMNs debride necrotic tissue. Cytokines (IL-1, IL-6, TNF-alpha) recruit mesenchymal stem cells (MSCs).
3. **Soft callus formation**: MSCs differentiate into chondrocytes under low oxygen tension. Cartilaginous callus bridges the gap via endochondral ossification. Peak at 2-3 weeks.
4. **Hard callus formation**: Chondrocytes undergo hypertrophy and apoptosis. Cartilage matrix calcifies. Osteoblasts deposit woven bone on the cartilage scaffold. Peak at 6-12 weeks.
5. **Remodeling**: Woven bone is replaced by lamellar bone via coupled osteoclast-osteoblast activity. Bone remodels along lines of mechanical stress per Wolff's law. Takes months to years.

**Salter-Harris Classification (Details):**
- Type I (6%): Widening of physis. Often clinically diagnosed (tenderness at growth plate with normal X-ray). Good prognosis.
- Type II (75%): Fracture through physis exiting through metaphysis (Thurston-Holland fragment). Good prognosis.
- Type III (8%): Fracture through physis exiting through epiphysis into joint. Requires anatomic reduction. Risk of growth disturbance.
- Type IV (10%): Fracture crossing metaphysis, physis, and epiphysis. Requires anatomic ORIF. Higher risk of growth arrest.
- Type V (1%): Crush injury to physis. Often diagnosed retrospectively when growth arrest occurs. Worst prognosis.

**Gustilo-Anderson Open Fracture Classification:**
- Type I: Wound <1 cm, minimal contamination, simple fracture pattern
- Type II: Wound 1-10 cm, moderate soft tissue damage, no flap needed
- Type IIIA: Adequate soft tissue coverage despite extensive wound; high-energy mechanism
- Type IIIB: Requires soft tissue flap for coverage (bone exposed)
- Type IIIC: Associated vascular injury requiring repair

**Compartment Syndrome Pathophysiology:**
Increased pressure within a closed fascial compartment reduces capillary perfusion:
- Normal compartment pressure: 0-8 mmHg
- Muscle ischemia occurs when pressure approaches within 30 mmHg of diastolic (delta pressure)
- Arterial pulses may be present despite compartment syndrome
- The 6 Ps: Pain (especially with passive stretch), Pressure, Paresthesias, Paralysis, Pallor, Pulselessness (late finding)
- Definitive treatment: Emergency fasciotomy of all affected compartments
- Most common after tibial shaft fractures, forearm fractures, and crush injuries`,
      keyTerms: [
        { term: 'Wolff\'s law', definition: 'Principle that bone adapts its structure to the mechanical loads placed upon it, depositing bone where stressed and resorbing bone where unloaded' },
        { term: 'endochondral ossification', definition: 'Bone formation through a cartilage intermediate; the process by which most fractures heal (soft callus converts to hard callus)' },
        { term: 'osteoclast', definition: 'Multinucleated cell derived from monocyte/macrophage lineage responsible for bone resorption' },
        { term: 'osteoblast', definition: 'Cell derived from mesenchymal stem cells responsible for laying down new bone matrix' },
        { term: 'Gustilo-Anderson classification', definition: 'System for classifying open fractures based on wound size, contamination, and soft tissue injury severity (Types I, II, IIIA, IIIB, IIIC)' },
        { term: 'compartment syndrome', definition: 'Emergency condition where increased pressure within a closed fascial compartment compromises perfusion of muscles and nerves; requires fasciotomy' },
        { term: 'Thurston-Holland fragment', definition: 'Metaphyseal bone fragment seen in Salter-Harris type II fractures, pathognomonic for growth plate injury' },
        { term: 'fasciotomy', definition: 'Surgical release of fascial compartments to relieve pressure in compartment syndrome' },
      ],
      clinicalNotes: 'Pain out of proportion with passive stretch of the compartment muscles is the most sensitive early sign of compartment syndrome. Do NOT rely on loss of pulses - this is a late finding. A delta pressure (diastolic BP minus compartment pressure) of less than 30 mmHg is the threshold for fasciotomy. Always have a high index of suspicion after tibial shaft fractures, especially in obtunded patients.',
    },

    4: {
      level: 4,
      summary:
        'Fracture healing is orchestrated by BMP signaling cascades, osteoblast-osteoclast coupling through RANK/RANKL/OPG, and mechanotransduction pathways. Fixation biomechanics must balance stability with biological preservation.',
      explanation: `Advanced fracture science integrates molecular biology with biomechanical engineering principles.

**Molecular Biology of Fracture Healing:**

*BMP Signaling Cascade:*
- Bone Morphogenetic Proteins (BMPs) are members of the TGF-beta superfamily
- BMP-2 and BMP-7 are the most potent osteoinductive factors
- Signal through serine/threonine kinase receptors (Type I: ALK-2, ALK-3, ALK-6; Type II: BMPRII, ActRII)
- Activate Smad 1/5/8 transcription factors via phosphorylation
- Smads translocate to nucleus and activate osteogenic gene expression (Runx2, Osterix)
- BMP antagonists (Noggin, Chordin, Gremlin) regulate signaling intensity
- Recombinant BMP-2 (rhBMP-2) is FDA-approved for open tibial fractures and spinal fusion
- Complications: heterotopic ossification, radiculitis (in spine), cancer risk debated

*Wnt/Beta-Catenin Pathway:*
- Critical for osteoblast differentiation and proliferation
- Wnt ligands bind to Frizzled receptor and LRP5/6 co-receptor
- Prevents Beta-catenin degradation, allowing nuclear translocation
- Activates TCF/LEF transcription factors for osteogenic genes
- Sclerostin (SOST gene product) and DKK1 are Wnt antagonists
- Romosozumab (anti-sclerostin antibody) enhances bone formation

*RANK/RANKL/OPG System (Osteoblast-Osteoclast Coupling):*
- RANKL (Receptor Activator of Nuclear Factor Kappa-B Ligand): Produced by osteoblasts and osteocytes
- RANK: Receptor on osteoclast precursors; RANKL binding activates osteoclast differentiation
- OPG (Osteoprotegerin): Decoy receptor produced by osteoblasts; binds RANKL to inhibit osteoclastogenesis
- The RANKL/OPG ratio determines net bone resorption vs. formation
- Denosumab (anti-RANKL antibody) inhibits osteoclast activity
- Important for understanding pathologic fractures in metabolic bone disease

**Mechanotransduction in Bone:**
- Osteocytes are the primary mechanosensors embedded in lacuno-canalicular network
- Fluid flow through canaliculi generates shear stress on osteocyte processes
- Osteocytes signal through prostaglandins (PGE2), nitric oxide (NO), and sclerostin modulation
- Mechanical loading suppresses sclerostin, activating Wnt pathway and bone formation
- Disuse (immobilization) increases sclerostin, leading to bone resorption
- This is the molecular basis of Wolff's law

**Fixation Biomechanics:**

*Strain Theory (Perren):*
- Interfragmentary strain = displacement / gap width
- Bone can form at <2% strain (primary healing)
- Fibrous tissue forms at 2-10% strain
- Greater than 10% strain: no healing possible
- Clinical implication: gap fractures with small displacement have low strain; short oblique with same displacement has high strain

*Construct Engineering:*
- Working length: Distance between nearest fixation points to fracture
  - Shorter working length = stiffer construct = less strain
  - Longer working length = more flexible = distributed strain
- Plate working length vs. nail working length differ
- Screw purchase: bicortical > unicortical; locked > non-locked in poor bone
- Plate position: tension side preferred biomechanically

*Absolute vs. Relative Stability:*
- Absolute stability (compression plating, lag screws):
  - Eliminates interfragmentary motion
  - Enables primary bone healing
  - Required for intra-articular fractures
- Relative stability (bridge plating, IM nails, external fixation):
  - Allows controlled micromotion
  - Promotes secondary bone healing with callus
  - Preferred for diaphyseal and comminuted fractures

**Compartment Syndrome - Advanced Pathophysiology:**
- Normal tissue perfusion requires: local perfusion pressure = MAP - compartment pressure
- Muscle necrosis begins after 4 hours of ischemia at compartment pressures >30 mmHg above venous pressure
- Ischemia-reperfusion injury compounds damage: reactive oxygen species, calcium influx, mitochondrial dysfunction
- Myoglobin release from necrotic muscle causes renal tubular injury (rhabdomyolysis)
- Volkmann's ischemic contracture: late sequela of missed forearm compartment syndrome
- Four-compartment fasciotomy of the leg: anterior, lateral, superficial posterior, deep posterior`,
      keyTerms: [
        { term: 'BMP', definition: 'Bone Morphogenetic Proteins; members of TGF-beta superfamily that induce mesenchymal stem cell differentiation into osteoblasts through Smad signaling', pronunciation: 'B-M-P' },
        { term: 'RANK/RANKL/OPG', definition: 'Molecular triad governing osteoclast differentiation: RANKL activates osteoclasts via RANK receptor; OPG is a decoy receptor that inhibits this process' },
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical stimuli into biochemical signals; osteocytes sense loading via fluid flow in the lacuno-canalicular network' },
        { term: 'Perren strain theory', definition: 'Concept that interfragmentary strain (displacement/gap) determines tissue differentiation at fracture site: <2% bone, 2-10% fibrous tissue' },
        { term: 'sclerostin', definition: 'Glycoprotein produced by osteocytes that inhibits Wnt signaling and bone formation; suppressed by mechanical loading; therapeutic target (romosozumab)' },
        { term: 'working length', definition: 'Distance between nearest fixation points to the fracture; determines construct stiffness and strain distribution' },
        { term: 'Volkmann contracture', definition: 'Permanent flexion contracture of forearm muscles resulting from untreated compartment syndrome causing ischemic muscle necrosis and fibrosis' },
        { term: 'rhabdomyolysis', definition: 'Release of myoglobin and intracellular contents from necrotic skeletal muscle; can cause acute renal failure via tubular obstruction' },
      ],
      clinicalNotes: 'rhBMP-2 use requires careful patient selection. In spine surgery, off-label anterior cervical use has been associated with airway compromise from soft tissue swelling. In open tibial fractures (BESTT trial), rhBMP-2 on absorbable collagen sponge reduced secondary interventions. Always weigh risks vs. benefits and discuss with patients. For compartment syndrome: continuous pressure monitoring is indicated in obtunded polytrauma patients - use the delta pressure threshold (<30 mmHg from diastolic) rather than absolute pressure.',
    },

    5: {
      level: 5,
      summary:
        'Contemporary fracture management integrates nonunion strategies, biophysical stimulation, tissue engineering advances, and damage control orthopedics protocols for polytrauma. Evidence-based approaches optimize biological and mechanical environments.',
      explanation: `Expert-level fracture management addresses complex clinical scenarios and emerging frontiers.

**Nonunion Management:**

*Classification and Workup:*
- FDA definition: fracture not healed at 9 months with no radiographic progress for 3 consecutive months
- Weber-Cech classification:
  - Hypertrophic (elephant foot, horse hoof): Biologically active but mechanically unstable. Treatment: improve stability (compression plating, exchange nailing)
  - Atrophic: Biologically inert, avascular. Treatment: enhance biology (bone graft, biologics) plus stable fixation
  - Oligotrophic: Inadequate reduction with gap. Treatment: reduction plus grafting
- Workup: Rule out infection (ESR, CRP, WBC, aspiration), metabolic causes (vitamin D, calcium, PTH, thyroid), vascular insufficiency
- Infection rate in nonunions: 5-10% even when not clinically apparent

*Surgical Strategies:*
- Exchange nailing: Ream to larger diameter; fresh medullary contents act as autograft; success rate 70-90% for hypertrophic nonunions
- Compression plating with bone graft: Gold standard for atrophic nonunions
- Masquelet technique (induced membrane): Two-stage for segmental defects
  - Stage 1: Debridement, cement spacer placement (PMMA +/- antibiotics)
  - Stage 2: 6-8 weeks later, remove cement, fill with autograft within induced membrane
  - Membrane secretes BMP-2, VEGF, and acts as biological containment
- Ilizarov/distraction osteogenesis: For large defects (>4 cm), allows bone transport

**Biophysical Bone Stimulation:**
- Low-intensity pulsed ultrasound (LIPUS): EXOGEN device
  - 1.5 MHz, 20 min/day
  - TRUST trial (2012): No significant benefit for tibial shaft fractures treated operatively
  - May benefit fresh fractures treated non-operatively (Heckman 1994) and certain nonunions
  - FDA-approved for fresh fractures and nonunions
- Pulsed electromagnetic fields (PEMF):
  - Activates calmodulin-dependent pathways, increases BMP expression
  - Better evidence for nonunions than fresh fractures
  - Patient compliance is the major limitation
- Extracorporeal shock wave therapy (ESWT):
  - Stimulates neovascularization and growth factor release
  - Emerging evidence for delayed unions

**Tissue Engineering and Biologics:**

*Current Options:*
- Autologous iliac crest bone graft (ICBG): Gold standard; osteogenic + osteoinductive + osteoconductive
  - Donor site morbidity: pain (30%), nerve injury (10%), hematoma, infection
- RIA (Reamer-Irrigator-Aspirator): Harvests endosteal graft from femur; larger volume, less morbidity than ICBG
- Allograft: Osteoconductive scaffold only; DBM (Demineralized Bone Matrix) retains some osteoinductive factors
- rhBMP-2 (INFUSE): 1.5 mg/mL on absorbable collagen sponge
- rhBMP-7 (OP-1): Humanitarian device exemption for recalcitrant nonunions (discontinued)

*Emerging Technologies:*
- 3D-printed titanium scaffolds: Patient-specific implants for complex defects
- Bioactive glass and ceramics: Osteoconductive with controlled resorption
- Mesenchymal stem cell therapies: Concentrated bone marrow aspirate (cBMA) from iliac crest; centrifugation yields MSC-rich fraction
- Gene therapy approaches: BMP gene delivery via viral/non-viral vectors (preclinical)
- Exosome-based therapies: Cell-free approach delivering osteogenic microRNAs
- Bioabsorbable implants: Magnesium alloy screws and plates that resorb over 12-24 months

**Polytrauma Protocols:**

*Damage Control Orthopedics (DCO):*
- Concept: Minimize surgical insult during the inflammatory response window
- The "lethal triad": Hypothermia, acidosis, coagulopathy
- Indications for DCO over Early Total Care (ETC):
  - ISS >40 without chest injury, or >20 with chest injury
  - Bilateral femur fractures with additional injuries
  - Hypothermia (<35C), pH <7.24, lactate >2.5
  - Pulmonary injury (PaO2/FiO2 <200)
  - Estimated blood loss >3L or ongoing transfusion requirement

*Staged Protocol:*
- Phase 1 (Day 0): External fixation of long bones, pelvic binder/C-clamp
- Phase 2 (Days 1-4): ICU resuscitation, monitoring for second hit
- Phase 3 (Days 5-10): Definitive fixation when physiologically optimized
- Phase 4: Rehabilitation

*Second Hit Theory:*
- Initial trauma causes SIRS (Systemic Inflammatory Response Syndrome)
- Major surgery during the inflammatory window (days 2-4) acts as a "second hit"
- Can precipitate ARDS, MOF (Multi-Organ Failure)
- DCO minimizes the second hit by deferring definitive surgery
- Biomarkers: IL-6 >500 pg/mL predicts complications; used to time definitive surgery

**Fragility Fracture Management:**
- Osteoporotic fractures affect 1 in 2 women and 1 in 4 men over 50
- Hip fracture mortality: 20-30% at 1 year
- Fracture Liaison Services (FLS) reduce refracture rates by 30-40%
- Treatment gap: Only 20% of fragility fracture patients receive osteoporosis treatment
- NOGG/FRAX algorithm for treatment decisions
- Anabolic-first sequencing: Teriparatide/romosozumab followed by antiresorptive`,
      keyTerms: [
        { term: 'Masquelet technique', definition: 'Two-stage induced membrane technique for segmental bone defects: cement spacer creates vascularized membrane, followed by autograft within the membrane at 6-8 weeks' },
        { term: 'damage control orthopedics', definition: 'Strategy for polytrauma patients: temporary external fixation during initial resuscitation with delayed definitive fixation to avoid the immunological second hit' },
        { term: 'exchange nailing', definition: 'Treatment for hypertrophic nonunion: removing existing IM nail and replacing with larger diameter nail after reaming; reaming products provide autograft effect' },
        { term: 'distraction osteogenesis', definition: 'Ilizarov technique of gradually separating bone segments (1 mm/day) to stimulate new bone formation in the gap; used for large segmental defects and limb lengthening' },
        { term: 'LIPUS', definition: 'Low-Intensity Pulsed Ultrasound; biophysical bone stimulation device (EXOGEN) delivering 1.5 MHz signal to fracture site; FDA-approved for fractures and nonunions' },
        { term: 'RIA', definition: 'Reamer-Irrigator-Aspirator; device for harvesting large volumes of autologous bone graft from the intramedullary canal with less morbidity than iliac crest harvest' },
        { term: 'second hit theory', definition: 'Concept that major surgery performed during the post-injury inflammatory window (days 2-4) can amplify SIRS and precipitate ARDS or multi-organ failure in polytrauma patients' },
        { term: 'Fracture Liaison Service', definition: 'Coordinated care model ensuring osteoporosis investigation and treatment after fragility fracture; reduces secondary fracture risk by 30-40%' },
      ],
      clinicalNotes: 'In polytrauma decision-making, monitor IL-6 levels and lactate clearance to time definitive fixation. The EAO (Early Appropriate Osteosynthesis) concept refines DCO by stratifying patients into stable, borderline, unstable, and in extremis categories - stable and borderline patients may tolerate early definitive fixation. For nonunions: always rule out occult infection with intraoperative cultures (minimum 5 samples from different sites). The Masquelet technique has revolutionized management of segmental defects up to 25 cm; the induced membrane is biologically active, secreting BMP-2, VEGF, TGF-beta, and expressing osteoblast markers. For fragility fractures, the "own the bone" approach mandates osteoporosis treatment initiation before or shortly after hospital discharge.',
    },
  },

  media: [
    {
      id: 'fracture-types-diagram',
      type: 'diagram',
      filename: 'fracture-types-comprehensive.svg',
      title: 'Comprehensive Fracture Classification Patterns',
      description: 'Diagram showing transverse, oblique, spiral, comminuted, segmental, avulsion, greenstick, and torus fracture patterns',
    },
    {
      id: 'fracture-healing-phases',
      type: 'diagram',
      filename: 'fracture-healing-biology.svg',
      title: 'Fracture Healing Biology',
      description: 'Timeline of fracture healing showing hematoma, inflammation, soft callus, hard callus, and remodeling phases with molecular mediators',
    },
    {
      id: 'salter-harris-classification',
      type: 'diagram',
      filename: 'salter-harris-types.svg',
      title: 'Salter-Harris Classification',
      description: 'Five types of pediatric growth plate fractures with anatomical diagrams',
    },
    {
      id: 'compartment-syndrome-anatomy',
      type: 'diagram',
      filename: 'compartment-syndrome-leg.svg',
      title: 'Leg Compartment Anatomy',
      description: 'Cross-sectional anatomy of the four compartments of the lower leg relevant to compartment syndrome',
    },
  ],
  citations: [
    {
      id: 'fractures-rockwood',
      type: 'textbook',
      title: 'Rockwood and Green\'s Fractures in Adults',
      authors: ['Tornetta, P.', 'Ricci, W.M.', 'Ostrum, R.F.'],
      source: 'Wolters Kluwer',
      chapter: 'Fracture Healing Biology and Classification',
      license: 'Educational Reference',
    },
    {
      id: 'fractures-campbells',
      type: 'textbook',
      title: 'Campbell\'s Operative Orthopaedics',
      authors: ['Azar, F.M.', 'Beaty, J.H.', 'Canale, S.T.'],
      source: 'Elsevier',
      chapter: 'Fracture Treatment Principles',
      license: 'Educational Reference',
    },
    {
      id: 'bmp-bestt-trial',
      type: 'article',
      title: 'Recombinant Human BMP-2 for Treatment of Open Tibial Fractures (BESTT Study)',
      authors: ['Govender, S.', 'Csimma, C.', 'Genant, H.K.'],
      source: 'Journal of Bone and Joint Surgery',
      license: 'Educational Reference',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-joint-disorders-medical', targetType: 'topic', relationship: 'related', label: 'Joint Disorders' },
    { targetId: 'ortho-spine-disorders-medical', targetType: 'topic', relationship: 'related', label: 'Spine Disorders' },
    { targetId: 'ortho-patient-fractures', targetType: 'condition', relationship: 'related', label: 'Fractures Patient Education' },
    { targetId: 'ortho-patient-fracture-fixation', targetType: 'concept', relationship: 'related', label: 'Fracture Fixation Procedures' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fractures', 'bone biology', 'biomechanics'],
    keywords: [
      'fracture classification', 'bone healing', 'Salter-Harris', 'Gustilo-Anderson',
      'compartment syndrome', 'nonunion', 'BMP', 'Wolff law', 'damage control orthopedics',
      'polytrauma', 'fixation biomechanics', 'tissue engineering',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'orthopedics'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fracturesMedicalContent;
