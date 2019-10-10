//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/porhacer');


//tareas que debe hacer node app crear -d "Pasear al perro"
//node app listar
//node app actualizar -d "Pasear all perro" -c true

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion, argv.completado);
        console.log(borrado);
        break;
    case 'actualizarcompletado':
        let listadocompletado = porHacer.filtradofinalizado(argv.descripcion, argv.completado);

        for (let tarea of listadocompletado) {
            console.log('====Hecho====='.green);
            console.log(tarea.completado);
            console.log('Estado: ', tarea.completado);
            console.log('=================='.green);
        }
        break;


    default:
        console.log('comando no reconocido');

}