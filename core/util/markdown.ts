export const extractPhotoUrls = (content: string): string[] => {
  const regex = /!\[.*\]\((.*)\)/g
  const urls: string[] = []

  let match: RegExpExecArray | null
  while (match = regex.exec(content)) {
    urls.push(match[1].split(' ')[0])
  }
  return urls
}

export const extractTextOnly = (content: string): string => {
  const text = content
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/!\[.*\]\(.*\)/g, '')
  
  return text
}
