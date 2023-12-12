const circleExample = require("./circleExample.js");
const circle = require("../lib/circle.js");

describe("circle", () => {
  describe("display circle logo", () => {
    it("should render circle filled  with color in the browser", () => {
      const shape = new circle("svg", "white", "blue");
      expect(shape.render()).toMatch(circleExample);
    });
  });
});
