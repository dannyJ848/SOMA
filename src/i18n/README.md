# i18n (Internationalization) System

The Biological Self app supports **English** and **Spanish** (bilingual).

## Quick Start

### 1. Using Translations in Components

```tsx
import { useI18n, useTranslation } from '../i18n/useI18n';

// Method 1: Use specific namespace
function MyComponent() {
  const { t } = useTranslation('dashboard');
  
  return <h1>{t('dashboard.title')}</h1>;
}

// Method 2: Use generic i18n with namespace parameter
function MyComponent() {
  const { t } = useI18n();
  
  return <h1>{t('dashboard.title', 'dashboard')}</h1>;
}

// Method 3: Interpolation
function MyComponent({ name }: { name: string }) {
  const { t } = useTranslation('common');
  
  return <p>{t('welcome.message', { name })}</p>;
  // Output: "Welcome, John!"
}
```

### 2. Language Switcher

```tsx
import { LanguageSwitcher, LanguageToggle, LanguageMenu } from '../components/LanguageSwitcher';

// Full dropdown
<LanguageSwitcher variant="dropdown" />

// Button group
<LanguageSwitcher variant="buttons" showFlags />

// Simple toggle
<LanguageToggle />

// Header menu
<LanguageMenu />
```

### 3. Accessing Language State

```tsx
import { useI18n } from '../i18n/useI18n';

function MyComponent() {
  const { 
    language,      // 'en' | 'es'
    setLanguage,   // (lang: Language) => void
    toggleLanguage, // () => void
    languageInfo,  // { code, name, nativeName, flag }
    isRTL          // false (for future RTL languages)
  } = useI18n();
  
  return (
    <div>
      <p>Current: {languageInfo.nativeName}</p>
      <button onClick={toggleLanguage}>Toggle</button>
    </div>
  );
}
```

### 4. Formatting Dates/Numbers

```tsx
import { formatDate, formatNumber, formatRelativeTime } from '../i18n/utils';

function MyComponent() {
  const { language } = useI18n();
  
  return (
    <div>
      <p>{formatDate(new Date(), language)}</p>
      <p>{formatNumber(12345.67, language)}</p>
      <p>{formatRelativeTime(pastDate, language)}</p>
    </div>
  );
}
```

## File Structure

```
src/i18n/
├── types.ts              # TypeScript types
├── I18nContext.tsx       # React context provider
├── useI18n.ts            # Custom hooks
├── loader.ts             # Translation loader
├── utils.ts              # Formatting utilities
├── i18n.css              # Component styles
├── index.ts              # Public API exports
└── translations/
    ├── en/               # English translations
    │   ├── common.ts
    │   ├── navigation.ts
    │   ├── dashboard.ts
    │   ├── symptoms.ts
    │   ├── anatomy.ts
    │   ├── chat.ts
    │   ├── medications.ts
    │   ├── labs.ts
    │   ├── settings.ts
    │   ├── errors.ts
    │   ├── onboarding.ts
    │   ├── voice.ts
    │   └── complexity.ts
    └── es/               # Spanish translations (same structure)
```

## Adding New Translations

1. Add the key to both `src/i18n/translations/en/[namespace].ts` and `src/i18n/translations/es/[namespace].ts`:

```typescript
// en/common.ts
export const common = {
  'my.new.key': 'My New Key',
};

// es/common.ts
export const common = {
  'my.new.key': 'Mi Nueva Clave',
};
```

2. Use in component:

```tsx
const { t } = useTranslation('common');
return <span>{t('my.new.key')}</span>;
```

## AI Bilingual Support

The AI medical educator now supports Spanish responses:

```typescript
import { askEducator } from '../core/ai/medical-educator';

const response = await askEducator({
  question: userQuestion,
  context: {
    domain: 'symptoms',
    language: 'es',  // ← Set to 'es' for Spanish responses
  }
});
```

When `language: 'es'` is set, the AI will:
- Receive Spanish system prompts
- Respond entirely in Spanish
- Use appropriate Spanish medical terminology

## Best Practices

1. **Always use namespaces** to organize translations logically
2. **Use the `useTranslation` hook** with a default namespace for cleaner code
3. **Interpolate values** instead of concatenating strings
4. **Test both languages** when adding new UI
5. **Keep keys descriptive** - they serve as fallback text

## Available Namespaces

| Namespace | Description |
|-----------|-------------|
| `common` | Shared UI elements, actions, status |
| `navigation` | Nav items, menus |
| `dashboard` | Dashboard widgets |
| `symptoms` | Symptom tracking |
| `anatomy` | 3D anatomy viewer |
| `chat` | AI chat interface |
| `medications` | Medication management |
| `labs` | Lab results |
| `settings` | App settings |
| `errors` | Error messages |
| `onboarding` | First-time setup |
| `voice` | Voice commands |
| `complexity` | Learning complexity levels |
