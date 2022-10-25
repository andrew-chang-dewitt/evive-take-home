import { expect, describe, it } from "vitest";

import takeOrder from "./main";

describe("integration", () => {
  it.each([
    ["Breakfast 1,2,3", "Eggs, Toast, Coffee"],
    ["Breakfast 2,3,1", "Eggs, Toast, Coffee"],
    ["Breakfast 1,2,3,3,3", "Eggs, Toast, Coffee(3)"],
    ["Breakfast 1", "Unable to process: Side is missing"],
    ["Lunch 1,2,3", "Sandwich, Chips, Soda"],
    ["Lunch 1,2", "Sandwich, Chips, Water"],
    [
      "Lunch 1,1,2, 3",
      "Unable to process: Sandwich cannot be ordered more than once",
    ],
    ["Lunch 1,2,2", "Sandwich, Chips(2), Water"],
    ["Lunch", "Unable to process: Main is missing, side is missing"],
    ["Dinner 1,2,3,4", "Steak, Potatoes, Wine, Water, Cake"],
    ["Dinner 1,2,3", "Unable to process: Dessert is missing"],
  ])("expect input of %s to give output of %s", (input, expected) => {
    const actual = takeOrder(input);

    expect(actual).toEqual(expected);
  });
});
