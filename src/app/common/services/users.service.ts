import { Inject,Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {DOMAIN} from '../../config';

export class UsersService {

  public constructor(
    @Inject(Http) private _http: Http,
    @Inject(DOMAIN) private _domain: string,
  ) { }

  public getUsers(): Observable<User[]> {
    return this._http.get(`${this._domain}/courses/groups/api/participants?key=uy5nm6`)
      .map((res: Response) => res.json());
  }
}
