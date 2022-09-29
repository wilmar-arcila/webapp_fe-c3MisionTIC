<template>
    <div class="tests-container">
      <Cronometro msg="Esto es un cronometro"/>
      <br>
      
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import Cronometro from '@/components/Cronometro.vue'
  
  export default {
    name: 'Tests',
    components: {
      Cronometro
    }
  }
</script>