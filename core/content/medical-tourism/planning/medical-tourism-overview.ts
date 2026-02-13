/**
 * Medical Tourism Overview - Medical Tourism/Planning
 *
 * Comprehensive content on traveling abroad for medical care, including
 * considerations, risks, benefits, and planning requirements.
 */

import { EducationalContent } from '../../types';

export const medicalTourismOverview: EducationalContent = {
  id: 'travel-medical-tourism-overview',
  type: 'concept',
  name: 'Medical Tourism Overview',
  alternateNames: ['Healthcare Travel', 'Medical Travel', 'Health Tourism'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical tourism means traveling to another country to receive medical treatment, often to save money or get procedures not available at home.',
      explanation: `Medical tourism is when people travel to other countries to get medical care. This has become more common as healthcare costs rise and travel becomes easier.

**Why People Travel for Medical Care:**
- **Save money:** Some treatments cost much less in other countries
- **Shorter wait times:** Skip long waiting lists at home
- **Access to treatments:** Get procedures not available locally
- **Combine with travel:** Recovery in a vacation setting

**Common Treatments People Travel For:**
- Dental work (crowns, implants, veneers)
- Cosmetic surgery (face lifts, tummy tucks)
- Orthopedic surgery (hip and knee replacements)
- Heart surgery
- Fertility treatments
- Weight loss surgery

**Popular Destinations:**
- Mexico (dental, bariatric surgery)
- Thailand (cosmetic surgery, complex procedures)
- India (heart surgery, orthopedics)
- Costa Rica (dental work)
- Turkey (hair transplants, cosmetic procedures)

**Things to Consider:**

**Benefits:**
- Significant cost savings (sometimes 50-80% less)
- High-quality care at accredited hospitals
- No waiting lists
- Recovery in pleasant environments

**Risks:**
- Communication barriers
- Different medical standards
- Complications after returning home
- Long flights after surgery
- Limited legal options if something goes wrong

**Before You Go:**
- Research the hospital and doctors thoroughly
- Check for international accreditation (JCI)
- Understand what is included in the cost
- Plan for follow-up care at home
- Get copies of all medical records
- Consider travel insurance that covers medical procedures

**Questions to Ask:**
- Is the hospital internationally accredited?
- What are the doctor's qualifications?
- What happens if there are complications?
- What is the total cost, including follow-up?
- How will records be shared with my home doctor?

**After You Return:**
- Share records with your home doctor
- Know warning signs of complications
- Have a plan for follow-up care
- Keep all documentation from the procedure`,
      keyTerms: [
        { term: 'medical tourism', definition: 'Traveling to another country specifically to receive medical treatment' },
        { term: 'accreditation', definition: 'Official recognition that a hospital meets certain quality and safety standards' },
        { term: 'follow-up care', definition: 'Medical appointments and care needed after a procedure to ensure proper healing' },
      ],
      analogies: [
        'Choosing a hospital abroad is like choosing a restaurant in a foreign country - you want to check reviews and credentials before committing.',
        'Medical tourism is like shopping for the best deal, except what you are buying is your health - so quality matters more than just price.',
      ],
      examples: [
        'Someone might travel to Mexico for dental implants that cost $4,000 instead of $15,000 at home.',
        'A patient needing a hip replacement might go to Thailand where the procedure plus travel costs less than just the surgery at home.',
      ],
      patientCounselingPoints: [
        'Always research hospitals and doctors thoroughly before traveling for care.',
        'Make sure your home doctor knows about your plans and can provide follow-up care.',
        'Understand that complications may be harder to address after you return home.',
      ],
    },
    2: {
      level: 2,
      summary: 'Medical tourism involves traveling internationally for healthcare services, requiring careful evaluation of facility accreditation, provider credentials, cost-benefit analysis, and coordination of pre- and post-operative care.',
      explanation: `## Understanding Medical Tourism

Medical tourism has grown into a multi-billion dollar industry as patients seek affordable, accessible, or specialized healthcare across borders.

**Global Market Overview:**
- Estimated 14-16 million medical tourists annually
- Market value: $50+ billion globally
- Growing 15-25% annually
- COVID-19 temporary disruption, now recovering

**Categories of Medical Tourists:**

| Type | Motivation | Example |
|------|------------|---------|
| Cost-driven | Lower prices abroad | US patient going to Mexico for dental |
| Quality-driven | Better outcomes elsewhere | Middle Eastern patient to US for cancer care |
| Access-driven | Treatment not available | Patient seeking experimental therapy |
| Wait-time driven | Shorter queues | Canadian seeking immediate surgery abroad |
| Combination-driven | Vacation + treatment | Cosmetic surgery + recovery in Thailand |

## Evaluating International Healthcare

**Hospital Accreditation:**

*Joint Commission International (JCI):*
- Gold standard for international accreditation
- Over 1,100 accredited facilities worldwide
- Evaluates safety, quality, infection control
- Reassessment every 3 years

*Other Accreditation Bodies:*
- ISQua (International Society for Quality in Health Care)
- ACHSI (Australian Council on Healthcare Standards International)
- Trent Accreditation Scheme (UK)
- National accreditation bodies (country-specific)

**Provider Credentials:**

| Credential to Verify | How to Verify |
|---------------------|---------------|
| Medical license | Country medical board |
| Specialty certification | Specialty boards |
| Training | Hospital, medical school records |
| Experience | Case volume, outcomes data |
| Language ability | Direct communication |

## Common Procedures by Region

| Region | Specialties | Cost Advantage |
|--------|-------------|----------------|
| Thailand | Cosmetic, cardiac, orthopedic | 50-80% savings |
| India | Cardiac, orthopedic, oncology | 60-90% savings |
| Mexico | Dental, bariatric, cosmetic | 40-70% savings |
| Turkey | Hair transplant, cosmetic, dental | 50-70% savings |
| Costa Rica | Dental, cosmetic | 40-60% savings |
| Singapore | Complex procedures, oncology | Quality-focused |
| Germany | Orthopedic, cardiac | Quality-focused |

## Financial Considerations

**What Costs to Include:**

| Category | Items |
|----------|-------|
| Medical | Procedure, hospital stay, medications, follow-up |
| Travel | Flights, local transport, companion travel |
| Accommodation | Recovery hotel, companion stay |
| Additional | Translation, insurance, contingency |

**Hidden Costs:**
- Airport transfers and local transport
- Extended stay if complications
- Companion meals and incidentals
- Pre-operative tests abroad
- Post-operative medications
- Follow-up care at home

**Insurance Considerations:**
- Standard travel insurance usually excludes planned procedures
- Medical tourism insurance available
- Some US insurers partner with international hospitals
- Verify coverage for complications

## Pre-Travel Planning

**Medical Preparation:**
1. Complete medical evaluation at home
2. Share full medical history with overseas provider
3. Get required tests/imaging before travel
4. Obtain home physician clearance
5. Discuss anesthesia risks with provider

**Documentation Needed:**
- Passport (valid for 6+ months)
- Visa (if required)
- Medical records (translated if needed)
- Insurance documents
- Emergency contacts
- Return itinerary

**Communication Planning:**
- Language capabilities of facility
- Translation services available
- Communication method with home physician
- Emergency contact protocol

## Post-Procedure Considerations

**Before Leaving Destination:**
- Complete discharge summary
- All operative reports
- Imaging and pathology results
- Medication list and instructions
- Follow-up schedule
- Emergency contact numbers

**Upon Return Home:**
- Establish care with local physician
- Schedule follow-up appointments
- Report any concerning symptoms immediately
- Maintain communication with overseas team
- Complete physical therapy if prescribed`,
      keyTerms: [
        { term: 'JCI', definition: 'Joint Commission International; the leading global healthcare accreditation organization' },
        { term: 'medical facilitator', definition: 'Company or individual that arranges medical tourism packages including travel, treatment, and accommodation' },
        { term: 'discharge summary', definition: 'Document describing the hospital stay, procedures performed, and follow-up instructions' },
        { term: 'continuity of care', definition: 'Coordination between healthcare providers to ensure consistent, connected treatment over time' },
      ],
      analogies: [
        'JCI accreditation is like a Michelin star for hospitals - it tells you the facility has been independently evaluated and meets high standards.',
        'Planning medical tourism is like planning a complex trip - you need to think about transportation, accommodation, and what happens if things do not go as planned.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical tourism requires comprehensive risk-benefit analysis including clinical outcomes data, infection control standards, legal frameworks, and systematic coordination of care across healthcare systems.',
      explanation: `## Clinical Quality Assessment

**Outcomes Evaluation:**

*What to Request:*
| Metric | Importance |
|--------|------------|
| Procedure volume | Skill maintenance |
| Mortality rates | Safety indicator |
| Complication rates | Quality measure |
| Readmission rates | Outcome indicator |
| Infection rates | Safety and hygiene |

*Limitations:*
- International data not always comparable
- Definitions may vary
- Self-reported data has bias
- Case mix differences

**Infection Control Considerations:**

*Higher Risk in Medical Tourism:*
- Hospital-acquired infections
- Multi-drug resistant organisms
- Different antibiotic resistance patterns
- Post-operative infections after travel

*Antimicrobial Resistance Concerns:*
| Region | Resistance Patterns |
|--------|---------------------|
| South Asia | High ESBL, CRE rates |
| Southeast Asia | NDM-producing organisms |
| Latin America | Variable by country |
| Eastern Europe | KPC producers |

*Screening Recommendations:*
- Consider screening for MDROs upon return
- Alert home physicians to travel history
- Isolation if hospitalized with infection post-travel

## Legal and Ethical Framework

**Medical Malpractice Considerations:**

| Factor | Impact |
|--------|--------|
| Jurisdiction | Foreign laws apply |
| Statute of limitations | Often shorter abroad |
| Documentation | May be in foreign language |
| Expert witnesses | Difficult to obtain |
| Legal costs | May exceed potential recovery |
| Enforcement | Judgments may not be enforceable |

**Informed Consent:**
- Standards vary by country
- Documentation practices differ
- Language barriers affect understanding
- May be less detailed than US/UK standards

**Ethical Concerns:**

*Organ Transplantation Tourism:*
- Exploitation of donors in some countries
- "Transplant tourism" to circumvent waiting lists
- Istanbul Declaration against organ trafficking
- Many countries have banned foreigners from transplant lists

*Stem Cell Tourism:*
- Unproven treatments marketed
- Lack of regulatory oversight
- Potential for harm
- Financial exploitation of desperate patients

## Care Coordination

**Pre-Operative Communication:**

*Information to Share with International Team:*
| Category | Details |
|----------|---------|
| Medical history | Conditions, surgeries, allergies |
| Medications | Complete list with doses |
| Test results | Recent labs, imaging |
| Anesthesia history | Prior reactions |
| Functional status | Baseline function |

**Telemedicine Integration:**
- Pre-travel video consultations
- Review of medical records
- Post-operative follow-up
- Complication assessment remotely

**Handoff to Home Team:**

*Essential Information:*
- Detailed operative report
- Pathology results (if applicable)
- Imaging with readings
- Discharge medications
- Therapy protocols
- Red flags to watch for
- Contact information for questions

## Procedure-Specific Considerations

**Orthopedic Surgery:**
- DVT risk during travel
- Timing of flight after surgery
- Physical therapy coordination
- Implant information for airport security
- Long-term follow-up requirements

**Cosmetic Surgery:**
- Healing time before flying
- Compression garment requirements
- Sun exposure restrictions
- Revision surgery policies
- Managing expectations

**Dental Procedures:**
- Multiple appointments may be needed
- Laboratory work turnaround time
- Emergency dental care after return
- Material quality verification

**Cardiac Surgery:**
- Cardiac rehabilitation arrangements
- Medication management
- Emergency plan during travel
- Clearance to fly timing

## Risk Mitigation Strategies

**Facility Selection:**
| Criterion | How to Verify |
|-----------|---------------|
| Accreditation | JCI website, certificates |
| Physician credentials | Medical boards, hospitals |
| Technology | Facility tours, specifications |
| Language services | Direct inquiry |
| International patient volume | Program statistics |

**Travel Timing:**
- Allow adequate recovery before flying
- Avoid deep vein thrombosis risk
- Plan for possible delays/complications
- Consider one-way flexible return ticket

**Documentation:**
- Obtain copies before leaving
- Digital backup of all records
- Translation of key documents
- Insurance documentation`,
      keyTerms: [
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzymes that make bacteria resistant to many antibiotics' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacteriaceae; highly resistant bacteria that are difficult to treat' },
        { term: 'Istanbul Declaration', definition: 'International consensus statement against organ trafficking and transplant tourism' },
        { term: 'handoff', definition: 'Transfer of care responsibility between providers, requiring complete information exchange' },
      ],
      clinicalNotes: 'Patients returning from medical tourism, especially from South Asia, should be considered at risk for multi-drug resistant organism colonization. If hospitalized for any complication, consider contact precautions and screening cultures.',
    },
    4: {
      level: 4,
      summary: 'Advanced medical tourism analysis encompasses health system comparisons, quality measurement frameworks, international regulatory landscapes, and emerging models of cross-border healthcare delivery.',
      explanation: `## Health System Comparative Analysis

**Quality Metrics Across Systems:**

| Country | Strength | Limitation |
|---------|----------|------------|
| Thailand | Established infrastructure, JCI facilities | Variable outside major centers |
| India | High volumes, experienced surgeons | Infection control variability |
| Singapore | Excellence, safety | Higher costs |
| Mexico | Proximity, border programs | Variable standards |
| Turkey | Modernization, specialization | Limited outcomes data |

**Accreditation Landscape:**

*JCI-Accredited Facilities (Top Countries):*
| Country | JCI Hospitals |
|---------|---------------|
| UAE | 180+ |
| China | 100+ |
| Brazil | 50+ |
| Thailand | 50+ |
| India | 40+ |

*Accreditation Process:*
1. Application and self-assessment
2. On-site survey by international team
3. Standards assessment across dimensions
4. Accreditation decision (3 years)
5. Ongoing monitoring and triennial renewal

## International Patient Programs

**Dedicated International Units:**

*Components:*
| Service | Function |
|---------|----------|
| Patient coordination | Single point of contact |
| Language services | Interpreters, translated materials |
| Insurance liaison | Verification, claims processing |
| Concierge services | Travel, accommodation, logistics |
| Medical records | Compilation, translation, transfer |

*Quality Indicators for International Programs:*
- Dedicated staff ratios
- Interpreter availability 24/7
- Average response time
- Complication management protocols
- Outcomes tracking by nationality

**Corporate and Insurer Programs:**

*Employer Medical Tourism:*
- Self-insured employers sending employees abroad
- Shared savings models
- Quality vetting by employer/TPA
- Comprehensive package arrangements
- Domestic follow-up coordination

*Insurer Partnerships:*
- Blue Cross Global partnerships
- Cigna international network
- Aetna Global Benefits
- Direct contracts with centers of excellence

## Regulatory Framework

**Destination Country Regulations:**

| Aspect | Variation |
|--------|-----------|
| Licensure requirements | Some countries accept foreign licenses |
| Advertising restrictions | Variable enforcement |
| Outcome reporting | Not universal |
| Malpractice framework | Often less developed |
| Patient rights protections | Variable |

**Home Country Considerations:**

*US:*
- No federal oversight of medical tourism
- State medical boards have no jurisdiction abroad
- CMS does not cover foreign services
- HIPAA does not apply to foreign facilities

*UK:*
- NHS provides information but not oversight
- NICE guidelines do not apply abroad
- Private care coordination available

**Emerging Regulatory Trends:**
- Increasing JCI adoption as standard
- Patient safety collaboratives
- Cross-border data sharing frameworks
- International patient registries

## Outcomes Research

**Challenges in Medical Tourism Research:**

| Challenge | Impact |
|-----------|--------|
| Selection bias | Healthier patients travel |
| Lost to follow-up | Complications unreported |
| Data standards | Non-comparable metrics |
| Publication bias | Positive outcomes published |
| Conflict of interest | Industry-funded research |

**Available Evidence:**

*Cardiac Surgery:*
- Indian cardiac surgery outcomes comparable to US
- High-volume centers show excellent results
- Selection of healthier patients likely

*Orthopedics:*
- Limited long-term outcomes data
- Implant quality concerns in some settings
- Physical therapy coordination challenges

*Cosmetic Surgery:*
- Complication rates similar when controlled for facility
- Higher revision rates reported in some series
- Patient satisfaction generally high

## Technology and Innovation

**Telemedicine Integration:**

| Phase | Application |
|-------|-------------|
| Pre-travel | Virtual consultation, records review |
| Travel planning | Logistics coordination |
| Post-operative | Remote follow-up, wound assessment |
| Complication | Urgent video consultation |
| Long-term | Ongoing monitoring |

**Digital Health Applications:**
- Secure messaging platforms
- Image sharing for wound assessment
- Medication reminder apps
- Physical therapy video guidance
- Complication reporting tools

**Artificial Intelligence:**
- Chatbots for initial inquiries
- Cost estimation tools
- Quality prediction models
- Language translation
- Scheduling optimization

## Emerging Models

**Regional Medical Hubs:**
- Dubai Health City
- Singapore Medical Hub
- Seoul Medical Tourism
- Mayo Clinic Global Locations

**Hybrid Models:**
- Procedure abroad, follow-up at home
- Domestic consultation, international surgery
- Rehabilitation tourism
- Second opinion tourism

**Quality Improvement Initiatives:**
- Patient safety collaboratives
- Outcomes registries
- Best practice sharing
- Training partnerships`,
      keyTerms: [
        { term: 'centers of excellence', definition: 'Facilities recognized for exceptional quality in specific procedures, often contracted by insurers' },
        { term: 'self-insured employer', definition: 'Company that assumes financial risk for employee healthcare rather than purchasing insurance' },
        { term: 'third-party administrator', definition: 'Organization that manages health benefits for self-insured employers' },
        { term: 'shared savings', definition: 'Model where cost reductions are split between payer and patient/employer' },
      ],
      clinicalNotes: 'Corporate medical tourism programs with quality vetting may offer safer options than independent medical tourism. Inquire about employer or insurer partnerships with international facilities before arranging care independently.',
    },
    5: {
      level: 5,
      summary: 'Expert medical tourism analysis integrates global health policy perspectives, health equity considerations, international quality frameworks, and strategic healthcare planning within evolving cross-border care delivery systems.',
      explanation: `## Global Health Policy Context

**Healthcare Globalization Trends:**

| Trend | Impact |
|-------|--------|
| Rising costs in developed countries | Push factor for patients |
| Quality improvement in developing regions | Pull factor |
| Digital health enabling remote care | Coordination facilitator |
| Regulatory evolution | Standards raising |
| Insurance model innovation | Access expansion |

**WHO Perspective:**

*Cross-Border Healthcare Concerns:*
- Health workforce drain from developing countries
- Quality and safety standardization needs
- Patient rights protection gaps
- Data protection and privacy
- Continuity of care challenges

**Regional Frameworks:**

*European Union:*
- Directive 2011/24/EU on cross-border healthcare
- National contact points for information
- Prior authorization frameworks
- Reimbursement mechanisms
- Quality assurance requirements

*GCC Countries:*
- Medical tourism strategy development
- Healthcare free zones
- International partnerships
- Quality mandates

## Health Equity Considerations

**Ethical Dimensions:**

| Issue | Consideration |
|-------|---------------|
| Brain drain | High-end tourism draws resources from local population |
| Two-tier systems | International wings vs. local services |
| Resource allocation | Investment in tourism vs. public health |
| Access disparities | Only wealthy can travel for care |
| Exploitation risk | Developing country workers, donors |

**Sustainable Medical Tourism:**
- Integration with local health system development
- Training and technology transfer
- Employment creation
- Infrastructure improvement
- Equitable resource sharing

**Organ Transplantation Ethics:**

*International Standards:*
- Declaration of Istanbul (2008)
- WHO Guiding Principles
- Transparency of donor sources
- Prohibition of payment for organs
- Living donor protections

*Enforcement Challenges:*
- Difficult to monitor
- Financial incentives strong
- Desperate patients vulnerable
- Variable legal frameworks

## Quality Framework Evolution

**International Quality Standards:**

*Comparison of Accreditation Bodies:*
| Organization | Focus | Strengths |
|--------------|-------|-----------|
| JCI | Hospital-wide | Comprehensive, global recognition |
| ISQua | Standards for standards | Meta-level quality |
| ACHSI | Australian model | Rigorous, outcome-focused |
| DNV | Healthcare certification | Engineering rigor |

*Next-Generation Quality Measures:*
- Patient-reported outcomes (PROMs)
- Patient-reported experience (PREMs)
- Real-time outcome dashboards
- Comparative effectiveness data
- Value-based metrics

**Quality Improvement Science Application:**

| Method | Application |
|--------|-------------|
| Lean methodology | Process efficiency |
| Six Sigma | Defect reduction |
| High Reliability Organization | Safety culture |
| Plan-Do-Study-Act | Continuous improvement |

## Strategic Healthcare Planning

**National Medical Tourism Strategies:**

*Elements of Successful Programs:*
| Component | Description |
|-----------|-------------|
| Government support | Policy frameworks, incentives |
| Infrastructure investment | Facilities, transport, hospitality |
| Workforce development | Training, language skills |
| Marketing | Brand development, targeting |
| Quality mandate | Accreditation requirements |
| Legal framework | Patient protections, malpractice |

*Competitive Differentiation:*
- Cost leadership (India, Mexico)
- Quality leadership (Singapore, Germany)
- Specialization (Turkey - hair transplant, Costa Rica - dental)
- Experience (Thailand - service excellence)

**Facility Strategic Planning:**

*International Patient Program Development:*
1. Market analysis and targeting
2. Accreditation achievement
3. Language and cultural competency
4. Pricing strategy
5. Distribution channel development
6. Outcomes tracking implementation
7. Continuous improvement

## Emerging Technologies

**Artificial Intelligence Applications:**

| Application | Potential Impact |
|-------------|------------------|
| Quality prediction | Facility and provider selection |
| Cost estimation | Accurate comprehensive pricing |
| Translation | Real-time communication |
| Diagnosis support | Pre-travel consultation |
| Complication detection | Post-operative monitoring |

**Blockchain Applications:**
- Medical record portability
- Credential verification
- Smart contracts for payments
- Supply chain transparency (medications, implants)

**Virtual Reality:**
- Facility tours pre-travel
- Surgical planning
- Rehabilitation
- Patient education

## Future Directions

**Post-Pandemic Evolution:**

| Change | Implication |
|--------|-------------|
| Telemedicine adoption | More hybrid models |
| Infection control awareness | Patient scrutiny increased |
| Travel uncertainty | Demand for flexibility |
| Healthcare cost pressures | Medical tourism growth driver |
| Digital health tools | Better coordination possible |

**Regulatory Convergence:**
- International safety standards
- Mutual recognition agreements
- Cross-border data frameworks
- Quality metric harmonization

**Research Priorities:**
| Priority | Need |
|----------|------|
| Outcomes research | Long-term data across procedures |
| Safety surveillance | International complication tracking |
| Cost-effectiveness | Comparative economic analyses |
| Patient experience | Journey mapping, satisfaction |
| Equity analysis | Access and impact studies |`,
      keyTerms: [
        { term: 'Directive 2011/24/EU', definition: 'European Union directive establishing patient rights to cross-border healthcare within the EU' },
        { term: 'Declaration of Istanbul', definition: 'International statement of principles against organ trafficking and unethical transplant tourism' },
        { term: 'PROMs', definition: 'Patient-Reported Outcome Measures; assessments of health outcomes directly from patients' },
        { term: 'high reliability organization', definition: 'Organization achieving consistent safety performance through specific cultural and operational characteristics' },
      ],
      clinicalNotes: `Expert Practice Points:
1. EU directive provides framework for cross-border care within Europe - model for other regions
2. Sustainable medical tourism should benefit destination country health systems, not just extract resources
3. Organ transplantation tourism remains ethically problematic despite Declaration of Istanbul
4. Next-generation quality measurement will emphasize patient-reported outcomes
5. AI and digital health technologies will transform medical tourism coordination
6. Post-pandemic trends favor hybrid models with telemedicine integration
7. Research gaps remain significant - outcomes data is limited for most procedures`,
    },
  },

  media: [
    {
      id: 'medical-tourism-process',
      type: 'diagram',
      filename: 'medical-tourism-process.svg',
      title: 'Medical Tourism Planning Process',
      description: 'Step-by-step guide to planning international medical care',
    },
    {
      id: 'destination-comparison',
      type: 'diagram',
      filename: 'destination-comparison.svg',
      title: 'Medical Tourism Destination Comparison',
      description: 'Comparison of popular medical tourism destinations by specialty and cost',
    },
  ],

  citations: [
    {
      id: 'jci-standards',
      type: 'website',
      title: 'Joint Commission International Accreditation Standards',
      source: 'Joint Commission International',
      url: 'https://www.jointcommissioninternational.org/',
    },
    {
      id: 'cdc-medical-tourism',
      type: 'website',
      title: 'Medical Tourism',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism',
    },
  ],

  crossReferences: [
    { targetId: 'travel-international-healthcare', targetType: 'concept', relationship: 'child', label: 'International Healthcare' },
    { targetId: 'travel-health-overview', targetType: 'concept', relationship: 'related', label: 'Travel Health Overview' },
    { targetId: 'patient-safety-overview', targetType: 'concept', relationship: 'related', label: 'Patient Safety' },
  ],

  tags: {
    systems: ['general'],
    topics: ['travel-medicine', 'healthcare-navigation', 'global-health'],
    keywords: ['medical tourism', 'international healthcare', 'JCI accreditation', 'healthcare abroad'],
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

export default medicalTourismOverview;
