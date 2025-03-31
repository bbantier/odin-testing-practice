const capitalize = (string) => {
  return string.at(0).toUpperCase() + string.substring(1);
};

const reverseString = (string) => {
  return string.split("").toReversed().join("");
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
}

export { capitalize, reverseString, calculator };