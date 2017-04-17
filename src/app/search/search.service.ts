import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  private _searchSequence$$: Subject<string> = new Subject();

  public get getSearchTerm$(): Observable<string> {
    return this._searchSequence$$.asObservable();
  }

  public set searchTerm(text: string) {
    this._searchSequence$$.next(text);
  }

}
