                        // ########## MARATON 01 ##########

                        // ********** Ejercicio 01 **********
// Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
// let nombre = prompt("¿Cómo te llamás?");
// alert("Hola " + nombre + "!" );
// alert(nombre.toUpperCase());
// alert(nombre.toLowerCase());



// ********** Ejercicio 02 **********
//  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
// let numA = parseInt(prompt("Ingrese un número:"));
// let numB = parseInt(prompt("Ingrese otro número:"));
// alert("La suma de ambos números es: " + (numA + numB));
// let saver;
// if (numA > numB) {
//     saver = numA;
//     alert("La resta entre el primer número y el segundo es: " + (saver - numB));
// } else {
//     alert("La resta entre el segundo número y el primero es: " + (numB - numA));
// }




// ********** Ejercicio 03 **********
// Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.
// let texto = prompt("Ingrese un texto:");
// let choice = parseInt(prompt("¿Dónde desea ver el texto? Opción '1': por consola u Opción '2': en pantalla."));
// if (choice === 1) {
//     console.log(texto.toUpperCase());
// } else if (choice === 2) {
//     alert(texto.toUpperCase());
// } else {
//     alert("La opción ingresada no es válida");
// }





// ********** Ejercicio 04 **********
//  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
// let numA = parseInt(prompt("Ingrese un número:"));
// let numB = parseInt(prompt("Ingrese otro número:"));
// let operacion = parseInt(prompt("Ingrese la operación que desea ejecutar entre esos los números. Puede elegir entre:" + "\n" + "1. SUMA" + "\n" + "2. RESTA" + "\n" + "3. MULTIPLICACION" + "\n" + "4. DIVISION" + "\n" + "5. POTENCIA")); 
// switch(operacion) {
//     case 1:
//         alert("El resultado es: " + (numA + numB));
//         break;
//     case 2:
//         alert("El resultado es: " + (numA - numB));
//         break;
//     case 3:
//         alert("El resultado es: " + (numA * numB));
//         break;
//     case 4:
//         alert("El resultado es: " + (numA / numB));
//         break;
//     case 5:
//         let saver = 1;
//         for (i=0; i<numB; i++) {
//             saver = saver * numA;                       
//         }
//         alert(saver);
//         break;
//     default: 
//         alert("El dato ingresado no es válido");
//         break;
// }


// ********** Ejercicio 05 **********
//  Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
// Extra: investigar/googlear la función de Javascript "confirm"

// let numA = parseInt(prompt("Ingrese un número:"));
// let numB = parseInt(prompt("Ingrese otro número:"));
// let operacion = parseInt(prompt("Ingrese la operación que desea ejecutar entre esos los números. Puede elegir entre:" + "\n" + "1. SUMA" + "\n" + "2. RESTA" + "\n" + "3. MULTIPLICACION" + "\n" + "4. DIVISION" + "\n" + "5. POTENCIA")); 
// switch(operacion) {
//     case 1:
//         alert("El resultado es: " + (numA + numB));
//         break;
//     case 2:
//         alert("El resultado es: " + (numA - numB));
//         break;
//     case 3:
//         alert("El resultado es: " + (numA * numB));
//         break;
//     case 4:
//         alert("El resultado es: " + (numA / numB));
//         break;
//     case 5:
//         let saver = 1;
//         for (i=0; i<numB; i++) {
//             saver = saver * numA;                       
//         }
//         alert(saver);
//         break;
//     default: 
//         alert("El dato ingresado no es válido");
//         break;
// }

// let consulta = confirm("Desea hacer otra/s operación/es?");
// while (consulta) {
//     numA = parseInt(prompt("Ingrese un número:"));
//     numB = parseInt(prompt("Ingrese otro número:"));
//     operacion = parseInt(prompt("Ingrese la operación que desea ejecutar entre esos los números. Puede elegir   entre:" + "\n" + "1. SUMA" + "\n" + "2. RESTA" + "\n" + "3. MULTIPLICACION" + "\n" + "4. DIVISION" + "\n" + "5.   POTENCIA")); 
//     switch(operacion) {
//         case 1:
//             alert("El resultado es: " + (numA + numB));
//             break;
//         case 2:
//             alert("El resultado es: " + (numA - numB));
//             break;
//         case 3:
//             alert("El resultado es: " + (numA * numB));
//             break;
//         case 4:
//             alert("El resultado es: " + (numA / numB));
//             break;
//         case 5:
//             let saver = 1;
//             for (i=0; i<numB; i++) {
//                 saver = saver * numA;                       
//             }
//             alert(saver);
//             break;
//         default: 
//             alert("El dato ingresado no es válido");
//             break;
//     }
//     consulta = confirm("Desea hacer otra/s operación/es?");
// }

// @@@@@@@@@@ PARA REVEER CUANDO MANEJE FUNCIONES!!! @@@@@@@@@@


// ********** Ejercicio 06 **********
//  Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. 

// let lista = [];
// let flag = true;
// let nombre = "";
// while (flag) { 
//     nombre = prompt("Ingrese el nombre de el/la alumno/a para agregarlo/a a la lista." + "\n" + "Presione 'SALIR' para finalizar.");
//     if (nombre !== "SALIR") {
//         lista.push(nombre);
//     } else {
//         flag = false;
//     }    
// }
// alert("Los alumnos y alumnas son: " + lista);





// ********** Ejercicio 07 **********
//  Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia",”homero”];




// ********** Ejercicio 08 **********
//  Para una veterianaria. (Descomentar el codigo) dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
// const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];





// ********** Ejercicio 09 **********
//  Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 
// const ej9restaurant = [25,17,18,44,12,9,36,50]






// ********** Ejercicio 10 **********
// De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//     - Agregar el código de paciente adelante en la cola (array) de turnos
//   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//     - Agregar el código de paciente al final de la cola (array) de turnos
//   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//     - Agregar el código de paciente al final de la cola (array) de turnos
    
//   - Si todos los pacientes fueron ingresados, informar en pantalla:
//     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
  
//   - Nota: Escribir código con funciones para facilitar su lectura.

