// ============================================
// EJERCICIO 6
// Imprimir los números mayores a 50 del punto 3.
// ============================================

const numeros: number[] = [10, 20, 30, 40, 60];

console.log("Números mayores a 50:");

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > 50) {
        console.log(numeros[i]);
    }
}

export {};