
// let range = {
//     from: 10,
//     to: 17,
//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             next() {
//                 return {
//                     done: this.current > this.last,
//                     value: this.current++,
//                 }
//             }
//         }
//     }
// }


function greeting(msg) {
    return function who(name) {
        console.log(`${msg} ${name}`);
    }
}

function counter(step) {
    let counter = 0;
    return function increase() {
        counter += step;
        return counter;
    }
}

// const map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three']
// ]);

// for (var [index, value] of map) {
//     setTimeout(function () {
//         console.log(`${index} - ${value}`);
//     }, 100);
// }

// for (var [index, value] of map) {
//     (function (index, value) {
//         setTimeout(function () {
//             console.log(`${index} - ${value}`);
//         }, 100)
//     })(index, value)
// }

// for (var [index, value] of map) {
//     setTimeout(function (index, value) {
//         console.log(`${index} - ${value}`);
//     }, 100, index, value)
// }

// for (var [index, value] of map) {
//     setTimeout((function (index, value) {
//         console.log(`${index} - ${value}`);
//     }).bind(null, index, value), 100)
// }

// for (let [index, value] of map) {
//     setTimeout(function () {
//         console.log(`${index} - ${value}`);
//     }, 100);
// }

function range(start, end) {
    if (end !== undefined) {
        const res = [];
        for (let i = start; i <= end; i++) {
            res.push(i);
        }

        return res;
    } else {
        return function cycle(end) {
            const res = [];
            for (let i = start; i <= end; i++) {
                res.push(i);
            }

            return res;
        }
    }
}

function mul(a, b) {
    return a * b;
}

const mulBy3 = mul.bind(null, 3); // mulBy3(2) = 6

function askPassword(ok, fail) {
    let password = "rockstaqr";
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(() => user.login(true), user.login.bind(user, false));

function sayHello(name) {
    console.log(`Hello ${name} :)`);
}

function startInTime(fn, ms, ...args) {
    return function() {
        setTimeout(() => fn.apply(this, args), ms);
    }
}


const startIn1000 = startInTime(sayHello, 1000, "Alexey");
startIn1000();