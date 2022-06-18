class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function curry(fn) {
    return function c(...args) {
        if (fn.length <= args.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return c.apply(this, args.concat(args2));
            }
        }
    }
}
