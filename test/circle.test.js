const circle = require("../lib/circle.js");
describe("circle", () => {
  describe("display circle logo", () => {
    it("should render circle filled  with color in the browser", () => {
      const shape = new circle("svg", "white", "blue");
      expect(shape.render()).toEqual(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="blue" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
  </svg
      `);
    });
  });
});
