const { of, interval, merge, timer, Subject, concat } = require('rxjs');
const {
  concatMap,
  map,
  switchMap,
  take,
  takeWhile,
  tap,
  mergeMap,
  takeUntil,
  multicast,
  publish,
  refCount,
  share,
  shareReplay,
  exhaustMap,
} = require('rxjs/operators');

