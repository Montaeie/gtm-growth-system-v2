# End-to-End Tests

This directory contains Playwright end-to-end tests for the application.

## Running Tests

### Prerequisites

Make sure your development server is running:

```bash
bun dev
```

### Run all E2E tests

```bash
bun test:e2e
```

### Run tests in UI mode (recommended for development)

```bash
bun test:e2e:ui
```

### View test report

```bash
bun test:e2e:report
```

## Writing Tests

Tests are written using Playwright. See the [Playwright documentation](https://playwright.dev/) for more information.

Example test:

```typescript
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Create v1/);
});
```

## Configuration

See `playwright.config.ts` in the root directory for configuration options.
