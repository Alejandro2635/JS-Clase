// Declaro variables globales para almacenar los datos para utilizarlos en diferentes metodos de la aplicación
var asignaturas = [];
var alumnos = [];
var table = [];

// Metodo que recoge el texto de los formularios y los almacena en las variables globales 
var insertData = (textAsignatura, textAlumnos) => {
    // Utilizo el metodo split para separar las asignaturas y alumnos por comas y las almaceno en sus variables globales
    // También utilizo el metodo 'trim()' para quitarle los espacios en blanco al String recibido
    asignaturas = textAlumnos.split(",").map(word => word.trim());
    alumnos = textAsignatura.split(",").map(word => word.trim());

    // Llamo al metodo que genera las notas y almacena la información en los datos de la tabla 
    insertGrades();
}

// Metodo que genera las notas y almacena la información en los datos de la tabla 
var insertGrades = () => {
    alumnos.forEach(alumno => {
        // Declaro dos Arrays 'data' para almacenar los datos de cada alumno y 'notas' para alamacenar las notas de este
        let data = [];
        let notas = [];

        // Inserto el nombre del alumno en la array de datos
        data.push(alumno);

        // bU
        for (let i = 0; i < asignaturas.length; i++) {
            let number = Math.floor(Math.random() * 1000) * 0.01;
            number = Number(number.toFixed(2));
            data.push(number);
            notas.push(number);
        }

        let media = (function (notas) {
            let suma = 0;
            notas.forEach(nota => {
                suma += nota;
            });
            let media = suma / notas.length;
            return Number(media.toFixed(2));
        })(notas);

        data.push(media);
        table.push(data);

    });

    alert("datos insertados");
}

var showTable = () => {
    let html = "<table border='1px'><tr><th>alumnos</th>"

    asignaturas.forEach(asignatura => {
        html += `<th>${asignatura}</th>`;
    });

    html += "<th>Media</th></tr>";

    table.forEach(data => {
        html += "<tr>";
        data.forEach(dataAlumno => {
            if (typeof (dataAlumno) == "number") {
                html += writeGrade(dataAlumno);
            } else {
                html += `<th>${dataAlumno}</th>`;
            }

        });
        html += "</tr>";
    });
    html += `<th>Nota Media</th>`;
    let notasMedias = [];

    for (let i = 1; i <= asignaturas.length; i++) {
        let media = 0;

        for (let j = 0; j < alumnos.length; j++) {
            media += table[j][i];

        }

        media = media / alumnos.length;
        media = Number(media.toFixed(2));

        notasMedias.push(media);
        html += writeGrade(media);

    }

    let notaTotal = (function () {
        let notaMedia = 0;
        notasMedias.forEach(nota => {
            notaMedia += nota;
        })
        notaMedia = notaMedia / notasMedias.length
        return Number(notaMedia.toFixed(2));
    })();

    html += writeGrade(notaTotal);

    // 
    document.getElementById("table").innerHTML = html;
}

var writeGrade = (grade) => {
    if (grade < 5) {
        return `<td class="baja">${grade}</td>`;
    } else if (grade >= 5 && grade < 8) {
        return `<td class="normal">${grade}</td>`;
    }

    return `<td class="alta">${grade}</td>`;
}