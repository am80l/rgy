import multiJoin from "../../src/helpers/multiJoin";

describe("multiJoin", () => {
  it(`Handles strings`, () => {
    expect(multiJoin("foo")).toEqual("foo");
    expect(multiJoin("foo bar")).toEqual("foo bar");
  });

  it(`Handles integers`, () => {
    expect(multiJoin("1")).toEqual("1");
  });

  it(`Handles strings and integers with special characters`, () => {
    expect(multiJoin("^")).toEqual("\\^");
    expect(multiJoin("foo!")).toEqual("foo\\!");
    expect(multiJoin("foo!bar*")).toEqual("foo\\!bar\\*");
  });

  it("Joins arrays", () => {
    expect(multiJoin(["a", "b", "c"])).toEqual("a|b|c");
  });

  it("Errors on unsupported types", () => {
    expect(() => {
      multiJoin({});
    }).toThrow();
  });
});
