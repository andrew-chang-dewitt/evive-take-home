import { Menu } from "./base";
import type { Counts } from "./base";

export class Lunch extends Menu {
  constructor() {
    super("Lunch", "Sandwich", "Chips", "Soda");
  }

  checkCounts(counts: Counts): void {
    // Only chips may be ordered more than once
    const entree = this.items[0];
    const drink = this.items[2];
    if (counts[entree] > 1)
      this.errors.push(`${entree} cannot be ordered more than once`);
    if (counts[drink] > 1)
      this.errors.push(`${drink} cannot be ordered more than once`);

    // run parent checks
    super.checkCounts(counts);
  }
}
