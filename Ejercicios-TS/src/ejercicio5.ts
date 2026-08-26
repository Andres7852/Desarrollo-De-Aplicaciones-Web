// ============================================
// EJERCICIO 5
// Calcular el promedio de los números del punto 3.
// ============================================

const numeros: number[] = [10, 20, 30, 40, 60];

let suma: number = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

const promedio: number = suma / numeros.length;

console.log("Promedio:", promedio);

export {};