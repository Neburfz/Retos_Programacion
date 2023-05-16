/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */
 
 jugar("tijeras","piedra","piedra","tijeras","papel","papel");

 function jugar(uno,dos,tres,cuatro,cinco,seis){
  var jugada1;
  var jugada2;
  var jugada3;
  
  var jugador1=0;
  var jugador2=0;

  jugada1=comprobar(uno,dos);
  jugada2=comprobar(tres,cuatro);
  jugada3=comprobar(cinco,seis);

//Comprobar en cada jugada qué jugador es el que gana
  if(jugada1 == 1){
      jugador1++;
  }
  else if(jugada1 == 2){
      jugador2++;
  }
  else if(jugada1 == 3){
      jugador1++;
      jugador2++;
  }
  
  if(jugada2 == 1){
      jugador1++;
  }
  else if(jugada2 == 2){
      jugador2++;
  }
  else if(jugada2 == 3){
      jugador1++;
      jugador2++;
  }
  
  if(jugada3 == 1){
      jugador1++;
  }
  else if(jugada3 == 2){
      jugador2++;
  }
  else if(jugada3 == 3){
      jugador1++;
      jugador2++;
  }

//Comprobar que jugador ha ganado
  if(jugador1 > jugador2){
      console.log("Ha ganado el jugador1");
  }
  else if(jugador1 < jugador2){
      console.log("Ha ganado el jugador2");
  }
  else if(jugador1 == jugador2){
      console.log("Ha habido empate");
  }
}

//Funcion que comprueba si la piedra gana al papel o no...
function comprobar(uno,dos){
  var player = 0;
  if(uno=="piedra" && dos=="tijeras"){
    player = 1;
  }
  else if(uno=="tijeras" && dos=="piedra"){
    player = 2;
  }
  else if(uno=="tijeras" && dos=="papel"){
    player = 1;
  }
  else if(uno=="papel" && dos=="tijeras"){
    player = 2;
  }
  else if(uno=="papel" && dos=="piedra"){
    player = 1;
  }
  else if(uno=="piedra" && dos=="papel"){
    player = 2;
  }
  else if(uno == dos){
    player = 3;
  }
  return player;
}
