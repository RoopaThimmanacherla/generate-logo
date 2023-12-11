const square = require("../lib/square.js");
describe("square", () => {
  describe("display square logo", () => {
    it("should render square filled  with color in the browser", () => {
      const shape = new square("svg", "white", "blue");
      expect(shape.render()).toEqual(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="blue"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
  </svg>`);
    });
  });
});
