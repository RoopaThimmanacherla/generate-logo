const squareExample = require("./squareExample.js");
const square = require("../lib/square.js");
describe("square", () => {
  describe("display square logo", () => {
    it("should render square filled  with color in the browser", () => {
      const shape = new square("svg", "white", "blue");
      expect(shape.render()).toMatch(squareExample);
    });
  });
});
