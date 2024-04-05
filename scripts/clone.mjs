import { simpleGit } from 'simple-git'

const git = simpleGit()
const repoUrl = 'https://github.com/ceshmina/diary'
const targetDir = 'data/diary'
git.clone(repoUrl, targetDir)
