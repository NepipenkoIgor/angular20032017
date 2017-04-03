import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';
import { ModalService } from '../../common/components/modal/modal.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public constructor(private _cartService: CartService) { }

  public ngOnInit(): void {
  }

  public remove(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
  }

  public getTotalSum(products: Product[]): string {
    return products.reduce((totalPrice: number, product: Product) => {
      return totalPrice += Number(product.price);
    }, 0)
      .toFixed(2);
  }
}
