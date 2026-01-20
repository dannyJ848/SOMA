# Biological Self - Data Model

This module handles the user's health data model — the "biological self."

## Responsibilities

- Store and retrieve user health data (encrypted SQLite)
- Provide typed interfaces for health records
- Import/export functionality
- Query interface for the explanation engine

## Data Types

```typescript
interface BiologicalSelf {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  // Core health data
  conditions: Condition[];
  medications: Medication[];
  allergies: Allergy[];
  labResults: LabResult[];
  surgicalHistory: Surgery[];
  familyHistory: FamilyHistoryItem[];

  // Lifestyle & context
  demographics: Demographics;
  lifestyle: LifestyleFactors;

  // User preferences
  settings: UserSettings;
}
```

## Privacy Requirements

- All data encrypted at rest (AES-256)
- Encryption key derived from user passphrase
- Never transmitted over network
- User can export/delete all data
