// Итерируемый объект. Реализация Symbol.Iterator
const obj = {
  from: 10,
  to: 50,
  [Symbol.iterator]() {
    // Возвращает объект методом next()
    // next() - возвращает {value: <значение итерации>, done: <флаг итерации>}
    return {
      from: this.from,
      to: this.to,
      next() {
        if (this.from <= this.to) {
          return {
            done: false,
            value: this.from++,
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

// Генераторы позволяют создавать итерируемые объекты гораздо элегантнее
const objWithGenerator = {
  from: 50,
  to: 60,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

// Цепочка генераторов
function* generateSequence(from, to) {
  for (let i = from; i <= to; i++) yield i;
}

function* generatePasswordCodes() {
  yield* generateSequence(48, 57);

  yield* generateSequence(65, 90);

  yield* generateSequence(97, 122);
}

let str = "";
for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);

function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
