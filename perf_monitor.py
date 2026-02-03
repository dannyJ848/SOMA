#!/usr/bin/env python3
"""
Real-time Performance Monitor for 3D Anatomy Viewer
Continuously measures FPS and reports issues for automated repair
"""

from playwright.sync_api import sync_playwright
import time
import json
import sys

PERF_LOG = "/tmp/anatomy_perf_log.json"

def monitor_performance(duration_seconds=30, sample_interval=2):
    """Monitor performance in real-time and log metrics"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 393, 'height': 852},
            device_scale_factor=3,
            is_mobile=True,
            has_touch=True,
        )
        page = context.new_page()

        print("=== Real-time Performance Monitor ===")
        print("Connecting to app...")

        try:
            page.goto('http://localhost:1420', timeout=10000)
            page.wait_for_load_state('networkidle')
        except Exception as e:
            print(f"Could not connect to app: {e}")
            browser.close()
            return None

        page.wait_for_timeout(2000)

        # Check for canvas
        canvas_count = page.evaluate('document.querySelectorAll("canvas").length')
        print(f"Canvas elements found: {canvas_count}")

        if canvas_count == 0:
            print("No canvas found - may need to complete onboarding first")
            # Try to complete onboarding
            try:
                for btn_text in ["Get Started", "Preview Body", "Complete Setup"]:
                    page.wait_for_timeout(500)
                    page.evaluate(f'''
                        () => {{
                            const buttons = Array.from(document.querySelectorAll('button'));
                            const btn = buttons.find(b => b.textContent.includes("{btn_text}"));
                            if (btn) btn.click();
                        }}
                    ''')
                page.wait_for_timeout(2000)
                canvas_count = page.evaluate('document.querySelectorAll("canvas").length')
            except:
                pass

        metrics = []
        start_time = time.time()
        sample_num = 0

        print(f"\nMonitoring for {duration_seconds}s (sample every {sample_interval}s)...")
        print("-" * 50)

        while time.time() - start_time < duration_seconds:
            sample_num += 1

            # Measure FPS
            fps_result = page.evaluate('''
                () => new Promise((resolve) => {
                    let frames = 0;
                    let startTime = performance.now();
                    function countFrame() {
                        frames++;
                        if (performance.now() - startTime < 1000) {
                            requestAnimationFrame(countFrame);
                        } else {
                            resolve(frames);
                        }
                    }
                    requestAnimationFrame(countFrame);
                })
            ''')

            # Simulate interaction (scroll)
            page.mouse.wheel(0, -30)

            # Measure FPS after interaction
            fps_after = page.evaluate('''
                () => new Promise((resolve) => {
                    let frames = 0;
                    let startTime = performance.now();
                    function countFrame() {
                        frames++;
                        if (performance.now() - startTime < 1000) {
                            requestAnimationFrame(countFrame);
                        } else {
                            resolve(frames);
                        }
                    }
                    requestAnimationFrame(countFrame);
                })
            ''')

            # Get memory info if available
            memory_info = page.evaluate('''
                () => {
                    if (performance.memory) {
                        return {
                            usedJSHeapSize: performance.memory.usedJSHeapSize / 1048576,
                            totalJSHeapSize: performance.memory.totalJSHeapSize / 1048576
                        };
                    }
                    return null;
                }
            ''')

            sample = {
                "sample": sample_num,
                "time": round(time.time() - start_time, 1),
                "fps_idle": fps_result,
                "fps_active": fps_after,
                "memory_mb": memory_info.get("usedJSHeapSize") if memory_info else None,
                "status": "good" if min(fps_result, fps_after) >= 30 else ("warning" if min(fps_result, fps_after) >= 20 else "poor")
            }
            metrics.append(sample)

            status_icon = {"good": "✓", "warning": "⚠", "poor": "✗"}[sample["status"]]
            print(f"[{sample['time']:>5.1f}s] {status_icon} FPS: idle={fps_result:>3}, active={fps_after:>3}", end="")
            if memory_info:
                print(f"  Mem: {memory_info['usedJSHeapSize']:.1f}MB", end="")
            print()

            page.wait_for_timeout(sample_interval * 1000 - 2000)  # Account for measurement time

        browser.close()

        # Calculate summary
        avg_fps_idle = sum(m["fps_idle"] for m in metrics) / len(metrics)
        avg_fps_active = sum(m["fps_active"] for m in metrics) / len(metrics)
        min_fps = min(min(m["fps_idle"], m["fps_active"]) for m in metrics)
        poor_samples = sum(1 for m in metrics if m["status"] == "poor")

        summary = {
            "avg_fps_idle": round(avg_fps_idle, 1),
            "avg_fps_active": round(avg_fps_active, 1),
            "min_fps": min_fps,
            "poor_sample_count": poor_samples,
            "total_samples": len(metrics),
            "needs_optimization": poor_samples > 0 or avg_fps_active < 30,
            "metrics": metrics
        }

        print("-" * 50)
        print(f"\n=== SUMMARY ===")
        print(f"Avg FPS (idle):   {avg_fps_idle:.1f}")
        print(f"Avg FPS (active): {avg_fps_active:.1f}")
        print(f"Min FPS:          {min_fps}")
        print(f"Poor samples:     {poor_samples}/{len(metrics)}")

        if summary["needs_optimization"]:
            print("\n⚠ NEEDS OPTIMIZATION - FPS below target")
        else:
            print("\n✓ PERFORMANCE OK - FPS meets target (30+)")

        # Save to log file
        with open(PERF_LOG, 'w') as f:
            json.dump(summary, f, indent=2)
        print(f"\nLog saved to: {PERF_LOG}")

        return summary

if __name__ == "__main__":
    duration = int(sys.argv[1]) if len(sys.argv) > 1 else 20
    monitor_performance(duration_seconds=duration, sample_interval=3)
