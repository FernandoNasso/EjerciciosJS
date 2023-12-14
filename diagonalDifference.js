// Dada una matriz cuadrada arr de tamaño n x n, donde n es un número entero positivo, 
//se te pide calcular la diferencia absoluta entre la suma de los elementos de las dos diagonales.

// La diferencia absoluta se calcula de la siguiente manera:

// Diagonal de Izquierda a Derecha (de arriba a abajo):

// Suma los elementos en la posición (i, i) para cada fila i.
// Diagonal de Derecha a Izquierda (de arriba a abajo):

// Suma los elementos en la posición (i, n - 1 - i) para cada fila i.
// La diferencia absoluta es la resta de la suma de la diagonal de izquierda a derecha y 
//la suma de la diagonal de derecha a izquierda, tomando el valor absoluto del resultado.

// Implementa la función diagonalDifference que toma una matriz arr como argumento y devuelve la diferencia 
//absoluta entre las sumas de las diagonales.

//Ejemplo:
// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

// const resultado = diagonalDifference(arr);
// console.log(resultado); // Salida esperada: 15

// Notas:

// La matriz siempre será cuadrada, es decir, el número de filas n será igual al número de columnas n.
// Puedes asumir que los elementos de la matriz son números enteros.

function diagonalDifference(arr) {
    // Write your code here
    let diagonalLeftToRight = 0;
    let diagonalRightToLeft = 0;
    
    for (let i = 0; i < arr.length; i++) {
        diagonalLeftToRight += arr[i][i];
        diagonalRightToLeft +=arr[i][arr.length - 1 - i]
    }
    
    return Math.abs(diagonalLeftToRight - diagonalRightToLeft)

}