const { longestCommonPrefix } = require('./longestCommonPrefix');

test('longestCommonPrefix', () => {

    expect(longestCommonPrefix(["flower", "flow", "flight"]))
        .toEqual('fl');

    expect(longestCommonPrefix(["dog", "racecar", "car"]))
        .toEqual('');
})