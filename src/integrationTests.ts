/**
 * Integration Test Suite
 * 
 * Comprehensive testing of all wired components
 */

import { initializeUniversalContentIndex, getUniversalContentStats, searchUniversalContent, getContentByStructure } from './universalContentRAG';

export async function runIntegrationTests(): Promise<{
  passed: number;
  failed: number;
  results: string[];
}> {
  const results: string[] = [];
  let passed = 0;
  let failed = 0;

  const test = (name: string, fn: () => boolean | Promise<boolean>) => {
    try {
      const result = fn();
      if (result instanceof Promise) {
        return result.then(r => {
          if (r) {
            passed++;
            results.push(`✅ ${name}`);
          } else {
            failed++;
            results.push(`❌ ${name}`);
          }
        });
      } else {
        if (result) {
          passed++;
          results.push(`✅ ${name}`);
        } else {
          failed++;
          results.push(`❌ ${name}`);
        }
      }
    } catch (e) {
      failed++;
      results.push(`❌ ${name} - Error: ${e}`);
    }
  };

  console.log('🧪 Starting Integration Tests...\n');

  // Test 1: Initialize RAG
  await test('Initialize Universal RAG', async () => {
    const index = await initializeUniversalContentIndex();
    return index.byId.size > 0;
  });

  // Test 2: Get stats
  await test('Get content stats', async () => {
    const stats = await getUniversalContentStats();
    return stats.totalContent > 0;
  });

  // Test 3: Search brain content
  await test('Search brain content', async () => {
    const results = await searchUniversalContent('brain');
    return results.length > 0;
  });

  // Test 4: Search heart content
  await test('Search heart content', async () => {
    const results = await searchUniversalContent('heart');
    return results.length > 0;
  });

  // Test 5: Get by structure - cerebral cortex
  await test('Get cerebral cortex content', async () => {
    const content = await getContentByStructure('cerebral-cortex');
    return content !== null;
  });

  // Test 6: Get by structure - heart
  await test('Get heart content', async () => {
    const content = await getContentByStructure('heart');
    return content !== null;
  });

  // Test 7: Get by structure - lungs
  await test('Get lungs content', async () => {
    const content = await getContentByStructure('lungs');
    return content !== null;
  });

  // Test 8: Get by structure - liver
  await test('Get liver content', async () => {
    const content = await getContentByStructure('liver');
    return content !== null;
  });

  // Test 9: Get by structure - kidneys
  await test('Get kidneys content', async () => {
    const content = await getContentByStructure('kidneys');
    return content !== null;
  });

  // Test 10: Search pathology
  await test('Search pathology content', async () => {
    const results = await searchUniversalContent('stroke');
    return results.length > 0;
  });

  console.log('\n📊 Test Results:');
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log('\nDetailed Results:');
  results.forEach(r => console.log(r));

  return { passed, failed, results };
}

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runIntegrationTests().then(({ passed, failed }) => {
    process.exit(failed > 0 ? 1 : 0);
  });
}
