import { rm } from "fs/promises"
import simpleGit from "simple-git"

const git = simpleGit()
const clone = async (url, path) => {
  await rm(path, { recursive: true, force: true })
  await git.clone(url, path)
}

const diaryRepo = 'https://github.com/ceshmina/diary'
const diaryPath = 'data/diary'
clone(diaryRepo, diaryPath)
