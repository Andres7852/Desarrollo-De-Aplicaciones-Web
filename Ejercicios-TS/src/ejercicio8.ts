// ============================================
// EJERCICIO 8
// Crear un array de productos (nombre y precio)
// e imprimirlos.
// ============================================

interface Producto {
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    {
        nombre: "Computador",
        precio: 2500000
    },
    {
        nombre: "Mouse",
        precio: 80000
    },
    {
        nombre: "Teclado",
        precio: 150000
    },
    {
        nombre: "Monitor",
        precio: 900000
    }
];

for (let i = 0; i < productos.length; i++) {

    console.log(
        "Nombre:",
        productos[i].nombre,
        "Precio:",
        productos[i].precio
    );
}

export {};