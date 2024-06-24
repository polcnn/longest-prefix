const getLongestPrefix = (strs: string[]): string => {
  if (strs.length === 0 || strs.length > 200) {
    return "";
  }

  strs.forEach((str: string) => {
    if (str.length > 200 || !/^[a-z]*$/.test(str)) return "";
  });

  const minLen = Math.min(...strs.map((s) => s.length));
  let prefix = "";

  for (let i = 0; i < minLen; i++) {
    const char = strs[0][i];

    if (strs.every((s) => s[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
};

console.log(getLongestPrefix(["flower", "flow", "flight"]));
console.log(getLongestPrefix(["dog", "racecar", "car"]));
