import { parse, format } from 'date-fns'

export class Month {
  private _slug: string
  private _name: string

  constructor(slug: string) {
    this._slug = slug
    this._name = slug.length === 4 ?
      format(parse(slug, 'yyyy', new Date()), 'yyyy') :
      format(parse(slug, 'yyyyMM', new Date()), 'MMM yyyy')
  }

  get slug(): string { return this._slug }
  get name(): string { return this._name }
}
