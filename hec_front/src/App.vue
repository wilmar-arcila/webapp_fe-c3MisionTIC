<template>
  <div id="app" class="app">
    <div class="header">
      <h1>HOSPITALIZACIÓN EN CASA</h1>
    </div>
  </div>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/vue">Vue Info</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'Home',
    data: function(){},
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

  
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747 ;
    color:darkgreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
