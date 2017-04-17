import { browser, element, by, ElementArrayFinder } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';
export class ProductsPage {
  public cards: ElementArrayFinder;

  public constructor() {
    this.cards = element.all(by.css('app-card'));
  }

  public open(): wdpromise.Promise<void> {
    return browser.get('/');
  }

  public openFullCardModal(index: number): void {
    this.cards.get(index)
      .click();
  }
}
