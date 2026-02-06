import type { Meta, StoryObj } from '@storybook/react';
import { CBCVisualization } from './CBCVisualization';

const meta: Meta<typeof CBCVisualization> = {
  title: 'LabVisualizer/CBCVisualization',
  component: CBCVisualization,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Visual blood cell display showing animated RBCs with anemia severity visualization, WBC differential as pie chart, and platelet count with clotting visual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    results: {
      control: 'object',
      description: 'CBC test results including hemoglobin, WBC, platelets, and differential',
    },
    referenceRanges: {
      control: 'object',
      description: 'Reference ranges for CBC values',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultReferenceRanges = {
  hemoglobin: { low: 12.0, high: 16.0 },
  hematocrit: { low: 36.0, high: 46.0 },
  rbcCount: { low: 4.0, high: 5.5 },
  wbcCount: { low: 4.5, high: 11.0 },
  plateletCount: { low: 150, high: 400 },
};

// Normal CBC results
export const Normal: Story = {
  args: {
    results: {
      hemoglobin: 14.2,
      hematocrit: 42,
      rbcCount: 4.8,
      wbcCount: 7.5,
      plateletCount: 250,
      mcv: 88,
      mch: 29,
      differential: {
        neutrophils: 55,
        lymphocytes: 35,
        monocytes: 6,
        eosinophils: 3,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
  },
};

// Anemia - Low hemoglobin
export const Anemia: Story = {
  args: {
    results: {
      hemoglobin: 9.8,
      hematocrit: 30,
      rbcCount: 3.5,
      wbcCount: 6.8,
      plateletCount: 280,
      mcv: 78,
      mch: 26,
      differential: {
        neutrophils: 58,
        lymphocytes: 32,
        monocytes: 7,
        eosinophils: 2,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
  },
  parameters: {
    docs: {
      description: {
        story: 'Anemia visualization shows fewer red blood cells with different coloring to indicate severity.',
      },
    },
  },
};

// High WBC (infection)
export const HighWBC: Story = {
  args: {
    results: {
      hemoglobin: 13.5,
      hematocrit: 40,
      rbcCount: 4.6,
      wbcCount: 15.2,
      plateletCount: 320,
      differential: {
        neutrophils: 75,
        lymphocytes: 18,
        monocytes: 5,
        eosinophils: 1,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
  },
  parameters: {
    docs: {
      description: {
        story: 'High WBC count often indicates infection, with elevated neutrophils.',
      },
    },
  },
};

// Low platelets
export const LowPlatelets: Story = {
  args: {
    results: {
      hemoglobin: 12.8,
      hematocrit: 38,
      rbcCount: 4.4,
      wbcCount: 6.2,
      plateletCount: 85,
      differential: {
        neutrophils: 52,
        lymphocytes: 38,
        monocytes: 7,
        eosinophils: 2,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
  },
  parameters: {
    docs: {
      description: {
        story: 'Low platelet count visualization shows reduced particle flow animation.',
      },
    },
  },
};

// Without differential
export const NoDifferential: Story = {
  args: {
    results: {
      hemoglobin: 13.8,
      hematocrit: 41,
      rbcCount: 4.7,
      wbcCount: 8.2,
      plateletCount: 275,
    },
    referenceRanges: defaultReferenceRanges,
  },
  parameters: {
    docs: {
      description: {
        story: 'When differential data is not available, the pie chart section shows a message.',
      },
    },
  },
};

// With previous results comparison
export const WithComparison: Story = {
  args: {
    results: {
      hemoglobin: 11.5,
      hematocrit: 35,
      rbcCount: 4.0,
      wbcCount: 7.0,
      plateletCount: 290,
      differential: {
        neutrophils: 50,
        lymphocytes: 40,
        monocytes: 7,
        eosinophils: 2,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
    previousResults: {
      hemoglobin: 9.8,
      hematocrit: 30,
      rbcCount: 3.5,
      wbcCount: 6.8,
      plateletCount: 280,
      differential: {
        neutrophils: 52,
        lymphocytes: 38,
        monocytes: 7,
        eosinophils: 2,
        basophils: 1,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows improvement in hemoglobin after treatment.',
      },
    },
  },
};

// Critical values
export const CriticalValues: Story = {
  args: {
    results: {
      hemoglobin: 7.2,
      hematocrit: 22,
      rbcCount: 2.5,
      wbcCount: 2.8,
      plateletCount: 45,
      differential: {
        neutrophils: 35,
        lymphocytes: 55,
        monocytes: 8,
        eosinophils: 1,
        basophils: 1,
      },
    },
    referenceRanges: defaultReferenceRanges,
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical low values across all parameters - severe anemia and cytopenias.',
      },
    },
  },
};
