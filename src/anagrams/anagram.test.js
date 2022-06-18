const { areAnagrams } = require('./anagrams');

test('areAnagrams', () => {

    expect(areAnagrams('сон', 'нос')).toBe(true);
    expect(areAnagrams('насос', 'сосна')).toBe(true);
    expect(areAnagrams('сос', 'нос')).toBe(false);
    expect(areAnagrams('', 'нос')).toBe(false);
    expect(areAnagrams('нос', '')).toBe(false);
    expect(areAnagrams('', '')).toBe(false);
});