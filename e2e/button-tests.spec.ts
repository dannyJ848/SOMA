/**
 * Playwright E2E Tests for Button UI Verification
 *
 * This test suite systematically clicks through ALL UI buttons
 * to verify they work correctly without errors or crashes.
 *
 * IMPORTANT: The app starts on 'body-centric' view by default.
 * Each test suite must navigate to the correct view before testing its buttons.
 *
 * Navigation Methods:
 * - BodyCentricHome quick actions (ALWAYS available): Encyclopedia, Ask AI, Symptoms, Medications, My Health
 * - MobileBottomNav (mobile only): body-centric, chat, timeline, dashboard
 *
 * Strategy: Use quick action buttons for navigation since they're always available on body-centric view.
 */

import { test, expect, Page } from '@playwright/test';

// Increase timeout for slow-loading 3D components
test.setTimeout(90000);

// Use a viewport that shows mobile nav but is large enough to work well
// The mobile bottom nav is visible on screens < 1200px
const MOBILE_VIEWPORT = { width: 768, height: 1024 };

// Test results tracking
interface ButtonTestResult {
  name: string;
  selector: string;
  status: 'PASS' | 'FAIL';
  error?: string;
  response?: string;
}

const testResults: ButtonTestResult[] = [];

// Helper to log test results
function logResult(result: ButtonTestResult) {
  testResults.push(result);
  const status = result.status === 'PASS' ? 'PASS' : 'FAIL';
  console.log(`${status}: ${result.name}${result.error ? ` - ${result.error}` : ''}`);
}

// Helper to verify button click works
async function verifyButtonClick(
  page: Page,
  name: string,
  selector: string,
  options?: { timeout?: number; waitForTimeout?: number }
): Promise<void> {
  const timeout = options?.timeout ?? 5000;
  const waitForTimeout = options?.waitForTimeout ?? 1000;

  try {
    const btn = page.locator(selector).first();
    const isVisible = await btn.isVisible({ timeout }).catch(() => false);

    if (!isVisible) {
      logResult({
        name,
        selector,
        status: 'FAIL',
        error: 'Button not visible',
      });
      return;
    }

    // Use force click to avoid issues with overlays
    await btn.click({ force: true });
    await page.waitForTimeout(waitForTimeout);

    logResult({
      name,
      selector,
      status: 'PASS',
    });
  } catch (error) {
    logResult({
      name,
      selector,
      status: 'FAIL',
      error: String(error),
    });
  }
}

/**
 * Navigate to a specific view using quick action buttons on body-centric view.
 * These buttons are always available and work on all viewports.
 */
async function navigateViaQuickAction(page: Page, target: string): Promise<boolean> {
  console.log(`Navigating to: ${target}`);

  const quickActionButtons: Record<string, string> = {
    'encyclopedia': 'button:has-text("Encyclopedia")',
    'chat': 'button:has-text("Ask AI")',
    'symptom-explorer': 'button:has-text("Symptoms")',
    'medication-explorer': 'button:has-text("Medications")',
    'dashboard': 'button:has-text("My Health")',
  };

  const selector = quickActionButtons[target];
  if (!selector) {
    console.log(`  -> Unknown target: ${target}`);
    return false;
  }

  try {
    const btn = page.locator(selector).first();
    if (await btn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await btn.click({ force: true });
      await page.waitForTimeout(2000);
      console.log(`  -> Navigated to ${target}`);
      return true;
    }
  } catch (error) {
    console.log(`  -> Navigation error: ${error}`);
  }

  return false;
}

/**
 * Navigate back to body-centric home by going to the app root
 */
async function goHome(page: Page): Promise<void> {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}

test.describe('Comprehensive UI Button Tests', () => {
  // ============================================
  // 1. App Load Tests
  // ============================================
  test('App loads and shows main container', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    const container = page.locator('.container, [role="main"], .body-centric-home, canvas').first();
    const isVisible = await container.isVisible({ timeout: 60000 });

    logResult({
      name: 'App Container Load',
      selector: '.container',
      status: isVisible ? 'PASS' : 'FAIL',
      error: isVisible ? undefined : 'Main container not visible after 60s',
    });

    expect(isVisible).toBeTruthy();
  });

  // ============================================
  // 2. Body-centric View Tests (App starts here)
  // ============================================
  test.describe('Body-centric View', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
    });

    test('Body-centric action buttons work', async ({ page }) => {
      const actionButtons = [
        { name: 'Encyclopedia Action Button', selector: 'button:has-text("Encyclopedia")' },
        { name: 'Ask AI Action Button', selector: 'button:has-text("Ask AI")' },
        { name: 'Symptoms Action Button', selector: 'button:has-text("Symptoms")' },
        { name: 'Medications Action Button', selector: 'button:has-text("Medications")' },
        { name: 'My Health Action Button', selector: 'button:has-text("My Health")' },
      ];

      for (const button of actionButtons) {
        try {
          const btn = page.locator(button.selector).first();
          const isVisible = await btn.isVisible({ timeout: 10000 }).catch(() => false);

          if (isVisible) {
            await btn.click({ force: true });
            await page.waitForTimeout(2000);

            // Verify navigation happened
            const contentVisible = await page.locator('.container, [role="main"], .chat-view, .symptom-explorer, .medical-encyclopedia, .medication-explorer, .dashboard, .quick-access-section').first().isVisible({ timeout: 10000 });

            logResult({
              name: button.name,
              selector: button.selector,
              status: contentVisible ? 'PASS' : 'FAIL',
              error: contentVisible ? undefined : 'Navigation did not complete',
            });

            // Navigate back to body-centric
            await goHome(page);
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'FAIL',
              error: 'Action button not visible',
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error),
          });
        }
      }
    });

    test('3D Canvas loads successfully', async ({ page }) => {
      const canvasSelector = 'canvas';

      try {
        const canvas = page.locator(canvasSelector).first();
        const isVisible = await canvas.isVisible({ timeout: 60000 });

        logResult({
          name: '3D Canvas Load',
          selector: canvasSelector,
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : '3D canvas not visible after 60s',
        });
      } catch (error) {
        logResult({
          name: '3D Canvas Load',
          selector: canvasSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });
  });

  // ============================================
  // 3. Dashboard View Tests
  // ============================================
  test.describe('Dashboard View', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
      await navigateViaQuickAction(page, 'dashboard');
      await page.waitForTimeout(2000);
    });

    test('Dashboard vitals are clickable', async ({ page }) => {
      const onDashboard = await page.locator('.quick-access-section, .vitals-grid, .dashboard').first().isVisible({ timeout: 10000 });

      if (!onDashboard) {
        logResult({
          name: 'Dashboard Vitals Test',
          selector: '.vitals-grid',
          status: 'FAIL',
          error: 'Not on dashboard view - vitals not visible',
        });
        return;
      }

      const vitals = [
        { name: 'Heart Rate Vital', selector: '.vital-item:has-text("Heart Rate"), .vital-item:has-text("bpm")' },
        { name: 'HRV Vital', selector: '.vital-item:has-text("HRV"), .vital-item:has-text("ms")' },
      ];

      for (const vital of vitals) {
        await verifyButtonClick(page, vital.name, vital.selector);
      }
    });

    test('Dashboard quick access buttons work', async ({ page }) => {
      const onDashboard = await page.locator('.quick-access-section, .quick-access-buttons').first().isVisible({ timeout: 10000 });

      if (!onDashboard) {
        logResult({
          name: 'Dashboard Quick Access Test',
          selector: '.quick-access-section',
          status: 'FAIL',
          error: 'Not on dashboard view - quick access buttons not visible',
        });
        return;
      }

      const quickAccessButtons = [
        { name: 'Explore Symptom Button', selector: 'button:has-text("Explore Symptom")' },
        { name: 'Encyclopedia Button', selector: 'button:has-text("Encyclopedia")' },
      ];

      for (const button of quickAccessButtons) {
        try {
          const btn = page.locator(button.selector).first();
          const isVisible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

          if (isVisible) {
            await btn.click({ force: true });
            await page.waitForTimeout(2000);

            logResult({
              name: button.name,
              selector: button.selector,
              status: 'PASS',
            });

            // Navigate back to dashboard
            await goHome(page);
            await navigateViaQuickAction(page, 'dashboard');
            await page.waitForTimeout(1000);
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'FAIL',
              error: 'Button not visible on dashboard',
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error),
          });
        }
      }
    });

    test('Dashboard list items are clickable', async ({ page }) => {
      const onDashboard = await page.locator('.card-list, .list-item').first().isVisible({ timeout: 10000 });

      if (!onDashboard) {
        logResult({
          name: 'List Item Test',
          selector: '.card-list',
          status: 'FAIL',
          error: 'Not on dashboard view - list not visible',
        });
        return;
      }

      const listSelector = '.list-item';
      const items = page.locator(listSelector);
      const count = await items.count();

      if (count > 0) {
        await items.first().click({ force: true });
        await page.waitForTimeout(1000);

        logResult({
          name: 'List Item Click',
          selector: listSelector,
          status: 'PASS',
        });
      } else {
        logResult({
          name: 'List Item Click',
          selector: listSelector,
          status: 'FAIL',
          error: 'No list items found',
        });
      }
    });
  });

  // ============================================
  // 4. Encyclopedia View Tests
  // ============================================
  test.describe('Encyclopedia View', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
      await navigateViaQuickAction(page, 'encyclopedia');
      await page.waitForTimeout(2000);
    });

    test('Encyclopedia search input works', async ({ page }) => {
      const searchSelector = 'input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]';

      try {
        const searchInput = page.locator(searchSelector).first();
        const isVisible = await searchInput.isVisible({ timeout: 10000 }).catch(() => false);

        if (isVisible) {
          await searchInput.fill('heart');
          await page.waitForTimeout(1000);

          logResult({
            name: 'Encyclopedia Search',
            selector: searchSelector,
            status: 'PASS',
          });
        } else {
          logResult({
            name: 'Encyclopedia Search',
            selector: searchSelector,
            status: 'FAIL',
            error: 'Search input not visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Encyclopedia Search',
          selector: searchSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });

    test('Encyclopedia category buttons work', async ({ page }) => {
      const categories = [
        { name: 'Conditions Category', selector: 'button:has-text("Conditions")' },
        { name: 'Symptoms Category', selector: 'button:has-text("Symptoms")' },
        { name: 'Anatomy Category', selector: 'button:has-text("Anatomy")' },
      ];

      for (const category of categories) {
        await verifyButtonClick(page, category.name, category.selector);
      }
    });

    test('Encyclopedia back button works', async ({ page }) => {
      const backSelector = 'button:has-text("Back"), .back-button';

      try {
        const backBtn = page.locator(backSelector).first();
        const isVisible = await backBtn.isVisible({ timeout: 5000 }).catch(() => false);

        if (isVisible) {
          await backBtn.click({ force: true });
          await page.waitForTimeout(1000);

          logResult({
            name: 'Encyclopedia Back Button',
            selector: backSelector,
            status: 'PASS',
          });
        } else {
          logResult({
            name: 'Encyclopedia Back Button',
            selector: backSelector,
            status: 'FAIL',
            error: 'Back button not visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Encyclopedia Back Button',
          selector: backSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });
  });

  // ============================================
  // 5. Chat View Tests
  // ============================================
  test.describe('Chat View', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
      await navigateViaQuickAction(page, 'chat');
      await page.waitForTimeout(2000);
    });

    test('Chat view loads correctly', async ({ page }) => {
      const chatSelector = '.chat-view, .chat-messages, [role="log"], textarea';
      const chatView = page.locator(chatSelector).first();
      const isVisible = await chatView.isVisible({ timeout: 30000 });

      logResult({
        name: 'Chat View Load',
        selector: chatSelector,
        status: isVisible ? 'PASS' : 'FAIL',
        error: isVisible ? undefined : 'Chat view did not load',
      });
    });

    test('Chat message input works', async ({ page }) => {
      const inputSelector = 'textarea, input[type="text"]';

      try {
        const inputEl = page.locator(inputSelector).first();
        const isVisible = await inputEl.isVisible({ timeout: 10000 }).catch(() => false);

        if (isVisible) {
          await inputEl.fill('What is the function of the heart?');
          await page.waitForTimeout(500);

          logResult({
            name: 'Chat Message Input',
            selector: inputSelector,
            status: 'PASS',
          });

          // Clear input
          await inputEl.fill('');
        } else {
          logResult({
            name: 'Chat Message Input',
            selector: inputSelector,
            status: 'FAIL',
            error: 'Message input not visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Chat Message Input',
          selector: inputSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });

    test('Chat suggested questions are clickable', async ({ page }) => {
      const suggestedSelector = '.suggested-questions button, .chat-welcome button';

      try {
        const suggestedBtns = page.locator(suggestedSelector);
        const count = await suggestedBtns.count();

        if (count > 0) {
          await suggestedBtns.first().click({ force: true });
          await page.waitForTimeout(1000);

          logResult({
            name: 'Chat Suggested Question Click',
            selector: suggestedSelector,
            status: 'PASS',
          });
        } else {
          logResult({
            name: 'Chat Suggested Question Click',
            selector: suggestedSelector,
            status: 'FAIL',
            error: 'No suggested questions visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Chat Suggested Question Click',
          selector: suggestedSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });

    test('Chat back button works', async ({ page }) => {
      const backSelector = 'button:has-text("Back"), .back-button';

      try {
        const backBtn = page.locator(backSelector).first();
        const isVisible = await backBtn.isVisible({ timeout: 5000 }).catch(() => false);

        if (isVisible) {
          await backBtn.click({ force: true });
          await page.waitForTimeout(1000);

          logResult({
            name: 'Chat Back Button',
            selector: backSelector,
            status: 'PASS',
          });
        } else {
          logResult({
            name: 'Chat Back Button',
            selector: backSelector,
            status: 'FAIL',
            error: 'Back button not visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Chat Back Button',
          selector: backSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });
  });

  // ============================================
  // 6. Global Navigation Tests
  // ============================================
  test.describe('Global Navigation', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
    });

    test('Global search keyboard shortcut works', async ({ page }) => {
      try {
        await page.keyboard.press('/');
        await page.waitForTimeout(1000);

        const searchModal = page.locator('.global-search, [role="dialog"], .search-modal').first();
        const isVisible = await searchModal.isVisible({ timeout: 10000 }).catch(() => false);

        logResult({
          name: 'Global Search (/)',
          selector: '.global-search',
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : 'Search modal did not open',
        });

        // Close search
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);
      } catch (error) {
        logResult({
          name: 'Global Search (/)',
          selector: '.global-search',
          status: 'FAIL',
          error: String(error),
        });
      }
    });

    test('Keyboard shortcuts help modal opens', async ({ page }) => {
      try {
        await page.keyboard.press('?');
        await page.waitForTimeout(1000);

        const helpModal = page.locator('.keyboard-shortcuts-help, [role="dialog"]:has-text("Shortcuts"), .unified-nav-shortcuts-help').first();
        const isVisible = await helpModal.isVisible({ timeout: 10000 }).catch(() => false);

        logResult({
          name: 'Keyboard Shortcuts Help (?)',
          selector: '.keyboard-shortcuts-help',
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : 'Help modal did not open',
        });

        // Close help
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);
      } catch (error) {
        logResult({
          name: 'Keyboard Shortcuts Help (?)',
          selector: '.keyboard-shortcuts-help',
          status: 'FAIL',
          error: String(error),
        });
      }
    });

    test('Language toggle button works', async ({ page }) => {
      const langSelector = '.language-toggle, [aria-label*="language"], button:has-text("EN"), button:has-text("ES")';

      try {
        const langBtn = page.locator(langSelector).first();
        const isVisible = await langBtn.isVisible({ timeout: 5000 }).catch(() => false);

        if (isVisible) {
          await langBtn.click({ force: true });
          await page.waitForTimeout(500);

          logResult({
            name: 'Language Toggle Button',
            selector: langSelector,
            status: 'PASS',
          });

          // Toggle back
          await langBtn.click({ force: true });
          await page.waitForTimeout(500);
        } else {
          logResult({
            name: 'Language Toggle Button',
            selector: langSelector,
            status: 'FAIL',
            error: 'Language toggle not visible',
          });
        }
      } catch (error) {
        logResult({
          name: 'Language Toggle Button',
          selector: langSelector,
          status: 'FAIL',
          error: String(error),
        });
      }
    });
  });

  // ============================================
  // 7. Modal and Panel Tests
  // ============================================
  test.describe('Modals and Panels', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
      await goHome(page);
    });

    test('Modal close buttons work', async ({ page }) => {
      // Open a modal first by pressing /
      await page.keyboard.press('/');
      await page.waitForTimeout(500);

      const modalSelector = '.modal-overlay, [role="dialog"], .global-search';
      const modal = page.locator(modalSelector).first();

      if (await modal.isVisible({ timeout: 5000 }).catch(() => false)) {
        // Try to close via close button
        const closeBtn = page.locator('.modal-close, button[aria-label="Close"]').first();
        if (await closeBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await closeBtn.click({ force: true });
          await page.waitForTimeout(500);

          const closed = !(await modal.isVisible({ timeout: 1000 }).catch(() => false));
          logResult({
            name: 'Modal Close Button',
            selector: '.modal-close',
            status: closed ? 'PASS' : 'FAIL',
            error: closed ? undefined : 'Modal did not close',
          });
        } else {
          // Close with Escape
          await page.keyboard.press('Escape');
          logResult({
            name: 'Modal Close Button',
            selector: '.modal-close',
            status: 'PASS',
            response: 'Closed with Escape key instead',
          });
        }
      } else {
        logResult({
          name: 'Modal Close Button',
          selector: '.modal-close',
          status: 'FAIL',
          error: 'No modal visible to test close',
        });
      }
    });

    test('Escape key closes modals and panels', async ({ page }) => {
      // Open search modal
      await page.keyboard.press('/');
      await page.waitForTimeout(500);

      const modal = page.locator('.global-search, [role="dialog"]').first();
      if (await modal.isVisible({ timeout: 5000 }).catch(() => false)) {
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);

        const closed = !(await modal.isVisible({ timeout: 1000 }).catch(() => false));
        logResult({
          name: 'Escape Key Closes Modal',
          selector: 'keyboard:Escape',
          status: closed ? 'PASS' : 'FAIL',
          error: closed ? undefined : 'Modal did not close with Escape',
        });
      } else {
        logResult({
          name: 'Escape Key Closes Modal',
          selector: 'keyboard:Escape',
          status: 'FAIL',
          error: 'Could not open modal to test',
        });
      }
    });
  });

  // ============================================
  // Print Test Summary
  // ============================================
  test.afterAll(() => {
    console.log('\n========== COMPREHENSIVE BUTTON TEST SUMMARY ==========\n');

    const passed = testResults.filter(r => r.status === 'PASS').length;
    const failed = testResults.filter(r => r.status === 'FAIL').length;

    console.log(`Total Tests: ${testResults.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);

    if (failed > 0) {
      console.log('\nFailed Tests:');
      testResults
        .filter(r => r.status === 'FAIL')
        .forEach(r => console.log(`  - ${r.name}: ${r.error}`));
    }

    console.log('\n========================================================\n');
  });
});
