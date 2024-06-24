type CollectionItem = {
  readonly slug: string
}

export class Collection<T extends CollectionItem> {
  private _items: T[]

  constructor(items: T[]) {
    this._items = items
  }

  sort(reverse: boolean = true): Collection<T> {
    const sorted = reverse ?
      this._items.sort((a, b) => a.slug.localeCompare(b.slug)) :
      this._items.sort((a, b) => b.slug.localeCompare(a.slug))
    return new Collection(sorted)
  }

  get length(): number {
    return this._items.length
  }
  
  getIndexBySlug(slug: string): number {
    return this._items.findIndex(i => i.slug === slug)
  }

  getItemByIndex(index: number): T {
    return this._items[index]
  }
}
