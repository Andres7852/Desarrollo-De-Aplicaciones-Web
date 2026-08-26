// ============================================
// EJERCICIO 10
// Agregar la cantidad de unidades disponibles
// a cada producto y calcular el valor total
// del inventario.
// ============================================

interface ProductoInventario {
    nombre: string;
    precio: number;
    cantidad: number;
}

const inventario: ProductoInventario[] = [
    {
        nombre: "Computador",
        precio: 2500000,
        cantidad: 5
    },
    {
        nombre: "Mouse",
        precio: 80000,
        cantidad: 20
    },
    {
        nombre: "Teclado",
        precio: 150000,
        cantidad: 10
    },
    {
        nombre: "Monitor",
        precio: 900000,
        cantidad: 8
    }
];

let valorTotalInventario: number = 0;

for (let i = 0; i < inventario.length; i++) {

    const valorProducto: number =
        inventario[i].precio * inventario[i].cantidad;

    valorTotalInventario =
        valorTotalInventario + valorProducto;

    console.log(
        "Producto:",
        inventario[i].nombre,
        "Cantidad:",
        inventario[i].cantidad,
        "Valor:",
        valorProducto
    );
}

console.log(
    "Valor total del inventario:",
    valorTotalInventario
);

export {};