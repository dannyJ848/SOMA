import { test, expect } from '@playwright/test';

test.describe('Family Sharing: Share → Caregiver Views → Revoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:1420');
  });

  test('share profile with caregiver', async ({ page }) => {
    // Navigate to family sharing
    await page.click('text=Settings');
    await page.click('text=Family Sharing');
    await expect(page.locator('[data-testid="family-sharing-view"]')).toBeVisible();

    // Add caregiver
    await page.click('text=Add Caregiver');
    await expect(page.locator('[data-testid="add-caregiver-form"]')).toBeVisible();

    // Fill caregiver details
    await page.fill('[data-testid="caregiver-name"]', 'Jane Smith');
    await page.fill('[data-testid="caregiver-email"]', 'jane@example.com');
    await page.selectOption('[data-testid="caregiver-relationship"]', 'spouse');

    // Select what to share
    await page.check('[data-testid="share-lab-results"]');
    await page.check('[data-testid="share-medications"]');
    await page.uncheck('[data-testid="share-mental-health"]');

    // Send invitation
    await page.click('text=Send Invitation');

    // Verify caregiver added
    await expect(page.locator('text=Jane Smith')).toBeVisible();
    await expect(page.locator('text=Pending')).toBeVisible();
  });

  test('accept caregiver invitation', async ({ page }) => {
    // Simulate caregiver accepting invitation
    await page.goto('http://localhost:1420/invite/abc123');

    await expect(page.locator('text=You\'ve been invited')).toBeVisible();
    await expect(page.locator('text=to view health information')).toBeVisible();

    // Create account or sign in
    await page.fill('[data-testid="caregiver-email"]', 'jane@example.com');
    await page.fill('[data-testid="caregiver-password"]', 'password123');
    await page.click('text=Accept Invitation');

    // Verify access granted
    await expect(page.locator('text=Access Granted')).toBeVisible();
  });

  test('caregiver views shared health data', async ({ page }) => {
    // Login as caregiver
    await page.fill('[data-testid="email"]', 'jane@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    // Navigate to shared profiles
    await page.click('text=Shared With Me');
    await expect(page.locator('[data-testid="shared-profiles"]')).toBeVisible();

    // Click on shared profile
    await page.click('text=John Doe');
    await expect(page.locator('[data-testid="shared-profile-view"]')).toBeVisible();

    // View lab results (shared)
    await page.click('text=Lab Results');
    await expect(page.locator('[data-testid="lab-results-list"]')).toBeVisible();

    // Try to view mental health (not shared)
    await expect(page.locator('text=Mental Health')).not.toBeVisible();
  });

  test('caregiver views education progress', async ({ page }) => {
    // Login as caregiver
    await page.fill('[data-testid="email"]', 'jane@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Shared With Me');
    await page.click('text=John Doe');

    // View learning progress
    await page.click('text=Learning Progress');
    await expect(page.locator('[data-testid="learning-progress"]')).toBeVisible();
    await expect(page.locator('text=Modules Completed')).toBeVisible();
    await expect(page.locator('text=Quiz Scores')).toBeVisible();
  });

  test('revoke caregiver access', async ({ page }) => {
    // Login as patient
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    // Go to family sharing
    await page.click('text=Settings');
    await page.click('text=Family Sharing');

    // Find caregiver and revoke
    await page.click('[data-testid="caregiver-menu"]').first();
    await page.click('text=Revoke Access');
    await page.click('text=Confirm');

    // Verify caregiver removed
    await expect(page.locator('text=Jane Smith')).not.toBeVisible();
  });

  test('modify sharing permissions', async ({ page }) => {
    // Login as patient
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Settings');
    await page.click('text=Family Sharing');

    // Edit caregiver permissions
    await page.click('[data-testid="caregiver-menu"]').first();
    await page.click('text=Edit Permissions');

    // Modify permissions
    await page.uncheck('[data-testid="share-lab-results"]');
    await page.check('[data-testid="share-appointments"]');

    await page.click('text=Save Changes');

    // Verify changes saved
    await expect(page.locator('text=Permissions updated')).toBeVisible();
  });

  test('caregiver receives notifications', async ({ page }) => {
    // Login as caregiver
    await page.fill('[data-testid="email"]', 'jane@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    // Check notifications
    await page.click('[data-testid="notifications"]');
    await expect(page.locator('[data-testid="notification-list"]')).toBeVisible();

    // Should see new lab result notification
    await expect(page.locator('text=New lab result shared')).toBeVisible();

    // Should see learning milestone notification
    await expect(page.locator('text=Completed a learning module')).toBeVisible();
  });

  test('export shared data as caregiver', async ({ page }) => {
    // Login as caregiver
    await page.fill('[data-testid="email"]', 'jane@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Shared With Me');
    await page.click('text=John Doe');

    // Try to export data
    await page.click('text=Export');
    
    // Should show restricted message
    await expect(page.locator('text=Export restricted')).toBeVisible();
    await expect(page.locator('text=Contact the patient for full exports')).toBeVisible();
  });

  test('emergency access feature', async ({ page }) => {
    // Login as patient
    await page.fill('[data-testid="email"]', 'john@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('text=Sign In');

    await page.click('text=Settings');
    await page.click('text=Family Sharing');

    // Enable emergency access
    await page.click('[data-testid="caregiver-menu"]').first();
    await page.click('text=Enable Emergency Access');

    // Set emergency permissions
    await page.check('[data-testid="emergency-all-data"]');
    await page.click('text=Save');

    // Verify emergency access enabled
    await expect(page.locator('text=Emergency access enabled')).toBeVisible();
  });
});
