import { simpleGit } from 'simple-git'
import { copy } from 'fs-extra'

const git = simpleGit()
const repoUrl = 'https://github.com/ceshmina/diary'
const targetDir = 'data/diary'
await git.clone(repoUrl, targetDir)

const repoUrl2 = 'https://github.com/ceshmina/diary.apkas.net'
const targetDir2 = 'data/diary2'
await git.clone(repoUrl2, targetDir2)

copy('data/diary2/_articles', 'data/diary/_articles')
