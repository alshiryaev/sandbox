module.exports = isPalindromRecursive;

function isPalindrom(word) {
  if (word.length <= 1) return false;
  let left = 0,
    right = word.length - 1;

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

function isPalindromRecursive(word) {

  if (word.length <= 1) {
    return true;
  }

  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  return isPalindrom(word.slice(1, word.length - 1));
}
