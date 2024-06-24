type CollectionItem = {
  readonly slug: string
}

export abstract class Collection<T extends CollectionItem, C extends Collection<T, C>> {
  protected _items: T[]

  constructor(items: T[]) {
    this._items = items
  }

  protected abstract create(items: T[]): C

  sort(reverse: boolean = true): C {
    const sorted = reverse ?
      [...this._items].sort((a, b) => a.slug.localeCompare(b.slug)) :
      [...this._items].sort((a, b) => b.slug.localeCompare(a.slug))
    return this.create(sorted)
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
