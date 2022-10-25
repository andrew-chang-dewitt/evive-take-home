import { Menu } from "./base";
import type { Counts } from "./base";

export class Dinner extends Menu {
  constructor() {
    super("Dinner", "Steak", "Potatoes", "Wine", "Cake");
  }

  checkCounts(counts: Counts): void {
    // each order must contain a desert
    const desert = this.items[3];
    if (!counts[desert]) this.errors.push("dessert is missing");
    // each item can only be ordered once
    const entree = this.items[0];
    const side = this.items[1];
    const drink = this.items[2];
    if (counts[entree] > 1)
      this.errors.push(`${entree} cannot be ordered more than once`);
    if (counts[side] > 1)
      this.errors.push(`${side} cannot be ordered more than once`);
    if (counts[drink] > 1)
      this.errors.push(`${drink} cannot be ordered more than once`);
    if (counts[desert] > 1)
      this.errors.push(`${desert} cannot be ordered more than once`);

    // run parent checks
    super.checkCounts(counts);
  }

  addWaterToOrder(
    index: number,
    _: Counts,
    __: string,
    resultsArray: string[]
  ): void {
    // always add water as well
    if (index === 2) {
      resultsArray.push("Water");
    }
  }
}
