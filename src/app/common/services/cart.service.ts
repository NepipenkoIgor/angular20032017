import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/scan';
@Injectable()
export class CartService {

  private _cartSequence$$: Subject<CartItem> = new Subject();

  public set updateCart(cartItem: CartItem) {
    this._cartSequence$$.next(cartItem);
  }

  public get cartSequence(): Observable<Product[]> {
    return this._cartSequence$$.scan<CartItem, Product[]>((acc: Product[], cartItem: CartItem) => {
      switch (cartItem.action) {
        case 'add':
          acc.push(cartItem.product);
          break;
        case 'remove':
          const index: number = acc.findIndex((product: Product) => cartItem.product._id === product._id);
          acc.splice(index, 1);
          break;
      }
      return acc;
    }, []);
  }

}
