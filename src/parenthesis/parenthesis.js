
function generate(n, curr, open, close, result) {

    if (curr.length === 2 * n) {
        result.push(curr);
    }
    if (open < n) {
        generate(n, curr + '(', open + 1, close, result);
    }
    if (close < open) {
        generate(n, curr + ')', open, close + 1, result);
    }
    return result;
}

function parenthesis(n) {
    return generate(n, '', 0, 0, []);
}

module.exports = parenthesis;