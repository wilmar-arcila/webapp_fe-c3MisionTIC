<template>
    <div id="header" class="header">
    <h1>{{ msg }}</h1>
    <div id="user_group" class="user_group">
        <div id="user_image" class="user_image">
            <img alt="User Avatar" src="../assets/default_user.png">
        </div>
        <div id="login_group" class="login_group">
            <router-link to="/login">Login</router-link>
            <br>
            <router-link to="/signup">Signup</router-link>
        </div>
    </div>
    </div>
</template>

<script>    
    export default {
        name: 'CustomHeader',
        props: {msg: String}
    }
</script>

<style scoped>
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
.user_group {
    display: inline-flex;
    justify-content: left;
    align-items: left;
    align-content: center;
}
.login_group {
    margin: 2vh;
    align-items: center;
}
</style>>