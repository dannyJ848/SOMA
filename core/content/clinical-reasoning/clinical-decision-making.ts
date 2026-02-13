/**
 * Clinical Decision Making Educational Content
 *
 * How doctors make treatment decisions - balancing benefits and risks,
 * incorporating patient preferences, and navigating uncertainty in
 * choosing the best course of action.
 */

import { EducationalContent } from '../types';

export const clinicalDecisionMakingContent: EducationalContent = {
  id: 'clinical-reasoning-clinical-decision-making',
  type: 'concept',
  name: 'Clinical Decision Making',
  alternateNames: ['Treatment Decision Making', 'Medical Decision Making', 'Therapeutic Decision Making'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinical decision making is how doctors choose the best treatment for you by weighing the benefits and risks and considering what matters most to you.',
      explanation: "How Doctors Make Treatment Decisions\n" +
      "\n" +
      "Once your doctor figures out what's wrong, they need to decide how to treat it. This is called clinical decision making.\n" +
      "\n" +
      "## The Decision Process\n" +
      "\n" +
      "### Step 1: Understand the Problem\n" +
      "\n" +
      "First, the doctor needs to know:\n" +
      "- What illness or condition you have\n" +
      "- How severe it is\n" +
      "- What might happen without treatment\n" +
      "\n" +
      "### Step 2: Look at the Options\n" +
      "\n" +
      "For most health problems, there are many choices:\n" +
      "\n" +
      "*Example: If you have a headache, options include:*\n" +
      "- Rest and wait for it to go away\n" +
      "- Take pain medicine\n" +
      "- Drink water\n" +
      "- See if there's a cause (like stress)\n" +
      "- Go to the doctor if it's really bad\n" +
      "\n" +
      "### Step 3: Weigh Benefits and Risks\n" +
      "\n" +
      "Every treatment has:\n" +
      "- **Benefits:** How it helps you get better\n" +
      "- **Risks:** Side effects or problems it might cause\n" +
      "- **Costs:** Money, time, inconvenience\n" +
      "\n" +
      "*Example: Antibiotics*\n" +
      "- Benefit: Kills bacteria causing infection\n" +
      "- Risk: Upset stomach, allergic reaction\n" +
      "- Cost: Money for medicine, must take for many days\n" +
      "\n" +
      "### Step 4: Consider What Matters to You\n" +
      "\n" +
      "Good doctors include YOU in the decision:\n" +
      "- What are you most worried about?\n" +
      "- What side effects bother you most?\n" +
      "- What can you afford?\n" +
      "- What fits your life?\n" +
      "\n" +
      "### Step 5: Make the Decision\n" +
      "\n" +
      "The doctor picks the best option based on:\n" +
      "- What science says works best\n" +
      "- Your specific situation\n" +
      "- What you prefer\n" +
      "- Their experience\n" +
      "\n" +
      "## Balancing Benefits and Risks\n" +
      "\n" +
      "### When Benefits Clearly Outweigh Risks\n" +
      "\n" +
      "These are easy decisions:\n" +
      "\n" +
      "*Example: Setting a broken bone*\n" +
      "- Benefit: Your arm heals straight\n" +
      "- Risk: Brief discomfort during procedure\n" +
      "- Decision: Easy - do it!\n" +
      "\n" +
      "### When It's Complicated\n" +
      "\n" +
      "Sometimes it's not obvious:\n" +
      "\n" +
      "*Example: Surgery for back pain*\n" +
      "- Benefit: Might fix the pain permanently\n" +
      "- Risk: Surgery has dangers, recovery takes months\n" +
      "- Decision: Depends on YOUR situation and preferences\n" +
      "\n" +
      "## The Watch and Wait Approach\n" +
      "\n" +
      "Sometimes the best decision is to wait:\n" +
      "\n" +
      "**Why wait?**\n" +
      "- Some problems get better on their own\n" +
      "- Treatment might cause more problems than waiting\n" +
      "- You need time to think\n" +
      "\n" +
      "**Examples:**\n" +
      "- Many childhood illnesses\n" +
      "- Some aches and pains\n" +
      "- Certain tests that can wait\n" +
      "\n" +
      "## Why Different Doctors Might Choose Different Treatments\n" +
      "\n" +
      "It's normal for doctors to disagree! Why?\n" +
      "\n" +
      "1. **Different experience** - One doctor saw something work well before\n" +
      "2. **Different training** - New doctors learn newer treatments\n" +
      "3. **Different patients** - What works for one person might not work for you\n" +
      "4. **New information** - Medicine keeps changing\n" +
      "\n" +
      "## When There's No Perfect Answer\n" +
      "\n" +
      "Sometimes there's no clearly \"best\" choice. Then:\n" +
      "- Your doctor explains the options\n" +
      "- You talk about what matters to you\n" +
      "- You decide together\n" +
      "- You can always change plans if it's not working\n" +
      "\n" +
      "## How You Can Help\n" +
      "\n" +
      "You're part of the decision-making team! To help:\n" +
      "\n" +
      "1. **Ask questions:**\n" +
      "   - \"What are my options?\"\n" +
      "   - \"What happens if I do nothing?\"\n" +
      "   - \"What are the pros and cons of each option?\"\n" +
      "\n" +
      "2. **Share your concerns:**\n" +
      "   - \"I'm worried about side effects\"\n" +
      "   - \"I can't afford expensive medicine\"\n" +
      "   - \"I hate hospitals\"\n" +
      "\n" +
      "3. **Think about what matters:**\n" +
      "   - Is feeling better quickly most important?\n" +
      "   - Or avoiding side effects?\n" +
      "   - Or saving money?\n" +
      "\n" +
      "4. **Be honest:**\n" +
      "   - Tell your doctor if you won't do a treatment\n" +
      "   - Explain what's realistic for your life\n" +
      "   - Ask about simpler options if you need them",
      keyTerms: [
        { term: 'clinical decision making', definition: 'The process of choosing the best treatment based on benefits, risks, and patient preferences' },
        { term: 'benefit', definition: 'How a treatment helps you get better or feel better' },
        { term: 'risk', definition: 'The chance that a treatment could cause harm or side effects' },
        { term: 'side effect', definition: 'An unwanted problem caused by a treatment' },
      ],
      analogies: [
        "Clinical decision making is like choosing what to wear - you think about the weather (your condition), what you'll be doing (your life), and what you're comfortable with (your preferences).",
        "It's like choosing a route when driving - one way might be faster but has traffic (risks), another might be slower but more pleasant (benefits).",
        "Weighing benefits and risks is like using a balance scale - you put the good things on one side and the bad things on the other, then see which side is heavier.",
      ],
      examples: [
        "If you have strep throat, the doctor considers: Antibiotics (quick fix, but side effects possible) vs. wait and see (might get better alone, but could also get worse).",
        "For high blood pressure: Medicine every day (reduces risk of stroke, but costs money and you might forget) vs. exercise and diet change (free, healthy, but harder to do).",
        "A kid with ear pain: Watch and wait for 2 days (might get better alone, avoids antibiotics) OR antibiotics right away (faster relief, but side effects).",
      ],
      patientCounselingPoints: [
        "Always ask \"What are my options?\" when your doctor recommends a treatment.",
        "If you don't understand why a treatment is recommended, ask \"What happens if I don't do this?\"",
        "Tell your doctor about your concerns - side effects, costs, or things that are hard for you to do.",
        "It's okay to ask for time to think about a decision, unless it's an emergency.",
        "You can always ask to talk about the decision again if you're unsure.",
      ],
    },
    2: {
      level: 2,
      summary: 'Clinical decision making is a systematic process of choosing medical interventions by evaluating benefits and risks, incorporating scientific evidence, and integrating patient values and preferences.',
      explanation: "Understanding Clinical Decision Making\n" +
      "\n" +
      "Clinical decision making is the process doctors use to choose the best course of action for a patient's care. It combines medical knowledge, scientific evidence, and patient preferences.\n" +
      "\n" +
      "## The Decision-Making Framework\n" +
      "\n" +
      "### Step 1: Define the Clinical Question\n" +
      "\n" +
      "- What is the primary problem?\n" +
      "- What needs to be decided?\n" +
      "- What are the possible outcomes?\n" +
      "\n" +
      "### Step 2: Gather Information\n" +
      "\n" +
      "**Evidence:**\n" +
      "- What does research say works?\n" +
      "- How strong is the evidence?\n" +
      "- Are there guidelines to follow?\n" +
      "\n" +
      "**Patient-specific factors:**\n" +
      "- Age and overall health\n" +
      "- Other medical conditions\n" +
      "- Medications already taking\n" +
      "- Allergies and sensitivities\n" +
      "\n" +
      "### Step 3: Generate Options\n" +
      "\n" +
      "For most decisions, there are multiple options:\n" +
      "\n" +
      "| Option Type | Example |\n" +
      "|-------------|---------|\n" +
      "| Do nothing (watchful waiting) | Monitor mild symptoms |\n" +
      "| Lifestyle change | Diet, exercise, stress reduction |\n" +
      "| Medication | Pills, injections, creams |\n" +
      "| Procedure | Surgery, diagnostic test |\n" +
      "| Combination | Multiple approaches together |\n" +
      "\n" +
      "### Step 4: Assess Benefits vs. Risks\n" +
      "\n" +
      "**Benefits to consider:**\n" +
      "- Cure the condition\n" +
      "- Relieve symptoms\n" +
      "- Prevent complications\n" +
      "- Extend life\n" +
      "- Improve quality of life\n" +
      "\n" +
      "**Risks to consider:**\n" +
      "- Side effects\n" +
      "- Allergic reactions\n" +
      "- Drug interactions\n" +
      "- Procedure complications\n" +
      "- Cost and burden\n" +
      "\n" +
      "### Step 5: Incorporate Patient Preferences\n" +
      "\n" +
      "Good decisions include what matters to YOU:\n" +
      "- Your values and beliefs\n" +
      "- Your tolerance for risk\n" +
      "- Your lifestyle and circumstances\n" +
      "- Your financial situation\n" +
      "- Your personal goals\n" +
      "\n" +
      "### Step 6: Make and Implement the Decision\n" +
      "\n" +
      "- Choose the best option\n" +
      "- Plan how to implement it\n" +
      "- Arrange follow-up to see if it's working\n" +
      "\n" +
      "## Shared Decision Making\n" +
      "\n" +
      "The best clinical decisions are made TOGETHER:\n" +
      "\n" +
      "**Your role:**\n" +
      "- Ask questions\n" +
      "- Express your concerns\n" +
      "- Share your values\n" +
      "- Participate in the choice\n" +
      "\n" +
      "**Doctor's role:**\n" +
      "- Explain options clearly\n" +
      "- Provide expert guidance\n" +
      "- Share their experience\n" +
      "- Support your decision\n" +
      "\n" +
      "## Types of Decisions\n" +
      "\n" +
      "### Decisions Where Evidence is Clear\n" +
      "\n" +
      "These are straightforward:\n" +
      "\n" +
      "*Examples:*\n" +
      "- Type 1 diabetes: Insulin is necessary\n" +
      "- Bacterial pneumonia: Antibiotics save lives\n" +
      "- Heart attack: Emergency treatment is urgent\n" +
      "\n" +
      "### Decisions Where Options Are Similar\n" +
      "\n" +
      "When multiple options work equally well, preferences matter:\n" +
      "\n" +
      "*Examples:*\n" +
      "- High blood pressure: Many medicines work; choose based on side effects and cost\n" +
      "- Depression: Several therapy types; choose what you prefer\n" +
      "- Kidney stones: Surgery vs. medication passage\n" +
      "\n" +
      "### Decisions With Trade-offs\n" +
      "\n" +
      "When benefits and risks must be balanced:\n" +
      "\n" +
      "*Examples:*\n" +
      "- Surgery for back pain: Might help, but risky and recovery is long\n" +
      "- Chemotherapy: Can cure cancer, but causes severe side effects\n" +
      "- Strong pain medicines: Relieve pain, but risk addiction\n" +
      "\n" +
      "## The Treatment Threshold\n" +
      "\n" +
      "**When to treat:**\n" +
      "- Benefits clearly outweigh risks\n" +
      "- Treatment prevents serious problems\n" +
      "- Patient wants treatment\n" +
      "\n" +
      "**When NOT to treat:**\n" +
      "- Risks outweigh benefits\n" +
      "- Condition is harmless and will go away\n" +
      "- Treatment is unlikely to help\n" +
      "\n" +
      "**When to consider watching and waiting:**\n" +
      "- Condition might improve on its own\n" +
      "- Treatment side effects are concerning\n" +
      "- Diagnosis is uncertain\n" +
      "- Patient prefers to wait\n" +
      "\n" +
      "## Common Pitfalls in Decision Making\n" +
      "\n" +
      "| Pitfall | Description | Example |\n" +
      "|---------|-------------|---------|\n" +
      "| Overtreatment | Treating things that don't need treatment | Antibiotics for viral infections |\n" +
      "| Undertreatment | Not treating serious conditions | Ignoring high blood pressure |\n" +
      "| Paternalism | Doctor decides without your input | Prescribing without discussing options |\n" +
      "| Ignoring preferences | Not asking what you want | Assuming everyone wants aggressive treatment |\n" +
      "| Following guidelines blindly | Applying rules without thinking | Treating by protocol instead of the person |\n" +
      "\n" +
      "## Questions to Ask Your Doctor\n" +
      "\n" +
      "**About the problem:**\n" +
      "- \"What exactly is wrong?\"\n" +
      "- \"What will happen if I don't treat this?\"\n" +
      "- \"Is this serious?\"\n" +
      "\n" +
      "**About options:**\n" +
      "- \"What are all my choices?\"\n" +
      "- \"What do most people choose?\"\n" +
      "- \"What would you choose if you were me?\"\n" +
      "\n" +
      "**About the recommended treatment:**\n" +
      "- \"How will this help?\"\n" +
      "- \"What are the possible side effects?\"\n" +
      "- \"How will I know if it's working?\"\n" +
      "\n" +
      "**About your preferences:**\n" +
      "- \"What if I don't want this treatment?\"\n" +
      "- \"Is there a simpler option?\"\n" +
      "- \"What matters most in this decision?\"",
      keyTerms: [
        { term: 'clinical decision making', definition: 'The systematic process of choosing medical interventions based on evidence, risks, benefits, and patient values' },
        { term: 'shared decision making', definition: 'A collaborative process where doctor and patient make health decisions together' },
        { term: 'benefit-risk ratio', definition: 'Comparison of the likelihood of benefit versus the likelihood of harm from a treatment' },
        { term: 'watchful waiting', definition: 'Waiting to see if a condition improves or resolves before starting treatment' },
        { term: 'paternalism', definition: 'When a doctor makes decisions for the patient without considering their preferences' },
        { term: 'overtreatment', definition: 'Providing medical care that is unlikely to help and may cause harm' },
      ],
      analogies: [
        "Clinical decision making is like investing - you balance potential gains against possible losses, and your personal tolerance for risk matters.",
        "Shared decision making is like planning a trip with a travel agent - they know the options, but you choose the destination based on what you enjoy.",
      ],
      examples: [
        "For an ear infection in a child: Options include immediate antibiotics (faster relief, but side effects) vs. watchful waiting for 48 hours (avoids antibiotics in 80% of cases, but may prolong pain).",
        "For early-stage prostate cancer: Options include surgery (removes cancer, but risk of incontinence and impotence), radiation (similar cure, different side effects), or active surveillance (avoid treatment, but cancer may grow).",
        "For high cholesterol: Statins (reduce heart attack risk by 25%, but muscle aches and cost) vs. diet and exercise (no side effects, but requires effort and may not be enough).",
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical decision making integrates evidence-based medicine, probabilistic reasoning, patient values, and clinical judgment to optimize healthcare outcomes while respecting individual preferences.',
      explanation: "Clinical Decision Making\n" +
      "\n" +
      "Clinical decision making is the complex cognitive process by which clinicians and patients collaboratively choose diagnostic and therapeutic strategies. It requires integrating multiple sources of information while managing uncertainty.\n" +
      "\n" +
      "## The Decision-Making Process\n" +
      "\n" +
      "### Framework for Clinical Decisions\n" +
      "\n" +
      "**Step 1: Define the clinical question**\n" +
      "- Clarify the problem\n" +
      "- Specify the decision to be made\n" +
      "- Identify what matters most to the patient\n" +
      "\n" +
      "**Step 2: Search for and appraise evidence**\n" +
      "- Find relevant research\n" +
      "- Assess quality of evidence\n" +
      "- Determine applicability to this patient\n" +
      "\n" +
      "**Step 3: Assess patient values and preferences**\n" +
      "- Explore patient's understanding\n" +
      "- Identify what outcomes matter\n" +
      "- Discuss tolerance for risk\n" +
      "\n" +
      "**Step 4: Present options and probabilities**\n" +
      "- Explain alternatives\n" +
      "- Quantify benefits and risks\n" +
      "- Use clear communication strategies\n" +
      "\n" +
      "**Step 5: Deliberate and decide**\n" +
      "- Allow time for reflection\n" +
      "- Involve family if desired\n" +
      "- Document the decision\n" +
      "\n" +
      "**Step 6: Implement and evaluate**\n" +
      "- Initiate treatment plan\n" +
      "- Arrange follow-up\n" +
      "- Assess outcomes\n" +
      "\n" +
      "## Evidence-Based Decision Making\n" +
      "\n" +
      "### Hierarchy of Evidence\n" +
      "\n" +
      "| Level | Evidence Type | Reliability |\n" +
      "|-------|---------------|-------------|\n" +
      "| 1 | Systematic reviews/meta-analyses | Highest |\n" +
      "| 2 | Randomized controlled trials | High |\n" +
      "| 3 | Cohort studies | Moderate |\n" +
      "| 4 | Case-control studies | Moderate |\n" +
      "| 5 | Case series/reports | Low |\n" +
      "| 6 | Expert opinion | Lowest |\n" +
      "\n" +
      "### Interpreting Research Evidence\n" +
      "\n" +
      "**Absolute vs. Relative Risk:**\n" +
      "\n" +
      "*Example: A drug reduces heart attacks from 4% to 2% over 5 years*\n" +
      "- **Relative risk reduction:** 50% (4% to 2% = 50% decrease)\n" +
      "- **Absolute risk reduction:** 2% (4% - 2% = 2% decrease)\n" +
      "- **Number needed to treat (NNT):** 50 (1/0.02 = 50)\n" +
      "\n" +
      "**Why this matters:**\n" +
      "- Relative risk can sound impressive but be misleading\n" +
      "- Absolute risk shows the actual benefit\n" +
      "- NNT helps communicate realistic benefits\n" +
      "\n" +
      "## Probabilistic Reasoning\n" +
      "\n" +
      "### Understanding Probabilities\n" +
      "\n" +
      "**Pre-test probability:** Likelihood of condition before testing\n" +
      "**Post-test probability:** Likelihood after new information\n" +
      "**Predictive values:** Probability that a test result is correct\n" +
      "\n" +
      "### Treatment Thresholds\n" +
      "\n" +
      "**Testing threshold:**\n" +
      "- Probability below which no testing indicated\n" +
      "- Disease too unlikely to justify testing\n" +
      "\n" +
      "**Treatment threshold:**\n" +
      "- Probability above which treatment indicated\n" +
      "- Disease likely enough to treat without confirmation\n" +
      "\n" +
      "**Between thresholds:**\n" +
      "- Testing will meaningfully change management\n" +
      "- Decision depends on test results\n" +
      "\n" +
      "## Shared Decision Making\n" +
      "\n" +
      "### The Three-Talk Model\n" +
      "\n" +
      "**Team Talk:**\n" +
      "- Build partnership\n" +
      "- Acknowledge decision\n" +
      "- Explain that choice exists\n" +
      "\n" +
      "**Option Talk:**\n" +
      "- Present options\n" +
      "- Provide information\n" +
      "- Discuss pros and cons\n" +
      "\n" +
      "**Decision Talk:**\n" +
      "- Explore preferences\n" +
      "- Move toward decision\n" +
      "- Arrange follow-up\n" +
      "\n" +
      "### Risk Communication\n" +
      "\n" +
      "**Formats:**\n" +
      "- Natural frequencies: \"10 out of 100 people\"\n" +
      "- Percentages: \"10% chance\"\n" +
      "- Visual aids: Pictographs, icon arrays\n" +
      "- Verbal descriptors: \"rare,\" \"common\"\n" +
      "\n" +
      "**Best practices:**\n" +
      "- Use consistent denominators\n" +
      "- Present both positive and negative frames\n" +
      "- Use visual aids when possible\n" +
      "- Check understanding\n" +
      "\n" +
      "## Clinical Prediction Rules\n" +
      "\n" +
      "Validated tools to estimate probability and guide decisions:\n" +
      "\n" +
      "**Examples:**\n" +
      "- Wells score for pulmonary embolism\n" +
      "- CHA2DS2-VASc for stroke risk in atrial fibrillation\n" +
      "- CURB-65 for pneumonia severity\n" +
      "- FRAX for fracture risk\n" +
      "\n" +
      "**Using prediction rules:**\n" +
      "- Calculate score from clinical features\n" +
      "- Estimate probability of outcome\n" +
      "- Guide testing/treatment decisions\n" +
      "- Always apply clinical judgment\n" +
      "\n" +
      "## Preventing Decision Errors\n" +
      "\n" +
      "### Common Cognitive Biases\n" +
      "\n" +
      "| Bias | Effect | Mitigation |\n" +
      "|------|--------|------------|\n" +
      "| Availability | Recent cases influence decisions | Use systematic approaches |\n" +
      "| Anchoring | Stuck on initial impression | Reconsider with new data |\n" +
      "| Commission bias | Favor action over inaction | Consider watchful waiting |\n" +
      "| Regret aversion | Avoid decisions that might lead to regret | Accept uncertainty |\n" +
      "| Status quo bias | Stick with current plan | Periodically reassess |",
      keyTerms: [
        { term: 'shared decision making', definition: 'Collaborative process where clinician and patient make healthcare decisions together, incorporating best available evidence and patient values' },
        { term: 'absolute risk reduction', definition: 'The actual difference in event rates between treatment and control groups; more meaningful than relative risk for clinical decisions' },
        { term: 'number needed to treat (NNT)', definition: 'Number of patients who need to be treated for one to benefit; calculated as 1/absolute risk reduction' },
        { term: 'treatment threshold', definition: 'Probability of disease above which treatment is indicated without further testing' },
        { term: 'expected value', definition: 'Sum of each possible outcome multiplied by its probability; used to compare decision options' },
      ],
      clinicalNotes: "Good clinical decision making requires integrating three components: (1) Best available evidence, (2) Clinical expertise and judgment, and (3) Patient values and preferences. When any component is missing, decisions may be suboptimal.",
    },
    4: {
      level: 4,
      summary: 'Advanced clinical decision making employs formal decision analysis, utility theory, risk communication science, and preference assessment to optimize complex medical choices under uncertainty.',
      explanation: "Advanced Clinical Decision Making\n" +
      "\n" +
      "## Decision Analysis Theory\n" +
      "\n" +
      "### Expected Utility Theory\n" +
      "\n" +
      "**Principle:** Rational decisions maximize expected utility\n" +
      "\n" +
      "**Components:**\n" +
      "1. **Probabilities:** Likelihood of each outcome\n" +
      "2. **Utilities:** Value assigned to each outcome (typically 0-1 scale)\n" +
      "3. **Expected utility:** Sum of (probability * utility) for all outcomes\n" +
      "\n" +
      "**Calculation:**\n" +
      "EU = Sum of [P(outcome) * U(outcome)]\n" +
      "\n" +
      "Where:\n" +
      "- EU = Expected utility\n" +
      "- P = Probability of outcome\n" +
      "- U = Utility of outcome\n" +
      "\n" +
      "### Sensitivity Analysis\n" +
      "\n" +
      "Testing how robust the decision is to changes in assumptions:\n" +
      "\n" +
      "**One-way sensitivity analysis:**\n" +
      "- Vary one parameter at a time\n" +
      "- Identify threshold values\n" +
      "- Find where decision changes\n" +
      "\n" +
      "**Probabilistic sensitivity analysis:**\n" +
      "- Assign distributions to parameters\n" +
      "- Monte Carlo simulation\n" +
      "- Probability of each decision being optimal\n" +
      "\n" +
      "## Utility Assessment\n" +
      "\n" +
      "### Methods for Measuring Preferences\n" +
      "\n" +
      "**1. Standard Gamble**\n" +
      "\n" +
      "Question: \"Would you prefer:\n" +
      "A) Your current health state for certain\n" +
      "B) A treatment with probability P of perfect health and (1-P) of immediate death\"\n" +
      "\n" +
      "Find probability P where you're indifferent - that's your utility.\n" +
      "\n" +
      "**2. Time Trade-off**\n" +
      "\n" +
      "Question: \"How many years of perfect health would you trade for 10 years in your current health state?\"\n" +
      "\n" +
      "Utility = Years preferred / Years offered\n" +
      "\n" +
      "### Utilities for Common Health States\n" +
      "\n" +
      "| Health State | Utility Range | Notes |\n" +
      "|--------------|---------------|-------|\n" +
      "| Perfect health | 1.0 | Reference point |\n" +
      "| Mild angina | 0.8-0.9 | Minimal limitation |\n" +
      "| Moderate COPD | 0.6-0.7 | Noticeable limitation |\n" +
      "| Dialysis | 0.5-0.6 | Significant burden |\n" +
      "| Major stroke | 0.3-0.4 | Severe disability |\n" +
      "| Death | 0.0 | Anchor point |\n" +
      "\n" +
      "### Quality-Adjusted Life Years (QALYs)\n" +
      "\n" +
      "**Calculation:**\n" +
      "QALY = Life years * Utility\n" +
      "\n" +
      "**Example:**\n" +
      "- Treatment A: 5 years at utility 0.8 = 4.0 QALYs\n" +
      "- Treatment B: 4 years at utility 1.0 = 4.0 QALYs\n" +
      "\n" +
      "Both treatments provide equal QALYs - decision depends on patient preference for length vs. quality.\n" +
      "\n" +
      "## Risk Communication\n" +
      "\n" +
      "### Effective Communication Strategies\n" +
      "\n" +
      "**1. Use natural frequencies**\n" +
      "- Better than percentages\n" +
      "- More intuitive\n" +
      "- Less confusion\n" +
      "\n" +
      "*Example:*\n" +
      "- \"10% risk\" becomes \"10 out of 100 people\"\n" +
      "- \"0.1% risk\" becomes \"1 out of 1,000 people\"\n" +
      "\n" +
      "**2. Provide context**\n" +
      "- Compare to familiar risks\n" +
      "- Use analogies carefully\n" +
      "- Show both sides\n" +
      "\n" +
      "**3. Test understanding**\n" +
      "- Teach-back method\n" +
      "- Ask patient to explain in own words\n" +
      "- Clarify misconceptions\n" +
      "\n" +
      "## Decision Support Tools\n" +
      "\n" +
      "### Patient Decision Aids\n" +
      "\n" +
      "**Effective components:**\n" +
      "1. Information about options\n" +
      "2. Outcomes probabilities\n" +
      "3. Values clarification exercises\n" +
      "4. Guidance in deliberation\n" +
      "5. Communication preparation\n" +
      "\n" +
      "**Evidence:**\n" +
      "- Improve knowledge\n" +
      "- Create realistic expectations\n" +
      "- Reduce decisional conflict\n" +
      "- Increase participation\n" +
      "- May reduce surgery rates for preference-sensitive conditions\n" +
      "\n" +
      "## Special Decision Contexts\n" +
      "\n" +
      "### Preventive Care Decisions\n" +
      "\n" +
      "**Challenges:**\n" +
      "- Treating asymptomatic people\n" +
      "- Benefits are probabilistic\n" +
      "- Harms are certain (cost, inconvenience, side effects)\n" +
      "- Number needed to treat often high\n" +
      "\n" +
      "**Framework:**\n" +
      "1. Estimate individual risk\n" +
      "2. Calculate absolute benefit\n" +
      "3. Discuss burden\n" +
      "4. Incorporate values\n" +
      "5. Make shared decision",
      keyTerms: [
        { term: 'expected utility', definition: 'Sum of the probability of each outcome multiplied by its utility value; the option with highest expected utility is theoretically optimal' },
        { term: 'utility', definition: 'Measure of preference for a health state, typically on a scale from 0 (death) to 1 (perfect health)' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year; measure of health outcome combining length and quality of life' },
        { term: 'standard gamble', definition: 'Method for measuring utilities by finding the probability of perfect health that makes a person indifferent between certain current health and a gamble' },
        { term: 'time trade-off', definition: 'Method for measuring utilities by asking how much life expectancy in perfect health equals a given period in current health state' },
        { term: 'decisional conflict', definition: 'State of uncertainty about which course of action to take, often related to feeling uninformed, unclear about values, or unsupported in decision making' },
      ],
      clinicalNotes: "Decision analysis provides a framework for thinking about complex medical decisions, but it should guide rather than replace clinical judgment and patient communication. The process of discussing values and preferences is often as important as the quantitative analysis.",
    },
    5: {
      level: 5,
      summary: 'Expert clinical decision making integrates formal decision science, behavioral economics, advanced communication techniques, and systems-level optimization to navigate complex medical choices under uncertainty.',
      explanation: "Expert Clinical Decision Making\n" +
      "\n" +
      "## Advanced Decision Theory\n" +
      "\n" +
      "### Limits of Expected Utility Theory\n" +
      "\n" +
      "**Violations of rationality assumptions:**\n" +
      "\n" +
      "1. **Prospect Theory (Kahneman & Tversky)**\n" +
      "- People value losses more than equivalent gains\n" +
      "- Reference points matter\n" +
      "- Probability weighting: overestimate small probabilities, underestimate large ones\n" +
      "\n" +
      "2. **Ambiguity Aversion**\n" +
      "- Prefer known risks to unknown risks\n" +
      "- Ellsberg paradox demonstrates this\n" +
      "\n" +
      "3. **Regret Theory**\n" +
      "- Anticipated regret influences choices\n" +
      "- May lead to defensive medicine\n" +
      "\n" +
      "### Adaptive Decision Making\n" +
      "\n" +
      "**Recognition-primed decision making:**\n" +
      "- Experts recognize patterns and match to prototypes\n" +
      "- Mental simulation of how options will play out\n" +
      "- Rapid evaluation without explicit comparison\n" +
      "- Explains expertise better than utility maximization\n" +
      "\n" +
      "**Implications:**\n" +
      "- Teaching pattern recognition is valuable\n" +
      "- Mental simulation skill can be developed\n" +
      "- Different problems require different approaches\n" +
      "\n" +
      "## Behavioral Economics in Medicine\n" +
      "\n" +
      "### Cognitive Biases in Decision Making\n" +
      "\n" +
      "**System 1 biases (fast thinking):**\n" +
      "- Availability: Recent cases influence probability estimates\n" +
      "- Representativeness: Overweight similarity to prototype\n" +
      "- Anchoring: Initial information disproportionately influences final judgment\n" +
      "- Affect heuristic: Emotional responses drive decisions\n" +
      "\n" +
      "**System 2 biases (slow thinking):**\n" +
      "- Framing effects: How information is presented changes decisions\n" +
      "- Loss aversion: Losses loom larger than gains\n" +
      "- Sunk cost fallacy: Past investment influences current decisions\n" +
      "- Status quo bias: Prefer current state over alternatives\n" +
      "\n" +
      "### Nudge Theory\n" +
      "\n" +
      "**Definition:** Altering choice architecture to influence decisions without restricting options\n" +
      "\n" +
      "**Applications in healthcare:**\n" +
      "- Default options (opt-out vs. opt-in)\n" +
      "- Order of options presentation\n" +
      "- Setting defaults based on evidence\n" +
      "- Reducing friction for desirable choices\n" +
      "\n" +
      "**Ethical considerations:**\n" +
      "- Transparency essential\n" +
      "- Must preserve autonomy\n" +
      "- Should align with patient welfare\n" +
      "- Avoid manipulation\n" +
      "\n" +
      "## Advanced Risk Communication\n" +
      "\n" +
      "### Numeracy and Health Literacy\n" +
      "\n" +
      "**Universal precautions approach:**\n" +
      "- Assume limited numeracy in all patients\n" +
      "- Use multiple communication formats\n" +
      "- Always verify understanding\n" +
      "- Provide written summaries\n" +
      "\n" +
      "**Strategies for low numeracy:**\n" +
      "- Always use natural frequencies\n" +
      "- Use visual aids\n" +
      "- Keep denominators consistent (per 100, per 1000)\n" +
      "- Avoid relative risks without absolute context\n" +
      "- Check for \"numeracy drift\" during conversation\n" +
      "\n" +
      "### Discussing Uncertainty\n" +
      "\n" +
      "**Types of uncertainty:**\n" +
      "- Aleatory: Inherent randomness in outcomes\n" +
      "- Epistemic: Limits in current knowledge\n" +
      "- Ambiguity: Multiple valid interpretations\n" +
      "- Complexity: Too many variables to analyze\n" +
      "\n" +
      "**Communication principles:**\n" +
      "- Acknowledge uncertainty explicitly\n" +
      "- Quantify when possible\n" +
      "- Qualitative descriptions when quantification impossible\n" +
      "- Avoid false precision\n" +
      "- Distinguish between individual and population risk\n" +
      "\n" +
      "### Cultural Considerations\n" +
      "\n" +
      "**Cultural competence:**\n" +
      "- Assess patient's preference for involvement\n" +
      "- Adapt communication style\n" +
      "- Include family if culturally appropriate\n" +
      "- Be aware of your own biases\n" +
      "- Use interpreters appropriately\n" +
      "\n" +
      "## Preference Assessment\n" +
      "\n" +
      "### Advanced Utility Measurement\n" +
      "\n" +
      "**Standard gamble challenges:**\n" +
      "- Many people don't understand probability\n" +
      "- Emotional response to \"death\" component\n" +
      "- Violations of expected utility theory common\n" +
      "\n" +
      "**Time trade-off challenges:**\n" +
      "- Time perspective varies widely\n" +
      "- Present bias devalues future\n" +
      "- Difficulty imagining health states\n" +
      "\n" +
      "**Alternatives:**\n" +
      "- Health Utilities Index (HUI)\n" +
      "- EQ-5D\n" +
      "- SF-6D\n" +
      "- Willingness-to-pay (controversial)\n" +
      "\n" +
      "### Values Clarification\n" +
      "\n" +
      "**Structured exercises:**\n" +
      "- Decision cards: Rank importance of attributes\n" +
      "- Balance scales: Trade-off assessment\n" +
      "- Choice conjoint analysis: Discrete choices between options\n" +
      "- Personal narratives: Elicit values through stories\n" +
      "\n" +
      "**Goals of care conversations:**\n" +
      "- \"What are your goals if your health gets worse?\"\n" +
      "- \"What makes life worth living for you?\"\n" +
      "- \"What are your biggest fears?\"\n" +
      "- \"What would you want to avoid at all costs?\"\n" +
      "\n" +
      "## Decision Support at Scale\n" +
      "\n" +
      "### Clinical Decision Support Systems (CDSS)\n" +
      "\n" +
      "**Effective design principles:**\n" +
      "- Provide actionable recommendations\n" +
      "- Integrate into workflow\n" +
      "- Reduce cognitive load, not add to it\n" +
      "- Learn from user behavior\n" +
      "- Allow easy override with reason capture\n" +
      "\n" +
      "**Evidence of effectiveness:**\n" +
      "- Improves adherence to guidelines\n" +
      "- Reduces diagnostic errors\n" +
      "- Can reduce unnecessary testing\n" +
      "- May improve outcomes\n" +
      "- Alert fatigue remains challenge\n" +
      "\n" +
      "### Artificial Intelligence in Decision Support\n" +
      "\n" +
      "**Current applications:**\n" +
      "- Diagnostic pattern recognition (imaging, ECG)\n" +
      "- Risk prediction models\n" +
      "- Treatment response prediction\n" +
      "- Natural language processing of documentation\n" +
      "\n" +
      "**Limitations:**\n" +
      "- Training data bias\n" +
      "- \"Black box\" explanations\n" +
      "- Context blindness\n" +
      "- Over-reliance risk\n" +
      "- Liability questions unclear\n" +
      "\n" +
      "**Human-AI collaboration:**\n" +
      "- AI as advisor, not decision-maker\n" +
      "- Clinician must understand limitations\n" +
      "- Maintain accountability\n" +
      "- Preserve human judgment\n" +
      "\n" +
      "## Preventing and Learning from Errors\n" +
      "\n" +
      "### Decision Autopsy\n" +
      "\n" +
      "**Structured approach to analyzing bad outcomes:**\n" +
      "\n" +
      "1. **What was the decision?**\n" +
      "2. **What information was available?**\n" +
      "3. **What was the reasoning process?**\n" +
      "4. **What biases may have operated?**\n" +
      "5. **What system factors contributed?**\n" +
      "6. **What can be learned?**\n" +
      "\n" +
      "### Morbidity and Mortality (M&M) Conferences\n" +
      "\n" +
      "**Goals:**\n" +
      "- Identify system errors\n" +
      "- Discuss cognitive biases\n" +
      "- Share learning\n" +
      "- Improve future care\n" +
      "\n" +
      "**Effective structure:**\n" +
      "- Blame-free environment\n" +
      "- Focus on systems, not individuals\n" +
      "- Root cause analysis\n" +
      "- Actionable improvement plans\n" +
      "\n" +
      "### Diagnostic Time-Outs\n" +
      "\n" +
      "**Implementation:**\n" +
      "- Before finalizing diagnosis\n" +
      "- Before discharge\n" +
      "- Before major treatment\n" +
      "- At handoffs\n" +
      "\n" +
      "**Content:**\n" +
      "- What else could this be?\n" +
      "- What diagnoses can't be missed?\n" +
      "- Does this diagnosis explain everything?\n" +
      "- What if we're wrong?\n" +
      "\n" +
      "## Ethics of Decision Making\n" +
      "\n" +
      "### Informed Consent\n" +
      "\n" +
      "**Elements:**\n" +
      "- Diagnosis (when known)\n" +
      "- Proposed treatment\n" +
      "- Risks and benefits\n" +
      "- Alternatives (including no treatment)\n" +
      "- Consequences of refusing\n" +
      "\n" +
      "**Challenges:**\n" +
      "- How much information is enough?\n" +
      "- Ensuring understanding, not just disclosure\n" +
      "- Varying patient preferences for information\n" +
      "- Time constraints\n" +
      "- Health literacy limitations\n" +
      "\n" +
      "### Shared Decision Making Ethics\n" +
      "\n" +
      "**Respecting autonomy:**\n" +
      "- Patient has right to make decisions\n" +
      "- Includes right to make \"bad\" decisions\n" +
      "- Capacity determination sometimes needed\n" +
      "- Cultural variations in autonomy expression\n" +
      "\n" +
      "**Beneficence/non-maleficence:**\n" +
      "- Recommend what we believe is best\n" +
      "- But must respect patient values\n" +
      "- Avoid coercion\n" +
      "- Balance guidance with respect\n" +
      "\n" +
      "## Future Directions\n" +
      "\n" +
      "### Precision Medicine and Personalized Decisions\n" +
      "\n" +
      "**Genomic information:**\n" +
      "- Pharmacogenomics\n" +
      "- Disease risk prediction\n" +
      "- Tailored screening\n" +
      "\n" +
      "**Challenges:**\n" +
      "- Translating probabilities to decisions\n" +
      "- Incidental findings\n" +
      "- Family implications\n" +
      "- Psychological impact\n" +
      "\n" +
      "### Learning Health Systems\n" +
      "\n" +
      "**Continuous learning:**\n" +
      "- Every encounter generates data\n" +
      "- Data inform decisions\n" +
      "- Outcomes tracked\n" +
      "- System improves\n" +
      "\n" +
      "**Requirements:**\n" +
      "- Data infrastructure\n" +
      "- Culture of learning\n" +
      "- Rapid evidence generation\n" +
      "- Implementation science",
      keyTerms: [
        { term: 'prospect theory', definition: 'Behavioral economic theory describing how people make decisions under risk, demonstrating that losses loom larger than gains and that people overweight small probabilities' },
        { term: 'nudge theory', definition: 'Approach to influencing behavior by altering choice architecture without restricting options or significantly changing economic incentives' },
        { term: 'aleatory uncertainty', definition: 'Irreducible uncertainty arising from inherent randomness or variability in outcomes' },
        { term: 'epistemic uncertainty', definition: 'Uncertainty arising from limitations in knowledge or understanding; potentially reducible with more information' },
        { term: 'ambiguity aversion', definition: 'Preference for known risks over unknown risks; people would rather take a known probability than an uncertain one' },
        { term: 'cognitive debiasing', definition: 'Deliberate strategies to counteract cognitive biases in clinical reasoning and decision making' },
        { term: 'M&M conference', definition: 'Morbidity and Mortality conference; structured, confidential review of adverse outcomes with focus on systems improvement and learning' },
        { term: 'recognition-primed decision making', definition: 'Model of expert decision making in which pattern recognition and mental simulation replace explicit comparison of options' },
      ],
      clinicalNotes: "Expert decision making requires more than knowledge of guidelines. It requires: (1) understanding the limitations of decision theory, (2) recognition that rationality is bounded and emotions matter, (3) skillful communication of uncertainty, (4) cultural humility, and (5) systematic reflection on outcomes. The best clinicians are those who continuously refine their decision processes through deliberate practice.",
      patientCounselingPoints: [
        "Ask your doctor to explain your options using \"out of 100\" examples - they're easier to understand than percentages.",
        "It's reasonable to ask \"What would you do if you were me?\" but remember the best answer is often \"It depends on what matters most to you.\"",
        "If you're facing a difficult decision, ask if there's a decision aid - written materials or videos that can help you think through options.",
        "Consider what you're willing to go through for a potential benefit - some treatments have large burdens for small benefits.",
        "It's always okay to ask for time to think about a decision, unless it's an emergency.",
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-elstein-2000',
      type: 'article',
      title: 'Clinical Problem Solving and Decision Making',
      authors: ['Elstein AS', 'Schwarz A'],
      source: 'Annals of Internal Medicine',
      url: 'https://annals.org/aim/fullarticle/714743',
      license: 'Journal Article',
    },
    {
      id: 'cite-stiggelbout-2012',
      type: 'article',
      title: 'Shared Decision Making: Really Putting Patients at the Centre of Healthcare',
      authors: ['Stiggelbout AM', 'Van der Weijden T', 'De Wit MP', 'Frosch D', 'Legare F'],
      source: 'BMJ',
      url: 'https://www.bmj.com/content/344/bmj.e256',
      license: 'Journal Article',
    },
    {
      id: 'cite-kahneman-2011',
      type: 'textbook',
      title: 'Thinking, Fast and Slow',
      authors: ['Kahneman D'],
      source: 'Farrar, Straus and Giroux',
      license: 'Book',
    },
    {
      id: 'cite-thaler-2009',
      type: 'textbook',
      title: 'Nudge: Improving Decisions About Health, Wealth, and Happiness',
      authors: ['Thaler RH', 'Sunstein CR'],
      source: 'Penguin Books',
      license: 'Book',
    },
  ],
  crossReferences: [
    {
      targetId: 'clinical-reasoning-diagnostic-reasoning',
      targetType: 'concept',
      relationship: 'related',
      label: 'Diagnostic Reasoning',
    },
    {
      targetId: 'clinical-reasoning-evidence-based-medicine',
      targetType: 'concept',
      relationship: 'related',
      label: 'Evidence-Based Medicine',
    },
  ],
  tags: {
    systems: [],
    topics: ['clinical-reasoning', 'decision-making', 'medical-ethics', 'risk-communication'],
    keywords: ['shared decision making', 'risk communication', 'decision analysis', 'patient preferences', 'benefit-risk assessment'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'psychiatry', 'family-medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
