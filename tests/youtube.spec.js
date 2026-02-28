const { test, expect } = require('@playwright/test');

test('youtube reachable (HTTP)', async ({ request }) => {
  // Use Playwright's APIRequestContext to avoid launching a browser
  const response = await request.get('https://www.youtube.com', { timeout: 30000 });

  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
});
