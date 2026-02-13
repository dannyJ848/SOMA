# Safari Debug Session Test Guide

## App Status: ✅ RUNNING

The Tauri dev server is running at `http://localhost:1420/`

## Verification Results: ✅ ALL PASSED

1. ✅ TypeScript compilation - Successful
2. ✅ SafariDebugSession.ts - All functions present
3. ✅ getDeviceTier function - All tier detection working
4. ✅ ModelLoadingManager integration - Debug logging integrated
5. ✅ Memory budget configuration - Dynamic budgeting (300MB high tier, 150MB default)

## How to Test the Debug Session

### Option 1: Browser Console Testing

1. Open the app in Safari (or Chrome for testing)
2. Open Developer Console (Cmd+Option+I)
3. You should see initial logs like:
   ```
   [SafariDebug] Session started
   Device Tier: high, Budget: 300MB
   ```

### Option 2: Manual Test Function

In the browser console, run:
```javascript
// Check current debug session status
window.testDebugSession()
```

### Option 3: Simulate a Crash

In the browser console, run:
```javascript
// This will trigger the crash handler
throw new Error('Test crash for debug session');
```

### Option 4: Check LocalStorage for Reports

In the browser console, run:
```javascript
// Get all crash reports
const reports = Object.keys(localStorage)
  .filter(k => k.startsWith('safari_debug_'))
  .map(k => JSON.parse(localStorage.getItem(k)));
console.table(reports);
```

### Option 5: Test Model Loading

Navigate to the Anatomy tab in the app. The debug session should log:
- Model load events with sizeMB
- Memory snapshots before/after loading
- Any errors during GLB loading

## Expected Console Logs

### On Page Load:
```
[AssetResolver] Platform detection: {...}
[AssetResolver] Platform: ios | android | mac
[SafariDebug] Session started
Device Tier: high | medium | low, Budget: 300MB | 150MB
```

### On Model Load (Success):
```
[ModelLoadingManager] Loading model: {...}
[SafariDebug] MODEL-LOAD: ModelLoadingManager - Model skeletal-main (1.59MB)
[ModelLoadingManager] Successfully loaded on iOS: ...
```

### On Model Load (Failure):
```
[SafariDebug] MODEL-LOAD-FAILED: ModelLoadingManager - Model X (YMB)
[ModelLoadingManager] Failed to load model: {...}
[SafariDebug] CRASH DETECTED
```

### On Memory Warning:
```
[SafariDebug] HIGH MEMORY USAGE: 87.5%
```

## Memory Budget by Device Tier

| Device Tier | Devices | Memory Budget |
|-------------|-----------|---------------|
| high | iPhone 14 Pro, 15-17 series, iPad Pro M1/M2 | 300MB |
| medium | High-end Android, desktop | 150MB |
| low | Older iPhone/iPad (iPhone 14 and below) | 150MB |

## Crash Report Format

When a crash occurs, the report saved to localStorage includes:

```typescript
{
  timestamp: 1234567890,
  userAgent: "Mozilla/5.0 ...",
  memory: {
    usedMB: 45.2,
    budgetMB: 300,
    percentUsed: 15.07
  },
  actions: [...last 10 actions...],
  deviceTier: "high" | "medium" | "low",
  crashed: true
}
```

## Cleanup

To clear all crash reports:
```javascript
Object.keys(localStorage)
  .filter(k => k.startsWith('safari_debug_'))
  .forEach(k => localStorage.removeItem(k));
```

## Next Steps for Testing

1. **Open app in Safari on iPhone 17 Pro** (simulator or device)
2. **Navigate to Anatomy tab** - verify GLB models load
3. **Check console** - verify SafariDebug logs appear
4. **Check localStorage** - verify crash reports are saved
5. **Test memory limits** - try loading many models rapidly
6. **Trigger intentional crash** - verify crash handler works

---

**Current Status**: ✅ Debug session infrastructure is fully implemented and integrated
**Build Status**: ✅ TypeScript compiles with zero errors
**Verification**: ✅ All 5 test categories passed
