import { browser, element, by, ElementFinder } from 'protractor';

export class SearchWidget {
  public searchInput: ElementFinder;

  public constructor() {
    this.searchInput = element(by.css('app-search input'));
  }

  public search(text: string): void {
    this.searchInput.sendKeys(text);
  }
}
