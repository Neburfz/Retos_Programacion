/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */
var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

console.log(heterograma("klk"));
console.log(isograma("sa"));
pangrama("asdasd");

//Palabra que no contiene ninguna letra repetida
function heterograma(param){
 	var es = false;
  	//Expresion regular para saber si un caracter se repite
  	var expresion = /(.).*\1/;
  	
  	if(expresion.test(param)){
  	    es=true;
  	}
  	return es;
}

//Palabra en la que cada letra aparece el mismo numero de veces
function isograma(param){
	var es = false;
	
	for(var i=0;i<param.length;i++){
	    for(var j=0;j<alfabeto.length;j++){
	        if(param[i]==param[i+1]){
	            es=true;
	        }
	    }
	}
    return es;
}

function pangrama(param){
	var es = false;
  
    return es;
}
