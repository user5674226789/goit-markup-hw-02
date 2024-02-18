class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Apple", "Banana", "Orange"]);
console.log(storage.getItems()); // ["Apple", "Banana", "Orange"]

storage.addItem("Mango");
console.log(storage.getItems()); // ["Apple", "Banana", "Orange", "Mango"]

storage.removeItem("Banana");
console.log(storage.getItems()); // ["Apple", "Orange", "Mango"]
