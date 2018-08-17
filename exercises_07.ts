class Map<T> {
  private items: { [key: string]: T} = {};

  setItem(key: string, item: T) {
    this.items[key] = item;
  }

  getItem(key: string) {
    return this.items[key]
  }

  clear() {
    this.items = {};
  }

  printMap() {
    return this.items;
  }
}
