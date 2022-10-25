import { expect, describe, it } from "vitest";

import { Dinner } from "./dinner";

describe("Dinner", () => {
  it('is a menu of "Steak, Potatoes, Wine, & Cake"', () => {
    const dinner = new Dinner();

    expect(dinner.items).toEqual(["Steak", "Potatoes", "Wine", "Cake"]);
  });

  it("dessert must always be ordered", () => {
    const dinner = new Dinner().add(0).add(1).add(2);

    expect(() => dinner.placeOrder()).toThrow(/dessert is missing/i);
  });

  it("water is always included", () => {
    const dinner = new Dinner().add(0).add(1).add(2).add(3);
    const actual = dinner.placeOrder();

    expect(actual).toEqual("Steak, Potatoes, Wine, Water, Cake");
  });

  it.each([
    ["Steak", 0],
    ["Potatoes", 1],
    ["Wine", 2],
    ["Cake", 3],
  ])(
    "doesn't allow %s to be ordered more than once",
    (itemName: string, itemNum: number) => {
      const dinner = new Dinner().add(0).add(1).add(2).add(3).add(itemNum);

      expect(() => dinner.placeOrder()).toThrow(
        `${itemName} cannot be ordered more than once`
      );
    }
  );
});
