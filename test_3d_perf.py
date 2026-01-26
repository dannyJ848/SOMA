#!/usr/bin/env python3
"""
Direct 3D Performance Test - Tests the standalone perf-test.html
"""

from playwright.sync_api import sync_playwright
import time
import json

def test_3d_performance():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 393, 'height': 852},
            device_scale_factor=3,  # iPhone Retina
            is_mobile=True,
        )
        page = context.new_page()

        console_logs = []
        page.on("console", lambda msg: console_logs.append(msg.text))

        print("=== 3D Performance Test (Mobile Emulation) ===")
        print("Viewport: 393x852, DPR: 3x")
        print()

        # Load the standalone test page
        page.goto('http://localhost:1420/perf-test.html')
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(2000)

        print("Page loaded. Running tests...\n")

        # Test 1: Idle performance
        print("1. Measuring idle FPS (3s)...")
        fps_idle = page.evaluate('''
            () => new Promise((resolve) => {
                let frames = 0;
                let start = performance.now();
                function count() {
                    frames++;
                    if (performance.now() - start < 3000) requestAnimationFrame(count);
                    else resolve(frames / 3);
                }
                requestAnimationFrame(count);
            })
        ''')
        print(f"   Idle FPS: {fps_idle:.1f}")

        # Test 2: Zoom performance
        print("\n2. Measuring zoom performance...")
        for _ in range(5):
            page.mouse.wheel(0, -100)
            page.wait_for_timeout(100)

        fps_zoom = page.evaluate('''
            () => new Promise((resolve) => {
                let frames = 0;
                let start = performance.now();
                function count() {
                    frames++;
                    if (performance.now() - start < 2000) requestAnimationFrame(count);
                    else resolve(frames / 2);
                }
                requestAnimationFrame(count);
            })
        ''')
        print(f"   Zoom FPS: {fps_zoom:.1f}")

        # Test 3: Rotation performance
        print("\n3. Measuring rotation performance...")
        page.mouse.move(200, 400)
        page.mouse.down()
        for i in range(20):
            page.mouse.move(200 + i * 10, 400)
            page.wait_for_timeout(30)
        page.mouse.up()

        fps_rotate = page.evaluate('''
            () => new Promise((resolve) => {
                let frames = 0;
                let start = performance.now();
                function count() {
                    frames++;
                    if (performance.now() - start < 2000) requestAnimationFrame(count);
                    else resolve(frames / 2);
                }
                requestAnimationFrame(count);
            })
        ''')
        print(f"   Rotation FPS: {fps_rotate:.1f}")

        # Test 4: Continuous interaction
        print("\n4. Measuring continuous interaction (5s)...")
        start_time = time.time()
        interaction_fps = []

        while time.time() - start_time < 5:
            # Alternate between zoom and rotate
            page.mouse.wheel(0, -50)
            page.wait_for_timeout(100)
            page.mouse.wheel(0, 50)
            page.wait_for_timeout(100)

            fps = page.evaluate('''
                () => new Promise((resolve) => {
                    let frames = 0;
                    let start = performance.now();
                    function count() {
                        frames++;
                        if (performance.now() - start < 500) requestAnimationFrame(count);
                        else resolve(frames * 2);
                    }
                    requestAnimationFrame(count);
                })
            ''')
            interaction_fps.append(fps)

        avg_interaction = sum(interaction_fps) / len(interaction_fps)
        min_interaction = min(interaction_fps)
        print(f"   Average FPS: {avg_interaction:.1f}")
        print(f"   Minimum FPS: {min_interaction:.1f}")

        # Get renderer info
        renderer_info = page.evaluate('''
            () => {
                const canvas = document.querySelector('canvas');
                if (!canvas) return null;
                const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
                if (!gl) return null;
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                return {
                    renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown',
                    vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown',
                };
            }
        ''')

        # Summary
        avg_fps = (fps_idle + fps_zoom + fps_rotate + avg_interaction) / 4
        all_fps = [fps_idle, fps_zoom, fps_rotate] + interaction_fps
        min_fps = min(all_fps)

        print("\n" + "="*50)
        print("PERFORMANCE SUMMARY")
        print("="*50)
        print(f"Idle FPS:        {fps_idle:.1f}")
        print(f"Zoom FPS:        {fps_zoom:.1f}")
        print(f"Rotation FPS:    {fps_rotate:.1f}")
        print(f"Interaction FPS: {avg_interaction:.1f} (min: {min_interaction:.1f})")
        print(f"Overall Average: {avg_fps:.1f}")
        print(f"Overall Minimum: {min_fps:.1f}")

        if renderer_info:
            print(f"\nRenderer: {renderer_info.get('renderer', 'unknown')}")

        target = 30
        if min_fps >= 55:
            print(f"\n✓ EXCELLENT - All FPS >= 55")
            status = "excellent"
        elif min_fps >= target:
            print(f"\n✓ GOOD - All FPS >= {target}")
            status = "good"
        elif avg_fps >= target:
            print(f"\n⚠ ACCEPTABLE - Average FPS >= {target}, but some dips")
            status = "acceptable"
        else:
            print(f"\n✗ NEEDS WORK - FPS below target ({target})")
            status = "needs_work"

        # Console output
        if console_logs:
            print("\nConsole logs:")
            for log in console_logs[:5]:
                print(f"  {log}")

        browser.close()

        return {
            "fps_idle": fps_idle,
            "fps_zoom": fps_zoom,
            "fps_rotate": fps_rotate,
            "fps_interaction": avg_interaction,
            "fps_min": min_fps,
            "fps_avg": avg_fps,
            "status": status
        }

if __name__ == "__main__":
    test_3d_performance()
