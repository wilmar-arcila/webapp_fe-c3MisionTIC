<template>
  <div class="login-form">
    <h2>{{msg}}</h2>
    <form v-on:submit.prevent="processLoginUser">
      <input type="text" placeholder="username@domain.com" v-model="user.email" @click="clearError">
      <br />
      <input type="password" placeholder="password" v-model="user.password" @click="clearError">
      <br />
      <button type="submit">Enviar</button>
      <br />
      <p v-if="error" class="error">El Usuario y/o Contraseña son incorrectos</p>
      <br />
      <p>
        <router-link to="/resetpwd">Olvidé mi contraseña</router-link> |
        <router-link to="/signup">Registrarme</router-link>
      </p>
    </form>
    <button v-on:click="test">TEST</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  props:{msg: String, server: String},
  data: function(){return{
      user: {
        email: "",
        password: ""
      },
      error: false
  }},
  methods: {
    test: function(){
      let datalogin = {
          username      : this.user.email,
          token_access  : "token_access_qwerty",
          token_refresh : "token_refresh_12345"
        }
      this.$emit('completedLogIn', datalogin);
    },
    clearError: function(){this.error=false;},
    processLoginUser: function(){
      console.debug(`[DBG]: LOGIN COMPONENT -> Sending Post Request to ${this.$props.server}`);
      axios.post(
        this.server,  // endpoint en el backend (tal vez sea necesario incluir 'http://' al inicio si se presenta un problema con 'cors')
        this.user,    // objeto JSON que contiene los campos requeridos para la autenticación del usuario
        {headers:{}}  // headers vacíos en esta petición
      )
      .then((result)=>{
        console.debug(`[DBG]: LOGIN COMPONENT -> Post Request Successfull`);
        let datalogin = {
          username      : result.data.username,
          token_access  : result.data.access,
          token_refresh : result.data.refresh
        }
        this.$emit('completedLogIn', datalogin);
      })
      .catch((error)=>{
        console.error(`[ERR]: LOGIN COMPONENT -> Post Request Fail [${error.response.status}]`);
        if(error.response.status == '401'){this.error=true;}
        else{alert("Server not responding");}
      });
    }
  },
  created: function(){
    console.info(`[INFO]: LOGIN COMPONENT loaded`);
  }  
}
</script>

<style scoped>
.error {
  color: darkred;
}
</style>