/**
 * Power of Attorney - Educational Content
 *
 * Guidance for caregivers on understanding and using power of attorney
 * for financial and legal decision-making.
 */

import { EducationalContent } from "../../types";

export const powerOfAttorney: EducationalContent = {
  id: "caregiver-power-of-attorney",
  type: "concept",
  name: "Power of Attorney",
  alternateNames: ["POA", "Financial Power of Attorney", "Durable Power of Attorney"],

  levels: {
    1: {
      level: 1,
      summary: "A power of attorney is a legal document that lets someone you trust manage your money and legal matters if you cannot do it yourself.",
      explanation: `A power of attorney (POA) is an important document for caregivers and the people they care for.

**What Is Power of Attorney?**
- A legal document
- Lets someone make financial and legal decisions
- The person who creates it is the \"principal\"
- The person who helps is the \"agent\" or \"attorney-in-fact\"

**Why It Matters**
- Your loved one may not be able to manage their own affairs
- Without POA, no one can legally act for them
- Getting court authority is expensive and slow
- Planning ahead prevents crises

**Types of Power of Attorney**

**Durable Power of Attorney**
- Stays in effect even if person becomes incapacitated
- Most important type for caregiving
- Must be set up while person can still understand

**Limited Power of Attorney**
- Only for specific tasks or time period
- Example: selling a house while on vacation

**What the Agent Can Do**
- Pay bills
- Manage bank accounts
- File taxes
- Handle investments
- Make financial decisions

**Important Points**
- Person must understand when they sign
- Must be signed while still able to make decisions
- An attorney should help create it
- Copies may be needed for banks

**Warning Signs of Problems**
- Agent using money for themselves
- Not keeping records
- Family conflicts about decisions
- Refusing to show accounting`,
      keyTerms: [
        { term: "power of attorney", definition: "Legal document allowing someone to make financial and legal decisions for another person" },
        { term: "principal", definition: "The person who creates the power of attorney and gives authority" },
        { term: "agent", definition: "The person given authority to act for the principal (also called attorney-in-fact)" },
        { term: "durable", definition: "Remains in effect even if the principal becomes incapacitated" },
      ],
      analogies: [
        "A power of attorney is like giving someone the keys to your financial life - choose carefully who you trust.",
        "Think of it as a backup driver - someone who can take the wheel if you cannot drive anymore.",
      ],
      examples: [
        "After his mom was diagnosed with early dementia, Tom helped her set up a durable power of attorney while she could still understand and sign.",
        "Maria uses her father\"s power of attorney to pay his bills and manage his bank account since his stroke.",
      ],
    },
    2: {
      level: 2,
      summary: "Power of attorney authorizes legal and financial decision-making, with durable POA essential for caregiving situations, requiring proper execution and appropriate scope to protect the principal.",
      explanation: `**Types of Power of Attorney**

| Type | When Effective | When Ends | Best For |
|------|---------------|-----------|----------|
| General POA | Immediately | Incapacity | Business transactions |
| Durable POA | Immediately or at incapacity | Death or revocation | Long-term planning |
| Springing POA | At specified event (incapacity) | Death or revocation | Those not wanting immediate effect |
| Limited POA | As specified | Completion of task | Specific transactions |

**Durable Power of Attorney**
- Critical for caregiving
- \"Durable\" means survives incapacity
- Must be signed while principal has capacity
- Should be done early in illness

**Powers Typically Granted**
- Banking and financial transactions
- Bill paying
- Real estate transactions
- Tax filing
- Investment management
- Insurance claims
- Government benefits
- Business operations

**Creating a Power of Attorney**

**Requirements**
- Principal must have mental capacity
- Must be voluntary
- Notarization (varies by state)
- Witnesses (varies by state)
- Specific language required

**Recommended Steps**
1. Consult with attorney
2. Determine scope of powers
3. Choose trustworthy agent
4. Name successor agent
5. Execute properly
6. Distribute copies
7. Record if required (real estate)

**Agent Responsibilities**
- Act in principal\"s best interest
- Keep principal\"s money separate
- Keep detailed records
- Avoid conflicts of interest
- Follow any limitations in document
- Report as required

**Potential Problems**

| Issue | Prevention |
|-------|-----------|
| Agent misuse | Careful agent selection, monitoring |
| Banks not accepting | Use bank\"s own form, recent document |
| Family conflict | Clear communication, professional help |
| Outdated document | Periodic review and update |
| Lost document | Keep copies, register if available |

**When POA Is Not Enough**
- If no POA exists and person is incapacitated
- Court guardianship/conservatorship may be needed
- Much more expensive and time-consuming
- Loss of rights for principal`,
      keyTerms: [
        { term: "general power of attorney", definition: "Broad authority over financial matters but ends if principal becomes incapacitated" },
        { term: "springing power of attorney", definition: "Takes effect only when a specified event occurs, usually incapacity" },
        { term: "fiduciary duty", definition: "Legal obligation to act in the best interest of another" },
        { term: "guardianship", definition: "Court-appointed authority when person cannot manage their own affairs and no POA exists" },
      ],
      analogies: ["A power of attorney is like a permission slip that lasts - once given, the agent can act until it is revoked or the principal dies."],
    },
    3: {
      level: 3,
      summary: "Power of attorney involves understanding state-specific legal requirements, fiduciary duties, capacity assessment, and abuse prevention while balancing autonomy with protection.",
      explanation: `## Legal Framework

**State Law Variation**
- Execution requirements differ
- Powers and limitations vary
- Recording requirements
- Uniform Power of Attorney Act (adopted by many states)

**Capacity for Execution**
- Understanding nature of document
- Understanding extent of property
- Knowing natural objects of bounty
- Understanding consequences

**Document Elements**
| Element | Purpose |
|---------|---------|
| Principal identification | Who is granting power |
| Agent designation | Who will act |
| Successor agent | Backup if primary cannot serve |
| Powers granted | Scope of authority |
| Durability clause | Survives incapacity |
| Effective date | When powers begin |
| Execution | Signatures, notary, witnesses |

## Fiduciary Duties

**Agent Obligations**
- Duty of loyalty
- Duty of care
- Duty to account
- Duty to keep property separate
- Duty to follow instructions

**Standard of Care**
- Good faith
- Principal\"s best interest
- Prudent person standard
- Documented decision-making

**Prohibited Actions**
- Self-dealing
- Commingling funds
- Conflicts of interest
- Actions outside scope
- Benefit from position

## Practical Implementation

**Financial Institution Acceptance**
- May have own forms
- May require \"certification\"
- Recent document preferred
- Medallion guarantee issues

**Record Keeping**
- All transactions documented
- Receipts and statements
- Decision rationale
- Regular accountings

**Multiple Agents**
- Joint agents (both must agree)
- Separate agents for different functions
- Successor agents
- Coordination challenges

## Abuse Prevention and Detection

**Risk Factors**
- Isolated principal
- History of family conflict
- Financial stress of agent
- Cognitive decline of principal

**Warning Signs**
- Unexplained withdrawals
- Changes to beneficiaries
- New \"friends\" with access
- Agent lifestyle changes
- Refusal to account

**Protective Measures**
- Professional fiduciary
- Monitoring arrangements
- Regular accountings
- Multiple agents
- Limited powers

## Capacity and Incapacity

**Determining Incapacity**
- Medical evaluation
- Legal standards vary
- Functional assessment
- Decision-specific

**Springing POA Challenges**
- Proving incapacity
- Medical certification
- Delays in effectiveness
- Third party acceptance`,
      keyTerms: [
        { term: "Uniform Power of Attorney Act", definition: "Model legislation adopted by many states standardizing POA law" },
        { term: "certification", definition: "Sworn statement by agent about validity and status of power of attorney" },
        { term: "self-dealing", definition: "Agent using POA authority for personal benefit rather than principal\"s interest" },
        { term: "accounting", definition: "Detailed record of all financial transactions under power of attorney" },
      ],
      clinicalNotes: "Assess whether patient has POA in place. Evaluate capacity if POA needs to be created. Refer to elder law attorney for execution. Document capacity assessment if requested. Report suspected financial abuse.",
    },
    4: {
      level: 4,
      summary: "Power of attorney practice integrates legal standards, capacity assessment protocols, financial institution compliance, and elder abuse prevention within ethical frameworks balancing autonomy and protection.",
      explanation: `## Legal Standards

**Uniform Power of Attorney Act**
- Default rules and powers
- Agent duties codified
- Third party acceptance requirements
- Liability provisions

**Capacity Standards**
| Jurisdiction | Approach |
|--------------|----------|
| Contract standard | Understanding terms |
| Higher standard | Some states require more |
| Sliding scale | Higher for complex POA |
| Assessment tools | Medical evaluation often needed |

**Execution Requirements**
- Notarization (most states)
- Witnesses (many states)
- Specific language
- Recording (real estate)

## Capacity Assessment

**Medical Evaluation**
- Cognitive testing
- Functional assessment
- Decision-making evaluation
- Documentation

**Legal Standard**
- Understand nature of POA
- Understand property holdings
- Know who would naturally inherit
- Understand consequences of signing

**Contested Capacity**
- Independent evaluation
- Legal proceedings possible
- Documentation critical
- Expert testimony

## Financial Institution Issues

**Common Challenges**
- Outdated documents
- Unfamiliar format
- Concern about liability
- Internal policies

**Solutions**
- Use institution forms
- Regular updates
- Certification process
- Legal involvement if refused

**Medallion Guarantee**
- Required for securities
- Banks provide
- Liability protection
- May require relationship

## Elder Abuse Prevention

**Financial Exploitation**
- Most common elder abuse
- POA misuse significant
- Detection challenges
- Reporting obligations

**Protective Frameworks**
- Fiduciary duties
- Accounting requirements
- Third party monitoring
- Professional fiduciaries
- Limited powers approach

**Intervention**
- Adult protective services
- Law enforcement
- Civil litigation
- Guardianship as protection

## Ethical Considerations

**Autonomy vs. Protection**
- Respecting choices
- Undue influence concerns
- Capacity fluctuation
- Family dynamics

**Attorney Role**
- Client identification
- Capacity assessment
- Undue influence screening
- Documentation

**Healthcare Provider Role**
- Capacity documentation
- Abuse recognition
- Reporting obligations
- Referral to resources`,
      keyTerms: [
        { term: "medallion signature guarantee", definition: "Financial institution stamp certifying signature authenticity for securities transactions" },
        { term: "undue influence", definition: "Improper pressure overriding someone\"s free will in executing documents" },
        { term: "professional fiduciary", definition: "Licensed professional serving as POA agent, trustee, or guardian" },
        { term: "adult protective services", definition: "State agency investigating elder abuse including financial exploitation" },
        { term: "sliding scale capacity", definition: "Approach requiring higher understanding for more consequential decisions" },
      ],
      clinicalNotes: "Document capacity assessments thoroughly. Recognize signs of financial exploitation. Report suspected abuse per mandatory reporting laws. Coordinate with social work for complex situations. Refer to elder law attorney for legal questions.",
    },
    5: {
      level: 5,
      summary: "Power of attorney research examines legal reform, technology integration, cross-border issues, and policy frameworks while addressing disparities in access to legal planning and elder financial abuse prevention.",
      explanation: `## Legal Reform

**Uniform Law Evolution**
- UPOAA adoption progress
- Gaps and improvements
- Third party acceptance reforms
- Agent accountability measures

**Technology and POA**
- Electronic execution
- Digital assets
- Online verification
- Fraud prevention

**Cross-Border Issues**
- International recognition
- Hague Convention (limited)
- State-to-state variation
- Planning considerations

## Research Areas

**Capacity Assessment**
- Standardized tools development
- Reliability research
- Legal-clinical integration
- Training approaches

**Agent Behavior**
- Compliance research
- Abuse prevalence
- Prevention effectiveness
- Monitoring approaches

**Access to Justice**
- Legal aid availability
- DIY document quality
- Disparities in planning
- Technology solutions

## Elder Abuse Research

**Financial Exploitation Epidemiology**
- Prevalence estimates
- Risk factors
- Detection methods
- Outcome research

**Prevention Research**
- Intervention effectiveness
- Education approaches
- System reforms
- Technology role

**Policy Implications**
- Mandatory reporting
- Banking safeguards
- Professional standards
- Criminal penalties

## Policy Framework

**State Policy**
- Uniform law adoption
- Execution requirements
- Agent accountability
- Abuse prevention

**Federal Policy**
- Elder justice initiatives
- Banking regulations
- Research funding
- Advocacy support

**Advocacy**
- Legal aid funding
- Consumer protection
- Abuse prevention
- Access to planning

## Health Equity

**Disparities**
- Access to legal planning
- Quality of documents
- Agent selection limitations
- Abuse vulnerability

**Targeted Interventions**
- Legal aid expansion
- Community education
- Cultural adaptation
- Low-cost planning options

**Research Needs**
- Disparities documentation
- Effective interventions
- Access barriers
- Outcome equity

## Future Directions

**Innovation**
- Digital POA execution
- Blockchain verification
- AI monitoring
- Remote notarization

**Policy Development**
- Uniform law refinement
- Technology standards
- Abuse prevention
- Access expansion

**Systems Integration**
- Healthcare-legal coordination
- Financial institution protocols
- Social services linkage
- Technology platforms`,
      keyTerms: [
        { term: "electronic execution", definition: "Creating legally valid POA through digital signatures and remote notarization" },
        { term: "digital assets", definition: "Online accounts, cryptocurrency, and digital property requiring POA coverage" },
        { term: "elder justice", definition: "Federal initiatives addressing elder abuse including financial exploitation" },
        { term: "access to justice", definition: "Ability to obtain legal services and planning regardless of income" },
        { term: "remote online notarization", definition: "Technology allowing notarization via video conference, expanding access" },
      ],
      clinicalNotes: `Systems implementation:
1. Screen patients for advance planning status
2. Refer to elder law resources
3. Document capacity appropriately
4. Report suspected abuse
5. Coordinate with legal and social services
6. Advocate for access to planning`,
    },
  },

  media: [
    { id: "poa-guide", type: "diagram", filename: "power-of-attorney-types.svg", title: "Power of Attorney Types", description: "Visual guide to types of power of attorney" },
  ],

  citations: [
    { id: "ulc-upoaa", type: "website", title: "Uniform Power of Attorney Act", source: "Uniform Law Commission", url: "https://www.uniformlaws.org/" },
    { id: "ncea-exploitation", type: "website", title: "Financial Exploitation", source: "National Center on Elder Abuse", url: "https://ncea.acl.gov/" },
  ],

  crossReferences: [
    { targetId: "caregiver-healthcare-proxy", targetType: "concept", relationship: "related", label: "Healthcare Proxy" },
    { targetId: "caregiver-financial-assistance", targetType: "concept", relationship: "related", label: "Financial Assistance" },
  ],

  tags: { systems: ["caregiver-support"], topics: ["power of attorney", "legal planning", "finances", "elder law", "financial abuse"], clinicalRelevance: "high" },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default powerOfAttorney;
