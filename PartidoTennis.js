/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */
var p1="0";
var p2="0";

jugar();

function jugar(){
while(p1 <= "45" || p2 <= "45"){
var jugadorRandom = Math.floor(Math.random() * 2);
  
if(p1 == "45"){
	console.log("Ha ganado el jugador 1");
  	break;
}
else if(p2 == "45"){
	console.log("Ha ganado el jugador 2");
  	break;
}
  
if(jugadorRandom == 0){
  	if(p1 == "0"){
    	p1 = "15";
    }
  	else if(p1 == "15"){
    	p1 = "30";
    }
  	else if(p1 == "30"){
    	p1 = "40";
    }
  	else if(p1 == "40"){
    	p1 = "45";
    }
}
else if(jugadorRandom == 1){
	if(p2 == "0"){
    	p2 = "15";
    }
  	else if(p2 == "15"){
    	p2 = "30";
    }
  	else if(p2 == "30"){
    	p2 = "40";
    }
  	else if(p2 == "40"){
    	p2 = "45";
    }
}

console.log(p1+"/"+p2);
}
}
