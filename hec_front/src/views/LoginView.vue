<template>
    <div class="login-container">
        <p v-if="is_auth">Welcome {{token_data.username}}</p>
        <LoginForm v-else msg="Eche pa' dentro" server="http://127.0.0.1:8000/" v-on:completedLogIn="completedLogIn" />
    </div>
</template>
  
<script>
    // @ is an alias to /src
    import LoginForm from '@/components/LoginForm.vue'

    export default {
        name: 'Login',
        data: function(){return{
            is_auth: false,
            token_data:{}
        }},
        components: {LoginForm},
        methods: {
            completedLogIn: function(data){
                this.is_auth=true;
                this.token_data = data;
                this.$emit("completedLogIn",data);
            }
        }
    }
</script>
  