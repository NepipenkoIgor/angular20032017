import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../common/services/cart.service';
import { ModalService } from '../../../common/components/modal/modal.service';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class FullCardComponent {

  public constructor(
    private _cartService: CartService,
    private _modalService: ModalService,
  ) {

  }

  public buy(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
    this._modalService.close();
  }
}
