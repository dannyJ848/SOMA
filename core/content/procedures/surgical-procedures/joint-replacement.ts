import { EducationalContent } from '../../types';

export const jointReplacementContent: EducationalContent = {
  id: 'joint-replacement',
  type: 'topic',
  name: 'Joint Replacement Surgery',
  alternateNames: ['Arthroplasty', 'Joint Prosthesis', 'Total Joint Replacement'],
  levels: {
    1: {
      level: 1,
      summary: 'Joint replacement surgery removes a damaged joint and replaces it with an artificial joint called a prosthesis made of metal, plastic, or ceramic materials.',
      explanation: `## What is Joint Replacement?

Joint replacement surgery removes a damaged joint and replaces it with an artificial joint called a prosthesis. The new joint is made of metal, plastic, or ceramic materials. It's most commonly done on hips and knees but can also be performed on shoulders, elbows, and other joints.

### Key Points

- Removes damaged joint surfaces
- Replaces with artificial components
- Relieves pain and restores function
- Most common for hip and knee arthritis

### Important Terms

- **Prosthesis**: Artificial joint component
- **Arthritis**: Joint inflammation and damage
- **Orthopedic surgeon**: Doctor specializing in bones and joints`,
      keyTerms: [
        { term: 'Prosthesis', definition: 'Artificial joint component' },
        { term: 'Arthritis', definition: 'Joint inflammation and damage' },
        { term: 'Orthopedic surgeon', definition: 'Doctor specializing in bones and joints' }
      ],
      patientCounselingPoints: [
        'Joint replacement can dramatically reduce pain and improve mobility',
        'Most people who have joint replacement are very satisfied with the results',
        'The surgery is typically done after other treatments have not provided enough relief',
        'Recovery involves physical therapy to regain strength and movement'
      ]
    },
    2: {
      level: 2,
      summary: 'Joint replacement can be performed on several different joints with knee replacement being the most common, followed by hip replacement, and less commonly shoulder, elbow, wrist, and ankle replacements.',
      explanation: `## Types of Joint Replacement

Joint replacement can be performed on several different joints, though hip and knee replacements are by far the most common.

### Key Points

- Knee replacement is most common
- Hip replacement provides excellent pain relief
- Shoulder replacement treats arthritis and fractures
- Other joints can also be replaced

### Joint Replacement Types

**Knee Replacement**
Total knee replacement resurfaces the ends of the thigh and shin bones with metal and replaces the kneecap with plastic. Partial knee replacement replaces only the damaged compartment.

**Hip Replacement**
The ball (femoral head) is replaced with metal or ceramic. The socket (acetabulum) is lined with a metal cup and plastic/ceramic liner. Can be done through various surgical approaches.

**Shoulder Replacement**
Total shoulder replaces the ball and socket. Reverse total shoulder has the ball and socket swapped - used for severe rotator cuff damage.

**Other Joints**
Elbow, wrist, ankle, and finger joint replacements are less common but available for severe arthritis that hasn't responded to other treatments.`,
      keyTerms: [
        { term: 'Total knee arthroplasty', definition: 'Full knee replacement' },
        { term: 'Total hip arthroplasty', definition: 'Full hip replacement' },
        { term: 'Hemiarthroplasty', definition: 'Replacing only half the joint' },
        { term: 'Arthroplasty', definition: 'Surgical joint reconstruction' }
      ],
      patientCounselingPoints: [
        'Your surgeon will recommend which type of joint replacement is best for you',
        'Partial joint replacement may be an option if only part of your joint is damaged',
        'Each joint type has different recovery expectations and activity restrictions'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation before joint replacement surgery includes medical optimization of chronic conditions, preoperative testing, home preparation for recovery, and prehabilitation physical therapy.',
      explanation: `## Preparing for Joint Replacement

Proper preparation before joint replacement surgery can improve outcomes and speed recovery.

### Key Points

- Preoperative education is helpful
- Optimize your health before surgery
- Plan your home recovery space
- Arrange for help after surgery

### Preparation Steps

**Medical Optimization**
Control chronic conditions like diabetes and hypertension. Optimize weight if possible. Stop smoking to improve healing. Discuss all medications with your surgeon.

**Preoperative Testing**
Blood tests, EKG, chest X-ray, and urine tests may be done. Your surgeon will review your medical history and examine the joint. Photos or measurements may be taken for implant sizing.

**Home Preparation**
Arrange furniture for easy movement. Remove tripping hazards like rugs. Set up a living area on one floor if possible. Get a shower chair or handrails. Prepare frozen meals.

**Prehabilitation**
Physical therapy exercises before surgery can strengthen muscles and improve outcomes. Learning exercises beforehand makes postoperative PT easier.`,
      keyTerms: [
        { term: 'Prehabilitation', definition: 'Physical therapy before surgery' },
        { term: 'EKG', definition: 'Heart electrical activity test' },
        { term: 'Hypertension', definition: 'High blood pressure' },
        { term: 'Implant sizing', definition: 'Determining correct prosthesis size' }
      ],
      examples: [
        'A patient attends a joint replacement class to learn what to expect',
        'Someone does physical therapy exercises for 4-6 weeks before knee replacement to strengthen muscles'
      ]
    },
    4: {
      level: 4,
      summary: 'Joint replacement is performed under spinal or general anesthesia taking 1-3 hours, with damaged cartilage and bone removed and the prosthesis cemented or press-fit into place.',
      explanation: `## The Joint Replacement Procedure

Joint replacement is performed under anesthesia and typically takes 1-3 hours depending on the joint and complexity.

### Key Points

- Performed under spinal or general anesthesia
- Damaged cartilage and bone are removed
- Prosthesis is cemented or press-fit into place
- Hospital stay is usually 1-3 days

### Procedure Details

**Anesthesia**
Spinal/epidural anesthesia numbs the lower body and allows you to stay awake. General anesthesia puts you to sleep. Nerve blocks may be used for pain control after surgery.

**The Surgical Steps**
An incision is made over the joint. Damaged cartilage and bone are removed. The bone surfaces are shaped to fit the prosthesis. The implant is placed (cemented or press-fit). The incision is closed with sutures or staples.

**Fixation Methods**
Cemented: bone cement holds the prosthesis. Press-fit/biological: bone grows into porous coating of implant. Each method has advantages in different situations.

**Minimally Invasive Options**
Some surgeons use smaller incisions and specialized instruments. This may lead to faster recovery but isn't suitable for everyone.`,
      keyTerms: [
        { term: 'Bone cement', definition: 'Material holding implant to bone' },
        { term: 'Press-fit', definition: 'Implant held by bone ingrowth' },
        { term: 'Nerve block', definition: 'Numbing specific nerves for pain' },
        { term: 'Arthrotomy', definition: 'Opening the joint capsule' }
      ],
      clinicalNotes: 'Computer navigation and robotic-assisted surgery improve implant alignment. Enhanced recovery protocols reduce hospital stays. Periarticular injection reduces postoperative narcotic requirements.'
    },
    5: {
      level: 5,
      summary: 'Recovery from joint replacement involves physical therapy starting immediately with full recovery taking 3-6 months, and most implants can last 15-25 years before potential revision surgery.',
      explanation: `## Recovery and Rehabilitation

Recovery from joint replacement involves a structured rehabilitation program and commitment to physical therapy for the best outcome.

### Key Points

- Physical therapy starts immediately
- Full recovery takes 3-6 months
- Most people can return to normal activities
- The implant can last 15-25 years

### Recovery Details

**Hospital Recovery**
Walking begins the day of surgery or next day. Pain is managed with medications. Blood thinners prevent clots. You'll learn exercises and home care. Hospital stay 1-3 days; some go home same day.

**Rehabilitation Phases**
First 6 weeks: focus on motion and gentle strengthening. 6-12 weeks: progress strengthening and endurance. 3-6 months: return to most activities. Continue exercises long-term for best results.

**Activity After Joint Replacement**
Walking, swimming, and cycling are excellent. Avoid high-impact activities like running and jumping. Most daily activities are possible. Golf, dancing, and hiking are often approved.

**Implant Longevity**
Most joint replacements last 15-25 years. Wear and loosening can occur over time. Younger, more active patients may need revision surgery eventually.

**Warning Signs**
Call your doctor for increasing pain, new onset swelling, redness or warmth around the joint, fever, or sudden difficulty moving the joint. These could indicate infection or loosening.`,
      keyTerms: [
        { term: 'Range of motion', definition: 'How far joint can move' },
        { term: 'Loosening', definition: 'Implant becoming detached from bone' },
        { term: 'Revision surgery', definition: 'Replacing a failed implant' },
        { term: 'Periprosthetic fracture', definition: 'Fracture around the implant' },
        { term: 'Contracture', definition: 'Joint becoming stiff' }
      ],
      clinicalNotes: 'Periprosthetic infection rate is approximately 1%. Aseptic loosening is the most common reason for revision. Venous thromboembolism prophylaxis is essential for 4-6 weeks postoperatively.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['joint replacement', 'orthopedics', 'arthritis'],
    keywords: ['joint replacement', 'arthroplasty', 'hip', 'knee', 'surgery']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
