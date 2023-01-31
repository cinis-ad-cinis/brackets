module.exports = function check(str, bracketsConfig) {
  if (str.length%2) {
    return false
  }
  let stack = [];
  const obj = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (stack.length != 0 && obj[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      if (obj.hasOwnProperty(str[i])) {
        stack.push(str[i])
      } else {
        return false
      }
    }
  }
  return stack.length === 0;
}
