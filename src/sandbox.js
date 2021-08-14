function res() {
  return [].slice.call(arguments, 1).join(arguments[0]);
}

// res('*', '1', 'b', '1c');

Number.prototype.plus = function (n) {
  return this + n;
};

Number.prototype.minus = function (n) {
  return this - n;
};

// console.log((2).plus(3).minus(1));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function(i) {
//       console.log(i);
//     }.bind(this, i), 1000);
// }
// console.log(one(plus(two()))); // -> 3  
// console.log(two(minus(one())));
function one(arg) {
  return 1 + (arg || 0);
}

function two(arg) {  
  return 2 + (arg || 0);
}

function plus(arg) {
  return arg;
}

function minus(arg) {
  return -arg;
}

pn('23+1-') // => 51-
function pn(str) { 
  let number = [];
  for (let s of str) {
     if (Number.isInteger(+s)) {
        number.push(+s);
     } else{
        const res = number
          .reduce((p,c) => {
            return s === '+'
            ? p + c : p - c;
          });
        number = [res];
     }

     console.log(number);
  }
}


