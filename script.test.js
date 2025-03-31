import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./script.js";

test("capitalize function", () => {
  expect(capitalize("camembert")).toBe("Camembert");
});

test("reverseString function", () => {
  expect(reverseString("camembert")).toBe("trebmemac");
});

test("calculator add method", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator subtract method", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("calculator divide method", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("calculator multiply method", () => {
  expect(calculator.multiply(6, 5)).toBe(30);
});

test("Caesar cipher: Base Case", () => {
  expect(caesarCipher("camembert", 3)).toBe("fdphpehuw");
  expect(caesarCipher("camembert", 4)).toBe("geqiqfivx");
});

test("Caesar cipher: Wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar cipher: Case preservation", () => {
  expect(caesarCipher("Camembert", 3)).toBe("Fdphpehuw");
});

test("Caesar cipher: Ponctuation", () => {
  expect(caesarCipher("camembert!", 3)).toBe("fdphpehuw!");
});