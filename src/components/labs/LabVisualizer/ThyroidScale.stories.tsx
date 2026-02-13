import type { Meta, StoryObj } from '@storybook/react';
import { ThyroidScale } from './ThyroidScale';

const meta: Meta<typeof ThyroidScale> = {
  title: 'LabVisualizer/ThyroidScale',
  component: ThyroidScale,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Thermostat-style visualization of thyroid function showing TSH position on hypo/normal/hyper scale. Features an animated thyroid gland that pulses differently based on thyroid status.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tsh: {
      control: { type: 'range', min: 0, max: 15, step: 0.1 },
      description: 'TSH (Thyroid Stimulating Hormone) level in mIU/L',
    },
    t3: {
      control: 'number',
      description: 'T3 (Triiodothyronine) level in ng/dL (optional)',
    },
    t4: {
      control: 'number',
      description: 'T4 (Thyroxine) level in μg/dL (optional)',
    },
    showHormones: {
      control: 'boolean',
      description: 'Show T3/T4 hormone levels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultReferenceRanges = {
  tsh: { low: 0.4, high: 4.0 },
  t3: { low: 80, high: 200 },
  t4: { low: 5.0, high: 12.0 },
};

// Normal thyroid
export const Normal: Story = {
  args: {
    tsh: 2.5,
    t3: 120,
    t4: 8.5,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Normal thyroid function with TSH in the optimal range (0.4-4.0 mIU/L).',
      },
    },
  },
};

// Hypothyroidism - High TSH
export const Hypothyroidism: Story = {
  args: {
    tsh: 8.5,
    t3: 75,
    t4: 4.2,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hypothyroidism (underactive thyroid) with elevated TSH and low T3/T4. Gland pulses slowly.',
      },
    },
  },
};

// Hyperthyroidism - Low TSH
export const Hyperthyroidism: Story = {
  args: {
    tsh: 0.15,
    t3: 245,
    t4: 14.8,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hyperthyroidism (overactive thyroid) with suppressed TSH and elevated T3/T4. Gland pulses rapidly.',
      },
    },
  },
};

// Subclinical hypothyroidism
export const SubclinicalHypothyroidism: Story = {
  args: {
    tsh: 5.8,
    t3: 110,
    t4: 7.8,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Subclinical hypothyroidism with mildly elevated TSH but normal T3/T4 levels.',
      },
    },
  },
};

// Subclinical hyperthyroidism
export const SubclinicalHyperthyroidism: Story = {
  args: {
    tsh: 0.25,
    t3: 115,
    t4: 8.2,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Subclinical hyperthyroidism with mildly low TSH but normal T3/T4 levels.',
      },
    },
  },
};

// With trend (improving)
export const ImprovingHypothyroidism: Story = {
  args: {
    tsh: 5.2,
    t3: 95,
    t4: 6.8,
    referenceRanges: defaultReferenceRanges,
    previousTsh: 12.5,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Improving hypothyroidism - TSH decreasing with treatment.',
      },
    },
  },
};

// With trend (worsening)
export const WorseningHyperthyroidism: Story = {
  args: {
    tsh: 0.08,
    t3: 280,
    t4: 16.5,
    referenceRanges: defaultReferenceRanges,
    previousTsh: 0.5,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Worsening hyperthyroidism - TSH becoming more suppressed.',
      },
    },
  },
};

// TSH only (no T3/T4)
export const TSHOnly: Story = {
  args: {
    tsh: 3.8,
    referenceRanges: defaultReferenceRanges,
    showHormones: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'TSH-only view without T3/T4 hormone display.',
      },
    },
  },
};

// Severe hypothyroidism
export const SevereHypothyroidism: Story = {
  args: {
    tsh: 25.0,
    t3: 45,
    t4: 2.1,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Severe hypothyroidism with very high TSH and very low thyroid hormones.',
      },
    },
  },
};

// Severe hyperthyroidism
export const SevereHyperthyroidism: Story = {
  args: {
    tsh: 0.01,
    t3: 380,
    t4: 22.0,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Severe hyperthyroidism with suppressed TSH and very high thyroid hormones.',
      },
    },
  },
};

// Interactive demo
export const Interactive: Story = {
  args: {
    tsh: 2.0,
    t3: 125,
    t4: 9.0,
    referenceRanges: defaultReferenceRanges,
    showHormones: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to adjust TSH value and see the visualization change.',
      },
    },
  },
};
