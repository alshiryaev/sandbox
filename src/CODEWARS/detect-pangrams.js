// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
    const start = "A".charCodeAt();
    const end = "z".charCodeAt();
    const allCount = 26;

    const map = new Map();
    for (const s of string) {
        const lowerCase = s.toLowerCase();
        const current = lowerCase.charCodeAt();
        if (current >= start && current <= end) {
            if (map.has(lowerCase)) {
                const value = map.get(lowerCase);
                map.set(lowerCase, value + 1);
            } else {
                map.set(lowerCase, 1);
            }
        }
    }

    return map.size >= allCount;
}

function isPangram_2(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}
