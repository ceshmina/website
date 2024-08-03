import { simpleGit } from 'simple-git'

const git = simpleGit()
const repoUrl = 'https://github.com/ceshmina/diary'
const targetDir = 'data/diary'
git.clone(repoUrl, targetDir)

const repoUrl2 = 'https://github.com/ceshmina/diary.apkas.net'
const targetDir2 = 'data/diary/2'
git.clone(repoUrl2, targetDir2)
