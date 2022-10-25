import { expect, describe, it } from "vitest";

import { Lunch } from "./lunch";

describe("Lunch", () => {
  it('is a menu of "Sandwich, Chips, & Soda"', () => {
    const lunch = new Lunch();

    expect(lunch.items).toEqual(["Sandwich", "Chips", "Soda"]);
  });

  it("allows Chips to be ordered more than once", () => {
    const lunch = new Lunch();
    const actual = lunch.add(0).add(1).add(1).add(1).add(2).placeOrder();

    expect(actual).toEqual("Sandwich, Chips(3), Soda");
  });

  it("doesn't allow Sandwich to be ordered more than once", () => {
    const lunch = new Lunch().add(0).add(0).add(1).add(2);

    expect(() => lunch.placeOrder()).toThrow(
      /sandwich cannot be ordered more than once/i
    );
  });

  it("doesn't allow Soda to be ordered more than once", () => {
    const lunch = new Lunch().add(0).add(1).add(2).add(2).add(2);

    expect(() => lunch.placeOrder()).toThrow(
      /soda cannot be ordered more than once/i
    );
  });
});
