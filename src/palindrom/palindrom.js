module.exports = function isPalindrom(word) {
    if (word.length <= 1)
        return false;
    let left = 0, right = word.length - 1;

    while (left < right) {
        if (word[left] === word[right]) {
            right--;
            left++;
        } else {
            return false;
        }

    }
    return true;
}