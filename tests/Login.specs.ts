import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/Home';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
  });

  test('Check table', async ({ page }) => {
    
  })

});