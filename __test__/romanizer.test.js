import romanizer from "../src/romanizer.js"

describe("romanizer", () => {
  it("should return X when transfer 10", () => {
    expect(romanizer(10)).toEqual("X");
  })
})
