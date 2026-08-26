// ============================================
// EJERCICIO 9
// Encontrar el producto con mayor precio
// e imprimirlo.
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

let productoMayor: Producto = productos[0];

for (let i = 1; i < productos.length; i++) {

    if (productos[i].precio > productoMayor.precio) {
        productoMayor = productos[i];
    }
}

console.log("Producto con mayor precio:");
console.log("Nombre:", productoMayor.nombre);
console.log("Precio:", productoMayor.precio);

export {};