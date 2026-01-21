/**
 * Browser-safe Tauri invoke wrapper
 *
 * Provides mock data when running in browser mode (npm run dev)
 * to enable UI development without the full Tauri backend.
 */

import { invoke as tauriInvoke } from '@tauri-apps/api/core';

// Check if running inside Tauri
export const isTauri = typeof window !== 'undefined' && !!(window as unknown as { __TAURI__?: unknown }).__TAURI__;

// Mock data for browser development
const mockDashboard = {
  summary: {
    totalConditions: 3,
    totalMedications: 2,
    totalLabResults: 5,
    totalWhoopCycles: 30,
    totalAppleHealthDays: 90,
    lastUpdated: new Date().toISOString()
  },
  activeConditions: [
    { id: '1', name: 'Hypertension', status: 'active', severity: 'moderate' },
    { id: '2', name: 'Type 2 Diabetes', status: 'active', severity: 'mild' },
    { id: '3', name: 'Hyperlipidemia', status: 'active', severity: 'mild' }
  ],
  currentMedications: [
    { id: '1', name: 'Lisinopril', dosage: '10mg', frequency: 'daily' },
    { id: '2', name: 'Metformin', dosage: '500mg', frequency: 'twice daily' }
  ],
  recentLabs: [
    { id: '1', testName: 'HbA1c', value: 6.8, unit: '%', status: 'elevated', collectedAt: '2024-06-15', trend: 'down', previousValue: 7.2 },
    { id: '2', testName: 'LDL Cholesterol', value: 118, unit: 'mg/dL', status: 'borderline', collectedAt: '2024-06-15', trend: 'stable' },
    { id: '3', testName: 'Creatinine', value: 0.9, unit: 'mg/dL', status: 'normal', collectedAt: '2024-06-15', trend: 'stable' }
  ],
  vitalsSummary: {
    restingHeartRate: 68,
    hrv: 42,
    sleepHours: 7.2,
    recoveryScore: 78,
    steps: 8500,
    lastUpdated: new Date().toISOString()
  },
  recentSymptoms: [
    { description: 'Mild headache in the morning', severity: 3, location: 'head', onsetDate: '2024-06-18' },
    { description: 'Lower back stiffness after sitting', severity: 4, location: 'lower back', onsetDate: '2024-06-17' }
  ]
};

const mockTimeline = [
  { id: '1', type: 'lab', title: 'Blood Panel', date: '2024-06-15', details: 'HbA1c, Lipid Panel, BMP' },
  { id: '2', type: 'medication', title: 'Started Lisinopril', date: '2024-05-01', details: '10mg daily for blood pressure' },
  { id: '3', type: 'condition', title: 'Diagnosed: Hypertension', date: '2024-04-15', details: 'Stage 1 hypertension' }
];

// Wrapper for Tauri invoke that handles browser mode gracefully
export async function invoke<T>(cmd: string, args?: Record<string, unknown>): Promise<T> {
  if (!isTauri) {
    console.log(`[Browser Mode] Tauri command "${cmd}" called with args:`, args);

    // Return mock data for browser development
    switch (cmd) {
      case 'check_database_exists':
        return false as T;
      case 'create_database':
        return true as T;
      case 'unlock_database':
        return true as T;
      case 'get_dashboard':
        return mockDashboard as T;
      case 'get_timeline':
        return mockTimeline as T;
      case 'log_symptom':
        return { id: Date.now().toString(), success: true } as T;
      case 'ai_health':
        return { available: true, model: 'mock-model', error: null } as T;
      case 'ai_chat':
        // Handle the ai_chat command used by ChatView
        const chatMessages = (args?.request as { messages: Array<{ role: string; content: string }> })?.messages || [];
        const lastUserMessage = chatMessages.filter(m => m.role === 'user').pop()?.content || '';
        return {
          content: generateMockAIResponse(lastUserMessage),
          model: 'mock-model',
          done: true
        } as T;
      case 'ai_chat_json':
        // Handle the ai_chat_json command used by InsightsPanel and SymptomEntryForm
        const jsonRequest = args?.request as { messages: Array<{ role: string; content: string }>; systemPrompt?: string } | undefined;
        const jsonMessages = jsonRequest?.messages || [];
        const systemPrompt = jsonRequest?.systemPrompt || '';
        const userContent = jsonMessages.filter(m => m.role === 'user').pop()?.content || '';

        // Check if it's an insights request or symptom parsing
        if (systemPrompt.includes('health data analyst') || userContent.includes('Analyze this health data')) {
          return {
            success: true,
            result: [
              'Your HbA1c shows improvement, trending down from 7.2% to 6.8%.',
              'Consider discussing your borderline LDL cholesterol (118 mg/dL) with your doctor.',
              'Your resting heart rate of 68 bpm is within normal range.'
            ]
          } as T;
        } else if (systemPrompt.includes('symptom parser')) {
          // Parse natural language symptom
          return {
            success: true,
            result: {
              description: userContent.slice(0, 100),
              severity: 5,
              bodyLocation: 'stomach',
              duration: { value: 2, unit: 'hours' },
              associatedFactors: ['after-eating'],
              notes: 'Parsed from natural language input'
            }
          } as T;
        }
        return { success: true, result: [] } as T;
      case 'add_symptom':
        return { id: Date.now().toString(), success: true } as T;
      case 'chat_with_ai':
        // Simulate AI response with health context
        const userMessage = (args?.message as string) || '';
        return {
          response: generateMockAIResponse(userMessage),
          sources: ['Mock Health Data']
        } as T;
      case 'get_structure_info':
        return {
          id: args?.structureId || 'unknown',
          name: 'Mock Structure',
          system: 'musculoskeletal',
          description: 'This is a mock structure description for browser development.',
          clinicalRelevance: 'Important for understanding anatomy.'
        } as T;
      default:
        console.warn(`[Browser Mode] No mock data for command: ${cmd}`);
        return {} as T;
    }
  }
  return tauriInvoke<T>(cmd, args);
}

function generateMockAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Anatomy-specific responses for body parts
  if (lowerMessage.includes('head') && (lowerMessage.includes('function') || lowerMessage.includes('what is'))) {
    return `The **head** houses several vital structures:

**Key Functions:**
- Contains the brain, which controls all body functions including thought, memory, movement, and sensory processing
- Houses major sensory organs (eyes, ears, nose, tongue)
- Protects the brain with the skull

**Anatomical Components:**
- Skull (cranium) - protective bone structure
- Brain - approximately 1.4 kg in adults
- Meninges - protective membranes around the brain
- Facial muscles and structures

Based on your health profile, your resting heart rate of 68 bpm indicates good cardiovascular support for brain function.`;
  }

  if (lowerMessage.includes('chest') || lowerMessage.includes('thorax')) {
    return `The **chest (thorax)** is a critical region containing vital organs:

**Key Structures:**
- Heart - pumps blood throughout the body
- Lungs - responsible for gas exchange (oxygen/CO2)
- Rib cage - protective bone structure
- Major blood vessels (aorta, vena cava)

**Cardiovascular Connection:**
With your hypertension being managed by Lisinopril, it's important to understand that this medication helps reduce the workload on your heart by relaxing blood vessels.

**Your vitals show:**
- Resting HR: 68 bpm (healthy range)
- HRV: 42 ms (indicates good autonomic function)

Would you like to know more about how your heart health relates to your current medications?`;
  }

  if (lowerMessage.includes('abdomen')) {
    return `The **abdomen** contains many essential organs for digestion and metabolism:

**Key Structures:**
- Stomach and intestines (digestion)
- Liver (detoxification, bile production)
- Pancreas (insulin production, digestive enzymes)
- Kidneys (filtration, blood pressure regulation)
- Spleen (immune function)

**Relevant to Your Health:**
Your Type 2 Diabetes involves the pancreas, which may not produce enough insulin or your cells may resist its effects. Metformin helps by improving insulin sensitivity.

Your Lisinopril also protects your kidneys, which is especially important with diabetes.`;
  }

  if (lowerMessage.includes('arm')) {
    return `The **arm** is a complex structure enabling reaching and manipulation:

**Anatomy:**
- Humerus (upper arm bone)
- Radius and Ulna (forearm bones)
- Shoulder joint (ball and socket)
- Elbow joint (hinge)
- Multiple muscle groups for movement

**Common Conditions:**
- Carpal tunnel syndrome
- Tennis elbow (lateral epicondylitis)
- Rotator cuff injuries
- Fractures

The arm receives blood supply from the brachial artery. Good cardiovascular health (like maintaining your blood pressure) ensures adequate circulation to the extremities.`;
  }

  if (lowerMessage.includes('leg')) {
    return `The **leg** supports body weight and enables locomotion:

**Anatomy:**
- Femur (thigh bone - longest bone in body)
- Tibia and Fibula (lower leg)
- Hip joint (ball and socket)
- Knee joint (hinge with menisci)
- Ankle joint (complex)

**Health Considerations:**
With your conditions (hypertension, diabetes), leg health is important:
- Diabetes can affect circulation to extremities
- Blood pressure management supports healthy blood flow
- Regular activity helps maintain muscle and joint health

Are you experiencing any symptoms in your legs I should know about?`;
  }

  if (lowerMessage.includes('neck')) {
    return `The **neck** connects the head to the body and contains vital structures:

**Key Components:**
- Cervical spine (C1-C7 vertebrae)
- Trachea (airway)
- Esophagus (food passage)
- Carotid arteries (blood supply to brain)
- Thyroid gland (metabolism regulation)

**Clinical Relevance:**
The carotid arteries in your neck deliver blood to your brain. With hypertension, these vessels experience higher pressure, which is why blood pressure control with Lisinopril is important for preventing stroke.`;
  }

  if (lowerMessage.includes('injury') || lowerMessage.includes('injuries')) {
    return `Common injuries depend on the body region, but here are some general categories:

**Head Injuries:**
- Concussion, skull fractures, traumatic brain injury

**Neck Injuries:**
- Whiplash, cervical strain, disc herniation

**Chest Injuries:**
- Rib fractures, pneumothorax, cardiac contusion

**Abdominal Injuries:**
- Organ laceration, internal bleeding

**Extremity Injuries:**
- Sprains, strains, fractures, dislocations

For any injury, it's important to seek appropriate medical evaluation. Would you like specific information about injuries to a particular body region?`;
  }

  if (lowerMessage.includes('blood pressure') || lowerMessage.includes('hypertension')) {
    return `Based on your health profile, I can see you have hypertension being managed with Lisinopril 10mg daily.

**Key points about your blood pressure:**
- Your condition is classified as active with moderate severity
- Lisinopril is an ACE inhibitor that helps relax blood vessels
- Regular monitoring is important

**Recommendations:**
1. Continue taking medication as prescribed
2. Monitor your blood pressure at home
3. Maintain a low-sodium diet
4. Regular exercise can help manage blood pressure

Would you like to learn more about how blood pressure affects specific organs, or explore the cardiovascular system in 3D?`;
  }

  if (lowerMessage.includes('diabetes') || lowerMessage.includes('blood sugar') || lowerMessage.includes('hba1c')) {
    return `Looking at your health data, you have Type 2 Diabetes being managed with Metformin 500mg twice daily.

**Your recent HbA1c: 6.8%** (trending down from 7.2% - great progress!)

**Understanding HbA1c:**
- Measures average blood sugar over 2-3 months
- Target for most diabetics: below 7%
- Your downward trend shows good control

**The pancreas and insulin:**
The pancreas produces insulin to help cells absorb glucose. In Type 2 Diabetes, cells become resistant to insulin's effects.

Would you like to explore the pancreas in 3D or learn more about how Metformin works?`;
  }

  if (lowerMessage.includes('cholesterol') || lowerMessage.includes('ldl')) {
    return `Your recent lipid panel shows LDL Cholesterol at 118 mg/dL (borderline).

**Understanding cholesterol:**
- LDL ("bad" cholesterol): Optimal is below 100 mg/dL
- Your level of 118 is slightly elevated
- Combined with your other conditions, managing this is important

**Connection to your cardiovascular health:**
With hypertension and diabetes, keeping cholesterol in check helps reduce risk of heart disease and stroke.

Would you like to see how cholesterol affects your arteries in the 3D model?`;
  }

  return `I'm here to help you understand this anatomical structure and how it relates to your health!

**Your Health Context:**
- Active Conditions: Hypertension, Type 2 Diabetes, Hyperlipidemia
- Current Medications: Lisinopril 10mg, Metformin 500mg

Feel free to ask about:
- The function of this body part
- Common injuries or conditions
- How your health conditions may affect this area
- Detailed anatomy

What would you like to know?`;
}
