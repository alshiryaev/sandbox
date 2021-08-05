// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(f) {
  const figure = 0;
  return f ? calculate(figure, f) : figure;
}
function one(f) {
  const figure = 1;
  return f ? calculate(figure, f) : figure;
}
function two(f) {
  const figure = 2;
  return f ? calculate(figure, f) : figure;
}
function three(f) {
  const figure = 3;
  return f ? calculate(figure, f) : figure;
}
function four(f) {
  const figure = 4;
  return f ? calculate(figure, f) : figure;
}
function five(f) {
  const figure = 5;
  return f ? calculate(figure, f) : figure;
}
function six(f) {
  const figure = 6;
  return f ? calculate(figure, f) : figure;
}
function seven(f) {
  const figure = 7;
  return f ? calculate(figure, f) : figure;
}
function eight(f) {
  const figure = 8;
  return f ? calculate(figure, f) : figure;
}
function nine(f) {
  const figure = 9;
  return f ? calculate(figure, f) : figure;
}

function plus(value) {
  return {
    operation: '+',
    value
  };
}
function minus(value) {
  return {
    operation: '-',
    value
  };
}

function times(value) {
  return {
    operation: '*',
    value
  };
}
function dividedBy(value) {
  return {
    operation: '/',
    value
  };
}

function calculate(value, obj) {
  switch (obj.operation) {
    case '-':
      return value - obj.value;
    case '+':
      return value + obj.value;
    case '*':
      return value * obj.value;
    case '/':
      return Math.floor(value / obj.value);
  }
}

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine, plus, minus, times, dividedBy, calculate
};
