const {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
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

    test('buscaPalabras debe procesar correctamente el array', () => {
        const words = ['casa', 'perro', 'gato', 'mesa', 'silla'];
        const word = 'gato';
        const resultado = buscaPalabras(words, word);
        expect(resultado).toEqual(['mesa', 'silla']);
    })

    test('findJavaScript debe procesar correctamente el array', () => {
        const matrix = [
            ['HTML', 'CSS', 'JavaScript'],
            ['Java', 'C++', 'Python'],
            ['Ruby', 'Go', 'Swift']
          ];
        const resultado = findJavaScript(matrix);
        expect(resultado).toEqual([0, 2]);
    });
    
    test('findMinMaxPages debe procesar correctamente el array', () => {
        const libros = [350, 120, 540, 275, 390, 130, 670];
        const resultado = findMinMaxPages(libros);
        //console.log(resultado);
        expect(resultado).toEqual([1, 6]);
    })
});