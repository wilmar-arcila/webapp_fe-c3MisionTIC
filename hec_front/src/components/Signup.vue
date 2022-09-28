<template>
  <div class="signup-container">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="signup">
      <form v-on:submit.prevent="processSignup">
        <fieldset>
          <legend> <h2>User Information</h2> </legend>
          <label>First name: </label><input type="text" placeholder="Nerón" v-model="user.first_name">
          <br />
          <label>Last name: </label><input type="text" placeholder="Navarrete" v-model="user.last_name">
          <br />
          <label>email: </label><input type="text" placeholder="username@domain.com" v-model="user.email">
          <br />
          <label>Cell Phone Number: </label><input type="text" placeholder="0000000000" v-model="user.cellphone">
          <br />
          <label>Password: </label><input type="password" placeholder="Password" v-model="user.password" v-on:change="checkPassword">
          <br />
          <label>Retype Password: </label><input type="password" placeholder="Password" v-model="password2" v-on:input="checkPassword1" ref="sel-pwd2" disabled>
          <label>{{msg1}}</label>
          <br />
        </fieldset>
        <fieldset>
          <legend><h2>User Location</h2></legend>
          <select id="Region" v-model="region" v-on:change="regionChangedEvent" ref="sel-region" enabled>
            <option enabled value="">Select Region</option>
            <option v-for="reg in regions" v-bind:key="reg.region">{{ reg.region }}</option>
          </select>
          <br />
          <select id="Country" v-model="user.country" v-on:change="countryChangedEvent" ref="sel-country" disabled>
            <option disabled value="">Select Country</option>
            <option v-for="c in countries" v-bind:key="c.country">{{ c.text }}</option>
          </select>
          <br />
          <select id="State" v-model="user.state" v-on:change="stateChangedEvent" ref="sel-state" disabled>
            <option disabled value="">Select State</option>
            <option v-for="st in states" v-bind:key="st.departamento">{{ st.departamento }}</option>
          </select>
          <br />
          <select id="Town" v-model="user.town" v-on:change="townChangedEvent" ref="sel-town" disabled>
            <option disabled value="">Select Town</option>
            <option v-for="twn in towns" v-bind:key="twn.municipio">{{ twn.municipio }}</option>
          </select>
        </fieldset>
        <br />
        <button type="submit" ref="submit" disabled>Submit</button>
      </form>
      <hr>
      <p>
        {{msg2}}
      </p>      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

function disableElements(level, refs){
  switch(level){
    case "pwd":
      refs['sel-pwd2'].disabled=true;
    case "pwd2":
      refs['sel-region'].disabled=true;
    case "region":
      refs['sel-country'].disabled=true;
    case "country":
      refs['sel-state'].disabled=true;
    case "state":
      refs['sel-town'].disabled=true;
      refs['submit'].disabled=true;
  }
}
function enableElements(level, refs, data){
  switch(level){
    case "pwd2":
      refs['sel-region'].disabled=false;
      if(data.region.length == 0){break}          
    case "region":
      refs['sel-country'].disabled=false
      if(data.user.country.length == 0){break}
    case "country":
      refs['sel-state'].disabled=false
      if(data.user.state.length == 0){break}
    case "state":
      refs['sel-town'].disabled=false;
      if(data.user.town.length == 0){break}
      refs['submit'].disabled=false;
  }
}
function validateUserData(data){
  let result={pass:true,msgs:[]};
  let includeEstrict=/[^A-Z,Ñ]/g;
  const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if( (data.first_name.length == 0) || (data.first_name.search(includeEstrict) != -1) ){
    result.msgs.push("The First Name is empty or contains forbidden characters");
    result.pass=false;
  }
  includeEstrict=/[^A-Z,Ñ, ,-]/g;
  if( (data.last_name.length == 0) || (data.last_name.search(includeEstrict) != -1) ){
    result.msgs.push("The Last Name is empty or contains forbidden characters");
    result.pass=false;
  }
  if(!email_re.test(String(data.email))){
    result.msgs.push("The e-mail is not valid");
    result.pass=false;
  }
  if( (data.cellphone.length < 10) || (!/^\d+$/.test(data.cellphone)) ){
    result.msgs.push("The Cell Phone number is not valid");
    result.pass=false;
  }
  return result;
}

export default {
  name: 'Signup',
  props: {msg: String},
  data: function(){
    return{
      user: {
              first_name: "",
              last_name: "",
              email: "",
              cellphone: "",
              password: "",
              country: "",
              state: "",
              town: ""
      },
      password2:"",
      msg1:"",
      msg2: "",
      region: "",
      regions: [
                  {region: "Northern Africa"},
                  {region: "Eastern Africa"},
                  {region: "Western Africa"},
                  {region: "Middle Africa"},
                  {region: "Southern Africa"},
                  {region: "Caribbean"},
                  {region: "North America"},
                  {region: "Central America"},
                  {region: "South America"},
                  {region: "Eastern Asia"},
                  {region: "Western Asia"},
                  {region: "Central Asia"},
                  {region: "Southern Asia"},
                  {region: "South-Eastern Asia"},
                  {region: "Northern Europe"},
                  {region: "Eastern Europe"},
                  {region: "Western Europe"},
                  {region: "Central Europe"},
                  {region: "Southern Europe"},
                  {region: "Southeast Europe"},
                  {region: "Micronesia"},
                  {region: "Melanesia"},
                  {region: "Polynesia"},
                  {region: "Australia and New Zealand"}
                ],
      countries: [],
      states: [],
      towns: [],
      endpoint_countries: "",
      endpoint_states: "",
      endpoint_towns: ""
    }
  },
  methods: {
    checkPassword: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> checkPassword: ${this.user.password}`);
      this.password2="";
      if(this.user.password.length == 0){
        disableElements("pwd", this.$refs);
      }
      else{
        this.$refs["sel-pwd2"].disabled=false;
        disableElements("pwd2", this.$refs);
      }
    },
    checkPassword1: function(){
      if(this.password2.length != 0){
        if(this.user.password===this.password2){
          this.$refs['sel-pwd2'].disabled=true;
          this.msg1 = "";
          enableElements("pwd2", this.$refs, this.$data);
        }
        else{
          this.msg1 = "The passwords must match";
          disableElements("pwd2", this.$refs);
        }
      }
      else{
        this.msg1 = "";
      }
    },
    regionChangedEvent: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> regionChangedEvent: ${this.region}`);
      this.endpoint_countries = `https://restcountries.com/v3.1/subregion/`+encodeURIComponent(this.region)+`?fields=cca3,name,flag`;
      console.debug(`[DBG]: SIGNUP COMPONENT -> endpoint_countries: ${this.endpoint_countries}`);
      this.countries=[];
      this.states=[];
      this.towns=[];
      this.user.country="";
      this.user.state="";
      this.user.town="";
      disableElements("region", this.$refs);
      axios.get(
        this.endpoint_countries,
        {headers:{}}
      ).then((result)=>{
        result.data.forEach((res)=>{
          this.countries.push({country:res.name.common, text:`${res.cca3} ${res.flag}`});
        })
        this.$refs['sel-country'].disabled=false;
      }).catch((error)=>{
        console.error(error);
      })
    },
    countryChangedEvent: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> countryChangedEvent: ${this.user.country}`);
      this.endpoint_states="https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento&$order=departamento"; //Actualizar los estados para los otros países
      this.states=[];
      this.towns=[];
      this.user.state="";
      disableElements("country", this.$refs);
      axios.get(
        this.endpoint_states,
        {headers:{}}
      ).then((result)=>{
        this.states = result.data;
        this.$refs['sel-state'].disabled=false;
      }).catch((error)=>{
        console.error(error);
      })
    },
    stateChangedEvent: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> stateChangedEvent: ${this.user.state}`);
      this.endpoint_towns="https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=municipio&$where=departamento%20=%20%22"+encodeURIComponent(this.user.state)+"%22&$order=municipio";
      this.towns=[];
      this.user.town="";
      disableElements("state", this.$refs);
      axios.get(
        this.endpoint_towns,
        {headers:{}}
      ).then((result)=>{
        this.towns = result.data;
        this.$refs['sel-town'].disabled=false;
      }).catch((error)=>{
        console.error(error);
      })
    },
    townChangedEvent: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> townChangedEvent: ${this.user.town}`);
      this.$refs['submit'].disabled=false;
    },
    processSignup: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> processSignup`);
      console.info(`[INFO]: SIGNUP COMPONENT
      New User: {${this.user.first_name},\n\t${this.user.last_name},\n\t${this.user.email},
      \t${this.user.cellphone},\n\t${this.user.password},\n\t${this.user.country},
      \t${this.user.state},\n\t${this.user.town}}`)
      this.user.first_name = this.user.first_name.toUpperCase();
      this.user.last_name = this.user.last_name.toUpperCase();
      this.user.email = this.user.email.toLowerCase();
      let result = validateUserData(this.$data.user);
      if(result.pass){
        console.debug(`[DBG]: -> processSignup OK`);
        this.msg2 = "Welcome to HEIMDALL";
      }
      else{
        this.msg2 = result.msgs;
        console.error(result.msgs);
      }
    }
  },
  created: function(){
    console.info(`[INFO]: SIGNUP COMPONENT loaded`);
  }
}
</script>