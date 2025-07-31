
import { PWBrowser } from '../PW_Base/Browser';
import { Page } from 'playwright';

export class HomePage {
  private page!: Page;

  constructor() {}

  async init(browser: PWBrowser): Promise<void> {
    this.page = await browser.launch();
  }

 
}
