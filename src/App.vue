<script setup lang="ts">
</script>

<template>
  <router-view />

  <nav class="nav">
    <ul class="nav-list">
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/diary">diary</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
.nav-list
  display: flex
  width: 100px
  justify-content: space-between
  padding-left: 0
  margin: 0 auto 80px

  li
    list-style: none
</style>
