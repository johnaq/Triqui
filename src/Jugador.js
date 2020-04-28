class Jugador {
    constructor(valor) {
      this.valor = valor;
      this.clicks = [];
      this.combinaciones = [];
      this.posicion = []
    }
    setPosition() {
      this.posicion = this.clicks.join(",").split(",");
    }
    sortClicks() {
      this.clicks.sort();
    }
  
  }
  export default Jugador;