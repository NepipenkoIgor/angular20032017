import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  private _modalSequence$$: Subject<any> = new Subject();

  public open(component: { component: any, context: any }): void {
    this._modalSequence$$.next(component);
  }

  public get modalSequence$(): Observable<any> {
    return this._modalSequence$$.asObservable();
  }

  public close(): void {
    this._modalSequence$$.next(null);
  }

}
