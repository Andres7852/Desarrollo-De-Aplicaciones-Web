// ============================================
// EJERCICIO 4
// Crear un array de mínimo 1500 números aleatorios
// y calcular la suma total.
// ============================================

const numerosAleatorios: number[] = [];

for (let i = 0; i < 1500; i++) {
    const numero: number = Math.round(Math.random() * 100);
    numerosAleatorios.push(numero);
}

let sumaAleatorios: number = 0;

for (let i = 0; i < numerosAleatorios.length; i++) {
    sumaAleatorios = sumaAleatorios + numerosAleatorios[i];
}

console.log("Cantidad de números:", numerosAleatorios.length);
console.log("Suma total:", sumaAleatorios);

export {};