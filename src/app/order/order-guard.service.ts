import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CartService } from '../common/services/cart.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
@Injectable()
export class OrderGuardService implements CanActivate {

  public constructor(
    private _cartService: CartService,
    private _router: Router,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._cartService.cartSequence.switchMap((products: Product[]) => {
      if (products.length) {
        return Observable.of(true);
      }
      this._router.navigate(['']);
      return Observable.of(false);
    });
  };


}
