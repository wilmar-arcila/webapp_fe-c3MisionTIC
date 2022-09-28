<template>
  <div id="app" class="app">
    <CustomHeader msg="HOSPITALIZACIÓN EN CASA" />
  </div>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/tests">Tests</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vue">Vue Info</router-link>
  </nav>
  <router-view/>
</template>

<script>
  // @ is an alias to /src
  import CustomHeader from '@/components/CustomHeader.vue'

  export default {
    name: 'Home',
    components: {CustomHeader},
    data: function(){return{}},
    methods:{},
    created: function(){}
  }
</script>

<!-- Definición de estilo para ETIQUETAS -> etiqueta -->
<!-- Definición de estilo para CLASES    -> .clase   -->
<!-- Definición de estilo para IDs       -> #id      -->
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
