import type { Meta, StoryObj } from '@storybook/react';
import { LabGauge } from './LabGauge';

const meta: Meta<typeof LabGauge> = {
  title: 'LabVisualizer/LabGauge',
  component: LabGauge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular gauge component that shows where a lab result falls within the reference range. Color-coded for normal (green), borderline (yellow), and abnormal (red) values. Includes trend arrow showing improvement or worsening vs previous result.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current lab value',
    },
    previousValue: {
      control: 'number',
      description: 'Previous lab value for trend comparison',
    },
    referenceRange: {
      control: 'object',
      description: 'Reference range with low and high values',
    },
    size: {
      control: { type: 'range', min: 80, max: 200, step: 10 },
      description: 'Size of the gauge in pixels',
    },
    showTrend: {
      control: 'boolean',
      description: 'Show trend arrow',
    },
    status: {
      control: 'select',
      options: ['normal', 'borderline', 'abnormal', 'critical'],
      description: 'Status of the lab result (computed from value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Normal glucose reading
export const Normal: Story = {
  args: {
    testName: 'Glucose',
    value: 95,
    unit: 'mg/dL',
    referenceRange: { low: 70, high: 100 },
    previousValue: 92,
    tooltip: 'Blood glucose level after fasting. Normal range: 70-100 mg/dL',
  },
};

// Borderline cholesterol
export const Borderline: Story = {
  args: {
    testName: 'Total Cholesterol',
    value: 210,
    unit: 'mg/dL',
    referenceRange: { low: 0, high: 200 },
    previousValue: 205,
    tooltip: 'Total cholesterol in your blood. Desirable: <200 mg/dL',
  },
};

// Abnormal high value
export const AbnormalHigh: Story = {
  args: {
    testName: 'LDL Cholesterol',
    value: 165,
    unit: 'mg/dL',
    referenceRange: { low: 0, high: 100 },
    previousValue: 150,
    tooltip: 'LDL is the "bad" cholesterol. Optimal: <100 mg/dL',
  },
};

// Abnormal low value
export const AbnormalLow: Story = {
  args: {
    testName: 'Hemoglobin',
    value: 9.5,
    unit: 'g/dL',
    referenceRange: { low: 12, high: 16 },
    previousValue: 10.2,
    tooltip: 'Hemoglobin carries oxygen in red blood cells. Low levels indicate anemia.',
  },
};

// Improving trend
export const Improving: Story = {
  args: {
    testName: 'HbA1c',
    value: 6.8,
    unit: '%',
    referenceRange: { low: 0, high: 5.7 },
    previousValue: 7.5,
    tooltip: 'HbA1c shows average blood sugar over 2-3 months. Lower is better.',
  },
};

// Worsening trend
export const Worsening: Story = {
  args: {
    testName: 'Blood Pressure',
    value: 145,
    unit: 'mmHg',
    referenceRange: { low: 90, high: 120 },
    previousValue: 132,
    tooltip: 'Systolic blood pressure. Normal: <120 mmHg',
  },
};

// Large size
export const Large: Story = {
  args: {
    testName: 'Vitamin D',
    value: 28,
    unit: 'ng/mL',
    referenceRange: { low: 30, high: 100 },
    previousValue: 25,
    size: 160,
    showTrend: true,
    tooltip: 'Vitamin D is essential for bone health. Normal: 30-100 ng/mL',
  },
};

// Without trend
export const NoTrend: Story = {
  args: {
    testName: 'Potassium',
    value: 4.2,
    unit: 'mEq/L',
    referenceRange: { low: 3.5, high: 5.0 },
    showTrend: false,
    tooltip: 'Potassium is important for heart and muscle function.',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    testName: 'TSH',
    value: 0,
    unit: 'mIU/L',
    referenceRange: { low: 0.4, high: 4.0 },
    isLoading: true,
  },
};

// Multiple gauges example
export const MultipleGauges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <LabGauge
        testName="Glucose"
        value={95}
        unit="mg/dL"
        referenceRange={{ low: 70, high: 100 }}
        previousValue={92}
      />
      <LabGauge
        testName="HDL"
        value={55}
        unit="mg/dL"
        referenceRange={{ low: 40, high: 60 }}
        previousValue={48}
      />
      <LabGauge
        testName="LDL"
        value={130}
        unit="mg/dL"
        referenceRange={{ low: 0, high: 100 }}
        previousValue={145}
      />
      <LabGauge
        testName="Triglycerides"
        value={180}
        unit="mg/dL"
        referenceRange={{ low: 0, high: 150 }}
        previousValue={165}
      />
    </div>
  ),
};
