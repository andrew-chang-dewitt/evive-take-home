import { Breakfast as BreakfastMenu } from "./breakfast";
import { Lunch as LunchMenu } from "./lunch";
import { Dinner as DinnerMenu } from "./dinner";
import type { Menu } from "./base";

export const breakfast = "Breakfast";
export type Breakfast = typeof breakfast;

export const lunch = "Lunch";
export type Lunch = typeof lunch;

export const dinner = "Dinner";
export type Dinner = typeof dinner;

export type MenuName = Breakfast | Lunch | Dinner;
type DetermineMenu<M extends MenuName> = M extends Breakfast
  ? Breakfast
  : M extends Lunch
  ? Lunch
  : Dinner;
export function isMenu(str: string): str is MenuName {
  return str === breakfast || str === lunch || str === dinner;
}
export function determineMenu<M extends MenuName>(menu: M): DetermineMenu<M> {
  return menu as unknown as DetermineMenu<M>;
}

export type OrderItem = 0 | 1 | 2 | 3;
export function isOrderItem(num: number): num is OrderItem {
  return num === 0 || num === 1 || num === 2 || num === 3;
}

export default function getMenu(name: MenuName): Menu {
  switch (name) {
    case "Breakfast":
      return new BreakfastMenu();
    case "Lunch":
      return new LunchMenu();
    case "Dinner":
      return new DinnerMenu();
    default:
      throw "Not a valid menu name.";
  }
}
