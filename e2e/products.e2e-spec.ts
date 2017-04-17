import { ProductsPage } from './products/products.po';
import { SearchWidget } from './common/search/search.po';
import { ProductModal } from './products/product-modal.po';
import { CartWidget } from './common/cart/cart.po';
import { CartModal } from './common/cart/cart-modal.po';
import { browser } from 'protractor';
describe('angular16032017 App', () => {
  const page: ProductsPage = new ProductsPage();
  const searchWidget: SearchWidget = new SearchWidget();
  const productModal: ProductModal = new ProductModal();
  const cartWidget: CartWidget = new CartWidget();
  const cartModal: CartModal = new CartModal();

  beforeEach(() => {
    page.open();
  });

  it('should search by term', () => {
    searchWidget.search('DIGIRANGsdasd');
    expect(page.cards.count())
      .toEqual(0);
    browser.sleep(2000);
    searchWidget.searchInput.clear();
    searchWidget.search('DIGIRANG');
    browser.sleep(2000);
    expect(page.cards.count())
      .toEqual(1);
    searchWidget.searchInput.clear();
    searchWidget.search(' ');
    browser.sleep(2000);
    expect(page.cards.count())
      .toEqual(10);
  });

  it('should display product modal', () => {
    page.openFullCardModal(1);
    browser.sleep(2000);
    expect(productModal.title.getText())
      .toEqual('SONIQUE');
    expect(productModal.price.getText())
      .toEqual('1822.77');
  });

  it('should add product to cart', () => {
    [1, 3, 7].forEach((index: number) => {
      page.openFullCardModal(index);
      browser.sleep(2000);
      productModal.buy();
    });
    expect(cartWidget.counter.getText())
      .toEqual('3');
    cartWidget.openCart();
    browser.sleep(2000);
    expect(cartModal.cards.count())
      .toEqual(3);
  });
  it('should remove product from cart', () => {
    [1, 3, 7].forEach((index: number) => {
      page.openFullCardModal(index);
      browser.sleep(2000);
      productModal.buy();
    });
    cartWidget.openCart();
    [0, 1, 2].forEach(() =>    {
      cartModal.removeFromCart(0)
      browser.sleep(2000);
    });
    expect(cartWidget.counter)
      .toBeDefined(false);
  });
});
