const triangle = require("../lib/triangle.js");
describe("circle", () => {
  describe("display triangle logo", () => {
    it("should render triangle filled  with color in the browser", () => {
      const shape = new triangle("svg", "white", "blue");
      expect(shape.render()).toEqual(`<svg version="1.1" 
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
      <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">SVG</text>
  </svg>`);
    });
  });
});
