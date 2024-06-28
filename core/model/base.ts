export type CollectionItem = {
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
      [...this._items].sort((a, b) => b.slug.localeCompare(a.slug)) :
      [...this._items].sort((a, b) => a.slug.localeCompare(b.slug))
    return this.create(sorted)
  }

  get length(): number {
    return this._items.length
  }

  map<U>(fn: (item: T) => U): U[] {
    return this._items.map(fn)
  }

  slugs(): string[] {
    return this._items.map(i => i.slug)
  }

  slice(start: number, end: number): C {
    return this.create(this._items.slice(start, end))
  }
  
  getIndexBySlug(slug: string): number {
    return this._items.findIndex(i => i.slug === slug)
  }

  getItemByIndex(index: number): T {
    return this._items[index]
  }
}


export class Paginator<T extends CollectionItem, C extends Collection<T, C>> {
  private _collection: C
  private _perPage: number

  constructor(collection: C, perPage: number) {
    this._collection = collection
    this._perPage = perPage
  }

  get perPage(): number {
    return this._perPage
  }

  get length(): number {
    return this._collection.length
  }

  numPages(): number {
    return Math.ceil(this._collection.length / this._perPage)
  }

  minIndex(page: number): number {
    return (page - 1) * this._perPage
  }

  maxIndex(page: number): number {
    return Math.min(page * this._perPage, this._collection.length)
  }

  sliceByPage(page: number): C {
    const start = (page - 1) * this._perPage
    const end = start + this._perPage
    return this._collection.slice(start, end)
  }
}
