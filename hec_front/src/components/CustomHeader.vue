<template>
    <div id="header" class="header">
    <h1>{{ msg }}</h1>
    <div id="user_group" class="user_group">
        <div id="user_image" class="user_image">
            <img alt="User Avatar" src="../assets/default_user.png">
        </div>
        <div id="login_group" class="login_group">
            <nav>
                <router-link to="/login">Login</router-link>
                <br>
                <router-link to="/signup">Signup</router-link>
            </nav>
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