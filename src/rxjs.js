const { Observable, timer, interval, of } = require("rxjs");
const {
  mapTo,
  map,
  mergeAll,
  switchMap,
  share,
  shareReplay,
} = require("rxjs/operators");

const first$ = of('first');
const second$ = of('test');
