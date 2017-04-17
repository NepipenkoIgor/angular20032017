import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class CartModal {
  public cards: ElementArrayFinder;

  public constructor() {
    this.cards = element.all(by.css('app-cart-list md-card'));
  }

  public removeFromCart(index: number): void {
    this.cards.get(index)
      .element(by.css('.remove'))
      .click();
  }
}
