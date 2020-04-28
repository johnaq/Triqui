<template>
  <div>
    <div class="text-center">
      <h3 id="turnText">Turno de :{{this.juego.turnoActual}}</h3>
    </div>
    <div class="tablero" style="margin-top:20px">
      <button id="00" @click="onClick($event)">{{btnText["00"]}}</button>
      <button id="01" @click="onClick($event)">{{btnText["01"]}}</button>
      <button id="02" @click="onClick($event)">{{btnText["02"]}}</button>
      <button id="10" @click="onClick($event)">{{btnText["10"]}}</button>
      <button id="11" @click="onClick($event)">{{btnText["11"]}}</button>
      <button id="12" @click="onClick($event)">{{btnText["12"]}}</button>
      <button id="20" @click="onClick($event)">{{btnText["20"]}}</button>
      <button id="21" @click="onClick($event)">{{btnText["21"]}}</button>
      <button id="22" @click="onClick($event)">{{btnText["22"]}}</button>
    </div>
  </div>
</template>

<script>
import Jugador from "../Jugador";
import Juego from "../Juego";
const juego = new Juego();
juego.jugadores.push(new Jugador("X"));
juego.jugadores.push(new Jugador("O"));
export default {
  name: "Tablero",
  data() {
    return {
      juego: juego,
      buttons: [],
      btnText: []
    };
  },
  methods: {
    onClick($event) {
      let btn = $event.target;
      //validar si fue seleccionado
      if (this.btnText[btn.id.toString()].length > 0) {
        alert("Error, ya fue seleccionado");
        return;
      }
      //llenar casilla
      this.btnText[btn.id] = this.juego.turnoActual;
      this.juego.cambiarTurno();
      //validar ganador
      setTimeout(() => {
        if (this.juego.ganador(btn) == true) {
          this.resetear();
        }
      }, 100);
    },
    resetear() {
      //resetear juego al terminar
      this.juego.resetear();
      [...this.buttons].forEach(btn => {
        this.btnText[btn.id] = "";
      });
    }
  },
  mounted() {
    //cargar tablero
    this.$nextTick(() => {
      this.buttons = this.$el.querySelectorAll(".tablero button");
      this.resetear();
    });
  }
};
</script>

<style scoped>
.tablero button {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  display: inline-block;
  font-size: 30px;
  color: #000;
}
.tablero {
  margin: 0 auto;
  max-width: 300px;
  display: grid;
  justify-items: center;
  align-content: space-around;
  grid-template-columns: repeat(3, 1fr);
}
.replay {
  border: 1px solid #ddd;
  height: 60px;
  margin-top: 20px;
  padding: 10px;
}
</style>