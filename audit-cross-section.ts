import { chromium, type Page, type Browser } from 'playwright-core';
import { test, expect } from '@playwright/test';

// Audit script for Cross-Section Mode (Phase 4)
// Tests clip planes, interior visibility, sliders, and performance

const BASE_URL = process.env.TEST_URL || 'http://localhost:1420';

interface AuditResult {
  test: string;
  passed: boolean;
  details?: string;
  error?: string;
}

async function runAudit(): Promise<AuditResult[]> {
  const results: AuditResult[] = [];
  let browser: Browser | null = null;
  
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 }
    });
    const page = await context.newPage();
    
    // Navigate to app
    console.log('Navigating to app...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for initial load
    
    // Test 1: App loads successfully
    results.push({
      test: 'App loads',
      passed: await page.locator('#root').isVisible().catch(() => false),
      details: 'Root element is visible'
    });
    
    // Navigate to Anatomy Explorer if needed
    // Look for anatomy-related buttons or navigation
    const anatomyBtn = page.locator('text=Anatomy').first();
    if (await anatomyBtn.isVisible().catch(() => false)) {
      await anatomyBtn.click();
      await page.waitForTimeout(2000);
    }
    
    // Test 2: Cross-section panel exists
    const crossSectionPanel = page.locator('.cross-section-panel, [class*="cross-section"]').first();
    const hasCrossSectionPanel = await crossSectionPanel.isVisible().catch(() => false);
    results.push({
      test: 'Cross-Section Panel exists',
      passed: hasCrossSectionPanel,
      details: hasCrossSectionPanel ? 'Panel found in DOM' : 'Panel not found - may need to check class names'
    });
    
    // Test 3: Mode buttons exist and are clickable
    const modeButtons = page.locator('.mode-btn, button[class*="mode"]').all();
    const hasModeButtons = (await modeButtons).length > 0;
    results.push({
      test: 'Cross-Section Mode buttons',
      passed: hasModeButtons,
      details: hasModeButtons ? `${(await modeButtons).length} mode buttons found` : 'No mode buttons found'
    });
    
    // Test 4: Enable cross-section mode
    if (hasModeButtons) {
      const sagittalBtn = page.locator('button:has-text("Left/Right"), button:has-text("sagittal")').first();
      if (await sagittalBtn.isVisible().catch(() => false)) {
        await sagittalBtn.click();
        await page.waitForTimeout(500);
        
        // Check if slider appears
        const slider = page.locator('input[type="range"].cut-slider, .cut-slider-container').first();
        const hasSlider = await slider.isVisible().catch(() => false);
        results.push({
          test: 'Cut position slider appears when mode enabled',
          passed: hasSlider,
          details: hasSlider ? 'Slider is visible' : 'Slider not visible after enabling mode'
        });
        
        // Test 5: Slider functionality
        if (hasSlider) {
          const sliderInput = page.locator('input[type="range"]').first();
          await sliderInput.fill('0.5');
          await page.waitForTimeout(300);
          
          // Check if value updated
          const value = await sliderInput.inputValue();
          results.push({
            test: 'Cut position slider updates',
            passed: value === '0.5',
            details: `Slider value: ${value}`
          });
        }
      }
    }
    
    // Test 6: Check WebGL/Three.js rendering
    const hasWebGL = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      return canvas !== null && (canvas.width > 0 || canvas.height > 0);
    });
    results.push({
      test: 'WebGL canvas renders',
      passed: hasWebGL,
      details: hasWebGL ? 'Canvas element found with dimensions' : 'Canvas not rendering'
    });
    
    // Test 7: Performance check - frame rate stability
    const performanceMetrics = await page.evaluate(async () => {
      const timings: number[] = [];
      let lastTime = performance.now();
      
      for (let i = 0; i < 30; i++) { // Check 30 frames
        await new Promise(resolve => requestAnimationFrame(resolve));
        const now = performance.now();
        timings.push(now - lastTime);
        lastTime = now;
      }
      
      const avgFrameTime = timings.reduce((a, b) => a + b, 0) / timings.length;
      const fps = 1000 / avgFrameTime;
      return { fps, avgFrameTime };
    });
    
    results.push({
      test: 'Performance (FPS)',
      passed: performanceMetrics.fps > 30,
      details: `Average FPS: ${performanceMetrics.fps.toFixed(1)}, Frame time: ${performanceMetrics.avgFrameTime.toFixed(2)}ms`
    });
    
    // Test 8: Check for clipping plane visual indicator
    const hasCutPlaneVisual = await page.evaluate(() => {
      // Look for visual indicators of the cut plane
      const indicators = document.querySelectorAll('[class*="cut"], [class*="plane"]');
      return indicators.length > 0;
    });
    results.push({
      test: 'Cut plane visual indicator',
      passed: hasCutPlaneVisual,
      details: hasCutPlaneVisual ? 'Visual indicator elements found' : 'No visual indicator found'
    });
    
    // Test 9: Memory usage check
    const memoryInfo = await page.evaluate(() => {
      if ('memory' in performance) {
        const mem = (performance as any).memory;
        return {
          usedJSHeapSize: Math.round(mem.usedJSHeapSize / 1024 / 1024),
          totalJSHeapSize: Math.round(mem.totalJSHeapSize / 1024 / 1024)
        };
      }
      return null;
    });
    
    if (memoryInfo) {
      results.push({
        test: 'Memory usage',
        passed: memoryInfo.usedJSHeapSize < 500, // Less than 500MB
        details: `Used: ${memoryInfo.usedJSHeapSize}MB / ${memoryInfo.totalJSHeapSize}MB`
      });
    }
    
    // Test 10: Console errors check
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.waitForTimeout(1000); // Wait for any async errors
    
    const hasErrors = consoleErrors.length > 0;
    results.push({
      test: 'No console errors',
      passed: !hasErrors,
      details: hasErrors ? `Found ${consoleErrors.length} errors: ${consoleErrors.slice(0, 3).join(', ')}` : 'No errors detected'
    });
    
  } catch (error) {
    results.push({
      test: 'Audit execution',
      passed: false,
      error: error instanceof Error ? error.message : String(error)
    });
  } finally {
    if (browser) await browser.close();
  }
  
  return results;
}

// Run the audit
runAudit().then(results => {
  console.log('\n=== CROSS-SECTION MODE AUDIT RESULTS ===\n');
  
  let passed = 0;
  let failed = 0;
  
  for (const result of results) {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${status}: ${result.test}`);
    if (result.details) console.log(`   ${result.details}`);
    if (result.error) console.log(`   Error: ${result.error}`);
    console.log('');
    
    if (result.passed) passed++;
    else failed++;
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Passed: ${passed}/${results.length}`);
  console.log(`Failed: ${failed}/${results.length}`);
  
  process.exit(failed > 0 ? 1 : 0);
});
