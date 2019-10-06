//const argv = require("yargs").argv;

const argv = require("./config/yargs").argv;
const colors = require("colors");

const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("========Por Hacer =========".green);
            console.log(tarea.descripcion);
            console.log("Esatdo: ", tarea.completado);
            console.log("==========================".green);
        }
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    default:
        console.log("Comando no reconocido");
}