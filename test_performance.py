#!/usr/bin/env python3
"""
Performance test for 3D Anatomy Viewer
"""

from playwright.sync_api import sync_playwright
import time

def test_anatomy_performance():
    with sync_playwright() as p:
        # Use headed mode for debugging if needed
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 900})
        page = context.new_page()

        console_logs = []
        errors = []
        page.on("console", lambda msg: console_logs.append(f"{msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: errors.append(str(err)))

        print("=== Starting Anatomy Viewer Performance Test ===\n")

        print("1. Loading app...")
        page.goto('http://localhost:1420')
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1500)

        # Step 1: Complete initial setup (passphrase)
        passphrase_input = page.locator('input[placeholder*="passphrase"]').first
        if passphrase_input.is_visible():
            print("2. Completing passphrase setup...")
            passphrase_input.fill("testpass123")
            confirm_input = page.locator('input[placeholder*="Confirm"]').first
            if confirm_input.is_visible():
                confirm_input.fill("testpass123")
            create_btn = page.locator('button:has-text("Create Secure Database")').first
            if create_btn.is_visible():
                create_btn.click()
                page.wait_for_timeout(2000)
        else:
            print("2. No passphrase setup needed")

        # Step 2: Onboarding - use JavaScript clicks for reliability
        print("3. Completing onboarding...")

        buttons = ["Get Started", "Preview Body", "Complete Setup"]
        for btn_text in buttons:
            page.wait_for_timeout(1000)
            try:
                # Use JavaScript to find and click the button
                clicked = page.evaluate(f'''
                    () => {{
                        const buttons = Array.from(document.querySelectorAll('button'));
                        const btn = buttons.find(b => b.textContent.includes("{btn_text}"));
                        if (btn) {{
                            btn.click();
                            return true;
                        }}
                        return false;
                    }}
                ''')
                if clicked:
                    print(f"   Clicked '{btn_text}' via JS")
                    page.wait_for_timeout(2000)
                else:
                    print(f"   Button '{btn_text}' not found")
            except Exception as e:
                print(f"   Error clicking '{btn_text}': {e}")

        # Wait for transition
        page.wait_for_timeout(3000)
        page.screenshot(path='/tmp/anatomy_after_clicks.png')
        print("   Screenshot: /tmp/anatomy_after_clicks.png")

        # Check if we're now on the main app
        # Try to bypass onboarding by setting localStorage
        page.evaluate('''
            () => {
                localStorage.setItem('onboardingComplete', 'true');
                localStorage.setItem('hasCompletedOnboarding', 'true');
            }
        ''')

        # Reload to apply localStorage changes
        page.reload()
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(3000)
        page.screenshot(path='/tmp/anatomy_after_reload.png')

        # Try to find the canvas
        canvas = page.locator('canvas').first
        try:
            canvas.wait_for(state='visible', timeout=10000)
            print("\n4. Found visible canvas!")
        except:
            print("\n4. Canvas not visible after 10s")

        if canvas.is_visible():
            print("   Testing 3D performance...")
            page.screenshot(path='/tmp/anatomy_canvas.png')

            # Measure initial FPS
            print("   Measuring initial FPS (3 seconds)...")
            fps_initial = page.evaluate('''
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
            print(f"   >>> Initial FPS: {fps_initial['fps']:.1f}")

            box = canvas.bounding_box()
            if box:
                center_x = box['x'] + box['width'] / 2
                center_y = box['y'] + box['height'] / 2
                print(f"   Canvas size: {box['width']:.0f}x{box['height']:.0f}")

                # Test zoom
                print("\n5. Testing zoom...")
                page.mouse.move(center_x, center_y)
                for i in range(5):
                    page.mouse.wheel(0, -100)
                    page.wait_for_timeout(200)

                fps_zoomed = page.evaluate('''
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
                print(f"   >>> FPS after zoom: {fps_zoomed['fps']:.1f}")
                page.screenshot(path='/tmp/anatomy_zoomed.png')

                # Test rotation
                print("\n6. Testing rotation...")
                page.mouse.move(center_x, center_y)
                page.mouse.down()
                for i in range(10):
                    page.mouse.move(center_x + i * 20, center_y)
                    page.wait_for_timeout(50)
                page.mouse.up()

                fps_rotated = page.evaluate('''
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
                print(f"   >>> FPS after rotation: {fps_rotated['fps']:.1f}")

                # Performance summary
                print("\n=== PERFORMANCE SUMMARY ===")
                print(f"Initial FPS:     {fps_initial['fps']:.1f}")
                print(f"After Zoom FPS:  {fps_zoomed['fps']:.1f}")
                print(f"After Rotate FPS: {fps_rotated['fps']:.1f}")

                avg_fps = (fps_initial['fps'] + fps_zoomed['fps'] + fps_rotated['fps']) / 3
                if avg_fps >= 50:
                    print("\n>>> EXCELLENT: Average FPS >= 50")
                elif avg_fps >= 30:
                    print("\n>>> GOOD: Average FPS >= 30")
                else:
                    print("\n>>> NEEDS OPTIMIZATION: Average FPS < 30")

                return avg_fps
        else:
            print("   Canvas still not visible")
            page.screenshot(path='/tmp/anatomy_debug.png')

            # Debug: check what's on screen
            html = page.content()
            print(f"   Page contains 'canvas': {'canvas' in html}")
            print(f"   Page contains 'body-centric': {'body-centric' in html.lower()}")
            print(f"   Page contains 'onboarding': {'onboarding' in html.lower()}")

        if errors:
            print(f"\n=== ERRORS ({len(errors)}) ===")
            for err in errors[:5]:
                print(f"  {err[:200]}")

        browser.close()
        print("\n=== Test Complete ===")
        return 0

if __name__ == "__main__":
    test_anatomy_performance()
