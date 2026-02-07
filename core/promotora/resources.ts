/**
 * Community Resources Module
 * 
 * Spanish-language local resources including free/low-cost clinics,
 * food banks, housing assistance, mental health resources for Latinos,
 * and immigration-safe healthcare options.
 * 
 * All content supports Spanish/English localization.
 */

import {
  CommunityResource,
  ResourceType,
  ResourceFilter,
  OperatingHours,
  CostInfo,
  Address,
  LocalizedText,
  Language,
  PromotoraApiResponse,
  PaginatedResponse,
} from './types';

// ============================================================================
// Resource Categories with Localized Names
// ============================================================================

export const RESOURCE_CATEGORY_LABELS: Record<ResourceType, LocalizedText> = {
  clinic: { es: 'Clínica', en: 'Clinic' },
  free_clinic: { es: 'Clínica Gratuita', en: 'Free Clinic' },
  community_health_center: { es: 'Centro de Salud Comunitario', en: 'Community Health Center' },
  food_bank: { es: 'Banco de Alimentos', en: 'Food Bank' },
  housing_assistance: { es: 'Asistencia de Vivienda', en: 'Housing Assistance' },
  mental_health: { es: 'Salud Mental', en: 'Mental Health' },
  substance_abuse: { es: 'Abuso de Sustancias', en: 'Substance Abuse' },
  domestic_violence: { es: 'Violencia Doméstica', en: 'Domestic Violence' },
  legal_aid: { es: 'Ayuda Legal', en: 'Legal Aid' },
  pharmacy: { es: 'Farmacia', en: 'Pharmacy' },
  transportation: { es: 'Transporte', en: 'Transportation' },
  childcare: { es: 'Cuidado de Niños', en: 'Childcare' },
  senior_services: { es: 'Servicios para Adultos Mayores', en: 'Senior Services' },
};

// ============================================================================
// Sample Community Resources Database
// ============================================================================

export const SAMPLE_RESOURCES: CommunityResource[] = [
  // Clinics
  {
    id: 'res-001',
    name: {
      es: 'Centro de Salud Familiar La Esperanza',
      en: 'La Esperanza Family Health Center',
    },
    type: 'community_health_center',
    description: {
      es: 'Atención médica integral para toda la familia. Personal bilingüe. No se niega servicio por incapacidad de pago.',
      en: 'Comprehensive medical care for the whole family. Bilingual staff. No one denied service due to inability to pay.',
    },
    address: {
      street: '1234 Calle Principal',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      neighborhood: 'East Austin',
    },
    phone: '(512) 555-0101',
    website: 'https://example.com/laesperanza',
    hours: [
      { dayOfWeek: 1, open: '08:00', close: '18:00' },
      { dayOfWeek: 2, open: '08:00', close: '18:00' },
      { dayOfWeek: 3, open: '08:00', close: '18:00' },
      { dayOfWeek: 4, open: '08:00', close: '18:00' },
      { dayOfWeek: 5, open: '08:00', close: '17:00' },
      { dayOfWeek: 6, open: '09:00', close: '14:00' },
    ],
    services: [
      { es: 'Medicina general', en: 'General Medicine' },
      { es: 'Pediatría', en: 'Pediatrics' },
      { es: 'Ginecología', en: 'Gynecology' },
      { es: 'Manejo de diabetes', en: 'Diabetes Management' },
      { es: 'Vacunación', en: 'Vaccinations' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Abierto a todos. Se aceptan pacientes sin seguro.',
      en: 'Open to all. Uninsured patients accepted.',
    },
    cost: {
      free: false,
      slidingScale: true,
      acceptsMedicaid: true,
      acceptsMedicare: true,
      uninsuredWelcome: true,
      estimatedCost: { es: 'Según capacidad de pago', en: 'Based on ability to pay' },
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: true,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.2672, lng: -97.7431 },
  },
  {
    id: 'res-002',
    name: {
      es: 'Clínica Gratuita San José',
      en: 'St. Joseph Free Clinic',
    },
    type: 'free_clinic',
    description: {
      es: 'Servicios médicos gratuitos para personas sin seguro. No se requiere seguro social.',
      en: 'Free medical services for uninsured individuals. No social security required.',
    },
    address: {
      street: '567 Avenida de la Comunidad',
      city: 'Austin',
      state: 'TX',
      zipCode: '78702',
      neighborhood: 'Central East Austin',
    },
    phone: '(512) 555-0202',
    hours: [
      { dayOfWeek: 2, open: '09:00', close: '16:00' },
      { dayOfWeek: 4, open: '09:00', close: '16:00' },
    ],
    services: [
      { es: 'Consultas médicas', en: 'Medical Consultations' },
      { es: 'Prescripciones básicas', en: 'Basic Prescriptions' },
      { es: 'Referencias a especialistas', en: 'Specialist Referrals' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Sin seguro médico. Sin criterios de ingresos estrictos.',
      en: 'No medical insurance. No strict income requirements.',
    },
    cost: {
      free: true,
      slidingScale: false,
      acceptsMedicaid: false,
      acceptsMedicare: false,
      uninsuredWelcome: true,
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: false,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.2645, lng: -97.7285 },
  },
  // Mental Health
  {
    id: 'res-003',
    name: {
      es: 'Centro de Bienestar Mental Nuestra Comunidad',
      en: 'Nuestra Comunidad Mental Wellness Center',
    },
    type: 'mental_health',
    description: {
      es: 'Servicios de salud mental culturalmente sensibles. Terapeutas bilingües.',
      en: 'Culturally sensitive mental health services. Bilingual therapists.',
    },
    address: {
      street: '890 Calle Salud',
      city: 'Austin',
      state: 'TX',
      zipCode: '78741',
      neighborhood: 'Riverside',
    },
    phone: '(512) 555-0303',
    website: 'https://example.com/bienestarmh',
    hours: [
      { dayOfWeek: 1, open: '09:00', close: '20:00', byAppointmentOnly: true },
      { dayOfWeek: 2, open: '09:00', close: '20:00', byAppointmentOnly: true },
      { dayOfWeek: 3, open: '09:00', close: '20:00', byAppointmentOnly: true },
      { dayOfWeek: 4, open: '09:00', close: '20:00', byAppointmentOnly: true },
      { dayOfWeek: 5, open: '09:00', close: '17:00', byAppointmentOnly: true },
    ],
    services: [
      { es: 'Terapia individual', en: 'Individual Therapy' },
      { es: 'Terapia familiar', en: 'Family Therapy' },
      { es: 'Terapia de pareja', en: 'Couples Therapy' },
      { es: 'Manejo de crisis', en: 'Crisis Management' },
      { es: 'Grupos de apoyo', en: 'Support Groups' },
      { es: 'Servicios para inmigrantes', en: 'Immigrant Services' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Abierto a todos. Sesiones gratuitas disponibles.',
      en: 'Open to all. Free sessions available.',
    },
    cost: {
      free: false,
      slidingScale: true,
      acceptsMedicaid: true,
      acceptsMedicare: true,
      uninsuredWelcome: true,
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: true,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.2303, lng: -97.7194 },
  },
  // Food Banks
  {
    id: 'res-004',
    name: {
      es: 'Banco de Alimentos Comunitario El Sagrado Corazón',
      en: 'Sacred Heart Community Food Bank',
    },
    type: 'food_bank',
    description: {
      es: 'Alimentos nutritivos para familias necesitadas. No se requiere identificación.',
      en: 'Nutritious food for families in need. No ID required.',
    },
    address: {
      street: '321 Calle Iglesia',
      city: 'Austin',
      state: 'TX',
      zipCode: '78705',
      neighborhood: 'West Campus',
    },
    phone: '(512) 555-0404',
    hours: [
      { dayOfWeek: 2, open: '10:00', close: '14:00' },
      { dayOfWeek: 4, open: '10:00', close: '14:00' },
      { dayOfWeek: 6, open: '09:00', close: '12:00' },
    ],
    services: [
      { es: 'Despensa de alimentos', en: 'Food Pantry' },
      { es: 'Comidas calientes', en: 'Hot Meals' },
      { es: 'Alimentos para bebés', en: 'Baby Food' },
      { es: 'Productos de higiene', en: 'Hygiene Products' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Sin requisitos. Solo venga durante horario de servicio.',
      en: 'No requirements. Just come during service hours.',
    },
    cost: {
      free: true,
      slidingScale: false,
      acceptsMedicaid: false,
      acceptsMedicare: false,
      uninsuredWelcome: true,
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: false,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.2849, lng: -97.7341 },
  },
  // Housing Assistance
  {
    id: 'res-005',
    name: {
      es: 'Asociación de Vivienda Comunitaria Familias Unidas',
      en: 'Familias Unidas Community Housing Association',
    },
    type: 'housing_assistance',
    description: {
      es: 'Ayuda para encontrar vivienda asequible y asistencia con alquiler.',
      en: 'Help finding affordable housing and rental assistance.',
    },
    address: {
      street: '654 Centro Comunitario',
      city: 'Austin',
      state: 'TX',
      zipCode: '78723',
      neighborhood: 'Pecan Springs',
    },
    phone: '(512) 555-0505',
    website: 'https://example.com/familiasunidas',
    hours: [
      { dayOfWeek: 1, open: '09:00', close: '17:00' },
      { dayOfWeek: 2, open: '09:00', close: '17:00' },
      { dayOfWeek: 3, open: '09:00', close: '17:00' },
      { dayOfWeek: 4, open: '09:00', close: '17:00' },
      { dayOfWeek: 5, open: '09:00', close: '16:00' },
    ],
    services: [
      { es: 'Búsqueda de vivienda', en: 'Housing Search' },
      { es: 'Asistencia con alquiler', en: 'Rental Assistance' },
      { es: 'Programa de vivienda de emergencia', en: 'Emergency Housing Program' },
      { es: 'Asesoría de inquilinos', en: 'Tenant Counseling' },
      { es: 'Ayuda con depósitos', en: 'Deposit Assistance' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Ingresos bajos a moderados. Ciudadanía no requerida.',
      en: 'Low to moderate income. Citizenship not required.',
    },
    cost: {
      free: true,
      slidingScale: false,
      acceptsMedicaid: false,
      acceptsMedicare: false,
      uninsuredWelcome: true,
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: true,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.3089, lng: -97.6881 },
  },
  // Legal Aid
  {
    id: 'res-006',
    name: {
      es: 'Servicios Legales para Inmigrantes',
      en: 'Legal Services for Immigrants',
    },
    type: 'legal_aid',
    description: {
      es: 'Asistencia legal gratuita y confidencial para inmigrantes. Consultas seguras.',
      en: 'Free and confidential legal assistance for immigrants. Safe consultations.',
    },
    address: {
      street: '987 Calle Protección',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      neighborhood: 'Downtown',
    },
    phone: '(512) 555-0606',
    website: 'https://example.com/legalservices',
    hours: [
      { dayOfWeek: 1, open: '09:00', close: '17:00', byAppointmentOnly: true },
      { dayOfWeek: 2, open: '09:00', close: '17:00', byAppointmentOnly: true },
      { dayOfWeek: 3, open: '09:00', close: '17:00', byAppointmentOnly: true },
      { dayOfWeek: 4, open: '09:00', close: '17:00', byAppointmentOnly: true },
    ],
    services: [
      { es: 'Consultas de inmigración', en: 'Immigration Consultations' },
      { es: 'DACA renovaciones', en: 'DACA Renewals' },
      { es: 'Asilo', en: 'Asylum' },
      { es: 'Reunificación familiar', en: 'Family Reunification' },
      { es: 'Derechos del inquilino', en: 'Tenant Rights' },
    ],
    languages: ['es', 'en'],
    eligibility: {
      es: 'Servicios gratuitos. Confidencialidad garantizada.',
      en: 'Free services. Confidentiality guaranteed.',
    },
    cost: {
      free: true,
      slidingScale: false,
      acceptsMedicaid: false,
      acceptsMedicare: false,
      uninsuredWelcome: true,
    },
    accessibility: {
      wheelchairAccessible: true,
      publicTransitNearby: true,
      parkingAvailable: false,
      spanishSpeakingStaff: true,
    },
    immigrationSafe: true,
    coordinates: { lat: 30.2675, lng: -97.7405 },
  },
];

// ============================================================================
// Resource Search & Filter Functions
// ============================================================================

export interface SearchResourcesOptions {
  query?: string;
  filter?: ResourceFilter;
  location?: { lat: number; lng: number };
  language?: Language;
  page?: number;
  pageSize?: number;
}

/**
 * Search community resources with filtering
 */
export async function searchResources(
  options: SearchResourcesOptions
): Promise<PromotoraApiResponse<PaginatedResponse<CommunityResource>>> {
  const { query, filter, location, page = 1, pageSize = 20 } = options;

  try {
    let results = [...SAMPLE_RESOURCES];

    // Apply text search
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (r) =>
          r.name.es.toLowerCase().includes(lowerQuery) ||
          r.name.en.toLowerCase().includes(lowerQuery) ||
          r.description.es.toLowerCase().includes(lowerQuery) ||
          r.description.en.toLowerCase().includes(lowerQuery) ||
          r.services.some(
            (s) =>
              s.es.toLowerCase().includes(lowerQuery) ||
              s.en.toLowerCase().includes(lowerQuery)
          )
      );
    }

    // Apply filters
    if (filter) {
      if (filter.types?.length) {
        results = results.filter((r) => filter.types!.includes(r.type));
      }

      if (filter.languages?.length) {
        results = results.filter((r) =>
          filter.languages!.some((lang) => r.languages.includes(lang))
        );
      }

      if (filter.costFree) {
        results = results.filter((r) => r.cost.free);
      }

      if (filter.immigrationSafe) {
        results = results.filter((r) => r.immigrationSafe);
      }

      if (filter.openNow) {
        const now = new Date();
        const currentDay = now.getDay();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;

        results = results.filter((r) => {
          const todaysHours = r.hours.filter(
            (h) => h.dayOfWeek === currentDay
          );
          return todaysHours.some((h) => {
            const [openHour, openMin] = h.open.split(':').map(Number);
            const [closeHour, closeMin] = h.close.split(':').map(Number);
            const openTime = openHour * 60 + openMin;
            const closeTime = closeHour * 60 + closeMin;
            return currentTime >= openTime && currentTime <= closeTime;
          });
        });
      }
    }

    // Sort by distance if location provided
    if (location) {
      results.sort((a, b) => {
        const distA = calculateDistance(location, a.coordinates);
        const distB = calculateDistance(location, b.coordinates);
        return distA - distB;
      });
    }

    // Pagination
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedItems = results.slice(start, end);

    return {
      success: true,
      data: {
        items: paginatedItems,
        total: results.length,
        page,
        pageSize,
        hasMore: end < results.length,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'SEARCH_ERROR',
        message: {
          es: 'Error al buscar recursos. Intente de nuevo.',
          en: 'Error searching resources. Please try again.',
        },
      },
    };
  }
}

/**
 * Get resources by type
 */
export async function getResourcesByType(
  type: ResourceType,
  language: Language = 'es'
): Promise<PromotoraApiResponse<CommunityResource[]>> {
  try {
    const results = SAMPLE_RESOURCES.filter((r) => r.type === type);
    return {
      success: true,
      data: results,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar recursos.',
          en: 'Error loading resources.',
        },
      },
    };
  }
}

/**
 * Get a single resource by ID
 */
export async function getResourceById(
  id: string,
  language: Language = 'es'
): Promise<PromotoraApiResponse<CommunityResource | null>> {
  try {
    const resource = SAMPLE_RESOURCES.find((r) => r.id === id) || null;
    return {
      success: true,
      data: resource,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar el recurso.',
          en: 'Error loading resource.',
        },
      },
    };
  }
}

/**
 * Get resources near a location
 */
export async function getNearbyResources(
  lat: number,
  lng: number,
  radiusMiles: number = 10,
  language: Language = 'es'
): Promise<PromotoraApiResponse<CommunityResource[]>> {
  try {
    const results = SAMPLE_RESOURCES.filter((r) => {
      if (!r.coordinates) return false;
      const distance = calculateDistance(
        { lat, lng },
        r.coordinates
      );
      return distance <= radiusMiles;
    }).sort((a, b) => {
      const distA = calculateDistance({ lat, lng }, a.coordinates);
      const distB = calculateDistance({ lat, lng }, b.coordinates);
      return distA - distB;
    });

    return {
      success: true,
      data: results,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al buscar recursos cercanos.',
          en: 'Error finding nearby resources.',
        },
      },
    };
  }
}

/**
 * Get immigration-safe resources only
 */
export async function getImmigrationSafeResources(
  language: Language = 'es'
): Promise<PromotoraApiResponse<CommunityResource[]>> {
  try {
    const results = SAMPLE_RESOURCES.filter((r) => r.immigrationSafe);
    return {
      success: true,
      data: results,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar recursos seguros.',
          en: 'Error loading safe resources.',
        },
      },
    };
  }
}

// ============================================================================
// Resource Categories
// ============================================================================

export const RESOURCE_CATEGORIES: {
  type: ResourceType;
  icon: string;
  color: string;
}[] = [
  { type: 'clinic', icon: '🏥', color: '#4CAF50' },
  { type: 'free_clinic', icon: '🆓', color: '#8BC34A' },
  { type: 'community_health_center', icon: '🏥', color: '#4CAF50' },
  { type: 'food_bank', icon: '🍽️', color: '#FF9800' },
  { type: 'housing_assistance', icon: '🏠', color: '#2196F3' },
  { type: 'mental_health', icon: '🧠', color: '#9C27B0' },
  { type: 'substance_abuse', icon: '💊', color: '#F44336' },
  { type: 'domestic_violence', icon: '🛡️', color: '#E91E63' },
  { type: 'legal_aid', icon: '⚖️', color: '#795548' },
  { type: 'pharmacy', icon: '💊', color: '#00BCD4' },
  { type: 'transportation', icon: '🚌', color: '#607D8B' },
  { type: 'childcare', icon: '👶', color: '#FFEB3B' },
  { type: 'senior_services', icon: '👴', color: '#9E9E9E' },
];

// ============================================================================
// Helper Functions
// ============================================================================

function calculateDistance(
  point1?: { lat: number; lng: number },
  point2?: { lat: number; lng: number }
): number {
  if (!point1 || !point2) return Infinity;

  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(point2.lat - point1.lat);
  const dLon = toRadians(point2.lng - point1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) *
      Math.cos(toRadians(point2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Format hours for display
 */
export function formatHours(
  hours: OperatingHours[],
  language: Language = 'es'
): LocalizedText {
  const days: Record<number, LocalizedText> = {
    0: { es: 'Dom', en: 'Sun' },
    1: { es: 'Lun', en: 'Mon' },
    2: { es: 'Mar', en: 'Tue' },
    3: { es: 'Mié', en: 'Wed' },
    4: { es: 'Jue', en: 'Thu' },
    5: { es: 'Vie', en: 'Fri' },
    6: { es: 'Sáb', en: 'Sat' },
  };

  const lines = hours.map((h) => {
    const day = days[h.dayOfWeek][language];
    const appointment = h.byAppointmentOnly
      ? language === 'es'
        ? ' (Cita previa)'
        : ' (Appt only)'
      : '';
    return `${day}: ${h.open} - ${h.close}${appointment}`;
  });

  return {
    es: lines.join('\n'),
    en: lines.join('\n'),
  };
}

/**
 * Format cost information for display
 */
export function formatCostInfo(
  cost: CostInfo,
  language: Language = 'es'
): LocalizedText {
  const parts: string[] = [];

  if (cost.free) {
    parts.push(language === 'es' ? 'Gratuito' : 'Free');
  } else {
    if (cost.slidingScale) {
      parts.push(language === 'es' ? 'Escala móvil' : 'Sliding scale');
    }
    if (cost.acceptsMedicaid) {
      parts.push('Medicaid');
    }
    if (cost.acceptsMedicare) {
      parts.push('Medicare');
    }
    if (cost.uninsuredWelcome) {
      parts.push(language === 'es' ? 'Sin seguro OK' : 'Uninsured OK');
    }
  }

  return {
    es: parts.join(' • ') || 'Consultar',
    en: parts.join(' • ') || 'Inquire',
  };
}

// ============================================================================
// Export
// ============================================================================
