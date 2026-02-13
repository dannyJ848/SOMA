import { test, expect } from '@playwright/test';

test.describe('User Journey: Onboarding → First Module → Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:1420');
  });

  test('complete onboarding flow', async ({ page }) => {
    // Step 1: Welcome screen
    await expect(page.locator('text=Welcome to Biological Self')).toBeVisible();
    await page.click('text=Get Started');

    // Step 2: Language selection
    await expect(page.locator('text=Choose your language')).toBeVisible();
    await page.click('text=English');
    await page.click('text=Continue');

    // Step 3: Health interests
    await expect(page.locator('text=What health topics interest you?')).toBeVisible();
    await page.click('text=Heart Health');
    await page.click('text=Diabetes');
    await page.click('text=Continue');

    // Step 4: Complexity level
    await expect(page.locator('text=How would you describe your health knowledge?')).toBeVisible();
    await page.click('text=Some medical knowledge');
    await page.click('text=Continue');

    // Step 5: Complete onboarding
    await expect(page.locator('text=You\'re all set!')).toBeVisible();
    await page.click('text=Start Learning');

    // Verify dashboard loaded
    await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
  });

  test('navigate to first module', async ({ page }) => {
    // Complete onboarding first
    await page.click('text=Get Started');
    await page.click('text=English');
    await page.click('text=Continue');
    await page.click('text=Heart Health');
    await page.click('text=Continue');
    await page.click('text=Some medical knowledge');
    await page.click('text=Continue');
    await page.click('text=Start Learning');

    // Click on recommended module
    await page.click('[data-testid="recommended-module"]');

    // Verify module loaded
    await expect(page.locator('[data-testid="module-viewer"]')).toBeVisible();
    await expect(page.locator('text=Learning Objectives')).toBeVisible();
  });

  test('complete module and take quiz', async ({ page }) => {
    // Navigate to module
    await page.click('text=Get Started');
    await page.click('text=English');
    await page.click('text=Continue');
    await page.click('text=Heart Health');
    await page.click('text=Continue');
    await page.click('text=Some medical knowledge');
    await page.click('text=Continue');
    await page.click('text=Start Learning');
    await page.click('[data-testid="recommended-module"]');

    // Scroll through content
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Complete module
    await page.click('text=Mark as Complete');

    // Start quiz
    await page.click('text=Take Quiz');
    await expect(page.locator('[data-testid="quiz-viewer"]')).toBeVisible();

    // Answer questions
    const options = await page.locator('[data-testid="quiz-option"]').count();
    for (let i = 0; i < options; i++) {
      await page.locator('[data-testid="quiz-option"]').first().click();
      await page.click('text=Next');
    }

    // Verify quiz results
    await expect(page.locator('text=Quiz Complete')).toBeVisible();
    await expect(page.locator('[data-testid="quiz-score"]')).toBeVisible();
  });

  test('track progress after quiz', async ({ page }) => {
    // Complete module and quiz
    await page.click('text=Get Started');
    await page.click('text=English');
    await page.click('text=Continue');
    await page.click('text=Heart Health');
    await page.click('text=Continue');
    await page.click('text=Some medical knowledge');
    await page.click('text=Continue');
    await page.click('text=Start Learning');
    await page.click('[data-testid="recommended-module"]');
    await page.click('text=Mark as Complete');
    await page.click('text=Take Quiz');
    
    // Answer all questions
    while (await page.locator('[data-testid="quiz-option"]').first().isVisible().catch(() => false)) {
      await page.locator('[data-testid="quiz-option"]').first().click();
      const nextButton = page.locator('text=Next');
      if (await nextButton.isVisible().catch(() => false)) {
        await nextButton.click();
      } else {
        break;
      }
    }

    // Check progress updated
    await page.click('text=Dashboard');
    await expect(page.locator('[data-testid="modules-completed"]')).toContainText('1');
    await expect(page.locator('[data-testid="quizzes-taken"]')).toContainText('1');
  });

  test('view module content at different complexity levels', async ({ page }) => {
    // Navigate to module
    await page.click('text=Get Started');
    await page.click('text=English');
    await page.click('text=Continue');
    await page.click('text=Heart Health');
    await page.click('text=Continue');
    await page.click('text=Some medical knowledge');
    await page.click('text=Continue');
    await page.click('text=Start Learning');
    await page.click('[data-testid="recommended-module"]');

    // Check complexity selector exists
    await expect(page.locator('[data-testid="complexity-selector"]')).toBeVisible();

    // Switch complexity level
    await page.click('[data-testid="complexity-level-1"]');
    await expect(page.locator('text=Simple explanation')).toBeVisible();

    await page.click('[data-testid="complexity-level-3"]');
    await expect(page.locator('text=Standard')).toBeVisible();
  });
});
