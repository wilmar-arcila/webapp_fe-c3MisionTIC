<template>
  <div class="login-container">
    <div class="login">
      <h2>Inicio de Sesión</h2>
      <form v-on:submit.prevent="processLoginUser">
        <input type="text" placeholder="username@domain.com" v-model="user.email">
        <br />
        <input type="password" placeholder="password" v-model="user.password">
        <br />
        <button type="submit">Enviar</button>
        <br />
        <p>
          <router-link to="/user/resetpassword">Olvidé mi contraseña</router-link> |
          <router-link to="/user/signup">Registrarme</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: function(){
    return{
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    processLoginUser: function(){
      console.debug(`[DBG]: LOGIN COMPONENT -> Sending Post Request`);
      axios.post(
        'localhost/8080/login',  // endpoint en el backend (tal vez sea necesario incluir 'http://' al inicio si se presenta un problema con 'cors')
        this.user,                      // objeto JSON que contiene los campos requeridos para la autenticación del usuario
        {headers:{}}                    // headers vacíos en esta petición
      )
      .then((result)=>{
        console.debug(`[DBG]: LOGIN COMPONENT -> Post Request Successfull`);
        let datalogin = {
          username      : result.data.username,
          token_access  : result.data.access,
          token_refresh : result.data.refresh
        }
        this.$emit('completedLogin', datalogin)
      })
      .catch((error)=>{
        console.error(`[ERR]: LOGIN COMPONENT -> Post Request Fail`);
        let datalogin = {
          username      : this.user.email,
          token_access  : "token_access_qwerty",
          token_refresh : "token_refresh_12345"
        }
        this.$emit('completedLogin', datalogin)
        if(error.response.status == '401'){alert('Las credenciales son incorrectas')}
      });
    }
  },
  created: function(){
    console.info(`[INFO]: LOGIN COMPONENT loaded`);
  }  
}
</script>

<style scoped>

</style>