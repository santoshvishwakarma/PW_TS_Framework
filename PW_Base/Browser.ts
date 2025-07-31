
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';
import playwrightConfig from '../playwright.config';

export class PWBrowser {
  private browser: Browser | undefined;
  private context: BrowserContext | undefined;
  private page: Page | undefined;

  //Browser launch method
    
  public async launch(browserType: 'chromium' | 'firefox' | 'webkit' = 'chromium', headless: boolean = true): Promise<Page> {
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
    return this.page;
  }


}
