#!/usr/bin/env python3
"""
Mobile Performance Test for 3D Anatomy Viewer
Simulates iPhone/mobile conditions to replicate live app performance
"""

from playwright.sync_api import sync_playwright
import time

def test_mobile_performance():
    with sync_playwright() as p:
        # Manual iPhone 14 Pro settings for mobile simulation
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 393, 'height': 852},  # iPhone 14 Pro
            device_scale_factor=3,  # Retina 3x
            is_mobile=True,
            has_touch=True,
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
        )
        page = context.new_page()

        console_logs = []
        errors = []
        page.on("console", lambda msg: console_logs.append(f"{msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: errors.append(str(err)))

        print("=== Mobile Performance Test (iPhone 14 Pro emulation) ===\n")
        print(f"Viewport: 393x852 (iPhone 14 Pro)")
        print(f"Device Scale Factor: 3x (simulating Retina)")
        print(f"Browser: Chromium (mobile mode)\n")

        print("1. Loading app...")
        page.goto('http://localhost:1420')
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1500)

        # Complete setup
        passphrase_input = page.locator('input[placeholder*="passphrase"]').first
        if passphrase_input.is_visible():
            print("2. Completing setup...")
            passphrase_input.fill("testpass123")
            confirm_input = page.locator('input[placeholder*="Confirm"]').first
            if confirm_input.is_visible():
                confirm_input.fill("testpass123")
            page.locator('button:has-text("Create Secure Database")').first.click()
            page.wait_for_timeout(2000)

        # Click through onboarding
        print("3. Completing onboarding...")
        for btn_text in ["Get Started", "Preview Body", "Complete Setup"]:
            page.wait_for_timeout(1000)
            try:
                clicked = page.evaluate(f'''
                    () => {{
                        const buttons = Array.from(document.querySelectorAll('button'));
                        const btn = buttons.find(b => b.textContent.includes("{btn_text}"));
                        if (btn) {{ btn.click(); return true; }}
                        return false;
                    }}
                ''')
                if clicked:
                    print(f"   Clicked '{btn_text}'")
                    page.wait_for_timeout(1500)
            except:
                pass

        page.wait_for_timeout(3000)
        page.screenshot(path='/tmp/mobile_test_1.png')

        # Check for canvas
        canvas = page.locator('canvas').first
        try:
            canvas.wait_for(state='visible', timeout=8000)
            print("\n4. Found canvas - measuring mobile performance...")
        except:
            print("\n4. Canvas not visible - checking WebGL support...")
            # Check if WebGL is supported
            webgl_supported = page.evaluate('''
                () => {
                    try {
                        const canvas = document.createElement('canvas');
                        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
                    } catch(e) { return false; }
                }
            ''')
            print(f"   WebGL supported: {webgl_supported}")
            page.screenshot(path='/tmp/mobile_no_canvas.png')
            browser.close()
            return

        if canvas.is_visible():
            page.screenshot(path='/tmp/mobile_canvas.png')

            # Measure FPS
            print("   Measuring mobile FPS (3 seconds)...")
            fps_result = page.evaluate('''
                () => {
                    return new Promise((resolve) => {
                        let frames = 0;
                        let startTime = performance.now();
                        function countFrame() {
                            frames++;
                            if (performance.now() - startTime < 3000) {
                                requestAnimationFrame(countFrame);
                            } else {
                                const elapsed = (performance.now() - startTime) / 1000;
                                resolve({ frames, elapsed, fps: frames / elapsed });
                            }
                        }
                        requestAnimationFrame(countFrame);
                    });
                }
            ''')
            print(f"   >>> Mobile FPS: {fps_result['fps']:.1f}")

            # Get canvas size
            box = canvas.bounding_box()
            if box:
                print(f"   Canvas: {box['width']:.0f}x{box['height']:.0f}")

                # Simulate touch zoom (pinch)
                print("\n5. Simulating touch interactions...")
                center_x = box['x'] + box['width'] / 2
                center_y = box['y'] + box['height'] / 2

                # Touch and drag (rotate)
                page.touchscreen.tap(center_x, center_y)
                page.wait_for_timeout(500)

                # Simulate scroll/zoom with wheel (touch zoom would require multi-touch)
                print("   Testing zoom via scroll...")
                start = time.time()
                for i in range(5):
                    page.mouse.wheel(0, -50)
                    page.wait_for_timeout(150)
                zoom_time = time.time() - start

                fps_after_zoom = page.evaluate('''
                    () => new Promise((resolve) => {
                        let frames = 0, startTime = performance.now();
                        function countFrame() {
                            frames++;
                            if (performance.now() - startTime < 2000) requestAnimationFrame(countFrame);
                            else resolve({ fps: frames / ((performance.now() - startTime) / 1000) });
                        }
                        requestAnimationFrame(countFrame);
                    })
                ''')
                print(f"   >>> FPS after zoom: {fps_after_zoom['fps']:.1f}")
                page.screenshot(path='/tmp/mobile_zoomed.png')

                # Performance summary
                print("\n=== MOBILE PERFORMANCE SUMMARY ===")
                print(f"Initial FPS:    {fps_result['fps']:.1f}")
                print(f"After Zoom FPS: {fps_after_zoom['fps']:.1f}")

                avg_fps = (fps_result['fps'] + fps_after_zoom['fps']) / 2
                if avg_fps >= 30:
                    print(f"\n✓ GOOD: Average {avg_fps:.1f} FPS (target: 30+)")
                elif avg_fps >= 20:
                    print(f"\n⚠ ACCEPTABLE: Average {avg_fps:.1f} FPS")
                else:
                    print(f"\n✗ NEEDS WORK: Average {avg_fps:.1f} FPS (too low for mobile)")

                # Get WebGL info
                webgl_info = page.evaluate('''
                    () => {
                        const canvas = document.querySelector('canvas');
                        if (!canvas) return null;
                        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
                        if (!gl) return null;
                        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                        return {
                            vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown',
                            renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown',
                            maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
                        };
                    }
                ''')
                if webgl_info:
                    print(f"\nWebGL Renderer: {webgl_info.get('renderer', 'unknown')}")

        if errors:
            print(f"\n=== ERRORS ({len(errors)}) ===")
            for err in errors[:3]:
                print(f"  {err[:150]}")

        browser.close()
        print("\n=== Test Complete ===")
        print("Screenshots saved to /tmp/mobile_*.png")

if __name__ == "__main__":
    test_mobile_performance()
