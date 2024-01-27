/**
 * necesito un algoritmo para todos estos casos

caso 1 
cadena1 = "abcabcabc"
cadena2= "abcabc"

resultado subcadena que se repite "abc"

caso 2 
cadena1 = "abababab"
cadena2= "abab"

resultado subcadena que se repite "ab"

caso 3 
cadena1 = "hola"
cadena2= "chao"

resultado subcadena que se repite ""

caso 3 
cadena1 = "abcabc"
cadena2= "abc"

resultado subcadena que se repite "abc"

 * @param {*} cadena 
 * @param {*} subcadena 
 * @returns 
 */

function encontrarSubcadenaRepetida(cadena1, cadena2) {
    var subcadenaRepetida = "";
    console.log(Math.min(cadena1.length, cadena2.length));
    // Itera sobre la longitud de la cadena más corta
    for (var i = 0; i < Math.min(cadena1.length, cadena2.length); i++) {
        // Comprueba si los prefijos de ambas cadenas son iguales
        if (cadena1[i] === cadena2[i]) {
            subcadenaRepetida += cadena1[i];
        } else {
            break; // Si no son iguales, se detiene la iteración
        }
    }

    return subcadenaRepetida;
}

// Caso 1
var cadena1_1 = "abcabcabc";
var cadena2_1 = "abcabc";
console.log(`Caso 1: cadena1: ${cadena1_1} cadena2: ${cadena2_1} se repite `+ encontrarSubcadenaRepetida(cadena1_1, cadena2_1)); // Salida: "abc"

// Caso 2
var cadena1_2 = "ababab";
var cadena2_2 = "abab";
console.log(`Caso 2: cadena1: ${cadena1_2} cadena2: ${cadena2_2} se repite ` + encontrarSubcadenaRepetida(cadena1_2, cadena2_2)); // Salida: "ab"

// Caso 3
var cadena1_3 = "hola";
var cadena2_3 = "chao";
console.log(`Caso 3: cadena1: ${cadena1_3} cadena2: ${cadena2_3} se repite ` +  encontrarSubcadenaRepetida(cadena1_3, cadena2_3)); // Salida: ""

// Caso 4
var cadena1_4 = "abcabc";
var cadena2_4 = "abc";
console.log(`Caso 4: cadena1: ${cadena1_4} cadena2: ${cadena2_4} se repite ` +  encontrarSubcadenaRepetida(cadena1_4, cadena2_4)); // Salida: "abc"
