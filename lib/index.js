function doit(arr) {
  return arr.filter(num => num > 5)
    .map(num => `Wow, ${ num } is big!`);
}

module.exports = {
  doit
};
