import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { DOMAIN } from '../config';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


export class ProductResolveService implements Resolve<Product> {

  public constructor(
    @Inject(Http) private _http: Http,
    @Inject(DOMAIN) private _domain: string,
    @Inject(Router) private _router: Router,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this._http.get(`${this._domain}/products/${route.params.id}`)
      .map((res: Response) => res.json())
      .catch((err: Error) => {
        this._router.navigate(['products']);
        return Observable.of(null);
      });
  }


}
