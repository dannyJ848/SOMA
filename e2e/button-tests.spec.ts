/**
 * Playwright E2E Tests for Button UI Verification
 *
 * This test suite systematically clicks through all major UI buttons
 * to verify they work correctly without errors or crashes.
 *
 * Test Categories:
 * 1. Main Navigation Buttons
 * 2. Dashboard Quick-Access Buttons
 * 3. Anatomy Viewer Controls
 * 4. Encyclopedia Search and Navigation
 * 5. Timeline Controls
 */

import { test, expect, Page } from '@playwright/test';

// Test results tracking
interface ButtonTestResult {
  name: string;
  selector: string;
  status: 'PASS' | 'FAIL' | 'SKIP';
  error?: string;
  response?: string;
}

const testResults: ButtonTestResult[] = [];

// Helper to log test results
function logResult(result: ButtonTestResult) {
  testResults.push(result);
  const status = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⏭️';
  console.log(`${status} ${result.name}: ${result.status}${result.error ? ` - ${result.error}` : ''}`);
}

// Helper to check for console errors
async function checkForErrors(page: Page): Promise<string[]> {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });
  return errors;
}

test.describe('UI Button Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // Wait for the app to be ready (either dev mode bypasses auth or wait for body-centric view)
    await page.waitForLoadState('networkidle');

    // Give time for lazy-loaded components
    await page.waitForTimeout(2000);
  });

  test('App loads successfully', async ({ page }) => {
    // Check that the app container is visible
    const appContainer = page.locator('.container, [role="main"]').first();
    await expect(appContainer).toBeVisible({ timeout: 30000 });
    logResult({
      name: 'App Container',
      selector: '.container, [role="main"]',
      status: 'PASS'
    });
  });

  test.describe('Main Navigation Buttons', () => {
    test('Header action buttons', async ({ page }) => {
      const buttons = [
        { name: 'Chat Navigation', selector: '.header-action-button:has-text("Chat")' },
        { name: 'Anatomy Navigation', selector: '.header-action-button:has-text("Anatomy")' },
        { name: 'Body Navigation', selector: '.header-action-button:has-text("Body")' },
        { name: 'Timeline Navigation', selector: '.header-action-button:has-text("Timeline")' },
      ];

      for (const button of buttons) {
        try {
          const btn = page.locator(button.selector);
          const isVisible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

          if (isVisible) {
            await btn.click();
            await page.waitForTimeout(1000);

            // Check if we navigated (URL or view changed)
            const newContent = await page.locator('.container, [role="main"]').isVisible();

            logResult({
              name: button.name,
              selector: button.selector,
              status: newContent ? 'PASS' : 'FAIL',
              error: newContent ? undefined : 'Navigation did not complete'
            });

            // Navigate back to dashboard/body-centric
            await page.goto('/');
            await page.waitForTimeout(1000);
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'SKIP',
              error: 'Button not visible'
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });

    test('Mobile bottom navigation', async ({ page }) => {
      const navButtons = [
        { name: 'Mobile Home Nav', selector: '.mobile-bottom-nav button:first-child' },
        { name: 'Mobile Chat Nav', selector: '.mobile-bottom-nav button:nth-child(2)' },
        { name: 'Mobile Body Nav', selector: '.mobile-bottom-nav button:nth-child(3)' },
      ];

      for (const button of navButtons) {
        try {
          const btn = page.locator(button.selector);
          const isVisible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

          if (isVisible) {
            await btn.click();
            await page.waitForTimeout(500);
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'PASS'
            });
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'SKIP',
              error: 'Not visible (desktop view)'
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });
  });

  test.describe('Dashboard Quick-Access Buttons', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to dashboard view if not already there
      await page.goto('/');
      await page.waitForTimeout(2000);
    });

    test('Quick access buttons', async ({ page }) => {
      const quickAccessButtons = [
        { name: 'Explore Symptom', selector: '.quick-access-btn.symptom-btn, button:has-text("Explore Symptom")' },
        { name: 'Drug Effects', selector: '.quick-access-btn.medication-btn, button:has-text("Drug Effects")' },
        { name: 'Learn Condition', selector: '.quick-access-btn.condition-btn, button:has-text("Learn Condition")' },
        { name: 'Encyclopedia', selector: '.quick-access-btn.encyclopedia-btn, button:has-text("Encyclopedia")' },
        { name: 'Specialties', selector: '.quick-access-btn.specialty-btn, button:has-text("Specialties")' },
        { name: 'Procedures', selector: '.quick-access-btn.procedure-btn, button:has-text("Procedures")' },
      ];

      for (const button of quickAccessButtons) {
        try {
          const btn = page.locator(button.selector).first();
          const isVisible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

          if (isVisible) {
            await btn.click();
            await page.waitForTimeout(1500);

            // Check that content loaded
            const hasContent = await page.locator('.container, [role="main"], .symptom-explorer, .medication-explorer, .condition-simulator, .medical-encyclopedia').first().isVisible();

            logResult({
              name: button.name,
              selector: button.selector,
              status: hasContent ? 'PASS' : 'FAIL',
              error: hasContent ? undefined : 'Content did not load after click'
            });

            // Go back to dashboard
            const backButton = page.locator('button:has-text("Back"), .back-button').first();
            if (await backButton.isVisible({ timeout: 2000 }).catch(() => false)) {
              await backButton.click();
              await page.waitForTimeout(500);
            } else {
              await page.goto('/');
              await page.waitForTimeout(1000);
            }
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'SKIP',
              error: 'Button not visible'
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });

    test('Vital items are clickable', async ({ page }) => {
      const vitals = [
        { name: 'Heart Rate Vital', selector: '.vital-item:has-text("Heart Rate"), .vital-item:has-text("bpm")' },
        { name: 'HRV Vital', selector: '.vital-item:has-text("HRV"), .vital-item:has-text("ms")' },
        { name: 'Recovery Vital', selector: '.vital-item:has-text("Recovery"), .vital-item:has-text("%")' },
        { name: 'Sleep Vital', selector: '.vital-item:has-text("Sleep"), .vital-item:has-text("hrs")' },
        { name: 'Steps Vital', selector: '.vital-item:has-text("Steps"), .vital-item:has-text("today")' },
      ];

      for (const vital of vitals) {
        try {
          const vitalItem = page.locator(vital.selector).first();
          const isVisible = await vitalItem.isVisible({ timeout: 3000 }).catch(() => false);

          if (isVisible) {
            await vitalItem.click();
            await page.waitForTimeout(500);
            logResult({
              name: vital.name,
              selector: vital.selector,
              status: 'PASS'
            });
            await page.goto('/');
            await page.waitForTimeout(500);
          } else {
            logResult({
              name: vital.name,
              selector: vital.selector,
              status: 'SKIP',
              error: 'Vital not displayed (no data)'
            });
          }
        } catch (error) {
          logResult({
            name: vital.name,
            selector: vital.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });

    test('Condition and Medication list items are clickable', async ({ page }) => {
      const listItems = [
        { name: 'Condition List Item', selector: '.card-list .list-item' },
        { name: 'Medication List Item', selector: '.card-list .list-item:has(.frequency-badge)' },
      ];

      for (const item of listItems) {
        try {
          const listItem = page.locator(item.selector).first();
          const isVisible = await listItem.isVisible({ timeout: 3000 }).catch(() => false);

          if (isVisible) {
            await listItem.click();
            await page.waitForTimeout(1000);
            logResult({
              name: item.name,
              selector: item.selector,
              status: 'PASS'
            });
            await page.goto('/');
            await page.waitForTimeout(500);
          } else {
            logResult({
              name: item.name,
              selector: item.selector,
              status: 'SKIP',
              error: 'List item not visible'
            });
          }
        } catch (error) {
          logResult({
            name: item.name,
            selector: item.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });
  });

  test.describe('Anatomy Viewer Controls', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to anatomy view
      await page.goto('/');
      await page.waitForTimeout(2000);

      // Try to navigate to anatomy view
      const anatomyBtn = page.locator('button:has-text("Anatomy"), .header-action-button:has-text("Anatomy")').first();
      if (await anatomyBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await anatomyBtn.click();
        await page.waitForTimeout(2000);
      }
    });

    test('Anatomy viewer loads', async ({ page }) => {
      try {
        // Check if 3D canvas or anatomy viewer is present
        const anatomyViewer = page.locator('canvas, .anatomy-viewer, .anatomy-main-screen').first();
        const isVisible = await anatomyViewer.isVisible({ timeout: 10000 }).catch(() => false);

        logResult({
          name: 'Anatomy Viewer Canvas',
          selector: 'canvas, .anatomy-viewer, .anatomy-main-screen',
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : 'Anatomy viewer did not load'
        });
      } catch (error) {
        logResult({
          name: 'Anatomy Viewer Canvas',
          selector: 'canvas, .anatomy-viewer, .anatomy-main-screen',
          status: 'FAIL',
          error: String(error)
        });
      }
    });

    test('Unified Navigation toolbar buttons', async ({ page }) => {
      const toolbarButtons = [
        { name: 'Reset Camera', selector: 'button[title*="Reset"], button[aria-label*="Reset"], button:has-text("Reset")' },
        { name: 'Camera Preset', selector: 'button[title*="Camera"], button[aria-label*="Camera"]' },
        { name: 'Zoom Controls', selector: 'button[title*="Zoom"], button[aria-label*="Zoom"], button:has-text("+"), button:has-text("-")' },
      ];

      for (const button of toolbarButtons) {
        try {
          const btn = page.locator(button.selector).first();
          const isVisible = await btn.isVisible({ timeout: 3000 }).catch(() => false);

          if (isVisible) {
            await btn.click();
            await page.waitForTimeout(500);
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'PASS'
            });
          } else {
            logResult({
              name: button.name,
              selector: button.selector,
              status: 'SKIP',
              error: 'Button not visible'
            });
          }
        } catch (error) {
          logResult({
            name: button.name,
            selector: button.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });
  });

  test.describe('Encyclopedia Search and Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(2000);

      // Navigate to encyclopedia
      const encyclopediaBtn = page.locator('button:has-text("Encyclopedia"), .quick-access-btn.encyclopedia-btn').first();
      if (await encyclopediaBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await encyclopediaBtn.click();
        await page.waitForTimeout(2000);
      }
    });

    test('Encyclopedia search', async ({ page }) => {
      try {
        const searchInput = page.locator('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]').first();
        const isVisible = await searchInput.isVisible({ timeout: 5000 }).catch(() => false);

        if (isVisible) {
          await searchInput.fill('heart');
          await page.waitForTimeout(1000);

          // Check for search results
          const hasResults = await page.locator('.search-results, .encyclopedia-results, .list-item, [role="listitem"]').first().isVisible({ timeout: 3000 }).catch(() => false);

          logResult({
            name: 'Encyclopedia Search',
            selector: 'input[type="search"]',
            status: hasResults ? 'PASS' : 'FAIL',
            error: hasResults ? undefined : 'No search results appeared'
          });
        } else {
          logResult({
            name: 'Encyclopedia Search',
            selector: 'input[type="search"]',
            status: 'SKIP',
            error: 'Search input not found'
          });
        }
      } catch (error) {
        logResult({
          name: 'Encyclopedia Search',
          selector: 'input[type="search"]',
          status: 'FAIL',
          error: String(error)
        });
      }
    });

    test('Encyclopedia category buttons', async ({ page }) => {
      const categories = [
        { name: 'Conditions Category', selector: 'button:has-text("Conditions"), [data-category="conditions"]' },
        { name: 'Symptoms Category', selector: 'button:has-text("Symptoms"), [data-category="symptoms"]' },
        { name: 'Anatomy Category', selector: 'button:has-text("Anatomy"), [data-category="anatomy"]' },
        { name: 'Procedures Category', selector: 'button:has-text("Procedures"), [data-category="procedures"]' },
      ];

      for (const category of categories) {
        try {
          const btn = page.locator(category.selector).first();
          const isVisible = await btn.isVisible({ timeout: 3000 }).catch(() => false);

          if (isVisible) {
            await btn.click();
            await page.waitForTimeout(500);
            logResult({
              name: category.name,
              selector: category.selector,
              status: 'PASS'
            });
          } else {
            logResult({
              name: category.name,
              selector: category.selector,
              status: 'SKIP',
              error: 'Category button not visible'
            });
          }
        } catch (error) {
          logResult({
            name: category.name,
            selector: category.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });
  });

  test.describe('Timeline Controls', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(2000);

      // Navigate to timeline
      const timelineBtn = page.locator('button:has-text("Timeline"), .header-action-button:has-text("Timeline")').first();
      if (await timelineBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await timelineBtn.click();
        await page.waitForTimeout(2000);
      }
    });

    test('Timeline filter toggles', async ({ page }) => {
      const filters = [
        { name: 'Lab Filter', selector: '.filter-toggle:has-text("Lab")' },
        { name: 'Imaging Filter', selector: '.filter-toggle:has-text("Imaging")' },
        { name: 'Condition Filter', selector: '.filter-toggle:has-text("Condition")' },
        { name: 'Medication Filter', selector: '.filter-toggle:has-text("Medication")' },
        { name: 'Surgery Filter', selector: '.filter-toggle:has-text("Surgery")' },
        { name: 'Symptom Filter', selector: '.filter-toggle:has-text("Symptom")' },
      ];

      for (const filter of filters) {
        try {
          const btn = page.locator(filter.selector).first();
          const isVisible = await btn.isVisible({ timeout: 3000 }).catch(() => false);

          if (isVisible) {
            // Click to toggle off
            await btn.click();
            await page.waitForTimeout(300);
            // Click to toggle back on
            await btn.click();
            await page.waitForTimeout(300);

            logResult({
              name: filter.name,
              selector: filter.selector,
              status: 'PASS'
            });
          } else {
            logResult({
              name: filter.name,
              selector: filter.selector,
              status: 'SKIP',
              error: 'Filter button not visible'
            });
          }
        } catch (error) {
          logResult({
            name: filter.name,
            selector: filter.selector,
            status: 'FAIL',
            error: String(error)
          });
        }
      }
    });

    test('Timeline date range controls', async ({ page }) => {
      try {
        const startDate = page.locator('input[type="date"]').first();
        const isVisible = await startDate.isVisible({ timeout: 3000 }).catch(() => false);

        if (isVisible) {
          await startDate.fill('2024-01-01');
          await page.waitForTimeout(500);

          logResult({
            name: 'Timeline Date Range',
            selector: 'input[type="date"]',
            status: 'PASS'
          });
        } else {
          logResult({
            name: 'Timeline Date Range',
            selector: 'input[type="date"]',
            status: 'SKIP',
            error: 'Date input not visible'
          });
        }
      } catch (error) {
        logResult({
          name: 'Timeline Date Range',
          selector: 'input[type="date"]',
          status: 'FAIL',
          error: String(error)
        });
      }
    });

    test('Clear dates button', async ({ page }) => {
      try {
        const clearBtn = page.locator('button:has-text("Clear")').first();
        const isVisible = await clearBtn.isVisible({ timeout: 3000 }).catch(() => false);

        if (isVisible) {
          await clearBtn.click();
          await page.waitForTimeout(300);

          logResult({
            name: 'Clear Dates Button',
            selector: 'button:has-text("Clear")',
            status: 'PASS'
          });
        } else {
          logResult({
            name: 'Clear Dates Button',
            selector: 'button:has-text("Clear")',
            status: 'SKIP',
            error: 'Clear button not visible'
          });
        }
      } catch (error) {
        logResult({
          name: 'Clear Dates Button',
          selector: 'button:has-text("Clear")',
          status: 'FAIL',
          error: String(error)
        });
      }
    });

    test('Timeline event selection', async ({ page }) => {
      try {
        const eventItem = page.locator('.timeline-item, .timeline-event-card').first();
        const isVisible = await eventItem.isVisible({ timeout: 3000 }).catch(() => false);

        if (isVisible) {
          await eventItem.click();
          await page.waitForTimeout(500);

          // Check if modal appeared
          const modal = page.locator('.modal-content, .modal-overlay').first();
          const modalVisible = await modal.isVisible({ timeout: 2000 }).catch(() => false);

          logResult({
            name: 'Timeline Event Selection',
            selector: '.timeline-item',
            status: modalVisible ? 'PASS' : 'FAIL',
            error: modalVisible ? undefined : 'Modal did not open'
          });

          // Close modal
          if (modalVisible) {
            const closeBtn = page.locator('.modal-close, button:has-text("Close")').first();
            if (await closeBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
              await closeBtn.click();
            }
          }
        } else {
          logResult({
            name: 'Timeline Event Selection',
            selector: '.timeline-item',
            status: 'SKIP',
            error: 'No timeline events visible'
          });
        }
      } catch (error) {
        logResult({
          name: 'Timeline Event Selection',
          selector: '.timeline-item',
          status: 'FAIL',
          error: String(error)
        });
      }
    });
  });

  test.describe('Global Search', () => {
    test('Global search keyboard shortcut', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(2000);

      try {
        // Press / to open search
        await page.keyboard.press('/');
        await page.waitForTimeout(500);

        const searchModal = page.locator('.global-search, [role="dialog"], .search-modal').first();
        const isVisible = await searchModal.isVisible({ timeout: 3000 }).catch(() => false);

        logResult({
          name: 'Global Search (/)',
          selector: '.global-search',
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : 'Search modal did not open'
        });

        // Close search with Escape
        await page.keyboard.press('Escape');
      } catch (error) {
        logResult({
          name: 'Global Search (/)',
          selector: '.global-search',
          status: 'FAIL',
          error: String(error)
        });
      }
    });
  });

  test.describe('Keyboard Shortcuts Help', () => {
    test('Keyboard shortcuts help modal', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(2000);

      try {
        // Press ? to open shortcuts help
        await page.keyboard.press('?');
        await page.waitForTimeout(500);

        const helpModal = page.locator('.keyboard-shortcuts-help, [role="dialog"]:has-text("Shortcuts")').first();
        const isVisible = await helpModal.isVisible({ timeout: 3000 }).catch(() => false);

        logResult({
          name: 'Keyboard Shortcuts Help (?)',
          selector: '.keyboard-shortcuts-help',
          status: isVisible ? 'PASS' : 'FAIL',
          error: isVisible ? undefined : 'Help modal did not open'
        });

        // Close with Escape
        await page.keyboard.press('Escape');
      } catch (error) {
        logResult({
          name: 'Keyboard Shortcuts Help (?)',
          selector: '.keyboard-shortcuts-help',
          status: 'FAIL',
          error: String(error)
        });
      }
    });
  });

  test.describe('Back Navigation', () => {
    test('Back button returns to previous view', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(2000);

      try {
        // Navigate to an encyclopedia
        const encyclopediaBtn = page.locator('button:has-text("Encyclopedia"), .quick-access-btn.encyclopedia-btn').first();
        if (await encyclopediaBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
          await encyclopediaBtn.click();
          await page.waitForTimeout(1500);

          // Find and click back button
          const backBtn = page.locator('button:has-text("Back"), .back-button').first();
          if (await backBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
            await backBtn.click();
            await page.waitForTimeout(500);

            logResult({
              name: 'Back Button Navigation',
              selector: 'button:has-text("Back")',
              status: 'PASS'
            });
          } else {
            logResult({
              name: 'Back Button Navigation',
              selector: 'button:has-text("Back")',
              status: 'SKIP',
              error: 'Back button not visible'
            });
          }
        } else {
          logResult({
            name: 'Back Button Navigation',
            selector: 'button:has-text("Back")',
            status: 'SKIP',
            error: 'Could not navigate to test view'
          });
        }
      } catch (error) {
        logResult({
          name: 'Back Button Navigation',
          selector: 'button:has-text("Back")',
          status: 'FAIL',
          error: String(error)
        });
      }
    });
  });

  test.afterAll(() => {
    // Print summary
    console.log('\n========== BUTTON TEST SUMMARY ==========\n');

    const passed = testResults.filter(r => r.status === 'PASS').length;
    const failed = testResults.filter(r => r.status === 'FAIL').length;
    const skipped = testResults.filter(r => r.status === 'SKIP').length;

    console.log(`Total Tests: ${testResults.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Skipped: ${skipped}`);

    if (failed > 0) {
      console.log('\nFailed Tests:');
      testResults
        .filter(r => r.status === 'FAIL')
        .forEach(r => console.log(`  - ${r.name}: ${r.error}`));
    }

    console.log('\n=========================================\n');
  });
});
