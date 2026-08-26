// ============================================
// EJERCICIO 3
// Crear un array de números y calcular la suma total.
// ============================================

const numeros: number[] = [10, 20, 30, 40, 60];

let suma: number = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log("Suma total:", suma);

export {};