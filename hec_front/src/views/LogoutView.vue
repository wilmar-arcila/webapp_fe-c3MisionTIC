<template>
    <div class="logout-container">
      <h1>This is a LOGOUT page</h1>
    </div>
</template>

<script>
    function volverHome(router){
        console.debug(`[DBG]: LOGOUT -> Return to Home`);
        router.push({name: "Home"});
    }

    export default {
        name: 'Logout',
        data: function(){return{}},
        methods:{},
        created: function(){
            console.debug(`[DBG]: LOGOUT`);
            this.$emit("logout");
            setTimeout(volverHome(this.$router),500);
        }
    }

</script>