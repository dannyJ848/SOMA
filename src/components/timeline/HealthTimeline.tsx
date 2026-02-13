/**
 * HealthTimeline Component
 * 
 * Main timeline visualization component with vertical scrollable timeline,
 * color-coded events, icons, expandable details, and filtering.
 */

import React, { useState, useMemo, useCallback } from 'react';
import type {
  TimelineEvent,
  EventCluster,
  ZoomLevel,
  EventCategory,
  EventSeverity,
  TimelineFilters,
  TimelineInsight,
} from '../../../core/timeline';
import {
  ALL_EVENT_CATEGORIES,
  ALL_EVENT_SEVERITIES,
  filterEvents,
  clusterEvents,
  groupEventsByTimePeriod,
} from '../../../core/timeline';
import { TimelineEventCard } from './TimelineEventCard';
import { TimelineCluster } from './TimelineCluster';
import { TimelineFilters as FilterPanel } from './TimelineFilters';
import { TimelineInsights } from './TimelineInsights';
import { TimelineExport } from './TimelineExport';

// ============================================================================
// Icons
// ============================================================================

const CategoryIcons: Record<EventCategory, string> = {
  medical: '🏥',
  lifestyle: '🌱',
  'life-event': '📅',
  milestone: '🏆',
};

const SeverityColors: Record<EventSeverity, { bg: string; border: string; text: string }> = {
  critical: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700' },
  high: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700' },
  moderate: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
  low: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
  info: { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-600' },
};

// ============================================================================
// Types
// ============================================================================

interface HealthTimelineProps {
  events: TimelineEvent[];
  insights: TimelineInsight[];
  onEventClick?: (event: TimelineEvent) => void;
  onEventEdit?: (event: TimelineEvent) => void;
  onEventDelete?: (eventId: string) => void;
  onAddEvent?: () => void;
  readOnly?: boolean;
}

// ============================================================================
// Component
// ============================================================================

export const HealthTimeline: React.FC<HealthTimelineProps> = ({
  events,
  insights,
  onEventClick,
  onEventEdit,
  onEventDelete,
  onAddEvent,
  readOnly = false,
}) => {
  // State
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>('month');
  const [filters, setFilters] = useState<TimelineFilters>({
    categories: [...ALL_EVENT_CATEGORIES],
    eventTypes: [],
    severity: [...ALL_EVENT_SEVERITIES],
    status: [],
    searchQuery: '',
    tags: [],
    sources: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>();
  const [expandedClusterIds, setExpandedClusterIds] = useState<Set<string>>(new Set());

  // Filter events
  const filteredEvents = useMemo(() => {
    return filterEvents(events, filters);
  }, [events, filters]);

  // Group events by time period
  const groupedEvents = useMemo(() => {
    return groupEventsByTimePeriod(filteredEvents, zoomLevel);
  }, [filteredEvents, zoomLevel]);

  // Generate clusters for auto-clustering
  const clusters = useMemo(() => {
    return clusterEvents(filteredEvents, 'auto', zoomLevel);
  }, [filteredEvents, zoomLevel]);

  // Sort time groups chronologically
  const sortedTimeGroups = useMemo(() => {
    return Array.from(groupedEvents.entries()).sort((a, b) => 
      b[0].localeCompare(a[0]) // Newest first
    );
  }, [groupedEvents]);

  // Statistics
  const stats = useMemo(() => {
    const total = events.length;
    const filtered = filteredEvents.length;
    const byCategory = {
      medical: filteredEvents.filter(e => e.category === 'medical').length,
      lifestyle: filteredEvents.filter(e => e.category === 'lifestyle').length,
      'life-event': filteredEvents.filter(e => e.category === 'life-event').length,
      milestone: filteredEvents.filter(e => e.category === 'milestone').length,
    };
    return { total, filtered, byCategory };
  }, [events, filteredEvents]);

  // Handlers
  const handleEventClick = useCallback((event: TimelineEvent) => {
    setSelectedEventId(event.id);
    onEventClick?.(event);
  }, [onEventClick]);

  const handleClusterToggle = useCallback((clusterId: string) => {
    setExpandedClusterIds(prev => {
      const next = new Set(prev);
      if (next.has(clusterId)) {
        next.delete(clusterId);
      } else {
        next.add(clusterId);
      }
      return next;
    });
  }, []);

  const handleZoomChange = useCallback((newZoom: ZoomLevel) => {
    setZoomLevel(newZoom);
  }, []);

  // Render time period label
  const renderTimeLabel = (key: string) => {
    switch (zoomLevel) {
      case 'year':
        return key;
      case 'month':
        const [year, month] = key.split('-');
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        });
      case 'week':
        return `Week of ${new Date(key).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}`;
      case 'day':
        return new Date(key).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      default:
        return key;
    }
  };

  return (
    <div className="health-timeline bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📅</span>
            <div>
              <h2 className="text-xl font-bold">Health Timeline</h2>
              <p className="text-blue-100 text-sm">
                {stats.filtered} of {stats.total} events
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {!readOnly && (
              <button
                onClick={onAddEvent}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
              >
                <span>+</span> Add Event
              </button>
            )}
            <button
              onClick={() => setShowInsights(!showInsights)}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-2 ${
                showInsights ? 'bg-white text-blue-700' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              💡 Insights
              {insights.length > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {insights.length}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-2 ${
                showFilters ? 'bg-white text-blue-700' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              🔍 Filters
            </button>
            
            <button
              onClick={() => setShowExport(!showExport)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm font-medium"
            >
              📤 Export
            </button>
          </div>
        </div>
        
        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-100">Zoom:</span>
          <div className="flex bg-white/20 rounded-lg p-1">
            {(['year', 'month', 'week', 'day'] as ZoomLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => handleZoomChange(level)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  zoomLevel === level
                    ? 'bg-white text-blue-700'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Category Legend */}
          <div className="flex items-center gap-4 ml-6">
            {ALL_EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilters((prev) => ({
                    ...prev,
                    categories: prev.categories.includes(cat)
                      ? prev.categories.filter((c) => c !== cat)
                      : [...prev.categories, cat],
                  }));
                }}
                className={`flex items-center gap-1 text-sm transition-opacity ${
                  filters.categories.includes(cat) ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <span>{CategoryIcons[cat]}</span>
                <span className="capitalize">{cat.replace('-', ' ')}</span>
                <span className="text-blue-200">({stats.byCategory[cat]})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Timeline */}
        <div className="flex-1 p-4">
          {/* Filters Panel */}
          {showFilters && (
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              events={events}
            />
          )}

          {/* Insights Panel */}
          {showInsights && (
            <TimelineInsights
              insights={insights}
              onClose={() => setShowInsights(false)}
            />
          )}

          {/* Export Panel */}
          {showExport && (
            <TimelineExport
              events={filteredEvents}
              insights={insights}
              onClose={() => setShowExport(false)}
            />
          )}

          {/* Timeline Content */}
          <div className="timeline-content space-y-6">
            {sortedTimeGroups.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-4">📭</div>
                <p className="text-lg">No events match your filters</p>
                <p className="text-sm">Try adjusting your filters or add new events</p>
              </div>
            ) : (
              sortedTimeGroups.map(([timeKey, timeEvents]) => (
                <div key={timeKey} className="timeline-group">
                  {/* Time Period Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {renderTimeLabel(timeKey)}
                    </h3>
                    <span className="text-sm text-gray-500">
                      ({timeEvents.length} events)
                    </span>
                  </div>

                  {/* Events */}
                  <div className="ml-1.5 pl-6 border-l-2 border-gray-200 space-y-4">
                    {timeEvents.map((event) => {
                      // Check if event is part of a cluster
                      const containingCluster = clusters.find((c) =>
                        c.events.some((e) => e.id === event.id)
                      );

                      if (containingCluster && !expandedClusterIds.has(containingCluster.id)) {
                        // Only show cluster header for first event in cluster
                        if (containingCluster.events[0].id === event.id) {
                          return (
                            <TimelineCluster
                              key={containingCluster.id}
                              cluster={containingCluster}
                              isExpanded={false}
                              onToggle={() => handleClusterToggle(containingCluster.id)}
                              severityColors={SeverityColors}
                            />
                          );
                        }
                        return null;
                      }

                      return (
                        <TimelineEventCard
                          key={event.id}
                          event={event}
                          isSelected={selectedEventId === event.id}
                          onClick={() => handleEventClick(event)}
                          onEdit={onEventEdit && !readOnly ? () => onEventEdit(event) : undefined}
                          onDelete={onEventDelete && !readOnly ? () => onEventDelete(event.id) : undefined}
                          categoryIcons={CategoryIcons}
                          severityColors={SeverityColors}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTimeline;
