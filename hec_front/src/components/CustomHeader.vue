<template>
    <div id="header" class="header">
    <h1>{{ msg }}</h1>
    <div id="user_group" class="user_group">
        <div id="user_image" class="user_image">
            <i alt="User avatar" class="fa-solid fa-user fa-5x"></i>
        </div>
        <div id="login_group" class="login_group">
            <nav>
                <router-link to={{routes[0].link}}>{{routes[0].name}}</router-link>
                <br>
                <router-link to={{routes[0].link}}>{{routes[1].name}}</router-link>
            </nav>
        </div>
    </div>
    </div>
</template>

<script>    
    export default {
        name: 'CustomHeader',
        props: {
                msg: {type: String, required:true, default: "MiEmpresa"},
                routes: {type: Array, required: false, default: [{name:'Login',link:'/login'},{name:'Signup',link:'/signup'}]}
        }
    }
</script>

<style scoped>
.header {
    min-height: 100px;
    height: 10vh;
    width: 100%;
    padding: 2vh;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
    background-color: #28374793 ;
    color:rgb(71, 73, 71);
}
.user_group {
    display: flex;
    justify-content: right;
    align-items: center;
}
.login_group {
    margin: 2vh;
}
</style>>