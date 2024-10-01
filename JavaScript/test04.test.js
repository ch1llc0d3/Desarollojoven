const {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
//    buscaPalabras,
//    findJavaScript,
//    findMinMaxPages
} = require('./4-tarea_arrays.js');

describe('Pruebas de funciones de Arrays', () => {
    
    test('procesarPedido debe procesar correctamente el array', () => {
        const pedido = ['Juan', 'pizza', 'ensalada'];
        const resultado = procesarPedido(pedido);
        expect(resultado).toEqual(['bebida', 'pizza', 'ensalada', 'Juan']);
    });

    test('sumarPares debe procesar correctamente el array', () => {
        const numeros = [0, 4, 7, 8, 11];
        const resultado = sumarPares(numeros);
        expect(resultado).toBe(12);
    })

    test('palabrasTerminanConA debe procesar correctamente el array', () => {
        const palabras = ['pure', 'papas', 'arabe', 'almidon'];
        const resultado = palabrasTerminanConA(palabras);
    })

});