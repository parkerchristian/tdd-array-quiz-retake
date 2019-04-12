module.exports = function doIt(arr) {
  return arr.filter(num => num > 5)
    .sort((a, b) => a - b)
    .map(num => `Wow, ${ num } is big!`);
};
