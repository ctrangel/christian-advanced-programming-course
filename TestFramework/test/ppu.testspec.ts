import { expect } from "chai";
import Bison from "../src/ppu";

describe("Test Bison Class", () => {
  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.add(2, 4);

    expect(result).to.equal(6);
  });
});
