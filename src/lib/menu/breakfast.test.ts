import { expect, describe, it } from "vitest";

import { Breakfast } from "./breakfast";

describe("Breakfast", () => {
  it('is a menu of "Eggs, Toast, & Coffee"', () => {
    const breakfast = new Breakfast();

    expect(breakfast.items).toEqual(["Eggs", "Toast", "Coffee"]);
  });

  it("allows Coffee to be ordered more than once", () => {
    const breakfast = new Breakfast();
    const actual = breakfast.add(0).add(1).add(2).add(2).add(2).placeOrder();

    expect(actual).toEqual("Eggs, Toast, Coffee(3)");
  });

  it("doesn't allow Eggs to be ordered more than once", () => {
    const breakfast = new Breakfast();
    breakfast.add(0).add(0).add(1);

    expect(() => breakfast.placeOrder()).toThrow(
      /eggs cannot be ordered more than once/i
    );
  });

  it("doesn't allow Toast to be ordered more than once", () => {
    const breakfast = new Breakfast();
    breakfast.add(0).add(1).add(1);

    expect(() => breakfast.placeOrder()).toThrow(
      /toast cannot be ordered more than once/i
    );
  });
});
