import type { Meta, StoryObj } from '@storybook/react';
import { DiabetesDashboard } from './DiabetesDashboard';

const meta: Meta<typeof DiabetesDashboard> = {
  title: 'LabVisualizer/DiabetesDashboard',
  component: DiabetesDashboard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive diabetes management dashboard featuring HbA1c timeline with goal line, glucose variability visualization, and time-in-range circular chart.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    results: {
      control: 'object',
      description: 'Diabetes results including HbA1c and glucose readings',
    },
    timeRange: {
      control: 'select',
      options: ['1d', '7d', '14d', '30d', '90d'],
      description: 'Time range for glucose data display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultReferenceRanges = {
  hba1c: { normal: 5.7, prediabetes: 6.5, diabetes: 10 },
  glucose: {
    fasting: { low: 70, high: 100 },
    postprandial: { low: 70, high: 140 },
  },
};

// Generate sample glucose readings
const generateGlucoseReadings = (count: number, baseValue: number, variance: number) => {
  const readings = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - i * 4 * 60 * 60 * 1000); // Every 4 hours
    const value = baseValue + (Math.random() - 0.5) * variance;
    readings.push({
      value: Math.round(clamp(value, 60, 300)),
      timestamp,
      isFasting: Math.random() > 0.7,
    });
  }
  return readings.reverse();
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

// Well controlled diabetes
export const WellControlled: Story = {
  args: {
    results: {
      hba1c: 6.2,
      glucoseReadings: generateGlucoseReadings(42, 120, 30),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    previousHba1c: 6.8,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Well-controlled diabetes with HbA1c near target (<7%) and good time in range.',
      },
    },
  },
};

// Prediabetes
export const Prediabetes: Story = {
  args: {
    results: {
      hba1c: 6.0,
      glucoseReadings: generateGlucoseReadings(28, 110, 25),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Prediabetes range (HbA1c 5.7-6.4%) with elevated but not diabetic glucose levels.',
      },
    },
  },
};

// Poorly controlled diabetes
export const PoorlyControlled: Story = {
  args: {
    results: {
      hba1c: 9.5,
      glucoseReadings: generateGlucoseReadings(42, 180, 60),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    previousHba1c: 10.2,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Poorly controlled diabetes with high HbA1c and significant glucose variability.',
      },
    },
  },
};

// High variability
export const HighVariability: Story = {
  args: {
    results: {
      hba1c: 7.8,
      glucoseReadings: [
        ...generateGlucoseReadings(20, 90, 20),
        ...generateGlucoseReadings(20, 220, 40),
      ],
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'High glucose variability with swings between low and high values.',
      },
    },
  },
};

// Frequent hypoglycemia
export const FrequentHypoglycemia: Story = {
  args: {
    results: {
      hba1c: 6.5,
      glucoseReadings: generateGlucoseReadings(42, 95, 50),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    previousHba1c: 7.0,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Low HbA1c but with frequent hypoglycemic episodes (<70 mg/dL).',
      },
    },
  },
};

// Different time ranges
export const TimeRange14Days: Story = {
  args: {
    results: {
      hba1c: 7.2,
      glucoseReadings: generateGlucoseReadings(84, 140, 45),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    timeRange: '14d',
  },
  parameters: {
    docs: {
      description: {
        story: '14-day view showing more data points for trend analysis.',
      },
    },
  },
};

export const TimeRange30Days: Story = {
  args: {
    results: {
      hba1c: 7.0,
      glucoseReadings: generateGlucoseReadings(180, 135, 40),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    previousHba1c: 7.8,
    timeRange: '30d',
  },
  parameters: {
    docs: {
      description: {
        story: '30-day view for longer-term pattern analysis.',
      },
    },
  },
};

// Minimal data
export const MinimalData: Story = {
  args: {
    results: {
      hba1c: 7.5,
      glucoseReadings: generateGlucoseReadings(5, 145, 35),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows dashboard with minimal glucose readings - trend graph will show insufficient data.',
      },
    },
  },
};

// Normal glucose
export const NormalGlucose: Story = {
  args: {
    results: {
      hba1c: 5.2,
      glucoseReadings: generateGlucoseReadings(28, 95, 15),
      targetRange: { low: 70, high: 180 },
    },
    referenceRanges: defaultReferenceRanges,
    timeRange: '7d',
  },
  parameters: {
    docs: {
      description: {
        story: 'Normal glucose levels without diabetes.',
      },
    },
  },
};
