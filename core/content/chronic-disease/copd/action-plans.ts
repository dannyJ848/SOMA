/**
 * COPD Action Plans - COPD Management
 */

import { EducationalContent } from '../../types';

export const ACTION_PLANS: EducationalContent = {
  id: 'copd-action-plans',
  type: 'concept',
  name: 'COPD Action Plans',
  alternateNames: ['Self-management plans', 'Exacerbation action plans', 'COPD emergency plan'],

  levels: {
    1: {
      level: 1,
      summary: 'A COPD action plan is a written guide that tells you what to do when your breathing gets worse.',
      explanation: `**What Is a COPD Action Plan?**
It is a simple guide using colors (like a traffic light) to help you know what to do based on how you feel.

**Green Zone (All Clear):**
- Breathing is normal for you
- Can do usual activities
- Continue regular medications

**Yellow Zone (Caution):**
- More short of breath than usual
- More mucus or color change
- Using rescue inhaler more often
- Action: Start prescribed medications, call doctor

**Red Zone (Emergency):**
- Severe shortness of breath
- Cannot catch breath
- Lips or fingernails turning blue
- Action: Call 911 or go to ER

**Keep your action plan where you can find it easily!**`,
      keyTerms: [
        { term: 'action plan', definition: 'A written guide for managing COPD symptoms' },
        { term: 'rescue inhaler', definition: 'Fast-acting inhaler used for quick relief' },
        { term: 'exacerbation', definition: 'A flare-up when COPD symptoms get much worse' },
      ],
      analogies: ['The action plan works like traffic lights - green means go, yellow means slow down and take action, red means stop and get emergency help.'],
      examples: ['When Tom noticed more mucus and felt more breathless, he checked his action plan. It was Yellow Zone, so he started his emergency medication pack and called his doctor.'],
    },
    2: {
      level: 2,
      summary: 'COPD action plans are structured self-management tools that guide patients through symptom assessment, early intervention for exacerbations, and appropriate healthcare utilization.',
      explanation: `**Action Plan Components:**

| Zone | Symptoms | Actions |
|------|----------|---------|
| Green | At baseline, usual symptoms | Continue maintenance medications |
| Yellow | Increased dyspnea, sputum changes | Start standby medications, contact provider |
| Red | Severe symptoms, not improving | Emergency care |

**Yellow Zone Interventions:**
- Increase bronchodilator frequency
- Start oral corticosteroids (if prescribed)
- Start antibiotics (if prescribed)
- Contact healthcare provider within 24-48 hours

**Standby Medications:**
- Prednisone 40mg x 5 days
- Antibiotics (if purulent sputum)
- Clear instructions for when to use

**Evidence:**
- Reduces hospitalizations
- Shortens exacerbation duration
- Improves patient confidence
- Requires education and support`,
      keyTerms: [
        { term: 'standby medications', definition: 'Emergency medications kept at home for early exacerbation treatment' },
        { term: 'purulent sputum', definition: 'Yellow or green mucus indicating possible infection' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based COPD action plans integrate symptom monitoring, threshold-based intervention algorithms, and coordinated care responses to reduce exacerbation severity and healthcare utilization.',
      explanation: `**Evidence Base:**

*Systematic Reviews:*
- Modest reduction in respiratory hospitalizations
- Improved quality of life
- Better self-efficacy
- Requires integration with comprehensive self-management

**Action Plan Elements:**

*Symptom Recognition:*
| Symptom | Significance |
|---------|--------------|
| Increased dyspnea | Core exacerbation symptom |
| Increased sputum volume | Suggests infection |
| Sputum purulence | Bacterial involvement |
| Increased cough | Airway inflammation |
| Wheeze | Bronchospasm |
| Fever | Infection |

*Intervention Thresholds:*
- 2 of 3 cardinal symptoms (dyspnea, sputum volume, sputum purulence)
- OR 1 cardinal + 1 minor symptom

**Pharmacological Components:**

*Corticosteroids:*
- Prednisone 40mg x 5 days (typical)
- Shortens exacerbation duration
- Reduces treatment failure

*Antibiotics:*
- Indicated if purulent sputum
- 5-7 day course
- Choice based on local resistance patterns`,
      keyTerms: [
        { term: 'Anthonisen criteria', definition: 'Classic exacerbation definition: increased dyspnea, sputum volume, and/or sputum purulence' },
        { term: 'cardinal symptoms', definition: 'Primary symptoms defining COPD exacerbation' },
      ],
      clinicalNotes: 'Action plans most effective when combined with comprehensive self-management education. Provide standby medications to appropriate patients. Ensure clear instructions and follow-up mechanisms.',
    },
    4: {
      level: 4,
      summary: 'Advanced COPD action plan implementation integrates validated symptom algorithms, personalized thresholds, and digital support systems for precision exacerbation management.',
      explanation: `**Exacerbation Phenotyping:**

*Frequent Exacerbator Phenotype:*
- ≥2 exacerbations per year
- Higher risk despite therapy
- Targeted prevention strategies needed

*Exacerbation Severity:*
| Severity | Definition | Management |
|----------|------------|------------|
| Mild | Increased symptoms, managed at home | Action plan medications |
| Moderate | Requires healthcare visit | Oral corticosteroids + antibiotics |
| Severe | Requires hospitalization | Hospital-based care |

**Personalization:**

*Individual Baselines:*
- Symptom diaries establish personal normal
- Individualized thresholds
- Pattern recognition

*Biomarker Integration:*
- Sputum eosinophils
- Exhaled nitric oxide
- Blood eosinophils
- Guide antibiotic vs. steroid decisions

**Digital Action Plans:**

*Features:*
- Symptom tracking apps
- Automated zone classification
- Medication reminders
- Care team alerts
- Telemedicine integration

*Evidence:*
- Improved adherence
- Earlier intervention
- Better outcomes in some studies`,
      keyTerms: [
        { term: 'frequent exacerbator', definition: 'Patient with ≥2 exacerbations annually despite treatment' },
        { term: 'phenotype-guided therapy', definition: 'Treatment selection based on patient characteristics' },
      ],
      clinicalNotes: 'Frequent exacerbators require intensified prevention strategies. Digital action plans may improve engagement. Consider biomarker-guided therapy in selected patients. Telemedicine enhances action plan support.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art COPD action plans leverage predictive analytics, real-time monitoring, and learning health system approaches for precision exacerbation prevention and management.',
      explanation: `**Predictive Exacerbation Management:**

*Multi-Parameter Monitoring:*
Continuous Data:
- Symptoms (digital diary)
- Physiologic (SpO2, activity, cough)
- Environmental (air quality)
- Behavioral (inhaler use)
     ↓
Machine Learning Models
     ↓
Risk Prediction (days to exacerbation)
     ↓
Preemptive Intervention

*Biomarker Trajectories:*
- FeNO trending
- Blood eosinophil dynamics
- Inflammatory marker patterns

**AI-Enhanced Decision Support:**

*Applications:*
- Automated symptom classification
- Personalized threshold adjustment
- Treatment recommendation
- Outcome prediction

*Clinical Decision Rules:*
- Evidence-based algorithms
- Continuously refined
- Clinician oversight maintained

**Learning Health System Integration:**

*Continuous Improvement:*
- Action plan effectiveness tracking
- Population-level pattern analysis
- Algorithm refinement
- Best practice dissemination

**Future Directions:**
- Implantable respiratory sensors
- Exhaled breath biomarkers
- Closed-loop intervention systems
- Personalized exacerbation prevention`,
      keyTerms: [
        { term: 'predictive analytics', definition: 'Using data patterns to forecast future events' },
        { term: 'closed-loop system', definition: 'Automated intervention based on continuous monitoring' },
      ],
      clinicalNotes: 'Predictive models may enable preemptive intervention before clinical exacerbation. AI-enhanced tools require validation and clinical integration. Learning health systems enable continuous improvement of action plan protocols.',
    },
  },

  media: [],
  citations: [{ id: 'gold-2024', type: 'article', title: 'GOLD COPD Report', source: 'GOLD' }],
  crossReferences: [{ targetId: 'copd-inhaler-technique', targetType: 'topic', relationship: 'related', label: 'Inhaler Technique' }],
  tags: { systems: ['respiratory'], topics: ['COPD', 'self-management'], keywords: ['action plan', 'exacerbation', 'self-management'], clinicalRelevance: 'critical' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
