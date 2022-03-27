
const { Observable, timer, interval, of, merge, concat } = require("rxjs");
const {
  mapTo,
  map,
  mergeAll,
  switchMap,
  share,
  take,
  shareReplay,
  reduce,
  tap,
} = require("rxjs/operators");
const first$ = interval(500).pipe(
  map(x => `first = ${x}`)
);
const second$ = interval(500).pipe(
  map(x => `second = ${x + 100}`)
);

const interval5$ = interval(500).pipe(
  take(5),
  mapTo('interval5')
);

// merge(first$, second$).pipe(take(10)).subscribe(console.log);
// concat(interval5$, first$.pipe(take(5))).subscribe(console.log);

interval(100).pipe(
  take(50),
  tap(console.log),
  reduce((acc, value) => acc + value, 0)
).subscribe((sum) => console.log(`sum is ${sum}`));