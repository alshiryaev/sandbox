const RLE = require('./RLE');

test('RLE', () => {
    expect(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
    expect(RLE('AA')).toBe('A2');
    expect(RLE('AB')).toBe('AB');
    expect(RLE('A')).toBe('A');
    expect(RLE('ABBB')).toBe('AB3');
});