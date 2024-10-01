const {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
} = require('./3-funciones');

//Pruebas de las funciones

// 1. despedir
console.log('Prueba de despedir:');
despedir();

// 2. multiplicarPorDos
console.log('Prueba de multiplicarPorDos:', multiplicarPorDos(3));
console.log(multiplicarPorDos(0));

// 3. esMayorDeEdad
console.log('Prueba de esMayorDeEdad:', esMayorDeEdad(18));
console.log(esMayorDeEdad(4));

// 4. multiplicar
console.log('Prueba de multiplicar (2, 3):', multiplicar(2, 3)); 

// 5. saludarPersonalizado
console.log('Prueba de saludarPersonalizado ("Juan", "Perez"):', saludarPersonalizado('Juan', 'Perez')); 

// 6. calcularPotencia
console.log('Prueba de calcularPotencia (2, 3):', calcularPotencia(2, 3));  

// 7. resta
console.log('Prueba de restar (5, 2):', restar(5, 2));  

// 8. dividir
console.log('Prueba de dividir (10, 2):', dividir(10, 2));  

// 9. funcionMultiplicar
console.log('Prueba de funcionMultiplicar (3, 4):', funcionMultiplicar(3, 4));  

// 10. saludar
console.log('Prueba de saludar ("Pedro"):', saludar('Pedro'));  

// 11. esPar
console.log('Prueba de esPar (4):', esPar(4));   
console.log('Prueba de esPar (5):', esPar(5)); 

// 12. calcularArea
console.log('Prueba de calcularArea (3):', calcularArea(3)); 

// 13. suma (recursiva)
console.log('Prueba de suma (5):', suma(5));  

// 14. fibonacci (recursiva)
console.log('Prueba de fibonacci (6):', fibonacci(6));  

// 15. factorial (recursiva)
console.log('Prueba de factorial (5):', factorial(5));  

// 16. potencia (recursiva)
console.log('Prueba de potencia (2, 3):', potencia(2, 3));  

// 17. saludarFlecha
console.log('Prueba de saludarFlecha ("Ana"):', saludarFlecha('Ana'));  
console.log('Prueba de multiplicarFlecha (3, 5):', multiplicarFlecha(3, 5)); 