#!/usr/bin/env python3
"""
Simple Performance Test - Measures FPS without requiring full app flow
"""

from playwright.sync_api import sync_playwright
import time

def test_performance():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 393, 'height': 852},  # iPhone 14 Pro
            device_scale_factor=3,  # Retina 3x
            is_mobile=True,
            has_touch=True,
        )
        page = context.new_page()

        console_logs = []
        errors = []
        page.on("console", lambda msg: console_logs.append(f"{msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: errors.append(str(err)))

        print("=== Simple Performance Test (Mobile Emulation) ===\n")

        print("1. Loading app...")
        page.goto('http://localhost:1420')
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(2000)

        # Check if there are any canvases on the page at all
        canvas_count = page.evaluate('document.querySelectorAll("canvas").length')
        print(f"   Found {canvas_count} canvas element(s)")

        # Inject a frame counter to measure FPS regardless of app state
        print("\n2. Measuring browser rendering FPS (independent of app)...")
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
        print(f"   Base FPS: {fps_result['fps']:.1f}")

        # Simulate interactions
        print("\n3. Simulating interactions...")
        for _ in range(5):
            page.mouse.wheel(0, -50)
            page.wait_for_timeout(100)

        fps_after = page.evaluate('''
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
        print(f"   FPS after scroll: {fps_after['fps']:.1f}")

        # Check for useFrame hooks being called
        print("\n4. Checking for animation frame callbacks...")
        frame_check = page.evaluate('''
            () => {
                let callCount = 0;
                const startTime = performance.now();

                return new Promise((resolve) => {
                    const originalRAF = window.requestAnimationFrame;
                    window.requestAnimationFrame = function(callback) {
                        callCount++;
                        return originalRAF.call(window, callback);
                    };

                    setTimeout(() => {
                        window.requestAnimationFrame = originalRAF;
                        const elapsed = (performance.now() - startTime) / 1000;
                        resolve({
                            callCount,
                            elapsed,
                            callsPerSecond: callCount / elapsed
                        });
                    }, 2000);
                });
            }
        ''')
        print(f"   RAF calls in 2s: {frame_check['callCount']}")
        print(f"   RAF calls/second: {frame_check['callsPerSecond']:.1f}")

        # Performance summary
        avg_fps = (fps_result['fps'] + fps_after['fps']) / 2
        print(f"\n=== PERFORMANCE SUMMARY ===")
        print(f"Average FPS: {avg_fps:.1f}")
        print(f"RAF calls/sec: {frame_check['callsPerSecond']:.1f}")

        # A good sign is if RAF calls/sec is low (means fewer useFrame hooks running)
        if frame_check['callsPerSecond'] < 120:
            print("\n✓ Good: Low RAF call rate indicates fewer constant animations")
        else:
            print(f"\n⚠ Note: High RAF call rate ({frame_check['callsPerSecond']:.0f}/s) may indicate active useFrame hooks")

        if avg_fps >= 55:
            print(f"✓ Excellent browser FPS: {avg_fps:.1f}")
        elif avg_fps >= 30:
            print(f"✓ Good browser FPS: {avg_fps:.1f}")
        else:
            print(f"⚠ Low browser FPS: {avg_fps:.1f}")

        # Check console for performance-related warnings
        perf_warnings = [log for log in console_logs if 'performance' in log.lower() or 'slow' in log.lower()]
        if perf_warnings:
            print(f"\nPerformance warnings in console:")
            for w in perf_warnings[:3]:
                print(f"  {w}")

        if errors:
            print(f"\n=== ERRORS ({len(errors)}) ===")
            for err in errors[:3]:
                print(f"  {err[:100]}")

        browser.close()
        print("\n=== Test Complete ===")

if __name__ == "__main__":
    test_performance()
