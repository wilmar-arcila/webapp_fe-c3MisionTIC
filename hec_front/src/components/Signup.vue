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
          <!-- <select id="Country" v-model="user.country" v-on:change="countryChangedEvent" ref="sel-country" disabled>
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
          </select> -->
        </fieldset>
        <br />
        <button type="submit" ref="submit" disabled>Submit</button>
      </form>
      <hr>
      <p>
        {{msg}}
      </p>      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

function disableElements(level){
  console.debug(`[DBG]: SIGNUP COMPONENT -> disableElements(${level})`);
  switch(level){
    case "pwd":
      console.debug(`pwd -> ${this.$refs['sel-pwd2']}`);
      this.$refs['sel-pwd2'].disabled=true;
    case "pwd2":
      console.debug(`pwd2 -> ${this.$refs['sel-pwd2']}`);
      this.$refs['sel-region'].disabled=true;
    case "region":
      this.$refs['sel-country'].disabled=true;
    case "country":
      this.$refs['sel-state'].disabled=true;
    case "state":
      this.$refs['sel-town'].disabled=true;
      this.$refs['submit'].disabled=true;
  }
}
function enableElements(level){
  switch(level){
    case "pwd2":
      this.$refs['sel-region'].disabled=false;
      if(this.region.length == 0){break}          
    case "region":
      this.$refs['sel-country'].disabled=false
      if(this.user.country.length == 0){break}
    case "country":
      this.$refs['sel-state'].disabled=false
      if(this.user.state.length == 0){break}
    case "state":
      this.$refs['sel-town'].disabled=false;
      if(this.user.town.length == 0){break}
      this.$refs['submit'].disabled=false;
  }
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
      msg1:"",
      password2:"",
      region: "South America",
      country: "Colombia",
      state: "Antioquia",
      town: "Marinilla",
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
      endpoint_countries: "https://restcountries.com/v3.1/subregion/"+this.region+"?fields=cca3,cca2,name,flag",
      endpoint_states: "https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento&$order=departamento",
      endpoint_towns: "https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=municipio&$where=departamento%20=%20%22"+this.state+"%22&$order=municipio"
    }
  },
  methods: {
    checkPassword: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> checkPassword: ${this.user.password}`);
      this.password2="";
      if(this.user.password.length == 0){
        disableElements("pwd");
      }
      else{
        this.$refs['sel-region'].disabled=false;
        disableElements("pwd2");
      }
    },
    checkPassword1: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> checkPassword1: ${this.user.password} ${this.password2}`);
      if(this.password2.length != 0){
        if(this.user.password===this.password2){
          this.$refs['sel-pwd2'].disabled=true;
          this.msg1 = "";
          this.enableElements("pwd2");
        }
        else{
          this.msg1 = "The passwords must match";
          this.disableElements("pwd2");
        }
      }
      else{
        this.msg1 = "";
      }
    },
    regionChangedEvent: function(){
      console.debug(`[DBG]: SIGNUP COMPONENT -> regionChangedEvent: ${this.region}`);
      this.endpoint_countries = `https://restcountries.com/v3.1/subregion/${this.region}?fields=cca3,name,flag`;
      console.debug(`[DBG]: SIGNUP COMPONENT -> regionChangedEvent: ${this.endpoint_countries}`);
      this.countries=[];
      this.states=[];
      this.towns=[];
      this.user.country="";
      this.user.state="";
      this.user.town="";
      this.disableElements("region");
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
      // this.endpoint_states=xxxxx //Actualizar los estados para los otros países
      // console.debug(`[DBG]: SIGNUP COMPONENT -> countryChangedEvent: ${this.endpoint_states}`);
      this.states=[];
      this.towns=[];
      this.user.state="";
      this.disableElements("country");
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
      this.endpoint_towns=`https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=municipio&$where=departamento='${this.user.state}'`
      console.debug(`[DBG]: SIGNUP COMPONENT -> stateChangedEvent: ${this.endpoint_towns}`);
      this.towns=[];
      this.user.town="";
      this.disableElements("state");
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
      let result = this.validateUserData();
      if(result.pass){
        this.msg = "Welcome to HEIMDALL";
      }
      else{
        this.msg = result.msgs;
      }
    },
    validateUserData: function(){
      let result={pass:true,msgs:[]};
      let includeEstrict=/[^A-Z,Ñ]/g;
      const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( (this.user.first_name.length == 0) || (this.user.first_name.search(includeEstrict) != -1) ){
        result.msgs.push("The First Name is empty or contains forbidden characters");
        result.pass=false;
      }
      includeEstrict=/[^A-Z,Ñ, ,-]/g;
      if( (this.user.last_name.length == 0) || (this.user.last_name.search(includeEstrict) != -1) ){
        result.msgs.push("The Last Name is empty or contains forbidden characters");
        result.pass=false;
      }
      if(!email_re.test(String(this.user.email))){
        result.msgs.push("The e-mail is not valid");
        result.pass=false;
      }
      if( (this.user.cellphone.length < 10) || (!/^\d+$/.test(this.user.cellphone)) ){
        result.msgs.push("The Cell Phone number is not valid");
        result.pass=false;
      }
      return result;
    }
  },
  created: function(){
    console.info(`[INFO]: SIGNUP COMPONENT loaded`);
  }
}
</script>