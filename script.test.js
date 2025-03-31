import { capitalize, reverseString } from "./script.js";

test("Capitalize function", () => {
  expect(capitalize("camembert")).toBe("Camembert");
});

test("reverseString function", () => {
  expect(reverseString("camembert")).toBe("trebmemac");
});
