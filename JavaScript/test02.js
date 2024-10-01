// Importar las funciones de 2-estructurasDeControl.js
import {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
} from './2-estructurasDeControl.js'; 
//Pruebas de las funciones 
// Par o no 
console.log('verificarParidad'); 
verificarParidad(2);
verificarParidad(5);

// Mayor o no
console.log('clasificarEdad');
clasificarEdad(14);
clasificarEdad(18);
clasificarEdad(45);
clasificarEdad(66); 

// Cuenta regresiva
console.log('cuentaRegresiva');
cuentaRegresiva(10);
cuentaRegresiva(6);

// Repetir mensajes
console.log('repetirMensaje');
repetirMensaje();

// imprimirPares
console.log('imprimirPares');
imprimirPares(10);

// detenerEnSeis
console.log('detenerEnSeis');
detenerEnSeis();

// saltarCinco
console.log('saltarCinco');
saltarCinco();

// obtenerDiaSemana
console.log('obtenerDiaSemana');
console.log(obtenerDiaSemana(1));
console.log(obtenerDiaSemana(4));
console.log(obtenerDiaSemana(7));

// esVocal
console.log('esVocal');
console.log(esVocal('B'));
console.log(esVocal('a'));
// console.log(esVocal(1));

// evaluarNumeros
console.log('evaluarNumeros');
evaluarNumeros(1, 2, 3);
evaluarNumeros(0, -1, 0);
evaluarNumeros(-1, -2, -3);
evaluarNumeros(0, 0, 0);