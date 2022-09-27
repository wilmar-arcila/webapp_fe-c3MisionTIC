<template>
    <div class="cronometro">
        <h1>{{ msg }}</h1>
        <div class="tablero">
            <p id="tablero">00:00:0</p>
        </div>
        <div class="botones">
            <button @click="play_pause" id="boton_play_pause">Play</button>
            <button @click="reset" id="boton_reset">Reset</button>
        </div>     
    </div>
</template>
  
<script>
    // Estados Cronometro
    let esta_activo = false;
    let time = {decimas: 0, segundos: 0, minutos: 0}

    // Funcion para actualizar el Cronómetro
    function formato(numero){
        if(numero<10){
            return "0"+numero;
        }
        else{
            return numero;
        }
    }
    function actualizar(){
        time.decimas++;
        if(time.decimas == 10){
            time.decimas = 0;
            time.segundos++;
        }
        if(time.segundos == 60){
            time.segundos = 0;
            time.minutos++;
        }
        tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`
        if(esta_activo == true){
            setTimeout(actualizar,100);
        }
    }
    
    export default {
        name: 'Cronometro',
        props: {msg: String},
        methods:{
            play_pause(){
                if(esta_activo){
                    console.log("PAUSE");
                    esta_activo = false;
                    boton_play_pause.innerHTML="Play";
                }
                else{
                    console.log("PLAY");
                    esta_activo = true;
                    boton_play_pause.innerHTML="Pause";
                    actualizar();
                }
            },
            reset(){
                console.log("RESET");
                time.decimas  = 0;
                time.segundos = 0;
                time.minutos  = 0;
                tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`
            }
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .container{
        width: 100vw;
        height: 100vh;
        background-color: darkcyan;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cronometro {
        width: 40%;
        height: 60%;
        background-color: white;
        border: 3px solid rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .tablero{
        width: 70%;
        height: 50%;
        background-color: rgba(0, 0, 0, 0.7);
        border: 3px solid rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tablero p {
        color: white;
        font-size: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .botones{
        width: 70%;
        height: 20%;
        background-color: crimson;
        border: 3px solid rgba(0, 0, 0, 0.8);
        border-top: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .botones button{
        background-color: white;
        padding: 10px 20px;
        border: 3px solid rgba(0, 0, 0, 0.9);
        color: black;
        font-weight: bold;
        font-size: 16px;
    }
    .botones button:hover{
        background-color: white;
        color: red;
    }
</style>
  