import { browser, element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';
export class ProductModal {
  public title: ElementFinder;
  public price: ElementFinder;
  public image: ElementFinder;
  public buyButton: ElementFinder;
  public infoButton: ElementFinder;

  public constructor() {
    this.title = element(by.css('app-full-card md-card-title'));
    this.price = element(by.css('app-full-card md-card-subtitle'));
    this.image = element(by.css('app-full-card img'));
    this.buyButton = element(by.css('app-full-card .buy_button'));
    this.infoButton = element(by.css('app-full-card .info_button'));
  }

  public buy(): void {
    this.buyButton.click();
  }

}
