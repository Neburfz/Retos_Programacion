/*
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
*/
var gryffindor=0;
var slytherin=0;
var ravenclaw=0;
var hufflepuff=0;

seleccionar();

//Funcion que selecciona
function seleccionar(){
    console.log("Digamos que tiene un examen la próxima semana, ¿cómo se va a preparar?");
    var respuesta1 = prompt("1g,2s,3r,4h");
    
    console.log("Si su habitación en Hogwarts se está quemando y pudiera rescatar solo una cosa, ¿cual sería?");
    var respuesta2 = prompt("1g,2s,3r,4h");
    
    console.log("¿Cuál de estas cosas lo pone más nervioso?");
    var respuesta3 = prompt("1g,2s,3r,4h");
    
    console.log("Si le dan un pedazo de papel, ¿qué hace con él?");
    var respuesta4 = prompt("1g,2s,3r,4h");
    
//Añado valor a la variable de cada casa segun la respuesta dada.
    if(comprobar(respuesta1)=="g"){
        gryffindor++;
    }
    else if(comprobar(respuesta1)=="s"){
        slytherin++;
    }
    else if(comprobar(respuesta1)=="r"){
        ravenclaw++;
    }
    else if(comprobar(respuesta1)=="h"){
        hufflepuff++;
    }

//Compruebo que casa es la seleccionada
    if(hufflepuff > ravenclaw && hufflepuff > gryffindor && hufflepuff > slytherin){
        console.log("Eres Hufflepuff");
    }
    else if(gryffindor > ravenclaw && gryffindor > hufflepuff && gryffindor > slytherin){
        console.log("Eres Gryffindor");
    }
    else if(slytherin > ravenclaw && slytherin > hufflepuff && slytherin > gryffindor){
        console.log("Eres Slytherin");
    }
    else if(ravenclaw > gryffindor && ravenclaw > hufflepuff && ravenclaw > slytherin){
        console.log("Eres Ravenclaw");
    }
}

//Funcion que comprueba si las respuestas que das coinciden con una casa u otra
function comprobar(resp){
    var casa = "";
    if(resp == 1){
        casa = "g";
    }
    else if(resp == 2){
        casa = "s";
    }
    else if(resp == 3){
        casa = "r";
    }
    else if(resp == 4){
        casa = "h";
    }
    return casa;
}
