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
      <a href="https://twitter.com/ceshmina" target="_blank">
        <v-btn icon variant="text" class="sns-icon"><v-icon class="test">{{ twitter }}</v-icon></v-btn>
      </a>
      <a href="https://instagram.com/ceshmina" target="_blank">
        <v-btn icon variant="text" class="sns-icon"><v-icon>{{ instagram }}</v-icon></v-btn>
      </a>
      <a href="https://github.com/ceshmina" target="_blank">
        <v-btn icon variant="text" class="sns-icon"><v-icon>{{ github }}</v-icon></v-btn>
      </a>
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

  .sns-icon
    font-size: 24px
    margin: 0 16px
    color: #213547
</style>
