#!/usr/bin/env python3
"""
Test-Repair Loop for 3D Anatomy Viewer Performance
Runs automated cycles of testing and reporting what needs fixing
"""

from playwright.sync_api import sync_playwright
import time
import json
import subprocess
import sys

PERF_LOG = "/tmp/anatomy_perf_log.json"
TARGET_FPS = 30

def measure_fps(page, label="", duration_ms=2000):
    """Measure FPS over a duration"""
    result = page.evaluate(f'''
        () => new Promise((resolve) => {{
            let frames = 0;
            let startTime = performance.now();
            function countFrame() {{
                frames++;
                if (performance.now() - startTime < {duration_ms}) {{
                    requestAnimationFrame(countFrame);
                }} else {{
                    const elapsed = (performance.now() - startTime) / 1000;
                    resolve({{ frames, elapsed, fps: frames / elapsed }});
                }}
            }}
            requestAnimationFrame(countFrame);
        }})
    ''')
    return result['fps']

def test_interaction(page, interaction_type):
    """Test a specific interaction and return FPS"""
    if interaction_type == "idle":
        return measure_fps(page, "idle")
    elif interaction_type == "zoom_in":
        for _ in range(3):
            page.mouse.wheel(0, -50)
            page.wait_for_timeout(100)
        return measure_fps(page, "zoom_in")
    elif interaction_type == "zoom_out":
        for _ in range(3):
            page.mouse.wheel(0, 50)
            page.wait_for_timeout(100)
        return measure_fps(page, "zoom_out")
    elif interaction_type == "rotate":
        # Simulate drag rotation
        page.mouse.move(200, 400)
        page.mouse.down()
        for i in range(10):
            page.mouse.move(200 + i * 10, 400)
            page.wait_for_timeout(50)
        page.mouse.up()
        return measure_fps(page, "rotate")

def run_performance_test():
    """Run a comprehensive performance test and return results"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 393, 'height': 852},
            device_scale_factor=3,
            is_mobile=True,
        )
        page = context.new_page()

        try:
            page.goto('http://localhost:1420', timeout=10000)
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(3000)
        except Exception as e:
            browser.close()
            return {"error": str(e), "connected": False}

        results = {
            "connected": True,
            "canvas_found": page.evaluate('document.querySelectorAll("canvas").length') > 0,
            "interactions": {}
        }

        if not results["canvas_found"]:
            # App might be on onboarding screen
            browser.close()
            return results

        # Test different interactions
        print("  Testing idle FPS...", end=" ", flush=True)
        results["interactions"]["idle"] = test_interaction(page, "idle")
        print(f"{results['interactions']['idle']:.1f}")

        print("  Testing zoom in...", end=" ", flush=True)
        results["interactions"]["zoom_in"] = test_interaction(page, "zoom_in")
        print(f"{results['interactions']['zoom_in']:.1f}")

        print("  Testing zoom out...", end=" ", flush=True)
        results["interactions"]["zoom_out"] = test_interaction(page, "zoom_out")
        print(f"{results['interactions']['zoom_out']:.1f}")

        print("  Testing rotation...", end=" ", flush=True)
        results["interactions"]["rotate"] = test_interaction(page, "rotate")
        print(f"{results['interactions']['rotate']:.1f}")

        # Calculate overall metrics
        fps_values = list(results["interactions"].values())
        results["avg_fps"] = sum(fps_values) / len(fps_values)
        results["min_fps"] = min(fps_values)
        results["max_fps"] = max(fps_values)
        results["meets_target"] = results["min_fps"] >= TARGET_FPS

        browser.close()
        return results

def identify_issues(results):
    """Identify what needs to be fixed based on test results"""
    issues = []

    if not results.get("connected"):
        issues.append({
            "type": "connection",
            "severity": "critical",
            "message": "Cannot connect to app - is the dev server running?"
        })
        return issues

    if not results.get("canvas_found"):
        issues.append({
            "type": "canvas",
            "severity": "warning",
            "message": "Canvas not found - app may be on onboarding screen"
        })
        return issues

    interactions = results.get("interactions", {})

    # Check each interaction type
    for interaction, fps in interactions.items():
        if fps < 20:
            issues.append({
                "type": "performance",
                "interaction": interaction,
                "fps": fps,
                "severity": "critical",
                "message": f"{interaction} FPS is very low ({fps:.1f})"
            })
        elif fps < TARGET_FPS:
            issues.append({
                "type": "performance",
                "interaction": interaction,
                "fps": fps,
                "severity": "warning",
                "message": f"{interaction} FPS below target ({fps:.1f} < {TARGET_FPS})"
            })

    return issues

def print_report(cycle, results, issues):
    """Print a formatted report"""
    print(f"\n{'='*60}")
    print(f"CYCLE {cycle} REPORT")
    print('='*60)

    if not results.get("connected"):
        print("Status: DISCONNECTED")
        return

    if not results.get("canvas_found"):
        print("Status: CANVAS NOT FOUND (onboarding?)")
        return

    print(f"\nFPS Metrics:")
    print(f"  Average: {results['avg_fps']:.1f}")
    print(f"  Minimum: {results['min_fps']:.1f}")
    print(f"  Maximum: {results['max_fps']:.1f}")
    print(f"  Target:  {TARGET_FPS}")

    print(f"\nBy Interaction:")
    for interaction, fps in results.get("interactions", {}).items():
        status = "✓" if fps >= TARGET_FPS else ("⚠" if fps >= 20 else "✗")
        print(f"  {status} {interaction}: {fps:.1f} FPS")

    if issues:
        print(f"\nIssues Found ({len(issues)}):")
        for issue in issues:
            icon = "✗" if issue["severity"] == "critical" else "⚠"
            print(f"  {icon} {issue['message']}")
    else:
        print("\n✓ All performance targets met!")

    print(f"\nOverall: {'PASS' if results.get('meets_target') else 'NEEDS WORK'}")

def main():
    max_cycles = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    wait_between_cycles = 5  # seconds

    print("="*60)
    print("AUTOMATED TEST-REPAIR LOOP")
    print("="*60)
    print(f"Target FPS: {TARGET_FPS}")
    print(f"Max cycles: {max_cycles}")
    print()

    for cycle in range(1, max_cycles + 1):
        print(f"\n--- Starting Cycle {cycle}/{max_cycles} ---")

        # Run test
        print("Running performance tests...")
        results = run_performance_test()

        # Identify issues
        issues = identify_issues(results)

        # Print report
        print_report(cycle, results, issues)

        # Save results
        with open(PERF_LOG, 'w') as f:
            json.dump({
                "cycle": cycle,
                "results": results,
                "issues": issues,
                "timestamp": time.time()
            }, f, indent=2)

        # Check if we're done
        if results.get("meets_target"):
            print(f"\n✓ PERFORMANCE TARGETS MET after {cycle} cycle(s)!")
            break

        if cycle < max_cycles:
            print(f"\nWaiting {wait_between_cycles}s before next cycle...")
            print("(Make code changes now to see if they improve performance)")
            time.sleep(wait_between_cycles)

    print("\n" + "="*60)
    print("TEST-REPAIR LOOP COMPLETE")
    print("="*60)
    print(f"\nFinal results saved to: {PERF_LOG}")

if __name__ == "__main__":
    main()
