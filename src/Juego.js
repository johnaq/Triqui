class Juego {
    constructor() {
        //array con informacion de los jugadores
      this.jugadores = []
      //condiciones para ganar
      this.condiciones = [
        ["00", "01", "02"],
        ["00", "11", "22"],
        ["00", "10", "20"],
        ["02", "11", "20"],
        ["10", "11", "12"],
        ["02", "12", "22"],
        ["01", "11", "21"],
        ["20", "21", "22"]
      ];
      this.turnoActual = "X";
      this.isGameEnded = false;
      this._condiciones =
        this.condiciones.map(x => x.join(","));
    }
    cambiarTurno() {
      this.turnoActual = this.turnoActual == this.jugadores[0].valor ? this.jugadores[1].valor : this.jugadores[0].valor;
    }
    resetear() {
      this.turnoActual = this.jugadores[0].valor;
      this.jugadores.forEach(x => {
        x.clicks = [];
      })
    }
  
    ganador(btn) {
      if (btn.innerHTML == this.jugadores[0].valor) {
        this.jugadores[0].clicks.push(btn.id);
      } else {
        this.jugadores[1].clicks.push(btn.id);
      }
  
      this.jugadores.forEach(x => {
        x.sortClicks()
        x.setPosition();
      })
  
  
      if (this.jugadores[0].posicion.length > 2 || this.jugadores[1].posicion.length > 2) {
  
        let combinaciones_j1 = this.getCombinacion(this.jugadores[0].posicion, 3, 0);
        console.log(combinaciones_j1)
        let combinaciones_j2 = this.getCombinacion(this.jugadores[1].posicion, 3, 0);
        console.log(combinaciones_j2)
        let jugador1 = this._condiciones.filter(value =>
            combinaciones_j1.includes(value)
        );
        let jugador2 = this._condiciones.filter(value =>
            combinaciones_j2.includes(value)
        );
  
        return this.isGameOver(jugador1, jugador2);
      } else {
        return false;
      }
    }
    isGameOver(jugador1, jugador2) {
  
      if (jugador1.length < 1 && jugador2.length < 1)
        return false;
  
      let gameOver = false;
      if (jugador1 > jugador2) {
        gameOver = true
        alert("Gana X");
      } else if (jugador2 > jugador1) {
        gameOver = true
        alert("Gana O");
      } else if (this.jugadores[0].clicks.length > 4 || this.jugadores[1].clicks.length > 4) {
        gameOver = true
        alert("Empate");
      } else {
        gameOver = false
      }
      return gameOver;
    }
  
    getCombinacion(input, len, start) {
      const resultado = new Array(3);
      let combinaciones = new Array();
      combinar(input, len, start);
  
      function combinar(input, len, start) {
        if (len === 0) {
            combinaciones.push(resultado.join(","));
          return;
        }
        for (var i = start; i <= input.length - len; i++) {
          resultado[resultado.length - len] = input[i];
          combinar(input, len - 1, i + 1);
        }
      }
      return combinaciones;
    }
  }
  export default Juego;