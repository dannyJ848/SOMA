import { BiologicalSelfStore } from './core/biological-self/store.js';

const store = new BiologicalSelfStore('./data/biological-self.db', 'test123');
const self = store.get();

if (!self) {
  console.log('No data found');
  process.exit(1);
}

const abnormal = self.labResults.filter(l =>
  l.status === 'abnormal-low' || l.status === 'abnormal-high' || l.status === 'critical'
);

// Group by date
const byDate = new Map<string, typeof abnormal>();
for (const lab of abnormal) {
  const date = lab.collectedAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  if (!byDate.has(date)) byDate.set(date, []);
  byDate.get(date)!.push(lab);
}

console.log('ABNORMAL LAB RESULTS');
console.log('═'.repeat(70));

for (const [date, labs] of byDate) {
  console.log(`\n${date}`);
  console.log('─'.repeat(70));
  for (const lab of labs) {
    const range = lab.referenceRange
      ? `(ref: ${lab.referenceRange.low ?? '?'}-${lab.referenceRange.high ?? '?'})`
      : '';
    const arrow = lab.status === 'abnormal-high' ? '↑ HIGH' : lab.status === 'abnormal-low' ? '↓ LOW' : '⚠ CRITICAL';
    console.log(`  ${arrow}  ${lab.testName}: ${lab.value} ${lab.unit || ''} ${range}`);
  }
}

console.log('\n' + '═'.repeat(70));
console.log(`Total: ${abnormal.length} abnormal results out of ${self.labResults.length} total`);

store.close();
