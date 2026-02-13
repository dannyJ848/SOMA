import { EducationalContent } from '../types';

export const pdsaContent: EducationalContent = {
  id: 'pdsa-cycles',
  type: 'topic',
  name: 'PDSA Cycles',
  alternateNames: ['Plan-Do-Study-Act', 'Quality Improvement Cycles', 'QI Cycles'],
  levels: {
    1: {
      level: 1,
      summary: 'The Plan-Do-Study-Act (PDSA) cycle is a systematic method for testing changes in real-life settings. It involves four phases: Plan (identify what to change), Do (test the change), Study (analyze results), and Act (decide next steps).',
      explanation: `The Plan-Do-Study-Act cycle is the core framework used in quality improvement to create iterative, manageable changes that lead to better outcomes.

**What is a PDSA Cycle?**

The PDSA cycle involves four phases:

1. **Plan** - Identify what you want to change and create a plan
2. **Do** - Test the change on a small scale
3. **Study** - Observe and learn from the results
4. **Act** - Decide what to do next based on what you learned

**Why Use PDSA?**

- Small tests - Make changes on a small scale first
- Quick learning - Rapid feedback on what works
- Less risk - Failures have minimal impact
- Continuous improvement - Keep refining and improving

**A Simple Example**

You want to reduce wait times in clinic:
- Plan: Try a new check-in process with 5 patients
- Do: Test it for one morning
- Study: Compare wait times to usual process
- Act: Adjust process based on results and test again

**Key Principle**

PDSA is about learning through doing. Each cycle teaches you something that informs the next cycle.`,
      keyTerms: [
        { term: 'PDSA cycle', definition: 'A method for testing changes through four phases: Plan, Do, Study, Act' },
        { term: 'Plan phase', definition: 'Identify a change and create a detailed plan to test it' },
        { term: 'Do phase', definition: 'Carry out the planned test on a small scale' },
        { term: 'Study phase', definition: 'Analyze results and compare to predictions' },
        { term: 'Act phase', definition: 'Decide what to do next based on what you learned' }
      ],
      analogies: [
        'PDSA is like the scientific method applied to practice improvement - you form a hypothesis, test it, analyze results, and draw conclusions.',
        'Each PDSA cycle is like a rehearsal where you practice and refine before the big performance.'
      ],
      examples: [
        'A clinic used PDSA to reduce no-show rates by testing reminder calls, finding text messages were more effective for younger patients.',
        'A hospital tested different handoff protocols on one unit before spreading the most effective approach hospital-wide.'
      ],
      patientCounselingPoints: [
        'PDSA allows healthcare teams to test changes on a small scale before widespread implementation.',
        'Small tests minimize risk and allow for quick learning.',
        'Not every change will work - that\'s expected. The key is learning from each test.',
        'Even "failed" PDSA cycles provide valuable information.'
      ]
    },
    2: {
      level: 2,
      summary: 'The Plan phase requires clear aim statements, predictions, and specific questions. Good plans define what will be tested, who is involved, when it will happen, what data will be collected, and what outcomes are predicted.',
      explanation: `The Plan phase is the foundation of a successful PDSA cycle.

**Key Planning Elements**

1. Define your aim - What specifically are you trying to improve?
2. Predict outcomes - What do you think will happen?
3. Determine scope - Who, when, how many participants?
4. Data collection - What will you measure?

**A Good PDSA Plan Answers**

What are we testing? - Specific change description
Who is involved? - One physician, 10 patients
When? - Tuesday and Thursday next week
What data will we collect? - Number of medication errors identified
What do we predict? - We will identify 2-3 errors we would have missed
How will we know if it worked? - Comparison to previous week baseline

**Common Planning Mistakes**

1. Testing too much at once - Keep changes focused
2. No clear prediction - Without a prediction, you cannot learn
3. Forgetting to plan data collection - You need data to study
4. Skipping the small scale - Don't start with a hospital-wide change

**Sample PDSA Planning Template**

Aim: Your specific improvement goal
Change to be tested: Specific change description
Prediction: What you think will happen
Plan:
- Who: Who will participate
- What: What will happen
- When: When will it happen
- Data to collect: What measurements you'll take

Next test date: When you'll review results

**Tips for Better Planning**

- Be specific - Vague plans lead to unclear results
- Start smaller than you think - You can always scale up
- Write it down - Documentation helps with the Study phase
- Set a timeline - Know when you'll review results`,
      keyTerms: [
        { term: 'aim statement', definition: 'A clear, specific description of what you hope to achieve through your improvement effort' },
        { term: 'prediction', definition: 'What you expect will happen when you test your change; essential for learning' },
        { term: 'scope', definition: 'The boundaries of your test - who, what, when, and where' },
        { term: 'baseline data', definition: 'Data collected before your test to compare against your results' }
      ],
      analogies: [
        'Planning a PDSA is like creating a recipe - you need to know your ingredients, steps, and expected outcome.',
        'A prediction is like a hypothesis in science - it gives you something specific to test against.'
      ],
      examples: [
        'A team predicted that implementing barcode scanning would reduce medication errors by 50%. They tested this on one unit and found a 60% reduction.',
        'A clinic predicted that extending hours would reduce wait times. Testing showed the opposite - extended hours actually increased wait times due to scheduling complexity.'
      ],
      patientCounselingPoints: [
        'Good planning starts with a clear aim statement that specifies what you want to accomplish.',
        'Making predictions before testing helps you learn whether your theory was correct.',
        'Start with small tests - you can always scale up later if the change works.',
        'Plan what data you need before you start so you can properly analyze results.'
      ]
    },
    3: {
      level: 3,
      summary: 'The Do and Study phases involve faithful execution of the plan while capturing observations, and analyzing results by comparing to predictions. The Study phase looks for both expected and unexpected findings.',
      explanation: `The Do and Study phases are where you execute and learn from your test.

**The Do Phase**

Guidelines:
- Follow your plan - Make changes as planned
- Document problems - Note anything that doesn't go as expected
- Collect data - Gather the information you planned to collect
- Observe carefully - Watch for unintended consequences

**The Study Phase**

The Study phase is where you make sense of what happened during the Do phase.

Steps:
1. Compare results to predictions - Did the data match what you expected?
2. Analyze the data - Look for patterns and trends
3. Reflect on the process - What went well? What was challenging?
4. Summarize findings - What did you learn? What remains uncertain?

**Interpreting Your Results**

Scenario 1: Results matched predictions
- Your theory was correct
- Consider scaling up the test

Scenario 2: Results exceeded predictions
- What caused the better-than-expected outcome?
- Can it be replicated?

Scenario 3: Results didn't match predictions
- Why was your prediction wrong?
- What did you learn about the system?
- This is still valuable learning!

Scenario 4: No clear result
- Was the test too small?
- Was there too much variation?

**Data Display for Study Phase**

Run Charts:
- Plot data over time
- Show trends and patterns
- Compare before and after your test

Bar Charts:
- Compare categories or groups
- Show differences clearly

Tables:
- Organize detailed data
- Allow for precise comparisons`,
      keyTerms: [
        { term: 'run chart', definition: 'A line graph that displays data over time, useful for identifying trends in PDSA results' },
        { term: 'confirmation bias', definition: 'The tendency to search for or interpret information in a way that confirms one\'s preconceptions' },
        { term: 'unexpected finding', definition: 'An observation that doesn\'t fit your original understanding; often the source of important learning' }
      ],
      analogies: [
        'The Study phase is like reviewing game film - you see what actually happened versus what you thought would happen.',
        'Unexpected findings in PDSA are like bonus scenes in a movie - not what you came for but often the most memorable.'
      ],
      examples: [
        'A team tested a new triage process and predicted shorter wait times. Results showed longer waits due to an unexpected bottleneck in registration.',
        'A medication safety test revealed that the error reduction was larger than predicted, but staff satisfaction decreased due to added documentation.'
      ],
      patientCounselingPoints: [
        'The Study phase is where you learn whether your change had the intended effect.',
        'Comparing your results to your prediction is essential - even unexpected results provide learning.',
        'Look for both intended and unintended consequences of your change.',
        'Use charts and graphs to visualize your data and communicate findings.'
      ]
    },
    4: {
      level: 4,
      summary: 'The Act phase involves deciding whether to adopt, adapt, or abandon changes based on results. Successful changes can be spread using standardization, training, and monitoring. Multiple PDSA cycles are often linked to build on learning.',
      explanation: `The Act phase is where you decide what to do based on what you learned.

**Three Possible Paths After Each PDSA**

Path 1: Adopt and Spread
- When results match or exceed predictions
- Expand the test to more people/locations
- Test over a longer time period
- Test in different contexts

Path 2: Adapt and Modify
- When partial success or challenges emerge
- Modify the change based on learnings
- Test the refined version
- Address identified barriers

Path 3: Abandon
- When the change clearly doesn't work
- Stop testing this approach
- Apply learning to try something different
- Document why it didn't work

**Making the Act Decision**

Decision framework:
- Did we achieve our aim?
- Was the change sustainable?
- Is it ready to spread?
- What resources are needed?
- What are the risks?

**Designing the Next Cycle**

Every PDSA should inform the next one. Effective quality improvement is a series of linked cycles.

Sequence of cycles:
- Cycle 1: Test with 1-2 patients
- Cycle 2: Test with 5-10 patients
- Cycle 3: Test with one full team
- Cycle 4: Test with multiple teams
- Cycle 5: Implement across organization

**Spreading Successful Changes**

Spread planning:
1. Standardize - Create clear documentation of the change
2. Pilot - Test in a new setting before full spread
3. Train - Develop education for new users
4. Support - Provide ongoing assistance
5. Monitor - Track implementation and outcomes

**PDSA Integration with QI Methods**

PDSA cycles work within larger QI frameworks:
- Model for Improvement: What are we trying to accomplish? How will we know a change is an improvement? What changes can we make?
- Lean: PDSA cycles test improvements in work processes
- Six Sigma: PDSA cycles used in the Improve phase`,
      keyTerms: [
        { term: 'spread', definition: 'The process of disseminating a successful change to other units, departments, or organizations' },
        { term: 'sustainability', definition: 'The ability to maintain an improvement over time without ongoing special effort' },
        { term: 'standardization', definition: 'Creating consistent processes and protocols that can be replicated across settings' },
        { term: 'PDSA tracker', definition: 'A tool for documenting a series of PDSA cycles to maintain continuity and show progress' }
      ],
      analogies: [
        'Spreading a successful change is like sharing a recipe that works - you document, teach, and support others in using it.',
        'PDSA cycles are like stepping stones - each one builds on the last to cross the river of improvement.'
      ],
      examples: [
        'A successful handoff protocol was spread from one ICU to the entire hospital using a train-the-trainer model.',
        'A hospital used sequential PDSA cycles over 6 months to reduce central line infections by 70%.'
      ],
      patientCounselingPoints: [
        'After completing a PDSA cycle, you have three choices: adopt the change broadly, adapt it based on learnings, or abandon it.',
        'Successful changes should be spread to other areas that could benefit.',
        'Document your learnings so others can benefit from your experience.',
        'Not every PDSA will result in spread - that\'s expected. The learning still has value.'
      ]
    },
    5: {
      level: 5,
      summary: 'Advanced PDSA applications include multi-site networks, integration with statistical process control for rigorous analysis, and use in complex adaptive systems. PDSA becomes research when seeking generalizable knowledge and requires IRB review.',
      explanation: `Advanced PDSA applications integrate sophisticated methods and systems thinking.

**PDSA at Scale**

Multi-site PDSA strategies:
- Multiple organizations testing the same change
- Shared learning across sites
- Pooled data for faster conclusions
- Parallel PDSA streams for different components

**PDSA and Statistical Process Control**

Integrating SPC with PDSA:
- Establish baseline before testing
- Plot data points in real-time during Do phase
- Use control limits to assess significance in Study phase
- Make decisions based on statistical signals

**PDSA in Complex Adaptive Systems**

Complexity-aware PDSA:
- Multiple simultaneous tests to find what works in different contexts
- Focus on relationships and patterns between system elements
- Embrace unpredictability - surprises drive system understanding
- Rapid iteration to keep up with system changes

**PDSA for Different Types of Changes**

Technical vs. Adaptive changes:
- Technical: Straightforward testing, clear cause-effect
- Adaptive: More iterations, focus on culture and behavior

**PDSA in Learning Health Systems**

PDSA is central to the Learning Health System model:
- Data to Knowledge to Practice to Data (continuous cycle)
- PDSA drives the testing of changes in practice

**When PDSA Becomes Research**

PDSA may qualify as research when:
- Generalizable conclusions are sought
- Systematic data collection exceeds usual QI
- Results will be published
- Funding requires IRB review

Ethics in PDSA:
- Institutional Review Board considerations when needed
- Balancing quality and compliance
- Patient consent in QI contexts

**Advanced Measurement**

Beyond basic measures:
- Balanced measures: outcomes, processes, balancing measures
- Real-time data: EHR-integrated collection, automated dashboards
- Patient-reported measures: PREMs and PROMs
- Cost measures: Resource use, return on investment`,
      keyTerms: [
        { term: 'special cause variation', definition: 'Variation in a process that is not due to random chance and indicates an identifiable cause' },
        { term: 'double-loop learning', definition: 'Learning that challenges and changes underlying assumptions and mental models, not just actions' },
        { term: 'learning health system', definition: 'A system that continuously generates and applies knowledge to improve care' },
        { term: 'balanced measures', definition: 'A set of measures including outcomes, processes, and balancing measures to assess improvement comprehensively' }
      ],
      analogies: [
        'SPC control limits are like guardrails - they show you when your process is operating within expected bounds.',
        'Double-loop learning is like not just fixing the problem but questioning why you\'re solving it in the first place.',
        'Learning health systems are like living organisms that continuously evolve based on new information.'
      ],
      examples: [
        'The Keystone ICU project used SPC charts to detect when catheter-associated infection rates exceeded expected variation, triggering rapid PDSA cycles.',
        'Multi-site collaboratives like the STOP VAP project used PDSA cycles with shared protocols to dramatically reduce ventilator-associated pneumonia.'
      ],
      patientCounselingPoints: [
        'Advanced measurement tools like statistical process control help distinguish real improvement from random variation.',
        'Quality improvement that seeks to generate new knowledge beyond your institution may require additional review.',
        'Balanced measures consider both benefits and potential unintended consequences of improvement efforts.',
        'Patient-reported outcomes capture the patient perspective on whether care is truly improving.'
      ]
    }
  }
};

export default pdsaContent;
