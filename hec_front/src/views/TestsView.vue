<template>
    <div class="tests">
      <Cronometro msg="Esto es un cronometro"/>
      <br>
      <Signup msg="Nuevo Usuario"/>
    </div>
  </template>
  
  <script>
    // @ is an alias to /src
    import Cronometro from '@/components/Cronometro.vue'
    import Signup from '@/components/Signup.vue'
    
    export default {
      name: 'Tests',
      components: {
        Cronometro, Signup
      }
    }
  </script>