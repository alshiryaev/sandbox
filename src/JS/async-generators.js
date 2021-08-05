// Объект с асинхронной итерацией
const range = {
  from: 50,
  to: 60,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      // next должен возвращать Promise
      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

// Асинхронный генератор
async function* asyncSequence(from, to, delay = 1000) {
  for (let i = from; i < to; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    yield i;
  }
}


// (async () => {
//     console.log('async generator');
//     for await (const item of asyncSequence(10, 20, 300)) {
//         console.log(item);
//     }
// })();

// Объект с асинхронной итерацией, реализованной через аснхронный генератор
const asyncRange = {
    from: 10,
    to: 30,
    async *[Symbol.asyncIterator] () {
        for (let value = this.from; value < this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            yield value;
        }
    }
};

(async() => {
    console.log('async object');
    for await (const item of asyncRange) {
        console.log(item);
    }
})();