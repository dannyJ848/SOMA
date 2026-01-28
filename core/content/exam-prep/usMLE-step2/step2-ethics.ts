/**
 * USMLE Step 2 Ethics - Medical Ethics and Professionalism
 *
 * Educational content covering medical ethics for USMLE Step 2 CK.
 */

import { EducationalContent } from '../../types';

export const step2Ethics: EducationalContent = {
  id: 'education-usmle-step2-ethics',
  type: 'concept',
  name: 'USMLE Step 2 Ethics',
  alternateNames: ['Medical Ethics', 'Step 2 Ethics', 'Bioethics', 'Medical Professionalism'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical ethics on USMLE Step 2 covers how doctors make right decisions, treat patients fairly, and maintain professionalism. It includes patient rights and doctor responsibilities.',
      explanation: `## What Is Medical Ethics?

Medical ethics is about making good decisions in healthcare. It helps doctors:
- Treat patients fairly
- Respect patient choices
- Keep patients safe
- Act professionally

## Main Principles

**Autonomy:**
- Patients have the right to make their own decisions
- Doctors must explain things clearly
- Patients can refuse treatment
- Informed consent is required

**Beneficence:**
- Do what is best for the patient
- Help patients get better
- Prevent harm
- Act in the patient\'s interest

**Non-Maleficence:**
- Do not harm patients
- "First, do no harm"
- Consider risks of treatment
- Avoid unnecessary procedures

**Justice:**
- Treat all patients fairly
- Give equal care regardless of background
- Allocate resources fairly
- Respect patient rights

## Common Ethics Topics

**Informed Consent:**
- Explain the procedure
- Tell about risks and benefits
- Discuss alternatives
- Patient must understand and agree

**Patient Confidentiality:**
- Keep patient information private
- Do not share without permission
- Exceptions for danger to others
- Protect medical records

**End-of-Life Care:**
- Respect patient wishes
- Advance directives
- Palliative care
- Family involvement

**Professionalism:**
- Be honest
- Maintain competence
- Respect colleagues
- Avoid conflicts of interest

## Study Tips

1. Learn the four main principles
2. Understand informed consent
3. Know confidentiality rules
4. Practice with ethics cases
5. Think about what is best for the patient`,
      keyTerms: [
        { term: 'autonomy', definition: 'The right of patients to make their own decisions about their healthcare' },
        { term: 'informed consent', definition: 'Permission granted with full knowledge of risks and benefits' },
        { term: 'confidentiality', definition: 'Keeping patient information private and secure' },
        { term: 'advance directive', definition: 'A written statement of a person\'s wishes regarding medical treatment' },
      ],
      analogies: [
        'Medical ethics is like a compass - it helps doctors navigate difficult decisions and stay on the right path.',
        'The four ethical principles are like the four legs of a chair - all are needed for stable, balanced care.',
      ],
      examples: [
        'A patient has the right to refuse surgery even if doctors recommend it - this respects patient autonomy.',
        'Doctors cannot share patient information with family without the patient\'s permission, unless there is danger.',
      ],
      patientCounselingPoints: [
        'Medical ethics ensures your rights and wishes are respected in healthcare decisions',
        'You have the right to be involved in decisions about your care and to refuse treatment',
      ],
    },

    2: {
      level: 2,
      summary: 'Step 2 ethics covers core ethical principles, informed consent, confidentiality, end-of-life care, and professionalism. Questions test application of principles to clinical scenarios and recognition of ethical dilemmas.',
      explanation: `## Step 2 Ethics Overview

Ethics and professionalism on Step 2 CK tests understanding of core principles and their application to clinical scenarios.

## Core Ethical Principles

**Autonomy:**
| Aspect | Application |
|--------|-------------|
| Informed consent | Disclosure, understanding, voluntariness |
| Right to refuse | Even life-saving treatment |
| Decision-making capacity | Understanding, appreciation, reasoning, choice |
| Advance directives | Living will, healthcare proxy |

**Beneficence:**
| Application | Example |
|-------------|---------|
| Act in patient\'s best interest | Recommending evidence-based treatment |
| Prevent harm | Screening for disease |
| Remove harm | Treating infections |

**Non-Maleficence:**
| Consideration | Application |
|---------------|-------------|
| Risk-benefit analysis | Weighing treatment harms |
| Do no harm | Avoiding unnecessary procedures |
| Error disclosure | Honest communication about mistakes |

**Justice:**
| Aspect | Application |
|--------|-------------|
| Fair distribution | Resource allocation |
| Equal treatment | Non-discrimination |
| Rights protection | Advocacy for vulnerable |

## Informed Consent

**Required Elements:**
| Element | Description |
|---------|-------------|
| Disclosure | Nature, risks, benefits, alternatives |
| Understanding | Patient comprehends information |
| Voluntariness | No coercion or undue influence |
| Competence | Patient has decision-making capacity |

**Exceptions:**
| Exception | Circumstance |
|-----------|--------------|
| Emergency | Life-threatening, no time |
| Therapeutic privilege | Disclosure would harm patient |
| Waiver | Patient defers to physician |
| Implied consent | Routine procedures |

**Special Populations:**
| Population | Consent Requirements |
|------------|----------------------|
| Minors | Parental consent (exceptions for emancipated, mature minor, certain services) |
| Incapacitated | Surrogate decision-maker |
| Pregnant women | Mother decides for fetus in most cases |
| Prisoners | No coercion, special protections |

## Confidentiality

**General Rule:**
- Protect patient information
- Privacy is expected
- Trust is essential

**Exceptions:**
| Exception | Legal Basis | Example |
|-----------|-------------|---------|
| Mandatory reporting | State law | Child abuse, certain diseases |
| Tarasoff duty | Protect identifiable third parties | Threats of violence |
| Imminent danger | Protect patient or others | Suicidal intent |
| Court order | Legal process | Subpoena |

**HIPAA Basics:**
| Principle | Application |
|-----------|-------------|
| Minimum necessary | Share only what is needed |
| Business associates | Contracts for protection |
| Patient rights | Access, amendment, accounting |
| Breach notification | Required disclosure |

## Decision-Making Capacity

**Assessment:**
| Element | What to Assess |
|---------|----------------|
| Understanding | Comprehend information |
| Appreciation | Apply to own situation |
| Reasoning | Process of deciding |
| Expression of choice | Communicate decision |

**Impaired Capacity:**
| Cause | Management |
|-------|------------|
| Delirium | Treat underlying, temporary surrogate |
| Dementia | Assess current capacity, may fluctuate |
| Psychosis | Treat if impairing capacity |
| Minors | Parental consent, assent when appropriate |

**Surrogate Decision-Making:**
| Source | Priority |
|--------|----------|
| Advance directive | Patient\'s written instructions |
| Healthcare proxy | Designated decision-maker |
| Family | Spouse, adult children, parents |
| Court | Guardian appointed |

**Standards for Surrogate:**
| Standard | Application |
|----------|-------------|
| Substituted judgment | What patient would want |
| Best interest | If wishes unknown |

## End-of-Life Ethics

**Advance Directives:**
| Type | Function |
|------|----------|
| Living will | Written treatment preferences |
| Healthcare proxy | Designates decision-maker |
| DNR/DNI | Resuscitation preferences |
| POLST | Physician orders for life-sustaining treatment |

**Withdrawing vs Withholding:**
| Action | Ethical Equivalence |
|--------|-------------------|
| Withholding | Not starting treatment |
| Withdrawing | Stopping treatment |
| Ethical view | Equivalent |

**Palliative Care:**
| Principle | Application |
|-----------|-------------|
| Comfort | Pain and symptom management |
| Whole person | Psychological, spiritual support |
| Family support | Include loved ones |
| Early integration | Not just end-of-life |

**Physician-Assisted Suicide:**
| Jurisdiction | Legality | Requirements |
|--------------|----------|--------------|
| Some US states | Legal | Terminal illness, specific process |
| Most locations | Illegal | - |

## Professionalism

**Commitments:**
| Area | Responsibility |
|------|----------------|
| Competence | Maintain knowledge and skills |
| Honesty | Truthful communication |
| Integrity | Ethical conduct |
| Respect | For patients, colleagues |
| Responsibility | To profession, society |

**Conflicts of Interest:**
| Type | Management |
|------|------------|
| Financial | Disclosure, minimization |
| Gifts | Appropriate limits |
| Industry relationships | Transparency |
| Self-referral | Avoid |

**Impaired Physician:**
| Issue | Responsibility |
|-------|----------------|
| Recognition | Colleague concern |
| Reporting | To appropriate authority |
| Support | Treatment programs |
| Patient safety | First priority |`,
      keyTerms: [
        { term: 'decision-making capacity', definition: 'The ability to understand information and make informed decisions about one\'s care' },
        { term: 'surrogate decision-maker', definition: 'A person appointed or authorized to make healthcare decisions for another' },
        { term: 'advance directive', definition: 'A legal document that specifies a person\'s wishes for medical treatment' },
        { term: 'Tarasoff duty', definition: 'The duty to warn/protect identifiable third parties from harm' },
      ],
      analogies: [
        'Informed consent is like a contract - both parties understand and agree to the terms before proceeding.',
        'Decision-making capacity is like the driver\'s license of healthcare - you need it to make your own medical decisions.',
      ],
      examples: [
        'A patient with schizophrenia may still have decision-making capacity if they understand their illness and treatment options.',
        'A physician must break confidentiality to report a patient who threatens to harm a specific person.',
      ],
      patientCounselingPoints: [
        'Advance directives ensure your healthcare wishes are followed even if you cannot speak for yourself',
        'You can designate someone you trust to make healthcare decisions for you if needed',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 2 ethics requires application of principles to complex clinical scenarios. High-yield topics include informed consent exceptions, capacity assessment, surrogate decision-making, confidentiality limits, and end-of-life decision-making.',
      explanation: `## Comprehensive Step 2 Ethics Framework

Mastery of ethics for Step 2 requires understanding principles, recognizing ethical dilemmas, and applying frameworks to clinical scenarios.

## Complex Informed Consent

**Therapeutic Privilege:**
| Element | Application |
|---------|-------------|
| Definition | Withholding information to avoid harm |
| Criteria | Disclosure would cause serious harm |
| Limitation | Rarely invoked |
| Alternative | Obtain consent through surrogate |

**Emancipated Minors:**
| Criterion | Example |
|-----------|---------|
| Marriage | Married minor |
| Military service | Enlisted minor |
| Financial independence | Self-supporting |
| Pregnancy | Pregnant minor |
| Mature minor | Some jurisdictions for specific care |

**Mature Minor Doctrine:**
| Application | Requirements |
|-------------|--------------|
| Specific treatments | Contraception, STI treatment, substance abuse |
| Criteria | Understanding, maturity, specific situation |
| Variation | State law varies |

**Emergency Exceptions:**
| Situation | Requirements |
|-----------|--------------|
| Life-threatening emergency | No time for consent |
| No surrogate available | Document attempts |
| Presumed consent | Reasonable person would consent |
| Scope limitation | Only emergent treatment |

## Research Ethics

**Historical Basis:**
| Event | Lesson |
|-------|--------|
| Nazi experiments | Informed consent essential |
| Tuskegee | Justice, exploitation |
| Willowbrook | Vulnerable populations |
| Henrietta Lacks | Tissue rights |

**Belmont Report Principles:**
| Principle | Application |
|-----------|-------------|
| Respect for persons | Autonomy, protection of vulnerable |
| Beneficence | Maximize benefit, minimize harm |
| Justice | Fair subject selection |

**IRB Requirements:**
| Element | Requirement |
|---------|-------------|
| Risk-benefit | Favorable ratio |
| Informed consent | Adequate process |
| Subject selection | Equitable |
| Data safety | Monitoring plan |

**Special Populations:**
| Population | Protections |
|------------|-------------|
| Prisoners | Limited, extra safeguards |
| Pregnant women | Fetal protection |
| Children | Assent + parental permission |
| Cognitively impaired | Surrogate consent |

## Resource Allocation

**Principles:**
| Approach | Application |
|----------|-------------|
| Utilitarian | Greatest good for greatest number |
| Egalitarian | Equal access |
| Prioritarian | Favor the worst off |
| Libertarian | Market-based |

**Organ Allocation:**
| Organ | Criteria |
|-------|----------|
| Kidney | Time on list, HLA match |
| Liver | MELD score |
| Heart | Status, waiting time |
| Lung | LAS score |

**Triage:**
| Principle | Application |
|----------|-------------|
| Save most lives | Likelihood of survival |
| Save most life-years | Age, life expectancy |
| Fair chances | Lottery, first-come |
| Instrumental value | Healthcare workers first |

## Genetics and Ethics

**Genetic Testing:**
| Issue | Consideration |
|-------|---------------|
| Informed consent | Implications for family |
| Incidental findings | Duty to disclose |
| Pedigree information | Family confidentiality |
| Discrimination | GINA protections |

**GINA (Genetic Information Nondiscrimination Act):**
| Protection | Application |
|------------|-------------|
| Health insurance | Cannot use genetic info |
| Employment | Cannot discriminate |
| Limitations | Life, disability, long-term care not covered |

**Reproductive Genetics:**
| Issue | Ethics |
|-------|--------|
| Prenatal testing | Autonomy, disability rights |
| PGD | Selection, designer babies |
| Genetic enhancement | Slippery slope |

## Cultural Competency

**Principles:**
| Element | Application |
|---------|-------------|
| Respect | Value different beliefs |
| Understanding | Learn about cultures |
| Flexibility | Adapt care approaches |
| Self-awareness | Recognize own biases |

**Common Issues:**
| Situation | Response |
|-----------|----------|
| Language barriers | Professional interpreter |
| Religious objections | Accommodate when possible |
| Family decision-making | Respect but ensure autonomy |
| Traditional medicine | Integrate safely |

## Malpractice and Liability

**Elements of Malpractice:**
| Element | Requirement |
|---------|-------------|
| Duty | Doctor-patient relationship |
| Breach | Standard of care violation |
| Causation | Breach caused harm |
| Damages | Compensable injury |

**Preventing Malpractice:**
| Strategy | Implementation |
|----------|----------------|
| Communication | Clear, empathetic |
| Documentation | Thorough, timely |
| Informed consent | Proper process |
| Follow-up | Results, referrals |

**Apology Laws:**
| Type | Effect |
|------|--------|
| Full apology | Protected from admission of liability |
| Partial apology | Expression of regret protected |
| Benefits | May reduce litigation |

## Ethical Dilemmas

**Common Scenarios:**
| Scenario | Ethical Tension |
|----------|-----------------|
| Jehovah\'s Witness and blood | Autonomy vs beneficence |
| Teen seeking contraception | Autonomy vs parental rights |
| DNR in OR | Autonomy vs standard practice |
| Futility | Family wishes vs medical judgment |
| Resource scarcity | Individual vs population |

**Resolution Framework:**
1. Identify ethical issues
2. Gather relevant information
3. Identify stakeholders
4. Apply ethical principles
5. Consider alternatives
6. Make decision
7. Document reasoning

**Ethics Consultation:**
| When to Consult | Process |
|-----------------|---------|
| Persistent disagreement | Multidisciplinary team |
| Novel ethical issues | Structured analysis |
| Policy questions | Institutional review |`,
      keyTerms: [
        { term: 'therapeutic privilege', definition: 'Withholding information from a patient when disclosure would cause serious harm' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - protects against genetic discrimination' },
        { term: 'futile care', definition: 'Treatment that has no reasonable chance of benefiting the patient' },
        { term: 'IRB', definition: 'Institutional Review Board - reviews research to protect human subjects' },
      ],
      analogies: [
        'Research ethics is like guardrails on a highway - it keeps research on a safe path while allowing progress.',
        'Resource allocation is like dividing a pie - there are different philosophies about who should get how much.',
      ],
      examples: [
        'A Jehovah\'s Witness patient has the right to refuse blood transfusion based on religious beliefs, even if life-threatening.',
        'A pregnant 16-year-old can consent for pregnancy-related care in many states under the mature minor doctrine.',
      ],
      patientCounselingPoints: [
        'Cultural beliefs and values are respected in ethical medical care',
        'Research participants have specific rights and protections',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 2 ethics requires nuanced application of principles to complex scenarios, understanding legal frameworks, and managing ethical dilemmas. Expert preparation emphasizes systematic ethical analysis and professional responsibility.',
      explanation: `## Advanced Step 2 Ethics Concepts

Professional-level ethics mastery requires sophisticated understanding of legal frameworks, complex case analysis, and leadership in ethical practice.

## Complex Consent Issues

**Surrogate Decision-Making Challenges:**
| Challenge | Resolution |
|-----------|------------|
| Family disagreement | Ethics consultation, court if necessary |
| Unknown patient values | Best interest standard |
| Conflicting advance directives | Most recent, specific |
| Surrogate acting against patient wishes | Challenge surrogate authority |

**Psychiatric Emergencies:**
| Situation | Authority |
|-----------|-----------|
| Imminent danger | Involuntary hold/treatment |
| Grave disability | Conservatorship |
| Capacity fluctuation | Time-limited decisions |
| ECT without consent | Emergency criteria |

**Pregnancy and Autonomy:**
| Issue | Standard |
|-------|----------|
| Maternal decisions affecting fetus | Mother decides |
| Court-ordered cesarean | Rare, typically refused |
| Substance use in pregnancy | Mandatory reporting varies |
| Fetal surgery | Maternal consent required |

## End-of-Life Complexities

**Futility:**
| Type | Definition | Response |
|------|------------|----------|
| Quantitative | Very low probability | Discuss with family |
| Qualitative | Outcome not worth pursuing | Ethics consultation |
| Physiologic | Cannot achieve physiologic goal | Honest communication |

**Slow Code:**
| Issue | Ethical Position |
|-------|------------------|
| Definition | Partial resuscitation effort |
| Ethics | Deceptive, violates trust |
| Alternative | Honest discussion of DNR |

**Brain Death:**
| Aspect | Criteria |
|--------|----------|
| Definition | Irreversible loss of all brain function |
| Determination | Clinical criteria, confirmatory tests |
| Religious objection | Accommodate within legal framework |
| Family acceptance | Time, support, explanation |

**Pediatric End-of-Life:**
| Issue | Consideration |
|-------|---------------|
| Parental authority | Primary decision-makers |
| Limits | Medical neglect, court intervention |
| Child assent | Include age-appropriate child |
| Conflicts | Ethics consultation |

## Professional Boundaries

**Sexual Boundaries:**
| Issue | Standard |
|-------|----------|
| Current patient | Never appropriate |
| Former patient | Generally avoid |
| Staff relationships | Disclosure, power dynamics |
| Social media | Professional boundaries |

**Gifts:**
| Type | Acceptability |
|------|---------------|
| Small tokens | Generally acceptable |
| Expensive gifts | Decline |
| Industry gifts | Strict limits |
| Cultural considerations | Respect within limits |

**Social Media:**
| Issue | Guideline |
|-------|-----------|
| Patient information | Never share |
| Professional image | Maintain standards |
| Colleague interaction | Professional tone |
| Reviews/complaints | Professional response |

## Healthcare System Ethics

**Access to Care:**
| Barrier | Ethical Response |
|---------|------------------|
| Uninsured | Advocate for coverage |
| Undocumented | Emergency care required |
| Rural access | Telehealth, outreach |
| Language | Interpreter services |

**Quality and Cost:**
| Tension | Resolution |
|---------|------------|
| Cost containment | Value-based care |
| Resource allocation | Transparent criteria |
| Profit vs patient care | Professional ethics |
| Unnecessary care | Evidence-based practice |

**Industry Relationships:**
| Type | Management |
|------|------------|
| Pharmaceutical | Disclosure, limits |
| Device companies | Transparency |
| Speaking engagements | Balanced, disclosed |
| Consulting | Time-limited, disclosed |

## Legal Framework

**Key Legislation:**
| Law | Provision |
|-----|-----------|
| EMTALA | Emergency treatment regardless of ability to pay |
| HIPAA | Privacy protection |
| ADA | Disability rights |
| GINA | Genetic discrimination protection |
| ACA | Insurance coverage, preventive care |

**Medical Marijuana:**
| Aspect | Status |
|--------|--------|
| Federal | Schedule I controlled substance |
| State | Many states legal for medical use |
| Prescribing | Cannot federally prescribe |
| Recommendation | State-legal protection |

**Abortion:**
| Aspect | Status |
|--------|--------|
| Federal constitutional | Right to privacy |
| State regulation | Varies significantly |
| Physician conscience | Right to decline participation |
| Referral | Obligation if declining |

## Ethics Committees

**Function:**
| Role | Activity |
|------|----------|
| Consultation | Case analysis |
| Education | Staff training |
| Policy development | Institutional guidelines |
| Retrospective review | Case review |

**Consultation Process:**
1. Request consultation
2. Gather information
3. Identify stakeholders
4. Analyze ethically
5. Make recommendations
6. Document
7. Follow up

## Global Health Ethics

**Challenges:**
| Issue | Consideration |
|-------|---------------|
| Short-term missions | Sustainable impact |
| Cultural imperialism | Respect local practices |
| Research in developing countries | Exploitation concerns |
| Medical tourism | Equity issues |

**Disaster Response:**
| Principle | Application |
|-----------|-------------|
| Triage | Fair allocation |
| Cultural sensitivity | Local norms |
| Sustainability | Long-term planning |
| Capacity building | Local empowerment |

## Teaching Ethics

**Methods:**
| Approach | Application |
|----------|-------------|
| Case-based | Clinical scenarios |
| Small group | Discussion, peer learning |
| Simulation | High-stakes scenarios |
| Reflective writing | Personal exploration |

**Assessment:**
| Method | Purpose |
|--------|---------|
| Multiple choice | Knowledge testing |
| OSCE | Skills demonstration |
| Portfolio | Development over time |
| Peer evaluation | Professionalism |

## Future Challenges

**Emerging Issues:**
| Technology | Ethical Challenge |
|------------|-------------------|
| AI/ML | Bias, accountability |
| Gene editing | Germline modifications |
| Neurotechnology | Cognitive enhancement |
| Telehealth | Access, quality, privacy |
| Wearables | Data ownership, monitoring |

**Climate Change:**
| Issue | Medical Ethics |
|-------|----------------|
| Health impacts | Advocacy |
| Resource use | Sustainability |
| Vulnerable populations | Justice |
| Professional responsibility | Carbon footprint |`,
      keyTerms: [
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - requires emergency treatment regardless of ability to pay' },
        { term: 'brain death', definition: 'Irreversible cessation of all brain function including brainstem' },
        { term: 'quantitative futility', definition: 'Treatment with very low probability of success' },
        { term: 'conscientious objection', definition: 'The right of healthcare providers to decline participation in procedures based on moral beliefs' },
      ],
      analogies: [
        'Brain death criteria are like irreversible power failure - not just the cortex (thinking part) but the brainstem (life support) is gone.',
        'Medical ethics committees are like Supreme Courts for hospitals - they provide guidance on difficult ethical questions.',
      ],
      examples: [
        'EMTALA requires hospitals to provide stabilizing treatment in emergencies regardless of insurance status or ability to pay.',
        'A physician who objects to abortion must provide referral to ensure patient access to legal care.',
      ],
      patientCounselingPoints: [
        'Laws like EMTALA ensure emergency care is available regardless of financial status',
        'Medical ethics committees help resolve complex situations when there is disagreement',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 2 ethics mastery integrates philosophical foundations, legal frameworks, complex case analysis, and leadership in ethical practice. Professional excellence requires advancing ethical standards, teaching ethics, and navigating emerging challenges.',
      explanation: `## Expert Step 2 Ethics Framework

Professional-level ethics mastery synthesizes philosophical understanding, legal expertise, case analysis, and leadership in ethical practice.

## Philosophical Foundations

**Ethical Theories:**
| Theory | Focus | Application |
|--------|-------|-------------|
| Deontology | Duties, rules | Respect for autonomy |
| Consequentialism | Outcomes | Utilitarian resource allocation |
| Virtue ethics | Character | Professional formation |
| Principlism | Four principles | Clinical ethics framework |
| Care ethics | Relationships | Patient-centered care |
| Narrative ethics | Stories | Understanding context |

**Moral Status:**
| Entity | Basis | Implications |
|--------|-------|--------------|
| Persons | Rationality, autonomy | Full moral status |
| Potential persons | Future capacity | Some protections |
| Non-persons | Sentience | Welfare considerations |

**Moral Distress:**
| Cause | Management |
|-------|------------|
| Constraint | Advocacy, voice |
| Powerlessness | Support, debriefing |
| System issues | Quality improvement |

## Healthcare Law

**Malpractice Deep Dive:**
| Defense | Strategy |
|---------|----------|
| No duty | No relationship |
| No breach | Standard of care met |
| No causation | Other cause of injury |
| No damages | No compensable harm |
| Assumption of risk | Informed consent |
| Contributory negligence | Patient responsibility |

**Informed Consent Law:**
| Standard | Jurisdiction |
|----------|--------------|
| Professional practice | What reasonable physician would disclose |
| Patient-centered | What reasonable patient would want to know |
| Subjective | What this specific patient wants to know |

**End-of-Life Law:**
| Issue | Legal Framework |
|-------|-----------------|
| Right to refuse | Constitutional, common law |
| Advance directives | State statutes |
| Surrogate hierarchy | State law |
| PAS | State variation, illegal federally |

## Complex Case Analysis

**Systematic Approach:**
1. **Identify Facts:** Medical, social, legal
2. **Identify Values:** Patient, family, professional, societal
3. **Identify Principles:** Autonomy, beneficence, non-maleficence, justice
4. **Identify Options:** Range of morally acceptable choices
5. **Justify Decision:** Reasons, principles, precedent
6. **Reflect:** Outcomes, lessons

**Common Dilemmas:**
| Scenario | Analysis |
|----------|----------|
| Parent refuses life-saving treatment for child | Override authority, court order |
| Patient demands futile care | Discuss, ethics consult, may refuse |
| Surrogate requests withdrawal against patient values | Challenge surrogate |
| Patient lacks capacity, no surrogate | Guardian appointment |
| Cultural practice conflicts with medical recommendation | Negotiate, accommodate if safe |

## Organizational Ethics

**Mission and Values:**
| Element | Function |
|---------|----------|
| Mission statement | Purpose, direction |
| Values statement | Ethical commitments |
| Code of conduct | Behavioral expectations |

**Ethics Infrastructure:**
| Component | Function |
|-----------|----------|
| Ethics committee | Consultation, education |
| Compliance office | Regulatory adherence |
| Patient relations | Grievances, advocacy |
| Risk management | Safety, liability |

**Conflicts:**
| Type | Resolution |
|------|------------|
| Mission vs profit | Governance |
| Clinical vs business | Ethics consultation |
| Individual vs institutional | Advocacy, negotiation |

## Research Ethics Advanced

**International Guidelines:**
| Document | Principle |
|----------|-----------|
| Declaration of Helsinki | Research ethics |
| CIOMS guidelines | International research |
| Nuremberg Code | Voluntary consent |

**Controversial Areas:**
| Area | Ethical Issues |
|------|----------------|
| Placebo-controlled trials | Standard of care debate |
| Post-trial access | Obligation to participants |
| Cluster randomized trials | Community consent |
| Pragmatic trials | Generalizability vs control |

**Emerging Issues:**
| Technology | Ethics Challenge |
|------------|------------------|
| AI/ML in research | Bias, explainability |
| Big data | Consent, privacy |
| Gene editing | Germline, enhancement |
| Organoids | Consciousness, moral status |

## Global Health Ethics

**Justice in Global Health:**
| Issue | Framework |
|-------|-----------|
| Disease burden | DALY-based allocation |
| Research justice | Capacity building |
| Brain drain | Fair compensation |
| Climate justice | Historical responsibility |

**Humanitarian Ethics:**
| Principle | Application |
|-----------|-------------|
| Humanity | Alleviate suffering |
| Impartiality | Need-based |
| Neutrality | Non-partisan |
| Independence | Autonomous action |

## Teaching and Leadership

**Ethics Education:**
| Level | Focus |
|-------|-------|
| Undergraduate | Foundational concepts |
| Graduate | Clinical application |
| CME | Emerging issues |
| Faculty | Teaching skills |

**Ethics Leadership:**
| Role | Activities |
|------|------------|
| Ethics chair | Committee leadership |
| Chief ethics officer | Organizational ethics |
| Institutional official | Research oversight |
| Policy advocate | Societal impact |

## Future of Medical Ethics

**Technological Challenges:**
| Innovation | Ethical Dimension |
|------------|-------------------|
| AI diagnosis | Accountability, bias |
| Brain-computer interfaces | Identity, privacy |
| Life extension | Justice, meaning |
| Synthetic biology | Safety, dual use |

**Societal Challenges:**
| Issue | Response |
|-------|----------|
| Health disparities | Structural competency |
| Climate change | Professional responsibility |
| Political polarization | Maintaining trust |
| Misinformation | Communication ethics |

**Professional Evolution:**
| Trend | Implication |
|-------|-------------|
| Team-based care | Shared responsibility |
| Patient-centered | Partnership model |
| Population health | Collective ethics |
| Digital health | New boundaries |`,
      keyTerms: [
        { term: 'moral distress', definition: 'The psychological distress that occurs when one knows the right action but feels constrained from taking it' },
        { term: 'structural competency', definition: 'Understanding how social, economic, and political structures affect health' },
        { term: 'principlism', definition: 'An approach to ethics using four principles: autonomy, beneficence, non-maleficence, and justice' },
        { term: 'organizational ethics', definition: 'The application of ethical principles to healthcare organizations and systems' },
      ],
      clinicalNotes: `Expert perspective on Step 2 ethics:

1. **Principles are Guideposts:** The four principles (autonomy, beneficence, non-maleficence, justice) guide but do not dictate answers. Real cases require balancing competing principles.

2. **Process Matters:** How you reach an ethical decision matters as much as the outcome. Include stakeholders, be transparent, document reasoning.

3. **Capacity is Key:** Assess decision-making capacity carefully. Never assume incapacity based on diagnosis alone.

4. **Surrogate Standards:** Use substituted judgment when possible (what would patient want?), best interest when necessary.

5. **Confidentiality Has Limits:** Know the mandatory reporting requirements and Tarasoff duty in your jurisdiction.

6. **End-of-Life is High-Yield:** Understand advance directives, DNR orders, and the difference between withdrawing and withholding treatment.

7. **Professionalism is Tested:** Ethics questions often test professional boundaries, gifts, conflicts of interest, and impaired colleagues.

8. **Research Protections:** Understand informed consent in research, vulnerable populations, and institutional review requirements.

9. **Know the Law:** While ethics and law differ, know key legal requirements: EMTALA, HIPAA, mandatory reporting.

10. **Culture Matters:** Respect cultural differences while maintaining ethical standards. Cultural competency is an ethical obligation.`,
    },
  },

  media: [
    {
      id: 'ethical-principles',
      type: 'diagram',
      filename: 'ethical-principles.svg',
      title: 'Four Principles of Medical Ethics',
      description: 'Diagram showing autonomy, beneficence, non-maleficence, and justice',
    },
    {
      id: 'informed-consent',
      type: 'diagram',
      filename: 'informed-consent.svg',
      title: 'Informed Consent Process',
      description: 'Flowchart of informed consent elements and process',
    },
  ],

  citations: [
    {
      id: 'beauchamp-ethics',
      type: 'textbook',
      title: 'Principles of Biomedical Ethics',
      authors: ['Beauchamp, T.L.', 'Childress, J.F.'],
      source: 'Oxford University Press',
      accessedDate: '2025-01-28',
    },
    {
      id: 'first-aid-ethics',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 2 CK',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'parent', label: 'Step 2 Overview' },
    { targetId: 'education-medical-ethics', targetType: 'concept', relationship: 'related', label: 'Medical Ethics' },
    { targetId: 'education-medical-legal', targetType: 'concept', relationship: 'related', label: 'Medical Legal Issues' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['USMLE Step 2', 'ethics', 'medical ethics', 'professionalism'],
    keywords: ['USMLE', 'Step 2', 'ethics', 'bioethics', 'professionalism', 'informed consent'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default step2Ethics;
