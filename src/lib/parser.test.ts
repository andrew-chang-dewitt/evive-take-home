import { expect, describe, it } from "vitest";

import parse from "./parser";

describe("parser", () => {
  it.each([
    ["Breakfast 1,2,3", ["Breakfast", [0, 1, 2]]],
    ["Breakfast 2,3,1", ["Breakfast", [1, 2, 0]]],
    ["Breakfast 1,2,3,3,3", ["Breakfast", [0, 1, 2, 2, 2]]],
    ["Breakfast 1", ["Breakfast", [0]]],
    ["Lunch 1,2,3", ["Lunch", [0, 1, 2]]],
    ["Lunch 1,2", ["Lunch", [0, 1]]],
    ["Lunch 1,2,2", ["Lunch", [0, 1, 1]]],
    ["Dinner 1,2,3,4", ["Dinner", [0, 1, 2, 3]]],
    ["Dinner 1,2,3", ["Dinner", [0, 1, 2]]],
  ])("Parses %s to %s", (input, expected) => {
    const actual = parse(input);

    expect(actual[0]).toEqual(expected[0]);
    expect(actual[1]).toEqual(expected[1]);
  });

  it("errors if menu name is invalid", () => {
    expect(() => parse("invalid 1,2,3")).toThrow(/invalid menu name/i);
  });

  it("allows spaces in between numbers", () => {
    const actual = parse("Lunch 1,1,2, 3");

    expect(actual).toEqual(["Lunch", [0, 0, 1, 2]]);
  });

  it("allows empty order lists", () => {
    const actual = parse("Lunch");

    expect(actual).toEqual(["Lunch", []]);
  });
});
