/**
 * International Healthcare - Medical Tourism/Planning
 *
 * Comprehensive content on accessing healthcare while abroad, understanding
 * international health systems, and navigating care in foreign countries.
 */

import { EducationalContent } from '../../types';

export const internationalHealthcare: EducationalContent = {
  id: 'travel-international-healthcare',
  type: 'concept',
  name: 'International Healthcare',
  alternateNames: ['Healthcare Abroad', 'Overseas Medical Care', 'Global Healthcare Access'],

  levels: {
    1: {
      level: 1,
      summary: 'International healthcare means getting medical care when you are in another country, whether for emergencies or planned treatment.',
      explanation: `When you travel to other countries, you might need medical care. Understanding how healthcare works in different places helps you get the care you need.

**When You Might Need Care Abroad:**
- Emergencies (accidents, sudden illness)
- Ongoing care (if traveling long-term)
- Planned medical procedures
- Prescriptions running out

**How Healthcare Differs Around the World:**

**Free or Low-Cost Systems:**
- Many countries have government healthcare
- Emergency care may be free or low-cost for visitors
- UK, Canada, Australia have public healthcare

**Pay-As-You-Go Systems:**
- Some countries expect payment upfront
- You pay and then claim from insurance
- US-style systems are less common globally

**Before You Travel:**
- Check if your health insurance works abroad
- Consider travel health insurance
- Carry your insurance cards and information
- Know your blood type and allergies
- Bring a list of your medications (generic names)

**Finding Care Abroad:**
- Ask your hotel or embassy for doctor recommendations
- Look for hospitals with English-speaking staff
- In emergencies, call the local emergency number
- Your travel insurance may have a help line

**Common Challenges:**
- Language barriers
- Different medication names
- Payment required upfront
- Records in foreign languages
- Different standards of care

**Emergency Numbers by Region:**
- Europe: 112 (universal)
- UK: 999
- Japan: 119 (ambulance)
- Australia: 000
- Most countries: Ask at your hotel

**Important Documents to Carry:**
- Travel health insurance policy
- Regular health insurance card
- List of medications with generic names
- Medical history summary
- Allergy information
- Emergency contact numbers
- Copy of passport

**After Getting Care Abroad:**
- Keep all receipts and documents
- Get translated copies of records
- File insurance claims promptly
- Tell your home doctor about any treatment`,
      keyTerms: [
        { term: 'universal healthcare', definition: 'A system where the government provides healthcare to all residents, often at low or no cost' },
        { term: 'generic name', definition: 'The scientific name of a medication that is the same worldwide, unlike brand names' },
        { term: 'embassy', definition: 'Your country\'s official office in another country that can help citizens abroad' },
      ],
      analogies: [
        'Health insurance abroad is like having AAA for your car - you hope you do not need it, but it is essential if something goes wrong.',
        'Generic medication names are like the universal language of medicine - Ibuprofen is the same everywhere, but Advil and Nurofen are different brand names.',
      ],
      examples: [
        'If you break your arm in France, you can go to a public hospital emergency room and receive care, then file for reimbursement from your insurance.',
        'If you run out of blood pressure medication in Thailand, a pharmacist can often provide a refill using the generic drug name.',
      ],
      patientCounselingPoints: [
        'Always carry a list of your medications with their generic names.',
        'Know how to contact your travel insurance company from abroad.',
        'In an emergency, go to the nearest hospital - worry about payment later.',
      ],
    },
    2: {
      level: 2,
      summary: 'International healthcare access requires understanding different health system models, insurance coverage mechanisms, and strategies for obtaining appropriate care while traveling or living abroad.',
      explanation: `## Global Healthcare System Models

**Beveridge Model (Tax-Funded):**
- Government provides and finances healthcare
- Examples: UK (NHS), Spain, Italy, Nordic countries
- Tourists: Usually covered for emergencies
- May require payment for non-emergencies

**Bismarck Model (Social Insurance):**
- Employer/employee funded insurance
- Non-profit "sickness funds"
- Examples: Germany, France, Belgium, Japan
- Tourists: May need to pay and claim reimbursement

**National Health Insurance Model (Single-Payer):**
- Government insurance, private providers
- Examples: Canada, Taiwan, South Korea
- Tourists: Coverage varies, often requires payment

**Out-of-Pocket Model:**
- Limited government involvement
- Common in developing countries
- Tourists: Typically pay upfront
- Quality varies significantly

## Insurance Options for International Care

**Standard Travel Insurance:**
| Coverage | Typical Limits |
|----------|----------------|
| Emergency medical | $50,000-$500,000+ |
| Medical evacuation | $100,000-$1,000,000 |
| Trip cancellation | Trip cost |
| Baggage | Limited |

**Important Exclusions:**
- Pre-existing conditions (unless waived)
- High-risk activities without rider
- Mental health (often limited)
- Routine care
- Pregnancy (often excluded)

**Specialized Options:**
| Type | Best For |
|------|----------|
| Annual multi-trip | Frequent travelers |
| Long-stay/expat | Extended overseas living |
| Adventure sports | High-risk activities |
| Medical tourism | Planned procedures |
| Cruise insurance | Ship-specific coverage |

## Accessing Care Abroad

**Emergency Care:**
1. Call local emergency number
2. Go to nearest hospital/clinic
3. Receive care (payment secondary)
4. Contact insurance as soon as possible
5. Keep all documentation

**Non-Emergency Care:**
1. Contact insurance for guidance
2. Use recommended providers if possible
3. Verify coverage before treatment
4. Understand payment expectations
5. Get itemized receipts

**Finding Quality Providers:**
| Resource | Use |
|----------|-----|
| Embassy list | Vetted local providers |
| Hotel concierge | Nearby options |
| Insurance hotline | Network providers |
| JCI website | Accredited hospitals |
| Expat communities | Personal recommendations |

## Regional Healthcare Guides

**European Union:**
- EHIC/GHIC cards for UK/EU citizens
- Emergency care accessible
- Quality generally high
- English often spoken in hospitals
- Pharmacies well-stocked

**Asia:**
- Variable quality by country
- Private hospitals often excellent
- Payment upfront common
- Pharmacies may sell without prescription
- Traditional medicine prevalent

**Latin America:**
- Private hospitals for tourists recommended
- Public systems may be overwhelmed
- Payment typically upfront
- Spanish/Portuguese language barriers
- Quality variable by location

**Middle East:**
- Modern facilities in Gulf states
- High quality private options
- Often English-speaking staff
- Conservative dress required
- Gender considerations in some areas

## Medication Abroad

**Bringing Medications:**
- Keep in original containers
- Carry prescription/doctor's letter
- Know generic names
- Bring extra supply
- Check local laws (controlled substances)

**Getting Medications Abroad:**
| Situation | Approach |
|-----------|----------|
| Ran out | Pharmacy with generic name, may need local prescription |
| Lost | Contact prescribing doctor for records, find local provider |
| Need new | Visit local doctor, may need insurance pre-authorization |
| Controlled substance | May not be available, plan ahead |

**Medication Naming:**
- Use International Nonproprietary Names (INN)
- Strengths may differ
- Formulations may vary
- Over-the-counter status varies

## Communication Strategies

**Language Barriers:**
- Translation apps (Google Translate, offline packs)
- Medical phrase cards
- Hospital translation services
- International patient departments
- Bilingual family/friends

**Medical Documentation:**
- Carry multilingual medical summary
- Use internationally recognized symbols
- Know key phrases in local language
- Emergency medical ID jewelry
- Digital backup of records`,
      keyTerms: [
        { term: 'EHIC', definition: 'European Health Insurance Card; provides EU citizens access to state healthcare in other EU countries' },
        { term: 'medical evacuation', definition: 'Emergency transport to a different location for medical care, often by air ambulance' },
        { term: 'INN', definition: 'International Nonproprietary Name; generic drug names recognized globally' },
        { term: 'single-payer', definition: 'Healthcare system where one entity (usually government) pays for all medical services' },
      ],
      analogies: [
        'Different healthcare systems are like different mobile phone networks - your phone might work, but roaming charges vary.',
        'An EHIC card is like a library card that works in multiple library systems - it gives you access but does not cover everything.',
      ],
    },
    3: {
      level: 3,
      summary: 'Navigating international healthcare requires understanding insurance mechanisms, healthcare system governance, regulatory environments, and strategies for optimizing care quality and continuity across borders.',
      explanation: `## Insurance Mechanisms in Detail

**Travel Insurance Claims Process:**

*Documentation Required:*
| Document | Purpose |
|----------|---------|
| Claim form | Initiates process |
| Medical reports | Validates treatment |
| Itemized invoices | Verifies costs |
| Receipts | Proof of payment |
| Passport/visa | Confirms travel dates |
| Police report | If applicable (accident/theft) |

*Claims Timeline:*
1. Notify insurer within 24-48 hours (emergencies)
2. Pre-authorization for non-emergencies
3. Submit complete documentation within 30-90 days
4. Processing: 2-8 weeks typical
5. Payment: Direct to provider or reimbursement

**Coordination of Benefits:**
- Primary: Travel insurance
- Secondary: Domestic health insurance (if applicable)
- Medicare: Generally no coverage abroad
- Credit card coverage: Usually secondary, limited

**Pre-existing Condition Waivers:**
- Time-sensitive (purchase soon after trip deposit)
- Requires stability period (often 60-180 days)
- May require medical questionnaire
- Read definitions carefully

## Regulatory Environments

**Medication Regulations:**

*Controlled Substances:*
| Classification | Considerations |
|----------------|----------------|
| Narcotics | Often prohibited or heavily restricted |
| Stimulants | May require special permission |
| Benzodiazepines | Varying regulations |
| Medical cannabis | Illegal in most countries |

*Documentation for Controlled Substances:*
- Doctor's letter (translated)
- Only personal supply amount
- Original prescription bottles
- Check specific country requirements (INCB)
- Carry letter from embassy if needed

**Practice Standards:**
- Licensing requirements vary
- Foreign doctor registration rules
- Scope of practice differences
- Telemedicine regulations
- Prescription authority

## Healthcare Quality Assessment

**Quality Indicators to Consider:**

| Factor | Assessment Method |
|--------|-------------------|
| Accreditation | JCI, national bodies |
| Outcomes | Volume-outcome data if available |
| Infrastructure | Equipment, technology level |
| Staff qualifications | Training, language |
| Infection control | Policies, rates if available |
| Patient rights | Policies, enforcement |

**Red Flags:**
- Reluctance to provide credentials
- No clear pricing information
- Pressure for immediate decisions
- Poor facility conditions
- Communication barriers not addressed
- No informed consent process

## Continuity of Care

**Before Travel:**
| Task | Purpose |
|------|---------|
| Medical summary | Provide history to foreign providers |
| Medication list | Enable prescription abroad |
| Vaccination records | May be required |
| Insurance verification | Confirm coverage |
| Emergency contacts | Coordinate if needed |

**After International Care:**
| Task | Purpose |
|------|---------|
| Complete records | Enable follow-up care |
| Discharge summary | Communicate diagnoses/treatment |
| Imaging/labs | Avoid repeat testing |
| Medication reconciliation | Ensure continuation |
| Follow-up plan | Define responsibilities |

**Telemedicine for Continuity:**
- Pre-travel consultations
- Real-time guidance during emergency
- Follow-up after care abroad
- Second opinions
- Prescription coordination

## Expatriate Healthcare

**Long-Term International Living:**

*Insurance Options:*
| Type | Coverage | Cost Considerations |
|------|----------|---------------------|
| Local insurance | Host country network | May be required by visa |
| International health | Global network | Premium costs, portability |
| US-based + rider | US-centric with international add-on | Limited network abroad |
| Hybrid | Combination approach | Complex administration |

*Establishing Care:*
- Register with local healthcare system
- Identify primary care provider
- Transfer medical records
- Understand emergency procedures
- Know evacuation options

**Children and Family:**
- Vaccination schedule differences
- School health requirements
- Pediatric specialist access
- Emergency consent documentation
- Insurance coverage verification

## Special Circumstances

**Chronic Disease Management:**
- Identify specialists before travel
- Ensure medication supply chain
- Know emergency protocols
- Consider destination capabilities
- Plan for possible evacuation

**Pregnancy:**
- Most airlines restrict after 36 weeks
- Insurance often excludes pregnancy
- Know delivery facility options
- Understand local obstetric standards
- Plan for complications

**Mental Health:**
- Services vary widely
- Stigma in some cultures
- Medication availability varies
- Consider telemedicine support
- Know crisis resources`,
      keyTerms: [
        { term: 'INCB', definition: 'International Narcotics Control Board; UN body governing international controlled substance regulations' },
        { term: 'coordination of benefits', definition: 'Process determining which insurance pays first when multiple policies apply' },
        { term: 'pre-authorization', definition: 'Insurance approval required before receiving certain treatments or services' },
        { term: 'medical evacuation', definition: 'Transport of patient to different location (often home country) for medical care' },
      ],
      clinicalNotes: 'For patients traveling with controlled substances, particularly opioids, provide a detailed letter including diagnosis, medication name (INN and brand), dosage, and duration. Some countries require this letter to be authenticated by the embassy.',
    },
    4: {
      level: 4,
      summary: 'Advanced international healthcare navigation encompasses global health system analysis, cross-border care agreements, international insurance frameworks, and strategic approaches to maintaining health while living or working globally.',
      explanation: `## Cross-Border Healthcare Frameworks

**European Union Directive 2011/24/EU:**

*Key Provisions:*
| Provision | Implication |
|-----------|-------------|
| Right to care in other EU states | Patient choice expansion |
| Reimbursement at home rate | Cost may differ from actual |
| Prior authorization for planned care | Process requirements |
| National Contact Points | Information provision |
| Recognition of prescriptions | Medication access |

*Limitations:*
- Reimbursement at home country rates (may be less than cost)
- Prior authorization requirements
- Does not cover long-term care
- Excludes organ transplantation
- Social care not included

**Bilateral Healthcare Agreements:**

*Examples:*
| Countries | Agreement Scope |
|-----------|-----------------|
| UK-Australia | Reciprocal emergency care |
| US-limited | Generally no agreements |
| Nordic countries | Enhanced cooperation |
| EU-third countries | Various agreements |

*Medicare/Social Security:*
- Medicare: No foreign coverage (rare exceptions)
- Social Security Totalization Agreements: Pension/disability only
- Medicaid: No foreign coverage
- VA: Limited foreign coverage for service-connected issues

## International Health Insurance Market

**Global Insurance Products:**

*Major International Insurers:*
| Insurer | Strength | Market Focus |
|---------|----------|--------------|
| Cigna Global | Network size | Expatriates |
| Aetna International | US expat focus | Americas-centric |
| BUPA Global | Breadth of coverage | UK/Commonwealth |
| Allianz Care | European network | EU focus |
| MSH International | Flexible plans | Global mobility |

*Policy Components:*
| Component | Considerations |
|-----------|----------------|
| Geographic area | Worldwide, regional, excluding US |
| Deductible | $0 to $10,000+ options |
| Lifetime maximum | $1M to unlimited |
| Evacuation coverage | Level and triggers |
| Mental health | Coverage limits, access |
| Maternity | Waiting periods, limits |
| Pre-existing | Exclusion or moratorium periods |

**Cost Drivers:**
- Age (exponential increase)
- Geographic region (US inclusion expensive)
- Plan benefits (comprehensive vs. catastrophic)
- Deductible selection
- Family composition

## Healthcare Quality Across Systems

**System Performance Metrics:**

*Commonwealth Fund Rankings:*
| Dimension | Top Performers |
|-----------|----------------|
| Access | Norway, UK, Netherlands |
| Care process | Australia, UK, New Zealand |
| Administrative efficiency | UK, Norway, Australia |
| Equity | UK, Germany, Netherlands |
| Health outcomes | Australia, Netherlands, Norway |

*Limitations of Rankings:*
- Different weighting methodologies
- Data availability varies
- Cultural context differences
- Focus on system-level, not facility-level

**Facility-Level Assessment:**

*Due Diligence Process:*
1. Accreditation verification (JCI, local)
2. Physician credential check
3. Outcomes data request
4. Infection rates inquiry
5. Patient volume for procedure
6. Technology assessment
7. Language capability
8. International patient experience

## Global Health Security

**Epidemic/Pandemic Preparedness:**

*Traveler Considerations:*
| Factor | Action |
|--------|--------|
| Disease outbreaks | Monitor WHO/CDC |
| Healthcare capacity | Assess destination |
| Insurance triggers | Understand evacuation criteria |
| Entry/exit requirements | Verify testing, vaccination |
| Quarantine protocols | Plan for possibility |

*Evacuation Criteria:*
- Medical: When local care inadequate
- Security: Political instability, natural disaster
- Pandemic: When borders closing
- Insurance triggers vary by policy

**Healthcare Infrastructure Assessment:**
| Indicator | Source |
|-----------|--------|
| Hospital beds per capita | World Bank |
| Physicians per capita | WHO |
| UHC Service Coverage Index | WHO |
| Health Security Index | NTI/JHU |

## Corporate Global Health Programs

**Duty of Care Requirements:**

*Employer Obligations:*
| Element | Implementation |
|---------|----------------|
| Pre-travel preparation | Risk assessment, briefing |
| Healthcare access | Insurance, provider networks |
| Emergency response | Assistance services |
| Repatriation | Medical and security |
| Follow-up | Post-trip medical surveillance |

*Assistance Services:*
- 24/7 medical helpline
- Provider network access
- Medical case management
- Evacuation coordination
- Security services

**Expatriate Health Management:**
- Pre-departure screening
- Destination health briefing
- In-country support
- Periodic health assessments
- Repatriation medical

## Digital Health Across Borders

**Telemedicine Regulatory Landscape:**

| Region | Regulation Status |
|--------|-------------------|
| EU | Variable by country |
| US | State-level complexity |
| Asia | Emerging frameworks |
| Gulf | Increasingly permissive |

*Cross-Border Telemedicine Issues:*
- Licensure requirements
- Prescribing authority
- Data privacy (GDPR, etc.)
- Liability jurisdiction
- Payment and reimbursement

**Digital Health Records:**
- Personal health record portability
- Interoperability challenges
- Language and coding differences
- Security during travel
- Cloud access considerations`,
      keyTerms: [
        { term: 'UHC Service Coverage Index', definition: 'WHO measure of essential health service coverage at the country level' },
        { term: 'totalization agreement', definition: 'Bilateral social security agreements preventing double taxation and ensuring benefit coverage' },
        { term: 'duty of care', definition: 'Employer legal and ethical obligation to protect employee health and safety' },
        { term: 'National Contact Point', definition: 'EU-mandated office providing information on cross-border healthcare rights' },
      ],
      clinicalNotes: 'Corporate duty of care extends to arranging appropriate healthcare access for business travelers and expatriates. Ensure comprehensive travel insurance with adequate evacuation coverage and access to quality provider networks.',
    },
    5: {
      level: 5,
      summary: 'Expert international healthcare analysis integrates global health governance, health system strengthening perspectives, international regulatory harmonization, and strategic healthcare diplomacy within evolving frameworks of universal health coverage.',
      explanation: `## Global Health Governance

**Key International Organizations:**

| Organization | Role | Relevance |
|--------------|------|-----------|
| WHO | Global health leadership | Standards, guidelines |
| World Bank | Health financing | System strengthening |
| GAVI | Vaccine alliance | Immunization access |
| Global Fund | HIV, TB, malaria | Disease programs |
| UNICEF | Maternal/child health | Supply chains |

**International Health Regulations (IHR 2005):**

*Core Capacities:*
| Capacity | Relevance to Travelers |
|----------|------------------------|
| Surveillance | Outbreak detection |
| Response | Containment measures |
| Laboratory | Diagnostic availability |
| Points of entry | Border health measures |
| Communication | Information access |

*Traveler Rights under IHR:*
- Cannot be subjected to invasive measures without consent
- Right to prior notification of measures
- Right to written health certificate
- Cannot be charged for required measures

## Universal Health Coverage Framework

**WHO UHC Cube:**
Three dimensions of coverage:
1. Population coverage (who)
2. Service coverage (what)
3. Financial protection (at what cost)

**Implications for Travelers:**

| UHC Status | Access Implications |
|------------|---------------------|
| Comprehensive UHC | Emergency care accessible |
| Partial UHC | Variable access, may pay |
| Limited UHC | Private care often needed |

*Country UHC Trajectories:*
- Thailand: Achieved high coverage
- India: Ayushman Bharat expanding
- US: Fragmented, high private role
- Low-income countries: External funding dependent

## Regulatory Harmonization

**Medication Regulatory Convergence:**

*Key Initiatives:*
| Initiative | Focus |
|------------|-------|
| ICH | Pharmaceutical regulation |
| WHO Prequalification | Quality assurance |
| Collaborative Registration | Mutual recognition |
| Pharmacopoeia harmonization | Standards alignment |

*Implications:*
- Increasing medication quality consistency
- Improved availability of generics
- Ongoing challenges in some regions
- Counterfeit medication risks persist

**Professional Credential Recognition:**

*Mutual Recognition Agreements:*
| Agreement | Scope |
|-----------|-------|
| EU Directive 2005/36 | Professional qualifications |
| Trans-Tasman (AU-NZ) | Medical registration |
| CARICOM | Caribbean mutual recognition |

*Challenges:*
- Training standard differences
- Licensing examination requirements
- Language proficiency
- Continuing education

## Healthcare Diplomacy

**Health as Foreign Policy:**

| Dimension | Example |
|-----------|---------|
| Soft power | Medical aid, disaster response |
| Economic diplomacy | Medical tourism promotion |
| Regional cooperation | Cross-border disease control |
| Development assistance | Health system strengthening |

**Medical Diplomacy Examples:**
- Cuban medical missions
- Chinese health silk road
- US PEPFAR program
- Gulf medical cities

**Implications for International Patients:**
- Government-supported facilities may welcome foreigners
- Political considerations may affect access
- Quality assurance may vary
- Long-term sustainability questions

## Health System Strengthening

**WHO Building Blocks:**

| Block | International Healthcare Relevance |
|-------|-----------------------------------|
| Service delivery | Quality of care available |
| Health workforce | Provider availability, training |
| Health information | Records, data systems |
| Essential medicines | Medication access |
| Financing | Cost, insurance, subsidies |
| Leadership/governance | Regulation, policy |

**Development Impact on Travelers:**
- Improved infrastructure expands options
- Training investments improve quality
- Technology adoption enhances access
- Sustainable systems provide reliability

## Future Trends

**Emerging Patterns:**

| Trend | Implication |
|-------|-------------|
| Digital health scaling | Remote care options expanding |
| Precision medicine globalization | Specialized care access |
| Climate health impacts | New health risks in travel |
| Antimicrobial resistance spread | Treatment challenges |
| Pandemic preparedness | Travel restrictions evolution |

**Technology Disruption:**
- AI-assisted diagnosis crossing borders
- Wearable health monitoring
- Blockchain health records
- Virtual reality rehabilitation
- Drone medication delivery

**Policy Evolution:**

*Expected Developments:*
| Area | Direction |
|------|-----------|
| Cross-border insurance | Greater portability |
| Telemedicine regulation | Increased liberalization |
| Data protection | Global frameworks emerging |
| Quality standards | International convergence |
| Price transparency | Growing requirements |

## Research Agenda

**Priority Questions:**

| Domain | Research Need |
|--------|---------------|
| Outcomes | International care quality comparison |
| Economics | Cost-effectiveness of care abroad |
| Safety | Complication rates, MDRO acquisition |
| Access | Barriers and facilitators |
| Equity | Who benefits, who is excluded |

**Methodological Challenges:**
- Data comparability
- Patient tracking across borders
- Confounding factors
- Publication bias
- Industry influence`,
      keyTerms: [
        { term: 'ICH', definition: 'International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use' },
        { term: 'health system strengthening', definition: 'Investments to improve healthcare delivery capacity sustainably' },
        { term: 'WHO building blocks', definition: 'Framework of six essential health system components for assessment and improvement' },
        { term: 'health diplomacy', definition: 'Use of health-related initiatives to advance foreign policy and international relations' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Global health governance frameworks directly impact individual traveler rights and protections
2. UHC progress varies widely - verify actual coverage before assuming access
3. Regulatory harmonization improves medication quality but regional differences persist
4. Health system strengthening in developing countries creates new quality care options
5. Digital health transformation will reshape international healthcare access
6. Climate change health impacts should factor into destination health planning
7. Research gaps mean evidence-based recommendations remain limited in many areas`,
    },
  },

  media: [
    {
      id: 'health-systems-map',
      type: 'diagram',
      filename: 'health-systems-map.svg',
      title: 'Global Health System Models',
      description: 'Map showing different healthcare system types around the world',
    },
    {
      id: 'insurance-decision-tree',
      type: 'diagram',
      filename: 'insurance-decision-tree.svg',
      title: 'International Insurance Decision Tree',
      description: 'Guide to selecting appropriate coverage for international healthcare',
    },
  ],

  citations: [
    {
      id: 'who-uhc',
      type: 'website',
      title: 'Universal Health Coverage',
      source: 'World Health Organization',
      url: 'https://www.who.int/health-topics/universal-health-coverage',
    },
    {
      id: 'commonwealth-fund',
      type: 'article',
      title: 'Mirror, Mirror: International Comparison of Health Systems',
      source: 'Commonwealth Fund',
      url: 'https://www.commonwealthfund.org/publications/fund-reports/2021/aug/mirror-mirror-2021-reflecting-poorly',
    },
  ],

  crossReferences: [
    { targetId: 'travel-medical-tourism-overview', targetType: 'concept', relationship: 'parent', label: 'Medical Tourism Overview' },
    { targetId: 'travel-health-overview', targetType: 'concept', relationship: 'related', label: 'Travel Health Overview' },
    { targetId: 'healthcare-navigation-insurance', targetType: 'concept', relationship: 'related', label: 'Understanding Health Insurance' },
  ],

  tags: {
    systems: ['general'],
    topics: ['travel-medicine', 'global-health', 'healthcare-navigation'],
    keywords: ['international healthcare', 'health systems', 'travel insurance', 'expatriate health'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default internationalHealthcare;
