const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("Caesar", () => {
  it("should return false if shift is equal to 0", () => {
    const expected = false;
    const actual = caesar("cipher", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesar("cipher", -27);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    const expected = false;
    const actual = caesar("cipher", 28);
    expect(actual).to.equal(expected);
  });
  it("should ignore uppercase letters", () => {
    const expected = "bwnjth";
    const actual = caesar("SNEAKY", 9);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
    const expected = "e xs d!";
    const actual = caesar("A to Z!", 4);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetic symbols when encoding", () => {
    const expected = "ykixkz zattkr!";
    const actual = caesar("Secret Tunnel!", 6);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetic symbols when decoding", () => {
    const expected = "secret tunnel!";
    const actual = caesar("ykixkz zattkr!", 6, false);
    expect(actual).to.equal(expected);
  });
  it("should decode if set to false and the shift is known", () => {
    const expected = "secret tunnel!";
    const actual = caesar("ykixkz zattkr!", 6, false);
    expect(actual).to.equal(expected);
  });
});