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
};

const caesarCipher = (string, shift) => {
  const charList = string.split("");
  const charCodeList = [];

  const upperCaseASCII = {
    min: 65,
    max: 90,
  };

  const lowerCaseASCII = {
    min: 97,
    max: 122,
  };

  charList.forEach((char) => {
    const isLetter = (code) => {
      return (
        (code >= upperCaseASCII.min && code <= upperCaseASCII.max) ||
        (code >= lowerCaseASCII.min && code <= lowerCaseASCII.max)
      );
    };

    const charCode = char.charCodeAt(0);
    const shiftedCharCode = isLetter(charCode) ? charCode + shift : charCode;

    const isOutOfBounds = (code) => {
      if (isLetter(charCode)) {
        return (
          (code < lowerCaseASCII.min && code > upperCaseASCII.max) ||
          code > lowerCaseASCII.max
        );
      }
    };

    const wrappedCharCode = isOutOfBounds(shiftedCharCode)
      ? shiftedCharCode - 26
      : shiftedCharCode;

    charCodeList.push(wrappedCharCode);
  });

  return String.fromCharCode(...charCodeList);
};

export { capitalize, reverseString, calculator, caesarCipher };
