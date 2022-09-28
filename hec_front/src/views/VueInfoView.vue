<template>
  <div class="vue">
    <img alt="Vue logo" src="../assets/logo.png">
    <Info msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from '@/components/Info.vue'

export default {
  name: 'Vue',
  components: {
    Info
  }
}
</script>
