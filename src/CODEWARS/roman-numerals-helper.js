const RomanNumerals = {
  romanNumbers: {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  },
  decimalNumbers: new Map([[1, "I"], [5, "V"], []]),

  /**
   * Get a roman number from a decimal number
   * @param {number} i
   */
  toRoman(i) {
    let m = 1;
    while (i > 0) {
      const f = (i % 10) * m;
      i = Math.floor(i / 10);
      m *= 10;
      console.log(i, f);
    }
  },
  /**
   * Get a decimal number from a roman number
   * @param {string} s
   */
  fromRoman(s) {
    let res = 0;
    for (let index = 0; index < s.length; index++) {
      const prev = index === 0 ? 0 : this.romanNumbers[s[index - 1]];
      const current = this.romanNumbers[s[index]];

      if (current / prev === 5 || current / prev === 10) {
        res = res + current - 2 * prev;
      } else {
        res = res + current;
      }
      console.log(prev, current, res);
    }

    return res;
  },
};

// console.log(RomanNumerals.fromRoman('DXCIV'));
console.log(RomanNumerals.fromRoman("IV"));

// console.log(RomanNumerals.toRoman("594"));
