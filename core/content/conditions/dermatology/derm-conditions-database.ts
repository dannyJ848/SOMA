/**
 * Dermatology Conditions Database
 *
 * Comprehensive reference of dermatological conditions with
 * clinical summaries, patient education, and treatment guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DermCategory =
  | 'inflammatory'
  | 'infectious'
  | 'neoplastic'
  | 'autoimmune'
  | 'allergic';

export interface DermConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: DermCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const DERM_CONDITIONS: Record<string, DermConditionEntry> = {
  'psoriasis': {
    id: 'psoriasis',
    name: 'Psoriasis',
    nameEs: 'Psoriasis',
    category: 'inflammatory',
    icd11: 'EA90',
    description: 'Chronic autoimmune inflammatory skin disease characterized by well-demarcated erythematous plaques with silvery scales. Results from hyperproliferation of keratinocytes and immune dysregulation. Can affect joints (psoriatic arthritis) in 30% of cases.',
    descriptionEs: 'Enfermedad cutánea inflamatoria autoinmune crónica caracterizada por placas eritematosas bien delimitadas con escamas plateadas. Resulta de la hiperproliferación de queratinocitos y desregulación inmunitaria. Puede afectar las articulaciones (artritis psoriásica) en el 30% de los casos.',
    riskFactors: ['Family history', 'Stress', 'Smoking', 'Obesity', 'Infections (streptococcal)', 'Certain medications (beta-blockers, lithium)', 'Alcohol consumption', 'Trauma to skin (Koebner phenomenon)'],
    pathophysiology: 'Immune-mediated disorder driven by T-cell activation and cytokine release (TNF-alpha, IL-17, IL-23). Leads to accelerated keratinocyte turnover (3-5 days vs normal 28 days) and chronic inflammation. Genetic predisposition with environmental triggers.',
    pathophysiologyEs: 'Trastorno inmunomediado impulsado por activación de células T y liberación de citocinas (TNF-alfa, IL-17, IL-23). Conduce a recambio acelerado de queratinocitos (3-5 días vs 28 días normales) e inflamación crónica. Predisposición genética con desencadenantes ambientales.',
    symptoms: ['Raised red plaques with silvery-white scales', 'Itching and burning', 'Dry, cracked skin that may bleed', 'Nail pitting or thickening', 'Joint pain and swelling (if psoriatic arthritis)', 'Scalp scaling'],
    diagnostics: {
      tests: ['Clinical diagnosis based on appearance', 'Skin biopsy (if atypical presentation)', 'KOH prep to rule out fungal infection'],
      imaging: ['X-rays or MRI for psoriatic arthritis evaluation'],
      criteria: ['Well-demarcated plaques', 'Auspitz sign (pinpoint bleeding when scales removed)', 'Koebner phenomenon (lesions at trauma sites)']
    },
    treatment: {
      medications: ['Topical corticosteroids', 'Vitamin D analogues (calcipotriene)', 'Topical retinoids (tazarotene)', 'Methotrexate for moderate-severe disease', 'Biologics (TNF inhibitors, IL-17/IL-23 inhibitors)', 'Oral retinoids (acitretin)'],
      procedures: ['Phototherapy (UVB, PUVA)', 'Excimer laser for localized plaques'],
      lifestyle: ['Daily moisturization', 'Stress management', 'Avoid triggers (alcohol, smoking)', 'Gentle skin care (avoid scrubbing)', 'Maintain healthy weight']
    },
    emergencySigns: ['Widespread pustular eruption with fever', 'Erythroderma (>90% body surface involvement)', 'Severe joint pain with deformity', 'Signs of infection in plaques'],
    patientExplanation: 'Psoriasis is a chronic skin condition where your immune system mistakenly speeds up skin cell growth. Instead of shedding gradually, skin cells build up too quickly, creating thick, scaly patches. It is not contagious. While there is no cure, treatments can control symptoms and clear your skin for long periods. Stress, infections, and certain medications can trigger flares.',
    patientExplanationEs: 'La psoriasis es una condición crónica de la piel donde su sistema inmunológico acelera erróneamente el crecimiento de células cutáneas. En lugar de desprenderse gradualmente, las células se acumulan demasiado rápido, creando parches gruesos y escamosos. No es contagiosa. Aunque no hay cura, los tratamientos pueden controlar los síntomas y limpiar su piel por períodos prolongados. El estrés, infecciones y ciertos medicamentos pueden desencadenar brotes.'
  },

  'atopic-dermatitis': {
    id: 'atopic-dermatitis',
    name: 'Atopic Dermatitis (Eczema)',
    nameEs: 'Dermatitis Atópica (Eczema)',
    category: 'inflammatory',
    icd11: 'EA80',
    description: 'Chronic inflammatory skin disease characterized by pruritic, erythematous, eczematous lesions. Often begins in childhood and associated with other atopic conditions (asthma, allergic rhinitis). Results from skin barrier dysfunction and immune dysregulation.',
    descriptionEs: 'Enfermedad cutánea inflamatoria crónica caracterizada por lesiones pruriginosas, eritematosas y eccematosas. A menudo comienza en la infancia y se asocia con otras condiciones atópicas (asma, rinitis alérgica). Resulta de disfunción de la barrera cutánea y desregulación inmunitaria.',
    riskFactors: ['Family history of atopy', 'Personal history of asthma or allergic rhinitis', 'Environmental allergens', 'Dry climate', 'Frequent bathing with hot water', 'Irritating soaps and detergents', 'Stress', 'Food allergies (in children)'],
    pathophysiology: 'Impaired skin barrier function due to filaggrin gene mutations allows increased transepidermal water loss and allergen penetration. Th2-dominant immune response with elevated IgE leads to chronic inflammation. Itch-scratch cycle perpetuates disease.',
    pathophysiologyEs: 'Función de barrera cutánea deteriorada por mutaciones del gen filagrina permite mayor pérdida de agua transepidérmica y penetración de alérgenos. Respuesta inmune dominante Th2 con IgE elevada conduce a inflamación crónica. El ciclo de picazón-rascado perpetúa la enfermedad.',
    symptoms: ['Intense itching (worse at night)', 'Dry, sensitive skin', 'Red to brownish-gray patches', 'Small raised bumps that may leak fluid', 'Thickened, cracked, scaly skin', 'Raw, swollen skin from scratching'],
    diagnostics: {
      tests: ['Clinical diagnosis (Hanifin-Rajka criteria)', 'Serum IgE levels (often elevated)', 'Allergy testing (patch test, specific IgE)', 'Skin biopsy (rarely needed)'],
      imaging: [],
      criteria: ['Pruritus', 'Typical morphology and distribution', 'Chronic or relapsing course', 'Personal or family history of atopy']
    },
    treatment: {
      medications: ['Topical corticosteroids (first-line)', 'Topical calcineurin inhibitors (tacrolimus, pimecrolimus)', 'Oral antihistamines for itch', 'Dupilumab (biologic for moderate-severe)', 'JAK inhibitors (upadacitinib, abrocitinib)', 'Short-course oral corticosteroids for severe flares'],
      procedures: ['Phototherapy (narrowband UVB)', 'Wet wrap therapy'],
      lifestyle: ['Frequent emollient application (multiple times daily)', 'Lukewarm baths with colloidal oatmeal', 'Fragrance-free, hypoallergenic products', 'Avoid triggers (irritants, allergens)', 'Cotton clothing', 'Humidifier use in dry environments']
    },
    emergencySigns: ['Widespread skin infection (impetigo, cellulitis)', 'Eczema herpeticum (widespread herpes simplex)', 'Severe flare unresponsive to treatment', 'Erythroderma'],
    patientExplanation: 'Atopic dermatitis, or eczema, is a chronic condition where your skin barrier does not work properly, making skin dry and vulnerable to irritants and allergens. This triggers inflammation and intense itching. It often runs in families with asthma or allergies. While it cannot be cured, you can manage it by moisturizing regularly, avoiding triggers, and using prescribed medications during flares.',
    patientExplanationEs: 'La dermatitis atópica, o eczema, es una condición crónica donde la barrera de su piel no funciona correctamente, haciendo que la piel esté seca y vulnerable a irritantes y alérgenos. Esto desencadena inflamación y picazón intensa. A menudo es hereditaria en familias con asma o alergias. Aunque no se puede curar, puede manejarla hidratando regularmente, evitando desencadenantes y usando medicamentos recetados durante los brotes.'
  },

  'melanoma': {
    id: 'melanoma',
    name: 'Melanoma',
    nameEs: 'Melanoma',
    category: 'neoplastic',
    icd11: '2C30',
    description: 'Malignant tumor of melanocytes with high metastatic potential. Most dangerous form of skin cancer. Early detection is critical as prognosis correlates with depth of invasion (Breslow thickness).',
    descriptionEs: 'Tumor maligno de melanocitos con alto potencial metastásico. La forma más peligrosa de cáncer de piel. La detección temprana es crítica ya que el pronóstico se correlaciona con la profundidad de invasión (grosor de Breslow).',
    riskFactors: ['UV exposure (sun, tanning beds)', 'Fair skin, light hair/eyes', 'History of sunburns', 'Multiple or atypical moles', 'Family history of melanoma', 'Immunosuppression', 'Personal history of melanoma', 'Xeroderma pigmentosum'],
    pathophysiology: 'Malignant transformation of melanocytes due to UV-induced DNA damage and oncogenic mutations (BRAF, NRAS, c-KIT). Uncontrolled proliferation with ability to invade dermis and metastasize via lymphatics or blood. Vertical growth phase indicates increased metastatic risk.',
    pathophysiologyEs: 'Transformación maligna de melanocitos debido a daño del ADN inducido por UV y mutaciones oncogénicas (BRAF, NRAS, c-KIT). Proliferación descontrolada con capacidad de invadir dermis y hacer metástasis vía linfática o sanguínea. La fase de crecimiento vertical indica mayor riesgo metastásico.',
    symptoms: ['New or changing mole', 'Asymmetry of lesion', 'Border irregularity', 'Color variation (multiple colors)', 'Diameter >6mm', 'Evolution (changing size, shape, color)', 'Bleeding or crusting', 'Itching or tenderness'],
    diagnostics: {
      tests: ['Excisional biopsy with margins (gold standard)', 'Sentinel lymph node biopsy (if indicated)', 'Dermoscopy', 'Histopathologic examination with Breslow thickness', 'Molecular testing (BRAF, NRAS mutations)'],
      imaging: ['CT chest/abdomen/pelvis for staging', 'PET scan for metastatic disease', 'Brain MRI if neurologic symptoms'],
      criteria: ['ABCDE criteria (Asymmetry, Border, Color, Diameter, Evolution)', 'Ugly duckling sign (lesion different from others)']
    },
    treatment: {
      medications: ['Immunotherapy (pembrolizumab, nivolumab for advanced)', 'Targeted therapy (BRAF/MEK inhibitors if BRAF-mutant)', 'Interferon-alpha (adjuvant for high-risk)', 'Chemotherapy (dacarbazine - less common now)'],
      procedures: ['Wide local excision with appropriate margins', 'Sentinel lymph node biopsy', 'Lymph node dissection (if positive nodes)', 'Mohs surgery (for lentigo maligna subtype)', 'Radiation therapy (adjuvant or palliative)'],
      lifestyle: ['Sun protection (SPF 30+ sunscreen, protective clothing)', 'Avoid tanning beds', 'Monthly self-skin exams', 'Regular dermatology follow-up', 'Vitamin D supplementation if sun avoidance']
    },
    emergencySigns: ['Rapidly growing or changing lesion', 'Ulceration or significant bleeding', 'Firm subcutaneous nodules (metastases)', 'Neurologic symptoms', 'Persistent cough or dyspnea', 'Unexplained weight loss'],
    patientExplanation: 'Melanoma is the most serious type of skin cancer, developing from pigment-producing cells. It can spread to other organs if not caught early. The ABCDE rule helps identify suspicious moles: Asymmetry, irregular Borders, multiple Colors, Diameter over 6mm, and Evolution (changes). Early melanoma is highly curable with surgery. Protect your skin from the sun and check your skin monthly for new or changing spots.',
    patientExplanationEs: 'El melanoma es el tipo más grave de cáncer de piel, desarrollándose de células productoras de pigmento. Puede diseminarse a otros órganos si no se detecta temprano. La regla ABCDE ayuda a identificar lunares sospechosos: Asimetría, Bordes irregulares, múltiples Colores, Diámetro mayor de 6mm y Evolución (cambios). El melanoma temprano es altamente curable con cirugía. Proteja su piel del sol y revise su piel mensualmente en busca de manchas nuevas o cambiantes.'
  },

  'acne-vulgaris': {
    id: 'acne-vulgaris',
    name: 'Acne Vulgaris',
    nameEs: 'Acné Vulgar',
    category: 'inflammatory',
    icd11: 'ED80',
    description: 'Common inflammatory disorder of pilosebaceous units characterized by comedones, papules, pustules, and nodules. Primarily affects adolescents but can persist into adulthood. Can lead to scarring and psychological distress.',
    descriptionEs: 'Trastorno inflamatorio común de unidades pilosebáceas caracterizado por comedones, pápulas, pústulas y nódulos. Afecta principalmente a adolescentes pero puede persistir en la edad adulta. Puede conducir a cicatrices y angustia psicológica.',
    riskFactors: ['Puberty and hormonal changes', 'Family history', 'Androgens', 'Certain medications (corticosteroids, lithium)', 'Cosmetics and hair products', 'High glycemic diet', 'Stress', 'Polycystic ovary syndrome'],
    pathophysiology: 'Four key factors: increased sebum production (androgen-mediated), follicular hyperkeratinization causing obstruction, Cutibacterium acnes colonization, and inflammatory response. Hormonal influence leads to sebaceous gland hyperactivity during puberty.',
    pathophysiologyEs: 'Cuatro factores clave: producción aumentada de sebo (mediada por andrógenos), hiperqueratinización folicular causando obstrucción, colonización por Cutibacterium acnes, y respuesta inflamatoria. La influencia hormonal conduce a hiperactividad de glándulas sebáceas durante la pubertad.',
    symptoms: ['Comedones (blackheads and whiteheads)', 'Inflammatory papules and pustules', 'Nodules and cysts (in severe cases)', 'Facial involvement (most common)', 'Back, chest, and shoulder involvement', 'Post-inflammatory hyperpigmentation', 'Scarring'],
    diagnostics: {
      tests: ['Clinical diagnosis', 'Hormonal evaluation if irregular menses or hirsutism', 'Culture if antibiotic-resistant'],
      imaging: [],
      criteria: ['Presence of comedones, papules, pustules, nodules', 'Distribution in sebaceous areas', 'Severity grading (mild, moderate, severe)']
    },
    treatment: {
      medications: ['Topical retinoids (tretinoin, adapalene)', 'Benzoyl peroxide', 'Topical antibiotics (clindamycin, erythromycin)', 'Oral antibiotics (doxycycline, minocycline)', 'Combined oral contraceptives (for women)', 'Spironolactone (anti-androgen for women)', 'Isotretinoin (for severe, refractory cases)'],
      procedures: ['Comedone extraction', 'Intralesional corticosteroid injection for nodules', 'Chemical peels', 'Laser therapy for scarring', 'Microneedling for scars'],
      lifestyle: ['Gentle cleansing twice daily', 'Non-comedogenic skincare and cosmetics', 'Avoid picking or squeezing lesions', 'Low glycemic diet', 'Stress management', 'Remove makeup before bed']
    },
    emergencySigns: ['Acne fulminans (severe with systemic symptoms)', 'Widespread painful nodules and cysts', 'Signs of systemic infection', 'Severe psychological distress or depression'],
    patientExplanation: 'Acne occurs when hair follicles become clogged with oil and dead skin cells, creating an environment where bacteria thrive and cause inflammation. Hormonal changes during puberty increase oil production. Treatment works by reducing oil, preventing clogged pores, fighting bacteria, and reducing inflammation. Be patient - most treatments take 6-8 weeks to show improvement. Do not pick at acne as this can lead to scarring.',
    patientExplanationEs: 'El acné ocurre cuando los folículos pilosos se obstruyen con aceite y células muertas de la piel, creando un ambiente donde las bacterias prosperan y causan inflamación. Los cambios hormonales durante la pubertad aumentan la producción de aceite. El tratamiento funciona reduciendo el aceite, previniendo poros obstruidos, combatiendo bacterias y reduciendo inflamación. Sea paciente - la mayoría de tratamientos toman 6-8 semanas para mostrar mejoría. No toque el acné ya que esto puede conducir a cicatrices.'
  },

  'contact-dermatitis': {
    id: 'contact-dermatitis',
    name: 'Contact Dermatitis',
    nameEs: 'Dermatitis de Contacto',
    category: 'allergic',
    icd11: 'EK00',
    description: 'Inflammatory skin reaction resulting from direct contact with irritants or allergens. Two types: irritant contact dermatitis (non-immune) and allergic contact dermatitis (type IV hypersensitivity). Common occupational and environmental condition.',
    descriptionEs: 'Reacción cutánea inflamatoria resultante del contacto directo con irritantes o alérgenos. Dos tipos: dermatitis de contacto irritante (no inmune) y dermatitis de contacto alérgica (hipersensibilidad tipo IV). Condición ocupacional y ambiental común.',
    riskFactors: ['Occupational exposures (healthcare, hairdressing, construction)', 'Frequent hand washing', 'Atopic dermatitis', 'Previous sensitization', 'Skin barrier disruption', 'Certain medications', 'Jewelry (nickel)', 'Fragrances and preservatives'],
    pathophysiology: 'Irritant: direct cytotoxic damage to keratinocytes causing inflammation without immune sensitization. Allergic: type IV delayed hypersensitivity requiring prior sensitization, with hapten-protein complex triggering T-cell mediated response 24-72 hours after re-exposure.',
    pathophysiologyEs: 'Irritante: daño citotóxico directo a queratinocitos causando inflamación sin sensibilización inmune. Alérgica: hipersensibilidad retardada tipo IV requiriendo sensibilización previa, con complejo hapteno-proteína desencadenando respuesta mediada por células T 24-72 horas después de reexposición.',
    symptoms: ['Pruritic erythematous rash in contact area', 'Well-demarcated distribution', 'Vesicles and bullae (in acute allergic)', 'Dry, cracked, scaly skin (in chronic irritant)', 'Burning or stinging (more common in irritant)', 'Linear or geometric patterns'],
    diagnostics: {
      tests: ['Patch testing (for allergic type)', 'Detailed exposure history', 'KOH prep to rule out fungal infection'],
      imaging: [],
      criteria: ['Temporal relationship to exposure', 'Characteristic distribution', 'Improvement with avoidance', 'Positive patch test (allergic type)']
    },
    treatment: {
      medications: ['Topical corticosteroids', 'Oral antihistamines for pruritus', 'Systemic corticosteroids for severe cases', 'Topical calcineurin inhibitors for facial involvement', 'Antibiotics if secondary infection'],
      procedures: ['Cool compresses for acute vesicular dermatitis', 'Burow solution soaks'],
      lifestyle: ['Identify and avoid trigger', 'Protective equipment (gloves) for occupational exposures', 'Barrier creams', 'Gentle, fragrance-free cleansers', 'Frequent moisturization', 'Hypoallergenic jewelry']
    },
    emergencySigns: ['Severe widespread reaction', 'Facial or genital involvement with swelling', 'Signs of anaphylaxis (if systemic exposure)', 'Secondary infection with fever', 'Inability to identify or avoid trigger'],
    patientExplanation: 'Contact dermatitis is a rash caused by your skin touching something that irritates it or triggers an allergic reaction. Irritant dermatitis happens from harsh chemicals damaging the skin directly. Allergic dermatitis develops after your immune system becomes sensitized to a substance, like nickel in jewelry or fragrance in soap. The key to treatment is finding and avoiding the trigger. Keep a diary of products used and activities to identify the cause.',
    patientExplanationEs: 'La dermatitis de contacto es una erupción causada por el contacto de su piel con algo que la irrita o desencadena una reacción alérgica. La dermatitis irritante ocurre por químicos fuertes que dañan la piel directamente. La dermatitis alérgica se desarrolla después de que su sistema inmune se sensibiliza a una sustancia, como níquel en joyas o fragancia en jabón. La clave del tratamiento es encontrar y evitar el desencadenante. Mantenga un diario de productos usados y actividades para identificar la causa.'
  },

  'rosacea': {
    id: 'rosacea',
    name: 'Rosacea',
    nameEs: 'Rosácea',
    category: 'inflammatory',
    icd11: 'EA85',
    description: 'Chronic inflammatory facial skin disorder characterized by persistent erythema, flushing, telangiectasias, and inflammatory papulopustular lesions. Primarily affects central face. Can involve eyes (ocular rosacea).',
    descriptionEs: 'Trastorno cutáneo facial inflamatorio crónico caracterizado por eritema persistente, rubor, telangiectasias y lesiones papulopustulares inflamatorias. Afecta principalmente la cara central. Puede involucrar los ojos (rosácea ocular).',
    riskFactors: ['Fair skin', 'Age 30-50', 'Female gender', 'Celtic or Northern European ancestry', 'Family history', 'Sun exposure', 'Triggers: hot beverages, spicy foods, alcohol, stress', 'Certain skincare products'],
    pathophysiology: 'Multifactorial: vascular dysregulation causing flushing, innate immune system activation (cathelicidin dysregulation), Demodex folliculorum proliferation, neurovascular hyperreactivity, and UV-induced inflammation. Leads to chronic inflammation and vascular changes.',
    pathophysiologyEs: 'Multifactorial: desregulación vascular causando rubor, activación del sistema inmune innato (desregulación de catelicidina), proliferación de Demodex folliculorum, hiperreactividad neurovascular, e inflamación inducida por UV. Conduce a inflamación crónica y cambios vasculares.',
    symptoms: ['Persistent facial redness', 'Flushing episodes', 'Visible blood vessels (telangiectasias)', 'Papules and pustules (no comedones)', 'Burning or stinging sensation', 'Eye involvement (dryness, irritation, blepharitis)', 'Thickened skin (rhinophyma in severe cases)'],
    diagnostics: {
      tests: ['Clinical diagnosis', 'Skin biopsy (if atypical)'],
      imaging: [],
      criteria: ['Central facial erythema', 'Flushing', 'Inflammatory papules/pustules without comedones', 'Telangiectasias', 'Classification into subtypes (erythematotelangiectatic, papulopustular, phymatous, ocular)']
    },
    treatment: {
      medications: ['Topical metronidazole or azelaic acid', 'Topical ivermectin', 'Brimonidine gel (for persistent erythema)', 'Oral doxycycline (anti-inflammatory dose)', 'Oral isotretinoin (for severe refractory cases)', 'Artificial tears (for ocular rosacea)'],
      procedures: ['Laser or intense pulsed light (IPL) for telangiectasias and erythema', 'Electrosurgery or laser for rhinophyma'],
      lifestyle: ['Identify and avoid triggers', 'Sun protection (SPF 30+ daily)', 'Gentle skincare (avoid harsh products)', 'Cool compresses during flares', 'Avoid hot beverages and spicy foods', 'Stress management']
    },
    emergencySigns: ['Severe ocular involvement (corneal complications)', 'Rapidly worsening rhinophyma', 'Severe psychological distress', 'Infection of papulopustular lesions'],
    patientExplanation: 'Rosacea is a chronic skin condition causing facial redness, visible blood vessels, and sometimes acne-like bumps. It is not caused by poor hygiene or infection. The exact cause is unknown, but it involves overactive blood vessels and inflammation. Certain triggers like sun, stress, hot drinks, and spicy foods can worsen symptoms. While there is no cure, treatments can control symptoms effectively. Identifying and avoiding your personal triggers is key to management.',
    patientExplanationEs: 'La rosácea es una condición crónica de la piel que causa enrojecimiento facial, vasos sanguíneos visibles y a veces protuberancias similares al acné. No es causada por mala higiene o infección. La causa exacta es desconocida, pero involucra vasos sanguíneos hiperactivos e inflamación. Ciertos desencadenantes como el sol, estrés, bebidas calientes y alimentos picantes pueden empeorar los síntomas. Aunque no hay cura, los tratamientos pueden controlar los síntomas efectivamente. Identificar y evitar sus desencadenantes personales es clave para el manejo.'
  }
};

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/**
 * Search dermatology conditions by query string
 * Searches across name, description, symptoms, and risk factors
 */
export function searchDermConditions(query: string): DermConditionEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return Object.values(DERM_CONDITIONS);

  return Object.values(DERM_CONDITIONS).filter(condition => {
    const searchableText = [
      condition.name,
      condition.nameEs,
      condition.description,
      condition.descriptionEs,
      ...condition.symptoms,
      ...condition.riskFactors,
      condition.pathophysiology,
      condition.pathophysiologyEs
    ].join(' ').toLowerCase();

    return searchableText.includes(lowerQuery);
  });
}

/**
 * Get a specific dermatology condition by ID
 * Returns undefined if condition not found
 */
export function getDermConditionById(id: string): DermConditionEntry | undefined {
  return DERM_CONDITIONS[id];
}

/**
 * Get all conditions by category
 */
export function getDermConditionsByCategory(category: DermCategory): DermConditionEntry[] {
  return Object.values(DERM_CONDITIONS).filter(c => c.category === category);
}

/**
 * Get all available condition IDs
 */
export function getAllDermConditionIds(): string[] {
  return Object.keys(DERM_CONDITIONS);
}
