/**
 * Adaptive Equipment - Educational Content
 */

import { EducationalContent } from '../../types';

export const adaptiveEquipment: EducationalContent = {
  id: 'rehab-adaptive-equipment',
  type: 'concept',
  name: 'Adaptive Equipment',
  alternateNames: ['Assistive Devices', 'ADL Equipment', 'Durable Medical Equipment'],

  levels: {
    1: {
      level: 1,
      summary: 'Adaptive equipment includes tools and devices that make daily tasks easier when you have trouble doing them the usual way.',
      explanation: `Adaptive equipment helps people do everyday things like getting dressed, eating, and bathing when they have difficulty with these tasks.

**Examples:**
- **Dressing aids**: Long-handled shoehorn, button hook
- **Eating aids**: Built-up handles, plate guards
- **Bathing aids**: Shower chair, grab bars
- **Reaching aids**: Reachers, long-handled tools

**These tools help you:**
- Stay independent
- Do tasks safely
- Use less energy
- Avoid frustration`,
      keyTerms: [
        { term: 'adaptive equipment', definition: 'Tools modified to help with daily activities' },
        { term: 'reacher', definition: 'Tool with grabbing end to pick up items without bending' },
        { term: 'grab bar', definition: 'Bar mounted on wall for support and safety' },
      ],
      analogies: ['Adaptive equipment is like a kitchen gadget that makes cooking easier - it helps you do the job better.'],
      examples: ['Using a sock aid to put on socks without bending over.'],
    },
    2: {
      level: 2,
      summary: 'Adaptive equipment is prescribed based on functional assessment to compensate for physical limitations and enable independent performance of activities of daily living.',
      explanation: `Occupational therapists assess needs and recommend appropriate adaptive equipment.

**Categories:**

**Self-Care:**
- Dressing: button hooks, sock aids, elastic laces
- Grooming: long-handled brushes, adapted razors
- Bathing: shower chairs, transfer benches, grab bars
- Toileting: raised toilet seats, grab bars, bidets

**Feeding:**
- Built-up handles
- Weighted utensils
- Plate guards
- Non-slip mats
- One-handed cutting boards

**Mobility:**
- Transfer boards
- Bed rails
- Stair lifts
- Patient lifts

**Communication:**
- Large-button phones
- Voice-activated devices
- Screen readers

**Assessment Considerations:**
- Physical abilities (strength, ROM, coordination)
- Cognitive function
- Home environment
- Support system
- Insurance coverage`,
      keyTerms: [
        { term: 'ADL', definition: 'Activities of daily living - basic self-care tasks' },
        { term: 'IADL', definition: 'Instrumental activities of daily living - more complex tasks like cooking, shopping' },
        { term: 'transfer board', definition: 'Board used to slide between surfaces for transfers' },
      ],
      analogies: ['Finding the right adaptive equipment is like finding the right tool for a job - it makes the task possible.'],
    },
    3: {
      level: 3,
      summary: 'Adaptive equipment prescription integrates occupational analysis, user abilities, environmental factors, and evidence-based selection to optimize independence and participation in meaningful activities.',
      explanation: `## Assessment Framework

**Person:**
- Motor function
- Sensory function
- Cognitive status
- Psychosocial factors
- Goals and preferences

**Environment:**
- Physical layout
- Social support
- Access to equipment
- Funding

**Occupation:**
- Task demands
- Safety requirements
- Frequency of activity
- Importance to person

## Equipment Selection

**Principles:**
- Simplest effective solution
- Match complexity to ability
- Consider maintenance
- Plan for training

**Training:**
- Demonstration
- Supervised practice
- Safety education
- Follow-up assessment

## Evidence for Effectiveness

**Research Findings:**
- Improved independence
- Reduced caregiver burden
- Fall reduction (bathroom equipment)
- Cost-effectiveness

## Categories of Equipment

| Area | Low-Tech | High-Tech |
|------|----------|-----------|
| Dressing | Button hook | Powered dressing aids |
| Bathing | Grab bars | Walk-in tubs |
| Mobility | Cane | Powered lifts |
| Communication | Large print | Smart home systems |

## Funding Sources

- Medicare DME coverage
- Medicaid
- Private insurance
- Veterans Administration
- Nonprofit organizations`,
      keyTerms: [
        { term: 'DME', definition: 'Durable medical equipment - reusable medical items' },
        { term: 'occupational analysis', definition: 'Breaking down activities to identify demands and barriers' },
        { term: 'universal design', definition: 'Design approach usable by everyone regardless of ability' },
      ],
      clinicalNotes: 'Bathroom modifications (grab bars, shower chairs) have strong evidence for fall prevention. Simple, low-cost interventions often have the greatest impact.',
    },
    4: {
      level: 4,
      summary: 'Advanced adaptive equipment includes smart technology, environmental control systems, and customized solutions to address complex functional limitations and maximize participation.',
      explanation: `## Smart Home Technology

**Voice Control:**
- Smart speakers (Alexa, Google)
- Voice-activated lights, appliances
- Phone and communication
- Emergency calling

**Environmental Control:**
- Door openers
- Window treatments
- Temperature control
- Security systems

## Complex Needs

**High-Level Spinal Cord Injury:**
- Mouth stick
- Sip and puff controls
- Eye gaze systems
- Environmental control units

**Progressive Conditions:**
- Anticipatory planning
- Modular solutions
- Adaptation over time

## Customization

**3D Printing:**
- Custom grips
- Unique solutions
- Rapid prototyping
- Patient involvement

**Modification:**
- Standard equipment adaptation
- DIY solutions
- Maker resources

## Outcomes Assessment

**Measures:**
- Canadian Occupational Performance Measure (COPM)
- Functional Independence Measure (FIM)
- Quest user satisfaction
- Participation measures`,
      keyTerms: [
        { term: 'ECU', definition: 'Environmental control unit - system to control home features' },
        { term: 'eye gaze technology', definition: 'Control system using eye movement tracking' },
        { term: 'COPM', definition: 'Canadian Occupational Performance Measure - client-centered outcome tool' },
      ],
      clinicalNotes: 'Smart home technology originally designed for convenience has significant assistive technology applications, often at lower cost than traditional medical equipment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary adaptive equipment development explores AI integration, personalized design, and connected systems to create responsive, intelligent solutions that adapt to changing needs and enhance quality of life.',
      explanation: `## Emerging Technologies

**Artificial Intelligence:**
- Predictive assistance
- Learning user patterns
- Adaptive interfaces
- Voice understanding advances

**Robotics:**
- Assistive robots
- Robotic feeding systems
- Manipulation aids
- Companion robots

**Connected Systems:**
- IoT integration
- Health monitoring
- Remote support
- Data analytics

## Research Directions

**Personalization:**
- AI-driven customization
- 3D printing advances
- Modular design systems
- User co-design

**Integration:**
- Seamless home systems
- Health record integration
- Caregiver support tools
- Emergency response

## Implementation

**Barriers:**
- Cost
- Complexity
- Training
- Technical support

**Future:**
- Affordable smart tech
- Intuitive interfaces
- Global access
- Sustainable design`,
      keyTerms: [
        { term: 'IoT', definition: 'Internet of Things - connected devices sharing data' },
        { term: 'assistive robot', definition: 'Robot designed to help with daily tasks' },
        { term: 'co-design', definition: 'Design process involving end users as partners' },
      ],
      clinicalNotes: 'Consumer smart home technology is increasingly being used for assistive purposes, making advanced environmental control more affordable and accessible than dedicated medical equipment.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-occupational-therapy-principles', targetType: 'topic', relationship: 'related', label: 'Occupational Therapy Principles' },
  ],

  tags: {
    systems: ['functional'],
    topics: ['rehabilitation', 'adaptive equipment', 'ADL', 'assistive technology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adaptiveEquipment;
