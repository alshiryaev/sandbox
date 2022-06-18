const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
]);

/**
 * Check valid parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} str string
 * @returns boolean
 */
function validParentheses(str) {
    let stack = [];
    
    for (const s of str) {4
        if (stack.length > 0 && stack[0] === map.get(s)) {
            stack.splice(0, 1);
        } else {
            stack = [s].concat(...stack);
        }
    }

    return stack.length === 0;
}

module.exports = {
    validParentheses,
}