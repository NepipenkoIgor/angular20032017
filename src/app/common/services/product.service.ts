import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DOMAIN } from '../../config';


export class ProductService {

  public constructor(
    @Inject(Http) private _http: Http,
    @Inject(DOMAIN) private _domain: string,
  ) { }

  public get getProducts(): Observable<Product[]> {
    return this._http.get(`${this._domain}/products`)
      .map((res: Response) => res.json());
  }

}
