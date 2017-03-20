import { Angular16032017Page } from './app.po';

describe('angular16032017 App', () => {
  let page: Angular16032017Page;

  beforeEach(() => {
    page = new Angular16032017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
