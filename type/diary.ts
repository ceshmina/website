export type Diary = {
  slug: string
  date: Date
  content: string
}

export type GetFilesByExtension = (
  dir: string,
  ext: string
) => string[]

export type GetDiaries = () => Diary[]
