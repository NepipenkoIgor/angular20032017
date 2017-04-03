import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Http, Response } from '@angular/http';
import { DOMAIN } from '../config';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductResolveService implements Resolve<Product> {

  public constructor(
    @Inject(Http) private _http: Http,
    @Inject(DOMAIN) private _domain: string,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this._http.get(`${this._domain}/products/${route.params.id}`)
      .map((res: Response) => res.json());
  }


}
