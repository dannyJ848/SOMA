# Content Validation Tests

Comprehensive validation suite for all educational content files in the biological-self project.

## Overview

These tests validate:

1. **Interface Compliance** - All content files follow the EducationalContent interface
2. **Content Quality** - No placeholder text, proper translations, valid ICD-11 codes
3. **File Structure** - Line limits, no Unicode issues, proper escaping
4. **Cross-References** - All referenced IDs exist, valid relationship types
5. **Metadata** - Valid dates, versions, categories, and exam relevance data

## Running the Tests

### Run all content validation tests

```bash
npm test -- content-validation.test.ts
```

### Run with coverage

```bash
npm run test:coverage -- content-validation.test.ts
```

### Run specific test suites

```bash
# Interface compliance only
npm test -- content-validation.test.ts -t "Interface Compliance"

# Content quality only
npm test -- content-validation.test.ts -t "Content Quality"

# File structure only
npm test -- content-validation.test.ts -t "File Structure"

# Cross-references only
npm test -- content-validation.test.ts -t "Cross-References"

# Metadata only
npm test -- content-validation.test.ts -t "Metadata"
```

### Run in watch mode (for development)

```bash
npm test -- content-validation.test.ts --watch
```

### Run with UI

```bash
npm run test:ui
```

## Test Structure

### Unit Tests

Tests for individual validation functions:

- `containsPlaceholder()` - Detects TODO, FIXME, placeholder text
- `isValidICD11Code()` - Validates ICD-11 code format
- `isValidDate()` - Validates date formats
- `validateLevelContent()` - Validates individual complexity levels
- `validateCrossReferences()` - Validates cross-reference structure

### Integration Tests

Tests that scan actual content files:

- Loads all `.ts` files from `core/content/`
- Extracts EducationalContent exports
- Validates against all rules
- Reports errors and warnings

### Snapshot Tests

- Content structure overview
- Specialty coverage statistics

## Validation Rules

### Interface Compliance

✅ All content files export valid EducationalContent  
✅ Required fields present: id, name, description, type, levels  
✅ Complexity levels 1-5 all have content  
✅ Valid content types: structure, system, pathway, process, condition, concept, topic  

### Content Quality

✅ No placeholder text (TODO, FIXME, placeholder)  
✅ Content is non-empty strings  
✅ Spanish translations present (nameEs field)  
✅ ICD-11 codes follow valid format where present  
✅ Key terms have definitions  

### File Structure

✅ Files are under 600 lines  
✅ No Unicode box-drawing characters (├, │, └, etc.)  
✅ No escaped backticks in template literals (use --- instead)  
✅ Proper apostrophe escaping in strings  

### Cross-References

✅ All referenced IDs exist  
✅ Valid relationship types: parent, child, sibling, related, see-also  
✅ Target IDs are not empty  

### Metadata

✅ Valid status values: draft, review, published  
✅ Version is a positive integer  
✅ Valid ISO date formats for createdAt/updatedAt  
✅ Valid clinical relevance: low, medium, high, critical  
✅ Valid exam relevance: usmle, nbme, shelf  

## Configuration

Edit the constants at the top of `content-validation.test.ts` to adjust:

```typescript
const MAX_FILE_LINES = 600;                    // Maximum lines per file
const VALID_PLACEHOLDER_PATTERNS = [...];      // Text patterns to flag
const VALID_ICD11_PATTERN = /^[A-Z]\d{1,2}/;   // ICD-11 validation regex
```

## Interpreting Results

### Errors vs Warnings

- **Errors** - Must be fixed. The test suite will fail.
- **Warnings** - Should be addressed but won't fail the test suite.

### Common Issues

**Missing Spanish Translation**
```
Content Quality warning: Missing Spanish translation (nameEs)
```
Solution: Add `nameEs` field with Spanish translation.

**Unicode Box-Drawing Characters**
```
File Structure error: Contains Unicode box-drawing characters
```
Solution: Replace `├─`, `│ `, `└─` with ASCII equivalents like `+-`, `| `.

**Escaped Backticks**
```
File Structure error: Contains escaped backticks (\`)
```
Solution: Use `---` for markdown code blocks instead of `\`\`\``.

**Unescaped Apostrophe**
```
File Structure error: Unescaped apostrophe in single-quoted string
```
Solution: Use double quotes or escape: `'body\'s'` or `"body's"`.

**Invalid Cross-Reference**
```
Cross-References warning: Cross-reference to non-existent ID: some-id
```
Solution: Create the missing content or remove the reference.

## Adding New Validation Rules

To add a new validation rule:

1. Add a validation function in the "VALIDATION FUNCTIONS" section
2. Add a test in the appropriate describe block
3. Document the rule in this README

Example:

```typescript
// Validation function
function validateNewRule(content: EducationalContent, filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  // Validation logic here
  return issues;
}

// Test
it('should pass new validation rule', () => {
  const issues: ValidationIssue[] = [];
  for (const file of loadedFiles) {
    for (const content of file.exports) {
      issues.push(...validateNewRule(content, file.filePath));
    }
  }
  expect(issues.filter(i => i.type === 'error')).toHaveLength(0);
});
```

## CI Integration

Add to your CI pipeline:

```yaml
# .github/workflows/test.yml
- name: Run content validation
  run: npm test -- content-validation.test.ts
```

The tests will fail if any errors are found, blocking the build.

## Performance

These tests dynamically import all content files. For large repositories:

- Tests may take 30-60 seconds to complete
- Consider running in CI only for full validation
- Use `test:ui` for interactive development

## Troubleshooting

### Tests timeout

Increase timeout in `vitest.config.ts`:

```typescript
test: {
  testTimeout: 60000, // 60 seconds
}
```

### Out of memory

Run with more memory:

```bash
node --max-old-space-size=4096 ./node_modules/.bin/vitest content-validation.test.ts
```

### Dynamic import failures

Some content files may fail to import due to syntax errors. These will be logged but won't fail the tests for other files.

## Contributing

When adding new content:

1. Run the validation tests before committing
2. Fix all errors
3. Review and address warnings
4. Update snapshots if structure changes: `npm test -- content-validation.test.ts -u`

## Related Files

- `/core/content/types.ts` - EducationalContent interface definition
- `/core/content/specialties/specialty-map.ts` - Specialty definitions
- `/tests/vitest.config.ts` - Vitest configuration
