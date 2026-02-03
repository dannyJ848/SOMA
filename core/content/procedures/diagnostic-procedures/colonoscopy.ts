import { EducationalContent } from '../../types';

export const colonoscopyContent: EducationalContent = {
  id: 'colonoscopy',
  type: 'topic',
  name: 'Colonoscopy',
  alternateNames: ['Colonoscopic Examination', 'Lower GI Endoscopy'],
  levels: {
    1: {
      level: 1,
      summary: 'A colonoscopy is a medical procedure that lets a doctor look inside your entire colon and rectum using a long, flexible tube with a camera to prevent and detect colorectal cancer.',
      explanation: `## What is a Colonoscopy?

A colonoscopy is a medical procedure that lets a doctor look inside your entire colon and rectum using a long, flexible tube with a camera. It's an important test for preventing and detecting colorectal cancer.

### Key Points

- Examines the entire large intestine (colon)
- Uses a flexible tube with a light and camera
- Can prevent colon cancer by removing polyps
- Recommended starting at age 45 for most people

### Important Terms

- **Colon**: Large intestine
- **Polyp**: Growth on the colon lining
- **Gastroenterologist**: Doctor specializing in digestive system`,
      keyTerms: [
        { term: 'Colon', definition: 'Large intestine' },
        { term: 'Polyp', definition: 'Growth on the colon lining' },
        { term: 'Gastroenterologist', definition: 'Doctor specializing in digestive system' }
      ],
      patientCounselingPoints: [
        'Colonoscopy is the best way to prevent colon cancer by finding and removing polyps before they become cancer',
        'Most people have no memory of the procedure due to sedation',
        'The day-before preparation is the hardest part - the procedure itself is easy',
        'You will need someone to drive you home afterward'
      ]
    },
    2: {
      level: 2,
      summary: 'Colonoscopy is the gold standard for colorectal cancer screening, finding and removing precancerous polyps, and investigating digestive symptoms like bleeding or bowel habit changes.',
      explanation: `## Why Get a Colonoscopy?

Colonoscopy is the gold standard for colorectal cancer screening and can help diagnose various digestive conditions.

### Key Points

- Screen for colorectal cancer
- Find and remove precancerous polyps
- Investigate symptoms like bleeding or changes in bowel habits
- Monitor inflammatory bowel disease

### Uses of Colonoscopy

**Cancer Prevention**
Most colon cancers start as polyps. Removing polyps during colonoscopy prevents them from becoming cancer. This is why colonoscopy saves lives.

**Diagnostic Indications**
Rectal bleeding, chronic diarrhea, unexplained weight loss, anemia, abdominal pain, changes in bowel habits, or abnormal imaging findings.

**Surveillance**
If you've had polyps or colon cancer before, or have inflammatory bowel disease, regular colonoscopies monitor for recurrence or changes.

**Family History**
If a close relative had colon cancer or polyps, you may need earlier and more frequent screening.`,
      keyTerms: [
        { term: 'Colorectal cancer', definition: 'Cancer of colon or rectum' },
        { term: 'Adenoma', definition: 'Precancerous type of polyp' },
        { term: 'Inflammatory bowel disease', definition: 'Chronic inflammation including Crohn\'s and ulcerative colitis' },
        { term: 'Adenocarcinoma', definition: 'Cancer starting in glandular cells' }
      ],
      patientCounselingPoints: [
        'Your doctor may recommend colonoscopy if you have rectal bleeding, chronic diarrhea, or a family history of colon cancer',
        'The procedure both screens for cancer and can prevent it by removing polyps',
        'Discuss with your doctor when to start screening based on your risk factors'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper bowel preparation is the most important part of a successful colonoscopy, requiring clear liquid diet the day before and drinking all of the prescribed laxative solution.',
      explanation: `## Bowel Preparation

The bowel preparation is the most important part of a successful colonoscopy. Your colon must be completely clean for the doctor to see clearly.

### Key Points

- Follow preparation instructions exactly
- Clear liquid diet the day before
- Drink all of the prescribed prep solution
- Stay near a bathroom during prep

### Preparation Details

**Day Before Procedure**
Switch to clear liquids only (water, broth, clear juices, Jell-O, sports drinks). Avoid red, purple, or blue liquids that can be confused with blood.

**The Prep Solution**
Drink large volume of laxative solution that causes complete bowel cleansing. Timing varies by type - some all at once, some split-dose (half night before, half morning of).

**Tips for Success**
Keep prep chilled. Use a straw. Have wipes or moist towels ready. Apply barrier cream to anal area. Stay hydrated with clear fluids.

**Medication Adjustments**
Stop iron supplements 5 days before. Ask about blood thinners, aspirin, NSAIDs, and diabetes medication adjustments.`,
      keyTerms: [
        { term: 'Laxative', definition: 'Medication that promotes bowel movements' },
        { term: 'Split-dose prep', definition: 'Taking half night before, half morning of procedure' },
        { term: 'Clear liquid diet', definition: 'Only transparent fluids allowed' },
        { term: 'Barrier cream', definition: 'Protective ointment for skin' }
      ],
      examples: [
        'A patient uses split-dose prep, drinking half the solution the night before and the remainder 6 hours before the procedure',
        'Someone applies barrier cream before starting the prep to prevent anal irritation from frequent bowel movements'
      ]
    },
    4: {
      level: 4,
      summary: 'During colonoscopy, you receive IV sedation, lie on your left side, and the scope is carefully advanced through the colon while removing any polyps found during the exam.',
      explanation: `## The Colonoscopy Procedure

During the colonoscopy, you'll be sedated and comfortable. The procedure typically takes 30-60 minutes.

### Key Points

- IV sedation keeps you comfortable
- You lie on your left side
- The scope is carefully advanced through the colon
- Polyps are removed during the exam

### Procedure Details

**Getting Started**
An IV is placed. You'll receive sedation medication (propofol is common). Monitors track vital signs. Most people have little or no memory of the procedure.

**During the Exam**
The colonoscope is inserted into the rectum and carefully advanced. Air is insufflated to expand the colon for better visibility. The doctor withdraws slowly while examining.

**Polyp Removal**
Polyps are removed with snare (wire loop) or biopsy forceps. This prevents colon cancer. Large polyps may be marked for surgical removal.

**Recovery**
You'll rest for 30-60 minutes until alert. You may feel bloated from air - this passes quickly. Someone must drive you home.`,
      keyTerms: [
        { term: 'Propofol', definition: 'Powerful sedation medication' },
        { term: 'Insufflation', definition: 'Blowing air/CO2 into colon' },
        { term: 'Snare', definition: 'Wire loop for removing polyps' },
        { term: 'Cecum', definition: 'Beginning of colon where scope reaches' },
        { term: 'Terminal ileum', definition: 'End of small intestine sometimes examined' }
      ],
      clinicalNotes: 'Cecal intubation (reaching the beginning of the colon) is the quality benchmark. Adenoma detection rate correlates with cancer prevention. CO2 insufflation reduces post-procedure discomfort compared to air.'
    },
    5: {
      level: 5,
      summary: 'Colonoscopy findings determine surveillance intervals with normal exams repeated in 10 years, small polyps in 5-10 years, large or multiple polyps in 3 years, and cancer requiring immediate referral.',
      explanation: `## Results and Follow-Up

Your doctor will discuss findings immediately after the procedure. Biopsy results take several days. Follow-up recommendations depend on findings.

### Key Points

- Normal colonoscopy: repeat in 10 years
- Small polyps: repeat in 5-10 years
- Large or multiple polyps: repeat in 3 years
- Cancer: immediate referral for treatment

### Results and Follow-Up

**Understanding Your Results**
Normal: no polyps or abnormalities. Polyps found: type, number, and size determine cancer risk and surveillance interval. Cancer: referral to oncologist.

**Polyp Types**
Adenomatous (precancerous), hyperplastic (benign), serrated (some precancerous), sessile serrated adenomas (higher risk), traditional serrated adenomas (higher risk).

**Surveillance Intervals**
Based on number, size, and type of polyps: 10 years for small adenomas, 3-5 years for multiple or large adenomas, 1 year for high-risk findings.

**After the Procedure**
Normal activities can resume next day. Call your doctor for severe pain, fever, vomiting, or bleeding. Your first bowel movement may have small amount of blood.`,
      keyTerms: [
        { term: 'Adenomatous polyp', definition: 'Precancerous growth' },
        { term: 'Hyperplastic polyp', definition: 'Generally benign polyp' },
        { term: 'Serrated', definition: 'Saw-tooth appearance under microscope' },
        { term: 'Surveillance interval', definition: 'Time until next colonoscopy' },
        { term: 'Sessile', definition: 'Flat, broad-based polyp' }
      ],
      clinicalNotes: 'Serrated polyposis syndrome requires more frequent surveillance. Colonoscopy miss rate for polyps is approximately 6-9%, with missed lesions more likely in the right colon and with flat morphology.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['colonoscopy', 'gastroenterology', 'cancer screening'],
    keywords: ['colonoscopy', 'colorectal cancer', 'polyp', 'screening']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
