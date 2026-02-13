/**
 * TimelineFilters Component
 * 
 * Filter panel for the health timeline with category, severity,
 * date range, and search filters.
 */

import React, { useState, useMemo } from 'react';
import type { TimelineFilters, EventCategory, EventSeverity, EventStatus, TimelineEvent } from '../../../core/timeline';
import { ALL_EVENT_CATEGORIES, ALL_EVENT_SEVERITIES, ALL_EVENT_STATUSES } from '../../../core/timeline';

// ============================================================================
// Types
// ============================================================================

interface TimelineFiltersProps {
  filters: TimelineFilters;
  onChange: (filters: TimelineFilters) => void;
  events: TimelineEvent[];
}

// ============================================================================
// Component
// ============================================================================

export const TimelineFilters: React.FC<TimelineFiltersProps> = ({
  filters,
  onChange,
  events,
}) => {
  const [showDateRange, setShowDateRange] = useState(false);

  // Extract unique event types and tags from events
  const { eventTypes, tags, sources } = useMemo(() => {
    const types = new Set<string>();
    const allTags = new Set<string>();
    const allSources = new Set<string>();

    for (const event of events) {
      types.add(event.type);
      event.tags.forEach(tag => allTags.add(tag));
      allSources.add(event.source);
    }

    return {
      eventTypes: Array.from(types).sort(),
      tags: Array.from(allTags).sort(),
      sources: Array.from(allSources).sort(),
    };
  }, [events]);

  // Count events per filter option
  const counts = useMemo(() => {
    const categoryCounts: Record<EventCategory, number> = {
      medical: 0,
      lifestyle: 0,
      'life-event': 0,
      milestone: 0,
    };
    const severityCounts: Record<EventSeverity, number> = {
      critical: 0,
      high: 0,
      moderate: 0,
      low: 0,
      info: 0,
    };
    const statusCounts: Record<EventStatus, number> = {
      active: 0,
      resolved: 0,
      ongoing: 0,
      scheduled: 0,
      cancelled: 0,
    };

    for (const event of events) {
      categoryCounts[event.category]++;
      severityCounts[event.severity]++;
      statusCounts[event.status]++;
    }

    return { categoryCounts, severityCounts, statusCounts };
  }, [events]);

  const toggleArrayFilter = <T extends string>(
    key: keyof TimelineFilters,
    value: T,
    currentValues: T[]
  ) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    onChange({ ...filters, [key]: newValues });
  };

  const clearFilters = () => {
    onChange({
      categories: [...ALL_EVENT_CATEGORIES],
      eventTypes: [],
      severity: [...ALL_EVENT_SEVERITIES],
      status: [],
      searchQuery: '',
      tags: [],
      sources: [],
    });
  };

  const hasActiveFilters =
    filters.categories.length !== ALL_EVENT_CATEGORIES.length ||
    filters.eventTypes.length > 0 ||
    filters.severity.length !== ALL_EVENT_SEVERITIES.length ||
    filters.status.length > 0 ||
    filters.searchQuery ||
    filters.tags.length > 0 ||
    filters.sources.length > 0 ||
    filters.dateRange;

  // Category colors
  const categoryStyles: Record<EventCategory, { bg: string; border: string; icon: string }> = {
    medical: { bg: 'bg-red-50', border: 'border-red-200', icon: '🏥' },
    lifestyle: { bg: 'bg-green-50', border: 'border-green-200', icon: '🌱' },
    'life-event': { bg: 'bg-orange-50', border: 'border-orange-200', icon: '📅' },
    milestone: { bg: 'bg-purple-50', border: 'border-purple-200', icon: '🏆' },
  };

  // Severity colors
  const severityStyles: Record<EventSeverity, { bg: string; border: string; color: string }> = {
    critical: { bg: 'bg-red-100', border: 'border-red-300', color: 'text-red-700' },
    high: { bg: 'bg-orange-100', border: 'border-orange-300', color: 'text-orange-700' },
    moderate: { bg: 'bg-yellow-100', border: 'border-yellow-300', color: 'text-yellow-700' },
    low: { bg: 'bg-green-100', border: 'border-green-300', color: 'text-green-700' },
    info: { bg: 'bg-gray-100', border: 'border-gray-300', color: 'text-gray-600' },
  };

  return (
    <div className="timeline-filters bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          🔍 Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Search */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
          <div className="relative">
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
              placeholder="Search events..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Categories</label>
          <div className="flex flex-wrap gap-2">
            {ALL_EVENT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => toggleArrayFilter('categories', category, filters.categories)}
                className={`
                  px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                  ${filters.categories.includes(category)
                    ? `${categoryStyles[category].bg} ${categoryStyles[category].border}`
                    : 'bg-white border-gray-200 text-gray-500 opacity-60'
                  }
                `}
              >
                <span className="mr-1">{categoryStyles[category].icon}</span>
                <span className="capitalize">{category.replace('-', ' ')}</span>
                <span className="ml-1 text-gray-500">({counts.categoryCounts[category]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Severity */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Severity</label>
          <div className="flex flex-wrap gap-2">
            {ALL_EVENT_SEVERITIES.map((severity) => (
              <button
                key={severity}
                onClick={() => toggleArrayFilter('severity', severity, filters.severity)}
                className={`
                  px-3 py-1.5 rounded-full border-2 text-xs font-medium transition-all capitalize
                  ${filters.severity.includes(severity)
                    ? `${severityStyles[severity].bg} ${severityStyles[severity].border} ${severityStyles[severity].color}`
                    : 'bg-white border-gray-200 text-gray-500 opacity-60'
                  }
                `}
              >
                {severity}
                <span className="ml-1">({counts.severityCounts[severity]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
          <div className="flex flex-wrap gap-2">
            {ALL_EVENT_STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => toggleArrayFilter('status', status, filters.status)}
                className={`
                  px-3 py-1.5 rounded-full border-2 text-xs font-medium transition-all capitalize
                  ${filters.status.includes(status)
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-500 opacity-60'
                  }
                `}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Event Types */}
        {eventTypes.length > 0 && (
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Event Types</label>
            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleArrayFilter('eventTypes', type, filters.eventTypes)}
                  className={`
                    px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-all
                    ${filters.eventTypes.includes(type)
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-200 text-gray-600'
                    }
                  `}
                >
                  {type.replace(/-/g, ' ')}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Tags</label>
            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleArrayFilter('tags', tag, filters.tags)}
                  className={`
                    px-2 py-1 rounded-full border text-xs transition-all
                    ${filters.tags.includes(tag)
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-gray-100 border-gray-200 text-gray-600'
                    }
                  `}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Date Range */}
        <div>
          <button
            onClick={() => setShowDateRange(!showDateRange)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <span>{showDateRange ? '▼' : '▶'}</span>
            Date Range
            {filters.dateRange && <span className="text-blue-600">(active)</span>}
          </button>
          
          {showDateRange && (
            <div className="mt-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-gray-500">From</label>
                  <input
                    type="date"
                    value={filters.dateRange?.start?.toISOString().split('T')[0] || ''}
                    onChange={(e) => {
                      const date = e.target.value ? new Date(e.target.value) : undefined;
                      onChange({
                        ...filters,
                        dateRange: date
                          ? { start: date, end: filters.dateRange?.end || new Date() }
                          : undefined,
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">To</label>
                  <input
                    type="date"
                    value={filters.dateRange?.end?.toISOString().split('T')[0] || ''}
                    onChange={(e) => {
                      const date = e.target.value ? new Date(e.target.value) : undefined;
                      onChange({
                        ...filters,
                        dateRange: date
                          ? { start: filters.dateRange?.start || new Date(0), end: date }
                          : undefined,
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              
              {filters.dateRange && (
                <button
                  onClick={() => onChange({ ...filters, dateRange: undefined })}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  Clear date range
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilters;
