export type Counts = {
  [index: string]: number;
};

export class Menu {
  name: string;
  items: string[];
  order: number[];
  errors: string[];

  constructor(name: string, ...items: string[]) {
    // assign the given name
    this.name = name;
    // build the menu out of the given items
    this.items = items;
    // start the menu with an empty order
    this.order = [];
    // start order with no errors
    this.errors = [];
  }

  add(item: number): Menu {
    // guard against adding items that don't exist on the menu
    if (item >= this.items.length) throw `Item ${item} does not exist`;
    this.order.push(item);

    return this;
  }

  countOrder(): Counts {
    // count the number of each item in the order array
    // store counts in map hashed by the item's name
    return this.order.reduce((counts: Counts, num) => {
      const item = this.items[num];

      if (counts[item]) counts[item]++;
      else counts[item] = 1;

      return counts;
    }, {});
  }

  checkCounts(counts: Counts): void {
    const entree = counts[this.items[0]];
    const side = counts[this.items[1]];
    // each order must contain an entree (item 0)
    if (!entree) this.errors.push("main is missing");
    // each order must contain a side (item 1)
    if (!side) this.errors.push("side is missing");

    // if there's any errors, parse them & throw
    if (this.errors.length > 0) {
      // join errors, if there's multiple
      const message = this.errors.join(", ");
      // capitalize the first character
      const firstChar = message.charAt(0);
      const capitalizedChar = firstChar.toUpperCase();
      // get the remaining characters
      const remainingMessage = message.slice(1);

      // throw messages with the first letter capitalized
      throw capitalizedChar + remainingMessage;
    }
  }

  itemCountToString(
    counts: Counts,
    item: string,
    resultsArray: string[]
  ): void {
    if (counts[item]) {
      // if it's been ordered more than once, include the count
      resultsArray.push(counts[item] > 1 ? `${item}(${counts[item]})` : item);
    }
  }

  addWaterToOrder(
    index: number,
    counts: Counts,
    item: string,
    resultsArray: string[]
  ): void {
    // if a drink hasn't been ordered, include water instead
    if (index === 2 && !counts[item]) {
      resultsArray.push("Water");
    }
  }

  countsToStrings(counts: Counts): string[] {
    // check if any of each menu item has been ordered
    // reduces menu items instead of the keys of countedObj
    // to preserve menu order
    return this.items.reduce((result: string[], item, index) => {
      // if the item has been ordered, include it in the result
      this.itemCountToString(counts, item, result);
      // add water as needed
      this.addWaterToOrder(index, counts, item, result);

      return result;
    }, []);
  }

  placeOrder(): string {
    let countedObj = this.countOrder();

    // run checks on order counts before proceeding
    this.checkCounts(countedObj);

    // convert counts to array of strings
    let countedArr = this.countsToStrings(countedObj);

    // finally, join each counted item string with a comma & space
    // to create one string to return
    return countedArr.join(", ");
  }
}
