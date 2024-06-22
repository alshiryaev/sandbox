function pipe(...functions) {
    return function(n) {
        let res = n;
        for (const func of functions) {
            res = func(res);
        }

        return res;
    };
}
module.exports = {
    pipe,
};

