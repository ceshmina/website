export class Collection<T> {
  private _items: T[]

  constructor(items: T[]) {
    this._items = items
  }
}
