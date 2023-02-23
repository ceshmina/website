<script setup lang="ts">
import Overview from '../components/index/Overview.vue'
import Profile from '../components/index/Profile.vue'
import Works from '../components/index/Works.vue'
import Skills from '../components/index/Skills.vue'
import Contact from '../components/index/Contact.vue'
</script>

<template>
  <section class="index-overview">
    <Overview />
  </section>

  <section class="index-section">
    <Profile />
  </section>
  <section class="index-section">
    <Works />
  </section>
  <section class="index-section">
    <Skills />
  </section>
  <section class="index-section">
    <Contact />
  </section>
</template>

<style scoped lang="sass">
.index-overview
  margin: 120px 0 150px

.index-section
  margin: 120px 0 80px
</style>
