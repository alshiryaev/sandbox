/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    
    let l = 0;
    let max = 0;

    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[i]);
        max = Math.max(max, i - l + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwwkew")); // 3