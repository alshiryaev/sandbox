function isPangram(string) {
  const set = new Set();
  let counter = 26;

  const forbidSymbols = new Set()
  .add(" ")
  .add(".")
  .add(",")
  .add("!")
  .add("?");

  for (const s of string) {
    if (!set.has(s.toLowerCase()) && !forbidSymbols.has(s)) {
      set.add(s.toLowerCase());
      counter--;
    }
  }

  return counter <= 0;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
