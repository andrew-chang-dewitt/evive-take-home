import { Menu } from "./base";
import type { Counts } from "./base";

export class Breakfast extends Menu {
  constructor() {
    super("Breakfast", "Eggs", "Toast", "Coffee");
  }

  checkCounts(counts: Counts): void {
    // Only coffee may be ordered more than once
    const entree = this.items[0];
    const side = this.items[1];
    if (counts[entree] > 1)
      this.errors.push(`${entree} cannot be ordered more than once`);
    if (counts[side] > 1)
      this.errors.push(`${side} cannot be ordered more than once`);

    // run parent checks
    super.checkCounts(counts);
  }
}
