/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    
    let left = 0;
    let max = 0;

    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        // Здесь мы ходим по циклу до тех пор пока
        // в set есть текущий символ
        // Это нужно для того чтоб 
        // корректно двигать левую границу
        while (set.has(s[i])) {
            console.log('before=', set);
 
            // Удаляем символ на который указывает левый указатель
            // так как он 100% там уже есть 
            set.delete(s[left]);
            console.log('after=',set);

            left++;
        }
        set.add(s[i]);

        // Результат должен быть максимальным
        // между размером текущим окном или предыдущим максимумом
        max = Math.max(max, i - left + 1);
        console.log('max=', max);
    }

    return max;
};

console.log(lengthOfLongestSubstring("pwwkew")); // 3
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3 