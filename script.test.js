import { capitalize } from "./script.js";

test("Capitalized 'camembert' should be 'Camembert'", () => {
  expect(capitalize("camembert")).toBe("Camembert");
});