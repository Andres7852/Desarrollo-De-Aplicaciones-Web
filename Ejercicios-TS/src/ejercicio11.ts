// ============================================
// EJERCICIO 11
// Crear un array de estudiantes donde cada estudiante
// tiene nombre, semestre y un array de materias.
// Cada materia tiene nombre y nota.
// Calcular el promedio de cada estudiante y el promedio
// de todos los estudiantes.
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

let sumaPromedios: number = 0;

for (let i = 0; i < estudiantes.length; i++) {

    let sumaNotas: number = 0;

    for (let j = 0; j < estudiantes[i].materias.length; j++) {

        sumaNotas =
            sumaNotas + estudiantes[i].materias[j].nota;
    }

    const promedioEstudiante: number =
        sumaNotas / estudiantes[i].materias.length;

    sumaPromedios =
        sumaPromedios + promedioEstudiante;

    console.log(
        "Estudiante:",
        estudiantes[i].nombre
    );

    console.log(
        "Semestre:",
        estudiantes[i].semestre
    );

    console.log(
        "Promedio:",
        promedioEstudiante
    );
}

const promedioTodos: number =
    sumaPromedios / estudiantes.length;

console.log(
    "Promedio de todos los estudiantes:",
    promedioTodos
);

export {};