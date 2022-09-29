<template>
    <div class="login-container">
      <LoginForm msg="Eche pa' dentro" server="http://127.0.0.1:8000/" />
    </div>
</template>
  
<script>
    // @ is an alias to /src
    import LoginForm from '@/components/LoginForm.vue'

    export default {
        name: 'Login',
        components: {LoginForm}
    }
</script>
  