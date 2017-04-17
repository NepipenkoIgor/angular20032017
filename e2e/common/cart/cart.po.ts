import { browser, element, by, ElementFinder } from 'protractor';

export class CartWidget {
  public counter: ElementFinder;
  public cart: ElementFinder;

  public constructor() {
    this.counter = element(by.css('app-cart .counter'));
    this.cart = element(by.css('app-cart'));
  }

  public openCart(): void {
    this.cart.click();
  }
}
