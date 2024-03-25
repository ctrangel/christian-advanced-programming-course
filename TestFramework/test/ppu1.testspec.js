import { expect } from "chai";
import Bison from "../src/ppu1.js";

describe("Test Bison Class", () => {
  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.add(2, 4);

    expect(result).to.equal(6);
  });

  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.subtract(4, 2);

    expect(result).to.equal(2);
  });

  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.multiply(2, 4);

    expect(result).to.equal(8);
  });

  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.divide(4, 2);

    expect(result).to.equal(2);
  });

  it("should throw an error", () => {
    const calc = new Bison();
    expect(() => calc.divide(4, 0)).to.throw("Cannot divide by the zero that is illegal");
  });

  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.divide(0, 4);

    expect(result).to.equal(0);
  });

  it("should return a value", () => {
    const calc = new Bison();
    const result = calc.divide(4, 4);

    expect(result).to.equal(1);
  });
});
