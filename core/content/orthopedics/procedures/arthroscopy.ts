import { EducationalContent } from '../../types';

export const arthroscopyContent: EducationalContent = {
  id: 'ortho-patient-arthroscopy',
  type: 'concept',
  name: 'Arthroscopy',
  alternateNames: ['Arthroscopic surgery', 'Keyhole surgery', 'Scope surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Arthroscopy is a minimally invasive surgery where doctors use a tiny camera and small instruments through small incisions to see inside and fix joint problems.',
      explanation: `Arthroscopy lets doctors look inside your joint and fix problems without making large cuts. It is sometimes called "keyhole surgery" because the incisions are so small.

**How It Works:**
- Small incisions (about the size of a buttonhole)
- A tiny camera (arthroscope) is inserted
- The camera shows the inside of your joint on a screen
- Small instruments are used to repair problems

**Common Joints for Arthroscopy:**
- Knee (most common)
- Shoulder
- Ankle
- Hip
- Wrist
- Elbow

**What Can Be Treated:**
- Torn cartilage (meniscus)
- Ligament injuries (like ACL tears)
- Loose pieces of bone or cartilage
- Inflammation of the joint lining
- Damaged cartilage surfaces

**Benefits vs. Open Surgery:**
- Smaller incisions = smaller scars
- Less pain after surgery
- Faster recovery
- Lower infection risk
- Can often go home same day

**Before Surgery:**
- You may need to stop certain medications
- Don't eat or drink after midnight before surgery
- Arrange for someone to drive you home
- Prepare your home for recovery

**After Surgery:**
- Some pain and swelling is normal
- Follow ice and elevation instructions
- Take pain medication as prescribed
- Start physical therapy when recommended
- Follow activity restrictions

**Recovery Time:**
- Return to desk work: 1-2 weeks
- Driving: When off pain medications and can move safely
- Full recovery: Weeks to months depending on procedure`,
      keyTerms: [
        { term: 'arthroscope', definition: 'A thin tube with a camera that shows the inside of a joint' },
        { term: 'minimally invasive', definition: 'Surgery done through very small incisions' },
        { term: 'cartilage', definition: 'Smooth, slippery tissue covering bone surfaces in joints' },
      ],
      analogies: [
        'An arthroscope is like a tiny video camera that shows doctors what\'s happening inside your joint.',
        'Arthroscopy is like fixing something inside a machine through a small window instead of taking the whole machine apart.',
      ],
      examples: [
        'A torn meniscus in the knee can often be repaired or trimmed through arthroscopy.',
        'A loose piece of cartilage floating in the knee can be removed arthroscopically.',
      ],
    },
    2: {
      level: 2,
      summary: 'Arthroscopy uses fiber-optic technology to visualize and treat intra-articular pathology through small portals, offering reduced morbidity compared to open approaches for many conditions.',
      explanation: `Arthroscopy has revolutionized orthopedic surgery, allowing direct visualization and treatment of joint problems with minimal tissue disruption.

**Technique:**
- Small portals (5-10mm incisions)
- Camera (arthroscope) provides magnified view
- Working instruments through separate portals
- Fluid distension for visualization
- Monitor displays joint interior

**Common Procedures:**

*Knee:*
- Meniscectomy: Remove damaged meniscus tissue
- Meniscus repair: Suture torn meniscus
- ACL reconstruction: Replace torn ligament
- Chondral procedures: Treat cartilage damage
- Removal of loose bodies

*Shoulder:*
- Rotator cuff repair
- Labral repair (Bankart, SLAP)
- Subacromial decompression
- Removal of loose bodies
- Capsular release for frozen shoulder

*Hip:*
- Labral repair
- Femoroacetabular impingement treatment
- Removal of loose bodies
- Synovectomy

*Ankle:*
- Osteochondral lesion treatment
- Impingement removal
- Loose body removal

**Anesthesia Options:**
- General anesthesia (asleep)
- Regional anesthesia (nerve block)
- Spinal anesthesia (for lower extremity)
- Often combined with local anesthesia

**What to Expect:**

*Day of surgery:*
- Arrive 1-2 hours early
- Pre-operative preparation
- Surgery typically 30-90 minutes
- Recovery room observation
- Usually go home same day

*First week:*
- Pain controlled with medication
- Ice and elevation important
- Some swelling and stiffness normal
- Small bandages over portals
- May use crutches or sling

**Recovery Varies by Procedure:**

| Procedure | Return to Work | Return to Sports |
|-----------|---------------|------------------|
| Meniscectomy | 1-2 weeks | 4-6 weeks |
| Meniscus repair | 2-4 weeks | 4-6 months |
| ACL reconstruction | 2-4 weeks | 9-12 months |
| Rotator cuff repair | 4-6 weeks | 4-6 months |`,
      keyTerms: [
        { term: 'portal', definition: 'Small incision through which arthroscope or instruments are inserted' },
        { term: 'meniscectomy', definition: 'Surgical removal of damaged meniscus tissue', pronunciation: 'men-ih-SEK-toh-mee' },
        { term: 'labral repair', definition: 'Reattachment of torn labrum (cartilage rim) in shoulder or hip' },
        { term: 'loose body', definition: 'Piece of cartilage or bone floating freely in a joint' },
      ],
      analogies: [
        'Portals are like small doorways that give access to the joint interior.',
        'Fluid distension inflates the joint like a balloon, creating space to see and work.',
      ],
    },
    3: {
      level: 3,
      summary: 'Arthroscopic surgery enables direct visualization and treatment of intra-articular pathology with documented advantages over open surgery for specific indications, though evidence varies by procedure and joint.',
      explanation: `Arthroscopy has become the standard approach for many joint conditions, though appropriate patient selection remains essential.

**Technical Considerations:**

*Equipment:*
- Arthroscope: 30-degree vs. 70-degree lens
- Diameter: 4mm (standard knee/shoulder), 2.7mm (small joints)
- Light source and camera system
- Motorized shavers and burrs
- Radiofrequency devices

*Portal placement:*
- Anatomic landmarks guide positioning
- Avoid neurovascular structures
- Multiple portals for triangulation
- Joint-specific portal configurations

*Fluid management:*
- Gravity or pump systems
- Pressure monitoring
- Balance visualization vs. extravasation
- Complications: Compartment syndrome (rare)

**Evidence-Based Indications:**

*Strong evidence:*
- Meniscal repair/meniscectomy for symptomatic tears
- ACL reconstruction in active patients
- Rotator cuff repair for acute tears
- Loose body removal
- Septic arthritis lavage

*Moderate evidence:*
- Labral repair for instability
- FAI treatment with labral repair
- Impingement surgery

*Limited/Controversial evidence:*
- Arthroscopic debridement for knee OA
- Subacromial decompression (recent trials question benefit)
- Partial meniscectomy in degenerative tears

**Procedure-Specific Considerations:**

*Knee arthroscopy:*
- Meniscus: Repair when possible (preserve function)
- ACL: Graft selection (autograft vs. allograft)
- Cartilage: Multiple options (microfracture, OAT, ACI)
- Rehabilitation protocol critical for outcomes

*Shoulder arthroscopy:*
- Rotator cuff: Repair technique (single vs. double row)
- Bankart: Bone loss assessment guides treatment
- SLAP: Conservative treatment often first
- Biceps: Tenotomy vs. tenodesis

**Complications:**

*General:*
- Infection: <1%
- Nerve injury: <1%
- DVT: Variable by joint and procedure
- Compartment syndrome: Rare, potentially serious
- Instrument breakage: Rare

*Joint-specific:*
- Knee: Stiffness, hemarthrosis
- Shoulder: Stiffness, anchor issues
- Hip: Femoral nerve traction, instability

**Outcomes:**
- Patient-reported outcomes generally good
- Depends heavily on indication
- Surgery for OA: Limited benefit in trials
- Meniscal tears: Mechanical symptoms respond well`,
      keyTerms: [
        { term: 'radiofrequency ablation', definition: 'Use of RF energy to shrink, cut, or coagulate tissue' },
        { term: 'FAI', definition: 'Femoroacetabular impingement; hip condition treated arthroscopically' },
        { term: 'hemarthrosis', definition: 'Blood in the joint, causing swelling and pain' },
        { term: 'triangulation', definition: 'Using multiple portals to access structures from different angles' },
      ],
      clinicalNotes: 'Recent RCTs have questioned the benefit of some common arthroscopic procedures (knee debridement for OA, subacromial decompression). Evidence-based patient selection is essential to optimize outcomes and value.',
    },
    4: {
      level: 4,
      summary: 'Arthroscopic surgery selection requires integration of clinical assessment, imaging correlation, evidence-based indications, and patient-specific factors to optimize outcomes and avoid procedures of limited value.',
      explanation: `Advanced arthroscopic practice requires understanding of evolving evidence, appropriate patient selection, and technique optimization.

**Evidence Critical Appraisal:**

*Knee OA debridement:*
- Moseley (2002), Kirkley (2008): No benefit vs. sham/conservative
- Not recommended for isolated OA
- May still be considered for specific mechanical symptoms

*Meniscal surgery in degenerative knees:*
- Multiple RCTs: Meniscectomy not superior to PT alone
- Mechanical symptoms may still benefit
- Shared decision-making essential

*Subacromial decompression:*
- CSAW trial, Finnish trial: No benefit vs. diagnostic arthroscopy
- Questions traditional indications
- Specific impingement syndromes may still benefit

**Appropriate Indications:**

*High-value procedures:*
- Meniscus repair in young patients
- ACL reconstruction in active individuals
- Rotator cuff repair for acute/traumatic tears
- Loose body removal
- Septic arthritis irrigation

*Selective indications:*
- Labral repair: Instability, failed conservative care
- FAI surgery: Symptomatic with imaging correlation
- SLAP repair: Carefully selected young patients

**Technical Excellence:**

*Meniscal repair:*
- Inside-out, outside-in, all-inside techniques
- Vertical vs. horizontal sutures
- Heal rate: 70-90% with appropriate selection
- Rehabilitation: Protect repair

*ACL reconstruction:*
- Anatomic tunnel placement
- Graft selection considerations
- Rehabilitation: Criteria-based RTS

*Rotator cuff:*
- Tear pattern recognition
- Repair configuration (single vs. double row)
- Margin convergence for large tears
- Biologic augmentation emerging

**Outcomes Optimization:**

*Preoperative:*
- Appropriate indication
- Patient expectations management
- Smoking cessation
- Weight optimization
- Psychological factors

*Intraoperative:*
- Technical precision
- Graft/repair security
- Minimize iatrogenic damage

*Postoperative:*
- Protocol-driven rehabilitation
- Appropriate protection
- Criteria-based progression
- Return-to-activity decisions

**Shared Decision-Making:**

*Key elements:*
- Present evidence clearly
- Discuss alternatives including no surgery
- Address expectations
- Consider patient values
- Document discussion`,
      keyTerms: [
        { term: 'sham surgery', definition: 'Placebo procedure in research to assess true treatment effect' },
        { term: 'mechanical symptoms', definition: 'Locking, catching, or giving way suggesting structural problem' },
        { term: 'all-inside technique', definition: 'Arthroscopic technique keeping all instruments within the joint' },
        { term: 'margin convergence', definition: 'Technique to reduce tear size before tendon-to-bone repair' },
      ],
      clinicalNotes: 'The Moseley, Kirkley, and CSAW trials represent landmark sham-controlled studies that have changed arthroscopic surgery practice. They demonstrate the importance of RCTs and that traditional procedures may have limited benefit beyond placebo effect.',
    },
    5: {
      level: 5,
      summary: 'Contemporary arthroscopic surgery integrates evolving evidence, advanced techniques, biologic augmentation, and value-based care principles to optimize patient selection and outcomes.',
      explanation: `Expert arthroscopic practice requires synthesis of technique, evidence, and patient-centered decision-making.

**Evidence Synthesis:**

*Landmark trials:*
- Moseley 2002: Knee OA debridement = sham
- Sihvonen 2013 (Finnish): Meniscectomy = sham for degenerative tears
- Beard 2018 (CSAW): Subacromial decompression = sham

*Clinical implications:*
- Challenge traditional indications
- Require more rigorous patient selection
- Emphasize mechanical symptoms over imaging
- Support conservative care as first-line

*Ongoing research:*
- Patient subgroups who benefit
- Optimal timing of intervention
- Biologic augmentation effectiveness

**Advanced Techniques:**

*Meniscus preservation:*
- Repair techniques evolving
- Root repair gaining evidence
- Scaffold/allograft options for loss
- Preserve to prevent OA

*ACL augmentation:*
- Lateral tenodesis/ALL reconstruction
- May reduce graft failure
- Indications being refined

*Cartilage restoration:*
- Microfracture: Small lesions
- OATS: Medium contained lesions
- MACI: Large lesions
- Scaffold/allograft options

*Rotator cuff:*
- Superior capsular reconstruction for massive tears
- Patch augmentation
- Biologic enhancement (PRP, stem cells)

**Biologic Augmentation:**

*Current evidence:*
- PRP for rotator cuff: Mixed results
- Stem cells: Early, limited evidence
- Growth factors: Preclinical promise

*Applications:*
- Enhance healing
- Treat cartilage defects
- Support tendon repair

**Value-Based Care:**

*Appropriate use:*
- Follow evidence-based indications
- Avoid procedures of limited value
- Shared decision-making
- Track outcomes

*Quality metrics:*
- Patient-reported outcomes
- Complication rates
- Reoperation rates
- Patient satisfaction

*Cost considerations:*
- Procedure costs
- Rehabilitation costs
- Time to return to work
- Long-term outcomes

**Emerging Technologies:**

*Navigation and robotics:*
- Improved precision
- Tunnel placement accuracy
- Learning curve considerations

*3D printing:*
- Patient-specific guides
- Surgical planning

*AI/Machine learning:*
- Image analysis
- Outcome prediction
- Surgical planning

**Research Priorities:**
- Identifying responders to surgery
- Optimal biologic approaches
- Long-term cartilage outcomes
- Comparative effectiveness
- Value-based outcomes`,
      keyTerms: [
        { term: 'ALL', definition: 'Anterolateral ligament; may be reconstructed with ACL for enhanced stability' },
        { term: 'superior capsular reconstruction', definition: 'Procedure using graft to replace irreparable rotator cuff' },
        { term: 'MACI', definition: 'Matrix-induced autologous chondrocyte implantation for cartilage repair' },
        { term: 'appropriate use criteria', definition: 'Evidence-based guidelines for when procedures are indicated' },
      ],
      clinicalNotes: `**Key Practice Principles:**

1. **Evidence-based selection:**
   - Follow current evidence
   - Mechanical symptoms predict better outcomes
   - Imaging alone insufficient indication
   - Sham-controlled trials inform practice

2. **High-value procedures:**
   - Meniscus repair (not meniscectomy) when possible
   - ACL reconstruction in appropriate patients
   - Acute rotator cuff repair
   - Loose body removal

3. **Questionable indications:**
   - OA debridement alone
   - Degenerative meniscal tears without mechanical symptoms
   - Subacromial decompression (evidence questioned)

4. **Optimization:**
   - Technical excellence
   - Protocol-driven rehabilitation
   - Criteria-based return to activity
   - Track outcomes

5. **Shared decision-making:**
   - Present evidence clearly
   - Discuss alternatives
   - Manage expectations
   - Document discussions`,
    },
  },

  media: [
    {
      id: 'arthroscopy-setup',
      type: 'diagram',
      filename: 'arthroscopy-equipment.svg',
      title: 'Arthroscopy Equipment',
      description: 'Arthroscope and typical setup for joint surgery',
    },
  ],
  citations: [
    {
      id: 'moseley-trial',
      type: 'article',
      title: 'A Controlled Trial of Arthroscopic Surgery for Osteoarthritis of the Knee',
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-knee-joint', targetType: 'structure', relationship: 'related', label: 'Knee Joint Anatomy' },
    { targetId: 'ortho-patient-shoulder-joint', targetType: 'structure', relationship: 'related', label: 'Shoulder Joint Anatomy' },
    { targetId: 'ortho-patient-ligament-tears', targetType: 'condition', relationship: 'related', label: 'Ligament Tears' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['surgery', 'procedures', 'minimally invasive'],
    keywords: ['arthroscopy', 'keyhole surgery', 'minimally invasive', 'joint surgery'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default arthroscopyContent;
