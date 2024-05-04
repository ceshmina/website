export class Paginator {
  n: number
  perPage: number

  constructor(n: number, perPage: number) {
    this.n = n
    this.perPage = perPage
  }

  public numPages(): number {
    return Math.ceil(this.n / this.perPage)
  }

  public minIndex(page: number): number {
    return (page - 1) * this.perPage
  }

  public maxIndex(page: number): number {
    return Math.min(this.n, page * this.perPage)
  }
}
