import type { Meta, StoryObj } from '@storybook/react';
import { LipidPanelChart } from './LipidPanelChart';

const meta: Meta<typeof LipidPanelChart> = {
  title: 'LabVisualizer/LipidPanelChart',
  component: LipidPanelChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Heart-shaped visualization showing lipid panel results. LDL appears as "bad cholesterol clouds" that shrink with treatment, HDL as a "protective shield" that grows. Includes animated cholesterol transport particles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    results: {
      control: 'object',
      description: 'Lipid panel results including total cholesterol, LDL, HDL, and triglycerides',
    },
    animated: {
      control: 'boolean',
      description: 'Enable heart beat and particle animations',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultReferenceRanges = {
  totalCholesterol: { low: 0, high: 200 },
  ldl: { optimal: 100, nearOptimal: 130, borderline: 160, high: 190 },
  hdl: { low: 40, high: 60 },
  triglycerides: { low: 0, high: 150 },
};

// Optimal lipid panel
export const Optimal: Story = {
  args: {
    results: {
      totalCholesterol: 175,
      ldl: 95,
      hdl: 65,
      triglycerides: 110,
    },
    referenceRanges: defaultReferenceRanges,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Optimal lipid panel with protective HDL shield prominent and minimal LDL clouds.',
      },
    },
  },
};

// Borderline high LDL
export const BorderlineLDL: Story = {
  args: {
    results: {
      totalCholesterol: 215,
      ldl: 145,
      hdl: 45,
      triglycerides: 165,
    },
    referenceRanges: defaultReferenceRanges,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Borderline high LDL with moderate cloud formation and smaller protective shield.',
      },
    },
  },
};

// High LDL - Needs attention
export const HighLDL: Story = {
  args: {
    results: {
      totalCholesterol: 265,
      ldl: 185,
      hdl: 38,
      triglycerides: 210,
    },
    referenceRanges: defaultReferenceRanges,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'High LDL shows larger red clouds representing elevated "bad cholesterol".',
      },
    },
  },
};

// Low HDL
export const LowHDL: Story = {
  args: {
    results: {
      totalCholesterol: 190,
      ldl: 115,
      hdl: 32,
      triglycerides: 145,
    },
    referenceRanges: defaultReferenceRanges,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Low HDL shows a faint protective shield, indicating less protection against heart disease.',
      },
    },
  },
};

// With improvement trend
export const Improving: Story = {
  args: {
    results: {
      totalCholesterol: 195,
      ldl: 120,
      hdl: 48,
      triglycerides: 135,
    },
    referenceRanges: defaultReferenceRanges,
    previousResults: {
      totalCholesterol: 245,
      ldl: 165,
      hdl: 42,
      triglycerides: 190,
    },
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows improvement in lipid values with trend indicators. LDL down 27%, HDL up 14%.',
      },
    },
  },
};

// Without animation
export const NoAnimation: Story = {
  args: {
    results: {
      totalCholesterol: 225,
      ldl: 155,
      hdl: 42,
      triglycerides: 180,
    },
    referenceRanges: defaultReferenceRanges,
    animated: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Static visualization without heart beat or particle animations.',
      },
    },
  },
};

// Very high risk profile
export const VeryHighRisk: Story = {
  args: {
    results: {
      totalCholesterol: 320,
      ldl: 240,
      hdl: 28,
      triglycerides: 450,
    },
    referenceRanges: defaultReferenceRanges,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Severe dyslipidemia with very high LDL and triglycerides, very low HDL.',
      },
    },
  },
};
