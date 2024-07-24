/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    const haystackLength  = haystack.length;
    const needleLength = needle.length;

    if (needleLength === 0) return 0;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let isMatch = true;

        // Check each character of the needle against the haystack
        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("mississippi", "issip")); // 4
console.log(strStr("a", "a")); // 0

