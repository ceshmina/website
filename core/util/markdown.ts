export const extractPhotoUrls = (content: string): string[] => {
  const regex = /!\[.*\]\((.*)\)/g
  const urls: string[] = []

  let match: RegExpExecArray | null
  while (match = regex.exec(content)) {
    urls.push(match[1].split(' ')[0])
  }
  return urls
}
