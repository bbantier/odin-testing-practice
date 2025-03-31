import { capitalize, reverseString, calculator } from "./script.js";

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
