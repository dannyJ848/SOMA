import { test, expect } from '@playwright/test';

test.describe('Timeline: Add Event → View Timeline → Export', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:1420');
    // Login or setup as needed
  });

  test('add health event to timeline', async ({ page }) => {
    // Navigate to timeline
    await page.click('text=Timeline');
    await expect(page.locator('[data-testid="timeline-view"]')).toBeVisible();

    // Click add event
    await page.click('text=Add Event');
    await expect(page.locator('[data-testid="event-form"]')).toBeVisible();

    // Fill event details
    await page.fill('[data-testid="event-title"]', 'Annual Physical');
    await page.fill('[data-testid="event-date"]', '2024-01-15');
    await page.selectOption('[data-testid="event-type"]', 'appointment');
    await page.fill('[data-testid="event-description"]', 'Regular checkup with Dr. Smith');

    // Save event
    await page.click('text=Save Event');

    // Verify event appears on timeline
    await expect(page.locator('text=Annual Physical')).toBeVisible();
    await expect(page.locator('text=Jan 15, 2024')).toBeVisible();
  });

  test('add lab result to timeline', async ({ page }) => {
    await page.click('text=Timeline');
    await page.click('text=Add Event');

    // Select lab result type
    await page.selectOption('[data-testid="event-type"]', 'lab-result');
    
    // Fill lab details
    await page.fill('[data-testid="event-title"]', 'Blood Work');
    await page.fill('[data-testid="event-date"]', '2024-02-01');
    await page.fill('[data-testid="lab-provider"]', 'Quest Diagnostics');
    
    // Add test results
    await page.click('text=Add Test Result');
    await page.fill('[data-testid="test-name"]', 'Hemoglobin');
    await page.fill('[data-testid="test-value"]', '14.2');
    await page.fill('[data-testid="test-unit"]', 'g/dL');

    await page.click('text=Save Event');

    // Verify lab result appears
    await expect(page.locator('text=Blood Work')).toBeVisible();
    await expect(page.locator('text=14.2 g/dL')).toBeVisible();
  });

  test('view timeline with multiple events', async ({ page }) => {
    await page.click('text=Timeline');

    // Add multiple events
    const events = [
      { title: 'Doctor Visit', date: '2024-01-01', type: 'appointment' },
      { title: 'Lab Work', date: '2024-01-15', type: 'lab-result' },
      { title: 'Medication Started', date: '2024-02-01', type: 'medication' },
    ];

    for (const event of events) {
      await page.click('text=Add Event');
      await page.fill('[data-testid="event-title"]', event.title);
      await page.fill('[data-testid="event-date"]', event.date);
      await page.selectOption('[data-testid="event-type"]', event.type);
      await page.click('text=Save Event');
    }

    // Verify all events are visible
    for (const event of events) {
      await expect(page.locator(`text=${event.title}`)).toBeVisible();
    }

    // Verify chronological order
    const eventElements = await page.locator('[data-testid="timeline-event"]').all();
    expect(eventElements.length).toBe(events.length);
  });

  test('filter timeline by event type', async ({ page }) => {
    await page.click('text=Timeline');

    // Add different event types
    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Doctor Visit');
    await page.fill('[data-testid="event-date"]', '2024-01-01');
    await page.selectOption('[data-testid="event-type"]', 'appointment');
    await page.click('text=Save Event');

    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Blood Test');
    await page.fill('[data-testid="event-date"]', '2024-01-15');
    await page.selectOption('[data-testid="event-type"]', 'lab-result');
    await page.click('text=Save Event');

    // Filter by appointment
    await page.selectOption('[data-testid="timeline-filter"]', 'appointment');
    await expect(page.locator('text=Doctor Visit')).toBeVisible();
    await expect(page.locator('text=Blood Test')).not.toBeVisible();

    // Filter by lab-result
    await page.selectOption('[data-testid="timeline-filter"]', 'lab-result');
    await expect(page.locator('text=Blood Test')).toBeVisible();
    await expect(page.locator('text=Doctor Visit')).not.toBeVisible();

    // Show all
    await page.selectOption('[data-testid="timeline-filter"]', 'all');
    await expect(page.locator('text=Doctor Visit')).toBeVisible();
    await expect(page.locator('text=Blood Test')).toBeVisible();
  });

  test('export timeline to PDF', async ({ page }) => {
    await page.click('text=Timeline');

    // Add some events
    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Annual Checkup');
    await page.fill('[data-testid="event-date"]', '2024-01-01');
    await page.click('text=Save Event');

    // Click export
    await page.click('text=Export');
    await expect(page.locator('[data-testid="export-modal"]')).toBeVisible();

    // Select PDF format
    await page.click('text=PDF');
    
    // Select date range
    await page.fill('[data-testid="export-start-date"]', '2024-01-01');
    await page.fill('[data-testid="export-end-date"]', '2024-12-31');

    // Export
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.click('text=Download'),
    ]);

    expect(download.suggestedFilename()).toContain('.pdf');
  });

  test('edit existing timeline event', async ({ page }) => {
    await page.click('text=Timeline');

    // Add event
    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Doctor Visit');
    await page.fill('[data-testid="event-date"]', '2024-01-01');
    await page.click('text=Save Event');

    // Edit event
    await page.click('[data-testid="event-menu"]').first();
    await page.click('text=Edit');

    await page.fill('[data-testid="event-title"]', 'Updated Doctor Visit');
    await page.click('text=Save Changes');

    // Verify update
    await expect(page.locator('text=Updated Doctor Visit')).toBeVisible();
    await expect(page.locator('text=Doctor Visit')).not.toBeVisible();
  });

  test('delete timeline event', async ({ page }) => {
    await page.click('text=Timeline');

    // Add event
    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Event to Delete');
    await page.fill('[data-testid="event-date"]', '2024-01-01');
    await page.click('text=Save Event');

    // Verify event exists
    await expect(page.locator('text=Event to Delete')).toBeVisible();

    // Delete event
    await page.click('[data-testid="event-menu"]').first();
    await page.click('text=Delete');
    await page.click('text=Confirm');

    // Verify deletion
    await expect(page.locator('text=Event to Delete')).not.toBeVisible();
  });

  test('view event details', async ({ page }) => {
    await page.click('text=Timeline');

    // Add event with details
    await page.click('text=Add Event');
    await page.fill('[data-testid="event-title"]', 'Detailed Event');
    await page.fill('[data-testid="event-date"]', '2024-01-15');
    await page.fill('[data-testid="event-description"]', 'This is a detailed description');
    await page.fill('[data-testid="event-provider"]', 'Dr. Johnson');
    await page.click('text=Save Event');

    // Click to view details
    await page.click('text=Detailed Event');
    await expect(page.locator('[data-testid="event-details"]')).toBeVisible();
    await expect(page.locator('text=This is a detailed description')).toBeVisible();
    await expect(page.locator('text=Dr. Johnson')).toBeVisible();
  });
});
