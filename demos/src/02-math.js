const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const div = (a, b) => {
  if (b === 0) return null;

  return a / b;
};

module.exports = {
  sum,
  mul,
  div,
};
