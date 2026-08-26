// ============================================
// EJERCICIO 7
// Crear un objeto de persona con nombre, edad
// y ciudad e imprimir sus valores.
// ============================================

interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
}

const persona1: Persona = {
    nombre: "Andrés",
    edad: 20,
    ciudad: "Medellín"
};

console.log("Nombre:", persona1.nombre);
console.log("Edad:", persona1.edad);
console.log("Ciudad:", persona1.ciudad);

export {};