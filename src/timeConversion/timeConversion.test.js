const timeConversion = require('./timeConversion');

test('timeConversion', () => {
    const inp = '07:05:45PM';
    const result = timeConversion(inp);
    expect(result).toEqual('19:05:45');
});