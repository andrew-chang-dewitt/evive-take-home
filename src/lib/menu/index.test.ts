import { expect, describe, it } from "vitest";

import getMenu, { MenuName } from "./";

describe("getMenu()", () => {
  it.each([["Breakfast"], ["Lunch"], ["Dinner"]])(
    "returns an instance of %s when given %s",
    (menuName: string) => {
      const menu = getMenu(menuName as MenuName);

      expect(menu.name).toEqual(menuName);
    }
  );
});
