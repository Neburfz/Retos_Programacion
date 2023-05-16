/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
//Parametro 1 es longitud
//Parametro 2 es con o sin numeros
//Paranetro 3 es con o sin simbolos
console.log(generarPassword(8, false, false));

function generarPassword(param1, param2, param3) {
  const letras = 'ABCDEFGHIJKLMNÑOPKRSTUVWXYZ';
  const numeros = '1234567890';
  const simbolos = '!#$%&*+-:<=>?@_|~';
  var password = '';

  for (var i = 0; i < param1; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    var randomSim = Math.floor(Math.random() * 17);
    var randomLet = Math.floor(Math.random() * 27);

    if (param2 == true && param3 == true) {
      var randomRand = Math.floor(Math.random() * 3);
    } else {
      var randomRand = Math.floor(Math.random() * 2);
    }

    if (param2 == true) {
      if (param3 == true) {
        if (randomRand == 0) {
          password += letras[randomLet];
        }
        if (randomRand == 1) {
          password += numeros[randomNum];
        }
        if (randomRand == 2) {
          password += simbolos[randomSim];
        }
      } else {
        if (randomRand == 0) {
          password += letras[randomLet];
        }
        if (randomRand == 1) {
          password += numeros[randomNum];
        }
      }
    } else if (param3 == true) {
      if (randomRand == 0) {
        password += letras[randomLet];
      }
      if (randomRand == 1) {
        password += simbolos[randomSim];
      }
    } else {
      password += letras[randomLet];
    }
  }
  return password;
}
