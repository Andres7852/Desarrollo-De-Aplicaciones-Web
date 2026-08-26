// ============================================
// EJERCICIO 1
// Crear un array con 5 nombres de estudiantes
// y mostrar cada nombre en consola usando un ciclo.
// ============================================

const estudiantesNombres: string[] = [
    "Andrés",
    "Juan",
    "María",
    "Carlos",
    "Sofía"
];

for (let i = 0; i < estudiantesNombres.length; i++) {
    console.log(estudiantesNombres[i]);
}


// ============================================
// EJERCICIO 2
// Imprimir cuántos estudiantes hay en el arreglo.
// ============================================

console.log("Cantidad de estudiantes:", estudiantesNombres.length);

export {};