
import { PWBrowser } from '../PW_Base/Browser';
import { Page } from 'playwright';

export class HomePage {
  private page: Page;

  constructor(browser: PWBrowser) {
    this.page = browser.getPage();
  }

 
}
