module.exports = RLE = (str) => {
  if (!str) {
    throw new Error("An empty string was passed");
  }

  function createString(letter, letterCount) {
    return `${letter}${letterCount > 1 ? letterCount : ""}`;
  }

  let letter = str[0],
    letterCount = 0,
    resultString = "";

  for (let s of str) {
    if (s === letter) {
      letterCount++;
    } else {
      resultString += createString(letter, letterCount);
      letter = s;
      letterCount = 1;
    }
  }

  resultString += createString(letter, letterCount);
  return resultString;
};

RLE2('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');