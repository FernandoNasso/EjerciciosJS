// Consigna del Ejercicio: Counting Sort

// Dada una lista de enteros, se te pide contar y devolver el número de veces que aparece cada valor como un array de enteros.

// Descripción:

// La mayoría de los algoritmos de clasificación basados en comparaciones tienen un tiempo de ejecución de n x log(n), 
//pero existe un método de clasificación llamado "counting sort" que puede superar este límite al no requerir 
//comparaciones directas.
// Counting Sort:

// Crea un array de enteros cuyo rango de índices cubre todo el rango de valores en el array a ordenar.
// Cada vez que un valor ocurre en el array original, incrementa el contador en ese índice.
// Al final, recorre tu array de conteo, imprimiendo el valor de cada índice con valor no cero.
// Ejemplo:

// javascript
// Copy code
// const arr = [1, 1, 3, 2, 1];
// Todos los valores están en el rango [0...3], así que crea un array de ceros, result = [0, 0, 0, 0]
// Los resultados de cada iteración son los siguientes:
// i	 arr[i]	  resultado
// 0	  1	     [0, 1, 0, 0]
// 1	  1	     [0, 2, 0, 0]
// 2	  3	     [0, 2, 0, 1]
// 3	  2	     [0, 2, 1, 1]
// 4	  1	     [0, 3, 1, 1]
// El array de frecuencia es [0, 3, 1, 1]. Estos valores se pueden utilizar para crear el array ordenado también: 
// ordenado=[1, 1, 1, 2, 3].
// Notas:

// Para este ejercicio, siempre devuelve un array de frecuencia con 100 elementos(de 0 a 99). El ejemplo anterior muestra solo los primeros 4 elementos, el resto son ceros.

// Función a Implementar:
/*
 * Completa la función 'countingSort' a continuación.
 *
 * La función debe devolver un ARRAY DE Frecuencia.
 * La función toma un ARRAY DE ENTEROS 'arr' como parámetro.
 */

function countingSort(arr) {
    // Escribe tu código aquí
    const frecuencia = Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        frecuencia[arr[i]]++;
    }

    return frecuencia;
}
