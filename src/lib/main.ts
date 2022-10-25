import parse from "./parser";
import getMenu from "./menu";

export default function takeOrder(order: string): string {
  const [menuName, items] = parse(order);
  const menu = getMenu(menuName);

  for (const item of items) {
    menu.add(item);
  }

  try {
    return menu.placeOrder();
  } catch (error) {
    return `Unable to process: ${error}`;
  }
}
