import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import { Subscription } from 'rxjs/Subscription';
let input: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;
// function eventSequence<T>(element: HTMLElement, eventName: string): Promise<T> {
//   return new Promise((res, rej) => {
//     element.addEventListener(eventName, () =>
//       res((event.target as HTMLInputElement).value));
//   });
// }
// eventSequence<string>(input, 'input')
//   .then((value: string) => console.log(value));


// function eventSequence<T>(element: HTMLElement, eventName: string): Function {
//   const values: string[] = [];
//
//   function* a(): IterableIterator<string> {
//     while (true) {
//       yield values[0];
//       values.shift();
//     }
//   }
//
//   element.addEventListener(eventName, () => {
//     values.push((event.target as HTMLInputElement).value);
//   });
//   return a;
// }
// let sequence: IterableIterator<string> = eventSequence<string>(input, 'input')();
// console.log(sequence.next().value);
// setTimeout(() => {
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
// }, 5000);

// ReactiveX = Observer + iterator => Observable
// const event$ = Observable.fromEvent(input, 'input');
//
// setTimeout(() => {
//   const subscription: Subscription = event$
//     .subscribe((event: KeyboardEvent) => {
//       console.log((event.target as HTMLInputElement).value);
//     });
// }, 5000);

// setTimeout(() => subscription.unsubscribe(), 5000);
// setTimeout(() => {
//   event$.subscribe((event: KeyboardEvent) => {
//     console.log((event.target as HTMLInputElement).value);
//   }, null, () => {
//     console.log('finish 1');
//   });
// }, 10000);

// const controlSequence$$: ReplaySubject<number> = new ReplaySubject(2);
//
//
// const arrsequence$: Observable<number> = Observable.from([1, 2, 3, 4, 5]);
// arrsequence$
//   .subscribe((num: number) => controlSequence$$.next(num));
//
// controlSequence$$.subscribe((num: number) => {
//   console.log(num);
// });
//
// setTimeout(() => {
//   let i: number = 6;
//   setInterval(() => controlSequence$$.next(i++), 1000);
// }, 3000);

// setTimeout(() => {
//   arrsequence$
//     .subscribe((num: number) => {
//       console.log(num);
//     }, null, () => {
//       console.log('finish 2');
//     });
// }, 2000);


Observable.fromEvent(input, 'input')
  .debounceTime(300)
  .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
  .do((searchTerm: string) => {
    console.log(searchTerm);
  })
  .switchMap((searchTerm: string) =>
    Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then((res: Response) => res.json()))
  )
  .map((repo: any) => repo.items)
  .subscribe((items: any[]) => {
    console.log(items);
  });