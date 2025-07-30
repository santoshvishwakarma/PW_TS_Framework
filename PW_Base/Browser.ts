
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';
import playwrightConfig from '../playwright.config';

export class PWBrowser {
  private browser: Browser | undefined;
  private context: BrowserContext | undefined;
  private page: Page | undefined;

  
  /**
   * Launches the specified browser ('chromium', 'firefox', 'webkit')
   */
  async launch(browserType: 'chromium' | 'firefox' | 'webkit' = 'chromium', headless: boolean = true) {

    switch (browserType) {
      case 'chromium':
        this.browser = await chromium.launch({ headless });
        break;
      case 'firefox':
        this.browser = await firefox.launch({ headless });
        break;
      case 'webkit':
        this.browser = await webkit.launch({ headless });
        break;
      default:
        throw new Error('Unsupported browser type');
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  /**
   * Returns the current page instance
   */
  getPage(): Page {
    if (!this.page) {
      throw new Error('Page is not initialized. Call launch() first.');
    }
    return this.page;
  }

  /**
   * Closes the browser and cleans up resources
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = undefined;
      this.context = undefined;
      this.page = undefined;
    }
  }
}
