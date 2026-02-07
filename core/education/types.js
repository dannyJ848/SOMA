/**
 * Educational Module Type System
 *
 * Defines the structure for all educational content in Biological Self.
 * Supports 6 complexity levels matching physician training stages.
 */
export const COMPLEXITY_LEVELS = {
    1: {
        level: 1,
        name: 'Foundation',
        readingLevel: '8th grade',
        description: 'Simple words, analogies, everyday experiences',
        targetAudience: 'General public, no medical background',
    },
    2: {
        level: 2,
        name: 'Developing',
        readingLevel: '10th grade',
        description: 'Basic terms introduced with definitions',
        targetAudience: 'Some high school biology',
    },
    3: {
        level: 3,
        name: 'Standard',
        readingLevel: '12th grade',
        description: 'Standard medical terminology',
        targetAudience: 'High school biology completed',
    },
    4: {
        level: 4,
        name: 'Advanced',
        readingLevel: 'College',
        description: 'Biochemistry, pathways, mechanisms',
        targetAudience: 'College-level biology/chemistry',
    },
    5: {
        level: 5,
        name: 'Expert',
        readingLevel: 'Graduate',
        description: 'Research depth, statistical nuance',
        targetAudience: 'Graduate-level understanding',
    },
    6: {
        level: 6,
        name: 'Clinical',
        readingLevel: 'Physician',
        description: 'Full clinical reasoning, differentials',
        targetAudience: 'Medical professionals',
    },
};
//# sourceMappingURL=types.js.map