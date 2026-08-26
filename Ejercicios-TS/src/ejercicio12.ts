// ============================================
// EJERCICIO 12
// Imprimir el nombre de los estudiantes que
// tienen promedio mayor a 3.5.
// ============================================

interface Materia {
    nombre: string;
    nota: number;
}

interface Estudiante {
    nombre: string;
    semestre: number;
    materias: Materia[];
}

const estudiantes: Estudiante[] = [
    {
        nombre: "Andrés",
        semestre: 3,
        materias: [
            {
                nombre: "Programación",
                nota: 4.5
            },
            {
                nombre: "Bases de Datos",
                nota: 4.0
            },
            {
                nombre: "Matemáticas",
                nota: 3.5
            }
        ]
    },
    {
        nombre: "Juan",
        semestre: 2,
        materias: [
            {
                nombre: "Programación",
                nota: 3.0
            },
            {
                nombre: "Bases de Datos",
                nota: 3.8
            },
            {
                nombre: "Matemáticas",
                nota: 4.0
            }
        ]
    },
    {
        nombre: "María",
        semestre: 4,
        materias: [
            {
                nombre: "Programación",
                nota: 4.8
            },
            {
                nombre: "Bases de Datos",
                nota: 4.5
            },
            {
                nombre: "Matemáticas",
                nota: 4.2
            }
        ]
    }
];

console.log(
    "Estudiantes con promedio mayor a 3.5:"
);

for (let i = 0; i < estudiantes.length; i++) {

    let sumaNotas: number = 0;

    for (let j = 0; j < estudiantes[i].materias.length; j++) {

        sumaNotas =
            sumaNotas + estudiantes[i].materias[j].nota;
    }

    const promedioEstudiante: number =
        sumaNotas / estudiantes[i].materias.length;

    if (promedioEstudiante > 3.5) {

        console.log(
            estudiantes[i].nombre
        );
    }
}

export {};