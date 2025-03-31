const capitalize = (string) => {
  return string.at(0).toUpperCase() + string.substring(1);
};

const reverseString = (string) => {
  return string.split("").toReversed().join("");
};

export { capitalize, reverseString };