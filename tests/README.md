# Biological Self Test Suite

Comprehensive test suite for the Biological Self health education application.

## Structure

```
tests/
├── unit/              # Unit tests (Vitest)
│   ├── education/     # Education module types tests
│   ├── quiz/          # Quiz scoring logic tests
│   ├── ai/            # AI recommendation engine tests
│   ├── gamification/  # Gamification calculations tests
│   └── lab/           # Lab visualization tests
├── integration/       # Integration tests (Vitest)
│   ├── module-registration.test.ts
│   ├── user-profile-recommendations.test.ts
│   ├── quiz-progress.test.ts
│   └── import-storage-display.test.ts
├── e2e/              # End-to-end tests (Playwright)
│   ├── onboarding-journey.spec.ts
│   ├── timeline.spec.ts
│   ├── family-sharing.spec.ts
│   └── emergency-card.spec.ts
├── i18n/             # Internationalization tests
│   └── spanish.test.ts
├── a11y/             # Accessibility tests
│   └── accessibility.test.ts
└── setup.ts          # Test setup and mocks
```

## Running Tests

### Unit and Integration Tests (Vitest)

```bash
# Run all unit and integration tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch

# Run specific test file
npm test -- tests/unit/quiz/scoring.test.ts
```

### E2E Tests (Playwright)

```bash
# Run all E2E tests
npm run test:e2e

# Run with UI mode
npm run test:e2e:ui

# Run specific test file
npm run test:e2e -- tests/e2e/onboarding-journey.spec.ts

# Debug mode
npm run test:e2e:debug
```

### Test Categories

```bash
# Run only unit tests
npm test -- tests/unit

# Run only integration tests
npm test -- tests/integration

# Run only i18n tests
npm test -- tests/i18n

# Run only accessibility tests
npm test -- tests/a11y
```

## Test Coverage

Coverage reports are generated in the `coverage/` directory:

```bash
# Generate HTML coverage report
npm run test:coverage

# View report
open coverage/index.html
```

## Writing Tests

### Unit Tests

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from './myModule';

describe('My Module', () => {
  it('should do something', () => {
    const result = myFunction();
    expect(result).toBe('expected');
  });
});
```

### E2E Tests

```typescript
import { test, expect } from '@playwright/test';

test('user can complete onboarding', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Get Started');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
```

## CI/CD

Tests run automatically on:
- Pull requests
- Pushes to main branch
- Release builds

## Browser Support

E2E tests run on:
- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## Best Practices

1. **Keep tests independent** - Each test should work in isolation
2. **Use descriptive names** - Test names should describe behavior
3. **Test edge cases** - Don't just test the happy path
4. **Mock external dependencies** - Use mocks for APIs, timers, etc.
5. **Clean up after tests** - Use `beforeEach`/`afterEach` for setup
6. **Use data-testid** - Add `data-testid` attributes for E2E selectors
