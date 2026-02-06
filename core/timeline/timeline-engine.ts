/**
 * Timeline Engine
 * 
 * Core engine for aggregating, clustering, and managing timeline events.
 * Aggregates data from all sources: labs, diagnoses, medications, symptoms,
 * procedures, and life events with smart clustering and zoom level support.
 */

import type {
  TimelineEvent,
  EventCluster,
  EventCategory,
  EventSeverity,
  ZoomLevel,
  MedicalEventData,
  LifestyleEventData,
  LifeEventData,
  MilestoneEventData,
  ClusteringStrategy,
  TimelineFilters,
} from './events';
import type { UserHealthProfile, UserCondition, UserMedication, UserLabResult, UserSurgery } from '../personalization/types';
import type { UnlockedAchievement } from '../gamification';

// ============================================================================
// Configuration
// ============================================================================

const CLUSTER_TIME_THRESHOLDS: Record<ZoomLevel, number> = {
  year: 30, // days
  month: 7, // days
  week: 1,  // day
  day: 0,   // no clustering
};

const MAX_CLUSTER_SIZE = 10;

// ============================================================================
// Event Creation Functions
// ============================================================================

/**
 * Create a unique ID for timeline events
 */
export function createEventId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Convert a user condition to timeline events
 */
export function conditionToTimelineEvents(condition: UserCondition): TimelineEvent[] {
  const events: TimelineEvent[] = [];
  
  if (condition.diagnosedDate) {
    events.push({
      id: createEventId('dx'),
      date: condition.diagnosedDate,
      category: 'medical',
      type: 'diagnosis',
      title: `Diagnosed: ${condition.name}`,
      description: `Diagnosis of ${condition.name}${condition.icdCode ? ` (${condition.icdCode})` : ''}`,
      data: {
        type: 'diagnosis',
        conditionName: condition.name,
        icdCode: condition.icdCode,
        severity: condition.severity,
        status: condition.status,
        relatedSymptoms: condition.relatedSystems,
      } as MedicalEventData,
      severity: condition.severity === 'severe' ? 'high' : condition.severity === 'moderate' ? 'moderate' : 'low',
      status: condition.status === 'active' ? 'active' : condition.status === 'chronic' ? 'ongoing' : 'resolved',
      tags: ['diagnosis', condition.status, ...(condition.relatedSystems || [])],
      source: 'ehr-import',
      createdAt: condition.diagnosedDate,
      updatedAt: new Date(),
    });
  }
  
  return events;
}

/**
 * Convert a medication to timeline events
 */
export function medicationToTimelineEvents(medication: UserMedication): TimelineEvent[] {
  const events: TimelineEvent[] = [];
  
  if (medication.startDate) {
    events.push({
      id: createEventId('med-start'),
      date: medication.startDate,
      category: 'medical',
      type: 'medication-start',
      title: `Started: ${medication.name}`,
      description: `Started taking ${medication.name}${medication.dose ? ` ${medication.dose}` : ''}${medication.indication ? ` for ${medication.indication}` : ''}`,
      data: {
        type: 'medication-start',
        medicationName: medication.name,
        genericName: medication.genericName,
        dose: medication.dose,
        frequency: medication.frequency,
        indication: medication.indication,
        medicationId: medication.medicationId,
      } as MedicalEventData,
      severity: 'low',
      status: 'active',
      tags: ['medication', medication.drugClass, 'start'],
      source: 'ehr-import',
      createdAt: medication.startDate,
      updatedAt: new Date(),
    });
  }
  
  return events;
}

/**
 * Convert a lab result to timeline events
 */
export function labResultToTimelineEvents(lab: UserLabResult): TimelineEvent[] {
  const events: TimelineEvent[] = [];
  
  events.push({
    id: createEventId('lab'),
    date: lab.collectedDate,
    category: 'medical',
    type: 'lab-result',
    title: `${lab.testName}: ${lab.value} ${lab.unit}`,
    description: `Lab result for ${lab.testName}: ${lab.value} ${lab.unit} (${lab.status})`,
    data: {
      type: 'lab-result',
      testName: lab.testName,
      value: lab.value,
      unit: lab.unit,
      referenceRange: lab.referenceRange,
      status: lab.status,
      trend: lab.trend,
      labId: lab.labId,
    } as MedicalEventData,
    severity: lab.status === 'critical' ? 'critical' : lab.status === 'high' || lab.status === 'low' ? 'moderate' : 'info',
    status: 'resolved',
    tags: ['lab', lab.status, ...(lab.relatedOrgans || [])],
    source: 'lab-import',
    createdAt: lab.collectedDate,
    updatedAt: new Date(),
  });
  
  return events;
}

/**
 * Convert surgery to timeline events
 */
export function surgeryToTimelineEvents(surgery: UserSurgery): TimelineEvent[] {
  const events: TimelineEvent[] = [];
  
  events.push({
    id: createEventId('surgery'),
    date: surgery.date,
    category: 'medical',
    type: 'surgery',
    title: `Surgery: ${surgery.procedure}`,
    description: `${surgery.procedure}${surgery.notes ? ` - ${surgery.notes}` : ''}`,
    data: {
      type: 'surgery',
      procedureName: surgery.procedure,
      outcome: 'success',
      notes: surgery.notes,
    } as MedicalEventData,
    severity: 'high',
    status: 'resolved',
    tags: ['surgery', 'procedure', ...surgery.affectedStructures],
    source: 'ehr-import',
    createdAt: surgery.date,
    updatedAt: new Date(),
  });
  
  return events;
}

/**
 * Convert achievement to timeline event
 */
export function achievementToTimelineEvent(achievement: UnlockedAchievement): TimelineEvent {
  return {
    id: createEventId('achievement'),
    date: new Date(achievement.unlockedAt),
    category: 'milestone',
    type: 'achievement',
    title: `Achievement: ${achievement.name}`,
    description: achievement.description,
    data: {
      type: 'achievement',
      achievement,
    } as MilestoneEventData,
    severity: achievement.rarity === 'legendary' ? 'high' : achievement.rarity === 'epic' ? 'moderate' : 'low',
    status: 'resolved',
    tags: ['achievement', achievement.category, achievement.rarity],
    source: 'gamification',
    createdAt: new Date(achievement.unlockedAt),
    updatedAt: new Date(),
  };
}

// ============================================================================
// Data Aggregation
// ============================================================================

export interface AggregatedTimelineData {
  events: TimelineEvent[];
  clusters: EventCluster[];
  dateRange: { start: Date; end: Date };
  categoryCounts: Record<EventCategory, number>;
}

/**
 * Aggregate all health data into timeline events
 */
export function aggregateTimelineData(
  profile: UserHealthProfile,
  achievements: UnlockedAchievement[] = [],
  customEvents: TimelineEvent[] = []
): AggregatedTimelineData {
  const allEvents: TimelineEvent[] = [...customEvents];
  
  // Convert conditions
  for (const condition of profile.conditions) {
    allEvents.push(...conditionToTimelineEvents(condition));
  }
  
  // Convert medications
  for (const medication of profile.medications) {
    allEvents.push(...medicationToTimelineEvents(medication));
  }
  
  // Convert lab results
  for (const lab of profile.labResults) {
    allEvents.push(...labResultToTimelineEvents(lab));
  }
  
  // Convert surgeries
  for (const surgery of profile.surgeries) {
    allEvents.push(...surgeryToTimelineEvents(surgery));
  }
  
  // Convert achievements
  for (const achievement of achievements) {
    allEvents.push(achievementToTimelineEvent(achievement));
  }
  
  // Sort by date (newest first)
  allEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
  
  // Calculate date range
  const dates = allEvents.map(e => e.date.getTime());
  const startDate = new Date(Math.min(...dates));
  const endDate = new Date(Math.max(...dates));
  
  // Count by category
  const categoryCounts: Record<EventCategory, number> = {
    medical: 0,
    lifestyle: 0,
    'life-event': 0,
    milestone: 0,
  };
  
  for (const event of allEvents) {
    categoryCounts[event.category]++;
  }
  
  return {
    events: allEvents,
    clusters: [],
    dateRange: { start: startDate, end: endDate },
    categoryCounts,
  };
}

// ============================================================================
// Event Clustering
// ============================================================================

/**
 * Calculate days between two dates
 */
function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
}

/**
 * Check if two events are related thematically
 */
function eventsAreRelated(event1: TimelineEvent, event2: TimelineEvent): boolean {
  // Check for shared tags
  const sharedTags = event1.tags.filter(tag => event2.tags.includes(tag));
  if (sharedTags.length > 0) return true;
  
  // Check for related event IDs
  if (event1.relatedEvents?.includes(event2.id)) return true;
  if (event2.relatedEvents?.includes(event1.id)) return true;
  
  // Check for same category with specific types
  if (event1.category === 'medical' && event2.category === 'medical') {
    // Same test type
    if (event1.type === 'lab-result' && event2.type === 'lab-result') {
      const data1 = event1.data as { testName?: string };
      const data2 = event2.data as { testName?: string };
      if (data1.testName === data2.testName) return true;
    }
  }
  
  return false;
}

/**
 * Cluster events by time proximity
 */
function clusterByTime(events: TimelineEvent[], thresholdDays: number): EventCluster[] {
  if (events.length === 0 || thresholdDays === 0) return [];
  
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  const clusters: EventCluster[] = [];
  let currentCluster: TimelineEvent[] = [sortedEvents[0]];
  
  for (let i = 1; i < sortedEvents.length; i++) {
    const lastEvent = currentCluster[currentCluster.length - 1];
    const currentEvent = sortedEvents[i];
    
    if (daysBetween(lastEvent.date, currentEvent.date) <= thresholdDays) {
      currentCluster.push(currentEvent);
    } else {
      if (currentCluster.length > 1) {
        clusters.push(createCluster(currentCluster));
      }
      currentCluster = [currentEvent];
    }
  }
  
  if (currentCluster.length > 1) {
    clusters.push(createCluster(currentCluster));
  }
  
  return clusters;
}

/**
 * Cluster events by theme
 */
function clusterByTheme(events: TimelineEvent[]): EventCluster[] {
  const clusters: EventCluster[] = [];
  const processed = new Set<string>();
  
  for (const event of events) {
    if (processed.has(event.id)) continue;
    
    const relatedEvents = [event];
    
    for (const otherEvent of events) {
      if (event.id === otherEvent.id || processed.has(otherEvent.id)) continue;
      
      if (eventsAreRelated(event, otherEvent)) {
        relatedEvents.push(otherEvent);
      }
    }
    
    if (relatedEvents.length > 1) {
      const cluster = createCluster(relatedEvents);
      clusters.push(cluster);
      relatedEvents.forEach(e => processed.add(e.id));
    }
  }
  
  return clusters;
}

/**
 * Create a cluster from events
 */
function createCluster(events: TimelineEvent[]): EventCluster {
  const dates = events.map(e => e.date.getTime());
  const startDate = new Date(Math.min(...dates));
  const endDate = new Date(Math.max(...dates));
  
  // Determine primary category
  const categoryCounts: Record<EventCategory, number> = {
    medical: 0,
    lifestyle: 0,
    'life-event': 0,
    milestone: 0,
  };
  
  for (const event of events) {
    categoryCounts[event.category]++;
  }
  
  const primaryCategory = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])[0][0] as EventCategory;
  
  // Determine severity
  const severityOrder: EventSeverity[] = ['critical', 'high', 'moderate', 'low', 'info'];
  let maxSeverityIndex = 4;
  
  for (const event of events) {
    const index = severityOrder.indexOf(event.severity);
    if (index < maxSeverityIndex) {
      maxSeverityIndex = index;
    }
  }
  
  const severity = severityOrder[maxSeverityIndex];
  
  // Generate summary
  const typeCounts = new Map<string, number>();
  for (const event of events) {
    typeCounts.set(event.type, (typeCounts.get(event.type) || 0) + 1);
  }
  
  const summaryParts: string[] = [];
  for (const [type, count] of typeCounts.entries()) {
    summaryParts.push(`${count} ${type.replace(/-/g, ' ')}${count > 1 ? 's' : ''}`);
  }
  
  const summary = summaryParts.join(', ');
  
  // Generate theme
  const commonTags = events.reduce((acc, event) => {
    for (const tag of event.tags) {
      acc.set(tag, (acc.get(tag) || 0) + 1);
    }
    return acc;
  }, new Map<string, number>());
  
  const theme = Array.from(commonTags.entries())
    .filter(([_, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)[0];
  
  return {
    id: `cluster-${events[0].id}`,
    startDate,
    endDate,
    events,
    primaryCategory,
    severity,
    summary,
    theme,
  };
}

/**
 * Cluster events using specified strategy
 */
export function clusterEvents(
  events: TimelineEvent[],
  strategy: ClusteringStrategy,
  zoomLevel: ZoomLevel = 'month'
): EventCluster[] {
  switch (strategy) {
    case 'time-based':
      return clusterByTime(events, CLUSTER_TIME_THRESHOLDS[zoomLevel]);
    
    case 'theme-based':
      return clusterByTheme(events);
    
    case 'severity-based':
      // Group by severity
      const severityGroups = new Map<EventSeverity, TimelineEvent[]>();
      for (const event of events) {
        const group = severityGroups.get(event.severity) || [];
        group.push(event);
        severityGroups.set(event.severity, group);
      }
      
      const severityClusters: EventCluster[] = [];
      for (const [severity, groupEvents] of Array.from(severityGroups)) {
        if (groupEvents.length > 1 && severity !== 'info') {
          severityClusters.push(createCluster(groupEvents));
        }
      }
      return severityClusters;
    
    case 'auto':
    default:
      // Combine time and theme clustering
      const timeClusters = clusterByTime(events, CLUSTER_TIME_THRESHOLDS[zoomLevel]);
      const themeClusters = clusterByTheme(events);
      
      // Merge clusters, avoiding duplicates
      const clusterIds = new Set(timeClusters.map(c => c.id));
      const merged = [...timeClusters];
      
      for (const themeCluster of themeClusters) {
        // Check if this cluster is already represented
        const isDuplicate = themeCluster.events.every(e => 
          merged.some(c => c.events.some(ce => ce.id === e.id))
        );
        if (!isDuplicate) {
          merged.push(themeCluster);
        }
      }
      
      return merged;
  }
}

// ============================================================================
// Event Filtering
// ============================================================================

/**
 * Filter events based on criteria
 */
export function filterEvents(events: TimelineEvent[], filters: TimelineFilters): TimelineEvent[] {
  return events.filter(event => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(event.category)) {
      return false;
    }
    
    // Event type filter
    if (filters.eventTypes.length > 0 && !filters.eventTypes.includes(event.type)) {
      return false;
    }
    
    // Severity filter
    if (filters.severity.length > 0 && !filters.severity.includes(event.severity)) {
      return false;
    }
    
    // Status filter
    if (filters.status.length > 0 && !filters.status.includes(event.status)) {
      return false;
    }
    
    // Date range filter
    if (filters.dateRange) {
      const eventTime = event.date.getTime();
      if (eventTime < filters.dateRange.start.getTime() || 
          eventTime > filters.dateRange.end.getTime()) {
        return false;
      }
    }
    
    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const searchableText = `${event.title} ${event.description} ${event.tags.join(' ')}`.toLowerCase();
      if (!searchableText.includes(query)) {
        return false;
      }
    }
    
    // Tags filter
    if (filters.tags.length > 0 && !filters.tags.some(tag => event.tags.includes(tag))) {
      return false;
    }
    
    // Source filter
    if (filters.sources.length > 0 && !filters.sources.includes(event.source)) {
      return false;
    }
    
    return true;
  });
}

// ============================================================================
// Event Operations
// ============================================================================

/**
 * Add a custom event to the timeline
 */
export function addCustomEvent(
  events: TimelineEvent[],
  eventData: Omit<TimelineEvent, 'id' | 'createdAt' | 'updatedAt'>
): TimelineEvent[] {
  const newEvent: TimelineEvent = {
    ...eventData,
    id: createEventId('custom'),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  return [...events, newEvent].sort((a, b) => b.date.getTime() - a.date.getTime());
}

/**
 * Update an existing event
 */
export function updateEvent(
  events: TimelineEvent[],
  eventId: string,
  updates: Partial<Omit<TimelineEvent, 'id' | 'createdAt'>>
): TimelineEvent[] {
  return events.map(event => {
    if (event.id === eventId) {
      return {
        ...event,
        ...updates,
        updatedAt: new Date(),
      };
    }
    return event;
  });
}

/**
 * Delete an event
 */
export function deleteEvent(events: TimelineEvent[], eventId: string): TimelineEvent[] {
  return events.filter(event => event.id !== eventId);
}

/**
 * Link related events
 */
export function linkEvents(events: TimelineEvent[], eventId1: string, eventId2: string): TimelineEvent[] {
  return events.map(event => {
    if (event.id === eventId1) {
      return {
        ...event,
        relatedEvents: [...(event.relatedEvents || []), eventId2],
      };
    }
    if (event.id === eventId2) {
      return {
        ...event,
        relatedEvents: [...(event.relatedEvents || []), eventId1],
      };
    }
    return event;
  });
}

// ============================================================================
// Zoom Level Management
// ============================================================================

/**
 * Get appropriate time grouping for zoom level
 */
export function getTimeGroupingForZoom(zoomLevel: ZoomLevel): string {
  switch (zoomLevel) {
    case 'year':
      return 'year';
    case 'month':
      return 'month';
    case 'week':
      return 'week';
    case 'day':
      return 'day';
    default:
      return 'month';
  }
}

/**
 * Group events by time period for the given zoom level
 */
export function groupEventsByTimePeriod(
  events: TimelineEvent[],
  zoomLevel: ZoomLevel
): Map<string, TimelineEvent[]> {
  const groups = new Map<string, TimelineEvent[]>();
  
  for (const event of events) {
    let key: string;
    
    switch (zoomLevel) {
      case 'year':
        key = event.date.getFullYear().toString();
        break;
      case 'month':
        key = `${event.date.getFullYear()}-${String(event.date.getMonth() + 1).padStart(2, '0')}`;
        break;
      case 'week':
        const weekStart = new Date(event.date);
        weekStart.setDate(event.date.getDate() - event.date.getDay());
        key = weekStart.toISOString().split('T')[0];
        break;
      case 'day':
        key = event.date.toISOString().split('T')[0];
        break;
      default:
        key = `${event.date.getFullYear()}-${String(event.date.getMonth() + 1).padStart(2, '0')}`;
    }
    
    const group = groups.get(key) || [];
    group.push(event);
    groups.set(key, group);
  }
  
  return groups;
}

// ============================================================================
// Timeline Statistics
// ============================================================================

export interface TimelineStatistics {
  totalEvents: number;
  eventsByCategory: Record<EventCategory, number>;
  eventsBySeverity: Record<EventSeverity, number>;
  eventsBySource: Record<string, number>;
  dateRange: { start: Date; end: Date };
  mostActiveMonth?: string;
  criticalEvents: number;
}

/**
 * Calculate timeline statistics
 */
export function calculateStatistics(events: TimelineEvent[]): TimelineStatistics {
  const stats: TimelineStatistics = {
    totalEvents: events.length,
    eventsByCategory: { medical: 0, lifestyle: 0, 'life-event': 0, milestone: 0 },
    eventsBySeverity: { critical: 0, high: 0, moderate: 0, low: 0, info: 0 },
    eventsBySource: {},
    dateRange: { start: new Date(), end: new Date() },
    criticalEvents: 0,
  };
  
  if (events.length === 0) return stats;
  
  const dates = events.map(e => e.date.getTime());
  stats.dateRange = {
    start: new Date(Math.min(...dates)),
    end: new Date(Math.max(...dates)),
  };
  
  const monthCounts = new Map<string, number>();
  
  for (const event of events) {
    // Category counts
    stats.eventsByCategory[event.category]++;
    
    // Severity counts
    stats.eventsBySeverity[event.severity]++;
    
    // Source counts
    stats.eventsBySource[event.source] = (stats.eventsBySource[event.source] || 0) + 1;
    
    // Critical events
    if (event.severity === 'critical') {
      stats.criticalEvents++;
    }
    
    // Month counts
    const monthKey = `${event.date.getFullYear()}-${String(event.date.getMonth() + 1).padStart(2, '0')}`;
    monthCounts.set(monthKey, (monthCounts.get(monthKey) || 0) + 1);
  }
  
  // Find most active month
  const mostActive = Array.from(monthCounts.entries())
    .sort((a, b) => b[1] - a[1])[0];
  if (mostActive) {
    stats.mostActiveMonth = mostActive[0];
  }
  
  return stats;
}

// ============================================================================
// Storage & Persistence
// ============================================================================

const STORAGE_KEY = 'health_timeline_events';

/**
 * Save timeline events to local storage
 */
export function saveTimelineEvents(events: TimelineEvent[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (e) {
    console.error('Failed to save timeline events:', e);
  }
}

/**
 * Load timeline events from local storage
 */
export function loadTimelineEvents(): TimelineEvent[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const events = JSON.parse(stored) as TimelineEvent[];
      // Restore Date objects
      return events.map(e => ({
        ...e,
        date: new Date(e.date),
        endDate: e.endDate ? new Date(e.endDate) : undefined,
        createdAt: new Date(e.createdAt),
        updatedAt: new Date(e.updatedAt),
      }));
    }
  } catch (e) {
    console.error('Failed to load timeline events:', e);
  }
  return [];
}

/**
 * Clear all timeline events
 */
export function clearTimelineEvents(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear timeline events:', e);
  }
}

/**
 * Export timeline data
 */
export function exportTimelineData(events: TimelineEvent[]): string {
  return JSON.stringify(events, null, 2);
}

/**
 * Import timeline data
 */
export function importTimelineData(jsonData: string): TimelineEvent[] {
  try {
    const events = JSON.parse(jsonData) as TimelineEvent[];
    // Restore Date objects
    return events.map(e => ({
      ...e,
      date: new Date(e.date),
      endDate: e.endDate ? new Date(e.endDate) : undefined,
      createdAt: new Date(e.createdAt),
      updatedAt: new Date(e.updatedAt),
    }));
  } catch (e) {
    console.error('Failed to import timeline data:', e);
    return [];
  }
}
