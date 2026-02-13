import { EducationalContent } from '../../types';

export const dialysisAccessContent: EducationalContent = {
  id: 'dialysis-access',
  type: 'topic',
  name: 'Dialysis Access',
  alternateNames: ['Hemodialysis Access', 'AV Fistula', 'Vascular Access'],
  levels: {
    1: {
      level: 1,
      summary: 'Dialysis access is a way to reach your bloodstream for hemodialysis treatment, created as a connection between an artery and a vein or a tube placed in a large vein.',
      explanation: `## What is Dialysis Access?

Dialysis access is a way to reach your bloodstream for hemodialysis treatment. It's a connection created between an artery and a vein, or a tube placed in a large vein, that allows blood to flow in and out of your body during dialysis.

### Key Points

- Creates access to bloodstream for dialysis
- Usually placed in the arm
- Allows blood to flow to dialysis machine
- Essential for hemodialysis treatment

### Important Terms

- **Hemodialysis**: Mechanical filtration of blood
- **Access**: Entrance point to bloodstream
- **Nephrologist**: Kidney specialist doctor`,
      keyTerms: [
        { term: 'Hemodialysis', definition: 'Mechanical filtration of blood' },
        { term: 'Access', definition: 'Entrance point to bloodstream' },
        { term: 'Nephrologist', definition: 'Kidney specialist doctor' }
      ],
      patientCounselingPoints: [
        'Planning for dialysis access should begin before you need dialysis',
        'Protect your access arm - no blood draws or blood pressure checks on that side',
        'Good access can make dialysis treatments more effective and comfortable',
        'Your access is your "lifeline" for dialysis'
      ]
    },
    2: {
      level: 2,
      summary: 'There are three main types of hemodialysis access: AV fistula (preferred, using your own vessels), AV graft (synthetic tube), and dialysis catheter (temporary use).',
      explanation: `## Types of Dialysis Access

There are three main types of hemodialysis access, each with different advantages and considerations.

### Key Points

- AV fistula is the preferred type
- AV graft uses synthetic material
- Catheter is placed in a large vein
- Each type has different benefits and risks

### Access Types

**AV Fistula**
Surgically connects an artery directly to a vein. Made from your own blood vessels. Lowest complication rate. Takes 6-12 weeks to mature. Preferred long-term access.

**AV Graft**
Uses a synthetic tube to connect artery and vein. Ready to use in 2-3 weeks. Used when veins aren't suitable for fistula. Higher infection risk than fistula.

**Dialysis Catheter**
Large tube placed in a vein in the neck or groin. Can be used immediately. For temporary use or when fistula/graft isn't possible. Highest complication risk.

**Choosing the Right Access**
Your nephrologist and vascular surgeon will consider your vein size, overall health, and dialysis timeline. Fistula is preferred whenever possible.`,
      keyTerms: [
        { term: 'AV fistula', definition: 'Arteriovenous fistula - direct artery-vein connection' },
        { term: 'AV graft', definition: 'Synthetic tube connecting artery to vein' },
        { term: 'Maturation', definition: 'Development of fistula for dialysis use' },
        { term: 'Vascular surgeon', definition: 'Specialist in blood vessel procedures' }
      ],
      patientCounselingPoints: [
        'AV fistula is the best option when possible - it has the lowest risk of complications',
        'If your veins are too small for a fistula, a graft may be recommended',
        'Catheters are usually temporary while waiting for fistula or graft to heal'
      ]
    },
    3: {
      level: 3,
      summary: 'Planning for dialysis access should begin months before you need dialysis with vein mapping to identify best vessels, protecting your non-dominant arm, and avoiding blood draws in the access arm.',
      explanation: `## Preparing for Dialysis Access

Planning for dialysis access should begin well before you need dialysis. Early preparation allows for the best outcomes.

### Key Points

- Plan access months before dialysis is needed
- Vein mapping helps identify best vessels
- Protect your non-dominant arm
- Avoid blood draws and IVs in access arm

### Preparation Steps

**Timing**
Access should be placed months before dialysis is needed. This allows the fistula to mature and reduces need for temporary catheters.

**Vein Mapping**
An ultrasound test evaluates the size and quality of your arteries and veins. Helps determine the best access type and location.

**Protecting Your Veins**
Avoid blood draws, IVs, and blood pressure checks in the non-dominant arm (usually left arm) being considered for access. Keep skin clean and moisturized.

**Before the Procedure**
You'll have a pre-operative evaluation. Blood tests assess overall health. You may need to stop blood thinners. Arrange for someone to drive you home.`,
      keyTerms: [
        { term: 'Vein mapping', definition: 'Ultrasound evaluation of blood vessels' },
        { term: 'Non-dominant arm', definition: 'Arm you don\'t use as much (usually left)' },
        { term: 'Pre-operative', definition: 'Before surgery' },
        { term: 'Maturation time', definition: 'Weeks needed for fistula development' }
      ],
      examples: [
        'A patient with chronic kidney disease gets vein mapping 6 months before starting dialysis',
        'Someone protects their left arm by refusing blood draws in that arm'
      ]
    },
    4: {
      level: 4,
      summary: 'Dialysis access creation is typically an outpatient procedure using local anesthesia with the fistula or graft placed in the arm and allowing you to go home the same day.',
      explanation: `## The Dialysis Access Creation Procedure

Creating dialysis access is typically an outpatient surgical procedure.

### Key Points

- Usually outpatient surgery
- Local anesthesia is used
- Fistula/graft placed in the arm
- You can go home the same day

### Procedure Details

**Anesthesia and Preparation**
Local anesthesia numbs the arm. The area is cleaned and draped. You may receive a mild sedative to help you relax.

**Fistula Creation**
An incision is made in the arm. The artery and vein are identified. They are surgically connected. Blood flow is redirected into the vein, causing it to enlarge.

**Graft Placement**
If a graft is used, an incision is made in the arm. The graft is tunneled under the skin and connected to the artery and vein.

**After the Procedure**
The incision is closed with stitches or staples. You'll have a bandage. You can go home after a short recovery period. Pain is usually mild.

**Checking the Access**
You'll feel a vibration (thrill) over the access. This confirms blood is flowing properly.`,
      keyTerms: [
        { term: 'Outpatient', definition: 'Going home same day as procedure' },
        { term: 'Thrill', definition: 'Vibration felt over functioning access' },
        { term: 'Bruit', definition: 'Sound heard over functioning access' },
        { term: 'Needle sticks', definition: 'Inserting dialysis needles during treatment' }
      ],
      clinicalNotes: 'Radiocephalic fistula at the wrist is preferred due to low complication rates. Minimum vein diameter of 2.0mm and artery of 2.0mm recommended. Transposed brachial-basilic fistula is alternative when wrist veins inadequate.'
    },
    5: {
      level: 5,
      summary: 'Dialysis access care includes checking the thrill daily, keeping the access arm clean, avoiding tight clothing or heavy lifting, and watching for signs of infection or clotting.',
      explanation: `## Caring for Your Dialysis Access

Proper care of your dialysis access is essential for it to function well and last as long as possible.

### Key Points

- Check the thrill daily
- Keep access arm clean and protected
- Avoid tight clothing or heavy lifting
- Watch for signs of infection or clotting

### Access Care

**Daily Checks**
Feel for the thrill (vibration) over the access. Listen for the bruit (whooshing sound) with a stethoscope. Check for bleeding after dialysis.

**Protection**
Don't sleep on the access arm. Don't carry heavy bags or purses on that side. Avoid tight sleeves or watches. Don't let blood pressure be taken on that arm.

**Hygiene**
Keep the access area clean. Wash daily with soap and water. Don't scratch or pick at the site. Cover with a clean bandage if there's any drainage.

**Warning Signs**
No thrill or bruit (access may be clotted), swelling of the hand or arm, redness or warmth, drainage from incisions, fever, or bleeding that won't stop.

**Long-Term Care**
The access is your lifeline. Take good care of it and it can last for many years. Regular monitoring by your dialysis team is essential.`,
      keyTerms: [
        { term: 'Steal syndrome', definition: 'Blood diversion causing hand ischemia' },
        { term: 'Aneurysm', definition: 'Bulging weakened area of access' },
        { term: 'Stenosis', definition: 'Narrowing of the access' },
        { term: 'Thrombosis', definition: 'Clotting of the access' },
        { term: 'Ischemia', definition: 'Inadequate blood flow' }
      ],
      clinicalNotes: 'Primary patency rates for fistulas are approximately 60% at 1 year. Surveillance monitoring with flow studies detects stenosis early. Angioplasty or surgical revision can salvage failing accesses.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['dialysis access', 'nephrology', 'vascular surgery'],
    keywords: ['dialysis', 'AV fistula', 'hemodialysis', 'vascular access']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
