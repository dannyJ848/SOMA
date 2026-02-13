/**
 * Promotora Module Type Definitions
 * 
 * TypeScript definitions for the Community Health Worker (Promotora de Salud)
 * integration features. Supports bilingual (Spanish/English) content.
 */

// ============================================================================
// Core Promotora Types
// ============================================================================

export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Promotora {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization: string;
  certificationNumber?: string;
  languages: string[];
  assignedPatients: string[];
  region: string;
  availability: AvailabilityWindow[];
  createdAt: Date;
  lastLoginAt?: Date;
  preferences: PromotoraPreferences;
}

export interface PromotoraPreferences {
  preferredLanguage: Language;
  notificationsEnabled: boolean;
  sessionRecordingConsent: boolean;
  autoTranslate: boolean;
}

export interface AvailabilityWindow {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
}

// ============================================================================
// Patient Assignment Types
// ============================================================================

export interface PatientAssignment {
  id: string;
  patientId: string;
  promotoraId: string;
  assignedAt: Date;
  assignedBy: string;
  consentStatus: ConsentStatus;
  consentSignedAt?: Date;
  notes?: string;
  priority: PriorityLevel;
  status: AssignmentStatus;
  lastContactAt?: Date;
  nextScheduledContact?: Date;
}

export type ConsentStatus = 
  | 'pending' 
  | 'granted' 
  | 'revoked' 
  | 'expired';

export type PriorityLevel = 'low' | 'medium' | 'high' | 'urgent';

export type AssignmentStatus = 
  | 'active' 
  | 'paused' 
  | 'completed' 
  | 'transferred';

export interface PatientOverview {
  id: string;
  name: string;
  age: number;
  preferredLanguage: Language;
  lastLoginAt?: Date;
  lastActivityAt?: Date;
  moduleProgress: ModuleProgressSummary;
  concerningLabs: ConcerningLab[];
  alerts: PatientAlert[];
  emergencyContact?: EmergencyContact;
}

export interface ModuleProgressSummary {
  totalModules: number;
  completedModules: number;
  inProgressModules: number;
  notStartedModules: number;
  lastModuleAccessed?: string;
  averageQuizScore?: number;
}

export interface ConcerningLab {
  testName: LocalizedText;
  value: number;
  unit: string;
  referenceRange: { low: number; high: number };
  status: 'high' | 'low' | 'critical';
  date: Date;
  requiresFollowUp: boolean;
}

export interface PatientAlert {
  id: string;
  type: 'missed_login' | 'concerning_lab' | 'low_engagement' | 'appointment_needed';
  severity: 'info' | 'warning' | 'critical';
  message: LocalizedText;
  createdAt: Date;
  acknowledgedAt?: Date;
}

export interface EmergencyContact {
  name: string;
  relationship: LocalizedText;
  phone: string;
}

// ============================================================================
// Guided Session Types
// ============================================================================

export interface GuidedSession {
  id: string;
  promotoraId: string;
  patientId: string;
  status: SessionStatus;
  startedAt: Date;
  endedAt?: Date;
  mode: SessionMode;
  currentScreen?: string;
  sharedViewEnabled: boolean;
  teachingModeEnabled: boolean;
  discussionPrompts: DiscussionPrompt[];
  outcomes?: SessionOutcome;
  notes?: string;
}

export type SessionStatus = 
  | 'preparing' 
  | 'active' 
  | 'paused' 
  | 'completed' 
  | 'cancelled';

export type SessionMode = 
  | 'onboarding' 
  | 'education' 
  | 'lab_review' 
  | 'appointment_prep'
  | 'general_navigation';

export interface DiscussionPrompt {
  id: string;
  topic: LocalizedText;
  prompt: LocalizedText;
  followUpQuestions: LocalizedText[];
  completed: boolean;
  notes?: string;
}

export interface SessionOutcome {
  patientUnderstanding: 'excellent' | 'good' | 'fair' | 'needs_follow_up';
  completedObjectives: string[];
  nextSteps: LocalizedText[];
  followUpNeeded: boolean;
  followUpDate?: Date;
  patientFeedback?: string;
}

export interface ScreenShareState {
  enabled: boolean;
  viewerId: string;
  sharerId: string;
  currentRoute?: string;
  highlightedElement?: string;
  annotations: ScreenAnnotation[];
}

export interface ScreenAnnotation {
  id: string;
  x: number;
  y: number;
  text: LocalizedText;
  type: 'highlight' | 'arrow' | 'text';
}

// ============================================================================
// Community Resources Types
// ============================================================================

export interface CommunityResource {
  id: string;
  name: LocalizedText;
  type: ResourceType;
  description: LocalizedText;
  address: Address;
  phone?: string;
  website?: string;
  email?: string;
  hours: OperatingHours[];
  services: LocalizedText[];
  languages: string[];
  eligibility?: LocalizedText;
  cost: CostInfo;
  accessibility: AccessibilityInfo;
  immigrationSafe: boolean;
  coordinates?: { lat: number; lng: number };
  verifiedAt?: Date;
  rating?: number;
  reviews?: ResourceReview[];
}

export type ResourceType =
  | 'clinic'
  | 'free_clinic'
  | 'community_health_center'
  | 'food_bank'
  | 'housing_assistance'
  | 'mental_health'
  | 'substance_abuse'
  | 'domestic_violence'
  | 'legal_aid'
  | 'pharmacy'
  | 'transportation'
  | 'childcare'
  | 'senior_services';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood?: string;
}

export interface OperatingHours {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  open: string;
  close: string;
  byAppointmentOnly?: boolean;
}

export interface CostInfo {
  free: boolean;
  slidingScale: boolean;
  acceptsMedicaid: boolean;
  acceptsMedicare: boolean;
  uninsuredWelcome: boolean;
  estimatedCost?: LocalizedText;
}

export interface AccessibilityInfo {
  wheelchairAccessible: boolean;
  publicTransitNearby: boolean;
  parkingAvailable: boolean;
  spanishSpeakingStaff: boolean;
}

export interface ResourceReview {
  id: string;
  author: string;
  rating: number;
  comment: LocalizedText;
  date: Date;
  verified: boolean;
}

export interface ResourceFilter {
  types?: ResourceType[];
  languages?: string[];
  costFree?: boolean;
  immigrationSafe?: boolean;
  maxDistance?: number; // miles
  openNow?: boolean;
  acceptsWalkIns?: boolean;
}

// ============================================================================
// Healthcare Navigation Types
// ============================================================================

export interface HealthcareNavigationGuide {
  id: string;
  category: NavigationCategory;
  title: LocalizedText;
  content: LocalizedContent;
  relatedResources?: string[];
  tags: string[];
}

export type NavigationCategory =
  | 'insurance_basics'
  | 'medicaid'
  | 'medicare'
  | 'marketplace'
  | 'appointments'
  | 'emergency_care'
  | 'patient_rights'
  | 'prescriptions'
  | 'specialist_referrals'
  | 'medical_records';

export interface LocalizedContent {
  summary: LocalizedText;
  steps: LocalizedStep[];
  faq: FAQItem[];
  documents?: RequiredDocument[];
  tips: LocalizedText[];
}

export interface LocalizedStep {
  order: number;
  title: LocalizedText;
  description: LocalizedText;
  actionItems?: LocalizedText[];
  estimatedTime?: LocalizedText;
}

export interface FAQItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface RequiredDocument {
  name: LocalizedText;
  description?: LocalizedText;
  required: boolean;
  alternatives?: LocalizedText[];
}

// ============================================================================
// Trust Building Types
// ============================================================================

export interface PrivacyGuarantee {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
  details?: LocalizedText;
}

export interface DataPolicy {
  id: string;
  category: 'storage' | 'sharing' | 'retention' | 'access' | 'deletion';
  title: LocalizedText;
  description: LocalizedText;
  patientControl: LocalizedText;
  technicalDetails?: LocalizedText;
}

export interface CommunityTestimonial {
  id: string;
  author: {
    name: string;
    role?: string;
    community: string;
    avatarUrl?: string;
  };
  quote: LocalizedText;
  story?: LocalizedText;
  rating: number;
  date: Date;
  verified: boolean;
  featured: boolean;
}

export interface TrustBadge {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  verified: boolean;
  verifiedBy?: string;
  validUntil?: Date;
}

// ============================================================================
// Dashboard Types
// ============================================================================

export interface DashboardStats {
  totalAssignedPatients: number;
  activePatients: number;
  patientsNeedingAttention: number;
  pendingConsents: number;
  upcomingSessions: number;
  completedSessionsThisMonth: number;
}

export interface ActivityItem {
  id: string;
  type: 'patient_login' | 'lab_result' | 'module_completed' | 'session_completed' | 'alert_triggered';
  patientName: string;
  patientId: string;
  description: LocalizedText;
  timestamp: Date;
  actionable: boolean;
}

export interface DashboardFilters {
  dateRange: 'today' | 'week' | 'month' | 'quarter';
  patientStatus?: AssignmentStatus[];
  priorityLevel?: PriorityLevel[];
  showInactive: boolean;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface PromotoraApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: LocalizedText;
    details?: unknown;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
