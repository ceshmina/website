<script setup lang="ts">
import { mdiTwitter, mdiInstagram, mdiGithub } from '@mdi/js'

const twitter = mdiTwitter
const instagram = mdiInstagram
const github = mdiGithub
</script>

<template>
  <div class="contact">
    <h1 class="contact-title">contact</h1>
    <div class="sns-icons">
      <a href="https://twitter.com/ceshmina" target="_blank"><v-icon class="sns-icon">{{ twitter }}</v-icon></a>
      <a href="https://instagram.com/ceshmina" target="_blank"><v-icon class="sns-icon">{{ instagram }}</v-icon></a>
      <a href="https://github.com/ceshmina" target="_blank"><v-icon class="sns-icon">{{ github }}</v-icon></a>
    </div>
  </div>
</template>

<style scoped lang="sass">
.contact-title
  font-size: 24px

.contact-text
  font-size: 16px

.sns-icons
  margin: 0 auto

  a
    color: #213547

  .sns-icon
    font-size: 32px
    margin: 0 16px
</style>
