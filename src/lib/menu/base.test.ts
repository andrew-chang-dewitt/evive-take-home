import { expect, describe, it } from "vitest";

import { Menu } from "./base";

describe("Menu", () => {
  it("a Menu has a name", () => {
    const menu = new Menu("A Name", "Entree", "Side", "Drink");

    expect(menu.name).toEqual("A Name");
  });

  describe("placeOrder()", () => {
    it("returns the items ordered", () => {
      // Main Side Drink
      // 1: Entree 2: Side 3: Drink
      const menu = new Menu("Name", "Entree", "Side", "Drink");
      // [1,2,3],
      const actual = menu.add(0).add(1).add(2).placeOrder();

      expect(actual).toEqual("Entree, Side, Drink");
    });

    it('preserves "menu order" in returned string', () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");
      const actual = menu.add(1).add(0).add(2).placeOrder();

      expect(actual).toEqual("Entree, Side, Drink");
    });

    it("includes the count of any item that is ordered more than once", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");
      const actual = menu.add(0).add(1).add(1).add(1).add(2).placeOrder();

      expect(actual).toEqual("Entree, Side(3), Drink");
    });

    it("throws if an order doesn't contain an entree", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");

      expect(() => menu.add(1).placeOrder()).toThrow(/main is missing/i);
    });

    it("throws if an order doesn't contain a side", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");

      expect(() => menu.add(0).placeOrder()).toThrow(/side is missing/i);
    });

    it("throws with both errors if two errors occurr in the same order", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");

      expect(() => menu.placeOrder()).toThrow(
        "Main is missing, side is missing"
      );
    });

    it('includes "Water" if no drink is ordered', () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");
      const actual = menu.add(0).add(1).placeOrder();

      expect(actual).toContain("Water");
    });
  });

  describe("add()", () => {
    it("adds items to order with Builder pattern", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");

      expect(menu.add(0).order).toContain(0);
      expect(menu.add(1).order).toContain(1);
      expect(menu.order).toEqual([0, 1]);
    });

    it("guards against ordering items that don't exist", () => {
      const menu = new Menu("Name", "Entree", "Side", "Drink");

      expect(() => menu.add(3)).toThrow(/item 3 does not exist/i);
    });
  });
});
