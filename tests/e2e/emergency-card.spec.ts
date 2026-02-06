import { test, expect } from '@playwright/test';

test.describe('Emergency: Generate Card → View → Update', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:1420');
  });

  test('generate emergency health card', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    // Navigate to emergency card
    await page.click('text=Emergency');
    await page.click('text=Health Card');
    await expect(page.locator('[data-testid="emergency-card-view"]')).toBeVisible();

    // Generate card
    await page.click('text=Generate Card');
    await expect(page.locator('[data-testid="emergency-card-generated"]')).toBeVisible();

    // Verify card contains key information
    await expect(page.locator('text=Emergency Contact')).toBeVisible();
    await expect(page.locator('text=Blood Type')).toBeVisible();
    await expect(page.locator('text=Allergies')).toBeVisible();
    await expect(page.locator('text=Medications')).toBeVisible();
  });

  test('emergency card displays critical information', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Check critical sections
    await expect(page.locator('[data-testid="section-personal-info"]')).toBeVisible();
    await expect(page.locator('[data-testid="section-emergency-contacts"]')).toBeVisible();
    await expect(page.locator('[data-testid="section-medical-conditions"]')).toBeVisible();
    await expect(page.locator('[data-testid="section-current-medications"]')).toBeVisible();
    await expect(page.locator('[data-testid="section-allergies"]')).toBeVisible();
  });

  test('update emergency card information', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');
    await page.click('text=Edit Information');

    // Update emergency contact
    await page.fill('[data-testid="emergency-contact-name"]', 'Jane Doe');
    await page.fill('[data-testid="emergency-contact-phone"]', '555-0123');
    await page.selectOption('[data-testid="emergency-contact-relationship"]', 'spouse');

    // Update medical information
    await page.selectOption('[data-testid="blood-type"]', 'O+');
    await page.fill('[data-testid="allergies"]', 'Penicillin, Peanuts');
    await page.fill('[data-testid="medications"]', 'Metformin 500mg');

    // Save updates
    await page.click('text=Save Changes');

    // Verify updates
    await expect(page.locator('text=Jane Doe')).toBeVisible();
    await expect(page.locator('text=555-0123')).toBeVisible();
    await expect(page.locator('text=O+')).toBeVisible();
  });

  test('download emergency card as PDF', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Download PDF
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.click('text=Download PDF'),
    ]);

    expect(download.suggestedFilename()).toContain('emergency-card');
    expect(download.suggestedFilename()).toContain('.pdf');
  });

  test('print emergency card', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Mock print dialog
    await page.evaluate(() => {
      window.print = () => console.log('Print dialog opened');
    });

    // Click print
    await page.click('text=Print');

    // Verify print styles applied
    await expect(page.locator('[data-testid="print-styles"]')).toBeVisible();
  });

  test('emergency card QR code', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Verify QR code exists
    await expect(page.locator('[data-testid="emergency-qr-code"]')).toBeVisible();

    // Scan QR code (simulate)
    const qrCodeData = await page.locator('[data-testid="emergency-qr-code"]').getAttribute('data-value');
    expect(qrCodeData).toBeTruthy();
  });

  test('emergency card access without login', async ({ page }) => {
    // Navigate to emergency card access URL
    await page.goto('http://localhost:1420/emergency/card/abc123');

    // Should show limited emergency information
    await expect(page.locator('text=Emergency Medical Information')).toBeVisible();
    await expect(page.locator('text=Blood Type:')).toBeVisible();
    await expect(page.locator('text=Allergies:')).toBeVisible();

    // Should NOT show full profile
    await expect(page.locator('text=Full Medical History')).not.toBeVisible();
  });

  test('update medical conditions on emergency card', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');
    await page.click('text=Edit Information');

    // Add medical conditions
    await page.click('text=Add Condition');
    await page.fill('[data-testid="condition-name"]', 'Type 2 Diabetes');
    await page.fill('[data-testid="condition-notes"]', 'Diagnosed 2020');
    await page.click('text=Save Condition');

    // Add another condition
    await page.click('text=Add Condition');
    await page.fill('[data-testid="condition-name"]', 'Hypertension');
    await page.click('text=Save Condition');

    // Save all changes
    await page.click('text=Save Changes');

    // Verify conditions displayed
    await expect(page.locator('text=Type 2 Diabetes')).toBeVisible();
    await expect(page.locator('text=Hypertension')).toBeVisible();
  });

  test('emergency card sharing settings', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');
    await page.click('text=Sharing Settings');

    // Configure sharing
    await page.check('[data-testid="share-with-caregivers"]');
    await page.uncheck('[data-testid="share-emergency-access"]');

    await page.click('text=Save Settings');

    // Verify settings saved
    await expect(page.locator('text=Settings saved')).toBeVisible();
  });

  test('emergency card mobile view', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Verify mobile-friendly layout
    await expect(page.locator('[data-testid="emergency-card-mobile"]')).toBeVisible();

    // Quick access buttons should be visible
    await expect(page.locator('text=Call Emergency Contact')).toBeVisible();
  });

  test('emergency card expiration and renewal', async ({ page }) => {
    // Login
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Emergency');
    await page.click('text=Health Card');

    // Check expiration date
    await expect(page.locator('[data-testid="card-expiration"]')).toBeVisible();

    // Renew card
    await page.click('text=Renew Card');
    await expect(page.locator('text=Card renewed successfully')).toBeVisible();
  });
});
