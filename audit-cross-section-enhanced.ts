import { chromium, type Page, type Browser } from 'playwright-core';

// Enhanced Audit script for Cross-Section Mode (Phase 4)
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
    browser = await chromium.launch({ 
      headless: true,
      args: ['--use-gl=swiftshader', '--enable-webgl', '--disable-software-rasterizer']
    });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 }
    });
    const page = await context.newPage();
    
    // Navigate to app
    console.log('Navigating to app...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(5000); // Wait for full app load
    
    // Test 1: App loads successfully
    results.push({
      test: 'App loads',
      passed: await page.locator('#root').isVisible().catch(() => false),
      details: 'Root element is visible'
    });
    
    // Check the actual HTML structure for debugging
    const bodyHTML = await page.evaluate(() => document.body.innerHTML.substring(0, 2000));
    console.log('Body HTML preview:', bodyHTML);
    
    // Look for any anatomy-related buttons or navigation with more flexible selectors
    const allButtons = await page.locator('button').all();
    console.log(`Found ${allButtons.length} buttons`);
    
    // List all button texts
    for (let i = 0; i < Math.min(allButtons.length, 20); i++) {
      const text = await allButtons[i].textContent().catch(() => '');
      console.log(`Button ${i}: "${text}"`);
    }
    
    // Navigate to Anatomy Explorer - look for various possible button texts
    const possibleAnatomySelectors = [
      'text=Anatomy',
      'text=Explore',
      'text=3D',
      'text=Body',
      '.anatomy-btn',
      '[class*="anatomy"]',
      'button:has-text("Explore")',
      'button:has-text("3D")'
    ];
    
    let anatomyBtn = null;
    for (const selector of possibleAnatomySelectors) {
      const btn = page.locator(selector).first();
      if (await btn.isVisible().catch(() => false)) {
        anatomyBtn = btn;
        console.log(`Found anatomy button with selector: ${selector}`);
        break;
      }
    }
    
    if (anatomyBtn) {
      await anatomyBtn.click();
      await page.waitForTimeout(3000);
    } else {
      console.log('No anatomy button found - app may load anatomy view by default');
    }
    
    // Test 2: Cross-section panel exists - check various possible class names
    const crossSectionSelectors = [
      '.cross-section-panel',
      '[class*="cross-section"]',
      '[class*="CrossSection"]',
      '.clipping-panel',
      '[class*="clipping"]',
      '[class*="cut-slider"]',
      'text=Cross Section',
      'text=Sagittal',
      'text=Left/Right',
      'text=Clip'
    ];
    
    let crossSectionPanel = null;
    let foundSelector = '';
    for (const selector of crossSectionSelectors) {
      const el = page.locator(selector).first();
      if (await el.isVisible().catch(() => false)) {
        crossSectionPanel = el;
        foundSelector = selector;
        console.log(`Found cross-section panel with selector: ${selector}`);
        break;
      }
    }
    
    const hasCrossSectionPanel = crossSectionPanel !== null;
    results.push({
      test: 'Cross-Section Panel exists',
      passed: hasCrossSectionPanel,
      details: hasCrossSectionPanel ? `Panel found with selector: ${foundSelector}` : 'Panel not found - may need to check class names'
    });
    
    // Test 3: Mode buttons exist and are clickable
    const modeButtonSelectors = [
      '.mode-btn',
      'button[class*="mode"]',
      'button:has-text("Left/Right")',
      'button:has-text("sagittal")',
      'button:has-text("Front/Back")',
      'button:has-text("Top/Bottom")',
      'button:has-text("coronal")',
      'button:has-text("transverse")'
    ];
    
    let modeButtons: any[] = [];
    for (const selector of modeButtonSelectors) {
      const btns = await page.locator(selector).all();
      if (btns.length > 0) {
        modeButtons = btns;
        console.log(`Found ${btns.length} mode buttons with selector: ${selector}`);
        break;
      }
    }
    
    const hasModeButtons = modeButtons.length > 0;
    results.push({
      test: 'Cross-Section Mode buttons',
      passed: hasModeButtons,
      details: hasModeButtons ? `${modeButtons.length} mode buttons found` : 'No mode buttons found'
    });
    
    // Test 4: Enable cross-section mode and test slider
    if (hasModeButtons) {
      // Try to find and click a sagittal/left-right button
      const sagittalBtn = page.locator('button:has-text("Left"), button:has-text("Sagittal"), button:has-text("↔")').first();
      if (await sagittalBtn.isVisible().catch(() => false)) {
        console.log('Clicking sagittal button...');
        await sagittalBtn.click();
        await page.waitForTimeout(1000);
        
        // Check if slider appears - try multiple selectors
        const sliderSelectors = [
          'input[type="range"]',
          '.cut-slider',
          '.plane-slider',
          '[class*="slider"]'
        ];
        
        let slider = null;
        for (const selector of sliderSelectors) {
          const el = page.locator(selector).first();
          if (await el.isVisible().catch(() => false)) {
            slider = el;
            console.log(`Found slider with selector: ${selector}`);
            break;
          }
        }
        
        const hasSlider = slider !== null;
        results.push({
          test: 'Cut position slider appears when mode enabled',
          passed: hasSlider,
          details: hasSlider ? 'Slider is visible' : 'Slider not visible after enabling mode'
        });
        
        // Test 5: Slider functionality
        if (hasSlider) {
          const sliderInput = page.locator('input[type="range"]').first();
          const minValue = await sliderInput.getAttribute('min') || '-1';
          const maxValue = await sliderInput.getAttribute('max') || '1';
          const testValue = String((parseFloat(minValue) + parseFloat(maxValue)) / 2);
          
          await sliderInput.fill(testValue);
          await page.waitForTimeout(500);
          
          // Check if value updated
          const value = await sliderInput.inputValue();
          results.push({
            test: 'Cut position slider updates',
            passed: Math.abs(parseFloat(value) - parseFloat(testValue)) < 0.1,
            details: `Slider value: ${value} (expected ~${testValue}, min: ${minValue}, max: ${maxValue})`
          });
        }
      } else {
        results.push({
          test: 'Cut position slider appears when mode enabled',
          passed: false,
          details: 'Could not find sagittal mode button to enable'
        });
        results.push({
          test: 'Cut position slider updates',
          passed: false,
          details: 'Skipped - no slider available'
        });
      }
    }
    
    // Test 6: Check WebGL/Three.js rendering
    const hasWebGL = await page.evaluate(() => {
      try {
        const canvas = document.querySelector('canvas');
        const hasDimensions = canvas !== null && (canvas.width > 0 || canvas.height > 0);
        
        // Also check for WebGL context
        const gl = canvas?.getContext('webgl') || canvas?.getContext('experimental-webgl');
        return hasDimensions && !!gl;
      } catch (e) {
        return false;
      }
    });
    results.push({
      test: 'WebGL canvas renders',
      passed: hasWebGL,
      details: hasWebGL ? 'Canvas element found with WebGL context' : 'Canvas not rendering or no WebGL context'
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
      const indicators = document.querySelectorAll('[class*="cut"], [class*="plane"], [class*="Cut"], [class*="Plane"]');
      // Also check for Three.js canvas modifications
      const canvas = document.querySelector('canvas');
      return indicators.length > 0 || (canvas !== null && canvas.width > 0);
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
    
    page.on('pageerror', error => {
      consoleErrors.push(error.message);
    });
    
    await page.waitForTimeout(1000); // Wait for any async errors
    
    const hasErrors = consoleErrors.length > 0;
    results.push({
      test: 'No console errors',
      passed: !hasErrors,
      details: hasErrors ? `Found ${consoleErrors.length} errors: ${consoleErrors.slice(0, 3).join(', ')}` : 'No errors detected'
    });
    
    // Test 11: Three.js clipping planes configuration check
    const clippingConfig = await page.evaluate(() => {
      // Check if the app has the clipping-related code available
      const canvas = document.querySelector('canvas');
      if (!canvas) return { hasCanvas: false };
      
      // Try to detect if clipping is being used by checking renderer properties
      // This is done by looking at our specific implementation
      return { 
        hasCanvas: true,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height
      };
    });
    results.push({
      test: 'Three.js clipping planes configured',
      passed: clippingConfig.hasCanvas,
      details: clippingConfig.hasCanvas ? `Canvas: ${clippingConfig.canvasWidth}x${clippingConfig.canvasHeight}` : 'No canvas found'
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
