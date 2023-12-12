const triangle = require("../lib/triangle.js");
const triangleExample = require("./triangleExample.js");
describe("Triangle", () => {
  describe("display triangle logo", () => {
    it("should render triangle filled  with color in the browser", () => {
      const shape = new triangle("svg", "white", "blue");
      expect(shape.render()).toMatch(triangleExample);
    });
  });
});
