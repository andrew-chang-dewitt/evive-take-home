export const breakfast = "Breakfast"
export type Breakfast = typeof breakfast
export function isBreakfast(str: any): str is Breakfast {
  return str === breakfast
}

export const lunch = "Lunch"
export type Lunch = typeof lunch
export function isLunch(str: any): str is Lunch {
  return str === lunch
}

export const dinner = "Dinner"
export type Dinner = typeof dinner
export function isDinner(str: any): str is Dinner {
  return str === dinner
}

export type MenuName = Breakfast | Lunch | Dinner
type BreakfastOrLunch<M extends Breakfast | Lunch> =
  M extends Breakfast
  ? Breakfast
  : Lunch
type DetermineMenu<M extends MenuName> = M extends Breakfast | Lunch
  ? BreakfastOrLunch<M>
  : Dinner
export function isMenu(str: string): str is MenuName {
  return str === breakfast
    || str === lunch
    || str === dinner

}
export function determineMenu<M extends MenuName>(menu: M): DetermineMenu<M> {
  return menu as unknown as DetermineMenu<M>
}

export type OrderItem = 0 | 1 | 2 | 3
export function isOrderItem(num: number): num is OrderItem {
  return num === 0
    || num === 1
    || num === 2
    || num === 3
}
