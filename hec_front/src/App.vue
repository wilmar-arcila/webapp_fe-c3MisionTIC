<template>
  <div id="app" class="app">
    <CustomHeader msg="HOSPITALIZACIÓN EN CASA" :routes="[{name:'Login',link:'/login'},{name:'Signup',link:'/signup'}]" />  
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/tests">Tests</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue">Vue Info</router-link>
    </nav>
    <div class="views">
      <router-view/>
    </div>    
    <CustomFooter/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CustomHeader from '@/components/CustomHeader.vue'
  import CustomFooter from '@/components/CustomFooter.vue'

  export default {
    name: 'App',
    components: { CustomHeader, CustomFooter, CustomFooter },
    data: function(){return{}},
    methods:{},
    created: function(){}
  }
</script>

<!-- Definición de estilo para ETIQUETAS -> etiqueta -->
<!-- Definición de estilo para CLASES    -> .clase   -->
<!-- Definición de estilo para IDs       -> #id      -->
<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');
  
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    align-content: space-between;
    justify-content: center;
    justify-items: stretch;
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

  .views {
    min-height:55vh;
  }
</style>
